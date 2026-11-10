# UBS5 — Epístola de Paulo a Filemom (1)

## Procedência e método

- **Fonte:** arquivo `filemon.txt` fornecido pelo mantenedor em 10/11/2026.
- **Identificação canônica:** `PHM`, um capítulo. Trata-se da única epístola canônica a Filemom; a expressão «Segunda Epístola» do pedido não designa outro livro.
- **Edição de destino:** UBS5 no projeto Scriptura Lexicon, segundo identificação do mantenedor; **sem cotejo independente com a UBS5 impressa ou com o aparato crítico**.
- **Integridade:** grego, diacríticos, capitalização, pontuação, colchetes críticos, ordem dos vocábulos e divisões de parágrafos foram transcritos sem harmonização com outras edições.
- **Separação de camadas:** `verses` contém somente o texto grego; `headings` reúne títulos editoriais em português com as respectivas formas inglesas; `paragraphEnds` marca os fins de blocos da transcrição; `unnumberedPassages` permanece vazio porque não há grego autônomo sem versículo.
- **Paratexto:** 4 títulos editoriais traduzidos, documentados em `scriptures/UBS5-FILEMOM-TITULOS.json`; não integram a redação do texto bíblico.
- **Colação:** a sequência grega dos 25 versículos foi confrontada com a transcrição original após remoção **exclusivamente** dos algarismos que indicam versículos e dos espaços em branco. Nenhum caráter grego, sinal crítico ou pontuação foi normalizado.

## Balanço de integridade

- **1 capítulo, 25 versículos**, sem lacunas ou duplicações na numeração.
- **4 títulos editoriais** e **6 finais de bloco**.
- **0 quebras internas**, **0 linhas gregas sem versículo**, **0 prefixos não numerados**.
- **1616 caracteres não brancos** preservados, incluindo pontuação e sinais críticos.
- **Âncoras dos títulos editoriais:** 1, 4, 8, 23.

## Particularidades verificadas

1. **Fm 1–3:** saudação dividida em três versículos, conforme a transcrição, sem criar um versículo único.
2. **Fm 4–7:** título `Philemon’s Love and Faith` traduzido como `O amor e a fé de Filemom`, ancorado antes do versículo 4.
3. **Fm 8–22:** o título `Paul Pleads for Onesimus` foi traduzido como `Paulo intercede por Onésimo` e ancorado antes do versículo 8, respeitando a divisão da fonte em três blocos.
4. **Fm 10–11:** preservada a grafia `Ὀνήσιμον` e, no versículo 11, o elemento entre colchetes `[καὶ]`; nenhum desses componentes foi corrigido ou omitido.
5. **Fm 19:** conservada a fórmula autográfica `ἐγὼ Παῦλος ἔγραψα τῇ ἐμῇ χειρί`, sem alterações.
6. **Fm 23–25:** o cabeçalho `Final Greetings` precede o versículo 23; a transcrição termina em `μετὰ τοῦ πνεύματος ὑμῶν.`, sem acréscimo de `ἀμήν`.

## Limitações da validação

A auditoria estabelece fidelidade **à transcrição fornecida**, não conformidade independente com a edição UBS5 impressa. Não houve inspeção do aparato crítico nem teste visual em navegador. Publicação restrita à branch `chat-gpt-escrituras`, sem merge.
