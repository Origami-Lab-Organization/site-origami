import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { SITE } from "@/conteudo/paginas";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/registro-de-nao-conformidade";
const TITULO = "Registro de não conformidade (RNC) e rastreabilidade";
const DESCRICAO = "Como fazer o registro de não conformidade (RNC): modelo de campos, correção e ação corretiva, rastreabilidade de lotes e quando a planilha deixa de bastar.";

const GUIAS_ISO = "https://committee.iso.org/files/live/sites/tc176sc2/files/documents/ISO%209001%202015%20-%20Implementation%20guidance%20docs";
const ERA = "https://www.era.europa.eu/era-railway-terminology-collection";
const ERA_CONTEXTO = "term_1/sms_safety_culture_human_and_organisational_factor";
const FONTES = {
  informacaoDocumentada: `${GUIAS_ISO}/ISO9001_2015_Guidance_on_Documented_Information.docx`,
  pensamentoDeRisco: `${GUIAS_ISO}/ISO9001_2015_and_Risk.docx`,
  edicao2026: "https://committee.iso.org/sites/tc176sc2/home/news/content-left-area/news-and-updates/news-2.html",
  naoConformidade: `${ERA}/nonconformity/${ERA_CONTEXTO}`,
  acaoCorretiva: `${ERA}/correctiveaction/${ERA_CONTEXTO}`,
  acaoPreventiva: `${ERA}/preventiveaction/${ERA_CONTEXTO}`,
};

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é um registro de não conformidade (RNC)?",
    resposta: "É o documento que registra um requisito não atendido, o produto e o lote afetados, o destino dado ao material e a ação tomada sobre a causa. Pode ser um formulário, uma planilha ou um sistema. O que importa é que cada ocorrência tenha identificação única, responsável, prazo e verificação antes do encerramento.",
  },
  {
    pergunta: "O que um modelo de RNC precisa ter?",
    resposta: "Identificação, origem, requisito e descrição objetiva, evidência, produto, ordem, lote e quantidade afetada, contenção, disposição do material, análise de causa, ação corretiva com responsável e prazo, verificação de eficácia e encerramento. Campos com lista fechada, como origem e disposição, permitem contar e comparar. Ajuste o modelo às exigências dos seus clientes.",
  },
  {
    pergunta: "Qual é a diferença entre correção e ação corretiva?",
    resposta: "A correção trata o produto que já saiu errado: separar, retrabalhar, sucatear ou liberar com concessão. A ação corretiva trata a causa, para que a falha não se repita. No vocabulário da ISO 9000:2015, ação corretiva é a ação para eliminar a causa de uma não conformidade e evitar a repetição.",
  },
  {
    pergunta: "A ISO 9001 ainda exige ação preventiva?",
    resposta: "A ISO 9001:2015 não tem uma cláusula separada de ação preventiva. Segundo o comitê técnico responsável pela norma, a prevenção passou a fazer parte da mentalidade de risco, presente no planejamento, na operação e na análise do sistema. Um formulário de ações corretivas e preventivas pode continuar existindo, desde que a empresa saiba onde cada exigência é atendida.",
  },
  {
    pergunta: "Como testar a rastreabilidade de lotes?",
    resposta: "Faça uma simulação de rastreio. Escolha um lote de matéria-prima já consumido e liste os lotes de produto, os pedidos e os clientes que o receberam; depois faça o caminho inverso, de uma nota fiscal de cliente até o fornecedor. Cronometre e anote onde a informação se perdeu. O tempo e as falhas encontradas viram a linha de base.",
  },
  {
    pergunta: "Planilha serve para controlar não conformidades?",
    resposta: "Serve quando o volume é pequeno, existe uma única planilha para a empresa e alguém cobra os prazos. Deixa de bastar quando surgem versões por setor, prazos vencem sem aviso, a reincidência só aparece em auditoria ou o registro depende de dados da produção que alguém redigita. Nesse ponto, avalie o módulo do ERP, um sistema de qualidade de mercado ou uma integração.",
  },
  {
    pergunta: "A Origami Lab atende indústrias que querem ligar qualidade e produção?",
    resposta: "A Origami Lab tem base em Formiga, Minas Gerais, e atende indústrias no estado e em outras regiões do Brasil com software sob medida e integração com ERP, pelo Studio de Produto. Quando o registro de não conformidade precisa nascer ligado à ordem, ao lote e ao apontamento, esse pode ser o escopo de um projeto. Esta página é um guia de requisitos, não um case de qualidade; se um sistema de mercado resolver, essa é a recomendação.",
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
    headline: "Registro de não conformidade: do lote afetado à causa resolvida",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    image: `${SITE}/assets/og-cover.jpg`,
    citation: Object.values(FONTES),
    about: ["Registro de não conformidade", "Ação corretiva", "Rastreabilidade de lotes", "Controle de qualidade industrial", "ISO 9001"],
  },
});

