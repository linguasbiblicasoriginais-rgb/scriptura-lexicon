# Scriptura Lexicon — Lote 7: recuperação documental consolidada da UBS5 (Mateus 2–28)

**Data:** 10/11/2026 (America/Sao_Paulo)
**Branch autorizada:** `chat-gpt-escrituras`
**HEAD-base comprovado imediatamente antes do registro:** `663bf2f810c614604153d31ca4bfdde892e450cb`
**Estado:** INVESTIGADO — BLOQUEADO (não recuperada fonte UBS5 comprovada para o intervalo)
**Escopo real:** 27 capítulos ausentes da UBS5, `MAT.2` a `MAT.28`; os Lotes 4, 5 e 6 cobriram, respectivamente, 2–10, 11–19 e 20–28. O Lote 7 não inventa um capítulo 29.
**Nova incorporação:** 0/27 capítulos. **Colação filológica de novos conteúdos:** 0/27. **Integração de novos capítulos:** 0/27.

## 1. Exigência de proveniência

Somente receber e publicar a transcrição integral **explicitamente identificada como UBS5** pelo mantenedor, com utilização/publicação autorizada, e após cotejo dos limites de capítulo/versículo, grafia, pontuação, diacríticos, colchetes, notas e paratextos.
É proibido preencher lacunas com NA28, SBLGNT, TR, Vulgata, transcrições genéricas ou inferências baseadas na semelhança dos textos.

## 2. Histórico e Biblioteca

- Recuperação contextual de conversas: em **22/10/2026**, foi fornecido especificamente Mateus 1 da UBS5. O commit de incorporação foi `7d933c7bff57566e4bff19230a9d83f47eb67fce`. Seu módulo contém 25 versículos, com ressalva expressa de ausência de cotejo independente com a impressão.
- Biblioteca: pesquisas por UBS5, Mateus/Matthew, *The Greek New Testament*, títulos e transcrições em grego não revelaram arquivo com conteúdo completo e procedência comprovadamente UBS5 para Mateus 2–28. Encontrou-se o arquivo `Texto colado(20261104-183335).txt`, com Mateus 1–28, cujo início declara literalmente: **“Quero continuar a incorporação do NA28”**. Logo, esse envio corresponde ao corpus NA28 e não pode ser reutilizado como UBS5.
- Outros arquivos `Texto colado(...)` encontrados pertencem a livros diferentes (por exemplo, Gálatas, Filipenses, 2 Coríntios e Atos) ou a materiais não pertinentes. O léxico BDAG e referências à UBS no material bibliográfico não são transcrições do Novo Testamento UBS5.
- Consulta suplementar ao Google Drive conectado: pesquisas `UBS5` e `Mateus` retornaram zero arquivos; `Greek New Testament` encontrou somente documentos sobre o projeto/léxicos; `Matthew` retornou `Livreto.pdf` sem identificação editorial UBS5, insuficiente como fonte de texto recuperada. Nenhum documento foi convertido em fonte UBS5 com base apenas em palavras de pesquisa.
- Não se afirma que o mantenedor jamais enviou a fonte: apenas que **não foi recuperado documento verificável** nos recursos acessíveis nesta execução.

## 3. GitHub: inventário, branches e histórico

- Repositório: `linguasbiblicasoriginais-rgb/scriptura-lexicon`.
- Árvore recursiva completa da branch `chat-gpt-escrituras`: **9.486 entradas, não truncada**. Existe `scriptures/texts/ubs5-matthew-1.js` e não existem os 27 caminhos `scriptures/texts/ubs5-matthew-2.js` a `...-28.js`.
- Históricos Git de `ubs5-matthew-2.js` e `ubs5-matthew-28.js` na branch consultada retornaram zero commits. O histórico textual existente de Mateus UBS5 aponta para o capítulo 1.
- Árvores históricas adicionais consultadas: `20261022` (3.057 entradas), `20261103` (8.843), `main` (9.530), `chat-gpt-commits` (9.530) e `chat-gpt-escrituras` (9.486). Em todas, sob nomes de arquivo UBS5 de Mateus, apenas o capítulo 1 foi encontrado; arquivos de Mateus NA28 e SBLGNT foram reconhecidos como outras edições, não substitutos.
- Relatórios anteriores: `scriptures/audits/lote-04-ubs5-mateus-2-a-10.md`, `lote-05-ubs5-mateus-11-a-19.md` e `lote-06-ubs5-mateus-20-a-28.md`, todos com 0/9 novas incorporações em seus respectivos intervalos.
- PR #355 informa também que a auditoria suplementar anterior não localizou fonte específica UBS5 para Mateus 2–28: https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/355 . Este PR é evidência histórica auxiliar, não substitui a consulta de fonte.

