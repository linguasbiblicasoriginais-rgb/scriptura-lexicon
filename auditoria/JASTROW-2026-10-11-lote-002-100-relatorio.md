# JASTROW — auditoria filológica única, lote 002: 100 verbetes

**Data:** 11/10/2026. **Branch de correções:** `chat-gpt-correcoes`.
**Obra:** Marcus Jastrow, *A Dictionary of the Targumim, the Talmud Babli and Yerushalmi, and the Midrashic Literature* (edição histórica de 1903).
**Testemunho eletrônico canônico:** Sefaria-Data, XML `dictionaries/Jastrow/data/01-Merged XML/Jastrow-full.xml`, commit `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`; cópia já preservada em `lexicons/jastrow-source-lote-0001.json`. O XML não foi alterado.

## Seleção não repetida e resultado

Foram selecionados os **100 primeiros registros ainda não examinados pela norma filológica única**, entre os registros publicados `A00000` a `A00599`, percorrendo a sequência do XML. O intervalo efetivo é **ordinal 1–125, `A00000` a `A00124`**; os 25 identificadores do primeiro lote que aparecem nesse intervalo foram excluídos. Este é o **segundo lote de auditoria**, não uma nova incorporação e não uma auditoria repetida dos 100 anteriores.

| Resultado | Apenas este lote | Acumulado dos dois lotes |
|---|---:|---:|
| A — aprovado sem nova correção | **72** | **109** |
| C — corrigido e validado | **28** | **91** |
| P — pendente por dúvida concreta | **0** | **0** |
| **Total de pareceres individuais** | **100** | **200/600** |

**Próximo ID ainda não auditado pela norma atual:** `A00125`, ordinal 126. A cobertura filológica única do JASTROW passa a **◐ 200/600**; os 600/600 cotejos sob método anterior não são convertidos automaticamente.

## Método efetivamente executado

1. Conferência de cada registro, ID canônico, lema principal e variantes, classe e homógrafo contra a entrada-fonte completa, não só contra a glosa de pesquisa.
2. Leitura de cada definição e subdefinição, forma/plural, construção, exemplo, remissão e nota de aparato digital em inglês, confrontada com o texto português do cartão.
3. Em 28 casos, atualização do conteúdo editorial, com variantes de edições e manuscritos **atribuídas a Jastrow**, citações exatas e diferenciação entre ocorrência, remissão, interpretação e etimologia hipotética.
4. Registro individualizado das **100 entradas inteiras** em `JASTROW-2026-10-11-lote-002-100-evidencias.json`: XML integral, SHA-256 da entrada, análise de lemas/acepções, HTML português anterior e posterior, motivo A/C e escopo real das verificações.
5. Conferência estática de correspondência entre as 100 entradas e seus cartões, unicidade de IDs, manutenção das quantidades nos quatro módulos alterados e sintaxe JavaScript. Os módulos mantêm os mesmos registros e pesquisa, sem alteração da camada Fonte.

**Limites importantes:** a consulta decisória foi o Jastrow digital preservado no repositório. Os manuscritos rabínicos, comentários de Rashi, <i>Arukh</i>, Rabbinovicz, inscrições, testemunhos impressos originais e textos primários mencionados por Jastrow **não foram todos consultados autonomamente**; assim, as variantes são expressamente *relatadas pelo próprio Jastrow*, não certificações novas dessas fontes. Não foi realizado teste com DOM real/Chromium nem inspeção visual de temas/RTL. Não criar nova auditoria filológica geral como obrigação a partir desses limites: testes funcionais/estruturais pertencem a processo diferente.

## Quadro individual dos 100 resultados

| Ordinal | Registro | Cabeçalho XML | Resultado | Parecer específico |
|---:|---|---|:---:|---|
| 1 | `A00000` | א | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 2 | `A00001` | א | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 3 | `A00002` | א | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 4 | `A00003` | א | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 5 | `A00004` | א | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 6 | `A00005` | א | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 7 | `A00006` | א' | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 8 | `A00007` | אִ־, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 9 | `A00008` | אַ־ | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 10 | `A00009` | אָאִין | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 12 | `A00011` | אֲאָרָא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 16 | `A00015` | אָב, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 20 | `A00019` | אַבָּא, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 21 | `A00020` | אִבָּא | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 23 | `A00022` | אבאטיס | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 24 | `A00023` | אַבְאָשׁוּתָא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 25 | `A00024` | אָבַב | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 26 | `A00025` | אֲבַב | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 29 | `A00028` | אֶבְגְּנִיסְטֵי | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 30 | `A00029` | אבגרוטינה | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 33 | `A00032` | אָבֵד | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 35 | `A00034` | אֲבֵדָה | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 36 | `A00035` | אֶבְדּוּמָא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 37 | `A00036` | אבדומא, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 38 | `A00037` | אבדימי | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 39 | `A00038` | אֲבַדּוֹן | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 40 | `A00039` | אֶבְדּוֹקוֹס | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 41 | `A00040` | אֶבְדִּימָא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 42 | `A00041` | אֶבְדִּימוֹס | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 43 | `A00042` | אַבְדָּלָה | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 44 | `A00043` | אַבְדָּן | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 45 | `A00044` | אָבְדָּן, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 46 | `A00045` | אַבְדָּנָא, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 47 | `A00046` | אֲבֵדְתָּא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 48 | `A00047` | אבדתא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 49 | `A00048` | אַבָּה | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 51 | `A00050` | אַבָּהוּ | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 53 | `A00052` | אֲבָהָתָא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 54 | `A00053` | אבהתא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 56 | `A00055` | אִיבּוּב אַבּוּב | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 58 | `A00057` | אַבּוּבְרָאֶה, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 59 | `A00058` | אַבּוּבְרָם | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 60 | `A00059` | אִבּוּד | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 61 | `A00060` | אבוד | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 62 | `A00061` | אַבּוּדְיָינָא, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 63 | `A00062` | אֲבוּדְמָא, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 64 | `A00063` | אבוורנקא, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 65 | `A00064` | *אֵבוּז | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 66 | `A00065` | אֲבוֹי | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 67 | `A00066` | אֲבוּיָה | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 68 | `A00067` | אבויין | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 69 | `A00068` | אִבּוּל, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 70 | `A00069` | אִבּוּל, | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 71 | `A00070` | אִבּוּלָא, | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 72 | `A00071` | *אִבּוּלָאֵי | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 73 | `A00072` | אבולי | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 74 | `A00073` | אבולין | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 75 | `A00074` | (אבין) אַבּוּן | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 76 | `A00075` | אֲבוּנָא, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 77 | `A00076` | אבונגרי | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 79 | `A00078` | אֲבוּקָא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 81 | `A00080` | *אַבּוּרְגְּנָא, | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 82 | `A00081` | אבורנקי | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 83 | `A00082` | אבזייני | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 85 | `A00084` | אֲבִזְרָא, | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 86 | `A00085` | אבחטס | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 87 | `A00086` | אבטא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 88 | `A00087` | *אַבְטָא | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 89 | `A00088` | אבטו | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 90 | `A00089` | אַבְטוֹלוֹס, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 91 | `A00090` | אַבְטוֹלְמוֹס | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 92 | `A00091` | אַבְטוֹמְטוֹס | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 93 | `A00092` | *אַבְטוֹנִיּוֹת | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 94 | `A00093` | אַבְטַח | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 95 | `A00094` | אַבְטָחָה | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 96 | `A00095` | אַבְּטַי | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 97 | `A00096` | אַבְּטִי | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 99 | `A00098` | *אָבְטְיוֹנָא | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 100 | `A00099` | אֲבַטִּיחַ | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 101 | `A00100` | אֲבַטִּיחָא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 102 | `A00101` | אבטילאות | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 103 | `A00102` | אַבְטִילוֹס | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 104 | `A00103` | אַבְטִינָס | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 105 | `A00104` | אַבְטָלָה | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 106 | `A00105` | אַבְטַלְיוֹן | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 107 | `A00106` | אבטניות | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 108 | `A00107` | אָבֵי, | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 109 | `A00108` | אביא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 110 | `A00109` | אָבִיב | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 114 | `A00113` | אֲבִידַרְנָא | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 115 | `A00114` | אֲבֵידְתָּא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 116 | `A00115` | אביה, | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 117 | `A00116` | אַבְיוּ | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 118 | `A00117` | אֶבְיוֹן | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 119 | `A00118` | אֲבִיּוֹנָה | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 120 | `A00119` | אֶבְיוֹנָה | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 121 | `A00120` | אֶבְיוֹנוּת | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 123 | `A00122` | אֲבִיזְרָא | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |
| 124 | `A00123` | אַבַּיִּי | **C** | Complemento de variantes, exemplos, crítica da fonte ou precisão semântica registrado no cartão e abaixo |
| 125 | `A00124` | אַבָּיִי | **A** | Correspondência entre definições, nota e cartão; conteúdo específico documentado abaixo |

