import { receberLead } from "@/lib/leads/receber";

/* POST /api/lead: recebe o contato deixado numa ferramenta ou formulário do
   site e manda por e-mail ao comercial (Resend). Variáveis na Vercel:
   RESEND_API_KEY, LEADS_PARA e, opcional, LEADS_DE. */

const LIMITE_DE_BYTES = 16_000;

export async function POST(request: Request): Promise<Response> {
  const bruto = await request.text();
  if (bruto.length > LIMITE_DE_BYTES) return Response.json({ ok: false }, { status: 413 });
  let entrada: unknown;
  try {
    entrada = JSON.parse(bruto);
  } catch {
    return Response.json({ ok: false, erros: ["corpo"] }, { status: 400 });
  }
  const r = await receberLead(entrada, {
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      LEADS_PARA: process.env.LEADS_PARA,
      LEADS_DE: process.env.LEADS_DE,
    },
    fetch,
    agora: () => Date.now(),
    novoId: () => crypto.randomUUID(),
    origemDaRequisicao: request.headers.get("origin"),
  });
  return Response.json(r.corpo, { status: r.status, headers: { "cache-control": "no-store" } });
}
