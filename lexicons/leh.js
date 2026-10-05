"use strict";

/*
 * LEH — Lust–Eynikel–Hauspie, A Greek-English Lexicon of the Septuagint.
 *
 * Branch de trabalho: chat-gpt-leh
 *
 * Esta fonte começa vazia nesta refatoração. A conversa LEH deve iniciar
 * pelo primeiro verbete do léxico e acrescentar somente conteúdo desta
 * fonte aqui.
 *
 * Não editar lexicons/bdag.js durante trabalho paralelo.
 *
 * Novas abreviaturas específicas do LEH devem ser acrescentadas em
 * bibliographicTerms. Elas serão aplicadas somente aos cartões LEH e
 * prevalecem, por chave, sobre definições comuns de script.js.
 */

window.ScripturaLexicons =
    window.ScripturaLexicons || {};

window.ScripturaLexicons.LEH = {
    source: "LEH",
    searchAnchorId: "leh-search-anchor",
    entryAnchorId: "leh-entry-anchor",

    bibliographicTerms: [
        {
            key: "KRAFT 1972b",
            type: "biblio",
            text: "R. A. Kraft, “Prefatory Remarks to the Lexical ‘Probes’. Towards a Lexicon of Jewish Translation Greek”, em R. A. Kraft (ed.), Septuagintal Lexicography (SCS 1), Missoula, MT, 1972, pp. 157–178"
        },
        {
            key: "WALTERS 1973",
            type: "biblio",
            text: "P. Walters [= P. Katz], The Text of the Septuagint. Its Corruptions and Their Emendation, Cambridge, 1973"
        },
        {
            key: "ALLEN, L.C. 1974b",
            type: "biblio",
            text: "L. C. Allen, The Greek Chronicles. The Relation of I and II Chronicles to the Massoretic Text. Part II. Textual Criticism (SVT 27), Leiden, 1974"
        },
        {
            key: "LSJ RSuppl",
            type: "biblio",
            text: "Liddell–Scott–Jones, Revised Supplement; ed. P. G. W. Glare, com assistência de A. A. Thompson, 1996 (→ LIDDELL)"
        },
        {
            key: "MT",
            type: "abbr",
            text: "Masoretic Text — Texto massorético"
        },
        {
            key: "neol.",
            type: "abbr",
            text: "neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta"
        },
        {
            key: "AMUSIN 1986",
            type: "biblio",
            text: "I. D. Amusin, “I termini designanti la schiavitù dell’Egitto ellenistico in base ai dati dei Settanta”, em I. Biezunska Malowist (ed.), Schiavitù e produzione nella Roma repubblicana (Problemi e Ricerche di Storia Antica 9), Roma, 1986, pp. 107–146"
        },
        {
            key: "HARL 1986a",
            type: "biblio",
            text: "M. Harl, M. Alexandre, C. Dogniez et al., La Bible d’Alexandrie I. La Genèse, Paris, 1986"
        },
        {
            key: "WEVERS 1990",
            type: "biblio",
            text: "J. W. Wevers, Notes on the Greek Text of Exodus (SCS 30), Atlanta, 1990"
        },
        {
            key: "LARCHER 1984",
            type: "biblio",
            text: "C. Larcher, Le livre de la Sagesse ou la Sagesse de Salomon II (ÉtB NS 3), Paris, 1984"
        },
        {
            key: "SCHMITT 1974",
            type: "biblio",
            text: "A. Schmitt, “Interpretation der Genesis aus hellenistischem Geist”, ZAW 86 (1974), pp. 137–163"
        },
        {
            key: "HELBING 1928",
            type: "biblio",
            text: "R. Helbing, Die Kasussyntax der Verba bei den Septuaginta. Ein Beitrag zur Hebraismenfrage und zur Syntax der Κοινή, Göttingen, 1928"
        },
        {
            key: "SPICQ 1978a",
            type: "biblio",
            text: "C. Spicq, Notes de lexicographie néo-testamentaire. Tome I/II (OBO 22/1 e 2), 2 vols., Fribourg/Suisse–Göttingen, 1978"
        },
        {
            key: "NIDNTT",
            type: "biblio",
            text: "The New International Dictionary of New Testament Theology, ed. C. Brown, 3 vols., Exeter, 1975/1976/1978"
        },
        {
            key: "TWNT",
            type: "biblio",
            text: "G. Kittel e G. Friedrich, Theologisches Wörterbuch zum Neuen Testament, 11 vols., Stuttgart, 1933–1979"
        },
        {
            key: "abs.",
            type: "abbr",
            text: "absolute — uso absoluto, sem complemento expresso"
        },
        {
            key: "neol.?",
            type: "abbr",
            text: "neologismo? — classificação dubitativa do LEH"
        },
        {
            key: "LARCHER 1983",
            type: "biblio",
            text: "C. Larcher, Le livre de la Sagesse ou la Sagesse de Salomon I (ÉtB NS 1), Paris, 1983"
        },
        {
            key: "ind.",
            type: "abbr",
            text: "indicative — indicativo"
        },
        {
            key: "inf.",
            type: "abbr",
            text: "infinitive — infinitivo"
        },
        {
            key: "KOONCE 1988",
            type: "biblio",
            text: "K. Koonce, “Ἄγαλμα and εἰκών”, American Journal of Philology 109 (1988), pp. 108–110"
        },
        {
            key: "SPICQ 1982",
            type: "biblio",
            text: "C. Spicq, Notes de lexicographie néo-testamentaire. Supplément (OBO 22/3), Fribourg/Suisse–Göttingen, 1982"
        },
        {
            key: "JOLY 1968",
            type: "biblio",
            text: "R. Joly, Le vocabulaire chrétien de l’amour est-il original? Φιλεῖν et ἀγαπᾶν dans le grec antique, Bruxelles, 1968"
        },
        {
            key: "SWINN 1990",
            type: "biblio",
            text: "S. P. Swinn, “Ἀγαπᾶν in the Septuagint”, em T. Muraoka (ed.), 1990, pp. 49–81"
        },
        {
            key: "BARR 1987",
            type: "biblio",
            text: "J. Barr, “Words for Love in Biblical Greek”, em L. D. Hurst e N. T. Wright (eds.), The Glory of Christ in the New Testament. FS G. B. Caird, Oxford, 1987, pp. 3–18"
        },
        {
            key: "CERESA-GASTALDO 1953",
            type: "biblio",
            text: "A. Ceresa-Gastaldo, “Ἀγάπη nei documenti estranei all’influsso biblico”, RFIC 31 (1953), pp. 347–355"
        },
        {
            key: "HORSLEY 1987",
            type: "biblio",
            text: "G. H. R. Horsley, New Documents Illustrating Early Christianity, vol. 4: A Review of the Greek Inscriptions and Papyri Published in 1979, Macquarie University, N.S.W., 1987"
        },
        {
            key: "KAHANE 1987",
            type: "biblio",
            text: "H. e R. Kahane, “Religious Key Terms in Hellenism and Byzantium: Three Facets”, Illinois Classical Studies 12 (1987), pp. 243–263"
        },
        {
            key: "PAESLACK 1954",
            type: "biblio",
            text: "M. Paeslack, “Zur Bedeutungsgeschichte der Wörter φιλεῖν ‘lieben’, φιλία ‘Liebe’ ‘Freundschaft’, φίλος ‘Freund’ in der Septuaginta und im Neuen Testament”, Theologia Viatorum 5 (1953–54), pp. 51–142"
        },
        {
            key: "RIESENFELD 1941",
            type: "biblio",
            text: "H. Riesenfeld, “Étude bibliographique sur la notion d’ἀγάπη”, Coniectanea Neotestamentica 5 (1941), pp. 1–27"
        },
        {
            key: "SPICQ 1978",
            type: "biblio",
            text: "C. Spicq, Notes de lexicographie néo-testamentaire. Tome I/II (OBO 22/1 e 2), 2 vols., Fribourg/Suisse–Göttingen, 1978"
        },
        {
            key: "TARELLI 1950",
            type: "biblio",
            text: "C. C. Tarelli, “Ἀγάπη”, Journal of Theological Studies 1 (1950), pp. 64–67"
        },
        {
            key: "WEST, S. 1967",
            type: "biblio",
            text: "S. West, “Alleged Pagan Use of agape in P. Oxy 1380”, Journal of Theological Studies 18 (1967), pp. 142–143"
        },
        {
            key: "WEST, S. 1969",
            type: "biblio",
            text: "S. West, “A Further Note on ἀγάπη in P. Oxy 1380”, Journal of Theological Studies 20 (1969), pp. 228–230"
        },
        {
            key: "WITT 1968",
            type: "biblio",
            text: "R. E. Witt, “Use of H Agape in P Oxy 1380”, Journal of Theological Studies 19 (1968), pp. 209–211"
        },
        {
            key: "SCHLEUSNER",
            type: "biblio",
            text: "J. F. Schleusner, Novus Thesaurus Philologico-Criticus, sive Lexicon in LXX et reliquos interpretes graecos ac scriptores apocryphos Veteris Testamenti, 5 vols., Leipzig, 1820–1821"
        },
        {
            key: "ENGEL 1985",
            type: "biblio",
            text: "H. Engel, Die Susanna-erzählung: Einleitung, Übersetzung und Kommentar zum Septuaginta-Text und zur Theodotion-Bearbeitung (OBO 61), Fribourg/Suisse–Göttingen, 1985"
        },
        {
            key: "SOUTER 1926",
            type: "biblio",
            text: "A. Souter, “Ἀγαπητός”, Journal of Theological Studies 28 (1926–27), pp. 59–60"
        },
        {
            key: "TURNER 1926",
            type: "biblio",
            text: "C. H. Turner, “Ὁ υἱός μου ὁ ἀγαπητός”, Journal of Theological Studies 27 (1926), pp. 113–129"
        },
        {
            key: "HORSLEY 1989",
            type: "biblio",
            text: "G. H. R. Horsley, New Documents Illustrating Early Christianity, vol. 5: Linguistic Essays, Macquarie University, N.S.W., 1989"
        },
        {
            key: "LE BOULLUEC 1989",
            type: "biblio",
            text: "A. Le Boulluec e P. Sandevoir, La Bible d’Alexandrie II. L’Exode, Paris, 1989"
        },
        {
            key: "GEHMAN 1951=1972",
            type: "biblio",
            text: "H. S. Gehman, “The Hebraic Character of Septuagint Greek”, VT 1 (1951), pp. 81–90; reimpresso em R. A. Kraft (ed.), Septuagintal Lexicography, 1972, pp. 92–101"
        },
        {
            key: "HARLÉ 1988",
            type: "biblio",
            text: "P. Harlé e D. Pralon, La Bible d’Alexandrie III. Le Lévitique, Paris, 1988"
        },
        {
            key: "LEE, J. 1983",
            type: "biblio",
            text: "J. A. L. Lee, A Lexical Study of the Septuagint Version of the Pentateuch (SCS 14), Chico, CA, 1983"
        },
        {
            key: "BARR 1961",
            type: "biblio",
            text: "J. Barr, The Semantics of Biblical Language, Oxford, 1961"
        },
        {
            key: "DIHLE 1988",
            type: "biblio",
            text: "A. Dihle, “Heilig”, Reallexikon für Antike und Christentum 14 (1988), pp. 2–66"
        },
        {
            key: "DIMANT 1981",
            type: "biblio",
            text: "D. Dimant, “A Cultic Term in the Psalms of Solomon in the Light of the Septuagint”, Textus 9 (1981), p. 136"
        },
        {
            key: "FRIDRICHSEN 1916",
            type: "biblio",
            text: "A. Fridrichsen, Hagios-qados. Ein Beitrag zu den Voruntersuchungen zur christlichen Begriffsgeschichte, Kristiana, 1916"
        },
        {
            key: "GEHMAN 1954",
            type: "biblio",
            text: "H. S. Gehman, “Ἅγιος in the Septuagint, and Its Relation to the Hebrew Original”, VT 4 (1954), pp. 337–348"
        },
        {
            key: "MOTTE 1987",
            type: "biblio",
            text: "A. Motte, “Ἅγιος chez Platon”, em J. Servais, T. Hackens e B. Servais-Soyez (eds.), Stemmata. Mélanges de philologie, d’histoire et d’archéologie grecques offerts à Jules Labarbe, Liège–Louvain-la-Neuve, 1987, pp. 135–152"
        },
        {
            key: "NUCHELMANS 1989",
            type: "biblio",
            text: "J. Nuchelmans, “A propos de Hagios avant l’époque hellénistique”, em A. R. Bastiaensen, A. Hilhorst e C. H. Kneepkens (eds.), Fructus centesimus. FS G. J. M. Bartelink (Instrumenta Patristica 19), Steenbrugge–Dordrecht, 1989, pp. 239–258"
        },
        {
            key: "WEVERS 1998",
            type: "biblio",
            text: "J. W. Wevers, Notes on the Greek Text of Numbers (SCS 46), Atlanta, 1998"
        },
        {
            key: "WILLIGER 1922",
            type: "biblio",
            text: "E. Williger, Ἅγιος. Untersuchungen zur Terminologie des Heiligen in den hellenisch-hellenistischen Religionen (Religionsgeschichtliche Versuche und Vorarbeiten 19/1), Giessen, 1922"
        },
        {
            key: "WOLFSON 1947",
            type: "biblio",
            text: "H. A. Wolfson, “On the Septuagint Use of τὸ ἅγιον for the Temple”, JQR 38 (1947), pp. 109–110"
        },
        {
            key: "inf. ni.",
            type: "abbr",
            text: "infinitivo nifal"
        },
        {
            key: "corr.",
            type: "abbr",
            text: "correção; a fonte propõe ou registra uma forma corrigida"
        },
        {
            key: "DORIVAL 1996",
            type: "biblio",
            text: "G. Dorival, “Dire en grec les choses juives”. Quelques choix lexicaux du Pentateuque de la Septante, RÉG 109 (1996), pp. 527–547"
        }
    ],

    rowsHtml: String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-a-leh" data-source="LEH" data-search="ἆ a interjeição ah ai Juízes Jz KRAFT WALTERS LEH" tabindex="0">
    <td class="table-lemma greek">ἆ</td><td>Interjeição</td><td>ah!; ai!</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-aar-leh" data-source="LEH" data-search="ααρ aar substantivo אחר outro Neemias Ne Ναβι-ααρ Nabiar נבו MT LEH" tabindex="0">
    <td class="table-lemma greek">ααρ</td><td>Substantivo</td><td>outro</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abak-leh" data-source="LEH" data-search="αβακ abak substantivo בץ linho branco fino bissus 1Crônicas ALLEN LEH" tabindex="0">
    <td class="table-lemma greek">αβακ</td><td>Substantivo</td><td>bíssus; linho branco fino</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abama-leh" data-source="LEH" data-search="Αβαμα Abama substantivo במה lugar alto cultual topônimo Ezequiel LEH" tabindex="0">
    <td class="table-lemma greek">Αβαμα</td><td>Substantivo</td><td>lugar alto cultual; topônimo</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abarkenin-leh" data-source="LEH" data-search="αβαρκηνιν abarkenin substantivo ברקנין ברקנים espinheiros arbustos espinhosos βαρακηνιμ βαρκοννιμ Juízes Jz LEH" tabindex="0">
    <td class="table-lemma greek">αβαρκηνιν</td><td>Substantivo</td><td>arbustos espinhosos</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abasileutos-leh" data-source="LEH" data-search="ἀβασίλευτος abasileutos adjetivo sem rei Provérbios Pv LEH" tabindex="0">
    <td class="table-lemma greek">ἀβασίλευτος</td><td>Adjetivo</td><td>sem rei</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abatoomai-leh" data-source="LEH" data-search="ἀβατόομαι abatoomai verbo ser devastado neologismo Jeremias Jr LEH" tabindex="0">
    <td class="table-lemma greek">ἀβατόομαι</td><td>Verbo</td><td>ser devastado</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abatos-leh" data-source="LEH" data-search="ἄβατος abatos adjetivo não trilhado inacessível intransitável desolado terra erma deserto Levítico Jeremias Jr Jó Ester Amós 3 Macabeus LSJ LEH" tabindex="0">
    <td class="table-lemma greek">ἄβατος</td><td>Adjetivo</td><td>não trilhado; inacessível; intransitável; desolado</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abedirin-leh" data-source="LEH" data-search="αβεδηριν abedirin substantivo הבדרין דברים palavras registros 1Crônicas LEH" tabindex="0">
    <td class="table-lemma greek">αβεδηριν</td><td>Substantivo</td><td>palavras; registros</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abira-leh" data-source="LEH" data-search="αβιρα abira substantivo בירה cidade fortificada cidadela Neemias Ne WALTERS LEH" tabindex="0">
    <td class="table-lemma greek">αβιρα</td><td>Substantivo</td><td>cidade fortificada; cidadela</td><td><span class="source-pill">LEH</span></td>
</tr>

<tr class="search-row" data-dictionary="grego" data-target="entry-ablabes-leh" data-source="LEH" data-search="ἀβλαβής ablabes adjetivo inofensivo ileso Sabedoria Sb LEH" tabindex="0">
    <td class="table-lemma greek">ἀβλαβής</td><td>Adjetivo</td><td>inofensivo; ileso</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-aboethesia-leh" data-source="LEH" data-search="ἀβοηθησία aboethesia substantivo desamparo Sirácida Sr LEH" tabindex="0">
    <td class="table-lemma greek">ἀβοηθησία</td><td>Substantivo</td><td>desamparo</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-aboethetos-leh" data-source="LEH" data-search="ἀβοήθητος aboethetos adjetivo desamparado sem auxílio Salmos 2 Macabeus Sabedoria neol LEH" tabindex="0">
    <td class="table-lemma greek">ἀβοήθητος</td><td>Adjetivo</td><td>desamparado; que não presta auxílio</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abouleutos-leh" data-source="LEH" data-search="ἀβουλεύτως abouleutos advérbio temerariamente irrefletidamente 1 Macabeus LEH" tabindex="0">
    <td class="table-lemma greek">ἀβουλεύτως</td><td>Advérbio</td><td>temerariamente; irrefletidamente</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-aboulia-leh" data-source="LEH" data-search="ἀβουλία aboulia substantivo imprudência irresolução indecisão Provérbios Baruc LEH" tabindex="0">
    <td class="table-lemma greek">ἀβουλία</td><td>Substantivo</td><td>imprudência; irresolução; indecisão</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-habra-leh" data-source="LEH" data-search="ἅβρα habra substantivo companheira favorita escrava fiel dedicada aramaico Gênesis Êxodo Ester LEH" tabindex="0">
    <td class="table-lemma greek">ἅβρα</td><td>Substantivo</td><td>companheira; favorita; escrava fiel ou dedicada</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abrochia-leh" data-source="LEH" data-search="ἀβροχία abrochia substantivo falta chuva seca Jeremias Sirácida Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀβροχία</td><td>Substantivo</td><td>falta de chuva; seca</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abrotos-leh" data-source="LEH" data-search="ἄβρωτος abrotos adjetivo não comestível Provérbios Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἄβρωτος</td><td>Adjetivo</td><td>não comestível</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abyssos-leh" data-source="LEH" data-search="ἄβυσσος abyssos adjetivo substantivado sem fundo profundo mar abismo cósmico Gênesis Deuteronômio Isaías Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἄβυσσος</td><td>Adjetivo / substantivado</td><td>sem fundo; profundo; mar; abismo</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agathopoieo-leh" data-source="LEH" data-search="ἀγαθοποιέω agathopoieo verbo fazer o bem beneficiar Números Juízes Sofonias Tobias 2 Macabeus Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαθοποιέω</td><td>Verbo</td><td>fazer o bem; beneficiar</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agathopoios-leh" data-source="LEH" data-search="ἀγαθοποιός agathopoios adjetivo benfazejo beneficente Sirácida Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαθοποιός</td><td>Adjetivo</td><td>benfazejo</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agathos-leh" data-source="LEH" data-search="ἀγαθός agathos adjetivo bom bem-nascido gentil belo fino bens melhor Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαθός</td><td>Adjetivo</td><td>bom; bem-nascido; gentil; belo; fino</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agathotes-leh" data-source="LEH" data-search="ἀγαθότης agathotes substantivo bondade disposição amistosa neologismo Sabedoria Sirácida Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαθότης</td><td>Substantivo</td><td>bondade; disposição amistosa</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agathoo-leh" data-source="LEH" data-search="ἀγαθόω agathoo verbo beneficiar fazer bem 1 Samuel Jeremias Sirácida neologismo LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαθόω</td><td>Verbo</td><td>beneficiar; fazer bem a</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agathyno-leh" data-source="LEH" data-search="ἀγαθύνω agathyno verbo honrar engrandecer adornar consolar alegrar fazer bem regozijar-se favor aceitável LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαθύνω</td><td>Verbo</td><td>honrar; adornar; fazer bem; alegrar-se</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agathos-adverb-leh" data-source="LEH" data-search="ἀγαθῶς agathos advérbio bem completamente interjeição 1 Samuel 2 Reis Tobias LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαθῶς</td><td>Advérbio</td><td>bem; completamente</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agathosyne-leh" data-source="LEH" data-search="ἀγαθωσύνη agathosyne substantivo bondade benevolência gentileza neologismo Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαθωσύνη</td><td>Substantivo</td><td>bondade; benevolência</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agalliama-leh" data-source="LEH" data-search="ἀγαλλίαμα agalliama substantivo alegria regozijo alegria religiosa culto jubiloso Isaías neologismo LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαλλίαμα</td><td>Substantivo</td><td>alegria; regozijo; culto jubiloso</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agalliaomai-leh" data-source="LEH" data-search="ἀγαλλιάομαι agalliaomai verbo alegrar-se exultar regozijar-se 2 Samuel 1 Crônicas Isaías Tobias Salmos neologismo Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαλλιάομαι</td><td>Verbo</td><td>alegrar-se; exultar; regozijar-se</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agalliasis-leh" data-source="LEH" data-search="ἀγαλλίασις agalliasis substantivo grande alegria exultação oração regozijo Isaías Salmos Tobias neologismo Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαλλίασις</td><td>Substantivo</td><td>grande alegria; exultação</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agalma-leh" data-source="LEH" data-search="ἄγαλμα agalma substantivo ídolo estátua imagem Isaías 2 Macabeus KOONCE LEH" tabindex="0">
    <td class="table-lemma greek">ἄγαλμα</td><td>Substantivo</td><td>ídolo; estátua; imagem</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agamos-leh" data-source="LEH" data-search="ἄγαμος agamos adjetivo não casado solteiro 4 Macabeus Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἄγαμος</td><td>Adjetivo</td><td>não casado; solteiro</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agan-leh" data-source="LEH" data-search="ἄγαν agan advérbio muito 3 Macabeus LEH" tabindex="0">
    <td class="table-lemma greek">ἄγαν</td><td>Advérbio</td><td>muito</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-aganakteo-leh" data-source="LEH" data-search="ἀγανακτέω aganakteo verbo descontente irritado indignação enfurecer-se 4 Macabeus Sabedoria Bel Teodocião SPICQ LEH" tabindex="0">
    <td class="table-lemma greek">ἀγανακτέω</td><td>Verbo</td><td>estar descontente; indignar-se; enfurecer-se</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agapao-leh" data-source="LEH" data-search="ἀγαπάω agapao verbo amar estimar contentar-se gostar fazer amado Gênesis Crônicas Eclesiastes Provérbios Isaías Salmos MT hebraico Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαπάω</td><td>Verbo</td><td>amar; estimar; contentar-se com; gostar de fazer</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agape-leh" data-source="LEH" data-search="ἀγάπη agape substantivo amor 2 Samuel Jeremias Cântico dos Cânticos Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγάπη</td><td>Substantivo</td><td>amor</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agapesis-leh" data-source="LEH" data-search="ἀγάπησις agapesis substantivo afeição amor 2 Samuel Jeremias Oseias Habacuque hebraico MT LEH" tabindex="0">
    <td class="table-lemma greek">ἀγάπησις</td><td>Substantivo</td><td>afeição; amor</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agapetos-leh" data-source="LEH" data-search="ἀγαπητός agapetos adjetivo desejável amável amado Gênesis Juízes Isaías Salmos Sirácida hebraico MT Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαπητός</td><td>Adjetivo</td><td>desejável; amável; amado</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agauriama-leh" data-source="LEH" data-search="ἀγαυρίαμα agauriama substantivo orgulho jactância Isaías Jeremias Jó Baruc neologismo LSJ LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαυρίαμα</td><td>Substantivo</td><td>orgulho; jactância</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agauriaomai-leh" data-source="LEH" data-search="ἀγαυριάομαι agauriaomai verbo orgulhar-se jactar-se Jó neologismo HELBING LSJ LEH" tabindex="0">
    <td class="table-lemma greek">ἀγαυριάομαι</td><td>Verbo</td><td>orgulhar-se; jactar-se</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-angeion-leh" data-source="LEH" data-search="ἀγγεῖον angeion substantivo vaso recipiente Gênesis Levítico Números HARL LEH" tabindex="0">
    <td class="table-lemma greek">ἀγγεῖον</td><td>Substantivo</td><td>vaso; recipiente</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-angelia-leh" data-source="LEH" data-search="ἀγγελία angelia substantivo mensagem notícias novas relato 1 Samuel 2 Samuel 2 Reis Isaías LARCHER TWNT LEH" tabindex="0">
    <td class="table-lemma greek">ἀγγελία</td><td>Substantivo</td><td>mensagem; notícias; novas; relato</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-angello-leh" data-source="LEH" data-search="ἀγγέλλω angello verbo remissão compostos TWNT prefixos LEH" tabindex="0">
    <td class="table-lemma greek">ἀγγέλλω</td><td>Verbo</td><td>remissão aos compostos</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-angelos-leh" data-source="LEH" data-search="ἄγγελος angelos substantivo mensageiro anjo Gênesis Juízes 2 Reis Jó aramaico hebraico MT HARL HORSLEY LE BOULLUEC WALTERS WEVERS NIDNTT TWNT LEH" tabindex="0">
    <td class="table-lemma greek">ἄγγελος</td><td>Substantivo</td><td>mensageiro; anjo</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-angos-leh" data-source="LEH" data-search="ἄγγος angos substantivo vaso cuba recipiente cesto Deuteronômio 1 Reis Jeremias Ezequiel Amós Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἄγγος</td><td>Substantivo</td><td>vaso; cuba; recipiente; cesto</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-age-leh" data-source="LEH" data-search="ἄγε age interjeição imperativo ἄγω vamos 2 Reis Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἄγε</td><td>Interjeição</td><td>vamos!</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agelaios-leh" data-source="LEH" data-search="ἀγελαῖος agelaios adjetivo em grupo em bando 2 Macabeus LEH" tabindex="0">
    <td class="table-lemma greek">ἀγελαῖος</td><td>Adjetivo</td><td>em grupo; em bando</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agelazomai-leh" data-source="LEH" data-search="ἀγελάζομαι agelazomai verbo remissão συν composto LEH" tabindex="0">
    <td class="table-lemma greek">ἀγελάζομαι</td><td>Verbo</td><td>remissão ao composto com συν-</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agele-leh" data-source="LEH" data-search="ἀγέλη agele substantivo rebanho manada companhia assembleia 1 Samuel Isaías Provérbios Cântico dos Cânticos 4 Macabeus WALTERS Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἀγέλη</td><td>Substantivo</td><td>rebanho; manada; companhia; assembleia</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-ageledon-leh" data-source="LEH" data-search="ἀγεληδόν ageledon advérbio em grupos em bandos 2 Macabeus LEH" tabindex="0">
    <td class="table-lemma greek">ἀγεληδόν</td><td>Advérbio</td><td>em grupos; em bandos</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agerochia-leh" data-source="LEH" data-search="ἀγερωχία agerochia substantivo arrogância folia insolente 2 Macabeus 3 Macabeus Sabedoria neologismo LARCHER LSJ LEH" tabindex="0">
    <td class="table-lemma greek">ἀγερωχία</td><td>Substantivo</td><td>arrogância; folia insolente</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-agerochos-leh" data-source="LEH" data-search="ἀγέρωχος agerochos adjetivo arrogante altivo 3 Macabeus LEH" tabindex="0">
    <td class="table-lemma greek">ἀγέρωχος</td><td>Adjetivo</td><td>arrogante; altivo</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagiazo-leh" data-source="LEH" data-search="ἁγιάζω hagiazo verbo santificar tornar sagrado consagrar santo Gênesis Êxodo Neemias 2 Crônicas Amós 1 Samuel Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἁγιάζω</td><td>Verbo</td><td>santificar; tornar sagrado; consagrar</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagiasma-leh" data-source="LEH" data-search="ἁγίασμα hagiasma substantivo santuário objeto santo santidade Zacarias Levítico Ezequiel Êxodo hebraico MT neologismo LEH" tabindex="0">
    <td class="table-lemma greek">ἁγίασμα</td><td>Substantivo</td><td>santuário; objeto santo; santidade</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagiasmos-leh" data-source="LEH" data-search="ἁγιασμός hagiasmos substantivo consagração santificação Juízes Ezequiel Amós 2 Macabeus hebraico MT neologismo Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἁγιασμός</td><td>Substantivo</td><td>consagração; santificação</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagiasterion-leh" data-source="LEH" data-search="ἁγιαστήριον hagiasterion substantivo lugar santo santuário Levítico Salmos neologismo LEE LEH" tabindex="0">
    <td class="table-lemma greek">ἁγιαστήριον</td><td>Substantivo</td><td>lugar santo; santuário</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagiastia-leh" data-source="LEH" data-search="ἁγιαστία hagiastia substantivo correção ἁγιστεία rito serviço 4 Macabeus WALTERS LEH" tabindex="0">
    <td class="table-lemma greek">ἁγιαστία</td><td>Substantivo</td><td>rito; serviço (forma corrigida: ἁγιστεία)</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagios-leh" data-source="LEH" data-search="ἅγιος hagios adjetivo sagrado santo puro santuário templo Santo dos Santos Cidade Santa Jerusalém Êxodo Salmos Neemias Isaías hebraico MT Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἅγιος</td><td>Adjetivo</td><td>sagrado; santo; puro</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagiotes-leh" data-source="LEH" data-search="ἁγιότης hagiotes substantivo santidade sacralidade 2 Macabeus Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἁγιότης</td><td>Substantivo</td><td>santidade; sacralidade</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagiosyne-leh" data-source="LEH" data-search="ἁγιωσύνη hagiosyne substantivo santidade sacralidade Salmos 2 Macabeus neologismo Novo Testamento LEH" tabindex="0">
    <td class="table-lemma greek">ἁγιωσύνη</td><td>Substantivo</td><td>santidade; sacralidade</td><td><span class="source-pill">LEH</span></td>
</tr><tr class="search-row" data-dictionary="grego" data-target="entry-ankale-leh" data-source="LEH" data-search="ἀγκάλη ankale braço abraço colo 1 Reis Provérbios Ester Novo Testamento LEH" tabindex="0"><td class="table-lemma greek">ἀγκάλη</td><td>Substantivo</td><td>braço; abraço; colo</td><td><span class="source-pill">LEH</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-ankalizomai-leh" data-source="LEH" data-search="ἀγκαλίζομαι ankalizomai remissão composto ἐν LEH" tabindex="0"><td class="table-lemma greek">ἀγκαλίζομαι</td><td>Verbo</td><td>remissão ao composto com ἐν-</td><td><span class="source-pill">LEH</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-ankalis-leh" data-source="LEH" data-search="ἀγκαλίς ankalis braço braçada feixe posse mínima Jó Novo Testamento LEH" tabindex="0"><td class="table-lemma greek">ἀγκαλίς</td><td>Substantivo</td><td>braço; braçada; posse mínima</td><td><span class="source-pill">LEH</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-ankistron-leh" data-source="LEH" data-search="ἄγκιστρον ankistron anzol gancho 2 Reis Isaías Ezequiel Habacuque Jó Novo Testamento LEH" tabindex="0"><td class="table-lemma greek">ἄγκιστρον</td><td>Substantivo</td><td>anzol; gancho</td><td><span class="source-pill">LEH</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-ankyle-leh" data-source="LEH" data-search="ἀγκύλη ankyle laço argola gancho Êxodo LEH" tabindex="0"><td class="table-lemma greek">ἀγκύλη</td><td>Substantivo</td><td>laço; argola; gancho</td><td><span class="source-pill">LEH</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-ankon-leh" data-source="LEH" data-search="ἀγκών ankon cotovelo braço trono 2 Crônicas Ezequiel Jó 4 Macabeus Novo Testamento LEH" tabindex="0"><td class="table-lemma greek">ἀγκών</td><td>Substantivo</td><td>cotovelo; braço</td><td><span class="source-pill">LEH</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-ankonizo-leh" data-source="LEH" data-search="ἀγκωνίζω ankonizo remissão composto περι LEH" tabindex="0"><td class="table-lemma greek">ἀγκωνίζω</td><td>Verbo</td><td>remissão ao composto com περι-</td><td><span class="source-pill">LEH</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-ankoniskos-leh" data-source="LEH" data-search="ἀγκωνίσκος ankoniskos diminutivo curvo dobrado articulação Êxodo neologismo LEH" tabindex="0"><td class="table-lemma greek">ἀγκωνίσκος</td><td>Substantivo</td><td>objeto curvo ou dobrado; articulação</td><td><span class="source-pill">LEH</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagneia-leh" data-source="LEH" data-search="ἁγνεία hagneia castidade pureza nazireu templo Números 2 Crônicas 1 Macabeus Novo Testamento LEH" tabindex="0"><td class="table-lemma greek">ἁγνεία</td><td>Substantivo</td><td>castidade; pureza</td><td><span class="source-pill">LEH</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-hagnizo-leh" data-source="LEH" data-search="ἁγνίζω hagnizo limpar purificar santificar Êxodo Números 2 Crônicas Novo Testamento LEH" tabindex="0"><td class="table-lemma greek">ἁγνίζω</td><td>Verbo</td><td>limpar; purificar; santificar</td><td><span class="source-pill">LEH</span></td></tr>`,

    cardsHtml: String.raw`
<article id="entry-a-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἆ</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἆ · â" data-transliteration="â" data-meanings="ah!|ai!">ἆ</span><span class="separator">·</span><span>interjeição (I)</span><span class="separator">·</span><span>frequência LEH: 0-6-0-0-0=6</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>ah!; ai!</strong></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.6.22" target="_blank" rel="noopener noreferrer">Jz 6.22</a> (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.11.35" target="_blank" rel="noopener noreferrer">Jz<sup>B</sup> 11.35</a> (bis).</p>
        <p class="entry-text"><strong>Cf.</strong> KRAFT 1972b, 160-162; WALTERS 1973, 341.</p>
    </section>
</article>

<article id="entry-aar-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ααρ</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ααρ · aar" data-transliteration="aar" data-meanings="outro">ααρ</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-2-0=2</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="אחר" data-transliteration="ʾḥr" data-meanings="outro">אחר</bdi>, <strong>outro</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.33" target="_blank" rel="noopener noreferrer">Ne 7.33</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.34" target="_blank" rel="noopener noreferrer">7.34</a>.</p>
        <p class="entry-text">*<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.33" target="_blank" rel="noopener noreferrer">Ne 7.33</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="Ναβι-ααρ · Nabi-aar" data-transliteration="Nabi-aar" data-meanings="Nabiar|forma do texto grego em Ne 7.33">Ναβι-ααρ</span>, <em>Nabiar</em>, por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="אחר נבו" data-transliteration="ʾḥr nbw" data-meanings="o outro Nebo">אחר נבו</bdi>, <em>o outro Nebo</em>; ver também <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.34" target="_blank" rel="noopener noreferrer">Ne 7.34</a>. O asterisco é o da fonte e assinala um caso em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição da palavra hebraica, ou como erro na transmissão do texto grego.</p>
    </section>
</article>

<article id="entry-abak-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβακ</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="αβακ · abak" data-transliteration="abak" data-meanings="bíssus|linho branco fino">αβακ</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="בץ/ה" data-transliteration="bṣ/h" data-meanings="bíssus|linho branco fino">בץ/ה</bdi>, <strong>bíssus, linho branco fino</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1CH.4.21" target="_blank" rel="noopener noreferrer">1Cr 4.21</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> ALLEN, L.C. 1974b, 62.</p>
    </section>
</article>

<article id="entry-abama-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Αβαμα</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="Αβαμα · Abama" data-transliteration="Abama" data-meanings="lugar alto cultual|topônimo">Αβαμα</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-0-2-0-0=2</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="במה/ה" data-transliteration="bmh/h" data-meanings="lugar alto cultual">במה/ה</bdi>, <strong>o lugar alto cultual</strong> (interpretado como topônimo).</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZE.20.29" target="_blank" rel="noopener noreferrer">Ez 20.29</a> (bis).</p>
    </section>
</article>

<article id="entry-abarkenin-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβαρκηνιν</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="αβαρκηνιν · abarkēnin" data-transliteration="abarkēnin" data-meanings="arbustos espinhosos">αβαρκηνιν</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="ברקנין/ה" data-transliteration="brqnyn/h" data-meanings="arbustos espinhosos">ברקנין/ה</bdi>, por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="ברקנים/ה" data-transliteration="brqnym/h" data-meanings="arbustos espinhosos">ברקנים/ה</bdi>, <strong>os arbustos espinhosos</strong>; ver <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="βαρακηνιμ · barakēnim" data-transliteration="barakēnim" data-meanings="forma remetida pelo LEH; veja o respectivo verbete">βαρακηνιμ</span> e <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="βαρκοννιμ · barkonnim" data-transliteration="barkonnim" data-meanings="forma remetida pelo LEH; veja o respectivo verbete">βαρκοννιμ</span>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.8.7" target="_blank" rel="noopener noreferrer">Jz<sup>B</sup> 8.7</a>.</p>
    </section>
</article>

<article id="entry-abasileutos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβασίλευτος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβασίλευτος, -ος, -ον · abasileutos" data-transliteration="abasileutos" data-meanings="sem rei">ἀβασίλευτος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>sem rei</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.30.27" target="_blank" rel="noopener noreferrer">Pv 30.27</a>.</p>
    </section>
</article>

<article id="entry-abatoomai-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβατόομαι</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβατόομαι · abatoomai" data-transliteration="abatoomai" data-meanings="ser devastado">ἀβατόομαι</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 0-0-1-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>ser devastado</strong>; <em>neol.</em></p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.30.14" target="_blank" rel="noopener noreferrer">Jr 30.14(49.20)</a>.</p>
    </section>
</article>

<article id="entry-abatos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄβατος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄβατος, -ος, -ον · abatos" data-transliteration="abatos" data-meanings="não trilhado|inacessível|intransitável|desolado">ἄβατος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 1-0-17-4-6=28</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>não trilhado</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.38.27" target="_blank" rel="noopener noreferrer">Jó 38.27</a>); <strong>inacessível</strong> (Et 8.12x); <strong>intransitável</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/AMO.5.24" target="_blank" rel="noopener noreferrer">Am 5.24</a>); <strong>desolado</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.6.8" target="_blank" rel="noopener noreferrer">Jr 6.8</a>); <strong>que não deve ser pisado</strong> (3Mc 5.43). <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄβατον · abaton" data-transliteration="abaton" data-meanings="terra erma|deserto; neutro substantivado no contexto">ἄβατον</span> (subentenda-se <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="γήν · gēn" data-transliteration="gēn" data-meanings="terra; acusativo singular de γῆ">γήν</span>): <strong>terra erma, deserto</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.33.18" target="_blank" rel="noopener noreferrer">Jr 33(26).18</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/LEV.16.22" target="_blank" rel="noopener noreferrer">Lv 16.22</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.2.6" target="_blank" rel="noopener noreferrer">Jr 2.6</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.6.8" target="_blank" rel="noopener noreferrer">6.8</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.12.10" target="_blank" rel="noopener noreferrer">12.10</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.28.43" target="_blank" rel="noopener noreferrer">28(51).43</a>.</p>
        <p class="entry-text">→ <span class="biblio-ref tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="LSJ RSuppl" data-tooltip-text="Liddell–Scott–Jones, Revised Supplement; ed. P. G. W. Glare, com assistência de A. A. Thompson, 1996 (→ LIDDELL)">LSJ RSuppl</span>.</p>
    </section>
</article>

<article id="entry-abedirin-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβεδηριν</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="αβεδηριν · abedērin" data-transliteration="abedērin" data-meanings="palavras|registros">αβεδηριν</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="-הבדרין" data-transliteration="-hbdrin" data-meanings="forma hebraica subjacente registrada pelo LEH">-הבדרין</bdi>, por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="דברים/ה" data-transliteration="dbrim/h" data-meanings="palavras|registros">דברים/ה</bdi>, <strong>as palavras, registros</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1CH.4.22" target="_blank" rel="noopener noreferrer">1Cr 4.22</a>.</p>
    </section>
</article>

<article id="entry-abira-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβιρα</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="αβιρα · abira" data-transliteration="abira" data-meanings="cidade fortificada|cidadela">αβιρα</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="בירה/ה" data-transliteration="byrh/h" data-meanings="cidade fortificada|cidadela">בירה/ה</bdi>, <strong>a cidade fortificada, a cidadela</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.1.1" target="_blank" rel="noopener noreferrer">Ne 1.1</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> WALTERS 1973, 304-305.</p>
    </section>
</article>

<article id="entry-ablabes-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβλαβής</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβλαβής, -ής, -ές · ablabēs" data-transliteration="ablabēs" data-meanings="inofensivo|ileso">ἀβλαβής, -ής, -ές</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-2=2</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>inofensivo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/WIS.18.3" target="_blank" rel="noopener noreferrer">Sb 18.3</a>); <strong>ileso</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/WIS.19.6" target="_blank" rel="noopener noreferrer">Sb 19.6</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> Sb 18.3; 19.6.</p>
    </section>
</article>

<article id="entry-aboethesia-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβοηθησία</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβοηθησία, -ας · aboēthēsia" data-transliteration="aboēthēsia" data-meanings="desamparo">ἀβοηθησία, -ας</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-1=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>desamparo</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/SIR.51.10" target="_blank" rel="noopener noreferrer">Sr 51.10</a>.</p>
    </section>
</article>

<article id="entry-aboethetos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβοήθητος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβοήθητος, -ος, -ον · aboēthētos" data-transliteration="aboēthētos" data-meanings="desamparado|que não presta auxílio">ἀβοήθητος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-2=3</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>desamparado</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/WIS.12.6" target="_blank" rel="noopener noreferrer">Sb 12.6</a>); <strong>que não presta auxílio</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.3.28" target="_blank" rel="noopener noreferrer">2Mc 3.28</a>); <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol.?" data-tooltip-text="neologismo? — classificação dubitativa do LEH">neol.?</span>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.87.5" target="_blank" rel="noopener noreferrer">Sl 87(88).5</a>; 2Mc 3.28; Sb 12.6.</p>
    </section>
</article>

<article id="entry-abouleutos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβουλεύτως</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβουλεύτως · abouleutōs" data-transliteration="abouleutōs" data-meanings="temerariamente|irrefletidamente">ἀβουλεύτως</span><span class="separator">·</span><span>advérbio (D)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-1=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>temerariamente, irrefletidamente</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1MA.5.67" target="_blank" rel="noopener noreferrer">1Mc 5.67</a>.</p>
    </section>
</article>

<article id="entry-aboulia-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβουλία</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβουλία, -ας · aboulia" data-transliteration="aboulia" data-meanings="imprudência|irresolução|indecisão">ἀβουλία, -ας</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-1=2</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>imprudência; irresolução; indecisão</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.14.17" target="_blank" rel="noopener noreferrer">Pv 14.17</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/BAR.3.28" target="_blank" rel="noopener noreferrer">Br 3.28</a>.</p>
    </section>
</article>

<article id="entry-habra-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἅβρα</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἅβρα, -ας · habra" data-transliteration="habra" data-meanings="companheira|favorita|escrava fiel ou dedicada">ἅβρα, -ας</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 3-0-0-5-7=15</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="הברה · aramaico" data-transliteration="hbrh" data-meanings="companheira|favorita|escrava fiel ou dedicada">הברה</bdi> (aramaico): <strong>companheira, favorita, escrava fiel ou dedicada</strong>; <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol.?" data-tooltip-text="neologismo? — classificação dubitativa do LEH">neol.?</span>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.24.61" target="_blank" rel="noopener noreferrer">Gn 24.61</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.2.5" target="_blank" rel="noopener noreferrer">Êx 2.5</a> (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EST.2.9" target="_blank" rel="noopener noreferrer">Et 2.9</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EST.4.4" target="_blank" rel="noopener noreferrer">4.4</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> AMUSIN 1986, 121; HARL 1986a, 204; WEVERS 1990, 13.</p>
    </section>
</article>

<article id="entry-abrochia-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβροχία</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβροχία, -ας · abrochia" data-transliteration="abrochia" data-meanings="falta de chuva|seca">ἀβροχία, -ας</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-0-2-0-1=3</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>falta de chuva, seca</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.14.1" target="_blank" rel="noopener noreferrer">Jr 14.1</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.17.8" target="_blank" rel="noopener noreferrer">17.8</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/SIR.35.24" target="_blank" rel="noopener noreferrer">Sr 35.24</a>.</p>
    </section>
</article>

<article id="entry-abrotos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄβρωτος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄβρωτος, -ος, -ον · abrōtos" data-transliteration="abrōtos" data-meanings="não comestível">ἄβρωτος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-0=1</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>não comestível</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.24.22" target="_blank" rel="noopener noreferrer">Pv 24.22e</a>.</p>
    </section>
</article>

<article id="entry-abyssos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄβυσσος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄβυσσος, -ος, -ον · abyssos" data-transliteration="abyssos" data-meanings="sem fundo|profundo|mar|profundeza cósmica|abismo">ἄβυσσος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 5-0-9-23-12=49</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>sem fundo, profundo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/DEU.33.13" target="_blank" rel="noopener noreferrer">Dt 33.13</a>); <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἡ ἄβυσσος · hē abyssos" data-transliteration="hē abyssos" data-meanings="o mar|a profundeza|o abismo">ἡ ἄβυσσος</span>: <strong>o mar</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.44.27" target="_blank" rel="noopener noreferrer">Is 44.27</a>); <strong>a profundeza cósmica, o abismo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.1.2" target="_blank" rel="noopener noreferrer">Gn 1.2</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Gn 1.2; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.7.11" target="_blank" rel="noopener noreferrer">7.11</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.8.2" target="_blank" rel="noopener noreferrer">8.2</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/DEU.8.7" target="_blank" rel="noopener noreferrer">Dt 8.7</a>; Dt 33.13.</p>
        <p class="entry-text"><strong>Cf.</strong> HARL 1986a, 87; LARCHER 1984, 644-645; SCHMITT 1974, 149-150; → NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-agathopoieo-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαθοποιέω</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθοποιέω · agathopoieō" data-transliteration="agathopoieō" data-meanings="fazer o bem|beneficiar">ἀγαθοποιέω</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 1-1-1-0-2=5</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>fazer o bem</strong> [<span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="abs." data-tooltip-text="absolute — uso absoluto, sem complemento expresso">abs.</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ZEP.1.12" target="_blank" rel="noopener noreferrer">Sf 1.12</a>); <strong>fazer o bem a</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τινα · tina" data-transliteration="tina" data-meanings="alguém; pronome indefinido no acusativo">τινα</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.17.13" target="_blank" rel="noopener noreferrer">Jz<sup>A</sup> 17.13</a>); <strong>fazer bem a alguém em algo</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τί · ti" data-transliteration="ti" data-meanings="algo; pronome interrogativo/indefinido no acusativo">τί</span> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τινα · tina" data-transliteration="tina" data-meanings="alguém; pronome indefinido no acusativo">τινα</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NUM.10.32" target="_blank" rel="noopener noreferrer">Nm 10.32</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> Nm 10.32; Jz<sup>A</sup> 17.13; Sf 1.12; Tb<sup>BA</sup> 12.13; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.1.2" target="_blank" rel="noopener noreferrer">2Mc 1.2</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> HELBING 1928, 9; SPICQ 1978a, 11; → NIDNTT; TWNT.</p>
    </section>
</article>
<article id="entry-agathopoios-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαθοποιός</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθοποιός, -ός, -όν · agathopoios" data-transliteration="agathopoios" data-meanings="benfazejo|beneficente">ἀγαθοποιός, -ός, -όν</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-1=1</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>benfazejo, beneficente</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/SIR.42.14" target="_blank" rel="noopener noreferrer">Sr 42.14</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> SPICQ 1978a, 13(n.1); → NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-agathos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαθός</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθός, -ή, -όν · agathos" data-transliteration="agathos" data-meanings="bom|bem-nascido|gentil|belo|fino">ἀγαθός, -ή, -όν</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 39-133-52-223-152=599</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>bem-nascido, gentil</strong> (Tb 7.6); <strong>bom</strong> (em sentido moral, de pessoas: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1SA.25.15" target="_blank" rel="noopener noreferrer">1Sm 25.15</a>); <strong>belo</strong> (Dn<sup>Th</sup> 1.15); <strong>bom</strong> (de coisas: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.3.8" target="_blank" rel="noopener noreferrer">Êx 3.8</a>); <strong>fino</strong> (de metais: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZR.8.27" target="_blank" rel="noopener noreferrer">Es 8.27</a>).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τὰ ἀγαθά · ta agatha" data-transliteration="ta agatha" data-meanings="bens|coisas boas">τὰ ἀγαθά</span>: <strong>bens</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.24.10" target="_blank" rel="noopener noreferrer">Gn 24.10</a>); <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="εἰς ἀγαθά · eis agatha" data-transliteration="eis agatha" data-meanings="para o bem">εἰς ἀγαθά</span>: <strong>para o bem</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.50.20" target="_blank" rel="noopener noreferrer">Gn 50.20</a>); <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἐν πολιᾷ ἀγαθῇ · en polia agathē" data-transliteration="en polia agathē" data-meanings="em velhice abençoada">ἐν πολιᾷ ἀγαθῇ</span>: <strong>em velhice abençoada</strong> (Jz<sup>A</sup> 8.32).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ὁ καρπός σου ἔσται ἐν ἀγαθοῖς · ho karpos sou estai en agathois" data-transliteration="ho karpos sou estai en agathois" data-meanings="teu fruto ou rendimento será bom|irá bem com teu fruto">ὁ καρπός σου ἔσται ἐν ἀγαθοῖς</span>: <strong>teu fruto ou rendimento será bom; irá bem com teu fruto</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.22.21" target="_blank" rel="noopener noreferrer">Jó 22.21</a>); <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="εὐαγγελία ἀγαθή · euangelia agathē" data-transliteration="euangelia agathē" data-meanings="boas novas|notícia alegre">εὐαγγελία ἀγαθή</span>: <strong>boas novas</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2SA.18.27" target="_blank" rel="noopener noreferrer">2Sm 18.27</a>); <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθὸς δρομεύς · agathos dromeus" data-transliteration="agathos dromeus" data-meanings="mensageiro veloz">ἀγαθὸς δρομεύς</span>: <strong>mensageiro veloz</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.6.11" target="_blank" rel="noopener noreferrer">Pv 6.11</a>); <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθὸν ὅτι · agathon hoti" data-transliteration="agathon hoti" data-meanings="é bom que">ἀγαθὸν ὅτι</span> [<span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="ind." data-tooltip-text="indicative — indicativo">ind.</span>]: <strong>é bom que</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2SA.18.3" target="_blank" rel="noopener noreferrer">2Sm 18.3</a>).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθώτερος · agathōteros" data-transliteration="agathōteros" data-meanings="melhor">ἀγαθώτερος</span>: <strong>melhor</strong> (Jz<sup>B</sup> 11.25). Ver <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄριστος · aristos" data-transliteration="aristos" data-meanings="melhor|excelente">ἄριστος</span>, <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="βελτίων · beltiōn" data-transliteration="beltiōn" data-meanings="melhor">βελτίων</span> e <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="βέλτιστος · beltistos" data-transliteration="beltistos" data-meanings="o melhor|excelentíssimo">βέλτιστος</span>.</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Gn 24.10; 45.18,20,23; 50.20.</p>
        <p class="entry-text">→ NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-agathotes-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαθότης</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθότης, -ητος · agathotēs" data-transliteration="agathotēs" data-meanings="bondade|disposição amistosa">ἀγαθότης, -ητος</span><span class="separator">·</span><span>substantivo feminino da 3ª declinação (N3F)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-4=4</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>bondade; disposição amistosa</strong>; <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/WIS.1.1" target="_blank" rel="noopener noreferrer">Sb 1.1</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/WIS.7.26" target="_blank" rel="noopener noreferrer">7.26</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/WIS.12.22" target="_blank" rel="noopener noreferrer">12.22</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/SIR.45.23" target="_blank" rel="noopener noreferrer">Sr 45.23</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> LARCHER 1983, 165-166.</p>
    </section>
</article>

<article id="entry-agathoo-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαθόω</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθόω · agathoō" data-transliteration="agathoō" data-meanings="beneficiar|fazer bem a alguém">ἀγαθόω</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 0-2-2-0-1=5</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>beneficiar, fazer bem a alguém</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τινι · tini" data-transliteration="tini" data-meanings="a alguém; dativo de pronome indefinido">τινι</span>], <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1SA.25.31" target="_blank" rel="noopener noreferrer">1Sm 25.31</a>; idem [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τινα · tina" data-transliteration="tina" data-meanings="alguém; acusativo de pronome indefinido">τινα</span>], <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/SIR.49.9" target="_blank" rel="noopener noreferrer">Sr 49.9</a>; <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> 1Sm 25.31 (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.39.41" target="_blank" rel="noopener noreferrer">Jr 39(32).41</a>; Jr 51(44).27; Sr 49.9.</p>
        <p class="entry-text"><strong>Cf.</strong> HELBING 1928, 9.</p>
    </section>
</article>

<article id="entry-agathyno-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαθύνω</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθύνω · agathynō" data-transliteration="agathynō" data-meanings="honrar|engrandecer|adornar|consolar|fazer bem|alegrar-se">ἀγαθύνω</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 0-15-0-12-1=28</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>Ativo:</strong> <strong>honrar, engrandecer</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τινα · tina" data-transliteration="tina" data-meanings="alguém; acusativo de pronome indefinido">τινα</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1KI.1.47" target="_blank" rel="noopener noreferrer">1Re 1.47</a>); <strong>adornar</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τι · ti" data-transliteration="ti" data-meanings="algo; acusativo de pronome indefinido">τι</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2KI.9.30" target="_blank" rel="noopener noreferrer">2Re 9.30</a>); <strong>consolar, alegrar</strong> (Jz<sup>B</sup> 19.22); <strong>fazer bem a</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τινι · tini" data-transliteration="tini" data-meanings="a alguém; dativo de pronome indefinido">τινι</span>] (Jz<sup>B</sup> 17.13); <strong>proceder bem</strong> (2Re 10.30); <strong>agir moralmente bem</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.35.4" target="_blank" rel="noopener noreferrer">Sl 35(36).4</a>).</p>
        <p class="entry-text"><strong>Passivo:</strong> <strong>estar de bom ânimo, alegrar-se muito, regozijar-se</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.16.25" target="_blank" rel="noopener noreferrer">Jz 16.25</a>); <strong>achar favor</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.2.5" target="_blank" rel="noopener noreferrer">Ne 2.5</a>); <strong>considerar aceitável</strong> [+<span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="inf." data-tooltip-text="infinitive — infinitivo">inf.</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZR.7.18" target="_blank" rel="noopener noreferrer">Es 7.18</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Jz 16.25; Jz<sup>B</sup> 17.13; Jz 18.20.</p>
        <p class="entry-text"><strong>Cf.</strong> HELBING 1928, 10-11.</p>
    </section>
</article>

<article id="entry-agathos-adverb-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαθῶς</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθῶς · agathōs" data-transliteration="agathōs" data-meanings="bem|completamente">ἀγαθῶς</span><span class="separator">·</span><span>advérbio (D)</span><span class="separator">·</span><span>frequência LEH: 0-2-0-0-1=3</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>bem, completamente</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2KI.11.18" target="_blank" rel="noopener noreferrer">2Re 11.18</a>); <strong>bem!</strong> (como interjeição: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1SA.20.7" target="_blank" rel="noopener noreferrer">1Sm 20.7</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> 1Sm 20.7; 2Re 11.18; Tb<sup>BA</sup> 13.11.</p>
    </section>
</article>

<article id="entry-agathosyne-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαθωσύνη</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαθωσύνη, -ης · agathōsynē" data-transliteration="agathōsynē" data-meanings="bondade|benevolência">ἀγαθωσύνη, -ης</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-3-0-11-1=15</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>bondade, benevolência</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.9.25" target="_blank" rel="noopener noreferrer">Ne 9.25</a>).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="εἰς ἀγαθωσύνην · eis agathōsynēn" data-transliteration="eis agathōsynēn" data-meanings="para o bem">εἰς ἀγαθωσύνην</span>: <strong>para o bem</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.13.31" target="_blank" rel="noopener noreferrer">Ne 13.31</a>); <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="εἰ ἀγαθωσύνην ἐποιήσατε μετὰ Ιεροβααλ · ei agathōsynēn epoiēsate meta Ierobaal" data-transliteration="ei agathōsynēn epoiēsate meta Ierobaal" data-meanings="se tivésseis procedido bem com Jerobaal">εἰ ἀγαθωσύνην ἐποιήσατε μετὰ Ιεροβααλ</span>: <strong>se tivésseis procedido bem com Jerobaal</strong> (Jz<sup>B</sup> 9.16).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Jz<sup>A</sup> 8.35; Jz<sup>B</sup> 9.16; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2CH.24.16" target="_blank" rel="noopener noreferrer">2Cr 24.16</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.51.5" target="_blank" rel="noopener noreferrer">Sl 51(52).5</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ECC.4.8" target="_blank" rel="noopener noreferrer">Ec 4.8</a>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span> <strong>Cf.</strong> SPICQ 1978a, 13-14; → NIDNTT.</p>
    </section>
</article>

<article id="entry-agalliama-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαλλίαμα</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαλλίαμα, -ατος · agalliama" data-transliteration="agalliama" data-meanings="alegria|regozijo|alegria religiosa|culto jubiloso">ἀγαλλίαμα, -ατος</span><span class="separator">·</span><span>substantivo neutro da 3ª declinação (N3N)</span><span class="separator">·</span><span>frequência LEH: 0-0-9-4-10=23</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>alegria, regozijo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.16.10" target="_blank" rel="noopener noreferrer">Is 16.10</a>); <strong>alegria religiosa, culto jubiloso</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.35.10" target="_blank" rel="noopener noreferrer">Is 35.10</a>); <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> Is 16.10; 22.13; 35.10; 51.3,11.</p>
    </section>
</article>

<article id="entry-agalliaomai-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαλλιάομαι</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαλλιάομαι · agalliaomai" data-transliteration="agalliaomai" data-meanings="alegrar-se|exultar|regozijar-se">ἀγαλλιάομαι</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 0-2-12-53-7=74</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>alegrar-se intensamente, exultar</strong> [<span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="abs." data-tooltip-text="absolute — uso absoluto, sem complemento expresso">abs.</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2SA.1.20" target="_blank" rel="noopener noreferrer">2Sm 1.20</a>); <strong>alegrar-se em</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τι · ti" data-transliteration="ti" data-meanings="algo; acusativo de pronome indefinido">τι</span>] (Tb<sup>BA</sup> 13.9, <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="secundo" data-tooltip-text="Transliteração: secundo. Latim: segundo; aqui, segunda ocorrência">secundo</span>); idem [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τινα · tina" data-transliteration="tina" data-meanings="alguém ou algo; acusativo de pronome indefinido">τινα</span>] (Tb<sup>BA</sup> 13.9, <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="primo" data-tooltip-text="Transliteração: primo. Latim: primeiro; aqui, primeira ocorrência">primo</span>); idem [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τινι · tini" data-transliteration="tini" data-meanings="em alguém ou algo; dativo de pronome indefinido">τινι</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.80.2" target="_blank" rel="noopener noreferrer">Sl 80(81).2</a>).</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.74.10" target="_blank" rel="noopener noreferrer">Sl 74(75).10</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαλλιάσομαι · agalliasomai" data-transliteration="agalliasomai" data-meanings="exultarei">ἀγαλλιάσομαι</span> <strong>exultarei</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="אגיל" data-transliteration="ʾgyl" data-meanings="exultarei">אגיל</bdi> por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="אגיד" data-transliteration="ʾgyd" data-meanings="declararei">אגיד</bdi> <strong>declararei</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> 2Sm 1.20; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1CH.16.31" target="_blank" rel="noopener noreferrer">1Cr 16.31</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.12.6" target="_blank" rel="noopener noreferrer">Is 12.6</a>; 25.9; 29.19.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span> <strong>Cf.</strong> HELBING 1928, 255-257; → NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-agalliasis-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαλλίασις</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαλλίασις, -εως · agalliasis" data-transliteration="agalliasis" data-meanings="grande alegria|exultação">ἀγαλλίασις, -εως</span><span class="separator">·</span><span>substantivo feminino da 3ª declinação (N3F)</span><span class="separator">·</span><span>frequência LEH: 0-0-1-16-2=19</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>grande alegria, exultação</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.29.6" target="_blank" rel="noopener noreferrer">Sl 29(30).6</a>).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="προσευχὴ εἰς ἀγαλλίασιν · proseuchē eis agalliasin" data-transliteration="proseuchē eis agalliasin" data-meanings="oração para regozijo">προσευχὴ εἰς ἀγαλλίασιν</span>: <strong>oração para regozijo</strong> (Tb<sup>BA</sup> 13.1).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.51.11" target="_blank" rel="noopener noreferrer">Is 51.11</a>; Sl 29(30).6; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.41.5" target="_blank" rel="noopener noreferrer">41(42).5</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.44.8" target="_blank" rel="noopener noreferrer">44(45).8,16</a>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span> → NIDNTT; TWNT.</p>
    </section>
</article>
<article id="entry-agalma-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄγαλμα</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄγαλμα, -ατος · agalma" data-transliteration="agalma" data-meanings="ídolo|estátua|imagem">ἄγαλμα, -ατος</span><span class="separator">·</span><span>substantivo neutro da 3ª declinação (N3N)</span><span class="separator">·</span><span>frequência LEH: 0-0-2-0-1=3</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>ídolo; estátua; imagem</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.19.3" target="_blank" rel="noopener noreferrer">Is 19.3</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.21.9" target="_blank" rel="noopener noreferrer">21.9</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.2.2" target="_blank" rel="noopener noreferrer">2Mc 2.2</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> KOONCE 1988, 108-110.</p>
    </section>
</article>

<article id="entry-agamos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄγαμος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄγαμος, -ος, -ον · agamos" data-transliteration="agamos" data-meanings="não casado|solteiro">ἄγαμος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-1=1</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>não casado; solteiro</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/4MA.16.9" target="_blank" rel="noopener noreferrer">4Mc 16.9</a>.</p>
        <p class="entry-text">→ NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-agan-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄγαν</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄγαν · agan" data-transliteration="agan" data-meanings="muito">ἄγαν</span><span class="separator">·</span><span>advérbio (D)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-1=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>muito</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/3MA.4.11" target="_blank" rel="noopener noreferrer">3Mc 4.11</a>.</p>
    </section>
</article>

<article id="entry-aganakteo-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγανακτέω</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγανακτέω · aganakteō" data-transliteration="aganakteō" data-meanings="estar descontente|estar irritado|mostrar indignação|enfurecer-se">ἀγανακτέω</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-4=4</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>estar descontente; estar irritado; mostrar indignação</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/WIS.12.27" target="_blank" rel="noopener noreferrer">Sb 12.27</a>); <strong>enfurecer-se</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/WIS.5.22" target="_blank" rel="noopener noreferrer">Sb 5.22</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/4MA.4.21" target="_blank" rel="noopener noreferrer">4Mc 4.21</a>; Sb 5.22; Sb 12.27; Bel<sup>Th</sup> 28.</p>
        <p class="entry-text"><strong>Cf.</strong> SPICQ 1982, 5-7.</p>
    </section>
</article>

<article id="entry-agapao-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαπάω</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαπάω · agapaō" data-transliteration="agapaō" data-meanings="amar|estimar|contentar-se com|gostar de fazer">ἀγαπάω</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 42-37-49-89-66=283</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>amar</strong> — entre seres humanos, do amor de Deus pelo homem e do homem por Deus (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.22.2" target="_blank" rel="noopener noreferrer">Gn 22.2</a>); <strong>amar, estimar</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τι · ti" data-transliteration="ti" data-meanings="algo; acusativo de pronome indefinido">τι</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1CH.29.17" target="_blank" rel="noopener noreferrer">1Cr 29.17</a>); <strong>contentar-se com</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τι · ti" data-transliteration="ti" data-meanings="algo; acusativo de pronome indefinido">τι</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ECC.5.9" target="_blank" rel="noopener noreferrer">Ec 5.9</a>); <strong>gostar de fazer, amar fazer</strong> [+<span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="inf." data-tooltip-text="infinitive — infinitivo">inf.</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.20.13" target="_blank" rel="noopener noreferrer">Pv 20.13</a>).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἠγαπημένος · ēgapēmenos" data-transliteration="ēgapēmenos" data-meanings="amado">ἠγαπημένος</span>: <strong>amado</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.44.2" target="_blank" rel="noopener noreferrer">Is 44.2</a>). <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τὴν ἀγάπην, ἣν ἠγάπησεν αὐτήν · tēn agapēn, hēn ēgapēsen autēn" data-transliteration="tēn agapēn, hēn ēgapēsen autēn" data-meanings="o amor com que a amara">τὴν ἀγάπην, ἣν ἠγάπησεν αὐτήν</span>: <strong>o amor com que a amara</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2SA.13.15" target="_blank" rel="noopener noreferrer">2Sm 13.15</a>).</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2SA.7.18" target="_blank" rel="noopener noreferrer">2Sm 7.18</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἠγάπηκάς με · ēgapēkas me" data-transliteration="ēgapēkas me" data-meanings="tu me amaste">ἠγάπηκάς με</span> <strong>tu me amaste</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="אהבתני" data-transliteration="ʾhbtny" data-meanings="tu me amaste">אהבתני</bdi> ? por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="הביאותני" data-transliteration="hbyʾtny" data-meanings="tu me trouxeste">הביאותני</bdi> <strong>tu me trouxeste</strong>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.28.6" target="_blank" rel="noopener noreferrer">Sl 28(29).6</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ὁ ἠγαπημένος · ho ēgapēmenos" data-transliteration="ho ēgapēmenos" data-meanings="o amado">ὁ ἠγαπημένος</span> <strong>o amado</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="ישרון" data-transliteration="yšrwn" data-meanings="amado; forma pressuposta pelo grego segundo o LEH">ישרון</bdi> por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="שריון" data-transliteration="śrywn" data-meanings="Sirion">שריון</bdi> <strong>Sirion</strong>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.30.15" target="_blank" rel="noopener noreferrer">Pv 30.15</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="(ἦσαν) ἀγαπήσει ἀγαπώμεναι · (ēsan) agapēsei agapōmenai" data-transliteration="(ēsan) agapēsei agapōmenai" data-meanings="eram muito amadas">(ἦσαν) ἀγαπήσει ἀγαπώμεναι</span> <strong>muito amadas</strong> — <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="◊" data-tooltip-text="No LEH, o losango diante de uma palavra hebraica indica que ela é apresentada como raiz, e não como a forma textual ocorrente">◊</span><bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="אהב" data-transliteration="ʾhb" data-meanings="amar">אהב</bdi> ou <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="◊" data-tooltip-text="No LEH, o losango diante de uma palavra hebraica indica que ela é apresentada como raiz, e não como a forma textual ocorrente">◊</span><bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="חבב" data-transliteration="ḥbb" data-meanings="amar|estimar">חבב</bdi> por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="הב הב" data-transliteration="hb hb" data-meanings="forma do texto massorético citada pelo LEH; sentido incerto no contexto">הב הב</bdi>?; ver também <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/HOS.8.13" target="_blank" rel="noopener noreferrer">Os 8.13</a> e <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/HAB.3.4" target="_blank" rel="noopener noreferrer">Hb 3.4</a>.</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Gn 22.2; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.24.67" target="_blank" rel="noopener noreferrer">24.67</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.25.28" target="_blank" rel="noopener noreferrer">25.28</a> (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.29.18" target="_blank" rel="noopener noreferrer">29.18</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> JOLY 1968, 48-51; SWINN 1990, 49-79; → NIDNTT; SCHLEUSNER (2Sm 7.18); TWNT.</p>
    </section>
</article>

<article id="entry-agape-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγάπη</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγάπη, -ης · agapē" data-transliteration="agapē" data-meanings="amor">ἀγάπη, -ης</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-1-1-13-4=19</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>amor</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2SA.13.15" target="_blank" rel="noopener noreferrer">2Sm 13.15</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.2.2" target="_blank" rel="noopener noreferrer">Jr 2.2</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/SNG.2.4" target="_blank" rel="noopener noreferrer">Ct 2.4</a>,5,7.</p>
        <p class="entry-text"><strong>Cf.</strong> BARR 1987, 3-18; CERESA-GASTALDO 1953, 347-355; HORSLEY 1987, 258-259; KAHANE 1987, 243-263; PAESLACK 1954, 51-142; RIESENFELD 1941, 1-27; SPICQ 1978, 15-30; SWINN 1990, 80-81; TARELLI 1950, 64-67; WEST, S. 1967, 142-143; WEST, S. 1969, 228-230; WITT 1968, 209-211; → LSJ RSuppl; NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-agapesis-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγάπησις</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγάπησις, -εως · agapēsis" data-transliteration="agapēsis" data-meanings="afeição|amor">ἀγάπησις, -εως</span><span class="separator">·</span><span>substantivo feminino da 3ª declinação (N3F)</span><span class="separator">·</span><span>frequência LEH: 0-2-5-1-4=12</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>afeição, amor</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2SA.1.26" target="_blank" rel="noopener noreferrer">2Sm 1.26</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> 2Sm 1.26 (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.2.33" target="_blank" rel="noopener noreferrer">Jr 2.33</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.38.3" target="_blank" rel="noopener noreferrer">38(31).3</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/HOS.11.4" target="_blank" rel="noopener noreferrer">Os 11.4</a>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/HAB.3.4" target="_blank" rel="noopener noreferrer">Hb 3.4</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγάπησιν · agapēsin" data-transliteration="agapēsin" data-meanings="amor">ἀγάπησιν</span> <strong>amor</strong> — <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="◊" data-tooltip-text="No LEH, o losango diante de uma palavra hebraica indica que ela é apresentada como raiz, e não como a forma textual ocorrente">◊</span><bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="חבב" data-transliteration="ḥbb" data-meanings="amar|estimar">חבב</bdi> por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="חביון" data-transliteration="ḥbywn" data-meanings="forma do texto massorético citada pelo LEH">חביון</bdi> <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="◊" data-tooltip-text="No LEH, o losango diante de uma palavra hebraica indica que ela é apresentada como raiz, e não como a forma textual ocorrente">◊</span><bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="חבה" data-transliteration="ḥbh" data-meanings="véu">חבה</bdi> <strong>véu</strong>; ver também <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαπάω · agapaō" data-transliteration="agapaō" data-meanings="amar">ἀγαπάω</span>.</p>
    </section>
</article>

<article id="entry-agapetos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαπητός</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαπητός, -ή, -όν · agapētos" data-transliteration="agapētos" data-meanings="desejável|amável|amado">ἀγαπητός, -ή, -όν</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 3-1-7-6-7=24</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>desejável, amável</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.83.2" target="_blank" rel="noopener noreferrer">Sl 83(84).2</a>); <strong>amado</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.22.2" target="_blank" rel="noopener noreferrer">Gn 22.2</a>).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="καὶ οὐκ ἔστιν ἀγαπητὸν τοῖς φοβουμένοις αὐτόν · kai ouk estin agapēton tois phoboumenois auton" data-transliteration="kai ouk estin agapēton tois phoboumenois auton" data-meanings="e não é amado pelos que o temem">καὶ οὐκ ἔστιν ἀγαπητὸν τοῖς φοβουμένοις αὐτόν</span>: <strong>ele (a abominação) não é amado pelos que o temem; os que temem (a abominação) não o amam</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/SIR.15.13" target="_blank" rel="noopener noreferrer">Sr 15.13</a>).</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.67.13" target="_blank" rel="noopener noreferrer">Sl 67(68).13</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τοῦ ἀγαπητοῦ · tou agapētou" data-transliteration="tou agapētou" data-meanings="do amado">τοῦ ἀγαπητοῦ</span> <strong>do amado</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="ידד" data-transliteration="ydd" data-meanings="amado; forma pressuposta pelo grego segundo o LEH">ידד</bdi> por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="ידדון" data-transliteration="yddwn" data-meanings="forma do texto massorético citada pelo LEH">ידדון</bdi> <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="◊" data-tooltip-text="No LEH, o losango diante de uma palavra hebraica indica que ela é apresentada como raiz, e não como a forma textual ocorrente">◊</span><bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="נדד" data-transliteration="ndd" data-meanings="fugir">נדד</bdi> <strong>eles fogem</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Gn 22.2,12,16; Jz<sup>A</sup> 11.34; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.5.1" target="_blank" rel="noopener noreferrer">Is 5.1</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> ENGEL 1985, 132-133; HARL 1986a, 192-193; HORSLEY 1987, 254-255; PAESLACK 1954, 51-142; SOUTER 1926, 59-60; SWINN 1990, 81; TURNER 1926, 113-129; → NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-agauriama-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαυρίαμα</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαυρίαμα, -ατος · agauriama" data-transliteration="agauriama" data-meanings="orgulho|jactância">ἀγαυρίαμα, -ατος</span><span class="separator">·</span><span>substantivo neutro da 3ª declinação (N3N)</span><span class="separator">·</span><span>frequência LEH: 0-0-2-1-1=4</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>orgulho; jactância</strong>; <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.62.7" target="_blank" rel="noopener noreferrer">Is 62.7</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.31.2" target="_blank" rel="noopener noreferrer">Jr 31(48).2</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.13.12" target="_blank" rel="noopener noreferrer">Jó 13.12</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/BAR.4.34" target="_blank" rel="noopener noreferrer">Br 4.34</a>.</p>
        <p class="entry-text">→ <span class="biblio-ref tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="LSJ RSuppl" data-tooltip-text="Liddell–Scott–Jones, Revised Supplement; ed. P. G. W. Glare, com assistência de A. A. Thompson, 1996 (→ LIDDELL)">LSJ RSuppl</span>.</p>
    </section>
</article>

<article id="entry-agauriaomai-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγαυριάομαι</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγαυριάομαι · agauriaomai" data-transliteration="agauriaomai" data-meanings="orgulhar-se|jactar-se">ἀγαυριάομαι</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>orgulhar-se; jactar-se</strong>; <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span></p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.3.14" target="_blank" rel="noopener noreferrer">Jó 3.14</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> HELBING 1928, 261-262; → <span class="biblio-ref tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="LSJ RSuppl" data-tooltip-text="Liddell–Scott–Jones, Revised Supplement; ed. P. G. W. Glare, com assistência de A. A. Thompson, 1996 (→ LIDDELL)">LSJ RSuppl</span>.</p>
    </section>
</article>
<article id="entry-angeion-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγγεῖον</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγγεῖον, -ον · angeion" data-transliteration="angeion" data-meanings="vaso|recipiente">ἀγγεῖον, -ον</span><span class="separator">·</span><span>substantivo neutro da 2ª declinação (N2N)</span><span class="separator">·</span><span>frequência LEH: 6-3-9-2-4=24</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>vaso, recipiente</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.42.25" target="_blank" rel="noopener noreferrer">Gn 42.25</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.43.11" target="_blank" rel="noopener noreferrer">43.11</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/LEV.11.34" target="_blank" rel="noopener noreferrer">Lv 11.34</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/LEV.14.5" target="_blank" rel="noopener noreferrer">14.5</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NUM.4.9" target="_blank" rel="noopener noreferrer">Nm 4.9</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> HARL 1986a, 280-281.</p>
    </section>
</article>

<article id="entry-angelia-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγγελία</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγγελία, -ας · angelia" data-transliteration="angelia" data-meanings="mensagem|notícias|novas|relato">ἀγγελία, -ας</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-3-6-3-1=13</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>mensagem; notícias; novas; relato</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1SA.4.19" target="_blank" rel="noopener noreferrer">1Sm 4.19</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2SA.4.4" target="_blank" rel="noopener noreferrer">2Sm 4.4</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2KI.19.7" target="_blank" rel="noopener noreferrer">2Re 19.7</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.28.9" target="_blank" rel="noopener noreferrer">Is 28.9</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.37.7" target="_blank" rel="noopener noreferrer">37.7</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> LARCHER 1984, 371 (Sb 5.9); → TWNT.</p>
    </section>
</article>

<article id="entry-angello-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγγέλλω</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγγέλλω · angellō" data-transliteration="angellō" data-meanings="remissão do LEH aos compostos do verbo">ἀγγέλλω</span><span class="separator">·</span><span>verbo</span><span class="separator">·</span><span>sem estatística própria no LEH</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Remissões da fonte</div>
        <p class="entry-text">O LEH não fornece glossa autônoma neste ponto; remete a <strong>TWNT</strong> e aos compostos com os prefixos <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀν- · an-" data-transliteration="an-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">ἀν-</span>, <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀπ- · ap-" data-transliteration="ap-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">ἀπ-</span>, <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="δι- · di-" data-transliteration="di-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">δι-</span>, <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἐξ- · ex-" data-transliteration="ex-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">ἐξ-</span>, <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἐπ- · ep-" data-transliteration="ep-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">ἐπ-</span>, <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="κατ- · kat-" data-transliteration="kat-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">κατ-</span>, <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="παρ- · par-" data-transliteration="par-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">παρ-</span>, <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="προαπ- · proap-" data-transliteration="proap-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">προαπ-</span> e <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="προς- · pros-" data-transliteration="pros-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">προς-</span>.</p>
    </section>
</article>

<article id="entry-angelos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄγγελος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄγγελος, -ου · angelos" data-transliteration="angelos" data-meanings="mensageiro|anjo">ἄγγελος, -ου</span><span class="separator">·</span><span>substantivo masculino da 2ª declinação (N2M)</span><span class="separator">·</span><span>frequência LEH: 42-150-43-51-64=350</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>mensageiro</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.32.4" target="_blank" rel="noopener noreferrer">Gn 32.4</a>); <strong>anjo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.16.7" target="_blank" rel="noopener noreferrer">Gn 16.7</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Gn 16.7,8,9,10,11.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span>Jz<sup>B</sup> 5.16 <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγγέλων · angelōn" data-transliteration="angelōn" data-meanings="anjos">ἀγγέλων</span> <strong>anjos</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="עירין · aramaico" data-transliteration="ʿyrin" data-meanings="vigilantes">עירין</bdi> (aramaico), <strong>vigilantes</strong>, por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="עדרים" data-transliteration="ʿdrim" data-meanings="rebanhos">עדרים</bdi> <strong>rebanhos</strong>; ou <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγγέλων · angelōn" data-transliteration="angelōn" data-meanings="anjos">ἀγγέλων</span> corrigido para <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγελῶν · agelōn" data-transliteration="agelōn" data-meanings="rebanhos">ἀγελῶν</span>, <strong>rebanhos</strong>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2KI.7.17" target="_blank" rel="noopener noreferrer">2Re 7.17</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τὸν ἄγγελον · ton angelon" data-transliteration="ton angelon" data-meanings="o mensageiro">τὸν ἄγγελον</span> <strong>o mensageiro</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="המלאך" data-transliteration="hmlʾk" data-meanings="o mensageiro|o anjo">המלאך</bdi> por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="המלך" data-transliteration="hmlk" data-meanings="o rei">המלך</bdi> <strong>o rei</strong>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.36.14" target="_blank" rel="noopener noreferrer">Jó 36.14</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ὑπὸ ἀγγέλων · hypo angelōn" data-transliteration="hypo angelōn" data-meanings="por mensageiros">ὑπὸ ἀγγέλων</span> <strong>por mensageiros</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="קדושׁים/ב" data-transliteration="qdwšym/b" data-meanings="por seres santos|por seres celestes">קדושׁים/ב</bdi> <strong>por seres santos, por seres celestes</strong>, por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="קדשׁים/ב" data-transliteration="qdšym/b" data-meanings="por prostitutos masculinos">קדשׁים/ב</bdi> <strong>por prostitutos masculinos?</strong></p>
        <p class="entry-text"><strong>Cf.</strong> HARL 1986a, 53-54; HORSLEY 1989, 72-73; LE BOULLUEC 1989, 103 (Êx 4.24); WALTERS 1973, 225, 279 (Jz 5.16); WEVERS 1990, 54, 369, 540; → NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-angos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄγγος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄγγος, -ους · angos" data-transliteration="angos" data-meanings="vaso|cuba|recipiente|cesto">ἄγγος, -ους</span><span class="separator">·</span><span>substantivo neutro da 3ª declinação (N3N)</span><span class="separator">·</span><span>frequência LEH: 1-1-4-0-0=6</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>vaso, cuba, recipiente</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/DEU.23.26" target="_blank" rel="noopener noreferrer">Dt 23.26(25)</a>); <strong>cesto</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/AMO.8.1" target="_blank" rel="noopener noreferrer">Am 8.1</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> Dt 23.26(25); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1KI.17.10" target="_blank" rel="noopener noreferrer">1Re 17.10</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.19.11" target="_blank" rel="noopener noreferrer">Jr 19.11</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZE.4.9" target="_blank" rel="noopener noreferrer">Ez 4.9</a>; Am 8.1.</p>
    </section>
</article>

<article id="entry-age-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄγε</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄγε · age" data-transliteration="age" data-meanings="vamos!">ἄγε</span><span class="separator">·</span><span>interjeição (I)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">Imperativo de <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄγω · agō" data-transliteration="agō" data-meanings="conduzir|levar">ἄγω</span>, usado como interjeição: <strong>vamos!</strong></p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2KI.4.24" target="_blank" rel="noopener noreferrer">2Re 4.24</a>.</p>
    </section>
</article>

<article id="entry-agelaios-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγελαῖος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγελαῖος, -α, -ον · agelaios" data-transliteration="agelaios" data-meanings="em grupo|em bando">ἀγελαῖος, -α, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-1=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>em grupo, em bando</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.14.23" target="_blank" rel="noopener noreferrer">2Mc 14.23</a>.</p>
    </section>
</article>

<article id="entry-agelazomai-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγελάζομαι</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγελάζομαι · agelazomai" data-transliteration="agelazomai" data-meanings="remissão do LEH ao composto com συν-">ἀγελάζομαι</span><span class="separator">·</span><span>verbo</span><span class="separator">·</span><span>sem estatística própria no LEH</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Remissão da fonte</div>
        <p class="entry-text">O LEH não fornece glossa ou estatística autônoma neste ponto; remete ao composto com <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="συν- · syn-" data-transliteration="syn-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">συν-</span>.</p>
    </section>
</article>

<article id="entry-agele-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγέλη</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγέλη, -ης · agelē" data-transliteration="agelē" data-meanings="rebanho|manada|companhia|assembleia">ἀγέλη, -ης</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-2-1-6-1=10</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>rebanho, manada</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1SA.17.34" target="_blank" rel="noopener noreferrer">1Sm 17.34</a>); <strong>companhia, assembleia</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/4MA.5.4" target="_blank" rel="noopener noreferrer">4Mc 5.4</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> 1Sm 17.34; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1SA.24.4" target="_blank" rel="noopener noreferrer">24.4</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.60.6" target="_blank" rel="noopener noreferrer">Is 60.6</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.27.23" target="_blank" rel="noopener noreferrer">Pv 27.23</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/SNG.1.7" target="_blank" rel="noopener noreferrer">Ct 1.7</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> WALTERS 1973, 279 (Jz 5.16).</p>
    </section>
</article>

<article id="entry-ageledon-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγεληδόν</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγεληδόν · agelēdon" data-transliteration="agelēdon" data-meanings="em grupos|em bandos">ἀγεληδόν</span><span class="separator">·</span><span>advérbio (D)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-2=2</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>em grupos, em bandos</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.3.18" target="_blank" rel="noopener noreferrer">2Mc 3.18</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.14.14" target="_blank" rel="noopener noreferrer">14.14</a>.</p>
    </section>
</article>
<article id="entry-agerochia-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγερωχία</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγερωχία, -ας · agerōchia" data-transliteration="agerōchia" data-meanings="arrogância|folia insolente">ἀγερωχία, -ας</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-3=3</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>arrogância</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.9.7" target="_blank" rel="noopener noreferrer">2Mc 9.7</a>); <strong>folia insolente</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/WIS.2.9" target="_blank" rel="noopener noreferrer">Sb 2.9</a>); <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol.?" data-tooltip-text="neologismo? — classificação dubitativa do LEH">neol.?</span></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> 2Mc 9.7; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/3MA.2.3" target="_blank" rel="noopener noreferrer">3Mc 2.3</a>; Sb 2.9.</p>
        <p class="entry-text"><strong>Cf.</strong> LARCHER 1983, 233-234; → <span class="biblio-ref tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="LSJ RSuppl" data-tooltip-text="Liddell–Scott–Jones, Revised Supplement; ed. P. G. W. Glare, com assistência de A. A. Thompson, 1996 (→ LIDDELL)">LSJ RSuppl</span>.</p>
    </section>
</article>

<article id="entry-agerochos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγέρωχος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγέρωχος, -ος, -ον · agerōchos" data-transliteration="agerōchos" data-meanings="arrogante|altivo">ἀγέρωχος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-1=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>arrogante, altivo</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/3MA.1.25" target="_blank" rel="noopener noreferrer">3Mc 1.25</a>.</p>
    </section>
</article>

<article id="entry-hagiazo-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἁγιάζω</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγιάζω · hagiazō" data-transliteration="hagiazō" data-meanings="santificar|tornar sagrado|consagrar">ἁγιάζω</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 88-36-34-11-27=196</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>Ativo:</strong> <strong>santificar, tornar sagrado</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τι · ti" data-transliteration="ti" data-meanings="algo; acusativo de pronome indefinido">τι</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/GEN.2.3" target="_blank" rel="noopener noreferrer">Gn 2.3</a>); <strong>consagrar a</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τί τινι · ti tini" data-transliteration="ti tini" data-meanings="algo a alguém ou a algo; acusativo + dativo">τί τινι</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.12.47" target="_blank" rel="noopener noreferrer">Ne 12.47</a>).</p>
        <p class="entry-text"><strong>Passivo:</strong> <strong>ser santificado, ser santo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.29.21" target="_blank" rel="noopener noreferrer">Êx 29.21</a>).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἡγιασμένος · hēgiasmenos" data-transliteration="hēgiasmenos" data-meanings="santificado|sagrado">ἡγιασμένος</span>: <strong>santificado, sagrado</strong> (de pessoas: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2CH.26.18" target="_blank" rel="noopener noreferrer">2Cr 26.18</a>); <strong>consagrado, nazireu</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/AMO.2.12" target="_blank" rel="noopener noreferrer">Am 2.12</a>); <strong>sagrado</strong> (de lugares: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1SA.7.16" target="_blank" rel="noopener noreferrer">1Sm 7.16</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Gn 2.3; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.13.2" target="_blank" rel="noopener noreferrer">Êx 13.2</a>,12; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.19.14" target="_blank" rel="noopener noreferrer">19.14</a>,22.</p>
        <p class="entry-text"><strong>Cf.</strong> GEHMAN 1951=1972, 98 (Lv 25.11); HARL 1986a, 99; HARLÉ 1988, 29, 114-115, 178-181; → NIDNTT; TWNT. Remissão da fonte: <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="καθ- · kath-" data-transliteration="kath-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">καθ-</span>.</p>
    </section>
</article>

<article id="entry-hagiasma-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἁγίασμα</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγίασμα, -ατος · hagiasma" data-transliteration="hagiasma" data-meanings="santuário|objeto santo|santidade">ἁγίασμα, -ατος</span><span class="separator">·</span><span>substantivo neutro da 3ª declinação (N3N)</span><span class="separator">·</span><span>frequência LEH: 9-7-11-14-26=67</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>santuário</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.15.17" target="_blank" rel="noopener noreferrer">Êx 15.17</a>); <strong>objeto santo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZE.20.40" target="_blank" rel="noopener noreferrer">Ez 20.40</a>); <strong>santidade</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.28.36" target="_blank" rel="noopener noreferrer">Êx 28.36</a>).</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ZEC.7.3" target="_blank" rel="noopener noreferrer">Zc 7.3</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τὸ ἁγίασμα · to hagiasma" data-transliteration="to hagiasma" data-meanings="o santo|a oferta santa?">τὸ ἁγίασμα</span> <strong>a (oferta) santa?</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="נזר/ה" data-transliteration="nzr/h" data-meanings="forma hebraica pressuposta pelo grego segundo o LEH">נזר/ה</bdi> ? por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="הנזר" data-transliteration="hnzr" data-meanings="abster-se; forma citada pelo LEH">הנזר</bdi> (<span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="inf. ni." data-tooltip-text="infinitivo nifal">inf. ni.</span>), <strong>guardar abstinências</strong>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/LEV.25.5" target="_blank" rel="noopener noreferrer">Lv 25.5</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="σταφυλὴν τοῦ ἁγιάσματος · staphylēn tou hagiasmatos" data-transliteration="staphylēn tou hagiasmatos" data-meanings="uvas de tua oferta santa?">σταφυλὴν τοῦ ἁγιάσματος</span> <strong>uvas de tua oferta santa?</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="נזרך ענבי" data-transliteration="nzrk ʿnby" data-meanings="uvas de tua oferta santa?; leitura refletida pelo grego segundo o LEH">נזרך ענבי</bdi> por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="נזירך ענבי" data-transliteration="nzyrk ʿnby" data-meanings="uvas separadas, retidas do cultivo?|uvas de teu nazireu?">נזירך ענבי</bdi> <strong>uvas separadas, retidas do cultivo?; ou uvas de teu nazireu?</strong></p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Êx 15.17; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.25.8" target="_blank" rel="noopener noreferrer">25.8</a>; Êx 28.36; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.29.6" target="_blank" rel="noopener noreferrer">29.6</a>,34.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol.?" data-tooltip-text="neologismo? — classificação dubitativa do LEH">neol.?</span> <strong>Cf.</strong> HARLÉ 1988, 178-181, 197 (Lv 25.5); → NIDNTT.</p>
    </section>
</article>

<article id="entry-hagiasmos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἁγιασμός</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγιασμός, -οῦ · hagiasmos" data-transliteration="hagiasmos" data-meanings="consagração|santificação">ἁγιασμός, -οῦ</span><span class="separator">·</span><span>substantivo masculino da 2ª declinação (N2M)</span><span class="separator">·</span><span>frequência LEH: 0-1-2-0-6=9</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>consagração, santificação</strong> (Jz<sup>A</sup> 17.3).</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/AMO.2.11" target="_blank" rel="noopener noreferrer">Am 2.11</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="εἰς ἁγιασμόν · eis hagiasmon" data-transliteration="eis hagiasmon" data-meanings="para consagração">εἰς ἁγιασμόν</span> <strong>para consagração</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="נזר/ל" data-transliteration="nzr/l" data-meanings="para consagração; forma pressuposta pelo grego segundo o LEH">נזר/ל</bdi> ? por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="נזרים/ל" data-transliteration="nzyrym/l" data-meanings="para nazireus">נזרים/ל</bdi> <strong>para nazireus</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> Jz<sup>A</sup> 17.3; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZE.45.4" target="_blank" rel="noopener noreferrer">Ez 45.4</a>; Am 2.11; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.2.17" target="_blank" rel="noopener noreferrer">2Mc 2.17</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.14.36" target="_blank" rel="noopener noreferrer">14.36</a>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span> → NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-hagiasterion-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἁγιαστήριον</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγιαστήριον, -ου · hagiasterion" data-transliteration="hagiasterion" data-meanings="lugar santo|santuário">ἁγιαστήριον, -ου</span><span class="separator">·</span><span>substantivo neutro da 2ª declinação (N2N)</span><span class="separator">·</span><span>frequência LEH: 1-0-0-3-0=4</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>lugar santo, santuário</strong>; <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/LEV.12.4" target="_blank" rel="noopener noreferrer">Lv 12.4</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.72.17" target="_blank" rel="noopener noreferrer">Sl 72(73).17</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.73.7" target="_blank" rel="noopener noreferrer">73(74).7</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.82.13" target="_blank" rel="noopener noreferrer">82(83).13</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> LEE, J. 1983, 52.</p>
    </section>
</article>

<article id="entry-hagiastia-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἁγιαστία</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγιαστία, -ας · hagiastia" data-transliteration="hagiastia" data-meanings="forma transmitida; corrigida pelo LEH para ἁγιστεία">ἁγιαστία, -ας</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-1=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="corr." data-tooltip-text="correção; a fonte propõe ou registra uma forma corrigida">corr.</span> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγιστεία · hagisteia" data-transliteration="hagisteia" data-meanings="rito|serviço">ἁγιστεία</span>: <strong>rito, serviço</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/4MA.7.9" target="_blank" rel="noopener noreferrer">4Mc 7.9</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> WALTERS 1973, 38.</p>
    </section>
</article>

<article id="entry-hagios-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἅγιος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἅγιος, -α, -ον · hagios" data-transliteration="hagios" data-meanings="sagrado|santo|puro">ἅγιος, -α, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 260-76-186-146-164=832</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>sagrado, santo</strong> (de coisas: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.3.5" target="_blank" rel="noopener noreferrer">Êx 3.5</a>); <strong>santo, puro</strong> (de pessoas: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.19.6" target="_blank" rel="noopener noreferrer">Êx 19.6</a>).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τὸ ἅγιον · to hagion" data-transliteration="to hagion" data-meanings="lugar santo|santuário|templo">τὸ ἅγιον</span>: <strong>lugar santo, santuário, templo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.26.33" target="_blank" rel="noopener noreferrer">Êx 26.33</a>); <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ὁ ἅγιος · ho hagios" data-transliteration="ho hagios" data-meanings="o Santo">ὁ ἅγιος</span>: <strong>o Santo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.77.41" target="_blank" rel="noopener noreferrer">Sl 77(78).41</a>).</p>
        <p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τὸ ἅγιον τῶν ἁγίων · to hagion tōn hagiōn" data-transliteration="to hagion tōn hagiōn" data-meanings="Santo dos Santos">τὸ ἅγιον τῶν ἁγίων</span>: <strong>Santo dos Santos</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.26.34" target="_blank" rel="noopener noreferrer">Êx 26.34</a>); <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="πόλις ἡ ἁγία · polis hē hagia" data-transliteration="polis hē hagia" data-meanings="Cidade Santa|Jerusalém">πόλις ἡ ἁγία</span>: <strong>a Cidade Santa, Jerusalém</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.11.1" target="_blank" rel="noopener noreferrer">Ne 11.1</a>).</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.35.35" target="_blank" rel="noopener noreferrer">Êx 35.35</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τοῦ ἁγίου · tou hagiou" data-transliteration="tou hagiou" data-meanings="do santuário">τοῦ ἁγίου</span> <strong>do santuário</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="קדשׁ" data-transliteration="qdš" data-meanings="santuário|santo">קדשׁ</bdi> por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="חרשׁ" data-transliteration="ḥrš" data-meanings="artífice">חרשׁ</bdi> <strong>de um artífice</strong>.</p>
        <p class="entry-text"><span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="*" data-tooltip-text="Marca do LEH para passagem em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição do hebraico, ou como erro na transmissão do texto grego">*</span><a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.27.1" target="_blank" rel="noopener noreferrer">Is 27.1</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγίαν · hagian" data-transliteration="hagian" data-meanings="santa">ἁγίαν</span> <strong>santa</strong> — <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="קדשׁה" data-transliteration="qdšh" data-meanings="santa; leitura pressuposta pelo grego segundo o LEH">קדשׁה</bdi> por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="קשׁה" data-transliteration="qšh" data-meanings="dura">קשׁה</bdi> <strong>dura</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Êx 3.5; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.12.16" target="_blank" rel="noopener noreferrer">Êx 12.16</a> (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.15.11" target="_blank" rel="noopener noreferrer">15.11</a>,13.</p>
        <p class="entry-text"><strong>Cf.</strong> BARR 1961, 282-286; DIHLE 1988, 1-63; DIMANT 1981, 136; FRIDRICHSEN 1916; GEHMAN 1954, 337-348; HARLÉ 1988, 30, 114-115, 123, 132-133, 178-181; MOTTE 1987, 137, 151; NUCHELMANS 1989, 239-258; WEVERS 1998, 96, 299; WILLIGER 1922, 85-88; WOLFSON 1947, 109-110; → NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-hagiotes-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἁγιότης</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγιότης, -ητος · hagiotēs" data-transliteration="hagiotēs" data-meanings="santidade|sacralidade">ἁγιότης, -ητος</span><span class="separator">·</span><span>substantivo feminino da 3ª declinação (N3F)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-0-1=1</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>santidade, sacralidade</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.15.2" target="_blank" rel="noopener noreferrer">2Mc 15.2</a>.</p>
        <p class="entry-text">→ NIDNTT; TWNT.</p>
    </section>
</article>

<article id="entry-hagiosyne-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἁγιωσύνη</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγιωσύνη, -ης · hagiōsynē" data-transliteration="hagiōsynē" data-meanings="santidade|sacralidade">ἁγιωσύνη, -ης</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-4-1=5</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>santidade, sacralidade</strong>; <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.29.5" target="_blank" rel="noopener noreferrer">Sl 29(30).5</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.95.6" target="_blank" rel="noopener noreferrer">95(96).6</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.96.12" target="_blank" rel="noopener noreferrer">96(97).12</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PSA.144.5" target="_blank" rel="noopener noreferrer">144(145).5</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2MA.3.12" target="_blank" rel="noopener noreferrer">2Mc 3.12</a>.</p>
        <p class="entry-text">→ NIDNTT; TWNT.</p>
    </section>
</article><article id="entry-ankale-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγκάλη</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγκάλη, -ης · ankalē" data-transliteration="ankalē" data-meanings="braço dobrado|abraço|colo">ἀγκάλη, -ης</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-2-0=3</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text"><strong>braço (dobrado), abraço</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.5.20" target="_blank" rel="noopener noreferrer">Pv 5.20</a>); <strong>colo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1KI.3.20" target="_blank" rel="noopener noreferrer">1Re 3.20</a>).</p><p class="entry-text"><strong>Ocorrências citadas:</strong> 1Re 3.20; Pv 5.20; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EST.5.1" target="_blank" rel="noopener noreferrer">Et 5.1</a>.</p></section></article>
<article id="entry-ankalizomai-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγκαλίζομαι</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγκαλίζομαι · ankalizomai" data-transliteration="ankalizomai" data-meanings="remissão do LEH ao composto com ἐν-">ἀγκαλίζομαι</span><span class="separator">·</span><span>verbo</span><span class="separator">·</span><span>sem estatística própria no LEH</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text">O LEH não fornece glossa ou estatística autônoma neste ponto; remete ao composto com <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἐν- · en-" data-transliteration="en-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">ἐν-</span>.</p></section></article>
<article id="entry-ankalis-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγκαλίς</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγκαλίς, -ῖδος · ankalis" data-transliteration="ankalis" data-meanings="braço|braçada|feixe|posse mínima">ἀγκαλίς, -ῖδος</span><span class="separator">·</span><span>substantivo feminino da 3ª declinação (N3F)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-0=1</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text"><strong>braço</strong>; <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγκαλίδα · ankalida" data-transliteration="ankalida" data-meanings="uma braçada|um feixe|a menor posse de alguém">ἀγκαλίδα</span>: <strong>uma braçada</strong> (por exemplo, um feixe ou molho de espigas); metaforicamente, <strong>a menor posse de alguém</strong>.</p><p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.24.19" target="_blank" rel="noopener noreferrer">Jó 24.19</a>.</p></section></article>
<article id="entry-ankistron-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἄγκιστρον</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄγκιστρον, -ου · ankistron" data-transliteration="ankistron" data-meanings="anzol|gancho">ἄγκιστρον, -ου</span><span class="separator">·</span><span>substantivo neutro da 2ª declinação (N2N)</span><span class="separator">·</span><span>frequência LEH: 0-1-3-1-0=5</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text"><strong>anzol, gancho</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2KI.19.28" target="_blank" rel="noopener noreferrer">2Re 19.28</a>).</p><p class="entry-text"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄξεις δὲ δράκοντα ἐν ἀγκίστρῳ · axeis de drakonta en ankistrō" data-transliteration="axeis de drakonta en ankistrō" data-meanings="mas apanharás a serpente com um anzol?">ἄξεις δὲ δράκοντα ἐν ἀγκίστρῳ</span>: <strong>mas apanharás a serpente com um anzol?</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.40.25" target="_blank" rel="noopener noreferrer">Jó 40.25</a>).</p><p class="entry-text"><strong>Ocorrências citadas:</strong> 2Re 19.28; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/ISA.19.8" target="_blank" rel="noopener noreferrer">Is 19.8</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZE.32.3" target="_blank" rel="noopener noreferrer">Ez 32.3</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/HAB.1.15" target="_blank" rel="noopener noreferrer">Hb 1.15</a>; Jó 40.25.</p></section></article>
<article id="entry-ankyle-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγκύλη</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγκύλη, -ης · ankylē" data-transliteration="ankylē" data-meanings="laço|argola|gancho">ἀγκύλη, -ης</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 9-0-0-0-0=9</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text"><strong>laço, argola</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.26.4" target="_blank" rel="noopener noreferrer">Êx 26.4</a>); <strong>gancho</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.37.15" target="_blank" rel="noopener noreferrer">Êx 37.15</a>).</p><p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Êx 26.4; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.26.5" target="_blank" rel="noopener noreferrer">26.5</a> (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.26.10" target="_blank" rel="noopener noreferrer">26.10</a> (bis).</p><p class="entry-text"><strong>Cf.</strong> LE BOULLUEC 1989, 361; WEVERS 1990, 615.</p></section></article>
<article id="entry-ankon-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγκών</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγκών, -ῶνος · ankōn" data-transliteration="ankōn" data-meanings="cotovelo|braço de um trono">ἀγκών, -ῶνος</span><span class="separator">·</span><span>substantivo masculino da 3ª declinação (N3M)</span><span class="separator">·</span><span>frequência LEH: 0-2-1-1-2=6</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text"><strong>cotovelo</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.31.22" target="_blank" rel="noopener noreferrer">Jó 31.22</a>); <strong>braço</strong> (de um trono: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2CH.9.18" target="_blank" rel="noopener noreferrer">2Cr 9.18</a>).</p><p class="entry-text"><strong>Ocorrências citadas:</strong> 2Cr 9.18 (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZE.13.18" target="_blank" rel="noopener noreferrer">Ez 13.18</a>; Jó 31.22; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/4MA.10.6" target="_blank" rel="noopener noreferrer">4Mc 10.6</a>.</p></section></article>
<article id="entry-ankonizo-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγκωνίζω</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγκωνίζω · ankōnizō" data-transliteration="ankōnizō" data-meanings="remissão do LEH ao composto com περι-">ἀγκωνίζω</span><span class="separator">·</span><span>verbo</span><span class="separator">·</span><span>sem estatística própria no LEH</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text">O LEH não fornece glossa ou estatística autônoma neste ponto; remete ao composto com <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="περι- · peri-" data-transliteration="peri-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">περι-</span>.</p></section></article>
<article id="entry-ankoniskos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἀγκωνίσκος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγκωνίσκος, -ου · ankōniskos" data-transliteration="ankōniskos" data-meanings="objeto dobrado ou curvo|articulação">ἀγκωνίσκος, -ου</span><span class="separator">·</span><span>substantivo masculino da 2ª declinação (N2M)</span><span class="separator">·</span><span>frequência LEH: 1-0-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text">Diminutivo de <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀγκών · ankōn" data-transliteration="ankōn" data-meanings="cotovelo|braço">ἀγκών</span>; <strong>qualquer coisa que seja dobrada ou curva; articulação</strong>; <span class="abbr-help tooltip-trigger" tabindex="0" data-tooltip-type="abbr" data-tooltip-label="neol." data-tooltip-text="neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta">neol.</span></p><p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.26.17" target="_blank" rel="noopener noreferrer">Êx 26.17</a>.</p><p class="entry-text"><strong>Cf.</strong> WEVERS 1990, 420-421.</p></section></article>
<article id="entry-hagneia-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁγνεία</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγνεία, -ας · hagneia" data-transliteration="hagneia" data-meanings="castidade|pureza do nazireu|pureza do templo">ἁγνεία, -ας</span><span class="separator">·</span><span>substantivo feminino da 1ª declinação (N1F)</span><span class="separator">·</span><span>frequência LEH: 2-1-0-0-1=4</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text"><strong>castidade, pureza</strong> (do nazireu: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NUM.6.2" target="_blank" rel="noopener noreferrer">Nm 6.2</a>); <strong>pureza</strong> (do templo: <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1MA.14.36" target="_blank" rel="noopener noreferrer">1Mc 14.36</a>).</p><p class="entry-text"><strong>Ocorrências citadas:</strong> Nm 6.2; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NUM.6.21" target="_blank" rel="noopener noreferrer">6.21</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2CH.30.19" target="_blank" rel="noopener noreferrer">2Cr 30.19</a>; 1Mc 14.36.</p><p class="entry-text"><strong>Cf.</strong> DORIVAL 1996, 543; WEVERS 1998, 94; → NIDNTT; TWNT.</p></section></article>
<article id="entry-hagnizo-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden><header class="entry-header"><div><h1 class="entry-title greek">ἁγνίζω</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἁγνίζω · hagnizō" data-transliteration="hagnizō" data-meanings="limpar|purificar|santificar|purificar-se">ἁγνίζω</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 7-20-2-0-5=34</span><span class="separator">·</span><span>também usado no NT (+)</span></div></div><div class="source-tag">LEH</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Tradução literal</div><p class="entry-text"><strong>Ativo:</strong> <strong>limpar, purificar</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τινα · tina" data-transliteration="tina" data-meanings="alguém; acusativo de pronome indefinido">τινα</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EXO.19.10" target="_blank" rel="noopener noreferrer">Êx 19.10</a>); <strong>santificar</strong> [<span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="τι · ti" data-transliteration="ti" data-meanings="algo; acusativo de pronome indefinido">τι</span>] (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/2CH.29.5" target="_blank" rel="noopener noreferrer">2Cr 29.5</a>).</p><p class="entry-text"><strong>Médio:</strong> <strong>purificar-se</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NUM.8.21" target="_blank" rel="noopener noreferrer">Nm 8.21</a>).</p><p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> Êx 19.10; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NUM.6.3" target="_blank" rel="noopener noreferrer">Nm 6.3</a>; Nm 8.21; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NUM.11.18" target="_blank" rel="noopener noreferrer">11.18</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NUM.19.12" target="_blank" rel="noopener noreferrer">19.12</a>.</p><p class="entry-text"><strong>Cf.</strong> DORIVAL 1996, 542-543; WEVERS 1990, 298; WEVERS 1998, 171; → NIDNTT; TWNT. Remissão da fonte: <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀφ- · aph-" data-transliteration="aph-" data-meanings="prefixo indicado pelo LEH; ver composto correspondente">ἀφ-</span>.</p></section></article>`
};
