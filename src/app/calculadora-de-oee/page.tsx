import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { CalculadoraDeOee } from "@/components/ferramentas/CalculadoraDeOee";
import { FORMULARIO } from "@/conteudo/contato";
import { grafoDaPagina, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";
import "@/estilos/ferramentas.css";

const CAMINHO = "/calculadora-de-oee";
const TITULO = "Calculadora de OEE online e grátis";
const DESCRICAO =
  "Calcule o OEE de uma máquina ou linha: disponibilidade, desempenho e qualidade, com as perdas em minutos e em peças. Grátis, com planilha em Excel.";

export const metadata = metadataDaPagina({
  titulo: TITULO,
  descricao: DESCRICAO,
  caminho: CAMINHO,
  tituloSocial: "Calculadora de OEE: disponibilidade, desempenho e qualidade",
});

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "Como calcular o OEE de uma máquina?",
    resposta:
      "Multiplique três taxas do mesmo período: disponibilidade (tempo em operação dividido pelo tempo planejado), desempenho (ciclo ideal vezes peças produzidas, dividido pelo tempo em operação) e qualidade (peças boas divididas pelas produzidas). Para conferir, peças boas vezes ciclo ideal, dividido pelo tempo planejado, dá o mesmo número.",
  },
  {
    pergunta: "Como calcular o OEE global de uma linha ou da fábrica?",
    resposta:
      "Somando tempos, não fazendo média dos percentuais. O OEE consolidado é a soma do tempo útil (peças boas vezes ciclo ideal) de todas as máquinas ou turnos dividida pela soma do tempo planejado. A média simples distorce quando os turnos têm durações diferentes ou quando uma máquina pesa mais que outra. Numa linha em série, o OEE da máquina gargalo é o que limita a saída da linha.",
  },
  {
    pergunta: "Como calcular a disponibilidade no OEE?",
    resposta:
      "Disponibilidade é o tempo em operação dividido pelo tempo planejado de produção. Tempo em operação é o tempo planejado menos as paradas não planejadas: quebra, falta de material, setup, ajustes. Refeição e paradas programadas ficam fora do tempo planejado.",
  },
  {
    pergunta: "Como calcular a performance (desempenho) no OEE?",
    resposta:
      "Desempenho é o tempo de ciclo ideal multiplicado pelas peças produzidas, dividido pelo tempo em operação. Ele mostra a perda de velocidade e as pequenas paradas que ninguém registrou. Se der acima de 100%, o ciclo ideal informado está alto demais.",
  },
  {
    pergunta: "Como calcular o OEE no Excel?",
    resposta:
      "Use uma linha por turno com tempo planejado, paradas, ciclo ideal, peças produzidas e peças boas, e quatro colunas de fórmula: disponibilidade, desempenho, qualidade e OEE. Para consolidar várias máquinas, some os tempos em vez de fazer média dos percentuais. A planilha desta página já vem montada assim.",
  },
  {
    pergunta: "Qual é um OEE bom?",
    resposta:
      "A referência mais citada é 85%, atribuída a Seiichi Nakajima, do Japan Institute of Plant Maintenance, que a formou com cerca de 90% de disponibilidade, 95% de desempenho e 99% de qualidade. Ela vem da manufatura discreta japonesa dos anos 1970 e não serve como meta universal: processos com muitas trocas de produto têm limites diferentes. A comparação mais útil é a da própria linha ao longo do tempo.",
  },
  {
    pergunta: "O tempo de setup entra no cálculo do OEE?",
    resposta:
      "Pela forma usual de cálculo, sim: setup é parada dentro do tempo planejado e reduz a disponibilidade. Tirá-lo do tempo planejado deixa o OEE mais bonito e esconde uma perda que pode ser reduzida. Se a empresa decidir tratar setup de outro jeito, o importante é registrar a regra e mantê-la igual em todos os períodos.",
  },
  {
    pergunta: "Qual a diferença entre OEE e TEEP?",
    resposta:
      "O OEE mede a eficiência sobre o tempo planejado de produção. O TEEP usa o tempo total do calendário, incluindo turnos que não foram programados. O OEE responde quão bem a máquina usa o tempo em que deveria produzir; o TEEP, quanto da capacidade total está sendo usada.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  atualizadaEm: "2026-11-17",
  migalhas: [
    { nome: "Ferramentas", caminho: "/ferramentas" },
    { nome: "Calculadora de OEE", caminho: CAMINHO },
  ],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "WebApplication",
    name: "Calculadora de OEE",
    description:
      "Calcula disponibilidade, desempenho, qualidade e OEE de uma máquina ou linha num período, com as perdas em minutos e as peças boas que deixaram de sair.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    provider: { "@id": "https://www.origamilab.com.br/#org" },
    featureList: [
      "Disponibilidade, desempenho, qualidade e OEE",
      "Perdas em minutos: paradas, velocidade e qualidade",
      "Peças boas que deixaram de sair no ciclo ideal",
      "Aviso quando o ciclo ideal informado está errado",
      "Planilha em Excel com consolidação por máquina",
      "Calcula no navegador: nada é enviado a servidor",
    ],
  },
});

