"use strict";

const searchInput = document.getElementById("search-input");
const sourceFilter = document.getElementById("source-filter");
const searchTableWrapper = document.getElementById("search-table-wrapper");

const searchRows = Array.from(
    document.querySelectorAll(".search-row")
);

const entryCards = Array.from(
    document.querySelectorAll(".entry-card")
);

const searchCount = document.getElementById("search-count");
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


function enrichBibleReferenceTooltips() {
    const links = Array.from(
        document.querySelectorAll(
            'a.reference-link[href*="die-bibel.de/en/bible/"]'
        )
    );

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
    { key: "Gramm. Graeci", type: "biblio", text: "Grammatici Graeci" }
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


function enrichBibliographicTooltips() {
    const roots =
        Array.from(
            document.querySelectorAll(
                ".entry-text"
            )
        );

    const definitions =
        automaticBibliographicTerms
            .slice()
            .sort(function (a, b) {
                return (
                    b.key.length -
                    a.key.length
                );
            });

    roots.forEach(function (root) {
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
        automaticNamedAuthors
            .slice()
            .sort(function (a, b) {
                return (
                    b.key.length -
                    a.key.length
                );
            })
            .forEach(function (definition) {
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
    return searchRows.filter(function (row) {
        return row.dataset.dictionary === activeDictionary;
    });
}


function cardsForActiveDictionary() {
    return entryCards.filter(function (card) {
        return card.dataset.dictionary === activeDictionary;
    });
}


function resetSearchState() {
    searchInput.value = "";

    searchRows.forEach(function (row) {
        row.hidden = true;
    });

    entryCards.forEach(function (card) {
        card.hidden = true;
    });

    searchTableWrapper.hidden = true;
    noResults.hidden = true;

    searchCount.textContent = "Digite para pesquisar";
}


function populateSourceFilter() {
    const previousValue = sourceFilter.value;

    sourceFilter.innerHTML =
        '<option value="">Todas as fontes</option>';

    const sources = [
        ...new Set(
            rowsForActiveDictionary()
                .map(function (row) {
                    return row.dataset.source;
                })
                .filter(Boolean)
        )
    ].sort(function (a, b) {
        return a.localeCompare(b, "pt-BR");
    });

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
}


function selectDictionary(dictionary, options) {
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

function filterEntries() {
    const rawQuery =
        searchInput.value.trim();

    const query =
        normalizeText(rawQuery);

    const selectedSource =
        sourceFilter.value;

    entryCards.forEach(function (card) {
        card.hidden = true;
    });

    if (query === "") {
        searchRows.forEach(function (row) {
            row.hidden = true;
        });

        searchTableWrapper.hidden = true;
        noResults.hidden = true;

        searchCount.textContent =
            "Digite para pesquisar";

        return;
    }

    searchTableWrapper.hidden = false;

    let visibleCount = 0;
    const activeRows =
        rowsForActiveDictionary();

    searchRows.forEach(function (row) {
        if (
            row.dataset.dictionary !==
            activeDictionary
        ) {
            row.hidden = true;
            return;
        }

        const rawSearchText =
            row.dataset.search ||
            row.textContent;

        const searchableText =
            normalizeText(
                rawSearchText
            );

        const rowSource =
            row.dataset.source || "";

        const matchesText =
            searchableText.includes(query);

        const matchesSource =
            selectedSource === "" ||
            rowSource === selectedSource;

        const visible =
            matchesText &&
            matchesSource;

        row.hidden = !visible;

        if (visible) {
            visibleCount++;
        }
    });

    updateCounter(visibleCount);

    if (
        visibleCount === 0 &&
        activeRows.length === 0
    ) {
        noResults.textContent =
            "Nenhum verbete cadastrado neste dicionário.";
    } else {
        noResults.textContent =
            "Nenhum verbete encontrado.";
    }

    noResults.hidden =
        visibleCount !== 0;
}


/* ==========================================================
   ABRIR VERBETE
   ========================================================== */

function openEntry(row) {
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

    const target =
        document.getElementById(
            targetId
        );

    if (
        !target ||
        target.dataset.dictionary !==
            activeDictionary
    ) {
        return;
    }

    entryCards.forEach(function (card) {
        card.hidden = card !== target;
    });

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
        const meanings =
            parseMeanings(
                trigger.dataset.meanings
            );

        let html =
            '<div class="tooltip-heading greek-heading">' +
            escapeHtml(label) +
            "</div>";

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

searchInput.addEventListener(
    "input",
    filterEntries
);

sourceFilter.addEventListener(
    "change",
    filterEntries
);

searchRows.forEach(function (row) {
    row.addEventListener(
        "click",
        function () {
            openEntry(row);
        }
    );

    row.addEventListener(
        "keydown",
        function (event) {
            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                openEntry(row);
            }
        }
    );
});

function bindTooltipEvents() {
    tooltipTriggers =
        Array.from(
            document.querySelectorAll(
                ".tooltip-trigger"
            )
        );

    tooltipTriggers.forEach(function (trigger) {
    trigger.addEventListener(
        "mouseenter",
        function () {
            showTooltip(trigger);
        }
    );

    trigger.addEventListener(
        "mouseleave",
        hideTooltip
    );

    trigger.addEventListener(
        "focus",
        function () {
            showTooltip(trigger);
        }
    );

    trigger.addEventListener(
        "blur",
        hideTooltip
    );

    trigger.addEventListener(
        "click",
        function (event) {
            event.stopPropagation();

            if (
                activeTooltipTrigger === trigger &&
                lexicalTooltip.classList.contains("visible")
            ) {
                hideTooltip();
            } else {
                showTooltip(trigger);
            }
        }
    );
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

        hideTooltip();
    }
);


/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */

enrichBibliographicTooltips();
enrichBibleReferenceTooltips();
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

selectDictionary(
    dictionaryFromHash(),
    {
        updateHash: true,
        focusSearch: false
    }
);
