/* Páginas publicadas do site. Fonte única do sitemap (app/sitemap.ts) e dos
   redirects das URLs antigas com .html (next.config.ts). Página nova: some aqui. */

export const SITE = "https://www.origamilab.com.br";

export type Frequencia = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type PaginaPublicada = {
  caminho: string;
  /** Data da última mudança relevante de conteúdo (AAAA-MM-DD). */
  atualizadaEm: string;
  frequencia?: Frequencia;
  prioridade?: number;
};

export const PAGINAS: PaginaPublicada[] = [
  { caminho: "/", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 1.0 },
  { caminho: "/acesso-a-capital", atualizadaEm: "2026-11-17", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/desenvolvimento-de-software", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/consultoria-estrategica", atualizadaEm: "2026-11-17", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/integracao-de-sistemas", atualizadaEm: "2026-11-17", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/software-sob-medida", atualizadaEm: "2026-11-17", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/unificacao-de-produtos-digitais", atualizadaEm: "2026-09-18" },
  { caminho: "/cases", atualizadaEm: "2026-11-17", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/cases/prumo-engenharia", atualizadaEm: "2026-11-17", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/cases/transportadora-cabral", atualizadaEm: "2026-11-17", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/cases/cobranca-automatica-whatsapp-retifica-formiguense", atualizadaEm: "2026-11-17", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/tecnologia-para-industrias-minas-gerais", atualizadaEm: "2026-11-18", frequencia: "yearly", prioridade: 0.9 },
  { caminho: "/planejamento-de-producao", atualizadaEm: "2026-11-17", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/apontamento-de-producao", atualizadaEm: "2026-11-17", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/integracao-erp-chao-de-fabrica", atualizadaEm: "2026-09-29", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/automacao-de-processos-industriais", atualizadaEm: "2026-09-29", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/gestao-industrial-em-tempo-real", atualizadaEm: "2026-11-17", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/ferramentas", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/calculadora-reforma-tributaria", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/diagnostico-de-modernizacao", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/calculadora-de-oee", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/simulador-lei-do-bem", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/calculadora-custo-hora-maquina", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/lei-do-bem", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/lei-do-bem-na-pratica", atualizadaEm: "2026-11-18", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/financiamento-de-inovacao", atualizadaEm: "2026-11-18", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/fomento-a-inovacao", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/finep", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/finep-inovacred", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/bndes-mais-inovacao", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/embrapii", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/modernizacao-de-sistemas-legados", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.9 },
  { caminho: "/ia-na-industria", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/guias", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/mes-vs-erp", atualizadaEm: "2026-11-18", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/automacao-de-contas-a-receber", atualizadaEm: "2026-11-18", frequencia: "yearly", prioridade: 0.8 },
  { caminho: "/lei-do-bem-desenvolvimento-de-software", atualizadaEm: "2026-11-18", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/software-para-industria-metalurgica", atualizadaEm: "2026-11-18", frequencia: "yearly", prioridade: 0.8 },
];

/** A mesma revisão alimenta o sitemap e os dados estruturados.
 * A alternativa atende documentos fora do índice, como a política de privacidade. */
export function atualizacaoDaPagina(caminho: string, alternativa?: string): string {
  const atualizadaEm = PAGINAS.find((pagina) => pagina.caminho === caminho)?.atualizadaEm ?? alternativa;
  if (!atualizadaEm) throw new Error(`Página sem data de revisão: ${caminho}`);
  return atualizadaEm;
}
