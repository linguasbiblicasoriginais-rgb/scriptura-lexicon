# Escrituras Sagradas — leitor do Scriptura Lexicon

## Escopo e estado (23/10/2026)

A seção **Escrituras Sagradas**, acima de **Dicionários** no menu lateral, contém:

1. **Biblia Hebraica Stuttgartensia (BHS)** — fonte canônica inicialmente definida para o Texto Massorético;
2. **Septuaginta (LXX)** — catálogo textual independente;
3. **Novo Testamento Grego – Texto Crítico (NA28)**;
4. **Novo Testamento Grego – Texto Crítico (UBS5)**;
5. **Novo Testamento Grego – Texto Recebido (TR)** — edição textual específica ainda por fixar.

O leitor permite selecionar **edição, livro, capítulo e um número de versículo**, navegar entre capítulos, copiar a referência e abrir o **capítulo** no portal oficial das quatro primeiras edições quando o identificador do livro é mapeável. A interface usa hash de URL, por exemplo `#escrituras/BHS/GEN.1.1`, sem sobrepor o roteamento dos dicionários.

**Importante:** este commit incorpora a **estrutura de navegação**, não o corpus integral. Um capítulo sem texto incorporado informa claramente a indisponibilidade. O número introduzido como versículo é positivo, mas o número máximo específico de cada capítulo ainda **não foi auditado**; a referência não deve ser usada como evidência da existência do versículo. O link externo aponta ao capítulo, não necessariamente à posição exata do versículo.

## Inventário de livros

- **BHS:** 39 unidades de navegação. A tradição hebraica dos 24 livros é representada por agrupamentos de Samuel, Reis, Crônicas, Esdras–Neemias e os Doze, enquanto a seleção individual preserva a referência usual a cada volume.
- **LXX:** 62 unidades, inclusive variantes e materiais adicionais explicitamente presentes na lista fornecida. As variantes de Josué, Juízes, Tobias, Daniel, Susana e Bel e o Dragão não são fundidas às demais tradições. **Josué A (3 capítulos)** e **Sirácida (52 capítulos)** foram conservados conforme a relação fornecida e exigem cotejo editorial: sua presença no índice não atesta que essas delimitações tenham sido verificadas na edição digital da LXX.
- **NA28, UBS5 e TR:** 27 livros cada, mantidos sob namespaces textuais distintos.

Os livros da BHS com contagens divergentes das divisões correntes foram ajustados no catálogo de navegação para: Cântico dos Cânticos **8**, Rute **4**, Lamentações **5**, Eclesiastes **12**, Ester **10**, 1 Crônicas **29** e 2 Crônicas **36**. Samuel (31+24), Reis (22+25) e Esdras–Neemias (10+13) ficam subdivididos sem perder o agrupamento da Bíblia hebraica. Joel conserva os quatro capítulos do cômputo hebraico informado.

As designações **canônicos** e **apócrifos**, quando presentes na lista original, são categorias descritivas do inventário fornecido, não determinações acerca da canonicidade em outras tradições.

## Camadas documentais

1. **Fonte**: texto canônico identificável por edição, livro, capítulo, versículo e eventual testemunho específico.
2. **Transcrição**: futura incorporação de texto conferido, com niqqud, sinais massoréticos, ortografia e diacríticos inalterados; separar variantes e aparato.
3. **Tradução/análise**: futura camada editorial, nunca apresentada como se fosse a própria BHS, LXX, NA28, UBS5 ou TR.
4. **Interface**: catálogo, visualizador e referências independentes dos dicionários.

O módulo `scriptures/reader.js` expõe `window.ScripturaScriptures.catalog`. No futuro, textos autorizados podem ser registrados **antes** da execução do leitor em `window.ScripturaScriptureTexts`, usando a estrutura:

```js
window.ScripturaScriptureTexts = {
  BHS: {
    GEN: {
      1: {
        // 1: "transcrição conferida com direitos de uso regularizados"
      }
    }
  }
};
```

O exemplo é **estrutura de dados, não conteúdo da BHS**. O componente exibe apenas strings de versículos explicitamente carregadas, via `textContent`, para preservar os caracteres originais e evitar interpretação de HTML. Hebraico utiliza `lang="he"`, `dir="rtl"`; grego usa `lang="grc"`, `dir="ltr"`.

## Incorporação textual 001 — Gênesis 1 (BHS, Texto Massorético)

**Estado:** capítulo disponibilizado no leitor; 31 de 31 versículos inseridos, na numeração de Gênesis 1. 

**Arquivo:** `scriptures/texts/bhs-genesis-1.js`. O arquivo registra os 31 versículos individualmente em `window.ScripturaScriptureTexts.BHS.GEN[1]` e armazena as seis marcas de seção aberta `פ` em `window.ScripturaScriptureParagraphBreaks.BHS.GEN[1]`, após os versículos **5, 8, 13, 19, 23 e 31**. O sinal `׃` permanece dentro de cada versículo. Os números dos versículos e o `פ` não foram fundidos ao texto lexical.

**Procedência:** transcrição integral do capítulo fornecida diretamente pelo usuário nesta conversa em 22/10/2026, identificada por ele como **BHS**. O conteúdo não foi raspado do portal editorial. A confirmação de que cada caractere corresponde exatamente à edição impressa, inclusive todas as marcas massoréticas, **ainda depende de cotejo filológico independente**. Os registros não devem ser descritos como texto homologado.

**Exibição:** hebraico vocalizado e acentuado, `lang="he"`, `dir="rtl"`; seleção do versículo destaca a respectiva linha, e `פ` é exposto como marcador de seção. O campo de seleção limita Gênesis 1 ao versículo **31**, pois esse limite foi confirmado pelo conjunto incorporado.

**Endereço direto no aplicativo:** `#escrituras/BHS/GEN.1.1`.

A atribuição da edição e eventuais autorizações necessárias para disponibilizar publicamente o texto são questões editoriais independentes da fidelidade da transcrição.

## Incorporação textual 002 — Gênesis 1 (LXX)

**Situação:** 31 versículos transcritos como texto grego da Septuaginta e integrados ao leitor, independentes da BHS. A transcrição foi **fornecida integralmente pelo usuário na conversa de 22/10/2026**; não foi obtida por extração automática de terceiros.

- **Identidade:** edição `LXX`, livro `GEN`, capítulo `1`; referências `LXX/GEN.1.1` a `LXX/GEN.1.31`.
- **Arquivo do texto:** `scriptures/texts/lxx-genesis-1.js`.
- **Unidade de armazenamento:** `window.ScripturaScriptureTexts.LXX.GEN[1]` com chaves numéricas de 1 a 31, sem mistura com `BHS.GEN[1]`.
- **Quebras entre unidades:** após os vv. **5, 8, 13, 19 e 23**; oriundas da disposição fornecida, não devem ser confundidas com parashot massoréticas.
- **Travessões editoriais entre versículos:** preservados após **10, 25 e 29** como metadados `ScripturaScriptureEditorialSeparators.LXX.GEN[1]`. O travessão **interno** ao v. 29 permanece na cadeia textual.
- **Idioma e direção:** `lang="grc"`, da esquerda para a direita; manutenção da acentuação e da pontuação fornecidas, inclusive formas como `κατ᾽` e `καθ᾽`.
- **Cotejo crítico:** a transcrição foi recebida com a atribuição editorial “LXX”; ainda **não foi conferida independentemente** contra a impressão de Rahlfs–Hanhart ou com a apresentação da Deutsche Bibelgesellschaft. Não atribuir variantes específicas sem confrontação documental.

**Consulta direta:** `#escrituras/LXX/GEN.1.1`. A atribuição editorial e os direitos de republicação exigem verificação específica antes de qualquer afirmação de homologação do texto.

## Incorporação textual 003 — Mateus 1 (NA28)

**Estado:** 25 de 25 versículos incorporados e habilitados no leitor da edição NA28, sem interferir em BHS, LXX, UBS5 ou TR.

