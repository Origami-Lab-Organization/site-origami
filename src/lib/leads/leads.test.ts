import test from "node:test";
import assert from "node:assert/strict";
import { escapar, montarEmail } from "./email";
import { origemPermitida, receberLead, type Dependencias } from "./receber";
import { pareceRobo, validarLead } from "./validacao";

const AGORA = 1_800_000_000_000;

function leadValido(extra: Record<string, unknown> = {}) {
  return {
    nome: "  Ana   Souza ",
    email: "Ana@Empresa.com.br",
    empresa: "Fundição Exemplo",
    cargo: "Diretora industrial",
    ferramenta: "calculadora-de-oee",
    pagina: "/calculadora-de-oee",
    consentimento: true,
    iniciadoEm: AGORA - 60_000,
    site: "",
    dados: { faturamento: "R$ 50 a 100 mi", funcionarios: 180, oee: 61.4, turnos: true, lixo: { x: 1 } },
    origem: { canal: "busca_organica", origem: "www.google.com.br", pagina_entrada: "/calculadora-de-oee" },
    ...extra,
  };
}

function deps(extra: Partial<Dependencias> = {}, chamadas: { url: string; corpo: Record<string, unknown> }[] = []): Dependencias {
  return {
    env: { RESEND_API_KEY: "re_teste", LEADS_PARA: "comercial@exemplo.com" },
    fetch: (async (url: string, init: RequestInit) => {
      chamadas.push({ url, corpo: JSON.parse(String(init.body)) });
      return new Response("{}", { status: 200 });
    }) as typeof fetch,
    agora: () => AGORA,
    novoId: () => "lead-1",
    origemDaRequisicao: "https://www.origamilab.com.br",
    ...extra,
  };
}

/* ---------------------------------------------------------- validação */

test("lead válido sai normalizado; dados aninhados e lixo são descartados", () => {
  const r = validarLead(leadValido());
  assert.equal(r.ok, true);
  if (!r.ok) return;
  assert.equal(r.lead.nome, "Ana Souza");
  assert.equal(r.lead.email, "ana@empresa.com.br");
  assert.deepEqual(r.lead.dados, { faturamento: "R$ 50 a 100 mi", funcionarios: 180, oee: 61.4, turnos: true });
  assert.equal(r.lead.origem.canal, "busca_organica");
  assert.equal(r.lead.telefone, undefined);
});

test("campos obrigatórios e consentimento explícito", () => {
  const r = validarLead(leadValido({ nome: "A", email: "sem-arroba", ferramenta: "Nome Livre!", consentimento: "sim" }));
  assert.deepEqual(r, { ok: false, erros: ["nome", "email", "ferramenta", "consentimento"] });
  assert.deepEqual(validarLead(null), { ok: false, erros: ["corpo"] });
  assert.deepEqual(validarLead("texto"), { ok: false, erros: ["corpo"] });
});

test("textos longos são cortados e o dicionário de dados tem limite de campos", () => {
  const muitos = Object.fromEntries(Array.from({ length: 50 }, (_, i) => [`k${i}`, "x".repeat(500)]));
  const r = validarLead(leadValido({ mensagem: "m".repeat(5000), dados: muitos, origem: [1, 2] }));
  assert.equal(r.ok, true);
  if (!r.ok) return;
  assert.equal(r.lead.mensagem?.length, 2000);
  assert.equal(Object.keys(r.lead.dados).length, 30);
  assert.equal(String(r.lead.dados.k0).length, 200);
  assert.deepEqual(r.lead.origem, {});
});

test("armadilhas de robô: campo invisível preenchido ou envio rápido demais", () => {
  assert.equal(pareceRobo(leadValido(), AGORA), false);
  assert.equal(pareceRobo(leadValido({ site: "http://spam" }), AGORA), true);
  assert.equal(pareceRobo(leadValido({ iniciadoEm: AGORA - 500 }), AGORA), true);
  assert.equal(pareceRobo(leadValido({ iniciadoEm: undefined }), AGORA), true);
  assert.equal(pareceRobo(undefined, AGORA), true);
});

/* ---------------------------------------------------------- e-mail */

