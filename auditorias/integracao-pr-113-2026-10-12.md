# Reconciliação de conflitos — PR #113 (THAYER)

Data: 12/10/2026. PR: https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/113.
Origem: chat-gpt-thayer @ 1be2956307d8e5a1c377bc9fb2f1fc30d2a26e78; destino: chat-gpt-commits @ e1f65bb0a8078f59bb652414a1dd494e50957743; ancestral comum: d5ba094d6c122926ed91c663c0c6465422b500b6.
O PR apresenta 26 arquivos alterados; todos os respectivos caminhos também aparecem nas mudanças já incorporadas no destino desde o ancestral comum. O destino já possui versões mais recentes de README, index, módulos THAYER, checkpoint, normas e auditorias posteriores de 12/10/2026. Aplicar as versões antigas da origem sobre o destino provocaria regressão de correções lexicais e dos 512 cotejos dirigidos preliminares.

## Decisão de resolução

- Preservar integralmente a árvore atual de `chat-gpt-commits` como base, especialmente `index.html`, `lexicons/thayer*.js`, `lexicons/thayer-progress.json` e os relatórios posteriores, sem reverter edições de outras fontes.
- Restaurar em `regras/Rthayer.txt` a norma permanente do quadro global de progresso da origem, ausente da versão consolidada.
- Acrescentar nota ao `README.md` com histórico da reconciliação e escopo limitado ao PR #113.
- Conservar `chat-gpt-thayer` e `main` intactas quanto a exclusão e escrita na branch principal, respectivamente.

## Limites de auditoria

Esta reconciliação é de histórico Git e documentação; **não constitui homologação filológica integral dos 512 verbetes**. A existência dos 26 caminhos em ambos os históricos foi confrontada; os blocos de código mais recentes foram preservados para evitar retrocessos. O sucesso do merge e de verificações automáticas deve ser confirmado em separado após a publicação do commit de resolução.
