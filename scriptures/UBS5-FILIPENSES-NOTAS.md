# UBS5 — Epístola de Paulo aos Filipenses (1–4)

## Fonte e princípios editoriais

- **Fonte:** transcrição grega da Epístola aos Filipenses recebida do mantenedor no arquivo `filipenses.txt`, em 10/11/2026.
- **Edição de destino:** UBS5, conforme atribuição do projeto. **Não foi realizado cotejo independente com a UBS5 impressa nem com seu aparato crítico.**
- **Fidelidade textual:** preservados caracteres gregos, acentos, espíritos, maiúsculas, sinais de pontuação, colchetes editoriais e sequência das palavras. Não foram inseridas leituras de outras edições.
- **Camadas separadas:** `verses` conserva o grego; `headings` registra os títulos editoriais em português e o correspondente inglês; `paragraphEnds` registra os encerramentos de blocos da transcrição; `unnumberedPassages` permanece vazio, pois não foram fornecidas passagens gregas autônomas sem numeração.
- **Paratexto:** 11 títulos editoriais traduzidos e inventariados em `scriptures/UBS5-FILIPENSES-TITULOS.json`. Eles não integram o texto bíblico.
- **Remissões editoriais isoladas:** não há referências paralelas autônomas no arquivo recebido; nenhuma foi adicionada.
- **Colação interna:** a sequência grega reconstruída dos versículos foi confrontada com cada capítulo da transcrição após remoção **exclusiva** dos números de versículos e dos espaços em branco; não houve normalização de pontuação, diacríticos ou colchetes.

## Balanço de integridade

- Capítulos: **4**.
- Versículos: **104**, sem lacunas de numeração.
- Títulos editoriais: **11**.
- Finais de blocos: **19**.
- Quebras internas: **0**; linhas gregas sem novo marcador: **0**.
- Caracteres não brancos do texto grego e dos sinais críticos: **8260**.

| Capítulo | Versículos | Títulos editoriais | Finais de bloco | Quebras internas |
|---:|---:|---:|---:|---:|
| 1 | 30 | 3 | 5 | 0 |
| 2 | 30 | 3 | 4 | 0 |
| 3 | 21 | 2 | 4 | 0 |
| 4 | 23 | 3 | 6 | 0 |
| **Total** | **104** | **11** | **19** | **0** |

## Particularidades textuais e editoriais

1. **Fp 1.23–24:** foram mantidas as leituras sinalizadas por colchetes, como `[γὰρ]` em 1.23 e `[ἐν]` em 1.24, sem decidir ou harmonizar variantes.
2. **Fp 2.5–11:** a seção sobre a humilhação e exaltação de Cristo conserva a segmentação dos versículos e a disposição em prosa contínua da transcrição, sem introdução artificial de versos poéticos ou títulos intermediários.
3. **Fp 3.7 e 3.12:** preservados os colchetes de `[ἀλλ᾽]` e `[Ἰησοῦ]`, respectivamente.
4. **Fp 4.1–2:** o capítulo inicia com o versículo 1 ainda sem cabeçalho. `Exhortations` foi traduzido por `Exortações` e ancorado em `beforeVerse: 2`, exatamente conforme a fonte.
5. **Fp 4.23:** a fonte termina em `μετὰ τοῦ πνεύματος ὑμῶν.` Não foi acrescentado `ἀμήν` nem um versículo de outra tradição.

## Limites da certificação

O cotejo comprova a integridade da **incorporação da transcrição fornecida**, não a concordância independente com a edição UBS5 impressa. Não houve exame do aparato crítico ou teste visual da interface em navegador. A operação atualiza somente `chat-gpt-escrituras`, sem merge.
