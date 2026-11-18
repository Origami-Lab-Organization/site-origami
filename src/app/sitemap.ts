import type { MetadataRoute } from "next";
import { PAGINAS, SITE } from "@/conteudo/paginas";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGINAS.map((p) => ({
    url: p.caminho === "/" ? `${SITE}/` : `${SITE}${p.caminho}`,
    lastModified: p.atualizadaEm,
    ...(p.frequencia ? { changeFrequency: p.frequencia } : {}),
    ...(p.prioridade !== undefined ? { priority: p.prioridade } : {}),
  }));
}
