# DGP — lote 1/45 (ordinais 1–1000): execução em duas etapas

**Denominador canônico:** 44.590 verbetes incorporados (manifesto DGP).
**Branch de auditoria:** `chat-gpt-correcoes`. **Proibido contar triagem como homologação.**

## Etapa 1 — funcional
- XML integral recuperado, 1.000/1.000 lemas correspondentes.
- 1.000/1.000 definições cotejadas; 985 idênticas após normalização e 15 divergências editoriais registradas.
- O teste de navegador anterior foi verde para #14 e #17: 2/1.000 casos.
- Teste integral de pesquisa, abertura, cartões, popups, transcrições e transliteração dos 1.000 verbetes: **em execução**, run [38672378650](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38672378650). O artefato do CI contém as fichas de comportamento por ordinal e será revisado antes do próximo checkpoint.

## Etapa 2 — homologação filológica e editorial
- Consolidação do histórico: 1.000/1.000 relatórios anteriores, A=910, C=8, P=82; há 82 pendências específicas de análise anterior.
- Fichas atômicas estruturadas: 1.000/1.000 criadas em `auditorias/dgp-auditoria-individual-0001-1000.json`, todas EM_EXECUCAO.
- Ainda falta conferência dos dez controles completos por verbete, adjudicação de referências/obras que o XML original não identifica, correções e integração final.
- **AUDITORIA_CONCLUIDA = 0/1.000.** Não é permitido antecipar o selo final sem as evidências previstas no protocolo.
- Os 910 pareceres A históricos não são 910 homologações segundo a regra de 11/10/2026.

## Progresso global
- Fonte incorporada: 44.590/44.590 registros declarados.
- Lote em trabalho: 1.000/44.590 (2,24% do acervo **sob análise**, não homologado).
- Homologação individual e integração comprovadas: **0/44.590 (0%)**.

## Referências internas
- `auditorias/dgp-2026-10-14-cotejo-0001-1000.json`.
- `auditorias/dgp-2026-10-15-consolidacao-historica-0001-1000.json`.
- `auditorias/dgp-auditoria-individual-0001-1000.json`.
- `regras/Rauditoria.txt`.

A etapa 1 deve refletir **somente** a conclusão real do navegador. A etapa 2 só se conclui depois de todas as evidências individuais exigidas, inclusive integração.
