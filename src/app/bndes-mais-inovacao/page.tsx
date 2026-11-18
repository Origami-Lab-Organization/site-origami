import type { Metadata } from "next";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/bndes-mais-inovacao";
const TITULO = "BNDES Mais Inovação: como funciona e quem pode pedir";
const DESCRICAO =
  "As linhas do BNDES Mais Inovação (difusão tecnológica, máquinas 4.0, investimento automático, PD&I), valores, quem pode pedir e como solicitar pelo banco.";

export const metadata: Metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

/* Fatos conferidos em 18/11/2026 nas páginas oficiais do BNDES e do BDMG. */
const BNDES = "https://www.bndes.gov.br/wps/portal/site/home/financiamento";
const FONTES = {
  programa: `${BNDES}/produto/programa-bndes-mais-inovacao`,
  investimento: `${BNDES}/produto/programa-bndes-mais-inovacao-investimento`,
  automatico: `${BNDES}/produto/bndes-mais-inovacao-investimento-automatico`,
  difusao: `${BNDES}/produto/programa-bndes-mais-inovacao-difusao-tecnologica`,
  funtec: `${BNDES}/produto/bndes-funtec`,
  quemPode: `${BNDES}/guia/quem-pode-ser-cliente`,
  comoSolicitar: `${BNDES}/guia/como-solicitar`,
  porte: `${BNDES}/guia/porte-de-empresa`,
  impulso: "https://impulso.bndes.gov.br/duvidas-frequentes",
  bdmg: "https://www.bdmg.mg.gov.br/inovacao/",
};

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é o BNDES Mais Inovação?",
    resposta:
      "É o programa de crédito do BNDES para investimentos e projetos de inovação e digitalização, com recursos do Fundo de Amparo ao Trabalhador (FAT) remunerados pela TR. Tem cinco subprogramas: Investimento em Inovação, Difusão Tecnológica, Investimento Automático, Apoio a Centros de PD&I e Aquisição de Bens Inovadores.",
  },
  {
    pergunta: "O que é o BNDES Mais Inovação Difusão Tecnológica?",
    resposta:
      "É a linha que financia a compra de máquinas e equipamentos credenciados no Finame, inclusive os da indústria 4.0, e serviços tecnológicos. É pedida a um banco credenciado ao BNDES, com teto de R$ 50 milhões por cliente a cada 12 meses (R$ 5 milhões para serviços tecnológicos), e os itens precisam estar no Credenciamento Finame (CFI).",
  },
  {
    pergunta: "O que é o BNDES Mais Inovação Investimento Automático?",
    resposta:
      "É a linha indireta, pedida a um banco credenciado, que financia investimentos em inovação como softwares, consultorias, serviços tecnológicos e treinamentos, até R$ 15 milhões por cliente a cada 12 meses.",
  },
  {
    pergunta: "Qual a taxa do BNDES Mais Inovação?",
    resposta:
      "Os recursos vêm do FAT e são remunerados pela TR. A taxa final depende da linha, do risco da operação e, nas operações indiretas, do banco credenciado que repassa o crédito. Peça a simulação ao banco ou consulte a página oficial de cada linha.",
  },
  {
    pergunta: "Qual o valor mínimo do BNDES Mais Inovação?",
    resposta:
      "Depende da linha. No Investimento em Inovação, a partir de R$ 20 milhões (R$ 10 milhões no Norte e no Nordeste), tanto direto quanto indireto não automático. Difusão Tecnológica e Investimento Automático, pedidas pelo banco, atendem valores menores, dentro dos tetos de R$ 50 milhões e R$ 15 milhões a cada 12 meses.",
  },
  {
    pergunta: "Como pedir o BNDES Mais Inovação?",
    resposta:
      "Na maioria dos casos, num banco ou cooperativa credenciados ao BNDES, que analisa o crédito e assume o risco. O BNDES Impulso permite enviar o pedido online a mais de um parceiro ao mesmo tempo. Operações diretas com o BNDES pedem habilitação prévia pelo Portal do Cliente e valores maiores, em geral a partir de R$ 20 milhões ou R$ 40 milhões, conforme a esteira de crédito.",
  },
  {
    pergunta: "Empresa no lucro presumido pode pedir o BNDES Mais Inovação?",
    resposta:
      "Pode. O BNDES classifica o porte pela receita operacional bruta e pede que a empresa esteja em dia com as obrigações fiscais, tributárias e sociais; as páginas do programa não restringem o regime tributário.",
  },
  {
    pergunta: "Qual o prazo do BNDES Mais Inovação em 2026?",
    resposta:
      "Pelo BNDES, os pedidos diretos com recursos remunerados pela TR precisam ser aprovados até 31 de dezembro de 2026, data de vigência da Lei 14.592/2023, e o banco informou demanda elevada já protocolada. As linhas indiretas seguem as condições de cada banco credenciado.",
  },
  {
    pergunta: "Qual a diferença entre BNDES Mais Inovação e FINEP?",
    resposta:
      "Os dois financiam inovação com crédito reembolsável e operam juntos o programa Mais Inovação Brasil. O BNDES é mais forte na compra de máquinas e na digitalização pelo banco credenciado; a FINEP tem o Finep Inovacred para receita abaixo de R$ 300 milhões e a subvenção econômica, que não é devolvida.",
  },
  {
    pergunta: "O BNDES tem recurso não reembolsável para empresas?",
    resposta:
      "O BNDES Funtec é não reembolsável, mas apoia projetos executados por instituições tecnológicas. A empresa participa como parceira do projeto, não como proponente.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [
    { nome: "Fomento à inovação", caminho: "/fomento-a-inovacao" },
    { nome: "BNDES Mais Inovação", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: "BNDES Mais Inovação: linhas, valores, quem pode pedir e como solicitar",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    about: [{ "@type": "GovernmentOrganization", name: "Banco Nacional de Desenvolvimento Econômico e Social (BNDES)", url: "https://www.bndes.gov.br" }],
    citation: Object.values(FONTES),
  },
});

