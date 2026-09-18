# Relatório SEO e GEO — Origami Lab

Branch `seo-geo/pesquisa-intencao`. Nada commitado: revise e commite você.
Data do trabalho: 16/09/2026.

---

## 1. O que o site realmente vende

Li `index.html` inteiro, `README.md`, `llms.txt`, `sitemap.xml`, `robots.txt`,
`vercel.json` e o CSS. **A descrição que me foi passada no briefing não bate com
o site** — registro isso primeiro porque muda tudo o que veio depois.

| Briefing | O que o site diz |
|---|---|
| Lei do Bem | Confere. Serviço 03, "Acesso a capital". |
| FINEP / FAPEMIG / **FAPESP** | FINEP e FAPEMIG conferem. **FAPESP não aparece em lugar nenhum** do site. |
| **Sprint 0** (descoberta de produto) | **Não existe no site.** A fase 01 se chama "Diagnóstico". |
| Desenvolvimento de produtos digitais | Parcialmente. O site vende "Desenvolvimento e implantação" para operação de empresa, não "produto digital" no sentido de startup. |

**Posicionamento real, nas palavras do próprio site:** "Modernizamos a operação
das grandes empresas tradicionais." Não é estúdio de produto digital. É
consultoria de modernização de operação para indústria, engenharia e serviços.

- **Três serviços:** (01) Desenvolvimento e implantação — operação conectada
  ponta a ponta, integrada ao ERP existente; (02) Consultoria — diagnóstico,
  mapeamento de processo, priorização, indicadores; (03) Acesso a capital —
  Lei do Bem, FINEP, FAPEMIG, em parceria com a PIN, cobrança vinculada à
  liberação do capital.
- **Público:** empresas tradicionais de indústria, engenharia e serviços,
  fundadas entre 1960 e 1980, em Minas Gerais. Clientes: Tecno 2000, Prumo,
  Retífica Formiguense, Transportadora Cabral, Bry, Sebrae, Syngular, Avante,
  Sindinova, Integrar.
- **Proposta de valor:** entrar na operação, não em slides; não substituir o
  ERP; entregas curtas que precisam provar resultado antes da próxima;
  autonomia da equipe no fim.
