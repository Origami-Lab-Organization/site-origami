/* ==========================================================================
   Origami Lab — páginas de conteúdo

   O main.js da home não serve aqui por um motivo concreto: o collect() dele
   resolve os links do nav como seletor CSS (document.querySelector(href)) para
   marcar a seção ativa. Numa página interna os links apontam para "/#servicos",
   que não é seletor válido e derruba a inicialização inteira com SyntaxError.

   Além disso, nada de parallax, pin ou marquee é usado numa página de texto —
   e o reveal por opacidade fica de fora de propósito: numa página feita para
   ser lida (e citada), texto não deve depender de JavaScript para aparecer.

   Sobra o essencial: barra fixa, menu mobile, FAQ e progresso de leitura.
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Barra fixa: ganha fundo assim que sai do topo ---- */
  function initNav() {
    var nav = document.querySelector("[data-nav]");
    var progress = document.querySelector("[data-progress]");
    if (!nav) return;

    var pendente = false;

    function pintar() {
      pendente = false;
      var y = window.scrollY || document.documentElement.scrollTop;
      nav.classList.toggle("is-stuck", y > 12);
      if (!progress) return;
      var alcance = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (alcance > 0 ? Math.min(1, y / alcance) * 100 : 0) + "%";
    }

    window.addEventListener(
      "scroll",
      function () {
        if (pendente) return;
        pendente = true;
        window.requestAnimationFrame(pintar);
      },
      { passive: true }
    );
    window.addEventListener("resize", pintar);
    pintar();
  }

  /* ---- Menu mobile (mesmo contrato da home: aria-expanded, Esc, clique fora) ---- */
  function initMenu() {
    var toggle = document.querySelector(".ol-nav__toggle");
    var panel = document.getElementById("ol-menu");
    if (!toggle || !panel) return;

    function setOpen(open) {
      panel.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }

    toggle.addEventListener("click", function (ev) {
      ev.stopPropagation();
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    panel.addEventListener("click", function (ev) {
      if (ev.target.closest("a")) setOpen(false);
    });
    document.addEventListener("click", function (ev) {
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      if (panel.contains(ev.target) || toggle.contains(ev.target)) return;
      setOpen(false);
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "Escape" || toggle.getAttribute("aria-expanded") !== "true") return;
      setOpen(false);
      toggle.focus();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) setOpen(false);
    });
  }

  /* ---- FAQ ----
     Sem JS o <div> do corpo fica com max-height 0. Para que a resposta exista
     para quem lê sem script — e para o rastreador que não executa JS — o HTML
     traz a resposta também no JSON-LD FAQPage, e a primeira pergunta abre
     sozinha ao carregar. */
  function initFaq() {
    var itens = document.querySelectorAll("[data-faq]");
    if (!itens.length) return;

    itens.forEach(function (item) {
      var trigger = item.querySelector(".ol-faq__trigger");
      var body = item.querySelector("[data-faq-body]");
      if (!trigger || !body) return;

      function set(open) {
        item.classList.toggle("is-open", open);
        trigger.setAttribute("aria-expanded", String(open));
        body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
        body.style.opacity = open ? "1" : "0";
      }

      trigger.addEventListener("click", function () {
        set(!item.classList.contains("is-open"));
      });
      window.addEventListener("resize", function () {
        if (item.classList.contains("is-open")) body.style.maxHeight = body.scrollHeight + "px";
      });

      if (item.hasAttribute("data-faq-open")) set(true);
    });
  }

  function init() {
    initNav();
    initMenu();
    initFaq();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
