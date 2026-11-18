import { Fragment, type ReactNode } from "react";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import { FORMULARIO } from "@/conteudo/contato";

/* Esqueleto das páginas de conteúdo e de ferramenta: nav, abertura curta
   (.ol-page__hero), conteúdo sobre a camada clara, rodapé, JSON-LD e o
   pagina.js (menu, FAQ, barra de progresso). */

export function Seta() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

type Migalha = { nome: string; caminho?: string };

type Props = {
  /** Trilha depois de "Origami Lab". O último item é a página atual (sem link). */
  migalhas: Migalha[];
  titulo: ReactNode;
  lead: ReactNode;
  /** Botões da abertura. Padrão: conversa com especialista + perguntas. */
  acoes?: ReactNode;
  meta?: string;
  dados: object;
  /** A página tem FAQ (#faq): o item "Perguntas" do menu rola até ela. */
  faqNaPagina?: boolean;
  /** Item do menu marcado como atual. */
  ativo?: "cases" | "ferramentas";
  children: ReactNode;
};

function AcoesPadrao() {
  return (
    <>
      <a className="ol-btn ol-btn--primary" href={FORMULARIO} target="_blank" rel="noopener">
        Converse com um especialista <Seta />
      </a>{" "}
      <a className="ol-btn ol-btn--ghost" href="#faq">
        Ir para as perguntas
      </a>
    </>
  );
}

function Trilha({ migalhas }: { migalhas: Migalha[] }) {
  return (
    <nav className="ol-crumb" aria-label="Você está em">
      <a href="/">Origami Lab</a>
      {migalhas.map((m) => (
        <Fragment key={m.nome}>
          {" "}
          <span aria-hidden="true">/</span>{" "}
          {m.caminho ? <a href={m.caminho}>{m.nome}</a> : <span>{m.nome}</span>}
        </Fragment>
      ))}
    </nav>
  );
}

export function PaginaDeConteudo({ migalhas, titulo, lead, acoes, meta, dados, faqNaPagina = true, ativo, children }: Props) {
  return (
    <>
      <Navegacao faqNaPagina={faqNaPagina} ativo={ativo} />
      <div className="ol-root" id="conteudo">
        <header className="ol-page__hero">
          <div className="ol-page__glow" aria-hidden="true" />
          <div className="ol-page__inner">
            <Trilha migalhas={migalhas} />
            <h1 className="ol-page__title">{titulo}</h1>
            <p className="ol-page__lead">{lead}</p>
            <div className="ol-page__actions">{acoes ?? <AcoesPadrao />}</div>
            {meta ? <p className="ol-page__meta">{meta}</p> : null}
          </div>
        </header>
        <div className="ol-over">
          {children}
          <Rodape />
        </div>
      </div>
      <DadosEstruturados dados={dados} />
      <ScriptsDaPagina scripts={["pagina"]} />
    </>
  );
}
