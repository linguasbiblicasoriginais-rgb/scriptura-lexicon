# THAYER — auditoria textual e estrutural retrospectiva de 100 verbetes (0100–0199)

**Data:** 11/10/2026. **Repositório:** `linguasbiblicasoriginais-rgb/scriptura-lexicon`; **branch:** `chat-gpt-thayer`. **HEAD de origem antes da publicação:** `ca33d393ad6963be1e3fcd17365e1c4940d85616`.

## 1. Delimitação

Foram conferidos **100 verbetes consecutivos** de `entry-thayer-0100` (**Ἀδρίας**) a `entry-thayer-0199` (**ἀκριβόω**), conforme o próximo intervalo consignado no checkpoint canônico. Composição: **21** cartões de `lexicons/thayer-batch-002.js` e **79** de `lexicons/thayer-batch-003.js`. Os 100 não se confundem com os intervalos 0200–0299, 0300–0399 e 0400–0499 anteriormente auditados.

**Fonte primária:** Joseph Henry Thayer, *A Greek-English Lexicon of the New Testament*, fac-símile `Thayer (parte 1, Α–Ι).pdf`, páginas impressas **12–24**, examinadas visualmente nesta rodada. **Comparação auxiliar:** `auditorias/thayer-auditoria-filologica-500-inventario.csv`, não homologado independentemente para acepções.

## 2. Parecer

**Auditoria estrutural e textual interna: concluída no intervalo, com 100/100 registros íntegros nos controles exercidos.**  
**Correspondência editorial com o impresso: cinco divergências de estatuto de lema, uma ausência falsa da transcrição auxiliar.**  
**Fidelidade exaustiva dos sentidos, morfologia, regências, variantes e testemunhos: não homologada.**

A verificação textual percorreu individualmente as 100 glosas, descrições, referências, metadados de origem, pesquisa e títulos, mas a inspeção visual das páginas impressas foi dirigida, não uma colação literal de cada linha de todos os artigos. Nenhuma alteração lexical foi feita.

## 3. Auditoria estrutural: medidas efetivas

| Critério | Resultado |
|---|---:|
| Linhas `search-row` | 100/100 |
| Cartões `entry-card` | 100/100 |
| IDs únicos, sequência 0100–0199, sem colisões | 100/100 |
| `data-target` → artigo correspondente | 100/100 |
| Lema na busca e no cabeçalho coincidente | 100/100 |
| Tooltip do lema coincidente | 100/100 |
| Glossa da busca e do tooltip coincidente | 100/100 |
| Rubrica THAYER e dicionário grego coerentes | 100/100 |
| Quatro seções essenciais identificadas | 100/100 |
| Marcadores HTML balanceados, sem tags nos atributos | 100/100 |
| `tabindex="0"` na busca | 100/100 |
| `data-search` contém lema e glossa | 100/100 |
| `data-search` contém texto de referências | 100/100 |
| Cartões com referências textuais não vazias | 100/100 |
| Links clicáveis na seção de referências | 0/100 |
| Páginas impressas individualizadas na seção Fonte | 0/100 |
| Ordem de carregamento dos dois módulos e `script.js` | correta |
| Execução DOM real, acessibilidade, URLs externas | **não realizada** |

## 4. Triagem textual da redação publicada

| Indicador | Valor |
|---|---:|
| Descrições das acepções em um único parágrafo | 100/100 |
| Descrições em múltiplos parágrafos | 0/100 |
| Descrições sem caracteres gregos | 94/100 |
| Descrições com caracteres gregos | 6/100 |
| Comprimento médio do corpo de acepções | 106.83 caracteres |
| Lemas concordantes com inventário auxiliar | 94/100 |
| Divergências confirmadas de estatuto/cabeçalho | 5/100 |
| Falso negativo comprovado da extração auxiliar | 1/100 |

**O fato de todos os 100 parágrafos serem únicos não é um erro automático**, mas aponta forte condensação. O texto português pode funcionar como síntese; não equivale à apresentação integral de subdivisões semânticas e testemunhos de Thayer. A ausência de palavras gregas em 94 descrições afeta a verificabilidade de construções e formas particulares, sem provar incorreção semântica.

## 5. Divergências de estatuto lexical: cinco casos

