import { ChamadaFinal, LeiturasRelacionadas, Perguntas } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { grafoDaPagina, url, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/ferramentas";
const DESCRICAO =
  "Calculadora da reforma tributária (CBS e IBS), OEE, Lei do Bem, custo hora-máquina e diagnóstico de modernização: grátis, com resultado na hora.";

export const metadata = metadataDaPagina({
  titulo: "Ferramentas grátis para a indústria",
  descricao: DESCRICAO,
  caminho: CAMINHO,
  tipo: "website",
});

const FERRAMENTAS = [
  {
    href: "/calculadora-reforma-tributaria",
    titulo: "Calculadora da reforma tributária",
    texto: "CBS e IBS de uma venda pela calculadora oficial da Receita Federal, com NCM ou NBS, município e memória de cálculo.",
  },
  {
    href: "/calculadora-de-oee",
    titulo: "Calculadora de OEE",
    texto: "Disponibilidade, performance e qualidade de uma máquina ou linha, com as perdas traduzidas em minutos e em peças boas.",
  },
  {
    href: "/simulador-lei-do-bem",
    titulo: "Simulador da Lei do Bem",
    texto: "Se a sua empresa pode usar o incentivo e quanto ele representa sobre o gasto com P&D, com a memória de cálculo.",
  },
  {
    href: "/calculadora-custo-hora-maquina",
    titulo: "Custo hora-máquina",
    texto: "Depreciação, energia, manutenção e operador numa hora de máquina, e o peso da ociosidade no preço da peça.",
  },
  {
    href: "/diagnostico-de-modernizacao",
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
    pergunta: "Os números que eu digito são enviados para a Origami?",
    resposta:
      "Não. O cálculo é feito no seu navegador. Os dados só chegam à Origami se você preencher o formulário de contato no fim da ferramenta para receber a análise de um especialista.",
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
  atualizadaEm: "2026-11-17",
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
      titulo="Ferramentas grátis para a indústria"
      lead="Calculadoras e um diagnóstico para olhar a sua operação com números: CBS e IBS da reforma tributária, OEE, custo hora-máquina, Lei do Bem e maturidade da modernização. O resultado aparece na hora, sem cadastro, com o método explicado."
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
      <div id="ferramentas-lista">
        <LeiturasRelacionadas
          titulo="Escolha uma ferramenta"
          leituras={FERRAMENTAS.map((f) => ({ href: f.href, titulo: f.titulo, texto: f.texto }))}
        />
      </div>
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
