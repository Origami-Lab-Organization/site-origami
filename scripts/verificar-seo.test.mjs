import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import test from "node:test";
import { auditar, inspecionarPagina, lerBase, lerInventario } from "./verificar-seo.mjs";

const SITE = "https://www.origamilab.com.br";
function html({ canonical = SITE, corpo = "", json = '{"@context":"https://schema.org","@type":"WebPage"}' } = {}) {
  return `<!doctype html><html lang="pt-BR"><head><title>Origami &amp; operação</title>
    <meta name="description" content="Uma operação com dados confiáveis.">
    <link rel="canonical" href="${canonical}">
    <script type="application/ld+json">${json}</script></head>
    <body><h1>Origami Lab</h1>${corpo}</body></html>`;
}

test("lê o inventário real sem duplicar rotas e limita a auditoria à origem autorizada", async () => {
  const { site, paginas } = await lerInventario();
  assert.equal(site, SITE);
  assert.ok(paginas.some((p) => p.caminho === "/calculadora-de-oee"));
  assert.ok(!paginas.some((p) => p.caminho.startsWith("/api/")));
  assert.equal(lerBase(["--base-url", "http://127.0.0.1:4178"], site), "http://127.0.0.1:4178");
  for (const origem of ["http://169.254.169.254", "https://example.com", `${site}/alguma-rota`, "http://usuario:senha@localhost:3000"]) {
    assert.throws(() => lerBase(["--base-url", origem], site));
  }
});

test("interpreta HTML servido e não confunde texto dentro de JSON-LD com um segundo h1", () => {
  const documento = inspecionarPagina(html({ json: '{"@type":"WebPage","description":"<h1>exemplo</h1>"}' }), SITE + "/");
  assert.deepEqual(documento.erros, []);
  assert.equal(documento.titulo, "Origami & operação");
});

test("detecta canonical relativo, noindex no header e JSON-LD malformado", () => {
  const { erros } = inspecionarPagina(html({ canonical: "/", json: "{invalido}" }), SITE + "/", new Headers({ "x-robots-tag": "googlebot: noindex" }));
  assert.equal(erros.length, 3);
  assert.ok(erros.some((erro) => erro.startsWith("canonical")));
  assert.ok(erros.includes("página pública com noindex"));
  assert.ok(erros.includes("JSON-LD inválido"));
});

test("canonical de uma página interna deve apontar para a própria URL", () => {
  const canonical = `${SITE}/integracao-de-sistemas`;
  assert.deepEqual(inspecionarPagina(html({ canonical }), canonical).erros, []);
  assert.ok(inspecionarPagina(html({ canonical: SITE }), canonical).erros.some((erro) => erro.startsWith("canonical")));
});

test("detecta revisão antiga e referências de entidade sem definição no JSON-LD", () => {
  const canonical = `${SITE}/cases/exemplo`;
  const revisao = "2026-11-18";
  const pagina = {
    "@type": "WebPage", "@id": `${canonical}#webpage`, dateModified: revisao,
    isPartOf: { "@id": `${SITE}/#site` }, publisher: { "@id": `${SITE}/#org` },
  };
  const artigo = { "@type": "Article", url: canonical, dateModified: revisao };
  const entidades = [
    { "@type": "ProfessionalService", "@id": `${SITE}/#org` },
    { "@type": "WebSite", "@id": `${SITE}/#site` },
  ];
  const json = (nos) => JSON.stringify({ "@context": "https://schema.org", "@graph": nos });
  const servido = (nos) => html({ canonical, json: json(nos) });
  const outroArtigo = { "@type": "Article", url: `${SITE}/outro`, dateModified: "2020-01-01" };
  assert.deepEqual(inspecionarPagina(servido([...entidades, pagina, artigo, outroArtigo]), canonical, new Headers(), revisao).erros, []);

  const antigos = [pagina, artigo].map((no) => ({ ...no, dateModified: "2026-09-11" }));
  const { erros } = inspecionarPagina(servido(antigos), canonical, new Headers(), revisao);
  assert.equal(erros.length, 4);
  assert.equal(erros.filter((erro) => erro.includes("dateModified")).length, 2);
  assert.ok(erros.some((erro) => erro.includes("#org sem definir")));
  assert.ok(erros.some((erro) => erro.includes("#site sem definir")));
});

test("auditoria HTTP identifica âncora quebrada, URL privada no sitemap e link Markdown partido", async (t) => {
  const servidor = createServer((req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8");
    if (req.url === "/") res.end(html({ corpo: '<a href="/#inexistente">Detalhes</a>' }));
    else if (req.url === "/sitemap.xml") res.end(`<urlset><url><loc>${SITE}/</loc></url><url><loc>${SITE}/privado</loc></url></urlset>`);
    else if (req.url === "/robots.txt") res.end(`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
    else if (req.url === "/llms.txt") res.end(`[Guia](${SITE}/guia-\n quebrado)`);
    else { res.statusCode = 404; res.end('<meta name="robots" content="noindex">Página não encontrada'); }
  });
  servidor.listen(0, "127.0.0.1");
  await once(servidor, "listening");
  t.after(() => new Promise((resolve) => servidor.close(resolve)));
  const base = `http://127.0.0.1:${servidor.address().port}`;
  const resultado = await auditar(base, { site: SITE, paginas: [{ caminho: "/" }] });
  assert.equal(resultado.falhas.length, 3);
  assert.ok(resultado.falhas.some((erro) => erro.includes("âncora inexistente")));
  assert.ok(resultado.falhas.some((erro) => erro.includes("fora do inventário público")));
  assert.ok(resultado.falhas.some((erro) => erro.includes("URL Markdown quebrada")));
});

test("auditoria compara lastmod do sitemap com a revisão do inventário", async (t) => {
  const revisao = "2026-11-18";
  const servidor = createServer((req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8");
    if (req.url === "/") res.end(html({ json: JSON.stringify({ "@type": "WebPage", url: `${SITE}/`, dateModified: revisao }) }));
    else if (req.url === "/sitemap.xml") res.end(`<urlset><url><loc>${SITE}/</loc><lastmod>2026-09-11</lastmod></url></urlset>`);
    else if (req.url === "/robots.txt") res.end(`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
    else if (req.url === "/llms.txt") res.end(`[Início](${SITE}/)`);
    else { res.statusCode = 404; res.end('<meta name="robots" content="noindex">Página não encontrada'); }
  });
  servidor.listen(0, "127.0.0.1");
  await once(servidor, "listening");
  t.after(() => new Promise((resolve) => servidor.close(resolve)));
  const resultado = await auditar(`http://127.0.0.1:${servidor.address().port}`, {
    site: SITE, paginas: [{ caminho: "/", atualizadaEm: revisao }],
  });
  assert.equal(resultado.falhas.length, 1);
  assert.ok(resultado.falhas[0].includes("lastmod deve corresponder a 2026-11-18"));
});
