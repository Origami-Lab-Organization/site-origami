import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { CalculadoraReformaTributaria } from "@/components/ferramentas/CalculadoraReformaTributaria";
import { FORMULARIO } from "@/conteudo/contato";
import { grafoDaPagina, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";
import "@/estilos/ferramentas.css";

const CAMINHO = "/calculadora-reforma-tributaria";
const TITULO = "Calculadora da reforma tributária: CBS e IBS";
const DESCRICAO =
  "Calcule a CBS e o IBS de uma venda pela calculadora oficial da Receita Federal: NCM ou NBS, município e valor. Grátis, com memória de cálculo.";
const EC132 = "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm";
const LC214 = "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm";
const REPOSITORIO = "https://github.com/ReceitaFederal/calculadora-rtc-regime-regular";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Como calcular a CBS e o IBS de uma venda?",
    resposta:
      "Multiplique a base de cálculo da operação pela alíquota de cada tributo: a CBS, federal, e o IBS, com uma parte estadual e uma municipal. A classificação tributária do item (cClassTrib) pode reduzir a alíquota, isentar ou diferir. Esta calculadora faz a conta item a item pela API da calculadora oficial da Receita Federal, com as tabelas oficiais de NCM, NBS, municípios e classificações.",
  },
  {
    pergunta: "Qual é a alíquota da CBS e do IBS em 2026?",
    resposta:
      "Em 2026, ano de teste, a CBS é de 0,9% e o IBS de 0,1%, na parte estadual (EC 132/2023, ADCT, art. 125). Os valores são compensáveis com o PIS e a Cofins.",
  },
  {
    pergunta: "Qual será a alíquota a partir de 2027?",
    resposta:
      "As alíquotas de referência ainda serão fixadas por resolução do Senado Federal, um ano antes de entrarem em vigor (ADCT, art. 130). O que já está definido: em 2027 e 2028 o IBS é de 0,05% estadual e 0,05% municipal, e a CBS é reduzida em 0,1 ponto percentual (ADCT, art. 127). Por isso, de 2027 em diante a calculadora simula com as alíquotas que você informar.",
  },
  {
    pergunta: "O que é cClassTrib?",
    resposta:
      "É o código de classificação tributária de seis dígitos que detalha o enquadramento do item no IBS e na CBS: tributação integral, alíquota reduzida, isenção, imunidade, diferimento, suspensão e outros. Ele fica dentro de um código de situação tributária (CST) de três dígitos e passa a constar em cada item da nota fiscal.",
  },
  {
    pergunta: "A calculadora serve para empresas do Simples Nacional?",
    resposta:
      "Não. Esta versão usa a calculadora do regime regular da Receita Federal. A Receita também publicou o código da calculadora do Simples Nacional, mas ela ainda não tem uma versão pública na internet que possamos usar.",
  },
  {
    pergunta: "Os valores são oficiais?",
    resposta:
      "Em 2026, o cálculo usa as alíquotas e as tabelas da própria Receita Federal. De 2027 em diante, é uma simulação com as alíquotas que você informar. Em qualquer caso, o resultado é uma estimativa por item e não substitui a apuração feita pela sua contabilidade.",
  },
  {
    pergunta: "Os dados que eu digito ficam guardados?",
    resposta:
      "Não. O nosso servidor repassa a operação para a API da Receita Federal e devolve o resultado; nada é armazenado. Os dados só chegam à Origami se você preencher o formulário de contato.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [
    { nome: "Ferramentas", caminho: "/ferramentas" },
    { nome: "Calculadora da reforma tributária", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "WebApplication",
    name: "Calculadora da reforma tributária: CBS e IBS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    isBasedOn: REPOSITORIO,
    featureList: [
      "CBS, IBS estadual e IBS municipal de uma operação",
      "Produto por NCM ou serviço por NBS, com busca",
      "Classificação tributária (CST e cClassTrib) das tabelas oficiais",
      "Alíquotas oficiais de 2026 e simulação de 2027 em diante",
      "Memória de cálculo devolvida pela Receita Federal",
    ],
  },
});

