# Fílon de Alexandria — obras gregas integrais

## Identificação filológica da fonte

- **Autor:** Fílon de Alexandria (*Philo Judaeus*).
- **Obra:** *De Abrahamo*, em grego antigo (grc).
- **Edição impressa de base:** Leopold Cohn (ed.), *Philonis Alexandrini Opera quae supersunt*, vol. IV (Berlim: Reimer, 1902).
- **Transcrição:** First1KGreek / Perseus Digital Library, TEI-XML, Universidade de Leipzig, 2014, com revisão registrada em 1º de agosto de 2023.
- **Identificador CTS:** `urn:cts:greekLit:tlg0018.tlg020.1st1K-grc1`.
- **Fonte digital:** https://raw.githubusercontent.com/PerseusDLCode/First1KGreek/HEAD/data/tlg0018/tlg020/tlg0018.tlg020.1st1K-grc1.xml
- **Registro de leitura:** https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg020/
- **Licença do XML:** [Creative Commons Attribution–ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).
- **Git blob SHA da fonte e da cópia local (idênticos):** `5d578cf23afeae6a2fb2e5317eb712d6121e0af8`.

## Arquivos

- `filon/data/tlg0018.tlg020.1st1K-grc1.xml` — TEI-XML completo **sem transformações**. Conserva os parágrafos, seções, notas marginais, aparato crítico, quebras de linha, paginação e intervenções editoriais.
- `filon/reader.js` — leitor local, interpretação temporária do XML pelo DOMParser do navegador, dividido em 276 seções (§§ 1–276).
- `filon/reader.css` — tipografia e apresentação nos temas claro e escuro.
- `tests/filon-de-abrahamo-browser.mjs` — verificação automatizada do conteúdo, navegação, notas, URLs e leitura móvel.

## Critérios editoriais e limitações

A numeração §§ 1–276 **pertence à fonte**; não se inventam livros nem capítulos. O seletor de seção oferece referências `#filon/de-abrahamo/1` a `#filon/de-abrahamo/276`. A interface exibe doze seções consecutivas por tela, com navegação para os lotes anterior e posterior; clicar na seção atualiza a referência.

O texto lido no navegador conserva os caracteres gregos e intervenções representadas no XML. Para uma apresentação fluida, as quebras tipográficas de linha (`lb`), página (`pb`) e marcas de referência auxiliar (`milestone`) não se tornam novos parágrafos; todas continuam preservadas no XML integral. O aparato (`note`) não é misturado ao texto principal: aparece em quadros expansíveis por seção, incluindo variantes e notas marginais. Os trechos marcados por `add` e `sic` têm identificação visual, sem emendar o conteúdo. Não se afirma que o leitor seja uma reprodução diplomática da página impressa ou uma nova edição crítica.

**Não há tradução portuguesa incorporada** nesta etapa. O direito de reutilização do arquivo TEI digital é exercido com indicação de autoria, origem, editores e licença CC BY-SA 4.0, sem reivindicar autoria da transcrição. A fonte permanece identificável e separada da camada de apresentação.

As demais obras e suas fontes devem ser verificadas separadamente; esta seção documenta apenas *De Abrahamo*. A próxima seção descreve a segunda incorporação.


## De Aeternitate Mundi — texto grego integral

- **Obra:** *De Aeternitate Mundi* (Περὶ ἀφθαρσίας κόσμου), em grego antigo (`grc`).
- **Edição de base:** Leopold Cohn e Siegfried Reiter (eds.), *Philonis Alexandrini Opera quae supersunt*, **vol. VI** (Berlim: Reimer, **1915**). Metadados transcritos do `teiHeader` da fonte.
- **Transcrição:** First1KGreek / Perseus Digital Library, TEI-XML, Universidade de Leipzig, 2014.
- **CTS:** `urn:cts:greekLit:tlg0018.tlg029.1st1K-grc1`.
- **Fonte:** https://raw.githubusercontent.com/PerseusDLCode/First1KGreek/HEAD/data/tlg0018/tlg029/tlg0018.tlg029.1st1K-grc1.xml
- **Biblioteca externa:** https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg029/
- **Licença:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), conforme o `publicationStmt` do TEI.
- **Git blob SHA da transcrição original e da cópia incorporada:** `e313594c110f1b075c1b0f861144ea2fe5fdef10`.

