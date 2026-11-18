import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { grafoDaPagina, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/ia-na-industria";
const TITULO = "IA na indústria: onde ajuda e onde é cedo";
const H1 = "IA na indústria: onde a inteligência artificial ajuda de fato e onde ainda é cedo";
const DESCRICAO =
  "Onde a inteligência artificial já ajuda a indústria, onde ainda é cedo, o dado que precisa existir antes e como começar com um piloto pequeno e medido.";
const ATUALIZADA_EM = "2026-11-17";
const FONTE_IBGE =
  "https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-noticias/noticias/44551-de-2022-a-2024-percentual-de-empresas-industriais-utilizando-inteligencia-artificial-subiu-de-16-9-para-41-9";

export const metadata = metadataDaPagina({
  titulo: TITULO,
  descricao: DESCRICAO,
  caminho: CAMINHO,
  tipo: "article",
  tituloSocial: H1,
});

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Como a inteligência artificial pode ser usada na indústria?",
    resposta:
      "Hoje, com mais segurança, em tarefas de linguagem e de padrão com dado disponível: ler e conferir documentos como notas, pedidos e certificados; atender e cobrar clientes com regras claras; responder dúvidas sobre procedimentos internos; apoiar a previsão de demanda; e inspecionar imagens em pontos com câmera e iluminação controladas. Manutenção preditiva e decisões automáticas sem revisão humana ainda exigem bem mais preparo.",
  },
  {
    pergunta: "Por onde começar com IA numa indústria?",
    resposta:
      "Por um processo de volume alto, em que o erro é barato de corrigir e o dado já existe em formato digital. Meça a situação atual antes (tempo, erros, retrabalho), rode um piloto pequeno em modo de sugestão, com uma pessoa revisando, e compare com essa linha de base antes de decidir se vale escalar.",
  },
  {
    pergunta: "Preciso ter os dados organizados antes de usar IA?",
    resposta:
      "Para a maioria dos usos na operação, sim. A IA aprende e responde com base no dado que recebe: se o apontamento de produção é feito no fim do turno, de memória, ou se o mesmo item tem três cadastros, ela reproduz o erro com aparência de precisão. Leitura de documentos e assistentes sobre procedimentos são exceções parciais, porque trabalham sobre textos que já existem.",
  },
  {
    pergunta: "O que são agentes de IA para empresas?",
    resposta:
      "São programas que usam um modelo de linguagem para decidir e executar passos, como consultar um sistema, preencher um campo ou mandar uma mensagem, em vez de só responder com texto. Funcionam melhor em tarefas de backoffice com regras claras e sistemas acessíveis por API, com permissões mínimas, registro de cada ação e aprovação humana para tudo o que for irreversível.",
  },
  {
    pergunta: "A IA substitui o ERP ou o sistema de produção?",
    resposta:
      "Não. A IA usa os dados do ERP e dos sistemas de produção, e as ações que ela sugere ou executa precisam voltar para esses sistemas. Por isso a integração entre o ERP, o chão de fábrica e as demais ferramentas costuma vir antes de qualquer projeto de IA.",
  },
  {
    pergunta: "Quanto custa um projeto de IA na indústria?",
    resposta:
      "Depende do processo, das integrações necessárias e do volume de uso, porque os modelos costumam ser cobrados pelo quanto são usados. Um piloto pequeno e medido limita o investimento até haver evidência de retorno. Quando há desenvolvimento tecnológico, parte do projeto pode ser elegível a incentivos como a Lei do Bem, o que é avaliado caso a caso.",
  },
  {
    pergunta: "É seguro colocar dados da empresa em ferramentas de IA?",
    resposta:
      "Depende do contrato e da configuração. Dados de clientes, custos e salários não devem ir para ferramentas sem termos claros de proteção e de não uso para treinamento, e a LGPD se aplica a dados pessoais. Em projetos sob medida, o acesso da IA pode ficar restrito ao que cada tarefa precisa, com registro do que foi consultado.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [{ nome: "IA na indústria", caminho: CAMINHO }],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: H1,
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: ATUALIZADA_EM,
    dateModified: ATUALIZADA_EM,
    author: { "@id": "https://www.origamilab.com.br/#org" },
    publisher: { "@id": "https://www.origamilab.com.br/#org" },
    about: ["Inteligência artificial aplicada à indústria", "Agentes de IA para empresas", "Dados industriais"],
    citation: FONTE_IBGE,
  },
});

