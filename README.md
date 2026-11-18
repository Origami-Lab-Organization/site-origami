# Site da Origami Lab

Site institucional da Origami Lab em **Next.js 16 (App Router)**, mesma stack do
Projete: React 19, TypeScript, ESLint com `eslint-config-next` e testes com
`tsx --test`. Todas as páginas são geradas estáticas no build (○ no `next build`):
o HTML chega pronto ao navegador, como na versão anterior em HTML puro.

## Rodar

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build de produção (tem que passar antes de qualquer PR)
npm test             # testes (src/**/*.test.ts): medição e leads
npm run lint
npm run type-check
```

## Deploy

Vercel, projeto `site-origami`. O `vercel.json` declara `"framework": "nextjs"`;
o painel ainda mostra o preset "Other" porque a `main` publicada era estática.
Depois do primeiro deploy do Next em produção, trocar o preset para Next.js no
painel.

Variáveis de ambiente (Vercel):

| Variável | Ambientes | Para quê |
|---|---|---|
| `NEXT_PUBLIC_AMPLITUDE_API_KEY` | Production | Chave de navegador do Amplitude (tipo Config: é pública por natureza). Sem ela o console avisa que a medição está desligada |
| `RESEND_API_KEY` | Production, Preview | Envio dos leads por e-mail. Conta do Resend do Origami Pulse, domínio já verificado `origamipulse.com.br`. Use uma chave própria do site, com permissão só de envio |
| `LEADS_PARA` | Production, Preview | Quem recebe os leads (comercial) |
| `LEADS_DE` | opcional | Remetente; padrão `Site Origami Lab <noreply@origamipulse.com.br>` |

`POST /api/lead` (`src/app/api/lead/route.ts`, lógica em `src/lib/leads/`)
recebe o contato deixado nas ferramentas e formulários do site e manda por
e-mail, com as respostas e a origem da visita; responder o e-mail fala direto
com o visitante. Recusa origem de fora do site (403), tem campo-armadilha e
tempo mínimo contra robôs, e devolve 503 se a chave ou o destinatário faltarem.

O `vercel.json` guarda os redirects do blog (host `blog.origamilab.com.br`), o
`/about` e os cabeçalhos de segurança e de cache. O `next.config.ts` guarda os
redirects das URLs antigas com `.html`, gerados a partir de `src/conteudo/paginas.ts`.

## Estrutura

```
src/app/                     uma pasta por rota; page.tsx traz metadata, JSON-LD e conteúdo
src/app/layout.tsx           html, CSS global, preload da Inter, link "pular", <Medicao />
src/app/not-found.tsx        404 (status 404, noindex, dispara page_not_found)
src/app/sitemap.ts           sitemap gerado de src/conteudo/paginas.ts
src/components/              Navegacao, Rodape, DadosEstruturados, ScriptsDaPagina, Medicao…
src/conteudo/paginas.ts      páginas publicadas: fonte do sitemap e dos redirects .html
src/conteudo/contato.ts      formulário, e-mail, WhatsApp, endereço e redes (um lugar só)
src/lib/medicao/             classificação de canal e eventos de conversão (+ testes)
src/lib/leads/               validação, e-mail e envio dos leads pelo Resend (+ testes)
src/app/api/lead/            POST /api/lead
src/estilos/                 styles.css (tokens, @font-face), servico.css, plataforma.css
public/assets/               imagens, logos, fontes, vídeo e poster do hero, capa de OG
public/assets/js/            main.js (scroll da home e dos cases), pagina.js, servico.js
public/robots.txt, llms.txt  SEO e GEO; a chave do IndexNow também fica em public/
rascunhos/                   páginas fora do ar (case da Bry, aguardando o cliente)
PLANO-AQUISICAO-ORGANICA.md  diagnóstico e plano de aquisição orgânica
LP Origami Lab.dc.html       arquivo de design original (referência, não é servido)
support.js                   runtime do Claude Design, usado só pelo .dc.html
```

### Como as páginas foram migradas

As páginas vieram do HTML estático por conversão automática para JSX e foram
comparadas com o original antes da troca: title, meta, canonical, Open Graph,
JSON-LD e o conteúdo inteiro, nó a nó e atributo a atributo, saíram idênticos;
os screenshots em 380 e 1440 px batem (altura igual em todas as páginas). O que
mudou de propósito:

- **Nav e rodapé viraram componentes.** O rodapé era o mesmo bloco copiado em
  19 arquivos, já com divergências (link de Cases e coluna de soluções faltando
  em algumas páginas, duas frases de assinatura, duas grafias de endereço) e
  **quebrado no planejamento da produção**, que terminava no meio do rodapé.
  Agora é um só, com todos os links.
- **Os scripts de comportamento** (`public/assets/js`) continuam em JavaScript
  puro e rodam depois da hidratação (`next/script`, `afterInteractive`), para o
  React nunca encontrar um DOM que ele não gerou. A navegação entre páginas é
  por `<a>` (carregamento completo), de propósito: o `main.js` inicia do zero a
  cada página.

### Página nova

1. Crie `src/app/<rota>/page.tsx` com `metadata` (title, description,
   `alternates.canonical`, Open Graph) e o conteúdo, usando `<Navegacao />` e
   `<Rodape />`. Use uma página parecida como ponto de partida.
2. Some a rota em `src/conteudo/paginas.ts` (sitemap e redirect `.html`).
3. Inclua a URL no `public/llms.txt`.

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

## Cases

`/cases` e as páginas de case reaproveitam o mesmo CSS e o mesmo JS da home —
nav, rodapé, botões, reveal e tokens são os mesmos arquivos. O que muda é a
abertura: em vez do hero de vídeo em 100vh que fica preso, as páginas internas
usam `.ol-phero`, um hero curto sem vídeo, porque ali o assunto é o texto.

```
src/app/cases/page.tsx                                              listagem + as quatro fases + CTA
src/app/cases/cobranca-automatica-whatsapp-retifica-formiguense/    cobrança automática via WhatsApp
src/app/cases/prumo-engenharia/                                     intranet corporativa em SharePoint Online
src/app/cases/transportadora-cabral/                                Central do Motorista integrada ao TripLog
rascunhos/cases/plataforma-bry.html                                 plataforma única de confiança digital (fora do ar)
```

Prumo e Cabral vêm dos posts de `blog.origamilab.com.br/cases/`, reescritos
para o site (não é cópia) e com link para a versão do blog na coluna lateral.
A Bry veio do case interno em PDF. Cada página traz `Article` +
`BreadcrumbList` em JSON-LD, e todas as URLs estão em `src/conteudo/paginas.ts`
(sitemap) e no `llms.txt`.

**O que foi deixado de fora do case da Bry.** O documento de origem é interno e
traz coisas que não vão para página pública: nomes dos stakeholders do cliente
e da equipe do projeto, os clientes da Bry citados como prova de venda cruzada
(dependem de autorização de cada empresa), os concorrentes citados
nominalmente, o texto da visão interna sobre risco de continuidade do negócio,
os itens não entregues por dependência de sistemas do cliente, o fornecedor de
gateway de pagamento e as recomendações estratégicas do encerramento. Quem for
editar essa página deve manter esse corte.

**Antes de publicar a página da Bry**, validar o texto com o cliente — o
documento de origem pede isso e sugere pedir junto um depoimento curto da
direção, que hoje falta no case. Para publicar, converter o HTML de
`rascunhos/` numa rota em `src/app/cases/`.

**Para acrescentar um case:** copie a pasta de um case em `src/app/cases/`,
troque conteúdo, `metadata` e JSON-LD; some um `.ol-casecard` em
`src/app/cases/page.tsx`; aponte o "próximo case" do vizinho para ele; e inclua
a rota em `src/conteudo/paginas.ts` e no `llms.txt`.

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

No topo de `public/assets/js/main.js`:

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

## Medição

`src/lib/medicao/` (lógica e testes) e `src/components/Medicao.tsx`, montado
uma vez no layout. Substituiu o Microsoft Clarity.

- **Amplitude** com o pacote `@amplitude/unified` (análise + Session Replay +
  Experiment + Guides & Surveys), importado sob demanda depois da hidratação e
  iniciado com `amplitude.initAll(chave, {"analytics":{"autocapture":true}})`,
  como pede o assistente de instalação do Amplitude. Autocapture completo: page
  view, sessão, atribuição, cliques, formulários, downloads, frustração e Web
  Vitals. A taxa de gravação do Session Replay é definida no painel do Amplitude.
- **Chave:** `NEXT_PUBLIC_AMPLITUDE_API_KEY` na Vercel, só em Production. Não
  fica no código porque o gitleaks da esteira a trata como segredo. Sem ela, o
  console avisa `Amplitude API key missing — analytics disabled`. O Amplitude só
  carrega em `origamilab.com.br`: localhost e previews não enviam nada.
- **Privacidade:** o Amplitude grava cookies (`AMP_*`, domínio
  `.origamilab.com.br`), registra IP e pode gravar a sessão. Isso exige política
  de privacidade e aviso de cookies (LGPD), como o Clarity já exigia.
- **Eventos próprios**, todos com `pagina`, `pagina_tipo`, `canal`, `origem`,
  `pagina_entrada` e as UTMs da chegada:
  - `organic_landing_view`: primeira página da visita, quando ela veio de
    buscador (`canal=busca_organica`) ou de assistente de IA
    (`canal=assistente_ia`: ChatGPT, Perplexity, Gemini, Copilot, Claude…).
  - `service_cta_click`: clique em formulário, WhatsApp, e-mail ou telefone,
    com `cta_tipo`, `cta_local` e `cta_texto`. É intenção, não lead.
  - `meeting_booking_click`: só para link de agendamento real (Bookings,
    Calendly, cal.com ou `data-cta="agendamento"`). **Hoje não existe nenhum**:
    "Agendar conversa" leva ao formulário.
  - `page_not_found`: visita à 404, com o domínio de onde veio.
- `contact_form_submit` e `qualified_lead` **não** são medidos no navegador. O
  primeiro acontece no Microsoft Forms, que o site não enxerga; o segundo é
  decisão do comercial. Ver `PLANO-AQUISICAO-ORGANICA.md`.
- Todo evento também vai para `window.dataLayer` (GTM/GA4 no futuro sem mexer
  no arquivo). Fora de produção, os eventos ficam em `window.olMedicao.eventos`;
  com `?medicao=debug` na URL, aparecem no console.
- Para marcar o local de um CTA à mão: `data-cta-local="..."` no link ou num
  ancestral. Para forçar o tipo: `data-cta="..."`.

Testes: `npm test`.

## Dados de contato

Todos reais, vindos do design — **não há link sem destino**:

- **E-mail:** contato@origamilab.com.br
- **WhatsApp:** +55 31 9805-5189
- **Endereço:** R. Silviano Brandão, 156 — 2º andar, Centro, Formiga — MG, 35570-112 (com link para o Google Maps)
- **LinkedIn:** linkedin.com/company/origamilab-br
- **Instagram:** instagram.com/origamilab_br

## Pendências

1. **CNPJ e razão social** no rodapé — procurement B2B costuma pedir.
2. **Política de privacidade / LGPD** — publicada em `/politica-de-privacidade`
   (`noindex`), descrevendo o que o site faz de fato (Amplitude com cookies e
   gravação de sessão, formulários, fornecedores). **Revisar com o jurídico** e
   acrescentar razão social e CNPJ.
3. **Números nos cases.** `/cases` já traz problema → intervenção → resultado
   de dois clientes, mas o resultado ainda é quase todo qualitativo: o único
   número duro é o alcance da Prumo (500+ colaboradores) e o prazo de 8
   semanas. Percentual de retrabalho evitado, tempo de tratativa antes e depois
   ou custo de parada da frota fechariam o argumento para ticket dessa faixa.
4. **Indústria sem case.** Tecno 2000 e Retífica Formiguense aparecem como logo
   na home e não têm case — a lista cobre tecnologia, engenharia e logística,
   mas não indústria.
5. **Depoimento de cliente.** Só o case da Cabral tem voz do cliente. Bry e
   Prumo estão sem citação, e é o elemento que mais converte numa página de
   case.

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
- **Retrato dos sócios: de retrato para paisagem.** A foto virou uma de grupo com
  os quatro sócios (`DSC08622`, 6086×4057, 3:2), e a caixa antiga era `aspect-ratio:
  4 / 5`. Com `object-fit: cover` isso recortava 53% da largura e **sobravam dois
  dos quatro rostos** — o primeiro e o último ficavam de fora. Três ajustes:
  1. **A caixa passou a 3:2**, a proporção exata do arquivo, então não há recorte
     nenhum em repouso. O enquadramento não tem sobra para cortar: as cabeças
     começam a ~5% do topo e o braço do último sócio encosta na borda direita. Por
     isso o `data-zoom-amt` caiu de `0.1` para `0.06` — a 10% o zoom de entrada
     comia 4,5% de cada lado e entrava no cabelo e no braço.
  2. **Colunas assimétricas** (`1.28fr / 1fr`) no lugar do `auto-fit` de colunas
     iguais: uma foto 3:2 precisa de largura para os quatro rostos lerem. Com
     colunas iguais ela ficava com 576px; agora fica com 647px em 1440.
     Até 860px a seção empilha e a foto usa a largura toda — em duas colunas
     estreitas ela cairia para ~366px.
  3. `assets/socios.webp` regerado — **88 KB**, 1600×1067 (era 112 KB, 1100×1956).
- **`overflow: clip` na seção "Quem somos".** A `.ol-about` usava `overflow: hidden`
  para recortar o glow e o canto arredondado. Só que `hidden` cria um container de
  rolagem, e isso **anulava o `position: sticky`** da coluna da foto: ela descia
  junto com a seção. Com a foto em 4:5 quase não havia percurso e o bug passava
  despercebido; em 3:2 a coluna da foto ficou 183px mais baixa que a de texto e a
  falha ficou óbvia. `clip` recorta igual sem criar o container de rolagem.
- **Pílulas de marca que não cabiam.** "Thoughtworks" mede 107,7px e a pílula gasta
  30px em padding e borda, mas a pista mínima do grid era `112px`. Em telas por
  volta de 940px a coluna caía para ~132px (94,6px úteis) e **o texto vazava da
  pílula** — já acontecia em produção, antes desta mudança. A pista mínima passou a
  `140px`, que é o pior rótulo mais a moldura.
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
     px (`min(160px, 74%)` × 46px, ~3,5:1): a faixa longa trava na largura, a
     quase quadrada trava na altura, e a área renderizada fica parecida nas duas.
     A dispersão de área entre a maior e a menor caiu de ~10x para 1,8x.
     O limite lateral é `74%` e não `100%` porque o cartão do desktop tem 189px
     úteis: com `100%` a faixa longa ia a 180px e sobravam 4,5px de folga de cada
     lado — zero em ~900px de viewport. Com `74%` a folga vai a 24,5px. No mobile
     o cartão é largo (296px úteis), então lá quem manda é o cap de 160px.
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