- **Fonte material recebida:** transcrição grega integral fornecida pelo usuário nesta conversa, identificada como *Novo Testamento Grego — Texto Crítico (NA28)*. Não foi feita extração automática do site da editora nem colação independente com o volume impresso.
- **Arquivo:** `scriptures/texts/na28-matthew-1.js`, registrado em `window.ScripturaScriptureTexts.NA28.MAT[1]`, versículos 1–25.
- **Segmentação:** números dos versículos removidos do conteúdo textual e representados pelas chaves do objeto. Mantêm-se todos os sinais de acentuação e pontuação presentes no material recebido. Nenhuma leitura foi substituída por texto conhecido de outra edição.
- **Composição:** as quebras de linha internas dos versículos **6** (genealogia) e **23** (citação) permanecem no valor textual, com exibição por `white-space: pre-line` na interface.
- **Apresentação:** `lang="grc"`, `dir="ltr"`. A seleção de versículo em Mateus 1 tem máximo documentado de 25.
- **Endereço de consulta interna:** `#escrituras/NA28/MAT.1.1`.

**Limites:** a atribuição à NA28 é proveniente do usuário. A conformidade exata com a edição crítica de referência, o aparato e as permissões de reprodução pública não foram independentemente verificados. O estado de incorporação não constitui homologação filológica ou licença editorial.

## Incorporação textual 004 — Mateus 1 (UBS5)

**Estado:** os 25 versículos de Mateus 1 foram incorporados em transcrição própria da **UBS5**, fornecida pelo usuário na conversa de 22/10/2026, independentemente da transcrição da NA28. Não foi realizada colação com a edição UBS5 impressa.

- **Corpus:** `scriptures/texts/ubs5-matthew-1.js`, `window.ScripturaScriptureTexts.UBS5.MAT[1]`, versículos **1–25**.
- **Metadados editoriais:** `window.ScripturaScriptureHeadings.UBS5.MAT[1]` registra, sem fundir ao texto do versículo: antes do v. 1, a identificação **«Κατὰ Μαθθαῖον 1»**, o título **«Genealogia de Jesus Cristo»** e a referência **«(Lc 3.23–38)»**; antes do v. 18, **«The Birth of Jesus Christ»** e **«(Lk 2.1‑7)»**. As grafias e línguas dos títulos são preservadas como recebidas, sem tradução ou harmonização.
- **Diferenças frente à NA28 fornecida anteriormente:** detectadas por comparação literal nos vv. **20, 22 e 23**, envolvendo apóstrofos, pontuação e maiúsculas; conservadas em cada namespace, sem impor uniformidade editorial. Isso **não representa necessariamente variante textual substantiva**: é apenas uma comparação do material recebido.
- **Quebras internas:** os vv. **6** e **23** conservam as quebras de linha recebidas; exibição pelo recurso `white-space: pre-line` já presente no leitor.
- **Apresentação:** texto grego marcado como `lang="grc"`, `dir="ltr"`; títulos e referências paralelas exibidos em blocos separados.
- **Navegação:** `#escrituras/UBS5/MAT.1.1`. Número máximo do capítulo conferido no arquivo: **25**.

**Limites filológicos e legais:** a atribuição à UBS5 foi informada pelo usuário. Não houve cotejo crítico independente contra o texto impresso, nem incorporação do aparato. Os direitos de publicação precisam ser tratados separadamente do registro interno da transcrição.

## Estrutura da Biblia Sacra Vulgata — VUL

**Estado:** catálogo de 78 unidades incorporado em 22/10/2026 e Gênesis 1 latino publicado com 31 versículos fornecidos pelo usuário; demais capítulos ainda sem textos.

**Procedência do catálogo:** lista enviada pelo usuário, contendo nomes latinos, nomes portugueses e a quantidade de capítulos. A edição textual latina específica (por exemplo, texto de uma Vulgata crítica ou de outra tradição editorial) **não foi identificada** e não pode ser presumida a partir da designação VUL.

**Inventário preservado:**

| Divisão | Livros/unidades |
| --- | ---: |
| Antigo Testamento · Pentateuco | 5 |
| Antigo Testamento · Livros Históricos | 12 |
| Antigo Testamento · Livros Poéticos e Sapienciais | 5 |
| Antigo Testamento · Profetas maiores | 5 |
| Antigo Testamento · Profetas menores | 12 |
| Novo Testamento · Evangelhos | 4 |
| Novo Testamento · Atos | 1 |
| Novo Testamento · Epístolas paulinas | 13 |
| Novo Testamento · Epístolas universais | 8 |
| Novo Testamento · Apocalipse | 1 |
| Apócrifos (categoria da lista fornecida) | 12 |
| **Total** | **78** |

As contagens de capítulos foram mantidas **exatamente como informadas**: entre outros exemplos, *Liber Hester* (16), *Danihel Propheta* (14), *Iohel Propheta* (3), *Malachi Propheta* (4), *Liber Iesu Filii Sirach* (52) e *Liber Baruch* (6). O catálogo inclui *Psalmi Iuxta Hebr.* (150), *Psalmus CLI* (1), *Oratio Manasse* (1), *Liber Ezrae III* (9), *Liber Ezrae IV* (16) e *Ad Laodicenses* (1), sem deduzir correspondência textual com outras edições. **Esses números ainda não foram cotejados com uma edição crítica escolhida.**

A repetição do cabeçalho “Epístolas universais” na lista de entrada foi consolidada num único agrupamento visual, sem excluir *Ad Hebraeos*. Os demais nomes editoriais latinos foram conservados, inclusive grafias como *Samuhelis*, *Malachim*, *Neemiae*, *Hester*, *Danihel* e *Zaccharias*.

**Implementação:** `scriptures/catalog-vul.js` contém os metadados em `window.ScripturaVulCatalog`; `scriptures/reader.js` integra a edição `VUL` ao menu, aos agrupamentos de livros e à navegação por capítulo e referência de versículo. Os versículos latinos são carregados exclusivamente em `window.ScripturaScriptureTexts.VUL[bookId][chapter]`, usando `lang="la"` e `dir="ltr"`; Gênesis 1 está registrado em `scriptures/texts/vul-genesis-1.js`. O leitor **não cria URL da editora** para a VUL enquanto não houver fonte externa verificada. Nenhum texto de outra edição é apresentado como VUL.

**Exemplo de referência:** `#escrituras/VUL/GEN.1.1`. A seleção de números de versículo em capítulos ainda sem texto é provisória e não atesta o número real de versos do capítulo.

## Incorporação textual 005 — Gênesis 1 (VUL)

- **Material textual:** transcrição em latim fornecida diretamente pelo usuário em 22/10/2026 e designada «Vulgata (VUL)», **não cotejada independentemente** com uma edição crítica ou impressa.
- **Arquivo:** `scriptures/texts/vul-genesis-1.js`, que registra `window.ScripturaScriptureTexts.VUL.GEN[1]` com **31 entradas**, uma por versículo, sem compartilhar cadeias com BHS ou LXX.
- **Segmentação:** números 1 a 31 tratados exclusivamente como metadados de versificação. Os quatro encontros entre a última palavra de um versículo e o número do seguinte, em `bonum11`, `terram18`, `bonum26` e `escam30`, foram separados sem inserir palavras, sinais ou espaços inexistentes na fonte.
- **Formatação:** as barras invertidas que delimitavam linhas no material recebido foram traduzidas em **quebras de linha internas** das entradas textuais, para apresentação por `white-space: pre-line`; isso é transformação de layout, não normalização ortográfica.
- **Preservação:** foram mantidas as grafias `caelum`, `inluminent`, `adferentem`, `cete`, `semet`, a redação e a pontuação conforme a transcrição enviada.
- **Idioma:** `lang="la"`, direção `ltr`.
- **Consulta:** `#escrituras/VUL/GEN.1.1`; seleção de versículos de 1 a 31.

**Limites:** o rótulo VUL identifica o namespace solicitado, não atesta qual edição específica da tradição vulgata é representada pelo texto enviado. Nenhuma colação da versão impressa, do aparato crítico ou de direitos de republicação foi concluída. Não declarar homologação editorial.

## Incorporação textual 006 — Gênesis 2 (BHS, Texto Massorético)

**Estado:** 25 versículos hebraicos incorporados a partir da transcrição fornecida pelo usuário, sem substituições textuais nem normalização Unicode.