test("e-mail traz contato, respostas e origem, com HTML escapado", () => {
  const r = validarLead(leadValido({ empresa: "<script>alert(1)</script> & Cia", mensagem: "Linha 1" }));
  assert.equal(r.ok, true);
  if (!r.ok) return;
  const e = montarEmail(r.lead, "lead-1");
  assert.equal(e.assunto, "Lead do site: <script>alert(1)</script> & Cia (calculadora-de-oee)");
  assert.ok(!e.html.includes("<script>"));
  assert.ok(e.html.includes("&lt;script&gt;"));
  assert.ok(e.texto.includes("- funcionarios: 180"));
  assert.ok(e.texto.includes("- Canal: busca_organica"));
  assert.ok(e.texto.includes("Mensagem\nLinha 1"));
  assert.ok(e.html.includes("lead_id lead-1"));
  assert.equal(escapar(`"a'&`), "&quot;a&#39;&amp;");
});

test("e-mail sem respostas nem mensagem não mostra seções vazias", () => {
  const r = validarLead(leadValido({ dados: {}, origem: {}, cargo: undefined }));
  assert.equal(r.ok, true);
  if (!r.ok) return;
  const e = montarEmail(r.lead, "x");
  assert.ok(!e.texto.includes("Respostas"));
  assert.ok(!e.html.includes("Mensagem"));
});

/* ---------------------------------------------------------- recebimento */

test("origens permitidas: site, previews do projeto e localhost", () => {
  assert.equal(origemPermitida("https://www.origamilab.com.br"), true);
  assert.equal(origemPermitida("https://origamilab.com.br"), true);
  assert.equal(origemPermitida("https://site-origami-abc123-castro-italos-projects.vercel.app"), true);
  assert.equal(origemPermitida("http://localhost:3000"), true);
  assert.equal(origemPermitida("http://127.0.0.1:4178"), true);
  assert.equal(origemPermitida("http://[::1]:4178"), true);
  assert.equal(origemPermitida("http://127.0.0.1.evil.com:4178"), false);
  assert.equal(origemPermitida("https://evil.com"), false);
  assert.equal(origemPermitida("https://www.origamilab.com.br.evil.com"), false);
  assert.equal(origemPermitida(null), false);
});

test("lead válido vai ao Resend com resposta direta para o visitante", async () => {
  const chamadas: { url: string; corpo: Record<string, unknown> }[] = [];
  const r = await receberLead(leadValido(), deps({}, chamadas));
  assert.deepEqual(r, { status: 200, corpo: { ok: true, leadId: "lead-1" } });
  assert.equal(chamadas[0].url, "https://api.resend.com/emails");
  assert.deepEqual(chamadas[0].corpo.to, ["comercial@exemplo.com"]);
  assert.equal(chamadas[0].corpo.reply_to, "ana@empresa.com.br");
  assert.equal(chamadas[0].corpo.from, "Site Origami Lab <noreply@origamipulse.com.br>");
});

test("remetente pode ser trocado por LEADS_DE", async () => {
  const chamadas: { url: string; corpo: Record<string, unknown> }[] = [];
  await receberLead(leadValido(), deps({ env: { RESEND_API_KEY: "k", LEADS_PARA: "a@b.com", LEADS_DE: "X <x@y.com>" } }, chamadas));
  assert.equal(chamadas[0].corpo.from, "X <x@y.com>");
});

test("origem de fora é recusada antes de qualquer coisa", async () => {
  const chamadas: { url: string; corpo: Record<string, unknown> }[] = [];
  const r = await receberLead(leadValido(), deps({ origemDaRequisicao: "https://evil.com" }, chamadas));
  assert.equal(r.status, 403);
  assert.equal(chamadas.length, 0);
});

test("robô recebe ok e nada é enviado", async () => {
  const chamadas: { url: string; corpo: Record<string, unknown> }[] = [];
  const r = await receberLead(leadValido({ site: "spam" }), deps({}, chamadas));
  assert.deepEqual(r, { status: 200, corpo: { ok: true, leadId: "lead-1" } });
  assert.equal(chamadas.length, 0);
});

test("lead inválido devolve 400 com os campos", async () => {
  const r = await receberLead(leadValido({ email: "x" }), deps());
  assert.deepEqual(r, { status: 400, corpo: { ok: false, erros: ["email"] } });
});

