/* UBS5 — Epístola de Paulo aos Efésios, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 segundo o projeto; sem cotejo independente da edição impressa.
 * Texto grego e paratextos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παῦλος ἀπόστολος Χριστοῦ Ἰησοῦ διὰ θελήματος θεοῦ τοῖς ἁγίοις τοῖς οὖσιν [ἐν Ἐφέσῳ] καὶ πιστοῖς ἐν Χριστῷ Ἰησοῦ,",
    "2": "χάρις ὑμῖν καὶ εἰρήνη ἀπὸ θεοῦ πατρὸς ἡμῶν καὶ κυρίου Ἰησοῦ Χριστοῦ.",
    "3": "Εὐλογητὸς ὁ θεὸς καὶ πατὴρ τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ, ὁ εὐλογήσας ἡμᾶς ἐν πάσῃ εὐλογίᾳ πνευματικῇ ἐν τοῖς ἐπουρανίοις ἐν Χριστῷ,",
    "4": "καθὼς ἐξελέξατο ἡμᾶς ἐν αὐτῷ πρὸ καταβολῆς κόσμου εἶναι ἡμᾶς ἁγίους καὶ ἀμώμους κατενώπιον αὐτοῦ ἐν ἀγάπῃ,",
    "5": "προορίσας ἡμᾶς εἰς υἱοθεσίαν διὰ Ἰησοῦ Χριστοῦ εἰς αὐτόν, κατὰ τὴν εὐδοκίαν τοῦ θελήματος αὐτοῦ,",
    "6": "εἰς ἔπαινον δόξης τῆς χάριτος αὐτοῦ ἧς ἐχαρίτωσεν ἡμᾶς ἐν τῷ ἠγαπημένῳ.",
    "7": "ἐν ᾧ ἔχομεν τὴν ἀπολύτρωσιν διὰ τοῦ αἵματος αὐτοῦ, τὴν ἄφεσιν τῶν παραπτωμάτων, κατὰ τὸ πλοῦτος τῆς χάριτος αὐτοῦ",
    "8": "ἧς ἐπερίσσευσεν εἰς ἡμᾶς, ἐν πάσῃ σοφίᾳ καὶ φρονήσει,",
    "9": "γνωρίσας ἡμῖν τὸ μυστήριον τοῦ θελήματος αὐτοῦ, κατὰ τὴν εὐδοκίαν αὐτοῦ ἣν προέθετο ἐν αὐτῷ",
    "10": "εἰς οἰκονομίαν τοῦ πληρώματος τῶν καιρῶν, ἀνακεφαλαιώσασθαι τὰ πάντα ἐν τῷ Χριστῷ, τὰ ἐπὶ τοῖς οὐρανοῖς καὶ τὰ ἐπὶ τῆς γῆς ἐν αὐτῷ.",
    "11": "ἐν ᾧ καὶ ἐκληρώθημεν προορισθέντες κατὰ πρόθεσιν τοῦ τὰ πάντα ἐνεργοῦντος κατὰ τὴν βουλὴν τοῦ θελήματος αὐτοῦ",
    "12": "εἰς τὸ εἶναι ἡμᾶς εἰς ἔπαινον δόξης αὐτοῦ τοὺς προηλπικότας ἐν τῷ Χριστῷ.",
    "13": "ἐν ᾧ καὶ ὑμεῖς ἀκούσαντες τὸν λόγον τῆς ἀληθείας, τὸ εὐαγγέλιον τῆς σωτηρίας ὑμῶν, ἐν ᾧ καὶ πιστεύσαντες ἐσφραγίσθητε τῷ πνεύματι τῆς ἐπαγγελίας τῷ ἁγίῳ,",
    "14": "ὅ ἐστιν ἀρραβὼν τῆς κληρονομίας ἡμῶν, εἰς ἀπολύτρωσιν τῆς περιποιήσεως, εἰς ἔπαινον τῆς δόξης αὐτοῦ.",
    "15": "Διὰ τοῦτο κἀγὼ ἀκούσας τὴν καθ᾽ ὑμᾶς πίστιν ἐν τῷ κυρίῳ Ἰησοῦ καὶ τὴν ἀγάπην τὴν εἰς πάντας τοὺς ἁγίους",
    "16": "οὐ παύομαι εὐχαριστῶν ὑπὲρ ὑμῶν μνείαν ποιούμενος ἐπὶ τῶν προσευχῶν μου,",
    "17": "ἵνα ὁ θεὸς τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ, ὁ πατὴρ τῆς δόξης, δώῃ ὑμῖν πνεῦμα σοφίας καὶ ἀποκαλύψεως ἐν ἐπιγνώσει αὐτοῦ,",
    "18": "πεφωτισμένους τοὺς ὀφθαλμοὺς τῆς καρδίας [ὑμῶν] εἰς τὸ εἰδέναι ὑμᾶς τίς ἐστιν ἡ ἐλπὶς τῆς κλήσεως αὐτοῦ, τίς ὁ πλοῦτος τῆς δόξης τῆς κληρονομίας αὐτοῦ ἐν τοῖς ἁγίοις,",
    "19": "καὶ τί τὸ ὑπερβάλλον μέγεθος τῆς δυνάμεως αὐτοῦ εἰς ἡμᾶς τοὺς πιστεύοντας κατὰ τὴν ἐνέργειαν τοῦ κράτους τῆς ἰσχύος αὐτοῦ.",
    "20": "ἣν ἐνήργησεν ἐν τῷ Χριστῷ ἐγείρας αὐτὸν ἐκ νεκρῶν καὶ καθίσας ἐν δεξιᾷ αὐτοῦ ἐν τοῖς ἐπουρανίοις",
    "21": "ὑπεράνω πάσης ἀρχῆς καὶ ἐξουσίας καὶ δυνάμεως καὶ κυριότητος καὶ παντὸς ὀνόματος ὀνομαζομένου, οὐ μόνον ἐν τῷ αἰῶνι τούτῳ ἀλλὰ καὶ ἐν τῷ μέλλοντι·",
    "22": "καὶ πάντα ὑπέταξεν ὑπὸ τοὺς πόδας αὐτοῦ καὶ αὐτὸν ἔδωκεν κεφαλὴν ὑπὲρ πάντα τῇ ἐκκλησίᾳ,",
    "23": "ἥτις ἐστὶν τὸ σῶμα αὐτοῦ, τὸ πλήρωμα τοῦ τὰ πάντα ἐν πᾶσιν πληρουμένου."
};
    const paragraphEnds = [2,14,23];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 3,
        "title": "Bênçãos espirituais em Cristo",
        "sourceTitle": "Spiritual Blessings in Christ"
    },
    {
        "beforeVerse": 15,
        "title": "A oração de Paulo",
        "sourceTitle": "Paul’s Prayer"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.EPH = window.ScripturaScriptureTexts.UBS5.EPH || {};
    window.ScripturaScriptureTexts.UBS5.EPH[1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.EPH = window.ScripturaScriptureParagraphBreaks.UBS5.EPH || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.EPH[1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.EPH = window.ScripturaScriptureHeadings.UBS5.EPH || {};
    window.ScripturaScriptureHeadings.UBS5.EPH[1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.EPH = window.ScripturaScriptureUnnumberedPassages.UBS5.EPH || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.EPH[1] = unnumberedPassages;
})();
