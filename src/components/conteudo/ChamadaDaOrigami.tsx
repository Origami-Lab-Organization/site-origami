import { caminhoDaConversa, FRENTES, type Frente } from "@/conteudo/conversao";

/** A ponte entre uma resposta útil e a avaliação de um projeto real. */
type Atalho = { href: string; rotulo: string };

/** `ferramenta` troca o atalho padrão da frente quando a página pede outro
 *  (ex.: páginas de fomento indicam a ferramenta de fomento, não o simulador). */
export function ChamadaDaOrigami({ frente, pagina, formulario, ferramenta }: { frente: Frente; pagina: string; formulario?: string; ferramenta?: Atalho }) {
  const oferta = { ...FRENTES[frente], ...(ferramenta ? { ferramenta } : {}) };
  return (
    <section className="ol-conversion" id="proximo-passo" aria-label={`Próximo passo: ${oferta.nome}`} data-cta-local={formulario ? "ponte_ferramenta" : "ponte_conteudo"}>
      <div className="ol-conversion__inner">
        <div>
          <p className="ol-conversion__eyebrow">Da informação para a operação</p>
          <h2 className="ol-conversion__title">{oferta.titulo}</h2>
          <p className="ol-conversion__lead">{oferta.descricao}</p>
          <div className="ol-conversion__actions">
            <a className="ol-btn ol-btn--primary" href={formulario ?? caminhoDaConversa(frente, pagina)} data-cta="formulario">Avaliar com um especialista</a>
            <a className="ol-btn ol-btn--ghost" href={formulario ? oferta.servico.href : oferta.ferramenta.href}>
              {formulario ? oferta.servico.rotulo : oferta.ferramenta.rotulo}
            </a>
          </div>
          <p className="ol-conversion__proof"><a href={oferta.prova.href}>{oferta.prova.rotulo} →</a></p>
        </div>
        <div>
          <p className="ol-conversion__eyebrow">O que avaliar no projeto</p>
          <ul className="ol-conversion__list">{oferta.entregas.map((entrega) => <li key={entrega}>{entrega}</li>)}</ul>
          <p className="ol-conversion__note">A conversa define o escopo. Você decide antes de iniciar qualquer etapa.</p>
        </div>
      </div>
    </section>
  );
}
