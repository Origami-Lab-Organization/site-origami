# SEO e GEO — operação e prioridades

Revisão: 18/11/2026. Escopo definido com o time: software e modernização,
Lei do Bem e financiamento de inovação, e presença regional em Minas Gerais.
Objetivo de negócio: oportunidades comerciais qualificadas com origem orgânica.

A implementação do mecanismo de conversão adaptado do Projete está em
[MECANISMO-DE-CONVERSAO.md](MECANISMO-DE-CONVERSAO.md): cinco ferramentas e nove
guias conectam o resultado à oferta, e o contato preserva o contexto até o comercial.

Este documento atualiza a operação descrita nos planos anteriores. As métricas
históricas deles não representam a situação atual: nesta rodada não houve acesso
ao Search Console, ao painel do Amplitude nem ao CRM.

## Evidências desta rodada

Origem preservada: `https://www.origamilab.com.br`. Inventário público:
`src/conteudo/paginas.ts`, agora com 33 páginas. Política de privacidade fica fora do
sitemap e continua com `noindex`; APIs e rascunhos não entram no inventário.

Na auditoria HTTP da produção antes da publicação destas mudanças, as 28 páginas
responderam com sucesso. Foram encontrados quatro destinos Markdown quebrados
no `llms.txt`. O apex redirecionava para `www`, as URLs antigas `.html`
redirecionavam, e a URL inexistente retornava 404. Isso verifica acesso HTTP;
não comprova que uma página está indexada ou aparecendo em uma consulta.

Correções preparadas no código:

- Uma fonte para a data de revisão do sitemap e dos grafos; a data de publicação
  original dos artigos é preservada. Datas só mudam quando há alteração relevante.
- Entidades Organization/ProfessionalService e WebSite compartilhadas e definidas
  também nos cases. Remoção de HowTo que descrevia etapas comerciais do fornecedor.
- Quatro links reparados no `llms.txt`. O arquivo continua como recurso opcional.
- Comentários de robots distinguem busca, treinamento e acesso por iniciativa do
  usuário; a política existente de acesso público foi preservada.
- Página de desenvolvimento com definição do serviço, comparação de caminhos,
  critérios de contratação e cases relacionados. Respostas de custo e incentivo
  fiscal sem promessa universal de enquadramento.
- Lei do Bem com encaminhamento por situação para simulação, documentação e
  financiamento; página de Minas Gerais com critérios de avaliação do fornecedor,
  base real em Formiga e prova de projeto regional publicado.
- Hub de ferramentas explica quais cálculos rodam no navegador e quais parâmetros
  são enviados à Receita Federal. Navegação e rodapé oferecem solicitar conversa,
  coerente com o formulário de destino.
- Verificação HTTP reproduzível com testes de regressão, sem instalar outro tracker.

O resultado da verificação do build desta rodada fica em
`docs/seo-geo/verificacao-local-2026-11-18.json`.

Validação em 18/11/2026: 112 testes de domínio/medição/SEO e sete testes do
verificador passaram, assim como ESLint, TypeScript e build de produção. A
varredura do novo build local conferiu 28 páginas em 33 requisições, sem falhas
nas regras verificadas. As seções alteradas nas páginas de software, Lei do Bem
e Minas Gerais foram conferidas no Chrome em 390 e 1440 px, sem transbordamento
horizontal do documento; tabelas largas mantêm a rolagem dentro do próprio bloco.

## Novas páginas — segunda entrega de 18/11/2026

| URL | Pergunta principal | Caminho comercial |
| --- | --- | --- |
| `/guias` | Onde encontrar o conteúdo que resolve minha dúvida? | Hub por software, inovação e indústria; navegação e rodapé |
| `/mes-vs-erp` | Preciso de MES ou o ERP já cobre a execução? | Integração ERP/chão de fábrica e desenvolvimento |
| `/automacao-de-contas-a-receber` | Como automatizar a carteira sem perder o controle de títulos e baixas? | Integração de sistemas, case Retífica e conversa sobre o processo |
| `/lei-do-bem-desenvolvimento-de-software` | Quando software pode envolver P&D e quais evidências separar? | Simulador, documentação e avaliação do projeto |
| `/software-para-industria-metalurgica` | Que requisitos e critérios de aceite minha metalúrgica deve avaliar? | Desenvolvimento, integração, PCP, OEE e hora-máquina |

As páginas reaproveitam a identidade visual e os componentes do site. Cada uma
tem intenção própria, fontes quando há afirmação externa, perguntas visíveis
espelhadas no JSON-LD e links para páginas relacionadas. O hub reúne 18 guias;
suas listas visíveis e estruturadas vêm de `src/conteudo/guias.ts`.

