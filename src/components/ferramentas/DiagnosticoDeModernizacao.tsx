"use client";

import { useMemo, useRef, useState } from "react";
import {
  DIMENSOES,
  PERGUNTAS,
  diagnosticar,
  respondidas,
  respostasResumidas,
  type PerguntaDoDiagnostico,
  type Respostas,
  type ResultadoDoDiagnostico,
} from "@/lib/ferramentas/diagnostico";
import { registrarEvento } from "@/lib/medicao/eventos";
import { CapturaDeLead } from "./CapturaDeLead";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";

const FERRAMENTA = "diagnostico-de-modernizacao";

function Pergunta({ p, escolha, aoEscolher }: { p: PerguntaDoDiagnostico; escolha: number | undefined; aoEscolher: (i: number) => void }) {
  const id = `diag-${p.id}`;
  return (
    <div className="ol-field" role="radiogroup" aria-labelledby={id}>
      <p className="ol-field__label" id={id}>
        {p.texto}
      </p>
      {p.opcoes.map((o, i) => (
        <label key={o.rotulo} className="ol-check">
          <input type="radio" name={p.id} checked={escolha === i} onChange={() => aoEscolher(i)} />
          <span>{o.rotulo}</span>
        </label>
      ))}
    </div>
  );
}

function Medidor({ valor }: { valor: number }) {
  return (
    <div className="ol-meter" aria-hidden="true">
      <span style={{ width: `${valor}%` }} />
    </div>
  );
}

function Progresso({ feitas }: { feitas: number }) {
  return (
    <div className="ol-card" aria-live="polite">
      <div className="ol-result__label">Progresso</div>
      <div className="ol-result__main">
        {feitas} de {PERGUNTAS.length}
      </div>
      <Medidor valor={(feitas / PERGUNTAS.length) * 100} />
      <p className="ol-result__verdict">Responda todas as perguntas para ver a maturidade em cada frente e as três por onde começar.</p>
    </div>
  );
}

function Resultado({ r }: { r: ResultadoDoDiagnostico }) {
  return (
    <div className="ol-card" aria-live="polite">
      <div className="ol-result__label">Maturidade geral</div>
      <div className="ol-result__main">{r.geral}/100</div>
      <p className="ol-result__verdict">
        <strong>{r.nivel.nome}.</strong> {r.nivel.descricao}
      </p>
      <div className="ol-result__grid">
        {DIMENSOES.map((d) => (
          <div key={d.id} className="ol-result__item">
            <b>{r.porDimensao[d.id]}</b>
            <span>{d.nome}</span>
            <Medidor valor={r.porDimensao[d.id]} />
          </div>
        ))}
      </div>
      <div className="ol-result__label" style={{ marginTop: 24 }}>
        Por onde começar
      </div>
      <ol className="ol-result__list">
        {r.recomendacoes.map((x) => (
          <li key={x.dimensao}>
            <strong>{x.titulo}.</strong> {x.texto} <a href={x.href}>{x.link}</a>
          </li>
        ))}
      </ol>
      <p className="ol-result__note">
        Parte desses projetos pode ser financiada com incentivo fiscal ou crédito para inovação: veja <a href="/acesso-a-capital">acesso a capital</a>.
      </p>
    </div>
  );
}

function dadosDoLead(r: ResultadoDoDiagnostico, respostas: Respostas): Record<string, string | number> {
  const porFrente = Object.fromEntries(DIMENSOES.map((d) => [`Pontuação: ${d.nome}`, r.porDimensao[d.id]]));
  return { "Maturidade geral": r.geral, Nível: r.nivel.nome, ...porFrente, ...respostasResumidas(respostas) };
}

export function DiagnosticoDeModernizacao() {
  const [respostas, setRespostas] = useState<Respostas>({});
  const eventos = useRef({ inicio: false, resultado: false });
  const resultado = useMemo(() => diagnosticar(respostas), [respostas]);

  function medir(novas: Respostas) {
    if (!eventos.current.inicio) {
      eventos.current.inicio = true;
      registrarEvento("tool_start", { ferramenta: FERRAMENTA });
    }
    const r = diagnosticar(novas);
    if (r && !eventos.current.resultado) {
      eventos.current.resultado = true;
      registrarEvento("tool_complete", { ferramenta: FERRAMENTA, nivel: r.nivel.id, frente_mais_fraca: r.recomendacoes[0].dimensao });
    }
  }

  function escolher(id: string, indice: number) {
    const novas = { ...respostas, [id]: indice };
    setRespostas(novas);
    medir(novas);
  }

  return (
    <section className="ol-tool" id="ferramenta" aria-label="Diagnóstico de modernização da operação">
      <div className="ol-tool__inner">
        <div className="ol-card">
          <h2 className="ol-card__title">Onze perguntas sobre a sua operação</h2>
          <p className="ol-card__lead">Escolha a opção mais próxima do dia a dia, não do ideal. O resultado aparece ao lado assim que a última for respondida.</p>
          {DIMENSOES.map((d) => (
            <fieldset key={d.id} className="ol-fieldset">
              <legend>{d.nome}</legend>
              <div className="ol-fields">
                {PERGUNTAS.filter((p) => p.dimensao === d.id).map((p) => (
                  <Pergunta key={p.id} p={p} escolha={respostas[p.id]} aoEscolher={(i) => escolher(p.id, i)} />
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        <aside className="ol-tool__result">{resultado ? <Resultado r={resultado} /> : <Progresso feitas={respondidas(respostas)} />}</aside>
      </div>
      {resultado ? (
        <>
        <ChamadaDaOrigami frente="sistemas" pagina={`/${FERRAMENTA}`} formulario={`#contato-${FERRAMENTA}`} />
        <div className="ol-capture">
          <CapturaDeLead
            ferramenta={FERRAMENTA}
            titulo="Receba a leitura de um especialista sobre o seu resultado"
            descricao="Um especialista da Origami Lab olha as suas respostas e volta com o que está por trás de cada frente e um primeiro passo concreto. Sem compromisso."
            rotuloBotao="Quero a leitura do especialista"
            dados={dadosDoLead(resultado, respostas)}
          />
        </div>
        </>
      ) : null}
    </section>
  );
}
