# JASTROW — conclusão da auditoria filológica única dos 600 registros incorporados

**Lote final 006:** 100 entradas (de `A00484` até `A00599`, ordinais 485–600, saltando 16 entradas que constavam de lotes anteriores). **Data de trabalho:** 12/10/2026. **Branch de auditoria:** `chat-gpt-correcoes`. **Fonte canônica:** Marcus Jastrow, *A Dictionary of the Targumim, the Talmud Babli and Yerushalmi, and the Midrashic Literature* (1903), XML do Sefaria-Data, commit `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`, importado como `lexicons/jastrow-source-lote-0001.json` a `0003.json`.

## 1. Resultado e transparência de denominadores

Os **600/600** se referem aos primeiros 600 registros JASTROW já incorporados ao Scriptura Lexicon, **não ao dicionário histórico completo de Jastrow**. A classificação A/C/P é relativa ao cotejo editorial completo do XML digital contra os cartões portugueses, e não a inspeção direta de todos os manuscritos rabínicos ou da impressão de 1903.

| Etapa ou processo | Barra independente | Progresso | Significado / limite |
|---|---|---:|---|
| Incorporação no universo publicado | `████████████████████` | 600/600 — 100% | Total de registros digitais publicados; não a obra histórica inteira |
| IDs fonte distintos (três arquivos) | `████████████████████` | 600/600 — 100% | `A00000` a `A00599` exatos, sem faltas |
| Auditoria textual/estrutural — cartões e pesquisa | `████████████████████` | 600/600 — 100% | 27 módulos com JS válido; 600 linhas e 600 cartões pareados |
| Auditoria filológica digital única | `████████████████████` | **600/600 — 100%** | **A=401, C=199, P=0**; seis lotes de 100 |
| Último lote com parecer individual | `████████████████████` | **100/100 — 100%** | 73 aprovados e 27 corrigidos |
| Correções filológicas deste lote | `████████████████████` | 27/27 — 100% | Correções presentes nos sete módulos de saída alterados |
| Evidências de último lote | `████████████████████` | 100/100 — 100% | Quatro matrizes de 25, XML e HTML antes/depois |
| Sem pendência registrada na auditoria digital | `████████████████████` | 600/600 — 100% sem P | Não significa que todos os testemunhos externos foram verificados |
| Integração dos novos 27 reparos nesta execução | `░░░░░░░░░░░░░░░░░░░░` | 0/27 — 0% | Nenhum PR/merge executado nesta auditoria |

**Verificações não realizadas:** teste real de navegador, funcionamento/posicionamento dos popups no DOM, inspeção visual do RTL, acessibilidade/teclado e colação individual de manuscritos rabínicos citados por Jastrow. A sintaxe dos seis módulos de popups passou; isso **não** equivale a aprovar sua apresentação e interação.

## 2. Rastreabilidade do corpus e critérios

A seleção de 100 registros não repete nenhum ID dos primeiros 500 pareceres. O intervalo ordinal 485–600 contém 116 registros; **16 estavam auditados**, portanto foram excluídos. A fonte contém exatamente 3 arquivos de 200 verbetes e 600 IDs únicos, com ordinais de 1 a 600; a auditoria abrange todos eles. Não restam IDs sem parecer no corpus atual. Não se afirma que novas entradas fora desse recorte sejam inexistentes no léxico original.

**A — aprovado:** cotejo completo com a entrada digital sem omissão semântica ou textual material demonstrada que exigisse modificação neste ciclo. **C — corrigido:** intervenção registrada no cartão e verificada em comparação ao HTML anterior; todas as 27 intervenções incluem especificação filológica. **P — pendente:** não surgiram pendências específicas insolúveis **neste recorte e método**. Hipóteses marcadas por Jastrow continuam marcadas como hipóteses.

Cada uma das 100 matrizes individuais contém fonte XML integral (não só resumo), hash SHA-256 informado da entrada, cabeçalho, sentidos e remissões, HTML editorial anterior e posterior, a justificação A/C e o módulo alterado. A conferência final cruzou os 100 registros com o conteúdo carregado pelos módulos, sem mudar o XML canônico.

## 3. Matriz auditável dos 100 pareceres

| Ordinal | ID | Lema | Estado | Decisão |
|---:|---|---|:---:|---|
| 485 | `A00484` | אַהֲבָה, | **A** | Sem correção material necessária |
| 486 | `A00485` | אהדורי | **A** | Sem correção material necessária |
| 487 | `A00486` | אהו | **A** | Sem correção material necessária |
| 488 | `A00487` | אהוליות | **A** | Sem correção material necessária |
| 489 | `A00488` | אהולין | **A** | Sem correção material necessária |
| 490 | `A00489` | אהון | **A** | Sem correção material necessária |
| 493 | `A00492` | אהיי | **A** | Sem correção material necessária |
| 496 | `A00495` | אֲהִילָא | **A** | Sem correção material necessária |
| 497 | `A00496` | אֲהִילַאי | **A** | Sem correção material necessária |
| 498 | `A00497` | אֲהִילָה | **A** | Sem correção material necessária |
| 500 | `A00499` | אהינו | **A** | Sem correção material necessária |
| 501 | `A00500` | אָהַל | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 503 | `A00502` | (אֹוהָל) אֳהָל | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 504 | `A00503` | אָהֳלָא | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 505 | `A00504` | אַהֲלָא, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 506 | `A00505` | אָהֳלֹויָא | **A** | Sem correção material necessária |
| 507 | `A00506` | אָהֳלֹות | **A** | Sem correção material necessária |
| 508 | `A00507` | אָהֳלַיָּא, | **A** | Sem correção material necessária |
| 510 | `A00509` | אהמרא | **A** | Sem correção material necessária |
| 511 | `A00510` | אֲהָן | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 512 | `A00511` | אהנייתא | **A** | Sem correção material necessária |
| 513 | `A00512` | אַהֲרֹון, | **A** | Sem correção material necessária |
| 514 | `A00513` | אַהֲרֹונִית | **A** | Sem correção material necessária |
| 515 | `A00514` | אַהֲרֹן | **A** | Sem correção material necessária |
| 516 | `A00515` | או־ | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 518 | `A00517` | אֹו | **A** | Sem correção material necessária |
| 519 | `A00518` | אֹו, | **A** | Sem correção material necessária |
| 520 | `A00519` | אוּ | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 522 | `A00521` | אֹוב | **A** | Sem correção material necessária |
| 523 | `A00522` | אֹוב | **A** | Sem correção material necessária |
| 524 | `A00523` | אוֹב, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 525 | `A00524` | אֹובְדָן, | **A** | Sem correção material necessária |
| 526 | `A00525` | אובינות | **A** | Sem correção material necessária |
| 527 | `A00526` | אֹובִיסֹוס, | **A** | Sem correção material necessária |
| 528 | `A00527` | אוּבָל, | **A** | Sem correção material necessária |
| 529 | `A00528` | אוּבְלָא, | **A** | Sem correção material necessária |
| 530 | `A00529` | אוּבְלָא, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 531 | `A00530` | אוּבְלִים, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 532 | `A00531` | אֹובַנְתָּא | **A** | Sem correção material necessária |
| 533 | `A00532` | אוּבְצָנָא | **A** | Sem correção material necessária |
| 534 | `A00533` | אֹובְרִיזָא | **A** | Sem correção material necessária |
| 535 | `A00534` | אוּבְשִׁין, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 537 | `A00536` | אוּגָד | **A** | Sem correção material necessária |
| 538 | `A00537` | אוגדויי | **A** | Sem correção material necessária |
| 540 | `A00539` | (זגדור) אוֹגְדוֹר | **A** | Sem correção material necessária |
| 541 | `A00540` | אוֹגְדוּתָא | **A** | Sem correção material necessária |
| 542 | `A00541` | אוגורי | **A** | Sem correção material necessária |
| 543 | `A00542` | (אֻגְיָא) אוּגְיָא | **A** | Sem correção material necessária |
| 544 | `A00543` | אוּגְיָה | **A** | Sem correção material necessária |
| 546 | `A00545` | אוֹגָנָא | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 547 | `A00546` | אֶוְגְּנֵס | **A** | Sem correção material necessária |
| 548 | `A00547` | אוֹגַר | **A** | Sem correção material necessária |
| 549 | `A00548` | אוֹגַר, | **A** | Sem correção material necessária |
| 550 | `A00549` | אוגרוי | **A** | Sem correção material necessária |
| 551 | `A00550` | אוגרים | **A** | Sem correção material necessária |
| 552 | `A00551` | אוגרנא | **A** | Sem correção material necessária |
| 553 | `A00552` | אוֹגֶרֶת | **A** | Sem correção material necessária |
| 554 | `A00553` | אוּד | **A** | Sem correção material necessária |
| 555 | `A00554` | אוּד, | **A** | Sem correção material necessária |
| 556 | `A00555` | אוֹדָאָה, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 558 | `A00557` | אוּדְיָא | **A** | Sem correção material necessária |
| 559 | `A00558` | אודיאר | **A** | Sem correção material necessária |
| 560 | `A00559` | אודייא | **A** | Sem correção material necessária |
| 561 | `A00560` | אודיין | **A** | Sem correção material necessária |
| 563 | `A00562` | *אוּדְיָיתָא, | **A** | Sem correção material necessária |
| 564 | `A00563` | *אוּדְיָיתָא, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 565 | `A00564` | אוֹדִיצוּתָא | **A** | Sem correção material necessária |
| 566 | `A00565` | אוֹדִיקוּתָא | **A** | Sem correção material necessária |
| 567 | `A00566` | אֹודִיתָא | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 568 | `A00567` | אֹודֶם | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 569 | `A00568` | אֹודֶן, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 570 | `A00569` | אוּדְנָא, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 571 | `A00570` | אוּדְנָא, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 573 | `A00572` | *אוּדְרָךְ | **A** | Sem correção material necessária |
| 574 | `A00573` | אָוָה | **A** | Sem correção material necessária |
| 575 | `A00574` | אֹוהֶל, | **A** | Sem correção material necessária |
| 576 | `A00575` | (הֹוהֲרָא) אֹוהֲרָא | **A** | Sem correção material necessária |
| 577 | `A00576` | אֶוְוגִּינִיסְטָאטֵי | **A** | Sem correção material necessária |
| 578 | `A00577` | אָוָוז | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 579 | `A00578` | אַוְוזָא | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 580 | `A00579` | אֲוַול, | **A** | Sem correção material necessária |
| 581 | `A00580` | אוולם, | **A** | Sem correção material necessária |
| 582 | `A00581` | אָוֶון | **A** | Sem correção material necessária |
| 583 | `A00582` | אַוָּונָא, | **A** | Sem correção material necessária |
| 584 | `A00583` | אֲוַונְכַּר | **A** | Sem correção material necessária |
| 585 | `A00584` | אֶוְוסֹוס | **A** | Sem correção material necessária |
| 586 | `A00585` | אווקי | **A** | Sem correção material necessária |
| 587 | `A00586` | *אַוְורָא | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 588 | `A00587` | אֲוַורְדִּימָס | **A** | Sem correção material necessária |
| 589 | `A00588` | אוורוס | **A** | Sem correção material necessária |
| 590 | `A00589` | *אַוְורַקְסִין, | **A** | Sem correção material necessária |
| 591 | `A00590` | אַוְורַשְׁנָא | **A** | Sem correção material necessária |
| 592 | `A00591` | אַוַּושׁ | **A** | Sem correção material necessária |
| 594 | `A00593` | אֶוְותִּיאֹוס, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 595 | `A00594` | אוותיננייה | **A** | Sem correção material necessária |
| 596 | `A00595` | *אַוְותָּן, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 597 | `A00596` | אוותנטי | **A** | Sem correção material necessária |
| 598 | `A00597` | אַוותֶּנְטְיָא, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 599 | `A00598` | אַוְותֶּנְטִי, | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |
| 600 | `A00599` | *(אוּסְיָא) אוּזְיָא | **C** | Aparato, variante, acepção ou precisão de leitura incorporados |

## 4. Parecer filológico individual de todas as entradas

### A00484 — אַהֲבָה, — A

**Fonte — ordinal 485:** אַהֲבָה, II (אַחֲוָוא in Y.) pr. n. m. Ahăbah, A ḥ ava , son of Zera, and father of R. Adda. R. Hash. 29 a . Ab. Zar. 30 a ; a. fr. Y. Yeb. VIII, 9 bc

