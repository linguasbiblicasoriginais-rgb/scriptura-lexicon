# JASTROW — diagnóstico reproduzível de integração (12/10/2026)

**Objetivo:** conferir, sem escrita remota, a possibilidade de integrar as correções documentadas do intervalo `A00000–A00099` da branch `chat-gpt-correcoes` em `chat-gpt-commits`, preservando as alterações independentes de outros léxicos. Esta verificação não realiza merge nem altera `main`.

## Evidência real do GitHub Actions

- [Execução read-only #38270438672](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38270438672), concluída com sucesso no sentido de que a **simulação e o diagnóstico** foram executados.
- Commit remoto de origem efetivamente simulado: `a68fd2434a7acf5262075e877db3384baf1f4190`.
- Commit remoto de destino efetivamente simulado: `e1f65bb0a8078f59bb652414a1dd494e50957743`.
- Comando executado: `git merge-tree --write-tree --name-only origin/chat-gpt-commits origin/chat-gpt-correcoes`.
- Resultado do próprio `merge-tree`: **EXIT_CODE=1** (há conflitos), apesar do GitHub Actions encerrar com `success` porque o workflow é de diagnóstico e não exige merge limpo.

## Arquivos com conflitos demonstrados

| Arquivo | Conflito retornado pelo merge-tree |
|---|---|
| `README.md` | content |
| `regras/Rcorrecoes.txt` | content |
| `regras/Rhalot.txt` | content |
| `regras/Rjastrow.txt` | content |
| `regras/Rprogresso-global.txt` | add/add |
| `regras/Rthayer.txt` | content |

O comando **não apontou conflito nos módulos JS do JASTROW**. Contudo, aplicar integralmente o merge sem resolver os seis conflitos documentais apagaria ou misturaria conteúdo de outras frentes, contrariando as regras do projeto.

## Relação com a homologação de 100

Os 100 pareceres filológicos digitais já documentados têm 58 A, 42 C. A leitura comparada dos arquivos de ambos os HEADs detectou exatamente 42 conteúdos editoriais diferentes nos primeiros 100 IDs, correspondentes aos 42 C. As diferenças estão distribuídas pelos módulos `lexicons/jastrow-011-040.js`, `lexicons/jastrow-041-080.js` e `lexicons/jastrow-081-110.js`; o consolidado ainda contém conteúdo anterior à colação digital nesses registros.

**Nenhum PR criado, merge efetuado ou selo `AUDITORIA_CONCLUIDA` atribuído.** Para obter certificação real, o integrador autorizado precisa preservar os seis textos em conflito, aplicar as 42 correções sem afetar os demais léxicos, executar a regressão após a reconciliação e confirmar `merged=true` e o commit resultante em `chat-gpt-commits`. Este documento é evidência de bloqueio e roteiro preciso, não certificado.
