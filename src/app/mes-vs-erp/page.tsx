import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo } from "@/components/conteudo/PaginaDeConteudo";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/mes-vs-erp";
const TITULO = "MES e ERP: diferenças e integração na indústria";
const DESCRICAO = "Entenda o papel de MES, ERP e PCP, quais dados precisam circular e como decidir se a indústria precisa de uma camada de execução da produção.";
const FONTE_SAP = "https://www.sap.com/resources/what-is-mes";
const FONTE_MICROSOFT = "https://learn.microsoft.com/en-us/dynamics365/supply-chain/production-control/mes-integration";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Qual é a diferença entre MES e ERP?",
    resposta: "O ERP integra a gestão empresarial, como pedidos, compras, estoque, custos e financeiro. O MES acompanha a execução da fabricação: ordens em andamento, operações, quantidades, tempos e ocorrências. As funções podem se sobrepor conforme o produto e sua configuração. A decisão depende do que a operação precisa registrar e do que o ERP já atende.",
  },
  {
    pergunta: "Um sistema MES substitui o ERP?",
    resposta: "Em geral, eles se complementam. O MES pode receber ordens e cadastros e devolver informações da produção para o ERP. Antes de contratar, é necessário definir onde cada dado nasce, qual sistema pode alterá-lo e como as duas bases serão conferidas, evitando duas versões do estoque ou do custo.",
  },
  {
    pergunta: "Se o ERP já tem módulo de produção, preciso de MES?",
    resposta: "Não necessariamente. Teste primeiro o módulo disponível com um fluxo real, do pedido ao encerramento da ordem. Se ele atende ao apontamento, à rastreabilidade, às exceções e ao uso por quem executa o trabalho, uma segunda camada pode não se justificar. As lacunas devem ser demonstradas antes da escolha de outro sistema.",
  },
  {
    pergunta: "Qual é a diferença entre PCP e MES?",
    resposta: "PCP é a função de planejar e controlar a produção: o que fabricar, em qual sequência, com quais recursos e para quando. Pode ser apoiada pelo ERP, por uma ferramenta especializada ou por uma combinação. O MES registra e acompanha a execução do que foi planejado e devolve informação para corrigir esse plano.",
  },
  {
    pergunta: "Preciso instalar sensores para começar?",
    resposta: "Não para todos os processos. Quantidades, início e fim de operação e motivos de parada podem ser informados por pessoas em uma interface digital. A coleta automática depende do equipamento e do dado disponível. Comece definindo quais decisões exigem o dado e qual forma de coleta tem qualidade suficiente.",
  },
  {
    pergunta: "O que define o custo de integrar MES e ERP?",
    resposta: "As interfaces disponíveis, o número de fluxos, a qualidade dos cadastros, as regras de estoque e custo, o volume de eventos e as condições de uso no chão de fábrica. Testes, migração, treinamento, suporte e manutenção das integrações também entram no custo total. O orçamento precisa partir de um escopo demonstrável.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [{ nome: "Guias", caminho: "/guias" }, { nome: "MES e ERP", caminho: CAMINHO }],
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
    image: "https://www.origamilab.com.br/assets/og-cover.jpg",
    mainEntityOfPage: { "@id": `https://www.origamilab.com.br${CAMINHO}#webpage` },
    citation: [FONTE_SAP, FONTE_MICROSOFT],
  },
});

