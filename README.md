# Scriptura Lexicon

**Biblioteca lexicográfica digital das línguas bíblicas e da literatura antiga, com consulta em português.**

O **Scriptura Lexicon** é um projeto de lexicografia histórica e filologia voltado à organização, à preservação documental, à tradução e à apresentação digital de dicionários de **hebraico, aramaico, grego e, em perspectiva de expansão, latim**. Reúne tradições lexicográficas distintas numa interface de pesquisa comum, sem apagar as diferenças entre autores, obras, edições, corpora e métodos.

O projeto está associado ao **GDHAGP — Grande Dicionário Hebraico–Aramaico–Grego–Português**, horizonte de elaboração lexicográfica própria em língua portuguesa. Entretanto, **o Scriptura Lexicon não é um único dicionário que funde os demais**: é uma biblioteca de fontes independentes, acompanhada de camadas editoriais explicitamente diferenciadas.

> **Princípio fundamental:** cada verbete deve representar fielmente a obra à qual pertence. Traduções, interpretações, correções e comparações devem ser identificáveis; nunca devem ser apresentadas como palavras ou conclusões do autor da fonte.

## Sumário

- [Finalidade e objetivos](#finalidade-e-objetivos)
- [Abrangência e conteúdo](#abrangência-e-conteúdo)
- [Funcionalidades](#funcionalidades)
- [Escrituras Sagradas](#escrituras-sagradas)
- [Biblioteca de fontes lexicográficas](#biblioteca-de-fontes-lexicográficas)
  - [Grego](#fontes-gregas)
  - [Hebraico e aramaico](#fontes-hebraicas-e-aramaicas)
  - [Obras complementares de consulta](#obras-complementares-de-consulta)
- [Método filológico e editorial](#método-filológico-e-editorial)
- [Textos antigos, referências e ligações](#textos-antigos-referências-e-ligações)
- [Organização técnica](#organização-técnica)
- [Consulta e execução local](#consulta-e-execução-local)
- [Proveniência, direitos autorais e atribuição](#proveniência-direitos-autorais-e-atribuição)
- [Documentação e desenvolvimento](#documentação-e-desenvolvimento)

## Finalidade e objetivos

O Scriptura Lexicon procura facilitar o estudo das línguas e dos textos antigos mediante o acesso organizado a repertórios lexicográficos de diferentes épocas e especializações. Seus objetivos são:

1. **Tornar consultáveis em português** obras originalmente redigidas em inglês ou em outros idiomas, respeitando seus conceitos, sua estrutura e sua tradição editorial.
2. **Conservar a identidade das fontes:** autoria, edição, grafias, homógrafos, acepções, exemplos, citações e particularidades lexicográficas.
3. **Apoiar a investigação filológica:** morfologia, sintaxe, semântica, etimologia, história lexical, referências textuais e variações de uso, na medida em que estejam documentadas.
4. **Facilitar o confronto crítico entre obras**, sem produzir harmonizações silenciosas ou fazer uma fonte afirmar aquilo que pertence a outra.
5. **Oferecer uma experiência de consulta acessível**, com pesquisa, filtros, verbetes completos, referências navegáveis, explicações contextuais e tratamento tipográfico adequado às escritas originais.
6. **Constituir uma base documental rastreável** para futuras elaborações do GDHAGP, distinguindo testemunho original, tradução, interpretação e redação lexicográfica própria.

O projeto destina-se a leitores da Bíblia nos idiomas originais, estudantes, professores, tradutores, lexicógrafos, linguistas, historiadores e pesquisadores da literatura antiga. Sua abordagem é **filológica e documental**: não altera testemunhos lexicais para favorecer uma conclusão teológica ou uma interpretação previamente escolhida.

## Abrangência e conteúdo

A interface organiza a consulta em quatro seções linguísticas:

| Seção | Identificador interno | Âmbito |
| --- | --- | --- |
| **Hebraico–Português** | `hebraico` | Hebraico bíblico, clássico e, conforme a fonte, pós-bíblico e rabínico. |
| **Aramaico–Português** | `aramaico` | Aramaico bíblico e tradições aramaicas, inclusive materiais targúmicos e rabínicos. |
| **Grego–Português** | `grego` | Grego antigo, grego bíblico, Septuaginta, Novo Testamento e literatura cristã antiga, conforme o âmbito de cada léxico. |
| **Latim–Português** | `latim` | Seção de expansão; sua presença na navegação não significa que exista um corpus latino concluído. |

A classificação por idioma não substitui a identificação da **fonte**. Por exemplo, um vocábulo grego pode ter tratamentos distintos no LSJ, no DGP, em Thayer, no BDAG e no LEH, pois os corpora, as épocas, as finalidades e a análise semântica dessas obras não são idênticos.

O acervo compreende, conforme os materiais efetivamente incorporados e seu estágio editorial:

- Lemas no alfabeto original, formas variantes, transliteração quando pertinente e informações gramaticais.
- Acepções e subacepções, locuções, usos especializados, exemplos e citações.
- Referências bíblicas, clássicas, patrísticas, rabínicas, papirológicas ou epigráficas, de acordo com cada fonte.
- Remissões lexicais, abreviaturas, identificação de autores e obras, notas explicativas e referências externas.
- Dados bibliográficos que permitem reconhecer o dicionário consultado e distinguir edição impressa, fac-símile, transcrição digital e eventual tradução.

**Importante:** estar relacionado no catálogo não significa que o léxico esteja inteiramente transcrito, traduzido, revisado ou publicado na interface. O acervo é desenvolvido progressivamente; **fonte extraída, tradução elaborada, revisão concluída e verbete disponível ao leitor são estados diferentes**. As quantidades e os estados operacionais pertencem aos manifestos e relatórios próprios, e não a esta apresentação permanente.

## Funcionalidades

### Pesquisa e navegação

- **Seleção de idioma** por menu lateral, com áreas independentes para hebraico, aramaico, grego e latim.
- **Pesquisa lexical** com apresentação de resultados e seleção de verbetes.
- **Filtro por fonte lexicográfica**, para consultar uma obra específica dentro da seção linguística.
- **Cartões de verbete** associados às respectivas linhas de resultado, preservando identificação e procedência.
- **Acesso direto às seções** por fragmentos de URL: `#hebraico`, `#aramaico`, `#grego` e `#latim`.
- **Carregamento de dados sob demanda** mediante índices e arquivos de artigos, concebido para evitar que toda a biblioteca seja transferida na abertura da página.

### Leitura e apresentação

- **Temas claro e escuro**, com preferência visual persistente quando o navegador permite armazenamento local.
- **Apresentação responsiva**, adequada a diferentes tamanhos de tela.
- **Tipografia para escrita grega, hebraica e outras grafias antigas**, com suporte a diacríticos e direção da escrita quando aplicável.
- **Elementos explicativos contextuais** (*popups/tooltips*) para abreviaturas, indicações gramaticais, autores, obras, referências e expressões cujo significado possa ser documentado.
- **Fichas bibliográficas e capas** das fontes para as quais existam dados e imagens identificadas.
- **Ligações externas para textos e testemunhos**, quando a obra, a edição e a passagem de destino puderem ser verificadas.

A existência de uma funcionalidade na aplicação não implica que **todos** os verbetes tenham recebido integralmente esse tratamento. A cobertura editorial deve ser comprovada por fonte e por artigo.

## Escrituras Sagradas

A interface inclui **Escrituras Sagradas** como categoria independente acima dos dicionários, com seis edições: **BHS, LXX, NA28, UBS5, TR e VUL**. O novo leitor organiza o catálogo por **edição → livro → capítulo → versículo**, preserva subdivisões hebraicas e variantes textuais da Septuaginta, permite copiar a referência e utiliza URLs específicas para acesso aos capítulos do portal editorial quando o mapeamento é conhecido.

**Estado editorial:** este recurso disponibiliza **navegação e estrutura de dados**, não a transcrição integral das edições. O Texto Massorético tem a **BHS** como fonte canônica inicialmente escolhida. A republicação de texto depende de direitos de uso e cotejo da fonte; os limites de versículos ainda carecem de verificação específica. As edições textuais exatas do TR e da VUL permanecem pendentes de identificação.

**Primeira incorporação textual:** Gênesis 1 (BHS), com **31 versículos** fornecidos pelo usuário e **seis marcações פ** de seção aberta. A transcrição está integrada ao leitor, mas o cotejo caractere a caractere com a edição impressa e a questão dos direitos de publicação ainda exigem verificação.

**Segunda incorporação textual:** Gênesis 1 (LXX), com **31 versículos gregos** fornecidos pelo usuário, separados do texto hebraico. As quebras e os travessões editoriais estão documentados; o cotejo independente com a edição de referência continua pendente.

**Terceira incorporação textual:** Mateus 1 (NA28), com **25 versículos gregos** fornecidos pelo usuário, preservados de modo independente das demais edições. As quebras internas de 1:6 e 1:23 estão registradas e a conferência contra a edição impressa continua pendente.

**Quarta incorporação textual:** Mateus 1 (UBS5), com **25 versículos gregos** fornecidos pelo usuário, dois blocos de títulos e referências paralelas. Conservam-se as diferenças de pontuação, apóstrofos e maiúsculas em relação à transcrição anterior da NA28; cotejo impresso pendente.

**Estrutura da Vulgata:** 78 entradas de navegação (39 no Antigo Testamento, 27 no Novo Testamento e 12 na seção de apócrifos informada). **Quinta incorporação textual:** Gênesis 1 (VUL), com **31 versículos latinos** fornecidos pelo usuário e integrados ao leitor na branch `chat-gpt-escrituras`, conservando as quebras internas. A confirmação da edição impressa permanece pendente.

**Sexta incorporação textual:** Gênesis 2 (BHS), com **25 versículos hebraicos** enviados pelo usuário, preservando *niqqud*, acentos massoréticos e a marcação **פ** após o versículo 3. Registrado de modo independente de Gênesis 1; cotejo impresso pendente.

**Popups lexicais por palavra:** os textos bíblicos incorporados contam com consulta interativa de cada palavra, transliteração mecânica para hebraico e grego e minidicionário editorial introdutório de **cobertura parcial**; palavras sem glosa validada são identificadas explicitamente. O texto canônico permanece inalterado, e não são atribuídos verbetes automaticamente aos léxicos de referência.

**Sétima incorporação textual:** Gênesis 3–10 (BHS), **oito capítulos e 211 versículos** fornecidos pelo usuário, com *niqqud*, acentos de cantilação, caracteres originais e **26 sinais de parashah** (10 פ abertas e 16 ס fechadas) em metadados. Os dez primeiros capítulos de Gênesis na BHS somam agora **267 versículos**; popups por palavra e testes de regressão abrangem o novo lote. O cotejo independente com a edição impressa permanece pendente.

**Oitava incorporação textual:** Gênesis 11–16 (BHS), **131 versículos**, com marcas de parashah registradas em metadados e os capítulos anteriormente pendentes 14 e 16 finalmente incorporados. Transcrição hebraica literal fornecida pelo usuário, sem cotejo impresso independente.

**Nona incorporação textual:** Gênesis 17–20 (BHS), **116 versículos**, preservando pontuação, *niqqud*, cantilação e sinais especiais. Capítulo 17: 14 ס e 27 פ; Gênesis 18: sem marca informada; Gênesis 19: 38 ס; Gênesis 20: 18 ס. Arquivos integrados ao leitor e abrangidos pela suíte de testes de texto/popups/parashot. **Acumulado BHS Gênesis: 20/50 capítulos, 514 versículos**, sujeito a cotejo filológico e avaliação de direitos de distribuição.

**Décima incorporação textual:** Gênesis 21–30 (BHS), **360 versículos**, em dez arquivos independentes com *niqqud*, *teʿamim*, grafia e pontuação hebraica, sem normalização ou emendas. Foram preservadas **12 marcas de parashah** (5 פ abertas, 7 ס fechadas) fora das cadeias versiculares. O leitor e o teste de regressão foram ampliados aos dez capítulos. **Acumulado BHS Gênesis: 30/50 capítulos (60%), 874 versículos**. Cotejo com a edição impressa, direitos de distribuição e ensaio visual permanecem pendentes.

**Décima primeira incorporação textual:** Gênesis 41–50 (BHS), **337 versículos**, transcritos literalmente do material fornecido pelo usuário, com 14 marcas massoréticas de *parashah* (7 פ e 7 ס). Integrados ao leitor e ampliada a suíte de regressão. **Acumulado BHS Gênesis: 40/50 capítulos (80%), 1.211 versículos**; capítulos 31–40 ainda não incorporados, sem inferir continuidade. Publicação e cotejo editorial continuam pendentes.

**Documentação técnica e editorial:** [Escrituras Sagradas — método, catálogo, limitações e fontes](scriptures/README.md).

## Biblioteca de fontes lexicográficas

A biblioteca distingue **fontes de incorporação**, **obras bibliográficas de referência**, **fac-símiles** e **portais auxiliares de consulta**. Nem toda digitalização corresponde à mesma edição, nem toda transcrição digital equivale ao impresso. As descrições abaixo apresentam o escopo e a proveniência conhecida; informações específicas de exemplares e versões devem ser confirmadas nos cadastros indicados.

### Fontes gregas

#### LSJ — Liddell–Scott–Jones

**Liddell, Henry George; Scott, Robert.** *A Greek–English Lexicon*. Revisão de Henry Stuart Jones e Roderick McKenzie. 9ª edição. Oxford: Clarendon Press, 1940.

Grande léxico de grego antigo, indispensável ao estudo de autores clássicos e de numerosas fases históricas do idioma. Seu campo é mais amplo que o grego do Novo Testamento. Deve-se preservar sua própria ordenação, suas referências literárias e suas distinções de sentido.

**Recursos digitais de consulta:** [Perseids/LSJ](https://perseids-project.github.io/lsj-js/), [Philolog.us](https://philolog.us/) e [Furman](https://folio2.furman.edu/lsjj/). Há também uma **transcrição TEI auxiliar** de [LSJLogeion, de Helma Dik](https://github.com/helmadik/LSJLogeion), derivada do ecossistema Perseus/Tufts, com identidade editorial própria. Não se presume correspondência absoluta entre contagem de artigos, IDs e texto de cada implementação.

**Documentação:** [regra do LSJ](regras/Rlsj.txt). Artigos preservados na camada de fonte não devem ser apresentados como traduções portuguesas finalizadas.

#### ROBINSON — Edward Robinson

**Robinson, Edward.** *A Greek and English Lexicon of the New Testament*. Edições históricas de referência: 1836 e 1850.

Léxico neotestamentário que combina informações gramaticais, sentidos, usos e numerosas remissões bíblicas e literárias. A edição de **1850**, publicada em Nova York por Harper & Brothers, é uma das referências bibliográficas identificadas no catálogo; a edição de **1836** possui composição e paginação diferentes.

**Fac-símiles de consulta:** [1850, exemplar 1](https://archive.org/details/greekenglexicon00robirich), [1850, exemplar 2](https://archive.org/details/agreekandenglis00robigoog) e [1836](https://archive.org/details/lexicongreekengl00robirich). A edição e a leitura de cada entrada exigem cotejo com o exemplar usado.

**Documentação:** [fontes impressas](regras/Rfontes-impressas.txt).

#### ABBOTT-SMITH — George Abbott-Smith

**Abbott-Smith, George.** *A Manual Greek Lexicon of the New Testament*. Edimburgo: T. & T. Clark, 1922; também há publicação americana identificada em 1922.

Manual de referência para o vocabulário grego do Novo Testamento, com atenção a relações lexicais, morfologia e usos documentados. As impressões britânica e americana não são consideradas textualmente idênticas sem colação.

**Fac-símiles:** [exemplar americano](https://archive.org/details/manualgreeklexic00abborich), [registro britânico](https://archive.org/details/manualgreeklexic00abbo) e [exemplar da Cornell University](https://archive.org/details/cu31924021607464).

**Documentação:** [fontes impressas](regras/Rfontes-impressas.txt).

#### THAYER — Joseph Henry Thayer

**Thayer, Joseph Henry.** *A Greek-English Lexicon of the New Testament*. Tradução e revisão da tradição lexicográfica Grimm–Wilke. Edição histórica de referência: American Book Company, 1889.

Dicionário do grego neotestamentário com definições, indicações gramaticais, exemplos e referências bíblicas. Sua natureza histórica exige identificar a edição e distinguir conclusões do próprio autor de revisões ou interpretações posteriores. Códigos de Strong utilizados por alguns sites são índices auxiliares, **não** substitutos do lema ou da paginação de Thayer.

**Consultas auxiliares:** [EGW Writings](https://m.egwwritings.org/en/book/14726.14829/toc) e [Bible Hub](https://biblehub.com/thayers/1.htm). Fac-símiles históricos são priorizados na verificação do texto da edição identificada.

**Documentação:** [regra do Thayer](regras/Rthayer.txt).

#### BDAG — Bauer–Danker–Arndt–Gingrich

**Bauer, Walter; Danker, Frederick William; Arndt, William F.; Gingrich, F. Wilbur.** *A Greek-English Lexicon of the New Testament and Other Early Christian Literature*. University of Chicago Press.

Léxico especializado no grego do Novo Testamento e da literatura cristã primitiva, com estrutura semântica desenvolvida, referências a textos antigos e bibliografia de pesquisa. O material digital de trabalho disponível ao projeto se identifica como **quarta edição digital, datada de 2021**; tal identificação **não deve ser equiparada sem verificação** à edição comercial impressa normalmente referida pela sigla BDAG.

A transcrição e a tradução devem respeitar a articulação original das acepções, os exemplos e a atribuição de interpretações. Em razão dos direitos editoriais da obra, posse ou consulta de um arquivo não autoriza sua redistribuição pública integral.

**Documentação:** [regra do BDAG](regras/Rbdag.txt).

#### LEH — Lust–Eynikel–Hauspie

**Lust, Johan; Eynikel, Erik; Hauspie, Katrin.** *A Greek-English Lexicon of the Septuagint*. Revised Edition. Stuttgart: Deutsche Bibelgesellschaft, 2003. ISBN 3-438-05124-9.

Léxico dedicado ao vocabulário da **Septuaginta (LXX)**. Auxilia a investigação dos usos do grego das Escrituras judaicas antigas, inclusive diferenças semânticas perante outras tradições do grego e relações com os textos de origem.

A edição de 2003 reúne versões revistas de partes anteriormente publicadas. É essencial conservar a identificação dos livros, passagens, tradições textuais, variantes e informações morfológicas quando presentes na entrada.

**Documentação:** [regra do LEH](regras/Rleh.txt).

#### DGP — Dicionário Grego–Português

**Malhadas, Daisi; Dezotti, Maria Celeste C.; Neves, Maria Helena de Moura (coordenação).** *Dicionário Grego–Português*. Referência bibliográfica: 2ª edição em volume único, 2022, Ateliê Editorial / Mnēma.

Repertório de grego antigo já redigido em **português**, com definições, exemplos e remissões a autores e obras. No Scriptura Lexicon, a tarefa central é **preservar e apresentar o texto do DGP**, não retraduzir nem reformular livremente suas definições.

**Proveniência digital:** [portal Perseidas/FCLAr–UNESP](http://perseidas.fclar.unesp.br/) e [repositório Grc-Por-DigDict](https://github.com/aniseferreira/Grc-Por-DigDict), com fonte TEI/XML e snapshot documentado. A redação dessa transcrição não deve ser declarada idêntica à edição impressa de 2022 sem cotejo.

A fonte digital informa licença **CC BY-NC-SA 4.0**; consultar a [nota de atribuição e licença](NOTICE-DGP.md) antes de qualquer redistribuição.

**Documentação:** [regra do DGP](regras/Rdgp.txt) e [NOTICE-DGP.md](NOTICE-DGP.md).

#### PEREIRA — Isidro Pereira

**Pereira, Isidro.** *Dicionário Grego–Português e Português–Grego*. Referência bibliográfica identificada: 8ª edição. Braga: Livraria Apostolado da Imprensa, 1998.

Repertório bilíngue clássico de consulta ao vocabulário grego, editorialmente independente do DGP. Os dados bibliográficos da edição impressa de referência **não demonstram** que o serviço eletrônico reproduza exatamente essa edição.

**Fonte digital de consulta e incorporação:** [Dicionário Grego](https://dicionariogrego.com/) e a [API utilizada pelo serviço](https://api.dicionariogrego.com/), cujos registros, campos, respostas e ordem de extração exigem verificação própria.

**Documentação:** [regra do Pereira](regras/Rpereira.txt).

### Fontes hebraicas e aramaicas

#### JASTROW — Marcus Jastrow

**Jastrow, Marcus.** *A Dictionary of the Targumim, the Talmud Babli and Yerushalmi, and the Midrashic Literature*. Edição histórica de referência em dois volumes, publicada no início do século XX; catálogo de referência: 1903.

Dicionário fundamental para **hebraico e aramaico rabínicos**, com usos targúmicos, talmúdicos e midráshicos. Seu universo linguístico não se limita ao hebraico bíblico. Variantes, remissões a tratados, etimologias propostas e informações sobre manuscritos devem ser apresentadas como pertencentes à obra e ao seu contexto histórico.

**Fonte eletrônica:** [Jastrow na Sefaria](https://www.sefaria.org/Jastrow?tab=contents). A segmentação do catálogo eletrônico e a redação do impresso devem ser diferenciadas.

**Documentação:** [regra do Jastrow](regras/Rjastrow.txt).

#### HALOT — Koehler–Baumgartner–Stamm

**Koehler, Ludwig; Baumgartner, Walter; Stamm, Johann Jakob.** *The Hebrew and Aramaic Lexicon of the Old Testament*. Tradução e edição inglesa sob supervisão de M. E. J. Richardson. Leiden: Brill, 1994–2000.

Léxico de hebraico e aramaico do Antigo Testamento, com análises lexicais, etimológicas, gramaticais e bibliográficas. O projeto distingue a **coleção impressa em cinco volumes** de seus formatos eletrônicos e de fac-símiles identificados separadamente.

Na frente HALOT, a fonte digital versionada é documentada como `fontes/fonte-halot.pdf`; a identificação interna do arquivo e sua relação com as edições impressas exigem atenção bibliográfica. Não se deve atribuir ao impresso uma paginação ou característica proveniente apenas de um CD-ROM.

**Documentação:** [regra do HALOT](regras/Rhalot.txt).

#### BDB-H — Brown–Driver–Briggs: hebraico

**Brown, Francis; Driver, S. R.; Briggs, Charles A.** *A Hebrew and English Lexicon of the Old Testament*. Oxford: Clarendon Press, edição histórica de referência do início do século XX.

Léxico histórico do hebraico bíblico, associado à tradição de Gesenius, mas **não idêntico** às obras de Gesenius/Robinson. A seção **hebraica** é tratada como frente distinta, com seus próprios artigos, referências, identificação e critérios editoriais.

**Fonte de consulta:** [BDB na Sefaria](https://www.sefaria.org/BDB?tab=contents).

**Documentação:** [cadastro de fontes de consulta](regras/Rfontes-consulta.txt).

#### BDB-A — Brown–Driver–Briggs: aramaico

Seção **aramaica** do repertório Brown–Driver–Briggs, especialmente pertinente ao aramaico bíblico. Compartilha a tradição bibliográfica do BDB, mas é identificada separadamente no projeto para impedir misturas de corpus, idioma e contagens.

**Fonte de consulta:** [BDB Aramaic na Sefaria](https://www.sefaria.org/BDB_Aramaic?tab=contents).

**Documentação:** [cadastro de fontes de consulta](regras/Rfontes-consulta.txt).

#### KLEIN — Ernest Klein

**Klein, Ernest.** *A Comprehensive Etymological Dictionary of the Hebrew Language for Readers of English* (referido no projeto como *Klein Dictionary*).

Repertório de natureza **etimológica**, relevante ao estudo da formação e das relações históricas do léxico hebraico. As propostas de origem, parentesco linguístico e reconstrução devem ser atribuídas a Klein e avaliadas segundo sua evidência, nunca convertidas automaticamente em consenso ou incorporadas às definições de outros autores.

**Fonte de consulta:** [Klein Dictionary na Sefaria](https://www.sefaria.org/Klein_Dictionary?tab=contents).

**Documentação:** [cadastro de fontes de consulta](regras/Rfontes-consulta.txt).

#### GESENIUS — Wilhelm Gesenius, tradução de Edward Robinson

**Gesenius, Wilhelm.** *A Hebrew and English Lexicon of the Old Testament, Including the Biblical Chaldee*. Tradução inglesa de Edward Robinson. Edições históricas identificadas: Boston, Crocker and Brewster, **1850** e **1866**.

Obra da tradição hebraística oitocentista, com componente aramaico bíblico designado historicamente no título como *Biblical Chaldee*. A terminologia histórica é preservada ao citar o título; a classificação linguística atual distingue o aramaico do hebraico.

**Fac-símiles de consulta:** [edição de 1850](https://archive.org/details/lexiconhebrew0geserich) e [edição de 1866](https://archive.org/details/hebrewenglishlex00geserich). As duas edições demandam identificação separada; Gesenius não deve ser confundido com BDB ou HALOT.

**Documentação:** [fontes impressas](regras/Rfontes-impressas.txt).

### Obras complementares de consulta

Estas obras ampliam a base de **confronto bibliográfico e filológico**. Seu registro documental não significa, por si só, que constituam frentes de incorporação ou que seus verbetes estejam disponíveis na interface.

**KBS — Koehler–Baumgartner–Stamm, coleção impressa.** *The Hebrew and Aramaic Lexicon of the Old Testament*, cinco volumes, Brill, 1994–2000. A designação **KBS** é usada no acervo para distinguir os volumes impressos da identificação da fonte digital **HALOT**. Páginas, anos e ISBNs devem ser atribuídos ao volume efetivamente consultado.

**CLINES / DCH — David J. A. Clines (ed.).** *The Dictionary of Classical Hebrew*. Sheffield Academic Press / Sheffield Phoenix Press, **oito volumes, 1993–2011**. Repertório de hebraico clássico com corpus que ultrapassa os limites do texto massorético bíblico, incorporando testemunhos de outras tradições documentais. Cada volume exige atribuição bibliográfica específica; a existência dos oito volumes no acervo de consulta não equivale a oito volumes traduzidos.

**Catálogos e fac-símiles:** consultar [fontes impressas](regras/Rfontes-impressas.txt), [fontes digitais de consulta](regras/Rfontes-consulta.txt) e [catálogo bibliográfico utilizado pela interface](lexicons/source-catalog.js). O catálogo de capas e metadados é **distinto** da fonte textual de um verbete.

## Método filológico e editorial

### Quatro camadas independentes

| Camada | Conteúdo | Regra de atribuição |
| --- | --- | --- |
| **Fonte** | Texto efetivo da obra, fac-símile ou transcrição digital identificada; metadados de edição e procedência. | O que a fonte atesta deve permanecer distinguível de quaisquer acréscimos. |
| **Tradução** | Versão em português do material da fonte, quando necessária. | Deve representar todas as informações traduzíveis relevantes, sem suprimir acepções ou fabricar exemplos. |
| **Análise** | Observações, cotejos, decisões editoriais e hipóteses fundamentadas. | Sempre identificadas como análise, e não atribuídas indevidamente ao lexicógrafo original. |
| **GDHAGP** | Elaboração lexicográfica própria destinada à síntese crítica futura. | Não substitui os registros independentes dos dicionários históricos. |

Ao trabalhar um artigo, preservam-se, conforme a fonte: lema, acentuação, espíritos, vocalização, homógrafos, flexões, marcas gramaticais, subdivisões semânticas, fraseologia, exemplos, fontes citadas, referências e remissões.

**Distinções intelectuais indispensáveis:** leitura testemunhada ≠ emenda; etimologia defendida por um autor ≠ origem demonstrada; semelhança lexical ≠ cognato comprovado; hipótese ≠ fato; tradução ≠ transcrição. Divergências entre fontes não se resolvem substituindo silenciosamente a redação de uma pela de outra.

**Regra de integridade:** nenhum artigo pode ser completado com conteúdo imaginado, identificado por analogia frágil ou fabricado para suprir uma lacuna de OCR, fotografia, página, API ou transcrição.

### Revisão e graus de conclusão

A incorporação de um artigo, sua verificação estrutural, sua colação parcial, sua tradução e a **auditoria filológica integral** não são atividades equivalentes. A auditoria concluída tem definição rigorosa: verificação individual contra a fonte, correções fundamentadas, testes aplicáveis, evidências e integração confirmada, conforme a [norma de auditoria](regras/Rauditoria.txt).

Não se devem apresentar contagens de transcrições brutas, cartões preliminares ou resultados de testes estáticos como se fossem verbetes plenamente traduzidos e homologados.

## Textos antigos, referências e ligações

As referências integram o conteúdo científico dos verbetes. Seu tratamento procura unir **fidelidade à citação original** e facilidade de consulta:

- **Antigo Testamento em verbetes gregos:** dar preferência ao texto grego da **Septuaginta (LXX)** quando uma referência bíblica for vinculada.
- **Antigo Testamento em verbetes hebraicos:** dar preferência à tradição textual hebraica, com referência à **BHS**, ressalvadas outras indicações expressas da fonte.
- **Novo Testamento grego:** utilizar a **NA28** como edição de referência dos links do texto neotestamentário.
- **Autores gregos e latinos:** preferir a edição no **idioma original**, especialmente no [Perseus Digital Library](https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman), quando passagem, edição e sistema de numeração forem comprovados.
- **Autores, obras, corpora e siglas:** conservar a referência da fonte e acrescentar identificação contextual quando segura; abreviaturas ambíguas permanecem sem expansão conjectural.

Uma URL só deve ser vinculada a uma passagem **depois de validar o destino**. Particularmente, sistemas diferentes de numeração de Flávio Josefo, livros, fragmentos, edições críticas e inscrições não são intercambiáveis por mera conversão de números.

A apresentação pode trazer *popups* bibliográficos, gramaticais e lexicais. Essas explicações são auxiliares e devem permanecer distinguíveis do texto da fonte.

## Organização técnica

O Scriptura Lexicon é uma **aplicação web estática**, baseada principalmente em HTML, CSS, JavaScript e arquivos de dados estruturados. A organização do repositório compreende:

| Recurso | Responsabilidade |
| --- | --- |
| [`index.html`](index.html) | Estrutura da aplicação, navegação e apresentação dos resultados e verbetes. |
| [`style.css`](style.css) | Estilos gerais, responsividade, temas e tipografia. |
| [`script.js`](script.js) | Comportamentos compartilhados da interface, pesquisa e recursos de leitura. |
| [`lexicons/`](lexicons/) | Módulos independentes de fontes, dados, formatadores, catálogos e manifestos específicos. |
| [`lexicons/source-catalog.js`](lexicons/source-catalog.js) | Metadados bibliográficos de fontes, capas e qualificações das edições. |
| [`lexicons/on-demand-search.js`](lexicons/on-demand-search.js) | Consulta ao índice e aos artigos sob demanda. |
| `lexicon-data/` | Dados e índices compilados consumidos pelo mecanismo de carregamento sob demanda. |
| `fontes/` | Fontes documentais versionadas, quando o repositório possui autorização e arquivo definido. |
| [`regras/`](regras/) | Normas editoriais, proveniência, protocolos próprios de cada léxico e critérios de auditoria. |
| `auditoria/` e `auditorias/` | Evidências e relatórios especializados, quando presentes. |
| `imagens/` | Recursos gráficos e capas usados na interface. |
| [`ORQUESTRACAO.md`](ORQUESTRACAO.md) | Documentação de processos e integração, separada da apresentação institucional. |

Os nomes de módulos, quantidades de arquivos, índices e checkpoints podem mudar à medida que a biblioteca evolui. O **estado real dos arquivos e do código** prevalece sobre descrições antigas.

Os artigos mantêm identificação própria e associação consistente entre resultado de busca e cartão de leitura, tradicionalmente por meio das estruturas `search-row`, `entry-card`, `data-dictionary`, `data-source`, `data-target` e `id`, ou equivalentes no índice compilado. O objetivo é preservar unicidade, rastreabilidade e navegação correta.

## Consulta e execução local

A aplicação pode ser servida como site estático compatível com arquivos HTML, CSS, JavaScript e JSON. Para execução local, recomenda-se um **servidor HTTP**, em vez de abrir `index.html` diretamente pelo protocolo `file://`, porque o carregamento sob demanda utiliza requisições a arquivos de dados.

Por exemplo, no diretório do repositório, com Python instalado:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000/` e selecione o idioma e a fonte desejados. Para que a pesquisa funcione integralmente, os arquivos compilados em `lexicon-data/` devem estar disponíveis no mesmo ambiente de hospedagem.

## Proveniência, direitos autorais e atribuição

O Scriptura Lexicon **não reivindica a autoria** das obras lexicográficas históricas ou contemporâneas utilizadas. Cada dicionário conserva sua atribuição bibliográfica. Repositórios eletrônicos, digitalizações, plataformas de consulta e transcrições possuem identidades e condições de uso que podem diferir daquelas da obra impressa.

- A fonte digital do **DGP/DDGP** declara a licença **Creative Commons BY-NC-SA 4.0**; condições e créditos constam de [NOTICE-DGP.md](NOTICE-DGP.md).
- A transcrição auxiliar **LSJLogeion** informa **CC BY-SA 4.0**; devem-se preservar créditos e termos da transcrição, sem inferir que essa licença cubra indistintamente outros exemplares e edições.
- Obras editoriais modernas, como **BDAG**, **LEH**, **HALOT/KBS** e **DCH/Clines**, podem estar protegidas por direitos autorais. **Disponibilidade para consulta, posse de PDF ou acesso a uma API não significam permissão para reprodução ou redistribuição integral.**
- Fac-símiles do Internet Archive, registros da Sefaria e demais portais devem ser utilizados conforme suas condições próprias e os direitos aplicáveis ao texto, à edição e à digitalização.

Qualquer disponibilização pública de material protegido depende de análise específica de direitos, licenças e permissões. Este README descreve fontes de pesquisa; não outorga direitos que pertençam a terceiros.

## Documentação e desenvolvimento

Este `README.md` tem função **institucional e descritiva**. Ele explica **o que é o Scriptura Lexicon, para que existe, quais fontes utiliza, como funciona e quais critérios orientam sua edição**.

Não é diário de commits, relatório de lotes, painel de contagens, registro de incidentes, transcrição de prompts ou cronologia de automações. Essas informações, quando necessárias, pertencem a:

- **Histórico de versões e alterações:** [commits do repositório](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/commits) e pull requests.
- **Regras e continuidade editorial:** [`regras/`](regras/), incluindo as normas particulares de cada obra.
- **Estados de incorporação:** manifestos `*-progress.json` e inventários de cada fonte, verificados contra os dados reais.
- **Auditorias e evidências:** relatórios especializados com identificação de escopo, estágio, fonte e verificações executadas.
- **Processos e integração:** [`ORQUESTRACAO.md`](ORQUESTRACAO.md) e demais documentos operacionais pertinentes.

As contribuições devem respeitar independência das fontes, atribuição bibliográfica, integridade dos dados, segurança das ligações, revisão linguística e documentação das decisões editoriais. A publicação de um novo lote não constitui, por si, comprovação de auditoria filológica.

**O README deve ser atualizado quando mudarem características permanentes do projeto** — objetivos, funcionalidades, estrutura geral, fontes ou metodologia — e não para registrar cada operação executada.

---

**Scriptura Lexicon** — a tradição lexicográfica preservada em suas diferenças, organizada para consulta e investigação em língua portuguesa.


### LSJ — atualização documental de 20/10/2026 (ordinais 6001–7000)

A branch `chat-gpt-lsj` recebeu 1.000 artigos adicionais no manifesto da interface (40 módulos de 25), vinculados ao TEI de `lexicons/lsj-source-batch-0007.xml`. Os lemas vão de **ἀμφικεύθω** a **ἀνακωχή**. Há 12 glosas portuguesas estritamente preliminares nos primeiros 12 artigos; as outras 988 entradas da rodada conservam indicação de tradução pendente. Os cartões preservam o TEI original e as remissões, sem se apresentarem como tradução integral. Total manifestado: 7.000 artigos; nenhuma tradução integral homologada. Último build comprovado anteriormente: 3.300 cartões; a verificação da nova compilação e do deploy público é independente e não foi presumida. Próximo lema: **ἀναλάζομαι** (ordinal 7.001).


**Validação do LSJ (20/10/2026):** [GitHub Actions 39482289169](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39482289169) concluiu com sucesso a compilação e as verificações de índice e cartões: 7.000 artigos LSJ, 7.000 IDs únicos e zero colisões. Este resultado não comprova tradução integral nem publicação do site.


### LSJ — continuação da incorporação (artigos 7.001–8.000, 20/10/2026)

Na branch `chat-gpt-lsj` foi incorporado ao manifesto o lote documental `lexicons/lsj-source-batch-0008.xml`: 1.000 novos artigos, de **ἀναλάζομαι** a **ἀνδηρευτής**, em 40 módulos de 25 cartões. Foram redigidas 12 glosas portuguesas preliminares sem pretensão de tradução integral e conservado todo o TEI original. O acumulado na interface passou a **8.000 artigos LSJ / cerca de 116.854 artigos estimados**; a cifra de referência é provisória. Não confundir 8.000 cartões com 8.000 traduções. A verificação de build, CI, homologação editorial e deploy público deve ser relatada separadamente. Próximo artigo: **ἄνδηρον**, ordinal 8.001.


**Verificação técnica LSJ (20/10/2026):** [workflow 39483789192](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39483789192) concluiu com êxito a compilação de 8.000 cartões/linhas de busca LSJ, identificadores únicos e ausência de colisões. Tradução integral e publicação pública permanecem independentes dessa validação.


### LSJ — incorporação documental 8.001–9.000 (20/10/2026)

Foram adicionados na branch `chat-gpt-lsj` 1.000 artigos da primeira metade de `lexicons/lsj-source-batch-0009.xml`, do lema **ἄνδηρον** ao lema **ἀνθρωπεύομαι**, em 40 módulos de consulta. Foram redigidas 12 glosas provisórias, sem declaração de tradução integral; os demais conservam marcação explícita de tradução pendente. Os dados TEI originais são preservados nos cartões. A incorporação no manifesto alcançou **9.000 / 116.854 artigos estimados**; revisão filológica independente e publicação pública devem ser verificadas separadamente. Próximo artigo: **ἀνθρωπήϊος** (ordinal 9.001).


**Validação CI do LSJ em 20/10/2026:** o [workflow 39487850719](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39487850719) confirmou 9.000 cartões LSJ, 9.000 linhas de busca, 9.000 identificadores únicos e nenhuma colisão. Publicação pública, revisão filológica integral e traduções completas não foram comprovadas.


### LSJ — lote 9.001–10.000 (21/10/2026)

Incorporados à branch `chat-gpt-lsj` mais 1.000 artigos tipográficos da segunda metade de `lexicons/lsj-source-batch-0009.xml`, de **ἀνθρωπήϊος** a **ἀντιδαπανάω**, em 40 módulos JS com 25 artigos, cada um com índice de busca e TEI original integral. Há 17 glosas em português de caráter preliminar; os outros 983 continuam com tradução pendente, sem atribuir ao LSJ sentidos que não tenham sido conferidos. Total manifestado: **10.000 / 116854 artigos estimados**. O número total é provisório e não corresponde a traduções integrais. Próximo artigo: **ἀντίδειξις**, ordinal 10.001. A compilação e a publicação do site devem ser verificadas separadamente.


**LSJ — compilação confirmada (21/10/2026):** o [workflow GitHub Actions 39542906688](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39542906688) validou 10.000 artigos LSJ, 10.000 linhas de pesquisa, 10.000 cartões, IDs únicos e nenhuma colisão no catálogo. Essa validação não equivale a revisão filológica integral, tradução integral ou publicação pública.


### LSJ — lote 10.001–11.000 (21/10/2026)

A branch `chat-gpt-lsj` incorpora 1.000 artigos adicionais do arquivo TEI `lexicons/lsj-source-batch-0010.xml`, desde **ἀντίδειξις** até **ἀνυπέρθετος**, em 40 módulos de 25. Preservados integralmente os 1.000 textos TEI; 20 glosas portuguesas são preliminares, e os demais artigos mantêm indicação expressa de tradução pendente. Total registrado no manifesto: **11.000 / 116.854 artigos LSJ (estimativa provisória)**. A contagem não representa tradução integral. Próximo: **ἀνυπέροχος**, ordinal 11.001.


### LSJ — lote 11.001–12.000 (21/10/2026)

A segunda metade de `lexicons/lsj-source-batch-0010.xml` foi incorporada em 40 módulos JS (25 artigos cada), de **ἀνυπέροχος** a **ἀπενέπω**, com os 1.000 textos TEI preservados integralmente e 18 glosas de caráter preliminar. Total manifestado: **12.000 / 116.854 artigos estimados**. Os registros documentais não equivalem a traduções integrais revisadas. Próximo artigo: **ἀπενθής**, ordinal 12.001.


### LSJ — lote 12.001–13.000 (21/10/2026)

Foram preparados **1.000 cartões documentais adicionais** na branch `chat-gpt-lsj`, em 40 módulos de 25 artigos, do lema **ἀπενθής** ao lema **ἀπόκλειστος**, usando a primeira metade de `lexicons/lsj-source-batch-0011.xml`. Os 1.000 registros conservam o TEI integral e estão identificados para pesquisa. **Não há tradução portuguesa completa desses 1.000 artigos**: são registros documentais com a tradução pendente, não entregas lexicográficas homologadas. Total: **13.000 / 116.854 cartões manifestados (estimativa provisória)**; próxima entrada: **ἀποκλείω**, ordinal 13.001. A compilação, a colação filológica e o deploy público exigem comprovação independente.


**LSJ — compilação do lote 12.001–13.000 confirmada (21/10/2026):** o [workflow 39620632838](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39620632838) passou no commit `1172a4ebee1fc3c5fbdd696751de51878674f315`. Confirmados 13.000 cartões, 13.000 linhas de pesquisa, 13.000 IDs distintos e zero colisões no catálogo compilado. Traduções portuguesas integrais homologadas: **0**; deploy público: **não verificado**.


### LSJ — lote 13.001–14.000 (21/10/2026)

Foram incorporados à branch `chat-gpt-lsj` **1.000 cartões documentais adicionais**, do lema **ἀποκλείω** ao lema **ἀποστεφανόω**, em 40 módulos de 25 artigos, pela ordem real dos `div2` da segunda metade de `lexicons/lsj-source-batch-0011.xml`. Os 1.000 textos TEI integrais foram preservados sem substituição semântica. Todos os novos registros estão marcados **“Tradução portuguesa pendente”**: não constituem traduções portuguesas homologadas. Total manifestado: **14.000 / 116.854 artigos estimados (provisório)**; camada Fonte separada: 23.000 artigos. Próximo: **ἀποστηθίζω** (n13851), ordinal 14.001. CI/build e publicação em produção devem ser verificados separadamente.


**LSJ — compilação do lote 13.001–14.000 aprovada (21/10/2026):** [GitHub Actions 39668179451](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39668179451), commit `c1f46d0d0bc5f7a7fa8215e91431aa3d9428267f`, confirmou 14.000 linhas de pesquisa, 14.000 cartões, 14.000 IDs exclusivos e zero colisões. Esta validação é técnica, não uma homologação filológica; tradução integral em português permanece pendente, e deploy público não foi verificado.


### LSJ — lote 14.001–15.000 (21/10/2026)

Incorporados **1.000 artigos documentais** em 40 módulos de 25, desde **ἀποστηθίζω** (n13851) até **ἀργυρόεις** (n14847), pelos primeiros 1.000 `div2` de `lexicons/lsj-source-batch-0012.xml`. Texto TEI original integral preservado e verificado na ida e volta HTML. Os novos cartões assinalam **“Tradução portuguesa pendente”**: não são 1.000 artigos integralmente traduzidos. Acumulado: **15.000 / 116.854 cartões estimados (denominador provisório)**; fonte documental distinta: 23.000 artigos. Próximo: **ἀργυρόηλος** (n14848), ordinal 15.001. A aprovação da CI e eventual deploy exigem comprovação independente.


**LSJ — validação técnica de 15.000 artigos confirmada (21/10/2026):** [workflow GitHub Actions 39673142181](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39673142181) concluiu `success` no commit `79fb2829d34402352abec5b01d5c32bcfd145bc1`, com **15.000 linhas de pesquisa, 15.000 cartões, 15.000 IDs únicos e zero colisões**. Permanecem independentes e pendentes a tradução portuguesa integral, a revisão filológica do impresso e o deploy público; não apresentar registros documentais como traduções homologadas.


### LSJ — lote 15.001–16.000 (21/10/2026)

A branch `chat-gpt-lsj` contém **1.000 novos artigos documentais** em 40 módulos JavaScript de 25, de **ἀργυρόηλος** (n14848) até **ἀρχαιοφανής** (n15846), extraídos da segunda metade do XML `lexicons/lsj-source-batch-0012.xml`. O TEI foi preservado na íntegra nos cartões e a ida/volta HTML foi verificada. **A tradução portuguesa dos 1.000 artigos está pendente; nenhum deles é apresentado como tradução integral homologada.** Total manifestado: **16.000 de 116.854 artigos estimados** (denominador provisório); camada Fonte separada: 23.000 artigos. Próximo artigo: **ἀρχαιόομαι** (n15847), ordinal 16.001, arquivo `lsj-source-batch-0013.xml`. A compilação e a publicação pública exigem verificação independente.


**LSJ — compilação dos 16.000 artigos validada (21/10/2026):** o [workflow GitHub Actions 39677152379](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39677152379) terminou em `success` no commit `eee79fb0c9096cf4e5d9e3fd7fb9dc30163df0da`: **16.000 linhas de pesquisa, 16.000 cartões, 16.000 IDs exclusivos e zero colisões**. Isto confirma a compilação documental e estrutural, **não a tradução portuguesa integral**, a colação da edição impressa nem o deploy público.


### LSJ — lote 16.001–17.000 (2026-10-21)

Incorporados **1.000 artigos documentais** ao frontend em 40 módulos de 25, de **ἀρχαιόομαι** (n15847) a **ἀσυντρόχαστος** (n16844). Fonte canônica: `lexicons/lsj-source-batch-0013.xml`, com a sequência real dos 1.000 elementos `div2`. O TEI foi preservado integralmente e confrontado por ida/volta HTML. **Os 1.000 cartões permanecem com tradução portuguesa pendente**, sem homologação filológica integral. Total manifestado: **17.000 / 116.854 artigos estimados**; camada Fonte independente: 23.000 registros. Próximo ordinal 17.001: **ἀσυνύπαρκτος** (n16845), fonte `lsj-source-batch-0014.xml`. A validação da compilação e o deploy exigem confirmação separada.


**LSJ — compilação dos 17.000 artigos validada (21/10/2026):** o [workflow GitHub Actions 39678067697](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39678067697) terminou em `success` no commit `5509504b2448a63942f0018b5bffbd36dd30d1e2`, conferindo **17.000 linhas de pesquisa, 17.000 cartões, 17.000 IDs exclusivos e zero colisões**. O resultado não comprova tradução portuguesa integral, colação filológica da edição impressa nem deploy público.


### LSJ — lote 17.001–18.000 (21/10/2026)

Incorporados **1.000 novos artigos documentais** da fonte `lexicons/lsj-source-batch-0014.xml`, de **ἀσυνύπαρκτος** (n16845) a **αὐτοξενεῖν** (n17839), em 40 módulos de 25 artigos. O texto TEI integral foi conservado e confrontado por ida/volta HTML; 1.000 identificadores e ordinais distintos. **Todos os novos artigos têm tradução portuguesa pendente**, não sendo verbetes integralmente traduzidos ou homologados. Total manifestado: **18.000 / 116.854 artigos estimados** (denominador provisório); a camada documental Fonte mantém 23.000 entradas separadas. Próximo: **αὐτόξεστος** (n17840), ordinal 18.001, fonte `lsj-source-batch-0015.xml`. CI, colação filológica e deploy público deverão ser verificados separadamente.


**LSJ — compilação de 18.000 artigos validada (21/10/2026):** o [workflow GitHub Actions 39681834256](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/39681834256) concluiu em `success` no commit `b4388c80850839789b07d23f4a51198b56cf54ae`, com **18.000 linhas de pesquisa, 18.000 cartões, 18.000 IDs exclusivos e zero colisões**. Verificação técnica, não comprovação de tradução portuguesa integral, cotejo independente do impresso ou deploy público.