## 4. Inventário e produção Vercel (10/11/2026)

- Produção: https://scriptura-lexicon.vercel.app
- `GET /scriptures/critical-coverage.json` → **HTTP 200**, `verification = presença e registro de módulos; não certifica o texto versículo por versículo`.
- UBS5: **233/260** capítulos registrados, **27 faltantes** — exclusivamente `MAT.2–28`. Mateus UBS5: **1/28**.
- NA28: **254/260** capítulos registrados, faltando `1TH.1–5` e `PHM.1`; os 28 capítulos NA28 de Mateus já estão registrados na coleção correta.
- Soma da presença das duas edições: **487/520** capítulos; **33** ausentes. Não é indicador de cotejo textual ou de fidelidade à edição impressa.
- Checagem HTTP direta dos módulos públicos: `ubs5-matthew-1.js` → **200**; `ubs5-matthew-2.js`, `ubs5-matthew-19.js` e `ubs5-matthew-28.js` → **404**. Esses resultados amostrais corroboram o inventário e não constituem teste de novo deploy.
- Manifesto versionado da branch: `UBS5.MAT = ["ubs5-matthew", 1]`; não alterar para `28` sem os módulos reais.

## 5. Indicadores honestos (universo e natureza)

| Indicador | Numerador/denominador | Percentual | Qualificação |
|---|---:|---:|---|
| Fonte UBS5 recuperada neste lote | **0/27** | **0,00%** | Sem documento de procedência comprovada |
| Módulos UBS5 incorporados neste lote | **0/27** | **0,00%** | Nenhum criado |
| Auditoria textual/estrutural de novos capítulos | **0/27** | **0,00%** | Não realizada sem material de fonte |
| Auditoria filológica de novos capítulos | **0/27** | **0,00%** | Não realizada |
| Integração de novos capítulos em branch consolidada | **0/27** | **0,00%** | Não realizada |
| Testes de novo deploy da UBS5 Mateus 2–28 | **0/27** | **0,00%** | Não houve deploy; somente consultas HTTP ao estado prévio |
| Caminhos do lote conferidos na árvore do GitHub | **27/27** | **100% de inspeção de nomes** | Todos os 27 ausentes; não é colação |
| UBS5 — Mateus, presença documental | **1/28** | **3,57%** | Não certifica a fonte impressa |
| UBS5 — NT, presença de módulos em produção | **233/260** | **89,62%** | Não é auditoria filológica |
| NA28 — NT, presença de módulos em produção | **254/260** | **97,69%** | Fonte distinta, não aproveitada no lote |
| Duas edições críticas, presença combinada | **487/520** | **93,65%** | Não é auditoria filológica |

**Outros indicadores do Scriptura Lexicon:** nenhuma barra dos léxicos, da LXX, de UXLC, das Vulgatas, do TR ou do SBLGNT foi incrementada ou recontada nesta execução. Se exibidos, conservar seus números verificados anteriormente com data da medição; valores não consultados novamente têm estado `não verificado nesta rodada`. Não atribuir 100% de auditoria a etapas não executadas.

## 6. Decisão, integridade e desbloqueio

1. **Nenhum** arquivo `ubs5-matthew-2.js` a `ubs5-matthew-28.js` foi criado; não foram alterados textos, módulos NA28/SBLGNT, leitor, manifesto, scripts, métricas geradas, configuração Vercel, `main` ou `chat-gpt-commits`.
2. Este registro documental é a **única alteração autorizada para o Lote 7** até recuperação da fonte. Não há PR, merge ou deploy de corpus vinculado a este lote.
3. Desbloqueio: receber os capítulos 2–28 com indicação explícita da **UBS5** e condições de publicação; conferir integralidade, variantes, sinais críticos, paratextos e eventual divergência com a fonte; incorporar apenas capítulos individualmente autenticados, validar os módulos e o manifesto gerado, publicar com commit confirmado e testar realmente o Vercel.
4. Até então, situação permanente deste lote: **INVESTIGADO E BLOQUEADO — 0/27 recuperados, 0/27 incorporados e nenhum contador de corpus incrementado**.

**Nota metodológica:** a constatação é limitada às conversas, arquivos, Biblioteca, Google Drive conectado, repositório e estado de produção acessíveis nesta rodada. Ausência de recuperação não demonstra inexistência absoluta do documento.