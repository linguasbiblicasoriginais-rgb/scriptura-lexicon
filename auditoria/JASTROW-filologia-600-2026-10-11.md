# JASTROW — auditoria filológica: triagem integral A00000–A00599

**Data:** 11/10/2026. **Árvore examinada:** `chat-gpt-commits`, commit `88b0cda342abdb03464d7c39a752f9945772d261`. **Fonte:** XML canônico `Sefaria/Sefaria-Data`, commit `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`, arquivado em `lexicons/jastrow-source-lote-0001.json` a `0003.json`. Escopo efetivamente varrido: **600/600 entradas**.

## Resumo de execução e provas

[GitHub Actions — triagem integral, execução 38118125003](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38118125003), conclusão **success**. O artefato `jastrow-filologia-600` contém **12 relatórios, cada qual com 50 verbetes**, um `README.md` analítico e a matriz `triagem-600.json` com ID, cabeçalhos da fonte, sentidos e definições, excertos de notas originais, síntese editorial, alertas, prioridade e estado `PENDING_MANUAL`. Ferramenta reproduzível: `tools/jastrow_triagem_filologica.js`. A matriz completa foi gerada pelo workflow, não escrita manualmente.

| Classe da triagem automatizada | Entradas |
|---|---:|
| Sem alerta automático | 504 |
| Alerta de baixa prioridade | 55 |
| Alerta de média prioridade | 39 |
| Alerta de alta prioridade | 2 |
| **Total analisado programaticamente** | **600** |

A soma totaliza 600 porque cada verbete recebe uma única classe final. Os **96 alertas não são 96 erros filológicos confirmados**: são sinais para avaliação comparativa. Contadores de tipos, que podem ocorrer no mesmo verbete: `CROSS_REFERENCE_REVIEW=52`, `VARIANTS_NOT_VISIBLE=41`, `MORPHOLOGY_NOT_EVIDENT=2`, `GREEK_NOT_EVIDENT=2`, `MULTIPLE_SOURCE_HEADWORDS=1`. Somente confronto com as acepções e notas completas pode adjudicá-los.

## Conferência manual efetuada

| ID | Evidência extraída da Fonte | Parecer filológico | Intervenção |
|---|---|---|---|
| `A00156` | Dois `head-word` (אֲבֵל; אֲבֵיל), formas Itpael, forma marcada `*.`, Targum Lamentações 2.8 e Gênesis 37.34, Jerusalém Avodah Zarah, Ester Rabá e Bava Kamma | A variante אֲבֵיל e parte da documentação tinham sido omitidas; alerta **procedente** | Expandido `lexicons/jastrow-141-170.js`, incluindo ambas as grafias, derivação, atestações e variantes textuais |
| `A00238` | Texto identifica cálice/corola; nota menciona `χρυσάνθεμον`, `χάλκη`, `κάλχη` e grafias hebraicas variantes | Síntese portuguesa preservava o debate botânico, mas omitira as designações gregas precisas; alerta **procedente** | Incluídas as três formas gregas e variantes editoriais em `lexicons/jastrow-236-260.js` |
| `A00338` | Binyanim Af., Ithpa. e Ithpe. | Todos aparecem na tradução com nomenclatura expandida “Af'el”, “Itpael/itpeel”; alerta **falso positivo por abreviação** | Sem alteração lexical |
| `A00362` | Grego `ἄγραφος` e frase `παρὰ βασιλέως ὁ νόμος ἄγραφος` | A definição “não escrito” estava presente, mas a frase citada por Jastrow fora apenas parafraseada; alerta **procedente quanto à literalidade da citação** | Restaurada a frase grega e sua tradução em `lexicons/jastrow-361-385.js` |
| `A00371` | XML traz `<head-word>*, </head-word>` e `<head-word>*אָדָא, </head-word>`, seguido de `בַּרְדָּא II, 2` | Cabeçalho XML anômalo, já explicitado pela camada editorial; não inventar um lema reconstruído; alerta **não implica erro de tradução** | Sem substituição conjectural |

### Divergências de grafia e variantes da fonte

Os alertas abaixo foram **identificados**, mas **não homologados como erros individuais** sem exame da entrada inteira. Ocorrências detectadas por confrontar todos os `head-word` da fonte com o texto visível do cartão:

| Ordinais / intervalos | IDs cuja representação das variantes exige conferência |
|---|---|
| 1–100 | `A00012`, `A00016`, `A00018`, `A00031`, `A00051`, `A00054`, `A00056`, `A00057`, `A00077`, `A00083` |
| 101–200 | `A00110`, `A00111`, `A00156` (corrigido), `A00161`, `A00190` |
| 201–300 | `A00202`, `A00204`, `A00226`, `A00243`, `A00247`, `A00268`, `A00271`, `A00278`, `A00282`, `A00284`, `A00286`, `A00298` |
| 301–400 | `A00339`, `A00353`, `A00370`, `A00371` (anomalia preservada) |
| 401–500 | `A00446`, `A00449`, `A00466`, `A00490` |
| 501–600 | `A00501`, `A00568`, `A00592`, `A00593`, `A00597`, `A00598` |

Há cabeçalhos fragmentários, parênteses, abreviaturas editoriais, repetições e diferenças de pontuação/diacríticos em alguns casos. Um alerta de variante não presente literalmente no texto **não demonstra que o sentido lexical tenha sido perdido**. Em particular, `A00568` menciona variantes na explicação, mas diferenças pontuais de pontuação afetam a identificação automática.

### Diferenças tipográficas legadas

- `A00006`: fonte `א'`, interface `א׳` (apóstrofo ASCII versus geresh hebraico).
- `A00007`: quatro `head-word` no XML reunidos em um cabeçalho de exibição; não é automaticamente erro.

## Limites e decisões editoriais

A triagem mede evidências de omissão e preservação de lemas, homógrafos, notas, remissões, flexões, termos gregos e atestações, **não** substitui a leitura filológica completa. A ausência de alertas em 504 entradas indica apenas que esses detectores não encontraram problemas, não que as 504 tenham sido certificadas.

**Cinco verbetes confrontados manualmente nesta etapa:** `A00156`, `A00238`, `A00338`, `A00362`, `A00371`. Três receberam correção editorial; os outros dois foram adjudicados como alerta enganoso/particularidade de fonte. Os demais **595 permanecem sem conferência semântica manual individual documentada nesta etapa**. A auditoria filológica independente completa requer comparar todas as acepções, notas e referências à fonte primária e revisar os 52 alertas de remissão e os demais casos de variantes.

**Checkpoint:** manter `total_published=600`, `total_integrated=600` e `total_audited=0` até a adoção de critérios formais de certificação filológica. Recomenda-se adicionar `total_screened=600` e `manual_reviewed=5` sem inflar `total_audited`. Browser, acessibilidade e testes de interação não foram realizados. `main` não deve ser alterada; correções devem entrar por PR em `chat-gpt-commits`.

## Material de reprodução

- Script da triagem: `tools/jastrow_triagem_filologica.js`.
- Execução com artefato e matriz completa: [GitHub Actions 38118125003](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38118125003).
- Auditoria estrutural anterior, de todos os 600: [GitHub Actions 38117209491](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38117209491).
