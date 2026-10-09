# Scriptura Lexicon

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
