import test from "node:test";
import assert from "node:assert/strict";
import {
  DIMENSOES,
  NIVEIS,
  PERGUNTAS,
  completo,
  diagnosticar,
  nivelDa,
  pontuacaoDaDimensao,
  recomendacoes,
  respondidas,
  respostasResumidas,
  type Respostas,
} from "./diagnostico";

/** Todas as perguntas com a mesma opção (0 = melhor, 3 = pior). */
const todas = (indice: number): Respostas => Object.fromEntries(PERGUNTAS.map((p) => [p.id, indice]));

test("questionário: 11 perguntas, 5 dimensões, 4 opções de 3 a 0 pontos", () => {
  assert.equal(PERGUNTAS.length, 11);
  assert.deepEqual(new Set(PERGUNTAS.map((p) => p.dimensao)), new Set(DIMENSOES.map((d) => d.id)));
  for (const p of PERGUNTAS) assert.deepEqual(p.opcoes.map((o) => o.pontos), [3, 2, 1, 0], p.id);
  assert.equal(new Set(PERGUNTAS.map((p) => p.id)).size, PERGUNTAS.length);
});

test("progresso e resultado só com tudo respondido", () => {
  assert.equal(respondidas({}), 0);
  assert.equal(diagnosticar({ p1: 0 }), null);
  assert.equal(completo(todas(0)), true);
  assert.equal(respondidas({ p1: 9, p2: -1, x: 0 }), 0);
});

test("pontuação por dimensão e geral", () => {
  const max = diagnosticar(todas(0));
  assert.equal(max?.geral, 100);
  assert.equal(max?.nivel.id, "integrada");
  const min = diagnosticar(todas(3));
  assert.equal(min?.geral, 0);
  assert.equal(min?.nivel.id, "inicial");
  assert.equal(pontuacaoDaDimensao("dados", { p1: 0, p2: 3 }), 50);
  assert.equal(pontuacaoDaDimensao("ia", { p9: 1 }), 22);
});

test("faixas de maturidade", () => {
  assert.deepEqual([0, 34, 35, 59, 60, 79, 80, 100].map((v) => nivelDa(v).id), [
    "inicial", "inicial", "em-estruturacao", "em-estruturacao", "estruturada", "estruturada", "integrada", "integrada",
  ]);
  assert.equal(nivelDa(150).id, NIVEIS[NIVEIS.length - 1].id);
});

test("recomenda as três dimensões mais fracas, cada uma com link", () => {
  const r: Respostas = { ...todas(0), p5: 3, p6: 3, p7: 3, p8: 2, p3: 2 };
  const res = diagnosticar(r);
  assert.deepEqual(res?.recomendacoes.map((x) => x.dimensao), ["legado", "processos", "integracao"]);
  for (const x of res?.recomendacoes ?? []) assert.match(x.href, /^\/[a-z-]+$/);
});

test("empate segue a ordem das dimensões", () => {
  const iguais = { dados: 50, integracao: 50, legado: 50, processos: 50, ia: 50 };
  assert.deepEqual(recomendacoes(iguais, todas(1)).map((x) => x.dimensao), ["dados", "integracao", "legado"]);
});

test("a recomendação muda conforme a resposta-chave da dimensão", () => {
  const fraco = { dados: 90, integracao: 10, legado: 90, processos: 10, ia: 10 };
  const comChao = recomendacoes(fraco, { p4: 3, p7: 3, p9: 3 });
  assert.deepEqual(comChao.map((x) => x.href), ["/integracao-erp-chao-de-fabrica", "/planejamento-de-producao", "/ia-na-industria"]);
  assert.equal(comChao[2].titulo, "Organizar o dado antes da IA");
  const semChao = recomendacoes(fraco, { p4: 0, p7: 0, p9: 0 });
  assert.deepEqual(semChao.map((x) => x.href), ["/integracao-de-sistemas", "/automacao-de-processos-industriais", "/ia-na-industria"]);
  assert.equal(semChao[2].titulo, "Escolher o primeiro caso de IA");
});

test("respostas resumidas para o e-mail", () => {
  const r = respostasResumidas({ p1: 1, p4: 2, p99: 0, p2: 7 });
  assert.deepEqual(r, { "Quando a diretoria sabe a produção do dia": "No dia seguinte", "Chão de fábrica e ERP": "Papel ou planilha, lançado depois" });
});
