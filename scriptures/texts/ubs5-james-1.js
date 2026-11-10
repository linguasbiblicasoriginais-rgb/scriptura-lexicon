/* UBS5 — Epístola de Tiago, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme identificação do projeto; sem cotejo independente com a edição impressa.
 * Texto grego e cabeçalhos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἰάκωβος θεοῦ καὶ κυρίου Ἰησοῦ Χριστοῦ δοῦλος ταῖς δώδεκα φυλαῖς ταῖς ἐν τῇ διασπορᾷ χαίρειν.",
    "2": "Πᾶσαν χαρὰν ἡγήσασθε, ἀδελφοί μου, ὅταν πειρασμοῖς περιπέσητε ποικίλοις,",
    "3": "γινώσκοντες ὅτι τὸ δοκίμιον ὑμῶν τῆς πίστεως κατεργάζεται ὑπομονήν.",
    "4": "ἡ δὲ ὑπομονὴ ἔργον τέλειον ἐχέτω, ἵνα ἦτε τέλειοι καὶ ὁλόκληροι ἐν μηδενὶ λειπόμενοι.",
    "5": "Εἰ δέ τις ὑμῶν λείπεται σοφίας, αἰτείτω παρὰ τοῦ διδόντος θεοῦ πᾶσιν ἁπλῶς καὶ μὴ ὀνειδίζοντος, καὶ δοθήσεται αὐτῷ.",
    "6": "αἰτείτω δὲ ἐν πίστει μηδὲν διακρινόμενος· ὁ γὰρ διακρινόμενος ἔοικεν κλύδωνι θαλάσσης ἀνεμιζομένῳ καὶ ῥιπιζομένῳ.",
    "7": "μὴ γὰρ οἰέσθω ὁ ἄνθρωπος ἐκεῖνος ὅτι λήμψεταί τι παρὰ τοῦ κυρίου,",
    "8": "ἀνὴρ δίψυχος, ἀκατάστατος ἐν πάσαις ταῖς ὁδοῖς αὐτοῦ.",
    "9": "Καυχάσθω δὲ ὁ ἀδελφὸς ὁ ταπεινὸς ἐν τῷ ὕψει αὐτοῦ,",
    "10": "ὁ δὲ πλούσιος ἐν τῇ ταπεινώσει αὐτοῦ, ὅτι ὡς ἄνθος χόρτου παρελεύσεται.",
    "11": "ἀνέτειλεν γὰρ ὁ ἥλιος σὺν τῷ καύσωνι καὶ ἐξήρανεν τὸν χόρτον, καὶ τὸ ἄνθος αὐτοῦ ἐξέπεσεν, καὶ ἡ εὐπρέπεια τοῦ προσώπου αὐτοῦ ἀπώλετο· οὕτως καὶ ὁ πλούσιος ἐν ταῖς πορείαις αὐτοῦ μαρανθήσεται.",
    "12": "Μακάριος ἀνὴρ ὃς ὑπομένει πειρασμόν, ὅτι δόκιμος γενόμενος λήμψεται τὸν στέφανον τῆς ζωῆς ὃν ἐπηγγείλατο τοῖς ἀγαπῶσιν αὐτόν.",
    "13": "μηδεὶς πειραζόμενος λεγέτω ὅτι Ἀπὸ θεοῦ πειράζομαι· ὁ γὰρ θεὸς ἀπείραστός ἐστιν κακῶν, πειράζει δὲ αὐτὸς οὐδένα.",
    "14": "ἕκαστος δὲ πειράζεται ὑπὸ τῆς ἰδίας ἐπιθυμίας ἐξελκόμενος καὶ δελεαζόμενος·",
    "15": "εἶτα ἡ ἐπιθυμία συλλαβοῦσα τίκτει ἁμαρτίαν, ἡ δὲ ἁμαρτία ἀποτελεσθεῖσα ἀποκύει θάνατον.",
    "16": "Μὴ πλανᾶσθε, ἀδελφοί μου ἀγαπητοί.",
    "17": "πᾶσα δόσις ἀγαθὴ καὶ πᾶν δώρημα τέλειον ἄνωθέν ἐστιν καταβαῖνον ἀπὸ τοῦ πατρὸς τῶν φώτων, παρ᾽ ᾧ οὐκ ἔνι παραλλαγὴ ἢ τροπῆς ἀποσκίασμα.",
    "18": "βουληθεὶς ἀπεκύησεν ἡμᾶς λόγῳ ἀληθείας εἰς τὸ εἶναι ἡμᾶς ἀπαρχήν τινα τῶν αὐτοῦ κτισμάτων.",
    "19": "Ἴστε, ἀδελφοί μου ἀγαπητοί· ἔστω δὲ πᾶς ἄνθρωπος ταχὺς εἰς τὸ ἀκοῦσαι, βραδὺς εἰς τὸ λαλῆσαι, βραδὺς εἰς ὀργήν·",
    "20": "ὀργὴ γὰρ ἀνδρὸς δικαιοσύνην θεοῦ οὐ κατεργάζεται.",
    "21": "διὸ ἀποθέμενοι πᾶσαν ῥυπαρίαν καὶ περισσείαν κακίας ἐν πραΰτητι δέξασθε τὸν ἔμφυτον λόγον τὸν δυνάμενον σῶσαι τὰς ψυχὰς ὑμῶν.",
    "22": "Γίνεσθε δὲ ποιηταὶ λόγου καὶ μὴ μόνον ἀκροαταὶ παραλογιζόμενοι ἑαυτούς.",
    "23": "ὅτι εἴ τις ἀκροατὴς λόγου ἐστὶν καὶ οὐ ποιητής, οὗτος ἔοικεν ἀνδρὶ κατανοοῦντι τὸ πρόσωπον τῆς γενέσεως αὐτοῦ ἐν ἐσόπτρῳ·",
    "24": "κατενόησεν γὰρ ἑαυτὸν καὶ ἀπελήλυθεν καὶ εὐθέως ἐπελάθετο ὁποῖος ἦν.",
    "25": "ὁ δὲ παρακύψας εἰς νόμον τέλειον τὸν τῆς ἐλευθερίας καὶ παραμείνας οὐκ ἀκροατὴς ἐπιλησμονῆς γενόμενος ἀλλὰ ποιητὴς ἔργου, οὗτος μακάριος ἐν τῇ ποιήσει αὐτοῦ ἔσται.",
    "26": "Εἴ τις δοκεῖ θρησκὸς εἶναι μὴ χαλιναγωγῶν γλῶσσαν αὐτοῦ ἀλλ᾽ ἀπατῶν καρδίαν αὐτοῦ, τούτου μάταιος ἡ θρησκεία.",
    "27": "θρησκεία καθαρὰ καὶ ἀμίαντος παρὰ τῷ θεῷ καὶ πατρὶ αὕτη ἐστίν, ἐπισκέπτεσθαι ὀρφανοὺς καὶ χήρας ἐν τῇ θλίψει αὐτῶν, ἄσπιλον ἑαυτὸν τηρεῖν ἀπὸ τοῦ κόσμου."
};
    const paragraphEnds = [1,8,11,15,18,21,25,27];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 2,
        "title": "Fé e sabedoria",
        "sourceTitle": "Faith and Wisdom"
    },
    {
        "beforeVerse": 9,
        "title": "Pobreza e riqueza",
        "sourceTitle": "Poverty and Riches"
    },
    {
        "beforeVerse": 12,
        "title": "Provação e tentação",
        "sourceTitle": "Trial and Temptation"
    },
    {
        "beforeVerse": 19,
        "title": "Ouvir e praticar a Palavra",
        "sourceTitle": "Hearing and Doing The Word"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.JAS = window.ScripturaScriptureTexts.UBS5.JAS || {};
    window.ScripturaScriptureTexts.UBS5.JAS[1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JAS = window.ScripturaScriptureParagraphBreaks.UBS5.JAS || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JAS[1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.JAS = window.ScripturaScriptureHeadings.UBS5.JAS || {};
    window.ScripturaScriptureHeadings.UBS5.JAS[1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JAS = window.ScripturaScriptureUnnumberedPassages.UBS5.JAS || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JAS[1] = unnumberedPassages;
})();