- **Fonte material:** texto de Gênesis 2:1–25 colado pelo usuário no chat; identificado como BHS. O conteúdo **não foi cotejado independentemente** contra a edição impressa e, portanto, esta atribuição de edição representa a procedência informada, não homologação crítica.
- **Arquivo textual:** `scriptures/texts/bhs-genesis-2.js`, com versículos consecutivos de 1 a 25 armazenados em `window.ScripturaScriptureTexts.BHS.GEN[2]`; a numeração fica em chaves, não no texto hebraico.
- **Marcação massorética:** `פ` isolado após 2:3 mantido como marcador de *parashah petuchah*, em `window.ScripturaScriptureParagraphBreaks.BHS.GEN[2] = [3]`, sem introduzir a letra no texto do versículo.
- **Diacríticos e pontuação:** conservados a vocalização, os acentos de cantilação, o *maqqef* `־`, o *sof pasuq* `׃` e o *paseq* `׀` nas posições fornecidas; sem correção inferida, retirada de variantes ou conversão para outra tradição editorial.
- **Navegação:** `#escrituras/BHS/GEN.2.1`; idioma `he` e direção `rtl`; máximo verificável neste capítulo: 25 versículos.
- **Independência:** o capítulo 1 BHS e os textos LXX, NA28, UBS5 e VUL existentes permanecem em seus próprios registros, sem harmonização.

**Limites:** não houve cotejo caractere a caractere contra o livro impresso da BHS, nem verificação jurídica de republicação; a incorporação registra literalmente o material recebido, sem atestar a identidade editorial externa.

## Consultas lexicais por palavra

**Estado:** todos os capítulos bíblicos já incorporados apresentam cada palavra como botão de consulta; o texto subjacente permanece literal e separado das camadas lexicais.

**Implementação:** o módulo `scriptures/word-popups.js` é carregado antes de `scriptures/reader.js` e oferece popups acessíveis por clique, toque, Enter ou Espaço. O fechamento ocorre pelo botão ×, pela tecla Escape, por clique fora ou pela rolagem; a tecla Escape devolve o foco à palavra. A interface informa a edição e a referência precisa do versículo.

**Conteúdo do popup:**

- **Forma original:** mesmo segmento Unicode lido no versículo; hebraico `he`, grego `grc`, latim `la`, sem alterar a string bíblica.
- **Transliteração aproximada:** algoritmo determinístico próprio para hebraico e grego; no latim, a forma original já está em alfabeto latino. A transliteração mecânica **não é pronúncia reconstruída, sistema ISO certificado, análise morfológica nem identificação de lema**. Os acentos de cantilação hebraicos não são transliterados e as vogais massoréticas são aproximadas.
- **Minidicionário:** pequeno glossário editorial para **algumas formas** conhecidas, com significado introdutório em português. Não é transcrição nem síntese atribuída automaticamente às obras BDAG, KBS, Clines, Thayer etc. **Uma palavra pode ter outros valores contextuais ou morfológicos**, mesmo quando há glosa.
- **Sem cobertura lexical:** em todas as outras palavras, o popup continua disponível, mas exibe explicitamente `Sem acepção cadastrada` — nunca inventa significado, lema ou referência bibliográfica.

O algoritmo segmenta palavras Unicode sem reescrever o texto, mantendo espaços, sinais massoréticos, maqqef `־`, sof pasuq `׃`, pontuação grega, citações e quebras de linha como nós textuais separados. Assim, as marcas de parashah, as divisões da LXX e os títulos editoriais da UBS5 não são transformados em entradas lexicais.

**Teste de regressão:** executar a partir da raiz com `node tests/scripture-word-popups.test.cjs`. O teste verifica reconstrução idêntica das cadeias Unicode em todos os seis capítulos, a existência de transliteração em cada ocorrência e a ausência de glosas inventadas no caso de formas desconhecidas. A interface visual ainda requer teste manual em navegador e leitor de tela.

**Limites e tarefas futuras:** ampliar o glossário mediante revisão filológica por edição e associação verificável `ocorrência → lema → fonte lexicográfica → acepção`; realizar conferência em navegador e tecnologias assistivas; nunca divulgar a atual cobertura parcial como análise exaustiva.

## Incorporação textual 007 — Gênesis 3–10 (BHS, Texto Massorético)

**Estado:** oito capítulos incorporados da transcrição hebraica fornecida pelo usuário no chat em 22/10/2026, totalizando **211 versículos**, sem emendas, reconstruções ou normalização Unicode. Os 10 primeiros capítulos de Gênesis (BHS) possuem agora **267 versículos registrados**.

| Capítulo | Versículos | Marcas massoréticas de seção após os versículos |
| --- | ---: | --- |
| Gênesis 3 | 24 | 15 ס; 16 ס; 21 פ; 24 ס |
| Gênesis 4 | 26 | 26 פ |
| Gênesis 5 | 32 | 2 ס; 5 ס; 8 ס; 11 ס; 14 ס; 17 ס; 20 פ; 24 פ; 27 פ; 31 ס |
| Gênesis 6 | 22 | 4 פ; 8 פ; 12 ס; 22 ס |
| Gênesis 7 | 24 | Nenhuma indicada no material recebido |
| Gênesis 8 | 22 | 14 ס |
| Gênesis 9 | 29 | 7 ס; 17 פ; 29 פ |
| Gênesis 10 | 32 | 14 ס; 20 ס; 32 פ |
| **Total** | **211** | **26 marcações: 10 פ e 16 ס** |

- **Fonte material:** exclusivamente os oito capítulos enviados pelo usuário, mantidos como transcrição designada BHS. Não se afirma cotejo independente com exemplar impresso ou aparato crítico da BHS.
- **Arquivos:** `scriptures/texts/bhs-genesis-3.js` a `bhs-genesis-10.js`. Os objetos ficam no namespace `ScripturaScriptureTexts.BHS.GEN[capítulo]`, com chaves de versículos consecutivas.
- **Fidelidade:** consoantes, *niqqud*, *teʿamim*, *sof pasuq* (`׃`), *maqqef* (`־`), *paseq* (`׀`), grafias particulares e sinais combinantes foram transportados literalmente. Não modificar sequências como `יְהוָֹ֨ה` (Gênesis 3:14) ou `שְׁמוֹנִים` sem autorização e colação documentada.
- **Marcas de parashah:** as letras isoladas `פ` (petuchah, seção aberta) e `ס` (setumah, seção fechada), posicionadas após versículos, são guardadas fora das cadeias textuais em `ScripturaScriptureParashahTypes.BHS.GEN[capítulo]`; suas posições ficam em `ScripturaScriptureParagraphBreaks.BHS.GEN[capítulo]`. O leitor distingue as duas, e capítulos 1–2 continuam usando o formato anterior com `פ` implícito.
- **Consulta:** `#escrituras/BHS/GEN.3.1` até `#escrituras/BHS/GEN.10.32`. Os popups de palavra são aplicados pela camada do leitor e não alteram o texto-fonte.
- **Verificação:** para cada capítulo, a segmentação dos versículos com seus números e as letras de seção foi remontada e comparada exatamente à cadeia recebida, excetuando a unificação de espaços em branco entre versículos. Os testes de regressão em `tests/scripture-word-popups.test.cjs` foram estendidos a todas as dez unidades de Gênesis e à validação das marcações de seção.

**Pendências:** cotejo externo com a edição impressa, esclarecimentos editoriais, licenciamento e ensaios visuais no navegador; os commits não constituem homologação da transcrição.

## Incorporação textual 008 — Gênesis 11–16 (BHS)

**Estado confirmado:** todos os seis capítulos incorporados a partir da transcrição fornecida pelo usuário, com **131 versículos**; a dificuldade anterior de gravar Gênesis 14 e 16 foi solucionada com commits específicos. Os 16 primeiros capítulos somam **398 versículos**.

| Capítulo | Versículos | Parashot após os versículos |
| --- | ---: | --- |
| 11 | 32 | 9 פ; 11, 13, 15, 17, 19, 21, 23, 25 e 32 ס |
| 12 | 20 | 9 פ |
| 13 | 18 | 18 פ |
| 14 | 24 | 24 ס |
| 15 | 21 | 21 ס |
| 16 | 16 | 16 ס |
| **Total** | **131** | **3 פ e 12 ס** |

