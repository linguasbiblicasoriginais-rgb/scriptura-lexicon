# Scriptura Lexicon

Projeto lexicográfico composto por quatro dicionários independentes: **Hebraico–Português**, **Aramaico–Português**, **Grego–Português** e **Latim–Português**. Reúne, com separação rigorosa entre as fontes, dados filológicos de léxicos clássicos e modernos, referências textuais e bibliográficas, tradução e recursos interativos.

## Interface

A versão atual é uma aplicação estática composta por:

- `index.html`
- `style.css`
- `script.js`

A pesquisa permanece oculta até que algum texto seja digitado. O seletor de fonte é preenchido automaticamente a partir das fontes presentes nos verbetes e atua como filtro adicional.

## Estrutura dos quatro dicionários

A interface é dividida em quatro seções independentes, acessíveis pelo menu sanduíche:

- **Hebraico–Português**
- **Aramaico–Português**
- **Grego–Português**
- **Latim–Português**

Cada resultado e cada cartão de verbete deve declarar sua seção por meio de `data-dictionary`, com um dos valores: `hebraico`, `aramaico`, `grego` ou `latim`.

Os verbetes atualmente cadastrados pertencem ao dicionário **Grego–Português**. A troca de seção limpa a pesquisa, oculta o verbete aberto e recalcula o filtro de fontes apenas para o dicionário ativo. As seções também podem ser acessadas diretamente por hash: `#hebraico`, `#aramaico`, `#grego` e `#latim`.


## Regra editorial — autores greco-romanos

Quando um verbete citar uma passagem de autor greco-romano, a referência deve, sempre que possível, apontar diretamente para a passagem correspondente no **Perseus Digital Library**, coleção Greco-Roman:

https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman

Regras:

- manter na interface a forma bibliográfica da fonte original, por exemplo `Plat. Apol. 18e`, `Xen. Mem. 3.4.8`, `Thuc. 1.86`;
- transformar essa referência em link para a passagem exata no Perseus quando a identificação for segura;
- **preferir sempre a edição no idioma original**: grego para autores gregos e latim para autores latinos;
- usar uma tradução no Perseus somente quando a edição no idioma original não estiver disponível ou não puder ser identificada com segurança;
- não alterar silenciosamente a referência da fonte para fazê-la caber no Perseus;
- se a referência estiver ambígua, incompleta, usar paginação editorial não mapeável ou a obra não estiver disponível no Perseus, manter a referência sem link e preservar o tooltip bibliográfico;
- quando necessário, pesquisar e confirmar o identificador de obra/edição utilizado pelo Perseus antes de criar o link;
- exemplos de modelo:
  - `Plat. Apol. 18e` → `https://www.perseus.tufts.edu/hopper/text?doc=Plat.+Apol.+18e&fromdoc=Perseus%3Atext%3A1999.01.0169`.

Essa regra aplica-se prospectivamente a todos os novos verbetes e deve ser usada também na revisão de verbetes antigos quando eles forem revisitados.
