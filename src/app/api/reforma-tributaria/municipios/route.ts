import { UFS } from "@/lib/reforma-tributaria/calculo";
import { municipios } from "@/lib/reforma-tributaria/receita";

const CACHE = { "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800" };

/** GET /api/reforma-tributaria/municipios?uf=MG — municípios com o código IBGE, da tabela da Receita. */
export async function GET(request: Request): Promise<Response> {
  const uf = new URL(request.url).searchParams.get("uf") ?? "";
  if (!UFS.some(([sigla]) => sigla === uf)) return Response.json({ ok: false }, { status: 400 });
  const lista = await municipios(fetch, uf);
  if (!lista) return Response.json({ ok: false }, { status: 502 });
  return Response.json(lista, { headers: CACHE });
}
