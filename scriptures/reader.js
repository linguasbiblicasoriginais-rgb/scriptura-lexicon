/* Scriptura Lexicon — catálogo de navegação, sem reprodução automática de obras protegidas. */
const rawCatalog = {"BHS":"Torá|בְּרֵאשִׁית|Gênesis|50|GEN\nTorá|שְׁמוֹת|Êxodo|40|EXO\nTorá|וַיִּקְרָא|Levítico|27|LEV\nTorá|בְּמִדְבַּר|Números|36|NUM\nTorá|דְּבָרִים|Deuteronômio|34|DEU\nProfetas anteriores|יְהוֹשֻׁעַ|Josué|24|JOS\nProfetas anteriores|שֹׁפְטִים|Juízes|21|JDG\nProfetas anteriores|שְׁמוּאֵל|1 Samuel|31|1SA\nProfetas anteriores|שְׁמוּאֵל|2 Samuel|24|2SA\nProfetas anteriores|מְלָכִים|1 Reis|22|1KI\nProfetas anteriores|מְלָכִים|2 Reis|25|2KI\nProfetas posteriores|יְשַׁעְיָהוּ|Isaías|66|ISA\nProfetas posteriores|יִרְמְיָהוּ|Jeremias|52|JER\nProfetas posteriores|יְחֶזְקֵאל|Ezequiel|48|EZK\nOs Doze|הוֹשֵׁעַ|Oseias|14|HOS\nOs Doze|יוֹאֵל|Joel|4|JOL\nOs Doze|עָמוֹס|Amós|9|AMO\nOs Doze|עֹבַדְיָה|Obadias|1|OBA\nOs Doze|יוֹנָה|Jonas|4|JON\nOs Doze|מִיכָה|Miqueias|7|MIC\nOs Doze|נַחוּם|Naum|3|NAM\nOs Doze|חֲבַקּוּק|Habacuque|3|HAB\nOs Doze|צְפַנְיָה|Sofonias|3|ZEP\nOs Doze|חַגַּי|Ageu|2|HAG\nOs Doze|זְכַרְיָה|Zacarias|14|ZEC\nOs Doze|מַלְאָכִי|Malaquias|3|MAL\nLivros de Verdade|תְהִלִּים|Salmos|150|PSA\nLivros de Verdade|מִשְׁלֵי|Provérbios|31|PRO\nLivros de Verdade|אִיּוֹב|Jó|42|JOB\nCinco Rolos|שִׁיר הַשִּׁירִים|Cântico dos Cânticos|8|SNG\nCinco Rolos|רוּת|Rute|4|RUT\nCinco Rolos|אֵיכָה|Lamentações|5|LAM\nCinco Rolos|קֹהֶלֶת|Eclesiastes|12|ECC\nCinco Rolos|אֶסְתֵר|Ester|10|EST\nOutros Escritos|דָּנִיֵּאל|Daniel|12|DAN\nOutros Escritos|עֶזְרָא|Esdras|10|EZR\nOutros Escritos|נְחֶמְיָה|Neemias|13|NEH\nOutros Escritos|דִּבְרֵי הַיָּמִים|1 Crônicas|29|1CH\nOutros Escritos|דִּבְרֵי הַיָּמִים|2 Crônicas|36|2CH","LXX":"Pentateuco|Γένεσις|Gênesis|50|GEN\nPentateuco|Ἔξοδος|Êxodo|40|EXO\nPentateuco|Λευϊτικόν|Levítico|27|LEV\nPentateuco|Ἀριθμοί|Números|36|NUM\nPentateuco|Δευτερονόμιον|Deuteronômio|34|DEU\nLivros históricos|Ἰησοῦς|Josué|24|JOS\nLivros históricos|Ἰησοῦς A|Josué — Alexandrino|3|JOS_A\nLivros históricos|Κριταί Α|Juízes — Alexandrino|21|JDG_A\nLivros históricos|Κριταί Β|Juízes — Vaticano|21|JDG_B\nLivros históricos|Ρούθ|Rute|4|RUT\nLivros históricos|Βασιλειῶν Αʹ|1 Samuel|31|1SA\nLivros históricos|Βασιλειῶν Βʹ|2 Samuel|24|2SA\nLivros históricos|Βασιλειῶν Γʹ|1 Reis|22|1KI\nLivros históricos|Βασιλειῶν Δʹ|2 Reis|25|2KI\nLivros históricos|Παραλειπομένων Αʹ|1 Crônicas|29|1CH\nLivros históricos|Παραλειπομένων Βʹ|2 Crônicas|36|2CH\nLivros históricos|Ἔσδρας Βʹ|Esdras|10|EZR\nLivros históricos|Ἔσδρας Βʹ|Neemias|13|NEH\nLivros históricos|Ἐσθήρ|Ester|10|EST\nPoéticos e sapienciais|Ψαλμοί|Salmos|150|PSA\nPoéticos e sapienciais|Παροιμίαι|Provérbios|31|PRO\nPoéticos e sapienciais|Ἐκκλησιαστής|Eclesiastes|12|ECC\nPoéticos e sapienciais|Ἆσμα|Cântico dos Cânticos|8|SNG\nPoéticos e sapienciais|Ἰώβ|Jó|42|JOB\nOs Doze|Ὠσῆε|Oseias|14|HOS\nOs Doze|Ἀμώς|Amós|9|AMO\nOs Doze|Μιχαίας|Miqueias|7|MIC\nOs Doze|Ἰωήλ|Joel|4|JOL\nOs Doze|Ἀβδιού|Obadias|1|OBA\nOs Doze|Ἰωνᾶς|Jonas|4|JON\nOs Doze|Ναούμ|Naum|3|NAM\nOs Doze|Ἀμβακούμ|Habacuque|3|HAB\nOs Doze|Σοφονίας|Sofonias|3|ZEP\nOs Doze|Ἀγγαῖος|Ageu|2|HAG\nOs Doze|Ζαχαρίας|Zacarias|14|ZEC\nOs Doze|Μαλαχίας|Malaquias|3|MAL\nProfetas maiores|Ἠσαΐας|Isaías|66|ISA\nProfetas maiores|Ἰερεμίας|Jeremias|52|JER\nProfetas maiores|Θρῆνοι|Lamentações|5|LAM\nProfetas maiores|Ἰεζεκιήλ|Ezequiel|48|EZK\nProfetas maiores|Δανιήλ|Daniel|12|DAN\nProfetas maiores|Δανιήλ (θʹ)|Daniel — Teodocião|12|DAN_TH\nApócrifos|Ἔσδρας Αʹ|1 Esdras|9|1ES\nApócrifos|Ἰουδίθ|Judite|16|JDT\nApócrifos|Τωβίτ|Tobias|14|TOB\nApócrifos|Τωβίτ (S)|Tobias — Sinaítico|14|TOB_S\nApócrifos|Μακκαβαίων Αʹ|1 Macabeus|16|1MA\nApócrifos|Μακκαβαίων Βʹ|2 Macabeus|15|2MA\nApócrifos|Μακκαβαίων Γʹ|3 Macabeus|7|3MA\nApócrifos|Μακκαβαίων Δʹ|4 Macabeus|18|4MA\nApócrifos|Ὠδαί|Odes|14|ODE\nApócrifos|Σοφία Σαλωμῶνος|Sabedoria de Salomão|19|WIS\nApócrifos|Πρόλογος Σοφίας Σιράχ|Prólogo de Sirácida|1|SIR_PRO\nApócrifos|Σοφία Σιράχ|Sirácida|52|SIR\nApócrifos|Ψαλμοὶ Σολομῶντος|Salmos de Salomão|18|PSS\nApócrifos|Βαρούχ|Baruque|5|BAR\nApócrifos|Ἐπιστολὴ Ἰερεμίου|Epístola de Jeremias|1|LJE\nApócrifos|Ψαλμοί|Salmo 151|1|PSA151\nApócrifos|Σουσάννα|Susana|1|SUS\nApócrifos|Σουσάννα (θʹ)|Susana — Teodocião|1|SUS_TH\nApócrifos|Βήλ καὶ Δράκων|Bel e o Dragão|1|BEL\nApócrifos|Βήλ καὶ Δράκων (θʹ)|Bel e o Dragão — Teodocião|1|BEL_TH","NT":"Evangelhos|Κατὰ Μαθθαῖον|Mateus|28|MAT\nEvangelhos|Κατὰ Μᾶρκον|Marcos|16|MRK\nEvangelhos|Κατὰ Λουκᾶν|Lucas|24|LUK\nEvangelhos|Κατὰ Ἰωάννην|João|21|JHN\nAtos|Πράξεις Ἀποστόλων|Atos dos Apóstolos|28|ACT\nEpístolas Paulinas|Πρὸς Ῥωμαίους|Romanos|16|ROM\nEpístolas Paulinas|Πρὸς Κορινθίους αʹ|1 Coríntios|16|1CO\nEpístolas Paulinas|Πρὸς Κορινθίους βʹ|2 Coríntios|13|2CO\nEpístolas Paulinas|Πρὸς Γαλάτας|Gálatas|6|GAL\nEpístolas Paulinas|Πρὸς Ἐφεσίους|Efésios|6|EPH\nEpístolas Paulinas|Πρὸς Φιλιππησίους|Filipenses|4|PHP\nEpístolas Paulinas|Πρὸς Κολοσσαεῖς|Colossenses|4|COL\nEpístolas Paulinas|Πρὸς Θεσσαλονικεῖς αʹ|1 Tessalonicenses|5|1TH\nEpístolas Paulinas|Πρὸς Θεσσαλονικεῖς βʹ|2 Tessalonicenses|3|2TH\nEpístolas Paulinas|Πρὸς Τιμόθεον αʹ|1 Timóteo|6|1TI\nEpístolas Paulinas|Πρὸς Τιμόθεον βʹ|2 Timóteo|4|2TI\nEpístolas Paulinas|Πρὸς Τίτον|Tito|3|TIT\nEpístolas Paulinas|Πρὸς Φιλήμονα|Filemom|1|PHM\nEpístolas Paulinas|Πρὸς Ἑβραίους|Hebreus|13|HEB\nEpístolas Universais|Ἰακώβου|Tiago|5|JAS\nEpístolas Universais|Πέτρου αʹ|1 Pedro|5|1PE\nEpístolas Universais|Πέτρου βʹ|2 Pedro|3|2PE\nEpístolas Universais|Ἰωάννου αʹ|1 João|5|1JN\nEpístolas Universais|Ἰωάννου βʹ|2 João|1|2JN\nEpístolas Universais|Ἰωάννου γʹ|3 João|1|3JN\nEpístolas Universais|Ἰούδα|Judas|1|JUD\nApocalipse|Ἀποκάλυψις Ἰωάννου|Apocalipse de João|22|REV"};