Os arquivos `scriptures/texts/bhs-genesis-11.js` a `bhs-genesis-16.js` estão conectados ao leitor antes de `scriptures/reader.js`. O texto hebraico conserva literalmente os caracteres enviados, incluindo cantilação, *niqqud*, pontuação e sinais especiais. As letras isoladas פ e ס após o versículo são metadados em `ScripturaScriptureParashahTypes` e `ScripturaScriptureParagraphBreaks`, não acréscimos ao texto versicular. O teste `tests/scripture-word-popups.test.cjs` contém verificações de numeração, popups e tipos de parashah para os seis capítulos.

## Incorporação textual 009 — Gênesis 17–20 (BHS)

**Estado confirmado:** quatro capítulos e **116 versículos** extraídos da transcrição fornecida pelo usuário, preservando a forma e a ordem dos sinais Unicode, sem emendas ou normalização automática.

| Capítulo | Versículos | Parashot após os versículos |
| --- | ---: | --- |
| 17 | 27 | 14 ס; 27 פ |
| 18 | 33 | Nenhuma assinalada no material recebido |
| 19 | 38 | 38 ס |
| 20 | 18 | 18 ס |
| **Total** | **116** | **1 פ e 3 ס** |

Os textos estão em `scriptures/texts/bhs-genesis-17.js` a `bhs-genesis-20.js`, registrados em `ScripturaScriptureTexts.BHS.GEN[capítulo]` e carregados antes do leitor. O leitor aplica a camada geral de transliteração e minidicionário por palavra, sem preencher significados ausentes com invenções. A integração ao teste de regressão foi feita para os quatro capítulos.

**Progresso acumulado BHS/Gênesis:** **20 de 50 capítulos**, **514 versículos** (Gênesis 1–20).

**Limites editoriais:** a transcrição foi fornecida pelo usuário, não extraída automaticamente nem cotejada com exemplar impresso da BHS; a correspondência com uma edição crítica determinada, os direitos de redistribuição e a visualização efetiva em navegador permanecem sujeitos a verificação independente. A integração técnica não é homologação filológica.

## Incorporação textual 010 — Gênesis 21–30 (BHS)

**Origem:** transcrição massorética integral fornecida diretamente pelo usuário nesta conversa, sem consulta de extração externa. **Operação:** transporte para arquivos independentes sem normalização Unicode, correções silenciosas, traduções ou criação de variantes.

| Capítulo | Versículos | Marcas de *parashah* |
| --- | ---: | --- |
| 21 | 34 | 21 פ; 34 פ |
| 22 | 24 | 19 פ; 24 ס |
| 23 | 20 | 20 ס |
| 24 | 67 | 67 פ |
| 25 | 34 | 11 ס; 18 פ; 34 ס |
| 26 | 35 | 33 ס; 35 ס |
| 27 | 46 | Nenhuma fornecida |
| 28 | 22 | 9 ס |
| 29 | 35 | Nenhuma fornecida |
| 30 | 43 | Nenhuma fornecida |
| **Total** | **360** | **5 פ e 7 ס** |

**Arquivos:** `scriptures/texts/bhs-genesis-21.js` a `scriptures/texts/bhs-genesis-30.js` carregados por `index.html` antes de `scriptures/reader.js`. Os versículos são indexados em `ScripturaScriptureTexts.BHS.GEN[capítulo]`; os tipos e posições de seção estão em `ScripturaScriptureParashahTypes` e `ScripturaScriptureParagraphBreaks`. Em Gênesis 27, 29 e 30 foram registrados mapas de *parashot* vazios por inexistirem marcas explicitadas no material recebido, sem supor ausências na edição impressa.

**Controles técnicos:** sequência de versículos 1–N por capítulo, pontuação `׃`, reconstrução idêntica à entrada enviada (com mera padronização dos espaços entre versículos), parsing JavaScript, segmentação Unicode e popups sem atribuições lexicais não cadastradas. O teste `tests/scripture-word-popups.test.cjs` foi ampliado aos dez capítulos.

**Progresso do texto BHS em Gênesis:** **30/50 capítulos (60%)**, **874 versículos**, cobrindo Gênesis 1–30.

**Limitações:** testes de interface visual em navegador, cotejo impresso da edição e verificação de autorização de publicação pública ainda não fazem parte desta incorporação. Não confundir validação técnica com homologação filológica.

## Incorporação textual 011 — Gênesis 41–50 (BHS)

**Origem:** transcrição hebraica fornecida diretamente pelo usuário; os capítulos 31–40 não fazem parte deste lote e continuam pendentes na branch. Nenhuma reconstrução de texto, normalização Unicode ou tradução foi realizada.

| Capítulo | Versículos | Marcas de *parashah* |
| --- | ---: | --- |
| 41 | 57 | Nenhuma explicitada no material |
| 42 | 38 | Nenhuma explicitada no material |
| 43 | 34 | Nenhuma explicitada no material |
| 44 | 34 | 17 פ |
| 45 | 28 | Nenhuma explicitada no material |
| 46 | 34 | 7 ס; 27 פ |
| 47 | 31 | 31 פ |
| 48 | 22 | 22 פ |
| 49 | 33 | 4 פ; 7 ס; 12 פ; 13 ס; 15 ס; 19 ס; 20 ס; 21 ס; 26 פ |
| 50 | 26 | Nenhuma explicitada no material |
| **Total** | **337** | **7 פ e 7 ס** |

**Arquivos:** `scriptures/texts/bhs-genesis-41.js` a `bhs-genesis-50.js`. Foram adicionados ao carregamento em `index.html`, à matriz de regressão `tests/scripture-word-popups.test.cjs` e aos metadados `ScripturaScriptureParagraphBreaks` e `ScripturaScriptureParashahTypes`.

**Progresso na branch:** **40 de 50 capítulos (80%)** e **1.211 versículos** incorporados, considerando Gênesis 1–30 e 41–50. A sequência 31–40 permanece ausente; o percentual representa cobertura, não continuidade. A edição impressa, direitos de distribuição, execução dos testes de navegador e cotejo filológico ainda exigem verificação independente.

## Incorporação textual 012 — Gênesis 31–40 (BHS)

**Origem:** transcrição fornecida pelo usuário no lote anterior, incorporada depois dos capítulos 41–50. Nenhuma correção silenciosa, variante inventada ou normalização Unicode.

| Capítulo | Versículos | Marcas de *parashah* |
| --- | ---: | --- |
| 31 | 54 | Nenhuma explicitada no material |
| 32 | 33 | 3 פ |
| 33 | 20 | 17 ס; 20 ס |
| 34 | 31 | 31 פ |
| 35 | 29 | 8 פ; 22 פ (interna ao versículo); 29 פ |
| 36 | 43 | 19 ס; 30 פ; 43 פ |
| 37 | 36 | 36 פ |
| 38 | 30 | 30 ס |
| 39 | 23 | 23 ס |
| 40 | 23 | 23 פ |
| **Total** | **322** | **9 פ e 5 ס** |

Em **Gênesis 35:22**, a marca פ foi fornecida **no interior do versículo**, entre a oração sobre Rúben e a frase `וַיִּֽהְי֥וּ בְנֵֽי־יַעֲקֹ֖ב`. A marca e sua posição são preservadas no metadado `ScripturaScriptureInlineParashahTypes`; o leitor apresenta o sinal no ponto correto, sem tratá-lo como vocábulo. A reconstrução restitui literalmente a sequência fornecida, inclusive quebra de linha.

O lote inclui arquivos `bhs-genesis-31.js` a `bhs-genesis-40.js`, o carregamento em `index.html`, a adaptação do leitor e os testes de regressão. **Gênesis: 50/50 capítulos (100% de cobertura textual fornecida), 1.533 versículos.** O número de capítulos incorporados não implica cotejo impresso, homologação filológica, licença de redistribuição ou publicação em produção.

## Incorporação textual 013 — Êxodo 1–10 (BHS)

**Procedência:** texto hebraico integral fornecido pelo usuário, sem extração do portal da editora. A transcrição conserva grafia, *niqqud*, *teʿamim*, pontuação massorética e ordem dos pontos de código Unicode, sem emendas, normalização ou tradução. A numeração de Êxodo 7:26–29 corresponde à fonte recebida e não foi adaptada a outras tradições de versificação.

