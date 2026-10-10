# GDHAGP — Orquestração independente (norma vigente, 09/10/2026)

## HALOT — extensão documental de fonte (10/10/2026)

Foi designada a fonte HALOT (*The Hebrew and Aramaic Lexicon of the Old Testament*, **Study Edition**, volume 1) e criada a branch exclusiva `chat-gpt-halot`. URL documental indicada: https://yausha.com.br/wp-content/uploads/2024/02/The-Hebrew-and-Aramaic-lexicon-of-the-Old-Testament-study-edition-volume-1.pdf. A regra própria é `regras/Rhalot.txt`. A indicação bibliográfica não equivale à validação textual do PDF, nem ao início de lotes.

HALOT permanece **independente** de BDAG, DGP, LEH, PEREIRA e demais fontes. Escritas lexicais futuras de HALOT ocorrerão exclusivamente na sua branch, após definir e verificar o procedimento de ingestão; a consolidação em `chat-gpt-commits` exigirá PR, auditoria e merge confirmado, preservando a origem. Nenhum agendamento ou alteração automática das rotinas existentes resulta deste cadastro; listas históricas de quatro fontes/seis branches abaixo descrevem as rotinas anteriores e não são evidência de execução HALOT.

## Tarefas agendadas no ChatGPT — implantação experimental (09/10/2026)

**Estado comprovado:** três tarefas recorrentes foram criadas e habilitadas em ChatGPT Tasks, fuso `America/Sao_Paulo`. São independentes e executam a cada hora em janelas defasadas: **incorporação DGP aos :05** (escrita somente em `chat-gpt-dgp`), **auditoria aos :25** (somente `chat-gpt-correcoes`) e **integração aos :45** (PRs/merges somente para `chat-gpt-commits`, se a aprovação filológica aplicável estiver comprovada). A ingestão almeja **até 100 registros canônicos por rodada**, sem assumir garantias de produção contínua.

**Atenção:** o agendador atualmente disponível **não fornece seleção nem comprovação do nível High**. Os prompts exigem High quando selecionável e bloqueiam declarações de revisão High não comprovada. Ausente garantia High, limitar o trabalho a comparações determinísticas verificáveis, registrar revisão editorial pendente e **não integrar automaticamente lotes sem a aprovação exigida**. Não contratar API paga, não tocar `main` nem outras fontes, não apagar branches ou forçar push. Falhas e fases pendentes não devem descartar commits confirmados. **Nenhuma execução agendada foi ainda auditada como bem-sucedida.**

O workflow GitHub Actions de validação somente leitura, criado em `main`, é uma rotina separada e não representa a execução dessas três tarefas do ChatGPT. O workflow de produção `dgp-hourly.yml` continua sem instalação em `main`. Não confundir **tarefas ChatGPT habilitadas** com **produção GitHub Actions ativada**.


## Norma de orçamento e raciocínio — 09/10/2026 (SEM CUSTO EXTRA)

**Decisão expressa do mantenedor:** o Scriptura Lexicon deve operar exclusivamente com recursos já incluídos na assinatura atual do ChatGPT e com ferramentas gratuitas disponíveis, **sem contratar a OpenAI API, créditos por tokens, upgrades de plano ou outro serviço pago**. Não criar segredos de API paga nem ativar faturamento como condição da execução. Nenhuma solução de custo adicional é autorizada.

**Exigência editorial:** a etapa filológica deve usar **raciocínio High**, sem substituição silenciosa por Instant. O executor Python/GitHub Actions é determinístico e não configura nem executa um modelo High; seus testes de integridade não equivalem à auditoria lexicográfica. Tarefas agendadas internas do ChatGPT somente poderão realizar edição/auditoria automaticamente se sua interface e sua execução efetiva permitirem **selecionar e verificar High** com a assinatura existente; não presumir essa garantia.

**Modo seguro atual:** manter desativada a incorporação editorial agendada e a integração automática. Usar GitHub Actions somente para validação determinística e ensaios sem custos adicionais, com gates de publicação; realizar análise filológica via sessões High do ChatGPT sob acompanhamento do mantenedor quando a modalidade High estiver disponível. Se não houver garantia de High nos agendamentos, optar por supervisão humana; não afirmar capacidade de 100 verbetes/hora desassistidos.


