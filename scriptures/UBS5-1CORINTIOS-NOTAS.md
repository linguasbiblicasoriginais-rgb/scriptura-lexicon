# UBS5 — Primeira Epístola de Paulo aos Coríntios (1–16)

## Procedência e princípios editoriais

- **Fonte:** transcrição integral do texto grego fornecida pelo mantenedor em `1corintios.txt`, em 09/11/2026.
- **Edição de destino:** UBS5, conforme a atribuição do mantenedor. **Não houve cotejo independente com exemplar impresso da UBS5 ou com seu aparato crítico.**
- **Fidelidade:** caracteres gregos, acentos, espíritos, pontuação, colchetes, travessões e ordem recebidos foram preservados; não houve substituição por NA28, Textus Receptus ou outra edição.
- **Separação das camadas:** os versículos gregos ficam exclusivamente em `verses`; títulos e referências paralelas editoriais em `headings`; quebras de blocos inferidas da transcrição em `paragraphEnds`; `unnumberedPassages` vazio, pois todos os segmentos gregos recebidos pertencem a versículos numerados.
- **Paratexto:** 32 títulos de seção traduzidos para o português brasileiro, com mapa de equivalências em `scriptures/UBS5-1CORINTIOS-TITULOS.json`. Nenhum título se integra ao texto grego.
- **Remissões:** 1 linha de referências paralelas, contendo 3 destinos. Tradução de siglas `Mk`→`Mc` e `Lk`→`Lc`, e de hífen tipográfico para en dash; versículos e intervalos numéricos preservados.
- **Colação:** cada capítulo foi reconstruído dos versículos extraídos; a sequência grega resultante foi confrontada com as linhas de origem mediante remoção **apenas** dos indicadores numéricos e dos espaços, sem normalizar caracteres gregos, colchetes ou pontuação.

## Balanço de integridade

- Capítulos: **16**.
- Versículos numerados: **437**; nenhuma lacuna na sequência numérica de 1Co 1–16.
- Títulos editoriais: **32**.
- Remissões: **1** linha; **3** destinos.
- Finais de bloco: **73**; quebras internas de versículo: **23**.
- Caracteres gregos e sinais editoriais não brancos: **33992**.

| Capítulo | Versículos | Títulos | Finais de bloco | Quebras internas |
|---:|---:|---:|---:|---:|
| 1 | 31 | 3 | 6 | 2 |
| 2 | 16 | 2 | 4 | 5 |
| 3 | 23 | 1 | 5 | 3 |
| 4 | 21 | 1 | 3 | 0 |
| 5 | 13 | 1 | 2 | 0 |
| 6 | 20 | 2 | 2 | 0 |
| 7 | 40 | 3 | 6 | 0 |
| 8 | 13 | 1 | 2 | 0 |
| 9 | 27 | 1 | 4 | 1 |
| 10 | 33 | 2 | 3 | 0 |
| 11 | 34 | 4 | 5 | 0 |
| 12 | 31 | 3 | 4 | 1 |
| 13 | 13 | 0 | 3 | 0 |
| 14 | 40 | 2 | 5 | 6 |
| 15 | 58 | 3 | 11 | 5 |
| 16 | 24 | 3 | 8 | 0 |
| **Total** | **437** | **32** | **73** | **23** |

## Particularidades da transcrição

1. **1Co 7.11:** o indicador `11` é seguido de travessão `–`, e o versículo começa com este sinal. A extração preservou o travessão como parte do texto de 7.11, sem deixar lacuna na versificação.
2. **1Co 9.12; 14.21; 14.33:** linhas gregas iniciadas sem novo número e que se encerram antes de um versículo numerado subsequente foram mantidas como continuação do versículo anterior.
3. **1Co 12.31:** o título editorial inglês `Love` encontra-se **entre duas orações do mesmo versículo 12.31**. O grego da primeira e da segunda oração permanece no campo `verses[31]`, com quebra interna. O título `O amor` foi ancorado em `beforeVerse: 31` com o metadado `placement` descritivo. **Limitação da interface atual:** o leitor mostra o título antes do versículo inteiro, não precisamente entre as duas orações, embora preserve integralmente o grego e a posição original nas notas.
4. **1Co 11.23–26:** a remissão editorial recebida `(Mt 26.26‑29; Mk 14.22‑25; Lk 22.14‑20)` está traduzida como `(Mt 26.26–29; Mc 14.22–25; Lc 22.14–20)`, em camada separada, sem inferir disponibilidade dos textos referenciados.
5. **1Co 13.1:** a fonte inicia o capítulo sem novo título, já que `Love` precede a segunda oração de 12.31. Nenhum título editorial adicional foi inventado para o capítulo 13.
6. Não foram acrescentados versículos não presentes nem leituras de outra edição; as citações poéticas têm suas quebras internas mantidas.

## Escopo da validação

Foram realizados os testes estruturais de numeração, títulos, referências e colação interna da transcrição. **Não foram realizados** cotejo com a UBS5 impressa, revisão independente do aparato crítico, inspeção visual em navegador ou integração em outra branch. Nenhum merge acompanha esta publicação.
