/* Qual fomento serve para o projeto: perguntas, regras e ordenação dos
   instrumentos. Funções puras, testadas em fomento.test.ts.

   A ferramenta indica caminhos prováveis a partir de critérios objetivos
   (regime, porte, estado, tipo de projeto, contrapartida). Não diz se um
   projeto será aprovado: isso depende do mérito, da chamada e da análise de
   cada instituição. Os limites usados aqui estão em LIMITES, com a fonte. */

export type Regime = "real" | "presumido" | "simples" | "nao-sei";
export type Lucro = "sim" | "nao" | "nao-sei";
export type Receita = "ate-4,8" | "4,8-16" | "16-90" | "90-300" | "acima-300";
export type Objetivo = "pd" | "software" | "maquinas";
export type Parceria = "ja-tem" | "aberta" | "nao";
export type Recurso = "externo" | "proprio";
export type Valor = "ate-1" | "1-10" | "10-30" | "acima-30";
export type Estado = "mg" | "outro";

export type Respostas = {
  regime?: Regime;
  lucro?: Lucro;
  receita?: Receita;
  estado?: Estado;
  objetivo?: Objetivo;
  parceria?: Parceria;
  recurso?: Recurso;
  contrapartida?: boolean;
  valor?: Valor;
};

type Opcao<T> = { valor: T; rotulo: string };

export type PerguntaDoFomento = {
  [K in keyof Respostas]-?: {
    id: K;
    texto: string;
    ajuda?: string;
    /** Rótulo curto para o e-mail do comercial. */
    resumo: string;
    opcoes: Opcao<NonNullable<Respostas[K]>>[];
    /** A pergunta só aparece quando faz sentido (ex.: lucro só no lucro real). */
    aparece?: (r: Respostas) => boolean;
  };
}[keyof Respostas];

