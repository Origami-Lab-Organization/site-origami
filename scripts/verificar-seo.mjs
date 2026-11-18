#!/usr/bin/env node
// Auditoria HTTP somente de leitura. Usa o inventário e as dependências do repo.
// node scripts/verificar-seo.mjs --base-url http://127.0.0.1:3000
// node scripts/verificar-seo.mjs --base-url https://www.origamilab.com.br
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const require = createRequire(import.meta.url);
// O Next já distribui este parser. Conferir este import ao atualizar o framework.
const { parse } = require("next/dist/compiled/node-html-parser");
const RAIZ = new URL("../", import.meta.url);
const TIMEOUT_MS = 15_000;
const CONCORRENCIA = 3;

function literal(no) {
  if (ts.isStringLiteral(no)) return no.text;
  if (ts.isNumericLiteral(no)) return Number(no.text);
  if (ts.isArrayLiteralExpression(no)) return no.elements.map(literal);
  if (ts.isAsExpression(no) || ts.isSatisfiesExpression(no)) return literal(no.expression);
  if (ts.isObjectLiteralExpression(no)) {
    return Object.fromEntries(no.properties.map((p) => {
      if (!ts.isPropertyAssignment(p) || !(ts.isIdentifier(p.name) || ts.isStringLiteral(p.name))) {
        throw new Error("inventário deve conter somente propriedades literais");
      }
      return [p.name.text, literal(p.initializer)];
    }));
  }
  throw new Error("valor não literal no inventário de páginas");
}

