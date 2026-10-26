"use strict";

/* ==========================================================
   FONTES LEXICOGRÁFICAS EXTERNAS
   ========================================================== */

/*
 * Cada fonte pode registrar seus próprios blocos de linhas, cartões e
 * abreviaturas em window.ScripturaLexicons antes da carga deste arquivo.
 * Os fragmentos são montados de forma síncrona porque os arquivos de fonte
 * são carregados antes de script.js no fim do <body>.
 *
 * Isso permite que BDAG e LEH sejam editados em branches independentes
 * sem disputar os mesmos blocos de index.html ou o registro bibliográfico
 * comum.
 */
const externalLexiconSources = [];
const mountedLengths = new WeakMap();
// Os módulos são montados em pequenos lotes quando o navegador está livre.
function ingestScripturaLexicons() {
    let newRows = 0;
    let newSource = false;
    const known = new Set(Array.from(sourceFilter.options, x => x.value));
    Object.values(window.ScripturaLexicons || {}).forEach(function(source) {
        if (!source?.searchAnchorId || !source?.entryAnchorId) return;
        if (!externalLexiconSources.includes(source)) externalLexiconSources.push(source);
        const rowAnchor = document.getElementById(source.searchAnchorId);
        const cardAnchor = document.getElementById(source.entryAnchorId);
        if (!rowAnchor || !cardAnchor) return;
        const old = mountedLengths.get(source) || {r: 0, c: 0};
        const rows = source.rowsHtml || "", cards = source.cardsHtml || "";
        const rd = rows.slice(old.r), cd = cards.slice(old.c);
        let rowStart = null, cardStart = null;
        if (rd) {
            rowStart = rowAnchor.previousElementSibling;
            rowAnchor.insertAdjacentHTML("beforebegin", rd);
        }
        if (cd) {
            cardStart = cardAnchor.previousElementSibling;
            cardAnchor.insertAdjacentHTML("beforebegin", cd);
        }
        mountedLengths.set(source, {r: rows.length, c: cards.length});
        if (cd) {
            let node = cardStart ? cardStart.nextElementSibling : cardAnchor.parentElement.firstElementChild;
            while (node && node !== cardAnchor) {
                const next = node.nextElementSibling;
                if (node.classList.contains("entry-card")) {
                    node.hidden = true;
                    if (!node.dataset.dictionary) node.dataset.dictionary = "grego";
                    const tag = node.querySelector(".source-tag");
                    if (tag) tag.dataset.source = tag.textContent.trim().toUpperCase();
                    entryCards.push(node);
                }
                node = next;
            }
        }
        if (rd) {
            let node = rowStart ? rowStart.nextElementSibling : rowAnchor.parentElement.firstElementChild;
            while (node && node !== rowAnchor) {
                const next = node.nextElementSibling;
                if (node.classList.contains("search-row")) {
                    node.hidden = true;
                    const dictionary = node.dataset.dictionary || "grego";
                    node.dataset.dictionary = dictionary;
                    searchRows.push(node);
                    if (!rowsByDictionary.has(dictionary)) rowsByDictionary.set(dictionary, []);
                    rowsByDictionary.get(dictionary).push(node);
                    const pill = node.querySelector(".source-pill");
                    if (pill) pill.dataset.source = pill.textContent.trim().toUpperCase();
                    if (dictionary === activeDictionary && !known.has(node.dataset.source)) newSource = true;
                    // Índice integral do DGP: mesma definição publicada no cartão.
                    if (node.dataset.source === "DGP" && node.dataset.dgpFullTextIndexed !== "true") {
                        const card = document.getElementById(node.dataset.target || "");
                        const definition = card?.querySelector(".entry-section .entry-text");
                        if (definition) {
                            node.dataset.search = ((node.dataset.search || "") + " " +
                                (definition.textContent || "").trim()).trim();
                            node.dataset.dgpFullTextIndexed = "true";
                        }
                    }
                    newRows++;
                }
                node = next;
            }
        }
    });
    if (newSource) populateSourceFilter();
    else if (newRows && sourceFilter.value) updateSourceDetails();
    if (newRows && searchInput.value.trim()) filterEntries();
    return newRows;
}
window.ScripturaIngestLexicons = ingestScripturaLexicons;
window.ScripturaGetActiveDictionary = () => activeDictionary;

/* As etiquetas usam a mesma cor por fonte, mesmo nos módulos externos. */
document.querySelectorAll(".source-pill, .source-tag").forEach(function (label) {
    const sourceName = label.textContent.trim().toUpperCase();

    if (sourceName) {
        label.dataset.source = sourceName;
    }
});


const searchInput = document.getElementById("search-input");
const sourceFilter = document.getElementById("source-filter");
const sourceFilterBox = document.querySelector(".source-filter-box");
const sourceCombobox = document.getElementById("source-combobox");
const sourceFilterButton = document.getElementById("source-filter-button");
const sourceFilterLabel = document.getElementById("source-filter-label");
const sourceFilterOptions = document.getElementById("source-filter-options");

let activeSourceOptionIndex = 0;
let sourceTypeahead = "";
let sourceTypeaheadTime = 0;
const searchTableWrapper = document.getElementById("search-table-wrapper");

const sourceDetails = document.getElementById("source-details");
const sourceCover = document.getElementById("source-cover");
const sourceCoverImage = document.getElementById("source-cover-image");
const sourceCoverPlaceholder = document.getElementById("source-cover-placeholder");
const sourceDetailsReference = document.getElementById("source-details-reference");
const entryNavigation = document.getElementById("entry-navigation");
const entryNavigationCount = document.getElementById("entry-navigation-count");
const backToResults = document.getElementById("back-to-results");
let lastOpenedRow = null;


const searchRows = Array.from(
    document.querySelectorAll(".search-row")
);

const entryCards = Array.from(
    document.querySelectorAll(".entry-card")
);

const searchCount = document.getElementById("search-count");
const searchPagination = document.getElementById("search-pagination");
const RESULTS_PER_PAGE = 10;
let searchMatches = {ids:[], total:0};
let pageGeneration = 0;
let currentResultsPage = 1;

const rowsByDictionary = new Map();
const normalizedSearchCache = new WeakMap();
let openedEntryCard = null;

// Índices de apresentação, sem alteração do conteúdo dos verbetes.
searchRows.forEach(function (row) {
    const dictionary = row.dataset.dictionary || "grego";
    if (!rowsByDictionary.has(dictionary)) {
        rowsByDictionary.set(dictionary, []);
    }
    rowsByDictionary.get(dictionary).push(row);
});
const noResults = document.getElementById("no-results");

const dictionaryTitle = document.getElementById("dictionary-title");
const dictionaryDescription = document.getElementById("dictionary-description");

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const dictionaryMenu = document.getElementById("dictionary-menu");
const menuBackdrop = document.getElementById("menu-backdrop");

const dictionaryOptions = Array.from(
    document.querySelectorAll(".dictionary-option")
);
const themeInputs = Array.from(
    document.querySelectorAll('input[name="site-theme"]')
);
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

const lexicalTooltip = document.getElementById("lexical-tooltip");

let tooltipTriggers = [];

const dictionaries = {
    hebraico: {
        title: "Hebraico–Português",
        description: "Léxico hebraico com tradução, referências e análise em português.",
        placeholder: "Pesquisar no dicionário hebraico–português..."
    },

    aramaico: {
        title: "Aramaico–Português",
        description: "Léxico aramaico com tradução, referências e análise em português.",
        placeholder: "Pesquisar no dicionário aramaico–português..."
    },

    grego: {
        title: "Grego–Português",
        description: "Léxico grego com tradução, referências e análise em português.",
        placeholder: "Pesquisar no dicionário grego–português..."
    },

    latim: {
        title: "Latim–Português",
        description: "Léxico latino com tradução, referências e análise em português.",
        placeholder: "Pesquisar no dicionário latim–português..."
    }
};

let activeDictionary = "grego";
let activeTooltipTrigger = null;


/* ==========================================================
   REFERÊNCIAS BÍBLICAS
   ========================================================== */

const bibleBookNames = {
    GEN: "Gênesis",
    EXO: "Êxodo",
    LEV: "Levítico",
    NUM: "Números",
    DEU: "Deuteronômio",
    JOS: "Josué",
    JDG: "Juízes",
    RUT: "Rute",
    "1SA": "1 Samuel",
    "2SA": "2 Samuel",
    "1KI": "1 Reis",
    "2KI": "2 Reis",
    "1CH": "1 Crônicas",
    "2CH": "2 Crônicas",
    EZR: "Esdras",
    NEH: "Neemias",
    EST: "Ester",
    JOB: "Jó",
    PSA: "Salmos",
    PRO: "Provérbios",
    ECC: "Eclesiastes",
    SNG: "Cântico dos Cânticos",
    ISA: "Isaías",
    JER: "Jeremias",
    LAM: "Lamentações",
    EZK: "Ezequiel",
    DAN: "Daniel",
    HOS: "Oseias",
    JOL: "Joel",
    AMO: "Amós",
    OBA: "Obadias",
    JON: "Jonas",
    MIC: "Miqueias",
    NAM: "Naum",
    HAB: "Habacuque",
    ZEP: "Sofonias",
    HAG: "Ageu",
    ZEC: "Zacarias",
    MAL: "Malaquias",

    TOB: "Tobias",
    JDT: "Judite",
    WIS: "Sabedoria",
    SIR: "Eclesiástico (Sirácida)",
    BAR: "Baruc",
    "1MA": "1 Macabeus",
    "2MA": "2 Macabeus",
    "3MA": "3 Macabeus",
    "4MA": "4 Macabeus",
    "1ES": "1 Esdras",
    "2ES": "2 Esdras",

    MAT: "Mateus",
    MRK: "Marcos",
    LUK: "Lucas",
    JHN: "João",
    ACT: "Atos dos Apóstolos",
    ROM: "Romanos",
    "1CO": "1 Coríntios",
    "2CO": "2 Coríntios",
    GAL: "Gálatas",
    EPH: "Efésios",
    PHP: "Filipenses",
    COL: "Colossenses",
    "1TH": "1 Tessalonicenses",
    "2TH": "2 Tessalonicenses",
    "1TI": "1 Timóteo",
    "2TI": "2 Timóteo",
    TIT: "Tito",
    PHM: "Filemom",
    HEB: "Hebreus",
    JAS: "Tiago",
    "1PE": "1 Pedro",
    "2PE": "2 Pedro",
    "1JN": "1 João",
    "2JN": "2 João",
    "3JN": "3 João",
    "1JO": "1 João",
    "2JO": "2 João",
    "3JO": "3 João",
    JUD: "Judas",
    REV: "Apocalipse"
};

const bibleEditionNames = {
    BHS: "Bíblia Hebraica (BHS)",
    LXX: "Septuaginta (LXX)",
    NA28: "Novo Testamento grego (NA28)"
};


function enrichBibleReferenceTooltips(card) {
    const links = Array.from(card.querySelectorAll('a.reference-link[href*="die-bibel.de/en/bible/"]'));

    links.forEach(function (link) {
        const href =
            link.getAttribute("href") || "";

        const match =
            href.match(
                /\/bible\/(BHS|LXX|NA28)\/([0-9A-Z]+)\./i
            );

        if (!match) {
            return;
        }

        const editionCode =
            match[1].toUpperCase();

        const bookCode =
            match[2].toUpperCase();

        const bookName =
            bibleBookNames[bookCode] ||
            bookCode;

        const editionName =
            bibleEditionNames[editionCode] ||
            editionCode;

        link.classList.add(
            "tooltip-trigger"
        );

        link.dataset.tooltipType =
            "bible";

        link.dataset.tooltipLabel =
            bookName;

        link.dataset.tooltipText =
            editionName;
    });
}



/* ==========================================================
   POPUPS BIBLIOGRÁFICOS E ABREVIATURAS
   ========================================================== */

/*
 * Este registro contém somente expansões que podem ser determinadas
 * com segurança pelas listas de abreviaturas das fontes já usadas
 * no projeto ou por dados bibliográficos explicitamente presentes
 * nos próprios verbetes.
 *
 * Siglas ambíguas de uma única letra (por exemplo, D, M, N ou S)
 * NÃO são tratadas globalmente. Elas só devem receber popup quando
 * o contexto editorial permitir uma identificação inequívoca.
 */
