# Plano de aquisição orgânica — Origami Lab

Data: 17/11/2026. Branch `seo-geo/aquisicao-organica` (a partir da `origin/main`).
Continua o `RELATORIO-SEO-GEO.md` (16/09) e o `PLANO-SEO-GEO-INDUSTRIA.md` (29/09).

**Objetivo:** reuniões comerciais com decisores, não tráfego. Toda prioridade abaixo
foi ordenada por impacto comercial esperado × confiança na hipótese ÷ esforço.

---

## 1. Diagnóstico do estado inicial

### 1.1 O site

- HTML estático na Vercel, sem build nem dependência; rotas por arquivo com
  `cleanUrls`. Renderização 100% no servidor: todo texto está no HTML, sem
  depender de JavaScript para aparecer. **Não há nada a migrar.**
- 18 URLs indexáveis: home, 3 páginas de serviço, 9 páginas de conteúdo/pilar,
  `/cases` e 3 cases. O case da Bry fica fora do deploy (`.vercelignore`).
- Base técnica **acima da média** para o porte: title, description, canonical,
  Open Graph, `robots` com `max-snippet:-1`, `h1` único, hierarquia sem salto,
  zero link interno quebrado, imagens com `alt`, fontes self-hosted, sitemap
  com as 18 URLs, `robots.txt` liberando crawlers de IA, `llms.txt` descritivo.
- JSON-LD com entidade única (`ProfessionalService` com `@id`), `WebSite`,
  `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` (respostas visíveis na
  página) e `Article` nos cases.
- HTTP: `http://` e domínio sem `www` redirecionam com 308 para
  `https://www.`; `/index.html` → `/`; 404 real (não soft 404).

### 1.2 O que os dados dizem (Search Console, 20/08 a 18/11/2026)

| Métrica (propriedade de domínio, inclui cowork e blog) | Valor |
|---|---|
| Impressões / cliques | 1.871 / 114 |
| CTR / posição média | 6,1% / 7,7 |
| Cliques de consultas **sem marca** | ~0 |

- **Todo clique orgânico hoje é de marca** ("origami lab", "origamilab",
  "origami empresa"). O orgânico ainda não gera demanda nova.
- As páginas-pilar publicadas em setembro já ganham impressão, mas quase não
  ganham clique: `/tecnologia-para-industrias-minas-gerais` 258 impressões
  (posição 6,0, 1 clique); `/planejamento-de-producao` 132 (12,1); 
  `/automacao-de-processos-industriais` 127 (8,8); `/desenvolvimento-de-software`
  100 (3,9, 2 cliques). Ainda têm menos de 2 meses; título e snippet são a
  primeira alavanca quando a posição chegar à primeira página.
- O blog continua indexado (DNS ainda na Hostinger). `tendencias-inovacao-2026`
  teve 194 impressões só nos últimos 28 dias; `ia-na-industria-casos-de-uso` e
  `ia-na-mineracao`, juntos, 71. Há demanda de IA aplicada que o site não
  atende com página própria.

### 1.3 Problemas encontrados, por prioridade

