# Scriptura Lexicon — Lote 6: UBS5, Mateus 20–28

**Data da execução:** 10/11/2026 (America/Sao_Paulo)  
**Branch autorizada:** `chat-gpt-escrituras`  
**HEAD consultado antes da documentação:** `f246c7206e552b2fc12212b567e823ff6190cf4b`  
**Resultado:** INVESTIGADO — BLOQUEADO POR AUSÊNCIA DE FONTE UBS5 COM PROCEDÊNCIA COMPROVADA  
**Capítulos UBS5 recuperados/incorporados neste lote:** **0/9**  
**Destinos esperados:** `scriptures/texts/ubs5-matthew-20.js` até `ubs5-matthew-28.js`.

## Regra editorial inviolável

Este lote exige Mateus 20–28 **especificamente da UBS5**. Não há autorização para substituir seus capítulos pelo texto da NA28, SBLGNT, Textus Receptus, Vulgata, fontes genéricas on-line ou por conjecturas. Sem transcrição UBS5 individualizável, integral, verificável e passível de publicação, não criar módulos nem elevar contadores de incorporação, auditoria ou integração.

## Investigação e evidências

1. **Histórico de conversas:** os registros recuperados identificam fornecimento da **UBS5 de Mateus 1 em 22/10/2026**; não foi recuperado o envio da UBS5 dos capítulos 20–28. Isso não demonstra que o mantenedor nunca tenha enviado tal material; demonstra somente que ele não foi recuperado nas superfícies acessíveis nesta execução.
2. **Arquivos enviados e Biblioteca:** pesquisas por UBS5, Mateus/Matthew, transcrições gregas, arquivos `Texto colado(...).txt` e títulos editoriais não forneceram uma transcrição comprovadamente UBS5 de Mateus 20–28. O arquivo `Texto colado(20261104-183335).txt`, consultado diretamente, abre com **“Quero continuar a incorporação do NA28”** e introduz o texto de Mateus; portanto, seu conteúdo **não é uma fonte autorizada para UBS5**. Os candidatos `Texto colado(20261107-000722).txt`, `Texto colado(20261107-181441).txt`, `Texto colado(20261109-230502).txt` e `Texto colado(20261106-173359).txt` tratam de outros livros do Novo Testamento.
3. **GitHub, árvore remota:** examinada a árvore completa da branch `chat-gpt-escrituras` (9.485 entradas; resposta não truncada). O único módulo cujo nome corresponde à UBS5 de Mateus é `scriptures/texts/ubs5-matthew-1.js`. Todos os nove caminhos `ubs5-matthew-{20..28}.js` estão **ausentes**. Existem `na28-matthew-20.js` a `na28-matthew-28.js` e `sblgnt-matthew-20.js` a `sblgnt-matthew-28.js`, mas são edições diferentes.
4. **Histórico Git por caminho:** consultas na branch para `ubs5-matthew-20.js`, `ubs5-matthew-24.js` e `ubs5-matthew-28.js` retornaram **lista vazia de commits**. Isso não exclui a existência de objetos órfãos, conteúdo noutros repositórios ou arquivos privados inacessíveis; nenhum deles foi verificado como fonte UBS5 disponível.
5. **Manifesto:** `scriptures/chapter-manifest.js` registra `UBS5.MAT = ["ubs5-matthew", 1]` e `NA28.MAT = ["na28-matthew", 28]`. A distinção está correta e será mantida.
6. **Execuções anteriores:** `scriptures/audits/lote-04-ubs5-mateus-2-a-10.md` e `scriptures/audits/lote-05-ubs5-mateus-11-a-19.md` registram bloqueios análogos, cada um com 0/9 capítulos UBS5 incorporados.

## Produção Vercel — verificações de 10/11/2026

Site: https://scriptura-lexicon.vercel.app

