# UBS5 — Evangelho segundo Marcos (1–16)

## Procedência, separação editorial e limitações
- Fonte: transcrição disponibilizada pelo mantenedor em `marcos.txt`, em **09/11/2026**, identificada como UBS5.
- **Camada Fonte:** 16 capítulos e 673 versículos numerados efetivamente presentes; não se supriram lacunas a partir da NA28, Textus Receptus nem de qualquer outra edição.
- **Camada editorial:** 97 títulos ingleses da fonte convertidos para português brasileiro, sendo **96 títulos de seções numeradas** e **um título associado ao final breve não numerado**. Correspondências inglês → português preservadas em `scriptures/UBS5-MARCOS-TITULOS.json`.
- Referências paralelas: 90 linhas de remissões (nas seções editoriais) resultam em **189 destinos individualmente navegáveis**, inclusive subintervalos de mesmo capítulo, indicação de segmentos a/b e intervalos entre capítulos.
- **Não realizado:** cotejo independente com o impresso da UBS5, inspeção visual em navegador real ou comparação exaustiva do aparato crítico. A conferência de integridade foi feita contra a transcrição recebida.

## Colação integral
- 673 versículos numerados, 117 marcadores de final de parágrafo/linha e 33 quebras internas de linha nos versículos.
- Uma passagem grega **não numerada**, correspondente ao final breve de Marcos 16, armazenada separadamente dos versículos.
- **58.285 caracteres não brancos**, contabilizando os versículos e o final breve (incluem pontuação e delimitadores editoriais `⟦ ⟧`, não apenas caracteres Unicode classificados como gregos).
- Reconstrução automatizada do texto grego de cada capítulo comparada com todas as linhas gregas da transcrição, removendo somente os numerais versiculares e normalizando espaçamento **exclusivamente para fins de comparação**. Resultado: correspondência integral em 16/16 capítulos.
- Preservados sinais diacríticos, pontuação, capitalização, colchetes críticos, divisões internas de linha e delimitações editoriais.

## Distribuição por capítulo

| Capítulo | Versículos numerados | Títulos de seções | Finais de bloco |
|---:|---:|---:|---:|
| 1 | 45 | 9 | 12 |
| 2 | 28 | 4 | 5 |
| 3 | 35 | 5 | 5 |
| 4 | 41 | 8 | 9 |
| 5 | 43 | 2 | 4 |
| 6 | 56 | 6 | 5 |
| 7 | 36 | 3 | 6 |
| 8 | 38 | 6 | 6 |
| 9 | 48 | 6 | 8 |
| 10 | 52 | 6 | 7 |
| 11 | 32 | 5 | 8 |
| 12 | 44 | 7 | 10 |
| 13 | 37 | 6 | 8 |
| 14 | 72 | 11 | 13 |
| 15 | 46 | 6 | 7 |
| 16 | 20 | 6 | 4 |
| **Total** | **673** | **96** | **117** |

## Numeração e pontos de atenção
- Numeração ausente na fonte: **Mc 7.16; 9.44; 9.46; 11.26; 15.28**. Não se criaram versículos vazios nem se incorporou texto de outras edições.
- **Mc 7.3:** o numeral `3` é seguido imediatamente por um travessão (`3–`) na fonte; o versículo foi corretamente recuperado como `3: "– οἱ γὰρ Φαρισαῖοι..."`, sem omissão de sua numeração ou do sinal editorial.
- **Mc 6.6:** a oração `Καὶ περιῆγεν τὰς κώμας κύκλῳ διδάσκων.` aparece após o título editorial inglês da seção seguinte, mas **antes de Mc 6.7**; foi atribuída ao final de Mc 6.6, sem produzir um versículo adicional.
- **Mc 16.1–8:** preservados como versículos numerados.
- **Final breve de Marcos:** `The Shorter Ending of Mark` → **O final breve de Marcos**, trecho `⟦Πάντα δὲ τὰ παρηγγελμένα ... ἀμήν.⟧`, armazenado em `ScripturaScriptureUnnumberedPassages.UBS5.MRK[16]`, imediatamente antes do v. 9 na interface, sem numeração fictícia.
- **Final longo:** `The Longer Ending of Mark` → **O final longo de Marcos**, título editorial próprio antes de Mc 16.9–20; o título `A aparição a Maria Madalena` também precede o v. 9. O leitor foi ajustado para renderizar **ambos**, sem sobrescrever um pelo outro. Mantidos `⟦` no início de 16.9 e `⟧` no fim de 16.20.
- **Referências parciais:** `Lc 9.37–43a` e `Lc 9.43b–45` preservam os sufixos editoriais; o painel avisa que o versículo 43 é exibido por inteiro, pois o corpus não marca divisões internas a/b.
- **Referências múltiplas:** exemplos `Lc 3.1–9, 15–17`, `Mt 10.1, 5–15`, `Lc 11.14–23; 12.10`, `Jo 18.39–19.16` e `1Co 11.23–25` foram normalizados e cada destino é um elemento independente e clicável.

## Integração
- Arquivos: `scriptures/texts/ubs5-mark-1.js` a `ubs5-mark-16.js`.
- Chave: `window.ScripturaScriptureTexts.UBS5.MRK`, com títulos em `ScripturaScriptureHeadings`, fins de parágrafos em `ScripturaScriptureParagraphBreaks` e o final breve em `ScripturaScriptureUnnumberedPassages`.
- Manifesto: `"UBS5":{"MAT":["ubs5-matthew",1],"MRK":["ubs5-mark",16]}`.
- Aprimoramento dos módulos `scriptures/ubs5-references.js` e `scriptures/reader.js` para remissões compostas, sufixos a/b e títulos múltiplos no mesmo versículo.
- Não interferir nos dados nem nos arquivos da edição NA28. Publicar em `chat-gpt-escrituras`, mantendo o PR aberto e sem merge automático.