| # | Problema | Impacto | Situação |
|---|---|---|---|
| 1 | **Sem medição de conversão.** Só Microsoft Clarity (mapa de calor). Nenhum evento de CTA, nenhuma origem preservada | Alto: impossível saber se o orgânico gera conversa | **Corrigido** (Amplitude + eventos) |
| 2 | **Páginas de serviço sem saída.** Desenvolvimento de software e Consultoria só linkavam Acesso a capital; Acesso a capital não linkava nada no corpo; nenhuma linkava um case | Alto: a página de dinheiro não mostrava prova | **Corrigido** |
| 3 | **Conteúdo não apontava para a página de contratação.** Software sob medida (informacional) não linkava Desenvolvimento de software (comercial) | Médio: risco de canibalização | **Corrigido** |
| 4 | **Cases só linkavam outros cases**, nunca o serviço | Médio | **Corrigido** |
| 5 | CTA **"Avaliar elegibilidade"** (texto da Lei do Bem) no topo de Desenvolvimento de software e Consultoria | Médio: CTA incoerente com a página | **Corrigido** |
| 6 | **404 padrão da Vercel** (79 bytes, sem link). O redirect curinga do blog vai mandar URLs antigas para caminhos inexistentes | Médio, vira alto na troca do DNS | **Corrigido** |
| 7 | Titles com 73–86 caracteres, cortados na SERP; description de 219 em `/cases` | Baixo | **Corrigido** |
| 8 | **"Agendar conversa" leva a um formulário.** ~100 botões prometem agendamento e entregam um Microsoft Forms | Alto em CRO e em medição | **Decisão pendente** (seção 8) |
| 9 | **Uma única porta de conversão.** Quem chega por busca informacional só tem "agendar conversa" como próximo passo | Alto | **Proposta** (seção 9) |
| 10 | Clusters de **legado** (A) e **IA** (B) sem página | Médio/alto | **Proposta** (seção 9) |
| 11 | Sem política de privacidade; sem CNPJ/razão social | Bloqueia captura própria de lead | Pendente (seção 8) |
| 12 | Card da Prumo na home cita "apontamento de campo 100% digitalizado", mas o case publicado é a intranet | Risco de afirmação sem prova | Pendente desde 29/09 |

---

## 2. Oportunidades priorizadas

Escala de 1 a 5. Prioridade = impacto × confiança ÷ esforço.

| Oportunidade | Impacto | Confiança | Esforço | Prioridade |
|---|---|---|---|---|
| Medição de conversão e origem (feito) | 5 | 5 | 2 | 12,5 |
| Links serviço ↔ conteúdo ↔ case (feito) | 4 | 4 | 1 | 16,0 |
| Agendamento real (Microsoft Bookings) no lugar de "agendar" → formulário | 5 | 4 | 1 | 20,0 |
| Calculadora de OEE + planilha de OEE para baixar | 4 | 4 | 2 | 8,0 |
| Simulador da Lei do Bem + hub de Lei do Bem | 5 | 3 | 4 | 3,8 |
| Planilha de PCP gratuita | 3 | 4 | 2 | 6,0 |
| Página de modernização de sistemas legados | 3 | 3 | 2 | 4,5 |
| Página de IA aplicada à operação (com projeto real) | 4 | 2 | 2 | 4,0 |
| Google Business Profile completo | 3 | 4 | 1 | 12,0 |
| Trocar DNS do blog (redirects já prontos no `vercel.json`) | 3 | 5 | 1 | 15,0 |

---

## 3. Alterações implementadas

Todas reversíveis, sem dependência nova, sem mudança de design (só componentes
que já existiam no CSS).

| Arquivo | Mudança |
|---|---|
| **Site inteiro migrado para Next.js 16** (seção 12) | Mesma stack do Projete; páginas estáticas; nav e rodapé como componentes |
| `src/lib/medicao/`, `src/components/Medicao.tsx` (novos) | Amplitude (`@amplitude/unified`, `initAll` com autocapture completo) + `organic_landing_view`, `service_cta_click`, `meeting_booking_click`, `page_not_found`; origem da visita preservada em todos os eventos. Chave em `NEXT_PUBLIC_AMPLITUDE_API_KEY` (Vercel, só Production) |
| `assets/js/clarity.js` (removido) | Microsoft Clarity saiu do site |
| Todas as páginas | Microsoft Clarity removido |
| `src/lib/medicao/medicao.test.ts` (novo) | 29 testes (`npm test`). Cobertura: 99% linhas, 95% branches |
| `src/app/not-found.tsx` (novo) | Página de não encontrado com nav, seis destinos, CTA e rodapé; `noindex`; dispara `page_not_found` |
| `desenvolvimento-de-software.html` | Bloco "Projetos e leituras relacionadas" (2 cases + 2 conteúdos); CTA do topo corrigido |
| `consultoria-estrategica.html` | Bloco "Leituras relacionadas" (ROI, o que automatizar, cases); CTA do topo corrigido |
| `acesso-a-capital.html` | Bloco "Leituras relacionadas" (desenvolvimento, consultoria, ROI) |
| `software-sob-medida.html` | Card para Desenvolvimento de software (sinal contra canibalização); title encurtado |
| `integracao-de-sistemas.html` | Cards para Desenvolvimento de software e case da Cabral; title encurtado |
| `cases/*.html` (3 publicados) | Bloco "Serviços e leituras relacionadas"; title da Retífica encurtado |
| `cases/index.html` | Title e description reescritos (219 → 157 caracteres) |
| `sitemap.xml` | `lastmod` das 9 páginas alteradas |
| 13 páginas | `streetAddress` do JSON-LD padronizado ("156 - 2º andar") |
| `README.md`, `.vercelignore` | Seção "Medição"; nota sobre o `deploy.yml` que não existe; testes e este plano fora do deploy |

