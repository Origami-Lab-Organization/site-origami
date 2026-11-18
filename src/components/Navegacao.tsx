import { FORMULARIO } from "@/conteudo/contato";

type Props = {
  /** Na home os links são âncoras da própria página e o logo volta ao topo. */
  home?: boolean;
  /** A página tem FAQ própria: "Perguntas" rola até ela em vez de ir para a da home. */
  faqNaPagina?: boolean;
  ativo?: "cases" | "ferramentas";
  /** Texto do botão de contato. */
  cta?: string;
};

const SECOES = [
  { id: "servicos", rotulo: "Serviços" },
  { id: "como", rotulo: "Como trabalhamos" },
  { id: "clientes", rotulo: "Clientes" },
  { id: "quem-somos", rotulo: "Quem somos" },
];

export function Navegacao({ home = false, faqNaPagina = false, ativo, cta = "Agendar conversa" }: Props) {
  const ancora = (id: string) => (home ? `#${id}` : `/#${id}`);
  const faq = home || faqNaPagina ? "#faq" : "/#faq";
  return (
    <nav className="ol-nav" data-nav="">
      <div className="ol-nav__inner">
        <a className="ol-nav__logo" href={home ? "#topo" : "/"} aria-label="Origami Lab, início">
          <img src="/assets/logo-horizontal-white.svg" alt="Origami Lab" width="7811" height="1830" />
        </a>
        <div className="ol-nav__right">
          <div className="ol-nav__links">
            {SECOES.map((s) => (
              <a key={s.id} className="ol-nav__link" href={ancora(s.id)}>
                {s.rotulo}
              </a>
            ))}
            <a className="ol-nav__link" href={faq}>
              Perguntas
            </a>
            <a className={ativo === "cases" ? "ol-nav__link is-active" : "ol-nav__link"} href="/cases">
              Cases
            </a>
            <a className={ativo === "ferramentas" ? "ol-nav__link is-active" : "ol-nav__link"} href="/ferramentas">
              Ferramentas
            </a>
          </div>
          <a className="ol-btn ol-btn--primary ol-btn--sm" data-magnet="" href={FORMULARIO} target="_blank" rel="noopener">
            {cta}
          </a>
          <button className="ol-nav__toggle" type="button" aria-expanded="false" aria-controls="ol-menu" aria-label="Abrir menu">
            <svg className="ol-nav__bars" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg className="ol-nav__x" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>
      <div className="ol-nav__panel" id="ol-menu">
        {SECOES.map((s) => (
          <a key={s.id} href={ancora(s.id)}>
            {s.rotulo}
          </a>
        ))}
        <a href={faq}>Perguntas frequentes</a>
        <a href="/cases">Cases</a>
        <a href="/ferramentas">Ferramentas grátis</a>
        <a className="ol-btn ol-btn--primary" href={FORMULARIO} target="_blank" rel="noopener">
          {cta}
        </a>
      </div>
      <div className="ol-nav__track">
        <div className="ol-nav__progress" data-progress="" />
      </div>
    </nav>
  );
}
