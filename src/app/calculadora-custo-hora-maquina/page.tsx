import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { CalculadoraHoraMaquina } from "@/components/ferramentas/CalculadoraHoraMaquina";
import { grafoDaPagina, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";
import "@/estilos/ferramentas.css";

const CAMINHO = "/calculadora-custo-hora-maquina";
const TITULO = "Custo hora-máquina: calculadora gratuita";
const DESCRICAO =
  "Calcule o custo hora-máquina com depreciação, capital, energia, manutenção e operador, sobre as horas em que a máquina produz. Grátis, no navegador.";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO, tipo: "website" });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Como calcular o custo hora-máquina?",
    resposta:
      "Some os custos anuais da máquina (depreciação, custo do capital, energia, manutenção, espaço e operador) e divida pelas horas em que ela de fato produz no ano. As horas produtivas são as horas pagas (dias × turnos × horas por turno) multiplicadas pelo aproveitamento, a parte dessas horas em que a máquina está produzindo.",
  },
  {
    pergunta: "Devo dividir pelas horas pagas ou pelas horas produtivas?",
    resposta:
      "Pelas horas produtivas. Quase todo o custo da máquina existe também nas horas paradas em setup, quebra ou falta de programação. Dividir pelas horas pagas faz a hora parecer mais barata e leva a orçamento abaixo do custo. No exemplo da calculadora, com 75% de aproveitamento, a hora produtiva custa um terço a mais que a hora paga.",
  },
  {
    pergunta: "O operador entra no custo hora-máquina?",
    resposta:
      "Depende do uso. Para orçar um serviço, inclua: o operador está na máquina enquanto ela produz e é pago também nas horas paradas. Para comparar máquinas ou avaliar uma compra, faz sentido olhar só a máquina. A calculadora mostra o operador separado; para ver só a máquina, informe zero operadores.",
  },
  {
    pergunta: "Como calcular a depreciação da máquina por hora?",
    resposta:
      "Valor de aquisição menos valor residual, dividido pela vida útil em anos, dá a depreciação anual. Dividida pelas horas produtivas do ano, vira depreciação por hora. É a depreciação linear do custeio gerencial; a depreciação contábil e a fiscal seguem regras próprias.",
  },
  {
    pergunta: "O que é o custo do capital e por que incluir?",
    resposta:
      "É o custo do dinheiro aplicado na máquina: os juros do financiamento, ou o rendimento que esse dinheiro teria em outro uso. A calculadora aplica a taxa anual sobre o investimento médio, a média entre o valor de aquisição e o residual. Se a empresa não considera esse custo nas decisões, informe zero.",
  },
  {
    pergunta: "Como calcular a capacidade produtiva de uma máquina?",
    resposta:
      "Peças por hora = 60 ÷ tempo de ciclo em minutos. Multiplicando pelas horas produtivas do ano, você tem a capacidade efetiva; pelas horas pagas, a nominal. A diferença entre as duas é o tempo perdido com setup, paradas e falta de programação. Numa linha, quem limita a capacidade é a máquina de menor capacidade efetiva.",
  },
  {
    pergunta: "Qual a diferença entre o aproveitamento e o OEE?",
    resposta:
      "O aproveitamento desta calculadora é só a parte das horas pagas em que a máquina produz. O OEE vai além: multiplica disponibilidade, desempenho (velocidade em relação à ideal) e qualidade (peças boas). A disponibilidade do OEE é medida sobre o tempo planejado de produção; o aproveitamento daqui é medido sobre as horas pagas, então inclui também o tempo em que não havia produção programada.",
  },
  {
    pergunta: "A calculadora guarda os meus dados?",
    resposta:
      "Não. A conta é feita no seu navegador e nada é enviado. Os dados só chegam à Origami Lab se você preencher o formulário para falar com um especialista.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [
    { nome: "Ferramentas", caminho: "/ferramentas" },
    { nome: "Calculadora de custo hora-máquina", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "WebApplication",
    name: "Calculadora de custo hora-máquina",
    description: DESCRICAO,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    provider: { "@id": "https://www.origamilab.com.br/#org" },
    featureList: [
      "Depreciação, custo do capital, energia, manutenção, espaço e operador",
      "Custo por hora produtiva e por hora paga",
      "Efeito da ociosidade sobre o custo da hora",
      "Peças por hora, por ano e custo de máquina por peça",
      "Calcula no navegador: nada é enviado a servidor",
    ],
  },
});

