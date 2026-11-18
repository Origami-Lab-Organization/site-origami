import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";

export const metadata: Metadata = {
  "title": {
    "absolute": "Software para PCP na indústria sob encomenda | Origami Lab"
  },
  "description": "PCP preso a planilha e a uma pessoa? O que um sistema de planejamento e controle da produção precisa ter na indústria sob encomenda e como calcular o ROI.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/planejamento-de-producao"
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
    "url": "https://www.origamilab.com.br/planejamento-de-producao",
    "siteName": "Origami Lab",
    "title": "Software para PCP: planejamento e controle da produção na indústria",
    "description": "PCP preso a planilha e a uma pessoa? O que um sistema de planejamento e controle da produção precisa ter na indústria sob encomenda e como calcular o ROI.",
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
      "@id": "https://www.origamilab.com.br/planejamento-de-producao#webpage",
      "url": "https://www.origamilab.com.br/planejamento-de-producao",
      "name": "Software para planejamento e controle da produção (PCP) na indústria",
      "description": "PCP preso a planilha e a uma pessoa? O que um sistema de planejamento e controle da produção precisa ter na indústria sob encomenda e como calcular o ROI.",
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
        "@id": "https://www.origamilab.com.br/planejamento-de-producao#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.origamilab.com.br/planejamento-de-producao#breadcrumb",
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
          "name": "Planejamento de produção",
          "item": "https://www.origamilab.com.br/planejamento-de-producao"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.origamilab.com.br/planejamento-de-producao#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Preciso trocar o ERP para ter um sistema de PCP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. O ERP continua cuidando do fiscal, do financeiro, do estoque e do faturamento. O sistema de PCP é construído em volta dele, para a parte que ele não cobre — do pedido vendido à ordem na fábrica —, e os dois trocam dados por integração, sem ninguém redigitando."
          }
        },
        {
          "@type": "Question",
          "name": "O módulo de PCP do meu ERP não resolve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Às vezes resolve, e basta configurar, cadastrar roteiros e treinar quem usa. Vale verificar isso antes de qualquer projeto. Na indústria sob encomenda, o módulo padrão costuma esbarrar em produto que muda a cada pedido, em pedidos que ainda não entraram no ERP e na falta de apontamento confiável."
          }
        },
        {
          "@type": "Question",
          "name": "Dá para fazer PCP em planilha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dá, e muita indústria faz. O limite aparece quando o volume de pedidos cresce, quando a programação precisa ser refeita todo dia e quando só uma pessoa entende a planilha. A partir daí, a fábrica perde a memória do que foi prometido no dia em que essa pessoa falta."
          }
        },
        {
          "@type": "Question",
          "name": "Como calcular o ROI de um projeto de digitalização industrial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some quatro fontes de ganho mensal: horas economizadas multiplicadas pelo custo da hora, erro e retrabalho evitados, custos de atraso que deixam de acontecer e o custo financeiro do estoque e do material em processo que deixa de ficar parado. Desconte a manutenção mensal do sistema. Divida o custo do projeto por esse ganho líquido e você tem o payback em meses. Só conte como ganho o que tiver número confiável."
          }
        },
        {
          "@type": "Question",
          "name": "Serve para indústria moveleira e produção sob encomenda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. É o cenário em que um sistema próprio de PCP costuma fazer mais diferença, porque cada pedido tem configuração própria e o cadastro padrão do ERP não acompanha. Um exemplo é a Tecno 2000, indústria de mobiliário corporativo: 80% de redução no tempo de planejamento de produção através de um software que centralizou o fluxo de pedidos."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva até o sistema estar em uso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O trabalho começa com um diagnóstico de duas a quatro semanas dentro da operação. Depois disso, a Origami Lab coloca software em produção já no primeiro mês de construção e segue em ciclos curtos. O prazo total depende do número de setores, das integrações e do estado do cadastro."
          }
        },
        {
          "@type": "Question",
          "name": "Dá para financiar um projeto de PCP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Projetos de modernização com incerteza técnica podem ser financiados via Lei do Bem, FINEP ou FAPEMIG. A Origami Lab estrutura esse acesso a capital e só cobra se o capital for liberado. O enquadramento depende de cada projeto e deve ser confirmado com parecer contábil."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.origamilab.com.br/planejamento-de-producao#service",
      "name": "Software para planejamento e controle da produção (PCP)",
      "description": "Sistema de PCP para indústria sob encomenda: fluxo único do pedido, capacidade por setor, sequenciamento, visão de atrasos e retroalimentação pelo apontamento, integrado ao ERP.",
      "serviceType": "Software para planejamento e controle da produção",
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
      "url": "https://www.origamilab.com.br/planejamento-de-producao"
    }
  ]
};