## Pareceres filológicos completos por registro

Cada entrada abaixo resume o resultado editorial em português. A **fonte original integral e os textos anterior/posterior** estão no JSON de evidências, não omitidos desta auditoria.

### A00000 · א · A

**Ordinal 1.** Aprovado sem alteração. Álef. Primeira letra do alfabeto; pode alternar com outras consoantes guturais. Exemplos de alternância: אבב, הבב, חבב, עבב; אליתא, עליתא , entre outros.

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `4db38b81bdabcfb4c17ee879cd0d96831f674cca24d3baa4238640cb8821a250`; cabeçalhos originais: א; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00001 · א · A

**Ordinal 2.** Aprovado sem alteração. Frequentemente empregado na formação de raízes secundárias de verbos do tipo ע״ע (com duplicação do segundo radical). Exemplos: אטם, טמם .

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `446710ec5a9acecb86e30de94a50351f592c98df878c90691a4f1540f88e1c5d`; cabeçalhos originais: א; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00002 · א · A

**Ordinal 3.** Aprovado sem alteração. Frequentemente empregado como consoante protética , isto é, acrescentada ao início de uma palavra. Exemplos: אגודל, גודל . Veja o prefixo אִ־ (JASTROW A00007).

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `031a9e3a516e29efdb2eb755629d53b4053d53bae694d37095e2cbeccfa9318e`; cabeçalhos originais: א; acepções/segmentos XML: 1; remissões eletrônicas: A00007.

### A00003 · א · A

**Ordinal 4.** Aprovado sem alteração. Às vezes é inserido em lugar de uma consoante radical, como em באגא = בגא ; especialmente em verbos do tipo ע״ו (com waw como segundo radical), como דָּאִיךְ , de דּוּךְ , e קָאִים , de קוּם , entre outros.

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `c69f5848775fe3274fa396378013ba7b82dcb14c32399b0145e2c7f6a5d983da`; cabeçalhos originais: א; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00004 · א · A

**Ordinal 5.** Aprovado sem alteração. No Talmude de Jerusalém , o álef inicial é frequentemente omitido. Exemplos: בָּא = אַבָּא ; מַר = אֲמַר .

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `37fa5cc8c99683a8f546d50d19d5201f1fde9715132a8fa5622854d41f91d55d`; cabeçalhos originais: א; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00005 · א · A

**Ordinal 6.** Aprovado sem alteração. Acrescentado ao final de substantivos caldaicos (aramaicos), corresponde ao ה prefixado no hebraico, no chamado estado enfático ( status emphaticus ). Exemplo: אַבָּא = הָאָב .

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `50d3c81fcc9a872f7cc03a7a51adf99f06185ea692c6be49d76448e337eade4c`; cabeçalhos originais: א; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00006 · א' · A

**Ordinal 7.** Aprovado sem alteração. Como letra numeral , significa um ou uma . Exemplo: אות א׳ = אות אחת , “uma letra”. Referência: Shabbat 104a, entre outras. Nota sobre a tradição textual: conforme o espaço disponível, edições e manuscritos alternam a palavra numeral por extenso e a respectiva letra numeral: א׳ por אחד ou אחת ; ב׳ por שנים , שתים ou שתי , etc.

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `8149c6ea4aaac9da7de872888e1aa9624f22a11af62c7eccd2382b4f45d99fd0`; cabeçalhos originais: א'; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00007 · אִ־, · A

**Ordinal 8.** Aprovado sem alteração. Prefixo com as formas אִ־, אִי־, אֶ־, אַ־ , entre outras. 1. Empregado para formar substantivos em qal , piel , afel ( hifil ) e outras formações. Exemplos: אִסְפְּקָא, אִיסְ׳, אַפְטָרָה, אַפְטַרְתָּא . 2. Com função demonstrativa. Exemplos: אִיהוּ , correspondente ao hebraico הַהוּא ; אִנָּא, אִינָא , entre outros. 3. Com função eufônica (protética): אִדְמָא = דְּמָא ; אִית , correspondente ao hebraico יֵשׁ . Ocorre especialmente antes de palavras estrangeiras iniciadas por duas consoantes, como אִסְטְרָטֵיגוֹס, אִיסְ׳ = סְטַרְטֵיגֹוס , entre outros casos.

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `c492589676742ba68e651ada7d7f31bde3ed3ca74d8b6e17843bdeeeb250159e`; cabeçalhos originais: אִ־,, אִי־,, אֶ־,, אַ־; acepções/segmentos XML: 4; remissões eletrônicas: nenhuma.

### A00008 · אַ־ · A

**Ordinal 9.** Aprovado sem alteração. Prefixo seguido de dáguexe forte , equivalente a עַל , “sobre, por cima de”. Exemplo: אַמָּרָא = עַל מָרָא . Ocorre até mesmo diante de guturais, como em אַאַבְנָא .

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `04c45063b476b8e5e2d2d5e2bc1ad30017b724db9e5fbc424508636406dc32b0`; cabeçalhos originais: אַ־; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00009 · אָאִין · A

**Ordinal 10.** Aprovado sem alteração. Forma plural de אל״ף . A entrada original consiste numa remissão ao verbete correspondente, que ainda não foi incorporado ao sublote traduzido.

**Rastreio:** `lexicons/jastrow.js` · SHA-256 da entrada-fonte `27cb93512956d20b0277779e1696d53efbd7b44d40ba8b6e21e0703d71ed4cfd`; cabeçalhos originais: אָאִין; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00011 · אֲאָרָא · A

**Ordinal 12.** Aprovado sem alteração. Remissão para אַוָּארָא ; a fonte não acrescenta acepção nesta entrada.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `66a5be1e901d3518ba3a17d4cf07c0739274a4c52e42275d4271e7e765f8f754`; cabeçalhos originais: אֲאָרָא; acepções/segmentos XML: 1; remissões eletrônicas: A00520.

### A00015 · אָב, · A

**Ordinal 16.** Aprovado sem alteração. Forma caldaica (aramaica) de אָב (“pai”); remete ao verbete אַבָּא .

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `1d33c9048a46039b3afe04465993500290a57eb27ac6a4d9349981acaf2b623b`; cabeçalhos originais: אָב,; acepções/segmentos XML: 1; remissões eletrônicas: A00020.

### A00019 · אַבָּא, · A

**Ordinal 20.** Aprovado sem alteração. Abba (“pai”), tratamento dado a estudiosos, de dignidade inferior ao título rabi ; exemplos: Abba Saul e Abba Yudan. Confrontar o homógrafo anterior, nome próprio.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `85b2cd952ec3f5d0084f27ab6c7da7b3c1c2bbc89fc466df69ce42874731cfcf`; cabeçalhos originais: אַבָּא,; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00020 · אִבָּא · C

**Ordinal 21.** Correção integrada, com testemunhos e inferências diferenciados. Aparato e remissões: Moed Katan 12b: א׳ בשלניא , bosque de Sh'lanya. Ketubot 79a remete a זַרְדְּתָא . Sanhedrin 39b: provérbio מיניה וביה א׳ ניזיל ביה נרגא , com variante ליזיל e leitura da Ag. Hatt. בנרגא (ver Rabbinovicz, nota à passagem). O segundo sentido «fruto» é remissivo, não extensão demonstrada de «bosque»; cf. אִיבָּא .

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `5901df7521ff8504e9ca11eecc170816941f99f5fe895e29736348185e749273`; cabeçalhos originais: אִבָּא; acepções/segmentos XML: 3; remissões eletrônicas: A01118.

