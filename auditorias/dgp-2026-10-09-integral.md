# Auditoria integral do DGP — 9 de outubro de 2026

**Escopo:** os **2.080 verbetes** publicados na branch `chat-gpt-dgp`, HEAD `5f3810a0d285d7d8977659d2adb324bed07ab55c`; inspeção estática e execução isolada dos módulos JavaScript, sem navegador. **Branch exclusiva das correções:** `chat-gpt-correcoes` (HEAD inicial `bf694f4446b43e70b234976afdcdac0bb90f0036`). **Branch de integração:** `chat-gpt-commits`, processo separado. Não alterar `main` (HEAD observado `3e84b68d48fc450358368d406f0519eb8e9410a3`).

## Fonte canônica e metodologia

- Corpus: `aniseferreira/Grc-Por-DigDict`, commit `deb54b426ead447d01ced7534736f3e77be7015b`, `arquivos_xml/01_Alfa.txt.xml`, blob `eec318bb6150b6b2f4422ea4a76383ac0a254de2`.
- Corpus alfa: **7.204** `entryFree`. Escopo publicado analisado: ordinais **1–2080**, 68 lotes.
- Execução dos módulos `dgp.js` + `dgp-batches.js` em ambiente JavaScript isolado, exame de cada `search-row`, `entry-card`, ID, alvo, atributos, conteúdo textual e manifesto `dgp-progress.json`.
- Confronto integral dos **2.080 lemas e definições** com o XML (normalização somente de espaços). A classificação das diferenças separa expansões bibliográficas documentadas e hífens discricionários da fonte de discrepâncias lexicais.
- Confirmação da ordem de carregamento `dgp.js`, `dgp-batches.js`, `dgp-format.js`, `script.js` e ordem das funções de popups, formatação e eventos.

## Integridade estrutural — conjunto inteiro

| Controle | Resultado |
|---|---:|
| Registros publicados examinados | 2.080 |
| Linhas `search-row` | 2.080 |
| Cartões `entry-card` | 2.080 |
| IDs únicos nas linhas / cartões | 2.080 / 2.080 |
| Alvos sem cartão / cartões sem linha | 0 / 0 |
| Lema diferente entre linha e cartão | 0 |
| HTML mal balanceado detectado na estrutura de linha/cartão | 0 |
| Atributos fonte/dicionário, teclado e `hidden` inválidos | 0 |
| Marcação HTML executável suspeita nos registros | 0 |
| Lotes do manifesto com lacunas ou faixas incorretas | 0 (68 conferidos) |
| Links `<a href>` estáticos nos cartões DGP | 0 |
| Popups bibliográficos explícitos nos cartões (antes da renderização) | 112; sem atributos obrigatórios ausentes |
| Definições exatamente iguais ao XML normalizado | 1.982 |
| Definições diferentes apenas por hífen discricionário | 11 |
| Definições diferentes por rubricas de autores/corpora expandidas | 84 |
| Definições diferentes por expansão e hífen discricionário | 1 |
| **Divergências textuais não justificadas pelas duas transformações** | **2** |
| Lemas coincidentes com o XML | 2.077 |
| Lemas divergentes do XML | 3 |
| Busca por **lema completo original** que não encontra a própria linha | 25 |

A ausência do lema completo no `data-search` em 25 linhas (predominantemente iniciais) é uma limitação concreta da busca integral da expressão, não implica que a busca por palavra isolada falhe. Exemplos: ordinais 61–64, 67, 70–71, 74, 80, 95, 122–127, 129–131, 133–134, 136, 138–140. Não foi automaticamente reescrito o índice porque há glossas e convenções editoriais históricas a preservar.

## Desvios lexicais confirmados, com correções nesta branch

1. **#95** `ἀγακλυτός, ή, όν`: o módulo trazia incorretamente `ής` em lugar de `ή` no lema (busca e cartão). Restaurada a leitura do XML.
2. **#124** `ἀγαπήνωρ, ορος`: a indicação `(masc.)` havia sido deslocada da definição para o cabeçalho. Restaurado o lema e o início do texto `(masc.) amável; cortês.`.
3. **#150** `ἄγε`: o começo da definição `e ἄγετε` havia sido incorporado equivocadamente ao cabeçalho. Restaurada a separação canônica `ἄγε` / `e ἄγετε cf. ἄγω.`.