export default function PaginaPlanejamentoDeProducao() {
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
              <span>Planejamento de produção</span>
            </nav>
            <h1 className="ol-page__title">Software para planejamento e controle da produção (PCP) na indústria</h1>
            <p className="ol-page__lead">
              Um software de PCP serve para tirar o planejamento da produção de dentro de uma planilha e da cabeça de uma pessoa. Na indústria que produz sob encomenda, isso significa três coisas: todo pedido entra por um único fluxo, a programação é feita olhando a capacidade real de cada setor, e o chão de fábrica devolve o que foi feito para o plano se corrigir sozinho. Não é preciso trocar o ERP para isso. O que costuma faltar é a camada entre o pedido vendido e a máquina — e é essa camada que se constrói e se conecta ao que já existe.
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
            <p className="ol-page__meta">Origami Lab · Formiga, Minas Gerais · Desenvolvimento e integração para indústria, engenharia e serviços</p>
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
                    <a href="#pessoa-e-planilha">Uma pessoa e uma planilha</a>
                  </li>
                  <li>
                    <a href="#modulo-erp">O módulo de PCP do ERP</a>
                  </li>
                  <li>
                    <a href="#o-que-precisa-ter">O que um sistema de PCP precisa ter</a>
                  </li>
                  <li>
                    <a href="#tecno-2000">O exemplo da Tecno 2000</a>
                  </li>
                  <li>
                    <a href="#roi">Como calcular o ROI</a>
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
                  Em muita indústria sob encomenda, o PCP funciona. Funciona porque existe uma pessoa que sabe tudo — e o problema começa no dia em que ela tira férias.
                </p>
                <h2 id="pessoa-e-planilha">O PCP que depende de uma pessoa e de uma planilha</h2>
                <p>
                  A planilha de PCP não é erro de ninguém. Ela nasceu porque o pedido precisava virar ordem e nenhum sistema fazia isso do jeito que a fábrica trabalha. Com o tempo, ganhou abas e fórmulas que só quem a mantém entende.
                </p>
                <p>Os sintomas são conhecidos por qualquer diretor industrial:</p>
                <div className="ol-key">
                  <div className="ol-key__title">Reconhecendo o problema</div>
                  <ul>
                    <li>
                      <strong>O pedido chega por vários canais.</strong>
                      {" Vendedor manda por WhatsApp, o representante por e-mail, o cliente liga, o comercial lança no ERP com atraso. O PCP descobre o pedido quando alguém lembra de avisar."}
                    </li>
                    <li>
                      <strong>A programação é refeita toda manhã.</strong>
                      {" Entrou um pedido urgente, faltou material, uma máquina parou. Alguém passa as primeiras horas do dia remontando a sequência à mão, e o plano de ontem vira rascunho."}
                    </li>
                    <li>
                      <strong>O prazo é prometido sem olhar a capacidade.</strong>
                      {" O comercial fecha a data que o cliente pediu. A fábrica só descobre que não cabe quando o pedido já está atrasado."}
                    </li>
                  </ul>
                </div>
                <p>
                  Há ainda um risco que não aparece em nenhum indicador: a dependência. Se a pessoa que programa a produção sai, adoece ou simplesmente falta um dia, a fábrica perde a memória do que estava prometido e por quê.
                </p>
                <h2 id="modulo-erp">O que o módulo de PCP do ERP costuma não resolver</h2>
                <p>
                  Antes de qualquer projeto, vale a pergunta honesta: o seu ERP já tem um módulo de PCP? Muitos têm. E às vezes ele resolve, e basta configurar direito, cadastrar roteiros e treinar quem usa. Quando é esse o caso, dizemos — construir software novo para um problema de configuração é desperdício.
                </p>
                <p>Na indústria sob encomenda, porém, o módulo padrão costuma esbarrar em três pontos:</p>
                <ul>
                  <li>
                    <strong>Ele supõe produto repetitivo.</strong>
                    {" Foi pensado para lista de materiais e roteiro estáveis. Quando cada pedido tem medida, acabamento ou configuração própria — caso típico da indústria moveleira e de mobiliário sob projeto —, manter o cadastro em dia vira um trabalho que ninguém faz."}
                  </li>
                  <li>
                    <strong>Ele começa tarde.</strong>
                    {" O módulo trabalha a partir da ordem já lançada. A confusão real está antes: no pedido que ainda não entrou, na alteração que o cliente pediu por telefone, na prioridade combinada numa conversa."}
                  </li>
                  <li>
                    <strong>Ele não recebe o que aconteceu na fábrica.</strong>
                    {" Sem apontamento confiável, o sistema planeja sobre um estado que não existe mais. O plano fica bonito e errado."}
                  </li>
                </ul>
                <p>É por isso que tanta empresa tem o módulo contratado e a planilha aberta ao lado.</p>
                <h2 id="o-que-precisa-ter">O que um sistema de PCP precisa ter</h2>
                <p>Não é uma lista de funcionalidades. É o mínimo para o planejamento deixar de depender de memória:</p>
                <div className="ol-key">
                  <div className="ol-key__title">O essencial</div>
                  <dl>
                    <dt>1. Fluxo único do pedido</dt>
                    <dd>
                      Todo pedido entra por um só lugar, com status visível para comercial, PCP e produção. Se ele não está ali, não existe para a fábrica.
                    </dd>
                    <dt>2. Capacidade por setor ou recurso</dt>
                    <dd>
                      Quantas horas cada setor, célula ou máquina tem por dia, e quanto já está comprometido. É o que permite responder se um prazo cabe antes de prometê-lo.
                    </dd>
                    <dt>3. Sequenciamento</dt>
                    <dd>
                      A ordem de execução com base em prazo, prioridade e restrição de recurso — ajustável por quem programa, porque sempre vai haver uma razão que o sistema não conhece.
                    </dd>
                    <dt>4. Visão do que atrasou e por quê</dt>
                    <dd>
                      Não basta saber que o pedido atrasou. É preciso registrar o motivo: falta de material, máquina parada, retrabalho, mudança do cliente. Sem o porquê, a reunião de produção discute opinião.
                    </dd>
                    <dt>5. Retroalimentação pelo apontamento</dt>
                    <dd>
                      {"O que foi produzido volta para o plano. Sem isso, o PCP não é controle, é só planejamento. O "}
                      <a href="/apontamento-de-producao">apontamento de produção</a>
                      {" é o que fecha esse ciclo."}
                    </dd>
                  </dl>
                </div>
                <h2 id="tecno-2000">O exemplo da Tecno 2000</h2>
                <p>
                  Tecno 2000, indústria de mobiliário corporativo: 80% de redução no tempo de planejamento de produção através de um software que centralizou o fluxo de pedidos.
                </p>
                <p>
                  Repare onde está o ganho, conforme descrito: na centralização do fluxo de pedidos. É o primeiro item da lista acima, e em indústria sob encomenda costuma ser o que mais consome tempo de quem planeja — juntar o que chegou de cada canal antes de conseguir programar qualquer coisa.
                </p>
                <p>
                  {"Outros projetos da Origami seguem a mesma lógica em processos diferentes: a "}
                  <a href="/cases/cobranca-automatica-whatsapp-retifica-formiguense">régua de cobrança da Retífica Formiguense</a>
                  {", integrada ao ERP, e a "}
                  <a href="/cases/transportadora-cabral">Central do Motorista da Transportadora Cabral</a>
                  . Nos dois, o sistema novo se integrou ao que já existia.
                </p>
                <h2 id="roi">Como calcular o ROI de um projeto de digitalização industrial</h2>
                <p>
                  O cálculo não é difícil. O difícil é ser honesto com os números. O método que usamos tem quatro fontes de retorno, um custo e uma pergunta final:
                </p>
                <ul>
                  <li>
                    <strong>Horas economizadas × custo da hora.</strong>
                    {" Quantas horas por mês o planejamento, a redigitação e a conferência consomem hoje, e quantas vão consumir depois. Só conte como ganho o tempo que será usado em outra coisa. Hora que sobra e ninguém ocupa não é retorno."}
                  </li>
                  <li>
                    <strong>Erro evitado.</strong>
                    {" Retrabalho, peça produzida errada, material comprado em dobro. Use o histórico dos últimos meses, não uma estimativa otimista."}
                  </li>
                  <li>
                    <strong>Prazo cumprido.</strong>
                    {" Multa contratual, frete urgente, pedido perdido por atraso. Quando não houver número confiável, deixe fora da conta e trate como ganho adicional."}
                  </li>
                  <li>
                    <strong>Capital de giro e estoque.</strong>
                    {" Programação melhor reduz material parado e produto em processo. O ganho é o custo financeiro desse dinheiro que deixa de ficar imobilizado."}
                  </li>
                  <li>
                    <strong>Custo do projeto.</strong>
                    {" Desenvolvimento, integração, treinamento e manutenção mensal. Inclua o tempo da sua equipe envolvida."}
                  </li>
                  <li>
                    <strong>Payback.</strong>
                    {" Custo do projeto dividido pelo ganho líquido mensal. Responde em quantos meses o investimento volta."}
                  </li>
                </ul>
                <p>
                  {"Um exemplo, com "}
                  <strong>números inventados apenas para ilustrar o método</strong>
                  . Não são dados de cliente nem estimativa de preço:
                </p>
                <div className="ol-tablewrap">
                  <table className="ol-table">
                    <thead>
                      <tr>
                        <th scope="col">Item (exemplo ilustrativo)</th>
                        <th scope="col">Premissa hipotética</th>
                        <th scope="col">Valor por mês</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Horas economizadas</th>
                        <td>60 horas de planejamento e redigitação a R$ 60 por hora</td>
                        <td>R$ 3.600</td>
                      </tr>
                      <tr>
                        <th scope="row">Erro evitado</th>
                        <td>2 retrabalhos a menos, de R$ 2.000 cada</td>
                        <td>R$ 4.000</td>
                      </tr>
                      <tr>
                        <th scope="row">Prazo cumprido</th>
                        <td>Sem número confiável: fora da conta</td>
                        <td>R$ 0</td>
                      </tr>
                      <tr>
                        <th scope="row">Capital de giro</th>
                        <td>R$ 100.000 a menos em processo, a 1,5% ao mês</td>
                        <td>R$ 1.500</td>
                      </tr>
                      <tr>
                        <th scope="row">Manutenção do sistema</th>
                        <td>Custo mensal após a implantação</td>
                        <td>− R$ 2.100</td>
                      </tr>
                      <tr>
                        <th scope="row">Ganho líquido</th>
                        <td>Soma das linhas acima</td>
                        <td>R$ 7.000</td>
                      </tr>
                      <tr>
                        <th scope="row">Payback</th>
                        <td>Projeto hipotético de R$ 140.000 ÷ R$ 7.000</td>
                        <td>20 meses</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  {"Troque cada premissa pelo número da sua operação. Se o payback ficar longo demais, o problema pode ser o escopo, e não o projeto: comece pela parte que devolve mais rápido. E a conta muda quando parte do investimento é financiada — projetos de modernização com incerteza técnica podem ser financiados via Lei do Bem, FINEP ou FAPEMIG, como explicamos em "}
                  <a href="/acesso-a-capital">acesso a capital</a>
                  .
                </p>
                <p>
                  {"Para o custo de uma hora de máquina que entra nessa conta, inclusive o peso da ociosidade, use a "}<a href="/calculadora-custo-hora-maquina">calculadora de custo hora-máquina</a>{"."}
                </p>
                <h2 id="comecar">Por onde começar</h2>
                <p>
                  Não pela programação da produção. Pelo pedido. Enquanto o pedido chegar por cinco canais, nenhum sequenciamento vai se sustentar, porque a entrada do plano está errada.
                </p>
                <ol>
                  <li>
                    <strong>Mapeie por onde o pedido entra hoje.</strong>
                    {" Todos os canais, inclusive os informais."}
                  </li>
                  <li>
                    <strong>Coloque o pedido num fluxo único</strong>
                    , com status que o comercial e a fábrica enxergam.
                  </li>
                  <li>
                    <strong>Cadastre a capacidade dos setores gargalo</strong>
                    {" — não de todos, só dos que realmente limitam a entrega."}
                  </li>
                  <li>
                    <strong>Só então sequencie e aponte.</strong>
                    {" Com entrada confiável e capacidade conhecida, o plano começa a valer."}
                  </li>
                </ol>
                <p>Quem hoje segura o PCP precisa participar do desenho. É quem conhece as exceções que nenhum documento registra.</p>
                <h2 id="origami">Como a Origami Lab trabalha isso</h2>
                <p>
                  Começamos com um diagnóstico de duas a quatro semanas dentro da operação, acompanhando como o pedido realmente vira produção, não como deveria virar. Dali sai o que atacar primeiro. Depois vem a construção: software em produção já no primeiro mês e ciclos curtos daí em frente, desenhados com quem planeja e com quem executa.
                </p>
                <p>
                  {"O ERP continua sendo o ERP — fiscal, financeiro, estoque e faturamento seguem nele. O sistema de PCP é construído em volta e "}
                  <a href="/integracao-erp-chao-de-fabrica">conectado ao ERP e ao chão de fábrica</a>
                  . O código e os dados são da sua empresa. E quando o projeto é financiado por meio do nosso serviço de acesso a capital, a cobrança só acontece se o capital for liberado.
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
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-planejamento-de-producao-1">
                    <span>Preciso trocar o ERP para ter um sistema de PCP?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-planejamento-de-producao-1" data-faq-body="">
                    <p>
                      Não. O ERP continua cuidando do fiscal, do financeiro, do estoque e do faturamento. O sistema de PCP é construído em volta dele, para a parte que ele não cobre — do pedido vendido à ordem na fábrica —, e os dois trocam dados por integração, sem ninguém redigitando.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-planejamento-de-producao-2">
                    <span>O módulo de PCP do meu ERP não resolve?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-planejamento-de-producao-2" data-faq-body="">
                    <p>
                      Às vezes resolve, e basta configurar, cadastrar roteiros e treinar quem usa. Vale verificar isso antes de qualquer projeto. Na indústria sob encomenda, o módulo padrão costuma esbarrar em produto que muda a cada pedido, em pedidos que ainda não entraram no ERP e na falta de apontamento confiável.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-planejamento-de-producao-3">
                    <span>Dá para fazer PCP em planilha?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-planejamento-de-producao-3" data-faq-body="">
                    <p>
                      Dá, e muita indústria faz. O limite aparece quando o volume de pedidos cresce, quando a programação precisa ser refeita todo dia e quando só uma pessoa entende a planilha. A partir daí, a fábrica perde a memória do que foi prometido no dia em que essa pessoa falta.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-planejamento-de-producao-4">
                    <span>Como calcular o ROI de um projeto de digitalização industrial?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-planejamento-de-producao-4" data-faq-body="">
                    <p>
                      Some quatro fontes de ganho mensal: horas economizadas multiplicadas pelo custo da hora, erro e retrabalho evitados, custos de atraso que deixam de acontecer e o custo financeiro do estoque e do material em processo que deixa de ficar parado. Desconte a manutenção mensal do sistema. Divida o custo do projeto por esse ganho líquido e você tem o payback em meses. Só conte como ganho o que tiver número confiável.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-planejamento-de-producao-5">
                    <span>Serve para indústria moveleira e produção sob encomenda?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-planejamento-de-producao-5" data-faq-body="">
                    <p>
                      Sim. É o cenário em que um sistema próprio de PCP costuma fazer mais diferença, porque cada pedido tem configuração própria e o cadastro padrão do ERP não acompanha. Um exemplo é a Tecno 2000, indústria de mobiliário corporativo: 80% de redução no tempo de planejamento de produção através de um software que centralizou o fluxo de pedidos.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-planejamento-de-producao-6">
                    <span>Quanto tempo leva até o sistema estar em uso?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-planejamento-de-producao-6" data-faq-body="">
                    <p>
                      O trabalho começa com um diagnóstico de duas a quatro semanas dentro da operação. Depois disso, a Origami Lab coloca software em produção já no primeiro mês de construção e segue em ciclos curtos. O prazo total depende do número de setores, das integrações e do estado do cadastro.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-planejamento-de-producao-7">
                    <span>Dá para financiar um projeto de PCP?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-planejamento-de-producao-7" data-faq-body="">
                    <p>
                      Projetos de modernização com incerteza técnica podem ser financiados via Lei do Bem, FINEP ou FAPEMIG. A Origami Lab estrutura esse acesso a capital e só cobra se o capital for liberado. O enquadramento depende de cada projeto e deve ser confirmado com parecer contábil.
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
                    <span>Como o que acontece na fábrica volta para o plano sem papel e sem redigitação no fim do turno.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/integracao-erp-chao-de-fabrica">
                    <b>Integração entre ERP e chão de fábrica</b>
                    <span>Como conectar o que o ERP registra ao que a produção executa, sem trocar o ERP.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/acesso-a-capital">
                    <b>Acesso a capital</b>
                    <span>Lei do Bem, FINEP e FAPEMIG para financiar a modernização, com cobrança só se o capital for liberado.</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="ol-cta" id="contato">
            <div className="ol-cta__glow" aria-hidden="true" />
            <div className="ol-cta__inner">
              <h2 className="ol-cta__title">
                {"Um PCP que depende de uma pessoa é um "}
                <em className="ol-em">risco operacional</em>
                .
              </h2>
              <p className="ol-cta__lead">
                A primeira conversa dura 30 minutos e serve para entender como o pedido vira produção na sua fábrica. Se o módulo do seu ERP resolver, a gente diz — e às vezes resolve.
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
