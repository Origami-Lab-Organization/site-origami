"use client";

import { useEffect } from "react";
import { iniciarMedicao, type AmplitudeMinimo, type JanelaDaMedicao } from "@/lib/medicao/medicao";

/* Inicia a medição uma vez por carregamento de página (o site navega com <a>,
   então cada página é um carregamento novo). A chave vem de
   NEXT_PUBLIC_AMPLITUDE_API_KEY, definida na Vercel só em Production. */
export function Medicao() {
  useEffect(() => {
    void iniciarMedicao(window as unknown as JanelaDaMedicao, {
      chave: process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY,
      carregar: async () => {
        const amplitude = await import("@amplitude/unified");
        return amplitude as unknown as AmplitudeMinimo;
      },
    });
  }, []);
  return null;
}
