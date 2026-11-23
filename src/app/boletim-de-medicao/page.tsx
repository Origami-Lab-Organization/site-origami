import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { SITE } from "@/conteudo/paginas";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/boletim-de-medicao";
const TITULO = "Boletim de medição: modelo e como fazer a medição de obra";
const DESCRICAO = "O que o boletim de medição contém, modelo de colunas, passo a passo, regras da Lei 14.133 e como acompanhar a margem da obra durante o contrato.";
const LEI_14133 = "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm";
const CASE = "/cases/prumo-engenharia";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é boletim de medição?",
    resposta: "É o documento que apura, item a item da planilha contratual, quanto foi executado no período, o acumulado, o saldo e o valor a faturar. Ele passa pela aprovação do cliente ou do fiscal e é a base da nota fiscal de uma obra ou de um serviço medido. Cada quantidade precisa de uma evidência de campo.",
  },
  {
    pergunta: "Qual a diferença entre boletim de medição e RDO?",
    resposta: "O RDO, relatório diário de obra, registra o dia: efetivo, equipamentos, atividades, ocorrências e paralisações. O boletim consolida as quantidades do período por item do contrato para faturar. O RDO é uma das evidências do boletim, e uma diferença entre os dois que ninguém explica é motivo de glosa.",
  },
  {
    pergunta: "Com que frequência a medição de obra é feita?",
    resposta: "A frequência é definida no contrato. Nos contratos de obras e serviços de engenharia regidos pela Lei 14.133/2021, a medição é mensal sempre que compatível com o regime de execução (art. 92, § 5º). Em contratos privados, pode ser quinzenal, mensal ou por etapa concluída, conforme o acordado.",
  },
  {
    pergunta: "O que é glosa na medição e como reduzir?",
    resposta: "Glosa é a parte da medição que o cliente ou o fiscal não aceita, por falta de evidência, divergência de quantidade ou serviço fora do contrato. Para reduzir, ligue cada linha do boletim a um registro de campo, confira com o RDO antes de enviar e faça uma pré-medição com quem aprova. Toda glosa precisa de motivo, responsável e data para ser reapresentada.",
  },
  {
    pergunta: "Dá para fazer boletim de medição no Excel?",
    resposta: "Dá, e para poucos contratos com o mesmo formato a planilha costuma bastar. Proteja as fórmulas, numere as versões por período e guarde as evidências organizadas por data e item. A planilha deixa de bastar quando cada cliente pede um formato, as quantidades são digitadas de novo a partir do campo e o custo da obra fica em outro sistema.",
  },
  {
    pergunta: "Como saber a margem de uma obra antes do fim?",
    resposta: "Compare, a cada período de medição, o valor medido com o custo apropriado na mesma frente ou item. Para isso, horas de equipe, horas de equipamento, materiais e subcontratados precisam chegar com a frente onde foram consumidos. Quando o custo só é rateado no fechamento, a margem só aparece no encerramento do contrato.",
  },
  {
    pergunta: "A Origami Lab atende empresas de engenharia e obras?",
    resposta: "A Origami Lab tem base em Formiga, Minas Gerais, e atende empresas de engenharia e manutenção no estado e em outras regiões do Brasil com software sob medida e integração com o ERP. A Prumo Engenharia é cliente; o case publicado trata da intranet entre obra e administrativo. O escopo de um sistema de medição é avaliado com engenharia, financeiro e TI antes da proposta.",
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
    headline: "Boletim de medição: do serviço executado à margem da obra",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    image: `${SITE}/assets/og-cover.jpg`,
    citation: [LEI_14133],
    about: ["Boletim de medição", "Medição de obras e serviços", "Controle de custos de obras", "Margem por obra", "Lei 14.133/2021"],
  },
});

