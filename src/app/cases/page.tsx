import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import { PreloadDaFonteSerifada } from "@/components/PreloadDaFonteSerifada";

export const metadata: Metadata = {
  "title": {
    "absolute": "Cases: software, integração e automação | Origami Lab"
  },
  "description": "Cases da Origami Lab: intranet da Prumo Engenharia, Central do Motorista da Transportadora Cabral e cobrança automática via WhatsApp da Retífica Formiguense.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/cases"
  },
  "robots": {
    "index": true,
    "follow": true,
    "max-image-preview": "large",
    "max-snippet": -1
  },
  "openGraph": {
    "type": "website",
    "locale": "pt_BR",
    "url": "https://www.origamilab.com.br/cases",
    "siteName": "Origami Lab",
    "title": "Cases: operações reais, transformadas | Origami Lab",
    "description": "Projetos de modernização de operação em engenharia, logística e indústria, do diagnóstico à autonomia do time do cliente.",
    "images": [
      {
        "url": "https://www.origamilab.com.br/assets/og-cover.jpg",
        "width": 1200,
        "height": 630,
        "type": "image/jpeg",
        "alt": "Origami Lab: tecnologia para indústria, com software, integração e automação."
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "images": [
      {
        "url": "https://www.origamilab.com.br/assets/og-cover.jpg",
        "alt": "Origami Lab: tecnologia para indústria, com software, integração e automação."
      }
    ]
  }
};

const DADOS_ESTRUTURADOS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.origamilab.com.br/cases#page",
      "url": "https://www.origamilab.com.br/cases",
      "name": "Cases da Origami Lab",
      "description": "Projetos de modernização de operação conduzidos pela Origami Lab em empresas de engenharia, logística e indústria.",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "dateModified": "2026-09-25"
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
        }
      ]
    },
    {
      "@type": "ItemList",
      "itemListOrder": "https://schema.org/ItemListUnordered",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://www.origamilab.com.br/cases/prumo-engenharia",
          "name": "Como a Prumo Engenharia conectou pessoas e processos com uma intranet corporativa"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://www.origamilab.com.br/cases/transportadora-cabral",
          "name": "Como a Transportadora Cabral transformou a sua gestão logística com a Central do Motorista"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://www.origamilab.com.br/cases/cobranca-automatica-whatsapp-retifica-formiguense",
          "name": "Como a Retífica Formiguense recuperou dívidas em atraso com um sistema de cobrança automático via WhatsApp"
        }
      ]
    }
  ]
};

