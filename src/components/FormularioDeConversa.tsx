"use client";

import { useState } from "react";
import { CapturaDeLead } from "@/components/ferramentas/CapturaDeLead";
import { ehFrente, FRENTES, type Frente } from "@/conteudo/conversao";
import { EMAIL, FORMULARIO_ALTERNATIVO, WHATSAPP } from "@/conteudo/contato";

export function FormularioDeConversa({ frenteInicial, paginaInicial, envioDisponivel }: { frenteInicial: Frente; paginaInicial: string; envioDisponivel: boolean }) {
  const [frente, setFrente] = useState(frenteInicial);
  const assunto = (
    <div className="ol-field">
      <label className="ol-field__label" htmlFor="interesse-da-conversa">Assunto</label>
      <select id="interesse-da-conversa" className="ol-select" value={frente} onChange={(ev) => { if (ehFrente(ev.target.value)) setFrente(ev.target.value); }}>
        {Object.entries(FRENTES).map(([id, oferta]) => <option key={id} value={id}>{oferta.nome}</option>)}
      </select>
    </div>
  );

  if (!envioDisponivel) {
    const mensagem = `Olá! Quero conversar sobre ${FRENTES[frente].nome.toLowerCase()}. Vim da página ${paginaInicial} do site da Origami.`;
    return (
      <div className="ol-conversation ol-card" id="formulario" data-cta-local="contato_direto">
        <h2 className="ol-card__title">Fale com a equipe da Origami</h2>
        <p className="ol-card__lead">Escolha o assunto e continue pelo canal que preferir. O contexto da página segue na mensagem do WhatsApp.</p>
        <div className="ol-fields">{assunto}</div>
        <div className="ol-conversion__actions">
          <a className="ol-btn ol-btn--primary" href={`${WHATSAPP}?text=${encodeURIComponent(mensagem)}`} target="_blank" rel="noopener">Continuar pelo WhatsApp</a>
          <a className="ol-inline-link" href={`mailto:${EMAIL}?subject=${encodeURIComponent(FRENTES[frente].nome)}&body=${encodeURIComponent(mensagem)}`}>Enviar por e-mail</a>
        </div>
        <p className="ol-card__lead">Se preferir, use o <a href={FORMULARIO_ALTERNATIVO} target="_blank" rel="noopener">formulário de contato alternativo</a>.</p>
      </div>
    );
  }

  return (
    <div className="ol-conversation" id="formulario">
      <CapturaDeLead
        ferramenta="conversa-com-especialista"
        titulo="Qual processo você quer melhorar?"
        descricao="Conte o problema e deixe um contato. A equipe avalia o contexto antes de propor o próximo passo."
        rotuloBotao="Enviar minha solicitação"
        dados={{ interesse: frente, pagina_interesse: paginaInicial }}
        pedirPorte={false}
        contatoEssencial
        pedirMensagem
        mensagemObrigatoria
        camposAdicionais={assunto}
        mensagemDeSucesso="Recebemos sua solicitação. A equipe da Origami vai avaliar o contexto e responder pelo e-mail informado. Se for necessário marcar uma conversa, combinamos com você."
        mensagemAlternativa="Olá! Quero conversar sobre uma oportunidade de melhoria na minha empresa."
      />
    </div>
  );
}
