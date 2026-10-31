# Escritores gregos e Literatura patrística — organização do acervo

A biblioteca disponibiliza **duas categorias independentes** que reutilizam o mesmo mecanismo de seleção e os leitores originais, sem duplicação de texto ou de implementação.

## Escritores gregos — `#autores-gregos`

O combobox de autores apresenta **Flávio Josefo** e **Fílon de Alexandria**. Josefo possui leitores internos; Fílon possui **31 obras indexadas**: *De Abrahamo* incorporado integralmente em grego ao leitor local, e as **30 demais** com consulta externa à biblioteca Perseus/Scaife. Os registros externos são identificados pelo URN `tlg0018.tlg001`–`tlg0018.tlg031` e pela edição digital de origem. A transcrição grega utilizada pelo Perseus decorre da tradição editorial de Cohn/Wendland, com revisão digital relatada pelo projeto Perseus (2023). Esse vínculo bibliográfico **não equivale a uma edição crítica própria** do Scriptura Lexicon. Josefo possui as seguintes obras no catálogo:

- **Antiguidades Judaicas**
- **A Guerra dos Judeus**
- **Vida**
- **Contra Ápio**

As obras abrem os leitores de `josefo/`, com seus pacotes derivados de Niese/Perseus e os critérios de integridade já estabelecidos. **Clemente de Alexandria não aparece nem pode ser selecionado nesta categoria.**



### Obras de Fílon — leitura local e acesso externo

O campo **Obra** apresenta 31 títulos. Para **De Abrahamo** (`tlg0018.tlg020`), o botão **Abrir texto integral** exibe o leitor local `#filon/de-abrahamo/1`, com **276 seções** do TEI original (Cohn, 1902) e notas de edição identificadas. Para as outras **30 obras**, o botão **Consultar no Perseus ↗** abre a página específica em nova aba. Não há tradução portuguesa incorporada nem texto inventado.

- Catálogo e URNs: https://atlas.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0018/
- Leitor externo: https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg001/
- Proveniência da transcrição grega revista: https://sites.tufts.edu/perseusupdates/2023/08/02/philo-of-alexandria-translations-and-perseus-the-next-thirty-years/

**Fonte local:** `filon/data/tlg0018.tlg020.1st1K-grc1.xml` (Git blob SHA `5d578cf23afeae6a2fb2e5317eb712d6121e0af8`, idêntico ao arquivo de origem), com `filon/reader.js` e `filon/reader.css`. Licença CC BY-SA 4.0 e atribuição detalhadas em `filon/README.md`. As demais obras continuam externas e não são contabilizadas como transcrições publicadas.

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
