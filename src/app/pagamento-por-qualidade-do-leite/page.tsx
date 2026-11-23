import type { ReactNode } from "react";
import { ChamadaDaOrigami } from "@/components/conteudo/ChamadaDaOrigami";
import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { SITE } from "@/conteudo/paginas";
import { grafoDaPagina, ORGANIZACAO, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/pagamento-por-qualidade-do-leite";
const TITULO = "Recebimento de leite e pagamento por qualidade";
const DESCRICAO = "Regras do MAPA para receber leite cru, mapa de recebimento da SEF-MG e como montar uma tabela de pagamento por qualidade que o produtor consegue conferir.";

/* Fontes oficiais conferidas em 23/11/2026. IN 76 e IN 77 na versão consolidada pelo MAPA. */
const FONTES = {
  in76: "https://wikisda.agricultura.gov.br/dipoa_baselegal/in_76-2018_rtiq_leite.pdf",
  in77: "https://www.gov.br/agricultura/pt-br/assuntos/producao-animal/plano-de-qualificacao-de-fornecedores-de-leite/arquivos-do-pqfl/IN772018QualificodefornecedoresdeleiteatualizadapelaIN5919.pdf",
  perguntas: "https://wikisda.agricultura.gov.br/manual_leite/perguntasrespostas_in76_in77_3ed.pdf",
  notaTecnica: "https://www.gov.br/agricultura/pt-br/acesso-a-informacao/bpr/analise-de-impacto-regulatorio/nota-tecnica-de-dispensa-de-analise-impacto-regulatorio/sda/2023/21000-0985212022-82.pdf",
  ricms: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/anexoviii2023_6.html",
  mapaSef: "https://www.fazenda.mg.gov.br/empresas/sistemas/mapa-de-recebimento-de-leite/",
  ibge: "https://biblioteca.ibge.gov.br/visualizacao/periodicos/84/ppm_2024_v52_br_informativo.pdf",
  embrapa: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1093159/1/DiasetalPagamentoporqualidade.pdf",
};

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

function Fonte({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener">{children}</a>;
}

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Qual a temperatura de recebimento do leite cru refrigerado?",
    resposta: "No estabelecimento, o leite cru refrigerado deve chegar a no máximo 7,0 °C, e a norma admite, de forma excepcional, o recebimento até 9,0 °C (IN 76/2018, art. 3º, e IN 77/2018, art. 30, do MAPA). O programa de autocontrole do laticínio deve buscar garantir os 7,0 °C e prever medidas para reduzir a frequência da exceção. Na propriedade, o tanque de expansão direta é definido como capaz de resfriar o leite a 4,0 °C ou menos em até três horas.",
  },
  {
    pergunta: "Quais são os limites de CPP e CCS do leite cru?",
    resposta: "O leite de cada tanque, individual ou comunitário, deve ter média geométrica trimestral de no máximo 300.000 UFC/mL na contagem padrão em placas (CPP) e de 500.000 células/mL na contagem de células somáticas (CCS), segundo o art. 7º da IN 76/2018. A média usa três meses consecutivos, com pelo menos uma amostra mensal de cada tanque analisada em laboratório da RBQL. Antes do processamento, o leite cru deve ter CPP de até 900.000 UFC/mL.",
  },
  {
    pergunta: "O que acontece com o produtor de leite fora do padrão?",
    resposta: "Quando um resultado da RBQL viola o padrão, o laticínio deve verificar na propriedade as condições de obtenção e conservação do leite e implementar ações corretivas (IN 77/2018, art. 44). Se a média geométrica de CPP ficar fora do padrão por três meses consecutivos, a coleta naquela propriedade deve ser interrompida (art. 45). Para retomar, é preciso identificar a causa, corrigir e apresentar um resultado de CPP dentro do padrão emitido por laboratório da RBQL.",
  },
  {
    pergunta: "O pagamento por qualidade do leite é obrigatório?",
    resposta: "As Instruções Normativas 76 e 77 de 2018 fixam padrões mínimos, análises e procedimentos de coleta e recepção, mas não definem preço nem tabela de bonificação. A tabela de pagamento por qualidade é uma política de cada laticínio ou cooperativa, que escolhe critérios, faixas e valores. O que não é opcional são o padrão mínimo e as análises exigidas pela norma.",
  },
  {
    pergunta: "O que é o mapa de recebimento de leite em Minas Gerais?",
    resposta: "É uma obrigação do RICMS/MG (Anexo VIII, art. 324) para quem recebe leite cru de produtor rural, exceto varejista: controlar a entrada diária de leite e transmitir à Secretaria de Fazenda, até o dia 15 do mês seguinte, um arquivo com as remessas diárias de cada produtor e as notas fiscais globais. O arquivo é gerado pelo aplicativo Mapa de Recebimento de Leite, disponível no site da SEF-MG. O enquadramento de cada produtor deve ser confirmado com a contabilidade.",
  },
  {
    pergunta: "Como o produtor confere o pagamento por qualidade?",
    resposta: "Com um extrato que mostre o volume de cada coleta, os resultados de laboratório usados com a data de coleta da amostra, a faixa em que cada resultado caiu, o ajuste aplicado e os descontos até o valor líquido. A IN 77/2018 determina que os laboratórios da RBQL disponibilizem os resultados também aos produtores, o que permite cruzar o extrato com o laudo. Se o produtor não consegue refazer a conta, a tabela não está transparente.",
  },
  {
    pergunta: "A Origami Lab atende laticínios e cooperativas?",
    resposta: "A Origami Lab tem base em Formiga, Minas Gerais, e desenvolve software sob medida integrado ao ERP, pelo Studio de Produto, para empresas de base em Minas e em outras regiões do Brasil. O escopo de um laticínio ou cooperativa precisa ser avaliado com captação, qualidade, fiscal e TI antes da proposta. Esta página é um guia de requisitos; a Origami não tem case publicado no setor de laticínios.",
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
    headline: "Recebimento de leite e pagamento por qualidade: do tanque ao extrato do produtor",
    description: DESCRICAO,
    inLanguage: "pt-BR",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    author: { "@id": ORGANIZACAO["@id"] },
    publisher: { "@id": ORGANIZACAO["@id"] },
    image: `${SITE}/assets/og-cover.jpg`,
    citation: Object.values(FONTES),
    about: ["Recebimento de leite cru refrigerado", "Pagamento por qualidade do leite", "Instruções Normativas 76 e 77 de 2018 do MAPA", "Mapa de Recebimento de Leite (SEF-MG)", "Integração com ERP"],
  },
});

