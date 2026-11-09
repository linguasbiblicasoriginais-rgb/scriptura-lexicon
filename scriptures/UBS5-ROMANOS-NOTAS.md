# UBS5 — Epístola de Paulo aos Romanos (1–16)

## Fonte e metodologia

- **Fonte:** transcrição grega integral da Epístola de Paulo aos Romanos disponibilizada pelo mantenedor em 09/11/2026, em arquivo de texto colado.
- **Edição de destino:** UBS5 por designação do mantenedor e continuidade do projeto. **Não houve cotejo independente com exemplar impresso da UBS5 nem consulta ao seu aparato crítico.**
- **Integridade do texto:** foram preservados os caracteres gregos, diacríticos, pontuação, capitalização, colchetes e ordem das palavras, sem harmonização com NA28, Textus Receptus ou outras edições.
- **Separação editorial:** `verses` contém o texto grego; `headings` contém títulos editoriais vertidos para português e identificados também pelo original inglês; `paragraphEnds` registra os finais de blocos derivados da transcrição; `unnumberedPassages` permanece vazio.
- **Títulos:** 39 títulos ingleses, com 39 correspondências em português brasileiro, registradas em `scriptures/UBS5-ROMANOS-TITULOS.json`. Os títulos são paratexto, não versículos.
- **Remissões:** nenhuma linha editorial de referências paralelas foi fornecida no anexo; nenhuma remissão foi inventada ou inferida.
- **Auditoria de correspondência:** cada um dos 16 capítulos foi reconstruído a partir de seus versículos e comparado ao grego recebido, descontando apenas os marcadores de numeração e caracteres brancos. Todos os 35563 caracteres não brancos foram preservados na reconstrução.

## Balanço de integridade

- **16 capítulos**, **432 versículos efetivamente numerados**.
- **39 títulos editoriais**, **91 finais de bloco** e **56 quebras internas de versículo**.
- **35563 caracteres não brancos** no texto grego, incluindo pontuação e sinais editoriais.

| Capítulo | Versículos | Títulos | Finais de bloco | Quebras internas |
|---:|---:|---:|---:|---:|
| 1 | 32 | 4 | 5 | 0 |
| 2 | 29 | 2 | 2 | 0 |
| 3 | 31 | 2 | 14 | 8 |
| 4 | 25 | 2 | 5 | 1 |
| 5 | 21 | 2 | 3 | 0 |
| 6 | 23 | 2 | 3 | 0 |
| 7 | 25 | 2 | 3 | 0 |
| 8 | 39 | 3 | 6 | 2 |
| 9 | 33 | 3 | 8 | 12 |
| 10 | 21 | 1 | 6 | 9 |
| 11 | 36 | 3 | 13 | 12 |
| 12 | 21 | 2 | 3 | 0 |
| 13 | 14 | 3 | 3 | 0 |
| 14 | 23 | 2 | 3 | 2 |
| 15 | 33 | 4 | 9 | 10 |
| 16 | 26 | 2 | 5 | 0 |
| **Total** | **432** | **39** | **91** | **56** |

## Observações filológicas e textuais

1. **Rm 16.24:** ausente da transcrição recebida; a sequência numérica passa diretamente do versículo 23 ao 25. Não foi introduzido conteúdo de outra edição.
2. **Rm 16.25–27:** a doxologia vem entre colchetes completos, iniciados antes da numeração do versículo 25 e encerrados após o texto do versículo 27. No módulo de leitura, a abertura `[` foi armazenada no início de `verses[25]` e o fechamento `]` no fim de `verses[27]`, sem deslocamento de caracteres gregos; seu título editorial foi traduzido como **Doxologia**.
3. **Rm 10.8:** o segmento grego sem nova numeração na linha seguinte foi conservado como continuação do versículo 8; não foi criado novo versículo.
4. **Rm 3 e 10:** os capítulos começam sem título editorial antes do primeiro versículo, como ocorre no anexo. Não foram inventados títulos.
5. As leituras, inclusive as de pontos textualmente sensíveis, foram mantidas **exatamente segundo a fonte fornecida**, sem emendas silenciosas.

## Limites da validação

A comparação automatizada atesta a integridade da conversão da transcrição em módulos JavaScript, não sua correspondência independente à edição impressa da UBS5. A segmentação por blocos deriva das linhas recebidas, sem garantir correspondência à paginação física. Não se certificam testes visuais em navegador, consultas ao aparato crítico nem integração em outras branches. Nenhum merge está incluído nesta incorporação.
