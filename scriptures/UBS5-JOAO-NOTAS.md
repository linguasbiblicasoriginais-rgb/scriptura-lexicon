# UBS5 — Evangelho segundo João (1–21)

## Procedência, edição e metodologia

- **Texto-fonte:** transcrição integral do Evangelho segundo João apresentada pelo mantenedor em 09/11/2026, iniciada pelo pedido “Incorpore o texto do Evangelho segundo João”.
- **Edição de destino:** `UBS5`, seguindo a continuidade editorial das incorporações do Evangelho segundo Marcos e do Evangelho segundo Lucas ao Scriptura Lexicon. Esta identificação no projeto **não é equivalente a cotejo independente do grego com exemplar impresso da UBS5**.
- **Separação das camadas:** o grego está exclusivamente em `verses`; os títulos traduzidos e as referências paralelas ficam em `headings`; os blocos são delimitados por `paragraphEnds` e os registros de passagens sem versificação isolada por `unnumberedPassages`.
- **Fidelidade da Fonte:** nenhum vocábulo, sinal diacrítico, colchete crítico, sinal de pontuação ou leitura foi substituído por consulta a NA28, Textus Receptus, outro léxico ou preferência doutrinária. Espaços são normalizados **apenas para a auditoria de correspondência**, e não para emendar leituras.
- **Metadados de tradução:** os 78 títulos de seção ingleses têm correspondência verificável com suas traduções portuguesas, preservadas em `scriptures/UBS5-JOAO-TITULOS.json`.
- **Remissões editoriais:** 23 linhas de referências paralelas produzem 65 destinos estruturados pela infraestrutura `scriptures/ubs5-references.js`, convertendo `Mk`→`Mc`, `Lk`→`Lc` e intervalos tipográficos sem reinterpretação dos destinos; nenhuma remissão implica disponibilidade automática de livros ainda não incorporados.

## Balanço de integridade

- **21 capítulos** e **878 versículos numerados** efetivamente apresentados no texto recebido.
- **879 posições canônicas de numeração**, com ausência exclusiva de **Jo 5.4**.
- **78 títulos de seção** traduzidos, 23 linhas de remissões e 65 destinos.
- **124 finais de bloco**, inferidos de mudanças de linha nos dados recebidos; não representam certificação da diagramação impressa.
- **22 quebras internas de versículo** mantidas para expressões poéticas, citações e blocos de discurso.
- **73933 unidades não brancas** no texto grego recebido, incluindo pontuação e sinais editoriais, sem a numeração versicular.
- **Correspondência integral dos 21 capítulos** após reconstrução do grego capturado e comparação à transcrição original com normalização de espaços apenas para o teste.

## Distribuição por capítulo

| Capítulo | Versículos | Títulos | Finais de bloco | Quebras internas |
|---:|---:|---:|---:|---:|
| 1 | 51 | 5 | 7 | 3 |
| 2 | 25 | 2 | 4 | 0 |
| 3 | 36 | 3 | 4 | 0 |
| 4 | 54 | 2 | 8 | 0 |
| 5 | 46 | 3 | 5 | 1 |
| 6 | 71 | 4 | 8 | 0 |
| 7 | 53 | 7 | 9 | 0 |
| 8 | 59 | 5 | 6 | 0 |
| 9 | 41 | 3 | 6 | 0 |
| 10 | 42 | 3 | 6 | 0 |
| 11 | 57 | 5 | 7 | 0 |
| 12 | 50 | 7 | 12 | 12 |
| 13 | 38 | 3 | 5 | 0 |
| 14 | 31 | 1 | 3 | 0 |
| 15 | 27 | 2 | 4 | 0 |
| 16 | 33 | 3 | 4 | 1 |
| 17 | 26 | 1 | 3 | 0 |
| 18 | 40 | 7 | 6 | 1 |
| 19 | 42 | 4 | 7 | 4 |
| 20 | 31 | 5 | 5 | 0 |
| 21 | 25 | 3 | 5 | 0 |
| **Total** | **878** | **78** | **124** | **22** |

