import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import "@/estilos/servico.css";
import { atualizacaoDaPagina } from "@/conteudo/paginas";
import { ORGANIZACAO, SITE_NODE } from "@/lib/seo/estruturados";

export const metadata: Metadata = {
  "title": {
    "absolute": "Acesso a capital — Lei do Bem, FINEP e FAPEMIG | Origami Lab"
  },
  "description": "Lei do Bem, FINEP, FAPEMIG e Compete Minas financiam a inovação. A Origami Lab faz a captação inteira — do enquadramento à prestação de contas.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/acesso-a-capital"
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
    "url": "https://www.origamilab.com.br/acesso-a-capital",
    "siteName": "Origami Lab",
    "title": "Acesso a capital — Lei do Bem, FINEP e FAPEMIG | Origami Lab",
    "description": "78% das empresas fazem P&D. Só 30% usam incentivo fiscal. A diferença é burocracia — e é dela que a gente cuida.",
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
    ORGANIZACAO,
    SITE_NODE,
    {
      "@type": "WebPage",
      "@id": "https://www.origamilab.com.br/acesso-a-capital#webpage",
      "url": "https://www.origamilab.com.br/acesso-a-capital",
      "name": "Acesso a capital — Lei do Bem, FINEP e FAPEMIG",
      "description": "Lei do Bem, FINEP, FAPEMIG e Compete Minas existem para financiar a inovação. A Origami Lab faz a captação inteira para a sua empresa, do enquadramento à prestação de contas.",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "about": {
        "@id": "https://www.origamilab.com.br/acesso-a-capital#service"
      },
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "breadcrumb": {
        "@id": "https://www.origamilab.com.br/acesso-a-capital#breadcrumb"
      },
      "dateModified": atualizacaoDaPagina("/acesso-a-capital")
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.origamilab.com.br/acesso-a-capital#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Origami Lab",
          "item": "https://www.origamilab.com.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Acesso a capital",
          "item": "https://www.origamilab.com.br/acesso-a-capital"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.origamilab.com.br/acesso-a-capital#service",
      "name": "Acesso a capital para inovação",
      "alternateName": [
        "Captação de recursos para inovação",
        "Consultoria de incentivos fiscais para P&D",
        "Captação de incentivos à inovação"
      ],
      "serviceType": "Captação de recursos e incentivos fiscais para pesquisa, desenvolvimento e inovação",
      "description": "Serviço completo de captação de recursos para inovação, em parceria com a PIN: diagnóstico de elegibilidade, escolha da linha e do edital, enquadramento técnico dos projetos, documentação e formulários, submissão, interlocução com o órgão e prestação de contas. A cobrança só acontece se o capital for liberado.",
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
        "name": "Empresas de indústria, engenharia, logística, agronegócio e serviços que desenvolvem produto, processo ou software"
      },
      "url": "https://www.origamilab.com.br/acesso-a-capital",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Linhas de capital para inovação",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lei do Bem — incentivo fiscal para P&D",
              "description": "Quem apura pelo lucro real deduz os gastos com P&D da base do IRPJ e da CSLL. Não entra dinheiro novo: sobra no caixa o que iria para o imposto, já no próprio exercício."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Subvenção econômica e recursos não reembolsáveis",
              "description": "Recurso público que entra no caixa e não é devolvido. Sai por chamada pública da FINEP ou das fundações estaduais, com prazo, projeto aprovado e contrapartida da empresa."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Crédito subsidiado de inovação (FINEP e programas estaduais)",
              "description": "Financiamento reembolsável para inovação, com juros abaixo do mercado e carência longa. O dinheiro entra agora, volta depois e não dilui a sociedade."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chamadas de fundações estaduais de amparo à pesquisa (FAPEMIG e Compete Minas)"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.origamilab.com.br/acesso-a-capital#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Minha empresa não é de tecnologia. Tem direito a recursos para inovação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tem, porque as linhas não restringem setor. Indústria, engenharia, logística, agro e serviços se enquadram sempre que existe desenvolvimento com novidade e incerteza técnica, algo que na indústria costuma acontecer dentro do próprio processo produtivo sem ninguém chamar de P&D."
          }
        },
        {
          "@type": "Question",
          "name": "Preciso ter um departamento de P&D para captar recursos de inovação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não precisa, porque o que conta é a atividade e não o organograma. Engenharia, produção e qualidade costumam ser onde o desenvolvimento realmente acontece, e cabe à Origami Lab identificar essas frentes e descrevê-las na linguagem que o avaliador espera."
          }
        },
        {
          "@type": "Question",
          "name": "Empresa do lucro presumido ou do Simples Nacional consegue recurso para inovação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sobra caminho sim. A Lei do Bem exige lucro real, mas a subvenção econômica e o crédito subsidiado não dependem do regime tributário, então nesses casos o caminho passa por chamada pública e por linhas de crédito de inovação."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva até o recurso de inovação chegar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende da linha. O incentivo fiscal aparece já no próprio exercício, na apuração, enquanto a subvenção e o crédito seguem o calendário da chamada e a análise do órgão. No diagnóstico é apontado o prazo de cada caminho antes da decisão."
          }
        },
        {
          "@type": "Question",
          "name": "Dá para usar mais de uma linha de incentivo ao mesmo tempo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dá, desde que cada gasto esteja alocado a uma linha só. O que não pode é o mesmo dispêndio sustentar dois benefícios, e essa separação é feita ainda no desenho do projeto, antes da submissão."
          }
        },
        {
          "@type": "Question",
          "name": "E se a captação de recursos não der certo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não há custo nenhum para a empresa, porque a Origami Lab só cobra se o capital for liberado e o risco do processo fica do lado dela."
          }
        },
        {
          "@type": "Question",
          "name": "A Origami Lab também desenvolve o projeto ou só cuida da captação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Desenvolve. A Origami Lab moderniza a operação de empresas tradicionais em processo, informação e tecnologia, e a captação existe justamente para financiar esse tipo de projeto, com ou sem a execução dela."
          }
        }
      ]
    }
  ]
};

