# THAYER — auditoria textual e estrutural retrospectiva de 100 verbetes (0200–0299)

**Data:** 11/10/2026. **Repositório:** `linguasbiblicasoriginais-rgb/scriptura-lexicon`. **Origem:** `chat-gpt-thayer`.
**HEAD lexical verificado ANTES da auditoria:** `f3d7ed03d58fbb6a5bc68f0dbaf69707b4bfae39`. **HEAD consolidado de referência:** `18a7384fd0f9cfaa3c4db633db6788e94b9cdf3d`.

## Escopo e fundamento

Intervalo exato: **`entry-thayer-0200`–`entry-thayer-0299`** (100 verbetes), de **ἀκριβῶς** a **ἀμφιέζω**, composto por 21 registros do módulo `thayer-batch-003.js` e 79 registros do módulo `thayer-batch-004.js`. Este intervalo foi determinado pelo campo canônico `audit_standard.next_retroactive_audit_interval`. A auditoria dos intervalos 0300–0399 e 0400–0499 não foi repetida.

**Autoridade bibliográfica:** Joseph Henry Thayer, *A Greek-English Lexicon of the New Testament*, arquivo anexo `Thayer (parte 1, Α–Ι).pdf`, páginas impressas **24–33** (consultadas visualmente nesta rodada). **Fonte auxiliar:** inventário anterior dos 500 lemas, `auditorias/thayer-auditoria-filologica-500-inventario.csv`. Este inventário não é equivalente a cotejo independente integral do texto original.

Separação de camadas: **Fonte** (fac-símile), **Tradução** (texto português efetivamente publicado), **Análise** (este relatório), **GDHAGP** (não alterado).

## Parecer

**AUDITORIA ESTÁTICA E TEXTUAL-INTERNA: CONCLUÍDA, 100/100 SEM FALHAS ESTRUTURAIS NAS INVARIANTES EXAMINADAS.**  
**CONFORMIDADE FILOLÓGICA EXAUSTIVA: NÃO HOMOLOGADA.** O controle textual abrange a redação publicada, a coerência com os metadados, a pesquisa, a organização de acepções, a tipologia de referências e os lemas com base no inventário auxiliar. A inspeção visual das páginas 24–33 estabelece problemas dirigidos na fonte, mas **não** equivale ao confronto palavra por palavra das traduções, referências e variantes dos 100 artigos.

## Resultados medidos

| Verificação | Resultado |
|---|---:|
| Linhas `search-row` no intervalo | 100/100 |
| Cartões `entry-card` correspondentes | 100/100 |
| IDs distintos e alvos resolvidos | 100/100 |
| Lema da busca = cabeçalho grego | 100/100 |
| Tooltip de lema concordante | 100/100 |
| Tooltip e equivalente de tradução concordantes | 100/100 |
| `data-search` contém lema e glossa | 100/100 |
| `data-search` contém referências do cartão | 100/100 |
| Quatro seções estruturais | 100/100 |
| Etiquetas HTML balanceadas / atributos verificados | 100/100 |
| Seção de referências presente | 100/100 |
| Referências com indicação bíblica numérica | 99/100 |
| Referência exclusivamente lexical (ἅλς → ἅλας) | 1/100 |
| Cartões com links clicáveis nas referências | 0/100 |
| Cartões com página impressa individual no campo Fonte | 0/100 |
| Descrições com caracteres gregos | 15/100 |
| Descrições sem caracteres gregos | 85/100 |
| Descrições em um único parágrafo | 89/100 |
| Descrições em múltiplos parágrafos | 11/100 |
| Comprimento médio da descrição das acepções | 126.16 caracteres |
| Lemas coincidentes no inventário auxiliar normalizado | 97/100 |
| Divergências confirmadas de estatuto de lema | 1/100 |
| Diferenças de representação de desinências no auxiliar | 2/100 |
| Navegador/DOM, acessibilidade, URLs externos | **NÃO EXECUTADOS** |
| Cotejo integral de 100 acepções, regências e referências | **PENDENTE** |

## Achados editoriais prioritários

