"use client";

import { useMemo, useRef, useState } from "react";
import {
  indicar,
  perguntasVisiveis,
  respondidas,
  respostasResumidas,
  type Aderencia,
  type Indicacao,
  type PerguntaDoFomento,
  type Respostas,
  type ResultadoDoFomento,
} from "@/lib/ferramentas/fomento";
import { registrarEvento } from "@/lib/medicao/eventos";
import { CapturaDeLead } from "./CapturaDeLead";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";

const FERRAMENTA = "fomento-a-inovacao";

const ROTULO_DA_ADERENCIA: Record<Aderencia, string> = {
  alta: "Caminho provável",
  media: "Vale avaliar",
  baixa: "Pouco provável",
  fora: "Não se aplica",
};

function Pergunta({ p, respostas, aoEscolher }: { p: PerguntaDoFomento; respostas: Respostas; aoEscolher: (valor: unknown) => void }) {
  const id = `fomento-${p.id}`;
  return (
    <div className="ol-field" role="radiogroup" aria-labelledby={id}>
      <p className="ol-field__label" id={id}>
        {p.texto}
      </p>
      {p.ajuda ? <p className="ol-field__hint">{p.ajuda}</p> : null}
      {p.opcoes.map((o) => (
        <label key={String(o.valor)} className="ol-check">
          <input type="radio" name={p.id} checked={respostas[p.id] === o.valor} onChange={() => aoEscolher(o.valor)} />
          <span>{o.rotulo}</span>
        </label>
      ))}
    </div>
  );
}

function Progresso({ feitas, total }: { feitas: number; total: number }) {
  return (
    <div className="ol-card" aria-live="polite">
      <div className="ol-result__label">Progresso</div>
      <div className="ol-result__main">
        {feitas} de {total}
      </div>
      <div className="ol-meter" aria-hidden="true">
        <span style={{ width: `${(feitas / total) * 100}%` }} />
      </div>
      <p className="ol-result__verdict">Responda tudo para ver quais instrumentos fazem sentido para o projeto, e por que os outros ficaram de fora.</p>
    </div>
  );
}

function Caminho({ i }: { i: Indicacao }) {
  return (
    <li className={`ol-fom__item ol-fom__item--${i.aderencia}`}>
      <div className="ol-fom__topo">
        <b>{i.instrumento.nome}</b>
        <span className="ol-fom__selo">{ROTULO_DA_ADERENCIA[i.aderencia]}</span>
      </div>
      <span className="ol-fom__natureza">{i.instrumento.natureza}</span>
      <ul className="ol-fom__motivos">
        {i.motivos.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <a className="ol-fom__link" href={i.instrumento.href}>
        Como funciona →
      </a>
    </li>
  );
}

function Resultado({ r }: { r: ResultadoDoFomento }) {
  const provaveis = r.indicados.filter((i) => i.aderencia === "alta").length;
  return (
    <div className="ol-card" aria-live="polite">
      <div className="ol-result__label">Caminhos para o projeto</div>
      <div className="ol-result__main ol-result__main--longo">
        {r.indicados.length === 0 ? "Nenhum caminho claro" : `${r.indicados.length} ${r.indicados.length === 1 ? "caminho" : "caminhos"} a avaliar`}
      </div>
      <p className="ol-result__verdict">
        {provaveis > 0
          ? `${provaveis} ${provaveis === 1 ? "aparece" : "aparecem"} como caminho provável pelas respostas. A ordem é por aderência, não por valor.`
          : r.indicados.length > 0
            ? "Nenhum aparece como caminho óbvio, mas há instrumentos que valem uma avaliação do projeto."
            : "Com essas respostas, nenhum instrumento se encaixa de forma direta. Mudar o desenho do projeto, como incluir uma parceria ou uma contrapartida, costuma abrir portas."}
      </p>
      {r.indicados.length ? (
        <ol className="ol-fom__lista">
          {r.indicados.map((i) => (
            <Caminho key={i.instrumento.id} i={i} />
          ))}
        </ol>
      ) : null}
      {r.descartados.length ? (
        <details className="ol-fom__fora">
          <summary>Por que os outros ficaram de fora ({r.descartados.length})</summary>
          <ul>
            {r.descartados.map((i) => (
              <li key={i.instrumento.id}>
                <strong>{i.instrumento.nome}.</strong> {i.motivos[0]}
              </li>
            ))}
          </ul>
        </details>
      ) : null}
      <p className="ol-result__note">
        Indica caminhos prováveis por critérios objetivos. Aprovação depende do mérito do projeto, da chamada e da análise de cada instituição, e as
        condições mudam: confira sempre na fonte oficial.
      </p>
    </div>
  );
}

function dadosDoLead(r: ResultadoDoFomento, respostas: Respostas): Record<string, string | number> {
  const caminhos = r.indicados.map((i) => `${i.instrumento.nome} (${ROTULO_DA_ADERENCIA[i.aderencia].toLowerCase()})`).join("; ");
  return { "Caminhos indicados": caminhos || "nenhum", ...respostasResumidas(respostas) };
}

export function QualFomento() {
  const [respostas, setRespostas] = useState<Respostas>({});
  const eventos = useRef({ inicio: false, resultado: false });
  const resultado = useMemo(() => indicar(respostas), [respostas]);
  const visiveis = perguntasVisiveis(respostas);

  function medir(novas: Respostas) {
    if (!eventos.current.inicio) {
      eventos.current.inicio = true;
      registrarEvento("tool_start", { ferramenta: FERRAMENTA });
    }
    const r = indicar(novas);
    if (r && !eventos.current.resultado) {
      eventos.current.resultado = true;
      registrarEvento("tool_complete", { ferramenta: FERRAMENTA, principal: r.indicados[0]?.instrumento.id ?? "nenhum", caminhos: r.indicados.length });
    }
  }

  function escolher(id: keyof Respostas, valor: unknown) {
    const novas = { ...respostas, [id]: valor } as Respostas;
    if (id === "regime" && valor !== "real") delete novas.lucro;
    setRespostas(novas);
    medir(novas);
  }

  return (
    <section className="ol-tool" id="ferramenta" aria-label="Qual fomento serve para o seu projeto">
      <div className="ol-tool__inner">
        <div className="ol-card">
          <h2 className="ol-card__title">Responda sobre a empresa e o projeto</h2>
          <p className="ol-card__lead">Leva dois minutos. O resultado aparece ao lado assim que a última pergunta for respondida, e nada do que você marca sai do navegador.</p>
          <div className="ol-fields">
            {visiveis.map((p) => (
              <Pergunta key={p.id} p={p} respostas={respostas} aoEscolher={(v) => escolher(p.id, v)} />
            ))}
          </div>
        </div>
        <aside className="ol-tool__result">{resultado ? <Resultado r={resultado} /> : <Progresso feitas={respondidas(respostas)} total={visiveis.length} />}</aside>
      </div>
      {resultado ? (
        <>
          <ChamadaDaOrigami frente="inovacao" pagina={`/${FERRAMENTA}`} formulario={`#contato-${FERRAMENTA}`} />
          <div className="ol-capture">
            <CapturaDeLead
              ferramenta={FERRAMENTA}
              titulo="Quer saber se o projeto se sustenta?"
              descricao="Envie as respostas para um especialista da Origami. Ele cruza o projeto com os instrumentos indicados e diz por onde começar, o que precisa estar documentado e o que esperar de prazo."
              rotuloBotao="Quero a avaliação do projeto"
              dados={dadosDoLead(resultado, respostas)}
            />
          </div>
        </>
      ) : null}
    </section>
  );
}