const SUMARIO = [
  { id: "pre-requisito", rotulo: "O pré-requisito: dado confiável" },
  { id: "onde-ajuda", rotulo: "Onde a IA ajuda hoje" },
  { id: "cedo", rotulo: "Onde ainda é cedo" },
  { id: "agentes", rotulo: "Agentes de IA na operação" },
  { id: "oportunidades", rotulo: "Como identificar oportunidades" },
  { id: "piloto", rotulo: "Como começar" },
  { id: "riscos", rotulo: "Riscos e cuidados" },
  { id: "origami", rotulo: "O que a Origami faz" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaIaNaIndustria() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "IA na indústria" }]}
      rotulo="Inteligência artificial"
      titulo={<>IA na indústria: onde a inteligência artificial <em className="ol-em">ajuda de fato</em> e onde ainda é cedo</>}
      lead={
        <>
          Numa operação industrial, a inteligência artificial já resolve bem tarefas de linguagem e de padrão com dado disponível: ler e conferir documentos, atender e
          cobrar clientes com regras claras, encontrar informação em procedimentos, apoiar a previsão de demanda e inspecionar imagens. Ainda pede muito preparo em
          manutenção preditiva sem sensor e sem histórico, e em decisões automáticas sem revisão humana. Em quase todo caso,{" "}
          <strong>o limite não está no modelo de IA, e sim no dado</strong>: sem apontamento confiável e sistemas integrados, a IA aprende com o que está errado.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href={FORMULARIO}>
            Converse com um especialista da Origami <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="/diagnostico-de-modernizacao">
            Avalie uma oportunidade de modernização
          </a>
        </>
      }
      meta="Origami Lab · Formiga, Minas Gerais · Atualizado em 18/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          A adoção cresce rápido: segundo a PINTEC Semestral 2024, do IBGE, a parcela de empresas industriais com 100 ou mais pessoas ocupadas que usavam inteligência
          artificial passou de 16,9% em 2022 para 41,9% em 2024 (
          <a href={FONTE_IBGE} target="_blank" rel="noopener">
            Agência IBGE Notícias
          </a>
          ). Usar, porém, não é o mesmo que ganhar com o uso. A diferença costuma estar no que vem antes da IA.
        </p>

        <h2 id="pre-requisito">O pré-requisito que quase todo projeto ignora</h2>
        <p>
          Modelos de IA aprendem e respondem com base no dado que recebem. Numa fábrica em que a produção é apontada no fim do turno, de memória, em que a parada de máquina
          não tem motivo registrado e em que o mesmo item tem três cadastros no ERP, a IA reproduz o erro com aparência de precisão.
        </p>
        <p>
          Por isso o primeiro passo da maioria dos projetos não é escolher um modelo: é fazer o dado da operação nascer certo e chegar inteiro aonde precisa. Na prática,
          isso significa <a href="/apontamento-de-producao">apontamento de produção digital</a>, o{" "}
          <a href="/integracao-erp-chao-de-fabrica">chão de fábrica integrado ao ERP</a> e{" "}
          <a href="/gestao-industrial-em-tempo-real">indicadores que a diretoria confia</a>. Depois disso, a IA tem com o que trabalhar.
        </p>

        <h2 id="onde-ajuda">Onde a IA ajuda hoje</h2>
        <p>A maturidade varia muito de um uso para outro. Esta é uma leitura honesta do que dá para colocar em produção numa indústria de porte médio.</p>
        <Tabela
          cabecalho={["Uso", "O que faz", "Maturidade", "Depende de"]}
          linhas={[
            [
              <strong key="u">Leitura de documentos</strong>,
              "Extrai campos de notas, pedidos, laudos e certificados e confere com o sistema.",
              "Madura",
              "Documento legível e regra de conferência definida.",
            ],
            [
              <strong key="u">Atendimento e cobrança</strong>,
              "Responde dúvidas, envia lembretes e registra acordos por WhatsApp ou e-mail.",
              "Madura, com regras",
              "Integração com o ERP e limites claros do que pode ser prometido.",
            ],
            [
              <strong key="u">Assistente de procedimentos</strong>,
              "Responde perguntas sobre manuais, instruções de trabalho e normas, citando a fonte.",
              "Madura",
              "Documentos atualizados e controle de quem acessa o quê.",
            ],
            [
              <strong key="u">Previsão de demanda</strong>,
              "Estima vendas e consumo de material para apoiar compras e programação.",
              "Intermediária",
              "Histórico limpo de alguns anos e mercado sem rupturas bruscas.",
            ],
            [
              <strong key="u">Inspeção visual</strong>,
              "Detecta defeito, conta peças ou lê etiquetas a partir de imagem.",
              "Intermediária",
              "Câmera e iluminação controladas e imagens de defeito já classificadas.",
            ],
            [
              <strong key="u">Manutenção preditiva</strong>,
              "Antecipa falha de equipamento a partir de sinais de operação.",
              "Inicial na maioria das fábricas",
              "Sensores (vibração, temperatura, corrente) e histórico de falhas registrado.",
            ],
            [
              <strong key="u">Agentes em sistemas</strong>,
              "Executam tarefas: consultar estoque, abrir chamado, preencher pedido.",
              "Inicial, com supervisão",
              "API dos sistemas, permissões mínimas e revisão humana.",
            ],
          ]}
        />

        <h2 id="cedo">Onde ainda é cedo</h2>
        <ul>
          <li>
            <strong>Decisão automática sem revisão</strong> em processos de erro caro: liberar lote, mudar a programação da produção, aprovar crédito.
          </li>
          <li>
            <strong>Manutenção preditiva sem sensor e sem histórico de falha.</strong> Sem esses dois, o que se vende como predição costuma ser regra fixa com outro nome.
          </li>
          <li>
            <strong>Otimizar o planejamento da produção com IA</strong> quando o próprio planejamento vive numa planilha que só uma pessoa entende. O passo anterior está em{" "}
            <a href="/planejamento-de-producao">software para PCP</a>.
          </li>
          <li>
            <strong>Assistente genérico sem acesso ao dado da empresa.</strong> Responde bem sobre o mundo e mal sobre a operação.
          </li>
        </ul>

        <h2 id="agentes">Agentes de IA na operação</h2>
        <p>
          Agente de IA é um programa que usa um modelo de linguagem para decidir e executar passos, como consultar um sistema, preencher um campo ou mandar uma mensagem, em
          vez de só responder com texto. É o tema mais citado do momento, e também o que mais pede cuidado.
        </p>
        <p>
          Faz sentido em tarefas de backoffice com regras claras e sistemas acessíveis: conferir um pedido contra o estoque e responder ao cliente, abrir um chamado de
          manutenção a partir de uma mensagem, conciliar um documento recebido com o que está no ERP. O desenho seguro tem sempre os mesmos elementos:
        </p>
        <ul>
          <li>permissões mínimas, só para o que a tarefa exige;</li>
          <li>registro de cada ação, com o que foi consultado e o que foi alterado;</li>
          <li>aprovação humana para o que for irreversível;</li>
          <li>início em modo de sugestão, antes de qualquer execução automática.</li>
        </ul>

        <h2 id="oportunidades">Como identificar oportunidades</h2>
        <QuadroDeFatos
          titulo="Cinco perguntas para cada processo candidato"
          itens={[
            { termo: "1. Volume", definicao: "A tarefa se repete muitas vezes por dia ou por semana?" },
            { termo: "2. Custo do erro", definicao: "Quanto custa quando o resultado sair errado, e alguém percebe a tempo?" },
            { termo: "3. Dado", definicao: "A informação necessária existe em formato digital e acessível por sistema?" },
            { termo: "4. Tolerância", definicao: "O processo aceita um resultado quase sempre certo, desde que revisado?" },
            { termo: "5. Revisão", definicao: "Quem confere o resultado, e quanto tempo isso leva?" },
          ]}
        />
        <p>
          Bons primeiros projetos ficam onde o volume é alto, o erro é barato de corrigir e o dado já existe. Projetos em que o erro é caro e o dado não existe ainda não são
          de IA: são de organização da operação.
        </p>

        <h2 id="piloto">Como começar: piloto pequeno e medido</h2>
        <ol>
          <li>
            <strong>Escolha um processo</strong> que passe nas cinco perguntas acima.
          </li>
          <li>
            <strong>Meça a situação atual antes</strong>: tempo gasto, erros, retrabalho. Um piloto sem linha de base não tem como provar nada depois.
          </li>
          <li>
            <strong>Rode em modo de sugestão</strong>, com uma pessoa revisando cada resultado, por algumas semanas.
          </li>
          <li>
            <strong>Compare com a linha de base</strong> e decida com número: escalar, ajustar ou parar.
          </li>
          <li>
            <strong>Só então integre de vez</strong> ao ERP e aos sistemas da operação, com as permissões e os registros definidos.
          </li>
        </ol>

        <h2 id="riscos">Riscos e cuidados</h2>
        <ul>
          <li>
            <strong>Dado sensível.</strong> Informação de clientes, custos e salários não deve ir para ferramentas sem contrato de proteção de dados. A LGPD vale para dados
            pessoais.
          </li>
          <li>
            <strong>Resposta inventada.</strong> Modelos de linguagem podem errar com confiança. A defesa é responder só com base nas fontes da empresa, mostrar de onde veio a
            resposta e manter revisão humana onde o erro custa.
          </li>
          <li>
            <strong>Dependência de fornecedor.</strong> Prefira uma arquitetura que permita trocar o modelo e mantenha dados, regras e instruções com a empresa.
          </li>
          <li>
            <strong>Custo de uso.</strong> Modelos costumam ser cobrados pelo volume de uso. Estime antes, com o volume real do processo.
          </li>
        </ul>
        <Nota>
          <strong>Nenhuma aplicação de IA substitui o processo.</strong> Se a regra não está clara para as pessoas que fazem o trabalho hoje, também não estará para a IA.
        </Nota>

        <h2 id="origami">O que a Origami faz</h2>
        <p>
          A Origami Lab trabalha a parte que vem antes e em volta da IA: o <a href="/consultoria-estrategica">diagnóstico dentro da operação</a> para achar onde ela
          compensa, a <a href="/integracao-de-sistemas">integração dos sistemas</a> e do chão de fábrica para o dado existir e ser confiável, e o{" "}
          <a href="/desenvolvimento-de-software">software sob medida</a> que coloca a solução no fluxo de trabalho de quem usa.
        </p>
        <p>
          Se o diagnóstico mostrar que o ganho está em organizar o dado ou em automatizar uma regra simples, sem IA nenhuma, a recomendação é essa. Para indústrias da região,
          veja também <a href="/tecnologia-para-industrias-minas-gerais">tecnologia para indústrias de Minas Gerais</a>.
        </p>
      </Documento>

      <ChamadaDaOrigami frente="sistemas" pagina={CAMINHO} />
      <Perguntas prefixo="ia-industria" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          {
            href: "/diagnostico-de-modernizacao",
            titulo: "Diagnóstico de modernização",
            texto: "Algumas perguntas sobre a sua operação para ver onde estão as maiores oportunidades, inclusive de IA.",
          },
          {
            href: "/gestao-industrial-em-tempo-real",
            titulo: "Gestão industrial em tempo real",
            texto: "De onde vêm os dados da operação, como medir OEE sem apontamento manual e os indicadores que movem decisão.",
          },
          {
            href: "/integracao-erp-chao-de-fabrica",
            titulo: "Integração ERP e chão de fábrica",
            texto: "Apontamento, paradas, qualidade e lote ligados ao ERP sem trocá-lo e sem duplicar dado.",
          },
          {
            href: "/consultoria-estrategica",
            titulo: "Consultoria estratégica",
            texto: "Diagnóstico dentro da operação e portfólio de projetos priorizado por retorno, com sequência, prazo e custo.",
          },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            Antes do modelo de IA, <em className="ol-em">o dado da operação</em>.
          </>
        }
        lead="Trinta minutos para entender a sua operação, o dado que já existe e onde a IA compensa. Se a resposta for organizar o dado primeiro, a gente diz."
        rotulo="Converse com um especialista da Origami"
        whatsapp="Olá! Quero conversar sobre IA aplicada à operação da minha empresa."
      />
    </PaginaDeConteudo>
  );
}
