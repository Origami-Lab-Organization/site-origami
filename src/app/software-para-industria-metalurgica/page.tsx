import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { SITE } from "@/conteudo/paginas";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/software-para-industria-metalurgica";
const TITULO = "Software para indústria metalúrgica";
const DESCRICAO = "Como definir software para metalúrgicas, fundição e usinagem: ordens, roteiros, lotes, apontamento, qualidade e custo, integrados ao ERP.";
const FONTE_RASTREABILIDADE = "https://revistabrmecatronica.sp.senai.br/ojs/index.php/revistabrmecatronica/article/view/179";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Que software uma indústria metalúrgica precisa?",
    resposta: "Depende do processo. O sistema deve relacionar pedido, ordem de produção, roteiro, material, apontamentos e qualidade. Numa usinagem sob encomenda, revisão do desenho e tempos por operação podem ser centrais; numa fundição, a relação entre corrida, lotes e inspeção pode determinar o desenho da solução. Comece pelos controles que a operação precisa comprovar.",
  },
  {
    pergunta: "É preciso trocar o ERP da metalúrgica?",
    resposta: "Não necessariamente. Se o ERP atende aos controles fiscais, financeiros e de estoque, primeiro avalie seu módulo de produção e as integrações disponíveis. Uma camada operacional sob medida faz sentido quando há uma lacuna relevante de coleta, programação ou rastreabilidade que as opções existentes não atendem.",
  },
  {
    pergunta: "O apontamento precisa vir automaticamente da máquina?",
    resposta: "Não. Um piloto pode usar apontamento digital pelo operador, associado à ordem e à operação. A coleta automática depende dos dados que o equipamento disponibiliza, da infraestrutura e da viabilidade da integração. Mesmo quando há sinal de máquina, motivo de parada, aprovação e retrabalho podem precisar de registro humano.",
  },
  {
    pergunta: "Como acompanhar o custo de uma ordem de usinagem?",
    resposta: "Associe à ordem os materiais consumidos, as horas por operação, o setup, os serviços de terceiros e o retrabalho. Compare o realizado com o orçamento usando uma regra de custeio acordada com a gestão. O custo hora-máquina ajuda nessa análise, mas não substitui o custo completo do produto nem a apuração contábil.",
  },
  {
    pergunta: "Ter rastreabilidade no software garante certificação de qualidade?",
    resposta: "Não. O software pode registrar evidências, mas a qualidade depende dos critérios do produto, do processo, das pessoas e das exigências aplicáveis. A empresa deve definir quais identificadores, inspeções, aprovações e documentos precisa preservar com sua equipe de qualidade e seus clientes.",
  },
  {
    pergunta: "A Origami Lab atende metalúrgicas de Minas Gerais?",
    resposta: "A Origami Lab tem base em Formiga, Minas Gerais, e atende empresas no estado e em outras regiões do Brasil com diagnóstico, desenvolvimento de software e integração. O escopo de uma metalúrgica precisa ser avaliado com produção, TI e gestão antes da proposta; esta página é um guia de requisitos, não um case de implantação no setor.",
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
    headline: "Software para metalúrgicas: da ordem ao custo real",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    image: `${SITE}/assets/og-cover.jpg`,
    citation: FONTE_RASTREABILIDADE,
    about: ["Gestão da produção metalúrgica", "Rastreabilidade industrial", "Integração com ERP", "Custo de produção"],
  },
});

