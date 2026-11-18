import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import "@/estilos/servico.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Consultoria estratégica de operação | Origami Lab"
  },
  "description": "Diagnóstico dentro da operação, mapeamento de processos, maturidade digital e portfólio priorizado por ROI. O plano sai com sequência, prazo e custo.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/consultoria-estrategica"
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
    "url": "https://www.origamilab.com.br/consultoria-estrategica",
    "siteName": "Origami Lab",
    "title": "Consultoria estratégica de operação | Origami Lab",
    "description": "A tecnologia acelera em curva exponencial. A capacidade de absorvê-la, não. É nessa distância que a competitividade se perde.",
    "images": [
      {
        "url": "https://www.origamilab.com.br/assets/og-cover.jpg",
        "width": 1200,
        "height": 630,
        "type": "image/jpeg",
        "alt": "Origami Lab — modernizamos a operação das grandes empresas tradicionais."
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "images": [
      {
        "url": "https://www.origamilab.com.br/assets/og-cover.jpg",
        "alt": "Origami Lab — modernizamos a operação das grandes empresas tradicionais."
      }
    ]
  }
};

const DADOS_ESTRUTURADOS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.origamilab.com.br/#org",
      "name": "Origami Lab",
      "url": "https://www.origamilab.com.br/",
      "logo": "https://www.origamilab.com.br/assets/logo-mark-color.png",
      "email": "contato@origamilab.com.br",
      "telephone": "+553198055189",
      "description": "Empresa de tecnologia para indústria sediada em Formiga, Minas Gerais. Moderniza operações industriais com software sob medida, integração com ERP, automação de processos, dados em tempo real e IA aplicada, do diagnóstico à implantação, e estrutura o financiamento via Lei do Bem, FINEP e FAPEMIG.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. Silviano Brandão, 156 - 2º andar",
        "addressLocality": "Formiga",
        "addressRegion": "MG",
        "postalCode": "35570-112",
        "addressCountry": "BR"
      },
      "sameAs": [
        "https://www.linkedin.com/company/origamilab-br/",
        "https://www.instagram.com/origamilab_br/"
      ],
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Centro-Oeste de Minas Gerais"
        },
        {
          "@type": "State",
          "name": "Minas Gerais"
        },
        {
          "@type": "Country",
          "name": "Brasil"
        }
      ],
      "slogan": "Tecnologia para indústria",
      "knowsAbout": [
        "Tecnologia para indústria",
        "Software para indústria",
        "Software sob medida para indústria",
        "Integração de sistemas industriais",
        "Integração com ERP",
        "Automação de processos industriais",
        "Digitalização do chão de fábrica",
        "Apontamento de produção",
        "Gestão industrial em tempo real",
        "Indústria 4.0",
        "Inteligência artificial aplicada à indústria",
        "Consultoria de operação",
        "Lei do Bem",
        "FINEP",
        "FAPEMIG"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.origamilab.com.br/#site",
      "url": "https://www.origamilab.com.br/",
      "name": "Origami Lab",
      "inLanguage": "pt-BR",
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.origamilab.com.br/consultoria-estrategica#webpage",
      "url": "https://www.origamilab.com.br/consultoria-estrategica",
      "name": "Consultoria estratégica de operação e inovação",
      "description": "Diagnóstico dentro da operação, mapeamento de processos, avaliação de maturidade digital e priorização de portfólio com ROI. O plano sai com sequência, prazo e custo.",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "about": {
        "@id": "https://www.origamilab.com.br/consultoria-estrategica#service"
      },
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "dateModified": "2026-09-18"
    },
    {
      "@type": "Service",
      "@id": "https://www.origamilab.com.br/consultoria-estrategica#service",
      "name": "Consultoria estratégica de operação e inovação",
      "alternateName": [
        "Consultoria de mapeamento de processos",
        "Diagnóstico operacional de empresa",
        "Consultoria de maturidade digital",
        "Programas de inovação in-company"
      ],
      "serviceType": "Consultoria de estratégia de produto, gestão de portfólio, maturidade digital e inovação in-company",
      "description": "Imersão de duas a quatro semanas dentro da operação, mapeamento do fluxo real do processo, avaliação de maturidade digital, priorização do portfólio por retorno e esforço, roadmap de modernização com indicadores e capacitação do time do cliente. O plano pode ser executado pela equipe do cliente, por outro fornecedor ou pela Origami Lab.",
      "provider": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Minas Gerais"
        },
        {
          "@type": "Place",
          "name": "Brasil"
        }
      ],
      "audience": {
        "@type": "BusinessAudience",
        "name": "Empresas tradicionais e familiares de indústria, engenharia e serviços, com processo consolidado e conhecimento não documentado"
      },
      "url": "https://www.origamilab.com.br/consultoria-estrategica",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Frentes de consultoria",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Estratégia de produto",
              "description": "Discovery e roadmap: descobrir o que precisa existir antes de escrever a primeira linha de código, validando a hipótese com quem vai usar."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gestão de portfólio",
              "description": "Priorização das iniciativas por retorno estimado contra esforço de execução, com a estratégia da empresa como filtro."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Avaliação de maturidade digital",
              "description": "Retrato de processo, informação e tecnologia feito dentro da operação, do qual sai o plano de modernização com sequência, prazo e custo."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Programas de inovação in-company",
              "description": "Treinamentos e programas que formam o time de dentro para conduzir o ciclo seguinte com autonomia."
            }
          }
        ]
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://www.origamilab.com.br/consultoria-estrategica#howto",
      "name": "Como a Origami Lab conduz um diagnóstico de operação",
      "description": "As seis etapas entre a imersão na operação e a capacitação do time do cliente.",
      "inLanguage": "pt-BR",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Imersão na operação",
          "text": "De duas a quatro semanas no chão de fábrica, na obra ou no escritório, acompanhando o processo onde ele acontece e conversando com quem o executa todo dia."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Mapeamento do fluxo real",
          "text": "Registrar o processo como ele é, e não como o procedimento diz que é: os pontos de redigitação, os números que não batem entre sistemas e a informação que chega tarde demais para orientar a decisão."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Avaliação de maturidade digital",
          "text": "Situar a empresa em processo, informação e tecnologia, ante o que o setor pratica e o que a estratégia da companhia vai exigir nos próximos anos."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Priorização do portfólio",
          "text": "Ordenar as oportunidades por retorno e esforço, com estimativa de ROI, para a diretoria decidir o que entra primeiro com número na mão."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Roadmap e indicadores",
          "text": "Entregar o plano de modernização com sequência, prazo e custo, e os indicadores que vão dizer se cada etapa funcionou. Vários deles inexistentes antes."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Capacitação do time",
          "text": "Treinamentos e programas de inovação in-company para a empresa conduzir o ciclo seguinte com autonomia."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.origamilab.com.br/consultoria-estrategica#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "A consultoria termina em um relatório?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Termina em um plano de modernização com sequência, prazo, custo e indicadores. O relatório existe, mas é o registro do trabalho, não o produto dele."
          }
        },
        {
          "@type": "Question",
          "name": "Precisa contratar desenvolvimento depois da consultoria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. O plano é escrito para ser executado pela sua equipe, por um fornecedor atual ou por nós. Em parte dos diagnósticos, a recomendação é ajustar o que já existe antes de construir qualquer coisa nova."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva o diagnóstico da operação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "De duas a quatro semanas, conforme o número de processos e unidades envolvidos. O escopo é fechado na conversa inicial."
          }
        },
        {
          "@type": "Question",
          "name": "A consultoria serve para empresa familiar e tradicional?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É exatamente onde mais trabalhamos. Operações com décadas de história costumam ter o processo mais maduro e o sistema mais defasado, e essa combinação é a que mais devolve resultado quando organizada."
          }
        },
        {
          "@type": "Question",
          "name": "Como a Origami Lab prioriza o portfólio de projetos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Por impacto e esforço. Cada oportunidade recebe estimativa de retorno e de complexidade, e a matriz mostra o que deve ser feito primeiro. A diretoria decide com o número à vista."
          }
        },
        {
          "@type": "Question",
          "name": "Quem conduz o trabalho de consultoria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sócios da Origami, com experiência dentro de grandes operações. Não repassamos a imersão para equipe júnior."
          }
        },
        {
          "@type": "Question",
          "name": "Dá para financiar o projeto de consultoria com recurso de incentivo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em muitos casos, sim. Captamos recursos via Lei do Bem, FINEP e FAPEMIG, e avaliamos esse caminho junto com o diagnóstico."
          }
        }
      ]
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
          "name": "Consultoria estratégica",
          "item": "https://www.origamilab.com.br/consultoria-estrategica"
        }
      ]
    }
  ]
};

