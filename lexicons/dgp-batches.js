"use strict";

/*
 * Continuação incremental do DGP a partir do registro 61 da letra α.
 * Este arquivo é exclusivo da branch chat-gpt-dgp e permite acrescentar
 * novos lotes sem alterar o módulo principal dgp.js nem os módulos BDAG/LEH.
 */

window.ScripturaLexicons = window.ScripturaLexicons || {};

if (!window.ScripturaLexicons.DGP) {
    throw new Error("O módulo base do DGP deve ser carregado antes de dgp-batches.js.");
}


/* ==========================================================
   LOTE 4 — registros 61–80
   ========================================================== */

window.ScripturaLexicons.DGP.bibliographicTerms.push(
    { key: "bíbl.", type: "abbr", text: "bíblico; uso ou acepção atestada em textos bíblicos" },
    { key: "inf.", type: "abbr", text: "infinitivo" },
    { key: "Ésquilo", type: "biblio", text: "Ésquilo — poeta trágico ateniense dos séculos VI–V a.C., um dos três grandes tragediógrafos gregos clássicos." }
);

window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0061" data-source="DGP" data-search="ἁβρότης boa vida requinte opulência delicadeza indolência viço DGP" tabindex="0"><td class="table-lemma greek">ἁβρότης, ητος (ἡ)</td><td>—</td><td>boa vida; requinte; opulência</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0062" data-source="DGP" data-search="ἄβροτος imortal divino sem mortais homens DGP" tabindex="0"><td class="table-lemma greek">ἄβροτος, ος</td><td>—</td><td>imortal; divino</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0063" data-source="DGP" data-search="ἁβροχίτων túnica delicada cobertas finas DGP" tabindex="0"><td class="table-lemma greek">ἁβροχίτων, ωνος</td><td>—</td><td>com túnica delicada</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0064" data-source="DGP" data-search="ἄβροχος não molhado inundado chuva seco DGP" tabindex="0"><td class="table-lemma greek">ἄβροχος, ος, ον</td><td>—</td><td>não molhado; seco</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0065" data-source="DGP" data-search="ἁβρύνω tornar belo ornar mimar orgulhar DGP" tabindex="0"><td class="table-lemma greek">ἁβρύνω</td><td>—</td><td>tornar belo; mimar; orgulhar-se</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0066" data-source="DGP" data-search="ἁβρῶς delicadamente indolentemente langorosamente DGP" tabindex="0"><td class="table-lemma greek">ἁβρῶς</td><td>—</td><td>delicadamente; indolentemente</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0067" data-source="DGP" data-search="Ἀβυδηνός Abido território DGP" tabindex="0"><td class="table-lemma greek">Ἀβυδηνός, ή, όν</td><td>—</td><td>de Abido; território de Abido</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0068" data-source="DGP" data-search="Ἀβυδόθεν de Abido DGP" tabindex="0"><td class="table-lemma greek">Ἀβυδόθεν</td><td>—</td><td>de Abido</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0069" data-source="DGP" data-search="Ἀβυδόθι em Abido DGP" tabindex="0"><td class="table-lemma greek">Ἀβυδόθι</td><td>—</td><td>em Abido</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0070" data-source="DGP" data-search="Ἄβυδος Abido Trôade Egito cidade DGP" tabindex="0"><td class="table-lemma greek">Ἄβυδος, ου (ἡ)</td><td>—</td><td>Abido</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0071" data-source="DGP" data-search="ἄβυσσος fundo profundo insondável abismo mortos DGP" tabindex="0"><td class="table-lemma greek">ἄβυσσος, ος, ον</td><td>—</td><td>sem fundo; abismo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0072" data-source="DGP" data-search="ἄγα dórico ἄγη DGP" tabindex="0"><td class="table-lemma greek">ἄγα</td><td>—</td><td>forma dórica de ἄγη</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0073" data-source="DGP" data-search="ἀγά dórico ἀγή DGP" tabindex="0"><td class="table-lemma greek">ἀγά</td><td>—</td><td>forma dórica de ἀγή</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0074" data-source="DGP" data-search="ἀγάασθαι ἀγάασθε infinitivo presente plural ἀγάομαι DGP" tabindex="0"><td class="table-lemma greek">ἀγάασθαι, ἀγάασθε</td><td>—</td><td>formas de ἀγάομαι</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0075" data-source="DGP" data-search="Ἀγαβάτανα Ἀγβάτανα DGP" tabindex="0"><td class="table-lemma greek">Ἀγαβάτανα</td><td>—</td><td>Ἀγβάτανα</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0076" data-source="DGP" data-search="ἀγαγεῖν infinitivo aoristo ἄγω DGP" tabindex="0"><td class="table-lemma greek">ἀγαγεῖν</td><td>—</td><td>infinitivo aoristo de ἄγω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0077" data-source="DGP" data-search="ἄγαγον aoristo dórico ἄγω DGP" tabindex="0"><td class="table-lemma greek">ἄγαγον</td><td>—</td><td>aoristo dórico de ἄγω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0078" data-source="DGP" data-search="ἀγάζω insistir importunar honrar venerar admirar irritar DGP Ésquilo" tabindex="0"><td class="table-lemma greek">ἀγάζω</td><td>—</td><td>insistir; venerar; admirar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0079" data-source="DGP" data-search="ἀγάθεος dórico ἠγάθεος DGP" tabindex="0"><td class="table-lemma greek">ἀγάθεος</td><td>—</td><td>forma dórica de ἠγάθεος</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0080" data-source="DGP" data-search="ἀγαθοεργέω ἀγαθουργέω fazer bem generoso bíblico DGP" tabindex="0"><td class="table-lemma greek">ἀγαθοεργέω-ῶ</td><td>—</td><td>fazer o bem; ser generoso</td><td><span class="source-pill">DGP</span></td></tr>
`;

window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-0061" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁβρότης, ητος (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 61 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 boa vida; requinte; opulência 2 delicadeza; indolência 3 viço (da juventude). 〈ἁβρός〉</p></section></article>
<article id="entry-dgp-0062" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄβροτος, ος</h1><div class="entry-meta"><span>DGP · ordem 62 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">e η, ον 1 imortal; divino 2 sem mortais; sem homens. 〈ἀ-, βροτός〉</p></section></article>
<article id="entry-dgp-0063" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁβροχίτων, ωνος</h1><div class="entry-meta"><span>DGP · ordem 63 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(masc., fem.) com túnica delicada; com cobertas finas. 〈ἁβρός, χιτών〉</p></section></article>
<article id="entry-dgp-0064" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄβροχος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 64 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 não molhado; não inundado; que não se molha 2 a que falta chuva; sem água; seco. 〈ἀ-, βρέχω〉</p></section></article>
<article id="entry-dgp-0065" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁβρύνω</h1><div class="entry-meta"><span>DGP · ordem 65 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(aor. ἥβρυνα) 1 tornar belo; ornar delicadamente 2 mimar; tratar com delicadeza ♦ méd. 3 tomar ares afetados, superiores; tornar-se orgulhoso 4 orgulhar-se de, dat. 〈ἁβρός〉</p></section></article>
<article id="entry-dgp-0066" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁβρῶς</h1><div class="entry-meta"><span>DGP · ordem 66 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. delicadamente; indolentemente; langorosamente.</p></section></article>
<article id="entry-dgp-0067" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀβυδηνός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 67 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 de Abido ♦ ἡ Ἀβυδηνή [χώρη] 2 o território de Abido. 〈Ἄβυδος〉</p></section></article>
<article id="entry-dgp-0068" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀβυδόθεν</h1><div class="entry-meta"><span>DGP · ordem 68 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. de Abido. 〈Ἄβυδος〉</p></section></article>
<article id="entry-dgp-0069" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀβυδόθι</h1><div class="entry-meta"><span>DGP · ordem 69 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. em Abido. 〈Ἄβυδος〉</p></section></article>
<article id="entry-dgp-0070" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἄβυδος, ου (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 70 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">Abido, cidade grega da Trôade; cidade do Egito.</p></section></article>
<article id="entry-dgp-0071" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄβυσσος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 71 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 sem fundo; profundo 2 insondável ♦ ἡ ἄβυσσος 3 abismo 4 bíbl. o abismo, habitação dos mortos. 〈ἀ-, βυσσός〉</p></section></article>
<article id="entry-dgp-0072" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄγα</h1><div class="entry-meta"><span>DGP · ordem 72 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἄγη.</p></section></article>
<article id="entry-dgp-0073" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγά</h1><div class="entry-meta"><span>DGP · ordem 73 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἀγή.</p></section></article>
<article id="entry-dgp-0074" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάασθαι, ἀγάασθε</h1><div class="entry-meta"><span>DGP · ordem 74 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">inf. pres. e 2ª pl. pres. de ἀγάομαι.</p></section></article>
<article id="entry-dgp-0075" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγαβάτανα</h1><div class="entry-meta"><span>DGP · ordem 75 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">Ἀγβάτανα.</p></section></article>
<article id="entry-dgp-0076" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαγεῖν</h1><div class="entry-meta"><span>DGP · ordem 76 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">inf. aor.2 de ἄγω.</p></section></article>
<article id="entry-dgp-0077" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄγαγον</h1><div class="entry-meta"><span>DGP · ordem 77 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">aor.2 dór. de ἄγω.</p></section></article>
<article id="entry-dgp-0078" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάζω</h1><div class="entry-meta"><span>DGP · ordem 78 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(só pres.) 1 insistir demais; importunar: τὰ θεῶν μηδὲν ἀγάζειν Ésquilo não exigir demasiado dos deuses ♦ méd. 2 honrar; venerar; admirar 3 tard. irritar-se; indignar-se.</p></section></article>
<article id="entry-dgp-0079" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάθεος</h1><div class="entry-meta"><span>DGP · ordem 79 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἠγάθεος.</p></section></article>
<article id="entry-dgp-0080" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθοεργέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 80 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">e ἀγαθουργέω-ῶ bíbl. fazer o bem; ser generoso. 〈ἀγαθοεργός〉</p></section></article>
`;

