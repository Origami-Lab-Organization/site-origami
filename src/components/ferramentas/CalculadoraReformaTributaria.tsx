"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { aliquotasDoIbsPrevistas, exigeAliquotas, faixaDeValor, UFS, type Codigo, type Resultado, type TipoDeItem } from "@/lib/reforma-tributaria/calculo";
import { registrarEvento } from "@/lib/medicao/eventos";
import { CampoNumero, CampoSelecao, numero } from "./campos";
import { CapturaDeLead } from "./CapturaDeLead";
import { DetalheBloqueado } from "./DetalheBloqueado";
import { useDetalhamentoLiberado } from "./liberacao";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";

/* Calculadora da reforma tributária. O cálculo é feito pela API pública da
   calculadora oficial da Receita Federal, chamada pelo nosso servidor
   (/api/reforma-tributaria/*). Nada é guardado. */

const FERRAMENTA = "calculadora-reforma-tributaria";
const EXEMPLO: Codigo = { codigo: "84669330", descricao: "Partes e acessórios para máquinas da posição 84.58 (tornos)" };

type Situacao = { cst: string; descricao: string; classificacoes: { codigo: string; descricao: string }[] };
type Estado = "livre" | "calculando" | "pronto" | "erro";

function semAssinatura(): () => void {
  return () => {};
}