const SUMARIO = [
  { id: "o-que-e", rotulo: "O que é o boletim" },
  { id: "modelo", rotulo: "Modelo de colunas" },
  { id: "passo-a-passo", rotulo: "Como fazer a medição" },
  { id: "ciclo", rotulo: "Da medição ao recebimento" },
  { id: "erros", rotulo: "Erros que viram glosa" },
  { id: "margem", rotulo: "Medição e margem da obra" },
  { id: "obras-publicas", rotulo: "Obras e serviços públicos" },
  { id: "escolha", rotulo: "Planilha, sistema ou sob medida" },
  { id: "erp", rotulo: "Integração com o ERP" },
  { id: "piloto", rotulo: "Comece por um contrato" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaBoletimDeMedicao() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: TITULO }]}
      rotulo="Engenharia e obras"
      titulo={<>Boletim de medição: <em className="ol-em">do serviço executado à margem da obra</em></>}
      lead={
        <>
          O boletim de medição registra quanto de cada item do contrato foi executado no período, a que preço e quanto ainda falta. É ele que autoriza o faturamento de
          uma obra ou serviço medido, depois da <strong>aprovação do cliente ou do fiscal</strong>. Quando o valor medido é comparado ao custo apropriado a cada período,
          a margem do contrato aparece durante a obra, e não só no encerramento.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href={FORMULARIO}>Conversar sobre meus contratos <Seta /></a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#modelo">Ver o modelo de colunas</a>
        </>
      }
      meta="Por Origami Lab · Formiga, Minas Gerais · Atualizado em 23/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="o-que-e">O que é o boletim de medição</h2>
        <p>
          Em contrato de obra ou de serviço medido, a contratada recebe pelo que executou e comprovou, item a item, em cada período. O boletim de medição é o registro
          dessa apuração. Ele serve a três áreas: a engenharia que mede, o cliente que aprova e o financeiro que fatura.
        </p>
        <p>
          Na manutenção industrial e nos serviços para mineração e siderurgia, o mesmo instrumento aparece como folha de medição, planilha de medição ou relatório de
          serviços medidos. O princípio não muda: o que entra no boletim precisa ter origem no campo e caber no contrato.
        </p>
        <QuadroDeFatos titulo="Termos que aparecem em toda medição" itens={[
          { termo: "Planilha contratual", definicao: "Itens com unidade, quantidade e preço unitário acordados. Em obra, costuma seguir a EAP, a estrutura analítica do projeto." },
          { termo: "Período de medição", definicao: "Intervalo entre duas apurações, definido no contrato: quinzenal, mensal ou por etapa." },
          { termo: "Acumulado e saldo", definicao: "O que já foi medido desde o início e o que ainda resta de cada item." },
          { termo: "Glosa", definicao: "Parte da medição que o cliente ou o fiscal não aceita, por falta de evidência, divergência ou serviço fora do escopo." },
          { termo: "Aditivo", definicao: "Alteração formal do contrato que inclui item ou muda quantidade, preço ou prazo." },
        ]} />

        <h2 id="modelo">Modelo de boletim de medição: as colunas que não podem faltar</h2>
        <p>Um modelo de boletim de medição em Excel funciona quando estas colunas existem e as fórmulas estão protegidas. A terceira coluna diz o que conferir antes de enviar.</p>
        <Tabela cabecalho={["Coluna", "O que registra", "Regra de conferência"]} linhas={[
          ["Item ou código da EAP", "Identificação do item na planilha contratual.", "Igual ao contrato e aos aditivos. Item novo só entra com aditivo aprovado."],
          ["Descrição e unidade", "Serviço e unidade de medida: m³, m², t, h, unidade, verba.", "A unidade do contrato, sem conversão por conta própria."],
          ["Quantidade contratada", "Quantidade vigente, já com os aditivos.", "Original mais alterações aprovadas."],
          ["Medido no período", "Quantidade executada e comprovada neste período.", "Tem evidência: RDO, foto, levantamento, ticket de balança, folha de horas."],
          ["Acumulado anterior e atual", "O que já foi medido e o total com este período.", "Atual é igual ao anterior mais o período."],
          ["Saldo", "Quantidade contratada menos o acumulado atual.", "Não fica negativo. Se a execução passa do contratado, o aditivo vem antes da medição."],
          ["Preço unitário", "Preço do contrato, com reajuste quando previsto.", "Mesma data-base e mesmo índice do contrato."],
          ["Valor do período", "Medido no período vezes o preço unitário.", "O total do boletim bate com a nota fiscal."],
          ["Glosa", "Quantidade ou valor não aceito, com o motivo.", "Motivo escrito e data de reapresentação."],
          ["Evidência e aprovação", "Referência ao RDO, fotos, croqui e quem aprovou.", "Aprovador, data e número da versão do boletim."],
        ]} />
        <Nota>
          <strong>Exemplo ilustrativo:</strong> um item de escavação contratado em 1.000 m³, com 620 m³ acumulados até o mês anterior e 180 m³ medidos agora, fica com
          800 m³ acumulados e saldo de 200 m³. Se a frente estima que ainda faltam 350 m³, o problema não está no boletim. É um aditivo de quantidade a negociar antes de
          a execução passar do contratado.
        </Nota>

        <h2 id="passo-a-passo">Como fazer a medição de obra, passo a passo</h2>
        <ol>
          <li><strong>Feche o período.</strong> Defina a data de corte e congele os registros de campo daquele intervalo.</li>
          <li><strong>Levante as quantidades.</strong> Some o que o RDO e os apontamentos registram por item. Quando o item pede topografia, pesagem ou contagem, use esse documento.</li>
          <li><strong>Confira com o contrato vigente.</strong> Item, unidade e preço precisam existir na planilha e nos aditivos. Serviço sem item vai para a lista de pleitos, não para o boletim.</li>
          <li><strong>Ligue a evidência a cada linha.</strong> Foto, croqui, ticket, folha de horas ou relatório que mostre aquela quantidade.</li>
          <li><strong>Faça a pré-medição.</strong> Uma conferência com o fiscal ou o gestor do contrato antes do envio evita descobrir a divergência depois da nota.</li>
          <li><strong>Emita a versão para aprovação.</strong> Numere a versão, registre quem aprovou e guarde o histórico de alterações.</li>
          <li><strong>Libere o faturamento.</strong> A nota sai com o valor aprovado, e cada glosa vira uma pendência com dono.</li>
        </ol>

        <h2 id="ciclo">O ciclo: medição, aprovação, faturamento e recebimento</h2>
        <p>Em contrato medido, o dinheiro entra depois de quatro etapas. Cada uma tem um responsável, e o atraso em qualquer uma empurra o recebimento.</p>
        <Tabela cabecalho={["Etapa", "Quem faz", "O que costuma atrasar"]} linhas={[
          ["Medição", "Engenharia de campo e planejamento da contratada.", "Apontamento atrasado, RDO incompleto, quantidade sem levantamento."],
          ["Aprovação", "Fiscal, gestor do contrato ou engenharia do cliente.", "Divergência de quantidade, falta de evidência, aditivo em discussão."],
          ["Faturamento", "Financeiro ou faturamento da contratada.", "Nota emitida sobre versão diferente da aprovada, retenções, dados fiscais."],
          ["Recebimento", "Contas a pagar do cliente.", "Prazo contratual de pagamento e conferência da nota com o boletim aprovado."],
        ]} />
        <p>Acompanhe o ciclo por contrato com duas datas por etapa, entrada e saída. Assim fica claro se o atraso está no campo, na aprovação do cliente ou no faturamento.</p>

        <h2 id="erros">Erros que viram glosa e retrabalho</h2>
        <ul>
          <li><strong>Medir sem evidência.</strong> Quantidade sem foto, levantamento ou registro de campo depende de confiança, e o fiscal pode recusar.</li>
          <li>
            <strong>Divergência com o RDO.</strong> Se o boletim mede mais do que os diários do período mostram, a diferença precisa de explicação antes do envio. O guia do{" "}
            <a href="/rdo-diario-de-obra">RDO, relatório diário de obra</a>, mostra o que registrar no dia para isso não acontecer.
          </li>
          <li><strong>Aditivo não registrado.</strong> Serviço extra sem aditivo aprovado não tem item nem preço. Medir em outro item para compensar cria um problema maior na auditoria.</li>
          <li><strong>Planilha copiada do mês anterior.</strong> Fórmula quebrada, acumulado digitado à mão e linha duplicada passam despercebidos quando cada mês nasce de uma cópia.</li>
          <li><strong>Glosa sem dono.</strong> A parte não aceita precisa de motivo, responsável e data de reapresentação, ou se perde entre um mês e outro.</li>
        </ul>

        <h2 id="margem">Medição e margem: acompanhe durante a obra</h2>
        <p>
          O valor medido é a receita do contrato no período. O custo apropriado é o que a obra consumiu para executar aquela quantidade: mão de obra, equipamentos,
          materiais, subcontratados e despesas da frente. A margem só aparece no fim quando essas duas contas vivem em lugares diferentes e se encontram no fechamento.
        </p>
        <Tabela cabecalho={["Comparação no mesmo período de corte", "O que revela"]} linhas={[
          ["Valor medido x custo apropriado, por frente ou item", "A margem do período onde ela está sendo feita ou perdida."],
          ["Quantidade executada x quantidade medida", "Serviço feito e ainda não medido, ou medido sem execução."],
          ["Custo unitário realizado x preço unitário do contrato", "Itens que perdem dinheiro a cada unidade executada."],
          ["Saldo do contrato x quantidade que ainda falta", "Aditivo a negociar antes de a quantidade estourar."],
        ]} />
        <p>
          Essa conta depende de custo apropriado na mesma estrutura da medição. Se as horas de equipe e de equipamento chegam por frente de serviço, pelo RDO ou pelo{" "}
          <a href="/apontamento-de-producao">apontamento de produção</a>, a apropriação deixa de ser rateio no fim do mês. O custo contábil fechado no ERP continua necessário,
          mas não responde sozinho qual frente está consumindo a margem.
        </p>

        <h2 id="obras-publicas">Medição em obras e serviços públicos</h2>
        <p>
          Nos contratos regidos pela <a href={LEI_14133} target="_blank" rel="noopener">Lei 14.133/2021</a>, a medição segue regras próprias. Os pontos abaixo foram
          conferidos no texto publicado no Planalto em 23/11/2026.
        </p>
        <ul>
          <li><strong>Art. 92, VI e § 5º.</strong> O contrato traz os critérios e a periodicidade da medição, quando for o caso, e o prazo para liquidação e pagamento. Em obras e serviços de engenharia, a medição é mensal sempre que compatível com o regime de execução.</li>
          <li><strong>Art. 46, § 9º.</strong> Na empreitada por preço global, na empreitada integral e nas contratações por tarefa, integrada e semi-integrada, medição e pagamento seguem etapas do cronograma físico-financeiro vinculadas a metas de resultado, e não quantidades de itens unitários.</li>
          <li><strong>Art. 117.</strong> A execução é acompanhada e fiscalizada por fiscais do contrato. O § 1º manda o fiscal anotar em registro próprio todas as ocorrências da execução.</li>
          <li><strong>Art. 140, I.</strong> Obra e serviço são recebidos provisoriamente pelo responsável pelo acompanhamento e fiscalização, e definitivamente por servidor ou comissão designada, ambos mediante termo detalhado.</li>
          <li><strong>Arts. 141 e 145.</strong> Os pagamentos seguem ordem cronológica para cada fonte de recursos, e o pagamento antecipado de parcelas de obra ou serviço não é permitido, salvo nas exceções da própria lei.</li>
        </ul>
        <p>
          O boletim por quantidade descrito neste guia é típico da empreitada por preço unitário e dos contratos privados que adotam esse critério. Nos demais regimes,
          confira no contrato como cada etapa é medida. Nos convênios e contratos de repasse com a União no regime simplificado do art. 184-A, o acompanhamento verifica
          boletins de medição e fotos georreferenciadas registradas no Transferegov, além de vistorias.
        </p>
        <Nota>
          Este resumo não substitui o edital, o contrato e o regulamento do órgão. Prazos e métodos de recebimento são definidos em regulamento ou no contrato
          (art. 140, § 3º). Confirme sempre no documento do seu contrato.
        </Nota>

        <h2 id="escolha">Quando a planilha basta, quando um sistema resolve, quando vale sob medida</h2>
        <p>A escolha depende de quantos contratos rodam ao mesmo tempo, de quanto as regras mudam entre clientes e de quantas vezes a mesma quantidade é digitada até virar nota.</p>
        <Tabela cabecalho={["Situação", "O que costuma resolver"]} linhas={[
          ["Poucos contratos, mesmo formato de boletim, uma pessoa responsável pela medição.", "Planilha bem montada, com fórmulas protegidas, versão por período e evidências em pastas por data e item."],
          ["Obras com orçamento padrão, medição por quantidade e uma equipe que aceita o fluxo do sistema.", "Software de gestão de obras de mercado, com orçamento, diário e medição. Avalie a integração com o seu ERP antes de contratar."],
          ["Cada cliente exige um formato, critérios e evidências próprios, aprovação em várias etapas, e a medição precisa chegar ao custo e ao faturamento no ERP.", "Software sob medida integrado ao ERP, construído em volta das regras de cada contrato."],
        ]} />
        <p>
          O sob medida se justifica quando a regra é da sua empresa ou do seu contrato e precisa conversar com custo e faturamento. Se um produto pronto cobre o fluxo com
          pouca adaptação, ele é o caminho mais simples. Os critérios para essa comparação estão no guia sobre{" "}
          <a href="/software-sob-medida">quando vale desenvolver software sob medida</a>.
        </p>

        <h2 id="erp">Integração com o ERP: o que sobe, o que desce</h2>
        <p>O sistema de medição não deve criar outra fonte de contrato, de preço ou de faturamento. Antes de desenhar qualquer tela, combine qual sistema é dono de cada dado.</p>
        <Tabela cabecalho={["Dado", "Dono", "Sentido"]} linhas={[
          ["Contrato, cliente, itens, preços e aditivos", "ERP ou sistema comercial", "Desce para a medição."],
          ["Obras e centros de custo", "ERP", "Desce para o campo e para a apropriação."],
          ["Quantidades executadas, horas e evidências", "Registro de campo: RDO e apontamento", "Sobe para a medição."],
          ["Boletim aprovado", "Sistema de medição", "Sobe para o ERP como base do faturamento."],
          ["Nota fiscal, títulos e recebimento", "ERP", "Volta para o acompanhamento do contrato."],
        ]} />
        <p>
          Tratamento de falha faz parte do escopo: boletim que não subiu, nota cancelada, aditivo aprovado no ERP depois do corte. Veja como desenhar essas trocas no guia
          de <a href="/integracao-de-sistemas">integração de sistemas</a>.
        </p>

        <h2 id="piloto">Comece por um contrato, com linha de base</h2>
        <p>
          Escolha um contrato com medição recorrente e um responsável disposto a conferir. Antes de mudar qualquer coisa, registre a situação atual: dias entre o corte e o
          envio do boletim, dias até a aprovação, valor glosado por período, horas gastas montando o boletim e diferença entre a margem prevista e a apurada.
        </p>
        <p>
          Rode alguns ciclos com o processo novo e compare com essa linha de base. Não existe percentual de ganho que valha para qualquer contrato. O piloto mostra o efeito
          no seu e o esforço para manter.
        </p>
        <p>
          É assim que o <a href="/desenvolvimento-de-software">Studio de Produto da Origami Lab</a> conduz um projeto: a primeira versão entra em uso em até um mês,
          integrada ao ERP, e cada fase seguinte tem linha de base, meta e a sua decisão de continuar. O código e os dados ficam com a sua empresa.
        </p>
        <p>
          Na Prumo Engenharia, de engenharia e manutenção, o apontamento de campo foi digitalizado: o que acontece na frente de serviço chega à diretoria. É esse tipo de
          registro, feito uma vez no campo, que dá origem e evidência à medição. O <a href={CASE}>case publicado</a> conta outro projeto com a mesma empresa, a intranet
          que virou o canal único entre obra e administrativo.
        </p>
      </Documento>

      <ChamadaDaOrigami frente="sistemas" pagina={CAMINHO} />
      <Perguntas prefixo="boletim-medicao" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas leituras={[
        { href: "/rdo-diario-de-obra", titulo: "RDO: relatório diário de obra", texto: "O que registrar no dia para a medição ter evidência e o custo ter origem." },
        { href: "/apontamento-de-producao", titulo: "Apontamento de produção", texto: "Como fazer o dado nascer uma vez, onde o trabalho acontece." },
        { href: "/integracao-de-sistemas", titulo: "Integração de sistemas", texto: "Como ligar campo, medição e ERP sem redigitar e sem duplicar faturamento." },
      ]} />
      <ChamadaFinal
        titulo="A margem do seu contrato aparece antes do fim da obra?"
        lead="Traga um boletim real e o caminho que ele faz até a nota. Vamos avaliar o que a planilha e o ERP já atendem e onde integração ou software sob medida resolvem."
        whatsapp="Olá! Li o guia de boletim de medição e quero avaliar a medição e a margem dos meus contratos."
      />
    </PaginaDeConteudo>
  );
}
