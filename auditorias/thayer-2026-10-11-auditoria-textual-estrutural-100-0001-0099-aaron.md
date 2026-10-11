# THAYER — última auditoria textual e estrutural retrospectiva de 100 registros

**Data:** 11/10/2026. **Branch exclusiva:** `chat-gpt-thayer`. **HEAD anterior à auditoria:** `b6bf591a0ae3a8a3c360ac992b3787b10dbb6520`.  
**Escopo exato:** `entry-thayer-0001–0099` (99 cartões dinâmicos) **mais `entry-aaron-thayer` (Ἀαρών; 1 cartão estático histórico)** = 100 registros, sem repetição.

## 1. Fontes e método

- **Fonte primária:** Joseph Henry Thayer, *A Greek-English Lexicon of the New Testament*, fac-símile anexo `Thayer (parte 1, Α–Ι).pdf`, páginas impressas **1–12**, além da **p. 29** para a entrada α/ἄλφα. As páginas foram consultadas visualmente para triagem, sem transcrição integral de todos os artigos.
- **Fonte auxiliar (não autoridade):** `auditorias/thayer-auditoria-filologica-500-inventario.csv`, usado para lemas, localização e avisos de divergência, com histórico de extração não completamente validada.
- **Código examinado:** `lexicons/thayer.js` (20 dinâmicos), `lexicons/thayer-batch-002.js` (79 dinâmicos) e `index.html` (Ἀαρών histórico).
- **Separa-se estritamente** Fonte / Tradução / Análise / GDHAGP. Não substituir os dados de Thayer por Strong, BDAG ou Robinson. Nenhum verbete foi reescrito durante a auditoria.

## 2. Parecer

**Auditoria estrutural estática: concluída para 100/100 registros.** Não foram encontrados cartões ausentes, IDs duplicados, targets órfãos, lemas desencontrados ou marcação HTML desequilibrada no escopo.

**Auditoria textual interna: concluída no escopo, com 3 ressalvas materiais:**
1. **`entry-thayer-0040`, ἅγιον:** cabeçalho independente divergente do artigo-fonte **ἅγιος**, onde ocorre a forma substantivada neutra (p. 6–7). Divergência de **estatuto editorial**, não necessariamente de tradução isolada.
2. **`entry-thayer-0017`, ἀγαθός:** **sete parágrafos** com numeração impressa duplicada, do tipo “1. 1.”, “2. 2.” até “7. 7.”. Trata-se de defeito de apresentação do texto, **não** de desequilíbrio das tags.
3. **`entry-aaron-thayer`, Ἀαρών:** links para referências existem no cartão, mas **as passagens não constam do atributo `data-search`** da linha da busca. Pesquisa por referência pode não localizar o verbete a partir dessa linha; o teste real de navegador ainda não foi executado.

**Fidelidade filológica exaustiva:** **NÃO HOMOLOGADA**. A verificação de estrutura e dos textos publicados não equivale ao confronto independente de todas as acepções, formas, regências, variantes textuais e referências dos 100 artigos originais.

## 3. Controles medidos

| Critério | Resultado |
|---|---:|
| Registros, linha e cartão correspondentes | 100/100 |
| Linhas e cartões dinâmicos | 99/99 |
| Linha e cartão estáticos históricos de Ἀαρών | 1/1 |
| Identificadores de alvo únicos, sem órfãos | 100/100 |
| Lemas idênticos entre busca e cartão | 100/100 |
| Lema e glossa incluídos na busca | 100/100 |
| Tooltips de lema e glossa (somente dinâmicos) | 99/99 |
| Rubricas THAYER e classe de dicionário consistentes | 100/100 |
| HTML balanceado, sem tag em `data-*` | 100/100 |
| Seções correspondentes ao modelo usado | 100/100 |
| Referências ou menções bíblicas presentes | 100/100 |
| Referências indexadas na linha de busca | 99/100 |
| Cartões com hiperlinks nas referências | 1/100 (apenas Ἀαρών) |
| Lemas coincidentes com inventário auxiliar | 99/100 |
| Divergência confirmada de estatuto do lema | 1/100 |
| Parágrafos com números duplicados | 7 em 1 cartão |
| Páginas impressas individualizadas no campo Fonte | 0/100 |
| Ordem de carregamento dos módulos e `script.js` | correta |
| Execução real no DOM, acessibilidade e destinos externos | **NÃO REALIZADOS** |

**Modelos distintos:** 20 cartões inaugurais usam `Tradução literal / Formação e formas / Acepções e testemunhos / Referências citadas por Thayer`; 79 usam `Tradução / Acepções e uso / Referências bíblicas / Fonte`; o cartão histórico de Ἀαρών usa **uma seção única**. A ausência de um cabeçalho `Fonte` ou dos quatro blocos padronizados no modelo legado não foi contabilizada como erro.

