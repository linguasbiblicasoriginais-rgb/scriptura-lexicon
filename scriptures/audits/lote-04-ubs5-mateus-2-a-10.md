# Scriptura Lexicon — Lote 4: Evangelho segundo Mateus 2–10 na UBS5

**Data:** 10/11/2026  
**Status:** INVESTIGADO — BLOQUEADO POR FONTE UBS5 NÃO RECUPERADA  
**Capítulos efetivamente incorporados neste lote:** **0/9**  
**Branch:** `chat-gpt-escrituras`  
**Destino esperado:** `scriptures/texts/ubs5-matthew-2.js` a `ubs5-matthew-10.js`

## Objetivo e regra de procedência

Recuperar transcrições fornecidas pelo mantenedor especificamente para o corpus UBS5, capítulos 2–10 do Evangelho segundo Mateus, preservar o texto grego e os paratextos sem harmonizá-los com a NA28.

**Resultado:** nenhuma transcrição integral identificada como UBS5 desses nove capítulos foi recuperada. A investigação é circunscrita às superfícies acessíveis e não implica que o mantenedor jamais os tenha enviado.

## Fontes comprovadamente distintas

### UBS5 — Mateus 1

- Recebido e incorporado em 22/10/2026, conforme o histórico do projeto.
- Módulo `scriptures/texts/ubs5-matthew-1.js`: cabeçalho identifica expressamente fonte do usuário como UBS5 na data de 22/10/2026, com 25 versículos e paratexto separado.
- Há referência documental de atualização do progresso no README no commit `2b84a9703fe3a3dacffb3525cadc1705afa08c02`; esse commit modificou o README, não representa incorporação de Mateus 2–10.
- O manifesto da branch de trabalho registra `"MAT":["ubs5-matthew",1]` na edição UBS5.

### NA28 — Mateus 1–28

- Fonte da Biblioteca: `Texto colado(20261104-183335).txt`, enviada em **04/11/2026**.
- A abertura declara expressamente: **“Quero continuar a incorporação do NA28”**, antes do livro de Mateus.
- O módulo `scriptures/texts/na28-matthew-2.js` registra essa transcrição como NA28 e foi encontrado na branch de trabalho.
- O manifesto NA28 registra `"MAT":["na28-matthew",28]`.
- **Não** transferir os 27 capítulos NA28 para a UBS5. Similaridade de redação não constitui certificação independente de leituras críticas, colchetes, sinais e pontuação.

## Arquivos de conversa e Biblioteca

- Consultados arquivos antigos de outubro e novembro, incluindo transcrições de nomes genéricos `Texto colado(...).txt`, pesquisas por `Mateus`, `UBS5` e incipit grego.
- Os candidatos antigos de outubro com grande volume pertencem principalmente a textos hebraicos do Antigo Testamento; candidatos de novembro incluem Marcos, Lucas, João, Atos, outros livros ou a transcrição **NA28** de Mateus.
- A recuperação de conversas anteriores registra envio identificado como UBS5 apenas de **Mateus 1** em 22/10/2026; não foi recuperada a transcrição UBS5 dos capítulos 2–10.

## GitHub e histórico

1. Conferidos os nove caminhos `scriptures/texts/ubs5-matthew-{2..10}.js` na branch `chat-gpt-escrituras`: **todos `NOT_FOUND`**.
2. `ubs5-matthew-2.js` também ausente das branches `main`, `fix/vercel-critical-editions-manifest`, `20261022`, `20261103` e `chat-gpt-commits`.
3. Histórico Git do caminho `ubs5-matthew-2.js` e `ubs5-matthew-10.js` na branch `chat-gpt-escrituras`: **nenhum commit encontrado**.
4. Módulo `ubs5-matthew-1.js` está presente, com cabeçalho datado e versículos gregos.

## Vercel — verificação HTTP e de cobertura

- `https://scriptura-lexicon.vercel.app/scriptures/texts/ubs5-matthew-1.js`: **HTTP 200**; grego presente.
- `https://scriptura-lexicon.vercel.app/scriptures/texts/ubs5-matthew-2.js`: **HTTP 404**.
- `https://scriptura-lexicon.vercel.app/scriptures/texts/ubs5-matthew-10.js`: **HTTP 404**.
- `https://scriptura-lexicon.vercel.app/scriptures/texts/na28-matthew-2.js`: **HTTP 200**; grego presente, de outra edição.
- `https://scriptura-lexicon.vercel.app/scriptures/critical-coverage.json`: **UBS5 233/260**, com `MAT.2–28` faltantes; **NA28 254/260**, faltando apenas `1TH.1–5` e `PHM.1`.
- Total consolidado em produção: **487/520 capítulos**. Não houve inclusão no Lote 4.

## Decisão operacional

- Não criar texto grego fictício, extrapolado ou importado de outra edição.
- Não acrescentar `ubs5-matthew-2.js` a `ubs5-matthew-10.js`, nem modificar o manifesto.
- Não realizar deploy de produção sem incorporação real.
- Registrar o Lote 4 como **investigado e bloqueado**, não como nove capítulos concluídos.
- Preservar todas as demais Escrituras, branches e dados.

## Critério verificável de desbloqueio

Localizar transcrição integral e com proveniência específica **UBS5** dos capítulos 2–10, com permissão de uso; conferir seus marcadores de versículos, colchetes, diacríticos, pontuação, títulos editoriais, remissões e limites de parágrafo; produzir nove módulos independentes, atualizar o inventário `UBS5.MAT`, reconstruir o manifesto, publicar em branch de trabalho, realizar colação remota e conferir HTTP e renderização do leitor no Vercel.

**Nenhum capítulo incorporado neste lote: 0/9.**
