"use client";

import { useRef, useState } from "react";
import { calcularOee, EXEMPLO, faixaDeOee, porcentagem, type EntradasOee, type MaiorPerda, type ResultadoOee, type Valor } from "@/lib/ferramentas/oee";
import { registrarEvento } from "@/lib/medicao/eventos";
import { CampoNumero, numero } from "./campos";
import { CapturaDeLead } from "./CapturaDeLead";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";

const FERRAMENTA = "calculadora-de-oee";
const PLANILHA = "/ferramentas/planilha-de-oee.xlsx";

const LEITURA_DA_PERDA: Record<MaiorPerda, string> = {
  paradas: "A maior perda está nas paradas. O primeiro passo é saber o motivo de cada uma: com motivo registrado na hora, as três ou quatro causas que mais param a máquina aparecem sozinhas.",
  velocidade:
    "A maior perda está na velocidade: a máquina rodou abaixo do ciclo ideal ou teve pequenas paradas que ninguém anotou. É a perda que o apontamento manual mais esconde.",
  qualidade: "A maior perda está na qualidade: refugo e retrabalho. Vale cruzar com lote, produto e turno para achar onde ele se concentra.",
};

const ROTULO_DA_PERDA: Record<MaiorPerda, string> = {
  paradas: "Paradas",
  velocidade: "Velocidade",
  qualidade: "Qualidade",
};

function minutos(v: number): string {
  return `${numero(v, v < 10 ? 1 : 0)} min`;
}

function dadosParaOLead(e: EntradasOee, r: ResultadoOee): Record<string, string | number> {
  const entradas = {
    tempo_planejado_min: Number(e.planejadoMin) || 0,
    paradas_min: Number(e.paradasMin) || 0,
    ciclo_ideal_s: Number(e.cicloIdealSeg) || 0,
    pecas_produzidas: Number(e.produzidas) || 0,
    pecas_boas: Number(e.boas) || 0,
  };
  if (!r.ok) return { ...entradas, resultado: "não calculado" };
  return {
    ...entradas,
    oee: porcentagem(r.oee),
    disponibilidade: porcentagem(r.disponibilidade),
    desempenho: porcentagem(r.desempenho),
    qualidade: porcentagem(r.qualidade),
    maior_perda: ROTULO_DA_PERDA[r.maiorPerda],
  };
}

function Resultado({ r }: { r: ResultadoOee }) {
  if (!r.ok) {
    return (
      <div className="ol-card ol-tool__result" aria-live="polite">
        <div className="ol-result__label">OEE</div>
        <div className="ol-result__main">—</div>
        <p className="ol-result__verdict">{r.problema}</p>
      </div>
    );
  }
  return (
    <div className="ol-card ol-tool__result" aria-live="polite">
      <div className="ol-result__label">OEE do período</div>
      <div className="ol-result__main">{porcentagem(r.oee)}</div>
      <div className="ol-meter" aria-hidden="true">
        <span style={{ width: `${Math.min(100, r.oee * 100)}%` }} />
      </div>
      <div className="ol-result__grid">
        <div className="ol-result__item">
          <b>{porcentagem(r.disponibilidade)}</b>
          <span>Disponibilidade</span>
        </div>
        <div className="ol-result__item">
          <b>{porcentagem(r.desempenho)}</b>
          <span>Desempenho</span>
        </div>
        <div className="ol-result__item">
          <b>{porcentagem(r.qualidade)}</b>
          <span>Qualidade</span>
        </div>
      </div>
      <p className="ol-result__verdict">{LEITURA_DA_PERDA[r.maiorPerda]}</p>
      <ul className="ol-result__list">
        <li>
          Paradas: <strong>{minutos(r.perdas.paradas)}</strong>
        </li>
        <li>
          Velocidade abaixo do ciclo ideal: <strong>{minutos(r.perdas.velocidade)}</strong>
        </li>
        <li>
          Refugo e retrabalho: <strong>{minutos(r.perdas.qualidade)}</strong>
        </li>
        <li>
          Peças boas que deixaram de sair: <strong>{numero(r.pecasPerdidas)}</strong> de {numero(r.pecasPossiveis)} possíveis no ciclo ideal
        </li>
      </ul>
      <p className="ol-result__note">O cálculo roda no seu navegador. Nada do que você digita aqui é enviado.</p>
    </div>
  );
}

