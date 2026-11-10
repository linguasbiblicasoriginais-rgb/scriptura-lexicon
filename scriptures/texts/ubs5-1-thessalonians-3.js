/* UBS5 — Primeira Epístola de Paulo aos Tessalonicenses, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme a identificação do projeto; sem cotejo independente da edição impressa.
 * Texto grego e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Διὸ μηκέτι στέγοντες εὐδοκήσαμεν καταλειφθῆναι ἐν Ἀθήναις μόνοι",
    "2": "καὶ ἐπέμψαμεν Τιμόθεον, τὸν ἀδελφὸν ἡμῶν καὶ συνεργὸν τοῦ θεοῦ ἐν τῷ εὐαγγελίῳ τοῦ Χριστοῦ, εἰς τὸ στηρίξαι ὑμᾶς καὶ παρακαλέσαι ὑπὲρ τῆς πίστεως ὑμῶν",
    "3": "τὸ μηδένα σαίνεσθαι ἐν ταῖς θλίψεσιν ταύταις. αὐτοὶ γὰρ οἴδατε ὅτι εἰς τοῦτο κείμεθα·",
    "4": "καὶ γὰρ ὅτε πρὸς ὑμᾶς ἦμεν, προελέγομεν ὑμῖν ὅτι μέλλομεν θλίβεσθαι, καθὼς καὶ ἐγένετο καὶ οἴδατε.",
    "5": "διὰ τοῦτο κἀγὼ μηκέτι στέγων ἔπεμψα εἰς τὸ γνῶναι τὴν πίστιν ὑμῶν, μή πως ἐπείρασεν ὑμᾶς ὁ πειράζων καὶ εἰς κενὸν γένηται ὁ κόπος ἡμῶν.",
    "6": "Ἄρτι δὲ ἐλθόντος Τιμοθέου πρὸς ἡμᾶς ἀφ᾽ ὑμῶν καὶ εὐαγγελισαμένου ἡμῖν τὴν πίστιν καὶ τὴν ἀγάπην ὑμῶν καὶ ὅτι ἔχετε μνείαν ἡμῶν ἀγαθὴν πάντοτε, ἐπιποθοῦντες ἡμᾶς ἰδεῖν καθάπερ καὶ ἡμεῖς ὑμᾶς,",
    "7": "διὰ τοῦτο παρεκλήθημεν, ἀδελφοί, ἐφ᾽ ὑμῖν ἐπὶ πάσῃ τῇ ἀνάγκῃ καὶ θλίψει ἡμῶν διὰ τῆς ὑμῶν πίστεως,",
    "8": "ὅτι νῦν ζῶμεν ἐὰν ὑμεῖς στήκετε ἐν κυρίῳ.",
    "9": "τίνα γὰρ εὐχαριστίαν δυνάμεθα τῷ θεῷ ἀνταποδοῦναι περὶ ὑμῶν ἐπὶ πάσῃ τῇ χαρᾷ ᾗ χαίρομεν δι᾽ ὑμᾶς ἔμπροσθεν τοῦ θεοῦ ἡμῶν,",
    "10": "νυκτὸς καὶ ἡμέρας ὑπερεκπερισσοῦ δεόμενοι εἰς τὸ ἰδεῖν ὑμῶν τὸ πρόσωπον καὶ καταρτίσαι τὰ ὑστερήματα τῆς πίστεως ὑμῶν;",
    "11": "Αὐτὸς δὲ ὁ θεὸς καὶ πατὴρ ἡμῶν καὶ ὁ κύριος ἡμῶν Ἰησοῦς κατευθύναι τὴν ὁδὸν ἡμῶν πρὸς ὑμᾶς·",
    "12": "ὑμᾶς δὲ ὁ κύριος πλεονάσαι καὶ περισσεύσαι τῇ ἀγάπῃ εἰς ἀλλήλους καὶ εἰς πάντας καθάπερ καὶ ἡμεῖς εἰς ὑμᾶς,",
    "13": "εἰς τὸ στηρίξαι ὑμῶν τὰς καρδίας ἀμέμπτους ἐν ἁγιωσύνῃ ἔμπροσθεν τοῦ θεοῦ καὶ πατρὸς ἡμῶν ἐν τῇ παρουσίᾳ τοῦ κυρίου ἡμῶν Ἰησοῦ μετὰ πάντων τῶν ἁγίων αὐτοῦ[, ἀμήν]."
};
    const paragraphEnds = [5,10,13];
    const headings = [];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1TH"] = window.ScripturaScriptureTexts.UBS5["1TH"] || {};
    window.ScripturaScriptureTexts.UBS5["1TH"][3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TH"] = window.ScripturaScriptureParagraphBreaks.UBS5["1TH"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TH"][3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1TH"] = window.ScripturaScriptureHeadings.UBS5["1TH"] || {};
    window.ScripturaScriptureHeadings.UBS5["1TH"][3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TH"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1TH"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TH"][3] = unnumberedPassages;
})();