(function () {
    "use strict";
    const labels = {
        BHS: "Biblia Hebraica Stuttgartensia (BHS)",
        LXX: "Septuaginta (LXX)",
        NA28: "Novo Testamento Grego – Texto Crítico (NA28)",
        UBS5: "Novo Testamento Grego – Texto Crítico (UBS5)",
        TR: "Novo Testamento Grego – Texto Recebido (TR)"
    };
    const editionOrder = ["BHS", "LXX", "NA28", "UBS5", "TR"];
    const catalog = {};
    for (const edition of editionOrder) {
        const source = edition === "BHS" ? rawCatalog.BHS : edition === "LXX" ? rawCatalog.LXX : rawCatalog.NT;
        catalog[edition] = source.trim().split("\n").map(function (line) {
            const pieces = line.split("|");
            return { group: pieces[0], original: pieces[1], name: pieces[2],
                chapters: Number(pieces[3]), id: pieces[4] };
        });
    }
    const drawerNav = document.querySelector(".dictionary-nav");
    const dictionaryContext = document.querySelector(".dictionary-context");
    if (!drawerNav || !dictionaryContext) return;
    const main = dictionaryContext.parentElement;
    const menu = document.createElement("nav");
    menu.className = "scripture-nav";
    menu.setAttribute("aria-label", "Escrituras Sagradas");
    const menuTitle = document.createElement("div");
    menuTitle.className = "scripture-menu-title";
    menuTitle.textContent = "Escrituras Sagradas";
    menu.append(menuTitle);
    const menuButtons = new Map();
    editionOrder.forEach(function (edition) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "scripture-menu-option";
        button.dataset.scriptureEdition = edition;
        button.innerHTML = '<span class="scripture-menu-name"></span><span class="scripture-menu-code"></span>';
        button.querySelector(".scripture-menu-name").textContent = labels[edition];
        button.querySelector(".scripture-menu-code").textContent = edition;
        button.addEventListener("click", function () { show(edition, catalog[edition][0].id, 1, 1, true); });
        menu.append(button);
        menuButtons.set(edition, button);
    });
    drawerNav.parentElement.insertBefore(menu, drawerNav);
    const lexiconTitle = document.createElement("div");
    lexiconTitle.className = "scripture-menu-title scripture-menu-dictionaries";
    lexiconTitle.textContent = "Dicionários";
    drawerNav.parentElement.insertBefore(lexiconTitle, drawerNav);
    const panel = document.createElement("section");
    panel.id = "scripture-reader";
    panel.className = "scripture-reader";
    panel.hidden = true;
    panel.setAttribute("aria-labelledby", "scripture-reader-heading");
    panel.innerHTML =
        '<div class="scripture-reader-kicker">Escrituras Sagradas · Consulta por edição</div>' +
        '<h1 id="scripture-reader-heading">Consulta bíblica</h1>' +
        '<p class="scripture-reader-intro">Fontes textuais independentes, preservando as diferenças entre as edições.</p>' +
        '<div class="scripture-reader-controls">' +
        '<label>Edição<select id="scripture-edition"></select></label>' +
        '<label>Livro<select id="scripture-book"></select></label>' +
        '<label>Capítulo<select id="scripture-chapter"></select></label>' +
        '<label>Versículo<input id="scripture-verse" type="number" min="1" step="1" value="1" inputmode="numeric"></label>' +
        '</div>' +
        '<div class="scripture-reader-navigation"><button id="scripture-previous-chapter" type="button">← Capítulo anterior</button>' +
        '<button id="scripture-next-chapter" type="button">Próximo capítulo →</button></div>' +
        '<div class="scripture-reader-result" aria-live="polite">' +
        '<div class="scripture-reader-category" id="scripture-category"></div>' +
        '<h2 id="scripture-reference"></h2><p id="scripture-original" class="scripture-reader-original"></p>' +
        '<div id="scripture-text" class="scripture-text"></div></div>' +
        '<p id="scripture-limit-note" class="scripture-limit-note">A numeração exata dos versículos ainda depende da versificação de cada edição. A entrada de um número não comprova sua existência.</p>' +
        '<div class="scripture-reader-actions"><a id="scripture-external" href="#" target="_blank" rel="noopener noreferrer">Consultar capítulo na edição de origem ↗</a>' +
        '<button id="scripture-copy" type="button">Copiar referência</button></div>' +
        '<p id="scripture-reader-feedback" class="scripture-reader-feedback" role="status"></p>';
    main.insertBefore(panel, dictionaryContext);
    const editionSelect = panel.querySelector("#scripture-edition");
    const bookSelect = panel.querySelector("#scripture-book");
    const chapterSelect = panel.querySelector("#scripture-chapter");
    const verseInput = panel.querySelector("#scripture-verse");
    const heading = panel.querySelector("#scripture-reader-heading");
    const category = panel.querySelector("#scripture-category");
    const reference = panel.querySelector("#scripture-reference");
    const original = panel.querySelector("#scripture-original");
    const textRegion = panel.querySelector("#scripture-text");
    const external = panel.querySelector("#scripture-external");
    const feedback = panel.querySelector("#scripture-reader-feedback");
    const siblings = Array.from(main.children).filter(function (node) {
        return node !== panel && node.tagName !== "HEADER";
    });
    const initialVisibility = new Map(siblings.map(function (node) { return [node, node.hidden]; }));
    const state = { edition: "BHS", bookId: "GEN", chapter: 1, verse: 1 };
    function makeOption(value, label, group) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        if (group) group.append(option); else return option;
        return option;
    }
    editionOrder.forEach(function (code) { editionSelect.append(makeOption(code, labels[code])); });
    function book() { return catalog[state.edition].find(function (item) { return item.id === state.bookId; }); }
    function fillBooks() {
        bookSelect.replaceChildren();
        let last = "", group;
        catalog[state.edition].forEach(function (entry) {
            if (entry.group !== last) {
                group = document.createElement("optgroup");
                group.label = entry.group;
                bookSelect.append(group);
                last = entry.group;
            }
            makeOption(entry.id, entry.name + " · " + entry.original, group);
        });
    }
    function fillChapters() {
        chapterSelect.replaceChildren();
        for (let n = 1; n <= book().chapters; n++) chapterSelect.append(makeOption(String(n), String(n)));
    }
    function positiveInt(value, defaultValue) {
        const n = Number(value);
        return Number.isSafeInteger(n) && n >= 1 ? n : defaultValue;
    }
    function closeMenuIfOpen() {
        const drawer = document.getElementById("dictionary-menu");
        if (drawer && drawer.classList.contains("open")) document.getElementById("menu-close")?.click();
    }
    function syncHash() {
        const newHash = "#escrituras/" + state.edition + "/" + state.bookId + "." + state.chapter + "." + state.verse;
        if (window.location.hash !== newHash) history.replaceState(null, "", newHash);
    }
    function renderTexts() {
        textRegion.replaceChildren();
        const corpus = window.ScripturaScriptureTexts || {};
        const entries = corpus[state.edition]?.[state.bookId]?.[state.chapter];
        const verses = entries && typeof entries === "object" ? Object.entries(entries) : [];
        if (!verses.length) {
            const note = document.createElement("p");
            note.className = "scripture-empty-text";
            note.textContent = "Texto integral não incorporado nesta edição. Utilize a referência externa da fonte, quando disponível. A presença no catálogo não significa transcrição publicada.";
            textRegion.append(note);
            return;
        }
        verses.sort(function (a, b) { return Number(a[0]) - Number(b[0]); });
        verses.forEach(function (entry) {
            const number = positiveInt(entry[0], 0);
            if (!number) return;
            const content = typeof entry[1] === "string" ? entry[1] : entry[1]?.text;
            if (typeof content !== "string" || !content) return;
            const para = document.createElement("p");
            para.className = "scripture-verse-line";
            if (number === state.verse) para.classList.add("scripture-verse-selected");
            const count = document.createElement("span");
            count.className = "scripture-verse-number";
            count.textContent = String(number) + " ";
            const passage = document.createElement("bdi");
            passage.lang = state.edition === "BHS" ? "he" : "grc";
            passage.dir = state.edition === "BHS" ? "rtl" : "ltr";
            passage.textContent = content;
            para.append(count, passage);
            textRegion.append(para);
        });
    }
    function render() {
        const selected = book();
        const lang = state.edition === "BHS" ? "he" : "grc";
        editionSelect.value = state.edition;
        bookSelect.value = state.bookId;
        chapterSelect.value = String(state.chapter);
        verseInput.value = String(state.verse);
        heading.textContent = labels[state.edition];
        category.textContent = selected.group;
        reference.textContent = selected.name + " " + state.chapter + ":" + state.verse;
        original.textContent = selected.original;
        original.lang = lang;
        original.dir = lang === "he" ? "rtl" : "ltr";
        panel.querySelector("#scripture-previous-chapter").disabled = state.chapter === 1;
        panel.querySelector("#scripture-next-chapter").disabled = state.chapter === selected.chapters;
        const canLink = state.edition !== "TR" && /^[A-Z0-9]{3}$/.test(selected.id);
        external.hidden = !canLink;
        if (canLink) external.href = "https://www.die-bibel.de/en/bible/" + state.edition + "/" + selected.id + "." + state.chapter;
        else external.removeAttribute("href");
        menuButtons.forEach(function (button, code) {
            const active = code === state.edition && !panel.hidden;
            button.classList.toggle("active", active);
            if (active) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });
        renderTexts();
        feedback.textContent = !canLink ?
            (state.edition === "TR" ? "O Texto Recebido depende da definição de uma edição canônica (por exemplo, Stephanus ou Scrivener)." :
            "Esta variante ainda não possui um vínculo externo verificado.") : "";
    }
    function show(edition, bookId, chapter, verse, updateHash) {
        if (!catalog[edition]) return;
        state.edition = edition;
        state.bookId = catalog[edition].some(function (item) { return item.id === bookId; }) ? bookId : catalog[edition][0].id;
        state.chapter = Math.min(positiveInt(chapter, 1), book().chapters);
        state.verse = positiveInt(verse, 1);
        siblings.forEach(function (node) { node.hidden = true; });
        panel.hidden = false;
        fillBooks();
        fillChapters();
        render();
        closeMenuIfOpen();
        if (updateHash) syncHash();
    }
    function hide() {
        panel.hidden = true;
        siblings.forEach(function (node) { node.hidden = initialVisibility.get(node); });
        menuButtons.forEach(function (button) {
            button.classList.remove("active");
            button.removeAttribute("aria-current");
        });
    }
    function isScriptureHash() {
        return /^#escrituras\/(BHS|LXX|NA28|UBS5|TR)(?:\/|$)/.test(window.location.hash);
    }
    function showFromHash() {
        const match = /^#escrituras\/(BHS|LXX|NA28|UBS5|TR)(?:\/([A-Z0-9_]+)\.(\d+)\.(\d+))?$/.exec(window.location.hash);
        if (!match) return false;
        show(match[1], match[2], match[3], match[4], false);
        return true;
    }
    editionSelect.addEventListener("change", function () { show(editionSelect.value, null, 1, 1, true); });
    bookSelect.addEventListener("change", function () { show(state.edition, bookSelect.value, 1, 1, true); });
    chapterSelect.addEventListener("change", function () {
        state.chapter = Math.min(positiveInt(chapterSelect.value, 1), book().chapters);
        state.verse = 1; render(); syncHash();
    });
    verseInput.addEventListener("change", function () {
        state.verse = positiveInt(verseInput.value, 1);
        render(); syncHash();
    });
    panel.querySelector("#scripture-previous-chapter").addEventListener("click", function () {
        show(state.edition, state.bookId, state.chapter - 1, 1, true);
    });
    panel.querySelector("#scripture-next-chapter").addEventListener("click", function () {
        show(state.edition, state.bookId, state.chapter + 1, 1, true);
    });
    panel.querySelector("#scripture-copy").addEventListener("click", function () {
        const value = state.edition + " — " + book().name + " " + state.chapter + ":" + state.verse;
        if (!navigator.clipboard?.writeText) {
            feedback.textContent = "Copie a referência: " + value;
            return;
        }
        navigator.clipboard.writeText(value).then(function () {
            feedback.textContent = "Referência copiada.";
        }).catch(function () { feedback.textContent = "Copie a referência: " + value; });
    });
    window.ScripturaScriptures = { isScriptureHash: isScriptureHash, showFromHash: showFromHash,
        hide: hide, show: show, catalog: catalog };
})();
