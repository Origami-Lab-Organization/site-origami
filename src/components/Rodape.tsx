import { EMAIL, FORMULARIO, INSTAGRAM, LINKEDIN, MAPA, TRABALHE_CONOSCO, WHATSAPP, WHATSAPP_ROTULO } from "@/conteudo/contato";

type Props = {
  /** Na home os links de seção são âncoras da própria página. */
  home?: boolean;
  /** Marca d'água com parallax (só nas páginas que carregam o main.js). */
  parallax?: boolean;
};

const SECOES = [
  { id: "servicos", rotulo: "Serviços" },
  { id: "como", rotulo: "Como trabalhamos" },
  { id: "clientes", rotulo: "Clientes" },
  { id: "quem-somos", rotulo: "Quem somos" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

const SERVICOS = [
  { href: "/desenvolvimento-de-software", rotulo: "Desenvolvimento de software" },
  { href: "/modernizacao-de-sistemas-legados", rotulo: "Modernização de sistemas legados" },
  { href: "/consultoria-estrategica", rotulo: "Consultoria estratégica" },
  { href: "/acesso-a-capital", rotulo: "Acesso a capital" },
];

const GUIAS = [
  { href: "/guias", rotulo: "Todos os guias" },
  { href: "/mes-vs-erp", rotulo: "MES e ERP" },
  { href: "/automacao-de-contas-a-receber", rotulo: "Automação de contas a receber" },
  { href: "/integracao-de-sistemas", rotulo: "Integração de sistemas" },
  { href: "/software-sob-medida", rotulo: "Software sob medida" },
  { href: "/ia-na-industria", rotulo: "IA na indústria" },
  { href: "/lei-do-bem", rotulo: "Lei do Bem" },
  { href: "/lei-do-bem-desenvolvimento-de-software", rotulo: "Lei do Bem e software" },
  { href: "/lei-do-bem-na-pratica", rotulo: "Lei do Bem na prática" },
  { href: "/financiamento-de-inovacao", rotulo: "Financiamento de inovação" },
  { href: "/finep", rotulo: "FINEP: como funciona" },
  { href: "/finep-inovacred", rotulo: "Finep Inovacred" },
  { href: "/bndes-mais-inovacao", rotulo: "BNDES Mais Inovação" },
  { href: "/embrapii", rotulo: "EMBRAPII" },
  { href: "/unificacao-de-produtos-digitais", rotulo: "Unificação de produtos digitais" },
];

const FERRAMENTAS = [
  { href: "/calculadora-reforma-tributaria", rotulo: "Calculadora da reforma tributária" },
  { href: "/calculadora-de-oee", rotulo: "Calculadora de OEE" },
  { href: "/simulador-lei-do-bem", rotulo: "Simulador da Lei do Bem" },
  { href: "/fomento-a-inovacao", rotulo: "Qual fomento serve" },
  { href: "/calculadora-custo-hora-maquina", rotulo: "Custo hora-máquina" },
  { href: "/diagnostico-de-modernizacao", rotulo: "Diagnóstico de modernização" },
  { href: "/ferramentas", rotulo: "Todas as ferramentas" },
];

const SOLUCOES = [
  { href: "/software-para-industria-metalurgica", rotulo: "Software para metalúrgicas" },
  { href: "/planejamento-de-producao", rotulo: "Planejamento da produção (PCP)" },
  { href: "/apontamento-de-producao", rotulo: "Apontamento de produção" },
  { href: "/integracao-erp-chao-de-fabrica", rotulo: "Integração ERP e chão de fábrica" },
  { href: "/automacao-de-processos-industriais", rotulo: "Automação de processos" },
  { href: "/gestao-industrial-em-tempo-real", rotulo: "Gestão industrial em tempo real" },
  { href: "/tecnologia-para-industrias-minas-gerais", rotulo: "Indústrias de Minas Gerais" },
];

function Coluna({ titulo, rotuloAria, links }: { titulo: string; rotuloAria: string; links: { href: string; rotulo: string }[] }) {
  return (
    <div>
      <div className="ol-footer__title">{titulo}</div>
      <nav className="ol-footer__list ol-footer__list--nav" aria-label={rotuloAria}>
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.rotulo}
          </a>
        ))}
      </nav>
    </div>
  );
}

function Redes() {
  return (
    <div className="ol-social">
      <a href={LINKEDIN} target="_blank" rel="noopener" aria-label="LinkedIn da Origami Lab">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
      <a href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram da Origami Lab">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>
    </div>
  );
}

export function Rodape({ home = false, parallax = false }: Props) {
  const secoes = SECOES.map((s) => ({ href: home ? `#${s.id}` : `/#${s.id}`, rotulo: s.rotulo }));
  const navegar = [...secoes, { href: "/cases", rotulo: "Cases" }];
  return (
    <footer className="ol-footer">
      <div className="ol-footer__inner">
        <div className="ol-footer__cols">
          <div>
            <img className="ol-footer__logo" src="/assets/logo-horizontal-white.svg" alt="Origami Lab" width="7811" height="1830" />
            <p className="ol-footer__tagline">Tecnologia para indústria: software, integração e automação para modernizar a operação.</p>
            <a className="ol-btn ol-btn--ghost ol-footer__cta" href={TRABALHE_CONOSCO} target="_blank" rel="noopener">
              Trabalhe conosco
            </a>
          </div>
          <Coluna titulo="Navegar" rotuloAria="Rodapé" links={navegar} />
          <Coluna titulo="Serviços" rotuloAria="Serviços" links={SERVICOS} />
          <Coluna titulo="Guias" rotuloAria="Guias" links={GUIAS} />
          <Coluna titulo="Soluções para indústria" rotuloAria="Soluções para indústria" links={SOLUCOES} />
          <Coluna titulo="Ferramentas grátis" rotuloAria="Ferramentas grátis" links={FERRAMENTAS} />
          <div>
            <div className="ol-footer__title">Contato</div>
            <div className="ol-footer__list">
              <a href={FORMULARIO}>
                Solicitar conversa de 30 minutos
              </a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={WHATSAPP} target="_blank" rel="noopener">
                WhatsApp · {WHATSAPP_ROTULO}
              </a>
              <a href={MAPA} target="_blank" rel="noopener">
                R. Silviano Brandão, 156 — 2º andar
                <br />
                Centro, Formiga — MG, 35570-112
              </a>
              <Redes />
            </div>
          </div>
        </div>
        <div className="ol-footer__bottom">
          <span>© {new Date().getFullYear()} Origami Lab · Formiga, MG</span>
          <span>
            Conectamos a força da tradição ao poder da inovação. · <a href="/politica-de-privacidade">Política de privacidade</a>
          </span>
        </div>
      </div>
      <img className="ol-footer__mark" src="/assets/logo-horizontal-white.svg" alt="" aria-hidden="true" {...(parallax ? { "data-px": "0.04" } : {})} />
    </footer>
  );
}