| Capítulo | Versículos | Marcas de *parashah* após versículos |
| --- | ---: | --- |
| 1 | 22 | 7 פ; 22 ס |
| 2 | 25 | 22 פ; 25 ס |
| 3 | 22 | Nenhuma explicitada no material |
| 4 | 31 | 17 פ; 26 פ |
| 5 | 23 | Nenhuma explicitada no material |
| 6 | 30 | 1 ס; 9 פ; 12 פ; 13 ס; 28 פ; 30 פ |
| 7 | 29 | 7 פ; 13 פ; 18 ס; 25 פ |
| 8 | 28 | 11 ס; 15 ס; 28 פ |
| 9 | 35 | 7 פ; 12 ס; 21 פ; 35 פ |
| 10 | 29 | 11 פ; 20 פ; 29 פ |
| **Total** | **274** | **18 פ e 8 ס** |

**Integração:** arquivos `scriptures/texts/bhs-exodus-1.js` a `bhs-exodus-10.js`, registrados no leitor antes de `scriptures/reader.js`, com os mapas `ScripturaScriptureTexts.BHS.EXO`, `ScripturaScriptureParagraphBreaks.BHS.EXO` e `ScripturaScriptureParashahTypes.BHS.EXO`. Foram ampliadas a matriz de contagens, a verificação de segmentação/lexicografia por palavra e a de `פ`/`ס` em `tests/scripture-word-popups.test.cjs`.

**Cobertura:** Êxodo **10/40 capítulos (25%)**, **274 versículos**; somados aos **1.533 versículos de Gênesis 1–50**, são **1.807 versículos** incorporados na camada BHS. Os capítulos Êxodo 11–40 continuam sem transcrição incorporada. A verificação dos direitos de publicação, o cotejo com a BHS impressa e os testes reais de navegador continuam independentes deste trabalho técnico.

## Incorporação textual 014 — Êxodo 11–20 (BHS)

**Procedência:** transcrição hebraica fornecida diretamente pelo usuário. Foram preservados os sinais vocálicos, acentos de cantilação, *maqaf*, *sof pasuq*, letras e ordem original dos pontos de código Unicode, inclusive as sequências particulares de múltiplos sinais em Êxodo 20. Não houve cotejo, emenda editorial, normalização Unicode ou tradução.

| Capítulo | Versículos | Marcas de *parashah* após versículos |
| --- | ---: | --- |
| 11 | 10 | 3 ס; 8 ס; 10 פ |
| 12 | 51 | 20 פ; 28 ס; 36 פ; 42 פ; 50 ס; 51 פ |
| 13 | 22 | 10 ס; 16 ס; 22 פ |
| 14 | 31 | 14 פ; 25 פ; 31 פ |
| 15 | 27 | 19 פ; 21 ס; 26 ס |
| 16 | 36 | 3 ס; 5 ס; 10 פ; 27 ס; 36 פ |
| 17 | 16 | 7 פ; 13 פ; 16 פ |
| 18 | 27 | 27 פ |
| 19 | 25 | 25 ס |
| 20 | 26 | 1 ס; 6 ס; 7 פ; 11 ס; 12 ס; 13 ס; 14 ס; 15 ס; 16 ס; 17 פ; 21 פ; 26 פ |
| **Total** | **271** | **20 פ e 20 ס** |

**Integração:** módulos `scriptures/texts/bhs-exodus-11.js` a `bhs-exodus-20.js`; carregamento registrado em `index.html`; contagens e metadados de *parashah* registrados em `tests/scripture-word-popups.test.cjs`. O conteúdo de cada verso é armazenado em `ScripturaScriptureTexts.BHS.EXO`, com marcas divisórias em `ScripturaScriptureParagraphBreaks` e `ScripturaScriptureParashahTypes` para não confundir `פ` e `ס` com texto lexical.

**Cobertura:** Êxodo **20/40 capítulos (50%)**, **545 versículos**, incluindo o lote anterior de Êxodo 1–10. Com Gênesis 1–50 (**1.533 versículos**), o acumulado da camada BHS é de **2.078 versículos** e **70 capítulos** incorporados. Êxodo 21–40 permanece pendente. O texto foi conferido estruturalmente em relação à transcrição recebida; não equivale a cotejo impresso, homologação filológica, execução automatizada da suíte Node.js nem autorização de redistribuição.

## Incorporação textual 015 — Êxodo 21–30 (BHS)

**Procedência:** transcrição hebraica integral fornecida pelo usuário. Foram conservados a grafia, o *niqqud*, os *teʿamim*, os sinais especiais, o *maqaf*, o *sof pasuq*, a ordem dos pontos de código Unicode e as marcas de *parashah*. Não houve normalização Unicode, correção editorial, tradução ou cotejo com a edição impressa. A numeração em Êxodo 21 (37 versículos) corresponde literalmente à transcrição recebida.

| Capítulo | Versículos | Marcas de *parashah* após versículos |
| --- | ---: | --- |
| 21 | 37 | 6 ס; 11 ס; 13 ס; 14 ס; 16 ס; 17 ס; 19 ס; 21 ס; 25 ס; 26 ס; 27 פ; 32 ס; 34 ס; 36 ס |
| 22 | 30 | 3 ס; 4 ס; 5 ס; 8 ס; 12 פ; 14 ס; 16 ס; 17 ס; 18 ס; 23 פ; 26 ס; 30 ס |
| 23 | 33 | 1 ס; 3 ס; 4 ס; 5 ס; 19 ס; 33 פ |
| 24 | 18 | 11 ס; 18 פ |
| 25 | 40 | 9 ס; 22 פ; 30 פ; 40 ס |
| 26 | 37 | 6 פ; 14 פ; 30 ס; 37 ס |
| 27 | 21 | 8 ס; 19 ס; 21 ס |
| 28 | 43 | 5 פ; 12 ס; 14 ס; 30 ס; 35 ס; 43 ס |
| 29 | 46 | 37 ס; 46 פ |
| 30 | 38 | 10 פ; 16 פ; 21 פ; 33 ס; 38 ס |
| **Total** | **343** | **14 פ e 44 ס** |

**Integração:** dez novos módulos `scriptures/texts/bhs-exodus-21.js` a `bhs-exodus-30.js`, scripts de carregamento em `index.html`, contagens por capítulo e mapeamento de *parashot* em `tests/scripture-word-popups.test.cjs`. O texto lexical foi mantido separado dos metadados de marcas parasséticas.

**Cobertura:** Êxodo **30/40 capítulos (75%)** e **888 versículos**; juntamente com Gênesis 1–50 (**1.533 versículos**), são **2.421 versículos** incorporados na camada BHS em **80 capítulos**. Êxodo 31–40 permanece pendente. Os controles estruturais e a comparação literal com a fonte não substituem homologação filológica, execução da suíte Node.js, cotejo impresso nem avaliação de direitos de publicação.

## Incorporação textual 016 — Êxodo 31–40 (BHS)

**Procedência:** transcrição hebraica integral fornecida pelo usuário. Foram conservados a grafia, o *niqqud*, os *teʿamim*, os sinais especiais, o *maqaf*, o *sof pasuq*, a ordem dos pontos de código Unicode e as marcas de *parashah*. Não houve normalização Unicode, correção editorial, tradução ou cotejo com a edição impressa. A versificação utilizada é a do material transcrito.

| Capítulo | Versículos | Marcas de *parashah* após versículos |
| --- | ---: | --- |
| 31 | 18 | 11 פ; 17 ס |
| 32 | 35 | 6 פ; 14 פ; 35 ס |
| 33 | 23 | 11 ס; 16 פ; 23 ס |
| 34 | 35 | 26 פ; 35 ס |
| 35 | 35 | 3 פ; 29 פ |
| 36 | 38 | 7 ס; 13 ס; 19 ס; 38 פ |
| 37 | 29 | 9 פ; 16 פ; 24 פ; 29 פ |
| 38 | 31 | 7 ס; 8 ס; 20 ס; 23 ס |
| 39 | 43 | 1 פ; 7 פ; 26 ס; 29 ס; 31 ס; 32 פ; 43 פ |
| 40 | 38 | 16 ס; 19 ס; 21 ס; 23 ס; 25 ס; 27 פ; 29 ס; 32 ס; 33 פ |
| **Total** | **325** | **18 פ e 22 ס** |

**Integração:** dez novos módulos `scriptures/texts/bhs-exodus-31.js` a `bhs-exodus-40.js`, scripts de carregamento em `index.html`, contagens por capítulo e mapeamento de *parashot* em `tests/scripture-word-popups.test.cjs`. O texto lexical permanece separado dos metadados de marcas parasséticas.

