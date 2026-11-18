"use client";

import { useMemo, useRef, useState } from "react";
import {
  EXEMPLO,
  calcularHoraMaquina,
  faixaDoAproveitamento,
  faixaDoCusto,
  type EntradaHoraMaquina,
  type ModoDeManutencao,
  type ResultadoHoraMaquina,
} from "@/lib/ferramentas/hora-maquina";
import { registrarEvento } from "@/lib/medicao/eventos";
import { CampoNumero, CampoSelecao, numero } from "./campos";
import { CapturaDeLead } from "./CapturaDeLead";

const FERRAMENTA = "calculadora-custo-hora-maquina";

type Chave = Exclude<keyof EntradaHoraMaquina, "manutencaoModo">;
type Valores = Record<Chave, number | "">;
type DefCampo = { chave: Chave; rotulo: string; sufixo?: string; ajuda?: string; passo?: number; max?: number };

const GRUPOS: { legenda: string; campos: DefCampo[] }[] = [
  {
    legenda: "Investimento",
    campos: [
      { chave: "valorAquisicao", rotulo: "Valor de aquisição", sufixo: "R$", passo: 1000 },
      { chave: "valorResidual", rotulo: "Valor residual", sufixo: "R$", passo: 1000, ajuda: "Quanto a máquina deve valer quando for substituída." },
      { chave: "vidaUtilAnos", rotulo: "Vida útil", sufixo: "anos" },
      { chave: "taxaCapitalAnual", rotulo: "Custo do capital", sufixo: "% ao ano", passo: 0.5, ajuda: "Juros do financiamento ou o que o dinheiro renderia. Zero ignora." },
    ],
  },
  {
    legenda: "Energia",
    campos: [
      { chave: "potenciaKw", rotulo: "Potência instalada", sufixo: "kW", passo: 0.5 },
      { chave: "fatorCarga", rotulo: "Fator de carga médio", sufixo: "%", max: 100, ajuda: "Parte da potência usada, em média, enquanto a máquina produz." },
      { chave: "precoKwh", rotulo: "Preço da energia", sufixo: "R$/kWh", passo: 0.01, ajuda: "Valor da conta de energia dividido pelos kWh consumidos." },
    ],
  },
  {
    legenda: "Espaço",
    campos: [{ chave: "ocupacaoMensal", rotulo: "Espaço e ocupação", sufixo: "R$/mês", passo: 100, ajuda: "Parte do aluguel, IPTU, iluminação e limpeza que cabe à máquina. Zero ignora." }],
  },
  {
    legenda: "Operador",
    campos: [
      { chave: "custoOperadorMensal", rotulo: "Custo mensal do operador", sufixo: "R$/mês", passo: 100, ajuda: "Salário com encargos e benefícios." },
      { chave: "horasOperadorMes", rotulo: "Horas pagas por mês", sufixo: "h", ajuda: "220 para jornada de 44 horas semanais." },
      { chave: "operadoresPorMaquina", rotulo: "Operadores por máquina", passo: 0.5, ajuda: "0,5 se um operador cuida de duas máquinas. Zero para ver só a máquina." },
    ],
  },
  {
    legenda: "Horas de trabalho",
    campos: [
      { chave: "diasPorAno", rotulo: "Dias trabalhados por ano", sufixo: "dias" },
      { chave: "turnosPorDia", rotulo: "Turnos por dia" },
      { chave: "horasPorTurno", rotulo: "Horas por turno", sufixo: "h", passo: 0.5 },
      { chave: "aproveitamento", rotulo: "Aproveitamento das horas", sufixo: "%", max: 100, ajuda: "Parte das horas pagas em que a máquina produz: sem setup, paradas e falta de programação." },
    ],
  },
  {
    legenda: "Capacidade (opcional)",
    campos: [{ chave: "tempoCicloMin", rotulo: "Tempo de ciclo por peça", sufixo: "min", passo: 0.1, ajuda: "Para ver peças por hora e custo de máquina por peça. Zero ignora." }],
  },
];

const MODOS = [
  { valor: "percentual", rotulo: "% do valor da máquina por ano" },
  { valor: "valor", rotulo: "Valor em reais por ano" },
];

