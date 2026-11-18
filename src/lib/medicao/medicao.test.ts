import test from "node:test";
import assert from "node:assert/strict";
import * as c from "./classificacao";
import { criarEnvio, deveCarregarAmplitude, iniciarMedicao, OPCOES_DO_AMPLITUDE, type AmplitudeMinimo, type JanelaDaMedicao } from "./medicao";

/* ---------------------------------------------------------------- fakes */

function memoria() {
  const dados: Record<string, string> = {};
  return {
    getItem: (k: string) => (k in dados ? dados[k] : null),
    setItem: (k: string, v: string) => {
      dados[k] = String(v);
    },
  };
}

function storageQuebrado() {
  return {
    getItem: (): string | null => {
      throw new Error("bloqueado");
    },
    setItem: () => {
      throw new Error("bloqueado");
    },
  };
}

type Ancestrais = Record<string, { id?: string; className?: string; getAttribute?: (n: string) => string | null }>;

/** Elemento com closest() resolvido por um mapa seletor → ancestral. */
function elemento({ href = null as string | null, texto = "", attrs = {} as Record<string, string>, ancestrais = {} as Ancestrais } = {}) {
  const el: c.ElementoDoCta = {
    textContent: texto,
    getAttribute: (n) => (n === "href" ? href : (attrs[n] ?? null)),
    closest: (sel) => {
      if (sel === "a[href]") return href !== null ? el : null;
      const a = ancestrais[sel];
      return a ? ({ getAttribute: () => null, closest: () => null, ...a } as ReturnType<c.ElementoDoCta["closest"]>) : null;
    },
  };
  return el;
}

function janela({ search = "", pathname = "/", hostname = "localhost", referrer = "", eh404 = false, storage = memoria() as c.ArmazenamentoSimples } = {}) {
  const ouvintes: Record<string, (ev: { target: unknown }) => void> = {};
  const logs: unknown[][] = [];
  const avisos: string[] = [];
  const root: JanelaDaMedicao = {
    location: { search, pathname, hostname },
    sessionStorage: storage,
    console: { info: (...a: unknown[]) => logs.push(a), warn: (...a: unknown[]) => avisos.push(a.join(" ")) } as Pick<Console, "info" | "warn">,
    document: {
      referrer,
      querySelector: (sel: string) => (sel === "[data-404]" && eh404 ? {} : null),
      addEventListener: (tipo, fn) => {
        ouvintes[tipo] = fn;
      },
    },
  };
  return { root, ouvintes, logs, avisos };
}

function amplitudeFalso() {
  const inits: { chave: string; opcoes: unknown }[] = [];
  const enviados: string[] = [];
  const amp: AmplitudeMinimo = {
    initAll: (chave, opcoes) => inits.push({ chave, opcoes }),
    track: (nome) => enviados.push(nome),
  };
  return { amp, inits, enviados };
}

const HOST = "www.origamilab.com.br";
const SEM_CHAVE = { chave: undefined, carregar: () => Promise.reject(new Error("não deveria carregar")) };

/* ---------------------------------------------------------- canal */

test("buscadores viram busca_organica, com o domínio como origem", () => {
  for (const ref of ["https://www.google.com/", "https://www.google.com.br/", "https://www.bing.com/search?q=x",
    "https://duckduckgo.com/", "https://br.search.yahoo.com/", "https://www.ecosia.org/", "https://search.brave.com/",
    "android-app://com.google.android.googlequicksearchbox/"]) {
    assert.equal(c.classificarCanal(ref, {}, HOST).canal, "busca_organica", ref);
  }
  assert.equal(c.classificarCanal("https://www.google.com.br/", {}, HOST).origem, "www.google.com.br");
});

test("assistentes de IA têm canal próprio, inclusive o Gemini, que é google.com", () => {
  for (const ref of ["https://chatgpt.com/", "https://chat.openai.com/", "https://www.perplexity.ai/",
    "https://gemini.google.com/app", "https://copilot.microsoft.com/", "https://claude.ai/chat/1"]) {
    assert.equal(c.classificarCanal(ref, {}, HOST).canal, "assistente_ia", ref);
  }
});