export const PERGUNTAS: PerguntaDoFomento[] = [
  {
    id: "objetivo",
    resumo: "O que o projeto precisa financiar",
    texto: "O que o projeto precisa financiar?",
    opcoes: [
      { valor: "pd", rotulo: "Desenvolver um produto ou processo novo, com risco técnico" },
      { valor: "software", rotulo: "Desenvolver ou implantar software na operação" },
      { valor: "maquinas", rotulo: "Comprar máquinas e equipamentos para modernizar a fábrica" },
    ],
  },
  {
    id: "recurso",
    resumo: "De onde vem o dinheiro",
    texto: "Como o projeto vai ser pago?",
    opcoes: [
      { valor: "externo", rotulo: "Precisa de recurso de fora: crédito ou verba não reembolsável" },
      { valor: "proprio", rotulo: "Com caixa próprio; o que interessa é pagar menos imposto" },
    ],
  },
  {
    id: "regime",
    resumo: "Regime tributário",
    texto: "Qual é o regime tributário da empresa?",
    opcoes: [
      { valor: "real", rotulo: "Lucro real" },
      { valor: "presumido", rotulo: "Lucro presumido" },
      { valor: "simples", rotulo: "Simples Nacional" },
      { valor: "nao-sei", rotulo: "Não sei" },
    ],
  },
  {
    id: "lucro",
    resumo: "Lucro tributável no ano",
    texto: "A empresa deve ter lucro tributável este ano?",
    ajuda: "A Lei do Bem só reduz imposto de quem tem lucro real no ano.",
    aparece: (r) => r.regime === "real",
    opcoes: [
      { valor: "sim", rotulo: "Sim" },
      { valor: "nao", rotulo: "Não, deve fechar com prejuízo fiscal" },
      { valor: "nao-sei", rotulo: "Ainda não sei" },
    ],
  },
  {
    id: "receita",
    resumo: "Receita operacional bruta anual",
    texto: "Qual é a receita operacional bruta anual da empresa?",
    ajuda: "As faixas são as de porte usadas pela FINEP.",
    opcoes: [
      { valor: "ate-4,8", rotulo: "Até R$ 4,8 milhões" },
      { valor: "4,8-16", rotulo: "De R$ 4,8 milhões a R$ 16 milhões" },
      { valor: "16-90", rotulo: "De R$ 16 milhões a R$ 90 milhões" },
      { valor: "90-300", rotulo: "De R$ 90 milhões a R$ 300 milhões" },
      { valor: "acima-300", rotulo: "Acima de R$ 300 milhões" },
    ],
  },
  {
    id: "valor",
    resumo: "Tamanho do projeto",
    texto: "Quanto o projeto deve custar, aproximadamente?",
    opcoes: [
      { valor: "ate-1", rotulo: "Até R$ 1 milhão" },
      { valor: "1-10", rotulo: "De R$ 1 milhão a R$ 10 milhões" },
      { valor: "10-30", rotulo: "De R$ 10 milhões a R$ 30 milhões" },
      { valor: "acima-30", rotulo: "Acima de R$ 30 milhões" },
    ],
  },
  {
    id: "contrapartida",
    resumo: "Pode aportar contrapartida",
    texto: "A empresa consegue pagar parte do projeto como contrapartida?",
    ajuda: "Verba não reembolsável sempre exige que a empresa também coloque recursos.",
    opcoes: [
      { valor: true, rotulo: "Sim" },
      { valor: false, rotulo: "Não" },
    ],
  },
  {
    id: "parceria",
    resumo: "Parceria com universidade ou centro de pesquisa",
    texto: "O projeto pode ser feito com uma universidade ou centro de pesquisa?",
    opcoes: [
      { valor: "ja-tem", rotulo: "Sim, já temos parceiro" },
      { valor: "aberta", rotulo: "Pode, mas ainda não temos parceiro" },
      { valor: "nao", rotulo: "Não, vamos executar com equipe própria ou fornecedor" },
    ],
  },
  {
    id: "estado",
    resumo: "Estado da empresa",
    texto: "Onde fica a empresa?",
    opcoes: [
      { valor: "mg", rotulo: "Minas Gerais" },
      { valor: "outro", rotulo: "Outro estado" },
    ],
  },
];

/** Perguntas visíveis para as respostas atuais. */
export function perguntasVisiveis(r: Respostas): PerguntaDoFomento[] {
  return PERGUNTAS.filter((p) => !p.aparece || p.aparece(r));
}

function respondida(p: PerguntaDoFomento, r: Respostas): boolean {
  const v = r[p.id];
  return p.opcoes.some((o) => o.valor === v);
}

export function respondidas(r: Respostas): number {
  return perguntasVisiveis(r).filter((p) => respondida(p, r)).length;
}

export function completo(r: Respostas): boolean {
  return perguntasVisiveis(r).every((p) => respondida(p, r));
}

/* ---- Instrumentos ---- */

export type Aderencia = "alta" | "media" | "baixa" | "fora";

export type IdDoInstrumento =
  | "lei-do-bem"
  | "finep-direto"
  | "finep-inovacred"
  | "subvencao"
  | "compete-minas"
  | "bdmg-pro-inovacao"
  | "embrapii"
  | "bndes-mais-inovacao";

export type Instrumento = {
  id: IdDoInstrumento;
  nome: string;
  natureza: "Incentivo fiscal" | "Crédito" | "Não reembolsável" | "Cofinanciamento não reembolsável";
  /** Página da Origami que explica o instrumento. */
  href: string;
  /** Fonte oficial. */
  fonte: string;
};

