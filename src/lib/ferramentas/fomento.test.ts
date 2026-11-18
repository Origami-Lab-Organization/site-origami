import test from "node:test";
import assert from "node:assert/strict";
import {
  INSTRUMENTOS,
  PERGUNTAS,
  completo,
  indicar,
  perguntasVisiveis,
  respondidas,
  respostasResumidas,
  type Aderencia,
  type IdDoInstrumento,
  type Respostas,
  type ResultadoDoFomento,
} from "./fomento";

/** Indústria mineira no lucro presumido, projeto de P&D, precisa de recurso de fora. */
const BASE: Respostas = {
  objetivo: "pd",
  recurso: "externo",
  regime: "presumido",
  receita: "16-90",
  valor: "1-10",
  contrapartida: true,
  parceria: "aberta",
  estado: "mg",
};

function resultado(r: Respostas): ResultadoDoFomento {
  const x = indicar(r);
  assert.ok(x, "deveria haver resultado com tudo respondido");
  return x;
}

function aderencia(r: Respostas, id: IdDoInstrumento): Aderencia {
  const x = resultado(r);
  const item = [...x.indicados, ...x.descartados].find((i) => i.instrumento.id === id);
  assert.ok(item, id);
  return item.aderencia;
}

function motivos(r: Respostas, id: IdDoInstrumento): string {
  const x = resultado(r);
  return [...x.indicados, ...x.descartados].find((i) => i.instrumento.id === id)?.motivos.join(" ") ?? "";
}

test("perguntas: ids únicos e opções sem repetição", () => {
  assert.equal(new Set(PERGUNTAS.map((p) => p.id)).size, PERGUNTAS.length);
  for (const p of PERGUNTAS) {
    assert.ok(p.opcoes.length >= 2, p.id);
    assert.equal(new Set(p.opcoes.map((o) => String(o.valor))).size, p.opcoes.length, p.id);
  }
});

test("a pergunta do lucro só aparece no lucro real", () => {
  assert.equal(perguntasVisiveis({ regime: "presumido" }).some((p) => p.id === "lucro"), false);
  assert.equal(perguntasVisiveis({ regime: "real" }).some((p) => p.id === "lucro"), true);
  assert.equal(completo(BASE), true);
  assert.equal(completo({ ...BASE, regime: "real" }), false, "no lucro real falta responder o lucro");
  assert.equal(completo({ ...BASE, regime: "real", lucro: "sim" }), true);
});

test("progresso e resultado só com tudo respondido", () => {
  assert.equal(respondidas({}), 0);
  assert.equal(indicar({}), null);
  assert.equal(indicar({ ...BASE, estado: undefined }), null);
  assert.equal(respondidas({ objetivo: "pd", regime: "x" as never }), 1, "valor fora das opções não conta");
  assert.equal(respondidas(BASE), perguntasVisiveis(BASE).length);
});

test("cada instrumento aparece uma vez, indicados antes, ordenados por aderência", () => {
  const x = resultado(BASE);
  const ids = [...x.indicados, ...x.descartados].map((i) => i.instrumento.id);
  assert.deepEqual(new Set(ids), new Set(Object.keys(INSTRUMENTOS)));
  assert.equal(ids.length, Object.keys(INSTRUMENTOS).length);
  assert.ok(x.indicados.every((i) => i.aderencia === "alta" || i.aderencia === "media"));
  assert.ok(x.descartados.every((i) => i.aderencia === "baixa" || i.aderencia === "fora"));
  const ordem = { alta: 0, media: 1, baixa: 2, fora: 3 };
  const seq = [...x.indicados, ...x.descartados].map((i) => ordem[i.aderencia]);
  assert.deepEqual(seq, [...seq].sort((a, b) => a - b));
  assert.ok([...x.indicados, ...x.descartados].every((i) => i.motivos.length > 0));
});

test("lucro presumido em Minas, P&D com recurso de fora: Lei do Bem fora, crédito e verba não reembolsável dentro", () => {
  assert.equal(aderencia(BASE, "lei-do-bem"), "fora");
  assert.match(motivos(BASE, "lei-do-bem"), /lucro real/);
  assert.equal(aderencia(BASE, "finep-inovacred"), "alta");
  assert.match(motivos(BASE, "finep-inovacred"), /BDMG repassa/);
  assert.equal(aderencia(BASE, "bdmg-pro-inovacao"), "alta");
  assert.equal(aderencia(BASE, "subvencao"), "alta");
  assert.equal(aderencia(BASE, "compete-minas"), "alta");
  assert.equal(aderencia(BASE, "embrapii"), "alta");
  assert.equal(aderencia(BASE, "finep-direto"), "fora");
  assert.equal(aderencia(BASE, "bndes-mais-inovacao"), "media");
  assert.match(motivos(BASE, "bndes-mais-inovacao"), /20 milhões/);
  assert.match(motivos(BASE, "compete-minas"), /próxima/);
});