test("utm_source=chatgpt.com sem referrer ainda é assistente de IA", () => {
  assert.deepEqual(c.classificarCanal("", { utm_source: "chatgpt.com" }, HOST), { canal: "assistente_ia", origem: "chatgpt.com" });
});

test("id de clique pago ou medium pago vira pago, mesmo vindo do Google", () => {
  assert.equal(c.classificarCanal("https://www.google.com/", { gclid: "abc" }, HOST).canal, "pago");
  assert.equal(c.classificarCanal("https://www.google.com/", { utm_medium: "CPC" }, HOST).canal, "pago");
  assert.equal(c.classificarCanal("", { msclkid: "x" }, HOST).canal, "pago");
});

test("utm_medium=organic é busca orgânica; outras UTMs são campanha", () => {
  assert.equal(c.classificarCanal("", { utm_medium: "organic", utm_source: "google" }, HOST).canal, "busca_organica");
  assert.equal(c.classificarCanal("https://www.linkedin.com/", { utm_source: "newsletter" }, HOST).canal, "campanha");
  assert.equal(c.classificarCanal("", { utm_medium: "email" }, HOST).canal, "campanha");
});

test("redes sociais, referência, direto e interno", () => {
  assert.equal(c.classificarCanal("https://www.linkedin.com/feed/", {}, HOST).canal, "social");
  assert.equal(c.classificarCanal("https://lnkd.in/abc", {}, HOST).canal, "social");
  assert.equal(c.classificarCanal("https://l.instagram.com/", {}, HOST).canal, "social");
  assert.equal(c.classificarCanal("https://www.fiemg.com.br/noticia", {}, HOST).canal, "referencia");
  assert.equal(c.classificarCanal("https://mail.google.com/", {}, HOST).canal, "referencia");
  assert.deepEqual(c.classificarCanal("", {}, HOST), { canal: "direto", origem: "(direto)" });
  assert.equal(c.classificarCanal("isto não é url", {}, HOST).canal, "direto");
  assert.equal(c.classificarCanal("https://www.origamilab.com.br/cases", {}, HOST).canal, "interno");
});

test("só busca e IA contam como visita orgânica", () => {
  assert.equal(c.ehVisitaOrganica({ canal: "busca_organica" }), true);
  assert.equal(c.ehVisitaOrganica({ canal: "assistente_ia" }), true);
  for (const canal of ["pago", "campanha", "social", "referencia", "direto", "interno"]) {
    assert.equal(c.ehVisitaOrganica({ canal }), false, canal);
  }
});

/* ---------------------------------------------------------- página */

test("tipo da página, com e sem .html e barra final", () => {
  const casos: Record<string, string> = {
    "/": "home", "/index.html": "home", "": "home",
    "/cases": "cases", "/cases/": "cases", "/cases/index.html": "cases",
    "/cases/prumo-engenharia": "case", "/cases/prumo-engenharia.html": "case",
    "/desenvolvimento-de-software": "servico", "/acesso-a-capital.html": "servico", "/consultoria-estrategica/": "servico",
    "/integracao-de-sistemas": "conteudo", "/planejamento-de-producao": "conteudo",
  };
  for (const [caminho, tipo] of Object.entries(casos)) assert.equal(c.tipoDaPagina(caminho, false), tipo, caminho);
  assert.equal(c.tipoDaPagina("/qualquer", true), "404");
  assert.equal(c.normalizarCaminho(null), "/");
});

/* ---------------------------------------------------------- CTA */

