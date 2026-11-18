import type { Metadata } from "next";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { QualFomento } from "@/components/ferramentas/QualFomento";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";
import "@/estilos/ferramentas.css";

const CAMINHO = "/fomento-a-inovacao";
const TITULO = "Fomento à inovação: qual instrumento serve para o projeto";
const DESCRICAO =
  "Ferramenta gratuita: responda sobre a empresa e o projeto e veja se o caminho é Lei do Bem, FINEP, BNDES, EMBRAPII ou as linhas de Minas, com o porquê.";

export const metadata: Metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO, tipo: "website" });

/* Fatos conferidos em 18/11/2026 nas fontes abaixo (Compete Minas: chamada
   FAPEMIG/SEDE 011/2026; BDMG: página de inovação, cópia de 13/10/2026). */
const FONTES = {
  leiDoBem: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem",
  finepCredito: "https://www.finep.gov.br/financiamento-via-credito",
  finepAgentes: "https://www.finep.gov.br/credito-operado-por-agentes",
  finepNaoReembolsavel: "https://www.finep.gov.br/financiamento-nao-reembolsavel",
  bndes: "https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/programa-bndes-mais-inovacao",
  embrapii: "https://embrapii.org.br/sobre-a-embrapii/",
  embrapiiSebrae: "https://storage.googleapis.com/uploads-site-embrapii/2025/07/Orientacao-Operacional-03-2025-Sebrae-.pdf",
  competeMinas: "https://fapemig.br/oportunidades/chamadas-e-editais/fapemig-sede-compete-minas",
  pesquisadorNaEmpresa: "https://fapemig.br/oportunidades/chamadas-e-editais/chamada-fapemig-sede-013-2026-pesquisador-na-empresa",
  fapemigChamadas: "https://fapemig.br/oportunidades/chamadas-e-editais",
  bdmg: "https://www.bdmg.mg.gov.br/inovacao/",
  leiDeInovacao: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l10.973.htm",
};

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é fomento à inovação?",
    resposta:
      "É o conjunto de instrumentos públicos que ajudam empresas e instituições a financiar pesquisa, desenvolvimento e modernização: incentivo fiscal, como a Lei do Bem; crédito com condições para inovação, como os da FINEP, do BNDES e dos bancos de desenvolvimento; e recursos não reembolsáveis, como a subvenção econômica e o cofinanciamento da EMBRAPII.",
  },
  {
    pergunta: "Quais são os instrumentos de fomento à inovação?",
    resposta:
      "Para empresas, os principais são: Lei do Bem (redução de IRPJ e CSLL para quem está no lucro real), crédito direto da FINEP e Finep Inovacred, BNDES Mais Inovação, subvenção econômica (recurso que não é devolvido, com contrapartida), EMBRAPII (pesquisa com centro credenciado, com parte paga sem devolução) e programas estaduais, como o Compete Minas e o BDMG Pró-Inovação em Minas Gerais.",
  },
  {
    pergunta: "Quais são as fontes de fomento à inovação no Brasil?",
    resposta:
      "No governo federal, a FINEP, o BNDES, o MCTI (que acompanha a Lei do Bem) e a EMBRAPII. Nos estados, as fundações de amparo à pesquisa, como a FAPEMIG, e os bancos de desenvolvimento, como o BDMG. O Sebrae entra em parcerias para micro e pequenas empresas, como a modalidade EMBRAPII e Sebrae.",
  },
  {
    pergunta: "Empresa no lucro presumido tem acesso a fomento à inovação?",
    resposta:
      "Tem. Só a Lei do Bem depende do lucro real. Crédito da FINEP e do BNDES, subvenção econômica, EMBRAPII e o Compete Minas não filtram por regime tributário: pesam o porte, o projeto e, no crédito, a capacidade de pagamento.",
  },
  {
    pergunta: "O que é recurso não reembolsável?",
    resposta:
      "É recurso público que a empresa não devolve, desde que execute o projeto aprovado e preste contas. Em troca, ela aporta contrapartida e assume obrigações de execução e relatório. A subvenção econômica da FINEP, o Compete Minas e o aporte da EMBRAPII são exemplos.",
  },
  {
    pergunta: "Existe fomento à inovação para pequenas empresas?",
    resposta:
      "Sim. Na parceria EMBRAPII e Sebrae, a EMBRAPII paga até 50% do projeto e o Sebrae até 70% da parte da pequena empresa, até R$ 150 mil. Em Minas, o BDMG Pró-Inovação tem linha para faturamento de até R$ 16 milhões, com operações de até R$ 1 milhão sem garantia real, e o Compete Minas tem categoria própria para receita de até R$ 4,8 milhões. O Finep Inovacred também atende micro e pequenas, por agentes credenciados.",
  },
  {
    pergunta: "Onde encontrar editais de fomento à inovação?",
    resposta:
      "Nos portais de cada instituição: as chamadas da FINEP, as chamadas e editais da FAPEMIG (com filtro para empresas) e as páginas de programas do BNDES. Editais abrem e fecham em semanas, por isso a recomendação é preparar o projeto antes e acompanhar as fontes oficiais.",
  },
  {
    pergunta: "Dá para combinar instrumentos de fomento?",
    resposta:
      "Dá, desde que o mesmo item não seja custeado duas vezes (Decreto 9.283/2018, art. 19). A Lei do Bem não computa os valores recebidos como recurso não reembolsável. Um arranjo comum é crédito para executar o projeto e, para quem está no lucro real, Lei do Bem sobre o gasto feito com recurso próprio.",
  },
  {
    pergunta: "A ferramenta garante que o projeto será aprovado?",
    resposta:
      "Não. Ela cruza critérios objetivos, como regime, porte, valor, estado, tipo de projeto e contrapartida, com as regras publicadas de cada instrumento, e indica os caminhos prováveis. Aprovação depende do mérito do projeto, da chamada aberta e da análise de cada instituição.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [
    { nome: "Ferramentas", caminho: "/ferramentas" },
    { nome: "Fomento à inovação", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "WebApplication",
    name: "Qual fomento à inovação serve para o projeto",
    description:
      "Cruza regime tributário, porte, valor, estado, tipo de projeto, contrapartida e parceria com centro de pesquisa com as regras publicadas da Lei do Bem, FINEP, BNDES, EMBRAPII, Compete Minas e BDMG, e indica os caminhos prováveis com o motivo de cada um.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    provider: { "@id": ORGANIZACAO["@id"] },
    featureList: [
      "Oito instrumentos: Lei do Bem, crédito direto da FINEP, Finep Inovacred, subvenção econômica, BNDES Mais Inovação, EMBRAPII, Compete Minas e BDMG Pró-Inovação",
      "Faixas de porte da FINEP e limites publicados de cada linha",
      "Motivo de cada indicação e de cada instrumento descartado",
      "Regras específicas para empresas de Minas Gerais",
    ],
    citation: Object.values(FONTES),
  },
});