### Como foi verificado

- Testes unitários: 29/29; `next build`, ESLint e `tsc` sem erro.
- E2E no Chrome (site local servido como `www.origamilab.com.br`, SDK real do
  Amplitude, API interceptada): SRI válido; `initAll` chamado uma vez;
  `organic_landing_view` uma única vez por visita; clique em
  formulário e WhatsApp com página, canal, origem, página de entrada, local e
  texto; 404 com status 404 e `page_not_found` com o domínio de origem.
- 11 páginas × 380 e 1440 px: sem overflow horizontal, sem erro de JS.
- Auditoria estática: 19 páginas, zero link quebrado, zero id duplicado,
  `h1` único, JSON-LD válido em todas.

- Envio real: uma visita direta à home e um clique no CTA do formulário foram
  aceitos pela API do Amplitude (HTTP 200) e confirmados na página Setup do
  projeto. A propriedade temporária `prompt_version` já foi retirada.

**Não verificado:** performance de campo. O PageSpeed Insights sem chave estava
sem cota e o Lighthouse via `npx` não foi autorizado. O Web Vitals do Amplitude
coleta LCP, INP e CLS de visitantes reais a partir do deploy. O pacote unified
pesa 229 KB comprimidos (o SDK só de análise pesaria 52 KB); acompanhar o INP
no mobile.

---

## 4. Páginas criadas ou otimizadas

- **Criada:** `404.html`.
- **Otimizadas** (links, CTA ou title): Desenvolvimento de software,
  Consultoria estratégica, Acesso a capital, Software sob medida, Integração
  de sistemas, `/cases` e os três cases.
- **Nenhuma página de conteúdo nova nesta etapa.** As três de maior potencial
  dependem de decisão ou de informação que só o time tem (seção 9).

---

## 5. Estratégia de links internos

Modelo de hub e spokes, com uma regra por tipo de página:

| Tipo | Linka para | Por quê |
|---|---|---|
| **Serviço** (dinheiro) | Cases que provam o serviço + 1–2 conteúdos que respondem objeções | Quem está decidindo quer prova |
| **Pilar/conteúdo** (informacional) | O serviço que contrata aquilo, com âncora descritiva + conteúdos irmãos + case do tema | Sobe autoridade para a página comercial e evita que o conteúdo dispute a mesma consulta |
| **Case** | O serviço e o pilar do problema resolvido | O leitor convencido precisa de um próximo passo que não seja só "outro case" |
| **Ferramenta** (proposta) | O pilar do tema e o serviço | A ferramenta atrai; o pilar explica; o serviço converte |

**Anticanibalização definida:**

- "desenvolvimento de software sob medida" (contratação) → `/desenvolvimento-de-software`.
  "software sob medida: quando vale / quanto custa" (pesquisa) → `/software-sob-medida`.
- "integração de sistemas / ERP" (genérico) → `/integracao-de-sistemas`.
  "integração ERP chão de fábrica" (indústria) → `/integracao-erp-chao-de-fabrica`.
