import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import "@/estilos/plataforma.css";
import { atualizacaoDaPagina } from "@/conteudo/paginas";
import { ORGANIZACAO, SITE_NODE } from "@/lib/seo/estruturados";

export const metadata: Metadata = {
  "title": {
    "absolute": "Como unificar produtos digitais em uma plataforma | Origami Lab"
  },
  "description": "Da descoberta à produção: uma experiência real de unificação de produtos, acesso, cobrança e jornadas em uma plataforma digital.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/unificacao-de-produtos-digitais"
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
    "url": "https://www.origamilab.com.br/unificacao-de-produtos-digitais",
    "siteName": "Origami Lab",
    "title": "Como unificar produtos digitais em uma plataforma",
    "description": "Da descoberta à produção: uma experiência real de unificação de produtos, acesso, cobrança e jornadas em uma plataforma digital.",
    "images": [
      {
        "url": "https://www.origamilab.com.br/assets/og-cover.jpg",
        "width": 1200,
        "height": 630,
        "type": "image/jpeg",
        "alt": "Origami Lab — produtos, jornadas e tecnologia conectados."
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "images": [
      {
        "url": "https://www.origamilab.com.br/assets/og-cover.jpg",
        "alt": "Origami Lab — produtos, jornadas e tecnologia conectados."
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
      "@id": "https://www.origamilab.com.br/unificacao-de-produtos-digitais#webpage",
      "url": "https://www.origamilab.com.br/unificacao-de-produtos-digitais",
      "name": "Como unificar produtos digitais em uma plataforma",
      "description": "Da descoberta à produção: uma experiência real de unificação de produtos, acesso, cobrança e jornadas em uma plataforma digital.",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "breadcrumb": {
        "@id": "https://www.origamilab.com.br/unificacao-de-produtos-digitais#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.origamilab.com.br/unificacao-de-produtos-digitais#article"
      },
      "dateModified": atualizacaoDaPagina("/unificacao-de-produtos-digitais")
    },
    {
      "@type": "Article",
      "@id": "https://www.origamilab.com.br/unificacao-de-produtos-digitais#article",
      "headline": "Como unificar produtos digitais em uma plataforma",
      "description": "Da descoberta à produção: uma experiência real de unificação de produtos, acesso, cobrança e jornadas em uma plataforma digital.",
      "inLanguage": "pt-BR",
      "mainEntityOfPage": {
        "@id": "https://www.origamilab.com.br/unificacao-de-produtos-digitais#webpage"
      },
      "author": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "image": "https://www.origamilab.com.br/assets/og-cover.jpg",
      "about": [
        {
          "@type": "Thing",
          "name": "Unificação de produtos digitais"
        }
      ],
      "dateModified": atualizacaoDaPagina("/unificacao-de-produtos-digitais")
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.origamilab.com.br/unificacao-de-produtos-digitais#breadcrumb",
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
          "name": "Unificação de produtos digitais",
          "item": "https://www.origamilab.com.br/unificacao-de-produtos-digitais"
        }
      ]
    }
  ]
};

