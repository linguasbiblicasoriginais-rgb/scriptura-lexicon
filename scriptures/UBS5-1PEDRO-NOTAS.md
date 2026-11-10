# UBS5 — Primeira Epístola de Pedro (1–5)

## Procedência e método filológico

- **Fonte:** transcrição grega fornecida pelo mantenedor em `1pedro.txt`, em 10/11/2026.
- **Identificador canônico:** `1PE`, conforme as outras edições do Scriptura Lexicon.
- **Edição de destino:** corpus UBS5, segundo identificação adotada pelo projeto; **sem cotejo independente com a UBS5 impressa nem seu aparato crítico**.
- **Fidelidade:** conservadas integralmente as palavras gregas, acentos, espíritos, maiúsculas, pontuação, diacríticos, marcadores de texto crítico e ordenação. Não se substituíram leituras por outras tradições textuais.
- **Camadas:** `verses` contém apenas o grego; `headings` contém os títulos em português e os originais ingleses; `paragraphEnds` indica o fim de blocos; `unnumberedPassages` é vazio, pois nenhuma linha grega é passagem autônoma fora de versículo.
- **Paratexto:** 12 títulos editoriais traduzidos, listados em `scriptures/UBS5-1PEDRO-TITULOS.json`, sem inserção no corpo grego.
- **Colação interna:** em cada capítulo, o texto grego estruturado foi comparado à transcrição de origem após remover **somente** os indicadores numéricos de versículos e os espaços em branco. A comparação não normalizou caracteres gregos, diacríticos, pontuação ou sinais de crítica textual.

## Balanço de integridade

- **5 capítulos, 105 versículos**, sem lacunas ou números duplicados.
- **12 títulos editoriais, 24 finais de bloco**.
- **26 linhas gregas sem marcador** vinculadas ao versículo precedente; **0 prefixos não numerados antes de outros marcadores**.
- **26 quebras internas de versículos** mantidas nos módulos.
- **9276 caracteres não brancos** do grego e da pontuação preservados.

| Capítulo | Versículos | Títulos | Finais de bloco | Linhas sem marcador | Quebras internas |
|---:|---:|---:|---:|---:|---:|
| 1 | 25 | 3 | 6 | 5 | 5 |
| 2 | 25 | 3 | 6 | 12 | 12 |
| 3 | 22 | 2 | 4 | 6 | 6 |
| 4 | 19 | 2 | 4 | 1 | 1 |
| 5 | 14 | 2 | 4 | 2 | 2 |
| **Total** | **105** | **12** | **24** | **26** | **26** |

## Particularidades textuais auditadas

1. **1Pe 1.24–25:** a citação de Isaías 40 está distribuída entre 1.24 e 1.25, com quatro linhas gregas sem marcador em 1.24 e uma continuação não numerada em 1.25: `τοῦτο δέ ἐστιν τὸ ῥῆμα τὸ εὐαγγελισθὲν εἰς ὑμᾶς.`. Não foi criado versículo adicional.
2. **1Pe 2.6–8:** todas as linhas poéticas que citam as Escrituras foram integradas aos versículos corretos. Em **2.8**, o texto começa exatamente por `καὶ`, conforme a linha de origem `8καὶ`; `οἳ προσκόπτουσιν...` integra o mesmo versículo 8, e não o versículo 9.
3. **1Pe 2.9–10:** preservados a enumeração sobre o povo santo e os quatro versos citacionais de 2.10, sem colapsar os trechos entre versículos.
4. **1Pe 2.22:** o verso sobre a ausência de engano na boca de Cristo constitui uma continuação poética de 2.22, mantida antes de 2.23.
5. **1Pe 3.10–12:** a citação dos Salmos foi preservada nas linhas gregas vinculadas aos respectivos números de versículos, inclusive as seis linhas não numeradas.
6. **1Pe 3.18–22:** o texto relativo aos espíritos em prisão, ao dilúvio e ao batismo permaneceu literalmente como na transcrição, sem inserção de harmonizações ou interpretação no corpo grego.
7. **1Pe 4.18:** `ὁ ἀσεβὴς καὶ ἁμαρτωλὸς ποῦ φανεῖται;` é continuação do versículo 18, não um versículo independente.
8. **1Pe 5.5:** duas linhas citacionais de Provérbios 3.34, começando por `Ὁ θεὸς ὑπερηφάνοις ἀντιτάσσεται`, continuam o versículo 5, com suas quebras preservadas.
9. **1Pe 5.12–14:** `Final Greetings` começa antes do versículo 12 e foi traduzido como `Saudações finais`. O último versículo termina exatamente em `εἰρήνη ὑμῖν πᾶσιν τοῖς ἐν Χριστῷ.`, sem acréscimo de `ἀμήν`.

## Limites da certificação

A auditoria verifica fidelidade **à transcrição fornecida**, não correspondência independente à UBS5 impressa. Não houve inspeção do aparato crítico ou teste visual no navegador. Publicação exclusivamente na branch `chat-gpt-escrituras`, sem merge.
