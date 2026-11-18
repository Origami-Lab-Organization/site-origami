/* Acesso à API pública da calculadora oficial da Receita Federal (CBS, IBS e
   Imposto Seletivo; código aberto, licença MIT, em
   github.com/ReceitaFederal/calculadora-rtc-regime-regular). Só roda no
   servidor: a API não libera CORS para o navegador.

   Tabelas (NCM, NBS, municípios, classificações) mudam pouco: ficam em cache
   por um dia. O cálculo nunca é cacheado. */

import {
  buscarCodigos,
  lerResultado,
  mensagemDeErro,
  montarRequisicao,
  validarEntrada,
  type Codigo,
  type Entrada,
  type TipoDeItem,
} from "./calculo";

export const RECEITA = "https://piloto-cbs.tributos.gov.br/servico/calculadora-consumo/api/calculadora";
const UM_DIA = 86_400;

export type Buscar = typeof fetch;

async function obter<T>(buscar: Buscar, caminho: string, revalidar = UM_DIA): Promise<T | null> {
  try {
    const r = await buscar(`${RECEITA}${caminho}`, {
      next: { revalidate: revalidar },
      signal: AbortSignal.timeout(15_000),
    } as RequestInit);
    return r.ok ? ((await r.json()) as T) : null;
  } catch {
    return null;
  }
}

/** Primeiro dia do mês da data: tabelas do mesmo mês compartilham o cache. */
export function dataDoMes(data: string): string {
  return /^\d{4}-\d{2}-\d{2}$/.test(data) ? `${data.slice(0, 7)}-01` : new Date().toISOString().slice(0, 7) + "-01";
}

export async function municipios(buscar: Buscar, uf: string): Promise<{ codigo: number; nome: string }[] | null> {
  const lista = await obter<{ codigo: number; nome: string }[]>(buscar, `/dados-abertos/ufs/municipios?siglaUf=${encodeURIComponent(uf)}`);
  return lista ? [...lista].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR")) : null;
}

async function listaDeCodigos(buscar: Buscar, tipo: TipoDeItem, data: string): Promise<Codigo[] | null> {
  if (tipo === "ncm") {
    const l = await obter<{ ncm: string; descricao: string }[]>(buscar, `/dados-abertos/ncm/vigentes?data=${dataDoMes(data)}`);
    return l ? l.map((x) => ({ codigo: x.ncm, descricao: x.descricao })) : null;
  }
  const l = await obter<{ codigo: string; descricao: string }[]>(buscar, `/dados-abertos/nbs/lista?data=${dataDoMes(data)}`);
  return l ? l.map((x) => ({ codigo: x.codigo, descricao: x.descricao })) : null;
}

export async function codigos(buscar: Buscar, tipo: TipoDeItem, termo: string, data: string): Promise<Codigo[] | null> {
  const lista = await listaDeCodigos(buscar, tipo, data);
  return lista ? buscarCodigos(lista, termo) : null;
}

export type Situacao = { cst: string; descricao: string; classificacoes: { codigo: string; descricao: string }[] };

export async function situacoes(buscar: Buscar, data: string): Promise<Situacao[] | null> {
  type Bruto = { codigo: string; descricao: string; classificacoesTributarias?: { codigo: string; descricao: string }[] };
  const l = await obter<Bruto[]>(buscar, `/dados-abertos/situacoes-tributarias/cbs-ibs?data=${dataDoMes(data)}`);
  return l
    ? l.map((s) => ({ cst: s.codigo, descricao: s.descricao, classificacoes: (s.classificacoesTributarias ?? []).map((c) => ({ codigo: c.codigo, descricao: c.descricao })) }))
    : null;
}

export async function versaoDasTabelas(buscar: Buscar): Promise<string | null> {
  const v = await obter<{ versaoDb?: string; dataVersaoDb?: string }>(buscar, "/dados-abertos/versao", 3_600);
  return v?.versaoDb ? `${v.versaoDb}${v.dataVersaoDb ? ` de ${v.dataVersaoDb.split("-").reverse().join("/")}` : ""}` : null;
}

function comoEntrada(b: Record<string, unknown>): Entrada {
  const a = b.aliquotas as Record<string, unknown> | undefined;
  return {
    data: String(b.data ?? ""),
    uf: String(b.uf ?? ""),
    municipio: Number(b.municipio),
    tipo: b.tipo === "nbs" ? "nbs" : "ncm",
    codigo: String(b.codigo ?? "").replace(/\D/g, ""),
    cst: String(b.cst ?? ""),
    cClassTrib: String(b.cClassTrib ?? ""),
    valor: Number(b.valor),
    aliquotas: a ? { cbs: Number(a.cbs), ibsEstadual: Number(a.ibsEstadual), ibsMunicipal: Number(a.ibsMunicipal) } : undefined,
  };
}

export type RespostaDoCalculo = { status: number; corpo: Record<string, unknown> };

/** Valida, chama o POST /regime-geral da Receita e devolve o resultado simplificado. */
export async function calcular(bruto: unknown, buscar: Buscar, id: string): Promise<RespostaDoCalculo> {
  const entrada = comoEntrada((bruto ?? {}) as Record<string, unknown>);
  const erros = validarEntrada(entrada);
  if (erros.length) return { status: 400, corpo: { ok: false, erros } };
  let resp: Response;
  try {
    resp = await buscar(`${RECEITA}/regime-geral`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(montarRequisicao(entrada, id)),
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    return { status: 502, corpo: { ok: false, mensagem: "A calculadora da Receita não respondeu. Tente de novo em alguns minutos." } };
  }
  const json = (await resp.json().catch(() => null)) as unknown;
  const resultado = resp.ok ? lerResultado(json) : null;
  if (!resultado) return { status: 422, corpo: { ok: false, mensagem: mensagemDeErro(json) } };
  return { status: 200, corpo: { ok: true, resultado, versao: await versaoDasTabelas(buscar) } };
}
