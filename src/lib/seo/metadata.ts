import type { Metadata } from "next";
import { url } from "./estruturados";

/* Metadata das páginas novas, no mesmo formato das páginas migradas:
   title absoluto, canonical, robots com snippet longo, Open Graph e Twitter. */

const CAPA = { url: "https://www.origamilab.com.br/assets/og-cover.jpg", width: 1200, height: 630, type: "image/jpeg" };
const ALT = "Origami Lab — modernizamos a operação das grandes empresas tradicionais.";

type Opcoes = {
  /** Até ~60 caracteres; o "| Origami Lab" é acrescentado aqui. */
  titulo: string;
  /** Até ~155 caracteres. */
  descricao: string;
  caminho: string;
  tipo?: "website" | "article";
  /** Título para redes sociais, sem o sufixo da marca (padrão: o próprio título). */
  tituloSocial?: string;
  indexar?: boolean;
};

export function metadataDaPagina({ titulo, descricao, caminho, tipo = "article", tituloSocial, indexar = true }: Opcoes): Metadata {
  const social = tituloSocial ?? titulo;
  return {
    title: { absolute: `${titulo} | Origami Lab` },
    description: descricao,
    alternates: { canonical: url(caminho) },
    robots: indexar ? { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } : { index: false, follow: true },
    openGraph: {
      type: tipo,
      locale: "pt_BR",
      url: url(caminho),
      siteName: "Origami Lab",
      title: social,
      description: descricao,
      images: [{ ...CAPA, alt: ALT }],
    },
    twitter: { card: "summary_large_image", title: social, description: descricao, images: [{ url: CAPA.url, alt: ALT }] },
  };
}
