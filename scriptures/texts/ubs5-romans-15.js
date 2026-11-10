/* UBS5 — Romanos 15. Texto grego fornecido pelo usuário em 09/11/2026.
 * Referência UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego, títulos traduzidos e divisões editoriais conservados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὀφείλομεν δὲ ἡμεῖς οἱ δυνατοὶ τὰ ἀσθενήματα τῶν ἀδυνάτων βαστάζειν καὶ μὴ ἑαυτοῖς ἀρέσκειν.",
    "2": "ἕκαστος ἡμῶν τῷ πλησίον ἀρεσκέτω εἰς τὸ ἀγαθὸν πρὸς οἰκοδομήν·",
    "3": "καὶ γὰρ ὁ Χριστὸς οὐχ ἑαυτῷ ἤρεσεν, ἀλλὰ καθὼς γέγραπται, Οἱ ὀνειδισμοὶ τῶν ὀνειδιζόντων σε ἐπέπεσαν ἐπ᾽ ἐμέ.",
    "4": "ὅσα γὰρ προεγράφη, εἰς τὴν ἡμετέραν διδασκαλίαν ἐγράφη, ἵνα διὰ τῆς ὑπομονῆς καὶ διὰ τῆς παρακλήσεως τῶν γραφῶν τὴν ἐλπίδα ἔχωμεν.",
    "5": "ὁ δὲ θεὸς τῆς ὑπομονῆς καὶ τῆς παρακλήσεως δῴη ὑμῖν τὸ αὐτὸ φρονεῖν ἐν ἀλλήλοις κατὰ Χριστὸν Ἰησοῦν,",
    "6": "ἵνα ὁμοθυμαδὸν ἐν ἑνὶ στόματι δοξάζητε τὸν θεὸν καὶ πατέρα τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ.",
    "7": "Διὸ προσλαμβάνεσθε ἀλλήλους, καθὼς καὶ ὁ Χριστὸς προσελάβετο ὑμᾶς εἰς δόξαν τοῦ θεοῦ.",
    "8": "λέγω γὰρ Χριστὸν διάκονον γεγενῆσθαι περιτομῆς ὑπὲρ ἀληθείας θεοῦ, εἰς τὸ βεβαιῶσαι τὰς ἐπαγγελίας τῶν πατέρων,",
    "9": "τὰ δὲ ἔθνη ὑπὲρ ἐλέους δοξάσαι τὸν θεόν, καθὼς γέγραπται,\nΔιὰ τοῦτο ἐξομολογήσομαί σοι ἐν ἔθνεσιν\nκαὶ τῷ ὀνόματί σου ψαλῶ.",
    "10": "καὶ πάλιν λέγει,\nΕὐφράνθητε, ἔθνη, μετὰ τοῦ λαοῦ αὐτοῦ.",
    "11": "καὶ πάλιν,\nΑἰνεῖτε, πάντα τὰ ἔθνη, τὸν κύριον\nκαὶ ἐπαινεσάτωσαν αὐτὸν πάντες οἱ λαοί.",
    "12": "καὶ πάλιν Ἠσαΐας λέγει,\nἜσται ἡ ῥίζα τοῦ Ἰεσσαὶ\nκαὶ ὁ ἀνιστάμενος ἄρχειν ἐθνῶν,\nἐπ᾽ αὐτῷ ἔθνη ἐλπιοῦσιν.",
    "13": "ὁ δὲ θεὸς τῆς ἐλπίδος πληρώσαι ὑμᾶς πάσης χαρᾶς καὶ εἰρήνης ἐν τῷ πιστεύειν, εἰς τὸ περισσεύειν ὑμᾶς ἐν τῇ ἐλπίδι ἐν δυνάμει πνεύματος ἁγίου.",
    "14": "Πέπεισμαι δέ, ἀδελφοί μου, καὶ αὐτὸς ἐγὼ περὶ ὑμῶν ὅτι καὶ αὐτοὶ μεστοί ἐστε ἀγαθωσύνης, πεπληρωμένοι πάσης [τῆς] γνώσεως, δυνάμενοι καὶ ἀλλήλους νουθετεῖν.",
    "15": "τολμηρότερον δὲ ἔγραψα ὑμῖν ἀπὸ μέρους ὡς ἐπαναμιμνῄσκων ὑμᾶς διὰ τὴν χάριν τὴν δοθεῖσάν μοι ὑπὸ τοῦ θεοῦ",
    "16": "εἰς τὸ εἶναί με λειτουργὸν Χριστοῦ Ἰησοῦ εἰς τὰ ἔθνη, ἱερουργοῦντα τὸ εὐαγγέλιον τοῦ θεοῦ, ἵνα γένηται ἡ προσφορὰ τῶν ἐθνῶν εὐπρόσδεκτος, ἡγιασμένη ἐν πνεύματι ἁγίῳ.",
    "17": "ἔχω οὖν [τὴν] καύχησιν ἐν Χριστῷ Ἰησοῦ τὰ πρὸς τὸν θεόν·",
    "18": "οὐ γὰρ τολμήσω τι λαλεῖν ὧν οὐ κατειργάσατο Χριστὸς δι᾽ ἐμοῦ εἰς ὑπακοὴν ἐθνῶν, λόγῳ καὶ ἔργῳ,",
    "19": "ἐν δυνάμει σημείων καὶ τεράτων, ἐν δυνάμει πνεύματος [θεοῦ]· ὥστε με ἀπὸ Ἰερουσαλὴμ καὶ κύκλῳ μέχρι τοῦ Ἰλλυρικοῦ πεπληρωκέναι τὸ εὐαγγέλιον τοῦ Χριστοῦ,",
    "20": "οὕτως δὲ φιλοτιμούμενον εὐαγγελίζεσθαι οὐχ ὅπου ὠνομάσθη Χριστός, ἵνα μὴ ἐπ᾽ ἀλλότριον θεμέλιον οἰκοδομῶ,",
    "21": "ἀλλὰ καθὼς γέγραπται,\nΟἷς οὐκ ἀνηγγέλη περὶ αὐτοῦ ὄψονται,\nκαὶ οἳ οὐκ ἀκηκόασιν συνήσουσιν.",
    "22": "Διὸ καὶ ἐνεκοπτόμην τὰ πολλὰ τοῦ ἐλθεῖν πρὸς ὑμᾶς·",
    "23": "νυνὶ δὲ μηκέτι τόπον ἔχων ἐν τοῖς κλίμασιν τούτοις, ἐπιποθίαν δὲ ἔχων τοῦ ἐλθεῖν πρὸς ὑμᾶς ἀπὸ πολλῶν ἐτῶν,",
    "24": "ὡς ἂν πορεύωμαι εἰς τὴν Σπανίαν· ἐλπίζω γὰρ διαπορευόμενος θεάσασθαι ὑμᾶς καὶ ὑφ᾽ ὑμῶν προπεμφθῆναι ἐκεῖ ἐὰν ὑμῶν πρῶτον ἀπὸ μέρους ἐμπλησθῶ.",
    "25": "νυνὶ δὲ πορεύομαι εἰς Ἰερουσαλὴμ διακονῶν τοῖς ἁγίοις.",
    "26": "εὐδόκησαν γὰρ Μακεδονία καὶ Ἀχαΐα κοινωνίαν τινὰ ποιήσασθαι εἰς τοὺς πτωχοὺς τῶν ἁγίων τῶν ἐν Ἰερουσαλήμ.",
    "27": "εὐδόκησαν γὰρ καὶ ὀφειλέται εἰσὶν αὐτῶν· εἰ γὰρ τοῖς πνευματικοῖς αὐτῶν ἐκοινώνησαν τὰ ἔθνη, ὀφείλουσιν καὶ ἐν τοῖς σαρκικοῖς λειτουργῆσαι αὐτοῖς.",
    "28": "τοῦτο οὖν ἐπιτελέσας καὶ σφραγισάμενος αὐτοῖς τὸν καρπὸν τοῦτον, ἀπελεύσομαι δι᾽ ὑμῶν εἰς Σπανίαν·",
    "29": "οἶδα δὲ ὅτι ἐρχόμενος πρὸς ὑμᾶς ἐν πληρώματι εὐλογίας Χριστοῦ ἐλεύσομαι.",
    "30": "Παρακαλῶ δὲ ὑμᾶς[, ἀδελφοί,] διὰ τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ καὶ διὰ τῆς ἀγάπης τοῦ πνεύματος συναγωνίσασθαί μοι ἐν ταῖς προσευχαῖς ὑπὲρ ἐμοῦ πρὸς τὸν θεόν,",
    "31": "ἵνα ῥυσθῶ ἀπὸ τῶν ἀπειθούντων ἐν τῇ Ἰουδαίᾳ καὶ ἡ διακονία μου ἡ εἰς Ἰερουσαλὴμ εὐπρόσδεκτος τοῖς ἁγίοις γένηται,",
    "32": "ἵνα ἐν χαρᾷ ἐλθὼν πρὸς ὑμᾶς διὰ θελήματος θεοῦ συναναπαύσωμαι ὑμῖν.",
    "33": "ὁ δὲ θεὸς τῆς εἰρήνης μετὰ πάντων ὑμῶν, ἀμήν."
};
    const paragraphEnds = [6,9,10,11,12,13,21,29,33];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Agradar ao próximo, não a si mesmo",
        "sourceTitle": "Please Your Fellow Men, Not Yourself"
    },
    {
        "beforeVerse": 7,
        "title": "O Evangelho tanto para judeus como para gentios",
        "sourceTitle": "The Gospel for Jews and Gentiles Alike"
    },
    {
        "beforeVerse": 14,
        "title": "A missão confiada a Paulo",
        "sourceTitle": "Paul’s Missionary Commission"
    },
    {
        "beforeVerse": 22,
        "title": "O plano de Paulo de visitar Roma",
        "sourceTitle": "Paul’s Plan to Visit Rome"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ROM = window.ScripturaScriptureTexts.UBS5.ROM || {};
    window.ScripturaScriptureTexts.UBS5.ROM[15] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM = window.ScripturaScriptureParagraphBreaks.UBS5.ROM || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM[15] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ROM = window.ScripturaScriptureHeadings.UBS5.ROM || {};
    window.ScripturaScriptureHeadings.UBS5.ROM[15] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM = window.ScripturaScriptureUnnumberedPassages.UBS5.ROM || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM[15] = unnumberedPassages;
})();
