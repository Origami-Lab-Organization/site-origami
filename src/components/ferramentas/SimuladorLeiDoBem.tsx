"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { FAIXAS_DE_FATURAMENTO, FAIXAS_DE_FUNCIONARIOS } from "@/conteudo/porte";
import { ENTRADAS_VAZIAS, simular, type Entradas, type Resultado } from "@/lib/ferramentas/lei-do-bem";
import { registrarEvento } from "@/lib/medicao/eventos";
import { CampoNumero, CampoSelecao, reais } from "./campos";
import { CapturaDeLead } from "./CapturaDeLead";
import { DetalheBloqueado } from "./DetalheBloqueado";
import { useDetalhamentoLiberado } from "./liberacao";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";

const FERRAMENTA = "simulador-lei-do-bem";

const SIM_NAO_NAO_SEI = [
  { valor: "sim", rotulo: "Sim" },
  { valor: "nao", rotulo: "Não" },
  { valor: "nao-sei", rotulo: "Não sei" },
];

const REGIMES = [
  { valor: "lucro-real", rotulo: "Lucro real" },
  { valor: "lucro-presumido", rotulo: "Lucro presumido" },
  { valor: "simples", rotulo: "Simples Nacional" },
  { valor: "nao-sei", rotulo: "Não sei" },
];

const PESQUISADORES = [
  { valor: "sem-aumento", rotulo: "Não aumentou (ou não sei)" },
  { valor: "ate-5", rotulo: "Aumentou até 5%" },
  { valor: "acima-5", rotulo: "Aumentou mais de 5%" },
];


function compacto(v: number): string {
  if (v >= 1_000_000) return `R$ ${(v / 1_000_000).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} mi`;
  if (v >= 1_000) return `R$ ${Math.round(v / 1_000).toLocaleString("pt-BR")} mil`;
  return reais(v);
}

function faixaDeEconomia(r: Resultado): string {
  if (Math.round(r.economiaMinima) === Math.round(r.economiaMaxima)) return compacto(r.economiaMinima);
  return `${compacto(r.economiaMinima)} a ${compacto(r.economiaMaxima)}`;
}

function percentualDoGasto(r: Resultado, dispendio: number): string {
  const min = Math.round((r.economiaMinima / dispendio) * 100);
  const max = Math.round((r.economiaMaxima / dispendio) * 100);
  return min === max ? `${min}% do gasto` : `${min}% a ${max}% do gasto`;
}

/* ---------------------------------------------------------- resultado */

function SemConta({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <>
      <div className="ol-result__main ol-result__main--longo">
        {titulo}
      </div>
      <p className="ol-result__verdict">{children}</p>
    </>
  );
}

function ResultadoBloqueado({ r }: { r: Resultado }) {
  if (r.veredito === "incompleto") {
    return <SemConta titulo="—">Responda às três perguntas de enquadramento e informe o gasto anual com P&amp;D para ver a estimativa.</SemConta>;
  }
  if (r.motivo === "regime") {
    return (
      <SemConta titulo="Não se aplica">
        A Lei do Bem só vale para empresas no lucro real. No lucro presumido ou no Simples, o caminho é outro: crédito e subvenção para inovação. Veja{" "}
        <a href="/financiamento-de-inovacao">financiamento de inovação</a> e <a href="/acesso-a-capital">acesso a capital</a>.
      </SemConta>
    );
  }
  if (r.motivo === "prejuizo") {
    return (
      <SemConta titulo="Não neste ano">
        A exclusão é limitada ao lucro real do ano e o excesso não passa para o ano seguinte (Lei 11.196/2005, art. 19, §5º). Com prejuízo fiscal, o benefício deste ano é zero. O projeto pode valer num ano de lucro, e a documentação precisa começar enquanto ele acontece.
      </SemConta>
    );
  }
  return (
    <SemConta titulo="Não neste momento">
      O benefício depende de comprovar regularidade fiscal (Lei 11.196/2005, art. 23). Regularizada a situação, o enquadramento pode ser refeito.
    </SemConta>
  );
}

