import type { Metadata } from "next";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { SimuladorLeiDoBem } from "@/components/ferramentas/SimuladorLeiDoBem";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";
import "@/estilos/ferramentas.css";

const CAMINHO = "/simulador-lei-do-bem";
const TITULO = "Simulador da Lei do Bem: calcule a economia";
const DESCRICAO =
  "Simule em dois minutos se a sua empresa pode usar a Lei do Bem e quanto deixa de pagar de IRPJ e CSLL, com a memória de cálculo e a base legal.";

export const metadata: Metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO, tipo: "website" });

const FONTES = {
  lei: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11196.htm",
  decreto: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/decreto/d5798.htm",
  irpj: "https://www.planalto.gov.br/ccivil_03/leis/l9249.htm",
  csll: "https://www.planalto.gov.br/ccivil_03/leis/l7689.htm",
  lucroReal: "https://www.planalto.gov.br/ccivil_03/leis/l9718.htm",
  mcti: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem",
};

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Como calcular a Lei do Bem?",
    resposta:
      "Multiplique o gasto anual com pesquisa, desenvolvimento e inovação tecnológica pelo percentual de exclusão (60%, ou até 70% e 80% se o número de pesquisadores aumentou até 5% ou mais de 5% em relação à média do ano anterior). Some 20% do gasto ligado a pesquisa com patente concedida ou cultivar registrado. O resultado é o valor excluído da base do IRPJ e da CSLL, limitado ao lucro real do ano. A economia é esse valor vezes as alíquotas: 15% de IRPJ, 9% de CSLL e mais 10% de adicional de IRPJ na parte do lucro acima de R$ 240 mil no ano.",
  },
  {
    pergunta: "Quanto a empresa economiza com a Lei do Bem?",
    resposta:
      "Com a exclusão de 60%, cada real gasto em P&D reduz o imposto em cerca de 14 centavos (sem o adicional de IRPJ) a 20 centavos (com o adicional). Com 80%, de 19 a 27 centavos. O valor exato depende do lucro do ano: a exclusão não pode passar do lucro real, e o adicional de 10% do IRPJ só incide sobre a parte do lucro acima de R$ 240 mil no ano.",
  },
  {
    pergunta: "Empresa no lucro presumido ou no Simples pode usar a Lei do Bem?",
    resposta:
      "Não. O benefício é uma exclusão feita na apuração do lucro real, e o MCTI informa que ele se aplica a empresas tributadas pelo lucro real. Para empresas no lucro presumido ou no Simples, o apoio à inovação vem de crédito e subvenção, como os da FINEP e das fundações estaduais de amparo à pesquisa.",
  },
  {
    pergunta: "E se a empresa tiver prejuízo fiscal no ano?",
    resposta:
      "Naquele ano o benefício é zero. A lei limita a exclusão ao valor do lucro real e da base da CSLL antes da própria exclusão, e proíbe aproveitar o excesso em anos seguintes (Lei 11.196/2005, art. 19, §5º).",
  },
  {
    pergunta: "O que entra no gasto com P&D?",
    resposta:
      "Os dispêndios com pesquisa e desenvolvimento de inovação tecnológica classificáveis como despesas operacionais: salários e encargos de quem trabalha nos projetos, materiais e serviços técnicos, inclusive contratos com universidades, instituições de pesquisa ou inventor independente no Brasil, desde que a empresa assuma o risco e o controle dos resultados. Recursos não reembolsáveis recebidos de órgãos públicos não entram. Compra de máquinas e equipamentos tem incentivos próprios, como a depreciação integral no ano da aquisição.",
  },
  {
    pergunta: "O simulador diz se o meu projeto é P&D?",
    resposta:
      "Não. Ele verifica os requisitos objetivos (regime, lucro, regularidade) e faz a conta. Se um projeto se sustenta como pesquisa, desenvolvimento ou inovação tecnológica é uma análise técnica, feita projeto a projeto, e é o ponto que mais derruba benefícios na análise do MCTI.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  atualizadaEm: "2026-11-17",
  migalhas: [
    { nome: "Ferramentas", caminho: "/ferramentas" },
    { nome: "Simulador da Lei do Bem", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "WebApplication",
    name: "Simulador da Lei do Bem",
    description:
      "Verifica os requisitos da Lei do Bem (lucro real, lucro tributável e regularidade fiscal) e estima a economia de IRPJ e CSLL com a exclusão adicional dos dispêndios com P&D.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    provider: { "@id": ORGANIZACAO["@id"] },
    featureList: [
      "Requisitos de enquadramento: regime, lucro tributável e regularidade fiscal",
      "Percentual de exclusão de 60%, 70% ou 80% conforme o número de pesquisadores",
      "Exclusão adicional de 20% para pesquisa com patente concedida",
      "Limite da exclusão pelo lucro real e adicional de IRPJ só onde incide",
      "Memória de cálculo com a base legal",
    ],
    citation: Object.values(FONTES),
  },
});

