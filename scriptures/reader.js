/* Scriptura Lexicon — catálogo de navegação, sem reprodução automática de obras protegidas. */
const rawCatalog = {"UXLC":"Torá|בְּרֵאשִׁית|Gênesis|50|GEN\nTorá|שְׁמוֹת|Êxodo|40|EXO\nTorá|וַיִּקְרָא|Levítico|27|LEV\nTorá|בְּמִדְבַּר|Números|36|NUM\nTorá|דְּבָרִים|Deuteronômio|34|DEU\nProfetas anteriores|יְהוֹשֻׁעַ|Josué|24|JOS\nProfetas anteriores|שֹׁפְטִים|Juízes|21|JDG\nProfetas anteriores|שְׁמוּאֵל|1 Samuel|31|1SA\nProfetas anteriores|שְׁמוּאֵל|2 Samuel|24|2SA\nProfetas anteriores|מְלָכִים|1 Reis|22|1KI\nProfetas anteriores|מְלָכִים|2 Reis|25|2KI\nProfetas posteriores|יְשַׁעְיָהוּ|Isaías|66|ISA\nProfetas posteriores|יִרְמְיָהוּ|Jeremias|52|JER\nProfetas posteriores|יְחֶזְקֵאל|Ezequiel|48|EZK\nOs Doze|הוֹשֵׁעַ|Oseias|14|HOS\nOs Doze|יוֹאֵל|Joel|4|JOL\nOs Doze|עָמוֹס|Amós|9|AMO\nOs Doze|עֹבַדְיָה|Obadias|1|OBA\nOs Doze|יוֹנָה|Jonas|4|JON\nOs Doze|מִיכָה|Miqueias|7|MIC\nOs Doze|נַחוּם|Naum|3|NAM\nOs Doze|חֲבַקּוּק|Habacuque|3|HAB\nOs Doze|צְפַנְיָה|Sofonias|3|ZEP\nOs Doze|חַגַּי|Ageu|2|HAG\nOs Doze|זְכַרְיָה|Zacarias|14|ZEC\nOs Doze|מַלְאָכִי|Malaquias|3|MAL\nLivros de Verdade|תְהִלִּים|Salmos|150|PSA\nLivros de Verdade|מִשְׁלֵי|Provérbios|31|PRO\nLivros de Verdade|אִיּוֹב|Jó|42|JOB\nCinco Rolos|שִׁיר הַשִּׁירִים|Cântico dos Cânticos|8|SNG\nCinco Rolos|רוּת|Rute|4|RUT\nCinco Rolos|אֵיכָה|Lamentações|5|LAM\nCinco Rolos|קֹהֶלֶת|Eclesiastes|12|ECC\nCinco Rolos|אֶסְתֵר|Ester|10|EST\nOutros Escritos|דָּנִיֵּאל|Daniel|12|DAN\nOutros Escritos|עֶזְרָא|Esdras|10|EZR\nOutros Escritos|נְחֶמְיָה|Neemias|13|NEH\nOutros Escritos|דִּבְרֵי הַיָּמִים|1 Crônicas|29|1CH\nOutros Escritos|דִּבְרֵי הַיָּמִים|2 Crônicas|36|2CH","LXX":"Pentateuco|Γένεσις|Gênesis|50|GEN\nPentateuco|Ἔξοδος|Êxodo|40|EXO\nPentateuco|Λευϊτικόν|Levítico|27|LEV\nPentateuco|Ἀριθμοί|Números|36|NUM\nPentateuco|Δευτερονόμιον|Deuteronômio|34|DEU\nLivros históricos|Ἰησοῦς|Josué|24|JOS\nLivros históricos|Ἰησοῦς A|Josué — Alexandrino|3|JOS_A\nLivros históricos|Κριταί Α|Juízes — Alexandrino|21|JDG_A\nLivros históricos|Κριταί Β|Juízes — Vaticano|21|JDG_B\nLivros históricos|Ρούθ|Rute|4|RUT\nLivros históricos|Βασιλειῶν Αʹ|1 Samuel|31|1SA\nLivros históricos|Βασιλειῶν Βʹ|2 Samuel|24|2SA\nLivros históricos|Βασιλειῶν Γʹ|1 Reis|22|1KI\nLivros históricos|Βασιλειῶν Δʹ|2 Reis|25|2KI\nLivros históricos|Παραλειπομένων Αʹ|1 Crônicas|29|1CH\nLivros históricos|Παραλειπομένων Βʹ|2 Crônicas|36|2CH\nLivros históricos|Ἔσδρας Βʹ|Esdras|10|EZR\nLivros históricos|Ἔσδρας Βʹ|Neemias|13|NEH\nLivros históricos|Ἐσθήρ|Ester|10|EST\nPoéticos e sapienciais|Ψαλμοί|Salmos|150|PSA\nPoéticos e sapienciais|Παροιμίαι|Provérbios|31|PRO\nPoéticos e sapienciais|Ἐκκλησιαστής|Eclesiastes|12|ECC\nPoéticos e sapienciais|Ἆσμα|Cântico dos Cânticos|8|SNG\nPoéticos e sapienciais|Ἰώβ|Jó|42|JOB\nOs Doze|Ὠσῆε|Oseias|14|HOS\nOs Doze|Ἀμώς|Amós|9|AMO\nOs Doze|Μιχαίας|Miqueias|7|MIC\nOs Doze|Ἰωήλ|Joel|4|JOL\nOs Doze|Ἀβδιού|Obadias|1|OBA\nOs Doze|Ἰωνᾶς|Jonas|4|JON\nOs Doze|Ναούμ|Naum|3|NAM\nOs Doze|Ἀμβακούμ|Habacuque|3|HAB\nOs Doze|Σοφονίας|Sofonias|3|ZEP\nOs Doze|Ἀγγαῖος|Ageu|2|HAG\nOs Doze|Ζαχαρίας|Zacarias|14|ZEC\nOs Doze|Μαλαχίας|Malaquias|3|MAL\nProfetas maiores|Ἠσαΐας|Isaías|66|ISA\nProfetas maiores|Ἰερεμίας|Jeremias|52|JER\nProfetas maiores|Θρῆνοι|Lamentações|5|LAM\nProfetas maiores|Ἰεζεκιήλ|Ezequiel|48|EZK\nProfetas maiores|Δανιήλ|Daniel|12|DAN\nProfetas maiores|Δανιήλ (θʹ)|Daniel — Teodocião|12|DAN_TH\nApócrifos|Ἔσδρας Αʹ|1 Esdras|9|1ES\nApócrifos|Ἰουδίθ|Judite|16|JDT\nApócrifos|Τωβίτ|Tobias|14|TOB\nApócrifos|Τωβίτ (S)|Tobias — Sinaítico|14|TOB_S\nApócrifos|Μακκαβαίων Αʹ|1 Macabeus|16|1MA\nApócrifos|Μακκαβαίων Βʹ|2 Macabeus|15|2MA\nApócrifos|Μακκαβαίων Γʹ|3 Macabeus|7|3MA\nApócrifos|Μακκαβαίων Δʹ|4 Macabeus|18|4MA\nApócrifos|Ὠδαί|Odes|14|ODE\nApócrifos|Σοφία Σαλωμῶνος|Sabedoria de Salomão|19|WIS\nApócrifos|Πρόλογος Σοφίας Σιράχ|Prólogo de Sirácida|1|SIR_PRO\nApócrifos|Σοφία Σιράχ|Sirácida|51|SIR\nApócrifos|Ψαλμοὶ Σολομῶντος|Salmos de Salomão|18|PSS\nApócrifos|Βαρούχ|Baruque|5|BAR\nApócrifos|Προσευχὴ Μανασσῆ|Oração de Manassés|1|MAN\nApócrifos|Ἐπιστολὴ Ἰερεμίου|Epístola de Jeremias|1|LJE\nApócrifos|Ψαλμοί|Salmo 151|1|PSA151\nApócrifos|Σουσάννα|Susana|1|SUS\nApócrifos|Σουσάννα (θʹ)|Susana — Teodocião|1|SUS_TH\nApócrifos|Βήλ καὶ Δράκων|Bel e o Dragão|1|BEL\nApócrifos|Βήλ καὶ Δράκων (θʹ)|Bel e o Dragão — Teodocião|1|BEL_TH","NT":"Evangelhos|Κατὰ Μαθθαῖον|Mateus|28|MAT\nEvangelhos|Κατὰ Μᾶρκον|Marcos|16|MRK\nEvangelhos|Κατὰ Λουκᾶν|Lucas|24|LUK\nEvangelhos|Κατὰ Ἰωάννην|João|21|JHN\nAtos|Πράξεις Ἀποστόλων|Atos dos Apóstolos|28|ACT\nEpístolas Paulinas|Πρὸς Ῥωμαίους|Romanos|16|ROM\nEpístolas Paulinas|Πρὸς Κορινθίους αʹ|1 Coríntios|16|1CO\nEpístolas Paulinas|Πρὸς Κορινθίους βʹ|2 Coríntios|13|2CO\nEpístolas Paulinas|Πρὸς Γαλάτας|Gálatas|6|GAL\nEpístolas Paulinas|Πρὸς Ἐφεσίους|Efésios|6|EPH\nEpístolas Paulinas|Πρὸς Φιλιππησίους|Filipenses|4|PHP\nEpístolas Paulinas|Πρὸς Κολοσσαεῖς|Colossenses|4|COL\nEpístolas Paulinas|Πρὸς Θεσσαλονικεῖς αʹ|1 Tessalonicenses|5|1TH\nEpístolas Paulinas|Πρὸς Θεσσαλονικεῖς βʹ|2 Tessalonicenses|3|2TH\nEpístolas Paulinas|Πρὸς Τιμόθεον αʹ|1 Timóteo|6|1TI\nEpístolas Paulinas|Πρὸς Τιμόθεον βʹ|2 Timóteo|4|2TI\nEpístolas Paulinas|Πρὸς Τίτον|Tito|3|TIT\nEpístolas Paulinas|Πρὸς Φιλήμονα|Filemom|1|PHM\nEpístolas Paulinas|Πρὸς Ἑβραίους|Hebreus|13|HEB\nEpístolas Universais|Ἰακώβου|Tiago|5|JAS\nEpístolas Universais|Πέτρου αʹ|1 Pedro|5|1PE\nEpístolas Universais|Πέτρου βʹ|2 Pedro|3|2PE\nEpístolas Universais|Ἰωάννου αʹ|1 João|5|1JN\nEpístolas Universais|Ἰωάννου βʹ|2 João|1|2JN\nEpístolas Universais|Ἰωάννου γʹ|3 João|1|3JN\nEpístolas Universais|Ἰούδα|Judas|1|JUD\nApocalipse|Ἀποκάλυψις Ἰωάννου|Apocalipse de João|22|REV"};

