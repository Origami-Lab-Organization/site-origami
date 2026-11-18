import test from "node:test";
import assert from "node:assert/strict";
import {
  aliquotasDoIbsPrevistas,
  buscarCodigos,
  exigeAliquotas,
  faixaDeValor,
  lerResultado,
  mensagemDeErro,
  montarRequisicao,
  validarEntrada,
  type Entrada,
} from "./calculo";

const BASE: Entrada = {
  data: "2026-06-10",
  uf: "MG",
  municipio: 3126109,
  tipo: "ncm",
  codigo: "84669330",
  cst: "000",
  cClassTrib: "000001",
  valor: 1000,
};

/* Resposta real da API da Receita (2026, Formiga/MG, NCM 8466.93.30, R$ 1.000). */
const RESPOSTA_2026 = {
  objetos: [
    {
      nObj: 1,
      tribCalc: {
        IBSCBS: {
          CST: "000",
          cClassTrib: "000001",
          gIBSCBS: {
            vBC: "1000.00",
            gIBSUF: { pIBSUF: "0.10", vIBSUF: "1.00" },
            gIBSMun: { pIBSMun: "0.00", vIBSMun: "0.00" },
            vIBS: "1.00",
            gCBS: { pCBS: "0.90", vCBS: "9.00" },
          },
          memoriaCalculo: { cbs: "Base de R$ 1.000,00, com alíquota de 0,90%.", ibsUF: "Alíquota de 0,10%.", ibsMun: "Alíquota de 0,00%." },
        },
      },
      calculoSimulado: false,
    },
  ],
};

test("2026 usa as alíquotas da Receita; de 2027 em diante a simulação exige alíquotas", () => {
  assert.equal(exigeAliquotas("2026-12-31"), false);
  assert.equal(exigeAliquotas("2027-01-01"), true);
  assert.equal(exigeAliquotas("2033-06-01"), true);
});

test("IBS de 0,05% + 0,05% só em 2027 e 2028 (ADCT, art. 127)", () => {
  assert.deepEqual(aliquotasDoIbsPrevistas("2027-03-10"), { ibsEstadual: 0.05, ibsMunicipal: 0.05 });
  assert.deepEqual(aliquotasDoIbsPrevistas("2028-12-31"), { ibsEstadual: 0.05, ibsMunicipal: 0.05 });
  assert.equal(aliquotasDoIbsPrevistas("2026-06-10"), null);
  assert.equal(aliquotasDoIbsPrevistas("2029-01-01"), null);
});

test("entrada válida de 2026 não tem erros", () => {
  assert.deepEqual(validarEntrada(BASE), []);
  assert.deepEqual(validarEntrada({ ...BASE, tipo: "nbs", codigo: "101011100" }), []);
});

test("cada campo inválido é apontado", () => {
  const e = validarEntrada({ ...BASE, data: "2025-01-01", uf: "XX", municipio: 123, codigo: "8466", cst: "0", cClassTrib: "1", valor: 0 });
  assert.deepEqual(e, ["data", "uf", "municipio", "codigo", "cst", "cClassTrib", "valor"]);
  assert.deepEqual(validarEntrada({ ...BASE, data: "2026-13-40" }), ["data"]);
  assert.deepEqual(validarEntrada({ ...BASE, data: "10/06/2026" }), ["data"]);
  assert.deepEqual(validarEntrada({ ...BASE, data: "2034-01-01" }), ["data"]);
  assert.deepEqual(validarEntrada({ ...BASE, tipo: "nbs", codigo: "84669330" }), ["codigo"]);
  assert.deepEqual(validarEntrada({ ...BASE, valor: Number.NaN }), ["valor"]);
});

test("de 2027 em diante faltam alíquotas, ou elas estão fora de 0 a 100", () => {
  assert.deepEqual(validarEntrada({ ...BASE, data: "2027-03-10" }), ["aliquotas"]);
  const fora = validarEntrada({ ...BASE, data: "2027-03-10", aliquotas: { cbs: 120, ibsEstadual: -1, ibsMunicipal: 0.05 } });
  assert.deepEqual(fora, ["aliquota_cbs", "aliquota_ibsEstadual"]);
  assert.deepEqual(validarEntrada({ ...BASE, data: "2027-03-10", aliquotas: { cbs: 8.7, ibsEstadual: 0.05, ibsMunicipal: 0.05 } }), []);
});