1. **THAYER-TXT-0207 — ἄκρον / ἄκρος, p. 24 — divergência confirmada.** `entry-thayer-0207` apresenta **ἄκρον** como verbete próprio. Thayer organiza o artigo sob **ἄκρος** e discute `τὸ ἄκρον` como emprego substantivado do neutro. Recomenda-se preservar a capacidade de pesquisa por ἄκρον, mas explicitar que o cabeçalho original é ἄκρος, sem inventar um novo artigo impresso. Não alterar lexicalmente sem decisão editorial.
2. **ἀλληγορέω (`0240`) e ἀλλογενής (`0243`), p. 28.** Os registros auxiliares trazem respectivamente `ἀλληγορέω, -ῶ` e `ἀλλογενής, -ές`. São **anotações morfológicas**, não lemas diferentes nem erros confirmados.
3. **ἅλς (`0253`) — remissão, não citação bíblica.** O campo de referência contém apenas a remissão a **ἅλας (G217)**; o registro tem seção válida, mas sua informação não deve ser rotulada como passagem bíblica.
4. **ἀλήθεια (`0226`, p. 26), ἀλλά (`0236`, pp. 27–28) e ἁμαρτία (`0268`, pp. 30–31).** Os artigos impressos possuem desenvolvimento e testemunhos amplos que não se esgotam na síntese portuguesa. A ausência de transcrição exaustiva não constitui por si só tradução incorreta; impede, porém, a sua homologação integral.
5. **ἀκροβυστία (`0204`), ἅμα (`0262`), ἁμαρτάνω (`0266`), ἁμαρτωλός (`0270`) e ἀμήν (`0283`).** Prioridade para polissemia, emprego substantivado, sintaxe, contexto teológico ou uso pragmático, conforme cada artigo.
6. **Ἀμπλίατος (`0294`), ἀμφιβάλλω (`0296`), ἀμφιάζω (`0298`) e ἀμφιέζω (`0299`).** Preservar o tratamento de variantes e a distinção entre números Strong e ordinais editoriais de controle; atribuições de edições textuais demandam cotejo individual.

## Limites e providências

- Foram conferidos **100 registros individuais** da coleção publicada e seu inventário auxiliar. O arquivo CSV anexo contém a linha de cada cartão, lema, classe, equivalente, índice, página auxiliar, status de lematização, metrificação do texto, referências e observação individual.
- A paginação por entrada presente no CSV deriva do **inventário auxiliar**, não de uma conferência independente de cada página. As páginas impressas 24–33 foram inspecionadas visualmente nesta rodada para organização do escopo e verificação dirigida de problemas.
- **100/100 cartões** continuam sem metadados individualizados de página impressa no campo de fonte; **100/100** sem links clicáveis de referências. Isso é limitação editorial/funcional, não defeito de cardinalidade.
- **85/100 descrições** não trazem formas gregas; isso não demonstra falsidade semântica, mas reduz a rastreabilidade das construções.
- A correção anterior **THAYER-EST-001** (Ἀβαδδών, fora deste intervalo) permanece efetiva na branch de origem e no consolidado, sem relação com as divergências acima.
- **Nenhum cartão lexical foi modificado** e a contagem original permanece **500 THAYER** (499 dinâmicos, Ἀαρών histórico). Próxima incorporação THAYER: **ἀντιπαρέρχομαι (G492)**.
- **Próxima auditoria retrospectiva sugerida:** `entry-thayer-0100–0199`, sem repetições.

**Relatório nominal auditável:** [inventário de 100 cartões](auditorias/thayer-2026-10-11-auditoria-textual-estrutural-100-0200-0299.csv). Os status `OK` do CSV designam aprovação estrutural e coerência interna; **não** significam homologação filológica das traduções.

## Quadro global resumido

| Dicionário | Incorporação | Auditoria textual e estrutural | Auditoria filológica | Integração | Total incorporado |
|---|---|---|---|---|---:|
| BDAG | ✓ | ◐ | ◐ | ◐ | 1161 |
| DGP | ✓ | ◐ | ◐ | ◐ | 3300 |
| LEH | ✓ | ◐ | — | ◐ | 690 |
| PEREIRA | ✓ | ◐ | ◐ | ◐ | 510 |
| JASTROW | ✓ | ◐ | ◐ | ◐ | 600 |
| THAYER | ✓ | ◐ 100/100 nesta rodada; estrutural integral 500/500 | ◐ 500 lemas, não acepções | ✓ 500/500 | 500 |
| HALOT | ◐ preliminar | — | — | ◐ | 100 |
| ROBINSON | — | — | — | — | 0 |
| KLEIN | — | — | — | — | 0 |
| ABBOTT-SMITH | — | — | — | — | 0 |
| BDB-H | — | — | — | — | 0 |
| BDB-A | — | — | — | — | 0 |
| GESENIUS | — | — | — | — | 0 |
| LSJ | — | — | — | — | 0 |
| **TOTAL** | | | | | **6861** |

**Nota:** os totais por frente são provenientes dos checkpoints remotos conhecidos. O estado de auditoria e integração de outras frentes não foi reexecutado integralmente nesta tarefa. A auditoria atual não adiciona verbetes nem altera os totais.

