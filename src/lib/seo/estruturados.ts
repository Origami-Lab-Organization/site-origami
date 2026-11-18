/* Dados estruturados (JSON-LD) das páginas novas. A entidade da Origami Lab
   tem uma fonte só: ORGANIZACAO. Todo schema descreve o que está visível na
   página: FAQ com as mesmas perguntas e respostas, ferramenta com o que ela
   faz de fato. */

import { SITE } from "@/conteudo/paginas";

export const ORGANIZACAO = {
  "@type": "ProfessionalService",
  "@id": `${SITE}/#org`,
  name: "Origami Lab",
  url: `${SITE}/`,
  logo: `${SITE}/assets/logo-mark-color.png`,
  image: [`${SITE}/assets/og-cover-1x1.jpg`, `${SITE}/assets/og-cover-4x3.jpg`, `${SITE}/assets/og-cover.jpg`],
  email: "contato@origamilab.com.br",
  telephone: "+553198055189",
  description:
    "Empresa de tecnologia para indústria sediada em Formiga, Minas Gerais. Moderniza operações industriais com software sob medida, integração com ERP, automação de processos, dados em tempo real e IA aplicada, do diagnóstico à implantação, e estrutura o financiamento via Lei do Bem, FINEP e FAPEMIG.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Silviano Brandão, 156 - 2º andar",
    addressLocality: "Formiga",
    addressRegion: "MG",
    postalCode: "35570-112",
    addressCountry: "BR",
  },
  sameAs: ["https://www.linkedin.com/company/origamilab-br/", "https://www.instagram.com/origamilab_br/"],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Centro-Oeste de Minas Gerais" },
    { "@type": "State", name: "Minas Gerais" },
    { "@type": "Country", name: "Brasil" },
  ],
  knowsAbout: [
    "Tecnologia para indústria",
    "Software para indústria",
    "Software sob medida para indústria",
    "Integração de sistemas industriais",
    "Integração com ERP",
    "Automação de processos industriais",
    "Digitalização do chão de fábrica",
    "Apontamento de produção",
    "Gestão industrial em tempo real",
    "Indústria 4.0",
    "Inteligência artificial aplicada à indústria",
    "Modernização de sistemas legados",
    "Consultoria de operação",
    "Lei do Bem",
    "FINEP",
    "FAPEMIG",
  ],
  slogan: "Tecnologia para indústria",
} as const;

const SITE_NODE = {
  "@type": "WebSite",
  "@id": `${SITE}/#site`,
  url: `${SITE}/`,
  name: "Origami Lab",
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE}/#org` },
};

export type Pergunta = { pergunta: string; resposta: string };
export type Migalha = { nome: string; caminho: string };

export function url(caminho: string): string {
  return caminho === "/" ? `${SITE}/` : `${SITE}${caminho}`;
}

function breadcrumb(caminho: string, migalhas: Migalha[]) {
  const itens = [{ nome: "Origami Lab", caminho: "/" }, ...migalhas];
  return {
    "@type": "BreadcrumbList",
    "@id": `${url(caminho)}#breadcrumb`,
    itemListElement: itens.map((m, i) => ({ "@type": "ListItem", position: i + 1, name: m.nome, item: url(m.caminho) })),
  };
}

function faq(caminho: string, perguntas: Pergunta[]) {
  return {
    "@type": "FAQPage",
    "@id": `${url(caminho)}#faq`,
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: { "@type": "Answer", text: p.resposta },
    })),
  };
}

export type OpcoesDoGrafo = {
  caminho: string;
  titulo: string;
  descricao: string;
  atualizadaEm: string;
  migalhas: Migalha[];
  perguntas?: Pergunta[];
  /** Nó principal da página (Service, WebApplication, Article…), sem @id: ele é criado aqui. */
  principal?: Record<string, unknown>;
};

/** Grafo completo de uma página: organização, site, página, trilha, FAQ e o nó principal. */
export function grafoDaPagina(o: OpcoesDoGrafo) {
  const idPrincipal = `${url(o.caminho)}#principal`;
  const pagina = {
    "@type": "WebPage",
    "@id": `${url(o.caminho)}#webpage`,
    url: url(o.caminho),
    name: o.titulo,
    description: o.descricao,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${SITE}/#site` },
    publisher: { "@id": `${SITE}/#org` },
    breadcrumb: { "@id": `${url(o.caminho)}#breadcrumb` },
    dateModified: o.atualizadaEm,
    ...(o.principal ? { mainEntity: { "@id": idPrincipal } } : { about: { "@id": `${SITE}/#org` } }),
  };
  const grafo: Record<string, unknown>[] = [ORGANIZACAO, SITE_NODE, pagina, breadcrumb(o.caminho, o.migalhas)];
  if (o.principal) grafo.push({ ...o.principal, "@id": idPrincipal, url: url(o.caminho) });
  if (o.perguntas?.length) grafo.push(faq(o.caminho, o.perguntas));
  return { "@context": "https://schema.org", "@graph": grafo };
}
