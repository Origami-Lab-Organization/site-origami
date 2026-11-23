import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import { atualizacaoDaPagina } from "@/conteudo/paginas";
import { ORGANIZACAO, SITE_NODE } from "@/lib/seo/estruturados";

export const metadata: Metadata = {
  "title": {
    "absolute": "Software sob medida: quando vale e o que define o custo | Origami Lab"
  },
  "description": "O critério para decidir entre software pronto e sob medida, os cinco fatores que realmente definem o preço de um projeto e o que sua empresa precisa receber no fim.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/software-sob-medida"
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
    "url": "https://www.origamilab.com.br/software-sob-medida",
    "siteName": "Origami Lab",
    "title": "Software sob medida: quando vale, quando não vale e o que define o custo",
    "description": "O critério para decidir entre software pronto e sob medida, os cinco fatores que realmente definem o preço de um projeto e o que sua empresa precisa receber no fim.",
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
      "@id": "https://www.origamilab.com.br/software-sob-medida#webpage",
      "url": "https://www.origamilab.com.br/software-sob-medida",
      "name": "Software sob medida: quando vale, quando não vale e o que define o custo",
      "description": "O critério para decidir entre software pronto e sob medida, os cinco fatores que realmente definem o preço de um projeto e o que sua empresa precisa receber no fim.",
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
        "@id": "https://www.origamilab.com.br/software-sob-medida#breadcrumb"
      },
      "dateModified": atualizacaoDaPagina("/software-sob-medida")
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.origamilab.com.br/software-sob-medida#breadcrumb",
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
          "name": "Software sob medida",
          "item": "https://www.origamilab.com.br/software-sob-medida"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.origamilab.com.br/software-sob-medida#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto custa desenvolver um software sob medida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não há resposta honesta sem olhar o processo, e desconfie de quem dá preço por telefone. O que determina o custo são cinco fatores: quantos sistemas precisam se integrar, quantas regras de exceção o processo tem, quantos usuários e turnos serão atendidos, quanto histórico precisa ser migrado e quantas pessoas precisam mudar de rotina. Número de telas é o pior estimador possível. O caminho usual é um diagnóstico curto que produz escopo, prioridade e faixa de investimento, e depois preço fechado por fase."
          }
        },
        {
          "@type": "Question",
          "name": "É melhor comprar um sistema pronto ou desenvolver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende do processo, não da empresa — e quase sempre a resposta é os dois, em partes diferentes. Para processos padrão de mercado ou obrigação legal, como fiscal, contábil e folha, produto pronto é mais barato e é mantido por outro. Para o processo específico em que a sua empresa ganha ou perde margem, o pacote genérico obriga a operação a caber nele. O pior cenário é o meio-termo: customizar pesadamente um produto pronto custa como sob medida, mantém as limitações do pronto e quebra na próxima atualização do fornecedor."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva um projeto desses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O diagnóstico inicial leva de duas a quatro semanas dentro da operação. O restante depende do escopo priorizado ali, e o formato que funciona é entrega quinzenal: pedaços que entram em uso antes de o projeto inteiro terminar. Projeto que só entrega no fim acumula risco e descobre tarde demais que o desenho estava errado."
          }
        },
        {
          "@type": "Question",
          "name": "De quem fica o código e os dados?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Da sua empresa. O código é entregue e documentado, e os dados permanecem sob a sua titularidade, em ambiente de nuvem contratado por você — a Origami Lab é credenciada AWS. Isso precisa estar acordado antes de começar, e não descoberto no fim do projeto."
          }
        },
        {
          "@type": "Question",
          "name": "E se eu quiser trocar de fornecedor depois?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deve ser possível, e isso é decidido no começo, não no fim. O que permite a troca é tecnologia comum de mercado, documentação viva de arquitetura e integrações, código no repositório da sua empresa e infraestrutura na sua conta. Tecnologia exótica, ausência de documentação e hospedagem na conta do fornecedor criam uma dependência que nenhuma cláusula contratual desfaz na prática."
          }
        },
        {
          "@type": "Question",
          "name": "Precisamos ter uma equipe de TI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não é necessário. Quando existe, trabalhamos junto com ela desde o desenho, para que a manutenção seja possível internamente. Quando não existe, conduzimos a implantação e preparamos as pessoas da operação para usar e manter o que foi entregue, com treinamento até a equipe conduzir com autonomia."
          }
        },
        {
          "@type": "Question",
          "name": "Desenvolvimento de software se enquadra na Lei do Bem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nem sempre, e essa distinção protege a empresa. O que se enquadra é desenvolvimento com incerteza técnica real: no início não se sabia se a abordagem funcionaria, e foi preciso testar e descartar caminhos. Construir um sistema usando tecnologia conhecida, por mais trabalhoso, caro e valioso que seja, é execução e não pesquisa. Num mesmo projeto é comum haver as duas coisas — e a parte que se enquadra precisa estar separada e documentada como tal desde o início, não reconstruída no fim do ano."
          }
        },
        {
          "@type": "Question",
          "name": "Vocês substituem o nosso ERP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Na maioria dos casos o ERP continua sendo a base de registro fiscal e financeiro, e construímos em volta dele o que ele não cobre, conectando os sistemas que hoje não conversam entre si. Trocar o ERP é um projeto caro que raramente resolve a causa do problema, porque a lacuna costuma estar justamente na parte específica da operação, que nenhum ERP genérico cobriria."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.origamilab.com.br/software-sob-medida#service",
      "name": "Desenvolvimento de software sob medida e implantação",
      "description": "Desenvolvimento de sistemas construídos a partir do processo real da operação, com integração aos sistemas existentes, implantação e treinamento até a autonomia da equipe.",
      "serviceType": "Desenvolvimento de software sob medida",
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
      "url": "https://www.origamilab.com.br/software-sob-medida"
    }
  ]
};

