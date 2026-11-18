import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";

export const metadata: Metadata = {
  "title": {
    "absolute": "Tecnologia para indústrias de Minas Gerais | Origami Lab"
  },
  "description": "Software, integração com ERP e automação de processos para indústrias de Minas Gerais, a partir de Formiga: cal, siderurgia, fundição, calçados e manufatura.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/tecnologia-para-industrias-minas-gerais"
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
    "url": "https://www.origamilab.com.br/tecnologia-para-industrias-minas-gerais",
    "siteName": "Origami Lab",
    "title": "Tecnologia para indústrias de Minas Gerais",
    "description": "Software, integração com ERP e automação de processos para indústrias de Minas Gerais, a partir de Formiga: cal, siderurgia, fundição, calçados e manufatura.",
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
    "title": "Tecnologia para indústrias de Minas Gerais",
    "description": "Software, integração com ERP e automação de processos para indústrias de Minas Gerais, a partir de Formiga: cal, siderurgia, fundição, calçados e manufatura.",
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
      "@id": "https://www.origamilab.com.br/tecnologia-para-industrias-minas-gerais#webpage",
      "url": "https://www.origamilab.com.br/tecnologia-para-industrias-minas-gerais",
      "name": "Tecnologia para indústrias de Minas Gerais",
      "description": "Software, integração com ERP e automação de processos para indústrias de Minas Gerais, a partir de Formiga: cal, siderurgia, fundição, calçados e manufatura.",
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
        "@id": "https://www.origamilab.com.br/tecnologia-para-industrias-minas-gerais#breadcrumb"
      },
      "spatialCoverage": [
        {
          "@type": "Place",
          "name": "Formiga, Minas Gerais",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Centro-Oeste de Minas Gerais"
          }
        },
        {
          "@type": "Place",
          "name": "Arcos, Minas Gerais",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Centro-Oeste de Minas Gerais"
          }
        },
        {
          "@type": "Place",
          "name": "Pains, Minas Gerais",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Centro-Oeste de Minas Gerais"
          }
        },
        {
          "@type": "Place",
          "name": "Divinópolis, Minas Gerais",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Centro-Oeste de Minas Gerais"
          }
        },
        {
          "@type": "Place",
          "name": "Itaúna, Minas Gerais",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Centro-Oeste de Minas Gerais"
          }
        },
        {
          "@type": "Place",
          "name": "Nova Serrana, Minas Gerais",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Centro-Oeste de Minas Gerais"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Centro-Oeste de Minas Gerais"
        },
        {
          "@type": "State",
          "name": "Minas Gerais"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.origamilab.com.br/tecnologia-para-industrias-minas-gerais#breadcrumb",
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
          "name": "Tecnologia para indústrias de Minas Gerais",
          "item": "https://www.origamilab.com.br/tecnologia-para-industrias-minas-gerais"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.origamilab.com.br/tecnologia-para-industrias-minas-gerais#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "A Origami Lab atende indústrias fora de Formiga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. A Origami Lab tem base em Formiga, no Centro-Oeste de Minas Gerais, e atende indústrias de toda a região — Arcos, Pains, Divinópolis, Itaúna, Nova Serrana e cidades próximas —, além do restante de Minas e de outros estados. A sede define a logística das visitas, não o raio de atendimento."
          }
        },
        {
          "@type": "Question",
          "name": "Vocês vão até a fábrica?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, nas etapas que pedem presença. O diagnóstico é feito dentro da operação, de duas a quatro semanas; o desenho do processo é feito com quem executa; a implantação e o treinamento acontecem no local. Entre essas etapas, boa parte do desenvolvimento é feita à distância, com entregas curtas e revisão frequente."
          }
        },
        {
          "@type": "Question",
          "name": "Atendem fora de Minas Gerais?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. O modelo de trabalho é o mesmo para indústrias de outros estados: diagnóstico presencial, desenvolvimento em ciclos curtos, visitas nas etapas de desenho e implantação. Muda o planejamento das viagens, não a forma de trabalhar."
          }
        },
        {
          "@type": "Question",
          "name": "Vocês fazem automação industrial, como CLP e supervisório?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. A Origami Lab faz software, integração entre sistemas e automação de processos. Programação de CLP, supervisório e instrumentação é trabalho de integrador de automação. Quando o equipamento já disponibiliza o dado, o software pode lê-lo e levá-lo para a gestão; quando não disponibiliza, isso aparece no diagnóstico."
          }
        },
        {
          "@type": "Question",
          "name": "Preciso trocar o ERP da minha indústria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na maior parte dos casos, não. O ERP costuma cobrir bem fiscal, financeiro, estoque e faturamento; o que falta é a parte específica da operação — apontamento, PCP, balança, laudo, controle de facção. A Origami Lab constrói esse pedaço em volta do ERP e integra os dois pelo caminho que o fornecedor permitir: API, banco de dados ou arquivo."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo até ter algo funcionando?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O diagnóstico leva de duas a quatro semanas. Depois dele, a execução é feita em ciclos curtos, com software em produção já no primeiro mês. O prazo total depende do escopo priorizado no diagnóstico, do estado do cadastro e do que o ERP permite integrar."
          }
        },
        {
          "@type": "Question",
          "name": "Dá para financiar o projeto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Às vezes. Projetos com incerteza técnica real podem ter parte do investimento coberta por Lei do Bem, FINEP ou FAPEMIG. A Origami Lab avalia o enquadramento no início e estrutura esse caminho quando ele existe. Nem todo projeto se enquadra, e requisitos e prazos mudam entre exercícios."
          }
        }
      ]
    }
  ]
};

