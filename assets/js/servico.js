/* ==========================================================================
   Origami Lab — Acesso a capital

   Complementa o pagina.js, que já cuida de barra fixa, menu, progresso e FAQ.
   Aqui ficam só os efeitos que esta página tem e as de conteúdo não têm:
   vídeo do hero, reveal, holofote do cartão, botão magnético e parallax.

   O reveal usa o mesmo contrato do main.js — a classe `is-armed` é adicionada
   PELO JS, nunca no HTML. Sem JavaScript, ou se algo quebrar aqui, o texto
   continua visível: é conteúdo que precisa ser lido e citado.
   ========================================================================== */

(function () {
  "use strict";

  var semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Vídeo de fundo: alguns navegadores ignoram o autoplay do atributo ---- */
  function initVideo() {
    var v = document.querySelector("[data-bg-video]");
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    function tocar() {
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    }
    tocar();
    v.addEventListener("canplay", tocar, { once: true });
  }

  /* ---- Reveal na entrada ---- */
  function initReveal() {
    if (semMovimento || !("IntersectionObserver" in window)) return;

    var pendentes = [];
    var io = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (e) {
          if (!e.isIntersecting) return;
          liberar(e.target);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -5% 0px" }
    );

    function liberar(el) {
      el.classList.remove("is-armed");
      el.classList.add("is-in");
      var i = pendentes.indexOf(el);
      if (i > -1) pendentes.splice(i, 1);
    }

    document.querySelectorAll("[data-anim]").forEach(function (el) {
      // O que já está na primeira dobra entra sem animação.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.94) return;
      if (el.dataset.d) el.style.setProperty("--ol-d", el.dataset.d);
      el.classList.add("is-armed");
      io.observe(el);
      pendentes.push(el);
    });

    // Rede de segurança: se uma notificação não chegar, o elemento ficaria
    // invisível para sempre. A cada scroll liberamos o que já passou da borda.
    window.addEventListener(
      "scroll",
      function () {
        pendentes.slice().forEach(function (el) {
          if (el.getBoundingClientRect().top < window.innerHeight) liberar(el);
        });
      },
      { passive: true }
    );
  }

  /* ---- Holofote do cartão de diagnóstico ---- */
  function initSpot() {
    document.querySelectorAll("[data-spot]").forEach(function (el) {
      el.addEventListener("pointermove", function (ev) {
        var r = el.getBoundingClientRect();
        el.style.setProperty("--mx", (((ev.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
        el.style.setProperty("--my", (((ev.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
      });
    });
  }

  /* ---- Botão que acompanha o cursor ---- */
  function initMagnet() {
    if (semMovimento) return;
    document.querySelectorAll("[data-magnet]").forEach(function (el) {
      el.addEventListener("pointermove", function (ev) {
        var r = el.getBoundingClientRect();
        var dx = (ev.clientX - r.left - r.width / 2) / r.width;
        var dy = (ev.clientY - r.top - r.height / 2) / r.height;
        el.style.transform = "translate(" + (dx * 10).toFixed(1) + "px," + (dy * 7).toFixed(1) + "px)";
      });
      el.addEventListener("pointerleave", function () {
        el.style.transform = "translate(0,0)";
      });
    });
  }

  /* ---- Parallax dos brilhos de fundo ---- */
  function initParallax() {
    if (semMovimento) return;
    var alvos = [].slice.call(document.querySelectorAll("[data-px]"));
    if (!alvos.length) return;

    var pendente = false;
    function pintar() {
      pendente = false;
      var vh = window.innerHeight;
      alvos.forEach(function (n) {
        var r = n.getBoundingClientRect();
        if (r.bottom < -500 || r.top > vh + 500) return;
        var off = r.top + r.height / 2 - vh / 2;
        n.style.transform = "translate3d(0," + (-off * parseFloat(n.dataset.px)).toFixed(1) + "px,0)";
      });
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
    pintar();
  }

  function init() {
    initVideo();
    initReveal();
    initSpot();
    initMagnet();
    initParallax();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
