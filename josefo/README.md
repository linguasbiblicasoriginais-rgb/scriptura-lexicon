# Flávio Josefo — Antiguidades Judaicas e A Guerra dos Judeus

## Obras apresentadas

A seção **Obras de Flávio Josefo** oferece **dois cartões independentes**, com leitores individuais e texto **grego original** distribuído em arquivos locais:

| Obra | Livros | Capítulos marcados no TEI (Whiston) | Seções numeradas (Niese) | Prefácio |
| --- | ---: | ---: | ---: | --- |
| *Antiguidades Judaicas* — Ἰουδαϊκὴ ἀρχαιολογία | 20 | 257 | 7.376 | Livro I, §§ 1–26 |
| *A Guerra dos Judeus* — Ἰουδαϊκοῦ πολέμου πρὸς Ῥωμαίους | 7 | 110 | 4.001 | Livro I, §§ 1–30 |

O TEI de *Antiguidades* contém, adicionalmente, **20 sinopses gregas**, uma por livro, acessíveis separadamente. No Livro XX, o XML utilizado marca **12 capítulos**, dos quais o último corresponde aos §§ 259–268. Preserva-se esse sistema em vez de impor divisões de outras edições.

A separação editorial é importante: capítulos tradicionais marcados como `Whiston_chapter` **não são** seções Niese. As seções são numeradas continuamente **dentro de cada livro**, sem reinício por capítulo. Prefácios e sinopses são identificados como tais. Os seletores exibem todos os capítulos e todas as seções atestadas, e o leitor mostra o **capítulo inteiro**, realçando o **texto completo** da seção escolhida.

**História dos Hebreus** é uma denominação de coletâneas editoriais modernas, não uma terceira obra antiga. Os antigos arquivos de *Vida* e *Contra Ápio* não foram apagados nem modificados; apenas não integram os dois cartões solicitados.

## Fontes primárias e edição

### Antiguidades Judaicas

