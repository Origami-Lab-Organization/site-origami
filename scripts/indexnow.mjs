#!/usr/bin/env node
// Notifica mecanismos participantes do IndexNow sobre URLs publicadas.
// O aceite da notificação não garante indexação nem citação por assistentes.
// No Google, a URL Inspection API consulta o índice, sem solicitar indexação.
// A Indexing API é restrita a JobPosting e BroadcastEvent em VideoObject.
//
//   node scripts/indexnow.mjs            # todas as URLs do sitemap
//   node scripts/indexnow.mjs /calculadora-de-oee /lei-do-bem
import { readdirSync } from "node:fs";

const ARGUMENTOS = process.argv.slice(2);
const HOST = ARGUMENTOS.find((argumento) => argumento.startsWith("--host="))?.slice("--host=".length) ?? "www.origamilab.com.br";
const BASE_URL = `https://${HOST}`;

// A chave é o nome do arquivo em public/ — a verificação do IndexNow é servir
// <chave>.txt contendo a própria chave. Ler do diretório evita um segundo lugar
// para a chave ficar desatualizada.
function lerChave() {
  const arquivo = readdirSync("public").find((nome) => /^[0-9a-f]{32}\.txt$/.test(nome));
  if (!arquivo) throw new Error("chave do IndexNow não encontrada em public/");
  return arquivo.replace(".txt", "");
}

async function urlsDoSitemap() {
  const resposta = await fetch(`${BASE_URL}/sitemap.xml`);
  if (!resposta.ok) throw new Error(`sitemap: ${resposta.status}`);
  return [...(await resposta.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const caminhos = ARGUMENTOS.filter((argumento) => !argumento.startsWith("--host="));
const urlList = caminhos.length > 0
  ? caminhos.map((c) => (c.startsWith("http") ? c : `${BASE_URL}${c.startsWith("/") ? c : `/${c}`}`))
  : await urlsDoSitemap();

const key = lerChave();
const verificacao = await fetch(`${BASE_URL}/${key}.txt`);
if (!verificacao.ok || (await verificacao.text()).trim() !== key) {
  throw new Error(`${BASE_URL}/${key}.txt não serve a chave — o IndexNow vai recusar`);
}

const resposta = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `${BASE_URL}/${key}.txt`, urlList }),
});

console.log(`IndexNow: ${resposta.status} ${resposta.statusText} — ${urlList.length} URLs`);
if (resposta.status !== 200 && resposta.status !== 202) {
  console.error(await resposta.text());
  process.exit(1);
}