function ResultadoCalculado({ r, dispendio }: { r: Resultado; dispendio: number }) {
  const elegivel = r.veredito === "elegivel";
  return (
    <>
      <div className="ol-result__main ol-result__main--longo">
        {faixaDeEconomia(r)}
      </div>
      <p className="ol-result__verdict">
        {elegivel
          ? "Pelos requisitos informados, a empresa pode usar a Lei do Bem. O valor depende de os projetos se sustentarem como P&D na análise do MCTI."
          : "A estimativa vale se os pontos marcados como “não sei” se confirmarem. Confira com a contabilidade antes de contar com o valor."}
      </p>
      <DetalheBloqueado ferramenta={FERRAMENTA} oQueLibera="O percentual de exclusão, o valor excluído e a memória de cálculo com a base legal">
      <div className="ol-result__grid">
        <div className="ol-result__item">
          <b>{r.percentual}%</b>
          <span>exclusão adicional sobre o gasto com P&amp;D</span>
        </div>
        <div className="ol-result__item">
          <b>{compacto(r.exclusao)}</b>
          <span>excluídos da base do IRPJ e da CSLL{r.limitadaPeloLucro ? " (limitado ao lucro)" : ""}</span>
        </div>
        <div className="ol-result__item">
          <b>{percentualDoGasto(r, dispendio)}</b>
          <span>volta como imposto a menos</span>
        </div>
      </div>
      <ul className="ol-result__list">
        {r.memoria.map((linha) => (
          <li key={linha}>{linha}</li>
        ))}
      </ul>
      </DetalheBloqueado>
    </>
  );
}

function PainelDeResultado({ r, dispendio }: { r: Resultado; dispendio: number }) {
  const calculado = r.veredito === "elegivel" || r.veredito === "precisa-de-analise";
  return (
    <aside className="ol-card ol-tool__result" aria-live="polite">
      <div className="ol-result__label">Economia estimada no ano</div>
      {calculado ? <ResultadoCalculado r={r} dispendio={dispendio} /> : <ResultadoBloqueado r={r} />}
      <p className="ol-result__note">
        Estimativa com os percentuais máximos da lei e apuração anual. Não substitui parecer contábil: requisitos e valores precisam ser confirmados com a sua contabilidade.
      </p>
    </aside>
  );
}

/* ---------------------------------------------------------- formulário */

function useEventosDaFerramenta(r: Resultado, regime: string) {
  const comecou = useRef(false);
  const concluiu = useRef(false);
  useEffect(() => {
    if (concluiu.current || r.veredito === "incompleto") return;
    concluiu.current = true;
    registrarEvento("tool_complete", { ferramenta: FERRAMENTA, veredito: r.veredito, regime });
  }, [r.veredito, regime]);
  return () => {
    if (comecou.current) return;
    comecou.current = true;
    registrarEvento("tool_start", { ferramenta: FERRAMENTA });
  };
}

const NAO_INFORMADO = "não informado";

function ou(valor: string): string {
  return valor || NAO_INFORMADO;
}

/** Respostas e resultado que vão no e-mail do lead (o comercial vê o porte e o tamanho do gasto). */
function dadosDoLead(e: Entradas, r: Resultado, dispendio: number, porte: { faturamento: string; funcionarios: string }) {
  const calculado = r.veredito === "elegivel" || r.veredito === "precisa-de-analise";
  const dados: Record<string, string | number> = {
    regime: ou(e.regime),
    lucro_fiscal: ou(e.lucroFiscal),
    regularidade_fiscal: ou(e.regularidade),
    dispendio_anual_pd: dispendio,
    pesquisadores: ou(e.pesquisadores),
    patente: ou(e.patente),
    veredito: r.veredito,
    economia_estimada: calculado ? faixaDeEconomia(r) : "não calculada",
  };
  if (porte.faturamento) dados.faturamento_faixa = porte.faturamento;
  if (porte.funcionarios) dados.funcionarios_faixa = porte.funcionarios;
  return dados;
}