export function CalculadoraDeOee() {
  const [entradas, setEntradas] = useState<EntradasOee>(EXEMPLO);
  const [alterou, setAlterou] = useState(false);
  const eventos = useRef({ inicio: false, completo: false });
  const resultado = calcularOee(entradas);

  function mudar(campo: keyof EntradasOee) {
    return (v: Valor) => {
      const novas = { ...entradas, [campo]: v };
      setEntradas(novas);
      setAlterou(true);
      if (!eventos.current.inicio) {
        eventos.current.inicio = true;
        registrarEvento("tool_start", { ferramenta: FERRAMENTA });
      }
      const r = calcularOee(novas);
      if (r.ok && !eventos.current.completo) {
        eventos.current.completo = true;
        registrarEvento("tool_complete", { ferramenta: FERRAMENTA, oee_faixa: faixaDeOee(r.oee) });
      }
    };
  }

  function baixarPlanilha() {
    registrarEvento("download", { ferramenta: FERRAMENTA, arquivo: "planilha-de-oee.xlsx" });
  }

  return (
    <>
      <section className="ol-tool" id="ferramenta" aria-labelledby="ferramenta-titulo">
        <div className="ol-tool__inner">
          <div className="ol-card">
            <h2 className="ol-card__title" id="ferramenta-titulo">
              Calcule o OEE
            </h2>
            <p className="ol-card__lead">
              {alterou
                ? "Use os números de um turno ou de um período fechado de uma máquina ou linha."
                : "Os valores abaixo são um exemplo. Troque pelos de um turno da sua máquina ou linha."}
            </p>
            <fieldset className="ol-fieldset">
              <legend>Tempo</legend>
              <div className="ol-fields ol-fields--2">
                <CampoNumero
                  rotulo="Tempo planejado de produção"
                  sufixo="min"
                  valor={entradas.planejadoMin}
                  aoMudar={mudar("planejadoMin")}
                  ajuda="Turno menos refeição e paradas programadas."
                />
                <CampoNumero
                  rotulo="Paradas não planejadas"
                  sufixo="min"
                  valor={entradas.paradasMin}
                  aoMudar={mudar("paradasMin")}
                  ajuda="Quebra, falta de material, setup, ajustes."
                />
              </div>
            </fieldset>
            <fieldset className="ol-fieldset">
              <legend>Ritmo</legend>
              <div className="ol-fields ol-fields--2">
                <CampoNumero
                  rotulo="Tempo de ciclo ideal"
                  sufixo="s/peça"
                  passo={0.1}
                  valor={entradas.cicloIdealSeg}
                  aoMudar={mudar("cicloIdealSeg")}
                  ajuda="O de projeto ou o melhor ritmo sustentado, não a média real."
                />
              </div>
            </fieldset>
            <fieldset className="ol-fieldset">
              <legend>Peças</legend>
              <div className="ol-fields ol-fields--2">
                <CampoNumero rotulo="Peças produzidas" valor={entradas.produzidas} aoMudar={mudar("produzidas")} ajuda="Tudo o que saiu da máquina." />
                <CampoNumero rotulo="Peças boas" valor={entradas.boas} aoMudar={mudar("boas")} ajuda="Só as boas de primeira, sem retrabalho." />
              </div>
            </fieldset>
          </div>
          <Resultado r={resultado} />
        </div>
      </section>
      <ChamadaDaOrigami frente="producao" pagina={`/${FERRAMENTA}`} formulario={`#contato-${FERRAMENTA}`} />
      <div className="ol-capture">
        <CapturaDeLead
          ferramenta={FERRAMENTA}
          titulo="Quer entender as perdas da sua operação?"
          descricao="Envie o OEE que você acabou de calcular para um especialista avaliar com você onde vale aprofundar a medição. A conta segue junto ao contato. Você também recebe acesso à planilha em Excel para acompanhar os próximos turnos."
          rotuloBotao="Quero analisar meu OEE"
          dados={dadosParaOLead(entradas, resultado)}
          mensagemDeSucesso={
            <>
              Pronto.{" "}
              <a href={PLANILHA} download onClick={baixarPlanilha}>
                Baixar a planilha de OEE (.xlsx)
              </a>
              . O seu resultado também chegou a um especialista da Origami; se fizer sentido, ele escreve para você.
            </>
          }
        />
      </div>
    </>
  );
}
