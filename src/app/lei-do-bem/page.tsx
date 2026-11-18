import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import type { Metadata } from "next";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/lei-do-bem";
const TITULO = "Lei do Bem: quem tem direito e como funciona";
const DESCRICAO =
  "Quem pode usar a Lei do Bem, o que conta como P&D e inovação, quanto ela reduz de IRPJ e CSLL, como informar o MCTI e o que leva à glosa.";

export const metadata: Metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

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
    pergunta: "O que é a Lei do Bem?",
    resposta:
      "É o nome dado ao capítulo de incentivos à inovação tecnológica da Lei nº 11.196/2005. O principal deles permite que empresas no lucro real excluam da base do IRPJ e da CSLL, além da dedução normal, até 60% do que gastaram no ano com pesquisa, desenvolvimento e inovação tecnológica, percentual que pode chegar a 80% com aumento do número de pesquisadores, mais 20% do gasto ligado a patente concedida.",
  },
  {
    pergunta: "Quem tem direito à Lei do Bem?",
    resposta:
      "Empresas que apuram o imposto pelo lucro real, têm lucro tributável no ano (a exclusão é limitada ao lucro real e não passa para o ano seguinte), comprovam regularidade fiscal e fazem pesquisa, desenvolvimento ou inovação tecnológica. A lei não restringe setor nem exige faturamento mínimo, laboratório ou patente.",
  },
  {
    pergunta: "Empresa no lucro presumido pode usar a Lei do Bem?",
    resposta:
      "Não. O benefício é uma exclusão na apuração do lucro real, e o MCTI informa que ele se aplica a empresas tributadas pelo lucro real. O mesmo vale para o Simples Nacional. Para essas empresas, o apoio à inovação vem de crédito e subvenção, como os da FINEP e das fundações estaduais de amparo à pesquisa.",
  },
  {
    pergunta: "Como funciona a Lei do Bem na prática?",
    resposta:
      "Para a exclusão do art. 19, não há edital nem aprovação prévia: a empresa avalia o enquadramento, aplica o benefício na apuração do ano e depois informa ao MCTI, pelo FormP&D, os projetos e os gastos. O ministério analisa as informações depois do uso, e o uso indevido leva à perda do incentivo e ao recolhimento do imposto com juros e multa.",
  },
  {
    pergunta: "Como calcular a Lei do Bem?",
    resposta:
      "Gasto anual com P&D vezes o percentual de exclusão (60%, 70% ou 80%, conforme o número de pesquisadores), mais 20% do gasto ligado a patente concedida, limitado ao lucro real. A economia é esse valor vezes 15% de IRPJ e 9% de CSLL, mais 10% de adicional de IRPJ na parte do lucro acima de R$ 240 mil no ano. O simulador da Origami faz essa conta com a memória de cálculo.",
  },
  {
    pergunta: "Desenvolvimento de software entra na Lei do Bem?",
    resposta:
      "Pode entrar, quando o desenvolvimento enfrenta incerteza técnica real e gera produto, processo ou funcionalidade nova, e é documentado como projeto de P&D. Comprar e implantar software de mercado, como um ERP, normalmente não se sustenta sozinho. Empresas que usam os benefícios da Lei de Informática seguem regras próprias: o capítulo da Lei do Bem não se aplica a elas (art. 26).",
  },
  {
    pergunta: "Só empresa de tecnologia pode usar a Lei do Bem?",
    resposta:
      "Não. A lei não restringe setor. Indústria, engenharia, logística, agroindústria e serviços podem usar pelos mesmos critérios. Numa indústria tradicional, o desenvolvimento costuma acontecer no processo produtivo e raramente é chamado de P&D, o que não muda a natureza técnica do trabalho.",
  },
  {
    pergunta: "Qual a diferença entre a Lei do Bem e a FINEP?",
    resposta:
      "A Lei do Bem reduz imposto: nenhum dinheiro novo entra no caixa e não há disputa por recurso. A FINEP financia a inovação com crédito, que entra e é devolvido, e com subvenção, que sai por chamada pública. Os dois podem fazer parte do mesmo plano, mas recursos não reembolsáveis recebidos de órgãos públicos não contam como gasto para a Lei do Bem.",
  },
  {
    pergunta: "A empresa teve prejuízo fiscal. Pode usar a Lei do Bem?",
    resposta:
      "Naquele ano, não há benefício: a exclusão é limitada ao valor do lucro real e da base da CSLL antes dela, e o excesso não pode ser aproveitado em anos seguintes (Lei 11.196/2005, art. 19, §5º).",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [{ nome: "Lei do Bem", caminho: CAMINHO }],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: "Lei do Bem: quem tem direito, o que conta como P&D e como funciona",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-17",
    dateModified: "2026-11-17",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    about: [
      { "@type": "Legislation", name: "Lei nº 11.196/2005", url: FONTES.lei },
      { "@type": "Legislation", name: "Decreto nº 5.798/2006", url: FONTES.decreto },
    ],
    citation: Object.values(FONTES),
  },
});