function hoje(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function formatarCodigo(tipo: TipoDeItem, c: string): string {
  if (tipo === "ncm" && c.length === 8) return `${c.slice(0, 4)}.${c.slice(4, 6)}.${c.slice(6)}`;
  if (tipo === "nbs" && c.length === 9) return `${c.slice(0, 1)}.${c.slice(1, 5)}.${c.slice(5, 7)}.${c.slice(7)}`;
  return c;
}

/** Imposto se mostra com centavos: R$ 0,50 não pode virar R$ 1. */
function reais(v: number): string {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function percentual(v: number): string {
  return `${numero(v, 2)}%`;
}

async function json<T>(url: string): Promise<T | null> {
  try {
    const r = await fetch(url);
    return r.ok ? ((await r.json()) as T) : null;
  } catch {
    return null;
  }
}

/* ---- dados de apoio (municípios, classificações, sugestões) ---- */

function useMunicipios(uf: string) {
  const [lista, setLista] = useState<{ codigo: number; nome: string }[]>([]);
  useEffect(() => {
    let vivo = true;
    void json<{ codigo: number; nome: string }[]>(`/api/reforma-tributaria/municipios?uf=${uf}`).then((l) => vivo && setLista(l ?? []));
    return () => {
      vivo = false;
    };
  }, [uf]);
  return lista;
}

function useSituacoes(mes: string) {
  const [lista, setLista] = useState<Situacao[]>([]);
  useEffect(() => {
    if (!mes) return;
    let vivo = true;
    void json<Situacao[]>(`/api/reforma-tributaria/classificacoes?data=${mes}-01`).then((l) => vivo && setLista(l ?? []));
    return () => {
      vivo = false;
    };
  }, [mes]);
  return lista;
}

function useSugestoes(tipo: TipoDeItem, termo: string, data: string) {
  const [lista, setLista] = useState<Codigo[]>([]);
  useEffect(() => {
    if (termo.trim().length < 2) return;
    let vivo = true;
    const t = setTimeout(() => {
      void json<Codigo[]>(`/api/reforma-tributaria/codigos?tipo=${tipo}&q=${encodeURIComponent(termo)}&data=${data}`).then((l) => vivo && setLista(l ?? []));
    }, 250);
    return () => {
      vivo = false;
      clearTimeout(t);
    };
  }, [tipo, termo, data]);
  return termo.trim().length < 2 ? [] : lista;
}

/* ---- partes da tela ---- */

function BuscaDeCodigo({ tipo, data, codigo, aoEscolher }: { tipo: TipoDeItem; data: string; codigo: Codigo | null; aoEscolher: (c: Codigo) => void }) {
  const [termo, setTermo] = useState("");
  const sugestoes = useSugestoes(tipo, termo, data);
  const rotulo = tipo === "ncm" ? "Produto (NCM)" : "Serviço (NBS)";
  return (
    <div className="ol-field">
      <label className="ol-field__label" htmlFor="rt-codigo">
        {rotulo}
      </label>
      <input
        id="rt-codigo"
        className="ol-input"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder={tipo === "ncm" ? "Código (ex.: 8466) ou palavras da descrição" : "Código ou palavras da descrição do serviço"}
        autoComplete="off"
      />
      {sugestoes.length ? (
        <ul className="ol-sugestoes" aria-label="Sugestões">
          {sugestoes.map((s) => (
            <li key={s.codigo}>
              <button
                type="button"
                onClick={() => {
                  aoEscolher(s);
                  setTermo("");
                }}
              >
                <b>{formatarCodigo(tipo, s.codigo)}</b> {s.descricao}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      {codigo ? (
        <div className="ol-selecionado">
          <b>{formatarCodigo(tipo, codigo.codigo)}</b> {codigo.descricao}
        </div>
      ) : null}
    </div>
  );
}

function SeletorDeClassificacao({ situacoes, valor, aoMudar }: { situacoes: Situacao[]; valor: string; aoMudar: (v: string) => void }) {
  return (
    <div className="ol-field">
      <label className="ol-field__label" htmlFor="rt-class">
        Situação tributária (CST e cClassTrib)
      </label>
      <select id="rt-class" className="ol-select" value={valor} onChange={(e) => aoMudar(e.target.value)}>
        {situacoes.length ? null : <option value="000001">000 · 000001 · Tributação integral</option>}
        {situacoes.map((s) => (
          <optgroup key={s.cst} label={`${s.cst} · ${s.descricao}`}>
            {s.classificacoes.map((c) => (
              <option key={c.codigo} value={c.codigo} title={c.descricao}>
                {c.codigo} · {c.descricao.length > 90 ? `${c.descricao.slice(0, 90)}…` : c.descricao}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <span className="ol-field__hint">Na dúvida, mantenha a tributação integral (000001), que é a regra geral; a classificação final é da sua contabilidade.</span>
    </div>
  );
}

type Simulacao = { cbs: number | ""; ibsEstadual: number | ""; ibsMunicipal: number | "" };

function AliquotasDaSimulacao({ ano, valores, aoMudar }: { ano: number; valores: Simulacao; aoMudar: (v: Simulacao) => void }) {
  return (
    <fieldset className="ol-fieldset">
      <legend>Alíquotas para simular {ano}</legend>
      <p className="ol-field__hint" style={{ marginTop: 8 }}>
        As alíquotas de referência de 2027 em diante ainda serão fixadas por resolução do Senado Federal (ADCT, art. 130). Informe as que quer simular.
        {ano <= 2028 ? " Em 2027 e 2028, o IBS já tem 0,05% estadual e 0,05% municipal (ADCT, art. 127)." : ""}
      </p>
      <div className="ol-fields ol-fields--2">
        <CampoNumero rotulo="CBS" sufixo="%" passo={0.01} valor={valores.cbs} aoMudar={(v) => aoMudar({ ...valores, cbs: v })} />
        <CampoNumero rotulo="IBS estadual" sufixo="%" passo={0.01} valor={valores.ibsEstadual} aoMudar={(v) => aoMudar({ ...valores, ibsEstadual: v })} />
        <CampoNumero rotulo="IBS municipal" sufixo="%" passo={0.01} valor={valores.ibsMunicipal} aoMudar={(v) => aoMudar({ ...valores, ibsMunicipal: v })} />
      </div>
    </fieldset>
  );
}

function Linha({ rotulo, t }: { rotulo: string; t: { aliquota: number; valor: number } }) {
  return (
    <div className="ol-result__item">
      <b>{reais(t.valor)}</b>
      <span>
        {rotulo} · {percentual(t.aliquota)}
      </span>
    </div>
  );
}

function PainelDeResultado({ estado, resultado, mensagem, versao }: { estado: Estado; resultado: Resultado | null; mensagem: string; versao: string | null }) {
  if (estado === "erro") return <p className="ol-result__verdict" role="status">{mensagem}</p>;
  if (!resultado) {
    return <p className="ol-result__verdict">{estado === "calculando" ? "Calculando na Receita Federal…" : "Preencha a operação e clique em calcular."}</p>;
  }
  return (
    <>
      <div className="ol-result__main">{reais(resultado.total)}</div>
      <p className="ol-result__verdict">
        de CBS e IBS sobre {reais(resultado.base)}, ou {percentual(resultado.carga)} da base.
      </p>
      {resultado.simulado ? <span className="ol-selo">Simulação com as alíquotas informadas</span> : null}
      <DetalheBloqueado ferramenta={FERRAMENTA} oQueLibera="CBS, IBS estadual e IBS municipal separados, com a memória de cálculo da Receita">
      <div className="ol-result__grid">
        <Linha rotulo="CBS" t={resultado.cbs} />
        <Linha rotulo="IBS estadual" t={resultado.ibsEstadual} />
        <Linha rotulo="IBS municipal" t={resultado.ibsMunicipal} />
      </div>
      {resultado.memoria.length ? (
        <ul className="ol-result__list">
          {resultado.memoria.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      ) : null}
      </DetalheBloqueado>
      <p className="ol-result__note">
        Calculado pela API pública da{" "}
        <a href="https://github.com/ReceitaFederal/calculadora-rtc-regime-regular" target="_blank" rel="noopener">
          calculadora oficial da Receita Federal
        </a>{" "}
        (ambiente piloto){versao ? `, tabelas ${versao}` : ""}. Não substitui a apuração da sua contabilidade.
      </p>
    </>
  );
}

/* ---- calculadora ---- */

export function CalculadoraReformaTributaria() {
  /* "Hoje" só existe no navegador: a página é gerada no build, e o hoje do build
     não é o de quem visita. No servidor fica vazio; a escolha do visitante vence. */
  const hojeNoNavegador = useSyncExternalStore(semAssinatura, hoje, () => "");
  const [dataEscolhida, setData] = useState<string | null>(null);
  const data = dataEscolhida ?? hojeNoNavegador;
  const [uf, setUf] = useState("MG");
  const [municipio, setMunicipio] = useState(3126109);
  const [tipo, setTipo] = useState<TipoDeItem>("ncm");
  const [codigo, setCodigo] = useState<Codigo | null>(EXEMPLO);
  const [cClassTrib, setCClassTrib] = useState("000001");
  const [valor, setValor] = useState<number | "">(1000);
  const [simulacao, setSimulacao] = useState<Simulacao>({ cbs: "", ibsEstadual: "", ibsMunicipal: "" });
  const [estado, setEstado] = useState<Estado>("livre");
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const liberado = useDetalhamentoLiberado();
  const [mensagem, setMensagem] = useState("");
  const [versao, setVersao] = useState<string | null>(null);
  const tocou = useRef(false);
  const concluiu = useRef(false);

  const municipios = useMunicipios(uf);
  const situacoes = useSituacoes(data.slice(0, 7));
  const ano = Number(data.slice(0, 4)) || new Date().getFullYear();
  const simula = data ? exigeAliquotas(data) : false;
  const cst = useMemo(() => situacoes.find((s) => s.classificacoes.some((c) => c.codigo === cClassTrib))?.cst ?? "000", [situacoes, cClassTrib]);

  function mexeu() {
    if (tocou.current) return;
    tocou.current = true;
    registrarEvento("tool_start", { ferramenta: FERRAMENTA });
  }

  function mudarData(v: string) {
    mexeu();
    setData(v);
    const ibs = aliquotasDoIbsPrevistas(v);
    if (ibs) setSimulacao((s) => ({ ...s, ...ibs }));
  }

  function mudarUf(v: string) {
    mexeu();
    setUf(v);
    setMunicipio(0);
  }

  function mudarTipo(v: TipoDeItem) {
    mexeu();
    setTipo(v);
    setCodigo(null);
  }

  async function calcular() {
    mexeu();
    setEstado("calculando");
    setResultado(null);
    const corpo = {
      data, uf, municipio, tipo, codigo: codigo?.codigo ?? "", cst, cClassTrib, valor,
      aliquotas: simula ? simulacao : undefined,
    };
    try {
      const r = await fetch("/api/reforma-tributaria/calcular", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(corpo) });
      const j = (await r.json()) as { ok: boolean; resultado?: Resultado; versao?: string | null; mensagem?: string; erros?: string[] };
      if (!j.ok || !j.resultado) {
        setEstado("erro");
        setMensagem(j.mensagem ?? (j.erros?.length ? `Confira os campos: ${j.erros.join(", ")}.` : "Não foi possível calcular agora."));
        return;
      }
      setResultado(j.resultado);
      setVersao(j.versao ?? null);
      setEstado("pronto");
      if (!concluiu.current) {
        concluiu.current = true;
        registrarEvento("tool_complete", { ferramenta: FERRAMENTA, ano, uf, tipo, cst, valor_faixa: faixaDeValor(Number(valor) || 0), simulado: j.resultado.simulado });
      }
    } catch {
      setEstado("erro");
      setMensagem("A calculadora da Receita não respondeu. Tente de novo em alguns minutos.");
    }
  }

  const dadosDoLead: Record<string, string | number | boolean> = { ano, uf, municipio, tipo, codigo: codigo?.codigo ?? "", cst, cClassTrib };
  if (resultado) {
    Object.assign(dadosDoLead, {
      base: resultado.base,
      cbs: resultado.cbs.valor,
      ibs: resultado.ibsEstadual.valor + resultado.ibsMunicipal.valor,
      carga_percentual: Number(resultado.carga.toFixed(2)),
      simulado: resultado.simulado,
    });
  }

  return (
    <>
      <section className="ol-tool" id="ferramenta">
        <div className="ol-tool__inner">
          <div className="ol-card">
            <h2 className="ol-card__title">Calcule a CBS e o IBS de uma venda</h2>
            <p className="ol-card__lead">Um item por vez. O exemplo abaixo é uma peça de torno vendida em Formiga (MG); troque pelos dados da sua operação.</p>
            <div className="ol-fields ol-fields--2">
              <div className="ol-field">
                <label className="ol-field__label" htmlFor="rt-data">
                  Data da venda (fato gerador)
                </label>
                <input id="rt-data" className="ol-input" type="date" min="2026-01-01" max="2033-12-31" value={data} onChange={(e) => mudarData(e.target.value)} />
              </div>
              <CampoNumero rotulo="Valor da operação (base de cálculo)" sufixo="R$" passo={0.01} valor={valor} aoMudar={(v) => (mexeu(), setValor(v))} />
              <CampoSelecao rotulo="Estado" valor={uf} aoMudar={mudarUf} opcoes={UFS.map(([s]) => ({ valor: s, rotulo: s }))} />
              <CampoSelecao
                rotulo="Município"
                valor={municipio ? String(municipio) : ""}
                aoMudar={(v) => (mexeu(), setMunicipio(Number(v)))}
                opcoes={municipios.map((m) => ({ valor: String(m.codigo), rotulo: m.nome }))}
              />
              <CampoSelecao
                rotulo="O que está sendo vendido"
                valor={tipo}
                aoMudar={(v) => mudarTipo(v as TipoDeItem)}
                opcoes={[
                  { valor: "ncm", rotulo: "Produto (NCM)" },
                  { valor: "nbs", rotulo: "Serviço (NBS)" },
                ]}
              />
            </div>
            <div className="ol-fields">
              <BuscaDeCodigo tipo={tipo} data={data} codigo={codigo} aoEscolher={(c) => (mexeu(), setCodigo(c))} />
              <SeletorDeClassificacao situacoes={situacoes} valor={cClassTrib} aoMudar={(v) => (mexeu(), setCClassTrib(v))} />
            </div>
            {simula ? <AliquotasDaSimulacao ano={ano} valores={simulacao} aoMudar={(v) => (mexeu(), setSimulacao(v))} /> : null}
            <div className="ol-capture__actions">
              <button className="ol-btn ol-btn--primary" type="button" onClick={() => void calcular()} disabled={estado === "calculando" || !data}>
                {estado === "calculando" ? "Calculando…" : "Calcular"}
              </button>
            </div>
          </div>
          <div className="ol-card ol-tool__result" aria-live="polite">
            <div className="ol-result__label">{simula ? `Simulação de ${ano}` : `CBS e IBS em ${ano}`}</div>
            <PainelDeResultado estado={estado} resultado={resultado} mensagem={mensagem} versao={versao} />
          </div>
        </div>
      </section>
      <div className="ol-capture">
        <CapturaDeLead
          ferramenta={FERRAMENTA}
          titulo={liberado ? "Seus sistemas estão prontos para a reforma?" : "Libere o detalhamento por tributo"}
          descricao={
            liberado
              ? "A nota fiscal passa a levar os grupos de IBS e CBS, e o ERP precisa conhecer a classificação tributária de cada item. Deixe o contato: um especialista da Origami olha o seu caso e diz o que muda na emissão e nas integrações."
              : "Deixe seu nome e e-mail ou WhatsApp para ver CBS, IBS estadual e IBS municipal separados, com alíquotas e a memória de cálculo da Receita. Um especialista da Origami recebe a operação e diz o que muda na emissão e nas integrações."
          }
          rotuloBotao={liberado ? "Quero a análise" : "Ver o detalhamento"}
          dados={dadosDoLead}
        />
      </div>
      <ChamadaDaOrigami frente="tributaria" pagina={`/${FERRAMENTA}`} formulario={`#contato-${FERRAMENTA}`} />
    </>
  );
}