- Flavius Josephus, *Flavii Iosephi opera*, ed. **Benedikt Niese**, vols. **1–4**, Berlim: **Weidmann, 1885–1890** (metadados `sourceDesc` da transcrição).
- Perseus Digital Library, `urn:cts:greekLit:tlg0526.tlg001.perseus-grc2`.
- [XML da Perseus](https://github.com/PerseusDL/canonical-greekLit/blob/master/data/tlg0526/tlg001/tlg0526.tlg001.perseus-grc2.xml).
- SHA Git do XML consultado: `b7311f2559afeb84a9f95484d8d02d04a0bad86c`.
- Capítulos por livro: `[22,16,15,8,11,14,15,15,14,11,8,11,16,16,11,11,13,9,9,12]`.

### A Guerra dos Judeus

- Flavius Josephus, *Flavii Iosephi Opera*, ed. **Benedikt Niese**, vol. **6**, Berlim: **Weidmann, 1895** (metadados `sourceDesc` da transcrição).
- Perseus Digital Library, `urn:cts:greekLit:tlg0526.tlg004.perseus-grc2`.
- [XML da Perseus](https://github.com/PerseusDL/canonical-greekLit/blob/master/data/tlg0526/tlg004/tlg0526.tlg004.perseus-grc2.xml).
- SHA Git do XML consultado: `335a9957e05242bbba3f7ada9a4c80978d15c7f6`.
- Capítulos por livro: `[33,22,10,11,13,10,11]`.
- Seções por livro: `[673,654,542,663,572,442,455]`.

**Atribuição da transcrição e licença:** Perseus Digital Library, Tufts University. Textos adaptados sob [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). As condições da licença aplicam-se ao corpus derivado, sem alterar automaticamente o licenciamento dos demais componentes independentes do Scriptura Lexicon.

## Transformações e limites editoriais

Os pacotes JavaScript existentes foram produzidos pela adaptação de **TEI/XML** ao formato de dados da interface. A transformação eliminou tags estruturais, marcação de paginação e distinções de certos elementos editoriais (por exemplo, `q`, `num` e `del`), normalizando espaços e quebras de linha. **O resultado não é uma reprodução diplomática nem substitui o aparato crítico de Niese.**

Na auditoria de 26 de outubro de 2026, todas as **11.377 seções numeradas** dos arquivos locais foram confrontadas com o texto grego do XML, após remoção das marcas TEI e normalização de espaços: **11.377 correspondências textuais, sem divergências ou seções vazias**. Também foram confrontadas as **11.377 posições de capítulo** com os marcadores `Whiston_chapter`, sem divergências; as 20 sinopses gregas de *Antiguidades* igualmente coincidiram. Não foram necessários substituições nem regenerações dos arquivos de texto.

Para uma edição filológica crítica, consultar também o XML original, que conserva informação editorial ausente na apresentação simplificada.

## Estrutura e navegação

- `catalog.js`: metadados dos 20 livros de *Antiguidades*.
- `texts/ant-group-1.js` a `ant-group-5.js`: 20 livros da obra, carregados em cinco grupos locais sob demanda.
- `reader.js`: leitor próprio de *Antiguidades*.
- `historia-catalog.js`: metadados das obras do corpus histórico, incluindo *Guerra*.
- `texts/guerra-1.js` a `guerra-7.js`: sete livros completos de *Guerra*, localmente disponíveis.
- `historia-reader.js`: leitor de *Guerra*, preservando compatibilidade com outras obras já existentes.
- `reader.css`: realce de toda a seção, para ambos os temas.
- `niese-integrity.json`: contagens e fingerprints independentes, derivados dos XML da Perseus.
- `../tests/josefo-niese-integrity.test.cjs`: integridade dos dados e correspondência com fingerprints.
- `../tests/josefo-reader-browser.mjs`: transições, realce, seletores e URLs no Chromium, incluindo viewport móvel.
- `../.github/workflows/josefo-integridade.yml`: execução automatizada dos testes da branch e do Pull Request.

URLs diretas, restauradas ao recarregar:

- `#josefo/antiguidades/1/1/27`: Antiguidades I, cap. 1, § 27.
- `#josefo/antiguidades/1/0/1`: prefácio de Antiguidades I, § 1.
- `#josefo/antiguidades/1/arg`: sinopse de Antiguidades I.
- `#josefo/guerra/1/0/1`: prefácio de Guerra I, § 1.
- `#josefo/guerra/1/1/31`: Guerra I, cap. 1, § 31.
- `#josefo/guerra/7/11/455`: Guerra VII, cap. 11, § 455.

Para preservar referências existentes, o endereço anterior `#josefo/historia/guerra/...` também continua reconhecido. A citação primária é `Ant.` ou `Bell.` **livro.seção**; capítulo Whiston é uma divisão adicional de navegação.

## Verificação automatizada

Os fingerprints FNV-1a de 64 bits foram calculados, por livro, sobre linhas `capítulo:número<TAB>texto normalizado<LF>` extraídas diretamente dos TEI de SHA especificado. Em *Antiguidades*, há ainda um fingerprint de cada sinopse; o cabeçalho pode estar legitimamente vazio na fonte. O teste recalcula as impressões digitais sobre os pacotes locais, conferindo número, posição capitular e texto de cada seção sem depender de solicitações em tempo real à Perseus.

Com Node.js 22, no checkout do projeto:

```bash
node --test tests/josefo-catalog.test.cjs tests/josefo-historia.test.cjs tests/josefo-niese-integrity.test.cjs
```

O navegador é ensaiado por GitHub Actions com Chromium/Playwright e servidor estático. Um teste descrito aqui **só é considerado aprovado quando sua execução registrar sucesso**. A validação do corpus está documentada pelos SHA e pelos testes; a comprovação de interação em browser requer a aprovação da etapa correspondente no workflow.

## Contra Ápio II — preservação da suplência latina e marcação de idioma

A transcrição TEI da Perseus de *Contra Ápio* (`tlg0526.tlg003.perseus-grc2`) contém trechos latinos marcados com `<foreign xml:lang="lat">` para suprir uma lacuna do grego:

- § 51: final em latim, a partir de *et filios regis, ut ipse...*;
- §§ 52–112: texto inteiramente latino;
- § 113: início em latim, com retorno ao grego em *τὴν πορείαν ποιουμένων,*;
- §§ restantes dos livros I e II: grego.

A divisão dos idiomas é **característica do testemunho da edição**, não tradução ou reconstrução do projeto. O leitor aplica `lang="grc"` e `lang="la"` em cada fragmento, sem modificar os dados em `texts/apiao-1.js` e `texts/apiao-2.js`. Alteração inesperada das duas âncoras mistas resulta em `lang="und"` (idioma não confirmado), sem inferência. A nota editorial é exibida especificamente no livro II.

[Consultar o XML TEI de Contra Ápio na Perseus](https://github.com/PerseusDL/canonical-greekLit/blob/master/data/tlg0526/tlg003/tlg0526.tlg003.perseus-grc2.xml).

O arquivo `tests/josefo-linguagens.test.cjs` verifica a integridade de todas as 616 seções e as marcas linguísticas, e `tests/josefo-reader-browser.mjs` valida o resultado no Chromium, inclusive seções com ambos os idiomas.