- "calcular OEE / calculadora OEE / planilha OEE" → ferramenta proposta.
  "OEE o que é / gestão em tempo real" → `/gestao-industrial-em-tempo-real`
  (a seção de cálculo dela passa a linkar a ferramenta).

---

## 6. Dados estruturados

**Já existia e foi mantido:** `ProfessionalService` (entidade única, endereço,
`areaServed` Centro-Oeste de MG / MG / Brasil, `sameAs` LinkedIn e Instagram,
`knowsAbout`), `WebSite`, `WebPage` com `dateModified`, `BreadcrumbList`,
`Service` com `OfferCatalog`, `FAQPage` (respostas visíveis), `Article` nos cases.

**Mudou:** só a grafia do endereço, padronizada. A 404 não tem JSON-LD (é `noindex`).

**Recomendações, sem urgência:**

- `HowTo` nas páginas de serviço: o Google não exibe mais esse rich result
  desde 2023, e o tipo foi pensado para instruções ao leitor, não para o
  processo do fornecedor. Não prejudica; remover na próxima edição dessas páginas.
- `legalName` e `taxID` no `ProfessionalService` quando o CNPJ for publicado.
- `Person` para os sócios (nome, cargo, LinkedIn) numa página `/sobre`, e
  `reviewedBy` nas páginas de Lei do Bem quando houver revisor com credencial
  (seção 9.3).
- Ferramentas: `WebApplication` (gratuita, `offers.price: 0`) + `FAQPage`.

---

## 7. Eventos de conversão e mensuração

### 7.1 Eventos

| Evento | Status | Quando dispara |
|---|---|---|
| `organic_landing_view` | **Ativo** | 1ª página da visita vinda de buscador ou assistente de IA |
| `service_cta_click` | **Ativo** | Clique em formulário, WhatsApp, e-mail, telefone |
| `meeting_booking_click` | **Pronto, sem link** | Clique em link de agendamento real. Hoje não há nenhum |
| `contact_form_submit` | **Não mensurável hoje** | O envio acontece no Microsoft Forms; o site não vê |
| `qualified_lead` | **Fora do site** | Decisão do comercial |
| `page_not_found` | **Ativo** (extra) | Visita à 404 |

Propriedades em todos: `pagina`, `pagina_tipo`, `canal`
(`busca_organica`, `assistente_ia`, `pago`, `campanha`, `social`,
`referencia`, `direto`), `origem`, `pagina_entrada`, `utm_*`.

**Clique não é reunião e formulário enviado não é lead qualificado.** Os
nomes dos eventos seguem essa separação.

### 7.2 Como fechar `contact_form_submit` e `qualified_lead`

1. **Formulário nativo** (recomendado junto com as ferramentas): um endpoint
   `/api/lead` na própria Vercel recebe o envio, grava no destino do comercial
   e devolve um `lead_id`. O site dispara `contact_form_submit` com esse id e
   com a origem da visita.
2. **`qualified_lead`**: quando o comercial qualifica, o CRM (ou o Pulse) manda
   o evento para a HTTP API do Amplitude com o mesmo `lead_id`. Depois vêm
   `meeting_held` e `opportunity_created`, pelo mesmo caminho.
3. **Paliativo enquanto o Microsoft Forms continuar:** acrescentar a pergunta
   "Como conheceu a Origami?" (Google / ChatGPT ou outra IA / LinkedIn /
   indicação / evento), já sugerida no plano de 29/09.

**Definição proposta de lead qualificado** (o comercial confirma): empresa com
operação própria (indústria, engenharia, logística, serviços), faixa de
faturamento ou de funcionários dentro do perfil ideal de cliente, dor descrita
compatível com algum serviço, e contato com papel de decisão ou influência
direta (diretoria, operações, TI, controladoria).

### 7.3 Painel de acompanhamento

