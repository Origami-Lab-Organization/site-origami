import { montarEmail } from "./email";
import { pareceRobo, validarLead } from "./validacao";

/* Recebe o lead do site e manda por e-mail ao comercial, pela API do Resend.
   Usa a mesma conta do Resend do Origami Pulse, com o domínio já verificado
   origamipulse.com.br (sem DNS novo). Sem banco de dados por enquanto: o
   e-mail é o registro. Separado da rota para ser testado sem rede. */

export type Ambiente = {
  RESEND_API_KEY?: string;
  LEADS_PARA?: string;
  LEADS_DE?: string;
};

export type Dependencias = {
  env: Ambiente;
  fetch: typeof fetch;
  agora: () => number;
  novoId: () => string;
  /** Origem da requisição (header Origin). */
  origemDaRequisicao: string | null;
};

export type Resposta = { status: number; corpo: Record<string, unknown> };

const REMETENTE_PADRAO = "Site Origami Lab <noreply@origamipulse.com.br>";
const ORIGENS = [/^https:\/\/(www\.)?origamilab\.com\.br$/, /^https:\/\/site-origami-[a-z0-9-]+\.vercel\.app$/, /^http:\/\/(localhost|127\.0\.0\.1|\[::1\]):\d+$/];

export function origemPermitida(origem: string | null): boolean {
  return !!origem && ORIGENS.some((re) => re.test(origem));
}

/** Sem e-mail (lead só com WhatsApp), o comercial responde pelo telefone do corpo. */
async function enviarPeloResend(deps: Dependencias, para: string, email: ReturnType<typeof montarEmail>, responderPara?: string): Promise<boolean> {
  const resp = await deps.fetch("https://api.resend.com/emails", {
    method: "POST",
    signal: AbortSignal.timeout(10_000),
    headers: { Authorization: `Bearer ${deps.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: deps.env.LEADS_DE || REMETENTE_PADRAO,
      to: [para],
      ...(responderPara ? { reply_to: responderPara } : {}),
      subject: email.assunto,
      html: email.html,
      text: email.texto,
    }),
  });
  return resp.ok;
}

export async function receberLead(entrada: unknown, deps: Dependencias): Promise<Resposta> {
  if (!origemPermitida(deps.origemDaRequisicao)) return { status: 403, corpo: { ok: false } };
  const leadId = deps.novoId();
  /* Robô recebe "ok" para não aprender a contornar a armadilha. */
  if (pareceRobo(entrada, deps.agora())) return { status: 200, corpo: { ok: true, leadId } };
  const validacao = validarLead(entrada);
  if (!validacao.ok) return { status: 400, corpo: { ok: false, erros: validacao.erros } };
  const para = deps.env.LEADS_PARA;
  if (!deps.env.RESEND_API_KEY || !para) {
    console.error("Leads: RESEND_API_KEY ou LEADS_PARA ausente; lead não enviado");
    return { status: 503, corpo: { ok: false } };
  }
  try {
    const enviado = await enviarPeloResend(deps, para, montarEmail(validacao.lead, leadId), validacao.lead.email);
    if (enviado) return { status: 200, corpo: { ok: true, leadId } };
    console.error("Leads: o Resend recusou o envio", leadId);
  } catch {
    console.error("Leads: falha de rede ao chamar o Resend", leadId);
  }
  return { status: 502, corpo: { ok: false } };
}
