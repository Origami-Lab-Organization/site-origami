import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { PreloadDaFonteSerifada } from "@/components/PreloadDaFonteSerifada";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import { atualizacaoDaPagina } from "@/conteudo/paginas";
import { ORGANIZACAO, SITE_NODE } from "@/lib/seo/estruturados";

export const metadata: Metadata = {
  "title": {
    "absolute": "Processos industriais no Excel: como automatizar | Origami Lab"
  },
  "description": "Sete processos industriais que ainda vivem no Excel, o que cada planilha custa e como eliminar a redigitação entre produção, estoque e ERP sem trocar o ERP.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/automacao-de-processos-industriais"
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
    "url": "https://www.origamilab.com.br/automacao-de-processos-industriais",
    "siteName": "Origami Lab",
    "title": "Processos industriais que ainda vivem no Excel e como automatizá-los",
    "description": "Sete processos industriais que ainda vivem no Excel, o que cada planilha custa e como eliminar a redigitação entre produção, estoque e ERP sem trocar o ERP.",
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
      "@id": "https://www.origamilab.com.br/automacao-de-processos-industriais#webpage",
      "url": "https://www.origamilab.com.br/automacao-de-processos-industriais",
      "name": "Processos industriais que ainda vivem no Excel e como automatizá-los",
      "description": "Sete processos industriais que ainda vivem no Excel, o que cada planilha custa e como eliminar a redigitação entre produção, estoque e ERP sem trocar o ERP.",
      "inLanguage": "pt-BR",
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
        "@id": "https://www.origamilab.com.br/automacao-de-processos-industriais#breadcrumb"
      },
      "dateModified": atualizacaoDaPagina("/automacao-de-processos-industriais")
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.origamilab.com.br/automacao-de-processos-industriais#breadcrumb",
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
          "name": "Automação de processos industriais",
          "item": "https://www.origamilab.com.br/automacao-de-processos-industriais"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.origamilab.com.br/automacao-de-processos-industriais#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Automação de processos é o mesmo que automação industrial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Automação industrial controla máquina e linha, com CLP, SCADA e supervisório. Automação de processos, no sentido desta página, cuida do caminho da informação: pedido, programação, apontamento, estoque, custo e cobrança passando entre pessoas e sistemas sem redigitação. São projetos diferentes, que podem conversar."
          }
        },
        {
          "@type": "Question",
          "name": "Preciso trocar o ERP para eliminar as planilhas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na maior parte dos casos, não. As planilhas costumam cobrir justamente o que é específico da sua fábrica, e um ERP novo tende a deixar os mesmos buracos. O caminho usual é manter o ERP como base do fiscal, do financeiro e do estoque, construir em volta dele o que falta e conectar os dois pelo caminho que o fornecedor permite: API, banco de dados ou arquivo."
          }
        },
        {
          "@type": "Question",
          "name": "Por qual processo começar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pelo que acende três sinais ao mesmo tempo: a planilha é atualizada ou redigitada todo dia, a decisão que depende dela afeta prazo, margem ou caixa, e só uma pessoa sabe mantê-la. Automatize esse de ponta a ponta antes de abrir o segundo."
          }
        },
        {
          "@type": "Question",
          "name": "A planilha some de vez?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A planilha como sistema de registro, sim: o dado passa a nascer uma vez, na origem, e a planilha deixa de ser o lugar onde a informação oficial mora. O Excel como ferramenta de análise continua útil. Simulação, estudo de cenário e conta pontual para uma reunião são o uso para o qual ele foi feito."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo até ver algo funcionando?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O trabalho começa com um diagnóstico de 2 a 4 semanas dentro da operação. Depois dele, o objetivo é ter software em produção já no primeiro mês de execução, com ciclos curtos daí em diante. O prazo total depende do escopo priorizado no diagnóstico, da quantidade de integrações e do estado do cadastro."
          }
        },
        {
          "@type": "Question",
          "name": "De quem são o código e os dados?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Da sua empresa. O que é construído é entregue com o código documentado, e os dados permanecem sob a titularidade da empresa, em ambiente de nuvem contratado por ela. Isso evita trocar a dependência de uma planilha pela dependência de um fornecedor."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.origamilab.com.br/automacao-de-processos-industriais#service",
      "name": "Automação de processos industriais por software e integração",
      "description": "Automação de processos industriais que vivem em planilhas: programação da produção, apontamento, qualidade, manutenção, estoque de chão, custo por pedido e cobrança, com integração ao ERP e sem redigitação.",
      "serviceType": "Automação de processos industriais",
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
      "url": "https://www.origamilab.com.br/automacao-de-processos-industriais"
    }
  ]
};