## 4. Avaliação textual quantitativa

| Indicador | Resultado |
|---|---:|
| Descrições em parágrafo único | 84/100 |
| Descrições com múltiplos parágrafos | NaN/100 |
| Descrições sem caracteres gregos | 82/100 |
| Média de caracteres na seção semântica usada | 152.94 |

A média agregada combina três apresentações editoriais distintas: usa `Acepções e testemunhos` nos 20 cartões do primeiro módulo, `Acepções e uso` nos 79 seguintes e a seção única do cartão estático. Comparar essa média diretamente com a de lotes homogêneos exige cautela.

## 5. Exame dirigido da fonte

- **ἄλφα (`0001`):** o fac-símile apresenta matéria introdutória de α/ἄλφα na p. 1; o inventário auxiliar localiza `ἄλφα` na p. 29. As duas localizações e a separação entre letra e funções prefixais exigem controle editorial em futura revisão, sem declarar automaticamente uma das localizações como erro.
- **Ἀβαδδών (`0002`):** o HTML hebraico foi corrigido anteriormente (THAYER-EST-001); a passagem Ap 9.11 deve continuar preservada.
- **ἀγαθός (`0017`):** separar defeito de numeração duplicada da análise lexical substantiva, e manter formas adjetivais/substantivadas distintas.
- **ἀγαθουργέω (`0018`):** evitar criação de número Strong oficial inexistente para entrada inserida editorialmente.
- **ἀγαπάω, ἀγάπη, ἄγγελος (`0025`, `0026`, `0032`):** atenção à granularidade da polissemia e à fidelidade contextual das referências. Os resumos não substituem a divisão original.
- **ἅγιον / ἅγιος (`0040`, `0041`):** o neutro substantivado pertence ao artigo do adjetivo. Preservar a forma pesquisável, mas indicar seu estatuto editorial; conferir distribuições de `τὰ ἅγια`.
- **ᾅδης (`0087`):** verificar atribuição histórico-teológica das acepções e exemplos. A síntese portuguesa não esgota o artigo de Thayer.
- **Ἀαρών (cartão estático):** mantém fontes semíticas e seis hyperlinks no corpo (um para Fílon e cinco bíblicos). A observação de falha de indexação refere-se a `data-search`, não à existência dos links.

**Não extrapolar:** nenhuma dessas observações autoriza uma correção semântica automática sem colação do artigo-fonte.

## 6. Cobertura acumulada

| Auditoria retrospectiva | Registros |
|---|---:|
| Faixa 0400–0499 | 100 |
| Faixa 0300–0399 | 100 |
| Faixa 0200–0299 | 100 |
| Faixa 0100–0199 | 100 |
| **Faixa 0001–0099 + Ἀαρών (atual)** | **100** |
| **TOTAL COBERTO ESTRUTURAL/TEXTUALMENTE POR RODADAS** | **500** |

As cinco rodadas são **disjuntas**. Esta cobertura é uma triagem de estrutura e coerência textual/lemmatização com fonte auxiliar, **não 500 traduções filologicamente homologadas**. A auditoria estrutural integral anterior e a correção THAYER-EST-001 permanecem no histórico.

A revisão geral de cabeçalhos já documentou **490 correspondências normalizadas**, **7 divergências reais**, **1 falso negativo do auxiliar** e **2 diferenças gráficas/desinenciais aparentes**, totalizando 500 registros. A atual divergência em ἅγιον já integra esses sete casos; não somá-la uma segunda vez.

## 7. Providências

1. **THAYER-TXT-0017:** corrigir futuramente a duplicação dos algarismos antes das sete acepções de ἀγαθός, preservando o texto.
2. **THAYER-LEX-0040:** explicitar a forma ἅγιον como emprego substantivado relacionado ao artigo ἅγιος, mediante decisão editorial.
3. **THAYER-SEARCH-AARON:** incorporar referências confirmadas ao índice de pesquisa da linha estática de Ἀαρών.
4. Abrir revisão filológica *per entry* para sentidos, flexões, regência, siglas críticas, citações e localização impressa.
5. Executar DOM real, acessibilidade e teste de destinos de hyperlinks. **Nenhum desses testes foi declarado concluído.**

**Próxima auditoria retrospectiva:** **nenhuma faixa restante entre os 500 registros existentes**. A continuidade passa agora à resolução editorial dos achados e à auditoria filológica contextual; próximo lema independente para incorporação: **ἀντιπαρέρχομαι (G492)**.

**Inventário nominal 100/100:** `auditorias/thayer-2026-10-11-auditoria-textual-estrutural-100-0001-0099-aaron.csv`. O status `OK` nos registros refere-se exclusivamente à estrutura e aos vínculos, e não à fidelidade semântica.