const automaticBibliographicTerms = [
    { key: "Wlh.", type: "biblio", text: "J. Wellhausen, Einleitung — abreviação bibliográfica do BDAG" },
    { key: "Rossberg", type: "biblio", text: "C. Rossberg, De praepositionum Graecarum in chartis Aegyptiis Ptolemaeorum aetatis usu, diss. Jena, 1909" },
    { key: "Schürer", type: "biblio", text: "E. Schürer, The History of the Jewish People in the Age of Jesus Christ (175 b.c.–a.d. 135), versão inglesa nova e revista de Geschichte des jüdischen Volkes, 3 vols. em 4, 1973–87" },
    { key: "Mlt.", type: "biblio", text: "J. H. Moulton; no BDAG, quando seguida apenas de página, a abreviação remete a A Grammar of New Testament Greek, vol. I: Prolegomena, 1908" },
    { key: "Mayser", type: "biblio", text: "E. Mayser, Grammatik der griechischen Papyri aus der Ptolemäerzeit, 2 vols.; no BDAG, o primeiro volume pode ser citado sem indicação de volume" },
    { key: "Crönert", type: "biblio", text: "W. Crönert, Memoria Graeca Herculanensis, 1903" },
    { key: "Thackeray", type: "biblio", text: "H. St. J. Thackeray, A Grammar of the Old Testament in Greek according to the Septuagint" },
    { key: "Dssm.", type: "biblio", text: "A. Deissmann; no BDAG, B = Bibelstudien (1895), NB = Neue Bibelstudien (1897), BS = Bible Studies (1901) e LO = Licht vom Osten" },
    { key: "Reinhold", type: "biblio", text: "H. Reinhold, De graecitate patrum apostolicorum librorumque apocryphorum NTi quaestiones grammaticae, diss. Phil. Hal. XIV/1 (1898), 1–115" },
    { key: "IPergamon", type: "biblio", text: "Die Inschriften von Pergamon, ed. M. Fränkel, 1890 e 1895" },
    { key: "IAndrosIsis", type: "biblio", text: "Der Isishymnus von Andros und verwandte Texte; inclui textos de Andros, Cirene, Ios, Kyme e o hino de Ísis de Mesomedes" },
    { key: "PCorn", type: "biblio", text: "Greek Papyri in the Library of Cornell University, ed. W. Westermann e C. Kraemer Jr., 1926" },
    { key: "PECS", type: "biblio", text: "Princeton Encyclopedia of Classical Sites" },
    { key: "PThéad", type: "biblio", text: "Papyrus de Théadelphie, ed. P. Jouguet, 1911" },
    { key: "Mel.", type: "biblio", text: "Melito de Sardes, séc. II d.C." },
    { key: "Jac.", type: "biblio", text: "F. Jacoby, Die Fragmente der griechischen Historiker, 1923ss." },
    { key: "NouvRT", type: "biblio", text: "Nouvelle revue théologique, 1869ss." },
    { key: "BKT", type: "biblio", text: "Berliner Klassikertexte, 7 vols., 1904–1939" },
    { key: "CIL", type: "biblio", text: "Corpus Inscriptionum Latinarum, iniciado por T. Mommsen, 1863ss." },
    { key: "Rouffiac", type: "biblio", text: "J. Rouffiac, Recherches sur les caractères du Grec dans le NT d’après les inscriptions de Priène, 1911" },
    { key: "IPriene", type: "biblio", text: "Die Inschriften von Priene, ed. H. von Gaertringen, 1906" },
    { key: "ByzZ", type: "biblio", text: "Byzantinische Zeitschrift, 1892ss." },
    { key: "ATR", type: "biblio", text: "Anglican Theological Review, 1918ss." },
    { key: "JAC", type: "biblio", text: "Jahrbuch für Antike und Christentum, 1958ss." },
    { key: "Rdm.", type: "biblio", text: "L. Radermacher, Neutestamentliche Grammatik" },
    { key: "Dalman", type: "biblio", text: "Gustaf Dalman; no BDAG, entre outras obras, Die Worte Jesu e Jesus-Jeschua" },
    { key: "Boffo", type: "biblio", text: "L. Boffo, Iscrizioni greche e latine per lo studio della bibbia, 1994" },
    { key: "IKosPH", type: "biblio", text: "The Inscriptions of Cos, ed. W. Paton / E. Hicks, 1891" },
    { key: "EncBibl", type: "biblio", text: "Encyclopaedia Biblica, ed. T. Cheyne e J. Black, 4 vols., 1899–1903" },
    { key: "Kaibel", type: "biblio", text: "Epigrammata Graeca ex Lapidibus Conlecta, ed. G. Kaibel, 1878" },
    { key: "PtK", type: "biblio", text: "Petruskerygma — Preaching of Peter (Pregação de Pedro)" },
    { key: "Agr", type: "biblio", text: "Agraphon; E. Preuschen, Antilegomena² (1905), 26–31: Herrenlose Herrnworte — ditos não canônicos atribuídos a Jesus" },
    { key: "JHS", type: "biblio", text: "Journal of Hellenic Studies" },
    { key: "ClR", type: "biblio", text: "Classical Review" },
    { key: "IAsMinLyk", type: "biblio", text: "Reisen im südwestlichen Kleinasien I: Reisen in Lykien und Karien, ed. O. Benndorf / G. Niemann, 1884; II: Lykien, Milyas und Kibyratis, ed. E. Petersen / F. von Luschan, 1889" },
    { key: "PVindobBosw", type: "biblio", text: "Einige Wiener Papyri, ed. E. Boswinkel, 1942" },
    { key: "PMert", type: "biblio", text: "A Descriptive Catalogue of the Greek Papyri in the Collection of Wilfred Merton I–III, vários editores, 1948–1967" },
    { key: "PFrankf", type: "biblio", text: "Griechische Papyri aus Frankfurt, ed. H. Lewald, 1920" },
    { key: "PLeid", type: "biblio", text: "Papyri Graeci Musei Antiquarii Publici Lugduni-Batavi" },
    { key: "ApcPt Bodl.", type: "biblio", text: "Apocalypse of Peter, Bodleian; M. R. James, Additional Notes on the Apocalypse of Peter, JTS 12 (1910–1911), 157; 367–369" },
    { key: "ISBE", type: "biblio", text: "International Standard Bible Encyclopedia, edição revista" },
    { key: "PBour", type: "biblio", text: "Les Papyrus Bouriant, ed. P. Collart, 1926" },
    { key: "CPR", type: "biblio", text: "Corpus Papyrorum Raineri" },
    { key: "P72", type: "biblio", text: "Papyrus Bodmer VII–IX" },
    { key: "MPG", type: "biblio", text: "Migne, Patrologia Graeca" },
    { key: "AcPl Ant", type: "biblio", text: "Acta Pauli, P. Antinoopolis 13, em The Antinoopolis Papyri I, ed. C. H. Roberts, 1950, pp. 26–28" },
    { key: "Aa", type: "biblio", text: "Acta apostolorum apocrypha — Atos apócrifos dos apóstolos" },
    { key: "PFlor", type: "biblio", text: "Papiri Fiorentini I–III, vários editores, 1906–1915" },
    { key: "Mlt-H.", type: "biblio", text: "J. H. Moulton / W. F. Howard, A Grammar of New Testament Greek II: Accidence and Word-Formation" },
    { key: "W.-S.", type: "biblio", text: "G. Winer, Grammatik des neutestamentlichen Sprachidioms, 8ª edição por P. Schmiedel" },
    { key: "Qua", type: "biblio", text: "Fragmento de Quadrato; Die Ältesten Apologeten, ed. E. J. Goodspeed, 1911, p. 1; também Bihlmeyer" },
    { key: "AcPt Ox 849", type: "biblio", text: "Acta Petri, P. Oxy. 849" },
    { key: "Lghtf.", type: "biblio", text: "J. B. Lightfoot" },
    { key: "Schwyzer", type: "biblio", text: "E. Schwyzer, Griechische Grammatik, 3 vols., 1950–1953" },
    { key: "PTurin", type: "biblio", text: "Papyri graeci Regii Taurinensis Musei Aegyptii, ed. A. Peyron, 1827–1829" },
    { key: "Mlt-Turner", type: "biblio", text: "J. H. Moulton / N. Turner, A Grammar of New Testament Greek III: Syntax; IV: Style" },
    { key: "Pfuhl-Möbius", type: "biblio", text: "E. Pfuhl / H. Möbius, Die ostgriechischen Grabreliefs, 2 vols., 1977–1979" },
    { key: "CTM", type: "biblio", text: "Concordia Theological Monthly" },
    { key: "ClJ", type: "biblio", text: "Classical Journal (Chicago)" },
    { key: "CPJ", type: "biblio", text: "Corpus Papyrorum Judaicarum" },
    { key: "TestAdam", type: "biblio", text: "Testamento de Adão; edição de S. Robinson (1982)" },
    { key: "Preis.", type: "biblio", text: "F. Preisigke, Wörterbuch der griechischen Papyrusurkunden, vols. I–IV e suplementos" },
    { key: "Michel", type: "biblio", text: "C. Michel, Recueil d’inscriptions grecques (1900; suplemento 1912)" },
    { key: "Kühner-Bl.", type: "biblio", text: "R. Kühner, Ausführliche Grammatik der griechischen Sprache, 3ª ed., revisão de F. Blass" },
    { key: "N25", type: "biblio", text: "Nestle–Aland, Novum Testamentum Graece, 25ª edição" },
    { key: "N. T.", type: "abbr", text: "Novo Testamento" },
    { key: "NT", type: "abbr", text: "Novo Testamento" },
    { key: "OT", type: "abbr", text: "Antigo Testamento" },
    { key: "LXX", type: "abbr", text: "Septuaginta — tradução grega do Antigo Testamento" },
    { key: "Sept.", type: "abbr", text: "Septuaginta" },
    { key: "Heb.", type: "abbr", text: "hebraico" },
    { key: "Chald.", type: "abbr", text: "caldaico — terminologia histórica da fonte" },
    { key: "Aram.", type: "abbr", text: "aramaico" },
    { key: "Syr.", type: "abbr", text: "siríaco" },
    { key: "Lat.", type: "abbr", text: "latim" },
    { key: "Gr.", type: "abbr", text: "grego" },

    { key: "q.v.", type: "abbr", text: "quod vide — veja o verbete ou item mencionado" },
    { key: "s.v.", type: "abbr", text: "sub voce — sob esta palavra; consulte o verbete" },
    { key: "v.l.", type: "abbr", text: "varia lectio — leitura variante" },
    { key: "ibid.", type: "abbr", text: "ibidem — no mesmo lugar ou na mesma obra anteriormente citada" },
    { key: "ad loc.", type: "abbr", text: "ad locum — no lugar ou passagem citada" },
    { key: "cf.", type: "abbr", text: "compare; compare-se" },
    { key: "coll.", type: "abbr", text: "collato / collatis — compare; confronte com" },
    { key: "e.g.", type: "abbr", text: "exempli gratia — por exemplo" },
    { key: "i.e.", type: "abbr", text: "id est — isto é" },
    { key: "viz.", type: "abbr", text: "videlicet — a saber; isto é" },

    { key: "SEG", type: "biblio", text: "Supplementum Epigraphicum Graecum; série epigráfica iniciada por J. Hondius em 1923" },
    { key: "POxy", type: "biblio", text: "The Oxyrhynchus Papyri" },
    { key: "PGM", type: "biblio", text: "Papyri Graecae Magicae — Papiros Mágicos Gregos" },
    { key: "BGU", type: "biblio", text: "Aegyptische Urkunden aus den Königlichen/Staatlichen Museen zu Berlin: Griechische Urkunden" },
    { key: "CIG", type: "biblio", text: "Corpus Inscriptionum Graecarum" },
    { key: "OGI", type: "biblio", text: "Orientis Graeci Inscriptiones Selectae" },
    { key: "SIG", type: "biblio", text: "Sylloge Inscriptionum Graecarum, 3ª edição, ed. W. Dittenberger" },
    { key: "UPZ", type: "biblio", text: "Urkunden der Ptolemäerzeit, ed. U. Wilcken" },
    { key: "PGen", type: "biblio", text: "Les Papyrus de Genève" },
    { key: "PRyl", type: "biblio", text: "Catalogue of the Greek Papyri in the John Rylands Library, Manchester" },
    { key: "PCairMasp", type: "biblio", text: "Papyrus grecs d’époque byzantine, ed. J. Maspero" },
    { key: "PWarr", type: "biblio", text: "The Warren Papyri" },
    { key: "PLond", type: "biblio", text: "Greek Papyri in the British Museum (P. London)" },
    { key: "PLips", type: "biblio", text: "Griechische Urkunden der Papyrussammlung zu Leipzig, ed. L. Mitteis" },
    { key: "PGrenf", type: "biblio", text: "Greek Papyri, ed. B. P. Grenfell; coleção papirológica citada pelo BDAG" },
    { key: "Mitt-Wilck.", type: "biblio", text: "L. Mitteis / U. Wilcken, Grundzüge und Chrestomathie der Papyruskunde, 1912" },
    { key: "StudPal", type: "biblio", text: "Studien zur Paläographie und Papyrusurkunde, ed. C. Wessely" },
    { key: "IPontEux", type: "biblio", text: "Inscriptiones antiquae orae septentrionalis Ponti Euxini Graecae et Latinae" },
    { key: "Sb", type: "biblio", text: "Sammelbuch griechischer Urkunden aus Aegypten" },

    { key: "ETL", type: "biblio", text: "Ephemerides Theologicae Lovanienses" },
    { key: "ET", type: "biblio", text: "Expository Times" },
    { key: "JBL", type: "biblio", text: "Journal of Biblical Literature" },
    { key: "JTS", type: "biblio", text: "Journal of Theological Studies" },
    { key: "JR", type: "biblio", text: "Journal of Religion" },
    { key: "JSOR", type: "biblio", text: "Journal of the Society of Oriental Research" },
    { key: "ZNW", type: "biblio", text: "Zeitschrift für die neutestamentliche Wissenschaft" },
    { key: "NTS", type: "biblio", text: "New Testament Studies" },
    { key: "PTR", type: "biblio", text: "Princeton Theological Review" },
    { key: "StKr", type: "biblio", text: "Theologische Studien und Kritiken" },
    { key: "ConNeot", type: "biblio", text: "Coniectanea Neotestamentica" },
    { key: "SBBerlAk", type: "biblio", text: "Sitzungsberichte der Preussischen Akademie der Wissenschaften, Berlin" },
    { key: "RivFil", type: "biblio", text: "Rivista di filologia e d’istruzione classica" },
    { key: "Aegyptus", type: "biblio", text: "Aegyptus: Rivista Italiana di Egittologia e di papirologia" },
    { key: "EvTh", type: "biblio", text: "Evangelische Theologie" },
    { key: "SymbOsl", type: "biblio", text: "Symbolae Osloenses" },
    { key: "ThStud", type: "biblio", text: "Theologische Studien; abreviação remetida pelo BDAG a TSt/ThSt" },
    { key: "RevArch", type: "biblio", text: "Revue archéologique" },
    { key: "RevExp", type: "biblio", text: "Review and Expositor" },
    { key: "ZKG", type: "biblio", text: "Zeitschrift für Kirchengeschichte" },
    { key: "RAC", type: "biblio", text: "Reallexikon für Antike und Christentum" },
    { key: "TRE", type: "biblio", text: "Theologische Realenzyklopädie" },
    { key: "EDNT", type: "biblio", text: "Exegetical Dictionary of the New Testament" },
    { key: "PJ", type: "biblio", text: "Preussische Jahrbücher" },
    { key: "NGG", type: "biblio", text: "Nachrichten der Gesellschaft der Wissenschaften zu Göttingen, Philologisch-historische Klasse" },
    { key: "AJT", type: "biblio", text: "American Journal of Theology" },
    { key: "RB", type: "biblio", text: "Revue Biblique" },

    { key: "DELG", type: "biblio", text: "P. Chantraine, Dictionnaire étymologique de la langue grecque: histoire des mots" },
    { key: "DGE", type: "biblio", text: "Diccionario Griego-Español, ed. F. Adrados et al." },
    { key: "L-S-J-M", type: "biblio", text: "H. Liddell e R. Scott, A Greek-English Lexicon; nova edição por H. S. Jones e R. McKenzie" },
    { key: "B-D-F", type: "biblio", text: "F. Blass / A. Debrunner; tradução e revisão inglesa de R. Funk, A Greek Grammar of the New Testament and Other Early Christian Literature" },
    { key: "M-M", type: "biblio", text: "J. H. Moulton e G. Milligan, The Vocabulary of the Greek Testament" },
    { key: "TW", type: "biblio", text: "Theologisches Wörterbuch zum Neuen Testament; tradução inglesa: Theological Dictionary of the New Testament" },
    { key: "Spicq", type: "biblio", text: "C. Spicq, Lexique théologique du Nouveau Testament; tradução inglesa: Theological Lexicon of the New Testament" },
    { key: "Rob.", type: "biblio", text: "A. T. Robertson, A Grammar of the Greek New Testament in the Light of Historical Research, 4ª edição, 1923" },
    { key: "W-S.", type: "biblio", text: "G. Winer, Grammatik des neutestamentlichen Sprachidioms, 8ª edição por P. Schmiedel" },
    { key: "Hdb.", type: "biblio", text: "Handbuch; em referência a um livro específico do NT, comentário da série Handbuch zum Neuen Testament, fundada por H. Lietzmann" },
    { key: "Ltzm.", type: "biblio", text: "H. Lietzmann, comentarista e editor; abreviação conforme a lista do BDAG" },
    { key: "Goodsp.", type: "biblio", text: "E. J. Goodspeed; sem título especificado, o BDAG remete a The New Testament: An American Translation" },
    { key: "Rtzst.", type: "biblio", text: "R. Reitzenstein" },
    { key: "Mlt.-H.", type: "biblio", text: "J. H. Moulton / W. F. Howard, A Grammar of New Testament Greek II: Accidence and Word-Formation" },
    { key: "Mlt.-H", type: "biblio", text: "J. H. Moulton / W. F. Howard, A Grammar of New Testament Greek II: Accidence and Word-Formation" },

    { key: "W-H.", type: "biblio", text: "B. F. Westcott e F. J. A. Hort, edição do Novo Testamento grego, 1881" },
    { key: "Bov.", type: "biblio", text: "J. M. Bover, edição do Novo Testamento grego; 1943, 5ª edição 1968" },
    { key: "Tdf.", type: "biblio", text: "C. von Tischendorf, editio octava critica maior, 1869–1872" },
    { key: "Vog.", type: "biblio", text: "H. J. Vogels, edição do Novo Testamento grego; 1922, 4ª edição 1955" },
    { key: "t.r.", type: "abbr", text: "textus receptus — Texto Recebido" },

    { key: "New Docs", type: "biblio", text: "New Documents Illustrating Early Christianity" },
    { key: "SSol", type: "biblio", text: "Cântico dos Cânticos — sigla Song of Solomon na lista do BDAG" },
    { key: "PsSol", type: "biblio", text: "Salmos de Salomão" },
    { key: "SibOr", type: "biblio", text: "Oracula Sibyllina — Oráculos Sibilinos" },
    { key: "TestAbr", type: "biblio", text: "Testamento de Abraão" },
    { key: "Test12Patr", type: "biblio", text: "Testamentos dos Doze Patriarcas" },
    { key: "TestSol", type: "biblio", text: "Testamento de Salomão" },
    { key: "TestJob", type: "biblio", text: "Testamento de Jó" },
    { key: "TestBenj", type: "biblio", text: "Testamento de Benjamim" },
    { key: "TestLevi", type: "biblio", text: "Testamento de Levi" },
    { key: "TestNapht", type: "biblio", text: "Testamento de Naftali" },
    { key: "ApcEsdr", type: "biblio", text: "Apocalipse de Esdras" },
    { key: "ApcMos", type: "biblio", text: "Apocalipse de Moisés — também conhecido como Vida de Adão e Eva" },
    { key: "ApcSed", type: "biblio", text: "Apocalipse de Sedrac" },
    { key: "ApcrEzk", type: "biblio", text: "Apócrifo de Ezequiel" },
    { key: "ApcPt", type: "biblio", text: "Apocalipse de Pedro" },
    { key: "AscIs", type: "biblio", text: "Ascensão de Isaías" },
    { key: "EpArist", type: "biblio", text: "Carta de Aristeias" },
    { key: "JosAs", type: "biblio", text: "José e Asenete" },
    { key: "ParJer", type: "biblio", text: "Paralipômenos de Jeremias" },
    { key: "GEb", type: "biblio", text: "Evangelho dos Ebionitas" },
    { key: "GPt", type: "biblio", text: "Evangelho de Pedro" },
    { key: "AcPl BMM", type: "biblio", text: "Atos de Paulo, reconstruídos em parte a partir de diversos papiros de Berlim e Michigan" },
    { key: "AcPl Ha", type: "biblio", text: "Atos de Paulo, papiro de Hamburgo" },
    { key: "AcPl", type: "biblio", text: "Atos de Paulo" },
    { key: "AcPlTh", type: "biblio", text: "Atos de Paulo e Tecla" },
    { key: "TestJos", type: "biblio", text: "Testamento de José" },
    { key: "TestAsh", type: "biblio", text: "Testamento de Aser" },
    { key: "TestReub", type: "biblio", text: "Testamento de Rúben" },
    { key: "TestGad", type: "biblio", text: "Testamento de Gade" },
    { key: "Pel.-Leg.", type: "biblio", text: "Legenden der heiligen Pelagia — Lendas de Santa Pelágia" },
    { key: "GTh", type: "biblio", text: "Evangelho de Tomé" },

    { key: "1 Cl", type: "biblio", text: "Primeira Epístola de Clemente" },
    { key: "2 Cl", type: "biblio", text: "Segunda Epístola de Clemente" },
    { key: "IEph", type: "biblio", text: "Inácio aos Efésios" },
    { key: "IMg", type: "biblio", text: "Inácio aos Magnésios" },
    { key: "IPhld", type: "biblio", text: "Inácio aos Filadélfios" },
    { key: "IRo", type: "biblio", text: "Inácio aos Romanos" },
    { key: "ISm", type: "biblio", text: "Inácio aos Esmirnenses" },
    { key: "ITr", type: "biblio", text: "Inácio aos Tralianos" },
    { key: "IPol", type: "biblio", text: "Inácio a Policarpo" },
    { key: "MPol", type: "biblio", text: "Martírio de Policarpo" },
    { key: "Hm", type: "biblio", text: "Pastor de Hermas, Mandamentos" },
    { key: "Hs", type: "biblio", text: "Pastor de Hermas, Similitudes" },
    { key: "Hv", type: "biblio", text: "Pastor de Hermas, Visões" },

    { key: "Mor.", type: "biblio", text: "Moralia, de Plutarco" },
    { key: "HP", type: "biblio", text: "Historia Plantarum, de Teofrasto" },
    { key: "PE", type: "biblio", text: "Praeparatio Evangelica, de Eusébio de Cesareia" },
    { key: "Mem.", type: "biblio", text: "Memorabilia, de Xenofonte" },
    { key: "Oec.", type: "biblio", text: "Oeconomicus, de Xenofonte" },
    { key: "Cyr.", type: "biblio", text: "Cyropaedia, de Xenofonte" },
    { key: "Symp.", type: "biblio", text: "Symposium, de Xenofonte" },
    { key: "Bell. Civ.", type: "biblio", text: "Bellum Civile, de Apiano" },
    { key: "C. Ap.", type: "biblio", text: "Contra Apionem, de Flávio Josefo" },
    { key: "Deus Imm.", type: "biblio", text: "Quod Deus Sit Immutabilis, de Fílon de Alexandria" },
    { key: "Leg. All.", type: "biblio", text: "Legum Allegoriae, de Fílon de Alexandria" },
    { key: "Op. M.", type: "biblio", text: "De Opificio Mundi, de Fílon de Alexandria" },
    { key: "Spec. Leg.", type: "biblio", text: "De Specialibus Legibus, de Fílon de Alexandria" },
    { key: "Rer. Div. Her.", type: "biblio", text: "Quis Rerum Divinarum Heres Sit, de Fílon de Alexandria" },
    { key: "Sobr.", type: "biblio", text: "De Sobrietate, de Fílon de Alexandria" },
    { key: "Paed.", type: "biblio", text: "Paedagogus, de Clemente de Alexandria" },
    { key: "Strom.", type: "biblio", text: "Stromata, de Clemente de Alexandria" },
    { key: "C. Cels.", type: "biblio", text: "Contra Celsum, de Orígenes" },

    { key: "D. L. im NT", type: "biblio", text: "Wilhelm Lütgert, Die Liebe im Neuen Testament: Ein Beitrag zur Geschichte des Urchristentums, 1905" },
    { key: "PCairZen", type: "biblio", text: "Papiros do arquivo de Zenão no Cairo; coleção papirológica citada pelo BDAG" },
    { key: "PColZen", type: "biblio", text: "Papiros da coleção de Zenão da Columbia University; coleção papirológica citada pelo BDAG" },
    { key: "PSI", type: "biblio", text: "Papiri greci e latini; coleção papirológica citada pelo BDAG" },
    { key: "PFouad", type: "biblio", text: "Papyrus Fouad; coleção papirológica citada pelo BDAG" },
    { key: "IG", type: "biblio", text: "Inscriptiones Graecae" },
    { key: "APF", type: "biblio", text: "Archiv für Papyrusforschung und verwandte Gebiete" },
    { key: "JRS", type: "biblio", text: "Journal of Roman Studies" },
    { key: "RHR", type: "biblio", text: "Revue de l'histoire des religions" },
    { key: "ARW", type: "biblio", text: "Archiv für Religionswissenschaft" },
    { key: "TZ", type: "biblio", text: "Theologische Zeitschrift" },
    { key: "RSPT", type: "biblio", text: "Revue des sciences philosophiques et théologiques" },
    { key: "SJCh", type: "biblio", text: "sigla bibliográfica preservada conforme o BDAG; identificação mantida sem expansão adicional por segurança" },
    { key: "VD", type: "biblio", text: "Verbum Domini" },
    { key: "TRu", type: "biblio", text: "Theologische Rundschau" },
    { key: "ICC", type: "biblio", text: "International Critical Commentary" },
    { key: "LO", type: "biblio", text: "A. Deissmann, Licht vom Osten" },
    { key: "LAE", type: "biblio", text: "A. Deissmann, Light from the Ancient East" },
    { key: "TU", type: "biblio", text: "Texte und Untersuchungen zur Geschichte der altchristlichen Literatur" },
    { key: "DDD", type: "biblio", text: "Dictionary of Deities and Demons in the Bible" },
    { key: "GJs", type: "biblio", text: "Evangelho de Tiago (Protoevangelho de Tiago)" },
    { key: "Dg", type: "biblio", text: "Epístola a Diogneto" },
    { key: "En", type: "biblio", text: "1 Enoque" },
    { key: "SyrBar", type: "biblio", text: "Apocalipse Siríaco de Baruc (2 Baruc)" },
    { key: "GrBar", type: "biblio", text: "Apocalipse Grego de Baruc (3 Baruc)" },
    { key: "Nicol. Dam.", type: "biblio", text: "Nicolau de Damasco" },
    { key: "Hdt", type: "biblio", text: "Heródoto" },
    { key: "Aeschyl.", type: "biblio", text: "Ésquilo" },
    { key: "Menand.", type: "biblio", text: "Menandro" },
    { key: "Jos.", type: "biblio", text: "Flávio Josefo" },
    { key: "Ulpian", type: "biblio", text: "Ulpiano" },
    { key: "Philo", type: "biblio", text: "Fílon de Alexandria" },
    { key: "Dio Chrys.", type: "biblio", text: "Dion Crisóstomo" },
    { key: "M. Ant.", type: "biblio", text: "Marco Aurélio" },
    { key: "Stob.", type: "biblio", text: "João Estobeu" },
    { key: "Pollux", type: "biblio", text: "Júlio Pólux" },
    { key: "Just.", type: "biblio", text: "Justino Mártir" },
    { key: "Hierocles", type: "biblio", text: "Hierocles; autor antigo citado pelo BDAG" },
    { key: "Proclus", type: "biblio", text: "Proclo" },
    { key: "Simplicius", type: "biblio", text: "Simplício" },
    { key: "Ael. Aristid.", type: "biblio", text: "Élio Aristides" },
    { key: "Maximus Tyr.", type: "biblio", text: "Máximo de Tiro" },
    { key: "Eus.", type: "biblio", text: "Eusébio de Cesareia" },
    { key: "Diod S", type: "biblio", text: "Diodoro Sículo" },
    { key: "Ps.-Callisth.", type: "biblio", text: "Pseudo-Calístenes" },
    { key: "Porphyr.", type: "biblio", text: "Porfírio" },
    { key: "Damascius", type: "biblio", text: "Damáscio" },
    { key: "Synes.", type: "biblio", text: "Sinésio de Cirene" },
    { key: "Lactant.", type: "biblio", text: "Lactâncio" },
    { key: "Orig.", type: "biblio", text: "Orígenes" },
    { key: "Clem. Al.", type: "biblio", text: "Clemente de Alexandria" },
    { key: "Diog. L.", type: "biblio", text: "Diógenes Laércio" },
    { key: "Herm. Wr.", type: "biblio", text: "Corpus Hermeticum (Hermetica), referência conforme a abreviação do BDAG" },
    { key: "Cat. Cod. Astr.", type: "biblio", text: "Catalogus Codicum Astrologorum Graecorum" },
    { key: "Anecd. Gr.", type: "biblio", text: "Anecdota Graeca" },
    { key: "AcThom", type: "biblio", text: "Atos de Tomé" },
    { key: "AcPh", type: "biblio", text: "Atos de Filipe" },
    { key: "Ox", type: "biblio", text: "Papiro de Oxirrinco; referência numerada conforme a fonte" },
    { key: "RSR", type: "biblio", text: "Recherches de Science Religieuse" },
    { key: "Wsd", type: "biblio", text: "Sabedoria de Salomão" },
    { key: "CIJ", type: "biblio", text: "Corpus Inscriptionum Judaicarum" },
    { key: "CBQ", type: "biblio", text: "Catholic Biblical Quarterly" },
    { key: "ASyn.", type: "biblio", text: "Agrapha / coleção de ditos sinóticos citada pelo BDAG; sigla preservada conforme a fonte" },
    { key: "EpilMosq", type: "biblio", text: "Epílogo de Moscou do Martírio de Policarpo" },
    { key: "VetusT", type: "biblio", text: "Vetus Testamentum" },
    { key: "JETS", type: "biblio", text: "Journal of the Evangelical Theological Society" },
    { key: "1QS", type: "biblio", text: "Regra da Comunidade de Qumran (Serekh ha-Yahad)" },
    { key: "Theod.", type: "biblio", text: "Teodocião" },
    { key: "Pla.", type: "biblio", text: "Platão" },
    { key: "Aristoph.", type: "biblio", text: "Aristófanes" },
    { key: "Demosth.", type: "biblio", text: "Demóstenes" },
    { key: "Appian", type: "biblio", text: "Apiano" },
    { key: "Paus.", type: "biblio", text: "Pausânias" },
    { key: "Theocr.", type: "biblio", text: "Teócrito" },
    { key: "Polyb.", type: "biblio", text: "Políbio" },
    { key: "Dionys. Soph.", type: "biblio", text: "Dionísio, o sofista; referência conforme o BDAG" },
    { key: "Ps.-Clem.", type: "biblio", text: "Pseudo-Clemente" },
    { key: "Did., Gen.", type: "biblio", text: "Dídimo, comentário sobre Gênesis; referência abreviada conforme o BDAG" },
    { key: "AcPlCor", type: "biblio", text: "Atos de Paulo e os Coríntios" },
    { key: "TestDan", type: "biblio", text: "Testamento de Dã" },
    { key: "TT", type: "biblio", text: "Theologisch Tijdschrift" },
    { key: "RSR", type: "biblio", text: "Recherches de Science Religieuse" },
    { key: "ISyriaW", type: "biblio", text: "Inscrições da Síria; sigla preservada conforme o BDAG" },
    { key: "PRein", type: "biblio", text: "Papyrus Reinach; coleção papirológica" },
    { key: "PTebt", type: "biblio", text: "The Tebtunis Papyri" },
    { key: "PHamb", type: "biblio", text: "Hamburger Papyri" },
    { key: "PMeyer", type: "biblio", text: "Papyrus Meyer; referência papirológica conforme o BDAG" },
    { key: "StTh", type: "biblio", text: "Studia Theologica" },
    { key: "AcJ", type: "biblio", text: "Atos de João" },
    { key: "AcPhil", type: "biblio", text: "Atos de Filipe" },
    { key: "ISmyrnaMcCabe", type: "biblio", text: "Inscrições de Esmirna na edição de McCabe; referência epigráfica" },
    { key: "Peripl. Eryth.", type: "biblio", text: "Periplus Maris Erythraei" },
    { key: "Thom. Mag.", type: "biblio", text: "Thomas Magister" },
    { key: "PGiss", type: "biblio", text: "Giessener Papyri" },
    { key: "PPetr", type: "biblio", text: "The Petrie Papyri" },
    { key: "Athen.", type: "biblio", text: "Ateneu" },
    { key: "TestJud", type: "biblio", text: "Testamento de Judá" },
    { key: "TestZeb", type: "biblio", text: "Testamento de Zebulom" },
    { key: "REB", type: "biblio", text: "Revised English Bible" },
    { key: "NRSV", type: "biblio", text: "New Revised Standard Version" },
    { key: "ABA", type: "biblio", text: "Abhandlungen da Academia citada pelo BDAG; sigla preservada conforme a fonte" },
    { key: "ZTK", type: "biblio", text: "Zeitschrift für Theologie und Kirche" },
    { key: "PHarr", type: "biblio", text: "Harris Papyri" },
    { key: "PUps", type: "biblio", text: "Uppsala Papyri" },
    { key: "Aberciusins.", type: "biblio", text: "Inscrição de Abércio" },
    { key: "v", type: "biblio", text: "Pastor de Hermas, Visões; abreviação minúscula preservada conforme a fonte" },
    { key: "Pol", type: "biblio", text: "Policarpo aos Filipenses" },
    { key: "MAI", type: "biblio", text: "Mitteilungen des Deutschen Archäologischen Instituts, Athenische Abteilung" },
    { key: "SBWienAk", type: "biblio", text: "Sitzungsberichte der Kaiserlichen/Österreichischen Akademie der Wissenschaften in Wien" },
    { key: "NJklA", type: "biblio", text: "Neue Jahrbücher für das klassische Altertum" },
    { key: "RhM", type: "biblio", text: "Rheinisches Museum für Philologie" },
    { key: "Beginn.", type: "biblio", text: "The Beginnings of Christianity" },
    { key: "PHolm", type: "biblio", text: "Papyrus Holmiensis" },
    { key: "PGissUniv", type: "biblio", text: "Giessener Universitäts-Papyri" },
    { key: "TLZ", type: "biblio", text: "Theologische Literaturzeitung" },
    { key: "Aeg.", type: "biblio", text: "Aegyptus; abreviação citada pelo BDAG" },
    { key: "EphemEpigr", type: "biblio", text: "Ephemeris Epigraphica" },
    { key: "TGF", type: "biblio", text: "Tragicorum Graecorum Fragmenta" },
    { key: "Aen. Tact.", type: "biblio", text: "Eneias Tático" },
    { key: "Anth. Pal.", type: "biblio", text: "Anthologia Palatina" },
    { key: "Ps.-Theocr.", type: "biblio", text: "Pseudo-Teócrito" },
    { key: "Harpocration", type: "biblio", text: "Harpocracião" },
    { key: "PEdgar", type: "biblio", text: "Papiros editados por C. C. Edgar; coleção papirológica" },
    { key: "Exp.", type: "biblio", text: "The Expositor" },
    { key: "GereformTT", type: "biblio", text: "Gereformeerd Theologisch Tijdschrift" },
    { key: "Artem.", type: "biblio", text: "Artemidoro" },
    { key: "Arrian", type: "biblio", text: "Arriano" },
    { key: "TestSim", type: "biblio", text: "Testamento de Simeão" },
    { key: "AcPt", type: "biblio", text: "Atos de Pedro" },
    { key: "PAmh", type: "biblio", text: "The Amherst Papyri" },
    { key: "PEleph", type: "biblio", text: "Elephantine Papyri" },
    { key: "PCairGoodsp", type: "biblio", text: "Cairo papyrus edition cited by Goodspeed; referência preservada conforme o BDAG" },
    { key: "IMagnMai", type: "biblio", text: "Inscrição de Magnésia do Meandro; referência epigráfica citada pelo BDAG" },
    { key: "PPrinc", type: "biblio", text: "Princeton Papyri" },
    { key: "SB", type: "biblio", text: "Sammelbuch griechischer Urkunden aus Ägypten" },
    { key: "IMagn", type: "biblio", text: "Inscriptiones Magnesiae; referência epigráfica" },
    { key: "PHeid", type: "biblio", text: "Heidelberger Papyri" },
    { key: "IBM", type: "biblio", text: "Inscrições do British Museum; referência epigráfica conforme o BDAG" },
    { key: "PHib", type: "biblio", text: "The Hibeh Papyri" },
    { key: "BiblSacra", type: "biblio", text: "Bibliotheca Sacra" },
    { key: "ABComm", type: "biblio", text: "Anchor Bible Commentary" },
    { key: "TS", type: "biblio", text: "Theological Studies; periódico citado pelo BDAG" },
    { key: "HTR", type: "biblio", text: "Harvard Theological Review" },
    { key: "ZWT", type: "biblio", text: "Zeitschrift für wissenschaftliche Theologie" },
    { key: "PMich", type: "biblio", text: "Michigan Papyri" },
    { key: "PParis", type: "biblio", text: "Papyrus de Paris; coleção papirológica citada pelo BDAG" },
    { key: "Vett. Val.", type: "biblio", text: "Vettius Valens" },
    { key: "Andoc.", type: "biblio", text: "Andócides" },
    { key: "Anton. Diog.", type: "biblio", text: "Antônio Diógenes" },
    { key: "Ptolem.", type: "biblio", text: "Ptolomeu" },
    { key: "Ac", type: "biblio", text: "Antike und Christentum; série de F. J. Dölger" },
    { key: "PEg", type: "biblio", text: "Papyrus Egerton; referência papirológica conforme o BDAG" },
    { key: "Aq.", type: "biblio", text: "Áquila — versão grega do Antigo Testamento" },
    { key: "Sym.", type: "biblio", text: "Símaco — versão grega do Antigo Testamento" },
    { key: "ApcPt Rainer", type: "biblio", text: "Apocalipse de Pedro, fragmento Rainer" },
    { key: "Ps.-Apollod.", type: "biblio", text: "Pseudo-Apolodoro" },
    { key: "RSV", type: "biblio", text: "Revised Standard Version" },
    { key: "Hermeneia", type: "biblio", text: "Hermeneia — série de comentários críticos e históricos" },
    { key: "Billerb.", type: "biblio", text: "Strack-Billerbeck, Kommentar zum Neuen Testament aus Talmud und Midrasch" },
    { key: "Frisk", type: "biblio", text: "H. Frisk, Griechisches etymologisches Wörterbuch" },
    { key: "PHercul", type: "biblio", text: "Papyri Herculanenses — papiros de Herculano" },
    { key: "PHal", type: "biblio", text: "Papyrus Halensis; coleção papirológica" },
    { key: "BZ", type: "biblio", text: "Biblische Zeitschrift" },
    { key: "ASTI", type: "biblio", text: "Annual of the Swedish Theological Institute" },
    { key: "Mnemosyne", type: "biblio", text: "Mnemosyne — periódico de filologia clássica" },
    { key: "Heph. Astr.", type: "biblio", text: "Heféstion de Tebas, Apotelesmatica" },
    { key: "Philod.", type: "biblio", text: "Filodemo" },
    { key: "Apollon. Dysc.", type: "biblio", text: "Apolônio Díscolo" },
    { key: "Gramm. Graeci", type: "biblio", text: "Grammatici Graeci" },
    { key: "Contemp. Rev.", type: "biblio", text: "Contemporary Review" },
    { key: "PEnteux", type: "biblio", text: "Papyrus Enteuxeis; coleção papirológica" },
    { key: "PStras", type: "biblio", text: "Strasbourg Papyri" },
    { key: "PAdl Gk.", type: "biblio", text: "Adler Greek Papyri" },
    { key: "Vorsokrat.", type: "biblio", text: "Die Fragmente der Vorsokratiker" },
    { key: "Meisterhans", type: "biblio", text: "Grammatik der attischen Inschriften de Meisterhans; referência citada pelo BDAG" },
    { key: "Stephan. Byz.", type: "biblio", text: "Estêvão de Bizâncio" },
    { key: "Posidippus", type: "biblio", text: "Posidipo" },
    { key: "Warnecke", type: "biblio", text: "H. Warnecke; autor citado pelo BDAG" },
    { key: "Hyperid.", type: "biblio", text: "Hipérides" },
    { key: "PBodm", type: "biblio", text: "Papyri Bodmeriani — Papiros Bodmer" },
    { key: "ABD", type: "biblio", text: "Anchor Bible Dictionary" },
    { key: "IHierapJ", type: "biblio", text: "Inscrição de Hierápolis citada pelo BDAG" },
    { key: "NovT", type: "biblio", text: "Novum Testamentum" },
    { key: "CMG", type: "biblio", text: "Corpus Medicorum Graecorum" },
    { key: "Antig. Car.", type: "biblio", text: "Antígono de Caristo" },
    { key: "Papias", type: "biblio", text: "Pápias de Hierápolis" },
    { key: "Boll", type: "biblio", text: "F. Boll; autor citado pelo BDAG" },
    { key: "Harmodius", type: "biblio", text: "Harmódio; autor antigo citado pelo BDAG" },
    { key: "Qua.", type: "biblio", text: "Quadrato; fragmento/apologia citada pelo BDAG" },
    { key: "PRossGeorg", type: "biblio", text: "Papyri Russischer und Georgischer Sammlungen" },
    { key: "PIand", type: "biblio", text: "Iandanae Papyri" },
    { key: "IDefixWünsch", type: "biblio", text: "Defixionum Tabellae Atticae de R. Wünsch; coleção de inscrições mágicas" },
    { key: "Slav. En.", type: "biblio", text: "Enoque Eslavo (2 Enoque)" },
    { key: "TQ", type: "biblio", text: "Theologische Quartalschrift" },
    { key: "Eranos", type: "biblio", text: "Eranos — periódico de estudos clássicos" },
    { key: "Glotta", type: "biblio", text: "Glotta — Zeitschrift für griechische und lateinische Sprache" },
    { key: "Hist. Ztschr.", type: "biblio", text: "Historische Zeitschrift" },
    { key: "Harv.", type: "biblio", text: "Harvey; edição/referência de Irineu citada pelo BDAG" },
    { key: "Theoph. Ant.", type: "biblio", text: "Teófilo de Antioquia" },
    { key: "BCH", type: "biblio", text: "Bulletin de Correspondance Hellénique" },
    { key: "PHerm", type: "biblio", text: "Hermopolis Papyri" },
    { key: "Haenchen", type: "biblio", text: "Ernst Haenchen; comentarista de Atos citado pelo BDAG" },
    { key: "BA", type: "biblio", text: "Biblical Archaeologist" },
    { key: "Bihlmeyer", type: "biblio", text: "Karl Bihlmeyer; editor/comentarista citado pelo BDAG" },
    { key: "PFay", type: "biblio", text: "Fayum Papyri" },
    { key: "Kl. T.", type: "biblio", text: "Kleine Texte für Vorlesungen und Übungen" },
    { key: "Ezk. Trag.", type: "biblio", text: "Ezequiel, o Trágico" },
    { key: "Bodm.", type: "biblio", text: "Bodmer; testemunho/manuscrito citado pelo BDAG" },
    { key: "Ch.", type: "biblio", text: "Chester Beatty; testemunho/manuscrito citado pelo BDAG" },
    { key: "Apollon. Rhod.", type: "biblio", text: "Apolônio de Rodes" },
    { key: "Nägeli", type: "biblio", text: "T. Nägeli; estudo lexical citado pelo BDAG" },
    { key: "OxfT", type: "biblio", text: "Oxford Classical Texts" },
    { key: "AJP", type: "biblio", text: "American Journal of Philology" },
    { key: "Philol. Suppl.", type: "biblio", text: "Philologus, Supplementband" },
    { key: "ETR", type: "biblio", text: "Études théologiques et religieuses" },
    { key: "CurTM", type: "biblio", text: "Currents in Theology and Mission" },
    { key: "TGl", type: "biblio", text: "Theologie und Glaube" },
    { key: "The Bible Today", type: "biblio", text: "The Bible Today" },
    { key: "Psaltes", type: "biblio", text: "S. Psaltes; referência lexicográfica citada pelo BDAG" },
    { key: "Acta Pilati", type: "biblio", text: "Atos de Pilatos" },
    { key: "Preisigke", type: "biblio", text: "Friedrich Preisigke" },
    { key: "Namenbuch", type: "biblio", text: "Namenbuch griechischer Urkunden aus Ägypten" },
    { key: "NKZ", type: "biblio", text: "Neue kirchliche Zeitschrift" },
    { key: "GDI", type: "biblio", text: "Sammlung der griechischen Dialekt-Inschriften" },
    { key: "Epil Mosq", type: "biblio", text: "Epílogo do manuscrito de Moscou; sigla conforme o BDAG" }
];

