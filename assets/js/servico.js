/* ==========================================================================
   Origami Lab — Páginas de serviço

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

  /* ---- Ciclo de entrega ----

     A linha percorre a órbita acumulando: o segmento já vencido continua aceso
     enquanto o seguinte cresce, e cada nó acende quando a linha encosta nele.
     Fechada a volta, o traço esvanece e recomeça.

     O handoff especifica um tique de 60ms, que a 16 quadros por segundo faz a
     linha andar aos trancos. Aqui o avanço vem do relógio do navegador, via
     requestAnimationFrame: mesmo ritmo (4,2s por etapa), movimento contínuo.

     Sem JavaScript o cartão já nasce com a primeira etapa marcada e o texto
     visível, então nada depende desta função para ser lido. */
  function initCiclo() {
    var raiz = document.querySelector("[data-cycle]");
    if (!raiz) return;

    var ETAPAS = [
      { nome: "Aprender", texto: "Ouvimos quem usa o sistema todo dia e transformamos a dor em hipótese clara." },
      { nome: "Construir", texto: "Em duas semanas, software rodando de verdade e integrado à sua operação." },
      { nome: "Medir", texto: "Tempo, retrabalho e custo na sua régua. O número decide o próximo sprint." }
    ];
    var ARCO = 263.9;    // comprimento do arco de 120° com raio 126
    var RAIO_NO = 33;    // metade do nó, no sistema de coordenadas do SVG
    var ETAPA_MS = 4200; // tempo em cada etapa
    var LIMPEZA_MS = 550;
    /* O arco liga o centro de um nó ao centro do seguinte, mas visualmente
       alcança o próximo assim que toca a borda do círculo — um raio antes. */
    var TOQUE = (ARCO - RAIO_NO) / ARCO;
    var VOLTA = ETAPA_MS * ETAPAS.length;

    var nos = [].slice.call(raiz.querySelectorAll("[data-cycle-node]"));
    var rotulos = [].slice.call(raiz.querySelectorAll("[data-cycle-label]"));
    var arcos = [].slice.call(raiz.querySelectorAll("[data-cycle-fill]"));
    var nome = raiz.querySelector("[data-cycle-name]");
    var texto = raiz.querySelector("[data-cycle-desc]");
    if (nos.length !== ETAPAS.length || !nome || !texto) return;

    var t = 0;           // ms decorridos na volta
    var parado = false;
    var limpando = false;
    var ultimo = 0;
    var mostrado = -1;

    function suave(p) {   // tira o arranque seco do início de cada segmento
      return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    }

    function pintar() {
      var alcancados = 0;
      for (var i = 0; i < ETAPAS.length; i++) {
        var p = Math.min(Math.max((t - i * ETAPA_MS) / ETAPA_MS, 0), 1);
        // `style` e não `setAttribute`: num SVG o atributo de apresentação tem
        // especificidade zero e perde para a regra `.ol-cycle__fill` do CSS.
        arcos[i].style.strokeDasharray = ARCO * suave(p) + " 600";
        if (p >= TOQUE) alcancados = i + 1;
      }

      var atual = alcancados % ETAPAS.length;
      nos.forEach(function (n, i) {
        n.classList.toggle("is-active", i === atual);
        n.classList.toggle("is-done", !limpando && i !== atual && i < alcancados);
      });
      rotulos.forEach(function (r, i) { r.classList.toggle("is-active", i === atual); });

      if (mostrado !== atual) {
        mostrado = atual;
        nome.textContent = ETAPAS[atual].nome;
        texto.textContent = ETAPAS[atual].texto;
      }
    }

    function irPara(i) {
      limpando = false;
      raiz.classList.remove("is-clearing");
      t = i * ETAPA_MS;
      pintar();
    }

    nos.forEach(function (n, i) {
      n.addEventListener("click", function () { irPara(i); });
      n.addEventListener("focus", function () { irPara(i); });
    });

    pintar();

    // Sem movimento o ciclo não anda sozinho: fica só a navegação por clique.
    if (semMovimento) return;

    raiz.addEventListener("pointerenter", function () { parado = true; });
    raiz.addEventListener("pointerleave", function () { parado = false; });

    function quadro(agora) {
      var delta = ultimo ? agora - ultimo : 0;
      ultimo = agora;
      // Aba em segundo plano devolve um salto enorme; melhor descartar.
      if (delta > 200) delta = 0;

      if (!parado && !document.hidden) {
        t += delta;
        if (!limpando && t >= VOLTA) {
          limpando = true;
          raiz.classList.add("is-clearing");
        } else if (limpando && t >= VOLTA + LIMPEZA_MS) {
          limpando = false;
          raiz.classList.remove("is-clearing");
          t = 0;
        }
        if (!limpando) pintar();
      }
      requestAnimationFrame(quadro);
    }
    requestAnimationFrame(quadro);
  }

  function init() {
    initVideo();
    initCiclo();
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