| Bloco | Métrica | Fonte |
|---|---|---|
| Visibilidade | Impressões e cliques orgânicos, **separando marca de não marca** | Search Console |
| Visibilidade | Consultas de intenção comercial (filtro abaixo) | Search Console |
| Tráfego | Sessões com `canal` = busca_organica / assistente_ia, por `pagina_entrada` | Amplitude |
| Intenção | `service_cta_click` ÷ sessões orgânicas, por página e por `cta_tipo` | Amplitude |
| Conversão | `contact_form_submit` (após formulário nativo), por página de entrada | Amplitude |
| Negócio | `qualified_lead`, reuniões realizadas, oportunidades e valor com origem orgânica | CRM / Pulse |

Filtro de intenção comercial no Search Console (regex de consulta):
`empresa|consultoria|desenvolvimento de software|sob medida|sistema para|software para|integra(ç|c)(ã|a)o|pcp|apontamento|oee|lei do bem|finep|moderniza|legado|automa(ç|c)(ã|a)o`

Linha de base para comparar em 90 dias: tabela da seção 1.2, mais cliques
não-marca = ~0 e eventos de conversão = 0 (antes não eram medidos).

---

## 8. Pendências que dependem de acesso externo ou de decisão humana

| # | Pendência | Quem | Bloqueia |
|---|---|---|---|
| 1 | Instalação do Amplitude **confirmada** na página Setup (17/11). Falta decidir a **taxa do Session Replay**, hoje ligada pela configuração remota do projeto | Quem administra o Amplitude | — |
| 2 | **Agendamento:** criar um Microsoft Bookings "Conversa de 30 minutos" (recomendado: os botões já prometem isso) **ou** trocar o texto de ~100 botões para "Fale com um especialista" | Sócios + comercial | `meeting_booking_click` e honestidade do CTA |
| 3 | **Leads por e-mail** (decidido: vão para o Guilherme; banco de dados só se o volume justificar). `POST /api/lead` pronto, usando a conta do Resend do Pulse (domínio `origamipulse.com.br` já verificado, sem DNS novo). `LEADS_PARA` já está na Vercel; **falta `RESEND_API_KEY`** | Quem administra o Resend do Pulse | Seção 9 |
| 4 | **Política de privacidade e aviso de cookies (LGPD)** e CNPJ/razão social no rodapé. Com o Amplitude completo (cookie, IP, replay), passa a ser urgente | Sócios / jurídico | Deploy da medição e captura própria de lead |
| 5 | **Validação fiscal** dos parâmetros da Lei do Bem (seção 9.3) por contador ou pela PIN | PIN / contador | Simulador e hub de Lei do Bem |
| 6 | **Trocar o DNS do blog** e conferir os redirects (passo a passo no plano de 29/09). Avaliar redirect específico para `/tendencias-inovacao-2026/` (194 impressões em 28 dias) | Quem administra o DNS | — |
| 7 | **Google Business Profile** (instruções no plano de 29/09) | Sócios | SEO local em Formiga |
| 8 | **Projeto real de IA** que possa ser citado (mesmo sem nome do cliente) | Sócios | Página do cluster B |
| 9 | **Card da Prumo** na home ("apontamento de campo 100% digitalizado"): confirmar ou corrigir | Sócios | — |
| 10 | Confirmar como é feito o deploy (README citava um `deploy.yml` que não existe) | Quem mantém o site | — |
| 11 | Mensagem do WhatsApp por página (ex.: "…vim pela página de Integração de sistemas"). Dá atribuição ao canal que mais converte, mas muda o texto que o visitante envia | Comercial | — |

---

## 9. Proposta — Fase 4: ferramentas gratuitas e conteúdo de autoridade

### 9.1 Por que ferramentas

Hoje o site tem uma porta só: agendar conversa. É um passo grande para quem
chegou pesquisando "como calcular OEE". Uma ferramenta gratuita:

- **entrega algo na hora**: o resultado aparece na tela, sem cadastro;
- **captura com motivo**: o contato é pedido para enviar o relatório completo,
  a planilha ou a análise de um especialista;
- **qualifica**: as entradas da ferramenta (faturamento, funcionários, regime
  tributário, tamanho da operação) são o que o comercial hoje não consegue
  estimar, e a pessoa tem motivo para informar o número certo;