const SUMARIO = [
  { id: "o-que-e", rotulo: "O que é OEE" },
  { id: "formula", rotulo: "A fórmula, com exemplo" },
  { id: "interpretar", rotulo: "Como interpretar" },
  { id: "erros", rotulo: "Erros comuns no cálculo" },
  { id: "apontamento", rotulo: "O problema do apontamento manual" },
  { id: "planilha", rotulo: "Quando a planilha deixa de bastar" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaCalculadoraDeOee() {
  return (
    <PaginaDeConteudo
      ativo="ferramentas"
      migalhas={[{ nome: "Ferramentas", caminho: "/ferramentas" }, { nome: "Calculadora de OEE" }]}
      titulo="Calculadora de OEE: disponibilidade, desempenho e qualidade"
      lead={
        <>
          Para calcular o OEE, multiplique três taxas do mesmo período: <strong>disponibilidade</strong> (tempo em operação ÷ tempo planejado),{" "}
          <strong>desempenho</strong> (ciclo ideal × peças produzidas ÷ tempo em operação) e <strong>qualidade</strong> (peças boas ÷ peças
          produzidas). A conferência é direta: peças boas × ciclo ideal ÷ tempo planejado dá o mesmo número. A calculadora abaixo faz a conta,
          aponta onde está a maior perda e traduz o resultado em minutos e em peças que deixaram de sair.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="#ferramenta">
            Calcular o OEE <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href={FORMULARIO} target="_blank" rel="noopener">
            Converse com um especialista
          </a>
        </>
      }
      meta="Ferramenta gratuita · Origami Lab · Formiga, Minas Gerais"
      dados={DADOS}
    >
      <CalculadoraDeOee />

      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          OEE é o indicador que diz quanto do tempo em que a máquina deveria produzir virou peça boa, no ritmo ideal. O número sozinho ajuda pouco; o
          que ele tem de útil é a decomposição em três perdas, cada uma com um dono diferente na fábrica.
        </p>

        <h2 id="o-que-e">O que é OEE</h2>
        <p>
          OEE vem de <em>Overall Equipment Effectiveness</em>, eficiência global do equipamento. O indicador nasceu na Manutenção Produtiva Total
          (TPM), sistematizada no Japão por Seiichi Nakajima, e se espalhou porque junta numa conta só as três formas de uma máquina desperdiçar o
          tempo planejado: parar, rodar devagar e produzir peça ruim.
        </p>
        <QuadroDeFatos
          titulo="As três componentes"
          itens={[
            { termo: "Disponibilidade", definicao: "Tempo em operação ÷ tempo planejado de produção. Captura as paradas: quebra, falta de material, setup, ajuste." },
            {
              termo: "Desempenho",
              definicao: "(Ciclo ideal × peças produzidas) ÷ tempo em operação. Captura a perda de velocidade e as pequenas paradas que ninguém anota.",
            },
            { termo: "Qualidade", definicao: "Peças boas ÷ peças produzidas. Captura refugo e retrabalho." },
            { termo: "OEE", definicao: "Disponibilidade × Desempenho × Qualidade. Ou, direto: peças boas × ciclo ideal ÷ tempo planejado." },
          ]}
        />

        <h2 id="formula">A fórmula, com um exemplo resolvido</h2>
        <p>
          Um turno de 480 minutos com 60 de refeição deixa 420 minutos de tempo planejado. Houve 42 minutos de paradas não planejadas, o ciclo ideal
          é de 60 segundos por peça, saíram 340 peças e 323 estavam boas. Os números são ilustrativos; servem para mostrar a conta.
        </p>
        <Tabela
          cabecalho={["Etapa", "Valor", "Conta"]}
          linhas={[
            ["Tempo em operação", "378 min", "420 − 42"],
            ["Disponibilidade", "90,0%", "378 ÷ 420"],
            ["Desempenho", "89,9%", "340 peças × 1 min ÷ 378 min"],
            ["Qualidade", "95,0%", "323 ÷ 340"],
            ["OEE", "76,9%", "0,900 × 0,899 × 0,950"],
            ["Conferência", "76,9%", "323 peças × 1 min ÷ 420 min"],
          ]}
        />
        <p>
          Traduzido em tempo, os 420 minutos se dividem em 323 minutos de tempo útil (peça boa no ritmo ideal), 42 de paradas, 38 de velocidade
          abaixo do ideal e 17 de refugo. Em peças: no ciclo ideal cabiam 420 peças boas no turno; saíram 323. A calculadora mostra essa mesma
          divisão com os seus números.
        </p>

        <h2 id="interpretar">Como interpretar o resultado</h2>
        <p>
          A referência mais citada é a de 85% como &ldquo;OEE de classe mundial&rdquo;, atribuída a Seiichi Nakajima, do Japan Institute of Plant
          Maintenance, formada por cerca de 90% de disponibilidade, 95% de desempenho e 99% de qualidade (
          <a href="https://www.oee.com/world-class-oee/" target="_blank" rel="noopener">
            OEE.com, &ldquo;World-Class OEE&rdquo;
          </a>
          ; NAKAJIMA, S. <em>Introduction to TPM</em>. Productivity Press, 1988). A própria fonte faz as ressalvas: o número vem da manufatura
          discreta, de um lugar e de uma época; linhas com muitas trocas de produto têm limites diferentes; e não existe um OEE ideal único.
        </p>
        <p>
          Na prática, a comparação útil é a da linha com ela mesma ao longo do tempo, e a decomposição importa mais que o total. Um OEE de 70% com
          a perda concentrada em paradas pede um plano diferente de um OEE de 70% perdido em velocidade. O primeiro se ataca com motivo de parada
          registrado e manutenção; o segundo, com ciclo, abastecimento e pequenas paradas.
        </p>

        <h2 id="erros">Erros comuns no cálculo</h2>
        <ul>
          <li>
            <strong>Usar o ciclo médio real como ciclo ideal.</strong> O desempenho fica sempre perto de 100% e a perda de velocidade desaparece da
            conta. Use o ciclo de projeto ou o melhor ritmo sustentado.
          </li>
          <li>
            <strong>Tirar o setup do tempo planejado.</strong> O OEE sobe no papel e a perda continua lá. Setup é parada.
          </li>
          <li>
            <strong>Contar retrabalho como peça boa.</strong> Peça boa é a que saiu boa de primeira.
          </li>
          <li>
            <strong>Misturar produtos com ciclos diferentes sem ponderar.</strong> Cada produto entra com o seu ciclo ideal; o consolidado soma tempos.
          </li>
          <li>
            <strong>Fazer média simples dos OEEs de máquinas ou turnos.</strong> Turnos de durações diferentes pesam igual e o número sai distorcido.
          </li>
        </ul>
        <Nota>
          <strong>Desempenho acima de 100%</strong> não é recorde: é sinal de que o ciclo ideal informado é maior que o real. A calculadora avisa em
          vez de mostrar um OEE impossível.
        </Nota>

        <h2 id="apontamento">Por que o apontamento manual distorce o OEE</h2>
        <p>
          O OEE é tão bom quanto o registro de paradas, e o registro manual tem um defeito de origem: quem aponta está ocupado produzindo. Parada
          curta não é anotada e vira perda de velocidade sem explicação; o horário é arredondado; o motivo vira &ldquo;outros&rdquo;. O número sai
          dias depois, quando já não dá para agir no turno.
        </p>
        <p>
          Medir sem depender disso combina três coisas: ler o estado e a contagem de ciclos que muitas máquinas já informam, sem mexer no controle
          delas; pedir ao operador o motivo da parada na hora em que ela acontece, com poucos toques; e uma lista curta de motivos, definida com
          produção e manutenção. Os detalhes estão em{" "}
          <a href="/apontamento-de-producao">apontamento de produção</a> e em{" "}
          <a href="/gestao-industrial-em-tempo-real">gestão industrial em tempo real</a>.
        </p>

        <h2 id="planilha">Quando a planilha deixa de bastar</h2>
        <p>
          A planilha é o jeito certo de começar: ela ensina a conta e mostra onde estão as perdas. Ela deixa de bastar quando o dado chega dias
          depois do turno, quando a mesma informação é digitada na planilha e no ERP, quando são muitas máquinas e turnos, ou quando a reunião
          gasta mais tempo discutindo se o número está certo do que o que fazer com ele.
        </p>
        <p>
          Nesse ponto o problema deixou de ser a fórmula e passou a ser a coleta. É o trabalho de{" "}
          <a href="/integracao-erp-chao-de-fabrica">integrar o chão de fábrica ao ERP</a> e de construir o que o ERP não cobre, como fazemos em{" "}
          <a href="/desenvolvimento-de-software">desenvolvimento de software</a>.
        </p>
      </Documento>

      <Perguntas prefixo="oee" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          {
            href: "/gestao-industrial-em-tempo-real",
            titulo: "Gestão industrial em tempo real",
            texto: "De onde vêm os dados da operação e os poucos indicadores que movem decisão.",
          },
          {
            href: "/apontamento-de-producao",
            titulo: "Apontamento de produção",
            texto: "O custo escondido do papel e as formas de coletar dados no chão de fábrica.",
          },
          {
            href: "/integracao-erp-chao-de-fabrica",
            titulo: "Integração do ERP com o chão de fábrica",
            texto: "Paradas, apontamento e qualidade ligados ao ERP sem trocá-lo e sem duplicar dado.",
          },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            Quer o OEE saindo sozinho, <em className="ol-em">sem planilha no fim do turno</em>?
          </>
        }
        lead="A Origami Lab integra o sinal que a máquina já informa, o apontamento e o ERP para o indicador sair no mesmo turno, com o motivo de cada parada. A primeira conversa dura 30 minutos e serve para entender a sua operação."
        whatsapp="Olá! Usei a calculadora de OEE do site e quero conversar sobre medir o OEE da minha fábrica."
      />
    </PaginaDeConteudo>
  );
}