window.ScripturaLexicons.DGP.bibliographicTerms.push(
{key:"Astrol.",type:"abbr",text:"astrologia"},
{key:"comp.",type:"abbr",text:"comparativo"},
{key:"superl.",type:"abbr",text:"superlativo"},
{key:"ac.",type:"abbr",text:"acusativo"},
{key:"at.",type:"abbr",text:"ativo"},
{key:"fut.",type:"abbr",text:"futuro"},
{key:"perf.",type:"abbr",text:"perfeito"},
{key:"desus.",type:"abbr",text:"desusado"},
{key:"impf.",type:"abbr",text:"imperfeito"},
{key:"part.",type:"abbr",text:"particípio"},
{key:"voc.",type:"abbr",text:"vocativo"},
{key:"át.",type:"abbr",text:"ático"},
{key:"i.e.",type:"abbr",text:"isto é"},
{key:"Homero",type:"biblio",text:"Homero — poeta épico grego, tradicionalmente associado à Ilíada e à Odisseia; sua poesia ocupa posição central na tradição literária grega arcaica."},
{key:"Tucídides",type:"biblio",text:"Tucídides — historiador ateniense do século V a.C., autor da História da Guerra do Peloponeso."},
{key:"Platão",type:"biblio",text:"Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."},
{key:"Heródoto",type:"biblio",text:"Heródoto — historiador grego do século V a.C., autor das Histórias."},
{key:"Aristófanes",type:"biblio",text:"Aristófanes — poeta cômico ateniense dos séculos V–IV a.C., principal representante preservado da Comédia Antiga."},
{key:"Xenofonte",type:"biblio",text:"Xenofonte — escritor e historiador grego dos séculos V–IV a.C., discípulo de Sócrates."}
);
window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0081" data-source="DGP" data-search="ἀγαθοεργία, ας (ἡ) boa ação; benefício; serviço DGP" tabindex="0"><td class="table-lemma greek">ἀγαθοεργία, ας (ἡ)</td><td>—</td><td>boa ação; benefício; serviço</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0082" data-source="DGP" data-search="ἀγαθοεργός, ός, όν benéfico; benfazejo DGP" tabindex="0"><td class="table-lemma greek">ἀγαθοεργός, ός, όν</td><td>—</td><td>benéfico; benfazejo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0083" data-source="DGP" data-search="ἀγαθοποιέω-ῶ ajudar; agir com retidão DGP" tabindex="0"><td class="table-lemma greek">ἀγαθοποιέω-ῶ</td><td>—</td><td>ajudar; agir com retidão</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0084" data-source="DGP" data-search="ἀγαθοποιΐα, ας (ἡ) prática do bem; boa ação DGP" tabindex="0"><td class="table-lemma greek">ἀγαθοποιΐα, ας (ἡ)</td><td>—</td><td>prática do bem; boa ação</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0085" data-source="DGP" data-search="ἀγαθοποιός, ός, όν benfazejo; de bom augúrio DGP" tabindex="0"><td class="table-lemma greek">ἀγαθοποιός, ός, όν</td><td>—</td><td>benfazejo; de bom augúrio</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0086" data-source="DGP" data-search="ἀγαθός, ή, όν bom; valente; benévolo DGP" tabindex="0"><td class="table-lemma greek">ἀγαθός, ή, όν</td><td>—</td><td>bom; valente; benévolo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0087" data-source="DGP" data-search="ἀγαθουργέω-ῶ ἀγαθοεργέω DGP" tabindex="0"><td class="table-lemma greek">ἀγαθουργέω-ῶ</td><td>—</td><td>ἀγαθοεργέω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0088" data-source="DGP" data-search="ἀγαθουργία ἀγαθοεργία DGP" tabindex="0"><td class="table-lemma greek">ἀγαθουργία</td><td>—</td><td>ἀγαθοεργία</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0089" data-source="DGP" data-search="ἀγαθουργός ἀγαθοεργός DGP" tabindex="0"><td class="table-lemma greek">ἀγαθουργός</td><td>—</td><td>ἀγαθοεργός</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0090" data-source="DGP" data-search="ἀγαθῶς bem DGP" tabindex="0"><td class="table-lemma greek">ἀγαθῶς</td><td>—</td><td>bem</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0091" data-source="DGP" data-search="ἀγαθωσύνη, ης (ἡ) bondade DGP" tabindex="0"><td class="table-lemma greek">ἀγαθωσύνη, ης (ἡ)</td><td>—</td><td>bondade</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0092" data-source="DGP" data-search="ἀγαίομαι indignar-se; admirar DGP" tabindex="0"><td class="table-lemma greek">ἀγαίομαι</td><td>—</td><td>indignar-se; admirar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0093" data-source="DGP" data-search="ἀγακλεής, ής, ές muito ilustre; famoso DGP" tabindex="0"><td class="table-lemma greek">ἀγακλεής, ής, ές</td><td>—</td><td>muito ilustre; famoso</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0094" data-source="DGP" data-search="ἀγακλειτός, ή, όν ilustre; memorável DGP" tabindex="0"><td class="table-lemma greek">ἀγακλειτός, ή, όν</td><td>—</td><td>ilustre; memorável</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0095" data-source="DGP" data-search="ἀγακλυτός, ής, όν muito ilustre; glorioso DGP" tabindex="0"><td class="table-lemma greek">ἀγακλυτός, ής, όν</td><td>—</td><td>muito ilustre; glorioso</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0096" data-source="DGP" data-search="ἀγάλακτος, ος, ον sem leite; desmamado DGP" tabindex="0"><td class="table-lemma greek">ἀγάλακτος, ος, ον</td><td>—</td><td>sem leite; desmamado</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0097" data-source="DGP" data-search="ἀγαλλίασις, εως (ἡ) alegria; regozijo; exultação DGP" tabindex="0"><td class="table-lemma greek">ἀγαλλίασις, εως (ἡ)</td><td>—</td><td>alegria; regozijo; exultação</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0098" data-source="DGP" data-search="ἀγαλλιάω-ῶ regozijar-se DGP" tabindex="0"><td class="table-lemma greek">ἀγαλλιάω-ῶ</td><td>—</td><td>regozijar-se</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0099" data-source="DGP" data-search="ἀγάλλω exaltar; honrar; celebrar; enfeitar DGP" tabindex="0"><td class="table-lemma greek">ἀγάλλω</td><td>—</td><td>exaltar; honrar; celebrar; enfeitar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0100" data-source="DGP" data-search="ἄγαλμα, ατος (τό) objeto precioso; imagem; estátua DGP" tabindex="0"><td class="table-lemma greek">ἄγαλμα, ατος (τό)</td><td>—</td><td>objeto precioso; imagem; estátua</td><td><span class="source-pill">DGP</span></td></tr>
`;
window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-0081" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθοεργία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 81 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">boa ação; benefício; serviço. 〈ἀγαθοεργός〉</p></section></article>
<article id="entry-dgp-0082" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθοεργός, ός, όν</h1><div class="entry-meta"><span>DGP · ordem 82 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que pratica o bem; benéfico; benfazejo. 〈ἀγαθός, ἔργον〉</p></section></article>
<article id="entry-dgp-0083" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθοποιέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 83 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">bíbl. 1 ajudar; socorrer alguém, ac., em alguma coisa, dat. 2 agir com retidão; viver honestamente. 〈ἀγαθός, ποιέω〉</p></section></article>
<article id="entry-dgp-0084" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθοποιΐα, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 84 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">bíbl. prática do bem; boa ação. 〈ἀγαθοποιός〉</p></section></article>
<article id="entry-dgp-0085" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθοποιός, ός, όν</h1><div class="entry-meta"><span>DGP · ordem 85 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 que pratica o bem; benfazejo; propício 2 Astrol. de bom augúrio ♦ ὁ ἀγαθοποιός 3 bíbl. aquele que faz o que é bom ou o que é correto; bom cidadão. 〈ἀγαθός, ποιέω〉</p></section></article>
<article id="entry-dgp-0086" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 86 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(comp. ἀμείνων, ἀρείων, βελτίων, κρείσσων e κρείττων, λῴων, βέλτερος, λωίτερος, λωΐων, φέρτερος, ἀγαθώτερος; superl. ἄριστος, βέλτιστος, κράτιστος, λῷστος, βέλτατος, κάρτιστος, φέρτατος, φέριστος, ἀγαθώτατος) 1 bom; de origem nobre: πατρὸς δ’εἴμ’ ἀγαθοῖο Homero eu descendo de um pai nobre 2 valente: οὐδεὶς ὑπέμενεν ἄνδρας, ἱππέας τε ἀγαθοὺς καὶ τεθωρακισμένους Tucídides ninguém resistia a esses homens, cavaleiros bons e armados de couraça 3 bom moralmente; honesto: ἀ. ἀνήρ Platão homem de bem, παῖδες καλοὶ τε κἀγαθοί Heródoto filhos belos e bons, i.e., filhos perfeitos 4 benévolo: ὁ ἀ. δαίμων Aristófanes a boa divindade ou o bom gênio; no át., voc. ἀγαθέ, ὦ’ γαθέ, meu caro, caro amigo 5 apto; capaz; hábil em, ac. ou inf.: ἀ. αὐλητής bom flautista, βοὴν ἀ. Μενέλαος Homero Menelau bom no grito de guerra, ἀ. ἱππεύεσθαι Heródoto hábil no cavalgar, bom cavaleiro 6 bom; favorável; útil: δαὶς ἀ. Homero boa refeição, ἀ. ἡμέρα Xenofonte dia propício, ἐρωτᾷς με εἴ τι οἶδα πυρετοῦ ἀγαθόν Xenofonte tu me perguntas se conheço algo eficaz contra a febre ♦ τὸ ἀγαθόν 7 o bem em si; o bem para o homem; proveito: ἡ τοῦ ἀγαθοῦ ἰδέα Platão a idéia do bem, τοῖς πολλοῖς ἡδονὴ δοκεῖ εἶναι τὸ ἀγαθόν Platão a maioria julga que o bem é prazer ♦ τὰ ἀγαθά 8 os bens da fortuna, do poder: τὰ αὐτοῦ ἀγαθὰ γιγνόμενα καρποῦσθαι Tucídides usufruir os bens produzidos aqui mesmo, ἀγαθὰ πράττειν ser bem sucedido, prosperar 9 os bens morais; as boas qualidades: οὔτοι καμοῦμαὶ σοι λέγουσα τἀγαθά Ésquilo não me cansarei de dar-te bons conselhos. 〈ἄγαμαι〉</p></section></article>
<article id="entry-dgp-0087" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθουργέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 87 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ἀγαθοεργέω.</p></section></article>
<article id="entry-dgp-0088" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθουργία</h1><div class="entry-meta"><span>DGP · ordem 88 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ἀγαθοεργία.</p></section></article>
<article id="entry-dgp-0089" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθουργός</h1><div class="entry-meta"><span>DGP · ordem 89 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ἀγαθοεργός.</p></section></article>
<article id="entry-dgp-0090" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθῶς</h1><div class="entry-meta"><span>DGP · ordem 90 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. bem.</p></section></article>
<article id="entry-dgp-0091" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαθωσύνη, ης (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 91 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">bíbl. bondade.</p></section></article>
<article id="entry-dgp-0092" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαίομαι</h1><div class="entry-meta"><span>DGP · ordem 92 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(só pres.) 1 indignar-se; suportar com dificuldade; irritar-se com algo, ac., ou alguém, dat. 2 ter grande admiração.</p></section></article>
<article id="entry-dgp-0093" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγακλεής, ής, ές</h1><div class="entry-meta"><span>DGP · ordem 93 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">muito ilustre; muito famoso; ínclito. 〈ἄγαν, κλέος〉</p></section></article>
<article id="entry-dgp-0094" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγακλειτός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 94 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 muito renomado; ilustre; glorioso (pessoa) 2 conhecido; memorável (coisa). 〈ἄγαν, κλέος〉</p></section></article>
<article id="entry-dgp-0095" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγακλυτός, ής, όν</h1><div class="entry-meta"><span>DGP · ordem 95 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">muito ilustre; glorioso. 〈ἄγαν, κλέος〉</p></section></article>
<article id="entry-dgp-0096" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάλακτος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 96 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 que não tem leite (mulher) 2 ruim para a produção de leite (pastagem) 3 que não é ou não foi aleitado; desmamado. 〈ἀ-, γάλα〉</p></section></article>
<article id="entry-dgp-0097" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαλλίασις, εως (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 97 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">bíbl. alegria; regozijo; exultação. 〈ἀγαλλιάω〉</p></section></article>
<article id="entry-dgp-0098" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαλλιάω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 98 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">bíbl. at. e méd. regozijar-se com algo, ac., dat., ἐν e dat., ἐπί e ac. ou dat. 〈ἀγάλλομαι〉</p></section></article>
<article id="entry-dgp-0099" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάλλω</h1><div class="entry-meta"><span>DGP · ordem 99 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἀγαλῶ, aor. ἤγηλα, perf. desus.; pas. aor. ἠγάλθην, perf. desus.; impf. méd. ἠγαλλόμην) 1 exaltar; honrar; celebrar 2 enfeitar; ornar ♦ méd. 3 vangloriar-se; alegrar-se; estar entusiasmado com algo, dat. ou ἐπί e dat., ac. ou διά e ac., de ter ou fazer algo, part.</p></section></article>
<article id="entry-dgp-0100" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄγαλμα, ατος (τό)</h1><div class="entry-meta"><span>DGP · ordem 100 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 objeto precioso; motivo de orgulho; ornamento 2 oferenda 3 imagem; estátua de deus 4 representação; estátua; retrato 5 símbolo 6 tard. hieroglifo. 〈ἀγάλλω〉</p></section></article>
`;


