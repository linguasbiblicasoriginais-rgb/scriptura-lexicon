/* UBS5 — Primeira Epístola aos Coríntios 11.
 * Transcrição grega fornecida pelo mantenedor em 09/11/2026.
 * Edição UBS5 por identificação do projeto; sem cotejo independente com exemplar impresso.
 * Versículos, títulos e remissões editoriais são conservados separadamente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "μιμηταί μου γίνεσθε καθὼς κἀγὼ Χριστοῦ.",
    "2": "Ἐπαινῶ δὲ ὑμᾶς ὅτι πάντα μου μέμνησθε καί, καθὼς παρέδωκα ὑμῖν, τὰς παραδόσεις κατέχετε.",
    "3": "θέλω δὲ ὑμᾶς εἰδέναι ὅτι παντὸς ἀνδρὸς ἡ κεφαλὴ ὁ Χριστός ἐστιν, κεφαλὴ δὲ γυναικὸς ὁ ἀνήρ, κεφαλὴ δὲ τοῦ Χριστοῦ ὁ θεός.",
    "4": "πᾶς ἀνὴρ προσευχόμενος ἢ προφητεύων κατὰ κεφαλῆς ἔχων καταισχύνει τὴν κεφαλὴν αὐτοῦ.",
    "5": "πᾶσα δὲ γυνὴ προσευχομένη ἢ προφητεύουσα ἀκατακαλύπτῳ τῇ κεφαλῇ καταισχύνει τὴν κεφαλὴν αὐτῆς· ἓν γάρ ἐστιν καὶ τὸ αὐτὸ τῇ ἐξυρημένῃ.",
    "6": "εἰ γὰρ οὐ κατακαλύπτεται γυνή, καὶ κειράσθω· εἰ δὲ αἰσχρὸν γυναικὶ τὸ κείρασθαι ἢ ξυρᾶσθαι, κατακαλυπτέσθω.",
    "7": "ἀνὴρ μὲν γὰρ οὐκ ὀφείλει κατακαλύπτεσθαι τὴν κεφαλὴν εἰκὼν καὶ δόξα θεοῦ ὑπάρχων· ἡ γυνὴ δὲ δόξα ἀνδρός ἐστιν.",
    "8": "οὐ γάρ ἐστιν ἀνὴρ ἐκ γυναικὸς ἀλλὰ γυνὴ ἐξ ἀνδρός·",
    "9": "καὶ γὰρ οὐκ ἐκτίσθη ἀνὴρ διὰ τὴν γυναῖκα, ἀλλὰ γυνὴ διὰ τὸν ἄνδρα.",
    "10": "διὰ τοῦτο ὀφείλει ἡ γυνὴ ἐξουσίαν ἔχειν ἐπὶ τῆς κεφαλῆς διὰ τοὺς ἀγγέλους.",
    "11": "πλὴν οὔτε γυνὴ χωρὶς ἀνδρὸς οὔτε ἀνὴρ χωρὶς γυναικὸς ἐν κυρίῳ·",
    "12": "ὥσπερ γὰρ ἡ γυνὴ ἐκ τοῦ ἀνδρός, οὕτως καὶ ὁ ἀνὴρ διὰ τῆς γυναικός· τὰ δὲ πάντα ἐκ τοῦ θεοῦ.",
    "13": "ἐν ὑμῖν αὐτοῖς κρίνατε· πρέπον ἐστὶν γυναῖκα ἀκατακάλυπτον τῷ θεῷ προσεύχεσθαι;",
    "14": "οὐδὲ ἡ φύσις αὐτὴ διδάσκει ὑμᾶς ὅτι ἀνὴρ μὲν ἐὰν κομᾷ ἀτιμία αὐτῷ ἐστιν,",
    "15": "γυνὴ δὲ ἐὰν κομᾷ δόξα αὐτῇ ἐστιν; ὅτι ἡ κόμη ἀντὶ περιβολαίου δέδοται [αὐτῇ].",
    "16": "Εἰ δέ τις δοκεῖ φιλόνεικος εἶναι, ἡμεῖς τοιαύτην συνήθειαν οὐκ ἔχομεν οὐδὲ αἱ ἐκκλησίαι τοῦ θεοῦ.",
    "17": "Τοῦτο δὲ παραγγέλλων οὐκ ἐπαινῶ ὅτι οὐκ εἰς τὸ κρεῖσσον ἀλλ᾽ εἰς τὸ ἧσσον συνέρχεσθε.",
    "18": "πρῶτον μὲν γὰρ συνερχομένων ὑμῶν ἐν ἐκκλησίᾳ ἀκούω σχίσματα ἐν ὑμῖν ὑπάρχειν καὶ μέρος τι πιστεύω.",
    "19": "δεῖ γὰρ καὶ αἱρέσεις ἐν ὑμῖν εἶναι, ἵνα [καὶ] οἱ δόκιμοι φανεροὶ γένωνται ἐν ὑμῖν.",
    "20": "Συνερχομένων οὖν ὑμῶν ἐπὶ τὸ αὐτὸ οὐκ ἔστιν κυριακὸν δεῖπνον φαγεῖν·",
    "21": "ἕκαστος γὰρ τὸ ἴδιον δεῖπνον προλαμβάνει ἐν τῷ φαγεῖν, καὶ ὃς μὲν πεινᾷ ὃς δὲ μεθύει.",
    "22": "μὴ γὰρ οἰκίας οὐκ ἔχετε εἰς τὸ ἐσθίειν καὶ πίνειν; ἢ τῆς ἐκκλησίας τοῦ θεοῦ καταφρονεῖτε, καὶ καταισχύνετε τοὺς μὴ ἔχοντας; τί εἴπω ὑμῖν; ἐπαινέσω ὑμᾶς; ἐν τούτῳ οὐκ ἐπαινῶ.",
    "23": "Ἐγὼ γὰρ παρέλαβον ἀπὸ τοῦ κυρίου, ὃ καὶ παρέδωκα ὑμῖν, ὅτι ὁ κύριος Ἰησοῦς ἐν τῇ νυκτὶ ᾗ παρεδίδετο ἔλαβεν ἄρτον",
    "24": "καὶ εὐχαριστήσας ἔκλασεν καὶ εἶπεν, Τοῦτό μού ἐστιν τὸ σῶμα τὸ ὑπὲρ ὑμῶν· τοῦτο ποιεῖτε εἰς τὴν ἐμὴν ἀνάμνησιν.",
    "25": "ὡσαύτως καὶ τὸ ποτήριον μετὰ τὸ δειπνῆσαι λέγων, Τοῦτο τὸ ποτήριον ἡ καινὴ διαθήκη ἐστὶν ἐν τῷ ἐμῷ αἵματι· τοῦτο ποιεῖτε, ὁσάκις ἐὰν πίνητε, εἰς τὴν ἐμὴν ἀνάμνησιν.",
    "26": "ὁσάκις γὰρ ἐὰν ἐσθίητε τὸν ἄρτον τοῦτον καὶ τὸ ποτήριον πίνητε, τὸν θάνατον τοῦ κυρίου καταγγέλλετε ἄχρι οὗ ἔλθῃ.",
    "27": "Ὥστε ὃς ἂν ἐσθίῃ τὸν ἄρτον ἢ πίνῃ τὸ ποτήριον τοῦ κυρίου ἀναξίως, ἔνοχος ἔσται τοῦ σώματος καὶ τοῦ αἵματος τοῦ κυρίου.",
    "28": "δοκιμαζέτω δὲ ἄνθρωπος ἑαυτὸν καὶ οὕτως ἐκ τοῦ ἄρτου ἐσθιέτω καὶ ἐκ τοῦ ποτηρίου πινέτω·",
    "29": "ὁ γὰρ ἐσθίων καὶ πίνων κρίμα ἑαυτῷ ἐσθίει καὶ πίνει μὴ διακρίνων τὸ σῶμα.",
    "30": "διὰ τοῦτο ἐν ὑμῖν πολλοὶ ἀσθενεῖς καὶ ἄρρωστοι καὶ κοιμῶνται ἱκανοί.",
    "31": "εἰ δὲ ἑαυτοὺς διεκρίνομεν, οὐκ ἂν ἐκρινόμεθα·",
    "32": "κρινόμενοι δὲ ὑπὸ [τοῦ] κυρίου παιδευόμεθα, ἵνα μὴ σὺν τῷ κόσμῳ κατακριθῶμεν.",
    "33": "ὥστε, ἀδελφοί μου, συνερχόμενοι εἰς τὸ φαγεῖν ἀλλήλους ἐκδέχεσθε.",
    "34": "εἴ τις πεινᾷ, ἐν οἴκῳ ἐσθιέτω, ἵνα μὴ εἰς κρίμα συνέρχησθε. Τὰ δὲ λοιπὰ ὡς ἂν ἔλθω διατάξομαι."
};
    const paragraphEnds = [1,16,22,26,34];
    const headings = [
    {
        "beforeVerse": 2,
        "title": "O uso do véu no culto",
        "sourceTitle": "Covering the Head in Worship"
    },
    {
        "beforeVerse": 17,
        "title": "Abusos na Ceia do Senhor",
        "sourceTitle": "Abuses at the Lord’s Supper"
    },
    {
        "beforeVerse": 23,
        "title": "A instituição da Ceia do Senhor",
        "sourceTitle": "The Institution of the Lord’s Supper",
        "parallel": "(Mt 26.26–29; Mc 14.22–25; Lc 22.14–20)"
    },
    {
        "beforeVerse": 27,
        "title": "A participação indigna na Ceia",
        "sourceTitle": "Partaking of the Supper Unworthily"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1CO"] = window.ScripturaScriptureTexts.UBS5["1CO"] || {};
    window.ScripturaScriptureTexts.UBS5["1CO"][11] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"][11] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"] = window.ScripturaScriptureHeadings.UBS5["1CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"][11] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"][11] = unnumberedPassages;
})();
