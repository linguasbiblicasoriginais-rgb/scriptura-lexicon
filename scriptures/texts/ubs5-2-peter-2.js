/* UBS5 — Segunda Epístola de Pedro, capítulo 2.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego e paratexto editorial mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἐγένοντο δὲ καὶ ψευδοπροφῆται ἐν τῷ λαῷ, ὡς καὶ ἐν ὑμῖν ἔσονται ψευδοδιδάσκαλοι, οἵτινες παρεισάξουσιν αἱρέσεις ἀπωλείας καὶ τὸν ἀγοράσαντα αὐτοὺς δεσπότην ἀρνούμενοι ἐπάγοντες ἑαυτοῖς ταχινὴν ἀπώλειαν.",
    "2": "καὶ πολλοὶ ἐξακολουθήσουσιν αὐτῶν ταῖς ἀσελγείαις δι᾽ οὓς ἡ ὁδὸς τῆς ἀληθείας βλασφημηθήσεται,",
    "3": "καὶ ἐν πλεονεξίᾳ πλαστοῖς λόγοις ὑμᾶς ἐμπορεύσονται, οἷς τὸ κρίμα ἔκπαλαι οὐκ ἀργεῖ καὶ ἡ ἀπώλεια αὐτῶν οὐ νυστάζει.",
    "4": "Εἰ γὰρ ὁ θεὸς ἀγγέλων ἁμαρτησάντων οὐκ ἐφείσατο ἀλλὰ σειραῖς ζόφου ταρταρώσας παρέδωκεν εἰς κρίσιν τηρουμένους",
    "5": "καὶ ἀρχαίου κόσμου οὐκ ἐφείσατο ἀλλ᾽ ὄγδοον Νῶε δικαιοσύνης κήρυκα ἐφύλαξεν κατακλυσμὸν κόσμῳ ἀσεβῶν ἐπάξας",
    "6": "καὶ πόλεις Σοδόμων καὶ Γομόρρας τεφρώσας καταστροφῇ κατέκρινεν ὑπόδειγμα μελλόντων ἀσεβεῖν τεθεικὼς",
    "7": "καὶ δίκαιον Λὼτ καταπονούμενον ὑπὸ τῆς τῶν ἀθέσμων ἐν ἀσελγείᾳ ἀναστροφῆς ἐρρύσατο·",
    "8": "βλέμματι γὰρ καὶ ἀκοῇ ὁ δίκαιος ἐγκατοικῶν ἐν αὐτοῖς ἡμέραν ἐξ ἡμέρας ψυχὴν δικαίαν ἀνόμοις ἔργοις ἐβασάνιζεν.",
    "9": "οἶδεν κύριος εὐσεβεῖς ἐκ πειρασμοῦ ῥύεσθαι, ἀδίκους δὲ εἰς ἡμέραν κρίσεως κολαζομένους τηρεῖν,",
    "10": "μάλιστα δὲ τοὺς ὀπίσω σαρκὸς ἐν ἐπιθυμίᾳ μιασμοῦ πορευομένους καὶ κυριότητος καταφρονοῦντας.\nΤολμηταὶ αὐθάδεις δόξας οὐ τρέμουσιν βλασφημοῦντες,",
    "11": "ὅπου ἄγγελοι ἰσχύϊ καὶ δυνάμει μείζονες ὄντες οὐ φέρουσιν κατ᾽ αὐτῶν παρὰ κυρίῳ βλάσφημον κρίσιν.",
    "12": "οὗτοι δὲ ὡς ἄλογα ζῷα γεγεννημένα φυσικὰ εἰς ἅλωσιν καὶ φθορὰν ἐν οἷς ἀγνοοῦσιν βλασφημοῦντες ἐν τῇ φθορᾷ αὐτῶν καὶ φθαρήσονται",
    "13": "ἀδικούμενοι μισθὸν ἀδικίας ἡδονὴν ἡγούμενοι τὴν ἐν ἡμέρᾳ τρυφήν, σπίλοι καὶ μῶμοι ἐντρυφῶντες ἐν ταῖς ἀπάταις αὐτῶν συνευωχούμενοι ὑμῖν,",
    "14": "ὀφθαλμοὺς ἔχοντες μεστοὺς μοιχαλίδος καὶ ἀκαταπαύστους ἁμαρτίας, δελεάζοντες ψυχὰς ἀστηρίκτους, καρδίαν γεγυμνασμένην πλεονεξίας ἔχοντες, κατάρας τέκνα.",
    "15": "καταλιπόντες εὐθεῖαν ὁδὸν ἐπλανήθησαν ἐξακολουθήσαντες τῇ ὁδῷ τοῦ Βαλαὰμ τοῦ Βοσὸρ ὃς μισθὸν ἀδικίας ἠγάπησεν,",
    "16": "ἔλεγξιν δὲ ἔσχεν ἰδίας παρανομίας· ὑποζύγιον ἄφωνον ἐν ἀνθρώπου φωνῇ φθεγξάμενον ἐκώλυσεν τὴν τοῦ προφήτου παραφρονίαν.",
    "17": "Οὗτοί εἰσιν πηγαὶ ἄνυδροι καὶ ὁμίχλαι ὑπὸ λαίλαπος ἐλαυνόμεναι οἷς ὁ ζόφος τοῦ σκότους τετήρηται.",
    "18": "ὑπέρογκα γὰρ ματαιότητος φθεγγόμενοι δελεάζουσιν ἐν ἐπιθυμίαις σαρκὸς ἀσελγείαις τοὺς ὄντως ἀποφεύγοντας τοὺς ἐν πλάνῃ ἀναστρεφομένους,",
    "19": "ἐλευθερίαν αὐτοῖς ἐπαγγελλόμενοι αὐτοὶ δοῦλοι ὑπάρχοντες τῆς φθορᾶς· ᾧ γάρ τις ἥττηται, τούτῳ δεδούλωται.",
    "20": "εἰ γὰρ ἀποφυγόντες τὰ μιάσματα τοῦ κόσμου ἐν ἐπιγνώσει τοῦ κυρίου καὶ σωτῆρος Ἰησοῦ Χριστοῦ, τούτοις δὲ πάλιν ἐμπλακέντες ἡττῶνται, γέγονεν αὐτοῖς τὰ ἔσχατα χείρονα τῶν πρώτων.",
    "21": "κρεῖττον γὰρ ἦν αὐτοῖς μὴ ἐπεγνωκέναι τὴν ὁδὸν τῆς δικαιοσύνης ἢ ἐπιγνοῦσιν ὑποστρέψαι ἐκ τῆς παραδοθείσης αὐτοῖς ἁγίας ἐντολῆς.",
    "22": "συμβέβηκεν αὐτοῖς τὸ τῆς ἀληθοῦς παροιμίας,\nΚύων ἐπιστρέψας ἐπὶ τὸ ἴδιον ἐξέραμα,\nκαί,\nὟς λουσαμένη εἰς κυλισμὸν βορβόρου."
};
    const paragraphEnds = [3,16,22];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Falsos profetas e mestres",
        "sourceTitle": "False Prophets and Teachers",
        "sourceCrossReference": "(Jude 4‑13)",
        "translatedCrossReference": "Judas 4–13"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2PE"] = window.ScripturaScriptureTexts.UBS5["2PE"] || {};
    window.ScripturaScriptureTexts.UBS5["2PE"][2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2PE"] = window.ScripturaScriptureParagraphBreaks.UBS5["2PE"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2PE"][2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2PE"] = window.ScripturaScriptureHeadings.UBS5["2PE"] || {};
    window.ScripturaScriptureHeadings.UBS5["2PE"][2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2PE"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2PE"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2PE"][2] = unnumberedPassages;
})();