function moeda(v: number): string {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function valoresIniciais(): Valores {
  const { manutencaoModo: _modo, ...resto } = EXEMPLO;
  void _modo;
  return resto;
}

function paraEntrada(v: Valores, modo: ModoDeManutencao): EntradaHoraMaquina {
  const numeros = Object.fromEntries(Object.entries(v).map(([k, x]) => [k, x === "" ? 0 : x])) as Record<Chave, number>;
  return { ...numeros, manutencaoModo: modo };
}

function Grupo({ legenda, campos, valores, aoMudar }: { legenda: string; campos: DefCampo[]; valores: Valores; aoMudar: (c: Chave, v: number | "") => void }) {
  return (
    <fieldset className="ol-fieldset">
      <legend>{legenda}</legend>
      <div className="ol-fields ol-fields--2">
        {campos.map((c) => (
          <CampoNumero key={c.chave} rotulo={c.rotulo} valor={valores[c.chave]} aoMudar={(v) => aoMudar(c.chave, v)} sufixo={c.sufixo} ajuda={c.ajuda} passo={c.passo} max={c.max} />
        ))}
      </div>
    </fieldset>
  );
}

function Manutencao({ modo, valor, aoMudarModo, aoMudarValor }: { modo: ModoDeManutencao; valor: number | ""; aoMudarModo: (m: ModoDeManutencao) => void; aoMudarValor: (v: number | "") => void }) {
  return (
    <fieldset className="ol-fieldset">
      <legend>Manutenção</legend>
      <div className="ol-fields ol-fields--2">
        <CampoSelecao rotulo="Como informar" valor={modo} aoMudar={(m) => aoMudarModo(m as ModoDeManutencao)} opcoes={MODOS} />
        <CampoNumero
          rotulo="Manutenção"
          valor={valor}
          aoMudar={aoMudarValor}
          sufixo={modo === "percentual" ? "% ao ano" : "R$/ano"}
          passo={modo === "percentual" ? 0.5 : 500}
          ajuda="Preventiva e corretiva: peças, serviços e mão de obra de manutenção."
        />
      </div>
    </fieldset>
  );
}

function Capacidade({ r }: { r: ResultadoHoraMaquina }) {
  if (!r.capacidade) return null;
  return (
    <div className="ol-result__grid">
      <div className="ol-result__item">
        <b>{numero(r.capacidade.pecasPorHora, 1)}</b>
        <span>peças por hora produtiva</span>
      </div>
      <div className="ol-result__item">
        <b>{numero(r.capacidade.pecasPorAno)}</b>
        <span>peças por ano</span>
      </div>
      <div className="ol-result__item">
        <b>{moeda(r.capacidade.custoPorPeca)}</b>
        <span>de máquina por peça</span>
      </div>
    </div>
  );
}

function Ociosidade({ r, aproveitamento }: { r: ResultadoHoraMaquina; aproveitamento: number }) {
  if (r.efeitoDaOciosidade <= 0) {
    return <p className="ol-result__verdict">Com aproveitamento de 100%, a hora paga e a hora produtiva custam o mesmo.</p>;
  }
  return (
    <p className="ol-result__verdict">
      Dividido pelas horas pagas, o mesmo custo daria <strong>{moeda(r.porHoraPaga)}</strong> por hora. Com {numero(aproveitamento)}% de aproveitamento, a hora que
      produz sai <strong>{numero(r.efeitoDaOciosidade * 100)}% mais cara</strong>.
    </p>
  );
}

function Resultado({ r, aproveitamento, exemplo }: { r: ResultadoHoraMaquina | null; aproveitamento: number; exemplo: boolean }) {
  if (!r) {
    return (
      <div className="ol-card" aria-live="polite">
        <div className="ol-result__label">Custo por hora produtiva</div>
        <p className="ol-result__verdict">Informe dias, turnos, horas por turno e aproveitamento para calcular.</p>
      </div>
    );
  }
  return (
    <div className="ol-card" aria-live="polite">
      <div className="ol-result__label">Custo por hora produtiva</div>
      <div className="ol-result__main">{moeda(r.porHoraProdutiva)}</div>
      <Ociosidade r={r} aproveitamento={aproveitamento} />
      <div className="ol-result__grid">
        {r.componentes.map((c) => (
          <div key={c.chave} className="ol-result__item">
            <b>{moeda(c.porHora)}</b>
            <span>{c.rotulo} por hora</span>
          </div>
        ))}
      </div>
      <Capacidade r={r} />
      <p className="ol-result__note">
        {exemplo ? "Valores de exemplo, ilustrativos: troque pelos dados da sua máquina. " : ""}
        Custo anual de {moeda(r.custoAnual)} em {numero(r.horasProdutivasAno)} horas produtivas ({numero(r.horasPagasAno)} horas pagas).
      </p>
    </div>
  );
}

function dadosDoLead(r: ResultadoHoraMaquina | null, e: EntradaHoraMaquina): Record<string, number | string> {
  if (!r) return { resultado: "incompleto" };
  return {
    custo_hora_produtiva: Math.round(r.porHoraProdutiva * 100) / 100,
    custo_hora_paga: Math.round(r.porHoraPaga * 100) / 100,
    custo_anual: Math.round(r.custoAnual),
    aproveitamento_pct: e.aproveitamento,
    horas_produtivas_ano: Math.round(r.horasProdutivasAno),
    valor_aquisicao: e.valorAquisicao,
    operadores_por_maquina: e.operadoresPorMaquina,
    pecas_por_hora: r.capacidade ? Math.round(r.capacidade.pecasPorHora * 10) / 10 : "não informado",
  };
}

export function CalculadoraHoraMaquina() {
  const [valores, setValores] = useState<Valores>(valoresIniciais);
  const [modo, setModo] = useState<ModoDeManutencao>(EXEMPLO.manutencaoModo);
  const [exemplo, setExemplo] = useState(true);
  const eventos = useRef({ inicio: false, resultado: false });

  const entrada = useMemo(() => paraEntrada(valores, modo), [valores, modo]);
  const resultado = useMemo(() => calcularHoraMaquina(entrada), [entrada]);

  function medir(nova: EntradaHoraMaquina) {
    if (!eventos.current.inicio) {
      eventos.current.inicio = true;
      registrarEvento("tool_start", { ferramenta: FERRAMENTA });
    }
    const r = calcularHoraMaquina(nova);
    if (r && !eventos.current.resultado) {
      eventos.current.resultado = true;
      registrarEvento("tool_complete", { ferramenta: FERRAMENTA, custo_faixa: faixaDoCusto(r.porHoraProdutiva), aproveitamento_faixa: faixaDoAproveitamento(nova.aproveitamento) });
    }
  }

  function mudar(chave: Chave, valor: number | "") {
    const novos = { ...valores, [chave]: valor };
    setValores(novos);
    setExemplo(false);
    medir(paraEntrada(novos, modo));
  }

  function mudarModo(m: ModoDeManutencao) {
    setModo(m);
    setExemplo(false);
    medir(paraEntrada(valores, m));
  }

  const [investimento, energia, espaco, ...demais] = GRUPOS;
  return (
    <section className="ol-tool" id="ferramenta" aria-label="Calculadora de custo hora-máquina">
      <div className="ol-tool__inner">
        <div className="ol-card">
          <h2 className="ol-card__title">Dados da máquina</h2>
          <p className="ol-card__lead">Os campos vêm com um exemplo ilustrativo. Troque pelos números da sua máquina; o resultado muda na hora.</p>
          <Grupo {...investimento} valores={valores} aoMudar={mudar} />
          <Grupo {...energia} valores={valores} aoMudar={mudar} />
          <Manutencao modo={modo} valor={valores.manutencaoValor} aoMudarModo={mudarModo} aoMudarValor={(v) => mudar("manutencaoValor", v)} />
          <Grupo {...espaco} valores={valores} aoMudar={mudar} />
          {demais.map((g) => (
            <Grupo key={g.legenda} {...g} valores={valores} aoMudar={mudar} />
          ))}
        </div>
        <aside className="ol-tool__result">
          <Resultado r={resultado} aproveitamento={entrada.aproveitamento} exemplo={exemplo} />
        </aside>
      </div>
      <div className="ol-capture">
        <CapturaDeLead
          ferramenta={FERRAMENTA}
          titulo="Quer revisar o custo das suas máquinas com um especialista?"
          descricao="Um especialista da Origami Lab revisa a conta com você e mostra como medir o aproveitamento real das máquinas, em vez de estimar."
          rotuloBotao="Quero revisar meu custo"
          dados={dadosDoLead(resultado, entrada)}
        />
      </div>
    </section>
  );
}