window.ScripturaLexicons.DGP.bibliographicTerms.push(
{key:"ép.",type:"abbr",text:"épico"},
{key:"Sófocles",type:"biblio",text:"Sófocles — poeta trágico ateniense do século V a.C., um dos três grandes tragediógrafos gregos clássicos."}
);
window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0101" data-source="DGP" data-search="ἀγαλμάτιον, ου (τό) estampa pequena; estatueta DGP" tabindex="0"><td class="table-lemma greek">ἀγαλμάτιον, ου (τό)</td><td>—</td><td>estampa pequena; estatueta</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0102" data-source="DGP" data-search="ἀγαλματοποιός, οῦ (ὁ) estatuário; escultor DGP" tabindex="0"><td class="table-lemma greek">ἀγαλματοποιός, οῦ (ὁ)</td><td>—</td><td>estatuário; escultor</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0103" data-source="DGP" data-search="ἄγαμαι admirar; invejar; irritar-se DGP" tabindex="0"><td class="table-lemma greek">ἄγαμαι</td><td>—</td><td>admirar; invejar; irritar-se</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0104" data-source="DGP" data-search="Ἀγαμεμνόνειος, α, ον de Agamenão DGP" tabindex="0"><td class="table-lemma greek">Ἀγαμεμνόνειος, α, ον</td><td>—</td><td>de Agamenão</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0105" data-source="DGP" data-search="Ἀγαμεμνονίδης, ου (ὁ) filho ou descendente de Agamenão DGP" tabindex="0"><td class="table-lemma greek">Ἀγαμεμνονίδης, ου (ὁ)</td><td>—</td><td>filho ou descendente de Agamenão</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0106" data-source="DGP" data-search="Ἀγαμέμνων, ονος (ὁ) Agamenão DGP" tabindex="0"><td class="table-lemma greek">Ἀγαμέμνων, ονος (ὁ)</td><td>—</td><td>Agamenão</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0107" data-source="DGP" data-search="ἀγαμένως com admiração; admiravelmente DGP" tabindex="0"><td class="table-lemma greek">ἀγαμένως</td><td>—</td><td>com admiração; admiravelmente</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0108" data-source="DGP" data-search="ἀγαμία, ας (ἡ) celibato DGP" tabindex="0"><td class="table-lemma greek">ἀγαμία, ας (ἡ)</td><td>—</td><td>celibato</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0109" data-source="DGP" data-search="ἀγαμίου δίκη (ἡ) ação judicial contra solteiros DGP" tabindex="0"><td class="table-lemma greek">ἀγαμίου δίκη (ἡ)</td><td>—</td><td>ação judicial contra solteiros</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0110" data-source="DGP" data-search="ἄγαμος, ος, ον não casado; solteiro DGP" tabindex="0"><td class="table-lemma greek">ἄγαμος, ος, ον</td><td>—</td><td>não casado; solteiro</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0111" data-source="DGP" data-search="ἄγαν muito; demais DGP" tabindex="0"><td class="table-lemma greek">ἄγαν</td><td>—</td><td>muito; demais</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0112" data-source="DGP" data-search="ἀγανακτέω-ῶ fermentar; indignar-se DGP" tabindex="0"><td class="table-lemma greek">ἀγανακτέω-ῶ</td><td>—</td><td>fermentar; indignar-se</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0113" data-source="DGP" data-search="ἀγανάκτησις, εως (ἡ) indignação; irritação DGP" tabindex="0"><td class="table-lemma greek">ἀγανάκτησις, εως (ἡ)</td><td>—</td><td>indignação; irritação</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0114" data-source="DGP" data-search="ἀγάννιφος, ος, ον coberto de neve DGP" tabindex="0"><td class="table-lemma greek">ἀγάννιφος, ος, ον</td><td>—</td><td>coberto de neve</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0115" data-source="DGP" data-search="ἀγανόρειος, α, ον ἀγήνωρ DGP" tabindex="0"><td class="table-lemma greek">ἀγανόρειος, α, ον</td><td>—</td><td>ἀγήνωρ</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0116" data-source="DGP" data-search="ἀγανός, ή, όν suave; amável; sereno DGP" tabindex="0"><td class="table-lemma greek">ἀγανός, ή, όν</td><td>—</td><td>suave; amável; sereno</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0117" data-source="DGP" data-search="ἀγανοφροσύνη, ης (ἡ) gentileza; amabilidade DGP" tabindex="0"><td class="table-lemma greek">ἀγανοφροσύνη, ης (ἡ)</td><td>—</td><td>gentileza; amabilidade</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0118" data-source="DGP" data-search="ἀγανόφρων, ων, ον amável; gentil DGP" tabindex="0"><td class="table-lemma greek">ἀγανόφρων, ων, ον</td><td>—</td><td>amável; gentil</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0119" data-source="DGP" data-search="ἀγανῶς serenamente; gentilmente DGP" tabindex="0"><td class="table-lemma greek">ἀγανῶς</td><td>—</td><td>serenamente; gentilmente</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0120" data-source="DGP" data-search="ἀγάομαι forma épica de ἄγαμαι DGP" tabindex="0"><td class="table-lemma greek">ἀγάομαι</td><td>—</td><td>forma épica de ἄγαμαι</td><td><span class="source-pill">DGP</span></td></tr>
`;
window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-0101" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαλμάτιον, ου (τό)</h1><div class="entry-meta"><span>DGP · ordem 101 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">estampa pequena; estatueta. 〈ἄγαλμα〉</p></section></article>
<article id="entry-dgp-0102" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαλματοποιός, οῦ (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 102 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">estatuário; escultor. 〈ἄγαλμα, ποιέω〉</p></section></article>
<article id="entry-dgp-0103" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄγαμαι</h1><div class="entry-meta"><span>DGP · ordem 103 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(impf. ἠγάμην, fut. desus., aor. ἠγάσθην e ἠγασάμην, perf. desus.) 1 admirar, ac. ou gen.; alguém, ac., por algo, gen. 2 estar encantado; estar satisfeito com, dat. 3 ter inveja; ter ciúme de, dat. 4 ofender-se; irritar-se com algo, ac., ou alguém, dat.</p></section></article>
<article id="entry-dgp-0104" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγαμεμνόνειος, α, ον</h1><div class="entry-meta"><span>DGP · ordem 104 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">e Ἀγαμεμνόνεος, η, ον de Agamenão. 〈Ἀγαμέμνων〉</p></section></article>
<article id="entry-dgp-0105" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγαμεμνονίδης, ου (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 105 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">filho ou descendente de Agamenão. 〈Ἀγαμέμνων〉</p></section></article>
<article id="entry-dgp-0106" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγαμέμνων, ονος (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 106 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">Agamenão, rei de Micenas, chefe dos gregos na guerra de Tróia. 〈ἄγαν, μένος〉</p></section></article>
<article id="entry-dgp-0107" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαμένως</h1><div class="entry-meta"><span>DGP · ordem 107 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. 1 com admiração 2 de modo admirável 3 com aprovação. 〈ἄγαμαι〉</p></section></article>
<article id="entry-dgp-0108" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαμία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 108 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">celibato. 〈ἄγαμος〉</p></section></article>
<article id="entry-dgp-0109" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαμίου δίκη (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 109 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ação judicial contra os homens que ultrapassavam a idade fixada por lei para contrair matrimônio. 〈ἄγαμος〉</p></section></article>
<article id="entry-dgp-0110" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄγαμος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 110 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">não casado; solteiro; γάμος ἄ. Sófocles casamento que não é casamento, i.e., casamento nefando, desastroso. 〈ἀ-, γάμος〉</p></section></article>
<article id="entry-dgp-0111" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄγαν</h1><div class="entry-meta"><span>DGP · ordem 111 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. 1 muito 2 demais: μηδὲν ἄγαν nada em excesso, οἱ ἄγαν νέοι Xenofonte os muito jovens, ἡ ἄγαν ἐλευθερία Platão a liberdade em excesso, ἄγαν ἐλευθεροστομεῖς Ésquilo falas com excessiva liberdade. 〈ἄγω〉</p></section></article>
<article id="entry-dgp-0112" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγανακτέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 112 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(impf. ἠγανάκτουν, fut. ἀγανακτήσω, aor. ἠγανάκτησα) 1 (vinho) borbulhar; fermentar 2 (alma, sensação) excitar-se; agitar-se 3 (pessoa) exaltar-se; indignar-se; zangar-se com algo, dat., ἐπί e dat., ὑπέρ ou περί e gen., πρός ou διά e ac., ou com alguém, dat., πρός e ac., κατά e gen., part. no ac.; com ac. de rel. τὰ σπλάγχνα, Aristófanes nas entranhas. 〈ἄγαν, ἄγω〉</p></section></article>
<article id="entry-dgp-0113" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγανάκτησις, εως (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 113 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 motivo de cólera ou de indignação 2 indignação 3 irritação; sensação desagradável. 〈ἀγανακτέω〉</p></section></article>
<article id="entry-dgp-0114" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάννιφος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 114 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">coberto de neve. 〈ἄγαν, νίφω〉</p></section></article>
<article id="entry-dgp-0115" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγανόρειος, α, ον</h1><div class="entry-meta"><span>DGP · ordem 115 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ἀγήνωρ.</p></section></article>
<article id="entry-dgp-0116" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγανός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 116 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 que não é violento; suave; amável (palavra) 2 fino; delicado; brando (coisa) 3 afável; sereno, propício (pessoa). 〈ἀ- intens., γάνυμαι〉</p></section></article>
<article id="entry-dgp-0117" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγανοφροσύνη, ης (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 117 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">gentileza; amabilidade. 〈ἀγανόφρων〉</p></section></article>
<article id="entry-dgp-0118" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγανόφρων, ων, ον</h1><div class="entry-meta"><span>DGP · ordem 118 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">gen. ονος 1 amável; gentil 2 que dá serenidade. 〈ἀγανός, φρήν〉</p></section></article>
<article id="entry-dgp-0119" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγανῶς</h1><div class="entry-meta"><span>DGP · ordem 119 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. sem violência; serenamente; gentilmente.</p></section></article>
<article id="entry-dgp-0120" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάομαι</h1><div class="entry-meta"><span>DGP · ordem 120 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ép. = ἄγαμαι.</p></section></article>
`;


