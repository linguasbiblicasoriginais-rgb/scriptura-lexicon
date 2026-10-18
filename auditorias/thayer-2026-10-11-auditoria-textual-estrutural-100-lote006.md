# THAYER — auditoria textual e estrutural dos 100 verbetes do lote 006

**Data:** 11/10/2026. **Branch:** `chat-gpt-thayer`. **HEAD auditado antes do registro:** `d5ba094d6c122926ed91c663c0c6465422b500b6`.
**Escopo:** 100 cartões `entry-thayer-0400`–`entry-thayer-0499`, de **ἀνατέλλω (G393)** a **Ἀντιοχεύς (G491)**, módulos `lexicons/thayer-batch-006a.js`–`006e.js` (20 cada).
**Fonte primária:** Joseph Henry Thayer, *A Greek-English Lexicon of the New Testament*, `Thayer (parte 1, Α–Ι).pdf`, pp. impressas **42–51**. Comparador auxiliar: auditoria de 500 lemas já existente, que não certifica acepções.

## Parecer editorial

**ESTRUTURA ESTÁTICA: APROVADA NAS INVARIANTES VERIFICADAS. TEXTO FILOLÓGICO: NÃO HOMOLOGADO.**
O exame de 100 cartões compreende avaliação estática completa de campos, índices, consistência textual interna e estrutura dos fragmentos HTML, com cotejo visual dirigido das páginas do fac-símile e análise de artigos representativos. **Não foi realizado confronto palavra a palavra de todas as acepções e referências de 100 artigos**, nem teste em navegador. Não interpretar a contagem estrutural como certificação integral da fonte.

## Verificações estruturais

| Controle | Resultado |
|---|---|
| Novas linhas `search-row` | 100/100 |
| Cartões `entry-card` correspondentes | 100/100 |
| IDs de linha e cartões exclusivos | 100/100 |
| Correspondência `data-target` → `article id` | 100/100 |
| Lema: célula de busca, cabeçalho e tooltip | 100/100 iguais |
| Equivalentes: célula, tooltip e cartão | 100/100 iguais |
| Texto das acepções e referências incluído em `data-search` | 100/100 |
| Quatro seções `Tradução`, `Acepções e uso`, `Referências`, `Fonte` | 100/100 |
| Sequência G393–G491 | 99 índices inteiros, mais G415a (ordinal editorial, não número Strong oficial) |
| Ordem dos módulos e script de montagem em `index.html`/`script.js` | Corretamente configurada |
| Balanceamento estático das etiquetas nos cartões | Nenhum defeito detectado |
| Links de referências nos cartões | 0/100; citações somente textuais |
| Execução DOM, browser, acessibilidade, URLs externos | Não testados |

## Avaliação textual e filológica

1. Os **100 cartões têm uma única apresentação discursiva de «Acepções e uso»**, sem subdivisão editorial por acepções originais; a média é **116.26 caracteres** por descrição.
2. **94/100 descrições não possuem exemplos ou formas em caracteres gregos**. Isso não prova erro semântico, mas dificulta verificar casos, construções e formas efetivamente discutidos por Thayer.
3. Os cartões possuem referências abreviadas, não aparato de citações exaustivo do fac-símile. **100/100** carecem de links bíblicos diretamente navegáveis; o índice ainda pesquisa as referências escritas.
4. Os artigos grandes são excessivamente condensados: **ἀνήρ (G435, cartão 0443)**, **ἄνθρωπος (G444, 0452)**, **ἀνίστημι (G450, 0458)**, **ἀνοίγω (G455, 0463)** e **ἀντί (G473, 0481)**. O impresso apresenta mais distinções e testemunhos do que o único parágrafo português conserva. Não chamar essas sínteses de tradução exaustiva.
5. **ἀναφέρω (G399, 0406):** o cartão cobre conduzir, oferecer sacrifícios e carregar pecados, mas não conserva em subitens os testemunhos gregos e as condições sintáticas da fonte.
6. **ἀνέλεος (G415a, 0423):** separar inequivocamente o ordinal suplementar de controle de qualquer suposto número Strong oficial; distinguir de **ἀνελεήμων (G415, 0422)** e **ἀνίλεως (G448, 0456)**. A coexistência não é, por si, duplicação.
7. Sem identificação da **página impressa por artigo**, o leitor não consegue verificar a fonte a partir do cartão individual. Incluir metadados paginais depois da conferência.
8. O lote não apresenta, na auditoria anterior dos 500 cabeçalhos, as sete divergências de lematização registradas em lotes precedentes. Isso **não** atesta a fidelidade de sentidos, flexões ou testemunhos do lote 006.

## Amostra dirigida e limite probatório

Páginas 42–51 do fac-símile consultadas para localizar a sequência e examinar artigos polissêmicos. Foram confrontados de modo dirigido os cartões **ἀνατίθημι, ἀναφέρω, ἀνήρ, ἄνθρωπος, ἀνίστημι, ἀνοίγω, ἀντί**. O achado demonstrável é **perda de granularidade semântica e do aparato de exemplos**; não foram confirmadas, no alcance desta inspeção, deturpações pontuais suficientes para propor correções lexicais automáticas. Não alterar verbete sem cotejo contextual.

## Prioridades e fechamento

**P1 — Filologia:** revisar primeiro os verbetes polissêmicos destacados, depois os demais um a um, identificando acepções, regência, voz e testemunhos; confirmar fontes e páginas.  
**P2 — Metadados:** explicitar ordinais editoriais como `G415a` e acrescentar localização impressa.  
**P3 — Interface:** links bíblicos e remissões, validação real em browser/DOM e acessibilidade.  
**P4 — Rastreabilidade:** manter quatro camadas `Fonte` / `Tradução` / `Análise` / `GDHAGP`, sem misturar léxicos.

**Nenhum dos 100 verbetes foi reescrito.** Mantêm-se **500 cartões totais** e próximo índice de incorporação **ἀντιπαρέρχομαι (G492)**. O inventário do lote acompanha este documento: `auditorias/thayer-2026-10-11-auditoria-textual-estrutural-100-lote006.csv`.