- **Tom de voz:** direto, sóbrio, frase curta, sem jargão de startup, sem
  superlativo. Usa travessão, admite limite ("Se não fizer sentido, a gente
  diz"), fala em margem e custo, não em "transformação digital".
- **Estrutura atual:** LP única (`/`), 9 seções + rodapé, zero páginas
  internas. Blog e cases ficam fora do repo, em `blog.origamilab.com.br`.
  `sitemap.xml` tinha 1 URL. `vercel.json` já tem `cleanUrls: true`.

---

## 2. Pesquisa de demanda

Fonte: autocomplete do Google (`suggestqueries.google.com`, `hl=pt-BR`,
`gl=br`), 300 ms entre requisições. **128 consultas rodadas**, 96 com retorno e
32 vazias — a lista de vazias está no fim desta seção e é um achado, não uma
falha.

Não usei Google Trends (429 no endpoint público, conforme já validado). **Não
há número de volume de busca em lugar nenhum deste relatório**: força de termo é
qualitativa, inferida da posição e da profundidade do autocomplete.

### 2.1 A armadilha das siglas, confirmada

`lei do bem` sozinho devolve, **nesta ordem**: `lei do bem de família` (1),
`lei do bem como funciona` (2), `lei do bem mcti` (3), `lei do bem incentivo
fiscal` (4), `lei do bem lucro real` (5), `lei do bem 2026` (6), `lei do bem
estar animal` (7). Ou seja: a posição 1 e a 7 são outro assunto inteiro
(bem de família, bem-estar animal). Toda leitura do termo solto foi feita
descontando isso.

### 2.2 Achados por cluster

**A — Lei do Bem: enquadramento (o cluster mais forte de todos).**
Sinais: `lei do bem como funciona` (pos. 2 na raiz), `lei do bem lucro real`
(5), `lei do bem para empresas` (8), `lei do bem 11196` (10);
`lei do bem quem tem direito`, `quem pode usar`, `requisitos`, `regras`,
`enquadramento`, `criterios`, `o que entra`, `para que serve`;
**`lei do bem lucro presumido` e `lei do bem para lucro presumido` aparecem em
duas sementes diferentes** — é a pergunta desqualificadora número um.
Também: `lei do bem industria`, `empresas que utilizam lei do bem`,
`empresas habilitadas lei do bem`, `exemplos de projetos lei do bem`.

**B — Lei do Bem: execução, prazo e risco (segundo cluster, distinto do A).**
Sinais: `lei do bem prazo 2026`, `prazo entrega lei do bem 2026`,
`formulário lei do bem 2026`, `formp&d lei do bem`, `relatório mcti lei do bem`,
`lei do bem na ecf` (pos. 15 na raiz), `como lançar a lei do bem na ecf`,
`lei do bem lalur`, `como contabilizar a lei do bem`, `como calcular a lei do
bem`, `glosa lei do bem`, `lei do bem riscos`, `dirbi lei do bem prazo`.

**Prova de que existe mercado comercial neste tema:** o autocomplete devolve
nomes de concorrentes como sugestão — `gt consultoria lei do bem`,
`growth consultoria lei do bem`, `empresas de consultoria lei do bem`,
`lei do bem gestiona`, `lei do bem galapos`, `lei do bem abgi`.

**C — FINEP e subvenção (forte, mas com armadilha de validade).**
Sinais evergreen: `finep o que é` (pos. 3 na raiz), `o que é finep e para que
serve`, `financiamento finep como funciona`, `finep financiamento não
reembolsavel` e `reembolsável` (pos. 5 a 7), `subvenção econômica à inovação`,
`financiamento não reembolsável o que é / significado`, `linhas de crédito para
inovação`, `lei do bem e finep` / `lei do bem finep`.
Sinais perecíveis, que deliberadamente **não** viraram página: `finep editais
abertos 2026`, `finep mais inovação brasil – rodada 2` e as oito variações
temáticas dela (tecnologias digitais, transição energética, economia circular,
cadeias agroindustriais, saúde, transformação mineral…).

**D — FAPEMIG: demanda existe, mas é do público errado.**
`fapemig` devolve `bolsas` (1), `universal 2026` (2), `demanda universal`,
`bolsa mestrado`, `resultados`, `chamada universal`. É demanda **acadêmica**.
As duas consultas de recorte empresarial — `fapemig edital empresa` e
`fapemig financiamento empresa` — **voltaram vazias**. Só
`fapemig compete minas 2026` sugere público empresarial.

**E — Integração / ERP / planilha (média, e é o miolo do negócio).**
Sinais: `integração de sistemas erp`, `integração de sistemas legados`,
`integração de sistemas via api`, `integração de sistemas na indústria 4.0`,
`sistema legado o que é / significado / exemplo`, `substituir planilha excel`,
`como integrar dois sistemas`. E o mais revelador:
`apontamento de produção` devolve `protheus`, `excel`, `automatizado`,
`manual`, `sankhya`, `totvs`, `sap`, `datasul`, `planilha apontamento de
produção` — a dor exata que a Origami descreve na LP, com o nome dos ERPs.

**F — Software sob medida e custo (média).**
`software sob medida` → `desenvolvimento de software sob medida` (1);
`desenvolvimento de sistemas sob medida`, `sob encomenda`, `sob demanda`;
`quanto custa desenvolver um sistema web / erp / software`;
`preço desenvolvimento de software`; `sistema personalizado para empresa`.

**G — Consultoria de processos (mais fraca do que parecia).**
Positivos: `consultoria mapeamento de processos`, `empresas que fazem
mapeamento de processos`, `empresa especializada em mapeamento de processos`,
`consultoria de processos industriais / operacionais`, `consultoria melhoria de
processos`, `modernizar empresa familiar`, `diagnostico operacional de uma
empresa`. Mas `consultoria de gestão para indústria`, `eficiência operacional
indústria` e `como reduzir custos na indústria` voltaram **vazias**.

### 2.3 Termos que testei e descartei — e o porquê

- **`fábrica de software`** → o autocomplete devolve `unipê`, `senac`,
  `ifc araquari`, `ufg`, `uft`, `curitiba`, `recife`, `fortaleza`, `vagas`.
  É demanda de curso, universidade e emprego. Público errado.
- **`sprint 0`** → `sprint 0 in agile`, `in scrum`, `activities`, `meaning`,
  `game`, e `sprint 01/02/04/05/06/09`. Inglês, metodologia e ruído. **Zero
  demanda compradora em pt-BR.** Somado ao fato de o termo não existir no site,
  não virou nada.
- **`mvp o que é`** → futebol, vôlei, basquete, NBA, gíria, batalha de rima.
  Ruído puro.
- **`discovery de produto`** → demanda real, mas de metodologia
  (`técnicas de`, `frameworks de`, `etapas de`, `como fazer`). É quem *estuda*
  discovery, não quem *contrata*.
- **`software para [segmento]`** (`transportadora`, `retífica`, `obras`) →
  a cauda é `gratuito`, `grátis`, `melhor software para`. É busca por produto
  de prateleira, não por consultoria que constrói. Criar páginas por segmento
  aqui seria exatamente a página fina em escala que o Google pune.
- **Local (`empresa de software em minas gerais`, `desenvolvimento de sistemas
  belo horizonte`)** → devolve `análise e desenvolvimento de sistemas`,
  `estágio`, `UFMG`. Demanda de curso técnico, não de contratante.
- **`consultoria de tecnologia minas gerais`** e **`consultoria em inovação
  belo horizonte`** → vazias.

### 2.4 As 32 consultas sem retorno

Zero sugestão não prova zero demanda, mas prova que a frase não é como as
pessoas digitam. Foram: `fapemig edital empresa`, `fapemig financiamento
empresa`, `recursos para inovação empresa`, `incentivo à inovação empresa`,
`sistema sob medida para empresa`, `integração erp e planilhas`, `api de
integração erp`, `como sair das planilhas`, `planilha excel empresa problema`,
`lei do bem dispêndios`, `lei do bem desenvolvimento de software`, `lei do bem
auditoria`, `lei do bem risco`, `consultoria de tecnologia minas gerais`,
`consultoria em inovação belo horizonte`, `quanto custa um software sob
medida`, `erp não atende minha empresa`, `sistema próprio ou erp`, `controle de
produção chão de fábrica`, `pcp planejamento e controle da produção sistema`,
`eficiência operacional indústria`, `como reduzir custos na indústria`,
`consultoria de gestão para indústria`, `como financiar inovação na empresa`,
`software proprio ou comprar pronto`, `modernização de sistema legado`, `como
escolher empresa de desenvolvimento de software`, `lei do bem atividades que se
enquadram`, `lei do bem o que é considerado inovação tecnológica`, `pesquisa e
desenvolvimento o que é considerado`, `inovação tecnológica conceito empresa`,
`lei do bem habilitação`.

**Leitura:** as frases longas e "bem escritas" quase sempre voltam vazias. As
pessoas digitam `lei do bem lucro presumido`, não `lei do bem atividades que se
enquadram`. Isso orientou os títulos e as perguntas da FAQ.

---

## 3. O que a LP já cobria

**(a) Já coberto e bem coberto** — nenhuma página nova precisou disso:
quem é a Origami, prova social (10 clientes com setor), pedigree dos sócios,
método de quatro fases, presença física, propriedade de código e dados,
modelo de cobrança por escopo, necessidade ou não de equipe de TI.

**(b) Coberto raso** — uma frase ou um bullet, sem responder a busca:
- "Enquadramento na Lei do Bem" — 1 bullet + 1 FAQ de 3 linhas. A busca
  pergunta *se pode*, *quanto*, *qual prazo*, *o que é glosa*. Nada disso está lá.
- "Projetos FINEP e FAPEMIG" — 1 bullet. Nenhuma menção a reembolsável,
  subvenção ou chamada pública.
- "Integração com o ERP e os sistemas atuais" — 1 bullet + 1 FAQ. É o miolo
  técnico do negócio e tem menos texto que a seção de fotos.
- Custo de desenvolvimento — a FAQ diz "dimensionado pelo escopo", que é
  verdadeiro e não responde a quem busca `quanto custa desenvolver um sistema`.

**(c) Lacuna real** — zero conteúdo no site:
requisitos de enquadramento da Lei do Bem; o que caracteriza P&D; FormP&D,
dossiê e glosa; diferença entre reembolsável e não reembolsável; o que é
subvenção econômica; caminhos técnicos de integração (API/banco/arquivo/RPA);
o que fazer com sistema legado; critério pronto × sob medida; o que define o
custo de um projeto.

---

## 4. Páginas criadas — 5, e a justificativa de cada uma

O princípio aplicado foi: **página só quando a intenção é genuinamente
distinta**. Duas buscas que se respondem com o mesmo parágrafo são uma página.
O site saiu de 1 para 6 URLs — não de 1 para 30.

### `/lei-do-bem` — "quem tem direito e o que realmente conta como P&D"
Atende o cluster A. O leitor está **antes da decisão**: quer saber se pode.
A página abre com os três requisitos cumulativos (lucro real, lucro fiscal,
regularidade fiscal), diz na cara quem fica de fora, e gasta metade do texto no
que de fato trava a indústria tradicional: reconhecer que o que ela faz no chão
de fábrica é P&D. 9 perguntas em FAQPage, incluindo lucro presumido, Simples,
prejuízo fiscal e "só empresa de tecnologia?".

### `/lei-do-bem-na-pratica` — "FormP&D, dossiê e por que projetos são glosados"
Atende o cluster B. **Estado de leitura diferente:** já sabe que se enquadra e
quer saber como se faz e o que se arrisca. O primeiro parágrafo entrega a
informação mais contraintuitiva e mais citável do tema: a análise do MCTI é
*posterior* ao uso do benefício, então o risco não é ter um pedido negado — é
ter de devolver. Nenhum parágrafo desta página se sobrepõe ao da anterior.
8 perguntas.

*Por que duas páginas de Lei do Bem e não uma:* `lei do bem quem tem direito` e
`glosa lei do bem` não se respondem com o mesmo texto, e o sub-cluster de
prazo/FormP&D/ECF/glosa apareceu sozinho em 13 sugestões distintas. Se você
achar que é overkill, fundir é fácil — mas perde o primeiro parágrafo de cada
uma, que é o ativo de GEO.

### `/financiamento-de-inovacao` — FINEP, subvenção e FAPEMIG
Atende o cluster C e absorve o D. A pergunta real do mercado é a **distinção**
entre os instrumentos, não a descrição de cada um: `financiamento não
reembolsável o que é`, `lei do bem e finep`, `subvenção econômica à inovação`.
A página abre com os três caminhos separados em uma frase cada e traz uma
tabela comparativa de seis linhas.
**Serve também de porta de saída para quem foi desqualificado da Lei do Bem** —
empresa no lucro presumido, que é o maior grupo eliminado, pode acessar FINEP e
subvenção normalmente, e a página diz isso explicitamente.
**FAPEMIG entrou como seção, não como página**, porque a demanda medida é
acadêmica. 8 perguntas.

### `/integracao-de-sistemas` — quando o ERP não cobre a operação
Atende o cluster E, que é o miolo do que a Origami faz e tinha 1 bullet na LP.
Abre com a cena concreta (apontamento no Excel, redigitação no fim do turno) e
entrega uma tabela dos quatro caminhos técnicos com o custo real de cada um,
incluindo dizer que RPA é ponte e não arquitetura. Cita Protheus, TOTVS,
Sankhya, SAP e Senior **como exemplos de mercado**, sem alegar parceria ou
certificação com nenhum deles. 8 perguntas.

### `/software-sob-medida` — quando vale, quando não vale e o que define o custo
Atende o cluster F. O primeiro parágrafo dá o critério de decisão inteiro e
**recomenda produto pronto** quando é o caso — o que é o tom da casa e o que faz
uma IA citar. Cinco fatores de custo, nenhum deles "número de telas".
Contém a afirmação mais protetiva de todo o conjunto: desenvolvimento de
software **nem sempre** se enquadra na Lei do Bem, e por quê. 8 perguntas.

### Padrão GEO aplicado nas cinco

- Primeiro parágrafo responde a consulta inteira **sozinho**, sem depender do
  resto da página. É o que vira snippet e é o que a IA copia.
- `FAQPage` em JSON-LD em todas, com as respostas em texto limpo (validei que
  não há tag HTML vazando para dentro do JSON).
- `BreadcrumbList` + `WebPage` + `WebSite` + `ProfessionalService` completo em
  **cada** página — não por referência `@id` à home. Um crawler de IA que abre
  só `/lei-do-bem` precisa saber de quem é o texto.
- `Service` em 4 das 5 (a de "Lei do Bem na prática" é conteúdo, não oferta).
- Especificidade onde é verificável: nome da lei, nome do formulário (FormP&D),
  nome do órgão (MCTI), nome dos regimes tributários, nome dos caminhos
  técnicos. **Nenhuma data e nenhum percentual inventado** — ver seção 5.
- Texto **não** depende de JavaScript para aparecer: não usei o `reveal` por
  opacidade da home nessas páginas, de propósito.

---

## 5. ⚠️ Dados fiscais e legais que PRECISAM de conferência humana

Esta é a seção mais importante do relatório. **Nada aqui deve ir ao ar sem um
contador confirmar.** Informação fiscal errada no site de uma consultoria é
dano real ao cliente.

### 5.1 O que eu afirmei e você precisa confirmar

| # | Afirmação | Onde | Confirmar |
|---|---|---|---|
| 1 | A Lei do Bem é a **Lei nº 11.196/2005** | `/lei-do-bem` (lead) e em `llms.txt` | Número da lei e se o capítulo de incentivos à inovação continua vigente sem alteração relevante. |
| 2 | Exige apuração pelo **lucro real** | ambas as páginas de Lei do Bem, FAQ | Alta confiança, mas é o requisito que mais gera processo — confirme. |
| 3 | Exige **lucro fiscal** no período; a exclusão não pode gerar nem ampliar prejuízo fiscal | `/lei-do-bem` | Confirmar a redação exata da limitação. |
| 4 | Exige **regularidade fiscal**, por CND ou CPEND de tributos federais | `/lei-do-bem` | Confirmar qual certidão e qual abrangência. |
| 5 | **"o percentual base previsto na lei é de 60% dos dispêndios"** | `/lei-do-bem`, seção "Como o benefício aparece" e FAQ "Quanto a empresa economiza" | **É o único número percentual em todo o conjunto. Se houver uma coisa só para conferir, é esta.** Se não quiser correr risco, remova o "60%" e deixe "uma parcela dos dispêndios" — o texto continua funcionando sem ele. |
| 6 | Há percentuais **maiores** ligados a aumento de pesquisadores e a concessão de patente | `/lei-do-bem` | Escrevi **sem citar os números** de propósito. Se quiser publicá-los, levante e insira. |
| 7 | A lei prevê **depreciação e amortização aceleradas** e **redução de IPI** para bens/equipamentos de P&D | `/lei-do-bem` | Citei os mecanismos **pelo nome, sem percentual e sem condição**. Confirme que ambos continuam previstos. |
| 8 | É **auto-enquadramento**: não há aprovação prévia, edital nem inscrição | ambas as páginas, várias FAQs | É a tese central da página "na prática". Confirme. |
| 9 | A prestação de informações ao MCTI é pelo **FormP&D**, no ano seguinte | `/lei-do-bem-na-pratica` | Confirme que o nome do formulário e o canal continuam esses. |
| 10 | O MCTI pode **não recomendar** um projeto, e o benefício usado é revertido com acréscimos legais | `/lei-do-bem-na-pratica` | Confirme o efeito exato da não recomendação. |
| 11 | Empresa do **lucro presumido, arbitrado e do Simples Nacional** não usa a Lei do Bem | `/lei-do-bem` e `/financiamento-de-inovacao` | Confirme os três. |
| 12 | Lei do Bem e **Lei da Informática** são regimes distintos | FAQ de `/lei-do-bem` | Escrevi sem citar número de lei e **sem afirmar se podem ou não coexistir** — disse que depende de análise. Se quiser ser mais assertivo, precisa de fonte. |
| 13 | FINEP é **empresa pública federal vinculada ao MCTI** que opera crédito reembolsável e subvenção econômica | `/financiamento-de-inovacao` | Confirme a vinculação e a descrição dos dois mecanismos. |
| 14 | Subvenção econômica **exige contrapartida** da empresa e sai por chamada pública | `/financiamento-de-inovacao` | Confirme que é regra geral, e não específica de alguns editais. |
| 15 | FINEP e subvenção **não são filtradas por regime tributário** | `/financiamento-de-inovacao`, FAQ | **Segundo ponto mais importante da lista.** É a afirmação que manda o lucro presumido para o outro caminho. Confirme. |
| 16 | Há regra específica sobre tratamento de **subvenção dentro da apuração fiscal** e sobre alocar o mesmo dispêndio a dois instrumentos | FAQ "Dá para somar Lei do Bem e FINEP" | Escrevi de forma deliberadamente cautelosa ("é análise caso a caso"). Não afirmei que pode nem que não pode. |
| 17 | FAPEMIG tem linhas para **empresas**, além da pesquisa acadêmica | `/financiamento-de-inovacao` | Confirme que há linha empresarial vigente. |

### 5.2 O que eu deliberadamente NÃO escrevi, para não inventar

- **Nenhuma data de entrega do FormP&D.** Havia forte demanda de busca por
  `prazo entrega lei do bem 2026` e `formulário lei do bem 2026`, e eu poderia
  ter escrito uma data. Não escrevi. As páginas dizem "no prazo estabelecido
  pelo Ministério para aquele exercício". **Se a consultoria confirmar a data
  vigente, inserir isso é o maior ganho de GEO disponível neste conjunto** —
  data é exatamente o tipo de especificidade que faz IA citar. Mas só com fonte.
- **Nenhum prazo de guarda de documentação em anos.** A FAQ diz "pelo prazo em
  que a apuração ainda puder ser revista pela Receita Federal" e manda confirmar.
- **Nada sobre DIRBI**, apesar de `dirbi lei do bem prazo` ter aparecido no
  autocomplete. Não tenho segurança sobre a interação e preferi o silêncio.
- **Nenhuma taxa de juros, valor, teto ou percentual de contrapartida** da FINEP.
- **Nenhuma lista de editais abertos.** Ver seção 6.
- **Nenhum artigo de lei citado por número** (art. tal, inciso tal). Só o número
  da lei.
- **Nenhum número de decreto regulamentador**, embora eu tivesse um candidato.
- **Nenhum caso de cliente com resultado.** O README lista isso como a maior
  pendência do site e eu não tinha dado nenhum. Não inventei.

### 5.3 Aviso em tela

As duas páginas de Lei do Bem e a de financiamento trazem, em destaque visual
(`.ol-note`, tarja âmbar) e também no rodapé do herói, um aviso de que o
conteúdo é orientação geral e não substitui parecer contábil, com instrução de
confirmar na fonte oficial vigente. O `llms.txt` repete isso numa seção própria,
para o caso de um modelo ler só o `llms.txt`.

---

## 6. O que deliberadamente NÃO fiz

1. **Nenhuma página por palavra-chave.** 128 consultas viraram 5 páginas.
   `lei do bem lucro presumido`, `lei do bem como calcular`, `lei do bem
   lalur`, `lei do bem na ecf` são perguntas da FAQ dentro de uma página, não
   cinco URLs.
2. **Nenhuma página de FAPEMIG.** A demanda medida é de bolsa e mestrado.
   Uma página "FAPEMIG para empresas" atrairia estudante e afundaria a métrica
   de engajamento do site inteiro. Virou seção.
3. **Nenhuma página de "editais abertos" ou "FINEP 2026".** É a demanda mais
   quente do cluster C (`finep editais abertos 2026`, `mais inovação brasil
   rodada 2` em 8 variações), e é uma esteira: envelhece em semanas, e página
   desatualizada sobre edital é pior que página nenhuma. As páginas mandam o
   leitor ao portal oficial da FINEP, explicitamente. **Se a Origami quiser
   essa demanda, o lugar é o blog**, que já existe e é feito para conteúdo
   datado.
4. **Nenhuma página de segmento** ("software para transportadora", "para
   retífica", "para indústria de móveis"). Casaria com a carteira de clientes e
   seria exatamente scaled content abuse: cinco páginas quase idênticas
   disputando buscas que querem software de prateleira grátis.
5. **Nenhuma página local** ("desenvolvimento de software em BH"). A demanda
   medida é de curso técnico e estágio.
6. **Nenhuma página de Sprint 0, MVP ou discovery de produto.** Não existe no
   site e não tem demanda compradora em pt-BR.
7. **Nenhuma página de consultoria/mapeamento de processos** — e esta foi a
   decisão mais difícil. Há sinal comercial real (`empresas que fazem
   mapeamento de processos`, `empresa especializada em mapeamento de
   processos`, `consultoria de processos industriais`), mas três consultas
   próximas voltaram vazias e, sobretudo, **a LP já responde isso** na seção
   "Como trabalhamos" + card 02. A página nasceria canibalizando a home.
   **É a minha recomendação de sexta página, se você quiser uma** — mas então
   vale reescrever a seção da home para não competirem.
8. **Não mexi em nada do design, do JS ou do conteúdo da home**, além de
   acrescentar uma coluna de links no rodapé e subir a versão do CSS.
9. **Não criei framework, build, dependência nem gerador.** As cinco páginas
   são HTML estático puro, como o resto do repo.

---

## 7. O que mudou no repositório

**Arquivos novos (6):**
```
lei-do-bem.html                    41 KB
lei-do-bem-na-pratica.html         39 KB
financiamento-de-inovacao.html     39 KB
integracao-de-sistemas.html        38 KB
software-sob-medida.html           37 KB
assets/js/pagina.js               4,5 KB
RELATORIO-SEO-GEO.md              este arquivo
```

**Arquivos alterados (5):**

- **`assets/css/styles.css`** — bloco novo no fim, `Páginas de conteúdo`, com
  os componentes `.ol-page__hero`, `.ol-doc`, `.ol-toc`, `.ol-prose`,
  `.ol-key`, `.ol-note`, `.ol-table`, `.ol-next` e a variante
  `.ol-faq--page`. Usa só os tokens que já existiam em `:root`. **Nenhuma
  regra existente foi modificada** — a home não muda de aparência.
- **`index.html`** — coluna "Entender o assunto" no rodapé, com os 5 links
  (é o que dá descoberta por rastreamento a partir da home), e
  `styles.css?v=6` → `?v=7`.
- **`sitemap.xml`** — de 1 para 6 URLs. `lastmod` 2026-09-16 em todas,
  inclusive a home, que mudou. `changefreq` `yearly` nas novas (é conteúdo
  evergreen; não prometi frequência que não vai ser cumprida). Prioridade 1.0
  na home, 0.9 na Lei do Bem, 0.8 nas demais.
- **`llms.txt`** — seção "Páginas de referência" com as 5 páginas, **cada uma
  com 3 a 4 linhas dizendo o que a página responde**, não só o título: é o que
  permite a um modelo decidir qual buscar. Mais uma seção "Observação sobre
  conteúdo fiscal", que repete o aviso legal.
- **`robots.txt`** — ponteiro comentado para o `llms.txt` junto do bloco de
  crawlers de IA. Nenhuma regra de acesso foi alterada: tudo continua liberado,
  e o `Disallow: /assets/clients/` para `Googlebot-Image` continua valendo
  (as páginas novas não referenciam esses arquivos).

### Por que um `pagina.js` separado em vez de reusar o `main.js`

Não foi preferência. O `collect()` do `main.js` resolve o `href` de cada
`.ol-nav__link` como **seletor CSS**, para marcar a seção ativa:

```js
sections = navLinks.map(a => document.querySelector(a.getAttribute("href")))
```

Numa página interna os links apontam para `/#servicos`, que não é seletor
válido. Isso lança `SyntaxError` e **derruba a inicialização inteira** — menu
mobile e FAQ incluídos. O `pagina.js` tem 120 linhas, cobre barra fixa, menu
mobile, FAQ e barra de progresso, e não carrega parallax, pin nem marquee, que
não existem nessas páginas. O `main.js` **não foi tocado**.

---

## 8. Verificações que rodei

Com Playwright sobre servidor local, nas 6 páginas × 5 larguras
(320 / 380 / 768 / 900 / 1440 px) = **30 combinações**:

- **Sem overflow horizontal** em nenhuma combinação.
- **Sem erro de console e sem `pageerror`** em nenhuma combinação.
- Menu mobile aparecendo exatamente até 860 px e escondido acima disso.
- Primeira pergunta da FAQ abrindo sozinha no carregamento nas 5 páginas novas.

Verificação estática:

- HTML balanceado, `h1` único por página, hierarquia de heading sem salto.
- Zero id duplicado, zero âncora interna quebrada, zero link para página
  inexistente, zero referência a `/assets/` ausente.
- JSON-LD parseando nas 5, com `WebPage` + `BreadcrumbList` + `FAQPage`
  (+ `Service` em 4) e **sem tag HTML vazando para dentro do texto das
  respostas**.
- CSS com chaves balanceadas (340/340) e **nenhuma classe usada no HTML sem
  regra correspondente**.
- URLs do `llms.txt` conferidas uma a uma contra o `sitemap.xml`.
- Renderização conferida a olho em 1440 px (herói, sumário fixo, tabela,
  quadro de fatos, FAQ) e em 380 px.

---

## 9. Riscos para o revisor

1. **Risco fiscal (alto).** É o único risco sério aqui. Os 17 itens da seção
   5.1 precisam de um contador. O item 5 (o "60%") e o item 15 (FINEP não
   filtra por regime tributário) são os dois que eu conferiria primeiro.
2. **`cleanUrls` é premissa.** Os links internos são `/lei-do-bem`, sem
   `.html`. Isso funciona porque `vercel.json` tem `"cleanUrls": true`. Se
   algum dia o site sair da Vercel, todos os links internos quebram.
   Localmente, para testar, use `/lei-do-bem.html`.
3. **Aviso de conteúdo fiscal é decisão de negócio.** A tarja âmbar
   (`.ol-note`) diz que o conteúdo não substitui parecer contábil. É honesto e
   protege, mas vocês podem achar que enfraquece a venda. Está isolado em uma
   classe CSS e num bloco de texto por página — sai fácil, se for essa a
   decisão. Eu recomendo manter.
4. **Volume de texto.** São de 1.600 a 2.000 palavras por página (herói +
   artigo + FAQ), em tom de quem explica, não de quem vende. Se o posicionamento for "a Origami não
   escreve conteúdo longo", é uma discussão a ter antes de publicar, não depois.
5. **Nome de ERPs.** `/integracao-de-sistemas` cita Protheus, TOTVS, Sankhya,
   SAP e Senior. O texto os trata como exemplos de mercado e diz explicitamente
   que o caminho depende do que cada fornecedor libera. **Não há alegação de
   parceria, certificação ou compatibilidade.** Confirme que está confortável.
6. **A menção à AWS.** Repeti "credenciada AWS" em duas FAQs porque já está na
   LP. Se o credenciamento mudou, mude nos três lugares.
7. **A menção à PIN.** `/financiamento-de-inovacao` cita a parceria com a PIN e
   o modelo de cobrança vinculada à liberação do capital, ambos já presentes no
   `llms.txt`. Confirme que pode ir para uma página pública indexável.
8. **Duas páginas de Lei do Bem.** Se o Google decidir que são a mesma coisa,
   uma canibaliza a outra. Eu acho que não são, e os primeiros parágrafos são
   deliberadamente disjuntos — mas vale acompanhar no Search Console nos
   primeiros meses e fundir se aparecerem disputando a mesma consulta.
9. **Data no `lastmod`.** Coloquei 2026-09-16 na home também, porque o rodapé
   dela mudou. Se você commitar em outra data, vale ajustar.

---

## 10. Se for continuar depois

Em ordem de retorno, na minha leitura:

1. **Confirmar os dados da seção 5 e inserir o prazo do FormP&D** nas páginas.
   É a maior alavanca de GEO disponível e custa uma conversa com o contador.
2. **Cases com resultado** — problema, intervenção, número. O próprio README já
   aponta isso como a maior lacuna do site, e é o que falta para as páginas
   novas terem prova, não só explicação.
3. **Conteúdo datado de edital no blog**, não no site: `finep editais abertos`,
   `mais inovação brasil`. Alta demanda, validade curta, lugar certo é o blog.
4. **Decidir sobre a página de mapeamento de processos** (item 7 da seção 6).
5. **Política de privacidade / LGPD e CNPJ no rodapé** — as duas pendências que
   o README já listava e que continuam abertas.
