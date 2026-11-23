import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { SITE } from "@/conteudo/paginas";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/controle-de-expedicao-e-pesagem";
const TITULO = "Controle de expedição e pesagem de caminhões";
const DESCRICAO = "Como controlar a expedição e a pesagem de caminhões: fluxo da balança à nota fiscal, perdas, regras do Inmetro e do CONTRAN e integração com o ERP.";
const FONTE_CTB = "https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm";
const FONTE_CONTRAN = "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao8822021.pdf/@@display-file/file";
const FONTE_INMETRO_RTM = "https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/metrologia-legal/balanca/qual-o-campo-de-aplicacao-do-rtm-para-balanca-port23694";
const FONTE_INMETRO_VERIFICACAO = "https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/metrologia-legal/balanca/como-ocorre-o-exercicio-de-verificacao-anual-de-balanca";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é controle de expedição?",
    resposta: "É o registro e a conferência de cada carga que sai da empresa: pedido, produto, cliente, veículo e peso. Em operações a granel, o controle se apoia na balança rodoviária, com tara, peso bruto e peso líquido. O objetivo é que o que saiu, o que foi faturado e o que foi baixado do estoque sejam a mesma quantidade.",
  },
  {
    pergunta: "Como funciona a pesagem de caminhões na expedição?",
    resposta: "O caminhão é pesado vazio antes de carregar (tara) e cheio depois (peso bruto). A diferença entre os dois é o peso líquido, que é a quantidade de produto que deve ir para a nota fiscal. O ticket de pesagem registra os dois pesos, a placa, o horário e quem operou a balança.",
  },
  {
    pergunta: "Dá para controlar a expedição em planilha?",
    resposta: "Dá, com poucas cargas por dia, um produto e uma pessoa que pesa e fatura. O limite aparece quando o peso é digitado à mão, quando há carga sem pedido e quando a conferência entre ticket, pedido e nota segura a fila. Nesse ponto, vale avaliar um sistema de mercado ou uma solução integrada ao ERP.",
  },
  {
    pergunta: "A balança rodoviária da empresa precisa ser verificada pelo Inmetro?",
    resposta: "Balança usada para determinar massa em transações comerciais está sujeita ao regulamento técnico metrológico aprovado pela Portaria Inmetro nº 157/2022. A verificação é anual e vale até 31 de dezembro do ano indicado na etiqueta. Depois de um reparo, confirme com o órgão de metrologia se a balança precisa de nova verificação antes de voltar a ser usada; em Minas Gerais, o órgão da rede do Inmetro é o Ipem-MG.",
  },
  {
    pergunta: "Quem responde pelo excesso de peso: quem expede ou quem transporta?",
    resposta: "Depende do caso. Pelo art. 257 do Código de Trânsito Brasileiro, o embarcador responde quando é o único remetente e o peso declarado na nota é menor que o aferido; se o peso declarado já passa do limite legal, embarcador e transportador respondem solidariamente pelo excesso de peso bruto total. A Resolução CONTRAN nº 882/2021 considera embarcador o remetente ou expedidor da carga, mesmo com frete a pagar.",
  },
  {
    pergunta: "Preciso trocar o ERP para controlar a expedição?",
    resposta: "Não necessariamente. O ERP costuma cuidar de cadastro, pedido, nota fiscal e estoque; o que falta é a operação da balança e do pátio. Uma camada de expedição integrada lê o pedido do ERP e devolve o ticket para faturar, sem duplicar o cadastro fiscal.",
  },
  {
    pergunta: "A Origami Lab atende mineradoras e indústrias de cal e calcário?",
    resposta: "A Origami Lab tem base em Formiga, Minas Gerais, na região de Arcos e Pains, conhecida pelo calcário e pela cal, e atende empresas no estado e em outras regiões do Brasil com diagnóstico, software sob medida e integração com ERP. O escopo de uma expedição precisa ser avaliado com operação, faturamento e TI antes da proposta. Esta página é um guia, não um case de implantação em expedição.",
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
    headline: "Controle de expedição e pesagem: da balança à nota fiscal",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    image: `${SITE}/assets/og-cover.jpg`,
    citation: [FONTE_CTB, FONTE_CONTRAN, FONTE_INMETRO_RTM, FONTE_INMETRO_VERIFICACAO],
    about: ["Controle de expedição", "Pesagem de caminhões", "Balança rodoviária", "Integração com ERP", "Mineração, cal e calcário"],
  },
});

