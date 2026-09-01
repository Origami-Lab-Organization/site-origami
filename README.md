# LP Origami Lab

Landing page estática da Origami Lab. Sem build, sem npm: publica em qualquer
hospedagem de arquivo estático (GitHub Pages inclusive).

## Deploy

Push na `main` dispara o workflow `.github/workflows/deploy.yml`, que publica em
produção na Vercel. **Push nesta branch é deploy** — não é só versionamento.
Configuração em `vercel.json` (headers de segurança e cache) e `.vercelignore`.

Secrets necessários no repo (Settings → Secrets and variables → Actions):
`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

## Rodar

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

Prefira o servidor a abrir o `index.html` por `file://` — o vídeo do hero depende
de origem HTTP.

## Estrutura

```
index.html                 a página (9 seções + rodapé)
assets/css/styles.css      estilos; design tokens em :root e @font-face
assets/js/main.js          motor de scroll (nav, hero, marquees, pin, reveal, FAQ)
assets/fonts/              Inter e Instrument Serif self-hosted (sem Google Fonts)
assets/                    imagens, logos, vídeo e poster do hero, capa de OG
robots.txt, sitemap.xml, llms.txt   SEO
vercel.json, .vercelignore          hospedagem
.github/workflows/deploy.yml        deploy automático
LP Origami Lab.dc.html     arquivo de design original (referência)
support.js                 runtime do Claude Design, usado só pelo .dc.html
```

Os dois últimos não são carregados pela página e podem sair do deploy.

## Seções

1. **Hero** — fica preso (`position: sticky`) enquanto o resto da página desliza
   por cima. O vídeo dá zoom e o texto sobe e desaparece conforme o scroll.
2. **Marquee de clientes** — faixa branca com os 10 logos, rolando em laço
   contínuo por animação CSS a ~58 px/s. O **sentido** acompanha o scroll do
   visitante.
3. **Serviços** — três cartões que se empilham por `position: sticky`, cada um
   com um painel de interface simulado (painel da operação, matriz de
   priorização, destino do capital).
4. **Como trabalhamos** — quatro fases numa trilha horizontal *pinada*: o bloco
   trava na tela e a trilha anda para o lado conforme você rola para baixo.
5. **Galeria** — seis fotos em deriva para o outro lado (~48 px/s), com zoom
   conforme entram em cena.
6. **Clientes** — grade com setor de cada cliente.
7. **Quem somos** — retrato dos sócios em coluna fixa e as empresas de origem.
8. **FAQ** — oito perguntas, com a coluna do título fixa ao lado.
9. **Chamada final** — cresce e aparece ao entrar em cena.

## Comportamento e degradação

Tudo o que é movimento degrada com elegância:

| Situação | O que acontece |
|---|---|
| **Sem JavaScript** | A página fica legível e navegável. A trilha de "Como trabalhamos" vira uma **rolagem horizontal comum** (é o padrão do CSS; o pin é que é adicionado pelo JS). |
| **`prefers-reduced-motion`** | Sem parallax, sem zoom, sem pin. As duas faixas param de andar e passam a se **arrastar com o dedo**, para o conteúdo continuar alcançável em vez de congelar nos dois primeiros itens. No iOS isto é Ajustes → Acessibilidade → Movimento → *Reduzir Movimento*. O hero deixa de ser sticky e as barras do painel já aparecem preenchidas. |
| **Abaixo de 900px** | A trilha horizontal volta a ser rolagem comum com `scroll-snap`. |
| **Abaixo de 860px** | Entra o menu mobile (painel com `aria-expanded`, fecha com `Esc`, com clique fora e ao navegar). Os cartões de serviço deixam de empilhar e viram lista. |
| **Vídeo do hero ausente** | O poster de 48 KB e o degradê assumem; nada quebra. |
| **Vídeo fora de vista** | É pausado, para não consumir CPU à toa. |

O reveal por `IntersectionObserver` tem rede de segurança: se uma notificação não
chegar, um sweep no `scroll` libera o que já passou da borda inferior — texto
escondido não fica invisível para sempre.

## Ajuste de intensidade

No topo de `assets/js/main.js`:

```js
var CONFIG = {
  intensidadeMovimento: 1,   // 0 desliga o movimento, 1 é o padrão, até 1.6 exagera
  mostrarGaleria: true,      // false esconde a seção de fotos
};
```

## Conversão

Dois caminhos, ambos em nova aba com `rel="noopener"`:

- **Formulário** (8 CTAs) — `https://forms.cloud.microsoft/r/f2GGyr2vZT`
- **WhatsApp** — botão na chamada final (com mensagem pré-preenchida) e link no
  rodapé: `+55 31 9805-5189`