**Cobertura:** Êxodo **40/40 capítulos (100%)** e **1.213 versículos**; com Gênesis 1–50 (**1.533 versículos**), são **2.746 versículos** da camada BHS distribuídos em **90 capítulos**. O Pentateuco permanece em andamento: faltam Levítico, Números e Deuteronômio. Os controles estruturais e a comparação literal com a fonte não substituem homologação filológica, execução da suíte Node.js, cotejo impresso nem avaliação de direitos de publicação.

## Incorporação textual 017 — Levítico 1–10 (BHS)

**Procedência:** texto hebraico integral fornecido pelo usuário em 23/10/2026, identificado como BHS. Mantidos literalmente grafia consonantal, *niqqud*, *teʿamim*, *maqaf*, *paseq*, *sof pasuq* e sequências Unicode, sem normalização ou correções. As letras isoladas פ/ס após os versículos foram registradas como metadados, não como conteúdo lexical. A transcrição não foi cotejada com a edição impressa.

| Capítulo | Versículos | Marcas de *parashah* após os versículos |
| --- | ---: | --- |
| 1 | 17 | 9 ס; 13 פ; 17 ס |
| 2 | 16 | 3 ס; 4 ס; 6 ס; 13 ס; 16 פ |
| 3 | 17 | 5 פ; 11 פ; 17 פ |
| 4 | 35 | 12 פ; 21 פ; 26 פ; 31 פ; 35 פ |
| 5 | 26 | 10 ס; 13 ס; 16 פ; 19 פ; 26 פ |
| 6 | 23 | 6 ס; 11 פ; 16 פ; 23 פ |
| 7 | 38 | 10 פ; 21 פ; 27 פ; 38 פ |
| 8 | 36 | 36 ס |
| 9 | 24 | Nenhuma assinalada na fonte |
| 10 | 20 | 7 פ; 11 פ; 20 פ |
| **Total** | **252** | **23 פ e 10 ס** |

**Integração:** dez módulos `scriptures/texts/bhs-leviticus-1.js` a `bhs-leviticus-10.js`, carregados em `index.html` antes de `scriptures/reader.js`, nos namespaces `ScripturaScriptureTexts.BHS.LEV`, `ScripturaScriptureParagraphBreaks.BHS.LEV` e `ScripturaScriptureParashahTypes.BHS.LEV`. A regressão estrutural foi ampliada em `tests/scripture-word-popups.test.cjs`.

**Cobertura:** Levítico **10 de 27 capítulos (37,0%)**, com **252 versículos**. A camada BHS passa a totalizar **2.998 versículos em 100 capítulos** (Gênesis 1–50, Êxodo 1–40 e Levítico 1–10). Levítico 11–27 permanece pendente. Não houve homologação filológica, avaliação conclusiva de direitos de publicação, teste de navegador nem execução da suíte Node.js nesta operação.

## Incorporação textual 018 — Levítico 11–27 (BHS)

**Procedência:** transcrição hebraica integral fornecida pelo usuário em 23/10/2026, identificada como BHS. Preservaram-se literalmente consoantes, *niqqud*, *teʿamim*, *maqaf*, *paseq*, *sof pasuq*, grafias particulares e sequência de pontos de código Unicode, sem normalização, correção editorial ou cotejo independente com a edição impressa. As letras isoladas פ e ס após o versículo são registradas apenas em metadados de *parashah*; a ausência de sinal nos encerramentos de Levítico 25 e 27 também foi preservada.

| Capítulo | Versículos | Marcas de *parashah* após os versículos |
| --- | ---: | --- |
| 11 | 47 | 20 ס; 28 ס; 38 ס; 47 פ |
| 12 | 8 | 8 פ |
| 13 | 59 | 8 פ; 17 פ; 23 ס; 28 פ; 37 ס; 39 ס; 46 ס; 59 פ |
| 14 | 57 | 20 ס; 32 פ; 57 ס |
| 15 | 33 | 15 ס; 17 פ; 24 פ; 33 פ |
| 16 | 34 | 34 פ |
| 17 | 16 | 12 ס; 16 פ |
| 18 | 30 | 5 ס; 6 ס; 7 ס; 8 ס; 9 ס; 10 ס; 11 ס; 12 ס; 13 ס; 14 ס; 15 ס; 16 ס; 30 פ |
| 19 | 37 | 19 פ; 22 פ; 32 פ; 37 פ |
| 20 | 27 | 27 פ |
| 21 | 24 | 9 ס; 15 פ; 24 פ |
| 22 | 33 | 13 ס; 16 פ; 25 פ; 33 פ |
| 23 | 44 | 3 פ; 8 פ; 14 ס; 22 ס; 25 ס; 32 פ; 44 פ |
| 24 | 23 | 4 פ; 9 ס; 12 פ; 23 פ |
| 25 | 55 | 7 ס; 24 ס; 34 ס; 38 ס; 46 ס |
| 26 | 46 | 2 ס; 13 פ; 17 ס; 26 ס; 46 פ |
| 27 | 34 | 8 ס; 25 ס |
| **Total** | **607** | **32 פ e 39 ס** |

**Integração:** arquivos `scriptures/texts/bhs-leviticus-11.js` a `bhs-leviticus-27.js`, carregados antes de `scriptures/reader.js`, com armazenamento independente em `ScripturaScriptureTexts.BHS.LEV`, `ScripturaScriptureParagraphBreaks.BHS.LEV` e `ScripturaScriptureParashahTypes.BHS.LEV`. A matriz de contagens e as verificações de *parashah* em `tests/scripture-word-popups.test.cjs` foram ampliadas até o capítulo 27.

**Cobertura atualizada:** Levítico **27/27 capítulos (100%)**, **859 versículos** (1–27). Com Gênesis **1.533** e Êxodo **1.213**, a camada BHS conta **3.605 versículos em 117 capítulos**. Para prosseguir no Pentateuco, faltam Números e Deuteronômio. Estes controles estruturais não equivalem a homologação filológica, avaliação de direitos de publicação, cotejo impresso nem execução dos testes de navegador/Node.js.

## Incorporação textual 019 — Números 1–10 (BHS)

**Procedência:** transcrição hebraica integral fornecida pelo usuário em 23/10/2026, identificada como BHS. Preservados consoantes, *niqqud*, *teʿamim*, *maqaf*, *paseq*, *sof pasuq*, grafias e pontos de código Unicode de cada versículo, sem normalização nem alterações editoriais. As marcas isoladas פ e ס após versículos foram separadas em metadados, sem inserção no texto lexical. Este material não foi cotejado independentemente com a edição impressa.

| Capítulo | Versículos | Marcas de *parashah* após versículos |
| --- | ---: | --- |
| 1 | 54 | 19 פ; 21 פ; 23 פ; 25 פ; 27 פ; 29 פ; 31 פ; 33 פ; 35 פ; 37 פ; 39 פ; 41 פ; 43 פ; 47 פ; 54 פ |
| 2 | 34 | 6 ס; 9 ס; 16 ס; 17 ס; 24 ס; 31 פ |
| 3 | 51 | 4 פ; 10 פ; 13 ס; 39 ס; 43 פ; 51 פ |
| 4 | 49 | 16 ס; 20 פ; 28 פ; 37 ס; 49 פ |
| 5 | 31 | 4 פ; 10 פ; 31 פ |
| 6 | 27 | 21 פ; 23 ס; 24 ס; 25 ס; 26 ס; 27 פ |
| 7 | 89 | 11 ס; 17 פ; 23 פ; 29 פ; 35 פ; 41 פ; 47 פ; 53 פ; 59 פ; 65 פ; 71 פ; 77 פ; 83 פ; 89 פ |
| 8 | 26 | 4 פ; 22 ס; 26 פ |
| 9 | 23 | 8 פ; 14 פ; 23 פ |
| 10 | 36 | 10 פ; 17 ס; 21 ס; 24 ס; 28 ס; 34 ס; 36 פ |
| **Total** | **420** | **48 פ e 20 ס** |

