# Scriptura Lexicon

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
