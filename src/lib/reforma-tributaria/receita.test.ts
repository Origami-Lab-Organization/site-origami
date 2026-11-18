import test from "node:test";
import assert from "node:assert/strict";
import { calcular, codigos, dataDoMes, municipios, RECEITA, situacoes, versaoDasTabelas, type Buscar } from "./receita";

type Rota = (url: string, init?: RequestInit) => { status: number; corpo: unknown } | "falha";

function falso(rota: Rota) {
  const chamadas: { url: string; init?: RequestInit }[] = [];
  const buscar = (async (url: string, init?: RequestInit) => {
    chamadas.push({ url, init });
    const r = rota(url, init);
    if (r === "falha") throw new Error("rede");
    return new Response(JSON.stringify(r.corpo), { status: r.status, headers: { "content-type": "application/json" } });
  }) as Buscar;
  return { buscar, chamadas };
}

const RESPOSTA = {
  objetos: [{ tribCalc: { IBSCBS: { gIBSCBS: { vBC: "1000.00", gCBS: { pCBS: "0.90", vCBS: "9.00" }, gIBSUF: { pIBSUF: "0.10", vIBSUF: "1.00" }, gIBSMun: { pIBSMun: "0", vIBSMun: "0" } }, memoriaCalculo: { cbs: "x" } } }, calculoSimulado: false }],
};

const ENTRADA = { data: "2026-06-10", uf: "MG", municipio: "3126109", tipo: "ncm", codigo: "8466.93.30", cst: "000", cClassTrib: "000001", valor: "1000" };

test("dataDoMes agrupa o cache por mês; data inválida cai no mês corrente", () => {
  assert.equal(dataDoMes("2026-06-10"), "2026-06-01");
  assert.match(dataDoMes("lixo"), /^\d{4}-\d{2}-01$/);
});

test("municípios vêm ordenados por nome; erro da Receita vira null", async () => {
  const { buscar, chamadas } = falso(() => ({ status: 200, corpo: [{ codigo: 3126109, nome: "Formiga" }, { codigo: 3101607, nome: "Abaeté" }] }));
  assert.deepEqual((await municipios(buscar, "MG"))?.map((m) => m.nome), ["Abaeté", "Formiga"]);
  assert.equal(chamadas[0].url, `${RECEITA}/dados-abertos/ufs/municipios?siglaUf=MG`);
  assert.equal(await municipios(falso(() => ({ status: 500, corpo: {} })).buscar, "MG"), null);
  assert.equal(await municipios(falso(() => "falha").buscar, "MG"), null);
});

test("busca de NCM e de NBS sobre as listas oficiais", async () => {
  const ncm = falso(() => ({ status: 200, corpo: [{ ncm: "84669330", descricao: "Para máquinas da posição 84.58" }, { ncm: "73181500", descricao: "Parafusos" }] }));
  assert.deepEqual(await codigos(ncm.buscar, "ncm", "8466", "2026-06-10"), [{ codigo: "84669330", descricao: "Para máquinas da posição 84.58" }]);
  assert.equal(ncm.chamadas[0].url, `${RECEITA}/dados-abertos/ncm/vigentes?data=2026-06-01`);
  const nbs = falso(() => ({ status: 200, corpo: [{ codigo: "101011100", descricao: "Serviços de construção" }] }));
  assert.equal((await codigos(nbs.buscar, "nbs", "construção", "2026-06-10"))?.length, 1);
  assert.match(nbs.chamadas[0].url, /nbs\/lista\?data=2026-06-01$/);
  assert.equal(await codigos(falso(() => ({ status: 404, corpo: {} })).buscar, "ncm", "84", "2026-06-10"), null);
  assert.equal(await codigos(falso(() => ({ status: 404, corpo: {} })).buscar, "nbs", "84", "2026-06-10"), null);
});

