# UBS5 — Primeira Epístola de Paulo a Timóteo (1–6)

## Proveniência e protocolo filológico

- **Fonte:** `1timoteo.txt`, transcrição grega integral fornecida pelo mantenedor em 10/11/2026.
- **Edição de destino:** corpus UBS5 do Scriptura Lexicon, conforme identificação estabelecida no projeto; **sem cotejo independente com a UBS5 impressa nem com seu aparato crítico**.
- **Fidelidade:** preservados caracteres gregos, acentos, espíritos, capitalização, pontuação, parênteses, colchetes editoriais e ordem recebida; nenhuma emenda a partir de NA28, TR, SBLGNT ou outros textos.
- **Camadas distintas:** `verses` contém texto grego; `headings` contém cabeçalhos editoriais em português e seus originais ingleses; `paragraphEnds` conserva finais dos blocos visíveis na fonte; `unnumberedPassages` fica vazio, pois nenhuma linha grega constitui passagem autônoma fora dos versículos.
- **Títulos editoriais:** 12 títulos traduzidos em `scriptures/UBS5-1TIMOTEO-TITULOS.json`. O erro tipográfico da fonte `Warning agaisnt False Doctrine` foi preservado no campo `sourceTitle` e traduzido corretamente.
- **Cotejo mecânico:** cada capítulo foi reconstruído dos versículos, e o resultado foi comparado à transcrição após remoção **somente** dos indicadores numéricos de versículo e dos espaços em branco. Não foram normalizados caracteres gregos ou sinais críticos.

## Balanço

- **6 capítulos**, **113 versículos** numerados, sem lacunas.
- **12 títulos editoriais**, **23 finais de bloco**.
- **9 quebras internas de versículos**: 6 na citação de 3.16, 1 em 3.1, 1 em 6.2 e 1 em 6.21.
- **7 linhas gregas sem numeração própria** e **2 continuações gregas antepostas a outro marcador numérico**; todos os segmentos estão vinculados aos versículos correspondentes.
- **9127 caracteres não brancos** preservados no texto grego.

| Capítulo | Versículos | Títulos | Finais de bloco | Quebras internas |
|---:|---:|---:|---:|---:|
| 1 | 20 | 3 | 5 | 0 |
| 2 | 15 | 1 | 2 | 0 |
| 3 | 16 | 3 | 4 | 7 |
| 4 | 16 | 2 | 3 | 0 |
| 5 | 25 | 1 | 4 | 0 |
| 6 | 21 | 2 | 5 | 2 |
| **Total** | **113** | **12** | **23** | **9** |

## Casos especiais

1. **1Tm 3.1:** `πιστὸς ὁ λόγος.` antecede o título editorial `Qualifications of Bishops`; a continuação `Εἴ τις ἐπισκοπῆς ὀρέγεται, καλοῦ ἔργου ἐπιθυμεῖ.` ainda pertence ao **mesmo versículo 3.1**, e não a 3.2. Preservada com quebra interna e `sourcePlacement: "intraVerse"`.
2. **1Tm 3.5:** o número do versículo é seguido imediatamente de parêntese, `5(εἰ ...`; o parêntese pertence ao texto e foi preservado. A segmentação reconhece normalmente os 16 versículos do capítulo 3.
3. **1Tm 3.16:** a declaração de fé contém seis linhas gregas poéticas depois da introdução `μυστήριον·`, e todas integram **3.16**, com quebras de linha conservadas. Foi mantida a leitura `Ὃς ἐφανερώθη ἐν σαρκί`, sem harmonizar com outras tradições.
4. **1Tm 6.2:** o título editorial `False Teaching and True Wealth` ocorre **dentro do versículo**; a frase subsequente `Ταῦτα δίδασκε καὶ παρακάλει.` integra **6.2**, antes de 6.3. Registrada com quebra interna e metadados posicionais.
5. **1Tm 6.21:** `Ἡ χάρις μεθ᾽ ὑμῶν.` vem em linha isolada, sem novo número. Foi vinculada **ao versículo 21**, preservando-se a saudação final e sem acrescentar `ἀμήν`.
6. **Títulos no interior dos versículos:** os metadados dos títulos em 3.1 e 6.2 guardam `sourcePlacement` e `afterCharacterOffset` para indicar a posição no grego de origem. **Limitação do leitor atual:** o componente de renderização de cabeçalhos trabalha com `beforeVerse`, de modo que não exibe ainda esses títulos precisamente entre duas partes do mesmo versículo. O texto grego integral não sofre perda.

## Limites de certificação

A auditoria garante fidelidade **à transcrição recebida**, não correspondência independente à edição impressa UBS5. Não foram verificados aparato crítico nem apresentação visual final no navegador. A publicação foi realizada exclusivamente na branch `chat-gpt-escrituras`, sem merge.
