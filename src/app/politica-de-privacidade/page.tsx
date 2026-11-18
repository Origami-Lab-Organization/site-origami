import { Documento } from "@/components/conteudo/blocos";
import { PaginaDeConteudo } from "@/components/conteudo/PaginaDeConteudo";
import { EMAIL, FORMULARIO_ALTERNATIVO } from "@/conteudo/contato";
import { grafoDaPagina } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

/* Política de privacidade. Descreve o que o site faz de fato (medição,
   formulários, fornecedores). Revisar com o jurídico e acrescentar razão
   social e CNPJ quando forem publicados no rodapé. */

const CAMINHO = "/politica-de-privacidade";
const ATUALIZADA_EM = "2026-11-18";

export const metadata = metadataDaPagina({
  titulo: "Política de privacidade",
  descricao: "Quais dados o site da Origami Lab coleta, para quê, com quem compartilha e como exercer os seus direitos pela LGPD.",
  caminho: CAMINHO,
  tipo: "website",
  indexar: false,
});

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: "Política de privacidade",
  descricao: "Quais dados o site da Origami Lab coleta, para quê, com quem compartilha e como exercer os seus direitos pela LGPD.",
  atualizadaEm: ATUALIZADA_EM,
  migalhas: [{ nome: "Política de privacidade", caminho: CAMINHO }],
});

const SUMARIO = [
  { id: "quem", rotulo: "Quem trata os dados" },
  { id: "navegacao", rotulo: "Dados de navegação" },
  { id: "formularios", rotulo: "Formulários e ferramentas" },
  { id: "fornecedores", rotulo: "Com quem compartilhamos" },
  { id: "guarda", rotulo: "Por quanto tempo" },
  { id: "direitos", rotulo: "Seus direitos" },
  { id: "cookies", rotulo: "Cookies" },
];

export default function PoliticaDePrivacidade() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Política de privacidade" }]}
      rotulo="Transparência e LGPD"
      abertura="simples"
      titulo={<>Política de <em className="ol-em">privacidade</em></>}
      lead="O que o site da Origami Lab coleta, para quê, com quem compartilha e como você pede acesso, correção ou exclusão dos seus dados, nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018)."
      acoes={
        <a className="ol-btn ol-btn--ghost" href={`mailto:${EMAIL}`}>
          Falar sobre os meus dados
        </a>
      }
      meta="Versão de 18/11/2026"
      dados={DADOS}
      faqNaPagina={false}
    >
      <Documento sumario={SUMARIO}>
        <h2 id="quem">Quem trata os dados</h2>
        <p>
          A Origami Lab, com endereço na R. Silviano Brandão, 156, 2º andar, Centro, Formiga, Minas Gerais, CEP 35570-112, é a controladora dos dados
          tratados neste site. Para qualquer assunto de privacidade, inclusive para exercer os seus direitos, escreva para{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>

        <h2 id="navegacao">Dados de navegação</h2>
        <p>
          Usamos o Amplitude para entender como o site é usado: quais páginas são vistas, por onde a visita chegou (buscador, assistente de IA, rede
          social, link de campanha), em quais botões as pessoas clicam, o desempenho de carregamento e informações técnicas do navegador e do
          dispositivo. O Amplitude pode registrar o endereço IP e derivar dele uma localização aproximada, e pode gravar a sessão de navegação (o que
          aparece na tela e as interações) para análise de usabilidade.
        </p>
        <p>
          A finalidade é melhorar o conteúdo e entender quais páginas ajudam empresas a encontrar a Origami. A base legal é o legítimo interesse
          (art. 7º, IX, da LGPD). Esses dados não são usados para identificar você individualmente, nem vendidos.
        </p>

        <h2 id="formularios">Formulários e ferramentas</h2>
        <p>
          Quando você deixa um contato numa ferramenta ou formulário do site, recebemos o que você preencher: nome, e-mail, empresa, cargo,
          telefone, mensagem, faixas de faturamento e de número de funcionários, as respostas e o resultado da ferramenta, o assunto de interesse e a origem da sua visita. Usamos
          esses dados para responder ao seu contato e avaliar como podemos ajudar a sua empresa. A base legal é o seu consentimento, dado ao marcar a
          caixa do formulário (art. 7º, I), e os procedimentos preliminares de um eventual contrato a seu pedido (art. 7º, V).
        </p>
        <p>
          OEE, custo hora-máquina, Lei do Bem e diagnóstico são calculados no navegador e aparecem sem cadastro. Na calculadora da reforma tributária,
          os parâmetros da operação passam pelo servidor da Origami e seguem para a API da Receita Federal para produzir o cálculo. Quando você envia
          um formulário, o contexto e o resultado informado seguem junto ao contato para a equipe comercial.
        </p>
        <p>
          Alguns botões levam a canais de terceiros: o{" "}
          <a href={FORMULARIO_ALTERNATIVO} target="_blank" rel="noopener">
            formulário alternativo de contato
          </a>{" "}
          no Microsoft Forms e o WhatsApp. O que você envia por eles é tratado também por esses serviços, conforme as políticas da Microsoft e da
          Meta.
        </p>

        <h2 id="fornecedores">Com quem compartilhamos</h2>
        <p>Compartilhamos dados apenas com fornecedores que operam o site em nosso nome:</p>
        <ul>
          <li>
            <strong>Vercel</strong>: hospedagem do site.
          </li>
          <li>
            <strong>Amplitude</strong>: análise de navegação e gravação de sessão.
          </li>
          <li>
            <strong>Resend</strong>: envio, para a equipe comercial da Origami, dos contatos deixados no site.
          </li>
          <li>
            <strong>Microsoft</strong>: e-mail corporativo e formulário de contato.
          </li>
        </ul>
        <p>
          Esses fornecedores podem processar dados fora do Brasil, em especial nos Estados Unidos. Nesses casos, a transferência segue o art. 33 da
          LGPD.
        </p>

        <h2 id="guarda">Por quanto tempo</h2>
        <p>
          Dados de contato são mantidos enquanto houver conversa ou relacionamento comercial com a sua empresa, ou até você pedir a exclusão, salvo
          quando a lei exigir guarda por mais tempo. Dados de navegação seguem o prazo de retenção configurado no Amplitude.
        </p>

        <h2 id="direitos">Seus direitos</h2>
        <p>
          Pelo art. 18 da LGPD, você pode pedir a confirmação de que tratamos dados seus, o acesso a eles, a correção, a anonimização, o bloqueio ou
          a eliminação de dados desnecessários, a portabilidade, a informação sobre com quem compartilhamos e a revogação do consentimento. Escreva
          para <a href={`mailto:${EMAIL}`}>{EMAIL}</a>; respondemos no prazo da lei. Você também pode reclamar à Autoridade Nacional de Proteção de
          Dados (ANPD).
        </p>

        <h2 id="cookies">Cookies</h2>
        <p>
          O site usa cookies do Amplitude (nomes que começam com <code>AMP_</code>) para reconhecer a mesma visita entre páginas e medir o uso do site.
          Não usamos cookies de publicidade. Você pode bloquear ou apagar cookies nas configurações do navegador; o site continua funcionando sem
          eles.
        </p>
      </Documento>
    </PaginaDeConteudo>
  );
}