**Tradução e análise final:** Ahavá (também Ahava), filho de Zera e pai de Rabi Ada. Rosh Hashaná 29a; Avodah Zarah 30a; Jerusalém Yevamot 8, 9b–c. Jastrow registra variante אַחֲוָוא . Não confundir com o substantivo homógrafo “amor”.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-461-485.js`; SHA-256 do XML `738ff4164ed02a14f67c362522a3c9273c921734f9d1fe2e93faae958e6b070b`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00485 — אהדורי — A

**Fonte — ordinal 486:** אהדורי Y. Ber. II, 4 b , v. אֲדוּרֵי

**Tradução e análise final:** Forma de Jerusalém Berakhot 2, 4b remetida ao vocábulo אֲדוּרֵי , “procissão”.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `0bcdf93683f150c746275a7b1e5e0ebbbe5eef5a25e8f6fb868838bf098719a9`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00486 — אהו — A

**Fonte — ordinal 487:** אהו Y. Ab. Zar. V, 45 a , read אֲהָן.

**Tradução e análise final:** Em Jerusalém Avodah Zarah 5, 45a, Jastrow propõe ler אֲהָן em lugar de אהו .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `cbf24ff09e369f1ac6274b30800f6285c14c9d6df728225c2237499990972f62`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00487 — אהוליות — A

**Fonte — ordinal 488:** אהוליות , v. אָהֳלִית

**Tradução e análise final:** Forma remetida a אָהֳלִית , agrupamento de tendas ou acampamento.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `1107a5491d94dde9639968030f87f7836dfcb586b49fb807442053ed4fd6bac8`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00488 — אהולין — A

**Fonte — ordinal 489:** אהולין , v. אֹהֶל

**Tradução e análise final:** Forma remetida ao substantivo אֹהֶל , “tenda, abrigo”.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `2a78e03376533db8f2dfe58fdf45473b0e19f3d8691af4f78b960accf2199a86`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00489 — אהון — A

**Fonte — ordinal 490:** אהון , v. אֲהָן

**Tradução e análise final:** Forma remetida a אֲהָן .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `3dea4fe2cc59bafcf60337db2d8abb7ed0b88e2bc8fc6c36781d142b202aa58b`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00492 — אהיי — A

**Fonte — ordinal 493:** אהיי Y. Shek. V, 48 d , read הַיי.

**Tradução e análise final:** Em Jerusalém Shekalim 5, 48d, Jastrow recomenda substituir אהיי por הַיי .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `f0f04e1dc3fe98d70af327bb5e6e1c7673f4d377a42269df14f31c0f01efcadf`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00495 — אֲהִילָא — A

**Fonte — ordinal 496:** אֲהִילָא tent; v. אָהֳלָא .

**Tradução e análise final:** Equivalente aramaico para “tenda”; remetido a אָהֳלָא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `bc5b5d37ad620c56919c8dba0208d5b4a52a278ec5e9449eb31a66a9dcfd8c57`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00496 — אֲהִילַאי — A

**Fonte — ordinal 497:** אֲהִילַאי pr. n. m. Ahilai . Pes. 30 a

**Tradução e análise final:** Ahilai , antropônimo rabínico atestado em Pesahim 30a.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `d1323ac47a2a2f6009cca159a57a52cb8bfef60fc0daa757622c3da6092208cf`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00497 — אֲהִילָה — A

**Fonte — ordinal 498:** אֲהִילָה f., pl. אֲהִילֹות, v. אָהִיל

**Tradução e análise final:** Forma feminina e plural אֲהִילֹות , remetida a אָהִיל .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `c8fb8cc7aaa9e08cf8e5ad82def63532e26e22aaa8bed9c26bb234c256b1626a`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00499 — אהינו — A

**Fonte — ordinal 500:** אהינו , v. foreg.

**Tradução e análise final:** Forma אהינו remetida ao verbete precedente, espécie de tâmara.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `de7811c0952e26204a1548a8cd2c91ab26dce3215043b92fb20448b174b1393a`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00500 — אָהַל — C

**Fonte — ordinal 501:** אָהַל (b. h.), Pi . אִיהֵל (deriv. of אֹהֶל) to spread tent-like, to cover, shade, bend over &c., usu. with refer. to levitical uncleanness arising from being under the same shelter with, or forming a shelter over, a corpse &c. Meïlah 17 a אי' על מקצתו if he bent over a portion (of the blood). Sabb. 17 a אי' צדו אחת וכ' he caused one side of his body to overshadow the grave.—[More freq.] Hif. הֶאֱהִיל same. Ohol. III, 1; 3 sq. הא' על המת he formed a tent, i.e. spread himself, or bent, over a corpse. Ib. הבית מַאֲחִיל עליו the house forms a cove […]

**Tradução e análise final:** Piel אִיהֵל : estender-se como tenda, cobrir, fazer sombra ou curvar-se sobre algo. Na legislação levítica, especialmente formar cobertura comum com cadáver ou objeto impuro. Meilá 17a: inclinar-se sobre parte do sangue; Shabbat 17a: sombrear sepultura com um lado do corpo. Hifil הֶאֱהִיל : exercer a mesma ação; Oholot 3.1–3 trata de corpo estendido sobre um morto e casa que cobre parte dele; Jerusalém Sotá 9 e outras referências. Aparato filológico — lote 006: Construção ritual e exemplos: o verbo hebraico אָהַל surge no piel אִיהֵל , «estende […]

**Justificativa da correção:** Construção ritual e exemplos: o verbo hebraico אָהַל surge no piel אִיהֵל , «estender-se como uma tenda; produzir sombra ou cobertura»; a aplicação técnica diz respeito à impureza levítica da exposição sob a mesma cobertura de um cadáver. Meilá 17a trata de cobertura sobre parte do sangue; Shabbat 17a, de sombra sobre sepultura projetada por um lado do corpo. Mais frequente, o hifil הֶאֱהִיל tem o mesmo valor: Oholot 3.1 e 3.3 seguintes, הא׳ על המת («formar cobertura sobre o morto»); הבית מַאֲחִיל עליו , a casa cobre parte dele. Comparar Jerusalém Sotá 9, 23c. A norma de impureza é contexto jurídico do emprego verbal, não outro significado intrínseco.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `f37fe915bf0ec4d218ebec16cb14ab68d091817220a172c1f5ea9bbf595087cb`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00502 — (אֹוהָל) אֳהָל — C

**Fonte — ordinal 503:** (אֹוהָל) אֳהָל m. (Syr. אחלא P. Sm. 125; הל, חל, v. הלל , חלל , cmp. מוהל, מוחל) 1) an alcalic plant , used as soap . Sabb. 90 a ; Nid. 62 a (counted among plants subject to the laws of the Sabbath year). —2) a mineral substance of the same use (in connection with נתר; v. however Maim. to Nid. IX, 6). Nid. l. c. והתניא הבורית והאהל; (Sabb. l. c. first time חול ed., Ms. M. אָהֵיל; sec. time אהלא ed., Ms. M. אהיל). M. Kat. 17 b ; a, e. [The biblical אהלים a. אהלות have no connection of meaning with our w.]

**Tradução e análise final:** 1. Planta alcalina utilizada como produto de limpeza (Shabbat 90a; Nidá 62a), submetida à legislação do ano sabático. 2. Substância mineral com função semelhante, associada a נֶתֶר ; Nidá 62a e Moed Katan 17b. Manuscritos e edições alternam אֳהָל, אָהֵיל, אהלא . Jastrow salienta que o termo bíblico para aloés não tem relação de sentido necessária com esta matéria. Aparato filológico — lote 006: Aparato lexical e de manuscritos: Jastrow separa אֳהָל , «planta alcalina usada como sabão» (Shabbat 90a; Nidá 62a, sujeita às leis do ano sabático), de […]

**Justificativa da correção:** Aparato lexical e de manuscritos: Jastrow separa אֳהָל , «planta alcalina usada como sabão» (Shabbat 90a; Nidá 62a, sujeita às leis do ano sabático), de «substância mineral com igual uso», associada a נֶתֶר (Nidá 62a). À classificação mineral opõe-se comparação com Maimônides, comentário a Nidá 9.6. Em Shabbat 90a, a primeira ocorrência tem edição חול contra manuscrito de Munique אָהֵיל ; na segunda ocorrência , edição אהלא contra manuscrito אהיל . Não tratar essas quatro leituras como um conjunto indiferenciado. Moed Katan 17b é referência adicional. O autor nega relação de significado com os termos bíblicos אהלים, אהלות («aloés»), distinção que deve permanecer explícita.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `99d38a0fbfe985af2bc7166302ce232a5c16685ad21b778148de31c69dce83fe`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00503 — אָהֳלָא — C

**Fonte — ordinal 504:** אָהֳלָא ch. = h. אֹהֶל tent, sheet . Targ. Y. Num. XII, 12 (Var. אֲהִילָא, אָהֵילָא). Bets. 30 b קא סתר א' he breaks the tent up (by removing portions of the cover). Ib. 32 b ; a. fr.— Pl. אָהֳלֵי . Sabb. 137 b אוסופי א' extending the spread sheets (by opening a door or window over which they were spread).

**Tradução e análise final:** Forma aramaica para “tenda” ou “pano de cobertura”, com variantes אֲהִילָא, אָהֵילָא . Targum Pseudo-Jônatas Números 12.12; Beitzá 30b: desmontar cobertura retirando parte dela; Shabbat 137b: ampliar lonas ao abrir janela ou porta sobre a qual estão estendidas. Plural אָהֳלֵי . Aparato filológico — lote 006: Usos do plural e testemunhos: forma aramaica אָהֳלָא , «tenda; pano estendido», em Targum Pseudo-Jônatas Números 12.12, variantes אֲהִילָא, אָהֵילָא . Beitzá 30b קא סתר א׳ designa desmontar uma cobertura ao retirar partes; Beitzá 32b é para […]

**Justificativa da correção:** Usos do plural e testemunhos: forma aramaica אָהֳלָא , «tenda; pano estendido», em Targum Pseudo-Jônatas Números 12.12, variantes אֲהִילָא, אָהֵילָא . Beitzá 30b קא סתר א׳ designa desmontar uma cobertura ao retirar partes; Beitzá 32b é paralelo citado. Plural אָהֳלֵי em Shabbat 137b אוסופי א׳ , «estender os panos de cobertura» ao abrir porta ou janela sobre a qual já estavam estendidos. Isso não equivale automaticamente a construir uma nova tenda independente.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `37e45a5638e4fbf1eb4ccfd1dbb80d88ffefc9f324e1b3ccc9d72764f9e4b530`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00504 — אַהֲלָא, — C

**Fonte — ordinal 505:** אַהֲלָא, אֹוהֳלָא ch. 1) = h. אֳהָל. Targ. Job. IX, 30 (h. text בור). Sabb. 90 a , v. אֳהָל. —2) (= b. h. אהלים, אהלות?) aloë (used for medicinal purposes, v. Sm. Ant. s. v. Aloë). Ib. 110 b א' תולענא; Git. 69 b א' תולאנא purple-colored aloë.

**Tradução e análise final:** Variantes אַהֲלָא, אֹוהֳלָא . 1. Equivalente aramaico de אֳהָל , substância de limpeza (Targum Jó 9.30; Shabbat 90a). 2. Possivelmente aloés de emprego medicinal (Shabbat 110b; Gitin 69b); Jastrow cita forma que qualifica aloés de coloração púrpura. A equivalência etimológica com aloés bíblico é interrogativa na fonte. Aparato filológico — lote 006: Separação do alcalino e do aloés: אַהֲלָא, אֹוהֳלָא tem 1. equivalência ao alcalino אֳהָל (Targum Jó 9.30, para hebraico בֹּר ; Shabbat 90a), e 2. «aloés» medicinal, א׳ תולענא/א׳ תולאנא em Shabbat 1 […]

**Justificativa da correção:** Separação do alcalino e do aloés: אַהֲלָא, אֹוהֳלָא tem 1. equivalência ao alcalino אֳהָל (Targum Jó 9.30, para hebraico בֹּר ; Shabbat 90a), e 2. «aloés» medicinal, א׳ תולענא/א׳ תולאנא em Shabbat 110b e Gitin 69b, qualificado de cor púrpura. A equiparação etimológica ao hebraico bíblico אהלים, אהלות aparece com interrogação em Jastrow; não converter em cognato demonstrado nem fazer dos usos de limpeza sinônimo do remédio.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `b151c4848ea2a79a524f87541bd60624adf9b500c09acec6c6db3e74e72ecde9`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00505 — אָהֳלֹויָא — A

**Fonte — ordinal 506:** אָהֳלֹויָא m. Pl. אָהֳלֹויֵי (foreg.) dealer in aloë (prob. in b. h. אהלות , perfumes ). . Ned. 91 b . B. Mets. 81 a

**Tradução e análise final:** Vendedor ou negociante de aloés ou substâncias aromáticas, possivelmente perfumes. Plural אָהֳלֹויֵי . Nedarim 91b; Bava Metzia 81a; a análise lexical relaciona-se à entrada anterior.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `d72e1e96f09bbc6dafc04b86c811fadeb8df3d08c36e119b37376ad5d9884eae`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00506 — אָהֳלֹות — A

**Fonte — ordinal 507:** אָהֳלֹות , v. אָהִיל

**Tradução e análise final:** Remissão de אָהֳלֹות à entrada אָהִיל , designação ligada às leis de cobertura e impureza ritual.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `d13dbe65d0983cb77c4d0fac0c7a9fc93c1e991582f4e236fc1de689b456b2ea`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00507 — אָהֳלַיָּא, — A

**Fonte — ordinal 508:** אָהֳלַיָּא, אֹוהֳלַיָּיא pr. n. pl. Oholaya (tents) Eduy. VII, 4 אה'. Zeb. 25 b אוה'.

**Tradução e análise final:** Oholaya , nome plural de lugar relacionado a “tendas”. Variantes אָהֳלַיָּא, אֹוהֳלַיָּיא , em Eduyot 7.4 e Zevahim 25b.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `997c273f1f9ea57946d7476969719b7ec5dfd57795114ccc0c05d41d44f343c6`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00509 — אהמרא — A

**Fonte — ordinal 510:** אהמרא , v. אַחְמְרָא

**Tradução e análise final:** Forma אהמרא remetida a אַחְמְרָא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `94bcbebe0a356c7a15810574fba1ad67f7978f44eeb00a1282611a520ce2e369`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00510 — אֲהָן — C

**Fonte — ordinal 511:** אֲהָן or אֲהֵן, אֲהֹון m. (= הָן, הֲהָן, √ה־) 1) this, that, he who . Y. Ber. II, 4 c bot. א' חזירא that swine. Ib. VI, 10 a bot. א' דמר he who says. Y. Yoma VI, 43 d bot. כא' דתנינן as that (Mishnah) which we have been taught. Y. Shek. II, 47 a top א' דהכא the subject just quoted. Y. B. Mets. II, 8 c (אהון) אהין להן לי אהן מהו חשוב of what use is this to me? of what value is it to me?—Y. Shebu. III, 34 d bot. וא' אפילו and this ‘even’—i.e. why do you use the word ‘even’?—a. fr. —2) this place, where . Y. Ber. IX, 13 b top כל א' דאת אזיל wherev […]

**Tradução e análise final:** Formas אֲהָן, אֲהֵן, אֲהֹון . (1) Este, aquele ou aquele que: Jerusalém Berakhot 2, 4c; 6, 10a; Yoma 6, 43d; Shekalim 2, 47a. (2) Lugar: “onde quer que vás” (Jerusalém Berakhot 9, 13b). (3) Temporal, “então, depois disso”, uso assinalado com asterisco por Jastrow (Jerusalém Ta‘anit 4, 69b). Aparato filológico — lote 006: Subtipos gramaticais e exemplos completos: אֲהָן, אֲהֵן, אֲהֹון : (1) pronome/demonstrativo «este, aquele, aquele que», como א׳ חזירא , «aquele porco» (Jerusalém Berakhot 2, 4c), א׳ דמר , «aquele que diz» (Berakhot 6, 10a), כא׳ […]

**Justificativa da correção:** Subtipos gramaticais e exemplos completos: אֲהָן, אֲהֵן, אֲהֹון : (1) pronome/demonstrativo «este, aquele, aquele que», como א׳ חזירא , «aquele porco» (Jerusalém Berakhot 2, 4c), א׳ דמר , «aquele que diz» (Berakhot 6, 10a), כא׳ דתנינן , «como aquela Mishná ensinada» (Yoma 6, 43d); Shekalim 2, 47a, א׳ דהכא , «o assunto acabado de citar». Bava Metzia palestinense 2, 8c apresenta variante אהון/אהין , «de que me serve isto?»; Shevuot palestinense 3, 34d explica o demonstrativo numa frase com «mesmo/até». (2) valor locativo «aqui, onde» (Berakhot 9, 13b). (3) advérbio temporal **assinalado com asterisco**, «então», reconstruído por Jastrow como על־הן , em Jerusalém Ta‘anit 4, 69b «comei e depois bebei». Não eliminar o estatuto hipotético da terceira derivação.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `916e26728850d06c536c9e55e140dc5ed8f16f83273259f009423522abb0b30c`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00511 — אהנייתא — A

**Fonte — ordinal 512:** אהנייתא Keth. 67 b מקרבן אהנייתי, v. הֲנָיָיה ch.

**Tradução e análise final:** Em Ketubot 67b, a expressão מקרבן אהנייתי é remetida à entrada aramaica הֲנָיָיה . A fonte não apresenta definição independente.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `86fc073a9ea9c25cf9f40f5ee76865f36c1bf0decb60c049c0c070b2205a75d4`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00512 — אַהֲרֹון, — A

**Fonte — ordinal 513:** אַהֲרֹון, אַהֲרֹן pr. n. m. (b. h.) Aaron , the brother of Moses. Meg. 25 b ; a. fr.

**Tradução e análise final:** Arão , irmão de Moisés, com variante gráfica אַהֲרֹן . Meguilá 25b e outras fontes rabínicas.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `4ba1d6c29434789e2eb1e8db43317e730bc259caa0ba1c9bc97ab89c8908a6ae`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00513 — אַהֲרֹונִית — A

**Fonte — ordinal 514:** אַהֲרֹונִית f. (deriv. of foreg.) of priestly parentage, Aaronide . Erub. 53 b נערה א' אחרונית (play on words) an Aaronide maiden, a second wife (in Ms. M. our w. is missing).

**Tradução e análise final:** Referente à descendência sacerdotal de Arão. Eruvin 53b traz jogo de palavras sobre “jovem aaronita” e “segunda esposa”; o manuscrito de Munique omite o vocábulo, segundo Jastrow.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `c55ec0a8223c0ac76d04b7cd41647debd3ec0ec6f9f12861ca7b8a4d9a96f52d`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00514 — אַהֲרֹן — A

**Fonte — ordinal 515:** אַהֲרֹן , v. אַהֲרֹון

**Tradução e análise final:** Grafia de Arão remetida ao verbete אַהֲרֹון .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `e91d56b1a898960cc78714761c2be988653b282c1a0c6916e2440901ed96b41e`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00515 — או־ — C

**Fonte — ordinal 516:** או־ 1) prefix, esp. for verbal nouns, e.g. 1) prefix, esp. for verbal nouns, e.g. אודיצותא fr. דיץ. 2) או, אוו = εὐ-αὐ, v. אב

**Tradução e análise final:** (1) Elemento prefixal na formação de substantivos deverbais, por exemplo אודיצותא a partir de דיץ . (2) Representação או, אוו de elementos gregos εὐ-, αὐ- , com remissão a אב . Preservar as duas observações, sem reduzir o elemento a um só significado. Aparato filológico — lote 006: Duplicação de extração e classificação: o XML transcrito repete literalmente «1) prefix, esp. for verbal nouns, e.g.»; não são duas acepções independentes. No primeiro uso, או־ é elemento prefixal, especialmente na nominalização verbal, como אודיצותא de דיץ . No segu […]

**Justificativa da correção:** Duplicação de extração e classificação: o XML transcrito repete literalmente «1) prefix, esp. for verbal nouns, e.g.»; não são duas acepções independentes. No primeiro uso, או־ é elemento prefixal, especialmente na nominalização verbal, como אודיצותא de דיץ . No segundo, או, אוו reproduzem elementos gregos εὐ-, αὐ- ; cf. a remissão a אב . A separação gráfica dos dois usos é interpretação do próprio Jastrow e não autoriza reconstruir formas gregas específicas que o registro não cita.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-486-510.js`; SHA-256 do XML `412fc5800f69efc07fef35556e4e45bc7a13e8245247b3c6c6324346be75146b`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00517 — אֹו — A

