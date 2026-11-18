import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";

export const metadata: Metadata = {
  "title": {
    "absolute": "Integração de sistemas: quando o ERP não cobre | Origami Lab"
  },
  "description": "Por que o dado volta a nascer numa planilha, os quatro caminhos técnicos para integrar sistemas que não conversam e o que fazer quando o sistema é legado e não tem API.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/integracao-de-sistemas"
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
    "url": "https://www.origamilab.com.br/integracao-de-sistemas",
    "siteName": "Origami Lab",
    "title": "Integração de sistemas: quando o ERP não cobre a operação",
    "description": "Por que o dado volta a nascer numa planilha, os quatro caminhos técnicos para integrar sistemas que não conversam e o que fazer quando o sistema é legado e não tem API.",
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
      "@id": "https://www.origamilab.com.br/integracao-de-sistemas#webpage",
      "url": "https://www.origamilab.com.br/integracao-de-sistemas",
      "name": "Integração de sistemas: o que fazer quando o ERP não cobre a operação",
      "description": "Por que o dado volta a nascer numa planilha, os quatro caminhos técnicos para integrar sistemas que não conversam e o que fazer quando o sistema é legado e não tem API.",
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
        "@id": "https://www.origamilab.com.br/integracao-de-sistemas#breadcrumb"
      },
      "dateModified": "2026-09-18"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.origamilab.com.br/integracao-de-sistemas#breadcrumb",
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
          "name": "Integração de sistemas",
          "item": "https://www.origamilab.com.br/integracao-de-sistemas"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.origamilab.com.br/integracao-de-sistemas#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Preciso trocar de ERP para resolver isso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na maior parte dos casos, não. ERPs são genéricos por natureza e cobrem bem financeiro, fiscal, estoque e faturamento; o que costuma faltar é justamente a parte específica da sua operação. Trocar de ERP é caro, demorado e tende a recriar o mesmo problema dois anos depois, porque a causa raramente era o ERP. O caminho usual é manter o ERP como base de registro e construir em volta dele o que ele não cobre, conectado por integração."
          }
        },
        {
          "@type": "Question",
          "name": "Meu ERP não tem API. Ainda dá para integrar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dá, com caminhos alternativos em ordem de preferência: acesso de leitura ao banco de dados, troca de arquivos em intervalos definidos (CSV, XML ou layout posicional) e, em último caso, automação de interface — um robô operando a tela. Cada opção tem um custo diferente: banco quebra quando o fornecedor muda o modelo de dados; arquivo tem latência por desenho; automação de interface quebra a qualquer mudança de layout e deve ser tratada como ponte temporária, nunca como arquitetura definitiva."
          }
        },
        {
          "@type": "Question",
          "name": "Funciona com Protheus, TOTVS, Sankhya, SAP ou Senior?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O caminho técnico depende do que cada fornecedor libera na sua versão e no seu contrato — alguns oferecem API documentada, outros só acesso ao banco, outros cobram à parte pelo módulo de integração. A primeira etapa de qualquer projeto é confirmar exatamente o que o seu ERP, na configuração que você tem, permite. Isso é verificação, não suposição, e muda bastante de um cliente para outro dentro do mesmo produto."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva uma integração?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende menos da tecnologia e mais de três coisas: quantos sistemas estão envolvidos, o estado do cadastro e quantas regras de exceção o processo tem. Um processo único ponta a ponta, com cadastro razoável e um ERP com API, costuma ser o escopo que entrega resultado visível mais rápido. Cadastro sujo é o fator que mais estende prazo, e ele raramente aparece no orçamento inicial de quem não olhou a operação antes."
          }
        },
        {
          "@type": "Question",
          "name": "Integração em tempo real ou por lote?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende do uso do dado, e tempo real nem sempre é melhor. Um apontamento de produção que orienta decisão de turno precisa ser imediato. Um fechamento contábil pode rodar à noite, e rodar à noite é mais simples, mais barato e mais fácil de reprocessar quando falha. Escolher tempo real por padrão encarece o projeto e aumenta a superfície de falha sem ganho correspondente."
          }
        },
        {
          "@type": "Question",
          "name": "O que acontece quando a integração falha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ela vai falhar em algum momento — rede fora, atualização do fornecedor, dado fora do padrão. O que separa uma integração bem-feita de uma mal-feita não é nunca falhar: é falhar de forma visível, reprocessável e sem perder dado. Isso significa registro de cada tentativa, alerta para uma pessoa nomeada e capacidade de reenviar o que ficou para trás sem duplicar. Integração que cai em silêncio é pior que redigitação, porque ninguém desconfia do número."
          }
        },
        {
          "@type": "Question",
          "name": "Precisamos ter equipe de TI para manter isso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não é necessário. Quando existe equipe interna, trabalhamos junto com ela desde o desenho, para que a manutenção fique possível. Quando não existe, conduzimos a implantação e preparamos as pessoas da operação para usar e acompanhar o que foi entregue, com a documentação e o monitoramento necessários para que uma falha seja percebida sem depender de conhecimento técnico profundo."
          }
        },
        {
          "@type": "Question",
          "name": "De quem são o código e os dados?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seus. O que é construído para a sua empresa é da sua empresa, com o código entregue e documentado. Os dados permanecem sob a sua titularidade e ficam em ambiente de nuvem contratado por você — a Origami Lab é credenciada AWS. Isso importa especialmente em integração, porque é a camada que, mal contratada, cria a dependência mais difícil de desfazer."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.origamilab.com.br/integracao-de-sistemas#service",
      "name": "Integração de sistemas e desenvolvimento em volta do ERP",
      "description": "Integração entre ERP, sistemas legados e operação: eliminação de redigitação, conexão por API, banco ou arquivo, e construção do que o ERP não cobre.",
      "serviceType": "Integração de sistemas empresariais",
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
      "url": "https://www.origamilab.com.br/integracao-de-sistemas"
    }
  ]
};