const automaticNamedAuthors = [
    { key: "Fílon", text: "Fílon de Alexandria — autor judeu helenístico citado pela fonte" },
    { key: "Josefo", text: "Flávio Josefo — autor judeu de língua grega citado pela fonte" },
    { key: "Flávio Josefo", text: "Flávio Josefo — autor judeu de língua grega citado pela fonte" },
    { key: "Heródoto", text: "Heródoto de Halicarnasso — historiador grego citado pela fonte" },
    { key: "Xenofonte", text: "Xenofonte — autor grego citado pela fonte" },
    { key: "Tucídides", text: "Tucídides — historiador grego citado pela fonte" },
    { key: "Diodoro Sículo", text: "Diodoro Sículo — historiador grego citado pela fonte" },
    { key: "Plutarco", text: "Plutarco — autor grego citado pela fonte" },
    { key: "Platão", text: "Platão — filósofo grego citado pela fonte" },
    { key: "Aristóteles", text: "Aristóteles — filósofo grego citado pela fonte" },
    { key: "Aristófanes", text: "Aristófanes — autor grego citado pela fonte" },
    { key: "Diógenes Laércio", text: "Diógenes Laércio — autor grego citado pela fonte" },
    { key: "Teofrasto", text: "Teofrasto — autor grego citado pela fonte" },
    { key: "Epicteto", text: "Epicteto — filósofo grego citado pela fonte" },
    { key: "Apiano", text: "Apiano — historiador grego citado pela fonte" },
    { key: "Isócrates", text: "Isócrates — orador grego citado pela fonte" },
    { key: "Lísias", text: "Lísias — orador grego citado pela fonte" },
    { key: "Sexto Empírico", text: "Sexto Empírico — autor grego citado pela fonte" },
    { key: "Porfírio", text: "Porfírio — filósofo citado pela fonte" },
    { key: "Píndaro", text: "Píndaro — poeta grego citado pela fonte" },
    { key: "Justino", text: "Justino Mártir — autor cristão antigo citado pela fonte" },
    { key: "Clemente de Alexandria", text: "Clemente de Alexandria — autor cristão antigo citado pela fonte" },
    { key: "Orígenes", text: "Orígenes — autor cristão antigo citado pela fonte" },
    { key: "Melito", text: "Melito de Sardes — autor cristão antigo citado pela fonte" },
    { key: "Atenágoras", text: "Atenágoras — apologista cristão antigo citado pela fonte" },
    { key: "Teodocião", text: "Teodocião — autor da revisão/tradução grega do Antigo Testamento citada pela fonte" }
];

