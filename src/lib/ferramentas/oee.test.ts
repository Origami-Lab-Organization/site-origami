import test from "node:test";
import assert from "node:assert/strict";
import { calcularOee, EXEMPLO, faixaDeOee, maiorPerda, porcentagem, PROBLEMAS, type EntradasOee } from "./oee";

function quase(a: number, b: number, tol = 1e-6) {
  assert.ok(Math.abs(a - b) < tol, `${a} ≠ ${b}`);
}

test("exemplo do site: 420 min, 42 de parada, ciclo de 60 s, 340 produzidas, 323 boas → OEE 76,9%", () => {
  const r = calcularOee(EXEMPLO);
  assert.equal(r.ok, true);
  if (!r.ok) return;
  quase(r.disponibilidade, 0.9);
  quase(r.desempenho, 340 / 378);
  quase(r.qualidade, 0.95);
  quase(r.oee, 323 / 420);
  assert.equal(porcentagem(r.oee), "76,9%");
  assert.equal(r.operandoMin, 378);
});

test("OEE bate com a conferência: peças boas × ciclo ideal ÷ tempo planejado", () => {
  const e: EntradasOee = { planejadoMin: 900, paradasMin: 135, cicloIdealSeg: 42, produzidas: 960, boas: 910 };
  const r = calcularOee(e);
  assert.equal(r.ok, true);
  if (!r.ok) return;
  quase(r.oee, (910 * 42) / 60 / 900);
});

test("perdas em minutos somadas ao tempo útil dão o tempo planejado", () => {
  const r = calcularOee(EXEMPLO);
  assert.equal(r.ok, true);
  if (!r.ok) return;
  quase(r.perdas.paradas, 42);
  quase(r.perdas.velocidade, 38);
  quase(r.perdas.qualidade, 17);
  quase(r.tempoUtilMin, 323);
  quase(r.perdas.paradas + r.perdas.velocidade + r.perdas.qualidade + r.tempoUtilMin, 420);
});

test("peças possíveis e peças boas que deixaram de sair", () => {
  const r = calcularOee(EXEMPLO);
  assert.equal(r.ok, true);
  if (!r.ok) return;
  assert.equal(r.pecasPossiveis, 420);
  assert.equal(r.pecasPerdidas, 97);
});

test("maior perda: paradas no exemplo; velocidade e qualidade quando dominam", () => {
  const r = calcularOee(EXEMPLO);
  assert.equal(r.ok && r.maiorPerda, "paradas");
  const lenta = calcularOee({ planejadoMin: 480, paradasMin: 10, cicloIdealSeg: 30, produzidas: 600, boas: 595 });
  assert.equal(lenta.ok && lenta.maiorPerda, "velocidade");
  const refugo = calcularOee({ planejadoMin: 480, paradasMin: 5, cicloIdealSeg: 30, produzidas: 940, boas: 700 });
  assert.equal(refugo.ok && refugo.maiorPerda, "qualidade");
  assert.equal(maiorPerda({ paradas: 10, velocidade: 10, qualidade: 10 }), "paradas");
});

test("campos vazios ou não numéricos pedem preenchimento", () => {
  assert.deepEqual(calcularOee({ ...EXEMPLO, boas: "" }), { ok: false, problema: PROBLEMAS.vazio });
  assert.deepEqual(calcularOee({ ...EXEMPLO, produzidas: Number.NaN }), { ok: false, problema: PROBLEMAS.vazio });
});

test("tempos inválidos", () => {
  assert.deepEqual(calcularOee({ ...EXEMPLO, planejadoMin: 0 }), { ok: false, problema: PROBLEMAS.planejado });
  assert.deepEqual(calcularOee({ ...EXEMPLO, paradasMin: 420 }), { ok: false, problema: PROBLEMAS.paradas });
  assert.deepEqual(calcularOee({ ...EXEMPLO, paradasMin: -5 }), { ok: false, problema: PROBLEMAS.paradas });
});

test("peças e ciclo inválidos", () => {
  assert.deepEqual(calcularOee({ ...EXEMPLO, cicloIdealSeg: 0 }), { ok: false, problema: PROBLEMAS.ciclo });
  assert.deepEqual(calcularOee({ ...EXEMPLO, produzidas: 0 }), { ok: false, problema: PROBLEMAS.produzidas });
  assert.deepEqual(calcularOee({ ...EXEMPLO, boas: 341 }), { ok: false, problema: PROBLEMAS.boas });
  assert.deepEqual(calcularOee({ ...EXEMPLO, boas: -1 }), { ok: false, problema: PROBLEMAS.boas });
});

test("desempenho acima de 100% é aviso de ciclo ideal errado, não número absurdo", () => {
  assert.deepEqual(calcularOee({ ...EXEMPLO, cicloIdealSeg: 90 }), { ok: false, problema: PROBLEMAS.desempenho });
});

test("desempenho de exatamente 100% é aceito", () => {
  const r = calcularOee({ planejadoMin: 100, paradasMin: 0, cicloIdealSeg: 60, produzidas: 100, boas: 100 });
  assert.equal(r.ok, true);
  if (!r.ok) return;
  quase(r.oee, 1);
  assert.equal(r.pecasPerdidas, 0);
});

test("faixa de 10 pontos para a medição", () => {
  assert.equal(faixaDeOee(0.769), "70-80");
  assert.equal(faixaDeOee(0.7), "70-80");
  assert.equal(faixaDeOee(0.05), "0-10");
  assert.equal(faixaDeOee(1), "90-100");
  assert.equal(faixaDeOee(-0.1), "0-10");
});

test("porcentagem em pt-BR", () => {
  assert.equal(porcentagem(0.9), "90,0%");
  assert.equal(porcentagem(0.12345, 2), "12,35%");
});