As edições ocorrem na cópia da branch `chat-gpt-correcoes`, que possui os registros até #1630. A branch `chat-gpt-dgp` mantém 2.080 registros e **não foi modificada** nesta auditoria.

## Inventário de abreviaturas e popups — conjunto inteiro

- O registro do módulo contém 132 definições, com **131 chaves únicas**; `at.` está duplicada com a mesma expansão.
- Popups identificados no HTML estático têm atributos obrigatórios. O enriquecimento automático ocorre apenas no navegador e **não foi testado visualmente**.
- Candidatos sem chave DGP no estado analisado: `a.p.` (3 verbetes: 1455, 1489, 1981); `artt.` (4: 1358, 1843, 2012, 2013); `ant.` (2: 1800, 1992); `n.t.` (1: 1992); `plut.` (1: 2052); `subent.` (1: 2040). Não contar esses candidatos como popups renderizados faltantes sem teste DOM.
- Existem ainda abreviações de autores remanescentes em texto simples em verbetes históricos, como `hom.`, `plat.`, `ar.`, `isócr.`, `orf.` e `sept.`. Algumas têm atribuição segura nas regras, outras exigem identificação contextual.
- Nesta correção foram cadastrados **três popups inequívocos**: `n.t.` (Novo Testamento), `plut.` (Plutarco) e `subent.` (subentendido). **Os demais permanecem pendentes**, inclusive `artt.`, que é historicamente ambígua e não deve ser expandida por conjectura.
- A incorporação de novos popups ao registro não demonstra por si só que cada disparador do navegador foi ativado; testar hover/clique/teclado separadamente.

## Validação das correções

- Execução JavaScript dos módulos da branch de correções: aprovada.
- Total nessa branch após mudança: **1.630** linhas / **1.630** cartões, sem IDs duplicados e sem órfãos (a cópia é anterior aos lotes 60–68).
- Comparação com conteúdo anterior da mesma branch: **apenas os ordinais 95, 124 e 150** alterados; três registros bibliográficos acrescentados. Todos os três lemas e definições corrigidos coincidem literalmente com o XML após normalizar espaços.
- O arquivo `lexicons/dgp-batches.js` da branch de correções era um **prefixo exato** do arquivo na branch DGP atual antes das correções. Na integração futura, reconciliar o patch inicial com os verbetes 1631–2080 acrescentados na branch DGP. **Não afirmar ausência de conflito sem simulação real do merge.**
- Não modificar `dgp-progress.json`, não avançar `next_ordinal`, não incluir verbetes de outras fontes.

## Pendências e limitações explícitas

1. Reexecutar os testes de integração após a mesclagem do patch da branch `chat-gpt-correcoes` para `chat-gpt-commits`, preservando os 2.080 cartões do DGP.
2. Tratar os outros candidatos a popup a partir do contexto e das listas oficiais de abreviaturas, sem atribuições incertas; ampliar a inspeção individual em navegador para verificar **todos** os disparadores.
3. Revisar o índice de busca dos 25 lemas completos que não correspondem ao `data-search`; não confundir isso com falha de busca parcial.
4. Revisar tipografia de citações, numerais de acepção e cores com navegador em temas/estados disponíveis; essa verificação não foi executada.
5. Verificar hiperlinks gerados dinamicamente, caso existam: ausência de links `<a>` no HTML inicial não é prova de ausência de links na interface após scripts.
6. Persistir esta auditoria como registro, não como declaração de correção total do corpus. Novas divergências podem aparecer na revisão filológica humana detalhada.

**Proveniência:** apenas GitHub remoto, módulos executados em sandbox isolado e XML no commit fixado. Nenhum commit em outra branch, nenhum PR ou merge nesta rotina.
