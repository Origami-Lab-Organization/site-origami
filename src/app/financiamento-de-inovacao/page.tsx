import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { PaginaDeConteudo } from "@/components/conteudo/PaginaDeConteudo";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { grafoDaPagina, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

/* Financiamento de inovação: Lei do Bem × subvenção econômica × crédito FINEP,
   com a saída para quem está no lucro presumido e a FAPEMIG como seção.
   Cada requisito tem fonte oficial (seção "Fontes oficiais"). Conferido em
   18/11/2026. Sem lista de editais abertos: envelhece em semanas. */

const CAMINHO = "/financiamento-de-inovacao";
const TITULO = "Financiamento de inovação: FINEP e subvenção";
const DESCRICAO =
  "Lei do Bem, subvenção econômica e crédito da FINEP: as três formas de financiar inovação com recurso público, quem pode usar cada uma e como acessar.";
const ATUALIZADA_EM = "2026-11-17";

const FONTES = {
  leiDoBem: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11196.htm",
  leiDeInovacao: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l10.973.htm",
  mcti: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem",
  mctiFaq: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/paginas/perguntas-frequentes",
  subvencao: "https://legacy.finep.gov.br/afinep/122-apoio-e-financiamento/tipos-de-apoio/subvencao-economica",
  creditoDireto: "https://www.finep.gov.br/en/financiamento-via-credito",
  creditoAgentes: "https://www.finep.gov.br/en/credito-operado-por-agentes",
  finep: "https://www.finep.gov.br/",
  competeMinas:
    "https://fapemig.br/difusao-do-conhecimento/imprensa/noticias-e-eventos/novo-edital-do-compete-minas-oferece-r-50-milhoes-para-impulsionar-a-inovacao-tecnologica-no-setor-produtivo",
  fapemigChamadas: "https://fapemig.br/oportunidades/chamadas-e-editais",
};

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é a FINEP?",
    resposta:
      "A FINEP (Financiadora de Estudos e Projetos) é a empresa pública federal de fomento à inovação ligada ao Ministério da Ciência, Tecnologia e Inovação. Ela apoia empresas com crédito reembolsável, operado diretamente ou por agentes financeiros credenciados, e com subvenção econômica, que é recurso não reembolsável concedido por chamadas públicas.",
  },
  {
    pergunta: "O que é financiamento não reembolsável?",
    resposta:
      "É recurso que entra no caixa da empresa e não precisa ser devolvido, desde que o projeto seja executado como aprovado e a prestação de contas seja aceita. No apoio à inovação de empresas, a forma mais comum é a subvenção econômica. Não é dinheiro sem custo: a lei exige contrapartida da empresa, e o projeto tem cronograma e obrigações formais de execução.",
  },
  {
    pergunta: "O que é subvenção econômica?",
    resposta:
      "É a aplicação de recursos públicos não reembolsáveis diretamente em empresas, para dividir com elas o custo e o risco de atividades de inovação. Está prevista na Lei de Inovação (Lei 10.973/2004), que exige aprovação prévia do projeto e contrapartida obrigatória da empresa. A FINEP concede subvenção por chamadas públicas, cada uma com tema, prazo e regras próprias.",
  },
  {
    pergunta: "Empresa no lucro presumido pode usar FINEP e subvenção?",
    resposta:
      "Pode. A Lei do Bem só vale para empresas no lucro real, mas a subvenção econômica e o crédito da FINEP não listam regime tributário entre os requisitos. O que decide é o mérito do projeto e, no crédito, a capacidade de pagamento e o porte da empresa. Por isso, descobrir que não pode usar a Lei do Bem não encerra o assunto.",
  },
  {
    pergunta: "Dá para usar a Lei do Bem e a subvenção da FINEP no mesmo projeto?",
    resposta:
      "Os dois podem conviver no mesmo plano de investimento, mas o mesmo gasto não pode contar duas vezes: segundo o MCTI, os valores recebidos como recurso não reembolsável, como a subvenção econômica, não são computados para os incentivos da Lei do Bem. Cada dispêndio precisa estar alocado a um só instrumento, e isso se decide com a contabilidade antes da apuração.",
  },
  {
    pergunta: "Empresa de médio porte consegue crédito da FINEP?",
    resposta:
      "Sim, em geral pelo crédito operado por agentes financeiros credenciados (linhas Finep Inovacred), que a FINEP indica para empresas com receita operacional bruta inferior a R$ 300 milhões. O crédito direto, analisado pela própria FINEP, é voltado a empresas maiores: na data desta página, receita operacional bruta acima de R$ 90 milhões. Confira as condições vigentes no site da FINEP.",
  },
  {
    pergunta: "A FAPEMIG financia empresas?",
    resposta:
      "Sim, embora seja mais conhecida pelas bolsas e pela pesquisa acadêmica. O principal programa para empresas é o Compete Minas, do Governo de Minas com a FAPEMIG, que apoia por subvenção econômica projetos de inovação de empresas, startups e cooperativas mineiras, inclusive em parceria com universidades e centros de pesquisa do estado. Cada edição tem regras e prazo próprios.",
  },
  {
    pergunta: "Onde vejo as chamadas abertas da FINEP e da FAPEMIG?",
    resposta:
      "Nos portais oficiais da FINEP e da FAPEMIG. Chamadas mudam de tema, de regra e de prazo a cada rodada, e listas publicadas fora da fonte oficial envelhecem rápido. Mais útil do que acompanhar editais é ter o projeto técnico escrito e pronto, para adaptar quando a janela certa abrir.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: "Financiamento de inovação: Lei do Bem, subvenção econômica e crédito da FINEP",
  descricao: DESCRICAO,
  migalhas: [{ nome: "Financiamento de inovação", caminho: CAMINHO }],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: "Financiamento de inovação: Lei do Bem, subvenção econômica e crédito da FINEP",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: ATUALIZADA_EM,
    dateModified: ATUALIZADA_EM,
    author: { "@id": "https://www.origamilab.com.br/#org" },
    publisher: { "@id": "https://www.origamilab.com.br/#org" },
    about: ["Financiamento à inovação", "FINEP", "Subvenção econômica", "Lei do Bem", "FAPEMIG"],
  },
});

