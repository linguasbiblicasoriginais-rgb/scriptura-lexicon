# UBS5 — Epístola de Tiago (1–5)

## Proveniência e critérios

- **Fonte:** transcrição grega entregue no arquivo `tiago.txt`, em 10/11/2026.
- **Identificação canônica:** `JAS`, compatível com o manifesto das demais edições bíblicas do Scriptura Lexicon.
- **Edição de destino:** UBS5, conforme identificação adotada pelo projeto; **sem cotejo independente com a edição UBS5 impressa ou com seu aparato crítico**.
- **Integridade:** preservados caracteres gregos, acentos, espíritos, capitalização, pontuação, colchetes críticos e ordem das palavras, sem emendas baseadas em outras edições.
- **Camadas editoriais:** `verses` contém somente o texto grego; `headings` armazena os títulos editoriais traduzidos e os títulos ingleses de origem; `paragraphEnds` marca os finais dos blocos observados; `unnumberedPassages` é vazio porque todos os segmentos gregos estão associados a versículos numerados.
- **Títulos:** 14 títulos editoriais, listados no mapa `scriptures/UBS5-TIAGO-TITULOS.json`, sem serem misturados ao texto bíblico.
- **Colação interna:** os versículos foram reunidos, capítulo a capítulo, e comparados à transcrição original depois da remoção **apenas** dos números dos versículos e dos espaços em branco; não houve normalização ou exclusão de pontuação, colchetes ou caracteres gregos.

## Estatísticas de integridade

- **5 capítulos e 108 versículos**; nenhum número ausente ou repetido.
- **14 títulos editoriais**, **22 finais de bloco**.
- **2 linhas gregas sem novo marcador**, **1 continuação grega antes de outro número**; todas vinculadas ao versículo que as antecede.
- **3 quebras internas de versículos**, preservadas nos módulos `verses`.
- **9119 caracteres não brancos** do texto grego, incluindo sinais críticos e pontuação.

| Capítulo | Versículos | Títulos | Finais de bloco | Quebras internas |
|---:|---:|---:|---:|---:|
| 1 | 27 | 5 | 8 | 0 |
| 2 | 26 | 2 | 4 | 0 |
| 3 | 18 | 2 | 2 | 1 |
| 4 | 17 | 3 | 3 | 2 |
| 5 | 20 | 2 | 5 | 0 |
| **Total** | **108** | **14** | **22** | **3** |

## Particularidades textuais e paratextuais

1. **Tg 1.1:** a saudação inicial integra um único versículo, conforme a fonte. A versão grega começa por `Ἰάκωβος`, preservado sem transliteração no corpo bíblico.
2. **Tg 1.19:** o título inglês `Hearing and Doing The Word` foi conservado literalmente como `sourceTitle`, com tradução editorial `Ouvir e praticar a Palavra`, sem alteração do grego.
3. **Tg 2.14–26:** a seção `Faith and Works` foi traduzida como `Fé e obras`; não foi acrescentada nenhuma interpretação teológica ao texto original.
4. **Tg 3.5:** a frase `Ἰδοὺ ἡλίκον πῦρ ἡλίκην ὕλην ἀνάπτει.` aparece antes do número do versículo 6, em linha seguinte, e foi corretamente associada a **3.5**, conservando a quebra interna. O texto de 3.6 inicia por `καὶ ἡ γλῶσσα πῦρ.`.
5. **Tg 4.6:** a citação `Ὁ θεὸς ὑπερηφάνοις ἀντιτάσσεται, / ταπεινοῖς δὲ δίδωσιν χάριν.` ocupa duas linhas gregas sem nova numeração. Ambas foram conservadas no **mesmo versículo 4.6** e com quebras internas.
6. **Tg 5.7:** a seção editorial `Patience and Prayer` começa antes de 5.7, não antes de 5.1.
7. **Tg 5.14–16:** preservadas as construções relativas à oração dos presbíteros e à unção com azeite, inclusive `ἀλείψαντες αὐτὸν ἐλαίῳ`. Nenhuma harmonização doutrinária ou editorial foi introduzida.
8. **Tg 5.19–20:** a conclusão da epístola termina em `καλύψει πλῆθος ἁμαρτιῶν.`, sem acréscimo de saudação, doxologia ou `ἀμήν`.

## Limites da auditoria

A colação demonstra concordância com a **transcrição entregue**, não conformidade independente com a edição UBS5 impressa. Não houve exame de aparato crítico nem teste de apresentação visual no navegador. A publicação foi feita somente na branch `chat-gpt-escrituras`, sem merge.