const specialModernAuthorPopups = {
    "A. Carr": "A. Carr — estudo citado pelo BDAG em Expository Times 10 (1899), pp. 321–330",
    "A. Ceresa-Gastaldo": "A. Ceresa-Gastaldo — autor do estudo “Αγάπη nei documenti anteriori al NT”, citado pelo BDAG em Aegyptus 31 (1951), pp. 269–306",
    "W. Lütgert": "Wilhelm Lütgert — autor de Die Liebe im Neuen Testament: Ein Beitrag zur Geschichte des Urchristentums (1905)",
    "H. Riesenfeld": "H. Riesenfeld — autor citado pelo BDAG; a referência completa é preservada no texto do verbete",
    "B. Warfield": "B. Warfield — autor citado pelo BDAG; a referência completa é preservada no texto do verbete",
    "J. Moffatt": "J. Moffatt — autor citado pelo BDAG; a referência completa é preservada no texto do verbete",
    "T. Söding": "T. Söding — autor citado pelo BDAG; a referência completa é preservada no texto do verbete"
};


function isBibliographicBoundaryCharacter(character) {
    if (!character) {
        return false;
    }

    return /[\p{L}\p{N}_]/u.test(character);
}


function createAutomaticTooltipSpan(label, text, type) {
    const span =
        document.createElement("span");

    span.className =
        type === "abbr"
            ? "abbr-help tooltip-trigger"
            : "biblio-ref tooltip-trigger";

    span.tabIndex = 0;

    span.dataset.tooltipType =
        type;

    span.dataset.tooltipLabel =
        label;

    span.dataset.tooltipText =
        text;

    span.textContent =
        label;

    return span;
}