export async function lerInventario() {
  const arquivo = await readFile(new URL("src/conteudo/paginas.ts", RAIZ), "utf8");
  const arvore = ts.createSourceFile("paginas.ts", arquivo, ts.ScriptTarget.Latest, true);
  const valores = {};
  for (const declaracao of arvore.statements) {
    if (!ts.isVariableStatement(declaracao)) continue;
    for (const item of declaracao.declarationList.declarations) {
      if (ts.isIdentifier(item.name) && ["SITE", "PAGINAS"].includes(item.name.text) && item.initializer) {
        valores[item.name.text] = literal(item.initializer);
      }
    }
  }
  const { SITE: site, PAGINAS: paginas } = valores;
  if (typeof site !== "string" || new URL(site).origin !== site || !Array.isArray(paginas) || !paginas.length) {
    throw new Error("SITE/PAGINAS inválidos no inventário");
  }
  const caminhos = paginas.map((p) => p.caminho);
  if (new Set(caminhos).size !== caminhos.length || caminhos.some((c) => typeof c !== "string" || !/^\/(?!\/)[^?#\s]*$/.test(c))) {
    throw new Error("caminhos inválidos ou duplicados no inventário");
  }
  return { site, paginas };
}

export function lerBase(argumentos, site) {
  if (argumentos.includes("--help")) return null;
  let valor;
  if (argumentos.length === 2 && argumentos[0] === "--base-url") valor = argumentos[1];
  else if (argumentos.length === 1 && argumentos[0].startsWith("--base-url=")) valor = argumentos[0].slice(11);
  else throw new Error("informe --base-url http://127.0.0.1:3000 ou --base-url " + site);
  const base = new URL(valor);
  const local = ["127.0.0.1", "localhost", "[::1]"].includes(base.hostname);
  if (base.username || base.password || base.pathname !== "/" || base.search || base.hash ||
      !(base.origin === site || (local && ["http:", "https:"].includes(base.protocol)))) {
    throw new Error("a origem deve ser localhost ou a origem canônica, sem credenciais, caminho, query ou fragmento");
  }
  return base.origin;
}

function tokensRobots(raiz, cabecalhos) {
  return [cabecalhos.get("x-robots-tag") ?? "", ...raiz.querySelectorAll("meta[name]")
    .filter((no) => ["robots", "googlebot", "bingbot"].includes(no.getAttribute("name").toLowerCase()))
    .map((no) => no.getAttribute("content") ?? "")].join(",").toLowerCase().split(/[\s,:]+/);
}

function correspondeARevisao(valor, esperada) {
  return typeof valor === "string" && (valor === esperada ||
    (valor.startsWith(`${esperada}T`) && Number.isFinite(Date.parse(valor))));
}

function objetosJson(valor, encontrados = []) {
  if (Array.isArray(valor)) valor.forEach((item) => objetosJson(item, encontrados));
  else if (valor && typeof valor === "object") {
    encontrados.push(valor);
    Object.values(valor).forEach((item) => objetosJson(item, encontrados));
  }
  return encontrados;
}

export function inspecionarPagina(html, canonicalEsperado, cabecalhos = new Headers(), atualizadaEm) {
  const raiz = parse(html);
  const erros = [];
  const titulos = raiz.querySelectorAll("title");
  if (titulos.length !== 1 || !titulos[0]?.text.trim()) erros.push("title ausente, vazio ou duplicado");
  const descricoes = raiz.querySelectorAll('meta[name="description"]');
  if (descricoes.length !== 1 || !descricoes[0]?.getAttribute("content")?.trim()) erros.push("description ausente, vazia ou duplicada");
  const canonicals = raiz.querySelectorAll('link[rel="canonical"]');
  let canonicalObtido;
  try { canonicalObtido = new URL(canonicals[0]?.getAttribute("href")).href; } catch { /* ausente ou relativo */ }
  if (canonicals.length !== 1 || canonicalObtido !== canonicalEsperado) {
    erros.push(`canonical deve ser ${canonicalEsperado}`);
  }
  const robots = tokensRobots(raiz, cabecalhos);
  if (robots.includes("noindex") || robots.includes("none")) erros.push("página pública com noindex");
  if (raiz.querySelectorAll("h1").length !== 1) erros.push("a página deve ter exatamente um h1");
  const esquemas = raiz.querySelectorAll('script[type="application/ld+json"]');
  if (!esquemas.length) erros.push("JSON-LD ausente");
  const objetos = [];
  for (const esquema of esquemas) {
    try {
      const dados = JSON.parse(esquema.rawText);
      if (!dados || typeof dados !== "object") throw new Error("objeto esperado");
      objetosJson(dados, objetos);
    } catch {
      erros.push("JSON-LD inválido");
    }
  }
  const origem = new URL(canonicalEsperado).origin;
  for (const entidade of ["org", "site"]) {
    const id = `${origem}/#${entidade}`;
    if (objetos.some((objeto) => objeto["@id"] === id) &&
        !objetos.some((objeto) => objeto["@id"] === id && objeto["@type"])) {
      erros.push(`JSON-LD referencia #${entidade} sem definir a entidade`);
    }
  }
  if (atualizadaEm) {
    for (const objeto of objetos) {
      const tipos = Array.isArray(objeto["@type"]) ? objeto["@type"] : [objeto["@type"]];
      if (!tipos.some((tipo) => ["WebPage", "CollectionPage", "Article", "BlogPosting"].includes(tipo))) continue;
      let endereco;
      try {
        endereco = new URL(objeto.url ?? objeto["@id"]);
        endereco.hash = "";
      } catch { continue; }
      if (endereco.href === canonicalEsperado && !correspondeARevisao(objeto.dateModified, atualizadaEm)) {
        erros.push(`JSON-LD ${tipos.join("/")}: dateModified deve corresponder a ${atualizadaEm}`);
      }
    }
  }
  return { raiz, erros, titulo: titulos[0]?.text.trim() ?? "" };
}

async function emLotes(itens, executar) {
  let proximo = 0;
  await Promise.all(Array.from({ length: Math.min(CONCORRENCIA, itens.length) }, async () => {
    while (proximo < itens.length) await executar(itens[proximo++]);
  }));
}

export async function auditar(base, { site, paginas }) {
  const falhas = [];
  const documentos = new Map();
  const requisicoes = new Map();
  const falha = (caminho, motivo) => falhas.push(`${caminho}: ${motivo}`);
  const canonical = (caminho) => new URL(caminho, site).href;
  function obter(caminho) {
    if (!requisicoes.has(caminho)) {
      requisicoes.set(caminho, (async () => {
        try {
          const resposta = await fetch(new URL(caminho, base), {
            redirect: "manual", signal: AbortSignal.timeout(TIMEOUT_MS),
            headers: { "User-Agent": "OrigamiSeoAudit/1.0" },
          });
          return { resposta, corpo: await resposta.text() };
        } catch (erro) {
          falha(caminho, `requisição falhou (${erro.message})`);
          return null;
        }
      })());
    }
    return requisicoes.get(caminho);
  }
  await emLotes(paginas, async ({ caminho, atualizadaEm }) => {
    const obtido = await obter(caminho);
    if (!obtido) return;
    const { resposta, corpo } = obtido;
    if (resposta.status !== 200) return falha(caminho, `HTTP ${resposta.status}, esperado 200 sem redirect`);
    if (!resposta.headers.get("content-type")?.includes("text/html")) return falha(caminho, "resposta não é HTML");
    const documento = inspecionarPagina(corpo, canonical(caminho), resposta.headers, atualizadaEm);
    documentos.set(caminho, documento);
    documento.erros.forEach((erro) => falha(caminho, erro));
  });

  const titulos = new Map();
  for (const [caminho, documento] of documentos) {
    if (titulos.has(documento.titulo)) falha(caminho, `title igual ao de ${titulos.get(documento.titulo)}`);
    titulos.set(documento.titulo, caminho);
  }

  const sitemap = await obter("/sitemap.xml");
  if (sitemap) {
    const entradas = parse(sitemap.corpo).querySelectorAll("url");
    const urls = entradas.map((no) => no.querySelector("loc")?.text.trim()).filter(Boolean);
    const esperadas = new Set(paginas.map(({ caminho }) => canonical(caminho)));
    if (sitemap.resposta.status !== 200 || !urls.length) falha("/sitemap.xml", "sitemap ausente ou vazio");
    if (new Set(urls).size !== urls.length) falha("/sitemap.xml", "URLs duplicadas");
    urls.filter((valor) => !esperadas.has(valor)).forEach((valor) => falha("/sitemap.xml", `URL fora do inventário público: ${valor}`));
    [...esperadas].filter((valor) => !urls.includes(valor)).forEach((valor) => falha("/sitemap.xml", `URL pública ausente: ${valor}`));
    for (const entrada of entradas) {
      const endereco = entrada.querySelector("loc")?.text.trim();
      const pagina = paginas.find(({ caminho }) => canonical(caminho) === endereco);
      if (pagina?.atualizadaEm && !correspondeARevisao(entrada.querySelector("lastmod")?.text.trim(), pagina.atualizadaEm)) {
        falha("/sitemap.xml", `${endereco}: lastmod deve corresponder a ${pagina.atualizadaEm}`);
      }
    }
  }

  const robots = await obter("/robots.txt");
  if (robots && (robots.resposta.status !== 200 || !robots.corpo.includes(`Sitemap: ${site}/sitemap.xml`))) {
    falha("/robots.txt", "HTTP inválido ou referência canônica ao sitemap ausente");
  }
  const llms = await obter("/llms.txt");
  if (llms) {
    if (llms.resposta.status !== 200) falha("/llms.txt", `HTTP ${llms.resposta.status}`);
    for (const [, destino] of llms.corpo.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
      if (/\s/.test(destino)) falha("/llms.txt", `URL Markdown quebrada: ${destino.replace(/\s+/g, " ")}`);
      else if (destino.startsWith(site) && !paginas.some(({ caminho }) => canonical(caminho) === destino)) {
        falha("/llms.txt", `link canônico fora do inventário: ${destino}`);
      }
    }
  }
  const inexistente = await obter("/__verificacao-seo-pagina-inexistente__");
  if (inexistente) {
    if (inexistente.resposta.status !== 404) falha("404", `HTTP ${inexistente.resposta.status}, esperado 404`);
    if (!tokensRobots(parse(inexistente.corpo), inexistente.resposta.headers).includes("noindex")) falha("404", "noindex ausente");
  }

  // Verifica destinos públicos e fragmentos reais sem rastrear links externos.
  const links = new Map();
  for (const [origem, { raiz }] of documentos) {
    for (const elemento of raiz.querySelectorAll("a[href]")) {
      const href = elemento.getAttribute("href");
      let destino;
      try { destino = new URL(href, canonical(origem)); } catch { falha(origem, "link inválido: " + href); continue; }
      if (![site, base].includes(destino.origin)) continue;
      const chave = destino.pathname + destino.search;
      if (!links.has(chave)) links.set(chave, []);
      links.get(chave).push({ origem, hash: destino.hash });
    }
  }
  await emLotes([...links], async ([caminho, referencias]) => {
    const obtido = await obter(caminho);
    if (!obtido) return;
    const { resposta, corpo } = obtido;
    if (resposta.status !== 200) return falha(caminho, `link interno retorna HTTP ${resposta.status} (em ${referencias[0].origem})`);
    if (!resposta.headers.get("content-type")?.includes("text/html")) return;
    const raiz = documentos.get(caminho)?.raiz ?? parse(corpo);
    const ids = new Set(raiz.querySelectorAll("[id]").map((no) => no.getAttribute("id")));
    const ancoras = new Set(raiz.querySelectorAll("a[name]").map((no) => no.getAttribute("name")));
    for (const { origem, hash } of referencias) {
      if (!hash || hash === "#") continue;
      let id;
      try { id = decodeURIComponent(hash.slice(1)); } catch { falha(origem, `fragmento inválido: ${caminho}${hash}`); continue; }
      if (!ids.has(id) && !ancoras.has(id)) falha(origem, `âncora inexistente: ${caminho}${hash}`);
    }
  });

  return { paginas: paginas.length, requisicoes: requisicoes.size, falhas: [...new Set(falhas)] };
}

async function main() {
  const inventario = await lerInventario();
  const argumentos = process.argv.slice(2);
  const json = argumentos.includes("--json");
  const base = lerBase(argumentos.filter((valor) => valor !== "--json"), inventario.site);
  if (!base) {
    console.log("Uso: node scripts/verificar-seo.mjs --base-url http://127.0.0.1:3000 [--json]\nProdução: --base-url " + inventario.site);
    return;
  }
  if (!json) console.log(`Verificando ${inventario.paginas.length} páginas em ${base}; canonical esperado: ${inventario.site}`);
  const resultado = await auditar(base, inventario);
  if (json) {
    console.log(JSON.stringify({
      verificadoEm: new Date().toISOString(), base, canonical: inventario.site, ...resultado, avisos: [],
      limitacoes: [
        "HTTP e HTML servidos; não executa JavaScript nem mede Core Web Vitals.",
        "Não consulta Search Console nem comprova indexação, ranking ou citação por IA.",
        "Não verifica links externos nem elegibilidade de rich results.",
        ...(base === inventario.site ? [] : ["Arquivos públicos locais refletem o filesystem atual; páginas HTML podem vir do build anterior."]),
      ],
    }, null, 2));
  } else {
    resultado.falhas.forEach((falha) => console.error("FALHA " + falha));
    console.log(`${resultado.paginas} páginas públicas; ${resultado.requisicoes} requisições; ${resultado.falhas.length} falhas.`);
  }
  process.exitCode = resultado.falhas.length ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((erro) => { console.error("Erro na verificação SEO: " + erro.message); process.exitCode = 1; });
}
