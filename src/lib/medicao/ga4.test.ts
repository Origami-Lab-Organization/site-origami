import test from "node:test";
import assert from "node:assert/strict";
import { CONFIG_DO_GA4, ENDERECO_DO_GTAG, idDoGa4Valido, iniciarGtag, paraGa4, type JanelaDoGa4 } from "./ga4";

test("ID de medição: só o formato G-XXXX, com espaço em volta tolerado", () => {
  assert.equal(idDoGa4Valido("G-ABC123XYZ"), true);
  assert.equal(idDoGa4Valido(" G-ABC123XYZ\n"), true);
  assert.equal(idDoGa4Valido(undefined), false);
  assert.equal(idDoGa4Valido(""), false);
  assert.equal(idDoGa4Valido("UA-12345-1"), false);
  assert.equal(idDoGa4Valido("GTM-ABC123"), false);
  assert.equal(idDoGa4Valido("g-abc123"), false);
});

test("parâmetros: mantém texto, número e booleano; descarta vazio, objeto e número inválido", () => {
  const saida = paraGa4({
    canal: "busca_organica",
    caminhos: 3,
    novo: false,
    utm_term: undefined,
    origem: "",
    lista: ["a"],
    objeto: { a: 1 },
    infinito: Infinity,
    nan: Number.NaN,
    nulo: null,
  });
  assert.deepEqual(saida, { canal: "busca_organica", caminhos: 3, novo: false });
});

test("parâmetros: nenhum campo pessoal chega ao GA4, nem com outra caixa", () => {
  const saida = paraGa4({ ferramenta: "calculadora-de-oee", email: "a@b.com", Telefone: "31999999999", whatsapp: "31", nome: "Ana", cnpj: "1", mensagem: "oi" });
  assert.deepEqual(saida, { ferramenta: "calculadora-de-oee" });
});

test("parâmetros: nome inválido para o GA4 fica de fora", () => {
  const longo = "a".repeat(41);
  const limite = "a".repeat(40);
  const saida = paraGa4({ [longo]: "x", "1campo": "x", "com-hifen": "x", [limite]: "ok" });
  assert.deepEqual(saida, { [limite]: "ok" });
});

test("parâmetros: texto cortado em 100 caracteres e no máximo 25 parâmetros", () => {
  assert.equal((paraGa4({ cta_texto: "x".repeat(150) }).cta_texto as string).length, 100);
  const muitos = Object.fromEntries(Array.from({ length: 30 }, (_, i) => [`p${i}`, i]));
  const saida = paraGa4({ email: "fora@x.com", ...muitos });
  assert.equal(Object.keys(saida).length, 25);
  assert.equal(saida.p0, 0);
  assert.equal(saida.p24, 24);
  assert.equal("p25" in saida, false);
});

test("gtag segue o snippet do Google: arguments no dataLayer, js, config e o script uma vez", () => {
  const root: JanelaDoGa4 = { dataLayer: [{ event: "anterior" }] };
  const scripts: string[] = [];
  const gtag = iniciarGtag(root, "G-TESTE1", (src) => scripts.push(src));
  assert.equal(root.gtag, gtag);
  assert.deepEqual(scripts, [`${ENDERECO_DO_GTAG}G-TESTE1`]);
  const [anterior, js, config] = root.dataLayer ?? [];
  assert.deepEqual(anterior, { event: "anterior" });
  assert.equal(Object.prototype.toString.call(js), "[object Arguments]");
  const argsDoJs = Array.from(js as ArrayLike<unknown>);
  assert.equal(argsDoJs[0], "js");
  assert.ok(argsDoJs[1] instanceof Date);
  assert.deepEqual(Array.from(config as ArrayLike<unknown>), ["config", "G-TESTE1", CONFIG_DO_GA4]);
  gtag("event", "tool_start", { ferramenta: "x" });
  assert.deepEqual(Array.from(root.dataLayer?.at(-1) as ArrayLike<unknown>), ["event", "tool_start", { ferramenta: "x" }]);
});

test("sem dataLayer na janela, o gtag cria um", () => {
  const root: JanelaDoGa4 = {};
  iniciarGtag(root, "G-TESTE1", () => {});
  assert.equal(root.dataLayer?.length, 2);
});

test("GA4 só para análise: sem Google Signals e sem personalização de anúncios", () => {
  assert.deepEqual(CONFIG_DO_GA4, { allow_google_signals: false, allow_ad_personalization_signals: false });
});
