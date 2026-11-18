import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";
import { PreloadDaFonteSerifada } from "@/components/PreloadDaFonteSerifada";

export const metadata: Metadata = {
  "title": {
    "absolute": "Cobrança automática via WhatsApp: case Retífica | Origami Lab"
  },
  "description": "Veja como a Retífica Formiguense recuperou dívidas em atraso e ganhou controle da inadimplência com uma régua de cobrança automática via WhatsApp.",
  "alternates": {
    "canonical": "https://www.origamilab.com.br/cases/cobranca-automatica-whatsapp-retifica-formiguense"
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
    "url": "https://www.origamilab.com.br/cases/cobranca-automatica-whatsapp-retifica-formiguense",
    "siteName": "Origami Lab",
    "title": "Cobrança automática via WhatsApp: case Retífica Formiguense",
    "description": "Uma régua de cobrança automática via WhatsApp, integrada ao ERP, transformou a recuperação de dívidas da Retífica Formiguense em processo da empresa.",
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
    {
      "@type": "Article",
      "@id": "https://www.origamilab.com.br/cases/cobranca-automatica-whatsapp-retifica-formiguense#article",
      "headline": "Como a Retífica Formiguense recuperou dívidas em atraso com um sistema de cobrança automático via WhatsApp",
      "description": "Régua de cobrança automática via WhatsApp integrada ao ERP, com nove marcos, painel de inadimplência e recuperação de dívidas desde os primeiros dias.",
      "url": "https://www.origamilab.com.br/cases/cobranca-automatica-whatsapp-retifica-formiguense",
      "inLanguage": "pt-BR",
      "image": "https://www.origamilab.com.br/assets/og-cover.jpg",
      "keywords": "cobrança automática via WhatsApp, recuperação de dívidas, régua de cobrança, inadimplência, automação de cobrança, cobrança integrada ao ERP",
      "author": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "publisher": {
        "@id": "https://www.origamilab.com.br/#org"
      },
      "about": {
        "@type": "Organization",
        "name": "Retífica Formiguense"
      },
      "mentions": [
        {
          "@type": "SoftwareApplication",
          "name": "Retipay",
          "applicationCategory": "BusinessApplication"
        }
      ],
      "isPartOf": {
        "@id": "https://www.origamilab.com.br/#site"
      },
      "dateModified": "2026-09-25"
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
          "name": "Cases",
          "item": "https://www.origamilab.com.br/cases"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Retífica Formiguense",
          "item": "https://www.origamilab.com.br/cases/cobranca-automatica-whatsapp-retifica-formiguense"
        }
      ]
    }
  ]
};