(function () {
    "use strict";
    const labels = {
        UXLC: "Códice de Leningrado [L/Firkovich B19A]",
        LXX: "Septuaginta — Brenton (texto grego, 1851)",
        SBLGNT: "SBL Greek New Testament — Holmes (2010)",
        NA28: "Novo Testamento Grego – Texto Crítico (NA28)",
        UBS5: "Novo Testamento Grego – Texto Crítico (UBS5)",
        TR: "Textus Receptus — Scrivener (1894)",
        VULJ: "Vulgata Latina — tradição de Jerônimo (CrossWire)",
        VUL: "Biblia Sacra Vulgata Clementina (1598)"
    };
    const editionOrder = ["UXLC", "LXX", "SBLGNT", "NA28", "UBS5", "TR", "VULJ", "VUL"];
    const originalCatalog = {};
    for (const edition of editionOrder) {
        const source = edition === "UXLC" ? rawCatalog.UXLC :
            edition === "LXX" ? rawCatalog.LXX :
            edition === "VUL" ? window.ScripturaVulCatalog :
            edition === "VULJ" ? window.ScripturaVulJeromeCatalog : rawCatalog.NT;
        originalCatalog[edition] = source.trim().split("\n").map(function (line) {
            const pieces = line.split("|");
            return { group: pieces[0], original: pieces[1], name: pieces[2],
                chapters: Number(pieces[3]), id: pieces[4] };
        });
    }
    // Classificação editorial separada dos textos; nenhum módulo de fonte é reescrito.
    // Cânon de 66 livros adotado neste projeto, não norma universal das tradições cristãs.
    const canonical = new Set(("GEN EXO LEV NUM DEU JOS JDG RUT 1SA 2SA 1KI 2KI 1CH 2CH " +
        "EZR NEH EST JOB PSA PRO ECC SNG ISA JER LAM EZK DAN HOS JOL AMO OBA JON MIC " +
        "NAM HAB ZEP HAG ZEC MAL MAT MRK LUK JHN ACT ROM 1CO 2CO GAL EPH PHP COL " +
        "1TH 2TH 1TI 2TI TIT PHM HEB JAS 1PE 2PE 1JN 2JN 3JN JUD REV " +
        "JOS_A JDG_A JDG_B").split(" "));
    const catalog = {}, apocryphaCatalog = {};
    for (const edition of editionOrder) {
        const originals = originalCatalog[edition];
        catalog[edition] = originals.filter(item => canonical.has(item.id)).map(item => {
            if ((edition === "VUL" || edition === "VULJ") && item.id === "EST")
                return {...item,chapters:10};
            if ((edition === "VUL" || edition === "VULJ") && item.id === "DAN")
                return {...item,chapters:12};
            return item;
        });
        apocryphaCatalog[edition] = originals.filter(item => !canonical.has(item.id) &&
            !!(window.ScripturaChapterManifest?.[edition]?.[item.id] ||
                window.ScripturaScriptureTexts?.[edition]?.[item.id]));
        if (edition === "VUL" || edition === "VULJ") {
            // Cap. 10:4–13 e caps. 11–16 de Ester: mantêm numeração da fonte.
            apocryphaCatalog[edition].push({
                group:"Acréscimos textuais",original:"Additamenta Esther",
                name:"Acréscimos a Ester",chapters:7,id:"EST_ADD"
            });
            // Segundo ambas as fontes latinas: cap. 13 = Susanna; 14 = Bel et Draco.
            apocryphaCatalog[edition].push({
                group:"Acréscimos textuais",original:"Susanna",
                name:"Susanna",chapters:1,id:"DAN_SUS"
            },{
                group:"Acréscimos textuais",original:"Bel et Draco",
                name:"Bel et Draco",chapters:1,id:"DAN_BEL"
            });
        }
    }
    const dictionaryContext = document.querySelector(".dictionary-context");
    if (!dictionaryContext) return;
    const main = dictionaryContext.parentElement;
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
    const wordUI = window.ScripturaWordPopups?.attach(panel, textRegion) || null;
    const external = panel.querySelector("#scripture-external");
    const feedback = panel.querySelector("#scripture-reader-feedback");
    const siblings = Array.from(main.children).filter(function (node) {
        return node !== panel && node.tagName !== "HEADER";
    });
    const initialVisibility = new Map(siblings.map(function (node) { return [node, node.hidden]; }));
    const state = { scope: "escrituras", edition: "UXLC", bookId: "GEN", chapter: 1, verse: 1 };
    function makeOption(value, label, group) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        if (group) group.append(option); else return option;
        return option;
    }
    function activeCatalog() {
        return state.scope === "apocrifos" ? apocryphaCatalog[state.edition] : catalog[state.edition];
    }
    function fillEditions() {
        editionSelect.replaceChildren();
        const allowed = state.scope === "apocrifos" ? ["LXX","VUL","VULJ"] : editionOrder;
        allowed.forEach(code => editionSelect.append(makeOption(code, labels[code])));
    }
    function book() { return activeCatalog().find(function (item) { return item.id === state.bookId; }); }
    // Uma entrada virtual aponta para capítulo existente; nenhuma cópia de texto é criada.
    function sourceLocation() {
        if (state.bookId === "EST_ADD") return {id:"EST",chapter:state.chapter+9};
        if (state.bookId === "DAN_SUS") return {id:"DAN",chapter:13};
        if (state.bookId === "DAN_BEL") return {id:"DAN",chapter:14};
        return {id:state.bookId,chapter:state.chapter};
    }
    function activeVerseMap() {
        const where=sourceLocation();
        const raw=window.ScripturaScriptureTexts?.[state.edition]?.[where.id]?.[where.chapter];
        if (!raw) return undefined;
        if (state.scope === "apocrifos" && state.bookId === "EST_ADD" && state.chapter === 1)
            return Object.fromEntries(Object.entries(raw).filter(([v])=>Number(v)>=4));
        if (state.scope === "escrituras" && state.bookId === "EST" &&
            (state.edition === "VUL" || state.edition === "VULJ") && state.chapter === 10)
            return Object.fromEntries(Object.entries(raw).filter(([v])=>Number(v)<=3));
        return raw;
    }
    function sourceReference(verse) {
        const b=book(),where=sourceLocation();
        if (b.id === "EST_ADD") return "Acréscimos a Ester (Ester " + where.chapter + ":" + verse + ")";
        if (b.id === "DAN_SUS" || b.id === "DAN_BEL")
            return b.name + " (Daniel " + where.chapter + ":" + verse + ")";
        return b.name + " " + state.chapter + ":" + verse;
    }
    function selectedBookName() { return book()?.name || state.bookId; }
    function fillBooks() {
        bookSelect.replaceChildren();
        let last = "", group;
        activeCatalog().forEach(function (entry) {
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
        for (let n = 1; n <= book().chapters; n++) {
            const label = book().id === "EST_ADD" ? (n === 1 ? "10:4–13" : String(n+9)) :
                (book().id === "DAN_SUS" ? "Daniel 13" :
                book().id === "DAN_BEL" ? "Daniel 14" : String(n));
            chapterSelect.append(makeOption(String(n), label));
        }
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
        const newHash = "#" + state.scope + "/" + state.edition + "/" + state.bookId + "." + state.chapter + "." + state.verse;
        if (window.location.hash !== newHash) history.replaceState(null, "", newHash);
    }
    // A seleção dos versículos não altera nem recarrega os dados da edição.
    function activateVerse(number,updateUrl=true) {
        const target=textRegion.querySelector('[data-scripture-verse="'+number+'"]');
        if(!target)return false;
        state.verse=number;
        verseInput.value=String(number);
        reference.textContent=sourceReference(number);
        for(const line of textRegion.querySelectorAll("[data-scripture-verse]")){
            const active=Number(line.dataset.scriptureVerse)===number;
            line.classList.toggle("scripture-verse-selected",active);
            line.setAttribute("aria-pressed",String(active));
        }
        if(updateUrl)syncHash();
        return true;
    }
    textRegion.addEventListener("click",event=>{
        // Os botões de palavras continuam abrindo o minidicionário, sem navegar.
        if(event.target.closest(".scripture-word"))return;
        const line=event.target.closest("[data-scripture-verse]");
        if(line&&textRegion.contains(line))activateVerse(Number(line.dataset.scriptureVerse));
    });
    textRegion.addEventListener("keydown",event=>{
        if(event.target.closest(".scripture-word"))return;
        const line=event.target.closest("[data-scripture-verse]");
        if(line&&textRegion.contains(line)&&(event.key==="Enter"||event.key===" ")){
            event.preventDefault();
            activateVerse(Number(line.dataset.scriptureVerse));
        }
    });
    function renderTexts() {
        wordUI?.close(false);
        textRegion.replaceChildren();
        const fragment=document.createDocumentFragment();
        const entries=activeVerseMap();
        const verses=entries&&typeof entries==="object"?Object.entries(entries):[];
        if(!verses.length){
            const note=document.createElement("p");
            note.className="scripture-empty-text";
            note.textContent="Texto integral não incorporado nesta edição. Utilize a referência externa da fonte, quando disponível. A presença no catálogo não significa transcrição publicada.";
            textRegion.append(note);
            return;
        }
        const where=sourceLocation();
        const parashahBreaks=window.ScripturaScriptureParagraphBreaks?.[state.edition]?.[where.id]?.[where.chapter]||[];
        const sourceBreaks=new Set(parashahBreaks.map(Number));
        const parashahTypes=window.ScripturaScriptureParashahTypes?.[state.edition]?.[where.id]?.[where.chapter]||{};
        const inlineParashahTypes=window.ScripturaScriptureInlineParashahTypes?.[state.edition]?.[where.id]?.[where.chapter]||{};
        const editorialSeparators=window.ScripturaScriptureEditorialSeparators?.[state.edition]?.[where.id]?.[where.chapter]||[];
        const separatorEnds=new Set(editorialSeparators.map(Number));
        const headings=window.ScripturaScriptureHeadings?.[state.edition]?.[where.id]?.[where.chapter]||[];
        const headingsByVerse=new Map(headings.map(h=>[Number(h.beforeVerse),h]));
        const grouping=window.ScripturaScriptureParagraphs;
        const greek=grouping.greekEditions.has(state.edition);
        const protectedWords=greek?grouping.sourceGreekInitials(verses):null;
        const paragraphs=grouping.group(verses,{
            sourceEnds:parashahBreaks,separatorEnds:editorialSeparators,
            headingBefore:headings.map(h=>h.beforeVerse)
        });
        for(const group of paragraphs){
            const first=group.verses[0].number;
            const heading=headingsByVerse.get(first);
            if(heading){
                const section=document.createElement("div");
                section.className="scripture-section-heading";
                if(typeof heading.bookTitle==="string"){
                    const bookLabel=document.createElement("p");
                    bookLabel.className="scripture-section-book-label";
                    bookLabel.lang="grc";bookLabel.textContent=heading.bookTitle;
                    section.append(bookLabel);
                }
                if(typeof heading.title==="string"){
                    const title=document.createElement("h3");
                    title.textContent=heading.title;section.append(title);
                }
                if(typeof heading.parallel==="string"){
                    const parallel=document.createElement("p");
                    parallel.className="scripture-section-parallel";
                    parallel.textContent=heading.parallel;section.append(parallel);
                }
                fragment.append(section);
            }
            const paragraph=document.createElement("p");
            paragraph.className="scripture-paragraph";
            paragraph.dir=state.edition==="UXLC"?"rtl":"ltr";
            paragraph.dataset.paragraphOrigin=group.origin;
            for(let index=0;index<group.verses.length;index++){
                const {number,text:content}=group.verses[index];
                const line=document.createElement("span");
                line.className="scripture-verse-line";
                line.dataset.scriptureVerse=String(number);
                line.tabIndex=0;
                line.setAttribute("role","button");
                line.setAttribute("aria-label",sourceReference(number));
                line.setAttribute("aria-pressed",String(number===state.verse));
                line.dir=state.edition==="UXLC"?"rtl":"ltr";
                if(number===state.verse)line.classList.add("scripture-verse-selected");
                const count=document.createElement("span");
                count.className="scripture-verse-number";
                count.textContent=String(number)+" ";
                const passage=document.createElement("bdi");
                passage.lang=state.edition==="UXLC"?"he":
                    (state.edition==="VUL"||state.edition==="VULJ")?"la":"grc";
                passage.dir=state.edition==="UXLC"?"rtl":"ltr";
                const display=greek?grouping.displayGreek(content,{
                    paragraphStart:index===0,protectedWords
                }):content;
                const options={edition:state.edition,reference:sourceReference(number)};
                const inline=inlineParashahTypes[number]||[];
                if(inline.length){
                    let cursor=0;
                    const appendText=part=>{
                        if(!part)return;
                        const span=document.createElement("span");
                        // UXLC não passa por transformação de caixa.
                        if(wordUI)wordUI.decorate(span,part,options);
                        else span.textContent=part;
                        passage.append(span);
                    };
                    for(const marker of inline){
                        const offset=Number(marker.offset);
                        if(!Number.isInteger(offset)||offset<cursor||offset>content.length)continue;
                        appendText(content.slice(cursor,offset));
                        const sign=document.createElement("span");
                        sign.className="scripture-inline-parashah";
                        sign.lang="he";
                        sign.textContent=" "+(marker.type==="ס"?"ס":"פ");
                        sign.setAttribute("aria-label",marker.type==="ס"?
                            "ס — parashah interna, seção fechada":
                            "פ — parashah interna, seção aberta");
                        passage.append(sign);cursor=offset;
                    }
                    appendText(content.slice(cursor));
                }else if(wordUI)wordUI.decorate(passage,display,options);
                else passage.textContent=display;
                line.append(count,passage);
                paragraph.append(line);
                if(index<group.verses.length-1)
                    paragraph.append(document.createTextNode(" "));
            }
            fragment.append(paragraph);
            const last=group.verses.at(-1).number;
            if(separatorEnds.has(last)){
                const separator=document.createElement("p");
                separator.className="scripture-editorial-separator";
                separator.setAttribute("aria-label","Travessão editorial entre versículos");
                separator.textContent="—";
                fragment.append(separator);
            }
            if(sourceBreaks.has(last)&&state.edition==="UXLC"){
                const mark=parashahTypes[last]==="ס"?"ס":"פ";
                const marker=document.createElement("p");
                marker.className=mark==="ס"?"scripture-parashah-closed":"scripture-parashah-open";
                marker.lang="he";marker.dir="rtl";
                marker.textContent=mark;
                marker.setAttribute("aria-label",mark==="ס"?
                  "ס — parashah setumah, seção fechada":"פ — parashah petuchah, seção aberta");
                fragment.append(marker);
            }
        }
        textRegion.append(fragment);
    }
    let renderRequest = 0;
    function render() {
        const ticket = ++renderRequest;
        const selected = book();
        const lang = state.edition === "UXLC" ? "he" : (state.edition === "VUL" || state.edition === "VULJ") ? "la" : "grc";
        editionSelect.value = state.edition;
        bookSelect.value = state.bookId;
        chapterSelect.value = String(state.chapter);
        const verseMap = activeVerseMap();
        const knownVerseNumbers = verseMap ? Object.keys(verseMap).map(Number).filter(Number.isSafeInteger) : [];
        const knownVerseLimit = knownVerseNumbers.length ? Math.max(...knownVerseNumbers) : null;
        const knownVerseMinimum = knownVerseNumbers.length ? Math.min(...knownVerseNumbers) : null;
        if (knownVerseMinimum !== null && state.verse < knownVerseMinimum) state.verse = knownVerseMinimum;
        if (knownVerseLimit !== null && state.verse > knownVerseLimit) state.verse = knownVerseLimit;
        if (knownVerseLimit === null) verseInput.removeAttribute("max");
        else verseInput.max = String(knownVerseLimit);
        verseInput.value = String(state.verse);
        heading.textContent = labels[state.edition];
        panel.querySelector(".scripture-reader-kicker").textContent =
            (state.scope === "apocrifos" ? "Literatura apócrifa" : "Escrituras Sagradas") +
            " · Consulta por edição";
        panel.querySelector(".scripture-reader h1")?.setAttribute("data-reader-scope", state.scope);
        category.textContent = selected.group;
        reference.textContent = sourceReference(state.verse);
        original.textContent = selected.original;
        original.lang = lang;
        original.dir = lang === "he" ? "rtl" : "ltr";
        panel.querySelector("#scripture-previous-chapter").disabled = state.chapter === 1;
        panel.querySelector("#scripture-next-chapter").disabled = state.chapter === selected.chapters;
        const canLink = ["UXLC", "LXX", "NA28", "UBS5", "SBLGNT"].includes(state.edition) && /^[A-Z0-9]{3}$/.test(selected.id);
        external.hidden = !canLink;
        if (canLink) external.href = (state.edition === "SBLGNT" ? "https://github.com/Faithlife/SBLGNT/tree/c4d241a9c1c479a55b989ba35a4976c1d0b8052c/data/sblgnt/text" : state.edition === "UXLC" ? "https://www.tanach.us/" : "https://www.die-bibel.de/en/bible/" + state.edition + "/" + selected.id + "." + state.chapter);
        else external.removeAttribute("href");
        external.textContent = state.edition === "SBLGNT" ? "Consultar edição de origem ↗" : "Consultar capítulo na edição de origem ↗";
        external.textContent = state.edition === "SBLGNT" ? "Consultar edição de origem ↗" : "Consultar capítulo na edição de origem ↗";
        const where = sourceLocation();
        const activeLoader = window.ScripturaChapterLoader;
        if (activeVerseMap() || !activeLoader?.location(state.edition, where.id, where.chapter)) {
            renderTexts();
        } else {
            textRegion.replaceChildren();
            const notice = document.createElement("p");
            notice.className = "scripture-empty-text";
            notice.textContent = "Carregando capítulo…";
            textRegion.append(notice);
            activeLoader.load(state.edition,where.id,where.chapter).then(function () {
                if (ticket !== renderRequest || panel.hidden) return;
                const loaded = activeVerseMap();
                const numbers = loaded ? Object.keys(loaded).map(Number).filter(Number.isSafeInteger) : [];
                if (numbers.length) {
                    const previous = state.verse;
                    state.verse = Math.max(Math.min(state.verse,Math.max(...numbers)),Math.min(...numbers));
                    verseInput.value = String(state.verse);
                    verseInput.max = String(Math.max(...numbers));
                    reference.textContent = sourceReference(state.verse);
                    if (previous !== state.verse) syncHash();
                }
                renderTexts();
                activeLoader.prefetch(state.edition,where.id,where.chapter,
                    () => ticket === renderRequest && !panel.hidden);
            }).catch(function (error) {
                if (ticket !== renderRequest || panel.hidden) return;
                textRegion.replaceChildren();
                const note = document.createElement("p");
                note.className = "scripture-empty-text";
                note.textContent = error.code === "NOT_FOUND" ? "Capítulo inexistente nesta edição." :
                    "Falha no carregamento do capítulo. Verifique a conexão e tente novamente.";
                const retry = document.createElement("button");
                retry.type = "button";
                retry.textContent = "Tentar novamente";
                retry.addEventListener("click",render,{once:true});
                textRegion.append(note,retry);
                feedback.textContent = error.message;
            });
        }
        feedback.textContent = state.edition === "SBLGNT" ? "SBLGNT, edição crítica de Michael W. Holmes (2010), v1.2. © 2010 Society of Biblical Literature e Logos Bible Software. CC BY 4.0. Sinais críticos preservados; aparato armazenado separadamente." : !canLink ?
            (state.edition === "TR" ? "Edição identificada: F. H. A. Scrivener (1894); transcrição digital de Honza Pokorny." :
            state.edition === "VULJ" ? "Texto latino CrossWire Vulgate 2.1 (domínio público), tradição jeronimiana; não equivale à edição crítica Weber–Gryson." :
            state.edition === "VUL" ? "Texto latino da Vulgata Clementina (1598), eBible latVUC; notas editoriais preservadas separadamente." :
            "Esta variante ainda não possui um vínculo externo verificado.") : "";
    }
    function show(edition, bookId, chapter, verse, updateHash, scope) {
        state.scope = scope === "apocrifos" ? "apocrifos" : "escrituras";
        if (state.scope === "apocrifos" && !["LXX","VUL","VULJ"].includes(edition)) edition="LXX";
        if (!catalog[edition]) return;
        state.edition = edition;
        const list=activeCatalog();
        if (!list?.length) return;
        state.bookId = list.some(function (item) { return item.id === bookId; }) ? bookId : list[0].id;
        state.chapter = Math.min(positiveInt(chapter, 1), book().chapters);
        state.verse = positiveInt(verse, 1);
        siblings.forEach(function (node) { node.hidden = true; });
        panel.hidden = false;
        fillEditions();
        fillBooks();
        fillChapters();
        render();
        closeMenuIfOpen();
        if (updateHash) syncHash();
    }
    function hide() {
        renderRequest++;
        wordUI?.close(false);
        panel.hidden = true;
        siblings.forEach(function (node) { node.hidden = initialVisibility.get(node); });
    }
    function isScriptureHash() {
        return /^#(?:escrituras|apocrifos)\//.test(window.location.hash);
    }
    function showFromHash() {
        const match = /^#(escrituras|apocrifos)\/(UXLC|LXX|SBLGNT|NA28|UBS5|TR|VULJ|VUL)(?:\/([A-Z0-9_]+)\.(\d+)\.(\d+))?$/.exec(window.location.hash);
        if (!match) return false;
        const scope=match[1],edition=match[2],bookId=match[3];
        const chapter=positiveInt(match[4],1),verse=positiveInt(match[5],1);
        const latin = edition === "VUL" || edition === "VULJ";
        // URLs antigas apontam para a nova seção sem perder a referência da fonte.
        if (latin && bookId === "EST" && chapter === 10 && verse >= 4) {
            show(edition,"EST_ADD",1,verse,false,"apocrifos");syncHash();return true;
        }
        if (latin && bookId === "EST" && chapter >= 11 && chapter <= 16) {
            show(edition,"EST_ADD",chapter-9,verse,false,"apocrifos");syncHash();return true;
        }
        if (latin && bookId === "DAN" && (chapter === 13 || chapter === 14)) {
            show(edition,chapter === 13 ? "DAN_SUS" : "DAN_BEL",1,verse,false,"apocrifos");
            syncHash();return true;
        }
        const isApocrypha=bookId && apocryphaCatalog[edition]?.some(b=>b.id===bookId);
        show(edition,bookId,chapter,verse,false,isApocrypha?"apocrifos":scope);
        if ((isApocrypha && scope !== "apocrifos") || chapter !== state.chapter || verse !== state.verse)
            syncHash();
        return true;
    }
    editionSelect.addEventListener("change", function () { show(editionSelect.value, null, 1, 1, true, state.scope); });
    bookSelect.addEventListener("change", function () { show(state.edition, bookSelect.value, 1, 1, true, state.scope); });
    chapterSelect.addEventListener("change", function () {
        state.chapter = Math.min(positiveInt(chapterSelect.value, 1), book().chapters);
        state.verse = 1; render(); syncHash();
    });
    verseInput.addEventListener("change", function () {
        state.verse = positiveInt(verseInput.value, 1);
        render(); syncHash();
    });
    panel.querySelector("#scripture-previous-chapter").addEventListener("click", function () {
        show(state.edition, state.bookId, state.chapter - 1, 1, true, state.scope);
    });
    panel.querySelector("#scripture-next-chapter").addEventListener("click", function () {
        show(state.edition, state.bookId, state.chapter + 1, 1, true, state.scope);
    });
    panel.querySelector("#scripture-copy").addEventListener("click", function () {
        const value = state.edition + " — " + sourceReference(state.verse);
        if (!navigator.clipboard?.writeText) {
            feedback.textContent = "Copie a referência: " + value;
            return;
        }
        navigator.clipboard.writeText(value).then(function () {
            feedback.textContent = "Referência copiada.";
        }).catch(function () { feedback.textContent = "Copie a referência: " + value; });
    });
    window.ScripturaScriptures = { isScriptureHash: isScriptureHash, showFromHash: showFromHash,
        hide: hide, show: show, catalog: catalog, apocryphaCatalog: apocryphaCatalog };
})();
