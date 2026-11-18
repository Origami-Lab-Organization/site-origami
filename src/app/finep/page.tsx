import type { Metadata } from "next";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/finep";
const TITULO = "FINEP: o que é e como funciona o financiamento";
const DESCRICAO =
  "O que é a FINEP, as três portas para empresas (crédito direto, Finep Inovacred e subvenção), taxas, quem pode pedir, garantias e o passo a passo.";

export const metadata: Metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

/* Fatos conferidos em 18/11/2026 nas fontes abaixo. Condições Operacionais
   2026 da FINEP atualizadas em 20/07/2026; lista de agentes em 04/11/2026. */
const FONTES = {
  sobre: "https://www.finep.gov.br/sobre-a-finep",
  estatuto: "https://download.finep.gov.br/Estatuto_Social_da_Finep.pdf",
  fndct: "https://legacy.finep.gov.br/a-finep-externo/fndct",
  condicoes: "https://legacy.finep.gov.br/images/a-finep/Condicoes_Operacionais/CondicoesOperacionais.pdf",
  credito: "https://www.finep.gov.br/financiamento-via-credito",
  agentes: "https://www.finep.gov.br/credito-operado-por-agentes",
  listaDeAgentes: "https://www.finep.gov.br/documents/d/guest/agentes_financeiros-5-pdf",
  naoReembolsavel: "https://www.finep.gov.br/financiamento-nao-reembolsavel",
  tecnova: "https://www.finep.gov.br/financiamento-nao-reembolsavel-operado-por-agentes",
  garantias: "https://www.finep.gov.br/documents/d/guest/manual-de-garantias-atualizacao-17-07-2026-pdf",
  leiDeInovacao: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l10.973.htm",
  decreto9283: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/decreto/d9283.htm",
  leiDoBem: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11196.htm",
  bdmg: "https://www.bdmg.mg.gov.br/inovacao/",
};

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é a FINEP?",
    resposta:
      "A Financiadora de Estudos e Projetos (FINEP) é uma empresa pública federal vinculada ao Ministério da Ciência, Tecnologia e Inovação. Ela financia inovação em empresas e instituições de pesquisa com crédito, recursos não reembolsáveis e investimento, e exerce a secretaria-executiva do Fundo Nacional de Desenvolvimento Científico e Tecnológico (FNDCT).",
  },
  {
    pergunta: "Para que serve a FINEP?",
    resposta:
      "Para financiar projetos de inovação que o crédito comum não financia bem: desenvolvimento de produto, processo ou serviço com risco tecnológico, adoção de tecnologias da indústria 4.0 e pesquisa em parceria com universidades e centros de pesquisa. Para empresas, as portas são o crédito direto, o Finep Inovacred, operado por bancos credenciados, e a subvenção econômica, que não é devolvida.",
  },
  {
    pergunta: "Como funciona o financiamento da FINEP?",
    resposta:
      "Depende do porte. Empresas com receita operacional bruta acima de R$ 90 milhões e patrimônio líquido acima de R$ 86 milhões pedem crédito direto, a partir de R$ 30 milhões, cadastrando a empresa no sistema da FINEP. Empresas com receita abaixo de R$ 300 milhões pedem o Finep Inovacred, de até R$ 30 milhões, a um agente financeiro credenciado, como o BDMG em Minas Gerais. Nos dois casos o dinheiro é liberado em parcelas, conforme o cronograma do projeto, e devolvido com juros.",
  },
  {
    pergunta: "A FINEP tem financiamento não reembolsável?",
    resposta:
      "Sim. A subvenção econômica à inovação, prevista na Lei 10.973/2004, é recurso que a empresa não devolve, desde que execute o projeto aprovado e preste contas. Ela vale para empresas de qualquer porte, sai por chamada pública ou fluxo contínuo, conforme o programa, e exige contrapartida da empresa.",
  },
  {
    pergunta: "O que é o Finep Inovacred?",
    resposta:
      "É o crédito da FINEP operado por agentes financeiros credenciados, como bancos de desenvolvimento, bancos e cooperativas de crédito, que analisam, contratam e assumem o risco da operação. Atende empresas com receita operacional bruta abaixo de R$ 300 milhões, com financiamentos de até R$ 30 milhões. Há versões como o Inovacred 4.0, para adoção de tecnologias da indústria 4.0.",
  },
  {
    pergunta: "Qual a taxa do Finep Inovacred?",
    resposta:
      "Pelas Condições Operacionais 2026 da FINEP, até TR + 6,068% ao ano para microempresas, empresas de pequeno porte e pequenas empresas, e até TR + 6,605% ao ano para médias e grandes. A taxa final é definida pelo agente financeiro dentro desse teto e pode mudar; confirme na data do pedido.",
  },
  {
    pergunta: "Empresa no lucro presumido pode pegar financiamento da FINEP?",
    resposta:
      "Pode. A FINEP classifica as empresas pela receita operacional bruta, não pelo regime tributário, e as condições operacionais não restringem o lucro presumido ou o Simples. Quem fica de fora da Lei do Bem, que só vale no lucro real, pode buscar crédito e subvenção. Cada chamada pode ter regras próprias, então confira o edital.",
  },
  {
    pergunta: "A FINEP é ligada ao BNDES?",
    resposta:
      "Não. A FINEP é uma empresa pública vinculada ao Ministério da Ciência, Tecnologia e Inovação; o BNDES é outro banco público. As duas instituições operam juntas o programa Mais Inovação Brasil, mas cada uma tem suas linhas e seus canais.",
  },
  {
    pergunta: "Como pedir financiamento na FINEP?",
    resposta:
      "No crédito direto: consulte as condições operacionais, cadastre a empresa no sistema da FINEP e selecione Financiamento Reembolsável Direto. Um gerente de relacionamento ajuda a montar o Plano Estratégico de Inovação; depois vêm as análises de mérito, crédito, jurídica e de garantias, o contrato e a liberação em parcelas. No Inovacred, o pedido é feito ao agente financeiro credenciado. Na subvenção, a proposta responde a uma chamada.",
  },
  {
    pergunta: "Dá para usar FINEP e Lei do Bem no mesmo projeto?",
    resposta:
      "Os instrumentos podem ser usados juntos, desde que o mesmo item não seja custeado duas vezes (Decreto 9.283/2018, art. 19). A Lei do Bem não computa os valores recebidos como recurso não reembolsável, como a subvenção (Lei 11.196/2005, art. 17, §4º). A separação dos dispêndios se decide com a contabilidade antes da apuração.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [
    { nome: "Fomento à inovação", caminho: "/fomento-a-inovacao" },
    { nome: "FINEP", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: "FINEP: o que é, como funciona o financiamento e quem pode pedir",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    about: [
      { "@type": "GovernmentOrganization", name: "Financiadora de Estudos e Projetos (FINEP)", url: "https://www.finep.gov.br" },
      { "@type": "Legislation", name: "Lei nº 10.973/2004 (Lei de Inovação)", url: FONTES.leiDeInovacao },
    ],
    citation: Object.values(FONTES),
  },
});