export default function PaginaCasesCobrancaAutomaticaWhatsappRetificaFormiguense() {
  return (
    <>
      <Navegacao ativo="cases" />
      <div className="ol-root ol-root--case" id="conteudo">
        {/* ==================== Abertura ==================== */}
        <section className="ol-phero">
          <div className="ol-phero__glow" aria-hidden="true" />
          <div className="ol-phero__inner">
            <nav className="ol-crumb" aria-label="Trilha de navegação">
              <a href="/">Início</a>
              {" "}
              <i aria-hidden="true">/</i>
              {" "}
              <a href="/cases">Cases</a>
              {" "}
              <i aria-hidden="true">/</i>
              {" "}
              <span aria-current="page">Retífica Formiguense</span>
            </nav>
            <span className="ol-kicker" data-anim="">Retífica e usinagem</span>
            <h1 className="ol-phero__title" data-anim="" data-d="1">
              {"Como a Retífica Formiguense recuperou dívidas em atraso com um sistema de "}
              <em className="ol-em">cobrança automático via WhatsApp</em>
            </h1>
            <p className="ol-phero__lead" data-anim="" data-d="2">
              Uma régua de cobrança automática via WhatsApp, integrada ao ERP que a empresa já usava, transformou a recuperação de dívidas de um esforço manual em um processo automático.
            </p>
            <dl className="ol-facts" data-anim="" data-d="3">
              <div>
                <dt>Cliente</dt>
                <dd>Retífica Formiguense</dd>
              </div>
              <div>
                <dt>Setor</dt>
                <dd>Retífica e usinagem</dd>
              </div>
              <div>
                <dt>Solução</dt>
                <dd>Retipay, régua de cobrança</dd>
              </div>
              <div>
                <dt>Integração</dt>
                <dd>ERP e WhatsApp</dd>
              </div>
            </dl>
          </div>
        </section>
        {/* ==================== Corpo do case ==================== */}
        <section className="ol-case">
          <div className="ol-case__inner">
            <div className="ol-case__main">
              <article className="ol-case__block" data-anim="">
                <h2>O desafio: inadimplência crescente e sem visibilidade</h2>
                <div className="ol-prose">
                  <p>
                    Na Retífica Formiguense, avisar cada cliente no dia certo dependia de alguém lembrar. Não havia calendário de cobrança, não havia registro do que tinha sido combinado e não havia indicador de inadimplência.
                  </p>
                  <p>
                    {"O ERP guardava os títulos, mas não respondia à pergunta que mais importa para a gestão: "}
                    <strong>quanto da carteira está em risco, e há quanto tempo</strong>
                    .
                  </p>
                  <p>
                    Quando o histórico foi reconstruído, o diagnóstico ficou evidente: entre janeiro e setembro de 2026, a parcela da carteira com mais de 15 dias de atraso saltou de 1,89% para 15,83%, um crescimento de mais de oito vezes em nove meses, e ninguém tinha como enxergar isso acontecendo.
                  </p>
                </div>
                <div className="ol-metrics ol-metrics--lead">
                  <div className="ol-metric">
                    <b>8x</b>
                    <span>
                      Foi quanto cresceu, em nove meses, a parcela da carteira com mais de 15 dias de atraso: de 1,89% em janeiro para 15,83% em setembro de 2026.
                    </span>
                  </div>
                  <div className="ol-metric">
                    <b>Sem processo</b>
                    <span>
                      A cobrança dependia de alguém lembrar. Não havia calendário, nem registro do que tinha sido combinado com cada cliente.
                    </span>
                  </div>
                  <div className="ol-metric">
                    <b>Sem visibilidade</b>
                    <span>O ERP guardava os títulos, mas nenhum indicador mostrava quanto da carteira estava em risco, e há quanto tempo.</span>
                  </div>
                </div>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>A solução: uma régua de cobrança automática via WhatsApp</h2>
                <div className="ol-prose">
                  <p>
                    {"A Origami Lab desenvolveu o "}
                    <strong>Retipay</strong>
                    , um sistema de cobrança automática que lê os títulos diretamente do ERP e posiciona cada um em uma régua de nove marcos ancorados no vencimento, de três dias antes a noventa dias depois. No dia exato de cada marco, o cliente recebe o aviso por WhatsApp, uma única vez, com registro do texto enviado.
                  </p>
                </div>
                <ul className="ol-deliver">
                  <li>
                    <span>01</span>
                    <div>
                      <h3>Régua de nove marcos</h3>
                      <p>
                        Cada título entra na régua a partir do vencimento, de três dias antes a noventa dias depois, e o aviso sai no dia exato do marco, uma única vez.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <h3>Política definida pelo financeiro</h3>
                      <p>A política de cobrança é definida pelo próprio financeiro, na tela, sem depender de desenvolvedor.</p>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <div>
                      <h3>Acordos, abonos e pausas registrados</h3>
                      <p>Acordos, abonos de encargos e pausas ficam registrados com responsável e motivo.</p>
                    </div>
                  </li>
                  <li>
                    <span>04</span>
                    <div>
                      <h3>Painel da diretoria</h3>
                      <p>
                        Recalculado a cada cinco minutos: inadimplência, aging da carteira, recebíveis dos próximos 90 dias e efetividade de cada marco da cobrança.
                      </p>
                    </div>
                  </li>
                </ul>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>Segurança como premissa da automação</h2>
                <div className="ol-prose">
                  <p>
                    {"O sistema "}
                    <strong>nunca escreve no ERP</strong>
                    , que segue como a única fonte de verdade sobre o dinheiro. Ele nasce em modo de simulação, executando o ciclo completo sem enviar nada, e só passa a disparar por decisão explícita do gestor.
                  </p>
                  <p>Dados pessoais são protegidos em conformidade com a LGPD.</p>
                </div>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>Resultados: recuperação de dívidas desde os primeiros dias</h2>
                <div className="ol-prose">
                  <p>
                    {"A primeira versão entrou em produção em "}
                    <strong>oito semanas</strong>
                    . Nos primeiros quatro dias de envio real, 100% dos avisos de cobrança foram entregues sem nenhuma falha e sem intervenção humana, e 41% do valor avisado já estava quitado.
                  </p>
                </div>
                <div className="ol-metrics">
                  <div className="ol-metric">
                    <b>100%</b>
                    <span>Dos avisos entregues, sem falha e sem intervenção humana</span>
                  </div>
                  <div className="ol-metric">
                    <b>41%</b>
                    <span>Do valor avisado quitado nos primeiros quatro dias</span>
                  </div>
                  <div className="ol-metric">
                    <b>9x</b>
                    <span>Mais conversão no aviso preventivo do que após o vencimento</span>
                  </div>
                  <div className="ol-metric">
                    <b>94%</b>
                    <span>Do que vence entra no caixa</span>
                  </div>
                </div>
                <div className="ol-results">
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 17 9 11l4 4 8-8" />
                        <path d="M21 7v6h-6" />
                      </svg>
                    </span>
                    <h3>Atraso de volta ao caixa</h3>
                    <p>
                      Nos títulos já vencidos, a cobrança automática via WhatsApp trouxe de volta ao caixa 7% do valor em atraso avisado em poucos dias, sem que ninguém precisasse pegar o telefone.
                    </p>
                  </article>
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 6v6l4 2" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <h3>Lembrar antes converte nove vezes mais</h3>
                    <p>
                      O aviso preventivo, enviado na véspera ou no dia do vencimento, teve conversão nove vezes maior que a cobrança após o vencimento (64% contra 7% do valor avisado). Lembrar antes custa pouco; correr atrás depois custa caro.
                    </p>
                  </article>
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <h3>O tamanho exato do problema</h3>
                    <p>94% do que vence entra no caixa, e os 6% que escorregam para o atraso estão identificados, título a título.</p>
                  </article>
                  <article className="ol-result">
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m19 12-7 7-7-7" />
                        <path d="M12 5v14" />
                      </svg>
                    </span>
                    <h3>Resposta na hora, com registro</h3>
                    <p>Todas as respostas de clientes passaram a ser atendidas na hora, com registro na ficha de cada um.</p>
                  </article>
                </div>
              </article>
              <article className="ol-case__block" data-anim="">
                <h2>O que muda para a gestão</h2>
                <div className="ol-prose">
                  <p>
                    O ganho mais importante para a diretoria não está no aviso que o cliente recebe, e sim no que a empresa passou a enxergar. A carteira deixou de ser uma pergunta sem resposta e virou um número atualizado, título a título.
                  </p>
                  <p>
                    <strong>Visibilidade da carteira inteira.</strong>
                    {" Inadimplência, aging e recebíveis dos próximos 90 dias estão em um único painel, recalculado a cada cinco minutos. A reunião de diretoria para de discutir de onde veio o número e passa a discutir o que fazer com ele."}
                  </p>
                  <p>
                    <strong>Dado confiável, direto da fonte.</strong>
                    {" Os indicadores saem dos títulos do ERP, sem planilha paralela nem consolidação manual. O que aparece no painel é o que está no sistema, naquele momento."}
                  </p>
                  <p>
                    <strong>Fluxo de caixa previsível.</strong>
                    {" Sabendo que 94% do que vence entra no caixa, e exatamente quais títulos formam os 6% que escorregam para o atraso, a empresa projeta recebimentos com base no comportamento real da carteira, não em estimativa."}
                  </p>
                  <p>
                    <strong>Política de cobrança guiada por resultado.</strong>
                    {" A efetividade de cada marco da régua é medida. Se o aviso preventivo converte nove vezes mais que a cobrança depois do vencimento, o financeiro ajusta a política na tela, sem abrir projeto de TI."}
                  </p>
                  <p>
                    <strong>Governança sobre o dinheiro a receber.</strong>
                    {" Cada aviso, acordo, abono e pausa fica registrado com responsável e motivo. A cobrança deixa de depender de uma pessoa e passa a ser um processo auditável da empresa, que resiste a férias, troca de equipe e crescimento da carteira."}
                  </p>
                  <p>Menos dinheiro parado em atraso é capital de giro de volta à operação.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* ==================== Projetos e leituras relacionadas ==================== */}
        <section className="ol-next" aria-labelledby="relacionadas">
          <div className="ol-next__inner">
            <h2 className="ol-next__title" id="relacionadas">Serviços e leituras relacionadas</h2>
            <ul className="ol-next__grid">
              <li>
                <a className="ol-next__card" href="/desenvolvimento-de-software">
                  <b>Desenvolvimento de software sob medida</b>
                  <span>Como a Origami Lab constrói e implanta sistemas para o que o ERP não cobre, do diagnóstico à autonomia do time.</span>
                </a>
              </li>
              <li>
                <a className="ol-next__card" href="/integracao-de-sistemas">
                  <b>Integração de sistemas</b>
                  <span>Os quatro caminhos técnicos para o ERP conversar com o resto da operação, inclusive com sistema legado.</span>
                </a>
              </li>
              <li>
                <a className="ol-next__card" href="/automacao-de-processos-industriais">
                  <b>O que automatizar primeiro</b>
                  <span>Processos que ainda vivem em planilha ou na memória de alguém, o que cada um custa e o que não vale automatizar.</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* ==================== Chamada final ==================== */}
        <section className="ol-cta" id="contato">
          <div className="ol-cta__glow" data-px="0.05" aria-hidden="true" />
          <div className="ol-cta__inner" data-scale-in="">
            <h2 className="ol-cta__title">
              {"A sua cobrança também depende da "}
              <em className="ol-em">memória de alguém</em>
              ?
            </h2>
            <p className="ol-cta__lead">
              A Origami Lab desenvolve soluções sob medida para indústrias e empresas de serviço que desejam aumentar a sua eficiência operacional. A primeira conversa dura 30 minutos e serve para entender a sua operação e apontar onde estão as maiores oportunidades.
            </p>
            <div className="ol-cta__actions">
              <a className="ol-btn ol-btn--primary ol-btn--lg" data-magnet="" href="https://forms.cloud.microsoft/r/f2GGyr2vZT" target="_blank" rel="noopener">
                {"Agendar conversa de 30 minutos "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="https://wa.me/553198055189?text=Ol%C3%A1!%20Vi%20o%20case%20da%20Ret%C3%ADfica%20Formiguense%20e%20quero%20conversar%20sobre%20a%20minha%20cobran%C3%A7a." target="_blank" rel="noopener">Falar no WhatsApp</a>
            </div>
          </div>
        </section>
        {/* ==================== Outros cases ==================== */}
        <section className="ol-nextcase">
          <div className="ol-nextcase__inner">
            <h2 className="ol-h2 ol-h2--ink" data-anim="">Veja outros cases</h2>
            <a className="ol-nextcase__link" href="/cases/prumo-engenharia">
              <div>
                <div className="ol-nextcase__label">Próximo case · Engenharia e manutenção</div>
                <div className="ol-nextcase__title">Intranet corporativa como canal único da operação</div>
              </div>
              <span className="ol-casecard__go">
                {"Ver o case "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <Rodape parallax />
      </div>
      <PreloadDaFonteSerifada />
      <DadosEstruturados dados={DADOS_ESTRUTURADOS} />
      <ScriptsDaPagina scripts={["main"]} />
    </>
  );
}
