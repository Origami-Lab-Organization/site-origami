/* Simulador da Lei do Bem: regras puras, sem DOM. Cada número tem fonte:

   - Exclusão adicional de até 60% dos dispêndios com P&D na apuração do lucro
     real e da base da CSLL: Lei 11.196/2005, art. 19, caput; Decreto
     5.798/2006, art. 8º.
   - Até 70% com aumento de até 5% no número de pesquisadores contratados e
     até 80% com aumento acima de 5% (base: média do ano anterior): Decreto
     5.798/2006, art. 8º, §1º; Lei 11.196/2005, art. 19, §1º.
   - Mais até 20% dos dispêndios vinculados a pesquisa com patente concedida
     ou cultivar registrado: Lei 11.196/2005, art. 19, §3º.
   - A exclusão fica limitada ao lucro real e à base da CSLL antes dela, sem
     aproveitar o excesso depois: Lei 11.196/2005, art. 19, §5º.
   - Lucro real (MCTI) e regularidade fiscal (Lei 11.196/2005, art. 23).
   - IRPJ 15% + adicional de 10% sobre o lucro acima de R$ 20 mil por mês
     (Lei 9.249/1995, art. 3º); CSLL 9% (Lei 7.689/1988, art. 3º, III).

   O cálculo é anual (ano-calendário). Percentuais são os máximos da lei
   ("até"); o simulador mostra estimativa, não parecer. */

export type Regime = "lucro-real" | "lucro-presumido" | "simples" | "nao-sei";
export type SimNao = "sim" | "nao" | "nao-sei";
export type Pesquisadores = "sem-aumento" | "ate-5" | "acima-5";

export type Entradas = {
  regime: Regime | "";
  lucroFiscal: SimNao | "";
  regularidade: SimNao | "";
  /** Dispêndio anual com P&D e inovação tecnológica, em reais. */
  dispendio: number | "";
  pesquisadores: Pesquisadores | "";
  patente: SimNao | "";
  /** Dispêndios vinculados à pesquisa que gerou a patente ou o cultivar. */
  dispendioPatente: number | "";
  /** Lucro real estimado do ano, antes da Lei do Bem (opcional, limita a exclusão). */
  lucroReal: number | "";
};

export type Veredito = "incompleto" | "elegivel" | "nao-se-aplica" | "nao-elegivel-agora" | "precisa-de-analise";

export type Motivo = "regime" | "prejuizo" | "regularidade" | "duvida" | null;

export type Resultado = {
  veredito: Veredito;
  motivo: Motivo;
  percentual: number;
  exclusao: number;
  /** A exclusão passou do lucro real informado e foi cortada (art. 19, §5º). */
  limitadaPeloLucro: boolean;
  economiaMinima: number;
  economiaMaxima: number;
  memoria: string[];
};

export const ALIQUOTA_IRPJ = 0.15;
export const ALIQUOTA_ADICIONAL_IRPJ = 0.1;
export const ALIQUOTA_CSLL = 0.09;
export const LIMITE_ANUAL_DO_ADICIONAL = 240_000;
export const PERCENTUAL_PATENTE = 20;

const PERCENTUAL_POR_PESQUISADORES: Record<Pesquisadores, number> = {
  "sem-aumento": 60,
  "ate-5": 70,
  "acima-5": 80,
};

function positivo(v: number | ""): number {
  return typeof v === "number" && Number.isFinite(v) && v > 0 ? v : 0;
}

type Requisitos = Pick<Entradas, "regime" | "lucroFiscal" | "regularidade">;

function regimeSemLucroReal(regime: Regime | ""): boolean {
  return regime === "lucro-presumido" || regime === "simples";
}

function haDuvida(e: Requisitos): boolean {
  return e.regime === "nao-sei" || e.lucroFiscal === "nao-sei" || e.regularidade === "nao-sei";
}

/** Elegibilidade pelos requisitos, antes de qualquer conta. */
export function avaliarRequisitos(e: Requisitos): { veredito: Veredito; motivo: Motivo } {
  if (!e.regime || !e.lucroFiscal || !e.regularidade) return { veredito: "incompleto", motivo: null };
  if (regimeSemLucroReal(e.regime)) return { veredito: "nao-se-aplica", motivo: "regime" };
  if (e.lucroFiscal === "nao") return { veredito: "nao-elegivel-agora", motivo: "prejuizo" };
  if (e.regularidade === "nao") return { veredito: "nao-elegivel-agora", motivo: "regularidade" };
  return haDuvida(e) ? { veredito: "precisa-de-analise", motivo: "duvida" } : { veredito: "elegivel", motivo: null };
}

