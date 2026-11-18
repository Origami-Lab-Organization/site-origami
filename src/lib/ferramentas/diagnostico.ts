/* Diagnóstico de modernização: perguntas, pontuação e recomendações.
   Funções puras, testadas em diagnostico.test.ts. Autoavaliação: o resultado
   ordena prioridades, não substitui olhar a operação. */

export type Dimensao = "dados" | "integracao" | "legado" | "processos" | "ia";

export type Opcao = { rotulo: string; pontos: 0 | 1 | 2 | 3 };

export type PerguntaDoDiagnostico = {
  id: string;
  dimensao: Dimensao;
  texto: string;
  /** Rótulo curto da pergunta para o e-mail do comercial. */
  resumo: string;
  opcoes: Opcao[];
};

export const DIMENSOES: { id: Dimensao; nome: string }[] = [
  { id: "dados", nome: "Dados e indicadores" },
  { id: "integracao", nome: "Integração entre sistemas" },
  { id: "legado", nome: "Sistemas legados" },
  { id: "processos", nome: "Processos manuais e retrabalho" },
  { id: "ia", nome: "Prontidão para IA e automação" },
];

export const PERGUNTAS: PerguntaDoDiagnostico[] = [
  {
    id: "p1",
    dimensao: "dados",
    resumo: "Quando a diretoria sabe a produção do dia",
    texto: "Em quanto tempo a diretoria fica sabendo o resultado da produção do dia?",
    opcoes: [
      { rotulo: "No mesmo turno, num painel", pontos: 3 },
      { rotulo: "No dia seguinte", pontos: 2 },
      { rotulo: "No fim da semana ou do mês", pontos: 1 },
      { rotulo: "Só no fechamento contábil", pontos: 0 },
    ],
  },
  {
    id: "p2",
    dimensao: "dados",
    resumo: "De onde saem os indicadores",
    texto: "De onde saem os indicadores de operação (produção, perdas, paradas)?",
    opcoes: [
      { rotulo: "Direto dos sistemas, sem digitação", pontos: 3 },
      { rotulo: "De relatórios do ERP, com ajustes em planilha", pontos: 2 },
      { rotulo: "De planilhas montadas à mão", pontos: 1 },
      { rotulo: "Não medimos de forma regular", pontos: 0 },
    ],
  },
  {
    id: "p3",
    dimensao: "integracao",
    resumo: "Redigitação do mesmo dado",
    texto: "Quantas vezes o mesmo dado é digitado em sistemas ou planilhas diferentes?",
    opcoes: [
      { rotulo: "Uma vez só; os sistemas trocam dados entre si", pontos: 3 },
      { rotulo: "Duas vezes, em alguns processos", pontos: 2 },
      { rotulo: "Duas ou mais vezes, na maioria dos processos", pontos: 1 },
      { rotulo: "Não sabemos dizer", pontos: 0 },
    ],
  },
  {
    id: "p4",
    dimensao: "integracao",
    resumo: "Chão de fábrica e ERP",
    texto: "Como o que acontece no chão de fábrica chega ao ERP?",
    opcoes: [
      { rotulo: "Apontamento digital, integrado ao ERP", pontos: 3 },
      { rotulo: "Apontamento digital, lançado no ERP à mão", pontos: 2 },
      { rotulo: "Papel ou planilha, lançado depois", pontos: 1 },
      { rotulo: "O ERP não recebe dado da produção", pontos: 0 },
    ],
  },
  {
    id: "p5",
    dimensao: "legado",
    resumo: "Suporte dos sistemas críticos",
    texto: "Os sistemas que sustentam os processos críticos têm suporte e documentação?",
    opcoes: [
      { rotulo: "Sim, com fornecedor ativo e documentação atual", pontos: 3 },
      { rotulo: "Em parte; há sistemas sem documentação", pontos: 2 },
      { rotulo: "Dependemos de uma ou duas pessoas que conhecem o sistema", pontos: 1 },
      { rotulo: "Há sistema crítico sem suporte e sem quem saiba mexer", pontos: 0 },
    ],
  },
  {
    id: "p6",
    dimensao: "legado",
    resumo: "Tempo para mudar o sistema",
    texto: "Quando a operação precisa de uma mudança no sistema, quanto tempo leva?",
    opcoes: [
      { rotulo: "Dias ou poucas semanas", pontos: 3 },
      { rotulo: "Alguns meses", pontos: 2 },
      { rotulo: "Raramente acontece; o sistema não acompanha", pontos: 1 },
      { rotulo: "Contornamos com planilha paralela", pontos: 0 },
    ],
  },
  {
    id: "p7",
    dimensao: "processos",
    resumo: "Planejamento da produção",
    texto: "Quanto do planejamento da produção depende de planilha e da memória de alguém?",
    opcoes: [
      { rotulo: "Pouco; o PCP roda num sistema", pontos: 3 },
      { rotulo: "Parte; sistema com planilhas de apoio", pontos: 2 },
      { rotulo: "Quase tudo em planilha", pontos: 1 },
      { rotulo: "Depende de uma pessoa", pontos: 0 },
    ],
  },
  {
    id: "p8",
    dimensao: "processos",
    resumo: "Retrabalho por erro de informação",
    texto: "Com que frequência erro de digitação ou informação desencontrada gera retrabalho?",
    opcoes: [
      { rotulo: "Raramente", pontos: 3 },
      { rotulo: "Algumas vezes por mês", pontos: 2 },
      { rotulo: "Toda semana", pontos: 1 },
      { rotulo: "Todo dia", pontos: 0 },
    ],
  },
  {
    id: "p9",
    dimensao: "ia",
    resumo: "Histórico de dados",
    texto: "Os dados históricos da operação estão organizados e acessíveis?",
    opcoes: [
      { rotulo: "Sim, num banco de dados consultável", pontos: 3 },
      { rotulo: "Em parte, espalhados entre sistemas", pontos: 2 },
      { rotulo: "Principalmente em planilhas soltas", pontos: 1 },
      { rotulo: "Não guardamos histórico", pontos: 0 },
    ],
  },
  {
    id: "p10",
    dimensao: "ia",
    resumo: "Tarefas repetitivas mapeadas",
    texto: "As tarefas repetitivas, com regra clara e volume alto, estão mapeadas?",
    opcoes: [
      { rotulo: "Sim, e as principais já foram automatizadas", pontos: 3 },
      { rotulo: "Sabemos quais são e queremos automatizar", pontos: 2 },
      { rotulo: "Provavelmente existem, mas não mapeamos", pontos: 1 },
      { rotulo: "Não sabemos", pontos: 0 },
    ],
  },
  {
    id: "p11",
    dimensao: "ia",
    resumo: "Quem cuida de tecnologia e dados",
    texto: "Quem cuida de tecnologia e dados dentro da empresa?",
    opcoes: [
      { rotulo: "Um time com tempo para projetos novos", pontos: 3 },
      { rotulo: "TI pequena, focada em manter o que existe", pontos: 2 },
      { rotulo: "Uma pessoa acumulando a função", pontos: 1 },
      { rotulo: "Ninguém; dependemos de fornecedores", pontos: 0 },
    ],
  },
];