const SUMARIO = [
  { id: "como-calcula", rotulo: "Como o cálculo funciona" },
  { id: "o-que-entra", rotulo: "O que entra no gasto" },
  { id: "exemplo", rotulo: "Um exemplo" },
  { id: "limites", rotulo: "O que o simulador não faz" },
  { id: "fontes", rotulo: "Fontes" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

const LINK_EXTERNO = { target: "_blank", rel: "noopener" } as const;

export default function PaginaSimuladorLeiDoBem() {
  return (
    <PaginaDeConteudo
      ativo="ferramentas"
      migalhas={[{ nome: "Ferramentas", caminho: "/ferramentas" }, { nome: "Simulador da Lei do Bem" }]}
      titulo="Simulador da Lei do Bem"
      lead={
        <>
          Empresas no lucro real, com lucro tributável no ano e em dia com os tributos federais podem excluir da base do IRPJ e da CSLL{" "}
          <strong>até 60% do que gastaram com pesquisa, desenvolvimento e inovação tecnológica</strong> — até 80% quando aumentam o número de pesquisadores, mais
          20% do gasto ligado a patente concedida. Na prática, sem contar o acréscimo por patente, cada real investido em P&amp;D volta como 14 a 27 centavos de imposto a menos, conforme o
          percentual e o lucro da empresa. O simulador faz a conta com os números da sua empresa e mostra de onde cada valor sai.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="#ferramenta">
            Simular agora <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="/lei-do-bem">
            Entender a Lei do Bem
          </a>
        </>
      }
      meta="Ferramenta gratuita · Atualizado em 17/11/2026 · Estimativa, não substitui parecer contábil"
      dados={DADOS}
    >
      <SimuladorLeiDoBem />

      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          A conta da Lei do Bem tem quatro passos: conferir se a empresa pode usar, achar o percentual de exclusão, calcular o valor excluído e aplicar as
          alíquotas. O simulador segue exatamente essa ordem.
        </p>

        <h2 id="como-calcula">Como o cálculo funciona</h2>
        <p>
          <strong>1. Requisitos.</strong> Os três precisam ser verdadeiros no mesmo ano: apurar o imposto pelo lucro real, ter lucro tributável (a exclusão
          é limitada ao lucro real e não passa para o ano seguinte) e comprovar regularidade fiscal. Falhou um, o benefício do ano é zero.
        </p>
        <p>
          <strong>2. Percentual.</strong> A base é 60% do gasto com P&amp;D. O decreto que regulamenta a lei eleva o teto conforme o número de pesquisadores
          contratados, comparado com a média do ano anterior:
        </p>
        <Tabela
          cabecalho={["Situação no ano", "Exclusão adicional", "Base legal"]}
          linhas={[
            ["Número de pesquisadores igual ou menor", "até 60% do gasto", "Lei 11.196/2005, art. 19; Decreto 5.798/2006, art. 8º"],
            ["Aumento de até 5% no número de pesquisadores", "até 70% do gasto", "Decreto 5.798/2006, art. 8º, §1º, II"],
            ["Aumento de mais de 5%", "até 80% do gasto", "Decreto 5.798/2006, art. 8º, §1º, I"],
            ["Patente concedida ou cultivar registrado", "mais até 20% do gasto ligado a essa pesquisa", "Lei 11.196/2005, art. 19, §3º"],
          ]}
        />
        <p>
          <strong>3. Valor excluído.</strong> Gasto vezes percentual, limitado ao lucro real e à base da CSLL antes da exclusão (Lei 11.196/2005, art. 19,
          §5º). Esse valor sai da base de cálculo além da dedução normal da despesa.
        </p>
        <p>
          <strong>4. Economia.</strong> O valor excluído vezes as alíquotas: IRPJ de 15%, CSLL de 9% e, na parte do lucro que passa de R$ 240 mil no ano (R$
          20 mil por mês), o adicional de 10% do IRPJ. Sem o lucro informado, o simulador mostra a faixa entre 24% e 34% do valor excluído; com o lucro, a
          conta exata.
        </p>

        <h2 id="o-que-entra">O que entra no gasto com P&amp;D</h2>
        <QuadroDeFatos
          titulo="Dispêndios que contam"
          itens={[
            {
              termo: "Despesas operacionais dos projetos",
              definicao: "Salários e encargos de quem trabalha em pesquisa e desenvolvimento, materiais e serviços técnicos usados nos projetos.",
            },
            {
              termo: "Contratos no Brasil",
              definicao:
                "Universidades, instituições científicas e tecnológicas ou inventor independente, desde que a empresa assuma a responsabilidade, o risco e o controle dos resultados.",
            },
            {
              termo: "Microempresas e empresas de pequeno porte",
              definicao: "Valores transferidos para executar P&D por conta da empresa, nas condições do decreto.",
            },
            {
              termo: "Não entram",
              definicao:
                "Recursos não reembolsáveis recebidos de órgãos públicos e pagamentos a quem não reside no Brasil, salvo as exceções da lei. Máquinas e equipamentos têm incentivos próprios.",
            },
          ]}
        />
        <p>
          O gasto precisa ser controlado em contas contábeis específicas, e a documentação fica à disposição da Receita Federal pelo prazo em que a apuração
          pode ser revista. Para entender o que caracteriza pesquisa, desenvolvimento e inovação tecnológica, veja{" "}
          <a href="/lei-do-bem#pd">o que conta como P&amp;D</a>.
        </p>

        <h2 id="exemplo">Um exemplo</h2>
        <p>
          Exemplo hipotético: uma indústria no lucro real gasta R$ 1 milhão no ano com o desenvolvimento de um processo novo, sem aumentar o número de
          pesquisadores, e tem lucro real de R$ 5 milhões. A exclusão adicional é de 60%, ou R$ 600 mil. Como o lucro continua acima de R$ 240 mil depois
          da exclusão, o adicional de IRPJ incide sobre todo o valor: 600 mil × 34% = <strong>R$ 204 mil de imposto a menos</strong> no ano. Se a mesma
          empresa tivesse lucro real de R$ 400 mil, a exclusão ficaria limitada a R$ 400 mil e a economia cairia para R$ 112 mil.
        </p>

        <h2 id="limites">O que o simulador não faz</h2>
        <ul>
          <li>
            <strong>Não diz se o projeto é P&amp;D.</strong> Esse é o ponto que mais derruba benefícios: o MCTI aponta descrição técnica insuficiente e
            despesa mal documentada entre os problemas mais comuns.
          </li>
          <li>
            <strong>Usa os percentuais máximos.</strong> A lei fala em “até” 60%, 70% e 80%.
          </li>
          <li>
            <strong>Considera a apuração anual.</strong> Na apuração trimestral, o limite do adicional de IRPJ é de R$ 60 mil por trimestre.
          </li>
          <li>
            <strong>Não inclui os outros incentivos da lei,</strong> como a redução de 50% do IPI na compra de equipamentos para P&amp;D e a depreciação
            integral no ano da aquisição.
          </li>
          <li>
            <strong>Não vale para quem usa a Lei de Informática:</strong> o capítulo da Lei do Bem não se aplica a essas empresas (Lei 11.196/2005, art.
            26), que seguem regras próprias.
          </li>
        </ul>
        <Nota>
          <strong>Orientação geral.</strong> A Lei do Bem tem regulamentação própria e os procedimentos mudam entre exercícios. Antes de aplicar o benefício,
          confirme requisitos e valores com a sua contabilidade e na legislação vigente.
        </Nota>

        <h2 id="fontes">Fontes</h2>
        <ul>
          <li>
            <a href={FONTES.lei} {...LINK_EXTERNO}>
              Lei nº 11.196/2005
            </a>
            , arts. 17 a 26 (incentivos à inovação tecnológica).
          </li>
          <li>
            <a href={FONTES.decreto} {...LINK_EXTERNO}>
              Decreto nº 5.798/2006
            </a>
            , que regulamenta os incentivos (definições, percentuais por pesquisadores, prestação de informações).
          </li>
          <li>
            <a href={FONTES.irpj} {...LINK_EXTERNO}>
              Lei nº 9.249/1995
            </a>
            , art. 3º (IRPJ de 15% e adicional de 10%).
          </li>
          <li>
            <a href={FONTES.csll} {...LINK_EXTERNO}>
              Lei nº 7.689/1988
            </a>
            , art. 3º, III (CSLL de 9%).
          </li>
          <li>
            <a href={FONTES.mcti} {...LINK_EXTERNO}>
              Lei do Bem no site do MCTI
            </a>{" "}
            (quem pode usar, FormP&amp;D e resultados das análises).
          </li>
        </ul>
      </Documento>

      <Perguntas prefixo="simulador-lei-do-bem" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/lei-do-bem", titulo: "Lei do Bem: quem tem direito", texto: "Os requisitos, o que conta como P&D, como informar o MCTI e o que leva à glosa." },
          {
            href: "/acesso-a-capital",
            titulo: "Acesso a capital",
            texto: "Lei do Bem, FINEP e FAPEMIG do enquadramento à prestação de contas, com cobrança só se o capital for liberado.",
          },
          {
            href: "/financiamento-de-inovacao",
            titulo: "Financiamento de inovação",
            texto: "Crédito e subvenção para quem está no lucro presumido ou precisa de dinheiro no caixa, não de imposto a menos.",
          },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            A conta é a parte fácil. O difícil é o <em className="ol-em">projeto se sustentar</em>.
          </>
        }
        lead="Em trinta minutos a gente olha o que a sua empresa desenvolveu no ano, o que pode virar projeto da Lei do Bem e o que precisa de registro desde já."
        whatsapp="Olá! Usei o simulador da Lei do Bem no site e quero conversar sobre o enquadramento."
      />
    </PaginaDeConteudo>
  );
}
