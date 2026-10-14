# PR #122 — conciliação de JASTROW em chat-gpt-commits

- **Data:** 14/10/2026.
- **Repositório:** `linguasbiblicasoriginais-rgb/scriptura-lexicon`.
- **PR:** https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/122.
- **Origem / HEAD inicial:** `chat-gpt-jastrow`, `015115881e83fa128cc487497f50fec1835f3690`.
- **Destino / HEAD inicial:** `chat-gpt-commits`, `2bbc30bcf28dd1fdb6ed9b5052b7bc18c3c5cb95`.
- **Ancestral comum:** `efbdf3f7039772e26a8bda8751ca033f0e8be00a`.
- **Divergência:** 102 commits na origem e 16 commits no destino. PR com 274 arquivos alterados, 89.712 inserções e 79 remoções (comparativo pré-conciliação).

## Critério da resolução

A comparação das duas branches com o ancestral comum identificou apenas **dois caminhos modificados em ambos os lados**, `README.md` e `index.html`. Mantidos integralmente os 15 caminhos alterados exclusivamente no destino: frontend, documentação, workflows, oito capas PNG e testes, além de `script.js` e `style.css`. Preservadas as modificações exclusivas da origem, com todos os módulos JASTROW, JSON de fontes e controles, TSVs e workflows.

- **README.md:** concatenação conservadora dos prefácios exclusivamente acrescentados em cada branch, seguida do texto ancestral inalterado. Introduzida nota de reconciliação e dos limites editoriais.
- **index.html:** adotado o documento de destino para conservar a interface nova, acrescentando após o módulo `jastrow-951-1000.js` os **111** carregamentos existentes apenas na origem, na mesma ordem original. Mantidos os scripts de DGP, BDAG, LEH, PEREIRA, THAYER e HALOT; catálogo bibliográfico carregado antes de `script.js`.
- **Regras e branches:** `main` não é alterada; `chat-gpt-jastrow` é preservada. Nenhum módulo lexical preexistente foi reescrito nesta resolução.

## Escopo dos testes e limitações

Validações determinísticas de preparação: interseção dos caminhos divergentes (2), unicidade dos 111 novos `script src`, manutenção do catálogo da interface e composição dos prefácios do README sem descartar o ancestral comum. Os demais caminhos são preservados por referência aos objetos Git originais, sem recodificação textual ou binária. O marco `lexicons/jastrow-progress.json` da origem relata **12.000 publicados**, `total_audited=0` e `total_integrated=1.000` antes deste merge. O valor de integração só pode ser atualizado depois da confirmação do merge remoto. Glosas recentes incluem traduções automáticas preliminares, não revistas; integração técnica NÃO representa homologação filológica e não substitui teste de navegador ou auditoria atômica por verbete.

## Verificação de integração

Confirmar no GitHub que o PR #122 passou a `merged=true`, com commit de merge verificável em `chat-gpt-commits`. Executar testes funcionais e revisão independente posteriormente. Este relatório de preparação não antecipa resultado remoto.
