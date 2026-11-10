/* UBS5 — Terceira Epístola de João, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego e títulos editoriais preservados em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὁ πρεσβύτερος Γαΐῳ τῷ ἀγαπητῷ, ὃν ἐγὼ ἀγαπῶ ἐν ἀληθείᾳ.",
    "2": "Ἀγαπητέ, περὶ πάντων εὔχομαί σε εὐοδοῦσθαι καὶ ὑγιαίνειν, καθὼς εὐοδοῦταί σου ἡ ψυχή.",
    "3": "ἐχάρην γὰρ λίαν ἐρχομένων ἀδελφῶν καὶ μαρτυρούντων σου τῇ ἀληθείᾳ, καθὼς σὺ ἐν ἀληθείᾳ περιπατεῖς.",
    "4": "μειζοτέραν τούτων οὐκ ἔχω χαράν, ἵνα ἀκούω τὰ ἐμὰ τέκνα ἐν ἀληθείᾳ περιπατοῦντα.",
    "5": "Ἀγαπητέ, πιστὸν ποιεῖς ὃ ἐὰν ἐργάσῃ εἰς τοὺς ἀδελφοὺς καὶ τοῦτο ξένους,",
    "6": "οἳ ἐμαρτύρησάν σου τῇ ἀγάπῃ ἐνώπιον ἐκκλησίας, οὓς καλῶς ποιήσεις προπέμψας ἀξίως τοῦ θεοῦ·",
    "7": "ὑπὲρ γὰρ τοῦ ὀνόματος ἐξῆλθον μηδὲν λαμβάνοντες ἀπὸ τῶν ἐθνικῶν.",
    "8": "ἡμεῖς οὖν ὀφείλομεν ὑπολαμβάνειν τοὺς τοιούτους, ἵνα συνεργοὶ γινώμεθα τῇ ἀληθείᾳ.",
    "9": "Ἔγραψά τι τῇ ἐκκλησίᾳ· ἀλλ᾽ ὁ φιλοπρωτεύων αὐτῶν Διοτρέφης οὐκ ἐπιδέχεται ἡμᾶς.",
    "10": "διὰ τοῦτο, ἐὰν ἔλθω, ὑπομνήσω αὐτοῦ τὰ ἔργα ἃ ποιεῖ λόγοις πονηροῖς φλυαρῶν ἡμᾶς, καὶ μὴ ἀρκούμενος ἐπὶ τούτοις οὔτε αὐτὸς ἐπιδέχεται τοὺς ἀδελφοὺς καὶ τοὺς βουλομένους κωλύει καὶ ἐκ τῆς ἐκκλησίας ἐκβάλλει.",
    "11": "Ἀγαπητέ, μὴ μιμοῦ τὸ κακὸν ἀλλὰ τὸ ἀγαθόν. ὁ ἀγαθοποιῶν ἐκ τοῦ θεοῦ ἐστιν· ὁ κακοποιῶν οὐχ ἑώρακεν τὸν θεόν.",
    "12": "Δημητρίῳ μεμαρτύρηται ὑπὸ πάντων καὶ ὑπὸ αὐτῆς τῆς ἀληθείας· καὶ ἡμεῖς δὲ μαρτυροῦμεν, καὶ οἶδας ὅτι ἡ μαρτυρία ἡμῶν ἀληθής ἐστιν.",
    "13": "Πολλὰ εἶχον γράψαι σοι ἀλλ᾽ οὐ θέλω διὰ μέλανος καὶ καλάμου σοι γράφειν·",
    "14": "ἐλπίζω δὲ εὐθέως σε ἰδεῖν, καὶ στόμα πρὸς στόμα λαλήσομεν.",
    "15": "εἰρήνη σοι. ἀσπάζονταί σε οἱ φίλοι. ἀσπάζου τοὺς φίλους κατ᾽ ὄνομα."
};
    const paragraphEnds = [1,4,8,10,12,15];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 5,
        "title": "Cooperação e oposição",
        "sourceTitle": "Cooperation and Opposition"
    },
    {
        "beforeVerse": 13,
        "title": "Saudações finais",
        "sourceTitle": "Final Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["3JN"] = window.ScripturaScriptureTexts.UBS5["3JN"] || {};
    window.ScripturaScriptureTexts.UBS5["3JN"][1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["3JN"] = window.ScripturaScriptureParagraphBreaks.UBS5["3JN"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["3JN"][1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["3JN"] = window.ScripturaScriptureHeadings.UBS5["3JN"] || {};
    window.ScripturaScriptureHeadings.UBS5["3JN"][1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["3JN"] = window.ScripturaScriptureUnnumberedPassages.UBS5["3JN"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["3JN"][1] = unnumberedPassages;
})();