export function percentualDeExclusao(p: Pesquisadores | ""): number {
  return p ? PERCENTUAL_POR_PESQUISADORES[p] : PERCENTUAL_POR_PESQUISADORES["sem-aumento"];
}

/** Valor excluído da base: dispêndio × percentual, mais 20% do vinculado a patente. */
export function exclusaoBruta(e: Pick<Entradas, "dispendio" | "pesquisadores" | "patente" | "dispendioPatente">): number {
  const base = (positivo(e.dispendio) * percentualDeExclusao(e.pesquisadores)) / 100;
  const patente = e.patente === "sim" ? (Math.min(positivo(e.dispendioPatente), positivo(e.dispendio)) * PERCENTUAL_PATENTE) / 100 : 0;
  return base + patente;
}

/** Economia com o lucro real conhecido: IRPJ, adicional só na parte acima do limite, CSLL. */
export function economiaComLucro(exclusao: number, lucroReal: number): number {
  const adicionalAntes = Math.max(0, lucroReal - LIMITE_ANUAL_DO_ADICIONAL);
  const adicionalDepois = Math.max(0, lucroReal - exclusao - LIMITE_ANUAL_DO_ADICIONAL);
  return exclusao * (ALIQUOTA_IRPJ + ALIQUOTA_CSLL) + (adicionalAntes - adicionalDepois) * ALIQUOTA_ADICIONAL_IRPJ;
}

function faixaDeEconomia(exclusao: number, lucroReal: number): [number, number] {
  if (lucroReal > 0) {
    const exata = economiaComLucro(exclusao, lucroReal);
    return [exata, exata];
  }
  return [exclusao * (ALIQUOTA_IRPJ + ALIQUOTA_CSLL), exclusao * (ALIQUOTA_IRPJ + ALIQUOTA_ADICIONAL_IRPJ + ALIQUOTA_CSLL)];
}

const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function memoriaDoCalculo(e: Entradas, percentual: number, bruta: number, exclusao: number, lucroReal: number): string[] {
  const linhas = [`Exclusão adicional: ${percentual}% de ${brl(positivo(e.dispendio))} = ${brl((positivo(e.dispendio) * percentual) / 100)}`];
  if (e.patente === "sim") linhas.push(`Patente ou cultivar: mais ${PERCENTUAL_PATENTE}% de ${brl(Math.min(positivo(e.dispendioPatente), positivo(e.dispendio)))}`);
  if (lucroReal > 0 && bruta > exclusao) linhas.push(`Limitada ao lucro real informado: ${brl(exclusao)}`);
  linhas.push(
    lucroReal > 0
      ? `IRPJ 15% + CSLL 9% sobre ${brl(exclusao)}, e adicional de 10% só na parte do lucro acima de ${brl(LIMITE_ANUAL_DO_ADICIONAL)} no ano`
      : `Sem o lucro informado: de 24% (IRPJ 15% + CSLL 9%) a 34% (com o adicional de 10% do IRPJ) sobre ${brl(exclusao)}`,
  );
  return linhas;
}

const SEM_CONTA = { percentual: 0, exclusao: 0, limitadaPeloLucro: false, economiaMinima: 0, economiaMaxima: 0, memoria: [] };

function calcular(e: Entradas, requisitos: { veredito: Veredito; motivo: Motivo }): Resultado {
  const percentual = percentualDeExclusao(e.pesquisadores);
  const bruta = exclusaoBruta(e);
  const lucroReal = positivo(e.lucroReal);
  const exclusao = lucroReal > 0 ? Math.min(bruta, lucroReal) : bruta;
  const [economiaMinima, economiaMaxima] = faixaDeEconomia(exclusao, lucroReal);
  return {
    veredito: requisitos.veredito,
    motivo: requisitos.motivo,
    percentual,
    exclusao,
    limitadaPeloLucro: lucroReal > 0 && bruta > lucroReal,
    economiaMinima,
    economiaMaxima,
    memoria: memoriaDoCalculo(e, percentual, bruta, exclusao, lucroReal),
  };
}

export function simular(e: Entradas): Resultado {
  const requisitos = avaliarRequisitos(e);
  const calculavel = requisitos.veredito === "elegivel" || requisitos.veredito === "precisa-de-analise";
  if (!calculavel) return { ...SEM_CONTA, ...requisitos };
  if (positivo(e.dispendio) === 0) return { ...SEM_CONTA, veredito: "incompleto", motivo: null };
  return calcular(e, requisitos);
}

export const ENTRADAS_VAZIAS: Entradas = {
  regime: "",
  lucroFiscal: "",
  regularidade: "",
  dispendio: "",
  pesquisadores: "",
  patente: "",
  dispendioPatente: "",
  lucroReal: "",
};
