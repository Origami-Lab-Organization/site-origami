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
    "absolute": "Studio de Produto: software sob medida | Origami Lab"
  },
  "description": "Studio de Produto: o software que a sua operação precisa quando nenhum sistema pronto resolve. Primeira versão em uso em até 1 mês, integrada ao ERP.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/desenvolvimento-de-software"
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
    "url": "https://www.origamilab.com.br/desenvolvimento-de-software",
    "siteName": "Origami Lab",
    "title": "Studio de Produto: software sob medida | Origami Lab",
    "description": "Seu DNA, sua tecnologia. O software feito para o jeito de operar da sua empresa, em uso em até 1 mês e integrado ao que você já tem.",
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
      "@id": "https://www.origamilab.com.br/desenvolvimento-de-software#webpage",
      "url": "https://www.origamilab.com.br/desenvolvimento-de-software",
      "name": "Studio de Produto: desenvolvimento de software sob medida",
      "description": "Studio de Produto da Origami Lab: o software que a operação precisa quando nenhum sistema pronto resolve, com a primeira versão em uso em até 1 mês, integrada ao ERP, e evolução em fases com ganho medido.",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "about": {
        "@id": "https://www.origamilab.com.br/desenvolvimento-de-software#service"
      },
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "dateModified": atualizacaoDaPagina("/desenvolvimento-de-software")
    },
    {
      "@type": "Service",
      "@id": "https://www.origamilab.com.br/desenvolvimento-de-software#service",
      "name": "Studio de Produto",
      "alternateName": [
        "Desenvolvimento de software sob medida",
        "Desenvolvimento de sistemas personalizados",
        "Desenvolvimento e implantação de software",
        "Software sob encomenda para empresas"
      ],
      "slogan": "Seu DNA, sua tecnologia.",
      "serviceType": "Desenvolvimento de software sob medida para a operação",
      "description": "Studio de Produto é o serviço de desenvolvimento de software sob medida da Origami Lab, para quando nenhum sistema pronto resolve o jeito de operar da empresa: o que o ERP não cobre, os sistemas que não conversam entre si e a informação da operação em tempo real. O discovery acontece dentro da operação e faz parte do projeto. A primeira versão entra em uso em até 1 mês, integrada ao ERP; depois o software evolui em fases, cada uma com linha de base, meta e ganho medido, e o cliente decide a cada fase se continua. O projeto é documentado como P&D desde o início, para avaliar o uso da Lei do Bem. O código é entregue documentado e os dados permanecem com o cliente.",
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
        "name": "Indústria, agroindústria, transporte, mineração e engenharia com operação apoiada em ERP, planilhas e WhatsApp"
      },
      "url": "https://www.origamilab.com.br/desenvolvimento-de-software",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Frentes de desenvolvimento",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sistema sob medida",
              "description": "O ERP é genérico por natureza. Construímos em volta dele o que é específico do negócio e hoje vive em planilha: produção, obra, frota, qualidade."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Integração de sistemas",
              "description": "Conectamos por API, banco ou arquivo o que já existe, para que o dado ande sozinho, sem trocar o ERP."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Informação em tempo real",
              "description": "Indicadores e apontamento digitalizados levam o dado da operação em tempo real a quem decide, para a gestão acompanhar produção, custo e prazo pelo que está acontecendo agora."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.origamilab.com.br/desenvolvimento-de-software#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é o Studio de Produto da Origami Lab?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É o serviço de desenvolvimento de software sob medida da Origami Lab. Construímos o sistema que a operação precisa quando nenhum produto pronto resolve o jeito como a empresa trabalha, integrado ao ERP e ao que já existe. A primeira versão entra em uso em até 1 mês; depois o software evolui em fases, cada uma com ganho medido e uma decisão do cliente para continuar."
          }
        },
        {
          "@type": "Question",
          "name": "A Origami Lab substitui o ERP da empresa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Na maioria dos casos o ERP continua sendo a base do fiscal e do financeiro, e o desenvolvimento acontece em volta dele, cobrindo o que ele não atende e conectando os sistemas que não conversam. Trocar o ERP costuma ser caro, demorado e recriar o mesmo problema dois anos depois."
          }
        },
        {
          "@type": "Question",
          "name": "Quando não vale contratar um software sob medida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quando um produto de mercado cobre o processo com pouca adaptação. Fiscal, contábil e folha, por exemplo, seguem regras de mercado e obrigação legal, e um sistema pronto costuma resolver melhor. O Studio de Produto faz sentido quando o processo é o que diferencia a empresa e hoje vive em planilha, WhatsApp e redigitação em volta do ERP. A Origami Lab também não faz implantação de ERP ou CRM nem alocação de desenvolvedores na equipe do cliente."
          }
        },
        {
          "@type": "Question",
          "name": "Precisamos ter uma equipe de TI? E se já tivermos uma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não é necessário ter. Quando a empresa tem TI, ela participa do projeto: dá o parecer técnico, cuida do ERP e da infraestrutura e recebe o que foi construído, sem que o projeto dispute a fila de demandas dela. Quando não tem, a Origami Lab conduz a implantação e prepara as pessoas da operação para usar e manter o que foi entregue."
          }
        },
        {
          "@type": "Question",
          "name": "De quem é o código e os dados do sistema desenvolvido?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do cliente. O que é construído para a empresa é da empresa, com o código entregue e documentado. Os dados permanecem sob a titularidade do cliente, em ambiente de nuvem contratado por ele. A Origami Lab é credenciada AWS. Se a relação terminar, o sistema continua funcionando e a documentação permite que outra equipe o mantenha."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto custa desenvolver um sistema sob medida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O custo depende das integrações necessárias, das regras e exceções do processo, do número de usuários e turnos, dos dados a migrar e do trabalho de implantação e treinamento. O discovery, que faz parte do projeto, define o escopo, as prioridades e o investimento por fase. Você recebe a proposta antes de cada fase e aprova o que será feito."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo até ver o software funcionando?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A primeira versão entra em uso em até 1 mês, com quem está na ponta, e os ciclos de duas semanas seguem daí em frente. O prazo total depende do que for priorizado em cada fase, mas não é preciso esperar o fim do projeto para ver resultado."
          }
        },
        {
          "@type": "Question",
          "name": "Com IA, desenvolver software não ficou mais simples?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A IA acelera a escrita do código, e ela está na base da execução da Origami Lab: é parte do motivo de a primeira versão entrar em uso em até 1 mês. Mas o código é só uma parte do trabalho. Entender o processo, integrar ao ERP, colocar o sistema em uso com quem está na ponta e medir o ganho continuam definindo o resultado, e é pelo resultado que a Origami Lab responde."
          }
        },
        {
          "@type": "Question",
          "name": "O sistema funciona no chão de fábrica, sem internet boa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entender onde o sistema vai ser usado faz parte do diagnóstico. Apontamento de produção e de campo são construídos para a realidade do lugar, inclusive quando isso significa funcionar no celular de quem está na obra ou na linha."
          }
        },
        {
          "@type": "Question",
          "name": "Dá para financiar o projeto de software com recurso de incentivo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende da empresa, do projeto e do instrumento. Os projetos do Studio de Produto são documentados desde o início como a Lei do Bem pede, com o registro técnico das incertezas, das tentativas e dos dispêndios, para que o enquadramento possa ser avaliado sem reconstruir o histórico depois. A Lei do Bem é um incentivo fiscal para pesquisa e desenvolvimento tecnológico, com requisitos como Lucro Real, regularidade fiscal e lucro fiscal para a exclusão adicional de dispêndios. Comprar software ou automatizar uma rotina não garante enquadramento. Crédito e subvenção têm condições próprias de elegibilidade e aprovação. A avaliação é feita antes de incluir qualquer incentivo na conta do investimento."
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
          "name": "Studio de Produto",
          "item": "https://www.origamilab.com.br/desenvolvimento-de-software"
        }
      ]
    }
  ]
};