**Fonte — ordinal 518:** אֹו ch. same. Targ. Ex. XXI, 20; a. e. Targ. Prov. VI, 28 Ms. (ed. אי).—Ber. 2 b , v. דילמא; a. v. fr.

**Tradução e análise final:** Equivalente aramaico da conjunção hebraica “ou”. Targum Êxodo 21.20; Targum Provérbios 6.28 (manuscrito אֹו , edição אי ); Berakhot 2b.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `7db2ad894269ee5ef09b0ec7ed68862f71d33ca593daef9158b62069b4037570`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00518 — אֹו, — A

**Fonte — ordinal 519:** אֹו, II (ὁ) the . Y. R. Hash. I, 57 a bot. (in a Greek sentence), v. אגרפוס.

**Tradução e análise final:** Transcrição do artigo definido grego ὁ no contexto de uma frase grega citada em Jerusalém Rosh Hashaná 1, 57a. Não confundir com os homógrafos hebraico e aramaico de “ou”.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `2f1ed856a3560017fb263096d9e34029c5977efc6c7dc2bfe659d9022732c060`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00519 — אוּ — C

**Fonte — ordinal 520:** אוּ m. (contr. of אֲהוּ, אֲהִי v. הוּ , הִי) he, that, this (only in Y. Dial). [Y. Ber. II, 5 b top או מקשי, read הוה מ'; ed. Amst. בעי.] Y. B. Bath. III, 14 b I was jesting באו גברא with that man. Y. Snh. XI, beg. 30 a באו ד(א)מר with him who says— Fem . אִי.—Y. Erub. III, 21 b bot. אי אידא אי אידא it is all the same; v. אִידָא II.

**Tradução e análise final:** Contração explicada a partir de אֲהוּ, אֲהִי , própria do dialeto de Jerusalém. Jerusalém Bava Batra 3, 14b: “com aquele homem”; Jerusalém Sanhedrin 11, 30a: “com aquele que diz”. Feminino אִי . Jastrow recomenda emendar determinada ocorrência em Jerusalém Berakhot 2, 5b para הוה . Aparato filológico — lote 006: Variações e emenda circunscrita: אוּ é demonstrativo masculino restrito, segundo Jastrow, ao dialeto palestino, como contração de אֲהוּ, אֲהִי ; feminino אִי . A ocorrência de Jerusalém Berakhot 2, 5b, או מקשי , é considerada pelo autor […]

**Justificativa da correção:** Variações e emenda circunscrita: אוּ é demonstrativo masculino restrito, segundo Jastrow, ao dialeto palestino, como contração de אֲהוּ, אֲהִי ; feminino אִי . A ocorrência de Jerusalém Berakhot 2, 5b, או מקשי , é considerada pelo autor sujeita à correção para הוה מקשי , enquanto a edição de Amsterdã tem בעי : ela não constitui atestação segura do demonstrativo. Em Jerusalém Bava Batra 3, 14b באו גברא significa «com aquele homem»; Sanhedrin palestinense 11, 30a באו ד(א)מר , «com aquele que diz». Eruvin palestinense 3, 21b exemplifica o feminino אי אידא אי אידא , «dá no mesmo»; comparar אִידָא II.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `6c243503313c8749546f0b42d4a92032a703a82a6daa2a52411d55470b506b46`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00521 — אֹוב — A

**Fonte — ordinal 522:** אֹוב shoots , v. אֵב .

**Tradução e análise final:** Acepção “brotos” com remissão a אֵב ; entrada separada do homógrafo referente à necromancia.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `087313d54aa2a9e81756590fa457bc394fdf64f64e7dece4f3a5055665cd7954`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00522 — אֹוב — A

**Fonte — ordinal 523:** אֹוב m. (b. h.; √אב or הב , v. אבב, הבאי) cited ghost . —בעל א' necromancer . Snh. 65 a ; a. fr.

**Tradução e análise final:** Espírito ou aparição evocado por práticas necromânticas. בַּעַל אֹוב : necromante, aquele que consulta espíritos. Sanhedrin 65a e paralelos. A denominação descreve uma crença ou prática referida nas fontes, sem atestar sua eficácia.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `ab0dd52fb44ea982585d3887bea70b34692b8784096bc890f87c938f99724b96`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00523 — אוֹב, — C

**Fonte — ordinal 524:** אוֹב, אוּבָא ch. same. Targ. Is. XXIX, 4; a. e.—א' טמיא necromancy over bones, sculls, also for necromancer . Targ. Y. I Deut. XVIII, 11. Ber. 59 a א' טמיא כדיב וכ' the necromancer is a liar (necromancy is false), and his (its) words are lies. Sabb. 152 b bot. (of the woman of En-Dor, I Sam. XXVIII, 7). [Yeb. 103 a בר א', v. אַבְיוּ.]

**Tradução e análise final:** Formas אוֹב, אוּבָא ; Targum Isaías 29.4. אוב טמיא : necromancia com ossos ou crânios, ou praticante dessa arte (Targum Pseudo-Jônatas Deuteronômio 18.11). Berakhot 59a chama o necromante de mentiroso; Shabbat 152b evoca o episódio da mulher de En-Dor (1 Samuel 28). Aparato filológico — lote 006: Contraste semântico e fonte do juízo: no aramaico אוֹב, אוּבָא , ligado ao hebraico da necromancia, אוב טמיא pode nomear a prática com ossos e crânios **ou** seu praticante (Targum Pseudo-Jônatas Deuteronômio 18.11); Targum Isaías 29.4 registra a palav […]

**Justificativa da correção:** Contraste semântico e fonte do juízo: no aramaico אוֹב, אוּבָא , ligado ao hebraico da necromancia, אוב טמיא pode nomear a prática com ossos e crânios **ou** seu praticante (Targum Pseudo-Jônatas Deuteronômio 18.11); Targum Isaías 29.4 registra a palavra. Em Berakhot 59a א׳ טמיא כדיב , «o necromante é mentiroso, e suas palavras são mentiras», é uma **avaliação do texto citado**, não uma conclusão filológica independente. Shabbat 152b evoca a mulher de En-Dor (1 Samuel 28). A referência בר א׳ em Yevamot 103a é tratada por Jastrow como remissão ao antropônimo אַבְיוּ , e não deve ser anexada à acepção «necromancia».

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `cb8b6e462953c257f533fa8917e9c09c713807a7181ef46f5b054888295b6e2d`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00524 — אֹובְדָן, — A

**Fonte — ordinal 525:** אֹובְדָן, אֹובְדָנָא , v. אָבְדָּן , אַבְדָּנָא.

**Tradução e análise final:** Variantes אֹובְדָן, אֹובְדָנָא remetidas aos verbetes sobre perda ou destruição אָבְדָּן, אַבְדָּנָא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `12a15a9466c4761644ede37a0e2b778791b51ab6cbf1b313b4c6ee7ceb09ad38`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00525 — אובינות — A

**Fonte — ordinal 526:** אובינות , v. חֶבְיֹונָה

**Tradução e análise final:** Grafia remetida ao verbete חֶבְיֹונָה , sem definição independente na entrada.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `d05aac29d981fdac470f95c482400eecc4070775685aae2e6b8713e7beedb28c`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00526 — אֹובִיסֹוס, — A

**Fonte — ordinal 527:** אֹובִיסֹוס, אֶוְוסֹוס pr. n. pl. Ephesus , city of Ionia in Asia Minor. Targ. I Chr. I, 5 אֹוב' (var. lect.); Y. Meg. I, 71 b אוו' bot. (rendit. of יון); v. מַקְדֹּונְיָא.

**Tradução e análise final:** Éfeso , cidade da Jônia, na Ásia Menor. Grafias אֹובִיסֹוס, אֶוְוסֹוס . Targum 1 Crônicas 1.5 e Jerusalém Meguilá 1, 71b, em glosa de Jônia; comparar מַקְדֹּונְיָא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `86765dd22a1bee6dd45bea7c00e163f94300a585023c1e85745816f8d2a37bf9`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00527 — אוּבָל, — A

**Fonte — ordinal 528:** אוּבָל, אֻבָל m. (v. יוּבָל ) 1) river. Dan. VIII, 2; 3; 6. —2) as a pr. n. Ubal (The River). Gen. R. s. 16 (referring to Dan. l. c.) א' אוותנטין וכ' Ubal is the source of all the other rivers.

**Tradução e análise final:** (1) Rio ou curso d’água, em Daniel 8.2–6. (2) Ubal como designação própria do rio: Gênesis Rabá 16 interpreta-o como origem dos demais rios. Variante gráfica אֻבָל ; comparar יוּבָל .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `02e81fb60daf349e48f51f06996599805bb3098bb3e326ef0da3bbcaacad884b`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00528 — אוּבְלָא, — A

