/* Validação do lead que chega pelo site (ferramentas e formulários próprios).
   Tudo o que vem do navegador é tratado como não confiável. Contato: basta
   e-mail ou WhatsApp (as ferramentas liberam o detalhamento com um dos dois). */

import { problemaDeContato } from "./contato";

export type Lead = {
  nome: string;
  email?: string;
  empresa?: string;
  cargo?: string;
  telefone?: string;
  mensagem?: string;
  /** Ferramenta ou formulário de onde o lead veio (ex.: "calculadora-de-oee"). */
  ferramenta: string;
  pagina: string;
  /** Respostas da ferramenta: faturamento, funcionários, resultado… */
  dados: Record<string, string | number | boolean>;
  /** Origem da visita: canal, origem, página de entrada e UTMs. */
  origem: Record<string, string>;
};

export type ResultadoDaValidacao = { ok: true; lead: Lead } | { ok: false; erros: string[] };

const SLUG = /^[a-z0-9-]{2,60}$/;
const MAX_CAMPOS = 30;
const MAX_VALOR = 200;

type Entrada = Record<string, unknown>;

function texto(valor: unknown, max: number): string {
  return typeof valor === "string" ? valor.replace(/\s+/g, " ").trim().slice(0, max) : "";
}

function opcional(valor: unknown, max: number): string | undefined {
  return texto(valor, max) || undefined;
}

function dicionario(valor: unknown): Record<string, string | number | boolean> {
  if (!valor || typeof valor !== "object" || Array.isArray(valor)) return {};
  const saida: Record<string, string | number | boolean> = {};
  for (const [k, v] of Object.entries(valor).slice(0, MAX_CAMPOS)) {
    const chave = texto(k, 60);
    if (!chave) continue;
    if (typeof v === "number" && Number.isFinite(v)) saida[chave] = v;
    else if (typeof v === "boolean") saida[chave] = v;
    else if (typeof v === "string") saida[chave] = texto(v, MAX_VALOR);
  }
  return saida;
}

function textos(valor: unknown): Record<string, string> {
  const d = dicionario(valor);
  return Object.fromEntries(Object.entries(d).map(([k, v]) => [k, String(v)]));
}

function errosObrigatorios(e: Entrada): string[] {
  const erros: string[] = [];
  if (texto(e.nome, 120).length < 2) erros.push("nome");
  const contato = problemaDeContato(texto(e.email, 254), texto(e.telefone, 40));
  if (contato) erros.push(contato === "falta-contato" ? "contato" : contato);
  if (!SLUG.test(texto(e.ferramenta, 60))) erros.push("ferramenta");
  if (e.consentimento !== true) erros.push("consentimento");
  return erros;
}

export function validarLead(entrada: unknown): ResultadoDaValidacao {
  if (!entrada || typeof entrada !== "object") return { ok: false, erros: ["corpo"] };
  const e = entrada as Entrada;
  const erros = errosObrigatorios(e);
  if (erros.length) return { ok: false, erros };
  return {
    ok: true,
    lead: {
      nome: texto(e.nome, 120),
      email: opcional(e.email, 254)?.toLowerCase(),
      empresa: opcional(e.empresa, 160),
      cargo: opcional(e.cargo, 120),
      telefone: opcional(e.telefone, 40),
      mensagem: opcional(e.mensagem, 2000),
      ferramenta: texto(e.ferramenta, 60),
      pagina: texto(e.pagina, 200) || "/",
      dados: dicionario(e.dados),
      origem: textos(e.origem),
    },
  };
}

/** Armadilhas de robô: campo invisível preenchido ou envio rápido demais. */
export function pareceRobo(entrada: unknown, agora: number): boolean {
  const e = (entrada ?? {}) as Entrada;
  if (texto(e.site, 200)) return true;
  const iniciadoEm = typeof e.iniciadoEm === "number" ? e.iniciadoEm : 0;
  return !iniciadoEm || agora - iniciadoEm < 2500;
}
