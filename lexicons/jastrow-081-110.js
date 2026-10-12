"use strict";
/* JASTROW: A00080–A00109, 30 traduções para português. Fonte XML íntegra preservada. */
(function(){
const lex=window.ScripturaLexicons && window.ScripturaLexicons.JASTROW;
if(!lex)throw Error("JASTROW base module required");
const entries=[
  {
    "sid": "A00080",
    "lemma": "*אַבּוּרְגְּנָא,",
    "type": "Substantivo masculino",
    "gloss": "cobertor de cama; revestimento",
    "html": "Variantes <bdi lang='he' dir='rtl'>אַבּוּרְגְּנָא, אַבְּרוּגְנָא</bdi>; a fonte propõe origem em expressão palestinense importada e alterada na Babilônia. Cobertura ou revestimento de cama. Plural <bdi lang='he' dir='rtl'>אַבּוּרְגְּנֵי</bdi>. Eruvin 62a descreve a validade do aluguel de pátio vinculado ao direito de colocar ali assentos e coberturas; Jastrow examina diferentes emendas possíveis à leitura tradicional."
  },
  {
    "sid": "A00081",
    "lemma": "אבורנקי",
    "type": "Remissão",
    "gloss": "ver אַכְוַר׳",
    "html": "Grafia remetida a <bdi lang='he' dir='rtl'>אַכְוַרְנְקָא</bdi> (abreviada na fonte como <bdi lang='he' dir='rtl'>אַכְוַר׳</bdi>)."
  },
  {
    "sid": "A00082",
    "lemma": "אבזייני",
    "type": "Remissão",
    "gloss": "ver אֲפוּזְיָינֵי",
    "html": "Remete à entrada <bdi lang='he' dir='rtl'>אֲפוּזְיָינֵי</bdi>."
  },
  {
    "sid": "A00083",
    "lemma": "אַבְזָקַת,",
    "type": "Substantivo feminino",
    "gloss": "esfarelamento; corrosão; doença dos pés",
    "html": "Variantes <bdi lang='he' dir='rtl'>אַבְזָקָא, אַבְזָקָה</bdi>; da raiz <bdi lang='he' dir='rtl'>בזק</bdi>: fragmentação, corrosão. <strong>1.</strong> Doença dos cascos ou pés de animais, atribuída na tradição a vermes depois de raio; atrofia ou paralisia dos pés. <strong>2.</strong> Estado de roupa corroída por traças. Bava Metzia 78b aplica o termo aos pés e a tecidos do vestuário real; a fonte menciona variantes e a explicação de Rashi."
  },
  {
    "sid": "A00084",
    "lemma": "אֲבִזְרָא,",
    "type": "Substantivo masculino",
    "gloss": "tempero; especiarias; acessórios",
    "html": "Variantes <bdi lang='he' dir='rtl'>אֲבִזְרָא, אֲבִיזְרָא</bdi>; plural <bdi lang='he' dir='rtl'>אֲבִזְרֵי, אֲבִיזְרֵי</bdi>. <strong>1.</strong> Especiarias, ingredientes usados para temperar. <strong>2.</strong> Figurado: requisitos, acessórios, elementos concomitantes. Sanhedrin 74b: “eles (os mandamentos) e tudo que lhes diz respeito”; Menahot 73b: o holocausto e seus elementos acessórios. Jastrow compara termos árabes <i>bazr</i> e <i>abzār</i>."
  },
  {
    "sid": "A00085",
    "lemma": "אבחטס",
    "type": "Remissão",
    "gloss": "ver אַמְבָּטִיס",
    "html": "Remissão para <bdi lang='he' dir='rtl'>אַמְבָּטִיס</bdi> e <bdi lang='he' dir='rtl'>אבהנוס</bdi>."
  },
  {
    "sid": "A00086",
    "lemma": "אבטא",
    "type": "Remissão",
    "gloss": "ver אַבְּטִי",
    "html": "Remete à forma <bdi lang='he' dir='rtl'>אַבְּטִי</bdi>."
  },
  {
    "sid": "A00087",
    "lemma": "*אַבְטָא",
    "type": "Substantivo masculino",
    "gloss": "ventre; odre de couro",
    "html": "Da ideia de barriga ou ventre, por extensão designa odre de couro para vinho. Avodah Zarah 34b: <bdi lang='he' dir='rtl'>אבטא דטייעי</bdi>, odre de vinho de viajantes. A fonte registra comparação com outras raízes e variante de leitura aramaica."
  },
  {
    "sid": "A00088",
    "lemma": "אבטו",
    "type": "Remissão",
    "gloss": "ver אַבְּטַי",
    "html": "Remete a <bdi lang='he' dir='rtl'>אַבְּטַי</bdi>."
  },
  {
    "sid": "A00089",
    "lemma": "אַבְטוֹלוֹס,",
    "type": "Remissão onomástica",
    "gloss": "ver אַבְטוֹלְמוֹס",
    "html": "Variantes <bdi lang='he' dir='rtl'>אַבְטוֹלוֹס, אבטוליס</bdi> do nome próprio registrado no verbete seguinte."
  },
  {
    "sid": "A00090",
    "lemma": "אַבְטוֹלְמוֹס",
    "type": "Nome próprio masculino",
    "gloss": "Abtolmos",
    "html": "<strong>Abtolmos</strong>, antropônimo talvez relacionado ao grego <span lang='grc'>Πτολεμαῖος</span> ou <span lang='grc'>Εὐπτόλεμος / Εὐπόλεμος</span>; as etimologias são hipóteses da fonte. Aparece em Eruvin 3.4 (35a–36a), Jerusalém Eruvin 21a e Êxodo Rabá 21. Moed Katan 18a cita variante abreviada <bdi lang='he' dir='rtl'>אֲבִיטוּל</bdi>, um amoraíta apelidado <bdi lang='he' dir='rtl'>ספראה</bdi> (“o escriba”)."
  },
  {
    "sid": "A00091",
    "lemma": "אַבְטוֹמְטוֹס",
    "type": "Adjetivo ou substantivo masculino",
    "gloss": "automático; espontâneo; por acaso",
    "html": "Empréstimo do grego <span lang='grc'>αὐτόματος</span>: que se move por si, que cresce espontaneamente, automático. Midrax dos Salmos 1.5 alude aos que afirmam que o universo se move por si e não tem Criador. Jastrow propõe como leitura alternativa <bdi lang='he' dir='rtl'>אַבְטוֹמְטוֹן</bdi> (grego <span lang='grc'>αὐτόματον</span>), “acaso”."
  },
  {
    "sid": "A00092",
    "lemma": "*אַבְטוֹנִיּוֹת",
    "type": "Substantivo feminino plural",
    "gloss": "cidades autônomas; jurisdições próprias",
    "html": "Forma derivada de <span lang='grc'>αὐτονομία</span>, autonomia: cidades que possuem leis ou jurisdição próprias. Jerusalém Meguilá 1, 70a; Jerusalém Bava Batra 3, 14a; Bekhorot 55a. Jastrow identifica variantes corrompidas e sugere, num exemplo, o feminino <bdi lang='he' dir='rtl'>שתי</bdi> em lugar de <bdi lang='he' dir='rtl'>שני</bdi>."
  },
  {
    "sid": "A00093",
    "lemma": "אַבְטַח",
    "type": "Remissão",
    "gloss": "ver בְּטַח II",
    "html": "Remete a <bdi lang='he' dir='rtl'>בְּטַח</bdi>, acepção ou homógrafo II."
  },
  {
    "sid": "A00094",
    "lemma": "אַבְטָחָה",
    "type": "Substantivo feminino",
    "gloss": "promessa; garantia",
    "html": "Forma equivalente a <bdi lang='he' dir='rtl'>הַבְטָחָה</bdi>: promessa, garantia ou ato de assegurar; o verbete original consiste apenas nessa equivalência."
  },
  {
    "sid": "A00095",
    "lemma": "אַבְּטַי",
    "type": "Remissão",
    "gloss": "ver בְּטַח II",
    "html": "Forma de Tosefta Oholot 13.3 (edição Zuckermandel, variante <bdi lang='he' dir='rtl'>אבטו</bdi>); remete a <bdi lang='he' dir='rtl'>בְּטַח</bdi> II."
  },
  {
    "sid": "A00096",
    "lemma": "אַבְּטִי",
    "type": "Remissão",
    "gloss": "ver אַמְבְּטִי",
    "html": "Remete a <bdi lang='he' dir='rtl'>אַמְבְּטִי</bdi>."
  },
  {
    "sid": "A00097",
    "lemma": "*אבטיגא",
    "type": "Leitura editorial",
    "gloss": "toga romana; leitura proposta",
    "html": "Grafia marcada como conjectural. Em Sifré Deuteronômio 80, Jastrow propõe ler <bdi lang='he' dir='rtl'>טוֹגָא</bdi> (<i>toga</i>, latim) ou <bdi lang='he' dir='rtl'>טִיבִינָּא</bdi> (grego <span lang='grc'>τηβέννα</span>): toga, vestimenta romana. A variante manuscrita indicada é <bdi lang='he' dir='rtl'>חגה</bdi>."
  },
  {
    "sid": "A00098",
    "lemma": "*אָבְטְיוֹנָא",
    "type": "Substantivo masculino",
    "gloss": "oficial romano; intendente; quartel-mestre",
    "html": "Empréstimo do grego <span lang='grc'>ὀπτίων</span> / latim <i>optio</i>: oficial com funções auxiliares ou de intendência no exército romano. Jerusalém Shabbat 6, 8c narra que um oficial romano chegou e o fez ficar atrás dele numa latrina pública."
  },
  {
    "sid": "A00099",
    "lemma": "אֲבַטִּיחַ",
    "type": "Substantivo masculino",
    "gloss": "melão",
    "html": "Do hebraico bíblico, comparado por Jastrow a raiz relativa a inchar; melão. Maaserot 1.5; plural <bdi lang='he' dir='rtl'>אֲבַטִּיחִים</bdi> (Maaserot 1.4)."
  },
  {
    "sid": "A00100",
    "lemma": "אֲבַטִּיחָא",
    "type": "Substantivo aramaico",
    "gloss": "melão",
    "html": "Equivalente aramaico do precedente; plurais <bdi lang='he' dir='rtl'>אֲבַטִּיחַיָּא, אֲבַטִּיחִין</bdi>. Targum Onkelos Números 11.5; Jerusalém Sanhedrin 7, 25d."
  },
  {
    "sid": "A00101",
    "lemma": "אבטילאות",
    "type": "Remissão",
    "gloss": "ver אַבְטוֹנִיּוֹת",
    "html": "Remissão para <bdi lang='he' dir='rtl'>אַבְטוֹנִיּוֹת</bdi>, “cidades dotadas de autonomia jurisdicional”."
  },
  {
    "sid": "A00102",
    "lemma": "אַבְטִילוֹס",
    "type": "Abreviatura de nome próprio",
    "gloss": "Abtilos; ver Abtolmos",
    "html": "Forma abreviada de <bdi lang='he' dir='rtl'>אַבְטוֹלְמוֹס</bdi> (Abtolmos)."
  },
  {
    "sid": "A00103",
    "lemma": "אַבְטִינָס",
    "type": "Nome próprio masculino",
    "gloss": "Abtinas; família sacerdotal",
    "html": "<strong>Abtinas</strong>, nome masculino. <bdi lang='he' dir='rtl'>בית אבטינס</bdi>, “Casa de Abtinas”: família sacerdotal que guardava o segredo de preparar o incenso aromático para o Templo (Yoma 3.11; 1.5)."
  },
  {
    "sid": "A00104",
    "lemma": "אַבְטָלָה",
    "type": "Substantivo feminino",
    "gloss": "ociosidade; tempo desperdiçado",
    "html": "Equivalente a <bdi lang='he' dir='rtl'>הַבְטָלָה</bdi>; da raiz <bdi lang='he' dir='rtl'>בטל</bdi>: inatividade, ociosidade, desperdício. <bdi lang='he' dir='rtl'>נר של אבטלה</bdi>, luz acesa sem necessidade (Jerusalém Beitzá 5, 63b); <bdi lang='he' dir='rtl'>על האבטלה</bdi>, por causa da perda de tempo (Jerusalém Sheviit 7, 37c)."
  },
  {
    "sid": "A00105",
    "lemma": "אַבְטַלְיוֹן",
    "type": "Nome próprio masculino",
    "gloss": "Abtalião; dirigente do Sinédrio",
    "html": "<strong>Abtalião</strong>, importante autoridade judiciária do Sinédrio nos dias de Hircano II e de Herodes. Jastrow o associa ao nome greco-romano <span lang='grc'>Πολλίων</span> (<i>Pollio</i>) em Josefo. Avot 1.10–11; Eduyot 1.3; Yoma 71b. A identificação e cronologia refletem a apresentação da fonte."
  },
  {
    "sid": "A00106",
    "lemma": "אבטניות",
    "type": "Remissão",
    "gloss": "ver אַבְטוֹנִיּוֹת",
    "html": "Remissão para <bdi lang='he' dir='rtl'>אַבְטוֹנִיּוֹת</bdi>."
  },
  {
    "sid": "A00107",
    "lemma": "אָבֵי,",
    "type": "Verbo",
    "gloss": "querer; desejar; estar disposto",
    "html": "Formas <bdi lang='he' dir='rtl'>אָבֵי, אָבָה</bdi>, do hebraico <bdi lang='he' dir='rtl'>אָבָה</bdi>: querer, consentir, mostrar-se disposto. Targum Onkelos Deuteronômio 25.7. Jastrow cita comparações radicais e corrige uma leitura de Targum Provérbios 29.11."
  },
  {
    "sid": "A00108",
    "lemma": "אביא",
    "type": "Remissão",
    "gloss": "ver אביה",
    "html": "Remete à forma <bdi lang='he' dir='rtl'>אביה</bdi>."
  },
  {
    "sid": "A00109",
    "lemma": "אָבִיב",
    "type": "Substantivo masculino",
    "gloss": "amadurecimento inicial; espigas novas; primícias",
    "html": "<strong>1.</strong> Estágio inicial da maturação dos cereais, sobretudo da cevada; estação do início da colheita. <strong>2.</strong> Primícias oferecidas na Páscoa. Rosh Hashaná 21a, interpretando Deuteronômio 16.1, associa a observação do amadurecimento à necessidade de manter a época apropriada no mês de nisã (intercalação calendárica). Menahot 84a e outras passagens."
  }
];
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function row(e){let id="entry-jastrow-"+e.sid.toLowerCase();return '<tr class="search-row" data-dictionary="aramaico" data-target="'+id+'" data-source="JASTROW" data-search="'+esc([e.lemma,e.gloss,e.type,"JASTROW",e.sid].join(" "))+'" tabindex="0"><td class="table-lemma hebrew-table-lemma" lang="he" dir="rtl">'+esc(e.lemma)+'</td><td>'+esc(e.type)+'</td><td>'+esc(e.gloss)+'</td><td><span class="source-pill">JASTROW</span></td></tr>';}
function card(e){let id="entry-jastrow-"+e.sid.toLowerCase();return '<article id="'+id+'" class="entry-card" data-dictionary="aramaico" data-source="JASTROW" data-source-entry="'+e.sid+'" hidden><header class="entry-header"><div><h1 class="entry-title hebrew-title" lang="he" dir="rtl">'+esc(e.lemma)+'</h1><div class="entry-meta"><span>'+esc(e.type)+'</span><span class="separator">·</span><span>Jastrow, registro '+e.sid+'</span></div></div><div class="source-tag">JASTROW</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução e análise da fonte</div><p class="entry-text">'+e.html+'</p></section><section class="entry-section"><div class="section-title">Proveniência</div><p class="entry-text">Marcus Jastrow, <em>A Dictionary of the Targumim, the Talmud Babli and Yerushalmi, and the Midrashic Literature</em>. Texto original preservado no arquivo XML do projeto; registro <strong>'+e.sid+'</strong>.</p></section></article>';}
lex.rowsHtml+="\n"+entries.map(row).join("\n");lex.cardsHtml+="\n"+entries.map(card).join("\n");
})();
