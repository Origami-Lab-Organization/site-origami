import { origemPermitida } from "@/lib/leads/receber";
import { calcular } from "@/lib/reforma-tributaria/receita";

/* POST /api/reforma-tributaria/calcular: CBS e IBS de uma operação pela API
   pública da calculadora oficial da Receita Federal. Só aceita chamadas do
   próprio site; nada é guardado. */

const LIMITE_DE_BYTES = 4_000;

export async function POST(request: Request): Promise<Response> {
  if (!origemPermitida(request.headers.get("origin"))) return Response.json({ ok: false }, { status: 403 });
  const bruto = await request.text();
  if (bruto.length > LIMITE_DE_BYTES) return Response.json({ ok: false }, { status: 413 });
  let entrada: unknown;
  try {
    entrada = JSON.parse(bruto);
  } catch {
    return Response.json({ ok: false, erros: ["corpo"] }, { status: 400 });
  }
  const r = await calcular(entrada, fetch, crypto.randomUUID());
  return Response.json(r.corpo, { status: r.status, headers: { "cache-control": "no-store" } });
}