export default function PaginaAutomacaoDeProcessosIndustriais() {
  return (
    <>
      <PreloadDaFonteSerifada />
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
              <span>Automação de processos industriais</span>
            </nav>
            <div className="ol-page__grid">
              <div className="ol-page__intro">
                <span className="ol-kicker">Automação de processos</span>
                <h1 className="ol-page__title">Processos industriais que ainda vivem no Excel e <em className="ol-em">como automatizá-los</em></h1>
              </div>
              <div className="ol-page__resumo">
                <p className="ol-page__rotulo">Resposta curta</p>
                <p className="ol-page__lead">
                  {"Os processos industriais que mais ficam no Excel são os que o ERP não cobre do jeito que a fábrica trabalha: programação da produção, apontamento, qualidade, manutenção, estoque de chão, custo por pedido e cobrança. Automatizá-los não exige trocar o ERP. Exige fazer o dado nascer "}
                  <strong>uma única vez</strong>
                  , no ponto onde o fato acontece, e chegar ao ERP sem ninguém redigitar. O primeiro a automatizar é aquele em que a planilha é atualizada com mais frequência, o erro custa mais caro e o conhecimento depende de uma pessoa só. E nem toda planilha deve virar sistema: processo que muda toda semana ou tem volume baixo costuma ficar melhor no Excel mesmo.
                </p>
                <p className="ol-page__meta">Origami Lab · Formiga, Minas Gerais · Software e integração para indústria</p>
              </div>
              <div className="ol-page__actions">
                <a className="ol-btn ol-btn--primary" href="/conversar">
                  {"Falar sobre a operação da minha empresa "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                {" "}
                <a className="ol-btn ol-btn--ghost" href="#faq">Ir para as perguntas</a>
              </div>
            </div>
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
                    <a href="#por-que-nasce">Por que a planilha nasce</a>
                  </li>
                  <li>
                    <a href="#sete-processos">Os sete processos</a>
                  </li>
                  <li>
                    <a href="#redigitacao">Como eliminar a redigitação</a>
                  </li>
                  <li>
                    <a href="#nao-automatizar">O que não automatizar</a>
                  </li>
                  <li>
                    <a href="#priorizar">Como priorizar</a>
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
                  Um esclarecimento antes de tudo: aqui, automação é automação de processos por software e integração — o caminho da informação entre pessoas, planilhas e sistemas. Não é automação industrial de CLP, SCADA ou supervisório, que controla máquina e linha.
                </p>
                <h2 id="por-que-nasce">Por que a planilha nasce e por que ela vira risco</h2>
                <p>
                  A planilha não nasce por descuido. Ela nasce porque o ERP não cobre uma parte do processo do jeito que a fábrica trabalha, e alguém precisa resolver aquilo hoje, não no próximo projeto de TI. O Excel está aberto, todo mundo sabe usar e a mudança leva uma tarde. É uma resposta legítima.
                </p>
                <p>
                  O problema aparece com o tempo. A planilha que era de uma pessoa vira a base de um setor. Ganha abas, fórmulas e cores que só o autor entende. Passa a ser copiada por e-mail, e surgem a versão da produção, a do comercial e a da diretoria. Três riscos se acumulam:
                </p>
                <ul>
                  <li>
                    <strong>Dependência de uma pessoa.</strong>
                    {" Quando quem montou a planilha sai de férias, o processo para ou anda às cegas."}
                  </li>
                  <li>
                    <strong>Erro silencioso.</strong>
                    {" Uma fórmula arrastada errado não avisa ninguém. O número parece certo até a hora em que não é."}
                  </li>
                  <li>
                    <strong>Decisão atrasada.</strong>
                    {" O dado passa por redigitação e consolidação antes de chegar a quem decide. Quando chega, a decisão que ele deveria orientar já foi tomada."}
                  </li>
                </ul>
                <h2 id="sete-processos">Sete processos industriais que ainda vivem no Excel</h2>
                <p>
                  A lista muda de uma fábrica para outra, mas estes sete aparecem com frequência. Para cada um: o sintoma, o que custa e como fica depois de automatizado.
                </p>
                <h3>1. Programação da produção e carteira de pedidos</h3>
                <p>
                  <strong>Sintoma.</strong>
                  {" O PCP recebe os pedidos do ERP, exporta, cola numa planilha e monta a sequência da semana à mão. Cada pedido urgente obriga a refazer tudo."}
                </p>
                <p>
                  <strong>O que custa.</strong>
                  {" Horas de uma pessoa qualificada gastas em montagem, não em decisão. E um prazo prometido ao cliente sem enxergar a capacidade real."}
                </p>
                <p>
                  <strong>Automatizado.</strong>
                  {" O pedido entra uma vez e alimenta direto a programação, com as regras da fábrica embutidas. Na Tecno 2000, de mobiliário corporativo, um software que centralizou o fluxo de pedidos reduziu em 80% o tempo de planejamento de produção."}
                </p>
                <h3>2. Apontamento de produção</h3>
                <p>
                  <strong>Sintoma.</strong>
                  {" O operador anota em papel, e alguém digita no fim do turno ou no dia seguinte."}
                </p>
                <p>
                  <strong>O que custa.</strong>
                  {" A diretoria vê a produção de ontem. Uma parada ou um refugo acima do normal só aparece quando já não dá para agir no turno."}
                </p>
                <p>
                  <strong>Automatizado.</strong>
                  {" O apontamento é feito no posto, em tela simples, e o dado segue para os indicadores e para o ERP sem passar por ninguém."}
                </p>
                <h3>3. Qualidade e não conformidade</h3>
                <p>
                  <strong>Sintoma.</strong>
                  {" Inspeções em formulário, não conformidades numa planilha e ações corretivas no e-mail."}
                </p>
                <p>
                  <strong>O que custa.</strong>
                  {" Quando o cliente reclama de um lote, montar o histórico leva dias. E a mesma falha volta porque ninguém consegue ver o padrão."}
                </p>
                <p>
                  <strong>Automatizado.</strong>
                  {" A inspeção fica registrada por lote e ordem, a não conformidade abre uma ação com responsável e prazo, e o histórico sai em uma consulta."}
                </p>
                <h3>4. Manutenção</h3>
                <p>
                  <strong>Sintoma.</strong>
                  {" Pedido de manutenção por telefone ou mensagem, plano preventivo numa planilha que ninguém atualiza."}
                </p>
                <p>
                  <strong>O que custa.</strong>
                  {" A preventiva escorrega, a corretiva vira rotina e não há registro para saber qual equipamento está custando mais."}
                </p>
                <p>
                  <strong>Automatizado.</strong>
                  {" Solicitação e checklist entram por um canal único, com registro. Na "}
                  <a href="/cases/transportadora-cabral">Transportadora Cabral</a>
                  , manutenção e checklists da frota passaram a entrar por uma central no WhatsApp integrada ao TripLog, o sistema que a operação já usava.
                </p>
                <h3>5. Requisição e estoque de chão de fábrica</h3>
                <p>
                  <strong>Sintoma.</strong>
                  {" O almoxarifado controla saídas numa planilha e dá baixa no ERP depois, quando dá."}
                </p>
                <p>
                  <strong>O que custa.</strong>
                  {" O saldo do ERP não bate com a prateleira. Compra-se o que já tem e falta o que o sistema dizia ter."}
                </p>
                <p>
                  <strong>Automatizado.</strong>
                  {" A requisição é feita contra a ordem de produção, e a baixa acontece no momento da retirada, uma vez."}
                </p>
                <h3>6. Custo e margem por pedido</h3>
                <p>
                  <strong>Sintoma.</strong>
                  {" A margem de cada pedido é calculada numa planilha à parte, com custos que alguém atualiza de vez em quando."}
                </p>
                <p>
                  <strong>O que custa.</strong>
                  {" A empresa descobre que um pedido deu prejuízo semanas depois de entregar. Ou nunca descobre."}
                </p>
                <p>
                  <strong>Automatizado.</strong>
                  {" O custo é apurado a partir do que foi apontado e consumido de fato, e a margem fica visível enquanto o pedido ainda está em produção."}
                </p>
                <h3>7. Cobrança</h3>
                <p>
                  <strong>Sintoma.</strong>
                  {" O financeiro tira do ERP a lista de títulos vencidos e liga ou manda mensagem quando lembra."}
                </p>
                <p>
                  <strong>O que custa.</strong>
                  {" A cobrança depende da memória de alguém, e a inadimplência cresce sem que ninguém enxergue."}
                </p>
                <p>
                  <strong>Automatizado.</strong>
                  {" Na "}
                  <a href="/cases/cobranca-automatica-whatsapp-retifica-formiguense">Retífica Formiguense</a>
                  , uma régua de cobrança via WhatsApp lê os títulos direto do ERP e avisa cada cliente no dia certo. Nos primeiros quatro dias de envio real, 100% dos avisos foram entregues sem falha e 41% do valor avisado foi quitado.
                </p>
                <h2 id="redigitacao">Como eliminar a redigitação entre produção, estoque e ERP</h2>
                <p>
                  Redigitação existe quando o mesmo fato é registrado duas vezes: uma onde acontece, outra no sistema. A saída tem três partes.
                </p>
                <ol>
                  <li>
                    <strong>Registrar na origem.</strong>
                    {" O dado nasce no posto, no almoxarifado ou no pedido, em uma tela feita para quem está ali. Se a tela for pior que o papel, o papel volta."}
                  </li>
                  <li>
                    <strong>Definir quem manda em cada dado.</strong>
                    {" O ERP continua sendo a base do fiscal, do financeiro e do estoque. O sistema de operação é a base do que acontece na fábrica. Cada informação tem um dono só."}
                  </li>
                  <li>
                    <strong>Conectar pelo caminho que o ERP permite.</strong>
                    {" API, banco de dados ou arquivo, na ordem de preferência. A escolha depende do que o fornecedor libera, não de gosto. Os detalhes estão em "}
                    <a href="/integracao-de-sistemas">integração de sistemas</a>
                    .
                  </li>
                </ol>
                <p>
                  O cuidado que mais importa é a falha. Integração cai — rede, atualização, dado fora do padrão. Precisa cair de forma visível, com alguém avisado e um jeito de reenviar o que ficou para trás. Integração que falha em silêncio é pior que redigitação, porque ninguém desconfia do número.
                </p>
                <h2 id="nao-automatizar">O que não vale automatizar</h2>
                <p>Nem toda planilha deve virar sistema. Algumas devem continuar planilha:</p>
                <ul>
                  <li>
                    <strong>Processo que muda toda semana.</strong>
                    {" Se a regra ainda está sendo descoberta, automatizar congela algo que não está pronto. Primeiro estabilize, depois automatize."}
                  </li>
                  <li>
                    <strong>Volume baixo.</strong>
                    {" Uma conta feita uma vez por mês por uma pessoa, sem retrabalho, raramente paga o custo de um sistema."}
                  </li>
                  <li>
                    <strong>Análise pontual.</strong>
                    {" Simulação, estudo e cenário para uma reunião são o uso para o qual o Excel foi feito. O problema é a planilha como sistema de registro, não como ferramenta de análise."}
                  </li>
                </ul>
                <h2 id="priorizar">Como priorizar: frequência, impacto e risco</h2>
                <p>Não se automatiza tudo de uma vez. Para escolher o primeiro processo, três perguntas bastam:</p>
                <div className="ol-tablewrap">
                  <table className="ol-table">
                    <thead>
                      <tr>
                        <th scope="col">Critério</th>
                        <th scope="col">Pergunta</th>
                        <th scope="col">Sinal de prioridade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Frequência</th>
                        <td>Quantas vezes por dia ou por semana a planilha é atualizada ou redigitada?</td>
                        <td>Todo dia, por mais de uma pessoa.</td>
                      </tr>
                      <tr>
                        <th scope="row">Impacto</th>
                        <td>Que decisão depende desse dado, e quanto custa ela chegar atrasada ou errada?</td>
                        <td>Prazo de cliente, margem ou caixa.</td>
                      </tr>
                      <tr>
                        <th scope="row">Risco</th>
                        <td>O processo para se uma pessoa faltar? O erro aparece antes de causar dano?</td>
                        <td>Uma pessoa só sabe fazer, e o erro só aparece depois.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  O processo que acende os três sinais é o candidato. Automatize esse, de ponta a ponta, antes de abrir o segundo. Um processo inteiro funcionando prova o caminho e ensina o que o próximo vai encontrar.
                </p>
                <h2 id="origami">Como a Origami Lab trabalha isso</h2>
                <p>
                  Começamos com um diagnóstico de 2 a 4 semanas dentro da operação, mapeando o processo como ele é hoje e onde a planilha e a redigitação estão. Com a diretoria, escolhemos o que move resultado primeiro. Depois construímos em ciclos curtos, com software em produção já no primeiro mês, treinamento de quem usa e acompanhamento até a sua equipe conduzir sem nós.
                </p>
                <p>
                  {"Não substituímos o ERP. Construímos em volta dele o que ele não cobre e conectamos os dois. O código é entregue documentado e os dados permanecem com a sua empresa. Quando o que falta não existe pronto no mercado, o assunto vira "}
                  <a href="/software-sob-medida">software sob medida</a>
                  . Nossa base é em Formiga, Minas Gerais, e vamos até a operação nas etapas que pedem presença.
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
                  <a href="/conversar">Fale com a gente</a>
                  .
                </p>
              </div>
              <div className="ol-faq__list">
                <div className="ol-faq__item" data-faq="" data-faq-open="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-automacao-de-processos-industriais-1">
                    <span>Automação de processos é o mesmo que automação industrial?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-automacao-de-processos-industriais-1" data-faq-body="">
                    <p>
                      Não. Automação industrial controla máquina e linha, com CLP, SCADA e supervisório. Automação de processos, no sentido desta página, cuida do caminho da informação: pedido, programação, apontamento, estoque, custo e cobrança passando entre pessoas e sistemas sem redigitação. São projetos diferentes, que podem conversar.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-automacao-de-processos-industriais-2">
                    <span>Preciso trocar o ERP para eliminar as planilhas?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-automacao-de-processos-industriais-2" data-faq-body="">
                    <p>
                      Na maior parte dos casos, não. As planilhas costumam cobrir justamente o que é específico da sua fábrica, e um ERP novo tende a deixar os mesmos buracos. O caminho usual é manter o ERP como base do fiscal, do financeiro e do estoque, construir em volta dele o que falta e conectar os dois pelo caminho que o fornecedor permite: API, banco de dados ou arquivo.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-automacao-de-processos-industriais-3">
                    <span>Por qual processo começar?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-automacao-de-processos-industriais-3" data-faq-body="">
                    <p>
                      Pelo que acende três sinais ao mesmo tempo: a planilha é atualizada ou redigitada todo dia, a decisão que depende dela afeta prazo, margem ou caixa, e só uma pessoa sabe mantê-la. Automatize esse de ponta a ponta antes de abrir o segundo.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-automacao-de-processos-industriais-4">
                    <span>A planilha some de vez?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-automacao-de-processos-industriais-4" data-faq-body="">
                    <p>
                      A planilha como sistema de registro, sim: o dado passa a nascer uma vez, na origem, e a planilha deixa de ser o lugar onde a informação oficial mora. O Excel como ferramenta de análise continua útil. Simulação, estudo de cenário e conta pontual para uma reunião são o uso para o qual ele foi feito.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-automacao-de-processos-industriais-5">
                    <span>Quanto tempo até ver algo funcionando?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-automacao-de-processos-industriais-5" data-faq-body="">
                    <p>
                      O trabalho começa com um diagnóstico de 2 a 4 semanas dentro da operação. Depois dele, o objetivo é ter software em produção já no primeiro mês de execução, com ciclos curtos daí em diante. O prazo total depende do escopo priorizado no diagnóstico, da quantidade de integrações e do estado do cadastro.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-automacao-de-processos-industriais-6">
                    <span>De quem são o código e os dados?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-automacao-de-processos-industriais-6" data-faq-body="">
                    <p>
                      Da sua empresa. O que é construído é entregue com o código documentado, e os dados permanecem sob a titularidade da empresa, em ambiente de nuvem contratado por ela. Isso evita trocar a dependência de uma planilha pela dependência de um fornecedor.
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
                  <a className="ol-next__card" href="/integracao-erp-chao-de-fabrica">
                    <b>Integração entre ERP e chão de fábrica</b>
                    <span>Como o que acontece na produção chega ao ERP sem papel no meio e sem redigitação.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/apontamento-de-producao">
                    <b>Apontamento de produção</b>
                    <span>O que registrar no posto, com que tela, e como o dado vira indicador no mesmo turno.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/integracao-de-sistemas">
                    <b>Integração de sistemas</b>
                    <span>Os quatro caminhos técnicos para conectar sistemas que não conversam, inclusive quando o ERP não tem API.</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="ol-cta" id="contato">
            <div className="ol-cta__glow" aria-hidden="true" />
            <div className="ol-cta__inner">
              <h2 className="ol-cta__title">
                {"Toda planilha paralela é uma "}
                <em className="ol-em">decisão atrasada</em>
                .
              </h2>
              <p className="ol-cta__lead">
                A primeira conversa dura 30 minutos e serve para olhar quais planilhas sustentam a sua operação e qual delas vale automatizar primeiro. Se a resposta for nenhuma, a gente diz.
              </p>
              <div className="ol-cta__actions">
                <a className="ol-btn ol-btn--primary ol-btn--lg" href="/conversar">
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
          <Rodape />
        </div>
      </div>
      <DadosEstruturados dados={DADOS_ESTRUTURADOS} />
      <ScriptsDaPagina scripts={["pagina"]} />
    </>
  );
}