export function SimuladorLeiDoBem() {
  const [e, setE] = useState<Entradas>(ENTRADAS_VAZIAS);
  const [faturamento, setFaturamento] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const r = useMemo(() => simular(e), [e]);
  const liberado = useDetalhamentoLiberado();
  const marcarInicio = useEventosDaFerramenta(r, e.regime);
  const dispendio = typeof e.dispendio === "number" ? e.dispendio : 0;

  function mudar<K extends keyof Entradas>(campo: K, valor: Entradas[K]) {
    marcarInicio();
    setE((atual) => ({ ...atual, [campo]: valor }));
  }

  const dados = dadosDoLead(e, r, dispendio, { faturamento, funcionarios });

  return (
    <>
      <section className="ol-tool" id="ferramenta">
        <div className="ol-tool__inner">
          <div className="ol-card">
            <h2 className="ol-card__title">Simule o enquadramento e a economia</h2>
            <p className="ol-card__lead">Leva dois minutos. Nada é enviado enquanto você simula: o cálculo acontece no seu navegador.</p>

            <fieldset className="ol-fieldset">
              <legend>Enquadramento</legend>
              <div className="ol-fields ol-fields--2">
                <CampoSelecao rotulo="Regime de tributação" valor={e.regime} aoMudar={(v) => mudar("regime", v as Entradas["regime"])} opcoes={REGIMES} />
                <CampoSelecao
                  rotulo="Vai fechar o ano com lucro tributável?"
                  valor={e.lucroFiscal}
                  aoMudar={(v) => mudar("lucroFiscal", v as Entradas["lucroFiscal"])}
                  opcoes={SIM_NAO_NAO_SEI}
                  ajuda="Lucro fiscal (lucro real), não o resultado contábil."
                />
                <CampoSelecao
                  rotulo="Está em dia com os tributos federais?"
                  valor={e.regularidade}
                  aoMudar={(v) => mudar("regularidade", v as Entradas["regularidade"])}
                  opcoes={SIM_NAO_NAO_SEI}
                />
              </div>
            </fieldset>

            <fieldset className="ol-fieldset">
              <legend>Gasto com P&amp;D no ano</legend>
              <div className="ol-fields">
                <CampoNumero
                  rotulo="Gasto anual com pesquisa, desenvolvimento e inovação tecnológica"
                  valor={e.dispendio}
                  aoMudar={(v) => mudar("dispendio", v)}
                  sufixo="R$/ano"
                  passo={1000}
                  ajuda="Salários e encargos de quem trabalha nos projetos, serviços técnicos contratados no Brasil (universidades, ICTs, empresas) e materiais dos projetos. Não entram compra de máquinas (têm incentivos próprios) nem recursos não reembolsáveis recebidos de órgãos públicos."
                />
                <CampoSelecao
                  rotulo="Pesquisadores dedicados a P&D, comparado à média do ano anterior"
                  valor={e.pesquisadores}
                  aoMudar={(v) => mudar("pesquisadores", v as Entradas["pesquisadores"])}
                  opcoes={PESQUISADORES}
                  ajuda="Pesquisador contratado: graduado, pós-graduado, tecnólogo ou técnico de nível médio, com vínculo de emprego e dedicação exclusiva a P&D (Decreto 5.798/2006)."
                />
                <CampoSelecao
                  rotulo="Teve patente concedida ou cultivar registrado no período?"
                  valor={e.patente}
                  aoMudar={(v) => mudar("patente", v as Entradas["patente"])}
                  opcoes={SIM_NAO_NAO_SEI.slice(0, 2)}
                />
                {e.patente === "sim" ? (
                  <CampoNumero
                    rotulo="Gasto vinculado à pesquisa patenteada"
                    valor={e.dispendioPatente}
                    aoMudar={(v) => mudar("dispendioPatente", v)}
                    sufixo="R$"
                    passo={1000}
                  />
                ) : null}
                <CampoNumero
                  rotulo="Lucro real estimado do ano, antes da Lei do Bem (opcional)"
                  valor={e.lucroReal}
                  aoMudar={(v) => mudar("lucroReal", v)}
                  sufixo="R$"
                  passo={1000}
                  ajuda="Com ele, o cálculo limita a exclusão ao lucro e aplica o adicional de 10% do IRPJ só onde ele incide."
                />
              </div>
            </fieldset>

            <fieldset className="ol-fieldset">
              <legend>Sobre a empresa (opcional)</legend>
              <div className="ol-fields ol-fields--2">
                <CampoSelecao rotulo="Faturamento anual" valor={faturamento} aoMudar={setFaturamento} opcoes={FAIXAS_DE_FATURAMENTO} />
                <CampoSelecao rotulo="Funcionários" valor={funcionarios} aoMudar={setFuncionarios} opcoes={FAIXAS_DE_FUNCIONARIOS} />
              </div>
            </fieldset>
          </div>

          <PainelDeResultado r={r} dispendio={dispendio} />
        </div>
      </section>

      <div className="ol-capture">
        <CapturaDeLead
          ferramenta={FERRAMENTA}
          titulo={liberado ? "Receba a análise de enquadramento" : "Libere a memória de cálculo"}
          descricao={
            liberado
              ? "Um especialista da Origami revisa as suas respostas, aponta o que pode sustentar a exclusão e o que precisa de documentação. A captação é feita em parceria com a PIN, e a cobrança só acontece se o capital for liberado."
              : "Deixe seu nome e e-mail ou WhatsApp para ver o percentual de exclusão, o valor excluído e cada passo da conta com a base legal. Um especialista da Origami revisa o enquadramento com você."
          }
          rotuloBotao={liberado ? "Quero a análise" : "Ver a memória de cálculo"}
          dados={dados}
          pedirPorte={!faturamento || !funcionarios}
        />
      </div>
      <ChamadaDaOrigami frente="inovacao" pagina={`/${FERRAMENTA}`} formulario={`#contato-${FERRAMENTA}`} />
    </>
  );
}
