# Stromata de Clemente de Alexandria — proveniência

- **Obra**: Στρώματα (Stromata), Clément/Clemente de Alexandria (CPG 1377).
- **Edição-base**: Otto Stählin (ed.), *Clemens Alexandrinus: Stromata*, volumes II–III, Leipzig, Hinrichs, 1906–1909.
- **Transcrição digital**: Perseus Digital Library, Tufts University, CTS urn:cts:greekLit:tlg0555.tlg004.perseus-grc2.
- **Fonte**: https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/0189b9c8d8d1f148133f2f0af309b4ee90ea4332/data/tlg0555/tlg004/tlg0555.tlg004.perseus-grc2.xml
- **Revisão fixada no GitHub**: 0189b9c8d8d1f148133f2f0af309b4ee90ea4332.
- **SHA-1 do blob Git**: 8faa61c8ff0f691071031c7c7a57bd8af9eee4ec; **tamanho**: 2.314.941 bytes.
- **Licença da edição digital**: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). https://creativecommons.org/licenses/by-sa/4.0/
- **Arquivamento**: \`patristics/data/stromata.xml\`. O XML deve ser preservado como fornecido, sem traduções ou emendas.
- **Importador**: \`node scripts/import-stromata.mjs\`. Confere oito livros, comprimento do arquivo e SHA do blob antes de gravar; repetível, sem duplicações.
- **Navegação**: obra → livro → capítulo → seção → subseção (quando marcadas por milestones).
- **Notas de leitura**: o XML da fonte marca uma lacuna no começo de I.1.1; a interface explicita \`⟦lacuna⟧\`. As notas e o aparato do XML original permanecem preservados no arquivo-fonte, não integralmente exibidos no leitor simplificado.
- **Publicação**: o pipeline Netlify importa o XML antes dos demais passos de build; o workflow GitHub \`import-stromata.yml\` publica a fonte integral na branch dedicada. O leitor tenta primeiramente a cópia local e oferece fallback à URL fixa da fonte.
- **Escopo**: texto grego original, **sem tradução portuguesa**. O código não mistura o texto patrístico com o cânon bíblico nem com verbetes lexicográficos.

## Παιδαγωγός (Pedagogo) — proveniência

- **Autor e obra:** Clemente de Alexandria, *Paedagogus*, edição grega integral dos livros I–III (CTS `urn:cts:greekLit:tlg0555.tlg002.1st1K-grc1`).
- **Edição-base:** Otto Stählin (ed.), *Clemens Alexandrinus*, vol. 1: *Protrepticus und Paedagogus*, Leipzig: Hinrichs, 1905.
- **Repositório de transcrição:** OpenGreekAndLatin/First1KGreek, Perseus Project, Tufts University; fixado em `03776b39f4047c5cff06f5296fae4b2bae4b08fb`.
- **Fonte TEI-XML:** https://raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/03776b39f4047c5cff06f5296fae4b2bae4b08fb/data/tlg0555/tlg002/tlg0555.tlg002.1st1K-grc1.xml
- **Integridade:** blob Git SHA-1 `f332e316c11153eee2f145aa34b0a5b1f1da265a`; tamanho original 841.250 bytes.
- **Licença:** Creative Commons Attribution-ShareAlike 4.0 International; preservar atribuição. https://creativecommons.org/licenses/by-sa/4.0/
- **Cópia canônica arquivada:** `patristics/data/paedagogus.xml`, intacta; importada e verificada por `scripts/import-paedagogus.mjs` no build e workflow próprio.
- **Navegação:** livro → capítulo (incluindo “Argumento”) → seção (`milestone unit="section"`) → subseção (`milestone unit="subsection"`). As seções mantêm a numeração contínua original; argumentos sem divisão interna não recebem seções fictícias.
- **Apresentação:** alinhamento justificado, parágrafos separados por subseção e realce exclusivo da seleção, sem alterar o TEI-XML. Nenhuma tradução portuguesa ou comentário autoral foi incorporado.