const SUMARIO = [
  { id: "diferencas", rotulo: "MES, ERP e PCP" },
  { id: "fluxo", rotulo: "Como os dados circulam" },
  { id: "quando-basta", rotulo: "Quando o ERP basta" },
  { id: "integracao", rotulo: "Requisitos de integração" },
  { id: "avaliar", rotulo: "Como avaliar uma solução" },
  { id: "comecar", rotulo: "Por onde começar" },
  { id: "fontes", rotulo: "Fontes e referências" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaMesVsErp() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: "MES e ERP" }]}
      rotulo="Produção e sistemas"
      titulo={<>MES e ERP: <em className="ol-em">o que cada um resolve</em> na produção</>}
      lead={<>O ERP organiza a gestão da empresa; o MES acompanha a execução no chão de fábrica. Eles podem trabalhar juntos, mas ter um problema de produção não significa precisar de dois sistemas. A escolha começa por descobrir <strong>qual dado falta, quem precisa dele e o que o módulo atual já consegue fazer</strong>.</>}
      meta="Por Origami Lab · Publicado em 18/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="diferencas">MES, ERP e PCP: funções que precisam conversar</h2>
        <p>
          MES significa <em>manufacturing execution system</em>, ou sistema de execução da manufatura. A <a href={FONTE_SAP} target="_blank" rel="noopener">definição da SAP</a>{" "}
          o posiciona entre a gestão empresarial e o controle dos processos de fabricação. Esse é um mapa de funções, não uma obrigação de comprar um software para cada camada.
        </p>
        <QuadroDeFatos titulo="A pergunta de cada função" itens={[
          { termo: "ERP", definicao: "Como pedidos, materiais, estoque e resultado financeiro se conectam na empresa?" },
          { termo: "PCP", definicao: "O que fabricar, em qual sequência, com quais recursos e para quando?" },
          { termo: "MES", definicao: "O que está sendo executado e o que de fato aconteceu em cada operação?" },
        ]} />
        <Tabela cabecalho={["Informação", "Responsabilidade a definir", "Como conferir"]} linhas={[
          ["Pedido, produto e quantidade a entregar", "Gestão comercial e ERP", "O pedido liberado chega à ordem correta, com a versão vigente."],
          ["Sequência e capacidade dos recursos", "PCP, apoiado pelas ferramentas escolhidas", "O plano considera restrições e recebe os desvios da execução."],
          ["Início, fim, quantidade boa, refugo e parada", "Execução da produção, no MES ou no próprio ERP", "O registro está ligado à ordem, à operação e ao momento em que ocorreu."],
          ["Consumo de material e entrada do produto", "Estoque e produção, com regras de integração", "O evento de produção gera uma única movimentação válida."],
          ["Custo realizado e fechamento", "Controladoria e ERP", "Tempos, consumo e perdas podem ser reconciliados com o encerramento da ordem."],
        ]} />
        <p>
          Um ERP pode oferecer várias dessas funções. A documentação do <a href={FONTE_MICROSOFT} target="_blank" rel="noopener">Microsoft Dynamics 365</a> descreve tanto o
          uso da execução nativa quanto a integração com um MES especializado. O nome da categoria, sozinho, não demonstra uma lacuna na sua operação.
        </p>

        <h2 id="fluxo">O fluxo que precisa fechar, do pedido ao custo</h2>
        <p>
          Imagine uma ordem que passa por corte, usinagem e inspeção. É um exemplo de desenho do processo, não um resultado de cliente: a ordem é liberada no sistema de
          gestão, o PCP organiza a sequência e quem executa registra as operações. Depois, os dados alimentam estoque, custo e a situação de entrega.
        </p>
        <ol>
          <li><strong>Preparar a ordem:</strong> produto, revisão, quantidade, roteiro, material e unidade de medida precisam ter significado comum.</li>
          <li><strong>Liberar e distribuir:</strong> a equipe recebe a ordem certa, e uma alteração posterior não passa despercebida.</li>
          <li><strong>Apontar a execução:</strong> registrar produção, perdas, tempos e ocorrências no momento e no local possíveis.</li>
          <li><strong>Conferir e integrar:</strong> aplicar as regras de consumo e entrada; rejeições entram em uma fila com responsável.</li>
          <li><strong>Encerrar e aprender:</strong> comparar planejado e realizado para corrigir parâmetros e a próxima programação.</li>
        </ol>
        <p>
          O detalhe da coleta está no guia de <a href="/apontamento-de-producao">apontamento de produção</a>. A arquitetura de troca de dados está em{" "}
          <a href="/integracao-erp-chao-de-fabrica">integração do ERP com o chão de fábrica</a>.
        </p>

        <h2 id="quando-basta">Quando vale melhorar o ERP antes de acrescentar um MES</h2>
        <p>
          Faça uma demonstração com uma ordem real e com as pessoas da produção. Se o módulo existente registra o que importa, trata as exceções e permite trabalhar no
          ritmo necessário, pode ser mais simples configurá-lo, corrigir o cadastro e treinar a equipe. Uma tela pouco usada nem sempre indica falta de funcionalidade.
        </p>
        <p>
          Uma camada adicional entra na avaliação quando há necessidades demonstradas: rastreabilidade por operação que o módulo não atende, coleta inadequada à rotina,
          acompanhamento insuficiente das ordens ou regras específicas que tornam a adaptação do ERP difícil de manter. Descreva a lacuna em uma frase verificável,
          como “não conseguimos localizar em qual operação um lote está”.
        </p>
        <Nota>
          Um painel atualizado não substitui o registro da produção. Se o apontamento chega incompleto no fim do turno, trocar a ferramenta de visualização não corrige a
          origem do dado. Avalie o processo de coleta antes de contratar indicadores em tempo real.
        </Nota>

        <h2 id="integracao">O que combinar antes de conectar os sistemas</h2>
        <ul>
          <li><strong>Dono de cada dado:</strong> onde nasce o cadastro e quem pode corrigir ordem, roteiro, unidade, lote e quantidade.</li>
          <li><strong>Confirmação de processamento:</strong> envio aceito não basta; é preciso saber se o estoque ou a ordem realmente foi atualizado.</li>
          <li><strong>Reenvio sem duplicação:</strong> repetir um apontamento após falha de rede não pode baixar o material duas vezes.</li>
          <li><strong>Exceções:</strong> definir o tratamento de operação fora de sequência, refugo, retrabalho, cancelamento e ajuste retroativo.</li>
          <li><strong>Continuidade:</strong> combinar o que acontece sem conexão, como os registros pendentes são recuperados e quem confere divergências.</li>
          <li><strong>Rastro e suporte:</strong> conseguir localizar a falha e o responsável pelo atendimento, inclusive quando há fornecedores diferentes.</li>
        </ul>
        <p>
          No exemplo documentado pela Microsoft, os intercâmbios incluem consumo de material, tempo de operação e produção concluída. Esses nomes ajudam a montar a
          conversa técnica; os campos e os caminhos disponíveis precisam ser confirmados na versão e no fornecedor do seu ERP.
        </p>

        <h2 id="avaliar">Como avaliar a proposta sem se perder na lista de recursos</h2>
        <p>
          Peça que os fornecedores executem o mesmo roteiro, com dados de teste preparados pela sua equipe: uma ordem normal, uma com refugo, uma com retrabalho e uma
          interrupção de conexão. Verifique tanto a experiência de quem aponta quanto o resultado recebido pelo estoque e pela controladoria.
        </p>
        <p>
          Compare o custo total: licenças ou desenvolvimento, interfaces, equipamentos necessários, implantação, treinamento, suporte e atualização. Registre também
          como exportar o histórico, quem administra os acessos e como uma mudança no ERP será testada. Um requisito atendido somente por planilha paralela deve aparecer
          na avaliação, com seu esforço e responsável.
        </p>

        <h2 id="comecar">Comece por um fluxo que possa ser conferido</h2>
        <p>
          Escolha um setor-piloto e documente a situação atual: tempo entre execução e informação disponível, ordens sem situação confiável, correções de estoque e esforço
          de consolidação. Defina o mesmo recorte para comparar depois da implantação. A <a href="/calculadora-de-oee">calculadora de OEE</a> pode ajudar a entender perdas
          de uma máquina, mas não substitui o desenho do fluxo completo.
        </p>
        <p>
          A Origami Lab trabalha com <a href="/desenvolvimento-de-software">desenvolvimento de software sob medida</a> e integração da operação. A avaliação pode levar a
          melhorar o módulo já existente, integrar uma solução especializada ou construir uma parte específica ao redor do ERP. A escolha vem do processo e das lacunas
          encontradas, não da obrigação de implantar um MES novo.
        </p>

        <h2 id="fontes">Fontes e referências</h2>
        <p>Referências de definição e integração consultadas em 18/11/2026. Os critérios de avaliação e o roteiro acima são uma orientação da Origami Lab.</p>
        <ul>
          <li><a href={FONTE_SAP} target="_blank" rel="noopener">SAP: o que é um sistema de execução da manufatura.</a></li>
          <li><a href={FONTE_MICROSOFT} target="_blank" rel="noopener">Microsoft Learn: integração com sistemas MES de terceiros.</a></li>
        </ul>
      </Documento>
      <ChamadaDaOrigami frente="producao" pagina={CAMINHO} />
      <Perguntas prefixo="mes-erp" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas leituras={[
        { href: "/integracao-erp-chao-de-fabrica", titulo: "Integração do ERP com a produção", texto: "Os dados que precisam subir e descer entre gestão e execução." },
        { href: "/planejamento-de-producao", titulo: "Planejamento e controle da produção", texto: "Capacidade, sequência e prioridades para uma programação confiável." },
        { href: "/apontamento-de-producao", titulo: "Apontamento de produção", texto: "Como fazer a informação nascer no lugar onde o trabalho acontece." },
        { href: "/diagnostico-de-modernizacao", titulo: "Diagnóstico de modernização", texto: "Organize os sinais de integração, dados e processos da sua operação." },
      ]} />
      <ChamadaFinal titulo="Qual informação falta entre o ERP e a produção?" lead="Leve uma ordem real para a conversa. A partir do fluxo e das exceções, dá para avaliar o que configurar, integrar ou desenvolver." whatsapp="Olá! Li o guia MES e ERP e quero avaliar a integração com a produção da minha empresa." />
    </PaginaDeConteudo>
  );
}
