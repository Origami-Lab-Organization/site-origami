"use client";

import { useSyncExternalStore } from "react";

/* O detalhamento das ferramentas é liberado quando a pessoa deixa o contato.
   Fica guardado neste navegador: quem já deixou o contato numa ferramenta vê
   o detalhamento de todas. Sem armazenamento (aba privada, bloqueio), vale
   até recarregar a página. */

const CHAVE = "ol-detalhamento-liberado";
const EVENTO = "ol:detalhamento-liberado";
let liberadoNestaPagina = false;

function lerArmazenado(): boolean {
  try {
    return window.localStorage.getItem(CHAVE) === "1";
  } catch {
    return false;
  }
}

export function liberarDetalhamento(): void {
  liberadoNestaPagina = true;
  try {
    window.localStorage.setItem(CHAVE, "1");
  } catch {
    /* sem armazenamento: vale só nesta página */
  }
  window.dispatchEvent(new Event(EVENTO));
}

function assinar(aoMudar: () => void): () => void {
  window.addEventListener(EVENTO, aoMudar);
  window.addEventListener("storage", aoMudar);
  return () => {
    window.removeEventListener(EVENTO, aoMudar);
    window.removeEventListener("storage", aoMudar);
  };
}

/** No servidor (e no primeiro render) é sempre bloqueado: o detalhe não vai no HTML. */
export function useDetalhamentoLiberado(): boolean {
  return useSyncExternalStore(
    assinar,
    () => liberadoNestaPagina || lerArmazenado(),
    () => false,
  );
}