> Nota: a versão anterior do site **embutia** esse formulário num iframe, para o
> visitante converter sem sair da página (o formulário permite embed — não manda
> `X-Frame-Options` nem `frame-ancestors`). Este design abre em nova aba. Se
> quiser voltar ao formulário embutido, é uma mudança pequena e localizada.

## Dados de contato

Todos reais, vindos do design — **não há link sem destino**:

- **E-mail:** contato@origamilab.com.br
- **WhatsApp:** +55 31 9805-5189
- **Endereço:** R. Silviano Brandão, 156 — 2º andar, Centro, Formiga — MG, 35570-112 (com link para o Google Maps)
- **LinkedIn:** linkedin.com/company/origamilab-br
- **Instagram:** instagram.com/origamilab_br

## Pendências

1. **CNPJ e razão social** no rodapé — procurement B2B costuma pedir.
2. **Política de privacidade / LGPD** — o formulário coleta dados pessoais.
3. **Cases com resultado.** A prova hoje é logo + setor + pedigree dos sócios.
   Enquanto não houver problema → intervenção → resultado de dois ou três
   clientes, essa é a maior lacuna para ticket dessa faixa.

## Decisões de implementação

- **`<x-dc>` → HTML semântico.** O design era um template renderizado por React
  via `support.js`, com estilo inline e atributos `style-hover`. Como inline não
  suporta pseudo-classes, tudo virou CSS com `:hover`, `:focus` e
  `:focus-visible` reais. A classe `DCLogic` virou um módulo vanilla.
- **Pin horizontal invertido.** O design assumia o modo pinado e degradava para
  rolagem. Aqui é o contrário: a rolagem horizontal é o padrão do CSS e o JS
  *adiciona* o pin quando há espaço. Sem JS a seção continua utilizável.
- **Menu mobile.** O design deixava os links do nav com `flex-wrap`, o que em
  tela estreita empilharia a barra fixa em várias linhas e comeria a viewport.
- **Sublinhado da seção ativa.** O design marcava os links com `data-navlink` e
  `position: relative` sem usá-los; a página é longa, então o indicador entrou.
- **Retrato dos sócios.** O original (`img_9448-3-msgohzbl-l378.jpg`, 2 MB,
  2219×3945) estourava o limite de 256 KiB por arquivo do MCP e vinha truncado.
  Foi reconstruído do `IMG_9448.jpg` local e otimizado para
  `assets/socios.webp` — **112 KB**, 1100 px de largura.
- **Fontes self-hosted.** Inter e Instrument Serif servidas do próprio domínio,
  com `preload` das três variantes usadas acima da dobra. Sem Google Fonts: menos
  uma dependência externa e sem requisição a terceiro.
- **Poster do hero.** O `hero-bg.webm` foi comprimido de 12 MB para 3,4 MB; um frame
  (`assets/hero-poster.webp`, 48 KB) cobre a primeira pintura e o vídeo entra com
  `preload="none"`.
- **Marquee: três correções empilhadas.** Vale registrar as três, porque cada uma
  parecia "a faixa não anda no celular" e as causas eram distintas.
  1. **Do `requestAnimationFrame` para `@keyframes`.** O rAF depende do pipeline
     de renderização; no mobile ele parava com momentum scroll, Low Power Mode ou
     jank. Animação CSS roda no compositor.
  2. **Inversão por `playbackRate`, não por `animation-direction`.** Trocar a
     direção espelha o progresso (`p` → `1 - p`), o que teleporta meia largura da
     faixa — 1.876px medidos nos logos. No desktop lia como "voltou ao início";
     no mobile o momentum do iOS troca de sentido tantas vezes que a faixa
     teleportava em vez de andar. Agora o JS troca o `playbackRate` pela Web
     Animations API, que preserva o `currentTime`. Como o tempo passa a correr
     para trás, o relógio é adiantado um número inteiro de voltas (invisível,
     porque o progresso é por iteração) para nunca chegar a zero e travar. Sem
     Web Animations API a faixa segue no sentido padrão, sem inverter.
  3. **Distância do laço em pixels medidos, não `-50%`.** O `-50%` obrigava a
     faixa a medir a si mesma certo, e portanto dependia de `width: max-content`
     resolver, de não haver padding lateral e de o espaçamento ser `margin-right`
     em vez de `gap`. Três invariantes frágeis, nenhuma verificável no aparelho do
     cliente. Agora o JS mede a diferença entre o primeiro item e o primeiro clone
     e grava em `--ol-mq-w`; a distância fica correta mesmo que a faixa meça
     errado. A duração passou a sair dessa largura: antes eram dois números fixos
     por breakpoint (68s e 55s), calibrados à mão para dar ~34 px/s nos dois — o
     que funcionava, mas desregulava a cada mudança de largura de item. Agora a
     **velocidade é o parâmetro e a duração é a consequência**, e subiu de ~34
     para 58 px/s: numa tela de 380px cabem 2,5 logos, então a 34 px/s há pouca
     pista de movimento — parte do "parece parada" era isso.
     Também saiu o `will-change: transform`: animar `transform` já promove a
     camada, e numa faixa de 3.700px com DPR 3 a camada extra é memória de textura
     à toa — sob pressão o WebKit descarta e a animação engasga.

  Medido em 320/380/768/1400px: laço com erro de 0,02px na emenda, 58 px/s nos
  logos e 48 px/s na galeria, inversão com salto de 0px.
