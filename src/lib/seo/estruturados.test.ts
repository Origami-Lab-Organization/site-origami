import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import sitemap from "@/app/sitemap";
import { atualizacaoDaPagina, PAGINAS, SITE } from "@/conteudo/paginas";
import { grafoDaPagina, ORGANIZACAO, SITE_NODE } from "./estruturados";

test("sitemap e grafo usam a mesma revisão, mesmo com uma data antiga no conteúdo", () => {
  const caminho = "/ia-na-industria";
  const grafo = grafoDaPagina({
    caminho,
    titulo: "IA na indústria",
    descricao: "Aplicações e limites de IA na operação.",
    atualizadaEm: "2020-01-01",
    migalhas: [{ nome: "IA na indústria", caminho }],
    principal: {
      "@type": "Article",
      datePublished: "2020-01-01",
      dateModified: "2020-01-01",
      author: { "@id": ORGANIZACAO["@id"] },
    },
  })["@graph"];
  const pagina = grafo.find((no) => no["@type"] === "WebPage");
  const artigo = grafo.find((no) => no["@type"] === "Article");
  const revisao = sitemap().find((pagina) => pagina.url === `${SITE}${caminho}`)?.lastModified;

  assert.equal(pagina?.dateModified, revisao);
  assert.equal(artigo?.dateModified, revisao);
  assert.equal(artigo?.datePublished, "2020-01-01");
  assert.equal(grafo.filter((no) => no["@id"] === ORGANIZACAO["@id"]).length, 1);
  assert.equal(grafo.filter((no) => no["@id"] === SITE_NODE["@id"]).length, 1);
});

test("grafo preserva um nó principal que não declara datas de conteúdo", () => {
  const grafo = grafoDaPagina({
    caminho: "/calculadora-de-oee",
    titulo: "Calculadora de OEE",
    descricao: "Calcule o OEE da sua operação.",
    migalhas: [{ nome: "Calculadora de OEE", caminho: "/calculadora-de-oee" }],
    principal: { "@type": "WebApplication", applicationCategory: "BusinessApplication" },
  })["@graph"];
  const ferramenta = grafo.find((no) => no["@type"] === "WebApplication");

  assert.ok(ferramenta);
  assert.equal("datePublished" in ferramenta, false);
  assert.equal("dateModified" in ferramenta, false);
});

test("documentos fora do sitemap precisam informar a data de revisão", () => {
  assert.equal(atualizacaoDaPagina("/politica-de-privacidade", "2026-11-17"), "2026-11-17");
  assert.throws(() => atualizacaoDaPagina("/rota-sem-cadastro"), /sem data de revisão/);
  assert.equal(sitemap().some((pagina) => pagina.url.endsWith("/politica-de-privacidade")), false);
});

test("links do llms.txt não contêm quebras de linha e levam a páginas do inventário", () => {
  const texto = readFileSync(new URL("../../../public/llms.txt", import.meta.url), "utf8");
  const destinos = [...texto.matchAll(/\]\(([^)]+)\)/g)].map((resultado) => resultado[1]);
  assert.ok(destinos.length > 0);

  for (const destino of destinos) {
    assert.doesNotMatch(destino, /\s/, `URL quebrada: ${destino}`);
    const endereco = new URL(destino);
    assert.equal(endereco.origin, SITE);
    assert.ok(PAGINAS.some((pagina) => pagina.caminho === endereco.pathname), `URL ausente do inventário: ${destino}`);
  }
});