const SUMARIO = [
  { id: "instrumentos", rotulo: "Os instrumentos, lado a lado" },
  { id: "fontes-de-fomento", rotulo: "Quem opera cada um" },
  { id: "como-escolher", rotulo: "Como escolher" },
  { id: "minas-gerais", rotulo: "Fomento em Minas Gerais" },
  { id: "editais", rotulo: "Onde acompanhar editais" },
  { id: "como-decide", rotulo: "Como a ferramenta decide" },
  { id: "fontes", rotulo: "Fontes oficiais" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

const LINK_EXTERNO = { target: "_blank", rel: "noopener" } as const;

export default function PaginaFomentoAInovacao() {
  return (
    <PaginaDeConteudo
      ativo="ferramentas"
      migalhas={[{ nome: "Ferramentas", caminho: "/ferramentas" }, { nome: "Fomento à inovação" }]}
      rotulo="Ferramenta gratuita"
      titulo={
        <>
          Fomento à inovação: <em className="ol-em">qual instrumento serve</em> para o seu projeto
        </>
      }
      lead={
        <>
          Fomento à inovação é o conjunto de instrumentos públicos que ajudam a empresa a financiar pesquisa, desenvolvimento e modernização. São três
          naturezas: <strong>incentivo fiscal</strong> (Lei do Bem, só no lucro real), <strong>crédito</strong> com condições para inovação (FINEP, BNDES e
          bancos de desenvolvimento, como o BDMG) e <strong>recurso não reembolsável</strong>, que exige contrapartida (subvenção da FINEP, EMBRAPII e, em
          Minas, o Compete Minas). Regime tributário, porte, tipo de projeto e a necessidade de dinheiro no caixa decidem o caminho. A ferramenta cruza
          essas respostas e mostra os caminhos prováveis, com o motivo de cada um.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="#ferramenta">
            Descobrir o caminho <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#instrumentos">
            Ver os instrumentos
          </a>
        </>
      }
      meta="Ferramenta gratuita · Atualizado em 18/11/2026 · Indica caminhos prováveis, não garante aprovação"
      dados={DADOS}
    >
      <QualFomento />

      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          A primeira decisão não é qual edital tentar. É saber se a empresa precisa de dinheiro entrando no caixa ou de imposto saindo, porque isso muda
          completamente a porta.
        </p>

        <h2 id="instrumentos">Os instrumentos de fomento à inovação, lado a lado</h2>
        <Tabela
          cabecalho={["Instrumento", "Natureza", "Para quem", "Como se acessa"]}
          linhas={[
            [<a key="ldb" href="/lei-do-bem">Lei do Bem</a>, "Incentivo fiscal", "Lucro real, com lucro no ano e regularidade fiscal", "Declaratório, sem aprovação prévia"],
            [<a key="fd" href="/finep#credito-direto">Crédito direto da FINEP</a>, "Crédito", "Receita acima de R$ 90 mi; projetos a partir de R$ 30 mi", "Fluxo contínuo, no sistema da FINEP"],
            [<a key="fi" href="/finep-inovacred">Finep Inovacred</a>, "Crédito", "Receita abaixo de R$ 300 mi; até R$ 30 mi", "Banco ou cooperativa credenciados"],
            [<a key="sub" href="/finep#subvencao">Subvenção econômica</a>, "Não reembolsável", "Qualquer porte, com contrapartida", "Chamada pública ou programa"],
            [<a key="bn" href="/bndes-mais-inovacao">BNDES Mais Inovação</a>, "Crédito", "Máquinas 4.0, software e serviços, PD&I", "Banco credenciado ou direto"],
            [<a key="em" href="/embrapii">EMBRAPII</a>, "Cofinanciamento não reembolsável", "Projeto de P&D com uma Unidade credenciada", "Sem edital, direto com a Unidade"],
            [<a key="cm" href="#minas-gerais">Compete Minas</a>, "Não reembolsável", "Empresas com sede ou filial em Minas", "Chamada anual da FAPEMIG"],
            [<a key="pi" href="#minas-gerais">BDMG Pró-Inovação</a>, "Crédito", "Todos os portes, projeto em Minas", "No BDMG"],
          ]}
        />
        <p>
          Para a comparação entre incentivo, crédito e subvenção em profundidade, com o caso do lucro presumido, veja{" "}
          <a href="/financiamento-de-inovacao">financiamento de inovação</a>.
        </p>

        <h2 id="fontes-de-fomento">As fontes de fomento: quem opera cada um</h2>
        <QuadroDeFatos
          titulo="Fontes de fomento à inovação para empresas"
          itens={[
            { termo: "FINEP", definicao: "Empresa pública do MCTI: crédito direto, Finep Inovacred (por agentes) e subvenção econômica." },
            { termo: "BNDES", definicao: "Banco público: BNDES Mais Inovação, quase sempre pedido pelo banco credenciado." },
            { termo: "EMBRAPII", definicao: "Organização social que cofinancia P&D executado por centros de pesquisa credenciados." },
            { termo: "MCTI e Receita Federal", definicao: "Lei do Bem: a empresa aplica o incentivo na apuração e informa o MCTI depois." },
            { termo: "FAPEMIG", definicao: "Fundação de amparo à pesquisa de Minas: Compete Minas e chamadas para empresas." },
            { termo: "BDMG", definicao: "Banco de desenvolvimento de Minas: agente do Inovacred e linhas próprias de inovação." },
            { termo: "Sebrae", definicao: "Parceiro em modalidades para micro e pequenas, como a EMBRAPII e Sebrae." },
          ]}
        />

        <h2 id="como-escolher">Como escolher o instrumento</h2>
        <ol>
          <li>
            <strong>Caixa ou imposto?</strong> Se o projeto só sai com recurso de fora, o caminho é crédito ou não reembolsável. Se vai sair com caixa
            próprio, a pergunta é se a empresa paga menos imposto com a Lei do Bem.
          </li>
          <li>
            <strong>Qual o regime tributário?</strong> Lucro presumido e Simples ficam fora da Lei do Bem, mas não do resto.
          </li>
          <li>
            <strong>Qual o porte e o valor?</strong> Receita e tamanho do projeto decidem entre o crédito direto da FINEP, o Inovacred e as linhas pelo banco.
          </li>
          <li>
            <strong>É desenvolvimento ou compra?</strong> Desenvolver algo novo, com risco técnico, abre subvenção, EMBRAPII e Lei do Bem. Comprar máquina
            aponta para o BNDES e o Inovacred 4.0.
          </li>
          <li>
            <strong>Tem parceiro de pesquisa e contrapartida?</strong> Recurso não reembolsável sempre pede contrapartida, e EMBRAPII e chamadas recentes
            pedem uma instituição de pesquisa.
          </li>
        </ol>

        <h2 id="minas-gerais">Fomento à inovação em Minas Gerais</h2>
        <p>
          <strong>Compete Minas.</strong> Programa do Governo de Minas com a FAPEMIG que apoia, por{" "}
          <a href={FONTES.competeMinas} {...LINK_EXTERNO}>
            subvenção econômica
          </a>
          , projetos de inovação de empresas e cooperativas com sede ou filial no estado, sem filtro por regime tributário (MEI fica de fora). Tem duas
          linhas: com instituição de pesquisa parceira e empresarial. Os tetos e as contrapartidas mínimas da edição 2026, por receita:
        </p>
        <Tabela
          cabecalho={["Receita da empresa", "Com instituição de pesquisa", "Empresarial"]}
          linhas={[
            ["Até R$ 4,8 milhões", "Até R$ 500 mil; contrapartida de 15%", "Até R$ 200 mil; contrapartida de 20%"],
            ["De R$ 4,8 a R$ 16 milhões", "Até R$ 1 milhão; 50%", "Até R$ 500 mil; 50%"],
            ["De R$ 16 a R$ 90 milhões", "Até R$ 2 milhões; 100%", "Até R$ 1 milhão; 100%"],
            ["Acima de R$ 90 milhões", "Até R$ 4 milhões; 100%", "Até R$ 3,5 milhões; 100%"],
          ]}
        />
        <p>
          A submissão da edição 2026 já encerrou, e o resultado preliminar saiu em outubro. O programa se repete desde 2022: quem quer disputar a
          próxima edição ganha tempo preparando o projeto agora.
        </p>
        <p>
          <strong>BDMG Pró-Inovação.</strong> Linhas de crédito{" "}
          <a href={FONTES.bdmg} {...LINK_EXTERNO}>
            exclusivas para Minas
          </a>
          , com apoio da FAPEMIG, para empresas de todos os portes com projeto no estado; não precisa ser empresa de base tecnológica. A linha para micro e
          pequenas atende faturamento de até R$ 16 milhões, com operações de até R$ 1 milhão sem garantia real. Na página do banco, em outubro de 2026, as
          taxas começavam em 60% da Selic mais 1,2% ao ano. O BDMG também repassa o Finep Inovacred, para receita entre R$ 4,8 milhões e R$ 300 milhões, e
          linhas do BNDES Mais Inovação. É crédito: quem procura recurso não reembolsável vai à FAPEMIG.
        </p>
        <p>
          <strong>Outras portas mineiras.</strong> A FAPEMIG tem chamadas como a{" "}
          <a href={FONTES.pesquisadorNaEmpresa} {...LINK_EXTERNO}>
            Pesquisador na Empresa
          </a>
          , com bolsas para pesquisadores atuarem em empresas e complemento pago pela empresa. Há Unidades EMBRAPII no estado, como Inatel, IF-MG (Formiga)
          e FEMEC-UFU: veja <a href="/embrapii#minas-gerais">as Unidades em Minas</a>.
        </p>

        <h2 id="editais">Onde acompanhar editais</h2>
        <p>
          Esta página não lista editais abertos de propósito: eles abrem e fecham em semanas, e uma lista desatualizada é pior que nenhuma. As fontes
          certas são as{" "}
          <a href={FONTES.finepNaoReembolsavel} {...LINK_EXTERNO}>
            páginas de financiamento da FINEP
          </a>
          , as{" "}
          <a href={FONTES.fapemigChamadas} {...LINK_EXTERNO}>
            chamadas e editais da FAPEMIG
          </a>
          , com filtro para empresas, e os{" "}
          <a href={FONTES.bndes} {...LINK_EXTERNO}>
            programas do BNDES
          </a>
          . O que não muda de uma chamada para outra é o que faz um projeto bom: problema técnico delimitado, método crível, cronograma coerente e resultado
          mensurável.
        </p>

        <h2 id="como-decide">Como a ferramenta decide</h2>
        <p>
          Cada instrumento tem regras objetivas publicadas, e a ferramenta aplica essas regras às respostas: regime tributário para a Lei do Bem, receita e
          valor para separar crédito direto e Inovacred, estado para as linhas mineiras, contrapartida e parceria para os recursos não reembolsáveis, tipo
          de projeto para separar desenvolvimento de compra de equipamento. Cada instrumento sai como caminho provável, vale avaliar, pouco provável ou não
          se aplica, sempre com o motivo.
        </p>
        <Nota>
          <strong>O que ela não faz.</strong> Não avalia o mérito técnico do projeto, não sabe quais chamadas estão abertas hoje e não substitui a análise
          de cada instituição nem a da sua contabilidade. Os limites usados foram conferidos nas fontes oficiais em 18/11/2026 e mudam ao longo do tempo.
        </Nota>

        <h2 id="fontes">Fontes oficiais</h2>
        <ul>
          <li>
            <a href={FONTES.leiDoBem} {...LINK_EXTERNO}>
              Lei do Bem no MCTI
            </a>{" "}
            e{" "}
            <a href={FONTES.leiDeInovacao} {...LINK_EXTERNO}>
              Lei de Inovação (Lei 10.973/2004)
            </a>
            .
          </li>
          <li>
            FINEP:{" "}
            <a href={FONTES.finepCredito} {...LINK_EXTERNO}>
              crédito direto
            </a>
            ,{" "}
            <a href={FONTES.finepAgentes} {...LINK_EXTERNO}>
              crédito por agentes
            </a>{" "}
            e{" "}
            <a href={FONTES.finepNaoReembolsavel} {...LINK_EXTERNO}>
              não reembolsável
            </a>
            .
          </li>
          <li>
            <a href={FONTES.bndes} {...LINK_EXTERNO}>
              BNDES Mais Inovação
            </a>
            ,{" "}
            <a href={FONTES.embrapii} {...LINK_EXTERNO}>
              EMBRAPII
            </a>{" "}
            e{" "}
            <a href={FONTES.embrapiiSebrae} {...LINK_EXTERNO}>
              parceria EMBRAPII e Sebrae
            </a>
            .
          </li>
          <li>
            <a href={FONTES.competeMinas} {...LINK_EXTERNO}>
              Compete Minas
            </a>
            ,{" "}
            <a href={FONTES.pesquisadorNaEmpresa} {...LINK_EXTERNO}>
              Pesquisador na Empresa
            </a>{" "}
            e{" "}
            <a href={FONTES.bdmg} {...LINK_EXTERNO}>
              linhas de inovação do BDMG
            </a>
            .
          </li>
        </ul>
      </Documento>

      <Perguntas prefixo="fomento" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/finep", titulo: "FINEP: como funciona", texto: "Crédito direto, Finep Inovacred e subvenção: quem pode pedir, taxas, garantias e passo a passo." },
          { href: "/bndes-mais-inovacao", titulo: "BNDES Mais Inovação", texto: "Difusão tecnológica, máquinas 4.0, investimento automático e PD&I, com valores e como pedir." },
          { href: "/embrapii", titulo: "EMBRAPII", texto: "Pesquisa com uma Unidade credenciada, parte paga sem devolução, Sebrae para as pequenas e Unidades em Minas." },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            Saber a porta é o começo. <em className="ol-em">O projeto é o que abre</em>.
          </>
        }
        lead="Em trinta minutos a gente olha o projeto de modernização, confirma o caminho mais provável e diz o que precisa estar pronto antes do pedido ou da próxima chamada."
        whatsapp="Olá! Usei a ferramenta de fomento à inovação no site e quero conversar sobre o meu projeto."
      />
    </PaginaDeConteudo>
  );
}
