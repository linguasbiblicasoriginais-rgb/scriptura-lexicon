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
