/* Eventos das ferramentas e formulários, chamados de componentes de cliente.
   Usam a medição já iniciada pelo <Medicao /> do layout; se ela ainda não
   existir (bloqueio, ordem de carregamento), o evento é descartado sem erro. */

type Propriedades = Record<string, unknown>;

type ComMedicao = { olMedicao?: { registrar(nome: string, props?: Propriedades): void } };

export function registrarEvento(nome: string, props: Propriedades = {}): void {
  if (typeof window === "undefined") return;
  (window as unknown as ComMedicao).olMedicao?.registrar(nome, props);
}
