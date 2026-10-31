# Escritores gregos e Literatura patrística — organização do acervo

A biblioteca disponibiliza **duas categorias independentes** que reutilizam o mesmo mecanismo de seleção e os leitores originais, sem duplicação de texto ou de implementação.

## Escritores gregos — `#autores-gregos`

O combobox de autores apresenta **Flávio Josefo** e **Fílon de Alexandria**. Josefo possui leitores internos; Fílon possui **31 obras indexadas**: *De Abrahamo* e *De Aeternitate Mundi* incorporados integralmente em grego aos leitores locais, e as **29 demais** com consulta externa à biblioteca Perseus/Scaife. Os registros externos são identificados pelo URN `tlg0018.tlg001`–`tlg0018.tlg031` e pela edição digital de origem. A transcrição grega utilizada pelo Perseus decorre da tradição editorial de Cohn/Wendland, com revisão digital relatada pelo projeto Perseus (2023). Esse vínculo bibliográfico **não equivale a uma edição crítica própria** do Scriptura Lexicon. Josefo possui as seguintes obras no catálogo:

- **Antiguidades Judaicas**
- **A Guerra dos Judeus**
- **Vida**
- **Contra Ápio**

As obras abrem os leitores de `josefo/`, com seus pacotes derivados de Niese/Perseus e os critérios de integridade já estabelecidos. **Clemente de Alexandria não aparece nem pode ser selecionado nesta categoria.**



### Obras de Fílon — leitura local e acesso externo

O campo **Obra** apresenta 31 títulos. A seleção de **De Abrahamo** (`tlg0018.tlg020`) abre imediatamente `#filon/de-abrahamo/1`, com **276 seções** da edição Cohn (1902); a seleção de **De Aeternitate Mundi** (`tlg0018.tlg029`) abre imediatamente `#filon/de-aeternitate-mundi/1`, com **150 seções** da edição Cohn–Reiter (1915). Ambas mantêm o grego integral e as notas editoriais. As **29 obras restantes** abrem páginas do Perseus por meio do botão **Consultar no Perseus ↗**. Nenhuma tradução portuguesa foi incorporada.

- Catálogo e URNs: https://atlas.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0018/
- Leitor externo: https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg001/
- Proveniência da transcrição grega revista: https://sites.tufts.edu/perseusupdates/2023/08/02/philo-of-alexandria-translations-and-perseus-the-next-thirty-years/

**Fonte local:** `filon/data/tlg0018.tlg020.1st1K-grc1.xml` (Git blob SHA `5d578cf23afeae6a2fb2e5317eb712d6121e0af8`, idêntico ao arquivo de origem), com `filon/reader.js` e `filon/reader.css`. Licença CC BY-SA 4.0 e atribuição detalhadas em `filon/README.md`. Também foi incorporado `filon/data/tlg0018.tlg029.1st1K-grc1.xml` (Git blob SHA `e313594c110f1b075c1b0f861144ea2fe5fdef10`, idêntico à fonte), com leitor `filon/aeternitate-reader.js`, sob licença CC BY-SA 4.0. As outras 29 obras permanecem externas e não são contabilizadas como transcrições publicadas.

## Literatura patrística — `#patristica`

Esta é a **única categoria pública de Clemente de Alexandria**. O formulário reutilizado apresenta Clemente e suas duas obras:

- **Stromata** — `patristics/reader.js`
- **Pedagogo** — `patristics/paedagogus-reader.js`

Os próprios leitores, estilos e dados TEI anteriormente uniformizados são preservados. Seções clicáveis, texto justificado, símbolo **§**, subseções da edição, navegação, realce com moldura e notas de proveniência permanecem inalterados. Não existe uma cópia separada do leitor para cada categoria.

## Compartilhamento de componentes sem mistura de acervos

`scriptures/greek-authors.js` expõe `setScope("autores-gregos"|"patristica")`. O filtro de categoria é aplicado aos comboboxes Autor e Obra e às chamadas públicas `listAuthors`, `listWorks` e `openWork`. `scriptures/sections.js` define a categoria ativa conforme o endereço ou a navegação. **O mesmo formulário HTML e os mesmos leitores permanecem em uso**; somente o catálogo é filtrado.

As rotas `#josefo` e `#filon` seguem direcionando à seleção dos escritores. Os links de leitura `#patristica/stromata/...` e `#patristica/paedagogus/...` são preservados. O antigo endereço `#autores-gregos/clemente-alexandria` é redirecionado para `#patristica` por compatibilidade, sem recolocar Clemente entre os escritores.

Os botões de retorno de *Stromata* e *Pedagogo* levam a **Literatura patrística**. A documentação e os testes distinguem os dois catálogos e certificam os fluxos de navegação.

Nenhum arquivo de corpus em `josefo/texts/` ou `patristics/data/` é alterado por esta separação de interface.
