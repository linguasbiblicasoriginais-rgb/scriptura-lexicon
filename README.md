# Scriptura Lexicon

> **DGP — homologação filológico-documental 0001–0600 (11/10/2026):** os 600 verbetes foram confrontados com o XML canônico e os pareceres individuais, resultando em **A 528, C 4, P 68**. Os **68 P não são homologação sem ressalvas**. [Relatório de 600 verbetes](auditorias/dgp-filologia-2026-10-11-homologacao-0001-0600.md) e [evidência integral JSON](auditorias/dgp-filologia-2026-10-11-homologacao-0001-0600.json). A auditoria textual/estrutural (3.300/3.300) e a integração (2.880/3.300) são processos separados. Cinco novas notas editoriais têm teste Chromium aprovado na [execução #38175516482](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38175516482).


> **DGP — Auditoria textual e estrutural homologada (11/10/2026):** ✓ **3.300/3.300 (100%)** na conferência estática e nos testes Chromium/Playwright sobre a montagem completa; a branch consolidada mantém **2.880/3.300 integrados**. Prova: [GitHub Actions #38174680134](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38174680134). Relatório: [homologação DGP](auditorias/dgp-homologacao-textual-estrutural-2026-10-11.md). Não implica homologação filológica, WCAG ou integração dos lotes 077–081.


## DGP — correções de busca, tooltip e proveniência (11/10/2026)

A rotina de correções ajustou, no módulo DGP, a indexação dos corpos completos dos cartões, o tooltip da abreviatura `fut.` e a separação visual em `ἀλείφω` (#1627). Também explicita em notas editoriais os lemas recuperados #2311 e #2483. São mudanças na apresentação/índice, **sem modificar a fonte XML nem acrescentar verbetes**. Ver [relatório técnico](auditorias/dgp-reparos-funcionais-2026-10-11.md). Os módulos 077–081 ainda dependem da integração própria; os testes reais em navegador continuam obrigatórios.


## JASTROW — 100 ressalvas sob auditoria filológica única (11/10/2026)

Foram examinados **100 casos previamente sinalizados** no Jastrow (11 V históricos e 89 O); a contagem **A=37, C=28, P=35** foi o estado INICIAL deste lote e foi posteriormente encerrada como **A=37, C=63, P=0**, incluindo correções e resolução da remissão A00429; ver [relatório](auditoria/JASTROW-2026-10-11-auditoria-unica-100-pendencias.md), [fonte XML de cada caso](auditoria/JASTROW-2026-10-11-auditoria-unica-100-evidencias.json) e [checkpoint único](auditoria/jastrow-auditoria-unica-progresso.json). A auditoria é uma etapa única: P não cria recotejo global obrigatório e não equivale a aprovação. O total incorporado permanece 600, sem novos IDs após A00599; o histórico original da auditoria anterior permanece preservado.


## Tabela global canônica de progresso (11/10/2026)

Obrigatória em todos os relatórios, com as colunas **Dicionário | Incorporação | Auditoria textual e estrutural | Auditoria filológica | Integração | Total incorporado**. A tabela inclui **14 fontes**, mesmo as ainda não iniciadas, além da linha **TOTAL**: BDAG, DGP, LEH, PEREIRA, JASTROW, THAYER, HALOT, ROBINSON, KLEIN, ABBOTT-SMITH, BDB-H, BDB-A, GESENIUS e LSJ. Consultar [regras/Rprogresso-global.txt](regras/Rprogresso-global.txt) e conferir HEAD e evidências atuais, sem confundir triagem documental com homologação filológica.

## Política vigente de auditoria filológica — **etapa única por verbete** (11/10/2026)

**NORMA FILOLÓGICA ÚNICA — 11/10/2026.** Por decisão editorial, não há mais uma filologia "preliminar" seguida de outra "exaustiva". Em **cada execução solicitada**, examinar com rigor a fonte e a redação do verbete (lemas/variantes, homógrafos, flexões e regência, **todas** as acepções, referências, exempla, etimologias, hipóteses e aparato pertinente), produzir parecer individual e **corrigir na própria rodada** o que estiver comprovado. Uma entrada termina como **A — aprovada**, **C — corrigida e validada** ou **P — pendência pontual documentada**; a pendência **não provoca repetição geral do lote** nem autoriza afirmar que o verbete está aprovado. **Auditoria filológica é uma só.** Ver [norma canônica completa](regras/Rauditoria-filologica.txt).

**Histórico e honestidade:** os 600 registros JASTROW já foram cotejados pelo método anterior e 400 registros DGP constam do checkpoint mais recente consultado; preservar esses resultados **sem fingir verificações não feitas** e **sem impor outra passagem geral**. Eventuais dúvidas são tratadas pontualmente. A partir dos próximos lotes, a única auditoria já inclui todas as verificações filológicas aplicáveis. A auditoria estática textual/estrutural do **DGP 3.300/3.300 permanece ✓** e não se confunde com revisão filológica nem teste funcional de navegador.


## JASTROW — sexta auditoria filológica A00500–A00599 (11/10/2026)

Concluída a **primeira passagem filológica de TODOS os 600/600 verbetes incorporados JASTROW**, com 100 novos confrontos `A00500–A00599` do XML canônico Sefaria-Data. Pareceres novos **S=80, O=17, E=1, V=2**, 9 emendas mínimas, inclusive erro do artigo grego `ὁ` em `A00518`. Ressalvas de fonte digital `A00571` e `A00592` não normalizadas conjecturalmente. **600/600 analisados numa primeira passagem; 0/600 homologados integralmente**, por faltar cotejo exaustivo das citações em textos críticos. Relatório [JASTROW lote 006](auditoria/JASTROW-2026-10-11-filologia-lote006-A00500-A00599.md) e [checkpoint acumulado](auditoria/jastrow-filologia-progresso.json). Os 600 verbetes-base estão integrados, mas as emendas de `chat-gpt-correcoes` ainda aguardam integração. Próximo novo verbete `A00600` requer extração por processo lexical independente. A tabela geral obrigatória mantém números em cada ◐ e DGP estático ✓ 3300/3300.


## JASTROW — quinto lote filológico A00400–A00499 (11/10/2026)

Confrontados individualmente **100 verbetes** Jastrow `A00400–A00499` com o XML canônico Sefaria-Data, usando `lexicons/jastrow-source-lote-0003.json`; 100/100 IDs e lemas principais correspondentes. Pareceres **S=81, O=17, E=0, V=2**. **11 emendas documentais mínimas** em `chat-gpt-correcoes` (sem corrigir conjecturalmente a Fonte); alertas `A00407`, `A00411` e remissão `A00429`. Acumulado **500/600** em primeira passagem filológica, certificação integral **0/600** por falta de testemunhos completos. [Relatório individualizado](auditoria/JASTROW-2026-10-11-filologia-lote005-A00400-A00499.md) e [checkpoint atualizado](auditoria/jastrow-filologia-progresso.json). Próximo `A00500–A00599`. Tabela de todos os dicionários preserva os números de qualquer etapa parcial e o **✓ 3.300/3.300 estrutural do DGP**.


## DGP — filologia, 160 verbetes 141–300 (11/10/2026)

Auditoria independente de primeira passagem confrontou a **fonte XML original do DGP (ordinais 141–300)** com os **160 cartões** em `chat-gpt-correcoes`; pareceres **S=154, O=5, E=0, V=1**. Lemas idênticos **160/160**; definições compatíveis **153 literais**, **4** somente hifenização discricionária e **3** com expansões de abreviaturas. #150, já corrigido na branch, preservado; #288, numeração duplicada na própria fonte, não emendada. **Nenhuma mudança nos verbetes lexicais.** Progresso filológico **300/3.300**, distinto da **auditoria textual e estrutural estática ✓ 3.300/3.300**; verificações externas contextuais ainda não completas. [Relatório dos 160 verbetes](auditorias/dgp-filologia-2026-10-11-lote004-0141-0300.md); [matriz de evidências](auditorias/dgp-filologia-2026-10-11-lote004-evidencias.json); [checkpoint](auditorias/dgp-filologia-progresso.json). Próximo ordinal: **301**. A tabela geral com quantidades para todos os dicionários está ao final do relatório.


## JASTROW — quarta auditoria filológica, A00300–A00399 (11/10/2026)

Comparados filologicamente em primeira passagem **100 novos verbetes** `A00300–A00399` com XML Jastrow canônico. Pareceres **S=79, O=20, E=0, V=1**; 11 ajustes de variantes e documentação atestada, exclusivamente na branch `chat-gpt-correcoes`. O problema de primeiro cabeçalho anômalo `A00371` permanece pendente de fac-símile; não reconstruir. **Acumulado 400/600**, mas nenhuma certificação exaustiva (`total_audited=0`). [Relatório filológico individual](auditoria/JASTROW-2026-10-11-filologia-lote004-A00300-A00399.md); [checkpoint cumulativo](auditoria/jastrow-filologia-progresso.json). Próximo `A00400–A00499`. A tabela de **todos os dicionários** ao final do relatório contém quantidades em cada `◐`, conforme regra atual.


## JASTROW — terceira auditoria filológica, verbetes 201–300 (11/10/2026)

Cotejados individualmente **100 novos verbetes** (`A00200–A00299`) com o XML original de Jastrow, fonte Sefaria-Data imutável. Pareceres S=84, O=9, E=5, V=2; **9 emendas filológicas mínimas** efetuadas apenas em `chat-gpt-correcoes`, sem alterar fonte. Primeira passagem acumulada **300/600**; nenhuma certificação exaustiva: `total_audited=0`. O relatório completo contém 100 registros de evidência e a **tabela obrigatória dos dicionários com quantidades nos estados parciais**: [relatório do lote 003](auditoria/JASTROW-2026-10-11-filologia-lote003-A00200-A00299.md); [checkpoint cumulativo](auditoria/jastrow-filologia-progresso.json). Próximo `A00300–A00399`; correções aguardam processo de integração separado.


## JASTROW — auditoria filológica dos verbetes 101–200 (11/10/2026)

Confrontados individualmente **100** registros (`A00100–A00199`) com seu XML: **S=82, O=17, E=1, V=0**. Publicadas **nove correções documentadas** exclusivamente em `chat-gpt-correcoes`, inclusive a variante textual errada em `A00165`. Primeira passagem acumulada **200/600**; aprovação exaustiva `total_audited=0` por persistirem notas, referências e testes pendentes. Relatório: [JASTROW lote 002](auditoria/JASTROW-2026-10-11-filologia-lote002-A00100-A00199.md); matriz cumulativa: [progresso](auditoria/jastrow-filologia-progresso.json). Tabela do relatório anterior reformatada sem modificar os pareceres. Próximo `A00200–A00299`. Integração por PR separado; `main` intocada.


## JASTROW — auditoria filológica dos primeiros 100 registros (11/10/2026)

Confronto filológico individual de **100** entradas (`A00000–A00099`) da fonte XML Sefaria-Data com os cartões portugueses publicados. Integridade 100/100 sem lacunas; pareceres `S=76`, `O=17`, `E=3`, `V=4`. `S` **não** é certificação integral. Três erros editoriais/remissivos em `A00057`, `A00080`, `A00091`; omissões de cabeçalhos, notas e leitura nas demais ocorrências indicadas. Relatório completo [JASTROW lote 001](auditoria/JASTROW-2026-10-11-filologia-lote001-A00000-A00099.md), matriz [checkpoint individual](auditoria/jastrow-filologia-progresso.json). `total_audited=0` permanece; testes em navegador e correção dos módulos aguardam reconciliação. Não houve alteração de léxicos nem da `main`.


## DGP — 100 verbetes auditados filologicamente, ordinais 41–140 (11/10/2026)

A auditoria independente examinou **100 novos registros DGP**, de `ἀβλής, ῆτος` a `ἄγγαρος, ος, ον`, usando o XML canônico. **20** receberam fontes externas dirigidas (LSJ, Cunliffe, Bailly, textos gregos e léxicos bíblicos); **80** tiveram exame morfológico, semântico e editorial interno. A cobertura cumulativa da primeira passagem é **140/3.300**, não homologação de todas as atestações. O [relatório filológico de 100 verbetes](auditorias/dgp-filologia-2026-10-11-lote003-0041-0140.md) e a [evidência individualizada](auditorias/dgp-filologia-2026-10-11-lote003-evidencias.json) registram resultados e incertezas; o [checkpoint](auditorias/dgp-filologia-progresso.json) prossegue no ordinal 141. Não houve nova correção lexical nem PR/merge nesta fase.

## PR #96 — conciliação das auditorias DGP e JASTROW (11/10/2026)

O conflito de integração foi resolvido na branch `chat-gpt-correcoes`, preservando o conteúdo consolidado de `chat-gpt-commits` e acrescentando os relatórios e as correções documentadas neste PR. As alterações do DGP ficam restritas à pesquisa dos registros já existentes e à correção tipográfica de `ausência`; não foram criados verbetes. Os módulos de JASTROW e THAYER já integrados permanecem intactos. Os relatórios DGP sobre **3.300 entradas** referem-se ao estado da **branch lexical de origem**; a quantidade publicada na branch consolidada deve ser consultada separadamente. A integração definitiva do PR ainda depende da mesclagem, sem alteração da `main`. A revisão filológica integral, os testes de navegador e a acessibilidade permanecem pendentes.

## JASTROW — auditoria filológica cumulativa de 600 registros (11/10/2026)

Foi realizada triagem independente de **590 objetos editoriais contra seus registros XML**, com leitura dirigida do módulo-base (10 registros); o controle estrutural preexistente abrange **600 cartões e 600 linhas**. Foram encontrados **32 sinais** de variantes de cabeçalho não apresentadas literalmente, **2** registros com material grego condensado (`A00238`, `A00362`) e **1 erro de remissão confirmado** (`A00057`). Esses totais não são 35 erros independentes certificados: os sinalizadores podem sobrepor-se e incluem falsos positivos. A auditoria filológica exaustiva e testes de navegador não foram concluídos; `total_audited=0` mantém-se. Detalhes: [relatório JASTROW de 11/10/2026](auditoria/JASTROW-2026-10-11-filologia-600.md). A branch `chat-gpt-correcoes` diverge da integração e não contém todos os módulos lexicais; não copiar sobre o trabalho integrado sem reconciliação.


## DGP — auditoria filológica, lote 002 (11/10/2026)

A auditoria filológica independente chegou aos **40 verbetes revisados** (2 lotes de 20) dentre **3.300** incorporados. O [segundo relatório](auditorias/dgp-filologia-2026-10-11-lote002-0021-0040.md) registra os ordinais 21–40, confronto contextual com LSJ, CLD/Bailly, Suda e Cambridge Greek Lexicon, análise de remissões, morfologia e citações. Em `chat-gpt-correcoes`, corrigiu-se **somente a palavra portuguesa quebrada** `au- sência` → `ausência` no cartão DGP 38, preservando a fonte XML. Ainda **não há homologação filológica integral, visual/funcional ou integração das correções**. Próximo lote filológico: 41–60. O [checkpoint independente](auditorias/dgp-filologia-progresso.json) registra os ordinais e pendências.

## DGP — início da auditoria filológica independente (11/10/2026)

Foi iniciado o confronto filológico progressivo do DGP: **20 verbetes examinados individualmente (ordinais 1–20 de 3.300 incorporados)**, com consulta auxiliar dirigida em LSJ/Cunliffe para 14 registros, identificação de citações em *Ilíada* 9.537 e 2 Coríntios 11.9, e registro de questões relativas a terminações adjetivais, derivações, homógrafos e acepções. **Não é uma homologação filológica dos 3.300 verbetes**, nem uma alteração editorial da fonte. O relatório de cada entrada está em [auditoria filológica 1–20](auditorias/dgp-filologia-2026-10-11-lote001-0001-0020.md) e o progresso reproduzível em [checkpoint filológico DGP](auditorias/dgp-filologia-progresso.json). Próximo lote: 21–40.

Em todos os relatórios de execução deve ser exibida uma tabela consolidada para **BDAG, DGP, LEH, PEREIRA, JASTROW e THAYER** com Incorporação, Auditoria textual/estrutural, Auditoria filológica, Integração e total numérico incorporado, distinguindo conclusões verificadas de etapas parciais. A norma permanece em [`regras/Rcorrecoes.txt`](regras/Rcorrecoes.txt).

## Auditoria filológica THAYER — 500 registros (11/10/2026)

**Estado editorial: NÃO HOMOLOGADO.** A correspondência de cabeçalho foi examinada em todos os **500 cartões**: **490 lemas coincidem por normalização** com a transcrição auxiliar de Thayer; o confronto com o fac-símile documentou **sete divergências reais de lematização**, além de um falso negativo do extrator e duas diferenças de indicação flexional. Foram identificados **12 candidatos adicionais** a entrada ou variante autônoma, que exigem decisão editorial baseada na obra impressa.

O relatório detalhado está em [auditoria THAYER 500](auditorias/thayer-auditoria-filologica-500-2026-10-11.md), acompanhado do [inventário individual dos 500 registros](auditorias/thayer-auditoria-filologica-500-inventario.csv). A revisão filológica completa de acepções, regências, referências e etimologias **não foi realizada para todos os 500 artigos** e não pode ser declarada concluída com base na auditoria estrutural ou em correspondência automática. O léxico mantém os 500 cartões originais nesta etapa; a correção deve ser feita com evidência por página. Próximo lema: **ἀντιπαρέρχομαι**.


## THAYER — lote 006: 500 verbetes acumulados (11/10/2026)

A branch `chat-gpt-thayer` recebeu **100 novas entradas**, de **ἀνατέλλω (G393)** a **Ἀντιοχεύς (G491)**, somando **500 verbetes THAYER** (499 registros dinâmicos e o cartão histórico Ἀαρών). O lote compreende 99 entradas do intervalo G393–G491 e uma entrada adicional identificada por Thayer como **ἀνέλεος (G415a)**. Próximo lema: **ἀντιπαρέρχομαι (G492)**.

Os cinco novos módulos `lexicons/thayer-batch-006a.js` até `006e.js` possuem 20 pares de linha de pesquisa/cartão por arquivo, carregados após os módulos 005 e antes de `script.js`. Fonte lexical: Joseph Henry Thayer, *A Greek-English Lexicon of the New Testament*, consultado pelo fac-símile da parte Α–Ι e transcrições do próprio Thayer. Os verbetes contêm sínteses editoriais portuguesas com classes gramaticais, acepções, referências e popups; **Strong é apenas sistema de indexação**.

A auditoria técnica verifica 100 linhas, 100 cartões, alvos, IDs e etiquetas. Não certifica a revisão filológica exaustiva, paginação impressa por verbete, testes dinâmicos em navegador ou acessibilidade. Documentação: `lexicons/thayer-progress.json`, `regras/Rthayer.txt`, `auditorias/thayer-2026-10-11-lote006.md`. Esta incorporação permanece exclusivamente em `chat-gpt-thayer`; integração em `chat-gpt-commits` exige operação independente e `main` não é editada.


## THAYER — meta de 400 verbetes alcançada na origem (11/10/2026)

A branch lexical `chat-gpt-thayer` foi ampliada de **321 para 400 verbetes THAYER**, com **79 novas entradas numeradas G314–G392**: de **`ἀναγινώσκω`** até **`ἀνατάσσομαι`**. O próximo verbete indexado é **`ἀνατέλλω` (G393)**. As 79 entradas foram distribuídas em quatro módulos independentes da mesma rodada: `lexicons/thayer-batch-005a.js` (20), `thayer-batch-005b.js` (20), `thayer-batch-005c.js` (20) e `thayer-batch-005d.js` (19). São carregados, nessa ordem, depois do lote 004 e antes de `script.js`.

Fonte primária: Joseph Henry Thayer, *A Greek-English Lexicon of the New Testament*, `Thayer (parte 1, Α–Ι).pdf`, páginas impressas 36–42, com consulta auxiliar a transcrições individuais do Thayer. Cada novo registro inclui lema politônico, classe gramatical, equivalentes portugueses, síntese de acepções, referências bíblicas e popup lexical grego. **400** corresponde aqui ao número de entradas editoriais incorporadas no site, inclusive o cartão histórico de Ἀαρών; não equivale à afirmação de que todos os cabeçalhos não indexados da obra no intervalo já foram auditados.

Checkpoint: `lexicons/thayer-progress.json`. Normas e controle: `regras/Rthayer.txt`. Relatório: `auditorias/thayer-2026-10-11-lote005.md`. A auditoria estática confere 79 pares novos de linhas e cartões, sequência de IDs e de G314–G392, sem colisões e com carregamento correto dos scripts; testes dinâmicos de navegador, acessibilidade, validação exaustiva de URLs, inventário de cabeçalhos não numerados e revisão filológica integral permanecem **pendentes**. Esta publicação não modifica `main` nem mescla automaticamente em `chat-gpt-commits`; a integração exige fluxo próprio.


## JASTROW — triagem filológica dos 600 registros (11/10/2026)

**Auditoria de cobertura textual:** todos os 600 registros XML foram confrontados programaticamente com as 600 entradas portuguesas. Resultado da triagem: 504 sem sinal automático, 55 com alerta baixo, 39 médio e 2 alto; os alertas são hipóteses de revisão, **não erros validados nem certificados**. A [execução GitHub Actions 38118125003](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38118125003) disponibiliza artefato com 12 lotes de 50, matriz JSON completa, análise por ID e trechos de fonte/edição.

**Conferência manual desta rodada:** 5 verbetes (`A00156`, `A00238`, `A00338`, `A00362`, `A00371`); correções de variantes, testemunhos e grego efetivamente fundamentadas no XML em `A00156`, `A00238` e `A00362`. Dois alertas automáticos foram adjudicados sem substituições arbitrárias. Relatório: [`auditoria/JASTROW-filologia-600-2026-10-11.md`](auditoria/JASTROW-filologia-600-2026-10-11.md). **O restante das 600 entradas ainda requer leitura humana individual para certificação de sentidos, variantes, etimologias, citações e bibliografia.** Checkpoint: `total_screened_filologically=600`, `total_manually_confronted_this_cycle=5`, `total_audited=0`. Testes reais de browser não executados.


## PR #92 — JASTROW concluído até 600 verbetes (11/10/2026)

O [PR #92](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/92) incorpora os 90 registros JASTROW `A00510`–`A00599`, de ordinal 511 a 600, e preserva as incorporações anteriores de BDAG, LEH, DGP (lote 076), PEREIRA e THAYER (lotes 002–004). São **600 verbetes JASTROW integrados**, com originais XML `A00000`–`A00599` intactos. Próximo registro `A00600`, `אוּזִילָא`, não extraído e não traduzido.

A [auditoria cumulativa Actions #38117209491](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38117209491) aprovou 600 linhas, 600 cartões, 600 IDs/alvos únicos, 176 popups e 33 módulos. Os lemas antigos `A00006` e `A00007` possuem diferenças gráficas registradas; os 90 novos coincidem com o original. **Revisão filológica independente integral, tradução de todas as notas, testes reais em navegador e acessibilidade continuam pendentes**, portanto `total_audited=0`. Este é um merge Git de dois pais, com preservação das branches e de `main`.

## JASTROW — sétima rodada: conclusão até o verbete 600 (11/10/2026)

A sétima rodada corresponde a **90 verbetes**, ordinais **511–600**, IDs `A00510`–`A00599`, iniciando em `אֲהָן` e terminando em `*(אוּסְיָא) אוּזְיָא`. A camada editorial em português passa a **600** entradas publicadas em `chat-gpt-jastrow`. A camada Fonte mantém **600 registros XML originais** (`A00000`–`A00599`), extraídos do `Sefaria/Sefaria-Data` no commit fixo `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`, sem confundir transcrição integral de fonte com tradução editorial.

**Módulos da rodada:** [`jastrow-511-535.js`](lexicons/jastrow-511-535.js) (25), [`jastrow-536-560.js`](lexicons/jastrow-536-560.js) (25), [`jastrow-561-570.js`](lexicons/jastrow-561-570.js) (10), [`jastrow-571-580.js`](lexicons/jastrow-571-580.js) (10), [`jastrow-581-590.js`](lexicons/jastrow-581-590.js) (10) e [`jastrow-591-600.js`](lexicons/jastrow-591-600.js) (10), além de [`jastrow-popups-511-600.js`](lexicons/jastrow-popups-511-600.js). Todos os módulos devem ser carregados na ordem de origem pelo `index.html`, antes de `script.js`.

**Checkpoint lexical:** `total_published=600`, `total_integrated=510` até a mesclagem desta rodada, `total_audited=0`. O próximo ordinal é **601**, ID `A00600`, lema antecipado `אוּזִילָא`. **A entrada 601 não foi extraída nem traduzida**; seu lema consta apenas no campo `next_headword` do terceiro lote-fonte. Para continuar depois do verbete 600, será necessário obter o quarto lote XML original.

**Auditoria cumulativa concluída:** o [GitHub Actions 38117209491](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38117209491) terminou com sucesso: **600 linhas e 600 cartões, 600 IDs correspondentes, 176 popups únicos e 33 módulos**. Duas grafias legadas diferem do cabeçalho do XML (`A00006`, `A00007`); os 90 novos correspondem literalmente. O relatório fica em `auditoria/JASTROW-2026-10-11-lote-007.md`, branch `chat-gpt-correcoes`. `total_audited=0` permanece porque auditoria estrutural não constitui certificação filológica integral.

**Rigor editorial e auditoria:** todos os novos IDs e cabeçalhos são derivados literalmente do XML; preservam-se homógrafos, remissões, variantes e hipóteses diferenciadas. Cada cartão contém uma síntese portuguesa do original, sem reivindicar tradução exaustiva de todas as citações. A auditoria automática [`tools/audit_jastrow_600.js`](tools/audit_jastrow_600.js) confere 600 pares busca/cartão contra os registros-fonte; somente uma execução bem-sucedida do GitHub Actions permite registrar aprovação estática. A revisão filológica independente completa, DOM real, acessibilidade e testes funcionais de pesquisa e popups continuam pendentes.


## PR #91 — JASTROW 510 verbetes integrados (11/10/2026)

O [PR #91](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/91) integra 100 novos verbetes (`A00410`–`A00509`) de JASTROW, perfazendo **510 entradas e cartões**, mantendo todos os módulos anteriores de BDAG, LEH, DGP (inclusive lote 076), PEREIRA, THAYER (inclusive PR #90), seus relatórios e checkpoints. A fonte original XML totaliza 600 registros preservados. Próximo JASTROW `A00510` (`אֲהָן`).

A auditoria cumulativa [Actions 38115928600](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38115928600) aprovou **510 linhas, 510 cartões, 510 alvos, 159 popups únicos e 26 módulos**. Duas diferenças legadas de grafia (`A00006`, `A00007`) estão registradas; os 100 lemas novos coincidem literalmente com o XML. A revisão filológica integral, a tradução exaustiva de notas e exemplos e os testes de navegador ainda estão **pendentes**: `total_audited=0`. O merge é técnico, sem exclusão de branches nem mudanças em `main`.

## JASTROW — sexta rodada: mais 100 verbetes (11/10/2026)

**Publicação lexical confirmada:** foram adicionados 100 verbetes JASTROW, ordinais 411–510, IDs `A00410`–`A00509`, de `אדכי` a `אהמרא`; o próximo verbete original é `A00510` (`אֲהָן`, ordinal 511). A branch exclusiva `chat-gpt-jastrow` disponibiliza agora **510 entradas editoriais em português**, em contraste com os **600 registros originais XML** armazenados. Antes desta rodada, **410** JASTROW estavam realmente integrados em `chat-gpt-commits` graças ao PR [#89](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/89), mesclado em `c652136c1220cfe780c2697531d7da9a2fddcea2`.

**Fonte:** arquivo [`lexicons/jastrow-source-lote-0003.json`](lexicons/jastrow-source-lote-0003.json), ordinais 401–600 extraídos de `Sefaria/Sefaria-Data`, commit fixo `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`. Para esta rodada foram usados estritamente os originais de IDs `A00410`–`A00509` (índices 10–109 do lote), sem inventar lemas, variantes ou homógrafos. Os documentos da camada Fonte são independentes das sínteses editoriais.

**Módulos:** [`lexicons/jastrow-411-435.js`](lexicons/jastrow-411-435.js), [`lexicons/jastrow-436-460.js`](lexicons/jastrow-436-460.js), [`lexicons/jastrow-461-485.js`](lexicons/jastrow-461-485.js) e [`lexicons/jastrow-486-510.js`](lexicons/jastrow-486-510.js), com 25 entradas cada; [`lexicons/jastrow-popups-411-510.js`](lexicons/jastrow-popups-411-510.js) acrescenta o glossário contextual. Todos são carregados por `index.html` após os módulos anteriores e antes de `script.js`.

**Auditoria cumulativa posterior:** o [GitHub Actions 38115928600](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38115928600) concluiu com sucesso: **510 linhas, 510 cartões, 510 IDs e alvos correspondentes, 159 definições únicas de popup e 26 módulos JASTROW**, com 600 originais armazenados. As grafias legadas dos lemas `A00006` e `A00007` divergem das primeiras palavras do XML; os 100 novos mantêm igualdade literal dos lemas. Relatório em `auditoria/JASTROW-2026-10-11-lote-006.md` na branch `chat-gpt-correcoes`. **A validação não certifica revisão filológica integral nem teste de navegador.**

**Verificação executada no momento da publicação:** quatro módulos novos interpretados em JavaScript e comparados ao XML original para os **100/100** IDs, lemas, `data-target`, `entry-card` e `search-row`, sem duplicações entre os novos registros; ordem de scripts no HTML verificada. Requer-se validação cumulativa do conjunto com 510 itens e de seus popups, além dos testes reais de navegador e da revisão filológica independente. As traduções incluem sínteses das entradas originais; exemplos e notas extensas não estão todos traduzidos integralmente. Por isso, `total_audited=0` continua válido e nunca deve ser confundido com auditoria de integridade estrutural.

**Integração:** manter PR exclusivo para `chat-gpt-commits`, conciliando quaisquer adições concorrentes de DGP, THAYER, BDAG, LEH e PEREIRA, mantendo `main` intacta e sem excluir branches. Documentar efetivamente o PR quando mesclado, e só então incrementar `total_integrated` para 510.


## PR #90 — integração excepcional de THAYER 003–004 (11/10/2026)

**Confirmação remota PR #90:** GitHub retornou `state=closed` e `merged=true`, SHA do merge `adcc52d941904383c9a1d3fd905b6d14f98eb657` (2026-10-11T05:14:18Z); dois pais reais, sem alteração da branch `main` ou exclusão das branches originais. Auditoria estática pós-merge: 320 linhas/cartões THAYER dinâmicos e 1 cartão histórico, total 321, todos com alvos únicos e correspondentes. Os demais módulos lexicais mantiveram seus blobs.

O [PR #90](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/90) incorpora por decisão expressa 200 verbetes THAYER das rodadas 003 e 004, formando **321 verbetes THAYER** na branch consolidada, inclusive o cartão histórico de Ἀαρών. O próximo lema é **ἀναγινώσκω (G314)**. Os módulos originais `lexicons/thayer-batch-003.js` e `lexicons/thayer-batch-004.js` e respectivos relatórios são preservados, assim como o checkpoint e a proveniência do PR #87. O merge de dois pais reais concilia scripts e histórico de todas as demais fontes, incluindo JASTROW 410.

Esta é uma autorização **pontual**, não adição de `chat-gpt-thayer` à rotina automática de integração. Não tocar `main` ou excluir branches. Permanecem pendentes revisão filológica integral, testes de navegador, acessibilidade e URLs.

## THAYER — lote 004 de 100 verbetes (11/10/2026)

A branch `chat-gpt-thayer` recebeu **100 novos verbetes** de `ἀλέκτωρ` (G220) a `ἀναγεννάω` (G313), no módulo `lexicons/thayer-batch-004.js`. Foram cadastradas **94 entradas com índice inteiro**, mais **seis cabeçalhos adicionais documentados no Thayer**: `ἀλλαχοῦ`, `Ἀμπλίατος`, `ἀμφιβάλλω`, `ἀμφιάζω`, `ἀμφιέζω` e `ἄμωμον`. A entrada `ἄλφα` (G255a) já estava cadastrada e não foi duplicada.

O total acumulado é **321 entradas THAYER**, com próximo lema **`ἀναγινώσκω` (G314)**. Fonte primária: *A Greek-English Lexicon of the New Testament* (Thayer, PDF parte 1 Α–Ι), páginas impressas 27–36. As páginas do Thayer digital serviram como auxiliares de leitura, mantendo independente o conteúdo de todos os demais léxicos. O módulo apresenta 100 linhas de busca e 100 cartões lexicais, com sentidos portugueses, gramática, referências e popups. Arquivos de progresso e documentação: `lexicons/thayer-progress.json`, `regras/Rthayer.txt` e `auditorias/thayer-2026-10-11-lote004.md`.

Auditoria estrutural obrigatória concluída por inspeção dos arquivos e do estado remoto. **Não se certificou ainda** revisão filológica integral de todas as acepções, navegação DOM, acessibilidade ou verificação universal dos links existentes. A integração continua restrita à própria branch: o integrador vigente não lista THAYER entre as origens autorizadas. Nenhum commit em `main`.


## THAYER — lote 003, 100 verbetes (11/10/2026)

Na branch `chat-gpt-thayer`, 100 entradas consecutivas **G120–G219**, `ἀθυμέω` → `ἀλεκτοροφωνία`, foram incorporadas pelo módulo `lexicons/thayer-batch-003.js`. A fonte primária é o fac-símile de Thayer (parte 1, Α–Ι), páginas impressas **14–26**. O acumulado é **221 verbetes THAYER** (1 HTML preexistente, 20 no módulo inicial, 100 no lote 002 e 100 no lote 003); o próximo é **ἀλέκτωρ (G220)**.

Cada entrada contém classe, tradução portuguesa, análise semântica resumida, referências bíblicas, identificação da fonte e popup lexical grego. Trata-se de sínteses editoriais rastreáveis, não transcrição inglesa integral nem incorporação de Strong como fonte semântica. Algumas variantes textuais são identificadas, notadamente G168 e G183; a entrada G188 registra corretamente o lema **ἀκμή**, distinguindo o acusativo adverbial **ἀκμήν**. O relatório estrutural é `auditorias/thayer-2026-10-11-lote003.md`.

A auditoria estrutural verifica 100 novos pares `search-row`/`entry-card`, unicidade dos IDs e integridade da sequência. **Ainda pendentes:** auditoria visual e filológica integral de cada acepção, execução no navegador, testes de acessibilidade e verificação individual de links externos. Esta rotina não abre PR para `chat-gpt-commits` por ausência de `chat-gpt-thayer` na política de integração vigente; `main` não é modificada.



## PR #89 — integração JASTROW até 410 verbetes (11/10/2026)

O PR [#89](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/89) concilia os 200 verbetes JASTROW adicionais `A00210`–`A00409` com os módulos anteriores de BDAG, LEH, PEREIRA, DGP (incluindo lote 076) e THAYER (incluindo lote 002). O JASTROW passa a ter 410 cartões e linhas na integração e preserva separadamente 600 registros originais do XML canônico. Próximo ID `A00410`, lema `אדכי`.

**Limite editorial:** as traduções incluem sínteses, com revisão filológica integral, notas e exemplos pendentes; testes em navegador, popups dinâmicos e acessibilidade ainda não realizados. `total_audited=0` permanece. As afirmações históricas mais abaixo de que somente 210 JASTROW estavam integrados se referem ao estado anterior ao PR #89. A fusão técnica é um merge Git com dois pais, sem mudanças em `main` e sem exclusão de branches.

## JASTROW — quinta rodada: 100 verbetes (11/10/2026)

**Estado publicado em `chat-gpt-jastrow`: 410 entradas JASTROW e 410 linhas de pesquisa; 100 novas, IDs `A00310`–`A00409` (ordinais 311–410).** Primeiro lema `אַגַּמָּא`; último `אד״ך` (forma `אד"ך` no XML). Próxima entrada `A00410`, lema `אדכי`, ordinal 411. Na branch `chat-gpt-commits` foram verificados **210** verbetes JASTROW publicados; os 200 das duas rodadas mais recentes ainda não foram integrados.

**Fonte:** [JASTROW lote 2](lexicons/jastrow-source-lote-0002.json), 200 registros ordinais 201–400, mais [lote 3](lexicons/jastrow-source-lote-0003.json), 200 registros 401–600, extraídos do XML de `Sefaria/Sefaria-Data` no commit imutável `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`. A [execução GitHub Actions 38112091478](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38112091478) terminou com sucesso e preservou o lote 3; a camada Fonte soma **600 originais**, que não devem ser confundidos com as 410 entradas editoriais portuguesas.

**Arquivos da quinta rodada:** [`jastrow-311-335.js`](lexicons/jastrow-311-335.js) (25), [`jastrow-336-360.js`](lexicons/jastrow-336-360.js) (25), [`jastrow-361-385.js`](lexicons/jastrow-361-385.js) (25) e [`jastrow-386-410.js`](lexicons/jastrow-386-410.js) (25), carregados por `index.html` antes do módulo `script.js`. [`jastrow-popups-311-410.js`](lexicons/jastrow-popups-311-410.js) adiciona novas explicações. O conjunto JASTROW possui **137 chaves de popup únicas**, após eliminação das duplicatas.

**Auditoria determinística executada:** correspondência exata de todos os 100 novos registros da fonte com seus 100 cartões, IDs `A00310`–`A00409`, lemas (inclusive variante tipográfica `A00371` previamente publicada), 100 linhas e 100 `data-target` válidos, módulos JS executados sem erro em contexto simulado e ordem de carregamento correta. Somados aos 310 já verificados na rodada anterior, são 410 linhas e 410 cartões editoriais. A execução de popups confirma 137 termos distintos.

**Pendências que NÃO foram certificadas:** tradução exaustiva de todas as notas e exemplos de cada registro; cobertura integral de todas as remissões por popups; pesquisa e filtros reais, renderização bidi RTL/LTR, acessibilidade, teclado e regressão visual em navegador. Portanto, o checkpoint conserva `total_audited=0` até auditoria filológica independente. Nenhum novo PR/merge dos 100 foi realizado, nenhuma alteração em `main`. Cada texto original permanece independente da tradução e análise.


## JASTROW — quarta rodada: 100 verbetes (11/10/2026)

**Situação na branch `chat-gpt-jastrow`: 310 entradas JASTROW com linha de pesquisa e cartão correspondente; 100 novos registros, `A00210`–`A00309` (ordinais 211–310).** Primeiro lema: `אַבְרוּיֵי`; último: `אַגָּם`. Próximo: `A00310` (`אַגַּמָּא`, ordinal 311). Os 210 primeiros estão efetivamente presentes em `chat-gpt-commits` (confirmado pela leitura do HTML e da ancestralidade remota), embora o checkpoint dessa branch ainda não refletisse essa integração anterior. **Os 100 da quarta rodada ainda não foram mesclados.**

**Fonte canônica:** segundo lote XML [`lexicons/jastrow-source-lote-0002.json`](lexicons/jastrow-source-lote-0002.json), extração dos ordinais 201–400 (`A00200`–`A00399`) do repositório `Sefaria/Sefaria-Data`, commit imutável `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`. O total disponível permanece **400 registros-fonte**, distinto dos 310 traduzidos editorialmente.

**Arquivos publicados nesta rodada:** [`lexicons/jastrow-211-235.js`](lexicons/jastrow-211-235.js), [`lexicons/jastrow-236-260.js`](lexicons/jastrow-236-260.js), [`lexicons/jastrow-261-285.js`](lexicons/jastrow-261-285.js) e [`lexicons/jastrow-286-310.js`](lexicons/jastrow-286-310.js), 25 entradas por arquivo. [`lexicons/jastrow-popups-211-310.js`](lexicons/jastrow-popups-211-310.js) adiciona explicações contextuais com proteção contra chaves duplicadas; todos os módulos estão ligados em `index.html` antes de `script.js`.

**Auditoria estrutural executada:** 310 `search-row`, 310 `entry-card`, 310 identificadores consecutivos correspondentes aos registros originais `A00000`–`A00309`, todos os 310 `data-target` válidos e únicos, 16 arquivos JS JASTROW carregados na ordem, 115 entradas explicativas únicas para popups. Os testes executaram o JavaScript dos módulos em ambiente V8 simulando `window.ScripturaLexicons`, **não** um navegador com DOM completo.

**Pendências editoriais impeditivas para aprovar o lote:** as traduções portuguesas incluem sínteses lexicográficas, não tradução exaustiva de todos os exemplos, variantes e notas da fonte. Necessária auditoria filológica independente linha a linha, auditoria completa de popup/abreviaturas e teste de interação em navegador (pesquisa, filtros, RTL/LTR, teclado, acessibilidade). Por isso, `total_audited=0`; os novos 100 permanecem somente na branch lexical até integração devidamente verificada. Nunca alterar `main`.


## PR #87 — integração de auditorias e THAYER (10/10/2026)

O PR [#87](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/87) incorpora à branch consolidada `chat-gpt-commits` os relatórios independentes de **JASTROW 002/003**, **DGP 76** e **THAYER 002**, e os módulos de THAYER até **121 cartões/linhas** (20 do lote inaugural, 100 do lote 002, mais o cartão histórico de `Ἀαρών`). Mantêm-se intactas todas as incorporações BDAG, LEH, DGP (inclusive lote 76), PEREIRA e JASTROW (inclusive 210 registros), seus scripts e os respectivos checkpoints anteriores.

O HTML consolidado carrega `lexicons/thayer.js` e `lexicons/thayer-batch-002.js` depois dos scripts das outras fontes e antes de `script.js`, com as quatro âncoras próprias de busca e cartões. O manifesto independente é `lexicons/thayer-progress.json`: lote 002 ἀγαλλιάω → ἄθλησις, próximo `ἀθυμέω`. O original do autor e a tradução editorial são mantidos sem edição lexical neste merge; auditoria estática de estrutura e IDs conferida. **Revisão filológica integral, teste real em navegador, acessibilidade, popups dinâmicos e verificação exaustiva das URLs continuam pendentes.**

Esta integração de THAYER é **exceção manual vinculada à solicitação expressa de resolução do PR #87**, cujo head é `chat-gpt-correcoes`, uma origem já autorizada; **não** inclui automaticamente `chat-gpt-thayer` nas origens da rotina de integração. As notas históricas abaixo sobre a ausência de integração THAYER descrevem o instante anterior ao PR #87 e permanecem preservadas para rastreabilidade. Não houve edição de `main` nem eliminação de branches.

## THAYER — lote 002 (100 verbetes, 10/10/2026)

A branch `chat-gpt-thayer` incorpora 100 verbetes novos em `lexicons/thayer-batch-002.js` de `ἀγαλλιάω` a `ἄθλησις`: entradas numeradas Thayer G21–G119 (**99**) e a entrada própria `ἄγγος` (G32b), totalizando **100** novos registros e **121** registros THAYER considerando os 21 anteriores. Próximo lema: **`ἀθυμέω` (G120)**.

As 100 entradas têm linha de busca, cartão, classe gramatical, equivalentes portugueses, síntese das acepções e referências textuais, tooltip grego e proveniência. Fonte: fac-símile de Thayer (parte 1, Α–Ι), páginas impressas 3–14; consultas auxiliares Bible Hub sob `/thayers/{n}.htm` quando abertas com êxito. O número Strong funciona unicamente como índice, sem incorporar o texto de Strong. As traduções são sínteses editoriais e não transcrições integrais. As três URLs G33, G35 e G67 não tiveram acesso confirmado e, por isso, foram omitidas nos cartões respectivos; G32b usa a página comum de G32.

Auditoria estrutural: 100 pares de linhas e cartões novos, alvos resolvidos, sem colisões com os 20 registros do módulo THAYER anterior ou com o cartão histórico Ἀαρών. Ainda estão pendentes testes DOM em navegador, revisão filológica integral e verificação individual de todos os endereços externos. Atualizações de `lexicons/thayer-progress.json`, `regras/Rthayer.txt` e `README.md` acompanham o commit. O ramo não foi integrado a `chat-gpt-commits`, pois ainda não está entre as origens autorizadas no integrador. Nenhuma alteração em `main`.


## THAYER — primeiro lote de 20 entradas (10/10/2026)

Na branch `chat-gpt-thayer`, o módulo `lexicons/thayer.js` inclui 20 verbetes de `ἄλφα` a `ἀγαλλίασις`. O cartão preexistente de `Ἀαρών` permanece inalterado, totalizando **21 verbetes THAYER**. A sequência considera `ἀγαθουργέω`, lema próprio sem número Strong independente. O próximo é `ἀγαλλιάω`.

Fonte-base: fac-símile Thayer (parte 1, Α–Ι), pp. 1–3; cotejo com transcrições históricas. A tradução portuguesa preserva acepções, variantes e atribuições exegéticas, e não é substituída por conteúdo de outros léxicos. Checkpoint: [`lexicons/thayer-progress.json`](lexicons/thayer-progress.json); regras: [`regras/Rthayer.txt`](regras/Rthayer.txt). Auditoria estática: 20 linhas e 20 cartões com alvos correspondentes, 4 âncoras de injeção, sem IDs repetidos; testes em navegador/URLs individuais pendentes.

A branch THAYER **não integra ainda** as seis fontes autorizadas pelo integrador em `regras/Rintegracao.txt`: nenhum PR/merge foi realizado por esta rotina. Nenhuma alteração em `main`.


## DGP — resolução e integração do PR #86 (10/10/2026)

A incorporação do **lote 76 (100 verbetes, ordinais 2.781–2.880)**, `ἀνάματος, ος, ον` → `ἀναπλήρωσις, εως (ἡ)`, foi reconciliada com a branch consolidada `chat-gpt-commits`, preservando todas as alterações posteriores dos demais léxicos (incluindo JASTROW e PEREIRA). O módulo `lexicons/dgp-batch-076.js` passa a ser carregado exatamente uma vez após `dgp-batch-075.js`, antes do formatador DGP, sem suprimir qualquer outro script. O manifesto lexical DGP mantém 76 lotes e **2.880 verbetes**, próximo ordinal **2.881** (`ἀναπληρωτέον`). O checkpoint próprio fica em `regras/estado-orquestracao-dgp.json`, preservando o estado BDAG do arquivo legado.

Colação filológica e estrutural estática independente **aprovada 100/100** com o XML canônico, commit de auditoria [`6c3e55f8fece`](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/commit/6c3e55f8feceac5cbbcfdb8a2e63c4cf8666a069) em `chat-gpt-correcoes`; relatório `auditorias/dgp-2026-10-10-lote76.md` naquela branch (integração do próprio relatório em etapa separada). Fonte fixada `aniseferreira/Grc-Por-DigDict` (`deb54b426ead447d01ced7534736f3e77be7015b`). **Pendentes:** testes em navegador, acessibilidade, comportamento de popups dinâmicos e auditoria editorial ampliada. A integração não modifica `main` ou branches de origem, nem cria verbetes adicionais além do lote 76.


## JASTROW — terceira rodada: 100 novos verbetes (10/10/2026)

**Publicação atual na branch `chat-gpt-jastrow`: 210 cartões e 210 linhas pesquisáveis**, com 100 registros novos (`A00110`–`A00209`, ordinais 111–210), além dos 110 anteriores. **Próximo verbete:** `A00210` (`אַבְרוּיֵי`; ordinal 211). **Integração efetiva já comprovada:** 110 registros anteriores pelo PR [#82](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/82) (*merged*); os 100 novos ainda não foram integrados.

**Camada Fonte:** XML canônico de `Sefaria/Sefaria-Data` no commit `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`, com dois arquivos independentes de 200 registros cada: [lote 1](lexicons/jastrow-source-lote-0001.json) (`A00000`–`A00199`) e [lote 2](lexicons/jastrow-source-lote-0002.json) (`A00200`–`A00399`). Há 400 originais armazenados, não 400 traduções. O workflow [run 38099249338](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38099249338) falhou com `IndexError` no extrator quando usou o deslocamento 200; após correção do índice, o [run 38099440930](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38099440930) terminou com êxito e publicou o segundo lote-fonte.

**Módulos novos:** [`jastrow-111-140.js`](lexicons/jastrow-111-140.js) (30), [`jastrow-141-170.js`](lexicons/jastrow-141-170.js) (30), [`jastrow-171-185.js`](lexicons/jastrow-171-185.js) (15), [`jastrow-186-200.js`](lexicons/jastrow-186-200.js) (15) e [`jastrow-201-210.js`](lexicons/jastrow-201-210.js) (10). [`jastrow-popups-111-210.js`](lexicons/jastrow-popups-111-210.js) adiciona explicações bibliográficas e onomásticas sem duplicar as definições anteriores. Todos são carregados em `index.html` antes de `script.js`.

**Auditoria determinística executada:** 210 `search-row`, 210 `entry-card`, 210 identificadores distintos e consecutivos com `data-target` correspondentes, IDs vinculados aos 210 registros do XML, scripts em ordem e 86 termos de tooltip únicos. **Pendências:** auditoria filológica integral e independente dos exemplos, notas, leituras e referências; parte dos cartões apresenta sínteses editoriais, não reprodução traduzida integral de todas as notas do XML. Testes reais de navegador, RTL, acessibilidade, pesquisa e popups dinâmicos também estão pendentes. **Não certificar editorialmente os 100 novos nem concluir novo merge antes dessas verificações.** Nenhuma escrita em `main`.



## JASTROW — rodada editorial de 100 entradas (10/10/2026)

**Estado na branch `chat-gpt-jastrow`: 110 cartões e 110 linhas de pesquisa publicados (10 anteriores + 100 novos, IDs `A00010`–`A00109`).** O próximo registro original é `A00110`, lema `אָבִיב,` (ordinal 111). A origem integral dos registros 1–200 está preservada em [`lexicons/jastrow-source-lote-0001.json`](lexicons/jastrow-source-lote-0001.json), extraída de `Sefaria/Sefaria-Data` no commit `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`. Não confundir 200 originais disponíveis com 200 traduções publicadas.

**Arquivos da rodada:** [`lexicons/jastrow-011-040.js`](lexicons/jastrow-011-040.js) (30), [`lexicons/jastrow-041-080.js`](lexicons/jastrow-041-080.js) (40), [`lexicons/jastrow-081-110.js`](lexicons/jastrow-081-110.js) (30), [`lexicons/jastrow-popups.js`](lexicons/jastrow-popups.js) (49 propostas de definições: 47 novas não duplicadas, somando 55 termos únicos com as 8 definições anteriores), `index.html` e [`lexicons/jastrow-progress.json`](lexicons/jastrow-progress.json). Os cartões apresentam versões portuguesas editadas das acepções e remissões, preservando grafias e uma camada separada com todo o XML original. Nem toda nota secundária da fonte extensa foi reescrita integralmente nos cartões; exige revisão filológica posterior.

**Auditoria estática comprovada:** 100 IDs novos exclusivos e sequenciais, 100 correspondências entre lema/ID do XML e dos módulos, 110 linhas `search-row` e 110 cartões `entry-card` totais, todos os 110 `data-target` correspondentes aos IDs, âncoras instaladas, módulos carregados em ordem antes de `script.js`, ausência de colisões dos IDs JASTROW com os cartões estáticos, tags `bdi` equilibradas nas novas descrições e sintaxe JavaScript dos módulos aprovada. A revisão dos 49 popups é de cobertura parcial, não auditoria completa de todas as referências.

**Ainda pendente:** confronto filológico independente e integral (incluindo exemplos e notas que ficaram somente no XML), execução de testes em navegador, verificação exaustiva dos popups e revisão de links. Por isso, o checkpoint mantém `total_audited=0` e `total_integrated=0`; **não há PR/merge autorizado pela auditoria desta rodada**. A branch `main` não foi alterada. O histórico abaixo registra estados anteriores e não deve ser tomado como contador atual.



## HALOT — fonte e branch registradas (10/10/2026)

O **HALOT** (*The Hebrew and Aramaic Lexicon of the Old Testament*) passa a integrar o cadastro documental do Scriptura Lexicon com **branch própria** `chat-gpt-halot`. A fonte indicada pelo mantenedor é o PDF **Study Edition, volume 1**, disponível em [yausha.com.br](https://yausha.com.br/wp-content/uploads/2024/02/The-Hebrew-and-Aramaic-lexicon-of-the-Old-Testament-study-edition-volume-1.pdf). O protocolo canônico de proveniência, distinção de edições, escopo, checkpoints e integração está em [`regras/Rhalot.txt`](regras/Rhalot.txt).

**Estado:** cadastro e branch, sem incorporação lexical ou tarefa agendada comprovada para HALOT. O link foi designado pelo mantenedor, mas a inspeção bibliográfica integral do PDF ainda é pendente. Não confundir o volume 1 da *Study Edition* com os volumes da edição maior de KBS/HALOT; não alterar `main` nem o estado das outras fontes. O destino de consolidação continua `chat-gpt-commits`, sujeito à auditoria e à confirmação do PR/merge.

## Fontes bibliográficas impressas digitalizadas — regra de 10/10/2026

Os exemplares do Internet Archive expressamente designados pelo mantenedor para **ROBINSON (três registros), ABBOTT-SMITH (três) e GESENIUS (dois)** integram o cadastro de testemunhos bibliográficos autorizado em [`regras/Rfontes-impressas.txt`](regras/Rfontes-impressas.txt). Este arquivo identifica individualmente as edições e os exemplares, documenta metadados divergentes ou não confirmados, define a autoridade do fac-símile sobre o OCR e exige rastreabilidade de lema e página.

A designação como fonte canônica **não elege automaticamente uma edição-texto-base**, não altera verbetes ou checkpoints e não autoriza a fusão de leituras de edições diferentes. O arquivo [`regras/Rfontes-consulta.txt`](regras/Rfontes-consulta.txt) mantém separadamente os sítios lexicográficos digitais de consulta. Preservar os quatro níveis Fonte / Tradução / Análise / GDHAGP e as restrições editoriais e jurídicas estabelecidas nesses cadastros.

## Integração DGP — PR #80, lotes 70–75 (10/10/2026)

Os **600 registros DGP** dos ordinais **2.181–2.780** foram reconciliados para `chat-gpt-commits` pelo PR [#80](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/80), preservando as correções filológicas anteriores dos verbetes 95, 124 e 150, os popups e todas as demais fontes (inclusive PEREIRA e JASTROW). Os módulos `lexicons/dgp-batch-073.js`, `dgp-batch-074.js` e `dgp-batch-075.js` são carregados depois de `dgp-batches.js` e antes do formatador. O checkpoint DGP passa a **2.780 verbetes**, próximo ordinal **2.781 (`ἀνάματος, ος, ον`)**.

Os lotes 70–74 possuem auditorias textuais/estruturais na branch `chat-gpt-correcoes`; o lote 75 teve auditoria estática independente **100/100**, commit [`f28a5f282f2d`](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/commit/f28a5f282f2df7f90007c55d196044acee12b145), relatório `auditorias/dgp-2026-10-10-lote75.md`. Os testes de navegador/DOM, acessibilidade e popups dinâmicos seguem pendentes. A integração não altera `main` nem as branches de origem.


## Tarefas agendadas no ChatGPT — implantação experimental (09/10/2026)

**Estado comprovado:** três tarefas recorrentes foram criadas e habilitadas em ChatGPT Tasks, fuso `America/Sao_Paulo`. São independentes e executam a cada hora em janelas defasadas: **incorporação DGP aos :05** (escrita somente em `chat-gpt-dgp`), **auditoria aos :25** (somente `chat-gpt-correcoes`) e **integração aos :45** (PRs/merges somente para `chat-gpt-commits`, se a aprovação filológica aplicável estiver comprovada). A ingestão almeja **até 100 registros canônicos por rodada**, sem assumir garantias de produção contínua.

**Atenção:** o agendador atualmente disponível **não fornece seleção nem comprovação do nível High**. Os prompts exigem High quando selecionável e bloqueiam declarações de revisão High não comprovada. Ausente garantia High, limitar o trabalho a comparações determinísticas verificáveis, registrar revisão editorial pendente e **não integrar automaticamente lotes sem a aprovação exigida**. Não contratar API paga, não tocar `main` nem outras fontes, não apagar branches ou forçar push. Falhas e fases pendentes não devem descartar commits confirmados. **Nenhuma execução agendada foi ainda auditada como bem-sucedida.**

O workflow GitHub Actions de validação somente leitura, criado em `main`, é uma rotina separada e não representa a execução dessas três tarefas do ChatGPT. O workflow de produção `dgp-hourly.yml` continua sem instalação em `main`. Não confundir **tarefas ChatGPT habilitadas** com **produção GitHub Actions ativada**.


## Norma de orçamento e raciocínio — 09/10/2026 (SEM CUSTO EXTRA)

**Decisão expressa do mantenedor:** o Scriptura Lexicon deve operar exclusivamente com recursos já incluídos na assinatura atual do ChatGPT e com ferramentas gratuitas disponíveis, **sem contratar a OpenAI API, créditos por tokens, upgrades de plano ou outro serviço pago**. Não criar segredos de API paga nem ativar faturamento como condição da execução. Nenhuma solução de custo adicional é autorizada.

**Exigência editorial:** a etapa filológica deve usar **raciocínio High**, sem substituição silenciosa por Instant. O executor Python/GitHub Actions é determinístico e não configura nem executa um modelo High; seus testes de integridade não equivalem à auditoria lexicográfica. Tarefas agendadas internas do ChatGPT somente poderão realizar edição/auditoria automaticamente se sua interface e sua execução efetiva permitirem **selecionar e verificar High** com a assinatura existente; não presumir essa garantia.

**Modo seguro atual:** manter desativada a incorporação editorial agendada e a integração automática. Usar GitHub Actions somente para validação determinística e ensaios sem custos adicionais, com gates de publicação; realizar análise filológica via sessões High do ChatGPT sob acompanhamento do mantenedor quando a modalidade High estiver disponível. Se não houver garantia de High nos agendamentos, optar por supervisão humana; não afirmar capacidade de 100 verbetes/hora desassistidos.


## Preparação técnica do executor DGP — 09/10/2026

O código da automação horária de 100 registros e seus testes foram preparado(s) em `tools/dgp_engine.py`, `tools/dgp_orchestrator.py`, `tests/` e `.github/workflows/dgp-hourly.yml`. Consulte [o plano técnico e os limites de auditoria](docs/DGP-AUTOMACAO.md). **A automação NÃO está ativa**: o workflow não foi instalado na branch padrão `main`, os testes em runner não foram executados e a integração automática segue bloqueada por falta de certificação editorial equivalente a High. Não tratar a programação descrita como tarefa criada ou como SLA de 60 minutos.

## Fase operacional exclusiva DGP — 09/10/2026

BDAG, LEH e PEREIRA estão temporariamente fora da esteira automatizada. O fluxo por lote DGP é **incorporação de 100 verbetes** em `chat-gpt-dgp` → **auditoria independente** em `chat-gpt-correcoes` → **integração após aprovação** em `chat-gpt-commits`. Os checkpoints e commits de cada etapa persistem: uma falha posterior não desfaz a etapa anterior. O limite de 60 minutos é **meta a validar**, não SLA certificado; tampouco se deve declarar modelo High em automações sem suporte verificável.

**Lote 69:** ordinais 2.081–2.180 (`ἀμέρδω` a `ἀμόθι`) incorporados, **auditados estaticamente (100/100)** e **integrados** pelos PRs [#74](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/74) e [#75](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/75). Testes funcionais em navegador continuam pendentes. Fonte XML: `aniseferreira/Grc-Por-DigDict`, commit `deb54b426ead447d01ced7534736f3e77be7015b`. Próximo ordinal: **2.181**.

## Princípio prioritário — popups explicativos

Os **popups explicativos são um dos propósitos centrais do Scriptura Lexicon** e devem ser tratados como requisito editorial prioritário, não como enriquecimento opcional.

A interface deve permitir que o leitor compreenda, sem sair do fluxo do verbete, toda informação abreviada, técnica ou referencial cuja identificação possa ser estabelecida com segurança.

Essa prioridade aplica-se a **todos os dicionários, todas as fontes lexicográficas e todos os verbetes**, antigos e futuros.

Devem receber popup, sempre que aplicável e verificável:

- abreviaturas e siglas editoriais;
- nomes abreviados de autores antigos e modernos;
- títulos abreviados de obras;
- periódicos, séries, coleções, corpora, inscrições e papiros;
- edições críticas e siglas de editores;
- obras patrísticas, pseudepígrafos, apócrifos e documentos antigos;
- referências bíblicas, com o nome completo do livro e a edição textual utilizada;
- termos gregos, hebraicos, aramaicos e latinos para os quais o projeto preveja explicação lexical;
- qualquer outra forma abreviada ou técnica cuja ausência de explicação force o leitor a consultar uma lista externa.

Regras de prioridade:

1. **Nenhum novo verbete deve ser considerado editorialmente concluído antes da revisão dos popups.**
2. Ao revisar verbetes antigos, a ausência de popup em uma abreviatura, autor, obra ou referência identificável deve ser tratada como **pendência prioritária**.
3. A forma visível da fonte deve ser preservada; a expansão pertence ao popup.
4. **Não inventar expansões.** Quando uma sigla, inicial, autor ou obra não puder ser identificado com segurança, preservar a forma da fonte e deixar sem expansão até confirmação.
5. Em caso de conflito entre enriquecimento visual secundário e cobertura de popups, **a cobertura correta dos popups tem precedência**.
6. As listas de abreviaturas do próprio léxico-fonte têm prioridade como autoridade para a expansão das siglas; fontes externas só devem ser usadas para confirmar ou complementar quando necessário.
7. O mecanismo centralizado de popups deve ser mantido e ampliado continuamente para que correções beneficiem tanto verbetes antigos quanto futuros.


Projeto lexicográfico composto por quatro dicionários independentes: **Hebraico–Português**, **Aramaico–Português**, **Grego–Português** e **Latim–Português**. Reúne, com separação rigorosa entre as fontes, dados filológicos de léxicos clássicos e modernos, referências textuais e bibliográficas, tradução e recursos interativos.


## Princípio prioritário — links externos validados

A **validação rigorosa dos links externos é um dos recursos centrais e mais almejados do Scriptura Lexicon**. Ela deve ser tratada com a mesma prioridade editorial dos popups explicativos.

O objetivo não é apenas oferecer uma referência clicável, mas permitir que o leitor saia diretamente do verbete para a **passagem, edição, obra ou registro exatos**, sem depender de URLs construídos por analogia, caminhos presumidos ou redirecionamentos quebrados.

Essa prioridade aplica-se a **todos os dicionários, todas as fontes lexicográficas e todos os verbetes**, antigos e futuros.

Regras obrigatórias:

1. **Nenhum link externo novo deve ser commitado antes de ser validado.**
2. Validar significa confirmar que a URL responde e que o destino corresponde efetivamente ao **autor, obra, edição, idioma e passagem** citados no verbete.
3. Uma página que simplesmente existe não basta: o destino deve ser semanticamente correto para a referência da fonte.
4. **Nunca construir URLs por inferência de padrão** — por exemplo, trocando números, identificadores CTS/URN, códigos de edição ou segmentos de caminho com base em outro link aparentemente semelhante.
5. Para o Perseus, confirmar a obra, a edição grega ou latina e o sistema de numeração da passagem antes de criar o link. Sempre que houver rota estável e comprovada no Hopper, preferi-la a rotas beta ou experimentais.
6. Em autores com sistemas de citação concorrentes, como Flávio Josefo, preservar o sistema usado pela fonte e mapear a passagem somente depois de verificar a equivalência.
7. Se uma referência não puder ser mapeada com segurança, **preservar o popup informativo e deixar a referência sem link** até que seja possível validá-la.
8. Links quebrados, links para a passagem errada e links para edição/idioma incorretos devem ser tratados como **defeitos editoriais prioritários**.
9. A auditoria de links deve ser retroativa: verbetes antigos devem ser revistos sempre que se descobrir um padrão de URL inválido ou uma rota mais estável.
10. Esta validação deve fazer parte da **checagem obrigatória de finalização de cada novo verbete**, juntamente com a revisão dos popups.
11. Quando a interface apresentar um popup associado à referência clicável, o popup deve identificar corretamente o destino bibliográfico; o link associado deve ser previamente validado.
12. **Não inventar destinos.** Na dúvida, é preferível não haver link a haver um link plausível, porém não verificado.

## Interface

A versão atual é uma aplicação estática composta por:

- `index.html`
- `style.css`
- `script.js`

A pesquisa permanece oculta até que algum texto seja digitado. O seletor de fonte é preenchido automaticamente a partir das fontes presentes nos verbetes e atua como filtro adicional.

## Estrutura dos quatro dicionários

A interface é dividida em quatro seções independentes, acessíveis pelo menu sanduíche:

- **Hebraico–Português**
- **Aramaico–Português**
- **Grego–Português**
- **Latim–Português**

Cada resultado e cada cartão de verbete deve declarar sua seção por meio de `data-dictionary`, com um dos valores: `hebraico`, `aramaico`, `grego` ou `latim`.

Os verbetes atualmente cadastrados pertencem ao dicionário **Grego–Português**. A troca de seção limpa a pesquisa, oculta o verbete aberto e recalcula o filtro de fontes apenas para o dicionário ativo. As seções também podem ser acessadas diretamente por hash: `#hebraico`, `#aramaico`, `#grego` e `#latim`.


## Regra editorial — autores greco-romanos

Quando um verbete citar uma passagem de autor greco-romano, a referência deve, sempre que possível, apontar diretamente para a passagem correspondente no **Perseus Digital Library**, coleção Greco-Roman:

https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman

Regras:

- manter na interface a forma bibliográfica da fonte original, por exemplo `Plat. Apol. 18e`, `Xen. Mem. 3.4.8`, `Thuc. 1.86`;
- transformar essa referência em link para a passagem exata no Perseus quando a identificação for segura;
- **preferir sempre a edição no idioma original**: grego para autores gregos e latim para autores latinos;
- usar uma tradução no Perseus somente quando a edição no idioma original não estiver disponível ou não puder ser identificada com segurança;
- não alterar silenciosamente a referência da fonte para fazê-la caber no Perseus;
- se a referência estiver ambígua, incompleta, usar paginação editorial não mapeável ou a obra não estiver disponível no Perseus, manter a referência sem link e preservar o tooltip bibliográfico;
- quando necessário, pesquisar e confirmar o identificador de obra/edição utilizado pelo Perseus antes de criar o link;
- exemplos de modelo:
  - `Plat. Apol. 18e` → `https://www.perseus.tufts.edu/hopper/text?doc=Plat.+Apol.+18e&fromdoc=Perseus%3Atext%3A1999.01.0169`.

Essa regra aplica-se prospectivamente a todos os novos verbetes e deve ser usada também na revisão de verbetes antigos quando eles forem revisitados.

### Auditoria retroativa do Perseus

As referências já cadastradas a autores antigos devem ser auditadas retroativamente. Quando o Perseus disponibilizar uma edição no idioma original e a passagem puder ser identificada com segurança, a citação deve se tornar um link direto para essa passagem.

A prioridade é o **texto grego original** para autores gregos e o **texto latino original** para autores latinos. Referências baseadas apenas em paginação editorial, sem identificação segura da obra e da passagem, devem permanecer sem link até que a equivalência possa ser confirmada.


## Regra editorial — links para autores greco-romanos

Esta regra é subordinada ao **Princípio prioritário — links externos validados** acima e deve ser aplicada como parte obrigatória da finalização e da auditoria retroativa dos verbetes.

Os redirecionamentos para autores greco-romanos devem ser tratados com o mesmo rigor dos popups.

- **Nenhum URL deve ser construído por inferência e commitado sem validação da obra, edição e sistema de citação.**
- Para obras disponíveis no Perseus clássico, preferir URLs do `www.perseus.tufts.edu/hopper/text` que indiquem explicitamente a **edição grega ou latina** por identificador Perseus/CTS.
- Evitar rotas diretas do tipo `beta.perseus.tufts.edu/urn...` quando houver uma rota Hopper estável e validada para a mesma edição e passagem.
- Confirmar no Perseus Catalog se o identificador de edição é realmente grego/latino; não deduzir `perseus-grc1`, `perseus-grc2` etc. apenas pelo padrão de outros autores.
- Em Flávio Josefo, distinguir rigorosamente a numeração contínua de seções da edição de **Benedikt Niese** da divisão tradicional `livro.capítulo.seção` de **Whiston**. Não converter uma na outra por simples manipulação numérica.
- Quando a fonte lexicográfica usa a divisão tradicional de Whiston, usar no Hopper o próprio eixo `book : whiston chapter : whiston section` da edição grega, preservando a referência original.
- Quando uma obra só puder ser apontada com segurança por outra interface oficial do ecossistema Perseus, como o **Scaife Viewer**, usar essa rota somente depois de confirmar a edição e a passagem.
- Se não houver correspondência segura entre a referência da fonte e a passagem digital, **não inserir link** até que a correspondência possa ser verificada.
- Esta validação é obrigatória para todos os verbetes existentes e futuros, em todos os dicionários do Scriptura Lexicon.

## Regra editorial — popups bibliográficos

Esta regra é subordinada ao **Princípio prioritário — popups explicativos** acima e deve ser aplicada como parte obrigatória da finalização de cada verbete.

Toda abreviatura, sigla, autor, obra, periódico, coleção epigráfica ou papirológica e referência bibliográfica exibida nos verbetes deve receber **popup explicativo quando sua identificação puder ser estabelecida com segurança**.

Regras:

- usar prioritariamente as listas de abreviaturas do próprio léxico que está sendo transcrito;
- preservar no texto visível a forma bibliográfica da fonte, sem expandi-la ou modernizá-la silenciosamente;
- o popup pode expandir a sigla, identificar a obra ou periódico e esclarecer o autor, mas **não deve completar dados que a fonte e a pesquisa bibliográfica segura não sustentem**;
- siglas ambíguas de uma única letra, como `D`, `M`, `N` ou `S`, não devem ser expandidas automaticamente sem contexto suficiente;
- referências já encapsuladas em popup ou link não devem receber um segundo popup sobreposto;
- `LXX`, `NT`, `N. T.`, `Sept.`, `q.v.`, `s.v.`, `v.l.` e abreviaturas equivalentes devem ser explicadas sempre que aparecem como texto do verbete;
- coleções e periódicos como `SEG`, `POxy`, `PGM`, `JBL`, `JTS`, `ET`, `ZNW`, `NTS`, `ConNeot`, `SBBerlAk`, `RivFil` e semelhantes devem exibir sua forma expandida;
- obras cristãs antigas e pseudepígrafos abreviados, como `1 Cl`, `2 Cl`, `IEph`, `IPhld`, `MPol`, `TestAbr`, `SibOr`, `ApcMos` e semelhantes, devem ser identificados no popup;
- quando um autor moderno é citado apenas por iniciais e sobrenome, o popup deve preservar essa forma se a expansão do nome não estiver segura; não se deve adivinhar o prenome;
- esta regra vale para **todos os dicionários e todas as fontes** do Scriptura Lexicon e também para os verbetes já cadastrados.

A implementação mantém um registro central de expansões seguras em `script.js`, de modo que as mesmas siglas recebam tratamento consistente em verbetes antigos e futuros.

## Regra editorial — referências bíblicas

Os links bíblicos devem respeitar a seção linguística do projeto.

- no **Grego–Português**, **todas as referências ao Antigo Testamento** devem apontar para a **Septuaginta (LXX)** na Deutsche Bibelgesellschaft, independentemente de a fonte lexicográfica escrever explicitamente `Sept.` ou `LXX`;
- no **Hebraico–Português**, as referências ao Antigo Testamento devem apontar para a **Bíblia Hebraica (BHS)**, salvo indicação explícita em contrário;
- referências ao **Novo Testamento grego** devem apontar para a **NA28**;
- livros deuterocanônicos/apócrifos da tradição grega devem apontar para a **LXX**;
- nas futuras seções Aramaico–Português e Latim–Português, a tradição textual será definida pelo contexto da fonte até que haja regra específica;
- todos os links bíblicos devem mostrar, no popup ao passar o mouse ou receber foco, o **nome completo do livro** e a edição textual utilizada.

Exemplos:

- Grego–Português: `Is 44.6` → LXX;
- Grego–Português: `Êx 6.20` → LXX;
- Hebraico–Português: `Gn 42.25` em HALOT → BHS;
- `Sab 18.25` → LXX;
- `Rm 10.7` → NA28.

## Padrão de commits

Todos os commits do projeto devem ser escritos **em português** e conter um **título objetivo** seguido de uma **descrição detalhada**.

### Título

O título deve:

- começar com verbo no infinitivo;
- indicar claramente a ação principal realizada;
- mencionar o verbete, recurso ou área afetada quando isso ajudar a identificar a alteração;
- evitar títulos genéricos como `Atualizações`, `Correções`, `Mudanças` ou equivalentes;
- preferencialmente permanecer em uma única linha.

Modelo:

`<verbo no infinitivo> <objeto principal da alteração>`

Exemplos:

- `Adicionar o verbete כֶּסֶף do HALOT ao dicionário Hebraico–Português`
- `Corrigir a acepção 4 de כֶּסֶף e restaurar remissões lexicais do HALOT`
- `Implementar navegação entre os quatro dicionários por menu lateral`
- `Remover a coluna redundante de língua dos resultados de pesquisa`
- `Vincular referências greco-romanas ao texto original no Perseus`

### Descrição

A descrição deve explicar, de forma detalhada e verificável:

- **o que foi alterado**;
- **por que a alteração foi feita**, quando houver motivo editorial ou técnico relevante;
- **quais arquivos ou áreas foram afetados**;
- **quais regras editoriais foram introduzidas ou modificadas**;
- **quais referências, fontes ou comportamentos foram preservados**;
- **eventuais limitações, ambiguidades ou decisões conservadoras**.

A descrição deve usar frases completas e pode conter vários parágrafos ou marcadores.

Modelo recomendado:

```
<TÍTULO>

- Alteração principal realizada.
- Ajustes complementares.
- Regras editoriais ou técnicas aplicadas.
- Arquivos ou componentes afetados.
- Observações de preservação da fonte, quando relevantes.
```

### Exemplo completo

```
Corrigir a acepção 4 de כֶּסֶף e padronizar referências bíblicas

- Restaura literalmente as formas e remissões lexicais presentes na acepção 4 do verbete כֶּסֶף em HALOT.
- Remove a paráfrase editorial que descrevia as remissões como ação do próprio dicionário.
- Adiciona tooltips com o nome completo dos livros bíblicos.
- Passa a identificar no tooltip a edição textual utilizada: BHS, LXX ou NA28.
- Documenta a regra contextual para escolher entre Bíblia Hebraica e Septuaginta.
- Atualiza index.html, script.js e README.md.
```

Este padrão deve ser usado em todos os commits futuros do projeto.


## Fontes primárias em PDF — localização permanente

Os PDFs oficiais estão versionados em `fontes/fonte-bdag.pdf` (BDAG) e
`fontes/fonte-leh.pdf` (LEH). Seus nomes permanecem fixos, mesmo quando
seu conteúdo for substituído por recortes das letras beta, gama, delta etc.
Antes de cada lote, conferir o arquivo, seu SHA e o intervalo de verbetes
na branch correspondente. A presença do arquivo deve ser verificada no
GitHub antes de qualquer alegação de indisponibilidade. A metodologia
normativa está documentada em `regras/Rbdag.txt` e `regras/Rleh.txt`.


### Orquestração recuperável (09/10/2026)

Manifesto local: `regras/estado-orquestracao.json`. Protocolo: `ORQUESTRACAO.md`. Pré-voo remoto somente leitura: `python tools/validar_orquestracao.py --all`. O HEAD remoto prevalece; não confundir pré-voo com auditoria lexical. Os PDFs BDAG/LEH têm nomes permanentes em `fontes/`.


## Acompanhamento editorial — DGP, lote 63

Na branch `chat-gpt-dgp`, o manifesto `lexicons/dgp-progress.json` registra
63 lotes e 1.830 entradas da letra alfa, após a incorporação do lote 63
(ordinais 1781–1830: **Ἄλκηστις, ιδος (ἡ)** a **ἀλλοίως**).
O próximo ordinal é **1831**. Fonte primária: XML da letra alfa do
repositório `aniseferreira/Grc-Por-DigDict`, no snapshot documentado em
`regras/Rdgp.txt`. A validação visual em navegador não está atestada.
A regra canônica, o módulo de lotes, o manifesto e este README são atualizados
no mesmo commit diretamente na branch da fonte, sem alterações na `main`.


**Auditoria técnica do lote 63:** a propriedade de cartões utilizada pelo
módulo DGP é `cardsHtml`. A correção posterior ao commit lexical garantiu
que os 50 novos cartões sejam efetivamente disponibilizados na interface.


### LEH — Continuidade lexical (09/10/2026)

O lote de 20 verbetes da sequência **ἀνατιναγμός → ἀναχάσκω** eleva a frente LEH de **670 para 690 entradas**. O próximo lema é **ἀναχωρέω**. A fonte é `fontes/fonte-leh.pdf` (SHA do blob `f4e76ee6414b6aace210ca9f7c061e92488cc0fa`). Os registros LEH mantêm identidade separada de BDAG, DGP e PEREIRA. Conferir o HEAD da branch `chat-gpt-leh` e `regras/estado-orquestracao.json` antes de qualquer retomada. Notas textuais extraídas que exigem cotejo visual permanecem explicitamente identificadas no cartão.

### PEREIRA — Integração lexical do lote 012 (09/10/2026)

O módulo `lexicons/pereira.js` registra **510 verbetes**, após a incorporação dos ordinais **461–510** (**Ἀδέω → Ἀ-διέργαστος, ον**), obtidos na API da fonte e conferidos contra as respostas JSON originais. O próximo registro é **Ἀ-διερεύνητος, ον**, ID **34516**, ordinal **511**. O manifesto lexical é `lexicons/pereira-progress.json`; a cópia de estado da origem integrada encontra-se em `regras/estado-orquestracao-pereira.json`. As branches individuais continuam sendo autoridades para suas respectivas execuções; não interpretar o manifesto legado global como substituto do checkpoint lexical.

## Nova arquitetura de execução independente — 09/10/2026

**Decisão vigente e prioritária:** BDAG, DGP, LEH e PEREIRA são frentes lexicográficas **independentes**. Não existe ordem global `BDAG → DGP → LEH → PEREIRA`, dependência de conclusão, fila global nem bloqueio de uma fonte pelo progresso de outra.

### Cinco rotinas previstas

| Rotina | Frequência | Branch exclusiva de escrita | PR/merge nesta rotina |
|---|---|---|---|
| Incorporação BDAG | a cada 1 hora | `chat-gpt-bdag` | Proibido |
| Incorporação DGP | a cada 1 hora | `chat-gpt-dgp` | Proibido |
| Incorporação LEH | a cada 1 hora | `chat-gpt-leh` | Proibido |
| Incorporação PEREIRA | a cada 1 hora | `chat-gpt-pereira` | Proibido |
| Integração independente | a cada 3 horas (8/dia) | `chat-gpt-commits` (somente integração) | PR, resolução de conflitos e merge |

A criação e ativação efetiva dos agendamentos dependem da capacidade do serviço de tarefas; a documentação descreve a política **desejada**, não atesta sozinha que todas as tarefas estão ativas. A rotina de integração verifica mudanças em `chat-gpt-bdag`, `chat-gpt-dgp`, `chat-gpt-leh`, `chat-gpt-pereira`, `chat-gpt-estilos` e `chat-gpt-correcoes`, abre ou reutiliza PRs para `chat-gpt-commits` e, após análise de conflitos e verificações, mescla e encerra como `merged`, sem excluir as origens. PRs não pertencem às quatro rotinas horárias.

Todas as rotinas fazem pré-voo dos HEADs GitHub reais, leem somente as regras e fontes aplicáveis ao seu escopo, preservam fielmente a redação de cada léxico, publicam na branch autorizada com controle `expected_sha` e `force=false`, e conferem os resultados depois da escrita. Nunca escrever em `main`. Não reinterpretar o manifesto `regras/estado-orquestracao.json` como checkpoint global: cada branch contém estado próprio. A integração usa também `regras/estado-orquestracao-{dgp,leh,pereira}.json` como instantâneos informativos de fontes já mescladas; o HEAD de origem prevalece.

### Relatório obrigatório — totais de verbetes

**Toda execução, inclusive execuções bloqueadas e a rotina de integração, deve apresentar uma tabela com BDAG, DGP, LEH e PEREIRA**, com contagens retiradas dos HEADs remotos atuais. Registrar o método de contagem e o momento da consulta. Não reutilizar este retrato histórico como contagem futura. Se uma fonte não puder ser verificada, escrever `não verificado`, não zero.

| Fonte | Total de referência em 09/10/2026 | Critério |
|---|---:|---|
| BDAG | 941 | 941 linhas e 941 cartões em `lexicons/bdag.js` |
| DGP | 1.830 | `lexicons/dgp-progress.json`, lote 63 (contagem de módulos HTML não reconciliada; auditoria pendente) |
| LEH | 690 | 690 linhas e 690 cartões em `lexicons/leh.js` |
| PEREIRA | 510 | 510 linhas e 510 cartões em `lexicons/pereira.js` |

**Atenção DGP:** o checkpoint de 1.830 entradas não foi reconciliado por contagem simples das marcações `search-row`/`entry-card` nos módulos inspecionados; não afirmar auditoria visual/estrutural completa sem verificá-la. Essa ressalva não autoriza reduzir nem reescrever o checkpoint.

### Autoridades editoriais

As regras `regras/Rbdag.txt`, `regras/Rdgp.txt`, `regras/Rleh.txt` e `regras/Rpereira.txt` conservam as decisões filológicas específicas. A publicação de cada lote é atômica na branch de origem. O protocolo `ORQUESTRACAO.md` organiza as cinco rotinas; `PARALLEL_WORKFLOW.md` delimita a propriedade dos arquivos; `regras/Rintegracao.txt` é a norma exclusiva do integrador. O coletor PEREIRA por HTTP POST foi validado externamente em 09/10/2026, mas sua hospedagem e conexão à tarefa horária **ainda exigem implementação**; não presumir acesso POST nativo do agendamento.


### Agendamentos efetivamente configurados — auditoria preservada às 05h (09/10/2026)

Os quatro processos de incorporação foram ativados de hora em hora, com execução independente e sem PR: BDAG no minuto 05, DGP no minuto 15, LEH no minuto 25 e PEREIRA no minuto 35 (horário de Brasília). O quinto agendamento **GDHAGP integração e auditoria 05h** está ativo **oito vezes ao dia**, às **02h, 05h, 08h, 11h, 14h, 17h, 20h e 23h** (America/Sao_Paulo).

**Preservação obrigatória da auditoria:** a antiga tarefa independente **Auditoria diária Scriptura Lexicon**, prevista para as 05h, foi **pausada, não excluída** para liberar uma vaga. **A revisão diária às 05h continua obrigatória**, agora como a primeira fase do quinto agendamento: examinar e corrigir defeitos comprovados somente em `chat-gpt-correcoes`, conforme `regras/Rcorrecoes.txt`, e relatar cobertura, testes, erros e commits. **Somente depois** realizar a integração dos PRs; um problema de integração não deve omitir ou cancelar a auditoria. Nos outros sete horários, executar somente integração. Essas duas fases têm permissões distintas e nenhuma escreve em `main`.

A programação registrada é um compromisso de execução do serviço de agendamento; não constitui garantia absoluta contra falha externa ou prova de que a auditoria já foi executada. Em caso de falha, produzir diagnóstico expresso e seguir a rotina no próximo período. Em **todos** os relatórios, apresentar tabela atualizada dos totais BDAG/DGP/LEH/PEREIRA, distinguindo contagem estrutural e checkpoint.

## Autonomia para resolver conflitos de merge — 09/10/2026

Por decisão expressa do responsável pelo projeto, **a rotina de integração deve resolver autonomamente os conflitos de merge**, escolhendo a solução técnica, editorial e filológica mais fundamentada, sem solicitar aprovação caso a caso. Esta autorização vale somente para integrações seguras de `chat-gpt-bdag`, `chat-gpt-dgp`, `chat-gpt-leh`, `chat-gpt-pereira`, `chat-gpt-estilos` e `chat-gpt-correcoes` em `chat-gpt-commits`.

**Critério fundamental:** consolidar as contribuições compatíveis; nunca substituir cegamente uma versão integral por outra. Preservar todos os lemas, sentidos, campos da fonte, IDs, popups, referências, decisões filológicas comprovadas, estilos e correções válidas. Para conflitos de documentação, reunir trechos não redundantes e dar precedência às diretrizes vigentes; para checkpoints, manter **um estado por fonte**, sem regressão nem contagem fictícia. Auditar contagens, IDs, `search-row`/`entry-card`, JS/CSS, links e checkpoints antes e depois, e registrar por PR a decisão adotada e os testes executados.

O integrador pode produzir um **merge commit de dois pais reais** diretamente em `chat-gpt-commits`, com checagem de HEAD e atualização `expected_sha`, `force=false`, desde que o GitHub reconheça o PR como `closed` e `merged=true`. Não alterar as branches de origem, não excluir ramos, não criar branches de sondagem, não escrever em `main`, não forçar histórico. Se não houver evidência suficiente para decidir sem perda de conteúdo, a melhor decisão é conservar o PR aberto, registrar precisamente a dúvida e continuar os demais PRs seguros; **não improvisar leitura lexical**. A auditoria diária das 05h mantém prioridade e não é dispensada por conflitos.

### PR #65 — resolução de conflitos entre correções e integração (09/10/2026)

O PR [#65](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/65), da branch `chat-gpt-correcoes` para `chat-gpt-commits`, foi reconciliado preservando integralmente a versão consolidada dos módulos e checkpoints lexicográficos. A origem trazia **460** verbetes PEREIRA, que já estavam inteiramente incluídos (460 linhas e 460 cartões idênticos) nos **510** verbetes da integração. Portanto, a versão consolidada de `lexicons/pereira.js`, `lexicons/pereira-progress.json` e `regras/Rpereira.txt` prevalece para evitar retrocesso ao lote 011. As fontes PDF BDAG e LEH eram idênticas nas duas branches (mesmos blobs SHA) e não foram alteradas.

Foi incorporado `regras/Rcorrecoes.txt` da branch de auditoria, incluindo proteção da branch exclusiva e manutenção da auditoria diária às 05h no agendamento combinado. Os JSON históricos `pereira_source_probe_20261008.json` e `pereira_source_probe_20261008_b.json` foram retidos como documentação de proveniência das consultas POST à API oficial; os dados foram validados como JSON (16 e 27 prefixos, sem erros registrados). O workflow temporário `.github/workflows/probe_pereira_20261008.yml` **não foi promovido** à branch consolidada, porque é uma sondagem obsoleta para branch temporária com permissão `contents: write`; seu histórico permanece preservado na origem e na ancestralidade do merge. Não houve adição ou edição de verbetes nem alteração de `main`. Preservadas as seis branches de trabalho e a autoridade do integrador para conflitos futuros.

### PR #64 — integração documental da frente PEREIRA (09/10/2026)

O [PR #64](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/64) acrescentou a regra de execução horária **independente** do PEREIRA, proibindo PRs durante a incorporação lexical e reservando merges à integração trihorária. O novo cabeçalho normativo foi incorporado integralmente em `regras/Rpereira.txt`, preservando todo o conteúdo editorial já consolidado e o lote 012.

As versões de `ORQUESTRACAO.md`, `PARALLEL_WORKFLOW.md` e `regras/Rintegracao.txt` propostas na origem já estavam integralmente contidas nas versões mais completas do destino; foram conservadas as versões consolidadas, inclusive as decisões posteriores de resolução autônoma de conflitos e auditoria obrigatória das 05h.

O manifesto da origem `regras/estado-orquestracao.json` (stage PEREIRA, schema 2) foi arquivado no destino sob o nome específico `regras/estado-orquestracao-pereira.json`, sem sobrescrever o manifesto legado BDAG. O checkpoint lexical canônico do PEREIRA permanece `lexicons/pereira-progress.json`: 510 verbetes, próximo ordinal 511, Ἀ-διερεύνητος, ον, ID 34516. A consulta POST local foi comprovada, mas o coletor ainda não está conectado à execução horária remota; não declarar acesso automático sem prova.

Integração documental, sem alterar módulos lexicográficos, outros checkpoints, branches de origem ou `main`.

### PR #66 — preparação conservadora para `main` (09/10/2026)

O [PR #66](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/66) possui **base `main`** e origem `chat-gpt-commits`. Esta situação é diferente das seis integrações de fontes e **NÃO autoriza escrever em `main`**, pois a regra permanente do GDHAGP proíbe commits e merges automáticos no ramo principal. A intervenção autorizada aqui consiste em incorporar, por ancestralidade Git, o último commit de `main` ao histórico de `chat-gpt-commits`, preservando a árvore consolidada, e tornar o PR verificável/mesclável sem efetuar seu merge para `main`.

Conferência do conteúdo exclusivo de `main` (merge do PR #33, formatação DGP): `NOTICE-DGP.md`, `index.html`, `lexicons/dgp-format.css`, `lexicons/dgp-format.js` e `script.js` possuem **blobs idênticos** nas duas branches. O `lexicons/dgp-batches.js` de `main` é um **prefixo integral e idêntico** daquele de `chat-gpt-commits`. Os 59 lotes do manifesto DGP em `main` estão preservados literalmente entre os 63 lotes consolidados; os totais são **1.630** (main) versus **1.830** (integração), sem regressão. O texto integral de `regras/Rdgp.txt` de `main` está contido no arquivo consolidado, que acrescenta decisões posteriores. Nenhuma outra diferença exclusiva daquele commit foi identificada.

A resolução preserva integralmente a árvore lexical, os checkpoints de BDAG, DGP, LEH e PEREIRA, o integrador e a auditoria das 05h. Um merge de dois pais com `main` como **segundo pai** em `chat-gpt-commits` não publica nada em `main`, e não autoriza que a rotina trihorária passe a publicar lá. O PR #66 poderá ser mesclado em `main` **somente mediante autorização específica**, distinta das autorizações para integração das seis fontes.

### Continuidade BDAG — 09/10/2026

O lote `ἀπόστασις → ἀποτάσσω` acrescenta 20 verbetes ao BDAG na branch `chat-gpt-bdag`, totalizando 1.021 linhas e 1.021 cartões. Fonte `fontes/fonte-bdag.pdf`, SHA Git `554c1523c9f893dced39f6047ca8375d5d7ca2a0`, páginas físicas 35–38. Próximo lema: `ἀποτελέω`. A integração é independente desta rotina.

## DGP — progresso lexical na branch exclusiva (09/10/2026)

Na branch `chat-gpt-dgp`, a rodada de 09/10/2026 incorporou os ordinais **1981–2080** do XML `arquivos_xml/01_Alfa.txt.xml` (repositório `aniseferreira/Grc-Por-DigDict`, commit `deb54b426ead447d01ced7534736f3e77be7015b`): dois lotes de 50, com um commit atômico por lote. O manifesto passa a registrar **2.080** entradas; próximo ordinal **2081** (`ἀμέρδω`). O total deve ser confrontado com o HTML efetivamente renderizado, sem tratar o manifesto como auditoria estrutural completa. Popups e links seguem as regras prioritárias deste README. Alterações ficam restritas à branch DGP; a integração para `chat-gpt-commits` é processo separado.

> **Nota cronológica (09/10/2026):** a seção histórica sobre 2.080 entradas refere-se ao estado anterior ao lote 69. O checkpoint lexical incorporado passou para 2.180 verbetes, próximo ordinal 2.181; auditoria e integração registradas em separado.


## JASTROW — implantação inicial (10/10/2026)

**Histórico da implantação inicial:** naquele momento, 0 verbetes JASTROW haviam sido publicados, auditados ou integrados. O repositório ganhou a norma independente [`regras/Rjastrow.txt`](regras/Rjastrow.txt) e o checkpoint explícito [`lexicons/jastrow-progress.json`](lexicons/jastrow-progress.json). Esses dois arquivos são preparação da esteira, **não** um lote de 200 verbetes.

**Fonte estabelecida:** Marcus Jastrow, *A Dictionary of the Targumim, the Talmud Babli and Yerushalmi, and the Midrashic Literature*, [Sefaria — Jastrow](https://www.sefaria.org/Jastrow?tab=contents). Em 10/10/2026 a interface da obra era acessível, mas as consultas de índice, palavras, autocompletar e texto da API não puderam ser recuperadas pela ferramenta de navegação desta sessão. Sem os registros integrais, ficaram expressamente suspensas extração, tradução, construção de `search-row`/`entry-card`, auditoria editorial e integração; não se criaram lemas fictícios.

**Fluxo obrigatório:** obter sequência canônica e conteúdo verificável → traduzir integralmente para português brasileiro preservando a camada Fonte → incorporar até 200 entradas reais em `chat-gpt-jastrow` → auditar independentemente em `chat-gpt-correcoes` (filologia, popups, minidicionário, minibiografias, HTML/CSS/JS, RTL/LTR, acessibilidade, links e interface) → integrar por PR para `chat-gpt-commits` após aprovação. Não alterar `main`, não apagar branches, não anunciar produção até verificar os commits e seus dados.

### JASTROW — retomada com fonte XML original (10/10/2026)

**Estado remoto verificado:** a branch exclusiva `chat-gpt-jastrow` contém **200 registros originais recuperados** no arquivo `lexicons/jastrow-source-lote-0001.json` (A00000–A00199, primeira entrada `א`, última `אבר`; seguinte `אָבַר` = A00200). O lote-fonte foi criado pelo workflow GitHub Actions no commit [d002551](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/commit/d00255186bb0c4cae9ed2c89a11588d40c75aa88), com verificação de contagem, unicidade, IDs, integridade XML e hashes individuais. **Esses 200 são registros da camada Fonte; NÃO equivalem a 200 traduções.**

A fonte determinante passou a ser o XML de origem do projeto [Sefaria-Data](https://github.com/Sefaria/Sefaria-Data/blob/947c1b91684df9f8b92f14cf0d281b5d4f29bfc7/dictionaries/Jastrow/data/01-Merged%20XML/Jastrow-full.xml), commit fixo `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`, blob `98292a0c219835df19b9da7cea1edbc4dcc6526d`. A Sefaria identifica a edição de Jastrow (Luzac, 1903) como domínio público. O documento XML contém 32.512 elementos `entry`, preservando homógrafos com IDs próprios. A API pública continua sendo recurso complementar; sua indisponibilidade não impede consultar esse repositório canônico.

**Camada portuguesa:** os dez primeiros registros `A00000–A00009` receberam tradução editorial em `lexicons/jastrow.js`. `index.html` recebeu âncoras exclusivas de JASTROW na pesquisa e nos cartões e carrega o módulo antes de `script.js`. A auditoria estática confirmou **10 identificadores distintos**, correspondência exata aos 10 registros da fonte, uma âncora de cada tipo e carregamento correto. O próximo registro a traduzir é `A00010` (ordinal 11, `אאלר"ן`). A fonte restante (`A00010–A00199`) continua disponível para tradução sem nova consulta à API.

**Pendente:** auditoria filológica independente de todos os registros traduzidos em `chat-gpt-correcoes`, testes funcionais reais no navegador, popups completos e verificação de apresentação RTL/LTR; somente depois abrir PR e mesclar em `chat-gpt-commits`. **Nenhuma alteração nesta rodada foi realizada em `main`.** Não declarar o lote de 200 completo com base apenas na extração e nos dez primeiros cartões.


## JASTROW — complementação da auditoria única dos 100 casos (11/10/2026)

Na branch `chat-gpt-correcoes`, os 100 casos selecionados por ressalvas foram reconciliados com o XML canônico e os destinos `xref rid`: `A00026 → A00016`, `A00049 → A00107` e `A00429 → A00517` (incompatibilidade pendente). Cinco cartões receberam emendas (`A00013`, `A00026`, `A00049`, `A00083`, `A00429`). Resultado atualizado **A=37, C=32, P=31 (100 examinados)**; os P não equivalem à aprovação. Sem novas incorporações, testes de navegador nem integração nesta rodada. [Relatório da auditoria única](auditoria/JASTROW-2026-10-11-auditoria-unica-100-pendencias.md), [matriz dos 100 com fontes](auditoria/JASTROW-2026-10-11-auditoria-unica-100-evidencias.json) e [manifesto dos cinco ajustes](auditoria/JASTROW-2026-10-11-complementacao-100-manifest.json).


## JASTROW — tratamento das 31 pendências filológicas (11/10/2026)

Realizada revisão documental dirigida dos 31 pareceres classificados P no lote selecionado de 100 verbetes (não são 31 incorporações). Foram publicadas **31 emendas de aparato em 16 módulos JavaScript**, sendo **30 casos corrigidos e validados no confronto com o Jastrow digital (C)** e **1 pendência específica preservada (P, A00429)**. Balanço atualizado dos mesmos 100: **A 37, C 62, P 1**, e 64 emendas acumuladas sobre o conjunto auditado. O XML original permanece intocado. As transcrições de 1903 disponibilizadas pela Wikisource permitiram resolver as segmentações A00271, A00284, A00371, A00411, A00571 e A00592; o inglês «heated store» em A00407 foi conservado em nota enquanto a tradução «forno» é explicitamente contextual. A00429 contém remissão abreviada אוּ׳, e o identificador eletrônico A00517 aponta para «ou»; o destino histórico exato não pôde ser comprovado, e nenhuma expansão foi inventada.

**Documentação e evidência:** [parecer dos 31](auditoria/JASTROW-2026-10-11-resolucao-dos-31.md), [manifesto de cada intervenção](auditoria/jastrow-resolucao-31-manifest.json), [matriz dos 100](auditoria/JASTROW-2026-10-11-auditoria-unica-100-evidencias.json) e [checkpoint](auditoria/jastrow-auditoria-unica-progresso.json). Todos os 16 arquivos alterados tiveram sintaxe JavaScript verificada, com contagem dos registros preservada; testes funcionais de navegador e colação visual do fac-símile ou dos manuscritos rabínicos **não foram realizados**. A integração em `chat-gpt-commits` é procedimento separado; branch `main` não foi editada. A classificação A/C não significa que os testemunhos externos mencionados por Jastrow tenham sido pessoalmente consultados.


### JASTROW — última pendência A00429 solucionada (11/10/2026)

**Desfecho final (11/10/2026):** A00429 passa de P a C. O lema remissivo אֻדַן / אֻדְנָא pertence a אוּדְנָא I (A00568), «orelha»; sua identificação é sustentada pelas variantes do alvo e pela equivalência com אֹזֶן, não pelo número do homógrafo na abreviação original. O atributo XML rid=A00517 está incorreto e foi preservado imutável na camada Fonte. Os 100 pareceres ficam em **A 37, C 63, P 0**. Mantêm-se as ressalvas sobre manuscritos e testes de navegador, que não foram executados.

Parecer completo: [`auditoria/JASTROW-2026-10-11-A00429-desfecho.md`](auditoria/JASTROW-2026-10-11-A00429-desfecho.md). O universo total de Jastrow no projeto permanece 600 registros incorporados; os 100 são o lote da auditoria filológica única com pareceres individuais. Integração e testes de navegador permanecem processos independentes.


## JASTROW — segundo lote da auditoria filológica única (100 verbetes, 11/10/2026)

Realizado exame individual e completo dos **100 primeiros IDs ainda não auditados sob a norma vigente**, em ordem de fonte, excluindo os 25 IDs do primeiro lote que caem no intervalo ordinal 1–125. Intervalo lexical examinado: `A00000`–`A00124`, com **100 IDs distintos e 100 cartões efetivamente confrontados**. Resultado do lote 002: **72 A, 28 C, 0 P**. Acumulado da auditoria filológica única do JASTROW: **200 de 600 registros incorporados** (**109 A, 91 C, 0 P**); o próximo ainda não examinado é **`A00125` (ordinal 126)**. Os 600 cotejos históricos do regime anterior permanecem históricos, sem reclassificação automática.

As **28 correções** foram incorporadas nos módulos `jastrow-011-040.js`, `jastrow-041-080.js`, `jastrow-081-110.js` e `jastrow-111-140.js`, preservando a camada Fonte e a cardinalidade de pesquisa/cartões. O material corrigido acrescenta variantes, leituras de manuscritos e edições atribuídas a Jastrow, referências, sentido geral antes reduzido à locução e separação explícita de conjecturas/etimologias. A conferência foi realizada contra o XML canônico; **não significa inspeção independente de manuscritos rabínicos ou fac-símiles, nem teste funcional real de navegador**.

**Rastreabilidade:** [relatório com os 100 pareceres](auditoria/JASTROW-2026-10-11-lote-002-100-relatorio.md), [matriz JSON integral de fonte/tradução/justificativa](auditoria/JASTROW-2026-10-11-lote-002-100-evidencias.json) e [checkpoint acumulado](auditoria/jastrow-auditoria-unica-progresso.json). Esta auditoria pertence exclusivamente a `chat-gpt-correcoes`; a integração por PR é etapa separada, sem alteração de `main`.


A verificação estática dos cinco módulos carregados até A00139, com **140 linhas e 140 cartões emparelhados**, e cobertura dos 100 IDs selecionados está registrada em [prova JSON](auditoria/JASTROW-2026-10-11-lote-002-100-testes.json). Não se afirmou teste de navegador.


## JASTROW — terceiro lote de auditoria filológica única (12/10/2026)

Concluído o exame dos próximos **100 registros originais ainda não cobertos** pela auditoria filológica única: `A00125` a `A00241`, ordinais 126–242, excluídos 17 registros que pertenciam a lotes auditados anteriormente. **Resultado deste lote: A=70, C=30, P=0; acumulado dos três lotes: 300/600 (A=179, C=121, P=0).** A próxima entrada ainda não auditada é `A00242`. Os 600 cotejos do método histórico não foram promovidos a certificação vigente.

Foram realizadas 30 correções editoriais e acréscimos documentais em seis módulos: `jastrow-111-140.js`, `jastrow-141-170.js`, `jastrow-171-185.js`, `jastrow-186-200.js`, `jastrow-201-210.js` e `jastrow-211-235.js`. Os originais XML permanecem imutáveis. O procedimento preserva as diferenças entre variantes transmitidas por manuscritos/edições segundo Jastrow, análise etimológica e emendas conjecturais. A correção expressa de `A00126` substitui a referência equivocada a Sheviit pela referência documental a **Shevuot**.

**Provas:** [relatório com 100 pareceres e quadro global](auditoria/JASTROW-2026-10-12-lote-003-100-relatorio.md), [evidências integrais por entrada](auditoria/JASTROW-2026-10-12-lote-003-100-evidencias.json), [testes estáticos](auditoria/JASTROW-2026-10-12-lote-003-100-testes.json) e [checkpoint único acumulado](auditoria/jastrow-auditoria-unica-progresso.json). Checados 150 pares de cartões/linhas do conjunto de módulos e correspondência dos 100 IDs auditados; **não foram executados testes reais de navegador nem colação independente dos manuscritos rabínicos citados**. Integração com `chat-gpt-commits` pertence ao fluxo independente de PR; nenhuma alteração em `main`.


## Transparência universal do Scriptura Lexicon — 12/10/2026

Por solicitação expressa do usuário, **todas as próximas ações e todos os dicionários** devem publicar relatórios detalhados e inteiramente rastreáveis, com **várias barras independentes de progresso**: incorporação, auditoria textual/estrutural, auditoria filológica única (A/C/P), integração, correções efetivamente publicadas, pendências e testes funcionais quando aplicáveis. Cada barra exige numerador, denominador, %, origem, HEAD, escopo e limitação. Nenhum valor desconhecido recebe percentual inventado. Norma vinculante: [regras/Rtransparencia-relatorios.txt](regras/Rtransparencia-relatorios.txt). Os relatórios continuam incluindo as 14 fontes do projeto.

### Quarta auditoria filológica única do JASTROW — 12/10/2026

Novos **100 pareceres** sobre `A00242` a `A00363` (22 IDs do intervalo já auditados e pulados), com **73 aprovados A, 27 corrigidos C e 0 pendentes P**. Acumulado **400/600**, A=252, C=148, P=0. Próximo a examinar: `A00365`, ordinal 366. Foram preparados e verificados seis módulos com 27 notas e correções; XML canônico inalterado. **Apenas testes estáticos**: 150 pares ID/linha/cartão dos seis módulos, 100 evidências individuais; não houve colação independente de manuscritos ou teste DOM real. Integração dos reparos nova rodada continua separada. Documentação: [relatório de 100 pareceres](auditoria/JASTROW-2026-10-12-lote-004-100-relatorio.md), [evidência por entrada](auditoria/JASTROW-2026-10-12-lote-004-100-evidencias.json), [testes](auditoria/JASTROW-2026-10-12-lote-004-100-testes.json), [checkpoint](auditoria/jastrow-auditoria-unica-progresso.json).


## JASTROW — auditoria filológica única, quinto lote de 100 (12/10/2026)

O quinto lote foi preparado para publicação na branch `chat-gpt-correcoes`: 100 primeiros IDs do XML canônico ainda não auditados pela norma atual, **A00365–A00483**, ordinais 366–484, excluídos 19 IDs previamente auditados. Resultado do lote **76 A, 24 C, 0 P**. Acumulado da auditoria única **500/600 (83,3%)**, **328 A, 172 C e 0 P**; próximo ID **A00484** (ordinal 485). **Incorporação de 600/600** é independente de filologia de 500/600, de testes reais em navegador (não realizados) e da integração dos 24 reparos (não realizada nesta rodada).

Foram acrescentados aparatos em 24 cartões de cinco módulos Jastrow (`361-385`, `386-410`, `411-435`, `436-460`, `461-485`). As linhas/cardinais dos 125 cartões desses módulos, a unicidade dos IDs e a correspondência de todos os 100 registros auditados com o XML Sefaria/Jastrow foram verificadas estaticamente. Os próprios manuscritos citados pelo lexicógrafo e o fac-símile histórico não foram colacionados de forma independente. A camada Fonte não foi alterada.

**Rastreabilidade:** [relatório com 100 pareceres e várias barras de progresso](auditoria/JASTROW-2026-10-12-lote-005-100-relatorio.md), [manifesto das 4 matrizes de 25 entradas](auditoria/JASTROW-2026-10-12-lote-005-100-evidencias-manifest.json), [testes estáticos](auditoria/JASTROW-2026-10-12-lote-005-100-testes.json) e [checkpoint cumulativo compacto](auditoria/jastrow-auditoria-unica-progresso.json). O checkpoint detalhado anterior, contendo 400 pareceres e todas as decisões textuais, permanece **preservado integralmente** em [arquivo histórico](auditoria/jastrow-auditoria-unica-progresso-lote004-arquivo.json) com hash Git `e30816abbb7662b69d5c4a2cc69e063ca4320bcf`; apenas a representação do índice cumulativo foi compactada para superar o limite de gravação, **não** a evidência, a classificação ou os arquivos anteriores. Todos os 500 IDs têm referência rastreável aos respectivos arquivos de evidências.


## JASTROW — encerramento da auditoria filológica única dos 600 registros (lote 006; 12/10/2026)

**Escopo exato:** primeiros 600 registros da fonte Jastrow/Sefaria incorporados no repositório; **não** é a totalidade do dicionário histórico impresso. O sexto e último lote da norma atual examinou os 100 IDs ainda não auditados, `A00484`–`A00599`, ordinais 485–600, excluídos 16 casos previamente cobertos. Resultado deste lote: **73 aprovados A, 27 corrigidos C, 0 pendentes P**. Acumulado comprovado por comparação exata com os três arquivos da fonte: **600 IDs únicos, 401 A, 199 C, 0 P; nenhum ID a auditar no corpus atual**.

**Integridade global revalidada:** 3 arquivos canônicos de origem com 200 registros cada (IDs A00000–A00599, sem lacunas); 27 módulos de cartões passaram pela sintaxe JS e apresentaram **600 linhas search-row e 600 cartões entry-card, com 600 IDs correspondentes em ordem canônica**; seis módulos de popups passaram na checagem de sintaxe. **Não** realizados: navegador/DOM real, testes visuais/RTL/acessibilidade, verificação interativa de popups, colação independente dos manuscritos rabínicos e fac-símile impresso. A validação filológica refere-se a XML digital versus redação editorial.

**Publicação e evidência:** 27 cartões portugueses receberam complemento material em sete módulos, fonte XML original intacta. [Relatório detalhado com 100 pareceres, barras independentes e quadro global](auditoria/JASTROW-2026-10-12-lote-006-100-relatorio.md); [manifesto dos quatro arquivos de evidência de 25 entradas](auditoria/JASTROW-2026-10-12-lote-006-100-evidencias-manifest.json); [validação estática dos 600](auditoria/JASTROW-2026-10-12-lote-006-100-testes.json); [checkpoint compacto final de 600 registros](auditoria/jastrow-auditoria-unica-progresso.json). O checkpoint anterior, contendo todos os 500 registros, foi preservado **exatamente** em [arquivo histórico](auditoria/jastrow-auditoria-unica-progresso-lote005-arquivo.json), Git blob `afcb22b95d363ffb8fd8888c94dbf85eb096b46d`; a compactação atual não altera pareceres nem elimina arquivos antigos. **Integração via PR e testes de interface continuam tarefas distintas; nenhum commit na main.** Mantém-se a norma transversal [Rtransparencia](regras/Rtransparencia-relatorios.txt).