const SUMARIO = [
  { id: "o-que-e", rotulo: "O que é um RNC" },
  { id: "modelo", rotulo: "Modelo de campos" },
  { id: "correcao", rotulo: "Correção e ação corretiva" },
  { id: "rastreabilidade", rotulo: "Rastreabilidade de lotes" },
  { id: "indicadores", rotulo: "Indicadores" },
  { id: "erros", rotulo: "Erros comuns" },
  { id: "ferramenta", rotulo: "Planilha, QMS ou sob medida" },
  { id: "integracao", rotulo: "Produção e ERP" },
  { id: "piloto", rotulo: "Um piloto delimitado" },
  { id: "fontes", rotulo: "Fontes e referências" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaRegistroDeNaoConformidade() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: TITULO }]}
      rotulo="Qualidade industrial"
      titulo={<>Registro de não conformidade: <em className="ol-em">do lote afetado à causa resolvida</em></>}
      lead={
        <>
          Um registro de não conformidade (RNC) documenta o requisito que não foi atendido, <strong>o lote e a quantidade afetados, o destino dado ao material e a causa eliminada</strong>.
          Ele cumpre o papel quando está ligado à ordem de produção e ao lote, e quando a ação corretiva é verificada antes do encerramento. Planilha resolve no começo; quando o
          volume cresce ou o cliente cobra rastreio rápido, o registro precisa nascer junto da produção e conversar com o ERP.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href={FORMULARIO}>Conversar sobre minha operação <Seta /></a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#modelo">Ver o modelo de campos</a>
        </>
      }
      meta="Por Origami Lab · Formiga, Minas Gerais · Atualizado em 23/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="o-que-e">O que é um registro de não conformidade</h2>
        <p>
          Não conformidade é o não atendimento de um requisito, segundo o <a href={FONTES.naoConformidade} target="_blank" rel="noopener">vocabulário da ISO 9000:2015</a>.
          O requisito pode vir do desenho, da especificação do cliente, de uma instrução interna ou de uma regra aplicável. Cota fora da tolerância, embalagem trocada e
          inspeção não feita são não conformidades. O registro de não conformidade, ou RNC, guarda a ocorrência, a decisão sobre o material e o tratamento da causa, em
          papel, planilha ou sistema. Algumas empresas chamam de relatório de não conformidade; o que conta é o conteúdo.
        </p>
        <QuadroDeFatos titulo="O que a ISO 9001:2015 pede, em resumo" itens={[
          { termo: "8.7 Controle de saídas não conformes", definicao: "Guardar o registro da não conformidade, das ações tomadas, das concessões obtidas e de quem decidiu a ação sobre ela." },
          { termo: "10.2 Não conformidade e ação corretiva", definicao: "Guardar evidência da natureza da não conformidade, das ações seguintes e do resultado de cada ação corretiva." },
          { termo: "8.5.2 Identificação e rastreabilidade", definicao: "Quando a rastreabilidade é um requisito, guardar a identificação única de cada saída." },
        ]} />
        <p>
          O resumo segue o <a href={FONTES.informacaoDocumentada} target="_blank" rel="noopener">guia sobre informação documentada</a> do comitê ISO/TC 176/SC 2, que mantém
          a norma. É uma paráfrase, não o texto oficial. O mesmo guia diz que a empresa tem liberdade para escolher como documentar: a norma define o que precisa existir,
          não o formato do formulário.
        </p>
        <Nota>
          <strong>Edição nova da norma.</strong> A <a href={FONTES.edicao2026} target="_blank" rel="noopener">ISO 9001:2026 foi publicada em 16 de setembro de 2026</a>.
          Segundo o mesmo comitê, empresas certificadas pela edição 2015 têm até 30 de setembro de 2029 para concluir a transição. As cláusulas citadas aqui seguem a
          numeração de 2015; confira a correspondência na edição que sua empresa usa.
        </Nota>

        <h2 id="modelo">Modelo de registro de não conformidade: campos e para que servem</h2>
        <p>
          Use a tabela como ponto de partida para um formulário, uma planilha ou um sistema. Campos com lista fechada, como origem, disposição e categoria de causa,
          permitem contar e comparar depois. Texto livre serve para descrever, não para classificar.
        </p>
        <Tabela cabecalho={["Campo", "O que registrar", "Para que serve"]} linhas={[
          ["Identificação", "Número único, data e hora, quem abriu e onde.", "Localizar, cobrar e contar cada ocorrência."],
          ["Origem", "Inspeção de recebimento, inspeção em processo, inspeção final, reclamação ou devolução de cliente, auditoria.", "Separar problema de fornecedor, de processo e de campo. Muda quem responde."],
          ["Requisito e descrição", "Qual requisito falhou e o que foi observado, com o valor medido quando houver.", "Evitar discussão sobre o que aconteceu e comparar ocorrências."],
          ["Evidência", "Foto, relatório de medição, amostra retida, laudo.", "Sustentar a decisão sobre o material e a análise de causa."],
          ["Produto, ordem e lote", "Código do item, ordem de produção, lote ou número de série, quantidade afetada e quantidade inspecionada.", "Saber o que mais pode ter sido afetado e rastrear."],
          ["Contenção", "O que foi feito na hora: segregar, bloquear o estoque, inspecionar o restante, avisar o cliente.", "Impedir que o problema avance enquanto a causa é estudada."],
          ["Disposição", "Retrabalho, refugo, uso com concessão, reclassificação ou devolução ao fornecedor, e quem autorizou.", "Definir o destino do material e apurar o custo da ocorrência."],
          ["Análise de causa", "Método usado, como 5 porquês ou Ishikawa, e a causa encontrada.", "Fazer a ação atacar a causa, não o sintoma."],
          ["Ação corretiva", "O que muda no processo, responsável e prazo.", "Evitar a repetição."],
          ["Verificação de eficácia", "Critério, data e resultado da verificação.", "Confirmar que a causa foi eliminada."],
          ["Encerramento", "Quem encerrou, quando e o custo apurado, se houver.", "Fechar o ciclo e alimentar os indicadores."],
        ]} />
        <p>
          A origem também mostra onde a inspeção de qualidade está funcionando. O recebimento pega o problema do fornecedor antes de ele entrar na produção. A inspeção em
          processo pega o desvio enquanto o lote ainda está na linha. A reclamação de cliente mostra o que passou por todas as barreiras.
        </p>
        <p>
          Na análise de causa, os <strong>5 porquês</strong> funcionam quando a falha tem uma cadeia simples: pergunte por que até chegar a algo que o processo controla.
          O <strong>diagrama de Ishikawa</strong>, ou espinha de peixe, organiza hipóteses por categoria, como método, máquina, material, mão de obra, medição e meio.
          Nos dois casos, faça a análise com quem estava no turno e confirme a hipótese com dado antes de escolher a ação.
        </p>

        <h2 id="correcao">Correção não é ação corretiva</h2>
        <p>
          A correção trata o produto que já saiu errado: separar, inspecionar, retrabalhar, sucatear ou liberar com concessão. A ação corretiva trata a causa. No{" "}
          <a href={FONTES.acaoCorretiva} target="_blank" rel="noopener">vocabulário da ISO 9000:2015</a>, ação corretiva é a ação para eliminar a causa de uma não
          conformidade e evitar que ela se repita.
        </p>
        <Nota>
          <strong>Exemplo ilustrativo:</strong> um lote de eixos sai com diâmetro acima da tolerância. A correção é bloquear o lote, medir todas as peças, retrabalhar as
          que permitem e sucatear o resto. A análise mostra que, depois da troca de ferramenta, ninguém media a primeira peça antes de liberar a máquina. A ação corretiva
          é incluir essa medição no procedimento de troca e registrá-la no apontamento. A verificação, semanas depois, confere se o desvio voltou.
        </Nota>
        <p>
          E a ação preventiva? O <a href={FONTES.acaoPreventiva} target="_blank" rel="noopener">mesmo vocabulário</a> a define como a ação sobre a causa de uma não
          conformidade <em>potencial</em>, antes que ela ocorra. A ISO 9001:2015 não tem cláusula separada para isso: segundo o{" "}
          <a href={FONTES.pensamentoDeRisco} target="_blank" rel="noopener">texto do comitê sobre mentalidade de risco</a>, a prevenção passou a fazer parte do
          planejamento, da operação e da análise do sistema. Um registro de não conformidades e ações corretivas e preventivas pode continuar existindo, mas a prevenção
          não depende só dele.
        </p>

        <h2 id="rastreabilidade">Rastreabilidade de lotes: para trás e para frente</h2>
        <p>
          Na indústria, rastrear para trás é partir de um produto e chegar ao material, ao fornecedor, à máquina, ao turno e às inspeções. Rastrear para frente é partir de
          um lote de matéria-prima e chegar a todos os lotes produzidos, pedidos e clientes que o receberam. Uma reclamação de cliente pede o primeiro caminho; um aviso de
          fornecedor pede o segundo.
        </p>
        <Tabela cabecalho={["Etapa", "O que registrar", "Pergunta que responde"]} linhas={[
          ["Recebimento", "Lote do fornecedor, nota fiscal, certificado ou laudo, resultado da inspeção e lote interno atribuído.", "De qual fornecedor e remessa veio este material?"],
          ["Estoque e separação", "Lote retirado, quantidade, ordem de destino e divisões de lote.", "Para quais ordens este material foi?"],
          ["Produção", "Ordem, operação, máquina, turno, quem executou, lotes consumidos, lote produzido e parâmetros relevantes.", "Em que condições este lote foi feito?"],
          ["Inspeção", "Plano usado, resultado, instrumento, quem aprovou e RNC vinculada.", "O que foi verificado e quem liberou?"],
          ["Expedição", "Lote expedido, pedido, cliente, nota fiscal e data.", "Para quem este lote seguiu?"],
        ]} />
        <p>
          O ponto frágil costuma estar nas transformações: lote dividido entre ordens, lotes misturados num silo ou num forno, sobra que volta ao estoque. Defina a regra de
          cada caso antes de escolher etiqueta ou código de barras. Na metalurgia, a relação entre corrida, lote e transformação tem detalhes próprios, tratados no guia de{" "}
          <a href="/software-para-industria-metalurgica">software para indústria metalúrgica</a>.
        </p>
        <p>
          <strong>Como testar com uma simulação de rastreio.</strong> Escolha um lote de matéria-prima já consumido e cronometre quanto tempo a equipe leva para listar os
          lotes de produto, os pedidos e os clientes ligados a ele. Depois faça o caminho inverso, de uma nota fiscal de cliente até o fornecedor. Anote cada ponto em que a
          informação se perdeu. O tempo e as falhas encontradas são a sua linha de base.
        </p>
        <Nota>
          Alimentos, autopeças, dispositivos médicos e outros setores costumam ter exigências próprias de rastreabilidade e recolhimento, definidas por órgão regulador ou
          pelo cliente. Este guia não substitui essas regras; confira as que se aplicam à sua empresa.
        </Nota>

        <h2 id="indicadores">Indicadores de não conformidade que ajudam a decidir</h2>
        <ul>
          <li><strong>RNCs abertas fora do prazo</strong>, por responsável. Mostra onde o tratamento parou.</li>
          <li><strong>Reincidência por causa.</strong> A mesma causa voltando depois de uma RNC encerrada indica ação corretiva que não funcionou.</li>
          <li><strong>Quantidade refugada e retrabalhada por período</strong>, em peças e em horas, por produto e por linha.</li>
          <li><strong>RNCs por origem:</strong> recebimento, processo, cliente e auditoria. Ajuda a decidir onde reforçar a inspeção.</li>
        </ul>
        <p>
          O <strong>custo da não qualidade</strong> é o que a empresa gasta porque algo saiu errado: material sucateado, horas de retrabalho, reinspeção, frete de devolução,
          atendimento ao cliente. Comece somando o que já está registrado e deixe claro o que ficou de fora. Não há percentual de referência que sirva para toda fábrica.
        </p>
        <p>
          Refugo e retrabalho também reduzem o fator qualidade do OEE, que compara peças boas com peças produzidas. A <a href="/calculadora-de-oee">calculadora de OEE</a>{" "}
          mostra essa perda em peças e minutos, ao lado das perdas de disponibilidade e desempenho.
        </p>
        <Nota>
          Mais RNCs nem sempre é pior. Quando a equipe passa a registrar o que antes ficava no corredor, o número sobe no começo. Acompanhe a tendência junto com refugo,
          reincidência e reclamações de cliente.
        </Nota>

        <h2 id="erros">Erros comuns no registro de não conformidade</h2>
        <ul>
          <li><strong>RNC sem lote ou sem ordem.</strong> Ninguém sabe o que mais foi afetado nem consegue rastrear.</li>
          <li><strong>Causa “falha do operador”.</strong> Encerra a conversa sem explicar por que o processo permitiu o erro. Pergunte o que faltou: instrução, dispositivo, tempo, treinamento ou verificação.</li>
          <li><strong>Ação corretiva que ninguém verifica.</strong> “Treinar a equipe” com data cumprida não prova que a causa foi eliminada. Defina antes como e quando a eficácia será conferida.</li>
          <li><strong>Uma planilha por setor.</strong> Recebimento, produção e atendimento ao cliente com controles separados escondem a reincidência e duplicam números.</li>
          <li><strong>Encerrar para cumprir prazo.</strong> RNC encerrada sem verificação melhora o indicador e mantém o problema.</li>
          <li><strong>Descrição vaga.</strong> “Peça com defeito” não diz qual requisito falhou nem permite comparar ocorrências.</li>
        </ul>

        <h2 id="ferramenta">Planilha, sistema de qualidade de mercado ou software sob medida</h2>
        <p>
          Antes de contratar um sistema de controle de qualidade, olhe para o volume de ocorrências, para quantas áreas participam e para quanto o registro depende de dados
          da produção. Não existe uma ferramenta certa para toda empresa.
        </p>
        <Tabela cabecalho={["Opção", "Quando resolve", "Quando deixa de bastar"]} linhas={[
          ["Formulário ou planilha única", "Poucas ocorrências, uma unidade e um responsável que cobra prazos, com listas fechadas e uma só planilha para a empresa.", "Versões por setor, prazos vencidos sem aviso, reincidência descoberta só em auditoria."],
          ["Módulo de qualidade do ERP", "Quando existe, está contratado e cobre inspeção, bloqueio e disposição do material no fluxo que você usa.", "Tela pensada para o escritório, que o inspetor não usa na linha, e controles paralelos para o que falta."],
          ["Sistema de gestão da qualidade (QMS) de mercado", "Empresa certificada ou em certificação que quer RNC, auditorias, documentos, calibração e treinamentos num só fluxo.", "O RNC precisa de ordem, lote e apontamento que o sistema não recebe, e alguém redigita."],
          ["Software sob medida integrado", "O RNC precisa nascer ligado à ordem de produção, ao lote e ao apontamento, e conversar com o ERP para bloquear estoque, baixar refugo e tratar devolução.", "Quando um produto pronto cobre o mesmo fluxo com pouca adaptação, o sob medida perde o sentido."],
        ]} />
        <p>
          Teste qualquer opção com uma RNC real, do lote bloqueado ao encerramento, com quem abre o registro na linha. Se um sistema de mercado ou o módulo do ERP atende,
          essa é a recomendação. O sob medida entra quando a ligação com a produção é o que falta e as opções avaliadas só a cobrem com planilha paralela ou redigitação.
        </p>

        <h2 id="integracao">Como o RNC se liga à produção e ao ERP</h2>
        <p>
          O registro fica mais confiável quando ninguém precisa redigitar o que a produção já sabe. O fluxo abaixo é um desenho de referência, não um resultado de cliente.
        </p>
        <ol>
          <li><strong>O lote nasce na produção.</strong> O <a href="/apontamento-de-producao">apontamento</a> registra ordem, operação, lote consumido e lote produzido no momento em que o trabalho acontece.</li>
          <li><strong>A RNC nasce do lote.</strong> O inspetor lê a etiqueta da ordem ou do lote e o registro já traz produto, operação, máquina, turno e materiais usados.</li>
          <li><strong>O estoque fica bloqueado.</strong> A contenção marca o lote no ERP para que ele não seja expedido nem consumido enquanto a disposição não sai.</li>
          <li><strong>A disposição gera o movimento certo.</strong> Retrabalho vira ordem de retrabalho, refugo baixa o estoque com motivo, concessão libera com o nome de quem aprovou e a devolução ao fornecedor gera o documento correspondente no ERP.</li>
          <li><strong>A devolução do cliente volta ao lote.</strong> A nota do cliente leva ao lote expedido e, dele, aos materiais, à ordem e às RNCs anteriores.</li>
        </ol>
        <p>
          Combine qual sistema é dono de cada dado. Estoque, fiscal e custo continuam no ERP; a ocorrência e a análise podem ficar no sistema de qualidade. A integração
          precisa confirmar o processamento e reenviar sem duplicar movimento. Os detalhes estão em{" "}
          <a href="/integracao-erp-chao-de-fabrica">integração do ERP com o chão de fábrica</a> e na comparação entre <a href="/mes-vs-erp">MES e ERP</a>. Com os dados
          ligados, os indicadores podem ser acompanhados durante o turno, como em <a href="/gestao-industrial-em-tempo-real">gestão industrial em tempo real</a>.
        </p>

        <h2 id="piloto">Comece por um piloto delimitado</h2>
        <ol>
          <li><strong>Escolha um recorte.</strong> Uma linha, ou um tipo de não conformidade, como as reclamações de cliente de uma família de produtos.</li>
          <li><strong>Meça antes.</strong> RNCs abertas fora do prazo, RNCs sem lote, tempo da simulação de rastreio e horas de redigitação. Essa é a linha de base.</li>
          <li><strong>Defina a meta do piloto.</strong> Poucos números, com o mesmo critério de medição antes e depois.</li>
          <li><strong>Teste as exceções.</strong> Lote dividido, mistura, devolução parcial, concessão, rede fora do ar e rejeição da integração.</li>
          <li><strong>Decida com o resultado.</strong> Amplie para outra linha ou outro tipo de ocorrência se o piloto mostrou ganho e a equipe usa sem controle paralelo.</li>
        </ol>
        <p>
          Não há percentual de ganho que valha para toda fábrica. O piloto serve para descobrir o efeito no seu processo e o esforço para sustentá-lo. Ele também ajuda o{" "}
          <a href="/planejamento-de-producao">planejamento da produção</a>: lote bloqueado e retrabalho aberto mudam a programação.
        </p>
        <p>
          É assim que trabalha o <a href="/desenvolvimento-de-software">Studio de Produto</a>, o serviço de desenvolvimento de software sob medida da Origami Lab. A primeira
          versão entra em uso em até 1 mês, integrada ao ERP. Cada fase seguinte tem linha de base, meta e ganho medido, e você decide se continua. O projeto é documentado
          como P&amp;D desde o início, para avaliar a Lei do Bem, e o código e os dados ficam com a sua empresa.
        </p>

        <h2 id="fontes">Fontes e referências</h2>
        <p>
          Fontes consultadas em 23/11/2026. O texto da ISO 9001 é protegido por direito autoral; as cláusulas foram parafraseadas a partir de documentos públicos do comitê
          da norma. O modelo de campos, os indicadores e o roteiro de piloto são orientação da Origami Lab.
        </p>
        <ul>
          <li><a href={FONTES.informacaoDocumentada} target="_blank" rel="noopener">ISO/TC 176/SC 2: guia sobre os requisitos de informação documentada da ISO 9001:2015 (arquivo .docx).</a></li>
          <li><a href={FONTES.pensamentoDeRisco} target="_blank" rel="noopener">ISO/TC 176/SC 2: mentalidade de risco na ISO 9001:2015 e o fim da cláusula de ação preventiva (arquivo .docx).</a></li>
          <li><a href={FONTES.edicao2026} target="_blank" rel="noopener">ISO/TC 176/SC 2: publicação da ISO 9001:2026 e prazos de transição.</a></li>
          <li>
            Agência Ferroviária da União Europeia, termos da ISO 9000:2015: <a href={FONTES.naoConformidade} target="_blank" rel="noopener">não conformidade</a>,{" "}
            <a href={FONTES.acaoCorretiva} target="_blank" rel="noopener">ação corretiva</a> e <a href={FONTES.acaoPreventiva} target="_blank" rel="noopener">ação preventiva</a>.
          </li>
        </ul>
      </Documento>

      <ChamadaDaOrigami frente="producao" pagina={CAMINHO} />
      <Perguntas prefixo="rnc" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas leituras={[
        { href: "/apontamento-de-producao", titulo: "Apontamento de produção", texto: "Como fazer o lote e a ordem nascerem no posto, sem redigitação." },
        { href: "/integracao-erp-chao-de-fabrica", titulo: "Integração do ERP com a produção", texto: "Os dados que precisam subir e descer entre gestão e execução." },
        { href: "/software-para-industria-metalurgica", titulo: "Software para metalúrgicas", texto: "Ordens, roteiros, lotes, qualidade e custo na fundição e na usinagem." },
        { href: "/calculadora-de-oee", titulo: "Calculadora de OEE", texto: "Veja quanto refugo e retrabalho tiram da capacidade de uma máquina." },
      ]} />
      <ChamadaFinal
        titulo="Quanto tempo sua equipe leva para rastrear um lote?"
        lead="Traga uma RNC real e o caminho que ela percorre hoje. Vamos avaliar o que a planilha, o ERP ou um sistema de qualidade já resolvem e onde falta ligação com a produção."
        whatsapp="Olá! Li o guia de registro de não conformidade e quero avaliar como ligar qualidade, produção e ERP na minha empresa."
      />
    </PaginaDeConteudo>
  );
}
