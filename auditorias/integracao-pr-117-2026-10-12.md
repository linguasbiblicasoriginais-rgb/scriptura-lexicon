# Resolução do conflito de integração — PR #117 — 12/10/2026

## Identificação
- Origem: `chat-gpt-jastrow`, HEAD anterior `84345a00d504a3ce7f0ce98863776482a299951c`.
- Destino: `chat-gpt-commits`, HEAD anterior `f0cd00137ab1e25e85133e23e86e0efdba71ddf2`.
- Ponto comum: `e042fe9dc51389f86391532cfbb43b504719c974`.
- Divergência inicial: seis commits próprios da origem e 216 commits da base; PR aberto e com `mergeable=false` antes da conciliação.
- `main`: não modificada. A branch da origem deve permanecer existente.

## Regras de conciliação
1. A árvore integral do destino constitui a base, preservando commits, relatórios e lexicons independentes.
2. Foram recuperados por SHA os oito módulos `lexicons/jastrow-601-650.js` até `jastrow-951-1000.js` e os lotes de fonte `jastrow-source-lote-0004.json` e `jastrow-source-lote-0005.json`, mantendo os bytes de cada blob da origem.
3. `index.html`: inseridos oito carregamentos em sequência, depois de `jastrow-popups-511-600.js` e antes de `script.js`, sem remover os demais scripts.
4. `README.md`: preservados os documentos do destino e acrescentadas as duas seções da origem para os ordinais 601–800 e 801–1.000.
5. `lexicons/jastrow-progress.json`: conservados o histórico de integração, as sete rodadas anteriores e a triagem filológica de 600; acrescentadas as rodadas 8–9 e o checkpoint de 1.000 publicados. `total_audited=0` permanece. `total_integrated=600` até confirmação do merge deste PR.
6. `.github/workflows/jastrow-source.yml`: preservado o passo determinístico de auditoria do XML e atualizado o lote de extração/validação para ordinais 801–1.000. A presença prévia do lote 0005 mantém a proteção contra duplicações.

## Verificações realizadas nesta preparação
- Oito arquivos JS, 50 registros `sid` em cada, total **400**.
- Sequência de `A00600` a `A00999`, sem lacunas ou duplicatas.
- Comparação exata dos 400 pares `sid`/lema com os 400 registros originais nos lotes 0004 e 0005: **zero divergências**.
- Cada lote fonte contém 200 registros, com intervalos 601–800 e 801–1.000.
- A árvore resultante preserva o histórico de destino e contém somente acréscimos controlados para JASTROW.
- **Não realizado nesta conciliação:** auditoria semântica independente dos 400 novos verbetes, teste em navegador, acessibilidade e certificação atômica. A mesclagem definitiva deve ser confirmada no GitHub; este relatório não é evidência de que ocorreu.

## Proveniência
- Sefaria-Data, commit `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`.
- Manifestos `lexicons/jastrow-source-lote-0004.json` e `0005.json`, originais preservados sem tradução na camada Fonte.
