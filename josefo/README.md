# Flávio Josefo — Antiguidades Judaicas (texto grego integral)

## Texto incorporado

O leitor apresenta os 20 livros de *Antiguidades Judaicas* (Ἰουδαϊκὴ ἀρχαιολογία) em grego, usando o texto TEI publicado pela Perseus Digital Library segundo a edição de Benedikt Niese (1885–1890). Os dados provêm da fonte XML, não de geração livre nem de tradução.

São **7.376 seções numeradas**, **20 sinopses** (uma para cada livro), **257 capítulos**, e o prefácio do Livro I (§§ 1–26) é acessível separadamente dos capítulos.

Contagens de capítulos segundo os marcadores Whiston_chapter do TEI, por livro:

    [22,16,15,8,11,14,15,15,14,11,8,11,16,16,11,11,13,9,9,12]

**Variação editorial:** certas apresentações da divisão Whiston contam 11 capítulos para o Livro XX. O XML Perseus utilizado marca expressamente capítulo 12, abrangendo as seções 259–268; preservamos essa divisão documental. A numeração das seções de Niese é contínua por livro; a citação primária é Ant. livro.seção.

## Fonte, atribuição e licença

- Obra: Flavius Josephus, *Antiquitates Judaicae*.
- Edição histórica: Benedikt Niese (ed.), *Flavii Iosephi opera*, Berlim: Weidmann, 1885–1890, vols. 1–4.
- Transcrição digital: **Perseus Digital Library, Tufts University**, URN urn:cts:greekLit:tlg0526.tlg001.perseus-grc2.
- XML: https://github.com/PerseusDL/canonical-greekLit/blob/master/data/tlg0526/tlg001/tlg0526.tlg001.perseus-grc2.xml
- SHA do arquivo XML original: b7311f2559afeb84a9f95484d8d02d04a0bad86c.
- Catálogo: https://atlas.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0526.tlg001.perseus-grc2/
- **Licença dos dados adaptados:** CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/

A integração removeu marcação TEI/XML, marcas editoriais e indicação de páginas, normalizou espaços e quebras de linha e manteve o conteúdo textual das seções, sinopses e prefácio. Não é reprodução diplomática da estrutura crítica XML; elementos como del, q ou num perderam sua semântica de marcação. Para decisões textuais ou filológicas, consultar a fonte crítica citada.

## Estrutura técnica

- josefo/catalog.js: catálogo de 20 livros e 257 capítulos, conforme o TEI.
- josefo/texts/ant-group-1.js a ant-group-5.js: cinco pacotes locais, com quatro livros por arquivo e carregamento sob demanda.
- josefo/reader.js: seletor por obra, livro, capítulo, prefácio/sinopse e seções Niese, com realce e URL de referência.
- tests/josefo-catalog.test.cjs: testes da estrutura e integridade dos dados.

Referências de URL: #josefo/antiguidades/1/1/27, #josefo/antiguidades/1/0/1 (prefácio), #josefo/antiguidades/1/arg (sinopse).

A amostra de dois excertos em josefo/texts/ant-1-1.js foi substituída pelos arquivos integrais.

Não há tradução portuguesa nessa camada. Preservar a independência de **fonte**, **tradução**, **análise** e **GDHAGP**.
