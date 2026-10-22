# Escrituras Sagradas — leitor do Scriptura Lexicon

## Escopo e estado (22/10/2026)

A seção **Escrituras Sagradas**, acima de **Dicionários** no menu lateral, contém:

1. **Biblia Hebraica Stuttgartensia (BHS)** — fonte canônica inicialmente definida para o Texto Massorético;
2. **Septuaginta (LXX)** — catálogo textual independente;
3. **Novo Testamento Grego – Texto Crítico (NA28)**;
4. **Novo Testamento Grego – Texto Crítico (UBS5)**;
5. **Novo Testamento Grego – Texto Recebido (TR)** — edição textual específica ainda por fixar.

O leitor permite selecionar **edição, livro, capítulo e um número de versículo**, navegar entre capítulos, copiar a referência e abrir o **capítulo** no portal oficial das quatro primeiras edições quando o identificador do livro é mapeável. A interface usa hash de URL, por exemplo `#escrituras/BHS/GEN.1.1`, sem sobrepor o roteamento dos dicionários.

**Importante:** este commit incorpora a **estrutura de navegação**, não o corpus integral. Um capítulo sem texto incorporado informa claramente a indisponibilidade. O número introduzido como versículo é positivo, mas o número máximo específico de cada capítulo ainda **não foi auditado**; a referência não deve ser usada como evidência da existência do versículo. O link externo aponta ao capítulo, não necessariamente à posição exata do versículo.

## Inventário de livros

- **BHS:** 39 unidades de navegação. A tradição hebraica dos 24 livros é representada por agrupamentos de Samuel, Reis, Crônicas, Esdras–Neemias e os Doze, enquanto a seleção individual preserva a referência usual a cada volume.
- **LXX:** 62 unidades, inclusive variantes e materiais adicionais explicitamente presentes na lista fornecida. As variantes de Josué, Juízes, Tobias, Daniel, Susana e Bel e o Dragão não são fundidas às demais tradições. **Josué A (3 capítulos)** e **Sirácida (52 capítulos)** foram conservados conforme a relação fornecida e exigem cotejo editorial: sua presença no índice não atesta que essas delimitações tenham sido verificadas na edição digital da LXX.
- **NA28, UBS5 e TR:** 27 livros cada, mantidos sob namespaces textuais distintos.

Os livros da BHS com contagens divergentes das divisões correntes foram ajustados no catálogo de navegação para: Cântico dos Cânticos **8**, Rute **4**, Lamentações **5**, Eclesiastes **12**, Ester **10**, 1 Crônicas **29** e 2 Crônicas **36**. Samuel (31+24), Reis (22+25) e Esdras–Neemias (10+13) ficam subdivididos sem perder o agrupamento da Bíblia hebraica. Joel conserva os quatro capítulos do cômputo hebraico informado.

As designações **canônicos** e **apócrifos**, quando presentes na lista original, são categorias descritivas do inventário fornecido, não determinações acerca da canonicidade em outras tradições.

## Camadas documentais

1. **Fonte**: texto canônico identificável por edição, livro, capítulo, versículo e eventual testemunho específico.
2. **Transcrição**: futura incorporação de texto conferido, com niqqud, sinais massoréticos, ortografia e diacríticos inalterados; separar variantes e aparato.
3. **Tradução/análise**: futura camada editorial, nunca apresentada como se fosse a própria BHS, LXX, NA28, UBS5 ou TR.
4. **Interface**: catálogo, visualizador e referências independentes dos dicionários.

O módulo `scriptures/reader.js` expõe `window.ScripturaScriptures.catalog`. No futuro, textos autorizados podem ser registrados **antes** da execução do leitor em `window.ScripturaScriptureTexts`, usando a estrutura:

```js
window.ScripturaScriptureTexts = {
  BHS: {
    GEN: {
      1: {
        // 1: "transcrição conferida com direitos de uso regularizados"
      }
    }
  }
};
```

O exemplo é **estrutura de dados, não conteúdo da BHS**. O componente exibe apenas strings de versículos explicitamente carregadas, via `textContent`, para preservar os caracteres originais e evitar interpretação de HTML. Hebraico utiliza `lang="he"`, `dir="rtl"`; grego usa `lang="grc"`, `dir="ltr"`.

## Fontes e licenciamento

- BHS canônica para esta fase: https://www.die-bibel.de/en/bible/BHS/GEN.1
- LXX: https://www.die-bibel.de/en/bible/LXX/GEN.1
- NA28: https://www.die-bibel.de/en/bible/NA28/MAT.1
- UBS5: https://www.die-bibel.de/en/bible/UBS5/MAT.1
- Orientações de direitos da editora: https://www.die-bibel.de/en/rights

Os links não transferem direitos de reprodução. **Não realizar raspagem, transcrição integral nem redistribuição de edições protegidas sem licença apropriada.** Para o TR, definir previamente a edição exata (por exemplo, Stephanus 1550 ou Scrivener 1894) e sua proveniência digital.

## Pendências verificáveis

- Conferir para cada edição o **número de versículos em cada capítulo**, numeração de títulos e versos e diferenças intereditoriais.
- Auditar IDs de URL e mapeamento dos livros especiais da LXX com a fonte de edição adotada.
- Definir o Texto Recebido que servirá de base e os direitos da fonte digital.
- Incorporar apenas texto permitido e efetivamente cotejado, mantendo registro de procedência e correções.
- Testar interface em navegador e leitor de tela; os commits desta etapa não constituem homologação editorial do corpus.

Arquivos: `scriptures/reader.js`, `scriptures/reader.css`, integração em `index.html` e `script.js`.
