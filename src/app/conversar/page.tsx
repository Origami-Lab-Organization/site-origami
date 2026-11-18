import { headers } from "next/headers";
import { PaginaDeConteudo } from "@/components/conteudo/PaginaDeConteudo";
import { FormularioDeConversa } from "@/components/FormularioDeConversa";
import { contextoDaConversa, contextoDoReferrer } from "@/conteudo/conversao";
import { EMAIL, WHATSAPP } from "@/conteudo/contato";
import { SITE } from "@/conteudo/paginas";
import { grafoDaPagina } from "@/lib/seo/estruturados";
import { metadataDaPagina } from "@/lib/seo/metadata";
import "@/estilos/ferramentas.css";

export const metadata = metadataDaPagina({ titulo: "Converse com a Origami Lab", descricao: "Conte o processo que quer melhorar e converse com a equipe da Origami sobre software, integração, produção ou financiamento de inovação.", caminho: "/conversar", tipo: "website", indexar: false });

const DADOS = grafoDaPagina({ caminho: "/conversar", titulo: "Converse com a Origami Lab", descricao: "Solicite uma avaliação do contexto da sua operação.", atualizadaEm: "2026-11-18", migalhas: [{ nome: "Converse com a Origami", caminho: "/conversar" }] });

export default async function PaginaConversar({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const cabecalhos = await headers();
  const host = cabecalhos.get("host") ?? "";
  const origemAtual = /^(localhost|127\.0\.0\.1|\[::1\]):\d+$/.test(host) ? `http://${host}` : SITE;
  const referencia = contextoDoReferrer(cabecalhos.get("referer") ?? "", origemAtual);
  const contexto = contextoDaConversa(params.tema, params.de ?? referencia.pagina);
  const envioDisponivel = Boolean(process.env.RESEND_API_KEY && process.env.LEADS_PARA);
  return (
    <PaginaDeConteudo
      migalhas={[{ nome: "Converse com a Origami" }]}
      rotulo="Fale com a Origami"
      abertura="simples"
      titulo={<>Vamos entender onde a sua operação <em className="ol-em">trava.</em></>}
      lead="Pode ser um processo manual, sistemas que não conversam, informação que chega tarde ou um projeto de inovação. Comece pelo que acontece hoje."
      acoes={<a className="ol-btn ol-btn--primary" href="#formulario">Contar meu contexto</a>}
      dados={DADOS}
      faqNaPagina={false}
    >
      <section className="ol-contact" aria-label="Contato com a equipe">
        <div className="ol-contact__inner">
          <aside className="ol-prose">
            <h2>O que acontece depois</h2>
            <ol className="ol-passos">
              <li>A equipe lê seu contexto e a página ou ferramenta que trouxe você até aqui.</li>
              <li>Respondemos pelo contato informado para entender o que falta e quem precisa participar.</li>
              <li>Se houver oportunidade de projeto, combinamos a avaliação e os próximos passos antes de qualquer contratação.</li>
            </ol>
            <p>Prefere falar direto? <a href={WHATSAPP} target="_blank" rel="noopener">Abra o WhatsApp</a> ou escreva para <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
          </aside>
          <FormularioDeConversa frenteInicial={contexto.frente} paginaInicial={contexto.pagina} envioDisponivel={envioDisponivel} />
        </div>
      </section>
    </PaginaDeConteudo>
  );
}
