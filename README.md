# LP Origami Lab

Landing page estática da Origami Lab. Sem build, sem npm: publica em qualquer
hospedagem de arquivo estático (GitHub Pages inclusive).

## Rodar

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

Prefira o servidor a abrir o `index.html` por `file://` — o vídeo do hero e o
formulário embutido dependem de origem HTTP.

## Estrutura

```
index.html                 a página (12 seções)
assets/css/styles.css      estilos; design tokens em :root
assets/js/main.js          menu mobile, reveal, parallax, gráfico, FAQ
assets/                    imagens, logos, vídeo e poster do hero
robots.txt, sitemap.xml    SEO
LP Origami Lab.dc.html     arquivo de design original (referência)
support.js                 runtime do Claude Design, usado só pelo .dc.html
```

Os dois últimos não são carregados pela página e podem sair do deploy.

## O que preciso de você para fechar as pendências

### Links sem destino

| Onde | Estado hoje | Preciso de |
|---|---|---|
| Seção de contato | "WhatsApp — a definir" | número → viro `https://wa.me/55DDD...` |
| Rodapé | "WhatsApp, endereço e redes sociais: a definir" | número, endereço, URL do LinkedIn e do Instagram |

Os links quebrados que existiam foram removidos, não deixados apontando para o
lugar errado: antes **"Falar no WhatsApp", "LinkedIn", "Instagram" e o telefone
do rodapé apontavam todos para `#contato`** — o próprio bloco onde já estavam.

### Conteúdo marcado com `data-todo` (aparece na página com o selo "a preencher")

1. **Entregáveis e prazo de cada serviço** — ex.: "diagnóstico em 3 semanas, com
   mapa de processo e plano priorizado". É o que o visitante mais procura antes
   de agendar e o maior ganho de conversão que falta.
2. **Depoimento de cliente** — frase, nome, cargo e empresa. O slot está pronto.

### Outros

3. Endereço completo, CNPJ e razão social (procurement B2B costuma pedir).
4. Confirmar que `contato@origamilab.com.br` é monitorado.
5. Imagem de Open Graph 1200×630 própria — hoje usa o poster do hero.
6. Política de privacidade / LGPD: o formulário coleta dados pessoais.
7. **Cases com resultado.** Optamos por prova só com logos e setores. Enquanto
   não houver problema → intervenção → resultado de dois ou três clientes, esta
   é a maior lacuna para ticket de R$ 50–500 mil.
8. O formulário promete "contato em até 24 horas" e a página diz "resposta em até
   1 dia útil". Vale alinhar os dois.

## Conversão

Todos os CTAs levam à seção `#contato`, que **embute o Microsoft Forms** num
iframe (`https://forms.cloud.microsoft/r/f2GGyr2vZT`) — o visitante converte sem
sair do site. Há botão "abrir em nova aba" como fallback caso o tenant passe a
bloquear embed via `X-Frame-Options` ou `frame-ancestors`.

Antes desta versão o site **não conseguia captar um lead**: o único formulário
não tinha `action` e chamava `preventDefault`.

## Pontos abertos do design (props editáveis)

No topo de `assets/js/main.js`:

```js
var OPTIONS = {
  precoNaFaq: false,       // faixa "R$ 50 mil a R$ 500 mil" na FAQ "Quanto custa?"
  depoimentoCabral: false, // reservado; o depoimento agora tem seção própria
};
```

O texto de `precoNaFaq` já está no HTML com `data-opt="preco"`, oculto por CSS.

## Decisões de implementação

### De pitch para site

O site era a conversão fiel de um pitch deck. A auditoria mediu o desalinhamento:
**199 palavras agitando o problema em 4 seções de tela cheia contra 81 palavras
descrevendo o que se vende**, na posição 11 de 14. A seção `#cases` — prometida
no menu, no rodapé e num botão do hero — não tinha um único case. O conteúdo mais
profundo da página era o FAQ.

