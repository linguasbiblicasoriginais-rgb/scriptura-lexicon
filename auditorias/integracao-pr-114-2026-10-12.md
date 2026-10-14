# PR #114 — Reconciliação de conflitos de integração DGP

Data: 12/10/2026. Origem `chat-gpt-dgp`, HEAD inicial `59d497c25c0a9bbc0a15a2d49d6586e5d6892500`; destino `chat-gpt-commits`, HEAD inicial `5e8f674b6821e28a89c738ce48074e97cbc4961c`. Ancestral comum `87d01c4b9d14454c81c866dc9daf6aee259178ca`. PR: https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/114.

## Escopo, conteúdo e decisão

- O PR da origem apresenta dez caminhos: cinco módulos DGP inéditos no destino, `index.html`, `README.md`, `lexicons/dgp-progress.json`, `regras/Rdgp.txt` e `regras/estado-orquestracao.json`.
- Acrescentados os módulos DGP `077` (100 verbetes, 2881–2980), `078` (20, 2981–3000), `079` (100, 3001–3100), `080` (100, 3101–3200) e `081` (100, 3201–3300). Total adicionado: **420 registros**; manifesto acumulado: **3300**; próximo: ordinal **3301**, lema **ἀνέπηλα**.
- Verificação estática dos cinco blobs da origem: **420/420 `search-row`**, **420/420 `entry-card`**, IDs e `data-target` consecutivos sem duplicações nem destinos ausentes. Estes resultados não representam colação filológica independente, execução no navegador, inspeção de acessibilidade ou prova de publicação final.
- Mantido o `index.html` consolidado, inserindo somente as cinco tags de script imediatamente após `dgp-batch-076.js` e antes do formatador `dgp-format.js`.
- Preservado o `README.md` de destino e acrescido o registro histórico original dos lotes 77–81; anexados `Rdgp.txt` e os cinco registros editoriais de origem; manifesto DGP atualizado sobre a versão consolidada, conservando o histórico dos lotes anteriores.
- `regras/estado-orquestracao.json` **não foi sobrescrito**: na branch de destino ele registra o estado legado BDAG e difere do arquivo de origem DGP, não sendo apropriado tratá-lo como checkpoint global compartilhado. O progresso DGP fica registrado no manifesto específico.
- Sem escrita em `main`, exclusão de branches, substituição de módulos de outros léxicos ou alegação de homologação textual integral.

## Evidência pós-merge

A conclusão operacional requer confirmar HEAD remoto, `merged=true`, presença dos cinco módulos, `index.html`, manifesto e conservação dos blobs de outros léxicos. Qualquer teste GitHub Actions é informação separada; não alegar aprovação de CI sem observar execução real.
