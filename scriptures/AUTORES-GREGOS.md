# Escritores gregos e Literatura patrística — organização do acervo

A biblioteca disponibiliza **duas categorias independentes** que reutilizam o mesmo mecanismo de seleção e os leitores originais, sem duplicação de texto ou de implementação.

## Escritores gregos — `#autores-gregos`

O combobox de autores apresenta **Flávio Josefo** e **Fílon de Alexandria** (este ainda sem obras publicadas). Josefo possui as seguintes obras no catálogo:

- **Antiguidades Judaicas**
- **A Guerra dos Judeus**
- **Vida**
- **Contra Ápio**

As obras abrem os leitores de `josefo/`, com seus pacotes derivados de Niese/Perseus e os critérios de integridade já estabelecidos. **Clemente de Alexandria não aparece nem pode ser selecionado nesta categoria.**

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
