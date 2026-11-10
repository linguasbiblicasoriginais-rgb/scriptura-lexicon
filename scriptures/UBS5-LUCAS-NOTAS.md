# UBS5 — Evangelho segundo Lucas (capítulos 1–24)

## Proveniência e delimitação das camadas

- **Fonte primária do trabalho:** transcrição integral em grego enviada pelo mantenedor em 09/11/2026, sob o pedido “Incorpore o texto do Evangelho segundo Lucas”.
- **Edição de destino no projeto:** UBS5, em continuidade à incorporação anterior de Marcos; essa identificação decorre do contexto editorial do projeto e **não substitui uma identificação/cotejo independente da UBS5 impressa**.
- **Camada Fonte:** todas as sequências gregas por capítulo e versículo, inclusive acentos, pontuação, sinais críticos e quebras de linha internas; nenhum trecho foi recuperado da NA28, do Textus Receptus ou de outras fontes.
- **Camada Editorial:** 146 títulos de seções ingleses traduzidos para português e vinculados à abertura da passagem; léxico inglês → português preservado em `scriptures/UBS5-LUCAS-TITULOS.json` para rastreabilidade.
- **Remissões:** 107 linhas de referências paralelas desdobradas em 216 destinos estruturados pela infraestrutura preexistente `scriptures/ubs5-references.js`; intervalos compostos, capítulos elididos e a/b preservados. O texto do destino só é exibido quando o corpus correspondente está efetivamente disponível; não se presume que todas as remissões apontem a livros já incorporados.
- **Limitações declaradas:** não houve cotejo do texto fornecido com edição impressa, aparato crítico completo ou teste visual em navegador real. Auditoria compara a transcrição enviada com o resultado gerado e os objetos de código publicados.

## Resumo de integridade

- Capítulos: **24**.
- Versículos numerados efetivamente presentes: **1149**; de 1.151 posições convencionais, faltam apenas **Lc 17.36 e Lc 23.17** na transcrição recebida.
- Títulos traduzidos: **146**; remissões paralelas: **216**.
- Finais de bloco/linha de texto: **223**, inferidos da apresentação em linhas da fonte, sem garantia de equivalência estrita à diagramação impressa.
- Quebras de linha internas no conteúdo dos versículos: **81**; essas quebras foram mantidas no conteúdo das entradas.
- Unidades de código não brancas no texto grego transcrito (incluindo pontuação e sinais editoriais): **98900**, sem incluir a numeração versicular.
- Auditoria de reconstrução: **24 de 24 capítulos** com correspondência integral ao texto grego recebido, após retirar os numerais e normalizar espaços *somente na comparação*.

## Distribuição por capítulo

| Capítulo | Versículos numerados | Títulos | Finais de bloco | Quebras internas |
|---:|---:|---:|---:|---:|
| 1 | 80 | 7 | 29 | 19 |
| 2 | 52 | 5 | 15 | 3 |
| 3 | 38 | 3 | 7 | 6 |
| 4 | 44 | 6 | 12 | 11 |
| 5 | 39 | 5 | 5 | 0 |
| 6 | 49 | 9 | 14 | 9 |
| 7 | 50 | 4 | 7 | 4 |
| 8 | 56 | 9 | 11 | 3 |
| 9 | 62 | 12 | 11 | 1 |
| 10 | 42 | 6 | 7 | 2 |
| 11 | 54 | 7 | 11 | 4 |
| 12 | 59 | 9 | 11 | 5 |
| 13 | 35 | 6 | 7 | 0 |
| 14 | 35 | 5 | 5 | 0 |
| 15 | 32 | 3 | 4 | 0 |
| 16 | 31 | 3 | 3 | 0 |
| 17 | 36 | 3 | 5 | 0 |
| 18 | 43 | 6 | 7 | 0 |
| 19 | 48 | 4 | 8 | 6 |
| 20 | 47 | 6 | 9 | 4 |
| 21 | 38 | 7 | 8 | 0 |
| 22 | 71 | 11 | 11 | 0 |
| 23 | 55 | 6 | 10 | 4 |
| 24 | 53 | 4 | 6 | 0 |
| **Total** | **1149** | **146** | **223** | **81** |