const SUMARIO = [
  { id: "processo", rotulo: "Comece pelo processo" },
  { id: "requisitos", rotulo: "Do problema ao requisito" },
  { id: "rastreabilidade", rotulo: "Rastreabilidade e qualidade" },
  { id: "erp", rotulo: "O lugar do ERP" },
  { id: "custos", rotulo: "Tempos e custos" },
  { id: "piloto", rotulo: "Um piloto que dá para avaliar" },
  { id: "contratar", rotulo: "Antes de contratar" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaSoftwareParaIndustriaMetalurgica() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: TITULO }]}
      rotulo="Indústria metalúrgica"
      titulo={<>Software para metalúrgicas: <em className="ol-em">da ordem ao custo real</em></>}
      lead={
        <>
          Um software para indústria metalúrgica precisa ligar o que foi vendido ao que acontece na produção: <strong>ordem, roteiro, material, tempo, qualidade e custo</strong>.
          Na fundição e na usinagem sob encomenda, os controles mudam. A decisão começa por essas diferenças e pelo que o ERP já atende, antes de escolher um sistema novo.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href={FORMULARIO}>Conversar sobre minha operação <Seta /></a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#requisitos">Ver requisitos do sistema</a>
        </>
      }
      meta="Por Origami Lab · Formiga, Minas Gerais · Atualizado em 18/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="processo">Comece pelo processo, não pela lista de telas</h2>
        <p>
          Metalúrgica não é um fluxo único. Um fabricante de peças seriadas, uma fundição e uma oficina de usinagem por encomenda podem precisar de controles diferentes.
          Escolha uma família de produtos e acompanhe uma ordem desde o pedido até a expedição. Anote onde a informação muda de sistema, de papel ou de responsável.
        </p>
        <QuadroDeFatos titulo="Três recortes para definir o escopo" itens={[
          { termo: "Usinagem sob encomenda", definicao: "Relacionar desenho e revisão, roteiro, preparação da máquina, horas realizadas e inspeção da peça." },
          { termo: "Fundição", definicao: "Definir a relação necessária entre matéria-prima, corrida, lote, transformação e resultados de inspeção." },
          { termo: "Produção seriada", definicao: "Acompanhar quantidade boa, refugo, paradas e mudança de produto por recurso e turno." },
        ]} />
        <p>
          Esses recortes orientam o diagnóstico, mas não são uma especificação pronta. Restrições de material, terceirização, tolerâncias e exigências do cliente precisam
          entrar no mapa real. O <a href="/planejamento-de-producao">planejamento e controle da produção</a> organiza a sequência; o sistema precisa devolver o que ocorreu.
        </p>

        <h2 id="requisitos">Transforme problemas de operação em critérios de aceite</h2>
        <Tabela cabecalho={["Problema observado", "Requisito a avaliar", "Como conferir"]} linhas={[
          ["A prioridade muda por conversa e a ordem perde posição.", "Fila por recurso, dependências e histórico de reprogramação.", "Localizar a próxima operação e entender por que foi priorizada."],
          ["O operador recebe uma versão antiga do desenho.", "Revisão identificada, documento associado à ordem e controle de alteração.", "Recuperar a revisão usada numa operação encerrada."],
          ["Peças e materiais mudam de identificação entre setores.", "Identificador de lote e registro das transformações necessárias.", "Partir de uma peça ou lote e reconstruir sua origem e destino."],
          ["O retrabalho entra como produção nova.", "Registro separado de refugo, retrabalho e aprovação.", "Conferir quantidades boas e horas adicionais sem duplicar entrega."],
          ["O custo só aparece quando a encomenda acabou.", "Tempos e consumos por ordem, com comparação ao previsto.", "Explicar a diferença entre custo orçado e realizado."],
          ["O estoque do ERP diverge do apontamento.", "Integração com validação, registro de falhas e reprocessamento.", "Conferir uma baixa e corrigir falha sem duplicar movimento."],
        ]} />

        <h2 id="rastreabilidade">Rastreabilidade precisa de uma pergunta de origem e destino</h2>
        <p>
          Defina o que a equipe de qualidade precisa responder: qual material entrou nesta ordem, por quais operações o lote passou, quais inspeções foram aprovadas e
          para quais pedidos as peças seguiram. Só depois escolha etiqueta, código de barras, número de série ou outro meio de identificação.
        </p>
        <p>
          Um <a href={FONTE_RASTREABILIDADE} target="_blank" rel="noopener">estudo publicado na Revista Brasileira de Mecatrônica do SENAI</a> descreve o rastreio de peças
          em etapas de pré-montagem de cubos de roda, com integração entre gestão da produção e controladores. É uma referência de arquitetura de um caso específico;
          não significa que toda metalúrgica precise da mesma combinação de câmeras, RFID e automação.
        </p>
        <Nota>
          <strong>Exemplo ilustrativo:</strong> se um lote se divide entre duas ordens, o registro precisa preservar essa relação. Se os lotes se misturam numa transformação,
          a regra de rastreio deve explicar como a origem é reconstruída. Um campo livre com o nome do material não resolve sozinho essas duas situações.
        </Nota>
        <p>O sistema registra evidências. Ele não concede certificação nem substitui os procedimentos e critérios definidos pela qualidade.</p>

        <h2 id="erp">Preserve o que o ERP já resolve</h2>
        <p>
          Avalie primeiro as funções contratadas, as configurações e os acessos do ERP. Se o módulo existente atende ao roteiro, à coleta e à consulta da operação, a
          prioridade pode ser melhorar o uso. Quando há uma lacuna relevante, a <a href="/integracao-erp-chao-de-fabrica">integração do ERP com o chão de fábrica</a>{" "}
          permite construir uma camada operacional sem duplicar a base fiscal e financeira.
        </p>
        <p>
          Combine qual sistema é responsável por cada cadastro e movimento. Ordens e materiais precisam chegar à operação; quantidades, consumos e encerramentos precisam
          voltar pelo caminho permitido pelo ERP. O <a href="/apontamento-de-producao">apontamento de produção</a> deve registrar também correções, responsável e motivo.
        </p>

        <h2 id="custos">Separe preparação, produção, espera e retrabalho</h2>
        <p>
          Juntar tudo num único tempo esconde a causa do desvio. Em uma encomenda, confira setup e execução por operação, material consumido e serviço de terceiros.
          Use a <a href="/calculadora-custo-hora-maquina">calculadora de custo hora-máquina</a> para explorar o custo gerencial da hora produtiva; ela não inclui sozinha
          todos os componentes do custo de uma peça.
        </p>
        <p>
          Para recursos em que há tempo planejado, ciclo ideal e quantidade boa definidos, a <a href="/calculadora-de-oee">calculadora de OEE</a> ajuda a separar perdas
          de disponibilidade, velocidade e qualidade. Em produção variada, confirme o ciclo de cada item antes de comparar resultados entre ordens.
        </p>

        <h2 id="piloto">Um piloto que a produção consegue avaliar</h2>
        <ol>
          <li><strong>Escolha um fluxo delimitado.</strong> Uma família de peças, uma célula ou uma etapa, com responsável pela operação e pela conferência.</li>
          <li><strong>Registre a situação anterior.</strong> Tempo para localizar a ordem, atraso do apontamento, correções de estoque e horas de retrabalho.</li>
          <li><strong>Teste situações de exceção.</strong> Troca de revisão, divisão de lote, apontamento errado, perda de conexão e rejeição da integração.</li>
          <li><strong>Compare dados e rotina.</strong> Confira os totais e observe se a equipe consegue usar a solução no turno, sem controles paralelos desnecessários.</li>
          <li><strong>Decida a expansão.</strong> Ampliar exige responsáveis, treinamento, suporte e critérios de aceite combinados, além da demonstração das telas.</li>
        </ol>
        <p>Não há percentual universal de ganho. O piloto serve para descobrir o efeito no processo escolhido e o esforço necessário para sustentá-lo.</p>

        <h2 id="contratar">O que levar para avaliar um projeto</h2>
        <p>
          Separe uma ordem real, seu roteiro, os documentos usados, exemplos de apontamento e uma divergência que a equipe precisou resolver. Envolva produção, qualidade,
          TI e gestão de custos. A proposta deve delimitar integrações, migração, infraestrutura, continuidade e propriedade dos dados e do código.
        </p>
        <p>
          A Origami Lab tem base em Formiga e atende Minas Gerais e outras regiões do Brasil. O trabalho de <a href="/desenvolvimento-de-software">desenvolvimento de software</a>{" "}
          começa pelo processo e pelo escopo necessário. Veja também nossa abordagem de <a href="/tecnologia-para-industrias-minas-gerais">tecnologia para indústrias de Minas Gerais</a>.
        </p>
      </Documento>

      <ChamadaDaOrigami frente="producao" pagina={CAMINHO} />
      <Perguntas prefixo="metalurgica" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas leituras={[
        { href: "/planejamento-de-producao", titulo: "Planejamento da produção", texto: "Prioridades, capacidade e sequenciamento na operação sob encomenda." },
        { href: "/apontamento-de-producao", titulo: "Apontamento de produção", texto: "Como fazer o dado nascer junto da operação e alimentar a gestão." },
        { href: "/mes-vs-erp", titulo: "MES, ERP e PCP", texto: "Entenda as responsabilidades dos sistemas antes de contratar uma camada nova." },
      ]} />
      <ChamadaFinal
        titulo="Sua ordem de produção conta o que realmente aconteceu?"
        lead="Traga um fluxo da operação. Vamos avaliar o que o ERP já atende e onde integração ou software sob medida podem resolver uma lacuna."
        whatsapp="Olá! Quero avaliar software e integração para a operação da minha metalúrgica."
      />
    </PaginaDeConteudo>
  );
}
