# THAYER — verificação independente dos registros e reconciliação documental — 12/10/2026

**Fonte de dados auditada:** branch `chat-gpt-commits`, commit de origem `abde9c41115d127201792b40f88e62ef7f0d104f`.  
**Regra:** `regras/Rauditoria.txt` — concluir auditoria requer colação filológica individual, correções, regressão, evidência e integração.  
**Alcance deste ciclo:** reauditoria estrutural estática dos **14 módulos**, conferência dos 512 estados da matriz, verificação de status remoto do teste Chromium e PR #105, detecção e correção de inconsistência no checkpoint. **Não** é uma colação filológica integral de 512 verbetes.

## Evidências independentes

| Arquivo/módulo | Linhas | Cartões |
|---|---:|---:|
| `thayer.js` | 20 | 20 |
| `thayer-batch-002.js` | 100 | 100 |
| `thayer-batch-003.js` | 100 | 100 |
| `thayer-batch-004.js` | 100 | 100 |
| `thayer-batch-005a.js` | 20 | 20 |
| `thayer-batch-005b.js` | 20 | 20 |
| `thayer-batch-005c.js` | 20 | 20 |
| `thayer-batch-005d.js` | 19 | 19 |
| `thayer-batch-006a.js` | 20 | 20 |
| `thayer-batch-006b.js` | 20 | 20 |
| `thayer-batch-006c.js` | 20 | 20 |
| `thayer-batch-006d.js` | 20 | 20 |
| `thayer-batch-006e.js` | 20 | 20 |
| `thayer-batch-007-suplemento.js` | 12 | 12 |
| **Total dinâmico** | **511** | **511** |

Registros `entry-thayer-0001–0511`: 511 IDs únicos, nenhum duplicado, nenhuma lacuna; mesmo conjunto de IDs em linhas e cartões. Com `entry-aaron-thayer` no HTML, 512 entradas. Isto é um teste de integridade estrutural de código, não tradução validada.

A matriz `auditorias/thayer-2026-10-12-matriz-atomica-512.json` foi novamente analisada: **512 IDs únicos**, 512 `BLOQUEADA`, 13 `DIRIGIDO_PRELIMINAR`, 499 `NAO_HOMOLOGADO_INTEGRALMENTE`, 0 colações integrais, 0 checagens individuais exaustivas de URLs, 0 validações completas de acessibilidade. As rotas DOM têm comprovação anterior: GitHub Actions `38205220873`, status `completed/success`, head testado `edf5239bd35c57baa1d8435f7c9e85ac7a63d02d`. PR #105: `merged=true`, commit `2231a99909714b678c5caf945864d15dd1603ef6`.

## Falha confirmada: mistura entre checkpoint do lote 006 e suplemento 007

Antes desta correção, `lexicons/thayer-progress.json` apresentava simultaneamente: `total_existing_before_batch=400`, `new_entries=12`, `total_published=512`, `first_new_lemma=ἀνατέλλω`, `last_new_lemma=Ἀντιοχεύς`, `audit.final_total_expected=500` e `audit.new_search_rows=100`. Esses campos misturavam dois lotes históricos.

Correção documental aplicada sem eliminar os dados históricos: pré-total **500**, novos **12**, total **512**, início **ἀγγέλλω**, fim **ἀναπηδάω**, atualização da lista de 12 lemas, páginas e quadro `audit` para o suplemento; fotografia anterior preservada em `batch_006_audit_snapshot`. O `batch_size=100` continua sendo a meta nominal de lotes regulares, não o tamanho do suplemento. As entradas e a sequência histórica permanecem intocadas.

## Risco ainda não corrigido: defasagem entre branches

Em consulta ao GitHub, os blobs de `lexicons/thayer.js`, `lexicons/thayer-batch-007-suplemento.js`, `lexicons/thayer-progress.json` e `regras/Rthayer.txt` não eram idênticos entre `chat-gpt-thayer` (HEAD `1be2956307d8e5a1c377bc9fb2f1fc30d2a26e78`) e `chat-gpt-commits` (HEAD base `abde9c41115d127201792b40f88e62ef7f0d104f`). A defasagem não prova perda, porém torna insegura uma reintegração por sobrescrita. A reconciliação da origem deve usar diff e preservar as correções já incorporadas, sem `force`.

## Pendências

A integridade DOM não certifica fonética, ortografia politônica, morfologia, subdivisões de acepções, etimologias, texto original, variantes bíblicas, página, bibliografia, hyperlinks reais, popups e acessibilidade exaustiva. A ficha `ἀγαθός` exemplifica o uso de síntese portuguesa e seleção de referências, não transcrição completa da fonte. Portanto, não é possível considerar nenhum dos 512 registros `AUDITORIA_CONCLUIDA` neste ciclo.

**Resultado normativo:** correção de checkpoint documentada; estrutural estático 511/511 + Ἀαρών; a execução Chromium anterior permanece válida no seu escopo; filologia dirigida 13/512; integral 0/512; auditoria atômica 0/512.

Nenhum registro lexical ou índice Strong foi alterado, nenhuma branch foi removida e `main` não foi editada.