export const INSTRUMENTOS: Record<IdDoInstrumento, Instrumento> = {
  "lei-do-bem": {
    id: "lei-do-bem",
    nome: "Lei do Bem",
    natureza: "Incentivo fiscal",
    href: "/lei-do-bem",
    fonte: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem",
  },
  "finep-direto": {
    id: "finep-direto",
    nome: "Crédito direto da FINEP",
    natureza: "Crédito",
    href: "/finep#credito-direto",
    fonte: "https://www.finep.gov.br/financiamento-via-credito",
  },
  "finep-inovacred": {
    id: "finep-inovacred",
    nome: "Finep Inovacred (por agente financeiro)",
    natureza: "Crédito",
    href: "/finep-inovacred",
    fonte: "https://www.finep.gov.br/credito-operado-por-agentes",
  },
  subvencao: {
    id: "subvencao",
    nome: "Subvenção econômica da FINEP",
    natureza: "Não reembolsável",
    href: "/finep#subvencao",
    fonte: "https://www.finep.gov.br/financiamento-nao-reembolsavel",
  },
  "compete-minas": {
    id: "compete-minas",
    nome: "Compete Minas (FAPEMIG)",
    natureza: "Não reembolsável",
    href: "/fomento-a-inovacao#minas-gerais",
    fonte: "https://fapemig.br/oportunidades/chamadas-e-editais/fapemig-sede-compete-minas",
  },
  "bdmg-pro-inovacao": {
    id: "bdmg-pro-inovacao",
    nome: "BDMG Pró-Inovação",
    natureza: "Crédito",
    href: "/fomento-a-inovacao#minas-gerais",
    fonte: "https://www.bdmg.mg.gov.br/inovacao/",
  },
  embrapii: {
    id: "embrapii",
    nome: "EMBRAPII",
    natureza: "Cofinanciamento não reembolsável",
    href: "/embrapii",
    fonte: "https://embrapii.org.br/sobre-a-embrapii/",
  },
  "bndes-mais-inovacao": {
    id: "bndes-mais-inovacao",
    nome: "BNDES Mais Inovação",
    natureza: "Crédito",
    href: "/bndes-mais-inovacao",
    fonte: "https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/programa-bndes-mais-inovacao",
  },
};

export type Indicacao = {
  instrumento: Instrumento;
  aderencia: Aderencia;
  /** Por que o instrumento serve, ou por que não serve. */
  motivos: string[];
};

/** Limites objetivos usados nas regras. Mudam com o tempo: conferir na fonte.
 *  Conferidos em 18/11/2026 (Condições Operacionais 2026 da FINEP, páginas do
 *  BNDES, Manual e Orientações Operacionais da EMBRAPII, BDMG e FAPEMIG). */
export const LIMITES = {
  /** FINEP, crédito direto: ROB acima de R$ 90 mi, PL acima de R$ 86 mi, a partir de R$ 30 mi. */
  finepDiretoReceita: ["90-300", "acima-300"] as Receita[],
  finepDiretoValor: ["acima-30"] as Valor[],
  /** FINEP, Inovacred: ROB abaixo de R$ 300 mi, até R$ 30 mi por operação. */
  inovacredReceita: ["ate-4,8", "4,8-16", "16-90", "90-300"] as Receita[],
  inovacredValorAcima: ["acima-30"] as Valor[],
  /** BDMG: repassa o Inovacred para ROB entre R$ 4,8 mi e R$ 300 mi. */
  bdmgInovacredReceita: ["4,8-16", "16-90", "90-300"] as Receita[],
  /** BDMG Pró-Inovação MPE: faturamento de até R$ 16 mi, operações de até R$ 1 mi. */
  proInovacaoMpeReceita: ["ate-4,8", "4,8-16"] as Receita[],
};

type Regra = (r: Required<Pick<Respostas, "objetivo" | "recurso" | "regime" | "receita" | "valor" | "contrapartida" | "parceria" | "estado">> & Respostas) => {
  aderencia: Aderencia;
  motivos: string[];
};

const ORDEM: Record<Aderencia, number> = { alta: 0, media: 1, baixa: 2, fora: 3 };

function rebaixar(a: Aderencia): Aderencia {
  return a === "alta" ? "media" : a === "media" ? "baixa" : a;
}

