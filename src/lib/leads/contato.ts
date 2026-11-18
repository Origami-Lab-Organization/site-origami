/* Contato do lead: basta e-mail ou WhatsApp. As mesmas regras valem no
   navegador (antes de enviar) e no servidor (validação do lead). */

export const EMAIL = /^[^\s@<>()[\],;:"]+@[^\s@<>()[\],;:"]+\.[a-z]{2,}$/i;

export function emailValido(valor: string): boolean {
  return EMAIL.test(valor.trim());
}

/** Telefone com DDD: 10 ou 11 dígitos, ou 12 a 13 com o 55 do país. */
export function telefoneValido(valor: string): boolean {
  const digitos = valor.replace(/\D/g, "");
  if (digitos.length === 10 || digitos.length === 11) return true;
  return (digitos.length === 12 || digitos.length === 13) && digitos.startsWith("55");
}

export type ProblemaDeContato = "falta-contato" | "email" | "telefone";

/** null quando há ao menos um contato válido e nenhum inválido preenchido. */
export function problemaDeContato(email: string, telefone: string): ProblemaDeContato | null {
  const e = email.trim();
  const t = telefone.trim();
  if (e && !emailValido(e)) return "email";
  if (t && !telefoneValido(t)) return "telefone";
  if (!e && !t) return "falta-contato";
  return null;
}
