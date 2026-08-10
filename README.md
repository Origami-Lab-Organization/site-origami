# LP Origami Lab

Landing page estática implementada a partir do projeto Claude Design
[Nova LP Origami Lab](https://claude.ai/design/p/ce64192e-e807-43a0-a0f5-7b0de9651cc8).

## Rodar

Sem build. Qualquer servidor estático serve:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

Abrir o `index.html` direto pelo `file://` também funciona, mas o vídeo do hero
e alguns navegadores reclamam de caminhos relativos — prefira o servidor.

## Estrutura

```
index.html                 página
assets/css/styles.css       estilos (design tokens em :root)
assets/js/main.js           reveal, parallax, gráfico, FAQ, formulário
assets/                     imagens e logos
LP Origami Lab.dc.html      arquivo de design original (referência)
support.js                  runtime do Claude Design, usado só pelo .dc.html
```

Os dois últimos não são carregados pela página — ficam como fonte de referência
do design. Podem ser removidos do deploy.

## Pendências para publicar

1. **Dados de contato são placeholder** no rodapé, herdados do design:
   telefone `(37) 0000-0000`, `Rua · nº · Bairro`, `CEP 35570-000`. Os links de
   LinkedIn e Instagram apontam para `#contato`.

2. **O botão "Falar no WhatsApp"** aponta para `#contato`. Troque pelo link
   `https://wa.me/55DDDNUMERO`.

3. **O formulário da apresentação em PDF** não tem back-end: ele apenas confirma
   na tela. Aponte o `action` para o seu endpoint (ou integre com o CRM) e
   remova o `preventDefault` em `pdfForm()`, em `assets/js/main.js`.

## Pontos abertos do design (props editáveis)

O design expunha dois toggles. Viraram configuração no topo de
`assets/js/main.js`:

```js
var OPTIONS = {
  precoNaFaq: false,       // faixa "R$ 50 mil a R$ 500 mil" na FAQ "Quanto custa?"
  depoimentoCabral: false, // depoimento da Transportadora Cabral
};
```

O texto de `precoNaFaq` já está no HTML, marcado com `data-opt="preco"` e oculto
por CSS. O bloco de `depoimentoCabral` **não existia** no design — o toggle
estava declarado sem markup correspondente; se for usar, crie o elemento com
`data-opt="depoimento"`.

## Decisões de implementação

- **`<x-dc>` → HTML semântico.** O design era um template renderizado por React
  via `support.js`, com estilos inline e atributos `style-hover`/`style-focus`.
  Como inline não suporta pseudo-classes, tudo virou CSS com `:hover`, `:focus`
  e `:focus-visible` reais.
- **Responsividade.** O design não tinha nenhum breakpoint: grades fixas de 3 e
  5 colunas e nav sempre completa. Foram adicionados breakpoints em 1024, 860 e
  640px. Abaixo de 860px a lista de links do nav é ocultada (logo + CTA
  permanecem); abaixo de 640px o `scroll-snap` e o `min-height: 100vh` das
  seções são desligados, porque em telas pequenas as seções são mais altas que a
  viewport e o snap deixa de ajudar.
- **Empilhamento das seções.** O `stackReveal()` do design aplicava por JS
  `min-height:100vh`, centralização e `scroll-snap-type: y proximity`. Isso é
  CSS puro aqui.
- **Vídeo do hero.** O `assets/hero-bg.webm` (12 MB) veio truncado pelo limite
  de 256 KiB por arquivo do MCP e foi copiado manualmente do original. Se
  algum dia ele faltar, o hero cai num degradê de fallback e nada quebra.
- **Imagem duplicada.** No design, a `<figure>` da seção "O seu legado em boas
  mãos" tinha duas `<img>` empilhadas: uma sobra de colagem
  (`img_9448-3-msgohzbl-l378.jpg`) e a pretendida (`assets/pitch-10.webp`).
  Ficou só a `pitch-10.webp`, que é a descrita pelo próprio `alt` ("Sócios e
  time da Origami Lab"). O jpg também estourou o limite de 256 KiB e não pôde
  ser baixado.
- **Correção de texto.** A pergunta da FAQ estava como "De onde vem a
  experiênica dos sócios?" com aspas retas e um `<br>` solto. Corrigido para
  "experiência" e as aspas normalizadas para o mesmo padrão curvo das outras
  perguntas.
- **Acessibilidade.** A FAQ ganhou `aria-expanded`/`aria-controls`, os SVGs
  decorativos ganharam `aria-hidden`, os dois gráficos ganharam `role="img"` com
  `aria-label` descritivo, e o campo de e-mail ganhou `<label>`.
- **Rede de segurança do reveal.** O reveal por `IntersectionObserver` esconde
  elementos abaixo da dobra. Se uma notificação do observer não chegasse, o
  texto ficaria invisível permanentemente. Um sweep no evento de `scroll`
  revela qualquer pendente que já passou da borda inferior, e se desliga
  sozinho quando não há mais nada pendente. Idem para o gráfico.

## Verificações feitas

- Todos os 24 assets referenciados respondem 200; vídeo do hero reproduzindo.
- Renderização conferida em 1440px (hero, contexto, cases, clientes, serviços,
  presença, contato, FAQ) e em 360px.
- Sem overflow horizontal de 320 a 1440px.
- FAQ abre/fecha com `aria-expanded` e altura corretos; formulário confirma e
  limpa o campo; `precoNaFaq` oculto por padrão; gráfico anima ao entrar em
  cena; reveal revela tudo ao percorrer a página. Sem erros de console.
- `prefers-reduced-motion` desliga animações, snap e reveal, e força o gráfico
  ao estado final.