const SUMARIO = [
  { id: "quem-pode", rotulo: "Quem pode usar" },
  { id: "fora", rotulo: "Quem fica de fora" },
  { id: "escolher-instrumento", rotulo: "Qual caminho avaliar" },
  { id: "pd", rotulo: "O que conta como P&D" },
  { id: "industria", rotulo: "Na indústria tradicional" },
  { id: "quanto", rotulo: "Quanto vale" },
  { id: "informar", rotulo: "Como informar o MCTI" },
  { id: "riscos", rotulo: "O risco de glosa" },
  { id: "origami", rotulo: "Onde a Origami entra" },
  { id: "fontes", rotulo: "Fontes" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

const LINK_EXTERNO = { target: "_blank", rel: "noopener" } as const;

function ChamadaDoSimulador() {
  return (
    <p>
      <a className="ol-btn ol-btn--primary" href="/simulador-lei-do-bem">
        Simular a economia da minha empresa <Seta />
      </a>
    </p>
  );
}

export default function PaginaLeiDoBem() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Lei do Bem" }]}
      rotulo="Incentivo fiscal à inovação"
      titulo={<>Lei do Bem: quem tem direito e <em className="ol-em">o que conta como P&D</em></>}
      lead={
        <>
          A Lei do Bem (Lei nº 11.196/2005) permite que empresas tributadas pelo lucro real excluam da base do IRPJ e da CSLL, além da dedução normal,{" "}
          <strong>até 60% do que gastaram no ano com pesquisa, desenvolvimento e inovação tecnológica</strong> — até 80% quando aumentam o número de
          pesquisadores, mais 20% do gasto ligado a patente concedida. Não há edital nem aprovação prévia para essa exclusão: a empresa aplica o benefício na
          própria apuração e informa o MCTI depois. Três condições precisam ser verdadeiras no mesmo ano: lucro real, lucro tributável e regularidade fiscal.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="/simulador-lei-do-bem">
            Simular a economia <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href={FORMULARIO}>
            Converse com um especialista
          </a>
        </>
      }
      meta="Atualizado em 18/11/2026 · Orientação geral, não substitui parecer contábil · Origami Lab, Formiga (MG)"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          A pergunta que chega primeiro quase nunca é “o que é a Lei do Bem”. É “a minha empresa pode usar”. A resposta cabe em três verificações objetivas,
          que a sua contabilidade consegue responder hoje.
        </p>

        <h2 id="quem-pode">Quem pode usar a Lei do Bem</h2>
        <p>Os requisitos são cumulativos: falhar em um elimina o benefício naquele ano.</p>
        <QuadroDeFatos
          titulo="Os três requisitos"
          itens={[
            {
              termo: "1. Apurar o imposto pelo lucro real",
              definicao: "O benefício é uma exclusão feita na apuração do lucro real. O MCTI informa que ele se aplica a empresas tributadas pelo lucro real.",
            },
            {
              termo: "2. Ter lucro tributável no ano",
              definicao:
                "A exclusão é limitada ao lucro real e à base da CSLL antes dela, e o excesso não pode ser aproveitado depois (Lei 11.196/2005, art. 19, §5º).",
            },
            {
              termo: "3. Comprovar regularidade fiscal",
              definicao: "O gozo dos incentivos depende da comprovação da regularidade fiscal da empresa (Lei 11.196/2005, art. 23).",
            },
          ]}
        />
        <p>
          Repare no que não está na lista: setor de atuação, faturamento mínimo, laboratório, departamento formal de P&amp;D ou patente. Uma indústria de
          móveis, uma metalúrgica ou uma empresa de engenharia se enquadram pelos mesmos critérios de uma empresa de software. O lucro real é obrigatório para
          empresas com receita total acima de R$ 78 milhões no ano anterior (
          <a href={FONTES.lucroReal} {...LINK_EXTERNO}>
            Lei 9.718/1998, art. 14
          </a>
          ), e outras empresas podem optar por ele.
        </p>

        <h2 id="fora">Quem fica de fora</h2>
        <p>
          <strong>Lucro presumido e Simples Nacional.</strong> Não é questão de documentação: é o desenho do incentivo. Para essas empresas, o caminho para
          financiar inovação é dinheiro entrando no caixa, não imposto saindo: crédito e subvenção da FINEP e das fundações estaduais. Veja{" "}
          <a href="/financiamento-de-inovacao">financiamento de inovação</a>.
        </p>
        <p>
          <strong>Ano com prejuízo fiscal.</strong> A empresa investiu, o projeto era legítimo e, mesmo assim, não há benefício naquele ano. Por isso a decisão
          de investir contando com a Lei do Bem depende da projeção de resultado do ano, não só do orçamento do projeto.
        </p>
        <p>
          <strong>Empresas na Lei de Informática.</strong> O capítulo da Lei do Bem não se aplica a quem usa os benefícios das Leis 8.248/1991, 8.387/1991 e
          10.176/2001, que têm regras próprias (Lei 11.196/2005, art. 26).
        </p>

        <h2 id="escolher-instrumento">Lei do Bem, crédito ou subvenção: qual caminho avaliar?</h2>
        <p>
          A Lei do Bem reduz imposto; crédito e subvenção trazem recursos para executar um projeto. Comece pela necessidade da empresa e pelos requisitos
          que ela consegue comprovar.
        </p>
        <Tabela
          cabecalho={["Sua situação", "Próximo passo", "O que preparar"]}
          linhas={[
            [
              "Lucro real, lucro tributável, regularidade fiscal e atividades de P&D.",
              <a key="simular" href="/simulador-lei-do-bem">Estimar a economia no simulador da Lei do Bem</a>,
              "Dispêndios elegíveis, lucro do ano e documentação técnica para conferir com a contabilidade.",
            ],
            [
              "A empresa precisa de recursos para executar o projeto ou não atende aos requisitos da exclusão fiscal.",
              <a key="financiar" href="/financiamento-de-inovacao#tres-caminhos">Comparar crédito e subvenção para inovação</a>,
              "Problema, escopo técnico, equipe, cronograma e orçamento, conforme as condições de cada linha ou chamada.",
            ],
            [
              "A empresa já usou o incentivo e precisa organizar as informações do exercício.",
              <a key="documentar" href="/lei-do-bem-na-pratica">Ver o método de documentação e envio do FormP&D</a>,
              "Projetos, registros de execução e dispêndios conciliados com a contabilidade.",
            ],
          ]}
        />
        <p>
          O simulador mostra a memória de cálculo, sem substituir a análise de elegibilidade. Os requisitos e a base legal estão nas{" "}
          <a href="#fontes">fontes oficiais desta página</a>.
        </p>

        <h2 id="pd">O que conta como P&amp;D e inovação tecnológica</h2>
        <p>
          O decreto que regulamenta a lei define inovação tecnológica como a concepção de novo produto ou processo de fabricação, ou de novas funcionalidades
          que tragam melhoria incremental e ganho efetivo de qualidade ou produtividade. As atividades que contam são estas:
        </p>
        <QuadroDeFatos
          titulo="Atividades de P&D (Decreto 5.798/2006, art. 2º)"
          itens={[
            { termo: "Pesquisa básica dirigida", definicao: "Trabalhos para entender fenômenos novos, com vistas a produtos, processos ou sistemas inovadores." },
            { termo: "Pesquisa aplicada", definicao: "Trabalhos para obter conhecimento novo voltado a desenvolver ou aprimorar produtos, processos e sistemas." },
            {
              termo: "Desenvolvimento experimental",
              definicao: "Trabalhos sistemáticos, a partir de conhecimento existente, para comprovar a viabilidade técnica ou funcional de algo novo.",
            },
            {
              termo: "Tecnologia industrial básica",
              definicao: "Aferição e calibração, projeto de instrumentos de medida, certificação de conformidade, normalização, documentação técnica e patenteamento.",
            },
            {
              termo: "Serviços de apoio técnico",
              definicao: "Os indispensáveis a instalações e equipamentos usados só em projetos de P&D, incluindo a capacitação do pessoal.",
            },
          ]}
        />
        <p>
          Na prática, o que sustenta um projeto é a combinação de <strong>novidade com incerteza técnica</strong>: no início não se sabia se aquilo ia
          funcionar, nem exatamente como, e foi preciso testar e descartar caminhos. Se a solução era conhecida e o trabalho era executá-la, por maior que
          fosse, o trabalho não é P&amp;D. Três perguntas ajudam a separar:
        </p>
        <ul>
          <li>
            <strong>Havia risco de não dar certo por razão técnica?</strong> E não só porque o prazo era curto ou o orçamento, apertado.
          </li>
          <li>
            <strong>Alguma alternativa foi testada e descartada?</strong> Projeto de P&amp;D deixa rastro de tentativa; projeto de implantação segue roteiro.
          </li>
          <li>
            <strong>O resultado é novo para a empresa e para o mercado dela?</strong> Não precisa ser novidade mundial, mas precisa ir além de adotar o que o
            setor já usa.
          </li>
        </ul>
        <p>
          Casos que normalmente não se sustentam sozinhos: comprar e implantar um ERP de mercado, contratar licenças de software, treinar a equipe numa
          tecnologia existente, fazer manutenção de sistema.
        </p>

        <h2 id="industria">Por que a indústria tradicional se enquadra mais do que imagina</h2>
        <p>
          A imagem de P&amp;D como jaleco e laboratório afasta justamente quem mais desenvolve no chão de fábrica. Numa indústria de médio porte, o
          desenvolvimento raramente tem esse nome: é “resolver aquele problema da linha”, “adaptar o processo para o material novo”. Situações que costumam ter
          substância técnica para virar projeto:
        </p>
        <ul>
          <li>Desenvolver processo para um material ou insumo que a empresa nunca processou, quando os parâmetros conhecidos não funcionam.</li>
          <li>Criar produto sob especificação de cliente que exige uma propriedade (resistência, tolerância, durabilidade) que a linha atual não entrega.</li>
          <li>Automatizar uma etapa em que o problema é de medição ou controle, e não de comprar um equipamento pronto.</li>
          <li>Desenvolver software que resolve um problema de operação sem solução equivalente no mercado, com incerteza real sobre o método.</li>
          <li>Reduzir perda, consumo ou tempo de ciclo com uma mudança de processo que precisou ser testada até funcionar.</li>
        </ul>
        <p>
          O que falta nesses casos quase nunca é mérito técnico. É registro: ninguém anotou a hipótese, as alternativas testadas, quem trabalhou quantas horas
          em quê.
        </p>

        <p>
          Para projetos digitais, veja o guia de <a href="/lei-do-bem-desenvolvimento-de-software">Lei do Bem no desenvolvimento de software</a>:
          {" "}como distinguir um desafio tecnológico de implantação e rotina, com exemplos e evidências para preparar a avaliação.
        </p>

        <h2 id="quanto">Quanto vale</h2>
        <p>
          O mecanismo central é uma <strong>exclusão adicional</strong>: além de deduzir o gasto com P&amp;D como despesa, a empresa tira de novo uma parte
          dele da base do IRPJ e da CSLL.
        </p>
        <Tabela
          cabecalho={["Situação no ano", "Exclusão adicional", "Base legal"]}
          linhas={[
            ["Regra geral", "até 60% do gasto com P&D", "Lei 11.196/2005, art. 19"],
            ["Aumento de até 5% no número de pesquisadores", "até 70%", "Decreto 5.798/2006, art. 8º, §1º"],
            ["Aumento de mais de 5% no número de pesquisadores", "até 80%", "Decreto 5.798/2006, art. 8º, §1º"],
            ["Patente concedida ou cultivar registrado", "mais até 20% do gasto ligado a essa pesquisa", "Lei 11.196/2005, art. 19, §3º"],
          ]}
        />
        <p>
          A economia é o valor excluído vezes as alíquotas: 15% de IRPJ, 9% de CSLL e 10% de adicional de IRPJ na parte do lucro acima de R$ 240 mil no ano (
          <a href={FONTES.irpj} {...LINK_EXTERNO}>
            Lei 9.249/1995
          </a>
          ;{" "}
          <a href={FONTES.csll} {...LINK_EXTERNO}>
            Lei 7.689/1988
          </a>
          ). Na prática, sem contar o acréscimo por patente, cada real gasto em P&amp;D volta como 14 a 27 centavos de imposto a menos. Três consequências mudam a conversa dentro da empresa:
        </p>
        <ul>
          <li>
            <strong>Não entra dinheiro no caixa.</strong> O efeito é imposto a menos, não receita a mais.
          </li>
          <li>
            <strong>O efeito depende do lucro.</strong> Muito gasto e pouco lucro limitam o aproveitamento no ano.
          </li>
          <li>
            <strong>Há outros incentivos no mesmo capítulo,</strong> com regras próprias: redução de 50% do IPI na compra de equipamentos para P&amp;D,
            depreciação integral desses bens no ano da aquisição e amortização acelerada de intangíveis ligados à pesquisa (Lei 11.196/2005, art. 17).
          </li>
        </ul>
        <ChamadaDoSimulador />

        <h2 id="informar">Como informar o MCTI</h2>
        <p>
          A empresa presta ao Ministério da Ciência, Tecnologia e Inovação, por meio eletrônico, as informações sobre os projetos e os gastos do ano em que
          usou o benefício (Decreto 5.798/2006, art. 14). O canal é o formulário FormP&amp;D, em formpd.mcti.gov.br. O prazo é definido pelo ministério: a{" "}
          <a href={FONTES.mcti} {...LINK_EXTERNO}>
            página da Lei do Bem no MCTI
          </a>{" "}
          indica 31 de agosto de cada ano, e o ciclo do ano-base 2025 ficou aberto até 30 de setembro de 2026. Confira sempre o aviso do ciclo vigente.
        </p>
        <p>
          Os gastos precisam estar em contas contábeis específicas (Lei 11.196/2005, art. 22), e a documentação fica à disposição da Receita Federal pelo
          prazo prescricional (Decreto 5.798/2006, art. 14, §1º).
        </p>

        <h2 id="riscos">O risco de glosa</h2>
        <p>
          A análise do ministério acontece depois do uso. Se o incentivo foi usado de forma indevida, a empresa perde os incentivos ainda não usados e recolhe o
          imposto que deixou de pagar, com juros e multa (Lei 11.196/2005, art. 24). Entre os problemas mais comuns que o MCTI aponta nas análises estão a
          despesa mal documentada e a descrição técnica insuficiente dos projetos. O antídoto é registrar o projeto enquanto ele acontece, e não reconstruí-lo
          em dezembro.
        </p>
        <Nota>
          <strong>Orientação geral, não parecer fiscal.</strong> A Lei do Bem tem regulamentação própria e procedimentos que mudam entre exercícios. Antes de
          aplicar o benefício, confirme requisitos, percentuais e prazos com a sua contabilidade e na legislação vigente.
        </Nota>

        <h2 id="origami">Onde a Origami Lab entra</h2>
        <p>
          A Origami Lab trabalha a Lei do Bem pelo lado técnico, onde o benefício se sustenta ou cai: identificar, dentro da operação, o que teve incerteza
          técnica; estruturar os projetos com a descrição que o MCTI espera; organizar o registro de horas e gastos enquanto o trabalho acontece; e acompanhar a
          prestação de informações. A apuração segue com a sua contabilidade. A captação é feita em parceria com a PIN, e a cobrança só acontece se o capital
          for liberado. Veja <a href="/acesso-a-capital">acesso a capital</a>.
        </p>

        <h2 id="fontes">Fontes</h2>
        <ul>
          <li>
            <a href={FONTES.lei} {...LINK_EXTERNO}>
              Lei nº 11.196/2005
            </a>
            , Capítulo III, arts. 17 a 26.
          </li>
          <li>
            <a href={FONTES.decreto} {...LINK_EXTERNO}>
              Decreto nº 5.798/2006
            </a>
            , que regulamenta os incentivos.
          </li>
          <li>
            <a href={FONTES.lucroReal} {...LINK_EXTERNO}>
              Lei nº 9.718/1998
            </a>
            , art. 14 (obrigatoriedade do lucro real).
          </li>
          <li>
            <a href={FONTES.irpj} {...LINK_EXTERNO}>
              Lei nº 9.249/1995
            </a>{" "}
            e{" "}
            <a href={FONTES.csll} {...LINK_EXTERNO}>
              Lei nº 7.689/1988
            </a>{" "}
            (alíquotas de IRPJ e CSLL).
          </li>
          <li>
            <a href={FONTES.mcti} {...LINK_EXTERNO}>
              Lei do Bem no site do MCTI
            </a>
            .
          </li>
        </ul>
      </Documento>

      <ChamadaDaOrigami frente="inovacao" pagina={CAMINHO} />
      <Perguntas prefixo="lei-do-bem" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          {
            href: "/simulador-lei-do-bem",
            titulo: "Simulador da Lei do Bem",
            texto: "Confira o enquadramento e estime a economia de IRPJ e CSLL com os números da sua empresa.",
          },
          {
            href: "/acesso-a-capital",
            titulo: "Acesso a capital",
            texto: "Lei do Bem, FINEP e FAPEMIG do enquadramento à prestação de contas, com cobrança só se o capital for liberado.",
          },
          {
            href: "/financiamento-de-inovacao",
            titulo: "Financiamento de inovação",
            texto: "O caminho para quem está no lucro presumido: crédito e subvenção para inovação.",
          },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            O que a sua empresa desenvolveu este ano <em className="ol-em">pode virar projeto</em>?
          </>
        }
        lead="Em trinta minutos a gente olha o que mudou no seu processo, no seu produto e nos seus sistemas, e diz o que tem substância técnica para a Lei do Bem e o que não tem."
        whatsapp="Olá! Li a página da Lei do Bem no site e quero avaliar o enquadramento da minha empresa."
      />
    </PaginaDeConteudo>
  );
}
