import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { SITE } from "@/conteudo/paginas";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/rdo-diario-de-obra";
const TITULO = "RDO, relatório diário de obra: modelo e o que registrar";
const DESCRICAO = "Modelo de RDO e o que registrar no diário de obra, por que ele é prova, o que mudou no Livro de Ordem do Confea e como o RDO digital alimenta a medição.";
const LEI_14133 = "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm";
const CONFEA_1140 = "https://normativos.confea.org.br/Ementas/Visualizar?id=78133";
const CONFEA_1094 = "https://normativos.confea.org.br/Ementas/Visualizar?id=64183";
const CONFEA_NOTICIA = "https://www.confea.org.br/plenario-revoga-resolucao-que-exigia-o-livro-de-ordem";
const CASE = "/cases/prumo-engenharia";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é RDO?",
    resposta: "RDO é a sigla de relatório diário de obra, também chamado de registro diário de obra ou diário de obra. É o registro, feito no próprio dia, do clima, do efetivo, dos equipamentos, das atividades e quantidades, das ocorrências e das paralisações de uma obra ou serviço, com fotos e assinaturas. Serve de evidência para medição, pleitos e custo.",
  },
  {
    pergunta: "O que não pode faltar em um RDO?",
    resposta: "Identificação da obra, da frente e da data, com número sequencial; clima; efetivo por função; equipamentos com horas trabalhadas e paradas; atividades com local e quantidade; ocorrências e paralisações com causa; visitas e orientações recebidas; fotos; e assinatura das duas partes. Sem a frente de serviço, o registro não serve para apropriar custo.",
  },
  {
    pergunta: "O Livro de Ordem do Confea ainda é obrigatório?",
    resposta: "A Resolução nº 1.094/2017 do Confea, que tornava o Livro de Ordem obrigatório para emissão de Certidão de Acervo Técnico, foi revogada pela Resolução nº 1.140/2023, publicada no Diário Oficial em 26/12/2023. A exigência de manter diário de obra pode vir do contrato, do edital ou do cliente. Confira cada caso e o Crea do seu estado.",
  },
  {
    pergunta: "Como o RDO ajuda na medição da obra?",
    resposta: "As quantidades executadas registradas no RDO, somadas no período por item do contrato, são a base do boletim de medição. Quando o fiscal confere o boletim, compara com os diários e as fotos do período. Um RDO completo e assinado reduz a discussão sobre quantidade e sustenta a defesa quando há glosa.",
  },
  {
    pergunta: "Diário de obra digital vale como documento?",
    resposta: "O que dá força ao registro digital é o mesmo que dá força ao papel: ser feito no dia, identificar quem preencheu e quem aprovou e não poder ser alterado sem deixar rastro. Antes de abandonar o papel, combine com o cliente o formato aceito e confira se o contrato pede algum tipo específico de assinatura.",
  },
  {
    pergunta: "O RDO digital funciona sem internet no canteiro?",
    resposta: "Precisa funcionar. O aplicativo deve permitir preencher, fotografar e salvar sem sinal e sincronizar quando o aparelho encontrar conexão, sem duplicar registros. Teste isso no piloto, na frente de serviço com o pior sinal da obra.",
  },
  {
    pergunta: "A Origami Lab atende empresas de engenharia que querem digitalizar o RDO?",
    resposta: "Sim. A Origami Lab, com base em Formiga, Minas Gerais, desenvolve software sob medida para empresas de engenharia e manutenção, em Minas e em outras regiões, e pode construir o registro de campo integrado à medição, ao custo e ao ERP. Quando um aplicativo pronto atende às regras dos seus contratos, a recomendação é usá-lo. O escopo é definido depois de entender as obras, os clientes e o ERP.",
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
    headline: "RDO, relatório diário de obra: o registro que vira prova, medição e custo",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    image: `${SITE}/assets/og-cover.jpg`,
    citation: [LEI_14133, CONFEA_1140, CONFEA_1094, CONFEA_NOTICIA],
    about: ["Relatório diário de obra", "Diário de obra digital", "Livro de Ordem", "Medição de obras", "Custo de obras"],
  },
});