window.ScripturaLexicons.DGP.bibliographicTerms.push(
    { key: "or. conj.", type: "abbr", text: "oração conjuntiva" }
);

window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0121" data-source="DGP" data-search="ἀγαπάζω tratar afeição acolher amigavelmente amar abraçar DGP" tabindex="0"><td class="table-lemma greek">ἀγαπάζω</td><td>—</td><td>tratar com afeição; amar; abraçar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0122" data-source="DGP" data-search="ἀγαπάω amar querer bem predileção acariciar DGP" tabindex="0"><td class="table-lemma greek">ἀγαπάω-ῶ</td><td>—</td><td>amar; querer bem; ter predileção</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0123" data-source="DGP" data-search="ἀγάπη amor predileção afeição caridade ágape DGP" tabindex="0"><td class="table-lemma greek">ἀγάπη, ης (ἡ)</td><td>—</td><td>amor; afeição; caridade; ágape</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0124" data-source="DGP" data-search="ἀγαπήνωρ amável cortês DGP" tabindex="0"><td class="table-lemma greek">ἀγαπήνωρ, ορος (masc.)</td><td>—</td><td>amável; cortês</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0125" data-source="DGP" data-search="ἀγάπησις afeição carinho amor DGP" tabindex="0"><td class="table-lemma greek">ἀγάπησις, εως (ἡ)</td><td>—</td><td>afeição; carinho; amor</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0126" data-source="DGP" data-search="ἀγαπητικός afetuoso carinhoso DGP" tabindex="0"><td class="table-lemma greek">ἀγαπητικός, ή, όν</td><td>—</td><td>afetuoso; carinhoso</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0127" data-source="DGP" data-search="ἀγαπητός amado querido desejável aceitável filho único filha única afeto DGP" tabindex="0"><td class="table-lemma greek">ἀγαπητός, ή, όν</td><td>—</td><td>amado; querido; filho único; afeto</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0128" data-source="DGP" data-search="ἀγαπητῶς bom grado boa vontade dificuldade DGP" tabindex="0"><td class="table-lemma greek">ἀγαπητῶς</td><td>—</td><td>de bom grado; com dificuldade</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0129" data-source="DGP" data-search="ἀγάρροος curso impetuoso caudaloso DGP" tabindex="0"><td class="table-lemma greek">ἀγάρροος-ους, οος-ους, οον-ουν</td><td>—</td><td>caudaloso; de curso impetuoso</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0130" data-source="DGP" data-search="ἀγάστονος brame geme muito DGP" tabindex="0"><td class="table-lemma greek">ἀγάστονος, ος, ον</td><td>—</td><td>que brame ou geme muito</td><td><span class="source-pill">DGP</span></td></tr>
`;

window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-0121" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαπάζω</h1><div class="entry-meta"><span>DGP · ordem 121 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(só pres., impf. e inf. aor.) 1 tratar com afeição; acolher amigavelmente 2 amar; abraçar.</p></section></article>
<article id="entry-dgp-0122" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαπάω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 122 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἀγαπήσω, aor. ἠγάπησα, perf. ἠγάπηκα; pas. perf. ἠγάπημαι) 1 acolher com afeição; cercar de cuidados; honrar (os mortos) 2 amar; querer bem; ter predileção por; às vezes, acariciar 3 amar mais; preferir uma coisa, ac., a outra, ἀντί e gen. 4 considerar suficiente; considerar-se satisfeito; estar contente, dat., or. conj. (ὅτι, εἰ) ou part. 5 ter o hábito de, inf. ♦ pas. 6 gozar da afeição de; ser objeto da predileção de, gen.</p></section></article>
<article id="entry-dgp-0123" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάπη, ης (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 123 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 amor; predileção; afeição 2 amor divino; amor fraterno; caridade 3 crist. ágape, ceia eucarística.</p></section></article>
<article id="entry-dgp-0124" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαπήνωρ, ορος (masc.)</h1><div class="entry-meta"><span>DGP · ordem 124 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">amável; cortês. 〈ἀγαπάω, ἀνήρ〉</p></section></article>
<article id="entry-dgp-0125" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάπησις, εως (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 125 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">afeição; carinho; amor. 〈ἀγαπάω〉</p></section></article>
<article id="entry-dgp-0126" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαπητικός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 126 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">afetuoso; carinhoso. 〈ἀγαπητός〉</p></section></article>
<article id="entry-dgp-0127" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαπητός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 127 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 amado; querido (pessoa) 2 desejável; aceitável (coisa); ἀγαπητόν [ἐστι] deve-se ficar contente, or. inf. ou conj. (εἰ, ἐάν) ♦ ὁ ἀγαπητός 3 filho único ♦ ἡ ἀγαπητή 4 filha única ♦ τὸ ἀγαπητόν 5 afeto. 〈ἀγαπάω〉</p></section></article>
<article id="entry-dgp-0128" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαπητῶς</h1><div class="entry-meta"><span>DGP · ordem 128 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. 1 de bom grado; de boa vontade 2 a duras penas; com dificuldade.</p></section></article>
<article id="entry-dgp-0129" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάρροος-ους, οος-ους, οον-ουν</h1><div class="entry-meta"><span>DGP · ordem 129 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">de curso impetuoso; caudaloso. 〈ἄγαν, ῥέω〉</p></section></article>
<article id="entry-dgp-0130" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάστονος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 130 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 que brame muito (mar) 2 que geme muito (pessoa). 〈ἄγαν, στένω〉</p></section></article>
`;

window.ScripturaLexicons.DGP.bibliographicTerms.push(
    { key: "ger.", type: "abbr", text: "geralmente" }
);

window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0131" data-source="DGP" data-search="ἀγαστός admirável amável querido DGP" tabindex="0"><td class="table-lemma greek">ἀγαστός, ή, όν</td><td>—</td><td>admirável; amável; querido</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0132" data-source="DGP" data-search="ἀγαστῶς admiravelmente DGP" tabindex="0"><td class="table-lemma greek">ἀγαστῶς</td><td>—</td><td>admiravelmente</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0133" data-source="DGP" data-search="ἀγαυός digno ilustre nobre brilhante esplêndido DGP" tabindex="0"><td class="table-lemma greek">ἀγαυός, ή, όν</td><td>—</td><td>digno; ilustre; brilhante</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0134" data-source="DGP" data-search="ἀγαυρός soberbo orgulhoso DGP" tabindex="0"><td class="table-lemma greek">ἀγαυρός, ά, όν</td><td>—</td><td>soberbo; orgulhoso</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0135" data-source="DGP" data-search="ἀγάω forma média ἀγάομαι ἄγαμαι DGP" tabindex="0"><td class="table-lemma greek">ἀγάω</td><td>—</td><td>forma média de ἄγαμαι</td><td><span class="source-pill">DGP</span></td></tr>
`;

window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-0131" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαστός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 131 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 digno de consideração; admirável 2 amável; querido. 〈ἄγαμαι〉</p></section></article>
<article id="entry-dgp-0132" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαστῶς</h1><div class="entry-meta"><span>DGP · ordem 132 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. admiravelmente.</p></section></article>
<article id="entry-dgp-0133" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαυός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 133 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 digno; ilustre; nobre (pessoa) 2 brilhante; esplêndido (coisa).</p></section></article>
<article id="entry-dgp-0134" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγαυρός, ά, όν</h1><div class="entry-meta"><span>DGP · ordem 134 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 soberbo; orgulhoso ♦ ἀγαυρότατα adv. 2 muito orgulhosamente. 〈ἀ intens., γαῦρος〉</p></section></article>
<article id="entry-dgp-0135" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγάω</h1><div class="entry-meta"><span>DGP · ordem 135 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ger. méd. ἀγάομαι (só pres. e impf.) = ἄγαμαι.</p></section></article>
`;

window.ScripturaLexicons.DGP.bibliographicTerms.push(
    { key: "jôn.", type: "abbr", text: "jônico" },
    { key: "poét.", type: "abbr", text: "poético" }
);

window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0136" data-source="DGP" data-search="Ἀγβάτανα Ecbátana Média Síria DGP" tabindex="0"><td class="table-lemma greek">Ἀγβάτανα, ων (τά)</td><td>—</td><td>Ecbátana</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0137" data-source="DGP" data-search="ἀγγαρεύω serviço constranger bíblico DGP" tabindex="0"><td class="table-lemma greek">ἀγγαρεύω</td><td>—</td><td>forçar a prestar serviço; constranger</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0138" data-source="DGP" data-search="ἀγγαρήϊον serviço postal persas DGP" tabindex="0"><td class="table-lemma greek">ἀγγαρήϊον, ου (τό)</td><td>—</td><td>serviço postal persa</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0139" data-source="DGP" data-search="ἀγγαρήϊος ἄγγαρος persa DGP" tabindex="0"><td class="table-lemma greek">ἀγγαρήϊος, ου (ὁ)</td><td>—</td><td>ἄγγαρος</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0140" data-source="DGP" data-search="ἄγγαρος correio mensageiro real Pérsia DGP" tabindex="0"><td class="table-lemma greek">ἄγγαρος, ος, ον</td><td>—</td><td>mensageiro real da Pérsia</td><td><span class="source-pill">DGP</span></td></tr>
`;

window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-0136" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγβάτανα, ων (τά)</h1><div class="entry-meta"><span>DGP · ordem 136 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">jôn. e poét. Ecbátana, cidade da Média; cidade da Síria.</p></section></article>
<article id="entry-dgp-0137" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγγαρεύω</h1><div class="entry-meta"><span>DGP · ordem 137 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">bíbl. forçar alguém a prestar um serviço; constranger. 〈ἄγγαρος〉</p></section></article>
<article id="entry-dgp-0138" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγγαρήϊον, ου (τό)</h1><div class="entry-meta"><span>DGP · ordem 138 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">serviço postal, entre os persas.</p></section></article>
<article id="entry-dgp-0139" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγγαρήϊος, ου (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 139 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ἄγγαρος. [persa]</p></section></article>
<article id="entry-dgp-0140" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄγγαρος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 140 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">de correio; mensageiro ♦ ὁ ἄγγαρος 2 mensageiro real da Pérsia.</p></section></article>
`;


