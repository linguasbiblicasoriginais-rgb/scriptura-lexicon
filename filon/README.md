# Fílon de Alexandria — De Abrahamo

## Identificação filológica da fonte

- **Autor:** Fílon de Alexandria (*Philo Judaeus*).
- **Obra:** *De Abrahamo*, em grego antigo (grc).
- **Edição impressa de base:** Leopold Cohn (ed.), *Philonis Alexandrini Opera quae supersunt*, vol. IV (Berlim: Reimer, 1902).
- **Transcrição:** First1KGreek / Perseus Digital Library, TEI-XML, Universidade de Leipzig, 2014, com revisão registrada em 1º de agosto de 2023.
- **Identificador CTS:** `urn:cts:greekLit:tlg0018.tlg020.1st1K-grc1`.
- **Fonte digital:** https://raw.githubusercontent.com/PerseusDLCode/First1KGreek/HEAD/data/tlg0018/tlg020/tlg0018.tlg020.1st1K-grc1.xml
- **Registro de leitura:** https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg020/
- **Licença do XML:** [Creative Commons Attribution–ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).
- **Git blob SHA da fonte e da cópia local (idênticos):** `5d578cf23afeae6a2fb2e5317eb712d6121e0af8`.

## Arquivos

- `filon/data/tlg0018.tlg020.1st1K-grc1.xml` — TEI-XML completo **sem transformações**. Conserva os parágrafos, seções, notas marginais, aparato crítico, quebras de linha, paginação e intervenções editoriais.
- `filon/reader.js` — leitor local, interpretação temporária do XML pelo DOMParser do navegador, dividido em 276 seções (§§ 1–276).
- `filon/reader.css` — tipografia e apresentação nos temas claro e escuro.
- `tests/filon-de-abrahamo-browser.mjs` — verificação automatizada do conteúdo, navegação, notas, URLs e leitura móvel.

## Critérios editoriais e limitações

A numeração §§ 1–276 **pertence à fonte**; não se inventam livros nem capítulos. O seletor de seção oferece referências `#filon/de-abrahamo/1` a `#filon/de-abrahamo/276`. A interface exibe doze seções consecutivas por tela, com navegação para os lotes anterior e posterior; clicar na seção atualiza a referência.

O texto lido no navegador conserva os caracteres gregos e intervenções representadas no XML. Para uma apresentação fluida, as quebras tipográficas de linha (`lb`), página (`pb`) e marcas de referência auxiliar (`milestone`) não se tornam novos parágrafos; todas continuam preservadas no XML integral. O aparato (`note`) não é misturado ao texto principal: aparece em quadros expansíveis por seção, incluindo variantes e notas marginais. Os trechos marcados por `add` e `sic` têm identificação visual, sem emendar o conteúdo. Não se afirma que o leitor seja uma reprodução diplomática da página impressa ou uma nova edição crítica.

**Não há tradução portuguesa incorporada** nesta etapa. O direito de reutilização do arquivo TEI digital é exercido com indicação de autoria, origem, editores e licença CC BY-SA 4.0, sem reivindicar autoria da transcrição. A fonte permanece identificável e separada da camada de apresentação.

Os textos das outras trinta obras de Fílon **não** foram incorporados nesta etapa e continuam acessíveis em consultas externas.