const SUMARIO = [
  { id: "o-que-e", rotulo: "O que é a FINEP" },
  { id: "portas", rotulo: "As três portas para empresas" },
  { id: "porte", rotulo: "Como a FINEP mede o porte" },
  { id: "credito-direto", rotulo: "Crédito direto" },
  { id: "inovacred", rotulo: "Finep Inovacred" },
  { id: "subvencao", rotulo: "Não reembolsável: subvenção" },
  { id: "como-pedir", rotulo: "Passo a passo do pedido" },
  { id: "garantias", rotulo: "Requisitos e garantias" },
  { id: "lei-do-bem", rotulo: "FINEP e Lei do Bem" },
  { id: "investimento", rotulo: "Startups e fundos" },
  { id: "origami", rotulo: "Onde a Origami entra" },
  { id: "fontes", rotulo: "Fontes oficiais" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

const LINK_EXTERNO = { target: "_blank", rel: "noopener" } as const;

export default function PaginaFinep() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Fomento à inovação", caminho: "/fomento-a-inovacao" }, { nome: "FINEP" }]}
      rotulo="Fomento à inovação"
      titulo={
        <>
          FINEP: o que é e <em className="ol-em">como funciona o financiamento</em>
        </>
      }
      lead={
        <>
          A FINEP (Financiadora de Estudos e Projetos) é a empresa pública federal de fomento à inovação, vinculada ao Ministério da Ciência, Tecnologia e
          Inovação. Para empresas, ela tem três portas: <strong>crédito direto</strong>, para receita operacional bruta acima de R$ 90 milhões e projetos a
          partir de R$ 30 milhões; o <strong>Finep Inovacred</strong>, pedido a um banco credenciado (o BDMG, em Minas), para receita abaixo de R$ 300
          milhões e até R$ 30 milhões; e a <strong>subvenção econômica</strong>, que não é devolvida, mas exige contrapartida. Nenhuma delas filtra por
          regime tributário: empresa no lucro presumido pode pedir.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="/fomento-a-inovacao">
            Ver qual fomento serve <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#portas">
            Comparar as três portas
          </a>
        </>
      }
      meta="Atualizado em 18/11/2026 · Condições Operacionais 2026 da FINEP · Taxas e limites mudam: confirme na fonte oficial"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          A pergunta útil não é “a FINEP financia o meu projeto?”, é “por qual porta eu entro?”. O porte da empresa, o tamanho do projeto e se ela precisa
          devolver o dinheiro decidem a porta, e cada porta tem um caminho diferente.
        </p>

        <h2 id="o-que-e">O que é a FINEP</h2>
        <p>
          A Financiadora de Estudos e Projetos é uma{" "}
          <a href={FONTES.estatuto} {...LINK_EXTERNO}>
            empresa pública vinculada ao Ministério da Ciência, Tecnologia e Inovação
          </a>
          , com a missão de promover o desenvolvimento econômico e social por meio do fomento público à ciência, tecnologia e inovação. Ela também exerce a{" "}
          <a href={FONTES.fndct} {...LINK_EXTERNO}>
            secretaria-executiva do FNDCT
          </a>
          , o Fundo Nacional de Desenvolvimento Científico e Tecnológico, fundo federal que financia ciência, tecnologia e inovação.
        </p>
        <QuadroDeFatos
          titulo="A FINEP em quatro linhas"
          itens={[
            { termo: "Natureza", definicao: "Empresa pública federal, vinculada ao MCTI. Não é ligada ao BNDES." },
            { termo: "O que financia", definicao: "Inovação em empresas e em instituições de pesquisa: crédito, recurso não reembolsável e investimento." },
            { termo: "Para empresas", definicao: "Crédito direto, Finep Inovacred (por agentes financeiros) e subvenção econômica." },
            {
              termo: "Programa atual",
              definicao: "Opera com o BNDES o Mais Inovação Brasil, que combina crédito, subvenção e outros instrumentos alinhados à política industrial.",
            },
          ]}
        />

        <h2 id="portas">As três portas para empresas</h2>
        <Tabela
          cabecalho={["", "Crédito direto", "Finep Inovacred", "Subvenção econômica"]}
          linhas={[
            ["Natureza", "Reembolsável", "Reembolsável", "Não reembolsável"],
            ["Para quem", "Receita acima de R$ 90 mi e patrimônio líquido acima de R$ 86 mi", "Receita abaixo de R$ 300 mi", "Empresas de qualquer porte"],
            ["Valor", "A partir de R$ 30 mi; até 90% do projeto", "Até R$ 30 mi", "Definido em cada chamada"],
            ["Quem analisa", "A própria FINEP", "O agente financeiro credenciado", "A FINEP, por mérito"],
            ["Como se acessa", "Fluxo contínuo, pelo sistema da FINEP", "No banco ou cooperativa credenciados", "Chamada pública ou fluxo contínuo, conforme o programa"],
            ["Contrapartida", "As condições do contrato", "As condições do agente", "Obrigatória por lei"],
          ]}
        />
        <p>
          A linha que mais elimina é a do porte. Uma indústria com receita de R$ 50 milhões não entra no crédito direto, mas tem o Inovacred e a subvenção.
          Uma com receita de R$ 400 milhões não usa o Inovacred, mas tem o crédito direto. Para ver em que porta a sua empresa e o seu projeto se encaixam,
          incluindo BNDES e EMBRAPII, use a <a href="/fomento-a-inovacao">ferramenta de fomento à inovação</a>.
        </p>

        <h2 id="porte">Como a FINEP mede o porte</h2>
        <p>
          A FINEP classifica a empresa pela <strong>receita operacional bruta do último ano</strong>, não pelo regime tributário nem pelo número de
          funcionários. As faixas das{" "}
          <a href={FONTES.condicoes} {...LINK_EXTERNO}>
            Condições Operacionais 2026
          </a>
          :
        </p>
        <Tabela
          cabecalho={["Porte", "Receita operacional bruta no último ano"]}
          linhas={[
            ["I: Microempresa e EPP", "Até R$ 4,8 milhões"],
            ["II: Pequena", "De R$ 4,8 milhões a R$ 16 milhões"],
            ["III: Média I", "De R$ 16 milhões a R$ 90 milhões"],
            ["IV: Média II", "De R$ 90 milhões a R$ 300 milhões"],
            ["V: Grande", "Acima de R$ 300 milhões"],
          ]}
        />

        <h2 id="credito-direto">Crédito direto da FINEP</h2>
        <p>
          No <a href={FONTES.credito} {...LINK_EXTERNO}>crédito reembolsável direto</a>, a própria FINEP analisa, contrata e acompanha o projeto. É para
          empresas com receita operacional bruta acima de R$ 90 milhões e patrimônio líquido acima de R$ 86 milhões, com financiamentos a partir de R$ 30
          milhões e participação da FINEP de até 90% do projeto (até 100% no Norte, Nordeste e Centro-Oeste). O pedido é em fluxo contínuo: não depende de
          edital. As Condições Operacionais exigem que o projeto se alinhe a pelo menos uma das seis missões da Nova Indústria Brasil.
        </p>
        <QuadroDeFatos
          titulo="Produtos e encargos (Condições Operacionais 2026)"
          itens={[
            {
              termo: "Produtos",
              definicao:
                "Apoio Direto à Inovação (linhas Inovação para Competitividade, Inovação para Desempenho e, só no Norte, Nordeste e Centro-Oeste, Difusão Tecnológica), Finep Mais Inovação, Finep Direto Telecom e Pré-Investimento.",
            },
            {
              termo: "Juros",
              definicao:
                "TR mais uma taxa por linha, por exemplo TR + 2,5% ao ano no Finep Mais Inovação e TR + 4,0% ao ano na Inovação para Competitividade, mais spread de risco de 0,5 a 1,2 ponto percentual.",
            },
            { termo: "Tarifa", definicao: "Inspeção e acompanhamento de 1,5% do valor de cada liberação." },
          ]}
        />

        <h2 id="inovacred">Finep Inovacred: crédito pelo banco credenciado</h2>
        <p>
          No <a href={FONTES.agentes} {...LINK_EXTERNO}>crédito descentralizado</a>, os recursos da FINEP são operados por agentes financeiros
          credenciados, que assumem integralmente o risco da operação e fazem a análise, a contratação, o acompanhamento e a prestação de contas. É o
          caminho da maioria das indústrias de médio porte: empresas com receita operacional bruta abaixo de R$ 300 milhões, com financiamentos de até R$ 30
          milhões.
        </p>
        <QuadroDeFatos
          titulo="Finep Inovacred em resumo"
          itens={[
            {
              termo: "Linhas",
              definicao:
                "Finep Inovacred, Inovacred 4.0 (adoção de tecnologias da indústria 4.0), Inovacred Telecom, Inovacred B+P, Inovacred Centros de P&D e linhas de Aquisição Inovadora.",
            },
            {
              termo: "Taxa máxima",
              definicao: "Até TR + 6,068% ao ano para micro, pequeno porte e pequenas empresas; até TR + 6,605% ao ano para médias e grandes.",
            },
            { termo: "Valor", definicao: "Até R$ 30 milhões por operação." },
            {
              termo: "Em Minas Gerais",
              definicao: (
                <>
                  O <a href={FONTES.bdmg} {...LINK_EXTERNO}>BDMG</a> repassa Inovacred, Inovacred 4.0 e Inovacred Telecom para receita entre R$ 4,8 milhões
                  e R$ 300 milhões. O BNB atende alguns municípios mineiros.
                </>
              ),
            },
            {
              termo: "No Sudeste",
              definicao: "A lista da FINEP inclui também Banco Sicoob, Sicredi, Cresol, Caixa, BTG, ABC e Daycoval, entre outros agentes credenciados.",
            },
          ]}
        />
        <p>
          A taxa da tabela é o teto. A taxa final, as garantias e o prazo são definidos pelo agente, e cada um pode aderir ou não a cada linha. Vale
          consultar mais de um. A{" "}
          <a href={FONTES.listaDeAgentes} {...LINK_EXTERNO}>
            lista de agentes credenciados
          </a>{" "}
          é atualizada pela FINEP; a usada aqui é de 04/11/2026. Taxas de cada linha, prazos, carência, regras do Inovacred 4.0 e o passo a passo
          estão no <a href="/finep-inovacred">guia completo do Finep Inovacred</a>.
        </p>

        <h2 id="subvencao">Não reembolsável: a subvenção econômica</h2>
        <p>
          A <a href={FONTES.naoReembolsavel} {...LINK_EXTERNO}>subvenção econômica à inovação</a> é recurso público aplicado diretamente na empresa, que não
          precisa ser devolvido se o projeto for executado como aprovado e a prestação de contas for aceita. A base é a{" "}
          <a href={FONTES.leiDeInovacao} {...LINK_EXTERNO}>
            Lei de Inovação (Lei 10.973/2004)
          </a>
          , e duas regras definem o jogo:
        </p>
        <ul>
          <li>
            <strong>Vale para empresas de qualquer porte.</strong> As Condições Operacionais falam em empresas brasileiras, privadas ou públicas, de qualquer
            porte, sozinhas ou em associação. Cada chamada pode restringir: a do Mais Inovação de 2026, por exemplo, excluiu microempreendedor
            individual e entidade sem fins lucrativos.
          </li>
          <li>
            <strong>A contrapartida é obrigatória.</strong> A concessão “implica, obrigatoriamente, a assunção de contrapartida pela empresa” (art. 19,
            §3º). O percentual e a forma vêm de cada chamada; na de 2026, a contrapartida era financeira, por porte, depositada em conta exclusiva antes de
            cada parcela.
          </li>
        </ul>
        <p>
          A FINEP opera a subvenção por chamada pública e por fluxo contínuo, conforme o programa. Para dar uma ideia de escala, a chamada do Mais Inovação
          de 2026 aceitou projetos de R$ 5 milhões a R$ 20 milhões no arranjo simples, exigiu uma instituição de pesquisa parceira e cobrou contrapartida
          mínima de 30% de uma média empresa I. São números daquela chamada, não regra geral.
        </p>
        <p>
          Há também a subvenção descentralizada, o <a href={FONTES.tecnova} {...LINK_EXTERNO}>Programa Tecnova</a>, executado com agentes estaduais para
          empresas com receita de até R$ 16 milhões. Em Minas, o agente é a FAPEMIG; a última edição mineira foi a Tecnova II, de 2021.
        </p>
        <Nota>
          <strong>Subvenção não é dinheiro sem custo.</strong> Ela exige contrapartida, cronograma físico-financeiro, execução fiel ao projeto aprovado e
          prestação de contas formal. Empresa que não consegue executar no prazo prometido tem problema maior com subvenção do que teria com crédito.
        </Nota>

        <h2 id="como-pedir">Passo a passo do pedido de crédito</h2>
        <ol>
          <li>
            <strong>Escolher a porta.</strong> Porte e valor decidem entre crédito direto e Inovacred. No Inovacred, o pedido vai para o agente financeiro, e
            os passos abaixo são os dele.
          </li>
          <li>
            <strong>Ler as condições operacionais</strong> da linha: itens financiáveis, participação máxima da FINEP, prazos e encargos.
          </li>
          <li>
            <strong>Cadastrar a empresa</strong> no sistema da FINEP e selecionar Financiamento Reembolsável Direto. Ao concluir o cadastro, a FINEP indica um
            gerente de relacionamento, que ajuda a registrar o Plano Estratégico de Inovação (PEI) da empresa.
          </li>
          <li>
            <strong>Análise de mérito e de crédito</strong> do projeto e da empresa. Depois da aprovação pela diretoria da FINEP, vêm as análises jurídica e
            de garantias.
          </li>
          <li>
            <strong>Contrato e liberação em parcelas,</strong> conforme o cronograma do projeto, com verificação de regularidade a cada liberação.
          </li>
          <li>
            <strong>Acompanhamento:</strong> relatórios técnicos e financeiros periódicos, até o relatório final.
          </li>
        </ol>

        <h2 id="garantias">Requisitos e garantias</h2>
        <ul>
          <li>
            <strong>Regularidade:</strong> a cada liberação, a FINEP verifica a situação no CADIN, o certificado de regularidade do FGTS e a certidão de
            débitos federais e da dívida ativa da União.
          </li>
          <li>
            <strong>Histórico:</strong> no crédito direto, a empresa não pode ter ficado inadimplente com a FINEP nos últimos cinco anos.
          </li>
          <li>
            <strong>Garantias</strong> (
            <a href={FONTES.garantias} {...LINK_EXTERNO}>
              manual de 17/07/2026
            </a>
            ): fiança bancária, seguro garantia, imóveis, máquinas, fiança de pessoa jurídica ou física e escrow. Contratar só com fiança bancária é o
            caminho mais rápido e pode reduzir a taxa; garantias reais pedem também garantia pessoal.
          </li>
        </ul>

        <h2 id="lei-do-bem">FINEP e Lei do Bem no mesmo plano</h2>
        <p>
          Os instrumentos podem ser usados juntos, inclusive no mesmo projeto, desde que o mesmo item não seja custeado duas vezes (
          <a href={FONTES.decreto9283} {...LINK_EXTERNO}>
            Decreto 9.283/2018, art. 19
          </a>
          ). A Lei do Bem tem uma regra expressa: os valores recebidos como recurso não reembolsável, como a subvenção, não entram no cálculo do benefício (
          <a href={FONTES.leiDoBem} {...LINK_EXTERNO}>
            Lei 11.196/2005, art. 17, §4º
          </a>
          ). Como a Lei do Bem só vale no lucro real, a combinação interessa a quem está nesse regime; a separação dos dispêndios se decide com a
          contabilidade antes da apuração. Veja <a href="/lei-do-bem">quem tem direito à Lei do Bem</a>.
        </p>

        <h2 id="investimento">Startups e fundos</h2>
        <p>
          Além de crédito e subvenção, a FINEP investe. O Finep Startup aporta em micro e pequenas empresas inovadoras por edital de seleção, por meio de
          opção de compra de participação, e a FINEP é cotista de fundos de investimento, que escolhem as empresas pelas próprias políticas. Para uma
          indústria tradicional que quer modernizar a operação, esses caminhos raramente são os primeiros.
        </p>

        <h2 id="origami">Onde a Origami Lab entra</h2>
        <p>
          A parte que trava a maioria dos pedidos não é o formulário, é o projeto: problema técnico bem delimitado, método crível, cronograma
          físico-financeiro coerente e resultado mensurável. A Origami ajuda a escolher a porta, estruturar o projeto de modernização e acompanhar a
          execução, em parceria com a PIN e com cobrança vinculada à liberação do recurso. Veja como funciona o{" "}
          <a href="/acesso-a-capital">acesso a capital</a>.
        </p>

        <h2 id="fontes">Fontes oficiais</h2>
        <ul>
          <li>
            <a href={FONTES.condicoes} {...LINK_EXTERNO}>
              Condições Operacionais 2026 da FINEP
            </a>{" "}
            (portes, produtos, encargos e requisitos; atualizadas em 20/07/2026).
          </li>
          <li>
            <a href={FONTES.credito} {...LINK_EXTERNO}>
              Crédito direto
            </a>
            ,{" "}
            <a href={FONTES.agentes} {...LINK_EXTERNO}>
              crédito operado por agentes
            </a>{" "}
            e{" "}
            <a href={FONTES.listaDeAgentes} {...LINK_EXTERNO}>
              lista de agentes credenciados
            </a>
            .
          </li>
          <li>
            <a href={FONTES.naoReembolsavel} {...LINK_EXTERNO}>
              Financiamento não reembolsável
            </a>{" "}
            e{" "}
            <a href={FONTES.tecnova} {...LINK_EXTERNO}>
              Programa Tecnova
            </a>
            .
          </li>
          <li>
            <a href={FONTES.estatuto} {...LINK_EXTERNO}>
              Estatuto Social da FINEP
            </a>{" "}
            e{" "}
            <a href={FONTES.fndct} {...LINK_EXTERNO}>
              FNDCT
            </a>
            .
          </li>
          <li>
            <a href={FONTES.garantias} {...LINK_EXTERNO}>
              Manual de garantias
            </a>
            .
          </li>
          <li>
            <a href={FONTES.leiDeInovacao} {...LINK_EXTERNO}>
              Lei 10.973/2004
            </a>
            ,{" "}
            <a href={FONTES.decreto9283} {...LINK_EXTERNO}>
              Decreto 9.283/2018
            </a>{" "}
            e{" "}
            <a href={FONTES.leiDoBem} {...LINK_EXTERNO}>
              Lei 11.196/2005
            </a>
            .
          </li>
        </ul>
        <Nota>
          <strong>Orientação geral.</strong> Taxas, limites, linhas e agentes mudam ao longo do ano e entre chamadas. Os números desta página são das fontes
          acima, na data indicada; confirme sempre antes de pedir.
        </Nota>
      </Documento>

      <ChamadaDaOrigami frente="inovacao" pagina={CAMINHO} ferramenta={{ href: "/fomento-a-inovacao", rotulo: "Ver qual fomento serve para o projeto" }} />

      <Perguntas prefixo="finep" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/fomento-a-inovacao", titulo: "Qual fomento serve para o projeto", texto: "Ferramenta gratuita: FINEP, BNDES, EMBRAPII, Lei do Bem e as linhas de Minas, com o porquê de cada indicação." },
          { href: "/finep-inovacred", titulo: "Finep Inovacred", texto: "Taxas de 2026, prazos, Inovacred 4.0, agentes como BDMG, Sicoob e Sicredi, e o passo a passo." },
          { href: "/bndes-mais-inovacao", titulo: "BNDES Mais Inovação", texto: "Crédito para inovação, digitalização e máquinas 4.0, pelo banco credenciado ou direto no BNDES." },
          { href: "/embrapii", titulo: "EMBRAPII", texto: "Pesquisa com uma Unidade credenciada, com parte do projeto paga sem devolução e sem edital." },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            O dinheiro existe. O que falta, quase sempre, é <em className="ol-em">um projeto que se sustente</em>.
          </>
        }
        lead="Em trinta minutos a gente olha o projeto de modernização da sua operação, indica a porta mais provável e diz o que precisa estar pronto antes do pedido."
        whatsapp="Olá! Li a página sobre a FINEP no site e quero conversar sobre financiar um projeto."
      />
    </PaginaDeConteudo>
  );
}