function collectPlainTextNodes(root) {
    const walker =
        document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT
        );

    const nodes = [];

    while (walker.nextNode()) {
        const node =
            walker.currentNode;

        const parent =
            node.parentElement;

        if (!parent) {
            continue;
        }

        if (
            parent.closest(
                ".tooltip-trigger, a, script, style"
            )
        ) {
            continue;
        }

        if (
            !node.nodeValue ||
            !node.nodeValue.trim()
        ) {
            continue;
        }

        nodes.push(node);
    }

    return nodes;
}


function wrapKnownTermsInTextNode(node, definitions) {
    const value =
        node.nodeValue;

    if (!value) {
        return;
    }

    let position = 0;
    let changed = false;

    const fragment =
        document.createDocumentFragment();

    while (position < value.length) {
        let bestMatch = null;

        definitions.forEach(function (definition) {
            const index =
                value.indexOf(
                    definition.key,
                    position
                );

            if (index === -1) {
                return;
            }

            const before =
                index > 0
                    ? value[index - 1]
                    : "";

            const afterIndex =
                index +
                definition.key.length;

            const after =
                afterIndex < value.length
                    ? value[afterIndex]
                    : "";

            if (
                isBibliographicBoundaryCharacter(before) ||
                isBibliographicBoundaryCharacter(after)
            ) {
                return;
            }

            if (
                bestMatch === null ||
                index < bestMatch.index ||
                (
                    index === bestMatch.index &&
                    definition.key.length >
                        bestMatch.definition.key.length
                )
            ) {
                bestMatch = {
                    index: index,
                    definition: definition
                };
            }
        });

        if (!bestMatch) {
            fragment.appendChild(
                document.createTextNode(
                    value.slice(position)
                )
            );
            break;
        }

        if (bestMatch.index > position) {
            fragment.appendChild(
                document.createTextNode(
                    value.slice(
                        position,
                        bestMatch.index
                    )
                )
            );
        }

        fragment.appendChild(
            createAutomaticTooltipSpan(
                bestMatch.definition.key,
                bestMatch.definition.text,
                bestMatch.definition.type
            )
        );

        position =
            bestMatch.index +
            bestMatch.definition.key.length;

        changed = true;
    }

    if (changed) {
        node.replaceWith(fragment);
    }
}


function enrichModernAuthorTooltips(root) {
    const authorPattern =
        /\b(?:[A-ZÀ-ÖØ-Þ]\.\s*){1,3}(?:[a-zà-öø-ÿ]+\s+)?[A-ZÀ-ÖØ-Þ][A-Za-zÀ-ÖØ-öø-ÿ-]+\b/g;

    const nodes =
        collectPlainTextNodes(root);

    nodes.forEach(function (node) {
        const value =
            node.nodeValue;

        const matches =
            Array.from(
                value.matchAll(
                    authorPattern
                )
            );

        if (!matches.length) {
            return;
        }

        const fragment =
            document.createDocumentFragment();

        let lastIndex = 0;

        matches.forEach(function (match) {
            const author =
                match[0];

            const index =
                match.index;

            if (index > lastIndex) {
                fragment.appendChild(
                    document.createTextNode(
                        value.slice(
                            lastIndex,
                            index
                        )
                    )
                );
            }

            const card =
                node.parentElement.closest(
                    ".entry-card"
                );

            const source =
                card
                    ? (
                        card.querySelector(
                            ".source-tag"
                        )
                    )
                    : null;

            const sourceName =
                source
                    ? source.textContent.trim()
                    : "fonte lexicográfica";

            const detail =
                specialModernAuthorPopups[author] ||
                (
                    author +
                    " — autor citado na referência bibliográfica deste verbete (" +
                    sourceName +
                    "); o nome é mantido na forma em que aparece na fonte"
                );

            fragment.appendChild(
                createAutomaticTooltipSpan(
                    author,
                    detail,
                    "biblio"
                )
            );

            lastIndex =
                index +
                author.length;
        });

        fragment.appendChild(
            document.createTextNode(
                value.slice(lastIndex)
            )
        );

        node.replaceWith(fragment);
    });
}