const SUMARIO = [
  { id: "o-que-entra", rotulo: "O que entra no custo" },
  { id: "horas-produtivas", rotulo: "Horas pagas × produtivas" },
  { id: "metodo", rotulo: "Como a conta é feita" },
  { id: "orcamento", rotulo: "Usar no orçamento" },
  { id: "capacidade", rotulo: "Capacidade produtiva" },
  { id: "planilha", rotulo: "Quando a planilha não basta" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaCalculadoraCustoHoraMaquina() {
  return (
    <PaginaDeConteudo
      ativo="ferramentas"
      migalhas={[{ nome: "Ferramentas", caminho: "/ferramentas" }, { nome: "Custo hora-máquina" }]}
      rotulo="Ferramenta gratuita"
      rotuloDoLead="Como funciona"
      titulo={<>Calculadora de <em className="ol-em">custo hora-máquina</em></>}
      lead={
        <>
          O custo hora-máquina é o custo anual de manter a máquina (depreciação, capital, energia, manutenção, espaço e operador) dividido pelas horas em que ela{" "}
          <strong>de fato produz</strong>, não pelas horas pagas. A calculadora faz a conta com os dados da sua máquina, mostra o peso de cada componente e quanto a
          hora parada encarece a hora que produz. É gratuita, e o cálculo roda no seu navegador.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="#ferramenta">
            Calcular agora <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#metodo">
            Como a conta é feita
          </a>
        </>
      }
      meta="Ferramenta gratuita da Origami Lab · Formiga, Minas Gerais"
      dados={DADOS}
    >
      <CalculadoraHoraMaquina />

      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          Custo hora-máquina é quanto custa, por hora de produção, manter uma máquina pronta para produzir. Ele soma o que a máquina custa por ano, parada ou rodando,
          e divide pelas horas em que ela efetivamente produz.
        </p>

        <h2 id="o-que-entra">O que entra no custo hora-máquina</h2>
        <p>
          Seis componentes cobrem a maior parte dos casos. Os quatro primeiros são da máquina; o espaço e o operador dependem de como a empresa organiza a produção e
          de como cobra o serviço.
        </p>
        <QuadroDeFatos
          titulo="Os componentes"
          itens={[
            { termo: "Depreciação", definicao: "A perda de valor ao longo da vida útil: valor de aquisição menos valor residual, dividido pelos anos de uso." },
            {
              termo: "Custo do capital",
              definicao: "O que o dinheiro aplicado na máquina custa ou deixa de render: a taxa anual sobre o investimento médio, a média entre o valor de aquisição e o residual.",
            },
            { termo: "Energia", definicao: "Potência instalada × fator de carga × preço do kWh. Só existe enquanto a máquina produz." },
            { termo: "Manutenção", definicao: "Preventiva e corretiva, peças e serviços, em reais por ano ou como percentual do valor da máquina." },
            { termo: "Espaço e ocupação", definicao: "A parte do aluguel, do IPTU, da iluminação e da limpeza que cabe à máquina." },
            { termo: "Operador", definicao: "Custo mensal com encargos dividido pelas horas pagas no mês, vezes os operadores que a máquina exige." },
          ]}
        />
        <p>Ferramental, insumos e o material da peça ficam de fora: entram no custo de cada ordem, não na hora da máquina.</p>

        <h2 id="horas-produtivas">O erro mais comum: dividir pelas horas pagas</h2>
        <p>
          Depreciação, capital, manutenção, espaço e operador custam o mesmo com a máquina produzindo ou parada em setup, quebra ou falta de programação. Se o custo
          anual é dividido pelas horas pagas, a hora parece mais barata do que é, e o orçamento sai com um preço que não cobre a hora que de fato produz.
        </p>
        <p>
          No exemplo da calculadora, com 75% de aproveitamento, a mesma máquina custa R$ 57,99 por hora paga e R$ 77,31 por hora produtiva: a hora que produz é um
          terço mais cara. A diferença é o custo da ociosidade.
        </p>
        <p>
          Por isso a calculadora pede o aproveitamento. Se ele é estimado, o custo também é. Medir o aproveitamento real é um dos primeiros ganhos de um{" "}
          <a href="/apontamento-de-producao">apontamento de produção</a> bem feito.
        </p>

        <h2 id="metodo">Como a conta é feita</h2>
        <Tabela
          cabecalho={["Componente", "Fórmula", "Observação"]}
          linhas={[
            ["Horas pagas por ano", "dias × turnos × horas por turno", "A base do custo do operador"],
            ["Horas produtivas por ano", "horas pagas × aproveitamento", "A base do custo hora-máquina"],
            ["Depreciação", "(aquisição − residual) ÷ vida útil em anos", "Custo fixo anual"],
            ["Custo do capital", "taxa anual × (aquisição + residual) ÷ 2", "Opcional"],
            ["Energia", "kW × fator de carga × R$/kWh × horas produtivas", "Só nas horas produtivas"],
            ["Manutenção", "R$ por ano, ou % ao ano × valor de aquisição", "Custo fixo anual"],
            ["Espaço e ocupação", "R$ por mês × 12", "Opcional"],
            ["Operador", "(custo mensal ÷ horas pagas no mês) × operadores × horas pagas por ano", "Pago também na hora parada"],
            ["Custo hora-máquina", "soma anual ÷ horas produtivas", "O número para orçar"],
          ]}
        />
        <p>
          Depreciação linear e custo do capital sobre o investimento médio são simplificações usuais de custeio gerencial. Não são o cálculo contábil nem o fiscal: a
          depreciação que a empresa lança no balanço segue outras regras.
        </p>

        <h2 id="orcamento">Como usar no orçamento de usinagem e retífica</h2>
        <p>
          Na manufatura sob encomenda, como usinagem, retífica e caldeiraria, o preço de cada serviço nasce do tempo de máquina. Com o custo hora-máquina em mãos, o
          custo de máquina de uma ordem é o custo por hora × (tempo de setup + tempo de ciclo × quantidade). Material, ferramental, terceirização e margem entram
          depois, separados.
        </p>
        <p>
          Sem esse número, o orçamento tende a copiar o preço de mercado ou o último preço cobrado, e a empresa só descobre que perdeu dinheiro numa peça quando fecha o
          mês. É um dos problemas que descrevemos na{" "}
          <a href="/tecnologia-para-industrias-minas-gerais">manufatura sob encomenda dos polos industriais de Minas Gerais</a>.
        </p>

        <h2 id="capacidade">Capacidade produtiva: quantas peças por hora</h2>
        <p>
          Com o tempo de ciclo, a capacidade sai da mesma conta: peças por hora = 60 ÷ tempo de ciclo em minutos, e peças por ano = peças por hora × horas produtivas.
          A diferença entre a capacidade nominal (todas as horas pagas) e a efetiva (só as produtivas) é a mesma ociosidade que encarece a hora.
        </p>
        <p>Para a capacidade de uma linha ou da fábrica, a conta é feita no gargalo: a máquina de menor capacidade efetiva limita as outras.</p>

        <h2 id="planilha">Quando a planilha deixa de bastar</h2>
        <p>
          Uma máquina cabe numa calculadora. Vinte máquinas, três turnos e um portfólio de peças pedem o aproveitamento medido, não estimado, e o custo atualizado
          quando energia, salário ou mix de produção mudam. É o ponto em que o dado precisa vir do chão de fábrica: do{" "}
          <a href="/apontamento-de-producao">apontamento de produção</a>, do <a href="/calculadora-de-oee">OEE</a> e de um{" "}
          <a href="/planejamento-de-producao">planejamento da produção</a> que use a capacidade real.
        </p>
        <Nota>
          <strong>Estimativa gerencial.</strong> A calculadora serve para orçar e decidir. Não substitui o custeio contábil da empresa nem a apuração fiscal da
          depreciação.
        </Nota>
      </Documento>

      <Perguntas prefixo="hora-maquina" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/calculadora-de-oee", titulo: "Calculadora de OEE", texto: "Calcule o OEE da máquina ou da linha e veja onde está a perda: disponibilidade, desempenho ou qualidade." },
          { href: "/apontamento-de-producao", titulo: "Apontamento de produção", texto: "Como coletar no chão de fábrica o tempo de máquina, as paradas e a produção que alimentam o custo e o OEE." },
          { href: "/planejamento-de-producao", titulo: "Planejamento da produção (PCP)", texto: "Programar pela capacidade real, não pela nominal, e o método para calcular o retorno da digitalização." },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            Orçar pela hora certa começa por <em className="ol-em">medir a hora</em>.
          </>
        }
        lead="Trinta minutos para entender como a sua operação apura o tempo de máquina hoje e onde esse número pode vir do chão de fábrica, em vez de estimativa."
        rotulo="Converse com um especialista"
        whatsapp="Olá! Usei a calculadora de custo hora-máquina no site e quero conversar."
      />
    </PaginaDeConteudo>
  );
}