**Fonte — ordinal 529:** אוּבְלָא, I = אֶבְלָא. Targ. Y. Gen. VII, 10; a. e.

**Tradução e análise final:** Forma aramaica equiparada a אֶבְלָא ; Targum Pseudo-Jônatas Gênesis 7.10. Não confundir com o segundo homógrafo, que designa cesto.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `2cef1521086adb02f38b0d65be54b09d879d1e355a73d8dc08af75c5bd670ba1`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00529 — אוּבְלָא, — C

**Fonte — ordinal 530:** אוּבְלָא, II (אוּכְלָא, אָכְלָא) m. (יבל) vessel made of willow twigs; basket , or perforated trough ; (as to shape v. Sm. Ant. s. v. Călathus ). Bekh. 43 b , v. בִּילֹון a. כִּילֹון. Sab. 123 b ; Snh. 92 a , a. e. א' דקצרי Ar. (ed. אוכ') the fuller’s trough. Ib. 28 b the father of the husband and the father of the wife are no more kinsmen אלא כי א' לדנא (ed. אכלא) than is a basket related to a barrel. [For אכלא, אוכלא cmp. כְּלִיל, כַּלְכָּלָה.]

**Tradução e análise final:** Cesto de ramos de salgueiro ou recipiente perfurado, com variantes אוּכְלָא, אָכְלָא . Bekhorot 43b; Shabbat 123b; Sanhedrin 92a: recipiente de lavadeiro. Sanhedrin 28b compara parentesco remoto à relação entre um cesto e um barril. Jastrow menciona calathus para comparação de forma. Aparato filológico — lote 006: Dois usos e aparato jurídico: o homógrafo II אוּבְלָא , variantes אוּכְלָא, אָכְלָא , designa cesto de salgueiro ou recipiente perfurado, comparado quanto à forma ao calathus ; cf. Bekhorot 43b e remissões a בִּילֹון, כִּילֹון . Em Sh […]

**Justificativa da correção:** Dois usos e aparato jurídico: o homógrafo II אוּבְלָא , variantes אוּכְלָא, אָכְלָא , designa cesto de salgueiro ou recipiente perfurado, comparado quanto à forma ao calathus ; cf. Bekhorot 43b e remissões a בִּילֹון, כִּילֹון . Em Shabbat 123b e Sanhedrin 92a א׳ דקצרי é o recipiente de lavadeiro na tradição do Arukh , contra a abreviação da edição אוכ׳ . Sanhedrin 28b usa אלא כי א׳ לדנא , «como um cesto aparentado a um barril», para indicar ausência de parentesco; edição אכלא . Não misturar este significado ao homógrafo I אוּבְלָא remissivo a אֶבְלָא .

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `73c22bc9817ed4966e20324c8519baee3b4be48d34906dc0b6e4fd4c3a2c16b0`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00530 — אוּבְלִים, — C