function getBibliographicDefinitionsForRoot(root) {
    const definitionsByKey =
        new Map();

    automaticBibliographicTerms
        .forEach(function (definition) {
            definitionsByKey.set(
                definition.key,
                definition
            );
        });

    const entryCard =
        root.closest(
            ".entry-card"
        );

    const sourceName =
        entryCard
            ? (
                entryCard.dataset.source ||
                (
                    entryCard.querySelector(
                        ".source-tag"
                    )?.textContent || ""
                ).trim()
            )
            : "";

    const sourceConfig =
        externalLexiconSources.find(
            function (source) {
                return (
                    source.source ===
                    sourceName
                );
            }
        );

    if (
        sourceConfig &&
        Array.isArray(
            sourceConfig.bibliographicTerms
        )
    ) {
        sourceConfig.bibliographicTerms
            .forEach(function (definition) {
                /*
                 * A definição da própria fonte prevalece sobre uma
                 * definição comum de mesma chave.
                 */
                definitionsByKey.set(
                    definition.key,
                    definition
                );
            });
    }

    return Array.from(
        definitionsByKey.values()
    ).sort(function (a, b) {
        return (
            b.key.length -
            a.key.length
        );
    });
}


function enrichBibliographicTooltips(card) {
    const roots = Array.from(card.querySelectorAll(".entry-text"));

    // A lista é imutável durante a inicialização: ordenar uma única vez.
    const sortedNamedAuthors = automaticNamedAuthors.slice().sort(function (a, b) {
        return b.key.length - a.key.length;
    });

    roots.forEach(function (root) {
        const definitions =
            getBibliographicDefinitionsForRoot(
                root
            );
        /*
         * Primeiro isolamos os nomes modernos no formato
         * "A. Carr", "W. Lütgert", etc. Assim siglas de uma
         * letra presentes nas iniciais nunca são interpretadas
         * como abreviaturas editoriais.
         */
        enrichModernAuthorTooltips(root);

        /*
         * Depois tratamos termos e siglas confirmados.
         * O coletor ignora automaticamente qualquer conteúdo
         * que já possua popup ou seja um link.
         */
        collectPlainTextNodes(root)
            .forEach(function (node) {
                wrapKnownTermsInTextNode(
                    node,
                    definitions
                );
            });

        /*
         * Autores antigos escritos por extenso são tratados
         * por um registro separado para evitar inferências
         * baseadas apenas em capitalização.
         */
        // Texto dos autores calculado uma vez por verbete, não por candidato.
        // O texto permanece o mesmo quando os termos recebem elementos de popup.
        const rootTextForAuthors = root.textContent.toLocaleLowerCase("pt-BR");
        sortedNamedAuthors.forEach(function (definition) {
                if (!rootTextForAuthors
                    .includes(definition.key.toLocaleLowerCase("pt-BR"))) {
                    return;
                }
                collectPlainTextNodes(root)
                    .forEach(function (node) {
                        wrapKnownTermsInTextNode(
                            node,
                            [
                                {
                                    key: definition.key,
                                    type: "biblio",
                                    text: definition.text
                                }
                            ]
                        );
                    });
            });
    });
}


/* ==========================================================
   NORMALIZAÇÃO
   ========================================================== */

function normalizeText(text) {
    return text
        .toLocaleLowerCase("pt-BR")
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .replace(/\s+/g, " ")
        .trim();
}


/* ==========================================================
   MENU
   ========================================================== */

function openDictionaryMenu() {
    dictionaryMenu.classList.add("open");
    dictionaryMenu.setAttribute("aria-hidden", "false");

    menuToggle.setAttribute("aria-expanded", "true");

    menuBackdrop.hidden = false;

    document.body.classList.add("menu-open");

    menuClose.focus();
}


function closeDictionaryMenu(returnFocus) {
    dictionaryMenu.classList.remove("open");
    dictionaryMenu.setAttribute("aria-hidden", "true");

    menuToggle.setAttribute("aria-expanded", "false");

    menuBackdrop.hidden = true;

    document.body.classList.remove("menu-open");

    if (returnFocus) {
        menuToggle.focus();
    }
}


/* ==========================================================
   APARÊNCIA — ALTERNÂNCIA SEM RECARREGAMENTO
   ========================================================== */

function applyTheme(theme, persist) {
    const chosenTheme = theme === "light" ? "light" : "dark";

    document.documentElement.dataset.theme = chosenTheme;

    themeInputs.forEach(function (input) {
        input.checked = input.value === chosenTheme;
    });

    if (themeColorMeta) {
        themeColorMeta.content =
            chosenTheme === "light" ? "#f4f7fc" : "#071d3a";
    }

    if (persist) {
        try {
            localStorage.setItem("scriptura-lexicon-theme", chosenTheme);
        } catch (error) {
            // A alternância funciona mesmo com armazenamento indisponível.
        }
    }
}


/* ==========================================================
   DICIONÁRIOS
   ========================================================== */

