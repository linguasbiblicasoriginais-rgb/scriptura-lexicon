/* UBS5 — Epístola de Paulo a Tito, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente da edição impressa.
 * Texto bíblico e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παῦλος δοῦλος θεοῦ, ἀπόστολος δὲ Ἰησοῦ Χριστοῦ κατὰ πίστιν ἐκλεκτῶν θεοῦ καὶ ἐπίγνωσιν ἀληθείας τῆς κατ᾽ εὐσέβειαν",
    "2": "ἐπ᾽ ἐλπίδι ζωῆς αἰωνίου, ἣν ἐπηγγείλατο ὁ ἀψευδὴς θεὸς πρὸ χρόνων αἰωνίων,",
    "3": "ἐφανέρωσεν δὲ καιροῖς ἰδίοις τὸν λόγον αὐτοῦ ἐν κηρύγματι, ὃ ἐπιστεύθην ἐγὼ κατ᾽ ἐπιταγὴν τοῦ σωτῆρος ἡμῶν θεοῦ,",
    "4": "Τίτῳ γνησίῳ τέκνῳ κατὰ κοινὴν πίστιν, χάρις καὶ εἰρήνη ἀπὸ θεοῦ πατρὸς καὶ Χριστοῦ Ἰησοῦ τοῦ σωτῆρος ἡμῶν.",
    "5": "Τούτου χάριν ἀπέλιπόν σε ἐν Κρήτῃ, ἵνα τὰ λείποντα ἐπιδιορθώσῃ καὶ καταστήσῃς κατὰ πόλιν πρεσβυτέρους, ὡς ἐγώ σοι διεταξάμην,",
    "6": "εἴ τίς ἐστιν ἀνέγκλητος, μιᾶς γυναικὸς ἀνήρ, τέκνα ἔχων πιστά, μὴ ἐν κατηγορίᾳ ἀσωτίας ἢ ἀνυπότακτα.",
    "7": "δεῖ γὰρ τὸν ἐπίσκοπον ἀνέγκλητον εἶναι ὡς θεοῦ οἰκονόμον, μὴ αὐθάδη, μὴ ὀργίλον, μὴ πάροινον, μὴ πλήκτην, μὴ αἰσχροκερδῆ,",
    "8": "ἀλλὰ φιλόξενον φιλάγαθον σώφρονα δίκαιον ὅσιον ἐγκρατῆ,",
    "9": "ἀντεχόμενον τοῦ κατὰ τὴν διδαχὴν πιστοῦ λόγου, ἵνα δυνατὸς ᾖ καὶ παρακαλεῖν ἐν τῇ διδασκαλίᾳ τῇ ὑγιαινούσῃ καὶ τοὺς ἀντιλέγοντας ἐλέγχειν.",
    "10": "Εἰσὶν γὰρ πολλοὶ [καὶ] ἀνυπότακτοι, ματαιολόγοι καὶ φρεναπάται, μάλιστα οἱ ἐκ τῆς περιτομῆς,",
    "11": "οὓς δεῖ ἐπιστομίζειν, οἵτινες ὅλους οἴκους ἀνατρέπουσιν διδάσκοντες ἃ μὴ δεῖ αἰσχροῦ κέρδους χάριν.",
    "12": "εἶπέν τις ἐξ αὐτῶν ἴδιος αὐτῶν προφήτης,\nΚρῆτες ἀεὶ ψεῦσται, κακὰ θηρία, γαστέρες ἀργαί.",
    "13": "ἡ μαρτυρία αὕτη ἐστὶν ἀληθής. δι᾽ ἣν αἰτίαν ἔλεγχε αὐτοὺς ἀποτόμως, ἵνα ὑγιαίνωσιν ἐν τῇ πίστει,",
    "14": "μὴ προσέχοντες Ἰουδαϊκοῖς μύθοις καὶ ἐντολαῖς ἀνθρώπων ἀποστρεφομένων τὴν ἀλήθειαν.",
    "15": "πάντα καθαρὰ τοῖς καθαροῖς· τοῖς δὲ μεμιαμμένοις καὶ ἀπίστοις οὐδὲν καθαρόν, ἀλλὰ μεμίανται αὐτῶν καὶ ὁ νοῦς καὶ ἡ συνείδησις.",
    "16": "θεὸν ὁμολογοῦσιν εἰδέναι, τοῖς δὲ ἔργοις ἀρνοῦνται, βδελυκτοὶ ὄντες καὶ ἀπειθεῖς καὶ πρὸς πᾶν ἔργον ἀγαθὸν ἀδόκιμοι."
};
    const paragraphEnds = [4,9,16];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 5,
        "title": "O trabalho de Tito em Creta",
        "sourceTitle": "Titus’ Work in Crete"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.TIT = window.ScripturaScriptureTexts.UBS5.TIT || {};
    window.ScripturaScriptureTexts.UBS5.TIT[1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.TIT = window.ScripturaScriptureParagraphBreaks.UBS5.TIT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.TIT[1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.TIT = window.ScripturaScriptureHeadings.UBS5.TIT || {};
    window.ScripturaScriptureHeadings.UBS5.TIT[1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.TIT = window.ScripturaScriptureUnnumberedPassages.UBS5.TIT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.TIT[1] = unnumberedPassages;
})();
