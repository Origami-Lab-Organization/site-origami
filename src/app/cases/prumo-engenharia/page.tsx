import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import { PreloadDaFonteSerifada } from "@/components/PreloadDaFonteSerifada";
import { atualizacaoDaPagina } from "@/conteudo/paginas";
import { ORGANIZACAO, SITE_NODE } from "@/lib/seo/estruturados";

export const metadata: Metadata = {
  "title": {
    "absolute": "Intranet corporativa da Prumo Engenharia | Case Origami Lab"
  },
  "description": "A Prumo Engenharia perdia documentos e comunicados entre obras e setores. Construímos uma intranet em SharePoint Online para 500+ colaboradores em 8 semanas.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/cases/prumo-engenharia"
  },
  "robots": {
    "index": true,
    "follow": true,
    "max-image-preview": "large",
    "max-snippet": -1
  },
  "openGraph": {
    "type": "article",
    "locale": "pt_BR",
    "url": "https://www.origamilab.com.br/cases/prumo-engenharia",
    "siteName": "Origami Lab",
    "title": "Prumo Engenharia: intranet corporativa que conectou pessoas e processos",
    "description": "Uma intranet em SharePoint Online como canal único entre obra e administrativo: 500+ colaboradores, 8 semanas do kickoff ao handoff.",
    "images": [
      {
        "url": "https://www.origamilab.com.br/assets/pitch-03.webp",
        "alt": "Equipe da Origami Lab em campo com a Prumo Engenharia."
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "images": [
      {
        "url": "https://www.origamilab.com.br/assets/pitch-03.webp",
        "alt": "Equipe da Origami Lab em campo com a Prumo Engenharia."
      }
    ]
  }
};

const DADOS_ESTRUTURADOS = {
  "@context": "https://schema.org",
  "@graph": [
    ORGANIZACAO,
    SITE_NODE,
    {
      "@type": "Article",
      "@id": "https://www.origamilab.com.br/cases/prumo-engenharia#article",
      "headline": "Como a Prumo Engenharia conectou pessoas e processos com uma intranet corporativa",
      "description": "Intranet corporativa em SharePoint Online como canal único entre obra e administrativo, para mais de 500 colaboradores, implantada em 8 semanas.",
      "url": "https://www.origamilab.com.br/cases/prumo-engenharia",
      "inLanguage": "pt-BR",
      "datePublished": "2026-01-23",
      "image": "https://www.origamilab.com.br/assets/pitch-03.webp",
      "author": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "about": {
        "@type": "Organization",
        "name": "Prumo Engenharia"
      },
      "mentions": [
        {
          "@type": "SoftwareApplication",
          "name": "Microsoft SharePoint Online",
          "applicationCategory": "BusinessApplication"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Power Automate",
          "applicationCategory": "BusinessApplication"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Power BI",
          "applicationCategory": "BusinessApplication"
        }
      ],
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "dateModified": atualizacaoDaPagina("/cases/prumo-engenharia")
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://www.origamilab.com.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cases",
          "item": "https://www.origamilab.com.br/cases"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Prumo Engenharia",
          "item": "https://www.origamilab.com.br/cases/prumo-engenharia"
        }
      ]
    }
  ]
};