**Fonte — ordinal 531:** אוּבְלִים, אוּבְלִין pr. n. pl. (v. אֲבֵילִין ) Ub’lim, Ub’lin . Erub. 12 a top (var. v. Rabb. D. S. a. l. note 1). Ḥull. 55 b אובלים (ed. אי').

**Tradução e análise final:** Nome de localidade ou grupo denominado Ublim/Ublin , com variantes אוּבְלִים, אוּבְלִין . Eruvin 12a; Hulin 55b apresenta variantes da edição. Aparato filológico — lote 006: Classe onomástica sem identificação forçada: Jastrow classifica אוּבְלִים, אוּבְלִין como **nome próprio plural**, «Ublim, Ublin», sem determinar nesta entrada se os portadores são localidade ou coletividade. Eruvin 12a, topo, remete a variantes discutidas por Rabbinovicz (nota 1); Hulin 55b registra אובלים , mas a edição tem abreviação אי׳ . Não converter a indeterminação  […]

**Justificativa da correção:** Classe onomástica sem identificação forçada: Jastrow classifica אוּבְלִים, אוּבְלִין como **nome próprio plural**, «Ublim, Ublin», sem determinar nesta entrada se os portadores são localidade ou coletividade. Eruvin 12a, topo, remete a variantes discutidas por Rabbinovicz (nota 1); Hulin 55b registra אובלים , mas a edição tem abreviação אי׳ . Não converter a indeterminação da fonte em identificação geográfica ou étnica afirmativa.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `0e964f80ab899d811e7eafca0f0143c49e028ac4889ee76af3907a485f385d11`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00531 — אֹובַנְתָּא — A

**Fonte — ordinal 532:** אֹובַנְתָּא , v. אֲבַנְתָּא

**Tradução e análise final:** Forma remetida a אֲבַנְתָּא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `81b863cbafd1bb09b0cb1669855e47fc45d7cb1eb110b595b7509f44975fff0b`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00532 — אוּבְצָנָא — A

**Fonte — ordinal 533:** אוּבְצָנָא m. (אבץ. cmp. חָבַץ II, a. חבץ P. Sm. 1181 sq.) heavy pressure, overload, prostration from heavy load . Targ. Y. Num. XIX, 2.—B. Mets. 36 b א' דהר the prostration from carriyng a load up hill. Ib. 78 a מתה מחמת א' died from fatigue. Sabb. 106 b . [Ar. reads אוכצנא, cmp. Syr. אכץ P. Sm. 190—corr. acc.]

**Tradução e análise final:** Peso ou esforço excessivo e prostração causada por carregamento. Targum Pseudo-Jônatas Números 19.2; Bava Metzia 36b: exaustão por transportar carga montanha acima; 78a: animal morreu em consequência de fadiga; Shabbat 106b. O Arukh traz variante אוכצנא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `c4213498a3a72cf5ef6ee2fe27d594a28a4a99a9cde17d243558df257c658b93`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00533 — אֹובְרִיזָא — A

**Fonte — ordinal 534:** אֹובְרִיזָא f., אֹובְרִיזֹון, אֹובְרִיזִין m. (ὄβρυζον) pure gold, unalloyed . Targ. Ps. CXIX, 127; Targ. Prov. VIII, 19; a. e.

**Tradução e análise final:** Formas feminina אֹובְרִיזָא e masculinas אֹובְרִיזֹון, אֹובְרִיזִין , do grego ὄβρυζον . Designam ouro refinado, sem liga. Targum Salmos 119.127 e Provérbios 8.19.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `6a7743a3231d808fa21a90feb9f5f38660ecbe7220e746100ce6fc043bdaee91`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00534 — אוּבְשִׁין, — C

**Fonte — ordinal 535:** אוּבְשִׁין, אֻבְשִׁין m. pl. (b. h. בְּאֻשִׁים; cmp. אַבְשׁוּנָא) a species of inferior grapes. Maasr. I, 2 הענבים והאו' משיבאישו Ar. (ed. Talm. B. והאב' משה'; Talm. Y. הבאושין) grapes and ubshin are subject to tithes from the time they are called בְּאוּשָׁה q. v.—Y. Ter. VIII, 45 d top ענבים ואו' וכ' grapes or ubshin for a sick person.

**Tradução e análise final:** Variedades inferiores de uvas, formas אוּבְשִׁין, אֻבְשִׁין . Maaserot 1.2: a sujeição ao dízimo começa na fase chamada בְּאוּשָׁה . Jerusalém Terumot 8, 45d: uvas ou tais frutos para um enfermo; manuscritos apresentam grafias distintas. Aparato filológico — lote 006: Variantes de testemunhos e contexto agrícola: a variedade inferior de uva אוּבְשִׁין/אֻבְשִׁין é comparada ao hebraico בְּאֻשִׁים e אַבְשׁוּנָא . Maaserot 1.2, **segundo o Arukh**, lê הענבים והאו׳ משיבאישו ; o Talmude babilônico na edição tem והאב׳ משה׳ , e o Talmude palestino הבא […]

**Justificativa da correção:** Variantes de testemunhos e contexto agrícola: a variedade inferior de uva אוּבְשִׁין/אֻבְשִׁין é comparada ao hebraico בְּאֻשִׁים e אַבְשׁוּנָא . Maaserot 1.2, **segundo o Arukh**, lê הענבים והאו׳ משיבאישו ; o Talmude babilônico na edição tem והאב׳ משה׳ , e o Talmude palestino הבאושין . Trata-se de determinar o estágio בְּאוּשָׁה para o dízimo, não de qualificar moralmente o fruto. Jerusalém Terumot 8, 45d traz ענבים ואו׳ , uvas e essa variedade oferecidas ao enfermo.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-511-535.js`; SHA-256 do XML `31c395e86514646bdcaa84d1be9e527f9aa93658182c087cc215ded4521269ed`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00536 — אוּגָד — A

**Fonte — ordinal 537:** אוּגָד , v. אֵגֶד

**Tradução e análise final:** Grafia remetida a אֵגֶד .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `030f4502ba38697b8d481ce06513d8ed60d2e311f3f1fbf3b05e9f30cddf3e5e`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00537 — אוגדויי — A

**Fonte — ordinal 538:** אוגדויי , v. next w.

**Tradução e análise final:** Forma abreviada remetida ao numeral grego transcrito na entrada seguinte.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `86f85995658c2afc8aa9a8cc009f3d13a162d714f03b5ebb6e7a75f842288988`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00539 — (זגדור) אוֹגְדוֹר — A

**Fonte — ordinal 540:** (זגדור) אוֹגְדוֹר pr. n. pl. Ogdor (Zigdor) in Samaria. Y. Ab. Zar. V, 44 d . Bab. ib. 31 a זג' (Ms. M. זגרור).

**Tradução e análise final:** Nome de lugar da Samaria, variante זגדור . Jerusalém Avodah Zarah 5, 44d; Avodah Zarah 31a, com variante no manuscrito de Munique.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `696e65c417865f50be0fdd252bc1d481849358d8aae987338148785f70279d87`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00540 — אוֹגְדוּתָא — A

**Fonte — ordinal 541:** אוֹגְדוּתָא f. (אֲגַד II) prolongation . Targ. Y. Deut. XXX, 20, const. אוֹגְדוּת (Var. אוֹגְרוּת).

**Tradução e análise final:** Derivado de אֲגַד II: prolongamento. Targum Pseudo-Jônatas Deuteronômio 30.20, forma construta אוֹגְדוּת , variante אוֹגְרוּת .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `c544abfd7c05aa813a5a333d49ca76bfd87d6f8eaa8b9aceee79583c27222a32`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00541 — אוגורי — A

**Fonte — ordinal 542:** אוגורי , v. אֵגוֹר end.

**Tradução e análise final:** Forma remetida ao final do verbete אֵגוֹר .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `af7a09cd7912451dfe0b8706e921ea9e4748f73ef3869ffd797800988c1512dc`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00542 — (אֻגְיָא) אוּגְיָא — A

**Fonte — ordinal 543:** (אֻגְיָא) אוּגְיָא m. (אגי, sec. r. of אוג, v. אָוֶן ; cmp. עוּגָה) rounded off , whence a field or fields surrounded with a ridge or ditch . Ned. 6 b . Ber. 6 a כי כסלא לא' like the ridge surrounding the field.

**Tradução e análise final:** Terreno arredondado ou delimitado por dique, vala ou sulco. Nedarim 6b; Berakhot 6a: comparação com a elevação ao redor do campo. Variantes אֻגְיָא, אוּגְיָא . A etimologia é reconstruída por Jastrow em associação à ideia de circularidade.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `9e58f92021b8d89b4a55040a90497cea467a2e73f0417a4a8e84de50f8ed43e5`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00543 — אוּגְיָה — A

**Fonte — ordinal 544:** אוּגְיָה f. Pl. אוּגְיוֹת (foreg.) rounded ditch, hole dug around the grape-vine . M. Kat. I, 1 (Rashi to Ber. 6 a , Asheri to Ned. 6 b expl. foreg. w.; ed. עוּגְיוֹת).

**Tradução e análise final:** Vala ou cavidade escavada em círculo ao redor da parreira; plural אוּגְיוֹת . Moed Katan 1.1; explicações de Rashi e Asheri, com variante editorial עוּגְיוֹת .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `e4f74435fb71fd6bf1b2d9118a1b1dc9af461d186ec77e92ed16398cc4ceb5e5`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00545 — אוֹגָנָא — C

**Fonte — ordinal 546:** אוֹגָנָא ch. (v. foreg.) something rounded basin, disk . Targ. Cant. VII, 3 א' דסיהרא the disk of the moon.—B. Mets. 69 b א' דקירא (some ed. אוֹגְנֵי pl., v. Rashi a. l., Ms. M. אַגָּנֵי, v. אַגָּנָא) cake of wax. Cmp. אַגֵּין.

**Tradução e análise final:** Objeto arredondado, bacia ou disco. Targum Cântico dos Cânticos 7.3: אוגנא דסיהרא , “disco da lua”. Bava Metzia 69b: bolo ou disco de cera, com variantes אוגני e אַגָּנֵי . Aparato filológico — lote 006: Gênero de objeto e variantes localizadas: אוֹגָנָא designa objeto arredondado, «bacia, disco»; Targum Cântico 7.3 א׳ דסיהרא , «disco da lua». Bava Metzia 69b א׳ דקירא , «bolo de cera»: certas edições leem plural אוֹגְנֵי (Rashi à passagem) e o manuscrito de Munique אַגָּנֵי (cf. אַגָּנָא ). Não tratar o plural e a leitura do manuscrito como var […]

**Justificativa da correção:** Gênero de objeto e variantes localizadas: אוֹגָנָא designa objeto arredondado, «bacia, disco»; Targum Cântico 7.3 א׳ דסיהרא , «disco da lua». Bava Metzia 69b א׳ דקירא , «bolo de cera»: certas edições leem plural אוֹגְנֵי (Rashi à passagem) e o manuscrito de Munique אַגָּנֵי (cf. אַגָּנָא ). Não tratar o plural e a leitura do manuscrito como variantes fixas do lema em todos os textos; Jastrow compara também אַגֵּין .

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `cffa86d7ad8e440ef8b1b898f2f0af56f18030bc5d061035f76b8ff523b36e12`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00546 — אֶוְגְּנֵס — A

**Fonte — ordinal 547:** אֶוְגְּנֵס , v. אֶבְגִּינוֹס

**Tradução e análise final:** Remissão ao vocábulo אֶבְגִּינוֹס .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `6c54c5e371e111fc90c963b18b82a42be5ba8de522343497008bb7d2593eecc0`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00547 — אוֹגַר — A

**Fonte — ordinal 548:** אוֹגַר Af. of אֲגַר.

**Tradução e análise final:** Forma do causativo aramaico Af'el do verbo אֲגַר ; os sentidos devem ser consultados no verbete verbal.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `f435256714b8309c5f455dd9f3e49ad4cd51b015ff97d3bc8c722638d398bd31`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00548 — אוֹגַר, — A

**Fonte — ordinal 549:** אוֹגַר, אוֹגְרָא m. (אָגַר, גְּרַר) heap of stones, stone-hill (h. גַּל). Targ. Y. Gen. XXXI, 46 (Bab. דְּגוֹרָא); a. fr. V. אֱגוֹרָא I.

**Tradução e análise final:** Formas אוֹגַר, אוֹגְרָא , montículo pedregoso, correspondente a גַּל . Targum Pseudo-Jônatas Gênesis 31.46, com variante no Targum babilônico. Ver אֱגוֹרָא I.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `0be928e98d7383bbf934286b3992250eec4c3bb99d1502256114790852ec3b5e`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00549 — אוגרוי — A

**Fonte — ordinal 550:** אוגרוי , read אוגדויי.

**Tradução e análise final:** Jastrow recomenda substituir a leitura אוגרוי por אוגדויי , ligada ao numeral grego do verbete A00538.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `8dcb3214ee5c518902154ffb86631e53056d998228e0e75b977eaecb30eea234`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00550 — אוגרים — A

**Fonte — ordinal 551:** אוגרים , v. גְּרַם Af.

**Tradução e análise final:** Remissão à forma causativa Af'el do verbo גְּרַם .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `1a9ffdd6332a5b88439f916b6552fdf9b3bf6e2c998d0b3e514bed6d9dcbf6dd`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00551 — אוגרנא — A

**Fonte — ordinal 552:** אוגרנא , v. אַגְדָּנָא

**Tradução e análise final:** Grafia remetida a אַגְדָּנָא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `ab29f17bfdeef3bb6864fc122e9fd0f0ee298538880f0a21af38f0e02a066101`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00552 — אוֹגֶרֶת — A

**Fonte — ordinal 553:** אוֹגֶרֶת f. a knife having notches , v. אָגַר II .

**Tradução e análise final:** Faca cuja lâmina apresenta entalhes, remetendo ao segundo verbo אָגַר . Distinguir de uma faca de corte liso; a fonte não fornece exemplificação adicional nesta entrada.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `2b9a77f64984e6c2e2300b4d9ca2115b319934673116fb4a6af1395a48d5b2b0`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00553 — אוּד — A

**Fonte — ordinal 554:** אוּד m. (b. h., v. Ges. H. Dict. s. v.; cmp. אֵיד) wooden poker . Bets. 33 a ; Sabb. 143 a

**Tradução e análise final:** Bastão ou utensílio de madeira usado para atiçar ou remexer o fogo. Beitzá 33a; Shabbat 143a. Jastrow compara אֵיד .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `21f4d7ddb04e9f8f679644d512a51313b552fb4cff7f4afea4a2f232443efcbc`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00554 — אוּד, — A

**Fonte — ordinal 555:** אוּד, אוּדָא ch. same , also fire-brand . Targ. Am. IV, 11; a. e.— Pl. אוּדֵי, אוּדַיָּא . Targ. Is. VII, 4.—Snh. 93 a (prov. concerning bad company) תרי א' וכ' two dry pieces of wood and a green one between &c.

**Tradução e análise final:** Variantes אוּד, אוּדָא : tição ou pedaço de madeira em combustão. Targum Amós 4.11; plural אוּדֵי, אוּדַיָּא (Targum Isaías 7.4). Sanhedrin 93a usa provérbio sobre duas madeiras secas e uma verde, como ilustração de influência da companhia.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `fddf78c12754c35cd9cb62c5385792a90f36947420d6706a6e03bc6374c0f205`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00555 — אוֹדָאָה, — C

**Fonte — ordinal 556:** אוֹדָאָה, אוֹדָאוּתָא, אוֹדוּתָא f. (ודי, Af. אודי) thanksgiving . Targ. Ps. XLV, 1 (var. אוֹדֵאָתָא); a. e.

**Tradução e análise final:** Formas אוֹדָאָה, אוֹדָאוּתָא, אוֹדוּתָא , de forma causativa relacionada a ודי . Targum Salmos 45.1, com variante אוֹדֵאָתָא . Aparato filológico — lote 006: Flexão e valor da fonte: אוֹדָאָה, אוֹדָאוּתָא, אוֹדוּתָא , feminino, significa **ação de graças, agradecimento**, não somente «reconhecimento de dívida», que pertence a outro vocábulo. Jastrow deriva-o de ודי , af‘el אודי ; Targum Salmos 45.1 apresenta variante אוֹדֵאָתָא . A transliteração da forma não substitui a tradução do significado principal.

**Justificativa da correção:** Flexão e valor da fonte: אוֹדָאָה, אוֹדָאוּתָא, אוֹדוּתָא , feminino, significa **ação de graças, agradecimento**, não somente «reconhecimento de dívida», que pertence a outro vocábulo. Jastrow deriva-o de ודי , af‘el אודי ; Targum Salmos 45.1 apresenta variante אוֹדֵאָתָא . A transliteração da forma não substitui a tradução do significado principal.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `2a382865d671786962a2d47ea1677b345d4e40a19bfef9a77b6937160f46ffba`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00557 — אוּדְיָא — A

**Fonte — ordinal 558:** אוּדְיָא f. (ידי, אדי; cmp. funda = sling and purse) purse . B. Mets. 28 b א' דדינרי (ed. אוּדְיָיא) a purse of denars.

**Tradução e análise final:** Bolsa para dinheiro, comparada por Jastrow à relação entre funda e bolsa. Bava Metzia 28b: אודיא דדינרי , bolsa de denários; edição traz variante אוּדְיָיא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `74a591112c04cdf6836009477e24b28469318fe3cbcd23b057fcf304a402dc68`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00558 — אודיאר — A

**Fonte — ordinal 559:** אודיאר , Toh. VII, 7, v. אוֹרְיָיר

**Tradução e análise final:** Forma em Tohorot 7.7 remetida a אוֹרְיָיר .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `d5c4279cf888bcc6347e54c45243c295fb8cd651bb64e5438f893dd9ce0f09b4`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00559 — אודייא — A

**Fonte — ordinal 560:** אודייא , v. אוּדְיָא

**Tradução e análise final:** Variante gráfica remetida à bolsa de denários אוּדְיָא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-536-560.js`; SHA-256 do XML `7b0972e40fa588456aa71cf7ba3e43c9eac86381acb8c6d28c1a4fcfe214bf3c`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00560 — אודיין — A

**Fonte — ordinal 561:** אודיין , read אוֹרְיָין.

**Tradução e análise final:** A leitura transmitida אודיין deve ser corrigida, segundo Jastrow, para אוֹרְיָין .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-561-570.js`; SHA-256 do XML `4f89d293510086a50aaec683f4c9156c2d0dcdbdd32de60a7caa8047ae06e2d7`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00562 — *אוּדְיָיתָא, — A

**Fonte — ordinal 563:** *אוּדְיָיתָא, I f. pl. (v. foreg.) irrigated fields . Targ. Jer. XXXI, 40 Ar. ed. pr. (ed. אֲרִיתָא q. v. ed. Ven. אֵדִיתָא).

**Tradução e análise final:** Forma plural assinalada com asterisco para campos irrigados. Targum Jeremias 31.40, segundo Arukh e edição de Praga. Edições alternativas registram אֲרִיתָא e אֵדִיתָא .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-561-570.js`; SHA-256 do XML `200ed4a3c875869d9c9751bba20f738685140703d5d28e78f347a20ec7392296`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00563 — *אוּדְיָיתָא, — C

**Fonte — ordinal 564:** *אוּדְיָיתָא, II f. (דוע, v. אַדְווּתָא ) attendant , or superintendent of the vapor bath; cmp. אֲזִי—Y. Shebi. VIII, 38 a זוסימי א' Zosime, the superintendent &c.

**Tradução e análise final:** Assistente ou supervisora do banho de vapor. Jerusalém Sheviit 8, 38a cita זוסימי אודייתא , Zósime, como responsável pelo serviço. A derivação da entrada é proposta pela fonte. Aparato filológico — lote 006: Distinção do homógrafo feminino: אוּדְיָיתָא II, raiz comparada דוע (cf. אַדְווּתָא ), é assistente ou superintendente do banho de vapor , exemplificado por זוסימי א׳ , «Zósime, a responsável», Jerusalém Sheviit 8, 38a. O homógrafo I, de mesmo cabeçalho, é **plural feminino** referente a campos irrigados no Targum Jeremias 31.40; a numeraçã […]

**Justificativa da correção:** Distinção do homógrafo feminino: אוּדְיָיתָא II, raiz comparada דוע (cf. אַדְווּתָא ), é assistente ou superintendente do banho de vapor , exemplificado por זוסימי א׳ , «Zósime, a responsável», Jerusalém Sheviit 8, 38a. O homógrafo I, de mesmo cabeçalho, é **plural feminino** referente a campos irrigados no Targum Jeremias 31.40; a numeração I/II não demonstra origem etimológica comum. A comparação אֲזִי e a explicação radical seguem Jastrow.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-561-570.js`; SHA-256 do XML `8cdde09504e05de1835d2e355e607a0c90718ab97a527011e5d91f1b53324835`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00564 — אוֹדִיצוּתָא — A

**Fonte — ordinal 565:** אוֹדִיצוּתָא f. (דיץ) joy . Targ. Ps. LI, 10 (ed. Vien. אֲדִי').

**Tradução e análise final:** De דיץ , alegria. Targum Salmos 51.10, com variante אֲדִיצוּתָא na edição de Viena.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-561-570.js`; SHA-256 do XML `3cf7198a21b65ba1cb061a87f72e6c41bb03cad7f3008eb21490f97dd08784fa`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00565 — אוֹדִיקוּתָא — A

**Fonte — ordinal 566:** אוֹדִיקוּתָא f. prop. outlook (v. דִּיק ) hence pr. n. pl. Odikutha (h. ציץ) . Targ. II Chron. XX, 16.

**Tradução e análise final:** Literalmente ponto de observação ou mirante; como nome de lugar Odikuta , vertendo ציץ em Targum 2 Crônicas 20.16. Comparar דִּיק .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-561-570.js`; SHA-256 do XML `f345f4f0e48f1fe9ba83b06c63b7abd49ac145aec3628e3bb1bce0fd0c38d73a`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00566 — אֹודִיתָא — C

**Fonte — ordinal 567:** אֹודִיתָא f. (ודי) confession , esp. document stating a debtor’s admission of his indebtedness in presence of witnesses . Snh. 29 b

**Tradução e análise final:** Reconhecimento documental de dívida pelo devedor perante testemunhas. Sanhedrin 29b. Forma pertencente à família verbal ודי . Aparato filológico — lote 006: Sentido geral e aplicação documental: אֹודִיתָא , feminino relacionado a ודי , significa primeiramente **confissão, reconhecimento, admissão**. Em sentido técnico especial, na prática de Sanhedrin 29b, é o documento que registra a admissão de uma dívida pelo devedor perante testemunhas. A glosa original de Jastrow diz «confession, esp. document stating a debtor’s admission»; portanto reduzi […]

**Justificativa da correção:** Sentido geral e aplicação documental: אֹודִיתָא , feminino relacionado a ודי , significa primeiramente **confissão, reconhecimento, admissão**. Em sentido técnico especial, na prática de Sanhedrin 29b, é o documento que registra a admissão de uma dívida pelo devedor perante testemunhas. A glosa original de Jastrow diz «confession, esp. document stating a debtor’s admission»; portanto reduzir o verbete exclusivamente a «reconhecimento documental de dívida» omite o significado-base indicado pela fonte. A atestação dada para o uso técnico não prova ocorrência independente de todos os outros usos de «confissão».

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-561-570.js`; SHA-256 do XML `3606c6f92a46f747fce952da7a75aa90c9df5572671737442d782704bc030daf`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00567 — אֹודֶם — C

**Fonte — ordinal 568:** אֹודֶם m. (אדם) red substance, fleshy substance [cmp. אֲדָמָה, אָדָם; b. h. אֹדֶם rubin ]. Y. Kil. VIII, 31 c bot. הא' מן האשה from the mother the embryo receives the substance for forming skin, flesh, and blood; opp. לֹובֶן white, sticky substance. Nid. 32 b למעוטי איש מא' to exempt man from being unclean from a red (blood) discharge, opp. to לובן white gonorrhoeic discharge.

**Tradução e análise final:** Elemento vermelho ou carnoso: Jerusalém Kilayim 8, 31c atribui à mãe pele, carne e sangue na explicação embriológica antiga; em oposição a לֹובֶן , o elemento branco. Nidá 32b contrasta descargas vermelha e branca em regras de pureza. Não implica validade médica atual. Aparato filológico — lote 006: Campo semântico e textos médicos antigos: אֹודֶם , de אדם , significa «substância vermelha ou carnosa» (cf. אֲדָמָה , אָדָם ), contraposta a לֹובֶן , «substância branca». Jerusalém Kilayim 8, 31c atribui à mãe, na embriologia rabínica, materiais par […]

**Justificativa da correção:** Campo semântico e textos médicos antigos: אֹודֶם , de אדם , significa «substância vermelha ou carnosa» (cf. אֲדָמָה , אָדָם ), contraposta a לֹובֶן , «substância branca». Jerusalém Kilayim 8, 31c atribui à mãe, na embriologia rabínica, materiais para pele, carne e sangue; Nidá 32b למעוטי איש מא׳ distingue descarga avermelhada feminina da descarga esbranquiçada masculina para fins de impureza legal. Jastrow recorda o hebraico bíblico אֹדֶם , «rubi», mas não o apresenta como significado principal deste registro rabínico. As teorias antigas devem ser expostas como tais, sem validar fisiologia moderna.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-561-570.js`; SHA-256 do XML `153735e2f2145e9154a2eb901b509a3ca30c74773b4cb7360420222062bfbe54`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00568 — אֹודֶן, — C

**Fonte — ordinal 569:** אֹודֶן, אוּדַן, אוּדָן, אוּדְנָא, I f. ch. (= h. אֹזֶן, v. Ges. H. Dict. s. v.; √אד, v. אָדַר) ear . Targ. Is. LXIV, 3. Targ. Ps. XVIII, 45 אוּדַן (ed. Vien. אוּדִין?, Ms. אוזן). Targ. Ex. XXIX, 20; a. fr.—Y. Sabb. VI, 8 c bot. טב לא' good for ear-ache; v. Bab. ib. 67 a ; a. fr.— Pl. אוּדְנִין, אוֹדְנִין, אוּדְנַיָּא, אוּדְנֵי . Targ. Deut. XXIX, 3; a. fr. (also אֻדְנִין).—Snh. 106 a . Y. Maas. Sh. IV, 55 b bot.; Lam. R. to I, 1 (חד כותאי

**Tradução e análise final:** Formas אֹודֶן, אוּדַן, אוּדָן, אוּדְנָא . Targum Isaías 64.3, Salmos 18.45, Êxodo 29.20; Jerusalém Shabbat 6, 8c: dor de ouvido. Plurais אוּדְנִין, אוֹדְנִין, אוּדְנַיָּא, אוּדְנֵי . Aparato filológico — lote 006: Formas, leituras e morfologia completas: אֹודֶן, אוּדַן, אוּדָן, אוּדְנָא I, feminino, é «orelha, ouvido», equivalente ao hebraico אֹזֶן . Targum Isaías 64.3; Targum Salmos 18.45 tem אוּדַן , contra edição de Viena אוּדִין? (com interrogação no original) e manuscrito אוזן ; Targum Êxodo 29.20 é paralelo. Em Jerusalém Shabbat 6, 8c טב  […]

**Justificativa da correção:** Formas, leituras e morfologia completas: אֹודֶן, אוּדַן, אוּדָן, אוּדְנָא I, feminino, é «orelha, ouvido», equivalente ao hebraico אֹזֶן . Targum Isaías 64.3; Targum Salmos 18.45 tem אוּדַן , contra edição de Viena אוּדִין? (com interrogação no original) e manuscrito אוזן ; Targum Êxodo 29.20 é paralelo. Em Jerusalém Shabbat 6, 8c טב לא׳ , «bom para dor de ouvido»; cf. Shabbat babilônico 67a. Plurais אוּדְנִין, אוֹדְנִין, אוּדְנַיָּא, אוּדְנֵי , além de אֻדְנִין em ocorrências targúmicas; Targum Deuteronômio 29.3, Sanhedrin 106a, Jerusalém Maaser Sheni 4, 55b e Lamentações Rabá 1.1. Essa identificação de «ouvido» é o destino editorial de remissão abreviada em A00429, mas **não** autoriza corrigir a fonte XML nem confundir os homógrafos II (recipiente) e III (escabelo).

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-561-570.js`; SHA-256 do XML `882d30d6a08f5e7d9873d89a5d3a00039b030dc89a460b5bc9236809c05753d1`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00569 — אוּדְנָא, — C

**Fonte — ordinal 570:** אוּדְנָא, II f. (from its shape, v. foreg. a. P. Sm. 40) 1) leather-bottle, jar (a liquid measure). Pl. אוּדְנִין . Y. Maas. Sh. IV, 55 b bot. (to one who had dreamt he had four udnin = ears, v. foreg.) מלוי את תרתי אֻדְנָיךְ ותרתי אוּדְנוֹי דגרבא thou shalt have wine enough to fill thy own two udnin (wine jars), and two udnin (measures) of a garba (v. גַּרְבָּא I) besides. —2) (Syr. אוזנא, וזנא P. Sm. 49, 1061) bath-tub . Ber. 22 a was sitting בא' דמיא Ar. (ed. באגנא, Ms. Beth. Nath. באוזנא) in a tub filled with an udna of water. Sabb. 157 b א […]

