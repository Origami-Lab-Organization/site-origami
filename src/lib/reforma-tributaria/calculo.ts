/* Calculadora da reforma tributária (CBS e IBS): regras puras, sem rede.
   O cálculo em si é feito pela API pública da calculadora oficial da Receita
   Federal (receita.ts); aqui ficam a validação da entrada, a montagem da
   requisição, a leitura da resposta e a busca de NCM e NBS.

   Base legal do cronograma: EC 132/2023, ADCT arts. 125 a 130. */

export const UFS = [
  ["AC", 12], ["AL", 27], ["AM", 13], ["AP", 16], ["BA", 29], ["CE", 23], ["DF", 53], ["ES", 32], ["GO", 52],
  ["MA", 21], ["MG", 31], ["MS", 50], ["MT", 51], ["PA", 15], ["PB", 25], ["PE", 26], ["PI", 22], ["PR", 41],
  ["RJ", 33], ["RN", 24], ["RO", 11], ["RR", 14], ["RS", 43], ["SC", 42], ["SE", 28], ["SP", 35], ["TO", 17],
] as const;

export type TipoDeItem = "ncm" | "nbs";

export type Aliquotas = { cbs: number; ibsEstadual: number; ibsMunicipal: number };

export type Entrada = {
  /** Data do fato gerador, AAAA-MM-DD. */
  data: string;
  uf: string;
  /** Código IBGE do município (7 dígitos). */
  municipio: number;
  tipo: TipoDeItem;
  codigo: string;
  cst: string;
  cClassTrib: string;
  /** Base de cálculo em reais. */
  valor: number;
  /** Obrigatórias de 2027 em diante (ainda sem alíquota de referência oficial). */
  aliquotas?: Aliquotas;
};

export const PRIMEIRO_ANO = 2026;
export const ULTIMO_ANO = 2033;

export function anoDe(data: string): number {
  return Number(String(data).slice(0, 4));
}

/** De 2027 em diante a API não tem alíquota de referência: a simulação usa as informadas. */
export function exigeAliquotas(data: string): boolean {
  return anoDe(data) >= 2027;
}

/** 2027 e 2028: IBS de 0,05% estadual e 0,05% municipal (ADCT, art. 127). A CBS ainda não tem referência. */
export function aliquotasDoIbsPrevistas(data: string): Pick<Aliquotas, "ibsEstadual" | "ibsMunicipal"> | null {
  const ano = anoDe(data);
  return ano === 2027 || ano === 2028 ? { ibsEstadual: 0.05, ibsMunicipal: 0.05 } : null;
}

const SIGLAS: ReadonlySet<string> = new Set(UFS.map(([s]) => s));

function dataValida(data: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const d = new Date(`${data}T12:00:00Z`);
  const ano = anoDe(data);
  return !Number.isNaN(d.getTime()) && ano >= PRIMEIRO_ANO && ano <= ULTIMO_ANO;
}

function codigoValido(tipo: TipoDeItem, codigo: string): boolean {
  return tipo === "ncm" ? /^\d{8}$/.test(codigo) : /^\d{9}$/.test(codigo);
}

function percentual(v: unknown): boolean {
  return typeof v === "number" && Number.isFinite(v) && v >= 0 && v <= 100;
}

function errosDasAliquotas(e: Entrada): string[] {
  /* Com a data inválida, o erro é a data; não cobra alíquota de um ano que não vale. */
  if (!dataValida(e.data) || !exigeAliquotas(e.data)) return [];
  const a = e.aliquotas;
  if (!a) return ["aliquotas"];
  return (["cbs", "ibsEstadual", "ibsMunicipal"] as const).filter((k) => !percentual(a[k])).map((k) => `aliquota_${k}`);
}

export function validarEntrada(e: Entrada): string[] {
  const erros: string[] = [];
  if (!dataValida(e.data)) erros.push("data");
  if (!SIGLAS.has(e.uf)) erros.push("uf");
  if (!Number.isInteger(e.municipio) || String(e.municipio).length !== 7) erros.push("municipio");
  if (!codigoValido(e.tipo, e.codigo)) erros.push("codigo");
  if (!/^\d{3}$/.test(e.cst)) erros.push("cst");
  if (!/^\d{6}$/.test(e.cClassTrib)) erros.push("cClassTrib");
  if (!(Number.isFinite(e.valor) && e.valor > 0 && e.valor <= 1e12)) erros.push("valor");
  return [...erros, ...errosDasAliquotas(e)];
}