**Sinais especiais:** Números **10:34** e **10:36** apresentam o sinal massorético **׆** depois do *sof pasuq* na fonte recebida. Os dois sinais foram preservados literalmente em suas posições nos textos e também indexados em `ScripturaScriptureInvertedNuns.BHS.NUM[10] = [34,36]`. O registro não supõe outro posicionamento ou leitura.

**Integração:** dez módulos `scriptures/texts/bhs-numbers-1.js` até `bhs-numbers-10.js` com `ScripturaScriptureTexts.BHS.NUM`, `ScripturaScriptureParagraphBreaks.BHS.NUM` e `ScripturaScriptureParashahTypes.BHS.NUM`; carregamento em `index.html` anterior a `scriptures/reader.js`; contagens por capítulo e metadados conferidos em `tests/scripture-word-popups.test.cjs`.

**Cobertura:** Números **10/36 capítulos (27,8%)**, **420 versículos**. A camada BHS soma agora Gênesis 1–50 (1.533), Êxodo 1–40 (1.213), Levítico 1–27 (859) e Números 1–10 (420): **4.025 versículos em 127 capítulos**. Permanecem pendentes Números 11–36 e Deuteronômio. Controles estruturais não substituem testes efetivamente executados, homologação filológica, cotejo impresso ou verificação dos direitos de publicação.

## Incorporação textual 020 — Números 11–36 (BHS)

**Procedência:** transcrição hebraica integral fornecida pelo usuário em 23/10/2026 e por ele identificada como BHS. Transcrição literal dos caracteres Unicode do arquivo: consoantes, sinais vocálicos (*niqqud*), acentos (*teʿamim*), *maqaf*, *paseq*, *sof pasuq*, grafias e demais sinais, sem normalização ou correções editoriais. As marcas isoladas פ (*petuchah*) e ס (*setumah*) após os versículos foram separadas do texto lexical e registradas em `ScripturaScriptureParashahTypes` e `ScripturaScriptureParagraphBreaks`.

| Capítulo | Versículos | Marcas de *parashah* após versículos |
| --- | ---: | --- |
| 11 | 35 | 15 פ; 22 פ; 35 פ |
| 12 | 16 | 3 ס; 13 פ; 16 פ |
| 13 | 33 | Sem marca final no trecho recebido |
| 14 | 45 | 10 פ; 25 פ; 45 פ |
| 15 | 41 | 16 פ; 21 ס; 26 ס; 31 פ; 34 ס; 36 פ; 41 פ |
| 16 | 35 | 19 פ; 22 פ; 35 פ |
| 17 | 28 | 8 פ; 15 פ; 24 ס; 26 ס; 28 ס |
| 18 | 32 | 7 ס; 20 ס; 24 פ; 32 פ |
| 19 | 22 | 22 פ |
| 20 | 29 | 6 פ; 11 ס; 13 ס; 21 פ; 29 ס |
| 21 | 35 | 3 פ; 16 ס; 20 פ |
| 22 | 41 | 1 ס |
| 23 | 30 | Sem marca final no trecho recebido |
| 24 | 25 | 25 פ |
| 25 | 19 | 9 פ; 15 פ; 19 פ |
| 26 | 65 | 11 ס; 14 ס; 18 ס; 22 ס; 25 ס; 27 ס; 34 ס; 37 ס; 41 ס; 43 ס; 47 ס; 51 פ; 56 ס; 65 ס |
| 27 | 23 | 5 ס; 11 ס; 14 פ; 23 פ |
| 28 | 31 | 8 פ; 10 ס; 15 ס; 25 ס; 31 פ |
| 29 | 39 | 6 ס; 11 פ; 16 ס; 19 ס; 22 ס; 25 ס; 28 ס; 31 פ; 34 פ |
| 30 | 17 | 1 פ; 17 פ |
| 31 | 54 | 12 ס; 20 ס; 24 פ; 54 פ |
| 32 | 42 | 4 ס; 15 ס; 19 פ; 42 פ |
| 33 | 56 | 39 ס; 49 ס; 56 פ |
| 34 | 29 | 15 פ; 29 פ |
| 35 | 34 | 8 פ; 34 פ |
| 36 | 13 | Sem marca final no trecho recebido |
| **Total 11–36** | **869** | **47 פ e 44 ס** |

**Integração técnica:** `scriptures/texts/bhs-numbers-11.js` até `bhs-numbers-36.js`, totalizando 26 módulos de `ScripturaScriptureTexts.BHS.NUM`; `index.html` carrega os novos textos depois de Números 1–10 e antes do leitor; `tests/scripture-word-popups.test.cjs` enumera e valida a quantidade de versículos e os mapas de parashah para todos os 36 capítulos. A inexistência de marcas finais explícitas em determinados capítulos — especialmente 13, 23 e 36 — foi mantida conforme a fonte recebida. Os metadados especiais já existentes para os sinais ׆ em Números 10 permanecem inalterados.

**Cobertura acumulada:** Números 1–36 completo (**1.289 versículos em 36 capítulos**). No conjunto BHS já incorporado: Gênesis 1–50 (**1.533**), Êxodo 1–40 (**1.213**), Levítico 1–27 (**859**) e Números 1–36 (**1.289**), total de **4.894 versículos e 153 capítulos** em quatro livros. Resta incorporar Deuteronômio para encerrar o Pentateuco.

**Limitações:** conferir números de versículos, preservação literal e estrutura de metadados não constitui homologação filológica, cotejo independente da edição impressa nem conclusão sobre direitos de publicação. Diferenciar validações estruturais de execução real da suíte automatizada ou verificação visual no navegador.

## Incorporação textual 021 — Deuteronômio 1–34 (BHS)

**Procedência:** transcrição massorética hebraica completa fornecida pelo usuário em 23/10/2026 e identificada como BHS. Conservados os caracteres originais de cada versículo (*niqqud*, *teʿamim*, pontuação, *maqaf*, *paseq*, *sof pasuq*, grafias e sinais incomuns), sem normalização Unicode, alteração editorial nem cotejo conjectural. As marcas isoladas פ (*petuchah*) e ס (*setumah*) após os versículos constam nos metadados de `ScripturaScriptureParashahTypes` e `ScripturaScriptureParagraphBreaks`; as marcas **internas** em 2:8, 5:21 e 23:8 foram preservadas por `ScripturaScriptureInlineParashahTypes`, com deslocamento Unicode exato e quebra de linha conservada no verso (padrão já existente em Gênesis 35:22). Em 5:21, há tanto uma marca interna como outra após o término do versículo.

| Capítulo | Versículos | Marcas de *parashah* explícitas |
| --- | ---: | --- |
| 1 | 46 | Nenhuma marca explícita |
| 2 | 37 | 1 ס; 16 ס; 30 ס; 8 ס (interna) |
| 3 | 29 | 22 ס; 29 פ |
| 4 | 49 | 24 פ; 40 פ; 49 פ |
| 5 | 33 | 5 ס; 11 ס; 15 ס; 16 ס; 17 ס; 18 ס; 19 ס; 20 ס; 21 ס; 21 ס (interna) |
| 6 | 25 | 3 פ; 9 ס; 15 ס; 19 ס; 25 ס |
| 7 | 26 | 6 ס; 11 פ; 16 ס; 26 פ |
| 8 | 20 | 18 פ; 20 פ |
| 9 | 29 | 29 פ |
| 10 | 22 | 11 פ |
| 11 | 32 | 9 ס; 12 ס; 21 ס; 25 ס; 28 ס |
| 12 | 31 | 19 ס; 28 ס |
| 13 | 19 | 1 פ; 12 ס; 19 ס |
| 14 | 29 | 2 ס; 8 ס; 10 ס; 21 פ; 27 ס; 29 ס |
| 15 | 23 | 6 ס; 11 ס; 18 פ; 23 פ |
| 16 | 22 | 8 ס; 12 פ; 17 ס; 20 ס; 21 ס; 22 ס |
| 17 | 20 | 1 ס; 7 פ; 13 ס; 20 ס |
| 18 | 22 | 2 ס; 5 ס; 8 ס; 13 ס; 22 ס |
| 19 | 21 | 7 ס; 10 ס; 13 ס; 14 ס; 21 ס |
| 20 | 20 | 9 ס; 18 ס; 20 פ |
| 21 | 23 | 9 ס; 14 ס; 17 ס; 21 ס; 23 ס |
| 22 | 29 | 3 ס; 4 ס; 5 פ; 7 ס; 8 ס; 9 ס; 10 ס; 11 ס; 12 ס; 19 ס; 21 ס; 22 ס; 24 ס; 27 ס; 29 ס |
| 23 | 26 | 1 ס; 2 ס; 3 ס; 7 ס; 9 ס; 15 ס; 17 ס; 21 ס; 24 ס; 25 ס; 26 ס; 8 ס (interna) |
| 24 | 22 | 4 ס; 5 ס; 6 ס; 8 ס; 9 ס; 13 ס; 15 ס; 16 ס; 18 ס; 20 ס; 22 ס |
| 25 | 19 | 3 ס; 4 ס; 10 ס; 12 ס; 13 ס; 16 פ; 19 פ |
| 26 | 19 | 11 ס; 15 ס; 19 ס |
| 27 | 26 | 8 ס; 10 ס; 14 ס; 15 ס; 16 ס; 17 ס; 18 ס; 19 ס; 20 ס; 21 ס; 22 ס; 23 ס; 24 ס; 25 ס; 26 פ |
| 28 | 69 | 14 ס; 68 ס; 69 פ |
| 29 | 28 | 8 פ; 28 ס |
| 30 | 20 | 10 פ; 14 ס; 20 פ |
| 31 | 30 | 6 פ; 13 פ; 15 ס; 30 פ |
| 32 | 52 | 43 פ; 47 פ; 52 פ |
| 33 | 29 | 6 ס; 7 ס; 11 ס; 12 ס; 17 ס; 19 ס; 21 ס; 23 ס; 29 ס |
| 34 | 12 | Nenhuma marca explícita |
| **Total 1–34** | **959** | **32 פ e 135 ס (167 no total; 3 internas)** |