test("requisição no formato da Receita; alíquotas só vão quando exigidas", () => {
  const r = montarRequisicao({ ...BASE, valor: 1000.005, aliquotas: { cbs: 1, ibsEstadual: 1, ibsMunicipal: 1 } }, "id-1");
  assert.equal(r.dhFatoGerador, "2026-06-10T12:00:00-03:00");
  assert.equal(r.municipio, 3126109);
  assert.deepEqual(r.itens[0], { numero: 1, ncm: "84669330", cst: "000", cClassTrib: "000001", baseCalculo: 1000.01, quantidade: 1, unidade: "UN" });
  const s = montarRequisicao({ ...BASE, tipo: "nbs", codigo: "101011100", data: "2027-03-10", aliquotas: { cbs: 8.7, ibsEstadual: 0.05, ibsMunicipal: 0.05 } }, "id-2");
  assert.equal(s.itens[0].nbs, "101011100");
  assert.deepEqual(s.itens[0].aliquotasNominais, { cbs: 8.7, ibsEstadual: 0.05, ibsMunicipal: 0.05 });
});

test("lê a resposta real de 2026: CBS 0,9%, IBS estadual 0,1%, total de R$ 10", () => {
  const r = lerResultado(RESPOSTA_2026);
  assert.ok(r);
  assert.deepEqual(r.cbs, { aliquota: 0.9, valor: 9 });
  assert.deepEqual(r.ibsEstadual, { aliquota: 0.1, valor: 1 });
  assert.deepEqual(r.ibsMunicipal, { aliquota: 0, valor: 0 });
  assert.equal(r.base, 1000);
  assert.equal(r.total, 10);
  assert.equal(r.carga, 1);
  assert.equal(r.memoria.length, 3);
  assert.equal(r.simulado, false);
});

test("resposta sem grupo de IBS e CBS vira null; campos faltando viram zero", () => {
  assert.equal(lerResultado({}), null);
  assert.equal(lerResultado(null), null);
  assert.equal(lerResultado({ objetos: [{ tribCalc: { IBSCBS: { gIBSCBS: {} } } }] }), null);
  const parcial = lerResultado({ objetos: [{ tribCalc: { IBSCBS: { gIBSCBS: { vBC: "0", gCBS: { pCBS: "x" } } } }, calculoSimulado: true }] });
  assert.ok(parcial);
  assert.deepEqual(parcial.cbs, { aliquota: 0, valor: 0 });
  assert.equal(parcial.carga, 0);
  assert.equal(parcial.simulado, true);
  assert.deepEqual(parcial.memoria, []);
});

test("mensagem de erro vem da Receita quando existe", () => {
  assert.equal(mensagemDeErro({ detail: " NCM não encontrada " }), "NCM não encontrada");
  assert.match(mensagemDeErro({}), /não conseguiu/);
  assert.match(mensagemDeErro(undefined), /não conseguiu/);
});

test("busca de NCM por código (com ou sem pontos) e por palavras sem acento", () => {
  const lista = [
    { codigo: "84669330", descricao: "Para máquinas da posição 84.58" },
    { codigo: "84669319", descricao: "Outras" },
    { codigo: "73181500", descricao: "Outros parafusos e pinos ou pernos, mesmo com as porcas e arruelas" },
  ];
  assert.deepEqual(buscarCodigos(lista, "8466.93").map((c) => c.codigo), ["84669330", "84669319"]);
  assert.deepEqual(buscarCodigos(lista, "maquinas posição").map((c) => c.codigo), ["84669330"]);
  assert.deepEqual(buscarCodigos(lista, "PARAFUSOS porcas").map((c) => c.codigo), ["73181500"]);
  assert.deepEqual(buscarCodigos(lista, "8"), []);
  assert.equal(buscarCodigos(lista, "84", 1).length, 1);
});

test("faixa de valor para eventos", () => {
  assert.equal(faixaDeValor(500), "ate-1mil");
  assert.equal(faixaDeValor(5_000), "1-10mil");
  assert.equal(faixaDeValor(50_000), "10-100mil");
  assert.equal(faixaDeValor(500_000), "100mil-1mi");
  assert.equal(faixaDeValor(5_000_000), "acima-1mi");
});
