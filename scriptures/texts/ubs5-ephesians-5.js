/* UBS5 — Epístola de Paulo aos Efésios, capítulo 5.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 segundo o projeto; sem cotejo independente da edição impressa.
 * Texto grego e paratextos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "γίνεσθε οὖν μιμηταὶ τοῦ θεοῦ ὡς τέκνα ἀγαπητὰ",
    "2": "καὶ περιπατεῖτε ἐν ἀγάπῃ, καθὼς καὶ ὁ Χριστὸς ἠγάπησεν ἡμᾶς καὶ παρέδωκεν ἑαυτὸν ὑπὲρ ἡμῶν προσφορὰν καὶ θυσίαν τῷ θεῷ εἰς ὀσμὴν εὐωδίας.",
    "3": "πορνεία δὲ καὶ ἀκαθαρσία πᾶσα ἢ πλεονεξία μηδὲ ὀνομαζέσθω ἐν ὑμῖν, καθὼς πρέπει ἁγίοις,",
    "4": "καὶ αἰσχρότης καὶ μωρολογία ἢ εὐτραπελία, ἃ οὐκ ἀνῆκεν, ἀλλὰ μᾶλλον εὐχαριστία.",
    "5": "τοῦτο γὰρ ἴστε γινώσκοντες, ὅτι πᾶς πόρνος ἢ ἀκάθαρτος ἢ πλεονέκτης, ὅ ἐστιν εἰδωλολάτρης, οὐκ ἔχει κληρονομίαν ἐν τῇ βασιλείᾳ τοῦ Χριστοῦ καὶ θεοῦ.",
    "6": "Μηδεὶς ὑμᾶς ἀπατάτω κενοῖς λόγοις· διὰ ταῦτα γὰρ ἔρχεται ἡ ὀργὴ τοῦ θεοῦ ἐπὶ τοὺς υἱοὺς τῆς ἀπειθείας.",
    "7": "μὴ οὖν γίνεσθε συμμέτοχοι αὐτῶν·",
    "8": "ἦτε γάρ ποτε σκότος, νῦν δὲ φῶς ἐν κυρίῳ· ὡς τέκνα φωτὸς περιπατεῖτε",
    "9": "– ὁ γὰρ καρπὸς τοῦ φωτὸς ἐν πάσῃ ἀγαθωσύνῃ καὶ δικαιοσύνῃ καὶ ἀληθείᾳ –",
    "10": "δοκιμάζοντες τί ἐστιν εὐάρεστον τῷ κυρίῳ,",
    "11": "καὶ μὴ συγκοινωνεῖτε τοῖς ἔργοις τοῖς ἀκάρποις τοῦ σκότους, μᾶλλον δὲ καὶ ἐλέγχετε.",
    "12": "τὰ γὰρ κρυφῇ γινόμενα ὑπ᾽ αὐτῶν αἰσχρόν ἐστιν καὶ λέγειν,",
    "13": "τὰ δὲ πάντα ἐλεγχόμενα ὑπὸ τοῦ φωτὸς φανεροῦται,",
    "14": "πᾶν γὰρ τὸ φανερούμενον φῶς ἐστιν. διὸ λέγει,\nἜγειρε, ὁ καθεύδων,\nκαὶ ἀνάστα ἐκ τῶν νεκρῶν,\nκαὶ ἐπιφαύσει σοι ὁ Χριστός.",
    "15": "Βλέπετε οὖν ἀκριβῶς πῶς περιπατεῖτε μὴ ὡς ἄσοφοι ἀλλ᾽ ὡς σοφοί,",
    "16": "ἐξαγοραζόμενοι τὸν καιρόν, ὅτι αἱ ἡμέραι πονηραί εἰσιν.",
    "17": "διὰ τοῦτο μὴ γίνεσθε ἄφρονες, ἀλλὰ συνίετε τί τὸ θέλημα τοῦ κυρίου.",
    "18": "καὶ μὴ μεθύσκεσθε οἴνῳ, ἐν ᾧ ἐστιν ἀσωτία, ἀλλὰ πληροῦσθε ἐν πνεύματι,",
    "19": "λαλοῦντες ἑαυτοῖς [ἐν] ψαλμοῖς καὶ ὕμνοις καὶ ᾠδαῖς πνευματικαῖς, ᾄδοντες καὶ ψάλλοντες τῇ καρδίᾳ ὑμῶν τῷ κυρίῳ,",
    "20": "εὐχαριστοῦντες πάντοτε ὑπὲρ πάντων ἐν ὀνόματι τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ τῷ θεῷ καὶ πατρί.",
    "21": "Ὑποτασσόμενοι ἀλλήλοις ἐν φόβῳ Χριστοῦ,",
    "22": "αἱ γυναῖκες τοῖς ἰδίοις ἀνδράσιν ὡς τῷ κυρίῳ,",
    "23": "ὅτι ἀνήρ ἐστιν κεφαλὴ τῆς γυναικὸς ὡς καὶ ὁ Χριστὸς κεφαλὴ τῆς ἐκκλησίας, αὐτὸς σωτὴρ τοῦ σώματος·",
    "24": "ἀλλ᾽ ὡς ἡ ἐκκλησία ὑποτάσσεται τῷ Χριστῷ, οὕτως καὶ αἱ γυναῖκες τοῖς ἀνδράσιν ἐν παντί.",
    "25": "Οἱ ἄνδρες, ἀγαπᾶτε τὰς γυναῖκας, καθὼς καὶ ὁ Χριστὸς ἠγάπησεν τὴν ἐκκλησίαν καὶ ἑαυτὸν παρέδωκεν ὑπὲρ αὐτῆς,",
    "26": "ἵνα αὐτὴν ἁγιάσῃ καθαρίσας τῷ λουτρῷ τοῦ ὕδατος ἐν ῥήματι,",
    "27": "ἵνα παραστήσῃ αὐτὸς ἑαυτῷ ἔνδοξον τὴν ἐκκλησίαν, μὴ ἔχουσαν σπίλον ἢ ῥυτίδα ἤ τι τῶν τοιούτων, ἀλλ᾽ ἵνα ᾖ ἁγία καὶ ἄμωμος.",
    "28": "οὕτως ὀφείλουσιν [καὶ] οἱ ἄνδρες ἀγαπᾶν τὰς ἑαυτῶν γυναῖκας ὡς τὰ ἑαυτῶν σώματα. ὁ ἀγαπῶν τὴν ἑαυτοῦ γυναῖκα ἑαυτὸν ἀγαπᾷ.",
    "29": "οὐδεὶς γάρ ποτε τὴν ἑαυτοῦ σάρκα ἐμίσησεν ἀλλ᾽ ἐκτρέφει καὶ θάλπει αὐτήν, καθὼς καὶ ὁ Χριστὸς τὴν ἐκκλησίαν,",
    "30": "ὅτι μέλη ἐσμὲν τοῦ σώματος αὐτοῦ.",
    "31": "ἀντὶ τούτου καταλείψει ἄνθρωπος [τὸν] πατέρα καὶ [τὴν] μητέρα καὶ προσκολληθήσεται πρὸς τὴν γυναῖκα αὐτοῦ, καὶ ἔσονται οἱ δύο εἰς σάρκα μίαν.",
    "32": "τὸ μυστήριον τοῦτο μέγα ἐστίν· ἐγὼ δὲ λέγω εἰς Χριστὸν καὶ εἰς τὴν ἐκκλησίαν.",
    "33": "πλὴν καὶ ὑμεῖς οἱ καθ᾽ ἕνα, ἕκαστος τὴν ἑαυτοῦ γυναῖκα οὕτως ἀγαπάτω ὡς ἑαυτόν, ἡ δὲ γυνὴ ἵνα φοβῆται τὸν ἄνδρα."
};
    const paragraphEnds = [5,14,20,33];
    const headings = [
    {
        "beforeVerse": 6,
        "title": "Andai como filhos da luz",
        "sourceTitle": "Walk as Children of Light"
    },
    {
        "beforeVerse": 21,
        "title": "Esposas e maridos",
        "sourceTitle": "Wives and Husbands"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.EPH = window.ScripturaScriptureTexts.UBS5.EPH || {};
    window.ScripturaScriptureTexts.UBS5.EPH[5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.EPH = window.ScripturaScriptureParagraphBreaks.UBS5.EPH || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.EPH[5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.EPH = window.ScripturaScriptureHeadings.UBS5.EPH || {};
    window.ScripturaScriptureHeadings.UBS5.EPH[5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.EPH = window.ScripturaScriptureUnnumberedPassages.UBS5.EPH || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.EPH[5] = unnumberedPassages;
})();
