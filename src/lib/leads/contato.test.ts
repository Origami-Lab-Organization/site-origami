import test from "node:test";
import assert from "node:assert/strict";
import { emailValido, problemaDeContato, telefoneValido } from "./contato";

test("e-mail válido e inválido", () => {
  assert.equal(emailValido("ana@empresa.com.br"), true);
  assert.equal(emailValido("  ana@empresa.com  "), true);
  for (const e of ["", "ana", "ana@", "ana@empresa", "a b@c.com", "<a>@c.com"]) assert.equal(emailValido(e), false, e);
});

test("telefone com DDD, com ou sem 55", () => {
  for (const t of ["37999991234", "(37) 9999-1234", "3732221234", "+55 37 99999-1234", "553732221234"]) assert.equal(telefoneValido(t), true, t);
  for (const t of ["", "999991234", "123456789012345", "443799991234", "abc"]) assert.equal(telefoneValido(t), false, t);
});

test("problema de contato: falta, inválido ou nenhum", () => {
  assert.equal(problemaDeContato("", ""), "falta-contato");
  assert.equal(problemaDeContato("  ", " "), "falta-contato");
  assert.equal(problemaDeContato("ana@empresa.com", ""), null);
  assert.equal(problemaDeContato("", "37999991234"), null);
  assert.equal(problemaDeContato("ana@", "37999991234"), "email");
  assert.equal(problemaDeContato("ana@empresa.com", "12"), "telefone");
});
