# UBS5 — Epístola de Judas (1)

## Proveniência e método

- **Fonte:** arquivo `judas.txt` fornecido pelo mantenedor em 10/11/2026.
- **Identificador canônico:** `JUD`, já utilizado no manifesto do Scriptura Lexicon para as outras edições.
- **Edição de destino:** corpus UBS5 conforme a identificação adotada pelo projeto; **sem cotejo independente com a UBS5 impressa nem com seu aparato crítico**.
- **Fidelidade:** preservados todos os caracteres gregos, diacríticos, maiúsculas, grafias, pontuação e ordem de palavras; não houve correções baseadas em variantes ou harmonizações com 2 Pedro.
- **Camadas:** `verses` contém somente o grego; `headings` contém os títulos editoriais com traduções e seus originais ingleses; `paragraphEnds` delimita blocos; `unnumberedPassages` é vazio, pois não há segmentos gregos fora de versículos.
- **Referência paralela editorial:** o original `(2 Pe 2.1‑17)`, abaixo de `Judgment on False Teachers`, foi mantido em `headings[1].sourceCrossReference` e em `UBS5-JUDAS-TITULOS.json`, traduzido como `2 Pedro 2.1–17`; **não** faz parte do texto bíblico. A interface do leitor pode requerer suporte específico para exibi-lo.
- **Colação:** a sequência de caracteres gregos reconstruída de todos os 25 versículos corresponde exatamente à fonte, após remoção **somente dos marcadores numéricos e dos espaços em branco**, sem normalização de caracteres, pontuação ou acentuação.

## Resultado da auditoria

- **1 capítulo, 25 versículos**, sem lacunas ou repetições na numeração.
- **4 títulos editoriais**, antes dos versículos **1, 3, 17 e 24**.
- **7 finais de bloco**, após os versículos **2, 4, 7, 13, 16, 23 e 25**.
- **0 linhas gregas não numeradas** e **0 quebras internas de versículo**.
- **1 referência cruzada editorial** separada.
- **2626 caracteres não brancos** do grego confrontados integralmente.

## Particularidades filológicas verificadas

1. **Jd 1–2:** a abertura começa por `Ἰούδας Ἰησοῦ Χριστοῦ δοῦλος`, com as informações sobre Tiago e a saudação de misericórdia, paz e amor preservadas.
2. **Jd 3–4:** o título `Judgment on False Teachers` foi traduzido como `O julgamento dos falsos mestres`; a indicação de texto paralelo `(2 Pe 2.1‑17)` foi conservada como paratexto.
3. **Jd 5:** a redação recebida traz `Ἰησοῦς λαὸν ἐκ γῆς Αἰγύπτου σώσας`. A forma `Ἰησοῦς` foi preservada literalmente, sem harmonização com leituras diferentes.
4. **Jd 9:** a referência a Miguel, o arcanjo, e ao corpo de Moisés permaneceu inalterada. **Jd 14–15:** mantida integralmente a passagem associada a Enoque.
5. **Jd 17–23:** o título `Warnings and Exhortations` foi traduzido como `Advertências e exortações`; a sequência `καὶ οὓς μὲν ἐλεᾶτε διακρινομένους` em 22 e `οὓς δὲ σῴζετε ἐκ πυρὸς ἁρπάζοντες` em 23 não foi reduzida ou substituída.
6. **Jd 24–25:** `Benediction` foi traduzido como `Bênção final`, ancorado antes de 24. A doxologia termina em `εἰς πάντας τοὺς αἰῶνας, ἀμήν.`, com `ἀμήν` integrante da transcrição, diferentemente das epístolas em que não aparece.

## Limites da verificação

A colação certifica a correspondência à **transcrição recebida**, não uma comparação independente com a UBS5 impressa. Não foi examinado o aparato crítico nem testada a apresentação visual no navegador. Publicação restrita à branch `chat-gpt-escrituras`, sem merge.
