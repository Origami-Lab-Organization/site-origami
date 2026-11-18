import type { Metadata } from "next";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/embrapii";
const TITULO = "EMBRAPII: o que é e como funciona para empresas";
const DESCRICAO =
  "O que é a EMBRAPII, como funciona o cofinanciamento não reembolsável com uma Unidade credenciada, quem pode usar, a parceria com o Sebrae e as Unidades em Minas.";

export const metadata: Metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

/* Fatos conferidos em 18/11/2026: site da EMBRAPII, Manual de Operação das
   Unidades (v6.0) e Orientações Operacionais 04/2024, 03/2025 e CG MPE (2026). */
const DOCS = "https://storage.googleapis.com/uploads-site-embrapii";
const FONTES = {
  sobre: "https://embrapii.org.br/sobre-a-embrapii/",
  perguntas: "https://embrapii.org.br/perguntas-frequentes/",
  bndes: "https://embrapii.org.br/bndes/",
  unidades: "https://embrapii.org.br/nossas-unidades/",
  manual: `${DOCS}/2025/01/Manual_EMBRAPII_UE_versao-6.0-de-20.10.20.pdf`,
  cnae: `${DOCS}/2024/12/Orientacao-Operacional-04-2024_CNAE-ENERGIA-E-GAS.pdf`,
  sebrae: `${DOCS}/2025/07/Orientacao-Operacional-03-2025-Sebrae-.pdf`,
  cgMpe: `${DOCS}/2026/10/e63d609d-orientacao-operacional-cg-mpe-final-22.10.2026-2.pdf`,
  inatel: "https://embrapii.org.br/unidades/sistemas-digitais-e-radiofrequencia-inatel/",
  ifmg: "https://embrapii.org.br/unidades/mobilidade-e-sistemas-inteligentes-if-mg/",
  ufu: "https://embrapii.org.br/unidades/tecnologia-metal-mecanica-femec-ufu/",
  leiDoBem: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11196.htm",
};

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é a EMBRAPII?",
    resposta:
      "A Empresa Brasileira de Pesquisa e Inovação Industrial (EMBRAPII) é uma organização social qualificada pelo governo federal, criada em 2013, que divide com as empresas o custo de projetos de pesquisa e desenvolvimento. Ela aporta recursos não reembolsáveis, e o projeto é executado por uma Unidade EMBRAPII, um centro de pesquisa credenciado.",
  },
  {
    pergunta: "A EMBRAPII é empresa pública?",
    resposta:
      "Não. Apesar do nome, a EMBRAPII é uma organização social qualificada pelo poder público federal. Ela mantém contrato de gestão com o Ministério da Ciência, Tecnologia e Inovação e com outros três ministérios: Educação, Saúde e Desenvolvimento, Indústria, Comércio e Serviços.",
  },
  {
    pergunta: "O que é uma Unidade EMBRAPII?",
    resposta:
      "É uma instituição de ciência e tecnologia, pública ou privada, credenciada pela EMBRAPII numa área de competência, como metal-mecânica, sistemas digitais ou mobilidade e sistemas inteligentes. É a Unidade que negocia o projeto com a empresa, executa a pesquisa e define o percentual de aporte da EMBRAPII em cada projeto. A empresa escolhe a Unidade livremente.",
  },
  {
    pergunta: "Como funciona a EMBRAPII?",
    resposta:
      "A empresa leva um desafio tecnológico a uma Unidade EMBRAPII. As duas montam o projeto, e o custo é dividido entre a empresa, que paga a sua parte em dinheiro, a EMBRAPII, que aporta recursos não reembolsáveis, e a Unidade. Não há edital: o projeto pode começar quando empresa e Unidade chegarem a um acordo.",
  },
  {
    pergunta: "Quanto a EMBRAPII paga do projeto?",
    resposta:
      "Na regra geral, até um terço do valor da carteira de projetos da Unidade, e nunca menos de 10% de cada projeto; o percentual de cada projeto é definido pela Unidade. Em parcerias específicas o teto sobe: na parceria com o BNDES, até 50% para empresas com receita abaixo de R$ 90 milhões, e na parceria com o Sebrae, até 50% do projeto.",
  },
  {
    pergunta: "A EMBRAPII tem edital?",
    resposta:
      "Não para a empresa. A EMBRAPII credencia as Unidades, e a empresa procura diretamente a Unidade da área do seu desafio. Por isso o projeto não precisa esperar uma chamada abrir.",
  },
  {
    pergunta: "Quem pode usar a EMBRAPII?",
    resposta:
      "Empresas de qualquer porte, desde que ao menos uma das contratantes do projeto tenha produção no Brasil e seja do setor industrial (CNAE 05 a 33 e, desde 2024, 35) ou de desenvolvimento de software (62.01 e 62.03), ou se comprometa a industrializar o resultado no país. O regime tributário não aparece entre os requisitos. Prestação de serviço não pode ser o objetivo do projeto.",
  },
  {
    pergunta: "O que é a parceria EMBRAPII e Sebrae?",
    resposta:
      "É a modalidade para microempreendedores individuais, micro e pequenas empresas e startups. A EMBRAPII aporta até 50% do projeto, e o Sebrae pode pagar até 70% da parte da pequena empresa, limitado a R$ 150 mil por projeto com uma empresa, R$ 200 mil quando entra uma média ou grande empresa da cadeia e R$ 300 mil em grupos de empresas. É preciso carta de habilitação do Sebrae do estado.",
  },
  {
    pergunta: "Tem Unidade EMBRAPII em Minas Gerais?",
    resposta:
      "Tem. Entre elas, a do Inatel, em Santa Rita do Sapucaí (sistemas digitais e radiofrequência), a do IF-MG, em Formiga (mobilidade e sistemas inteligentes), e a FEMEC-UFU, em Uberlândia (tecnologias metal-mecânica). A lista completa, com filtro por estado, está no site da EMBRAPII.",
  },
  {
    pergunta: "Dá para usar EMBRAPII junto com a Lei do Bem?",
    resposta:
      "O que a EMBRAPII aporta é recurso não reembolsável e não entra no cálculo da Lei do Bem (Lei 11.196/2005, art. 17, §4º). A parte paga pela empresa à instituição de pesquisa pode ser dispêndio de P&D nas condições da lei, para quem está no lucro real. Confirme a alocação com a contabilidade antes da apuração.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [
    { nome: "Fomento à inovação", caminho: "/fomento-a-inovacao" },
    { nome: "EMBRAPII", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: "EMBRAPII: o que é, como funciona, quem pode usar e Unidades em Minas Gerais",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    about: [{ "@type": "Organization", name: "Empresa Brasileira de Pesquisa e Inovação Industrial (EMBRAPII)", url: "https://embrapii.org.br" }],
    citation: Object.values(FONTES),
  },
});

