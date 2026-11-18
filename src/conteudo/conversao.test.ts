import assert from "node:assert/strict";
import test from "node:test";
import { caminhoDaConversa, contextoDaConversa, contextoDoReferrer, ehFrente, frenteDaPagina, paginaDeInteresse } from "./conversao";
import { PAGINAS, SITE } from "./paginas";

test("a passagem de conteúdo para contato mantém assunto e página de interesse", () => {
  const caminho = "/lei-do-bem-desenvolvimento-de-software";
  const destino = new URL(caminhoDaConversa(frenteDaPagina(caminho), caminho), SITE);
  assert.equal(destino.pathname, "/conversar");
  assert.deepEqual(contextoDaConversa(destino.searchParams.get("tema"), destino.searchParams.get("de")), { frente: "inovacao", pagina: caminho });
  assert.equal(PAGINAS.some((pagina) => pagina.caminho === "/conversar"), false);
});

test("contexto não aceita URL externa, rota privada, texto livre nem parâmetros repetidos", () => {
  for (const pagina of ["https://example.com/", "//example.com/", "/api/lead", "/conversar", "/lei-do-bem?email=a@b.com", ["/lei-do-bem"]]) {
    assert.equal(paginaDeInteresse(pagina), "/");
  }
  for (const tema of ["__proto__", "constructor", "texto livre", ["inovacao"]]) assert.equal(ehFrente(tema), false);
  assert.deepEqual(contextoDaConversa("invalido", "/calculadora-de-oee"), { frente: "producao", pagina: "/calculadora-de-oee" });
});

test("CTAs genéricos recuperam o contexto da página interna, sem importar o referrer externo", () => {
  assert.deepEqual(contextoDoReferrer(`${SITE}/simulador-lei-do-bem?utm_source=teste`, SITE), { frente: "inovacao", pagina: "/simulador-lei-do-bem" });
  assert.deepEqual(contextoDoReferrer("http://127.0.0.1:4178/mes-vs-erp", "http://127.0.0.1:4178"), { frente: "producao", pagina: "/mes-vs-erp" });
  for (const referrer of ["https://example.com/lei-do-bem", `${SITE}.evil.com/lei-do-bem`, "inválido", ""]) {
    assert.deepEqual(contextoDoReferrer(referrer, SITE), { frente: "sistemas", pagina: "/" });
  }
});
