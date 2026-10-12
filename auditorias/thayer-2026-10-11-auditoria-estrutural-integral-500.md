# THAYER — auditoria estrutural integral de 500 registros

**Data:** 11/10/2026. **Escopo:** toda a coleção THAYER incorporada, não apenas lote 006. **Natureza:** inspeção estática de módulos e estrutura declarativa; **não** teste real de navegador nem homologação filológica.

- **Repositório:** `linguasbiblicasoriginais-rgb/scriptura-lexicon`
- **Origem:** `chat-gpt-thayer`, HEAD verificado `f47504730b4c51904ae364bf1f26a18ec0e3010e`.
- **Consolidação consultada:** `chat-gpt-commits`, HEAD `1b0fa93b76bf7e45c52a207311b0a13f0f912d2e`.
- **Fonte bibliográfica:** Joseph H. Thayer, *A Greek-English Lexicon of the New Testament*, fac-símile `Thayer (parte 1, Α–Ι).pdf`.
- **Relatórios anteriores:** `auditorias/thayer-auditoria-filologica-500-2026-10-11.md` e `auditorias/thayer-2026-10-11-auditoria-textual-estrutural-100-lote006.md`. A presente inspeção é autônoma e não os converte em homologação integral.

## Resultado resumido

**ESTRUTURA DE ÍNDICE E CORRESPONDÊNCIA APROVADA; HTML APROVADO COM RESSALVA MATERIAL (1 ERRO CONFIRMADO).**

| Item verificado | Resultado |
|---|---|
| Módulos THAYER presentes e referenciados | 13/13 |
| Linhas de pesquisa dos módulos | 499/499 |
| Cartões dos módulos | 499/499 |
| Linha/cartão HTML estáticos de Ἀαρών | 1/1 |
| **Registros totais** | **500** |
| IDs modulares únicos | 499/499 |
| Sequência numérica de IDs | 0001–0499, nenhuma lacuna |
| Correspondência `data-target` → ID do cartão | 499/499 |
| Concordância lema da busca → lema do cartão | 499/499 |
| Concordância lema do cartão → tooltip grego | 499/499 |
| Concordância glossa de busca → tooltip | 499/499 |
| Presença de lema/glossa em `data-search` | 499/499 |
| Cartões modulares com quatro seções | 499/499 |
| `tabindex="0"` em linhas modulares | 499/499 |
| Quatro âncoras THAYER no HTML principal | 4/4 (cada uma exatamente uma vez) |
| Ordem de `thayer.js`, lotes 002–006e e `script.js` | correta |
| Módulos da origem com SHA idêntico no consolidado | 13/13 |
| Ocorrências de `href=` nos cartões dinâmicos | 97, destinos não verificados |
| Fragmentos de cartão com marcação inválida detectada | **1** |

### Distribuição por lote

| Lote | Módulos dinâmicos | Registro estático | Total do lote |
|---|---:|---:|---:|
| 001 (`thayer.js`) | 20 | 1 (Ἀαρών) | 21 |
| 002 | 100 | 0 | 100 |
| 003 | 100 | 0 | 100 |
| 004 | 100 | 0 | 100 |
| 005a–005d | 79 | 0 | 79 |
| 006a–006e | 100 | 0 | 100 |
| **TOTAL** | **499** | **1** | **500** |

## THAYER-EST-001 — falha estrutural confirmada

- **Severidade:** alta (marcação/tooltip, com risco de interpretação incorreta de elemento hebraico).
- **Arquivo:** `lexicons/thayer.js`; **cartão:** `entry-thayer-0002`; **lema:** Ἀβαδδών.
- **Defeito verificável:** o `data-tooltip-label` de um `<bdi>` hebraico contém outra tag HTML literal, iniciando com `data-tooltip-label="<bdi class="`. Aspas do markup interno interrompem o valor externo e impedem uma interpretação HTML coerente conforme a intenção autoral.
- **Efeito possível:** o navegador poderá reconstruir incorretamente a árvore, a informação do tooltip ou o texto hebraico. **Não alegar que o resultado concreto no DOM foi observado**, pois não houve execução de navegador.
- **Medida recomendada:** cotejar o radical hebraico com o fac-símile e só depois restaurar o conteúdo textual plano do atributo, sem inserir marcação em atributos; repetir auditoria estática e verificar o resultado em navegador. Não corrigir etimologia por suposição.