test("tipo do CTA pelo destino", () => {
  assert.equal(c.tipoDoCta("https://forms.cloud.microsoft/r/f2GGyr2vZT"), "formulario");
  assert.equal(c.tipoDoCta("https://wa.me/553198055189?text=Ol%C3%A1"), "whatsapp");
  assert.equal(c.tipoDoCta("https://api.whatsapp.com/send?phone=55"), "whatsapp");
  assert.equal(c.tipoDoCta("mailto:contato@origamilab.com.br"), "email");
  assert.equal(c.tipoDoCta("tel:+553198055189"), "telefone");
  assert.equal(c.tipoDoCta("https://outlook.office365.com/owa/calendar/Origami@x.com/bookings/"), "agendamento");
  assert.equal(c.tipoDoCta("https://outlook.office.com/book/OrigamiLab@x.com/"), "agendamento");
  assert.equal(c.tipoDoCta("https://calendly.com/origami/30min"), "agendamento");
});

test("link comum não é CTA, nem quando cita wa.me no meio da URL", () => {
  assert.equal(c.tipoDoCta("/cases"), null);
  assert.equal(c.tipoDoCta("https://www.linkedin.com/company/origamilab-br/"), null);
  assert.equal(c.tipoDoCta("https://example.com/?r=https://wa.me/55"), null);
  assert.equal(c.tipoDoCta(null), null);
});

test("data-cta no link tem prioridade sobre o destino", () => {
  assert.equal(c.tipoDoCta("/diagnostico", "diagnostico"), "diagnostico");
  assert.equal(c.tipoDoCta("https://forms.cloud.microsoft/r/x", "agendamento"), "agendamento");
});

test("agendamento é meeting_booking_click; o resto é service_cta_click", () => {
  assert.equal(c.nomeDoEventoDeCta("agendamento"), "meeting_booking_click");
  for (const t of ["formulario", "whatsapp", "email", "telefone"]) assert.equal(c.nomeDoEventoDeCta(t), "service_cta_click");
});

test("local do CTA", () => {
  const marcado = { getAttribute: () => "hero_servico" };
  assert.equal(c.localDoCta(elemento({ href: "#", ancestrais: { "[data-cta-local]": marcado } })), "hero_servico");
  assert.equal(c.localDoCta(elemento({ href: "#", ancestrais: { "#ol-menu": {}, "[data-nav]": {} } })), "menu_mobile");
  assert.equal(c.localDoCta(elemento({ href: "#", ancestrais: { "[data-nav]": {} } })), "barra_topo");
  assert.equal(c.localDoCta(elemento({ href: "#", ancestrais: { footer: {} } })), "rodape");
  assert.equal(c.localDoCta(elemento({ href: "#", ancestrais: { "section, header, article": { id: "contato" } } })), "contato");
  assert.equal(c.localDoCta(elemento({ href: "#", ancestrais: { "section, header, article": { id: "", className: "ol-page__hero x" } } })), "page__hero");
  assert.equal(c.localDoCta(elemento({ href: "#", ancestrais: { "section, header, article": { id: "", className: "" } } })), "corpo");
  assert.equal(c.localDoCta(elemento({ href: "#" })), "corpo");
});

test("texto do CTA sem espaços sobrando e com no máximo 80 caracteres", () => {
  assert.equal(c.textoDoCta({ textContent: "\n   Agendar   conversa\n  " }), "Agendar conversa");
  assert.equal(c.textoDoCta({ textContent: "x".repeat(200) }).length, 80);
  assert.equal(c.textoDoCta({}), "");
});

/* ---------------------------------------------------------- origem */

test("lê só UTMs e ids de clique, cortando valores longos", () => {
  const p = c.lerParametros("?utm_source=google&utm_medium=organic&foo=bar&gclid=" + "a".repeat(300));
  assert.deepEqual(Object.keys(p).sort(), ["gclid", "utm_medium", "utm_source"]);
  assert.equal(p.gclid?.length, 120);
  assert.deepEqual(c.lerParametros(""), {});
});

