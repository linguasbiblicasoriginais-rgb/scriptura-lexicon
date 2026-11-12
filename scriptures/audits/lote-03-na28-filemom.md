# Scriptura Lexicon — Lote 3: Filemom na NA28

**Data da auditoria:** 10/11/2026  
**Situação:** INVESTIGADO; BLOQUEADO POR FONTE NA28 NÃO COMPROVADA  
**Capítulos NA28 efetivamente incorporados neste lote:** **0/1**  
**Branch de trabalho:** `chat-gpt-escrituras`  
**Módulo pretendido:** `scriptures/texts/na28-philemon-1.js`

## Escopo e resultado

O objetivo é recuperar a transcrição de Filemom especificamente identificada como NA28, sem transferir leituras ou metadados da UBS5.

**Resultado:** não foi recuperada transcrição independente identificada como NA28. A conclusão descreve o material acessível e não permite inferir que o mantenedor jamais o tenha enviado.

## Fonte recuperada: UBS5, não NA28

- O arquivo `filemon.txt`, fornecido em **10/11/2026**, contém **um capítulo, 25 versículos** e quatro títulos editoriais em inglês: `Salutation`, `Philemon’s Love and Faith`, `Paul Pleads for Onesimus`, `Final Greetings`.
- A documentação `scriptures/UBS5-FILEMOM-NOTAS.md` atribui essa transcrição à edição de destino **UBS5**, sem cotejo independente com a edição impressa nem com o aparato crítico.
- O commit original UBS5 é `a4f3c27ccc1acc376e55743be0bb32c0ac23411c`; texto em `scriptures/texts/ubs5-philemon-1.js`.
- Colação mecânica: após remover apenas marcadores de versículos e espaços em branco, os **1.616 caracteres gregos não brancos**, com acentos, sinais críticos e pontuação, correspondem **exatamente** aos 25 versículos publicados na UBS5.
- Os 25 versículos são sequenciais, sem números ausentes ou repetidos.

Essa correspondência demonstra que a transcrição foi utilizada para o módulo UBS5. **Não** comprova que o texto esteja integralmente idêntico ao NA28, nem a possibilidade de reclassificar sua procedência.

## Investigação documental e Git

1. Biblioteca de arquivos (incluindo `Texto colado(...).txt`): identificou-se `filemon.txt` e foram examinados candidatos com nomes genéricos; não foi recuperada transcrição independente identificada como NA28 de Filemom.
2. Pesquisa textual pelo início grego `Παῦλος δέσμιος Χριστοῦ Ἰησοῦ` e por Filemom/NA28 retornou o arquivo UBS5 e correspondências semânticas em outros livros; os candidatos de 7/11 examinados correspondiam a Efésios, Filipenses, Gálatas e 1 Timóteo, não a Filemom NA28.
3. Histórico do caminho `scriptures/texts/na28-philemon-1.js` via GitHub nas branches `main`, `chat-gpt-escrituras` e `fix/vercel-critical-editions-manifest`: **nenhum commit identificado**.
4. Consulta direta ao mesmo caminho na branch `chat-gpt-escrituras`: `NOT_FOUND`.
5. Manifesto público no Vercel: `UBS5.PHM = ["ubs5-philemon",1]`; não há `NA28.PHM`.
6. HTTP em produção: `/scriptures/texts/ubs5-philemon-1.js` retornou **200**, com texto grego; `/scriptures/texts/na28-philemon-1.js` retornou **404**.
7. Relatório de cobertura em produção: **NA28 254/260; UBS5 233/260**, com Filemom NA28 ainda ausente.

## Decisão filológica e operacional

- **Não** criar `na28-philemon-1.js` sem fonte NA28 comprovada e autorizada para incorporação.
- **Não** copiar `ubs5-philemon-1.js` ou seu texto para o corpus NA28.
- **Não** atualizar o manifesto com `"PHM":["na28-philemon",1]` sem texto correspondente.
- **Não** realizar deploy apenas por causa deste relatório: o Vercel já publica o estado verdadeiro e o JSON de cobertura.
- **Não** contar este lote como novo capítulo incorporado: **0/1**.
- O commit deste relatório é exclusivamente documental e preserva todos os módulos de Escrituras.

## Critério de desbloqueio

Recuperar uma transcrição especificamente atribuída à NA28 ou proceder a um cotejo independente e licitamente publicável com fonte autorizada; conferir os **25 versículos**, variantes sinalizadas, pontuação, diacríticos e paragrafação; registrar a proveniência; criar o módulo NA28, atualizar o manifesto, realizar colação remota pós-commit e publicar/testar no Vercel.

**Estado final:** investigado e bloqueado, sem declaração fictícia de incorporação.