(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "rar.", type: "abbr", text: "raro" },
        { key: "aor.2", type: "abbr", text: "segundo aoristo" },
        { key: "imper.", type: "abbr", text: "imperativo" }
    );

    const entries = [
        [141, "ἀγγεῖον, ου (τό)", "1 vasilha; recipiente 2 invólucro; cavidade; vaso sangüíneo; cápsula de vegetal. 〈ἄγγος〉", "vasilha; recipiente; vaso"],
        [142, "ἀγγελία, ας (ἡ)", "1 mensagem; notícia 2 anúncio; proclamação; ordem 3 missão; embaixada; delegação. 〈ἄγγελος〉", "mensagem; notícia; anúncio"],
        [143, "ἀγγελιαφόρος, ου (ὁ, ἡ)", "1 mensageiro 2 na Pérsia, recepcionista que conduzia as pessoas à presença do rei. 〈ἀγγελία, φέρω〉", "mensageiro; recepcionista"],
        [144, "ἀγγελικός, ή, όν", "1 de mensageiro 2 tard. de anjo; angélico. 〈ἄγγελος〉", "de mensageiro; angélico"],
        [145, "ἀγγέλλω", "(impf. ἤγγελλον, fut. ἀγγελῶ, aor. ἤγγειλα, perf. ἤγγελκα; pas. fut. ἀγγελθήσομαι, aor. ἠγγέλθην, perf. ἤγγελμαι) 1 ser mensageiro 2 trazer notícias de alguém ou algo, περί e gen. 3 fazer saber; anunciar; declarar 4 anunciar; informar que, or. conj. (ὅτι, ὡς), inf., part. ou ὡς e part. no ac. ♦ méd. 5 anunciar-se. 〈ἄγγελος〉", "trazer notícias; anunciar; informar"],
        [146, "ἄγγελμα, ατος (τό)", "mensagem; notícia. 〈ἀγγέλλω〉", "mensagem; notícia"],
        [147, "ἄγγελος, ου (ὁ)", "1 mensageiro; enviado; delegado 2 rar. mensagem 3 bíbl. e crist. anjo.", "mensageiro; enviado; anjo"],
        [148, "ἄγγος, εος-ους (τό)", "1 recipiente para alimentos; vaso; vasilha 2 cesto; urna funerária; arca para roupas 3 rar. útero 4 alvéolo de favo 5 invólucro, carapaça de caranguejo, concha.", "recipiente; vaso; urna; arca"],
        [149, "ἄγδην", "adv. de modo arrastado. 〈ἄγω〉", "de modo arrastado"],
        [150, "ἄγε e ἄγετε", "cf. ἄγω.", "cf. ἄγω"],
        [151, "ἄγε", "3ª sing. impf. poét. de ἄγω; talvez também, impf. de ἄγνυμι.", "forma poética de ἄγω"],
        [152, "ἆγε", "3ª sing. impf. dór. de ἄγω; talvez também aor. de ἄγνυμι.", "forma dórica de ἄγω"],
        [153, "ἀγειρόντων", "3ª pl. pres. imper. at. de ἀγείρω.", "forma de ἀγείρω"],
        [154, "ἀγείρω", "(fut. ἀγερῶ, aor. ἤγειρα, perf. desus.; pas. aor. ἠγέρθην, perf. ἀγήγερμαι) 1 reunir; agrupar (homens) 2 fazer provisão de; amontoar (coisas) 3 reunir para si; fazer uma coleta; mendigar ♦ méd. pas. 4 agrupar-se; reunir-se; concentrar-se: ἀγρόμενοι σύες Homero porcos agrupados, vara, θυμὸς ἀγέρθη Homero o ânimo se concentrou, i.e., ele recobrou o ânimo.", "reunir; agrupar; amontoar; concentrar-se"],
        [155, "ἁγεῖτο", "3ª sing. impf. dór. de ἡγέομαι.", "forma dórica de ἡγέομαι"],
        [156, "ἀγείτων, ων, ον", "gen. ονος sem vizinhos; isolado. 〈ἀ-, γείτων〉", "sem vizinhos; isolado"],
        [157, "ἀγελαῖος, α, ον", "1 pertencente a um rebanho, à grei 2 que vive em grupo ou em bando; gregário 3 que vem da massa; comum; vulgar. 〈ἀγέλη〉", "de rebanho; gregário; vulgar"],
        [158, "ἀγελάρχης, ου (ὁ)", "1 condutor de rebanho 2 chefe; guia. 〈ἀγέλη, ἄρχω〉", "condutor de rebanho; chefe; guia"],
        [159, "ἀγελαστί", "adv. sem rir. 〈ἀ-, γελάω〉", "sem rir"],
        [160, "ἀγέλαστος, ος, ον", "poét. 1 que não ri, sério; triste 2 que não provoca riso; funesto. 〈ἀ-, γελάω〉", "sério; triste; funesto"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "epít.", type: "abbr", text: "epíteto" },
        { key: "dat. instr.", type: "abbr", text: "dativo instrumental" },
        { key: "instr.", type: "abbr", text: "instrumental" }
    );

    const entries = [
        [161, "ἀγελείη, ης (ἡ)", "jôn. aquela que leva os despojos; predadora, epít. de Atena. 〈ἄγω, λεία〉", "predadora; epíteto de Atena"],
        [162, "ἀγέλη, ης (ἡ)", "1 rebanho, gado 2 grupo organizado 3 grupo de jovens. 〈ἄγω〉", "rebanho; grupo"],
        [163, "ἀγεληδόν", "adv. em rebanho; em bando; em tropa. 〈ἀγέλη〉", "em rebanho; em bando"],
        [164, "ἀγέληφι", "dat. instr. ép. de ἀγέλη.", "dativo instrumental épico de ἀγέλη"],
        [165, "ἀγελοιος, ος, ον", "que não faz rir. 〈ἀ-, γελοῖος〉", "que não faz rir"],
        [166, "ἀγελοίως", "adv. de modo não risível.", "de modo não risível"],
        [167, "ἀγέμεν", "inf. pres. poét. de ἄγω.", "infinitivo presente poético de ἄγω"],
        [168, "ἀγεμονεύω", "dór. = ἡγεμονεύω.", "forma dórica de ἡγεμονεύω"],
        [169, "ἀγεμών", "dór. = ἡγεμών.", "forma dórica de ἡγεμών"],
        [170, "ἄγεν", "3ª pl. aor.2 pas. poét. de ἄγνυμι.", "forma poética de ἄγνυμι"],
        [171, "ἀγενεαλόγητος, ος, ον", "bíbl. sem antepassados conhecidos; sem genealogia. 〈ἀ-, γενεαλογέω〉", "sem genealogia"],
        [172, "ἀγένεια, ας (ἡ)", "falta de nobreza; baixa linhagem; origem obscura. 〈ἀγενής〉", "falta de nobreza; baixa linhagem"],
        [173, "ἀγένειος, ος, ον", "1 imberbe; jovem 2 pueril; pouco sério ♦ οἱ ἀγένειοι 3 os adolescentes. 〈ἀ-, γένειον〉", "imberbe; jovem; pueril"],
        [174, "ἀγενής, ής, ές", "1 ingênito; incriado 2 de baixa linhagem ♦ τὰ ἀγενῆ 3 bíbl. coisas ignóbeis; coisas vis; coisas humildes. 〈ἀ-, γένος〉", "ingênito; incriado; de baixa linhagem"],
        [175, "ἀγένητος, ος, ον", "1 que não teve início; incriado; ingênito 2 inexistente; irreal 3 que não se pode produzir; irrealizável. 〈ἀ-, γίγνομαι〉", "incriado; ingênito; inexistente"],
        [176, "ἀγέννεια", "ἀγένεια.", "ἀγένεια"],
        [177, "ἀγεννής, ής, ές", "1 sem nobreza; de baixa origem; plebeu 2 vulgar; baixo; vil. 〈ἀ-, γέννα〉", "sem nobreza; plebeu; vulgar"],
        [178, "ἀγέννητος, ος, ον", "1 não gerado; não nascido; ainda não nascido 2 sem origem nobre 3 que não produz; estéril. 〈ἀ-, γεννάω〉", "não gerado; não nascido; estéril"],
        [179, "ἀγεννήτως", "adv. sem ter sido gerado.", "sem ter sido gerado"],
        [180, "ἀγεννῶς", "adv. sem nobreza; com baixeza; covardemente. 〈ἀγεννής〉", "sem nobreza; covardemente"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

/* ==========================================================
   LOTE 10 — registros 181–200
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "iter.", type: "abbr", text: "iterativo" },
        { key: "m.-q.-perf.", type: "abbr", text: "mais-que-perfeito" }
    );

    const entries = [
        [181, "ἁγέομαι", "dór. = ἡγέομαι.", "forma dórica de ἡγέομαι"],
        [182, "ἀγέραστος, ος, ον", "não recompensado; sem honrarias. 〈ἀ-, γέρας〉", "não recompensado; sem honrarias"],
        [183, "ἀγερέσθαι", "inf. aor.2 méd. de ἀγείρω.", "infinitivo aoristo médio de ἀγείρω"],
        [184, "ἀγέρθη", "3a sing. aor. pas. poét. de ἀγείρω.", "forma poética de ἀγείρω"],
        [185, "ἀγερμός, οῦ (ὁ)", "1 concentração do exército; recrutamento 2 coleta 3 mendicidade 4 produto de coleta. 〈ἀγείρω〉", "concentração; recrutamento; coleta"],
        [186, "ἀγέροντο", "3ª pl. aor. méd. poét. de ἀγείρω.", "forma poética de ἀγείρω"],
        [187, "ἄγερσις, εως (ἡ)", "reunião; concentração; coleta. 〈ἀγείρω〉", "reunião; concentração; coleta"],
        [188, "ἀγέρωχος, ος, ον", "1 glorioso; orgulhoso; nobre 2 altivo; insolente; arrogante.", "glorioso; orgulhoso; altivo"],
        [189, "Ἀγεσίλας", "dór. = Ἀγησίλαος.", "forma dórica de Ἀγησίλαος"],
        [190, "ἄγεσκον", "impf. iter. de ἄγω.", "imperfeito iterativo de ἄγω"],
        [191, "ἄγευστος, ος, ον", "1 que não experimentou algo, gen. 2 que não foi degustado 3 sem gosto; insípido. 〈ἀ-, γεύω〉", "não experimentado; insípido"],
        [192, "ἄγη1, ης (ἡ)", "1 espanto; assombro 2 ciúme; inveja. 〈ἄγαμαι〉", "espanto; assombro; ciúme"],
        [193, "ἄγη2", "3ª sing. aor.2 pas. poét. de ἄγνυμι.", "forma poética de ἄγνυμι"],
        [194, "ἅγη", "pl. de ἅγος.", "plural de ἅγος"],
        [195, "ἀγή, ῆς (ἡ)", "1 fragmento; lasca 2 arrebentação de ondas 3 sinuosidade 4 astúcia; manha. 〈ἄγνυμι〉", "fragmento; lasca; arrebentação"],
        [196, "ἀγηγέρατο", "3ª pl. m.-q.-perf. pas. ép. de ἀγείρω.", "mais-que-perfeito épico de ἀγείρω"],
        [197, "ἀγήγερμαι", "cf. ἀγείρω.", "cf. ἀγείρω"],
        [198, "ἀγῆλαι", "inf. aor. de ἀγάλλω.", "infinitivo aoristo de ἀγάλλω"],
        [199, "ἀγηλατέω-ῶ", "expulsar como impuro; desterrar. 〈ἄγος, ἐλαύνω〉", "expulsar como impuro; desterrar"],
        [200, "ἄγημα, ατος (τό)", "divisão; corpo de tropa. 〈ἄγω〉", "divisão; corpo de tropa"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

/* ==========================================================
   LOTE 11 — registros 201–220
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    const entries = [
        [201, "ἅγημαι,", "dór. = ἥγημαι; cf. ἡγέομαι.", "forma dórica de ἥγημαι"],
        [202, "ἀγηνορίη, ης (ἡ)", "jôn. 1 mérito; coragem 2 orgulho; arrogância. 〈ἀγήνωρ〉", "mérito; coragem; orgulho"],
        [203, "ἀγήνωρ, ορος", "(masc.) 1 destemido; corajoso; viril 2 orgulhoso; arrogante 3 magnífico. 〈ἄγαν, ἀνήρ〉", "destemido; corajoso; magnífico"],
        [204, "ἀγήοχα", "perf. de ἄγω.", "perfeito de ἄγω"],
        [205, "ἀγήραος, ος, ον", "1 que não envelhece; sempre jovem 2 que não se desgasta; que não se deteriora. 〈ἀ-, γῆρας〉", "sempre jovem; imperecível"],
        [206, "ἀγήρατος, ος, ον", "1 que não envelhece; imperecível; imortal. 〈ἀ-, γεράσκω〉", "que não envelhece; imortal"],
        [207, "ἀγήρως", "ἀγήραος.", "ἀγήραος"],
        [208, "Ἀγησίλαος, ου (ὁ)", "Agesilau, rei de Esparta.", "Agesilau, rei de Esparta"],
        [209, "ἀγητός, ή, όν", "admirável; maravilhoso; surpreendente. 〈ἄγαμαι〉", "admirável; maravilhoso"],
        [210, "ἁγήτωρ", "dór. = ἡγήτωρ.", "forma dórica de ἡγήτωρ"],
        [211, "ἁγιάζω", "(fut. ἁγιάσω, aor. ἡγίασα, perf. desus.) bíbl. 1 dedicar; santificar; consagrar 2 celebrar (festas, rituais). 〈ἅγιος〉", "dedicar; santificar; consagrar"],
        [212, "ἁγιασμός, οῦ (ὁ)", "bíbl. 1 consagração; dedicação 2 santificação; santidade. 〈ἁγιάζω〉", "consagração; santificação"],
        [213, "ἁγίζω", "(impf. ἥγιζον, part. aor. pas. ἁγισθείς) 1 consagrar; oferecer em sacrifício ♦ méd. 2 experimentar temor religioso; venerar. 〈ἅγιος〉", "consagrar; venerar"],
        [214, "ἀγινέω", "1 transportar; conduzir (coisas) ♦ méd. 2 fazer-se conduzir. 〈ἄγω〉", "transportar; conduzir"],
        [215, "ἅγιος, α, ον", "1 santo; sagrado; consagrado, venerado ♦ τὸ ἅγιον 2 coisa ou lugar sagrado.", "santo; sagrado; consagrado"],
        [216, "ἁγιότης, ητος (ἡ)", "1 santidade 2 bíbl. pureza moral; sinceridade. 〈ἅγιος〉", "santidade; pureza moral"],
        [217, "Ἆγις, ιδος (ὁ)", "Ágis, n. de reis de Esparta.", "Ágis, nome de reis de Esparta"],
        [218, "ἁγιστεία, ας (ἡ)", "cerimônia religiosa; rito sacro; culto. 〈ἁγιστεύω〉", "cerimônia religiosa; rito sacro"],
        [219, "ἁγιστεύω", "(só pres. e part. aor.) 1 cumprir os ritos sagrados 2 viver santamente 3 santificar; purificar (as mãos). 〈ἁγὶζω〉", "cumprir ritos; viver santamente; purificar"],
        [220, "ἁγιωσύνη, ης (ἡ)", "bíbl. 1 santidade; castidade 2 consagração. 〈ἅγιος〉", "santidade; consagração"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

/* ==========================================================
   LOTE 12 — registros 221–240
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "opt.", type: "abbr", text: "optativo" },
        { key: "ind.", type: "abbr", text: "indicativo" },
        { key: "freq.", type: "abbr", text: "frequentemente" },
        { key: "dat. pl.", type: "abbr", text: "dativo plural" }
    );

    const entries = [
        [221, "ἀγκάζομαι", "(3ª pl. impf. poét. ἀγκάζοντο) tomar nos braços; abraçar. 〈ἀγκάς〉", "tomar nos braços; abraçar"],
        [222, "ἄγκαθεν1", "adv. 1 com um abraço 2 com apoio nos cotovelos. 〈ἀγκάς〉", "com um abraço; apoiado nos cotovelos"],
        [223, "ἄγκαθεν2", "poét. = ἀνέκαθεν.", "forma poética de ἀνέκαθεν"],
        [224, "ἀγκαλεῖσθε", "2ª pl. imper. e ind. pres. méd. de ἀγκαλέω.", "formas de ἀγκαλέω"],
        [225, "ἀγκαλέσαιτο", "3ª sing. opt. aor. méd. de ἀγκαλέω.", "optativo aoristo médio de ἀγκαλέω"],
        [226, "ἀγκαλέω", "poét. = ἀνακαλέω.", "forma poética de ἀνακαλέω"],
        [227, "ἀγκάλη, ης (ἡ)", "1 braço; freq. no dat. pl. ἀγκάλαις nos braços 2 braço de rio, de mar 3 braçada.", "braço; braço de rio; braçada"],
        [228, "ἀγκαλίζομαι", "(só pres., aor. ἠγκαλισάμην, perf. ἠγκάλισμαι) 1 levar nos braços ♦ méd. 2 abraçar. 〈ἀγκαλίς〉", "levar nos braços; abraçar"],
        [229, "ἀγκαλίς, ίδος (ἡ)", "1 braço; freq. no dat. pl. ἐν ἀγκαλίδεσσι nos braços 2 braçada. 〈ἀγκάλη〉", "braço; braçada"],
        [230, "ἀγκάς", "adv. nos braços.", "nos braços"],
        [231, "ἀγκίστριον, ου (τό)", "pequeno anzol. 〈ἄγκιστρον〉", "pequeno anzol"],
        [232, "ἀγκιστροειδής, ής, ές", "em forma de anzol. 〈ἄγκιστρον, εἶδος〉", "em forma de anzol"],
        [233, "ἄγκιστρον, ου (τό)", "gancho de anzol; anzol. 〈ἄγκος〉", "anzol"],
        [234, "ἀγκιστρόω-ῶ", "(part. perf. pas. ἠγκιστρωμένος) recurvar em forma de anzol ou de gancho. 〈ἄγκιστρον〉", "recurvar em forma de anzol"],
        [235, "ἀγκλίνω", "poét. = ἀνακλίνω.", "forma poética de ἀνακλίνω"],
        [236, "ἄγκοινα, ης (ἡ)", "1 braço 2 abraçamento; envolvimento. 〈ἀγκών〉", "braço; abraçamento"],
        [237, "ἄγκος, εος-ους (τό)", "1 reentrância; cavidade 2 vale.", "reentrância; cavidade; vale"],
        [238, "ἀγκρεμάννυμι", "poét. = ἀνακρεμάννυμι.", "forma poética de ἀνακρεμάννυμι"],
        [239, "ἄγκρισις", "poét. = ἀνάκρισις.", "forma poética de ἀνάκρισις"],
        [240, "ἀγκροτέω", "ἀνακροτέω.", "ἀνακροτέω"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

/* ==========================================================
   LOTE 13 — registros 241–260
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    const entries = [
        [241, "ἀγκρούομαι", "poét. = ἀνακρούομαι.", "forma poética de ἀνακρούομαι"],
        [242, "ἀγκύλη, ης (ἡ)", "1 correia de couro fixada à haste de uma lança pelas duas extremidades; correia recurvada 2 lança com correia ou com alça 3 toda corda que forma um anel: corda de arco; amarra de navio; laço por onde passam os braços de alavanca dos mecanismos de arremesso; coleira; cadarço de calçado 4 articulação; curvatura do braço ou do joelho. 〈ἄγκος〉", "correia; lança; laço; articulação"],
        [243, "ἀγκυλογλώχιν, ινος", "(masc., fem.) de esporões curvos. 〈ἀγκύλος, γλωχίς〉", "de esporões curvos"],
        [244, "ἀγκυλομήτης, ου", "(masc., fem.) de espírito ardiloso; astuto. 〈ἀγκύλος, μῆτις〉", "astuto; de espírito ardiloso"],
        [245, "ἀγκυλόπους, ους, ουν", "gen. ποδος de pés curvos, só com δίφρος, cadeira curul. 〈ἀγκύλος, ποῦς〉", "de pés curvos"],
        [246, "ἀγκύλος, η, ον", "1 curvo; recurvado 2 ardiloso (caráter) 3 complicado 4 conciso (estilo).", "curvo; ardiloso; complicado"],
        [247, "ἀγκυλότοξος, ος, ον", "de arco recurvo. 〈ἀγκύλος, τόξον〉", "de arco recurvo"],
        [248, "ἀγκυλοχείλης, ου", "(masc.) de bico recurvado. 〈ἀγκύλος, χεῖλος〉", "de bico recurvado"],
        [249, "ἄγκυρα, ας (ἡ)", "1 âncora: ἄγκυραν καθιέναι, μεθιέναι, ἀφιέναι lançar âncora; ἄγκυραν αἴρειν, αἴρεσθαι levantar âncora 2 foice ou podadeira.", "âncora; foice"],
        [250, "ἀγκυρουχία, ας (ἡ)", "ancoragem de um navio. 〈ἄγκυρα, ἔχω〉", "ancoragem de navio"],
        [251, "ἀγκύψας", "part. aor. poét. de ἀνακύπτω.", "particípio aoristo poético de ἀνακύπτω"],
        [252, "ἀγκών, ῶνος (ὁ)", "1 cotovelo 2 articulação de um membro 3 curva; sinuosidade; ângulo. 4 braço de cadeira.", "cotovelo; articulação; ângulo"],
        [253, "ἀγλαΐα, ας (ἡ)", "1 brilho; esplendor 2 brilho vão; vaidade 3 festa; triunfo; alegria 4 enfeite; adorno 5 Aglaia, uma das três Graças. 〈ἀγλαός〉", "brilho; esplendor; festa; adorno"],
        [254, "ἀγλαΐζω", "(só pres., impf. ἠγλάϊζον e aor. ἠγλάϊσα; perf. pas. ἠγλάϊσμαι) 1 tornar esplêndido; glorificar 2 rar. considerar como honra ♦ méd. 3 glorificar-se; ornar-se; adquirir brilho 4 experimentar uma forte alegria. 〈ἀγλαός〉", "tornar esplêndido; glorificar"],
        [255, "ἀγλαΐη", "jôn. = ἀγλαΐα.", "forma jônica de ἀγλαΐα"],
        [256, "ἀγλαΐηφι", "dat. ép. de ἀγλαΐα.", "dativo épico de ἀγλαΐα"],
        [257, "ἀγλάϊσμα, ατος (τό)", "brilho; adorno; enfeite. 〈ἀγλαΐζω〉", "brilho; adorno"],
        [258, "ἀγλαόκαρπος, ος, ον", "que tem ou produz frutos magníficos. 〈ἀγλαός, καρπός〉", "de frutos magníficos"],
        [259, "ἀγλαός, ή", "e ός, όν 1 brilhante; esplêndido 2 resplandecente de força ou de beleza; esplêndido (homem) 3 ilustre; glorioso.", "brilhante; esplêndido; glorioso"],
        [260, "ἀγλαοφωτίς, ίδος (ἡ)", "γλυκυσίδη. 〈ἀγλαός, φῶς〉", "γλυκυσίδη"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

/* ==========================================================
   LOTE 14 — registros 261–280
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "adj. verb.", type: "abbr", text: "adjetivo verbal" },
        { key: "nom.", type: "abbr", text: "nominativo" },
        { key: "inter. indir.", type: "abbr", text: "interrogação indireta" },
        { key: "ac. de rel.", type: "abbr", text: "acusativo de relação" },
        { key: "Medic.", type: "abbr", text: "medicina" },
        { key: "Eurípides", type: "biblio", text: "Eurípides — poeta trágico ateniense do século V a.C., um dos três grandes tragediógrafos gregos clássicos." }
    );

    const entries = [
        [261, "ἀγλαώψ, ῶπος", "(fem.) de aspecto brilhante. 〈ἀγλάος, ὤψ〉", "de aspecto brilhante"],
        [262, "ἀγλευκής, ής, ές", "sem doçura; amargo. 〈ἀ-, γλεῦκος〉", "sem doçura; amargo"],
        [263, "ἄγλις, ιθος (ἡ)", "dente de alho.", "dente de alho"],
        [264, "ἄγλωσσος, ος, ον", "1 sem língua (animal) 2 sem palavra; mudo 3 sem eloqüência 4 que não fala grego; bárbaro. 〈ἀ-, γλῶσσα〉", "sem língua; mudo; bárbaro"],
        [265, "ἄγλωττος", "át. = ἄγλωσσος.", "forma ática de ἄγλωσσος"],
        [266, "ἄγμα, ατος (τό)", "fragmento. 〈ἄγνυμι〉", "fragmento"],
        [267, "ἄγναμπτος, ος, ον", "que não se deixa dobrar; inflexível. 〈ἀ-, γνάμπτω〉", "inflexível"],
        [268, "ἄγναπτος, ος, ον", "que ainda não foi lavado; novo (tecido). 〈ἀ-, γνάπτω〉", "não lavado; novo"],
        [269, "ἄγναφος, ος, ον", "bíbl. novo (tecido).", "novo tecido"],
        [270, "ἁγνεία, ας (ἡ)", "1 ausência de mácula; pureza do sagrado 2 abstinência sexual; castidade 3 pl. consagração; purificação. 〈ἁγνεύω〉", "pureza; castidade; consagração"],
        [271, "ἅγνευμα, ατος (τό)", "1 pureza 2 castidade feminina. 〈ἁγνεύω〉", "pureza; castidade"],
        [272, "ἁγνεύω", "(perf. ἥγνευκα) 1 viver sem mácula; ser puro; com ac. de rel. ἁ. χεῖρας Eurípides ter puras as mãos 2 abster-se de algo, inf., por motivação religiosa: ἁγνεύουσι ἔμψυχον μηδὲν κτείνειν Heródoto abstêm-se de matar qualquer ser vivo 3 manter-se puro de, gen. 4 rar. purificar. 〈ἁγνός〉", "viver puro; abster-se; purificar"],
        [273, "ἁγνίζω", "(aor. ἥγνισα, aor. pas. ἡγνίσθην) 1 tirar mancha; limpar; lavar 2 purificar por batismo de fogo ♦ méd. 3 purificar-se 4 bíbl. abster-se de, ἀπό e gen. 〈ἁγνός〉", "purificar; lavar; abster-se"],
        [274, "ἅγνισμα, ατος (τό)", "purificação; expiação. 〈ἁγνίζω〉", "purificação; expiação"],
        [275, "ἁγνισμός, οῦ (ὁ)", "purificação ritual; pureza; santidade. 〈ἁγνίζω〉", "purificação ritual; santidade"],
        [276, "ἁγνιστέος, α, ον", "adj. verb. de ἁγνίζω.", "adjetivo verbal de ἁγνίζω"],
        [277, "ἀγνοεῦντες", "nom. pl. part. pres. jôn. de ἀγνοέω.", "forma jônica de ἀγνοέω"],
        [278, "ἀγνοέω-ῶ", "(impf. ἠγνόουν, fut. ἀγνοήσω, aor. ἠγνόησα; pas. aor. ἠγνοήθην, perf. ἠγνόημαι) 1 ser ignorante em algo, περί e gen.: τὸ γὰρ ἀγνοεῖν δικαίων καὶ ἀδίκων πέρι Platão o ser ignorante nas coisas justas e nas injustas 2 ignorar, não saber; deixar de perceber, ac., part., or. conj. (ὅτι, ὡς) ou inter. indir.: Ἕκτωρ δ’ οὔ τι θεᾶς ἔπος ἠγνοίησεν Homero Heitor não deixou de perceber que era a palavra de uma deusa, τίς ἀγνοεῖ τὸν ἐκεῖθεν πόλεμον δεῦρο ἥξοντα; Demóstenes quem ignora que a guerra de lá chegará aqui? τὸ τῶν παιδιῶν γένος ἠγνοῆσθαι σύμπασιν ὅτι κυριώτατόν ἐστι Platão ser desconhecido de todos que o tipo dos brinquedos é fundamental, ἀγνοοῦντες ἀλλήλων ὅ τι λέγομεν Platão ignorando o que dizemos um ao outro 3 não reconhecer alguém, ac. 4 enganar-se. 〈ἀ-, γιγνώσκω〉", "ignorar; não reconhecer; enganar-se"],
        [279, "ἀγνόημα, ατος (τό)", "bíbl. 1 erro por ignorância; ignorância 2 pecado cometido por ignorância. 〈ἀγνοέω〉", "erro por ignorância; pecado"],
        [280, "ἄγνοια, ας (ἡ)", "1 falta de discernimento; ignorância 2. falta cometida por inadvertência; descuido; erro 3 Medic. perda de consciência. 〈ἀγνοέω〉", "ignorância; erro; perda de consciência"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

/* ==========================================================
   LOTE 15 — registros 281–300
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    const entries = [
        [281, "ἀγνοιῇσι", "3ª sing. do subj. ép. de ἀγνοέω.", "subjuntivo épico de ἀγνοέω"],
        [282, "ἁγνόρυτος, ος, ον", "de curso límpido (rio). 〈ἁγνός, ῥέω〉", "de curso límpido"],
        [283, "ἁγνός, ή, όν", "1 puro; casto; sacro (deuses e coisas divinas) 2 livre de contato maléfico; puro 3 isento de culpa; inocente 4 que não deixa nódoa (alimento).", "puro; casto; sacro"],
        [284, "ἁγνότης, ητος (ἡ)", "bíbl. pureza; castidade. 〈ἁγνός〉", "pureza; castidade"],
        [285, "ἄγνυμι", "(fut. ἄξω, aor. ἔαξα; pas. aor.2 ἐάγην) 1 quebrar; rachar; romper ♦ méd. 2 quebrar-se; romper-se; partir-se.", "quebrar; romper"],
        [286, "ἀγνωμονέω-ῶ", "1 não tomar a decisão correta; ser imprudente; comportar-se mal em rel. a alguém, εἰς ou πρός e ac. 2 tratar mal, de modo injusto. 〈ἀγνώμων〉", "ser imprudente; tratar injustamente"],
        [287, "ἀγνωμόνως", "adv. 1 sem reflexão; sem prudência 2 sem justiça; injustamente. 〈ἀγνώμων〉", "imprudentemente; injustamente"],
        [288, "ἀγνωμοσύνη, ης (ἡ)", "1 falta de discernimento; insensatez 2 erro de julgamento; ignorância 3 obstinação insensata 4 insensibilidade; rudeza 4 pl. suspeitas infundadas; mal-entendidos. 〈ἀγνώμων〉", "insensatez; erro; rudeza"],
        [289, "ἀγνώμων, ων, ον", "gen. ονος 1 imprudente; insensato; desajuizado 2 ignorante; inexperiente 3 insensível; rude; ingrato 4 obstinado; cruel. 〈ἀ-, γνώμη〉", "imprudente; ignorante; cruel"],
        [290, "ἀγνώς, ῶτος", "(masc., fem.) 1 desconhecido; ignorado 2 que não conhece; que não reconhece; ignorante de algo, gen. 3 obscuro; incompreensível. 〈ἀ-, γιγνώσκω〉", "desconhecido; ignorante"],
        [291, "ἁγνῶς", "adv. puramente; santamente.", "puramente; santamente"],
        [292, "ἀγνώσασκε", "3ª sing. aor. iter. de ἀγνοέω.", "aoristo iterativo de ἀγνοέω"],
        [293, "ἀγνωσία, ας (ἡ)", "1 ignorância 2 desconhecimento; obscuridade 3 bíbl. cegueira; falta de percepção espiritual. 〈ἀγνώς〉", "ignorância; cegueira espiritual"],
        [294, "ἄγνωστος, ος, ον", "1 desconhecido; ignorado; desconhecido por ou de, dat. 2 que não se pode conhecer; incognoscível 3 incompreensível; irreconhecível 4 não sabedor; sem conhecimento de; ignorante de, gen. 〈ἀ-, γνωστός〉", "desconhecido; incognoscível"],
        [295, "ἄγνωτος, ος, ον", "desconhecido de, dat. 〈ἀ-, γιγνώσκω〉", "desconhecido"],
        [296, "ἀγξηράνῃ", "3ª sing. subj. aor. de ἀναξηραίνω.", "subjuntivo aoristo de ἀναξηραίνω"],
        [297, "ἆγον", "impf. dór. de ἄγω.", "imperfeito dórico de ἄγω"],
        [298, "ἀγονία, ας (ἡ)", "esterilidade. 〈ἄγονος〉", "esterilidade"],
        [299, "ἄγονος, ος, ον", "1 não gerado; não nascido 2 improdutivo; estéril; sem prole 3 que não engendra; que não produz algo, gen. 〈ἀ-, γίγνομαι〉", "não gerado; estéril"],
        [300, "ἄγοος, ος, ον", "não chorado; não lamentado. 〈ἀ-, γόος〉", "não chorado; não lamentado"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

/* ==========================================================
   LOTE 16 — registros 301–320
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    const entries = [
        [301, "ἀγορά, ᾶς (ἡ)", "1 reunião; assembléia deliberativa: ἀγορήνδε καλέσσατο λαόν Homero convocou os guerreiros para uma assembléia, Ζεῦς θεῶν ἀγορὴν ποιήσατο Homero Zeus reuniu a assembléia de deuses 2 discurso proferido em assembléia: ἀγορὰς ἀγόρευον ἐπὶ Πριάμοιο θύρῃσι Homero [os troianos] proferiam discursos diante das portas de Príamo 3 ação de falar em público: νήπιον, οὔ πω εἰδόθ’ ἀγορέων Homero criança, ainda inábil em discursos 4 lugar de reunião; praça pública, mercado: πόλις ναοῖς καὶ ἀγοραῖς κατεσκευασμένη Xenofonte cidade provida de templos e de praças públicas, ἀγορὰ πλήθουσα praça cheia de pessoas, das 9 às 12 horas, horário do mercado, ἐξ ἀγορᾶς πρίασθαι, ὠνεῖσθαι comprar do mercado 5 provisões: αἱ ἀγοραὶ ἀφίκοντο Xenofonte as mercadorias chegaram ♦ ἡ Ἀγορά 6 Ágora, cidade do Quersoneso 7 Κεραμῶν Ἀγορά Mercado dos Oleiros, cidade da Frígia. 〈ἀγείρω〉", "reunião; assembleia; praça pública; mercado"],
        [302, "ἀγοράασθε", "2ª pl. pres. poét. de ἀγοράομαι.", "forma poética de ἀγοράομαι"],
        [303, "ἀγοράζω", "1 ir ou freqüentar a praça pública; passear na praça 2 comprar; negociar 3 bíbl. resgatar; remir: ἢ οὐκ οἴδατε ὅτι οὐκ ἐστὲ ἑαυτῶν; ἠγοράσθητε γὰρ τιμῆς Novo Testamento acaso não sabeis que não sois de vós mesmos? Fostes resgastados por um preço ♦ méd. 4 fazer compras para si. 〈ἀγορά〉", "comprar; negociar; resgatar; remir"],
        [304, "ἀγοραῖος, ος", "e α, ον 1 da ágora; que cuida da ágora (divindade) 2 que freqüenta o mercado; mercador 3 que passeia na ágora; desocupado; ocioso 4 que concerne à assembléia; demagogo 5 que ocorre na praça; vulgar ♦ ἡ ἀγοραῖος [ἡμέρα] 6 dia do mercado; dia de audiência no tribunal ♦ ὁ ἀγοραῖος 7 advogado; notário. 〈ἀγορά〉", "da ágora; mercador; advogado"],
        [305, "ἀγοραίως", "adv. 1 como na praça pública; de modo vulgar 2 em estilo oratório; forense.", "como na praça; de modo vulgar; forense"],
        [306, "ἀγορανομέω-ῶ", "1 ser agorânomo 2 em Roma, ser edil. 〈ἀγορανόμος〉", "ser agorânomo; ser edil"],
        [307, "ἀγορανομία, ας (ἡ)", "1 função de agorânomo 2 em Roma, cargo de edil.", "função de agorânomo; cargo de edil"],
        [308, "ἀγορανομικός, ή, όν", "1 concernente ao agorânomo 2 em Roma, concernente ao edil.", "concernente ao agorânomo ou edil"],
        [309, "ἀγορανόμος, ου (ὁ)", "1 agorânomo, fiscal do mercado em Atenas 2 em Roma, edil. 〈ἀγορά, νέμω〉", "agorânomo; fiscal do mercado; edil"],
        [310, "ἀγοράομαι-ῶμαι", "(impf. ἠγοραόμην-ώμην, aor. ἠγορησάμην) 1 participar de uma assembléia; estar em assembléia 2 discursar na assembléia 3 proferir; dizer algo, ac., a alguém, dat. 〈ἀγορά〉", "participar de assembleia; discursar"],
        [311, "ἀγοράσθω", "dór. = ἀγοράζω.", "forma dórica de ἀγοράζω"],
        [312, "ἀγόρασμα, ατος (τό)", "compra; mercadoria; provisão. 〈ἀγοράζω〉", "compra; mercadoria; provisão"],
        [313, "ἀγοραστής, οῦ (ὁ)", "1 escravo encarregado das compras 2 comprador. 〈ἀγοράζω〉", "encarregado de compras; comprador"],
        [314, "ἀγορεύω", "(impf. ἠγόρευον, pres. e impf., em prosa át.; em lugar do fut. ἀγορεύσω, aor. ἠγόρευσα, perf. ἠγόρευκα e das formas pas. correspondentes, o át. emprega: fut. ἐρῶ, aor.2 εἷπον, perf. εἴρηκα; pas. fut. εἰρήσομαι e ῥηθήσομαι, perf. εἴρημαι) 1 falar na assembléia; pronunciar um discurso 2 falar; dizer; narrar 3 dizer em voz alta; proclamar ou fazer proclamar publicamente; impor ♦ méd. 4 publicar; proclamar. 〈ἀγορά〉", "falar; dizer; proclamar"],
        [315, "ἀγορή", "jôn. = ἀγορά.", "forma jônica de ἀγορά"],
        [316, "ἀγορῆθεν", "adv. vindo da assembléia. 〈ἀγορή〉", "vindo da assembleia"],
        [317, "ἀγορήνδε", "adv. em direção à assembléia. 〈ἀγορή〉", "em direção à assembleia"],
        [318, "ἀγορητής, οῦ (ὁ)", "orador. 〈ἀγοράομαι〉", "orador"],
        [319, "ἀγορητύς, ύος (ἡ)", "eloqüência. 〈ἀγοράομαι〉", "eloquência"],
        [320, "ἄγορος, ου (ὁ)", "ἀγορά.", "ἀγορά"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

/* ==========================================================
   LOTE 17 — registros 321–340
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "adj.", type: "abbr", text: "adjetivo" },
        { key: "exort.", type: "abbr", text: "exortativo" }
    );

    const entries = [
        [321, "ἅγος", "e ἄγος, εος-ους (τό) 1 impureza; mácula; profanação 2 pessoa sacrílega, ímpia 3 sacrifício expiatório.", "impureza; profanação; sacrifício expiatório"],
        [322, "ἀγός, οῦ (ὁ)", "condutor; chefe. 〈ἄγω〉", "condutor; chefe"],
        [323, "ἀγοστός, οῦ (ὁ)", "1 a palma da mão 2 braço (que se recurva).", "palma da mão; braço"],
        [324, "ἄγρα, ας (ἡ)", "1 caça; pesca 2 tática para a caçada de, gen. 3 caça; presa 4 bíbl. produto da pesca; pescado.", "caça; pesca; presa"],
        [325, "Ἀγραΐς, ΐδος (ἡ)", "Agraída, território dos agreus, povo etólio.", "Agraída, território dos agreus"],
        [326, "ἀγραμματία, ας (ἡ)", "falta de instrução; ignorância. 〈ἀγράμματος〉", "falta de instrução; ignorância"],
        [327, "ἀγράμματος, ος, ον", "1 analfabeto; ignorante; iletrado 2 não escrito 3 que não pode emitir sons articulados (animal) 4 não articulado; que não se pode articular. 〈ἀ-, γράμμα〉", "analfabeto; ignorante; não escrito"],
        [328, "ἄγραπτος, ος, ον", "não escrito. 〈ἀ-, γράφω〉", "não escrito"],
        [329, "ἀγραυλέω-ῶ", "1 morar no campo 2 passar a noite ao ar livre, no campo. 〈ἄγραυλος〉", "morar no campo; passar a noite ao ar livre"],
        [330, "ἄγραυλος, ος, ον", "1 que vive no campo 2 agreste; feroz (animal) 3 rústico. 〈ἀγρός, αὐλή〉", "campestre; agreste; rústico"],
        [331, "ἄγραφος, ος, ον", "1 não escrito; não registrado por escrito 2 não inscrito em lista 3 não pintado. 〈ἀ-, γράφω〉", "não escrito; não registrado; não pintado"],
        [332, "ἄγρει, ἀγρεῖτε", "cf. ἀγρέω.", "cf. ἀγρέω"],
        [333, "ἀγρεῖος, α, ον", "campestre; rústico; grosseiro. 〈ἀγρός〉", "campestre; rústico; grosseiro"],
        [334, "ἄγρευμα, ατος (τό)", "1 armadilha para caça; rede 2 caça; presa. 〈ἀγρεύω〉", "armadilha; caça; presa"],
        [335, "ἀγρεύς, έως (ὁ)", "1 caçador 2 pescador 3 martim-pescador, passáro. 〈ἄγρα〉", "caçador; pescador; martim-pescador"],
        [336, "ἀγρευτάν", "ac. dór. de ἀγρευτής.", "acusativo dórico de ἀγρευτής"],
        [337, "ἀγρευτήρ, ῆρος (ὁ)", "ἀγρευτής.", "ἀγρευτής"],
        [338, "ἀγρευτής, οῦ (ὁ)", "1 caçador ♦ adj. 2 de caça ou pesca. 〈ἀγρεύω〉", "caçador; de caça ou pesca"],
        [339, "ἀγρεύω", "(fut. ἀγρεύσω, aor. ἤγρευσα, perf. ἤγρευκα; pas. aor. ἠγρεύθην) 1 apanhar; caçar; pescar 2 perseguir; procurar pegar; correr atrás ♦ méd. 3 apanhar; pegar (caça ou pescado). 〈ἀγρεύς〉", "caçar; pescar; perseguir"],
        [340, "ἀγρέω-ῶ", "(só pres.) 1 tomar; apoderar-se de, ac. ♦ ἄγρει, ἀγρεῖτε imper. 2 usado como interj. exort., vamos! rápido! 〈ἄγρα〉", "tomar; apoderar-se; vamos"]
    ];

    const esc = (value) => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    source.rowsHtml += entries.map(([n, headword, definition, gloss]) =>
        `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4, "0")}" data-source="DGP" data-search="${esc(headword + " " + gloss + " DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`
    ).join("\n");

    source.cardsHtml += entries.map(([n, headword, definition]) =>
        `<article id="entry-dgp-${String(n).padStart(4, "0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`
    ).join("\n");
})();

