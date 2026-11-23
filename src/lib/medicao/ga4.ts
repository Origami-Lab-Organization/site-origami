/* GA4 por gtag.js, ao lado do Amplitude.

   - Só liga no domínio de produção e com o ID de medição em
     NEXT_PUBLIC_GA4_MEASUREMENT_ID (Vercel, Production).
   - O page_view sai do próprio config: o site navega com <a>, então cada página
     é um carregamento novo.
   - Os eventos do site (organic_landing_view, service_cta_click, tool_*,
     contact_form_*…) vão como eventos personalizados, com os parâmetros dentro
     dos limites do GA4 e sem campos pessoais.
   - Google Signals e personalização de anúncios ficam desligados: o site não
     usa cookies de publicidade (ver a política de privacidade). */

export type GtagMinimo = (...args: unknown[]) => void;
export type ParametroDoGa4 = string | number | boolean;

export type JanelaDoGa4 = { dataLayer?: unknown[]; gtag?: GtagMinimo };

export const ENDERECO_DO_GTAG = "https://www.googletagmanager.com/gtag/js?id=";
export const CONFIG_DO_GA4 = { allow_google_signals: false, allow_ad_personalization_signals: false } as const;

/* Limites do GA4 para eventos: 25 parâmetros, nome de até 40 caracteres que
   começa por letra, valor de texto de até 100 caracteres. */
const MAX_PARAMETROS = 25;
const MAX_VALOR = 100;
const NOME_VALIDO = /^[A-Za-z][A-Za-z0-9_]{0,39}$/;
const ID_VALIDO = /^G-[A-Z0-9]+$/;
/* O GA4 proíbe dado pessoal. Os eventos de hoje não levam nenhum; a lista
   barra quem um dia passar um campo de formulário por engano. */
const CAMPOS_PESSOAIS = new Set(["email", "e_mail", "telefone", "whatsapp", "nome", "cpf", "cnpj", "mensagem"]);

export function idDoGa4Valido(id: string | undefined): id is string {
  return typeof id === "string" && ID_VALIDO.test(id.trim());
}

function valorParaGa4(valor: unknown): ParametroDoGa4 | null {
  if (typeof valor === "string") return valor ? valor.slice(0, MAX_VALOR) : null;
  if (typeof valor === "number") return Number.isFinite(valor) ? valor : null;
  if (typeof valor === "boolean") return valor;
  return null;
}

/** Parâmetros dentro dos limites do GA4: só valores simples e nenhum campo pessoal. */
export function paraGa4(props: Record<string, unknown>): Record<string, ParametroDoGa4> {
  const saida: Record<string, ParametroDoGa4> = {};
  let quantidade = 0;
  for (const [chave, bruto] of Object.entries(props)) {
    const valor = valorParaGa4(bruto);
    if (valor === null || !NOME_VALIDO.test(chave) || CAMPOS_PESSOAIS.has(chave.toLowerCase())) continue;
    if (quantidade === MAX_PARAMETROS) break;
    saida[chave] = valor;
    quantidade += 1;
  }
  return saida;
}

/** O snippet do Google: o gtag empurra o objeto arguments no dataLayer, e o
 *  gtag.js processa a fila quando termina de carregar. */
export function iniciarGtag(root: JanelaDoGa4, id: string, carregarScript: (src: string) => void): GtagMinimo {
  const dataLayer = (root.dataLayer = root.dataLayer || []);
  const gtag: GtagMinimo = function () {
    // eslint-disable-next-line prefer-rest-params -- o gtag.js só reconhece o objeto arguments, não um array
    dataLayer.push(arguments);
  };
  root.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id, CONFIG_DO_GA4);
  carregarScript(ENDERECO_DO_GTAG + encodeURIComponent(id));
  return gtag;
}