### A00022 · אבאטיס · A

**Ordinal 23.** Aprovado sem alteração. A fonte corrige esta leitura para אֲכָאטֵיס ; não fornece definição independente.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `f69a9b9c7ff91c8321b4a6d428e13ecb64a2c6c096fdc601af1de7da961dff39`; cabeçalhos originais: אבאטיס; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00023 · אַבְאָשׁוּתָא · A

**Ordinal 24.** Aprovado sem alteração. Da raiz באש : ofensa, contrariedade, desagrado (Targum Eclesiastes 7.3).

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `fb1d0ea9a3adc2e751fc1f6dcf3216ed9eb9305d19ad9c361bb9d59e6ccfec24`; cabeçalhos originais: אַבְאָשׁוּתָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00024 · אָבַב · C

**Ordinal 25.** Correção integrada, com testemunhos e inferências diferenciados. Comparações radicais da fonte: Jastrow associa as ideias «tornar-se espesso, pesar, pressionar, rodear, entrelaçar, aquecer/brilhar» ao conjunto hipotético de raízes אב, עב, חב, גב, כב, קב ; compara חָבַב I–II, e remete a אבד, אבל, אבק, אבר, אבס, אבה . O significado lexical propriamente enunciado é «engrossar, inchar, irromper»; as aproximações de raízes são análise etimológica do autor, não ocorrências que provem todos esses sentidos.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `42df6d2ecc97dead66a59564d8a02b1f1aad2bbe348b327b1d9289ebb70bab6a`; cabeçalhos originais: אָבַב; acepções/segmentos XML: 1; remissões eletrônicas: unknown, P00009, H00008, C00029, unknown, S00024, A00152, A00188, A00199, A00181, A00018.

### A00025 · אֲבַב · A

**Ordinal 26.** Aprovado sem alteração. Equivalente aramaico do precedente: crescer, desenvolver-se, amadurecer. Targum Oseias 9.10 apresenta a forma מאבבא .

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `3547b8362d8e88205b789df55f8f45e8588b9b8d5b1ad6760588e0d3220ae64a`; cabeçalhos originais: אֲבַב; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00028 · אֶבְגְּנִיסְטֵי · A

**Ordinal 29.** Aprovado sem alteração. Adaptação do superlativo grego εὐγενέστατοι , “os mais nobres”; Jastrow recomenda corrigir a grafia para אֶוְוגִּינִיסְטָאטֵי . Rute Rabá 1.2; Midrax Samuel 1.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `b3aeb9d14bcddf026f70c10650c9f704bdcab93843bc61672a07d13a950c73a5`; cabeçalhos originais: אֶבְגְּנִיסְטֵי; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00029 · אבגרוטינה · A

**Ordinal 30.** Aprovado sem alteração. Forma remetida a אנג׳ ; a fonte não desenvolve acepção nesta entrada.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `5ebc388f34e438b427fd92d175ab364fc671fa8267388797a7a2acdf9194924f`; cabeçalhos originais: אבגרוטינה; acepções/segmentos XML: 1; remissões eletrônicas: unknown.

### A00032 · אָבֵד · C

**Ordinal 33.** Correção integrada, com testemunhos e inferências diferenciados. Acepções e expressão: o adjetivo masculino אָבֵד significa também, isoladamente, «perecível; irrecuperável». Em דבר הא׳ , Moed Katan 11a, qualifica atividade ou negócio cujo adiamento acarretaria prejuízo irrecuperável. A expressão técnica não esgota o sentido do adjetivo.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `14698e29d4413fc2e6705f38986131f4dfc609ad21864e21d83f8e57f03372bb`; cabeçalhos originais: אָבֵד; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00034 · אֲבֵדָה · A

**Ordinal 35.** Aprovado sem alteração. Entrada de remissão para אֲבֵי׳ , sem definição autônoma.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `85e729ce451553528086241a9e0eaf3a42bfdab4edafd97169f47ddb0bb6aef2`; cabeçalhos originais: אֲבֵדָה; acepções/segmentos XML: 1; remissões eletrônicas: A00107.

### A00035 · אֶבְדּוּמָא · A

**Ordinal 36.** Aprovado sem alteração. Variante de nome próprio masculino; remete a אֶבְדִּימוֹס .

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `c4ca1b54784892b8e16fe2bd3e6c86fdfcc5481b164e7e2ab8e103a27579a476`; cabeçalhos originais: אֶבְדּוּמָא; acepções/segmentos XML: 1; remissões eletrônicas: A00041.

### A00036 · אבדומא, · A

**Ordinal 37.** Aprovado sem alteração. Variantes אבדומא, אבדומה ; ver אברומא .

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `8375413cf57fd78dbbe7120a6fb2c8577f7552f908ef3986f6d24e9111a474b0`; cabeçalhos originais: אבדומא,, אבדומה; acepções/segmentos XML: 1; remissões eletrônicas: A00214.

### A00037 · אבדימי · A

**Ordinal 38.** Aprovado sem alteração. Variante do nome próprio אֶבְדִּימוֹס .

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `299df59e18562c0a3e9bfbc78beab9c571e2634e23f7485ec98dae335bfed711`; cabeçalhos originais: אבדימי; acepções/segmentos XML: 1; remissões eletrônicas: A00041.

### A00038 · אֲבַדּוֹן · A

**Ordinal 39.** Aprovado sem alteração. Do hebraico bíblico אבד : perdição, lugar de destruição, inferno; Eclesiastes Rabá a 5.8.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `b0820392063575ddb82dbaccb97c97d2bd2dc7444e2c8ac0cbd21c5c9933120f`; cabeçalhos originais: אֲבַדּוֹן; acepções/segmentos XML: 1; remissões eletrônicas: A00083.

### A00039 · אֶבְדּוֹקוֹס · C

**Ordinal 40.** Correção integrada, com testemunhos e inferências diferenciados. Variante de edição: para a carta política em Jerusalém Meguilá 3, 74a, parte inferior, Jastrow transmite as formas editoriais abreviadas קום— e קין— , com indicação de correção conforme a passagem. A equivalência טוב ילד , «boa criança», representa a forma cifrada do nome em contexto político; não a tratar como significado lexical comum.

**Rastreio:** `lexicons/jastrow-011-040.js` · SHA-256 da entrada-fonte `50d18e157e10c800b8ff4756d387b77e4068b3a43d582130fbd14768a14cc7c1`; cabeçalhos originais: אֶבְדּוֹקוֹס; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00040 · אֶבְדִּימָא · A

**Ordinal 41.** Aprovado sem alteração. Variante de אֶבְדִּימוֹס , verbete seguinte.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `7e354227fdc7eb3ee680d1ec0508822f8e46f56a779092b18b6957076f748476`; cabeçalhos originais: אֶבְדִּימָא; acepções/segmentos XML: 1; remissões eletrônicas: A00041.

### A00041 · אֶבְדִּימוֹס · C

**Ordinal 42.** Correção integrada, com testemunhos e inferências diferenciados. Identificação e bibliografia: Jastrow cita Jerusalém Ketubot 11, 34b; Jerusalém Berakhot 4, 8a para o amoraíta de Séforis, e remete ao verbete וַרְדִּימוֹס . A entrada remete ainda a Frankel, Mebo , s.v., como fonte bibliográfica; אבדומי, אבודמא, אבודמי são grafias classificadas como corrompidas pelo lexicógrafo, não nomes distintos demonstrados.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `7b2a8cb1da5483fbccd1a7fdcf5f8009f3410c19b37451ff3d173e112171aad2`; cabeçalhos originais: אֶבְדִּימוֹס; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00042 · אַבְדָּלָה · C