export default function PaginaUnificacaoDeProdutosDigitais() {
  return (
    <>
      <Navegacao faqNaPagina />
      <main className="ol-root ol-platform" id="conteudo">
        <header className="ol-page__hero ol-platform__hero">
          <div className="ol-page__glow" aria-hidden="true" />
          <div className="ol-page__inner">
            <nav className="ol-crumb" aria-label="Você está em">
              <a href="/">Origami Lab</a>
              <span aria-hidden="true">/</span>
              <span>Unificação de produtos digitais</span>
            </nav>
            <div className="ol-platform__opening">
              <div>
                <p className="ol-platform__eyebrow">Produto, integração e experiência</p>
                <h1 className="ol-page__title">
                  {"Como unificar produtos digitais em "}
                  <em className="ol-em">uma plataforma</em>
                </h1>
                <p className="ol-page__lead">
                  Uma conta, uma jornada e uma base compartilhada para serviços que antes funcionavam separados. Uma experiência da Origami Lab, da descoberta à entrada em produção.
                </p>
                <div className="ol-page__actions">
                  <a className="ol-btn ol-btn--primary" href="#experiencia">Conhecer a experiência</a>
                  {" "}
                  <a className="ol-btn ol-btn--ghost" href="#contato">Conversar sobre meu projeto</a>
                </div>
              </div>
              <figure className="ol-platform__diagram" aria-labelledby="diagrama-plataforma">
                <figcaption id="diagrama-plataforma">De serviços separados a uma base compartilhada</figcaption>
                <ul className="ol-platform__products" aria-label="Serviços">
                  <li>Assinatura</li>
                  <li>Verificação</li>
                  <li>Certificação</li>
                </ul>
                <div className="ol-platform__connector" aria-hidden="true" />
                <div className="ol-platform__foundation">
                  <span>Uma plataforma</span>
                  <strong>Uma experiência conectada.</strong>
                  <ul>
                    <li>Acesso</li>
                    <li>Planos e cobrança</li>
                    <li>Consumo</li>
                    <li>APIs</li>
                  </ul>
                </div>
              </figure>
            </div>
            <p className="ol-page__meta">Conteúdo: Origami Lab · Experiência de projeto · Produtos e serviços digitais</p>
          </div>
        </header>
        <div className="ol-over">
          <section className="ol-platform__evidence" aria-labelledby="evidencias">
            <div className="ol-platform__evidence-inner">
              <h2 className="ol-platform__eyebrow" id="evidencias">Marcos do projeto</h2>
              <dl className="ol-platform__metrics">
                <div>
                  <dt>
                    {"100 "}
                    <span>dias corridos</span>
                  </dt>
                  <dd>Do início do desenvolvimento à primeira entrada em produção, em maio de 2026.</dd>
                </div>
                <div>
                  <dt>
                    {"11 "}
                    <span>minutos em média</span>
                  </dt>
                  <dd>Até o primeiro “Hello World”, em teste com 15 desenvolvedores sem contato prévio com a plataforma.</dd>
                </div>
                <div>
                  <dt>
                    {"6 "}
                    <span>áreas envolvidas</span>
                  </dt>
                  <dd>Na transferência de conhecimento, com treinamentos e materiais de apoio nos 20 dias finais.</dd>
                </div>
              </dl>
              <p className="ol-platform__source">
                Dados do registro do projeto da Origami Lab, consolidado em agosto de 2026. O teste de API mede o primeiro uso, e a entrada em produção é um marco intermediário da entrega.
              </p>
            </div>
          </section>
          <section className="ol-doc" aria-label="A experiência e os aprendizados do projeto">
            <div className="ol-doc__inner">
              <aside className="ol-toc">
                <nav aria-label="Nesta página">
                  <div className="ol-toc__title">Nesta página</div>
                  <ul className="ol-toc__list">
                    <li>
                      <a href="#problema">O custo da fragmentação</a>
                    </li>
                    <li>
                      <a href="#experiencia">Uma experiência real</a>
                    </li>
                    <li>
                      <a href="#descoberta">Começar pela jornada</a>
                    </li>
                    <li>
                      <a href="#construcao">Construir por etapas</a>
                    </li>
                    <li>
                      <a href="#resultados">O que foi observado</a>
                    </li>
                    <li>
                      <a href="#aprendizados">O que levar para seu projeto</a>
                    </li>
                    <li>
                      <a href="#faq">Perguntas frequentes</a>
                    </li>
                  </ul>
                </nav>
              </aside>
              <article className="ol-prose">
                <h2 id="problema">Quando cada produto exige que o cliente comece de novo</h2>
                <p className="ol-prose__lead">
                  Uma empresa pode ter vários produtos complementares e ainda oferecer uma experiência fragmentada. O cliente repete cadastros, administra credenciais diferentes e precisa entender uma nova lógica a cada contratação.
                </p>
                <p>
                  Por dentro, essa separação também pesa: equipes mantêm integrações distintas, o suporte precisa conhecer caminhos diferentes e a área comercial tem dificuldade para apresentar o conjunto da oferta.
                </p>
                <p>
                  Unificar produtos digitais envolve conectar acesso, planos, consumo, cobrança e documentação. O trabalho começa pela jornada que esses serviços precisam compartilhar e pelas dependências dos sistemas que já estão em operação.
                </p>
                <h2 id="experiencia">Uma plataforma para conectar serviços de confiança digital</h2>
                <p>
                  O projeto foi realizado para uma empresa de serviços de confiança digital, incluindo assinatura eletrônica, verificação e certificação. No início do projeto, seus produtos tinham contas, logins, documentações e experiências separados. Quem usava mais de um serviço precisava atravessar essas diferenças.
                </p>
                <p>
                  A Origami Lab trabalhou com as equipes do cliente no discovery e no desenvolvimento de uma plataforma para conectar essa oferta. A proposta reuniu uma experiência de acesso compartilhada, contratação de serviços, acompanhamento de consumo e recursos para quem integra as APIs.
                </p>
                <div className="ol-key">
                  <div className="ol-key__title">O projeto em contexto</div>
                  <dl>
                    <div>
                      <dt>Contexto</dt>
                      <dd>Empresa de serviços de confiança digital.</dd>
                    </div>
                    <div>
                      <dt>Atuação da Origami Lab</dt>
                      <dd>Discovery, desenvolvimento de produto digital e transferência de conhecimento.</dd>
                    </div>
                    <div>
                      <dt>Período</dt>
                      <dd>Projeto realizado entre 2025 e 2026, com entregas progressivas em produção.</dd>
                    </div>
                  </dl>
                </div>
                <h2 id="descoberta">Começar pelas pessoas que precisam usar a plataforma</h2>
                <p>
                  A descoberta combinou entrevistas, mapeamento dos sistemas existentes e um workshop presencial de quatro dias. Três grupos multidisciplinares desenharam as jornadas de quem gerencia a plataforma, de quem integra a API e de quem envia documentos para assinatura.
                </p>
                <p>
                  Essas jornadas deram origem a uma prototipação validada com os times e a diretoria. O alinhamento ajudou a transformar uma visão de plataforma em decisões sobre acesso, contratação e uso.
                </p>
                <p>
                  Uma hipótese orientou a priorização: permitir que uma pessoa criasse uma conta gratuita e experimentasse o serviço com poucas etapas antes de contratar. O desenvolvimento começou pelo trial e pelo uso self-service. Outras capacidades foram adicionadas em ciclos seguintes.
                </p>
                <h2 id="construcao">Uma base comum, construída em entregas sucessivas</h2>
                <p>
                  O desenvolvimento foi organizado em 11 sprints de 15 dias, com revisão das entregas a cada ciclo e encontros de estratégia com o cliente. A construção avançou por três frentes:
                </p>
                <ol className="ol-platform__stages">
                  <li>
                    <h3>Disponibilizar os primeiros serviços</h3>
                    <p>
                      Infraestrutura, identidade e acesso, autenticação multifator, verificação de documentos, assinatura, backoffice e plano de experimentação.
                    </p>
                  </li>
                  <li>
                    <h3>Conectar contratação e operação comercial</h3>
                    <p>
                      Compra de créditos, pagamento, modalidades de pós-pago, integração de contas e planos com o legado e conexão com o CRM.
                    </p>
                  </li>
                  <li>
                    <h3>Organizar a experiência de integração</h3>
                    <p>Portal para desenvolvedores, acesso às chaves de homologação e produção e documentação da API de assinatura.</p>
                  </li>
                </ol>
                <p>
                  Os sistemas existentes continuaram impondo dependências. Por isso, o escopo e a ordem das entregas foram refinados junto à equipe do cliente conforme o desenvolvimento avançava. Revisão técnica, testes e critérios de conclusão passaram a fazer parte da rotina de cada sprint.
                </p>
                <p>
                  {"Essa coordenação entre produto e "}
                  <a href="/integracao-de-sistemas">integração de sistemas</a>
                  {" é parte central do trabalho: cada nova capacidade precisa encontrar seu lugar numa operação que já existe."}
                </p>
                <h2 id="resultados">O que os marcos e os testes mostram</h2>
                <h3>Primeiro uso da API em 11 minutos, em média</h3>
                <p>
                  Um teste cronometrado com 15 desenvolvedores de diferentes níveis, sem contato prévio com a plataforma, registrou média de 11 minutos até o primeiro “Hello World”. A medição foi conduzida durante as sprints 9 e 10.
                </p>
                <p>
                  O indicador observa a experiência inicial de quem começa a usar a API. A meta do projeto era concluir esse primeiro passo em menos de sete dias; esse prazo era uma meta, não uma medição anterior. O resultado não representa o tempo necessário para integrar um sistema empresarial completo.
                </p>
                <h3>Primeira entrada em produção em 100 dias corridos</h3>
                <p>
                  A plataforma entrou em produção em maio de 2026, 100 dias corridos após o início do desenvolvimento. O acesso inicial permitiu uso real enquanto o trabalho nas demais capacidades continuava. Esse marco não corresponde à duração total do projeto, que também incluiu descoberta e transferência de conhecimento.
                </p>
                <h3>Conhecimento transferido para seis áreas</h3>
                <p>
                  Nos 20 dias finais, a transferência envolveu Customer Success, Comercial, Engenharia de Software e Arquitetura, Produto, Suporte e Infraestrutura. Cada área recebeu treinamento, espaço para dúvidas e materiais de utilização da plataforma.
                </p>
                <p>
                  A entrega incluiu documentação técnica, guias e um material executivo com a organização do conhecimento gerado. Também foram entregues recursos de medição de uso e acompanhamento comercial, criando condições para a empresa acompanhar a evolução da plataforma.
                </p>
                <h2 id="aprendizados">O que levar para um projeto de unificação</h2>
                <ul>
                  <li>
                    <strong>Mapear jornadas e dependências em conjunto.</strong>
                    {" A experiência desejada precisa ser discutida com quem conhece os sistemas que vão sustentá-la."}
                  </li>
                  <li>
                    <strong>Escolher um primeiro percurso completo.</strong>
                    {" Cadastro, experimentação e uso de um serviço podem orientar a primeira entrega, enquanto outras capacidades evoluem."}
                  </li>
                  <li>
                    <strong>Medir uma tarefa concreta.</strong>
                    {" O primeiro uso de uma API oferece um recorte observável da experiência de integração."}
                  </li>
                  <li>
                    <strong>Planejar a passagem para quem vai operar.</strong>
                    {" Comercial, suporte, produto e engenharia precisam de conhecimento para continuar o trabalho depois da entrega."}
                  </li>
                </ul>
                <p>
                  {"Essas escolhas ajudam a avaliar o que precisa ser compartilhado entre produtos e onde faz sentido investir em "}
                  <a href="/software-sob-medida">desenvolvimento de software sob medida</a>
                  . O desenho depende da operação, dos sistemas existentes e das jornadas que a empresa quer tornar possíveis.
                </p>
                <h2 id="faq">Perguntas sobre unificação de produtos digitais</h2>
                <details className="ol-platform__question">
                  <summary>Unificar produtos significa reescrever todos os sistemas?</summary>
                  <p>
                    O projeto precisa avaliar o que pode ser integrado, o que exige adaptação e o que precisa ser construído. Nesta experiência, a nova plataforma incluiu integração de contas e planos com o sistema legado. O ponto de partida é mapear essas dependências.
                  </p>
                </details>
                <details className="ol-platform__question">
                  <summary>Por onde começar uma plataforma com vários produtos?</summary>
                  <p>
                    Pelas jornadas dos usuários e pela relação entre os sistemas existentes. Neste projeto, equipes multidisciplinares desenharam as jornadas de gestores, desenvolvedores e operadores. A primeira entrega foi orientada pela criação de conta, experimentação e uso dos serviços.
                  </p>
                </details>
                <details className="ol-platform__question">
                  <summary>Os prazos e resultados deste projeto valem para outra empresa?</summary>
                  <p>
                    Os números descrevem este projeto e as condições de medição apresentadas nesta página. O escopo, as dependências técnicas e a disponibilidade dos times precisam ser avaliados para estimar outro projeto.
                  </p>
                </details>
              </article>
            </div>
          </section>
          <section className="ol-next" aria-labelledby="relacionadas">
            <div className="ol-next__inner">
              <h2 className="ol-next__title" id="relacionadas">Decisões que fazem parte desse caminho</h2>
              <ul className="ol-next__grid">
                <li>
                  <a className="ol-next__card" href="/integracao-de-sistemas">
                    <b>Integração de sistemas</b>
                    <span>Como conectar a operação ao que já existe e lidar com as dependências do legado.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/software-sob-medida">
                    <b>Software sob medida</b>
                    <span>Como avaliar o que construir, o que integrar e o que determina o investimento.</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="ol-cta" id="contato">
            <div className="ol-cta__glow" aria-hidden="true" />
            <div className="ol-cta__inner">
              <h2 className="ol-cta__title">
                {"Seus produtos podem compartilhar "}
                <em className="ol-em">o próximo capítulo</em>
                .
              </h2>
              <p className="ol-cta__lead">Vamos entender as jornadas, os sistemas e as dependências que precisam se conectar na sua empresa.</p>
              <div className="ol-cta__actions">
                <a className="ol-btn ol-btn--primary ol-btn--lg" href="/conversar">Conversar sobre minha plataforma</a>
                {" "}
                <a className="ol-btn ol-btn--ghost" href="https://wa.me/553198055189?text=Ol%C3%A1!%20Li%20a%20experi%C3%AAncia%20de%20unifica%C3%A7%C3%A3o%20de%20produtos%20e%20quero%20conversar%20sobre%20unifica%C3%A7%C3%A3o%20de%20produtos%20digitais." target="_blank" rel="noopener">Falar no WhatsApp</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Rodape />
      <DadosEstruturados dados={DADOS_ESTRUTURADOS} />
      <ScriptsDaPagina scripts={["pagina"]} />
    </>
  );
}
