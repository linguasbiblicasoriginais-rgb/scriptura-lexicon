/* UBS5 — Romanos 2. Texto grego fornecido pelo usuário em 09/11/2026.
 * Referência UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego, títulos traduzidos e divisões editoriais conservados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Διὸ ἀναπολόγητος εἶ, ὦ ἄνθρωπε πᾶς ὁ κρίνων· ἐν ᾧ γὰρ κρίνεις τὸν ἕτερον, σεαυτὸν κατακρίνεις, τὰ γὰρ αὐτὰ πράσσεις ὁ κρίνων.",
    "2": "οἴδαμεν δὲ ὅτι τὸ κρίμα τοῦ θεοῦ ἐστιν κατὰ ἀλήθειαν ἐπὶ τοὺς τὰ τοιαῦτα πράσσοντας.",
    "3": "λογίζῃ δὲ τοῦτο, ὦ ἄνθρωπε ὁ κρίνων τοὺς τὰ τοιαῦτα πράσσοντας καὶ ποιῶν αὐτά, ὅτι σὺ ἐκφεύξῃ τὸ κρίμα τοῦ θεοῦ;",
    "4": "ἢ τοῦ πλούτου τῆς χρηστότητος αὐτοῦ καὶ τῆς ἀνοχῆς καὶ τῆς μακροθυμίας καταφρονεῖς, ἀγνοῶν ὅτι τὸ χρηστὸν τοῦ θεοῦ εἰς μετάνοιάν σε ἄγει;",
    "5": "κατὰ δὲ τὴν σκληρότητά σου καὶ ἀμετανόητον καρδίαν θησαυρίζεις σεαυτῷ ὀργὴν ἐν ἡμέρᾳ ὀργῆς καὶ ἀποκαλύψεως δικαιοκρισίας τοῦ θεοῦ",
    "6": "ὃς ἀποδώσει ἑκάστῳ κατὰ τὰ ἔργα αὐτοῦ·",
    "7": "τοῖς μὲν καθ᾽ ὑπομονὴν ἔργου ἀγαθοῦ δόξαν καὶ τιμὴν καὶ ἀφθαρσίαν ζητοῦσιν ζωὴν αἰώνιον,",
    "8": "τοῖς δὲ ἐξ ἐριθείας καὶ ἀπειθοῦσιν τῇ ἀληθείᾳ πειθομένοις δὲ τῇ ἀδικίᾳ ὀργὴ καὶ θυμός.",
    "9": "θλῖψις καὶ στενοχωρία ἐπὶ πᾶσαν ψυχὴν ἀνθρώπου τοῦ κατεργαζομένου τὸ κακόν, Ἰουδαίου τε πρῶτον καὶ Ἕλληνος·",
    "10": "δόξα δὲ καὶ τιμὴ καὶ εἰρήνη παντὶ τῷ ἐργαζομένῳ τὸ ἀγαθόν, Ἰουδαίῳ τε πρῶτον καὶ Ἕλληνι·",
    "11": "οὐ γάρ ἐστιν προσωπολημψία παρὰ τῷ θεῷ.",
    "12": "ὅσοι γὰρ ἀνόμως ἥμαρτον, ἀνόμως καὶ ἀπολοῦνται, καὶ ὅσοι ἐν νόμῳ ἥμαρτον, διὰ νόμου κριθήσονται·",
    "13": "οὐ γὰρ οἱ ἀκροαταὶ νόμου δίκαιοι παρὰ [τῷ] θεῷ, ἀλλ᾽ οἱ ποιηταὶ νόμου δικαιωθήσονται.",
    "14": "ὅταν γὰρ ἔθνη τὰ μὴ νόμον ἔχοντα φύσει τὰ τοῦ νόμου ποιῶσιν, οὗτοι νόμον μὴ ἔχοντες ἑαυτοῖς εἰσιν νόμος·",
    "15": "οἵτινες ἐνδείκνυνται τὸ ἔργον τοῦ νόμου γραπτὸν ἐν ταῖς καρδίαις αὐτῶν, συμμαρτυρούσης αὐτῶν τῆς συνειδήσεως καὶ μεταξὺ ἀλλήλων τῶν λογισμῶν κατηγορούντων ἢ καὶ ἀπολογουμένων,",
    "16": "ἐν ἡμέρᾳ ὅτε κρίνει ὁ θεὸς τὰ κρυπτὰ τῶν ἀνθρώπων κατὰ τὸ εὐαγγέλιόν μου διὰ Χριστοῦ Ἰησοῦ.",
    "17": "Εἰ δὲ σὺ Ἰουδαῖος ἐπονομάζῃ καὶ ἐπαναπαύῃ νόμῳ καὶ καυχᾶσαι ἐν θεῷ",
    "18": "καὶ γινώσκεις τὸ θέλημα καὶ δοκιμάζεις τὰ διαφέροντα κατηχούμενος ἐκ τοῦ νόμου,",
    "19": "πέποιθάς τε σεαυτὸν ὁδηγὸν εἶναι τυφλῶν, φῶς τῶν ἐν σκότει,",
    "20": "παιδευτὴν ἀφρόνων, διδάσκαλον νηπίων, ἔχοντα τὴν μόρφωσιν τῆς γνώσεως καὶ τῆς ἀληθείας ἐν τῷ νόμῳ·",
    "21": "ὁ οὖν διδάσκων ἕτερον σεαυτὸν οὐ διδάσκεις; ὁ κηρύσσων μὴ κλέπτειν κλέπτεις;",
    "22": "ὁ λέγων μὴ μοιχεύειν μοιχεύεις; ὁ βδελυσσόμενος τὰ εἴδωλα ἱεροσυλεῖς;",
    "23": "ὃς ἐν νόμῳ καυχᾶσαι, διὰ τῆς παραβάσεως τοῦ νόμου τὸν θεὸν ἀτιμάζεις·",
    "24": "τὸ γὰρ ὄνομα τοῦ θεοῦ δι᾽ ὑμᾶς βλασφημεῖται ἐν τοῖς ἔθνεσιν, καθὼς γέγραπται.",
    "25": "περιτομὴ μὲν γὰρ ὠφελεῖ ἐὰν νόμον πράσσῃς· ἐὰν δὲ παραβάτης νόμου ᾖς, ἡ περιτομή σου ἀκροβυστία γέγονεν.",
    "26": "ἐὰν οὖν ἡ ἀκροβυστία τὰ δικαιώματα τοῦ νόμου φυλάσσῃ, οὐχ ἡ ἀκροβυστία αὐτοῦ εἰς περιτομὴν λογισθήσεται;",
    "27": "καὶ κρινεῖ ἡ ἐκ φύσεως ἀκροβυστία τὸν νόμον τελοῦσα σὲ τὸν διὰ γράμματος καὶ περιτομῆς παραβάτην νόμου.",
    "28": "οὐ γὰρ ὁ ἐν τῷ φανερῷ Ἰουδαῖός ἐστιν οὐδὲ ἡ ἐν τῷ φανερῷ ἐν σαρκὶ περιτομή,",
    "29": "ἀλλ᾽ ὁ ἐν τῷ κρυπτῷ Ἰουδαῖος, καὶ περιτομὴ καρδίας ἐν πνεύματι οὐ γράμματι, οὗ ὁ ἔπαινος οὐκ ἐξ ἀνθρώπων ἀλλ᾽ ἐκ τοῦ θεοῦ."
};
    const paragraphEnds = [16,29];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O justo juízo de Deus",
        "sourceTitle": "The Righteous Judgment of God"
    },
    {
        "beforeVerse": 17,
        "title": "Os judeus e a Lei",
        "sourceTitle": "The Jews and the Law"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ROM = window.ScripturaScriptureTexts.UBS5.ROM || {};
    window.ScripturaScriptureTexts.UBS5.ROM[2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM = window.ScripturaScriptureParagraphBreaks.UBS5.ROM || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM[2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ROM = window.ScripturaScriptureHeadings.UBS5.ROM || {};
    window.ScripturaScriptureHeadings.UBS5.ROM[2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM = window.ScripturaScriptureUnnumberedPassages.UBS5.ROM || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM[2] = unnumberedPassages;
})();