## Alcance e limitações

1. A inspeção estrutural incidiu sobre **todos os 499 cartões dinâmicos**, seus pares de pesquisa, o par estático de Ἀαρών e o carregamento no `index.html`.
2. **Não** foram executados navegador, inspeção DOM real, cliques, pesquisa funcional, acessibilidade assistiva, verificação de links remotos, integridade HTTP ou testes automáticos de JavaScript.
3. Os 97 atributos `href` são apenas presença textual, **não** 97 destinos certificados.
4. Persistem os achados da auditoria filológica anterior: 500 cabeçalhos confrontados, 490 correspondências de lema, 7 divergências documentadas, 1 falso negativo da transcrição e 2 diferenças gráficas aparentes. Essa classificação é **distinta** da presente auditoria estrutural.
5. Não foi homologada a tradução de todas as acepções, formas, etimologias, regências, variantes ou citações.
6. A correspondência byte a byte dos 13 módulos entre origem e consolidado foi verificada por SHA Git; a auditoria **não** demonstra que cada cartão efetivamente abre/é pesquisável em navegador.
7. Nenhum verbete foi alterado na presente rodada. Próximo lema de incorporação continua **ἀντιπαρέρχομαι (G492)**.

## Quadro global de progresso (controle documental)

A contagem por fonte deriva dos checkpoints remotos consultados, sem duplicar cópias entre branches. As demais integrações não foram auditadas exaustivamente nesta rodada e não recebem certificação aqui. `✓` = comprovado no escopo; `◐` = parcial, preliminar ou com ressalvas; `—` = pendente ou sem demonstração.

| Dicionário | Incorporação | Auditoria textual e estrutural | Auditoria filológica | Integração | Total incorporado |
|---|---|---|---|---|---:|
| BDAG | ✓ | ◐ parcial | ◐ parcial | ◐ não revalidada nesta auditoria | 1161 |
| DGP | ✓ | ◐ relatórios parciais/integral prévio | ◐ parcial | ◐ não revalidada nesta auditoria | 3300 |
| LEH | ✓ | ◐ parcial | — não homologada | ◐ não revalidada nesta auditoria | 690 |
| PEREIRA | ✓ | ◐ parcial | ◐ parcial | ◐ não revalidada nesta auditoria | 510 |
| JASTROW | ✓ | ◐ parcial | ◐ parcial | ◐ não revalidada nesta auditoria | 600 |
| THAYER | ✓ | ◐ 500/500, com 1 falha HTML | ◐ 500/500 lemas (não acepções) | ✓ 500/500, identidade de 13 módulos | 500 |
| HALOT | ◐ 100 preliminares | — 0/100 homologados | — | ◐ não revalidada nesta auditoria | 100 |
| ROBINSON | — | — | — | — | 0 |
| KLEIN | — | — | — | — | 0 |
| ABBOTT-SMITH | — | — | — | — | 0 |
| BDB-H | — | — | — | — | 0 |
| BDB-A | — | — | — | — | 0 |
| GESENIUS | — | — | — | — | 0 |
| LSJ | — | — | — | — | 0 |
| **TOTAL** | | | | | **6861** |

**Parecer:** a indexação e os vínculos declarativos THAYER apresentam integridade quantitativa completa no universo registrado, **mas permanece a ocorrência THAYER-EST-001**, que impede aprovar sem ressalvas o HTML do conjunto. A revisão filológica continua não homologada.