O que mudou:

- **Serviços saíram da posição 11 para a 3** e passaram de 81 para 345 palavras,
  absorvendo os 5 pontos que estavam órfãos na falsa seção de cases.
- **As 4 seções de problema viraram 1**, densa e escaneável, sem descartar as
  falas de cliente nem os 6 cards de sistema.
- **"Só cobramos se o capital for liberado"** subiu do FAQ para a seção de
  serviços: é reversão de risco e responde à objeção nº 1.
- **Seção "Para quem é"** nova, construída só com conteúdo que já existia (a lista
  de clientes define o ICP; a frase sobre empresas de 1962–1980 estava dentro de
  um acordeão).
- Saíram os dispositivos de deck: o slide "É por isso que a Origami Lab existe",
  a seção que só tinha um título e o callout de tela cheia.
- **Sem `scroll-snap` e sem `min-height: 100vh`.** "Uma seção por tela" é
  ergonomia de apresentação e impedia escanear. O documento caiu de 13.146 para
  10.910px *ganhando* seções.

### Técnico

- **Menu mobile.** Abaixo de 860px os links do nav simplesmente desapareciam sem
  substituto. Agora há painel com `aria-expanded`, fecha com `Esc`, com clique
  fora e ao navegar.
- **Poster do hero.** O `hero-bg.webm` tem 12 MB. Um frame extraído dele
  (`assets/hero-poster.webp`, 48 KB) cobre a primeira pintura e o vídeo entra com
  `preload="none"`.
- **Overflow do logo.** Os atributos `width`/`height` do `<img>` valem como
  presentational hint: sem `width:auto` a largura intrínseca (7811px) esticava o
  flex do nav e empurrava o `body`.
- **Rede de segurança no reveal.** Se uma notificação do `IntersectionObserver`
  não chegasse, o texto ficaria invisível para sempre. Um sweep no `scroll`
  revela os pendentes já visíveis e se desliga quando não há mais nenhum.
- **SEO.** `title`/`description` com proposta de valor e localização, `canonical`,
  JSON-LD com `Organization`, `WebSite` e `FAQPage` (7 perguntas), `robots.txt` e
  `sitemap.xml`. O `FAQPage` é o que tem chance real de rich result.
- **Acessibilidade.** `aria-expanded`/`aria-controls` na FAQ e no menu, link "pular
  para o conteúdo", `role="img"` com `aria-label` nos dois gráficos, `title` no
  iframe do formulário, `aria-hidden` nos SVGs decorativos.

### Limite conhecido

Página única foi decisão do cliente. O custo é não ter URL para mandar a um
prospect ("a página da Lei do Bem") nem ganho de SEO por página; mitigado com SEO
on-page e `FAQPage` schema.

## Verificações feitas

- Todas as 24 referências locais resolvendo; HTML balanceado; sem id duplicado,
  âncora quebrada, `aria-controls` órfão ou classe sem regra CSS.
- **Ordem no DOM confirmada por script:** "O que fazemos" na posição 3, "O que
  está travando" na 5.
- Sem overflow horizontal de 320 a 1440px; menu mobile aparecendo exatamente
  até 860px.
- Nenhuma seção presa a `100vh` (`min-height: 0` em todas); as 4 mais altas são
  altas por conteúdo real.
- Render conferido em 1440px (serviços, ICP, problema, operação integrada,
  conversão) e em 360px.
- Funcional: menu abre/fecha por clique, `Esc` e clique fora; FAQ preservado;
  iframe do formulário carregando; reveal revelando tudo ao percorrer a página;
  gráfico animando; `h1` único e sem salto de heading. Sem erro de console.
- `prefers-reduced-motion` desliga animações e reveal e força o gráfico ao estado
  final.

O parallax das fotos não é exercitável no headless (depende de
`requestAnimationFrame`, que não dispara sob virtual-time) — precisa de conferência
no navegador.
