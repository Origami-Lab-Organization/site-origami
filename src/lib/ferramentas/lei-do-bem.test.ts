import test from "node:test";
import assert from "node:assert/strict";
import {
  avaliarRequisitos,
  economiaComLucro,
  ENTRADAS_VAZIAS,
  exclusaoBruta,
  percentualDeExclusao,
  simular,
  type Entradas,
} from "./lei-do-bem";

const ELEGIVEL: Entradas = {
  ...ENTRADAS_VAZIAS,
  regime: "lucro-real",
  lucroFiscal: "sim",
  regularidade: "sim",
  dispendio: 1_000_000,
  pesquisadores: "sem-aumento",
  patente: "nao",
};

const perto = (a: number, b: number) => assert.ok(Math.abs(a - b) < 0.01, `${a} ≠ ${b}`);

/* ---------------------------------------------------------- requisitos */

test("sem as três respostas, o veredito é incompleto", () => {
  assert.deepEqual(avaliarRequisitos({ regime: "", lucroFiscal: "sim", regularidade: "sim" }), { veredito: "incompleto", motivo: null });
  assert.equal(simular(ENTRADAS_VAZIAS).veredito, "incompleto");
});

test("lucro presumido e Simples: a Lei do Bem não se aplica", () => {
  for (const regime of ["lucro-presumido", "simples"] as const) {
    const r = simular({ ...ELEGIVEL, regime });
    assert.equal(r.veredito, "nao-se-aplica");
    assert.equal(r.motivo, "regime");
    assert.equal(r.economiaMaxima, 0);
  }
});

test("prejuízo fiscal ou irregularidade: não elegível neste ano, com o motivo", () => {
  assert.deepEqual(avaliarRequisitos({ ...ELEGIVEL, lucroFiscal: "nao" }), { veredito: "nao-elegivel-agora", motivo: "prejuizo" });
  assert.deepEqual(avaliarRequisitos({ ...ELEGIVEL, regularidade: "nao" }), { veredito: "nao-elegivel-agora", motivo: "regularidade" });
  assert.equal(simular({ ...ELEGIVEL, lucroFiscal: "nao" }).exclusao, 0);
});

test("qualquer 'não sei' vira precisa de análise, mas a estimativa sai", () => {
  for (const campo of ["regime", "lucroFiscal", "regularidade"] as const) {
    const r = simular({ ...ELEGIVEL, [campo]: "nao-sei" });
    assert.equal(r.veredito, "precisa-de-analise", campo);
    assert.equal(r.motivo, "duvida");
    assert.ok(r.economiaMinima > 0);
  }
});

test("elegível sem dispêndio informado ainda é incompleto", () => {
  assert.deepEqual([simular({ ...ELEGIVEL, dispendio: "" }).veredito, simular({ ...ELEGIVEL, dispendio: 0 }).veredito], ["incompleto", "incompleto"]);
  assert.equal(simular({ ...ELEGIVEL, dispendio: -5 }).veredito, "incompleto");
});

/* ---------------------------------------------------------- percentuais */

test("60% sem aumento de pesquisadores, 70% até 5%, 80% acima de 5% (Decreto 5.798, art. 8º)", () => {
  assert.equal(percentualDeExclusao("sem-aumento"), 60);
  assert.equal(percentualDeExclusao("ate-5"), 70);
  assert.equal(percentualDeExclusao("acima-5"), 80);
  assert.equal(percentualDeExclusao(""), 60);
});

test("patente soma 20% do dispêndio vinculado, nunca mais que o dispêndio total", () => {
  assert.equal(exclusaoBruta({ dispendio: 1_000_000, pesquisadores: "sem-aumento", patente: "sim", dispendioPatente: 200_000 }), 640_000);
  assert.equal(exclusaoBruta({ dispendio: 1_000_000, pesquisadores: "sem-aumento", patente: "sim", dispendioPatente: 5_000_000 }), 800_000);
  assert.equal(exclusaoBruta({ dispendio: 1_000_000, pesquisadores: "sem-aumento", patente: "nao", dispendioPatente: 200_000 }), 600_000);
  assert.equal(exclusaoBruta({ dispendio: 1_000_000, pesquisadores: "sem-aumento", patente: "sim", dispendioPatente: "" }), 600_000);
});

/* ---------------------------------------------------------- economia */

test("sem lucro informado, a economia é uma faixa de 24% a 34% da exclusão", () => {
  const r = simular(ELEGIVEL);
  assert.equal(r.veredito, "elegivel");
  assert.equal(r.percentual, 60);
  assert.equal(r.exclusao, 600_000);
  perto(r.economiaMinima, 144_000);
  perto(r.economiaMaxima, 204_000);
  assert.equal(r.limitadaPeloLucro, false);
  assert.equal(r.memoria.length, 2);
  assert.match(r.memoria[1], /24%.*34%/);
});

test("com lucro alto informado, o adicional incide sobre toda a exclusão", () => {
  const r = simular({ ...ELEGIVEL, lucroReal: 10_000_000 });
  perto(r.economiaMinima, 600_000 * 0.34);
  assert.equal(r.economiaMinima, r.economiaMaxima);
  assert.match(r.memoria.at(-1) ?? "", /adicional de 10% só na parte/);
});

test("adicional só na parte do lucro acima de R$ 240 mil por ano", () => {
  perto(economiaComLucro(100_000, 300_000), 100_000 * 0.24 + 60_000 * 0.1);
  perto(economiaComLucro(100_000, 200_000), 100_000 * 0.24);
});

test("exclusão limitada ao lucro real informado (art. 19, §5º)", () => {
  const r = simular({ ...ELEGIVEL, lucroReal: 250_000 });
  assert.equal(r.exclusao, 250_000);
  assert.equal(r.limitadaPeloLucro, true);
  perto(r.economiaMinima, 250_000 * 0.24 + 10_000 * 0.1);
  assert.ok(r.memoria.some((l) => l.startsWith("Limitada ao lucro real")));
});

test("memória de cálculo mostra a patente quando há", () => {
  const r = simular({ ...ELEGIVEL, pesquisadores: "acima-5", patente: "sim", dispendioPatente: 100_000 });
  assert.equal(r.exclusao, 820_000);
  assert.ok(r.memoria.some((l) => l.startsWith("Patente ou cultivar")));
});
