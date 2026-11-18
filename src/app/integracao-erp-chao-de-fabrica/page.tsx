import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";

export const metadata: Metadata = {
  "title": {
    "absolute": "Integrar o chão de fábrica ao ERP sem trocar o ERP | Origami Lab"
  },
  "description": "O que o ERP faz bem, o que ele não cobre na produção e como ligar apontamento, paradas, qualidade e lote ao ERP sem trocá-lo e sem duplicar dado.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica"
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
    "url": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica",
    "siteName": "Origami Lab",
    "title": "Como integrar o chão de fábrica ao ERP sem trocar o ERP",
    "description": "O que o ERP faz bem, o que ele não cobre na produção e como ligar apontamento, paradas, qualidade e lote ao ERP sem trocá-lo e sem duplicar dado.",
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
    "title": "Como integrar o chão de fábrica ao ERP sem trocar o ERP",
    "description": "O que o ERP faz bem, o que ele não cobre na produção e como ligar apontamento, paradas, qualidade e lote ao ERP sem trocá-lo e sem duplicar dado.",
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
      "@id": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica#webpage",
      "url": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica",
      "name": "Como integrar o chão de fábrica ao ERP sem trocar o ERP",
      "description": "O que o ERP faz bem, o que ele não cobre na produção e como ligar apontamento, paradas, qualidade e lote ao ERP sem trocá-lo e sem duplicar dado.",
      "inLanguage": "pt-BR",
      "dateModified": "2026-09-29",
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "about": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "breadcrumb": {
        "@id": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica#breadcrumb",
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
          "name": "Soluções para indústria",
          "item": "https://www.origamilab.com.br/#solucoes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Integração do ERP com o chão de fábrica",
          "item": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Preciso trocar de ERP para integrar o chão de fábrica?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não, na maior parte dos casos. O ERP continua responsável pelo fiscal, pelo financeiro e pelo estoque contábil. O que falta na produção, como apontamento, sequenciamento, paradas, qualidade no posto e rastreabilidade de lote, é construído em uma camada ao lado dele, conectada por integração. Trocar de ERP para resolver a produção costuma ser caro, demorado e não garante que o chão de fábrica passe a ser atendido."
          }
        },
        {
          "@type": "Question",
          "name": "Funciona com TOTVS Protheus, Sankhya, Senior ou SAP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O desenho é o mesmo para qualquer ERP. O que muda é o caminho técnico, que depende do que o fornecedor libera na sua versão e no seu contrato: API, acesso ao banco ou troca de arquivos. Por isso a primeira etapa é confirmar o que o seu ERP, na configuração que você tem, permite. Isso é verificação, não suposição."
          }
        },
        {
          "@type": "Question",
          "name": "O meu ERP tem módulo de chão de fábrica. Por que não usar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Se ele cobre o seu processo e o time consegue usá-lo no posto, use. Muitas vezes o problema é configuração ou treinamento, e resolver isso no próprio ERP sai mais barato. A camada operacional faz sentido quando o processo é específico da sua fábrica, muda com frequência ou exige uma tela que funcione no ritmo da máquina."
          }
        },
        {
          "@type": "Question",
          "name": "Como evitar que o mesmo dado fique diferente em dois sistemas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definindo um dono para cada dado antes de começar. Cadastro de produto e estrutura são do ERP; sequência e apontamento são da operação. A camada operacional envia movimentos ao ERP, nunca sobrescreve saldo, e toda falha de envio gera um aviso para uma pessoa nomeada, com reenvio que não duplica a produção."
          }
        },
        {
          "@type": "Question",
          "name": "Precisa ligar nas máquinas para começar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. O apontamento feito pelo operador no posto, na hora em que a operação acontece, já fecha a maior parte do vão entre a produção e o ERP. Leitura automática de máquina é outro tipo de projeto, com outro tipo de fornecedor, e não é pré-requisito para tirar a produção da planilha."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva para ter algo funcionando?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O trabalho começa com um diagnóstico de duas a quatro semanas dentro da operação. Depois disso, o primeiro software entra em produção já no primeiro mês de execução, normalmente em uma linha ou um setor. O prazo total depende de quantas linhas entram, do estado do cadastro e do caminho de integração que o seu ERP permite."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica#service",
      "name": "Integração do ERP com o chão de fábrica",
      "description": "Camada operacional em volta do ERP para apontamento, sequenciamento, paradas, qualidade no posto e rastreabilidade de lote, integrada ao ERP existente, que continua como fonte da verdade fiscal e financeira.",
      "serviceType": "Integração de ERP com a produção industrial",
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
      "url": "https://www.origamilab.com.br/integracao-erp-chao-de-fabrica"
    }
  ]
};

