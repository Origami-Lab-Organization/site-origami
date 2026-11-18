"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { EMAIL, WHATSAPP } from "@/conteudo/contato";
import { FAIXAS_DE_FATURAMENTO, FAIXAS_DE_FUNCIONARIOS } from "@/conteudo/porte";
import { registrarEvento } from "@/lib/medicao/eventos";
import { CampoSelecao } from "./campos";

/* Formulário de contato das ferramentas. O resultado da ferramenta nunca fica
   atrás dele: o contato é pedido para mandar a análise de um especialista ou
   o material completo. Envia para /api/lead; se falhar, oferece WhatsApp. */

type Valor = string | number | boolean;

type Props = {
  /** Slug da ferramenta (vai no e-mail e nos eventos). */
  ferramenta: string;
  titulo: string;
  descricao: ReactNode;
  rotuloBotao: string;
  /** Respostas e resultado da ferramenta no momento do envio. */
  dados: Record<string, Valor>;
  /** Pedir faixa de faturamento e de funcionários (desligue se a ferramenta já pergunta). */
  pedirPorte?: boolean;
  mensagemDeSucesso?: ReactNode;
  /** Chamado depois do envio confirmado (ex.: liberar um download). */
  aoEnviar?: () => void;
};

type Estado = "livre" | "enviando" | "enviado" | "falhou";

function origemDaVisita(): Record<string, string> {
  try {
    const bruto = window.sessionStorage.getItem("ol_origem");
    return bruto ? (JSON.parse(bruto) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function texto(form: FormData, campo: string): string {
  return String(form.get(campo) ?? "").trim();
}

async function enviarLead(corpo: Record<string, unknown>): Promise<string | null> {
  try {
    const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(corpo) });
    const json = (await r.json()) as { ok?: boolean; leadId?: string };
    return r.ok && json.ok ? (json.leadId ?? "") : null;
  } catch {
    return null;
  }
}

function Alternativa({ ferramenta }: { ferramenta: string }) {
  const texto = `Olá! Usei a ferramenta ${ferramenta} no site da Origami Lab e quero conversar.`;
  return (
    <p className="ol-capture__status" role="alert">
      Não conseguimos enviar agora. Fale direto com a gente pelo{" "}
      <a href={`${WHATSAPP}?text=${encodeURIComponent(texto)}`} target="_blank" rel="noopener">
        WhatsApp
      </a>{" "}
      ou por <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>
  );
}

export function CapturaDeLead({ ferramenta, titulo, descricao, rotuloBotao, dados, pedirPorte = true, mensagemDeSucesso, aoEnviar }: Props) {
  const [estado, setEstado] = useState<Estado>("livre");
  const [faturamento, setFaturamento] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const iniciadoEm = useRef<number>(0);
  const base = useId();

  /* Conta do carregamento da página: robô envia no mesmo segundo; gente, não.
     (Contar do foco descartaria quem usa o preenchimento automático.) */
  useEffect(() => {
    iniciadoEm.current = Date.now();
  }, []);

  async function enviar(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = new FormData(ev.currentTarget);
    setEstado("enviando");
    const porte = pedirPorte ? { faturamento_faixa: faturamento, funcionarios_faixa: funcionarios } : {};
    const leadId = await enviarLead({
      nome: texto(form, "nome"),
      email: texto(form, "email"),
      empresa: texto(form, "empresa"),
      cargo: texto(form, "cargo"),
      telefone: texto(form, "telefone"),
      site: texto(form, "site"),
      consentimento: form.get("consentimento") === "on",
      iniciadoEm: iniciadoEm.current,
      ferramenta,
      pagina: window.location.pathname,
      dados: { ...dados, ...porte },
      origem: origemDaVisita(),
    });
    if (leadId === null) {
      setEstado("falhou");
      return;
    }
    setEstado("enviado");
    registrarEvento("contact_form_submit", { ferramenta, lead_id: leadId, ...porte });
    aoEnviar?.();
  }

  if (estado === "enviado") {
    return (
      <div className="ol-card" aria-live="polite">
        <div className="ol-capture__ok">{mensagemDeSucesso ?? "Recebemos. Um especialista da Origami vai ler o seu resultado e responder por e-mail."}</div>
      </div>
    );
  }

  return (
    <form className="ol-card" onSubmit={enviar}>
      <h2 className="ol-card__title">{titulo}</h2>
      <p className="ol-card__lead">{descricao}</p>
      <div className="ol-fields ol-fields--2">
        <div className="ol-field">
          <label className="ol-field__label" htmlFor={`${base}-nome`}>Nome</label>
          <input id={`${base}-nome`} className="ol-input" name="nome" autoComplete="name" required minLength={2} />
        </div>
        <div className="ol-field">
          <label className="ol-field__label" htmlFor={`${base}-email`}>E-mail corporativo</label>
          <input id={`${base}-email`} className="ol-input" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="ol-field">
          <label className="ol-field__label" htmlFor={`${base}-empresa`}>Empresa</label>
          <input id={`${base}-empresa`} className="ol-input" name="empresa" autoComplete="organization" required />
        </div>
        <div className="ol-field">
          <label className="ol-field__label" htmlFor={`${base}-cargo`}>Cargo</label>
          <input id={`${base}-cargo`} className="ol-input" name="cargo" autoComplete="organization-title" />
        </div>
        {pedirPorte ? (
          <>
            <CampoSelecao rotulo="Faturamento anual" valor={faturamento} aoMudar={setFaturamento} opcoes={FAIXAS_DE_FATURAMENTO} obrigatorio />
            <CampoSelecao rotulo="Funcionários" valor={funcionarios} aoMudar={setFuncionarios} opcoes={FAIXAS_DE_FUNCIONARIOS} obrigatorio />
          </>
        ) : null}
        <div className="ol-field">
          <label className="ol-field__label" htmlFor={`${base}-telefone`}>WhatsApp (opcional)</label>
          <input id={`${base}-telefone`} className="ol-input" name="telefone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="ol-hp" aria-hidden="true">
        <label htmlFor={`${base}-site`}>Não preencha</label>
        <input id={`${base}-site`} name="site" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="ol-fields">
        <label className="ol-check">
          <input type="checkbox" name="consentimento" required />
          <span>
            Concordo que a Origami Lab use estes dados para responder a este contato, conforme a{" "}
            <a href="/politica-de-privacidade" target="_blank">política de privacidade</a>.
          </span>
        </label>
      </div>
      <div className="ol-capture__actions">
        <button className="ol-btn ol-btn--primary" type="submit" disabled={estado === "enviando"}>
          {estado === "enviando" ? "Enviando…" : rotuloBotao}
        </button>
      </div>
      {estado === "falhou" ? <Alternativa ferramenta={ferramenta} /> : null}
    </form>
  );
}