export default function PaginaCasesPrumoEngenharia() {
  return (
    <>
      <Navegacao ativo="cases" />
      <div className="ol-root ol-root--case" id="conteudo">
        {/* ==================== Abertura ==================== */}
        <section className="ol-phero">
          <div className="ol-phero__glow" aria-hidden="true" />
          <div className="ol-phero__inner">
            <nav className="ol-crumb" aria-label="Trilha de navegação">
              <a href="/">Início</a>
              {" "}
              <i aria-hidden="true">/</i>
              {" "}
              <a href="/cases">Cases</a>
              {" "}
              <i aria-hidden="true">/</i>
              {" "}
              <span aria-current="page">Prumo Engenharia</span>
            </nav>
            <span className="ol-kicker" data-anim="">Engenharia e manutenção</span>
            <h1 className="ol-phero__title" data-anim="" data-d="1">
              {"Como a Prumo Engenharia conectou "}
              <em className="ol-em">pessoas e processos</em>
              {" com uma intranet corporativa"}
            </h1>
            <p className="ol-phero__lead" data-anim="" data-d="2">
              Uma empresa em expansão acelerada, com equipes espalhadas por obras e setores, não tinha um lugar só para encontrar documento, política e comunicado. Construímos esse lugar e entregamos a chave para a própria Prumo.
            </p>
            <dl className="ol-facts" data-anim="" data-d="3">
              <div>
                <dt>Cliente</dt>
                <dd>Prumo Engenharia</dd>
              </div>
              <div>
                <dt>Setor</dt>
                <dd>Engenharia e manutenção</dd>
              </div>
              <div>
                <dt>Alcance</dt>
                <dd>500+ colaboradores</dd>
              </div>
              <div>
                <dt>Duração</dt>
                <dd>8 semanas, em 3 fases</dd>
              </div>
            </dl>
          </div>
        </section>
        {/* ==================== Corpo do case ==================== */}
        <section className="ol-case">
          <div className="ol-case__inner">
            <div className="ol-case__main">
              <article className="ol-case__block" data-anim="">
                <h2>O desafio</h2>
                <div className="ol-prose">
                  <p>
                    A Prumo crescia rápido, e o crescimento chegou antes da estrutura de informação. Documentos circulavam em canais diferentes, comunicados importantes se perdiam no meio dos e-mails e o acesso à informação era descentralizado: cada setor guardava a sua versão.
                  </p>
                  <p>
                    {"O efeito prático aparecia todo dia. Equipe de campo e equipe administrativa trabalhavam com conteúdos diferentes sobre o mesmo assunto, o que gerava "}
                    <strong>retrabalho e inconsistência</strong>
                    , e consumia horas de quem deveria estar tocando obra. Ficou claro que a empresa precisava de uma plataforma única, capaz de reunir informações, documentos e pessoas em um só lugar.
                  </p>
                </div>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>O que construímos</h2>
                <div className="ol-prose">
                  <p>
                    {"Uma intranet corporativa moderna sobre "}
                    <strong>Microsoft SharePoint Online</strong>
                    , personalizada para a realidade da Prumo. A escolha não foi por moda: a empresa já operava no ecossistema Microsoft, então a intranet nasceu dentro do login que as pessoas já usavam, sem mais uma senha para decorar.
                  </p>
                </div>
                <ul className="ol-deliver">
                  <li>
                    <span>01</span>
                    <div>
                      <h3>Notícias e comunicados oficiais</h3>
                      <p>Um canal único de publicação: o que é oficial vive na intranet, não no grupo de WhatsApp.</p>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <h3>Calendário corporativo e agenda por setor</h3>
                      <p>Datas da empresa e de cada área no mesmo lugar, visíveis para campo e administrativo.</p>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <div>
                      <h3>Bibliotecas setoriais</h3>
                      <p>Políticas, manuais e procedimentos versionados por setor: uma fonte só, sempre a versão vigente.</p>
                    </div>
                  </li>
                  <li>
                    <span>04</span>
                    <div>
                      <h3>Automações com Power Automate</h3>
                      <p>Fluxos de aprovação e distribuição de conteúdo que antes dependiam de alguém lembrar de encaminhar.</p>
                    </div>
                  </li>
                  <li>
                    <span>05</span>
                    <div>
                      <h3>Integração com o Viva Engage</h3>
                      <p>O espaço de conversa entre as equipes conectado à intranet, no mesmo ambiente corporativo.</p>
                    </div>
                  </li>
                  <li>
                    <span>06</span>
                    <div>
                      <h3>Acesso e segurança</h3>
                      <p>Single Sign-On e autenticação multifator: entrada com a mesma credencial da empresa, com proteção adicional.</p>
                    </div>
                  </li>
                </ul>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>Como foi implantado</h2>
                <div className="ol-prose">
                  <p>
                    O projeto rodou em três fases curtas, cada uma com entrega visível ao fim. Nenhuma fase começou antes da anterior provar que funcionava.
                  </p>
                </div>
                <div className="ol-phases">
                  <article className="ol-phase">
                    <b>01</b>
                    <h3>Kickoff e refinamento</h3>
                    <p>Alinhamento com as lideranças, levantamento do que cada setor precisa publicar e refinamento do escopo.</p>
                    <em>2 semanas</em>
                  </article>
                  <article className="ol-phase">
                    <b>02</b>
                    <h3>Desenvolvimento e lançamento</h3>
                    <p>Construção da intranet, das bibliotecas e das automações, com validação contínua e entrada no ar.</p>
                    <em>4 semanas</em>
                  </article>
                  <article className="ol-phase">
                    <b>03</b>
                    <h3>Handoff e crescimento</h3>
                    <p>Transferência de conhecimento e treinamento para a equipe da Prumo administrar e evoluir a plataforma.</p>
                    <em>2 semanas</em>
                  </article>
                </div>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>O que mudou na operação</h2>
                <div className="ol-results">
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3v4" />
                        <path d="M12 17v4" />
                        <path d="M3 12h4" />
                        <path d="M17 12h4" />
                        <path d="m5.6 5.6 2.8 2.8" />
                        <path d="m15.6 15.6 2.8 2.8" />
                        <path d="m18.4 5.6-2.8 2.8" />
                        <path d="m8.4 15.6-2.8 2.8" />
                      </svg>
                    </span>
                    <h3>Comunicação centralizada</h3>
                    <p>Mais de 500 colaboradores com acesso unificado à mesma informação, do escritório à obra.</p>
                  </article>
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m19 12-7 7-7-7" />
                        <path d="M12 5v14" />
                      </svg>
                    </span>
                    <h3>Menos erro e retrabalho</h3>
                    <p>Documento com versão única encerra a divergência entre o que o campo lê e o que o administrativo publica.</p>
                  </article>
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 17 9 11l4 4 8-8" />
                        <path d="M21 7v6h-6" />
                      </svg>
                    </span>
                    <h3>Uso acompanhado em tempo real</h3>
                    <p>Painéis em Power BI mostram o que está sendo acessado, para a comunicação interna decidir com dado.</p>
                  </article>
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <h3>Autonomia da equipe Prumo</h3>
                    <p>A administração da plataforma ficou com o time da empresa: publicar, estruturar e evoluir sem depender de fornecedor.</p>
                  </article>
                </div>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>Por que isso importa</h2>
                <div className="ol-prose">
                  <p>
                    Intranet não é assunto de TI: é assunto de operação. Em uma empresa de engenharia, informação errada em obra vira material comprado duas vezes, procedimento executado na versão antiga e hora extra para corrigir. Centralizar o canal foi, na prática, reduzir custo de coordenação.
                  </p>
                  <p>
                    É por isso que o projeto terminou no handoff, e não no lançamento: uma plataforma que só o fornecedor sabe operar envelhece em seis meses. Esta ficou nas mãos de quem usa.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* ==================== Projetos e leituras relacionadas ==================== */}
        <section className="ol-next" aria-labelledby="relacionadas">
          <div className="ol-next__inner">
            <h2 className="ol-next__title" id="relacionadas">Serviços e leituras relacionadas</h2>
            <ul className="ol-next__grid">
              <li>
                <a className="ol-next__card" href="/desenvolvimento-de-software">
                  <b>Desenvolvimento de software sob medida</b>
                  <span>Como a Origami Lab constrói e implanta sistemas para o que o ERP não cobre, do diagnóstico à autonomia do time.</span>
                </a>
              </li>
              <li>
                <a className="ol-next__card" href="/software-sob-medida">
                  <b>Pronto ou sob medida?</b>
                  <span>O critério para decidir entre produto pronto e sob medida, e os cinco fatores que definem o custo de um projeto.</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* ==================== Chamada final ==================== */}
        <section className="ol-cta" id="contato">
          <div className="ol-cta__glow" data-px="0.05" aria-hidden="true" />
          <div className="ol-cta__inner" data-scale-in="">
            <h2 className="ol-cta__title">
              {"A sua operação tem o mesmo "}
              <em className="ol-em">gargalo de informação</em>
              ?
            </h2>
            <p className="ol-cta__lead">
              A primeira conversa dura 30 minutos e serve para uma coisa só: entender a sua necessidade e apontar onde estão as maiores oportunidades. Se fizer sentido para os dois lados, seguimos. Se não fizer, a gente diz.
            </p>
            <div className="ol-cta__actions">
              <a className="ol-btn ol-btn--primary ol-btn--lg" data-magnet="" href="/conversar">
                {"Solicitar conversa de 30 minutos "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="https://wa.me/553198055189?text=Ol%C3%A1!%20Vi%20o%20case%20da%20Prumo%20e%20quero%20conversar%20sobre%20a%20minha%20opera%C3%A7%C3%A3o." target="_blank" rel="noopener">Falar no WhatsApp</a>
            </div>
          </div>
        </section>
        {/* ==================== Outros cases ==================== */}
        <section className="ol-nextcase">
          <div className="ol-nextcase__inner">
            <h2 className="ol-h2 ol-h2--ink" data-anim="">Veja outros cases</h2>
            <a className="ol-nextcase__link" href="/cases/transportadora-cabral">
              <div>
                <div className="ol-nextcase__label">Próximo case · Transporte e logística</div>
                <div className="ol-nextcase__title">Central do Motorista integrada ao sistema de gestão</div>
              </div>
              <span className="ol-casecard__go">
                {"Ver o case "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <Rodape parallax />
      </div>
      <PreloadDaFonteSerifada />
      <DadosEstruturados dados={DADOS_ESTRUTURADOS} />
      <ScriptsDaPagina scripts={["main"]} />
    </>
  );
}
