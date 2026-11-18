import { PAGINAS, SITE } from "./paginas";

export const FRENTES = {
  producao: {
    nome: "Produção e indicadores",
    titulo: "A conta mostra a perda. O próximo passo é medir na operação.",
    descricao: "Ligue apontamento, ordens e ERP para entender o que está por trás do número e agir durante o turno.",
    entregas: ["Coleta de produção, paradas e qualidade no posto.", "Indicadores com origem e período de atualização definidos.", "Integração com o ERP e conferência dos movimentos."],
    ferramenta: { href: "/calculadora-de-oee", rotulo: "Calcular as perdas com OEE" },
    servico: { href: "/integracao-erp-chao-de-fabrica", rotulo: "Como integramos produção e ERP" },
    prova: { href: "/apontamento-de-producao", rotulo: "O que muda com apontamento digital" },
  },
  sistemas: {
    nome: "Software e integração",
    titulo: "O processo não precisa continuar preso à planilha.",
    descricao: "Avalie onde integrar, configurar o que já existe ou desenvolver uma função própria. O diagnóstico define a escolha.",
    entregas: ["Mapa do processo e das regras que precisam continuar.", "Integrações com tratamento de falhas e responsáveis.", "Implantação por etapas, documentação e treinamento."],
    ferramenta: { href: "/diagnostico-de-modernizacao", rotulo: "Fazer o diagnóstico gratuito" },
    servico: { href: "/desenvolvimento-de-software", rotulo: "Como conduzimos o desenvolvimento" },
    prova: { href: "/cases/transportadora-cabral", rotulo: "Veja a integração da Central do Motorista" },
  },
  inovacao: {
    nome: "Lei do Bem e financiamento",
    titulo: "A estimativa é o começo. O projeto precisa sustentar o benefício.",
    descricao: "Cruze o desafio tecnológico, os registros de execução e os dispêndios antes de decidir como financiar a inovação.",
    entregas: ["Avaliação da empresa e do projeto junto à contabilidade.", "Organização das evidências técnicas e dos dispêndios.", "Comparação entre incentivo fiscal, crédito e subvenção."],
    ferramenta: { href: "/simulador-lei-do-bem", rotulo: "Estimar a economia no simulador" },
    servico: { href: "/acesso-a-capital", rotulo: "Como apoiamos o acesso a capital" },
    prova: { href: "/lei-do-bem-na-pratica", rotulo: "O que precisa estar documentado" },
  },
  tributaria: {
    nome: "Sistemas e reforma tributária",
    titulo: "Calcular um item é diferente de preparar a operação inteira.",
    descricao: "Mapeie onde classificação, cadastro, emissão e integrações precisam funcionar juntos no fluxo da empresa.",
    entregas: ["Inventário dos sistemas e das trocas de dados afetadas.", "Regras de validação e tratamento de inconsistências.", "Plano de testes e implantação com a equipe fiscal."],
    ferramenta: { href: "/calculadora-reforma-tributaria", rotulo: "Calcular CBS e IBS de um item" },
    servico: { href: "/integracao-de-sistemas", rotulo: "Como conectamos os sistemas" },
    prova: { href: "/diagnostico-de-modernizacao", rotulo: "Avalie a integração da sua operação" },
  },
} as const;

export type Frente = keyof typeof FRENTES;

const PAGINAS_POR_FRENTE: Record<string, Frente> = {
  "/calculadora-de-oee": "producao", "/calculadora-custo-hora-maquina": "producao",
  "/planejamento-de-producao": "producao", "/apontamento-de-producao": "producao",
  "/integracao-erp-chao-de-fabrica": "producao", "/gestao-industrial-em-tempo-real": "producao",
  "/mes-vs-erp": "producao", "/software-para-industria-metalurgica": "producao",
  "/tecnologia-para-industrias-minas-gerais": "producao",
  "/simulador-lei-do-bem": "inovacao", "/lei-do-bem": "inovacao",
  "/lei-do-bem-na-pratica": "inovacao", "/financiamento-de-inovacao": "inovacao",
  "/lei-do-bem-desenvolvimento-de-software": "inovacao", "/acesso-a-capital": "inovacao",
  "/fomento-a-inovacao": "inovacao", "/finep": "inovacao", "/finep-inovacred": "inovacao",
  "/bndes-mais-inovacao": "inovacao", "/embrapii": "inovacao",
  "/calculadora-reforma-tributaria": "tributaria",
};

export function frenteDaPagina(caminho: string): Frente {
  return PAGINAS_POR_FRENTE[caminho] ?? "sistemas";
}

export function ehFrente(valor: unknown): valor is Frente {
  return typeof valor === "string" && Object.hasOwn(FRENTES, valor);
}

/** Só páginas conhecidas entram no contexto do contato; nunca URLs arbitrárias. */
export function paginaDeInteresse(valor: unknown): string {
  return typeof valor === "string" && PAGINAS.some((pagina) => pagina.caminho === valor) ? valor : "/";
}

export function caminhoDaConversa(frente: Frente, pagina: string): string {
  return `/conversar?${new URLSearchParams({ tema: frente, de: paginaDeInteresse(pagina) })}`;
}

export function contextoDaConversa(tema: unknown, pagina: unknown) {
  const caminho = paginaDeInteresse(pagina);
  return { frente: ehFrente(tema) ? tema : frenteDaPagina(caminho), pagina: caminho };
}

/** O referrer complementa CTAs genéricos; um domínio externo nunca vira contexto. */
export function contextoDoReferrer(referrer: string, origemAtual: string) {
  try {
    const endereco = new URL(referrer);
    if (![SITE, origemAtual].includes(endereco.origin)) return contextoDaConversa(undefined, undefined);
    return contextoDaConversa(undefined, endereco.pathname);
  } catch {
    return contextoDaConversa(undefined, undefined);
  }
}
