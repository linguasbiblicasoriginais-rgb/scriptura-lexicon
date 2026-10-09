# Política de branches e execução paralela — 09/10/2026

BDAG, DGP, LEH e PEREIRA são fontes **independentes**; não há mais ciclo sequencial. Cada uma tem agendamento horário e branch exclusiva para publicação lexical, checkpoint e documentação pertinente.

| Fonte | Branch de escrita | Módulos e checkpoint |
|---|---|---|
| BDAG | `chat-gpt-bdag` | `lexicons/bdag.js` e `regras/Rbdag.txt` |
| DGP | `chat-gpt-dgp` | `lexicons/dgp*.js`, `lexicons/dgp-progress.json` e `regras/Rdgp.txt` |
| LEH | `chat-gpt-leh` | `lexicons/leh.js`, `regras/Rleh.txt` e manifesto LEH |
| PEREIRA | `chat-gpt-pereira` | `lexicons/pereira.js`, `lexicons/pereira-progress.json` e `regras/Rpereira.txt` |

O processo de BDAG não depende de DGP, LEH ou PEREIRA, e vice-versa. Um bloqueio de API, PDF ou auditoria afeta somente a fonte correspondente.

## Distinção entre incorporação e integração
Os quatro executores horários **não abrem PR**, não mesclam e não editam `chat-gpt-commits` nem `main`. Apenas a rotina de integração trihorária abre/reutiliza e resolve PRs das seis origens `chat-gpt-bdag`, `chat-gpt-dgp`, `chat-gpt-leh`, `chat-gpt-pereira`, `chat-gpt-estilos` e `chat-gpt-correcoes` para `chat-gpt-commits`. Depois das verificações e do merge, o PR deve constar como `merged`, sem exclusão das branches originais. Nenhuma rotina escreve em `main`.

## Proteção do conteúdo e infraestrutura
As fontes não devem sobrescrever módulos lexicais das demais. Arquivos compartilhados como `index.html`, `script.js`, `style.css`, `README.md` e `ORQUESTRACAO.md` exigem reconciliação explícita na integração, preservando todas as edições legítimas. Manter `bibliographicTerms` da fonte específica e popups comprovados; não harmonizar acepções nem inferir etimologias. Regras e README devem acompanhar alterações significativas em commits do próprio escopo. Se uma mesclagem trouxer conflitos estruturais ou lexicográficos, não executar merge sem prova de conservação integral.

Os manifestos `regras/estado-orquestracao.json` são próprios das branches, com `stage`, `branch` e checkpoint local. No ramo de integração, cópias por fonte recebem sufixo (`-dgp`, `-leh`, `-pereira`, `-bdag` quando aplicável). Não substituir o estado de uma fonte pelo de outra.

## Auditoria
Antes de cada commit: pares `search-row`/`entry-card`, IDs únicos, alvos válidos, sem órfãos, URL verificada e popups corretos. Depois de cada commit/merge, confirmar HEAD, SHA, arquivos e integridade no GitHub. Cada relatório de qualquer uma das cinco rotinas inclui tabela com os totais **BDAG, DGP, LEH e PEREIRA**, consultados nas origens no momento da execução. Não confundir checkpoint do DGP com contagem estruturada de cartões sem auditoria.

## Conflitos na integração — decisão autônoma

A rotina trihorária deve resolver conflitos por conta própria, sem pedir autorização repetitiva. Nas divergências de `README.md`, `ORQUESTRACAO.md`, `PARALLEL_WORKFLOW.md` e regras, preservar e compor os trechos atuais de todas as frentes; nos manifestos `regras/estado-orquestracao.json` locais, criar/atualizar cópias de estado **com sufixo da fonte**, em vez de sobrescrever o de outra fonte. Ao conciliar módulos JS/CSS ou popups, conservar todas as funções legítimas e validar carregamento, alvos, IDs e ausência de regressões; não modificar o significado lexical ou fazer harmonização entre fontes. Preferir merge auditável de dois pais com `expected_sha`, `force=false`, certificando `merged=true` no PR. Se for impossível demonstrar a conservação dos dados, manter somente o PR arriscado pendente, com diagnóstico concreto, e continuar outros. Nenhuma dessas decisões autoriza escrita em `main` ou em branches de origem durante a integração.
