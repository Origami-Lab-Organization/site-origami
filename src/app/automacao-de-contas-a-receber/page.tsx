import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo } from "@/components/conteudo/PaginaDeConteudo";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/automacao-de-contas-a-receber";
const TITULO = "Automação de contas a receber integrada ao ERP";
const DESCRICAO = "Organize títulos, baixas, regras e acompanhamento da carteira. Veja como avaliar a automação de contas a receber com o ERP como fonte do financeiro.";
const CASE = "/cases/cobranca-automatica-whatsapp-retifica-formiguense";
const POLITICA_WHATSAPP = "https://whatsappbusiness.com/policy/";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é automação de contas a receber?",
    resposta: "É usar regras e integrações para acompanhar títulos, vencimentos, baixas, exceções e ações do financeiro sem depender de planilhas ou da memória de uma pessoa. Pode incluir alertas internos, preparação de contatos e indicadores. O escopo deve preservar o sistema responsável pelo saldo e pelo registro do dinheiro.",
  },
  {
    pergunta: "A automação substitui o ERP?",
    resposta: "Não precisa substituir. Uma camada integrada pode usar os títulos e as baixas do ERP para organizar o trabalho e produzir indicadores. É necessário confirmar as interfaces disponíveis e definir quais operações são somente de leitura e quais exigem escrita, autorização e conferência.",
  },
  {
    pergunta: "Como evitar cobrar um título que já foi pago?",
    resposta: "O fluxo deve conferir o saldo e a situação atual antes de executar uma ação, respeitar pausas e acordos e ter regra para dados desatualizados. Também precisa tratar o intervalo entre o pagamento e a baixa no ERP. Quando há dúvida ou divergência, a ação fica pendente de conferência pelo financeiro.",
  },
  {
    pergunta: "Preciso de inteligência artificial para automatizar o financeiro?",
    resposta: "Não. Selecionar títulos por vencimento, calcular indicadores e aplicar uma sequência de ações pode ser feito com regras determinísticas. IA pode ser avaliada para tarefas de linguagem, como organizar respostas, sem receber liberdade para alterar saldos, conceder descontos ou assumir compromissos fora das permissões definidas.",
  },
  {
    pergunta: "Posso enviar qualquer cobrança automaticamente pelo WhatsApp?",
    resposta: "Não se deve presumir essa permissão. A política atual do WhatsApp Business lista debt collection entre as atividades proibidas e também define requisitos de autorização de contato e modelos de mensagem. O uso concreto precisa ser verificado nas regras vigentes antes de escolher o canal; um template aprovado não resolve sozinho a elegibilidade da atividade.",
  },
  {
    pergunta: "O que é necessário para orçar o projeto?",
    resposta: "Nome e versão do ERP, formas de acesso aos títulos e baixas, volume e qualidade da carteira, regras do financeiro, canais a avaliar e tarefas que exigem aprovação. O orçamento deve incluir integração, testes com dados representativos, implantação, treinamento e sustentação do processo.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [{ nome: "Guias", caminho: "/guias" }, { nome: "Contas a receber", caminho: CAMINHO }],
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
    citation: [`https://www.origamilab.com.br${CASE}`, POLITICA_WHATSAPP],
  },
});