function dictionaryFromHash() {
    const value =
        window.location.hash
            .replace(/^#/, "")
            .trim();

    return dictionaries[value]
        ? value
        : "grego";
}


function rowsForActiveDictionary() {
    return rowsByDictionary.get(activeDictionary) || [];
}


function cardsForActiveDictionary() {
    return entryCards.filter(function (card) {
        return card.dataset.dictionary === activeDictionary;
    });
}


function resetSearchState() {
    ++searchGeneration;
    window.clearTimeout(searchInputTimer);
    searchInput.value = "";
    lastOpenedRow = null;
    searchMatches = {ids:[], total:0};
    ++pageGeneration;
    currentResultsPage = 1;
    searchPagination.hidden = true;
    searchPagination.replaceChildren();
    entryNavigation.hidden = true;
    searchResultsBody?.querySelectorAll(".search-row").forEach(row=>row.remove());
    window.ScripturaLexiconSearch?.reset();

    searchRows.forEach(function (row) {
        row.hidden = true;
    });

    if (openedEntryCard) {
        openedEntryCard.hidden = true;
        openedEntryCard = null;
    }

    searchTableWrapper.hidden = true;
    noResults.hidden = true;

    searchCount.textContent = "Digite para pesquisar";
}


function populateSourceFilter() {
    const previousValue = sourceFilter.value;

    sourceFilter.innerHTML =
        '<option value="">Todas as fontes</option>';

    const indexed = window.ScripturaLexiconSearch?.catalog?.counts?.[activeDictionary];
    const known = indexed ? Object.keys(indexed) :
        rowsForActiveDictionary().map(row => row.dataset.source).filter(Boolean);
    // Fontes catalogadas mas sem cartões publicados continuam identificáveis,
    // claramente marcadas como em preparação; não representam verbetes prontos.
    const pending = Object.entries(window.ScripturaSourceCatalog || {})
        .filter(([code, data]) => data.dictionary === activeDictionary &&
            data.publicationStatus === "source-only" && !(indexed?.[code] > 0))
        .map(([code]) => code);
    const sources = [...new Set([...known, ...pending])]
        .sort((a, b) => a.localeCompare(b, "pt-BR"));

    sources.forEach(function (source) {
        const option =
            document.createElement("option");

        option.value = source;
        option.textContent = source;

        sourceFilter.appendChild(option);
    });

    const stillAvailable =
        sources.includes(previousValue);

    sourceFilter.value =
        stillAvailable
            ? previousValue
            : "";

    syncSourceCombobox();
    updateSourceDetails();
}


window.ScripturaRefreshSources = populateSourceFilter;

/* ==========================================================
   SELETOR VISUAL DE FONTES
   ========================================================== */

function syncSourceCombobox() {
    const selected = sourceFilter.selectedOptions[0];

    sourceFilterLabel.textContent =
        selected ? selected.textContent : "Todas as fontes";

    sourceFilterOptions.replaceChildren();

    Array.from(sourceFilter.options).forEach(function (option, index) {
        const item = document.createElement("div");

        item.id = "source-filter-option-" + index;
        item.className = "source-filter-option";
        item.dataset.source = option.value;
        item.setAttribute("role", "option");
        item.setAttribute(
            "aria-selected",
            String(option.value === sourceFilter.value)
        );
        item.textContent = option.textContent;

        item.addEventListener("pointerenter", function () {
            if (!sourceFilterOptions.hidden) {
                setActiveSourceOption(index, false);
            }
        });

        item.addEventListener("click", function () {
            selectSourceOption(index);
        });

        sourceFilterOptions.appendChild(item);
    });

    activeSourceOptionIndex = Math.max(
        0,
        Array.from(sourceFilter.options).findIndex(function (option) {
            return option.value === sourceFilter.value;
        })
    );

    closeSourceCombobox(false);
}

function setActiveSourceOption(index, shouldScroll) {
    const options = Array.from(sourceFilterOptions.children);

    if (!options.length) {
        return;
    }

    activeSourceOptionIndex = Math.max(
        0,
        Math.min(index, options.length - 1)
    );

    options.forEach(function (option, position) {
        option.classList.toggle(
            "is-active",
            position === activeSourceOptionIndex
        );
    });

    if (!sourceFilterOptions.hidden) {
        sourceFilterButton.setAttribute(
            "aria-activedescendant",
            options[activeSourceOptionIndex].id
        );
    }

    if (shouldScroll !== false) {
        options[activeSourceOptionIndex].scrollIntoView({
            block: "nearest"
        });
    }
}

function openSourceCombobox() {
    sourceFilterOptions.hidden = false;
    sourceFilterButton.setAttribute("aria-expanded", "true");
    setActiveSourceOption(activeSourceOptionIndex);
}

function closeSourceCombobox(restoreFocus) {
    sourceFilterOptions.hidden = true;
    sourceFilterButton.setAttribute("aria-expanded", "false");
    sourceFilterButton.removeAttribute("aria-activedescendant");

    if (restoreFocus) {
        sourceFilterButton.focus();
    }
}

function selectSourceOption(index) {
    const option = sourceFilter.options[index];

    if (!option) {
        return;
    }

    sourceFilter.value = option.value;
    sourceFilter.dispatchEvent(
        new Event("change", { bubbles: true })
    );

    closeSourceCombobox(true);
}



/* O total digital é apurado das linhas já montadas no DOM, não de manifestos. */
function updateSourceDetails() {
    const sourceCode = sourceFilter.value;
    const catalog = window.ScripturaSourceCatalog || {};
    const data = catalog[sourceCode];

    sourceDetails.hidden = !sourceCode;
    if (!sourceCode) {
        sourceCoverImage.hidden = true;
        sourceCoverImage.removeAttribute("src");
        return;
    }

    const title = data?.title || sourceCode;
    const fields = {
        "source-details-heading": title,
        "source-details-authors": data?.authors || "Autoria não documentada",
        "source-details-publisher": data?.publisher || "Não documentada",
        "source-details-date": data?.date || "Não documentada",
        "source-details-edition": data?.edition || "Não documentada",
        "source-details-isbn": data?.isbn || "Não documentado / não aplicável",
        "source-details-pages": data?.pages || "Não documentadas",
        "source-details-entries": (window.ScripturaLexiconSearch?.catalog
            ? window.ScripturaLexiconSearch.count(activeDictionary, sourceCode)
            : rowsForActiveDictionary().filter(row => row.dataset.source === sourceCode).length)
            .toLocaleString("pt-BR"),
        "source-details-note": data?.note ||
            "Referência bibliográfica ainda não cadastrada. Total de verbetes refere-se exclusivamente ao acervo eletrônico."
    };

    Object.entries(fields).forEach(function ([id, value]) {
        document.getElementById(id).textContent = value;
    });

    sourceCover.style.setProperty("--cover-tone", data?.coverColor || "#36516e");
    document.getElementById("source-cover-short").textContent = sourceCode;
    document.getElementById("source-cover-title").textContent = title;
    sourceCoverImage.hidden = true;
    sourceCoverPlaceholder.hidden = false;
    sourceCoverImage.removeAttribute("src");

    if (data?.coverUrl) {
        sourceCoverImage.onload = function () {
            if (sourceFilter.value !== sourceCode) return;
            sourceCoverImage.hidden = false;
            sourceCoverPlaceholder.hidden = true;
            sourceCoverImage.alt = "Capa do exemplar digital de " + title;
        };
        sourceCoverImage.onerror = function () {
            sourceCoverImage.hidden = true;
            sourceCoverPlaceholder.hidden = false;
        };
        sourceCoverImage.src = data.coverUrl;
    }

    sourceDetailsReference.hidden = !data?.reference;
    if (data?.reference) {
        sourceDetailsReference.href = data.reference;
    } else {
        sourceDetailsReference.removeAttribute("href");
    }
}

/* Voltar sem perder termo, filtro, seleção ou posição lógica no índice. */
function returnToResults() {
    if (entryNavigation.hidden) return;

    entryNavigation.hidden = true;
    if (openedEntryCard) {
        openedEntryCard.hidden = true;
        openedEntryCard = null;
    }
    searchTableWrapper.hidden = false;
    const row = lastOpenedRow
        ? [...searchResultsBody.querySelectorAll(".search-row")]
            .find(item => item.dataset.scripturaIndexId === lastOpenedRow.dataset.scripturaIndexId)
        : null;
    if (row) {
        row.focus({ preventScroll: true });
        row.scrollIntoView({ block: "center", behavior: "smooth" });
    } else {
        searchInput.focus();
    }
}


function selectDictionary(dictionary, options) {
    window.ScripturaSections?.showDictionary();
    window.ScripturaScriptures?.hide();
    const settings =
        Object.assign(
            {
                updateHash: true,
                focusSearch: false
            },
            options || {}
        );

    if (!dictionaries[dictionary]) {
        dictionary = "grego";
    }

    activeDictionary = dictionary;

    const config =
        dictionaries[activeDictionary];

    dictionaryTitle.textContent =
        config.title;

    dictionaryDescription.textContent =
        config.description;

    searchInput.placeholder =
        config.placeholder;

    dictionaryOptions.forEach(function (option) {
        const isActive =
            option.dataset.dictionaryTarget ===
            activeDictionary;

        option.classList.toggle(
            "active",
            isActive
        );

        if (isActive) {
            option.setAttribute(
                "aria-current",
                "page"
            );
        } else {
            option.removeAttribute(
                "aria-current"
            );
        }
    });

    resetSearchState();
    populateSourceFilter();

    closeDictionaryMenu(false);

    if (
        settings.updateHash &&
        window.location.hash !==
            "#" + activeDictionary
    ) {
        history.replaceState(
            null,
            "",
            "#" + activeDictionary
        );
    }

    if (settings.focusSearch) {
        searchInput.focus();
    }
    document.dispatchEvent(new Event("scriptura:dictionary-changed"));
}


/* ==========================================================
   CONTADOR
   ========================================================== */

function updateCounter(count) {
    searchCount.textContent =
        count === 1
            ? "1 verbete"
            : String(count) + " verbetes";
}


/* ==========================================================
   PESQUISA
   ========================================================== */

let searchGeneration = 0;
let searchInputTimer = null;

async function renderResultsPage(page, focusPagination = false, generation = searchGeneration) {
    const totalPages = Math.max(1, Math.ceil(searchMatches.total / RESULTS_PER_PAGE));
    const selectedPage = Math.max(1, Math.min(totalPages, page));
    const request = ++pageGeneration;
    const matches = searchMatches;
    try {
        // Apenas as dez linhas desta página; não transferir todas as entradas.
        const visible = await window.ScripturaLexiconSearch.page(matches, selectedPage, RESULTS_PER_PAGE);
        if (request !== pageGeneration || generation !== searchGeneration ||
                matches !== searchMatches) return;
        currentResultsPage = selectedPage;
        searchResultsBody.innerHTML = visible.map(item => item.row).join("");
        searchResultsBody.querySelectorAll(".search-row").forEach((row, index) => {
            row.hidden = false;
            row.dataset.scripturaIndexId = String(visible[index].id);
        });
        window.ScripturaLexiconSearch.track(visible);
        searchTableWrapper.hidden = false;
        searchPagination.hidden = totalPages <= 1;
        searchPagination.replaceChildren();
        if (totalPages <= 1) return;

        const numbers = new Set([1, totalPages]);
        for (let n = Math.max(1, selectedPage - 2);
             n <= Math.min(totalPages, selectedPage + 2); n++) numbers.add(n);
        const pages = [...numbers].sort((a, b) => a - b);
        function addButton(label, target, disabled = false, active = false) {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = label;
            button.dataset.page = String(target);
            button.disabled = disabled;
            if (active) button.setAttribute("aria-current", "page");
            button.setAttribute("aria-label",
                label === "Anterior" || label === "Próxima" ?
                    label + " página" : "Página " + label);
            searchPagination.append(button);
        }
        addButton("Anterior", selectedPage - 1, selectedPage === 1);
        let previous = 0;
        for (const n of pages) {
            if (previous && n - previous > 1) {
                const gap = document.createElement("span");
                gap.className = "page-ellipsis";
                gap.textContent = "…";
                gap.setAttribute("aria-hidden", "true");
                searchPagination.append(gap);
            }
            addButton(String(n), n, false, n === selectedPage);
            previous = n;
        }
        addButton("Próxima", selectedPage + 1, selectedPage === totalPages);
        if (focusPagination) {
            searchPagination.querySelector('[aria-current="page"]')?.focus({preventScroll:true});
            document.getElementById("search-table").scrollIntoView({block:"start"});
        }
    } catch (error) {
        if (request !== pageGeneration || generation !== searchGeneration) return;
        searchTableWrapper.hidden = false;
        noResults.textContent = "Não foi possível carregar esta página. " + error.message;
        noResults.hidden = false;
        console.error("Scriptura Lexicon: falha na página", error);
    }
}

function filterEntries() {
    window.clearTimeout(searchInputTimer);
    const generation = ++searchGeneration;
    entryNavigation.hidden = true;
    if (openedEntryCard) {
        openedEntryCard.hidden = true;
        openedEntryCard = null;
    }
    lastOpenedRow = null;
    searchMatches = {ids:[], total:0};
    ++pageGeneration;
    currentResultsPage = 1;
    searchPagination.hidden = true;
    searchPagination.replaceChildren();
    const query = normalizeText(searchInput.value.trim());
    const dictionary = activeDictionary, source = sourceFilter.value;
    searchResultsBody.replaceChildren();
    searchTableWrapper.hidden = true;
    noResults.hidden = true;
    window.ScripturaLexiconSearch?.reset();
    const sourcePending = !!(source &&
        window.ScripturaSourceCatalog?.[source]?.publicationStatus === "source-only" &&
        !window.ScripturaLexiconSearch?.count(dictionary, source));
    const pendingMessage = sourcePending ?
        "O LSJ está em preparação: existem registros na camada FONTE, mas nenhum verbete traduzido e publicado para pesquisa." : "";
    if (!query) {
        searchCount.textContent = sourcePending ? "Fonte em preparação" : "Digite para pesquisar";
        if (sourcePending) {
            searchTableWrapper.hidden = false;
            noResults.hidden = false;
            noResults.textContent = pendingMessage;
        }
        return;
    }
    searchCount.textContent = sourcePending ? "Fonte em preparação" : "Pesquisando...";
    const searcher = window.ScripturaLexiconSearch;
    if (!searcher) {
        searchCount.textContent = "Preparando índice...";
        return;
    }
    searcher.search(query, dictionary, source).then(result => {
        if (generation !== searchGeneration || activeDictionary !== dictionary ||
            sourceFilter.value !== source || normalizeText(searchInput.value.trim()) !== query) return;
        searchMatches = result;
        // Mostrar o total exato ANTES de requisitar as linhas da primeira página.
        updateCounter(result.total);
        if (sourcePending) searchCount.textContent = "Fonte em preparação";
        noResults.hidden = result.total > 0;
        noResults.textContent = result.total ? "" :
            (pendingMessage || "Nenhum verbete encontrado.");
        if (result.total > 0) {
            void renderResultsPage(1, false, generation);
        } else {
            searchTableWrapper.hidden = false;
        }
    }).catch(error => {
        if (generation !== searchGeneration) return;
        searchCount.textContent = "Erro na pesquisa";
        searchTableWrapper.hidden = false;
        noResults.textContent = error.message;
        noResults.hidden = false;
        console.error("Scriptura Lexicon: falha na pesquisa", error);
    });
}
window.ScripturaRunSearch = filterEntries;

/* ==========================================================
   ABRIR VERBETE
   ========================================================== */

async function openEntry(row) {
    if (
        row.dataset.dictionary !==
        activeDictionary
    ) {
        return;
    }

    const targetId =
        row.dataset.target;

    if (!targetId) {
        return;
    }

    const openingGeneration = searchGeneration;
    let target;
    try {
        target = await window.ScripturaLexiconSearch.loadArticle(
            row.dataset.scripturaIndexId || targetId
        );
    } catch (error) {
        searchCount.textContent = "Não foi possível carregar o verbete.";
        console.error("Scriptura Lexicon:", error);
        return;
    }
    if (!target || target.dataset.dictionary !== activeDictionary ||
        !row.isConnected || openingGeneration !== searchGeneration) return;

    if (target.dataset.scripturaPrepared !== "true") {
        enrichBibliographicTooltips(target);
        enrichBibleReferenceTooltips(target);
        target.dataset.scripturaPrepared = "true";
    }
    if (row.dataset.source === "DGP" && window.ScripturaLexicons?.DGP?.formatCards &&
        target.dataset.scripturaDgpPrepared !== "true") {
        window.ScripturaLexicons.DGP.formatCards(target);
        target.dataset.scripturaDgpPrepared = "true";
    }
    if (openedEntryCard && openedEntryCard !== target) {
        openedEntryCard.hidden = true;
    }
    target.hidden = false;
    openedEntryCard = target;

    lastOpenedRow = row;
    entryNavigationCount.textContent = searchCount.textContent + " na pesquisa";
    searchTableWrapper.hidden = true;
    noResults.hidden = true;
    entryNavigation.hidden = false;

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    target.classList.remove(
        "entry-highlight"
    );

    void target.offsetWidth;

    target.classList.add(
        "entry-highlight"
    );
}



// JASTROW: remissões com RID e destino interno documentalmente verificados.
// Não interfere nos links dos demais léxicos nem nos RID desconhecidos.
document.addEventListener("click", async function (event) {
    const link = event.target instanceof Element
        ? event.target.closest("a.scriptura-jastrow-xref[data-jastrow-target]")
        : null;
    if (!link) return;
    const sourceCard = link.closest('article.entry-card[data-source="JASTROW"]');
    if (!sourceCard) return;
    event.preventDefault();
    const sid = link.dataset.jastrowTarget;
    if (!/^[A-Z]\d{5}$/.test(sid)) return;
    const expectedTarget = "entry-jastrow-" + sid.toLowerCase();
    const searcher = window.ScripturaLexiconSearch;
    if (!searcher) return;
    try {
        const matches = await searcher.search(normalizeText(sid), "aramaico", "JASTROW");
        let record = null;
        for (let page = 1; page <= Math.ceil(matches.total / RESULTS_PER_PAGE); page++) {
            const records = await searcher.page(matches, page, RESULTS_PER_PAGE);
            record = records.find(item => item.target === expectedTarget &&
                item.source === "JASTROW" && item.dictionary === "aramaico");
            if (record) break;
        }
        if (!record || sourceCard.hidden || !sourceCard.isConnected ||
            openedEntryCard !== sourceCard) return;
        const target = await searcher.loadArticle(record.id);
        if (!target || target.id !== expectedTarget ||
            target.dataset.source !== "JASTROW" ||
            target.dataset.sourceEntry !== sid ||
            target.dataset.dictionary !== "aramaico" ||
            sourceCard.hidden || !sourceCard.isConnected ||
            openedEntryCard !== sourceCard) return;
        if (activeDictionary !== "aramaico") {
            selectDictionary("aramaico", {updateHash:true,focusSearch:false});
        }
        if (target.dataset.scripturaPrepared !== "true") {
            enrichBibliographicTooltips(target);
            enrichBibleReferenceTooltips(target);
            target.dataset.scripturaPrepared = "true";
        }
        if (openedEntryCard && openedEntryCard !== target) openedEntryCard.hidden = true;
        target.hidden = false;
        openedEntryCard = target;
        lastOpenedRow = null;
        entryNavigationCount.textContent = "Remissão JASTROW · " + sid;
        searchTableWrapper.hidden = true;
        noResults.hidden = true;
        entryNavigation.hidden = false;
        target.scrollIntoView({behavior:"smooth",block:"start"});
        target.classList.remove("entry-highlight");
        void target.offsetWidth;
        target.classList.add("entry-highlight");
    } catch (error) {
        console.error("Scriptura Lexicon: remissão JASTROW não aberta", sid, error);
    }
});

/* ==========================================================
   UTILIDADES
   ========================================================== */

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function parseMeanings(value) {
    return String(value || "")
        .split("|")
        .map(function (item) {
            return item.trim();
        })
        .filter(Boolean);
}


function buildMeaningsHtml(meanings) {
    return meanings
        .map(function (meaning) {
            return (
                '<span class="tooltip-meaning">' +
                escapeHtml(meaning) +
                "</span>"
            );
        })
        .join("");
}


/* ==========================================================
   CONTEÚDO DO POPUP
   ========================================================== */

function buildTooltipContent(trigger) {
    const type =
        trigger.dataset.tooltipType ||
        "generic";

    const label =
        trigger.dataset.tooltipLabel ||
        trigger.textContent.trim();

    if (type === "abbr") {
        const text =
            trigger.dataset.tooltipText || "";

        return (
            '<div class="tooltip-heading">' +
            escapeHtml(label) +
            "</div>" +
            '<div class="tooltip-block">' +
            '<span class="tooltip-label">Expansão</span>' +
            '<div class="tooltip-value">' +
            escapeHtml(text) +
            "</div>" +
            "</div>"
        );
    }

    if (type === "bible") {
        const text =
            trigger.dataset.tooltipText || "";

        return (
            '<div class="tooltip-heading">' +
            escapeHtml(label) +
            "</div>" +
            '<div class="tooltip-block">' +
            '<span class="tooltip-label">Texto</span>' +
            '<div class="tooltip-value">' +
            escapeHtml(text) +
            "</div>" +
            "</div>"
        );
    }


    if (type === "biblio") {
        const text =
            trigger.dataset.tooltipText || "";

        return (
            '<div class="tooltip-heading biblio-heading">' +
            escapeHtml(label) +
            "</div>" +
            '<div class="tooltip-block">' +
            '<span class="tooltip-label">Referência</span>' +
            '<div class="tooltip-value">' +
            (trigger.dataset.tooltipTitle
                ? '<em class="tooltip-biblio-title">' + escapeHtml(trigger.dataset.tooltipTitle) + '</em> '
                : '') +
            escapeHtml(text) +
            "</div>" +
            "</div>"
        );
    }

    if (
        type === "hebrew" ||
        type === "syriac"
    ) {
        const transliteration =
            trigger.dataset.transliteration || "";

        const meanings =
            parseMeanings(
                trigger.dataset.meanings
            );

        const headingClass =
            type === "hebrew"
                ? "hebrew-heading"
                : "syriac-heading";

        let html =
            '<div class="tooltip-heading ' +
            headingClass +
            '">' +
            escapeHtml(label) +
            "</div>";

        if (transliteration) {
            html +=
                '<div class="tooltip-block">' +
                '<span class="tooltip-label">Transliteração</span>' +
                '<div class="tooltip-value">' +
                escapeHtml(transliteration) +
                "</div>" +
                "</div>";
        }

        if (meanings.length) {
            html +=
                '<div class="tooltip-block">' +
                '<span class="tooltip-label">Significados</span>' +
                '<div class="tooltip-meanings">' +
                buildMeaningsHtml(meanings) +
                "</div>" +
                "</div>";
        }

        return html;
    }

    if (type === "greek") {
        const transliteration = trigger.dataset.transliteration || "";
        const meanings =
            parseMeanings(
                trigger.dataset.meanings
            );

        let html =
            '<div class="tooltip-heading greek-heading">' +
            escapeHtml(label) +
            "</div>";

        if (transliteration) {
            html +=
                '<div class="tooltip-block">' +
                '<span class="tooltip-label">Transliteração</span>' +
                '<div class="tooltip-value">' +
                escapeHtml(transliteration) +
                "</div>" +
                "</div>";
        }

        if (meanings.length) {
            html +=
                '<div class="tooltip-block">' +
                '<span class="tooltip-label">Significados</span>' +
                '<div class="tooltip-meanings">' +
                buildMeaningsHtml(meanings) +
                "</div>" +
                "</div>";
        }

        return html;
    }

    return (
        '<div class="tooltip-heading">' +
        escapeHtml(label) +
        "</div>"
    );
}


/* ==========================================================
   POSICIONAMENTO
   ========================================================== */

function positionTooltip(trigger) {
    if (!lexicalTooltip) {
        return;
    }

    const triggerRect =
        trigger.getBoundingClientRect();

    const tooltipRect =
        lexicalTooltip.getBoundingClientRect();

    const viewportWidth =
        window.innerWidth;

    const viewportHeight =
        window.innerHeight;

    const spacing = 10;

    let left =
        triggerRect.left +
        (
            triggerRect.width -
            tooltipRect.width
        ) / 2;

    left =
        Math.max(
            8,
            Math.min(
                left,
                viewportWidth -
                tooltipRect.width -
                8
            )
        );

    let top =
        triggerRect.top -
        tooltipRect.height -
        spacing;

    if (top < 8) {
        top =
            triggerRect.bottom +
            spacing;
    }

    if (
        top +
        tooltipRect.height >
        viewportHeight - 8
    ) {
        top =
            Math.max(
                8,
                viewportHeight -
                tooltipRect.height -
                8
            );
    }

    lexicalTooltip.style.left =
        String(left) + "px";

    lexicalTooltip.style.top =
        String(top) + "px";
}


/* ==========================================================
   MOSTRAR / ESCONDER POPUP
   ========================================================== */

function showTooltip(trigger) {
    if (!lexicalTooltip) {
        return;
    }

    activeTooltipTrigger =
        trigger;

    lexicalTooltip.innerHTML =
        buildTooltipContent(
            trigger
        );

    lexicalTooltip.classList.add(
        "visible"
    );

    lexicalTooltip.setAttribute(
        "aria-hidden",
        "false"
    );

    positionTooltip(trigger);
}


function hideTooltip() {
    if (!lexicalTooltip) {
        return;
    }

    activeTooltipTrigger =
        null;

    lexicalTooltip.classList.remove(
        "visible"
    );

    lexicalTooltip.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* ==========================================================
   EVENTOS
   ========================================================== */

menuToggle.addEventListener(
    "click",
    openDictionaryMenu
);

menuClose.addEventListener(
    "click",
    function () {
        closeDictionaryMenu(true);
    }
);

menuBackdrop.addEventListener(
    "click",
    function () {
        closeDictionaryMenu(true);
    }
);

dictionaryOptions.forEach(function (option) {
    option.addEventListener(
        "click",
        function () {
            selectDictionary(
                option.dataset.dictionaryTarget,
                {
                    updateHash: true,
                    focusSearch: true
                }
            );
        }
    );
});

themeInputs.forEach(function (input) {
    input.addEventListener("change", function () {
        if (input.checked) {
            applyTheme(input.value, true);
        }
    });
});

// Atualiza a pesquisa no próprio evento input, para que a linha esteja
// imediatamente disponível a navegação, leitores de tela e testes.
// O índice por dicionário e o cache de normalização limitam o custo.
searchInput.addEventListener("input", function () {
    ++searchGeneration;
    ++pageGeneration;
    window.clearTimeout(searchInputTimer);
    searchCount.textContent = searchInput.value.trim() ? "Pesquisando..." : "Digite para pesquisar";
    searchTableWrapper.hidden = true;
    searchInputTimer = window.setTimeout(filterEntries, 180);
});

searchPagination.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-page]");
    if (!button || button.disabled) return;
    const page = Number(button.dataset.page);
    if (Number.isInteger(page) && page !== currentResultsPage) {
        renderResultsPage(page, true);
    }
});