## Questões textuais e editoriais relevantes

1. **Jo 5.4:** a fonte passa diretamente de 5.3 a 5.5. A ausência de 5.4 foi mantida, sem inserir a explicação tradicional sobre o anjo, sem completar artificialmente a numeração e sem permitir que 5.5 fosse atribuído a 5.4.
2. **Jo 7.53–8.11 (perícopa da mulher surpreendida em adultério):** o texto fornecido conserva a passagem inteira, com início marcado por `53⟦ Καὶ ἐπορεύθησαν...` em 7.53 e fecho `...μηκέτι ἁμάρτανε.⟧` em 8.11. Os colchetes duplos críticos foram mantidos em suas posições originais. A passagem **não foi omitida** e tampouco foi promovida silenciosamente a texto sem reserva editorial.
3. **Jo 7.53–8.11, título:** `The Woman Caught in Adultery` foi traduzido por **A mulher surpreendida em adultério** e vinculado a 7.53, a primeira posição da perícope, que continua no capítulo 8. Não se duplicou artificialmente o título em 8.1.
4. **Jo 1.3–4:** mantida a segmentação recebida, em que `ὃ γέγονεν` integra 1.3 e `ἐν αὐτῷ ζωὴ ἦν` inicia 1.4. Não se reordenaram orações segundo outras tradições de pontuação.
5. **Jo 1.18:** preservada a leitura recebida `μονογενὴς θεὸς`, sem substituição por `ὁ μονογενὴς υἱός` ou outra variante. Uma discussão de variantes exigirá aparato crítico independente.
6. **Jo 12.36–37:** a fonte traz o título inglês `The Unbelief of the Jews` após Jo 12.36, seguido de uma frase grega sem novo número, `Ταῦτα ἐλάλησεν Ἰησοῦς, καὶ ἀπελθὼν ἐκρύβη ἀπ᾽ αὐτῶν.`, antes de 12.37. A frase foi mantida **dentro de Jo 12.36** (como continuação do versículo) e o título foi associado à seção iniciada em 12.37; os dados gregos não foram deslocados nem duplicados.
7. **Quebras poéticas e de citação:** preservadas em especial as sequências de Jo 1.23 e Jo 12.13–15, 12.38–40 e outras linhas do texto-fonte, sem invenção de novos versículos.
8. **Títulos ausentes no início de determinados capítulos:** a fonte nem sempre apresenta título junto à abertura do capítulo (p. ex., Jo 2.1 e 13.1). Não foram criadas epígrafes fictícias.

## Integração técnica

- Módulos: `scriptures/texts/ubs5-john-1.js` a `scriptures/texts/ubs5-john-21.js`.
- Registro grego: `window.ScripturaScriptureTexts.UBS5.JHN[chapter]`.
- Títulos: `window.ScripturaScriptureHeadings.UBS5.JHN[chapter]`.
- Blocos: `window.ScripturaScriptureParagraphBreaks.UBS5.JHN[chapter]`.
- Passagens não numeradas independentes: `window.ScripturaScriptureUnnumberedPassages.UBS5.JHN[chapter]` (nenhuma isolada nesta transcrição; as linhas gregas sem numeração são vinculadas a seus versículos).
- Manifesto UBS5: `"MAT":["ubs5-matthew",1]`, `"MRK":["ubs5-mark",16]`, `"LUK":["ubs5-luke",24]`, `"JHN":["ubs5-john",21]`; os corpora NA28 e demais edições não foram modificados.
- Publicação exclusivamente na branch `chat-gpt-escrituras`, pelo PR #352 (em aberto), **sem merge**.

## Escopo dos testes

A auditoria valida a reconstrução fiel da transcrição recebida, a cobertura dos versículos e títulos, o funcionamento sintático dos módulos JS e o registro correto no manifesto. **Não foram realizados:** cotejo independente com UBS5 impressa, consulta sistemática ao aparato crítico, teste visual em navegador real ou certificação de que as separações de parágrafos coincidem com os blocos físicos do exemplar.
