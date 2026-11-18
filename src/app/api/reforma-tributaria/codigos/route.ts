import { codigos } from "@/lib/reforma-tributaria/receita";

const CACHE = { "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800" };

/** GET /api/reforma-tributaria/codigos?tipo=ncm|nbs&q=8466&data=AAAA-MM-DD — até 20 NCM ou NBS vigentes. */
export async function GET(request: Request): Promise<Response> {
  const p = new URL(request.url).searchParams;
  const tipo = p.get("tipo") === "nbs" ? "nbs" : "ncm";
  const termo = (p.get("q") ?? "").slice(0, 60);
  const lista = await codigos(fetch, tipo, termo, p.get("data") ?? "");
  if (!lista) return Response.json({ ok: false }, { status: 502 });
  return Response.json(lista, { headers: CACHE });
}