- **Logos dos clientes em peso óptico igual.** Na grade de clientes as marcas
  apareciam em tamanhos muito diferentes no mobile: a Tecno 2000 esticava até
  ~260px de largura enquanto a Retífica parava em 58px. Duas causas somadas.
  1. **A caixa era mais larga que alta.** O `img` tinha `max-width: 88%` e
     `max-height: 100%` numa caixa de 58px. No desktop a coluna é estreita e as
     duas restrições se equilibravam; no mobile o cartão ocupa a tela inteira, os
     88% viram ~260px e só as faixas longas cresciam. A caixa passou a ser fixa em
     px (`min(180px, 100%)` × 54px, ~3,3:1): a faixa longa trava na largura, a
     quase quadrada trava na altura, e a área renderizada fica parecida nas duas.
     A dispersão de área entre a maior e a menor caiu de ~10x para 1,8x.
  2. **Margem branca embutida nos arquivos.** Proporção do arquivo ≠ proporção da
     marca: a `retifica.jpg` era 447×447 com só 32% de tinta, a `bry.png` 55%, a
     `syngular.png` 46%. Qualquer normalização por CSS media a moldura, não o
     logo. Os 7 arquivos soltos foram recortados no conteúdo (Sindinova e Integrar
     ficaram de fora — são ladrilhos `is-rounded`, o recorte estragaria a borda).
     De quebra, −42 KB no total. O marquee usa os mesmos arquivos e se acertou
     junto, sem mudar de CSS; a largura do item continua fixa em 190px, então a
     medição do laço não muda.

- **Grades à prova de tela estreita.** `repeat(auto-fit, minmax(290px, 1fr))`
  estoura quando a caixa é menor que 290px. Todas as 8 ocorrências passaram a
  usar `minmax(min(290px, 100%), 1fr)`.
- **Correções de texto do design:** "acompanhando validando" → "acompanhando e
  validando"; `&nbsp;` solto que criava espaço duplo na frase do CTA.
- **Acessibilidade.** Link "pular para o conteúdo", `aria-expanded`/
  `aria-controls` na FAQ e no menu, `aria-hidden` nos SVGs decorativos e nos
  clones dos marquees (para leitor de tela não ler os logos duas vezes),
  `role="img"` com `aria-label` nos dois painéis simulados.
- **SEO.** `title`/`description`/`canonical`, JSON-LD com `ProfessionalService`
  (com endereço e `sameAs` das redes), `WebSite` e `FAQPage` com as 8 perguntas.

## Verificações feitas

- 22 referências locais resolvendo (todas 200); HTML balanceado; sem id
  duplicado, âncora quebrada, `aria-controls` órfão ou classe sem regra CSS.
- `h1` único e hierarquia de heading sem salto.
- **Sem overflow horizontal de 320 a 1440px.**
- Hero sticky com o overlay acima; marquees clonados (20 e 12 itens) com os
  clones marcados `aria-hidden`; trilha pinada a partir de 900px com altura
  calculada (`vh + distância`) e rolagem horizontal abaixo disso; menu mobile
  aparecendo até 860px.
- FAQ abre e fecha com `aria-expanded`; os 8 CTAs com `target="_blank"` e
  `rel="noopener"`. Sem erro de console.
- Render conferido em 1440px (hero com vídeo, serviços, trilha, quem somos,
  chamada final) e em 380px.
- Fontes self-hosted carregando de fato (`document.fonts`) e o `h1` resolvendo
  para Instrument Serif.

O parallax, o zoom e a translação da trilha dependem de `requestAnimationFrame`,
que não dispara no Chrome headless sob virtual-time — precisam de conferência no
navegador.
