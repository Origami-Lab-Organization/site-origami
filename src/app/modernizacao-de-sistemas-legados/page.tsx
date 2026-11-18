import { ChamadaFinal, Documento, LeiturasRelacionadas, Nota, Perguntas, QuadroDeFatos, Tabela } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { FORMULARIO } from "@/conteudo/contato";
import { grafoDaPagina, type Pergunta } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";

const CAMINHO = "/modernizacao-de-sistemas-legados";
const TITULO = "Modernização de sistemas legados";
const DESCRICAO =
  "Sistema que só uma pessoa entende, sem fornecedor ou sem API? Como modernizar o legado sem parar a operação: integrar, migrar por partes ou reescrever.";
const ATUALIZADA_EM = "2026-11-17";

export const metadata = metadataDaPagina({
  titulo: TITULO,
  descricao: DESCRICAO,
  caminho: CAMINHO,
  tipo: "website",
  tituloSocial: "Modernização de sistemas legados sem parar a operação",
});

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é um sistema legado?",
    resposta:
      "É o software que continua sustentando um processo importante, mas que a empresa já não consegue mudar com segurança: a tecnologia saiu de linha, o fornecedor deixou de existir, o código não tem documentação ou só uma pessoa sabe mexer. Idade sozinha não define legado. Um ERP antigo bem mantido não é legado; uma planilha recente cheia de macros que só um analista entende, é.",
  },
  {
    pergunta: "Quanto custa modernizar um sistema legado?",
    resposta:
      "Depende de quantas regras o sistema concentra, de quantos outros sistemas precisam conversar com ele, do volume e da qualidade dos dados a migrar e de quantas pessoas vão mudar de rotina. Por isso o orçamento sai depois do diagnóstico, com sequência, prazo e custo por etapa. Quando o projeto envolve desenvolvimento tecnológico, parte do investimento pode ser elegível a incentivos como a Lei do Bem e a FINEP, o que é avaliado caso a caso.",
  },
  {
    pergunta: "É preciso parar a operação para migrar o sistema?",
    resposta:
      "Não. O sistema novo entra por partes e roda em paralelo com o antigo pelo tempo necessário para comparar resultados. O legado só é desligado quando o novo fecha os mesmos números, e a virada final é planejada para uma janela curta, fora do horário crítico da operação.",
  },
  {
    pergunta: "Dá para modernizar um sistema sem ter o código-fonte?",
    resposta:
      "Na maioria dos casos, sim. Com acesso ao banco de dados e observando o comportamento do sistema em uso, é possível extrair as regras, integrar o legado ou substituí-lo. Quando nem o banco é acessível, a automação de interface serve como ponte temporária, nunca como arquitetura definitiva.",
  },
  {
    pergunta: "É melhor reescrever do zero ou migrar por partes?",
    resposta:
      "Migrar por partes costuma ser menos arriscado: cada módulo substituído entra em produção e prova o próprio valor antes do próximo. Reescrever de uma vez faz sentido quando o sistema é pequeno, quando a tecnologia não tem mais como ser mantida ou quando um produto de mercado cobre o processo, e então a recomendação pode ser comprar pronto.",
  },
  {
    pergunta: "Sistemas em Delphi, Visual Basic ou Access podem ser modernizados?",
    resposta:
      "Sim. A modernização não exige continuar programando nessas tecnologias: exige acessar o banco de dados e entender o comportamento do sistema para extrair as regras, migrar o dado e reconstruir o que for preciso com tecnologia atual e mantida.",
  },
  {
    pergunta: "Quanto tempo leva uma modernização?",
    resposta:
      "O prazo total depende do escopo priorizado no diagnóstico. A primeira entrega vai para produção no primeiro mês, em ciclos de duas semanas daí em frente, e o sistema antigo só sai depois do período de operação em paralelo.",
  },
  {
    pergunta: "O que a empresa recebe ao final do projeto?",
    resposta:
      "O sistema em produção, as regras de negócio escritas, o código documentado, os dados sob controle da empresa e o time treinado para operar. O objetivo é que a empresa não troque a dependência de uma pessoa pela dependência de um fornecedor.",
  },
];

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  atualizadaEm: ATUALIZADA_EM,
  migalhas: [{ nome: TITULO, caminho: CAMINHO }],
  perguntas: PERGUNTAS,
  principal: {
    "@type": "Service",
    name: "Modernização de sistemas legados",
    alternateName: ["Migração de sistemas legados", "Substituição de sistemas legados", "Modernização de sistemas industriais"],
    serviceType: "Modernização, integração e migração de sistemas legados",
    description:
      "Diagnóstico do sistema legado dentro da operação, mapa das regras de negócio, decisão por parte entre manter, integrar por API, substituir por partes ou reescrever, migração de dados com conferência, operação em paralelo e desligamento do sistema antigo, com código documentado e dados sob controle do cliente.",
    provider: { "@id": "https://www.origamilab.com.br/#org" },
    areaServed: [
      { "@type": "State", name: "Minas Gerais" },
      { "@type": "Country", name: "Brasil" },
    ],
    audience: {
      "@type": "BusinessAudience",
      name: "Indústrias e empresas tradicionais com processos críticos em sistemas próprios antigos, Access, Delphi, Visual Basic ou planilhas com macro",
    },
  },
});

