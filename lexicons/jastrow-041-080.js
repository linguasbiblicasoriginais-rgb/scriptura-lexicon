"use strict";
/* JASTROW: A00040–A00079, tradução editorial portuguesa; fonte XML preservada separadamente. */
(function(){
const lex=window.ScripturaLexicons && window.ScripturaLexicons.JASTROW;
if(!lex)throw Error("JASTROW base module required");
const entries=[
  {
    "sid": "A00040",
    "lemma": "אֶבְדִּימָא",
    "type": "Remissão",
    "gloss": "ver Ebdimos",
    "html": "Variante de <bdi lang='he' dir='rtl'>אֶבְדִּימוֹס</bdi>, verbete seguinte."
  },
  {
    "sid": "A00041",
    "lemma": "אֶבְדִּימוֹס",
    "type": "Nome próprio masculino",
    "gloss": "Ebdimos; Eudemo",
    "html": "Nome próprio masculino, do grego <span lang='grc'>Εὔδημος</span> (Eudemos). Variantes e abreviações: <bdi lang='he' dir='rtl'>אבדימא, אבדימי</bdi>; grafias consideradas corruptas por Jastrow: <bdi lang='he' dir='rtl'>אבדומי, אבודמא, אבודמי</bdi>. Designa vários amoraítas, especialmente Ebdimos de Séforis (Jerusalém Berakhot 4, 8a; Jerusalém Ketubot 11, 34b). Ver também <bdi lang='he' dir='rtl'>וַרְדִּימוֹס</bdi>."
  },
  {
    "sid": "A00042",
    "lemma": "אַבְדָּלָה",
    "type": "Substantivo feminino aramaico",
    "gloss": "separação; distinção; havdalá",
    "html": "Variantes <bdi lang='he' dir='rtl'>אַבְדָּלָה, אַבְדַּלְתָּא</bdi>, correspondentes ao hebraico <bdi lang='he' dir='rtl'>הַבְדָּלָה</bdi>. <strong>1.</strong> Ato de distinguir, distinção ou separação (Jerusalém Berakhot 8, 12c). <strong>2.</strong> <i>Havdalá</i>, fórmula de oração que marca o encerramento do sábado ou de uma festa sagrada (Pesahim 113a). Plural <bdi lang='he' dir='rtl'>אַבְדָּלוֹת</bdi>, distinções; Jerusalém Berakhot 5, 9b menciona sete objetos de distinção."
  },
  {
    "sid": "A00043",
    "lemma": "אַבְדָּן",
    "type": "Nome próprio masculino",
    "gloss": "Abdan",
    "html": "<strong>Abdan</strong>, nome masculino interpretado por Jastrow como contração de <bdi lang='he' dir='rtl'>אבא יודן</bdi>; amoraíta da primeira geração (Jerusalém Berakhot 4, 7c; Berakhot 27b). Variante editorial: <bdi lang='he' dir='rtl'>אבידן</bdi>."
  },
  {
    "sid": "A00044",
    "lemma": "אָבְדָּן,",
    "type": "Substantivo masculino",
    "gloss": "perda; ruína; destruição",
    "html": "Variantes <bdi lang='he' dir='rtl'>אָבְדָּן, אוֹבְדָּן</bdi>, do verbo <bdi lang='he' dir='rtl'>אבד</bdi>. Perda, ruína, destruição; <bdi lang='he' dir='rtl'>אובדן אוכלין</bdi>, desperdício de alimentos (Jerusalém Demai 7, 26a)."
  },
  {
    "sid": "A00045",
    "lemma": "אַבְדָּנָא,",
    "type": "Substantivo masculino aramaico",
    "gloss": "perda; destruição",
    "html": "Variantes <bdi lang='he' dir='rtl'>אַבְדָּנָא, אוֹבְדָנָא</bdi>, equivalente aramaico do homólogo hebraico: perda, ruína, destruição. Targum Provérbios 27.20."
  },
  {
    "sid": "A00046",
    "lemma": "אֲבֵדְתָּא",
    "type": "Remissão",
    "gloss": "ver אֲבֵי׳",
    "html": "Grafia remetida à entrada <bdi lang='he' dir='rtl'>אֲבֵי׳</bdi>, sem acepção própria nesta linha da fonte."
  },
  {
    "sid": "A00047",
    "lemma": "אבדתא",
    "type": "Remissão",
    "gloss": "ver אֲבַרְתָּא",
    "html": "Remissão textual para <bdi lang='he' dir='rtl'>אֲבַרְתָּא</bdi>."
  },
  {
    "sid": "A00048",
    "lemma": "אַבָּה",
    "type": "Nome próprio masculino",
    "gloss": "Abbah; pai de Samuel",
    "html": "<strong>Abbah</strong>, pai de Samuel; ver o verbete onomástico <bdi lang='he' dir='rtl'>אַבָּא</bdi> II."
  },
  {
    "sid": "A00049",
    "lemma": "אָבָה",
    "type": "Remissão verbal",
    "gloss": "ver אָבֵי",
    "html": "Forma do verbo “querer, estar disposto”; ver <bdi lang='he' dir='rtl'>אָבֵי</bdi>."
  },
  {
    "sid": "A00050",
    "lemma": "אַבָּהוּ",
    "type": "Nome próprio masculino",
    "gloss": "Abbahu; nome de amoraítas",
    "html": "<strong>Abbahu</strong>, nome de amoraítas na Palestina e na Babilônia. Na Palestina, um possivelmente da primeira geração; outro, célebre discípulo de Rabi Yohanan, residia em Cesareia (Jerusalém Berakhot 2, 4b; Sucá 48b). Há também um Abbahu, pai de Rabbah (Kidushin 33b), e outro contemporâneo de Rav Ashi (Bava Kamma 117b)."
  },
  {
    "sid": "A00051",
    "lemma": "אבהנוס,",
    "type": "Leitura editorial",
    "gloss": "ler אַמְבָּטִיס ou אִיפּוֹבַּטֵיס",
    "html": "Jastrow considera a grafia <bdi lang='he' dir='rtl'>אבהנוס</bdi> de Jerusalém Kilayim 3, 31c duvidosa; recomenda <bdi lang='he' dir='rtl'>אַמְבָּטִיס</bdi> ou <bdi lang='he' dir='rtl'>אִיפּוֹבַּטֵיס</bdi> (grego <span lang='grc'>ἱπποβάτης</span>), “asno reprodutor para éguas”."
  },
  {
    "sid": "A00052",
    "lemma": "אֲבָהָתָא",
    "type": "Plural",
    "gloss": "pais; antepassados",
    "html": "Forma plural de <bdi lang='he' dir='rtl'>אַבָּא</bdi> (“pai”)."
  },
  {
    "sid": "A00053",
    "lemma": "אבהתא",
    "type": "Remissão",
    "gloss": "ver מַמְצִיא",
    "html": "Grafia registrada apenas como remissão a <bdi lang='he' dir='rtl'>מַמְצִיא</bdi>."
  },
  {
    "sid": "A00054",
    "lemma": "אִבּוּ,",
    "type": "Nome próprio masculino",
    "gloss": "Ibbu; Aibu",
    "html": "<strong>Ibbu</strong> ou <strong>Aibu</strong>, provavelmente formas do mesmo nome de um amoraíta. Variantes <bdi lang='he' dir='rtl'>אבו, אי׳, איי׳</bdi>. Atestado em Sanhedrin 5a, Sucá 44b, Rute Rabá 2 e Jerusalém Sucá 2. Jastrow registra ainda que <bdi lang='he' dir='rtl'>אִבּוּ</bdi> designa uma ave noutro verbete."
  },
  {
    "sid": "A00055",
    "lemma": "אִיבּוּב אַבּוּב",
    "type": "Substantivo masculino",
    "gloss": "flauta; cano; tubo; instrumento de sopro",
    "html": "Da ideia de cavidade: <strong>1.</strong> Cana, flauta, tubo ou conduto. <bdi lang='he' dir='rtl'>אבוב של קנה</bdi>, flauta de cana; <bdi lang='he' dir='rtl'>אבוב של נחושת</bdi>, flauta de bronze (Arakhin 2.3). <bdi lang='he' dir='rtl'>אבוב של קלאים</bdi>, tubo de ferro usado para assar grãos (Kelim 2.3; Menahot 10.4). <strong>2.</strong> <bdi lang='he' dir='rtl'>אבוב רועה</bdi>, “flauta de pastor”, nome de uma planta medicinal identificada pela fonte como <i>Eupatorium</i> (Shabbat 14.3; 109b)."
  },
  {
    "sid": "A00056",
    "lemma": "אַבּוּב,",
    "type": "Substantivo aramaico",
    "gloss": "flauta; tubo",
    "html": "Equivalente aramaico de <bdi lang='he' dir='rtl'>אַבּוּב</bdi>. Yoma 20b conserva um provérbio: a flauta agrada aos nobres, mas é desprezada pelos tecelões; pessoas ignorantes rejeitam aquilo que os sábios admiram. Plural <bdi lang='he' dir='rtl'>אַבּוּבִין</bdi> (Targum Jeremias 48.36; Sucá 50b)."
  },
  {
    "sid": "A00057",
    "lemma": "אַבּוּבְרָאֶה,",
    "type": "Remissão botânica",
    "gloss": "flauta de pastor; ver אַבּוּב",
    "html": "Variantes <bdi lang='he' dir='rtl'>אַבּוּבְרָאֶה, אַבּוּבְרוֹאֶה</bdi>, equivalentes a <bdi lang='he' dir='rtl'>אַבּוּב רוֹעֶה</bdi>, “flauta de pastor”; ver a denominação botânica no verbete precedente."
  },
  {
    "sid": "A00058",
    "lemma": "אַבּוּבְרָם",
    "type": "Nome próprio masculino",
    "gloss": "Bar Abbubram",
    "html": "Nome masculino ou patronímico <bdi lang='he' dir='rtl'>בר אבוברם</bdi>, “Bar Abbubram”, interpretado como forma de <bdi lang='he' dir='rtl'>אבו אברם</bdi> (Hulin 38a)."
  },
  {
    "sid": "A00059",
    "lemma": "אִבּוּד",
    "type": "Remissão",
    "gloss": "ver אִיבּוּד",
    "html": "Remete a <bdi lang='he' dir='rtl'>אִיבּוּד</bdi>."
  },
  {
    "sid": "A00060",
    "lemma": "אבוד",
    "type": "Remissão",
    "gloss": "ver אָכוּז",
    "html": "Remete a <bdi lang='he' dir='rtl'>אָכוּז</bdi>."
  },
  {
    "sid": "A00061",
    "lemma": "אַבּוּדְיָינָא,",
    "type": "Nome próprio masculino",
    "gloss": "Abbudyana",
    "html": "Nome masculino de pessoa não judia, associado por Jastrow a referência idolátrica (Gitin 11a). Forma alternativa <bdi lang='he' dir='rtl'>אַבּוּדְיָנָא</bdi>."
  },
  {
    "sid": "A00062",
    "lemma": "אֲבוּדְמָא,",
    "type": "Remissão onomástica",
    "gloss": "ver אֶבְדִּימוֹס",
    "html": "Variantes <bdi lang='he' dir='rtl'>אֲבוּדְמָא, אבודמי</bdi>; ver <bdi lang='he' dir='rtl'>אֶבְדִּימוֹס</bdi>."
  },
  {
    "sid": "A00063",
    "lemma": "אבוורנקא,",
    "type": "Remissão",
    "gloss": "ver אַכְוַרְנְקָא",
    "html": "Variantes <bdi lang='he' dir='rtl'>אבוורנקא, אבוורנקי</bdi>; consultar <bdi lang='he' dir='rtl'>אַכְוַרְנְקָא</bdi>."
  },
  {
    "sid": "A00064",
    "lemma": "*אֵבוּז",
    "type": "Substantivo masculino eufemístico",
    "gloss": "nádegas; traseiro",
    "html": "Possível aproximação com <bdi lang='he' dir='rtl'>אֵבוּס</bdi>; eufemismo para extremidade posterior do corpo, nádegas (Eruvin 53b). A etimologia é apresentada como comparação, não como certeza. Ver <bdi lang='he' dir='rtl'>אָכוּז</bdi>."
  },
  {
    "sid": "A00065",
    "lemma": "אֲבוֹי",
    "type": "Interjeição substantivada",
    "gloss": "ai!; desgraça!; lamento",
    "html": "Do hebraico bíblico, forma exclamativa comparável a <bdi lang='he' dir='rtl'>אוֹי</bdi>. Significa “ai!”, “que desgraça!”. Números Rabá 10 comenta Provérbios 23.29 com <bdi lang='he' dir='rtl'>האוי והאבוי</bdi>, “o ai e o lamento”."
  },
  {
    "sid": "A00066",
    "lemma": "אֲבוּיָה",
    "type": "Nome próprio masculino",
    "gloss": "Abuyah; pai de Eliseu ben Abuyah",
    "html": "<strong>Abuyah</strong>, conhecido como pai de Eliseu (Elisha ben Abuyah). Jerusalém Hagigah 2, 77b; ver o verbete <bdi lang='he' dir='rtl'>אלישע</bdi>."
  },
  {
    "sid": "A00067",
    "lemma": "אבויין",
    "type": "Leitura editorial",
    "gloss": "ler אִטִּין ou אִטַּיָין",
    "html": "Forma de Jerusalém Shabbat 5, 8b que, segundo Jastrow, deve ser lida <bdi lang='he' dir='rtl'>אִטִּין</bdi> ou <bdi lang='he' dir='rtl'>אִטַּיָין</bdi>; sem acepção independente."
  },
  {
    "sid": "A00068",
    "lemma": "אִבּוּל,",
    "type": "Substantivo masculino I",
    "gloss": "luto; lamentação",
    "html": "Primeiro homógrafo <bdi lang='he' dir='rtl'>אִבּוּל</bdi>: luto, aflição por morte. Remissão a <bdi lang='he' dir='rtl'>אִיבּוּל</bdi>; não confundir com o homógrafo seguinte relativo a portão."
  },
  {
    "sid": "A00069",
    "lemma": "אִבּוּל,",
    "type": "Substantivo masculino II",
    "gloss": "portal de carga; portão de carroças",
    "html": "Segundo homógrafo <bdi lang='he' dir='rtl'>אִבּוּל / אִיבּוּל</bdi>, relacionado por Jastrow a <bdi lang='he' dir='rtl'>יבל</bdi>: passagem ou portão por onde grãos são levados à casa em carros. Plural <bdi lang='he' dir='rtl'>אִבּוּלִים</bdi>. Tosefta Bava Metzia 11.10 proíbe dividir portões comuns entre herdeiros se cada um não tiver espaço suficiente."
  },
  {
    "sid": "A00070",
    "lemma": "אִבּוּלָא,",
    "type": "Substantivo aramaico",
    "gloss": "portão da cidade; entrada fortificada",
    "html": "Forma aramaica do precedente, <bdi lang='he' dir='rtl'>אִבּוּלָא / אִיבּוּלָא</bdi>: portão de entrada para carroças; especialmente portão urbano fortificado onde também se reuniam juízes. Moed Katan 22a: a contagem de dias de luto começa ao regressar do portão da cidade durante o funeral. Ketubot 17a e Meguilá 29a citam o caminho do portão ao sepultamento. Bava Batra 58a menciona inscrição acima da entrada onde funcionava o tribunal. Plural <bdi lang='he' dir='rtl'>אִבּוּלֵי</bdi> (Eruvin 6b; Yoma 11a). A edição do <i>Arukh</i> também registra interpretação “casa de luto”."
  },
  {
    "sid": "A00071",
    "lemma": "*אִבּוּלָאֵי",
    "type": "Substantivo masculino plural",
    "gloss": "guardas do portão; policiais",
    "html": "De <bdi lang='he' dir='rtl'>אִבּוּלָא</bdi>, guardas ou agentes de vigilância do portão urbano. Nidá 67b alude a sua conduta grosseira; Rashi oferece uma explicação diferente, associada a entradas perigosas dos banhos."
  },
  {
    "sid": "A00072",
    "lemma": "אבולי",
    "type": "Leitura editorial",
    "gloss": "ver בּוּלִי II",
    "html": "Em Bava Batra 143a, para <bdi lang='he' dir='rtl'>אאבולי</bdi>, Jastrow prefere a leitura manuscrita <bdi lang='he' dir='rtl'>אַבּוּלִי ואסטרטיגי</bdi>; consultar <bdi lang='he' dir='rtl'>בּוּלִי</bdi> II."
  },
  {
    "sid": "A00073",
    "lemma": "אבולין",
    "type": "Remissão",
    "gloss": "ver אַבִּילִין",
    "html": "Remete a <bdi lang='he' dir='rtl'>אַבִּילִין</bdi>."
  },
  {
    "sid": "A00074",
    "lemma": "(אבין) אַבּוּן",
    "type": "Nome próprio masculino",
    "gloss": "Abbun; amoraíta",
    "html": "<strong>Abbun</strong>, nome de um amoraíta, também grafado <bdi lang='he' dir='rtl'>אבין</bdi>; aparece em Jerusalém Pesahim 4, Jerusalém Ta‘anit 1 e Jerusalém Shevuot 6. Ver também <bdi lang='he' dir='rtl'>בּוּן</bdi>."
  },
  {
    "sid": "A00075",
    "lemma": "אֲבוּנָא,",
    "type": "Nome próprio masculino",
    "gloss": "Abuna; amoraíta",
    "html": "<strong>Abuna</strong>, nome de um amoraíta; variante <bdi lang='he' dir='rtl'>אֲבוּנָה</bdi>. Jerusalém Sheviit 2, 33d e outras passagens."
  },
  {
    "sid": "A00076",
    "lemma": "אבונגרי",
    "type": "Remissão",
    "gloss": "ver אַכְוַנְגַּר",
    "html": "Remete a <bdi lang='he' dir='rtl'>אַכְוַנְגַּר</bdi>."
  },
  {
    "sid": "A00077",
    "lemma": "אֵבוּס,",
    "type": "Substantivo masculino",
    "gloss": "cocho; manjedoura; estrebaria",
    "html": "<strong>1.</strong> Recipiente para alimentar animais ou trabalhadores, cocho, manjedoura (Nedarim 4.4). Shabbat 140b distingue <bdi lang='he' dir='rtl'>איבוס של כלי</bdi>, manjedoura como recipiente, de <bdi lang='he' dir='rtl'>איבוס של קרקע</bdi>, área de solo cercada usada para alimentar animais. <strong>2.</strong> Baia, estábulo, estrebaria (Jerusalém Shevuot 7–8). Plural <bdi lang='he' dir='rtl'>אֵבוּסִים</bdi> (Jerusalém Sanhedrin 63b). Há variantes e remissão a <bdi lang='he' dir='rtl'>אֵיפוּס</bdi>."
  },
  {
    "sid": "A00078",
    "lemma": "אֲבוּקָא",
    "type": "Nome próprio masculino",
    "gloss": "Abuka",
    "html": "<strong>Abuka</strong>, nome próprio masculino mencionado em Yalkut Lamentações 1001; ver <bdi lang='he' dir='rtl'>אֲבִיקָה</bdi>."
  },
  {
    "sid": "A00079",
    "lemma": "אֲבוּקָה",
    "type": "Substantivo feminino",
    "gloss": "tocha; archote",
    "html": "Provavelmente originado, segundo a análise etimológica da fonte, de feixe de ramos. Tocha ou archote, com ou sem fogo aceso expresso na construção <bdi lang='he' dir='rtl'>של אור</bdi>. Sotá 21a: “uma tocha acesa chegou-lhe às mãos”; Berakhot 43b: caminhar à luz da tocha equivaleria à proteção de duas pessoas. Plural <bdi lang='he' dir='rtl'>אֲבוּקוֹת</bdi>: tochas usadas nas danças da festa (Tosefta Sucá 4.2–4; Sucá 53a)."
  }
];
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function row(e){let id="entry-jastrow-"+e.sid.toLowerCase();return '<tr class="search-row" data-dictionary="aramaico" data-target="'+id+'" data-source="JASTROW" data-search="'+esc([e.lemma,e.gloss,e.type,"JASTROW",e.sid].join(" "))+'" tabindex="0"><td class="table-lemma hebrew-table-lemma" lang="he" dir="rtl">'+esc(e.lemma)+'</td><td>'+esc(e.type)+'</td><td>'+esc(e.gloss)+'</td><td><span class="source-pill">JASTROW</span></td></tr>';}
function card(e){let id="entry-jastrow-"+e.sid.toLowerCase();return '<article id="'+id+'" class="entry-card" data-dictionary="aramaico" data-source="JASTROW" data-source-entry="'+e.sid+'" hidden><header class="entry-header"><div><h1 class="entry-title hebrew-title" lang="he" dir="rtl">'+esc(e.lemma)+'</h1><div class="entry-meta"><span>'+esc(e.type)+'</span><span class="separator">·</span><span>Jastrow, registro '+e.sid+'</span></div></div><div class="source-tag">JASTROW</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução e análise da fonte</div><p class="entry-text">'+e.html+'</p></section><section class="entry-section"><div class="section-title">Proveniência</div><p class="entry-text">Marcus Jastrow, <em>A Dictionary of the Targumim, the Talmud Babli and Yerushalmi, and the Midrashic Literature</em>. Texto original preservado no arquivo XML do projeto; registro <strong>'+e.sid+'</strong>.</p></section></article>';}
lex.rowsHtml+="\n"+entries.map(row).join("\n");lex.cardsHtml+="\n"+entries.map(card).join("\n");
})();