| Cartão | Lema do site | Artigo da fonte | Página impressa | Constatação |
|---|---|---|---:|---|
| `0139` | αἱρέομαι | **αἱρέω** | 16 | A forma média não constitui aqui cabeçalho independente |
| `0150` | αἰσχρόν | **αἰσχρός** | 17 | Neutro substantivado dentro do artigo adjetival |
| `0154` | αἰσχύνομαι | **αἰσχύνω** | 17 | Emprego médio/passivo tratado sob o verbo de base |
| `0197` | ἀκριβέστατος | **ἀκριβής** | 23–24 | Forma superlativa apresentada no artigo de base |
| `0198` | ἀκριβέστερον | **ἀκριβής** | 23–24 | Comparativo adverbial tratado no mesmo artigo |

**Providência editorial:** preservar as formas encontráveis e seus sentidos úteis, mas não declarar todas como artigos-fonte independentes. A futura normalização poderá usar remissões, formas flexionadas ou entradas editoriais explicitamente marcadas, após decisão lexicográfica e confirmação de testemunhos. Não eliminar cartões automaticamente.

## 6. Falso negativo da transcrição auxiliar

**`entry-thayer-0159` — αἴτιον, p. 18:** o cabeçalho **existe no fac-símile**. A ausência na segmentação auxiliar é problema da extração, e não razão para excluir o cartão nem renomear a fonte.

## 7. Artigos de prioridade filológica

- **αἷμα (`0130`, p. 15):** condensação de sentidos literal, metonímico, ritual e cristológico.
- **αἵρεσις (`0140`, pp. 16–17):** distinguir escolha, escola/partido e uso pejorativo conforme o contexto textual.
- **αἴρω (`0143`, p. 17):** construções de erguer, carregar, remover e levar embora.
- **αἰών (`0166`, pp. 18–20) e αἰώνιος (`0167`, p. 20):** verificar a organização temporal/semântica e a aplicação de cada testemunho, sem impor nem apagar conclusões teológicas.
- **ἀκούω (`0192`, pp. 22–23):** distinguir ouvir, escutar, compreender, obedecer e regências de caso.
- **ἀκριβής (`0197–0198`, pp. 23–24):** não confundir flexões com artigos independentes.

São **prioridades de cotejo aprofundado**, não uma lista de traduções pontualmente condenadas. Não reescrever sem confronto dos parágrafos específicos do texto original.

## 8. Limites probatórios e próximos passos

1. A estrutura HTML do intervalo e a consistência de seus textos com campos de pesquisa **foram examinadas integralmente**. Isso não substitui verificação da árvore DOM real em navegador nem os testes de usabilidade/acessibilidade.
2. O inventário auxiliar fornece índices e paginação inicial; o fac-símile foi examinado visualmente nas páginas impressas 12–24, **sem certificar independentemente cada associação de página individual**. O relatório CSV preserva o caráter auxiliar desses campos.
3. **Não** se conferiram palavra por palavra todas as acepções, variantes, regências ou passagens originais. A auditoria **não certifica fidelidade filológica integral**.
4. Registros estruturais totais THAYER permanecem **500** (499 dinâmicos mais Ἀαρών estático); nenhuma entrada foi incorporada, suprimida ou reescrita.
5. Próxima auditoria retrospectiva do checkpoint: **`entry-thayer-0001–0099`**. Recomenda-se verificação separada do cartão estático de Ἀαρών.
6. Próximo lema a incorporar, independente da auditoria: **ἀντιπαρέρχομαι (G492)**.

**Inventário integral individual:** `auditorias/thayer-2026-10-11-auditoria-textual-estrutural-100-0100-0199.csv` (100 linhas, seus lemas, glosas, páginas auxiliares, número editorial, referências, metrificação e observações). O estado `OK` identifica somente estrutura e consistência textual interna.

## 9. Resumo de progresso

- Incorporação THAYER: **500**; sem mudança.
- Auditoria estrutural integral anterior: **500/500**; HTML inválido em Ἀβαδδών foi corrigido na origem e integrado pelo PR #98.
- Auditoria textual e estrutural retrospectiva desta rodada: **100/100** registros 0100–0199, com cinco divergências de lematização e um falso negativo auxiliar.
- Revisão filológica de traduções e testemunhos em todos os 500 artigos: **pendente**.
- Integração documental desta auditoria na branch `chat-gpt-commits`: **não executada**; escrita restrita à origem `chat-gpt-thayer`.