const SUMARIO = [
  { id: "o-que-e", rotulo: "O que é um sistema legado" },
  { id: "sinais", rotulo: "Sinais de que o legado virou risco" },
  { id: "caminhos", rotulo: "Os quatro caminhos" },
  { id: "como", rotulo: "Como a Origami conduz" },
  { id: "dados", rotulo: "A migração de dados" },
  { id: "resultados", rotulo: "O que dá para buscar" },
  { id: "para-quem", rotulo: "Para quem faz sentido" },
  { id: "faq", rotulo: "Perguntas frequentes" },
];

export default function PaginaModernizacaoDeSistemasLegados() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: TITULO }]}
      titulo="Modernização de sistemas legados sem parar a operação"
      lead={
        <>
          Modernizar um sistema legado não é sinônimo de reescrever tudo. Na maior parte das empresas, o caminho mais seguro é descobrir o que o sistema antigo faz de
          fato, inclusive as regras que ninguém documentou, separar o que precisa mudar do que pode continuar e escolher, parte por parte, entre{" "}
          <strong>integrar o legado por API, substituí-lo aos poucos ou reescrevê-lo</strong>. A operação continua rodando enquanto isso, e o sistema velho só é desligado
          depois que o novo provou que faz o mesmo trabalho.
        </>
      }
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href={FORMULARIO} target="_blank" rel="noopener">
            Converse com um especialista da Origami <Seta />
          </a>{" "}
          <a className="ol-btn ol-btn--ghost" href="/diagnostico-de-modernizacao">
            Avalie uma oportunidade de modernização
          </a>
        </>
      }
      meta="Origami Lab · Formiga, Minas Gerais · Atualizado em 17/11/2026"
      dados={DADOS}
    >
      <Documento sumario={SUMARIO}>
        <p className="ol-prose__lead">
          Todo sistema legado tem duas histórias: a do que ele faz bem, que é o motivo de ainda estar de pé, e a do risco que ele acumula, que ninguém vê numa linha do
          orçamento até o dia em que o sistema para.
        </p>

        <h2 id="o-que-e">O que é um sistema legado</h2>
        <p>
          Sistema legado é o software que continua sustentando um processo importante, mas que a empresa já não consegue mudar com segurança: a tecnologia saiu de linha, o
          fornecedor deixou de existir, o código não tem documentação ou só uma pessoa sabe mexer. <strong>Idade, sozinha, não define legado.</strong> Um ERP antigo bem
          mantido e com fornecedor ativo não é legado; uma planilha de dois anos com macros que só o analista entende, é.
        </p>
        <p>
          Na indústria, os exemplos se repetem: um sistema de planejamento da produção feito internamente em Delphi ou Visual Basic há quinze anos, um banco Access que
          calcula o custo das ordens, um ERP antigo tão customizado que o fornecedor não consegue mais atualizar, ou uma cadeia de planilhas que fecha o faturamento do mês.
        </p>
        <QuadroDeFatos
          titulo="Em uma frase"
          itens={[
            {
              termo: "Sistema legado",
              definicao: "Software que sustenta um processo importante e que a empresa não consegue mais mudar com segurança.",
            },
            {
              termo: "Modernizar",
              definicao: "Tirar do legado o risco e a rigidez. Nem sempre significa trocar a tecnologia: às vezes basta integrar, documentar e proteger.",
            },
            {
              termo: "Migração por partes",
              definicao: (
                <>
                  Substituir uma função de cada vez, com o sistema antigo e o novo convivendo, até o antigo não ter mais função. Na literatura de arquitetura de software, é o
                  padrão{" "}
                  <a href="https://martinfowler.com/bliki/StranglerFigApplication.html" target="_blank" rel="noopener">
                    strangler fig, descrito por Martin Fowler
                  </a>
                  .
                </>
              ),
            },
          ]}
        />

        <h2 id="sinais">Sinais de que o legado virou risco</h2>
        <ul>
          <li>
            <strong>Só uma pessoa entende o sistema.</strong> As férias dela viram um problema de operação, e a saída dela, um problema de continuidade.
          </li>
          <li>
            <strong>O fornecedor não existe mais</strong>, ou o código-fonte nunca ficou com a empresa.
          </li>
          <li>
            <strong>Um processo crítico depende de Access, Delphi, Visual Basic 6 ou de planilhas com macro</strong>: custo, programação da produção, faturamento.
          </li>
          <li>
            <strong>O sistema não tem API.</strong> Para outro sistema usar o dado, alguém exporta, ajusta e redigita.
          </li>
          <li>
            <strong>Só roda num computador específico.</strong> Não abre no navegador nem no celular de quem está no chão de fábrica ou em campo.
          </li>
          <li>
            <strong>Toda mudança simples vira projeto</strong>, com prazo de meses e medo de quebrar o que funciona.
          </li>
          <li>
            <strong>O dado fica preso.</strong> Para ter um relatório, alguém consolida à mão.
          </li>
          <li>
            <strong>A segurança ficou para trás</strong>: sistema operacional sem suporte, acesso sem controle, backup que ninguém testou.
          </li>
        </ul>
        <p>
          Dois ou mais desses sinais juntos costumam indicar que o custo de não mexer já é maior do que parece. Ele só não aparece como despesa: aparece como retrabalho,
          atraso e dependência.
        </p>

        <h2 id="caminhos">Os quatro caminhos</h2>
        <p>
          Modernizar não é uma decisão única para o sistema inteiro. Cada parte do legado pede um caminho, e a escolha costuma ser mista: no mesmo sistema, um módulo é
          integrado, outro é substituído e outro é desligado porque ninguém usa mais.
        </p>
        <Tabela
          cabecalho={["Caminho", "Quando faz sentido", "Cuidado"]}
          linhas={[
            [
              <strong key="c">Manter e proteger</strong>,
              "O sistema faz bem o que precisa e muda pouco. Basta documentar as regras, garantir backup, ambiente estável e acesso controlado.",
              "Não resolve integração nem a dependência de uma pessoa no longo prazo.",
            ],
            [
              <strong key="c">Integrar</strong>,
              "O legado calcula certo, mas está isolado. Uma camada de API ou uma rotina de integração faz o dado sair sem redigitação.",
              "Se o banco é frágil, a integração precisa ler sem travar a operação.",
            ],
            [
              <strong key="c">Substituir por partes</strong>,
              "Algumas funções travam a operação e outras funcionam. A nova função convive com a antiga, um módulo por vez.",
              "Exige disciplina para não manter dois sistemas para sempre.",
            ],
            [
              <strong key="c">Reescrever ou trocar</strong>,
              "A tecnologia não tem mais como ser mantida, ou um produto de mercado cobre o processo.",
              "É o caminho mais caro e arriscado: pede migração de dados e período em paralelo.",
            ],
          ]}
        />
        <p>
          Os caminhos técnicos de integração (API, banco, arquivo e automação de interface) estão detalhados em{" "}
          <a href="/integracao-de-sistemas">integração de sistemas</a>. O critério para decidir entre produto pronto e sob medida está em{" "}
          <a href="/software-sob-medida">software sob medida: quando vale</a>.
        </p>
        <Nota>
          <strong>Trocar o ERP raramente é a resposta para o legado em volta dele.</strong> Na maioria dos casos, o ERP continua como base fiscal e financeira e o que falta é
          construído em volta dele. É o princípio dos cases da{" "}
          <a href="/cases/cobranca-automatica-whatsapp-retifica-formiguense">Retífica Formiguense</a>, com a cobrança automática integrada ao ERP que a empresa já usava, e
          da <a href="/cases/transportadora-cabral">Transportadora Cabral</a>, com a Central do Motorista conectada ao TripLog.
        </Nota>

        <h2 id="como">Como a Origami conduz</h2>
        <ol>
          <li>
            <strong>Diagnóstico dentro da operação.</strong> O sistema é visto em uso, com quem usa, e não só na documentação, que quase sempre está desatualizada.
          </li>
          <li>
            <strong>Mapa do legado.</strong> Telas, relatórios, regras de cálculo, integrações informais (exportações, planilhas intermediárias) e quem depende de quê. As
            regras que estavam só na cabeça de alguém viram especificação escrita.
          </li>
          <li>
            <strong>Decisão por parte.</strong> Para cada bloco: manter, integrar, substituir ou desligar, com sequência, prazo e custo. É o que a{" "}
            <a href="/consultoria-estrategica">consultoria estratégica</a> entrega quando o projeto começa pelo diagnóstico.
          </li>
          <li>
            <strong>Primeira entrega em produção cedo.</strong> A primeira parte nova vai para produção no primeiro mês, em ciclos de duas semanas daí em frente, como no{" "}
            <a href="/desenvolvimento-de-software">desenvolvimento de software</a>.
          </li>
          <li>
            <strong>Migração de dados com conferência.</strong> Totais de estoque, saldos e títulos são reconciliados contra o sistema antigo antes de virar a chave.
          </li>
          <li>
            <strong>Operação em paralelo.</strong> Os dois sistemas rodam juntos o tempo necessário para comparar resultados. O antigo só sai quando o novo fecha os mesmos
            números.
          </li>
          <li>
            <strong>Documentação e autonomia.</strong> O código sai documentado, os dados ficam com a empresa e o time é treinado para operar sem depender de ninguém.
          </li>
        </ol>

        <h2 id="dados">A migração de dados</h2>
        <p>
          É a etapa mais subestimada. Dado de sistema legado costuma ter cadastro duplicado com grafias diferentes, campo reaproveitado com outro significado ao longo dos
          anos e histórico que ninguém confere desde que foi digitado. Migrar sem tratar isso só leva o problema para o sistema novo.
        </p>
        <p>
          O método é sempre o mesmo: inventário do que existe, regras de limpeza acordadas com quem usa o dado, carga de teste, reconciliação dos totais e, só então, a carga
          final, numa janela curta e planejada.
        </p>

        <h2 id="resultados">O que dá para buscar</h2>
        <ul>
          <li>
            <strong>Fim da dependência de uma pessoa</strong>: regra escrita, código documentado, mais de uma pessoa capaz de operar.
          </li>
          <li>
            <strong>Dado que sai sozinho</strong> para o ERP, para o painel de indicadores ou para outro sistema, sem redigitação.
          </li>
          <li>
            <strong>Acesso onde o trabalho acontece</strong>: navegador, celular, chão de fábrica.
          </li>
          <li>
            <strong>Mudança pequena volta a ser pequena</strong>, sem virar projeto de meses.
          </li>
          <li>
            <strong>Segurança</strong>: tecnologia com suporte, backup testado, controle de acesso e registro de quem fez o quê.
          </li>
          <li>
            <strong>Base para os próximos passos</strong>: <a href="/gestao-industrial-em-tempo-real">indicadores em tempo real</a>, automação e{" "}
            <a href="/ia-na-industria">IA aplicada</a>, que dependem de dado confiável e integrado.
          </li>
        </ul>
        <p>O tamanho do ganho depende do processo. O diagnóstico existe para estimá-lo antes, e não para prometê-lo depois.</p>

        <h2 id="para-quem">Para quem faz sentido, e quando não faz</h2>
        <p>
          Faz sentido para indústrias e empresas tradicionais de engenharia, logística e serviços que têm um processo crítico preso num sistema próprio antigo, que já
          tentaram trocar por um produto de mercado e não coube, ou que precisam ligar o legado ao ERP e ao chão de fábrica, como descrito em{" "}
          <a href="/integracao-erp-chao-de-fabrica">integração do ERP com o chão de fábrica</a>.
        </p>
        <p>
          <strong>Não faz sentido</strong> quando um produto de mercado cobre o processo com pouca adaptação: aí a recomendação é comprar pronto, e a gente diz isso. Também
          não faz quando o sistema funciona, muda pouco e não depende de uma pessoa só. Nesse caso, documentar e proteger costuma bastar.
        </p>
      </Documento>

      <Perguntas prefixo="legado" perguntas={PERGUNTAS} />

      <LeiturasRelacionadas
        leituras={[
          {
            href: "/integracao-de-sistemas",
            titulo: "Integração de sistemas",
            texto: "Os quatro caminhos técnicos para o ERP conversar com o resto da operação, inclusive com sistema legado sem API.",
          },
          {
            href: "/software-sob-medida",
            titulo: "Pronto ou sob medida?",
            texto: "O critério para decidir entre produto pronto e sob medida, e os cinco fatores que definem o custo de um projeto.",
          },
          {
            href: "/integracao-erp-chao-de-fabrica",
            titulo: "Integração ERP e chão de fábrica",
            texto: "Apontamento, paradas, qualidade e lote ligados ao ERP sem trocá-lo e sem duplicar dado.",
          },
          {
            href: "/consultoria-estrategica",
            titulo: "Consultoria estratégica",
            texto: "Diagnóstico dentro da operação e portfólio de projetos priorizado por retorno, com sequência, prazo e custo.",
          },
        ]}
      />

      <ChamadaFinal
        titulo={
          <>
            Modernizar começa por <em className="ol-em">entender o que o legado faz</em>.
          </>
        }
        lead="Trinta minutos para entender o sistema, o processo que ele sustenta e o que precisa mudar primeiro. Se a resposta for manter e só integrar, a gente diz."
        rotulo="Converse com um especialista da Origami"
        whatsapp="Olá! Quero conversar sobre a modernização de um sistema legado."
      />
    </PaginaDeConteudo>
  );
}
