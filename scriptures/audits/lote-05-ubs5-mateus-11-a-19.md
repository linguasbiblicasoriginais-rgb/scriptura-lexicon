# Scriptura Lexicon — Lote 5: Mateus 11–19 da UBS5

**Data da auditoria:** 10/11/2026  
**Situação:** INVESTIGADO, BLOQUEADO — transcrição UBS5 não recuperada  
**Novo texto UBS5 incorporado:** **0/9 capítulos**  
**Branch de trabalho:** `chat-gpt-escrituras`  
**Arquivos pretendidos:** `scriptures/texts/ubs5-matthew-{11..19}.js`

## Missão e delimitação

Investigar a recuperação documental do Evangelho segundo Mateus, capítulos 11–19, **especificamente da edição UBS5**. Não empregar o texto NA28, SBLGNT, Textus Receptus ou qualquer outra edição como se fosse UBS5. A ausência no registro examinável **não comprova** que o mantenedor nunca enviou esses capítulos.

## Fontes e identificação editorial

1. A mensagem de 22/10/2026, recuperada do contexto de conversas, identifica expressamente o envio de **Mateus 1 da UBS5**. Seu módulo `scriptures/texts/ubs5-matthew-1.js` guarda o cabeçalho de procedência. O commit original é `7d933c7bff57566e4bff19230a9d83f47eb67fce`; a atualização posterior `5e23585fd7c14e42b4b8bb495a947a0e1c24b933` trata da apresentação.
2. A transcrição integral de Mateus identificada em `Texto colado(20261104-183335).txt` começa com **“Quero continuar a incorporação do NA28”**. Logo, os seus capítulos 11–19 pertencem à **NA28**. O GitHub confirma `na28-matthew-11.js` e os demais capítulos (28 arquivos NA28 no diretório).
3. Pesquisa na Biblioteca de arquivos, nas transcrições com nomes genéricos de outubro/novembro e em registros recuperados de conversas anteriores não encontrou uma transcrição individualizada **UBS5** para Mateus 11–19. Os anexos com texto de Mateus identificados pertencem à NA28; os demais resultados textuais são outros livros, referências cruzadas ou material lexicográfico.
4. A presença de Mateus nas edições SBLGNT, TR e Vulgata no repositório não autoriza inferir o conteúdo da UBS5.

## GitHub: arquivos, inventário e histórico

- `scriptures/texts/ubs5-matthew-11.js` a `ubs5-matthew-19.js`: nove consultas individuais na branch `chat-gpt-escrituras`, **nove respostas NOT_FOUND**.
- O diretório `scriptures/texts/` na árvore Git da mesma branch contém **somente `ubs5-matthew-1.js`** com esse prefixo; há 28 arquivos `na28-matthew-*.js`.
- `ubs5-matthew-11.js` também retornou `NOT_FOUND` nas branches `main`, `fix/vercel-critical-editions-manifest`, `20261022`, `20261028`, `20261103` e `chat-gpt-commits`.
- Histórico de commits para os caminhos UBS5 Mateus **11, 15 e 19** na branch `chat-gpt-escrituras`: **nenhum commit recuperado**. Também não houve registro para Mateus 11 UBS5 consultado no histórico da `main`.
- Manifesto versionado: `UBS5.MAT = ["ubs5-matthew",1]`; `NA28.MAT = ["na28-matthew",28]`.

## Produção Vercel (10/11/2026)

Endereço: `https://scriptura-lexicon.vercel.app`

| Recurso | Resposta HTTP | Interpretação |
|---|---:|---|
| `/scriptures/texts/ubs5-matthew-1.js` | 200 | Texto UBS5 de Mateus 1 existente |
| `/scriptures/texts/ubs5-matthew-11.js` | 404 | Sem arquivo publicado |
| `/scriptures/texts/ubs5-matthew-15.js` | 404 | Sem arquivo publicado |
| `/scriptures/texts/ubs5-matthew-19.js` | 404 | Sem arquivo publicado |
| `/scriptures/texts/na28-matthew-11.js` | 200 | NA28 existente, **não** UBS5 |
| `/scriptures/chapter-manifest.js` | 200 | UBS5 Mateus 1/28 |
| `/scriptures/critical-coverage.json` | 200 | NA28 254/260; UBS5 233/260 |

**Produção consolidada:** 487/520 capítulos, faltam 33. **Nenhum dos nove capítulos do Lote 5 foi incorporado**.

## Decisão

- Não fabricar texto, não renomear capítulos de NA28, não acrescentar capítulo sem fonte UBS5 com procedência comprovada.
- Não modificar o manifesto, os módulos bíblicos nem o build sem incorporação legítima.
- Registrar o bloqueio documental na branch de trabalho, **sem novo deploy**, porque não existe nova unidade textual publicável.
- Não contar os nove capítulos como concluídos.

## Critério de desbloqueio

Recuperar transcrições **UBS5, Mateus 11–19**, com procedência e permissão de publicação comprovadas; verificar todos os versículos, pontuação, colchetes críticos, diacríticos, títulos editoriais, remissões e paragrafação; criar nove módulos individuais; atualizar o manifesto; executar colação pós-commit e verificar os nove arquivos no Vercel. O progresso só será aumentado depois desses testes.

**Resultado do Lote 5: investigação documentada; incorporação 0/9; bloqueio por fonte não localizada.**
