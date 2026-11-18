# Aquisição e conversão na Origami

Implementação de 18/11/2026. O pedido é adaptar o mecanismo do Projete à
Origami: resposta útil → ferramenta livre → valor do serviço → contato com
contexto → acompanhamento comercial.

## O que foi reaproveitado do mecanismo

No Projete, `ChamadaDoProjete` liga a ferramenta gratuita às capacidades do
produto e ao início do teste; `GuiasDaFerramenta` sustenta a decisão com conteúdo;
`BotaoDoTeste` mede a passagem. Na Origami, o próximo passo é avaliar um projeto,
com assunto e contexto disponíveis para o comercial.

Isso foi aplicado em cinco ferramentas e nove guias, com quatro ofertas:
produção, software/integração, inovação e sistemas/reforma tributária. O conteúdo
das chamadas vive em `src/conteudo/conversao.ts`, sem copiar conteúdo ou marca do
Projete para o site.

| Entrada | Valor imediato | Próximo passo |
| --- | --- | --- |
| Guia de MES, metalúrgica ou produção | Entender responsabilidades e requisitos | Calculadora de OEE ou conversa sobre integração da operação |
| OEE e custo hora-máquina | Resultado com memória de cálculo | Avaliar medição no posto e integração; formulário mantém o resultado |
| Legado, IA e contas a receber | Critérios para escolher o que integrar ou construir | Diagnóstico gratuito ou conversa sobre software |
| Guias e simulador da Lei do Bem | Requisitos e estimativa com limites | Avaliar empresa/projeto/documentação com a contabilidade |
| Calculadora tributária | Cálculo de um item | Avaliar cadastros, emissão e integrações com a equipe fiscal |

O resultado das ferramentas permanece acessível sem cadastro. As chamadas
explicam o trabalho a avaliar e oferecem um caminho de contato e outro para
aprofundar a decisão. As provas remetem aos cases e métodos já publicados.
No OEE, a chamada e o formulário oferecem a análise do resultado; a planilha
acompanha o contato. Porte e faturamento são opcionais na captura das ferramentas.

## Contato no site

Os CTAs usam `/conversar` na mesma aba. Nas chamadas contextuais, `tema` e `de`
levam o assunto e uma página conhecida. Nos CTAs genéricos, a página recupera o
referrer interno. Valores fora da lista, URLs externas e parâmetros repetidos
não são tratados como contexto válido.

O formulário reaproveita `/api/lead`: nome, e-mail, empresa, assunto e mensagem;
WhatsApp é opcional. O envio inclui a origem da visita e a página de interesse
no e-mail ao comercial. Não cria banco, CRM, agendamento ou envio de marketing.

Se `RESEND_API_KEY` e `LEADS_PARA` não estiverem configurados no servidor, a página
oferece WhatsApp e e-mail com assunto/contexto, além do formulário alternativo.
Isso é decidido no servidor sem expor as credenciais. No ambiente local desta
rodada, o envio não estava configurado; o estado da Vercel não foi consultado.

Quando o formulário está disponível, sucesso aparece somente após resposta
positiva da API. Em erro, os campos continuam preenchidos e os canais alternativos
ficam disponíveis. Há proteção contra envio duplo e timeout, sem reenvio automático.

`/conversar` usa `noindex` e fica fora do sitemap. As páginas de conteúdo e de
ferramentas continuam públicas e indexáveis. A política de privacidade acompanha
o fluxo real de dados do contato e da calculadora tributária.

## Como medir

- `organic_landing_view`: origem e página de entrada.
- `tool_start` / `tool_complete`: uso e conclusão das ferramentas existentes.
- `service_cta_click`: intenção; `cta_local=ponte_conteudo` ou `ponte_ferramenta`
  identifica a passagem para a avaliação.
- `contact_form_start`: primeiro foco no formulário.
- `contact_form_error`: envio não confirmado; não é conversão.
- `contact_form_submit`: envio confirmado, com o identificador retornado pela API.
- `qualified_lead`, reunião e oportunidade continuam sendo decisões do comercial.

Os novos eventos não levam nome, e-mail, telefone ou texto da mensagem. Clique em
WhatsApp não prova mensagem enviada. O formulário alternativo não confirma seu
envio ao navegador da Origami.

Comparar por página de entrada e canal: visita → ferramenta → clique → contato
confirmado → lead qualificado. Não há dados de performance nesta entrega para
afirmar aumento de conversão ou transferir resultados do Projete à Origami.

## Verificação

Testes de contexto cobrem preservação do assunto/página e rejeição de entradas
arbitrárias. Testes de medição reconhecem o contato interno; testes do endpoint
continuam usando Resend simulado. A validação no navegador usa resposta de API
simulada para sucesso e erro, sem enviar mensagens reais ao comercial.

Relatório da auditoria HTTP: `docs/seo-geo/verificacao-conversao-local-2026-11-18.json`.
O fluxo no navegador está registrado em
`docs/seo-geo/verificacao-conversao-navegador-2026-11-18.json`: falha sem conversão,
contexto preservado, reenvio após erro, clique duplo sem duplicação, confirmação
com uma conversão e alternativa sem configuração. O foco por clique real também
registrou o início do formulário. Não houve e-mail real enviado.
Executar `npm test`, `npm run lint`, `npm run type-check`, `npm run build` e
`npm run seo:verificar -- --base-url http://127.0.0.1:4178` após alterar as jornadas.
