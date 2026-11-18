export type Guia = { href: string; titulo: string; texto: string };
export type GrupoDeGuias = { id: string; titulo: string; descricao: string; guias: Guia[] };

/** A seleção visível no hub também alimenta sua lista de dados estruturados. */
export const GRUPOS_DE_GUIAS: GrupoDeGuias[] = [
  {
    id: "software",
    titulo: "Software, integração e operação",
    descricao: "Compare caminhos antes de contratar: aproveitar o ERP, integrar sistemas, desenvolver uma função ou modernizar o legado.",
    guias: [
      { href: "/mes-vs-erp", titulo: "MES × ERP: qual problema cada sistema resolve?", texto: "Responsabilidades, fluxo de dados e critérios para decidir se o módulo do ERP basta ou se a execução precisa de uma camada própria." },
      { href: "/automacao-de-contas-a-receber", titulo: "Automação de contas a receber", texto: "Do título no ERP à baixa conciliada: regras, exceções, canais e acompanhamento da carteira sem perder o controle do financeiro." },
      { href: "/software-sob-medida", titulo: "Quando vale desenvolver software sob medida", texto: "Como comparar com um produto pronto, o que define o custo e o que exigir na entrega para manter autonomia." },
      { href: "/integracao-de-sistemas", titulo: "Como integrar sistemas que não conversam", texto: "API, banco, arquivos e automação de interface: caminhos técnicos e limites para eliminar redigitação." },
      { href: "/modernizacao-de-sistemas-legados", titulo: "Como modernizar um sistema legado", texto: "Quando manter, integrar ou substituir por partes, com migração de dados e continuidade da operação." },
      { href: "/ia-na-industria", titulo: "Onde a IA ajuda na indústria", texto: "Oportunidades, qualidade dos dados e critérios para um piloto medido antes de ampliar o investimento." },
      { href: "/unificacao-de-produtos-digitais", titulo: "Unificação de produtos digitais", texto: "Uma experiência de descoberta e construção de plataforma, com os recortes dos resultados e do processo de implantação." },
    ],
  },
  {
    id: "inovacao",
    titulo: "Lei do Bem e financiamento de inovação",
    descricao: "Entenda a diferença entre um incentivo fiscal e recursos para executar o projeto. Requisitos e documentação vêm antes da estimativa de benefício.",
    guias: [
      { href: "/lei-do-bem-desenvolvimento-de-software", titulo: "Lei do Bem no desenvolvimento de software", texto: "Como distinguir desafio tecnológico de implantação e rotina, e quais evidências preparar para uma avaliação de P&D." },
      { href: "/lei-do-bem", titulo: "Lei do Bem: quem pode usar", texto: "Requisitos da empresa e do projeto, base legal, limites da exclusão fiscal e riscos de enquadramento." },
      { href: "/lei-do-bem-na-pratica", titulo: "Lei do Bem na prática", texto: "Como organizar projetos, dispêndios e registros durante o exercício para informar o MCTI pelo FormP&D." },
      { href: "/finep", titulo: "FINEP: o que é e como funciona", texto: "Crédito direto, Finep Inovacred e subvenção: quem pode pedir, taxas, garantias e o passo a passo do pedido." },
      { href: "/finep-inovacred", titulo: "Finep Inovacred: taxa e regras", texto: "Taxas de 2026, prazo, carência, Inovacred 4.0, agentes como BDMG, Sicoob e Sicredi, e o que registrar antes de gastar." },
      { href: "/bndes-mais-inovacao", titulo: "BNDES Mais Inovação", texto: "Difusão tecnológica, máquinas 4.0, investimento automático e PD&I: valores, prazos e como pedir pelo banco." },
      { href: "/embrapii", titulo: "EMBRAPII para empresas", texto: "Pesquisa com uma Unidade credenciada, parte do custo sem devolução, Sebrae para as pequenas e Unidades em Minas." },
      { href: "/financiamento-de-inovacao", titulo: "Lei do Bem, crédito ou subvenção?", texto: "Compare os instrumentos de apoio à inovação, suas contrapartidas e as saídas a avaliar conforme a empresa e o projeto." },
    ],
  },
  {
    id: "industria",
    titulo: "Produção e indústrias de Minas Gerais",
    descricao: "Parta do processo que precisa melhorar: ordens, apontamento, custo, qualidade e informação da fábrica chegando à gestão.",
    guias: [
      { href: "/software-para-industria-metalurgica", titulo: "Software para a indústria metalúrgica", texto: "Ordens, roteiros, lotes e custos em usinagem e produção sob encomenda: o que observar e como avaliar um piloto." },
      { href: "/tecnologia-para-industrias-minas-gerais", titulo: "Tecnologia para indústrias de Minas Gerais", texto: "A base da Origami em Formiga, o atendimento à operação e os critérios para avaliar um fornecedor regional." },
      { href: "/planejamento-de-producao", titulo: "Planejamento e controle da produção", texto: "Prioridades, capacidade e materiais: quando o PCP deixa de caber na planilha e o que o sistema precisa resolver." },
      { href: "/apontamento-de-producao", titulo: "Apontamento de produção", texto: "Coleta de produção, paradas e perdas no posto de trabalho, com dado que alimenta PCP, custo, estoque e OEE." },
      { href: "/integracao-erp-chao-de-fabrica", titulo: "Integração entre ERP e chão de fábrica", texto: "Quais dados sobem e descem, quem responde por cada cadastro e como evitar movimentos duplicados." },
      { href: "/automacao-de-processos-industriais", titulo: "Automação de processos industriais", texto: "Como priorizar o fim da redigitação e das planilhas paralelas, com limites claros entre software e automação de máquinas." },
      { href: "/gestao-industrial-em-tempo-real", titulo: "Gestão industrial em tempo real", texto: "Indicadores, OEE e decisões que dependem de informação confiável, com a origem e o tempo de atualização de cada dado." },
    ],
  },
];