export default function PaginaIntegracaoErpChaoDeFabrica() {
  return (
    <>
      <Navegacao faqNaPagina />
      <div className="ol-root" id="conteudo">
        {/* ==================== Abertura ==================== */}
        <header className="ol-page__hero">
          <div className="ol-page__glow" aria-hidden="true" />
          <div className="ol-page__inner">
            <nav className="ol-crumb" aria-label="Você está em">
              <a href="/">Início</a>
              {" "}
              <span aria-hidden="true">/</span>
              {" "}
              <a href="/#solucoes">Soluções para indústria</a>
              {" "}
              <span aria-hidden="true">/</span>
              {" "}
              <span>Integração do ERP com o chão de fábrica</span>
            </nav>
            <h1 className="ol-page__title">Como integrar o chão de fábrica ao ERP sem trocar o ERP</h1>
            <p className="ol-page__lead">
              {"Você integra o chão de fábrica ao ERP construindo, em volta dele, uma camada operacional para o que ele não cobre: apontamento, sequenciamento, paradas, qualidade no posto e rastreabilidade de lote. Essa camada recebe do ERP as ordens e a estrutura de produto, registra o que acontece na produção no momento em que acontece e devolve ao ERP o consumo, a produção realizada e o refugo. O ERP continua sendo a "}
              <strong>fonte da verdade fiscal e financeira</strong>
              ; ninguém troca de sistema e ninguém redigita no fim do turno.
            </p>
            <div className="ol-page__actions">
              <a className="ol-btn ol-btn--primary" href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">
                {"Falar sobre a produção da minha fábrica "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="#faq">Ir para as perguntas</a>
            </div>
            <p className="ol-page__meta">Origami Lab · Formiga, Minas Gerais · Software e integração para indústria</p>
          </div>
        </header>
        <div className="ol-over">
          {/* ==================== Conteúdo ==================== */}
          <section className="ol-doc">
            <div className="ol-doc__inner">
              <aside className="ol-toc">
                <div className="ol-toc__title">Nesta página</div>
                <ul className="ol-toc__list">
                  <li>
                    <a href="#erp-faz-bem">O que o ERP faz bem</a>
                  </li>
                  <li>
                    <a href="#fora-do-erp">O que fica fora dele</a>
                  </li>
                  <li>
                    <a href="#vao">O vão e a planilha</a>
                  </li>
                  <li>
                    <a href="#camada-operacional">Uma camada em volta do ERP</a>
                  </li>
                  <li>
                    <a href="#sobe-e-desce">O que sobe e o que desce</a>
                  </li>
                  <li>
                    <a href="#customizar">Quando customizar o ERP é melhor</a>
                  </li>
                  <li>
                    <a href="#riscos">Os riscos</a>
                  </li>
                  <li>
                    <a href="#comecar">Por onde começar</a>
                  </li>
                  <li>
                    <a href="#origami">Como a Origami trabalha</a>
                  </li>
                  <li>
                    <a href="#faq">Perguntas frequentes</a>
                  </li>
                </ul>
              </aside>
              <article className="ol-prose">
                <p className="ol-prose__lead">
                  Quase toda indústria com ERP tem uma segunda operação rodando fora dele: o quadro de programação, a folha de apontamento, a planilha de paradas. Ela não aparece em nenhum relatório oficial, mas é nela que a produção é decidida.
                </p>
                <h2 id="erp-faz-bem">O que o ERP faz bem</h2>
                <p>TOTVS Protheus, Sankhya, Senior, SAP e os demais ERPs do mercado resolvem bem o que é igual em toda empresa:</p>
                <ul>
                  <li>
                    <strong>Fiscal.</strong>
                    {" Nota, apuração de impostos, obrigações acessórias. Muda com a legislação; ninguém quer manter isso por conta própria."}
                  </li>
                  <li>
                    <strong>Financeiro.</strong>
                    {" Contas a pagar e a receber, fluxo de caixa, conciliação."}
                  </li>
                  <li>
                    <strong>Estoque contábil e custo.</strong>
                    {" Saldo valorizado, movimentação, custo médio, fechamento do mês."}
                  </li>
                  <li>
                    <strong>Compras e faturamento.</strong>
                    {" Pedido, recebimento, expedição, nota de saída."}
                  </li>
                </ul>
                <p>Nessas áreas, o ERP continua mandando. Tirar dele o papel de registro oficial cria mais problema do que resolve.</p>
                <h2 id="fora-do-erp">O que fica fora dele na produção</h2>
                <p>
                  A produção é onde cada indústria é diferente. Muitas vezes o ERP tem um módulo de chão de fábrica, mas ele não chega ao posto, ou chega de um jeito que o operador não usa no ritmo da máquina. O que mais escapa:
                </p>
                <div className="ol-key">
                  <div className="ol-key__title">O que costuma viver fora do ERP</div>
                  <ul>
                    <li>
                      <strong>Apontamento.</strong>
                      {" Início, fim, quantidade boa e quantidade perdida de cada operação, registrados por quem fez."}
                    </li>
                    <li>
                      <strong>Sequenciamento.</strong>
                      {" A ordem real em que as ordens entram em cada máquina, que muda ao longo do dia por setup, falta de material ou pedido urgente."}
                    </li>
                    <li>
                      <strong>Paradas.</strong>
                      {" Quando parou, por quanto tempo e por quê. Sem motivo registrado, a parada vira só um número baixo no fim do mês."}
                    </li>
                    <li>
                      <strong>Qualidade no posto.</strong>
                      {" Inspeção, medição e liberação feitas ao lado da máquina, não no laboratório no dia seguinte."}
                    </li>
                    <li>
                      <strong>Rastreabilidade de lote.</strong>
                      {" Qual lote de matéria-prima entrou em qual lote de produto, em qual máquina, com qual operador."}
                    </li>
                  </ul>
                </div>
                <p>Nada disso é falha do ERP. É o limite de um sistema que precisa servir a milhares de empresas ao mesmo tempo.</p>
                <h2 id="vao">O vão entre o ERP e a produção</h2>
                <p>
                  Entre a ordem que sai do ERP e a nota que sai da expedição existe um vão. É ali que a planilha nasce. Não por descuido: alguém precisava programar a semana e o ERP não deixava mover uma ordem de máquina com facilidade. Alguém precisava saber por que a linha parou, e não havia campo para isso.
                </p>
                <p>
                  {"O resultado é conhecido. O apontamento é feito em papel e redigitado no dia seguinte. O estoque em processo no ERP não bate com o chão. O custo da ordem sai do consumo padrão, não do real. E \"quanto produzimos ontem, e com qual perda?\" tem três respostas, dependendo de quem responde."}
                </p>
                <p>O custo não está na planilha em si. Está na decisão que é tomada com um dado de ontem, ou com um dado errado.</p>
                <h2 id="camada-operacional">Uma camada operacional em volta do ERP</h2>
                <p>
                  {"A arquitetura que funciona tem duas partes com papéis claros. O ERP segue como registro oficial: fiscal, financeiro, estoque contábil, custo. Ao lado dele fica uma "}
                  <strong>camada operacional</strong>
                  , feita para o chão de fábrica: tela simples no posto, programação que o PCP consegue mexer, parada com motivo, inspeção na hora.
                </p>
                <p>
                  As duas conversam por integração, sem ninguém no meio digitando. A camada operacional não é um segundo ERP: não emite nota, não calcula imposto, não fecha o mês. Ela registra a produção no detalhe que a produção precisa e entrega ao ERP o resumo que ele precisa.
                </p>
                <p>
                  {"O caminho técnico dessa conversa (API, banco de dados, arquivo) depende do que o fornecedor do seu ERP libera. Esse detalhe está explicado em "}
                  <a href="/integracao-de-sistemas">integração de sistemas</a>
                  .
                </p>
                <h2 id="sobe-e-desce">O que sobe e o que desce</h2>
                <p>Desenhe a integração dado por dado: para onde ele viaja e quem é o dono. Um desenho típico:</p>
                <div className="ol-tablewrap">
                  <table className="ol-table">
                    <thead>
                      <tr>
                        <th scope="col">Dado</th>
                        <th scope="col">Direção</th>
                        <th scope="col">Dono</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Ordens de produção</th>
                        <td>Descem do ERP para a camada operacional, que decide a sequência em cada máquina.</td>
                        <td>ERP cria a ordem; a operação decide a sequência.</td>
                      </tr>
                      <tr>
                        <th scope="row">Estrutura de produto e roteiro</th>
                        <td>Descem do ERP. A camada operacional usa, não edita.</td>
                        <td>ERP (engenharia).</td>
                      </tr>
                      <tr>
                        <th scope="row">Consumo de material</th>
                        <td>Sobe da produção para o ERP, com o lote consumido.</td>
                        <td>Camada operacional registra; ERP baixa o estoque.</td>
                      </tr>
                      <tr>
                        <th scope="row">Produção realizada</th>
                        <td>Sobe para o ERP como apontamento de ordem, na quantidade boa.</td>
                        <td>Camada operacional.</td>
                      </tr>
                      <tr>
                        <th scope="row">Refugo e retrabalho</th>
                        <td>Sobe para o ERP em quantidade; o motivo fica na camada operacional.</td>
                        <td>Camada operacional.</td>
                      </tr>
                      <tr>
                        <th scope="row">Paradas e inspeções</th>
                        <td>Em geral não sobem. Ficam na camada operacional e alimentam os indicadores.</td>
                        <td>Camada operacional.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Nem todo dado da produção precisa ir para o ERP. Mandar para lá o que ele não sabe tratar só cria tabela que ninguém lê.</p>
                <h2 id="customizar">Quando customizar o próprio ERP é melhor</h2>
                <p>
                  Uma camada em volta do ERP nem sempre é a resposta. Às vezes customizar o ERP, com o fornecedor ou a consultoria que já o atende, é mais barato e mais simples:
                </p>
                <ul>
                  <li>
                    O módulo de produção do seu ERP já cobre o processo e o problema é de configuração ou de treinamento, não de falta de função.
                  </li>
                  <li>A necessidade é pequena e estável: um campo a mais, um relatório, uma regra de validação.</li>
                  <li>A equipe de TI já domina a customização desse ERP e sustenta o que ela gera.</li>
                </ul>
                <p>
                  A camada operacional faz sentido quando o processo é específico da sua fábrica, muda com frequência ou precisa de uma tela que funcione no posto, em pé, no ritmo da máquina. Ou quando cada customização passou a travar a atualização de versão. Se o seu caso é o primeiro, dizemos isso na primeira conversa.
                </p>
                <h2 id="riscos">Os riscos: dado duplicado e dono indefinido</h2>
                <p>O risco principal é o mesmo dado passar a existir em dois lugares, com dois valores. Três regras evitam isso:</p>
                <ol>
                  <li>
                    <strong>Cada dado tem um único dono.</strong>
                    {" Cadastro de produto é do ERP. Sequência da máquina é da operação. Se os dois podem editar o mesmo campo, a integração vai propagar divergência."}
                  </li>
                  <li>
                    <strong>O ERP nunca é corrigido por fora.</strong>
                    {" A camada operacional manda movimento, não sobrescreve saldo. Ajuste de estoque continua sendo feito no ERP, por quem responde por ele."}
                  </li>
                  <li>
                    <strong>Falha tem de aparecer.</strong>
                    {" Se um apontamento não subiu, alguém nomeado precisa saber no mesmo dia, e o reenvio não pode duplicar a produção."}
                  </li>
                </ol>
                <p>Quem decide essas regras é a produção, o PCP e a controladoria. Não o desenvolvedor.</p>
                <h2 id="comecar">Por onde começar</h2>
                <p>
                  {"Não pela fábrica inteira. Escolha "}
                  <strong>uma linha ou um setor</strong>
                  {" e um fluxo de ponta a ponta: a ordem desce do ERP, a operação é apontada no posto, consumo e produção realizada sobem de volta. Funcionando ali, o desenho está provado e as próximas linhas seguem o mesmo caminho."}
                </p>
                <p>
                  O critério para escolher: o setor onde a planilha paralela é maior e onde o número errado custa mais. Normalmente todo mundo na fábrica já sabe qual é.
                </p>
                <h2 id="origami">Como a Origami Lab trabalha isso</h2>
                <p>
                  Começamos com um diagnóstico de duas a quatro semanas dentro da operação, ao lado de quem aponta e de quem programa, mapeando onde o dado nasce, onde para e em qual planilha reaparece. Depois priorizamos com a diretoria e construímos em ciclos curtos, com software em produção já no primeiro mês. Não substituímos o ERP. O código e os dados são da sua empresa.
                </p>
                <p>
                  {"Na Tecno 2000, de mobiliário corporativo, um software que centralizou o fluxo de pedidos levou a 80% de redução no tempo de planejamento de produção. Na Retífica Formiguense, a "}
                  <a href="/cases/cobranca-automatica-whatsapp-retifica-formiguense">régua de cobrança via WhatsApp</a>
                  {" foi integrada ao ERP. Na Transportadora Cabral, a "}
                  <a href="/cases/transportadora-cabral">Central do Motorista</a>
                  {" foi integrada ao TripLog. Na Retífica e na Cabral, o sistema que já existia ficou."}
                </p>
              </article>
            </div>
          </section>
          {/* ==================== Perguntas ==================== */}
          <section className="ol-faq ol-faq--page" id="faq">
            <div className="ol-faq__inner">
              <div className="ol-faq__aside">
                <h2 className="ol-h2 ol-h2--ink">Perguntas frequentes</h2>
                <p>
                  {"Ficou alguma dúvida que não está aqui? "}
                  <a href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">Fale com a gente</a>
                  .
                </p>
              </div>
              <div className="ol-faq__list">
                <div className="ol-faq__item" data-faq="" data-faq-open="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-erp-chao-de-fabrica-1">
                    <span>Preciso trocar de ERP para integrar o chão de fábrica?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-erp-chao-de-fabrica-1" data-faq-body="">
                    <p>
                      Não, na maior parte dos casos. O ERP continua responsável pelo fiscal, pelo financeiro e pelo estoque contábil. O que falta na produção, como apontamento, sequenciamento, paradas, qualidade no posto e rastreabilidade de lote, é construído em uma camada ao lado dele, conectada por integração. Trocar de ERP para resolver a produção costuma ser caro, demorado e não garante que o chão de fábrica passe a ser atendido.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-erp-chao-de-fabrica-2">
                    <span>Funciona com TOTVS Protheus, Sankhya, Senior ou SAP?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-erp-chao-de-fabrica-2" data-faq-body="">
                    <p>
                      O desenho é o mesmo para qualquer ERP. O que muda é o caminho técnico, que depende do que o fornecedor libera na sua versão e no seu contrato: API, acesso ao banco ou troca de arquivos. Por isso a primeira etapa é confirmar o que o seu ERP, na configuração que você tem, permite. Isso é verificação, não suposição.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-erp-chao-de-fabrica-3">
                    <span>O meu ERP tem módulo de chão de fábrica. Por que não usar?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-erp-chao-de-fabrica-3" data-faq-body="">
                    <p>
                      Se ele cobre o seu processo e o time consegue usá-lo no posto, use. Muitas vezes o problema é configuração ou treinamento, e resolver isso no próprio ERP sai mais barato. A camada operacional faz sentido quando o processo é específico da sua fábrica, muda com frequência ou exige uma tela que funcione no ritmo da máquina.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-erp-chao-de-fabrica-4">
                    <span>Como evitar que o mesmo dado fique diferente em dois sistemas?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-erp-chao-de-fabrica-4" data-faq-body="">
                    <p>
                      Definindo um dono para cada dado antes de começar. Cadastro de produto e estrutura são do ERP; sequência e apontamento são da operação. A camada operacional envia movimentos ao ERP, nunca sobrescreve saldo, e toda falha de envio gera um aviso para uma pessoa nomeada, com reenvio que não duplica a produção.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-erp-chao-de-fabrica-5">
                    <span>Precisa ligar nas máquinas para começar?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-erp-chao-de-fabrica-5" data-faq-body="">
                    <p>
                      Não. O apontamento feito pelo operador no posto, na hora em que a operação acontece, já fecha a maior parte do vão entre a produção e o ERP. Leitura automática de máquina é outro tipo de projeto, com outro tipo de fornecedor, e não é pré-requisito para tirar a produção da planilha.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-erp-chao-de-fabrica-6">
                    <span>Quanto tempo leva para ter algo funcionando?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-erp-chao-de-fabrica-6" data-faq-body="">
                    <p>
                      O trabalho começa com um diagnóstico de duas a quatro semanas dentro da operação. Depois disso, o primeiro software entra em produção já no primeiro mês de execução, normalmente em uma linha ou um setor. O prazo total depende de quantas linhas entram, do estado do cadastro e do caminho de integração que o seu ERP permite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ==================== Leituras relacionadas ==================== */}
          <section className="ol-next" aria-labelledby="relacionadas">
            <div className="ol-next__inner">
              <h2 className="ol-next__title" id="relacionadas">Continuar por aqui</h2>
              <ul className="ol-next__grid">
                <li>
                  <a className="ol-next__card" href="/integracao-de-sistemas">
                    <b>Integração de sistemas</b>
                    <span>
                      Os quatro caminhos técnicos para conectar sistemas (API, banco, arquivo e automação de interface) e o que fazer com o legado.
                    </span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/apontamento-de-producao">
                    <b>Apontamento de produção</b>
                    <span>Como tirar o apontamento do papel e fazer o dado nascer no posto, na hora em que a operação acontece.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/software-sob-medida">
                    <b>Software sob medida</b>
                    <span>Quando o pronto resolve, quando o sob medida se paga e o que de fato define o custo de um projeto.</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="ol-cta" id="contato">
            <div className="ol-cta__glow" aria-hidden="true" />
            <div className="ol-cta__inner">
              <h2 className="ol-cta__title">
                {"O ERP fica. A produção sai da "}
                <em className="ol-em">planilha</em>
                .
              </h2>
              <p className="ol-cta__lead">
                A primeira conversa dura 30 minutos e serve para entender onde o dado da sua produção sai do ERP e em qual planilha ele reaparece. Se a resposta for configurar o próprio ERP, a gente diz.
              </p>
              <div className="ol-cta__actions">
                <a className="ol-btn ol-btn--primary ol-btn--lg" href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">
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
          <Rodape />
        </div>
      </div>
      <DadosEstruturados dados={DADOS_ESTRUTURADOS} />
      <ScriptsDaPagina scripts={["pagina"]} />
    </>
  );
}
