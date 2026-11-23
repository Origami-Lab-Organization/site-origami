"use client";

import { useEffect } from "react";
import { iniciarMedicao, type AmplitudeMinimo, type JanelaDaMedicao } from "@/lib/medicao/medicao";

/* Inicia a medição uma vez por carregamento de página (o site navega com <a>,
   então cada página é um carregamento novo). As chaves vêm de
   NEXT_PUBLIC_AMPLITUDE_API_KEY e NEXT_PUBLIC_GA4_MEASUREMENT_ID, definidas na
   Vercel só em Production; por serem NEXT_PUBLIC, entram no build, e mudar o
   valor pede um novo deploy. */
function carregarScript(src: string): void {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export function Medicao() {
  useEffect(() => {
    void iniciarMedicao(window as unknown as JanelaDaMedicao, {
      chave: process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY,
      carregar: async () => {
        const amplitude = await import("@amplitude/unified");
        return amplitude as unknown as AmplitudeMinimo;
      },
      ga4: { id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID, carregarScript },
    });
  }, []);
  return null;
}