O arquivo `filon/data/tlg0018.tlg029.1st1K-grc1.xml` foi incorporado **sem edição nem normalização**. A sequência da fonte compreende **150 seções numeradas (§§ 1–150)**, sem lacunas numéricas. O leitor `filon/aeternitate-reader.js` interpreta temporariamente os dados no navegador, exibindo doze seções por lote e preservando a consulta às notas da edição. Os sinais tipográficos de divisão e o aparato continuam integralmente disponíveis no XML; o leitor não se apresenta como reprodução diplomática.

- **Rota interna:** `#filon/de-aeternitate-mundi/1` a `#filon/de-aeternitate-mundi/150`, com navegação por seção e referência bibliográfica.
- **Teste:** `tests/filon-de-aeternitate-browser.mjs`, incluindo integridade do Git blob, §§ 1 e 150, notas, temas, carregamento direto e dispositivo móvel.

A apresentação não adiciona conjecturas, variantes, emendas ou tradução portuguesa. As demais obras devem receber incorporação individual com edição e proveniência verificadas.

## De Agricultura — texto grego integral

- **Obra:** *De Agricultura*, de Fílon de Alexandria; texto original em grego antigo (`grc`).
- **Edição:** Paul Wendland (ed.), *Philonis Alexandrini Opera quae supersunt*, **vol. II** (Berlim: Reimer, **1897**), conforme o `teiHeader`.
- **Transcrição TEI:** First1KGreek / Perseus Digital Library, Universidade de Leipzig, 2014.
- **Identificador:** `urn:cts:greekLit:tlg0018.tlg009.1st1K-grc1`.
- **Fonte integral:** https://raw.githubusercontent.com/PerseusDLCode/First1KGreek/HEAD/data/tlg0018/tlg009/tlg0018.tlg009.1st1K-grc1.xml
- **Consulta na biblioteca de origem:** https://beta.perseus.tufts.edu/urn%3Acts%3AgreekLit%3Atlg0018.tlg009.1st1K-grc1%3A1/
- **Licença da transcrição:** [Creative Commons Attribution–ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- **SHA Git blob da fonte e da cópia local (idênticos):** `c31f276f31879e0e2e760d9e3315540815d06578`.

O arquivo `filon/data/tlg0018.tlg009.1st1K-grc1.xml` foi incorporado **sem alterações**. A divisão original contém **181 seções consecutivas (§§ 1–181)**, sem lacunas. O leitor `filon/agricultura-reader.js` exibe doze seções por lote, permite selecionar uma seção específica e separa as notas da edição do corpo do texto. Notas marginais, variantes, marcas de linha, página e demais intervenções editoriais permanecem integralmente disponíveis no XML de origem.

- **Rota interna:** `#filon/de-agricultura/1` a `#filon/de-agricultura/181`.
- **Testes:** `tests/filon-de-agricultura-browser.mjs`, para identidade do corpus, divisão, notas, leitor, links, temas e apresentação móvel.

Esta incorporação não adiciona emendas, conjecturas, interpretações nem tradução portuguesa. A leitura HTML é uma apresentação interpretativa da estrutura TEI, não uma edição diplomática da obra impressa. O catálogo de Fílon passa a conter **quatro obras incorporadas** e **27 obras com acesso externo**.


## De Cherubim — texto grego integral

- **Obra:** *De Cherubim*, de Fílon de Alexandria; texto original em grego antigo (`grc`).
- **Edição impressa de base:** Leopold Cohn (ed.), *Philonis Alexandrini Opera quae supersunt*, **vol. I** (Berlim: Reimer, **1896**); conforme a descrição bibliográfica do cabeçalho TEI.
- **Transcrição:** First1KGreek / Perseus Digital Library, TEI-XML (Universidade de Leipzig, 2014).
- **URN CTS:** `urn:cts:greekLit:tlg0018.tlg003.1st1K-grc1`.
- **Fonte integral:** https://raw.githubusercontent.com/PerseusDLCode/First1KGreek/HEAD/data/tlg0018/tlg003/tlg0018.tlg003.1st1K-grc1.xml
- **Consulta à biblioteca externa:** https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg003/
- **Licença da transcrição:** [Creative Commons Attribution–ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- **SHA Git blob da fonte original e cópia local (idênticos):** `5a637c0c8f03c2ab31e854169ea17eca68b8e361`.

O arquivo `filon/data/tlg0018.tlg003.1st1K-grc1.xml` foi incorporado **sem edição**. Conserva **130 seções consecutivas (§§ 1–130)**, além de 44 notas (43 notas de rodapé e uma marginal), 18 passagens marcadas `add` e os marcos de paginação e linha presentes no TEI. A interface `filon/cherubim-reader.js` apresenta doze seções por lote, permite selecionar qualquer seção e mantém as notas em painéis expansíveis; o arquivo original conserva as marcas editoriais integralmente.

- **Rota:** `#filon/de-cherubim/1` a `#filon/de-cherubim/130`.
- **Validação:** `tests/filon-de-cherubim-browser.mjs`, incluindo SHA da fonte, título, edição, sequência das 130 seções, notas, navegação por endereço, aparência dos dois temas e dispositivo móvel.

Não se incorporaram tradução portuguesa, conjecturas, normalizações ou correções editoriais à fonte. O leitor HTML oferece representação estruturada do TEI, não uma reprodução diplomática do volume impresso. O catálogo de Fílon agora contém **cinco obras internas** e **26 obras externas**.


## De Confusione Linguarum — texto grego integral

- **Obra:** *De Confusione Linguarum*, de Fílon de Alexandria, original grego antigo (`grc`).
- **Edição de base:** Paul Wendland (ed.), *Philonis Alexandrini Opera quae supersunt*, **volume II** (Berlim: Reimer, **1897**), identificada no cabeçalho TEI.
- **Transcrição:** First1KGreek / Perseus Digital Library, Universidade de Leipzig (2014).
- **CTS:** `urn:cts:greekLit:tlg0018.tlg013.1st1K-grc1`.
- **Fonte integral:** https://raw.githubusercontent.com/PerseusDLCode/First1KGreek/HEAD/data/tlg0018/tlg013/tlg0018.tlg013.1st1K-grc1.xml
- **Consulta na biblioteca de origem:** https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg013/
- **Licença da transcrição:** [Creative Commons Attribution–ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- **SHA Git blob da fonte e da cópia local (idênticos):** `50902ce04b6eb592eb321da05cf8f4cf4a9a5706`.

O arquivo `filon/data/tlg0018.tlg013.1st1K-grc1.xml` foi incorporado **sem alterações**. Contém **198 seções consecutivas (§§ 1–198)**, **52 notas** (50 de rodapé e duas marginais), além das marcações editoriais e de paginação do TEI. O leitor `filon/confusione-reader.js` apresenta o texto por grupos de doze seções, com seleção de seção individual, notas em painéis próprios e navegação pelo identificador CTS. Todo o aparato original continua disponível no XML-fonte; a apresentação HTML não é uma reprodução diplomática da edição impressa.

- **Rotas:** `#filon/de-confusione-linguarum/1` a `#filon/de-confusione-linguarum/198`.
- **Testes:** `tests/filon-de-confusione-browser.mjs`, para identidade da fonte, §1–§198, notas, edição, rotas, temas e mobile.

Não foi criada tradução, nem se acrescentaram conjecturas ou emendas. O catálogo passa a compreender **seis tratados gregos integrais de Fílon** e **25 obras com links externos**.


## De Congressu Eruditionis Gratia — texto grego integral

- **Obra:** *De Congressu Eruditionis Gratia*, de Fílon de Alexandria, em grego antigo (`grc`).
- **Edição impressa de base:** Paul Wendland (ed.), *Philonis Alexandrini Opera quae supersunt*, **vol. III** (Berlim: Reimer, **1898**), conforme `teiHeader`.
- **Transcrição digital:** First1KGreek / Perseus Digital Library, Universidade de Leipzig (2014).
- **URN CTS:** `urn:cts:greekLit:tlg0018.tlg016.1st1K-grc1`.
- **Fonte TEI:** https://raw.githubusercontent.com/PerseusDLCode/First1KGreek/HEAD/data/tlg0018/tlg016/tlg0018.tlg016.1st1K-grc1.xml
- **Biblioteca da fonte:** https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg016/
- **Licença declarada no XML:** [Creative Commons Attribution–ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- **SHA Git blob da fonte e da cópia local (idênticos):** `bf81414cf6c8e94b0a9cda058d6000791633ac9c`.

A transcrição `filon/data/tlg0018.tlg016.1st1K-grc1.xml` foi incorporada **sem alterações**. Ela contém **180 seções consecutivas (§§ 1–180)**, **60 notas editoriais** (59 de rodapé, uma marginal) e as demais marcas estruturais e editoriais do TEI. O leitor `filon/congressu-reader.js` apresenta doze seções por lote, conserva o aparato em painéis expansíveis e permite citar as seções sem fabricar divisões não existentes na edição.

- **Rota local:** `#filon/de-congressu-eruditionis-gratia/1` a `#filon/de-congressu-eruditionis-gratia/180`.
- **Teste:** `tests/filon-de-congressu-browser.mjs`, com integridade, edição, §§ 1 e 180, notas, URLs, temas e mobile.

Não foram produzidas tradução portuguesa nem emendas ao texto-fonte. O leitor HTML é uma apresentação editorial estruturada, não uma reprodução diplomática do livro impresso. O catálogo passa a conter **sete obras gregas integrais** e **24 obras com acesso externo**.


## De Decalogo — texto grego integral

- **Obra:** *De Decalogo*, de Fílon de Alexandria, em grego antigo (`grc`).
- **Edição impressa de base:** Leopold Cohn (ed.), *Philonis Alexandrini Opera quae supersunt*, **volume IV** (Berlim: Reimer, **1902**), de acordo com o cabeçalho TEI.
- **Transcrição digital:** First1KGreek / Perseus Digital Library, Universidade de Leipzig (2014).
- **URN CTS:** `urn:cts:greekLit:tlg0018.tlg023.1st1K-grc1`.
- **Fonte TEI:** https://raw.githubusercontent.com/PerseusDLCode/First1KGreek/HEAD/data/tlg0018/tlg023/tlg0018.tlg023.1st1K-grc1.xml
- **Biblioteca externa:** https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg023/
- **Licença do TEI:** [Creative Commons Attribution–ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- **SHA Git blob da fonte e da cópia local (idênticos):** `814c59e2160f3f2e697031b5408d0f8a531f9ea3`.

O arquivo `filon/data/tlg0018.tlg023.1st1K-grc1.xml` foi incorporado **sem modificações**. Contém **178 seções consecutivas (§§ 1–178)**, **57 notas editoriais** (55 de rodapé e duas marginais), além das marcações editoriais do TEI. O leitor `filon/decalogo-reader.js` apresenta doze seções por lote, seleção individual e notas expansíveis separadas do corpo principal, conservando as marcações no XML-fonte.

- **Rotas:** `#filon/de-decalogo/1` a `#filon/de-decalogo/178`.
- **Teste:** `tests/filon-de-decalogo-browser.mjs`, conferindo integridade, metadados, §§ 1 e 178, notas, navegação, temas e dispositivo móvel.

A incorporação não inventa tradução, variantes, conjecturas ou emendas. A exibição é uma representação interpretativa da estrutura TEI e não uma reprodução diplomática do impresso. O catálogo possui agora **oito textos integrais** e **23 obras com consulta externa**.


## De Ebrietate — texto grego integral

- **Obra:** *De Ebrietate*, de Fílon de Alexandria, no grego original (`grc`).
- **Edição-fonte:** Paul Wendland (ed.), *Philonis Alexandrini Opera quae supersunt*, **volume II** (Berlim: Reimer, **1897**), identificada no cabeçalho TEI.
- **Transcrição:** First1KGreek / Perseus Digital Library, Universidade de Leipzig (2014).
- **URN CTS:** `urn:cts:greekLit:tlg0018.tlg011.1st1K-grc1`.
- **Arquivo-fonte:** https://raw.githubusercontent.com/PerseusDLCode/First1KGreek/HEAD/data/tlg0018/tlg011/tlg0018.tlg011.1st1K-grc1.xml
- **Catálogo de origem:** https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg011/
- **Licença:** [Creative Commons Attribution–ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- **Git blob SHA, idêntico no original e na cópia local:** `db23b8d7901266863ba1203986d54c96604ce84f`.

O arquivo `filon/data/tlg0018.tlg011.1st1K-grc1.xml` foi incorporado **sem qualquer alteração**, preservando **224 seções consecutivas (§§ 1–224)**, **74 notas editoriais** (72 de rodapé, duas marginais), marcações de página, linha e intervenções registradas no TEI. O leitor `filon/ebrietate-reader.js` apresenta o grego original em lotes de doze seções, navegação individual, realce suave da seção selecionada e notas em painéis expansíveis.

- **Rota local:** `#filon/de-ebrietate/1` a `#filon/de-ebrietate/224`.
- **Validação:** `tests/filon-de-ebrietate-browser.mjs`, que verifica SHA, seção inicial e final, metadados editoriais, notas, navegação, temas e leitura em celular.

Esta incorporação não inclui tradução portuguesa, correções conjecturais nem intervenções no conteúdo da fonte. A interface é uma apresentação organizada do TEI, **não uma edição crítica própria ou reprodução diplomática**. O catálogo contém agora **oito obras integrais de Fílon** e **23 obras com acesso externo**.