/** Requisição no formato do POST /regime-geral da calculadora da Receita. */
export function montarRequisicao(e: Entrada, id: string) {
  const item: Record<string, unknown> = {
    numero: 1,
    [e.tipo]: e.codigo,
    cst: e.cst,
    cClassTrib: e.cClassTrib,
    baseCalculo: Math.round(e.valor * 100) / 100,
    quantidade: 1,
    unidade: "UN",
  };
  if (exigeAliquotas(e.data) && e.aliquotas) item.aliquotasNominais = { ...e.aliquotas };
  return {
    id,
    versao: "1.0.0",
    dhFatoGerador: `${e.data}T12:00:00-03:00`,
    municipio: e.municipio,
    uf: e.uf,
    itens: [item],
  };
}

export type Tributo = { aliquota: number; valor: number };

export type Resultado = {
  base: number;
  cbs: Tributo;
  ibsEstadual: Tributo;
  ibsMunicipal: Tributo;
  total: number;
  /** Total sobre a base, em %. */
  carga: number;
  memoria: string[];
  /** true quando a Receita calculou com alíquotas informadas (simulação). */
  simulado: boolean;
};

function num(v: unknown): number {
  const n = typeof v === "number" ? v : Number.parseFloat(String(v ?? ""));
  return Number.isFinite(n) ? n : 0;
}

type Grupo = Record<string, unknown>;

function grupo(o: unknown, chave: string): Grupo {
  const g = (o as Grupo | undefined)?.[chave];
  return g && typeof g === "object" ? (g as Grupo) : {};
}

function tributo(g: Grupo, chaveAliquota: string, chaveValor: string): Tributo {
  return { aliquota: num(g[chaveAliquota]), valor: num(g[chaveValor]) };
}

/** Lê a resposta da Receita. null se ela não trouxer o grupo de IBS e CBS. */
export function lerResultado(resposta: unknown): Resultado | null {
  const objeto = ((resposta as Grupo | undefined)?.objetos as unknown[] | undefined)?.[0] as Grupo | undefined;
  const ibscbs = grupo(grupo(objeto, "tribCalc"), "IBSCBS");
  const g = grupo(ibscbs, "gIBSCBS");
  if (!Object.keys(g).length) return null;
  const cbs = tributo(grupo(g, "gCBS"), "pCBS", "vCBS");
  const ibsEstadual = tributo(grupo(g, "gIBSUF"), "pIBSUF", "vIBSUF");
  const ibsMunicipal = tributo(grupo(g, "gIBSMun"), "pIBSMun", "vIBSMun");
  const base = num(g.vBC);
  const total = Math.round((cbs.valor + ibsEstadual.valor + ibsMunicipal.valor) * 100) / 100;
  const memoria = Object.values(grupo(ibscbs, "memoriaCalculo")).filter((m): m is string => typeof m === "string");
  return { base, cbs, ibsEstadual, ibsMunicipal, total, carga: base > 0 ? (total / base) * 100 : 0, memoria, simulado: objeto?.calculoSimulado === true };
}

/** Mensagem de erro da Receita (problem+json), em português, ou uma genérica. */
export function mensagemDeErro(resposta: unknown): string {
  const detalhe = (resposta as Grupo | undefined)?.detail;
  return typeof detalhe === "string" && detalhe.trim() ? detalhe.trim() : "A calculadora da Receita não conseguiu fazer este cálculo.";
}

export type Codigo = { codigo: string; descricao: string };

function normalizar(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

/** Busca por código (prefixo, ignorando pontos) ou por palavras da descrição. */
export function buscarCodigos(lista: Codigo[], termo: string, limite = 20): Codigo[] {
  const t = termo.trim();
  if (t.length < 2) return [];
  const digitos = t.replace(/[.\s-]/g, "");
  if (/^\d+$/.test(digitos)) return lista.filter((c) => c.codigo.startsWith(digitos)).slice(0, limite);
  const palavras = normalizar(t).split(/\s+/).filter(Boolean);
  return lista.filter((c) => palavras.every((p) => normalizar(c.descricao).includes(p))).slice(0, limite);
}

/** Faixa do valor para eventos de medição (nunca o valor exato). */
export function faixaDeValor(v: number): string {
  if (v < 1_000) return "ate-1mil";
  if (v < 10_000) return "1-10mil";
  if (v < 100_000) return "10-100mil";
  if (v < 1_000_000) return "100mil-1mi";
  return "acima-1mi";
}
