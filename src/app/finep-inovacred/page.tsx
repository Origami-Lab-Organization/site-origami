import type { Metadata } from "next";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/finep-inovacred";
const TITULO = "Finep Inovacred: o que é, taxa, regras e como pedir";
const DESCRICAO =
  "Finep Inovacred e Inovacred 4.0: taxas de 2026, valor, prazo, carência, quem pode pedir, agentes como BDMG, Sicoob e Sicredi, e o passo a passo do pedido.";

export const metadata: Metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

/* Fatos conferidos em 18/11/2026: Condições Operacionais 2026 da FINEP
   (atualizadas em 20/07/2026, Anexo 1), página de crédito operado por agentes,
   lista de agentes (04/11/2026) e lista de integradoras do Inovacred 4.0 (jan/2026). */
const FONTES = {
  agentes: "https://www.finep.gov.br/credito-operado-por-agentes",
  condicoes: "https://legacy.finep.gov.br/images/a-finep/Condicoes_Operacionais/CondicoesOperacionais.pdf",
  listaDeAgentes: "https://www.finep.gov.br/documents/d/guest/agentes_financeiros-5-pdf",
  integradoras: "https://www.finep.gov.br/documents/d/guest/finep_inovacred_4-0_integradoras",
  bdmg: "https://www.bdmg.mg.gov.br/inovacao/",
};

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é o Finep Inovacred?",
    resposta:
      "É o crédito da FINEP para inovação operado por agentes financeiros credenciados, como bancos de desenvolvimento, agências de fomento, bancos e cooperativas de crédito. O agente analisa, contrata, acompanha e assume integralmente o risco da operação. Atende empresas com receita operacional bruta de até R$ 300 milhões, com financiamentos de até R$ 30 milhões.",
  },
  {
    pergunta: "Qual a taxa do Finep Inovacred?",
    resposta:
      "Pelas Condições Operacionais 2026 da FINEP, a taxa nominal máxima do Inovacred, do Inovacred 4.0 e do Inovacred Telecom é TR + 6,068% ao ano para microempresas, empresas de pequeno porte e pequenas empresas, e TR + 6,605% ao ano para médias. No Inovacred B+P, o teto é TR + 5,560% ao ano; no Inovacred Centros de P&D, TR + 6,080% ao ano. São tetos: a taxa final é definida pelo agente financeiro.",
  },
  {
    pergunta: "Quem pode pedir o Finep Inovacred?",
    resposta:
      "Empresas brasileiras e outras pessoas jurídicas de direito privado com receita operacional bruta de até R$ 300 milhões no último ano. Empresas maiores só são atendidas em projetos no Norte, no Nordeste ou no Centro-Oeste. O regime tributário não é requisito: empresa no lucro presumido ou no Simples pode pedir, sujeita à análise de crédito do agente.",
  },
  {
    pergunta: "Qual o valor, o prazo e a carência do Inovacred?",
    resposta:
      "Até R$ 30 milhões por operação, com participação da FINEP de até 100% do projeto. Na maioria dos produtos, a carência é de até 24 meses e o prazo total de até 96 meses; no Inovacred Centros de P&D, o prazo total vai a até 120 meses.",
  },
  {
    pergunta: "O que é o Finep Inovacred 4.0?",
    resposta:
      "É a linha do Inovacred que financia a formulação e a implantação de soluções de digitalização com tecnologias habilitadoras da indústria 4.0 em linhas de produção. A solução precisa ser desenvolvida por uma integradora credenciada pela FINEP. As taxas são as mesmas do Inovacred, e as despesas podem ser reconhecidas até seis meses antes do registro do projeto no agente.",
  },
  {
    pergunta: "Onde pedir o Inovacred em Minas Gerais?",
    resposta:
      "O BDMG é o agente credenciado em Minas e repassa Inovacred, Inovacred 4.0, Inovacred Telecom e Aquisição Inovadora Telecom para empresas com receita entre R$ 4,8 milhões e R$ 300 milhões. O BNB atende alguns municípios mineiros, e agentes de atuação nacional, como Banco Sicoob, Sicredi, Cresol, Caixa, BTG, ABC e Daycoval, também constam da lista da FINEP.",
  },
  {
    pergunta: "Sicoob e Sicredi operam o Finep Inovacred?",
    resposta:
      "Sim. O Banco Cooperativo Sicoob e o Banco Cooperativo Sicredi estão na lista de agentes financeiros credenciados da FINEP, atualizada em 04/11/2026, com contatos por região. O pedido é feito à cooperativa, que aplica a própria análise de crédito.",
  },
  {
    pergunta: "O que é o Finep Inovacred B+P?",
    resposta:
      "É a linha do Inovacred para empresas apoiadas no programa Brasil Mais Produtivo (Decreto 11.783/2023), voltada a digitalização e transformação digital. Tem a menor taxa entre as linhas do Inovacred: até TR + 5,560% ao ano para todos os portes.",
  },
  {
    pergunta: "O que é o Inovacred Expresso?",
    resposta:
      "É o nome de uma modalidade simplificada que aparece em regulamentos anteriores do Inovacred, para empresas menores e valores baixos. Ela não está entre os produtos das Condições Operacionais 2026 nem na página atual de crédito por agentes da FINEP. Se um agente oferecer uma linha com esse nome, as condições valem as que ele informar.",
  },
  {
    pergunta: "Gastos feitos antes do pedido podem entrar no Inovacred?",
    resposta:
      "Em regra, não. No crédito descentralizado, as despesas passam a ser reconhecidas a partir do registro da documentação do projeto no agente financeiro. As exceções são o Inovacred 4.0 e a Aquisição Inovadora Telecom, que aceitam despesas de até seis meses antes desse registro.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [
    { nome: "Fomento à inovação", caminho: "/fomento-a-inovacao" },
    { nome: "FINEP", caminho: "/finep" },
    { nome: "Finep Inovacred", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: "Finep Inovacred: o que é, taxas de 2026, quem pode pedir, agentes e passo a passo",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    about: [{ "@type": "GovernmentOrganization", name: "Financiadora de Estudos e Projetos (FINEP)", url: "https://www.finep.gov.br" }],
    citation: Object.values(FONTES),
  },
});

