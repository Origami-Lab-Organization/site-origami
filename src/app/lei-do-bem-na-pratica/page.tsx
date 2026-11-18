import { PaginaDeConteudo } from "@/components/conteudo/PaginaDeConteudo";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { grafoDaPagina, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

/* Lei do Bem na prática: uso no ano, FORMP&D, documentação e glosa.
   Cada número, prazo e requisito tem fonte oficial (seção "Fontes oficiais").
   Conferido em 17/11/2026. */

const CAMINHO = "/lei-do-bem-na-pratica";
const TITULO = "Lei do Bem na prática: FORMP&D e glosa";
const DESCRICAO =
  "Como usar a Lei do Bem no ano: o que documentar, como informar o MCTI pelo FORMP&D, o prazo de envio e por que projetos deixam de ser reconhecidos.";
const ATUALIZADA_EM = "2026-11-17";

const FONTES = {
  lei: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11196.htm",
  decreto: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/decreto/d5798.htm",
  mcti: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem",
  faq: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/paginas/perguntas-frequentes",
  aviso2025:
    "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/paginas/formulario-eletronico-formp-d/aberto-ate-31-de-agosto-de-2026-formulario-para-recebimento-das-informacoes-das-empresas-beneficiarias-da-lei-do-bem-referente-ao-ano-base-2025",
  guia: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/arquivo/pdf/GuiaPraticodaLeidoBem2020MCTI.pdf",
  materiais: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/paginas/materiais-e-orientacoes-da-lei-do-bem",
};

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Qual é o prazo para enviar o FORMP&D?",
    resposta:
      "Pela orientação do MCTI, o FORMP&D fica aberto até 31 de agosto de cada ano, com as informações do ano-base anterior. O Ministério tem prorrogado esse prazo em alguns exercícios: para o ano-base 2025, o envio foi aceito até 30 de setembro de 2026 (Portaria SETEC/MCTI nº 10.307/2026). Confirme sempre no portal da Lei do Bem o prazo do seu exercício.",
  },
  {
    pergunta: "O que é o FORMP&D?",
    resposta:
      "É o formulário eletrônico do Ministério da Ciência, Tecnologia e Inovação em que a empresa beneficiária informa, a cada ano, os projetos de pesquisa e desenvolvimento e os dispêndios sobre os quais usou a Lei do Bem no ano anterior. Fica no sistema formpd.mcti.gov.br, e o primeiro acesso da empresa é feito pelo representante legal, que pode depois cadastrar outros usuários.",
  },
  {
    pergunta: "O MCTI precisa aprovar o projeto antes de a empresa usar o benefício?",
    resposta:
      "Não. Segundo o MCTI, a fruição da Lei do Bem dispensa pedido e aprovação prévia dos projetos: a empresa aplica a exclusão na apuração e informa o Ministério depois, pelo FORMP&D. A análise técnica acontece só depois do uso. Por isso o risco não é ter um pedido negado: é ter de recolher o imposto que deixou de pagar, se o uso for considerado indevido.",
  },
  {
    pergunta: "O que é glosa na Lei do Bem?",
    resposta:
      "É o nome que o mercado dá ao não reconhecimento, total ou parcial, de um projeto ou de um dispêndio. O MCTI emite parecer técnico sobre os projetos informados, a empresa pode pedir reconsideração e então sai o parecer final; o Ministério remete as informações à Receita Federal, a quem cabe definir se o benefício era devido. O uso indevido implica recolher os tributos não pagos, com juros e multa (Lei 11.196/2005, art. 24).",
  },
  {
    pergunta: "Empresa com prejuízo fiscal pode usar a Lei do Bem?",
    resposta:
      "Não naquele ano. A exclusão fica limitada ao valor do lucro real e da base de cálculo da CSLL antes dela, e o excesso não pode ser aproveitado em período posterior (Lei 11.196/2005, art. 19, § 5º). Em ano sem resultado fiscal positivo, não há o que excluir.",
  },
  {
    pergunta: "Como lançar a Lei do Bem na ECF?",
    resposta:
      "A escrituração da exclusão é tema da contabilidade e das instruções da Receita Federal para cada exercício, e não detalhamos o lançamento aqui. O que a lei exige do lado da gestão é que os dispêndios de P&D sejam controlados em contas contábeis específicas (Lei 11.196/2005, art. 22). Sem esse controle, a apuração fica sem lastro.",
  },
  {
    pergunta: "Projeto de P&D que não deu certo pode entrar?",
    resposta:
      "Pode. O que caracteriza pesquisa e desenvolvimento é o trabalho para superar uma barreira tecnológica, não o sucesso no fim: o próprio Guia Prático da Lei do Bem pergunta se a barreira foi superada ou se o projeto segue em desenvolvimento. Um projeto que testou um caminho, mediu e não chegou lá demonstra a incerteza técnica que a lei incentiva, desde que o percurso esteja registrado.",
  },
  {
    pergunta: "Contratar uma empresa de desenvolvimento de software garante o enquadramento?",
    resposta:
      "Não. O que se avalia é a natureza do trabalho, não quem o executou nem quanto custou. O MCTI deixa claro que alterações corriqueiras ou rotineiras, que não envolvem risco, não são elegíveis. Desenvolvimento com tecnologia conhecida é execução; pode se enquadrar a parte do trabalho em que havia incerteza técnica real, desde que separada e documentada.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: "Lei do Bem na prática: FORMP&D, documentação e por que projetos são glosados",
  descricao: DESCRICAO,
  atualizadaEm: ATUALIZADA_EM,
  migalhas: [
    { nome: "Lei do Bem", caminho: "/lei-do-bem" },
    { nome: "Lei do Bem na prática", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: "Lei do Bem na prática: FORMP&D, documentação e por que projetos são glosados",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: ATUALIZADA_EM,
    dateModified: ATUALIZADA_EM,
    author: { "@id": "https://www.origamilab.com.br/#org" },
    publisher: { "@id": "https://www.origamilab.com.br/#org" },
    about: ["Lei do Bem", "Lei 11.196/2005", "FORMP&D", "Incentivo fiscal à inovação tecnológica"],
  },
});

