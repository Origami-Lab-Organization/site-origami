/* Medição de aquisição: Amplitude + GA4 + eventos de conversão.

   - Amplitude: @amplitude/unified, initAll com autocapture completo (page view,
     sessão, atribuição, cliques, formulários, Web Vitals) e Session Replay
     ligado pela configuração remota do projeto.
   - GA4: gtag.js com page_view e os mesmos eventos abaixo (ver ga4.ts).
   - organic_landing_view: 1ª página da visita vinda de buscador ou de IA.
   - service_cta_click: clique em formulário, WhatsApp, e-mail ou telefone.
   - meeting_booking_click: clique em link de agendamento real.
   - page_not_found: visita à 404.
   Só envia no domínio de produção; localhost e previews ficam de fora. Todo
   evento também vai para window.dataLayer, para um GTM no futuro. */

import { idDoGa4Valido, iniciarGtag, paraGa4, type GtagMinimo } from "./ga4";
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
  dataLayer?: unknown[];
  gtag?: GtagMinimo;
  olMedicao?: Envio;
  document: {
    referrer: string;
    querySelector(seletor: string): unknown;
    addEventListener(tipo: "click", fn: (ev: { target: unknown }) => void, captura: boolean): void;
  };
};

export type OpcoesDoGa4 = {
  id: string | undefined;
  /** Injeta o <script> do gtag.js (no navegador, um script async no <head>). */
  carregarScript: (src: string) => void;
};

export type OpcoesDaMedicao = {
  chave: string | undefined;
  carregar: () => Promise<AmplitudeMinimo>;
  ga4?: OpcoesDoGa4;
};

export type Envio = {
  eventos: { evento: string; props: Propriedades }[];
  enviar(nome: string, props: Propriedades): void;
  /** Envia com a origem da visita e a página já anexadas (para ferramentas e formulários). */
  registrar(nome: string, props?: Propriedades): void;
  ligarAmplitude(amp: AmplitudeMinimo): void;
  ligarGa4(gtag: GtagMinimo): void;
};

export function deveCarregarAmplitude(hostname: string): boolean {
  return HOSTS_DE_PRODUCAO.includes(hostname);
}

export function criarEnvio(root: JanelaDaMedicao, base: Propriedades = {}): Envio {
  const debug = /[?&]medicao=debug\b/.test(root.location.search);
  let amplitude: AmplitudeMinimo | null = null;
  let gtag: GtagMinimo | null = null;
  const pendentes: [string, Propriedades][] = [];
  const envio: Envio = {
    eventos: [],
    enviar(nome, props) {
      envio.eventos.push({ evento: nome, props });
      root.dataLayer = root.dataLayer || [];
      root.dataLayer.push({ event: nome, ...props });
      if (debug) root.console?.info("[medicao]", nome, props);
      if (gtag) gtag("event", nome, paraGa4(props));
      if (amplitude) amplitude.track(nome, props);
      else pendentes.push([nome, props]);
    },
    registrar(nome, props = {}) {
      envio.enviar(nome, { ...base, ...props });
    },
    ligarAmplitude(amp) {
      amplitude = amp;
      pendentes.splice(0).forEach(([n, p]) => amp.track(n, p));
    },
    ligarGa4(g) {
      gtag = g;
    },
  };
  return envio;
}

/** Liga o GA4 antes do primeiro evento da página. O gtag enfileira no
 *  dataLayer até o gtag.js carregar, então nada se perde no caminho. */
export function ligarGa4(root: JanelaDaMedicao, envio: Envio, ga4: OpcoesDoGa4 | undefined): void {
  if (!ga4 || !deveCarregarAmplitude(root.location.hostname)) return;
  if (!idDoGa4Valido(ga4.id)) {
    root.console?.warn("GA4 measurement ID missing or invalid — GA4 disabled");
    return;
  }
  envio.ligarGa4(iniciarGtag(root, ga4.id.trim(), ga4.carregarScript));
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
  const envio = criarEnvio(root, base);
  root.olMedicao = envio;
  ligarGa4(root, envio, opcoes.ga4);
  if (registro.nova && ehVisitaOrganica(registro.origem)) envio.enviar("organic_landing_view", base);
  if (eh404) envio.enviar("page_not_found", { ...base, referrer: hostDe(doc.referrer) || "(direto)" });
  ouvirCtas(root, envio, base);
  return carregarAmplitude(root, envio, opcoes);
}