- **ranqueia**: consultas de ferramenta têm demanda medida (abaixo) e
  concorrência menor que a de "empresa de software".

### 9.2 Suíte proposta, por demanda medida (autocomplete Google, 17/11)

| Ferramenta | Sinal de demanda | Pilar | Dado capturado |
|---|---|---|---|
| **Calculadora de OEE** + planilha de OEE | "calcular oee" (10 variações), "calculadora oee online", "planilha oee excel grátis", "planilha indicador oee com dashboard" | Gestão em tempo real | Setor, nº de máquinas/linhas, funcionários |
| **Simulador da Lei do Bem** | Tema forte (cluster A/B do relatório de 16/09); "calculadora lei do bem", "como calcular a lei do bem" | Acesso a capital | **Regime tributário, faixa de faturamento, funcionários, gasto com P&D** |
| **Planilha de PCP** (download) | "planilha pcp excel grátis", "planilha pcp industrial", "planilha pcp com ordem de produção", "planilha de programação pcp" | Planejamento da produção | Setor, nº de ordens/mês, ERP usado |
| **Custo hora-máquina** / capacidade produtiva | "como calcular custo hora máquina industrial / cnc", "como calcular capacidade produtiva de uma empresa / instalada" | PCP / regional (usinagem, retífica) | Setor, nº de máquinas |
| **Diagnóstico de modernização** (legado, integração, IA, dados) | Pouca busca; é o CTA secundário "Avalie uma oportunidade de modernização" para quem já está no site | Serviços | Faturamento, funcionários, sistemas usados, dor principal |

Ordem sugerida: **OEE → Lei do Bem → PCP → custo hora-máquina → diagnóstico.**
A OEE vai primeiro porque não depende de validação fiscal e testa o modelo de
captura com risco baixo. A Lei do Bem tem o lead mais valioso: lucro real é
filtro de porte. Pela legislação vigente (a confirmar), o lucro real é
obrigatório acima de R$ 78 milhões de receita bruta anual.

**Como é construída (sem dependência nova):** cada ferramenta é uma página
estática com o cálculo em JavaScript puro e o texto explicativo no HTML
(método, fórmula, exemplo, FAQ). É esse texto que ranqueia e que a IA cita.
A captura usa um componente único que posta em `/api/lead` (Vercel Function).
Eventos: `tool_start`, `tool_complete` (com a faixa do resultado),
`contact_form_submit`, `download`.

**Regra de captura:** o resultado nunca fica atrás do formulário. O formulário
pede o mínimo (nome, e-mail corporativo, empresa, cargo; CNPJ opcional) e
reaproveita o que a pessoa já digitou na ferramenta. Com o CNPJ, dados
públicos da Receita (porte, CNAE, município, data de abertura) completam o
cadastro sem perguntar mais nada.

### 9.3 Lei do Bem: plano para ser a melhor referência em português

A meta é ter o conteúdo mais correto, completo e útil sobre o tema. **Posição
no Google não se garante.** As fontes oficiais (MCTI, Receita) e consultorias
especializadas com anos de conteúdo estão nessa disputa. O que dá para
controlar é a qualidade:

1. **Reaproveitar o rascunho pronto:** a branch `seo-geo/pesquisa-intencao`
   tem `/lei-do-bem` (quem tem direito, o que conta como P&D),
   `/lei-do-bem-na-pratica` (FormP&D, dossiê, glosa) e
   `/financiamento-de-inovacao` (FINEP, subvenção, FAPEMIG, e a saída para quem
   está no lucro presumido). Nunca foram publicadas porque 17 afirmações
   fiscais esperavam um contador (lista no `RELATORIO-SEO-GEO.md`, seção 5).
2. **Revisão com credencial visível:** cada página com "revisado por" (nome,
   registro profissional, data) da PIN ou de um contador parceiro, e
   `reviewedBy` no JSON-LD. Em tema fiscal, isso pesa no ranqueamento e na
   confiança de quem lê.
