import type { ReactNode } from "react";
import { ChamadaFinal, Perguntas } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { grafoDaPagina, url, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";
import "@/estilos/ferramentas.css";

const CAMINHO = "/ferramentas";
const DESCRICAO =
  "Calculadora da reforma tributária (CBS e IBS), OEE, Lei do Bem, custo hora-máquina, fomento à inovação e diagnóstico de modernização: grátis.";

export const metadata = metadataDaPagina({
  titulo: "Ferramentas grátis para a indústria",
  descricao: DESCRICAO,
  caminho: CAMINHO,
  tipo: "website",
});

type Icone = "recibo" | "medidor" | "escudo" | "relogio" | "radar" | "bussola";

/* Traço de 24px no mesmo estilo da seta (stroke 2, pontas redondas). */
const DESENHOS: Record<Icone, ReactNode> = {
  recibo: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  medidor: (
    <>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="m12 17 4-5" />
      <circle cx="12" cy="17" r="1.5" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  bussola: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 12 18 6" />
    </>
  ),
};

function IconeDaFerramenta({ icone }: { icone: Icone }) {
  return (
    <span className="ol-hub__icone" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {DESENHOS[icone]}
      </svg>
    </span>
  );
}

const FERRAMENTAS = [
  {
    href: "/calculadora-reforma-tributaria",
    tipo: "Calculadora",
    icone: "recibo" as Icone,
    titulo: "Calculadora da reforma tributária",
    texto: "CBS e IBS de uma venda pela calculadora oficial da Receita Federal, com NCM ou NBS, município e memória de cálculo.",
  },
  {
    href: "/calculadora-de-oee",
    tipo: "Calculadora",
    icone: "medidor" as Icone,
    titulo: "Calculadora de OEE",
    texto: "Disponibilidade, performance e qualidade de uma máquina ou linha, com as perdas traduzidas em minutos e em peças boas.",
  },
  {
    href: "/simulador-lei-do-bem",
    tipo: "Simulador",
    icone: "escudo" as Icone,
    titulo: "Simulador da Lei do Bem",
    texto: "Se a sua empresa pode usar o incentivo e quanto ele representa sobre o gasto com P&D, com a memória de cálculo.",
  },
  {
    href: "/fomento-a-inovacao",
    tipo: "Comparador",
    icone: "bussola" as Icone,
    titulo: "Qual fomento serve",
    texto: "Lei do Bem, FINEP, BNDES, EMBRAPII ou as linhas de Minas: os caminhos prováveis para o seu projeto, com o motivo de cada um.",
  },
  {
    href: "/calculadora-custo-hora-maquina",
    tipo: "Calculadora",
    icone: "relogio" as Icone,
    titulo: "Custo hora-máquina",
    texto: "Depreciação, energia, manutenção e operador numa hora de máquina, e o peso da ociosidade no preço da peça.",
  },
  {
    href: "/diagnostico-de-modernizacao",
    tipo: "Diagnóstico",
    icone: "radar" as Icone,
    titulo: "Diagnóstico de modernização",
    texto: "Onze perguntas sobre dados, integração, sistemas legados, retrabalho e prontidão para IA, com as três prioridades da sua operação.",
  },
];

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "As ferramentas são gratuitas?",
    resposta: "Sim. Todas são gratuitas e o resultado aparece na tela, sem cadastro.",
  },
  {
    pergunta: "Onde os cálculos são feitos e para quem os dados são enviados?",
    resposta:
      "OEE, custo hora-máquina, Lei do Bem, fomento à inovação e diagnóstico de modernização são calculados no seu navegador. Na calculadora da reforma tributária, os parâmetros da operação, como valor, data, município e classificação tributária, passam pelo servidor da Origami e são enviados à API pública da Receita Federal para calcular CBS e IBS. Não é preciso informar nome, e-mail ou CNPJ para calcular. Se você enviar o formulário de contato ao fim de uma ferramenta, seu contato e o resultado seguem para a equipe comercial da Origami.",
  },
  {
    pergunta: "Posso usar o resultado para decidir um investimento?",
    resposta:
      "Use como ponto de partida. As ferramentas mostram o método e a memória de cálculo, mas não enxergam particularidades da sua operação nem da sua contabilidade. Antes de decidir, valide os números com quem conhece o processo e, no caso da Lei do Bem, com o seu contador.",
  },
  {
    pergunta: "O que acontece se eu deixar o contato?",
    resposta:
      "Um especialista da Origami lê o seu resultado e responde por e-mail com o que vale olhar primeiro. Se fizer sentido, propõe uma conversa de 30 minutos.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: "Ferramentas grátis para a indústria",
  descricao: DESCRICAO,
  migalhas: [{ nome: "Ferramentas", caminho: CAMINHO }],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "ItemList",
    name: "Ferramentas gratuitas da Origami Lab",
    itemListElement: FERRAMENTAS.map((f, i) => ({ "@type": "ListItem", position: i + 1, name: f.titulo, url: url(f.href) })),
  },
});

export default function PaginaFerramentas() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Ferramentas" }]}
      rotulo="Ferramentas gratuitas"
      abertura="simples"
      titulo={<>Ferramentas grátis <em className="ol-em">para a indústria.</em></>}
      lead="Calculadoras e diagnósticos para olhar a sua operação com números: CBS e IBS da reforma tributária, OEE, custo hora-máquina, Lei do Bem, o caminho de fomento à inovação e a maturidade da modernização. O resultado aparece na hora, sem cadastro, com o método explicado."
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="/diagnostico-de-modernizacao">
            Avalie uma oportunidade de modernização <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#ferramentas-lista">
            Ver as ferramentas
          </a>
        </>
      }
      meta="Origami Lab · Formiga, Minas Gerais · Tecnologia para indústria"
      dados={DADOS}
      ativo="ferramentas"
    >
      <section className="ol-hub" id="ferramentas-lista" aria-labelledby="ferramentas-titulo">
        <div className="ol-hub__inner">
          <span className="ol-kicker ol-kicker--ink">Grátis, sem cadastro</span>
          <h2 className="ol-hub__title" id="ferramentas-titulo">
            Escolha uma <em className="ol-em">ferramenta</em>
          </h2>
          <ul className="ol-hub__grid">
            {FERRAMENTAS.map((f) => (
              <li key={f.href}>
                <a className="ol-hub__card" href={f.href}>
                  <span className="ol-hub__topo">
                    <IconeDaFerramenta icone={f.icone} />
                    <span className="ol-hub__tipo">{f.tipo}</span>
                  </span>
                  <b>{f.titulo}</b>
                  <span className="ol-hub__texto">{f.texto}</span>
                  <span className="ol-hub__abrir">
                    Abrir a ferramenta <Seta />
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a className="ol-hub__card ol-hub__card--conversa" href="/conversar">
                <span className="ol-hub__tipo">Não achou a conta?</span>
                <b>A sua operação tem um número que nenhuma calculadora pega.</b>
                <span className="ol-hub__texto">Conte o que você precisa medir. A gente diz se vale construir e por onde começar.</span>
                <span className="ol-hub__abrir">
                  Conversar com a Origami <Seta />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Perguntas prefixo="ferramentas" perguntas={PERGUNTAS} />
      <ChamadaFinal
        titulo={
          <>
            O número é o começo. <em className="ol-em">A conversa resolve.</em>
          </>
        }
        lead="Trinta minutos com quem conhece chão de fábrica, ERP e financiamento de inovação para entender onde está o ganho na sua operação. Se a resposta for não investir agora, a gente diz."
      />
    </PaginaDeConteudo>
  );
}