test("situações tributárias com as classificações aninhadas", async () => {
  const { buscar } = falso(() => ({ status: 200, corpo: [{ codigo: "000", descricao: "Tributação integral", classificacoesTributarias: [{ codigo: "000001", descricao: "Integral" }] }, { codigo: "999", descricao: "Sem filhos" }] }));
  const s = await situacoes(buscar, "2026-06-10");
  assert.deepEqual(s?.[0], { cst: "000", descricao: "Tributação integral", classificacoes: [{ codigo: "000001", descricao: "Integral" }] });
  assert.deepEqual(s?.[1].classificacoes, []);
  assert.equal(await situacoes(falso(() => "falha").buscar, "2026-06-10"), null);
});

test("versão das tabelas formatada; ausente vira null", async () => {
  assert.equal(await versaoDasTabelas(falso(() => ({ status: 200, corpo: { versaoDb: "V0073", dataVersaoDb: "2026-11-09" } })).buscar), "V0073 de 09/11/2026");
  assert.equal(await versaoDasTabelas(falso(() => ({ status: 200, corpo: { versaoDb: "V0073" } })).buscar), "V0073");
  assert.equal(await versaoDasTabelas(falso(() => ({ status: 200, corpo: {} })).buscar), null);
});

test("cálculo: limpa o NCM, chama a Receita e devolve o resultado com a versão", async () => {
  const { buscar, chamadas } = falso((url) => (url.endsWith("/regime-geral") ? { status: 200, corpo: RESPOSTA } : { status: 200, corpo: { versaoDb: "V0073", dataVersaoDb: "2026-11-09" } }));
  const r = await calcular(ENTRADA, buscar, "id-1");
  assert.equal(r.status, 200);
  assert.equal((r.corpo.resultado as { total: number }).total, 10);
  assert.equal(r.corpo.versao, "V0073 de 09/11/2026");
  const enviado = JSON.parse(String(chamadas[0].init?.body));
  assert.equal(enviado.itens[0].ncm, "84669330");
  assert.equal(enviado.municipio, 3126109);
  assert.equal(chamadas[0].init?.method, "POST");
});

test("cálculo: entrada inválida não chega à Receita", async () => {
  const { buscar, chamadas } = falso(() => ({ status: 200, corpo: RESPOSTA }));
  const r = await calcular({ ...ENTRADA, data: "2027-03-10" }, buscar, "id");
  assert.deepEqual(r, { status: 400, corpo: { ok: false, erros: ["aliquotas"] } });
  assert.equal(chamadas.length, 0);
  assert.equal((await calcular(null, buscar, "id")).status, 400);
});

test("cálculo de 2027 manda as alíquotas informadas", async () => {
  const { buscar, chamadas } = falso((url) => (url.endsWith("/regime-geral") ? { status: 200, corpo: RESPOSTA } : { status: 200, corpo: {} }));
  const r = await calcular({ ...ENTRADA, tipo: "nbs", codigo: "101011100", data: "2027-03-10", aliquotas: { cbs: "8.7", ibsEstadual: 0.05, ibsMunicipal: 0.05 } }, buscar, "id");
  assert.equal(r.status, 200);
  const enviado = JSON.parse(String(chamadas[0].init?.body));
  assert.deepEqual(enviado.itens[0].aliquotasNominais, { cbs: 8.7, ibsEstadual: 0.05, ibsMunicipal: 0.05 });
  assert.equal(enviado.itens[0].nbs, "101011100");
});

test("cálculo: erro da Receita vira 422 com a mensagem dela; rede caída vira 502", async () => {
  const recusa = falso(() => ({ status: 404, corpo: { detail: "NCM de código 84669330 não encontrada para a data 2026-06-10" } }));
  const r = await calcular(ENTRADA, recusa.buscar, "id");
  assert.equal(r.status, 422);
  assert.match(String(r.corpo.mensagem), /NCM de código/);
  const queda = await calcular(ENTRADA, falso(() => "falha").buscar, "id");
  assert.equal(queda.status, 502);
  const semJson = falso(() => ({ status: 200, corpo: "texto" }));
  assert.equal((await calcular(ENTRADA, semJson.buscar, "id")).status, 422);
});
