# Parágrafos e apresentação das Escrituras — camada editorial

## Separação entre fonte e apresentação

Os pacotes de texto em `scriptures/texts/` são imutáveis nesta intervenção. A renderização da biblioteca une os versículos de um mesmo grupo visual em **parágrafos de leitura**, mantendo os números e a seleção individual dos versículos. Os metadados de cada edição permanecem separados.

### Divisão em parágrafos

- **Códice de Leningrado (UXLC):** prevalecem as marcas de separação provenientes do original, abertas (פ) ou fechadas (ס), já codificadas como `ScripturaScriptureParagraphBreaks` e `ScripturaScriptureParashahTypes`. Suas posições e caracteres são conservados.
- **Demais edições:** quando houver divisões explicitamente documentadas nos metadados, elas prevalecem. Sem essa marcação, empregam-se **agrupamentos editoriais de leitura**, não atribuídos à edição ou ao manuscrito: início de capítulo, títulos fornecidos, término de sentença após um mínimo de três versículos e limite técnico de até oito versículos; separadores editoriais também dividem os grupos.
- Os grupos não eliminam versículos, não criam capítulos artificiais e não representam testemunhos manuscritos adicionais. `data-paragraph-origin="fonte|editorial"` distingue o que possui divisor explícito e o que é somente organização de leitura.

### Capitalização grega

Para LXX, SBLGNT, TR, NA28 e UBS5, a camada de apresentação distingue o início do **parágrafo**, não o início automático de cada versículo. Uma maiúscula inicial de versificação pode ser exibida em minúscula quando o versículo prossegue o parágrafo. Na abertura do grupo, emprega-se a maiúscula inicial para uso editorial. **Os textos-fontes nunca são alterados**.

Nomes próprios conhecidos e formas capitalizadas em posições internas do capítulo são preservados conservadoramente. Isso significa que **não se promete eliminar toda maiúscula dentro de um parágrafo**: nomes, títulos e capitalizações relevantes continuam legítimos. Esta transformação tipográfica não constitui colação, normalização diplomática nem revisão da edição.

### Interação e acessibilidade

Cada número de versículo permanece selecionável por clique, Enter ou Espaço. A seleção usa fundo, moldura e barra lateral azul como nos leitores gregos; modifica apenas referência, controle de versículo, endereço e realce, **sem recarregar ou reescrever o corpus**. Botões de palavras e minidicionário permanecem operantes independentemente do clique no versículo.

**Testes:** `tests/scripture-paragraphs.test.cjs` confere cobertura das oito edições e preservação das strings; `tests/scripture-paragraphs-browser.mjs` exercita texto, seleção, caixa grega, popups e layout móvel no Chromium.