**Ordinal 43.** Correção integrada, com testemunhos e inferências diferenciados. Precisão das fontes: Jerusalém Berakhot 8, 12c, topo, א׳ ודאי significa «separação efetiva»; a fórmula litúrgica da Havdalá aparece em Berakhot 8, começo de 11d, e Pesahim 113a. Plural אַבְדָּלוֹת : Jerusalém Berakhot 5, 9b, parte inferior, שבעה א׳ , sete objetos ou matérias de distinção mencionados na fórmula. Jastrow equipara a forma aramaica à hebraica הַבְדָּלָה .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `6949f59c92a328d71684a68d89f493d957577a77c882267a103b22155311b502`; cabeçalhos originais: אַבְדָּלָה, אַבְדַּלְתָּא; acepções/segmentos XML: 3; remissões eletrônicas: nenhuma.

### A00043 · אַבְדָּן · C

**Ordinal 44.** Correção integrada, com testemunhos e inferências diferenciados. Aparato onomástico: para Berakhot 27b, manuscrito M. registra אַבְדָּן , ao passo que a edição lê אבידן ; o autor compara Gênesis Rabá §10 além de Jerusalém Berakhot 4, 7c, parte inferior. A interpretação do nome como contração de אבא יודן é atribuída a Jastrow.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `568eb98fc0d349a87752d50b4fa97426e84cddc2325c00a99eed74922f4773ec`; cabeçalhos originais: אַבְדָּן; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00044 · אָבְדָּן, · A

**Ordinal 45.** Aprovado sem alteração. Variantes אָבְדָּן, אוֹבְדָּן , do verbo אבד . Perda, ruína, destruição; אובדן אוכלין , desperdício de alimentos (Jerusalém Demai 7, 26a).

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `1b8e50aac9d6400cac3057165cb3c2fc0128bd782312dd4a206074a480bc36fc`; cabeçalhos originais: אָבְדָּן,, אוֹבְדָּן; acepções/segmentos XML: 1; remissões eletrônicas: A00043, A00083.

### A00045 · אַבְדָּנָא, · A

**Ordinal 46.** Aprovado sem alteração. Variantes אַבְדָּנָא, אוֹבְדָנָא , equivalente aramaico do homólogo hebraico: perda, ruína, destruição. Targum Provérbios 27.20.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `5a98d481f803f1d22acd7958a1611961351087151b539521facef94af1af3624`; cabeçalhos originais: אַבְדָּנָא,, אוֹבְדָנָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00046 · אֲבֵדְתָּא · A

**Ordinal 47.** Aprovado sem alteração. Grafia remetida à entrada אֲבֵי׳ , sem acepção própria nesta linha da fonte.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `cc5438c4e675e3116c5603700752ba4e22fd73ff2e809a0b8b173e39fa352026`; cabeçalhos originais: אֲבֵדְתָּא; acepções/segmentos XML: 1; remissões eletrônicas: A00107.

### A00047 · אבדתא · A

**Ordinal 48.** Aprovado sem alteração. Remissão textual para אֲבַרְתָּא .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `fa6135e885f5d6bd3a31c22e58efba2a4385fab6d639d0f45088abe59f080a0c`; cabeçalhos originais: אבדתא; acepções/segmentos XML: 1; remissões eletrônicas: A00230.

### A00048 · אַבָּה · A

**Ordinal 49.** Aprovado sem alteração. Abbah , pai de Samuel; ver o verbete onomástico אַבָּא II.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `823d0c46d0ccdf5782fb12ce7e5fd26c650a6af9201ff8421c8d2d2ce95d698b`; cabeçalhos originais: אַבָּה; acepções/segmentos XML: 1; remissões eletrônicas: A00018.

### A00050 · אַבָּהוּ · C

**Ordinal 51.** Correção integrada, com testemunhos e inferências diferenciados. Identificações distintas: não fundir os dois amoraítas palestinos chamados Abbahu: o primeiro, talvez da geração inicial, é referido em Jerusalém Berakhot 5, 8d (parte inferior) e Bikkurim 2, 64d (topo); o segundo é o conhecido discípulo de Rabi Yoḥanan sediado em Cesareia (Jerusalém Berakhot 2, 4b; Sucá 48b). A fonte menciona ainda amoraítas babilônicos homônimos: Shabbat 119b; Kidushin 33b (pai de Rabbah, remissão a רַבָּה ); Bava Kamma 117b (contemporâneo de Rabi Ashi, remissão a אַשֵׁי ).

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `84d6a1eae6f3378638fd28c3b1edee8214834e9e8b4f162f6e55f244590d406f`; cabeçalhos originais: אַבָּהוּ; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00052 · אֲבָהָתָא · A

**Ordinal 53.** Aprovado sem alteração. Forma plural de אַבָּא (“pai”).

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `4a048166deb76d2352b1cc4e8b1073900b65a7afe832223096259c01e87f1299`; cabeçalhos originais: אֲבָהָתָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00053 · אבהתא · A

**Ordinal 54.** Aprovado sem alteração. Grafia registrada apenas como remissão a מַמְצִיא .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `e55f7e8a6aa1417877a50097cf8d3ee58a53ebb1188adfae4d4d1d439a1ee921`; cabeçalhos originais: אבהתא; acepções/segmentos XML: 1; remissões eletrônicas: M01675.

### A00055 · אִיבּוּב אַבּוּב · C

**Ordinal 56.** Correção integrada, com testemunhos e inferências diferenciados. Aparato e acepções: Jastrow propõe relação com אנב, נבב , «ser oco», e compara בִּיב I. A flauta de cana ( של קנה ) e a de metal ( של נחושת ) ocorrem em Arakhin 2.3. Para o tubo de ferro usado para torrar grãos (Kelim 2.3; Menahot 10.4), o Arukh traz של קלאים e a edição קליות . O fitônimo medicinal «flauta de pastor» ( א׳ רוֹעֶה ) tem variantes אבובראה, אבוברואה e é identificado por Jastrow como Eupatorium (Shabbat 14.3; 109b; Jerusalém Shabbat 14, 14c); cf. חומטריא .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `1fc53d52a77b79eb988d1ce2200b6e1992aeb41614d92e6d8a89a9f939addb74`; cabeçalhos originais: אִיבּוּב אַבּוּב; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00057 · אַבּוּבְרָאֶה, · A

**Ordinal 58.** Aprovado sem alteração. Variantes אַבּוּבְרָאֶה, אַבּוּבְרוֹאֶה , equivalentes a אַבּוּב רוֹעֶה , “flauta de pastor”; ver a denominação botânica no verbete precedente.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `12a2af0656459ef496a2d5604f9cb50a1a21e4ac18b053cbd1dab66ca352514f`; cabeçalhos originais: אַבּוּבְרָאֶה,, אַבּוּבְרוֹאֶה = אַבּוּב רוֹעֶה; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00058 · אַבּוּבְרָם · A

**Ordinal 59.** Aprovado sem alteração. Nome masculino ou patronímico בר אבוברם , “Bar Abbubram”, interpretado como forma de אבו אברם (Hulin 38a).

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `b5b587510ceeed294a479fd5ed1a1ab3467af655a952024944a8edcb0ca53763`; cabeçalhos originais: אַבּוּבְרָם; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00059 · אִבּוּד · A

**Ordinal 60.** Aprovado sem alteração. Remete a אִיבּוּד .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `aa761651f380f20b58bae9fae3e81d02a87ed982699f4c5d1013086ab8381c04`; cabeçalhos originais: אִבּוּד; acepções/segmentos XML: 1; remissões eletrônicas: A01122.

### A00060 · אבוד · A

**Ordinal 61.** Aprovado sem alteração. Remete a אָכוּז .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `64aafb93d59f7d211fe0aebc96eac5dd3ab9404cc594047e07cdbddac620d9fb`; cabeçalhos originais: אבוד; acepções/segmentos XML: 1; remissões eletrônicas: A01672.

### A00061 · אַבּוּדְיָינָא, · A

**Ordinal 62.** Aprovado sem alteração. Nome masculino de pessoa não judia, associado por Jastrow a referência idolátrica (Gitin 11a). Forma alternativa אַבּוּדְיָנָא .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `28e8b848ee6fae4cdb353d0c7d37e615f9e648d4e9fcb083e6d3f40600c13369`; cabeçalhos originais: אַבּוּדְיָינָא,, אַבּוּדְיָנָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00062 · אֲבוּדְמָא, · A

