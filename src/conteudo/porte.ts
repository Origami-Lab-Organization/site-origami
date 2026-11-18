/* Faixas de porte pedidas nas ferramentas. São o que o comercial precisa para
   qualificar o lead. Os cortes de faturamento seguem limites de regime
   tributário (teto do Simples Nacional e obrigatoriedade do lucro real); os de
   funcionários, as faixas usuais de porte na indústria. */

export const FAIXAS_DE_FATURAMENTO = [
  { valor: "ate-4,8mi", rotulo: "Até R$ 4,8 milhões por ano" },
  { valor: "4,8-30mi", rotulo: "De R$ 4,8 a 30 milhões" },
  { valor: "30-78mi", rotulo: "De R$ 30 a 78 milhões" },
  { valor: "78-300mi", rotulo: "De R$ 78 a 300 milhões" },
  { valor: "acima-300mi", rotulo: "Acima de R$ 300 milhões" },
  { valor: "nao-informado", rotulo: "Prefiro não informar" },
];

export const FAIXAS_DE_FUNCIONARIOS = [
  { valor: "ate-19", rotulo: "Até 19" },
  { valor: "20-99", rotulo: "De 20 a 99" },
  { valor: "100-499", rotulo: "De 100 a 499" },
  { valor: "500-999", rotulo: "De 500 a 999" },
  { valor: "1000+", rotulo: "1.000 ou mais" },
  { valor: "nao-informado", rotulo: "Prefiro não informar" },
];
