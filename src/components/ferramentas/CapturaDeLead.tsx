"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { EMAIL, FORMULARIO_ALTERNATIVO, WHATSAPP } from "@/conteudo/contato";
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
  contatoEssencial?: boolean;
  pedirMensagem?: boolean;
  mensagemObrigatoria?: boolean;
  camposAdicionais?: ReactNode;
  mensagemAlternativa?: string;
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
    const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(corpo), signal: AbortSignal.timeout(15_000) });
    const json = (await r.json()) as { ok?: boolean; leadId?: string };
    return r.ok && json.ok ? (json.leadId ?? "") : null;
  } catch {
    return null;
  }
}

/* Mesmo compromisso da FAQ de /ferramentas ("O que acontece se eu deixar o contato?"). */
const PASSOS_DEPOIS_DO_ENVIO = [
  "Um especialista da Origami lê o seu resultado.",
  "Você recebe por e-mail o que vale olhar primeiro.",
  "Se fizer sentido, ele propõe uma conversa de 30 minutos.",
];

function Alternativa({ ferramenta, mensagem }: { ferramenta: string; mensagem?: string }) {
  const texto = mensagem ?? `Olá! Usei a ferramenta ${ferramenta} no site da Origami Lab e quero conversar.`;
  return (
    <p className="ol-capture__status" role="alert">
      Não conseguimos enviar agora. Fale direto com a gente pelo{" "}
      <a href={`${WHATSAPP}?text=${encodeURIComponent(texto)}`} target="_blank" rel="noopener">
        WhatsApp
      </a>{" "}
      ou por <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Você também pode usar o{" "}
      <a href={FORMULARIO_ALTERNATIVO} target="_blank" rel="noopener">formulário alternativo</a>.
    </p>
  );
}

export function CapturaDeLead({ ferramenta, titulo, descricao, rotuloBotao, dados, pedirPorte = true, mensagemDeSucesso, aoEnviar, contatoEssencial, pedirMensagem, mensagemObrigatoria, camposAdicionais, mensagemAlternativa }: Props) {
  const [estado, setEstado] = useState<Estado>("livre");
  const [faturamento, setFaturamento] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const iniciadoEm = useRef<number>(0);
  const emEnvio = useRef(false);
  const iniciouFormulario = useRef(false);
  const base = useId();

  /* Conta do carregamento da página: robô envia no mesmo segundo; gente, não.
     (Contar do foco descartaria quem usa o preenchimento automático.) */
  useEffect(() => {
    iniciadoEm.current = Date.now();
  }, []);

  async function enviar(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (emEnvio.current) return;
    emEnvio.current = true;
    const form = new FormData(ev.currentTarget);
    setEstado("enviando");
    const porte = pedirPorte ? { faturamento_faixa: faturamento, funcionarios_faixa: funcionarios } : {};
    const leadId = await enviarLead({
      nome: texto(form, "nome"),
      email: texto(form, "email"),
      empresa: texto(form, "empresa"),
      cargo: texto(form, "cargo"),
      telefone: texto(form, "telefone"),
      mensagem: texto(form, "mensagem"),
      site: texto(form, "site"),
      consentimento: form.get("consentimento") === "on",
      iniciadoEm: iniciadoEm.current,
      ferramenta,
      pagina: window.location.pathname,
      dados: { ...dados, ...porte },
      origem: origemDaVisita(),
    });
    if (leadId === null) {
      emEnvio.current = false;
      setEstado("falhou");
      registrarEvento("contact_form_error", { formulario: ferramenta });
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

  const campoTelefone = (rotulo: string) => (
    <div className="ol-field">
      <label className="ol-field__label" htmlFor={`${base}-telefone`}>{rotulo}</label>
      <input id={`${base}-telefone`} className="ol-input" name="telefone" type="tel" autoComplete="tel" />
    </div>
  );

  return (
    <form className="ol-card ol-lead" id={`contato-${ferramenta}`} method="post" action="/api/lead" onSubmit={enviar} onFocusCapture={() => {
      if (iniciouFormulario.current) return;
      iniciouFormulario.current = true;
      registrarEvento("contact_form_start", { formulario: ferramenta });
    }}>
      <div className="ol-lead__intro">
        <h2 className="ol-card__title">{titulo}</h2>
        <p className="ol-card__lead">{descricao}</p>
        {/* Nas ferramentas o contato vem depois de um resultado: dizer o que
            acontece com ele tira a dúvida que segura o envio. Na página de
            conversa (contatoEssencial) os passos já estão ao lado do formulário. */}
        {!contatoEssencial ? (
          <ol className="ol-lead__passos" aria-label="O que acontece depois do envio">
            {PASSOS_DEPOIS_DO_ENVIO.map((passo) => <li key={passo}>{passo}</li>)}
          </ol>
        ) : null}
        <noscript><p className="ol-card__lead">Para enviar este formulário, ative o JavaScript ou use o <a href={WHATSAPP}>WhatsApp</a> ou <a href={`mailto:${EMAIL}`}>e-mail</a>.</p></noscript>
      </div>
      <div className="ol-lead__campos">
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
        {!contatoEssencial ? <div className="ol-field">
          <label className="ol-field__label" htmlFor={`${base}-cargo`}>Cargo</label>
          <input id={`${base}-cargo`} className="ol-input" name="cargo" autoComplete="organization-title" />
        </div> : null}
        {pedirPorte ? null : campoTelefone("WhatsApp (opcional)")}
      </div>
      {pedirPorte ? (
        <fieldset className="ol-lead__opcionais">
          <legend>Opcional · ajuda o especialista a preparar a conversa</legend>
          <div className="ol-fields ol-fields--3">
            <CampoSelecao rotulo="Faturamento anual" valor={faturamento} aoMudar={setFaturamento} opcoes={FAIXAS_DE_FATURAMENTO} />
            <CampoSelecao rotulo="Funcionários" valor={funcionarios} aoMudar={setFuncionarios} opcoes={FAIXAS_DE_FUNCIONARIOS} />
            {campoTelefone("WhatsApp")}
          </div>
        </fieldset>
      ) : null}
      {camposAdicionais || pedirMensagem ? <div className="ol-fields">
        {camposAdicionais}
        {pedirMensagem ? <div className="ol-field">
          <label className="ol-field__label" htmlFor={`${base}-mensagem`}>O que acontece hoje e o que você quer melhorar?</label>
          <textarea id={`${base}-mensagem`} className="ol-input" name="mensagem" rows={4} maxLength={2000} required={mensagemObrigatoria} />
        </div> : null}
      </div> : null}
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
      {estado === "falhou" ? <Alternativa ferramenta={ferramenta} mensagem={mensagemAlternativa} /> : null}
      </div>
    </form>
  );
}
