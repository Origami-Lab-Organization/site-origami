import type { NextConfig } from "next";
import { PAGINAS } from "./src/conteudo/paginas";

/* Os redirects do blog (host blog.origamilab.com.br), o /about e os cabeçalhos
   de segurança e cache continuam no vercel.json: são aplicados pela Vercel
   antes do Next e já estavam validados. Aqui ficam só os redirects das URLs
   antigas com .html, que o cleanUrls da versão estática fazia sozinho. */

function caminhoHtml(caminho: string): string {
  if (caminho === "/") return "/index.html";
  if (caminho === "/cases") return "/cases/index.html";
  return `${caminho}.html`;
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return PAGINAS.map((p) => ({ source: caminhoHtml(p.caminho), destination: p.caminho, permanent: true }));
  },
};

export default nextConfig;