export default function PaginaDesenvolvimentoDeSoftware() {
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
                <span className="ol-kicker">Studio de Produto</span>
                <h1 className="ol-sv-hero__title">
                  {"Software feito "}
                  <em className="ol-em">sob medida</em>
                  {" para a sua operação."}
                </h1>
                <h2 className="ol-sv-hero__lead">
                  Colocamos em uso, em até 1 mês, a primeira versão do software que a sua operação precisa, integrado ao que você já tem. Depois evoluímos em fases, cada uma com ganho medido e uma decisão sua para continuar.
                </h2>
                <div className="ol-sv-hero__actions">
                  <a className="ol-btn ol-btn--primary" data-magnet="" href="/conversar">
                    {"Falar sobre o meu projeto "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  {" "}
                  <a className="ol-btn ol-btn--ghost" href="#processo">Ver como funciona</a>
                </div>
              </div>
              <div className="ol-diag ol-diag--cycle">
                <div className="ol-cycle__aurora ol-cycle__aurora--a" aria-hidden="true" />
                <div className="ol-cycle__aurora ol-cycle__aurora--b" aria-hidden="true" />
                <div className="ol-diag__head">
                  <span className="ol-diag__tag">Ciclo de entrega</span>
                </div>
                <div className="ol-cycle" data-cycle="">
                  <div className="ol-cycle__orbit">
                    <div className="ol-cycle__halo" aria-hidden="true" />
                    <svg viewBox="0 0 320 320" aria-hidden="true">
                      <defs>
                        <filter id="ol-cycle-glow" x="-60%" y="-60%" width="220%" height="220%">
                          <feGaussianBlur stdDeviation="5" result="b" />
                          <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <circle className="ol-cycle__ring" cx="160" cy="160" r="126" />
                      <path className="ol-cycle__track" d="M160,34 A126,126 0 0 0 50.9,223" />
                      <path className="ol-cycle__track" d="M50.9,223 A126,126 0 0 0 269.1,223" />
                      <path className="ol-cycle__track" d="M269.1,223 A126,126 0 0 0 160,34" />
                      <g className="ol-cycle__fills">
                        <path className="ol-cycle__fill" data-cycle-fill="0" d="M160,34 A126,126 0 0 0 50.9,223" />
                        <path className="ol-cycle__fill" data-cycle-fill="1" d="M50.9,223 A126,126 0 0 0 269.1,223" />
                        <path className="ol-cycle__fill" data-cycle-fill="2" d="M269.1,223 A126,126 0 0 0 160,34" />
                      </g>
                    </svg>
                    <div className="ol-cycle__core">
                      <span>Sprint</span>
                      {" "}
                      <b>2 semanas</b>
                    </div>
                    <button className="ol-cycle__node is-active" type="button" data-cycle-node="0" style={{ "--x": "50%", "--y": "10.625%" } as React.CSSProperties}>
                      <span aria-hidden="true">01</span>
                      {" "}
                      <span className="ol-sr">Aprender</span>
                    </button>
                    {" "}
                    <button className="ol-cycle__node" type="button" data-cycle-node="1" style={{ "--x": "15.906%", "--y": "69.688%" } as React.CSSProperties}>
                      <span aria-hidden="true">02</span>
                      {" "}
                      <span className="ol-sr">Construir</span>
                    </button>
                    {" "}
                    <button className="ol-cycle__node" type="button" data-cycle-node="2" style={{ "--x": "84.094%", "--y": "69.688%" } as React.CSSProperties}>
                      <span aria-hidden="true">03</span>
                      {" "}
                      <span className="ol-sr">Medir</span>
                    </button>
                    {" "}
                    <span className="ol-cycle__label is-active" data-cycle-label="0" style={{ "--x": "50%", "--y": "-10.625%" } as React.CSSProperties} aria-hidden="true">Aprender</span>
                    {" "}
                    <span className="ol-cycle__label" data-cycle-label="1" style={{ "--x": "15.906%", "--y": "85.312%" } as React.CSSProperties} aria-hidden="true">Construir</span>
                    {" "}
                    <span className="ol-cycle__label" data-cycle-label="2" style={{ "--x": "84.094%", "--y": "85.312%" } as React.CSSProperties} aria-hidden="true">Medir</span>
                  </div>
                  <div className="ol-cycle__detail" aria-live="polite">
                    <div className="ol-cycle__detail-top">
                      <i aria-hidden="true" />
                      {" "}
                      <b data-cycle-name="">Aprender</b>
                    </div>
                    <p data-cycle-desc="">Entendemos onde a operação perde eficiência. A prioridade sai daí, decidida com as lideranças.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== O que construímos ==================== */}
        <section className="ol-sv-sec ol-sv-sec--light" id="solucoes">
          <div className="ol-sv-sec__inner">
            <h2 className="ol-sv-sec__title ol-sv-sec__title--tight" data-anim="">Seu DNA, sua tecnologia</h2>
            <p className="ol-sv-sec__lead">
              O Studio de Produto é o serviço de desenvolvimento de software sob medida da Origami Lab. Construímos o sistema que cobre um processo específico da
              operação quando nenhum produto pronto resolve o jeito como a empresa trabalha: planejamento, apontamento, pedidos, recebimento, despacho, frota,
              cobrança ou trabalho em campo. O serviço inclui o discovery dentro da operação, o desenvolvimento, a integração com o ERP, a implantação e o
              treinamento da equipe, para indústria, agroindústria, transporte, mineração e engenharia.
            </p>
            <div className="ol-paths">
              <article className="ol-path" data-anim="" data-d="1">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="14" rx="2" />
                      <path d="M8 21h8" />
                      <path d="M12 18v3" />
                    </svg>
                  </span>
                  {" Personalização"}
                </div>
                <h3>Solução sob medida</h3>
                <p className="ol-path__what">
                  {"O ERP é bom no fiscal, no financeiro e no estoque, porque é genérico por natureza. Construímos em volta dele "}
                  <strong>o que é específico do seu negócio</strong>
                  {" e hoje vive em planilha e controles manuais."}
                </p>
              </article>
              <article className="ol-path" data-anim="" data-d="2">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3" />
                      <path d="M16 7h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3" />
                      <path d="M8 12h8" />
                    </svg>
                  </span>
                  {" Integração"}
                </div>
                <h3>Sistemas integrados</h3>
                <p className="ol-path__what">
                  {"Quando alguém lê um número de um lugar e digita em outro, o erro é questão de tempo. Conectamos o que já existe para que "}
                  <strong>o dado ande sozinho</strong>
                  , sem trocar o seu ERP.
                </p>
              </article>
              <article className="ol-path" data-anim="" data-d="3">
                <div className="ol-path__kind">
                  <span aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="m7 15 4-4 3 3 5-6" />
                    </svg>
                  </span>
                  {" Dados"}
                </div>
                <h3>Informação em tempo real</h3>
                <p className="ol-path__what">
                  {"Indicadores e apontamento digitalizados levam "}
                  <strong>o dado da operação em tempo real</strong>
                  {" a quem decide. A gestão passa a acompanhar produção, custo e prazo pelo que está acontecendo agora, não pelo relatório de ontem."}
                </p>
              </article>
            </div>
            <div className="ol-paths__close" data-anim="">
              <ul className="ol-chips">
                <li>Integrado ao ERP</li>
                <li>Código e dados seus</li>
                <li>Implantação e treinamento</li>
                <li>Documentado como P&amp;D</li>
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
                <h2 data-anim="">Da primeira versão às fases com ganho medido</h2>
                <p data-anim="" data-d="1">A primeira versão entra em uso em até 1 mês. Depois o software evolui em fases, e você decide a cada uma se seguimos.</p>
              </div>
              <ol className="ol-flow__steps">
                <li data-anim="">
                  <b>01</b>
                  <h3>Discovery dentro da operação</h3>
                  <p>De uma a duas semanas imersos onde o processo acontece, com a diretoria definindo o que move resultado primeiro. O discovery faz parte do projeto.</p>
                </li>
                <li data-anim="">
                  <b>02</b>
                  <h3>Primeira versão em uso em até 1 mês</h3>
                  <p>Software rodando e sendo usado por quem está na ponta, não em ambiente de teste, integrado ao ERP pelo caminho que o fornecedor permite.</p>
                </li>
                <li data-anim="">
                  <b>03</b>
                  <h3>Ciclos de duas semanas</h3>
                  <p>Construir, medir e aprender a cada sprint, com review ao fim de cada ciclo e um ponto de contato fixo com você.</p>
                </li>
                <li data-anim="">
                  <b>04</b>
                  <h3>Fases com ganho medido</h3>
                  <p>Cada fase começa com a linha de base e a meta do ganho na operação e termina com o resultado medido. A decisão de seguir para a próxima é sua.</p>
                </li>
                <li data-anim="">
                  <b>05</b>
                  <h3>Documentado como P&amp;D desde o início</h3>
                  <p>Registramos incertezas, tentativas e dispêndios enquanto construímos, para que a empresa possa avaliar a Lei do Bem sem reconstruir o histórico.</p>
                </li>
                <li data-anim="">
                  <b>06</b>
                  <h3>Implantação e autonomia</h3>
                  <p>Treinamos as pessoas da operação e acompanhamos o uso até a sua equipe conduzir tudo sem nós. O código sai documentado.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        {/* ==================== O que muda ==================== */}
        <section className="ol-sv-sec ol-sv-sec--light" id="resultado">
          <div className="ol-sv-sec__inner">
            <h2 className="ol-sv-sec__title" data-anim="">O que muda na operação</h2>
            <div className="ol-gains">
              <article className="ol-gain" data-anim="" data-d="1">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <h3>Gestão em tempo real</h3>
                <p>O que acontece no chão de fábrica ou na frente de serviço chega à diretoria no mesmo dia.</p>
              </article>
              <article className="ol-gain" data-anim="" data-d="2">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3>Um número só, confiável</h3>
                <p>Acaba a reunião que gasta a primeira meia hora decidindo qual sistema está com a razão.</p>
              </article>
              <article className="ol-gain" data-anim="" data-d="3">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17 9 11l4 4 8-8" />
                    <path d="M21 7v6h-6" />
                  </svg>
                </span>
                <h3>Menos retrabalho e hora extra</h3>
                <p>Cada redigitação que some é um erro a menos e uma pessoa boa liberada para o que importa.</p>
              </article>
              <article className="ol-gain" data-anim="" data-d="4">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5" />
                    <path d="m5 12 7-7 7 7" />
                  </svg>
                </span>
                <h3>Menor time-to-market</h3>
                <p>O que seria um projeto de um ano vira entregas quinzenais que já produzem resultado no caminho.</p>
              </article>
            </div>
          </div>
        </section>
        {/* ==================== Decisão de contratação ==================== */}
        <section className="ol-doc" aria-labelledby="escolher-caminho">
          <div className="ol-doc__inner">
            <aside className="ol-toc">
              <div className="ol-toc__title">Antes de contratar</div>
              <ul className="ol-toc__list">
                <li><a href="#quando-faz-sentido">Quando o Studio faz sentido</a></li>
                <li><a href="#por-setor">O Studio por setor</a></li>
                <li><a href="#escolher-caminho">Qual caminho resolve</a></li>
                <li><a href="#criterios-de-contratacao">O que comparar na proposta</a></li>
                <li><a href="#projetos-publicados">Projetos publicados</a></li>
              </ul>
            </aside>
            <article className="ol-prose">
              <h2 id="quando-faz-sentido">Quando o Studio de Produto faz sentido</h2>
              <p>
                Software sob medida vale quando o processo é o que diferencia a empresa e nenhum sistema de mercado o cobre sem virar adaptação em cima de
                adaptação. Os sinais costumam ser os mesmos:
              </p>
              <ul>
                <li>A operação roda em planilha, WhatsApp e redigitação em volta do ERP.</li>
                <li>O ERP cuida bem do fiscal e do financeiro, mas não acompanha a produção, o campo, a frota ou o despacho como eles acontecem.</li>
                <li>O mesmo número aparece diferente em cada sistema, e a diretoria só enxerga a margem no fim do mês.</li>
              </ul>
              <p>O que o Studio de Produto não faz:</p>
              <ul>
                <li><strong>Implantação de ERP ou CRM.</strong> Integramos ao que a empresa já usa.</li>
                <li><strong>Alocação de desenvolvedores</strong> na equipe do cliente. O Studio responde pelo software em uso e pelo ganho medido.</li>
                <li><strong>Sistema que um produto pronto resolve bem.</strong> Se for o caso, a gente diz na primeira conversa.</li>
              </ul>

              <h2 id="por-setor">O Studio de Produto por setor</h2>
              <p>
                Cada setor tem um processo que costuma ficar fora do ERP. Os guias abaixo mostram como controlar bem cada um, quando uma planilha ou um sistema
                de mercado resolve e quando vale construir sob medida.
              </p>
              <div className="ol-tablewrap">
                <table className="ol-table">
                  <thead>
                    <tr>
                      <th scope="col">Setor</th>
                      <th scope="col">Onde a operação costuma travar</th>
                      <th scope="col">Guia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Indústria</td>
                      <td>Programação, apontamento e qualidade em planilha, sem ligação com a ordem e o lote.</td>
                      <td>
                        <a href="/planejamento-de-producao">PCP</a>, <a href="/apontamento-de-producao">apontamento de produção</a> e{" "}
                        <a href="/registro-de-nao-conformidade">registro de não conformidade</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Mineração, cal e calcário</td>
                      <td>Produção e despacho soltos, peso digitado à mão e diferença entre o pesado e o faturado.</td>
                      <td><a href="/controle-de-expedicao-e-pesagem">Controle de expedição e pesagem</a></td>
                    </tr>
                    <tr>
                      <td>Agroindústria</td>
                      <td>Recebimento da matéria-prima e pagamento do produtor por regras que só uma pessoa entende.</td>
                      <td><a href="/pagamento-por-qualidade-do-leite">Recebimento de leite e pagamento por qualidade</a></td>
                    </tr>
                    <tr>
                      <td>Transporte e frota própria</td>
                      <td>Manutenção, pneus e abastecimento controlados à mão, com o veículo parado sem aviso.</td>
                      <td><a href="/controle-de-manutencao-de-frota">Controle de manutenção de frota</a></td>
                    </tr>
                    <tr>
                      <td>Engenharia e manutenção industrial</td>
                      <td>Margem por obra que só aparece no fim, medição sem evidência e diário de obra em papel.</td>
                      <td>
                        <a href="/boletim-de-medicao">Boletim de medição</a> e <a href="/rdo-diario-de-obra">RDO, o diário de obra</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="escolher-caminho">Integrar, desenvolver ou modernizar?</h2>
              <p>O problema que a operação enfrenta define o trabalho necessário. Um mesmo projeto pode combinar os três caminhos.</p>
              <div className="ol-tablewrap">
                <table className="ol-table">
                  <thead>
                    <tr>
                      <th scope="col">Situação da empresa</th>
                      <th scope="col">Caminho a avaliar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Os sistemas atendem ao processo, mas alguém precisa exportar e redigitar os mesmos dados.</td>
                      <td><a href="/integracao-de-sistemas">Integrar os sistemas existentes</a>, com registro de falhas e conferência dos dados.</td>
                    </tr>
                    <tr>
                      <td>O processo tem regras próprias que o ERP e os produtos avaliados não cobrem.</td>
                      <td><a href="/software-sob-medida">Desenvolver software sob medida</a> para essa parte da operação, conectado ao ERP.</td>
                    </tr>
                    <tr>
                      <td>O processo depende de um sistema antigo que a empresa não consegue mais alterar com segurança.</td>
                      <td><a href="/modernizacao-de-sistemas-legados">Modernizar o sistema legado</a>, preservando regras e migrando por etapas.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Se um produto pronto cobre o processo com pouca adaptação, ele também deve entrar na comparação.</p>

              <p>
                Dois recortes ajudam a detalhar essa escolha: a <a href="/mes-vs-erp">comparação entre MES e ERP</a> para a produção e a{" "}
                <a href="/automacao-de-contas-a-receber">automação de contas a receber</a> para o financeiro.
              </p>

              <h2 id="criterios-de-contratacao">O que comparar numa proposta de desenvolvimento</h2>
              <ul>
                <li><strong>Escopo e aceite:</strong> qual processo será atendido, o que fica fora e como a equipe confirma que a entrega funciona.</li>
                <li><strong>Integrações:</strong> quais sistemas trocam dados, quais acessos são necessários e quem responde quando a integração falha.</li>
                <li><strong>Migração e implantação:</strong> como conferir o histórico, testar com usuários e manter a operação durante a mudança.</li>
                <li><strong>Continuidade:</strong> de quem são o código, os dados e as contas de infraestrutura, e o que será entregue de documentação e treinamento.</li>
              </ul>
              <p>
                O <a href="/diagnostico-de-modernizacao">diagnóstico gratuito de modernização</a> ajuda a organizar os primeiros sinais da sua operação.
                O escopo e a proposta exigem uma avaliação com a equipe.
              </p>

              <h2 id="projetos-publicados">Como isso aparece em projetos da Origami</h2>
              <ul>
                <li>
                  Prumo Engenharia: o apontamento de campo foi digitalizado, e a intranet descrita no <a href="/cases/prumo-engenharia">case publicado</a> virou o canal
                  único entre obra e administrativo. A relação segue em fases sucessivas, e a Prumo está hoje na quarta fase com a Origami.
                </li>
                <li>
                  <a href="/cases/cobranca-automatica-whatsapp-retifica-formiguense">Retífica Formiguense:</a> a régua de cobrança via WhatsApp foi integrada ao ERP,
                  com acompanhamento da carteira em um painel. O case descreve o problema, a implantação e o resultado observado.
                </li>
                <li>
                  <a href="/cases/transportadora-cabral">Transportadora Cabral:</a> a Central do Motorista conectou solicitações, checklists e manutenção ao TripLog,
                  com registro das interações. O case inclui o relato do cliente após o início da operação.
                </li>
              </ul>
            </article>
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
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-studio">
                  <span>O que é o Studio de Produto?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-studio" data-faq-body="">
                  <p>
                    É o nosso serviço de desenvolvimento de software sob medida. Construímos o sistema que a operação precisa quando nenhum produto pronto resolve o jeito como a sua empresa trabalha, integrado ao ERP e ao que já existe. A primeira versão entra em uso em até 1 mês; depois o software evolui em fases, cada uma com ganho medido e uma decisão sua para continuar.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-1">
                  <span>Vocês substituem o nosso ERP?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-1" data-faq-body="">
                  <p>
                    Não. Na maioria dos casos o ERP continua sendo a base do fiscal e do financeiro, e construímos em volta dele o que ele não cobre, conectando os sistemas que hoje não conversam. Trocar o ERP costuma ser caro, demorado e recriar o mesmo problema dois anos depois.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-quando-nao">
                  <span>Quando não vale contratar um software sob medida?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-quando-nao" data-faq-body="">
                  <p>
                    Quando um produto de mercado cobre o processo com pouca adaptação. Fiscal, contábil e folha, por exemplo, seguem regras de mercado e obrigação legal, e um sistema pronto costuma resolver melhor. O Studio de Produto faz sentido quando o processo é o que diferencia a sua empresa e hoje vive em planilha, WhatsApp e redigitação em volta do ERP. Também não fazemos implantação de ERP ou CRM nem alocação de desenvolvedores na sua equipe.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-2">
                  <span>Precisamos ter uma equipe de TI? E se já tivermos uma?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-2" data-faq-body="">
                  <p>
                    Não é necessário ter. Quando a sua empresa tem TI, ela participa do projeto: dá o parecer técnico, cuida do ERP e da infraestrutura e recebe o que construímos, sem que o projeto dispute a fila de demandas dela. Quando não tem, conduzimos a implantação e preparamos as pessoas da operação para usar e manter o que foi entregue.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-3">
                  <span>De quem é o código e os dados?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-3" data-faq-body="">
                  <p>
                    Seus. O que construímos para a sua empresa é da sua empresa, com o código entregue e documentado. Os dados permanecem sob a sua titularidade, em ambiente de nuvem contratado por você. Somos credenciados AWS. Se a relação terminar, o sistema continua funcionando e a documentação permite que outra equipe o mantenha.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-4">
                  <span>Quanto custa desenvolver um sistema sob medida?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-4" data-faq-body="">
                  <p>
                    O custo depende das integrações necessárias, das regras e exceções do processo, do número de usuários e turnos, dos dados a migrar e do trabalho de implantação e treinamento. O discovery, que faz parte do projeto, define o escopo, as prioridades e o investimento por fase. Você recebe a proposta antes de cada fase e aprova o que será feito.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-5">
                  <span>Quanto tempo até ver alguma coisa funcionando?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-5" data-faq-body="">
                  <p>
                    A primeira versão entra em uso em até 1 mês, com quem está na ponta, e os ciclos de duas semanas seguem daí em frente. O prazo total depende do que for priorizado em cada fase, mas você não espera o fim do projeto para ver resultado.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-ia">
                  <span>Com IA, desenvolver software não ficou mais simples?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-ia" data-faq-body="">
                  <p>
                    A IA acelera a escrita do código, e ela está na base da nossa execução: é parte do motivo de a primeira versão entrar em uso em até 1 mês. Mas o código é só uma parte do trabalho. Entender o processo, integrar ao ERP, colocar o sistema em uso com quem está na ponta e medir o ganho continuam definindo o resultado, e é pelo resultado que respondemos.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-6">
                  <span>E se o sistema tiver que rodar no chão de fábrica, sem internet boa?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-6" data-faq-body="">
                  <p>
                    Faz parte do diagnóstico entender onde o sistema vai ser usado de verdade. Apontamento de produção e de campo são construídos para a realidade do lugar — inclusive quando isso significa funcionar no celular de quem está na obra ou na linha.
                  </p>
                </div>
              </div>
              <div className="ol-faq__item" data-faq="">
                <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-dev-7">
                  <span>Dá para financiar o projeto com recurso de incentivo?</span>
                  {" "}
                  <span className="ol-faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="ol-faq__body" id="faq-dev-7" data-faq-body="">
                  <p>
                    Depende da empresa, do projeto e do instrumento. Os projetos do Studio de Produto são documentados desde o início como a Lei do Bem pede, com o registro técnico das incertezas, das tentativas e dos dispêndios, para que o enquadramento possa ser avaliado sem reconstruir o histórico depois. A Lei do Bem é um incentivo fiscal para pesquisa e desenvolvimento tecnológico, com requisitos como Lucro Real, regularidade fiscal e lucro fiscal para a exclusão adicional de dispêndios. Comprar software ou automatizar uma rotina não garante enquadramento. Crédito e subvenção têm condições próprias de elegibilidade e aprovação. A avaliação é feita antes de incluir qualquer incentivo na conta do investimento.
                  </p>
                  <p>
                    Entenda os <a href="/lei-do-bem">requisitos da Lei do Bem</a>, <a href="/lei-do-bem-desenvolvimento-de-software">como ela se aplica ao desenvolvimento de software</a> e a diferença entre os <a href="/financiamento-de-inovacao">instrumentos de financiamento da inovação</a>.
                    {" A orientação oficial está no "}
                    <a href="https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/paginas/o-que-e-a-lei-do-bem" target="_blank" rel="noopener">MCTI</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== Projetos e leituras relacionadas ==================== */}
        <section className="ol-next" aria-labelledby="relacionadas">
          <div className="ol-next__inner">
            <h2 className="ol-next__title" id="relacionadas">Projetos e leituras relacionadas</h2>
            <ul className="ol-next__grid">
              <li>
                <a className="ol-next__card" href="/cases/cobranca-automatica-whatsapp-retifica-formiguense">
                  <b>Case: cobrança automática integrada ao ERP</b>
                  <span>
                    Retífica Formiguense: régua de cobrança via WhatsApp e painel de inadimplência, com a primeira versão em produção em oito semanas.
                  </span>
                </a>
              </li>
              <li>
                <a className="ol-next__card" href="/cases/transportadora-cabral">
                  <b>Case: Central do Motorista integrada ao TripLog</b>
                  <span>Transportadora Cabral: manutenção, checklists e emissão de CT-e e MDF-e num canal único entre motorista e backoffice.</span>
                </a>
              </li>
              <li>
                <a className="ol-next__card" href="/software-sob-medida">
                  <b>Pronto ou sob medida?</b>
                  <span>O critério para decidir entre produto pronto e sob medida, e os cinco fatores que definem o custo de um projeto.</span>
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
          <div className="ol-cta__glow" aria-hidden="true" />
          <div className="ol-cta__inner">
            <h2 className="ol-cta__title">
              {"Somos o seu time pronto para começar na "}
              <em className="ol-em">segunda-feira</em>
            </h2>
            <p className="ol-cta__lead">
              O primeiro passo é uma conversa de 30 minutos sobre a sua operação. Se o caminho for produto de mercado em vez de sob medida, a gente diz.
            </p>
            <div className="ol-cta__actions">
              <a className="ol-btn ol-btn--primary ol-btn--lg" data-magnet="" href="/conversar">
                {"Falar sobre o meu projeto "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="https://wa.me/553198055189?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20desenvolvimento%20de%20software." target="_blank" rel="noopener">Falar no WhatsApp</a>
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
