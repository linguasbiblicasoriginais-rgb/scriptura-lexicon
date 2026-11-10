/* UBS5 — Epístola de Tiago, capítulo 4.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme identificação do projeto; sem cotejo independente com a edição impressa.
 * Texto grego e cabeçalhos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Πόθεν πόλεμοι καὶ πόθεν μάχαι ἐν ὑμῖν; οὐκ ἐντεῦθεν, ἐκ τῶν ἡδονῶν ὑμῶν τῶν στρατευομένων ἐν τοῖς μέλεσιν ὑμῶν;",
    "2": "ἐπιθυμεῖτε καὶ οὐκ ἔχετε, φονεύετε καὶ ζηλοῦτε καὶ οὐ δύνασθε ἐπιτυχεῖν, μάχεσθε καὶ πολεμεῖτε, οὐκ ἔχετε διὰ τὸ μὴ αἰτεῖσθαι ὑμᾶς,",
    "3": "αἰτεῖτε καὶ οὐ λαμβάνετε, διότι κακῶς αἰτεῖσθε, ἵνα ἐν ταῖς ἡδοναῖς ὑμῶν δαπανήσητε.",
    "4": "μοιχαλίδες, οὐκ οἴδατε ὅτι ἡ φιλία τοῦ κόσμου ἔχθρα τοῦ θεοῦ ἐστιν; ὃς ἐὰν οὖν βουληθῇ φίλος εἶναι τοῦ κόσμου, ἐχθρὸς τοῦ θεοῦ καθίσταται.",
    "5": "ἢ δοκεῖτε ὅτι κενῶς ἡ γραφὴ λέγει, Πρὸς φθόνον ἐπιποθεῖ τὸ πνεῦμα ὃ κατῴκισεν ἐν ἡμῖν,",
    "6": "μείζονα δὲ δίδωσιν χάριν; διὸ λέγει,\nὉ θεὸς ὑπερηφάνοις ἀντιτάσσεται,\nταπεινοῖς δὲ δίδωσιν χάριν.",
    "7": "ὑποτάγητε οὖν τῷ θεῷ, ἀντίστητε δὲ τῷ διαβόλῳ, καὶ φεύξεται ἀφ᾽ ὑμῶν·",
    "8": "ἐγγίσατε τῷ θεῷ καὶ ἐγγιεῖ ὑμῖν. καθαρίσατε χεῖρας, ἁμαρτωλοί, καὶ ἁγνίσατε καρδίας, δίψυχοι.",
    "9": "ταλαιπωρήσατε καὶ πενθήσατε καὶ κλαύσατε. ὁ γέλως ὑμῶν εἰς πένθος μετατραπήτω καὶ ἡ χαρὰ εἰς κατήφειαν.",
    "10": "ταπεινώθητε ἐνώπιον τοῦ κυρίου καὶ ὑψώσει ὑμᾶς.",
    "11": "Μὴ καταλαλεῖτε ἀλλήλων, ἀδελφοί. ὁ καταλαλῶν ἀδελφοῦ ἢ κρίνων τὸν ἀδελφὸν αὐτοῦ καταλαλεῖ νόμου καὶ κρίνει νόμον· εἰ δὲ νόμον κρίνεις, οὐκ εἶ ποιητὴς νόμου ἀλλὰ κριτής.",
    "12": "εἷς ἐστιν ὁ νομοθέτης καὶ κριτὴς ὁ δυνάμενος σῶσαι καὶ ἀπολέσαι· σὺ δὲ τίς εἶ ὁ κρίνων τὸν πλησίον;",
    "13": "Ἄγε νῦν οἱ λέγοντες, Σήμερον ἢ αὔριον πορευσόμεθα εἰς τήνδε τὴν πόλιν καὶ ποιήσομεν ἐκεῖ ἐνιαυτὸν καὶ ἐμπορευσόμεθα καὶ κερδήσομεν,",
    "14": "οἵτινες οὐκ ἐπίστασθε τὸ τῆς αὔριον ποία ἡ ζωὴ ὑμῶν – ἀτμὶς γάρ ἐστε ἡ πρὸς ὀλίγον φαινομένη, ἔπειτα καὶ ἀφανιζομένη –",
    "15": "ἀντὶ τοῦ λέγειν ὑμᾶς, Ἐὰν ὁ κύριος θελήσῃ καὶ ζήσομεν καὶ ποιήσομεν τοῦτο ἢ ἐκεῖνο.",
    "16": "νῦν δὲ καυχᾶσθε ἐν ταῖς ἀλαζονείαις ὑμῶν· πᾶσα καύχησις τοιαύτη πονηρά ἐστιν.",
    "17": "εἰδότι οὖν καλὸν ποιεῖν καὶ μὴ ποιοῦντι, ἁμαρτία αὐτῷ ἐστιν."
};
    const paragraphEnds = [10,12,17];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A amizade com o mundo",
        "sourceTitle": "Friendship with the World"
    },
    {
        "beforeVerse": 11,
        "title": "Julgar um irmão",
        "sourceTitle": "Judging a Brother"
    },
    {
        "beforeVerse": 13,
        "title": "Advertência contra a arrogância",
        "sourceTitle": "Warning against Boasting"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.JAS = window.ScripturaScriptureTexts.UBS5.JAS || {};
    window.ScripturaScriptureTexts.UBS5.JAS[4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JAS = window.ScripturaScriptureParagraphBreaks.UBS5.JAS || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JAS[4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.JAS = window.ScripturaScriptureHeadings.UBS5.JAS || {};
    window.ScripturaScriptureHeadings.UBS5.JAS[4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JAS = window.ScripturaScriptureUnnumberedPassages.UBS5.JAS || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JAS[4] = unnumberedPassages;
})();
