# DGP — etapa 3, fechamento documental da segunda unidade

**Atualizado:** 15/10/2026. **Resultado:** 20/1.000 selos AUDITORIA_CONCLUIDA conforme Rauditoria; 980 EM_EXECUCAO.

Os novos 15: 28, 31, 40, 42, 47, 49, 66, 68, 69, 72, 73, 90, 101, 108, 119.

## Comprovação da integração

- [PR #149](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/149), `state=closed`, `merged=true`, SHA `4fb982238c55b37cfe68b1dfc9def65791951a71`.
- [PR #150](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/150), reparo do workflow para o catálogo sob demanda `scripts/build-on-demand.mjs`, `merged=true`, SHA `bc5bbc185cfd73b115cda681c11b852e3bced999`.
- [GitHub Actions no destino #38738831776](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38738831776), commit `bc5bbc185cfd73b115cda681c11b852e3bced999`, `completed / success` em Chromium para os 15, com catálogo construído pelo executor oficial.
- O CI anterior ao reparo #38738300328 falhou por HTTP 404 no catálogo não gerado; foi diagnosticado e solucionado sem alterar o texto lexical.
- Fichas individuais `auditorias/dgp-etapa3-0001-1000.json` e `auditorias/dgp-auditoria-individual-0001-1000.json` contêm os controles e SHAs por verbete.

## Contadores

- Etapa funcional: **1.000/1.000** aprovada no Chromium (regressão #38673465781).
- Etapa de homologação: **20/1.000** definitivamente homologados (**2%** do lote).
- DGP completo: **20/44.590** definitivamente homologados (**0,0449%**).
- **980/1.000** pendentes de exame atômico completo, especialmente 120 exemplos sem obra e 82 pendências históricas (não necessariamente conjuntos distintos).

Nenhum novo sentido ou texto original foi emendado por essa rodada de 15 fichas.