test("a origem é gravada na primeira página e repetida nas seguintes", () => {
  const storage = memoria();
  const loc = { search: "?utm_source=chatgpt.com", pathname: "/integracao-de-sistemas", hostname: HOST };
  const primeira = c.capturarOrigem(loc, "", storage);
  assert.equal(primeira.nova, true);
  assert.deepEqual(primeira.origem, {
    canal: "assistente_ia", origem: "chatgpt.com", pagina_entrada: "/integracao-de-sistemas", utm_source: "chatgpt.com",
  });
  const segunda = c.capturarOrigem({ search: "", pathname: "/cases", hostname: HOST }, "https://www.origamilab.com.br/", storage);
  assert.equal(segunda.nova, false);
  assert.deepEqual(segunda.origem, primeira.origem);
});

test("sem storage (aba privada, bloqueio) a origem ainda é calculada, sem erro", () => {
  const loc = { search: "", pathname: "/", hostname: HOST };
  assert.equal(c.capturarOrigem(loc, "https://www.google.com/", storageQuebrado()).origem.canal, "busca_organica");
  assert.equal(c.capturarOrigem(loc, "https://www.google.com/", null).nova, true);
});

test("Amplitude só carrega no domínio de produção (preview e localhost ficam de fora)", () => {
  assert.equal(deveCarregarAmplitude(HOST), true);
  assert.equal(deveCarregarAmplitude("origamilab.com.br"), true);
  assert.equal(deveCarregarAmplitude("localhost"), false);
  assert.equal(deveCarregarAmplitude("site-origami-git-x.vercel.app"), false);
});

/* ---------------------------------------------------------- envio */

test("enviar guarda o evento, alimenta o dataLayer e enfileira até o Amplitude ligar", () => {
  const { root } = janela();
  const envio = criarEnvio(root);
  envio.enviar("a", { x: 1 });
  assert.deepEqual(root.dataLayer, [{ event: "a", x: 1 }]);
  assert.deepEqual(envio.eventos, [{ evento: "a", props: { x: 1 } }]);
  const { amp, enviados } = amplitudeFalso();
  envio.ligarAmplitude(amp);
  envio.enviar("b", { y: 2 });
  assert.deepEqual(enviados, ["a", "b"]);
});

test("registrar anexa a origem da visita e a página ao evento", async () => {
  const { root } = janela({ pathname: "/calculadora-de-oee", referrer: "https://www.google.com/" });
  await iniciarMedicao(root, SEM_CHAVE);
  root.olMedicao?.registrar("tool_complete", { ferramenta: "calculadora-de-oee", faixa: "60-70" });
  const ev = root.olMedicao?.eventos.at(-1);
  assert.equal(ev?.evento, "tool_complete");
  assert.equal(ev?.props.canal, "busca_organica");
  assert.equal(ev?.props.pagina, "/calculadora-de-oee");
  assert.equal(ev?.props.faixa, "60-70");
  criarEnvio(janela().root).registrar("x");
});

test("?medicao=debug escreve os eventos no console", () => {
  const { root, logs } = janela({ search: "?medicao=debug" });
  criarEnvio(root).enviar("a", {});
  assert.equal(logs.length, 1);
  const quieto = janela();
  criarEnvio(quieto.root).enviar("a", {});
  assert.equal(quieto.logs.length, 0);
});

/* ---------------------------------------------------------- página inteira */

test("visita do Google dispara organic_landing_view uma vez por visita", async () => {
  const storage = memoria();
  const a = janela({ pathname: "/apontamento-de-producao", referrer: "https://www.google.com.br/", storage });
  await iniciarMedicao(a.root, SEM_CHAVE);
  assert.deepEqual(a.root.olMedicao?.eventos.map((e) => e.evento), ["organic_landing_view"]);
  assert.equal(a.root.olMedicao?.eventos[0].props.pagina_tipo, "conteudo");
  assert.equal(a.root.olMedicao?.eventos[0].props.pagina_entrada, "/apontamento-de-producao");
  const b = janela({ pathname: "/desenvolvimento-de-software", referrer: "https://www.origamilab.com.br/", storage });
  await iniciarMedicao(b.root, SEM_CHAVE);
  assert.equal(b.root.olMedicao?.eventos.length, 0);
});

