# UBS5 — Apocalipse de João (capítulos 1–22)

## Procedência, identidade e método

- **Fonte:** `apocalipse.txt`, transcrição grega integral fornecida pelo mantenedor em 10/11/2026.
- **Identificador canônico:** `REV`, conforme as demais edições do Scriptura Lexicon. O Apocalipse é tradicionalmente classificado como livro profético-apocalíptico, embora contenha saudação e mensagens a igrejas.
- **Edição de destino:** corpus UBS5, conforme identificação no projeto; **não houve cotejo independente com a UBS5 impressa nem com seu aparato crítico**.
- **Integridade:** caracteres gregos, acentos, espíritos, maiúsculas, pontuação, sinais de crítica textual em colchetes, ordem vocabular e disposição poética foram preservados, sem interpolar outras leituras.
- **Separação de camadas:** `verses` contém o grego bíblico; `headings` guarda somente os títulos editoriais em português e seu original inglês; `paragraphEnds` registra finais de blocos observados na transcrição; `unnumberedPassages` é vazio, pois toda linha poética sem número próprio foi associada a um versículo numerado.
- **Paratexto:** os 36 títulos editoriais estão registrados também em `scriptures/UBS5-APOCALIPSE-TITULOS.json`; seus pontos de inserção estão nas propriedades `beforeVerse`. Não se criou cabeçalho artificial no começo dos capítulos 9, 19 e 22, pois a fonte não os apresenta.
- **Colação mecânica:** para cada capítulo, a concatenação dos versículos foi comparada à transcrição correspondente após remoção **somente** dos marcadores de versículo e dos espaços em branco. Não se normalizaram sinais críticos, acentos, letras gregas ou pontuação.

## Balanço integral

- **22 capítulos; 405 versículos**, numeração sequencial e sem lacunas/duplicações.
- **36 títulos editoriais; 144 finais de bloco**.
- **169 linhas gregas sem novo indicador numérico** (versos poéticos e citações), associadas aos versículos apropriados.
- **11 segmentos gregos que precedem o marcador do versículo seguinte**, ligados ao versículo anterior com quebra interna.
- **180 quebras internas de versículo**, sem criação de versículos espúrios.
- **47174 caracteres não brancos** do texto grego confrontados, incluindo pontuação e colchetes.

| Capítulo | Versículos | Títulos | Finais de bloco | Linhas sem marcador | Prefixos | Quebras internas |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 20 | 2 | 7 | 4 | 1 | 5 |
| 2 | 29 | 4 | 6 | 2 | 4 | 6 |
| 3 | 22 | 3 | 4 | 4 | 2 | 6 |
| 4 | 11 | 1 | 3 | 6 | 1 | 7 |
| 5 | 14 | 1 | 6 | 11 | 0 | 11 |
| 6 | 17 | 1 | 6 | 0 | 0 | 0 |
| 7 | 17 | 2 | 11 | 20 | 0 | 20 |
| 8 | 13 | 2 | 8 | 0 | 0 | 0 |
| 9 | 21 | 0 | 5 | 0 | 0 | 0 |
| 10 | 11 | 1 | 3 | 1 | 1 | 2 |
| 11 | 19 | 2 | 6 | 13 | 0 | 13 |
| 12 | 18 | 1 | 5 | 12 | 0 | 12 |
| 13 | 18 | 1 | 5 | 4 | 0 | 4 |
| 14 | 20 | 3 | 7 | 0 | 0 | 0 |
| 15 | 8 | 1 | 4 | 9 | 0 | 9 |
| 16 | 21 | 1 | 10 | 6 | 0 | 6 |
| 17 | 18 | 1 | 2 | 0 | 1 | 1 |
| 18 | 24 | 1 | 17 | 56 | 1 | 57 |
| 19 | 21 | 2 | 11 | 21 | 0 | 21 |
| 20 | 15 | 3 | 4 | 0 | 0 | 0 |
| 21 | 27 | 2 | 5 | 0 | 0 | 0 |
| 22 | 21 | 1 | 9 | 0 | 0 | 0 |
| **Total** | **405** | **36** | **144** | **169** | **11** | **180** |

## Particularidades textuais auditadas

1. **Ap 1.5–6:** `Τῷ ἀγαπῶντι ἡμᾶς...` integra o versículo 1.5, embora sua linha termine no início de 1.6. O grupo crítico `[τῶν αἰώνων]` permanece em 1.6.
2. **Ap 2–3:** nas mensagens às sete igrejas, as fórmulas iniciadas por `Τάδε λέγει` permanecem no mesmo versículo que seu respectivo destinatário. Títulos editoriais mantidos antes de 2.1, 2.8, 2.12, 2.18, 3.1, 3.7 e 3.14.
3. **Ap 3.18:** preservada `κολλ[ο]ύριον`; **Ap 5.6:** conservado `[ἑπτὰ]`; **Ap 6.8:** conservado `[ὁ]`.
4. **Ap 7.5–8:** a enumeração das tribos, disposta em linhas, foi associada aos versículos 5–8 sem criar números inexistentes. Citações e cânticos de **Ap 4–5, 7, 11, 12 e 15–19** conservam as quebras internas da fonte.
5. **Ap 10.5–7:** `ὃς ἔκτισεν...` permanece no versículo 10.6 até o marcador 7, sem deslocamento. **Ap 11.15–18:** a sétima trombeta e seus cânticos permanecem na sequência versicular original.
6. **Ap 12.18–13.1:** mantida a divisão fornecida: `καὶ ἐστάθη ἐπὶ τὴν ἄμμον τῆς θαλάσσης.` como **12.18**; `Καὶ εἶδον ἐκ τῆς θαλάσσης...` inicia **13.1**. Não se impôs versificação de outra edição.
7. **Ap 13.18:** mantida a expressão escrita `ἑξακόσιοι ἑξήκοντα ἕξ` (666), sem interpolar variantes numéricas.
8. **Ap 17.6–7:** `Καὶ ἐθαύμασα ἰδὼν αὐτὴν θαῦμα μέγα.` pertence a **17.6** e não a 17.7.
9. **Ap 18:** preservadas as 56 linhas poéticas não numeradas, inclusive `[καὶ φυλακὴ παντὸς θηρίου ἀκαθάρτου]` em 18.2, com o enquadramento literal dos colchetes.
10. **Ap 20.4–6:** preservadas as construções relativas aos mil anos e à primeira ressurreição, sem reorganização doutrinária.
11. **Ap 21.4:** mantido o grupo crítico `[ὅτι]`. **Ap 22.14:** a redação fornecida é `οἱ πλύνοντες τὰς στολὰς αὐτῶν`, não tendo sido substituída por outra tradição textual.
12. **Ap 22.21:** o texto termina exatamente em `Ἡ χάρις τοῦ κυρίου Ἰησοῦ μετὰ πάντων.`, sem acrescentar `ἀμήν` que não consta da transcrição.

## Limitações da verificação

A auditoria certifica fidelidade **à transcrição entregue** e correspondência estrutural com os módulos do Scriptura Lexicon; não certifica comparação independente com a UBS5 impressa ou com o aparato crítico. Não houve teste de apresentação visual no navegador. Publicação feita somente na branch `chat-gpt-escrituras`, sem merge.
