/* Classificação da visita e dos cliques: funções puras, sem DOM real.
   Testadas em medicao.test.ts. */

export type Parametros = Partial<Record<(typeof UTMS)[number] | (typeof IDS_DE_CLIQUE_PAGO)[number], string>>;

export type Origem = {
  canal: string;
  origem: string;
  pagina_entrada: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

export type ArmazenamentoSimples = Pick<Storage, "getItem" | "setItem">;

/** O mínimo de um elemento do DOM que a classificação de CTA usa. */
export type ElementoDoCta = {
  textContent?: string | null;
  getAttribute(nome: string): string | null;
  closest(seletor: string): (ElementoDoCta & { id?: string; className?: string }) | null;
};

export const CHAVE_ORIGEM = "ol_origem";
export const UTMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const IDS_DE_CLIQUE_PAGO = ["gclid", "gbraid", "wbraid", "msclkid"] as const;
const MEDIUMS_PAGOS = ["cpc", "ppc", "paid", "paidsearch", "paid_search", "display", "cpm", "ads"];
const CANAIS_ORGANICOS = ["busca_organica", "assistente_ia"];

/* Assistentes de IA vêm antes dos buscadores: gemini.google.com é IA, não busca. */
const ASSISTENTES_IA = [
  /(^|\.)chatgpt\.com$/, /(^|\.)chat\.openai\.com$/, /(^|\.)perplexity\.ai$/,
  /^gemini\.google\.com$/, /^bard\.google\.com$/, /^copilot\.microsoft\.com$/,
  /(^|\.)claude\.ai$/, /(^|\.)chat\.deepseek\.com$/, /(^|\.)meta\.ai$/,
  /(^|\.)grok\.com$/, /(^|\.)you\.com$/, /(^|\.)phind\.com$/,
];
const BUSCADORES = [
  /^(www\.)?google\.[a-z.]+$/, /(^|\.)bing\.com$/, /(^|\.)duckduckgo\.com$/,
  /(^|\.)search\.yahoo\.com$/, /(^|\.)ecosia\.org$/, /(^|\.)yandex\.[a-z.]+$/,
  /^search\.brave\.com$/, /(^|\.)baidu\.com$/, /(^|\.)qwant\.com$/,
  /(^|\.)startpage\.com$/, /^com\.google\.android\.googlequicksearchbox$/,
];
const REDES_SOCIAIS = [
  /(^|\.)linkedin\.com$/, /^lnkd\.in$/, /(^|\.)instagram\.com$/,
  /(^|\.)facebook\.com$/, /^t\.co$/, /(^|\.)x\.com$/, /(^|\.)twitter\.com$/,
  /(^|\.)youtube\.com$/, /(^|\.)threads\.net$/, /(^|\.)whatsapp\.com$/,
];
const PAGINAS_DE_SERVICO = ["/desenvolvimento-de-software", "/consultoria-estrategica", "/acesso-a-capital"];

/* Ancorados no início do href: um link qualquer com "wa.me/" na query não é CTA. */
const CTAS = [
  {
    tipo: "agendamento",
    padrao: /^https:\/\/(outlook\.office(365)?\.com\/(owa\/calendar\/|book\/|bookwithme\/)|bookings\.cloud\.microsoft\/|calendly\.com\/|cal\.com\/)/,
  },
  { tipo: "formulario", padrao: /^https:\/\/forms\.(cloud\.microsoft|office\.com|microsoft\.com)\// },
  { tipo: "whatsapp", padrao: /^https:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\// },
  { tipo: "email", padrao: /^mailto:/ },
  { tipo: "telefone", padrao: /^tel:/ },
];

function combina(host: string, lista: RegExp[]): boolean {
  return lista.some((re) => re.test(host));
}

export function hostDe(url: string | null | undefined): string {
  if (!url) return "";
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

function minusculo(valor: unknown): string {
  return String(valor ?? "").trim().toLowerCase();
}

/** Canal pelo que a URL declara (UTM, id de clique). null = a URL não diz. */
export function canalPorParametros(params: Parametros): string | null {
  const temIdPago = IDS_DE_CLIQUE_PAGO.some((k) => !!params[k]);
  const medium = minusculo(params.utm_medium);
  const source = minusculo(params.utm_source);
  if (temIdPago || MEDIUMS_PAGOS.includes(medium)) return "pago";
  /* O ChatGPT acrescenta utm_source=chatgpt.com aos links que cita. */
  if (source && combina(source, ASSISTENTES_IA)) return "assistente_ia";
  if (medium === "organic") return "busca_organica";
  if (source || medium) return "campanha";
  return null;
}

/** Canal pelo domínio de onde a visita veio. */
export function canalPorReferrer(host: string, hostAtual: string): string {
  if (!host) return "direto";
  if (host === hostAtual) return "interno";
  if (combina(host, ASSISTENTES_IA)) return "assistente_ia";
  if (combina(host, BUSCADORES)) return "busca_organica";
  if (combina(host, REDES_SOCIAIS)) return "social";
  return "referencia";
}

export function classificarCanal(referrer: string, params: Parametros, hostAtual: string) {
  const host = hostDe(referrer);
  const canal = canalPorParametros(params) ?? canalPorReferrer(host, hostAtual);
  return { canal, origem: minusculo(params.utm_source) || host || "(direto)" };
}

export function normalizarCaminho(caminho: string | null | undefined): string {
  const p = String(caminho || "/").replace(/\.html$/, "").replace(/\/index$/, "/");
  return p.length > 1 ? p.replace(/\/+$/, "") || "/" : "/";
}

export function tipoDaPagina(caminho: string, eh404: boolean): string {
  const p = normalizarCaminho(caminho);
  if (eh404) return "404";
  if (p === "/") return "home";
  if (p === "/cases") return "cases";
  if (p.startsWith("/cases/")) return "case";
  if (PAGINAS_DE_SERVICO.includes(p)) return "servico";
  return "conteudo";
}

/** Tipo de CTA pelo destino. data-cta no link tem prioridade. null = não é CTA. */
export function tipoDoCta(href: string | null | undefined, marcado?: string | null): string | null {
  if (marcado) return marcado;
  const h = String(href ?? "");
  return CTAS.find((c) => c.padrao.test(h))?.tipo ?? null;
}

export function nomeDoEventoDeCta(tipo: string): string {
  return tipo === "agendamento" ? "meeting_booking_click" : "service_cta_click";
}

export function nomeDaSecao(secao: { id?: string; className?: string } | null): string {
  if (!secao) return "corpo";
  if (secao.id) return secao.id;
  const classe = String(secao.className || "").split(/\s+/)[0];
  return classe ? classe.replace(/^ol-/, "") : "corpo";
}

/** Onde o CTA está na página: barra do topo, menu mobile, rodapé ou a seção. */
export function localDoCta(el: ElementoDoCta): string {
  const marcado = el.closest("[data-cta-local]");
  if (marcado) return marcado.getAttribute("data-cta-local") ?? "corpo";
  if (el.closest("#ol-menu")) return "menu_mobile";
  if (el.closest("[data-nav]")) return "barra_topo";
  if (el.closest("footer")) return "rodape";
  return nomeDaSecao(el.closest("section, header, article"));
}

export function textoDoCta(el: { textContent?: string | null }): string {
  return String(el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
}

export function lerParametros(busca: string): Parametros {
  const params: Parametros = {};
  const sp = new URLSearchParams(busca || "");
  for (const k of [...UTMS, ...IDS_DE_CLIQUE_PAGO]) {
    const v = sp.get(k);
    if (v) params[k] = v.slice(0, 120);
  }
  return params;
}

/** Origem da visita, gravada na primeira página e repetida em todo evento. */
export function montarOrigem(loc: { search: string; pathname: string; hostname: string }, referrer: string): Origem {
  const params = lerParametros(loc.search);
  const classe = classificarCanal(referrer, params, loc.hostname);
  const origem: Origem = { canal: classe.canal, origem: classe.origem, pagina_entrada: normalizarCaminho(loc.pathname) };
  for (const k of UTMS) {
    if (params[k]) origem[k] = params[k];
  }
  return origem;
}

function lerArmazenado(storage: ArmazenamentoSimples | null): Origem | null {
  try {
    const bruto = storage?.getItem(CHAVE_ORIGEM);
    return bruto ? (JSON.parse(bruto) as Origem) : null;
  } catch {
    return null;
  }
}

function gravar(storage: ArmazenamentoSimples | null, valor: Origem): void {
  try {
    storage?.setItem(CHAVE_ORIGEM, JSON.stringify(valor));
  } catch {
    /* aba privada ou storage bloqueado: a visita segue sem memória */
  }
}

/** { origem, nova }: nova = esta é a primeira página da visita. */
export function capturarOrigem(
  loc: { search: string; pathname: string; hostname: string },
  referrer: string,
  storage: ArmazenamentoSimples | null,
): { origem: Origem; nova: boolean } {
  const salva = lerArmazenado(storage);
  if (salva) return { origem: salva, nova: false };
  const origem = montarOrigem(loc, referrer);
  gravar(storage, origem);
  return { origem, nova: true };
}

export function ehVisitaOrganica(origem: { canal: string }): boolean {
  return CANAIS_ORGANICOS.includes(origem.canal);
}