const SUMARIO = [
  { id: "ciclo", rotulo: "Da coleta ao pagamento" },
  { id: "regras", rotulo: "O que o MAPA exige" },
  { id: "mapa-mg", rotulo: "Mapa de recebimento em MG" },
  { id: "pagamento", rotulo: "O que é pagamento por qualidade" },
  { id: "tabela", rotulo: "Uma tabela transparente" },
  { id: "conciliacao", rotulo: "Conciliação e extrato" },
  { id: "erros", rotulo: "Erros comuns" },
  { id: "escolha", rotulo: "Planilha, mercado ou sob medida" },
  { id: "erp", rotulo: "Integração com ERP e fiscal" },
  { id: "piloto", rotulo: "Um piloto delimitado" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaPagamentoPorQualidadeDoLeite() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias", caminho: "/guias" }, { nome: TITULO }]}
      rotulo="Laticínios e cooperativas"
      titulo={<>Recebimento de leite e pagamento por qualidade: <em className="ol-em">do tanque ao extrato</em></>}
      lead={
        <>
          O recebimento de leite junta três registros de cada produtor: o volume coletado, a amostra do tanque analisada em laboratório da RBQL e a tabela de bonificação.
          Os padrões mínimos e as análises vêm das <strong>Instruções Normativas 76 e 77 de 2018 do MAPA</strong>; a tabela de pagamento por qualidade é política de cada
          laticínio ou cooperativa. O pagamento é transparente quando o produtor consegue refazer a conta do próprio extrato.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href={FORMULARIO}>Conversar sobre minha captação <Seta /></a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#regras">Ver as regras do MAPA</a>
        </>
      }
      meta="Por Origami Lab · Formiga, Minas Gerais · Atualizado em 23/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="ciclo">Da coleta ao pagamento: registros que precisam bater</h2>
        <p>
          O leite sai do tanque da propriedade, passa pelo caminhão, é recebido e analisado na plataforma do laticínio e vira, no fechamento do mês, um valor a pagar.
          Cada etapa gera um registro. O pagamento só é confiável quando todos se ligam ao mesmo produtor, ao mesmo tanque e ao mesmo período. Em Minas Gerais, o tema pesa
          mais: segundo a <Fonte href={FONTES.ibge}>Pesquisa da Pecuária Municipal 2024 do IBGE</Fonte>, o estado foi o maior produtor de leite de vaca do país em 2024, com
          27,4% da produção nacional.
        </p>
        <QuadroDeFatos titulo="O ciclo do leite, etapa por etapa" itens={[
          { termo: "Coleta na propriedade", definicao: "O coletor mede a temperatura, faz o teste do alizarol, registra data e horário e colhe uma amostra identificada de cada tanque antes de captar." },
          { termo: "Recebimento na plataforma", definicao: "O laticínio analisa o leite de cada compartimento do caminhão (temperatura, acidez, composição e fraudes) e pesquisa antimicrobianos em cada recebimento." },
          { termo: "Análises da RBQL", definicao: "Ao menos uma vez por mês, a amostra de cada tanque vai a um laboratório credenciado, que mede composição, CCS, CPP e resíduos." },
          { termo: "Pagamento", definicao: "Volume do mês e resultados passam pela tabela de bonificação e viram extrato, documento fiscal de entrada e título a pagar." },
        ]} />

        <h2 id="regras">O que o MAPA exige no recebimento do leite</h2>
        <p>
          Os padrões do leite cru refrigerado estão na <Fonte href={FONTES.in76}>IN 76/2018</Fonte>; produção, coleta, transporte e recepção, na{" "}
          <Fonte href={FONTES.in77}>IN 77/2018</Fonte>, ambas do Ministério da Agricultura. A tabela segue o texto consolidado pelo MAPA, com as alterações das INs 58 e 59
          de 2019 e 55 de 2020. Estabelecimentos sob inspeção estadual ou municipal seguem essas regras quando não há legislação própria equivalente (IN 76, art. 35; IN 77, art. 61).
        </p>
        <Tabela cabecalho={["Etapa", "O que a norma determina", "Onde está"]} linhas={[
          ["Tanque na propriedade", "Tanque de expansão direta dimensionado para resfriar o leite a 4,0 °C ou menos em até três horas.", "IN 77, art. 2º, VI"],
          ["Intervalo e prazo", "No máximo 48 horas entre coletas na propriedade. Leite em latões, sem refrigeração, entregue em até duas horas após o fim da ordenha.", "IN 77, arts. 27 e 29"],
          ["Coleta", "Temperatura e alizarol 72% registrados com data e horário; amostra de cada tanque, identificada, colhida antes da captação.", "IN 77, arts. 24 e 25"],
          ["Transporte das amostras", "Sem congelamento, a até 7,0 °C, até a chegada ao laticínio.", "IN 77, art. 22, II"],
          ["Temperatura de recebimento", "Até 7,0 °C; excepcionalmente, até 9,0 °C.", "IN 76, art. 3º, I; IN 77, art. 30"],
          ["Plataforma de recebimento", "Análise diária de cada compartimento: temperatura, alizarol, acidez, crioscopia, densidade, gordura, sólidos e fraudes; ao menos dois grupos de antimicrobianos por recebimento.", "IN 77, arts. 31 e 33"],
          ["Laboratório da RBQL", "Ao menos uma amostra mensal de cada tanque para gordura, proteína, lactose, sólidos, CCS, CPP e resíduos, em data que o produtor não conhece antes.", "IN 77, arts. 40 e 41"],
          ["Padrão do tanque", "Média geométrica trimestral de até 300.000 UFC/mL de CPP e até 500.000 CS/mL de CCS.", "IN 76, art. 7º"],
          ["Composição mínima", "Gordura 3,0 g/100 g, proteína 2,9 g/100 g, lactose 4,3 g/100 g, sólidos não gordurosos 8,4 g/100 g e sólidos totais 11,4 g/100 g.", "IN 76, art. 5º"],
        ]} />
        <p>
          Quando um resultado da RBQL viola o padrão, o laticínio precisa verificar a propriedade e implementar ações corretivas (IN 77, art. 44). Se a média geométrica de CPP
          ficar fora do padrão por três meses consecutivos, a coleta naquela propriedade deve ser interrompida; para retomar, é preciso identificar a causa, corrigir e apresentar
          um resultado de CPP dentro do padrão emitido pela RBQL (art. 45). A interrupção trata da CPP; para CCS fora do padrão, vale a verificação do art. 44. Se um
          compartimento é reprovado na plataforma, o laticínio deve avaliar as amostras individuais dos produtores daquele leite (art. 37).
        </p>
        <Nota>
          <strong>Confira a redação vigente</strong> com o serviço de inspeção antes de mudar um procedimento. Em 2023, uma{" "}
          <Fonte href={FONTES.notaTecnica}>nota técnica do MAPA</Fonte> propôs ajustar o texto do art. 45 da IN 77. O{" "}
          <Fonte href={FONTES.perguntas}>material de perguntas e respostas do MAPA</Fonte> traz exemplos de cálculo da média geométrica e da interrupção da coleta.
        </Nota>

        <h2 id="mapa-mg">Mapa de Recebimento de Leite em Minas Gerais</h2>
        <p>
          Em Minas, o termo tem sentido fiscal. O <Fonte href={FONTES.ricms}>RICMS/MG, Anexo VIII, art. 324</Fonte>, prevê o controle da entrada diária de leite cru pelo Mapa
          de Recebimento de Leite e determina que o contribuinte, exceto varejista, que recebe leite cru de produtor rural transmita à SEF, até o dia 15 do mês seguinte, o arquivo
          com o mapa e as notas fiscais globais. Segundo a <Fonte href={FONTES.mapaSef}>página da SEF-MG</Fonte>, a obrigação vale desde as informações de julho de 2023.
        </p>
        <QuadroDeFatos titulo="O que o mapa e as notas globais pedem" itens={[
          { termo: "Remessas diárias", definicao: "Para cada produtor: inscrição estadual, data da remessa, litros, valor bruto, frete, valor líquido e placa do veículo (art. 324, § 3º)." },
          { termo: "Produtor rural pessoa física", definicao: "Inscrito no Cadastro de Produtor Rural Pessoa Física: o laticínio emite, até o dia 10 do mês seguinte, nota fiscal global de série específica, com quantidade e preço (art. 327)." },
          { termo: "Produtor contribuinte do ICMS", definicao: "O laticínio informa quantidade e preço até o dia 10, e o produtor emite a nota fiscal global até o dia 15 (art. 326)." },
        ]} />
        <p>
          O mesmo volume diário por produtor alimenta o pagamento, o mapa e a nota global. Se cada um é digitado num lugar, as diferenças aparecem no fechamento ou numa fiscalização.
          O tratamento do ICMS depende do cadastro do produtor; confirme com a contabilidade.
        </p>

        <h2 id="pagamento">O que é pagamento por qualidade do leite</h2>
        <p>
          É a política em que o valor pago ao produtor varia conforme os resultados do leite: gordura, proteína, sólidos, CCS e CPP (em muitas tabelas ainda chamada de CBT),
          e às vezes volume entregue e frete ou distância da rota. As INs 76 e 77 não definem preço nem bonificação; fixam o padrão mínimo e as análises. A tabela é decisão de
          cada laticínio ou cooperativa.
        </p>
        <p>
          Um <Fonte href={FONTES.embrapa}>boletim da Embrapa Rondônia</Fonte> descreve um laticínio que definiu bonificação por gordura, CCS e contagem bacteriana, usou os
          resultados do mês no pagamento do mês seguinte e entregou a cada tanque um documento com critérios, resultados e bonificação. O boletim lembra que a credibilidade
          do sistema depende de coleta padronizada das amostras e de comunicação rápida dos resultados.
        </p>

        <h2 id="tabela">Como montar uma tabela de pagamento por qualidade transparente</h2>
        <p>
          Antes das faixas, escreva as regras que costumam ficar implícitas: qual resultado entra (o do mês ou a média), de qual mês de coleta, o que acontece quando falta
          amostra, como se divide o resultado de um tanque comunitário e quem aprova uma exceção. Para a norma, segundo o MAPA, conta a data de coleta da amostra, não a da
          análise; use o mesmo critério na tabela.
        </p>
        <Tabela cabecalho={["Critério", "Faixas e ajustes ILUSTRATIVOS", "Produtor do exemplo"]} linhas={[
          ["CPP (mil UFC/mL)", "até 100: +2 · 101 a 300: 0 · acima de 300: −3", "80 → +2"],
          ["CCS (mil células/mL)", "até 300: +2 · 301 a 500: 0 · acima de 500: −3", "350 → 0"],
          ["Gordura (g/100 g)", "3,5 ou mais: +1,5 · 3,2 a 3,49: +0,5 · abaixo de 3,2: 0", "3,6 → +1,5"],
          ["Proteína (g/100 g)", "3,2 ou mais: +1,5 · 3,0 a 3,19: +0,5 · abaixo de 3,0: 0", "3,1 → +0,5"],
          ["Volume médio diário (L)", "acima de 1.000: +1 · 300 a 1.000: +0,5 · abaixo de 300: 0", "450 → +0,5"],
          ["Total", "Soma dos ajustes, em pontos percentuais sobre o preço-base", "+4,5"],
        ]} />
        <Nota>
          <strong>Exemplo ilustrativo:</strong> faixas, ajustes e resultados são fictícios e não representam nenhum laticínio. Com o preço-base representado por um índice 100,
          o litro desse produtor fica em 104,5 no índice, antes do frete e de outros descontos. O extrato mostra cada linha (resultado, faixa e ajuste) e o total, para que o
          produtor refaça a conta.
        </Nota>
        <p>Publique a tabela com data de vigência e guarde as versões anteriores: quando a regra muda, o produtor precisa saber qual tabela pagou qual leite.</p>

        <h2 id="conciliacao">Conciliação: coletado, recebido e pago</h2>
        <p>
          Três volumes precisam fechar. O coletado é medido em cada propriedade e registrado por produtor. O recebido é medido na plataforma, por caminhão e compartimento.
          O pago é a soma por produtor no fechamento. A diferença entre a soma dos produtores de uma rota e o recebido daquele caminhão precisa de tolerância definida,
          responsável e tratamento registrado, não de rateio silencioso.
        </p>
        <p>
          A rota amarra tudo. A IN 77 pede no autocontrole o cadastro dos produtores com volume diário, capacidade, tipo e localização georreferenciada do tanque, linhas,
          horários e frequência de coleta, além dos transportadores e veículos (art. 48). Com isso, cada coleta fica ligada ao produtor, ao tanque, à amostra e ao compartimento.
          O extrato que o produtor consegue conferir mostra:
        </p>
        <ul>
          <li>o volume de cada coleta, com data e temperatura registrada;</li>
          <li>os resultados da RBQL usados no mês, com a data de coleta da amostra;</li>
          <li>a faixa e o ajuste de cada critério, com a versão da tabela;</li>
          <li>frete e demais descontos, valor bruto e valor líquido;</li>
          <li>o número do documento fiscal de entrada correspondente.</li>
        </ul>
        <p>A RBQL deve disponibilizar os resultados também ao produtor (IN 77, art. 43). Um extrato que bate com o laudo é o que sustenta a confiança dele no pagamento.</p>

        <h2 id="erros">Erros comuns no recebimento e no pagamento</h2>
        <ul>
          <li><strong>Amostra sem vínculo com o produtor.</strong> Frasco identificado à mão, etiqueta trocada ou amostra lançada na rota errada. O ajuste vai para outra pessoa e o rastreio de uma não conformidade se perde.</li>
          <li><strong>Volume digitado depois.</strong> O coletor anota no papel e alguém digita no fim do dia. O volume pago diverge do mapa e da nota global, e ninguém sabe qual está certo.</li>
          <li><strong>Regra que só uma pessoa entende.</strong> A bonificação mora numa planilha com fórmulas e exceções combinadas por telefone. Quando essa pessoa falta, o fechamento para.</li>
          <li><strong>Pagamento que o produtor não consegue conferir.</strong> O extrato traz só o valor final, e cada dúvida vira ligação, visita e desconfiança.</li>
          <li><strong>Correção sem registro.</strong> Volume ou resultado alterado sem autor, motivo e data.</li>
        </ul>

        <h2 id="escolha">Planilha, sistema de laticínio de mercado ou software sob medida</h2>
        <p>Não há resposta única. Compare sua operação com os três cenários e fique com o caminho mais simples que resolve.</p>
        <Tabela cabecalho={["Caminho", "Quando resolve", "Onde costuma falhar"]} linhas={[
          ["Planilha bem cuidada", "Poucos produtores e rotas, tabela simples, resultados do laboratório importados sem redigitação e uma segunda pessoa que revisa o fechamento.", "Fórmula quebra sem aviso, não há trilha de alteração e o conhecimento fica com quem montou."],
          ["Sistema de laticínio de mercado", "A política de bonificação cabe nos parâmetros do produto, há integração pronta com o seu ERP e os arquivos fiscais exigidos saem dele.", "Regras próprias viram exceção manual fora do sistema, e a conferência volta para a planilha."],
          ["Software sob medida", "A política de bonificação é própria, é preciso integrar o laboratório da RBQL, o app da coleta e o ERP com o fiscal, e o produtor precisa de extrato transparente.", "Sem um responsável pela regra no laticínio, documentação e plano de manutenção, vira mais um sistema isolado."],
        ]} />
        <p>
          Antes de contratar, veja o que o ERP e o sistema atual já fazem e quanto do problema é processo, não tecnologia. O <a href="/software-sob-medida">software sob medida</a>{" "}
          serve para a parte que nenhum produto cobre, não para substituir o que já funciona.
        </p>

        <h2 id="erp">Integração com o ERP e o fiscal</h2>
        <p>Combine um dono para cada cadastro. O outro sistema lê, não edita. Uma divisão possível:</p>
        <Tabela cabecalho={["Dado", "Onde nasce", "Para onde vai"]} linhas={[
          ["Cadastro fiscal e financeiro do produtor (CPF ou CNPJ, inscrição, dados de pagamento)", "ERP", "Sistema de captação, só leitura"],
          ["Tanque, rota, linha, horário e localização", "Sistema de captação", "App da coleta e relatórios de qualidade"],
          ["Volume, temperatura, alizarol e amostra de cada coleta", "App da coleta", "Captação, conciliação e mapa de recebimento"],
          ["Resultados da RBQL", "Arquivo do laboratório", "Captação, pela identificação da amostra"],
          ["Valor bruto, ajustes, descontos e líquido por produtor", "Captação, no fechamento", "ERP, para o documento fiscal de entrada e o título a pagar"],
          ["Número e chave da nota, situação do pagamento", "ERP", "Captação e extrato do produtor"],
        ]} />
        <p>
          Sobem para o ERP os valores fechados por produtor e período; descem o cadastro fiscal, a nota emitida e a situação do pagamento. Cada integração precisa de registro
          de falhas e de reprocessamento sem duplicar lançamento. Em Minas, o documento de entrada segue os arts. 326 e 327 do RICMS; em outros estados, confirme com a
          contabilidade qual documento fiscal de entrada se aplica. Veja como tratamos a <a href="/integracao-de-sistemas">integração de sistemas</a>.
        </p>

        <h2 id="piloto">Comece por um piloto delimitado</h2>
        <ol>
          <li><strong>Escolha um recorte.</strong> Uma rota, um grupo de produtores e, se houver, um tanque comunitário, com responsáveis na captação, na qualidade e no financeiro.</li>
          <li><strong>Registre a linha de base.</strong> Horas para fechar o mês, diferença entre coletado e recebido, correções depois do fechamento e dúvidas de produtores sobre o extrato.</li>
          <li><strong>Rode um mês de pagamento em paralelo.</strong> Cálculo atual e cálculo novo, produtor por produtor. Toda diferença precisa de explicação antes de pagar.</li>
          <li><strong>Teste as exceções.</strong> Amostra perdida, mês sem resultado, leite recusado na coleta, compartimento reprovado, volume corrigido e produtor que muda de rota.</li>
          <li><strong>Decida com os números.</strong> Ampliar para outras rotas exige treinamento, suporte e critérios de aceite combinados.</li>
        </ol>
        <p>Não há percentual de ganho que valha para todo laticínio. O piloto mostra o efeito no seu processo e o esforço para mantê-lo.</p>
        <p>
          Na Origami Lab, esse projeto passa pelo Studio de Produto, nosso <a href="/desenvolvimento-de-software">desenvolvimento de software</a> sob medida: primeira versão em
          uso em até 1 mês, integrada ao ERP e ao que já existe, e evolução em fases com linha de base, meta e ganho medido, com a sua decisão antes de cada fase. Não implantamos
          ERP. Código e dados ficam com o laticínio ou a cooperativa. O projeto é documentado como P&amp;D desde o início; a <a href="/lei-do-bem">Lei do Bem</a> só entra se
          houver desafio tecnológico real. Veja também <a href="/tecnologia-para-industrias-minas-gerais">tecnologia para indústrias de Minas Gerais</a>.
        </p>
      </Documento>

      <ChamadaDaOrigami frente="sistemas" pagina={CAMINHO} />
      <Perguntas prefixo="leite" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas leituras={[
        { href: "/integracao-de-sistemas", titulo: "Integração de sistemas", texto: "Como fazer o dado circular entre coleta, laboratório e ERP sem redigitação." },
        { href: "/software-sob-medida", titulo: "Software sob medida", texto: "Quando um sistema próprio resolve melhor do que adaptar um produto pronto." },
        { href: "/automacao-de-processos-industriais", titulo: "O que automatizar primeiro", texto: "Critérios para escolher processos e reduzir trabalho repetido." },
      ]} />
      <ChamadaFinal
        titulo="Seu produtor consegue conferir o próprio pagamento?"
        lead="Traga uma rota, a tabela de bonificação e um mês de fechamento. Avaliamos o que o sistema atual já resolve e onde integração ou software sob medida fecham a conta."
        whatsapp="Olá! Quero avaliar o recebimento e o pagamento por qualidade do leite no meu laticínio."
      />
    </PaginaDeConteudo>
  );
}
