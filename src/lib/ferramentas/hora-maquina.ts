/* Custo hora-máquina: funções puras, testadas em hora-maquina.test.ts.

   Método (o mesmo explicado na página /calculadora-custo-hora-maquina):
   - horas pagas por ano     = dias × turnos × horas por turno
   - horas produtivas por ano = horas pagas × aproveitamento
   - depreciação  = (valor de aquisição − valor residual) / vida útil em anos
   - capital      = taxa anual × investimento médio, com investimento médio = (aquisição + residual) / 2
   - energia      = potência (kW) × fator de carga × preço do kWh × horas produtivas
   - manutenção   = valor por ano, ou percentual do valor de aquisição por ano
   - ocupação     = custo mensal do espaço × 12
   - operador     = (custo mensal com encargos / horas pagas no mês) × operadores por máquina × horas pagas por ano
   Custo hora-máquina = soma anual / horas produtivas. */

export type ModoDeManutencao = "percentual" | "valor";

export type EntradaHoraMaquina = {
  valorAquisicao: number;
  valorResidual: number;
  vidaUtilAnos: number;
  /** % ao ano; 0 ignora o custo do capital. */
  taxaCapitalAnual: number;
  potenciaKw: number;
  /** % da potência nominal usada em média enquanto a máquina produz. */
  fatorCarga: number;
  precoKwh: number;
  manutencaoModo: ModoDeManutencao;
  /** R$ por ano ou % do valor de aquisição por ano, conforme o modo. */
  manutencaoValor: number;
  ocupacaoMensal: number;
  custoOperadorMensal: number;
  /** Divisor de horas do salário mensal (220 para jornada de 44 h semanais). */
  horasOperadorMes: number;
  /** 1 = um operador por máquina; 0,5 = um operador para duas máquinas. */
  operadoresPorMaquina: number;
  diasPorAno: number;
  turnosPorDia: number;
  horasPorTurno: number;
  /** % das horas pagas em que a máquina de fato produz. */
  aproveitamento: number;
  /** Minutos por peça; 0 = não informado. */
  tempoCicloMin: number;
};

export type Componente = { chave: string; rotulo: string; anual: number; porHora: number };

export type ResultadoHoraMaquina = {
  horasPagasAno: number;
  horasProdutivasAno: number;
  componentes: Componente[];
  custoAnual: number;
  /** Custo por hora em que a máquina produz: o número certo para orçar. */
  porHoraProdutiva: number;
  /** O mesmo custo dividido pelas horas pagas: a conta que subestima a hora. */
  porHoraPaga: number;
  /** Quanto a hora produtiva é mais cara que a hora "paga" (0,33 = 33%). */
  efeitoDaOciosidade: number;
  capacidade: { pecasPorHora: number; pecasPorAno: number; custoPorPeca: number } | null;
};

export const EXEMPLO: EntradaHoraMaquina = {
  valorAquisicao: 450_000,
  valorResidual: 90_000,
  vidaUtilAnos: 10,
  taxaCapitalAnual: 12,
  potenciaKw: 15,
  fatorCarga: 60,
  precoKwh: 0.85,
  manutencaoModo: "percentual",
  manutencaoValor: 3,
  ocupacaoMensal: 1_500,
  custoOperadorMensal: 6_000,
  horasOperadorMes: 220,
  operadoresPorMaquina: 1,
  diasPorAno: 250,
  turnosPorDia: 2,
  horasPorTurno: 8,
  aproveitamento: 75,
  tempoCicloMin: 6,
};

function positivo(v: number): number {
  return Number.isFinite(v) && v > 0 ? v : 0;
}

export function horasDeTrabalho(e: EntradaHoraMaquina): { pagas: number; produtivas: number } {
  const pagas = positivo(e.diasPorAno) * positivo(e.turnosPorDia) * positivo(e.horasPorTurno);
  const aproveitamento = Math.min(positivo(e.aproveitamento), 100) / 100;
  return { pagas, produtivas: pagas * aproveitamento };
}