const PRECISA_DE_RECURSO = "Faz sentido se o projeto precisar de recurso de fora.";

const REGRAS: Record<IdDoInstrumento, Regra> = {
  "lei-do-bem": (r) => {
    if (r.regime === "presumido" || r.regime === "simples")
      return { aderencia: "fora", motivos: ["A Lei do Bem só vale para empresas no lucro real: a exclusão é feita na apuração do lucro real."] };
    if (r.lucro === "nao")
      return { aderencia: "fora", motivos: ["Com prejuízo fiscal no ano o benefício é zero, e o excesso não passa para o ano seguinte."] };
    if (r.objetivo === "maquinas")
      return {
        aderencia: "baixa",
        motivos: ["A exclusão principal é sobre gasto com P&D. Compra de máquina, sozinha, não é projeto de pesquisa e desenvolvimento."],
      };
    const motivos: string[] = [];
    let aderencia: Aderencia = r.objetivo === "pd" ? "alta" : "media";
    if (r.objetivo === "software") motivos.push("Software entra quando há desafio tecnológico, não implantação de rotina.");
    else motivos.push("Reduz IRPJ e CSLL sobre o gasto com P&D, sem aprovação prévia.");
    if (r.regime === "nao-sei") {
      aderencia = rebaixar(aderencia);
      motivos.push("Só vale no lucro real: confirme o regime com a contabilidade.");
    }
    if (r.lucro === "nao-sei") motivos.push("O benefício do ano depende de haver lucro real.");
    if (r.recurso === "externo") {
      aderencia = rebaixar(aderencia);
      motivos.push("Não traz dinheiro novo: reduz o imposto depois do gasto. Combine com crédito ou subvenção.");
    }
    return { aderencia, motivos };
  },

  "finep-direto": (r) => {
    if (!LIMITES.finepDiretoReceita.includes(r.receita))
      return {
        aderencia: "fora",
        motivos: ["O crédito direto da FINEP é para receita operacional bruta acima de R$ 90 milhões e patrimônio líquido acima de R$ 86 milhões."],
      };
    if (!LIMITES.finepDiretoValor.includes(r.valor))
      return { aderencia: "fora", motivos: ["O crédito direto começa em financiamentos de R$ 30 milhões; abaixo disso, o caminho é o Inovacred."] };
    if (r.recurso === "proprio") return { aderencia: "baixa", motivos: [PRECISA_DE_RECURSO] };
    return {
      aderencia: r.objetivo === "maquinas" ? "media" : "alta",
      motivos: [
        "A própria FINEP analisa, contrata e acompanha, em fluxo contínuo, e financia até 90% do projeto (até 100% no Norte, Nordeste e Centro-Oeste).",
        "Exige patrimônio líquido acima de R$ 86 milhões e projeto ligado às missões da Nova Indústria Brasil. Não há filtro por regime tributário.",
      ],
    };
  },

  "finep-inovacred": (r) => {
    if (!LIMITES.inovacredReceita.includes(r.receita))
      return r.estado === "mg"
        ? { aderencia: "fora", motivos: ["O Inovacred é para receita operacional bruta de até R$ 300 milhões; acima disso, só em projetos no Norte, Nordeste ou Centro-Oeste."] }
        : { aderencia: "baixa", motivos: ["Acima de R$ 300 milhões de receita, o Inovacred só atende projetos no Norte, Nordeste ou Centro-Oeste."] };
    if (r.recurso === "proprio") return { aderencia: "baixa", motivos: [PRECISA_DE_RECURSO] };
    const motivos = ["Crédito para inovação pedido a um banco ou cooperativa credenciados pela FINEP, que analisam e assumem o risco. Não há filtro por regime tributário."];
    let aderencia: Aderencia = "alta";
    if (LIMITES.inovacredValorAcima.includes(r.valor)) {
      aderencia = "media";
      motivos.push("Financia até R$ 30 milhões por operação: o restante precisa de outra fonte.");
    }
    if (r.estado === "mg")
      motivos.push(
        LIMITES.bdmgInovacredReceita.includes(r.receita)
          ? "Em Minas Gerais, o BDMG repassa o Inovacred para receita entre R$ 4,8 milhões e R$ 300 milhões."
          : "No BDMG, o Inovacred começa em R$ 4,8 milhões de receita; outros agentes credenciados atendem empresas menores.",
      );
    if (r.objetivo !== "pd")
      motivos.push("Para digitalizar a linha de produção com tecnologias 4.0, o Finep Inovacred 4.0 financia a solução de uma integradora credenciada pela FINEP.");
    return { aderencia, motivos };
  },

  subvencao: (r) => {
    if (!r.contrapartida)
      return { aderencia: "fora", motivos: ["A subvenção exige contrapartida da empresa (Lei 10.973/2004, art. 19, §3º)."] };
    if (r.objetivo === "maquinas")
      return { aderencia: "baixa", motivos: ["A subvenção divide o risco de desenvolver algo novo. Compra de equipamento, sozinha, raramente se encaixa."] };
    const motivos = ["Recurso que não volta, para projeto aprovado pela FINEP. Vale para empresas de qualquer porte e não depende do regime tributário."];
    let aderencia: Aderencia = r.objetivo === "pd" ? "alta" : "media";
    if (r.objetivo === "software") motivos.push("Precisa haver risco tecnológico, não só implantação.");
    motivos.push("Depende de chamada pública ou programa aberto com tema compatível; a contrapartida mínima vem de cada chamada.");
    if (r.parceria === "nao") motivos.push("Chamadas recentes exigiram parceria com instituição de pesquisa: vale ter uma em vista.");
    if (r.recurso === "proprio") aderencia = rebaixar(aderencia);
    return { aderencia, motivos };
  },

  "compete-minas": (r) => {
    if (r.estado !== "mg") return { aderencia: "fora", motivos: ["Programa do Governo de Minas, com a FAPEMIG, para empresas com sede ou filial no estado."] };
    if (!r.contrapartida) return { aderencia: "fora", motivos: ["O Compete Minas exige contrapartida, de 15% a 100% conforme a receita da empresa."] };
    if (r.objetivo === "maquinas") return { aderencia: "baixa", motivos: ["Apoia projetos de inovação, não a compra de equipamento isolada."] };
    const motivos = [
      "Subvenção econômica da FAPEMIG para inovação em empresas mineiras, sem filtro por regime tributário.",
      "A edição 2026 já encerrou a submissão; o programa se repete desde 2022, então vale preparar o projeto para a próxima.",
    ];
    let aderencia: Aderencia = r.objetivo === "pd" ? "alta" : "media";
    if (r.parceria !== "nao") motivos.push("Tem uma linha para projetos com universidades e centros de pesquisa, com teto maior.");
    if (r.recurso === "proprio") aderencia = rebaixar(aderencia);
    return { aderencia, motivos };
  },

  "bdmg-pro-inovacao": (r) => {
    if (r.estado !== "mg") return { aderencia: "fora", motivos: ["Linha do BDMG para projetos desenvolvidos em Minas Gerais."] };
    if (r.recurso === "proprio") return { aderencia: "baixa", motivos: [PRECISA_DE_RECURSO] };
    const motivos = [
      "Crédito estadual para inovação, com apoio da FAPEMIG, para empresas de todos os portes. Não precisa ser empresa de base tecnológica.",
    ];
    if (LIMITES.proInovacaoMpeReceita.includes(r.receita))
      motivos.push("Na linha para micro e pequenas (faturamento até R$ 16 milhões), operações de até R$ 1 milhão sem garantia real.");
    return { aderencia: r.objetivo === "maquinas" ? "media" : "alta", motivos };
  },

  embrapii: (r) => {
    if (r.parceria === "nao")
      return { aderencia: "baixa", motivos: ["O projeto é executado por uma Unidade EMBRAPII (centro de pesquisa credenciado), não pela equipe da empresa."] };
    if (r.objetivo === "maquinas") return { aderencia: "fora", motivos: ["A EMBRAPII cofinancia pesquisa e desenvolvimento, não compra de equipamento."] };
    if (!r.contrapartida) return { aderencia: "fora", motivos: ["A empresa paga parte do projeto em dinheiro; a EMBRAPII e a Unidade cobrem o resto."] };
    const motivos = [
      "A EMBRAPII paga parte do projeto sem devolução, e uma Unidade credenciada executa a pesquisa com a empresa. Sem edital: começa na conversa com a Unidade.",
      "Ao menos uma empresa do projeto precisa ser industrial ou de software (CNAE 05 a 33, 35, 62.01 ou 62.03), e o projeto é de P&D pré-competitivo.",
    ];
    if (r.objetivo === "software") motivos.push("Implantação de sistema pronto não entra: precisa haver desenvolvimento com risco tecnológico.");
    if (r.receita === "ate-4,8") motivos.push("Para micro e pequenas, o Sebrae pode pagar até 70% da parte da empresa, até R$ 150 mil por projeto.");
    if (r.estado === "mg") motivos.push("Há Unidades EMBRAPII em Minas, como Inatel, IF-MG (Formiga) e FEMEC-UFU.");
    return { aderencia: r.objetivo === "pd" ? "alta" : "media", motivos };
  },

  "bndes-mais-inovacao": (r) => {
    if (r.recurso === "proprio") return { aderencia: "baixa", motivos: [PRECISA_DE_RECURSO] };
    const motivos: string[] = [];
    let aderencia: Aderencia;
    if (r.objetivo === "maquinas") {
      aderencia = "alta";
      motivos.push("A Difusão Tecnológica financia máquinas e equipamentos credenciados no Finame, pedida pelo banco credenciado.");
    } else if (r.objetivo === "software") {
      aderencia = "alta";
      motivos.push("O Investimento Automático financia software, consultoria e serviços tecnológicos pelo banco credenciado, até R$ 15 milhões por ano.");
    } else {
      aderencia = "media";
      motivos.push("O Investimento em Inovação financia PD&I a partir de R$ 20 milhões; abaixo disso, o caminho é o Investimento Automático, pelo banco.");
    }
    motivos.push("Crédito com recursos do FAT, sem filtro por regime tributário.");
    if (r.estado === "mg") motivos.push("Em Minas, o BDMG repassa linhas do Mais Inovação.");
    return { aderencia, motivos };
  },
};

export type ResultadoDoFomento = {
  indicados: Indicacao[];
  descartados: Indicacao[];
};

/** null enquanto faltar resposta. */
export function indicar(r: Respostas): ResultadoDoFomento | null {
  if (!completo(r)) return null;
  const completas = r as Parameters<Regra>[0];
  const todas = (Object.keys(REGRAS) as IdDoInstrumento[]).map((id) => ({ instrumento: INSTRUMENTOS[id], ...REGRAS[id](completas) }));
  const ordenadas = todas.sort((a, b) => ORDEM[a.aderencia] - ORDEM[b.aderencia]);
  return {
    indicados: ordenadas.filter((i) => i.aderencia === "alta" || i.aderencia === "media"),
    descartados: ordenadas.filter((i) => i.aderencia === "baixa" || i.aderencia === "fora"),
  };
}

/** Respostas legíveis para o e-mail do comercial. */
export function respostasResumidas(r: Respostas): Record<string, string> {
  return Object.fromEntries(
    perguntasVisiveis(r)
      .filter((p) => respondida(p, r))
      .map((p) => [p.resumo, (p.opcoes as Opcao<unknown>[]).find((o) => o.valor === r[p.id])?.rotulo ?? ""]),
  );
}
