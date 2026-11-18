import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/lei-do-bem-desenvolvimento-de-software";
const TITULO = "Lei do Bem no desenvolvimento de software";
const DESCRICAO = "Quando software pode ser P&D para a Lei do Bem: incerteza tecnológica, exemplos, evidências e separação entre desenvolvimento experimental e rotina.";
const FONTES = {
  lei: "https://www2.camara.leg.br/legin/fed/lei/2005/lei-11196-21-novembro-2005-539221-normaatualizada-pl.html",
  decreto: "https://www2.camara.leg.br/legin/fed/decret/2006/decreto-5798-7-junho-2006-543117-normaatualizada-pe.html",
  guia: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/paginas/materiais-e-orientacoes-da-lei-do-bem/novo-guia-da-lei-do-bem.pdf",
  desenvolvimento: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/lei-do-bem/arquivo/pdf/8705_LEI_DO_BEM___O_que_e_inovacao_para_a_Lei_do_Bem_convertido__ANPEI__MCTIC.pdf",
};
const EXTERNO = { target: "_blank", rel: "noopener" } as const;

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Desenvolvimento de software dá direito à Lei do Bem?",
    resposta: "Pode ser analisado como P&D quando envolve desenvolvimento experimental e incerteza tecnológica comprovada. Ser software sob medida, usar IA ou ter custo elevado não garante elegibilidade. A empresa e os dispêndios também precisam atender aos requisitos fiscais.",
  },
  {
    pergunta: "Implantar um ERP ou migrar para a nuvem conta como P&D?",
    resposta: "A implantação, a parametrização e a migração feitas por métodos conhecidos não demonstram P&D por si sós. Se o projeto contém uma investigação tecnológica específica, essa atividade precisa ser identificada e analisada separadamente da rotina de implantação.",
  },
  {
    pergunta: "O software precisa ser uma novidade mundial?",
    resposta: "A análise não se resume a encontrar um produto inexistente no mundo. O ponto é demonstrar o avanço tecnológico buscado, a incerteza enfrentada e o desenvolvimento realizado. Ser apenas novo para a equipe, sem desafio tecnológico, também não basta.",
  },
  {
    pergunta: "Um projeto de software que não funcionou pode ser analisado?",
    resposta: "A investigação experimental pode terminar sem alcançar o resultado pretendido. Registre o que foi testado, o resultado e o conhecimento obtido; a falta de sucesso comercial não resolve nem elimina, sozinha, a análise técnica e fiscal do projeto.",
  },
  {
    pergunta: "O simulador confirma se meu projeto de software é elegível?",
    resposta: "Não. O simulador estima a economia a partir dos requisitos e valores informados. Ele não avalia o mérito tecnológico, os contratos, a classificação contábil nem a documentação dos dispêndios. A análise exige participação da equipe técnica e da contabilidade.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [{ nome: "Guias", caminho: "/guias" }, { nome: TITULO, caminho: CAMINHO }],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: TITULO,
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    image: ORGANIZACAO.image,
    about: ["Desenvolvimento experimental de software", "Lei do Bem", "Documentação de P&D"],
    citation: Object.values(FONTES),
  },
});