## Pontos filológicos e editoriais especiais

1. **Lc 17.36 e 23.17:** a transcrição não possui esses versículos. Não se criaram chaves fictícias ou textos suplementares para “preencher” numeração; a ausência é deliberadamente registrada.
2. **Lc 22.43–44:** preservado o enquadramento crítico completo `⟦ὤφθη ... ἐνισχύων αὐτόν.` em 22.43 e `καὶ γενόμενος ... τὴν γῆν.⟧` em 22.44. Os dois numerais são mantidos.
3. **Lc 23.34:** preservada a abertura e o fechamento `⟦ὁ δὲ Ἰησοῦς ... οὐ γὰρ οἴδασιν τί ποιοῦσιν.⟧` dentro do próprio versículo 34, sem transportar esses marcadores ao texto subsequente.
4. **Lc 23.56–24.1:** a fonte coloca o título inglês `The Resurrection of Jesus` e as referências paralelas entre as duas sentenças de Lc 23.56, antes do número do capítulo 24. A frase `Καὶ τὸ μὲν σάββατον ἡσύχασαν κατὰ τὴν ἐντολήν.` foi rigorosamente vinculada a Lc 23.56; o título e as remissões foram apresentados na abertura de Lc 24.1, sem deslocar palavras gregas para o capítulo seguinte.
5. **Lc 9.43–44:** após o título `Jesus Again Foretells His Death`, a frase não numerada `Πάντων δὲ θαυμαζόντων ... τοὺς μαθητὰς αὐτοῦ,` integra Lc 9.43, antes de Lc 9.44. A frase foi conservada em 9.43, embora o cabeçalho de seção passe a anteceder 9.44 na interface por critérios de versificação.
6. **Lc 11.29:** o título da fonte `The Demand for a Sing` parece conter lapso inglês por `The Demand for a Sign`. A grafia original foi guardada em `sourceTitle` e no catálogo de correspondências; o título em português é **A exigência de um sinal**, em consonância com o conteúdo grego `σημεῖον`. Não houve alteração do texto-fonte.
7. **Hinos e poesia:** foram preservadas as quebras internas de versículos em cânticos, citações e blocos poéticos, incluindo os cânticos de Maria, Zacarias e Simeão. A organização do leitor não reescreve nem resegmenta os versículos gregos.
8. **Remissões paralelas múltiplas:** por exemplo, `Mt 26.1–5, 14–16` ou `Mt 8.14–17; Mc 1.29–34` são representadas em destinos distintos, sem unir artificialmente intervalos separados.

## Incorporação e integração técnica

- Módulos: `scriptures/texts/ubs5-luke-1.js` até `ubs5-luke-24.js`.
- Registro do texto: `window.ScripturaScriptureTexts.UBS5.LUK[chapter]`.
- Títulos: `window.ScripturaScriptureHeadings.UBS5.LUK[chapter]`.
- Finais de bloco: `window.ScripturaScriptureParagraphBreaks.UBS5.LUK[chapter]`.
- Passagens não numeradas: `window.ScripturaScriptureUnnumberedPassages.UBS5.LUK[chapter]` (sem passagens isoladas não numeradas nesta fonte, pois as linhas sem número foram ligadas aos respectivos versículos).
- Manifesto: `"UBS5":{"MAT":["ubs5-matthew",1],"MRK":["ubs5-mark",16],"LUK":["ubs5-luke",24]}`.
- Isolamento de edições: os dados `NA28` preexistentes não foram modificados.
- Publicação em `chat-gpt-escrituras`, preservando aberto o PR #352, **sem merge**.