3. **Citar a fonte primária** em toda afirmação: Lei 11.196/2005 no
   planalto.gov.br, páginas do MCTI, instruções normativas da Receita.
4. **"Atualizado em"** visível e revisão a cada exercício (prazo do FormP&D,
   mudanças de regra).
5. **O simulador como página central do hub.** Parâmetros a validar antes de
   publicar: exclusão de 60% dos dispêndios de P&D na base do IRPJ e da CSLL,
   com acréscimos por aumento de pesquisadores e por patente (art. 19 da Lei
   11.196/2005), e alíquota combinada de IRPJ + CSLL. O resultado é exibido
   como faixa estimada, com a memória de cálculo e o aviso de que não substitui
   parecer.
6. **Artigos de cauda** que linkam o pilar e o simulador: Lei do Bem para
   indústria (o que conta como P&D no chão de fábrica), Lei do Bem e
   desenvolvimento de software, por que projetos são glosados, Lei do Bem ×
   FINEP × subvenção, exemplos de projetos enquadrados (anonimizados, da
   experiência real com a PIN).

### 9.4 Clusters A e B

- **A — Modernização de sistemas legados:** demanda rasa, mas comercial
  ("modernização de sistemas legados", "migração de sistemas legados",
  "sistema erp delphi"). Página de serviço com sintomas (sistema que só uma
  pessoa entende, sem API, sem fornecedor, banco Access/Delphi), caminhos
  (encapsular, integrar, reescrever por partes) e o diagnóstico como CTA. Prova
  disponível: o case da Bry ("aposentou o próprio produto legado"), que ainda
  espera aprovação do cliente.
- **B — IA aplicada:** a demanda mais forte entre os clusters novos
  ("consultoria de ia para empresas", "agentes de ia para empresas",
  "empresa de desenvolvimento de software com ia"), e o Search Console já
  mostra impressões para "ia na manufatura" e "ia na mineração". **Nenhum
  case publicado usa IA.** Sem um projeto real, a página vira um guia de
  método ("como identificar oportunidades de IA na operação") e não uma
  oferta de serviço.

### 9.5 Regional

- **Formiga:** zero demanda por "empresa de software formiga". O caminho é o
  Google Business Profile (pacote local) e menções regionais (FIEMG, ACE, imprensa).
