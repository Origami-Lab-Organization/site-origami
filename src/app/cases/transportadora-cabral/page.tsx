import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import { PreloadDaFonteSerifada } from "@/components/PreloadDaFonteSerifada";

export const metadata: Metadata = {
  "title": {
    "absolute": "Central do Motorista da Transportadora Cabral | Case Origami Lab"
  },
  "description": "Atrito entre motorista e backoffice por falta de canal único. A Central do Motorista, integrada ao TripLog, trouxe manutenção, checklist e documento fiscal para um só lugar.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/cases/transportadora-cabral"
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
    "url": "https://www.origamilab.com.br/cases/transportadora-cabral",
    "siteName": "Origami Lab",
    "title": "Transportadora Cabral: a Central do Motorista que unificou a operação",
    "description": "Um canal só entre motorista e backoffice, integrado ao TripLog, com emissão automatizada de CT-e e MDF-e e indicadores que sustentam a decisão.",
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
      "@type": "Article",
      "@id": "https://www.origamilab.com.br/cases/transportadora-cabral#article",
      "headline": "Como a Transportadora Cabral transformou a sua gestão logística com a Central do Motorista",
      "description": "Central do Motorista via WhatsApp, integrada ao TripLog, unificando comunicação, manutenção, checklists e emissão de CT-e e MDF-e.",
      "url": "https://www.origamilab.com.br/cases/transportadora-cabral",
      "inLanguage": "pt-BR",
      "image": "https://www.origamilab.com.br/assets/og-cover.jpg",
      "author": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "about": {
        "@type": "Organization",
        "name": "Transportadora Cabral"
      },
      "mentions": [
        {
          "@type": "SoftwareApplication",
          "name": "Central do Motorista",
          "applicationCategory": "BusinessApplication"
        },
        {
          "@type": "SoftwareApplication",
          "name": "TripLog",
          "applicationCategory": "BusinessApplication"
        }
      ],
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "dateModified": "2026-09-11"
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
          "name": "Transportadora Cabral",
          "item": "https://www.origamilab.com.br/cases/transportadora-cabral"
        }
      ]
    }
  ]
};