const SUMARIO = [
  { id: "fluxo", rotulo: "O caminho do caminhão" },
  { id: "perdas", rotulo: "Onde o dinheiro se perde" },
  { id: "regras", rotulo: "Balança, peso e responsabilidade" },
  { id: "integracao", rotulo: "Balança, sistema e ERP" },
  { id: "indicadores", rotulo: "Indicadores e produção" },
  { id: "escolha", rotulo: "Planilha, sistema ou sob medida" },
  { id: "piloto", rotulo: "Um piloto que dá para medir" },
  { id: "fontes", rotulo: "Fontes" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaControleDeExpedicaoEPesagem() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: TITULO }]}
      rotulo="Mineração, cal e granéis"
      titulo={<>Controle de expedição e pesagem: <em className="ol-em">da balança à nota fiscal</em></>}
      lead={
        <>
          Controlar a expedição é garantir que cada caminhão saia com <strong>o produto, o cliente e o peso certos</strong>, e que o peso da balança chegue à nota fiscal sem ser digitado de novo.
          O controle cobre o caminho inteiro: ordem de carregamento, portaria, tara, carga, peso bruto, conferência com o pedido, nota e saída. Planilha atende volume baixo; quando a fila cresce
          e as regras de produto, contrato e frete são específicas, o controle precisa conversar com o ERP.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href={FORMULARIO}>Conversar sobre minha expedição <Seta /></a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#fluxo">Ver o caminho do caminhão</a>
        </>
      }
      meta="Por Origami Lab · Formiga, Minas Gerais · Atualizado em 23/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="fluxo">O caminho do caminhão dentro da unidade</h2>
        <p>
          Em mineração, cal, calcário, pedreira e agroindústria, a expedição é a última etapa da operação e a primeira do faturamento. Cada carga passa pelas mesmas etapas.
          O controle existe quando cada uma deixa um registro com hora, responsável e vínculo com a anterior.
        </p>
        <ol>
          <li><strong>Ordem de carregamento ou agendamento.</strong> Pedido liberado, com produto, quantidade, cliente, destino e transportadora. Em contrato, o saldo disponível.</li>
          <li><strong>Portaria.</strong> Placa, motorista e ordem conferidos na chegada. A hora de entrada começa a contar o tempo do caminhão na unidade.</li>
          <li><strong>Pesagem da tara.</strong> O caminhão vazio sobe na balança. O peso fica registrado com placa, hora e operador.</li>
          <li><strong>Carregamento.</strong> Pá carregadeira, silo, correia ou ensacado. Registre de qual pilha, silo ou lote saiu o produto.</li>
          <li><strong>Pesagem bruta.</strong> O caminhão carregado volta à balança. O peso líquido é o bruto menos a tara.</li>
          <li><strong>Conferência com o pedido.</strong> Peso líquido contra quantidade pedida e saldo do contrato; peso bruto contra o limite do veículo.</li>
          <li><strong>Nota fiscal.</strong> Emissão da NF-e com o peso pesado e, quando a operação exigir, do MDF-e. A regra de obrigatoriedade é fiscal; confirme com a sua equipe.</li>
          <li><strong>Saída.</strong> A portaria confere a nota com a placa e registra a hora. A carga só existe para o estoque e para o financeiro a partir daqui.</li>
        </ol>
        <QuadroDeFatos titulo="Termos da balança" itens={[
          { termo: "Tara", definicao: "Peso do veículo vazio. Na Resolução CONTRAN nº 882/2021, inclui carroçaria, equipamentos, combustível, ferramentas e estepe." },
          { termo: "Peso bruto", definicao: "Peso do veículo carregado, lido na segunda pesagem." },
          { termo: "Peso líquido", definicao: "Bruto menos tara. É a quantidade de produto que deve ir para a nota e para a baixa de estoque." },
          { termo: "Ticket de pesagem", definicao: "Registro de cada pesagem: pesos, placa, data, hora, operador, balança e ordem. É a evidência da carga." },
          { termo: "Limite regulamentar", definicao: "O menor valor entre o limite legal e o limite técnico do veículo, informado pelo fabricante ou implementador (Resolução CONTRAN nº 882/2021, art. 3º)." },
        ]} />

        <h2 id="perdas">Onde o dinheiro se perde na expedição</h2>
        <Tabela cabecalho={["Ponto de perda", "O que acontece", "Controle que evita"]} linhas={[
          ["Peso digitado à mão", "O operador lê o visor e digita. Um dígito trocado vira nota errada, cobrança indevida ou produto entregue sem cobrança.", "Peso lido direto do indicador da balança, sem campo editável."],
          ["Carga sem pedido", "O caminhão carrega por combinação no telefone. A nota sai depois, sai errada ou não sai.", "Carregamento só com ordem liberada. Exceção registrada com responsável e motivo."],
          ["Pesado diferente do faturado", "A nota sai com o peso do pedido, não com o da balança, ou é ajustada à mão.", "Nota gerada a partir do ticket. Relatório diário de pesado contra faturado."],
          ["Fila e tempo de permanência", "A conferência entre ticket, pedido e nota segura o caminhão. O motorista espera e o cliente reclama.", "Hora registrada em cada etapa, para achar o gargalo."],
          ["Produto ou cliente errado", "Placas parecidas, produtos com nomes parecidos, pilha errada.", "Ordem vinculada à placa e confirmação do produto no ponto de carga."],
          ["Excesso de peso", "O caminhão sai acima do limite. Multa, transbordo e responsabilidade de quem expediu.", "Limite regulamentar cadastrado por veículo e bloqueio da liberação."],
        ]} />
        <Nota>
          <strong>Exemplo ilustrativo:</strong> o pedido é de 30 t, a balança marca 31,2 t líquidas e a nota sai com 30 t. Naquela viagem, 1,2 t foram entregues sem cobrança. Repetida por
          semanas, a diferença só aparece no inventário da pilha, quando já não dá para saber em que cargas ela saiu.
        </Nota>

        <h2 id="regras">Balança verificada, limite de peso e responsabilidade</h2>
        <h3>A balança precisa estar verificada</h3>
        <p>
          Balança usada para determinar massa em transações comerciais está sujeita ao <a href={FONTE_INMETRO_RTM} target="_blank" rel="noopener">regulamento técnico metrológico
          de instrumentos de pesagem não automáticos, aprovado pela Portaria Inmetro nº 157/2022</a>. A <a href={FONTE_INMETRO_VERIFICACAO} target="_blank" rel="noopener">verificação
          é anual</a> e vale até 31 de dezembro do ano indicado na etiqueta. Depois de um reparo, confirme com o órgão de metrologia se é preciso nova verificação antes de voltar a usar a balança.
        </p>
        <p>
          O software não substitui a verificação. Ele pode guardar o certificado e a validade, avisar antes do vencimento e registrar quando a balança ficou fora de uso.
        </p>
        <h3>A tolerância não é margem de carregamento</h3>
        <p>
          Os limites de peso por tipo de veículo e por eixo estão na <a href={FONTE_CONTRAN} target="_blank" rel="noopener">Resolução CONTRAN nº 882/2021</a>. Na fiscalização
          por balança, ela admite tolerância de 5% sobre o peso bruto total ou combinado e de 12,5% sobre o peso por eixo (art. 50). O mesmo artigo diz que, no carregamento, essa
          tolerância não pode ser incorporada aos limites. A conta da expedição usa o limite, não o limite mais a tolerância.
        </p>
        <p>
          A fiscalização também pode ser feita pelo peso declarado na nota fiscal ou no manifesto, em qualquer tempo e local, sem tolerância sobre o valor declarado (art. 49).
        </p>
        <h3>Quem expede também responde</h3>
        <p>
          O <a href={FONTE_CTB} target="_blank" rel="noopener">Código de Trânsito Brasileiro</a>, no art. 257, torna o embarcador responsável pela infração de excesso de peso
          quando ele é o único remetente da carga e o peso declarado na nota é menor que o aferido. Se o peso declarado já passa do limite legal, embarcador e transportador
          respondem solidariamente pelo excesso de peso bruto total. A Resolução CONTRAN nº 882/2021 considera embarcador o remetente ou expedidor, mesmo com frete a pagar (art. 56).
        </p>
        <Nota>
          Este resumo orienta o desenho do controle. Ele não substitui orientação jurídica nem a leitura do texto vigente nas fontes oficiais antes de transformar uma regra em bloqueio no sistema.
        </Nota>

        <h2 id="integracao">Balança, sistema e ERP: quem é dono de cada dado</h2>
        <p>
          O indicador da balança (o visor) normalmente pode enviar o peso a um computador, por porta serial ou rede. O formato varia por fabricante e modelo; confirme o que o
          seu indicador oferece antes de escolher a solução. Com o peso lido direto, o ticket deixa de depender de digitação.
        </p>
        <Tabela cabecalho={["Dado", "Onde nasce", "Para onde vai"]} linhas={[
          ["Cliente, produto e condição comercial", "ERP", "Desce para a expedição, só para leitura."],
          ["Pedido, contrato e saldo", "ERP", "Desce. Cada carga consome saldo e o resultado volta ao ERP."],
          ["Veículo, placa, tara de referência e limite", "Expedição", "Fica na expedição. A placa segue para a nota."],
          ["Ticket: pesos, hora, operador, placa e foto", "Balança e sistema de expedição", "Sobe para o ERP como base do faturamento."],
          ["NF-e e, quando exigido, MDF-e", "ERP ou emissor fiscal", "Número e chave voltam para o ticket."],
          ["Baixa de estoque", "ERP", "Gerada a partir do peso líquido do ticket."],
        ]} />
        <p>
          <strong>Placa e foto.</strong> Leitura de placa por câmera e foto do caminhão na balança ajudam a provar qual veículo foi pesado e com qual carga. São evidências;
          a liberação continua dependendo de uma regra clara e de um responsável.
        </p>
        <p>
          <strong>Contingência.</strong> Se a integração com o ERP cair, a balança não pode parar. Defina como as cargas são registradas nesse intervalo e como sobem depois, sem
          duplicar nota nem baixa. A <a href="/integracao-erp-chao-de-fabrica">integração do ERP com o chão de fábrica</a> e a{" "}
          <a href="/integracao-de-sistemas">integração de sistemas</a> tratam desse cuidado.
        </p>
        <p>
          <strong>Fiscal.</strong> A regra fiscal fica no ERP ou no emissor. A expedição entrega peso, produto, cliente e placa; não repete cálculo de imposto. Se a equipe fiscal
          está revisando cadastros para a reforma tributária, a <a href="/calculadora-reforma-tributaria">calculadora de CBS e IBS</a> ajuda a conferir um item.
        </p>

        <h2 id="indicadores">Indicadores da expedição e ligação com a produção</h2>
        <QuadroDeFatos titulo="O que acompanhar por dia e por turno" itens={[
          { termo: "Tempo na unidade", definicao: "Da portaria à saída, separado por etapa: fila, tara, carga, bruto e nota." },
          { termo: "Pesado x faturado", definicao: "Diferença em toneladas por dia, produto e cliente. O esperado é zero." },
          { termo: "Cargas por hora", definicao: "Por balança e por ponto de carga, para ver a capacidade real da expedição." },
          { termo: "Fila", definicao: "Caminhões aguardando por etapa e horário, para planejar agendamento e turnos." },
          { termo: "Cargas com exceção", definicao: "Sem ordem, com repesagem, com nota cancelada ou ajustada." },
        ]} />
        <p>
          Em mineração e cal, a expedição fecha a conta da produção. O peso que sai alimenta o estoque de pátio, em pilhas e silos, que depende do que a lavra, a britagem e o
          forno entregaram. Se a saída é pesada e a entrada é estimada, a diferença aparece no inventário sem explicação. Por isso vale ligar a expedição ao{" "}
          <a href="/apontamento-de-producao">apontamento de produção</a> e ao <a href="/planejamento-de-producao">planejamento</a>, e acompanhar os dois na{" "}
          <a href="/gestao-industrial-em-tempo-real">gestão em tempo real</a>.
        </p>
        <p>
          Na região de Arcos, Pains e Formiga, esse é um dos pontos em que a informação mais se perde: ticket, pedido e nota vivem em lugares diferentes. Descrevemos o cenário em{" "}
          <a href="/tecnologia-para-industrias-minas-gerais#cal-calcario">tecnologia para indústrias de Minas Gerais</a>.
        </p>

        <h2 id="escolha">Planilha, sistema de mercado ou software sob medida</h2>
        <Tabela cabecalho={["Caminho", "Quando faz sentido", "Limite"]} linhas={[
          ["Planilha", "Poucas cargas por dia, um produto, uma balança e uma pessoa que pesa e fatura.", "O peso é digitado. Não há trava contra carga sem pedido. A conferência depende de quem preenche."],
          ["Sistema de balança ou expedição de mercado", "Fluxo padrão: ticket, tara, bruto, cadastro de placas e integração pronta com o seu ERP.", "Regras de contrato, frete ou produto fora do padrão voltam para uma planilha paralela."],
          ["Software sob medida integrado ao ERP", "Regras específicas de produto, contrato, cliente e frete, que precisam conversar com ERP, fiscal e controle de produção.", "Exige diagnóstico, um dono do processo na empresa e manutenção das integrações."],
        ]} />
        <p>
          Antes de contratar, teste o sistema de mercado com um dia real de cargas, incluindo as exceções: saldo de contrato por obra, várias transportadoras com regras de frete
          diferentes, cliente que exige laudo por carga, produto que muda conforme a pilha. Se ele cobre o fluxo, é provavelmente a escolha mais simples.
        </p>
        <p>
          Quando não cobre, o <a href="/desenvolvimento-de-software">Studio de Produto</a> da Origami Lab constrói a parte que falta, integrada ao ERP e ao que já existe. A
          primeira versão entra em uso em até 1 mês. Depois o software evolui em fases, cada uma com linha de base, meta e ganho medido, e você decide se continua. O código e os
          dados ficam com a empresa, e o projeto é documentado como P&amp;D desde o início, para avaliar a Lei do Bem. Implantação de ERP não faz parte do escopo.
        </p>

        <h2 id="piloto">Comece por um piloto que dá para medir</h2>
        <ol>
          <li><strong>Escolha o recorte.</strong> Uma unidade, um produto ou um turno, com um responsável na expedição e outro no faturamento.</li>
          <li><strong>Meça a linha de base.</strong> Antes de mudar, registre o tempo do caminhão por etapa, a diferença entre pesado e faturado, as cargas com exceção e as notas refeitas.</li>
          <li><strong>Ligue a balança ao sistema.</strong> Peso lido do indicador, ticket com placa e foto, carregamento só com ordem.</li>
          <li><strong>Integre o mínimo com o ERP.</strong> Pedido e saldo descem; ticket sobe para faturar. Teste a contingência antes de entrar em uso.</li>
          <li><strong>Compare e decida.</strong> Mesmos indicadores, mesmo recorte. Ampliar para outras unidades e produtos é uma decisão tomada com o resultado na mesa.</li>
        </ol>
        <p>Não há percentual de ganho que valha para toda operação. O piloto mostra o efeito na sua expedição e o esforço para sustentá-lo.</p>

        <h2 id="fontes">Fontes</h2>
        <p>Textos oficiais consultados em 23/11/2026. O fluxo, os controles e o roteiro do piloto são orientação da Origami Lab.</p>
        <ul>
          <li><a href={FONTE_INMETRO_RTM} target="_blank" rel="noopener">Inmetro: campo de aplicação do regulamento de balanças (Portaria nº 157/2022).</a></li>
          <li><a href={FONTE_INMETRO_VERIFICACAO} target="_blank" rel="noopener">Inmetro: como ocorre a verificação anual de balança.</a></li>
          <li><a href={FONTE_CONTRAN} target="_blank" rel="noopener">Resolução CONTRAN nº 882/2021: limites de pesos e dimensões, tolerâncias e fiscalização.</a></li>
          <li><a href={FONTE_CTB} target="_blank" rel="noopener">Código de Trânsito Brasileiro (Lei nº 9.503/1997), arts. 231 e 257.</a></li>
        </ul>
      </Documento>

      <ChamadaDaOrigami frente="producao" pagina={CAMINHO} />
      <Perguntas prefixo="expedicao" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas leituras={[
        { href: "/integracao-erp-chao-de-fabrica", titulo: "Integração do ERP com a produção", texto: "Os dados que precisam subir e descer entre a operação e a gestão." },
        { href: "/tecnologia-para-industrias-minas-gerais", titulo: "Indústrias de Minas Gerais", texto: "Cal, calcário e mineração em Arcos, Pains e Formiga, e onde o dado se perde." },
        { href: "/gestao-industrial-em-tempo-real", titulo: "Gestão industrial em tempo real", texto: "Indicadores com origem definida para agir durante o turno." },
      ]} />
      <ChamadaFinal
        titulo="O peso que sai da balança é o mesmo que vai para a nota?"
        lead="Traga um dia de cargas da sua expedição. Vamos olhar o caminho da portaria à nota e avaliar o que o ERP já atende e onde integração ou software sob medida resolvem."
        whatsapp="Olá! Quero avaliar o controle de expedição e pesagem da minha operação."
      />
    </PaginaDeConteudo>
  );
}
