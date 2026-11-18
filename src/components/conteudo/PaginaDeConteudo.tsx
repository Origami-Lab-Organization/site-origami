import { Fragment, type ReactNode } from "react";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { Navegacao } from "@/components/Navegacao";
import { PreloadDaFonteSerifada } from "@/components/PreloadDaFonteSerifada";
import { Rodape } from "@/components/Rodape";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import { FORMULARIO } from "@/conteudo/contato";

/* Esqueleto das páginas de conteúdo e de ferramenta: nav, abertura no padrão
   dos cases (rótulo, título serif, resposta curta ao lado), conteúdo sobre a
   camada clara, rodapé, JSON-LD e o pagina.js (menu, FAQ, barra de progresso). */

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
  /** Rótulo verde acima do título (.ol-kicker), como nos cases e serviços. */
  rotulo: string;
  /** Título em serif. Destaque uma expressão com <em className="ol-em">. */
  titulo: ReactNode;
  lead: ReactNode;
  /**
   * "resposta": o lead é a resposta direta da página e vai num cartão ao lado
   * do título (fica no topo para buscadores e IA, sem virar um paredão de texto).
   * "simples": lead curto, logo abaixo do título.
   */
  abertura?: "resposta" | "simples";
  /** Rótulo do cartão de resposta. */
  rotuloDoLead?: string;
  /** Botões da abertura. Padrão: conversa com especialista + perguntas. */
  acoes?: ReactNode;
  meta?: string;
  dados: object;
  /** A página tem FAQ (#faq): o item "Perguntas" do menu rola até ela. */
  faqNaPagina?: boolean;
  /** Item do menu marcado como atual. */
  ativo?: "cases" | "ferramentas" | "guias";
  children: ReactNode;
};

function AcoesPadrao() {
  return (
    <>
      <a className="ol-btn ol-btn--primary" href={FORMULARIO}>
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

export function PaginaDeConteudo({
  migalhas,
  rotulo,
  titulo,
  lead,
  abertura = "resposta",
  rotuloDoLead = "Resposta curta",
  acoes,
  meta,
  dados,
  faqNaPagina = true,
  ativo,
  children,
}: Props) {
  const emCartao = abertura === "resposta";
  return (
    <>
      <PreloadDaFonteSerifada />
      <Navegacao faqNaPagina={faqNaPagina} ativo={ativo} />
      <div className="ol-root" id="conteudo">
        <header className="ol-page__hero">
          <div className="ol-page__glow" aria-hidden="true" />
          <div className="ol-page__inner">
            <Trilha migalhas={migalhas} />
            <div className={emCartao ? "ol-page__grid" : "ol-page__grid ol-page__grid--simples"}>
              <div className="ol-page__intro">
                <span className="ol-kicker">{rotulo}</span>
                <h1 className="ol-page__title">{titulo}</h1>
                {emCartao ? null : <p className="ol-page__lead">{lead}</p>}
              </div>
              {emCartao ? (
                <div className="ol-page__resumo">
                  <p className="ol-page__rotulo">{rotuloDoLead}</p>
                  <p className="ol-page__lead">{lead}</p>
                  {meta ? <p className="ol-page__meta">{meta}</p> : null}
                </div>
              ) : null}
              <div className="ol-page__actions">{acoes ?? <AcoesPadrao />}</div>
              {!emCartao && meta ? <p className="ol-page__meta">{meta}</p> : null}
            </div>
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