/** Respostas: id da pergunta → índice da opção escolhida. */
export type Respostas = Record<string, number>;

export type Nivel = { id: string; nome: string; descricao: string };

export const NIVEIS: (Nivel & { ate: number })[] = [
  { id: "inicial", ate: 34, nome: "Inicial", descricao: "A informação depende de pessoas e de planilhas, e chega tarde para decidir." },
  { id: "em-estruturacao", ate: 59, nome: "Em estruturação", descricao: "Há sistemas, mas o dado ainda passa por digitação e conferência manual." },
  { id: "estruturada", ate: 79, nome: "Estruturada", descricao: "Os sistemas sustentam a operação; faltam integração e dado em tempo real em pontos específicos." },
  { id: "integrada", ate: 100, nome: "Integrada", descricao: "O dado nasce uma vez e chega a quem decide; a base está pronta para automação e IA." },
];

export type Recomendacao = { dimensao: Dimensao; titulo: string; texto: string; href: string; link: string };

export type ResultadoDoDiagnostico = {
  porDimensao: Record<Dimensao, number>;
  geral: number;
  nivel: Nivel;
  recomendacoes: Recomendacao[];
};

function pontosDa(pergunta: PerguntaDoDiagnostico, respostas: Respostas): number | null {
  const escolha = respostas[pergunta.id];
  const opcao = typeof escolha === "number" ? pergunta.opcoes[escolha] : undefined;
  return opcao ? opcao.pontos : null;
}

export function respondidas(respostas: Respostas): number {
  return PERGUNTAS.filter((p) => pontosDa(p, respostas) !== null).length;
}

export function completo(respostas: Respostas): boolean {
  return respondidas(respostas) === PERGUNTAS.length;
}

export function pontuacaoDaDimensao(dimensao: Dimensao, respostas: Respostas): number {
  const pontos = PERGUNTAS.filter((p) => p.dimensao === dimensao).map((p) => pontosDa(p, respostas) ?? 0);
  return Math.round((pontos.reduce((s, v) => s + v, 0) / (pontos.length * 3)) * 100);
}

