# Scriptura Lexicon — Lote 2: 1 Tessalonicenses 1–5 na NA28

**Data da auditoria:** 10/11/2026  
**Situação:** BLOQUEADO POR FONTE NÃO COMPROVADA  
**Capítulos NA28 incorporados neste lote:** **0/5**  
**Branch auditada:** `chat-gpt-escrituras`  
**Destino pretendido:** `NA28["1TH"]` (`na28-1-thessalonians-1.js` a `-5.js`)

## Pergunta auditada

Existe uma transcrição fornecida pelo mantenedor, identificada documentalmente como **NA28**, de 1 Tessalonicenses, capítulos 1–5, que possa ser incorporada sem atribuir texto da UBS5 a outra edição?

**Resposta:** não foi localizada fonte dessa edição nas superfícies examinadas. A conclusão refere-se à busca realizada, não constitui afirmação de que o usuário nunca enviou tal transcrição.

## Evidência positiva: fonte UBS5, não NA28

- Arquivo da Biblioteca de conversas: `1tessalonicenses.txt`, fornecido em **10/11/2026**.
- Fonte integral: 5 capítulos, **89 versículos** (10, 20, 13, 18, 28); grego não branco: **7.637 caracteres**.
- Colação: cada capítulo foi comparado com o módulo `scriptures/texts/ubs5-1-thessalonians-N.js` da branch de trabalho; correspondência **exata após remover somente os marcadores dos versículos e espaços em branco**. Cinco capítulos aprovados.
- A documentação já versionada em `scriptures/UBS5-1TESSALONICENSES-NOTAS.md` identifica esse mesmo arquivo como fonte da edição **UBS5**.
- Histórico positivo: commit UBS5 `15aa5328d01e1550e4a6a429373ee7e933845bae` incorporou esses cinco capítulos.
- **Limite:** a correspondência comprova a origem dos módulos **UBS5** a partir da transcrição entregue; não há cotejo independente com a UBS5 ou com a NA28 impressa. Não há fundamento para republicar esse texto sob o rótulo NA28.

## Evidência negativa e verificações

1. Busca no inventário de arquivos da Biblioteca e nas conversas do projeto, inclusive arquivos com nomes genéricos e pesquisa pelo início grego de 1 Tessalonicenses: nenhum documento distinto identificado como 1 Tessalonicenses **NA28** foi recuperado.
2. Histórico do GitHub por caminho `scriptures/texts/na28-1-thessalonians-1.js` nas branches `main`, `chat-gpt-escrituras` e `fix/vercel-critical-editions-manifest`: **0 commits** encontrados.
3. Consulta direta de `na28-1-thessalonians-1.js` na branch de trabalho e de `na28-1-thessalonians-5.js` na branch de correção: **NOT_FOUND**.
4. Manifesto publicado: entrada `NA28.1TH` **ausente**; `UBS5.1TH` aponta corretamente para `ubs5-1-thessalonians`, 5 capítulos.
5. Vercel produção `https://scriptura-lexicon.vercel.app`: solicitações HTTP de `/scriptures/texts/na28-1-thessalonians-1.js` e `-5.js` retornaram **404**; `/scriptures/texts/ubs5-1-thessalonians-1.js` retornou **200** com texto grego.
6. O relatório público `/scriptures/critical-coverage.json` declarou NA28 **254/260** e UBS5 **233/260**, com 1 Tessalonicenses 1–5 ainda ausente de NA28.
7. Pesquisas documentais adicionais na Biblioteca de arquivos e no histórico previamente investigado não forneceram outra fonte com identificação verificável da NA28.

## Decisão de segurança filológica

- **Não** criar arquivos `na28-1-thessalonians-*.js` sem a transcrição específica ou cotejo independente autorizado e verificável.
- **Não** copiar ou renomear `ubs5-1-thessalonians-*.js` como se fosse NA28.
- **Não** adicionar `"1TH":["na28-1-thessalonians",5]` ao manifesto.
- **Não** acionar novo deploy quando somente a documentação da ausência foi registrada na branch.
- **Não** contabilizar o lote como incorporação concluída: **0/5 capítulos**.

## Critério de desbloqueio

Localizar uma transcrição de 1 Tessalonicenses 1–5 atribuída à NA28 com procedência documentada e autorização de uso; verificar os **89 versículos**, a paragrafação, sinais críticos e pontuação contra essa fonte; criar os cinco módulos; atualizar o manifesto; executar a colação pós-commit e publicar e testar a produção. Caso a transcrição localizada difira, prevalece a fonte NA28 verificável, nunca uma harmonização silenciosa.

**Este relatório não representa incorporação do texto.**
