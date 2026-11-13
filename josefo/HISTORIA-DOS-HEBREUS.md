# História dos Hebreus — corpus de Flávio Josefo no Scriptura Lexicon

## Identificação editorial

**História dos Hebreus** é o título de coletâneas modernas em português, não de um tratado grego antigo com esse nome. O projeto apresenta separadamente as **quatro obras autênticas** conhecidas de Flávio Josefo, com suas próprias divisões e referências. Não reproduz uma tradução portuguesa moderna protegida por direitos autorais.

| Obra | Livro(s) | Seções gregas | Navegação de capítulos |
|---|---:|---:|---|
| Antiguidades Judaicas | 20 | 7.376 | 257 capítulos Whiston no TEI consultado |
| Guerra dos Judeus | 7 | 4.001 | 110 capítulos Whiston e prefácio no Livro I (§§ 1–30) |
| Vida de Flávio Josefo | 1 | 430 | Sem capítulos marcados no TEI; leitura contínua com seções |
| Contra Ápio | 2 | 616 | Sem capítulos marcados no TEI; leitura contínua com seções |

**Total das quatro obras: 30 livros e 12.423 seções numeradas.**

A separação por livro e seção deriva dos identificadores de cada edição. **Não se inventaram capítulos** onde a transcrição TEI não os fornece. O seletor conserva o campo Capítulo, mas indica texto contínuo nesses casos.

## Fonte do texto grego

Reprodução e adaptação a partir do **Perseus Digital Library (Tufts University)**, com texto grego estabelecido por Benedikt Niese em *Flavii Iosephi opera*, volumes respectivos. Cada transcrição abaixo foi retirada da fonte XML correspondente e mantida independente:

- Antiguidades Judaicas: https://github.com/PerseusDL/canonical-greekLit/blob/master/data/tlg0526/tlg001/tlg0526.tlg001.perseus-grc2.xml
- Guerra dos Judeus: https://github.com/PerseusDL/canonical-greekLit/blob/master/data/tlg0526/tlg004/tlg0526.tlg004.perseus-grc2.xml — SHA `335a9957e05242bbba3f7ada9a4c80978d15c7f6`.
- Vida: https://github.com/PerseusDL/canonical-greekLit/blob/master/data/tlg0526/tlg002/tlg0526.tlg002.perseus-grc2.xml — SHA `9172130789227aee450edcaa9d461c3f38cdb5cb`.
- Contra Ápio: https://github.com/PerseusDL/canonical-greekLit/blob/master/data/tlg0526/tlg003/tlg0526.tlg003.perseus-grc2.xml — SHA `b2ade814c0d89833386707a869f3aeefd5bf5a0e`.

**Licença:** CC BY-SA 4.0 do Perseus Digital Library, https://creativecommons.org/licenses/by-sa/4.0/. Esta atribuição é válida para a transcrição textual adaptada. Os dados foram convertidos do TEI/XML em objetos JavaScript com remoção de tags e marcações editoriais, normalização de espaços, preservação do conteúdo dos parágrafos e dos limites das seções. A transformação não é edição diplomática: marcas de citações, números gregos, supressões e paginação não conservam suas funções estruturais; utilizar o XML e a edição crítica para exames filológicos.

## Implementação

Os arquivos `josefo/texts/guerra-1.js` a `guerra-7.js`, `vida-1.js`, `apiao-1.js` e `apiao-2.js` são carregados sob demanda. O leitor novo utiliza `josefo/historia-catalog.js` e `josefo/historia-reader.js`. O leitor original de Antiguidades permanece íntegro, com alternância de obra nos dois leitores e ligação pela seção Obras de Flávio Josefo.

Exemplos de navegação:

- `#josefo/antiguidades/1/1/27` — Antiguidades Judaicas I, § 27;
- `#josefo/historia/guerra/1/0/1` — Guerra dos Judeus I, prefácio, § 1;
- `#josefo/historia/guerra/1/1/31` — Guerra dos Judeus I, capítulo 1, § 31;
- `#josefo/historia/vida/1/1/1` — Vida de Flávio Josefo, § 1;
- `#josefo/historia/apiao/1/1/1` — Contra Ápio I, § 1.

## Sobre os apêndices de algumas edições brasileiras

Algumas coletâneas intituladas *História dos Hebreus* incluem ainda **Martírio dos Macabeus** e **Relato de Filom**, além de prefácios e traduções editoriais. Esses itens NÃO são apresentados aqui como obras autênticas de Josefo nem são declarados incorporados. Identificação de suas tradições textuais, autoria e fontes críticas exigem trabalho independente; **esta entrega é integral para as quatro obras gregas de Josefo, não uma reprodução integral de determinada coletânea comercial portuguesa**.

Manter as camadas Fonte, Tradução, Análise e GDHAGP separadas.