| Recurso público | HTTP | Conclusão |
|---|---:|---|
| `/scriptures/critical-coverage.json` | 200 | Inventário publicado disponível; verificação de presença, **não** colação filológica |
| `/scriptures/texts/ubs5-matthew-1.js` | 200 | Módulo declarado UBS5 de Mateus 1 presente (sem cotejo independente da edição impressa) |
| `/scriptures/texts/ubs5-matthew-20.js` | 404 | Módulo UBS5 do lote não publicado |
| `/scriptures/texts/ubs5-matthew-28.js` | 404 | Módulo UBS5 do lote não publicado |
| `/scriptures/texts/na28-matthew-20.js` | 200 | Texto NA28 existente, não aproveitável como UBS5 |

**Não houve novo deploy** nesta rodada, porque não há conteúdo UBS5 legítimo para publicar. Os HTTP acima são testes do estado anterior de produção, não testes de uma nova publicação nem testes de renderização/DOM.

## Barras e contadores — escopos separados, sem inflação

As barras abaixo representam **somente presença documental de capítulos** ou **trabalho novo no Lote 6**, conforme indicado; não são certificados de fidelidade textual:

| Métrica | Numerador / denominador | Percentual | Natureza |
|---|---:|---:|---|
| **Lote 6 — fonte UBS5 recuperada** | **0/9** | **0,00%** | Nenhum capítulo com procedência UBS5 comprovada |
| Lote 6 — módulos UBS5 incorporados | 0/9 | 0,00% | Nenhum módulo criado |
| Lote 6 — auditoria textual/estrutural de conteúdo UBS5 | 0/9 | 0,00% | Não executável sem fonte; pesquisa de arquivos não conta como colação |
| Lote 6 — auditoria filológica integral | 0/9 | 0,00% | Não executada |
| Lote 6 — integração/publicação de novos capítulos | 0/9 | 0,00% | Não executada |
| Lote 6 — teste de novos capítulos no Vercel | 0/9 | 0,00% | Sem novo deploy; HTTP 404 é evidência do bloqueio, não teste aprovado |
| UBS5 — Mateus completo | 1/28 | 3,57% | Presença/registro; restante ausente |
| UBS5 — NT completo | 233/260 | 89,62% | Registro de módulos no Vercel, conforme `critical-coverage.json` |
| NA28 — NT completo | 254/260 | 97,69% | Registro de módulos NA28; **não** fonte substituta |
| Duas edições críticas combinadas | 487/520 | 93,65% | Soma de capítulos registrados nas duas edições; **não** auditoria filológica |

**Barra de investigação dos caminhos Git do lote:** 9/9 nomes de arquivos conferidos na árvore Git; **9/9 ausentes**. Isso mede a inspeção documental, não conteúdo bíblico incorporado. Os únicos HTTP de módulos do lote testados diretamente foram os capítulos 20 e 28, ambos 404.

**Barras de outras edições e léxicos:** não modificadas e não recontadas nesta rodada; seus percentuais anteriores não devem ser reapresentados como se tivessem sido auditados agora. **Barras UBS5 e NA28 em produção:** manter os números acima, sem incremento fictício.

## Decisão, estado técnico e desbloqueio

- Manter intactos todos os módulos bíblicos existentes, o leitor, `scriptures/chapter-manifest.js`, a configuração Vercel, `main` e outras branches.
- Não criar `ubs5-matthew-20.js` a `ubs5-matthew-28.js`, nem alterar métricas ou cartões de progresso artificialmente.
- Registrar **somente** este bloqueio documental na branch `chat-gpt-escrituras`; confirmar o commit remoto e a presença do relatório após a publicação.
- **Desbloqueio:** recuperar de conversas, anexos ou material fornecido pelo mantenedor os nove capítulos completos identificados inequivocamente como UBS5, com condições de uso/publicação verificadas. Então conferir versículos, títulos, remissões, sinais críticos, diacríticos, pontuação, paragrafação e variantes; só depois incorporar nove módulos, atualizar o manifesto via gerador, validar, commitar, publicar e realizar testes reais no Vercel.
- Não foi demonstrada a inexistência absoluta da fonte UBS5; foi constatada a **não recuperação** de fonte utilizável e verificável nesta execução.

**Situação final do Lote 6: 0/9 recuperados; 0/9 incorporados; bloqueado.**