const SUMARIO = [
  { id: "o-que-e", rotulo: "O que é o Inovacred" },
  { id: "condicoes", rotulo: "Taxas e condições 2026" },
  { id: "quem-pode", rotulo: "Quem pode pedir" },
  { id: "inovacred-4-0", rotulo: "Inovacred 4.0" },
  { id: "agentes", rotulo: "Onde pedir: os agentes" },
  { id: "como-pedir", rotulo: "Passo a passo" },
  { id: "despesas", rotulo: "O erro que custa dinheiro" },
  { id: "comparar", rotulo: "Inovacred, crédito direto ou BNDES?" },
  { id: "expresso", rotulo: "E o Expresso e o Conecta?" },
  { id: "fontes", rotulo: "Fontes oficiais" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

const LINK_EXTERNO = { target: "_blank", rel: "noopener" } as const;

export default function PaginaFinepInovacred() {
  return (
    <PaginaDeConteudo
      migalhas={[
        { nome: "Fomento à inovação", caminho: "/fomento-a-inovacao" },
        { nome: "FINEP", caminho: "/finep" },
        { nome: "Finep Inovacred" },
      ]}
      rotulo="Fomento à inovação"
      titulo={
        <>
          Finep Inovacred: <em className="ol-em">taxa, regras</em> e como pedir
        </>
      }
      lead={
        <>
          O Finep Inovacred é o <strong>crédito da FINEP para inovação pedido a um agente credenciado</strong>, como BDMG, Sicoob ou Sicredi, que
          analisa, contrata e assume o risco. Atende empresas com receita operacional bruta de até R$ 300 milhões e financia{" "}
          <strong>até R$ 30 milhões e até 100% do projeto</strong>, com carência de até 24 meses e prazo total de até 96 meses. Pelas Condições
          Operacionais 2026, a taxa máxima é de <strong>TR + 6,068% ao ano</strong> para micro e pequenas e <strong>TR + 6,605% ao ano</strong> para
          médias. O Inovacred 4.0 segue as mesmas condições para digitalizar a produção. Não há filtro por regime tributário.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="/fomento-a-inovacao">
            Ver qual fomento serve <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#condicoes">
            Ver as taxas de 2026
          </a>
        </>
      }
      meta="Atualizado em 18/11/2026 · Condições Operacionais 2026 da FINEP · Taxas são tetos e mudam: confirme com o agente"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          Para a maioria das indústrias de médio porte, o Inovacred é a porta de entrada da FINEP: o crédito direto só atende receita acima de R$ 90
          milhões e projetos a partir de R$ 30 milhões. A diferença prática é que, no Inovacred, quem diz sim ou não é o banco ou a cooperativa.
        </p>

        <h2 id="o-que-e">O que é o Finep Inovacred</h2>
        <p>
          É o{" "}
          <a href={FONTES.agentes} {...LINK_EXTERNO}>
            crédito descentralizado da FINEP
          </a>
          : os recursos são da FINEP, mas análise, contratação, acompanhamento, prestação de contas e cobrança ficam com agentes financeiros credenciados,
          que <strong>assumem integralmente o risco da operação</strong>. O objetivo, pelas Condições Operacionais, é atender preferencialmente atividades
          inovadoras de micro, pequenas e médias empresas em todos os estados. O Inovacred financia projetos de desenvolvimento de produtos e processos
          novos ou aprimorados; as outras linhas recortam um uso específico.
        </p>

        <h2 id="condicoes">Taxas e condições 2026</h2>
        <p>
          Todas as linhas financiam até R$ 30 milhões, com participação da FINEP de até 100%. As taxas são nominais máximas, do{" "}
          <a href={FONTES.condicoes} {...LINK_EXTERNO}>
            Anexo 1 das Condições Operacionais 2026
          </a>
          :
        </p>
        <Tabela
          cabecalho={["Linha", "Para quê", "Taxa máxima ao ano", "Carência", "Prazo total"]}
          linhas={[
            ["Finep Inovacred", "Produtos e processos novos ou aprimorados", "Micro a pequena: TR + 6,068%. Média: TR + 6,605%", "Até 24 meses", "Até 96 meses"],
            ["Finep Inovacred 4.0", "Digitalização de linhas de produção com tecnologias 4.0, por integradora credenciada", "Micro a pequena: TR + 6,068%. Média: TR + 6,605%", "Até 24 meses", "Até 96 meses"],
            ["Finep Inovacred Telecom", "Inovação no setor de telecomunicações (recursos do Funttel)", "Micro a pequena: TR + 6,068%. Média: TR + 6,605%", "Até 24 meses", "Até 96 meses"],
            ["Finep Inovacred B+P", "Empresas do programa Brasil Mais Produtivo, digitalização", "TR + 5,560%, todos os portes", "Até 24 meses", "Até 96 meses"],
            ["Finep Inovacred Centros de P&D", "Implantar ou ampliar centro de P&D na empresa", "TR + 6,080%, todos os portes", "Até 24 meses", "Até 120 meses"],
            ["Aquisição Inovadora Telecom", "Compra de tecnologia de telecom desenvolvida no Brasil", "TR + 7,083%, todos os portes", "Até 24 meses", "Até 120 meses"],
          ]}
        />
        <p>
          A TR é a Taxa Referencial, divulgada pelo Banco Central; o percentual somado a ela é o teto, não a taxa garantida. O agente define a taxa final,
          as garantias e o prazo dentro desses limites, conforme o risco da empresa. Para comparar, o crédito direto da FINEP parte de TR + 2,5% ao ano,
          mais spread de risco, mas exige porte e valores bem maiores (veja <a href="/finep#credito-direto">o crédito direto</a>).
        </p>
        <Nota>
          Há também a Aquisição Inovadora Move Agrícola, para produtores rurais e cooperativas, de caráter transitório (Medida Provisória 1.374/2026):
          até TR + 7,120% ao ano, sem carência e prazo de até 60 meses, só para máquinas da lista credenciada.
        </Nota>

        <h2 id="quem-pode">Quem pode pedir</h2>
        <QuadroDeFatos
          titulo="Requisitos do Inovacred"
          itens={[
            {
              termo: "Porte",
              definicao:
                "Empresas brasileiras e outras pessoas jurídicas de direito privado com receita operacional bruta de até R$ 300 milhões no último ano (portes I a IV da FINEP). Empresas maiores só em projetos no Norte, Nordeste e Centro-Oeste.",
            },
            {
              termo: "Regime tributário",
              definicao: "Não é requisito. Lucro real, presumido ou Simples: pesa a análise de crédito do agente.",
            },
            {
              termo: "Projeto",
              definicao: "Desenvolvido por empresa instalada no Brasil. Em associação com empresa de controle estrangeiro, é preciso comprovar a transferência e a absorção da tecnologia.",
            },
            {
              termo: "Crédito",
              definicao: "Cada agente aplica a sua política de crédito e de garantias e pode operar só parte das linhas.",
            },
          ]}
        />
        <p>As faixas de porte da FINEP:</p>
        <Tabela
          cabecalho={["Porte", "Receita operacional bruta no último ano", "Taxa máxima do Inovacred"]}
          linhas={[
            ["I: Microempresa e EPP", "Até R$ 4,8 milhões", "TR + 6,068%"],
            ["II: Pequena", "De R$ 4,8 a R$ 16 milhões", "TR + 6,068%"],
            ["III: Média I", "De R$ 16 a R$ 90 milhões", "TR + 6,605%"],
            ["IV: Média II", "De R$ 90 a R$ 300 milhões", "TR + 6,605%"],
          ]}
        />

        <h2 id="inovacred-4-0">Finep Inovacred 4.0: digitalizar a produção</h2>
        <p>
          O Inovacred 4.0 financia a formulação e a implantação de soluções de digitalização que usem, em linhas de produção, tecnologias habilitadoras
          da indústria 4.0. Três regras o diferenciam:
        </p>
        <ul>
          <li>
            <strong>A solução vem de uma integradora credenciada pela FINEP.</strong> A{" "}
            <a href={FONTES.integradoras} {...LINK_EXTERNO}>
              lista de integradoras
            </a>{" "}
            de janeiro de 2026 tinha 153 empresas, com contatos comerciais.
          </li>
          <li>
            <strong>Despesas de até seis meses antes contam.</strong> É uma das duas linhas em que o gasto pode ser reconhecido antes do registro do projeto
            no agente.
          </li>
          <li>
            <strong>Mesmas taxas e prazos do Inovacred</strong>: até R$ 30 milhões, carência de até 24 meses e prazo total de até 96 meses.
          </li>
        </ul>
        <p>
          A solução 4.0 resolve a linha. O que costuma ficar de fora é fazer o dado dela chegar ao planejamento, ao apontamento e ao ERP, e isso pode ser
          um projeto à parte. Veja a <a href="/integracao-erp-chao-de-fabrica">integração do chão de fábrica com o ERP</a>.
        </p>

        <h2 id="agentes">Onde pedir: os agentes credenciados</h2>
        <p>
          O pedido vai para um agente da{" "}
          <a href={FONTES.listaDeAgentes} {...LINK_EXTERNO}>
            lista da FINEP
          </a>{" "}
          (atualizada em 04/11/2026), que traz contatos por região:
        </p>
        <Tabela
          cabecalho={["Tipo de agente", "Exemplos na lista", "Observação"]}
          linhas={[
            [
              "Banco de desenvolvimento de Minas",
              <a key="bdmg" href={FONTES.bdmg} {...LINK_EXTERNO}>
                BDMG
              </a>,
              "Inovacred, 4.0, Telecom e Aquisição Inovadora Telecom; receita de R$ 4,8 mi a R$ 300 mi",
            ],
            ["Cooperativas de crédito", "Banco Sicoob, Sicredi, Cresol", "Contatos por região, inclusive Sudeste"],
            ["Bancos", "Caixa, BTG Pactual, ABC Brasil, Daycoval", "Atuação nacional"],
            ["Bancos regionais", "BNB", "No Sudeste, alguns municípios de Minas e do Espírito Santo"],
            ["Agências de fomento estaduais", "Desenvolve SP, AgeRio, Fomento Paraná, BADESC, BADESUL, Goiás Fomento", "Em geral, para empresas do próprio estado"],
          ]}
        />
        <p>
          Como cada agente tem política de crédito, garantias e prazos próprios, e nem todos operam todas as linhas, vale consultar mais de um antes de
          fechar. Empresa mineira com receita abaixo de R$ 4,8 milhões, que fica abaixo da faixa do BDMG, tem nas cooperativas e nos bancos nacionais da
          lista o caminho.
        </p>

        <h2 id="como-pedir">Passo a passo do pedido</h2>
        <ol>
          <li>
            <strong>Enquadre porte e linha:</strong> receita do último ano e o que o projeto financia (desenvolvimento, digitalização 4.0, centro de P&amp;D).
          </li>
          <li>
            <strong>Escolha o agente</strong> e confirme se ele opera a linha, que garantias pede e quais documentos exige.
          </li>
          <li>
            <strong>Registre a documentação do projeto no agente</strong> antes de gastar: é a partir desse registro que as despesas passam a contar.
          </li>
          <li>
            <strong>Análise do agente:</strong> crédito da empresa e enquadramento do projeto nas regras da FINEP.
          </li>
          <li>
            <strong>Contrato, garantias e liberação</strong> do recurso pelo agente, conforme o cronograma.
          </li>
          <li>
            <strong>Acompanhamento e prestação de contas</strong> ao agente, que também faz a cobrança.
          </li>
        </ol>

        <h2 id="despesas">O erro que custa dinheiro: gastar antes de registrar</h2>
        <p>
          Pelas Condições Operacionais, no crédito descentralizado o prazo de reconhecimento de despesas{" "}
          <strong>começa no registro da documentação do projeto no agente</strong>. Empresa que compra, contrata ou começa a executar antes disso pode
          ficar com essa parte fora do financiamento. As exceções são o Inovacred 4.0 e a Aquisição Inovadora Telecom, que aceitam despesas de até seis
          meses antes do registro. No crédito direto da FINEP, a regra é outra: até seis meses antes do protocolo.
        </p>

        <h2 id="comparar">Inovacred, crédito direto ou BNDES?</h2>
        <Tabela
          cabecalho={["", "Finep Inovacred", "Crédito direto da FINEP", "BNDES Mais Inovação"]}
          linhas={[
            ["Quem analisa", "O agente credenciado", "A FINEP", "O banco credenciado ou o BNDES"],
            ["Porte", "Receita até R$ 300 mi", "Receita acima de R$ 90 mi e PL acima de R$ 86 mi", "Qualquer porte, conforme a linha"],
            ["Valor", "Até R$ 30 mi", "A partir de R$ 30 mi", "Conforme a linha; as indiretas atendem valores menores"],
            ["Mais indicado para", "Desenvolvimento e digitalização em PMEs", "Planos grandes de inovação", "Máquinas 4.0, software e serviços"],
          ]}
        />
        <p>
          Os caminhos não se excluem. Veja o <a href="/bndes-mais-inovacao">BNDES Mais Inovação</a> e, para cruzar porte, projeto e estado com todos os
          instrumentos, a <a href="/fomento-a-inovacao">ferramenta de fomento</a>.
        </p>

        <h2 id="expresso">E o Inovacred Expresso e o Conecta?</h2>
        <p>
          Os dois nomes aparecem nas buscas e em sites de agentes (o BDMG lista ambos). Nenhum deles está entre os produtos das Condições Operacionais 2026
          nem na página atual de crédito por agentes da FINEP. O Expresso aparece em regulamentos anteriores como modalidade simplificada para empresas
          menores e valores baixos. Se o agente oferecer uma linha com esses nomes, as condições valem as que ele informar por escrito.
        </p>
        <Nota>
          <strong>Orientação geral.</strong> Taxas, linhas e agentes mudam ao longo do ano. Os números desta página são das fontes oficiais na data
          indicada; confirme com o agente antes de contratar.
        </Nota>

        <h2 id="fontes">Fontes oficiais</h2>
        <ul>
          <li>
            <a href={FONTES.condicoes} {...LINK_EXTERNO}>
              Condições Operacionais 2026 da FINEP
            </a>{" "}
            (produtos descentralizados, Anexo 1 com taxas e prazos, reconhecimento de despesas).
          </li>
          <li>
            <a href={FONTES.agentes} {...LINK_EXTERNO}>
              Crédito operado por agentes
            </a>{" "}
            e{" "}
            <a href={FONTES.listaDeAgentes} {...LINK_EXTERNO}>
              lista de agentes financeiros credenciados
            </a>
            .
          </li>
          <li>
            <a href={FONTES.integradoras} {...LINK_EXTERNO}>
              Integradoras credenciadas do Inovacred 4.0
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

      <Perguntas prefixo="inovacred" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/finep", titulo: "FINEP: como funciona", texto: "As três portas da FINEP para empresas: crédito direto, Inovacred e subvenção." },
          { href: "/fomento-a-inovacao", titulo: "Qual fomento serve para o projeto", texto: "Ferramenta gratuita que compara Inovacred, BNDES, EMBRAPII, Lei do Bem e as linhas de Minas." },
          { href: "/bndes-mais-inovacao", titulo: "BNDES Mais Inovação", texto: "Máquinas 4.0, software e serviços pelo banco credenciado, e PD&I a partir de R$ 20 milhões." },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            O agente olha o crédito. <em className="ol-em">O projeto é que precisa convencer</em>.
          </>
        }
        lead="Em trinta minutos a gente olha o projeto, indica a linha e o agente mais prováveis e diz o que registrar antes de gastar o primeiro real."
        whatsapp="Olá! Li a página sobre o Finep Inovacred no site e quero conversar sobre um projeto."
      />
    </PaginaDeConteudo>
  );
}