export default function PaginaConsultoriaEstrategica() {
  return (
    <>
      <Navegacao faqNaPagina />
      <div className="ol-root" id="conteudo">
        {/* ==================== Abertura ==================== */}
        <section className="ol-sv-hero" id="topo">
          <video className="ol-sv-hero__video" src="/assets/hero-bg.webm" poster="/assets/hero-poster.webp" data-bg-video="" autoPlay loop muted playsInline preload="none" aria-hidden="true" tabIndex={-1} />
          <div className="ol-sv-hero__scrim" aria-hidden="true" />
          <div className="ol-sv-hero__fade" aria-hidden="true" />
          <div className="ol-sv-hero__inner">
            <div className="ol-sv-hero__grid">
              <div>
                <span className="ol-kicker">Consultoria estratégica</span>
                <h1 className="ol-sv-hero__title">
                  {"Faça da tecnologia uma aliada do seu "}
                  <em className="ol-em">planejamento estratégico</em>
                  .
                </h1>
                <h2 className="ol-sv-hero__lead">
                  A tecnologia não pode ser um setor de TI com projetos isolados. Ela deve ser responsável por acelerar o crescimento do seu negócio e garantir competitividade no mercado.
                </h2>
                <div className="ol-sv-hero__actions">
                  <a className="ol-btn ol-btn--primary" data-magnet="" href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">
                    {"Avaliar o meu portfólio "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  {" "}
                  <a className="ol-btn ol-btn--ghost" href="#processo">Ver como funciona</a>
                </div>
              </div>
              <div className="ol-diag" data-spot="">
                <div className="ol-diag__spot" aria-hidden="true" />
                <div className="ol-diag__head">
                  <span className="ol-diag__tag">Portfólio de iniciativas</span>
                  <div className="ol-pf__tabs" role="tablist" aria-label="Estado do portfólio">
                    <button className="ol-pf__tab is-active" type="button" role="tab" aria-selected="true" data-pf-tab="">Antes</button>
                    {" "}
                    <button className="ol-pf__tab" type="button" role="tab" aria-selected="false" data-pf-tab="">Depois</button>
                  </div>
                </div>
                <div className="ol-pf" data-pf="">
                  <div className="ol-pf__stage">
                    <div className="ol-pf__ylabel" aria-hidden="true">
                      <span>Retorno ↑</span>
                    </div>
                    <div className="ol-pf__plot">
                      <div className="ol-pf__quads" aria-hidden="true">
                        <i className="ol-pf__q1" />
                        <i className="ol-pf__q4" />
                        {" "}
                        <span className="ol-pf__qlabel ol-pf__qlabel--first">Fazer primeiro</span>
                        {" "}
                        <span className="ol-pf__qlabel ol-pf__qlabel--last">Deixar para depois</span>
                      </div>
                      <p className="ol-pf__queue">Priorização sem critérios claros.</p>
                      <ul className="ol-pf__dots">
                        <li className="ol-pf__dot" style={{ "--ol-pf-x0": "7.317%", "--ol-pf-y0": "60.714%", "--ol-pf-x1": "61.382%", "--ol-pf-y1": "26.786%" } as React.CSSProperties}>
                          <b className="ol-pf__mark">?</b>
                          <b className="ol-pf__rank">04</b>
                        </li>
                        <li className="ol-pf__dot is-top" style={{ "--ol-pf-x0": "20.732%", "--ol-pf-y0": "60.714%", "--ol-pf-x1": "12.602%", "--ol-pf-y1": "25%" } as React.CSSProperties}>
                          <b className="ol-pf__mark">?</b>
                          <b className="ol-pf__rank">01</b>
                        </li>
                        <li className="ol-pf__dot" style={{ "--ol-pf-x0": "34.146%", "--ol-pf-y0": "60.714%", "--ol-pf-x1": "83.74%", "--ol-pf-y1": "75.893%" } as React.CSSProperties}>
                          <b className="ol-pf__mark">?</b>
                          <b className="ol-pf__rank">06</b>
                        </li>
                        <li className="ol-pf__dot is-top" style={{ "--ol-pf-x0": "47.561%", "--ol-pf-y0": "60.714%", "--ol-pf-x1": "28.862%", "--ol-pf-y1": "31.25%" } as React.CSSProperties}>
                          <b className="ol-pf__mark">?</b>
                          <b className="ol-pf__rank">02</b>
                        </li>
                        <li className="ol-pf__dot" style={{ "--ol-pf-x0": "60.976%", "--ol-pf-y0": "60.714%", "--ol-pf-x1": "59.35%", "--ol-pf-y1": "66.964%" } as React.CSSProperties}>
                          <b className="ol-pf__mark">?</b>
                          <b className="ol-pf__rank">07</b>
                        </li>
                        <li className="ol-pf__dot is-top" style={{ "--ol-pf-x0": "74.39%", "--ol-pf-y0": "60.714%", "--ol-pf-x1": "18.699%", "--ol-pf-y1": "57.143%" } as React.CSSProperties}>
                          <b className="ol-pf__mark">?</b>
                          <b className="ol-pf__rank">03</b>
                        </li>
                        <li className="ol-pf__dot" style={{ "--ol-pf-x0": "87.805%", "--ol-pf-y0": "60.714%", "--ol-pf-x1": "79.675%", "--ol-pf-y1": "49.107%" } as React.CSSProperties}>
                          <b className="ol-pf__mark">?</b>
                          <b className="ol-pf__rank">05</b>
                        </li>
                      </ul>
                    </div>
                    <div className="ol-pf__xlabel" aria-hidden="true">Esforço →</div>
                  </div>
                  <p className="ol-pf__desc">
                    <i aria-hidden="true" />
                    <span className="ol-pf__cap ol-pf__cap--before">Vários projetos propostos, mas sem prioridade e retorno estimado.</span>
                    <span className="ol-pf__cap ol-pf__cap--after">Cada iniciativa com retorno e esforço estimados. A diretoria decide com número na mão.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== Frentes ==================== */}
        <section className="ol-sv-sec ol-sv-sec--light" id="frentes">
          <div className="ol-sv-sec__inner">
            <h2 className="ol-sv-sec__title ol-sv-sec__title--tight" data-anim="">Da estratégia à capacitação</h2>
            <p className="ol-sv-sec__lead" data-anim="" data-d="1">
              Preparamos o seu negócio para utilizar a tecnologia de forma estratégica e alinhada aos objetivos da companhia, garantindo priorização correta e retorno mensurável.
            </p>
            <div className="ol-paths">
              <article className="ol-path" data-anim="" data-d="1">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </span>
                  {" 01 · Tecnologia"}
                </div>
                <h3>Estratégia de produto</h3>
                <p className="ol-path__line">Discovery e roadmap</p>
                <p className="ol-path__what">
                  {"Antes da primeira linha de código, descobrir "}
                  <strong>o que de fato precisa existir</strong>
                  . O discovery valida a hipótese com quem vai usar e evita o pior desperdício de todos: construir muito bem a coisa errada.
                </p>
              </article>
              <article className="ol-path" data-anim="" data-d="2">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="M7 16v-5" />
                      <path d="M12 16V8" />
                      <path d="M17 16v-3" />
                    </svg>
                  </span>
                  {" 02 · Priorização"}
                </div>
                <h3>Gestão de portfólio</h3>
                <p className="ol-path__line">Priorização com ROI</p>
                <p className="ol-path__what">
                  {"Toda empresa grande tem mais ideias do que capacidade de execução. Ordenamos a fila por "}
                  <strong>retorno e esforço</strong>
                  , para que ela reflita a estratégia da companhia e não a urgência de quem pediu por último.
                </p>
              </article>
              <article className="ol-path" data-anim="" data-d="3">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
                      <path d="m2 16 10 5 10-5" />
                      <path d="m2 12 10 5 10-5" />
                    </svg>
                  </span>
                  {" 03 · Estado atual"}
                </div>
                <h3>Maturidade digital</h3>
                <p className="ol-path__line">Diagnóstico e plano</p>
                <p className="ol-path__what">
                  {"Um retrato honesto de processo, informação e tecnologia, levantado dentro da operação e comparado ao que o setor já pratica. Dele sai "}
                  <strong>o plano de modernização</strong>
                  {" com sequência, prazo e custo."}
                </p>
              </article>
              <article className="ol-path" data-anim="" data-d="4">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 7v14" />
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                    </svg>
                  </span>
                  {" 04 · Capacitação"}
                </div>
                <h3>Inovação in-company</h3>
                <p className="ol-path__line">Programas e treinamentos</p>
                <p className="ol-path__what">
                  {"Consultoria que vai embora deixa a empresa igual. Formamos o time de dentro para "}
                  <strong>conduzir o próximo ciclo sem depender de nós</strong>
                  .
                </p>
              </article>
            </div>
            <div className="ol-paths__close" data-anim="">
              <ul className="ol-chips">
                <li>Mapeamento de processos</li>
                <li>Discovery de produto</li>
                <li>Roadmap priorizado</li>
                <li>OKR e indicadores</li>
                <li>Capacitação do time</li>
              </ul>
            </div>
          </div>
        </section>
        {/* ==================== Como funciona ==================== */}
        <section className="ol-sv-sec ol-sv-sec--dark" id="processo">
          <div className="ol-sv-glow" data-px="0.04" aria-hidden="true" />
          <div className="ol-sv-sec__inner">
            <div className="ol-flow">
              <div className="ol-flow__aside">
                <span className="ol-kicker">Como funciona</span>
                <h2 data-anim="">O diagnóstico acontece dentro da operação, não em slides</h2>
                <p data-anim="" data-d="1">A consultoria termina com um plano que a sua equipe consegue executar. E, se você quiser, com a gente executando junto.</p>
              </div>
              <ol className="ol-flow__steps">
                <li data-anim="">
                  <b>01</b>
                  <h3>Imersão na operação</h3>
                  <p>
                    De duas a quatro semanas no chão de fábrica, na obra ou no escritório, acompanhando o processo onde ele acontece e conversando com quem o executa todo dia.
                  </p>
                </li>
                <li data-anim="">
                  <b>02</b>
                  <h3>Mapeamento do fluxo real</h3>
                  <p>
                    O processo como ele é, e não como o procedimento diz que é: os pontos de redigitação, os números que não batem entre sistemas e a informação que chega tarde demais para orientar a decisão.
                  </p>
                </li>
                <li data-anim="">
                  <b>03</b>
                  <h3>Avaliação de maturidade digital</h3>
                  <p>
                    Onde a empresa está em processo, informação e tecnologia, comparada ao que o setor pratica e ao que a estratégia da companhia vai exigir nos próximos anos.
                  </p>
                </li>
                <li data-anim="">
                  <b>04</b>
                  <h3>Priorização do portfólio</h3>
                  <p>
                    As oportunidades ordenadas por retorno e esforço, com estimativa de ROI, para a diretoria decidir o que entra primeiro com número na mão.
                  </p>
                </li>
                <li data-anim="">
                  <b>05</b>
                  <h3>Roadmap e indicadores</h3>
                  <p>
                    O plano de modernização com sequência, prazo e custo, e os indicadores que vão dizer se cada etapa funcionou. Vários deles inexistentes antes.
                  </p>
                </li>
                <li data-anim="">
                  <b>06</b>
                  <h3>Capacitação do time</h3>
                  <p>Treinamentos e programas de inovação in-company para que a empresa conduza o ciclo seguinte com autonomia.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        {/* ==================== Prova ==================== */}
        <section className="ol-sv-sec ol-sv-sec--dark ol-sv-sec--seam" id="prova">
          <div className="ol-sv-glow ol-sv-glow--center" data-px="0.03" aria-hidden="true" />
          <div className="ol-sv-sec__inner">
            <span className="ol-kicker">O seu legado em boas mãos</span>
            <h2 className="ol-sv-sec__title ol-sv-sec__title--tight" data-anim="">
              {"A experiência das gigantes, "}
              <em className="ol-em">aqui do seu lado</em>
            </h2>
            <p className="ol-sv-sec__lead" data-anim="" data-d="1">Antes da Origami, os nossos sócios construíram soluções dentro de algumas das maiores operações do país.</p>
            <div data-anim="" data-d="2">
              <div className="ol-about__label">
                <span>Onde essa experiência foi construída</span>
                {" "}
                <i aria-hidden="true" />
              </div>
              <ul className="ol-brands">
                <li>Vale</li>
                <li>AB InBev</li>
                <li>Deloitte</li>
                <li>Thoughtworks</li>
                <li>Localiza</li>
                <li>MRV</li>
                <li>Inter</li>
                <li>ESAB</li>
              </ul>
            </div>
            <div className="ol-legacy__now" data-anim="" data-d="3">
              <div className="ol-about__label">
                <span>Hoje, em indústria, engenharia e serviços</span>
                {" "}
                <i aria-hidden="true" />
              </div>
              <ul className="ol-brands ol-brands--logos">
                <li>
                  <img src="/assets/clients/prumo.webp" alt="Prumo Engenharia" width="572" height="387" loading="lazy" decoding="async" />
                </li>
                <li>
                  <img src="/assets/clients/tecno2000.png" alt="Tecno 2000" width="386" height="70" loading="lazy" decoding="async" />
                </li>
                <li>
                  <img src="/assets/clients/bry.png" alt="Bry" width="961" height="682" loading="lazy" decoding="async" />
                </li>
                <li>
                  <img src="/assets/clients/sebrae.svg" alt="Sebrae" width="4096" height="2214" loading="lazy" decoding="async" />
                </li>
                <li>
                  <img src="/assets/clients/syngular.png" alt="Syngular ID" width="326" height="73" loading="lazy" decoding="async" />
                </li>
                <li>
                  <img src="/assets/clients/avante.png" alt="Avante" width="3122" height="600" loading="lazy" decoding="async" />
                </li>
              </ul>
            </div>
            <dl className="ol-sv-proof__grid ol-legacy__stats" data-anim="" data-d="4">
              <div>
                <dt>9</dt>
                <dd>setores atendidos</dd>
              </div>
              <div>
                <dt>+20</dt>
                <dd>projetos entregues</dd>
              </div>
              <div>
                <dt>MG</dt>
                <dd>base em Formiga, atuação nacional</dd>
              </div>
            </dl>
          </div>
        </section>
        {/* ==================== O que muda ==================== */}
        <section className="ol-sv-sec ol-sv-sec--light" id="resultado">
          <div className="ol-sv-sec__inner">
            <h2 className="ol-sv-sec__title" data-anim="">O que muda na diretoria</h2>
            <div className="ol-gains">
              <article className="ol-gain" data-anim="" data-d="1">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </span>
                <h3>Produto alinhado à estratégia</h3>
                <p>
                  O que se constrói passa a responder a um objetivo do negócio, e não a um pedido isolado que chegou pelo caminho mais curto.
                </p>
              </article>
              <article className="ol-gain" data-anim="" data-d="2">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17 9 11l4 4 8-8" />
                    <path d="M21 7v6h-6" />
                  </svg>
                </span>
                <h3>Projetos com ROI claro</h3>
                <p>Cada iniciativa entra na fila com retorno estimado, e a diretoria decide por número em vez de intuição.</p>
              </article>
              <article className="ol-gain" data-anim="" data-d="3">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 2 8l10 5 10-5-10-5Z" />
                    <path d="m2 16 10 5 10-5" />
                  </svg>
                </span>
                <h3>Um retrato honesto da empresa</h3>
                <p>A avaliação de maturidade mostra onde a operação realmente está, e não onde se imagina que ela esteja.</p>
              </article>
              <article className="ol-gain" data-anim="" data-d="4">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </span>
                <h3>Equipe capacitada em inovação</h3>
                <p>O time de dentro sai preparado para conduzir o próximo ciclo sem depender de consultoria.</p>
              </article>
            </div>
          </div>
        </section>
        {/* ==================== Perguntas ==================== */}
        <section className="ol-faq ol-sv-faq" id="faq">
          <div className="ol-faq__inner">
            <div className="ol-faq__aside">
              <h2 className="ol-h2 ol-h2--ink">Perguntas frequentes</h2>
              <p>
                {"Não achou a sua? "}
                <a href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">Fale com a gente</a>
                .
              </p>
            </div>
            <div className="ol-faq__list">
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-cons-1">
                  <span>A consultoria termina em um relatório?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-cons-1" data-faq-body="">
                  <p>
                    Termina em um plano de modernização com sequência, prazo, custo e indicadores. O relatório existe, mas é o registro do trabalho, não o produto dele.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-cons-2">
                  <span>Precisa contratar desenvolvimento depois?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-cons-2" data-faq-body="">
                  <p>
                    Não. O plano é escrito para ser executado pela sua equipe, por um fornecedor atual ou por nós. Em parte dos diagnósticos, a recomendação é ajustar o que já existe antes de construir qualquer coisa nova.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-cons-3">
                  <span>Quanto tempo leva o diagnóstico?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-cons-3" data-faq-body="">
                  <p>De duas a quatro semanas, conforme o número de processos e unidades envolvidos. O escopo é fechado na conversa inicial.</p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-cons-4">
                  <span>Serve para empresa familiar e tradicional?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-cons-4" data-faq-body="">
                  <p>
                    É exatamente onde mais trabalhamos. Operações com décadas de história costumam ter o processo mais maduro e o sistema mais defasado, e essa combinação é a que mais devolve resultado quando organizada.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-cons-5">
                  <span>Como vocês priorizam o portfólio?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-cons-5" data-faq-body="">
                  <p>
                    Por impacto e esforço. Cada oportunidade recebe estimativa de retorno e de complexidade, e a matriz mostra o que deve ser feito primeiro. A diretoria decide com o número à vista.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-cons-6">
                  <span>Quem conduz o trabalho?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-cons-6" data-faq-body="">
                  <p>Sócios da Origami, com experiência dentro de grandes operações. Não repassamos a imersão para equipe júnior.</p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-cons-7">
                  <span>Dá para financiar o projeto com recurso de incentivo?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-cons-7" data-faq-body="">
                  <p>
                    {"Em muitos casos, sim. Captamos recursos via "}
                    <a href="/acesso-a-capital">Lei do Bem, FINEP e FAPEMIG</a>
                    , e avaliamos esse caminho junto com o diagnóstico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== Projetos e leituras relacionadas ==================== */}
        <section className="ol-next" aria-labelledby="relacionadas">
          <div className="ol-next__inner">
            <h2 className="ol-next__title" id="relacionadas">Leituras relacionadas</h2>
            <ul className="ol-next__grid">
              <li>
                <a className="ol-next__card" href="/planejamento-de-producao#roi">
                  <b>Como calcular o ROI de um projeto de digitalização</b>
                  <span>O método para estimar o retorno antes de investir, com o exemplo do planejamento da produção.</span>
                </a>
              </li>
              <li>
                <a className="ol-next__card" href="/automacao-de-processos-industriais">
                  <b>O que automatizar primeiro</b>
                  <span>Processos que ainda vivem em planilha ou na memória de alguém, o que cada um custa e o que não vale automatizar.</span>
                </a>
              </li>
              <li>
                <a className="ol-next__card" href="/diagnostico-de-modernizacao">
                  <b>Diagnóstico de modernização</b>
                  <span>Perguntas rápidas para ver a maturidade da operação em dados, integração, legado, retrabalho e IA, com as três prioridades.</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* ==================== Chamada final ==================== */}
        <section className="ol-cta" id="contato">
          <div className="ol-cta__glow" aria-hidden="true" />
          <div className="ol-cta__inner">
            <h2 className="ol-cta__title">
              {"O primeiro passo é uma conversa de "}
              <em className="ol-em">30 minutos</em>
            </h2>
            <p className="ol-cta__lead">
              Olhamos a sua operação, o que já foi tentado e o que está travado hoje. Daí sai a recomendação do que atacar primeiro, mesmo que a resposta não passe por contratar a gente.
            </p>
            <div className="ol-cta__actions">
              <a className="ol-btn ol-btn--primary ol-btn--lg" data-magnet="" href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">
                {"Avaliar o meu portfólio "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="https://wa.me/553198055189?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20consultoria%20estrat%C3%A9gica." target="_blank" rel="noopener">Falar no WhatsApp</a>
            </div>
          </div>
        </section>
        <Rodape />
      </div>
      <DadosEstruturados dados={DADOS_ESTRUTURADOS} />
      <ScriptsDaPagina scripts={["pagina", "servico"]} />
    </>
  );
}
