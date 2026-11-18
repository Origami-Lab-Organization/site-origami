import { ChamadaFinal, Documento, LeiturasRelacionadas, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { DiagnosticoDeModernizacao } from "@/components/ferramentas/DiagnosticoDeModernizacao";
import { NIVEIS } from "@/lib/ferramentas/diagnostico";
import { grafoDaPagina, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";
import "@/estilos/ferramentas.css";

const CAMINHO = "/diagnostico-de-modernizacao";
const TITULO = "Diagnóstico de modernização da operação";
const DESCRICAO =
  "Onze perguntas, três minutos: veja a maturidade da sua operação em dados, integração, legado, processos e IA, e por onde começar a modernizar.";

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO, tipo: "website" });

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é um diagnóstico de maturidade digital da operação?",
    resposta:
      "É uma avaliação de quanto a operação ainda depende de pessoas, papel e planilhas, e de quanto já roda em sistemas integrados, com dado confiável e a tempo. Este diagnóstico mede cinco frentes: dados e indicadores, integração entre sistemas, sistemas legados, processos manuais e prontidão para IA e automação.",
  },
  {
    pergunta: "Quanto tempo leva?",
    resposta: "Cerca de três minutos: são onze perguntas de múltipla escolha. O resultado aparece assim que a última é respondida.",
  },
  {
    pergunta: "Preciso me cadastrar para ver o resultado?",
    resposta:
      "Não. A pontuação geral, a pontuação por frente e as recomendações aparecem na tela. O formulário é opcional, para quem quer a leitura de um especialista sobre o resultado.",
  },
  {
    pergunta: "O resultado é confiável?",
    resposta:
      "É uma autoavaliação: reflete a visão de quem respondeu. Serve bem para ordenar prioridades e abrir a conversa. Para decidir investimento, a avaliação precisa olhar a operação de perto.",
  },
  {
    pergunta: "Qual a diferença para o diagnóstico da consultoria?",
    resposta:
      "A consultoria estratégica da Origami Lab fica de duas a quatro semanas dentro da operação, mapeia o fluxo real e entrega um plano de modernização com sequência, prazo e custo. Este diagnóstico é um primeiro passo e não substitui essa imersão.",
  },
  {
    pergunta: "Minhas respostas ficam guardadas?",
    resposta: "Não. O cálculo é feito no seu navegador. As respostas só chegam à Origami Lab se você preencher o formulário ao fim.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  atualizadaEm: "2026-11-17",
  migalhas: [
    { nome: "Ferramentas", caminho: "/ferramentas" },
    { nome: "Diagnóstico de modernização", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "WebApplication",
    name: "Diagnóstico de modernização da operação",
    description: DESCRICAO,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    provider: { "@id": "https://www.origamilab.com.br/#org" },
    featureList: [
      "Onze perguntas de múltipla escolha",
      "Pontuação de 0 a 100 em cinco frentes e geral",
      "Três recomendações priorizadas, com o conteúdo de cada uma",
      "Resultado na tela, sem cadastro",
      "Calcula no navegador",
    ],
  },
});