**Ordinal 63.** Aprovado sem alteração. Variantes אֲבוּדְמָא, אבודמי ; ver אֶבְדִּימוֹס .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `10c7b6b2b5e9df3b90bf43e8e3a3a52794892722e009d23ed92cb909f87c75ec`; cabeçalhos originais: אֲבוּדְמָא,, אבודמי; acepções/segmentos XML: 1; remissões eletrônicas: A00041.

### A00063 · אבוורנקא, · A

**Ordinal 64.** Aprovado sem alteração. Variantes אבוורנקא, אבוורנקי ; consultar אַכְוַרְנְקָא .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `95036100d794e4be3d63f358a4128f062127b69a96b4523657da8c2b64abda89`; cabeçalhos originais: אבוורנקא,, אבוורנקי; acepções/segmentos XML: 1; remissões eletrônicas: A01676.

### A00064 · *אֵבוּז · A

**Ordinal 65.** Aprovado sem alteração. Possível aproximação com אֵבוּס ; eufemismo para extremidade posterior do corpo, nádegas (Eruvin 53b). A etimologia é apresentada como comparação, não como certeza. Ver אָכוּז .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `1ad878b1d44ee1f79246276408329cf2ecf266273cfa28b389bcce76c1efcd2b`; cabeçalhos originais: *אֵבוּז; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00065 · אֲבוֹי · A

**Ordinal 66.** Aprovado sem alteração. Do hebraico bíblico, forma exclamativa comparável a אוֹי . Significa “ai!”, “que desgraça!”. Números Rabá 10 comenta Provérbios 23.29 com האוי והאבוי , “o ai e o lamento”.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `8cf5c745347b43dabc9f446deb83b2462b945303804cb5efc53cc266a6213260`; cabeçalhos originais: אֲבוֹי; acepções/segmentos XML: 1; remissões eletrônicas: A00083.

### A00066 · אֲבוּיָה · A

**Ordinal 67.** Aprovado sem alteração. Abuyah , conhecido como pai de Eliseu (Elisha ben Abuyah). Jerusalém Hagigah 2, 77b; ver o verbete אלישע .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `4ec8f0dc0a5909a4a47ea6579996dce8a362c9db6a1f153459549908b31ffcc3`; cabeçalhos originais: אֲבוּיָה; acepções/segmentos XML: 1; remissões eletrônicas: A01880.

### A00067 · אבויין · A

**Ordinal 68.** Aprovado sem alteração. Forma de Jerusalém Shabbat 5, 8b que, segundo Jastrow, deve ser lida אִטִּין ou אִטַּיָין ; sem acepção independente.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `3558b65a7d744b6fe8b79f85587f318a158ff54810715116a217bf2a08935306`; cabeçalhos originais: אבויין; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00068 · אִבּוּל, · A

**Ordinal 69.** Aprovado sem alteração. Primeiro homógrafo אִבּוּל : luto, aflição por morte. Remissão a אִיבּוּל ; não confundir com o homógrafo seguinte relativo a portão.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `d1033e17798a8eb8d52bdb690c50163c9b2efeaaffc4302f09dfcbff3c2e67e7`; cabeçalhos originais: אִבּוּל,; acepções/segmentos XML: 1; remissões eletrônicas: A00069.

### A00069 · אִבּוּל, · C

**Ordinal 70.** Correção integrada, com testemunhos e inferências diferenciados. Flexão e variantes: o segundo homógrafo tem também forma אִיבּוּל ; o plural é אִבּוּלִים , abreviado אִיבּ׳ . Tosefta Bava Metzia 11.10: Zuckermandel imprime אין חולקין את אי׳ , contra edição הָאִבּ׳ ; a regra trata da divisão de portões de carroças entre herdeiros, condicionada ao espaço necessário para cada parte. Não confundir com אִבּוּל I, «luto».

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `50ecc92828f05709f1074a7b59d490a43fb7d24b2bfadcc051cc66442aaf1024`; cabeçalhos originais: אִבּוּל,, אִיבּוּל; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00070 · אִבּוּלָא, · C

**Ordinal 71.** Correção integrada, com testemunhos e inferências diferenciados. Texto e testemunhos: Jastrow equipara a passagem ao hebraico מבוא העיר («acesso à cidade»). Em Moed Katan 22a a contagem do luto começa מבבא דא׳ , quando os acompanhantes se afastam do acesso urbano; Ketubot 17a e Meguilá 29a delimitam uma passagem do portão ao sepultamento ( מא׳ ועד סיכרא ). O Arukh propõe alternativamente «casa de luto», relacionando à acepção de אִבּוּל I. Bava Batra 58a: manuscrito M. lê אבבא דא׳ para o portal judicial, edição בא׳ , tida por Jastrow como incorreta. Plural אִבּוּלֵי ; cf. Eruvin 6b, Yoma 11a, Targum Pseudo-Jônatas Deuteronômio 28.52 ( אבוליכון , edição de Viena אכול׳ ) e Targum Jeremias 50.26 ( אִיבּוּלָהָא , contra o texto hebraico מאבסיה ; ver Peshitta).

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `ceb8de7ae674b5901d98e814a2b0be5433de47fbd25d908b742a824850e832fa`; cabeçalhos originais: אִבּוּלָא,, אִיבּוּלָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00071 · *אִבּוּלָאֵי · C

**Ordinal 72.** Correção integrada, com testemunhos e inferências diferenciados. Interpretação concorrente: Nidá 67b, משום א׳ , é explicado por Jastrow como precaução diante da conduta grosseira dos guardas/policiais dos portões. Rashi, porém, relaciona a expressão a אבולי , entradas perigosas e semelhantes a cavernas para a casa de banhos. Essas explicações não são variantes semânticas comprovadamente equivalentes.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `457c65b79132250b97ce563a2717150b144ed5501bea3ed0994a2cfd1ef78957`; cabeçalhos originais: *אִבּוּלָאֵי; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00072 · אבולי · A

**Ordinal 73.** Aprovado sem alteração. Em Bava Batra 143a, para אאבולי , Jastrow prefere a leitura manuscrita אַבּוּלִי ואסטרטיגי ; consultar בּוּלִי II.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `8115f2e9da7f0e47ec0bc3e6963b109b20a069b0e92461f96b2028a6a55d9748`; cabeçalhos originais: אבולי; acepções/segmentos XML: 1; remissões eletrônicas: B00265.

### A00073 · אבולין · A

**Ordinal 74.** Aprovado sem alteração. Remete a אַבִּילִין .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `34addbe17a4069bdfdd90c9d84454f7b5d0e893e3ca74484e4fa9e7a6532be08`; cabeçalhos originais: אבולין; acepções/segmentos XML: 1; remissões eletrônicas: A00135.

### A00074 · (אבין) אַבּוּן · C

**Ordinal 75.** Correção integrada, com testemunhos e inferências diferenciados. Variantes de atribuição: Jerusalém Pesahim 4, início, 30c–d, transmite ר׳ אל׳ בשם ר׳ אבין e também ר׳ א׳ בשם ר׳ אל׳ , que devem ser tratadas como fórmulas textuais distintas de atribuição. A fonte cita Jerusalém Ta‘anit 1, 64c e Shevuot 6, 37a (parte inferior), além de remeter a בּוּן . O cabeçalho secundário אבין não é eliminado.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `a787106c51b5f0dc31a25beeb19f74499dc49093caf32f0d2e74b0b90f291579`; cabeçalhos originais: (אבין) אַבּוּן; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00075 · אֲבוּנָא, · A

**Ordinal 76.** Aprovado sem alteração. Abuna , nome de um amoraíta; variante אֲבוּנָה . Jerusalém Sheviit 2, 33d e outras passagens.

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `8891f3739932c7939ce316c412b08567ba26d4736160b75824c56e7d298b5e52`; cabeçalhos originais: אֲבוּנָא,, אֲבוּנָה; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00076 · אבונגרי · A

**Ordinal 77.** Aprovado sem alteração. Remete a אַכְוַנְגַּר .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `6fcd067d4acc31db3056ab15aaeb30479be850084fa4a7a420f05acd706804b5`; cabeçalhos originais: אבונגרי; acepções/segmentos XML: 1; remissões eletrônicas: A01675.

### A00078 · אֲבוּקָא · A