test("Simples Nacional também fica fora da Lei do Bem", () => {
  assert.equal(aderencia({ ...BASE, regime: "simples" }, "lei-do-bem"), "fora");
});

test("lucro real, com lucro e caixa próprio: a Lei do Bem lidera", () => {
  const r: Respostas = { ...BASE, regime: "real", lucro: "sim", recurso: "proprio" };
  const x = resultado(r);
  assert.equal(x.indicados[0].instrumento.id, "lei-do-bem");
  assert.equal(x.indicados[0].aderencia, "alta");
  for (const id of ["finep-direto", "finep-inovacred", "bndes-mais-inovacao", "bdmg-pro-inovacao"] as const) assert.notEqual(aderencia(r, id), "alta", id);
});

test("lucro real com recurso de fora: Lei do Bem ajuda, mas não traz dinheiro novo", () => {
  const r: Respostas = { ...BASE, regime: "real", lucro: "sim" };
  assert.equal(aderencia(r, "lei-do-bem"), "media");
  assert.match(motivos(r, "lei-do-bem"), /dinheiro novo/);
});

test("prejuízo fiscal no ano zera a Lei do Bem", () => {
  assert.equal(aderencia({ ...BASE, regime: "real", lucro: "nao" }, "lei-do-bem"), "fora");
});

test("lucro do ano incerto: a Lei do Bem continua, com o aviso", () => {
  const r: Respostas = { ...BASE, regime: "real", lucro: "nao-sei", recurso: "proprio" };
  assert.equal(aderencia(r, "lei-do-bem"), "alta");
  assert.match(motivos(r, "lei-do-bem"), /depende de haver lucro/);
});

test("regime desconhecido rebaixa a Lei do Bem e pede confirmação", () => {
  const r: Respostas = { ...BASE, regime: "nao-sei", recurso: "proprio" };
  assert.equal(aderencia(r, "lei-do-bem"), "media");
  assert.match(motivos(r, "lei-do-bem"), /confirme o regime/);
});

test("software: entra com ressalva de desafio tecnológico", () => {
  const r: Respostas = { ...BASE, objetivo: "software", regime: "real", lucro: "sim", recurso: "proprio" };
  assert.equal(aderencia(r, "lei-do-bem"), "media");
  assert.match(motivos(r, "lei-do-bem"), /desafio tecnológico/);
  assert.equal(aderencia({ ...BASE, objetivo: "software" }, "subvencao"), "media");
  assert.equal(aderencia({ ...BASE, objetivo: "software" }, "compete-minas"), "media");
  assert.equal(aderencia({ ...BASE, objetivo: "software" }, "embrapii"), "media");
  assert.match(motivos({ ...BASE, objetivo: "software" }, "embrapii"), /risco tecnológico/);
  assert.equal(aderencia({ ...BASE, objetivo: "software" }, "bndes-mais-inovacao"), "alta");
  assert.match(motivos({ ...BASE, objetivo: "software" }, "bndes-mais-inovacao"), /Investimento Automático/);
});

test("compra de máquinas: BNDES na frente, P&D e verba não reembolsável para trás", () => {
  const r: Respostas = { ...BASE, objetivo: "maquinas" };
  assert.equal(aderencia(r, "bndes-mais-inovacao"), "alta");
  assert.equal(aderencia(r, "embrapii"), "fora");
  assert.equal(aderencia(r, "subvencao"), "baixa");
  assert.equal(aderencia(r, "compete-minas"), "baixa");
  assert.equal(aderencia({ ...r, regime: "real", lucro: "sim" }, "lei-do-bem"), "baixa");
  assert.match(motivos(r, "finep-inovacred"), /integradora credenciada/);
  assert.match(motivos({ ...BASE, objetivo: "software" }, "finep-inovacred"), /Inovacred 4\.0/);
  assert.doesNotMatch(motivos(BASE, "finep-inovacred"), /Inovacred 4\.0/);
  assert.match(motivos(r, "bndes-mais-inovacao"), /Finame/);
  assert.equal(aderencia(r, "bdmg-pro-inovacao"), "media");
});

test("sem contrapartida não há verba não reembolsável", () => {
  const r: Respostas = { ...BASE, contrapartida: false };
  for (const id of ["subvencao", "compete-minas", "embrapii"] as const) assert.equal(aderencia(r, id), "fora", id);
  assert.equal(aderencia(r, "finep-inovacred"), "alta");
});

