import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import { Medicao } from "@/components/Medicao";
import { SITE } from "@/conteudo/paginas";
import "@/estilos/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  icons: { icon: { url: "/assets/logo-mark-color.svg", type: "image/svg+xml" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04070E",
};

export default function LayoutRaiz({ children }: Readonly<{ children: React.ReactNode }>) {
  preload("/assets/fonts/inter-normal-400-900-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return (
    <html lang="pt-BR">
      <body>
        <a className="ol-sr" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <Medicao />
      </body>
    </html>
  );
}
