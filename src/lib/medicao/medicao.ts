/* Medição de aquisição: Amplitude + eventos de conversão.

   - Amplitude: @amplitude/unified, initAll com autocapture completo (page view,
     sessão, atribuição, cliques, formulários, Web Vitals) e Session Replay
     ligado pela configuração remota do projeto.
   - organic_landing_view: 1ª página da visita vinda de buscador ou de IA.
   - service_cta_click: clique em formulário, WhatsApp, e-mail ou telefone.
   - meeting_booking_click: clique em link de agendamento real.
   - page_not_found: visita à 404.
   Só envia no domínio de produção; localhost e previews ficam de fora. Todo
   evento também vai para window.dataLayer (GTM/GA4 no futuro). */

import {
  capturarOrigem,
  ehVisitaOrganica,
  hostDe,
  localDoCta,
  nomeDoEventoDeCta,
  normalizarCaminho,
  textoDoCta,
  tipoDaPagina,
  tipoDoCta,
  type ArmazenamentoSimples,
  type ElementoDoCta,
} from "./classificacao";

export const HOSTS_DE_PRODUCAO = ["origamilab.com.br", "www.origamilab.com.br"];
export const OPCOES_DO_AMPLITUDE = { analytics: { autocapture: true } } as const;

type Propriedades = Record<string, unknown>;

export type AmplitudeMinimo = {
  initAll(chave: string, opcoes: typeof OPCOES_DO_AMPLITUDE): unknown;
  track(nome: string, props?: Propriedades): unknown;
};

export type JanelaDaMedicao = {
  location: { search: string; pathname: string; hostname: string };
  sessionStorage?: ArmazenamentoSimples | null;
  console?: Pick<Console, "info" | "warn">;
  dataLayer?: Propriedades[];
  olMedicao?: Envio;
  document: {
    referrer: string;
    querySelector(seletor: string): unknown;
    addEventListener(tipo: "click", fn: (ev: { target: unknown }) => void, captura: boolean): void;
  };
};

export type OpcoesDaMedicao = {
  chave: string | undefined;
  carregar: () => Promise<AmplitudeMinimo>;
};

export type Envio = {
  eventos: { evento: string; props: Propriedades }[];
  enviar(nome: string, props: Propriedades): void;
  ligarAmplitude(amp: AmplitudeMinimo): void;
};

export function deveCarregarAmplitude(hostname: string): boolean {
  return HOSTS_DE_PRODUCAO.includes(hostname);
}

export function criarEnvio(root: JanelaDaMedicao): Envio {
  const debug = /[?&]medicao=debug\b/.test(root.location.search);
  let amplitude: AmplitudeMinimo | null = null;
  const pendentes: [string, Propriedades][] = [];
  const envio: Envio = {
    eventos: [],
    enviar(nome, props) {
      envio.eventos.push({ evento: nome, props });
      root.dataLayer = root.dataLayer || [];
      root.dataLayer.push({ event: nome, ...props });
      if (debug) root.console?.info("[medicao]", nome, props);
      if (amplitude) amplitude.track(nome, props);
      else pendentes.push([nome, props]);
    },
    ligarAmplitude(amp) {
      amplitude = amp;
      pendentes.splice(0).forEach(([n, p]) => amp.track(n, p));
    },
  };
  return envio;
}

function sessionStorageSeguro(root: JanelaDaMedicao): ArmazenamentoSimples | null {
  try {
    return root.sessionStorage ?? null;
  } catch {
    return null;
  }
}

function linkDoClique(alvo: unknown): ElementoDoCta | null {
  const el = alvo as Partial<ElementoDoCta> | null;
  if (!el || typeof el.closest !== "function") return null;
  return el.closest("a[href]");
}

function ouvirCtas(root: JanelaDaMedicao, envio: Envio, base: Propriedades): void {
  root.document.addEventListener(
    "click",
    (ev) => {
      const link = linkDoClique(ev.target);
      if (!link) return;
      const tipo = tipoDoCta(link.getAttribute("href"), link.getAttribute("data-cta"));
      if (!tipo) return;
      envio.enviar(nomeDoEventoDeCta(tipo), {
        ...base,
        cta_tipo: tipo,
        cta_texto: textoDoCta(link),
        cta_local: localDoCta(link),
      });
    },
    true,
  );
}

/** Uma única inicialização por carregamento de página. */
export async function carregarAmplitude(root: JanelaDaMedicao, envio: Envio, opcoes: OpcoesDaMedicao): Promise<void> {
  if (!deveCarregarAmplitude(root.location.hostname)) return;
  if (!opcoes.chave) {
    root.console?.warn("Amplitude API key missing — analytics disabled");
    return;
  }
  try {
    const amplitude = await opcoes.carregar();
    amplitude.initAll(opcoes.chave, OPCOES_DO_AMPLITUDE);
    envio.ligarAmplitude(amplitude);
  } catch {
    /* SDK bloqueado (extensão, rede): o site segue sem medição */
  }
}

export function iniciarMedicao(root: JanelaDaMedicao, opcoes: OpcoesDaMedicao): Promise<void> {
  const doc = root.document;
  const eh404 = !!doc.querySelector("[data-404]");
  const registro = capturarOrigem(root.location, doc.referrer, sessionStorageSeguro(root));
  const base: Propriedades = {
    ...registro.origem,
    pagina: normalizarCaminho(root.location.pathname),
    pagina_tipo: tipoDaPagina(root.location.pathname, eh404),
  };
  const envio = criarEnvio(root);
  root.olMedicao = envio;
  if (registro.nova && ehVisitaOrganica(registro.origem)) envio.enviar("organic_landing_view", base);
  if (eh404) envio.enviar("page_not_found", { ...base, referrer: hostDe(doc.referrer) || "(direto)" });
  ouvirCtas(root, envio, base);
  return carregarAmplitude(root, envio, opcoes);
}