const SUMARIO = [
  { id: "criterio", rotulo: "O critério técnico" },
  { id: "exemplos", rotulo: "Exemplos para discutir" },
  { id: "empresa", rotulo: "Requisitos da empresa" },
  { id: "evidencias", rotulo: "Evidências do software" },
  { id: "dispendios", rotulo: "Separação dos dispêndios" },
  { id: "rotina", rotulo: "Uma rotina de documentação" },
  { id: "avaliacao", rotulo: "O que levar à avaliação" },
  { id: "fontes", rotulo: "Fontes oficiais" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaLeiDoBemDesenvolvimentoDeSoftware() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: TITULO }]}
      rotulo="Lei do Bem e software"
      titulo={<>Quando <em className="ol-em">desenvolvimento de software</em> pode entrar na Lei do Bem?</>}
      lead={
        <>
          Um projeto de software pode conter pesquisa e desenvolvimento, mas <strong>escrever código não torna todo o projeto elegível</strong>.
          A análise precisa separar a investigação de uma barreira tecnológica da implantação, manutenção e operação feitas com métodos conhecidos.
          Antes de estimar imposto a menos, identifique o que precisava ser descoberto e quais registros demonstram esse trabalho.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="/simulador-lei-do-bem">Simular uma estimativa <Seta /></a>{" "}
          <a className="ol-btn ol-btn--ghost" href={FORMULARIO}>Converse sobre o projeto</a>
        </>
      }
      meta="Origami Lab · Atualizado em 18/11/2026 · Orientação geral; a análise fiscal depende do caso"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="criterio">O critério é o desenvolvimento experimental</h2>
        <p>
          O <a href={FONTES.decreto} {...EXTERNO}>Decreto 5.798/2006, art. 2º</a> inclui o trabalho sistemático para demonstrar a viabilidade de
          produtos, processos, sistemas ou serviços novos ou significativamente aperfeiçoados. Em software, descreva o obstáculo técnico e o método
          investigado: não apenas a lista de telas que será entregue.
        </p>
        <QuadroDeFatos
          titulo="Três coisas diferentes"
          itens={[
            { termo: "Problema de negócio", definicao: "O resultado que a empresa precisa melhorar, como prazo, qualidade ou capacidade." },
            { termo: "Barreira tecnológica", definicao: "O que ainda não se sabe resolver tecnicamente com segurança e precisa ser investigado." },
            { termo: "Experimento", definicao: "Uma hipótese com método de teste, resultado observado e conclusão registrada." },
          ]}
        />
        <p>
          A distinção entre desenvolvimento experimental e engenharia de rotina é explicada no <a href={FONTES.desenvolvimento} {...EXTERNO}>material do MCTI
          sobre inovação e Lei do Bem</a>. Pressão de prazo, dificuldade de contratação ou desconhecimento de uma tecnologia pela equipe são problemas reais,
          mas não demonstram, isoladamente, uma incerteza tecnológica. O mesmo vale para o rótulo “inteligência artificial”.
        </p>

        <h2 id="exemplos">Exemplos para discutir com a equipe técnica</h2>
        <Nota>Os exemplos abaixo são hipotéticos. Eles ajudam a formular perguntas e não representam projetos aprovados, cases da Origami ou parecer de enquadramento.</Nota>
        <Tabela
          cabecalho={["Situação ilustrativa", "O que investigar", "O que separar"]}
          linhas={[
            ["Programar a produção com muitas restrições simultâneas.", "Existe um método conhecido que atende ao problema? Que hipótese seria testada se ele não atender?", "A pesquisa de solução, os testes e a construção comum de cadastros e telas."],
            ["Interpretar imagens de peças em condições variáveis.", "Qual limitação impede atingir a qualidade necessária? Como comparar os resultados dos testes?", "A investigação do método e a instalação rotineira da infraestrutura."],
            ["Conectar dois sistemas por APIs documentadas.", "Há uma barreira tecnológica ou basta implementar o contrato de integração disponível?", "A integração usual e qualquer investigação específica que de fato exista."],
            ["Atualizar um sistema antigo ou trocar o ERP.", "O trabalho usa caminhos dominados ou exige descobrir uma solução técnica?", "Migração, configuração, treinamento e eventuais atividades experimentais identificadas."],
          ]}
        />
        <p>
          Um projeto pode combinar naturezas de trabalho diferentes. O <a href={FONTES.guia} {...EXTERNO}>guia do MCTI</a> alerta para a inclusão de
          implantação e customização básica como P&amp;D. A complexidade ou o tamanho da contratação não substituem a descrição do desenvolvimento tecnológico.
        </p>

        <h2 id="empresa">O mérito técnico não substitui os requisitos fiscais</h2>
        <p>
          Para a exclusão adicional, precisam ser avaliados o regime de Lucro Real, o lucro tributável disponível, a regularidade fiscal e os dispêndios do período.
          A <a href={FONTES.lei} {...EXTERNO}>Lei 11.196/2005, arts. 19 e 23</a> estabelece essas condições; confira o quadro completo em
          {" "}<a href="/lei-do-bem">quem pode usar a Lei do Bem</a>.
        </p>
        <p>
          O regime aplicável a quem já utiliza benefícios de informática e automação precisa de atenção específica, inclusive ao art. 26.
          Se a empresa busca recursos para executar o projeto, compare também <a href="/financiamento-de-inovacao">crédito e subvenção para inovação</a>:
          reduzir a base do imposto e receber financiamento atendem a necessidades diferentes.
        </p>

        <h2 id="evidencias">O que o repositório do software precisa contar</h2>
        <p>Como prática de organização do projeto, mantenha uma ligação verificável entre a pergunta técnica, a execução e o resultado:</p>
        <ul>
          <li><strong>Ponto de partida:</strong> descrição da limitação, soluções já avaliadas e motivo de não atenderem.</li>
          <li><strong>Hipótese e teste:</strong> critério de comparação definido antes de olhar o resultado.</li>
          <li><strong>Artefatos:</strong> versões de código, protótipos, registros dos testes e decisões sobre alternativas descartadas.</li>
          <li><strong>Conclusão:</strong> o que foi aprendido, o que não funcionou e qual decisão o resultado permitiu tomar.</li>
        </ul>
        <p>
          Um histórico com muitas alterações de código mostra atividade; ele não explica sozinho a razão da pesquisa. Acrescente uma descrição curta
          do raciocínio técnico e referências aos artefatos. Use identificadores estáveis para que uma decisão possa ser localizada meses depois.
        </p>

        <h2 id="dispendios">Não trate o contrato inteiro como dispêndio de P&amp;D</h2>
        <p>
          O <a href={FONTES.lei} {...EXTERNO}>art. 22 da Lei 11.196/2005</a> exige controle contábil em contas específicas.
          A classificação fiscal de pessoal, serviços e demais gastos precisa ser conferida pela contabilidade. Uma nota com a descrição
          “desenvolvimento de sistema” não demonstra, por si, quais atividades e valores atendem às regras.
        </p>
        <p>
          Na organização do trabalho, associe cada registro ao projeto, atividade, período, responsável e documento de suporte.
          Separe pesquisa, desenvolvimento comum, implantação e suporte. Se um profissional atua em mais de uma frente, use uma forma consistente
          de registrar sua participação; não atribua todo o custo mensal a um único experimento por conveniência.
        </p>

        <h2 id="rotina">Uma rotina que evita reconstruir o ano de memória</h2>
        <ol>
          <li><strong>Na abertura:</strong> escreva o problema técnico, as hipóteses e os testes planejados; combine responsáveis técnicos e contábeis.</li>
          <li><strong>Durante a execução:</strong> registre teste e resultado quando acontecerem, inclusive caminhos abandonados.</li>
          <li><strong>No fechamento mensal:</strong> confira os registros de atividade e os gastos com a contabilidade; corrija lacunas enquanto há contexto.</li>
          <li><strong>No encerramento do período:</strong> consolide a evolução técnica e concilie os valores antes de preparar a prestação de informações.</li>
        </ol>
        <p>
          Essa é uma sugestão de organização, não um formulário fiscal obrigatório. O passo a passo da apuração e da documentação está no guia
          {" "}<a href="/lei-do-bem-na-pratica">Lei do Bem na prática</a>. Confira o procedimento e o prazo vigentes do FormP&amp;D no MCTI para o exercício correspondente.
        </p>

        <h2 id="avaliacao">O que levar à avaliação antes de contar com o incentivo</h2>
        <p>
          Prepare uma descrição do projeto, uma amostra dos registros técnicos e os gastos segregados. Pergunte à contabilidade quem poderá usar o benefício,
          como os contratos afetam a análise, quais valores são admitidos e como o lucro do período limita o aproveitamento.
        </p>
        <p>
          Só depois use o <a href="/simulador-lei-do-bem">simulador da Lei do Bem com memória de cálculo</a> para estudar uma estimativa.
          No <a href="/desenvolvimento-de-software">desenvolvimento de software da Origami</a>, o escopo técnico deve fazer sentido para a operação;
          a decisão de construir não deve depender de uma economia fiscal ainda não validada.
        </p>

        <h2 id="fontes">Fontes oficiais para conferir os critérios</h2>
        <ul>
          <li><a href={FONTES.lei} {...EXTERNO}>Lei 11.196/2005, texto atualizado na Câmara dos Deputados</a>: condições e controles dos incentivos.</li>
          <li><a href={FONTES.decreto} {...EXTERNO}>Decreto 5.798/2006, texto atualizado</a>: conceitos das atividades de pesquisa e desenvolvimento.</li>
          <li><a href={FONTES.guia} {...EXTERNO}>Guia da Lei do Bem, MCTI</a>: caracterização técnica e distinção entre P&amp;D e atividades rotineiras.</li>
          <li><a href={FONTES.desenvolvimento} {...EXTERNO}>Material MCTI sobre inovação para a Lei do Bem</a>: desenvolvimento experimental e risco tecnológico.</li>
        </ul>
      </Documento>
      <ChamadaDaOrigami frente="inovacao" pagina={CAMINHO} />
      <Perguntas prefixo="lei-software" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas
        leituras={[
          { href: "/lei-do-bem", titulo: "Lei do Bem: requisitos e mecanismo", texto: "Confira o regime, o lucro, a regularidade fiscal e os limites do incentivo." },
          { href: "/lei-do-bem-na-pratica", titulo: "Documentação durante o projeto", texto: "Como ligar a execução técnica à apuração e à prestação de informações." },
          { href: "/financiamento-de-inovacao", titulo: "Quando avaliar crédito e subvenção", texto: "Compare o efeito no caixa e os requisitos de cada instrumento." },
        ]}
      />
      <ChamadaFinal
        titulo="Seu projeto tem uma pergunta técnica que precisa ser investigada?"
        lead="Traga o problema, os sistemas envolvidos e o que a equipe já tentou. Vamos entender o trabalho de software e os registros necessários para uma avaliação conjunta com sua contabilidade."
        whatsapp="Olá! Quero conversar sobre desenvolvimento de software e a análise de um projeto para a Lei do Bem."
      />
    </PaginaDeConteudo>
  );
}
