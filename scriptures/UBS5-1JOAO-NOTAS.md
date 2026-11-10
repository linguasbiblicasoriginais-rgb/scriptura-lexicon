# UBS5 — Primeira Epístola de João (1–5)

## Proveniência e método

- **Fonte:** `1joao.txt`, transcrição grega fornecida pelo mantenedor em 10/11/2026.
- **Identificador canônico:** `1JN`, conforme o manifesto já estabelecido para as outras edições do Scriptura Lexicon.
- **Destino:** corpus UBS5 do Scriptura Lexicon, segundo identificação do projeto; **sem cotejo independente com a UBS5 impressa nem com seu aparato crítico**.
- **Fidelidade:** preservados todos os caracteres gregos e sinais da transcrição: acentos, espíritos, maiúsculas, pontuação, grafias e distribuição dos trechos poéticos entre os respectivos versículos. Não foram inseridas variantes ou emendas.
- **Separação:** `verses` contém exclusivamente o texto grego numerado; `headings` contém as traduções portuguesas dos títulos editoriais e sua fonte inglesa; `paragraphEnds` indica limites de blocos; `unnumberedPassages` permanece vazio porque todos os trechos gregos sem número próprio são continuações de versículos existentes.
- **Paratexto:** os 13 títulos estão mapeados em `scriptures/UBS5-1JOAO-TITULOS.json`. O cabeçalho grego de página `Ἰωάννου αʹ 3`, antes de 3.1, é registrado em `editorialRunningHeaders`, não transcrito como Escritura.
- **Colação:** para cada capítulo, a concatenação dos versículos foi comparada à transcrição entregue após remoção **somente** dos números dos versículos, dos espaços em branco e do cabeçalho editorial de página identificado. Nenhum caractere do texto bíblico foi substituído ou normalizado.

## Balanço de integridade

- **5 capítulos, 105 versículos**, sem número ausente ou repetido.
- **13 títulos editoriais, 20 finais de bloco**.
- **11 linhas poéticas sem novo número**, associadas aos versículos 2.12–14.
- **1 continuação grega antes de outro número**, conservada em 4.16.
- **12 quebras internas de versículos**.
- **1 cabeçalho de página** separado do conteúdo bíblico.
- **9797 caracteres não brancos** preservados (texto grego e pontuação).

| Capítulo | Versículos | Títulos | Finais de bloco | Linhas sem marcador | Prefixos | Quebras internas |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 10 | 2 | 2 | 0 | 0 | 0 |
| 2 | 29 | 4 | 6 | 11 | 0 | 11 |
| 3 | 24 | 2 | 4 | 0 | 0 | 0 |
| 4 | 21 | 2 | 3 | 0 | 1 | 1 |
| 5 | 21 | 3 | 5 | 0 | 0 | 0 |
| **Total** | **105** | **13** | **20** | **11** | **1** | **12** |

## Particularidades textuais

1. **1Jo 1.1–4:** abertura com `Ὃ ἦν ἀπ᾽ ἀρχῆς`; foram preservadas as pausas e os travessões da transcrição.
2. **1Jo 2.12–14:** onze linhas poéticas sem número próprio foram vinculadas aos respectivos versículos: uma ao 12, três ao 13 e sete ao 14, conservando as quebras internas e a sequência de `γράφω` / `ἔγραψα`.
3. **1Jo 2.22:** a construção da fonte `ὁ ἀρνούμενος ὅτι Ἰησοῦς οὐκ ἔστιν ὁ Χριστός;` foi mantida literalmente, sem remoção do `οὐκ` ou substituição por outras leituras.
4. **1Jo 2.28–3.3:** o título `Children of God` começa em 2.28 e sua temática prossegue no capítulo 3, que **não recebe título editorial artificial** na abertura.
5. **1Jo 3.1:** a linha `Ἰωάννου αʹ 3` é um cabeçalho de página da transcrição, não versículo. Foi excluída apenas do corpo bíblico, mas documentada em metadados e neste relatório. O versículo 3.1 inicia-se por `ἴδετε`, grafia mantida como recebida.
6. **1Jo 4.16–17:** o parágrafo `Ὁ θεὸς ἀγάπη ἐστίν...` aparece no início de uma linha que também contém o marcador 17. Esse segmento foi anexado ao fim de **4.16**, com quebra interna, e não ao versículo 17.
7. **1Jo 5.7–8:** mantidos os versículos na forma curta da transcrição, sem acrescentar o chamado *Comma Johanneum*, ausente da fonte.
8. **1Jo 5.20–21:** a epístola termina em `Τεκνία, φυλάξατε ἑαυτὰ ἀπὸ τῶν εἰδώλων.`, sem `ἀμήν` acrescentado.

## Limites de certificação

Esta auditoria estabelece fidelidade **à transcrição fornecida**, não correspondência independente com a UBS5 impressa. Não foi examinado o aparato crítico nem realizada inspeção visual no navegador. Publicação somente na branch `chat-gpt-escrituras`, sem merge.