**Ordinal 79.** Aprovado sem alteração. Abuka , nome próprio masculino mencionado em Yalkut Lamentações 1001; ver אֲבִיקָה .

**Rastreio:** `lexicons/jastrow-041-080.js` · SHA-256 da entrada-fonte `b525e5f1f38640574d46e6d3a44e90ac1063de507954cc26e7946aa23ce40360`; cabeçalhos originais: אֲבוּקָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00080 · *אַבּוּרְגְּנָא, · C

**Ordinal 81.** Correção integrada, com testemunhos e inferências diferenciados. Variantes, empréstimo e interpretação: o plural é אַבּוּרְגְּנֵי , também abreviado אַבְּרוּ׳ . A relação com אִמְבּוּרְקְלוֹן e com frase palestina importada e deformada na Babilônia é análise proposta por Jastrow, não empréstimo demonstrado. Eruvin 62a: בריאה במוהרקי וא׳ , aluguel juridicamente eficaz quando acompanhado do direito de colocar cadeiras e assentos no pátio. Para מוהרקי , o autor propõe corrupção de גוהרקי ou גלופקרי e compara גמורקין ; há interpretações concorrentes sugeridas pelo vocábulo transmitido, cf. o lema correspondente. A comparação de Rashi com a Mishná não é prova de uma forma original única.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `18f3e043e16ce87652f4694423f0edb07a8703443b19ac26dff31bc89f2dca9a`; cabeçalhos originais: *אַבּוּרְגְּנָא,, אַבְּרוּגְנָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00081 · אבורנקי · A

**Ordinal 82.** Aprovado sem alteração. Grafia remetida a אַכְוַרְנְקָא (abreviada na fonte como אַכְוַר׳ ).

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `2c34e6e6454543f944248c9e2cc147960f0fa3143988b681d58eb2244ea5da27`; cabeçalhos originais: אבורנקי; acepções/segmentos XML: 1; remissões eletrônicas: unknown.

### A00082 · אבזייני · A

**Ordinal 83.** Aprovado sem alteração. Remete à entrada אֲפוּזְיָינֵי .

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `a60d706cfc4ef608acabb24b223e782976758569d47eb0a14e54f081225ee71c`; cabeçalhos originais: אבזייני; acepções/segmentos XML: 1; remissões eletrônicas: A02610.

### A00084 · אֲבִזְרָא, · C

**Ordinal 85.** Correção integrada, com testemunhos e inferências diferenciados. Aparato de Menahot: além de Sanhedrin 74b ( אינהו וכל אבזרייהו , «eles e tudo que lhes é acessório»), Menahot 73b traz עולה וכל אֲבִיזְרָהָא no Arukh e em Rashi a Sanhedrin, contra leitura editorial חבירתא , para a qual Jastrow recomenda correção contextual. O paralelo árabe bazr, abzār é comparação proposta pelo autor, não prova de uma origem linguística única. Preservam-se singular אֲבִזְרָא, אֲבִיזְרָא e plural אֲבִזְרֵי, אֲבִיזְרֵי .

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `3aa1849d90a381e52d03c589ada48805bbd25d92305771a12b5374fd3cf45ceb`; cabeçalhos originais: אֲבִזְרָא,, אֲבִיזְרָא; acepções/segmentos XML: 1; remissões eletrônicas: B00466, A00083.

### A00085 · אבחטס · A

**Ordinal 86.** Aprovado sem alteração. Remissão para אַמְבָּטִיס e אבהנוס .

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `a61c3e446366f1e574fbf5572d8f5c254c6df1039990818c77e6218789c338f3`; cabeçalhos originais: אבחטס; acepções/segmentos XML: 1; remissões eletrônicas: A01975, A00051.

### A00086 · אבטא · A

**Ordinal 87.** Aprovado sem alteração. Remete à forma אַבְּטִי .

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `42aabe3517f7944fe94cfc42f2c0302cdde73f957e47ca9f3ee4635632d9386c`; cabeçalhos originais: אבטא; acepções/segmentos XML: 1; remissões eletrônicas: A00095.

### A00087 · *אַבְטָא · C

**Ordinal 88.** Correção integrada, com testemunhos e inferências diferenciados. Distinções textuais: no sentido primeiro «ventre, barriga», Jastrow compara as raízes בט, בוט, בוץ, בטט ; por metonímia, «odre de vinho de couro». Avodah Zarah 34b traz א׳ דטייעי , na tradição do Arukh אכטא , odre usado por viajantes. Jerusalém Yevamot 4, 5d remete, em contraste, a אֶפְטָא ; para אבטאות , cf. אַבְּטִי . Não fundir essas remissões em uma única forma comprovada.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `9640bc211489cf645e8fcf986c40bf7020874e33bc78c3d01079ff2495b147d8`; cabeçalhos originais: *אַבְטָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00088 · אבטו · A

**Ordinal 89.** Aprovado sem alteração. Remete a אַבְּטַי .

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `22c9b4bb1c007ddea607be7d24f708afa7b135c5d7d5e2bc54c6ef1abef2b176`; cabeçalhos originais: אבטו; acepções/segmentos XML: 1; remissões eletrônicas: A00095.

### A00089 · אַבְטוֹלוֹס, · A

**Ordinal 90.** Aprovado sem alteração. Variantes אַבְטוֹלוֹס, אבטוליס do nome próprio registrado no verbete seguinte.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `82f9eb50a7a927ef1d30a801c82a5506c4efd0a8c68d8aaa69828dba1437ea8e`; cabeçalhos originais: אַבְטוֹלוֹס,, אבטוליס; acepções/segmentos XML: 1; remissões eletrônicas: A00090.

### A00090 · אַבְטוֹלְמוֹס · C

**Ordinal 91.** Correção integrada, com testemunhos e inferências diferenciados. Testemunhos onomásticos: Eruvin 3.4 (35a) na edição registra אַבְטוֹלְמוֹס ; manuscrito M. tem אבטולס . Jerusalém Eruvin 21a transmite אבטילס , e Êxodo Rabá §21 contrapõe אבטלוס a אבטוליס . Moed Katan 18a registra אֲבִיטוּל , provavelmente abreviado segundo Jastrow, amoraíta apelidado ספראה , «o escriba»; ver Rabbinovicz à passagem. A origem de Πτολεμαῖος ou Εὐπτόλεμος/Εὐπόλεμος continua hipotética.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `cd5b25731cfa76cc3ada9e790b6c4516aceb43b47591a6b8f25c5ca239f34239`; cabeçalhos originais: אַבְטוֹלְמוֹס; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00091 · אַבְטוֹמְטוֹס · C

**Ordinal 92.** Correção integrada, com testemunhos e inferências diferenciados. Crítica da leitura grega: o Musaf à passagem de Midraxe dos Salmos 1, 5 lê אבטומטוס , contra a edição טומטום , que Jastrow considera sujeita a correção. Como alternativa que julga melhor, ele propõe אַבְטוֹמְטוֹן , do grego neutro αὐτόματον («acaso»), distinto do adjetivo αὐτόματος , «que ocorre por si». A discussão filosófica sobre um mundo supostamente sem criador representa explicação contextual da passagem, não uma segunda acepção atestada da palavra.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `9d997d37212928db589058a544184d439f0de308be10556d479d66d9bbd813c4`; cabeçalhos originais: אַבְטוֹמְטוֹס; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00092 · *אַבְטוֹנִיּוֹת · C

**Ordinal 93.** Correção integrada, com testemunhos e inferências diferenciados. Formas, citações e grau de certeza: Jastrow equipara אַבְטוֹנִיּוֹת a אַבְטוֹנוֹמִיּוֹת e ao grego αὐτονομία para cidades com suas próprias leis ou jurisdições. Jerusalém Meguilá 1, 70a, parte inferior, imprime שני א׳ , cujo numeral deve ser feminino שתי , como emenda de Jastrow; Jerusalém Bava Batra 3, 14a apresenta forma abreviada אבטנ׳ . Bekhorot 55a, edição, traz שני אבטילאות , que Jastrow recomenda corrigir; o Arukh registra אבטלאות, אבטליות . O autor compara corrupções gráficas de אַגְרוֹנִימוֹס ; não equiparar essas duas famílias de vocábulos sem demonstração.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `b3cc1c71f802d602c97e297d1968de108e5d4952b40d28c45057ef97fc7d4978`; cabeçalhos originais: *אַבְטוֹנִיּוֹת; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00093 · אַבְטַח · A