const SUMARIO = [
  { id: "o-que-e", rotulo: "O que é o RDO" },
  { id: "modelo", rotulo: "Modelo: o que registrar" },
  { id: "prova", rotulo: "Por que o RDO é prova" },
  { id: "obrigatoriedade", rotulo: "É obrigatório?" },
  { id: "digital", rotulo: "Papel ou digital" },
  { id: "medicao-e-custo", rotulo: "Do RDO à medição e ao custo" },
  { id: "escolha", rotulo: "Planilha, aplicativo ou sob medida" },
  { id: "erp", rotulo: "Integração com o ERP" },
  { id: "piloto", rotulo: "Comece por uma obra" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaRdoDiarioDeObra() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: TITULO }]}
      rotulo="Engenharia e obras"
      titulo={<>RDO, relatório diário de obra: <em className="ol-em">o registro que vira prova, medição e custo</em></>}
      lead={
        <>
          O RDO, relatório diário de obra, registra o que aconteceu em cada dia de uma obra ou serviço: <strong>clima, efetivo, equipamentos, atividades e quantidades,
          ocorrências e paralisações</strong>, com fotos e assinaturas. Feito no dia e aceito pelas duas partes, ele sustenta a medição, os pleitos e a defesa em uma glosa.
          Quando separa as horas de equipe e equipamento por frente de serviço, também é a origem do custo e da margem de cada obra.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href={FORMULARIO}>Conversar sobre minhas obras <Seta /></a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#modelo">Ver o modelo de RDO</a>
        </>
      }
      meta="Por Origami Lab · Formiga, Minas Gerais · Atualizado em 23/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="o-que-e">O que é o RDO</h2>
        <p>
          Relatório diário de obra, registro diário de obra e diário de obra são nomes do mesmo instrumento. Ele deixa por escrito, no dia, o que a equipe fez, com quem,
          com quais equipamentos e o que impediu o trabalho. Na manutenção industrial e nos serviços para mineração e siderurgia, aparece também como relatório diário de
          serviço ou de turno.
        </p>
        <p>
          O RDO não é o <a href="/boletim-de-medicao">boletim de medição</a>. O RDO conta o dia; o boletim soma o período por item do contrato para faturar. Um alimenta o
          outro, e os dois precisam contar a mesma história.
        </p>

        <h2 id="modelo">Modelo de RDO: o que registrar todo dia</h2>
        <Tabela cabecalho={["Campo", "O que anotar", "Por que importa"]} linhas={[
          ["Identificação", "Obra, contrato, frente de serviço, data, turno e número sequencial.", "Com numeração, um dia sem relatório aparece."],
          ["Clima e condições", "Tempo em cada período do dia e condição do acesso ou do terreno.", "Explica paralisação e queda de produção."],
          ["Efetivo", "Pessoas por função, próprias e subcontratadas, com horas trabalhadas.", "Base do custo de mão de obra e da conferência do subcontratado."],
          ["Equipamentos", "Equipamento, horas trabalhadas, horas paradas e motivo.", "Separa hora produtiva de hora parada no custo."],
          ["Atividades e quantidades", "Serviço executado, local, quantidade e item do contrato.", "É a origem da medição."],
          ["Ocorrências", "Acidente, retrabalho, falta de material, interferência, ordem do cliente.", "Fatos que mudam prazo e custo."],
          ["Paralisações", "Início, fim, frente afetada e causa.", "Separa o que é da contratada do que é do cliente."],
          ["Visitas e orientações", "Fiscal, cliente ou responsável técnico, e o que foi orientado.", "Mostra quem pediu o quê, e quando."],
          ["Fotos", "Imagens da frente com data, hora e localização.", "Evidência de quantidade e de condição."],
          ["Assinaturas", "Responsável da contratada e representante do cliente.", "Registro aceito pelas duas partes."],
        ]} />
        <p>
          Um RDO bom é curto e completo. Campo obrigatório demais faz o encarregado preencher no fim da semana, de memória. Campo de menos deixa de fora o fato que você vai
          precisar meses depois, numa negociação de prazo ou de valor.
        </p>
        <Nota>
          A <a href={CONFEA_1094} target="_blank" rel="noopener">Resolução nº 1.094/2017 do Confea</a>, hoje revogada, listava, entre outras, estas informações do Livro
          de Ordem: datas de início e conclusão de cada etapa, relatos das visitas do responsável técnico, acidentes e danos, empresas subcontratadas e interrupções dos
          trabalhos com seus motivos. Mesmo sem a exigência, a lista serve para conferir o seu modelo.
        </Nota>

        <h2 id="prova">Por que o RDO vale como prova</h2>
        <p>
          Contrato de obra muda durante a execução: chuva, frente liberada com atraso, projeto revisado, material do cliente que não chegou. Quem tem o registro do dia
          mostra a causa e o efeito. Quem não tem, negocia de memória.
        </p>
        <ul>
          <li><strong>Medição.</strong> As quantidades do RDO sustentam o boletim, e o fiscal confere uma coisa contra a outra.</li>
          <li><strong>Pleitos e aditivos.</strong> Horas paradas, efetivo mobilizado sem frente e serviço fora do escopo ficam documentados no dia em que aconteceram.</li>
          <li>
            <strong>Reequilíbrio.</strong> Nos contratos públicos, a <a href={LEI_14133} target="_blank" rel="noopener">Lei 14.133/2021</a> prevê alteração por acordo para
            restabelecer o equilíbrio econômico-financeiro diante de força maior, caso fortuito, fato do príncipe ou fatos imprevisíveis, ou previsíveis de consequências
            incalculáveis, que inviabilizem a execução como pactuada, respeitada a repartição de riscos do contrato (art. 124, II, d). O RDO mostra quando o fato ocorreu e
            o que ele afetou.
          </li>
          <li><strong>Defesa em glosa.</strong> Quando uma quantidade é contestada, o RDO com foto e assinatura do cliente é o primeiro documento a apresentar.</li>
        </ul>
        <p>O registro fica mais difícil de contestar quando é feito no dia, assinado e guardado de forma que qualquer correção deixe rastro.</p>

        <h2 id="obrigatoriedade">O RDO é obrigatório?</h2>
        <p>A obrigação costuma estar no contrato, que define formato, frequência e quem assina. Fora dele, estas são as regras que conferimos nas fontes oficiais em 23/11/2026.</p>
        <QuadroDeFatos titulo="O que dizem o Confea e a Lei 14.133/2021" itens={[
          {
            termo: "Livro de Ordem",
            definicao: <>A Resolução nº 1.094/2017, que tornava o Livro de Ordem obrigatório para emissão da Certidão de Acervo Técnico em obras iniciadas a partir de 2018, foi revogada pela <a href={CONFEA_1140} target="_blank" rel="noopener">Resolução nº 1.140/2023</a>, publicada no DOU em 26/12/2023.</>,
          },
          {
            termo: "Fiscal do contrato público",
            definicao: "Pelo art. 117, § 1º, o fiscal do contrato anota em registro próprio todas as ocorrências da execução e determina o necessário para regularizar faltas ou defeitos.",
          },
          {
            termo: "Paralisação em contrato público",
            definicao: "Pelo art. 115, § 5º, em caso de impedimento, ordem de paralisação ou suspensão, o cronograma é prorrogado automaticamente pelo tempo correspondente, com as circunstâncias anotadas por apostila.",
          },
        ]} />
        <p>
          O registro do fiscal pertence à Administração e não substitui o seu. Manter o RDO da contratada e conferi-lo com o fiscal aproxima as duas versões do mesmo dia.
          Na <a href={CONFEA_NOTICIA} target="_blank" rel="noopener">notícia da revogação</a>, uma conselheira do Confea lembra que os Creas continuam com a atribuição de
          fiscalizar. Para exigências específicas da sua obra, confira o contrato, o edital e o Crea do seu estado.
        </p>

        <h2 id="digital">RDO em papel ou diário de obra digital</h2>
        <Tabela cabecalho={["Ponto", "Papel ou planilha", "RDO digital"]} linhas={[
          ["Quando é preenchido", "Muitas vezes passado a limpo depois, longe da frente.", "No local, durante o turno, com a hora do registro gravada."],
          ["Fotos", "Arquivadas à parte, sem ligação com o relatório.", "Anexadas ao registro, com data, hora e localização gravadas pelo aparelho."],
          ["Assinatura", "Física, depende de o papel chegar ao cliente.", "Aprovação no próprio sistema, com usuário e horário."],
          ["Canteiro sem internet", "Não depende de sinal.", "Precisa funcionar sem conexão e sincronizar depois."],
          ["Soma para medir e custear", "Alguém digita de novo.", "Quantidades e horas já chegam por frente e por item."],
        ]} />
        <p>
          O digital tem exigências próprias: aparelho no campo, cadastro de frentes e itens atualizado e uma regra para corrigir um registro já aprovado sem apagar o original.
          Se o canteiro não tem sinal, funcionar sem conexão é requisito, não detalhe.
        </p>
        <Nota>
          Foto com data e localização ajuda, mas não resolve sozinha. Combine com o cliente, antes de começar a obra, o que ele aceita como evidência para cada tipo de serviço.
        </Nota>

        <h2 id="medicao-e-custo">Do RDO à medição e ao custo da obra</h2>
        <p>O RDO alimenta duas contas. A primeira é a medição: quantidades por item, somadas no período, viram o boletim. A segunda é o custo, montado em três passos.</p>
        <ol>
          <li><strong>Horas por frente.</strong> Efetivo e equipamentos registrados com a frente de serviço onde trabalharam.</li>
          <li><strong>Custo por frente.</strong> Horas valoradas pelo custo de cada função e equipamento, somadas a materiais e subcontratados da mesma frente.</li>
          <li><strong>Margem por obra.</strong> Custo de cada frente comparado ao valor medido dos itens daquela frente no mesmo período.</li>
        </ol>
        <p>
          O ponto fraco costuma ser a frente. Se o RDO registra a equipe da obra sem dizer onde ela trabalhou, o custo vira rateio e a margem por frente desaparece. A lógica é
          a mesma do <a href="/apontamento-de-producao">apontamento de produção</a> na indústria: o dado nasce uma vez, onde o trabalho acontece.
        </p>
        <Nota>
          <strong>Exemplo ilustrativo:</strong> uma equipe e uma escavadeira passam o dia numa frente de drenagem, com parte do turno parada por falta de liberação da área.
          Se o RDO separa horas produtivas e paradas e registra a causa, o custo da parada fica identificado e pode sustentar um pleito. Se registra só dia trabalhado, esse
          custo some dentro da margem.
        </Nota>

        <h2 id="escolha">Quando a planilha basta, quando um aplicativo resolve, quando vale sob medida</h2>
        <Tabela cabecalho={["Situação", "O que costuma resolver"]} linhas={[
          ["Uma ou duas obras, poucos campos e um cliente que aceita PDF assinado.", "Modelo de RDO em planilha ou formulário, com numeração, fotos em pastas por data e assinatura do cliente."],
          ["Várias obras com o mesmo formato, foto e uso sem internet, sem exigência de ligar o RDO ao custo.", "Aplicativo de diário de obra de mercado. Confira a exportação dos dados e o que acontece com eles se você trocar de fornecedor."],
          ["Cada cliente pede um formato e um fluxo de aprovação, e o RDO precisa virar medição e custo por frente no ERP.", "Software sob medida integrado ao ERP, com o RDO como origem das quantidades e das horas."],
        ]} />
        <p>
          A pergunta que decide é se o diário termina nele mesmo ou se precisa alimentar outros sistemas com regras do seu contrato. No primeiro caso, um produto pronto
          resolve. No segundo, vale comparar com o <a href="/software-sob-medida">software sob medida</a>.
        </p>

        <h2 id="erp">Integração com o ERP: quem é dono de cada cadastro</h2>
        <p>No RDO, a maior parte dos cadastros desce de outros sistemas. O que sobe são os fatos do dia.</p>
        <Tabela cabecalho={["Cadastro ou dado", "Dono", "Uso no RDO"]} linhas={[
          ["Obras, contratos e centros de custo", "ERP", "Descem para que cada registro tenha obra e frente."],
          ["Funcionários e funções", "Folha ou RH", "Descem para a lista de efetivo. O RDO não cria funcionário."],
          ["Equipamentos próprios e locados", "ERP ou sistema de manutenção", "Descem com o custo-hora de referência."],
          ["Itens do contrato", "ERP ou sistema de medição", "Descem para ligar cada quantidade a um item."],
          ["Horas, quantidades, ocorrências e fotos", "RDO", "Sobem para a medição, a apropriação de custo e o acompanhamento da obra."],
        ]} />
        <p>
          O RDO registra horas por frente para custo e medição; o controle de jornada segue as regras da folha. Os dois números devem ser conferidos, não fundidos. O guia de{" "}
          <a href="/integracao-de-sistemas">integração de sistemas</a> mostra como tratar falhas e divergências entre fontes.
        </p>

        <h2 id="piloto">Comece por uma obra</h2>
        <p>
          Escolha uma obra ou uma frente com um encarregado disposto a testar e um cliente que aceite aprovar no sistema. Antes de mudar, registre a linha de base do último
          mês: quantos RDOs foram preenchidos no dia, quantos têm foto, quanto tempo levam para chegar ao escritório e quanto tempo se gasta montando a medição a partir deles.
        </p>
        <p>
          Teste o que dá errado no campo: celular sem sinal, encarregado que troca de frente no meio do dia, correção de um registro já assinado. Compare com a linha de base
          depois de um ciclo de medição completo. O ganho é o que o piloto medir; não há número padrão para prometer.
        </p>
        <p>
          No <a href="/desenvolvimento-de-software">Studio de Produto da Origami Lab</a>, um projeto assim começa por esse recorte. A primeira versão entra em uso em até um
          mês, integrada ao ERP, e só chega a outras obras depois que a fase anterior mostrou resultado contra a linha de base.
        </p>
        <p>
          Na Prumo Engenharia, de engenharia e manutenção, o apontamento de campo foi digitalizado: o que acontece na frente de serviço chega à diretoria. O{" "}
          <a href={CASE}>case publicado</a> conta outro projeto com a mesma empresa, a intranet que virou o canal único entre obra e administrativo.
        </p>
      </Documento>

      <ChamadaDaOrigami frente="sistemas" pagina={CAMINHO} />
      <Perguntas prefixo="rdo" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas leituras={[
        { href: "/boletim-de-medicao", titulo: "Boletim de medição", texto: "Como transformar as quantidades do campo em medição aprovada e margem acompanhada." },
        { href: "/apontamento-de-producao", titulo: "Apontamento de produção", texto: "Coleta no local de trabalho, com dado que alimenta custo e indicadores." },
        { href: CASE, titulo: "Case Prumo Engenharia", texto: "A intranet que reuniu documentos e comunicados entre obra e administrativo." },
      ]} />
      <ChamadaFinal
        titulo="O que acontece na sua obra chega ao escritório no mesmo dia?"
        lead="Traga um RDO real e o caminho que ele faz até a medição e o custo. Vamos avaliar onde uma planilha basta e onde integração ou software sob medida resolvem."
        whatsapp="Olá! Li o guia de RDO e quero avaliar o registro de campo das minhas obras."
      />
    </PaginaDeConteudo>
  );
}
