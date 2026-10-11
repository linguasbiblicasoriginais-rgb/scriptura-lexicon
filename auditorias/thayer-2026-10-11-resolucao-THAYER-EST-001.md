# THAYER — resolução da ocorrência estrutural THAYER-EST-001

**Data:** 11/10/2026. **Origem:** `chat-gpt-thayer`; HEAD anterior `63c9822599b01ed610c5398da17f4b7b79778e83`.
**Local:** `lexicons/thayer.js`, verbete `entry-thayer-0002`, Ἀβαδδών.

A auditoria estrutural dos 500 registros apontou uma tag HTML `<bdi>` indevidamente embutida no valor de `data-tooltip-label`, além de aninhamento desnecessário no texto do mesmo elemento. A conversão tinha atribuído falso tooltip independente à sequência `אָב`, “pai”, dentro do verbo `אָבַד`, “perecer”.

**Correção:** os dois elementos `<bdi>` internos foram removidos. O `data-tooltip-label` e o texto exibido passam a `אָבַד`. Foram preservados `data-transliteration="ʾāḇaḏ"` e `data-meanings="perecer"`. Não foram alterados lema grego, referências, acepções, índices, IDs nem outras entradas.

| Verificação estática | Resultado |
|---|---|
| Linhas de pesquisa de thayer.js | 20/20 |
| Cartões de thayer.js | 20/20 |
| IDs de cartões iguais aos anteriores | true |
| Alvos de pesquisa iguais aos anteriores | true |
| Atributos tooltip com tags HTML | 0 |
| Atributo do radical hebraico completo | 1/1 |
| Texto hebraico no elemento | 1/1 |
| Popups falsos “pai” no cartão | 0 |
| Delimitadores dos templates JavaScript preservados | true |

O total global THAYER continua **500**: 499 cartões modulares (20 neste arquivo e 479 nos outros 12 módulos), mais Ἀαρών estático. Este é um teste **estático**, sem navegação em browser/DOM. A auditoria filológica integral permanece pendente. O relatório integral anterior continua preservado como documento histórico da falha inicialmente detectada.

**Integração:** a branch consolidada contém o mesmo defeito no mesmo SHA de blob do módulo; integrar mediante PR específico para `chat-gpt-commits`, preservando outras fontes e sem editar `main`.