sourceFilter.addEventListener("change", function () {
    syncSourceCombobox();
    updateSourceDetails();
    filterEntries();
});

backToResults.addEventListener("click", returnToResults);

sourceFilterButton.addEventListener("click", function () {
    if (sourceFilterOptions.hidden) {
        openSourceCombobox();
    } else {
        closeSourceCombobox(false);
    }
});

sourceFilterButton.addEventListener("keydown", function (event) {
    const key = event.key;
    const isOpen = !sourceFilterOptions.hidden;

    if (key === "Escape" && isOpen) {
        event.preventDefault();
        event.stopPropagation();
        closeSourceCombobox(true);
        return;
    }

    if (key === "Tab") {
        closeSourceCombobox(false);
        return;
    }

    if (key === "Enter" || key === " ") {
        event.preventDefault();

        if (isOpen) {
            selectSourceOption(activeSourceOptionIndex);
        } else {
            openSourceCombobox();
        }

        return;
    }

    if (key === "ArrowDown" || key === "ArrowUp") {
        event.preventDefault();

        if (!isOpen) {
            openSourceCombobox();
        } else {
            setActiveSourceOption(
                activeSourceOptionIndex + (key === "ArrowDown" ? 1 : -1)
            );
        }

        return;
    }

    if (key === "Home" || key === "End") {
        event.preventDefault();

        if (!isOpen) {
            openSourceCombobox();
        }

        setActiveSourceOption(
            key === "Home" ? 0 : sourceFilterOptions.children.length - 1
        );

        return;
    }

    if (
        key.length === 1 &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
    ) {
        const now = Date.now();

        sourceTypeahead =
            (now - sourceTypeaheadTime > 650 ? "" : sourceTypeahead) +
            key.toLocaleUpperCase("pt-BR");
        sourceTypeaheadTime = now;

        const options = Array.from(sourceFilterOptions.children);
        let match = options.findIndex(function (option) {
            return option.textContent.toLocaleUpperCase("pt-BR")
                .startsWith(sourceTypeahead);
        });

        if (match === -1) {
            sourceTypeahead = key.toLocaleUpperCase("pt-BR");
            match = options.findIndex(function (option) {
                return option.textContent.toLocaleUpperCase("pt-BR")
                    .startsWith(sourceTypeahead);
            });
        }

        if (match !== -1) {
            event.preventDefault();

            if (!isOpen) {
                openSourceCombobox();
            }

            setActiveSourceOption(match);
        }
    }
});

document.addEventListener("pointerdown", function (event) {
    if (!sourceFilterBox.contains(event.target)) {
        closeSourceCombobox(false);
    }
});

// Delegação: dois eventos para a tabela, em vez de dois por verbete.
const searchResultsBody = document.getElementById("search-results");
searchResultsBody.addEventListener("click", function (event) {
    const row = event.target.closest(".search-row");
    if (row) openEntry(row);
});
searchResultsBody.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    const row = event.target.closest(".search-row");
    if (!row) return;
    event.preventDefault();
    openEntry(row);
});

function bindTooltipEvents() {
    // Delegação preserva pop-ups de mouse, teclado e toque, sem milhares
    // de ouvintes individuais. Os gatilhos criados depois também funcionam.
    function closestTrigger(event) {
        return event.target instanceof Element
            ? event.target.closest(".tooltip-trigger")
            : null;
    }

    document.addEventListener("mouseover", function (event) {
        const trigger = closestTrigger(event);
        if (trigger && !trigger.contains(event.relatedTarget)) {
            showTooltip(trigger);
        }
    });

    document.addEventListener("mouseout", function (event) {
        const trigger = closestTrigger(event);
        if (trigger && !trigger.contains(event.relatedTarget) &&
                activeTooltipTrigger === trigger) {
            hideTooltip();
        }
    });

    document.addEventListener("focusin", function (event) {
        const trigger = closestTrigger(event);
        if (trigger) showTooltip(trigger);
    });

    document.addEventListener("focusout", function (event) {
        const trigger = closestTrigger(event);
        if (trigger && activeTooltipTrigger === trigger) {
            hideTooltip();
        }
    });

    document.addEventListener("click", function (event) {
        const trigger = closestTrigger(event);
        if (!trigger) return;
        event.stopPropagation();

        if (activeTooltipTrigger === trigger &&
                lexicalTooltip.classList.contains("visible")) {
            hideTooltip();
        } else {
            showTooltip(trigger);
        }
    });
}

window.addEventListener(
    "resize",
    function () {
        if (activeTooltipTrigger) {
            positionTooltip(
                activeTooltipTrigger
            );
        }
    }
);

window.addEventListener(
    "scroll",
    function () {
        if (activeTooltipTrigger) {
            positionTooltip(
                activeTooltipTrigger
            );
        }
    },
    {
        passive: true
    }
);

window.addEventListener(
    "hashchange",
    function () {
        if (window.ScripturaSections?.handleHash()) return;
        selectDictionary(
            dictionaryFromHash(),
            {
                updateHash: false,
                focusSearch: false
            }
        );
    }
);

document.addEventListener(
    "click",
    function (event) {
        if (
            activeTooltipTrigger &&
            !event.target.closest(".tooltip-trigger")
        ) {
            hideTooltip();
        }
    }
);

document.addEventListener(
    "keydown",
    function (event) {
        if (event.key !== "Escape") {
            return;
        }

        if (
            dictionaryMenu.classList.contains("open")
        ) {
            closeDictionaryMenu(true);
            return;
        }

        if (!entryNavigation.hidden && !activeTooltipTrigger) {
            returnToResults();
            return;
        }

        hideTooltip();
    }
);


/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */

applyTheme(document.documentElement.dataset.theme, false);
// Sem transformação do corpus inteiro na inicialização.
bindTooltipEvents();


searchRows.forEach(function (row) {
    if (!row.dataset.dictionary) {
        row.dataset.dictionary = "grego";
    }
});

entryCards.forEach(function (card) {
    if (!card.dataset.dictionary) {
        card.dataset.dictionary = "grego";
    }
});

/* Só ocultar o <select> nativo após instalar a interface personalizada. */
sourceCombobox.hidden = false;
sourceFilterBox.classList.add("is-enhanced");

if (window.ScripturaSections?.handleHash()) {
    // A página inicial mostra somente as seis áreas principais.
} else {
    selectDictionary(
        dictionaryFromHash(),
        {
            updateHash: true,
            focusSearch: false
        }
    );
}