export default function PaginaCasesTransportadoraCabral() {
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
              <span aria-current="page">Transportadora Cabral</span>
            </nav>
            <span className="ol-kicker" data-anim="">Transporte e logística</span>
            <h1 className="ol-phero__title" data-anim="" data-d="1">
              {"Como a Transportadora Cabral transformou a sua gestão logística com a "}
              <em className="ol-em">Central do Motorista</em>
            </h1>
            <p className="ol-phero__lead" data-anim="" data-d="2">
              Motorista na estrada e backoffice no escritório resolviam tudo por canais soltos, e o atrito virou rotina. Construímos um canal único, no aplicativo que o motorista já usa, ligado ao sistema que a operação já roda.
            </p>
            <dl className="ol-facts" data-anim="" data-d="3">
              <div>
                <dt>Cliente</dt>
                <dd>Transportadora Cabral</dd>
              </div>
              <div>
                <dt>Setor</dt>
                <dd>Transporte e logística</dd>
              </div>
              <div>
                <dt>Solução</dt>
                <dd>Central do Motorista</dd>
              </div>
              <div>
                <dt>Integração</dt>
                <dd>TripLog e WhatsApp</dd>
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
                    {"A Cabral convivia com atritos constantes entre os motoristas e o setor administrativo, todos com a mesma origem: "}
                    <strong>não existia um canal único de comunicação</strong>
                    . Pedido de manutenção chegava por um caminho, checklist por outro, documento fiscal por um terceiro, e a organização de folgas dependia de quem conseguisse falar com quem primeiro.
                  </p>
                  <p>
                    Cada solicitação virava uma negociação, e cada negociação virava tempo parado. Sem registro estruturado, também não havia como olhar para trás e entender o que estava custando caro: a operação decidia por percepção, não por dado.
                  </p>
                </div>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>O que construímos</h2>
                <div className="ol-prose">
                  <p>
                    {"A "}
                    <strong>Central do Motorista</strong>
                    {": uma plataforma que centraliza a relação entre motorista e backoffice pelo WhatsApp, o aplicativo que o motorista já tem no bolso e sabe usar, na cabine, sem treinamento. Ela não vive isolada: está conectada ao "}
                    <strong>TripLog</strong>
                    , o sistema de gestão operacional da transportadora, para que o que o motorista registra chegue direto a quem opera.
                  </p>
                </div>
                <ul className="ol-deliver">
                  <li>
                    <span>01</span>
                    <div>
                      <h3>Canal único no WhatsApp</h3>
                      <p>
                        Solicitação, dúvida e registro entram por um só lugar, com histórico, e não por mensagem avulsa para o contato da vez.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <h3>Manutenção e checklists padronizados</h3>
                      <p>O mesmo roteiro para todo mundo, com registro automático: a manutenção deixa de depender da memória de quem pediu.</p>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <div>
                      <h3>Emissão automatizada de CT-e e MDF-e</h3>
                      <p>Documento fiscal emitido dentro do fluxo da viagem, sem ida e volta entre estrada e escritório.</p>
                    </div>
                  </li>
                  <li>
                    <span>04</span>
                    <div>
                      <h3>Solicitações pessoais organizadas</h3>
                      <p>Folga, adiantamento e pedidos do dia a dia entram na mesma fila, com registro e prazo visível.</p>
                    </div>
                  </li>
                  <li>
                    <span>05</span>
                    <div>
                      <h3>Integração com o TripLog</h3>
                      <p>Nada de sistema paralelo: o que entra pela Central alimenta a gestão operacional que a empresa já usava.</p>
                    </div>
                  </li>
                  <li>
                    <span>06</span>
                    <div>
                      <h3>Indicadores da operação</h3>
                      <p>Cada interação registrada vira dado, e o dado vira o indicador que hoje sustenta a decisão da gestão.</p>
                    </div>
                  </li>
                </ul>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>O que mudou na operação</h2>
                <div className="ol-results">
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m19 12-7 7-7-7" />
                        <path d="M12 5v14" />
                      </svg>
                    </span>
                    <h3>Menos conflito operacional</h3>
                    <p>Com um canal e um registro só, a discussão sobre o que foi pedido e quando simplesmente deixou de existir.</p>
                  </article>
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 6v6l4 2" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <h3>Tratativas mais curtas</h3>
                    <p>Registro automatizado e resposta no mesmo canal encurtaram o tempo entre o pedido do motorista e a solução.</p>
                  </article>
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <h3>Processo padronizado</h3>
                    <p>Checklist e manutenção passaram a seguir o mesmo roteiro em toda a frota, independentemente de quem está na ponta.</p>
                  </article>
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 17 9 11l4 4 8-8" />
                        <path d="M21 7v6h-6" />
                      </svg>
                    </span>
                    <h3>Indicadores para decidir</h3>
                    <p>A gestão passou a ter base numérica para as decisões que antes dependiam de percepção.</p>
                  </article>
                </div>
              </article>
              <figure className="ol-quote" data-anim="">
                <blockquote>
                  A Central do Motorista eliminou processos redundantes, diminuiu o tempo das tratativas, agilizou respostas, e possibilitou criar indicadores que hoje são base em tomada de decisões.
                </blockquote>
                <figcaption>Transportadora Cabral · cerca de 60 dias de operação</figcaption>
              </figure>
              <article className="ol-case__block" data-anim="">
                <h2>Por que isso importa</h2>
                <div className="ol-prose">
                  <p>
                    {"Em transporte, a comunicação "}
                    <em className="ol-em">é</em>
                    {" a operação. Um pedido de manutenção que demora dois dias para chegar ao setor certo não é um problema de atendimento: é caminhão parado, entrega atrasada e multa fiscal. Foi por isso que o projeto começou pelo canal, e não por um painel bonito."}
                  </p>
                  <p>
                    A decisão de colocar a Central dentro do WhatsApp seguiu a mesma lógica: adoção de software na estrada não se conquista com treinamento, se conquista encontrando o motorista onde ele já está. E a integração com o TripLog garantiu que nada disso virasse mais um sistema para alguém alimentar à parte.
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
                <a className="ol-next__card" href="/integracao-de-sistemas">
                  <b>Integração de sistemas</b>
                  <span>Os quatro caminhos técnicos para o ERP conversar com o resto da operação, inclusive com sistema legado.</span>
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
              {"A sua operação também vive de "}
              <em className="ol-em">mensagem solta</em>
              ?
            </h2>
            <p className="ol-cta__lead">
              A primeira conversa dura 30 minutos e serve para uma coisa só: entender a sua necessidade e apontar onde estão as maiores oportunidades. Se fizer sentido para os dois lados, seguimos. Se não fizer, a gente diz.
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
              <a className="ol-btn ol-btn--ghost" href="https://wa.me/553198055189?text=Ol%C3%A1!%20Vi%20o%20case%20da%20Cabral%20e%20quero%20conversar%20sobre%20a%20minha%20opera%C3%A7%C3%A3o." target="_blank" rel="noopener">Falar no WhatsApp</a>
            </div>
          </div>
        </section>
        {/* ==================== Outros cases ==================== */}
        <section className="ol-nextcase">
          <div className="ol-nextcase__inner">
            <h2 className="ol-h2 ol-h2--ink" data-anim="">Veja outros cases</h2>
            <a className="ol-nextcase__link" href="/cases/cobranca-automatica-whatsapp-retifica-formiguense">
              <div>
                <div className="ol-nextcase__label">Próximo case · Retífica e usinagem</div>
                <div className="ol-nextcase__title">Cobrança automática via WhatsApp integrada ao ERP</div>
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