**Ordinal 94.** Aprovado sem alteração. Remete a בְּטַח , acepção ou homógrafo II.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `225a32bbbc703f1eda53c000fad94ed1351fc12a4e7370f8463da91171a4b974`; cabeçalhos originais: אַבְטַח; acepções/segmentos XML: 1; remissões eletrônicas: B00500.

### A00094 · אַבְטָחָה · C

**Ordinal 95.** Correção integrada, com testemunhos e inferências diferenciados. Limite da entrada original: o próprio Jastrow registra apenas a equivalência אַבְטָחָה = הַבְטָחָה , sem citar texto nem desenvolver acepções. A explicação portuguesa «promessa, garantia» decorre do significado da forma hebraica à qual o autor remete, e não de atestação separada apresentada nesta entrada. Preservar a natureza remissiva do verbete.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `ff5cf7f49c4877996bb7203a0de2cf5936866b9856fff3c97ebfbe12fee39a16`; cabeçalhos originais: אַבְטָחָה; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00095 · אַבְּטַי · A

**Ordinal 96.** Aprovado sem alteração. Forma de Tosefta Oholot 13.3 (edição Zuckermandel, variante אבטו ); remete a בְּטַח II.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `4f71981890c415fd1586819647f4399d5e409e2b1b13fb89f8f4eacf42beaecd`; cabeçalhos originais: אַבְּטַי; acepções/segmentos XML: 1; remissões eletrônicas: B00500.

### A00096 · אַבְּטִי · A

**Ordinal 97.** Aprovado sem alteração. Remete a אַמְבְּטִי .

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `fee4357ad0d9be2ca417cbb9c414f414b5dd64e15ef550dc104846be2445f073`; cabeçalhos originais: אַבְּטִי; acepções/segmentos XML: 1; remissões eletrônicas: A01973.

### A00098 · *אָבְטְיוֹנָא · C

**Ordinal 99.** Correção integrada, com testemunhos e inferências diferenciados. Referências técnicas: além de Jerusalém Shabbat 6, 8c (parte inferior), Jastrow indica Perl., Et. St. , p. 103, e Du Cange, léxico latino, s.v. para a relação com ὀπτίων e latim optio . A definição «comissário; encarregado do aprovisionamento no exército romano» é equivalência funcional atribuída à fonte, não identificação comprovada de posto moderno.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `f46f6c8346f5c3964f6a6ad493363fa47741d4413da852e71bede62356d6d66f`; cabeçalhos originais: *אָבְטְיוֹנָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00099 · אֲבַטִּיחַ · A

**Ordinal 100.** Aprovado sem alteração. Do hebraico bíblico, comparado por Jastrow a raiz relativa a inchar; melão. Maaserot 1.5; plural אֲבַטִּיחִים (Maaserot 1.4).

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `7a2821193268e03207d2bd98e46d02740a94079c3f58871d7f18d7a08e5a8a8d`; cabeçalhos originais: אֲבַטִּיחַ; acepções/segmentos XML: 1; remissões eletrônicas: B00498.

### A00100 · אֲבַטִּיחָא · A

**Ordinal 101.** Aprovado sem alteração. Equivalente aramaico do precedente; plurais אֲבַטִּיחַיָּא, אֲבַטִּיחִין . Targum Onkelos Números 11.5; Jerusalém Sanhedrin 7, 25d.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `5706049691137599d087e14fa4167a5e354ae052d4f3e5d34919aea1277356bf`; cabeçalhos originais: אֲבַטִּיחָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00101 · אבטילאות · A

**Ordinal 102.** Aprovado sem alteração. Remissão para אַבְטוֹנִיּוֹת , “cidades dotadas de autonomia jurisdicional”.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `545f1c0fc781fef443917f6545765c15bd6ea10d345ff2d3e992fddc243b8312`; cabeçalhos originais: אבטילאות; acepções/segmentos XML: 1; remissões eletrônicas: A00092.

### A00102 · אַבְטִילוֹס · A

**Ordinal 103.** Aprovado sem alteração. Forma abreviada de אַבְטוֹלְמוֹס (Abtolmos).

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `2f112c12b25da62f5135550ca1f4f0f83051b7a25df6cef78733cc310639d8a7`; cabeçalhos originais: אַבְטִילוֹס; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00103 · אַבְטִינָס · A

**Ordinal 104.** Aprovado sem alteração. Abtinas , nome masculino. בית אבטינס , “Casa de Abtinas”: família sacerdotal que guardava o segredo de preparar o incenso aromático para o Templo (Yoma 3.11; 1.5).

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `e39aaca8ba473dbb0fcbda25d842510a0cd84d2fbc573fdbf12eb91d7626db2c`; cabeçalhos originais: אַבְטִינָס; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00104 · אַבְטָלָה · A

**Ordinal 105.** Aprovado sem alteração. Equivalente a הַבְטָלָה ; da raiz בטל : inatividade, ociosidade, desperdício. נר של אבטלה , luz acesa sem necessidade (Jerusalém Beitzá 5, 63b); על האבטלה , por causa da perda de tempo (Jerusalém Sheviit 7, 37c).

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `fc9181012577aac8ca10cdb1eae5727ba4fb76d2027f90048383f0e50f17ae4e`; cabeçalhos originais: אַבְטָלָה; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00105 · אַבְטַלְיוֹן · C

**Ordinal 106.** Correção integrada, com testemunhos e inferências diferenciados. Função e identificação histórica: Jastrow descreve אַבְטַלְיוֹן como juiz principal ( chief justice ) do tribunal do Sinédrio nos tempos de Hircano II e Herodes; trata a forma Πολλίων ( Pollio ) em Josefo como helenização greco-romana do nome. As referências são Avot 1.10–11, Eduyot 1.3 e Yoma 71b. A atribuição onomástica segue o lexicógrafo, sem equivaler a nova verificação independente de Josefo.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `b9e7e18d9ad0c89f04c988a4c250b840d69edc08db2d748101c565e49488fe57`; cabeçalhos originais: אַבְטַלְיוֹן; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00106 · אבטניות · A

**Ordinal 107.** Aprovado sem alteração. Remissão para אַבְטוֹנִיּוֹת .

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `54344ea0aca74cf16954cf13a520a7b67efd5517c0730902589550f7fb119d64`; cabeçalhos originais: אבטניות; acepções/segmentos XML: 1; remissões eletrônicas: A00092.

### A00107 · אָבֵי, · C

**Ordinal 108.** Correção integrada, com testemunhos e inferências diferenciados. Raiz e leitura alternativa: no sentido «querer, consentir, estar disposto», Jastrow parte do hebraico אָבָה e compara ideias de «pressionar, rodear, abraçar» relacionadas a אָבַב , além de אָוָה, חָפֵץ . Targum Onkelos Deuteronômio 25.7 é o exemplo principal. No Targum Provérbios 29.11, edição Wil(na), a forma מאבה é por Jastrow emendada para מֵאֲכָהּ (ver מאך ), portanto a leitura editorial não comprova esta raiz.

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `9dbdbd2dc07f64987f2e119ab2d025896ba13b42612175c21e36f3a6b23aaf24`; cabeçalhos originais: אָבֵי,, אָבָה; acepções/segmentos XML: 1; remissões eletrônicas: A00018, A00083.

### A00108 · אביא · A

**Ordinal 109.** Aprovado sem alteração. Remete à forma אביה .

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `014705752a1f93bed4571ef477edb220cc2684d3ed56cb1b1ebe660960e42760`; cabeçalhos originais: אביא; acepções/segmentos XML: 1; remissões eletrônicas: A00115.

### A00109 · אָבִיב · C

