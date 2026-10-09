# GDHAGP — Orquestração independente (norma vigente, 09/10/2026)

## Princípio
Cada fonte BDAG, DGP, LEH e PEREIRA evolui de maneira autônoma. **Revogada a ordem sequencial** e qualquer condição de aguardar outra fonte. Quatro tarefas horárias próprias incorporam lotes e **não podem abrir PR, mesclar, rebasing ou tocar `chat-gpt-commits`**. A quinta rotina, de integração a cada 3 horas (8 vezes por dia), é a única responsável por PRs de seis branches de trabalho contra `chat-gpt-commits`. Não há publicação automática em `main`.

| Rotina | Período | Escrita permitida |
|---|---|---|
| BDAG | 1 hora | `chat-gpt-bdag` |
| DGP | 1 hora | `chat-gpt-dgp` |
| LEH | 1 hora | `chat-gpt-leh` |
| PEREIRA | 1 hora | `chat-gpt-pereira` |
| Integração | 3 horas | `chat-gpt-commits`, via PR/merge controlado; ler origens |

A capacidade e ativação dos agendamentos são gerenciadas externamente: esta norma não é prova de tarefas criadas.

## Pré-voo e autoridade
Em cada execução, consultar HEAD remoto real da **própria fonte** e a regra `regras/Rbdag.txt`, `Rdgp.txt`, `Rleh.txt` ou `Rpereira.txt` correspondente, o checkpoint lexical, o módulo e a fonte primária. O manifesto `regras/estado-orquestracao.json` tem escopo **local** à branch. Não usar seu campo legado `order` (eliminado nesta revisão), nem exigir que BDAG esteja pronto para avançar DGP, LEH ou PEREIRA. O pré-voo remoto de `tools/validar_orquestracao.py --stage FONTE` é opcional e **não constitui auditoria filológica**; `--all` é diagnóstico informativo, não condição de execução de outra fonte.

## Execução horária da fonte
1. Verificar o HEAD GitHub real, fontes e último registro lexical publicado; rejeitar checkpoint obsoleto.
2. Extrair somente dados efetivamente acessíveis na fonte canônica; nunca inventar grafias, referências, sentidos nem preencher campos ausentes. Respeitar limites de lote definidos pela respectiva regra.
3. Auditar entrada por entrada, `search-row`, `entry-card`, IDs, `data-target`, transliterações, abreviaturas/popups e URLs verificadas.
4. Criar blobs/árvore e **um commit atômico por lote** no HEAD da branch própria, incluindo checkpoint e regras/README pertinentes, salvo normas específicas de agrupamento de lotes da fonte. Usar `expected_sha` e `force=false`; nunca criar branch temporária, PR ou commit em outra fonte.
5. Reler commit, arquivos, contagens e próximo lema na origem. Falhas recuperáveis afetam **somente aquela fonte**; não desligar outras tarefas ou duplicar lotes. Registrar impedimento sem declarar publicação.
6. Gerar tabela **sempre com os totais de BDAG, DGP, LEH e PEREIRA**, consultados de seus HEADs remotos, e indicar método ou `não verificado`.

## Integração a cada 3 horas
Consultar mudanças nas branches `chat-gpt-bdag`, `chat-gpt-dgp`, `chat-gpt-leh`, `chat-gpt-pereira`, `chat-gpt-estilos` e `chat-gpt-correcoes`; comparar com `chat-gpt-commits`. Para cada origem com mudanças ainda não integradas, localizar PR aberto existente ou abrir um único PR, **base `chat-gpt-commits`, head da origem**. Auditar os diffs, enfrentar conflitos preservando lexemas e dados de todas as fontes, testar integridade e compatibilidade, mesclar e conferir `merged=true`. Preservar branches de origem; não mover ou reescrever seu HEAD, não usar force push/reset destrutivo nem escrever em `main`. Se conflitos não puderem ser resolvidos com segurança, manter PR aberto e relatar bloqueio sem alterações conjecturais. Ver `regras/Rintegracao.txt`.

**Manifestos:** `regras/estado-orquestracao.json` nas origens; instantâneos `regras/estado-orquestracao-dgp.json`, `...-leh.json` e `...-pereira.json` em `chat-gpt-commits`, nunca um manifesto global que apague os demais. A integração pode adicionar instantâneo BDAG sob caminho próprio para padronização, sem apagar legado.

## Relatório obrigatório de contagens
Tabela de quatro linhas, com `fonte | quantidade total de verbetes | branch/HEAD | método e ressalvas`, **inclusive quando algum processo falhar**. Totais devem ser recalculados após cada operação; não reproduzir números históricos como se fossem atuais. Informar `não verificado` onde a checagem falhar. O DGP possui no checkpoint 1.830 (lote 63), mas há uma discrepância de contagem de marcações HTML a auditar. Não afirmar validação estrutural completa apenas com o manifesto.

## Fontes e limitações
Os PDFs `fontes/fonte-bdag.pdf` e `fontes/fonte-leh.pdf` são caminhos estáveis; conferir SHA e intervalo do PDF. O PEREIRA requer HTTP POST à API oficial, cujo acesso via PowerShell foi comprovado, mas **o acesso automático pela tarefa horária ainda não está implantado**. Não mascarar esse bloqueio.

## Segurança e concorrência
Cada executor possui sua branch exclusiva; commits devem ser atômicos, com verificação de HEAD anterior, atualização concorrente protegida, auditoria posterior e sem force. Nem a infraestrutura comum nem a branch `main` devem sofrer alterações a partir das rotinas de incorporação.


## Quinta tarefa efetiva: integração 3h + auditoria diária às 05h (09/10/2026)

**Agendamento ativo:** frequência diária com horários **02:00, 05:00, 08:00, 11:00, 14:00, 17:00, 20:00 e 23:00**, no fuso **America/Sao_Paulo** (8 execuções diárias e intervalo de 3 horas). Os quatro agendamentos horários de incorporação permanecem autônomos e não abrem PR.

**Exceção obrigatória às 05:00:** executar PRIMEIRO a auditoria diária inteira definida em `regras/Rcorrecoes.txt`, com leituras do HEAD real, revisão de verbetes, popups, referências, formatação, HTML/JS/CSS, IDs e testes de regressão; commits corretivos **apenas em `chat-gpt-correcoes`** com `expected_sha` e `force=false`. Preservar todas as regras da antiga auditoria diária. Relatar cobertura efetiva e falhas, sem inventar resultados. A antiga tarefa independente de auditoria foi pausada, mas **o compromisso das 05h não foi cancelado**.

**Segunda fase às 05:00 e única fase nos demais horários:** integrar PRs das seis branches autorizadas para `chat-gpt-commits`, com análise de conflitos, verificação de merge e preservação de origens. Não misturar permissões: a fase de auditoria só escreve em `chat-gpt-correcoes`; a fase de integração apenas faz as mudanças de integração em `chat-gpt-commits`. A falha de uma fase exige aviso específico e não autoriza ocultar a outra. A verificação de integração nunca é pré-requisito para começar a auditoria das 05h.

**Garantias e limites:** está confirmado o agendamento, mas não a execução futura; interrupções do serviço, da API ou do GitHub podem causar falha. Não afirmar execução sem relatório e confirmação remota. Todos os relatórios incluem a tabela de totais atuais dos quatro dicionários.
