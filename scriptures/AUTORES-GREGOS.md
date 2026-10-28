# Escritores gregos — integração do acervo

A categoria pública `#autores-gregos` apresenta Flávio Josefo, Clemente de Alexandria e o registro existente de Fílon de Alexandria (sem obras publicadas). A denominação de interface é **Escritores gregos**, preservando-se o identificador de rota por compatibilidade.

## Obras efetivamente relacionadas

- Josefo: **Antiguidades Judaicas**, **A Guerra dos Judeus**, **Vida** e **Contra Ápio**. Usam, sem duplicação, os leitores e pacotes em `josefo/`, derivados da edição Niese e da transcrição Perseus.
- Clemente: **Stromata** e **Pedagogo**. Usam, sem duplicação, os leitores `patristics/reader.js` e `patristics/paedagogus-reader.js` e os originais TEI `patristics/data/*.xml`, provenientes das edições Stählin.

Fluxo: `Escritores gregos → Autor → Obra → divisões do leitor → texto grego`.

O catálogo `scriptures/greek-authors.js` conserva `registerAuthor`, `registerWork`, `selectAuthor`, `listAuthors` e `listWorks`, e expõe `openWork(id)` para abrir o leitor original. As seis obras são cadastradas por metadados/relacionamentos, sem importar os textos para memória do catálogo nem criar passagens falsas.

## Compatibilidade e integridade

A seção `#josefo` e `#filon` permanecem aliases para a nova hierarquia. Os endereços profundos `#josefo/antiguidades/...`, `#josefo/guerra/...`, `#josefo/historia/...`, `#patristica/stromata/...` e `#patristica/paedagogus/...` continuam aceitos pelos leitores originais. A categoria temática «Literatura patrística» encaminha à ficha de Clemente, sem repetir os títulos das obras como categoria separada. Fonte, notas e aparato permanecem nos arquivos originais (não necessariamente exibidos integralmente no leitor).

Nenhum arquivo em `josefo/texts/` nem `patristics/data/` deve ser modificado por esta integração. Compare os blobs Git do corpus antes/depois; valide em navegador e execute os testes de regressão antes de homologar a publicação.