export default function PaginaAcessoACapital() {
  return (
    <>
      <Navegacao faqNaPagina cta="Avaliar elegibilidade" />
      <div className="ol-root" id="conteudo">
        {/* ==================== Abertura ==================== */}
        <section className="ol-sv-hero" id="topo">
          <video className="ol-sv-hero__video" src="/assets/hero-bg.webm" poster="/assets/hero-poster.webp" data-bg-video="" autoPlay loop muted playsInline preload="none" aria-hidden="true" tabIndex={-1} />
          <div className="ol-sv-hero__scrim" aria-hidden="true" />
          <div className="ol-sv-hero__fade" aria-hidden="true" />
          <div className="ol-sv-hero__inner">
            <div className="ol-sv-hero__grid">
              <div>
                <span className="ol-kicker">Acesso a capital</span>
                <h1 className="ol-sv-hero__title">
                  {"Financie a sua inovação com "}
                  <em className="ol-em">capital subsidiado</em>
                  .
                </h1>
                <h2 className="ol-sv-hero__lead">
                  Lei do Bem, FINEP, FAPEMIG e Compete Minas existem para financiar a inovação, mas sete em cada dez empresas com direito não usam. A Origami faz a captação inteira para o seu negócio.
                </h2>
                <div className="ol-sv-hero__actions">
                  <a className="ol-btn ol-btn--primary" data-magnet="" href="/conversar">
                    {"Avaliar minha elegibilidade "}
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
                  <span className="ol-diag__tag">De onde vem o capital</span>
                </div>
                <div className="ol-fontes" data-fontes="">
                  <div className="ol-fontes__stage">
                    <ul className="ol-fontes__list">
                      <li>
                        <button className="ol-fonte is-active" type="button" data-fonte="">
                          <b>Lei do Bem</b>
                          <i>Incentivo fiscal federal</i>
                        </button>
                      </li>
                      <li>
                        <button className="ol-fonte" type="button" data-fonte="">
                          <b>FINEP</b>
                          <i>Crédito e subvenção federal</i>
                        </button>
                      </li>
                      <li>
                        <button className="ol-fonte" type="button" data-fonte="">
                          <b>FAPEMIG</b>
                          <i>Fomento estadual</i>
                        </button>
                      </li>
                      <li>
                        <button className="ol-fonte" type="button" data-fonte="">
                          <b>Compete Minas</b>
                          <i>Programa estadual</i>
                        </button>
                      </li>
                    </ul>
                    <svg className="ol-fontes__links" viewBox="0 0 214 238" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <filter id="acGlow" x="-40%" y="-40%" width="180%" height="180%">
                          <feGaussianBlur stdDeviation="3.5" result="b" />
                          <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <g className="ol-fontes__rails" vectorEffect="non-scaling-stroke">
                        <path d="M0,26 C112,26 124,119 214,119" />
                        <path d="M0,88 C112,88 124,119 214,119" />
                        <path d="M0,150 C112,150 124,119 214,119" />
                        <path d="M0,212 C112,212 124,119 214,119" />
                      </g>
                      <g className="ol-fontes__flows" filter="url(#acGlow)" vectorEffect="non-scaling-stroke">
                        <path className="ol-fontes__flow" data-fonte-flow="" d="M0,26 C112,26 124,119 214,119" />
                        <path className="ol-fontes__flow" data-fonte-flow="" d="M0,88 C112,88 124,119 214,119" />
                        <path className="ol-fontes__flow" data-fonte-flow="" d="M0,150 C112,150 124,119 214,119" />
                        <path className="ol-fontes__flow" data-fonte-flow="" d="M0,212 C112,212 124,119 214,119" />
                      </g>
                    </svg>
                    <div className="ol-fontes__target">
                      <small>Seu</small>
                      {" "}
                      <strong>
                        projeto de
                        <br />
                        inovação
                      </strong>
                    </div>
                  </div>
                  <p className="ol-fontes__desc">
                    <i aria-hidden="true" />
                    <span data-fonte-desc="">{"Parte dos gastos com P&D deixa de pagar IRPJ e CSLL no ano."}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ol-sv-proof">
            <dl className="ol-sv-proof__grid" data-anim="">
              <div>
                <dt>78%</dt>
                <dd>{"das empresas realizam projetos de P&D"}</dd>
              </div>
              <div>
                <dt>30%</dt>
                <dd>usam algum incentivo fiscal para financiá-los</dd>
              </div>
              <div>
                <dt>52%</dt>
                <dd>travam no excesso de exigências para comprovar</dd>
              </div>
            </dl>
            <p className="ol-sv-proof__src">{"Deloitte e Pieracciani, “Incentivo a P&D e competitividade”, 2022, com 334 empresas brasileiras."}</p>
          </div>
        </section>
        {/* ==================== Três caminhos ==================== */}
        <section className="ol-sv-sec ol-sv-sec--light" id="caminhos">
          <div className="ol-sv-sec__inner">
            <h2 className="ol-sv-sec__title" data-anim="">Três formas de financiar inovação</h2>
            <div className="ol-paths">
              <article className="ol-path" data-anim="" data-d="1">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                  </span>
                  {" Imposto saindo"}
                </div>
                <h3>Incentivo fiscal</h3>
                <p className="ol-path__line">Lei do Bem</p>
                <p className="ol-path__what">
                  {"Quem apura pelo "}
                  <strong>lucro real</strong>
                  {" deduz os gastos com P&D da base do IRPJ e da CSLL. Não entra dinheiro novo: sobra no caixa o que iria para o imposto, já no próprio exercício."}
                </p>
              </article>
              <article className="ol-path" data-anim="" data-d="2">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                  {" Dinheiro entrando"}
                </div>
                <h3>Não reembolsável</h3>
                <p className="ol-path__line">Subvenção econômica</p>
                <p className="ol-path__what">
                  {"Recurso público que "}
                  <strong>entra no caixa e não é devolvido</strong>
                  . Sai por chamada pública da FINEP ou das fundações estaduais, com prazo, projeto aprovado e contrapartida da empresa.
                </p>
              </article>
              <article className="ol-path" data-anim="" data-d="3">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3 21 7l-4 4" />
                      <path d="M21 7H8" />
                      <path d="M7 21 3 17l4-4" />
                      <path d="M3 17h13" />
                    </svg>
                  </span>
                  {" Dinheiro que volta barato"}
                </div>
                <h3>Crédito subsidiado</h3>
                <p className="ol-path__line">FINEP e programas estaduais</p>
                <p className="ol-path__what">
                  {"Financiamento reembolsável para inovação, com "}
                  <strong>juros abaixo do mercado</strong>
                  {" e carência longa. O dinheiro entra agora, volta depois e não dilui a sociedade."}
                </p>
              </article>
            </div>
            <div className="ol-paths__close" data-anim="">
              <ul className="ol-chips">
                <li>Lei do Bem</li>
                <li>Compete Minas</li>
                <li>FINEP</li>
                <li>FAPEMIG</li>
                <li>Subvenção econômica</li>
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
                <h2 data-anim="">Captação de recursos para inovação, de ponta a ponta</h2>
                <p data-anim="" data-d="1">A decisão é sua e a papelada é nossa. Atendemos indústria, engenharia, logística, agro e serviços.</p>
              </div>
              <ol className="ol-flow__steps">
                <li data-anim="">
                  <b>01</b>
                  <h3>Diagnóstico de elegibilidade</h3>
                  <p>
                    Olhamos o regime tributário, o resultado do exercício e o que o seu time desenvolveu. Se não houver caminho, a gente diz na hora.
                  </p>
                </li>
                <li data-anim="">
                  <b>02</b>
                  <h3>Escolha da linha e do edital</h3>
                  <p>
                    Comparamos as oportunidades abertas e montamos o calendário com você, porque perder a janela de uma chamada pode custar um ano de espera.
                  </p>
                </li>
                <li data-anim="">
                  <b>03</b>
                  <h3>Enquadramento técnico</h3>
                  <p>
                    {"Encontramos, dentro da sua operação, o desenvolvimento que se sustenta diante de um avaliador. Na maioria das empresas ele já existe, só que ninguém o chama de P&D."}
                  </p>
                </li>
                <li data-anim="">
                  <b>04</b>
                  <h3>Documentação e formulários</h3>
                  <p>
                    Cuidamos dos formulários oficiais, da memória de cálculo, da alocação de horas e do dossiê técnico, tirando tudo isso da mesa do seu time.
                  </p>
                </li>
                <li data-anim="">
                  <b>05</b>
                  <h3>Submissão e interlocução</h3>
                  <p>Protocolamos no prazo, acompanhamos o trâmite e respondemos às diligências do órgão.</p>
                </li>
                <li data-anim="">
                  <b>06</b>
                  <h3>Prestação de contas</h3>
                  <p>Entregamos os relatórios de execução e sustentamos tecnicamente o projeto.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        {/* ==================== O que muda ==================== */}
        <section className="ol-sv-sec ol-sv-sec--light" id="resultado">
          <div className="ol-sv-sec__inner">
            <h2 className="ol-sv-sec__title" data-anim="">O que muda quando o capital chega</h2>
            <div className="ol-gains">
              <article className="ol-gain" data-anim="" data-d="1">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5" />
                    <path d="m5 12 7-7 7 7" />
                  </svg>
                </span>
                <h3>Invista sem tocar no caixa</h3>
                <p>A modernização deixa de disputar orçamento com a operação.</p>
              </article>
              <article className="ol-gain" data-anim="" data-d="2">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3>Capital mais barato que o mercado</h3>
                <p>A subvenção não se devolve, e o crédito de inovação sai com juros subsidiados.</p>
              </article>
              <article className="ol-gain" data-anim="" data-d="3">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17 9 11l4 4 8-8" />
                    <path d="M21 7v6h-6" />
                  </svg>
                </span>
                <h3>Inovação vira linha rastreável</h3>
                <p>O controle exigido para captar sobrevive ao edital e passa a orientar onde investir.</p>
              </article>
              <article className="ol-gain" data-anim="" data-d="4">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <h3>Seu time focado na operação</h3>
                <p>Ninguém precisa virar especialista em edital para ter acesso ao recurso.</p>
              </article>
            </div>
            <div className="ol-warn" data-anim="">
              <span aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v5" />
                  <path d="M12 16.5v.01" />
                </svg>
              </span>
              <p>
                <strong>Esta página traz orientação geral e não substitui um parecer fiscal.</strong>
                {" Regras, percentuais e prazos mudam a cada exercício, então confirme com a sua contabilidade e na fonte oficial de cada programa."}
              </p>
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
                <a href="/conversar">Fale com a gente</a>
                .
              </p>
            </div>
            <div className="ol-faq__list">
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-capital-1">
                  <span>Minha empresa não é de tecnologia. Tem direito?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-capital-1" data-faq-body="">
                  <p>
                    {"Tem, porque as linhas não restringem setor. Indústria, engenharia, logística, agro e serviços se enquadram sempre que existe desenvolvimento com novidade e incerteza técnica, algo que na indústria costuma acontecer dentro do próprio processo produtivo sem ninguém chamar de P&D."}
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-capital-2">
                  <span>{"Preciso ter um departamento de P&D?"}</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-capital-2" data-faq-body="">
                  <p>
                    Não precisa, porque o que conta é a atividade e não o organograma. Engenharia, produção e qualidade costumam ser onde o desenvolvimento realmente acontece, e cabe a nós identificar essas frentes e descrevê-las na linguagem que o avaliador espera.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-capital-3">
                  <span>Sou lucro presumido ou Simples. Sobra caminho?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-capital-3" data-faq-body="">
                  <p>
                    Sobra sim. A Lei do Bem exige lucro real, mas a subvenção econômica e o crédito subsidiado não dependem do regime tributário, então nesses casos o caminho passa por chamada pública e por linhas de crédito de inovação.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-capital-4">
                  <span>Quanto tempo leva até o recurso chegar?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-capital-4" data-faq-body="">
                  <p>
                    Depende da linha. O incentivo fiscal aparece já no próprio exercício, na apuração, enquanto a subvenção e o crédito seguem o calendário da chamada e a análise do órgão. No diagnóstico apontamos o prazo de cada caminho antes de você decidir.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-capital-5">
                  <span>Dá para usar mais de uma linha ao mesmo tempo?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-capital-5" data-faq-body="">
                  <p>
                    Dá, desde que cada gasto esteja alocado a uma linha só. O que não pode é o mesmo dispêndio sustentar dois benefícios, e essa separação é feita ainda no desenho do projeto, antes da submissão.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-capital-6">
                  <span>E se a captação não der certo?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-capital-6" data-faq-body="">
                  <p>
                    Não há custo nenhum para a empresa, porque só cobramos se o capital for liberado e o risco do processo fica do nosso lado.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-capital-7">
                  <span>Vocês também desenvolvem o projeto?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-capital-7" data-faq-body="">
                  <p>
                    Desenvolvemos. A Origami Lab moderniza a operação de empresas tradicionais em processo, informação e tecnologia, e a captação existe justamente para financiar esse tipo de projeto, com ou sem a nossa execução.
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
              <li><a className="ol-next__card" href="/fomento-a-inovacao"><b>Qual fomento serve para o projeto</b><span>Ferramenta gratuita: Lei do Bem, FINEP, BNDES, EMBRAPII ou as linhas de Minas, com o porquê de cada caminho.</span></a></li>
              <li><a className="ol-next__card" href="/simulador-lei-do-bem"><b>Simulador da Lei do Bem</b><span>Se a sua empresa pode usar o incentivo e quanto ele representa sobre o gasto com P&amp;D, com a memória de cálculo.</span></a></li>
              <li><a className="ol-next__card" href="/lei-do-bem"><b>Lei do Bem: quem tem direito</b><span>Os requisitos, o que conta como P&amp;D na indústria e o que fazer quando a empresa não se enquadra.</span></a></li>
              <li><a className="ol-next__card" href="/financiamento-de-inovacao"><b>FINEP, subvenção e crédito para inovação</b><span>Os três caminhos para financiar inovação e qual serve para quem está no lucro presumido.</span></a></li>
            </ul>
          </div>
        </section>
        {/* ==================== Chamada final ==================== */}
        <section className="ol-cta" id="contato">
          <div className="ol-cta__glow" aria-hidden="true" />
          <div className="ol-cta__inner">
            <h2 className="ol-cta__title">
              {"Descobrir quanto está na mesa leva "}
              <em className="ol-em">30 minutos</em>
            </h2>
            <p className="ol-cta__lead">
              Olhamos o regime tributário, o resultado do exercício e o que o seu time desenvolveu, e você sai da conversa sabendo se há caminho, qual é ele e qual o prazo.
            </p>
            <div className="ol-cta__actions">
              <a className="ol-btn ol-btn--primary ol-btn--lg" data-magnet="" href="/conversar">
                {"Avaliar minha elegibilidade "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="https://wa.me/553198055189?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20acesso%20a%20capital%20para%20inova%C3%A7%C3%A3o." target="_blank" rel="noopener">Falar no WhatsApp</a>
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
