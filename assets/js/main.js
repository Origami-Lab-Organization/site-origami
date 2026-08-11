/* ==========================================================================
   Origami Lab — comportamento da landing page.
   Sem dependências: o design roda como HTML/CSS/JS estático.
   ========================================================================== */

(function () {
  "use strict";

  /**
   * Pontos ainda abertos no design (eram props editáveis no Claude Design).
   * Vire para `true` para publicar o trecho correspondente.
   */
  var OPTIONS = {
    precoNaFaq: false, // faixa de preço na FAQ "Quanto custa?"
    depoimentoCabral: false, // depoimento da Transportadora Cabral
  };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------------------
     Opções
     ---------------------------------------------------------------------- */

  function applyOptions() {
    Object.keys(OPTIONS).forEach(function (key) {
      var name = key === "precoNaFaq" ? "preco" : key === "depoimentoCabral" ? "depoimento" : key;
      document.querySelectorAll('[data-opt="' + name + '"]').forEach(function (el) {
        el.classList.toggle("is-on", OPTIONS[key] === true);
      });
    });
  }

  /* ----------------------------------------------------------------------
     Reveal ao entrar na viewport
     ---------------------------------------------------------------------- */

  function reveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    var pending = [];
    document.querySelectorAll("[data-anim]").forEach(function (el) {
      // O que já está visível na carga entra sem animação.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      if (el.dataset.d) el.style.setProperty("--ol-d", el.dataset.d);
      el.classList.add("is-hidden");
      io.observe(el);
      pending.push(el);
    });
    if (!pending.length) return;

    // Rede de segurança: conteúdo escondido que já entrou na tela mas cuja
    // notificação do observer não chegou seria texto invisível para sempre.
    // A cada scroll varremos os pendentes e revelamos o que já passou da
    // borda inferior — barato e independente do observer.
    reveal.sweep = function () {
      var limit = window.innerHeight;
      pending = pending.filter(function (el) {
        if (el.classList.contains("is-in")) return false;
        if (el.getBoundingClientRect().top > limit) return true;
        el.classList.add("is-in");
        io.unobserve(el);
        return false;
      });
      if (!pending.length) window.removeEventListener("scroll", onScroll);
    };

    function onScroll() {
      reveal.sweep();
    }
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------------------------------------------------------------
     Parallax leve nas fotos e no brilho do contato
     ---------------------------------------------------------------------- */

  function parallax() {
    if (reduceMotion) return;

    var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-px]"));
    if (!nodes.length) return;

    var queued = false;

    function paint() {
      queued = false;
      var vh = window.innerHeight;
      nodes.forEach(function (node) {
        var rect = node.getBoundingClientRect();
        if (rect.bottom < -400 || rect.top > vh + 400) return;
        var offset = rect.top + rect.height / 2 - vh / 2;
        var shift = -offset * parseFloat(node.dataset.px);
        node.style.transform = "translate3d(0," + shift.toFixed(1) + "px,0)";
      });
    }

    function onScroll() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(paint);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    paint();
  }

  /* ----------------------------------------------------------------------
     Vídeo de fundo do hero
     ---------------------------------------------------------------------- */

  function backgroundVideo() {
    document.querySelectorAll("[data-bg-video]").forEach(function (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      var play = function () {
        var attempt = video.play();
        if (attempt && attempt.catch) attempt.catch(function () {});
      };

      play();
      video.addEventListener("canplay", play, { once: true });
      // Sem o arquivo (ou sem suporte a webm) o degradê de fallback assume.
      video.addEventListener("error", function () {
        video.hidden = true;
      });
    });
  }

  /* ----------------------------------------------------------------------
     Gráfico do gap de adoção: anima ao entrar em cena
     ---------------------------------------------------------------------- */

  function chart() {
    var box = document.querySelector("[data-chart]");
    if (!box) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      box.classList.add("is-charted");
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          box.classList.add("is-charted");
          io.disconnect();
        });
      },
      { threshold: 0.35 }
    );
    io.observe(box);

    // Mesma rede de segurança do reveal: o gráfico não pode ficar em branco.
    function sweep() {
      if (box.classList.contains("is-charted")) {
        window.removeEventListener("scroll", sweep);
        return;
      }
      if (box.getBoundingClientRect().top > window.innerHeight) return;
      box.classList.add("is-charted");
      io.disconnect();
      window.removeEventListener("scroll", sweep);
    }
    window.addEventListener("scroll", sweep, { passive: true });
  }

  /* ----------------------------------------------------------------------
     FAQ (acordeão)
     ---------------------------------------------------------------------- */

  function faq() {
    document.querySelectorAll(".ol-faq__item").forEach(function (item) {
      var trigger = item.querySelector(".ol-faq__trigger");
      var body = item.querySelector(".ol-faq__body");
      if (!trigger || !body) return;

      trigger.addEventListener("click", function () {
        var open = item.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", String(open));
        body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
        body.style.opacity = open ? "1" : "0";
      });

      // Uma resposta aberta que mude de altura (resize, fonte) reajusta.
      window.addEventListener("resize", function () {
        if (item.classList.contains("is-open")) body.style.maxHeight = body.scrollHeight + "px";
      });
    });
  }

  /* ----------------------------------------------------------------------
     Menu mobile — abaixo de 860px a lista horizontal não cabe
     ---------------------------------------------------------------------- */

  function mobileMenu() {
    var toggle = document.querySelector(".ol-nav__toggle");
    var panel = document.getElementById("ol-menu");
    if (!toggle || !panel) return;

    function setOpen(open) {
      panel.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }

    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Navegar para uma âncora fecha o painel.
    panel.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("click", function (event) {
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      if (panel.contains(event.target) || toggle.contains(event.target)) return;
      setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      setOpen(false);
      toggle.focus();
    });

    // Ao voltar para desktop o painel não deve continuar aberto por baixo.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) setOpen(false);
    });
  }

  /* ----------------------------------------------------------------------
     Boot
     ---------------------------------------------------------------------- */

  function init() {
    applyOptions();
    mobileMenu();
    reveal();
    parallax();
    backgroundVideo();
    chart();
    faq();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