As cinco rotas entram no inventário, no sitemap e no `llms.txt`. A navegação
inclui Guias; o menu passa a painel antes de faltar espaço no desktop. Links
contextuais nos conteúdos de software, Lei do Bem e Minas Gerais levam às
novas leituras.

Validação da segunda entrega: 119 testes, ESLint, TypeScript e build passaram.
A auditoria do build final verificou 33 páginas em 38 requisições sem falhas
nas regras verificadas; o relatório está em
`docs/seo-geo/verificacao-paginas-local-2026-11-18.json`. As cinco páginas foram
conferidas no Chrome em 390 e 1440 px, sem transbordamento horizontal do
documento ou exceções de JavaScript. As FAQs dos quatro artigos e o menu do
hub abriram corretamente. Uma referência fiscal que levava a conteúdo restrito
foi removida; lei, decreto e materiais públicos do MCTI permanecem como fontes.

Os guias novos aprofundam critérios e exemplos; não publicam nomes ou resultados
de clientes que não constam dos cases existentes. O conteúdo fiscal cita fontes
oficiais e ainda não declara revisão por um contador identificado.

O tema financeiro passou de cobrança por um canal específico para automação de
contas a receber depois da conferência da política atual do WhatsApp. O case
existente descreve o projeto publicado; não comprova permissão atual para
qualquer uso do canal. A [política oficial](https://whatsappbusiness.com/policy/)
é a fonte para avaliar as restrições, além das condições do provedor.

## Três frentes, com destinos próprios

| Frente | Intenção e página principal | Conteúdo que sustenta a decisão | Próximo passo |
| --- | --- | --- | --- |
| Software e modernização | Contratar desenvolvimento: `/desenvolvimento-de-software`; modernizar legado: `/modernizacao-de-sistemas-legados` | `/software-sob-medida`, `/integracao-de-sistemas`, integração ERP/chão de fábrica e cases Retífica/Cabral | Diagnóstico da operação e conversa sobre o escopo |
| Lei do Bem e financiamento | Entender elegibilidade: `/lei-do-bem`; escolher instrumento: `/fomento-a-inovacao` (ferramenta) e `/financiamento-de-inovacao` | `/lei-do-bem-na-pratica`, `/finep`, `/bndes-mais-inovacao`, `/embrapii`, fontes oficiais e `/simulador-lei-do-bem` com premissas explícitas | Conversa com dados do projeto e revisão contábil |
| Indústria em Minas Gerais | Avaliar fornecedor regional: `/tecnologia-para-industrias-minas-gerais` | Base real em Formiga, problemas industriais descritos, case publicado da Retífica e guias de PCP/apontamento | Diagnóstico e avaliação de implantação na operação |

Cada atualização deve resolver uma pergunta específica e apontar o próximo passo
relevante. Evitar repetir o mesmo artigo para várias cidades: só criar uma página
regional nova quando houver conteúdo próprio e evidência real de atuação.

## Próximos 30 dias

As três frentes avançam na mesma semana; a tabela é uma sequência de entregas,
não uma previsão de posição ou tráfego.

| Quando | Entrega | Responsável sugerido | Evidência de conclusão |
| --- | --- | --- | --- |
| Semana 1 | Publicar as correções pelo fluxo do projeto e repetir a auditoria na origem canônica | Manutenção do site | Deploy identificado e relatório HTTP sem regressões |
| Semana 1 | Exportar últimos 28 dias e 28 anteriores do Search Console por consulta/página; separar marca de não marca | Responsável pelo Search Console | CSVs comparáveis, sem tratar ausência de acesso como zero tráfego |
| Semana 1 | Conferir propriedade, sitemap e indexação de uma página de cada frente e de uma calculadora | Responsável pelo Search Console | URL canônica escolhida e estado indexado registrado |
| Semana 1 | Conferir o Google Business Profile existente e seus dados reais de nome, endereço, contato, categoria e site | Sócios/comercial | Perfil consistente, com acesso e responsável identificados |
| Semana 2 | Documentar um resultado de software/integração já publicado: situação anterior, intervenção, período e limites do resultado | Responsável técnico + comercial | Case revisado com fonte e autorização para qualquer dado novo |
| Semana 2 | Revisar páginas fiscais e simulador com profissional responsável; registrar nome/credencial apenas depois da revisão real | Parceiro contábil + conteúdo | Premissas e fontes validadas, autoria/revisão visível quando autorizada |
| Semana 3 | Atualizar os guias de maior oportunidade em cada frente usando consultas observadas | Conteúdo + técnico | Uma pergunta resolvida por atualização, fonte e links para oferta/case/ferramenta |
| Semana 3 | Mapear oportunidades reais de referência regional: diretórios de entidades de que a Origami participa, parceiros e materiais de clientes | Sócios/comercial | Lista com relevância e relação comprovada; publicação ou contato depende do fluxo autorizado |
| Semana 4 | Comparar consultas, conversões e a amostra GEO; escolher próximas atualizações pelos dados | Conteúdo + comercial | Registro de decisões por página e hipótese, sem atribuir toda variação ao deploy |

O ganho de autoridade depende especialmente das provas do trabalho. O repo ainda
marca como pendentes o contexto dos **80% da Tecno 2000** e dos **100% do
apontamento da Prumo** na home. Solicitar definição, período e fonte ao responsável;
o case público da Prumo sobre intranet tem um escopo diferente. Não ampliar esses
números para outras páginas antes dessa confirmação. Os autores individuais,
credenciais, CNPJ e razão social também precisam dos dados reais do time.

## Painel mínimo

| Pergunta | Dado | Fonte e limite |
| --- | --- | --- |
| Estamos alcançando buscas novas? | Cliques, impressões, CTR e posição por consulta/página; marca separada de não marca | Search Console; comparar país, dispositivo e períodos equivalentes |
| Qual frente atrai a visita? | `organic_landing_view` por `pagina_entrada` e `canal` | Amplitude existente; não substituir Search Console por pageviews |
| O conteúdo gera intenção? | `service_cta_click` e uso/conclusão das ferramentas por entrada | Amplitude; clique é intenção, não reunião realizada |
| As visitas viram negócio? | `contact_form_submit`, leads qualificados, reuniões e oportunidades por origem | Formulários próprios e comercial; o Microsoft Forms não confirma o envio ao navegador do site |
| Há visitas atribuíveis a IA? | Visitas com `canal=assistente_ia`, entrada e conversão | Amplitude; uma citação pode não gerar clique nem referrer identificável |
| A marca é citada corretamente? | Pergunta, plataforma, data, modo de busca, marca, URL citada e precisão | Amostra manual abaixo; respostas variam entre sessões/modelos |

Para os eventos de negócio, reutilizar o identificador do lead quando disponível
e fazer a qualificação no comercial. A ausência de um evento não prova ausência de
conversão quando a etapa ocorre em outro sistema.

## Amostra GEO comparável

Rodar mensalmente, em pt-BR e com localidade Brasil, nas plataformas que o time
consegue consultar com busca habilitada. Registrar a configuração de cada rodada.
As páginas abaixo são destinos esperados do conteúdo, não evidência de citação.

| Pergunta | Página de referência |
| --- | --- |
| Quando uma indústria deve contratar software sob medida em vez de usar o ERP? | `/software-sob-medida` |
| Como escolher uma empresa para desenvolver software industrial? | `/desenvolvimento-de-software` |
| Como modernizar um sistema em Delphi sem interromper a operação? | `/modernizacao-de-sistemas-legados` |
| Como integrar ERP e chão de fábrica sem redigitar dados? | `/integracao-erp-chao-de-fabrica` |
| Quais são os requisitos para uma indústria usar a Lei do Bem? | `/lei-do-bem` |
| Implantar um ERP dá direito à Lei do Bem? | `/lei-do-bem` |
| Qual a diferença entre Lei do Bem, crédito Finep e subvenção? | `/financiamento-de-inovacao` |
| Como estimar a economia com a Lei do Bem e quais são as limitações? | `/simulador-lei-do-bem` |
| Qual instrumento de fomento à inovação serve para o meu projeto? | `/fomento-a-inovacao` |
| O que é a FINEP e como funciona o financiamento? | `/finep` |
| Empresa no lucro presumido pode pegar financiamento da FINEP? | `/finep` |
| Qual a taxa do Finep Inovacred? | `/finep-inovacred` |
| O que é o Finep Inovacred 4.0 e quem implanta? | `/finep-inovacred` |
| Onde pedir o Inovacred em Minas Gerais? | `/finep-inovacred` |
| Como funciona o BNDES Mais Inovação para máquinas 4.0? | `/bndes-mais-inovacao` |
| O que é a EMBRAPII e como uma indústria usa? | `/embrapii` |
| Existe fomento à inovação para empresas de Minas Gerais? | `/fomento-a-inovacao` |
| Como escolher uma empresa de tecnologia para indústria em Minas Gerais? | `/tecnologia-para-industrias-minas-gerais` |
| Que projetos de automação integrada ao ERP a Origami Lab já publicou? | `/cases/cobranca-automatica-whatsapp-retifica-formiguense` |

Modelo de registro: `data | pergunta | plataforma/modelo | busca/localidade |
marca mencionada | URLs citadas | resposta correta? | observações`. Guardar a
referência da resposta quando a plataforma permitir. Não preencher resultados
de plataformas que não foram consultadas.

## Fomento à inovação: datas que vencem

As páginas de fomento citam números com data. Revisar nas fontes oficiais:

- **Depois de 31/12/2026:** `/bndes-mais-inovacao` (seção "O prazo de 2026" e
  FAQ): o prazo dos pedidos diretos em TR (Lei 14.592/2023) termina nessa data.
- **Quando a FINEP publicar novas Condições Operacionais:** portes, encargos e
  taxas do Inovacred em `/finep` e `/finep-inovacred` (tabela por linha), e os limites em `LIMITES`
  (`src/lib/ferramentas/fomento.ts`), que alimentam a ferramenta.
- **Quando abrir o próximo Compete Minas:** tabela de tetos e contrapartidas e
  o aviso "edição 2026 encerrada" em `/fomento-a-inovacao` e na ferramenta.
- **A cada trimestre:** lista de agentes do Inovacred (usada a de 04/11/2026),
  lista de integradoras do Inovacred 4.0 (usada a de jan/2026, 153 empresas),
  condições do BDMG e orientações operacionais da EMBRAPII (Sebrae, CNAE).

Ao mudar um número, atualizar também `atualizadaEm` em `src/conteudo/paginas.ts`
e a data no `meta` da página.

## Como validar e manter

```bash
npm test
npm run lint
npm run type-check
npm run build
# Em outro terminal, escolher uma porta livre para o servidor de produção:
npm run start -- --hostname 127.0.0.1 --port 4178
npm run seo:verificar -- --base-url http://127.0.0.1:4178
# Após a publicação pelo fluxo do time:
npm run seo:verificar -- --base-url https://www.origamilab.com.br
```

O verificador só faz GET, com timeout e concorrência limitada. Lê o inventário
sem executá-lo e confere o HTML servido, canonical, indexabilidade, sitemap,
JSON-LD, links internos, âncoras e 404. Não roda JavaScript, não testa o uso das
calculadoras, não mede Core Web Vitals e não acessa Search Console. `--json` emite
o relatório em JSON; para salvar JSON puro, chamar `node scripts/verificar-seo.mjs`
diretamente, sem o banner do npm. O parser vem do pacote do Next e deve ser
revalidado ao atualizar o framework. Executar no ambiente de desenvolvimento
ou CI com as dependências completas, incluindo TypeScript.

Ao criar ou revisar página: atualizar `PAGINAS` e sua data real de revisão,
reutilizar as entidades de `src/lib/seo/estruturados.ts`, usar canonical da origem
publicada e incluir links descritivos de páginas relacionadas. Se mantiver
`llms.txt`, preservar cada destino inteiro, sem quebra de linha dentro da URL.

`npm run indexnow` envia notificações externas: usar somente depois da publicação
e conforme o fluxo do time. Aceite não garante indexação. Nenhuma submissão nem
publicação foi executada nesta rodada.

## Fontes oficiais revalidadas em 18/11/2026

- [Google: recursos de IA e seu site](https://developers.google.com/search/docs/appearance/ai-features): fundamentos de SEO, conteúdo textual acessível e dados estruturados coerentes; sem schema especial para IA.
- [Google: conteúdo útil e confiável](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): evidência, fontes e responsabilidade sobre o conteúdo.
- [Google: atualizações da documentação](https://developers.google.com/search/updates): FAQ rich results retirados em 2026; `llms.txt` não altera ranking no Google. FAQ visível continua útil.
- [Google: criação de sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): `lastmod` representa alteração relevante e verificável.
- [OpenAI: crawlers](https://developers.openai.com/api/docs/bots): OAI-SearchBot, GPTBot e ChatGPT-User têm finalidades distintas.
- [Search Console: inspeção por API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect): consulta a versão indexada, sem live test ou pedido de indexação.
- [Google: usos da Indexing API](https://developers.google.com/search/apis/indexing-api/v3/using-api): limitada a JobPosting e BroadcastEvent em VideoObject.
- [IndexNow: documentação](https://www.indexnow.org/documentation): confirmação de recebimento da notificação não é confirmação de indexação.