export default function PaginaSoftwareSobMedida() {
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
              <span>Software sob medida</span>
            </nav>
            <h1 className="ol-page__title">Software sob medida: quando vale, quando não vale e o que define o custo</h1>
            <p className="ol-page__lead">
              {"Software sob medida vale a pena quando automatiza o processo que "}
              <strong>diferencia</strong>
              {" a empresa no mercado — e não vale quando existe produto pronto que resolve bem o suficiente por uma fração do preço. Folha de pagamento, contabilidade, e-mail e emissão fiscal são prateleira: ninguém ganha dinheiro fazendo isso de um jeito diferente. Já a forma como uma indústria programa a produção, apura o custo de uma ordem, controla qualidade ou acompanha uma obra costuma ser específica o bastante para nenhum pacote cobrir — e é aí que o sob medida se paga. O custo, por sua vez, não vem de “quantas telas”: vem de quantas integrações, quantas regras de exceção e quantas pessoas precisam mudar de rotina."}
            </p>
            <div className="ol-page__actions">
              <a className="ol-btn ol-btn--primary" href="/conversar">
                {"Discutir o meu caso em 30 minutos "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="#faq">Ir para as perguntas</a>
            </div>
            <p className="ol-page__meta">Origami Lab · Formiga, Minas Gerais · Studio de Produto para indústria, engenharia e serviços</p>
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
                    <a href="#pergunta-certa">A pergunta certa</a>
                  </li>
                  <li>
                    <a href="#quando-vale">Quando cada um ganha</a>
                  </li>
                  <li>
                    <a href="#custo">O que define o custo</a>
                  </li>
                  <li>
                    <a href="#orcamento">Orçamento fechado antes do diagnóstico</a>
                  </li>
                  <li>
                    <a href="#receber">O que você precisa receber</a>
                  </li>
                  <li>
                    <a href="#dependencia">O risco de dependência</a>
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
                  {"Quase toda conversa sobre software sob medida começa errada, na pergunta \"pronto ou sob medida?\". A empresa não escolhe um dos dois: ela escolhe qual parte da operação merece cada um."}
                </p>
                <h2 id="pergunta-certa">{"A pergunta certa não é \"pronto ou sob medida\""}</h2>
                <p>
                  Nenhuma empresa desenvolve o próprio sistema de folha de pagamento, e nenhuma empresa compra pronto o sistema que controla aquilo que a torna melhor que o concorrente. A decisão é por processo, não por empresa.
                </p>
                <p>
                  {"O critério é: "}
                  <strong>esse processo é onde a empresa ganha ou perde para o mercado?</strong>
                  {" Se a resposta é não, produto pronto — é mais barato, é mantido por outro e melhora sem você pagar por isso. Se a resposta é sim, o pacote genérico vai obrigar a sua operação a caber nele, e a operação vai resistir, porque foi ela que deu certo até aqui."}
                </p>
                <h2 id="quando-vale">Quando cada um ganha</h2>
                <div className="ol-tablewrap">
                  <table className="ol-table">
                    <thead>
                      <tr>
                        <th scope="col">Produto pronto ganha quando…</th>
                        <th scope="col">Sob medida ganha quando…</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>O processo é padrão de mercado ou obrigação legal — fiscal, contábil, folha.</td>
                        <td>O processo é específico e é onde a margem é ganha ou perdida.</td>
                      </tr>
                      <tr>
                        <td>Existe produto que resolve boa parte do problema sem adaptação profunda.</td>
                        <td>Os produtos avaliados cobrem pedaços e nenhum fecha o ciclo.</td>
                      </tr>
                      <tr>
                        <td>A empresa consegue e aceita ajustar o processo ao software.</td>
                        <td>Ajustar o processo ao software destruiria o que hoje funciona.</td>
                      </tr>
                      <tr>
                        <td>O volume de usuários é pequeno e a rotina, simples.</td>
                        <td>O sistema precisa conversar com o que já existe e com o chão de fábrica.</td>
                      </tr>
                      <tr>
                        <td>A urgência é maior que a aderência.</td>
                        <td>A informação precisa ser confiável em tempo real para decidir.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Um alerta honesto: adaptar pesadamente um produto pronto costuma ser o pior dos dois mundos. Custa como sob medida, tem as limitações do pronto e quebra na próxima atualização do fornecedor. Quando o volume de customização passa de certo ponto, a conta já virou.
                </p>
                <h2 id="custo">O que realmente define o custo</h2>
                <p>
                  {"Perguntar \"quanto custa um sistema\" é como perguntar quanto custa uma obra: depende do que se está construindo. Mas os fatores que puxam o preço são sempre os mesmos cinco, e nenhum deles é \"número de telas\":"}
                </p>
                <div className="ol-key">
                  <div className="ol-key__title">Os cinco fatores</div>
                  <dl>
                    <dt>1. Integrações</dt>
                    <dd>
                      Cada sistema que precisa conversar com o novo adiciona trabalho de análise, desenvolvimento e tratamento de falha. É o item que mais varia — e o que mais é subestimado em orçamento feito sem olhar a operação.
                    </dd>
                    <dt>2. Regras de exceção</dt>
                    <dd>
                      {"O caminho normal do processo é a parte barata. O custo está nos \"menos quando\", que só aparecem conversando com quem executa. Um pedido especial, um cliente com regra própria, o que fazer quando falta material."}
                    </dd>
                    <dt>3. Volume de usuários e turnos</dt>
                    <dd>
                      Dez pessoas num escritório e cento e vinte em três turnos são projetos diferentes — em desempenho, em controle de acesso, em suporte e principalmente em treinamento.
                    </dd>
                    <dt>4. Migração de dados</dt>
                    <dd>
                      Trazer o histórico costuma custar mais que construir a tela que o exibe, porque o dado antigo está sujo, incompleto e em formatos que ninguém documentou.
                    </dd>
                    <dt>5. Mudança de rotina</dt>
                    <dd>
                      O maior custo raramente é o desenvolvimento. É fazer cem pessoas trabalharem de um jeito novo — e esse custo é da sua empresa, não do fornecedor, mesmo quando ninguém o coloca na planilha.
                    </dd>
                  </dl>
                </div>
                <h2 id="orcamento">Por que orçamento fechado antes do diagnóstico é um mau sinal</h2>
                <p>
                  Quem dá preço de software por telefone está fazendo uma de duas coisas: chutando alto para se proteger, ou chutando baixo para ganhar a negociação e brigar por aditivo depois. Nos dois casos quem paga a diferença é você.
                </p>
                <p>
                  Nenhum dos cinco fatores acima é conhecido antes de alguém olhar o processo real — que quase nunca é o processo desenhado. É por isso que projetos sérios começam por um diagnóstico curto e pago, que produz escopo, prioridade e faixa de investimento com base no que foi visto. Depois disso, preço fechado por fase é perfeitamente possível, e você aprova uma fase de cada vez.
                </p>
                <h2 id="receber">O que você precisa receber no fim</h2>
                <p>Isso precisa estar no contrato antes de começar, não descoberto no fim:</p>
                <ul>
                  <li>
                    <strong>O código-fonte</strong>
                    , entregue e com propriedade sua.
                  </li>
                  <li>
                    <strong>Documentação</strong>
                    {" suficiente para outro time assumir: arquitetura, integrações, decisões e o porquê delas."}
                  </li>
                  <li>
                    <strong>Os dados</strong>
                    , sob a sua titularidade, em ambiente de nuvem contratado por você.
                  </li>
                  <li>
                    <strong>Acesso ao ambiente</strong>
                    {" — contas, repositório, infraestrutura — em nome da sua empresa."}
                  </li>
                  <li>
                    <strong>A equipe treinada</strong>
                    , com gente da operação capaz de usar e explicar o sistema sem o fornecedor.
                  </li>
                </ul>
                <h2 id="dependencia">O risco de dependência de fornecedor</h2>
                <p>
                  É o risco real de contratar sob medida, e ele não se resolve com cláusula: resolve-se com decisões técnicas. Sistema construído em tecnologia comum, com documentação viva, código no seu repositório e infraestrutura na sua conta pode trocar de fornecedor. Sistema em tecnologia exótica, sem documentação e hospedado na conta do fornecedor, não pode — e você descobre isso no pior momento possível.
                </p>
                <p>
                  {"Uma pergunta que revela muito, logo na primeira conversa: "}
                  <em>se eu quiser trocar de fornecedor daqui a dois anos, o que exatamente eu levo comigo?</em>
                  {" A resposta e a naturalidade dela dizem mais que qualquer proposta."}
                </p>
                <h2 id="origami">Como a Origami Lab trabalha</h2>
                <p>
                  Quatro fases, entregas curtas, e cada uma precisa provar resultado antes de a próxima começar: diagnóstico dentro da operação (de duas a quatro semanas), desenho com quem executa, construção em ciclos com entrega quinzenal e implantação com treinamento até a autonomia da equipe. Você aprova cada fase antes de ela começar, e o que construímos é integrado ao que já existe — o ERP continua sendo a base.
                </p>
                <p>
                  {"Na prática, a maior parte dos projetos tem tanto de "}
                  <a href="/integracao-de-sistemas">integração</a>
                  {" quanto de desenvolvimento novo. E quando há incerteza técnica real no caminho, parte do investimento pode se enquadrar na Lei do Bem ou ser financiada por recurso de inovação."}
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
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-software-sob-medida-1">
                    <span>Quanto custa desenvolver um software sob medida?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-software-sob-medida-1" data-faq-body="">
                    <p>
                      Não há resposta honesta sem olhar o processo, e desconfie de quem dá preço por telefone. O que determina o custo são cinco fatores: quantos sistemas precisam se integrar, quantas regras de exceção o processo tem, quantos usuários e turnos serão atendidos, quanto histórico precisa ser migrado e quantas pessoas precisam mudar de rotina. Número de telas é o pior estimador possível. O caminho usual é um diagnóstico curto que produz escopo, prioridade e faixa de investimento, e depois preço fechado por fase.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-software-sob-medida-2">
                    <span>É melhor comprar um sistema pronto ou desenvolver?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-software-sob-medida-2" data-faq-body="">
                    <p>
                      Depende do processo, não da empresa — e quase sempre a resposta é os dois, em partes diferentes. Para processos padrão de mercado ou obrigação legal, como fiscal, contábil e folha, produto pronto é mais barato e é mantido por outro. Para o processo específico em que a sua empresa ganha ou perde margem, o pacote genérico obriga a operação a caber nele. O pior cenário é o meio-termo: customizar pesadamente um produto pronto custa como sob medida, mantém as limitações do pronto e quebra na próxima atualização do fornecedor.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-software-sob-medida-3">
                    <span>Quanto tempo leva um projeto desses?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-software-sob-medida-3" data-faq-body="">
                    <p>
                      O diagnóstico inicial leva de duas a quatro semanas dentro da operação. O restante depende do escopo priorizado ali, e o formato que funciona é entrega quinzenal: pedaços que entram em uso antes de o projeto inteiro terminar. Projeto que só entrega no fim acumula risco e descobre tarde demais que o desenho estava errado.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-software-sob-medida-4">
                    <span>De quem fica o código e os dados?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-software-sob-medida-4" data-faq-body="">
                    <p>
                      Da sua empresa. O código é entregue e documentado, e os dados permanecem sob a sua titularidade, em ambiente de nuvem contratado por você — a Origami Lab é credenciada AWS. Isso precisa estar acordado antes de começar, e não descoberto no fim do projeto.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-software-sob-medida-5">
                    <span>E se eu quiser trocar de fornecedor depois?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-software-sob-medida-5" data-faq-body="">
                    <p>
                      Deve ser possível, e isso é decidido no começo, não no fim. O que permite a troca é tecnologia comum de mercado, documentação viva de arquitetura e integrações, código no repositório da sua empresa e infraestrutura na sua conta. Tecnologia exótica, ausência de documentação e hospedagem na conta do fornecedor criam uma dependência que nenhuma cláusula contratual desfaz na prática.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-software-sob-medida-6">
                    <span>Precisamos ter uma equipe de TI?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-software-sob-medida-6" data-faq-body="">
                    <p>
                      Não é necessário. Quando existe, trabalhamos junto com ela desde o desenho, para que a manutenção seja possível internamente. Quando não existe, conduzimos a implantação e preparamos as pessoas da operação para usar e manter o que foi entregue, com treinamento até a equipe conduzir com autonomia.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-software-sob-medida-7">
                    <span>Desenvolvimento de software se enquadra na Lei do Bem?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-software-sob-medida-7" data-faq-body="">
                    <p>
                      Nem sempre, e essa distinção protege a empresa. O que se enquadra é desenvolvimento com incerteza técnica real: no início não se sabia se a abordagem funcionaria, e foi preciso testar e descartar caminhos. Construir um sistema usando tecnologia conhecida, por mais trabalhoso, caro e valioso que seja, é execução e não pesquisa. Num mesmo projeto é comum haver as duas coisas — e a parte que se enquadra precisa estar separada e documentada como tal desde o início, não reconstruída no fim do ano.
                    </p>
                  </div>
                </div>
                <div className="ol-faq__item" data-faq="">
                  <button className="ol-faq__trigger" type="button" aria-expanded="false" aria-controls="faq-software-sob-medida-8">
                    <span>Vocês substituem o nosso ERP?</span>
                    {" "}
                    <span className="ol-faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="ol-faq__body" id="faq-software-sob-medida-8" data-faq-body="">
                    <p>
                      Não. Na maioria dos casos o ERP continua sendo a base de registro fiscal e financeiro, e construímos em volta dele o que ele não cobre, conectando os sistemas que hoje não conversam entre si. Trocar o ERP é um projeto caro que raramente resolve a causa do problema, porque a lacuna costuma estar justamente na parte específica da operação, que nenhum ERP genérico cobriria.
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
                  <a className="ol-next__card" href="/unificacao-de-produtos-digitais">
                    <b>De produtos a uma plataforma digital</b>
                    <span>Uma experiência real: discovery, desenvolvimento por etapas e os marcos observados no projeto.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/integracao-de-sistemas">
                    <b>Integração de sistemas</b>
                    <span>O que fazer quando o ERP não cobre a operação e o dado volta a nascer numa planilha.</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="ol-cta" id="contato">
            <div className="ol-cta__glow" aria-hidden="true" />
            <div className="ol-cta__inner">
              <h2 className="ol-cta__title">
                {"Antes de orçar software, é preciso "}
                <em className="ol-em">olhar a operação</em>
                .
              </h2>
              <p className="ol-cta__lead">
                Trinta minutos para entender o processo, o que já existe e onde está o ganho. Se a resposta for comprar um produto pronto em vez de desenvolver, a gente diz — já dissemos antes.
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
