"use client";

import type { ReactNode } from "react";
import { useDetalhamentoLiberado } from "./liberacao";

/** Mostra o detalhamento do resultado só depois do contato. Antes, um bloco
 *  com linhas de exemplo borradas e o atalho para o formulário logo abaixo.
 *  O conteúdo real não é renderizado enquanto bloqueado. */
export function DetalheBloqueado({ ferramenta, oQueLibera, children }: { ferramenta: string; oQueLibera: string; children: ReactNode }) {
  const liberado = useDetalhamentoLiberado();
  if (liberado) return <>{children}</>;
  return (
    <div className="ol-bloqueio">
      <div className="ol-bloqueio__fantasma" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="ol-bloqueio__chamada">
        <p className="ol-bloqueio__titulo">{oQueLibera}</p>
        <p className="ol-bloqueio__texto">Deixe seu nome e e-mail ou WhatsApp para ver o detalhamento completo, aqui mesmo.</p>
        <a className="ol-btn ol-btn--primary ol-bloqueio__botao" href={`#contato-${ferramenta}`}>
          Liberar o detalhamento
        </a>
      </div>
    </div>
  );
}
