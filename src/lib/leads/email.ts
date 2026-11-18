import { SITE } from "@/conteudo/paginas";
import type { Lead } from "./validacao";

/* E-mail que o comercial recebe a cada lead. Texto e HTML com o mesmo
   conteúdo; todo valor vindo do visitante é escapado. */

const ROTULOS: Record<string, string> = {
  canal: "Canal",
  origem: "Origem",
  pagina_entrada: "Página de entrada",
  utm_source: "utm_source",
  utm_medium: "utm_medium",
  utm_campaign: "utm_campaign",
  utm_term: "utm_term",
  utm_content: "utm_content",
};

export function escapar(valor: string): string {
  return valor
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Linha = [string, string];

function contato(lead: Lead): Linha[] {
  const linhas: Linha[] = [["Nome", lead.nome]];
  if (lead.email) linhas.push(["E-mail", lead.email]);
  if (lead.telefone) linhas.push(["WhatsApp", lead.telefone]);
  if (lead.empresa) linhas.push(["Empresa", lead.empresa]);
  if (lead.cargo) linhas.push(["Cargo", lead.cargo]);
  return linhas;
}

function respostas(lead: Lead): Linha[] {
  return Object.entries(lead.dados).map(([k, v]) => [k, String(v)]);
}

/** Rota do site vira endereço completo, para o comercial abrir com um clique.
 *  Só caminhos do próprio site (começam com "/"); o resto fica como veio. */
function enderecoCompleto(valor: string): string {
  return valor.startsWith("/") && !valor.startsWith("//") ? `${SITE}${valor}` : valor;
}

function origem(lead: Lead): Linha[] {
  const linhas: Linha[] = Object.entries(lead.origem).map(([k, v]) => [ROTULOS[k] ?? k, k === "pagina_entrada" ? enderecoCompleto(v) : v]);
  return [["Página do envio", enderecoCompleto(lead.pagina)], ...linhas];
}

function tabelaHtml(titulo: string, linhas: Linha[]): string {
  if (!linhas.length) return "";
  const corpo = linhas
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555;vertical-align:top">${escapar(k)}</td><td style="padding:4px 0">${escapar(v)}</td></tr>`)
    .join("");
  return `<h3 style="margin:20px 0 6px;font-size:15px">${escapar(titulo)}</h3><table style="border-collapse:collapse;font-size:14px">${corpo}</table>`;
}

function blocoTexto(titulo: string, linhas: Linha[]): string {
  if (!linhas.length) return "";
  return `${titulo}\n${linhas.map(([k, v]) => `- ${k}: ${v}`).join("\n")}\n`;
}

export function montarEmail(lead: Lead, leadId: string) {
  const assunto = `Lead do site: ${lead.empresa ?? lead.nome} (${lead.ferramenta})`;
  const comoResponder = lead.email ? "Responder este e-mail fala direto com a pessoa." : "A pessoa deixou só o WhatsApp: responda pelo número abaixo.";
  const secoes: [string, Linha[]][] = [
    ["Contato", contato(lead)],
    ["Respostas", respostas(lead)],
    ["Origem", origem(lead)],
  ];
  const mensagem = lead.mensagem ? `<h3 style="margin:20px 0 6px;font-size:15px">Mensagem</h3><p style="font-size:14px;white-space:pre-wrap">${escapar(lead.mensagem)}</p>` : "";
  const html =
    `<div style="font-family:Arial,sans-serif;color:#111">` +
    `<p style="font-size:14px">Novo lead pelo site, vindo de <b>${escapar(lead.ferramenta)}</b>. ${comoResponder}</p>` +
    secoes.map(([t, l]) => tabelaHtml(t, l)).join("") +
    mensagem +
    `<p style="margin-top:24px;font-size:12px;color:#888">lead_id ${escapar(leadId)}</p></div>`;
  const texto =
    `Novo lead pelo site, vindo de ${lead.ferramenta}.\n\n` +
    secoes.map(([t, l]) => blocoTexto(t, l)).join("\n") +
    (lead.mensagem ? `\nMensagem\n${lead.mensagem}\n` : "") +
    `\nlead_id ${leadId}\n`;
  return { assunto, html, texto };
}