export default function PaginaCases() {
  return (
    <>
      <Navegacao ativo="cases" />
      <div className="ol-root" id="conteudo">
        {/* ==================== Abertura ==================== */}
        <section className="ol-phero">
          <div className="ol-phero__glow" aria-hidden="true" />
          <div className="ol-phero__inner">
            <nav className="ol-crumb" aria-label="Trilha de navegação">
              <a href="/">Início</a>
              {" "}
              <i aria-hidden="true">/</i>
              {" "}
              <span aria-current="page">Cases</span>
            </nav>
            <span className="ol-kicker" data-anim="">Cases</span>
            <h1 className="ol-phero__title" data-anim="" data-d="1">
              {"Operações reais, "}
              <em className="ol-em">transformadas.</em>
            </h1>
            <p className="ol-phero__lead" data-anim="" data-d="2">Nenhum começou por tecnologia. Começou dentro da operação, e o software ficou com o time do cliente.</p>
          </div>
        </section>
        {/* ==================== Lista de cases ==================== */}
        <section className="ol-caselist">
          <div className="ol-caselist__inner">
            <div className="ol-caselist__head">
              <h2 className="ol-h2 ol-h2--ink" data-anim="">O que construímos, e o que mudou depois.</h2>
              <a className="ol-inline-link" data-anim="" data-d="1" href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">
                {"Falar sobre o meu caso "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="ol-caselist__grid">
              <a className="ol-casecard" href="/cases/prumo-engenharia" data-anim="" data-d="1">
                <div className="ol-casecard__visual">
                  <div className="ol-casecard__logo">
                    <img src="/assets/clients/prumo.webp" alt="Prumo Engenharia" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="ol-casecard__body">
                  <ul className="ol-casecard__tags">
                    <li>Engenharia e manutenção</li>
                    <li>Intranet corporativa</li>
                  </ul>
                  <h3 className="ol-casecard__title">Intranet corporativa como canal único da operação</h3>
                  <p className="ol-casecard__lead">Desenho e implantação da intranet em SharePoint Online, com automações, indicadores e handoff para o time da Prumo.</p>
                  <div className="ol-casecard__stats">
                    <div>
                      <b>500+</b>
                      <span>Colaboradores</span>
                    </div>
                    <div>
                      <b>8 semanas</b>
                      <span>Do kickoff ao handoff</span>
                    </div>
                  </div>
                  <span className="ol-casecard__go">
                    {"Ver o case "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
              {" "}
              <a className="ol-casecard" href="/cases/transportadora-cabral" data-anim="" data-d="2">
                <div className="ol-casecard__visual">
                  <div className="ol-casecard__logo">
                    <img src="/assets/clients/cabral.png" alt="Transportadora Cabral" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="ol-casecard__body">
                  <ul className="ol-casecard__tags">
                    <li>Transporte e logística</li>
                    <li>Plataforma operacional</li>
                  </ul>
                  <h3 className="ol-casecard__title">Central do Motorista integrada ao sistema de gestão</h3>
                  <p className="ol-casecard__lead">Desenvolvimento do canal de atendimento ao motorista no WhatsApp, integrado ao TripLog e à emissão de documento fiscal.</p>
                  <div className="ol-casecard__stats">
                    <div>
                      <b>1 canal</b>
                      <span>Motorista e backoffice</span>
                    </div>
                    <div>
                      <b>CT-e e MDF-e</b>
                      <span>Emissão automatizada</span>
                    </div>
                  </div>
                  <span className="ol-casecard__go">
                    {"Ver o case "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
              {" "}
              <a className="ol-casecard" href="/cases/cobranca-automatica-whatsapp-retifica-formiguense" data-anim="" data-d="3">
                <div className="ol-casecard__visual">
                  <div className="ol-casecard__logo ol-casecard__logo--flat">
                    <img src="/assets/clients/retifica.jpg" alt="Retífica Formiguense" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="ol-casecard__body">
                  <ul className="ol-casecard__tags">
                    <li>Retífica e usinagem</li>
                    <li>Automação de cobrança</li>
                  </ul>
                  <h3 className="ol-casecard__title">Cobrança automática via WhatsApp integrada ao ERP</h3>
                  <p className="ol-casecard__lead">
                    A cobrança que dependia de alguém lembrar virou uma régua automática no WhatsApp, integrada ao ERP e acompanhada pela diretoria em um painel atualizado a cada cinco minutos.
                  </p>
                  <div className="ol-casecard__stats">
                    <div>
                      <b>41%</b>
                      <span>Valor pago em 4 dias</span>
                    </div>
                    <div>
                      <b>9x</b>
                      <span>Conversão preventiva</span>
                    </div>
                    <div>
                      <b>8 semanas</b>
                      <span>Até a produção</span>
                    </div>
                  </div>
                  <span className="ol-casecard__go">
                    {"Ver o case "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* ==================== Método, em uma linha ==================== */}
        <section className="ol-nextcase ol-nextcase--slim">
          <div className="ol-nextcase__inner">
            <div className="ol-steps">
              <ol className="ol-steps__row" data-anim="">
                <li>Diagnóstico</li>
                <li>Desenho</li>
                <li>Construção</li>
                <li>Implantação</li>
              </ol>
              <a className="ol-inline-link" data-anim="" data-d="1" href="/#como">
                {"O método por trás dos três "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        {/* ==================== Chamada final ==================== */}
        <section className="ol-cta" id="contato">
          <div className="ol-cta__glow" data-px="0.05" aria-hidden="true" />
          <div className="ol-cta__inner" data-scale-in="">
            <h2 className="ol-cta__title">
              {"O próximo case pode ser na "}
              <em className="ol-em">sua operação</em>
              .
            </h2>
            <p className="ol-cta__lead">
              Trinta minutos para entender a sua operação e apontar onde estão as maiores oportunidades. Se fizer sentido para os dois lados, seguimos. Se não fizer, a gente diz.
            </p>
            <div className="ol-cta__actions">
              <a className="ol-btn ol-btn--primary ol-btn--lg" data-magnet="" href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">
                {"Agendar conversa de 30 minutos "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="https://wa.me/553198055189?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20a%20opera%C3%A7%C3%A3o%20da%20minha%20empresa." target="_blank" rel="noopener">Falar no WhatsApp</a>
            </div>
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
