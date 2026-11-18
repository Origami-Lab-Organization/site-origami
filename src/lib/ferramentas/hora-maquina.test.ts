import test from "node:test";
import assert from "node:assert/strict";
import {
  EXEMPLO,
  calcularHoraMaquina,
  capacidade,
  capitalAnual,
  depreciacaoAnual,
  energiaPorHora,
  faixaDoAproveitamento,
  faixaDoCusto,
  horasDeTrabalho,
  manutencaoAnual,
  operadorAnual,
  type EntradaHoraMaquina,
} from "./hora-maquina";

const perto = (a: number, b: number, tol = 0.01) => assert.ok(Math.abs(a - b) <= tol, `${a} ≠ ${b}`);
const com = (extra: Partial<EntradaHoraMaquina>): EntradaHoraMaquina => ({ ...EXEMPLO, ...extra });

test("horas pagas e produtivas", () => {
  assert.deepEqual(horasDeTrabalho(EXEMPLO), { pagas: 4000, produtivas: 3000 });
  assert.deepEqual(horasDeTrabalho(com({ aproveitamento: 150 })), { pagas: 4000, produtivas: 4000 });
  assert.deepEqual(horasDeTrabalho(com({ turnosPorDia: -1 })), { pagas: 0, produtivas: 0 });
});

test("depreciação linear pela vida útil, nunca negativa", () => {
  assert.equal(depreciacaoAnual(EXEMPLO), 36_000);
  assert.equal(depreciacaoAnual(com({ valorResidual: 600_000 })), 0);
  assert.equal(depreciacaoAnual(com({ vidaUtilAnos: 0 })), 0);
});

test("custo do capital sobre o investimento médio", () => {
  assert.equal(capitalAnual(EXEMPLO), 32_400);
  assert.equal(capitalAnual(com({ taxaCapitalAnual: 0 })), 0);
});

test("energia por hora produtiva", () => {
  perto(energiaPorHora(EXEMPLO), 7.65);
  perto(energiaPorHora(com({ fatorCarga: 200 })), 12.75);
  assert.equal(energiaPorHora(com({ potenciaKw: Number.NaN })), 0);
});

test("manutenção em percentual do valor ou em reais por ano", () => {
  assert.equal(manutencaoAnual(EXEMPLO), 13_500);
  assert.equal(manutencaoAnual(com({ manutencaoModo: "valor", manutencaoValor: 20_000 })), 20_000);
});

test("operador pelas horas pagas, com divisor mensal", () => {
  perto(operadorAnual(EXEMPLO, 4000), 109_090.91);
  perto(operadorAnual(com({ operadoresPorMaquina: 0.5 }), 4000), 54_545.45);
  assert.equal(operadorAnual(com({ horasOperadorMes: 0 }), 4000), 0);
});

test("exemplo completo: hora produtiva × hora paga", () => {
  const r = calcularHoraMaquina(EXEMPLO);
  assert.ok(r);
  perto(r.custoAnual, 231_940.91);
  perto(r.porHoraProdutiva, 77.31);
  perto(r.porHoraPaga, 57.99);
  perto(r.efeitoDaOciosidade, 1 / 0.75 - 1, 0.001);
  assert.equal(r.componentes.length, 6);
  perto(
    r.componentes.reduce((s, c) => s + c.porHora, 0),
    r.porHoraProdutiva,
  );
  assert.equal(r.componentes.find((c) => c.chave === "energia")?.anual, 7.65 * 3000);
});

test("capacidade e custo por peça", () => {
  const r = calcularHoraMaquina(EXEMPLO);
  assert.ok(r?.capacidade);
  assert.equal(r.capacidade.pecasPorHora, 10);
  assert.equal(r.capacidade.pecasPorAno, 30_000);
  perto(r.capacidade.custoPorPeca, 7.73);
  assert.equal(capacidade(0, 3000, 77), null);
  assert.equal(calcularHoraMaquina(com({ tempoCicloMin: 0 }))?.capacidade, null);
});

test("sem horas produtivas não há custo por hora", () => {
  assert.equal(calcularHoraMaquina(com({ aproveitamento: 0 })), null);
  assert.equal(calcularHoraMaquina(com({ diasPorAno: 0 })), null);
});

test("aproveitamento de 100% não tem efeito de ociosidade", () => {
  const r = calcularHoraMaquina(com({ aproveitamento: 100 }));
  assert.equal(r?.efeitoDaOciosidade, 0);
  assert.equal(r?.porHoraPaga, r?.porHoraProdutiva);
});

test("faixas para a medição", () => {
  assert.deepEqual([10, 60, 150, 300, 900].map(faixaDoCusto), ["ate-50", "50-100", "100-200", "200-400", "400+"]);
  assert.deepEqual([30, 60, 75, 90].map(faixaDoAproveitamento), ["ate-50", "50-70", "70-85", "85+"]);
});

test("sem nenhum custo informado, a ociosidade não vira NaN", () => {
  const zerado = com({ valorAquisicao: 0, valorResidual: 0, taxaCapitalAnual: 0, potenciaKw: 0, manutencaoValor: 0, ocupacaoMensal: 0, custoOperadorMensal: 0 });
  const r = calcularHoraMaquina(zerado);
  assert.equal(r?.porHoraProdutiva, 0);
  assert.equal(r?.efeitoDaOciosidade, 0);
});
