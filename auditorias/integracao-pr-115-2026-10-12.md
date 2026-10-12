# Resolução de conflitos — PR #115 (12/10/2026)

PR https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/115. Origem `chat-gpt-correcoes` @ `7bade2a9154d5150efe13880089441da0a5fda42`; destino `chat-gpt-commits` @ `86ebf2168d652d7ca6d6829978941484782ef4e6`; ancestral comum `3728a682973d37093e1a3bac14163b0d47107396`.

O PR original possuía 72 commits e 120 caminhos alterados. A branch destino avançara 81 commits. A estratégia é a árvore consolidada como base, com transferência seletiva de correções e documentação de JASTROW/DGP.

- Mantidos `index.html`, `lexicons/dgp-progress.json` (81 lotes, 3.300 verbetes), `regras/estado-orquestracao.json` (controle BDAG), arquivos THAYER e seu checkpoint de 512, demais fontes e os PRs #113 e #114.
- Incorporados **26 módulos JASTROW efetivamente modificados**, de A00010 a A00599 em intervalos distribuídos, sem alterar `jastrow.js` nem os três arquivos canônicos XML de 200 registros. Os três primeiros módulos corrigidos coincidem com os três SHAs previstos no manifesto das 42 correções no lote A00000–A00099, conferidos contra o destino anterior.
- Incorporados `lexicons/dgp.js` e `lexicons/dgp-format.js` corrigidos, além das evidências de auditorias JASTROW/DGP, scripts de testes e workflows. O progresso filológico de DGP registra 1100/3300 registros com pareceres históricos, sem implicar homologação do restante.
- Arquivos de regras preservam o texto já consolidado e acrescentam os registros documentais de origem. Referências históricas a não integração não substituem o estado remoto posterior.
- Não houve alteração de `main` nem exclusão de branches. Testes reportados pela origem (Chromium, GitHub Actions) são históricos, em SHA específico; exigem revalidação sobre a árvore combinada.

**Verificações pós-merge obrigatórias:** `merged=true`, HEAD remoto, carga dos lotes 077–081, checkpoint DGP 3300, checkpoint THAYER 512, integridade das 26 versões corrigidas de JASTROW e disponibilidade de relatórios; quaisquer novos resultados de CI devem ser declarados separadamente. A integração não equivale a auditoria filológica concluída (a origem indica 0/600 certificados atômicos JASTROW).
