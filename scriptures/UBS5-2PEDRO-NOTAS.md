# UBS5 — Segunda Epístola de Pedro (1–3)

## Proveniência e método

- **Fonte:** arquivo `2pedro.txt`, transcrição grega fornecida pelo mantenedor em 10/11/2026.
- **Identificador canônico:** `2PE`, utilizado nas demais edições do Scriptura Lexicon.
- **Edição de destino:** corpus UBS5, conforme identificação adotada pelo projeto; **não houve cotejo independente com o exemplar impresso da UBS5 nem com seu aparato crítico**.
- **Fidelidade:** conservados os caracteres gregos, espíritos, acentos, pontuação, maiúsculas, sinais editoriais e ordem das palavras. O texto grego não foi harmonizado com NA28, TR, SBLGNT ou qualquer outra tradição.
- **Separação de camadas:** `verses` armazena somente o grego; `headings` os títulos editoriais em português e os originais ingleses; `paragraphEnds` guarda os finais dos blocos; `unnumberedPassages` permanece vazio, pois todas as passagens gregas sem novos números pertencem aos versículos indicados.
- **Títulos editoriais:** 5 títulos, mapeados em `scriptures/UBS5-2PEDRO-TITULOS.json`. O paratexto de referência cruzada está registrado separadamente.
- **Colação mecânica:** os caracteres dos versículos reconstituídos foram confrontados, capítulo a capítulo, com a transcrição após remoção **apenas dos indicadores de versículo e dos espaços em branco**. Nenhum caractere grego ou pontuação foi substituído.

## Balanço da incorporação

- **3 capítulos; 61 versículos**, sem lacunas ou duplicações na numeração.
- **5 títulos editoriais; 10 finais de bloco**.
- **3 linhas gregas sem número novo; 1 continuação antes de outro marcador**; todas associadas aos versículos corretos.
- **4 quebras de linha internas de versículos**.
- **1 referência editorial a passagem paralela**, distinta do grego.
- **6188 caracteres não brancos** do texto grego (incluindo sua pontuação).

| Capítulo | Versículos | Títulos | Finais de bloco | Linhas sem número | Prefixos | Quebras internas |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 21 | 3 | 4 | 0 | 0 | 0 |
| 2 | 22 | 1 | 3 | 3 | 1 | 4 |
| 3 | 18 | 1 | 3 | 0 | 0 | 0 |
| **Total** | **61** | **5** | **10** | **3** | **1** | **4** |

## Casos textuais e editoriais

1. **2Pe 1.1:** preservado literalmente `Συμεὼν Πέτρος`, sem substituir `Συμεὼν` por `Σίμων`. Os títulos de 1.1, 1.3 e 1.16 foram preservados em camada separada.
2. **2Pe 2.1:** a linha `(Jude 4‑13)`, logo abaixo de `False Prophets and Teachers`, é **referência editorial** ao paralelo Judas 4–13. Foi mantida com sua redação de origem em `headings[0].sourceCrossReference` e em `UBS5-2PEDRO-TITULOS.json`, com tradução `Judas 4–13`; não integra qualquer versículo. A renderização do leitor pode não exibir esse campo auxiliar sem suporte específico.
3. **2Pe 2.4:** conservada a leitura `σειραῖς ζόφου`, tal como recebida.
4. **2Pe 2.10–11:** a frase `Τολμηταὶ αὐθάδεις δόξας οὐ τρέμουσιν βλασφημοῦντες,` surge em uma nova linha antes do número 11. Está corretamente associada ao **versículo 10**, com quebra interna.
5. **2Pe 2.15:** preservada `Βοσὸρ`, sem correção para outras formas documentadas.
6. **2Pe 2.22:** as linhas `Κύων ἐπιστρέψας ἐπὶ τὸ ἴδιον ἐξέραμα,`, `καί,` e `Ὗς λουσαμένη εἰς κυλισμὸν βορβόρου.` integram **o mesmo versículo 22**, com quebras internas preservadas; inclusive a pontuação incomum de `καί,` foi mantida sem emenda.
7. **2Pe 3.10:** conservada a leitura `οὐχ εὑρεθήσεται`, sem substituição por variantes conhecidas ou conjecturas editoriais.
8. **2Pe 3.15–16:** mantidas as referências às epístolas de Paulo e às demais Escrituras, sem interpretação acrescentada ao texto.
9. **2Pe 3.18:** a obra termina em `αὐτῷ ἡ δόξα καὶ νῦν καὶ εἰς ἡμέραν αἰῶνος.`, sem inclusão de `ἀμήν`.

## Limites da auditoria

Esta auditoria certifica fidelidade **à transcrição entregue**, e não concordância independente com a UBS5 impressa. Não foi examinado o aparato crítico nem realizada inspeção visual final no navegador. Publicação realizada somente na branch `chat-gpt-escrituras`, sem merge.