const SUMARIO = [
  { id: "o-que-mede", rotulo: "O que o diagnóstico mede" },
  { id: "como-ler", rotulo: "Como ler o resultado" },
  { id: "o-que-nao-mede", rotulo: "O que ele não mede" },
  { id: "depois", rotulo: "Depois do diagnóstico" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaDiagnosticoDeModernizacao() {
  return (
    <PaginaDeConteudo
      ativo="ferramentas"
      migalhas={[{ nome: "Ferramentas", caminho: "/ferramentas" }, { nome: "Diagnóstico de modernização" }]}
      titulo="Diagnóstico de modernização da operação"
      lead={
        <>
          Onze perguntas, cerca de três minutos. O diagnóstico mede a maturidade da sua operação em cinco frentes (dados e indicadores, integração entre sistemas,
          sistemas legados, processos manuais e prontidão para IA) e aponta <strong>as três por onde começar</strong>. O resultado aparece na tela, sem cadastro.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="#ferramenta">
            Começar o diagnóstico <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#o-que-mede">
            O que ele mede
          </a>
        </>
      }
      meta="Ferramenta gratuita da Origami Lab · Formiga, Minas Gerais"
      dados={DADOS}
    >
      <DiagnosticoDeModernizacao />

      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          O diagnóstico é uma autoavaliação. Serve para ordenar prioridades com a visão de quem conhece a operação por dentro, e para começar a conversa sobre
          modernização com números em vez de impressões.
        </p>

        <h2 id="o-que-mede">O que o diagnóstico mede</h2>
        <QuadroDeFatos
          titulo="As cinco frentes"
          itens={[
            { termo: "Dados e indicadores", definicao: "Se o número da operação chega a tempo a quem decide, e de onde ele sai." },
            { termo: "Integração entre sistemas", definicao: "Quantas vezes o mesmo dado é digitado e se o chão de fábrica conversa com o ERP." },
            { termo: "Sistemas legados", definicao: "Se os sistemas críticos têm suporte, documentação e quem saiba mudá-los." },
            { termo: "Processos manuais e retrabalho", definicao: "Quanto do planejamento e do controle depende de planilha, de memória e de conferência." },
            { termo: "Prontidão para IA e automação", definicao: "Se há histórico organizado, tarefas repetitivas mapeadas e gente para tocar os projetos." },
          ]}
        />
        <p>
          Cada resposta vale de 0 a 3 pontos. A pontuação de cada frente é a soma dos pontos dividida pelo máximo possível, numa escala de 0 a 100, e a pontuação geral
          é a média das cinco frentes.
        </p>

        <h2 id="como-ler">Como ler o resultado</h2>
        <Tabela
          cabecalho={["Pontuação", "Nível", "Leitura"]}
          linhas={NIVEIS.map((n, i) => [`${i === 0 ? 0 : NIVEIS[i - 1].ate + 1} a ${n.ate}`, n.nome, n.descricao])}
        />
        <p>
          As três recomendações saem das frentes com menor pontuação. Dentro de cada frente, a recomendação muda conforme a resposta que mais pesa: na integração, por
          exemplo, quem ainda lança a produção no ERP à mão começa pelo <a href="/integracao-erp-chao-de-fabrica">chão de fábrica</a>; quem já tem apontamento
          digital começa pela <a href="/integracao-de-sistemas">integração entre os sistemas</a>.
        </p>

        <h2 id="o-que-nao-mede">O que ele não mede</h2>
        <p>
          O diagnóstico não mede o retorno financeiro de cada projeto nem enxerga o fluxo real da operação: mede a percepção de quem respondeu. Duas pessoas da mesma
          empresa podem chegar a resultados diferentes, e isso por si só já é um achado.
        </p>
        <p>
          A leitura completa vem de estar dentro da operação. A <a href="/consultoria-estrategica">consultoria estratégica</a> da Origami Lab faz isso numa imersão de
          duas a quatro semanas, com o mapeamento do fluxo real e um plano de modernização com sequência, prazo e custo. Para estimar o retorno de um projeto antes de
          investir, veja <a href="/planejamento-de-producao#roi">como calcular o ROI de um projeto de digitalização</a>.
        </p>

        <h2 id="depois">Depois do diagnóstico</h2>
        <p>
          Se o resultado apontar frentes fracas, o próximo passo é transformar a recomendação em projeto: escopo, prazo, custo e o indicador que vai provar o ganho.
          Parte desses projetos pode ser financiada com incentivo fiscal ou crédito para inovação; veja <a href="/acesso-a-capital">acesso a capital</a>.
        </p>
        <p>Ao fim do diagnóstico, você pode pedir a leitura de um especialista sobre o seu resultado, sem compromisso.</p>
      </Documento>

      <Perguntas prefixo="diagnostico" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          { href: "/consultoria-estrategica", titulo: "Consultoria estratégica", texto: "A imersão de duas a quatro semanas dentro da operação e o plano com sequência, prazo e custo." },
          { href: "/acesso-a-capital", titulo: "Acesso a capital", texto: "Lei do Bem, FINEP e FAPEMIG para financiar a modernização da operação." },
          { href: "/cases", titulo: "Cases", texto: "Projetos entregues, com o desafio, o que foi construído e o que mudou na operação." },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            O próximo passo é olhar <em className="ol-em">a operação de perto</em>.
          </>
        }
        lead="Trinta minutos para discutir o seu resultado, entender o que está por trás de cada frente e decidir por onde começar. Se a resposta for não mexer agora, a gente diz."
        rotulo="Converse com um especialista"
        whatsapp="Olá! Fiz o diagnóstico de modernização no site e quero conversar sobre o resultado."
      />
    </PaginaDeConteudo>
  );
}
