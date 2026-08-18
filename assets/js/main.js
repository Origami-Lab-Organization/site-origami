/* ==========================================================================
   Origami Lab — motor de scroll da landing page.
   Sem dependências. Tudo o que é decorativo degrada: sem JS a página continua
   legível e navegável, e a trilha de "Como trabalhamos" rola na horizontal.
   ========================================================================== */

(function () {
  "use strict";

  /**
   * Props que o design expunha como editáveis.
   * intensidadeMovimento: 0 desliga o movimento, 1 é o padrão, até 1.6 exagera.
   */
  var CONFIG = {
    intensidadeMovimento: 1,
    mostrarGaleria: true,
  };

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var amp = CONFIG.intensidadeMovimento;

  /* Elementos coletados no boot */
  var nav, progress, hero, heroVideo, heroContent, heroCue;
  var pxNodes = [];
  var stacks = [];
  var zooms = [];
  var scaleIns = [];
  var marquees = [];
  var navLinks = [];
  var sections = [];
  var hpin = null;
  var heroMotion = true;

  /* Estado do loop */
  var lastY = 0;
  var vel = 0;
  var dirty = true;
  var docH = 0;
  var raf = 0;

  function clamp(n, a, b) {
    return n < a ? a : n > b ? b : n;
  }

  /* ----------------------------------------------------------------------
     Opções
     ---------------------------------------------------------------------- */

  function applyOptions() {
    document.querySelectorAll("[data-galeria]").forEach(function (el) {
      el.style.display = CONFIG.mostrarGaleria === false ? "none" : "";
    });
  }

  /* ----------------------------------------------------------------------
     Vídeo de fundo
     ---------------------------------------------------------------------- */

  function initVideo() {
    document.querySelectorAll("[data-bg-video]").forEach(function (v) {
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      var play = function () {
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      };
      play();
      v.addEventListener("canplay", play, { once: true });
      // Sem o arquivo (ou sem suporte a webm) o poster e o degradê assumem.
      v.addEventListener("error", function () {
        v.hidden = true;
      });
    });
  }

  /* ----------------------------------------------------------------------
     Reveal e barras que crescem
     ---------------------------------------------------------------------- */

  function grow(el) {
    var w = el.dataset.w || "100%";
    window.setTimeout(function () {
      el.style.width = w;
    }, +(el.dataset.delay || 0));
  }

  function initReveal() {
    var bars = document.querySelectorAll("[data-grow]");

    if (reduced || !("IntersectionObserver" in window)) {
      bars.forEach(function (el) {
        el.style.width = el.dataset.w || "100%";
      });
      return;
    }

    var pending = [];
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          reveal(e.target);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    function reveal(el) {
      if (el.hasAttribute("data-grow")) grow(el);
      else el.classList.add("is-in");
      var i = pending.indexOf(el);
      if (i > -1) pending.splice(i, 1);
    }

    document.querySelectorAll("[data-anim]").forEach(function (el) {
      // O que já está visível na carga entra sem animação.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.94) return;
      if (el.dataset.d) el.style.setProperty("--ol-d", el.dataset.d);
      el.classList.add("is-armed");
      io.observe(el);
      pending.push(el);
    });
    bars.forEach(function (el) {
      io.observe(el);
      pending.push(el);
    });

    // Rede de segurança: se uma notificação do observer não chegar, o conteúdo
    // escondido seria texto invisível para sempre. A cada scroll varremos os
    // pendentes e liberamos o que já passou da borda inferior.
    function sweep() {
      var limit = window.innerHeight;
      pending.slice().forEach(function (el) {
        if (el.getBoundingClientRect().top > limit) return;
        reveal(el);
        io.unobserve(el);
      });
      if (!pending.length) window.removeEventListener("scroll", sweep);
    }
    window.addEventListener("scroll", sweep, { passive: true });
  }

  /* ----------------------------------------------------------------------
     Holofote nos cartões e ímã nos botões
     ---------------------------------------------------------------------- */

  function initHover() {
    document.querySelectorAll("[data-spot]").forEach(function (el) {
      el.addEventListener("pointermove", function (ev) {
        var r = el.getBoundingClientRect();
        el.style.setProperty("--mx", (((ev.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
        el.style.setProperty("--my", (((ev.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
      });
    });

    if (reduced || !window.matchMedia("(hover: hover)").matches) return;

    document.querySelectorAll("[data-magnet]").forEach(function (el) {
      el.addEventListener("pointermove", function (ev) {
        var r = el.getBoundingClientRect();
        var dx = (ev.clientX - r.left - r.width / 2) / r.width;
        var dy = (ev.clientY - r.top - r.height / 2) / r.height;
        el.style.transform =
          "translate(" + (dx * 12).toFixed(1) + "px," + (dy * 8).toFixed(1) + "px)";
      });
      el.addEventListener("pointerleave", function () {
        el.style.transform = "translate(0,0)";
      });
    });
  }

  /* ----------------------------------------------------------------------
     Menu mobile — a lista horizontal não cabe abaixo de 860px
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

  /* ----------------------------------------------------------------------
     FAQ
     ---------------------------------------------------------------------- */

  function initFaq() {
    document.querySelectorAll("[data-faq]").forEach(function (item) {
      var trigger = item.querySelector(".ol-faq__trigger");
      var body = item.querySelector("[data-faq-body]");
      if (!trigger || !body) return;

      trigger.addEventListener("click", function () {
        var open = item.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", String(open));
        body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
        body.style.opacity = open ? "1" : "0";
        // A altura da página mudou: o pin e a barra de progresso precisam saber.
        window.setTimeout(function () {
          layout();
          dirty = true;
        }, 420);
      });

      window.addEventListener("resize", function () {
        if (item.classList.contains("is-open")) body.style.maxHeight = body.scrollHeight + "px";
      });
    });
  }

  /* ----------------------------------------------------------------------
     Coleta e medição
     ---------------------------------------------------------------------- */

  function collect() {
    nav = document.querySelector("[data-nav]");
    progress = document.querySelector("[data-progress]");
    hero = document.querySelector("[data-hero]");
    heroVideo = document.querySelector("[data-hero-video]");
    heroContent = document.querySelector("[data-hero-content]");
    heroCue = document.querySelector("[data-hero-cue]");

    pxNodes = [].slice.call(document.querySelectorAll("[data-px]"));
    stacks = [].slice.call(document.querySelectorAll("[data-stack]"));
    zooms = [].slice.call(document.querySelectorAll("[data-zoom]"));
    scaleIns = [].slice.call(document.querySelectorAll("[data-scale-in]"));
    navLinks = [].slice.call(document.querySelectorAll(".ol-nav__link"));
    sections = navLinks
      .map(function (a) {
        return document.querySelector(a.getAttribute("href"));
      })
      .filter(Boolean);

    // Marquees duplicam os filhos uma vez para poder emendar o laço.
    marquees = [].slice.call(document.querySelectorAll("[data-mq-row],[data-drift]")).map(function (el) {
      if (!el.dataset.cloned) {
        el.dataset.cloned = "1";
        [].slice.call(el.children).forEach(function (k) {
          var copy = k.cloneNode(true);
          copy.setAttribute("aria-hidden", "true");
          el.appendChild(copy);
        });
      }
      return el;
    });
  }

  function layout() {
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    var track = document.querySelector("[data-hpin-track]");
    if (track) {
      var vp = track.querySelector("[data-hpin-vp]");
      var rail = track.querySelector("[data-hpin-rail]");
      // Pin exige largura e altura: em tela pequena, ou sem movimento, a
      // trilha volta a ser uma rolagem horizontal comum (que é o padrão do CSS).
      var narrow = vw < 900 || vh < 620 || reduced;
      if (narrow) {
        track.classList.remove("is-pinned");
        track.style.height = "";
        rail.style.transform = "";
        hpin = null;
      } else {
        track.classList.add("is-pinned");
        rail.style.transform = "translate3d(0,0,0)";
        rail.style.paddingLeft = Math.max(24, Math.round((vw - 1280) / 2 + 24)) + "px";
        var kids = rail.children;
        var last = kids[kids.length - 1];
        var span = last
          ? last.getBoundingClientRect().right - rail.getBoundingClientRect().left
          : rail.scrollWidth;
        var dist = Math.max(0, Math.round(span + Math.max(40, vw * 0.12) - vp.clientWidth));
        track.style.height = vh + dist + "px";
        hpin = { track: track, rail: rail, dist: dist };
      }
    }

    heroMotion = !reduced && vw > 640;
    if (heroCue) heroCue.style.display = vh < 720 ? "none" : "";
    if (!heroMotion) {
      if (heroVideo) heroVideo.style.transform = "";
      if (heroContent) {
        heroContent.style.opacity = "";
        heroContent.style.transform = "";
      }
    }

    docH = document.documentElement.scrollHeight - vh;
  }

  /* ----------------------------------------------------------------------
     Loop
     ---------------------------------------------------------------------- */

  function frame() {
    var y = window.scrollY;
    var vh = window.innerHeight;

    var dv = y - lastY;
    lastY = y;
    vel += (dv - vel) * 0.18;

    if (!dirty && Math.abs(vel) < 0.05) return;
    dirty = false;

    if (progress && docH > 0) {
      progress.style.width = (clamp(y / docH, 0, 1) * 100).toFixed(2) + "%";
    }
    if (nav) nav.classList.toggle("is-stuck", y > 60);

    // Seção ativa no menu
    if (sections.length) {
      var active = -1;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= 140) active = i;
      }
      navLinks.forEach(function (a, idx) {
        a.classList.toggle("is-active", idx === active);
      });
    }

    if (hero && heroMotion) {
      var p = clamp(y / vh, 0, 1);
      if (heroVideo) heroVideo.style.transform = "scale(" + (1 + 0.22 * p * amp).toFixed(3) + ")";
      if (heroContent) {
        heroContent.style.opacity = String(clamp(1 - p * 1.7, 0, 1));
        heroContent.style.transform =
          "translate3d(0," + (-p * 90 * amp).toFixed(1) + "px,0) scale(" + (1 - p * 0.08).toFixed(3) + ")";
      }
      if (heroCue) heroCue.style.opacity = String(clamp(1 - p * 4, 0, 1));
    }
    // Fora de vista o vídeo para de consumir CPU.
    if (heroVideo) {
      var visible = y < vh * 1.15;
      if (visible && heroVideo.paused) {
        var pr = heroVideo.play();
        if (pr && pr.catch) pr.catch(function () {});
      }
      if (!visible && !heroVideo.paused) heroVideo.pause();
    }

    if (reduced) return;

    pxNodes.forEach(function (n) {
      var r = n.getBoundingClientRect();
      if (r.bottom < -500 || r.top > vh + 500) return;
      var off = r.top + r.height / 2 - vh / 2;
      n.style.transform =
        "translate3d(0," + (-off * parseFloat(n.dataset.px) * amp).toFixed(1) + "px,0)";
    });

    // Cada cartão de serviço encolhe um pouco quando o próximo encosta.
    stacks.forEach(function (card, i) {
      var next = stacks[i + 1];
      if (!next) {
        card.style.transform = "none";
        return;
      }
      var r = card.getBoundingClientRect();
      var nr = next.getBoundingClientRect();
      var gap = nr.top - (r.top + r.height);
      var p = clamp(1 - gap / (vh * 0.75), 0, 1);
      card.style.transform =
        "translate3d(0," + (-14 * p).toFixed(1) + "px,0) scale(" + (1 - 0.055 * p).toFixed(3) + ")";
    });

    zooms.forEach(function (f) {
      var img = f.querySelector("img");
      if (!img) return;
      var r = f.getBoundingClientRect();
      if (r.bottom < -300 || r.top > vh + 300) return;
      var p = clamp((vh - r.top) / (vh + r.height), 0, 1);
      var a = parseFloat(f.dataset.zoomAmt || "0.16");
      img.style.transform = "scale(" + (1 + a * (1 - p) * amp).toFixed(3) + ")";
    });

    scaleIns.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var p = clamp((vh * 1.05 - r.top) / (vh * 0.85), 0, 1);
      el.style.transform = "scale(" + (0.9 + 0.1 * p).toFixed(3) + ")";
      el.style.opacity = String(clamp(p * 1.4, 0, 1));
    });

    if (hpin && hpin.dist > 0) {
      var top = hpin.track.getBoundingClientRect().top + y;
      var pp = clamp((y - top) / hpin.dist, 0, 1);
      hpin.rail.style.transform = "translate3d(" + (-pp * hpin.dist).toFixed(1) + "px,0,0)";
    }
  }

  /* ----------------------------------------------------------------------
     Boot
     ---------------------------------------------------------------------- */

  /* ----------------------------------------------------------------------
     Marquees — a faixa é animada por CSS (compositor) e nunca para. Nada aqui
     depende de requestAnimationFrame nem de IntersectionObserver: no mobile os
     dois dependem do pipeline de renderização, e quando ele engasga (Low Power
     Mode, momentum scroll do iOS, jank) a faixa simplesmente parava.

     Não pausamos fora da tela de propósito: o ganho é irrelevante — o navegador
     já não pinta o que não está visível — e o modo de falha seria "pausado para
     sempre". Aqui o JS só inverte o sentido; se ele falhar, a faixa continua
     andando no sentido padrão.
     ---------------------------------------------------------------------- */

  /* Inverter o sentido trocando `animation-direction` NAO continua de onde a
     faixa estava: o progresso vira 1 - p, o que teleporta meia largura (~1900px
     aqui). No desktop isso lia como "voltou ao inicio"; no mobile, onde o
     momentum do iOS troca de sentido varias vezes seguidas, a faixa teleportava
     tanto que parecia parada.

     Com a Web Animations API o `playbackRate` muda mantendo o `currentTime`, e a
     inversao fica continua. Como o tempo passa a correr para tras, adiantamos o
     relogio um numero INTEIRO de voltas: invisivel, porque o progresso e por
     iteracao, e assim ele nunca chega a zero (onde a animacao travaria). */
  function seekAnims() {
    var VOLTAS = 2000; // ~30h de reversao continua na duracao mais curta
    return marquees
      .map(function (el) {
        var list = el.getAnimations ? el.getAnimations() : [];
        for (var i = 0; i < list.length; i++) {
          var timing = list[i].effect && list[i].effect.getComputedTiming();
          var dur = timing && timing.duration;
          if (dur > 0 && isFinite(dur)) {
            list[i].currentTime = (list[i].currentTime || 0) + dur * VOLTAS;
            return list[i];
          }
        }
        return null;
      })
      .filter(Boolean);
  }

  function initMarquees() {
    if (reduced || !marquees.length) return;

    // Sentido acompanha o scroll, como no design. As animacoes sao resolvidas na
    // primeira inversao, nao no boot: ai o estilo ja esta calculado com certeza.
    // Sem Web Animations API a lista vem vazia e a faixa segue no sentido
    // padrao — preferimos nao inverter a inverter com salto.
    var prevY = window.scrollY;
    var dir = 1;
    var anims = null;
    window.addEventListener(
      "scroll",
      function () {
        var y = window.scrollY;
        var d = y - prevY;
        prevY = y;
        if (Math.abs(d) < 2 || (d > 0) === (dir > 0)) return;
        dir = d > 0 ? 1 : -1;
        if (!anims) anims = seekAnims();
        anims.forEach(function (a) {
          a.playbackRate = dir;
        });
      },
      { passive: true }
    );
  }

  function init() {
    applyOptions();
    initVideo();
    initReveal();
    initHover();
    mobileMenu();
    initFaq();
    collect();
    layout();
    initMarquees();

    lastY = window.scrollY;
    dirty = true;

    window.addEventListener(
      "scroll",
      function () {
        dirty = true;
      },
      { passive: true }
    );
    var relayout = function () {
      layout();
      dirty = true;
    };
    window.addEventListener("resize", relayout);
    window.addEventListener("load", relayout);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
    window.setTimeout(relayout, 1200);

    var loop = function () {
      frame();
      raf = window.requestAnimationFrame(loop);
    };
    raf = window.requestAnimationFrame(loop);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