export function depreciacaoAnual(e: EntradaHoraMaquina): number {
  const anos = positivo(e.vidaUtilAnos);
  if (!anos) return 0;
  return Math.max(0, positivo(e.valorAquisicao) - positivo(e.valorResidual)) / anos;
}

export function capitalAnual(e: EntradaHoraMaquina): number {
  const investimentoMedio = (positivo(e.valorAquisicao) + positivo(e.valorResidual)) / 2;
  return (positivo(e.taxaCapitalAnual) / 100) * investimentoMedio;
}

export function energiaPorHora(e: EntradaHoraMaquina): number {
  return positivo(e.potenciaKw) * (Math.min(positivo(e.fatorCarga), 100) / 100) * positivo(e.precoKwh);
}

export function manutencaoAnual(e: EntradaHoraMaquina): number {
  if (e.manutencaoModo === "percentual") return (positivo(e.manutencaoValor) / 100) * positivo(e.valorAquisicao);
  return positivo(e.manutencaoValor);
}

export function operadorAnual(e: EntradaHoraMaquina, horasPagasAno: number): number {
  const divisor = positivo(e.horasOperadorMes);
  if (!divisor) return 0;
  return (positivo(e.custoOperadorMensal) / divisor) * positivo(e.operadoresPorMaquina) * horasPagasAno;
}

function componentesAnuais(e: EntradaHoraMaquina, horas: { pagas: number; produtivas: number }) {
  return [
    { chave: "depreciacao", rotulo: "Depreciação", anual: depreciacaoAnual(e) },
    { chave: "capital", rotulo: "Custo do capital", anual: capitalAnual(e) },
    { chave: "energia", rotulo: "Energia", anual: energiaPorHora(e) * horas.produtivas },
    { chave: "manutencao", rotulo: "Manutenção", anual: manutencaoAnual(e) },
    { chave: "ocupacao", rotulo: "Espaço e ocupação", anual: positivo(e.ocupacaoMensal) * 12 },
    { chave: "operador", rotulo: "Operador", anual: operadorAnual(e, horas.pagas) },
  ];
}

export function capacidade(tempoCicloMin: number, horasProdutivasAno: number, porHoraProdutiva: number) {
  const ciclo = positivo(tempoCicloMin);
  if (!ciclo) return null;
  const pecasPorHora = 60 / ciclo;
  return { pecasPorHora, pecasPorAno: pecasPorHora * horasProdutivasAno, custoPorPeca: porHoraProdutiva / pecasPorHora };
}

/** null quando não há horas produtivas: sem elas não existe custo por hora. */
export function calcularHoraMaquina(e: EntradaHoraMaquina): ResultadoHoraMaquina | null {
  const horas = horasDeTrabalho(e);
  if (!horas.produtivas) return null;
  const componentes = componentesAnuais(e, horas).map((c) => ({ ...c, porHora: c.anual / horas.produtivas }));
  const custoAnual = componentes.reduce((s, c) => s + c.anual, 0);
  const porHoraProdutiva = custoAnual / horas.produtivas;
  const porHoraPaga = custoAnual / horas.pagas;
  return {
    horasPagasAno: horas.pagas,
    horasProdutivasAno: horas.produtivas,
    componentes,
    custoAnual,
    porHoraProdutiva,
    porHoraPaga,
    efeitoDaOciosidade: porHoraPaga ? porHoraProdutiva / porHoraPaga - 1 : 0,
    capacidade: capacidade(e.tempoCicloMin, horas.produtivas, porHoraProdutiva),
  };
}

/** Faixa do custo por hora para a medição (o valor exato não sai do navegador). */
export function faixaDoCusto(porHora: number): string {
  if (porHora < 50) return "ate-50";
  if (porHora < 100) return "50-100";
  if (porHora < 200) return "100-200";
  if (porHora < 400) return "200-400";
  return "400+";
}

export function faixaDoAproveitamento(aproveitamento: number): string {
  if (aproveitamento < 50) return "ate-50";
  if (aproveitamento < 70) return "50-70";
  if (aproveitamento < 85) return "70-85";
  return "85+";
}
