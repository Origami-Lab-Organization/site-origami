import { ChamadaFinal } from "@/components/conteudo/blocos";
import { PaginaDeConteudo, Seta } from "@/components/conteudo/PaginaDeConteudo";
import { GRUPOS_DE_GUIAS } from "@/conteudo/guias";
import { grafoDaPagina, url } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";
import "@/estilos/guias.css";

const CAMINHO = "/guias";
const TITULO = "Guias de software industrial e inovação";
const DESCRICAO = "Guias para decidir sobre software, MES e ERP, Lei do Bem e modernização industrial em Minas Gerais. Métodos, comparações, fontes e próximos passos.";
const GUIAS = GRUPOS_DE_GUIAS.flatMap((grupo) => grupo.guias);

export const metadata = metadataDaPagina({ titulo: TITULO, descricao: DESCRICAO, caminho: CAMINHO, tipo: "website" });

const DADOS = grafoDaPagina({
  caminho: CAMINHO,
  titulo: TITULO,
  descricao: DESCRICAO,
  migalhas: [{ nome: "Guias", caminho: CAMINHO }],
  principal: {
    "@type": "ItemList",
    name: "Guias de tecnologia e inovação da Origami Lab",
    numberOfItems: GUIAS.length,
    itemListElement: GUIAS.map((guia, indice) => ({
      "@type": "ListItem", position: indice + 1, name: guia.titulo, url: url(guia.href),
    })),
  },
});

export default function PaginaGuias() {
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Guias" }]}
      rotulo="Guias"
      abertura="simples"
      titulo={<>Guias para modernizar <em className="ol-em">a operação.</em></>}
      lead="O que vale integrar, quando desenvolver e como financiar a inovação. Escolha a pergunta da sua operação e encontre critérios para decidir, fontes para conferir e um próximo passo concreto."
      acoes={
        <>
          <a className="ol-btn ol-btn--primary" href="#software">Software e operação <Seta /></a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#inovacao">Inovação e financiamento</a>{" "}
          <a className="ol-btn ol-btn--ghost" href="#industria">Indústria em Minas</a>
        </>
      }
      meta="Conteúdo da Origami Lab · Métodos, comparações e experiências de projeto"
      dados={DADOS}
      ativo="guias"
      faqNaPagina={false}
    >
      {GRUPOS_DE_GUIAS.map((grupo, indice) => (
        <section className="ol-next ol-guias" key={grupo.id} aria-labelledby={grupo.id}>
          <div className="ol-next__inner">
            <div className="ol-guias__abertura">
              <span className="ol-guias__numero" aria-hidden="true">0{indice + 1}</span>
              <div>
                <h2 className="ol-next__title" id={grupo.id}>{grupo.titulo}</h2>
                <p className="ol-guias__descricao">{grupo.descricao}</p>
              </div>
            </div>
            <ul className="ol-next__grid">
              {grupo.guias.map((guia) => (
                <li key={guia.href}>
                  <a className="ol-next__card" href={guia.href}>
                    <b>{guia.titulo}</b>
                    <span>{guia.texto}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <section className="ol-next" aria-labelledby="colocar-em-pratica">
        <div className="ol-next__inner">
          <h2 className="ol-next__title" id="colocar-em-pratica">Da leitura para uma decisão</h2>
          <ul className="ol-next__grid">
            <li><a className="ol-next__card" href="/ferramentas"><b>Coloque os dados na conta</b><span>Calculadoras de OEE, hora-máquina, tributos e Lei do Bem, com método e memória de cálculo.</span></a></li>
            <li><a className="ol-next__card" href="/cases"><b>Veja os projetos publicados</b><span>Problema, intervenção e resultado observado, com o contexto de cada cliente e implantação.</span></a></li>
            <li><a className="ol-next__card" href="/diagnostico-de-modernizacao"><b>Organize as prioridades da operação</b><span>Uma autoavaliação gratuita sobre dados, integração, legado e processos manuais para preparar a conversa.</span></a></li>
          </ul>
        </div>
      </section>
      <ChamadaFinal
        titulo={<>O próximo passo começa <em className="ol-em">pelo seu processo.</em></>}
        lead="Conte onde a operação trava, quais sistemas já existem e quem executa o trabalho. A conversa começa pelo problema e pelos critérios de resultado."
      />
    </PaginaDeConteudo>
  );
}