- **Belo Horizonte:** há intenção comercial ("empresa de desenvolvimento de
  software em bh"), mas não há escritório nem case declarado em BH. Página de
  cidade só com evidência real de atuação.
- **Brasil:** serviços remotos (software, integração, Lei do Bem) já são
  nacionais. A página regional fica restrita a Minas.

---

## 10. Plano editorial de 90 dias

Ritmo realista: **uma entrega substancial por semana**, com revisão técnica.
Melhor que duas rasas.

| Semana | Entrega | Cluster | Depende de |
|---|---|---|---|
| 1 | Política de privacidade e aviso de cookies, Bookings, DNS do blog, Google Business Profile | Base | Pendências 2, 4, 6, 7 |
| 2 | Componente de captura + `/api/lead` + política de privacidade | Base | Pendências 3, 4 |
| 3 | **Calculadora de OEE** + planilha de OEE | Indústria | — |
| 4 | Pilar `/lei-do-bem` revisado e publicado | Lei do Bem | Pendência 5 |
| 5 | **Simulador da Lei do Bem** | Lei do Bem | Pendência 5 |
| 6 | `/lei-do-bem-na-pratica` (FormP&D, prazo, glosa) | Lei do Bem | Pendência 5 |
| 7 | **Planilha de PCP** + seção "quando a planilha deixa de bastar" no pilar de PCP | Indústria | — |
| 8 | Case Tecno 2000 (indústria, hoje sem case) | Prova | Dados e autorização do cliente |
| 9 | Página de modernização de sistemas legados | A | Exemplos reais |
| 10 | `/financiamento-de-inovacao` (FINEP × subvenção × Lei do Bem) | Lei do Bem | Pendência 5 |
| 11 | Calculadora de custo hora-máquina | Indústria | — |
| 12 | IA aplicada: página de serviço (com projeto real) ou guia de método | B | Pendência 8 |
| 13 | Revisão com dados: títulos com CTR baixo, consultas novas, o que converteu | Todos | 60 dias de dados |

A cada mês: perguntar a ChatGPT, Perplexity, Gemini e Claude "quais empresas
desenvolvem software para indústria em Minas Gerais?" e "como calcular a Lei
do Bem?", e registrar se a Origami aparece e qual página é citada. É
observação, não meta: nada garante citação.

---

## 11. Hipóteses de crescimento e como validá-las

As metas são pontos de partida para calibrar com os primeiros 60 dias de
dados, não previsões.

| # | Hipótese | Métrica | Sinal de que funciona |
|---|---|---|---|
| H1 | Ferramentas transformam visita informacional em contato | `contact_form_submit` ÷ `tool_complete` | Ferramentas geram mais contato que todas as páginas de conteúdo somadas |
| H2 | O tema Lei do Bem atrai empresas de porte maior | % dos leads do simulador no lucro real; faixa de faturamento declarada | Maioria dos leads do simulador no lucro real |
| H3 | Os dados das ferramentas destravam a qualificação | % de leads com faturamento e funcionários preenchidos; tempo do comercial para qualificar | Comercial deixa de estimar porte por fora |
| H4 | Links serviço ↔ case aumentam a intenção nas páginas de serviço | `service_cta_click` ÷ sessões nas 3 páginas de serviço, antes × depois | Taxa sobe após 30 dias |
| H5 | Agendamento real converte mais que formulário | `meeting_booking_click` → reunião realizada × formulário → reunião | Menos etapas até a reunião |
| H6 | O orgânico deixa de ser só marca | Cliques não-marca no Search Console | Cliques não-marca saem de ~0 |
| H7 | Conteúdo citável traz visita de assistentes de IA | Sessões com `canal=assistente_ia` | Canal deixa de ser zero |
| H8 | A 404 recupera visitantes de links antigos do blog | `page_not_found` → clique em algum destino da página | Parte relevante segue navegando |

---

## 12. Estrutura do site: migração para Next.js (feita)

**Decisão (17/11):** Next.js 16 com App Router, a mesma stack do Projete
(React 19, TypeScript, ESLint, `tsx --test`), em vez de Astro. Pesou a
experiência do time e o caminho de deploy já testado no Projete, que também tem
as calculadoras gratuitas no padrão que a seção 9 propõe.

**O formato não limitava a conversão; limitava a manutenção.** Nav, rodapé e
CTAs estavam copiados em 19 arquivos e já divergiam. A página de planejamento
da produção estava publicada **com o rodapé cortado no meio**. Agora nav e
rodapé são componentes, e páginas novas e ferramentas seguem o padrão do Projete.

**Como foi feita, sem risco para o SEO:**

- Conversão automática do HTML para JSX, com as mesmas URLs; todas as 20 rotas
  são geradas estáticas no build.
- Comparação com o original antes da troca, página por página: title, meta,
  canonical, Open Graph, JSON-LD e conteúdo (nó a nó, atributo a atributo)
  idênticos. As únicas diferenças no `<head>` são acréscimos do Next
  (`twitter:title` e `twitter:description`, copiados do Open Graph) e o
  canonical da home sem a barra final, que é a mesma URL.
- No Chrome, em 380 e 1440 px: nenhum erro de hidratação ou de JavaScript,
  altura idêntica em todas as páginas, menu, FAQ e marquee funcionando,
  diferença de pixels de 0% a 2,2%, concentrada no rodapé, que mudou de propósito.
- URLs antigas com `.html` e com barra final redirecionam com 308.
- O custo é o runtime do React em toda página. Tudo é Server Component; só a
  medição roda no cliente.

**Antes de publicar:** validar num deploy de preview da Vercel (o `vercel.json`
já declara o framework) e, depois do primeiro deploy em produção, trocar o
preset do projeto para Next.js no painel.