test("visita direta não dispara organic_landing_view", async () => {
  const { root } = janela();
  await iniciarMedicao(root, SEM_CHAVE);
  assert.equal(root.olMedicao?.eventos.length, 0);
});

test("404 dispara page_not_found com o referrer", async () => {
  const { root } = janela({ pathname: "/case-tecnologia", referrer: "https://blog.origamilab.com.br/x", eh404: true });
  await iniciarMedicao(root, SEM_CHAVE);
  const ev = root.olMedicao?.eventos.find((e) => e.evento === "page_not_found");
  assert.equal(ev?.props.referrer, "blog.origamilab.com.br");
  assert.equal(ev?.props.pagina_tipo, "404");
});

test("clique em CTA leva a origem da visita junto", async () => {
  const { root, ouvintes } = janela({ pathname: "/software-sob-medida", referrer: "https://chatgpt.com/" });
  await iniciarMedicao(root, SEM_CHAVE);
  ouvintes.click({ target: elemento({ href: "https://forms.cloud.microsoft/r/f2GGyr2vZT", texto: " Agendar conversa ", ancestrais: { footer: {} } }) });
  const ev = root.olMedicao?.eventos.at(-1);
  assert.equal(ev?.evento, "service_cta_click");
  assert.equal(ev?.props.cta_tipo, "formulario");
  assert.equal(ev?.props.cta_texto, "Agendar conversa");
  assert.equal(ev?.props.cta_local, "rodape");
  assert.equal(ev?.props.canal, "assistente_ia");
  assert.equal(ev?.props.pagina, "/software-sob-medida");
});

test("clique em agendamento é meeting_booking_click; link comum e alvo sem closest são ignorados", async () => {
  const { root, ouvintes } = janela();
  await iniciarMedicao(root, SEM_CHAVE);
  ouvintes.click({ target: elemento({ href: "https://calendly.com/origami/30min", texto: "Agendar" }) });
  assert.equal(root.olMedicao?.eventos.at(-1)?.evento, "meeting_booking_click");
  const antes = root.olMedicao?.eventos.length;
  ouvintes.click({ target: elemento({ href: "/cases" }) });
  ouvintes.click({ target: elemento() });
  ouvintes.click({ target: {} });
  ouvintes.click({ target: null });
  assert.equal(root.olMedicao?.eventos.length, antes);
});

/* ---------------------------------------------------------- Amplitude */

test("em produção, carrega o @amplitude/unified e chama initAll uma vez, como o assistente pede", async () => {
  const { amp, inits, enviados } = amplitudeFalso();
  const { root } = janela({ hostname: HOST, referrer: "https://www.bing.com/" });
  await iniciarMedicao(root, { chave: "chave-teste", carregar: async () => amp });
  assert.deepEqual(inits, [{ chave: "chave-teste", opcoes: { analytics: { autocapture: true } } }]);
  assert.deepEqual(OPCOES_DO_AMPLITUDE, { analytics: { autocapture: true } });
  assert.deepEqual(enviados, ["organic_landing_view"]);
});

test("sem chave, avisa no console e não carrega o SDK", async () => {
  let carregou = false;
  const { root, avisos } = janela({ hostname: HOST });
  await iniciarMedicao(root, { chave: "", carregar: async () => ((carregou = true), amplitudeFalso().amp) });
  assert.equal(carregou, false);
  assert.deepEqual(avisos, ["Amplitude API key missing — analytics disabled"]);
});

test("SDK bloqueado (extensão, rede) não quebra a página", async () => {
  const { root } = janela({ hostname: HOST });
  await assert.doesNotReject(iniciarMedicao(root, { chave: "k", carregar: () => Promise.reject(new Error("bloqueado")) }));
});

test("fora de produção, nem o SDK é carregado", async () => {
  let carregou = false;
  const { root, avisos } = janela({ hostname: "localhost" });
  await iniciarMedicao(root, { chave: "k", carregar: async () => ((carregou = true), amplitudeFalso().amp) });
  assert.equal(carregou, false);
  assert.equal(avisos.length, 0);
});
