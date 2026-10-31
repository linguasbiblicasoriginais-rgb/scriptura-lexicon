# Escritores gregos e Literatura patrística — organização do acervo

A biblioteca disponibiliza **duas categorias independentes** que reutilizam o mesmo mecanismo de seleção e os leitores originais, sem duplicação de texto ou de implementação.

## Escritores gregos — `#autores-gregos`

O combobox de autores apresenta **Flávio Josefo** e **Fílon de Alexandria**. Josefo possui leitores internos; Fílon possui **31 obras indexadas com acesso externo à biblioteca Perseus/Scaife**, sem texto integral incorporado ao repositório. Os registros externos são identificados pelo URN `tlg0018.tlg001`–`tlg0018.tlg031` e pela edição digital de origem. A transcrição grega utilizada pelo Perseus decorre da tradição editorial de Cohn/Wendland, com revisão digital relatada pelo projeto Perseus (2023). Esse vínculo bibliográfico **não equivale a uma edição crítica própria** do Scriptura Lexicon. Josefo possui as seguintes obras no catálogo:

- **Antiguidades Judaicas**
- **A Guerra dos Judeus**
- **Vida**
- **Contra Ápio**

As obras abrem os leitores de `josefo/`, com seus pacotes derivados de Niese/Perseus e os critérios de integridade já estabelecidos. **Clemente de Alexandria não aparece nem pode ser selecionado nesta categoria.**



### Obras de Fílon — acesso externo

O campo **Obra** fica habilitado ao selecionar Fílon e apresenta 31 títulos atestados no catálogo digital do Perseus. O botão **Consultar no Perseus ↗** abre a página específica da obra em nova aba. O catálogo de origem disponibiliza edições gregas; a interface local **não copia, traduz, completa ou altera o texto** e não oferece, por ora, leitura interna de Fílon.

- Catálogo e URNs: https://atlas.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0018/
- Leitor externo: https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg001/
- Proveniência da transcrição grega revista: https://sites.tufts.edu/perseusupdates/2023/08/02/philo-of-alexandria-translations-and-perseus-the-next-thirty-years/

Ao disponibilizar textos locais futuramente, cada obra deverá receber identificação de edição, licença, estrutura de referência, dados e leitor próprios. Enquanto isso, nenhum item externo pode ser contabilizado como transcrição interna publicada.

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
