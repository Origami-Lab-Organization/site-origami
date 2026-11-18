/* Cálculo do OEE (eficiência global do equipamento) de uma máquina ou linha
   num período. Funções puras, testadas em oee.test.ts.

   Disponibilidade = tempo em operação ÷ tempo planejado
   Desempenho      = (ciclo ideal × peças produzidas) ÷ tempo em operação
   Qualidade       = peças boas ÷ peças produzidas
   OEE             = Disponibilidade × Desempenho × Qualidade
                   = peças boas × ciclo ideal ÷ tempo planejado (conferência) */

export type Valor = number | "";

export type EntradasOee = {
  /** Tempo planejado de produção, em minutos (sem refeição e paradas programadas). */
  planejadoMin: Valor;
  /** Paradas não planejadas no período, em minutos. */
  paradasMin: Valor;
  /** Tempo de ciclo ideal, em segundos por peça. */
  cicloIdealSeg: Valor;
  produzidas: Valor;
  boas: Valor;
};

export type MaiorPerda = "paradas" | "velocidade" | "qualidade";

export type ResultadoOee =
  | {
      ok: true;
      disponibilidade: number;
      desempenho: number;
      qualidade: number;
      oee: number;
      operandoMin: number;
      /** Minutos perdidos em cada uma das três perdas. Somados ao tempo útil, dão o tempo planejado. */
      perdas: Record<MaiorPerda, number>;
      tempoUtilMin: number;
      /** Peças boas possíveis no tempo planejado, no ciclo ideal. */
      pecasPossiveis: number;
      /** Peças boas que deixaram de sair: possíveis − boas. */
      pecasPerdidas: number;
      maiorPerda: MaiorPerda;
    }
  | { ok: false; problema: string };

export const EXEMPLO: EntradasOee = {
  planejadoMin: 420,
  paradasMin: 42,
  cicloIdealSeg: 60,
  produzidas: 340,
  boas: 323,
};

export const PROBLEMAS = {
  vazio: "Preencha os cinco campos para calcular.",
  planejado: "O tempo planejado precisa ser maior que zero.",
  paradas: "As paradas precisam ser menores que o tempo planejado.",
  ciclo: "Informe o tempo de ciclo ideal, em segundos por peça.",
  produzidas: "Informe quantas peças foram produzidas no período.",
  boas: "As peças boas não podem passar das peças produzidas.",
  desempenho:
    "O desempenho passou de 100%: a máquina produziu mais rápido que o ciclo ideal informado. Quase sempre o ciclo ideal está alto demais (foi usado o ciclo médio real, ou o de outro produto). Use o ciclo de projeto ou o melhor ciclo sustentado.",
};

const TOLERANCIA = 1e-9;

function faltaAlgum(e: EntradasOee): boolean {
  return Object.values(e).some((v) => v === "" || !Number.isFinite(Number(v)));
}

function problemaDeTempo(planejado: number, paradas: number): string | null {
  if (planejado <= 0) return PROBLEMAS.planejado;
  if (paradas < 0 || paradas >= planejado) return PROBLEMAS.paradas;
  return null;
}

function problemaDePecas(ciclo: number, produzidas: number, boas: number): string | null {
  if (ciclo <= 0) return PROBLEMAS.ciclo;
  if (produzidas <= 0) return PROBLEMAS.produzidas;
  if (boas < 0 || boas > produzidas) return PROBLEMAS.boas;
  return null;
}

/** A perda com mais minutos; em empate, a que aparece primeiro (paradas, velocidade, qualidade). */
export function maiorPerda(perdas: Record<MaiorPerda, number>): MaiorPerda {
  const ordem: MaiorPerda[] = ["paradas", "velocidade", "qualidade"];
  return ordem.reduce((a, b) => (perdas[b] > perdas[a] + TOLERANCIA ? b : a));
}

export function calcularOee(e: EntradasOee): ResultadoOee {
  if (faltaAlgum(e)) return { ok: false, problema: PROBLEMAS.vazio };
  const planejado = Number(e.planejadoMin);
  const paradas = Number(e.paradasMin);
  const cicloMin = Number(e.cicloIdealSeg) / 60;
  const produzidas = Number(e.produzidas);
  const boas = Number(e.boas);
  const problema = problemaDeTempo(planejado, paradas) ?? problemaDePecas(cicloMin, produzidas, boas);
  if (problema) return { ok: false, problema };

  const operandoMin = planejado - paradas;
  const desempenho = (cicloMin * produzidas) / operandoMin;
  if (desempenho > 1 + TOLERANCIA) return { ok: false, problema: PROBLEMAS.desempenho };
  const disponibilidade = operandoMin / planejado;
  const qualidade = boas / produzidas;
  const perdas = {
    paradas,
    velocidade: operandoMin - cicloMin * produzidas,
    qualidade: (produzidas - boas) * cicloMin,
  };
  const pecasPossiveis = Math.floor(planejado / cicloMin + TOLERANCIA);
  return {
    ok: true,
    disponibilidade,
    desempenho,
    qualidade,
    oee: disponibilidade * desempenho * qualidade,
    operandoMin,
    perdas,
    tempoUtilMin: boas * cicloMin,
    pecasPossiveis,
    pecasPerdidas: Math.max(0, pecasPossiveis - boas),
    maiorPerda: maiorPerda(perdas),
  };
}

/** Faixa de 10 pontos para a medição (não manda o número exato). Ex.: 0,769 → "70-80". */
export function faixaDeOee(oee: number): string {
  const base = Math.min(90, Math.max(0, Math.floor((oee * 100 + TOLERANCIA) / 10) * 10));
  return `${base}-${base + 10}`;
}

export function porcentagem(v: number, casas = 1): string {
  return `${(v * 100).toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas })}%`;
}
