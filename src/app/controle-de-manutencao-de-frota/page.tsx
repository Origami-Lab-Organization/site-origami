import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { SITE } from "@/conteudo/paginas";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/controle-de-manutencao-de-frota";
const TITULO = "Controle de manutenção de frota: guia e planilha";
const DESCRICAO = "Controle de manutenção de frota: preventiva por km ou horímetro, OS, pneus (CPK), abastecimento, checklist e indicadores, com planilha grátis.";
const PLANILHA = "/ferramentas/planilha-de-manutencao-de-frota.xlsx";
const CASE = "/cases/transportadora-cabral";
const FONTE_PNEUS = "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9132022.pdf";
const FONTE_JORNADA = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13103.htm";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Como fazer o controle de manutenção de frota?",
    resposta: "Cadastre cada veículo ou máquina com o medidor que vale para ele, quilômetro ou horímetro. Monte o plano preventivo por km, horas ou dias, o que vencer primeiro, e registre toda manutenção numa ordem de serviço com causa, peças, custo e dias parado. Lance abastecimentos e pneus no mesmo veículo e acompanhe disponibilidade, custo por km e consumo.",
  },
  {
    pergunta: "O que deve ter numa planilha de controle de manutenção preventiva de frota?",
    resposta: "Uma aba de veículos com a leitura atual de km ou horímetro, um plano com item, intervalo e último serviço, e o próximo vencimento calculado com status em dia, vence em breve ou vencido. Para virar controle, ela também precisa das ordens de serviço, do abastecimento e dos pneus ligados ao mesmo cadastro de veículos.",
  },
  {
    pergunta: "Como calcular o custo por km de um caminhão?",
    resposta: "Some o custo de manutenção do período, com peças, mão de obra e serviços de terceiros, e divida pelos quilômetros rodados no mesmo período. Para um custo variável mais completo, inclua combustível e pneus. Combine antes o que entra na conta: depreciação, salário e seguro costumam ficar no custo fixo, e misturar critérios impede comparar veículos.",
  },
  {
    pergunta: "O que é CPK de pneu e como calcular?",
    resposta: "CPK é o custo por quilômetro do pneu: a soma da compra, das reformas e dos consertos dividida pelos quilômetros que ele rodou. Para calcular, cada pneu precisa de número de fogo e do registro de montagem e retirada com o km do veículo. Sem esse histórico, não dá para comparar marcas, reformas ou posições.",
  },
  {
    pergunta: "Quando a planilha deixa de bastar para controlar a frota?",
    resposta: "Quando várias pessoas lançam ao mesmo tempo, a oficina própria baixa peças do estoque, o km vem da telemetria ou o abastecimento chega pelo cartão todos os dias. Nesse ponto, o problema deixa de ser a fórmula e passa a ser a coleta e a integração. Um sistema de frota de mercado resolve muitos casos; software sob medida faz sentido quando a regra é específica da empresa.",
  },
  {
    pergunta: "O que deve ter no checklist diário do caminhão?",
    resposta: "Os itens que o motorista consegue verificar antes de sair: pneus, luzes e sinalização, freios, vazamentos, níveis, avarias e itens específicos do implemento, conforme o manual do fabricante e a operação. Pela Resolução CONTRAN nº 913/2022, é proibido circular com pneu cujo desgaste atingiu os indicadores ou com sulco inferior a 1,6 mm. O item reprovado precisa virar pedido de manutenção com prazo e responsável.",
  },
  {
    pergunta: "A Origami Lab atende transportadoras e empresas com frota própria?",
    resposta: "A Origami Lab tem base em Formiga, Minas Gerais, e atende empresas no estado e em outras regiões do Brasil. No case publicado da Transportadora Cabral, construiu a Central do Motorista, integrada ao TripLog, com pedidos de manutenção e checklists num canal único pelo WhatsApp. Cada frota precisa de avaliação própria, começando pelo processo e pelo que os sistemas atuais já atendem.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [{ nome: "Guias", caminho: "/guias" }, { nome: "Controle de manutenção de frota", caminho: CAMINHO }],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Article",
    headline: "Controle de manutenção de frota: do checklist ao custo por km",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    image: `${SITE}/assets/og-cover.jpg`,
    citation: [FONTE_PNEUS, FONTE_JORNADA, `${SITE}${CASE}`],
    about: ["Manutenção de frota", "Manutenção preventiva", "Gestão de pneus", "Controle de abastecimento", "Integração com ERP"],
    hasPart: {
      "@type": "DigitalDocument",
      name: "Planilha de manutenção de frota",
      encodingFormat: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      url: `${SITE}${PLANILHA}`,
    },
  },
});