test("fora de Minas: sem Compete Minas e sem a menção ao BDMG", () => {
  const r: Respostas = { ...BASE, estado: "outro" };
  assert.equal(aderencia(r, "compete-minas"), "fora");
  assert.equal(aderencia(r, "bdmg-pro-inovacao"), "fora");
  assert.doesNotMatch(motivos(r, "finep-inovacred"), /BDMG/);
  assert.doesNotMatch(motivos(r, "embrapii"), /Minas/);
  assert.doesNotMatch(motivos(r, "bndes-mais-inovacao"), /BDMG/);
});

test("EMBRAPII pede parceria com centro de pesquisa; Sebrae para micro e pequenas", () => {
  assert.equal(aderencia({ ...BASE, parceria: "nao" }, "embrapii"), "baixa");
  assert.match(motivos({ ...BASE, receita: "ate-4,8" }, "embrapii"), /Sebrae/);
  assert.doesNotMatch(motivos(BASE, "embrapii"), /Sebrae/);
  assert.doesNotMatch(motivos({ ...BASE, parceria: "nao" }, "compete-minas"), /universidades/);
});

test("porte e valor decidem entre crédito direto da FINEP e Inovacred", () => {
  const grande: Respostas = { ...BASE, receita: "acima-300", valor: "acima-30" };
  assert.equal(aderencia(grande, "finep-inovacred"), "fora", "grande porte em Minas fica fora do Inovacred");
  assert.equal(aderencia({ ...grande, estado: "outro" }, "finep-inovacred"), "baixa", "só no Norte, Nordeste ou Centro-Oeste");
  assert.match(motivos({ ...grande, estado: "outro" }, "finep-inovacred"), /Norte, Nordeste ou Centro-Oeste/);
  assert.equal(aderencia(grande, "finep-direto"), "alta");
  const media: Respostas = { ...BASE, receita: "90-300", valor: "acima-30" };
  assert.equal(aderencia(media, "finep-direto"), "alta");
  assert.equal(aderencia(media, "finep-inovacred"), "media", "o Inovacred financia até R$ 30 milhões por operação");
  assert.equal(aderencia({ ...BASE, receita: "90-300", valor: "10-30" }, "finep-direto"), "fora");
  assert.equal(aderencia({ ...grande, objetivo: "maquinas" }, "finep-direto"), "media");
});

test("caixa próprio rebaixa crédito e verba não reembolsável", () => {
  const r: Respostas = { ...BASE, recurso: "proprio", receita: "acima-300", valor: "acima-30" };
  assert.equal(aderencia(r, "finep-direto"), "baixa");
  assert.equal(aderencia({ ...BASE, recurso: "proprio" }, "finep-inovacred"), "baixa");
  assert.equal(aderencia({ ...BASE, recurso: "proprio" }, "bndes-mais-inovacao"), "baixa");
  assert.equal(aderencia({ ...BASE, recurso: "proprio" }, "subvencao"), "media");
  assert.equal(aderencia({ ...BASE, recurso: "proprio" }, "compete-minas"), "media");
  assert.equal(aderencia({ ...BASE, recurso: "proprio" }, "bdmg-pro-inovacao"), "baixa");
});

test("Inovacred: teto de R$ 30 milhões por operação e BDMG só a partir de R$ 4,8 milhões", () => {
  const grandeProjeto: Respostas = { ...BASE, receita: "90-300", valor: "acima-30" };
  assert.equal(aderencia(grandeProjeto, "finep-inovacred"), "media");
  assert.match(motivos(grandeProjeto, "finep-inovacred"), /30 milhões/);
  const pequena: Respostas = { ...BASE, receita: "ate-4,8" };
  assert.equal(aderencia(pequena, "finep-inovacred"), "alta");
  assert.match(motivos(pequena, "finep-inovacred"), /outros agentes/);
});

test("BDMG Pró-Inovação: linha sem garantia real para micro e pequenas", () => {
  assert.match(motivos({ ...BASE, receita: "ate-4,8" }, "bdmg-pro-inovacao"), /sem garantia real/);
  assert.match(motivos({ ...BASE, receita: "4,8-16" }, "bdmg-pro-inovacao"), /sem garantia real/);
  assert.doesNotMatch(motivos(BASE, "bdmg-pro-inovacao"), /sem garantia real/);
});

test("subvenção sem parceria: avisa que chamadas recentes pediram instituição de pesquisa", () => {
  assert.match(motivos({ ...BASE, parceria: "nao" }, "subvencao"), /instituição de pesquisa/);
  assert.doesNotMatch(motivos(BASE, "subvencao"), /instituição de pesquisa/);
});

test("respostas resumidas para o e-mail, só das perguntas visíveis", () => {
  const resumo = respostasResumidas({ ...BASE, lucro: "sim" });
  assert.equal(resumo["Regime tributário"], "Lucro presumido");
  assert.equal(resumo["Pode aportar contrapartida"], "Sim");
  assert.equal("Lucro tributável no ano" in resumo, false);
  assert.equal(Object.keys(resumo).length, perguntasVisiveis(BASE).length);
});
