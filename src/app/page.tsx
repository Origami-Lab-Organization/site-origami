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
    "absolute": "Origami Lab: tecnologia para indústria em Minas Gerais"
  },
  "description": "Software sob medida, integração com ERP e chão de fábrica, automação de processos e dados em tempo real para indústrias. Base em Formiga, MG.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/"
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
    "url": "https://www.origamilab.com.br/",
    "siteName": "Origami Lab",
    "title": "Origami Lab: modernizamos operações industriais com software, integração e automação",
    "description": "Tecnologia para indústria: eliminamos planilhas, integramos ERP e chão de fábrica e transformamos dados da operação em decisão. Base em Formiga, MG.",
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
    ORGANIZACAO,
    SITE_NODE,
    {
      "@type": "WebPage",
      "@id": "https://www.origamilab.com.br/#webpage",
      "url": "https://www.origamilab.com.br/",
      "name": "Origami Lab: tecnologia para indústria",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "about": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "primaryImageOfPage": {
        "@id": "https://www.origamilab.com.br/#primaryimage"
      },
      "dateModified": atualizacaoDaPagina("/")
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.origamilab.com.br/#primaryimage",
      "url": "https://www.origamilab.com.br/assets/og-cover-1x1.jpg",
      "contentUrl": "https://www.origamilab.com.br/assets/og-cover-1x1.jpg",
      "width": 1200,
      "height": 1200,
      "caption": "Origami Lab: tecnologia para indústria, com software, integração e automação."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que a Origami Lab faz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Origami Lab é uma empresa de tecnologia para indústria sediada em Formiga, Minas Gerais, especializada na modernização de operações industriais. Atua no desenvolvimento de software sob medida, na integração com ERPs, na automação de processos, na gestão da operação em tempo real, em inteligência artificial aplicada e na estruturação de projetos de inovação financiados por Lei do Bem, FINEP e FAPEMIG. Atende indústrias e empresas tradicionais em Minas Gerais e em outros estados, do diagnóstico da operação ao desenvolvimento, à implantação e ao treinamento da equipe."
          }
        },
        {
          "@type": "Question",
          "name": "Como começa e quanto tempo leva um projeto da Origami Lab?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Começa pelo diagnóstico: de 2 a 4 semanas dentro da operação, entendendo o processo como ele é hoje. Depois vêm a estratégia, quando a diretoria define o que move resultado primeiro, e a execução, com software em produção no primeiro mês e ciclos curtos daí em frente. O prazo total depende do escopo priorizado no diagnóstico."
          }
        },
        {
          "@type": "Question",
          "name": "Como funciona a cobrança do projeto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cada projeto é dimensionado pelo escopo: não há pacote fechado de prateleira. O investimento é definido a partir do que a operação precisa e do retorno que aquilo destrava, e apresentado antes de qualquer etapa começar. O cliente aprova cada fase antes de ela ser iniciada."
          }
        },
        {
          "@type": "Question",
          "name": "A Origami Lab substitui o ERP e os sistemas que já usamos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. O trabalho é integrado ao que já existe. Na maioria dos casos o ERP continua sendo a base: construímos em volta dele o que ele não cobre e conectamos os sistemas que hoje não conversam entre si."
          }
        },
        {
          "@type": "Question",
          "name": "Precisamos ter uma equipe de TI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não é necessário. Quando existe, trabalhamos junto com ela; quando não existe, conduzimos a implantação e preparamos as pessoas da operação para usar e manter o que foi entregue."
          }
        },
        {
          "@type": "Question",
          "name": "Como é o acompanhamento durante e depois da implantação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Durante o projeto há entregas quinzenais e um ponto de contato fixo. Depois da implantação, treinamos o time e acompanhamos o uso até a equipe conduzir a operação com autonomia."
          }
        },
        {
          "@type": "Question",
          "name": "Dá para financiar o projeto com recursos de incentivo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na maioria dos casos, sim. Lei do Bem, FINEP e FAPEMIG existem para financiar modernização e inovação. Avaliamos o enquadramento da empresa e cuidamos da estruturação técnica, da documentação e da prestação de contas."
          }
        },
        {
          "@type": "Question",
          "name": "A Origami Lab atende presencialmente?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. A base é em Formiga, Minas Gerais, e o time entra na operação dos clientes onde quer que ela esteja, em Minas e em outros estados. Nas etapas que pedem presença, a equipe vai até a empresa."
          }
        },
        {
          "@type": "Question",
          "name": "De quem é o código e os dados do projeto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do cliente. O que é construído para a empresa é da empresa, com o código entregue e documentado. Os dados permanecem sob a titularidade do cliente, em ambiente de nuvem contratado por ele. A Origami Lab é credenciada AWS."
          }
        }
      ]
    }
  ]
};

