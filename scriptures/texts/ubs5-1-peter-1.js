/* UBS5 — Primeira Epístola de Pedro, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações mantidas nos versículos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Πέτρος ἀπόστολος Ἰησοῦ Χριστοῦ ἐκλεκτοῖς παρεπιδήμοις διασπορᾶς Πόντου, Γαλατίας, Καππαδοκίας, Ἀσίας καὶ Βιθυνίας",
    "2": "κατὰ πρόγνωσιν θεοῦ πατρὸς ἐν ἁγιασμῷ πνεύματος εἰς ὑπακοὴν καὶ ῥαντισμὸν αἵματος Ἰησοῦ Χριστοῦ, χάρις ὑμῖν καὶ εἰρήνη πληθυνθείη.",
    "3": "Εὐλογητὸς ὁ θεὸς καὶ πατὴρ τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ ὁ κατὰ τὸ πολὺ αὐτοῦ ἔλεος ἀναγεννήσας ἡμᾶς εἰς ἐλπίδα ζῶσαν δι᾽ ἀναστάσεως Ἰησοῦ Χριστοῦ ἐκ νεκρῶν",
    "4": "εἰς κληρονομίαν ἄφθαρτον καὶ ἀμίαντον καὶ ἀμάραντον τετηρημένην ἐν οὐρανοῖς εἰς ὑμᾶς",
    "5": "τοὺς ἐν δυνάμει θεοῦ φρουρουμένους διὰ πίστεως εἰς σωτηρίαν ἑτοίμην ἀποκαλυφθῆναι ἐν καιρῷ ἐσχάτῳ",
    "6": "ἐν ᾧ ἀγαλλιᾶσθε ὀλίγον ἄρτι, εἰ δέον ἐστίν, λυπηθέντας ἐν ποικίλοις πειρασμοῖς,",
    "7": "ἵνα τὸ δοκίμιον ὑμῶν τῆς πίστεως πολυτιμότερον χρυσίου τοῦ ἀπολλυμένου, διὰ πυρὸς δὲ δοκιμαζομένου εὑρεθῇ εἰς ἔπαινον καὶ δόξαν καὶ τιμὴν ἐν ἀποκαλύψει Ἰησοῦ Χριστοῦ",
    "8": "ὃν οὐκ ἰδόντες ἀγαπᾶτε, εἰς ὃν ἄρτι μὴ ὁρῶντες, πιστεύοντες δὲ ἀγαλλιᾶσθε χαρᾷ ἀνεκλαλήτῳ καὶ δεδοξασμένῃ",
    "9": "κομιζόμενοι τὸ τέλος τῆς πίστεως ὑμῶν σωτηρίαν ψυχῶν.",
    "10": "Περὶ ἧς σωτηρίας ἐξεζήτησαν καὶ ἐξηραύνησαν προφῆται οἱ περὶ τῆς εἰς ὑμᾶς χάριτος προφητεύσαντες",
    "11": "ἐραυνῶντες εἰς τίνα ἢ ποῖον καιρὸν ἐδήλου τὸ ἐν αὐτοῖς πνεῦμα Χριστοῦ προμαρτυρόμενον τὰ εἰς Χριστὸν παθήματα καὶ τὰς μετὰ ταῦτα δόξας.",
    "12": "οἷς ἀπεκαλύφθη ὅτι οὐχ ἑαυτοῖς, ὑμῖν δὲ διηκόνουν αὐτὰ ἃ νῦν ἀνηγγέλη ὑμῖν διὰ τῶν εὐαγγελισαμένων ὑμᾶς ἐν πνεύματι ἁγίῳ ἀποσταλέντι ἀπ᾽ οὐρανοῦ, εἰς ἃ ἐπιθυμοῦσιν ἄγγελοι παρακύψαι.",
    "13": "Διὸ ἀναζωσάμενοι τὰς ὀσφύας τῆς διανοίας ὑμῶν νήφοντες τελείως ἐλπίσατε ἐπὶ τὴν φερομένην ὑμῖν χάριν ἐν ἀποκαλύψει Ἰησοῦ Χριστοῦ.",
    "14": "ὡς τέκνα ὑπακοῆς μὴ συσχηματιζόμενοι ταῖς πρότερον ἐν τῇ ἀγνοίᾳ ὑμῶν ἐπιθυμίαις,",
    "15": "ἀλλὰ κατὰ τὸν καλέσαντα ὑμᾶς ἅγιον καὶ αὐτοὶ ἅγιοι ἐν πάσῃ ἀναστροφῇ γενήθητε,",
    "16": "διότι γέγραπται, Ἅγιοι ἔσεσθε, ὅτι ἐγὼ ἅγιος.",
    "17": "Καὶ εἰ πατέρα ἐπικαλεῖσθε τὸν ἀπροσωπολήμπτως κρίνοντα κατὰ τὸ ἑκάστου ἔργον, ἐν φόβῳ τὸν τῆς παροικίας ὑμῶν χρόνον ἀναστράφητε",
    "18": "εἰδότες ὅτι οὐ φθαρτοῖς, ἀργυρίῳ ἢ χρυσίῳ, ἐλυτρώθητε ἐκ τῆς ματαίας ὑμῶν ἀναστροφῆς πατροπαραδότου",
    "19": "ἀλλὰ τιμίῳ αἵματι ὡς ἀμνοῦ ἀμώμου καὶ ἀσπίλου Χριστοῦ",
    "20": "προεγνωσμένου μὲν πρὸ καταβολῆς κόσμου, φανερωθέντος δὲ ἐπ᾽ ἐσχάτου τῶν χρόνων δι᾽ ὑμᾶς",
    "21": "τοὺς δι᾽ αὐτοῦ πιστοὺς εἰς θεὸν τὸν ἐγείραντα αὐτὸν ἐκ νεκρῶν καὶ δόξαν αὐτῷ δόντα, ὥστε τὴν πίστιν ὑμῶν καὶ ἐλπίδα εἶναι εἰς θεόν.",
    "22": "Τὰς ψυχὰς ὑμῶν ἡγνικότες ἐν τῇ ὑπακοῇ τῆς ἀληθείας εἰς φιλαδελφίαν ἀνυπόκριτον ἐκ καθαρᾶς καρδίας ἀλλήλους ἀγαπήσατε ἐκτενῶς",
    "23": "ἀναγεγεννημένοι οὐκ ἐκ σπορᾶς φθαρτῆς ἀλλ᾽ ἀφθάρτου διὰ λόγου ζῶντος θεοῦ καὶ μένοντος.",
    "24": "διότι\nπᾶσα σὰρξ ὡς χόρτος\nκαὶ πᾶσα δόξα αὐτῆς ὡς ἄνθος χόρτου·\nἐξηράνθη ὁ χόρτος\nκαὶ τὸ ἄνθος ἐξέπεσεν·",
    "25": "τὸ δὲ ῥῆμα κυρίου μένει εἰς τὸν αἰῶνα.\nτοῦτο δέ ἐστιν τὸ ῥῆμα τὸ εὐαγγελισθὲν εἰς ὑμᾶς."
};
    const paragraphEnds = [2,9,12,16,21,25];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 3,
        "title": "Uma esperança viva",
        "sourceTitle": "A Living Hope"
    },
    {
        "beforeVerse": 13,
        "title": "Chamado à vida santa",
        "sourceTitle": "A Call to Holy Living"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1PE"] = window.ScripturaScriptureTexts.UBS5["1PE"] || {};
    window.ScripturaScriptureTexts.UBS5["1PE"][1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] = window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"][1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"] = window.ScripturaScriptureHeadings.UBS5["1PE"] || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"][1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"][1] = unnumberedPassages;
})();