**Tradução e análise final:** Jarro ou recipiente de couro que serve de medida líquida: Jerusalém Maaser Sheni 4, 55b, relato de sonho sobre quatro “udnin”. Também banheira ou tina em Berakhot 22a e Shabbat 157b, com grafias editoriais variáveis. Distinguir da orelha (I) e do escabelo (III). O plural dessa acepção, segundo o XML de Jastrow, é אוּדְנִין . Aparato filológico — lote 006: Distinção de medidas, sonho e banho: אוּדְנָא II é feminino: (1) odre, jarro ou **medida líquida**, em plural אוּדְנִין . Jerusalém Maaser Sheni 4, 55b interpreta o sonho de quatro «orelhas» c […]

**Justificativa da correção:** Distinção de medidas, sonho e banho: אוּדְנָא II é feminino: (1) odre, jarro ou **medida líquida**, em plural אוּדְנִין . Jerusalém Maaser Sheni 4, 55b interpreta o sonho de quatro «orelhas» como promessa de vinho bastante para encher duas orelhas metafóricas (= recipientes) e mais duas medidas de uma גַּרְבָּא ; a ambiguidade com I «orelha» é parte da passagem, **não** prova de que os sentidos sejam idênticos. (2) banheira/tina: Berakhot 22a registra, no Arukh , בא׳ דמיא , «na tina de água», contra edição באגנא e manuscrito Beth Nathan באוזנא ; Shabbat 157b apresenta edição באוונא e manuscrito de Munique אַדָּנָא . As leituras pertencem a lugares textuais diferentes e não devem ser combinadas como um único cabeçalho comprovado.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-561-570.js`; SHA-256 do XML `673514e70010f164ebf9fc17a3d524420baf861fa0e53f9a4e94faea9e3a9ed1`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00570 — אוּדְנָא, — C

**Fonte — ordinal 571:** אוּדְנָא, III אֲדִינָא ( f. ?) (= h. אֶדֶן; cmp. b. h. הֲדֹם; √דא, דנא; cmp. דּוּךְ) foot-stool, camp-chair, folding stool . Targ. Jer. XLIII, 10 אוּדְנֵיה Ar. (ed. אפדניה).— Pl. אוּדְנַיָּא, אֲדִינַיָּא . Targ. II Est. I, 2 תרתין אוּדְנֹוי (תרין?) the double footstool of king Solomon. Tosef. Kel. B. Mets. VIII, 6 מָטָה וישן וכ' (not מיטה) when it bends in (under the weight) but one can sleep on it; if it was originally so made, טמאה (not טהורה) it is unclean מפני שהיא כאו' ed. Zuck. (Var. אדיניא, ed. אדוניא) because it is made like a double fo […]

**Tradução e análise final:** אוּדְנָא, אֲדִינָא , escabelo, apoio de pés ou banqueta articulada. Targum Jeremias 43.10 e Targum Ester 1.2 (assento duplo de Salomão). Tosefta Kelim Bava Metzia 8.6 discute o móvel sob o ângulo de impureza; os manuscritos trazem אדיניא, אדוניא . O original traz os plurais אוּדְנַיָּא, אֲדִינַיָּא e apresenta o gênero feminino com interrogação ( f.? ), não como classificação absolutamente certa. Aparato filológico — lote 006: Crítica de leitura, gênero e objeto: אוּדְנָא III, variante אֲדִינָא , equivale ao hebraico אֶדֶן e significa «apoio de […]

**Justificativa da correção:** Crítica de leitura, gênero e objeto: אוּדְנָא III, variante אֲדִינָא , equivale ao hebraico אֶדֶן e significa «apoio de pés, escabelo ou banqueta dobrável». O feminino é assinalado com interrogação por Jastrow. Em Targum Jeremias 43.10, o Arukh lê אוּדְנֵיה , edição אפדניה . Plurais אוּדְנַיָּא, אֲדִינַיָּא ; Targum Segundo Ester 1.2 תרתין אוּדְנֹוי , com dúvida editorial se o numeral seria תרין . Tosefta Kelim Bava Metzia 8.6 traz na **emenda de Jastrow** מָטָה (não מיטה ) e טמאה (não טהורה ): uma estrutura originalmente feita como escabelo duplo continua suscetível à impureza; edição Zuckermandel מפני שהיא כאו׳ , variante אדיניא , edição אדוניא . Não converter emendas propostas em testemunhos literais nem fundir com II (vaso).

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-571-580.js`; SHA-256 do XML `6c9479328c9d694a972642805cdf8911088f82da0c1aa87d8ebfc3c7bbb7bfc2`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00572 — *אוּדְרָךְ — A

**Fonte — ordinal 573:** *אוּדְרָךְ m. (דרך) a crushing tool, pestle, pounding club . Targ. Prov. XXVII, 22 ed. Buxt. (better, like oth. ed. אוּרְדָּךְ).

**Tradução e análise final:** Instrumento para socar ou esmagar, derivado de דרך . Targum Provérbios 27.22, na edição de Buxtorf. Jastrow prefere a leitura אוּרְדָּךְ de outras edições.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-571-580.js`; SHA-256 do XML `ca25669e2b2777258f6b85a641ca2a9ff257393458c9673fccfe3b58888c45b2`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00573 — אָוָה — A

**Fonte — ordinal 574:** אָוָה , v. אוי

**Tradução e análise final:** Forma remetida ao verbete אוי .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-571-580.js`; SHA-256 do XML `0a3cf60719d2b6f205983e01d0a379ac08edda93342a459a98569c7b1338416a`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00574 — אֹוהֶל, — A

**Fonte — ordinal 575:** אֹוהֶל, אֹוהָל, אֹוהָלָא, אֹוהֳלַיָּיא , v. אהל'

**Tradução e análise final:** Remissões de variantes אֹוהֶל, אֹוהָל, אֹוהָלָא, אֹוהֳלַיָּיא a entradas da família אהל .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-571-580.js`; SHA-256 do XML `f0caa659c4f60cea0b80440b897b5a107a7cc53236a0a0e3ed7fe3f233d07fec`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00575 — (הֹוהֲרָא) אֹוהֲרָא — A

**Fonte — ordinal 576:** (הֹוהֲרָא) אֹוהֲרָא m. (= חוחרא, redupl. of חרי Ar.) net-work , esp. loose fisher’s net , contrad. to אִיזְלָא. Y. M. Kat. III, 81 b top הו'.— Pl. אֹוהֲרֵי . M. Kat. 11 a למיגדל א' (Alf. אוחרי) to plait nets. Git. 60 b bot.

**Tradução e análise final:** Rede de malha frouxa, contraposta a אִיזְלָא . Jerusalém Moed Katan 3, 81b. Plural אֹוהֲרֵי ; Moed Katan 11a menciona trançar redes, com variantes no Alfasi; Gitin 60b.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-571-580.js`; SHA-256 do XML `0f481abaaed2a3ae3b0f68e8cef8c709603b5ade7d81551d4870f90eaff96ff3`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00576 — אֶוְוגִּינִיסְטָאטֵי — A

**Fonte — ordinal 577:** אֶוְוגִּינִיסְטָאטֵי , v. אבגניסטי

**Tradução e análise final:** Forma remetida a אבגניסטי .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-571-580.js`; SHA-256 do XML `d07d2b1cc884ac522715b9686c59ae48ea8ba03f23da3e7d6f44240dd526364a`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00577 — אָוָוז — C

**Fonte — ordinal 578:** אָוָוז m. (√אוו, v. אְוַשׁ ; cmp. Syr. וזא, a. וזוז bombum edit , P. Sm. 1060) [the noisy], goose . Ber. 57 a הרואה א' וכ' he who sees a goose in his dream, may hope for wisdom (with ref. to Prov. I, 20, ‘wisdom cries’ &c.). Y. B. Kam. V, end 5 a אֲוַוז ים וא' יישוב וכ' the water goose (bernicle) and the domestic goose are two diff. species (כלאים); Y. Kil. VIII, 31 c bot. א' עם א' מדבר וכ' the (domestic) goose and the goose of the steppes (wild g.); א' עם א' הים the domestic and the water goose; B. Kam. 55 a א' וא' הבר (Ms. M. marg. אֲוַוז בית […]

**Tradução e análise final:** Ganso, possivelmente nome associado à vocalização, segundo hipótese de Jastrow. Berakhot 57a: sonhar com ganso é presságio interpretado de sabedoria. Jerusalém Bava Kamma 5, 5a, Kilayim 8, 31c e Bava Kamma 55a distinguem ganso doméstico, selvagem e aquático para a legislação de espécies. Aparato filológico — lote 006: Contrastes de espécies e interpretação onírica: Jastrow relaciona אָוָוז , «ganso», de modo conjectural a uma raiz que remete ao ruído da ave; compara siríaco e אַוַשׁ . Berakhot 57a explica o sonho de ganso como presságio de sabe […]

**Justificativa da correção:** Contrastes de espécies e interpretação onírica: Jastrow relaciona אָוָוז , «ganso», de modo conjectural a uma raiz que remete ao ruído da ave; compara siríaco e אַוַשׁ . Berakhot 57a explica o sonho de ganso como presságio de sabedoria por jogo com Provérbios 1.20, a sabedoria que «clama». Jerusalém Bava Kamma 5, fim, 5a, distingue אֲוַוז ים , ganso aquático, de אֲוַוז יישוב , ganso doméstico; Jerusalém Kilayim 8, 31c contrapõe ganso doméstico e do deserto, bem como doméstico e aquático, sob proibições de misturas. Bava Kamma 55a tem א׳ וא׳ הבר , variante da margem do manuscrito de Munique אֲוַוז בית וא׳ בר , ganso doméstico e selvagem. Bekhorot 8a é citado adicionalmente. «Ganso aquático = bernicle» é glosa antiga de Jastrow, não identificação taxonômica moderna demonstrada.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-571-580.js`; SHA-256 do XML `86cf43c87c50cf91a8610a8f3f0ee1356d7fe52ae222f5bdb2467f7b4908f4ef`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00578 — אַוְוזָא — C