**Integração:** `scriptures/texts/bhs-deuteronomy-1.js` a `bhs-deuteronomy-34.js` (34 módulos), registrados em `ScripturaScriptureTexts.BHS.DEU`; scripts incluídos uma única vez em `index.html` antes de `scriptures/reader.js`. Cobertura dos capítulos, contagens, tipologia das parashot e reconstrução literal das três posições internas adicionada a `tests/scripture-word-popups.test.cjs`.

**Pentateuco BHS completo conforme transcrições fornecidas:** Gênesis (**50 capítulos, 1.533 versículos**), Êxodo (**40, 1.213**), Levítico (**27, 859**), Números (**36, 1.289**) e Deuteronômio (**34, 959**) — ao todo **187 capítulos e 5.853 versículos**.

**Limitações:** preservação da fonte fornecida não equivale a homologação filológica, comparação independente com o texto impresso da BHS nem autorização para reprodução editorial. Registrar separadamente verificações técnicas estáticas e execução real de testes Node.js ou em navegador.

## Incorporação textual 022 — Josué 1–24 (BHS)

**Procedência:** transcrição hebraica massorética completa fornecida pelo usuário em 23/10/2026 e identificada no projeto como BHS. Mantidos exatamente os caracteres de cada versículo (*niqqud*, *teʿamim*, pontuação, *maqaf*, *paseq*, *sof pasuq*, grafias e sinais incomuns), sem normalização Unicode, correção editorial ou conjectura. Marcas isoladas פ (*petuchah*) e ס (*setumah*) ao final dos versículos foram transferidas para os metadados de `ScripturaScriptureParashahTypes` e `ScripturaScriptureParagraphBreaks`; a marca **interna** de Josué 4:1 (פ) foi preservada em `ScripturaScriptureInlineParashahTypes`, com deslocamento Unicode exato e quebra de linha preservada no verso.

| Capítulo | Versículos | Marcas de *parashah* explícitas |
| --- | ---: | --- |
| 1 | 18 | 9 פ; 11 ס; 18 פ |
| 2 | 24 | 24 ס |
| 3 | 17 | 4 ס; 6 ס; 8 פ |
| 4 | 24 | 3 ס; 13 ס; 14 פ; 24 ס; 1 פ (interna) |
| 5 | 15 | 1 ס; 8 פ; 12 ס |
| 6 | 27 | 1 ס; 11 פ; 25 פ |
| 7 | 26 | 9 ס; 26 פ |
| 8 | 35 | 17 פ; 29 פ; 35 פ |
| 9 | 27 | 2 פ; 27 פ |
| 10 | 43 | 7 פ; 11 ס; 14 פ; 27 פ; 30 ס; 32 פ; 35 פ; 37 ס; 43 פ |
| 11 | 23 | 5 פ; 9 ס; 20 ס; 23 פ |
| 12 | 24 | 6 ס; 8 פ; 24 פ |
| 13 | 33 | 14 ס; 23 פ; 32 ס |
| 14 | 15 | 5 פ; 15 פ |
| 15 | 63 | 19 פ; 32 ס; 41 ס; 47 ס; 54 ס; 60 ס; 63 פ |
| 16 | 10 | 10 פ |
| 17 | 18 | 13 ס; 18 פ |
| 18 | 28 | 10 פ; 28 פ |
| 19 | 51 | 9 פ; 16 פ; 23 פ; 31 פ; 39 פ; 48 פ; 51 פ |
| 20 | 9 | 9 פ |
| 21 | 45 | 4 ס; 5 ס; 6 ס; 8 פ; 12 ס; 16 פ; 19 ס; 22 ס; 24 ס; 26 ס; 27 ס; 29 ס; 31 ס; 33 ס; 37 ס; 42 ס; 45 פ |
| 22 | 34 | 6 ס; 8 פ; 12 פ; 20 פ; 29 פ; 34 פ |
| 23 | 16 | 16 פ |
| 24 | 33 | 15 פ; 18 ס; 26 ס; 28 פ |
| **Total 1–24** | **658** | **52 פ e 42 ס (94 ao todo; 1 interna)** |

**Integração:** `scriptures/texts/bhs-joshua-1.js` a `bhs-joshua-24.js` (24 módulos), registrados em `ScripturaScriptureTexts.BHS.JOS`; scripts incluídos uma única vez em `index.html` antes de `scriptures/reader.js` e após Deuteronômio. Contagens de versículos, tipologia das parashot e reconstrução literal da marca interna de 4:1 adicionadas a `tests/scripture-word-popups.test.cjs`. O catálogo do leitor já apresenta Josué sob Profetas anteriores; não foi necessário alterá-lo.

**Cobertura BHS acumulada conforme transcrições do usuário:** Gênesis (50 capítulos, 1.533 versículos), Êxodo (40, 1.213), Levítico (27, 859), Números (36, 1.289), Deuteronômio (34, 959) e Josué (24, 658). **Total: 211 capítulos e 6.511 versículos em seis livros completos**.

**Limitações:** preservação da fonte fornecida não equivale a homologação filológica, comparação independente com a edição impressa da BHS ou autorização para reprodução editorial. Diferenciar verificações estruturais de execução real de testes automatizados Node.js e testes visuais no navegador.

## Fontes e licenciamento

- BHS canônica para esta fase: https://www.die-bibel.de/en/bible/BHS/GEN.1
- LXX: https://www.die-bibel.de/en/bible/LXX/GEN.1
- NA28: https://www.die-bibel.de/en/bible/NA28/MAT.1
- UBS5: https://www.die-bibel.de/en/bible/UBS5/MAT.1
- Orientações de direitos da editora: https://www.die-bibel.de/en/rights

Os links não transferem direitos de reprodução. **Não realizar raspagem, transcrição integral nem redistribuição de edições protegidas sem licença apropriada.** Para o TR, definir previamente a edição exata (por exemplo, Stephanus 1550 ou Scrivener 1894) e sua proveniência digital.

## Pendências verificáveis

- Conferir para cada edição o **número de versículos em cada capítulo**, numeração de títulos e versos e diferenças intereditoriais.
- Auditar IDs de URL e mapeamento dos livros especiais da LXX com a fonte de edição adotada.
- Definir o Texto Recebido que servirá de base e os direitos da fonte digital.
- Incorporar apenas texto permitido e efetivamente cotejado, mantendo registro de procedência e correções.
- Testar interface em navegador e leitor de tela; os commits desta etapa não constituem homologação editorial do corpus.

Arquivos: `scriptures/reader.js`, `scriptures/reader.css`, integração em `index.html` e `script.js`.
