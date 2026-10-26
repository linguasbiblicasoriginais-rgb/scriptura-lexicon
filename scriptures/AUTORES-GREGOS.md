# Autores gregos — catálogo e pesquisa

## Escopo editorial

A seção **Autores gregos** reúne autores de **língua grega**, não apenas autores de etnia grega. As antigas seções dedicadas a **Flávio Josefo** e **Fílon de Alexandria** foram consolidadas. O catálogo inicial contém somente esses **autores**; não contém obras ou passagens fictícias nem textos publicados nessa área.

A entrada de menu e a página inicial abrem a mesma seção (`#autores-gregos`). URLs antigas (`#josefo` e `#filon`) são redirecionadas para a nova seção, com seleção automática do autor correspondente.

## Estrutura de pesquisa

1. **Autor:** seleciona o escritor.
2. **Obra:** mostra somente obras que tenham sido cadastradas para o autor.
3. **Divisões:** são definidas **por obra/edição**, sem hierarquia universal fixa: podem ser Livro, Capítulo, Seção, Subseção, Parágrafo, Fragmento, paginação ou outro esquema. Uma obra pode ter zero ou muitos níveis.
4. **Resultados:** são filtrados pelas referências preenchidas; campos em branco não restringem a pesquisa.

**Não confundir:** cadastro do autor, metadados da obra e disponibilidade real dos trechos. Ausência de textos publicados deve ser indicada explicitamente.

## Registro de dados

O módulo `scriptures/greek-authors.js` disponibiliza `window.ScripturaGreekAuthors`:

- `registerAuthor({id, name})` — cadastra um autor de língua grega.
- `registerWork({id, authorId, title, levels, passages})` — cadastra uma obra e seu esquema próprio de referência.
- `selectAuthor(id)` — pré-seleciona um autor na interface.
- `listAuthors()` e `listWorks(authorId)` — inspecionam o catálogo sem apresentar textos inexistentes.

`levels` é uma lista ordenada de `{key, label}`, com identificadores ASCII minúsculos estáveis. Por exemplo, uma obra pode usar `{key:"livro", label:"Livro"}`, `{key:"capitulo", label:"Capítulo"}` e `{key:"secao", label:"Seção"}`; outra pode usar `{key:"fragmento", label:"Fragmento"}`. Esses são **modelos de estrutura**, não testemunhos ou referências de obras efetivamente cadastradas.

Cada passagem publicada no array `passages` precisa conter `reference`, cujas propriedades correspondem aos `key` de `levels`, e pode conter `text` (texto-fonte) e `translation` (tradução). A interface utiliza texto simples (sem HTML injetado) e pesquisa por correspondência exata de cada componente da referência.

### Exemplo estritamente técnico — sem publicação de verbetes

```javascript
window.ScripturaGreekAuthors.registerAuthor({id:"autor-exemplo",name:"Autor de exemplo"});
window.ScripturaGreekAuthors.registerWork({
  id:"obra-exemplo",
  authorId:"autor-exemplo",
  title:"Obra de exemplo (somente metadados)",
  levels:[
    {key:"livro",label:"Livro"},
    {key:"secao",label:"Seção"},
    {key:"paragrafo",label:"Parágrafo"}
  ],
  passages:[]
});
```

**Não incorporar esse exemplo ao catálogo de produção.** Para obras reais, documentar obrigatoriamente a edição, a fonte e o sistema de referência adotado antes de disponibilizar passagens; não misturar sistemas de citação de edições diferentes sob o mesmo identificador de obra.

## Limites atuais

- Não há obras nem trechos de Fílon, Josefo, Platão ou Aristóteles publicados nesta seção.
- A pesquisa pode receber novos autores, obras e divisões por módulos JavaScript, mas os textos deverão ser providos e verificados editorialmente.
- A integração com pesquisa textual integral, variantes, edições múltiplas e aparato crítico é trabalho separado.
- A verificação deste desenvolvimento cobre a estrutura do frontend e um teste simulado de registro, filtragem e resultado; não substitui teste visual no navegador, nem comprova deploy público.