export const metadata = metadataDaPagina({
  titulo: TITULO,
  descricao: DESCRICAO,
  caminho: CAMINHO,
  tituloSocial: "Financiamento de inovação: Lei do Bem, subvenção econômica e crédito da FINEP",
});

function Fonte({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

export default function PaginaFinanciamentoDeInovacao() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Financiamento de inovação" }]}
      rotulo="Inovação e capital"
      titulo={<><em className="ol-em">Financiamento de inovação</em>: Lei do Bem, subvenção econômica e crédito da FINEP</>}
      lead={
        <>
          Há três formas de financiar inovação com recurso público, e confundi-las custa meses. A <strong>Lei do Bem</strong> é incentivo fiscal:
          reduz IRPJ e CSLL de quem está no lucro real, sem dinheiro novo no caixa. A <strong>subvenção econômica</strong> é recurso não reembolsável:
          entra e não volta, mas sai por chamada pública, com projeto aprovado e contrapartida obrigatória da empresa. O{" "}
          <strong>crédito da FINEP</strong> é reembolsável: volta com juros, em condições pensadas para inovação. Quem está no lucro presumido não usa
          a Lei do Bem, mas pode buscar os outros dois, que não exigem regime tributário.
        </>
      }
      meta="Atualizado em 18/11/2026 · Orientação geral: condições e prazos mudam a cada chamada · Origami Lab, Formiga (MG)"
      dados={DADOS}
    >
      <Documento
        sumario={[
          { id: "tres-caminhos", rotulo: "Os três caminhos, lado a lado" },
          { id: "lucro-presumido", rotulo: "Se a empresa está no lucro presumido" },
          { id: "reembolsavel", rotulo: "Reembolsável e não reembolsável" },
          { id: "subvencao", rotulo: "O que é subvenção econômica" },
          { id: "credito", rotulo: "Como funciona o crédito da FINEP" },
          { id: "combinar", rotulo: "Dá para combinar?" },
          { id: "fapemig", rotulo: "FAPEMIG e Compete Minas" },
          { id: "ordem", rotulo: "O erro mais caro" },
          { id: "origami", rotulo: "Onde a Origami entra" },
          { id: "fontes", rotulo: "Fontes oficiais" },
          { id: "faq", rotulo: "Perguntas frequentes" },
        ]}
      >
        <p className="ol-prose__lead">
          A primeira decisão não é qual edital tentar. É saber se a empresa precisa de dinheiro entrando no caixa ou de imposto saindo, porque isso
          muda completamente a porta.
        </p>

        <h2 id="tres-caminhos">Os três caminhos, lado a lado</h2>
        <Tabela
          cabecalho={["", "Lei do Bem", "Subvenção econômica", "Crédito da FINEP"]}
          linhas={[
            ["Natureza", "Incentivo fiscal", "Recurso não reembolsável", "Financiamento reembolsável"],
            ["Entra dinheiro no caixa?", "Não: paga-se menos imposto", "Sim", "Sim"],
            ["Devolve?", "Não se aplica", "Não, se o projeto for executado e a prestação de contas aceita", "Sim, com juros e prazo de contrato"],
            ["Quem pode", "Empresa no lucro real, com regularidade fiscal", "Empresas brasileiras; cada chamada define tema e público", "Empresas, conforme porte e capacidade de pagamento"],
            ["Como se acessa", "Declaratório, sem aprovação prévia; o MCTI analisa depois", "Chamada pública, com projeto aprovado e concorrência", "Análise de crédito e do projeto, pela FINEP ou por agente credenciado"],
            ["Contrapartida", "Não há", "Obrigatória por lei; o percentual vem da chamada", "As condições do contrato"],
            ["Quando o recurso aparece", "Na apuração, depois do gasto", "Ao longo do projeto, conforme o cronograma aprovado", "Ao longo do projeto, conforme o contrato"],
          ]}
        />
        <p>
          A linha que mais importa é a de quem pode. A Lei do Bem é filtrada pelo regime tributário: o MCTI informa que ela{" "}
          <Fonte href={FONTES.mcti}>se aplica às empresas no lucro real com regularidade fiscal</Fonte>, e nenhum esforço muda isso. Subvenção e crédito
          são filtrados pelo projeto e, no caso do crédito, pela saúde financeira da empresa.
        </p>
        <Nota>
          <strong>Orientação geral.</strong> Condições, prazos e regras de cada linha e chamada mudam de uma rodada para a outra. Confirme sempre na
          fonte oficial e, no que toca à apuração de impostos, com a sua contabilidade.
        </Nota>

        <h2 id="lucro-presumido">Se a empresa está no lucro presumido</h2>
        <p>
          A Lei do Bem fica fora: a exclusão dos dispêndios de P&D é feita na apuração do lucro real (
          <Fonte href={FONTES.leiDoBem}>Lei 11.196/2005, art. 19</Fonte>), e quem apura pelo lucro presumido ou está no Simples Nacional não tem onde
          aplicá-la. Mas a conversa não acaba aí. A{" "}
          <Fonte href={FONTES.creditoDireto}>página de crédito da FINEP</Fonte> e as regras de subvenção da{" "}
          <Fonte href={FONTES.leiDeInovacao}>Lei de Inovação</Fonte> não listam regime tributário entre os requisitos. O que decide é o mérito do
          projeto e, no crédito, o porte e a capacidade de pagamento.
        </p>
        <p>
          É o caso mais comum de empresa que desiste cedo demais: ouve &ldquo;vocês não podem usar a Lei do Bem&rdquo; e encerra o assunto, quando o
          projeto poderia disputar subvenção ou caber numa linha de crédito para inovação.
        </p>

        <h2 id="reembolsavel">Reembolsável e não reembolsável: a diferença que importa</h2>
        <QuadroDeFatos
          titulo="Em uma frase cada"
          itens={[
            {
              termo: "Recurso reembolsável",
              definicao:
                "É empréstimo: o dinheiro entra, financia o projeto e volta com juros e prazo de contrato. A vantagem não é ser de graça, é ter condições pensadas para inovação.",
            },
            {
              termo: "Recurso não reembolsável",
              definicao:
                "É recurso que não volta, desde que o projeto seja executado como aprovado e a prestação de contas seja aceita. Em troca, a empresa aporta contrapartida e assume obrigações de execução e de relatório.",
            },
          ]}
        />
        <p>
          Uma consequência que surpreende: recurso não reembolsável não é dinheiro sem custo. Ele exige contrapartida, cronograma físico-financeiro,
          execução fiel ao projeto aprovado e prestação de contas formal. Empresa que não consegue executar o que prometeu no prazo prometido tem
          problema maior com subvenção do que teria com crédito.
        </p>

        <h2 id="subvencao">O que é subvenção econômica à inovação</h2>
        <p>
          Subvenção econômica é a <Fonte href={FONTES.subvencao}>aplicação de recursos públicos não reembolsáveis diretamente em empresas</Fonte>, para
          dividir com elas o custo e o risco da inovação. A base é a <Fonte href={FONTES.leiDeInovacao}>Lei de Inovação (Lei 10.973/2004)</Fonte>, que
          traz duas regras que definem como se trabalha com ela:
        </p>
        <ol>
          <li>
            <strong>O projeto é aprovado antes.</strong> A concessão de subvenção, financiamento ou participação societária é precedida de aprovação do
            projeto pelo órgão concedente (art. 19, § 2º).
          </li>
          <li>
            <strong>A contrapartida é obrigatória.</strong> A subvenção implica a assunção de contrapartida pela empresa, na forma de cada instrumento
            (art. 19, § 3º). O percentual e o que pode compor a contrapartida vêm de cada chamada.
          </li>
        </ol>
        <p>
          Na FINEP, a subvenção é operada por <Fonte href={FONTES.subvencao}>chamada pública e, em alguns programas, por fluxo contínuo</Fonte>. Na
          chamada, isso tem três implicações práticas: é por janela, não por balcão (abre, tem prazo e fecha); é concorrida e por mérito, com projetos
          pontuados e comparados; e o que diferencia não é o tamanho da empresa, mas a clareza do problema técnico, do método e do resultado esperado.
          Valores, contrapartidas e exemplos de chamadas estão no <a href="/finep#subvencao">guia da FINEP</a>.
        </p>

        <h2 id="credito">Como funciona o crédito da FINEP</h2>
        <p>
          A FINEP é a empresa pública federal de fomento à inovação ligada ao Ministério da Ciência, Tecnologia e Inovação. No crédito, ela opera por
          dois caminhos, conforme o porte da empresa:
        </p>
        <ol>
          <li>
            <strong>Crédito direto.</strong> A própria FINEP analisa, contrata e acompanha. Na data desta página, a{" "}
            <Fonte href={FONTES.creditoDireto}>FINEP indicava esse caminho</Fonte> para empresas com receita operacional bruta acima de R$ 90 milhões e
            patrimônio líquido acima de R$ 86 milhões, com financiamentos a partir de R$ 30 milhões.
          </li>
          <li>
            <strong>Crédito operado por agentes.</strong> Linhas como o <a href="/finep-inovacred">Finep Inovacred</a> e o Finep Inovacred 4.0
            chegam à empresa por{" "}
            <Fonte href={FONTES.creditoAgentes}>agentes financeiros credenciados</Fonte>, que analisam, contratam e assumem o risco da operação. A FINEP
            indica esse caminho para empresas com receita operacional bruta inferior a R$ 300 milhões. Em Minas Gerais, o BDMG aparece entre os agentes
            credenciados listados pela FINEP.
          </li>
        </ol>
        <p>
          Os limites e as condições mudam; o que vale são as da data em que a empresa for pedir. O que não muda de uma rodada para a outra é o que faz
          um projeto ser bom: problema técnico bem delimitado, método crível, equipe compatível e resultado mensurável.
          Taxas, agentes credenciados e o passo a passo do pedido estão no{" "}
          <a href="/finep">guia completo da FINEP</a>; para compra de máquinas e digitalização, veja também o{" "}
          <a href="/bndes-mais-inovacao">BNDES Mais Inovação</a>.
        </p>

        <h2 id="combinar">Dá para combinar Lei do Bem e subvenção?</h2>
        <p>
          Os instrumentos podem conviver no mesmo plano de investimento, mas o mesmo gasto não conta duas vezes. Segundo o{" "}
          <Fonte href={FONTES.mctiFaq}>MCTI</Fonte>, os valores alocados como recurso não reembolsável, como a subvenção econômica, não são computados
          para os incentivos da Lei do Bem. Na prática, cada dispêndio precisa estar alocado a um só instrumento, e isso se decide com a contabilidade
          antes da apuração, não depois.
        </p>

        <h2 id="fapemig">FAPEMIG e Compete Minas</h2>
        <p>
          A FAPEMIG é mais conhecida pelas bolsas e pela pesquisa acadêmica, mas tem porta para empresas. A principal hoje é o{" "}
          <Fonte href={FONTES.competeMinas}>Compete Minas</Fonte>, programa do Governo de Minas (Secretaria de Desenvolvimento Econômico com a FAPEMIG)
          que apoia por subvenção econômica projetos de inovação para a competitividade do setor produtivo mineiro. Há duas portas: a empresarial, para
          empresas, startups e cooperativas mineiras, e a de parceria com universidades e centros de pesquisa do estado.
        </p>
        <p>
          Para uma indústria mineira, isso significa duas coisas. A FAPEMIG é caminho complementar, não principal, para a modernização da operação. E,
          quando o projeto envolve parceria com universidade ou centro de pesquisa, ela passa a ser uma porta provável. Prazos e valores de cada edição
          estão nas <Fonte href={FONTES.fapemigChamadas}>chamadas da FAPEMIG</Fonte>.
          Os tetos e as contrapartidas da edição 2026, e as linhas de crédito do BDMG, estão em{" "}
          <a href="/fomento-a-inovacao#minas-gerais">fomento à inovação em Minas Gerais</a>.
        </p>

        <h2 id="ordem">O erro mais caro: começar pelo edital</h2>
        <p>
          O padrão que faz empresas perderem tempo é sempre o mesmo: alguém vê a notícia de uma chamada aberta e a empresa corre para montar um projeto
          que caiba no tema. O que sai é um projeto desenhado para o edital, não para a empresa. Ele não é aprovado e, quando é, vira a obrigação de
          executar por anos algo que ninguém lá dentro queria fazer. A ordem que funciona é a inversa:
        </p>
        <ol>
          <li>Definir o que a empresa precisa desenvolver nos próximos dois ou três anos, por razão de negócio.</li>
          <li>Separar o que nesse plano tem incerteza técnica. É a parte financiável e também a que pode se enquadrar na Lei do Bem.</li>
          <li>Deixar o projeto escrito, com problema, método, equipe, cronograma e orçamento.</li>
          <li>Esperar a janela certa e adaptar, em vez de inventar às pressas.</li>
        </ol>
        <p>Empresa com projeto pronto na gaveta consegue submeter em semanas. Sem projeto, não consegue a tempo.</p>

        <h2 id="origami">Onde a Origami Lab entra</h2>
        <p>
          A Origami Lab trabalha o lado técnico dessa estruturação: entender o plano de modernização, separar o que é desenvolvimento com incerteza real,
          escrever o projeto na forma que a análise espera e acompanhar a execução e a prestação de contas. É o serviço de{" "}
          <a href="/acesso-a-capital">acesso a capital</a>, feito em parceria com a PIN, do diagnóstico de elegibilidade à prestação de contas, com
          cobrança apenas se o capital for liberado.
        </p>
        <p>
          Quando o projeto financiável nasce de um <a href="/consultoria-estrategica">diagnóstico da operação</a>, ele já sai com a prioridade e o
          retorno definidos. Se a sua empresa está no lucro real, veja também{" "}
          <a href="/lei-do-bem">quem tem direito à Lei do Bem</a> e estime o valor no <a href="/simulador-lei-do-bem">simulador</a>.
        </p>

        <h2 id="fontes">Fontes oficiais</h2>
        <ol>
          <li>
            <Fonte href={FONTES.leiDoBem}>Lei 11.196/2005</Fonte> (Lei do Bem) e <Fonte href={FONTES.leiDeInovacao}>Lei 10.973/2004</Fonte> (Lei de
            Inovação), no Planalto.
          </li>
          <li>
            <Fonte href={FONTES.mcti}>Portal da Lei do Bem</Fonte> e <Fonte href={FONTES.mctiFaq}>perguntas frequentes</Fonte> do MCTI.
          </li>
          <li>
            FINEP: <Fonte href={FONTES.subvencao}>subvenção econômica</Fonte>, <Fonte href={FONTES.creditoDireto}>crédito direto</Fonte> e{" "}
            <Fonte href={FONTES.creditoAgentes}>crédito operado por agentes</Fonte>.
          </li>
          <li>
            FAPEMIG: <Fonte href={FONTES.competeMinas}>Compete Minas</Fonte> e <Fonte href={FONTES.fapemigChamadas}>chamadas e editais</Fonte>.
          </li>
        </ol>
      </Documento>

      <ChamadaDaOrigami frente="inovacao" pagina={CAMINHO} ferramenta={{ href: "/fomento-a-inovacao", rotulo: "Ver qual fomento serve para o projeto" }} />
      <Perguntas prefixo="financiamento-de-inovacao" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/lei-do-bem", titulo: "Lei do Bem: quem tem direito", texto: "Os requisitos para usar o incentivo e o que conta como P&D na indústria." },
          { href: "/fomento-a-inovacao", titulo: "Qual fomento serve para o projeto", texto: "Ferramenta gratuita que cruza porte, projeto e estado com FINEP, BNDES, EMBRAPII, Lei do Bem e as linhas de Minas." },
          { href: "/finep", titulo: "FINEP: como funciona", texto: "Crédito direto, Finep Inovacred e subvenção: quem pode pedir, taxas, garantias e passo a passo." },
          { href: "/acesso-a-capital", titulo: "Acesso a capital", texto: "O serviço completo de captação, em parceria com a PIN, do diagnóstico à prestação de contas." },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            O caminho certo depende do <em className="ol-em">seu regime e do seu projeto</em>.
          </>
        }
        lead="Trinta minutos para entender o regime tributário, o que a empresa pretende desenvolver e qual dos caminhos faz sentido. Se nenhum fizer, a gente diz na mesma conversa."
        whatsapp="Olá! Li a página sobre financiamento de inovação e quero entender qual caminho faz sentido para a minha empresa."
      />
    </PaginaDeConteudo>
  );
}
