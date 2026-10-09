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

/* ==========================================================
   LOTE 18 — registros 341–360
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "sinc.", type: "abbr", text: "sincopado" },
        { key: "n. romano", type: "abbr", text: "nome romano" }
    );

    const entries = [
        [341, "ἄγρη", "jôn. = ἄγρα.", "forma jônica de ἄγρα"],
        [342, "ἀγριαίνω", "(fut. ἀγριανῶ, aor. ἠγρίανα, perf. desus.) 1 irritar-se; enfurecer-se 2 (animal) ser ou tornar-se selvagem 3 enfurecer; irritar. 〈ἄγριος〉", "irritar-se; enfurecer-se; tornar selvagem"],
        [343, "ἀγριέλαιος, ος, ον", "1 de oliveira selvagem ♦ ἡ ἀγριέλαιος 2 oliveira selvagem. 〈ἄγριος, ἐλαία〉", "oliveira selvagem"],
        [344, "ἄγριος, α", "e ος, ον 1 selvagem; agreste; silvestre 2 selvagem; rude; violento 3 rústico; inculto (lugar) ♦ ἄγρια adv. 4 de maneira selvagem ♦ τὸ ἄγριον 5 selvageria. 〈ἀγρός〉", "selvagem; agreste; rude"],
        [345, "ἀγριότης, ητος (ἡ)", "1 estado selvagem (de animais, plantas, terras) 2 selvageria; crueldade (de homens). 〈ἄγριος〉", "estado selvagem; crueldade"],
        [346, "ἀγριόφωνος, ος, ον", "de voz selvagem. 〈ἄγριος, φωνή〉", "de voz selvagem"],
        [347, "ἀγριόω-ῶ", "(3ª sing. aor. ἠγρίωσε) 1 tornar selvagem; exasperar; incitar alguém, ac., contra outrem, dat. ou πρός e ac. ♦ pas. 2 (planta, região) ser selvagem, inculto 3 (homem) ser selvagem, cruel. 〈ἄγριος〉", "tornar selvagem; exasperar"],
        [348, "Ἀγρίππας, α (ὁ)", "bíbl. Agripa, n. romano.", "Agripa, nome romano"],
        [349, "ἀγριωπός, ός, όν", "de aspecto ou olhar feroz. 〈ἄγριος, ὤψ〉", "de olhar feroz"],
        [350, "ἀγρίως", "adv. 1 de maneira selvagem 2 de modo inculto.", "selvagemente; incultamente"],
        [351, "ἀγροβάτης, ου (ὁ)", "que caminha nos campos. 〈ἀγρός, βαίνω〉", "que caminha nos campos"],
        [352, "ἀγροβότης, ου (ὁ)", "que apascenta nos campos. 〈ἀγρός, βόσκω〉", "que apascenta nos campos"],
        [353, "ἀγρόθε", "e ἀγρόθεν adv. vindo do campo. 〈ἀγρός〉", "vindo do campo"],
        [354, "ἀγροικία, ας (ἡ)", "1 rusticidade 2 estada no campo 3 habitação no campo. 〈ἀγροῖκος〉", "rusticidade; estada no campo"],
        [355, "ἀγροικίζομαι", "(aor. ἠγροικισάμην, part. perf. ἠγροικισμένος) comportar-se como camponês; comportar-se rusticamente; ser grosseiro. 〈ἀγροῖκος〉", "comportar-se rusticamente"],
        [356, "ἀγροῖκος", "e ἄγροικος, ος, ον 1 que vive no campo; agreste 2 rústico; grosseiro 3 inculto (lugar) 4 silvestre (fruta). 〈ἀγρός, οἰκέω〉", "que vive no campo; rústico; silvestre"],
        [357, "ἀγροίκως", "adv. à maneira de camponês; rusticamente; grosseiramente.", "rusticamente; grosseiramente"],
        [358, "ἀγροιώτης, ου (ὁ)", "1 homem do campo; camponês ♦ adj. 2 rústico; grosseiro. 〈ἀγρός〉", "camponês; rústico"],
        [359, "ἀγρόμενος", "part. aor.2 méd. sinc. de ἀγείρω.", "particípio aoristo médio sincopado de ἀγείρω"],
        [360, "ἀγρόνδε", "adv. em direção ao campo. 〈ἀγρός〉", "em direção ao campo"]
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
   LOTE 19 — registros 361–380
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "op.", type: "abbr", text: "oposição" },
        { key: "Píndaro", type: "biblio", text: "Píndaro — poeta lírico grego dos séculos VI–V a.C., célebre sobretudo por seus epinícios em honra de vencedores dos jogos pan-helênicos." }
    );

    const entries = [
        [361, "ἀγρονόμος, ος", "e η, ον 1 do campo; agreste♦ ὁ ἀγρονόμος 2 agrônomo, fiscal da zona rural. 〈ἀγρός, νέμω〉", "do campo; agrônomo; fiscal rural"],
        [362, "ἀγρός, οῦ (ὁ)", "1 campo; terra para cultivo 2 campo, em op. a cidade.", "campo; terra de cultivo"],
        [363, "Ἀγροτέρα, ας", "(fem.) 1 Caçadora, epít. de Ártemis 2 que persegue: ἀ. μέριμνα Píndaro preocupação em busca de alguma coisa. 〈ἄγρα〉", "Caçadora; epíteto de Ártemis"],
        [364, "ἀγρότερος, α, ον", "1 campestre; silvestre; agreste 2 campesino (pessoa). 〈ἀγρός〉", "campestre; silvestre; agreste"],
        [365, "ἀγρότης1, ου (ὁ)", "caçador. 〈ἄγρα〉", "caçador"],
        [366, "ἀγρότης2, ου", "(masc.) campestre; rústico. 〈ἀγρός〉", "campestre; rústico"],
        [367, "ἀγρυπνέω-ῶ", "(fut. ἀγρυπνήσω, aor. ἠγρύπνησα, perf. ἠγρύπνηκα) 1 não dormir; permanecer insone 2 ficar de vigília; velar. 〈ἄγρυπνος〉", "não dormir; vigiar"],
        [368, "ἀγρυπνητικός, ή, όν", "desperto; vigilante. 〈ἀγρυπνέω〉", "desperto; vigilante"],
        [369, "ἀγρυπνία, ας (ἡ)", "1 insônia; vigília 2 tempo de vigília; guarda 3 vigilância; preocupação. 〈ἄγρυπνος〉", "insônia; vigília; vigilância"],
        [370, "ἄγρυπνος, ος, ον", "1 sem sono; insone; vigilante 2 que afasta o sono; que mantém desperto ♦ τὸ ἄγρυπνον 3 vigília. 〈ἄγρα, ὕπνος〉", "insone; vigilante"],
        [371, "ἀγρώσσω", "(só pres.) caçar; pescar. 〈ἄγρα〉", "caçar; pescar"],
        [372, "ἄγρωστις, εως", "e ίδος (ἡ) 1 erva em geral 2 escalracho, gramínea nociva. 〈ἀγρός〉", "erva; escalracho"],
        [373, "ἀγυιά", "e ἄγυια, ας (ἡ) 1 via; rua 2 praça; quarteirão 3 cidade. 〈ἄγω〉", "via; rua; praça; cidade"],
        [374, "ἀγυιάτης, ου (ὁ)", "ἀγυιεύς.", "ἀγυιεύς"],
        [375, "ἀγυιεύς, έως (ὁ)", "1 protetor dos caminhos, epít. de Apolo 2 altar ou estela erguidos nas portas das casas, em honra de Apolo. 〈ἀγυιά〉", "protetor dos caminhos; altar de Apolo"],
        [376, "ἀγύμναστος, ος, ον", "1 não exercitado em; inexperiente em, gen., εἰς, περί ou πρός e ac. 2 não provado pela dor. 〈ἀ-, γυμνάζω〉", "inexperiente; não provado pela dor"],
        [377, "ἀγυμνάστως", "adv. sem exercício.", "sem exercício"],
        [378, "ἄγυρις, εως (ἡ)", "aglomeração; multidão. 〈ἀγορά〉", "aglomeração; multidão"],
        [379, "ἀγυρμός, οῦ (ὁ)", "1 coleta 2 reunião. 〈ἀγείρω〉", "coleta; reunião"],
        [380, "ἀγυρτάζω", "recolher; juntar; reunir. 〈ἀγύρτης〉", "recolher; juntar; reunir"]
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
   LOTE 20 — registros 381–400
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "prep.", type: "abbr", text: "preposição" }
    );

    const entries = [
        [381, "ἀγύρτης, ου (ὁ)", "1 mendigo 2 vagabundo 3 charlatão. 〈ἀγείρω〉", "mendigo; vagabundo; charlatão"],
        [382, "ἀγυρτικός, ή, όν", "1 de vagabundo 2 de charlatão. 〈ἀγύρτης〉", "de vagabundo; de charlatão"],
        [383, "ἀγύρτρια, ας (ἡ)", "mendiga. 〈ἀγύρτης〉", "mendiga"],
        [384, "ἀγχέμαχος, ος, ον", "1 que combate de perto 2 bom para combater de perto (arma). 〈ἄγχι, μάχομαι〉", "que combate de perto"],
        [385, "ἄγχι", "(comp. ἆσσον, superl. ἄγχιστα) adv. 1 (lugar) perto 2 (tempo) quase ♦ prep. 3 perto de; próximo de, gen.", "perto; quase; próximo de"],
        [386, "ἀγχιάλος, ος, ον", "vizinho do mar. 〈ἄγχι, ἅλς〉", "vizinho do mar"],
        [387, "ἀγχιβαθής, ής, ές", "1 profundo desde a beira; profundo 2 alto desde a beira (margem). 〈ἄγχι, βάθος〉", "profundo; alto desde a beira"],
        [388, "ἀγχιγείτων, ων, ον", "gen. ονος vizinho.", "vizinho"],
        [389, "ἀγχίθεος, ος, ον", "1 semelhante a um deus; quase deus 2 crist. próximo de Deus ♦ ὁ ἀγχίθεος 3 semideus. 〈ἄγχι, θεός〉", "semelhante a deus; próximo de Deus; semideus"],
        [390, "ἀγχίθυρος, ος, ον", "vizinho de porta. 〈ἄγχι, θύρα〉", "vizinho de porta"],
        [391, "ἀγχιμαχητής, οῦ (ὁ)", "ἀγχέμαχος.", "ἀγχέμαχος"],
        [392, "ἀγχίμολος, ος, ον", "1 que vem logo após; que se avizinha; ἐξ ἀγχιμόλοιο de bem perto ♦ ἀγχίμολον adv. 2 bem perto de, dat. 〈ἄγχι, μολεῖν〉", "bem perto"],
        [393, "ἀγχίνοια, ας (ἡ)", "vivacidade de espírito; perspicácia. 〈ἀγχίνοος〉", "vivacidade de espírito; perspicácia"],
        [394, "ἀγχίνοος-ους, οος-ους, οον-ουν", "de espírito vivo; perspicaz. 〈ἄγχι, νόος〉", "perspicaz"],
        [395, "ἀγχίπλοος-ους, οος-ους, οον-ουν", "de navegação curta; de travessia curta. 〈ἄγχι, πλέω〉", "de navegação curta"],
        [396, "ἀγχίπολις, ιος", "e ἀγχίπτολις, εως (masc., fem.) 1 protetor da cidade 2 vizinho da cidade. 〈ἄγχι, πόλις〉", "protetor ou vizinho da cidade"],
        [397, "Ἀγχίσης, ου (ὁ)", "Anquises, pai de Enéias.", "Anquises"],
        [398, "Ἀγχισιάδης, ου (ὁ)", "filho de Anquises. 〈Ἀγχίσης〉", "filho de Anquises"],
        [399, "ἄγχιστα", "cf. ἄγχιστος.", "cf. ἄγχιστος"],
        [400, "ἀγχιστεία, ας (ἡ)", "1 parentesco próximo 2 familiaridade; intimidade 3 direito de herança. 〈ἀγχιστεύω〉", "parentesco; intimidade; direito de herança"]
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
   LOTE 21 — registros 401–420
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "aor.1", type: "abbr", text: "primeiro aoristo" },
        { key: "loc.", type: "abbr", text: "locução" },
        { key: "Menandro", type: "biblio", text: "Menandro — poeta cômico ateniense dos séculos IV–III a.C., principal representante da Comédia Nova." }
    );

    const entries = [
        [401, "ἀγχιστεῖον, ου (τό)", "ἀγχιστεία.", "ἀγχιστεία"],
        [402, "ἀγχιστεύς, έως (ὁ)", "1 parente próximo 2 herdeiro legítimo. 〈ἄγχιστος〉", "parente próximo; herdeiro legítimo"],
        [403, "ἀγχιστεύω", "(aor. pas. ἠγχιστεύθην) 1 ser próximo; ser vizinho de, gen. ou dat. 2 ser parente próximo de; ser herdeiro legítimo de alguém, dat. 3 bíbl. exercer o direito de parente e tomar posse de herança. 〈ἀγχιστεύς〉", "ser próximo; exercer direito de parente"],
        [404, "ἀγχιστήρ, ῆρος (ὁ)", "aquele que é causa de, gen. 〈ἄγχι〉", "aquele que é causa de"],
        [405, "ἀγχιστῖνος, η, ον", "bem próximo; no pl. cerrados uns aos outros. 〈ἄγχιστος〉", "bem próximo; cerrados"],
        [406, "ἄγχιστος, η, ον", "1 bem próximo; vizinho 2 próximo (pela origem); parente próximo ♦ ἄγχιστον, ἄγχιστα adv. 3 (lugar) bem próximo; o mais próximo; de muito perto 4 (tempo) recentemente. 〈ἄγχι〉", "bem próximo; parente próximo"],
        [407, "ἀγχίστροφος, ος, ον", "1 rápido em virar-se; versátil ♦ ἀγχίστροφα adv. 2 de maneira versátil. 〈ἄγχι, στρέφω〉", "versátil; rápido em virar-se"],
        [408, "ἀγχιτέρμων, ων, ον", "gen. ονος limítrofe; vizinho. 〈ἄγχι, τέρμα〉", "limítrofe; vizinho"],
        [409, "ἀγχόθεν", "adv. vindo de bem perto. 〈ἄγχι〉", "vindo de bem perto"],
        [410, "ἀγχόθι", "adv. 1 bem perto ♦ prep. 2 bem perto de, gen. 〈ἄγχι〉", "bem perto de"],
        [411, "ἀγχόνη, ης (ἡ)", "1 laço; corda para estrangular 2 estrangulamento; enforcamento 3 angústia. 〈ἄγχω〉", "laço; estrangulamento; angústia"],
        [412, "ἀγχότατα, ἀγχοτάτω", "ἀγχοῦ.", "ἀγχοῦ"],
        [413, "ἀγχότερος, α, ον", "o mais próximo; bem próximo de, gen. 〈ἄγχι〉", "o mais próximo"],
        [414, "ἀγχοῦ", "adv. 1 próximo; bem perto 2 de igual modo; semelhantemente ♦ prep. 3 perto de, gen. ou dat. 〈ἄγχι〉", "próximo; bem perto"],
        [415, "ἄγχουσα, ης (ἡ)", "1 ancusa, planta 2 corante para o rosto extraído da raiz da ancusa, ruge. 〈ἄγχω〉", "ancusa; corante para o rosto"],
        [416, "ἄγχω", "(fut. ἄγξω, aor. ἦγξα, perf. desus.) 1 apertar; sufocar; estrangular ♦ méd. 2 enforcar-se.", "apertar; sufocar; estrangular"],
        [417, "ἀγχώμαλος, ος, ον", "1 quase igual: ἐγένοντο ἀγχώμαλοι ἐν τῇ χειροτονίᾳ Tucídides ficaram quase iguais na votação 2 incerto; duvidoso: ἀ. μάχη Tucídides combate incerto, ἐν ἀγχωμάλῳ sem resultado decisivo ♦ ἀγχώμαλα adv. 3 de maneira equilibrada; de chances quase iguais: ἀ. ναυμαχεῖν Tucídides realizar combate naval em condições quase iguais, i.e., com equilíbrio de forças. 〈ἄγχι, ὁμαλός〉", "quase igual; incerto; equilibrado"],
        [418, "ἀγχωμάλως", "adv. com oportunidades quase iguais.", "com oportunidades quase iguais"],
        [419, "ἄγω", "(fut. ἄξω, aor.2 ἤγαγον, rar. aor.1 ἦξα, perf. ἦχα; pas. fut. ἀχθήσομαι ou ἄξομαι, aor. ἤχθην, perf. ἦγμαι) ativa 1 conduzir; levar; trazer 2 levar sob constrangimento, levar à força, arrastar 3 levar em saque; saquear 4 conduzir para si, atrair 5 dirigir, guiar, educar (pessoas) 6 prolongar; estender; alongar (coisas) 7 conduzir no tempo; fazer durar; manter; celebrar 8 considerar, julgar 9 ter como peso, valer 10 intr. dirigir-se; ir; caminhar ♦ ἄγε e ἄγετε, imper. usado como interj. exort., eia! vamos! continue!, sobretudo nas loc. εἰ δ’ ἄγε, νῦν δ’ ἄγε, ἄγε δή, αλλ’ ἄγε, ἄγε νῦν média 11 levar ou trazer uma coisa para si ou para tê-la consigo 12 conduzir para casa como esposa, tomar por esposa, dar por esposa 1 σχιστὴ δ’ ὁδὸς ἐς ταὐτὸ Δελφῶν κἀπὸ Δαυλίας ἄγει Sófocles uma estrada bifurcada vinda de Delfos e de Dáulia leva ao mesmo lugar, δῶκε δ’ ἄγειν ἑτάροισι ὑπερθύμοισι γυναῖκα Homero permitiu que seus destemidos companheiros levassem a mulher, ἄγω δ’αἴθωνα σίδηρον Homero trago o ferro luzente 2 ἐμέ τινες εἰς δίκας ἄγουσιν Xenofonte alguns me levam aos tribunais, ἡ πεπρωμένη ἄγει θανεῖν ἀδελφὴν ἐμήν Eurípides o destino marcado leva minha irmã à morte, ὁ ἀγαγὼν αὐτὸν ἐπὶ τὸν ὅρκον Plutarco aquele que o constrangeu a jurar. 3 φέρων καὶ ἄγων τὴν Βιθυνίζα Xenofonte carregando e levando toda a Bitínia, i.e., saqueando a Bitínia, ἦγον καὶ ἔκαιον Xenofonte saqueavam e incendiavam 4 τί με πρὸς ναοὺς ἄγαγες; Eurípides por que me atraíste ao templo? λίθος τοὺς δακτυλίους ἄγει σιδηροῦς Platão a pedra atrai os anéis de ferro 5 ἄγει ψυχὴ πάντα τὰ κατ’ οὐρανὸν καὶ γῆν Platão uma alma dirige tudo o que está no céu e na terra, ἄγοντες τὴν πόλιν ἐν ὁμονοίᾳ Demóstenes conduzindo a cidade em harmonia 6 ἧ ἐκεῖνοι ἔμελλον ἄξειν τὸ τεῖχος Tucídides por onde iriam prolongar a muralha 7 ἄγοντες τὴν ἡμέραν ταύτην πάντα τὸν χρόνον Tucídides fazendo este dia durar o tempo todo, ἄγοντας πρὸς Ἀθηναίους δεχημέρους σπονδάς Tucídides observando uma trégua de dez dias com os atenienses, ἐλευθέραν ἦγε τὴν Ἑλλάδα Demóstenes mantinha a Hélade livre, μούνη γὰρ ἄγειν οὐκέτι σωκῶ λύπης ἀντίρροπον ἄχθος Sófocles sozinha não mais sou capaz de suportar um peso equivalente à minha dor, ἄγουσι τοὺς γάμους Menandro celebram as bodas 8 περὶ πλείστου ἦγον τὰ τοῦ θεοῦ πορσύνειν Heródoto consideravam muito importante celebrar o culto do deus, ἃ μάλιστ’ ἦγεν ἐν τιμῇ Platão o que ele acima de tudo honrava 9 χρυσίδες τέτταρες ἄγουσα ἑκάστη μνᾶν Demóstenes quatro vasos de ouro, pesando cada um uma mina, ὁ ἀκινάκης ἦγε τριακοσίους δαρεικούς Demóstenes a cimitarra valia trezentos daricos 10 ἔλεγεν ὅτι ἤδη καιρὸς εἴη ἄγειν ἐπὶ τοὺς πολεμίους Xenofonte dizia que já era hora de avançar contra os inimigos 11 ἴσασι γὰρ ἐφ’ οἷς αὐτοὺς Κυαξάρης ἄγεται συμμάχους Xenofonte sabem sob que condições Ciáxares os levava como aliados, καὶ μ’ ἔφασαν χρυσόν τε καὶ ἄργυρον οἴκαδ’ ἄγεσθαι Homero diziam que eu estava levando para casa ouro e prata 12 γυναῖκα τεκνοποιὸν μὴ ἄγεσθαι ἐς τὰ οἰκία Heródoto não levar para casa uma mulher que possa ter filhos, ὑεῖ δὲ Σπάρτηθεν Ἀλέκτορος ἤγετο κούρην Homero para seu filho trazia de Esparta como esposa a filha de Alector.", "conduzir; levar; trazer; guiar; celebrar"],
        [420, "ἀγῷ, ῇς, ῇ", "subj. aor.2 pas. de ἄγνυμι.", "subjuntivo aoristo passivo de ἄγνυμι"]
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
   LOTE 22 — registros 421–440
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "Mús.", type: "abbr", text: "música" },
        { key: "Ret.", type: "abbr", text: "retórica" },
        { key: "Jur.", type: "abbr", text: "jurídico; direito" },
        { key: "Dram.", type: "abbr", text: "dramático; teatro" }
    );

    const entries = [
        [421, "ἁγώ", "crase de ἅ ἐγώ.", "crase de ἅ ἐγώ"],
        [422, "ἀγωγεύς, έως (ὁ)", "1 condutor 2 correia; rédea. 〈ἄγω〉", "condutor; correia; rédea"],
        [423, "ἀγωγή, ῆς (ἡ)", "1 direção; condução 2 viagem 3 direcionamento; tendência 4 prisão por ordem judicial 5 educação; instrução 6 modo de conduzir (uma questão, negócios, as festas); conduta; método 7 modo de vida; comportamento 8 transporte (de coisas) 9 Mús. duração. 〈ἄγω〉", "direção; condução; educação; modo de vida"],
        [424, "ἀγώγιμος, ος, ον", "1 transportável (coisa) 2 passível de ser preso, de ser escravizado (pessoa) 3 suscetível de se deixar arrastar a; inclinado a, πρός e ac. ♦ τὸ ἀγώγιμον 4 encantamento; filtro de amor ♦ τὰ ἀγώγιμα 5 coisas transportáveis, mercadorias. 〈ἀγωγή〉", "transportável; passível de prisão; encantamento"],
        [425, "ἀγώγιον, ου (τό)", "mercadoria transportada; carregamento. 〈ἀγωγή〉", "mercadoria transportada; carregamento"],
        [426, "ἀγωγός, ός, όν", "1 que guia; que conduz 2 capaz de atrair; sedutor de, gen. ♦ ὁ ἀγωγός 3 condutor; guia. 〈ἄγω〉", "que guia; condutor; guia"],
        [427, "ἀγών, ῶνος (ὁ)", "1 assembléia; reunião; conselho 2 jogo; competição; concurso 3 combate; luta 4 debate 5 litígio 6 interesse que leva à luta; luta espiritual ou mental 7 luta mortal; esforço penoso 8 lugar de reunião ou de jogos; campo; arena 9 Ret. veemência do discurso ou do argumento 10 Agón, divindade da competição. 〈ἄγω〉", "assembleia; competição; combate; debate"],
        [428, "ἀγωνάρχης, ου (ὁ)", "juiz da luta. 〈ἀγών, ἄρχω〉", "juiz da luta"],
        [429, "ἀγωνία, ας (ἡ)", "1 luta (em jogos); participação nos grandes jogos; concurso 2 exercício físico 3 inquietude; ansiedade; angústia 4 crist. agonia. 〈ἀγών〉", "luta; ansiedade; agonia"],
        [430, "ἀγωνιάω-ῶ", "(fut. ἀγωνιάσω, aor. ἠγωνίασα, perf. desus.) 1 lutar; competir 2 ter ansiedade; inquietar-se com algo, περί e gen., ἐπί e dat. 3 temer. 〈ἀγωνία〉", "lutar; competir; inquietar-se"],
        [431, "ἀγωνίζομαι", "(fut. ἀγωνιοῦμαι e ἀγωνίσομαι, aor. ἠγωνισάμην, perf. ἠγώνισμαι) 1 concorrer; disputar (em jogos) 2 lutar; combater por algo, περί e gen.; contra alguém, dat. ou πρός e ac. 3 esforçar-se por; batalhar para, inf. 4 Jur. debater; defender; sustentar; contestar 5 Dram. representar; interpretar. 〈ἀγών〉", "competir; lutar; defender; representar"],
        [432, "ἀγώνιος, ος, ον", "1 próprio dos jogos; competitivo 2 que preside os jogos (deuses) 3 agitado; inquieto. 〈ἀγών〉", "próprio dos jogos; competitivo; inquieto"],
        [433, "ἀγώνισις, εως (ἡ)", "luta; combate. 〈ἀγωνίζομαι〉", "luta; combate"],
        [434, "ἀγώνισμα, ατος (τό)", "1 exercício; luta 2 êxito 3 façanha; proeza 3 exercício de manejo; exercício literário 4 Dram. declamação; representação 5 objeto de contenda. 〈ἀγωνίζομαι〉", "exercício; luta; façanha; representação"],
        [435, "ἀγωνισμός, οῦ (ὁ)", "luta. 〈ἀγωνίζομαι〉", "luta"],
        [436, "ἀγωνιστέον", "adj. verb. de ἀγωνίζομαι.", "adjetivo verbal de ἀγωνίζομαι"],
        [437, "ἀγωνιστής, οῦ (ὁ)", "1 competidor; atleta 2 advogado; orador 3 ator 4 mestre em uma arte ou ciência. 〈ἀγωνίζομαι〉", "competidor; atleta; advogado; ator"],
        [438, "ἀγωνιστικός, ή, όν", "1 relativo a contenda; agonístico 2 próprio para discussão (estilo) 3 surpreendente; excelente; eficaz 4 amante da discussão ♦ ἡ ἀγωνιστική, τὸ ἀγωνιστικόν 5 a arte de lutar. 〈ἀγωνίζομαι〉", "agonístico; eficaz; arte de lutar"],
        [439, "ἀγωνιστικῶς", "adv. com disposição para a luta; com obstinação; vigorosamente.", "vigorosamente; com obstinação"],
        [440, "ἀγωνοθεσία, ας (ἡ)", "função de agonóteta. 〈ἀγωνοθέτης〉", "função de agonóteta"]
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
   LOTE 23 — registros 441–460
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    const entries = [
        [441, "ἀγωνοθετέω-ῶ", "1 exercer a função de agonóteta 2 exercer a função de árbitro 3 organizar (sedição) 4 incitar à luta. 〈ἀγωνοθέτης〉", "exercer função de agonóteta; arbitrar; incitar"],
        [442, "ἀγωνοθέτης, ου (ὁ)", "1 agonóteta, organizador, presidente ou árbitro dos jogos públicos. 〈ἀγών, τίθημι〉", "agonóteta; organizador; árbitro dos jogos"],
        [443, "ἀδαγμός, οῦ (ὁ)", "mordida; laceração. 〈ἀ intens., δάκνω〉", "mordida; laceração"],
        [444, "ἀδαημονίη, ης (ἡ)", "ép. ignorância; inabilidade, inexperiência. 〈ἀδαήμων〉", "ignorância; inexperiência"],
        [445, "ἀδαημοσύνη, ης (ἡ)", "ἀδαημονίη.", "ἀδαημονίη"],
        [446, "ἀδαήμων, ων, ον", "gen. ονος ignorante; inepto; inábil em, gen. 〈ἀ-, δαήμων〉", "ignorante; inábil"],
        [447, "ἀδαής, ής, ές", "ignorante; inábil em, gen. ou inf. 〈ἀ-, δαῆναι〉", "ignorante; inábil"],
        [448, "ἄδαιτος, ος, ον", "sem banquete ou que não é para banquete (de sacrifício). 〈ἀ-, δαίνυμαι〉", "sem banquete"],
        [449, "ἄδακρυς, υς, υ", "gen. υος 1 sem lágrimas; que não chora 2 que não faz chorar. 〈ἀ-, δάκρυ〉", "sem lágrimas"],
        [450, "ἀδακρυτί", "adv. sem lágrimas. 〈ἀδάκρυτος〉", "sem lágrimas"],
        [451, "ἀδάκρυτος, ος, ον", "1 que não tem lágrimas; que não chora 2 não chorado; que não vale uma lágrima. 〈ἀ-, δακρύω〉", "não chorado; sem lágrimas"],
        [452, "ἀδαμάντινος, ος, ον", "de aço; resistente como o aço. 〈ἀδάμας〉", "de aço; resistente"],
        [453, "ἀδαμαντόδετος, ος, ον", "de elos de aço. 〈ἀδάμας, δέω1〉", "de elos de aço"],
        [454, "ἀδάμας, αντος (ὁ)", "1 metal inalterável, duro; o aço 2 diamante ♦ adj. 3 inflexível; inquebrável. 〈ἀ-, δαμάω〉", "aço; diamante; inflexível"],
        [455, "ἀδάμαστος, ος, ον", "1 indomável; inflexível 2 não domado; indômito. 〈ἀ-, δαμάζω〉", "indomável; inflexível"],
        [456, "ἀδάματος, ος, ον", "1 não domado; indômito 2 intacto; virgem. 〈ἀ-, δαμάω〉", "indômito; intacto; virgem"],
        [457, "ἀδάπανος, ος, ον", "1 que nada custa; não dispendioso 2 que não gasta ♦ ἀδάπανον adv. 3 bíbl. de graça; gratuitamente. 〈ἀ-, δαπάνη〉", "gratuito; não dispendioso"],
        [458, "ἄδαστος, ος, ον", "não dividido; indiviso. 〈ἀ-, δαίω1〉", "não dividido; indiviso"],
        [459, "ἀδδεής", "ἀδεής.", "ἀδεής"],
        [460, "ἀδδηκότες", "ἀδηκότες.", "ἀδηκότες"]
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
   LOTE 24 — registros 461–480
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "ac. sing.", type: "abbr", text: "acusativo singular" },
        { key: "ac. pl.", type: "abbr", text: "acusativo plural" },
        { key: "pl. n.", type: "abbr", text: "plural neutro" },
        { key: "fem. sing.", type: "abbr", text: "feminino singular" }
    );

    const entries = [
        [461, "ἄδδην", "ἄδην.", "ἄδην"],
        [462, "ἀδδήσειε", "opt. aor. ép. de ἀδέω.", "optativo aoristo épico de ἀδέω"],
        [463, "ᾄδε", "2ª sing. imper. pres. e 3ª sing. impf. poét. de ᾄδω.", "formas de ᾄδω"],
        [464, "ἅδε", "3ª sing. aor.2 de ἁνδάνω.", "aoristo de ἁνδάνω"],
        [465, "ἅδε", "fem. dór. de ὅδε.", "forma feminina dórica de ὅδε"],
        [466, "ἀδεᾶ", "ac. sing. ou nom. e ac. pl. n. de ἀδεής.", "formas de ἀδεής"],
        [467, "ἁδέα", "dór. = ἡδεῖα (fem. sing.) ou ἡδέα (n. pl.), de ἡδύς.", "formas dóricas de ἡδύς"],
        [468, "ἀδεής1, ής, ές", "1 sem medo; sem inquietação; audacioso 2 que não causa medo ♦ τὸ ἀδηές 3 segurança. 〈ἀ-, δέος〉", "sem medo; audacioso; segurança"],
        [469, "ἀδεής2, ής, ές", "que não tem necessidade de, gen. 〈ἀ-, δεῖ〉", "sem necessidade de"],
        [470, "ἄδεια, ας (ἡ)", "1 ausência de medo; certeza de vida sã e salva: ἐν πάσῃ ἀδεία com toda a segurança 2 impunidade; anistia: ἄδειαν διδόναι, παρέχειν ou ποιεῖν conceder a impunidade, ἄδειαν λαμβάνειν ou εὑρίσκειν conseguir a impunidade, ἄδειαν ποιεῖσθαι conseguir impunidade para si próprio 3 permissão; autorização; salvo-conduto: ἄδειαν διδόναι ou λαμβάνειν τοῦ, inf. conceder ou obter licença para. 〈ἀδεής1〉", "segurança; impunidade; permissão"],
        [471, "ἀδείη", "jôn. = ἄδεια.", "forma jônica de ἄδεια"],
        [472, "ἀδείης", "ép. = ἀδεής.", "forma épica de ἀδεής"],
        [473, "ἀδείμαντος, ος, ον", "poét. 1 que não se assusta; sem medo; destemido 2 onde não há nada a temer; tranqüilo. 〈ἀ-, δειμαίνω〉", "destemido; tranquilo"],
        [474, "ἀδειμάντως", "adv. sem medo; intrepidamente.", "sem medo; intrepidamente"],
        [475, "ἁδεῖν", "inf. aor.2 de ἁνδάνω.", "infinitivo aoristo de ἁνδάνω"],
        [476, "ἄδειπνος, ος, ον", "que não comeu. 〈ἀ-, δεῖπνον〉", "que não comeu"],
        [477, "ἀδέκαστος, ος, ον", "não corrompido; incorruptível; íntegro. 〈ἀ-, δεκάζω〉", "incorruptível; íntegro"],
        [478, "ἀδεκάστως", "adv. com integridade; com retidão; imparcialmente.", "com integridade; imparcialmente"],
        [479, "ἀδεκάτευτος, ος, ον", "isento do dízimo. 〈ἀ-, δεκατεύω〉", "isento do dízimo"],
        [480, "ἄδεκτος, ος, ον", "1 que não admite; que não aceita, gen. 2 inaceitável; incompreensível. 〈ἀ-, δέχομαι〉", "inaceitável; incompreensível"]
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
   LOTE 25 — registros 481–500
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "ref.", type: "abbr", text: "referência" }
    );

    const entries = [
        [481, "ἀδελφεά", "dór., ἀδελφεή jôn. = ἀδελφή.", "formas dialetais de ἀδελφή"],
        [482, "ἀδελφειός", "ép. = ἀδελφός.", "forma épica de ἀδελφός"],
        [483, "ἀδελφεοκτόνος, ος, ον", "jôn. = ἀδελφοκτόνος.", "forma jônica de ἀδελφοκτόνος"],
        [484, "ἀδελφεός", "jôn. e poét. = ἀδελφός.", "forma jônica e poética de ἀδελφός"],
        [485, "ἀδελφή, ῆς (ἡ)", "cf. ἀδελφός.", "cf. ἀδελφός"],
        [486, "ἀδελφιδεός-οῦς, εοῦ-οῦ (ὁ)", "sobrinho. 〈ἀδελφός〉", "sobrinho"],
        [487, "ἀδελφιδῆ, ῆς (ἡ)", "jôn. e át. sobrinha. 〈ἀδελφός〉", "sobrinha"],
        [488, "ἀδελφίδιον, ου (τό)", "irmãozinho. 〈ἀδελφός〉", "irmãozinho"],
        [489, "ἀδελφιδοῦς", "ἀδελφιδεός.", "ἀδελφιδεός"],
        [490, "ἀδελφίζω", "jôn. e át. 1 tratar como irmão; chamar de irmão ♦ méd. 2 ser inteiramente semelhante a, dat. 〈ἀδελφός〉", "tratar como irmão; ser semelhante"],
        [491, "ἀδελφικός, ή, όν", "fraterno. 〈ἀδελφός〉", "fraterno"],
        [492, "ἀδελφοκτόνος, ος, ον", "fratricida. 〈ἀδελφός, κτείνω〉", "fratricida"],
        [493, "ἀδελφός, ή, όν", "1 fraterno 2 parente chegado 3 análogo; semelhante a alguém ou algo, gen. ou dat. ♦ ὁ ἀδελφός 4 irmão; no pl. irmãos; irmão e irmã 5 bíbl. irmão, em ref. a um parente ou a pessoa da mesma comunidade social ou religiosa ♦ ἡ ἀδελφή 6 irmã 7 bíbl. parenta em geral; esposa (tratamento afetuoso) 8 bíbl. irmã (em comunidade religiosa) ♦ τὰ ἀδελφά 9 que forma par (olhos, mãos, pés); duplo. 〈ἀ- intens., δελφύς〉", "fraterno; irmão; irmã; semelhante"],
        [494, "ἀδελφότης, ητος (ἡ)", "bíbl. 1 afeto fraterno 2 fraternidade 3 comunidade cristã. 〈ἀδελφός〉", "afeto fraterno; fraternidade; comunidade cristã"],
        [495, "ἀδέξιος, ος, ον", "desajeitado; inábil. 〈ἀ-, δεξιός〉", "desajeitado; inábil"],
        [496, "ἄδερκτος, ος, ον", "cego. 〈ἀ-, δέρκομαι〉", "cego"],
        [497, "ἀδέρκτως", "adv. sem ver.", "sem ver"],
        [498, "ἄδεσμος, ος, ον", "1 não amarrado; solto; liberto 2 não fechado. 〈ἀ-, δεσμός〉", "solto; liberto; não fechado"],
        [499, "ἀδέσποτος, ος, ον", "1 sem senhor; sem dono; livre 2 que não se pode dominar; incontrolável 3 de autoria desconhecida; anônimo. 〈ἀ-, δεσπότης〉", "sem senhor; anônimo; incontrolável"],
        [500, "ἀδευκής, ής, ές", "1 amargo; triste; cruel 2 imprevisto 3 inesperado. 〈ἀ-, δεῦκος〉", "amargo; triste; cruel; inesperado"]
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
   LOTE 26 — registros 501–520
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "contr.", type: "abbr", text: "forma contraída" },
        { key: "constr. impes.", type: "abbr", text: "construção impessoal" },
        { key: "constr. pes.", type: "abbr", text: "construção pessoal" },
        { key: "Isócrates", type: "biblio", text: "Isócrates — orador e professor ateniense dos séculos V–IV a.C., figura central da tradição retórica grega." }
    );

    const entries = [
        [501, "ἀδέψητος, ος, ον", "ép. e poét. não curtido (couro). 〈ἀ-, δέψω〉", "não curtido; forma épica e poética"],
        [502, "ἀδέω", "estar farto de; estar cansado de; estar abatido por, dat.", "estar farto; cansado; abatido"],
        [503, "ἀδεῶς", "adv. 1 sem medo; sem escrúpulo; livremente 2 impunemente; facilmente. 〈ἀδεής〉", "sem medo; impunemente"],
        [504, "ἀδήϊος", "contr. ἀδῇος, ος, ον poét. 1 não devastado; ao abrigo de devastações 2 que não devasta; não hostil.", "forma contraída; não devastado; não hostil"],
        [505, "ἅδηκα", "perf. de ἁνδάνω.", "perfeito de ἁνδάνω"],
        [506, "ἀδηκότες", "part. perf. pl. de ἀδέω.", "particípio perfeito plural de ἀδέω"],
        [507, "ἄδηκτος, ος, ον", "poét. e tard. 1 não mordido; não picado (por animal) 2 não mordido pelo remorso; tranqüilo; sereno 3 que não morde; que não punge. 〈ἀ-, δάκνω〉", "não mordido; sereno; não pungente"],
        [508, "ἀδήκτως", "adv. 1 sem ser molestado 2 sem remorso.", "sem ser molestado; sem remorso"],
        [509, "ἀδηλέω-ῶ", "1 estar incerto de, gen. ♦ méd. 2 ser obscuro ♦ pas. 3 (coisa) não se mostrar; não aparecer. 〈ἄδηλος〉", "estar incerto; ser obscuro; não aparecer"],
        [510, "ἄδηλος, ος, ον", "poét. 1 que não se deixa ver; desconhecido; obscuro 2 de que não se sabe nada; incompreensível; impenetrável; constr. impes. ἄδηλον [ἐστιν] ὅτι ou εἰ não se pode saber que ou se; constr. pes. οὐκ ἄδηλος ἦν ὁ κόσμος λυθησόμενος Isócrates era visível que a ordem ia ser subvertida. 〈ἀ-, δῆλος〉", "desconhecido; obscuro; incompreensível"],
        [511, "ἀδηλότης, ητος (ἡ)", "1 incerteza 2 insegurança. 〈ἄδηλος〉", "incerteza; insegurança"],
        [512, "ἀδήλως", "adv. 1 secretamente 2 sem rumo fixo; sem meta.", "secretamente; sem rumo"],
        [513, "ἀδημονέω-ῶ", "(só pres e inf. aor.) estar inquieto; atormentar-se; angustiar-se por algo, dat., ὑπό e gen., ἐπί e dat.; com ac. de rel. ἀδημονῆσαι τὰς ψυχάς Xenofonte ter a alma inquieta. 〈ἀδήμων〉", "estar inquieto; angustiar-se"],
        [514, "ἀδημονία, ας (ἡ)", "inquietude; angústia. 〈ἀδήμων〉", "inquietude; angústia"],
        [515, "ἀδήμων, ων, ον", "gen. ονος inquieto; perturbado. 〈ἀδέω〉", "inquieto; perturbado"],
        [516, "ἅδην, ἄδην", "e ἄδδην adv. à saciedade; abundantemente; completamente: ἔδεμαι ἄ. Homero comer à saciedade, εἷχον ἄ. κτείνοντες Heródoto estavam saciados de matar, οἱ λόγοι ἅδην ἔχουσιν ἡμῖν Platão esses discursos nos são suficientes.", "à saciedade; abundantemente; completamente"],
        [517, "ἀδῇος", "cf. ἀδήϊος.", "cf. ἀδήϊος"],
        [518, "ἀδήριτος, ος, ον", "poét. tard. 1 sem luta; sem contestação 2 invencível; inexpugnável. 〈ἀ-, δηρίω〉", "sem luta; invencível"],
        [519, "ᾄδης", "Ἅιδης.", "Ἅιδης"],
        [520, "ἁδήσω", "cf. ἁνδάνω.", "cf. ἁνδάνω"]
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

/* LOTE 27 — registros 521–540 */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [521, "ἀδηφαγέω-ῶ", "comer com voracidade; ser glutão. 〈ἀδηφάγος〉", "comer vorazmente; ser glutão"],
        [522, "ἀδηφάγος, ος, ον", "1 que devora; voraz 2 que consome dinheiro; dispendioso. 〈ἄδην, φαγεῖν〉", "voraz; dispendioso"],
        [523, "ἀδῄωτος, ος, ον", "não devastado; ileso. 〈ἀ-, δῃόω〉", "não devastado; ileso"],
        [524, "ἀδιάβατος, ος, ον", "intransponível; impenetrável. 〈ἀ-, διαβαίνω〉", "intransponível; impenetrável"],
        [525, "ἀδιάβλητος, ος, ον", "1 que não dá ouvidos a calúnia 2 incapaz de caluniar 3 não atingido por delação; irrepreensível; inatacável. 〈ἀ-, διαβάλλω〉", "irrepreensível; inatacável"],
        [526, "ἀδιακόντιστος, ος, ον", "duv. invulnerável aos dardos. 〈ἀ-, διακοντίζω〉", "invulnerável aos dardos"],
        [527, "ἀδιάκριτος, ος, ον", "1 indiscernível; indistinto; confuso 2 incompreensível; ininteligível 3 indeciso 4 que não faz distinção; sem preconceitos; imparcial. 〈ἀ-, διακρίνω〉", "indiscernível; confuso; imparcial"],
        [528, "ἀδιάλειπτος, ος, ον", "bíbl. 1 incessante ♦ ἀδιάλειπτον adv. 2 incessantemente. 〈ἀ-, διαλείπω〉", "incessante; incessantemente"],
        [529, "ἀδιαλείπτως", "adv. bíbl. constantemente; sempre.", "constantemente; sempre"],
        [530, "ἀδιάλλακτος, ος, ον", "irreconciliável. 〈ἀ-, διαλλάσσω〉", "irreconciliável"],
        [531, "ἀδιάλυτος, ος, ον", "indissolúvel; indestrutível. 〈ἀ-, διαλύω〉", "indissolúvel; indestrutível"],
        [532, "ἀδίαντος, ος", "e poét. η, ον 1 poét. não molhado; não suado ♦ ἡ ἀδίαντος e τὸ ἀδίαντον 2 adianto, planta. 〈ἀ-, διαίνω〉", "não molhado; adianto, planta"],
        [533, "ἀδιάρθρωτος, ος, ον", "inarticulado; confuso; indistinto. 〈ἀ-, διαρθρόω〉", "inarticulado; confuso"],
        [534, "ἀδιάσπαστος, ος, ον", "não separado; não interrompido; contínuo. 〈ἀ-, διασπάω〉", "não separado; contínuo"],
        [535, "ἀδιάστατος, ος, ον", "1 sem intervalo; contínuo 2 sem extensão; sem dimensão 3 crist. indivisível; indiviso. 〈ἀ-, διίστημι〉", "sem intervalo; indivisível"],
        [536, "ἀδιάστροφος, ος, ον", "1 não desviado; não torcido; reto 2 que não se pode desviar; rígido; inexorável. 〈ἀ-, διαστρέφω〉", "reto; rígido; inexorável"],
        [537, "ἀδιάφθαρτος, ος, ον", "não corrompido; incorruptível. 〈ἀ-, διαφθείρω〉", "incorruptível"],
        [538, "ἀδιαφθορία, ας (ἡ)", "bíbl. ausência de mácula; integridade. 〈ἀδιάφθορος〉", "integridade; ausência de mácula"],
        [539, "ἀδιάφθορος, ος, ον", "1 não corrompido; não maculado; casto 2 incorruptível; imperecível. 〈ἀ-, διαφθείρω〉", "incorruptível; imperecível"],
        [540, "ἀδιαφθόρως", "adv. com sentimentos puros; com inocência; castamente.", "com sentimentos puros; castamente"]
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
   LOTE 28 — registros 541–560
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "Métr.", type: "abbr", text: "métrica" },
        { key: "Lísias", type: "biblio", text: "Lísias — logógrafo e orador ateniense dos séculos V–IV a.C., tradicionalmente incluído entre os dez oradores áticos." },
        { key: "Demóstenes", type: "biblio", text: "Demóstenes — orador ateniense do século IV a.C., tradicionalmente incluído entre os dez oradores áticos." }
    );

    const entries = [
        [541, "ἀδιαφορία, ας (ἡ)", "indiferença; negligência. 〈ἀδιάφορος〉", "indiferença; negligência"],
        [542, "ἀδιάφορος, ος, ον", "1 não diferente; igual 2 que não discrimina 3 indiferente; não essencial; acessório 4 Métr. ancípite (sílaba) ♦ τὰ ἀδιάφορα 5 coisas nem boas nem más; objetos individuais, que não têm diferença lógica. 〈ἀ-, διαφέρω〉", "igual; indiferente; não essencial"],
        [543, "ἀδίδακτος, ος, ον", "1 não instruído; ignorante de, gen. 2 inexperiente; inábil 3 não ensaiado (coro) 3 não representado (drama) 4 que não se ensina; que se sabe naturalmente. 〈ἀ-, διδάσκω〉", "não instruído; inexperiente; não ensaiado"],
        [544, "ἀδιεξέργαστος, ος, ον", "1 não acabado; não executado; não elaborado 2 que não se consegue deslindar; inextricável. 〈ἀ-, διεξεργάζομαι〉", "não acabado; inextricável"],
        [545, "ἀδιέξοδος, ος, ον", "sem saída; de onde não se pode sair.", "sem saída"],
        [546, "ἀδιέργαστος, ος, ον", "ἀδιεξέργαστος.", "ἀδιεξέργαστος"],
        [547, "ἀδιερεύνητος, ος, ον", "1 que não se pode examinar; impenetrável; inescrutável 2 não examinado; não pesquisado. 〈ἀ-, διερευνάω〉", "impenetrável; inescrutável; não examinado"],
        [548, "ἀδιήγητος, ος, ον", "1 inexprimível; indescritível 2 tard. não contado. 〈ἀ-, διηγέομαι〉", "inexprimível; indescritível; não contado"],
        [549, "ἀδίκαστος, ος, ον", "não julgado; não decidido; não condenado. 〈ἀ-, δικάζω〉", "não julgado; não decidido; não condenado"],
        [550, "ἀδικάστως", "adv. sem julgamento.", "sem julgamento"],
        [551, "ἀδικέω-ῶ", "(impf. ἠδίκουν, fut. ἀδικήσω, aor. ἠδίκησα, perf. ἠδίκηκα; pas. fut. ἀδικήσομαι, tard. ἀδικηθήσομαι) 1 agir contra a norma; ser injusto: τὸ ἀδικεῖν τοῦ ἀδικεῖσθαι κάκιον Platão [é] pior cometer uma injustiça do que sofrê-la, ἀδικεῖν πολλά cometer muitas ou grandes injustiças, causar muitos danos 2 cometer injustiça contra alguém, ac., em algo, ac., εἰς ou περί e ac., περί e gen.: τοὺς ξένους οὐδεὶς ἔτι ἀδικεῖ Xenofonte ninguém mais faz mal aos estrangeiros, τί ἀδικοῦμεν τοῦτό σε; Aristófanes que injustiça te fazemos nisso? 3 danificar; estragar; lesar ♦ pas. 4 sofrer uma injustiça, um dano, um prejuízo: οἱ ὑπὸ τούτων ἠδικημένοι Lísias os injustiçados por eles. 〈ἄδικος〉", "agir injustamente; lesar; sofrer injustiça"],
        [552, "ἀδίκημα, ατος (τό)", "1 injustiça; prejuízo; agravo: ἐν ἀδικήματι θέσθαι τι Tucídides ou θεῖναί τι Demóstenes considerar alguma coisa como crime 2 o que é fruto de injustiça 3 duv. erro de julgamento; engano. 〈ἀδικέω〉", "injustiça; prejuízo; agravo"],
        [553, "ἀδικητέον", "adj. verb. de ἀδικέω.", "adjetivo verbal de ἀδικέω"],
        [554, "ἀδικητικός, ή, όν", "inclinado à injustiça ou ao mal. 〈ἀδικέω〉", "inclinado à injustiça ou ao mal"],
        [555, "ἀδικία, ας,", "jôn. ἀδικίη, ης (ἡ) 1 injustiça praticada contra algo, gen., ou alguém, περί e ac.; ἀδικίης ἄρχειν Heródoto ser o agressor, o ofensor 2 injustiça sofrida; dano; ofensa. 〈ἄδικος〉", "injustiça; dano; ofensa"],
        [556, "ἀδικίου (δίκη) (ἡ)", "ação judiciária por dano causado a alguém. 〈ἄδικος〉", "ação judiciária por dano"],
        [557, "ἀδικοπραγέω-ῶ", "cometer uma injustiça; agir injustamente. 〈ἄδικος, πράσσω〉", "cometer injustiça; agir injustamente"],
        [558, "ἄδικος, ος, ον", "1 injusto; iníquo; ilegal 2 indócil; indomável 3 feito contra a regra, contra a lei; injusto: ἄδικος πλοῦτος Isócrates riqueza mal adquirida ♦ ὁ ἄδικος 4 homem injusto, ímpio ♦ τὸ ἄδικον, τὰ ἄδικα 5 injustiça. 〈ἀ-, δίκη〉", "injusto; iníquo; ilegal; injustiça"],
        [559, "ἀδίκως", "adv. ilegalmente; injustamente.", "ilegalmente; injustamente"],
        [560, "ἁδινός", "e ἀδινός, ή, ον poét. 1 que se mantém vigoroso por muito tempo: ἁδινῶν Σειρήνων Homero sereias de canto forte e contínuo, ἀ. γόος Homero gemido profundo e contínuo, ἁ. κῆρ Homero coração firme 2 que se agrupa; cerrado; compacto: ἀδινὰ μῆλα Homero carneiros em bando compacto ♦ ἁδινόν, ἁδινά adv. 3 = ἁδινῶς. 〈ἄδος〉", "vigoroso; cerrado; compacto"]
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
   LOTE 29 — registros 561–580
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    const entries = [
        [561, "ἁδινῶς", "e ἀδινῶς adv. com vigor e sem interrupção.", "com vigor e sem interrupção"],
        [562, "ἀδιοίκητος, ος, ον", "1 em desordem; não organizado 2 não administrado 3 tard. não digerido. 〈ἀ-, διοικέω〉", "em desordem; não organizado; não digerido"],
        [563, "ἅδιον", "comp. n. dór. de ἡδύς.", "comparativo neutro dórico de ἡδύς"],
        [564, "ἀδιόρθωτος, ος, ον", "1 que não pode ser ou que não foi endireitado; incorrigível; irremediável ♦ ἀδιόρθωτα adv. 2 irremediavelmente. 〈ἀ-, διορθόω〉", "incorrigível; irremediável"],
        [565, "ἀδμής, ῆτος", "(masc., fem.) poét. 1 não domado; não submetido ao jugo; não submetido a, gen. 2 não casada, virgem (mulher). 〈ἀ-, δάμνημι〉", "não domado; virgem"],
        [566, "ἄδμητος, η, ον", "1 não domado 2 virgem. 〈ἀ-, δάμνημι〉", "não domado; virgem"],
        [567, "ᾁδοβάτης, ου (ὁ)", "que anda no Hades; estabelecido no Hades. 〈Ἅιδης, βαίνω〉", "que anda ou está estabelecido no Hades"],
        [568, "ἀδόκητος, ος, ον", "1 imprevisto; inesperado; ἀπό ou ἐκ τοῦ ἀδοκήτου de improviso 2 obscuro; sem glória 3 que não se espera; impossível ♦ ἀδόκητα adv. poét. 4 de improviso; inesperadamente. 〈ἀ-, δοκέω〉", "imprevisto; inesperado; obscuro"],
        [569, "ἀδοκήτως", "adv. de repente; inesperadamente.", "de repente; inesperadamente"],
        [570, "ἀδοκίμαστος, ος, ον", "não submetido à prova da δοκιμασία. 〈ἀ-, δοκιμάζω〉", "não submetido à prova da δοκιμασία"],
        [571, "ἀδόκιμος, ος, ον", "1 de má qualidade; falso; não genuíno 2 sem valor; ordinário 3 vil; baixo; desprezível 4 reprovado; desqualificado. 〈ἀ-, δόκιμος〉", "de má qualidade; sem valor; reprovado"],
        [572, "ἀδολεσχέω-ῶ", "1 tagarelar 2 tard. meditar. 〈ἀδολέσχης〉", "tagarelar; meditar"],
        [573, "ἀδολέσχης, ου (ὁ)", "1 tagarela 2 argumentador sutil. 〈ἄδος, λέσχη〉", "tagarela; argumentador sutil"],
        [574, "ἀδολεσχία, ας (ἡ)", "1 tagarelice 2 finura; agudeza; sutileza 3 bíbl. meditação. 〈ἀδόλεσχος〉", "tagarelice; sutileza; meditação"],
        [575, "ἀδόλεσχος, ος, ον", "ἀδολέσχης.", "ἀδολέσχης"],
        [576, "ἄδολος, ος, ον", "1 sem ardil; sem dolo; honesto 2 sem embuste; não adulterado; puro. 〈ἀ-, δόλος〉", "sem dolo; honesto; puro"],
        [577, "ἀδόλως", "adv. lealmente, de maneira não dolosa.", "lealmente; sem dolo"],
        [578, "ἅδον", "aor.2 ép. de ἁνδάνω.", "segundo aoristo épico de ἁνδάνω"],
        [579, "ἁδονά", "dór. = ἡδονή.", "forma dórica de ἡδονή"],
        [580, "ἀδόξαστος, ος, ον", "1 não conjetural; certo 2 inesperado 3 tard. que não faz conjeturas. 〈ἀ-, δοξάζω〉", "não conjetural; certo; inesperado"]
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
   LOTE 30 — registros 581–600
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    const entries = [
        [581, "ἀδοξέω-ῶ", "(fut. ἀδοξήσω, aor. ἠδόξησα, perf. desus.) 1 não levar em consideração, desprezar, ac., εἰ e ind., inf. ♦ at. e pas. 2 ter má reputação; não ser estimado: οἱ μὴ εἰδότες ἃ ποιοῦσιν ἀδοξοῦσι Xenofonte os que não sabem o que fazem têm má reputação, αἱ βαναυσικαὶ τέχναι ἀδοξοῦνται Xenofonte as artes manuais não gozam de grande reputação. 〈ἄδοξος〉", "desprezar; ter má reputação"],
        [582, "ἀδόξημα, ατος (τό)", "ação desonrosa; desonra; infâmia. 〈ἀδοξέω〉", "ação desonrosa; desonra; infâmia"],
        [583, "ἀδοξία, ας (ἡ)", "1 má reputação; descrédito 2 anonimato 3 tard. desprezo; má opinião. 〈ἄδοξος〉", "má reputação; descrédito; anonimato"],
        [584, "ἄδοξος, ος, ον", "1 sem glória; desconhecido 2 de má reputação 3 inesperado; improvável. 〈ἀ-, δόξα〉", "sem glória; desconhecido; de má reputação"],
        [585, "ἀδόξως", "adv. sem glória, sem honra.", "sem glória; sem honra"],
        [586, "ἀδορυφόρητος, ος, ον", "sem guarda-costas; sem escolta. 〈ἀ-, δορυφορέω〉", "sem guarda-costas; sem escolta"],
        [587, "ἅδος", "só nom. (τό ou ὁ) saciedade, fastio: ἅδος τέ μιν ἵκετο θυμόν Homero o cansaço entra em seu coração.", "saciedade; fastio"],
        [588, "ἄδουλος, ος, ον", "poét. e na prosa tard. que não tem escravo. 〈ἀ-, δοῦλος〉", "que não tem escravo"],
        [589, "ἀδούλωτος, ος, ον", "não escravizado; livre. 〈ἀ-, δουλόω〉", "não escravizado; livre"],
        [590, "ἀδρανής, ής, ές", "fraco; inativo; impotente. 〈ἀ-, δραίνω〉", "fraco; inativo; impotente"],
        [591, "Ἀδράστεια, ας (ἡ)", "1 Adrasteia, outro nome de Nêmesis 2 Adrasteia, cidade da Mísia 3 adrasteia, planta. 〈ἄδραστος〉", "Adrasteia; cidade da Mísia; planta"],
        [592, "ἄδραστος, ος, ον", "1 que não foge 2 que não se move. 〈ἀ-, διδράσκω〉", "que não foge; que não se move"],
        [593, "ἄδρεπτος, ος, ον", "que não se pode colher. 〈ἀ-, δρέπω〉", "que não se pode colher"],
        [594, "Ἀδρήστεια", "jôn. = Ἀδράστεια.", "forma jônica de Ἀδράστεια"],
        [595, "Ἀδρηστίνη, ης (ἡ)", "filha de Adrasto. 〈Ἄδραστος〉", "filha de Adrasto"],
        [596, "ἄδρηστος", "jôn. = ἄδραστος.", "forma jônica de ἄδραστος"],
        [597, "Ἀδριανός, ός, όν", "do Adriático. 〈Ἀδρίας〉", "do Adriático"],
        [598, "Ἀδρίας, ου (ὁ)", "o mar Adriático.", "mar Adriático"],
        [599, "Ἀδριατικός, ή, όν", "do Adriático. 〈Ἀδρίας〉", "do Adriático"],
        [600, "Ἀδριηνός", "jôn. = Ἀδριανός.", "forma jônica de Ἀδριανός"]
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
   LOTE 31 — registros 601–620
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;

    source.bibliographicTerms.push(
        { key: "impes.", type: "abbr", text: "impessoal" }
    );

    const entries = [
        [601, "Ἀδρίης", "jôn. = Ἀδρίας.", "forma jônica de Ἀδρίας"],
        [602, "ἁδρός, ά, όν", "1 bem desenvolvido; formado; robusto (pessoa); gordo (animal); maduro, viçoso (planta, fruto) 2 de posição elevada (pessoa) 3 espesso; maciço; abundante 4 grandioso; vigoroso (estilo). 〈ἅδην〉", "robusto; maduro; espesso; grandioso"],
        [603, "ἁδροτής, ῆτος (ἡ)", "1 força; vigor; maturidade 2 bíbl. abundância. 〈ἁδρός〉", "força; vigor; maturidade; abundância"],
        [604, "ἁδρύνω", "(aor. pas. ἡδρύνθην) 1 fazer amadurecer; fazer crescer ♦ pas. 2 crescer; amadurecer; desenvolver-se. 〈ἁδρός〉", "fazer amadurecer; crescer; desenvolver-se"],
        [605, "ἀδυναμία, ας (ἡ)", "1 fraqueza; impotência para, gen. 2 falta de recursos; pobreza. 〈ἀδύναμος〉", "fraqueza; impotência; pobreza"],
        [606, "ἀδύναμος, ος, ον", "sem força; fraco. 〈ἀ-, δύναμις〉", "sem força; fraco"],
        [607, "ἀδυνασία, ας (ἡ)", "ἀδυναμία. 〈ἀδύνατος〉", "ἀδυναμία"],
        [608, "ἀδυνατέω-ῶ", "1 não ter força; ser fraco; ser incapaz de, inf. 2 ser impossível. 〈ἀδύνατος〉", "ser incapaz; ser impossível"],
        [609, "ἀδύνατος, ος, ον", "1 impotente; incapaz; fraco: ἀδύνατος χρήμασι Tucídides pobre 2 fora de uso; inutilizado 3 inválido, com direito a pensão de invalidez 4 incapaz de, inf., ac. de rel., εἰς ou κατά e ac. 5 impossível: ἀδύνατόν ἐστι, ἀδύνατά ἐστι é impossível, inf. ♦ τὸ ἀδύνατον 6 o impossível. 〈ἀ,- δύναμαι〉", "impotente; incapaz; impossível"],
        [610, "ἀδυνάτως", "adv. sem força; debilmente: ἀδυνάτως ἔχειν estar fraco, estar indisposto; com inf. ser incapaz de; impes. ἀ. ἔχει é impossível.", "sem força; ser incapaz; ser impossível"],
        [611, "ἁδύπνοος", "dór. = ἡδύπνοος.", "forma dórica de ἡδύπνοος"],
        [612, "ἁδύς", "dór. = ἡδύς.", "forma dórica de ἡδύς"],
        [613, "ἄδυτος, ος, ον", "1 cujo acesso é vedado; impenetrável; inacessível. ♦ τὸ ἄδυτον, τὰ ἄδυτα 2 santuário, santuários, ádito. 〈ἀ-, δύω〉", "inacessível; santuário; ádito"],
        [614, "ἁδύφωνος, ος, ον", "dór. = ἡδύφωνος.", "forma dórica de ἡδύφωνος"],
        [615, "ᾄδω,", "contr. át. de ἀείδω (impf. ῇδον, fut. ᾄσομαι, rar. ᾄσω; aor. ᾖσα; perf. desus.; pas. aor. ᾔσθην, perf. tard. ᾖσμαι) 1 cantar 2 celebrar 3 cantar repetindo; cantar refrão 4 fazer ressoar 5 silvar ♦ pas. 6 ser objeto de cantos 7 (lugar) encher-se de cantos.", "cantar; celebrar; ressoar; silvar"],
        [616, "Ἀδωνιάζω", "tard., (só part. pres. αἱ Ἀδωνιάζουσαι) celebrar as festas de Adônis. 〈Ἄδωνις〉", "celebrar as festas de Adônis"],
        [617, "Ἀδωνιασμός, οῦ (ὁ)", "lamentação por Adônis. 〈Ἀδωνιάζω〉", "lamentação por Adônis"],
        [618, "Ἀδώνιος, ος, ον", "1 de Adônis ♦ τὰ Ἀδώνια 2 festas de Adônis. 〈Ἄδωνις〉", "de Adônis; festas de Adônis"],
        [619, "Ἄδωνις, ιδος (ὁ)", "1 Adônis, deus sírio e fenício cultuado na Grécia 2 moço encantador.", "Adônis; moço encantador"],
        [620, "ἀδώρητος, ος, ον", "poét. que não aceita ou não recebe presentes. 〈ἀ-, δωρέομαι〉", "que não aceita ou não recebe presentes"]
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
   LOTE 32 — registros 621–640
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [621,"ἀδωροδόκητος, ος, ον","poét. incorruptível; insubornável. 〈ἀ-, δωροδοκέω〉","incorruptível; insubornável"],
        [622,"ἀδωροδοκήτως","adv. de modo incorruptível; sem corrupção.","de modo incorruptível; sem corrupção"],
        [623,"ἄδωρος, ος, ον","1 que não aceita presentes; incorruptível 2 que não dá presentes, gen. 3 que não é um presente. 〈ἀ-, δῶρον〉","incorruptível; que não dá presentes"],
        [624,"ἀεθλεύω","jôn. = ἀθλεύω.","forma jônica de ἀθλεύω"],
        [625,"ἀέθλιον, ου (τό)","ép. e poét. 1 preço da luta 2 instrumento de luta 3 luta; campeonato. 〈ἄεθλον〉","preço ou instrumento de luta; luta"],
        [626,"ἀέθλιος","jôn. = ἄθλιος.","forma jônica de ἄθλιος"],
        [627,"ἄεθλον","jôn. = ἆθλον.","forma jônica de ἆθλον"],
        [628,"ἄεθλος","jôn. = ἆθλος.","forma jônica de ἆθλος"],
        [629,"ἀεθλοφόρος","jôn. = ἀθλοφόρος.","forma jônica de ἀθλοφόρος"],
        [630,"ἄει","3ª sing. impf. de ἄημι.","3ª singular do imperfeito de ἄημι"],
        [631,"ἀεί","adv. 1 sempre; sem cessar; continuamente; ἀεί ποτε, ἀεὶ δή ποτε desde sempre; εἰς ἀεί para cada circunstância; εἰς τὸν ἀεὶ χρόνον para a eternidade, i.e., para todo tempo, à medida que ele se desenrolar 2 cada vez; sucessivamente cada vez: ὁ ἀεὶ βασιλεύων Heródoto sempre aquele que está reinando no momento, o rei em exercício, θῶπτε τὸν κρατοῦντ’ ἀεί Ésquilo bajula sempre aquele que está no poder, δέχου τὰ συμφέροντα τῶν ἀεὶ λόγων Sófocles acolhe as vantagens de cada um dos discursos (ou dos discursos que se sucedem), αἱ ἀεὶ πληρούμεναι νῆες Tucídides os navios que iam sendo equipados.","sempre; continuamente; cada vez"],
        [632,"ἀειγενής, ής, ές","eterno. 〈ἀεί, γένος〉","eterno"],
        [633,"ἀειδέμεναι","inf. pres. ép. de ἀείδω.","infinitivo presente épico de ἀείδω"],
        [634,"ἀεῖδεν","inf. dór. de ἀείδω.","infinitivo dórico de ἀείδω"],
        [635,"ἀειδής, ής, ές","1 que não tem forma 2 bíbl. imaterial 3 que não se pode reconhecer; confuso 4 disforme; desfigurado; horrível. 〈ἀ-, εἷδος〉","sem forma; imaterial; disforme"],
        [636,"ἀείδῃσι","3ª sing. subj. ép. de ἀείδω.","3ª singular do subjuntivo épico de ἀείδω"],
        [637,"ἄειδον","impf. poét. de ἀείδω.","imperfeito poético de ἀείδω"],
        [638,"ἀείδω","poét. (impf. ἤειδον, fut. ἀείσω ou ἀείσομαι, aor. ἤεισα, perf. desus.) = ᾄδω.","forma poética equivalente a ᾄδω"],
        [639,"ἀείζωος, ος, ον,","contr. ἀείζως, ως, ων 1 que vive sempre, eterno, imortal. 〈ἀεί, ζάω〉","eterno; imortal"],
        [640,"ἀεικείη","e ἀεικίη, ης (ἡ) = αἰκία.","ἀεικείη; ἀεικίη = αἰκία"]
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
   LOTE 33 — registros 641–660
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [641,"ἀεικέλιος, η","e ος, ον inconveniente; indecoroso; vergonhoso. 〈ἀ-, εἴκελος〉","inconveniente; indecoroso; vergonhoso"],
        [642,"ἀεικελίως","adv. indecorosamente.","indecorosamente"],
        [643,"ἀεικέως","jôn. = αἰκῶς.","forma jônica de αἰκῶς"],
        [644,"ἀεικής, ής, ές","1 inconveniente; indecoroso; indigno 2 in­verossímil; estranho: ἀεικὲς οὐδὲν ἦν não havia nada de estranho em, inf. ♦ ἀεικές adv. 3 indignamente. 〈ἀ-, εἰκός〉","indecoroso; indigno; inverossímil"],
        [645,"ἀεικίζω","ép. (fut. ἀεικιῶ) = αἰκίζω.","forma épica equivalente a αἰκίζω"],
        [646,"ἀείμνηστος, ος, ον","inesquecível; digno de memória eterna. 〈ἀεί, μιμνῄσκομαι〉","inesquecível; digno de memória eterna"],
        [647,"ἀείναος, ος, ον,","contr. ἀείνως, ως, ων = ἀέναος.","forma contraída de ἀέναος"],
        [648,"ἀειράμενος, ἀείρας","part. aor. méd. e at. de ἀείρω.","particípio aoristo médio e ativo de ἀείρω"],
        [649,"ἀειρέσθην","3ª dual impf. méd. de ἀείρω.","3ª dual do imperfeito médio de ἀείρω"],
        [650,"ἀείροντο","3ª pl. impf. pas de ἀείρω.","3ª plural do imperfeito passivo de ἀείρω"],
        [651,"ἀείρυτος, ος, ον","que flui sempre. 〈ἀεί, ῥέω〉","que flui sempre"],
        [652,"ἀείρω","poét. (fut. ἀερῶ e ἀέρσω) = αἴρω.","forma poética equivalente a αἴρω"],
        [653,"ἀείς","part. pres. ép. de ἄημι.","particípio presente épico de ἄημι"],
        [654,"ἀείσκωψ, ωπος (ὁ)","espécie de coruja.","espécie de coruja"],
        [655,"ἄεισμα (τό)","jôn. = ᾆσμα.","forma jônica de ᾆσμα"],
        [656,"ἀείφρουρος, ος, ον","1 que vigia; que guarda sempre 2 que trabalha sempre 3 que se conserva bem (planta). 〈ἀεί, φρουρά〉","que vigia ou trabalha sempre"],
        [657,"ἀειφυγία, ας (ἡ)","exílio perpétuo. 〈ἀεί, φυγή〉","exílio perpétuo"],
        [658,"ἀείφυλλος, ος, ον","sempre frondoso; sempre verde; perene. 〈ἀεί, φῦλλον〉","sempre frondoso; perene"],
        [659,"ἀεκαζόμενος, η, ον","forçado; constrangido. 〈ἀ-, ἑκών〉","forçado; constrangido"],
        [660,"ἀεκήλιος, ος, ον","ép. = ἀεικέλιος.","forma épica de ἀεικέλιος"]
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
   LOTE 34 — registros 661–680
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "protét.", type: "abbr", text: "protético" }
    );
    const entries = [
        [661,"ἀέκητι","adv. 1 contra a vontade ♦ prep. 2 contra a vontade de, gen. 〈ἀ-, ἕκητι〉","contra a vontade; contra a vontade de"],
        [662,"ἀεκούσιος, ος, ον","ép., poét., jôn. = ἀκούσιος.","forma épica, poética e jônica de ἀκούσιος"],
        [663,"ἀέκων, ουσα, ον","ἄκων.","ἄκων"],
        [664,"ἄελλα, ης (ἡ)","tempestade; ventania; furacão. 〈ἄημι〉","tempestade; ventania; furacão"],
        [665,"ἀελλάς, άδος (ἡ)","ἄελλα.","ἄελλα"],
        [666,"ἀελλής","(masc, só no nom.) que redemoinha. 〈ἀ- protét., εἵλω〉","que redemoinha"],
        [667,"ἀελλόπος, ος, ον","ἀελλόπους.","ἀελλόπους"],
        [668,"ἀελλόπους, ους, ους","gen. ποδός de pés rápidos como o furacão. 〈ἄελλα, πούς〉","de pés rápidos como o furacão"],
        [669,"ἀελπτέω-ῶ","(só no part. pres. ἀελπτέοντες) não ter esperanças em; desesperar de, inf. 〈ἄελπτος〉","desesperar; não ter esperanças"],
        [670,"ἀελπτής","por ἀελπής, ής, ές = ἄελπτος.","forma de ἄελπτος"],
        [671,"ἄελπτος, ος, ον","poét., jôn. 1 inesperado; ἐξ ἀέλπτου, ἐξ ἀέλπτων contra toda expectativa 2 sem esperança; desesperado ♦ ἄελπτα adv. 3 contra toda expectativa; inesperadamente. 〈ἀ-, ἔλπομαι〉","inesperado; sem esperança"],
        [672,"ἀέναος, ος, ον","1 que flui sempre 2 que não se esgota (bens); inexaurível; perpétuo. 〈ἀεί, νάω〉","que flui sempre; inexaurível"],
        [673,"ἀενάων, ουσα, ον","gen. οντος = ἀέναος.","forma de ἀέναος"],
        [674,"ἀέντος","gen. de ἀείς.","genitivo de ἀείς"],
        [675,"ἀεξίφυλλος, ος, ον","frondoso. 〈ἀέξω, φύλλον〉","frondoso"],
        [676,"ἀέξω","(fut. ἀεξήσω, aor. ἠέξησα, perf. desus.) poét. 1 fazer crescer; aumentar 2 elevar; exaltar 3 intr. crescer; aumentar ♦ pas. 4 desenvolver-se.","fazer crescer; aumentar; desenvolver-se"],
        [677,"ἄεπτος, ος, ον","duv. 1 que não pode seguir 2 insuportável 3 feroz. 〈ἀ-, ἕπομαι〉","duvidoso: impossível de seguir; insuportável; feroz"],
        [678,"ἀεργία, ας (ἡ)","1 inatividade; inércia; preguiça 2 repouso (da terra); pousio. 〈ἀεργός〉","inatividade; inércia; preguiça"],
        [679,"ἀεργός, ός, όν","1 inativo; ocioso; preguiçoso 2 inerte (coisa) 3 tard. que enfraquece; que debilita; que torna preguiçoso. 〈ἀ-, ἔργον〉","inativo; ocioso; preguiçoso"],
        [680,"ἀέρδην","adv. no alto; no ar. 〈ἀείρω〉","no alto; no ar"]
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
   LOTE 35 — registros 681–700
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "lit.", type: "abbr", text: "literalmente" }
    );
    const entries = [
        [681,"ἀερθείς","part. aor. pas de ἀείρω.","particípio aoristo passivo de ἀείρω"],
        [682,"ἄερθεν","3ª pl. aor. pas. ép. de ἀείρω.","3ª plural do aoristo passivo épico de ἀείρω"],
        [683,"ἀερθῶ","subj. aor. pas. de ἀείρω.","subjuntivo aoristo passivo de ἀείρω"],
        [684,"ἀέριος, ος","e α, ον poét. 1 sombrio como o nevoeiro; obscuro; nebuloso 2 do ar; aéreo 3 vazio como o ar; vão 4 vasto como o ar; infinito. 〈ἀήρ〉","aéreo; sombrio; vasto"],
        [685,"ἄερκτος, ος, ον","não fechado; não fortificado; aberto (lugar). 〈ἀ-, ἔργω〉","aberto; não fortificado"],
        [686,"ἀεροβατέω-ῶ","andar no ar; perder-se nas nuvens. 〈ἀήρ, βαίνω〉","andar no ar; perder-se nas nuvens"],
        [687,"ἀεροδρομέω-ῶ","correr no ar. 〈ἀήρ, δρόμος〉","correr no ar"],
        [688,"ἀεροειδής, ής, ές","1 da aparência do ar; semelhante ao ar; cinzento 2 sombrio; escuro (lugar) 3 que se perde nos ares; indistinto. 〈ἀήρ, εἷδος〉","semelhante ao ar; sombrio; indistinto"],
        [689,"ἀεροκάρδακες, ων (οἱ)","aerocárdaces, lit. combatentes aéreos, seres imaginários. 〈ἀήρ, κάρδαξ〉","aerocárdaces; combatentes aéreos"],
        [690,"ἀεροκώνωπες, ων (οἱ)","aeroconopes, lit. mosquitos aéreos, seres imaginários. 〈ἀήρ, κώνωψ〉","aeroconopes; mosquitos aéreos"],
        [691,"ἀερομαχία, ας (ἡ)","batalha aérea. 〈ἀήρ, μάχη〉","batalha aérea"],
        [692,"ἀερομετρέω-ῶ","(só inf. pres.) medir o ar, i.e., especular no vazio; ocupar-se de vãs especulações. 〈ἀήρ, μέτρον〉","medir o ar; especular no vazio"],
        [693,"ἀερσίπους, ους, ουν","gen. ποδος que ergue o pé; rápido. 〈ἀείρω, πούς〉","que ergue o pé; rápido"],
        [694,"αέρσω","cf. ἀείρω.","cf. ἀείρω"],
        [695,"ἀέρω, ῃς, ῃ","subj. aor.2 de ἀείρω.","subjuntivo do segundo aoristo de ἀείρω"],
        [696,"ἀερῶ, εῖς, εῖ","cf. ἀείρω.","cf. ἀείρω"],
        [697,"ἀερώδης, ης, ες","1 da natureza do ar; aéreo 2 brumoso 3 cheio de ar. 〈ἀήρ〉","aéreo; brumoso; cheio de ar"],
        [698,"ἄεσα","aor. ép. de ἀέσκω.","aoristo épico de ἀέσκω"],
        [699,"ἀεσιφροσύνη, ης (ἡ)","só pl. ἀεσιφροσύναι perturbação de espírito; loucura. 〈ἀεσίφρων〉","perturbação de espírito; loucura"],
        [700,"ἀεσίφρων, ων, ον","gen. ονος insensato; louco. 〈ἀάω1, φρήν〉","insensato; louco"]
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
   LOTE 36 — registros 701–720
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "pal. inter.", type: "abbr", text: "palavra interrogativa" },
        { key: "Luciano", type: "biblio", text: "Luciano de Samósata — escritor grego de expressão ática do século II d.C., conhecido sobretudo por diálogos satíricos." }
    );
    const entries = [
        [701,"ἀέσκω","(só aor. ép. ἄεσα) dormir; ἀ. νύκτα ou νύκτας passar a noite.","dormir; passar a noite"],
        [702,"ἀετιδεύς, έως (ὁ)","filhote da águia. 〈ἀετός〉","filhote da águia"],
        [703,"ἀετός, οῦ (ὁ)","1 águia (ave) 2 águia (insígnia militar, estandarte) 3 presságio; oráculo 4 espécie de peixe 5 fron­tão; entablamento.","águia; estandarte; presságio; peixe; frontão"],
        [704,"ἀετοφόρος, ου (ὁ)","porta-estandarte. 〈ἀετός, φέρω〉","porta-estandarte"],
        [705,"ἀετώδης, ης, ες","tard. semelhante à águia; ἀετῶδες βλέπειν Luciano ter olhar de águia. 〈ἀετός〉","semelhante à águia"],
        [706,"ἄζα, ης (ἡ)","1 secura; ardor 2 pó; sujeira 3 mofo. 〈ἄζω〉","secura; ardor; pó; mofo"],
        [707,"ἀζαλέος, α, ον","1 seco; árido 2 duro; cruel 3 que tira a umidade; que seca; que consome. 〈ἄζω〉","seco; árido; duro; que seca"],
        [708,"ἅζεο","e ἅζευ 2ª sing. imper. pres. méd. de ἅζω.","imperativo presente médio de ἅζω"],
        [709,"ἀζηλία, ας (ἡ)","1 ausência de inveja; indiferença 2 simplicidade (de estilo). 〈ἄζηλος〉","ausência de inveja; indiferença"],
        [710,"ἄζηλος, ος, ον","não invejado; que não merece inveja; lamentável. 〈ἀ-, ζῆλος〉","não invejado; lamentável"],
        [711,"ἀζηλότυπος, ος, ον","isento de inveja.","isento de inveja"],
        [712,"ἀζήμιος, ος, ον","1 que não sofre dano 2 que não sofre pena; impune 3 que não merece punição 4 isento de multa, de tributo, de pagamento 5 que não causa dano; inofensivo. 〈ἀ-, ζημία〉","impune; isento de multa; inofensivo"],
        [713,"ἀζηχής, ής, ές","1 contínuo; ininterrupto; incessante ♦ ἀζηχές adv. 2 sem trégua.","contínuo; sem trégua"],
        [714,"ἄζυμος, ος, ον","1 sem fermento; ázimo (pão) 2 compacto; firme ♦ τὰ ἄζυμα 3 bíbl. festa dos pães ázimos. 〈ἀ-, ζύμη〉","sem fermento; ázimo"],
        [715,"ἄζυξ, υγος","(masc., fem.) 1 não submetido a jugo; não jungido; não submetido ao jugo de, gen. 2 não submetido ao jugo do casamento; solteiro 3 não unido; solto. 〈ἀ-, ζεύγνυμι〉","não jungido; solteiro; solto"],
        [716,"ἄζω","(só pres.) queimar; secar.","queimar; secar"],
        [717,"ἅζω,","ger. ἅζομαι (só pres. e impf.) 1 considerar com temor respeitoso; venerar; temer 2 temer, com inf.; temer que, com μή; perguntar-se com temor, com pal. inter.","venerar; temer; perguntar-se com temor"],
        [718,"ἄζωστος, ος, ον","1 sem cinta 2 que não se cingiu com o cinturão das armas; não armado. 〈ἀ-, ζώννυμι〉","sem cinta; não armado"],
        [719,"ἄη","3ª sing. impf. de ἄημι.","3ª singular do imperfeito de ἄημι"],
        [720,"ἀηδής, ής, ές","desagradável; molesto; repulsivo. 〈ἀ-, ἡδύς〉","desagradável; molesto; repulsivo"]
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
   LOTE 37 — registros 721–740
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [721,"ἀηδία, ας (ἡ)","1 caráter repugnante 2 aversão; repugnância; repulsa. 〈ἀηδής〉","caráter repugnante; aversão; repulsa"],
        [722,"ἀηδονιδεύς, έως (ὁ)","filhote de rouxinol. 〈ἀηδών〉","filhote de rouxinol"],
        [723,"ἀηδονίς, ίδος (ἡ)","ἀηδών.","rouxinol"],
        [724,"ἀηδῶ, οῦς (ἡ)","ἀηδών.","rouxinol"],
        [725,"ἀηδών, όνος (ἡ)","poét. 1 rouxinol 2 cantor; poeta 3 canto poético 4 flauta. 〈ἀείδω〉","rouxinol; cantor; canto poético; flauta"],
        [726,"ἀηδῶς","adv. 1 sem prazer; sem gosto 2 com sentimentos desagradáveis: ἀ. ἔχειν τινι, ἀ. διακεῖσθαι ou διατεθῆναι πρός τινα estar mal disposto com alguém, πρός τι em relação a alguma coisa. 〈ἀηδής〉","sem prazer; mal disposto"],
        [727,"ἀήθεια, ας (ἡ)","falta de hábito; inexperiência. 〈ἀήθης〉","falta de hábito; inexperiência"],
        [728,"ἀηθέσσω","(só pres. e impf.) não estar ou já não estar habituado a, gen. 〈ἀήθης〉","não estar habituado a"],
        [729,"ἀήθης, ης, ες","1 não habituado a, gen. 2 não habitual; inusitado; estranho 3 sem caracteres (tragédia). 〈ἀ-, ἦθος〉","não habituado; inusitado; estranho"],
        [730,"ἀήθως","adv. de modo insólito; de modo inesperado. 〈ἀήθης〉","de modo insólito; inesperadamente"],
        [731,"ἄημα, ατος (τό)","sopro; vento. 〈ἄημι〉","sopro; vento"],
        [732,"ἀήμεναι","inf. pres. ép. de ἄημι.","infinitivo presente épico de ἄημι"],
        [733,"ἀήμενος","part. pres. pas. de ἄημι.","particípio presente passivo de ἄημι"],
        [734,"ἄημι","(inf. ἀῆναι, part. ἀείς, ἀέντος) ép. 1 soprar ♦ méd. pas. 2 ser agitado por um sopro.","soprar; ser agitado por um sopro"],
        [735,"ἀῆναι","cf. ἄημι.","cf. ἄημι"],
        [736,"ἀήρ, ἀέρος (ὁ,","poét. ἡ) 1 ar; atmosfera 2 bruma; cerração; nuvem 3 ar que se respira 4 sopro; exalação 4 ar, um dos quatro elementos, junto com o éter ou fogo, a água e a terra 5 firmamento.","ar; atmosfera; bruma; firmamento"],
        [737,"ἀήσσητος,","át. ἀήττητος, ος, ον não vencido; invencível. 〈ἀ-, ἡσσάομαι〉","não vencido; invencível"],
        [738,"ἀήσυλος, ος, ον","αἴσυλος.","αἴσυλος"],
        [739,"ἀήσυρος, ος, ον","poét. ligeiro como o ar; ágil; rápido. 〈ἄημι〉","ligeiro como o ar; ágil; rápido"],
        [740,"ἀήτης, ου (ὁ)","poét. aquele que sopra; o vento. 〈ἄημι〉","aquele que sopra; vento"]
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
   LOTE 38 — registros 741–760
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [741,"ἄητος, ος, ον","insaciável; louco. 〈ἄημι〉","insaciável; louco"],
        [742,"ἀθαλλής, ής, ές","sem vegetação; sem folhagem. 〈ἀ-, θάλλω〉","sem vegetação; sem folhagem"],
        [743,"Ἀθαμαντίς, ίδος (ἡ)","a filha de Atamas, epít. de Hele. 〈Ἀθάμας〉 Ἀθάμας, αντος (ὁ) Atamas, rei de Orcômeno.","filha de Atamas; Atamas, rei de Orcômeno"],
        [744,"ἀθαμβής, ής, ές","que não teme; intrépido. 〈ἀ-, θάμβος〉","intrépido; sem temor"],
        [745,"Ἀθάνα, Ἀθᾶναι, Ἀθαναία","dór. = Ἀθῆνα, Ἀθῆναι, Ἀθηναία.","formas dóricas de Ἀθῆνα, Ἀθῆναι, Ἀθηναία"],
        [746,"ἀθανασία, ας (ἡ)","imortalidade. 〈ἀθάνατος〉","imortalidade"],
        [747,"ἀθανατίζω","(só pres.) 1 crer-se imortal 2 imortalizar 3 con­siderar imortal. 〈ἀθάνατος〉","crer-se imortal; imortalizar"],
        [748,"ἀθάνατος, ος","poét. η, ον 1 imortal 2 imperecível; perpétuo; eterno. 〈ἀ-, θανεῖν〉","imortal; imperecível; eterno"],
        [749,"ἄθαπτος, ος, ον","1 insepulto 2 indigno de sepultura. 〈ἀ-, θάπτω〉","insepulto; indigno de sepultura"],
        [750,"ἀθάρα, ας,","át. ἀθάρη, ης (ἡ) mingau de farinha; papa. [egípcia]","mingau de farinha; papa"],
        [751,"ἀθαρσής, ής, ές","que não é ousado; tímido; covarde. 〈ἀ-, θάρσος〉","tímido; covarde"],
        [752,"ἀθαρσῶς","adv. sem ousadia; covardemente.","sem ousadia; covardemente"],
        [753,"ἀθέατος, ος, ον","1 que não vê; cego em rel. a, gen. 2 não visto; invisível 3 secreto. 〈ἀ-, θεάομαι〉","cego; invisível; secreto"],
        [754,"ἀθεεί","adv. sem a ajuda dos deuses. 〈ἀ-, θεός〉","sem a ajuda dos deuses"],
        [755,"ἀθείαστος, ος, ον","não inspirado pela divindade. 〈ἀ-, θειάζω〉","não inspirado pela divindade"],
        [756,"ἀθέλεος, ος, ον","contra a vontade. 〈ἀ-, θέλω〉","contra a vontade"],
        [757,"ἄθελκτος, ος, ον","inflexível; implacável. 〈ἀ-, θέλγω〉","inflexível; implacável"],
        [758,"ἀθεμίστιος, ος, ον","ilegal, ilícito; criminoso. 〈ἀθέμιστος〉","ilegal; ilícito; criminoso"],
        [759,"ἀθέμιστος, ος, ον","ἀθεμίστιος. 〈ἀ-, θέμις〉","ἀθεμίστιος"],
        [760,"ἀθέμιτος, ος, ον","ἀθεμίστιος.","ἀθεμίστιος"]
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
   LOTE 39 — registros 761–780
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [761,"ἄθεος, ος, ον","1 que se afasta dos deuses; ímpio 2 rar. ateu 3 abandonado pelos deuses; sem deus. 〈ἀ-, θεός〉","ímpio; ateu; abandonado pelos deuses"],
        [762,"ἀθεράπευτος, ος, ον","1 que não recebe cuidados; mal cuidado; negligenciado 2 que não pode ser tratado; incurável. 〈ἀ-, θεραπεύω〉","mal cuidado; incurável"],
        [763,"ἀθερίζω","fazer pouco caso de; desprezar; negligenciar, gen. ou ac.","desprezar; negligenciar"],
        [764,"ἀθέρμαντος, ος, ον","1 não esquentado 2 que não se pode esquentar. 〈ἀ-, θερμαίνω〉","não esquentado; impossível de esquentar"],
        [765,"ἄθερμος, ος, ον","sem calor. 〈ἀ-, θερμός〉","sem calor"],
        [766,"ἄθεσμος, ος, ον","1 ilegal; ilícito; injusto ♦ οἱ ἄθεσμοι 2 bíbl. os ímpios. 〈ἀ-, θεσμός〉","ilegal; injusto; ímpios"],
        [767,"ἀθέσφατος, ος, ον","ép. poét. indizível; inefável; extraordinário.","indizível; inefável; extraordinário"],
        [768,"ἀθετέω-ῶ","(aor. ἠθέτησα; pas. aor. ἠθετήθην, perf. ἠθέτημαι) bíbl. 1 não respeitar; violar (tratado, juramento, promessa) 2 agir com perfídia contra alguém, ac., εἰς e ac. ou ἐν e dat. 3 repelir alguém, ac. 4 recusar o consentimento a, dat. 5 rejeitar como mau (uma palavra) 6 violar a lei (de Deus); rebelar-se. 〈ἄθετος〉","violar; agir com perfídia; rejeitar"],
        [769,"ἀθέτησις, εως (ἡ)","anulação; abolição; rejeição. 〈ἀθετέω〉","anulação; abolição; rejeição"],
        [770,"ἄθετος, ος, ον","1 sem lugar; sem posição; mal disposto 2 posto de lado; inválido 3 inútil; impróprio para algo, dat. ou πρός e ac. 〈ἀ-, τίθημι〉","sem lugar; inválido; inútil"],
        [771,"ἀθέτως","adv. 1 ilegalmente, despoticamente. 2 de modo indesejável.","ilegalmente; despoticamente"],
        [772,"ἀθεώρητος, ος, ον","1 que não se pode ver; invisível 2 que não se pode investigar 3 não examinado 4 que não viu ou não examinou; ignorante de, gen. 〈ἀ-, θεωρέω〉","invisível; não examinado; ignorante"],
        [773,"ἀθεωρήτως","adv. sem exame; sem reflexão; inconsideradamente.","sem exame; sem reflexão"],
        [774,"ἀθέως","adv. 1 impiamente 2 longe dos deuses.","impiamente; longe dos deuses"],
        [775,"ἄθηλυς, υς, υ","gen. εος não feminino; viril. 〈ἀ-, θῆλυς〉","não feminino; viril"],
        [776,"Ἀθηνᾶ, ᾶς (ἡ)","Atena, deusa protetora de Atenas.","Atena"],
        [777,"Ἀθήναζε","adv. para Atenas. 〈Ἀθῆναι〉","para Atenas"],
        [778,"Ἀθῆναι, ῶν (αἱ)","1 Atenas 2 às vezes, a Ática.","Atenas; Ática"],
        [779,"Ἀθηναία, ας (ἡ)","Ἀθηνᾶ.","Atena"],
        [780,"Ἀθηναίη, ης (ἡ)","Ἀθηνᾶ.","Atena"]
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
   LOTE 40 — registros 781–800
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [781,"Ἀθήναιον, ου (τό)","Ateneu, templo de Atena.","Ateneu; templo de Atena"],
        [782,"Ἀθηναῖος, α, ον","1 ateniense ♦ οἱ Ἀθηναῖοι 2 os atenienses. 〈Ἀθῆναι〉","ateniense; atenienses"],
        [783,"Ἀθήνη, ης (ἡ)","jôn. = Ἀθηνᾶ.","forma jônica de Ἀθηνᾶ"],
        [784,"Ἀθήνηθεν","adv. procedente de Atenas. 〈Ἀθῆναι〉","procedente de Atenas"],
        [785,"Ἀθήνησι(ν)","adv. em Atenas. 〈Ἀθῆναι〉","em Atenas"],
        [786,"Ἀθηνιάω-ῶ","desejar ir a ou estar em Atenas. 〈Ἀθῆναι〉","desejar ir a ou estar em Atenas"],
        [787,"ἀθήρ, έρος (ὁ)","1 barba de espiga; pragana 2 pico de lança.","barba de espiga; pico de lança"],
        [788,"ἀθήρατος, ος, ον","tard. que não pode ser caçado. 〈ἀ-, θηράω〉","que não pode ser caçado"],
        [789,"ἀθήρευτος, ος, ον","1 não caçado 2 que não se pode caçar. 〈ἀ-, θηρεύω〉","não caçado; impossível de caçar"],
        [790,"ἀθηρηλοιγός, οῦ (τό)","crivo de cereais; joeira.","crivo de cereais; joeira"],
        [791,"ἀθηρία, ας (ἡ)","ausência de animais selvagens, de caça; caçada sem resultado. 〈ἄθηρος〉","ausência de caça; caçada sem resultado"],
        [792,"ἄθηρος, ος, ον","sem animais selvagens; sem caça. 〈ἀ-, θήρ〉","sem animais selvagens; sem caça"],
        [793,"ἄθικτος, ος, ον","1 não tocado por, gen., dat., ὑπό e gen.: ἄθικτον κερδῶν βουλευτήριον Ésquilo conselho não tocado pelo lucro, incorruptível 2 virgem; intacto; em bom estado 3 intocável; inviolável; sagrado ♦ τὰ ἄθικτα 4 as coisas sagradas. 〈ἀ-, θιγγάνω〉","intacto; inviolável; sagrado"],
        [794,"ἀθλεύω","1 competir (em jogos); lutar 2 penar; padecer. 〈ἆθλος〉","competir; lutar; padecer"],
        [795,"ἀθλέω-ῶ","(fut. ἀθλήσω, aor. ἤθλησα, perf. ἤθληκα) 1 com- petir (em jogos, concursos) 2 ser atleta; participar de lutas; organizar lutas 3 enfrentar provas, perigos, trabalhos. 〈ἆθλον〉","competir; ser atleta; enfrentar provas"],
        [796,"ἄθλημα, ατος (τό)","1 luta; combate 2 pl. exercícios atléticos 3 prêmio de combate; recompensa 4 petrechos de pesca (anzóis, cestas, varas, etc.). 〈ἀθλέω〉","luta; exercícios; prêmio; petrechos de pesca"],
        [797,"ἄθλησις, εως (ἡ)","1 competição (em geral atlética) 2 treino 3 bíbl. crist. prova; luta. 〈ἀθλέω〉","competição; treino; prova; luta"],
        [798,"ἀθλητήρ, ῆρος (ὁ)","ἀθλητής.","ἀθλητής"],
        [799,"ἀθλητής, οῦ (ὁ)","1 atleta; lutador; campeão 2 quem tem prática de; quem é hábil ou versado em, gen. 3 bíbl. quem sofre o martírio; mártir ♦ adj. 4 em ἀ. ἵππος cavalo de corrida. 〈ἀθλέω〉","atleta; campeão; mártir"],
        [800,"ἀθλητικός, ή, όν","de atleta; atlético. 〈ἆθλον〉","de atleta; atlético"]
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
   LOTE 41 — registros 801–820
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "or.", type: "abbr", text: "oração" }
    );

    const entries = [
        [801,"ἀθλητικῶς","adv. como atleta.","como atleta"],
        [802,"ἄθλιος, α","e ος, ον 1 que concerne ao prêmio da luta 2 que luta por um prêmio; que ganha o prêmio da luta 3 que lu- ta; que sofre; infeliz 4 lastimável; lamentável 5 que faz sofrer; penoso. 〈ἆθλος〉","lutador; infeliz; penoso"],
        [803,"ἀθλιότης, ητος (ἡ)","infelicidade; sofrimento; desgraça. 〈ἄθλιος〉","infelicidade; sofrimento; desgraça"],
        [804,"ἀθλίως","adv. miseravelmente.","miseravelmente"],
        [805,"ἀθλοθέτης, ου (ὁ)","atlóteta, organizador ou presidente de jogos. 〈ἆθλον, τίθημι〉","organizador ou presidente de jogos"],
        [806,"ἆθλον, ου (τό)","1 prêmio; recompensa 2 pl. concurso; torneio; jogo 3 pl. lugar de competição; arena.","prêmio; concurso; arena"],
        [807,"ἆθλος, ου (ὁ)","1 luta; competição 2 trabalho; esforço; labor.","luta; competição; esforço"],
        [808,"ἀθλοφόρος, ος, ον","1 ganhador de prêmios; vitorioso ♦ ὁ ἀθλοφόρος 2 vencedor; campeão. 〈ἆθλον, φέρω〉","ganhador de prêmios; vencedor"],
        [809,"ἄθολος, ος, ον","sem lodo; límpido; claro. 〈ἀ-, θόλος〉","sem lodo; límpido"],
        [810,"ἀθόλωτος, ος, ον","não turvado; límpido. 〈ἀ-, θολόω〉","não turvado; límpido"],
        [811,"ἀθορύβητος, ος, ον","1 não perturbado ♦ τὸ ἀθορυβητό­τατον 2 serenidade; tranqüilidade absoluta. 〈ἀ-, θο­ρυβέω〉","não perturbado; serenidade"],
        [812,"ἆθος","dór. = ἦθος.","forma dórica de ἦθος"],
        [813,"Ἀθόως","ép. = Ἄθως.","forma épica de Ἄθως"],
        [814,"ἄθραυστος, ος, ον","1 não quebrado; intacto; incólume 2 inquebrável; indestrutível. 〈ἀ-, θραύω〉","intacto; inquebrável; indestrutível"],
        [815,"ἀθρέω-ῶ","1 olhar com atenção; fixar os olhos em, εἰς e ac. 2 observar; considerar; examinar, com or. com ὅτι, εἰ, πότερον, μὴ οὐ que, se, se...não.","olhar; observar; examinar"],
        [816,"ἀθρητέον","adj. verb. de ἀθρέω.","adjetivo verbal de ἀθρέω"],
        [817,"ἀθροίζω","e ἁθροίζω (fut. ἀθροίσω, aor. ἥθροισα, perf. ἥθροικα; pas. aor. ἡθροίσθην, perf. ἥθροισμαι) 1 reunir; congregar; convocar (tropas, homens, etc.) 2 recolher; amontoar: ἀ. πνεῦμα Eurípides recuperar o fôlego, recobrar alento ♦ méd. 3 reunir ao redor de si ou para si; juntar; recolher-se; concentrar-se 4 reunir-se em grande número; formar grupo; formar facção. 〈ἀθρόος〉","reunir; congregar; recolher-se"],
        [818,"ἄθροισις","e ἅθροισις, εως (ἡ) reunião; ajuntamento; acumulação. 〈ἀθροίζω〉","reunião; ajuntamento; acumulação"],
        [819,"ἀθροιστέον","adj. verb. de ἀθροίζω.","adjetivo verbal de ἀθροίζω"],
        [820,"ἀθρόος","e ἁθρόος, όα, όον, contr. ἄθρους e ἅθρους, όα, ουν 1 que forma um todo; compacto: ἀ. πόλις Tucídides a cidade como um todo, ἀ. δύναμις Tucídides todas as forças militares reunidas 2 abundante; contínuo: ἀ. δάκρυ Eurípides lágrimas abundantes, ἀθρόαι πέντε νύκτες Píndaro cinco noites seguidas 3 pl. reunidos em grande número; em bloco: ἀθρόα πάντ’ ἀπέπισε Homero expiou tudo de uma só vez.","compacto; abundante; reunido em bloco"]
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
   LOTE 42 — registros 821–840
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "Plutarco", type: "biblio", text: "Plutarco — escritor, biógrafo e filósofo grego dos séculos I–II d.C., autor das Vidas Paralelas e dos Moralia." }
    );
    const entries = [
        [821,"ἀθρόως","e ἁθρόως adv. 1 em massa 2 de uma só vez 3 coletivamente.","em massa; de uma só vez; coletivamente"],
        [822,"ἄθρυπτος, ος, ον","1 inquebrável; duro 2 austero; sem afetação (costumes, palavras) 3 que não cede a, dat., εἰς e ac.: ὦτα ἄτρυπτα κολακείᾳ Plutarco ouvidos refratários à bajulação. 〈ἀ-, θρύπτω〉","inquebrável; austero; inflexível"],
        [823,"ἀθρυψία, ας (ἡ)","ausência de facilidade, de moleza; austeridade. 〈ἄθρυπτος〉","austeridade"],
        [824,"ἀθυμέω-ῶ","1 estar preocupado; estar inquieto; desalentar-se, com algo, ac., dat., εἰς ou πρός e ac., ἐπί e dat. 2 temer que, com μή, or. conj. (εἰ, ὅτι), inf. ou part. 〈ἄθυμος〉","estar preocupado; desalentar-se; temer"],
        [825,"ἀθυμία, ας (ἡ)","1 ausência de ânimo 2 falta de coragem; covardia. 〈ἄθυμος〉","ausência de ânimo; covardia"],
        [826,"ἄθυμος, ος, ον","1 desanimado; desencorajado; abatido 2 covarde 3 sem paixão; sem cólera. 〈ἀ-, θυμός〉","desanimado; covarde; sem cólera"],
        [827,"ἀθύμως","adv. sem ânimo; sem coragem.","sem ânimo; sem coragem"],
        [828,"ἄθυρμα, ατος (τό)","1 brinquedo 2 diversão; entretenimento 3 pl. adornos. 〈ἀθύρω〉","brinquedo; diversão; adornos"],
        [829,"ἄθυρος, ος, ον","1 sem porta 2 sem travas; desenfreado (língua, boca) 3 descomedido (discurso). 〈ἀ-, θύρα〉","sem porta; desenfreado; descomedido"],
        [830,"ἀθυροστομία, ας (ἡ)","tagarelice. 〈ἀθυρόστομος〉","tagarelice"],
        [831,"ἀθυρόστομος, ος, ον","tagarela; indiscreto. 〈ἄθυρος, στόμα〉","tagarela; indiscreto"],
        [832,"ἄθυρσος, ος, ον","sem tirso. 〈ἀ-, θύρσος〉","sem tirso"],
        [833,"ἀθύρω","(só pres. e impf.) 1 brincar; dançar; cantar 2 representar (comédia).","brincar; dançar; cantar; representar"],
        [834,"ἄθυτος, ος, ον","1 que não oferece sacrifícios: ἄθυτος ἀπελθεῖν Xenofonte ir embora sem ter oferecido sacrifícios 2 não consagrado por sacrifício: ἄθυτα παλλακῶν σπέρματα Platão filhos não consagrados de concubinas, i.e., ilegítimos 3 tard. impróprio para o sacrifício (vítima) 4 a quem não se oferece nenhum sacrifício (divindade). 〈ἀ-, θύω〉","sem sacrifício; ilegítimo; impróprio para sacrifício"],
        [835,"ἀθῷος, ος, ον","1 não castigado; impune 2 que não deve ser punido; inocente 3 que não causa mal; inofensivo. 〈ἀ-, θωή〉","impune; inocente; inofensivo"],
        [836,"Ἀθῶος, η, ον","do Atos. 〈Ἄθως〉","do Atos"],
        [837,"ἀθωράκιστος, ος, ον","sem couraça. 〈ἀ-, θωρακίζω〉","sem couraça"],
        [838,"Ἄθως, ω (ὁ)","Atos, monte da Calcídica.","Atos, monte da Calcídica"],
        [839,"αἱ","nom. pl. do art. fem. ἡ.","nominativo plural do artigo feminino ἡ"],
        [840,"αἵ","nom. pl. do pron. rel. fem. ἥ.","nominativo plural do pronome relativo feminino ἥ"]
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
   LOTE 43 — registros 841–860
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "eól.", type: "abbr", text: "eólico" },
        { key: "conj.", type: "abbr", text: "conjunção" }
    );
    const entries = [
        [841,"αἷ","e αἴ, αἷ, αἷ, αἰαῖ, αἰαῖ αἰαῖ interj. (de dor) ah!, ai! ai de mim!","interjeição de dor: ah; ai"],
        [842,"αἰ,","conj. ép. eól. dór. = εἰ; αἴ κε(ν) Homero, αἴ κα dór. = εἰ ἄν ou ἐάν; na esperança de que, em vista de; αἲ γὰρ, αἲ γὰρ δή com opt., rar. com inf. = εἴθε, ah, se...!","conjunção épica, eólica e dórica equivalente a εἰ"],
        [843,"ἄϊ","e ἀΐ eól. = ἀεί.","forma eólica de ἀεί"],
        [844,"αἷα, ας (ἡ)","γαῖα.","γαῖα"],
        [845,"Αἷα, ας (ἡ)","Éia, antigo nome da Cólquida.","Éia, antigo nome da Cólquida"],
        [846,"αἴαγμα, ατος (τό)","gemido. 〈αἰάζω〉","gemido"],
        [847,"αἰάζω","(só pres., fut. e part. aor. αἰάξας) 1 gritar ai! gemer; lamentar-se 2 deplorar. 〈αἷ〉","gemer; lamentar-se; deplorar"],
        [848,"αἰαῖ","interj. = αἷ.","interjeição = αἷ"],
        [849,"Αἰαῖος, η, ον","jôn. poét. 1 de Éa, eense, i.e., da Cólquida: Αἰαίη νῆσος ilha de Éa ♦ ἡ Αἰαίη 2 aquela que habita Éa (Circe, Medéia). 〈Αἷα〉","de Éa; eense; habitante de Éa"],
        [850,"Αἰάκειον, ου (τό)","1 o santuário de Éaco, em Egina ♦ τὰ Αἰάκεια 2 os jogos em honra de Éaco. 〈Αἰακός〉","santuário e jogos de Éaco"],
        [851,"Αἰακίδης, ου (ὁ)","1 Eácida, filho ou descendente de Éaco ♦ οἱ Αἰακίδαι 2 Eácidas, descendentes de Éaco 3 eácidas, habitantes de Egina. 〈Αἰακός〉","Eácida; descendente ou habitante de Egina"],
        [852,"Αἰακός, οῦ (ὁ)","Éaco, rei de Egina e um dos juízes do Hades.","Éaco, rei de Egina e juiz do Hades"],
        [853,"αἰακτός, ή, όν","1 que geme; miserável 2 infeliz; lastimável. 〈αἰάζω〉","que geme; miserável; infeliz"],
        [854,"αἰανής1, ής, ές","que dura sempre; eterno. 〈αἰών〉","eterno"],
        [855,"αἰανής2, ής, ές","1 lúgubre; funesto; horrível 2 penoso, doloroso, deplorável.","lúgubre; funesto; doloroso"],
        [856,"Αἰάντειος, ος, ον","de Ájax. 〈Αἴας〉","de Ájax"],
        [857,"Αἰαντίδης1, ου","(masc.) eântida; da tribo Eântida, da Ática 〈Αἰαντίς〉","eântida da tribo Eântida"],
        [858,"Αἰαντίδης2, ου (ὁ)","eântida; descendente de Ájax. 〈Αἴας〉","descendente de Ájax"],
        [859,"Αἰαντίς, ίδος (ἡ)","Eântida, tribo ática. 〈Αἴας〉","tribo Eântida"],
        [860,"Αἴας","e Αἷας, voc. Αἷαν e Αἴας, gen. Αἴαντος, dat. pl. Αἰάντεσσι (ὁ) Ájax, n. de dois heróis gregos, um, filho de Oileu, e o outro,chamado o grande Ájax, filho de Télamon.","Ájax"]
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
   LOTE 44 — registros 861–880
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "epit.", type: "abbr", text: "epíteto" }
    );
    const entries = [
        [861,"αἴγαγρος, ου (ὁ, ἡ)","cabra selvagem; cabra montês. 〈αἴξ, ἄγριος〉","cabra selvagem; cabra montês"],
        [862,"Αἰγαί, ῶν (αἱ)","Egas, n. de cidade e de ilha.","Egas, cidade e ilha"],
        [863,"Αἰγαῖος, α, ον","de Egas; Egeu; Αἰ. πόντος mar Egeu. 〈Αἰγαί〉","de Egas; Egeu; mar Egeu"],
        [864,"Αἰγαίων, ωνος","e Αἰγαιών, ῶνος (ὁ) mar Egeu.","mar Egeu"],
        [865,"αἰγανέη, ης (ἡ)","lança de caça; dardo.","lança de caça; dardo"],
        [866,"αἰγέη, ης (ἡ)","cf. αἴγεος.","cf. αἴγεος"],
        [867,"Αἰγείδης1, ου (ὁ)","1 o filho de Egeu, epit. de Teseu 2 pl. οἱ Αἰγεῖδαι os egidas; os descendentes de Egeu. 〈Αἰγεύς〉","filho de Egeu; descendentes de Egeu"],
        [868,"Αἰγείδης2, ου (ὁ)","cidadão da tribo Egida, da Ática.","cidadão da tribo Egida"],
        [869,"αἴγειος, α, ον","αἴγεος.","αἴγεος"],
        [870,"αἴγειρος, ου (ἡ)","álamo negro.","álamo negro"],
        [871,"αἰγελάτης, ου (ὁ)","cabreiro. 〈αἴξ, ἐλαύνω〉","cabreiro"],
        [872,"αἴγεος, α, ον","1 de cabra ♦ ἡ αἰγέη jôn. 2 pele de cabra. 〈αἴξ〉","de cabra; pele de cabra"],
        [873,"αἴγεσι","dat. pl. ép. de αἴξ.","dativo plural épico de αἴξ"],
        [874,"Αἰγεύς, έως (ὁ)","Egeu, rei de Atenas.","Egeu, rei de Atenas"],
        [875,"Αἰγηΐς, ΐδος (ἡ)","Egida, tribo ateniense. 〈Αἰγεύς〉","Egida, tribo ateniense"],
        [876,"αἰγιαλός, οῦ (ὁ)","praia; litoral; costa.","praia; litoral; costa"],
        [877,"αἰγίβοτος, ος, ον","que é pasto de cabras. 〈αἴξ, βόσκω〉","pasto de cabras"],
        [878,"αἰγίθαλλος","e αἰγίθαλος, ου (ὁ) abelheiro, n. de pássaro.","abelheiro, pássaro"],
        [879,"Αἰγικορεῖς, έων (οἱ)","Egicoreus ou Cabreiros, uma das quatro antigas tribos jônicas de Atenas. 〈αἴξ, κορέννυμι〉","Egicoreus; antiga tribo jônica de Atenas"],
        [880,"αἰγίλιψ, ῖπος","(masc., fem.) 1 escarpado ♦ ἡ Αἰγίλιψ 2 Egí­lipe, cidade do Epiro.","escarpado; Egílipe"]
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
   LOTE 45 — registros 881–930
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "Dionísio de Halicarnasso", type: "biblio", text: "Dionísio de Halicarnasso — historiador, crítico literário e professor de retórica grego dos séculos I a.C.–I d.C." }
    );
    const entries = [
        [881,"αἴγιλος, ου (ἡ)","erva apreciada pelas cabras. 〈αἴξ〉","erva apreciada pelas cabras"],
        [882,"Αἴγινα, ης (ἡ)","Egina, n. de ninfa e de ilha do golfo Sa­rônico.","Egina, ninfa e ilha"],
        [883,"Αἰγιναῖος, α, ον","de Egina. 〈Αἴγινα〉","de Egina"],
        [884,"Αἰγινήτης, ου (ὁ)","habitante de Egina. 〈Αἴγινα〉","habitante de Egina"],
        [885,"Αἰγινητικός, ή, όν","de Egina. 〈Αἰγινήτης〉","de Egina"],
        [886,"αἰγίοχος, ου (ὁ)","portador da égide. 〈αἰγίς, ἔχω〉","portador da égide"],
        [887,"Αἰγίπαν, ᾶνος (ὁ)","Egipã; Pã de pés de bode. 〈αἴξ, Πάν〉","Egipã; Pã de pés de bode"],
        [888,"αἰγίπλαγκτος, ος, ον","onde vagueiam cabras. 〈αἴξ, πλάζω〉","onde vagueiam cabras"],
        [889,"αἰγίπους, ους, ουν","gen. ποδος que tem pés de cabra. 〈αἴξ, πούς〉","com pés de cabra"],
        [890,"αἰγίπυρος, ου (ὁ)","trigo de cabras. 〈αἴξ, πυρός〉","trigo de cabras"],
        [891,"αἰγίς, ίδος (ἡ)","1 pele de cabra; capa de pele de cabra 2 égi- de, escudo feito com pele de cabra 3 nó de pinho 4 tem­pestade; furacão. 〈αἴξ〉","pele de cabra; égide; tempestade"],
        [892,"Αἴγισθος, ου (ὁ)","Egisto, filho de Tieste e assassino de Agamenão.","Egisto"],
        [893,"αἰγλᾶς","dór. = αἰγλήεις.","forma dórica de αἰγλήεις"],
        [894,"αἴγλη, ης (ἡ)","1 brilho; claridade 2 esplendor 3 glória 4 pl. tochas acesas.","brilho; esplendor; glória"],
        [895,"αἰγλήεις, ήεσσα, ῆεν","brilhante; refulgente. 〈αἴγλη〉","brilhante; refulgente"],
        [896,"αἰγοθηρικός, ή, όν","relativo à caça de cabritos monteses. 〈αἴξ, θηράω〉","relativo à caça de cabritos monteses"],
        [897,"αἰγόκερως, ως, ων","gen. ω, dat. ῳ, ac. ων, tard. 1 que tem chifres de cabra ♦ ὁ αἰγόκερως 2 Capricórnio, signo do zodíaco. 〈αἴξ, κέρας〉","com chifres de cabra; Capricórnio"],
        [898,"αἰγοπρόσωπος, ος, ον","que tem cara de bode ou de cabra. 〈αἴξ, πρόσωπον〉","com cara de bode ou cabra"],
        [899,"Αἰγὸς ποταμοί, ῶν (οἱ)","Egos Pótamos, “Rio da cabra”, rio e cidade do Quersoneso, na Trácia.","Egos Pótamos"],
        [900,"αἰγυπιός, οῦ (ὁ)","abutre.","abutre"],
        [901,"αἰγυπτιάζω","1 falar a língua egípcia 2 falar como um egípcio; ser astuto como um egípcio 3 estar como o Egito, i.e., debaixo d’água, inundado. 〈Αἰγύπτιος〉","falar egípcio; agir como egípcio; inundado"],
        [902,"Αἰγυπτιακός, ή, όν","Αἰγύπτιος. 〈Αἴγυπτος〉","egípcio"],
        [903,"Αἰγύπτιος, α, ον","1 egípcio ♦ ὁ Αἰγύπτιος 2 Egípcio, n. de homem. 〈Αἴγυπτος〉","egípcio; Egípcio"],
        [904,"Αἰγυπτιστί","adv. 1 em língua egípcia 2 como egípcio; com astúcia. 〈Αἴγυπτος〉","em língua egípcia; com astúcia"],
        [905,"Αἰγυπτογενής, ής, ές","1 nascido no Egito 2 descendente de Egípcio. 〈Αἴγυπτος, γίγνομαι〉","nascido no Egito; descendente de Egípcio"],
        [906,"Αἰγυπτόνδε","adv. em direção ao Egito. 〈Αἴγυπτος〉","em direção ao Egito"],
        [907,"Αἴγυπτος1, ου (ὁ)","1 Egito, n. de homem 2 o Nilo.","Egito; Nilo"],
        [908,"Αἴγυπτος2, ου (ἡ)","Egito.","Egito"],
        [909,"Ἀίδας","dór. = Ἅιδης.","forma dórica de Ἅιδης"],
        [910,"αἰδεῖο","2ª sing. imper. pres. ép. de αἰδέομαι.","imperativo presente épico de αἰδέομαι"],
        [911,"αἰδέομαι-οῦμαι","(fut. αἰδέσομαι, aor. ᾐδεσάμην ou ᾐδέσθην, perf. ᾔδεσμαι) 1 ter pudor: οἴη δ’ οὐκ εἴσειμι μετ’ ἀνέρας, αἰδέομαι Homero sozinha não iria para o meio dos homens, por pudor 2 ter escrúpulo; ter vergonha de, temer, inf., part., ἐπί e dat.: ἐκβαλεῖν αἰδοῦμαι δάκρυ Eurípides tenho vergonha de verter uma lágrima, αἴδεσαι μὲν πατέρα τὸν σὸν ἐν λυγρῷ γήρᾳ προλείπων Sófocles tem pudor de abandonar teu pai na triste velhice, οἱ δ’ αἰδεσθέντες ἐπὶ τῷ ἔργῳ Dionísio de Halicarnasso os que se envergonharam dessa ação 3 reverenciar; tratar com deferência: δεῖ τοὺς θεοὺς σέβεσθαι, γονέας τιμᾶν, πρεσβυτέρους αἰδεῖσθαι Plutarco deve-se venerar os deuses, honrar os pais, respeitar os mais idosos, τόνδ’ ὅρκον αἰδεσθεὶς θεῶν Sófocles respeitando este juramento feito aos deuses 4 ter compaixão de; ser indulgente com, ac. e ὑπέρ e gen.: ἕως ἂν αἰδέσηταί τινα τῶν ἐν γένει τοῦ πεπονθότος Demóstenes até que ele tenha acolhido um dos parentes da vítima (para tratar de um acordo sobre um assassínio), αἰδουμένους ὑπὲρ τῆς ἀνθρωπίνης φύσεως Plutarco sendo indulgente com a natureza humana 5 obter o perdão de alguém, ac. 〈αἰδώς〉","ter pudor; envergonhar-se; reverenciar; compadecer-se"],
        [912,"αἴδεσθεν","3ª pl. aor. pas. de αἰδέομαι.","3ª plural do aoristo passivo de αἰδέομαι"],
        [913,"αἰδέσιμος, ος, ον","respeitável; venerável; sagrado. 〈αἰδέομαι〉","respeitável; venerável; sagrado"],
        [914,"αἰδεσίμως","adv. com respeito; respeitosamente.","respeitosamente"],
        [915,"αἴδεσις, εως (ἡ)","1 piedade; compaixão; perdão 2 respeito; veneração 3 Jur. acordo. 〈αἰδέομαι〉","piedade; respeito; acordo"],
        [916,"αἴδεσσαι","2ª sing. imper. aor. ép. de αἰδέομαι.","imperativo aoristo épico de αἰδέομαι"],
        [917,"αἰδέσσομαι","fut. ép. de αἰδέομαι.","futuro épico de αἰδέομαι"],
        [918,"αἰδεστός, ή, όν","respeitável; venerável. 〈αἰδέομαι〉","respeitável; venerável"],
        [919,"ἀΐδηλος, ος, ον","1 que faz desaparecer; que destrói; funesto 2 que não se pode olhar; horrível 3 invisível; secreto (ações, ritos); obscuro (palavras) 3 sombrio; obscuro. 〈ἀ-, ἰδεῖν〉","funesto; horrível; invisível; obscuro"],
        [920,"ἀϊδήλως","adv. de maneira funesta.","de maneira funesta"],
        [921,"αἰδημόνως","adv. com pudor; com modéstia.","com pudor; com modéstia"],
        [922,"αἰδήμων, ων, ον","gen. ονος cheio de temor respeitoso; reservado; discreto. 〈αἰδέομαι〉","respeitoso; reservado; discreto"],
        [923,"Ἅιδης","e ᾅδης, jôn. ép. Ἀΐδης, ου (ὁ) 1 Hades, deus dos infernos; εἰς Ἅιδου, ἐν Ἅιδου na morada de Hades; nos infernos 2 Hades, a morte. 〈ἀ-, ἰδεῖν〉","Hades; morte"],
        [924,"ἀΐδιος, ος, ον","que dura sempre; eterno; perpétuo; ἐς ἀΐδιον para sempre. 〈ἄϊ〉","eterno; perpétuo"],
        [925,"ἀϊδής, ής, ές","invisível; sombrio; escuro. 〈ἀ-, ἰδεῖν〉","invisível; sombrio; escuro"],
        [926,"αἰδοῖος, α, ον","1 venerável; respeitável; sagrado 2 respeitoso; cheio de deferência (palavras, atitudes) 3 vergonhoso; vil ♦ τὸ αἰδοῖον, τὰ αἰδοῖα 4 as partes pudendas. 〈αἰδώς〉","venerável; respeitoso; vergonhoso; partes pudendas"],
        [927,"αἰδοίως","adv. com respeito; respeitosamente.","respeitosamente"],
        [928,"αἴδομαι","(só pres. e impf.) = αἰδέομαι.","forma de αἰδέομαι"],
        [929,"Ἄϊδος, Ἄϊδι, Ἄϊδα","cf. Ἄϊς e Ἁίδης.","cf. Ἄϊς e Ἁίδης"],
        [930,"αἰδόφρων, ων, ον","gen. ονος 1 respeitoso 2 compassivo; humano. 〈αἰδώς, φρήν〉","respeitoso; compassivo; humano"]
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
   LOTE 46 — registros 931–980
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "person.", type: "abbr", text: "personificação; personificado" }
    );
    const entries = [
        [931,"ἀϊδρεΐη, ης (ἡ)","ignorância; imperícia. 〈ἀ-, ἴδρις〉","ignorância; imperícia"],
        [932,"ἀϊδρηΐη","jôn. = ἀϊδρεΐη.","forma jônica de ἀϊδρεΐη"],
        [933,"ἄϊδρις, ις, ι","gen. ιος e εος ignorante; inexperiente. 〈ἀ-, ἴδρις〉","ignorante; inexperiente"],
        [934,"αΐδω","poét. = ἀείδω.","forma poética de ἀείδω"],
        [935,"Ἀϊδωνευς, έως (ὁ)","Edoneu, outro n. de Hades.","Edoneu; Hades"],
        [936,"αἰδώς, όος-οῦς (ἡ)","1 temor respeitoso; respeito; deferência: αἰδῶ ἑαυτοῦ τοῖς στρατιώταις ἐμποιῆσαι Xenofonte infundir um temor respeitoso nos soldados, οἱ τοὺς θεοὺς δι᾽ αἰδοῦς ἔχοντες el. aqueles que reverenciam os deuses 2 sentimento de honra; brio; dignidade de conduta: δι᾽ αἰδοῦς ὄμμ’ ἔχουσα Eurípides tendo pudor nos olhos, αἰδὼς σωφροσύνης πλεῖστον μετέχει Tucídides o sentimento da honra tem muitíssimo de sabedoria, αἰδοῦς ἐμπίπλασθαι Xenofonte estar cheio de modéstia; αἰδώς ἐστι teme-se, com inf. 3 sentimento de vergonha; caráter vergonhoso (de uma ação): δακρύων αἰδῶ Ésquilo vergonha das lágrimas 4 rar. partes pudendas 5 rar. caráter que inspira um temor respeitoso; grandeza respeitável; dignidade 6 compaixão; misericórdia.","respeito; honra; vergonha; compaixão"],
        [937,"ἄϊε, ἄϊεν","3ª sing. impf. de ἀΐω1.","imperfeito de ἀΐω1"],
        [938,"αἰεί","poét. = ἀεί.","forma poética de ἀεί"],
        [939,"αἰειγενέτης, ου","(masc.) poét. imortal. 〈αἰεί, γίγνομαι〉","imortal"],
        [940,"αἰείμνηστος","poét. = ἀείμνηστος.","forma poética de ἀείμνηστος"],
        [941,"αἰέλουρος","jôn. = αἴλουρος.","forma jônica de αἴλουρος"],
        [942,"αἰέν","e αἰές poét. = ἀεί.","formas poéticas de ἀεί"],
        [943,"αἰετός","poét. = ἀετός.","forma poética de ἀετός"],
        [944,"αἰζήϊος","ép. = αἰζηός.","forma épica de αἰζηός"],
        [945,"ἀΐζηλος, ος, ον","invisível. 〈ἀ-, ἰδεῖν〉","invisível"],
        [946,"αἰζηός, οῦ","(masc.) 1 viril; robusto;vigoroso ♦ οἱ αἰζηοί 2 homens fortes.","viril; robusto; homens fortes"],
        [947,"Αἰήτας, αο","dór. = Αἰήτης.","forma dórica de Αἰήτης"],
        [948,"Αἰήτης, ου (ὁ)","Eetes, rei da Cólquida.","Eetes, rei da Cólquida"],
        [949,"αἴητος, ος, ον","duv. impetuoso; de sopro ruidoso. 〈ἄημι〉","impetuoso; de sopro ruidoso"],
        [950,"αἴθ’","cf. αἴθε e αἴτε.","cf. αἴθε e αἴτε"],
        [951,"Αἰθαιεύς, έως (ὁ)","habitante de Etéia, na Lacônia.","habitante de Etéia"],
        [952,"αἰθαλόεις-οῦς, όεσσα-οῦσσα, όεν-οῦν","1 enegrecido; fusco 2 castanho escuro 3 que queima; que consome. 〈αἴθω〉","enegrecido; castanho; abrasador"],
        [953,"αἴθαλος, ου (ὁ)","1 fumaça negra e espessa; fuligem ♦ adj. 2 enegrecido pelo fogo 3 castanho escuro. 〈αἴθω〉","fuligem; enegrecido; castanho"],
        [954,"αἰθαλόω-ῶ","1 reduzir a cinza; consumir 2 sujar com fumaça. 〈αἴθαλος〉","reduzir a cinza; sujar com fumaça"],
        [955,"αἴθε","εἴθε.","εἴθε"],
        [956,"αἰθέριος, α, ον","do éter; produzido no éter; etéreo. 〈αἰθήρ〉","etéreo"],
        [957,"αἰθεροειδής, ής, ές","semelhante ao éter; etéreo. 〈αἰθήρ, εἷδος〉","semelhante ao éter"],
        [958,"αἰθερώδης, ης, ες","αἰθεροειδής.","αἰθεροειδής"],
        [959,"αἰθήρ, έρος (ὁ, ἡ)","1 éter, a mais alta região do ar 2 éter, morada dos astros e deuses 3 ar, elemento 4 ar; clima 5 fôlego; respiração 6 Éter, person. filho de Érebo e da Noite. 〈αἴθω〉","éter; ar; Éter personificado"],
        [960,"Αἰθιοπεύς, έως","e ῆος (ὁ) etíope. 〈Αἰθίοψ〉","etíope"],
        [961,"Αἰθιοπία, ας (ἡ)","Etiópia.","Etiópia"],
        [962,"Αἰθιοπίη, ης (ἡ)","jôn. = Αἰθιοπία.","forma jônica de Αἰθιοπία"],
        [963,"Αἰθιοπικός, ή, όν","Αἰθιόπιος. 〈Αἰθίοψ〉","etíope"],
        [964,"Αἰθιόπιος, α, ον","etíope. 〈Αἰθίοψ〉","etíope"],
        [965,"Αἰθιοπίς, ίδος","(fem.) etíope. 〈Αἰθίοψ〉","etíope"],
        [966,"Αἰθίοψ, οπος","(masc., fem.) 1 etíope: ποταμὸς Αἰθίοψ o rio etíope, o Nilo superior ♦ ὁ Αἰθίοψ 2 o Etíope, epít. de Zeus. 〈αἴθω, ὤψ〉","etíope; epíteto de Zeus"],
        [967,"αἰθός, ή, όν","1 queimado; escuro 2 cor de fogo; resplandecente. 〈αἴθω〉","queimado; resplandecente"],
        [968,"αἴθουσα, ης (ἡ)","pórtico; galeria; varanda. 〈αἴθω〉","pórtico; galeria; varanda"],
        [969,"αἷθοψ, οπος","(masc., fem.) 1 de aspecto abrasador; que esquenta; que queima 2 de aspecto abrasado ou inflamado; cintilante; resplandecente 3 violento; furioso. 〈αἴθω, ὤψ〉","abrasador; cintilante; furioso"],
        [970,"αἴθρα, ας (ἡ)","brilho do éter; serenidade do céu. 〈αἰθήρ〉","brilho do éter; céu sereno"],
        [971,"αἰθρηγενέτης, ου (ὁ)","nascido do éter, epit. de Bóreas. 〈αἴθρη, γένος〉","nascido do éter; epíteto de Bóreas"],
        [972,"αἰθρηγενής, ής, ές","αἰθρηγενέτης.","αἰθρηγενέτης"],
        [973,"αἰθρία, ας (ἡ)","1 ar puro; céu sereno 2 ar livre. 〈αἴθριος〉","ar puro; ar livre"],
        [974,"αἰθριάζω","1 intr. estar ao ar livre 2 expor ao ar livre, sob um céu sereno 3 tornar o céu sereno 4 tard. acalmar-se. 〈αἰθρία〉","estar ou expor ao ar livre; acalmar-se"],
        [975,"αἴθριος, ος, ον","1 puro; sereno 2 exposto ao ar livre ♦ τὸ αἴθριον 3 pátio, considerado como a parte que recebe a influência do éter. 〈αἴθρα〉","puro; sereno; pátio"],
        [976,"αἷθρος, ου (ὁ)","ar frio; frescor da manhã. 〈αἴθρα〉","ar frio; frescor da manhã"],
        [977,"αἴθυγμα, ατος (τό)","centelha; clarão. 〈αἰθύσσω〉","centelha; clarão"],
        [978,"αἴθυια, ας (ἡ)","gaivota.","gaivota"],
        [979,"αἰθύσσω","1 agitar vivamente; chacoalhar 2 agitar-se; vacilar. 〈αἴθω〉","agitar vivamente; vacilar"],
        [980,"αἴθω","(só pres. e impf.) 1 acender (o fogo); fazer brilhar (uma luz) 2 queimar (vítimas) 3 intr. queimar; arder ♦ méd. 4 queimar-se; brilhar; arder (de amor).","acender; queimar; arder"]
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
   LOTE 47 — registros 981–1030
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [981,"αἴθων, ονος","e ωνος (masc., fem.) 1 resplandecente; brilhante; refulgente 2 da cor do fogo; vermelho escuro; ruivo 3 ardente; fogoso. 〈αἴθω〉","brilhante; ruivo; ardente"],
        [982,"αἰκάλλω","(impf. ᾔκαλλον) afagar; lisonjear; acolher com alegria.","afagar; lisonjear; acolher"],
        [983,"αἰκέλιος, ος, ον","ἀεικέλιος.","ἀεικέλιος"],
        [984,"ἀϊκή, ῆς (ἡ)","impulso; ímpeto. 〈ἀΐσσω〉","impulso; ímpeto"],
        [985,"αἰκής, ής, ές","ἀεικής.","ἀεικής"],
        [986,"αἰκία, ας (ἡ)","ultraje; afronta; maus tratos. 〈αἰκής〉","ultraje; afronta; maus tratos"],
        [987,"αἰκίζω,","contr. de ἀεικίζω (só pres.; méd. mais freq.) at. e méd. maltratar; torturar; ultrajar.","maltratar; torturar; ultrajar"],
        [988,"αἴκισμα, ατος (τό)","maus tratos; tortura; ultraje. 〈αἰκίζω〉","maus tratos; tortura; ultraje"],
        [989,"αἰκῶς","ép., e ἀϊκῶς adv. indignamente; injuriosamente.","indignamente; injuriosamente"],
        [990,"αἴλινος, ος, ον","1 queixoso; desolado; triste ♦ αἴλινον, αἴλινα adv. 2 queixosamente; lastimosamente ♦ ὁ αἴ­λινος 3 lamento fúnebre. 〈αἷ, Λίνος〉","triste; lamento fúnebre"],
        [991,"αἴλουρος, ου (ὁ, ἡ)","gato; gata. 〈αἰόλος, οὐρά〉","gato; gata"],
        [992,"αἷμα, ατος (τό)","1 sangue 2 alma; coragem; força 3 derramamento de sangue; homicídio: αἵματος δίκαι Ésquilo acusação de assassínio 4 menstruação 5 laços sangüíneos; parentesco: ἀφ’ αἵματος, ἐξ αἵματος, ἐν αἵματι εἷναι ser do sangue de alguém 6 líquido vermelho; suco; vinho.","sangue; coragem; homicídio; parentesco"],
        [993,"αἱμακορία","e αἱμακουρία (ἡ) libação de sangue em honra dos mortos. 〈αἷμα, κορέννυμι〉","libação de sangue aos mortos"],
        [994,"αἱμακτός, ή, όν","ensangüentado. 〈αἱμάσσω〉","ensanguentado"],
        [995,"αἱμάς, άδος (ἡ)","onda de sangue. 〈αἷμα〉","onda de sangue"],
        [996,"αἱμασιά, ᾶς (ἡ)","1 espinho; sebe de espinho; sebe 2 muro feito de pedras (sobrepostas, sem argamassa). 〈αἱμός〉","sebe; muro de pedras"],
        [997,"αἱμάσσω,","át. -άττω (fut. αἱμάξω, aor. ᾕμαξα, perf. desus.) 1 cobrir de sangue; ferir; matar 2 intr. estar ou ficar ensangüentado; cobrir-se de sangue ♦ méd. 3 manchar de sangue. 〈αἷμα〉","ensanguentar; ferir; matar"],
        [998,"αἱματεκχυσία, ας (ἡ)","bíbl. derramamento de sangue. 〈αἷμα, ἐκχέω〉","derramamento de sangue"],
        [999,"αἱματηρός, ά","e ός, όν 1 que causa derramamento de sangue; ávido de sangue; assassino 2 ensangüentado 3 de sangue. 〈αἷμα〉","sanguinário; ensanguentado; de sangue"],
        [1000,"αἱματηφόρος, ος, ον","que causa derramamento de sangue; sangrento. 〈αἷμα, φέρω〉","sangrento"],
        [1001,"αἱματίζω","1 ensangüentar 2 (inseto) chupar sangue. 〈αἷμα〉","ensanguentar; chupar sangue"],
        [1002,"αἱματόεις, όεσσα, όεν","1 cheio de sangue; sangrento; ensangüentado 2 da cor do sangue; purpúreo. 〈αἷμα〉","sangrento; purpúreo"],
        [1003,"αἱματολοιχός, ός, όν","que lambe sangue. 〈αἷμα, λείχω〉","que lambe sangue"],
        [1004,"αἱματορρόφος, ος, ον","que engole sangue. 〈αἷμα, ῥοφέω〉","que engole sangue"],
        [1005,"αἱματόρρυτος, ος, ον","que verte sangue; que faz escorrer sangue. 〈αἷμα, ῥέω〉","que verte sangue"],
        [1006,"αἱματοσταγής, ής, ές","gotejante de sangue. 〈αἷμα, στάζω〉","gotejante de sangue"],
        [1007,"αἱματόω-ῶ","1 ensangüentar 2 converter em sangue ♦ pas. 3 estar ensangüentado; cobrir-se de sangue. 〈αἷμα〉","ensanguentar; converter em sangue"],
        [1008,"αἱματώδης, ης, ες","1 sangrento; sanguinolento 2 da natureza do sangue. 〈αἷμα〉","sanguinolento; da natureza do sangue"],
        [1009,"αἱμοβαρής, ής, ές","cheio de sangue. 〈αἷμα, βάρος〉","cheio de sangue"],
        [1010,"αἱμόδιψος, ος, ον","sedento de sangue. 〈αἷμα, δίψα〉","sedento de sangue"],
        [1011,"Αἱμονίδης, ου (ὁ)","descendente de Hêmon. 〈Αἵμων〉","descendente de Hêmon"],
        [1012,"αἱμορραγής, ής, ές","que perde sangue; que sofre hemorragia. 〈αἷμα, ῥήγνυμι〉","hemorrágico"],
        [1013,"αἱμόρραντος, ος, ον","orvalhado de sangue; ensopado de sangue. 〈αἷμα, ῥαίνω〉","ensopado de sangue"],
        [1014,"αἱμορροέω-ῶ","perder sangue; ter hemorragia. 〈αἱμόρροος〉","ter hemorragia"],
        [1015,"αἱμόρροος-ους, οος-ους, οον-ουν","1 que sofre hemorragia (veia) 2 que causa hemorragia. 〈αἷμα, ῥεω〉","hemorrágico; que causa hemorragia"],
        [1016,"αἱμοσφαγεῖος, ος, ον","que faz correr sangue. 〈αἷμα, σφάττω〉","que faz correr sangue"],
        [1017,"αἱμυλία, ας (ἡ)","graça; encanto; lisonja. 〈αἱμύλος〉","graça; encanto; lisonja"],
        [1018,"αἱμύλιος, ος, ον","ép. = αἱμύλος.","forma épica de αἱμύλος"],
        [1019,"αἱμύλλω","(só pres.) lisonjear; enganar. 〈αἱμύλος〉","lisonjear; enganar"],
        [1020,"αἱμύλος, η","e ος, ον poét. 1 ladino; astuto; hábil 2 lisonjeiro; enganador; sedutor (pessoa).","astuto; lisonjeiro; sedutor"],
        [1021,"αἱμώδης, ης, ες","que é vermelho como sangue. 〈αἷμα〉","vermelho como sangue"],
        [1022,"αἵμων1, ων, ον","gen. ονος duv. apaixonado por ou hábil em, gen.","apaixonado por ou hábil em"],
        [1023,"αἵμων2, ων, ον","gen. ονος 1 sangrento; cruento ♦ ὁ Αἵμων 2 Hêmon, filho de Creonte, rei de Tebas. 〈αἷμα〉","sangrento; Hêmon"],
        [1024,"αἰνά","cf. αἰνός.","cf. αἰνός"],
        [1025,"αἰναρέτης, ου","voc. αἰναρέτη (masc.) terrivelmente corajoso. 〈αἰνός, ἀρετή〉","terrivelmente corajoso"],
        [1026,"Αἰνέας","dór., e át. Αἰνείας, ου (ὁ) Enéias, herói troiano, filho de Anquises e de Afrodite.","Enéias"],
        [1027,"αἴνεσις, εως (ἡ)","bíbl. louvor. 〈αἰνέω〉","louvor"],
        [1028,"αἰνετός, ή, όν","louvável. 〈αἰνέω〉","louvável"],
        [1029,"αἰνέω-ῶ","(impf. ᾔνουν, fut. αἰνέσω, aor. ᾔνεσα, perf. desus.; pas. aor. ᾐνέθην, perf. desus.) 1 louvar; elogiar; celebrar 2 aprovar 3 agradecer 4 aquiescer em; permitir, com ac. e part.: ἰόντ’ αἰνέσατ’ ἐκ δόμων Ésquilo deixai-o sair da (vossa) casa 5 contentar-se; resignar-se 6 prometer algo, ac., a alguém, dat. 7 aconselhar; recomendar, inf. 〈αἶνος〉","louvar; aprovar; agradecer; aconselhar"],
        [1030,"αἴνη, ης (ἡ)","louvor; glória. 〈αἶνος〉","louvor; glória"]
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
   LOTE 48 — registros 1031–1080
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "partit.", type: "abbr", text: "partitivo" }
    );
    const entries = [
        [1031,"Αἰνία, ας (ἡ)","Ênia, cidade da Etólia.","Ênia, cidade da Etólia"],
        [1032,"Αἰνιάν, ᾶνος","(masc., fem., n.) de Ênia; eniano. 〈Αἰνία〉","de Ênia; eniano"],
        [1033,"αἴνιγμα, ατος (τό)","1 enigma; expressão enigmática; palavra obscura; ἐν αἰνίγματι de maneira confusa 2 alusão; insinuação. 〈αἰνίσσομαι〉","enigma; expressão obscura; alusão"],
        [1034,"αἰνιγματώδης, ης, εν","enigmático. 〈αἴνιγμα〉","enigmático"],
        [1035,"αἰνιγμός, οῦ (ὁ)","enigma; δι᾽ αἰνιγμῶν, ἐν αἰνιγμοῖσι por enigmas.","enigma"],
        [1036,"αἰνίζομαι","(só pres.) = αἰνέω.","forma de αἰνέω"],
        [1037,"αἰνικτηρίως","adv. por enigmas.","por enigmas"],
        [1038,"αἰνικτός, ή, όν","expresso por enigmas, por palavras veladas. 〈αἰνίσσομαι〉","expresso por enigmas"],
        [1039,"Αἴνιος, ου (ὁ)","1 Ênio, n. de homem ♦ adj. 2 de Enos, cidade da Trácia.","Ênio; de Enos"],
        [1040,"αἰνίσσομαι,","át. -ίττομαι (fut. αἰνίξομαι, aor. ᾐνιξάμην; pas. aor. ᾐνίχθην, perf. ᾔνιγμαι) 1 falar por enigmas; falar obscuramente; fazer uma alusão obscura 2 expressar por enigmas; insinuar. 〈αἶνος〉","falar por enigmas; insinuar"],
        [1041,"αἰνόθεν","adv. em αἰνόθεν αἰνῶς Homero de mal a pior. 〈αἰνός〉","de mal a pior"],
        [1042,"Αἰνόθεν","adv de Enos, na Trácia. 〈Αἶνος〉","de Enos"],
        [1043,"αἰνολαμπής, ής, ές","que tem um brilho terrível. 〈αἰνός, λάμπω〉","de brilho terrível"],
        [1044,"αἰνόλεκτρος, ος, ον","cujo leito é funesto. 〈αἰνός, λέκτρον〉","de leito funesto"],
        [1045,"αἰνόμορος, ος, ον","de funesto destino. 〈αἰνός, μόρος〉","de funesto destino"],
        [1046,"αἰνοπαθής, ής, ές","que sofre terrivelmente. 〈αἰνός, παθεῖν〉","que sofre terrivelmente"],
        [1047,"Αἰνόπαρις, ιδος (ὁ)","o funesto Páris. 〈αἰνός, Πάρις〉","o funesto Páris"],
        [1048,"αἰνοπάτηρ","só voc. αἰνόπατερ pai infeliz. 〈αἰνός, πατήρ〉","pai infeliz"],
        [1049,"αἰνός, ή, όν","1 terrível; medonho; formidável ♦ αἰνά adv. 2 terrivelmente.","terrível; medonho; terrivelmente"],
        [1050,"αἶνος, ου (ὁ)","1 elogio; louvor 2 conto 3 apólogo; sentença; provérbio.","elogio; louvor; conto; provérbio"],
        [1051,"Αἶνος, ου (ὁ","e ἡ) 1 masc. Eno, n. de homem 2 fem. Eno, cidade da Trácia.","Eno, homem ou cidade"],
        [1052,"αἴνυμαι","(só pres. e impf.) pegar; agarrar, apoderar-se de, ac. ou gen. partit.","pegar; agarrar; apoderar-se"],
        [1053,"αἰνῶς","adv. terrivelmente; grandemente.","terrivelmente; grandemente"],
        [1054,"αἴξ, αἰγός (ὁ, ἡ)","1 cabra; bode 2 cabra selvagem; cabrito montês 3 espécie de ave aquática 4 Cabra, a estrela Capela 5 meteoro inflamado 6 pl. ondas.","cabra; bode; Capela; ondas"],
        [1055,"ἀΐξασθαι","inf. aor. méd. de ἀΐσσω.","infinitivo aoristo médio de ἀΐσσω"],
        [1056,"ἀΐξω,","fut. de ἀΐσσω.","futuro de ἀΐσσω"],
        [1057,"Αἰολεῖς, έων (οἱ)","os eólios, uma das quatro principais tribos helênicas.","eólios"],
        [1058,"Αἰολίδης, ου (ὁ)","Eólide, filho ou descendente de Éolo. 〈Αἴολος〉","Eólide; descendente de Éolo"],
        [1059,"αἰολίζω","1 falar em dialeto eólico 2 cantar ou compor à maneira eólica. 〈Αἰολεῖς〉","falar ou compor em eólico"],
        [1060,"Αἰολικός, ή, όν","eólico; da Eólia. 〈Αἰολεῖς〉","eólico; da Eólia"],
        [1061,"Αἰόλιος, α, ον","eólio. 〈Αἰολεῖς〉","eólio"],
        [1062,"Αἰολίς, ίδος","(masc., fem.) 1 eólio ♦ ἡ Αἰολίς [χώρα] 2 Eó­lia, região da Ásia Menor. 〈Αἰολεῖς〉","eólio; Eólia"],
        [1063,"αἰόλλω","(só pres.) 1 agitar vivamente; fazer girar 2 ornar com diversas cores; matizar.","agitar; girar; matizar"],
        [1064,"αἰολοθώρηξ, ηκος","(masc.) jôn. de couraça pintada de várias cores ou de couraça brilhante. 〈αἰόλος, θώραξ〉","de couraça colorida ou brilhante"],
        [1065,"Αἰολοκένταυρος, ου (ὁ)","Centauro ágil, ser fictício.","Centauro ágil"],
        [1066,"αἰολόμητις, ιος","(masc., fem.) fértil em astúcias. 〈αἰόλος, μῆτις〉","fértil em astúcias"],
        [1067,"αἰολομίτρης, ου","(masc.) 1 que tem cinturão de várias cores 2 que tem turbante de várias cores. 〈αἰόλος, μίτρα〉","de cinturão ou turbante multicolor"],
        [1068,"αἰολόπωλος, ος, ον","que tem corcéis ágeis. 〈αἰόλος, πῶλος〉","de corcéis ágeis"],
        [1069,"αἰόλος, η","e ος, ον 1 que se agita vivamente; móbil; ágil 2 cambiante; variado 3 de aspecto variável; de cores cam- biantes; matizado ♦ ὁ Αἴολος 4 Éolo, deus dos ventos.","móbil; ágil; matizado; Éolo"],
        [1070,"αἰολόστομος, ος, ον","de linguagem ambígua. 〈αἰόλος, στόμα〉","de linguagem ambígua"],
        [1071,"ἄϊον","cf. ἀΐω1 e ἀΐω2.","cf. ἀΐω1 e ἀΐω2"],
        [1072,"αἰπεινός, ή, όν","1 alto; escarpado; difícil de atingir 2 difícil de compreender; profundo. 〈αἷπος〉","alto; escarpado; profundo"],
        [1073,"αἵπερ","eól. = εἴπερ.","forma eólica de εἴπερ"],
        [1074,"αἵπερ","nom. pl. fem. de ὅσπερ.","nominativo plural feminino de ὅσπερ"],
        [1075,"αἰπήεις, ήεσσα, ῆεν","1 circundado de escarpas 2 impetuoso; violento (furacão). 〈αἷπος〉","escarpado; impetuoso"],
        [1076,"αἰπολέω-ῶ","(só pres. e impf.) 1 guardar ou guiar cabras ♦ pas. 2 pastar. 〈αἰπόλος〉","guardar cabras; pastar"],
        [1077,"αἰπόλιον, ου (τό)","1 rebanho de cabras; rebanho 2 pastagem de cabras. 〈αἰπόλος〉","rebanho ou pastagem de cabras"],
        [1078,"αἰπόλος, ου (ὁ)","cabreiro. 〈αἴξ, πολέω〉","cabreiro"],
        [1079,"αἷπος, εος-ους (τό)","1 altura; elevação 2 meta difícil de atingir. 〈αἰπύς〉","altura; meta difícil"],
        [1080,"αἰπός, ή, όν","αἰπύς.","αἰπύς"]
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
   LOTE 49 — registros 1081–1130
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "Teofrasto", type: "biblio", text: "Teofrasto — filósofo grego dos séculos IV–III a.C., discípulo e sucessor de Aristóteles no Liceu." },
        { key: "Políbio", type: "biblio", text: "Políbio — historiador grego dos séculos III–II a.C., autor das Histórias." },
        { key: "Septuaginta", type: "biblio", text: "Septuaginta — tradução grega antiga das Escrituras hebraicas e de outros livros judaicos." },
        { key: "Antifonte", type: "biblio", text: "Antifonte — orador ateniense do século V a.C., tradicionalmente incluído entre os dez oradores áticos." },
        { key: "Novo Testamento", type: "biblio", text: "Novo Testamento — corpus grego cristão citado pelo DGP." },
        { key: "predic.", type: "abbr", text: "predicativo" },
        { key: "suj.", type: "abbr", text: "sujeito" }
    );
    const entries = [
        [1081,"αἰπυμήτης, ου","voc. αἰπυμῆτα (masc.) que tem pensamentos elevados. 〈αἰπύς, μῆτις〉","de pensamentos elevados"],
        [1082,"αἰπύνωτος, ος, ον","situado no cume da montanha. 〈αἰπύς, νῶτον〉","situado no cume"],
        [1083,"αἰπύς, εῖα, ύ","poét. 1 alto e escarpado; alto e abrupto; elevado 2 difícil de atingir; árduo: αἰπύ οἱ ἐσσεῖται Homero ser-lhe-á difícil 3 pendurado do alto: ἁψαμένη βρόχον αἰπύν Homero suspensa de laço mortal 4 próprio para precipitar-se 5 profundo 6 que se eleva muito alto; retumbante ♦ τὸ Αἰπύ 7 Epi, “a Escarpada”, cidade do país de Nestor.","alto; escarpado; árduo; profundo"],
        [1084,"Αἰπύτιος, α, ον","de Épito. 〈Αἴπυτος〉","de Épito"],
        [1085,"Αἴπυτος, ου (ὁ)","Épito, rei da Arcádia.","Épito"],
        [1086,"αἱρέσιμος, α, ον","que se pode submeter; conquistável. 〈αἱρέω〉","conquistável"],
        [1087,"αἵρεσις, εως (ἡ)","1 ação de tomar; tomada; conquista: αἵρεσις δυνάμεως tomada do poder 2 escolha: αἵρεσιν διδόναι ou νέμειν deixar a escolha a alguém, dat.; αἵρεσιν λαμβάνειν ter a escolha, οὐκ ἔχειν αἵρεσιν não admitir escolha 3 escolha por voto; eleição 4 função eletiva; magistratura 5 preferência; inclinação; apego a, πρός e ac. 6 desígnio; intenção 7 estudo específico 8 escola;doutrina filosófica; seita 9 crist. heresia. 〈αἱρέω〉","tomada; escolha; eleição; escola; heresia"],
        [1088,"αἱρετέος, α, ον","adj. verb. de αἱρέω.","adjetivo verbal de αἱρέω"],
        [1089,"αἱρετίζω","(aor. ᾑρέτισα, perf. ᾑρέτικα) preferir; aderir a; escolher, ac. ou inf. 〈αἱρετός〉","preferir; escolher"],
        [1090,"αἱρετικός, ή, όν","1 que escolhe; que adere a, gen. 2 crist. que toma partido; sectário 3 crist. que causa divisão; faccioso; herético 4 Astrol. escolhido ou designado para nascer sob uma constelação. 〈αἱρετός〉","sectário; faccioso; herético"],
        [1091,"αἱρετός, ή, όν","1 que pode ser tomado 2 que pode ser apreendido ou compreendido 3 que tem probabilidade de ser escolhido; desejável 4 escolhido; eleito: δικασταὶ αἱρετοί juízes eleitos, αἱρετὴ ἀρχή magistratura eletiva ♦ οἱ αἱρετοί 5 os escolhidos ou eleitos para uma delegação; delegados; comissários. 〈αἱρέω〉","tomável; desejável; escolhido"],
        [1092,"αἱρεύμενος","part. pres. méd. jôn. de αἱρέω.","particípio presente médio jônico de αἱρέω"],
        [1093,"αἱρέω-ῶ","(impf. ᾕρουν, fut. αἱρήσω, aor.2 εἷλον, perf. ᾕρηκα; pas. fut. αἱρεθήσομαι, aor. ᾑρέθην, perf. ᾕρημαι) ativa 1 pegar; tomar pela força; agarrar 2 capturar; apoderar-se de; vencer 3 prender alguém; surpreender alguém no ato 4 condenar; provar alguma coisa; vencer uma causa 5 conquistar 6 apreender pela razão; compreender média 7 tomar para si 8 escolher; preferir 9 eleger 1 χειρὸς ἑλόντ’ ἀγέμεν Homero tendo[-a] tomado pela mão, conduzi-a, τρίαιναν ἑλὼν χερσὶ στιβαρῇσιν Homero tendo ele agarrado seu tridente com as mãos vigorosas, ἄξω ἑλών Homero tendo[-a] tomado pela força, trarei, i.e., vou trazê-la à força 2 ζωοὺς ἕλον πολλούς Homero capturaram muitos deles vivos, ἡ γὰρ φύσις παραμένουσ’ αἱρεῖ κακά Eurípides a natureza, mantendo-se firme, vence os males, ἐμὲ χλωρὸν δέος ᾕρει Homero invadia-me um lívido temor 3 φῶρα κλοπῇ ἑλεῖν Platão apanhar um ladrão em flagrante, τήνδ’ εἵλομεν θάπτουσαν Eurípides nós a surpreendemos enquanto sepultava (o morto) 4 εἷλε σ’ ἡ Δίκη Eurípides a Justiça te condenou, ἀλλά σε κλέπτονθ’ αἱρήσω Aristófanes mas provarei que roubas, αἱρεῖν δίκην Demóstenes ganhar um processo 5 μεγάλα δ’ ἐπινοεῖς ἑλεῖν Eurípides grandes prêmios planejas conquistar, αἱρεῖν κῦδος Homero obter a glória 6 εἴπερ ἱκανῶς μέλλομεν τὴν ὑφαντικὴν αἱρήσειν Platão se é que vamos compreender suficientemente a arte do tecelão, ὁ λόγος οὕτω αἰρέει Heródoto a razão assim apreende 7 δόρπον ἕλοντο Homero tomaram a refeição, ὅρκον ἕλωμαι Homero se eu obtivesse um juramento 8 ἀλήτην βίον εἵλευ Heródoto escolheste uma vida errante, τοῖς ἄλλοις τὴν δουλείαν αἱρουμένοις συγγνώμην εἷχον Isócrates aos outros, por preferirem a servidão, perdoavam 9 αἱροῦνται αὐτὸν ἄρχοντα τῆς εἰς Μήδους στρατείας Xenofonte elegem-no chefe da expedição contra os medos.","tomar; conquistar; compreender; escolher; eleger"],
        [1094,"ἄϊρος","em Ἴρος ἄϊρος Homero Iros que não é Iros, Iros infeliz. 〈ἀ-, Ἴρος〉","Iros infeliz"],
        [1095,"αἴρω","(impf. ᾖρον, fut. ἀρῶ, aor. ἦρα, perf. ἦρχα; pas. fut. ἀρθήσομαι, aor. ἤρθην, perf. ἦρμαι) ativa 1 levantar; erguer 2 pegar para levar ou trazer; transportar 3 tomar; tirar algo, ac., de, ἀπό e gen.; tomar sobre si; suportar 4 elevar; exaltar; exagerar 5 elevar; fazer crescer 6 levar para fora; fazer desaparecer; expulsar algo, ac., de, ἐκ e gen. 7 lançar ao mar (navio); fazer partir 8 intr. partir média 9 erguer; elevar, tomar 10 tomar nas mãos; empreender; assumir; suportar 11 tomar para si; alcançar; obter 12 fazer desaparecer 1 μύδρους αἴρειν χεροῖν Sófocles levantar com as mãos ferros em brasa, αἴρειν μηχανάς Platão erguer a maquinaria (de teatro), ἕως ἂν τὸ τεῖχος ἱκανὸν αἴρωσιν Tucídides até que eles ergam um muro que seja suficiente 2 μή μοι οἷνον ἄειρε Homero não me tragas vinho, μῆλα ἄειραν νηυσί Homero transportaram rebanhos nas naus 3 ἄρας τι τῶν ἀπὸ τραπέζης Teofrasto tendo tomado da mesa uma das iguarias, αἴρειν ὕδωρ Aristófanes tirar água, ἄρατε τὸν ζυγόν μου ἐφ’ ὑμᾶς Novo Testamento tomai o meu jugo sobre vós 4 πολλῷ ἐπαίνῳ ὑψηλὸν ἀρῶ Eurípides com muito louvor (te) elevarei às alturas, τῷ λόγῳ τὸ πρᾶγμ’ ἐγὼ νῦν αἴρω Demóstenes agora com a palavra exalto a ação, ἐπὶ μείζον τῷ λόγῳ αἴρειν Plutarco exagerar com a palavra 5 ὄλβον Δαρεῖος ἦρεν Ésquilo Dario fez crescer a prosperidade, αἴρειν θάρσος Eurípides tomar coragem 6 τούσδ’ ἱκτῆρας κλάδους ἄρατε Sófocles retirai esses ramos suplicantes, αἴρειν ἐκ πόλεως Platão expulsar (alguém) da cidade, αἴρειν τὸν πόλεμον Políbio fazer cessar a guerra, αἴρειν τὴν ἁμαρτίαν Septuaginta abolir o pecado 7 τὰς ναῦς ἄραντες Tucídides tendo eles lançado as naus ao mar, αἴρειν βουλόμενος καὶ πλεῖν ἐπὶ τὸν Ἰσθμόν Plutarco querendo levantar âncora e navegar para o istmo de Corinto 8 αἴρειν τῷ στράτῳ Tucídides partir com o exército 9 αἴρεσθαι τὰ ἱστία Plutarco içar as velas, αἴρεσθαι φορτίον Demóstenes erguer um fardo, αἴρεσθαι φωνήν Aristófanes elevar a voz 10 πρεσβύτερός τε ἤδη εἰμὶ καὶ βαρὺς ἀείρεσθαι Heródoto já sou muito velho e lento para tomar iniciativa, ἄρασθαι πόλεμον Ésquilo empreender uma guerra, κίνδυνον ἀράμενος Antifonte tendo ele assumido o perigo, ἐκείνῳ δυσμένειαν ἠράμην Eurípides enfrentei sua inimizade 11 αἴρεσθαι νίκας, κλέος, κῦδος, alcançar vitórias, glória, renome 12 αἴρεσθαι πόλιν Dionísio de Halicarnasso destruir uma cidade.","levantar; transportar; tirar; partir; assumir; obter"],
        [1096,"Ἄϊς","(só gen. Ἄϊδος, dat. Ἄϊδι, ac. Ἄϊδα) = Ἀΐδης.","forma de Ἀΐδης"],
        [1097,"αἷσα, ης (ἡ)","1 parte; porção: αἷσα χθονός Píndaro porção de terra 2 parte destinada a cada um; quinhão; destino: αἷσά μοι ἐστί Homero é meu destino, inf. 3 medida; regra; conveniência: κατ’ αἷσαν, ἐν αἷσᾳ como convém; παρὰ ou ὑπὲρ αἷσαν Homero além do conveniente 4 decreto; decisão de um deus: Διὸς ὑπὲρ αἷσαν Homero contra a vontade de Zeus 5 Αἷσα person. Esa, o Destino.","parte; destino; medida; decreto; Esa"],
        [1098,"αἰσθάνομαι","(impf. ᾐσθανόμην, fut. αἰσθήσομαι, aor.2 ᾐσθόμην, perf. ᾔσθημαι) 1 perceber pelos sentidos ou pela mente; ouvir; ver; sentir; perceber, gen. ou ac., com part. predic. do suj., com ac. ou gen. e part., com ὅτι: ὥς μοι πολλὰς μὲν θρήνων ᾠδάς, πολλὰς δ’ ᾔσθου πλαγάς Sófocles quantos cantos de dor (ouviste) de mim, tantos golpes me (viste dar), ᾔσθησαί μου ψευδομαρτυροῦντος; Xenofonte percebeste que eu dava falso testemunho? 2 ser inteligente; ter consciência de si; estar em plena posse das faculdades: ἐπεβίων δὲ παντὸς αὐτοῦ αἰσθόμενός τε τῇ ἡλικίᾳ Tucídides vivi-a [a guerra] inteira, pela idade que tinha, em plena posse de minhas faculdades. 〈ἀΐω〉","perceber; sentir; compreender"],
        [1099,"ἄϊσθε","3a. sing. impf. poét. de ἀΐσθω.","imperfeito poético de ἀΐσθω"],
        [1100,"αἴσθημα, ατος (τό)","1 o sentir, sensação 2 o objeto de sen­sação, o sentido. 〈αἰσθάναομαι〉","sensação; objeto de sensação"],
        [1101,"αἴσθησις, εως (ἡ)","1 percepção pelos sentidos; faculdade de sentir: πᾶσαν αἴσθησιν αἰσθάνεσθαι Platão experimentar toda e qualquer sensação 2 percepção pela inteligência; noção; conhecimento: αἴσθησιν λαμβάνειν, ἔχειν ter a sensação, a percepção de algo, gen., αἴσθησιν παρέχειν, ποιεῖν fazer ver, fazer compreender a alguém, gen. 3 órgão dos sentidos 4 pl. os sentidos 5 rasto; pista. 〈αἰσθάνομαι〉","percepção; conhecimento; sentidos"],
        [1102,"αἰσθήσομαι","fut. de αἰσθάνομαι.","futuro de αἰσθάνομαι"],
        [1103,"αἰσθητήριον, ου (τό)","1 órgão dos sentidos 2 bíbl. pl. sentidos, faculdades, poder de discernimento. 〈αἰσθάνομαι〉","órgão dos sentidos; discernimento"],
        [1104,"αἰσθητικός, ή, όν","1 capaz de perceber algo, gen.: ἡ αἰσ­θητικὴ δύναμις a faculdade de sentir 2 apreensível pelos sentidos; sensível. 〈αἰσθητός〉","capaz de perceber; sensível"],
        [1105,"αἰσθητικῶς","adv. sensivelmente. 〈αἰσθάνομαι〉","sensivelmente"],
        [1106,"αἰσθητός, ή, όν","sensível; perceptível. 〈αἰσθάνομαι〉","sensível; perceptível"],
        [1107,"αἰσθητῶς","adv. de maneira sensível; sensivelmente.","sensivelmente"],
        [1108,"αἴσθομαι","(só pres.) = αἰσθάνομαι.","forma de αἰσθάνομαι"],
        [1109,"αΐσθω","(só part. pres. ἀΐσθων e 3ª sing. impf. ép. ἄισθε) exalar, soprar: αὐτὰρ ὁ θυμὸν αἴσθε Homero então exalou seu sopro de vida.","exalar; soprar"],
        [1110,"αἰσιμία, ας (ἡ)","duv. proveito; fruição ou repartição justa. 〈αἴσιμος〉","proveito; repartição justa"],
        [1111,"αἴσιμος, ος","e η, ον 1 fixado pelo destino; fatal: αἴσιμόν ἐστι Homero é fatal 2 conforme a norma, conveniente; justo: αἴσιμα εἰδώς Homero de espírito prudente, αἴσιμα εἰπεῖν Homero dizer coisas adequadas, πρὶν δὲ φρένας αἰσίμη ἦσθα Homero outrora eras bem equilibrada de sentimentos ♦ αἴσιμα adv. 4 com medida, com moderação. 〈αἷσα〉","fatal; conveniente; justo"],
        [1112,"αἰσιόομαι-οῦμαι","considerar de bom augúrio. 〈αἴσιος〉","considerar de bom augúrio"],
        [1113,"αἴσιος, ος","e α, ον 1 oportuno; favorável 2 que acontece segundo a regra; conveniente; justo. 〈αἷσα〉","oportuno; favorável; justo"],
        [1114,"ἀΐσσω,","at. ᾄσσω, ᾄττω e ἄττω (impf. ἤϊσσον e ᾖσσον; fut. ἀΐξω e ᾄξω; aor.ἤϊξα e ᾖξα; perf. desus.; pas. aor. ἠΐχθην) 1 mover-se rapidamente; lançar-se; saltar: ἀ. ἔγχεϊ Homero precipitar-se para frente com a lança, δούρατα ἐκ χειρῶν ἤϊξαν Homero as lanças saltaram de suas mãos 2 precipitar-se em; esforçar-se para, inf. ou εἰς e ac.: οὐδ’ ᾖξας εἰς ἔρευναν ἐξευρεῖν γονάς; Eurípides não te apressaste na busca para achar teus pais? 3 (pres. e aor.) mover rapidamente; agitar: ἀ. χέρα Sófocles mover a mão, διά μου κεφαλῆς ᾄσσουσ’ ὀδύναι Eurípides pela minha cabeça agitam-se dores ♦ méd. 4 precipitar-se; agitar-se: πυλάων ἀντίον ἀΐζασθαι Homero lançar-se contra as portas, κόμη δι᾽ αὔρας ᾄσσεται Sófocles os cabelos agitam-se ao vento.","lançar-se; saltar; agitar-se"],
        [1115,"ἄϊστος,","contr. αἶστος, ος, ον 1 não visto; invisível; desaparecido 2 desconhecido; obscuro 3 que não vê; que não conhece, gen. 〈ἀ-, ἰδεῖν〉","invisível; desconhecido"],
        [1116,"ἀϊστόω-ῶ","(fut. ἀϊστώσω, aor. ἠΐστωσα e ᾔστωσα, perf. desus.; pas. aor. ép. 3ª pl. ἀϊστώθησαν) 1 tornar invisível; fazer desaparecer; destruir ♦ pas. 2 aor. desaparecer. 〈ἄϊστος〉","fazer desaparecer; destruir"],
        [1117,"αἰσυλοεργός, ός, όν","que pratica atos ímpios; malvado. 〈αἴσυλος, ἔργον〉","ímpio; malvado"],
        [1118,"αἴσυλος, ος, ον","ímpio; inconveniente; mau.","ímpio; inconveniente; mau"],
        [1119,"Αἰσύμηθεν","adv. de Esima, cidade da Trácia.","de Esima"],
        [1120,"αἰσυμνάω-ῶ","(só pres.) dirigir; governar, gen. 〈αἷσα〉","dirigir; governar"],
        [1121,"αἰσυμνήτηρ, ῆρος (ὁ)","governador; príncipe.","governador; príncipe"],
        [1122,"αἰσυμνήτης, ου (ὁ)","organizador de jogos; supervisor; árbitro.","organizador; supervisor; árbitro"],
        [1123,"Αἰσχίνης, ου (ὁ)","Ésquines, orador ateniense, rival de Demóstenes.","Ésquines"],
        [1124,"αἴσχιστος, η, ον","superl. de αἰσχρός.","superlativo de αἰσχρός"],
        [1125,"αἰσχίων, ων, ον","gen. ονος comp. de αἰσχρός.","comparativo de αἰσχρός"],
        [1126,"αἷσχος, εος-ους (τό)","1 opróbrio; vergonha; infâmia 2 pl. atos ou palavras vergonhosas 3 deformidade física; feiúra.","opróbrio; vergonha; feiúra"],
        [1127,"αἰσχροκέρδεια, ας (ἡ)","ganância; cupidez. 〈αἰσχροκερδής〉","ganância; cupidez"],
        [1128,"αἰσχροκερδής, ής, ές","ávido de ganho; cúpido; avaro. 〈αἰσχρός, κέρδος〉","cúpido; avaro"],
        [1129,"αἰσχροκερδῶς","adv. com ganância; com ambição sórdida.","com ganância"],
        [1130,"αἰσχρολογία, ας (ἡ)","fala indecente; obscenidade. 〈αἰσχρός, λόγος〉","fala indecente; obscenidade"]
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
   LOTE 50 — registros 1131–1180
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "Teócrito", type: "biblio", text: "Teócrito — poeta helenístico dos séculos IV–III a.C., tradicionalmente associado ao desenvolvimento da poesia bucólica." },
        { key: "rec.", type: "abbr", text: "recente" },
        { key: "eufór.", type: "abbr", text: "eufemístico" }
    );
    const entries = [
        [1131,"αἰσχρόμητις, ιος","(masc., fem.) que dá maus conselhos. 〈αἰσχρός, μῆτις〉","de maus conselhos"],
        [1132,"αἰσχροποιός, ός, όν","que comete atos infames; que se comporta vergonhosamente. 〈αἰσχρός, ποιέω〉","que comete atos infames"],
        [1133,"αἰσχρός, ά, όν","(comp. αἰσχίων, superl. αἴσχιστος) 1 objeto de opróbrio; vil; indigno (pessoas) 2 incapaz (animais); indigno; infame (coisas); feio; medonho (pessoas e coisas); funesto; lastimável 3 inconveniente; impróprio para algo, πρός e ac. 4 desonroso; infamante: αἰσχρόν ἐστι é vergonhoso, inf. ♦ τὸ αἰσχρόν 5 vergonha; τὸ καλὸν καὶ τὸ αἰσχρόν o bem e o mal ou a virtude e o vício (para os estóicos).","vil; feio; desonroso; vergonha"],
        [1134,"αἰσχρότης, ητος (ἡ)","1 feiúra; deformidade 2 bíbl. comportamento indecente. 〈αἰσχρός〉","feiúra; comportamento indecente"],
        [1135,"αἰσχρουργία, ας (ἡ)","1 conduta vergonhosa 2 obscenidade. 〈αἰσχρός, ἔργον〉","conduta vergonhosa; obscenidade"],
        [1136,"αἰσχρῶς","adv. vergonhosamente.","vergonhosamente"],
        [1137,"αἰσχυνέμεν","inf. pres. ép. de αἰσχύνω.","infinitivo presente épico de αἰσχύνω"],
        [1138,"αἰσχυνέω","fut. jôn. de αἰσχύνω.","futuro jônico de αἰσχύνω"],
        [1139,"αἰσχύνη, ης (ἡ)","1 causa de vergonha; injúria, opróbrio: αἰσχύνην ἔχειν, φέρειν, προσβάλλειν causar desonra a alguém, dat., γράφεσθαί τινα γένους αἰσχύνης Platão acusar alguém de ação desonrosa contra a estirpe 2 situação vergonhosa; desonra: αἰσχύνη συμβᾶσα τῇ πόλει Demóstenes vergonha que aconteceu à cidade, αἰσχύνῃ πίπτειν Sófocles cair em desonra 3 sentimento de vergonha; comedimento; respeito; αἰσχύνην ἔχειν ter vergonha de, gen., πᾶσαν αἰσχύνην ἀφιέναι Demóstenes perder toda a vergonha, αἰσχύνῃ ἠφείδουν σφῶν αὐτῶν Tucídides por brio não se poupavam, αἰσχύνην ὁμολογουμένην φέρουσι Tucídides [leis não escritas] que gozam de respeito unânime 4 ultraje ao pudor; estupro. 〈αἷσχος〉","vergonha; desonra; pudor; estupro"],
        [1140,"αἰσχυνοῦμαι","fut. méd. pas. de αἰσχύνω.","futuro médio-passivo de αἰσχύνω"],
        [1141,"αἰσχυντέον","adj. verb. de αἰσχύνω.","adjetivo verbal de αἰσχύνω"],
        [1142,"αἰσχυντηλία, ας (ἡ)","pudor; modéstia.","pudor; modéstia"],
        [1143,"αἰσχυντηλός, ός, όν","1 pudico; modesto 2 que causa vergonha ♦ τὸ αἰσχυντηλόν 3 modéstia; pudor. 〈αἰσχύνω〉","pudico; modesto; vergonha"],
        [1144,"αἰσχυντήρ, ῆρος (ὁ)","homem que desonra; adúltero. 〈αἰσχύνω〉","homem que desonra; adúltero"],
        [1145,"αἰσχυντικός, ή, όν","que causa vergonha.","que causa vergonha"],
        [1146,"αἰσχύνω","(impf. ᾔσχυνον, fut. αἰσχυνῶ, aor. ᾔσχυνα, perf. rec. ᾔσχυγκα) 1 tornar feio: χαριὲν δ’ ᾔσχυνε πρόσωπον Homero desfigurava seu belo rosto, κόμην ᾔσχυνε δαΐζων Homero enfeava a cabeleira arrancando os cabelos 2 ultrajar; profanar; estuprar: αἰσχύνεις πόλιν Sófocles desonras a cidade, ᾔσχυνε ξενίαν τράπεζαν Ésquilo ultrajou a mesa hospitaleira, [εἴ τινες] τούς τε παῖδας καὶ τὰς γυναῖκας αἰσχύνοειν Isócrates se algumas pessoas estuprassem mulheres e crianças 3 desacreditar: ᾔσχυνας μὲν ἐμὴν ἀρετήν Homero denegriste meu valor ♦ méd. 4 ter vergonha de algo, ac., dat., ἐν ou ἐπί e dat., ὑπέρ e gen.: αἰσχυνόμενος τῇ συμφορᾷ Lísias envergonhado com o acontecimento; envergonhar-se de fazer algo, part.: αἰσχύνω ποιῶν tenho vergonha de fazer (mas faço), οὐκ ἂν αἰσχύνοιό σε παρέχων σοφιστήν; Platão tu não te envergonharias de te apresentares como sofista? com inf. ou or. com εἰ, ἤν, μή: αἰσχύνω ποιεῖν tenho vergonha de fazer (e não faço) 5 corar diante de alguém, ac. ou πρός e ac. 〈αἰσχύνη〉","tornar feio; ultrajar; envergonhar-se"],
        [1147,"Αἴσωπος, ου (ὀ)","Esopo, n. de fabulista e de ator trágico.","Esopo"],
        [1148,"αἴτε","dór. = εἴτε.","forma dórica de εἴτε"],
        [1149,"αἰτεύμενος","part. pres. pas. jôn. de αἰτέω.","particípio presente passivo jônico de αἰτέω"],
        [1150,"αἰτέω-ῶ","(impf. ᾔτουν, fut. αἰτήσω, aor. ᾔτησα, perf. ᾔτηκα; pas. fut. αἰτηθήσομαι, aor. ᾐτήθην, perf. ᾔτημαι) 1 pedir; solicitar; postular a alguém, ac. ou πρός, παρά e gen.; algo, ac. ou or. inf. ou conj. (ὅπως); em benefício de alguém, dat. ♦ méd. 2 pedir para si; implorar; reclamar (com as mesmas construções da at.) ♦ pas. 3 ser solicitado: αἰτηθέντες χρήματα Heródoto solicitados a dar seus bens, αἰτεύμενος Teócrito solicitado a fazer algo, inf.; ἵπποι ᾐτημένοι Lísias cavalos tomados de empréstimo; τὸ αἰτεόμενον Heródoto aquilo que se pede.","pedir; solicitar; implorar"],
        [1151,"αἴτημα, ατος (τό)","1 pedido; petição 2 princípio de demonstração; postulado. 〈αἰτέω〉","pedido; petição; postulado"],
        [1152,"αἰτηματώδης, ης, ες","que tem o caráter de hipótese. 〈αἴτημα〉","de caráter hipotético"],
        [1153,"αἴτησις, εως (ἡ)","1 pedido; súplica 2 postulado. 〈αἰτέω〉","pedido; súplica; postulado"],
        [1154,"αἰτητικός, ή, όν","1 que gosta de pedir 2 que pode ser pedido; desejável. 〈αἰτέω〉","que gosta de pedir; desejável"],
        [1155,"αἰτητός, ή, όν","solicitado; desejável. 〈αἰτέω〉","solicitado; desejável"],
        [1156,"αἰτία, ας (ἡ)","1 princípio; origem: αἱ πρῶται αἰτίαι Platão as causas primeiras 2 razão: δι’ ἣν αἰτίαν ἐπολέμησαν Heródoto motivo pelo qual fizeram a guerra 3 responsabilidade: αἰτία θεοῦ Ésquilo a responsabilidade do deus, τὴν αἰτίαν ἐνδέχεσθαι tomar a responsabilidade, τὴν αἰτίαν εἰς αὑτὸν φέρειν assumir a responsabilidade, αἰτίαν ἀνατιθέναι, ἐπιτιθέναι, ἐπιφέρειν atribuir a responsabilidade a alguém, dat. 4 acusação: ἀφιέναι τινὰ τῆς αἰτίας Lísias absolver alguém de uma acusação, αἰτίαν ἔχειν, ὑπέχειν, ὑπομένειν, φέρεσθαι ou εἰς αἰτίαν ἐλθεῖν, ἐμπίπτειν ou αἰτίας τυγχάνειν ou ἐν αἰτίᾳ εἷναι, γίγνεσθαι ser acusado, sofrer uma acusação, estar sob acusação 5 eufór. reputação: αἰτίαν ἔχουσι βελτίους γεγονέναι Platão têm a reputação de se terem tornado melhores 6 bíbl. condição; situação: εἰ οὕτως ἐστὶν ἡ αἰτία τοῦ ἀνθρώπου μετὰ τῆς γυναικός, οὐ συμφέρει γαμῆσαι Novo Testamento se tal é a condição do homem em relação à mulher, não convém casar. 〈αἴτιος〉","causa; razão; responsabilidade; acusação; condição"],
        [1157,"αἰτιάζομαι","(impf. ᾐτιαζόμην) ser acusado de algo, gen. 〈αἰτία〉","ser acusado"],
        [1158,"αἰτίαμα, ατος (τό)","acusação; motivo de queixa; culpa. 〈αἰτιάομαι〉","acusação; queixa; culpa"],
        [1159,"αἰτιάομαι-ῶμαι","(fut. αἰτιάσομαι, aor. ᾐτιασάμην, perf. ᾐτίαμαι) 1 ver como causa: οὐ τὸ αἴτιον αἰτιᾶσθαι Platão não considerar como causa o que é a causa 2 apresentar como causa; pretextar: τὸν λόγον αἰτιᾶσθαι δυσχερῆ εἷναι Platão alegar que o raciocínio é difícil 3 pôr em discussão; acusar: οἷον θεοὺς βροτοὶ αἰτιόωνται Homero como os mortais acusam os deuses! αἰτιᾶσθαί τινα ποιεῖν τι Heródoto acusar alguém de fazer algo, αἰτίαν κατά τινος αἰτιᾶσθαι Antifonte fazer uma acusação contra alguém 4 rar. louvar: σὲ τίς αἰτιᾶται νομοθέτην ἀγαθὸν γεγονέναι; Platão quem te louva por teres sido um bom legislador? 〈αἰτία〉","considerar causa; pretextar; acusar; louvar"],
        [1160,"αἰτιατέον","adj. verb. de αἰτιάομαι.","adjetivo verbal de αἰτιάομαι"],
        [1161,"αἰτίζω","(só pres. e part. aor. poét. αἰτίσσας) pedir com insistência; mendigar algo, ac., a alguém, dat. 〈αἰτέω〉","pedir insistentemente; mendigar"],
        [1162,"αἰτιολογέω-ῶ","argumentar sobre as causas. 〈αἰτία, λόγος〉","argumentar sobre as causas"],
        [1163,"αἴτιος, α, ον","1 que é causa de, gen. 2 responsável; culpado; acusado de, gen. ♦ ὁ αἴτιος 3 o acusado ♦ τὸ αἴτιον 4 causa; razão; motivo: τοῦτο αἴτιον ὅτι isso é causa de que. 〈αἰτία〉","causador; responsável; culpado; causa"],
        [1164,"αἰτίωμα, ατος (τό)","bíbl. = αἰτίαμα.","forma bíblica de αἰτίαμα"],
        [1165,"αἰτιόωνται","e αἰτιόωντο 3ª pl. pres. e impf. ép. de αἰ­τιάομαι.","formas épicas de αἰτιάομαι"],
        [1166,"αἰτιόῳο","e αἰτιόῳτο 2ª e 3ª sing. opt. ép. de αἰτιάομαι.","optativo épico de αἰτιάομαι"],
        [1167,"αἰτναῖος, ου (ὁ)","etneu, peixe do mar.","peixe etneu"],
        [1168,"Αἰτναῖος, α, ον","1 do Etna 2 grande como o Etna; gigantesco 3 da região do Etna. 〈Αἴτνη〉","do Etna; gigantesco"],
        [1169,"Αἴτνη, ης (ἡ)","Etna, monte, vulcão e cidade da Sicília .","Etna"],
        [1170,"Αἰτωλία, ας (ἡ)","Etólia, região da Grécia.","Etólia"],
        [1171,"Αἰτωλικός, ή, όν","etólio. 〈Αἰτωλία〉","etólio"],
        [1172,"Αἰτωλίς, ιδος","(fem.) etólia. 〈Αἰτωλία〉","etólia"],
        [1173,"Αἰτωλός, οῦ","(masc.) etólio. 〈Αἰτωλία〉","etólio"],
        [1174,"αἴφνης","adv. subitamente; de repente.","subitamente"],
        [1175,"αἰφνίδιος, α, ον","1 repentino; súbito; imprevisto ♦ αἰφνίδιον adv. 2 subitamente; de repente ♦ τὸ αἰφνίδιον 3 o imprevisto. 〈αἴφνης〉","repentino; súbito; imprevisto"],
        [1176,"αἰφνιδίως","adv. subitamente; de repente.","subitamente; de repente"],
        [1177,"ἀΐχθην","aor. pas. de ἀΐσσω.","aoristo passivo de ἀΐσσω"],
        [1178,"αἰχμά","dór. = αἰχμή.","forma dórica de αἰχμή"],
        [1179,"αἰχμάεις","dór. = αἰχμήεις.","forma dórica de αἰχμήεις"],
        [1180,"αἰχμάζω","(fut. αἰχμάσω, aor. ᾔχμασα) 1 brandir ou arremessar a lança 2 ferir. 〈αἰχμή〉","brandir lança; ferir"]
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
   LOTE 51 — registros 1181–1230
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    source.bibliographicTerms.push(
        { key: "Hipócrates", type: "biblio", text: "Hipócrates — médico grego dos séculos V–IV a.C.; o nome também designa tradicionalmente o corpus hipocrático." },
        { key: "Apiano", type: "biblio", text: "Apiano de Alexandria — historiador grego do século II d.C., autor de uma História Romana." },
        { key: "Antologia Palatina", type: "biblio", text: "Antologia Palatina — coleção de epigramas gregos preservada sobretudo pelo manuscrito Palatinus gr. 23." },
        { key: "Calímaco", type: "biblio", text: "Calímaco de Cirene — poeta e erudito helenístico dos séculos IV–III a.C., ligado à Biblioteca de Alexandria." }
    );
    const entries = [
        [1181,"αἰχμαλωσία, ας (ἡ)","1 cativeiro de guerra; cativeiro 2 grupo de cativos de guerra. 〈αἰχμάλωτος〉","cativeiro; grupo de cativos"],
        [1182,"αἰχμαλωτεύω","bíbl. = αἰχμαλωτίζω.","forma bíblica de αἰχμαλωτίζω"],
        [1183,"αἰχμαλωτίζω","1 tornar prisioneiro de guerra 2 escravizar; subjugar: ἕτερον νόμον αἰχμαλωτίζοντά με ἐν τῷ νόμῳ τῆς ἁμαρτίας Novo Testamento outra lei que me torna escravo da lei do pecado 3 cativar; seduzir: οἱ αἰχμαλωτίζοντες γυναικάρια σεσωρευμένα ἁμαρτίας Novo Testamento os que seduzem mulherzinhas sobrecarregadas de pecados. 〈αἰχμάλωτος〉","prender; escravizar; cativar"],
        [1184,"αἰχμαλωτίς, ίδος","(fem.) prisioneira de guerra; cativa. 〈αἰχμάλωτος〉","prisioneira de guerra"],
        [1185,"αἰχμάλωτος, ος, ον","1 apreendido na guerra: αἰχμάλωτα χρήματα bens apresados na guerra 2 de prisioneiro de guerra: αἰχ. δουλοσύνη servidão reservada aos prisioneiros, αἰχ. εὐνά leito reservado à mulher prisioneira ♦ οἱ αἰχμάλωτοι 3 prisioneiros de guerra; cativos ♦ τὰ αἰχμάλωτα 4 despojos de guerra. 〈αἰχμή, ἁλίσκομαι〉","prisioneiro de guerra; despojos"],
        [1186,"αἰχμή, ῆς (ἡ)","1 ponta; ponta da lança 2 arma em geral; lança; dardo 3 guerra; luta 4 poder apoiado em força militar; dominação; autoridade 5 espírito belicoso.","ponta; lança; guerra; poder militar"],
        [1187,"αἰχμήεις, ήεσσα, ῆεν","armado de lança; belicoso. 〈αἰχμή〉","armado de lança; belicoso"],
        [1188,"αἰχμητά (ὁ)","αἰχμητής.","αἰχμητής"],
        [1189,"αἰχμητής, οῦ (ὁ)","1 combatente armado de lança; guerreiro ♦ adj. 2 belicoso; terrível 3 pontiagudo. 〈αἰχμή〉","lanceiro; guerreiro; belicoso; pontiagudo"],
        [1190,"αἰχμοφόρος, ου (ὁ)","portador de lança; guarda-costas armado de lança. 〈αἰχμή, φέρω〉","portador de lança; guarda-costas"],
        [1191,"αἷψα","adv. imediatamente; rapidamente; prontamente.","imediatamente; rapidamente"],
        [1192,"αἰψηρός, ά, όν","pronto; rápido. 〈αἷψα〉","pronto; rápido"],
        [1193,"ἀΐω1","(só pres. e impf.) 1 perceber pela audição, ouvir algo, ac., ou alguém, gen. 2 perceber pelos olhos; ver; notar 3 escutar; dar ouvidos a; obedecer a, gen.","ouvir; ver; perceber; obedecer"],
        [1194,"ἀΐω2","(só impf. ἄϊον) exalar: φίλον ἄϊον ἦτορ Homero meu espírito exalava.","exalar"],
        [1195,"ἀϊών1, όνος","e ἀΐων, ονος (ἡ) dór. = ἠΐων.","forma dórica de ἠΐων"],
        [1196,"αἰών2, ῶνος (ὁ,","poét. ἡ) 1 tempo; duração da vida; vida 2 força vital; alma 3 idade; geração; época: ὁ μέλλων αἰών o tempo futuro, a posteridade, ὁ αἰὼν ἐρχόμενος o tempo vindouro, ὁ αἰὼν οὗτος o tempo presente 4 tempo indefinido; século; eternidade.","tempo; vida; época; eternidade"],
        [1197,"αἰώνιος, ος, ον","durável; perpétuo; eterno. 〈αἰών2〉","eterno; perpétuo"],
        [1198,"αἰώρα, ας (ἡ)","1 aparelho para balançar; rede 2 ação de suspender-se, de balançar; oscilação; balanço. 〈ἀείρω〉","rede; suspensão; balanço"],
        [1199,"αἰωρέω-ῶ","(fut. αἰωρήσω, aor. ᾐώρησα, perf. desus.; pas. aor. ᾐωρήθην, perf. ᾐώρημαι) 1 manter suspenso no ar; balançar: ὄφεις θλίβων καὶ ὑπὲρ τῆς κεφαλῆς αἰωρῶν Demóstenes segurando firme as serpentes e mantendo-as suspensas acima da cabeça, αἰ. γυναῖκα ἐπὶ κλίνης φερομένην Hipócrates balançar uma mulher enquanto é transportada em seu leito 2 pendurar 3 animar; excitar: ᾐώρει δὲ αὐτοὺς ἡ εὐπραξία καὶ ἐλπίς Apiano o sucesso e a esperança os exaltavam ♦ pas. 4 balançar-se; oscilar; flutuar: αἰωρεῖται δὴ ἄνω καὶ κάτω Platão [a água] oscila para cima e para baixo, νῆες αἰωρούμεναι πρὸ λιμένος Platão naus que flutuam diante do porto 5 estar pendurado: αἰγὸς δέρματα περὶ τοὺς ὤμους αἰωρεύμενα Heródoto peles de cabra suspensas de seus ombros 6 ser elevado moralmente; ser arrebatado: αἰωρεῖσθαι τὴν ψυχήν Xenofonte ter a alma arrebatada 7 estar em suspenso; balançar; hesitar: αἰ. ἐν κινδύνῳ Tucídides estar à beira do perigo 8 estar suspenso; ameaçar: ἡ δίκη αἰωρουμένη ὑπὲρ κεφαλῆς Plutarco o castigo suspenso sobre sua cabeça 9 estar suspenso a; depender de: αἰωρεῖσθαι ἔν τινι Platão depender de alguém. 〈αἰώρα〉","suspender; balançar; excitar; flutuar; hesitar"],
        [1200,"Ἀκαδημαϊκός, ή, όν","da Academia; platônico. 〈Ἀκαδήμεια〉","acadêmico; platônico"],
        [1201,"Ἀκαδήμεια","e Ἀκαδημία, ας (ἡ) 1 Academia, ginásio de Atenas 2 Academia, escola filosófica platônica.","Academia de Atenas; escola platônica"],
        [1202,"ἀκαθαρσία, ας (ἡ)","1 sujeira; imundícia 2 impureza; nódoa 3 corrupção; depravação. 〈ἀ-, κάθαρτος〉","sujeira; impureza; corrupção"],
        [1203,"ἀκάθαρτος, ος, ον","1 impuro; maculado; não purificado 2 bíbl. sem relação com Deus 3 impróprio para purificar. 〈ἀ-, καθαίρω〉","impuro; não purificado"],
        [1204,"ἀκαιρέω-ῶ","1 não ter tempo ou oportunidade ♦ méd. 2 bíbl. não ter oportunidade. 〈ἄκαιρος〉","não ter tempo ou oportunidade"],
        [1205,"ἀκαιρία, ας (ἡ)","1 falta de tato; inconveniência 2 carência de tempo; contratempo; estação desfavorável 3 falta de medida (em discurso). 〈ἄκαιρος〉","inconveniência; contratempo; falta de medida"],
        [1206,"ἄκαιρος, ος, ον","1 inoportuno; fora de época 2 importuno; inconveniente 3 impróprio para algo, inf. ♦ ἄκαιρα adv. 4 inoportunamente. 〈ἀ-, καιρός〉","inoportuno; inconveniente"],
        [1207,"ἀκαίρως","adv. a contratempo; fora de época; inoportunamente.","inoportunamente"],
        [1208,"ἀκάκας","dór. = ἄκακος.","forma dórica de ἄκακος"],
        [1209,"ἀκάκητα","nom. ép. (ὁ) aquele que não faz o mal; benéfico, epít. de Hermes e de Prometeu. 〈ἄκακος〉","benéfico; epíteto de Hermes e Prometeu"],
        [1210,"ἀκακία, ας (ἡ)","ausência de maldade; inocência; pureza. 〈ἄκακος〉","inocência; pureza"],
        [1211,"ἄκακος, ος, ον","isento de maldade; ingênuo. 〈ἀ-, κακός〉","inocente; ingênuo"],
        [1212,"ἀκαλαρρείτης","só gen. ép. ἀκαλαρρείταο (masc.) que corre com tranqüilidade; de suave fluxo. 〈ἀκαλός, ῥέω〉","de suave fluxo"],
        [1213,"ἀκαλάρροος, ος, ον","ἀκαλαρρείτης.","ἀκαλαρρείτης"],
        [1214,"ἀκαλλής, ής, ές","sem beleza; sem encanto. 〈ἀ-, κάλλος〉","sem beleza; sem encanto"],
        [1215,"ἀκαλλιέρητος, ος, ον","não aceito pelos deuses; de mau augúrio. 〈ἀ-, καλλιερέω〉","de mau augúrio"],
        [1216,"ἀκαλλώπιστος, ος, ον","não ornado; sem adorno. 〈ἀ-, καλλωπίζω〉","sem adorno"],
        [1217,"ἀκαλός, ή, όν","tranqüilo; silencioso.","tranquilo; silencioso"],
        [1218,"ἀκάλυπτος, ος, ον","não velado; a descoberto. 〈ἀ-, καλύπτω〉","descoberto; não velado"],
        [1219,"ἀκαλυφής, ής, ές","ἀκάλυπτος.","ἀκάλυπτος"],
        [1220,"ἀκάμας, αντος","(masc., fem.) 1 infatigável 2 rar. incessante. 〈ἀ-, κάμνω〉","infatigável; incessante"],
        [1221,"ἀκάματος, ος","e η, ον 1 infatigável 2 que não causa fadiga ♦ ἀκάματα adv. 3 infatigavelmente.","infatigável; que não causa fadiga"],
        [1222,"ἄκαμπτος, ος, ον","1 que não se curva; firme; inflexível 2 não dobrado; não curvado; rígido 3 que permanece firme; resistente a, πρός e ac. 〈ἀ-, κάμπτω〉","firme; inflexível; resistente"],
        [1223,"ἄκανθα, ης (ἡ)","1 acanto; espinho 2 cardo 3 espinho do porco-espinho; língua da serpente 4 espinha de peixe; espinha dorsal 5 coisa espinhosa; dificuldade.","acanto; espinho; espinha"],
        [1224,"ἀκανθίας, ου (ὁ)","1 espécie de tubarão 2 espécie de cigarra.","tubarão; cigarra"],
        [1225,"ἀκάνθινος, η, ον","1 cheio de espinhos 2 de espinho; feito de espinho 3 feito com madeira de acácia ou com casca de cardo. 〈ἄκανθα〉","espinhoso; feito de espinho"],
        [1226,"ἀκανθώδης, ης, ες","1 que tem ou produz espinhos; armado de espinhos 2 espinhoso. 〈ἄκανθα〉","espinhoso"],
        [1227,"ἄκαπνος, ος, ον","1 que não faz fumaça; sem fumaça: ἄ. θύος Antologia Palatina incenso sem fumaça, ἄκαπνα θύειν Calímaco sacrificar para si sem fumaça, i. e., viver a expensas de outrem 2 onde não há fumaça; não esfumaçado. 〈ἀ-, καπνός〉","sem fumaça; não esfumaçado"],
        [1228,"ἀκάρδιος, ος, ον","1 sem coração 2 bíbl. sem razão; sem discernimento; leviano 3 sem cerne (madeira). 〈ἀ-, καρδία〉","sem coração; sem discernimento"],
        [1229,"ἀκαρής, ής, ές","1 que não se pode cortar ou aparar; muito pequeno ou muito curto: ἀκαρῆ [χρόνον] por um instante, οὐδ’ ἀκαρῆ nem um instante, de modo nenhum, παρ’ ἀκαρῆ quase nada, ἐν ἀκαρεῖ [χρόνῳ] em um momento muito curto. 〈ἀ-, κείρω〉","muito pequeno; por um instante"],
        [1230,"Ἀκαρνάν, ᾶνος (ὁ)","1 Acárnan, ancestral dos acarnânios ♦ adj. 2 acarnânio.","Acárnan; acarnânio"]
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
   LOTE 52 — registros 1231–1280
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [1231,"Ἀκαρνανία, ας (ἡ)","Acarnânia, região da Grécia.","Acarnânia"],
        [1232,"Ἀκαρνανικός, ή, όν","da Acarnânia.","da Acarnânia"],
        [1233,"ἀκαρπία, ας (ἡ)","improdutividade; esterilidade. 〈ἄκαρπος〉","esterilidade"],
        [1234,"ἄκαρπος, ος, ον","1 sem fruto; estéril; infértil 2 infrutífero; sem proveito 3 rar. que torna estéril. 〈ἀ-, καρπός〉","estéril; infrutífero"],
        [1235,"ἀκάρπως","adv. sem fruto; de modo estéril.","sem fruto; esterilmente"],
        [1236,"ἀκάρπωτος, ος, ον","que não produz frutos; estéril; inculto. 〈ἀ-, καρπόω〉","estéril; inculto"],
        [1237,"ἀκαρτέρητος, ος, ον","insuportável. 〈ἀ-, καρτερέω〉","insuportável"],
        [1238,"ἀκασκᾶ","e ἄκασκα adv. sem ruído; suavemente.","sem ruído; suavemente"],
        [1239,"ἀκασκαῖος, α, ον","calmo; tranqüilo. 〈ἀκασκᾶ〉","calmo; tranquilo"],
        [1240,"ἀκατάβλητος, ος, ον","que não se pode abater ou vencer. 〈ἀ-, καταβάλλω〉","invencível"],
        [1241,"ἀκατάγγελτος, ος, ον","não declarado (guerra). 〈ἀ-, καταγγέλλω〉","não declarado"],
        [1242,"ἀκατάγνωστος, ος, ον","1 não condenado 2 bíbl. não condenável; inocente, irrepreensível. 〈ἀ-, καταγιγνώσκω〉","não condenado; irrepreensível"],
        [1243,"ἀκατακάλυπτος, ος, ον","não velado; não coberto. 〈ἀ-, κατακαλύπτω〉","não velado; não coberto"],
        [1244,"ἀκατακόσμητος, ος, ον","não organizado; não disposto em ordem. 〈ἀ-, κατακοσμέω〉","desorganizado"],
        [1245,"ἀκατάκριτος, ος, ον","bíbl. não submetido a julgamento legal; não julgado por processo formal; não condenado. 〈ἀ-, κατακρίνω〉","não julgado; não condenado"],
        [1246,"ἀκατάληπτος, ος, ον","1 que não se pode tomar ou tocar 2 inexpugnável; invencível 3 incompreensível. 〈ἀ-, καταλαμβάνω〉","inapreensível; invencível; incompreensível"],
        [1247,"ἀκατάλυτος, ος, ον","indestrutível; indissolúvel; perpétuo. 〈ἀ-, καταλύω〉","indestrutível; indissolúvel; perpétuo"],
        [1248,"ἀκατάπαυστος, ος, ον","1 incessante; interminável 2 que não se pode parar; irresistível. 〈ἀ-, καταπαύω〉","incessante; irresistível"],
        [1249,"ἀκατάσκευος, ος, ον","não equipado; sem arte; despojado. 〈ἀ-, κατασκευή〉","não equipado; despojado"],
        [1250,"ἀκαταστασία, ας (ἡ)","1 mobilidade de caráter; instabilidade; inconstância 2 agitação; tumulto 3 insurreição; revolução. 〈ἀκατάστατος〉","instabilidade; tumulto; revolução"],
        [1251,"ἀκατάστατος, ος, ον","1 instável; agitado; desordenado 2 que não deixa sedimento 3 bíbl. incontrolável; indomável. 〈ἀ-, καθίστημι〉","instável; desordenado; indomável"],
        [1252,"ἀκαταστάτως","adv. com ἔχειν estar sem repouso.","sem repouso"],
        [1253,"ἀκατάσχετος, ος, ον","incontrolável; irreprimível; irrefreável. 〈ἀ-, κατέχω〉","irrefreável"],
        [1254,"ἀκατασχέτως","adv. de modo incontrolável.","incontrolavelmente"],
        [1255,"ἀκατάψευστος, ος, ον","não imaginário; não fabuloso. 〈ἀ-, καταψεύδομαι〉","não fabuloso"],
        [1256,"ἀκάτειος, ος, ον","1 de barco ♦ τὸ ἀκάτειον 2 pequena vela de embarcação. 〈ἄκατος〉","de barco; pequena vela"],
        [1257,"ἀκάτιον, ου (τό)","1 barco ligeiro; barco de pesca 2 espécie de sapato feminino 3 vela auxiliar de embarcação. 〈ἄκατος〉","barco ligeiro; sapato; vela auxiliar"],
        [1258,"ἀκατονόμαστος, ος, ον","inominável. 〈ἀ-, κατονομάζω〉","inominável"],
        [1259,"ἄκατος, ου (ἡ","e ὁ) 1 barco ligeiro; barca 2 vasilha em forma de barca.","barco ligeiro; vasilha"],
        [1260,"ἄκαυστος, ος, ον","1 não queimado 2 não inflamável 3 que não cessa de queimar. 〈ἀ-, καίω〉","não queimado; não inflamável; inextinguível"],
        [1261,"ἀκαχείατο, ἀκάχημαι, ἀκάχησα, ἀκαχήσω","cf. ἄχω.","cf. ἄχω"],
        [1262,"ἀκαχίζω","(só pres.) 1 afligir; magoar ♦ méd. 2 sentir dor; sentir aflição; estar atormentado.","afligir; sentir dor"],
        [1263,"ἀκαχμένος, ος, ον","1 aguçado; pontiagudo 2 armado de, dat. 〈ἀκή〉","pontiagudo; armado de"],
        [1264,"ἀκαχοίμην, ἀκαχόμην, ἀκαχών","cf. ἄχω.","cf. ἄχω"],
        [1265,"ἀκειόμενος","part. pres. ép. de ἀκέω.","particípio presente épico de ἀκέω"],
        [1266,"ἀκείρατος, ος, ον","não cortado. 〈ἀ-, κείρω〉","não cortado"],
        [1267,"ἀκέλευστος, ος, ον","que não recebeu ordens; que age espontaneamente; voluntário. 〈ἀ-, κελεύω〉","voluntário; espontâneo"],
        [1268,"ἀκέντητος, ος, ον","1 que não precisa ser estimulado; não aguilhoado 2 não mosqueado. 〈ἀ-, κεντέω〉","não aguilhoado; não mosqueado"],
        [1269,"ἀκέο","2ª sing. pres. imper. méd. jôn. de ἀκέω1.","imperativo médio jônico de ἀκέω1"],
        [1270,"ἀκέομαι","cf. ἀκέω1.","cf. ἀκέω1"],
        [1271,"ἀκέοντο","3ª pl. impf. méd. ép. de ἀκέω1.","imperfeito médio épico de ἀκέω1"],
        [1272,"ἀκέραιος, ος, ον","1 não misturado; puro (líquido) 2 incólume; intacto; não maculado por algo, gen.; ἐξ ἀκεραίου de novo ou numa situação diferente 3 íntegro; incorruptível; sincero (pessoa) 4 bíbl. simples; inocente; ingênuo. 〈ἀ-, κεράννυμι〉","puro; intacto; sincero; inocente"],
        [1273,"ἀκερδής, ής, ές","1 sem proveito; não vantajoso; funesto 2 não ávido de ganho; desinteressado. 〈ἀ-, κέρδος〉","sem proveito; desinteressado"],
        [1274,"ἀκερδῶς","adv. sem proveito; desinteressadamente.","sem proveito; desinteressadamente"],
        [1275,"ἀκερσεκόμης, ου","(masc.) de cabelo não aparado; de cabelos longos, i.e., em plena juventude. 〈ἀ-, κείρω, κόμη〉","de cabelos longos; jovem"],
        [1276,"ἀκέσιμος, ος, ον","próprio para curar; salutar. 〈ἀκέομαι〉","salutar; curativo"],
        [1277,"ἄκεσις, εως (ἡ)","1 cura 2 emplastro. 〈ἀκέομαι〉","cura; emplastro"],
        [1278,"ἄκεσμα, ατος (τό)","remédio. 〈ἀκέομαι〉","remédio"],
        [1279,"ἄκεσσαι, ἀκέσσαιο","2ª sing. imper. e opt. aor. méd. poét. de ἀκέω.","imperativo e optativo aoristo médio poético de ἀκέω"],
        [1280,"ἀκεστήρ, ῆρος","(masc.) que cura; que acalma. 〈ἀκέομαι〉","curador; apaziguador"]
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
   LOTE 53 — registros 1281–1330
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [1281,"ἀκεστικός, ή, όν","1 próprio para curar ou remediar ♦ ἡ ἀκεστική [τέχνη] 2 o ofício de remendão. 〈ἀκέομαι〉","curativo; arte de remendão"],
        [1282,"ἀκεστός, ή, όν","curável. 〈ἀκέομαι〉","curável"],
        [1283,"ἀκέστρα, ας (ἡ)","agulha para remendar. 〈ἀκέομαι〉","agulha de remendar"],
        [1284,"ἀκέστρια, ας (ἡ)","costureira; remendeira. 〈ἀκέομαι〉","costureira; remendeira"],
        [1285,"ἀκέφαλος, ος, ον","1 sem cabeça 2 sem começo, incompleto 3 Métr. acéfalo, verso com o primeiro pé incompleto 4 privado dos direitos civis; rebaixado. 〈ἀ-, κεφαλή〉","sem cabeça; incompleto; acéfalo"],
        [1286,"ἀκέω1","freq. ἀκέομαι-οῦμαι (fut. ἀκέσομαι, át. ἀκοῦμαι, aor. ἠκεσάμην, perf. ἤκεσμαι e ἀκήκεσμαι) 1 cuidar de; curar, ac. 2 consertar 3 reparar (um dano); socorrer.","curar; reparar; socorrer"],
        [1287,"ἀκέω2","estar em silêncio; ficar silencioso; ἀκέων silenciosamente; em silêncio.","ficar em silêncio"],
        [1288,"ἀκήδεστος, ος, ον","1 negligenciado 2 sem as honras da sepultura; insepulto. 〈ἀ-, κήδομαι〉","negligenciado; insepulto"],
        [1289,"ἀκηδέστως","adv. sem cuidado; sem piedade.","sem cuidado; sem piedade"],
        [1290,"ἀκήδευτος, ος, ον","insepulto. 〈ἀ-, κηδεύω〉","insepulto"],
        [1291,"ἀκηδέω-ῶ","negligenciar; não cuidar de, gen. 〈ἀκηδής〉","negligenciar"],
        [1292,"ἀκηδής, ής, ές","1 sem preocupação ou temor; negligente; que não cuida de, gen. 2 negligenciado 3 privado de sepultura. 〈ἀ-, κῆδος〉","negligente; insepulto"],
        [1293,"ἀκήκοα","cf. ἀκούω.","cf. ἀκούω"],
        [1294,"ἀκηκόειν","m.-q.-perf. jôn. de ἀκούω.","mais-que-perfeito jônico de ἀκούω"],
        [1295,"ἀκήλητος, ος, ον","1 que não se deixa seduzir ou convencer 2 que não se consegue encantar; intratável. 〈ἀ-, κηλέω〉","não seduzível; intratável"],
        [1296,"ἄκημα, ατος (τό)","cura; alívio. 〈ἀκέομαι〉","cura; alívio"],
        [1297,"ἀκήν","adv. tranqüilamente; em silêncio.","em silêncio"],
        [1298,"ἀκηράσιος, ος, ον","1 intacto; fresco, em pleno vigor 2 pu­ro; sem mistura. 〈ἀ-, κεράννυμι〉","intacto; puro"],
        [1299,"ἀκήρατος, ος, ον","ἀκηράσιος.","ἀκηράσιος"],
        [1300,"ἀκήριος, ος, ον1","1 imortal; indestrutível; intacto 2 que não causa a morte; inofensivo. 〈ἀ-, κήρ〉","imortal; inofensivo"],
        [1301,"ἀκήριος, ος, ον2","1 sem vida; morto 2 desanimado; sem coragem; covarde. 〈ἀ-, κῆρ〉","sem vida; covarde"],
        [1302,"ἀκηρυκτεί","e ἀκηρυκτί adv. sem a proclamação do arauto; sem proclamação. 〈ἀκήρυκτος〉","sem proclamação"],
        [1303,"ἀκήρυκτος, ος, ον","1 não proclamado pelo arauto; não declarado 2 desconhecido; sem glória (pessoa) 3 rar. de que não se tem notícias 4 implacável (sentimento). 〈ἀ-, κηρύσσω〉","não proclamado; desconhecido; implacável"],
        [1304,"ἀκηρύκτως","adv. sem arauto; sem proclamação.","sem proclamação"],
        [1305,"ἀκηχέδαται, ἀκηχεμένος","cf. ἄχω.","cf. ἄχω"],
        [1306,"ἀκίβδηλος, ος, ον","1 leal; honesto 2 não falsificado; genuíno. 〈ἀ-, κίβδηλος〉","honesto; genuíno"],
        [1307,"ἀκιβδήλως","adv. sem falsificação.","sem falsificação"],
        [1308,"ἀκιδνός, ή, όν","1 fraco; mesquinho 2 insípido.","fraco; mesquinho; insípido"],
        [1309,"ἀκίθαρις, ις, ι","gen. ιος sem cítara. 〈ἀ-, κιθάρα〉","sem cítara"],
        [1310,"ἄκικυς, υος","(masc., fem.) 1 sem força 2 que tira a força; enfraquecedor. 〈ἀ-, κίκυς〉","sem força; enfraquecedor"],
        [1311,"ἀκινάκης, ου (ὁ)","punhal persa. [persa]","punhal persa"],
        [1312,"ἀκίνδυνος, ος, ον","1 que não corre perigo; seguro 2 que não expõe a risco; garantido. 〈ἀ-, κίνδυνος〉","seguro; sem perigo"],
        [1313,"ἀκινδύνως","adv. sem perigo.","sem perigo"],
        [1314,"ἀκινησία, ας (ἡ)","1 ausência de movimento; imobilidade 2 pausa; parada. 〈ἀκίνητος〉","imobilidade; pausa"],
        [1315,"ἀκίνητος, ος, ον","1 que não se move; inativo; preguiçoso 2 que não é movido por outrem; que não é removido ou transformado; estável 3 que não pode ser movido ou comovido; firme; obstinado 4 que não deve ser removido, tocado ou mencionado; inviolável. 〈ἀ-, κινέω〉","imóvel; estável; inviolável"],
        [1316,"ἀκινήτως","adv. sem movimento ou sem emoção; imutavelmente; obstinadamente.","sem movimento; imutavelmente; obstinadamente"],
        [1317,"ἀκίς, ίδος (ἡ)","1 ponta 2 lança; dardo; agulha; espinho; arpão; esporão de navios 3 aguilhão (de sentimento) 4 pl. sofrimentos atrozes; pontadas.","ponta; lança; agulha; espinho"],
        [1318,"ἀκίχητος, ος, ον","1 que não se pode alcançar; inapreensível; inacessível 2 inexorável. 〈ἀ-, κιχάνω〉","inapreensível; inexorável"],
        [1319,"ἀκκώ, οῦς (ἡ)","mulher velha de cara feia, espécie de bicho-papão; cuca.","velha feia; bicho-papão"],
        [1320,"ἄκλαυστος, ος, ον","ἄκλαυτος.","ἄκλαυτος"],
        [1321,"ἄκλαυτος, ος, ον","1 privado de lamento fúnebre; não chorado 2 que não chora; sem lágrimas. 〈ἀ-, κλαίω〉","não chorado; sem lágrimas"],
        [1322,"ἀκλεής, ής, ές","1 sem fama; desconhecido; inglório 2 ignominioso. 〈ἀ-, κλέος〉","inglório; ignominioso"],
        [1323,"ἄκλειστος, ος, ον","não fechado. 〈ἀ-, κλείω〉","não fechado"],
        [1324,"ἀκλειῶς","ép. = ἀκλεῶς.","forma épica de ἀκλεῶς"],
        [1325,"ἀκλεῶς","adv. sem glória.","sem glória"],
        [1326,"ἀκληεῖς","nom. pl. de ἀκλεής.","nominativo plural de ἀκλεής"],
        [1327,"ἄκληρος, ος, ον","1 que não participa da partilha da herança; pobre 2 não partilhado; sem dono; sem herdeiro. 〈ἀ-, κλῆρος〉","sem herança; pobre; sem dono"],
        [1328,"ἀκλήρωτος, ος, ον","1 não contemplado na partilha; sem a sua parte de, gen. 2 sem partilha por sorteio. 〈ἀ-, κληρόω〉","sem parte; sem sorteio"],
        [1329,"ἄκλῃστος","át. = ἄκλειστος.","forma ática de ἄκλειστος"],
        [1330,"ἄκλητος, ος, ον","não chamado. 〈ἀ-, καλέω〉","não chamado"]
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
   LOTE 54 — registros 1331–1380
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    if (!source.bibliographicTerms.some((term) => term.key === "cop.")) {
        source.bibliographicTerms.push({ key: "cop.", type: "abbr", text: "copulativo (alfa copulativo)" });
    }

    const entries = [
        [1331,"ἀκλινής, ής, ές","que não pende de nenhum lado; sem inclinação; estável; firme. 〈ἀ-, κλίνω〉","estável; firme"],
        [1332,"ἄκλυστος, ος, ον","não atingido pelas ondas. 〈ἀ-, κλύζω〉","não atingido pelas ondas"],
        [1333,"ἄκλυτος, ος, ον","1 não ouvido 2 sem rumor; calmo. 〈ἀ-, κλύω〉","não ouvido; calmo"],
        [1334,"ἀκμά, ᾶς (ἡ)","dór. = ἀκμή.","forma dórica de ἀκμή"],
        [1335,"ἀκμάζω","(impf. ἤκμαζον) 1 estar com todo o vigor; estar em pleno desenvolvimento; estar no auge 2 desabrochar; florescer; ter a plenitude da força graças a, dat. 3 ter toda a força para, inf.; impes. ἀκμάζει é o momento certo de, é tempo de, inf. 4 (fruto) estar no ponto; estar maduro. 〈ἀκμή〉","florescer; estar no auge"],
        [1336,"ἀκμαῖος, α, ον","1 que está no auge, na plenitude; florescente; vigoroso 2 no mais alto ponto para, πρός e ac. ♦ ἀκμαῖα adv. 3 no momento apropriado; na ocasião oportuna ♦ τὸ ἀκμαιότατον 4 o ponto mais alto: ἀ. τῆς ἠμέρας o ponto mais alto do dia, i.e., o meio-dia. 〈ἀκμή〉","vigoroso; momento oportuno"],
        [1337,"ἀκμή, ῆς (ἡ)","1 ponta; extremidade 2 o ponto mais alto; ponto culminante; a melhor fase 3 ápice; apogeu, gen. 4 o melhor momento; momento oportuno para, gen., inf. ♦ ἀκμήν adv. 5 bíbl. ainda; até agora.","ápice; auge; ocasião oportuna"],
        [1338,"ἀκμηνός, ή, όν","que está com toda a sua força; totalmente desenvolvido; maduro. 〈ἀκμή〉","plenamente desenvolvido; maduro"],
        [1339,"ἄκμηνος, ος, ον","em jejum de algo, gen.","em jejum"],
        [1340,"ἀκμής, ῆτος","(masc., fem. e n.) não fatigado; bem disposto. 〈ἀ-, κάμνω〉","não fatigado; bem disposto"],
        [1341,"ἀκμόθετον, ου (τό)","banca da bigorna. 〈ἄκμων, τίθημι〉","banca da bigorna"],
        [1342,"ἀκμόνιον, ου (τό)","pequena bigorna. 〈ἄκμων〉","pequena bigorna"],
        [1343,"ἄκμων, ονος (ὁ)","1 bigorna 2 baluarte.","bigorna; baluarte"],
        [1344,"ἄκνηστις, ιος (ἡ)","1 espinha dorsal 2 urtiga.","espinha dorsal; urtiga"],
        [1345,"ἄκνισος, ος, ον","1 sem cheiro de gordura; sem sacrifício 2 sem gordura; magro; frugal (comida). 〈ἀ-, κνῖσα〉","sem gordura; frugal"],
        [1346,"ἀκοή, ῆς (ἡ)","1 audição (sentido): ἀκοὴν ἢ ὄψιν κτᾶσθαι Platão adquirir a faculdade de ouvir ou de ver 2 ouvido: μολεῖσθαι εἰς ἀκοάν Ésquilo haver de chegar aos ouvidos 3 atenção; obediência: ὀξεῖαν ἀκοὴν τοῖς ἐμοῖς λόγοις διδούς Sófocles concedendo às minhas palavras uma viva atenção; ἀκοῇ ἀκούσετε Novo Testamento ouvireis com atenção 4 som; rumor; notícia; reputação; tradição; relato: ἕκαθεν γίγνετ’ ἀκουή Homero de longe vinha um som, ἔβη μετὰ πατρὸς ἀκουήν Homero foi buscar notícias do pai, ἀκοὰν ἁδεῖαν κλύειν Píndaro ouvir relatos agradáveis, ouvir com agrado elogios a si próprio, ter boa fama, ἀκοῆς κρείσσων Tucídides superior à sua reputação, σκοτειναὶ ἀκοαί Platão tradições obscuras 5 bíbl. pregação: Κύριε, τίς ἐπίστευσεν τῇ ἀκοῇ ἡμῶν; Novo Testamento Senhor, quem deu crédito à nossa pregação? 6 pl. aparelho auditivo; ouvido: περιβρομέεσκον ἀκουαί a.r. seus ouvidos zumbiam.","audição; ouvido; notícia; pregação"],
        [1347,"ἀκοίμητος, ος, ον","1 que não dorme; insone 2 que não descansa; contínuo 3 sempre desperto; vigilante. 〈ἀ-, κοιμάω〉","insone; vigilante"],
        [1348,"ἀκοινώνητος, ος, ον","1 não colocado em comum; não partilhado com alguém, gen. 2 que não tem sua parte de, gen. ou dat. 3 que não se comunica; insociável 4 que não pode ser comunicado. 〈ἀ-, κοινωνέω〉","não partilhado; insociável"],
        [1349,"ἀκοίτης, ου (ὁ)","esposo. 〈ἀ- cop., κοίτη〉","esposo"],
        [1350,"ἄκοιτις, ιος (ἡ)","1 esposa 2 rar. concubina. 〈ἀ- cop., κοίτη〉","esposa; concubina"],
        [1351,"ἀκολάκευτος, ος, ον","1 que não é lisonjeado; inacessível à lisonja 2 rar. que não lisonjeia. 〈ἀ-, κολακεύω〉","não lisonjeado; não bajulador"],
        [1352,"ἀκολασία, ας (ἡ)","falta de repressão; licenciosidade; intemperança. 〈ἀ-, κολάζω〉","licenciosidade; intemperança"],
        [1353,"ἀκολασταίνω","(só pres., impf. ἠκολάσταινον e fut. ἀκο­λαστανῶ) entregar-se à intemperança. 〈ἀκόλαστος〉","entregar-se à intemperança"],
        [1354,"ἀκολάστημα, ατος (τό)","ato licencioso; intemperança. 〈ἀκολασταίνω〉","ato licencioso; intemperança"],
        [1355,"ἀκόλαστος, ος, ον","1 indisciplinado 2 intemperante; licencioso. 〈ἀ-, κολάζω〉","indisciplinado; intemperante"],
        [1356,"ἀκολάστως","adv. indisciplinadamente; ἀ. ἔχειν ser intemperante.","indisciplinadamente; sem moderação"],
        [1357,"ἄκολος, ου (ἡ","e ὁ) pedaço de pão; bocado.","pedaço de pão"],
        [1358,"ἀκολουθέω-ῶ","(fut. ἀκολουθήσω, aor. ἠκολούθησα, perf. desus.) 1 andar com; seguir; acompanhar, dat., μετά e gen., σύν e dat. 2 seguir; obedecer a; conformar-se a, dat.: ἀ. τῷ ἡγουμένῳ obedecer ao chefe, ἀ. τοῖς νόμοις obedecer às leis 3 bíbl. seguir como discípulo; ser discípulo 4 ser conseqüência de; resultar de, dat.: δικαιοσύνῃ ἀκολουθοῦσιν αἱ ἄλλαι ἀρεταί artt. à justiça seguem as outras virtudes; impes. ἀκολουθεῖ segue-se 5 ser análogo ou correspondente a, dat. 〈ἀκόλουθος〉","seguir; acompanhar; obedecer"],
        [1359,"ἀκολούθησις, εως (ἡ)","1 ação de seguir; acompanhamento; obediência a, dat. 2 conseqüência. 〈ἀκόλουθος〉","acompanhamento; obediência; consequência"],
        [1360,"ἀκολουθητέον","adj. verb. de ἀκολουθέω.","adjetivo verbal de ἀκολουθέω"],
        [1361,"ἀκολουθητικός, ή, όν","disposto a seguir, a obedecer de bom grado a, dat. 〈ἀκόλουθος〉","disposto a seguir e obedecer"],
        [1362,"ἀκολουθία, ας (ἡ)","1 comitiva; acompanhamento 2 con- formidade; obediência 3 sucessão; seqüência. 〈ἀκό- λουθος〉","comitiva; obediência; sequência"],
        [1363,"ἀκόλουθος, ος, ον","1 que segue; que acompanha; seguidor de, dat. ou gen. 2 que age ou está em conformidade com, dat. ou gen. 3 resultante de; conseqüente de, dat. ou gen. ♦ ὁ, ἡ ἀκόλουθος 4 acompanhante; servidor; οἱ ἀκόλουθοι o séquito ♦ τὸ ἀκόλουθον 5 conseqüência; resultado. 〈ἀ- cop., κέλευθος〉","seguidor; acompanhante; consequente"],
        [1364,"ἄκολπος, ος, ον","sem entranhas; sem aparelho genital. 〈ἀ-, κόλπος〉","sem entranhas; sem aparelho genital"],
        [1365,"ἀκόλυμβος, ος, ον","incapaz de nadar. 〈ἀ-, κόλυμβος〉","incapaz de nadar"],
        [1366,"ἀκομιστία, ας (ἡ)","incúria; negligência. 〈ἀ-, κομίζω〉","negligência; incúria"],
        [1367,"ἄκομος, ος, ον","sem cabelo; calvo. 〈ἀ-, κόμη〉","sem cabelo; calvo"],
        [1368,"ἀκόμπαστος, ος, ον","que não se vangloria; modesto. 〈ἀ-, κομπάζω〉","modesto; sem vanglória"],
        [1369,"ἄκομπος, ος, ον","ἀκόμπαστος.","ἀκόμπαστος"],
        [1370,"ἄκομψος, ος, ον","não adornado; sem elegância; rude. 〈ἀ-, κομψός〉","rude; deselegante"],
        [1371,"ἀκόμψως","adv. deselegantemente; de modo rude.","deselegantemente; rudemente"],
        [1372,"ἀκονάω-ῶ","(fut. ἀκονήσω, aor. ἠκόνησα; perf. pas. ἠκό­νημαι) 1 tornar pontudo; afiar 2 excitar; estimular. 〈ἀκόνη〉","afiar; estimular"],
        [1373,"ἀκόνδυλος, ος, ον","sem golpes; sem socos. 〈ἀ-, κόνδυλος〉","sem socos; sem golpes"],
        [1374,"ἀκόνη, ης (ἡ)","1 pedra de amolar 2 pedaço de pedra (de toque, de chumbo, pedra-pomes).","pedra de amolar"],
        [1375,"ἀκονιτί","adv. sem a poeira da luta; sem luta; sem esforço. 〈ἀ-, κονίω〉","sem luta; sem esforço"],
        [1376,"ἀκοντί","adv. = ἀκόντως","ἀκόντως"],
        [1377,"ἀκοντίζω","(impf. ἠκόντιζον, fut. ἀκοντιῶ, aor. ἠκόντισα, perf. desus.) 1 lançar o dardo contra, gen., εἰς e ac., ἐπί e dat. 2 atingir com o dardo 3 lançar; desferir: ἀ. δοῦρα Homero arremessar lanças 4 golpear 5 intr. dardejar, cintilar ♦ méd. 6 penetrar como um dardo. 〈ἄκων1〉","lançar dardo; atingir"],
        [1378,"ἀκόντιον, ου (τό)","1 dardo 2 exercício com o dardo. 〈ἄκων1〉","dardo; exercício com dardo"],
        [1379,"ἀκόντισις, εως (ἡ)","lançamento de dardo. 〈ἀκοντίζω〉","lançamento de dardo"],
        [1380,"ἀκόντισμα, ατος (τό)","1 alcance do dardo 2 dardo lançado; dardo 3 pl. lançadores de dardo. 〈ἀκοντίζω〉","alcance do dardo; dardo; lançadores de dardo"]
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
   LOTE 55 — registros 1381–1430
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [1381,"ἀκοντισμός, οῦ (ὁ)","lançamento de dardo. 〈ἀκοντίζω〉","lançamento de dardo"],
        [1382,"ἀκοντιστήρ, ῆρος (ὁ)","ἀκοντιστής.","ἀκοντιστής"],
        [1383,"ἀκοντιστής, οῦ (ὁ)","1 lançador de dardo ♦ adj. 2 que fere como dardo. 〈ἀκοντίζω〉","lançador de dardo"],
        [1384,"ἀκοντιστικός, ή, όν","1 hábil em lançar o dardo ♦ ἡ ἀκοντιστική, τὰ ἀκοντιστικά 2 a arte de lançar o dardo. 〈ἀκοντίζω〉","hábil em lançar dardo; arte do dardo"],
        [1385,"ἀκοντιστύς, ύος (ἡ)","luta com dardos. 〈ἀκοντίζω〉","combate com dardos"],
        [1386,"ἀκόντως","adv. de mau grado; a contragosto.","a contragosto"],
        [1387,"ἄκοπος, ος, ον","1 que não provoca fadiga; que elimina a fadiga ou a dor 2 não fatigado; infatigável 3 não cortado; não estragado; intacto. 〈ἀ-, κόπτω〉","infatigável; intacto"],
        [1388,"ἀκόρεστος, ος, ον","1 que não ficou saciado; insaciável de, gen. 2 que não produz saciedade; interminável. 〈ἀ-, κορέννυμι〉","insaciável; interminável"],
        [1389,"ἀκόρετος, ος, ον","ἀκόρεστος.","ἀκόρεστος"],
        [1390,"ἀκορής, ής, ές","ἀκόρητος.","ἀκόρητος"],
        [1391,"ἀκόρητος, ος, ον","insaciável de, gen. 〈ἀ-, κορέννυμι〉","insaciável"],
        [1392,"ἀκορία, ας (ἡ)","desejo insaciável. 〈ἄκορος〉","desejo insaciável"],
        [1393,"ἄκορος, ος, ον","insaciável. 〈ἀ-, κόρος〉","insaciável"],
        [1394,"ἄκος, εος-ους (τό)","remédio contra ou para, gen.; ἄκος οὐδέν de nada serve, inf.","remédio"],
        [1395,"ἀκοσμέω-ῶ","1 perturbar a ordem; agir de modo vil 2 cometer infração. 〈ἄκοσμος〉","perturbar a ordem; cometer infração"],
        [1396,"ἀκόσμητος, ος, ον","1 não ordenado; não arranjado 2 não ornado; não enfeitado. 〈ἀ, κοσμέω〉","não ordenado; não ornado"],
        [1397,"ἀκοσμία, ας (ἡ)","1 desordem; desregramento; confusão 2 falta de ornamento. 〈ἄκοσμος〉","desordem; falta de ornamento"],
        [1398,"ἄκοσμος, ος, ον","1 desordenado; desregrado; confuso 2 que é feito sem ordem; sem beleza. 〈ἀ-, κόσμος〉","desordenado; confuso"],
        [1399,"ἀκόσμως","adv. 1 em desordem; perturbadamente 2 sem ornamento.","em desordem; sem ornamento"],
        [1400,"ἀκοστάω","e ἀκοστέω (só part. aor. ἀκοστήσας Homero) comer cevada; nutrir-se. 〈ἀκοστή〉","comer cevada"],
        [1401,"ἀκοστή, ῆς (ἡ)","cevada.","cevada"],
        [1402,"ἀκουάζομαι","1 ouvir alguém, gen. 2 sentir-se convidado a, gen. 3 auscultar. 〈ἀκούω〉","ouvir; auscultar"],
        [1403,"ἀκουέμεν, ἀκουέμεναι","inf. pres. ép. de ἀκούω.","infinitivo presente épico de ἀκούω"],
        [1404,"ἀκουή","ép. = ἀκοή.","forma épica de ἀκοή"],
        [1405,"ἄκουκα","dór. = ἀκήκοα.","forma dórica de ἀκήκοα"],
        [1406,"ἄκουον","impf. poét. de ἀκούω.","imperfeito poético de ἀκούω"],
        [1407,"ἄκουρος, ος, ον","sem filhos. 〈ἀ-, κοῦρος〉","sem filhos"],
        [1408,"ἄκουσα1","fem. de ἄκων2.","feminino de ἄκων2"],
        [1409,"ἄκουσα2","aor. poét. de ἀκούω.","aoristo poético de ἀκούω"],
        [1410,"ἀκούσιος, ος, ον","át. 1 contrário à vontade; forçado 2 involuntário. 〈ἀ-, ἑκούσιος〉","involuntário; forçado"],
        [1411,"ἀκουσίως","adv. 1 involuntariamente 2 a contragosto; contra a vontade de alguém, dat.","involuntariamente; a contragosto"],
        [1412,"ἄκουσμα, ατος (τό)","1 o que se ouve; som (palavra, música) 2 notícia; relato 3 rumor; boato 4 instrução oral. 〈ἀκούω〉","som; notícia; boato"],
        [1413,"ἀκουστέος, α, ον","adj. verb. de ἀκούω.","adjetivo verbal de ἀκούω"],
        [1414,"ἀκουστικός, ή, όν","1 próprio para fazer ouvir 2 próprio para ouvir; disposto a ouvir, gen. ♦ τὸ ἀκουστικόν 3 a faculdade de ouvir. 〈ἀκούω〉","auditivo; faculdade de ouvir"],
        [1415,"ἀκουστός, ή, όν","audível. 〈ἀκούω〉","audível"],
        [1416,"ἀκούω","(fut. ἀκούσομαι, aor. ἤκουσα, perf. ἀκήκοα, m.-q.-perf. ἠκηκόειν, át. ἠκηκόη; pas. fut. ἀκουσθήσομαι, aor. ἠκούσθην, perf. ἤκουσμαι, m.-q.-perf. ἠκούσμην) 1 ouvir alguém, gen.; algo, ac. ou gen.; de alguém, gen. ou ἀπό, ἐκ, παρά, πρός e gen. 2 ouvir falar de alguém, gen., περί e gen.; ouvir dizer que, or. conj. (ὡς, ὅτι), inter., inf., part. 3 ouvir com atenção; escutar; atender a, gen. 4 ouvir falar de si; ter reputação de, ac., predic. ou adv., às vezes inf. 1 ἄκουσα θεοῦ Homero ouvi um deus, τὰ βέλτιστ’ ἀκούειν Demóstenes ouvir as melhores opiniões, κωκυτοῦ δ’ ἤκουσε Homero ouviu o urro, οὐδεὶς ἤκουσέ σου ταύτην τὴν φωνήν Demóstenes ninguém ouviu de ti essa palavra 2 πατρὸς ἀκούσας Homero tendo ouvido falar de seu pai, περὶ σοῦ ἀκούσαντες πολλὰ ἀγαθά Xenofonte tendo ouvido dizer muitas boas coisas de ti, οὐκ ἀκήκοας ὅτι ἠναγκάζετο δουλεύειν; Xenofonte não ficaste sabendo que ele era reduzido a escravo? ἐπιθυμῶ ἀκοῦσαι τίνας ἔλεγες τὰς τέτταρας πολιτείας Platão desejo ouvir quais são as quatro formas de governo que enunciavas, καὶ σὲ τὸ πρὶν ἀκούομεν ὄλβιον εἷναι Homero e ouvimos dizer que outrora eras feliz, ὡς ἤκουσαν οὐδὲν πεπραγμένον Tucídides quando souberam que nada tinha sido feito 3 λόγων ἀκουσομένους ἀφῖχθαι Platão ter vindo ouvir a discussão, Ἀναξιμάνδρου ἤκουσεν d.l. assistiu aos cursos de Anaximandro, πᾶς ὅστις ἀκούει μου τοὺς λόγους Novo Testamento todo aquele que ouve a minha palavra 4 φήμας κακὰς ἤκουσεν οὐκ αἰτία Eurípides teve má reputação, sem ser culpada, κακὸς ἀκούω Sófocles chamam-me de mau, κακῶς ἤκουεν Demóstenes falavam mal dele, εὖ ἀκούειν at. ter boa reputação, ἤκουον εἷναι πρῶτοι Heródoto tinham a reputação de ser os primeiros.","ouvir; escutar; ter notícia; ter reputação"],
        [1417,"ἄκρα, ας (ἡ)","cf. ἄκρος.","cf. ἄκρος"],
        [1418,"ἀκράαντος, ος, ον","ἄκραντος.","ἄκραντος"],
        [1419,"Ἀκραγαντῖνος, η, ον","de Agrigento. 〈Ἀκράγας〉","de Agrigento"],
        [1420,"Ἀκράγας, αντος (ὁ, ἡ)","Agrigento, rio e cidade da Sicília.","Agrigento"],
        [1421,"ἀκραγής, ής, ές","duv. que não grita ou que grita muito forte; feroz. 〈ἀ- priv. ou intens., κράζω〉","de interpretação duvidosa; feroz"],
        [1422,"ἀκραής, ής, ές","que sopra forte. 〈ἄκρος, ἄημι〉","que sopra forte"],
        [1423,"ἀκραῖος, α, ον","que está na extremidade ou na parte de cima; que habita as alturas. 〈ἄκρος〉","extremo; das alturas"],
        [1424,"ἀκραιφνής, ής, ές","1 não misturado; puro 2 intacto 3 isento de, gen. 〈ἀκέραιος, φαίνω〉","puro; intacto"],
        [1425,"ἄκραντος, ος, ον","1 que não se cumpre; que não se realiza; vão 2 rar. que não realiza nada ♦ ἄκραντα adv. 3 em vão. 〈ἀ-, κραίνω〉","vão; não realizado"],
        [1426,"ἀκρασία, ας (ἡ)","1 excesso; falta de medida; intemperança 2 intempérie. 〈ἀκρατής〉","excesso; intemperança"],
        [1427,"ἀκράτεια, ας (ἡ)","1 falta de força; fraqueza 2 falta de autodomínio; intemperança. 〈ἀκρατής〉","fraqueza; intemperança"],
        [1428,"ἀκρατεύομαι","ser intemperante 〈ἀκρατής〉","ser intemperante"],
        [1429,"ἀκρατευτικός, ή, όν","relativo à intemperança. 〈ἀκρα­τεύομαι〉","relativo à intemperança"],
        [1430,"ἀκρατής, ής, ές","1 sem força; débil 2 incapaz de manter o controle de, gen.: ἀ. χειρῶν, γλώσσης sem o controle das mãos, da língua 3 incapaz de moderar-se no uso de; dominado pelo amor de, gen., πρός ou περί e ac., inf.: ἀ. οἴνου ou πρὸς τὸν οἷνον imoderado no vinho, ἀ. κέρδους insaciável de lucro, ἀ. εἴργεσθαί τινος, incapaz de abster-se de alguma coisa 4 que não é senhor de si; incapaz de moderar-se: στόμα ἀ. língua desregrada, ἀ. δαπάνη gasto imoderado. 〈ἀ-, κράτος〉","fraco; sem autodomínio"]
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
   LOTE 56 — registros 1431–1480
   ========================================================== */
(function () {
    const source = window.ScripturaLexicons.DGP;
    const entries = [
        [1431,"ἀκρατοποσία, ας (ἡ)","ação de beber vinho puro. 〈ἀκρα­τοπότης〉","consumo de vinho puro"],
        [1432,"ἀκρατοπότης, ου (ὁ)","bebedor de vinho puro. 〈ἄκρατος, πίνω〉","bebedor de vinho puro"],
        [1433,"ἄκρατος, ος, ον","1 não misturado; puro: ἄ. οἷνος vinho puro, ἄκρατα σώματα Platão corpos simples 2 puro; absoluto; perfeito: νοῦς ἄ. Xenofonte puro pensamento, ἄ. ἐλευθερία Platão absoluta liberdade 3 completo; excessivo; violento: ἄ. ψεῦδος Platão pura mentira, ἄκρατος ὀργήν Ésquilo desmedido em sua cólera ♦ ὁ ἄκρατος, τὸ ἄκρατον 4 vinho puro. 〈ἀ-, κεράννυμι〉","puro; não misturado; absoluto"],
        [1434,"ἀκράτωρ, ορος (ὁ)","1 sem força; impotente 2 que não tem controle sobre; que não é senhor de, gen. 〈ἀ-, κράτος〉","impotente; sem controle"],
        [1435,"ἀκράτως","adv. sem mistura; absolutamente; inteiramente.","sem mistura; absolutamente"],
        [1436,"ἀκραχολέω-ῶ","(só part. pres.) irritar-se. 〈ἀκράχολος〉","irritar-se"],
        [1437,"ἀκραχολία, ας (ἡ)","irritação. 〈ἀκράχολος〉","irritação"],
        [1438,"ἀκράχολος, ος, ον","1 colérico; irascível 2 pálido. 〈ἄκρος, χολή〉","irascível; pálido"],
        [1439,"ἀκρεμών, όνος (ὁ)","a ponta do ramo. 〈ἄκρος〉","ponta de ramo"],
        [1440,"ἄκρη","jôn. = ἄκρα.","forma jônica de ἄκρα"],
        [1441,"ἀκρητοποσίη, ἀκρητοπότης, ἄκρητος","jôn. = ἀκρατο­ποσία, ἀκρατοπότης, ἄκρατος.","formas jônicas de ἀκρατοποσία, ἀκρατοπότης, ἄκρατος"],
        [1442,"ἀκρίβεια, ας (ἡ)","1 exatidão; precisão 2 rigor; severidade; δι᾽ ἀκριβείας, εἰς ou πρὸς ἀκρίβειαν, ἐν ἀκριβείᾳ com todo o rigor; com exatidão 3 economia rígida; parcimônia. 〈ἀκριβής〉","precisão; rigor; parcimônia"],
        [1443,"ἀκριβής, ής, ές","1 preciso; exato: ἀ. λόγος Platão discurso exato, verdadeiro, σημεῖον ἀ. Tucídides sinal preciso 2 cuidadoso; escrupuloso; severo: ἀ. νομοθέτης Platão legislador competente 3 que se adapta bem; perfeito: θώραξ ἀ. Xenofonte couraça que se ajusta bem, ἀ. δίαιτα Hipócrates regime bem regrado 4 parcimonioso ♦ ἀκριβές ou ἐπ’ ἀκριβές, εἰς τὸ ἀκριβές adv. 5 com exatidão; com precisão ♦ τὸ ἀκριβές 6 verdade 7 rigor absoluto.","preciso; rigoroso; escrupuloso"],
        [1444,"ἀκριβολογέομαι-οῦμαι","1 apreciar com rigor; pesquisar minuciosamente, περί e gen. 2 ser exato; ser preciso.","pesquisar com rigor; ser exato"],
        [1445,"ἀκριβολογητέον","adj. verb. de ἀκριβολογέομαι.","adjetivo verbal de ἀκριβολογέομαι"],
        [1446,"ἀκριβολογία, ας (ἡ)","exatidão; precisão; rigor. 〈ἀκριβής, λέγω〉","precisão; exatidão"],
        [1447,"ἀκριβόω-ῶ","(fut. ἀκριβώσω, aor. ἠκρίβωτα, perf. ἠκρίβωκα) 1 ser exato; ser preciso 2 tornar exato ou perfeito; fazer com o maior cuidado, ac. 3 pesquisar com rigor; averiguar; verificar a exatidão de, ac. 4 descrever com cuidado ♦ pas. 5 perf. ser perfeito. 〈ἀκριβής〉","tornar exato; averiguar"],
        [1448,"ἀκριβῶς","adv. com exatidão; rigorosamente.","rigorosamente; com exatidão"],
        [1449,"ἀκρίς, ίδος (ἡ)","gafanhoto.","gafanhoto"],
        [1450,"ἄκρις, ιος (ἡ)","1 pico de montanha 2 região montanhosa. 〈ἄκρος〉","pico; região montanhosa"],
        [1451,"ἀκρισία, ας (ἡ)","1 falta de discernimento; mau julgamento 2 falta de critério; confusão. 〈ἄκριτος〉","mau julgamento; confusão"],
        [1452,"Ἀκρίσιος, ου (ὁ)","Acrísio, pai de Dânae.","Acrísio"],
        [1453,"Ἀκρισιώνη, ης (ἡ)","filha de Acrísio (Dânae).","filha de Acrísio"],
        [1454,"ἀκριτόμυθος, ος, ον","de palavras confusas; de sentido obscuro ou incompreensível; confuso. 〈ἄκριτος, μῦθος〉","confuso; incompreensível"],
        [1455,"ἄκριτος, ος, ον","1 confuso; indistinto: ἄκριτα πόλλ’ ἀγορεύειν Homero proferir muitas palavras confusas, θύμβος ἄ. Homero túmulo indiferenciado, comum 2 não decidido; indeciso; incessante: ἄκριτα νείκεα Homero querelas não decididas, intermináveis 3 não submetido a julgamento: ἄκριτον ἐκβαλεῖς με γῆς Eurípides tu me expulsarás sem julgamento desta terra, πρύτανις ἄ. ésqn. chefe imune a julgamento 4 sem discernimento; sem juízo; irreflexivo: θόλμα ἄ. Políbio audácia impensada, ὕπνος ἄ. a.p. sono despreocupado 5 sem decidir-se: ἀποπλεόντων ἐς τὴν ἑαυτῶν ἀκρίτων Heródoto navegando de volta [os gregos] para sua terra sem tomar decisão. 〈ἀ-, κρίνω〉","indistinto; não julgado; irreflexivo"],
        [1456,"ἀκριτόφυλλος, ος, ον","de folhagem espessa. 〈ἄκριτος, φῦλλον〉","de folhagem espessa"],
        [1457,"ἀκριτόφυρτος, ος, ον","misturado sem discernimento; em total confusão. 〈ἄκριτος, φύρω〉","misturado confusamente"],
        [1458,"ἀκρίτως","adv. 1 de modo indeciso 2 confusamente 3 sem discernimento.","sem discernimento; confusamente"],
        [1459,"ἀκρόαμα, ατος (τό)","1 texto poético que se ouve (recitação, canto, representação) 2 pl. aqueles que dizem um texto poético (declamadores, cantores, atores). 〈ἀκροάομαι〉","recitação; declamadores; cantores"],
        [1460,"ἀκροαματικός, ή, όν","1 que diz respeito à audição: ἀκροαματικαὶ διδασκαλίαι ensinamentos transmitidos oralmente aos ouvintes 2 capaz de ouvir. 〈ἀκρόαμα〉","relativo à audição; capaz de ouvir"],
        [1461,"ἀκροάομαι-οῦμαι","(fut. ἀκροάσομαι, aor. ἠκροασάμην, perf. ἠκρόαμαι) 1 ouvir com atenção algo, ac. ou gen.; alguém, gen. 2 obedecer a alguém, gen. 3 ser ouvinte; ser discípulo.","ouvir atentamente; obedecer"],
        [1462,"ἀκρόασις, εως (ἡ)","1 ação de escutar; atenção a, gen. 2 obe­diência a, gen. 3 audição; leitura pública de textos literários. 〈ἀκροάομαι〉","audição; leitura pública"],
        [1463,"ἀκροατήριον, ου (τό)","tard. sala de audiências; auditório. 〈ἀκροάομαι〉","auditório"],
        [1464,"ἀκροατής, οῦ (ὁ)","1 que ouve com atenção; ouvinte; discípulo 2 que lê o texto em voz alta; leitor. 〈ἀκροάομαι〉","ouvinte; leitor"],
        [1465,"ἀκροβατέω-ῶ","(só pres.) tard. 1 andar na ponta dos pés 2 andar de cabeça erguida; ser altivo 3 subir com esforço. 〈ἄκρος, βαίνω〉","andar na ponta dos pés; subir"],
        [1466,"ἀκροβολίζω,","ger. méd. ἀκροβολίζομαι (aor. ἠκροβο­λισάμην) 1 lançar de longe (projetil) 2 participar de escaramuça. 〈ἀκρόβολος〉","lançar projétil; escaramuçar"],
        [1467,"ἀκροβόλισις, εως (ἡ)","escaramuça; enfrentamento à distância. 〈ἀκροβολίζομαι〉","escaramuça"],
        [1468,"ἀκροβολισμός, οῦ (ὁ)","ἀκροβόλισις.","ἀκροβόλισις"],
        [1469,"ἀκροβολιστής, οῦ (ὁ)","aquele que lança de longe; atirador.","atirador de longe"],
        [1470,"ἀκρόβολος, ος, ον","golpeado de longe. 〈ἄκρος, βάλλω〉","golpeado de longe"],
        [1471,"ἀκροβυστία, ας (ἡ)","bíbl. 1 prepúcio; ἀκροβυστίαν ἔχω ter prepúcio, i.e., ser um gentio, um não-judeu 2 incircuncisão 3 o conjunto dos não circuncidados, i.e., os gentios. 〈ἀκρόβυστος〉","prepúcio; incircuncisão; gentios"],
        [1472,"ἀκρόβυστος, ος, ον","tard. incircuncidado.","incircuncidado"],
        [1473,"ἀκρογωνιαῖος, α, ον","bíbl. angular. 〈ἀκρος, γωνία〉","angular"],
        [1474,"ἀκρόδρυον, ου (τό)","1 fruto 2 fruto de casca dura 3 a árvore que produz tais frutos. 〈ἄκρος, δρῦς〉","fruto; árvore frutífera"],
        [1475,"ἀκροθίνιον, ου (τό)","1 o que está no alto da pilha, i.e., primícias 2 o que há de melhor, com gen. partit. 〈ἄκρος, θίς〉","primícias; melhor parte"],
        [1476,"ἀκροθώραξ, ακος (ὁ)","meio bêbado.","meio bêbado"],
        [1477,"ἀκροκελαινιάω-ῶ","(part. pres. ép. ἀκροκελαινιόων) tornar-se escuro na superfície. 〈ἄκρος, κελαινός〉","escurecer na superfície"],
        [1478,"ἀκροκνεφής, ής, ές","madrugador; de madrugada. 〈ἄκρος, κνέφας〉","madrugador"],
        [1479,"ἀκρόκομος, ος, ον","1 que prende ou que tem os cabelos no alto da cabeça 2 que tem pêlos na extremidade 3 cheio de folhas na extremidade; que tem copa alta. 〈ἄκρος, κόμη〉","cabelo no alto; copa alta"],
        [1480,"Ἀκροκόρινθος, ου (ὁ)","Acrocorinto, cidadela de Corinto.","Acrocorinto"]
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


/* LOTE 57 — registros 1481–1530; fonte DGP XML fixada. */
(() => {
    const source = window.ScripturaLexicons.DGP;
    const entries = [[1481,"ἀκρόλοφος, ος, ον","poét. 1 de pico elevado ♦ ὁ ἀκρόλοφος 2 pico; cimo de montanha. 〈ἄκρος, λόφος〉","de pico elevado"],[1482,"ἀκρομανής, ής, ές","próximo da loucura; meio louco. 〈ἄκρος, μαίνομαι〉","próximo da loucura"],[1483,"ἄκρον, ου (τό)","cf. ἄκρος.","cf"],[1484,"ἀκροπενθής, ής, ές","que está no auge da aflição. 〈ἄκρος, πένθος〉","que está no auge da aflição"],[1485,"ἀκροποδητί","adv. na ponta dos pés. 〈ἄκρος, ποῦς〉","na ponta dos pés"],[1486,"ἀκρόπολις, εως (ἡ)","1 acrópole; cidadela; fortaleza 2 fortaleza; bastião. 〈ἄκρος, πόλις〉","acrópole"],[1487,"ἀκροπόλος, ος, ον","elevado. 〈ἄκρος, πέλω〉","elevado"],[1488,"ἀκροπόρος, ος, ον","de ponta perfurante; de ponta aguda. 〈ἄκρος, πείρω〉","de ponta perfurante"],[1489,"ἄκρος, α, ον","1 o mais elevado; o cimo de: δρῦς ἄκρη hes. o alto do carvalho, ἐπ’ ἄκρων ὀρέων Sófocles no cimo dos montes 2 o mais extenso, extremo; a extremidade de: γλῶσσαν ἄκραν Sófocles a ponta da língua, χεῖρα ἄκρην Homero a extremidade da mão 3 o mais profundo; o fundo de; a superfície de: πρὸς ἄκρον μυελὸν ψυχῆς Eurípides até o mais íntimo da alma, ἀπ’ ἄκρας φρενός Ésquilo do fundo do coração, μέλαν ὕδωρ ἄκρον Homero a superfície da água escura 4 no ponto culminante; em seu ponto extremo; o fim de; o começo de: ἄκρας νυκτός Sófocles noite alta, ἄκρου τοῦ θέρεος Hipócrates auge do verão, ἄκρᾳ σὺν ἑσπέρᾳ Píndaro no fim da tarde 5 o maior grau, o mais eminente: μάντις ἄκρος Sófocles adivinho excelente; ac. de rel. ἄκροι τὰ πολέμια Heródoto eminentes nas atividades bélicas ♦ ἄκρον, ἄκρα adv. 6 no pico; na extremidade; no mais alto ponto: ἄκρα σοφαὶ χέρες a.p. mãos sábias em mais alto grau, ἄκρον ἐπὶ ῥηγμῖνος Homero sobre a crista da onda ♦ οἱ ἄκροι 7 os melhores: οἱ ἄκροι τῆς ποιήσεως ἑκατέρας Platão os mais hábeis nos dois gêneros de poesia ♦ ἡ ἄκρα 8 ponta; cume; extremidade 9 promontório; colina; cidadela; κατ’ ἄκρας a partir do alto; de alto a baixo; inteiramente ♦ τὸ ἄκρον 10 o mais alto ponto; cimo; cume 11 o ponto extremo; cabo; promontório 12 fronteira; limite 13 o mais alto grau; o cúmulo de, gen. 14 eminência; figura eminente; glória; orgulho (pessoa) 15 Lóg., pl. o termo maior e o termo menor de um silogismo. 〈ἄκρος〉","o mais elevado"],[1490,"ἀκροστόλιον, ου (τό)","acrostólio. 〈ἄκρος, στόλος〉","acrostólio"],[1491,"ἀκροσφαλής, ής, ές","1 sujeito a escorregar, a cair; instável; vacilante 2 escorregadio; perigoso. 〈ἄκρος, σφάλλω〉","sujeito a escorregar, a cair"],[1492,"ἀκροσφαλῶς","adv. de modo instável; precariamente.","de modo instável"],[1493,"ἀκροτελεύτιον, ου (τό)","1 que está bem no fim; parte final 2 refrão. 〈ἄκρος, τελευτή〉","que está bem no fim"],[1494,"ἀκροτομέω-ῶ","cortar na ponta; podar; ceifar. 〈ἄκρος, τέμνω〉","cortar na ponta"],[1495,"ἀκροχολέω, ἀκροχολία, ἀκρόχολος","cf. ἀκραχολέω, ἀκραχολία, ἀκράχολος.","cf"],[1496,"ἀκροχορδών, όνος (ἡ)","verruga. 〈ἄκρος, χορδή〉","verruga"],[1497,"ἀκρωνία, ας (ἡ)","duv. amputação das extremidades; mutilação. 〈ἄκρος〉","amputação das extremidades"],[1498,"ἀκρωνυχία, ας (ἡ)","1 ponta da unha 2 cimo de montanha. 〈ἀκρώνυχος〉","ponta da unha 2 cimo de montanha"],[1499,"ἀκρώνυχος, ος, ον","1 feito com a ponta da unha 2 marcado pela extremidade das mãos ou dos pés. 〈ἄκρος, ὄνυξ〉","feito com a ponta da unha 2 marcado pela extremidade das mãos ou dos pés"],[1500,"ἀκρώρεια, ας (ἡ)","cimo da montanha. 〈ἄκρος, ὄρος〉","cimo da montanha"],[1501,"ἄκρως","adv. no mais alto ponto; no ponto extremo.","no mais alto ponto"],[1502,"ἀκρωτηριάζω","(aor. ἠκρωτηρίασα) 1 cortar as extremidades; mutilar; amputar 2 intr. projetar-se como um promontório ♦ méd. 3 cortar (adorno de nau, de frontão); mutilar. 〈ἀκρωτήριον〉","cortar as extremidades"],[1503,"ἀκρωτήριον, ου (τό)","1 cimo de montanha 2 cabo; promontório 3 extremidades do corpo 4 adorno da popa de um navio; esporão 5 extremidade do frontão de um edifício; soclo aí assentado; adorno assentado sobre esse pedestal. 〈ἄκρος〉","cimo de montanha 2 cabo"],[1504,"ἀκτάζω","banquetear-se à beira-mar; alegrar-se. 〈ἀκτή1〉","banquetear-se à beira-mar"],[1505,"ἀκταίνω","(só pres.) levantar; erguer; erigir. 〈ἀκτός〉","levantar"],[1506,"ἀκταῖος, α, ον","costeiro; litorâneo. 〈ἀκτή1〉","costeiro"],[1507,"ἀκτέα, ας (ἡ)","sabugueiro.","sabugueiro"],[1508,"ἀκτένιστος, ος, ον","não penteado. 〈ἀ-, κτενίζω〉","não penteado"],[1509,"ἀκτέον","adj. verb. de ἄγω.","adj"],[1510,"ἀκτέριστος, ος, ον","que não recebeu as honras fúnebres; insepulto. 〈ἀ-, κτερίζω〉","que não recebeu as honras fúnebres"],[1511,"ἀκτή1, ῆς (ἡ)","1 borda; margem 2 promontório 3 falésia 4 elevação: χώματος ἀκτή Ésquilo monte de terra, túmulo.","borda"],[1512,"ἀκτή2, ῆς (ἡ)","farinha; trigo.","farinha"],[1513,"ἀκτῆ","ἀκτέα.","ἀκτέα"],[1514,"ἀκτήμων, ων, ον","gen. ονος, sem bens; pobre. 〈ἀ-, κτῆμα〉","gen"],[1515,"ἀκτίνεσσι","dat. pl. poét. de ἀκτίς.","dat"],[1516,"ἄκτιον, ου (τό)","ἀκτή1.","ἀκτή1"],[1517,"ἀκτίς, ῖνος (ἡ)","1 raio de luz 2 luz ou calor do sol; dia 3 clarão do raio; brilho dos olhos 4 esplendor, brilho 5 raio de roda.","raio de luz 2 luz ou calor do sol"],[1518,"Ἀκτορίδης, ου (ὁ)","descendente de Átor. 〈Ἄκτωρ〉","descendente de Átor"],[1519,"Ἀκτορίων, ωνος (ὁ)","filho ou neto de Átor. 〈Ἄκτωρ〉","filho ou neto de Átor"],[1520,"ἀκτός, ή, όν","conduzido; trazido. 〈ἄγω〉","conduzido"],[1521,"ἄκτωρ, ορος (ὁ)","1 guia; chefe 2 Ἄκτωρ Átor, pai de Me­nécio. 〈ἄγω〉","guia"],[1522,"ἀκυβέρνητος, ος, ον","sem piloto; não governado. 〈ἀ-, κυβερνάω〉","sem piloto"],[1523,"Ἀκύλας,","ac. -αν (ὁ) bíbl. Áquila, n. romano.","ac"],[1524,"ἄκυλος, ου (ὁ, ἡ)","bolota.","bolota"],[1525,"ἀκύμαντος, ος, ον","1 não fustigado pelas ondas 2 sem ondas; calmo 3 que não provoca ondas. 〈ἀ-, κυμαίνω〉","não fustigado pelas ondas 2 sem ondas"],[1526,"ἀκύμων, ων, ον","gen. ονος não agitado por ondas. 〈ἀ-, κῦμα〉","gen"],[1527,"ἄκυρος, ος, ον","1 que é feito sem autoridade; sem validade; nulo 2 sem autoridade sobre, gen. 3 impróprio (palavras, frases). 〈ἄκυρος〉","que é feito sem autoridade"],[1528,"ἀκυρόω-ῶ","tornar nulo; aniquilar; desprezar. 〈ἀ-, κῦρος〉","tornar nulo"],[1529,"ἀκωκή, ῆς (ἡ)","ponta. 〈ἀκή〉","ponta"],[1530,"ἀκώλυτος, ος, ον","não impedido; livre. 〈ἀ-, κωλύω〉","não impedido"]];
    const esc = value => String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
    source.rowsHtml += entries.map(([n, headword, definition, gloss]) => `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4,"0")}" data-source="DGP" data-search="${esc(headword+" "+gloss+" DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`).join("\n");
    source.cardsHtml += entries.map(([n,headword,definition]) => `<article id="entry-dgp-${String(n).padStart(4,"0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`).join("\n");
})();


/* LOTE 58 — registros 1531–1580; fonte DGP XML fixada. */
(() => {
    const source = window.ScripturaLexicons.DGP;
    const entries = [[1531,"ἀκωλύτως","adv. sem impedimento algum.","sem impedimento algum"],[1532,"ἀκωμῳδήτως","adv. sem pôr em ridículo; sem ser ridicularizado. 〈ἀ-, κωμῳδέω〉","sem pôr em ridículo"],[1533,"ἄκων1, οντος (ὁ)","lança; seta; dardo. 〈ἀκή〉","lança"],[1534,"ἄκων2, ουσα, ον","gen. οντος, ούσης, οντος 1 que não age de bom grado; constrangido; que suporta contra a von­tade 2 involuntário (ação). 〈ἀ-, ἑκών〉","gen"],[1535,"ἀλάβαστρον, ου (τό)","alabastro, frasco de perfumes.","alabastro, frasco de perfumes"],[1536,"ἀλάβαστρος, ου (ὁ, ἡ)","ἀλάβαστρον.","ἀλάβαστρον"],[1537,"ἅλαδε","adv. para o mar; no mar. 〈ἅλς〉","para o mar"],[1538,"ἀλαζονεία, ας (ἡ)","jactância; fanfarronice; presunção.","jactância"],[1539,"ἀλαζονεύομαι","vangloriar-se; fanfarronear. 〈ἀλαζών〉","vangloriar-se"],[1540,"ἀλαζονικός, ή, όν","1 inclinado à jactância; presunçoso; vaidoso ♦ τὸ ἀλαζονικόν 2 jactância. 〈ἀλαζών〉","inclinado à jactância"],[1541,"ἀλαζονικῶς","adv. de modo fanfarrão; jactanciosamente.","de modo fanfarrão"],[1542,"ἀλαζών, όνος","(masc., fem.) fanfarrão; charlatão; gabarola. 〈ἀλάομαι〉","fanfarrão"],[1543,"ἀλάθεα, ἀλάθεια","dór. = ἀλήθεια.","= ἀλήθεια"],[1544,"ἀλαθείς","part. aor. dór. de ἀλάομαι.","part"],[1545,"ἀλαθέως","dór. = ἀληθῶς.","= ἀληθῶς"],[1546,"ἀλαθής","dór. =ἀληθής.","=ἀληθής"],[1547,"ἀλάθητος, ος, ον","de quem não se esconde nada. 〈ἀ-, λανθάνω〉","de quem não se esconde nada"],[1548,"ἀλαθινός","dór. = ἀληθινός.","= ἀληθινός"],[1549,"ἀλαίνω","ἀλάομαι.","ἀλάομαι"],[1550,"ἀλακάτα","dór. = ἠλακάτη.","= ἠλακάτη"],[1551,"ἀλαλά","dór. = ἀλαλή.","= ἀλαλή"],[1552,"ἀλαλαγή, ῆς (ἡ)","ἀλαλή.","ἀλαλή"],[1553,"ἀλάλαγμα, ατος (τό)","ἀλαλαγή.","ἀλαλαγή"],[1554,"ἀλαλαγμός, οῦ (ὁ)","1 grito de guerra 2 som que ressoa; barulho. 〈ἀλαλάζω〉","grito de guerra 2 som que ressoa"],[1555,"ἀλαλάζω","(impf. ἠλάλαζον, fut. ἀλαλάξομαι, aor. ἠλάλαξα, perf. desus.) 1 dar um grito; lançar um clamor de guerra ou grito ritual 2 (instrumentos musicais) ressoar; retumbar 3 proclamar. 〈ἀλαλή〉","dar um grito"],[1556,"ἀλαλή, ῆς (ἡ)","brado; grito de guerra.","brado"],[1557,"ἀλάλημαι","perf. ép. de ἀλάομαι.","perf"],[1558,"ἀλάλητος, ος, ον","inexprimível; inefável. 〈ἀ-, λαλέω〉","inexprimível"],[1559,"ἀλαλητός, οῦ (ὁ)","grito; clamor. 〈ἀλαλάζω〉","grito"],[1560,"ἀλαλκεῖν","inf. aor.2 (daí pres. ἀλάλκω, fut. ἀλαλκήσω) afastar; rechaçar algo, ac., de alguém, gen. ou dat.","inf"],[1561,"ἀλαλκέμεν, ἀλαλκέμεναι","inf. ép. de ἀλαλκεῖν.","inf"],[1562,"Ἀλαλκομενηΐς, ΐδος","(fem.) duv. a Protetora ou a deusa de Alalcômenas, epít. de Atena. 〈ἀλαλκεῖν〉","a Protetora ou a deusa de Alalcômenas, epít"],[1563,"ἄλαλος, ος, ον","sem fala; mudo. 〈ἀ-, λαλέω〉","sem fala"],[1564,"ἀλαλύκτημαι","cf. ἀλυκτέω.","cf"],[1565,"ἀλάλυκτο","3ª sing. m.-q.-perf. pas. de ἀλύσσω.","ª sing"],[1566,"ἁλάμενος","part. aor. de ἅλλομαι.","part"],[1567,"ἀλαμπής, ής, ές","1 sem luz; escuro; fosco 2 não iluminado; obscuro. 〈ἀ-, λάμπω〉","sem luz"],[1568,"ἀλάομαι-ῶμαι","(impf. ἠλώμην, fut. desus., aor. ἠλήθην, perf. com sent. de pres. ἀλάλημαι) 1 errar; andar errante 2 estar perplexo, agitado 3 estar longe de; estar privado de, gen. 〈ἄλη〉","errar"],[1569,"ἀλαός, ός, όν","1 cego 2 imperceptível 3 que torna cego; que causa a cegueira ♦ οἱ ἀλαοί 4 os que não vêem a luz, os mortos. 〈ἀ-, λάω〉","cego 2 imperceptível 3 que torna cego"],[1570,"ἀλαοσκοπίη, ης (ἡ)","vigilância cega, vã. 〈ἀλαός, σκοπιά〉","vigilância cega, vã"],[1571,"ἀλαόω","(só aor.) cegar. 〈ἀλαός〉","cegar"],[1572,"ἀλαπαδνός, ή, όν","fraco; débil; sem força. 〈ἀλαπάζω〉","fraco"],[1573,"ἀλαπάζω","1 esgotar toda força de; abater; aniquilar 2 des­truir; pilhar; saquear. 〈ἀ- protét., λαπάζω〉","esgotar toda força de"],[1574,"ἅλας, ατος (τό)","sal. 〈ἅλς〉","sal"],[1575,"ἅλασθαι","inf. aor. de ἅλλομαι.","inf"],[1576,"ἀλαστέω-ῶ","(impf. ἠλάστεον, fut. ἀλαστήσω) indignar-se contra, dat. 〈ἄλαστος〉","indignar-se contra, dat"],[1577,"Ἀλαστορίδης, ου (ὁ)","filho de Alástor, epít. de Iros. 〈Ἀλάστωρ〉","filho de Alástor, epít"],[1578,"ἀλάστορος, ος, ον","1 enviado por um deus maléfico; funesto 2 perseguido por um deus vingador; que sofre de modo atroz ♦ ὁ ἀλάστορος 3 deus vingador. 〈ἄλαστος〉","enviado por um deus maléfico"],[1579,"ἄλαστος, ος, ον","1 que não se pode esquecer, insuportável, cruel 2 incessante; sem fim 3 que não merece perdão; execrável; maldito (pessoa) ♦ ἄλαστον adv. 4 sem consolo. 〈ἀ-, λανθάνομαι〉","que não se pode esquecer, insuportável, cruel 2 incessante"],[1580,"ἀλάστωρ, ορος","(masc., fem.) 1 que não esquece; que não deixa impune 2 perseguido pela vingança divina; ímpio ♦ ὁ, ἡ ἀλάστωρ 3 divindade vingadora ♦ ὁ Ἀλάστωρ 4 Alástor, companheiro de Nestor. 〈ἀ-, λανθάνομαι〉","que não esquece"]];
    const esc = value => String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
    source.rowsHtml += entries.map(([n, headword, definition, gloss]) => `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4,"0")}" data-source="DGP" data-search="${esc(headword+" "+gloss+" DGP")}" tabindex="0"><td class="table-lemma greek">${esc(headword)}</td><td>—</td><td>${esc(gloss)}</td><td><span class="source-pill">DGP</span></td></tr>`).join("\n");
    source.cardsHtml += entries.map(([n,headword,definition]) => `<article id="entry-dgp-${String(n).padStart(4,"0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(headword)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(definition)}</p></section></article>`).join("\n");
})();


/* LOTE 59 — registros 1581–1630; fonte DGP XML fixada. */
(() => {
  const source = window.ScripturaLexicons.DGP;
  const entries = [[1581,"ἀλάτας","dór. = ἀλήτης.","= ἀλήτης"],[1582,"ἀλάτεια","dór. = ἀλήτεια.","= ἀλήτεια"],[1583,"ἁλάτιον, ου (τό)","porção de sal. 〈ἅλας〉","porção de sal"],[1584,"ἀλᾶτο","dór.= ἠλᾶτο.","= ἠλᾶτο"],[1585,"ἅλατο","dór. = ἥλατο.","= ἥλατο"],[1586,"ἀλαωτύς, ύος (ἡ)","cegueira. 〈ἀλαόω〉","cegueira"],[1587,"ἀλγεινός, ή, όν","(comp. ἀλγίων, superl. ἄλγιστος) 1 que causa dor; doloroso; penoso 2 que experimenta dor; sofredor. 〈ἄλγος〉","que causa dor"],[1588,"ἀλγεινῶς","adv. dolorosamente.","dolorosamente"],[1589,"ἀλγέω-ῶ","(fut. ἀλγήσω, aor. ἥλγησα, perf. desus.) 1 sentir dor; sofrer; estar doente, com ac. de rel. τὰ ὄμματα nos olhos, φρένα na alma; por causa de, dat., ac., gen., διά e ac., ἐπί, ἐν e dat., περί e gen. ou ac. 2 causar dor; fazer sofrer. 〈ἄλγος〉","sentir dor"],[1590,"ἀλγηδών, όνος (ἡ)","sofrimento; dor; aflição. 〈ἀλγέω〉","sofrimento"],[1591,"ἄλγημα, ατος (τό)","sofrimento; pena. 〈ἀλγέω〉","sofrimento"],[1592,"ἄλγησις, εως (ἡ)","pena; dor. 〈ἀλγέω〉","pena"],[1593,"ἄλγιστος, η, ον","superl. de ἀλγεινός.","superl"],[1594,"ἀλγίων, ων, ον","gen. ονος comp. de ἀλγεινός.","gen"],[1595,"ἄλγος, εος-ους (τὸ)","1 sofrimento; dor; pena 2 causa de dor.","sofrimento"],[1596,"ἀλγύνω","(impf. ἤλγυνον, fut. ἀλγυνῶ, aor. ἤλγυνα, perf. desus.; pas. aor. ἠλγύνθην) 1 fazer sofrer; causar dor; afligir ♦ méd. pas. 2 sofrer; sentir dor. 〈ἄλγος〉","fazer sofrer"],[1597,"ἀλδαίνω","(aor.2 ἤλδανον) 1 fazer crescer; nutrir; fortalecer 2 multiplicar.","fazer crescer"],[1598,"ἀλδήσκω","(só pres.) 1 crescer 2 fazer crescer; aumentar. 〈ἀλδαίνω〉","crescer 2 fazer crescer"],[1599,"ἀλέα1, ας (ἡ)","1 calor 2 causa de calor.","calor 2 causa de calor"],[1600,"ἀλέα2","jôn. = ἀλέη.","= ἀλέη"],[1601,"ἁλέα","ac. pl. n. jôn. de ἁλής.","ac"],[1602,"ἀλεαίνω","(aor. ἠλέανα) 1 aquecer 2 ficar quente; estar quente; ser aquecido. 〈ἀλέα1〉","aquecer 2 ficar quente"],[1603,"ἀλέαιτο","3ª sing. opt. aor. de ἀλέομαι.","ª sing"],[1604,"ἀλέασθαι, ἀλέασθε","inf. aor. e 2ª pl. do imper. aor. de ἀλέομαι.","inf"],[1605,"ἀλεγεινός, ή, όν","ép. e poét. = ἀλγεινός.","e poét"],[1606,"ἀλεγίζω","(só pres. e impf.) ficar preocupado com; inquietar-se por, gen. 〈ἀλέγω〉","ficar preocupado com"],[1607,"ἀλεγύνω","preocupar-se com; ocupar-se de, ac. 〈ἀλέγω〉","preocupar-se com"],[1608,"ἀλέγω","(só pres.) 1 preocupar-se com; ocupar-se de, ac. ou gen.: νηῶν ὅπλα ἀλέγουσιν Homero cuidam dos equipamentos das naus 2 honrar; ter consideração por, ac. ou gen.: οὐδ’ ἀλλήλων ἀλέγουσι Homero não têm consideração uns pelos outros. 〈ἀ- protét., λέγω〉","preocupar-se com"],[1609,"ἀλεεινός, ή, όν","exposto ao sol; quente. 〈ἀλέα1〉","exposto ao sol"],[1610,"ἀλεείνω","(só pres., impf. e inf. aor.) 1 evitar; fugir de, ac. ou inf. 2 rar. recuar.","evitar"],[1611,"ἀλέη, ης (ἡ)","jôn. 1 meio de escapar, de evitar 2 abrigo; refúgio.","meio de escapar, de evitar 2 abrigo"],[1612,"ἀλεής, ής, ές","exposto ao sol, em ἀλεὴς ὕπνος Sófocles sono ao calor do sol. 〈ἀλέα1〉","exposto ao sol, em ἀλεὴς ὕπνος sóf"],[1613,"ἀλέηται","subj. aor. de ἀλέομαι.","subj"],[1614,"ἄλειαρ, ατος (τό)","farinha de trigo. 〈ἀλέω〉","farinha de trigo"],[1615,"ἄλειμμα, ατος (τό)","ungüento; óleo perfumado; perfume. 〈ἀλείφω〉","ungüento"],[1616,"ἀλείπτης, ου (ὁ)","1 aquele que unge atletas; professor de ginástica 2 professor. 〈ἀλείφω〉","aquele que unge atletas"],[1617,"ἀλείς, εῖσα, έν","part. aor. pas. de εἴλλω.","part"],[1618,"Ἀλείσιον, ου (τό)","Alesião, n. de localidade e de colina, na Élida.","Alesião, n"],[1619,"ἄλεισον, ου (τό)","copo; taça.","copo"],[1620,"ἀλεῖται","3ª sing. pres. pas. de ἀλέω.","ª sing"],[1621,"ἁλεῖται","3ª sing. fut. de ἅλλομαι.","ª sing"],[1622,"ἀλείτης, ου (ὁ)","culpado; em falta com alguém, gen. 〈ἀλιταίνω〉","culpado"],[1623,"ἀλειτούργητος, ος, ον","isento de tributos, de λειτουργία. 〈ἀ-, λειτουργέω〉","isento de tributos, de λειτουργία"],[1624,"ἄλειφα, ατος (τό)","ἄλειφαρ.","ἄλειφαρ"],[1625,"ἄλειφαρ, ατος (τό)","1 ungüento; óleo 2 resina; pez. 〈ἀλείφω〉","ungüento"],[1626,"ἄλειφε","3ª sing. impf. poét. de ἀλείφω.","ª sing"],[1627,"ἀλείφω","(fut.ἀλείψω, aor. ἤλειψα, perf. ἀλήλιφα; pas. aor. ἠλείφθην, perf. ἀλήλιμμαι) 1 friccionar com óleo; ungir 2 fornecer óleo para o ginásio 3 preparar para a luta; encorajar 4 polir; cobrir com cera 5 crist. ungir; consagrar ♦ méd. 6 untar-se com óleo ♦ pas. 7 receber o óleo; ser ginasta: ἀλείφεσθαι παρά τινι arr. ser ginasta no ginásio de alguém.","friccionar com óleo"],[1628,"ἄλειψις, εως (ἡ)","1 unção 2 hábito de untar-se. 〈ἀλείφω〉","unção 2 hábito de untar-se"],[1629,"ἀλεκτοριδεύς, έως (ὁ)","frango. 〈ἀλέκτωρ〉","frango"],[1630,"ἀλεκτορίς, ίδος (ἡ)","galinha. 〈ἀλέκτωρ〉","galinha"]];
  const esc = x => String(x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  source.rowsHtml += entries.map(([n,h,d,g]) => `<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-${String(n).padStart(4,"0")}" data-source="DGP" data-search="${esc(h+" "+g+" DGP")}" tabindex="0"><td class="table-lemma greek">${esc(h)}</td><td>—</td><td>${esc(g)}</td><td><span class="source-pill">DGP</span></td></tr>`).join("\n");
  source.cardsHtml += entries.map(([n,h,d]) => `<article id="entry-dgp-${String(n).padStart(4,"0")}" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">${esc(h)}</h1><div class="entry-meta"><span>DGP · ordem ${n} na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">${esc(d)}</p></section></article>`).join("\n");
})();


/* ==========================================================
   LOTE 60 — registros 1631–1680; corpus DGP, commit deb54b426
   ========================================================== */
window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1631" data-source="DGP" data-search="ἀλεκτορίσκος, ου (ὁ) galinho. 〈ἀλέκτωρ〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλεκτορίσκος, ου (ὁ)</td><td>—</td><td>galinho. 〈ἀλέκτωρ〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1632" data-source="DGP" data-search="ἀλεκτοροφωνία, ας (ἡ) canto do galo. 〈ἀλέκτωρ, φωνή〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλεκτοροφωνία, ας (ἡ)</td><td>—</td><td>canto do galo. 〈ἀλέκτωρ, φωνή〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1633" data-source="DGP" data-search="ἄλεκτρος, ος, ον não casado ♦ ἄλεκτρα adv DGP" tabindex="0"><td class="table-lemma greek">ἄλεκτρος, ος, ον</td><td>—</td><td>não casado ♦ ἄλεκτρα adv</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1634" data-source="DGP" data-search="ἀλεκτρυών, όνος (ὁ, ἡ) masc. galo DGP" tabindex="0"><td class="table-lemma greek">ἀλεκτρυών, όνος (ὁ, ἡ)</td><td>—</td><td>masc. galo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1635" data-source="DGP" data-search="ἀλέκτωρ, ορος (ὁ) galo DGP" tabindex="0"><td class="table-lemma greek">ἀλέκτωρ, ορος (ὁ)</td><td>—</td><td>galo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1636" data-source="DGP" data-search="ἀλέκω ἀλέξω DGP" tabindex="0"><td class="table-lemma greek">ἀλέκω</td><td>—</td><td>ἀλέξω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1637" data-source="DGP" data-search="ἀλέματος dór. = ἠλέματος. DGP" tabindex="0"><td class="table-lemma greek">ἀλέματος</td><td>—</td><td>dór. = ἠλέματος.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1638" data-source="DGP" data-search="ἄλεν 3ª pl. ép. aor.2 pas. de εἴλλω ou de ἵλλω. DGP" tabindex="0"><td class="table-lemma greek">ἄλεν</td><td>—</td><td>3ª pl. ép. aor.2 pas. de εἴλλω ou de ἵλλω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1639" data-source="DGP" data-search="ἀλέν n. de ἀλείς, part. aor.2 pas. de εἴλλω ou de ἵλλω DGP" tabindex="0"><td class="table-lemma greek">ἀλέν</td><td>—</td><td>n. de ἀλείς, part. aor.2 pas. de εἴλλω ou de ἵλλω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1640" data-source="DGP" data-search="Ἀλεξάνδρεια, ας (ἡ) Alexandria, n. de cidade. 〈Ἀλέ­ξανδρος〉 DGP" tabindex="0"><td class="table-lemma greek">Ἀλεξάνδρεια, ας (ἡ)</td><td>—</td><td>Alexandria, n. de cidade. 〈Ἀλέ­ξανδρος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1641" data-source="DGP" data-search="Ἀλεξανδρεύς, έως (ὁ) natural de Alexandria DGP" tabindex="0"><td class="table-lemma greek">Ἀλεξανδρεύς, έως (ὁ)</td><td>—</td><td>natural de Alexandria</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1642" data-source="DGP" data-search="Ἀλεξανδριστής, οῦ (ὁ) partidário de Alexandre. 〈Ἀλέ­ξανδρος〉 DGP" tabindex="0"><td class="table-lemma greek">Ἀλεξανδριστής, οῦ (ὁ)</td><td>—</td><td>partidário de Alexandre. 〈Ἀλέ­ξανδρος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1643" data-source="DGP" data-search="Ἀλέξανδρος, ου (ὁ) Alexandre, outro nome de Páris, filho de Príamo DGP" tabindex="0"><td class="table-lemma greek">Ἀλέξανδρος, ου (ὁ)</td><td>—</td><td>Alexandre, outro nome de Páris, filho de Príamo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1644" data-source="DGP" data-search="ἀλεξανδρώδης, ης, ες semelhante a Alexandre. 〈Ἀλέ­ξανδρος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλεξανδρώδης, ης, ες</td><td>—</td><td>semelhante a Alexandre. 〈Ἀλέ­ξανδρος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1645" data-source="DGP" data-search="ἀλεξάνεμος, ος, ον que evita o vento DGP" tabindex="0"><td class="table-lemma greek">ἀλεξάνεμος, ος, ον</td><td>—</td><td>que evita o vento</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1646" data-source="DGP" data-search="ἀλέξασθαι inf. aor. méd. de ἀλέξω. DGP" tabindex="0"><td class="table-lemma greek">ἀλέξασθαι</td><td>—</td><td>inf. aor. méd. de ἀλέξω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1647" data-source="DGP" data-search="ἀλεξέμεναι, ἀλεξέμεν inf. pres. ép. de ἀλέξω. DGP" tabindex="0"><td class="table-lemma greek">ἀλεξέμεναι, ἀλεξέμεν</td><td>—</td><td>inf. pres. ép. de ἀλέξω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1648" data-source="DGP" data-search="ἀλέξημα, ατος (τό) defesa DGP" tabindex="0"><td class="table-lemma greek">ἀλέξημα, ατος (τό)</td><td>—</td><td>defesa</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1649" data-source="DGP" data-search="ἀλέξησις, εως (ἡ) guarda DGP" tabindex="0"><td class="table-lemma greek">ἀλέξησις, εως (ἡ)</td><td>—</td><td>guarda</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1650" data-source="DGP" data-search="ἀλεξητήρ, ῆρος (ὁ) aquele que afasta DGP" tabindex="0"><td class="table-lemma greek">ἀλεξητήρ, ῆρος (ὁ)</td><td>—</td><td>aquele que afasta</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1651" data-source="DGP" data-search="ἀλεξητήριος, α, ον capaz de defender, de proteger contra, gen. ♦ τὸ ἀλεξητήριον DGP" tabindex="0"><td class="table-lemma greek">ἀλεξητήριος, α, ον</td><td>—</td><td>capaz de defender, de proteger contra, gen. ♦ τὸ ἀλεξητήριον</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1652" data-source="DGP" data-search="ἀλεξήτωρ, ορος (ὁ) protetor DGP" tabindex="0"><td class="table-lemma greek">ἀλεξήτωρ, ορος (ὁ)</td><td>—</td><td>protetor</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1653" data-source="DGP" data-search="ἀλεξίκακος, ος, ον capaz de afastar o mal. 〈ἀλέξω, κακόν〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλεξίκακος, ος, ον</td><td>—</td><td>capaz de afastar o mal. 〈ἀλέξω, κακόν〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1654" data-source="DGP" data-search="ἀλεξίμορος, ος, ον capaz de afastar a morte. 〈αλέξω, μόρος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλεξίμορος, ος, ον</td><td>—</td><td>capaz de afastar a morte. 〈αλέξω, μόρος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1655" data-source="DGP" data-search="ἀλέξομαι pres. méd. de ἀλέξω e fut. méd. de ἀλέκω. DGP" tabindex="0"><td class="table-lemma greek">ἀλέξομαι</td><td>—</td><td>pres. méd. de ἀλέξω e fut. méd. de ἀλέκω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1656" data-source="DGP" data-search="ἀλέξω afastar algo, ac., de alguém, gen. ou dat.; proteger DGP" tabindex="0"><td class="table-lemma greek">ἀλέξω</td><td>—</td><td>afastar algo, ac., de alguém, gen. ou dat.; proteger</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1657" data-source="DGP" data-search="ἀλεξώμεσθα 1ª pl. ép. subj. pres. méd. de ἀλέξω. DGP" tabindex="0"><td class="table-lemma greek">ἀλεξώμεσθα</td><td>—</td><td>1ª pl. ép. subj. pres. méd. de ἀλέξω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1658" data-source="DGP" data-search="ἀλέομαι evitar DGP" tabindex="0"><td class="table-lemma greek">ἀλέομαι</td><td>—</td><td>evitar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1659" data-source="DGP" data-search="ἄλεπος, ος, ον sem escamas. 〈ἀ-, λέπω〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλεπος, ος, ον</td><td>—</td><td>sem escamas. 〈ἀ-, λέπω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1660" data-source="DGP" data-search="ἅλες pl. de ἅλς DGP" tabindex="0"><td class="table-lemma greek">ἅλες</td><td>—</td><td>pl. de ἅλς</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1661" data-source="DGP" data-search="ἀλές n. de ἁλής DGP" tabindex="0"><td class="table-lemma greek">ἀλές</td><td>—</td><td>n. de ἁλής</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1662" data-source="DGP" data-search="ἁλέσθαι inf. aor.2 de ἅλλομαι. DGP" tabindex="0"><td class="table-lemma greek">ἁλέσθαι</td><td>—</td><td>inf. aor.2 de ἅλλομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1663" data-source="DGP" data-search="ἅλεται 3ª sing. subj. aor.2 ép. de ἅλλομαι. DGP" tabindex="0"><td class="table-lemma greek">ἅλεται</td><td>—</td><td>3ª sing. subj. aor.2 ép. de ἅλλομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1664" data-source="DGP" data-search="ἀλέτης, ου próprio para moer, em ἀλέτης ὄνος Xenofonte pedra de moinho. 〈ἀλέω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλέτης, ου</td><td>—</td><td>próprio para moer, em ἀλέτης ὄνος Xenofonte pedra de moinho. 〈ἀλέω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1665" data-source="DGP" data-search="ἄλετος, ου e ἀλετός, οῦ (ὁ) ação de moer DGP" tabindex="0"><td class="table-lemma greek">ἄλετος, ου</td><td>—</td><td>e ἀλετός, οῦ (ὁ) ação de moer</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1666" data-source="DGP" data-search="ἀλετρεύω moer. 〈ἀλέω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλετρεύω</td><td>—</td><td>moer. 〈ἀλέω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1667" data-source="DGP" data-search="ἀλέτρια, ων (τά) moedura DGP" tabindex="0"><td class="table-lemma greek">ἀλέτρια, ων (τά)</td><td>—</td><td>moedura</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1668" data-source="DGP" data-search="ἀλετρίβανος, ου (ὁ) pilão DGP" tabindex="0"><td class="table-lemma greek">ἀλετρίβανος, ου (ὁ)</td><td>—</td><td>pilão</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1669" data-source="DGP" data-search="ἀλετρίς, ίδος (ἡ) mulher que cuida de moinho DGP" tabindex="0"><td class="table-lemma greek">ἀλετρίς, ίδος (ἡ)</td><td>—</td><td>mulher que cuida de moinho</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1670" data-source="DGP" data-search="ἀλεῦ 2ª sing. imper. pres. jôn. de ἀλέομαι. DGP" tabindex="0"><td class="table-lemma greek">ἀλεῦ</td><td>—</td><td>2ª sing. imper. pres. jôn. de ἀλέομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1671" data-source="DGP" data-search="ἄλευαι 2ª sing. imper. aor. méd. ép. de ἀλεύω. DGP" tabindex="0"><td class="table-lemma greek">ἄλευαι</td><td>—</td><td>2ª sing. imper. aor. méd. ép. de ἀλεύω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1672" data-source="DGP" data-search="ἀλευάμενος, ἀλεύασθαι part. e inf. aor. méd. ép. de ἀλεύω. DGP" tabindex="0"><td class="table-lemma greek">ἀλευάμενος, ἀλεύασθαι</td><td>—</td><td>part. e inf. aor. méd. ép. de ἀλεύω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1673" data-source="DGP" data-search="ἀλεύαντο, ἀλεύατο 3ª pl. e sing. aor. méd. ép. de ἀλεύω. DGP" tabindex="0"><td class="table-lemma greek">ἀλεύαντο, ἀλεύατο</td><td>—</td><td>3ª pl. e sing. aor. méd. ép. de ἀλεύω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1674" data-source="DGP" data-search="ἀλεύεται 3a sing. subj. aor. méd. ép. de ἀλεύω DGP" tabindex="0"><td class="table-lemma greek">ἀλεύεται</td><td>—</td><td>3a sing. subj. aor. méd. ép. de ἀλεύω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1675" data-source="DGP" data-search="ἁλεῦμαι fut. dór. de ἅλλομαι. DGP" tabindex="0"><td class="table-lemma greek">ἁλεῦμαι</td><td>—</td><td>fut. dór. de ἅλλομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1676" data-source="DGP" data-search="ἄλευρον, ου (τό) farinha de trigo DGP" tabindex="0"><td class="table-lemma greek">ἄλευρον, ου (τό)</td><td>—</td><td>farinha de trigo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1677" data-source="DGP" data-search="ἀλεύω afastar DGP" tabindex="0"><td class="table-lemma greek">ἀλεύω</td><td>—</td><td>afastar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1678" data-source="DGP" data-search="ἀλέω-ῶ moer DGP" tabindex="0"><td class="table-lemma greek">ἀλέω-ῶ</td><td>—</td><td>moer</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1679" data-source="DGP" data-search="ἀλεώμεθα 1a pl. subj. aor. ép. de ἀλέομαι DGP" tabindex="0"><td class="table-lemma greek">ἀλεώμεθα</td><td>—</td><td>1a pl. subj. aor. ép. de ἀλέομαι</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1680" data-source="DGP" data-search="ἀλεωρά, ᾶς (ἡ) meio de evitar DGP" tabindex="0"><td class="table-lemma greek">ἀλεωρά, ᾶς (ἡ)</td><td>—</td><td>meio de evitar</td><td><span class="source-pill">DGP</span></td></tr>
`;
window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-1631" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεκτορίσκος, ου (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1631 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">galinho. 〈ἀλέκτωρ〉</p></section></article>
<article id="entry-dgp-1632" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεκτοροφωνία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1632 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">canto do galo. 〈ἀλέκτωρ, φωνή〉</p></section></article>
<article id="entry-dgp-1633" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλεκτρος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1633 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 não casado ♦ ἄλεκτρα adv. 2 sem casamento. 〈ἀ-, λέκτρον〉</p></section></article>
<article id="entry-dgp-1634" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεκτρυών, όνος (ὁ, ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1634 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 masc. galo 2 fem. galinha. 〈ἀλέκτωρ〉</p></section></article>
<article id="entry-dgp-1635" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέκτωρ, ορος (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1635 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 galo 2 trombeta.</p></section></article>
<article id="entry-dgp-1636" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέκω</h1><div class="entry-meta"><span>DGP · ordem 1636 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ἀλέξω.</p></section></article>
<article id="entry-dgp-1637" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέματος</h1><div class="entry-meta"><span>DGP · ordem 1637 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἠλέματος.</p></section></article>
<article id="entry-dgp-1638" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλεν</h1><div class="entry-meta"><span>DGP · ordem 1638 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">3ª pl. ép. aor.2 pas. de εἴλλω ou de ἵλλω.</p></section></article>
<article id="entry-dgp-1639" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέν</h1><div class="entry-meta"><span>DGP · ordem 1639 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">n. de ἀλείς, part. aor.2 pas. de εἴλλω ou de ἵλλω.</p></section></article>
<article id="entry-dgp-1640" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλεξάνδρεια, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1640 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">Alexandria, n. de cidade. 〈Ἀλέ­ξανδρος〉</p></section></article>
<article id="entry-dgp-1641" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλεξανδρεύς, έως (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1641 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">natural de Alexandria; alexandrino. 〈Ἀλεξάνδρεια〉</p></section></article>
<article id="entry-dgp-1642" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλεξανδριστής, οῦ (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1642 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">partidário de Alexandre. 〈Ἀλέ­ξανδρος〉</p></section></article>
<article id="entry-dgp-1643" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλέξανδρος, ου (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1643 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 Alexandre, outro nome de Páris, filho de Príamo 2 Alexandre, rei da Macedônia. 〈ἀλέξω, ἀνήρ〉</p></section></article>
<article id="entry-dgp-1644" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεξανδρώδης, ης, ες</h1><div class="entry-meta"><span>DGP · ordem 1644 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">semelhante a Alexandre. 〈Ἀλέ­ξανδρος〉</p></section></article>
<article id="entry-dgp-1645" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεξάνεμος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1645 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que evita o vento; que protege do vento. 〈ἀλέκω, ἄνεμος〉</p></section></article>
<article id="entry-dgp-1646" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέξασθαι</h1><div class="entry-meta"><span>DGP · ordem 1646 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">inf. aor. méd. de ἀλέξω.</p></section></article>
<article id="entry-dgp-1647" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεξέμεναι, ἀλεξέμεν</h1><div class="entry-meta"><span>DGP · ordem 1647 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">inf. pres. ép. de ἀλέξω.</p></section></article>
<article id="entry-dgp-1648" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέξημα, ατος (τό)</h1><div class="entry-meta"><span>DGP · ordem 1648 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">defesa; proteção; socorro contra alguém, gen. ou πρός e ac. 〈ἀλέκω〉</p></section></article>
<article id="entry-dgp-1649" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέξησις, εως (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1649 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">guarda; defesa; assistência. 〈ἀλέξω〉</p></section></article>
<article id="entry-dgp-1650" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεξητήρ, ῆρος (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1650 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">aquele que afasta; aquele que protege contra, gen. 〈ἀλέξω〉</p></section></article>
<article id="entry-dgp-1651" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεξητήριος, α, ον</h1><div class="entry-meta"><span>DGP · ordem 1651 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 capaz de defender, de proteger contra, gen. ♦ τὸ ἀλεξητήριον 2 medicamento; remédio. 〈ἀλέξω〉</p></section></article>
<article id="entry-dgp-1652" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεξήτωρ, ορος (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1652 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">protetor; defensor. 〈ἀλέξω〉</p></section></article>
<article id="entry-dgp-1653" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεξίκακος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1653 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">capaz de afastar o mal. 〈ἀλέξω, κακόν〉</p></section></article>
<article id="entry-dgp-1654" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεξίμορος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1654 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">capaz de afastar a morte. 〈αλέξω, μόρος〉</p></section></article>
<article id="entry-dgp-1655" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέξομαι</h1><div class="entry-meta"><span>DGP · ordem 1655 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">pres. méd. de ἀλέξω e fut. méd. de ἀλέκω.</p></section></article>
<article id="entry-dgp-1656" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέξω</h1><div class="entry-meta"><span>DGP · ordem 1656 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἀλεξήσω, aor. ἠλέξησα, perf. desus.) 1 afastar algo, ac., de alguém, gen. ou dat.; proteger; livrar 2 amparar; defender; socorrer, dat. ♦ méd. 3 defender-se de; repelir, ac. 4 pagar na mesma moeda, revidar: τοὺς εὖ καὶ κακῶς ποιοῦντας ἀλεξόμενος Xenofonte dando o troco tanto aos que faziam o mal quanto aos que faziam o bem.</p></section></article>
<article id="entry-dgp-1657" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεξώμεσθα</h1><div class="entry-meta"><span>DGP · ordem 1657 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1ª pl. ép. subj. pres. méd. de ἀλέξω.</p></section></article>
<article id="entry-dgp-1658" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέομαι</h1><div class="entry-meta"><span>DGP · ordem 1658 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(só pres., impf. e aor. ἠλεάμην) evitar; escapar de; fugir de, ac.</p></section></article>
<article id="entry-dgp-1659" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλεπος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1659 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">sem escamas. 〈ἀ-, λέπω〉</p></section></article>
<article id="entry-dgp-1660" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλες</h1><div class="entry-meta"><span>DGP · ordem 1660 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">pl. de ἅλς.</p></section></article>
<article id="entry-dgp-1661" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλές</h1><div class="entry-meta"><span>DGP · ordem 1661 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">n. de ἁλής.</p></section></article>
<article id="entry-dgp-1662" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλέσθαι</h1><div class="entry-meta"><span>DGP · ordem 1662 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">inf. aor.2 de ἅλλομαι.</p></section></article>
<article id="entry-dgp-1663" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλεται</h1><div class="entry-meta"><span>DGP · ordem 1663 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">3ª sing. subj. aor.2 ép. de ἅλλομαι.</p></section></article>
<article id="entry-dgp-1664" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέτης, ου</h1><div class="entry-meta"><span>DGP · ordem 1664 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(masc.) próprio para moer, em ἀλέτης ὄνος Xenofonte pedra de moinho. 〈ἀλέω〉</p></section></article>
<article id="entry-dgp-1665" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλετος, ου</h1><div class="entry-meta"><span>DGP · ordem 1665 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">e ἀλετός, οῦ (ὁ) ação de moer; moagem. 〈ἀλέω〉</p></section></article>
<article id="entry-dgp-1666" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλετρεύω</h1><div class="entry-meta"><span>DGP · ordem 1666 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">moer. 〈ἀλέω〉</p></section></article>
<article id="entry-dgp-1667" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέτρια, ων (τά)</h1><div class="entry-meta"><span>DGP · ordem 1667 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">moedura; trituração. 〈ἀλέω〉</p></section></article>
<article id="entry-dgp-1668" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλετρίβανος, ου (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1668 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">pilão; almofariz. 〈ἀλέω, τρίβω〉</p></section></article>
<article id="entry-dgp-1669" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλετρίς, ίδος (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1669 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">mulher que cuida de moinho; moleira. 〈ἀλέω〉</p></section></article>
<article id="entry-dgp-1670" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεῦ</h1><div class="entry-meta"><span>DGP · ordem 1670 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">2ª sing. imper. pres. jôn. de ἀλέομαι.</p></section></article>
<article id="entry-dgp-1671" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλευαι</h1><div class="entry-meta"><span>DGP · ordem 1671 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">2ª sing. imper. aor. méd. ép. de ἀλεύω.</p></section></article>
<article id="entry-dgp-1672" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλευάμενος, ἀλεύασθαι</h1><div class="entry-meta"><span>DGP · ordem 1672 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">part. e inf. aor. méd. ép. de ἀλεύω.</p></section></article>
<article id="entry-dgp-1673" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεύαντο, ἀλεύατο</h1><div class="entry-meta"><span>DGP · ordem 1673 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">3ª pl. e sing. aor. méd. ép. de ἀλεύω.</p></section></article>
<article id="entry-dgp-1674" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεύεται</h1><div class="entry-meta"><span>DGP · ordem 1674 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">3a sing. subj. aor. méd. ép. de ἀλεύω.</p></section></article>
<article id="entry-dgp-1675" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλεῦμαι</h1><div class="entry-meta"><span>DGP · ordem 1675 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">fut. dór. de ἅλλομαι.</p></section></article>
<article id="entry-dgp-1676" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλευρον, ου (τό)</h1><div class="entry-meta"><span>DGP · ordem 1676 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">farinha de trigo; farinha. 〈ἀλέω〉</p></section></article>
<article id="entry-dgp-1677" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεύω</h1><div class="entry-meta"><span>DGP · ordem 1677 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἀλεύσω, aor. ἤλευσα) 1 afastar; desviar 2 pro­teger ♦ méd. 3 desviar de si; evitar.</p></section></article>
<article id="entry-dgp-1678" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1678 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(impf. ἤλουν, fut. ἀλέσω, át. ἀλῶ, aor. ἤλεσα, perf. ἀλήλεκα; pas. aor. ἠλέσθην, perf. ἀλήλεσμαι e ἀλήλεμαι) moer.</p></section></article>
<article id="entry-dgp-1679" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεώμεθα</h1><div class="entry-meta"><span>DGP · ordem 1679 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1a pl. subj. aor. ép. de ἀλέομαι.</p></section></article>
<article id="entry-dgp-1680" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλεωρά, ᾶς (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1680 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">meio de evitar; meio de escapar; refúgio contra alguém, gen.</p></section></article>
`;


/* ==========================================================
   LOTE 61 — registros 1681–1730; corpus DGP, commit deb54b426
   ========================================================== */
window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1681" data-source="DGP" data-search="ἄλη, ης (ἡ) andança sem rumo DGP" tabindex="0"><td class="table-lemma greek">ἄλη, ης (ἡ)</td><td>—</td><td>andança sem rumo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1682" data-source="DGP" data-search="ἀλήθεια, ας (ἡ) verdade DGP" tabindex="0"><td class="table-lemma greek">ἀλήθεια, ας (ἡ)</td><td>—</td><td>verdade</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1683" data-source="DGP" data-search="ἀληθεύω falar de acordo com a verdade DGP" tabindex="0"><td class="table-lemma greek">ἀληθεύω</td><td>—</td><td>falar de acordo com a verdade</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1684" data-source="DGP" data-search="ἀληθέως jôn. = ἀληθῶς. DGP" tabindex="0"><td class="table-lemma greek">ἀληθέως</td><td>—</td><td>jôn. = ἀληθῶς.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1685" data-source="DGP" data-search="ἀλήθην aor. poét. de ἀλάομαι. DGP" tabindex="0"><td class="table-lemma greek">ἀλήθην</td><td>—</td><td>aor. poét. de ἀλάομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1686" data-source="DGP" data-search="ἀληθής ής, ές verdadeiro DGP" tabindex="0"><td class="table-lemma greek">ἀληθής ής, ές</td><td>—</td><td>verdadeiro</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1687" data-source="DGP" data-search="ἀληθίζω at. e méd. dizer a verdade. 〈ἀληθής〉 DGP" tabindex="0"><td class="table-lemma greek">ἀληθίζω</td><td>—</td><td>at. e méd. dizer a verdade. 〈ἀληθής〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1688" data-source="DGP" data-search="ἀληθινός, ή, όν verídico DGP" tabindex="0"><td class="table-lemma greek">ἀληθινός, ή, όν</td><td>—</td><td>verídico</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1689" data-source="DGP" data-search="ἀληθινῶς adv. verdadeiramente DGP" tabindex="0"><td class="table-lemma greek">ἀληθινῶς</td><td>—</td><td>adv. verdadeiramente</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1690" data-source="DGP" data-search="ἀληθόμαντις, εως (ὁ, ἡ) profeta ou profetisa veraz. 〈ἀληθής, μάντις〉 DGP" tabindex="0"><td class="table-lemma greek">ἀληθόμαντις, εως (ὁ, ἡ)</td><td>—</td><td>profeta ou profetisa veraz. 〈ἀληθής, μάντις〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1691" data-source="DGP" data-search="ἀλήθω = ἀλέω DGP" tabindex="0"><td class="table-lemma greek">ἀλήθω</td><td>—</td><td>= ἀλέω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1692" data-source="DGP" data-search="ἀληθῶς adv. verdadeiramente DGP" tabindex="0"><td class="table-lemma greek">ἀληθῶς</td><td>—</td><td>adv. verdadeiramente</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1693" data-source="DGP" data-search="ἀλήϊος, ος, ον sem bens DGP" tabindex="0"><td class="table-lemma greek">ἀλήϊος, ος, ον</td><td>—</td><td>sem bens</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1694" data-source="DGP" data-search="ἄληκτος, ος, ον tard. = ἄλληκτος DGP" tabindex="0"><td class="table-lemma greek">ἄληκτος, ος, ον</td><td>—</td><td>tard. = ἄλληκτος</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1695" data-source="DGP" data-search="ἀλήλεκα, ἀλήλεμαι, ἀλήλεσμαι cf. ἀλέω DGP" tabindex="0"><td class="table-lemma greek">ἀλήλεκα, ἀλήλεμαι, ἀλήλεσμαι</td><td>—</td><td>cf. ἀλέω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1696" data-source="DGP" data-search="ἀλήλιμμαι, ἀλήλιφα cf. ἀλείφω DGP" tabindex="0"><td class="table-lemma greek">ἀλήλιμμαι, ἀλήλιφα</td><td>—</td><td>cf. ἀλείφω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1697" data-source="DGP" data-search="ἄλημα, ατος (τό) farinha fina DGP" tabindex="0"><td class="table-lemma greek">ἄλημα, ατος (τό)</td><td>—</td><td>farinha fina</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1698" data-source="DGP" data-search="ἀλήμεναι inf. aor. pas. poét. de εἴλλω. DGP" tabindex="0"><td class="table-lemma greek">ἀλήμεναι</td><td>—</td><td>inf. aor. pas. poét. de εἴλλω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1699" data-source="DGP" data-search="ἀλήμων, ων, ον gen. ονος que vagueia DGP" tabindex="0"><td class="table-lemma greek">ἀλήμων, ων, ον</td><td>—</td><td>gen. ονος que vagueia</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1700" data-source="DGP" data-search="ἀλῆναι inf. aor. pas. de εἴλλω ou de ἵλλω. DGP" tabindex="0"><td class="table-lemma greek">ἀλῆναι</td><td>—</td><td>inf. aor. pas. de εἴλλω ou de ἵλλω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1701" data-source="DGP" data-search="ἄληπτος, ος, ον inexpugnável DGP" tabindex="0"><td class="table-lemma greek">ἄληπτος, ος, ον</td><td>—</td><td>inexpugnável</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1702" data-source="DGP" data-search="ἁλής, ής, ές reunido DGP" tabindex="0"><td class="table-lemma greek">ἁλής, ής, ές</td><td>—</td><td>reunido</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1703" data-source="DGP" data-search="ἅληται 3ª sing. subj. aor.2 de ἅλλομαι. DGP" tabindex="0"><td class="table-lemma greek">ἅληται</td><td>—</td><td>3ª sing. subj. aor.2 de ἅλλομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1704" data-source="DGP" data-search="ἀλητεία, ας (ἡ) vida sem rumo DGP" tabindex="0"><td class="table-lemma greek">ἀλητεία, ας (ἡ)</td><td>—</td><td>vida sem rumo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1705" data-source="DGP" data-search="ἀλητεύω vagar DGP" tabindex="0"><td class="table-lemma greek">ἀλητεύω</td><td>—</td><td>vagar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1706" data-source="DGP" data-search="ἀλήτης, ου errante DGP" tabindex="0"><td class="table-lemma greek">ἀλήτης, ου</td><td>—</td><td>errante</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1707" data-source="DGP" data-search="ἀλῆτο 3ª sing. impf. dór. de ἀλάομαι. DGP" tabindex="0"><td class="table-lemma greek">ἀλῆτο</td><td>—</td><td>3ª sing. impf. dór. de ἀλάομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1708" data-source="DGP" data-search="ἀλθαίνω fazer recuperar a saúde DGP" tabindex="0"><td class="table-lemma greek">ἀλθαίνω</td><td>—</td><td>fazer recuperar a saúde</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1709" data-source="DGP" data-search="ἄλθετο impf. ou aor. ép. de ἄλθομαι. DGP" tabindex="0"><td class="table-lemma greek">ἄλθετο</td><td>—</td><td>impf. ou aor. ép. de ἄλθομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1710" data-source="DGP" data-search="ἄλθομαι curar-se DGP" tabindex="0"><td class="table-lemma greek">ἄλθομαι</td><td>—</td><td>curar-se</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1711" data-source="DGP" data-search="ἁλία1, ας (ἡ) assembléia popular. 〈ἁλής〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλία1, ας (ἡ)</td><td>—</td><td>assembléia popular. 〈ἁλής〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1712" data-source="DGP" data-search="ἁλία2 fem. de ἅλιος2 DGP" tabindex="0"><td class="table-lemma greek">ἁλία2</td><td>—</td><td>fem. de ἅλιος2</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1713" data-source="DGP" data-search="ἄλια n. pl. de ἅλιος2 DGP" tabindex="0"><td class="table-lemma greek">ἄλια</td><td>—</td><td>n. pl. de ἅλιος2</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1714" data-source="DGP" data-search="ἁλιάδαι, ῶν (οἱ) homens do mar DGP" tabindex="0"><td class="table-lemma greek">ἁλιάδαι, ῶν (οἱ)</td><td>—</td><td>homens do mar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1715" data-source="DGP" data-search="ἁλιαής, ής, ές que sopra sobre o mar. 〈ἅλς, ἄημι〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλιαής, ής, ές</td><td>—</td><td>que sopra sobre o mar. 〈ἅλς, ἄημι〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1716" data-source="DGP" data-search="ἀλίαστος, ος, ον incessante DGP" tabindex="0"><td class="table-lemma greek">ἀλίαστος, ος, ον</td><td>—</td><td>incessante</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1717" data-source="DGP" data-search="ἀλιβαντίς φύλη (ἡ) a tribo dos mortos. 〈ἀλίβας〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλιβαντίς φύλη (ἡ)</td><td>—</td><td>a tribo dos mortos. 〈ἀλίβας〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1718" data-source="DGP" data-search="ἀλίβας, αντος (ὁ) corpo sem vida DGP" tabindex="0"><td class="table-lemma greek">ἀλίβας, αντος (ὁ)</td><td>—</td><td>corpo sem vida</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1719" data-source="DGP" data-search="ἁλιγενής, ής, ές nascido do mar. 〈ἅλς, γίγνομαι〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλιγενής, ής, ές</td><td>—</td><td>nascido do mar. 〈ἅλς, γίγνομαι〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1720" data-source="DGP" data-search="ἀλίγκιος, α ον semelhante a, dat DGP" tabindex="0"><td class="table-lemma greek">ἀλίγκιος, α ον</td><td>—</td><td>semelhante a, dat</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1721" data-source="DGP" data-search="ἁλίδονος, ος, ον sacudido sobre o mar. 〈ἅλς, δονέω〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλίδονος, ος, ον</td><td>—</td><td>sacudido sobre o mar. 〈ἅλς, δονέω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1722" data-source="DGP" data-search="ἁλιεία, ας (ἡ) pesca. 〈ἁλιεύς〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλιεία, ας (ἡ)</td><td>—</td><td>pesca. 〈ἁλιεύς〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1723" data-source="DGP" data-search="ἁλιεύς, έως (ὁ) marinheiro DGP" tabindex="0"><td class="table-lemma greek">ἁλιεύς, έως (ὁ)</td><td>—</td><td>marinheiro</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1724" data-source="DGP" data-search="ἁλιευτικός, ή, όν de pesca ♦ ἡ ἁλιευτική [τέχνη] DGP" tabindex="0"><td class="table-lemma greek">ἁλιευτικός, ή, όν</td><td>—</td><td>de pesca ♦ ἡ ἁλιευτική [τέχνη]</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1725" data-source="DGP" data-search="ἁλιεύω ser pescador ♦ at. e méd DGP" tabindex="0"><td class="table-lemma greek">ἁλιεύω</td><td>—</td><td>ser pescador ♦ at. e méd</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1726" data-source="DGP" data-search="ἁλίζω1 salgar DGP" tabindex="0"><td class="table-lemma greek">ἁλίζω1</td><td>—</td><td>salgar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1727" data-source="DGP" data-search="ἁλίζω2 reunir DGP" tabindex="0"><td class="table-lemma greek">ἁλίζω2</td><td>—</td><td>reunir</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1728" data-source="DGP" data-search="ἁλίη jôn. = ἁλία. DGP" tabindex="0"><td class="table-lemma greek">ἁλίη</td><td>—</td><td>jôn. = ἁλία.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1729" data-source="DGP" data-search="ἁλιήρης, ης, ες que fende o mar. 〈ἅλς, ἀρέσσω〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλιήρης, ης, ες</td><td>—</td><td>que fende o mar. 〈ἅλς, ἀρέσσω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1730" data-source="DGP" data-search="ἀλίθιος, α, ον dór. = ἠλίθιος. DGP" tabindex="0"><td class="table-lemma greek">ἀλίθιος, α, ον</td><td>—</td><td>dór. = ἠλίθιος.</td><td><span class="source-pill">DGP</span></td></tr>
`;
window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-1681" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλη, ης (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1681 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 andança sem rumo 2 incerteza.</p></section></article>
<article id="entry-dgp-1682" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλήθεια, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1682 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 verdade: παιδὸς πᾶσαν ἀληθείην μυθήσομαι Homero direi toda a verdade sobre teu filho 2 sinceridade; franqueza: τίς ἀληθείᾳ φρενῶν πονήσει; Ésquilo quem cuidará com sinceridade? 3 veracidade oracular 4 realidade: ὅπως ἐρυθροτέρα φαίνοιτο τῆς ἀληθείας Xenofonte para parecer mais rósea que a realidade; τῇ ἀληθείᾳ, ἐν τῇ ἀληθείᾳ, σὺν ou ἐπ’ ἀληθείᾳ, εἰς e κατ’ ἀληθείαν, μετ’ ἀληθείας na realidade. 〈ἀληθής〉</p></section></article>
<article id="entry-dgp-1683" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀληθεύω</h1><div class="entry-meta"><span>DGP · ordem 1683 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἀλθεύσω, aor.ἠλήθευσα, perf. ἠλήθευκα) 1 falar de acordo com a verdade; dizer a verdade 2 declarar com franqueza 3 atestar como verdadeiro 4 ser verdadeiro ♦ méd. 5 dizer a verdade ♦ pas. 6 ἀληθεύεται é conforme a verdade. 〈ἀληθής〉</p></section></article>
<article id="entry-dgp-1684" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀληθέως</h1><div class="entry-meta"><span>DGP · ordem 1684 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">jôn. = ἀληθῶς.</p></section></article>
<article id="entry-dgp-1685" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλήθην</h1><div class="entry-meta"><span>DGP · ordem 1685 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">aor. poét. de ἀλάομαι.</p></section></article>
<article id="entry-dgp-1686" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀληθής ής, ές</h1><div class="entry-meta"><span>DGP · ordem 1686 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 verdadeiro 2 verídico 3 franco; sincero 4 real; que se realiza; genuíno 5 que não esquece; atento 6 n. ἄληθες, em inter. irônicas, verdade? ♦ τὸ ἀληθές 7 verdade. 〈ἀ-, λαθεῖν〉</p></section></article>
<article id="entry-dgp-1687" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀληθίζω</h1><div class="entry-meta"><span>DGP · ordem 1687 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">at. e méd. dizer a verdade. 〈ἀληθής〉</p></section></article>
<article id="entry-dgp-1688" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀληθινός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 1688 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 verídico 2 real; genuíno 3 legítimo (filho) 4 veraz; sincero (pessoa). 〈ἀληθής〉</p></section></article>
<article id="entry-dgp-1689" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀληθινῶς</h1><div class="entry-meta"><span>DGP · ordem 1689 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. verdadeiramente; realmente.</p></section></article>
<article id="entry-dgp-1690" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀληθόμαντις, εως (ὁ, ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1690 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">profeta ou profetisa veraz. 〈ἀληθής, μάντις〉</p></section></article>
<article id="entry-dgp-1691" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλήθω</h1><div class="entry-meta"><span>DGP · ordem 1691 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(impf. ἤληθον) = ἀλέω.</p></section></article>
<article id="entry-dgp-1692" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀληθῶς</h1><div class="entry-meta"><span>DGP · ordem 1692 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. verdadeiramente; realmente; sinceramente. 〈ἀληθής〉</p></section></article>
<article id="entry-dgp-1693" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλήϊος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1693 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">sem bens; pobre. 〈ἀ-, λήϊον〉</p></section></article>
<article id="entry-dgp-1694" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄληκτος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1694 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">tard. = ἄλληκτος.</p></section></article>
<article id="entry-dgp-1695" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλήλεκα, ἀλήλεμαι, ἀλήλεσμαι</h1><div class="entry-meta"><span>DGP · ordem 1695 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">cf. ἀλέω.</p></section></article>
<article id="entry-dgp-1696" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλήλιμμαι, ἀλήλιφα</h1><div class="entry-meta"><span>DGP · ordem 1696 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">cf. ἀλείφω.</p></section></article>
<article id="entry-dgp-1697" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλημα, ατος (τό)</h1><div class="entry-meta"><span>DGP · ordem 1697 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 farinha fina 2 finório. 〈ἀλέω〉</p></section></article>
<article id="entry-dgp-1698" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλήμεναι</h1><div class="entry-meta"><span>DGP · ordem 1698 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">inf. aor. pas. poét. de εἴλλω.</p></section></article>
<article id="entry-dgp-1699" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλήμων, ων, ον</h1><div class="entry-meta"><span>DGP · ordem 1699 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">gen. ονος que vagueia; errante. 〈ἀλάομαι〉</p></section></article>
<article id="entry-dgp-1700" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλῆναι</h1><div class="entry-meta"><span>DGP · ordem 1700 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">inf. aor. pas. de εἴλλω ou de ἵλλω.</p></section></article>
<article id="entry-dgp-1701" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄληπτος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1701 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">inexpugnável; difícil de tomar; incompreensível. 〈ἀ-, ληπτός〉</p></section></article>
<article id="entry-dgp-1702" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλής, ής, ές</h1><div class="entry-meta"><span>DGP · ordem 1702 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">reunido; amontoado.</p></section></article>
<article id="entry-dgp-1703" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅληται</h1><div class="entry-meta"><span>DGP · ordem 1703 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">3ª sing. subj. aor.2 de ἅλλομαι.</p></section></article>
<article id="entry-dgp-1704" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλητεία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1704 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">vida sem rumo; vida errante. 〈ἀλήτης〉</p></section></article>
<article id="entry-dgp-1705" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλητεύω</h1><div class="entry-meta"><span>DGP · ordem 1705 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(só pres. e fut.) vagar; andar sem rumo. 〈ἀλήτης〉</p></section></article>
<article id="entry-dgp-1706" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλήτης, ου</h1><div class="entry-meta"><span>DGP · ordem 1706 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(masc.) errante.</p></section></article>
<article id="entry-dgp-1707" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλῆτο</h1><div class="entry-meta"><span>DGP · ordem 1707 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">3ª sing. impf. dór. de ἀλάομαι.</p></section></article>
<article id="entry-dgp-1708" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλθαίνω</h1><div class="entry-meta"><span>DGP · ordem 1708 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἀλθήσω, aor. ἤλθησα) 1 fazer recuperar a saúde; curar ♦ méd. 2 recuperar a saúde; curar-se.</p></section></article>
<article id="entry-dgp-1709" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλθετο</h1><div class="entry-meta"><span>DGP · ordem 1709 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">impf. ou aor. ép. de ἄλθομαι.</p></section></article>
<article id="entry-dgp-1710" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλθομαι</h1><div class="entry-meta"><span>DGP · ordem 1710 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(só 3ª sing impf. ép. ἄλθετο) curar-se.</p></section></article>
<article id="entry-dgp-1711" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλία1, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1711 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">assembléia popular. 〈ἁλής〉</p></section></article>
<article id="entry-dgp-1712" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλία2</h1><div class="entry-meta"><span>DGP · ordem 1712 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">fem. de ἅλιος2.</p></section></article>
<article id="entry-dgp-1713" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλια</h1><div class="entry-meta"><span>DGP · ordem 1713 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">n. pl. de ἅλιος2.</p></section></article>
<article id="entry-dgp-1714" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιάδαι, ῶν (οἱ)</h1><div class="entry-meta"><span>DGP · ordem 1714 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">homens do mar; marinheiros; navegantes. 〈ἅλς〉</p></section></article>
<article id="entry-dgp-1715" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιαής, ής, ές</h1><div class="entry-meta"><span>DGP · ordem 1715 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que sopra sobre o mar. 〈ἅλς, ἄημι〉</p></section></article>
<article id="entry-dgp-1716" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλίαστος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1716 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 incessante; encarniçado; duro 2 persistente (pessoa) ♦ ἀλίαστον adv. 2 sem cessar. 〈ἀ-, λιάζομαι〉</p></section></article>
<article id="entry-dgp-1717" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιβαντίς φύλη (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1717 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">a tribo dos mortos. 〈ἀλίβας〉</p></section></article>
<article id="entry-dgp-1718" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλίβας, αντος (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1718 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 corpo sem vida; cadáver 2 vinagre. 〈ἀ-, λείβω〉</p></section></article>
<article id="entry-dgp-1719" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιγενής, ής, ές</h1><div class="entry-meta"><span>DGP · ordem 1719 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">nascido do mar. 〈ἅλς, γίγνομαι〉</p></section></article>
<article id="entry-dgp-1720" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλίγκιος, α ον</h1><div class="entry-meta"><span>DGP · ordem 1720 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">semelhante a, dat.</p></section></article>
<article id="entry-dgp-1721" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίδονος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1721 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">sacudido sobre o mar. 〈ἅλς, δονέω〉</p></section></article>
<article id="entry-dgp-1722" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιεία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1722 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">pesca. 〈ἁλιεύς〉</p></section></article>
<article id="entry-dgp-1723" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιεύς, έως (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1723 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 marinheiro; marujo; remeiro 2 pescador. 〈ἅλς〉</p></section></article>
<article id="entry-dgp-1724" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιευτικός, ή, όν</h1><div class="entry-meta"><span>DGP · ordem 1724 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 de pesca ♦ ἡ ἁλιευτική [τέχνη] 2 haliêutica ♦τὸ ἁλιευτικόν 3 fauna aquática ♦ τὰ ἁλιευτικά 4 as haliêuticas ou tratado da pesca. 〈ἁλιεύω〉</p></section></article>
<article id="entry-dgp-1725" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιεύω</h1><div class="entry-meta"><span>DGP · ordem 1725 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 ser pescador ♦ at. e méd. 2 pescar. 〈ἁλιεύς〉</p></section></article>
<article id="entry-dgp-1726" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίζω1</h1><div class="entry-meta"><span>DGP · ordem 1726 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(pas. fut. ἁλισθήσομαι, perf. ἥλισμαι) 1 salgar 2 alimentar com sal ou com alimentos salgados. 〈ἁλής〉</p></section></article>
<article id="entry-dgp-1727" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίζω2</h1><div class="entry-meta"><span>DGP · ordem 1727 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(aor. ἥλισα; pas. fut. ἁλισθήσομαι, aor. ἡλίσθην, perf. ἥλισμαι) reunir; ajuntar. 〈ἁλής〉</p></section></article>
<article id="entry-dgp-1728" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίη</h1><div class="entry-meta"><span>DGP · ordem 1728 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">jôn. = ἁλία.</p></section></article>
<article id="entry-dgp-1729" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιήρης, ης, ες</h1><div class="entry-meta"><span>DGP · ordem 1729 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que fende o mar. 〈ἅλς, ἀρέσσω〉</p></section></article>
<article id="entry-dgp-1730" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλίθιος, α, ον</h1><div class="entry-meta"><span>DGP · ordem 1730 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἠλίθιος.</p></section></article>
`;


/* ==========================================================
   LOTE 62 — registros 1731–1780; corpus DGP, commit deb54b426
   ========================================================== */
window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1731" data-source="DGP" data-search="ἀλιθίως dór. = ἠλιθίως. DGP" tabindex="0"><td class="table-lemma greek">ἀλιθίως</td><td>—</td><td>dór. = ἠλιθίως.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1732" data-source="DGP" data-search="ἄλιθος, ος, ον não pedregoso. 〈ἀ-, λίθος〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλιθος, ος, ον</td><td>—</td><td>não pedregoso. 〈ἀ-, λίθος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1733" data-source="DGP" data-search="Ἁλικαρνασός e Ἁλικαρνασσός, jôn. Ἁλικαρνησός, οῦ (ὁ) Halicarnasso, cidade da Cária DGP" tabindex="0"><td class="table-lemma greek">Ἁλικαρνασός</td><td>—</td><td>e Ἁλικαρνασσός, jôn. Ἁλικαρνησός, οῦ (ὁ) Halicarnasso, cidade da Cária</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1734" data-source="DGP" data-search="ἁλικία, ἁλικιώτας dór. = ἡλικία, ἡλικιώτης. DGP" tabindex="0"><td class="table-lemma greek">ἁλικία, ἁλικιώτας</td><td>—</td><td>dór. = ἡλικία, ἡλικιώτης.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1735" data-source="DGP" data-search="ἁλίκλυστος, ος, ον batido pelo mar (costa) DGP" tabindex="0"><td class="table-lemma greek">ἁλίκλυστος, ος, ον</td><td>—</td><td>batido pelo mar (costa)</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1736" data-source="DGP" data-search="ἁλίκος dór. = ἡλίκος. DGP" tabindex="0"><td class="table-lemma greek">ἁλίκος</td><td>—</td><td>dór. = ἡλίκος.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1737" data-source="DGP" data-search="ἁλίκτυπος, ος, ον batido pelas ondas (navio); que ecoa o barulho do mar DGP" tabindex="0"><td class="table-lemma greek">ἁλίκτυπος, ος, ον</td><td>—</td><td>batido pelas ondas (navio); que ecoa o barulho do mar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1738" data-source="DGP" data-search="ἁλιμέδων, οντος (ὁ) senhor do mar, epit. de Posidão. 〈ἅλς, μέδων〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλιμέδων, οντος (ὁ)</td><td>—</td><td>senhor do mar, epit. de Posidão. 〈ἅλς, μέδων〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1739" data-source="DGP" data-search="ἀλίμενος, ος, ον sem porto DGP" tabindex="0"><td class="table-lemma greek">ἀλίμενος, ος, ον</td><td>—</td><td>sem porto</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1740" data-source="DGP" data-search="ἀλιμενότης, ητος (ἡ) falta de porto. 〈ἀλίμενος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλιμενότης, ητος (ἡ)</td><td>—</td><td>falta de porto. 〈ἀλίμενος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1741" data-source="DGP" data-search="ἅλιμος, ος, ον do mar ♦ ὁ ἅλιμος, τὸ ἅλιμον DGP" tabindex="0"><td class="table-lemma greek">ἅλιμος, ος, ον</td><td>—</td><td>do mar ♦ ὁ ἅλιμος, τὸ ἅλιμον</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1742" data-source="DGP" data-search="ἄλιμος, ος, ον que mitiga a fome. 〈ἀ-, λιμός〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλιμος, ος, ον</td><td>—</td><td>que mitiga a fome. 〈ἀ-, λιμός〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1743" data-source="DGP" data-search="ἁλιμυρήεις, ήεσσα, ῆεν que corre para o mar (rio). 〈ἅλς, μύρω〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλιμυρήεις, ήεσσα, ῆεν</td><td>—</td><td>que corre para o mar (rio). 〈ἅλς, μύρω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1744" data-source="DGP" data-search="ἀλινδέομαι-οῦμαι espojar-se DGP" tabindex="0"><td class="table-lemma greek">ἀλινδέομαι-οῦμαι</td><td>—</td><td>espojar-se</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1745" data-source="DGP" data-search="ἅλινος, η, ον de sal, salino. 〈ἅλς〉 DGP" tabindex="0"><td class="table-lemma greek">ἅλινος, η, ον</td><td>—</td><td>de sal, salino. 〈ἅλς〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1746" data-source="DGP" data-search="ἇλιξ dór. = ἧλιξ. DGP" tabindex="0"><td class="table-lemma greek">ἇλιξ</td><td>—</td><td>dór. = ἧλιξ.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1747" data-source="DGP" data-search="ἅλιος1 dór. = ἥλιος. DGP" tabindex="0"><td class="table-lemma greek">ἅλιος1</td><td>—</td><td>dór. = ἥλιος.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1748" data-source="DGP" data-search="ἅλιος2, α e ος, ον do mar DGP" tabindex="0"><td class="table-lemma greek">ἅλιος2, α</td><td>—</td><td>e ος, ον do mar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1749" data-source="DGP" data-search="ἅλιος3, α, ον vão DGP" tabindex="0"><td class="table-lemma greek">ἅλιος3, α, ον</td><td>—</td><td>vão</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1750" data-source="DGP" data-search="ἁλιοτρεφής, ής, ές nutrido no mar. 〈ἅλιος2, τρέφω〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλιοτρεφής, ής, ές</td><td>—</td><td>nutrido no mar. 〈ἅλιος2, τρέφω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1751" data-source="DGP" data-search="ἁλιόω-ῶ tornar inútil, estéril DGP" tabindex="0"><td class="table-lemma greek">ἁλιόω-ῶ</td><td>—</td><td>tornar inútil, estéril</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1752" data-source="DGP" data-search="ἀλιπαρής, ής, ές não ungido DGP" tabindex="0"><td class="table-lemma greek">ἀλιπαρής, ής, ές</td><td>—</td><td>não ungido</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1753" data-source="DGP" data-search="ἁλίπλαγκτος, ος, ον que vaga no mar ou à beira-mar. 〈ἅλς, πλάζω〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλίπλαγκτος, ος, ον</td><td>—</td><td>que vaga no mar ou à beira-mar. 〈ἅλς, πλάζω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1754" data-source="DGP" data-search="ἁλίπλακτος, ος, ον açoitado por ondas DGP" tabindex="0"><td class="table-lemma greek">ἁλίπλακτος, ος, ον</td><td>—</td><td>açoitado por ondas</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1755" data-source="DGP" data-search="ἁλίπλοος-ους, οος-ους, οον-ουν imerso no mar DGP" tabindex="0"><td class="table-lemma greek">ἁλίπλοος-ους, οος-ους, οον-ουν</td><td>—</td><td>imerso no mar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1756" data-source="DGP" data-search="ἁλίπλωος, ος, ον ἁλίπλοος DGP" tabindex="0"><td class="table-lemma greek">ἁλίπλωος, ος, ον</td><td>—</td><td>ἁλίπλοος</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1757" data-source="DGP" data-search="ἁλίπορος, ος, ον por onde passa o mar (estreito) DGP" tabindex="0"><td class="table-lemma greek">ἁλίπορος, ος, ον</td><td>—</td><td>por onde passa o mar (estreito)</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1758" data-source="DGP" data-search="ἁλιπόρφυρος, ος, ον tingido com a púrpura do mar DGP" tabindex="0"><td class="table-lemma greek">ἁλιπόρφυρος, ος, ον</td><td>—</td><td>tingido com a púrpura do mar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1759" data-source="DGP" data-search="ἁλίρροθος, ος, ον que ressoa com as ondas do mar. 〈ἅλς, ῥόθος〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλίρροθος, ος, ον</td><td>—</td><td>que ressoa com as ondas do mar. 〈ἅλς, ῥόθος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1760" data-source="DGP" data-search="ἁλίρρυτος, ος, ον banhado pelas ondas. 〈ἅλς, ῥέω〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλίρρυτος, ος, ον</td><td>—</td><td>banhado pelas ondas. 〈ἅλς, ῥέω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1761" data-source="DGP" data-search="ἅλις adv. 1 em massa DGP" tabindex="0"><td class="table-lemma greek">ἅλις</td><td>—</td><td>adv. 1 em massa</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1762" data-source="DGP" data-search="ἀλισγέω-ῶ bíbl. manchar DGP" tabindex="0"><td class="table-lemma greek">ἀλισγέω-ῶ</td><td>—</td><td>bíbl. manchar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1763" data-source="DGP" data-search="ἀλίσγημα, ατος (τό) bíbl. mancha DGP" tabindex="0"><td class="table-lemma greek">ἀλίσγημα, ατος (τό)</td><td>—</td><td>bíbl. mancha</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1764" data-source="DGP" data-search="ἁλίσκομαι ser apanhado DGP" tabindex="0"><td class="table-lemma greek">ἁλίσκομαι</td><td>—</td><td>ser apanhado</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1765" data-source="DGP" data-search="ἁλίστονος, ος, ον poét. 1 que geme com o mar 2 que geme no mar (pescadores). 〈ἅλς, στένω〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλίστονος, ος, ον</td><td>—</td><td>poét. 1 que geme com o mar 2 que geme no mar (pescadores). 〈ἅλς, στένω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1766" data-source="DGP" data-search="ἀλιταίνω at. e méd. 1 errar DGP" tabindex="0"><td class="table-lemma greek">ἀλιταίνω</td><td>—</td><td>at. e méd. 1 errar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1767" data-source="DGP" data-search="ἀλιτενής, ής, ές que se estende para o mar ou ao longo do mar (rochedo) DGP" tabindex="0"><td class="table-lemma greek">ἀλιτενής, ής, ές</td><td>—</td><td>que se estende para o mar ou ao longo do mar (rochedo)</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1768" data-source="DGP" data-search="ἀλιτήμενος, η, ον cf. ἀλιταίνομαι DGP" tabindex="0"><td class="table-lemma greek">ἀλιτήμενος, η, ον</td><td>—</td><td>cf. ἀλιταίνομαι</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1769" data-source="DGP" data-search="ἀλιτήμων, ων, ον gen. ονος culpado em relação a, dat. 〈ἀλιταίνω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλιτήμων, ων, ον</td><td>—</td><td>gen. ονος culpado em relação a, dat. 〈ἀλιταίνω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1770" data-source="DGP" data-search="ἀλιτήριος, ος, ον culpado em relação a alguém, gen DGP" tabindex="0"><td class="table-lemma greek">ἀλιτήριος, ος, ον</td><td>—</td><td>culpado em relação a alguém, gen</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1771" data-source="DGP" data-search="ἀλιτόμην cf. ἀλιταίνω DGP" tabindex="0"><td class="table-lemma greek">ἀλιτόμην</td><td>—</td><td>cf. ἀλιταίνω</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1772" data-source="DGP" data-search="ἀλιτρός, ός, όν culpado DGP" tabindex="0"><td class="table-lemma greek">ἀλιτρός, ός, όν</td><td>—</td><td>culpado</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1773" data-source="DGP" data-search="ἁλίτυπος, ος, ον batido pelo mar ♦ ὁ ἁλίτυπος DGP" tabindex="0"><td class="table-lemma greek">ἁλίτυπος, ος, ον</td><td>—</td><td>batido pelo mar ♦ ὁ ἁλίτυπος</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1774" data-source="DGP" data-search="ἁλίως adv. em vão. 〈ἅλιος3〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλίως</td><td>—</td><td>adv. em vão. 〈ἅλιος3〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1775" data-source="DGP" data-search="ἀλκά dór. = ἀλκή. DGP" tabindex="0"><td class="table-lemma greek">ἀλκά</td><td>—</td><td>dór. = ἀλκή.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1776" data-source="DGP" data-search="ἀλκαία, ας (ἡ) cauda de animal. 〈ἀλκαῖος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλκαία, ας (ἡ)</td><td>—</td><td>cauda de animal. 〈ἀλκαῖος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1777" data-source="DGP" data-search="Ἀλκαῖος, ου (ὁ) Alceu, filho de Perseu DGP" tabindex="0"><td class="table-lemma greek">Ἀλκαῖος, ου (ὁ)</td><td>—</td><td>Alceu, filho de Perseu</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1778" data-source="DGP" data-search="ἄλκαρ só nom. e ac. (τό) poét. socorro DGP" tabindex="0"><td class="table-lemma greek">ἄλκαρ</td><td>—</td><td>só nom. e ac. (τό) poét. socorro</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1779" data-source="DGP" data-search="Ἀλκείδης, ου (ὁ) alcida, descendente de Alceu. 〈ἀλκή〉 DGP" tabindex="0"><td class="table-lemma greek">Ἀλκείδης, ου (ὁ)</td><td>—</td><td>alcida, descendente de Alceu. 〈ἀλκή〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1780" data-source="DGP" data-search="ἀλκή, ῆς (ἡ) força DGP" tabindex="0"><td class="table-lemma greek">ἀλκή, ῆς (ἡ)</td><td>—</td><td>força</td><td><span class="source-pill">DGP</span></td></tr>
`;
window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-1731" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιθίως</h1><div class="entry-meta"><span>DGP · ordem 1731 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἠλιθίως.</p></section></article>
<article id="entry-dgp-1732" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλιθος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1732 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">não pedregoso. 〈ἀ-, λίθος〉</p></section></article>
<article id="entry-dgp-1733" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἁλικαρνασός</h1><div class="entry-meta"><span>DGP · ordem 1733 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">e Ἁλικαρνασσός, jôn. Ἁλικαρνησός, οῦ (ὁ) Halicarnasso, cidade da Cária.</p></section></article>
<article id="entry-dgp-1734" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλικία, ἁλικιώτας</h1><div class="entry-meta"><span>DGP · ordem 1734 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἡλικία, ἡλικιώτης.</p></section></article>
<article id="entry-dgp-1735" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίκλυστος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1735 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 batido pelo mar (costa) 2 de ondas altas (mar). 〈ἅλς, κλύζω〉</p></section></article>
<article id="entry-dgp-1736" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίκος</h1><div class="entry-meta"><span>DGP · ordem 1736 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἡλίκος.</p></section></article>
<article id="entry-dgp-1737" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίκτυπος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1737 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 batido pelas ondas (navio); que ecoa o barulho do mar 2 que ressoa no mar (vento). 〈ἅλς, κτυπέω〉</p></section></article>
<article id="entry-dgp-1738" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιμέδων, οντος (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1738 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">senhor do mar, epit. de Posidão. 〈ἅλς, μέδων〉</p></section></article>
<article id="entry-dgp-1739" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλίμενος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1739 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 sem porto 2 que não oferece refúgio; inóspito (região) 3 duro; inflexível (coração). 〈ἀ-, λιμήν〉</p></section></article>
<article id="entry-dgp-1740" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιμενότης, ητος (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1740 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">falta de porto. 〈ἀλίμενος〉</p></section></article>
<article id="entry-dgp-1741" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλιμος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1741 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 do mar ♦ ὁ ἅλιμος, τὸ ἅλιμον 2 armolão, planta ♦ τὰ ἅλιμα 3 bíbl. costa marinha. 〈ἅλς〉</p></section></article>
<article id="entry-dgp-1742" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλιμος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1742 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que mitiga a fome. 〈ἀ-, λιμός〉</p></section></article>
<article id="entry-dgp-1743" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιμυρήεις, ήεσσα, ῆεν</h1><div class="entry-meta"><span>DGP · ordem 1743 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que corre para o mar (rio). 〈ἅλς, μύρω〉</p></section></article>
<article id="entry-dgp-1744" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλινδέομαι-οῦμαι</h1><div class="entry-meta"><span>DGP · ordem 1744 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 espojar-se 2 virar e revirar; ir e vir.</p></section></article>
<article id="entry-dgp-1745" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλινος, η, ον</h1><div class="entry-meta"><span>DGP · ordem 1745 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">de sal, salino. 〈ἅλς〉</p></section></article>
<article id="entry-dgp-1746" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἇλιξ</h1><div class="entry-meta"><span>DGP · ordem 1746 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἧλιξ.</p></section></article>
<article id="entry-dgp-1747" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλιος1</h1><div class="entry-meta"><span>DGP · ordem 1747 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἥλιος.</p></section></article>
<article id="entry-dgp-1748" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλιος2, α</h1><div class="entry-meta"><span>DGP · ordem 1748 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">e ος, ον do mar; marinho. 〈ἅλς〉</p></section></article>
<article id="entry-dgp-1749" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλιος3, α, ον</h1><div class="entry-meta"><span>DGP · ordem 1749 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 vão; inútil ♦ ἅλιον adv. 2 em vão.</p></section></article>
<article id="entry-dgp-1750" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιοτρεφής, ής, ές</h1><div class="entry-meta"><span>DGP · ordem 1750 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">nutrido no mar. 〈ἅλιος2, τρέφω〉</p></section></article>
<article id="entry-dgp-1751" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιόω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1751 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἁλιώσω, aor. ἡλίωσα, perf. desus.) 1 tornar inútil, estéril 2 fazer ou dizer em vão 3 destruir. 〈ἅλιος3〉</p></section></article>
<article id="entry-dgp-1752" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιπαρής, ής, ές</h1><div class="entry-meta"><span>DGP · ordem 1752 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 não ungido 2 sem o brilho do óleo perfumado 3 sem adorno. 〈ἀ-, λιπαρός〉</p></section></article>
<article id="entry-dgp-1753" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίπλαγκτος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1753 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que vaga no mar ou à beira-mar. 〈ἅλς, πλάζω〉</p></section></article>
<article id="entry-dgp-1754" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίπλακτος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1754 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">açoitado por ondas; batido pelo mar. 〈ἅλς, πλάσσω〉</p></section></article>
<article id="entry-dgp-1755" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίπλοος-ους, οος-ους, οον-ουν</h1><div class="entry-meta"><span>DGP · ordem 1755 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 imerso no mar 2 que navega no mar (navio) ♦ ὁ ἁλίπλους 3 marinheiro 4 pescador. 〈ἅλς, πλέω〉</p></section></article>
<article id="entry-dgp-1756" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίπλωος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1756 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ἁλίπλοος.</p></section></article>
<article id="entry-dgp-1757" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίπορος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1757 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 por onde passa o mar (estreito) 2 que sulca o mar (navio). 〈ἅλς, πείρω〉</p></section></article>
<article id="entry-dgp-1758" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλιπόρφυρος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1758 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 tingido com a púrpura do mar 2 que tem a cor do mar. 〈ἅλς, πορφύρα〉</p></section></article>
<article id="entry-dgp-1759" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίρροθος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1759 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que ressoa com as ondas do mar. 〈ἅλς, ῥόθος〉</p></section></article>
<article id="entry-dgp-1760" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίρρυτος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1760 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">banhado pelas ondas. 〈ἅλς, ῥέω〉</p></section></article>
<article id="entry-dgp-1761" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλις</h1><div class="entry-meta"><span>DGP · ordem 1761 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. 1 em massa; em quantidade;em abundância: χαλκόν τε χρυσόν τε ἅλις Homero bronze e ouro em abundância, μέλισσαι ἅλις πεπτήαται Homero as abelhas em chusma voaram, κόπρος ἅλις κέχυτο Homero o estrume estava espalhado aos montes 2 em quantidade suficiente, gen.: ἅλις τῆς βορῆς Heródoto quantidade suficiente de alimento; ἅλις [ἐστί] é o bastante, ἅλις γὰρ ἡ παροῦσα συμφορά Eurípides basta a presente desventura, ἢ οὐχ ἅλις ὅτι ou ὡς; não é o bastante que...? ou or. inf.: ἅλις δὲ κλαίειν τοὐμὸν ἦν ἐμοὶ κακόν Eurípides para chorar, bastava-me minha desgraça 3 na medida exata: εἰ δ’ ἅλις ἔλθοι Κύπρις Eurípides se Cípris vier na medida certa.</p></section></article>
<article id="entry-dgp-1762" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλισγέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1762 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(aor. ἠλίσγησα) bíbl. manchar.</p></section></article>
<article id="entry-dgp-1763" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλίσγημα, ατος (τό)</h1><div class="entry-meta"><span>DGP · ordem 1763 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">bíbl. mancha; nódoa. 〈ἀλισγέω〉</p></section></article>
<article id="entry-dgp-1764" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίσκομαι</h1><div class="entry-meta"><span>DGP · ordem 1764 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἁλώσομαι, aor.2 ἑάλων, perf. ἑάλωκα) 1 ser apanhado; ser capturado por, dat., gen. ou ὑπό e gen., εἰς e ac.: ἁ. εἰς πολεμίους Platão cair nas mãos dos inimigos, θανάτῳ ἀλῶναι ser apanhado pela morte 2 ser alcançado; ser conquistado, dat.: ἁ. χρήμασιν Sófocles ser dominado pelas riquezas 3 ser apanhado em flagrante, com part. ἐὰν ἀλῷς τοῦτο πράττων Platão se for apanhado fazendo isso 4 ser considerado culpado, gen. ou part.: προδοσίας ou προδοῦσ’ ἁλίσκεται Sófocles é considerada culpada de traição 6 ser condenado a, gen. ou inf.: ἁ. θανάτου ser condenado à morte, ἀ. ἀποθανεῖν ser condenado a morrer, ἁ. ἐπὶ κακοῖς ἔργοις ser condenado por delitos.</p></section></article>
<article id="entry-dgp-1765" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίστονος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1765 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">poét. 1 que geme com o mar 2 que geme no mar (pescadores). 〈ἅλς, στένω〉</p></section></article>
<article id="entry-dgp-1766" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιταίνω</h1><div class="entry-meta"><span>DGP · ordem 1766 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(só aor. ἠλίτησα, aor.2 ἤλιτον, aor.2 méd. ἀλι­τόμην) at. e méd. 1 errar; cometer uma falta; falhar; part. ἀλιτήμενος, η, ον, culpado: ἁ. θεοῖς que está em falta com os deuses 2 cometer uma falta contra alguém, ac. 3 violar; transgredir 4 afastar-se; desviar-se de, gen.</p></section></article>
<article id="entry-dgp-1767" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιτενής, ής, ές</h1><div class="entry-meta"><span>DGP · ordem 1767 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 que se estende para o mar ou ao longo do mar (rochedo). 2 que afunda pouco; de pequeno calado (navio) 3 pouco profundo; raso (mar). 〈ἅλς, τείνω〉</p></section></article>
<article id="entry-dgp-1768" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιτήμενος, η, ον</h1><div class="entry-meta"><span>DGP · ordem 1768 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">cf. ἀλιταίνομαι.</p></section></article>
<article id="entry-dgp-1769" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιτήμων, ων, ον</h1><div class="entry-meta"><span>DGP · ordem 1769 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">gen. ονος culpado em relação a, dat. 〈ἀλιταίνω〉</p></section></article>
<article id="entry-dgp-1770" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιτήριος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1770 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 culpado em relação a alguém, gen. 2 pernicioso; nocivo a alguém, gen. 〈ἀλιταίνω〉</p></section></article>
<article id="entry-dgp-1771" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιτόμην</h1><div class="entry-meta"><span>DGP · ordem 1771 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">cf. ἀλιταίνω.</p></section></article>
<article id="entry-dgp-1772" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλιτρός, ός, όν</h1><div class="entry-meta"><span>DGP · ordem 1772 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 culpado 2 mau; injusto. 〈ἀλιταίνω〉</p></section></article>
<article id="entry-dgp-1773" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίτυπος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1773 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 batido pelo mar ♦ ὁ ἁλίτυπος 2 marinheiro 3 pescador. 〈ἅλς, τύπτω〉</p></section></article>
<article id="entry-dgp-1774" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλίως</h1><div class="entry-meta"><span>DGP · ordem 1774 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. em vão. 〈ἅλιος3〉</p></section></article>
<article id="entry-dgp-1775" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλκά</h1><div class="entry-meta"><span>DGP · ordem 1775 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἀλκή.</p></section></article>
<article id="entry-dgp-1776" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλκαία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1776 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">cauda de animal. 〈ἀλκαῖος〉</p></section></article>
<article id="entry-dgp-1777" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλκαῖος, ου (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1777 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 Alceu, filho de Perseu 2 Alceu, poeta lírico.</p></section></article>
<article id="entry-dgp-1778" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλκαρ</h1><div class="entry-meta"><span>DGP · ordem 1778 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">só nom. e ac. (τό) poét. socorro; defesa; proteção para alguém, dat. ou gen; contra algo, gen. 〈ἀλκή〉</p></section></article>
<article id="entry-dgp-1779" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλκείδης, ου (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1779 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">alcida, descendente de Alceu. 〈ἀλκή〉</p></section></article>
<article id="entry-dgp-1780" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλκή, ῆς (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1780 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 força; vigor 2 emprego da força; luta; combate 3 força de defesa; defesa 4 proteção; socorro; ajuda 5 força de alma; coragem 6 poder; influência (da palavra) 7 pl. ação notável; altos feitos.</p></section></article>
`;

/* LOTE 63 — ordinais 1781–1830 — fonte XML fixada */
window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1781" data-source="DGP" data-search="Ἄλκηστις, ιδος (ἡ) Alceste, esposa de Admeto. 〈ἀλκή〉 DGP" tabindex="0"><td class="table-lemma greek">Ἄλκηστις, ιδος (ἡ)</td><td>—</td><td>Alceste, esposa de Admeto. 〈ἀλκή〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1782" data-source="DGP" data-search="ἀλκί cf. ἄλξ. DGP" tabindex="0"><td class="table-lemma greek">ἀλκί</td><td>—</td><td>cf. ἄλξ.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1783" data-source="DGP" data-search="Ἀλκιβιάδης, ου (ὁ) Alcibíades, homem público e estratego ateniense. DGP" tabindex="0"><td class="table-lemma greek">Ἀλκιβιάδης, ου (ὁ)</td><td>—</td><td>Alcibíades, homem público e estratego ateniense.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1784" data-source="DGP" data-search="ἄλκιμος, ος dór. α, ον poét. 1 forte; robusto 2 corajoso; valente 3 que fortifica. 〈ἀλκή〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλκιμος, ος</td><td>—</td><td>dór. α, ον poét. 1 forte; robusto 2 corajoso; valente 3 que fortifica. 〈ἀλκή〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1785" data-source="DGP" data-search="Ἀλκίνοος-ους, όου-ου (ὁ) Alcínoo, rei dos feácios. 〈ἀλκή, νόος〉 DGP" tabindex="0"><td class="table-lemma greek">Ἀλκίνοος-ους, όου-ου (ὁ)</td><td>—</td><td>Alcínoo, rei dos feácios. 〈ἀλκή, νόος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1786" data-source="DGP" data-search="ἀλκίφρων, ων, ον gen. ονος de alma valente; belicoso. 〈ἀλκή, φρήν〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλκίφρων, ων, ον</td><td>—</td><td>gen. ονος de alma valente; belicoso. 〈ἀλκή, φρήν〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1787" data-source="DGP" data-search="Ἀλκμήνη, ης (ἡ) Alcmena, mãe de Héracles. DGP" tabindex="0"><td class="table-lemma greek">Ἀλκμήνη, ης (ἡ)</td><td>—</td><td>Alcmena, mãe de Héracles.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1788" data-source="DGP" data-search="ἀλκτήρ, ῆρος (ὁ) protetor; defensor contra, gen. 〈ἀλκή〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλκτήρ, ῆρος (ὁ)</td><td>—</td><td>protetor; defensor contra, gen. 〈ἀλκή〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1789" data-source="DGP" data-search="ἀλκυόνειοι ou ἀλκυονίδες ἡμέραι 1 dias alciônicos, período de mar calmo durante o qual as alcíones fazem seus ninhos 2 dias alciônicos, dias  DGP" tabindex="0"><td class="table-lemma greek">ἀλκυόνειοι</td><td>—</td><td>ou ἀλκυονίδες ἡμέραι 1 dias alciônicos, período de mar calmo durante o qual as alcíones fazem seus ninhos 2 dias al</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1790" data-source="DGP" data-search="ἁλκυών e ἀλκυών, όνος (ἡ) alcíone. DGP" tabindex="0"><td class="table-lemma greek">ἁλκυών</td><td>—</td><td>e ἀλκυών, όνος (ἡ) alcíone.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1791" data-source="DGP" data-search="ἀλλ’ diante de vogal = ἀλλά. DGP" tabindex="0"><td class="table-lemma greek">ἀλλ’</td><td>—</td><td>diante de vogal = ἀλλά.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1792" data-source="DGP" data-search="ἄλλ’ diante de vogal = ἄλλα. DGP" tabindex="0"><td class="table-lemma greek">ἄλλ’</td><td>—</td><td>diante de vogal = ἄλλα.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1793" data-source="DGP" data-search="ἀλλά advérbio 1 após voc. ou or. conj. (εἰ, ἐπεί), pelo menos; ao menos. conjunção 2 estabelece contraste entre duas orações, sendo a p DGP" tabindex="0"><td class="table-lemma greek">ἀλλά</td><td>—</td><td>advérbio 1 após voc. ou or. conj. (εἰ, ἐπεί), pelo menos; ao menos. conjunção 2 estabelece contraste entre duas ora</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1794" data-source="DGP" data-search="ἄλλα pl. de ἄλλο, cf. ἄλλος. DGP" tabindex="0"><td class="table-lemma greek">ἄλλα</td><td>—</td><td>pl. de ἄλλο, cf. ἄλλος.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1795" data-source="DGP" data-search="ἀλλᾷ dór. = ἄλλῃ. DGP" tabindex="0"><td class="table-lemma greek">ἀλλᾷ</td><td>—</td><td>dór. = ἄλλῃ.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1796" data-source="DGP" data-search="ἀλλαγή, ῆς (ἡ) 1 mudança 2 troca; transação; compra e venda 3 ágio; juro 4 troca de cavalos em paradas. 〈ἀλλάσσω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλαγή, ῆς (ἡ)</td><td>—</td><td>1 mudança 2 troca; transação; compra e venda 3 ágio; juro 4 troca de cavalos em paradas. 〈ἀλλάσσω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1797" data-source="DGP" data-search="ἀλλαγήσομαι cf. ἀλλάσσω. DGP" tabindex="0"><td class="table-lemma greek">ἀλλαγήσομαι</td><td>—</td><td>cf. ἀλλάσσω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1798" data-source="DGP" data-search="ἀλλακτέον adj. verb. de ἀλλάσσω. DGP" tabindex="0"><td class="table-lemma greek">ἀλλακτέον</td><td>—</td><td>adj. verb. de ἀλλάσσω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1799" data-source="DGP" data-search="ἀλλᾶς, ᾶντος (ὁ) salsichão; lingüiça. DGP" tabindex="0"><td class="table-lemma greek">ἀλλᾶς, ᾶντος (ὁ)</td><td>—</td><td>salsichão; lingüiça.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1800" data-source="DGP" data-search="ἀλλάσσω, át. -άττω (fut. ἀλλάξω, aor. ἤλλαξα, perf. desus.; pas. fut.2 ἀλλαγήσομαι, aor. ἠλλάγην ou ἠλλάχθην, perf. ἤλλαγμαι) 1 mudar; alte DGP" tabindex="0"><td class="table-lemma greek">ἀλλάσσω,</td><td>—</td><td>át. -άττω (fut. ἀλλάξω, aor. ἤλλαξα, perf. desus.; pas. fut.2 ἀλλαγήσομαι, aor. ἠλλάγην ou ἠλλάχθην, perf. ἤλλαγμαι</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1801" data-source="DGP" data-search="ἀλλάττα át. = ἄλλα ἄττα, cf. ἄττα. DGP" tabindex="0"><td class="table-lemma greek">ἀλλάττα</td><td>—</td><td>át. = ἄλλα ἄττα, cf. ἄττα.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1802" data-source="DGP" data-search="ἀλλάττω át. = ἀλλάσσω. DGP" tabindex="0"><td class="table-lemma greek">ἀλλάττω</td><td>—</td><td>át. = ἀλλάσσω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1803" data-source="DGP" data-search="ἀλλαχῇ adv. alhures; em outro lugar. DGP" tabindex="0"><td class="table-lemma greek">ἀλλαχῇ</td><td>—</td><td>adv. alhures; em outro lugar.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1804" data-source="DGP" data-search="ἀλλαχόθεν adv. 1 de outro lugar 2 bíbl. por outro lugar. DGP" tabindex="0"><td class="table-lemma greek">ἀλλαχόθεν</td><td>—</td><td>adv. 1 de outro lugar 2 bíbl. por outro lugar.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1805" data-source="DGP" data-search="ἀλλαχόθι ἀλλαχῇ. DGP" tabindex="0"><td class="table-lemma greek">ἀλλαχόθι</td><td>—</td><td>ἀλλαχῇ.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1806" data-source="DGP" data-search="ἀλλαχόσε adv. para outro lugar. DGP" tabindex="0"><td class="table-lemma greek">ἀλλαχόσε</td><td>—</td><td>adv. para outro lugar.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1807" data-source="DGP" data-search="ἀλλαχοῦ ἀλλαχῇ. DGP" tabindex="0"><td class="table-lemma greek">ἀλλαχοῦ</td><td>—</td><td>ἀλλαχῇ.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1808" data-source="DGP" data-search="ἄλλεγον, ἀλλέξαι impf. e inf. aor. ép. de ἀναλέγω. DGP" tabindex="0"><td class="table-lemma greek">ἄλλεγον, ἀλλέξαι</td><td>—</td><td>impf. e inf. aor. ép. de ἀναλέγω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1809" data-source="DGP" data-search="ἄλλῃ adv. 1 em ou para outro lugar: ἄλλοι ἄλλῃ τῆς πόλεως tuc. cada um em um lugar diferente da cidade 2 de outro modo: τῇ ἄλλῃ πολλαχῇ DGP" tabindex="0"><td class="table-lemma greek">ἄλλῃ</td><td>—</td><td>adv. 1 em ou para outro lugar: ἄλλοι ἄλλῃ τῆς πόλεως tuc. cada um em um lugar diferente da cidade 2 de outro modo: </td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1810" data-source="DGP" data-search="ἀλληγορέω-ῶ 1 interpretar alegoricamente 2 falar metaforicamente; falar por alegoria. 〈ἄλλος, ἀγορεύω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλληγορέω-ῶ</td><td>—</td><td>1 interpretar alegoricamente 2 falar metaforicamente; falar por alegoria. 〈ἄλλος, ἀγορεύω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1811" data-source="DGP" data-search="ἀλληγορία, ας (ἡ) alegoria; linguagem alegórica; explicação alegórica. DGP" tabindex="0"><td class="table-lemma greek">ἀλληγορία, ας (ἡ)</td><td>—</td><td>alegoria; linguagem alegórica; explicação alegórica.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1812" data-source="DGP" data-search="ἄλληκτος, ος, ον 1 incessante 2 implacável ♦ ἄλληκτον adv. 3 sem fim; sem cessar. 〈ἀ-, λήγω〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλληκτος, ος, ον</td><td>—</td><td>1 incessante 2 implacável ♦ ἄλληκτον adv. 3 sem fim; sem cessar. 〈ἀ-, λήγω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1813" data-source="DGP" data-search="ἀλληλοφαγία, ας (ἡ) ato de se devorarem uns aos outros. 〈ἀλληλοφάγος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλληλοφαγία, ας (ἡ)</td><td>—</td><td>ato de se devorarem uns aos outros. 〈ἀλληλοφάγος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1814" data-source="DGP" data-search="ἀλληλοφάγοι, οι, α que se devoram uns aos outros. 〈ἀλλήλων, φαγεῖν〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλληλοφάγοι, οι, α</td><td>—</td><td>que se devoram uns aos outros. 〈ἀλλήλων, φαγεῖν〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1815" data-source="DGP" data-search="ἀλληλοφόνοι, οι, α que se matam uns aos outros. 〈ἀλλήλων, πεφνεῖν〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλληλοφόνοι, οι, α</td><td>—</td><td>que se matam uns aos outros. 〈ἀλλήλων, πεφνεῖν〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1816" data-source="DGP" data-search="ἀλλήλων, gen. pl. sem nom. (dat. οις, αις, οις; ac. ους, ας, α; dual gen. οιν, αιν, οιν; ac. ω, α, ω) pron. indica reciprocidade, um ao out DGP" tabindex="0"><td class="table-lemma greek">ἀλλήλων,</td><td>—</td><td>gen. pl. sem nom. (dat. οις, αις, οις; ac. ους, ας, α; dual gen. οιν, αιν, οιν; ac. ω, α, ω) pron. indica reciproci</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1817" data-source="DGP" data-search="Ἀλλόβριγες, ων (οἱ) Alóbroges, povo gaulês. DGP" tabindex="0"><td class="table-lemma greek">Ἀλλόβριγες, ων (οἱ)</td><td>—</td><td>Alóbroges, povo gaulês.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1818" data-source="DGP" data-search="ἀλλογενής, ής, ές bíbl. de uma outra raça; estrangeiro. 〈ἄλλος, γένος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλογενής, ής, ές</td><td>—</td><td>bíbl. de uma outra raça; estrangeiro. 〈ἄλλος, γένος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1819" data-source="DGP" data-search="ἀλλόγλωσσος, ος, ον que fala uma outra língua, uma língua estrangeira. 〈ἄλλος, γλῶσσα〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλόγλωσσος, ος, ον</td><td>—</td><td>que fala uma outra língua, uma língua estrangeira. 〈ἄλλος, γλῶσσα〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1820" data-source="DGP" data-search="ἀλλογνοέω-ῶ tomar por um outro; enganar-se 2 estar embaraçado. 〈ἄλλος, γιγνώσκω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλογνοέω-ῶ</td><td>—</td><td>tomar por um outro; enganar-se 2 estar embaraçado. 〈ἄλλος, γιγνώσκω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1821" data-source="DGP" data-search="ἀλλογνώσας part. aor. jôn. de ἀλλογνοέω. DGP" tabindex="0"><td class="table-lemma greek">ἀλλογνώσας</td><td>—</td><td>part. aor. jôn. de ἀλλογνοέω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1822" data-source="DGP" data-search="ἀλλόγνωτος, ος, ον desconhecido; estrangeiro. 〈ἄλλος, γιγνώσκω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλόγνωτος, ος, ον</td><td>—</td><td>desconhecido; estrangeiro. 〈ἄλλος, γιγνώσκω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1823" data-source="DGP" data-search="ἀλλοδαπός, ός, όν de um outro país; estrangeiro. 〈ἄλλος, -δαπος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλοδαπός, ός, όν</td><td>—</td><td>de um outro país; estrangeiro. 〈ἄλλος, -δαπος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1824" data-source="DGP" data-search="ἀλλοειδής, ής, ές de aspecto diferente. 〈ἄλλος, εἷδος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλοειδής, ής, ές</td><td>—</td><td>de aspecto diferente. 〈ἄλλος, εἷδος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1825" data-source="DGP" data-search="ἄλλοθε e ἄλλοθεν adv. de um outro lugar; de outra localidade; ἄλλοθεν ἄλλος cada um de seu lado, ἄλλοθέν ποθεν hom. de um outro lugar qua DGP" tabindex="0"><td class="table-lemma greek">ἄλλοθε</td><td>—</td><td>e ἄλλοθεν adv. de um outro lugar; de outra localidade; ἄλλοθεν ἄλλος cada um de seu lado, ἄλλοθέν ποθεν hom. de um </td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1826" data-source="DGP" data-search="ἄλλοθι adv. 1 em outro lugar 2 de um outro modo. 〈ἄλλος〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλλοθι</td><td>—</td><td>adv. 1 em outro lugar 2 de um outro modo. 〈ἄλλος〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1827" data-source="DGP" data-search="ἀλλόθροος-ους, οος-ους, οον-ουν que fala uma outra língua; estrangeiro. 〈ἄλλος, θροός〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλόθροος-ους, οος-ους, οον-ουν</td><td>—</td><td>que fala uma outra língua; estrangeiro. 〈ἄλλος, θροός〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1828" data-source="DGP" data-search="ἀλλοῖος, α, ον 1 de outra espécie; de outro gênero; ἄλλοτε ἀλλοῖος ora de um modo, ora de outro 2 diferente de, gen. ou com ἤ 3 diferente do que  DGP" tabindex="0"><td class="table-lemma greek">ἀλλοῖος, α, ον</td><td>—</td><td>1 de outra espécie; de outro gênero; ἄλλοτε ἀλλοῖος ora de um modo, ora de outro 2 diferente de, gen. ou com ἤ 3 di</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1829" data-source="DGP" data-search="ἀλλοιόω-ῶ (perf. pas. ἠλλοίωμαι) 1 mudar; tornar diferente ♦ pas. 2 tornar-se diferente; mudar; no perf. estar mudado 3 piorar; tornar-se ma DGP" tabindex="0"><td class="table-lemma greek">ἀλλοιόω-ῶ</td><td>—</td><td>(perf. pas. ἠλλοίωμαι) 1 mudar; tornar diferente ♦ pas. 2 tornar-se diferente; mudar; no perf. estar mudado 3 piora</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1830" data-source="DGP" data-search="ἀλλοίως adv. de modo diferente. DGP" tabindex="0"><td class="table-lemma greek">ἀλλοίως</td><td>—</td><td>adv. de modo diferente.</td><td><span class="source-pill">DGP</span></td></tr>
`;
window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-1781" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἄλκηστις, ιδος (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1781 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">Alceste, esposa de Admeto. 〈ἀλκή〉</p></section></article>
<article id="entry-dgp-1782" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλκί</h1><div class="entry-meta"><span>DGP · ordem 1782 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">cf. ἄλξ.</p></section></article>
<article id="entry-dgp-1783" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλκιβιάδης, ου (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1783 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">Alcibíades, homem público e estratego ateniense.</p></section></article>
<article id="entry-dgp-1784" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλκιμος, ος</h1><div class="entry-meta"><span>DGP · ordem 1784 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. α, ον poét. 1 forte; robusto 2 corajoso; valente 3 que fortifica. 〈ἀλκή〉</p></section></article>
<article id="entry-dgp-1785" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλκίνοος-ους, όου-ου (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1785 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">Alcínoo, rei dos feácios. 〈ἀλκή, νόος〉</p></section></article>
<article id="entry-dgp-1786" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλκίφρων, ων, ον</h1><div class="entry-meta"><span>DGP · ordem 1786 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">gen. ονος de alma valente; belicoso. 〈ἀλκή, φρήν〉</p></section></article>
<article id="entry-dgp-1787" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλκμήνη, ης (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1787 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">Alcmena, mãe de Héracles.</p></section></article>
<article id="entry-dgp-1788" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλκτήρ, ῆρος (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1788 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">protetor; defensor contra, gen. 〈ἀλκή〉</p></section></article>
<article id="entry-dgp-1789" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλκυόνειοι</h1><div class="entry-meta"><span>DGP · ordem 1789 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ou ἀλκυονίδες ἡμέραι 1 dias alciônicos, período de mar calmo durante o qual as alcíones fazem seus ninhos 2 dias alciônicos, dias de paz. 〈ἀλκυών〉</p></section></article>
<article id="entry-dgp-1790" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλκυών</h1><div class="entry-meta"><span>DGP · ordem 1790 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">e ἀλκυών, όνος (ἡ) alcíone.</p></section></article>
<article id="entry-dgp-1791" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλ’</h1><div class="entry-meta"><span>DGP · ordem 1791 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">diante de vogal = ἀλλά.</p></section></article>
<article id="entry-dgp-1792" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλ’</h1><div class="entry-meta"><span>DGP · ordem 1792 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">diante de vogal = ἄλλα.</p></section></article>
<article id="entry-dgp-1793" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλά</h1><div class="entry-meta"><span>DGP · ordem 1793 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">advérbio 1 após voc. ou or. conj. (εἰ, ἐπεί), pelo menos; ao menos. conjunção 2 estabelece contraste entre duas orações, sendo a primeira afirmativa (com ou sem μέν) ou negativa, mas; οὐκ ἄλλος, οὐχ ἕτερος... ἀλλά não outro...mas; οὐ μόνον... ἀλλ’ ἤ não só... mas, mas também, mas ainda; οὐ, οὔτις, οὐδείς... ἀλλά a não ser, exceto marcador discursivo 3 marca a passagem para outro tema, para retrucar, para refutar uma idéia, mas; mas então; não, mas; sim, mas; vamos! locuções 4 ἀλλ’ ἆρα, em hom. mas então; ἀλλὰ γάρ ou ἀλλὰ... γάρ, mas realmente; mas na verdade; ἀλλ’ ἦ, mas será que? ἀλλά γε, mas entretanto; e contudo; ἀλλὰ δή, mas com certeza; ἀλλά τοι, mas na certa 5 οὐ γὰρ ἀλλά, (pois) em verdade; οὐ μὴν ἀλλά, οὐ μέντοι ἀλλά, e entretanto 1 ὦ θεοὶ πατρῷοι, συγγένεσθέ γ’ ἀλλὰ νῦν sóf. ó deuses de nossos pais, agora, pelo menos, vinde em nosso socorro, εἴπερ γάρ σ’ Ἕκτωρ γε κακὸν καὶ ἀνάλκιδα φήσει, ἀλλ’ οὐ πείσονται Τρῶες hom. pois se Heitor disser que és frouxo e fraco, os troianos, ao menos, não acreditarão 2 αὐτὸς μὲν ἐγὼ μενέω νηῶν ἐν ἀγῶνι, ἀλλ’ ἕταρον πέμπω hom. quanto a mim, permanecerei onde estão reunidos os navios, mas envio meu companheiro (para combater), ἤκουσα ἀλλ’ οὐ πείθομαι plat. ouvi mas não estou convencido, οὔτις ἄλλος ἀλλὰ Διὸς θυγάτηρ hom. nenhum outro a não ser a filha de Zeus 3 τί δεῖ σε ἰέναι; ἀλλὰ ἄλλους πέμψον xen. por que é preciso que vás? envia outros, τολμητέον τάδε: ἀλλὰ τῆς ἐμῆς κάκης eur. é preciso ousar isto; mas que covardia a minha! μὴ φθονήσῃς (...) – ἀλλ’ ὦ Σώκρατες, ἔφη, οὐ φθονήσω plat. não tenhas má vontade (...) – Mas, Sócrates, disse, não terei má vontade, ἀλλ’ ἴθι, μή μ’ ἐρέθιζε hom. mas, vamos! não me instigues 4 οὐδέ μιν ἐξενάριξε ἀλλ’ ἄρα μιν κατέκηε hom. ele não o despojou mas, então, mandou queimá-lo, καλῶς γε φαίνεται Πῶλος παρεσκευάσθαι εἰς λόγους· ἀλλὰ γὰρ ὅ ὑπέσχετο Χαιρεφῶντι οὐ ποιεῖ plat. vê-se que Polo está bem preparado para discursar, mas, na verdade, ele não está fazendo o que tinha prometido a Querefonte 5 φέρε δὴ ταχέως αὔτ’· οὐ γὰρ ἀλλὰ πειστέον ar. leva-os depressa; pois, de fato, é preciso obedecer, πῶς λέγεις; οὐ γάρ τοι ἀλλὰ τοῦτόν γε τὸν λόγον ἀεὶ θαυμάζω plat. o que estás dizendo? Realmente, esse é o discurso que sempre admiro, ἀεὶ μὲν οὖν οἵ θ’ ἡμέτεροι πρόγονοι καὶ Λακεδαιμόνιοι φιλοτίμως πρὸς ἀλλήλους εἷχον, οὐ μὴν ἀλλὰ περὶ καλλίστων ἐν ἐκείνοις τοῖς χρόνοις ἐφιλονίκησαν isócr. nossos ancestrais e os lacedemônios sempre se comportavam entre si como rivais, e, entretanto, não era por outro motivo que competiam, mas pelo que havia de mais belo naqueles tempos. 〈ἄλλα〉</p></section></article>
<article id="entry-dgp-1794" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλα</h1><div class="entry-meta"><span>DGP · ordem 1794 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">pl. de ἄλλο, cf. ἄλλος.</p></section></article>
<article id="entry-dgp-1795" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλᾷ</h1><div class="entry-meta"><span>DGP · ordem 1795 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἄλλῃ.</p></section></article>
<article id="entry-dgp-1796" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλαγή, ῆς (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1796 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 mudança 2 troca; transação; compra e venda 3 ágio; juro 4 troca de cavalos em paradas. 〈ἀλλάσσω〉</p></section></article>
<article id="entry-dgp-1797" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλαγήσομαι</h1><div class="entry-meta"><span>DGP · ordem 1797 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">cf. ἀλλάσσω.</p></section></article>
<article id="entry-dgp-1798" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλακτέον</h1><div class="entry-meta"><span>DGP · ordem 1798 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adj. verb. de ἀλλάσσω.</p></section></article>
<article id="entry-dgp-1799" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλᾶς, ᾶντος (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1799 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">salsichão; lingüiça.</p></section></article>
<article id="entry-dgp-1800" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλάσσω,</h1><div class="entry-meta"><span>DGP · ordem 1800 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">át. -άττω (fut. ἀλλάξω, aor. ἤλλαξα, perf. desus.; pas. fut.2 ἀλλαγήσομαι, aor. ἠλλάγην ou ἠλλάχθην, perf. ἤλλαγμαι) 1 mudar; alterar algo, ac., em, dat. ou εἰς e ac.: πέτραις ἀ. δέμας orf. mudar o corpo em pedra, ἀλλάτοντα τὸ αὑτοῦ εἷδος εἰς πολλὰς μορφάς plat. mudando sua aparência em numerosas formas 2 renovar: ἀλλάξουσιν ἰσχύν sept. renovarão a força 3 trocar; permutar algo, ac., por, dat. ou gen.: πόνῳ πόνον ἀ. sóf. trocar um sofrimento por outro, τῆς σῆς λατρείας τὴν ἐμὴν δυσπραξίαν οὐκ ἂν ἀλλάξαιμ’ ἐγώ ésql. por tua servidão não trocaria minha desventura 4 dar algo, ac., em troca de, gen. ou ἀντί e gen.: φόνον φονεῦσι πατρὸς ἀλλάζων ἐμοῦ eur. para restituir assassínio aos assassinos de meu pai 5 tomar por seu turno: ἔταξαν Ἐτεοκλέα σκῆπτρ’ ἔχειν ἀλλάσσοντα eur. determinaram que Etéocles alternaria no poder [com seu irmão] 6 deixar; abandonar: Ἔτλα καὶ Δανάας οὐράνιον φῶς ἀλλάξαι δέμας sóf. o corpo de Dânae suportou deixar a luz celeste ♦ méd. 7 mudar para si: ἀ. τὴν πολιτείαν pol. mudar o sistema de governo 8 trocar para si algo, ac, por algo, dat., gen., ἀντί e gen., com alguém, dat.: ἠλλάξαντο πολλῆς εὐδαιμονίας πολλὴν κακοδαιμονίαν ant. trocaram uma imensa felicidade por uma imensa infelicidade, τὰ οἰκήια κακὰ ἀλλάξασθαι βουλόμενοι τοῖσι πλησίοισι her. querendo trocar os próprios males com os vizinhos 9 comprar; negociar: τοῖς δεομένοις τὰ παρ’ αὐτοῦ ἀλλάξασθαι plat. aos que precisam comprar o que é dele. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1801" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλάττα</h1><div class="entry-meta"><span>DGP · ordem 1801 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">át. = ἄλλα ἄττα, cf. ἄττα.</p></section></article>
<article id="entry-dgp-1802" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλάττω</h1><div class="entry-meta"><span>DGP · ordem 1802 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">át. = ἀλλάσσω.</p></section></article>
<article id="entry-dgp-1803" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλαχῇ</h1><div class="entry-meta"><span>DGP · ordem 1803 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. alhures; em outro lugar.</p></section></article>
<article id="entry-dgp-1804" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλαχόθεν</h1><div class="entry-meta"><span>DGP · ordem 1804 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. 1 de outro lugar 2 bíbl. por outro lugar.</p></section></article>
<article id="entry-dgp-1805" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλαχόθι</h1><div class="entry-meta"><span>DGP · ordem 1805 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ἀλλαχῇ.</p></section></article>
<article id="entry-dgp-1806" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλαχόσε</h1><div class="entry-meta"><span>DGP · ordem 1806 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. para outro lugar.</p></section></article>
<article id="entry-dgp-1807" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλαχοῦ</h1><div class="entry-meta"><span>DGP · ordem 1807 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ἀλλαχῇ.</p></section></article>
<article id="entry-dgp-1808" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλεγον, ἀλλέξαι</h1><div class="entry-meta"><span>DGP · ordem 1808 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">impf. e inf. aor. ép. de ἀναλέγω.</p></section></article>
<article id="entry-dgp-1809" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλῃ</h1><div class="entry-meta"><span>DGP · ordem 1809 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. 1 em ou para outro lugar: ἄλλοι ἄλλῃ τῆς πόλεως tuc. cada um em um lugar diferente da cidade 2 de outro modo: τῇ ἄλλῃ πολλαχῇ her. em muitos outros modos, πολλακῇ καὶ ἄλλῃ plat. por muitos outros aspectos. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1810" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλληγορέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1810 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 interpretar alegoricamente 2 falar metaforicamente; falar por alegoria. 〈ἄλλος, ἀγορεύω〉</p></section></article>
<article id="entry-dgp-1811" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλληγορία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1811 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">alegoria; linguagem alegórica; explicação alegórica.</p></section></article>
<article id="entry-dgp-1812" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλληκτος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1812 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 incessante 2 implacável ♦ ἄλληκτον adv. 3 sem fim; sem cessar. 〈ἀ-, λήγω〉</p></section></article>
<article id="entry-dgp-1813" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλληλοφαγία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1813 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ato de se devorarem uns aos outros. 〈ἀλληλοφάγος〉</p></section></article>
<article id="entry-dgp-1814" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλληλοφάγοι, οι, α</h1><div class="entry-meta"><span>DGP · ordem 1814 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que se devoram uns aos outros. 〈ἀλλήλων, φαγεῖν〉</p></section></article>
<article id="entry-dgp-1815" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλληλοφόνοι, οι, α</h1><div class="entry-meta"><span>DGP · ordem 1815 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que se matam uns aos outros. 〈ἀλλήλων, πεφνεῖν〉</p></section></article>
<article id="entry-dgp-1816" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλήλων,</h1><div class="entry-meta"><span>DGP · ordem 1816 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">gen. pl. sem nom. (dat. οις, αις, οις; ac. ους, ας, α; dual gen. οιν, αιν, οιν; ac. ω, α, ω) pron. indica reciprocidade, um ao outro, uns aos outros: κατηγοροῦσιν ἀλλήλων isócr. acusam-se uns aos outros, mutuamente, ἠδίκουν αλλήλους plat. eram injustos uns com os outros, ὦ Προταγόρα τε καὶ Σώκρατες, ἀξιῶ ὑμᾶς συγχορεῖν ἀλλήλοις plat. Protágoras e Sócrates, peço-vos que um se ponha de acordo com o outro. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1817" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀλλόβριγες, ων (οἱ)</h1><div class="entry-meta"><span>DGP · ordem 1817 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">Alóbroges, povo gaulês.</p></section></article>
<article id="entry-dgp-1818" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλογενής, ής, ές</h1><div class="entry-meta"><span>DGP · ordem 1818 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">bíbl. de uma outra raça; estrangeiro. 〈ἄλλος, γένος〉</p></section></article>
<article id="entry-dgp-1819" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλόγλωσσος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1819 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que fala uma outra língua, uma língua estrangeira. 〈ἄλλος, γλῶσσα〉</p></section></article>
<article id="entry-dgp-1820" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλογνοέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1820 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">tomar por um outro; enganar-se 2 estar embaraçado. 〈ἄλλος, γιγνώσκω〉</p></section></article>
<article id="entry-dgp-1821" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλογνώσας</h1><div class="entry-meta"><span>DGP · ordem 1821 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">part. aor. jôn. de ἀλλογνοέω.</p></section></article>
<article id="entry-dgp-1822" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλόγνωτος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1822 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">desconhecido; estrangeiro. 〈ἄλλος, γιγνώσκω〉</p></section></article>
<article id="entry-dgp-1823" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοδαπός, ός, όν</h1><div class="entry-meta"><span>DGP · ordem 1823 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">de um outro país; estrangeiro. 〈ἄλλος, -δαπος〉</p></section></article>
<article id="entry-dgp-1824" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοειδής, ής, ές</h1><div class="entry-meta"><span>DGP · ordem 1824 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">de aspecto diferente. 〈ἄλλος, εἷδος〉</p></section></article>
<article id="entry-dgp-1825" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλοθε</h1><div class="entry-meta"><span>DGP · ordem 1825 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">e ἄλλοθεν adv. de um outro lugar; de outra localidade; ἄλλοθεν ἄλλος cada um de seu lado, ἄλλοθέν ποθεν hom. de um outro lugar qualquer, ἄλλοθεν τῶν Ἑλλήνων plat. de uma outra região da Grécia, οὐδαμόθεν ἄλλοθεν de nenhum outro lugar. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1826" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλοθι</h1><div class="entry-meta"><span>DGP · ordem 1826 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. 1 em outro lugar 2 de um outro modo. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1827" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλόθροος-ους, οος-ους, οον-ουν</h1><div class="entry-meta"><span>DGP · ordem 1827 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que fala uma outra língua; estrangeiro. 〈ἄλλος, θροός〉</p></section></article>
<article id="entry-dgp-1828" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοῖος, α, ον</h1><div class="entry-meta"><span>DGP · ordem 1828 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 de outra espécie; de outro gênero; ἄλλοτε ἀλλοῖος ora de um modo, ora de outro 2 diferente de, gen. ou com ἤ 3 diferente do que se desejaria; mau; desagradável. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1829" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοιόω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1829 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(perf. pas. ἠλλοίωμαι) 1 mudar; tornar diferente ♦ pas. 2 tornar-se diferente; mudar; no perf. estar mudado 3 piorar; tornar-se mau 4 tornar-se estranho 5 alterar-se; deteriorar-se 6 tornar-se alienado ou perdido 7 estar confuso 8 bíbl. disfarçar-se. 〈ἀλλοῖος〉</p></section></article>
<article id="entry-dgp-1830" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοίως</h1><div class="entry-meta"><span>DGP · ordem 1830 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. de modo diferente.</p></section></article>
`;


/* LOTE 64 — ordinais 1831–1880; XML fixado deb54b426ead447d01ced7534736f3e77be7015b, blob eec318bb6150b6b2f4422ea4a76383ac0a254de2. */
window.ScripturaLexicons.DGP.rowsHtml += String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1831" data-source="DGP" data-search="ἀλλοίωσις, εως (ἡ) alteração; diferença; alienação de espírito. 〈ἀλλοιόω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλοίωσις, εως (ἡ)</td><td>—</td><td>alteração</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1832" data-source="DGP" data-search="ἄλλοκα dór. = ἄλλοτε. DGP" tabindex="0"><td class="table-lemma greek">ἄλλοκα</td><td>—</td><td>dór. = ἄλλοτε.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1833" data-source="DGP" data-search="ἀλλόκοτος, ος, ον 1 diferente de, gen. 2 estranho; surpreendente; espantoso. 〈ἄλλος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλόκοτος, ος, ον</td><td>—</td><td>1 diferente de, gen. 2 estranho</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1834" data-source="DGP" data-search="ἅλλομαι (impf. ἡλλόμην, fut. ἁλοῦμαι, aor. ἡλάμην) 1 (pessoa) saltar; atirar-se; pular: ἄλ. θύραζε pular para fora, ἆλτο θέειν hin. pulou para correr 2 (coisas) saltar; voar; projetar-se 3 bíbl. (água) jorrar. DGP" tabindex="0"><td class="table-lemma greek">ἅλλομαι</td><td>—</td><td>(impf. ἡλλόμην, fut. ἁλοῦμαι, aor. ἡλάμην) 1 (pessoa) saltar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1835" data-source="DGP" data-search="ἀλλοπρόσαλλος, ος, ον que pende de um para o outro; volúvel; inconstante. DGP" tabindex="0"><td class="table-lemma greek">ἀλλοπρόσαλλος, ος, ον</td><td>—</td><td>que pende de um para o outro</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1836" data-source="DGP" data-search="ἄλλος, η, ο em relação ao que precede 1 pron. ou adj., (um) outro além dos que foram indicados (se adj., vem com subst. no mesmo caso ou no gen. pl. partit.); ἄ. τις um outro; qualquer outro; οὐκ ἄλλος τις nenhum outro; ninguém mais 2 com art., ὁ ἄλλος o restante; οἱ ἄλλοι os outros; os restantes; os demai 3 com num. ou em enumeração, em acréscimo; a mais; além disso; também; ainda 4 estabelece oposição, outro; diferente; daí diferente das pessoas do lugar; estrangeiro; diferente do verdadeiro; inexato; diferente do que é bom; mau em relação ao que segue 5 completado por expr. coordenadas (mas, e), (um) outro; outros... mas; οἱ τε ἄλλοι καί, τά τε ἄλλα καί entre outros 6 completado por καί e outro ἄλλος um depois (de) outro; vários em seguida 7 completado por ἄλλος em outro caso ou por uma forma adv. derivada de ἄλλος: um e outro, cada um 8 em or. inter. ou neg., com gen. ou ἤ outro que não; nenhum outro senão; οὐδὲν ἄλλο ἤ lit. nenhuma outra coisa [é verdade] senão; τί ἄλλο ἤ lit. que outra coisa senão; ἄλλο τι ἤ ou, com elipse de ἤ, ἄλλο τι lit. há outra coisa além de...? não é verdade que...? 1 φύλλα τὰ μέν τ’ ἄνεμος χαμάδις χέει, ἄλλα δέ θ’ ὕλη τηλεθόωσα φύει hom. o vento espalha folhas pelo chão, mas a floresta, brotando, produz outras, ἡμῖν ἐστι πολλά τε καὶ εὖ ἔχοντα, εἰ τέοισι καὶ ἄλλοισι Ἑλλήνων her. temos muitas boas ações, se é que outros gregos também as têm 2 εἰσὶ δὲ αὐτόθι πολλαὶ κριθαὶ καὶ πυροὶ καὶ τἄλλα τὰ ἐπιτήδεια xen. lá existe grande quantidade de cevada, de trigo e das demais coisas necessárias 3 μήτηρ οὔ τι πέπυσται οὐδ’ ἄλλαι δμῳαί hom. minha mãe de nada sabe, nem também as servas, μετὰ δὲ τούτους πέμπτος ποταμὸς ἄλλος her. depois desses há ainda um quinto rio, ἄνδρες στρατιῶται Ἀθηναίων τε καὶ ἄλλων ξυμμάχων tuc. soldados atenienses, e também aliados, ὑμῖν τε αὐτοῖς τῇ τε ἄλλῃ πόλει ἡγεμόνας τε καὶ βασιλέας ἐγεννήσαμεν plat. para vós mesmos e, ainda, para a cidade geramos chefes e reis 4 ἄλλος γεγονώς plat. que se tornou diferente, ἂν ἄλλο τι γνῶσι περὶ ἡμῶν Ἀθηναῖοι plut. se os atenienses tomarem uma decisão má a nosso respeito 5 ἄλλος δ’ οὔτις μοι τόσον αἴτιος Οὐρανιώνων ἀλλὰ φίλη μήτηρ hom. nenhum outro filho de Urano é tão responsável, mas sim minha mãe, τοῦτον δὲ ἄλλο μὲν οὐδὲν ἔχειν, περὶ δὲ χειρὶ χρυσοῦν δακτύλιον plat. [diz-se] que ele não tinha nenhuma outra coisa, mas na mão tinha um anel de ouro 6 ἄλλος καὶ ἄλλος xen. um ou dois, lit. um e outro, ἄλλο καὶ ἄλλο xen. uma coisa depois outra 7 ἄλλος ἄλλο λέγει xen. um diz uma coisa, outro diz outra; cada um diz uma coisa, εὐθὺς ἠσπάζοντο ἄλλος ἄλλοθεν plat. puseram-se a saudar [-me], cada um de seu lugar, φεύγοντες ἄλλοι ἄλλῃ d.c. fugindo cada um para um lado 8 πότερον τοὺς θεοὺς ἡγεῖ τὰ δίκαια νομοθετεῖν ἢ ἄλλα τῶν δικαίων xen. achas que os deuses fixam leis justas em lugar de contrárias à justiça? οὐδὲν ἄλλο αὐτοὶ ἐπιτεδεύουσιν ἢ ἀποθνῄσκειν plat. eles mesmos não se ocupam de nenhuma outra coisa senão morrer, ἀργύριον μὲν ἄλλο οὐκ ἔχω ἀλλ’ ἢ μικρόν τι xen. outro dinheiro não tenho, a não ser uma pequena quantia, τί ἄλλο ἢ κινδυνεύσεις ἐπιδεῖξαι; xen. que outro risco corres a não ser o de demonstrar...? τοῦτο δὲ ἄλλο τι ἢ θεοφιλὲς γίγνεται plat. isso o que é, senão alguma coisa cara aos deuses? DGP" tabindex="0"><td class="table-lemma greek">ἄλλος, η,</td><td>—</td><td>ο em relação ao que precede 1 pron. ou adj., (um) outro além dos que foram indicados (se adj., vem…</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1837" data-source="DGP" data-search="ἀλλοσύνα dór. = ἠλλοσύνη. DGP" tabindex="0"><td class="table-lemma greek">ἀλλοσύνα</td><td>—</td><td>dór. = ἠλλοσύνη.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1838" data-source="DGP" data-search="ἄλλοσε adv. para outro lugar: ἄ. ποι τῆς Σικελίας teócr. para qualquer outro lugar da Sicília, ἄλλος ἄ. um de um lado outro de outro, um de cada lado, ἄ. οὐδάμοσε plat. em nenhum outro lugar, ἄ. πολλάχοσε plat. em muitos outros lugares. 〈ἄλλος〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλλοσε</td><td>—</td><td>adv. para outro lugar: ἄ. ποι τῆς Σικελίας teócr. para qualquer outro lugar da Sicília, ἄλλος ἄ. um…</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1839" data-source="DGP" data-search="ἄλλοτε adv. uma outra vez; em um momento diferente; em outros momentos; ἄ. ἄλλος ora um, ora outro, ἄλλοτε... ἄλλοτε ou ὁτὲ μὲν... ἄλλοτε δέ ora... ora. 〈ἄλλος〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλλοτε</td><td>—</td><td>adv. uma outra vez</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1840" data-source="DGP" data-search="ἀλλότριος, α, ον 1 que pertence a outro ou a outros; de outro; concernente a outro 2 de outro povo; estrangeiro 3 de outra instituição; oposto; estranho a, gen. ou dat. 4 que segue outro chefe; adversário, hostil a, dat. ou πρός e ac. 〈ἄλλος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλότριος, α, ον</td><td>—</td><td>1 que pertence a outro ou a outros</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1841" data-source="DGP" data-search="ἀλλοτριοεπίσκοπος, ος, ον bíbl. que se intromete na vida alheia; indiscreto. 〈ἀλλότριος, ἐπίσκοπος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλοτριοεπίσκοπος, ος, ον</td><td>—</td><td>bíbl. que se intromete na vida alheia</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1842" data-source="DGP" data-search="ἀλλοτριότης, ητος (ἡ) 1 qualidade do que é estranho; incompatibilidade 2 hostilidade. 〈ἀλλότριος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλοτριότης, ητος (ἡ)</td><td>—</td><td>1 qualidade do que é estranho</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1843" data-source="DGP" data-search="ἀλλοτριόω-ῶ (fut. ἀλλοτριώσω, aor. ἠλλοτρίωσα, perf. ἠλλοτρίωκα; pas. aor. ἠλλοτριώθην, perf. ἠλλοτρίωμαι) 1 alienar; afastar; separar alguém, ac., de algo, gen.: ἀ. τῶν σωμάτων τὴν πόλιν tuc. privar a cidade de seus cidadãos 2 tornar hostil algo, ac., a alguém, dat.: ἀ. τὴν χώραν τοῖς πολεμίοις her. tornar hostil o país aos inimigos 3 esquivar: τοὺς ἠλλοτριωκότας αὑτοὺς ἀπὸ τῆς λῃτουργίας dem. aqueles que se furtaram da liturgia ♦ méd. 4 passar para outro: ἀλλοτριοῦται ἡ ἀρχή her. o poder passa para outro 5 tornar-se hostil a, dat.: Σάμον Ἀθηναίοις ἀλλοτριωθεῖσαν tuc. Samos que se voltou contra Atenas 6 alterar-se: τὸ προσιὸν [ὕδωρ] ἠλλοτριωμένον ἐστίν artt. a água que flui sofre alteração. 〈ἀλλότριος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλοτριόω-ῶ</td><td>—</td><td>(fut. ἀλλοτριώσω, aor. ἠλλοτρίωσα, perf. ἠλλοτρίωκα</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1844" data-source="DGP" data-search="ἀλλοτρίως adv . de modo desfavorável; de modo hostil a alguém, dat. ou πρός e ac. 2 de modo estranho. DGP" tabindex="0"><td class="table-lemma greek">ἀλλοτρίως</td><td>—</td><td>adv . de modo desfavorável</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1845" data-source="DGP" data-search="ἀλλοτρίωσις, εως (ἡ) 1 hostilidade;repugnância por, gen. ou εἰς, πρός e ac. 2 afastamento; separação. 〈ἀλλότριος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλοτρίωσις, εως (ἡ)</td><td>—</td><td>1 hostilidade</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1846" data-source="DGP" data-search="ἄλλοφος, ος, ον ép. = ἄλοφος. DGP" tabindex="0"><td class="table-lemma greek">ἄλλοφος, ος, ον</td><td>—</td><td>ép. = ἄλοφος.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1847" data-source="DGP" data-search="ἀλλοφρονέω-ῶ (só part. ἀλλοφρονέων e inf. aor. ἀλλοφρονῆσαι) 1 pensar em outra coisa; estar distraído 2 estar agitado; delirar 3 perder os sentidos. 〈ἄλλος, φρήν〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλοφρονέω-ῶ</td><td>—</td><td>(só part. ἀλλοφρονέων e inf. aor. ἀλλοφρονῆσαι) 1 pensar em outra coisa</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1848" data-source="DGP" data-search="ἀλλόφυλος, ος, ον 1 de outra raça; estrangeiro: πόλεμος ἀλλόφυλος plut. guerra externa 2 tard. de outra espécie. 〈ἄλλος, φυλή〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλόφυλος, ος, ον</td><td>—</td><td>1 de outra raça</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1849" data-source="DGP" data-search="ἀλλόχροος-ους, οος-ους, οον-ουν que muda de cor; cujo aspecto mudou; que perdeu a beleza. 〈ἄλλος, χρόα〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλλόχροος-ους, οος-ους, οον-ουν</td><td>—</td><td>que muda de cor</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1850" data-source="DGP" data-search="ἄλλυδις adv. eól. ép. alhures; em outra direção; de outro modo: ἄλλυδις ἄλλος cada um de seu lado, ἄλλυδις ἄλλῃ ora de um modo, ora de outro. 〈ἄλλος〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλλυδις</td><td>—</td><td>adv. eól. ép. alhures</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1851" data-source="DGP" data-search="ἀλλύεσκεν 3ª sing. impf. ép. de ἀναλύω. DGP" tabindex="0"><td class="table-lemma greek">ἀλλύεσκεν</td><td>—</td><td>3ª sing. impf. ép. de ἀναλύω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1852" data-source="DGP" data-search="ἀλλύουσα part. pres. fem. ép. de ἀναλύω. DGP" tabindex="0"><td class="table-lemma greek">ἀλλύουσα</td><td>—</td><td>part. pres. fem. ép. de ἀναλύω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1853" data-source="DGP" data-search="ἄλλως adv. 1 de outro modo: τὰ ἄ. ἔχοντα n.t. ações de outro gênero, ἄ. πως de qualquer outro modo, ἄ. οὐδαμῶς de nenhum outro modo 2 além disso; aliás; ainda por cima: τὸ σῶμα μάλα εὔρωστος, καὶ ἄλλως φιλόπονος xen. [tinha] muito vigor físico e, além disso, amava a labuta, ἀγήνωρ ἐστὶ καὶ ἄλλως hom. e, aliás, é orgulhoso 3 de outro modo, i.e., melhor: οὐδέ κεν ἄλλως οὐδὲ θεὸς τεύξειε hom. melhor nem um deus criaria 4 ao contrário do que se esperaria ou conviria, i.e., ao acaso; sem razão: ταῦτα μοι δοκῶ ἄλλως λέγειν plat. parece-me que digo isso por nada, δίδωμι δὲ ἄλλως her. dou sem razão, i.e., de presente 5 de outro modo; ἄλλως τε καί particularmente, οὐκ ἀηδὲς ἄλλως τε καὶ τήνδε τὴν ὥραν plat. não desagradável, sobretudo neste momento. 〈ἄλλος〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλλως</td><td>—</td><td>adv. 1 de outro modo: τὰ ἄ. ἔχοντα n.t. ações de outro gênero, ἄ. πως de qualquer outro modo, ἄ.…</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1854" data-source="DGP" data-search="ἅλμα1, ατος (τό) 1 salto; pulo 2 pulsação (do coração, do embrião). 〈ἅλλομαι〉 DGP" tabindex="0"><td class="table-lemma greek">ἅλμα1, ατος (τό)</td><td>—</td><td>1 salto</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1855" data-source="DGP" data-search="ἅλμα2, ας (ἡ) dór. = ἅλμη. DGP" tabindex="0"><td class="table-lemma greek">ἅλμα2, ας (ἡ)</td><td>—</td><td>dór. = ἅλμη.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1856" data-source="DGP" data-search="ἅλμη, ης (ἡ) 1 água do mar; água salgada; mar 2 salinidade 3 salmoura 4 sal; salitre 5 estado salino. 〈ἅλς〉 DGP" tabindex="0"><td class="table-lemma greek">ἅλμη, ης (ἡ)</td><td>—</td><td>1 água do mar</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1857" data-source="DGP" data-search="ἁλμήεις, ήεσσα, ῆεν salgado. 〈ἅλμη〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλμήεις, ήεσσα, ῆεν</td><td>—</td><td>salgado. 〈ἅλμη〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1858" data-source="DGP" data-search="ἁλμυρός, ά, όν 1 salgado 2 amargo; penoso; desagradável 3 picante. 〈ἅλμη〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλμυρός, ά, όν</td><td>—</td><td>1 salgado 2 amargo</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1859" data-source="DGP" data-search="ἁλμώδης, ης, ες salino. 〈ἅλμη〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλμώδης, ης, ες</td><td>—</td><td>salino. 〈ἅλμη〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1860" data-source="DGP" data-search="ἄλξ (só dat. poét.) força, em ἀλκὶ πεποιθώς hom. confiante em sua força. DGP" tabindex="0"><td class="table-lemma greek">ἄλξ</td><td>—</td><td>(só dat. poét.) força, em ἀλκὶ πεποιθώς hom. confiante em sua força.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1861" data-source="DGP" data-search="ἀλοατός, οῦ (ὁ) eira para bater o trigo. 〈ἀλοάω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλοατός, οῦ (ὁ)</td><td>—</td><td>eira para bater o trigo. 〈ἀλοάω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1862" data-source="DGP" data-search="ἀλοάω-ῶ (fut. ἀλοήσω, aor. ἠλόησα, perf. desus; pas. fut. ἀλοηθήσομαι, aor. ἠλοήθην, perf. ἠλόημαι) 1 bater o trigo (na eira); debulhar 2 bater com golpes repetidos; machucar 3 despedaçar; destruir 4 revirar (como para debulhar o grão); conduzir dando voltas; girar. DGP" tabindex="0"><td class="table-lemma greek">ἀλοάω-ῶ</td><td>—</td><td>(fut. ἀλοήσω, aor. ἠλόησα, perf. desus</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1863" data-source="DGP" data-search="ἄλοβος, ος, ον 1 sem lóbulos hepáticos (vítima de sacrifício) 2 sinistro; de mau agouro. 〈ἀ-, λοβός〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλοβος, ος, ον</td><td>—</td><td>1 sem lóbulos hepáticos (vítima de sacrifício) 2 sinistro</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1864" data-source="DGP" data-search="ἀλογέω-ῶ (fut. ἀλογήσω, aor. ἠλόγησα, perf. ἠλόγηκα) 1 não levar em conta; negligenciar, gen. 2 induzir a falso raciocínio; enganar 3 perder a razão; desatinar ♦ pas. 4 sentir-se desprezado. 〈ἄλογος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλογέω-ῶ</td><td>—</td><td>(fut. ἀλογήσω, aor. ἠλόγησα, perf. ἠλόγηκα) 1 não levar em conta</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1865" data-source="DGP" data-search="ἀλογία, ας (ἡ) 1 perda da fala; estupor 2 desprezo: ἀλο­γίην ἔχειν, ἐν ἀλογίῃσι ἔχειν, negligenciar, não levar em conta, gen. 3 desatino; extravagância 4 confusão; desordem 5 indecisão; incerteza. 〈ἄλογος〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλογία, ας (ἡ)</td><td>—</td><td>1 perda da fala</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1866" data-source="DGP" data-search="ἀλογιστέω-ῶ não refletir; desatinar. 〈ἀ-, λογίζομαι〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλογιστέω-ῶ</td><td>—</td><td>não refletir</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1867" data-source="DGP" data-search="ἀλογιστία, ας (ἡ) irreflexão; desatino; imprudência. 〈ἀ-, λογίζομαι〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλογιστία, ας (ἡ)</td><td>—</td><td>irreflexão</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1868" data-source="DGP" data-search="ἀλόγιστος, ος, ον 1 irracional; irrefletido; insensato 2 incalculável. 〈ἀ-, λογίζομαι〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλόγιστος, ος, ον</td><td>—</td><td>1 irracional</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1869" data-source="DGP" data-search="ἀλογίστως adv. sem reflexão; sem razão. DGP" tabindex="0"><td class="table-lemma greek">ἀλογίστως</td><td>—</td><td>adv. sem reflexão</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1870" data-source="DGP" data-search="ἄλογος, ος, ον 1 que não fala; privado da fala; mudo 2 inexprimível; inefável 3 que não se pode exprimir pela razão; não racional; ininteligível 4 contrário à razão; insensato; absurdo 5 privado da razão; instintivo 6 incalculável; improvável. 〈ἀ-, λόγος〉 DGP" tabindex="0"><td class="table-lemma greek">ἄλογος, ος, ον</td><td>—</td><td>1 que não fala</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1871" data-source="DGP" data-search="ἀλόγως adv. sem palavras; sem razão; de modo irrefletido. DGP" tabindex="0"><td class="table-lemma greek">ἀλόγως</td><td>—</td><td>adv. sem palavras</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1872" data-source="DGP" data-search="ἀλόη, ης (ἡ) aloés, planta. DGP" tabindex="0"><td class="table-lemma greek">ἀλόη, ης (ἡ)</td><td>—</td><td>aloés, planta.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1873" data-source="DGP" data-search="ἀλοητός e ἁλοητός, οῦ (ὁ) 1 debulha 2 tempo de debulha. 〈ἀλοάω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλοητός</td><td>—</td><td>e ἁλοητός, οῦ (ὁ) 1 debulha 2 tempo de debulha. 〈ἀλοάω〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1874" data-source="DGP" data-search="ἁλόθεν adv. em ἐξ ἁλόθεν, vindo do mar. 〈ἅλς〉 DGP" tabindex="0"><td class="table-lemma greek">ἁλόθεν</td><td>—</td><td>adv. em ἐξ ἁλόθεν, vindo do mar. 〈ἅλς〉</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1875" data-source="DGP" data-search="ἀλοιάω ép. = ἀλοάω. DGP" tabindex="0"><td class="table-lemma greek">ἀλοιάω</td><td>—</td><td>ép. = ἀλοάω.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1876" data-source="DGP" data-search="ἀλοιδόρητος, ος, ον 1 a salvo de injúrias; irrepreensível 2 que não injuria. 〈ἀ-, λοιδορέω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλοιδόρητος, ος, ον</td><td>—</td><td>1 a salvo de injúrias</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1877" data-source="DGP" data-search="ἁλοίην opt. aor. de ἁλίσκομαι. DGP" tabindex="0"><td class="table-lemma greek">ἁλοίην</td><td>—</td><td>opt. aor. de ἁλίσκομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1878" data-source="DGP" data-search="ἁλοίμαν dór. = ἁλοίμην. DGP" tabindex="0"><td class="table-lemma greek">ἁλοίμαν</td><td>—</td><td>dór. = ἁλοίμην.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1879" data-source="DGP" data-search="ἁλοίμην opt. aor.2 de ἅλλομαι. DGP" tabindex="0"><td class="table-lemma greek">ἁλοίμην</td><td>—</td><td>opt. aor.2 de ἅλλομαι.</td><td><span class="source-pill">DGP</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-1880" data-source="DGP" data-search="ἀλοιφή, ῆς (ἡ) 1 qualquer substância para ungir; unto 2 ação de ungir; unção 3 tinta; tintura 4 verniz 5 rasura. 〈ἀλείφω〉 DGP" tabindex="0"><td class="table-lemma greek">ἀλοιφή, ῆς (ἡ)</td><td>—</td><td>1 qualquer substância para ungir</td><td><span class="source-pill">DGP</span></td></tr>
`;
window.ScripturaLexicons.DGP.cardsHtml += String.raw`
<article id="entry-dgp-1831" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοίωσις, εως (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1831 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">alteração; diferença; alienação de espírito. 〈ἀλλοιόω〉</p></section></article>
<article id="entry-dgp-1832" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλοκα</h1><div class="entry-meta"><span>DGP · ordem 1832 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἄλλοτε.</p></section></article>
<article id="entry-dgp-1833" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλόκοτος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1833 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 diferente de, gen. 2 estranho; surpreendente; espantoso. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1834" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλλομαι</h1><div class="entry-meta"><span>DGP · ordem 1834 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(impf. ἡλλόμην, fut. ἁλοῦμαι, aor. ἡλάμην) 1 (pessoa) saltar; atirar-se; pular: ἄλ. θύραζε pular para fora, ἆλτο θέειν hin. pulou para correr 2 (coisas) saltar; voar; projetar-se 3 bíbl. (água) jorrar.</p></section></article>
<article id="entry-dgp-1835" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοπρόσαλλος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1835 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que pende de um para o outro; volúvel; inconstante.</p></section></article>
<article id="entry-dgp-1836" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλος, η,</h1><div class="entry-meta"><span>DGP · ordem 1836 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ο em relação ao que precede 1 pron. ou adj., (um) outro além dos que foram indicados (se adj., vem com subst. no mesmo caso ou no gen. pl. partit.); ἄ. τις um outro; qualquer outro; οὐκ ἄλλος τις nenhum outro; ninguém mais 2 com art., ὁ ἄλλος o restante; οἱ ἄλλοι os outros; os restantes; os demai 3 com num. ou em enumeração, em acréscimo; a mais; além disso; também; ainda 4 estabelece oposição, outro; diferente; daí diferente das pessoas do lugar; estrangeiro; diferente do verdadeiro; inexato; diferente do que é bom; mau em relação ao que segue 5 completado por expr. coordenadas (mas, e), (um) outro; outros... mas; οἱ τε ἄλλοι καί, τά τε ἄλλα καί entre outros 6 completado por καί e outro ἄλλος um depois (de) outro; vários em seguida 7 completado por ἄλλος em outro caso ou por uma forma adv. derivada de ἄλλος: um e outro, cada um 8 em or. inter. ou neg., com gen. ou ἤ outro que não; nenhum outro senão; οὐδὲν ἄλλο ἤ lit. nenhuma outra coisa [é verdade] senão; τί ἄλλο ἤ lit. que outra coisa senão; ἄλλο τι ἤ ou, com elipse de ἤ, ἄλλο τι lit. há outra coisa além de...? não é verdade que...? 1 φύλλα τὰ μέν τ’ ἄνεμος χαμάδις χέει, ἄλλα δέ θ’ ὕλη τηλεθόωσα φύει <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico grego, tradicionalmente associado à Ilíada e à Odisseia; sua poesia ocupa posição central na tradição literária grega arcaica."><strong>Homero</strong></span> o vento espalha folhas pelo chão, mas a floresta, brotando, produz outras, ἡμῖν ἐστι πολλά τε καὶ εὖ ἔχοντα, εἰ τέοισι καὶ ἄλλοισι Ἑλλήνων <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Heródoto" data-tooltip-text="Heródoto — historiador grego do século V a.C., autor das Histórias."><strong>Heródoto</strong></span> temos muitas boas ações, se é que outros gregos também as têm 2 εἰσὶ δὲ αὐτόθι πολλαὶ κριθαὶ καὶ πυροὶ καὶ τἄλλα τὰ ἐπιτήδεια <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Xenofonte" data-tooltip-text="Xenofonte — escritor e historiador grego dos séculos V–IV a.C., discípulo de Sócrates."><strong>Xenofonte</strong></span> lá existe grande quantidade de cevada, de trigo e das demais coisas necessárias 3 μήτηρ οὔ τι πέπυσται οὐδ’ ἄλλαι δμῳαί <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico grego, tradicionalmente associado à Ilíada e à Odisseia; sua poesia ocupa posição central na tradição literária grega arcaica."><strong>Homero</strong></span> minha mãe de nada sabe, nem também as servas, μετὰ δὲ τούτους πέμπτος ποταμὸς ἄλλος <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Heródoto" data-tooltip-text="Heródoto — historiador grego do século V a.C., autor das Histórias."><strong>Heródoto</strong></span> depois desses há ainda um quinto rio, ἄνδρες στρατιῶται Ἀθηναίων τε καὶ ἄλλων ξυμμάχων <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Tucídides" data-tooltip-text="Tucídides — historiador ateniense do século V a.C., autor da História da Guerra do Peloponeso."><strong>Tucídides</strong></span> soldados atenienses, e também aliados, ὑμῖν τε αὐτοῖς τῇ τε ἄλλῃ πόλει ἡγεμόνας τε καὶ βασιλέας ἐγεννήσαμεν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> para vós mesmos e, ainda, para a cidade geramos chefes e reis 4 ἄλλος γεγονώς <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> que se tornou diferente, ἂν ἄλλο τι γνῶσι περὶ ἡμῶν Ἀθηναῖοι <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Plutarco" data-tooltip-text="Plutarco — escritor, biógrafo e filósofo grego dos séculos I–II d.C., autor das Vidas Paralelas e dos Moralia."><strong>Plutarco</strong></span> se os atenienses tomarem uma decisão má a nosso respeito 5 ἄλλος δ’ οὔτις μοι τόσον αἴτιος Οὐρανιώνων ἀλλὰ φίλη μήτηρ <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico grego, tradicionalmente associado à Ilíada e à Odisseia; sua poesia ocupa posição central na tradição literária grega arcaica."><strong>Homero</strong></span> nenhum outro filho de Urano é tão responsável, mas sim minha mãe, τοῦτον δὲ ἄλλο μὲν οὐδὲν ἔχειν, περὶ δὲ χειρὶ χρυσοῦν δακτύλιον <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> [diz-se] que ele não tinha nenhuma outra coisa, mas na mão tinha um anel de ouro 6 ἄλλος καὶ ἄλλος <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Xenofonte" data-tooltip-text="Xenofonte — escritor e historiador grego dos séculos V–IV a.C., discípulo de Sócrates."><strong>Xenofonte</strong></span> um ou dois, lit. um e outro, ἄλλο καὶ ἄλλο <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Xenofonte" data-tooltip-text="Xenofonte — escritor e historiador grego dos séculos V–IV a.C., discípulo de Sócrates."><strong>Xenofonte</strong></span> uma coisa depois outra 7 ἄλλος ἄλλο λέγει <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Xenofonte" data-tooltip-text="Xenofonte — escritor e historiador grego dos séculos V–IV a.C., discípulo de Sócrates."><strong>Xenofonte</strong></span> um diz uma coisa, outro diz outra; cada um diz uma coisa, εὐθὺς ἠσπάζοντο ἄλλος ἄλλοθεν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> puseram-se a saudar [-me], cada um de seu lugar, φεύγοντες ἄλλοι ἄλλῃ d.c. fugindo cada um para um lado 8 πότερον τοὺς θεοὺς ἡγεῖ τὰ δίκαια νομοθετεῖν ἢ ἄλλα τῶν δικαίων <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Xenofonte" data-tooltip-text="Xenofonte — escritor e historiador grego dos séculos V–IV a.C., discípulo de Sócrates."><strong>Xenofonte</strong></span> achas que os deuses fixam leis justas em lugar de contrárias à justiça? οὐδὲν ἄλλο αὐτοὶ ἐπιτεδεύουσιν ἢ ἀποθνῄσκειν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> eles mesmos não se ocupam de nenhuma outra coisa senão morrer, ἀργύριον μὲν ἄλλο οὐκ ἔχω ἀλλ’ ἢ μικρόν τι <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Xenofonte" data-tooltip-text="Xenofonte — escritor e historiador grego dos séculos V–IV a.C., discípulo de Sócrates."><strong>Xenofonte</strong></span> outro dinheiro não tenho, a não ser uma pequena quantia, τί ἄλλο ἢ κινδυνεύσεις ἐπιδεῖξαι; <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Xenofonte" data-tooltip-text="Xenofonte — escritor e historiador grego dos séculos V–IV a.C., discípulo de Sócrates."><strong>Xenofonte</strong></span> que outro risco corres a não ser o de demonstrar...? τοῦτο δὲ ἄλλο τι ἢ θεοφιλὲς γίγνεται <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> isso o que é, senão alguma coisa cara aos deuses?</p></section></article>
<article id="entry-dgp-1837" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοσύνα</h1><div class="entry-meta"><span>DGP · ordem 1837 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἠλλοσύνη.</p></section></article>
<article id="entry-dgp-1838" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλοσε</h1><div class="entry-meta"><span>DGP · ordem 1838 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. para outro lugar: ἄ. ποι τῆς Σικελίας <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Teócrito" data-tooltip-text="Teócrito — poeta helenístico dos séculos IV–III a.C., tradicionalmente associado ao desenvolvimento da poesia bucólica."><strong>Teócrito</strong></span> para qualquer outro lugar da Sicília, ἄλλος ἄ. um de um lado outro de outro, um de cada lado, ἄ. οὐδάμοσε <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> em nenhum outro lugar, ἄ. πολλάχοσε <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> em muitos outros lugares. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1839" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλοτε</h1><div class="entry-meta"><span>DGP · ordem 1839 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. uma outra vez; em um momento diferente; em outros momentos; ἄ. ἄλλος ora um, ora outro, ἄλλοτε... ἄλλοτε ou ὁτὲ μὲν... ἄλλοτε δέ ora... ora. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1840" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλότριος, α, ον</h1><div class="entry-meta"><span>DGP · ordem 1840 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 que pertence a outro ou a outros; de outro; concernente a outro 2 de outro povo; estrangeiro 3 de outra instituição; oposto; estranho a, gen. ou dat. 4 que segue outro chefe; adversário, hostil a, dat. ou πρός e ac. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1841" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοτριοεπίσκοπος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1841 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">bíbl. que se intromete na vida alheia; indiscreto. 〈ἀλλότριος, ἐπίσκοπος〉</p></section></article>
<article id="entry-dgp-1842" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοτριότης, ητος (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1842 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 qualidade do que é estranho; incompatibilidade 2 hostilidade. 〈ἀλλότριος〉</p></section></article>
<article id="entry-dgp-1843" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοτριόω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1843 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἀλλοτριώσω, aor. ἠλλοτρίωσα, perf. ἠλλοτρίωκα; pas. aor. ἠλλοτριώθην, perf. ἠλλοτρίωμαι) 1 alienar; afastar; separar alguém, ac., de algo, gen.: ἀ. τῶν σωμάτων τὴν πόλιν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Tucídides" data-tooltip-text="Tucídides — historiador ateniense do século V a.C., autor da História da Guerra do Peloponeso."><strong>Tucídides</strong></span> privar a cidade de seus cidadãos 2 tornar hostil algo, ac., a alguém, dat.: ἀ. τὴν χώραν τοῖς πολεμίοις <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Heródoto" data-tooltip-text="Heródoto — historiador grego do século V a.C., autor das Histórias."><strong>Heródoto</strong></span> tornar hostil o país aos inimigos 3 esquivar: τοὺς ἠλλοτριωκότας αὑτοὺς ἀπὸ τῆς λῃτουργίας <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Demóstenes" data-tooltip-text="Demóstenes — orador ateniense do século IV a.C., tradicionalmente incluído entre os dez oradores áticos."><strong>Demóstenes</strong></span> aqueles que se furtaram da liturgia ♦ méd. 4 passar para outro: ἀλλοτριοῦται ἡ ἀρχή <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Heródoto" data-tooltip-text="Heródoto — historiador grego do século V a.C., autor das Histórias."><strong>Heródoto</strong></span> o poder passa para outro 5 tornar-se hostil a, dat.: Σάμον Ἀθηναίοις ἀλλοτριωθεῖσαν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Tucídides" data-tooltip-text="Tucídides — historiador ateniense do século V a.C., autor da História da Guerra do Peloponeso."><strong>Tucídides</strong></span> Samos que se voltou contra Atenas 6 alterar-se: τὸ προσιὸν [ὕδωρ] ἠλλοτριωμένον ἐστίν artt. a água que flui sofre alteração. 〈ἀλλότριος〉</p></section></article>
<article id="entry-dgp-1844" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοτρίως</h1><div class="entry-meta"><span>DGP · ordem 1844 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv . de modo desfavorável; de modo hostil a alguém, dat. ou πρός e ac. 2 de modo estranho.</p></section></article>
<article id="entry-dgp-1845" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοτρίωσις, εως (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1845 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 hostilidade;repugnância por, gen. ou εἰς, πρός e ac. 2 afastamento; separação. 〈ἀλλότριος〉</p></section></article>
<article id="entry-dgp-1846" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλοφος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1846 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ép. = ἄλοφος.</p></section></article>
<article id="entry-dgp-1847" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλοφρονέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1847 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(só part. ἀλλοφρονέων e inf. aor. ἀλλοφρονῆσαι) 1 pensar em outra coisa; estar distraído 2 estar agitado; delirar 3 perder os sentidos. 〈ἄλλος, φρήν〉</p></section></article>
<article id="entry-dgp-1848" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλόφυλος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1848 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 de outra raça; estrangeiro: πόλεμος ἀλλόφυλος <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Plutarco" data-tooltip-text="Plutarco — escritor, biógrafo e filósofo grego dos séculos I–II d.C., autor das Vidas Paralelas e dos Moralia."><strong>Plutarco</strong></span> guerra externa 2 tard. de outra espécie. 〈ἄλλος, φυλή〉</p></section></article>
<article id="entry-dgp-1849" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλόχροος-ους, οος-ους, οον-ουν</h1><div class="entry-meta"><span>DGP · ordem 1849 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">que muda de cor; cujo aspecto mudou; que perdeu a beleza. 〈ἄλλος, χρόα〉</p></section></article>
<article id="entry-dgp-1850" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλυδις</h1><div class="entry-meta"><span>DGP · ordem 1850 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. eól. ép. alhures; em outra direção; de outro modo: ἄλλυδις ἄλλος cada um de seu lado, ἄλλυδις ἄλλῃ ora de um modo, ora de outro. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1851" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλύεσκεν</h1><div class="entry-meta"><span>DGP · ordem 1851 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">3ª sing. impf. ép. de ἀναλύω.</p></section></article>
<article id="entry-dgp-1852" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλλύουσα</h1><div class="entry-meta"><span>DGP · ordem 1852 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">part. pres. fem. ép. de ἀναλύω.</p></section></article>
<article id="entry-dgp-1853" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλλως</h1><div class="entry-meta"><span>DGP · ordem 1853 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. 1 de outro modo: τὰ ἄ. ἔχοντα <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Novo Testamento" data-tooltip-text="Novo Testamento — corpus grego cristão citado pelo DGP."><strong>Novo Testamento</strong></span> ações de outro gênero, ἄ. πως de qualquer outro modo, ἄ. οὐδαμῶς de nenhum outro modo 2 além disso; aliás; ainda por cima: τὸ σῶμα μάλα εὔρωστος, καὶ ἄλλως φιλόπονος <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Xenofonte" data-tooltip-text="Xenofonte — escritor e historiador grego dos séculos V–IV a.C., discípulo de Sócrates."><strong>Xenofonte</strong></span> [tinha] muito vigor físico e, além disso, amava a labuta, ἀγήνωρ ἐστὶ καὶ ἄλλως <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico grego, tradicionalmente associado à Ilíada e à Odisseia; sua poesia ocupa posição central na tradição literária grega arcaica."><strong>Homero</strong></span> e, aliás, é orgulhoso 3 de outro modo, i.e., melhor: οὐδέ κεν ἄλλως οὐδὲ θεὸς τεύξειε <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico grego, tradicionalmente associado à Ilíada e à Odisseia; sua poesia ocupa posição central na tradição literária grega arcaica."><strong>Homero</strong></span> melhor nem um deus criaria 4 ao contrário do que se esperaria ou conviria, i.e., ao acaso; sem razão: ταῦτα μοι δοκῶ ἄλλως λέγειν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> parece-me que digo isso por nada, δίδωμι δὲ ἄλλως <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Heródoto" data-tooltip-text="Heródoto — historiador grego do século V a.C., autor das Histórias."><strong>Heródoto</strong></span> dou sem razão, i.e., de presente 5 de outro modo; ἄλλως τε καί particularmente, οὐκ ἀηδὲς ἄλλως τε καὶ τήνδε τὴν ὥραν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo ateniense dos séculos V–IV a.C., autor de diálogos filosóficos e fundador da Academia."><strong>Platão</strong></span> não desagradável, sobretudo neste momento. 〈ἄλλος〉</p></section></article>
<article id="entry-dgp-1854" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλμα1, ατος (τό)</h1><div class="entry-meta"><span>DGP · ordem 1854 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 salto; pulo 2 pulsação (do coração, do embrião). 〈ἅλλομαι〉</p></section></article>
<article id="entry-dgp-1855" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλμα2, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1855 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἅλμη.</p></section></article>
<article id="entry-dgp-1856" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἅλμη, ης (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1856 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 água do mar; água salgada; mar 2 salinidade 3 salmoura 4 sal; salitre 5 estado salino. 〈ἅλς〉</p></section></article>
<article id="entry-dgp-1857" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλμήεις, ήεσσα, ῆεν</h1><div class="entry-meta"><span>DGP · ordem 1857 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">salgado. 〈ἅλμη〉</p></section></article>
<article id="entry-dgp-1858" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλμυρός, ά, όν</h1><div class="entry-meta"><span>DGP · ordem 1858 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 salgado 2 amargo; penoso; desagradável 3 picante. 〈ἅλμη〉</p></section></article>
<article id="entry-dgp-1859" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλμώδης, ης, ες</h1><div class="entry-meta"><span>DGP · ordem 1859 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">salino. 〈ἅλμη〉</p></section></article>
<article id="entry-dgp-1860" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλξ</h1><div class="entry-meta"><span>DGP · ordem 1860 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(só dat. poét.) força, em ἀλκὶ πεποιθώς <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico grego, tradicionalmente associado à Ilíada e à Odisseia; sua poesia ocupa posição central na tradição literária grega arcaica."><strong>Homero</strong></span> confiante em sua força.</p></section></article>
<article id="entry-dgp-1861" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλοατός, οῦ (ὁ)</h1><div class="entry-meta"><span>DGP · ordem 1861 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">eira para bater o trigo. 〈ἀλοάω〉</p></section></article>
<article id="entry-dgp-1862" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλοάω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1862 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἀλοήσω, aor. ἠλόησα, perf. desus; pas. fut. ἀλοηθήσομαι, aor. ἠλοήθην, perf. ἠλόημαι) 1 bater o trigo (na eira); debulhar 2 bater com golpes repetidos; machucar 3 despedaçar; destruir 4 revirar (como para debulhar o grão); conduzir dando voltas; girar.</p></section></article>
<article id="entry-dgp-1863" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλοβος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1863 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 sem lóbulos hepáticos (vítima de sacrifício) 2 sinistro; de mau agouro. 〈ἀ-, λοβός〉</p></section></article>
<article id="entry-dgp-1864" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλογέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1864 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">(fut. ἀλογήσω, aor. ἠλόγησα, perf. ἠλόγηκα) 1 não levar em conta; negligenciar, gen. 2 induzir a falso raciocínio; enganar 3 perder a razão; desatinar ♦ pas. 4 sentir-se desprezado. 〈ἄλογος〉</p></section></article>
<article id="entry-dgp-1865" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλογία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1865 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 perda da fala; estupor 2 desprezo: ἀλο­γίην ἔχειν, ἐν ἀλογίῃσι ἔχειν, negligenciar, não levar em conta, gen. 3 desatino; extravagância 4 confusão; desordem 5 indecisão; incerteza. 〈ἄλογος〉</p></section></article>
<article id="entry-dgp-1866" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλογιστέω-ῶ</h1><div class="entry-meta"><span>DGP · ordem 1866 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">não refletir; desatinar. 〈ἀ-, λογίζομαι〉</p></section></article>
<article id="entry-dgp-1867" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλογιστία, ας (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1867 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">irreflexão; desatino; imprudência. 〈ἀ-, λογίζομαι〉</p></section></article>
<article id="entry-dgp-1868" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλόγιστος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1868 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 irracional; irrefletido; insensato 2 incalculável. 〈ἀ-, λογίζομαι〉</p></section></article>
<article id="entry-dgp-1869" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλογίστως</h1><div class="entry-meta"><span>DGP · ordem 1869 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. sem reflexão; sem razão.</p></section></article>
<article id="entry-dgp-1870" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄλογος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1870 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 que não fala; privado da fala; mudo 2 inexprimível; inefável 3 que não se pode exprimir pela razão; não racional; ininteligível 4 contrário à razão; insensato; absurdo 5 privado da razão; instintivo 6 incalculável; improvável. 〈ἀ-, λόγος〉</p></section></article>
<article id="entry-dgp-1871" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλόγως</h1><div class="entry-meta"><span>DGP · ordem 1871 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. sem palavras; sem razão; de modo irrefletido.</p></section></article>
<article id="entry-dgp-1872" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλόη, ης (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1872 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">aloés, planta.</p></section></article>
<article id="entry-dgp-1873" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλοητός</h1><div class="entry-meta"><span>DGP · ordem 1873 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">e ἁλοητός, οῦ (ὁ) 1 debulha 2 tempo de debulha. 〈ἀλοάω〉</p></section></article>
<article id="entry-dgp-1874" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλόθεν</h1><div class="entry-meta"><span>DGP · ordem 1874 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">adv. em ἐξ ἁλόθεν, vindo do mar. 〈ἅλς〉</p></section></article>
<article id="entry-dgp-1875" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλοιάω</h1><div class="entry-meta"><span>DGP · ordem 1875 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">ép. = ἀλοάω.</p></section></article>
<article id="entry-dgp-1876" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλοιδόρητος, ος, ον</h1><div class="entry-meta"><span>DGP · ordem 1876 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 a salvo de injúrias; irrepreensível 2 que não injuria. 〈ἀ-, λοιδορέω〉</p></section></article>
<article id="entry-dgp-1877" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλοίην</h1><div class="entry-meta"><span>DGP · ordem 1877 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">opt. aor. de ἁλίσκομαι.</p></section></article>
<article id="entry-dgp-1878" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλοίμαν</h1><div class="entry-meta"><span>DGP · ordem 1878 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">dór. = ἁλοίμην.</p></section></article>
<article id="entry-dgp-1879" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁλοίμην</h1><div class="entry-meta"><span>DGP · ordem 1879 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">opt. aor.2 de ἅλλομαι.</p></section></article>
<article id="entry-dgp-1880" class="entry-card" data-dictionary="grego" data-source="DGP" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀλοιφή, ῆς (ἡ)</h1><div class="entry-meta"><span>DGP · ordem 1880 na letra α</span></div></div><div class="source-tag">DGP</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do DGP</div><p class="entry-text">1 qualquer substância para ungir; unto 2 ação de ungir; unção 3 tinta; tintura 4 verniz 5 rasura. 〈ἀλείφω〉</p></section></article>
`;


/* LOTE 65 — ordinais 1881–1930; fonte XML deb54b426ead447d01ced7534736f3e77be7015b. */
window.ScripturaLexicons.DGP.rowsHtml += "<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1881\" data-source=\"DGP\" data-search=\"ἁλόμενος part. aor. de ἅλλομαι. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλόμενος</td><td>—</td><td>part. aor. de ἅλλομαι.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1882\" data-source=\"DGP\" data-search=\"ἁλόντε part. aor.2 dual de ἁλίσκομαι. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλόντε</td><td>—</td><td>part. aor.2 dual de ἁλίσκομαι.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1883\" data-source=\"DGP\" data-search=\"ἄλοξ, οκος (ἡ) 1 sulco na terra; campo semeado 2 seio fecundado; esposa 3 semente (que fecunda) 4 incisão; arranhão, ferida 5 tubo; conduto. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλοξ, οκος (ἡ)</td><td>—</td><td>1 sulco na terra; campo semeado 2 seio fecundado; esposa 3 semente (que fecunda) 4 incisão; arranhão, ferida 5 tubo; conduto.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1884\" data-source=\"DGP\" data-search=\"ἁλοπήγια, ων (τά) salinas. 〈ἅλς, πήγνυμι〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλοπήγια, ων (τά)</td><td>—</td><td>salinas. 〈ἅλς, πήγνυμι〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1885\" data-source=\"DGP\" data-search=\"ἁλός gen. de ἅλς. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλός</td><td>—</td><td>gen. de ἅλς.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1886\" data-source=\"DGP\" data-search=\"ἇλος dór. = ἦλος. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἇλος</td><td>—</td><td>dór. = ἦλος.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1887\" data-source=\"DGP\" data-search=\"ἁλοσύδνη, ης (ἡ) filha do mar, epít. de deusa marinha. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλοσύδνη, ης (ἡ)</td><td>—</td><td>filha do mar, epít. de deusa marinha.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1888\" data-source=\"DGP\" data-search=\"ἁλοῦμαι cf. ἅλλομαι. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλοῦμαι</td><td>—</td><td>cf. ἅλλομαι.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1889\" data-source=\"DGP\" data-search=\"ἁλουργής, ής, ές 1 que tem cor de púrpura; tingido de púrpura ♦ τὰ ἁλουργῆ 2 vestes de púrpura. 〈ἅλς, ἔργον〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλουργής, ής, ές</td><td>—</td><td>1 que tem cor de púrpura; tingido de púrpura ♦ τὰ ἁλουργῆ 2 vestes de púrpura. 〈ἅλς, ἔργον〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1890\" data-source=\"DGP\" data-search=\"ἁλουργίς, ίδος (ἡ) veste de púrpura. 〈ἀλουργής〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλουργίς, ίδος (ἡ)</td><td>—</td><td>veste de púrpura. 〈ἀλουργής〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1891\" data-source=\"DGP\" data-search=\"ἁλούς, οῦσα, όν part. aor.2 de ἁλίσκομαι. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλούς, οῦσα, όν</td><td>—</td><td>part. aor.2 de ἁλίσκομαι.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1892\" data-source=\"DGP\" data-search=\"ἀλουσία, ας (ἡ) sujidade; falta de asseio. 〈ἄλουτος〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλουσία, ας (ἡ)</td><td>—</td><td>sujidade; falta de asseio. 〈ἄλουτος〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1893\" data-source=\"DGP\" data-search=\"ἄλουτος, ος, ον não lavado; sujo. 〈ἀ-, λούω〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλουτος, ος, ον</td><td>—</td><td>não lavado; sujo. 〈ἀ-, λούω〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1894\" data-source=\"DGP\" data-search=\"ἄλοφος, ος, ον sem penacho. 〈ἀ-, λόφος〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλοφος, ος, ον</td><td>—</td><td>sem penacho. 〈ἀ-, λόφος〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1895\" data-source=\"DGP\" data-search=\"ἄλοχος, ου (ἡ) 1 companheira de leito; esposa 2 concubina. 〈ἀ- cop., λέχος〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλοχος, ου (ἡ)</td><td>—</td><td>1 companheira de leito; esposa 2 concubina. 〈ἀ- cop., λέχος〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1896\" data-source=\"DGP\" data-search=\"ἀλόω 2ª sing. imper. de ἀλάομαι. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλόω</td><td>—</td><td>2ª sing. imper. de ἀλάομαι.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1897\" data-source=\"DGP\" data-search=\"ἅλς1, ἁλός (ἡ) 1 mar 2 onda salgada. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἅλς1, ἁλός (ἡ)</td><td>—</td><td>1 mar 2 onda salgada.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1898\" data-source=\"DGP\" data-search=\"ἅλς2, ἁλός (ὁ) 1 bloco de sal 2 sal 3 salmoura 4 sal amoníaco 5 presença de espírito 6 pl. ἅλες ditos espirituosos. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἅλς2, ἁλός (ὁ)</td><td>—</td><td>1 bloco de sal 2 sal 3 salmoura 4 sal amoníaco 5 presença de espírito 6 pl. ἅλες ditos espirituosos.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1899\" data-source=\"DGP\" data-search=\"ἆλσο 2ª sing. aor.2 de ἅλλομαι. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἆλσο</td><td>—</td><td>2ª sing. aor.2 de ἅλλομαι.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1900\" data-source=\"DGP\" data-search=\"ἄλσος, εος-ους (τό) 1 bosque 2 bosque sagrado 3 recinto sagrado. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλσος, εος-ους (τό)</td><td>—</td><td>1 bosque 2 bosque sagrado 3 recinto sagrado.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1901\" data-source=\"DGP\" data-search=\"ἀλσώδης, ης, ες 1 dos bosques; silvestre 2 coberto de bosque. 〈ἄλσος〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλσώδης, ης, ες</td><td>—</td><td>1 dos bosques; silvestre 2 coberto de bosque. 〈ἄλσος〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1902\" data-source=\"DGP\" data-search=\"ἁλτῆρες, ων (οἱ) pesos; halteres. 〈ἅλλομαι〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλτῆρες, ων (οἱ)</td><td>—</td><td>pesos; halteres. 〈ἅλλομαι〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1903\" data-source=\"DGP\" data-search=\"ἁλτικός, ή, όν 1 relativo a salto 2 que se faz aos saltos 3 que salta; que ajuda a saltar 4 hábil em saltar. 〈ἅλλομαι〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλτικός, ή, όν</td><td>—</td><td>1 relativo a salto 2 que se faz aos saltos 3 que salta; que ajuda a saltar 4 hábil em saltar. 〈ἅλλομαι〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1904\" data-source=\"DGP\" data-search=\"ἆλτο 3ª sing. aor. de ἄλλομαι. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἆλτο</td><td>—</td><td>3ª sing. aor. de ἄλλομαι.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1905\" data-source=\"DGP\" data-search=\"ἁλυκός, ή, όν salgado; salobro. 〈ἅλς〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἁλυκός, ή, όν</td><td>—</td><td>salgado; salobro. 〈ἅλς〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1906\" data-source=\"DGP\" data-search=\"ἀλυκτάζω (só impf. ἀλύκταζον) 1 estar agitado, inquieto, aflito 2 vaguear desvairado. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλυκτάζω</td><td>—</td><td>(só impf. ἀλύκταζον) 1 estar agitado, inquieto, aflito 2 vaguear desvairado.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1907\" data-source=\"DGP\" data-search=\"ἀλυκτέω (perf. pas. ἀλαλύκτημαι) = ἀλυκτάζω. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλυκτέω</td><td>—</td><td>(perf. pas. ἀλαλύκτημαι) = ἀλυκτάζω.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1908\" data-source=\"DGP\" data-search=\"ἄλυξα aor. poét. de ἀλύσκω. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλυξα</td><td>—</td><td>aor. poét. de ἀλύσκω.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1909\" data-source=\"DGP\" data-search=\"ἀλυξέμεν inf. fut. ép. de ἀλύσκω. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλυξέμεν</td><td>—</td><td>inf. fut. ép. de ἀλύσκω.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1910\" data-source=\"DGP\" data-search=\"ἄλυξις, εως (ἡ) 1 ação de escapar; fuga 2 meio de fuga. 〈ἀλύσσω〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλυξις, εως (ἡ)</td><td>—</td><td>1 ação de escapar; fuga 2 meio de fuga. 〈ἀλύσσω〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1911\" data-source=\"DGP\" data-search=\"ἀλύξω cf. ἀλύσκω e de ἀλλύσσω. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλύξω</td><td>—</td><td>cf. ἀλύσκω e de ἀλλύσσω.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1912\" data-source=\"DGP\" data-search=\"ἀλύπητος, ος, ον 1 livre de tristeza; que não está triste 2 que não causa mágoa. 〈ἀ-, λυπέω〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλύπητος, ος, ον</td><td>—</td><td>1 livre de tristeza; que não está triste 2 que não causa mágoa. 〈ἀ-, λυπέω〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1913\" data-source=\"DGP\" data-search=\"ἀλυπία, ας (ἡ) 1 ausência de tristeza 2 liberação da dor, do pesar 3 indiferença à dor; insensibilidade 4 rar. inocuidade. 〈ἄλυπος〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλυπία, ας (ἡ)</td><td>—</td><td>1 ausência de tristeza 2 liberação da dor, do pesar 3 indiferença à dor; insensibilidade 4 rar. inocuidade. 〈ἄλυπος〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1914\" data-source=\"DGP\" data-search=\"ἄλυπος, ος, ον 1 isento de tristeza 2 que não causa dor 3 inofensivo; inócuo. 〈ἀ-, λύπη〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλυπος, ος, ον</td><td>—</td><td>1 isento de tristeza 2 que não causa dor 3 inofensivo; inócuo. 〈ἀ-, λύπη〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1915\" data-source=\"DGP\" data-search=\"ἀλύπως adv. 1 sem tristeza; sem mágoa 2 sem magoar: ἀ. τοῖς ἄλλοις ζῆν isócr. viver sem magoar os outros. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλύπως</td><td>—</td><td>adv. 1 sem tristeza; sem mágoa 2 sem magoar: ἀ. τοῖς ἄλλοις ζῆν isócr. viver sem magoar os outros.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1916\" data-source=\"DGP\" data-search=\"ἄλυρος, ος, ον não acompanhado pela lira; que não se presta aos acordes da lira. 〈ἀ-, λύρα〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλυρος, ος, ον</td><td>—</td><td>não acompanhado pela lira; que não se presta aos acordes da lira. 〈ἀ-, λύρα〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1917\" data-source=\"DGP\" data-search=\"ἄλυς, υος (ὁ) agitação; vida dissoluta; ociosidade. 〈ἀλύω〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλυς, υος (ὁ)</td><td>—</td><td>agitação; vida dissoluta; ociosidade. 〈ἀλύω〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1918\" data-source=\"DGP\" data-search=\"Ἅλυς, υος (ὁ) Hális, rio da Ásia Menor. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">Ἅλυς, υος (ὁ)</td><td>—</td><td>Hális, rio da Ásia Menor.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1919\" data-source=\"DGP\" data-search=\"ἅλυσις e ἄλυσις, εως (ἡ) 1 corrente; entrave 2 cativeiro; cadeia 3 pl. correntes (adorno feminino). DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἅλυσις</td><td>—</td><td>e ἄλυσις, εως (ἡ) 1 corrente; entrave 2 cativeiro; cadeia 3 pl. correntes (adorno feminino).</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1920\" data-source=\"DGP\" data-search=\"ἀλυσιτελής, ής, ές não proveitoso; desfavorável; nocivo. 〈ἀ-, λυσιτελής〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλυσιτελής, ής, ές</td><td>—</td><td>não proveitoso; desfavorável; nocivo. 〈ἀ-, λυσιτελής〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1921\" data-source=\"DGP\" data-search=\"ἀλυσκάζω (só pres.) ἀλύσκω. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλυσκάζω</td><td>—</td><td>(só pres.) ἀλύσκω.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1922\" data-source=\"DGP\" data-search=\"ἀλυσκάνω (só 3a sing. impf. ἀλύσκανε) = ἀλυσκάζω. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλυσκάνω</td><td>—</td><td>(só 3a sing. impf. ἀλύσκανε) = ἀλυσκάζω.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1923\" data-source=\"DGP\" data-search=\"ἀλύσκω (fut. ἀλύξω e ἀλύξομαι, aor. ἤλυξα, perf. desus.) 1 fugir; escapar de; evitar, ac.ou gen. 2 errar; vagar; vagar impacientemente. 〈ἀλύω〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλύσκω</td><td>—</td><td>(fut. ἀλύξω e ἀλύξομαι, aor. ἤλυξα, perf. desus.) 1 fugir; escapar de; evitar, ac.ou gen. 2 errar; vagar; vagar impacientemente. 〈ἀλύω〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1924\" data-source=\"DGP\" data-search=\"ἄλυσσος, ος, ον 1 eficaz contra a raiva ♦ τὸ ἄλυσσον 2 siderita, erva medicinal. 〈ἀ-, λύσσα〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλυσσος, ος, ον</td><td>—</td><td>1 eficaz contra a raiva ♦ τὸ ἄλυσσον 2 siderita, erva medicinal. 〈ἀ-, λύσσα〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1925\" data-source=\"DGP\" data-search=\"ἀλύσσω (fut. ἀλύξω) 1 (doente) estar inquieto, agitado 2 estar perturbado 3 (cão) estar raivoso. 〈ἀλύω〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλύσσω</td><td>—</td><td>(fut. ἀλύξω) 1 (doente) estar inquieto, agitado 2 estar perturbado 3 (cão) estar raivoso. 〈ἀλύω〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1926\" data-source=\"DGP\" data-search=\"ἄλυτος, ος, ον 1 que não pode ser desfeito; indissolúvel 2 contínuo; sem interrupção 3 irremediável 4 irrefutável 5 insolúvel. 〈ἀ-, λύω〉 DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλυτος, ος, ον</td><td>—</td><td>1 que não pode ser desfeito; indissolúvel 2 contínuo; sem interrupção 3 irremediável 4 irrefutável 5 insolúvel. 〈ἀ-, λύω〉</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1927\" data-source=\"DGP\" data-search=\"ἀλύω e ἁλύω (só pres. e impf.) 1 errar a esmo 2 estar agitado, perturbado 3 estar incerto, irresoluto. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλύω</td><td>—</td><td>e ἁλύω (só pres. e impf.) 1 errar a esmo 2 estar agitado, perturbado 3 estar incerto, irresoluto.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1928\" data-source=\"DGP\" data-search=\"ἄλφα (τό) indecl. 1 alfa, a primeira letra do alfabeto grego 2 início; começo. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἄλφα (τό)</td><td>—</td><td>indecl. 1 alfa, a primeira letra do alfabeto grego 2 início; começo.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1929\" data-source=\"DGP\" data-search=\"Ἀλφαῖος, ου (ὁ) Alfeu, n. de homem e de rio. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">Ἀλφαῖος, ου (ὁ)</td><td>—</td><td>Alfeu, n. de homem e de rio.</td><td><span class=\"source-pill\">DGP</span></td></tr>\n<tr class=\"search-row\" data-dictionary=\"grego\" data-target=\"entry-dgp-1930\" data-source=\"DGP\" data-search=\"ἀλφάνω (aor.2 ἦλφον) 1 proporcionar algo, ac., a alguém, dat.: ἀ. φθόνον inspirar inveja 2 obter; ganhar. DGP\" tabindex=\"0\"><td class=\"table-lemma greek\">ἀλφάνω</td><td>—</td><td>(aor.2 ἦλφον) 1 proporcionar algo, ac., a alguém, dat.: ἀ. φθόνον inspirar inveja 2 obter; ganhar.</td><td><span class=\"source-pill\">DGP</span></td></tr>";
window.ScripturaLexicons.DGP.cardsHtml += "<article id=\"entry-dgp-1881\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλόμενος</h1><div class=\"entry-meta\"><span>DGP · ordem 1881 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">part. aor. de ἅλλομαι.</p></section></article>\n<article id=\"entry-dgp-1882\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλόντε</h1><div class=\"entry-meta\"><span>DGP · ordem 1882 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">part. aor.2 dual de ἁλίσκομαι.</p></section></article>\n<article id=\"entry-dgp-1883\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλοξ, οκος (ἡ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1883 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 sulco na terra; campo semeado 2 seio fecundado; esposa 3 semente (que fecunda) 4 incisão; arranhão, ferida 5 tubo; conduto.</p></section></article>\n<article id=\"entry-dgp-1884\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλοπήγια, ων (τά)</h1><div class=\"entry-meta\"><span>DGP · ordem 1884 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">salinas. 〈ἅλς, πήγνυμι〉</p></section></article>\n<article id=\"entry-dgp-1885\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλός</h1><div class=\"entry-meta\"><span>DGP · ordem 1885 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">gen. de ἅλς.</p></section></article>\n<article id=\"entry-dgp-1886\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἇλος</h1><div class=\"entry-meta\"><span>DGP · ordem 1886 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">dór. = ἦλος.</p></section></article>\n<article id=\"entry-dgp-1887\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλοσύδνη, ης (ἡ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1887 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">filha do mar, epít. de deusa marinha.</p></section></article>\n<article id=\"entry-dgp-1888\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλοῦμαι</h1><div class=\"entry-meta\"><span>DGP · ordem 1888 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">cf. ἅλλομαι.</p></section></article>\n<article id=\"entry-dgp-1889\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλουργής, ής, ές</h1><div class=\"entry-meta\"><span>DGP · ordem 1889 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 que tem cor de púrpura; tingido de púrpura ♦ τὰ ἁλουργῆ 2 vestes de púrpura. 〈ἅλς, ἔργον〉</p></section></article>\n<article id=\"entry-dgp-1890\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλουργίς, ίδος (ἡ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1890 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">veste de púrpura. 〈ἀλουργής〉</p></section></article>\n<article id=\"entry-dgp-1891\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλούς, οῦσα, όν</h1><div class=\"entry-meta\"><span>DGP · ordem 1891 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">part. aor.2 de ἁλίσκομαι.</p></section></article>\n<article id=\"entry-dgp-1892\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλουσία, ας (ἡ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1892 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">sujidade; falta de asseio. 〈ἄλουτος〉</p></section></article>\n<article id=\"entry-dgp-1893\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλουτος, ος, ον</h1><div class=\"entry-meta\"><span>DGP · ordem 1893 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">não lavado; sujo. 〈ἀ-, λούω〉</p></section></article>\n<article id=\"entry-dgp-1894\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλοφος, ος, ον</h1><div class=\"entry-meta\"><span>DGP · ordem 1894 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">sem penacho. 〈ἀ-, λόφος〉</p></section></article>\n<article id=\"entry-dgp-1895\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλοχος, ου (ἡ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1895 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 companheira de leito; esposa 2 concubina. 〈ἀ- cop., λέχος〉</p></section></article>\n<article id=\"entry-dgp-1896\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλόω</h1><div class=\"entry-meta\"><span>DGP · ordem 1896 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">2ª sing. imper. de ἀλάομαι.</p></section></article>\n<article id=\"entry-dgp-1897\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἅλς1, ἁλός (ἡ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1897 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 mar 2 onda salgada.</p></section></article>\n<article id=\"entry-dgp-1898\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἅλς2, ἁλός (ὁ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1898 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 bloco de sal 2 sal 3 salmoura 4 sal amoníaco 5 presença de espírito 6 pl. ἅλες ditos espirituosos.</p></section></article>\n<article id=\"entry-dgp-1899\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἆλσο</h1><div class=\"entry-meta\"><span>DGP · ordem 1899 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">2ª sing. aor.2 de ἅλλομαι.</p></section></article>\n<article id=\"entry-dgp-1900\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλσος, εος-ους (τό)</h1><div class=\"entry-meta\"><span>DGP · ordem 1900 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 bosque 2 bosque sagrado 3 recinto sagrado.</p></section></article>\n<article id=\"entry-dgp-1901\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλσώδης, ης, ες</h1><div class=\"entry-meta\"><span>DGP · ordem 1901 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 dos bosques; silvestre 2 coberto de bosque. 〈ἄλσος〉</p></section></article>\n<article id=\"entry-dgp-1902\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλτῆρες, ων (οἱ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1902 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">pesos; halteres. 〈ἅλλομαι〉</p></section></article>\n<article id=\"entry-dgp-1903\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλτικός, ή, όν</h1><div class=\"entry-meta\"><span>DGP · ordem 1903 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 relativo a salto 2 que se faz aos saltos 3 que salta; que ajuda a saltar 4 hábil em saltar. 〈ἅλλομαι〉</p></section></article>\n<article id=\"entry-dgp-1904\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἆλτο</h1><div class=\"entry-meta\"><span>DGP · ordem 1904 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">3ª sing. aor. de ἄλλομαι.</p></section></article>\n<article id=\"entry-dgp-1905\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἁλυκός, ή, όν</h1><div class=\"entry-meta\"><span>DGP · ordem 1905 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">salgado; salobro. 〈ἅλς〉</p></section></article>\n<article id=\"entry-dgp-1906\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλυκτάζω</h1><div class=\"entry-meta\"><span>DGP · ordem 1906 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">(só impf. ἀλύκταζον) 1 estar agitado, inquieto, aflito 2 vaguear desvairado.</p></section></article>\n<article id=\"entry-dgp-1907\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλυκτέω</h1><div class=\"entry-meta\"><span>DGP · ordem 1907 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">(perf. pas. ἀλαλύκτημαι) = ἀλυκτάζω.</p></section></article>\n<article id=\"entry-dgp-1908\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλυξα</h1><div class=\"entry-meta\"><span>DGP · ordem 1908 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">aor. poét. de ἀλύσκω.</p></section></article>\n<article id=\"entry-dgp-1909\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλυξέμεν</h1><div class=\"entry-meta\"><span>DGP · ordem 1909 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">inf. fut. ép. de ἀλύσκω.</p></section></article>\n<article id=\"entry-dgp-1910\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλυξις, εως (ἡ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1910 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 ação de escapar; fuga 2 meio de fuga. 〈ἀλύσσω〉</p></section></article>\n<article id=\"entry-dgp-1911\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλύξω</h1><div class=\"entry-meta\"><span>DGP · ordem 1911 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">cf. ἀλύσκω e de ἀλλύσσω.</p></section></article>\n<article id=\"entry-dgp-1912\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλύπητος, ος, ον</h1><div class=\"entry-meta\"><span>DGP · ordem 1912 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 livre de tristeza; que não está triste 2 que não causa mágoa. 〈ἀ-, λυπέω〉</p></section></article>\n<article id=\"entry-dgp-1913\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλυπία, ας (ἡ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1913 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 ausência de tristeza 2 liberação da dor, do pesar 3 indiferença à dor; insensibilidade 4 rar. inocuidade. 〈ἄλυπος〉</p></section></article>\n<article id=\"entry-dgp-1914\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλυπος, ος, ον</h1><div class=\"entry-meta\"><span>DGP · ordem 1914 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 isento de tristeza 2 que não causa dor 3 inofensivo; inócuo. 〈ἀ-, λύπη〉</p></section></article>\n<article id=\"entry-dgp-1915\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλύπως</h1><div class=\"entry-meta\"><span>DGP · ordem 1915 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">adv. 1 sem tristeza; sem mágoa 2 sem magoar: ἀ. τοῖς ἄλλοις ζῆν <span class=\"author-rubric tooltip-trigger\" tabindex=\"0\" data-tooltip-type=\"biblio\" data-tooltip-label=\"Isócrates\" data-tooltip-text=\"Isócrates — orador e professor ateniense dos séculos V–IV a.C., figura central da tradição retórica grega.\" data-source-abbr=\"isócr.\"><strong>Isócrates</strong></span> viver sem magoar os outros.</p></section></article>\n<article id=\"entry-dgp-1916\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλυρος, ος, ον</h1><div class=\"entry-meta\"><span>DGP · ordem 1916 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">não acompanhado pela lira; que não se presta aos acordes da lira. 〈ἀ-, λύρα〉</p></section></article>\n<article id=\"entry-dgp-1917\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλυς, υος (ὁ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1917 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">agitação; vida dissoluta; ociosidade. 〈ἀλύω〉</p></section></article>\n<article id=\"entry-dgp-1918\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">Ἅλυς, υος (ὁ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1918 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">Hális, rio da Ásia Menor.</p></section></article>\n<article id=\"entry-dgp-1919\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἅλυσις</h1><div class=\"entry-meta\"><span>DGP · ordem 1919 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">e ἄλυσις, εως (ἡ) 1 corrente; entrave 2 cativeiro; cadeia 3 pl. correntes (adorno feminino).</p></section></article>\n<article id=\"entry-dgp-1920\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλυσιτελής, ής, ές</h1><div class=\"entry-meta\"><span>DGP · ordem 1920 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">não proveitoso; desfavorável; nocivo. 〈ἀ-, λυσιτελής〉</p></section></article>\n<article id=\"entry-dgp-1921\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλυσκάζω</h1><div class=\"entry-meta\"><span>DGP · ordem 1921 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">(só pres.) ἀλύσκω.</p></section></article>\n<article id=\"entry-dgp-1922\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλυσκάνω</h1><div class=\"entry-meta\"><span>DGP · ordem 1922 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">(só 3a sing. impf. ἀλύσκανε) = ἀλυσκάζω.</p></section></article>\n<article id=\"entry-dgp-1923\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλύσκω</h1><div class=\"entry-meta\"><span>DGP · ordem 1923 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">(fut. ἀλύξω e ἀλύξομαι, aor. ἤλυξα, perf. desus.) 1 fugir; escapar de; evitar, ac.ou gen. 2 errar; vagar; vagar impacientemente. 〈ἀλύω〉</p></section></article>\n<article id=\"entry-dgp-1924\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλυσσος, ος, ον</h1><div class=\"entry-meta\"><span>DGP · ordem 1924 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 eficaz contra a raiva ♦ τὸ ἄλυσσον 2 siderita, erva medicinal. 〈ἀ-, λύσσα〉</p></section></article>\n<article id=\"entry-dgp-1925\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλύσσω</h1><div class=\"entry-meta\"><span>DGP · ordem 1925 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">(fut. ἀλύξω) 1 (doente) estar inquieto, agitado 2 estar perturbado 3 (cão) estar raivoso. 〈ἀλύω〉</p></section></article>\n<article id=\"entry-dgp-1926\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλυτος, ος, ον</h1><div class=\"entry-meta\"><span>DGP · ordem 1926 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">1 que não pode ser desfeito; indissolúvel 2 contínuo; sem interrupção 3 irremediável 4 irrefutável 5 insolúvel. 〈ἀ-, λύω〉</p></section></article>\n<article id=\"entry-dgp-1927\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλύω</h1><div class=\"entry-meta\"><span>DGP · ordem 1927 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">e ἁλύω (só pres. e impf.) 1 errar a esmo 2 estar agitado, perturbado 3 estar incerto, irresoluto.</p></section></article>\n<article id=\"entry-dgp-1928\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἄλφα (τό)</h1><div class=\"entry-meta\"><span>DGP · ordem 1928 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">indecl. 1 alfa, a primeira letra do alfabeto grego 2 início; começo.</p></section></article>\n<article id=\"entry-dgp-1929\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">Ἀλφαῖος, ου (ὁ)</h1><div class=\"entry-meta\"><span>DGP · ordem 1929 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">Alfeu, n. de homem e de rio.</p></section></article>\n<article id=\"entry-dgp-1930\" class=\"entry-card\" data-dictionary=\"grego\" data-source=\"DGP\" hidden><header class=\"entry-header\"><div><h1 class=\"entry-title greek\">ἀλφάνω</h1><div class=\"entry-meta\"><span>DGP · ordem 1930 na letra α</span></div></div><div class=\"source-tag\">DGP</div></header><div class=\"entry-divider\"></div><section class=\"entry-section\"><div class=\"section-title\">Definição do DGP</div><p class=\"entry-text\">(aor.2 ἦλφον) 1 proporcionar algo, ac., a alguém, dat.: ἀ. φθόνον inspirar inveja 2 obter; ganhar.</p></section></article>";