**Ordinal 110.** Correção integrada, com testemunhos e inferências diferenciados. Precisão calendárica: אָבִיב designa primeiro estágio de maturação, especialmente da cevada; época do início dessa safra; e a oferta das primícias na Páscoa. Rosh Hashaná 21a interpreta Deuteronômio 16.1 ( שמור א׳ ) como exigência de observar a maturação da estação equinocial para que ocorra no mês de nisã, regra de intercalação; Menahot 84a é outro testemunho. A conclusão calendárica é explicação da fonte, não simples glosa moderna para «primavera».

**Rastreio:** `lexicons/jastrow-081-110.js` · SHA-256 da entrada-fonte `24a7d6f1e80819ec662e91ad030216f42dad13f124549db3a9b75676233704bb`; cabeçalhos originais: אָבִיב; acepções/segmentos XML: 2; remissões eletrônicas: A00083.

### A00113 · אֲבִידַרְנָא · C

**Ordinal 114.** Correção integrada, com testemunhos e inferências diferenciados. Distribuição de variantes: Avodah Zarah 65a, topo, cita o amigo não judeu de Rabi Judá; o manuscrito M. apresenta אבינדרא , ao passo que outra leitura variante é אבי דרבא . Jastrow remete às observações de Rabbinovicz à passagem; as duas formas não devem ser atribuídas indistintamente ao mesmo manuscrito.

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `76053e64c8019b36c37668311dea6e53c1f34e3b8cd6cf3bb430db9d39c52d30`; cabeçalhos originais: אֲבִידַרְנָא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00114 · אֲבֵידְתָּא · A

**Ordinal 115.** Aprovado sem alteração. Equivalente aramaico de אֲבֵידָה (“objeto extraviado; perda”). Targum Êxodo 22.8; Bava Metzia 23a, 27b e 28b.

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `23949b58fddceddddde0bb086d041a94c257a8ba2fccd25ce1ace038da077c46`; cabeçalhos originais: אֲבֵידְתָּא; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00115 · אביה, · A

**Ordinal 116.** Aprovado sem alteração. Grafias אביה, אביא remetidas a אכזווייא e אַסְיָא ; não há definição autônoma na fonte.

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `a799980af99dcf05aa19e383884522bb6cb86671ccb586c3e018d545f967b744`; cabeçalhos originais: אביה,, אביא; acepções/segmentos XML: 1; remissões eletrônicas: A01677, A02428.

### A00116 · אַבְיוּ · C

**Ordinal 117.** Correção integrada, com testemunhos e inferências diferenciados. Aparato da elegia: בַּר אַבְיוּ , «Bar Abyu», é identificado por Jastrow como poeta de versos fúnebres, não autor de elegias necessariamente conservadas. Yevamot 103a e Moed Katan 25b: Arukh registra בר אביו , enquanto as edições apresentam אובא, אבין e há leituras manuscritas אבו, איבו (ver Rabbinovicz, nota à passagem).

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `d74e5287865e4853052b8b3fa00a7c6d125928d39119cbf73fc35ce0daf3df95`; cabeçalhos originais: אַבְיוּ; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00117 · אֶבְיוֹן · C

**Ordinal 118.** Correção integrada, com testemunhos e inferências diferenciados. Etimologia homilética e testemunhos: Levítico Rabá §34 explica o nome «necessitado» por שהוא מתאב לכל , «porque deseja tudo»; Yalkut à mesma passagem registra מתאוה . Trata-se de jogo exegético sobre o verbo de desejar, não de uma derivação histórica comprovada. Outros testemunhos: Gênesis Rabá §71 e Bava Metzia 111b.

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `f41b27513343d1c0d841581a0c8fbe2d00dd0ed6e5c370d7da3ca073f16c8688`; cabeçalhos originais: אֶבְיוֹן; acepções/segmentos XML: 1; remissões eletrônicas: A00083.

### A00118 · אֲבִיּוֹנָה · A

**Ordinal 119.** Aprovado sem alteração. Designa a alcaparreira ou o fruto da alcaparra, ao qual Jastrow atribui efeitos estimulantes das sementes. Plural אִבְיוֹנוֹת . Maaserot 4.6 e outras passagens.

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `74a7e18d30c19c93e5b8c3fc83c93a9c0209a1d2e87dd2236673a245bc9c16ca`; cabeçalhos originais: אֲבִיּוֹנָה; acepções/segmentos XML: 1; remissões eletrônicas: A00083.

### A00119 · אֶבְיוֹנָה · A

**Ordinal 120.** Aprovado sem alteração. Forma dialetal, com plural אֶבְיוֹנוֹת , remetida a חֶבְיוֹנָה . Tosefta Kelim, Bava Kamma 2.2; a edição Zuckermandel apresenta אובינות .

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `0a6ef4de0f8f682e89cb88490bbc4d1008d01d9a1a81201d16ec9dcd86f6e0d9`; cabeçalhos originais: אֶבְיוֹנָה; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00120 · אֶבְיוֹנוּת · A

**Ordinal 121.** Aprovado sem alteração. Derivado de אֶבְיוֹן (“pobre”): estado de pobreza, necessidade, carência ou aflição. Midrax dos Salmos ao Salmo 70, fim.

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `357340b2db83d431582f41271a2f4b609320fb4924e36d4a0dd75631aae6a3fd`; cabeçalhos originais: אֶבְיוֹנוּת; acepções/segmentos XML: 1; remissões eletrônicas: nenhuma.

### A00122 · אֲבִיזְרָא · A

**Ordinal 123.** Aprovado sem alteração. Variante ortográfica remetida a אֲבִזְרָא (“especiaria; elemento acessório”).

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `b998a8e93717e0c4683bc9c5295705508fac417b3cf91bfab5354b45b5102a05`; cabeçalhos originais: אֲבִיזְרָא; acepções/segmentos XML: 1; remissões eletrônicas: A00084.

### A00123 · אַבַּיִּי · C

**Ordinal 124.** Correção integrada, com testemunhos e inferências diferenciados. Homônimos e defeito de transcrição: o XML digital repete, literalmente, o fragmento inglês «1) a renowned Babyl.» no início do primeiro sentido; a repetição é tratada como anomalia de extração ou edição, não como duas acepções nem como repetição que deva aparecer na tradução. A entrada identifica Abaye, nome pessoal נַחְמֵנִי , como célebre amoraíta babilônico (Ketubot 65a); uma segunda categoria trata de outros amoraítas homônimos (Ketubot 94a; Eruvin 62a). Não se confunde esse antropônimo com אַבָּיִי , remissão ao termo «oração» no registro seguinte.

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `bd66adedcf9d403cb794dcb55c11461186428c3ae027266d6226ac7c74f95d67`; cabeçalhos originais: אַבַּיִּי; acepções/segmentos XML: 3; remissões eletrônicas: nenhuma.

### A00124 · אַבָּיִי · A

**Ordinal 125.** Aprovado sem alteração. Remete a אַבָּיָיה (“oração”). Não confundir com o nome próprio Abaye.

**Rastreio:** `lexicons/jastrow-111-140.js` · SHA-256 da entrada-fonte `2b4ad5fd428d42f3af967478585a71a80f3badf2909004c01420ec90b6256f30`; cabeçalhos originais: אַבָּיִי; acepções/segmentos XML: 1; remissões eletrônicas: A00126.


## Evidências e continuidade

- [Matriz integral deste lote](JASTROW-2026-10-11-lote-002-100-evidencias.json): 100 registros individualizados com o XML integral.
- [Checkpoint acumulado](jastrow-auditoria-unica-progresso.json): 200 IDs auditados, sem repetições; 109 A, 91 C, 0 P.
- Auditoria do lote anterior permanece independente em [evidências anteriores](JASTROW-2026-10-11-auditoria-unica-100-evidencias.json).
- Próxima seleção sem repetição: começar por `A00125` e avançar por ID canônico efetivamente incorporado, pulando os IDs já marcados no checkpoint, sem assumir que as entradas não incorporadas depois de `A00599` estejam disponíveis.
- A integração por PR com `chat-gpt-commits` não é efetuada nesta operação independente da auditoria. `main` não é alterada.


**Resultados dos testes estáticos:** [JASTROW-2026-10-11-lote-002-100-testes.json](JASTROW-2026-10-11-lote-002-100-testes.json). A prova limita-se a JS/ID/targets, não a DOM real.