const SUMARIO = [
  { id: "como-funciona", rotulo: "Como a calculadora funciona" },
  { id: "cronograma", rotulo: "O cronograma da transição" },
  { id: "cclasstrib", rotulo: "CST e cClassTrib" },
  { id: "industria", rotulo: "O que muda para a indústria" },
  { id: "sistemas", rotulo: "O que muda nos sistemas" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaCalculadoraReformaTributaria() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Ferramentas", caminho: "/ferramentas" }, { nome: "Calculadora da reforma tributária" }]}
      rotulo="Ferramenta gratuita"
      rotuloDoLead="Como funciona"
      titulo={<>Calculadora da reforma tributária: <em className="ol-em">CBS e IBS</em></>}
      lead="Informe o produto (NCM) ou o serviço (NBS), o município e o valor da venda: a calculadora devolve a CBS, o IBS estadual e o IBS municipal, com a memória de cálculo, usando a calculadora oficial da Receita Federal. Em 2026, ano de teste, valem 0,9% de CBS e 0,1% de IBS. De 2027 em diante as alíquotas definitivas ainda não foram fixadas, e a ferramenta simula com as que você informar."
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="#ferramenta">
            Calcular CBS e IBS <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href={FORMULARIO}>
            Converse com um especialista
          </a>
        </>
      }
      meta="Ferramenta gratuita · Cálculo pela API oficial da Receita Federal · Atualizado em 18/11/2026"
      dados={DADOS}
      ativo="ferramentas"
    >
      <CalculadoraReformaTributaria />
      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          A reforma tributária do consumo substitui PIS, Cofins, ICMS e ISS pela CBS, federal, e pelo IBS, de estados e municípios; zera o IPI, exceto
          na Zona Franca de Manaus; e cria o Imposto Seletivo, sobre produtos específicos. A transição vai de 2026 a 2033, e cada venda passa a ter a CBS
          e o IBS destacados na nota.
        </p>

        <h2 id="como-funciona">Como a calculadora funciona</h2>
        <p>
          O cálculo é feito pela API pública da calculadora de tributos da Receita Federal, cujo código é aberto e está publicado no{" "}
          <a href={REPOSITORIO} target="_blank" rel="noopener">
            GitHub da Receita
          </a>
          . As tabelas de NCM, NBS, municípios, situações e classificações tributárias vêm da própria Receita, que as atualiza a cada nova versão. A
          Origami Lab fez a tela; a conta é a da Receita.
        </p>
        <p>
          Em 2026, a Receita aplica as alíquotas do ano de teste. De 2027 em diante, como as alíquotas de referência ainda não existem, a Receita
          calcula com as alíquotas que você informar e marca o resultado como simulação.
        </p>
        <Nota>
          <strong>O que esta versão não faz:</strong> calcula um item por vez, não cobre empresas do Simples Nacional e não inclui o Imposto Seletivo,
          que incide sobre produtos específicos a partir de 2027. O resultado é uma estimativa e não substitui a apuração da sua contabilidade.
        </Nota>

        <h2 id="cronograma">O cronograma da transição</h2>
        <p>
          O calendário está no Ato das Disposições Constitucionais Transitórias, na redação da{" "}
          <a href={EC132} target="_blank" rel="noopener">
            Emenda Constitucional 132/2023
          </a>
          , e foi regulamentado pela{" "}
          <a href={LC214} target="_blank" rel="noopener">
            Lei Complementar 214/2025
          </a>
          .
        </p>
        <Tabela
          cabecalho={["Período", "O que acontece", "Base"]}
          linhas={[
            ["2026", "CBS de 0,9% e IBS de 0,1% (estadual), compensáveis com PIS e Cofins", "ADCT, art. 125"],
            ["2027", "CBS e Imposto Seletivo passam a ser cobrados; PIS e Cofins são extintos; IPI zerado, exceto Zona Franca de Manaus", "ADCT, art. 126"],
            ["2027 e 2028", "IBS de 0,05% estadual e 0,05% municipal; CBS reduzida em 0,1 ponto percentual", "ADCT, art. 127"],
            ["2029 a 2032", "ICMS e ISS caem para 9/10, 8/10, 7/10 e 6/10 das alíquotas atuais, e o IBS cresce", "ADCT, art. 128"],
            ["2033", "ICMS e ISS extintos", "ADCT, art. 129"],
          ]}
        />
        <p>
          As alíquotas de referência são fixadas por resolução do Senado Federal, calculadas pelo Tribunal de Contas da União, um ano antes de entrarem
          em vigor (ADCT, art. 130).
        </p>

        <h2 id="cclasstrib">CST e cClassTrib: a classificação de cada item</h2>
        <p>
          Cada item da nota passa a ter um código de situação tributária (CST) do IBS e da CBS, de três dígitos, e uma classificação tributária
          (cClassTrib), de seis. O CST diz o tipo de tratamento; a classificação diz o enquadramento exato, com a fundamentação na lei.
        </p>
        <QuadroDeFatos
          titulo="Exemplos de CST"
          itens={[
            { termo: "000 · Tributação integral", definicao: "A regra geral, sem redução nem benefício. A classificação é a 000001." },
            { termo: "200 · Alíquota reduzida", definicao: "Reduções previstas na lei complementar para bens e serviços específicos." },
            { termo: "410 · Imunidade e não incidência", definicao: "Operações fora do campo do IBS e da CBS." },
            { termo: "550 · Suspensão", definicao: "Cobrança suspensa em situações previstas, como regimes aduaneiros." },
          ]}
        />
        <p>
          A calculadora mostra todas as classificações vigentes, agrupadas por CST, na versão atual das tabelas da Receita. Na dúvida, a tributação
          integral é o ponto de partida; a escolha final é da sua contabilidade.
        </p>

        <h2 id="industria">O que muda para a indústria</h2>
        <p>
          O IBS e a CBS são não cumulativos: o tributo pago nas compras vira crédito para abater o devido nas vendas, com as exceções previstas em lei.
          Isso muda a conta de custo, de preço e de margem, produto a produto. De 2029 a 2032, a empresa convive com os dois sistemas ao mesmo tempo:
          ICMS e ISS caindo, IBS subindo.
        </p>
        <p>
          Para a indústria, o primeiro trabalho é de cadastro: cada produto precisa do NCM certo e da classificação tributária certa, porque é deles que
          sai a alíquota de cada venda.
        </p>

        <h2 id="sistemas">O que muda nos sistemas</h2>
        <p>
          A nota fiscal eletrônica ganha os grupos de IBS e CBS em cada item, com CST, classificação, base, alíquotas e valores. A própria calculadora
          da Receita gera e valida esses grupos. Na prática, o ERP e o sistema de emissão precisam conhecer a classificação de cada item, aplicar a
          alíquota do município de destino e controlar os créditos.
        </p>
        <p>
          Quando o ERP não cobre isso sozinho, ou a emissão depende de um sistema antigo, o caminho passa por{" "}
          <a href="/integracao-de-sistemas">integração de sistemas</a> ou por{" "}
          <a href="/modernizacao-de-sistemas-legados">modernização do sistema legado</a>, sem trocar o ERP inteiro.
        </p>
      </Documento>
      <Perguntas prefixo="reforma" perguntas={PERGUNTAS} />
      <LeiturasRelacionadas
        leituras={[
          { href: "/integracao-de-sistemas", titulo: "Integração de sistemas", texto: "Como o ERP passa a conversar com a emissão e o resto da operação, sem redigitação." },
          { href: "/modernizacao-de-sistemas-legados", titulo: "Modernização de sistemas legados", texto: "O que fazer quando a nota depende de um sistema que só uma pessoa entende." },
          { href: "/simulador-lei-do-bem", titulo: "Simulador da Lei do Bem", texto: "Quanto o gasto com P&D reduz de IRPJ e CSLL, com a memória de cálculo." },
        ]}
      />
      <ChamadaFinal
        titulo={
          <>
            A reforma muda a nota fiscal. <em className="ol-em">Os seus sistemas acompanham?</em>
          </>
        }
        lead="Trinta minutos para olhar o seu ERP, a emissão de notas e as integrações, e entender o que precisa mudar até 2027. Se o seu sistema já resolve, a gente diz."
        whatsapp="Olá! Usei a calculadora da reforma tributária no site e quero conversar sobre os nossos sistemas."
      />
    </PaginaDeConteudo>
  );
}