**Fonte — ordinal 579:** אַוְוזָא אֲוָוזָא ch. same. Git. 86 a .—בר א' duck . Bets. 33 a . Pl. אֲוָוזִין, אַוְוזֵי . Targ. II Esth. III, 8. Pes. 114 a . B. Bath. 73 b . Ḥull. 56 b הנהו א' דידן וכ' our (Babylonian) geese are considered as water fowls.

**Tradução e análise final:** Forma aramaica de ganso, variantes אַוְוזָא, אֲוָוזָא . Expressão בַּר אווזא pode designar pato (Beitzá 33a). Plurais אֲוָוזִין, אַוְוזֵי ; Targum Ester 3.8, Pesahim 114a; Hulin 56b discute gansos babilônicos. Aparato filológico — lote 006: Empréstimos de formas e plural: אַוְוזָא, אֲוָוזָא são formas aramaicas de «ganso» (Gitin 86a); בַּר א׳ , «pato», é expressão lexical distinta em Beitzá 33a. Plurais אֲוָוזִין, אַוְוזֵי , com referências a Targum Segundo Ester 3.8, Pesahim 114a, Bava Batra 73b; Hulin 56b הנהו א׳ דידן , «nossos gansos [da Bab […]

**Justificativa da correção:** Empréstimos de formas e plural: אַוְוזָא, אֲוָוזָא são formas aramaicas de «ganso» (Gitin 86a); בַּר א׳ , «pato», é expressão lexical distinta em Beitzá 33a. Plurais אֲוָוזִין, אַוְוזֵי , com referências a Targum Segundo Ester 3.8, Pesahim 114a, Bava Batra 73b; Hulin 56b הנהו א׳ דידן , «nossos gansos [da Babilônia]», considerados aves aquáticas. A categorização é textual e jurídica, não classificação zoológica contemporânea.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-571-580.js`; SHA-256 do XML `a73cb250155d9c45893e674e6410e7d4429e701515a352eedbd1c2a95a625fc3`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00579 — אֲוַול, — A

**Fonte — ordinal 580:** אֲוַול, אַוְולָא , v. אֲוַל

**Tradução e análise final:** Variantes אֲוַול, אַוְולָא remetidas a אֲוַל .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-571-580.js`; SHA-256 do XML `b59da8c687db5281fb8afe6e5d8dc2295fcf9de2e8866ec960abbbf67aa259c7`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00580 — אוולם, — A

**Fonte — ordinal 581:** אוולם, אוולס , v. אַבְלַס

**Tradução e análise final:** Grafias אוולם, אוולס remetidas ao verbete אַבְלַס .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `c42ea49b1e642d4760402319fba684e8a4a270bed1257de3de21e0061c22d7f2`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00581 — אָוֶון — A

**Fonte — ordinal 582:** אָוֶון , v. אָוֶן

**Tradução e análise final:** Remissão de אָוֶון a אָוֶן .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `9856d8a9fb3734b3ed71785bbb33d5c9038339f6c212088b4bf360419eca732a`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00582 — אַוָּונָא, — A

**Fonte — ordinal 583:** אַוָּונָא, אַוְונָא , v. אַוְנָא a. אוּדְנָא II

**Tradução e análise final:** Formas אַוָּונָא, אַוְונָא remetidas a אַוְנָא e ao segundo homógrafo אוּדְנָא , relativo a recipientes.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `7a7db9a248567e8c58217c139df32b1ebd697ac4a9f3aa732025bc762160c516`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00583 — אֲוַונְכַּר — A

**Fonte — ordinal 584:** אֲוַונְכַּר , v. אֲוַנְכַּר

**Tradução e análise final:** Forma remetida a אֲוַנְכַּר .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `28a7e3372ada3e771daa56dfb2c94b440403de6d1060f246748ef68499e84a50`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00584 — אֶוְוסֹוס — A

**Fonte — ordinal 585:** אֶוְוסֹוס , v. אֹובִיסֹוס

**Tradução e análise final:** Grafia alternativa do nome da cidade de Éfeso, remetida a אֹובִיסֹוס .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `1756ea2149b94d8442038ceeb82e3fddfe1e8e862cf5184ad0dd8155f298b962`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00585 — אווקי — A

**Fonte — ordinal 586:** אווקי , v. אוקיי

**Tradução e análise final:** Forma remetida ao verbete אוקיי .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `b0e9650542fa678df0aa0558eb84120054802ea8c9f4caf689de0b3ac50fc65a`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00586 — *אַוְורָא — C

**Fonte — ordinal 587:** *אַוְורָא m. ; pl. אַוְורֵי (אֲוַר dial. for עבר, v. Nœld. Mand. Gr. p. 48 sq.; v. Ar. s. v. where אוברים = עוברים [not אובדים as in ed. Koh.] is twice used to account for the etymol. of our w.) crossers of rivers, travelers . בֵּי א' 1) crossing, ford . B. Mets. 103 b אריסא עביד בי א' Ar. (ed. בי יאורי; Ms. H. בי אוריא, marg. יאורי) the tenant must entertain the crossings (of the dykes, ed. the channels ) in the farm. M. Kat. 28 b רהיט ונפיל בי א' ואמברי יזיפתא יזיף Ar. (ed. ונפיל אמעברא ויזיפתא וכ' …, Ms. M. ונפיל בר זיירא אמברא …, v. Rabb. D […]

**Tradução e análise final:** Plural אַוְורֵי , “pessoas que atravessam rios, viajantes”; a etimologia é comparada por Jastrow a עבר . בֵּי אַוְורֵי : (1) vau, passagem por rio ou por diques; Bava Metzia 103b atribui ao arrendatário manutenção da passagem. (2) Grupo de viajantes à espera de atravessar. Moed Katan 28b utiliza travessia e barqueiro em alegoria sobre preparação para a vida futura. Há variantes editoriais e interpretativas. Aparato filológico — lote 006: Parentesco, variantes e duas interpretações: Jastrow relaciona *אַוְורָא , plural אַוְורֵי , a «pessoas que  […]

**Justificativa da correção:** Parentesco, variantes e duas interpretações: Jastrow relaciona *אַוְורָא , plural אַוְורֵי , a «pessoas que atravessam rios», supondo variante dialetal de עבר ; compara Nöldeke, Mandaic Grammar , p. 48 ss. O Arukh entende אוברים como עוברים , contra leitura impressa de Qohelet אובדים , corrigenda segundo Jastrow. בֵּי א׳ pode ser (1) vau/passagem: Bava Metzia 103b no Arukh אריסא עביד בי א׳ , «arrendatário mantém as passagens dos diques», contra edição בי יאורי , «canais», manuscrito H. בי אוריא , margem יאורי . Moed Katan 28b narra correr ao vau e recorrer a empréstimo para a barca: leitura do Arukh e variantes da edição e manuscrito M. citadas em Rabbinovicz. (2) segundo o Arukh , «entre os viajantes prestes a atravessar», os mortais, na mesma alegoria sobre despreparo para a vida futura. A leitura do barqueiro e a do conjunto de viajantes são interpretações concorrentes, não novas raízes seguras.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `b87e1ea9b1d64f1bf95579830ba2b5412e953eeae008d772ad5aef65123ccd5d`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00587 — אֲוַורְדִּימָס — A

**Fonte — ordinal 588:** אֲוַורְדִּימָס , v. וַרְדִּימֹוס

**Tradução e análise final:** Grafia remetida ao nome próprio וַרְדִּימֹוס .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `4a32ea22f9c7dd8ce841c20cd49392281562cf5e2084170a552046fe6087c5df`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00588 — אוורוס — A

**Fonte — ordinal 589:** אוורוס , v. אִבְרֹוסִי

**Tradução e análise final:** Forma remetida ao verbete אִבְרֹוסִי .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `e627387360d0acb5b4509de870a51b06d993340525d2af7cda3130eeb9366d03`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00589 — *אַוְורַקְסִין, — A

**Fonte — ordinal 590:** *אַוְורַקְסִין, אברסקין m. pl. (cmp. אפקרסין, a. אַבְרְקִין) trowsers . Targ. Y. I, a. II Ex. XXVIII. 42; ib. I, Ex. XXXIX, 28 אוורקסי. Ib. Lev. VI, 3 (ed. Vien. אורקטין, II אברסקין). Ib. XVI, 4. [For וו = פ v. אֶוְושַׁר.]

**Tradução e análise final:** Formas אַוְורַקְסִין, אברסקין , calças ou peças de roupa para as pernas. Targum Pseudo-Jônatas Êxodo 28.42, 39.28 e Levítico 6.3 e 16.4, com variantes אורקטין . Jastrow aproxima também אפקרסין e formas com alternância de consoantes.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-581-590.js`; SHA-256 do XML `d58e24264a72aff9ddc1b3dd69113178596ddb0147d9351031cdaaf284487d9d`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00590 — אַוְורַשְׁנָא — A

**Fonte — ordinal 591:** אַוְורַשְׁנָא Ar. (ed. אוּרְשִׁינָה) m. name of a mythical bird, Phœnix . Snh. 108 b

**Tradução e análise final:** Nome dado a uma ave mítica, comparada à fênix . Sanhedrin 108b. Jastrow registra variantes אַוְורַשְׁנָא ( Arukh ) e אוּרְשִׁינָה (edição). Referência mitológica, não espécie zoológica atestada.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-591-600.js`; SHA-256 do XML `34b376be9beb1eabd3fef00784a9232d5033f4401a35b478f83b1143c4702569`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00591 — אַוַּושׁ — A

**Fonte — ordinal 592:** אַוַּושׁ , v. אֲוַשׁ

**Tradução e análise final:** Forma remetida a אֲוַשׁ .

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-591-600.js`; SHA-256 do XML `1f1b25ee38ecb5754c4ec78837411f7311b45dfa7555523579458358a341b870`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00593 — אֶוְותִּיאֹוס, — C

**Fonte — ordinal 594:** אֶוְותִּיאֹוס, (אותיום) אֶוְתִּיֹוס (εὐθέως) forthwith, immediately after. Nid. II, 2 (14 a ) נמצא על שלה א' Ar. (ed. אותיום, corr. acc.) if a stain is found on her bedclothes immediately after (the coïtion). Ib. 12 b ; 14 b איזהו שיעור אוו' Ar. ed. Koh. (ed. ותס, וסת, corr. acc.) what is the interval designated by evthios? Y. Nid. II, 49 d bot. repeatedly הֶיוְתִּיאֹוס or הֶוְו'.

**Tradução e análise final:** Variantes originais: אֶוְותִּיאֹוס; (אותיום) אֶוְתִּיֹוס . Do grego εὐθέως , “imediatamente, logo em seguida”. Nidá 2.2, 14a: marca encontrada nas vestes imediatamente após a relação conjugal; Nidá 12b,14b discute intervalo temporal designado pelo termo. Jerusalém Nidá 2, 49d registra variantes הֶיוְתִּיאֹוס . Distinguir o vocábulo de grafias editoriais אותיום, וסת . Aparato filológico — lote 006: Transcrição grega e aparato local: אֶוְותִּיאֹוס, אֶוְתִּיֹוס , do grego εὐθέως , «logo, imediatamente depois», é termo técnico da aferição do interv […]

**Justificativa da correção:** Transcrição grega e aparato local: אֶוְותִּיאֹוס, אֶוְתִּיֹוס , do grego εὐθέως , «logo, imediatamente depois», é termo técnico da aferição do intervalo após relações sexuais em Nidá 2.2 (14a), נמצא על שלה א׳ , «mancha encontrada nas vestes dela imediatamente depois». O cabeçalho conserva variante entre parênteses אותיום . Nidá 12b e 14b, na edição de Kohut ao Arukh , têm איזהו שיעור אוו׳ , «qual duração se chama imediatamente?», contra leituras da edição ותס, וסת , que Jastrow considera passíveis de correção. Jerusalém Nidá 2, 49d apresenta הֶיוְתִּיאֹוס ou abreviação הֶוְו׳ . O contexto médico-jurídico antigo não equivale a conclusão clínica moderna.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-591-600.js`; SHA-256 do XML `d3b989eae5bc0920f0bb041da2e84263ae628de14fe85d2bcc53c21d08319f5b`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00594 — אוותיננייה — A

**Fonte — ordinal 595:** אוותיננייה , v. אוותנטיא

**Tradução e análise final:** Grafia remetida ao grupo lexical אוותנטיא , da família de autenticidade.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-591-600.js`; SHA-256 do XML `9bc1b7746345c24b375fd55b6a303d0a2c6970f4f198200ffa0301c3067fdae3`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00595 — *אַוְותָּן, — C

**Fonte — ordinal 596:** *אַוְותָּן, אִיוְתָּן m. (= h. אֵיתָן, r. אית) full, proud, bright . Targ. Job XXXI, 26 Ms. (ed. זִיוְתָן).— Pl. אִיוְתָּנַיָּא Ib. IX, 13 (ed. Buxt. a. oth. גֵּיוְתָנַיָּא)

**Tradução e análise final:** Variantes אַוְותָּן, אִיוְתָּן , relacionadas por Jastrow ao hebraico אֵיתָן : cheio, altivo ou brilhante. Targum Jó 31.26 (manuscrito; edição זִיוְתָן ); plural אִיוְתָּנַיָּא , Jó 9.13, com variantes. Aparato filológico — lote 006: Flexão e variantes precisas: *אַוְותָּן, אִיוְתָּן , «cheio, altivo, resplandecente», é equiparado por Jastrow ao hebraico אֵיתָן (raiz אית ). No Targum Jó 31.26, o **manuscrito** tem o termo, mas a edição lê זִיוְתָן . Plural אִיוְתָּנַיָּא em Targum Jó 9.13, contra edições de Buxtorf e outras גֵּיוְתָנַיָּא . Ast […]

**Justificativa da correção:** Flexão e variantes precisas: *אַוְותָּן, אִיוְתָּן , «cheio, altivo, resplandecente», é equiparado por Jastrow ao hebraico אֵיתָן (raiz אית ). No Targum Jó 31.26, o **manuscrito** tem o termo, mas a edição lê זִיוְתָן . Plural אִיוְתָּנַיָּא em Targum Jó 9.13, contra edições de Buxtorf e outras גֵּיוְתָנַיָּא . Asterisco no lema sinaliza intervenção editorial do léxico; não deve ser reproduzido como grafema da fonte rabínica.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-591-600.js`; SHA-256 do XML `cd491859a981c8cd0ce921eb4612268097118ad4fc86306895c9669f27d39de5`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00596 — אוותנטי — A

**Fonte — ordinal 597:** אוותנטי , v. אַוְותֶּנְטִין

**Tradução e análise final:** Remissão ao plural de אַוְותֶּנְטִי , “autor, originador”.

**Justificativa da aprovação:** leitura correspondente às acepções, formas e remissões pertinentes no original digital; nenhum ajuste material necessário.\n\n**Rastreamento:** módulo `lexicons/jastrow-591-600.js`; SHA-256 do XML `d0717b7048593a43295a6e52daba6c65716176911c9170b6547eab37a2a71f40`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00597 — אַוותֶּנְטְיָא, — C

**Fonte — ordinal 598:** אַוותֶּנְטְיָא, אַוְתֶּ', אַוְותֶּנְטְיָיה f. (αὐθεντία) origin, reality; v. next w. —עיקר א' the very reality, virtuality . Gen. R. s. 25 עיקר א' וכ' the real famine was destined to be in the days of Saul. Cant. R. to I, 1 עיקר א' וכ' the real, authentic, among the several names of Solomon &c. Koh. R. to I, 1 אית' (corr. acc.). Num. R. s. 10 אוותיננייה (corr. acc.).

**Tradução e análise final:** Formas do cabeçalho: אַוותֶּנְטְיָא; אַוְתֶּ'; אַוְותֶּנְטְיָיה . A segunda está abreviada no original e não deve ser expandida sem testemunho. Do grego αὐθεντία , origem ou realidade efetiva. Expressão עיקר אוותנטיא : “a realidade propriamente dita”. Gênesis Rabá 25: a fome verdadeira ocorreria nos dias de Saul. Cântico dos Cânticos Rabá 1.1: nome autêntico entre os atribuídos a Salomão. Jastrow menciona variantes em Eclesiastes Rabá e Números Rabá 10. Aparato filológico — lote 006: Grego e escala de autenticidade: אַוותֶּנְטְיָא, אַוְתֶּ׳, אַ […]

**Justificativa da correção:** Grego e escala de autenticidade: אַוותֶּנְטְיָא, אַוְתֶּ׳, אַוְותֶּנְטְיָיה são variantes, a segunda **abreviada** no original. Jastrow relaciona ao grego αὐθεντία , «origem; realidade efetiva» (cf. o próximo verbete). עיקר א׳ é «a verdadeira realidade»; Gênesis Rabá §25 aplica-a à fome que ocorreria nos dias de Saul; Cântico Rabá 1.1 à identidade autêntica de um dos nomes atribuídos a Salomão. Eclesiastes Rabá 1.1 imprime אית׳ , para o qual Jastrow propõe emenda; Números Rabá §10 tem אוותיננייה com a mesma ressalva. Não expandir abreviações ou emendas como se fossem leituras confirmadas.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-591-600.js`; SHA-256 do XML `c790e25c1164214b337fd96923193d498e0cec54a8603a2099daa50de8186656`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00598 — אַוְותֶּנְטִי, — C

**Fonte — ordinal 599:** אַוְותֶּנְטִי, (אפתנטי) m. (αὐθέντης) originator, author . Gen. R. s. 16 פרת א' של וכ' the Euphrates is the originator (ultimate source) of the rivers (mentioned Gen. II, 10 sq.).— Pl. m. אַוְותֶּנְטִין . Y’lamd. to Num. XI, 16 (quot. in Ar. s. v. אמתנטין) כנגד אפת' של ישראל וכ' (corr. אוו') corresponding to the number of the originators of Israel, for with seventy souls &c.—Fem. אַוְותֶּנְטִיֹּות, אַוְותֶּנְטִיאֹות. Pesik. Sh’kal. p. 16 b אומות א' (seventy) original nations.

**Tradução e análise final:** Grafia parentética: אפתנטי . Do grego αὐθέντης : autor ou aquele que dá origem. Gênesis Rabá 16 chama o Eufrates de fonte originária dos rios. Plural אַוְותֶּנְטִין , usado em passagem sobre ancestrais de Israel (Yelammedenu, Nm 11.16). Femininos plurais אַוְותֶּנְטִיֹּות, אַוְותֶּנְטִיאֹות , Pesikta Shekalim: nações originárias. Aparato filológico — lote 006: Flexões, imagens e referências: אַוְותֶּנְטִי , variante אפתנטי , do grego αὐθέντης , «iniciador; autor; fonte originária». Gênesis Rabá §16 apresenta פרת א׳ של , «o Eufrates é a fonte pr […]

**Justificativa da correção:** Flexões, imagens e referências: אַוְותֶּנְטִי , variante אפתנטי , do grego αὐθέντης , «iniciador; autor; fonte originária». Gênesis Rabá §16 apresenta פרת א׳ של , «o Eufrates é a fonte principal» dos rios de Gênesis 2.10 ss. Plural masculino אַוְותֶּנְטִין : Yelammedenu a Números 11.16 citado pelo Arukh tem כנגד אפת׳ של ישראל , cuja emenda para אוו׳ é proposta por Jastrow; evoca setenta fundadores de Israel. Plurais femininos אַוְותֶּנְטִיֹּות, אַוְותֶּנְטִיאֹות em Pesikta Shekalim p. 16b, אומות א׳ , «setenta nações originárias». «Autêntico» pertence ao campo etimológico, mas o significado concretamente glosado na fonte é «originador».

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-591-600.js`; SHA-256 do XML `627fc0bb3b4e81e3778d2f0b03333b6713864b417641742c446632955df10a55`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.


### A00599 — *(אוּסְיָא) אוּזְיָא — C

**Fonte — ordinal 600:** *(אוּסְיָא) אוּזְיָא f. (√אז, v. אֲזַד ; cmp. קָצֶה) a piece , part, uzya , a market term for a certain portion (quarter &c.) of meat. Bets. 29 a in Pumb. they call it א' ופלגא א' Ms. M. (ed. ופלגו א' corr. acc.; Var. אוסיא) an uzya and half an uzya.

**Tradução e análise final:** Termo mercantil para determinada porção ou fração de carne, uzya . Formas אוּזְיָא, אוּסְיָא . Beitzá 29a: em Pumbedita dizia-se “uma uzya e meia uzya” para quantificar carne; manuscrito de Munique e edição apresentam variantes. O tamanho exato da porção não é fixado pela fonte. Aparato filológico — lote 006: Medida comercial e não quantificada: *(אוּסְיָא) אוּזְיָא é termo feminino de mercado para uma fração de carne, «uzya», talvez quarto ou outra parte, **sem tamanho exato comprovado**. Jastrow propõe relação radical com אז , אֲזַד e קָצֶה . […]

**Justificativa da correção:** Medida comercial e não quantificada: *(אוּסְיָא) אוּזְיָא é termo feminino de mercado para uma fração de carne, «uzya», talvez quarto ou outra parte, **sem tamanho exato comprovado**. Jastrow propõe relação radical com אז , אֲזַד e קָצֶה . Beitzá 29a, em Pumbedita, א׳ ופלגא א׳ , «uma uzya e meia uzya», é a leitura atribuída ao manuscrito de Munique; a edição tem ופלגו א׳ , que o autor recomenda corrigir. Variante אוסיא . Preservar a distinção entre medida lexicalmente identificada e a conjectura numérica («quarter etc.») do autor.

**Comparação:** versão anterior do HTML e versão posterior integralmente preservadas na parte de evidências identificada no manifesto.

**Rastreamento:** módulo `lexicons/jastrow-591-600.js`; SHA-256 do XML `68c141bc5959b1339658cbf01532d4b3434789b07ffc87b4446faab12af35d00`. O conteúdo XML completo e ambos os HTMLs permanecem na matriz de evidências.



## 5. Auditoria técnica, preservação histórica e limites

- **Integridade global:** 27 arquivos de módulos de verbetes executados em três grupos independentes, de 210, 225 e 165 registros. Juntos, 600 `search-row` e 600 `entry-card`, IDs exatamente `A00000`–`A00599`, sem lacunas, repetidos ou destinos divergentes. Os seis módulos de popups também passaram na sintaxe JavaScript; testes reais de interface não realizados.
- **Módulos alterados neste lote:** `jastrow-486-510.js`, `jastrow-511-535.js`, `jastrow-536-560.js`, `jastrow-561-570.js`, `jastrow-571-580.js`, `jastrow-581-590.js`, `jastrow-591-600.js`. `jastrow-461-485.js` foi lido e verificado sem alteração.
- **Fonte imutável:** XML canônico preservado e comparado com a redação portuguesa, sem normalizar silenciosamente as variantes. A independência entre Fonte, Tradução, Análise e GDHAGP permanece preservada.
- **Histórico:** o checkpoint anterior de 500 registros fica arquivado integralmente em `auditoria/jastrow-auditoria-unica-progresso-lote005-arquivo.json`, blob Git `afcb22b95d363ffb8fd8888c94dbf85eb096b46d`. O novo checkpoint inclui os 600 IDs A/C, ordinais, lotes e hashes disponíveis; os pareceres anteriores ficam rastreáveis por seus arquivos de evidência sem alteração. O checkpoint histórico de 400 registros do lote anterior permanece arquivado separadamente.
- **Escopo negativo:** não prova autenticidade de cada leitura rabínica, edição física, reconstituição etimológica ou equivalência de todas as variantes com fontes primárias; onde Jastrow propõe emendas, cognatos ou sentidos conjecturais, estes permanecem atribuídos ao autor e não convertidos em fatos independentes.

**Arquivos da conclusão:** [manifesto com 100 evidências](JASTROW-2026-10-12-lote-006-100-evidencias-manifest.json), [checkpoint dos 600](jastrow-auditoria-unica-progresso.json), [teste estático dos 600](JASTROW-2026-10-12-lote-006-100-testes.json), e quatro partes `evidencias-parte-01.json` até `-04.json`, cada uma com 25 entradas.

## 6. Quadro global obrigatório das 14 fontes

**Fotografia:** HEADs das branches consultadas em 12/10/2026; os totais não JASTROW são checkpoints de origem anteriores que não foram recontados nesta operação. Não confundir origem, auditoria filológica, testes de interface e integração.

| Dicionário | Incorporação | Auditoria textual e estrutural | Auditoria filológica | Integração | Total incorporado |
|---|---|---|---|---|---:|
| BDAG | ✓ 1.161 | ◐ não recontada aqui | — sem homologação integral confirmada neste ciclo | ◐ não recontada | 1.161 |
| DGP | ✓ 3.300 | ✓ 3.300/3.300, estática histórica documentada | ◐ 600/3.300 (A 528, C 4, P 68) | ◐ 2.880/3.300, último checkpoint conhecido | 3.300 |
| LEH | ✓ 690 | ◐ não recontada aqui | — não comprovada aqui | ◐ módulo presente, sem recontagem | 690 |
| PEREIRA | ✓ 510 | ◐ não recontada aqui | — não comprovada aqui | ◐ módulo presente, sem recontagem | 510 |
| **JASTROW** | **✓ 600** | **✓ 600/600 em validação estática global** | **✓ 600/600, A 401, C 199, P 0** | módulos-base existentes; reparos do lote 006 não mesclados nesta ação | **600** |
| THAYER | ✓ 512 | ✓ 512/512, estática documentada | — triagem de lemas não equivale a homologação semântica integral | módulos presentes | 512 |
| HALOT | ◐ 100 preliminares | ◐ prévia de extração | — | ✓ 100 módulos técnicos, não homologados | 100 |
| ROBINSON | — | — | — | — | 0 |
| KLEIN | — | — | — | — | 0 |
| ABBOTT-SMITH | — | — | — | — | 0 |
| BDB-H | — | — | — | — | 0 |
| BDB-A | — | — | — | — | 0 |
| GESENIUS | — | — | — | — | 0 |
| LSJ | — | — | — | — | 0 |
| **TOTAL** | **6.873 nas origens** | **cobertura heterogênea** | **heterogênea, etapas não intercambiáveis** | **sem soma duplicada** | **6.873** |

A soma 6.873 representa registros disponíveis nas fontes do projeto, não 6.873 pareceres filológicos vigentes e nem 6.873 itens comprovadamente integrados. As branches não JASTROW têm HEADs estáveis em relação ao ciclo anterior; ausência de recontagem é sinalizada.

## 7. Estado final e trabalho independente

**Auditoria JASTROW no universo de 600 registros: concluída, A=401, C=199, P=0; nenhum próximo ID dentro do universo.** Continuam como processos distintos a integração de branches via Pull Request e os testes DOM/visuais do aplicativo. Uma futura incorporação de mais verbetes do Jastrow, se requerida, criará um novo universo e demandará nova cobertura editorial, sem reabrir automaticamente a auditoria deste recorte.

A norma transversal `regras/Rtransparencia-relatorios.txt` segue aplicável às demais 13 frentes e a futuras execuções.