## Implantação do runner: estado de preparação

O executor determinístico do DGP e o workflow em `.github/workflows/dgp-hourly.yml` encontram-se preparados em `chat-gpt-commits`, mas **NÃO estão instalados na branch padrão main nem executando automaticamente**. Seus testes Python e de PR/merge ainda devem ser validados em runner antes da ativação. A variável `DGP_ALLOW_STATIC_INTEGRATION=false` impede que uma auditoria meramente textual seja considerada certificação editorial High. Consultar `docs/DGP-AUTOMACAO.md` para detalhes e critérios de liberação.


## Regra superior de continuidade — fase exclusiva DGP (09/10/2026)

Esta norma prevalece sobre a programação histórica descrita abaixo. BDAG, LEH e PEREIRA permanecem **temporariamente suspensos**. Cada ciclo DGP usa 100 verbetes e três etapas persistentes: (1) `chat-gpt-dgp`, com commit fonte; (2) `chat-gpt-correcoes`, com relatório de auditoria independente e eventuais correções; (3) PR/merge em `chat-gpt-commits`. A perda de uma etapa não apaga o commit de outra. Reconciliar o HEAD remoto antes de qualquer repetição; proibir duplicações, branches auxiliares, exclusão de origens, force push e alterações em `main` sem autorização expressa. A cadência horária e modelo High **não constituem garantias de serviço**; a programação deve ser validada antes de uso. Este texto normativo não cria, por si, agendamento algum. **Ciclo de prova nº 1 (lote 69):** incorporação 9e371763, auditoria cc47e615, merges #74 e #75 confirmados; auditoria textual 100/100, navegador pendente. Fluxo realizado manualmente, **sem agendamento automático instalado**.


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

## Resolução autônoma de conflitos (autorização vigente, 09/10/2026)

A quinta rotina tem autorização expressa para **tomar as decisões de resolução de conflitos por conta própria**, sem pedir confirmação individual em merges. Conflitos de texto, documentação, estrutura ou estado devem ser diagnosticados e reconciliados ativamente; não interromper automaticamente o fluxo por mero `mergeable=false`.

Procedimento determinístico:
1. Ler os HEADs reais da origem e de `chat-gpt-commits`, o merge-base, o diff e os arquivos afetados. Verificar se outro agente alterou os ramos e reavaliar em caso de concorrência.
2. Classificar cada conflito: **léxico exclusivo da fonte** (preservar conteúdo canônico novo e o conteúdo integrado de outras fontes), **documentação compartilhada** (compor alterações compatíveis, eliminar duplicações sem perder normas), **estilos/JS** (reunir funcionalidades e corrigir dependências com testes), **checkpoint/manifesto** (preservar por fonte; nunca copiar o estado de uma fonte para o caminho da outra) ou **correção editorial** (aplicar apenas quando comprovada, sem alterar silenciosamente a leitura da fonte).
3. Verificar preservação dos registros existentes, originais e novos; `search-row`/`entry-card` correspondentes, unicidade e contagens por fonte; sintaxe, links, popups e regressões. Preservar as nove propriedades originais dos registros PEREIRA. Não escolher indiscriminadamente “ours” ou “theirs”, nem inventar conteúdo lexical.
4. Preparar árvore de resolução sobre o HEAD do destino, com **dois pais reais** quando fizer merge manual; verificar HEAD imediatamente antes de publicar; atualizar somente `chat-gpt-commits` por `expected_sha` e `force=false`. Confirmar no GitHub o commit, o HEAD, e que o PR está `closed` **e** `merged=true`.
5. Registrar arquivos conflitantes, decisão justificada, dados preservados, testes e SHAs. Se nenhum caminho puder ser validado com segurança, **manter o PR aberto** e relatar o bloqueio específico, mas prosseguir com as integrações independentes seguras.

Essa autonomia **não** permite apagar verbetes, reescrever histórico, excluir ramos ou tocar em `main`. Mantém-se também a auditoria obrigatória das 05h como primeira fase do quinto agendamento.
