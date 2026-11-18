"use client";

import { useId, type ReactNode } from "react";

/* Campos das ferramentas. Controlados pelo componente da ferramenta. */

type Numero = {
  rotulo: string;
  valor: number | "";
  aoMudar: (v: number | "") => void;
  sufixo?: string;
  ajuda?: ReactNode;
  min?: number;
  max?: number;
  passo?: number;
};

export function CampoNumero({ rotulo, valor, aoMudar, sufixo, ajuda, min = 0, max, passo = 1 }: Numero) {
  const id = useId();
  const entrada = (
    <input
      id={id}
      className="ol-input"
      type="number"
      inputMode="decimal"
      value={valor}
      min={min}
      max={max}
      step={passo}
      onChange={(e) => aoMudar(e.target.value === "" ? "" : Number(e.target.value))}
    />
  );
  return (
    <div className="ol-field">
      <label className="ol-field__label" htmlFor={id}>
        {rotulo}
      </label>
      {sufixo ? (
        <div className="ol-input-group">
          {entrada}
          <span className="ol-input-group__suffix">{sufixo}</span>
        </div>
      ) : (
        entrada
      )}
      {ajuda ? <span className="ol-field__hint">{ajuda}</span> : null}
    </div>
  );
}

type Opcao = { valor: string; rotulo: string };

type Selecao = {
  rotulo: string;
  valor: string;
  aoMudar: (v: string) => void;
  opcoes: Opcao[];
  ajuda?: ReactNode;
  obrigatorio?: boolean;
  nome?: string;
};

export function CampoSelecao({ rotulo, valor, aoMudar, opcoes, ajuda, obrigatorio, nome }: Selecao) {
  const id = useId();
  return (
    <div className="ol-field">
      <label className="ol-field__label" htmlFor={id}>
        {rotulo}
      </label>
      <select id={id} name={nome} className="ol-select" value={valor} required={obrigatorio} onChange={(e) => aoMudar(e.target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        {opcoes.map((o) => (
          <option key={o.valor} value={o.valor}>
            {o.rotulo}
          </option>
        ))}
      </select>
      {ajuda ? <span className="ol-field__hint">{ajuda}</span> : null}
    </div>
  );
}

/** Formata número em pt-BR. */
export function numero(v: number, casas = 0): string {
  return v.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });
}

export function reais(v: number): string {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