export const metadata = metadataDaPagina({
  titulo: TITULO,
  descricao: DESCRICAO,
  caminho: CAMINHO,
  tituloSocial: "Lei do Bem na prática: FORMP&D, documentação e por que projetos são glosados",
});

function Fonte({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

export default function PaginaLeiDoBemNaPratica() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Lei do Bem", caminho: "/lei-do-bem" }, { nome: "Na prática" }]}
      titulo="Lei do Bem na prática: FORMP&D, documentação e por que projetos são glosados"
      lead={
        <>
          Usar a Lei do Bem tem duas metades. Na primeira, a empresa aplica a exclusão dos dispêndios de P&D na apuração do IRPJ e da CSLL,{" "}
          <strong>sem pedir aprovação prévia</strong> ao Ministério da Ciência, Tecnologia e Inovação (MCTI). Na segunda, no ano seguinte, informa o
          que fez pelo FORMP&D, e só então os projetos são analisados. Se um projeto não for reconhecido, o risco não é um pedido negado: é ter de
          recolher o imposto que deixou de pagar, com juros e multa. O que decide a análise é o registro técnico feito durante o projeto, não depois.
        </>
      }
      meta="Atualizado em 17/11/2026 · Orientação geral, não substitui a análise da sua contabilidade · Origami Lab, Formiga (MG)"
      dados={DADOS}
    >
      <Documento
        sumario={[
          { id: "duas-metades", rotulo: "As duas metades do processo" },
          { id: "formpd", rotulo: "O FORMP&D e o prazo" },
          { id: "numeros", rotulo: "O que a lei permite" },
          { id: "analise", rotulo: "O que o MCTI analisa" },
          { id: "documentar", rotulo: "O que documentar" },
          { id: "glosa", rotulo: "Por que projetos são glosados" },
          { id: "calendario", rotulo: "O calendário que funciona" },
          { id: "origami", rotulo: "Onde a Origami entra" },
          { id: "fontes", rotulo: "Fontes oficiais" },
          { id: "faq", rotulo: "Perguntas frequentes" },
        ]}
      >
        <p className="ol-prose__lead">
          A Lei do Bem não é um pedido que se faz e se aprova. É um benefício que se usa e depois se demonstra. Essa inversão explica quase tudo o que dá
          errado com ela.
        </p>

        <h2 id="duas-metades">As duas metades do processo</h2>
        <p>Entender a ordem dos fatos resolve a maior parte das dúvidas sobre prazo e risco:</p>
        <ol>
          <li>
            <strong>Durante o ano, a empresa executa e registra.</strong> Os projetos acontecem, as horas são trabalhadas, as notas são emitidas. É o
            único momento em que a documentação técnica pode ser feita com fidelidade.
          </li>
          <li>
            <strong>Na apuração, a empresa aplica.</strong> A exclusão entra no cálculo do lucro real e da base da CSLL. Segundo o MCTI, a fruição{" "}
            <Fonte href={FONTES.faq}>dispensa pedido e aprovação prévia</Fonte> dos projetos.
          </li>
          <li>
            <strong>No ano seguinte, a empresa informa.</strong> As informações sobre os projetos vão ao MCTI em meio eletrônico, pelo FORMP&D (
            <Fonte href={FONTES.decreto}>Decreto 5.798/2006, art. 14</Fonte>).
          </li>
          <li>
            <strong>Depois, o Ministério analisa.</strong> O MCTI emite parecer técnico, a empresa pode pedir reconsideração e então sai o parecer final.
            As informações seguem para a Receita Federal, a quem cabe definir se o benefício era devido.
          </li>
        </ol>
        <p>
          A consequência precisa ser dita com todas as letras: quando o Ministério analisa, o benefício já foi usado. O uso indevido implica a perda dos
          incentivos ainda não usados e o recolhimento dos tributos não pagos, com juros e multa (<Fonte href={FONTES.lei}>Lei 11.196/2005, art. 24</Fonte>
          ). A decisão de usar a Lei do Bem é, na prática, uma decisão sobre a qualidade da prova que a empresa consegue produzir.
        </p>
        <Nota>
          <strong>Orientação geral, não parecer fiscal.</strong> Requisitos, percentuais e prazos vêm da Lei 11.196/2005, do Decreto 5.798/2006 e de
          atos do MCTI e da Receita Federal, e podem mudar entre exercícios. Antes de aplicar o benefício, confirme tudo com a sua contabilidade e na
          fonte oficial vigente.
        </Nota>

        <h2 id="formpd">O FORMP&D: o que é, quem preenche e o prazo</h2>
        <p>
          O FORMP&D é o formulário eletrônico em que a empresa beneficiária informa ao MCTI, a cada ano, os projetos de P&D e os dispêndios sobre os
          quais usou a Lei do Bem no ano-base anterior. Fica no sistema formpd.mcti.gov.br, e o{" "}
          <Fonte href={FONTES.aviso2025}>primeiro acesso é do representante legal</Fonte> da empresa, que depois pode cadastrar outros usuários.
        </p>
        <p>
          <strong>Prazo.</strong> A <Fonte href={FONTES.faq}>orientação do MCTI</Fonte> é que o formulário fica aberto até 31 de agosto de cada ano. Em
          alguns exercícios o prazo foi prorrogado: para o ano-base 2025, o envio foi aceito até 30 de setembro de 2026, pela Portaria SETEC/MCTI nº
          10.307/2026 (<Fonte href={FONTES.aviso2025}>aviso oficial</Fonte>). Confira o prazo do seu exercício no{" "}
          <Fonte href={FONTES.mcti}>portal da Lei do Bem</Fonte> antes de planejar o fechamento.
        </p>

        <h2 id="numeros">O que a lei permite, em números</h2>
        <QuadroDeFatos
          titulo="Exclusão adicional dos dispêndios de P&D"
          itens={[
            { termo: "Base", definicao: "Até 60% da soma dos dispêndios de P&D do período (Decreto 5.798/2006, art. 8º)." },
            {
              termo: "Mais pesquisadores",
              definicao: "Até 70% se a empresa aumentar em até 5% o número de pesquisadores contratados; até 80% se o aumento passar de 5%.",
            },
            { termo: "Patente", definicao: "Até mais 20% dos dispêndios vinculados a projeto com patente concedida ou cultivar registrado." },
            {
              termo: "Limite",
              definicao:
                "A exclusão não passa do lucro real e da base da CSLL antes dela; o excesso não é aproveitado depois (Lei 11.196/2005, art. 19, § 5º).",
            },
            {
              termo: "Quem pode",
              definicao: "Pessoa jurídica no lucro real e com regularidade fiscal (MCTI; Lei 11.196/2005, art. 23).",
            },
          ]}
        />
        <p>
          Quem tem direito e o que conta como P&D está detalhado em <a href="/lei-do-bem">Lei do Bem: quem tem direito</a>. Para estimar o valor no
          seu caso, use o <a href="/simulador-lei-do-bem">simulador da Lei do Bem</a>.
        </p>

        <h2 id="analise">O que o MCTI analisa em cada projeto</h2>
        <p>
          A análise é técnica, não contábil. Ela não pergunta se o gasto existiu; pergunta se aquilo era pesquisa e desenvolvimento de inovação
          tecnológica. O <Fonte href={FONTES.guia}>Guia Prático da Lei do Bem</Fonte>, do MCTI, pede que cada projeto deixe claros dois elementos:
        </p>
        <ol>
          <li>
            <strong>O elemento tecnologicamente novo ou inovador.</strong> O que se pretendia desenvolver de novo, com quais funcionalidades e
            aplicação.
          </li>
          <li>
            <strong>A barreira ou desafio tecnológico superável.</strong> Qual limitação técnica concreta existia, por que o conhecimento disponível não
            a resolvia e se ela foi superada ou o projeto segue em andamento.
          </li>
        </ol>
        <p>
          Na prática, dois outros pontos sustentam esses dois: o <strong>método</strong> (o que foi testado, em que ordem, o que foi medido e
          descartado) e o <strong>resultado</strong>, inclusive quando o projeto não chegou aonde queria. As definições legais de pesquisa básica
          dirigida, pesquisa aplicada e desenvolvimento experimental estão no art. 2º do{" "}
          <Fonte href={FONTES.decreto}>Decreto 5.798/2006</Fonte>, e o MCTI indica o Manual de Frascati, da OCDE, como referência entre os{" "}
          <Fonte href={FONTES.materiais}>materiais oficiais</Fonte>.
        </p>
        <p>
          É por isso que descrições comerciais não passam. &ldquo;Modernizamos o sistema de gestão da produção para aumentar a produtividade&rdquo;
          descreve um benefício de negócio e não traz uma única informação técnica.
        </p>

        <h2 id="documentar">O que documentar enquanto o projeto acontece</h2>
        <p>
          O FORMP&D é a ponta visível. Embaixo dele precisa existir um conjunto de evidências que a empresa consiga apresentar se for questionada, pelo
          Ministério ou pela Receita. A lei já exige que os dispêndios sejam controlados em contas contábeis específicas (
          <Fonte href={FONTES.lei}>Lei 11.196/2005, art. 22</Fonte>). Do lado técnico, o que costuma fazer diferença:
        </p>
        <ol>
          <li>
            <strong>Hipótese inicial e critério de sucesso,</strong> escritos antes, não depois. Uma página basta.
          </li>
          <li>
            <strong>Registro de tentativas:</strong> o que foi testado, com que parâmetros e por que foi abandonado. O caminho que não deu certo é a
            prova mais forte de que havia incerteza.
          </li>
          <li>
            <strong>Horas por pessoa e por projeto,</strong> não por centro de custo nem por mês fechado. Sem isso, o dispêndio com pessoal fica sem
            lastro.
          </li>
          <li>
            <strong>Vínculo entre nota fiscal e projeto:</strong> material, serviço de terceiro e equipamento rastreáveis até o projeto.
          </li>
          <li>
            <strong>Qualificação da equipe:</strong> quem trabalhou, com que formação e em que função.
          </li>
          <li>
            <strong>Resultados medidos,</strong> antes e depois, com número, inclusive quando o número foi ruim.
          </li>
        </ol>
        <p>
          Nenhum desses itens se reconstitui com honestidade em dezembro. Documentação de P&D feita no fim do exercício sobra só como memória, e memória
          não sustenta análise.
        </p>

        <h2 id="glosa">Por que projetos são glosados</h2>
        <p>
          &ldquo;Glosa&rdquo; é o nome que o mercado dá ao não reconhecimento de um projeto ou de um dispêndio. Na prática, os motivos se repetem, e
          todos são evitáveis:
        </p>
        <ol>
          <li>
            <strong>Descrição comercial no lugar da técnica.</strong> O texto fala de ganho de produtividade e não diz qual barreira tecnológica foi
            enfrentada.
          </li>
          <li>
            <strong>Rotina tratada como P&D.</strong> O MCTI é explícito: alterações corriqueiras ou rotineiras, que não envolvem risco,{" "}
            <Fonte href={FONTES.faq}>não são elegíveis</Fonte>. Configurar, parametrizar e implantar tecnologia de mercado não é desenvolvimento,
            mesmo quando o esforço é grande.
          </li>
          <li>
            <strong>Nenhuma incerteza.</strong> O projeto foi executado do jeito que se sabia que funcionaria. Trabalhoso, sim; incerto, não.
          </li>
          <li>
            <strong>Horas sem rastro.</strong> O dispêndio com pessoal costuma ser o maior e é o mais frágil quando o apontamento não separa projeto de
            rotina.
          </li>
          <li>
            <strong>Gasto sem vínculo com o projeto.</strong> Rateio genérico de custo indireto não sustenta alocação.
          </li>
          <li>
            <strong>Escopo inflado.</strong> Juntar num projeto tudo o que a área técnica fez no ano contamina a parte boa com a que não se enquadra.
          </li>
        </ol>
        <p>
          O último é contraintuitivo: declarar menos, com solidez, costuma proteger mais do que declarar tudo. Um projeto bem documentado que se
          sustenta vale mais que cinco que convidam a uma revisão ampla.
        </p>

        <h2 id="calendario">O calendário que funciona</h2>
        <Tabela
          cabecalho={["Quando", "O que fazer", "Quem"]}
          linhas={[
            ["Início do ano", "Escolher os projetos candidatos e abrir o registro de cada um", "Técnica e diretoria"],
            ["Ao longo do ano", "Apontar horas por projeto e vincular notas fiscais, como rotina", "Técnica, RH e financeiro"],
            ["Fechamento", "Consolidar dispêndios e escrever os relatórios técnicos com quem executou", "Técnica e contabilidade"],
            ["Apuração", "Aplicar a exclusão, respeitando o limite do lucro real e da base da CSLL", "Contabilidade"],
            ["Prazo do MCTI", "Enviar o FORMP&D e arquivar o dossiê completo", "Representante legal e equipe"],
          ]}
        />
        <p>
          A Lei do Bem atravessa três áreas que normalmente não conversam: a contabilidade aplica a exclusão, a área técnica sabe o que teve incerteza
          e o RH tem as horas e a qualificação da equipe. Quando ninguém coordena as três, o benefício se perde no vazio entre elas.
        </p>

        <h2 id="origami">Onde a Origami Lab entra</h2>
        <p>
          A Origami Lab atua na metade técnica, que é onde o risco mora: identificar na operação o que teve incerteza técnica de verdade, estruturar o
          registro enquanto o projeto corre, escrever a descrição dos projetos na linguagem da análise e organizar o dossiê. A apuração e a
          escrituração seguem com a sua contabilidade, e nós conversamos com ela.
        </p>
        <p>
          Esse trabalho faz parte do serviço de <a href="/acesso-a-capital">acesso a capital</a>, feito em parceria com a PIN: do diagnóstico de
          elegibilidade à prestação de contas, com cobrança apenas se o capital for liberado. Se a sua empresa não está no lucro real, o caminho é
          outro: veja <a href="/financiamento-de-inovacao">financiamento de inovação</a>.
        </p>

        <h2 id="fontes">Fontes oficiais</h2>
        <ol>
          <li>
            <Fonte href={FONTES.lei}>Lei 11.196/2005</Fonte>, capítulo III (arts. 17 a 26), no Planalto.
          </li>
          <li>
            <Fonte href={FONTES.decreto}>Decreto 5.798/2006</Fonte>, que regulamenta os incentivos, no Planalto.
          </li>
          <li>
            <Fonte href={FONTES.mcti}>Portal da Lei do Bem</Fonte> e <Fonte href={FONTES.faq}>perguntas frequentes</Fonte> do MCTI.
          </li>
          <li>
            <Fonte href={FONTES.aviso2025}>Aviso do FORMP&D do ano-base 2025</Fonte> (Portaria SETEC/MCTI nº 10.307/2026).
          </li>
          <li>
            <Fonte href={FONTES.guia}>Guia Prático da Lei do Bem</Fonte> e <Fonte href={FONTES.materiais}>materiais e orientações</Fonte> do MCTI.
          </li>
        </ol>
      </Documento>

      <Perguntas prefixo="lei-do-bem-na-pratica" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/lei-do-bem", titulo: "Lei do Bem: quem tem direito", texto: "Os requisitos para usar o incentivo, o que conta como P&D e como o benefício aparece na apuração." },
          { href: "/simulador-lei-do-bem", titulo: "Simulador da Lei do Bem", texto: "Estime quanto a sua empresa deixaria de pagar de IRPJ e CSLL com os dispêndios de P&D do ano." },
          { href: "/financiamento-de-inovacao", titulo: "Financiamento de inovação", texto: "FINEP, subvenção econômica e FAPEMIG: o caminho para quem não está no lucro real." },
          { href: "/acesso-a-capital", titulo: "Acesso a capital", texto: "O serviço completo de captação, em parceria com a PIN, do diagnóstico à prestação de contas." },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            Documentação de P&D se faz durante, <em className="ol-em">não em dezembro</em>.
          </>
        }
        lead="Se a sua empresa está desenvolvendo algo agora, é agora que o registro custa pouco. Trinta minutos para olhar os projetos em curso e definir o que começar a anotar."
        whatsapp="Olá! Li a página sobre a Lei do Bem na prática e quero conversar sobre os projetos da minha empresa."
      />
    </PaginaDeConteudo>
  );
}