const SUMARIO = [
  { id: "o-que-automatizar", rotulo: "O que automatizar" },
  { id: "fluxo", rotulo: "Do título à baixa" },
  { id: "regras", rotulo: "Regras, régua e IA" },
  { id: "canais", rotulo: "Como escolher os canais" },
  { id: "case", rotulo: "O projeto da Retífica" },
  { id: "implantacao", rotulo: "Como implantar e medir" },
  { id: "proposta", rotulo: "O que levar para a proposta" },
  { id: "fontes", rotulo: "Fontes e limites" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaAutomacaoDeContasAReceber() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: "Contas a receber" }]}
      rotulo="Financeiro e ERP"
      titulo={<>Automação de contas a receber: <em className="ol-em">a carteira sob controle</em></>}
      lead={<>Automatizar contas a receber é fazer vencimentos, baixas, exceções e ações do financeiro seguirem um processo verificável. O ponto de partida é o título correto no ERP: <strong>quem deve, quanto ainda está aberto, o que foi combinado e qual é o próximo passo permitido</strong>. A mensagem ao cliente é apenas uma parte desse fluxo.</>}
      meta="Por Origami Lab · Publicado em 18/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="o-que-automatizar">O que automatizar antes de pensar no disparo de mensagens</h2>
        <p>
          Se cada analista mantém uma planilha diferente, a equipe perde tempo descobrindo a situação da carteira antes de agir. A primeira entrega pode ser interna:
          reunir títulos e baixas, separar exceções e mostrar o que precisa de conferência. A escolha do canal de contato vem depois, conforme o tipo de comunicação e
          suas regras.
        </p>
        <QuadroDeFatos titulo="Três definições para começar" itens={[
          { termo: "Fonte do saldo", definicao: "Sistema responsável pelo valor em aberto, pelas baixas e pelas alterações financeiras do título." },
          { termo: "Régua", definicao: "Sequência de ações com condições de entrada, pausa e saída, aprovada pelo financeiro." },
          { termo: "Exceção", definicao: "Situação que exige tratamento específico: pagamento não conciliado, contestação, acordo ou contato incorreto." },
        ]} />
        <p>
          Isso vale para indústria, retífica, logística e serviços com recebimentos a prazo. O desenho muda com o contrato e com a carteira; não se deve copiar para todos
          os clientes a mesma frequência, mensagem ou condição de negociação.
        </p>

        <h2 id="fluxo">O fluxo precisa ir do título à baixa</h2>
        <ol>
          <li><strong>Receber os dados:</strong> identificar título, parcela, cliente, vencimento, saldo e situação com a origem e o momento da consulta.</li>
          <li><strong>Conferir a elegibilidade da ação:</strong> aplicar regras de pausa, acordo, contestação, limite de frequência e canal permitido.</li>
          <li><strong>Executar e registrar:</strong> uma tarefa interna ou contato autorizado precisa deixar situação, horário e resultado identificáveis.</li>
          <li><strong>Receber as exceções:</strong> encaminhar respostas e divergências para uma pessoa com contexto do título e do histórico.</li>
          <li><strong>Atualizar pelo financeiro:</strong> acompanhar a baixa e encerrar ações pendentes, respeitando as regras do sistema responsável.</li>
        </ol>
        <p>
          O intervalo entre um pagamento e a baixa importa. Se a informação não está atualizada, a automação deve interromper a ação ou encaminhar a conferência,
          conforme a regra acordada. “Pagamento informado pelo cliente”, “comprovante recebido” e “título liquidado no ERP” são situações diferentes.
        </p>
        <Nota>
          Uma camada de acompanhamento não precisa escrever no ERP para gerar valor. Se o projeto incluir baixa, renegociação ou alteração de vencimento, isso exige
          um escopo adicional de permissões, aprovações e reconciliação. Não transforme uma confirmação de mensagem em confirmação de pagamento.
        </Nota>

        <h2 id="regras">Lembrete, régua e IA resolvem problemas diferentes</h2>
        <Tabela cabecalho={["Recurso", "Para que avaliar", "Controle necessário"]} linhas={[
          ["Alerta interno", "Avisar o financeiro sobre títulos e pendências sem contatar automaticamente o cliente.", "Responsável, prioridade e regra para encerrar a tarefa."],
          ["Ação por vencimento", "Executar uma tarefa em uma data relativa ao título, quando a ação e o canal forem permitidos.", "Conferência do saldo, limite de repetição e registro da execução."],
          ["Régua de acompanhamento", "Organizar várias etapas e as mudanças de situação da carteira.", "Condições claras para entrar, pausar, mudar de etapa e sair."],
          ["Apoio de IA", "Organizar linguagem e classificar respostas para ajudar a equipe.", "Dados mínimos, revisão e proibição de alterar compromissos sem autorização."],
        ]} />
        <p>
          Cálculo de vencimento e prevenção de duplicidade pedem regras previsíveis. Use a avaliação de <a href="/ia-na-industria">IA na operação</a> quando existir uma
          tarefa de linguagem bem definida, com forma de conferir o resultado. O modelo não precisa escolher sozinho quando cobrar ou qual desconto conceder.
        </p>

        <h2 id="canais">Canal de contato é uma decisão do projeto</h2>
        <p>
          Avalie primeiro a finalidade e a permissão para cada ação. A <a href={POLITICA_WHATSAPP} target="_blank" rel="noopener">política do WhatsApp Business</a>,
          consultada em 18/11/2026, inclui <em>debt collection</em> entre atividades proibidas. Também exige autorização de contato e, na plataforma, modelos aprovados para
          iniciar conversas. Não presuma que o uso é permitido por existir uma API ou por um modelo ter sido aprovado.
        </p>
        <p>
          Antes de incluir WhatsApp, e-mail ou outro meio, confirme as regras vigentes e o enquadramento do uso concreto. A automação pode começar por alertas internos e
          organização da carteira enquanto o canal adequado é definido. No caso do WhatsApp, disponibilidade técnica e autorização para a atividade são avaliações distintas.
        </p>

        <h2 id="case">O que foi publicado sobre a Retífica Formiguense</h2>
        <p>
          No <a href={CASE}>case da Retífica Formiguense</a>, a Origami Lab descreve o Retipay: leitura dos títulos do ERP, nove marcos ancorados no vencimento e
          acompanhamento da carteira em um painel. A política era definida pelo financeiro; acordos, abonos e pausas ficavam associados a responsável e motivo.
        </p>
        <p>
          O projeto publicado usava o ERP como fonte financeira, sem escrever nele, e começava em modo de simulação antes de ativar envios por decisão do gestor.
          Essa experiência mostra decisões de integração e controle. O relato histórico do canal usado não comprova elegibilidade para um novo uso sob políticas atuais;
          cada implantação exige essa verificação.
        </p>
        <p>
          Os resultados pertencem ao recorte descrito no case e não são previsão para outra carteira. O diagnóstico de um projeto novo precisa considerar situação de
          partida, qualidade cadastral, perfil dos títulos e capacidade de tratamento pelo financeiro.
        </p>

        <h2 id="implantacao">Como implantar e medir sem perder a conferência</h2>
        <p>
          Comece com dados de teste e depois com uma carteira delimitada, sem executar ações externas durante a conferência. Compare o que a régua propõe com o que a
          equipe faria: título pago, acordo ativo, parcela renegociada, cliente com vários títulos, reenvio após falha e contato inválido devem fazer parte da amostra.
        </p>
        <p>
          Combine os indicadores antes de ativar o processo. Use o mesmo período e o mesmo grupo de títulos para comparar; pagamentos que ocorreriam de qualquer forma
          não podem ser atribuídos automaticamente a uma mensagem.
        </p>
        <ul>
          <li><strong>Qualidade:</strong> títulos com situação divergente, cadastros incompletos e tempo até a baixa ficar disponível.</li>
          <li><strong>Processo:</strong> tarefas pendentes, repetidas, interrompidas e tempo de tratamento das exceções.</li>
          <li><strong>Carteira:</strong> saldo em aberto por faixa de atraso, evolução das baixas e acordos no mesmo recorte.</li>
          <li><strong>Canal autorizado:</strong> ações aceitas, falhas, interrupções solicitadas e situações que pedem atendimento humano.</li>
        </ul>

        <h2 id="proposta">O que levar para uma proposta de automação</h2>
        <p>
          Separe o nome e a versão do ERP, uma amostra sem dados pessoais desnecessários, as regras atuais do financeiro e os relatórios que a diretoria usa.
          Liste onde hoje há exportação, digitação repetida ou decisão sem histórico. Registre também quem pode aprovar acordos e como as baixas chegam ao sistema.
        </p>
        <p>
          A Origami Lab avalia esses fluxos no <a href="/desenvolvimento-de-software">desenvolvimento de software sob medida</a> e na{" "}
          <a href="/integracao-de-sistemas">integração de sistemas</a>. A proposta deve mostrar o que será automatizado, as ações que continuam com a equipe e as
          condições necessárias para usar cada canal.
        </p>

        <h2 id="fontes">Fontes e limites deste guia</h2>
        <ul>
          <li><a href={CASE}>Origami Lab: projeto publicado da Retífica Formiguense.</a> Fonte das decisões descritas no case, sem generalizar seus resultados.</li>
          <li><a href={POLITICA_WHATSAPP} target="_blank" rel="noopener">WhatsApp Business Messaging Policy.</a> Fonte das condições e restrições do canal, consultada em 18/11/2026.</li>
        </ul>
        <p>O roteiro de avaliação acima orienta o desenho da operação. Condições comerciais, contábeis e de uso dos canais precisam ser verificadas no escopo de cada projeto.</p>
      </Documento>
      <ChamadaDaOrigami frente="sistemas" pagina={CAMINHO} />
      <Perguntas prefixo="contas-receber" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas leituras={[
        { href: CASE, titulo: "Case Retífica Formiguense", texto: "O problema, a integração com o ERP e as decisões do projeto publicado." },
        { href: "/integracao-de-sistemas", titulo: "Integração de sistemas", texto: "Como fazer o dado circular e tratar falhas sem criar outra fonte de saldo." },
        { href: "/automacao-de-processos-industriais", titulo: "O que automatizar primeiro", texto: "Critérios para escolher processos e reduzir trabalho repetido." },
        { href: "/diagnostico-de-modernizacao", titulo: "Diagnóstico de modernização", texto: "Mapeie sinais de retrabalho, dados isolados e dependência de planilhas." },
      ]} />
      <ChamadaFinal titulo="Sua equipe confere a carteira ou reconstrói a carteira?" lead="Vamos entender como títulos, baixas e exceções circulam hoje e avaliar onde a integração pode reduzir o trabalho manual." whatsapp="Olá! Li o guia de automação de contas a receber e quero avaliar a integração do financeiro com o ERP." />
    </PaginaDeConteudo>
  );
}
