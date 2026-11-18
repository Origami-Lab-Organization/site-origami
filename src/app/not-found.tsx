import type { Metadata } from "next";
import { Navegacao } from "@/components/Navegacao";
import { Rodape } from "@/components/Rodape";
import { ScriptsDaPagina } from "@/components/ScriptsDaPagina";

export const metadata: Metadata = {
  "title": {
    "absolute": "Página não encontrada | Origami Lab"
  },
  "description": "A página que você procurou não existe ou mudou de endereço. Veja os serviços, as soluções para indústria e os cases da Origami Lab.",
  "robots": {
    "index": false,
    "follow": true
  }
};

export default function NaoEncontrada() {
  return (
    <>
      <Navegacao />
      <div className="ol-root" id="conteudo" data-404="">
        {/* ==================== Abertura ==================== */}
        <header className="ol-page__hero">
          <div className="ol-page__glow" aria-hidden="true" />
          <div className="ol-page__inner">
            <nav className="ol-crumb" aria-label="Você está em">
              <a href="/">Origami Lab</a>
              {" "}
              <span aria-hidden="true">/</span>
              {" "}
              <span>Página não encontrada</span>
            </nav>
            <h1 className="ol-page__title">Esta página não existe ou mudou de endereço</h1>
            <p className="ol-page__lead">
              O link pode ser de uma versão antiga do site ou do blog, que saiu do ar. O conteúdo que estava lá provavelmente está em uma das páginas abaixo. Se você procurava algo específico sobre a sua operação, fale direto com a gente.
            </p>
            <div className="ol-page__actions">
              <a className="ol-btn ol-btn--primary" href="/">
                {"Ir para o início "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              {" "}
              <a className="ol-btn ol-btn--ghost" href="/cases">Ver os cases</a>
            </div>
          </div>
        </header>
        <div className="ol-over">
          {/* ==================== Para onde ir ==================== */}
          <section className="ol-next" aria-labelledby="destinos">
            <div className="ol-next__inner">
              <h2 className="ol-next__title" id="destinos">Talvez você procurasse</h2>
              <ul className="ol-next__grid">
                <li>
                  <a className="ol-next__card" href="/desenvolvimento-de-software">
                    <b>Desenvolvimento de software</b>
                    <span>Sistemas para o que o ERP não cobre, integração e dados em tempo real, do diagnóstico à implantação.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/tecnologia-para-industrias-minas-gerais">
                    <b>Tecnologia para indústrias de Minas Gerais</b>
                    <span>PCP, apontamento, integração com o ERP e automação de processos para a indústria da região.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/consultoria-estrategica">
                    <b>Consultoria estratégica</b>
                    <span>Diagnóstico dentro da operação e portfólio de projetos priorizado por retorno.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/acesso-a-capital">
                    <b>Acesso a capital</b>
                    <span>Lei do Bem, FINEP e FAPEMIG para financiar a modernização da operação.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/integracao-de-sistemas">
                    <b>Integração de sistemas</b>
                    <span>O que fazer quando o ERP não cobre a operação e o dado volta a nascer numa planilha.</span>
                  </a>
                </li>
                <li>
                  <a className="ol-next__card" href="/cases">
                    <b>Cases</b>
                    <span>Projetos entregues, com o desafio, o que foi construído e o que mudou na operação.</span>
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
      <ScriptsDaPagina scripts={["pagina"]} />
    </>
  );
}