const SUMARIO = [
  { id: "o-que-e", rotulo: "O que é" },
  { id: "linhas", rotulo: "As cinco linhas" },
  { id: "difusao", rotulo: "Difusão tecnológica e máquinas 4.0" },
  { id: "automatico", rotulo: "Investimento automático" },
  { id: "investimento", rotulo: "Investimento em inovação" },
  { id: "como-pedir", rotulo: "Como pedir" },
  { id: "porte", rotulo: "Porte no BNDES" },
  { id: "prazo", rotulo: "O prazo de 2026" },
  { id: "finep", rotulo: "BNDES ou FINEP?" },
  { id: "fontes", rotulo: "Fontes oficiais" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

const LINK_EXTERNO = { target: "_blank", rel: "noopener" } as const;

export default function PaginaBndesMaisInovacao() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Fomento à inovação", caminho: "/fomento-a-inovacao" }, { nome: "BNDES Mais Inovação" }]}
      rotulo="Fomento à inovação"
      titulo={
        <>
          BNDES Mais Inovação: <em className="ol-em">como funciona</em> e quem pode pedir
        </>
      }
      lead={
        <>
          O BNDES Mais Inovação é o programa de <strong>crédito do BNDES para inovação e digitalização</strong>, com recursos do FAT remunerados pela TR.
          Para a indústria, as linhas mais usadas são pedidas no banco credenciado: a <strong>Difusão Tecnológica</strong>, que financia máquinas e
          equipamentos 4.0 credenciados no Finame, até R$ 50 milhões a cada 12 meses, e o <strong>Investimento Automático</strong>, que financia software,
          consultoria e serviços tecnológicos, até R$ 15 milhões. Projetos de PD&amp;I a partir de R$ 20 milhões vão para o Investimento em Inovação. Não há
          filtro por regime tributário.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="/fomento-a-inovacao">
            Ver qual fomento serve <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#linhas">
            Ver as linhas
          </a>
        </>
      }
      meta="Atualizado em 18/11/2026 · Páginas oficiais do BNDES · Condições mudam: confirme na fonte e no banco"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          A dúvida mais comum sobre o BNDES é por onde entrar. Para a maioria das indústrias, a resposta é o banco com que a empresa já trabalha, desde que
          ele seja credenciado e opere a linha certa.
        </p>

        <h2 id="o-que-e">O que é o BNDES Mais Inovação</h2>
        <p>
          O{" "}
          <a href={FONTES.programa} {...LINK_EXTERNO}>
            BNDES Mais Inovação
          </a>{" "}
          apoia a implantação de investimentos e projetos voltados para inovação e digitalização, com recursos do Fundo de Amparo ao Trabalhador (FAT). É
          crédito: o dinheiro volta, com prazo e juros. O BNDES também opera com a FINEP o programa Mais Inovação Brasil, do governo federal, mas as linhas
          de cada instituição têm canais próprios.
        </p>

        <h2 id="linhas">As cinco linhas</h2>
        <Tabela
          cabecalho={["Linha", "Para quê", "Como se pede", "Valores"]}
          linhas={[
            ["Difusão Tecnológica", "Máquinas e equipamentos com tecnologia, inclusive 4.0, e serviços tecnológicos", "Banco credenciado", "Até R$ 50 mi a cada 12 meses (R$ 5 mi em serviços)"],
            ["Investimento Automático", "Software, consultoria, serviços tecnológicos e treinamento", "Banco credenciado", "Até R$ 15 mi por cliente a cada 12 meses"],
            ["Investimento em Inovação", "Planos de investimento e PD&I", "Direto ou por banco", "A partir de R$ 20 mi (R$ 10 mi no Norte e Nordeste)"],
            ["Apoio a Centros de PD&I", "Estrutura de pesquisa e desenvolvimento", "Conforme a linha", "Conforme a linha"],
            ["Aquisição de Bens Inovadores", "Compra de bens inovadores", "Direto no BNDES", "Conforme a linha"],
          ]}
        />

        <h2 id="difusao">Difusão Tecnológica: máquinas 4.0</h2>
        <p>
          A{" "}
          <a href={FONTES.difusao} {...LINK_EXTERNO}>
            Difusão Tecnológica
          </a>{" "}
          é a linha que aparece nas buscas como “máquinas 4.0”. Ela financia máquinas e equipamentos credenciados, inclusive os da indústria 4.0, e serviços
          tecnológicos, pedida em qualquer instituição financeira credenciada que opere a linha. Dois cuidados práticos:
        </p>
        <ul>
          <li>
            <strong>O item precisa estar no Credenciamento Finame (CFI).</strong> Antes de negociar com o fornecedor, confirme se a máquina tem código
            Finame.
          </li>
          <li>
            <strong>Há teto por cliente:</strong> R$ 50 milhões a cada 12 meses, e R$ 5 milhões quando o apoio é a serviços tecnológicos.
          </li>
        </ul>
        <p>
          Comprar a máquina é metade do caminho. O ganho aparece quando o dado dela chega ao planejamento, ao apontamento e ao ERP; veja como fazer a{" "}
          <a href="/integracao-erp-chao-de-fabrica">integração do chão de fábrica com o ERP</a>.
        </p>

        <h2 id="automatico">Investimento Automático: software e serviços</h2>
        <p>
          O{" "}
          <a href={FONTES.automatico} {...LINK_EXTERNO}>
            Investimento Automático
          </a>{" "}
          é indireto: a empresa apresenta o pedido ao banco credenciado. Ele financia, entre outros itens, softwares, consultorias, serviços tecnológicos e
          treinamentos, até R$ 15 milhões por cliente a cada 12 meses. É a linha do BNDES mais próxima de um projeto de digitalização da operação, como{" "}
          <a href="/desenvolvimento-de-software">software sob medida integrado ao ERP</a>.
        </p>

        <h2 id="investimento">Investimento em Inovação: PD&amp;I e planos maiores</h2>
        <p>
          O{" "}
          <a href={FONTES.investimento} {...LINK_EXTERNO}>
            Investimento em Inovação
          </a>{" "}
          atende pessoas jurídicas de direito privado sediadas no país e de direito público, exceto a União. O valor mínimo é de R$ 20 milhões (R$ 10
          milhões no Norte e no Nordeste), no direto e no indireto não automático. Financia até 100% dos itens financiáveis e, em PD&amp;I, tem prazo de até
          16 anos, com até 4 de carência.
        </p>
        <QuadroDeFatos
          titulo="E o recurso não reembolsável?"
          itens={[
            {
              termo: "BNDES Funtec",
              definicao: (
                <>
                  O{" "}
                  <a href={FONTES.funtec} {...LINK_EXTERNO}>
                    Funtec
                  </a>{" "}
                  é não reembolsável, mas apoia projetos executados por instituições tecnológicas. A empresa entra como parceira, não como proponente.
                </>
              ),
            },
            {
              termo: "Para a empresa",
              definicao: (
                <>
                  Quem precisa de recurso que não volta tem a <a href="/finep#subvencao">subvenção da FINEP</a> e a <a href="/embrapii">EMBRAPII</a>.
                </>
              ),
            },
          ]}
        />

        <h2 id="como-pedir">Como pedir</h2>
        <ol>
          <li>
            <strong>Escolha a linha</strong> pelo que vai ser financiado: máquina, software e serviços, ou um plano de PD&amp;I.
          </li>
          <li>
            <strong>Procure um banco credenciado</strong> que opere a linha. Pelo{" "}
            <a href={FONTES.comoSolicitar} {...LINK_EXTERNO}>
              guia do BNDES
            </a>
            , financiamentos abaixo de R$ 10 milhões são feitos pelos bancos credenciados, e linhas como Difusão Tecnológica e Investimento Automático
            são sempre indiretas. Cada banco pode aderir ou não a cada linha. O{" "}
            <a href={FONTES.impulso} {...LINK_EXTERNO}>
              BNDES Impulso
            </a>{" "}
            envia o pedido online a mais de um parceiro ao mesmo tempo.
          </li>
          <li>
            <strong>Em Minas Gerais,</strong> o{" "}
            <a href={FONTES.bdmg} {...LINK_EXTERNO}>
              BDMG
            </a>{" "}
            repassa linhas do Mais Inovação, como Finame 4.0 e Serviços 4.0.
          </li>
          <li>
            <strong>Operação direta</strong> pede habilitação prévia pelo Portal do Cliente e valor a partir de R$ 40 milhões, ou R$ 20 milhões conforme a
            esteira de crédito; alguns programas admitem R$ 10 milhões.
          </li>
          <li>
            <strong>Esteja em dia</strong> com as obrigações fiscais, tributárias e sociais: é o requisito publicado em{" "}
            <a href={FONTES.quemPode} {...LINK_EXTERNO}>
              quem pode ser cliente
            </a>
            . O regime tributário não aparece entre as condições.
          </li>
        </ol>

        <h2 id="porte">Como o BNDES mede o porte</h2>
        <p>
          Pela{" "}
          <a href={FONTES.porte} {...LINK_EXTERNO}>
            receita operacional bruta anual
          </a>
          . Em grupo econômico, conta a receita consolidada do grupo.
        </p>
        <Tabela
          cabecalho={["Porte", "Receita operacional bruta anual"]}
          linhas={[
            ["Micro", "Até R$ 360 mil"],
            ["Pequena", "De R$ 360 mil a R$ 4,8 milhões"],
            ["Média I", "De R$ 4,8 milhões a R$ 90 milhões"],
            ["Média II", "De R$ 90 milhões a R$ 300 milhões"],
            ["Grande", "Acima de R$ 300 milhões"],
          ]}
        />

        <h2 id="prazo">O prazo de 2026</h2>
        <p>
          A página do programa informa que os pedidos diretos com recursos remunerados pela TR precisam ser{" "}
          <strong>aprovados até 31 de dezembro de 2026</strong>, data de vigência da Lei 14.592/2023, e que já há demanda elevada protocolada. Para quem
          pensa em operação direta, o calendário pesa mais que o projeto perfeito.
        </p>
        <Nota>
          <strong>Orientação geral.</strong> Linhas, tetos, prazos e bancos credenciados mudam. Os valores desta página são das páginas oficiais na data
          indicada; confirme no BNDES e no banco antes de decidir.
        </Nota>

        <h2 id="finep">BNDES ou FINEP?</h2>
        <p>
          Os dois financiam inovação com crédito e operam juntos o Mais Inovação Brasil. Na prática, para uma indústria de médio porte: comprar máquinas
          4.0 ou financiar software e serviços tende a passar pelo BNDES, no banco; desenvolver produto ou processo com risco técnico tende a passar pelo{" "}
          <a href="/finep-inovacred">Finep Inovacred</a> ou pela <a href="/finep#subvencao">subvenção</a>. Muitas empresas combinam os dois no mesmo plano.
          A <a href="/fomento-a-inovacao">ferramenta de fomento</a> cruza porte, projeto e estado e mostra os caminhos prováveis.
        </p>

        <h2 id="fontes">Fontes oficiais</h2>
        <ul>
          <li>
            <a href={FONTES.programa} {...LINK_EXTERNO}>
              Programa BNDES Mais Inovação
            </a>{" "}
            e as páginas de{" "}
            <a href={FONTES.difusao} {...LINK_EXTERNO}>
              Difusão Tecnológica
            </a>
            ,{" "}
            <a href={FONTES.automatico} {...LINK_EXTERNO}>
              Investimento Automático
            </a>{" "}
            e{" "}
            <a href={FONTES.investimento} {...LINK_EXTERNO}>
              Investimento em Inovação
            </a>
            .
          </li>
          <li>
            Guias do BNDES:{" "}
            <a href={FONTES.comoSolicitar} {...LINK_EXTERNO}>
              como solicitar
            </a>
            ,{" "}
            <a href={FONTES.quemPode} {...LINK_EXTERNO}>
              quem pode ser cliente
            </a>{" "}
            e{" "}
            <a href={FONTES.porte} {...LINK_EXTERNO}>
              porte de empresa
            </a>
            .
          </li>
          <li>
            <a href={FONTES.funtec} {...LINK_EXTERNO}>
              BNDES Funtec
            </a>
            ,{" "}
            <a href={FONTES.impulso} {...LINK_EXTERNO}>
              BNDES Impulso
            </a>{" "}
            e{" "}
            <a href={FONTES.bdmg} {...LINK_EXTERNO}>
              linhas de inovação do BDMG
            </a>
            .
          </li>
        </ul>
      </Documento>

      <ChamadaDaOrigami frente="inovacao" pagina={CAMINHO} ferramenta={{ href: "/fomento-a-inovacao", rotulo: "Ver qual fomento serve para o projeto" }} />

      <Perguntas prefixo="bndes" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/fomento-a-inovacao", titulo: "Qual fomento serve para o projeto", texto: "Ferramenta gratuita que cruza porte, projeto e estado com FINEP, BNDES, EMBRAPII, Lei do Bem e as linhas de Minas." },
          { href: "/finep", titulo: "FINEP: como funciona", texto: "Crédito direto, Finep Inovacred e subvenção: quem pode pedir, taxas e passo a passo." },
          { href: "/integracao-erp-chao-de-fabrica", titulo: "Da máquina ao ERP", texto: "Como o dado da produção chega à gestão sem trocar o ERP, para a máquina nova render o que prometeu." },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            Financiar a máquina é a parte fácil. O ganho vem quando <em className="ol-em">o dado dela chega à gestão</em>.
          </>
        }
        lead="Em trinta minutos a gente olha o plano de modernização, indica a linha mais provável e mostra o que precisa estar pronto para a operação colher o resultado."
        whatsapp="Olá! Li a página sobre o BNDES Mais Inovação no site e quero conversar sobre um projeto."
      />
    </PaginaDeConteudo>
  );
}