const SUMARIO = [
  { id: "o-que-e", rotulo: "O que é a EMBRAPII" },
  { id: "como-funciona", rotulo: "Como funciona" },
  { id: "unidade", rotulo: "O que é uma Unidade" },
  { id: "quem-pode", rotulo: "Quem pode usar" },
  { id: "projeto", rotulo: "Que projeto entra" },
  { id: "sebrae", rotulo: "EMBRAPII e Sebrae" },
  { id: "minas-gerais", rotulo: "Unidades em Minas Gerais" },
  { id: "como-comecar", rotulo: "Como começar" },
  { id: "comparar", rotulo: "EMBRAPII ou subvenção?" },
  { id: "fontes", rotulo: "Fontes oficiais" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

const LINK_EXTERNO = { target: "_blank", rel: "noopener" } as const;

export default function PaginaEmbrapii() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Fomento à inovação", caminho: "/fomento-a-inovacao" }, { nome: "EMBRAPII" }]}
      rotulo="Fomento à inovação"
      titulo={
        <>
          EMBRAPII: o que é e <em className="ol-em">como funciona</em> para empresas
        </>
      }
      lead={
        <>
          A EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial) é uma organização social qualificada pelo governo federal, criada em 2013,
          que <strong>divide com a empresa o custo de projetos de pesquisa e desenvolvimento</strong>. O projeto é executado por uma Unidade EMBRAPII, um
          centro de pesquisa credenciado; a EMBRAPII aporta recursos não reembolsáveis, em geral até um terço (até metade em algumas parcerias), e a empresa
          paga a sua parte em dinheiro. <strong>Não há edital:</strong> a empresa procura a Unidade e apresenta o desafio. Ao menos uma empresa do projeto
          precisa ser industrial ou de software.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="/fomento-a-inovacao">
            Ver qual fomento serve <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#minas-gerais">
            Unidades em Minas
          </a>
        </>
      }
      meta="Atualizado em 18/11/2026 · Site, manual e orientações operacionais da EMBRAPII · Percentuais variam por Unidade e parceria"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          A EMBRAPII resolve um problema específico: a indústria tem um desafio técnico, a universidade tem gente e laboratório, e as duas raramente
          conseguem fechar um projeto no ritmo da empresa. O modelo junta as duas pontas e divide a conta.
        </p>

        <h2 id="o-que-e">O que é a EMBRAPII</h2>
        <p>
          Apesar do nome, a EMBRAPII não é empresa pública. É uma{" "}
          <a href={FONTES.sobre} {...LINK_EXTERNO}>
            organização social qualificada pelo poder público federal
          </a>
          , criada em 2013, com contrato de gestão com o Ministério da Ciência, Tecnologia e Inovação e com os ministérios da Educação, da Saúde e do
          Desenvolvimento, Indústria, Comércio e Serviços. Ela não executa pesquisa: credencia centros de pesquisa, as Unidades EMBRAPII, e compartilha com
          as empresas o custo dos projetos, com recursos não reembolsáveis.
        </p>

        <h2 id="como-funciona">Como funciona</h2>
        <p>Três partes, cada uma com um papel:</p>
        <QuadroDeFatos
          titulo="Quem faz o quê"
          itens={[
            { termo: "A empresa", definicao: "Traz o desafio tecnológico e paga a sua parte do projeto em dinheiro." },
            { termo: "A Unidade EMBRAPII", definicao: "Centro de pesquisa credenciado que negocia o projeto, executa a pesquisa e entrega os resultados." },
            { termo: "A EMBRAPII", definicao: "Aporta recursos não reembolsáveis em parte do projeto, pela Unidade." },
          ]}
        />
        <p>Como o custo se divide, pelo Manual de Operação e pelas parcerias vigentes:</p>
        <Tabela
          cabecalho={["Situação", "Parte da EMBRAPII", "Parte da empresa"]}
          linhas={[
            ["Regra geral, na carteira da Unidade", "Até 1/3 do total da carteira", "Pelo menos 1/3 do total, sempre em dinheiro"],
            ["Em cada projeto", "Nunca menos de 10%; a Unidade define o percentual", "Nunca menos de 10%"],
            ["Parceria com o BNDES, receita acima de R$ 90 mi", "Até 1/3 do projeto", "O restante, com a Unidade"],
            ["Parceria com o BNDES, receita abaixo de R$ 90 mi", "Até 50% do projeto", "O restante, com a Unidade"],
            ["Parceria com o Sebrae (MEI, micro, pequena, startup)", "Até 50% do projeto", "Com apoio do Sebrae, ver abaixo"],
          ]}
        />

        <h2 id="unidade">O que é uma Unidade EMBRAPII</h2>
        <p>
          É uma instituição de ciência e tecnologia, pública ou privada, credenciada numa área de competência: metal-mecânica, sistemas digitais,
          mobilidade e sistemas inteligentes, entre outras. A Unidade é a porta de entrada: é com ela que a empresa negocia escopo, cronograma, entregas e percentuais. A{" "}
          <a href={FONTES.perguntas} {...LINK_EXTERNO}>
            escolha da Unidade fica a critério da empresa
          </a>
          , que pode procurar qualquer uma do país, não só a do seu estado.
        </p>

        <h2 id="quem-pode">Quem pode usar</h2>
        <ul>
          <li>
            <strong>Empresas de qualquer porte.</strong> O porte muda o percentual possível nas parcerias, não o acesso.
          </li>
          <li>
            <strong>Ao menos uma empresa industrial ou de software no projeto.</strong> O{" "}
            <a href={FONTES.manual} {...LINK_EXTERNO}>
              Manual de Operação
            </a>{" "}
            exige que pelo menos uma das contratantes tenha produção no Brasil e seja do setor industrial (CNAE 05 a 33) ou de desenvolvimento de software
            (62.01 e 62.03), ou beneficiária da Lei de Informática. Em 2024, a{" "}
            <a href={FONTES.cnae} {...LINK_EXTERNO}>
              divisão 35
            </a>{" "}
            (eletricidade e gás) entrou na lista. Quem está fora pode participar com uma empresa industrial ou se comprometendo a industrializar o
            resultado no país.
          </li>
          <li>
            <strong>Regime tributário não é requisito.</strong> Lucro real, presumido ou Simples: as regras publicadas não tratam do assunto.
          </li>
        </ul>

        <h2 id="projeto">Que projeto entra</h2>
        <p>
          Projetos de pesquisa, desenvolvimento e inovação na <strong>etapa pré-competitiva</strong>, a de maior risco tecnológico, com entregas entre os
          níveis 3 e 6 de maturidade tecnológica (TRL): da prova de conceito à demonstração em ambiente relevante.
        </p>
        <Tabela
          cabecalho={["Entra", "Não entra"]}
          linhas={[
            ["Desenvolver produto ou processo novo, com incerteza técnica", "Prestação de serviço como objetivo do projeto"],
            ["Protótipo, prova de conceito, piloto em ambiente relevante", "Compra de máquina ou equipamento"],
            ["Software com desenvolvimento de tecnologia nova", "Implantação de sistema pronto ou ajuste de rotina"],
          ]}
        />

        <h2 id="sebrae">EMBRAPII e Sebrae: o caminho das pequenas</h2>
        <p>
          Pela{" "}
          <a href={FONTES.sebrae} {...LINK_EXTERNO}>
            orientação operacional da parceria
          </a>
          , para MEI, microempresa, empresa de pequeno porte e startup:
        </p>
        <ul>
          <li>
            A EMBRAPII aporta <strong>até 50% de cada projeto</strong>.
          </li>
          <li>
            O Sebrae pode pagar <strong>até 70% da parte da pequena empresa</strong>, limitado a R$ 150 mil no projeto com uma empresa, R$ 200 mil quando
            uma média ou grande empresa da cadeia entra como âncora (com pelo menos 15% do projeto) e R$ 300 mil em grupos de empresas.
          </li>
          <li>
            A pequena empresa precisa de <strong>carta de habilitação</strong> emitida pelo Sebrae do seu estado, e o recurso do Sebrae é revertido só para
            ela.
          </li>
          <li>
            Em outubro de 2026, a EMBRAPII publicou uma{" "}
            <a href={FONTES.cgMpe} {...LINK_EXTERNO}>
              nova modalidade para micro e pequenas
            </a>
            , com a mesma estrutura de tetos.
          </li>
        </ul>

        <h2 id="minas-gerais">Unidades EMBRAPII em Minas Gerais</h2>
        <p>Algumas das Unidades mineiras credenciadas, com a área de competência:</p>
        <Tabela
          cabecalho={["Unidade", "Cidade", "Área"]}
          linhas={[
            [
              <a key="inatel" href={FONTES.inatel} {...LINK_EXTERNO}>
                Inatel
              </a>,
              "Santa Rita do Sapucaí",
              "Sistemas digitais e radiofrequência",
            ],
            [
              <a key="ifmg" href={FONTES.ifmg} {...LINK_EXTERNO}>
                IF-MG
              </a>,
              "Formiga",
              "Mobilidade e sistemas inteligentes",
            ],
            [
              <a key="ufu" href={FONTES.ufu} {...LINK_EXTERNO}>
                FEMEC-UFU
              </a>,
              "Uberlândia",
              "Tecnologias metal-mecânica",
            ],
          ]}
        />
        <p>
          A{" "}
          <a href={FONTES.unidades} {...LINK_EXTERNO}>
            lista completa de Unidades
          </a>{" "}
          tem filtro por estado e por área. Como a escolha é livre, vale procurar a Unidade pela competência que o desafio pede, e não pela distância.
        </p>

        <h2 id="como-comecar">Como começar</h2>
        <ol>
          <li>
            <strong>Escreva o desafio em uma página:</strong> o problema técnico, por que as soluções conhecidas não resolvem e o que seria um resultado.
          </li>
          <li>
            <strong>Encontre a Unidade</strong> pela área de competência, na lista da EMBRAPII.
          </li>
          <li>
            <strong>Negocie com a Unidade</strong> escopo, entregas, cronograma e percentuais. É ela quem propõe o aporte da EMBRAPII.
          </li>
          <li>
            <strong>Feche o contrato</strong> e deposite a parte da empresa conforme o cronograma; a Unidade executa e entrega por marcos.
          </li>
          <li>
            <strong>Planeje a implantação desde o início.</strong> O projeto termina num protótipo ou piloto (até TRL 6): levar o resultado à operação é
            outro projeto, e costuma ser onde o retorno aparece.
          </li>
        </ol>

        <h2 id="comparar">EMBRAPII ou subvenção?</h2>
        <Tabela
          cabecalho={["", "EMBRAPII", "Subvenção da FINEP", "Lei do Bem"]}
          linhas={[
            ["Natureza", "Cofinanciamento não reembolsável", "Não reembolsável", "Incentivo fiscal"],
            ["Quem executa", "A Unidade, com a empresa", "A empresa", "A empresa"],
            ["Acesso", "Sem edital, direto com a Unidade", "Chamada pública ou programa", "Declaratório, sem aprovação prévia"],
            ["Regime tributário", "Qualquer", "Qualquer", "Só lucro real"],
          ]}
        />
        <p>
          Os caminhos não se excluem. O que a EMBRAPII aporta não entra no cálculo da Lei do Bem, que não computa recursos não reembolsáveis (
          <a href={FONTES.leiDoBem} {...LINK_EXTERNO}>
            Lei 11.196/2005, art. 17, §4º
          </a>
          ); a parte que a empresa paga à instituição de pesquisa pode ser dispêndio de P&amp;D nas condições da lei, para quem está no lucro real. Veja
          também a <a href="/finep#subvencao">subvenção da FINEP</a> e a <a href="/fomento-a-inovacao">ferramenta de fomento</a>, que compara todos os
          instrumentos para o seu caso.
        </p>
        <Nota>
          <strong>Orientação geral.</strong> Percentuais, setores aceitos e modalidades vêm do manual e das orientações operacionais da EMBRAPII e podem
          mudar. Cada Unidade aplica as regras ao seu projeto; confirme com ela antes de fechar o escopo.
        </Nota>

        <h2 id="fontes">Fontes oficiais</h2>
        <ul>
          <li>
            <a href={FONTES.sobre} {...LINK_EXTERNO}>
              Sobre a EMBRAPII
            </a>
            ,{" "}
            <a href={FONTES.perguntas} {...LINK_EXTERNO}>
              perguntas frequentes
            </a>{" "}
            e{" "}
            <a href={FONTES.bndes} {...LINK_EXTERNO}>
              parceria com o BNDES
            </a>
            .
          </li>
          <li>
            <a href={FONTES.manual} {...LINK_EXTERNO}>
              Manual de Operação das Unidades EMBRAPII (v6.0)
            </a>{" "}
            e{" "}
            <a href={FONTES.cnae} {...LINK_EXTERNO}>
              Orientação Operacional 04/2024
            </a>{" "}
            (CNAE de energia e gás).
          </li>
          <li>
            <a href={FONTES.sebrae} {...LINK_EXTERNO}>
              Orientação Operacional 03/2025
            </a>{" "}
            (parceria com o Sebrae) e{" "}
            <a href={FONTES.cgMpe} {...LINK_EXTERNO}>
              modalidade para micro e pequenas de 2026
            </a>
            .
          </li>
          <li>
            <a href={FONTES.unidades} {...LINK_EXTERNO}>
              Lista de Unidades EMBRAPII
            </a>
            .
          </li>
        </ul>
      </Documento>

      <ChamadaDaOrigami frente="inovacao" pagina={CAMINHO} ferramenta={{ href: "/fomento-a-inovacao", rotulo: "Ver qual fomento serve para o projeto" }} />

      <Perguntas prefixo="embrapii" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/fomento-a-inovacao", titulo: "Qual fomento serve para o projeto", texto: "Ferramenta gratuita que compara EMBRAPII, FINEP, BNDES, Lei do Bem e as linhas de Minas para o seu caso." },
          { href: "/finep", titulo: "FINEP: como funciona", texto: "Crédito direto, Finep Inovacred e subvenção: quem pode pedir, taxas e passo a passo." },
          { href: "/lei-do-bem", titulo: "Lei do Bem: quem tem direito", texto: "Requisitos, o que conta como P&D e como o incentivo convive com outros instrumentos." },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            O protótipo é o fim do projeto de pesquisa. <em className="ol-em">O resultado aparece na operação</em>.
          </>
        }
        lead="Em trinta minutos a gente olha o desafio técnico, indica se a EMBRAPII é o caminho e o que é preciso para levar o resultado da pesquisa para a fábrica."
        whatsapp="Olá! Li a página sobre a EMBRAPII no site e quero conversar sobre um projeto de P&D."
      />
    </PaginaDeConteudo>
  );
}
