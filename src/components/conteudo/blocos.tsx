import type { ReactNode } from "react";
import { FORMULARIO, WHATSAPP } from "@/conteudo/contato";
import type { Pergunta } from "@/lib/seo/estruturados";
import { Seta } from "./PaginaDeConteudo";

/* Blocos das páginas de conteúdo, com a mesma marcação das páginas migradas
   (o CSS e o pagina.js dependem dela). */

export type ItemDoSumario = { id: string; rotulo: string };

/** Texto principal com o sumário fixo ao lado. */
export function Documento({ sumario, children }: { sumario: ItemDoSumario[]; children: ReactNode }) {
  return (
    <section className="ol-doc">
      <div className="ol-doc__inner">
        <aside className="ol-toc">
          <div className="ol-toc__title">Nesta página</div>
          <ul className="ol-toc__list">
            {sumario.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.rotulo}</a>
              </li>
            ))}
          </ul>
        </aside>
        <article className="ol-prose">{children}</article>
      </div>
    </section>
  );
}

/** Quadro de fatos (.ol-key): definições curtas, fáceis de citar. */
export function QuadroDeFatos({ titulo, itens }: { titulo: string; itens: { termo: string; definicao: ReactNode }[] }) {
  return (
    <div className="ol-key">
      <div className="ol-key__title">{titulo}</div>
      <dl>
        {itens.map((i) => (
          <div key={i.termo} style={{ display: "contents" }}>
            <dt>{i.termo}</dt>
            <dd>{i.definicao}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Aviso em âmbar (.ol-note): limites, ressalvas, "confirme na fonte oficial". */
export function Nota({ children }: { children: ReactNode }) {
  return <div className="ol-note">{children}</div>;
}

export function Tabela({ cabecalho, linhas }: { cabecalho: string[]; linhas: ReactNode[][] }) {
  return (
    <div className="ol-tablewrap">
      <table className="ol-table">
        <thead>
          <tr>
            {cabecalho.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((l, i) => (
            <tr key={i}>
              {l.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IconeMais() {
  return (
    <span className="ol-faq__icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </span>
  );
}

/** FAQ visível. O JSON-LD FAQPage sai das mesmas perguntas (grafoDaPagina). */
export function Perguntas({ prefixo, perguntas }: { prefixo: string; perguntas: Pergunta[] }) {
  return (
    <section className="ol-faq ol-faq--page" id="faq">
      <div className="ol-faq__inner">
        <div className="ol-faq__aside">
          <h2 className="ol-h2 ol-h2--ink">Perguntas frequentes</h2>
          <p>
            Ficou alguma dúvida que não está aqui?{" "}
            <a href={FORMULARIO} target="_blank" rel="noopener">
              Fale com a gente
            </a>
            .
          </p>
        </div>
        <div className="ol-faq__list">
          {perguntas.map((p, i) => {
            const id = `faq-${prefixo}-${i + 1}`;
            return (
              <div key={id} className="ol-faq__item" data-faq="" {...(i === 0 ? { "data-faq-open": "" } : {})}>
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls={id}>
                  <span>{p.pergunta}</span> <IconeMais />
                </button>
                <div className="ol-faq__body" id={id} data-faq-body="">
                  <p>{p.resposta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export type Leitura = { href: string; titulo: string; texto: string };

export function LeiturasRelacionadas({ titulo = "Continuar por aqui", leituras }: { titulo?: string; leituras: Leitura[] }) {
  return (
    <section className="ol-next" aria-labelledby="relacionadas">
      <div className="ol-next__inner">
        <h2 className="ol-next__title" id="relacionadas">
          {titulo}
        </h2>
        <ul className="ol-next__grid">
          {leituras.map((l) => (
            <li key={l.href}>
              <a className="ol-next__card" href={l.href}>
                <b>{l.titulo}</b>
                <span>{l.texto}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type Chamada = {
  titulo: ReactNode;
  lead: ReactNode;
  rotulo?: string;
  /** Mensagem pré-preenchida do WhatsApp. */
  whatsapp?: string;
};

/** Chamada final (#contato). */
export function ChamadaFinal({ titulo, lead, rotulo = "Converse com um especialista", whatsapp = "Olá! Quero conversar sobre a operação da minha empresa." }: Chamada) {
  return (
    <section className="ol-cta" id="contato">
      <div className="ol-cta__glow" aria-hidden="true" />
      <div className="ol-cta__inner">
        <h2 className="ol-cta__title">{titulo}</h2>
        <p className="ol-cta__lead">{lead}</p>
        <div className="ol-cta__actions">
          <a className="ol-btn ol-btn--primary ol-btn--lg" href={FORMULARIO} target="_blank" rel="noopener">
            {rotulo} <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href={`${WHATSAPP}?text=${encodeURIComponent(whatsapp)}`} target="_blank" rel="noopener">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