export function nivelDa(pontuacao: number): Nivel {
  const n = NIVEIS.find((x) => pontuacao <= x.ate) ?? NIVEIS[NIVEIS.length - 1];
  return { id: n.id, nome: n.nome, descricao: n.descricao };
}

function baixo(id: string, respostas: Respostas): boolean {
  const p = PERGUNTAS.find((x) => x.id === id);
  return !!p && (pontosDa(p, respostas) ?? 0) <= 1;
}

const RECOMENDACOES: Record<Dimensao, (r: Respostas) => Omit<Recomendacao, "dimensao">> = {
  dados: () => ({
    titulo: "Levar o número do turno à diretoria",
    texto: "Tirar os indicadores da planilha montada à mão e calculá-los a partir do que a operação já registra, no mesmo turno.",
    href: "/gestao-industrial-em-tempo-real",
    link: "Gestão industrial em tempo real",
  }),
  integracao: (r) =>
    baixo("p4", r)
      ? {
          titulo: "Ligar o chão de fábrica ao ERP",
          texto: "Fazer o apontamento chegar ao ERP sem redigitação, sem trocar o ERP e sem criar dado duplicado.",
          href: "/integracao-erp-chao-de-fabrica",
          link: "Integração do ERP com o chão de fábrica",
        }
      : {
          titulo: "Fazer os sistemas conversarem",
          texto: "Eliminar a redigitação entre sistemas e planilhas por API, banco ou arquivo, mantendo o que já funciona.",
          href: "/integracao-de-sistemas",
          link: "Integração de sistemas",
        },
  legado: () => ({
    titulo: "Tirar o risco do sistema legado",
    texto: "Documentar, isolar e substituir por partes o sistema que só uma pessoa entende, sem parar a operação.",
    href: "/modernizacao-de-sistemas-legados",
    link: "Modernização de sistemas legados",
  }),
  processos: (r) =>
    baixo("p7", r)
      ? {
          titulo: "Tirar o PCP da planilha e da memória",
          texto: "Levar o planejamento da produção para um sistema que mostre carga, prazo e prioridade sem depender de uma pessoa.",
          href: "/planejamento-de-producao",
          link: "Planejamento e controle da produção",
        }
      : {
          titulo: "Automatizar o processo que mais gera retrabalho",
          texto: "Priorizar pelo custo do erro e pela frequência, e automatizar primeiro o que tem regra clara e volume.",
          href: "/automacao-de-processos-industriais",
          link: "Automação de processos industriais",
        },
  ia: (r) =>
    baixo("p9", r)
      ? {
          titulo: "Organizar o dado antes da IA",
          texto: "IA depende de histórico confiável. O primeiro passo é guardar e organizar o que a operação já produz.",
          href: "/ia-na-industria",
          link: "IA na indústria",
        }
      : {
          titulo: "Escolher o primeiro caso de IA",
          texto: "Começar por um problema com dado disponível e ganho mensurável, em vez de uma iniciativa genérica.",
          href: "/ia-na-industria",
          link: "IA na indústria",
        },
};

/** As três dimensões mais fracas, na ordem de DIMENSOES em caso de empate. */
export function recomendacoes(porDimensao: Record<Dimensao, number>, respostas: Respostas): Recomendacao[] {
  return [...DIMENSOES]
    .sort((a, b) => porDimensao[a.id] - porDimensao[b.id])
    .slice(0, 3)
    .map((d) => ({ dimensao: d.id, ...RECOMENDACOES[d.id](respostas) }));
}

/** null enquanto houver pergunta sem resposta. */
export function diagnosticar(respostas: Respostas): ResultadoDoDiagnostico | null {
  if (!completo(respostas)) return null;
  const porDimensao = Object.fromEntries(DIMENSOES.map((d) => [d.id, pontuacaoDaDimensao(d.id, respostas)])) as Record<Dimensao, number>;
  const geral = Math.round(DIMENSOES.reduce((s, d) => s + porDimensao[d.id], 0) / DIMENSOES.length);
  return { porDimensao, geral, nivel: nivelDa(geral), recomendacoes: recomendacoes(porDimensao, respostas) };
}

/** Respostas em texto curto, para o e-mail do comercial (pergunta → opção). */
export function respostasResumidas(respostas: Respostas): Record<string, string> {
  const saida: Record<string, string> = {};
  for (const p of PERGUNTAS) {
    const escolha = respostas[p.id];
    if (typeof escolha === "number" && p.opcoes[escolha]) saida[p.resumo] = p.opcoes[escolha].rotulo;
  }
  return saida;
}