export default function PaginaIntegracaoDeSistemas() {
  return (
    <>
      <Navegacao faqNaPagina />
      <div className="ol-root" id="conteudo">
        {/* ==================== Abertura ==================== */}
        <header className="ol-page__hero">
          <div className="ol-page__glow" aria-hidden="true" />
          <div className="ol-page__inner">
            <nav className="ol-crumb" aria-label="Você está em">
              <a href="/">Origami Lab</a>
              {" "}
              <span aria-hidden="true">/</span>
              {" "}
              <span>Integração de sistemas</span>
            </nav>
            <h1 className="ol-page__title">Integração de sistemas: o que fazer quando o ERP não cobre a operação</h1>
            <p className="ol-page__lead">
              {"Quando o ERP não cobre uma parte da operação, a empresa não fica sem processo — ela ganha uma planilha. O apontamento de produção vai para o Excel, o chão de fábrica anota em papel, alguém redigita no fim do turno, e o número que chega à diretoria já tem um dia de atraso e um erro de digitação dentro. Integrar sistemas é fechar esse ciclo: fazer o dado nascer "}
              <strong>uma única vez</strong>
              , no ponto onde o fato acontece, e chegar ao ERP sem redigitação. Na prática isso quase nunca significa trocar o ERP — significa construir em volta dele o que ele não cobre e conectar os dois pelo caminho que o fornecedor do ERP permitir: API, banco de dados ou arquivo.
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
                    <a href="#sintomas">Os três sintomas</a>
                  </li>
                  <li>
                    <a href="#nao-trocar">Integrar não é trocar o ERP</a>
                  </li>
                  <li>
                    <a href="#caminhos">Os quatro caminhos técnicos</a>
                  </li>
                  <li>
                    <a href="#legado">Quando o sistema é legado</a>
                  </li>
                  <li>
                    <a href="#nao-tecnico">A parte que não é técnica</a>
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
                  Nenhuma empresa decide ter oito planilhas paralelas ao ERP. Elas aparecem uma a uma, cada uma resolvendo um problema legítimo, e um ano depois ninguém sabe mais qual número é o certo.
                </p>
                <h2 id="sintomas">Os três sintomas de que falta integração</h2>
                <p>Não é preciso diagnóstico para reconhecê-los. Se dois dos três estão presentes, o problema já custa dinheiro:</p>
                <div className="ol-key">
                  <div className="ol-key__title">Reconhecendo o problema</div>
                  <ul>
                    <li>
                      <strong>Redigitação.</strong>
                      {" Alguém lê um número de um lugar e digita em outro. Cada redigitação é uma chance de erro e um atraso, e normalmente ocupa uma pessoa boa fazendo trabalho que não precisa existir."}
                    </li>
                    <li>
                      <strong>Números que não batem.</strong>
                      {" A produção diz uma coisa, o ERP diz outra, a diretoria recebe uma terceira. A reunião gasta a primeira meia hora decidindo qual número é o verdadeiro, em vez de decidindo o que fazer."}
                    </li>
                    <li>
                      <strong>Informação que chega tarde.</strong>
                      {" O relatório de ontem no meio da manhã de hoje. Quando o dado chega, a decisão que ele deveria orientar já foi tomada no escuro."}
                    </li>
                  </ul>
                </div>
                <p>
                  O terceiro é o mais caro e o menos visível, porque o custo não aparece em lugar nenhum da contabilidade. Ele aparece como margem que vazou numa ordem que seguiu errada por um turno inteiro.
                </p>
                <h2 id="nao-trocar">Integrar não é trocar o ERP</h2>
                <p>
                  A conclusão apressada quando a operação trava é que o ERP é ruim e precisa ser substituído. Na maior parte das vezes isso é caro, demorado e desnecessário — e a troca recria o mesmo problema dois anos depois, porque a causa raramente era o ERP.
                </p>
                <p>
                  {"ERPs são bons no que foram feitos para fazer: financeiro, fiscal, estoque, compras, faturamento. Eles são genéricos por natureza, porque precisam servir a milhares de empresas diferentes. O que eles não cobrem bem é justamente "}
                  <strong>o que a sua empresa faz de específico</strong>
                  {" — a forma como você programa a produção, apura o custo de uma ordem, controla a qualidade de um lote, acompanha uma obra ou uma frota. Esse pedaço específico não é falha do ERP; é o limite do conceito."}
                </p>
                <p>
                  A estratégia que funciona é manter o ERP como base de registro e construir em volta dele o que falta, conectado. O ERP continua sendo a verdade do fiscal e do financeiro; o sistema específico passa a ser a verdade da operação; e os dois trocam dados sem ninguém no meio digitando.
                </p>
                <h2 id="caminhos">Os quatro caminhos técnicos</h2>
                <p>A escolha não é de gosto — ela é ditada pelo que o fornecedor do ERP libera e pelo tipo de dado. Em ordem de preferência:</p>
                <div className="ol-tablewrap">
                  <table className="ol-table">
                    <thead>
                      <tr>
                        <th scope="col">Caminho</th>
                        <th scope="col">Quando é o certo</th>
                        <th scope="col">O que custa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">API</th>
                        <td>
                          O ERP expõe serviços documentados. É o caminho mais estável: sobrevive a atualizações do fornecedor e respeita as regras de negócio do próprio ERP.
                        </td>
                        <td>Depende de o fornecedor liberar — e às vezes cobrar por — o acesso.</td>
                      </tr>
                      <tr>
                        <th scope="row">Banco de dados</th>
                        <td>
                          Não há API, mas há acesso de leitura ao banco. Serve bem para extrair dado; para escrever, é arriscado, porque passa por cima das validações do sistema.
                        </td>
                        <td>Quebra quando o fornecedor muda o modelo de dados numa atualização.</td>
                      </tr>
                      <tr>
                        <th scope="row">Arquivo</th>
                        <td>
                          Troca por CSV, XML ou layout posicional em intervalos definidos. Menos elegante e perfeitamente adequado para dado que não precisa ser instantâneo.
                        </td>
                        <td>Tem latência por desenho e exige tratamento de falha e reprocessamento.</td>
                      </tr>
                      <tr>
                        <th scope="row">Automação de interface (RPA)</th>
                        <td>Último recurso, quando não há API, nem banco, nem arquivo — um robô opera a tela como um humano operaria.</td>
                        <td>Frágil: qualquer mudança de layout quebra. Serve como ponte temporária, não como arquitetura.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  {"Vale insistir no último: "}
                  <strong>RPA é ponte, não destino</strong>
                  . Ele resolve rápido e cria uma dependência que ninguém documenta. Quando for a única opção, trate como provisório e registre por que foi necessário.
                </p>
                <h2 id="legado">Quando o sistema é legado</h2>
                <p>
                  Sistema legado é aquele que ainda sustenta a operação e ninguém quer tocar — normalmente porque quem o construiu não está mais na empresa, a documentação não existe e ele funciona. Às vezes o fornecedor sumiu. Às vezes ele roda numa tecnologia que ninguém mais domina.
                </p>
                <p>
                  A tentação é reescrever tudo. É a decisão mais arriscada disponível: reescrever um sistema que ninguém entende por completo significa descobrir as regras de negócio esquecidas uma a uma, em produção. O caminho mais seguro é diferente:
                </p>
                <ol>
                  <li>
                    <strong>Cercar antes de substituir.</strong>
                    {" Construir o novo em volta, lendo os dados do legado, sem mexer nele."}
                  </li>
                  <li>
                    <strong>Mover por pedaço.</strong>
                    {" Uma função por vez, com o legado ainda no ar como rede de segurança."}
                  </li>
                  <li>
                    <strong>Documentar enquanto move.</strong>
                    {" Cada regra descoberta vira documentação — é o único momento em que alguém está olhando para ela."}
                  </li>
                  <li>
                    <strong>Desligar só quando nada mais depender.</strong>
                    {" E confirmar isso medindo, não perguntando."}
                  </li>
                </ol>
                <h2 id="nao-tecnico">A parte que não é técnica (e costuma ser a difícil)</h2>
                <p>
                  Integração fracassa mais por acordo do que por tecnologia. Três perguntas precisam ter dono antes da primeira linha de código:
                </p>
                <ul>
                  <li>
                    <strong>Qual sistema manda em cada dado?</strong>
                    {" Se o cadastro de cliente existe em dois lugares, um dos dois precisa ser o oficial. Sem essa definição, a integração propaga divergência mais rápido do que a redigitação propagava."}
                  </li>
                  <li>
                    <strong>O que fazer quando os dois discordam?</strong>
                    {" Sobrescreve, rejeita, ou avisa alguém? Essa regra precisa ser decidida por quem responde pelo processo, não pelo desenvolvedor."}
                  </li>
                  <li>
                    <strong>Quem é avisado quando falha?</strong>
                    {" Integração cai — rede, atualização, dado fora do padrão. O problema não é cair; é cair em silêncio e ninguém perceber por três dias."}
                  </li>
                </ul>
                <p>
                  {"Há ainda um item que não é técnico nem contratual: "}
                  <strong>o cadastro.</strong>
                  {" Boa parte dos projetos de integração descobre, na primeira semana, que o mesmo cliente está gravado de quatro jeitos diferentes. Limpar cadastro é chato, não tem glamour nenhum e é pré-requisito real."}
                </p>
                <h2 id="comecar">Por onde começar</h2>
                <p>
                  {"Não por todos os sistemas. Escolha "}
                  <strong>um processo, de ponta a ponta</strong>
                  {" — do pedido à entrega, da ordem ao faturamento, da requisição à compra — e integre esse. Um processo inteiro funcionando prova o caminho, gera resultado visível e ensina o que a próxima integração vai encontrar. Integrar dez sistemas pela metade não entrega nada."}
                </p>
                <p>O critério de escolha do primeiro processo é simples: aquele em que a redigitação é maior e o erro dói mais.</p>
                <h2 id="origami">Como a Origami Lab trabalha isso</h2>
                <p>
                  Começamos pelo diagnóstico dentro da operação — de duas a quatro semanas mapeando o processo real, não o desenhado, e mostrando onde o dado para. Depois priorizamos por retorno, desenhamos com quem executa, construímos em ciclos curtos com entregas quinzenais e acompanhamos até a sua equipe conduzir sozinha. O ERP continua sendo o ERP; nós construímos e conectamos o que falta em volta dele.
                </p>
                <p>
                  {"Quando o que falta não existe no mercado, o assunto vira "}
                  <a href="/software-sob-medida">desenvolvimento sob medida</a>
                  . E quando o projeto tem incerteza técnica de verdade, parte dele pode se enquadrar na Lei do Bem — o que muda a conta do investimento.
                </p>
                <p>
                  {"Uma aplicação dessa abordagem é a "}
                  <a href="/unificacao-de-produtos-digitais">unificação de produtos digitais em uma plataforma</a>
                  . Em um projeto de plataforma digital, o trabalho conectou jornadas, acesso e contratação de serviços, com integração de contas e planos ao sistema legado.
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
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-de-sistemas-1">
                    <span>Preciso trocar de ERP para resolver isso?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-de-sistemas-1" data-faq-body="">
                    <p>
                      Na maior parte dos casos, não. ERPs são genéricos por natureza e cobrem bem financeiro, fiscal, estoque e faturamento; o que costuma faltar é justamente a parte específica da sua operação. Trocar de ERP é caro, demorado e tende a recriar o mesmo problema dois anos depois, porque a causa raramente era o ERP. O caminho usual é manter o ERP como base de registro e construir em volta dele o que ele não cobre, conectado por integração.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-de-sistemas-2">
                    <span>Meu ERP não tem API. Ainda dá para integrar?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-de-sistemas-2" data-faq-body="">
                    <p>
                      Dá, com caminhos alternativos em ordem de preferência: acesso de leitura ao banco de dados, troca de arquivos em intervalos definidos (CSV, XML ou layout posicional) e, em último caso, automação de interface — um robô operando a tela. Cada opção tem um custo diferente: banco quebra quando o fornecedor muda o modelo de dados; arquivo tem latência por desenho; automação de interface quebra a qualquer mudança de layout e deve ser tratada como ponte temporária, nunca como arquitetura definitiva.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-de-sistemas-3">
                    <span>Funciona com Protheus, TOTVS, Sankhya, SAP ou Senior?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-de-sistemas-3" data-faq-body="">
                    <p>
                      O caminho técnico depende do que cada fornecedor libera na sua versão e no seu contrato — alguns oferecem API documentada, outros só acesso ao banco, outros cobram à parte pelo módulo de integração. A primeira etapa de qualquer projeto é confirmar exatamente o que o seu ERP, na configuração que você tem, permite. Isso é verificação, não suposição, e muda bastante de um cliente para outro dentro do mesmo produto.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-de-sistemas-4">
                    <span>Quanto tempo leva uma integração?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-de-sistemas-4" data-faq-body="">
                    <p>
                      Depende menos da tecnologia e mais de três coisas: quantos sistemas estão envolvidos, o estado do cadastro e quantas regras de exceção o processo tem. Um processo único ponta a ponta, com cadastro razoável e um ERP com API, costuma ser o escopo que entrega resultado visível mais rápido. Cadastro sujo é o fator que mais estende prazo, e ele raramente aparece no orçamento inicial de quem não olhou a operação antes.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-de-sistemas-5">
                    <span>Integração em tempo real ou por lote?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-de-sistemas-5" data-faq-body="">
                    <p>
                      Depende do uso do dado, e tempo real nem sempre é melhor. Um apontamento de produção que orienta decisão de turno precisa ser imediato. Um fechamento contábil pode rodar à noite, e rodar à noite é mais simples, mais barato e mais fácil de reprocessar quando falha. Escolher tempo real por padrão encarece o projeto e aumenta a superfície de falha sem ganho correspondente.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-de-sistemas-6">
                    <span>O que acontece quando a integração falha?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-de-sistemas-6" data-faq-body="">
                    <p>
                      Ela vai falhar em algum momento — rede fora, atualização do fornecedor, dado fora do padrão. O que separa uma integração bem-feita de uma mal-feita não é nunca falhar: é falhar de forma visível, reprocessável e sem perder dado. Isso significa registro de cada tentativa, alerta para uma pessoa nomeada e capacidade de reenviar o que ficou para trás sem duplicar. Integração que cai em silêncio é pior que redigitação, porque ninguém desconfia do número.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-de-sistemas-7">
                    <span>Precisamos ter equipe de TI para manter isso?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-de-sistemas-7" data-faq-body="">
                    <p>
                      Não é necessário. Quando existe equipe interna, trabalhamos junto com ela desde o desenho, para que a manutenção fique possível. Quando não existe, conduzimos a implantação e preparamos as pessoas da operação para usar e acompanhar o que foi entregue, com a documentação e o monitoramento necessários para que uma falha seja percebida sem depender de conhecimento técnico profundo.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-integracao-de-sistemas-8">
                    <span>De quem são o código e os dados?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-integracao-de-sistemas-8" data-faq-body="">
                    <p>
                      Seus. O que é construído para a sua empresa é da sua empresa, com o código entregue e documentado. Os dados permanecem sob a sua titularidade e ficam em ambiente de nuvem contratado por você — a Origami Lab é credenciada AWS. Isso importa especialmente em integração, porque é a camada que, mal contratada, cria a dependência mais difícil de desfazer.
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
                  <a className="ol-next__card" href="/desenvolvimento-de-software">
                    <b>Desenvolvimento de software sob medida</b>
                    <span>Como a Origami Lab constrói e implanta sistemas para o que o ERP não cobre, do diagnóstico à autonomia do time.</span>
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
                {"Todo dado redigitado é uma "}
                <em className="ol-em">decisão atrasada</em>
                .
              </h2>
              <p className="ol-cta__lead">
                A primeira conversa dura 30 minutos e serve para mapear onde o dado da sua operação para, volta atrás ou se perde. Se o caminho for simples, a gente diz — e às vezes é.
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