export default function PaginaInicio() {
  return (
    <>
      <Navegacao home faqNaPagina />
      <div className="ol-root" id="conteudo">
        {/* ==================== Hero (fica preso; o conteúdo passa por cima) ==================== */}
        <section className="ol-hero" id="topo" data-hero="">
          <video className="ol-hero__video" src="assets/hero-bg.webm" poster="assets/hero-poster.webp" data-bg-video="" data-hero-video="" autoPlay loop muted playsInline preload="none" aria-hidden="true" tabIndex={-1} />
          <div className="ol-hero__scrim" aria-hidden="true" />
          <div className="ol-hero__fade" aria-hidden="true" />
          <div className="ol-hero__content" data-hero-content="">
            <h1 className="ol-hero__title" data-anim="" data-d="1">
              {"Tecnologia para modernizar a "}
              <em className="ol-em">operação industrial</em>
              .
            </h1>
            <p className="ol-hero__lead" data-anim="" data-d="2">Software sob medida, integração com ERP e automação de processos, do diagnóstico à implantação.</p>
            <div className="ol-hero__actions" data-anim="" data-d="3">
              <a className="ol-btn ol-btn--primary" data-magnet="" href="/conversar">
                {"Solicitar conversa "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="https://wa.me/553198055189?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20a%20opera%C3%A7%C3%A3o%20da%20minha%20empresa." target="_blank" rel="noopener">Falar no WhatsApp</a>
            </div>
          </div>
          <div className="ol-hero__cue" data-hero-cue="" aria-hidden="true">
            <b>Role</b>
            {" "}
            <i />
          </div>
        </section>
        <div className="ol-over">
          {/* ==================== Marquee de clientes ==================== */}
          <section className="ol-marquee" aria-label="Clientes atendidos">
            <div className="ol-marquee__wrap">
              <ul className="ol-marquee__row" data-mq-row="">
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img src="assets/clients/tecno2000.png" alt="Tecno 2000" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Mobiliário corporativo</span>
                </li>
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img src="assets/clients/prumo.webp" alt="Prumo Engenharia" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Engenharia e manutenção</span>
                </li>
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img src="assets/clients/retifica.jpg" alt="Retífica Formiguense" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Retífica e usinagem</span>
                </li>
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img src="assets/clients/cabral.png" alt="Transportadora Cabral" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Transporte e logística</span>
                </li>
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img src="assets/clients/bry.png" alt="Bry" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Tecnologia</span>
                </li>
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img src="assets/clients/sebrae.svg" alt="Sebrae" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Programas de inovação</span>
                </li>
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img src="assets/clients/syngular.png" alt="Syngular ID" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Identidade digital</span>
                </li>
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img src="assets/clients/avante.png" alt="Avante" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Tecnologia</span>
                </li>
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img className="is-rounded" src="assets/clients/sindinova.png" alt="Sindinova" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Sindicato · polo calçadista</span>
                </li>
                <li className="ol-marquee__item">
                  <div className="ol-marquee__logo">
                    <img className="is-rounded" src="assets/clients/integrar.jpg" alt="Integrar Clínica" loading="lazy" decoding="async" />
                  </div>
                  <span className="ol-marquee__label">Saúde</span>
                </li>
              </ul>
              <div className="ol-marquee__mask ol-marquee__mask--l" aria-hidden="true" />
              <div className="ol-marquee__mask ol-marquee__mask--r" aria-hidden="true" />
            </div>
          </section>
          {/* ==================== Serviços ==================== */}
          <section className="ol-services" id="servicos">
            <div className="ol-services__head">
              <h2 className="ol-h2 ol-h2--wide ol-h2--ink" data-anim="">Soluções para aumentar a eficiência da sua operação e reduzir custo</h2>
              <a className="ol-inline-link" data-anim="" data-d="1" href="/conversar">
                {"Falar com um especialista "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="ol-services__stack">
              {/* 01 Studio de Produto */}
              <article className="ol-stack" data-stack="">
                <div className="ol-stack__card" data-spot="">
                  <div className="ol-stack__spot" aria-hidden="true" />
                  <div className="ol-stack__body">
                    <div className="ol-stack__kicker">
                      <span className="ol-stack__num" aria-hidden="true">01</span>
                      {" "}
                      <span className="ol-stack__rule" aria-hidden="true" />
                    </div>
                    <h3 className="ol-stack__title">Studio de Produto</h3>
                    <p className="ol-stack__lead">O software que a sua operação precisa quando nenhum sistema pronto resolve, integrado ao ERP e implantado por nós.</p>
                    <ul className="ol-stack__list">
                      <li>Primeira versão em uso em até 1 mês</li>
                      <li>Fases com ganho medido</li>
                      <li>Gestão da operação em tempo real</li>
                      <li>Documentado como P&amp;D desde o início</li>
                    </ul>
                    <a className="ol-inline-link" href="/desenvolvimento-de-software" aria-label="Como funciona o Studio de Produto">
                      {"Como funciona "}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="ol-mock" role="img" aria-label="Exemplo de painel da operação em tempo real: 42 ordens em andamento, 94% no prazo, 3 atrasadas; usinagem e montagem no prazo, expedição em atenção.">
                    <div className="ol-mock__head">
                      <span className="ol-mock__tag">Painel da operação</span>
                      {" "}
                      <span className="ol-mock__live">
                        <i />
                        tempo real
                      </span>
                    </div>
                    <div className="ol-mock__stats">
                      <div className="ol-mock__stat">
                        <b>42</b>
                        <span>Em andamento</span>
                      </div>
                      <div className="ol-mock__stat ol-mock__stat--ok">
                        <b>94%</b>
                        <span>No prazo</span>
                      </div>
                      <div className="ol-mock__stat">
                        <b>3</b>
                        <span>Atrasadas</span>
                      </div>
                    </div>
                    <div>
                      <div className="ol-mock__row">
                        <div>
                          <h4>Usinagem</h4>
                          <p>Turno A</p>
                        </div>
                        <span className="ol-mock__state">no prazo</span>
                        {" "}
                        <span className="ol-mock__bar">
                          <span className="ol-mock__fill" data-grow="" data-w="86%" data-delay="0" />
                        </span>
                      </div>
                      <div className="ol-mock__row">
                        <div>
                          <h4>Montagem</h4>
                          <p>Turno B</p>
                        </div>
                        <span className="ol-mock__state">no prazo</span>
                        {" "}
                        <span className="ol-mock__bar">
                          <span className="ol-mock__fill" data-grow="" data-w="61%" data-delay="150" />
                        </span>
                      </div>
                      <div className="ol-mock__row">
                        <div>
                          <h4>Expedição</h4>
                          <p>Carregamento</p>
                        </div>
                        <span className="ol-mock__state ol-mock__state--warn">atenção</span>
                        {" "}
                        <span className="ol-mock__bar">
                          <span className="ol-mock__fill ol-mock__fill--warn" data-grow="" data-w="38%" data-delay="300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              {/* 02 Consultoria estratégica */}
              <article className="ol-stack" data-stack="">
                <div className="ol-stack__card" data-spot="">
                  <div className="ol-stack__spot" aria-hidden="true" />
                  <div className="ol-stack__body">
                    <div className="ol-stack__kicker">
                      <span className="ol-stack__num" aria-hidden="true">02</span>
                      {" "}
                      <span className="ol-stack__rule" aria-hidden="true" />
                    </div>
                    <h3 className="ol-stack__title">Consultoria estratégica</h3>
                    <p className="ol-stack__lead">Estratégia de produto, gestão de portfólio, treinamentos e programas de inovação in-company.</p>
                    <ul className="ol-stack__list">
                      <li>Produto alinhado à estratégia</li>
                      <li>Projetos com ROI claro</li>
                      <li>Avaliação de maturidade digital</li>
                      <li>Equipe capacitada em inovação</li>
                    </ul>
                    <a className="ol-inline-link" href="/consultoria-estrategica" aria-label="Como funciona a consultoria estratégica">
                      {"Como funciona "}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="ol-mock" role="img" aria-label="Matriz de priorização por impacto e esforço, com a iniciativa de maior impacto e menor esforço marcada como 'faça primeiro'.">
                    <div className="ol-mock__head">
                      <span className="ol-mock__tag">Priorização</span>
                      {" "}
                      <span className="ol-mock__tag">Impacto × esforço</span>
                    </div>
                    <div className="ol-matrix" aria-hidden="true">
                      <i style={{ "left": "16%", "top": "64%", "width": "12px", "height": "12px" }} />
                      {" "}
                      <i className="is-mid" style={{ "left": "36%", "top": "44%", "width": "14px", "height": "14px" }} />
                      {" "}
                      <i style={{ "left": "24%", "top": "24%", "width": "10px", "height": "10px" }} />
                      {" "}
                      <i className="is-pick" style={{ "left": "66%", "top": "22%", "width": "22px", "height": "22px" }} />
                      {" "}
                      <i style={{ "left": "74%", "top": "60%", "width": "12px", "height": "12px" }} />
                      {" "}
                      <span className="ol-matrix__label">faça primeiro</span>
                    </div>
                  </div>
                </div>
              </article>
              {/* 03 Acesso a capital */}
              <article className="ol-stack" data-stack="">
                <div className="ol-stack__card" data-spot="">
                  <div className="ol-stack__spot" aria-hidden="true" />
                  <div className="ol-stack__body">
                    <div className="ol-stack__kicker">
                      <span className="ol-stack__num" aria-hidden="true">03</span>
                      {" "}
                      <span className="ol-stack__rule" aria-hidden="true" />
                    </div>
                    <h3 className="ol-stack__title">Acesso a capital</h3>
                    <p className="ol-stack__lead">Capital de incentivo à inovação e benefício fiscal, como Lei do Bem, Compete Minas, FINEP e FAPEMIG.</p>
                    <ul className="ol-stack__list">
                      <li>{"Benefício fiscal para P&D"}</li>
                      <li>Invista sem comprometer caixa</li>
                      <li>Financiamento não reembolsável</li>
                      <li>Juros subsidiados pelo governo</li>
                    </ul>
                    <a className="ol-inline-link" href="/acesso-a-capital" aria-label="Como funciona o acesso a capital">
                      {"Como funciona "}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="ol-mock">
                    <div className="ol-mock__head">
                      <span className="ol-mock__tag">Onde o capital vira resultado</span>
                    </div>
                    <ul className="ol-chips">
                      <li>Lei do Bem</li>
                      <li>Compete Minas</li>
                      <li>FINEP</li>
                      <li>FAPEMIG</li>
                    </ul>
                    <div className="ol-mock__split" aria-hidden="true">
                      <i />
                      {" "}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                      {" "}
                      <i />
                    </div>
                    <ul className="ol-outcomes">
                      <li className="ol-outcome" data-anim="" data-d="1">
                        <span aria-hidden="true">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19V5" />
                            <path d="m5 12 7-7 7 7" />
                          </svg>
                        </span>
                        <div>
                          <h4>Aumento de produtividade</h4>
                          <p>Mais saída com a mesma estrutura</p>
                        </div>
                      </li>
                      <li className="ol-outcome" data-anim="" data-d="2">
                        <span aria-hidden="true">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                          </svg>
                        </span>
                        <div>
                          <h4>Redução de custos</h4>
                          <p>Menos retrabalho e hora extra</p>
                        </div>
                      </li>
                      <li className="ol-outcome" data-anim="" data-d="3">
                        <span aria-hidden="true">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 17 9 11l4 4 8-8" />
                            <path d="M21 7v6h-6" />
                          </svg>
                        </span>
                        <div>
                          <h4>Crescimento</h4>
                          <p>Operação que acompanha a demanda</p>
                        </div>
                      </li>
                      <li className="ol-outcome" data-anim="" data-d="4">
                        <span aria-hidden="true">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                        <div>
                          <h4>Inovação</h4>
                          <p>Capacidade nova, não só manutenção</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* Studio de Produto por setor e soluções para indústria: links para as páginas de cada problema */}
            <div className="ol-sols" id="solucoes">
              <h3 className="ol-sols__title" data-anim="" id="studio-por-setor">Studio de Produto por setor</h3>
              <ul className="ol-sols__grid">
                <li data-anim="" data-d="1">
                  <a href="/controle-de-manutencao-de-frota">
                    <b>Manutenção de frota</b>
                    <span>Preventiva, pneus e abastecimento sem caderno nem planilha solta.</span>
                  </a>
                </li>
                <li data-anim="" data-d="2">
                  <a href="/boletim-de-medicao">
                    <b>Boletim de medição</b>
                    <span>Do serviço executado ao faturamento, com a margem da obra no caminho.</span>
                  </a>
                </li>
                <li data-anim="" data-d="3">
                  <a href="/rdo-diario-de-obra">
                    <b>RDO: diário de obra</b>
                    <span>O registro do canteiro que vira prova, medição e custo.</span>
                  </a>
                </li>
                <li data-anim="" data-d="1">
                  <a href="/controle-de-expedicao-e-pesagem">
                    <b>Expedição e pesagem</b>
                    <span>Da balança ao faturamento, sem peso digitado à mão.</span>
                  </a>
                </li>
                <li data-anim="" data-d="2">
                  <a href="/registro-de-nao-conformidade">
                    <b>Não conformidade e rastreabilidade</b>
                    <span>RNC ligado à ordem e ao lote, com a causa tratada.</span>
                  </a>
                </li>
                <li data-anim="" data-d="3">
                  <a href="/pagamento-por-qualidade-do-leite">
                    <b>Recebimento e pagamento do leite</b>
                    <span>Qualidade, volume e bonificação que o produtor consegue conferir.</span>
                  </a>
                </li>
              </ul>
              <h3 className="ol-sols__title ol-sols__title--next" data-anim="">Soluções para indústria</h3>
              <ul className="ol-sols__grid">
                <li data-anim="" data-d="1">
                  <a href="/planejamento-de-producao">
                    <b>Planejamento da produção (PCP)</b>
                    <span>Pedido, capacidade e programação num fluxo só.</span>
                  </a>
                </li>
                <li data-anim="" data-d="2">
                  <a href="/apontamento-de-producao">
                    <b>Apontamento de produção</b>
                    <span>Do papel ao dado confiável, no posto de trabalho.</span>
                  </a>
                </li>
                <li data-anim="" data-d="3">
                  <a href="/integracao-erp-chao-de-fabrica">
                    <b>Integração ERP e chão de fábrica</b>
                    <span>Conectar a produção ao ERP sem trocar o ERP.</span>
                  </a>
                </li>
                <li data-anim="" data-d="1">
                  <a href="/automacao-de-processos-industriais">
                    <b>Automação de processos</b>
                    <span>Fim da planilha paralela e da redigitação.</span>
                  </a>
                </li>
                <li data-anim="" data-d="2">
                  <a href="/gestao-industrial-em-tempo-real">
                    <b>Gestão industrial em tempo real</b>
                    <span>Indicadores e OEE que a diretoria confia.</span>
                  </a>
                </li>
                <li data-anim="" data-d="3">
                  <a href="/tecnologia-para-industrias-minas-gerais">
                    <b>Indústrias de Minas Gerais</b>
                    <span>Cal e calcário, siderurgia, calçados e manufatura.</span>
                  </a>
                </li>
              </ul>
              <h3 className="ol-sols__title ol-sols__title--next" data-anim="" id="ferramentas">Ferramentas grátis e guias</h3>
              <ul className="ol-sols__grid">
                <li data-anim="" data-d="1">
                  <a href="/diagnostico-de-modernizacao">
                    <b>Diagnóstico de modernização</b>
                    <span>As três prioridades da sua operação, em poucos minutos.</span>
                  </a>
                </li>
                <li data-anim="" data-d="2">
                  <a href="/calculadora-de-oee">
                    <b>Calculadora de OEE</b>
                    <span>Quanto da capacidade a sua linha perde, em minutos e em peças.</span>
                  </a>
                </li>
                <li data-anim="" data-d="3">
                  <a href="/simulador-lei-do-bem">
                    <b>Simulador da Lei do Bem</b>
                    <span>Se a empresa pode usar o incentivo e quanto ele representa.</span>
                  </a>
                </li>
                <li data-anim="" data-d="1">
                  <a href="/fomento-a-inovacao">
                    <b>Qual fomento serve</b>
                    <span>FINEP, BNDES, EMBRAPII ou Lei do Bem: o caminho para o seu projeto.</span>
                  </a>
                </li>
                <li data-anim="" data-d="2">
                  <a href="/calculadora-reforma-tributaria">
                    <b>Calculadora da reforma tributária</b>
                    <span>CBS e IBS de uma venda, pela calculadora oficial da Receita.</span>
                  </a>
                </li>
                <li data-anim="" data-d="2">
                  <a href="/modernizacao-de-sistemas-legados">
                    <b>Modernização de sistemas legados</b>
                    <span>Sair do sistema que só uma pessoa entende, sem parar a operação.</span>
                  </a>
                </li>
                <li data-anim="" data-d="3">
                  <a href="/ia-na-industria">
                    <b>IA na indústria</b>
                    <span>Onde a IA já ajuda a operação e onde ainda é cedo.</span>
                  </a>
                </li>
                <li data-anim="" data-d="1">
                  <a href="/finep">
                    <b>FINEP: como funciona</b>
                    <span>Crédito, Inovacred e subvenção: quem pode pedir e como.</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          {/* ==================== Como trabalhamos (trilha horizontal) ==================== */}
          <section className="ol-hpin" id="como">
            <div className="ol-hpin__vp">
              <div className="ol-hpin__head">
                <h2 className="ol-h2">Como a Origami Lab trabalha</h2>
                <div className="ol-hpin__nav" data-rail-nav="" hidden>
                  <button className="ol-hpin__arrow" type="button" data-rail-prev="" aria-label="Ver fase anterior" aria-controls="como-trilha">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 12H5" />
                      <path d="m12 19-7-7 7-7" />
                    </svg>
                  </button>
                  {" "}
                  <button className="ol-hpin__arrow" type="button" data-rail-next="" aria-label="Ver próxima fase" aria-controls="como-trilha">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <ol className="ol-hpin__rail" id="como-trilha" tabIndex={0} data-hpin-rail="">
                <li className="ol-hpanel">
                  <span className="ol-hpanel__num" aria-hidden="true">01</span>
                  <h3>Diagnóstico</h3>
                  <p>
                    Entendemos os seus objetivos estratégicos e mapeamos o fluxo da sua operação para entender a fundo como o negócio funciona e onde estão as oportunidades.
                  </p>
                </li>
                <li className="ol-hpanel">
                  <span className="ol-hpanel__num" aria-hidden="true">02</span>
                  <h3>Estratégia</h3>
                  <p>
                    Propomos o roadmap e a solução, priorizando o que traz mais resultado e de forma mais rápida, alinhado à estratégia corporativa do seu negócio.
                  </p>
                </li>
                <li className="ol-hpanel">
                  <span className="ol-hpanel__num" aria-hidden="true">03</span>
                  <h3>Execução</h3>
                  <p>
                    Criamos a solução em ciclos rápidos, com forte alinhamento entre os stakeholders e a primeira entrega implementada já no primeiro mês do projeto. A Origami implementa e treina todos os envolvidos.
                  </p>
                </li>
                <li className="ol-hpanel ol-hpanel--cta">
                  <p>
                    {"O primeiro passo é uma conversa de "}
                    <em className="ol-em">30 minutos</em>
                    {" sobre a sua operação."}
                  </p>
                  <a className="ol-btn ol-btn--primary" href="/conversar">
                    {"Solicitar conversa "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
          </section>
          {/* ==================== Galeria ==================== */}
          <section className="ol-gallery" data-galeria="" aria-label="A Origami Lab em campo">
            <div className="ol-gallery__head">
              <h2 className="ol-h2" data-anim="" data-d="1">Estamos onde a operação acontece</h2>
              <p data-anim="" data-d="2">Da sala de discovery ao chão de fábrica. Proximidade, para nós, não é discurso de site, é agenda.</p>
            </div>
            <div className="ol-gallery__deck">
              <div className="ol-drift" data-drift="">
                <figure className="ol-shot" data-zoom="">
                  <img src="assets/pitch-03.webp" alt="Equipe Origami em campo com a Prumo" loading="lazy" decoding="async" />
                  <figcaption>
                    <b>Prumo Engenharia</b>
                    <span>Implementação de software</span>
                  </figcaption>
                </figure>
                <figure className="ol-shot" data-zoom="">
                  <img src="assets/pitch-04.webp" alt="Visita técnica na Injepol" loading="lazy" decoding="async" />
                  <figcaption>
                    <b>Injepol</b>
                    <span>Visita técnica</span>
                  </figcaption>
                </figure>
                <figure className="ol-shot" data-zoom="">
                  <img src="assets/pitch-05.webp" alt="Discovery e estratégia de produto com a Bry" loading="lazy" decoding="async" />
                  <figcaption>
                    <b>Bry</b>
                    <span>Discovery e estratégia de produto</span>
                  </figcaption>
                </figure>
                <figure className="ol-shot" data-zoom="">
                  <img src="assets/pitch-07.webp" alt="Acompanhamento de uso do software na obra da Prumo" loading="lazy" decoding="async" />
                  <figcaption>
                    <b>Prumo Engenharia</b>
                    <span>Acompanhamento de uso</span>
                  </figcaption>
                </figure>
                <figure className="ol-shot" data-zoom="">
                  <img src="assets/pitch-08.webp" alt="Imersão no processo produtivo da Hayann" loading="lazy" decoding="async" />
                  <figcaption>
                    <b>Hayann</b>
                    <span>Imersão no processo</span>
                  </figcaption>
                </figure>
                <figure className="ol-shot" data-zoom="">
                  <img src="assets/pitch-06.webp" alt="Programa de inovação do Sebrae" loading="lazy" decoding="async" />
                  <figcaption>
                    <b>Sebrae</b>
                    <span>Programa de inovação</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          {/* ==================== Clientes ==================== */}
          <section className="ol-clients" id="clientes">
            <div className="ol-clients__inner">
              <h2 className="ol-h2 ol-h2--wide ol-h2--ink" data-anim="" data-d="1">Indústria, engenharia e serviços: operações reais, transformadas</h2>
              <ul className="ol-clients__grid">
                <li className="ol-client" data-anim="" data-d="1" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img src="assets/clients/tecno2000.png" alt="Tecno 2000" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Tecno 2000</b>
                      <span>Mobiliário corporativo</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Otimização de processo</b>
                    <p>80% de redução no tempo de planejamento de produção através de um software que centralizou o fluxo de pedidos.</p>
                  </div>
                </li>
                <li className="ol-client" data-anim="" data-d="2" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img src="assets/clients/prumo.webp" alt="Prumo Engenharia" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Prumo Engenharia</b>
                      <span>Engenharia e manutenção</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Gestão de obra em tempo real</b>
                    <p>O apontamento de campo foi 100% digitalizado: o que acontece na frente de serviço chega em tempo real à diretoria.</p>
                  </div>
                </li>
                <li className="ol-client" data-anim="" data-d="3" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img src="assets/clients/retifica.jpg" alt="Retífica Formiguense" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Retífica Formiguense</b>
                      <span>Retífica e usinagem</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Régua de cobrança</b>
                    <p>Lembretes de pagamento e cobranças automáticas via WhatsApp, garantindo pagamentos no tempo certo.</p>
                  </div>
                </li>
                <li className="ol-client" data-anim="" data-d="4" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img src="assets/clients/cabral.png" alt="Transportadora Cabral" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Transportadora Cabral</b>
                      <span>Transporte e logística</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Comunicação unificada</b>
                    <p>Uma plataforma que centraliza a relação e as demandas entre motoristas e backoffice pelo WhatsApp.</p>
                  </div>
                </li>
                <li className="ol-client" data-anim="" data-d="5" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img src="assets/clients/bry.png" alt="Bry" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Bry</b>
                      <span>Tecnologia</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Plataforma única de serviços</b>
                    <p>Plataforma que centraliza toda a jornada de serviços de confiança digital, que antes era descentralizada.</p>
                  </div>
                </li>
                <li className="ol-client" data-anim="" data-d="6" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img src="assets/clients/sebrae.svg" alt="Sebrae" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Sebrae</b>
                      <span>Programas de inovação</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Programa de inovação</b>
                    <p>Aceleração de startups em fase de incubação, mentorando desde a análise de mercado até o plano de lançamento.</p>
                  </div>
                </li>
                <li className="ol-client" data-anim="" data-d="7" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img src="assets/clients/syngular.png" alt="Syngular ID" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Syngular ID</b>
                      <span>Identidade digital</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Programa de inovação</b>
                    <p>Estratégia de posicionamento e ida ao mercado da nova plataforma de serviços voltados a certificação digital.</p>
                  </div>
                </li>
                <li className="ol-client" data-anim="" data-d="8" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img src="assets/clients/avante.png" alt="Avante" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Avante</b>
                      <span>Tecnologia</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Chatbot no CX</b>
                    <p>Chatbot que se integra ao sistema de atendimento e usa a base de conhecimento para tratar os tickets N1 da equipe.</p>
                  </div>
                </li>
                <li className="ol-client" data-anim="" data-d="9" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img className="is-rounded" src="assets/clients/sindinova.png" alt="Sindinova" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Sindinova</b>
                      <span>Sindicato · polo calçadista</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Clube de benefícios</b>
                    <p>
                      Plataforma completa de gestão e distribuição de benefícios para o ecossistema de clientes e funcionários do sindicato.
                    </p>
                  </div>
                </li>
                <li className="ol-client" data-anim="" data-d="10" tabIndex={0}>
                  <div className="ol-client__face">
                    <div className="ol-client__logo">
                      <img className="is-rounded" src="assets/clients/integrar.jpg" alt="Integrar Clínica" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <b>Integrar Clínica</b>
                      <span>Saúde</span>
                    </div>
                  </div>
                  <div className="ol-client__case">
                    <b>Capital para inovação</b>
                    <p>Acesso a capital de inovação para a criação de uma plataforma voltada à educação de crianças especiais.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* ==================== Quem somos ==================== */}
          <section className="ol-about" id="quem-somos">
            <div className="ol-about__glow" aria-hidden="true" />
            <div className="ol-about__inner">
              <div className="ol-sticky-col">
                <figure className="ol-about__figure" data-zoom="" data-zoom-amt="0.06">
                  <img src="assets/socios.webp" alt="Sócios e time da Origami Lab" width="1600" height="1067" loading="lazy" decoding="async" />
                </figure>
              </div>
              <div className="ol-about__body">
                <h2 className="ol-about__title" data-anim="" data-d="1">
                  {"O legado que você construiu "}
                  <em className="ol-em">em boas mãos</em>
                </h2>
                <p className="ol-about__lead" data-anim="" data-d="2">
                  Nossos sócios passaram anos dentro das maiores operações do país. Hoje estão dentro da sua, no chão de fábrica, ao lado de quem executa.
                </p>
                <p className="ol-about__fact" data-anim="" data-d="2">
                  A Origami Lab é uma empresa de tecnologia para indústria sediada em Formiga, Minas Gerais, especializada na modernização de operações industriais. Atua no desenvolvimento de software sob medida, na integração com ERPs, na automação de processos, na gestão da operação em tempo real, em inteligência artificial aplicada e na estruturação de projetos de inovação financiados por Lei do Bem, FINEP e FAPEMIG. Atende indústrias e empresas tradicionais em Minas Gerais e em outros estados, do diagnóstico da operação ao desenvolvimento, à implantação e ao treinamento da equipe.
                </p>
                <div>
                  <div className="ol-about__label" data-anim="" data-d="3">
                    <span>Onde essa experiência foi construída</span>
                    {" "}
                    <i aria-hidden="true" />
                  </div>
                  <ul className="ol-brands" data-anim="" data-d="4">
                    <li>Vale</li>
                    <li>AB InBev</li>
                    <li>Deloitte</li>
                    <li>Localiza</li>
                    <li>MRV</li>
                    <li>Inter</li>
                    <li>ESAB</li>
                    <li>Thoughtworks</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* ==================== FAQ ==================== */}
          <section className="ol-faq" id="faq">
            <div className="ol-faq__inner">
              <div className="ol-faq__aside ol-sticky-col">
                <h2 className="ol-h2 ol-h2--ink" data-anim="" data-d="1">Perguntas frequentes</h2>
                <p data-anim="" data-d="2">
                  {"Ficou alguma dúvida que não está aqui? "}
                  <a href="/conversar">Fale com a gente</a>
                  .
                </p>
              </div>
              <div className="ol-faq__list">
                <div className="ol-faq__item" data-faq="" data-anim="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-0">
                    <span>O que a Origami Lab faz?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-0" data-faq-body="">
                    <p>
                      A Origami Lab é uma empresa de tecnologia para indústria sediada em Formiga, Minas Gerais, especializada na modernização de operações industriais. Atua no desenvolvimento de software sob medida, na integração com ERPs, na automação de processos, na gestão da operação em tempo real, em inteligência artificial aplicada e na estruturação de projetos de inovação financiados por Lei do Bem, FINEP e FAPEMIG. Atende indústrias e empresas tradicionais em Minas Gerais e em outros estados, do diagnóstico da operação ao desenvolvimento, à implantação e ao treinamento da equipe.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="" data-anim="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-1">
                    <span>Como começa e quanto tempo leva?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-1" data-faq-body="">
                    <p>
                      O trabalho começa pelo diagnóstico: de 2 a 4 semanas dentro da sua operação, entendendo o processo como ele é hoje, no lugar onde ele acontece. Em seguida vem a estratégia, quando definimos junto com a diretoria o que move resultado primeiro. Depois a execução: software em produção já no primeiro mês e ciclos curtos daí em frente, com integração, treinamento do time e acompanhamento até a sua equipe conduzir a operação sem nós. O prazo total depende do escopo priorizado no diagnóstico.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="" data-anim="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-2">
                    <span>Como funciona a cobrança do projeto?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-2" data-faq-body="">
                    <p>
                      Cada projeto é dimensionado pelo seu escopo: não trabalhamos com pacote fechado de prateleira. O investimento é definido a partir do que a sua operação precisa e do retorno que aquilo destrava, e apresentado antes de qualquer etapa começar. Você aprova cada fase antes de ela ser iniciada.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="" data-anim="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-3">
                    <span>Vocês substituem o nosso ERP e os sistemas que já usamos?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-3" data-faq-body="">
                    <p>
                      Não. Trabalhamos integrados ao que já existe. Na maioria dos casos, o ERP continua sendo a base, e construímos em volta dele o que ele não cobre e conectamos os sistemas que hoje não conversam entre si.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="" data-anim="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-4">
                    <span>Precisamos ter uma equipe de TI?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-4" data-faq-body="">
                    <p>
                      Não é necessário. Quando existe, trabalhamos junto com ela; quando não existe, conduzimos a implantação e preparamos as pessoas da operação para usar e manter o que foi entregue.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="" data-anim="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-5">
                    <span>Como é o acompanhamento durante e depois da implantação?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-5" data-faq-body="">
                    <p>
                      Durante o projeto há entregas quinzenais e um ponto de contato fixo com você. Depois da implantação, treinamos o time e acompanhamos o uso até a sua equipe conduzir a operação com autonomia.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="" data-anim="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-6">
                    <span>Dá para financiar o projeto com recursos de incentivo?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-6" data-faq-body="">
                    <p>
                      Na maioria dos casos, sim. Lei do Bem, FINEP e FAPEMIG existem para financiar modernização e inovação. Avaliamos o enquadramento da sua empresa e cuidamos da estruturação técnica, da documentação e da prestação de contas.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="" data-anim="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-7">
                    <span>Vocês atendem presencialmente?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-7" data-faq-body="">
                    <p>
                      Sim. Somos de Formiga, Minas Gerais, e é de lá que operamos, mas estamos dentro da operação dos nossos clientes onde quer que ela esteja, em Minas e em outros estados. Nas etapas que pedem presença, a gente vai até a sua empresa.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="" data-anim="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-8">
                    <span>De quem é o código e os dados do projeto?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-8" data-faq-body="">
                    <p>
                      Seus. O que construímos para a sua empresa é da sua empresa, com o código entregue e documentado. Os dados permanecem sob a sua titularidade e ficam em ambiente de nuvem contratado por você. Somos credenciados AWS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ==================== Chamada final ==================== */}
          <section className="ol-cta" id="contato">
            <div className="ol-cta__glow" data-px="0.05" aria-hidden="true" />
            <div className="ol-cta__inner" data-scale-in="">
              <h2 className="ol-cta__title">
                {"Transformamos a sua empresa para que ela seja "}
                <em className="ol-em">à prova de futuro</em>
              </h2>
              <p className="ol-cta__lead">A primeira conversa dura 30 minutos e serve para uma coisa só: entender a sua necessidade.</p>
              <div className="ol-cta__actions">
                <a className="ol-btn ol-btn--primary ol-btn--lg" data-magnet="" href="/conversar">
                  {"Solicitar conversa de 30 minutos "}
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
          <Rodape home parallax />
        </div>
      </div>
      <PreloadDaFonteSerifada />
      <DadosEstruturados dados={DADOS_ESTRUTURADOS} />
      <ScriptsDaPagina scripts={["main"]} />
    </>
  );
}