const SUMARIO = [
  { id: "o-que-controlar", rotulo: "O que controlar" },
  { id: "indicadores", rotulo: "Indicadores e fórmulas" },
  { id: "origem", rotulo: "De onde vem cada dado" },
  { id: "erros", rotulo: "Erros que distorcem o controle" },
  { id: "planilha", rotulo: "Planilha gratuita" },
  { id: "escolha", rotulo: "Planilha, sistema ou sob medida" },
  { id: "erp", rotulo: "Integração com o ERP" },
  { id: "piloto", rotulo: "Começar por um piloto" },
  { id: "fontes", rotulo: "Fontes" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaControleDeManutencaoDeFrota() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: "Controle de manutenção de frota" }]}
      rotulo="Frota e manutenção"
      titulo={<>Controle de manutenção de frota: <em className="ol-em">do checklist ao custo por km</em></>}
      lead={
        <>
          Controlar a manutenção da frota é saber, para cada veículo ou máquina, <strong>o que vence e quando, o que quebrou e por quê, e quanto ele custa por quilômetro ou por hora</strong>.
          Para isso, plano preventivo, ordens de serviço, pneus, abastecimento e checklist precisam apontar para o mesmo veículo e a mesma leitura de km ou horímetro.
          A planilha resolve enquanto a frota é pequena e uma pessoa lança tudo; com oficina própria, telemetria e ERP, o controle pede sistema.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href={FORMULARIO}>Conversar sobre minha frota <Seta /></a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#planilha">Ver a planilha gratuita</a>
        </>
      }
      meta="Por Origami Lab · Formiga, Minas Gerais · Atualizado em 23/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="o-que-controlar">O que controlar em cada veículo</h2>
        <p>
          Comece pelo cadastro: placa ou prefixo, tipo, ano, operação e o medidor que vale para aquele veículo. Caminhões e leves andam por quilômetro; carregadeiras,
          escavadeiras e tratores, por horímetro. Tudo o que vier depois aponta para esse cadastro. Se o mesmo caminhão aparece como placa numa planilha e como apelido
          em outra, nenhum indicador fecha.
        </p>
        <QuadroDeFatos titulo="Os registros de um controle de manutenção" itens={[
          { termo: "Preventiva", definicao: "Itens com intervalo por km, horímetro ou tempo, o que vencer primeiro: óleo e filtros, lubrificação, freios, correias, revisões do fabricante." },
          { termo: "Corretiva", definicao: "Falha que parou ou limitou o veículo, com sintoma, causa, sistema afetado, peças e tempo parado." },
          { termo: "Ordem de serviço", definicao: "O documento que liga o trabalho ao veículo, à leitura de km ou horas, às peças e à mão de obra. Sem OS, não existe custo por veículo." },
          { termo: "Pneus", definicao: "Cada pneu com número de fogo, posição, km na montagem e na retirada, reformas e custo. Daí sai o CPK." },
          { termo: "Abastecimento", definicao: "Data, veículo, leitura, litros e valor. Daí saem o consumo e os desvios." },
          { termo: "Checklist diário", definicao: "Inspeção do motorista ou operador antes de sair. Item reprovado vira pedido de manutenção." },
          { termo: "Documentos e vencimentos", definicao: "Licenciamento, seguro, laudos e autorizações exigidas para o tipo de veículo e de transporte." },
        ]} />
        <p>
          O intervalo de cada preventiva vem do manual do fabricante e da experiência da oficina, ajustado à severidade do uso. O mesmo caminhão em rodovia e em acesso
          de mina não se desgasta do mesmo jeito; por isso o plano pode mudar por tipo de operação, e não só por modelo.
        </p>
        <p>
          Nos pneus, a medição de sulco também é item de segurança. A <a href={FONTE_PNEUS} target="_blank" rel="noopener">Resolução CONTRAN nº 913/2022</a>, art. 4º,
          proíbe a circulação de veículo automotor com pneu cujo desgaste da banda de rodagem atingiu os indicadores ou cuja profundidade remanescente é inferior a 1,6 mm.
          Registrar o sulco no checklist e na inspeção de pneus ajuda a programar troca, rodízio e reforma antes do limite.
        </p>
        <p>
          Se o aplicativo do checklist também registrar a jornada do motorista empregado, trate isso como outra obrigação. A <a href={FONTE_JORNADA} target="_blank" rel="noopener">Lei
          nº 13.103/2015</a>, art. 2º, V, b, prevê como direito do motorista empregado a jornada controlada e registrada de maneira fidedigna, por diário de bordo, papeleta,
          ficha de trabalho externo ou sistema e meios eletrônicos instalados nos veículos, a critério do empregador. As regras de jornada pedem avaliação do jurídico e do RH.
        </p>

        <h2 id="indicadores">Indicadores e como calcular cada um</h2>
        <Tabela cabecalho={["Indicador", "Fórmula", "O que mostra"]} linhas={[
          ["Disponibilidade da frota", "(tempo programado − tempo parado em manutenção) ÷ tempo programado", "Quanto da frota estava apta quando a operação precisou."],
          ["Custo de manutenção por km", "(peças + mão de obra + serviços de terceiros) ÷ km rodados no período", "Quanto cada quilômetro custa em oficina. Em máquinas, divida pelas horas."],
          ["Consumo", "km entre dois abastecimentos de tanque cheio ÷ litros do segundo abastecimento", "Desvios por rota, carga, condução, vazamento ou lançamento errado. Em máquinas, litros por hora."],
          ["CPK do pneu", "(compra + reformas + consertos) ÷ km rodados pelo pneu", "Qual pneu, reforma ou posição rende mais por real gasto."],
          ["Preventivas em dia", "itens do plano dentro do prazo ÷ itens do plano", "Se o plano está sendo cumprido ou só existe no papel."],
          ["MTBF", "km ou horas de operação ÷ número de corretivas", "Quanto o veículo roda, em média, entre uma quebra e outra."],
          ["MTTR", "tempo parado em corretivas ÷ número de corretivas", "Quanto tempo, em média, cada quebra deixa o veículo fora de operação."],
        ]} />
        <Nota>
          <strong>Exemplo ilustrativo:</strong> um caminhão programado para 22 dias no mês ficou 3 dias parado em corretivas. Disponibilidade = (22 − 3) ÷ 22, cerca de 86%.
          Se ele rodou 8.000 km e teve 2 corretivas, rodou em média 4.000 km entre quebras, e cada quebra o deixou 1,5 dia parado. Os números mostram a conta; não são referência.
        </Nota>
        <p>
          Combine a regra antes de comparar. A parada conta da abertura da OS ou da entrada na oficina? Preventiva programada entra na disponibilidade? O km vem do hodômetro
          ou da telemetria? Dois veículos medidos com regras diferentes produzem uma comparação que ninguém consegue defender na reunião.
        </p>

        <h2 id="origem">De onde vem cada dado</h2>
        <Tabela cabecalho={["Dado", "Origem mais comum", "Cuidado"]} linhas={[
          ["Km e horas", "Leitura do hodômetro ou horímetro pelo motorista ou operador; telemetria ou rastreador, quando existe.", "Leitura digitada erra dígito. Telemetria fica sem sinal e pode divergir do painel: defina qual prevalece."],
          ["Abastecimento", "Cartão-combustível, bomba própria com controle de saída ou nota do posto.", "A leitura informada na bomba precisa ser conferida com a anterior do mesmo veículo."],
          ["Serviços e peças", "Oficina própria, com OS e requisição de estoque, ou oficina de terceiros, com orçamento e nota.", "A peça sai do estoque para a OS do veículo, não para a oficina em geral."],
          ["Custos e compras", "ERP: pedidos, notas, estoque, custo médio e centro de custo.", "A soma das OS precisa bater com o custo que o ERP apropria à frota."],
          ["Condição do veículo", "Checklist do motorista ou operador na saída e na volta.", "Item reprovado sem prazo e sem responsável vira só um registro."],
        ]} />

        <h2 id="erros">Erros que distorcem o controle</h2>
        <ul>
          <li><strong>Lançamento atrasado.</strong> A OS fechada dias depois, de memória, joga custo e dias parados no período errado.</li>
          <li><strong>Km ou horímetro digitado errado.</strong> Um dígito a mais gera consumo impossível e adianta ou atrasa a preventiva. Valide contra a leitura anterior.</li>
          <li><strong>OS sem causa.</strong> “Trocado” sem o porquê impede separar desgaste normal de falha repetida, uso inadequado ou peça ruim.</li>
          <li><strong>Peça sem vínculo com o veículo.</strong> Saída de estoque para “oficina” deixa um veículo barato no relatório e o custo real escondido.</li>
          <li><strong>Pneu sem número de fogo.</strong> Sem identificação, não há CPK nem histórico de reforma e rodízio.</li>
          <li><strong>Checklist que ninguém lê.</strong> O motorista aponta o problema, ninguém abre a OS, e a falha volta como corretiva maior.</li>
        </ul>

        <h2 id="planilha">Planilha gratuita de manutenção de frota</h2>
        <p>
          A planilha da Origami Lab cobre o controle de uma frota que uma pessoa consegue lançar: cadastro de veículos e máquinas, plano preventivo com vencimento por km,
          horas ou dias e status em dia, vence em breve ou vencido, ordens de serviço com causa e custo, abastecimento com consumo calculado, pneus com CPK e uma aba de
          indicadores por veículo com custo por km, consumo médio, dias parados e corretivas.
        </p>
        <p>
          <a href={PLANILHA} download><strong>Baixar a planilha de manutenção de frota (.xlsx)</strong></a>. As linhas marcadas como EXEMPLO mostram o preenchimento e
          podem ser apagadas. Os intervalos dos exemplos são fictícios: use os do fabricante e da sua oficina.
        </p>
        <Nota>
          <strong>Quando a planilha deixa de bastar:</strong> várias pessoas lançando ao mesmo tempo, oficina própria com estoque, km vindo da telemetria, abastecimento
          do cartão importado todo dia ou custo que precisa chegar ao ERP sem redigitação. Aí o problema não é a fórmula; é a coleta e a integração.
        </Nota>

        <h2 id="escolha">Planilha, sistema de frota ou software sob medida</h2>
        <Tabela cabecalho={["Caminho", "Quando resolve", "Onde costuma travar"]} linhas={[
          ["Planilha", "Frota pequena, poucos tipos de veículo, uma pessoa responsável pelos lançamentos e manutenção feita por terceiros.", "Vários usuários, lançamento atrasado, nenhum histórico de quem alterou o quê, km digitado à mão."],
          ["Sistema de frota ou TMS de mercado", "A operação segue um fluxo comum e o produto já conversa com o rastreador, o cartão-combustível e o ERP que você usa.", "Regras que o produto não comporta, integração com o ERP que exige redigitação, oficina própria que o sistema não cobre."],
          ["Software sob medida integrado", "A regra do processo é específica da empresa e precisa conversar com ERP, telemetria, oficina e outros sistemas.", "Exige dono do processo, decisão sobre cadastros e um piloto com linha de base."],
        ]} />
        <p>
          Se um sistema pronto resolve, use o sistema pronto. O sob medida se justifica quando a regra faz parte do jeito como a empresa opera: plano preventivo que muda
          por tipo de operação, caminhões por km e máquinas por horímetro na mesma oficina, checklist que abre a OS e reserva a peça, custo que precisa chegar ao centro de
          custo do ERP sem redigitação. O guia de <a href="/software-sob-medida">software sob medida</a> detalha essa comparação.
        </p>
        <p>
          No <a href={CASE}>case da Transportadora Cabral</a>, a Origami Lab construiu a Central do Motorista: um canal no WhatsApp, integrado ao TripLog, o sistema de gestão
          operacional da transportadora, por onde entram pedidos de manutenção e checklists, com o mesmo roteiro para toda a frota. O case mostra o registro nascendo onde o
          motorista já está e alimentando o sistema que a operação já usava; não descreve um sistema completo de manutenção.
        </p>
        <p>
          No <a href="/desenvolvimento-de-software">Studio de Produto</a> da Origami Lab, a primeira versão entra em uso em até 1 mês, integrada ao ERP e ao que já existe.
          Depois, o software evolui em fases, cada uma com linha de base, meta e ganho medido, e você decide se continua. O código e os dados ficam com a empresa.
        </p>

        <h2 id="erp">Integração com o ERP: o que sobe, o que desce e quem é dono</h2>
        <p>
          Desce é o que o ERP entrega ao controle de frota; sobe é o que a operação devolve ao ERP. Antes de integrar, defina qual sistema é dono de cada cadastro e
          movimento. Dois donos para o mesmo dado significam duas versões do custo.
        </p>
        <Tabela cabecalho={["Cadastro ou movimento", "Dono", "Como circula"]} linhas={[
          ["Veículo como ativo e centro de custo", "ERP", "Desce para o controle de frota, que acrescenta medidor, plano e operação."],
          ["Peças, estoque e custo médio", "ERP", "Desce para a oficina consultar saldo; a requisição vinculada à OS sobe e baixa o estoque."],
          ["Compra de peças e serviços externos", "ERP", "Pedido e nota ficam no ERP; a OS recebe o custo e a referência do documento."],
          ["Plano preventivo, OS e checklist", "Controle de frota", "Sobe só o que tem efeito no custo: requisições, mão de obra e serviços por centro de custo."],
          ["Abastecimento", "Cartão ou bomba própria", "Entra no controle de frota para consumo; o valor segue para custo e contas a pagar no ERP."],
          ["Km e horas", "Telemetria ou leitura informada", "Fica no controle de frota e dispara o vencimento das preventivas."],
        ]} />
        <p>
          Combine também o que acontece quando a integração falha: fila de reprocessamento, aviso e responsável. Sem isso, a peça baixada no ERP some da OS ou entra duas
          vezes. A página de <a href="/integracao-de-sistemas">integração de sistemas</a> trata desse desenho.
        </p>

        <h2 id="piloto">Comece por um piloto delimitado</h2>
        <ol>
          <li><strong>Escolha um recorte.</strong> Um grupo de veículos, uma operação ou um fluxo, como checklist reprovado até a OS aberta.</li>
          <li><strong>Registre a linha de base.</strong> Dias parados por corretiva, OS sem causa, tempo entre o checklist reprovado e a OS, preventivas vencidas.</li>
          <li><strong>Defina dono e regra de cada dado.</strong> Quem lança, quando, de onde vem a leitura e qual sistema prevalece.</li>
          <li><strong>Teste as exceções.</strong> Veículo sem sinal, troca de hodômetro, OS reaberta, peça devolvida, abastecimento fora do cartão.</li>
          <li><strong>Compare e decida.</strong> Mesmo indicador, mesma regra, mesmo recorte, antes e depois. A expansão depende do resultado medido.</li>
        </ol>
        <p>
          Não há percentual universal de ganho. O piloto serve para medir o efeito no recorte escolhido e o esforço para sustentar a rotina. Manutenção preditiva pode vir
          depois e depende de sensor e de histórico de falhas com causa registrada; veja os limites em <a href="/ia-na-industria">IA na indústria</a>. Para máquinas que
          trabalham por horímetro, a <a href="/calculadora-custo-hora-maquina">calculadora de custo hora-máquina</a> ajuda a pôr a manutenção dentro do custo da hora.
        </p>

        <h2 id="fontes">Fontes e limites deste guia</h2>
        <ul>
          <li><a href={FONTE_PNEUS} target="_blank" rel="noopener">Resolução CONTRAN nº 913/2022.</a> Uso de pneus em veículos; o art. 4º trata do desgaste e do limite de 1,6 mm.</li>
          <li><a href={FONTE_JORNADA} target="_blank" rel="noopener">Lei nº 13.103/2015.</a> Exercício da profissão de motorista; o art. 2º, V, b, trata do registro da jornada.</li>
          <li><a href={CASE}>Case da Transportadora Cabral.</a> Fonte do que é dito sobre a Central do Motorista, sem generalizar seus resultados.</li>
        </ul>
        <p>Consultadas em 23/11/2026. Intervalos de manutenção, itens obrigatórios e regras de jornada mudam por veículo e operação; confirme no manual e na norma vigente.</p>
      </Documento>

      <ChamadaDaOrigami frente="sistemas" pagina={CAMINHO} />
      <Perguntas prefixo="frota" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas leituras={[
        { href: CASE, titulo: "Case Transportadora Cabral", texto: "A Central do Motorista no WhatsApp, integrada ao TripLog, com manutenção e checklists num canal único." },
        { href: "/desenvolvimento-de-software", titulo: "Studio de Produto", texto: "Software sob medida para o que nenhum sistema pronto resolve, com a primeira versão em uso em até 1 mês." },
        { href: "/integracao-de-sistemas", titulo: "Integração de sistemas", texto: "Como fazer ERP, telemetria e oficina trocarem dados sem redigitação e com tratamento de falhas." },
        { href: "/automacao-de-processos-industriais", titulo: "O que automatizar primeiro", texto: "Critérios para tirar da planilha os processos que o ERP não cobre, manutenção incluída." },
      ]} />
      <ChamadaFinal
        titulo="Sua frota sabe quanto custa cada quilômetro?"
        lead="Traga uma OS, um relatório de abastecimento e o plano preventivo. Vamos avaliar o que a planilha ou o sistema atual já atendem e onde integração ou software sob medida resolvem a lacuna."
        whatsapp="Olá! Li o guia de controle de manutenção de frota e quero avaliar o controle da minha frota."
      />
    </PaginaDeConteudo>
  );
}
