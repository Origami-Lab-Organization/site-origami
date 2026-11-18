import { situacoes } from "@/lib/reforma-tributaria/receita";

const CACHE = { "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800" };

/** GET /api/reforma-tributaria/classificacoes?data=AAAA-MM-DD — CST de IBS/CBS com as classificações (cClassTrib). */
export async function GET(request: Request): Promise<Response> {
  const lista = await situacoes(fetch, new URL(request.url).searchParams.get("data") ?? "");
  if (!lista) return Response.json({ ok: false }, { status: 502 });
  return Response.json(lista, { headers: CACHE });
}