test("sem chave ou destinatário configurados: 503, sem chamar o Resend", async () => {
  const chamadas: { url: string; corpo: Record<string, unknown> }[] = [];
  const erro = console.error;
  console.error = () => {};
  try {
    assert.equal((await receberLead(leadValido(), deps({ env: { LEADS_PARA: "a@b.com" } }, chamadas))).status, 503);
    assert.equal((await receberLead(leadValido(), deps({ env: { RESEND_API_KEY: "k" } }, chamadas))).status, 503);
  } finally {
    console.error = erro;
  }
  assert.equal(chamadas.length, 0);
});

test("Resend recusando ou rede caindo: 502", async () => {
  const erro = console.error;
  console.error = () => {};
  try {
    const recusa = deps({ fetch: (async () => new Response("{}", { status: 422 })) as typeof fetch });
    assert.equal((await receberLead(leadValido(), recusa)).status, 502);
    const queda = deps({ fetch: (async () => { throw new Error("rede"); }) as typeof fetch });
    assert.equal((await receberLead(leadValido(), queda)).status, 502);
  } finally {
    console.error = erro;
  }
});

/* ------------------------------------------- contato: e-mail ou WhatsApp */

test("basta o WhatsApp: lead sem e-mail e sem empresa é aceito", () => {
  const r = validarLead(leadValido({ email: "", empresa: "", telefone: "(37) 99999-1234" }));
  assert.equal(r.ok, true);
  if (!r.ok) return;
  assert.equal(r.lead.email, undefined);
  assert.equal(r.lead.empresa, undefined);
  assert.equal(r.lead.telefone, "(37) 99999-1234");
});

test("sem e-mail e sem WhatsApp, o erro é de contato", () => {
  const r = validarLead(leadValido({ email: " ", telefone: "" }));
  assert.deepEqual(r, { ok: false, erros: ["contato"] });
});

test("WhatsApp preenchido errado é recusado mesmo com e-mail válido", () => {
  assert.deepEqual(validarLead(leadValido({ telefone: "1234" })), { ok: false, erros: ["telefone"] });
  assert.equal(validarLead(leadValido({ telefone: "+55 37 99999-1234" })).ok, true);
  assert.equal(validarLead(leadValido({ telefone: "3732221234" })).ok, true);
  assert.deepEqual(validarLead(leadValido({ email: "", telefone: "44 99999-1234 9" })), { ok: false, erros: ["telefone"] });
});

test("e-mail do lead só com WhatsApp: sem reply_to e com o número no corpo", async () => {
  const chamadas: { url: string; corpo: Record<string, unknown> }[] = [];
  const r = await receberLead(leadValido({ email: "", empresa: "", telefone: "37999991234" }), deps({}, chamadas));
  assert.equal(r.status, 200);
  assert.equal("reply_to" in chamadas[0].corpo, false);
  assert.match(String(chamadas[0].corpo.text), /WhatsApp: 37999991234/);
  assert.match(String(chamadas[0].corpo.html), /responda pelo número abaixo/);
  assert.match(String(chamadas[0].corpo.subject), /Ana Souza/);
});

test("páginas do envio e de entrada vão como endereço completo no e-mail", () => {
  const r = validarLead(leadValido());
  assert.equal(r.ok, true);
  if (!r.ok) return;
  const { texto, html } = montarEmail(r.lead, "lead-1");
  assert.match(texto, /Página do envio: https:\/\/www\.origamilab\.com\.br\/calculadora-de-oee/);
  assert.match(texto, /Página de entrada: https:\/\/www\.origamilab\.com\.br\/calculadora-de-oee/);
  assert.match(html, /https:\/\/www\.origamilab\.com\.br\/calculadora-de-oee/);
  const externo = validarLead(leadValido({ pagina: "//outro.site/x", origem: { pagina_entrada: "https://exemplo.com/y" } }));
  assert.equal(externo.ok, true);
  if (!externo.ok) return;
  const e = montarEmail(externo.lead, "lead-2").texto;
  assert.match(e, /Página do envio: \/\/outro\.site\/x/);
  assert.match(e, /Página de entrada: https:\/\/exemplo\.com\/y/);
});
