# JASTROW — certificação atômica: execução documental e funcional de 600 entradas (12/10/2026)

**Estado final desta rodada: BLOQUEADA PARA O SELO \`AUDITORIA_CONCLUIDA\`.** A regressão estrutural e de navegador foi APROVADA, com evidências reais; não se presume certificação editorial integral nem integração das correções anteriores. Este documento atende à distinção obrigatória de \`regras/Rauditoria.txt\`, \`regras/Rauditoria-filologica.txt\` e \`regras/Rtransparencia-relatorios.txt\`.

## Identidade, universo e proveniência

- Repositório: \`linguasbiblicasoriginais-rgb/scriptura-lexicon\`.
- Objeto: primeiros **600** registros JASTROW, IDs \`A00000–A00599\`, ordinais 1–600, sem fundir homógrafos.
- Fonte canônica: Sefaria/Sefaria-Data, \`dictionaries/Jastrow/data/01-Merged XML/Jastrow-full.xml\`, commit \`947c1b91684df9f8b92f14cf0d281b5d4f29bfc7\`, blob \`98292a0c219835df19b9da7cea1edbc4dcc6526d\`.
- Arquivos-fonte locais: \`lexicons/jastrow-source-lote-0001.json\` a \`0003.json\`, exatamente 200 originais cada.
- A fonte digital inteira tem 32.512 registros, número que NÃO é denominador da avaliação dos 600 publicados.
- Pareceres filológicos digitais **preexistentes**, preservados: \`auditoria/jastrow-auditoria-unica-progresso.json\`, 600 IDs distintos, A=401, C=199, P=0, com 201 intervenções editoriais registradas. A/C/P têm o significado metodológico da colação digital; não equivalem automaticamente a \`AUDITORIA_CONCLUIDA\` do protocolo atômico.
- Branch de execução e de escrita exclusiva: \`chat-gpt-correcoes\`; branch editorial de origem \`chat-gpt-jastrow\`, HEAD inicial observado \`e042fe9dc51389f86391532cfbb43b504719c974\`.
- Branch de correções no pré-voo: \`775f79001be64b1f870bbb04fb3795ae8bd9483e\` (antes dos novos commits de testes). Nenhuma escrita em \`main\`.

## Regressão estática e execução real em Chromium

Teste executável versionado: \`tests/jastrow_browser_certification.mjs\`. Workflow \`.github/workflows/jastrow-browser-certificacao.yml\`.

**GitHub Actions APROVADO**: [execução #38214646245](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38214646245), HEAD \`f73518acf4ac356a557219d45d7bfcc68782b767\`. [Artefato com evidências individuais e screenshots](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38214646245/artifacts/11731511230); arquivos \`summary.json\`, \`jastrow-desktop-individual.json\`, \`jastrow-mobile-individual.json\`, \`jastrow-desktop.png\` e \`jastrow-mobile.png\`. Artefato disponível pelo prazo de retenção do GitHub Actions (30 dias).

| Controle executado | Resultado real | Limite |
|---|---:|---|
| SHA-256 de cada fragmento original XML | **600/600 OK** | Autenticidade quanto ao JSON canônico importado; sem colação direta de impresso |
| Pareceres filológicos digitais por ID | **600/600 encontrados**, IDs distintos | Parecer histórico A/C/P, não refeito nesta rodada |
| Regressão estática com \`tools/audit_jastrow_600.js\` | **PASS** | Não substitui navegador |
| Linhas \`search-row\` por ambiente | **600/600** desktop; **600/600** móvel | DOM real |
| Cartões \`entry-card\` por ambiente | **600/600** desktop; **600/600** móvel | DOM real |
| IDs, \`data-target\`, língua, direção RTL, foco e metadados por cartão | **600/600** por ambiente | Inspeção automatizada por elemento |
| Eventos de abertura por clique despachados em Chromium | **600/600** por ambiente | Eventos DOM efetivamente executados, diferentes de 600 cliques humanos |
| Busca e filtro de fonte, clique Playwright e abertura por Enter | **PASS** desktop e móvel | Amostras reais em IDs inicial e final |
| Popups disponíveis nos cartões JASTROW | **1.720 gatilhos** por ambiente | Contagem de elementos, não 1.720 conteúdos individualmente colacionados |
| Exibição de popup por foco | **PASS** desktop e móvel | Teste representativo do mecanismo comum |
| Axe-core WCAG 2A/AA e 2.1A/AA | **0 violações no cartão visível testado** em cada ambiente | NÃO significa 600/600 cartões aprovados individualmente |
| Exceções JavaScript de página | **0** nos dois ambientes | Não cobre cada estado de toda a aplicação |
| Transbordamento horizontal da página | **0**; 1440/1440 desktop, 390/390 móvel | Tamanhos testados: 1440×900 e 390×844 |

O workflow inicial #38214355066 falhou porque o teste aguardava visibilidade de linhas corretamente ocultas antes da pesquisa. O segundo, #38214483066, falhou por tentar operar o \`select\` nativo ocultado pelo componente personalizado. Corrigidas ambas as pré-condições da suíte (sem alterar o produto), a terceira execução #38214646245 terminou **success**. Nenhuma das duas falhas iniciais foi indevidamente classificada como defeito do JASTROW.

## Barras independentes — universo publicado (600)

- Incorporação e ID/XML disponíveis: **600/600 = 100% dos publicados**; obra original 600/32.512 = 1,85%.
- Auditoria textual/estrutural e DOM: **600/600 = 100% dos publicados** nos controles automatizados explicitados.
- Colação filológica digital histórica: **600/600 pareceres = 100% dos publicados**; **A=401, C=199, P=0** segundo método e limites dos relatórios históricos.
- Integração **editorial dos registros publicados**: **600/600**, conforme checkpoint e módulos na branch \`chat-gpt-commits\`; NÃO equivale a integração dos reparos de auditoria.
- Certificação atômica integral: **0/600 com selo comprovado**; não converter aprovações parciais em aceitação atômica.
- Integração **das correções desta rodada**: nenhum reparo lexical criado; **0 commits de conteúdo lexical**, **0 PRs/merges** executados nesta auditoria.
- Evidência funcional de navegador: **600/600 controles de presença/ativação DOM** nos dois perfis; não se afirma revisão visual individual de cada um dos 600 cartões.

## Bloqueios para a certificação atômica

1. **Integração das correções filológicas anteriores:** a branch \`chat-gpt-correcoes\` divergiu de \`chat-gpt-commits\`; verificação remota anterior ao relatório indicou **44 commits à frente, 58 atrás**, 108 arquivos diferentes e 68 correspondentes por nome ao JASTROW. Esses números dependem de HEADs mutáveis. Um merge do conjunto sem conciliar os outros léxicos não é seguro. A integração pertence ao processo separado descrito em \`regras/Rintegracao.txt\`, com PR e prova de \`merged=true\`.
2. **Certificação por artigo no protocolo A–J:** os 600 pareceres digitais não constituem, retroativamente, fichas individuais com todas as verificações da \`Rauditoria.txt\`, inclusive precisão de páginas impressas e destinos de remissões/URLs verificados quando pertinentes; devem ser avaliadas as faltas específicas de evidência sem reabrir automaticamente outra auditoria filológica geral.
3. **Limite dos testes de acessibilidade:** o axe-core examinou o cartão visível em cada configuração, não os 600 individualmente. O teste de mecanismo de tooltip por foco não colacionou todos os 1.720 gatilhos e respectivos conteúdos.
4. **Testemunhos históricos:** o XML digital foi preservado; não se alegou inspeção de fac-símile de todas as entradas nem de manuscritos rabínicos. Confrontos externos devem ser específicos aos pontos em que sejam decisivos para corrigir leitura e atribuição.
5. **Publicação final de fichas:** é preciso registrar para cada ID os controles pertinentes em estado OK/CORRIGIDO/NÃO SE APLICA/PENDENTE, revisões e os SHAs de merge e destino. Os dois JSONs por dispositivo e os pareceres históricos são evidências auxiliares, não fichas finais atômicas.

## Decisão de aceitação

**NÃO CERTIFICAR** os 600 como \`AUDITORIA_CONCLUIDA\` nesta rodada. A regressão estrutural e real em navegador, documentada e reproduzível, está aprovada; não há defeito lexical novo comprovado por esses testes, nem alteração da fonte XML. A auditoria atômica permanece **BLOQUEADA** pelos controles documentais específicos e sobretudo pela ausência de merge das correções no HEAD consolidado. O valor \`total_audited=0\` deve permanecer até verificação individual completa e merge final; jamais declarar 600/600 por mera extrapolação de QA.

**Próximo ato seguro:** reconciliar diferenças JASTROW entre \`chat-gpt-correcoes\` e \`chat-gpt-commits\` sem sobrescrever os outros léxicos, validar cada remissão ainda não comprovada e as fichas faltantes, executar regressão após eventuais reparos e permitir que o integrador separado realize e verifique o merge. Após integrar, conferir o novo HEAD e o resultado de cada artigo antes de conceder selos atômicos.
