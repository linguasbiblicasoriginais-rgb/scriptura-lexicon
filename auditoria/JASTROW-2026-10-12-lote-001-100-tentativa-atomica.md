# JASTROW — tentativa de homologação atômica, lote 001 (A00000–A00099)

**Data:** 12/10/2026. **Status:** certificação NÃO concluída; fichas individuais abertas com pendências verificáveis, sem alterar fontes nem homologar por extrapolação.

## Escopo e decisões

- **100 registros selecionados** (ordinais 1–100), cada um com ID canônico distinto. A fonte é Marcus Jastrow, *A Dictionary of the Targumim, the Talmud Babli and Yerushalmi, and the Midrashic Literature*, XML canônico Sefaria-Data, commit `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`.
- **Pareceres filológicos digitais preexistentes:** A=58, C=42, P=0. A revisão digital anterior é preservada, não refeita artificialmente. Fontes dos pareceres: `auditoria/JASTROW-2026-10-11-auditoria-unica-100-evidencias.json` e `auditoria/JASTROW-2026-10-11-lote-002-100-evidencias.json`.
- **Correções ainda não integradas:** 42/42 registros historicamente C apresentaram conteúdo diferente nos módulos `lexicons/jastrow-011-040.js`, `041-080.js`, `081-110.js` entre `chat-gpt-correcoes` e `chat-gpt-commits`. Nenhum dos 58 pareceres A foi encontrado nessa lista de alterações. Essa correspondência foi verificada com a comparação das propriedades de cada registro nas duas branches, e não inferida apenas de mudanças de arquivo.
- **Riscos filológicos específicos do intervalo:** 47 registros com remissões XML e 27 com múltiplos cabeçalhos. Os exemplos/citações em testemunhos rabínicos e a validação de páginas impressas não foram universalmente rechecados fora do XML digital.
- **Teste de navegador anterior:** [Chromium #38214646245](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38214646245), sucesso geral para os 600. **Nova bateria específica de 100:** [execução #38260565698](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38260565698); resultado a consultar, não antecipar. A bateria calcula SHA-256, verifica abertura por ponteiro e teclado em todos os 100 em duas resoluções, remissões HTML/âncoras internas, RTL e amostragem axe de 10/100 por perfil. Aprovação funcional não substitui colação filológica nem merge.
- **Homologação:** `AUDITORIA_CONCLUIDA = 0/100` nesta publicação documental. Não foram criados PR/merge pelo processo de auditoria. A integração independente deve resolver o delta sem perder as demais fontes, realizar os testes e confirmar `merged=true` e presença do conteúdo publicado; nenhuma alteração é feita em `main`.

## Referência individual (100/100)

A matriz JSON anexa preserva para cada ID o lema, os cabeçalhos da fonte, SHA-256, identificação do parecer histórico, nota de decisão, referências `rid`, módulo afetado, dez controles (incluindo estados pendentes) e motivo da recusa do selo. A tabela abaixo é somente um índice, não substitui as fichas.

| Ordinal | ID | Lema | Parecer histórico | Remissões XML | Correção ausente do consolidado | Estado atômico |
|---:|---|---|:---:|---:|:---:|---|
| 1 | `A00000` | א | A | 0 | não | BLOQUEADA |
| 2 | `A00001` | א | A | 0 | não | BLOQUEADA |
| 3 | `A00002` | א | A | 1 | não | BLOQUEADA |
| 4 | `A00003` | א | A | 0 | não | BLOQUEADA |
| 5 | `A00004` | א | A | 0 | não | BLOQUEADA |
| 6 | `A00005` | א | A | 0 | não | BLOQUEADA |
| 7 | `A00006` | א' | A | 0 | não | BLOQUEADA |
| 8 | `A00007` | אִ־, | A | 0 | não | BLOQUEADA |
| 9 | `A00008` | אַ־ | A | 0 | não | BLOQUEADA |
| 10 | `A00009` | אָאִין | A | 0 | não | BLOQUEADA |
| 11 | `A00010` | אאלר"ן | C | 0 | SIM | BLOQUEADA |
| 12 | `A00011` | אֲאָרָא | A | 1 | não | BLOQUEADA |
| 13 | `A00012` | אַב־, | C | 0 | SIM | BLOQUEADA |
| 14 | `A00013` | אָב, | C | 0 | SIM | BLOQUEADA |
| 15 | `A00014` | אָב, | C | 3 | SIM | BLOQUEADA |
| 16 | `A00015` | אָב, | A | 1 | não | BLOQUEADA |
| 17 | `A00016` | אֵב, | C | 1 | SIM | BLOQUEADA |
| 18 | `A00017` | אַבָּא, | C | 1 | SIM | BLOQUEADA |
| 19 | `A00018` | אַבָּא, | C | 2 | SIM | BLOQUEADA |
| 20 | `A00019` | אַבָּא, | A | 0 | não | BLOQUEADA |
| 21 | `A00020` | אִבָּא | C | 1 | SIM | BLOQUEADA |
| 22 | `A00021` | אַכְאָבִית, | C | 1 | SIM | BLOQUEADA |
| 23 | `A00022` | אבאטיס | A | 0 | não | BLOQUEADA |
| 24 | `A00023` | אַבְאָשׁוּתָא | A | 0 | não | BLOQUEADA |
| 25 | `A00024` | אָבַב | C | 11 | SIM | BLOQUEADA |
| 26 | `A00025` | אֲבַב | A | 0 | não | BLOQUEADA |
| 27 | `A00026` | אִבְּבָא | C | 1 | SIM | BLOQUEADA |
| 28 | `A00027` | אֶבְגִּינוֹס, | C | 0 | SIM | BLOQUEADA |
| 29 | `A00028` | אֶבְגְּנִיסְטֵי | A | 0 | não | BLOQUEADA |
| 30 | `A00029` | אבגרוטינה | A | 1 | não | BLOQUEADA |
| 31 | `A00030` | אָבַד | C | 2 | SIM | BLOQUEADA |
| 32 | `A00031` | אֲבַּד, | C | 0 | SIM | BLOQUEADA |
| 33 | `A00032` | אָבֵד | C | 0 | SIM | BLOQUEADA |
| 34 | `A00033` | אַבְדָּא | C | 0 | SIM | BLOQUEADA |
| 35 | `A00034` | אֲבֵדָה | A | 1 | não | BLOQUEADA |
| 36 | `A00035` | אֶבְדּוּמָא | A | 1 | não | BLOQUEADA |
| 37 | `A00036` | אבדומא, | A | 1 | não | BLOQUEADA |
| 38 | `A00037` | אבדימי | A | 1 | não | BLOQUEADA |
| 39 | `A00038` | אֲבַדּוֹן | A | 1 | não | BLOQUEADA |
| 40 | `A00039` | אֶבְדּוֹקוֹס | C | 0 | SIM | BLOQUEADA |
| 41 | `A00040` | אֶבְדִּימָא | A | 1 | não | BLOQUEADA |
| 42 | `A00041` | אֶבְדִּימוֹס | C | 0 | SIM | BLOQUEADA |
| 43 | `A00042` | אַבְדָּלָה | C | 0 | SIM | BLOQUEADA |
| 44 | `A00043` | אַבְדָּן | C | 0 | SIM | BLOQUEADA |
| 45 | `A00044` | אָבְדָּן, | A | 2 | não | BLOQUEADA |
| 46 | `A00045` | אַבְדָּנָא, | A | 0 | não | BLOQUEADA |
| 47 | `A00046` | אֲבֵדְתָּא | A | 1 | não | BLOQUEADA |
| 48 | `A00047` | אבדתא | A | 1 | não | BLOQUEADA |
| 49 | `A00048` | אַבָּה | A | 1 | não | BLOQUEADA |
| 50 | `A00049` | אָבָה | C | 1 | SIM | BLOQUEADA |
| 51 | `A00050` | אַבָּהוּ | C | 0 | SIM | BLOQUEADA |
| 52 | `A00051` | אבהנוס, | C | 0 | SIM | BLOQUEADA |
| 53 | `A00052` | אֲבָהָתָא | A | 0 | não | BLOQUEADA |
| 54 | `A00053` | אבהתא | A | 1 | não | BLOQUEADA |
| 55 | `A00054` | אִבּוּ, | C | 0 | SIM | BLOQUEADA |
| 56 | `A00055` | אִיבּוּב אַבּוּב | C | 0 | SIM | BLOQUEADA |
| 57 | `A00056` | אַבּוּב, | C | 0 | SIM | BLOQUEADA |
| 58 | `A00057` | אַבּוּבְרָאֶה, | A | 0 | não | BLOQUEADA |
| 59 | `A00058` | אַבּוּבְרָם | A | 0 | não | BLOQUEADA |
| 60 | `A00059` | אִבּוּד | A | 1 | não | BLOQUEADA |
| 61 | `A00060` | אבוד | A | 1 | não | BLOQUEADA |
| 62 | `A00061` | אַבּוּדְיָינָא, | A | 0 | não | BLOQUEADA |
| 63 | `A00062` | אֲבוּדְמָא, | A | 1 | não | BLOQUEADA |
| 64 | `A00063` | אבוורנקא, | A | 1 | não | BLOQUEADA |
| 65 | `A00064` | *אֵבוּז | A | 0 | não | BLOQUEADA |
| 66 | `A00065` | אֲבוֹי | A | 1 | não | BLOQUEADA |
| 67 | `A00066` | אֲבוּיָה | A | 1 | não | BLOQUEADA |
| 68 | `A00067` | אבויין | A | 0 | não | BLOQUEADA |
| 69 | `A00068` | אִבּוּל, | A | 1 | não | BLOQUEADA |
| 70 | `A00069` | אִבּוּל, | C | 0 | SIM | BLOQUEADA |
| 71 | `A00070` | אִבּוּלָא, | C | 0 | SIM | BLOQUEADA |
| 72 | `A00071` | *אִבּוּלָאֵי | C | 0 | SIM | BLOQUEADA |
| 73 | `A00072` | אבולי | A | 1 | não | BLOQUEADA |
| 74 | `A00073` | אבולין | A | 1 | não | BLOQUEADA |
| 75 | `A00074` | (אבין) אַבּוּן | C | 0 | SIM | BLOQUEADA |
| 76 | `A00075` | אֲבוּנָא, | A | 0 | não | BLOQUEADA |
| 77 | `A00076` | אבונגרי | A | 1 | não | BLOQUEADA |
| 78 | `A00077` | אֵבוּס, | C | 1 | SIM | BLOQUEADA |
| 79 | `A00078` | אֲבוּקָא | A | 0 | não | BLOQUEADA |
| 80 | `A00079` | אֲבוּקָה | C | 0 | SIM | BLOQUEADA |
| 81 | `A00080` | *אַבּוּרְגְּנָא, | C | 0 | SIM | BLOQUEADA |
| 82 | `A00081` | אבורנקי | A | 1 | não | BLOQUEADA |
| 83 | `A00082` | אבזייני | A | 1 | não | BLOQUEADA |
| 84 | `A00083` | אַבְזָקַת, | C | 0 | SIM | BLOQUEADA |
| 85 | `A00084` | אֲבִזְרָא, | C | 2 | SIM | BLOQUEADA |
| 86 | `A00085` | אבחטס | A | 2 | não | BLOQUEADA |
| 87 | `A00086` | אבטא | A | 1 | não | BLOQUEADA |
| 88 | `A00087` | *אַבְטָא | C | 0 | SIM | BLOQUEADA |
| 89 | `A00088` | אבטו | A | 1 | não | BLOQUEADA |
| 90 | `A00089` | אַבְטוֹלוֹס, | A | 1 | não | BLOQUEADA |
| 91 | `A00090` | אַבְטוֹלְמוֹס | C | 0 | SIM | BLOQUEADA |
| 92 | `A00091` | אַבְטוֹמְטוֹס | C | 0 | SIM | BLOQUEADA |
| 93 | `A00092` | *אַבְטוֹנִיּוֹת | C | 0 | SIM | BLOQUEADA |
| 94 | `A00093` | אַבְטַח | A | 1 | não | BLOQUEADA |
| 95 | `A00094` | אַבְטָחָה | C | 0 | SIM | BLOQUEADA |
| 96 | `A00095` | אַבְּטַי | A | 1 | não | BLOQUEADA |
| 97 | `A00096` | אַבְּטִי | A | 1 | não | BLOQUEADA |
| 98 | `A00097` | *אבטיגא | C | 0 | SIM | BLOQUEADA |
| 99 | `A00098` | *אָבְטְיוֹנָא | C | 0 | SIM | BLOQUEADA |
| 100 | `A00099` | אֲבַטִּיחַ | A | 1 | não | BLOQUEADA |

## Portões obrigatórios ainda não satisfeitos

1. Concluir por ID os dez controles de `regras/Rauditoria.txt`, registrando somente verificações efetivamente realizadas, e verificar individualmente citações e remissões decisivas. A ausência de fac-símile ou de testemunho externo só pode ser dispensada justificadamente quando não pertinente à acepção e à conclusão específica.
2. Conciliar **42 intervenções filológicas faltantes no consolidado** e conferir que nenhuma outra fonte seja sobrescrita. A branch `chat-gpt-correcoes` também contém mudanças em outros léxicos; não fazer merge indiscriminado.
3. Concluir e inspecionar os artefatos da execução Chromium #38260565698; registrar falhas comprovadas e, se necessário, corrigir e reexecutar regressões.
4. Só conceder estado atômico após integração efetiva da respectiva edição, com PR `merged=true`, SHA e conteúdo confirmados em `chat-gpt-commits`. Manter `total_audited=0` até existir prova individual completa, em conformidade com `regras/Rauditoria.txt`.

## Evidência detalhada

[Fichas em JSON](JASTROW-2026-10-12-lote-001-100-fichas-atomicas-pendencias.json) · [Regressão Chromium de 600](JASTROW-2026-10-12-certificacao-atomica-600.md) · [Suíte Chromium de 100](../tests/jastrow_100_atomic_attempt.mjs).