export default function PaginaTecnologiaParaIndustriasMinasGerais() {
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
              <span>Tecnologia para indústrias de Minas Gerais</span>
            </nav>
            <h1 className="ol-page__title">Tecnologia para indústrias de Minas Gerais</h1>
            <p className="ol-page__lead">
              {"A Origami Lab é uma empresa de tecnologia para indústria sediada em Formiga, no Centro-Oeste de Minas Gerais (endereço: R. Silviano Brandão, 156 - 2º andar, Centro, Formiga - MG, 35570-112). Desenvolve "}
              <strong>software sob medida</strong>
              {", integra "}
              <strong>ERP e chão de fábrica</strong>
              {" e automatiza processos que hoje dependem de papel, planilha e redigitação. Atende indústrias do Centro-Oeste mineiro — Formiga, Arcos, Pains, Divinópolis, Itaúna, Nova Serrana e região —, do restante de Minas e de outros estados. O trabalho começa com um diagnóstico de duas a quatro semanas dentro da operação e não substitui o ERP que a empresa já usa."}
            </p>
            <div className="ol-page__actions">
              <a className="ol-btn ol-btn--primary" href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">
                {"Falar sobre a operação da minha empresa "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="#faq">Ir para as perguntas</a>
            </div>
            <p className="ol-page__meta">Origami Lab · Formiga, Minas Gerais · Software, integração e automação de processos para indústria</p>
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
                    <a href="#formiga">A Origami Lab em Formiga</a>
                  </li>
                  <li>
                    <a href="#cal-calcario">Arcos, Pains e Formiga</a>
                  </li>
                  <li>
                    <a href="#siderurgia">Divinópolis e Itaúna</a>
                  </li>
                  <li>
                    <a href="#calcados">Nova Serrana</a>
                  </li>
                  <li>
                    <a href="#sob-encomenda">Manufatura sob encomenda</a>
                  </li>
                  <li>
                    <a href="#em-comum">O que as operações têm em comum</a>
                  </li>
                  <li>
                    <a href="#origami">Como a Origami Lab trabalha</a>
                  </li>
                  <li>
                    <a href="#faq">Perguntas frequentes</a>
                  </li>
                </ul>
              </aside>
              <article className="ol-prose">
                <p className="ol-prose__lead">
                  O Centro-Oeste de Minas não tem uma indústria. Tem várias, lado a lado: cal e calcário em Arcos e Pains, siderurgia e fundição em Divinópolis e Itaúna, calçados em Nova Serrana, manufatura sob encomenda espalhada pela região. Os produtos são diferentes. O problema de gestão costuma ser o mesmo.
                </p>
                <h2 id="formiga">A Origami Lab em Formiga e como atende a indústria mineira</h2>
                <p>
                  A Origami Lab tem base em Formiga. Daqui, o Centro-Oeste mineiro fica a uma distância que permite estar na fábrica do cliente quando o trabalho pede — e ele pede em momentos específicos: no diagnóstico, no desenho do processo com quem executa, na implantação e no treinamento. Entre essas etapas, boa parte do desenvolvimento é feita à distância, com entregas curtas e revisão frequente.
                </p>
                <p>
                  O mesmo modelo vale para o restante de Minas Gerais e para outros estados. A distância muda a logística das visitas, não a forma de trabalhar.
                </p>
                <p>
                  {"O que fazemos é software: sistemas para o que o ERP não cobre, integração entre sistemas que não conversam e automação de processos administrativos e de operação. O que "}
                  <strong>não</strong>
                  {" fazemos é automação de máquina — programação de CLP, supervisório, instrumentação. Esse é trabalho de integrador de automação. Quando o equipamento já disponibiliza o dado, o software pode lê-lo; quando não disponibiliza, o caminho é outro, e dizemos isso no diagnóstico."}
                </p>
                <h2 id="cal-calcario">Arcos, Pains e Formiga: cal, calcário e mineração</h2>
                <p>
                  A região de Arcos, Pains e Formiga é conhecida pela extração de calcário e pela produção de cal. É uma operação pesada, contínua e com margem sensível a custo de energia, manutenção e frete. Os pontos em que a gestão costuma perder informação são quase sempre os mesmos:
                </p>
                <div className="ol-key">
                  <div className="ol-key__title">Onde o dado se perde</div>
                  <ul>
                    <li>
                      <strong>Apontamento de produção.</strong>
                      {" O quanto cada forno, britador ou moinho produziu no turno, as paradas e o motivo delas ficam num caderno ou numa planilha preenchida no fim do dia. A diretoria vê o volume do mês, mas não sabe em que turno ele foi perdido."}
                    </li>
                    <li>
                      <strong>Balança e expedição.</strong>
                      {" O ticket da balança, o pedido e a nota fiscal vivem em lugares diferentes. Alguém confere um contra o outro e digita no ERP. Quando a fila de caminhões cresce, é exatamente essa conferência que atrasa."}
                    </li>
                    <li>
                      <strong>Logística de carregamento.</strong>
                      {" Qual caminhão carrega o quê, em que ordem e com qual produto costuma ser combinado por telefone e mensagem. A informação existe, mas não fica registrada em lugar nenhum."}
                    </li>
                    <li>
                      <strong>Manutenção de equipamentos.</strong>
                      {" Britadores, correias, fornos e pás carregadeiras param. Sem histórico por equipamento, a manutenção fica reativa, e o custo de uma parada não entra na conta de ninguém."}
                    </li>
                    <li>
                      <strong>Qualidade e laudos.</strong>
                      {" O cliente pede laudo da carga. O resultado do laboratório está numa planilha, o laudo é montado à mão e anexado depois."}
                    </li>
                    <li>
                      <strong>Rastreabilidade.</strong>
                      {" Quando um cliente reclama, a pergunta é de qual pilha, de qual lote, de qual dia saiu aquela carga. Responder leva horas, quando leva."}
                    </li>
                  </ul>
                </div>
                <p>
                  {"Nesse tipo de operação, o trabalho da Origami Lab seria fazer o dado nascer onde o fato acontece — no posto do operador, na balança, no laboratório — e chegar ao ERP sem redigitação. O ticket da balança vira informação de expedição e de faturamento; o resultado do laboratório vira laudo vinculado à carga; o apontamento do turno vira indicador no mesmo dia. A integração com o ERP segue o caminho que o fornecedor permitir: API, banco de dados ou arquivo, como descrito em "}
                  <a href="/integracao-de-sistemas">integração de sistemas</a>
                  .
                </p>
                <p>
                  {"A parte da comunicação com motoristas é um problema que conhecemos de perto. Na "}
                  <a href="/cases/transportadora-cabral">Transportadora Cabral</a>
                  , construímos uma central do motorista via WhatsApp, integrada ao sistema da transportadora, com checklists padronizados. O setor é outro; a lógica de tirar a combinação do telefone e registrá-la é a mesma.
                </p>
                <h2 id="siderurgia">Divinópolis e Itaúna: siderurgia, fundição e metalurgia</h2>
                <p>
                  Divinópolis e Itaúna formam um dos polos de siderurgia, fundição e metalurgia de Minas. São operações em que um erro de processo vira peça refugada, retrabalho ou lote inteiro devolvido — e em que a informação para evitar isso quase sempre existe, só que espalhada.
                </p>
                <ul>
                  <li>
                    <strong>PCP.</strong>
                    {" A programação da produção é feita numa planilha que só uma pessoa entende. Quando entra um pedido urgente, reprogramar exige refazer a planilha e avisar cada setor, um a um."}
                  </li>
                  <li>
                    <strong>Chão de fábrica.</strong>
                    {" A ordem de produção sai impressa, volta anotada e é digitada no fim do turno. O que aconteceu às dez da manhã chega à gerência no dia seguinte."}
                  </li>
                  <li>
                    <strong>OEE.</strong>
                    {" Disponibilidade, desempenho e qualidade de fornos, linhas de moldagem e centros de usinagem até podem ser calculados, mas com dado de véspera e apontamento incompleto. O número existe; ninguém confia nele o suficiente para decidir com base nele."}
                  </li>
                  <li>
                    <strong>Qualidade.</strong>
                    {" Análise química, ensaios e inspeção geram registros que ficam no laboratório. Ligar um defeito encontrado no cliente ao que aconteceu no processo depende de memória."}
                  </li>
                  <li>
                    <strong>Manutenção.</strong>
                    {" Fornos, refratários, pontes rolantes e máquinas de moldagem têm vida útil e histórico de falha. Sem esse histórico organizado, a parada não programada continua sendo surpresa."}
                  </li>
                  <li>
                    <strong>Rastreabilidade de corrida e lote.</strong>
                    {" Saber de qual corrida saiu uma peça, com qual carga de matéria-prima e em qual turno é o que protege a empresa numa reclamação. Em muita operação, essa ligação é feita no papel e não sobrevive a uma auditoria."}
                  </li>
                </ul>
                <p>
                  {"O que a Origami Lab costuma resolver nesse cenário é a camada entre a ordem de produção e o ERP: apontamento digital no posto, ligação entre ordem, corrida e lote, e indicadores de operação que a diretoria consegue ver no mesmo turno. O ERP continua cuidando de fiscal, estoque e financeiro. Os detalhes estão em "}
                  <a href="/apontamento-de-producao">apontamento de produção</a>
                  {" e "}
                  <a href="/integracao-erp-chao-de-fabrica">integração entre ERP e chão de fábrica</a>
                  .
                </p>
                <h2 id="calcados">Nova Serrana: o polo calçadista</h2>
                <p>
                  Nova Serrana é o principal polo calçadista de Minas Gerais. A produção é organizada por coleção, o prazo é curto e boa parte das etapas acontece fora da fábrica. Isso cria problemas de controle que o ERP genérico raramente cobre bem:
                </p>
                <ul>
                  <li>
                    <strong>Pedidos.</strong>
                    {" Pedidos chegam por representante, por lojista e por mensagem, cada um num formato. Consolidar o que foi vendido por modelo, cor e numeração costuma exigir uma planilha à parte."}
                  </li>
                  <li>
                    <strong>PCP por coleção e grade.</strong>
                    {" Um mesmo modelo vira dezenas de combinações de cor e numeração. Planejar corte, pesponto e montagem por grade, respeitando a data de entrega de cada pedido, é onde a planilha deixa de dar conta."}
                  </li>
                  <li>
                    <strong>Estoque.</strong>
                    {" Material, componente e produto acabado precisam ser controlados por grade. Estoque que não bate gera compra duplicada de um lado e pedido atrasado do outro."}
                  </li>
                  <li>
                    <strong>Terceirização de etapas.</strong>
                    {" Pesponto e outras etapas vão para facções. Saber quantos pares saíram, quantos voltaram, com qual prazo e quanto se deve a cada facção é, em muitas fábricas, controle de caderno."}
                  </li>
                  <li>
                    <strong>Fornecedores.</strong>
                    {" Solado, palmilha e componentes chegam de vários fornecedores, com prazos apertados. Um atraso num componente para uma linha inteira, e a fábrica descobre isso tarde."}
                  </li>
                </ul>
                <p>
                  {"Para uma fábrica de calçados, o trabalho seria conectar pedido, grade, ordem de produção e remessa para facção num fluxo só, com o ERP recebendo o que precisa para faturar. A "}
                  <strong>Sindinova</strong>
                  , sindicato do polo calçadista, é cliente da Origami Lab.
                </p>
                <h2 id="sob-encomenda">Manufatura sob encomenda: mobiliário, usinagem e retífica</h2>
                <p>
                  Além dos grandes polos, a região tem muitas indústrias que produzem sob encomenda: mobiliário, usinagem, retífica, peças e montagens especiais. Aqui cada pedido é diferente do anterior, e o gargalo quase nunca é a máquina. É o fluxo do pedido.
                </p>
                <p>
                  O orçamento é feito numa ferramenta, o pedido confirmado vai para outra, a engenharia detalha num arquivo próprio e a produção recebe uma ordem impressa. Quando o cliente liga perguntando pelo prazo, alguém precisa atravessar a fábrica para descobrir.
                </p>
                <p>
                  {"Esse é o terreno em que a Origami Lab tem mais resultado registrado. Na "}
                  <strong>Tecno 2000</strong>
                  {", de mobiliário corporativo, um software que centralizou o fluxo de pedidos levou a "}
                  <strong>80% de redução no tempo de planejamento de produção</strong>
                  {". Na "}
                  <strong>Retífica Formiguense</strong>
                  {", de retífica e usinagem, em Formiga, o problema não era produção, era recebimento: construímos uma "}
                  <a href="/cases/cobranca-automatica-whatsapp-retifica-formiguense">régua de cobrança automática via WhatsApp integrada ao ERP</a>
                  {". Os dois casos seguem a mesma lógica — o processo já existia, só não estava num lugar só. Mais sobre esse tipo de trabalho em "}
                  <a href="/planejamento-de-producao">planejamento de produção</a>
                  .
                </p>
                <h2 id="em-comum">O que essas operações têm em comum</h2>
                <p>Cal, aço, calçado e móvel parecem não ter nada a ver entre si. Do ponto de vista da gestão, repetem o mesmo padrão:</p>
                <div className="ol-tablewrap">
                  <table className="ol-table">
                    <thead>
                      <tr>
                        <th scope="col">Sintoma</th>
                        <th scope="col">Como aparece na fábrica</th>
                        <th scope="col">O que custa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">O dado nasce no papel</th>
                        <td>Apontamento em caderno, ordem impressa, ticket conferido à mão.</td>
                        <td>Uma pessoa redigitando e um erro de digitação em cada relatório.</td>
                      </tr>
                      <tr>
                        <th scope="row">O ERP não cobre a operação</th>
                        <td>O ERP resolve fiscal e financeiro; a produção vive numa planilha paralela.</td>
                        <td>Dois números para a mesma coisa e uma reunião para decidir qual vale.</td>
                      </tr>
                      <tr>
                        <th scope="row">A informação chega tarde</th>
                        <td>O turno de ontem aparece no relatório de hoje à tarde.</td>
                        <td>Decisão tomada sem dado, e margem que vaza sem aparecer na contabilidade.</td>
                      </tr>
                      <tr>
                        <th scope="row">O conhecimento está numa pessoa</th>
                        <td>Só um funcionário sabe programar a produção ou montar o laudo.</td>
                        <td>Férias, doença ou saída dessa pessoa param um processo inteiro.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  {"Nenhum desses problemas pede trocar o ERP. Pedem fazer o dado nascer uma vez, no lugar certo, e circular sem redigitação. É o que chamamos de "}
                  <a href="/automacao-de-processos-industriais">automação de processos industriais</a>
                  {" e de "}
                  <a href="/gestao-industrial-em-tempo-real">gestão industrial em tempo real</a>
                  . A tecnologia envolvida é conhecida — aplicativo no posto de trabalho, integração com ERP e balança, painel de indicadores. A parte difícil é entender o processo real antes de construir.
                </p>
                <h2 id="origami">Como a Origami Lab trabalha com indústrias da região</h2>
                <p>
                  Começamos pelo diagnóstico: de duas a quatro semanas dentro da operação, acompanhando o processo como ele é, não como está no fluxograma. Ao fim, a diretoria recebe um mapa de onde o dado para, o que priorizar e em que ordem.
                </p>
                <p>
                  Depois vem a execução em ciclos curtos, com software em produção já no primeiro mês e desenho feito junto com quem opera. Implantamos, treinamos a equipe e acompanhamos até ela conduzir sem nós. O código e os dados são do cliente. O ERP continua sendo o ERP.
                </p>
                <p>
                  Os sócios têm passagem por Vale, AB InBev, Deloitte, Localiza, MRV, Inter, ESAB e Thoughtworks. Isso ajuda a reconhecer padrões de operação grande. Não substitui conhecer a sua fábrica, e por isso o diagnóstico é feito lá dentro.
                </p>
                <p>
                  {"Quando o projeto tem incerteza técnica real, parte do investimento pode ser financiada por Lei do Bem, FINEP ou FAPEMIG. Estruturamos esse caminho em "}
                  <a href="/acesso-a-capital">acesso a capital</a>
                  . Nem todo projeto se enquadra, e isso também fica claro no começo.
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
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-tecnologia-industrias-mg-1">
                    <span>A Origami Lab atende indústrias fora de Formiga?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-tecnologia-industrias-mg-1" data-faq-body="">
                    <p>
                      Sim. A Origami Lab tem base em Formiga, no Centro-Oeste de Minas Gerais, e atende indústrias de toda a região — Arcos, Pains, Divinópolis, Itaúna, Nova Serrana e cidades próximas —, além do restante de Minas e de outros estados. A sede define a logística das visitas, não o raio de atendimento.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-tecnologia-industrias-mg-2">
                    <span>Vocês vão até a fábrica?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-tecnologia-industrias-mg-2" data-faq-body="">
                    <p>
                      Sim, nas etapas que pedem presença. O diagnóstico é feito dentro da operação, de duas a quatro semanas; o desenho do processo é feito com quem executa; a implantação e o treinamento acontecem no local. Entre essas etapas, boa parte do desenvolvimento é feita à distância, com entregas curtas e revisão frequente.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-tecnologia-industrias-mg-3">
                    <span>Atendem fora de Minas Gerais?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-tecnologia-industrias-mg-3" data-faq-body="">
                    <p>
                      Sim. O modelo de trabalho é o mesmo para indústrias de outros estados: diagnóstico presencial, desenvolvimento em ciclos curtos, visitas nas etapas de desenho e implantação. Muda o planejamento das viagens, não a forma de trabalhar.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-tecnologia-industrias-mg-4">
                    <span>Vocês fazem automação industrial, como CLP e supervisório?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-tecnologia-industrias-mg-4" data-faq-body="">
                    <p>
                      Não. A Origami Lab faz software, integração entre sistemas e automação de processos. Programação de CLP, supervisório e instrumentação é trabalho de integrador de automação. Quando o equipamento já disponibiliza o dado, o software pode lê-lo e levá-lo para a gestão; quando não disponibiliza, isso aparece no diagnóstico.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-tecnologia-industrias-mg-5">
                    <span>Preciso trocar o ERP da minha indústria?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-tecnologia-industrias-mg-5" data-faq-body="">
                    <p>
                      Na maior parte dos casos, não. O ERP costuma cobrir bem fiscal, financeiro, estoque e faturamento; o que falta é a parte específica da operação — apontamento, PCP, balança, laudo, controle de facção. A Origami Lab constrói esse pedaço em volta do ERP e integra os dois pelo caminho que o fornecedor permitir: API, banco de dados ou arquivo.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-tecnologia-industrias-mg-6">
                    <span>Quanto tempo até ter algo funcionando?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-tecnologia-industrias-mg-6" data-faq-body="">
                    <p>
                      O diagnóstico leva de duas a quatro semanas. Depois dele, a execução é feita em ciclos curtos, com software em produção já no primeiro mês. O prazo total depende do escopo priorizado no diagnóstico, do estado do cadastro e do que o ERP permite integrar.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-tecnologia-industrias-mg-7">
                    <span>Dá para financiar o projeto?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-tecnologia-industrias-mg-7" data-faq-body="">
                    <p>
                      Às vezes. Projetos com incerteza técnica real podem ter parte do investimento coberta por Lei do Bem, FINEP ou FAPEMIG. A Origami Lab avalia o enquadramento no início e estrutura esse caminho quando ele existe. Nem todo projeto se enquadra, e requisitos e prazos mudam entre exercícios.
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
                  <a className="ol-next__card" href="/apontamento-de-producao">
                    <b>Apontamento de produção</b>
                    <span>Como tirar o apontamento do caderno e fazer o dado do turno chegar à gestão no mesmo dia.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/integracao-erp-chao-de-fabrica">
                    <b>Integração entre ERP e chão de fábrica</b>
                    <span>Como ligar a ordem de produção ao ERP sem redigitação e sem trocar o sistema.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/automacao-de-processos-industriais">
                    <b>Automação de processos industriais</b>
                    <span>O fim da redigitação e das planilhas paralelas nos processos de operação.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/gestao-industrial-em-tempo-real">
                    <b>Gestão industrial em tempo real</b>
                    <span>Indicadores de operação que a diretoria vê no turno, não no relatório do dia seguinte.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/planejamento-de-producao">
                    <b>Planejamento de produção</b>
                    <span>PCP fora da planilha: programar, reprogramar e avisar a fábrica sem retrabalho.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/cases">
                    <b>Cases</b>
                    <span>Projetos da Origami Lab em indústria, engenharia, logística e serviços.</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="ol-cta" id="contato">
            <div className="ol-cta__glow" aria-hidden="true" />
            <div className="ol-cta__inner">
              <h2 className="ol-cta__title">
                {"A fábrica já sabe o que acontece. "}
                <em className="ol-em">A diretoria precisa saber no mesmo turno</em>
                .
              </h2>
              <p className="ol-cta__lead">
                A primeira conversa dura 30 minutos e serve para entender onde o dado da sua operação para. Se o caminho for simples, a gente diz — e às vezes é.
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
