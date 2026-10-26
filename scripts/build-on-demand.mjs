"use strict";
/*
 * Scriptura Lexicon — compilação estática sob demanda.
 * Lê os arquivos lexicográficos originais sem modificá-los e gera:
 *   catálogo, índice de n-gramas, verificação compacta, linhas e artigos em blocos.
 * Não exige pacotes npm; use node --max-old-space-size=4096 scripts/build-on-demand.mjs
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const modules = JSON.parse(fs.readFileSync(path.join(root, "lexicon-modules.json"), "utf8"));
if (modules.length < 100) throw Error("Manifesto de módulos não encontrado no index.html.");
const ctx = vm.createContext({window: {}, console});
for (const file of modules) {
    const source = fs.readFileSync(path.join(root, file), "utf8");
    try {
        vm.runInContext(source, ctx, {filename: file, timeout: 120000});
    } catch (error) {
        throw Error("Falha ao compilar " + file + ": " + error.stack);
    }
}
const output = path.join(root, "lexicon-data");
fs.rmSync(output, {recursive: true, force: true});
for (const dir of ["grams", "lookup", "lookup-large", "meta", "cards", "auditorias"]) {
    fs.mkdirSync(path.join(output, dir), {recursive: true});
}
function emit(file, value) {
    fs.writeFileSync(path.join(output, file), JSON.stringify(value), "utf8");
}
function decodeEntities(value) {
    const named = {amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:" ",ndash:"–",
        mdash:"—",hellip:"…",laquo:"«",raquo:"»",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”"};
    return String(value).replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi, (all, key) => {
        if (key[0] === "#") {
            const n = key[1].toLowerCase() === "x" ? parseInt(key.slice(2),16) : Number(key.slice(1));
            return Number.isInteger(n) && n > 0 && n <= 0x10ffff
                ? String.fromCodePoint(n) : all;
        }
        return Object.hasOwn(named, key.toLowerCase()) ? named[key.toLowerCase()] : all;
    });
}
function attribute(openTag, name) {
    const match = openTag.match(new RegExp("(?:^|\\s)" + name + "=(?:\"([^\"]*)\"|'([^']*)')", "i"));
    return match ? decodeEntities(match[1] ?? match[2]) : "";
}
function entries(source, tag, expectedClass) {
    const regex = new RegExp("<" + tag + "\\b[^>]*\\bclass=(?:\"[^\"]*\\b" + expectedClass +
        "\\b[^\"]*\"|'[^']*\\b" + expectedClass + "\\b[^']*')[^>]*>[\\s\\S]*?<\\/" + tag + ">", "gi");
    return Array.from(source.matchAll(regex), match => match[0]);
}
function openTag(markup) {return markup.slice(0, markup.indexOf(">") + 1);}
function textOnly(markup) {return decodeEntities(markup.replace(/<[^>]*>/g, ""));}
function fullText(card) {
    const m = card.match(/<(?:p|div)\b[^>]*class="[^"]*\bentry-text\b[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i);
    return m ? textOnly(m[1]).trim() : "";
}
function normalize(value) {
    return value.toLocaleLowerCase("pt-BR").normalize("NFD")
        .replace(/\p{M}/gu, "").replace(/\s+/g, " ").trim();
}
// Quarentena apenas da APRESENTAÇÃO: conserva os módulos-fonte inalterados,
// incluindo a definição e o identificador original para cotejo posterior.
const quarantinedDgpFragments = [];
function register(records, rows, cards, origin) {
    const byId = new Map();
    for (const card of entries(cards, "article", "entry-card")) {
        const target = attribute(openTag(card), "id");
        if (!target) throw Error("Artigo sem identificador em " + origin);
        if (!byId.has(target)) byId.set(target, []);
        else collisions.push({target, kind:"article", origin});
        byId.get(target).push(card);
    }
    const parsedRows = entries(rows, "tr", "search-row");
    console.log("EXTRACTION", origin, JSON.stringify({
        rowMatches: parsedRows.length,
        cardMatches: entries(cards, "article", "entry-card").length,
        uniqueCardIDs: byId.size,
        sampleRowIds: parsedRows.slice(0,4).map(v=>attribute(openTag(v),"data-target")),
        sampleCardIds: [...byId.keys()].slice(0,4)
    }));
    const assigned = new Map();
    const lemmaInRow = row => {
        const cell = row.match(/<td\b[^>]*class="[^"]*\btable-lemma\b[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
        return normalize(cell ? textOnly(cell[1]) : "");
    };
    const lemmaInCard = card => {
        const heading = card.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
        return normalize(heading ? textOnly(heading[1]) : "");
    };
    for (const row of parsedRows) {
        const tag = openTag(row), target = attribute(tag, "data-target");
        const rowSource = attribute(tag, "data-source");
        const rowLemma = lemmaInRow(row);
        // Fragmentos técnicos do XML não possuem lema válido e não podem
        // aparecer na lista pública como verbetes autônomos.
        // Não inferir um lema com base na posição: possíveis continuações
        // de acepções serão reconciliadas separadamente, mediante cotejo.
        const explicitFragment = attribute(tag, "data-source-fragment") === "true";
        const placeholderLemma = /^⟦fragmento sem lema no xml\b[^⟧]*⟧$/iu.test(rowLemma);
        if (rowSource === "DGP" && (explicitFragment || placeholderLemma)) {
            const cells = Array.from(row.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi),
                match => match[1]);
            const alternatives = byId.get(target) || [];
            const article = alternatives.length ? alternatives[0] : "";
            quarantinedDgpFragments.push({
                target, origin, lemma: textOnly(cells[0] || "").trim(),
                definition: textOnly(cells[2] || "").trim(),
                cardDefinition: article ? fullText(article) : null,
                flag:explicitFragment, placeholder:placeholderLemma
            });
            continue;
        }
        const alternatives = byId.get(target) || [];
        let used = assigned.get(target);
        if (!used) assigned.set(target, used = new Set());
        // Casos de IDs repetidos: preferir o lema coincidente; ainda assim,
        // manter a ocorrência completa mesmo que o cabeçalho seja diferente.
        let chosen = alternatives.findIndex((card,i) =>
            !used.has(i) && rowLemma && lemmaInCard(card) === rowLemma);
        if (chosen < 0) chosen = alternatives.findIndex((card,i) => !used.has(i));
        if (chosen >= 0) used.add(chosen);
        let card = chosen >= 0 ? alternatives[chosen] : null;
        const dictionary = attribute(tag, "data-dictionary") || "grego";
        const source = attribute(tag, "data-source");
        if (!card) {
            // Alguns registros históricos têm linha mas nenhum cartão
            // correspondente. Conservar a glosa do índice e informar a lacuna,
            // sem reconstruir ou inventar o artigo da fonte.
            const cells = Array.from(row.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi), m => m[1]);
            const lemma = textOnly(cells[0] || "");
            const gloss = textOnly(cells[2] || "");
            const escape = v => String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
            card = '<article id="' + target + '" class="entry-card" data-dictionary="' +
                dictionary + '" data-source="' + source + '" hidden><header class="entry-header">' +
                '<div><h1 class="entry-title">' + escape(lemma) + '</h1></div>' +
                '<div class="source-tag">' + escape(source) + '</div></header>' +
                '<section class="entry-section"><div class="section-title">Informação disponível no índice</div>' +
                '<p class="entry-text">' + escape(gloss) + '</p>' +
                '<p>O artigo completo não foi encontrado na camada de apresentação publicada.</p>' +
                '</section></article>';
            collisions.push({target, kind:"card-absent", origin});
        }
        let rawSearch = attribute(tag, "data-search") || textOnly(row);
        // Inclui também o texto integral publicado nas seções dos verbetes,
        // sem alterar a redação de origem ou limitar a busca ao lema.
        const paragraphs = Array.from(card.matchAll(/<(?:p|div)\b[^>]*class="[^"]*\bentry-text\b[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/gi), m => m[1]);
        rawSearch += " " + paragraphs.map(textOnly).join(" ");
        records.push({target, dictionary, source, search: normalize(rawSearch), row, card});
    }
    if (records.length > 1000000) throw Error("Número anormal de linhas");
}
const records = [];
const collisions = [];
register(records, html, html, "index.html");
const sourceTerms = {};
for (const [key, source] of Object.entries(ctx.window.ScripturaLexicons || {})) {
    if (!source || !source.rowsHtml || !source.cardsHtml) continue;
    // Módulos históricos alternam entre cardsHtml e entriesHtml.
    // Tratar ambos como cartões publicados sem reescrever o corpus.
    register(records, source.rowsHtml,
        (source.cardsHtml || "") + "\n" + (source.entriesHtml || ""), key);
    if (Array.isArray(source.bibliographicTerms)) {
        const label = source.source || key;
        sourceTerms[label] ||= [];
        sourceTerms[label].push(...source.bibliographicTerms);
    }
}
// Os registros técnicos continuam integralmente nos módulos históricos.
const quarantinePath = "auditorias/dgp-fragmentos-sem-lema.json";
emit(quarantinePath, {
    source:"DGP", reason:"fragmento do XML sem lema atestado",
    count:quarantinedDgpFragments.length, records:quarantinedDgpFragments
});
console.log("DGP_FRAGMENT_QUARANTINE", JSON.stringify({
    count:quarantinedDgpFragments.length,
    origins:[...new Set(quarantinedDgpFragments.map(item => item.origin))].length,
    sample:quarantinedDgpFragments.slice(0,5).map(item=>({
        target:item.target, lemma:item.lemma, origin:item.origin
    }))
}));
// Deduplicação estritamente comprovável da APRESENTAÇÃO DGP (não da fonte).
// Alguns módulos históricos carregam duas vezes o mesmo ordinal com IDs
// técnicos formatados de modo distinto. Só retiramos do índice a segunda
// ocorrência se lema e texto integral da definição forem literalmente
// equivalentes após NFC e normalização dos espaços. Diferenças textuais,
// variantes e outros léxicos ficam preservados, para cotejo individual.
const canonicalNfcText = value => String(value || "").normalize("NFC")
    .replace(/\s+/gu, " ").trim();
function cardLemma(card) {
    const m = card.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
    return m ? canonicalNfcText(textOnly(m[1])) : "";
}
// Os 1000 primeiros artigos possuem cotejo documental individualizado com
// a transcrição do XML canônico. Essa evidência permite resolver somente
// variantes cuja redação coincide efetivamente com a fonte publicada.
const cotejoDgpEtapa1 = JSON.parse(fs.readFileSync(path.join(root,
    "auditorias/dgp-2026-10-14-cotejo-0001-1000.json"), "utf8"));
if (cotejoDgpEtapa1.source?.source_blob !==
        "eec318bb6150b6b2f4422ea4a76383ac0a254de2" ||
        cotejoDgpEtapa1.records?.length !== 1000) {
    throw Error("Cotejo canônico DGP 0001-1000 não está disponível/validado");
}
const dgpSourceText = new Map(cotejoDgpEtapa1.records.map(x=>
    [x.ordinal, x.definition_original_xml]));
const sourcePresentationText = value => canonicalNfcText(value)
    .replace(/\u00ad/gu, "").replace(/〈/gu, "〈").replace(/〉/gu, "〉");
function adoptSourceMatchedCard(primary, duplicate) {
    if (primary.target === duplicate.target) {
        primary.row = duplicate.row;
        primary.card = duplicate.card;
        return;
    }
    const oldRowId = 'data-target="' + duplicate.target + '"';
    const oldCardId = 'id="' + duplicate.target + '"';
    if (!duplicate.row.includes(oldRowId) || !duplicate.card.includes(oldCardId)) {
        throw Error("ID do DGP divergente da linha ou do cartão " + duplicate.target);
    }
    // Mantém o ID canônico de quatro dígitos e incorpora o texto efetivamente
    // atestado, sem tocar nos arquivos de fonte e sem inventar definição.
    primary.row = duplicate.row.replace(oldRowId,
        'data-target="' + primary.target + '"');
    primary.card = duplicate.card.replace(oldCardId,
        'id="' + primary.target + '"');
}

const canonicalByOrdinal = new Map();
const retainedRecords = [];
const filteredDuplicates = [];
const pendingDgpDifferences = [];
for (const record of records) {
    const match = record.source === "DGP" ?
        /^entry-dgp-(\d+)$/.exec(record.target) : null;
    if (!match) {
        retainedRecords.push(record);
        continue;
    }
    const ordinal = Number(match[1]);
    const primary = canonicalByOrdinal.get(ordinal);
    if (!primary) {
        canonicalByOrdinal.set(ordinal, record);
        retainedRecords.push(record);
        continue;
    }
    const lemmaA = cardLemma(primary.card);
    const lemmaB = cardLemma(record.card);
    const definitionA = canonicalNfcText(fullText(primary.card));
    const definitionB = canonicalNfcText(fullText(record.card));
    if (lemmaA && lemmaA === lemmaB && definitionA &&
            definitionA === definitionB) {
        // Indexação por todas as variantes documentadas, sem mexer nos artigos.
        if (record.search !== primary.search) {
            primary.search += " " + record.search;
        }
        filteredDuplicates.push({ordinal, target:record.target,
            keptTarget:primary.target, lemma:lemmaA});
        continue;
    }
    if (ordinal >= 1 && ordinal <= 1000 && lemmaA === lemmaB &&
            lemmaA && definitionA && definitionB) {
        const original = dgpSourceText.get(ordinal);
        const source = sourcePresentationText(original);
        const aMatches = source && sourcePresentationText(definitionA) === source;
        const bMatches = source && sourcePresentationText(definitionB) === source;
        if (aMatches || bMatches) {
            // Se apenas a segunda versão mantém a abreviatura original,
            // usa-se sua redação e conserva-se o identificador técnico estável.
            if (bMatches && !aMatches) adoptSourceMatchedCard(primary, record);
            if (record.search !== primary.search) {
                primary.search += " " + record.search;
            }
            filteredDuplicates.push({ordinal, target:record.target,
                keptTarget:primary.target, lemma:lemmaA,
                rule:"XML_DOCUMENTAL_VERIFICADO", selected:bMatches&&!aMatches?
                    "segunda_redacao_com_id_estavel":"primeira_redacao"});
            continue;
        }
    }
    pendingDgpDifferences.push({ordinal, firstTarget:primary.target,
        nextTarget:record.target, firstLemma:lemmaA, nextLemma:lemmaB,
        firstDefinition:definitionA.slice(0,160),
        nextDefinition:definitionB.slice(0,160)});
    retainedRecords.push(record);
}
records.length = 0;
for (const record of retainedRecords) records.push(record);
console.log("DGP_DEDUP_STRICT", JSON.stringify({
    inspectedFromModules:retainedRecords.length + filteredDuplicates.length,
    removedFromPresentationOnly:filteredDuplicates.length,
    textDifferencesPreserved:pendingDgpDifferences.length,
    sampleRemoved:filteredDuplicates.slice(0,6),
    samplePending:pendingDgpDifferences.slice(0,6)
}));

// THAYER_PUBLICATION_GATE — falhar fechado em caso de divergência editorial.
// Fontes históricas permanecem intactas. Somente artigos revisados e aprovados
// substituem seus correspondentes no índice público; nenhum substituto é inferido.
const thayerRestartDirectory = path.join(root, "lexicons/thayer-reinicio-2026-10-25");
const thayerRestartFiles = fs.readdirSync(thayerRestartDirectory)
    .filter(file => /^\d{4}-[a-z0-9-]+\.json$/i.test(file)).sort();
if (!thayerRestartFiles.length) throw Error("THAYER_PUBLICATION_GATE: nenhum verbete aprovado");
const textualNfc = value => String(value || "").normalize("NFC").replace(/\s+/gu, " ").trim();
function thayerPublishedLemmaKey(row) {
    const cell = row.match(/<td\b[^>]*class="[^"]*\btable-lemma\b[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
    return normalize(textOnly(cell ? cell[1] : "").split(",")[0].trim());
}
const historicalThayer = records.filter(record => record.source === "THAYER");
const historicalByTarget = new Map(historicalThayer.map(record => [record.target, record]));
const approvedByKey = new Map();
const approvedIds = new Set();
const supersededHistorical = new Map();
for (const filename of thayerRestartFiles) {
    const file = path.join(thayerRestartDirectory, filename);
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    const fileOrdinal = Number(filename.slice(0,4));
    const isApproved = data.publication?.approval === "approved_in_chat" &&
        data.publication?.requires_exact_card_match === true &&
        data.editorial_status?.startsWith("TRADUCAO_APROVADA_PELO_USUARIO");
    if (data.source !== "THAYER" || !isApproved ||
            !Number.isSafeInteger(data.ordinal) || data.ordinal !== fileOrdinal ||
            data.entry_id !== "entry-thayer-reinicio-" + filename.slice(0,4) ||
            !data.lemma_original || !data.card_title || !data.grammatical_class ||
            !data.render?.search_row_html || !data.render?.entry_card_html ||
            !Array.isArray(data.translation_portuguese_full) ||
            data.translation_portuguese_full.length === 0 ||
            data.translation_portuguese_full.some(p => !textualNfc(p)) ||
            !data.source_english_full || approvedIds.has(data.entry_id)) {
        throw Error("THAYER_PUBLICATION_GATE: verbete não aprovado/incompleto: " + filename);
    }
    const heading = data.render.entry_card_html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
    if (!heading || textualNfc(textOnly(heading[1])) !== textualNfc(data.card_title) ||
            (data.render.entry_card_html.match(/<h1\b/gi) || []).length !== 1) {
        throw Error("THAYER_PUBLICATION_GATE: cabeçalho diferente do aprovado: " + filename);
    }
    const paragraphs = Array.from(data.render.entry_card_html.matchAll(
        /<p\b[^>]*class="[^"]*\bentry-text\b[^"]*"[^>]*>([\s\S]*?)<\/p>/gi),
        match => textualNfc(textOnly(match[1])));
    const approvedParagraphs = data.translation_portuguese_full.map(textualNfc);
    if (paragraphs.length !== approvedParagraphs.length ||
            paragraphs.some((value,index) => value !== approvedParagraphs[index])) {
        throw Error("THAYER_PUBLICATION_GATE: corpo diverge da tradução integral: " + filename);
    }
    const subtitle = data.render.entry_card_html.match(/<div class="entry-meta">([\s\S]*?)<\/div>/i);
    if (!subtitle || !textualNfc(textOnly(subtitle[1])) ||
            /rein[ií]cio\s+20\d{2}/iu.test(subtitle[1]) ||
            /fonte fotogr[aá]fica|ocr auxiliar|texto auxiliar/iu.test(data.render.entry_card_html)) {
        throw Error("THAYER_PUBLICATION_GATE: metadados internos no cartão: " + filename);
    }
    // Evita repetir no início do artigo a classe gramatical já exibida no subtítulo.
    // Alusões semânticas legítimas posteriores (p. ex. "nome próprio" como acepção)
    // permanecem intactas; esta regra cobre somente a abertura do primeiro parágrafo.
    const introduction = paragraphs[0].slice(0,260);
    const duplicateGrammar = /(?:^|[),;]\s+)(?:nome próprio(?: masculino)?,?\s+indeclinável|indeclinável|adjetivo de duas terminações|forma aramaica de tratamento,?\s+indeclinável|letra grega;\s*elemento formativo)(?=\s|[,;.(]|$)/iu;
    const subtitleText = textualNfc(textOnly(subtitle[1])).toLocaleLowerCase("pt-BR");
    const introLower = introduction.toLocaleLowerCase("pt-BR");
    const exactSubtitleDup = introLower.startsWith(subtitleText + " ") ||
        introLower.startsWith(subtitleText + ",") ||
        introLower.includes("), " + subtitleText + " ");
    if (duplicateGrammar.test(introduction) || exactSubtitleDup) {
        throw Error("THAYER_PUBLICATION_GATE: classificação gramatical repetida no corpo: " + filename);
    }
    const key = normalize(data.lemma_original.split(",")[0].trim());
    const rowKey = thayerPublishedLemmaKey(data.render.search_row_html);
    if (!key || key !== rowKey || approvedByKey.has(key)) {
        throw Error("THAYER_PUBLICATION_GATE: lema divergente ou homógrafo sem revisão: " + filename);
    }
    // Permite, com declaração explícita e verificável, que hífens editoriais
    // no lema impresso não impeçam a correspondência com o índice histórico.
    // Nenhuma outra mudança ortográfica pode ser usada para suprimir artigo antigo.
    const legacyKey = data.publication?.legacy_lookup_lemma ?
        normalize(data.publication.legacy_lookup_lemma) : key;
    if (legacyKey !== key && legacyKey !== key.replace(/[-‐‑‒–]/gu, "")) {
        throw Error("THAYER_PUBLICATION_GATE: equivalência histórica não demonstrada: " + filename);
    }
    const expected = historicalThayer.filter(record =>
        thayerPublishedLemmaKey(record.row) === legacyKey).map(record => record.target).sort();
    const declared = data.publication?.supersedes_legacy_targets;
    if (!Array.isArray(declared) || new Set(declared).size !== declared.length ||
            declared.some(target => !/^entry-thayer-\d{4}$/.test(target)) ||
            JSON.stringify(declared.slice().sort()) !== JSON.stringify(expected)) {
        throw Error("THAYER_PUBLICATION_GATE: concorrência histórica não resolvida em " +
            filename + "; encontrados=" + JSON.stringify(expected) +
            "; declarados=" + JSON.stringify(declared));
    }
    for (const oldTarget of declared) {
        if (!historicalByTarget.has(oldTarget) || supersededHistorical.has(oldTarget)) {
            throw Error("THAYER_PUBLICATION_GATE: substituição inválida: " + oldTarget);
        }
        supersededHistorical.set(oldTarget,data.entry_id);
    }
    const beforeRegister = records.length;
    register(records,data.render.search_row_html,data.render.entry_card_html,
        "thayer-revisado/" + filename);
    if (records.length !== beforeRegister + 1 ||
            records[beforeRegister].target !== data.entry_id ||
            records[beforeRegister].source !== "THAYER") {
        throw Error("THAYER_PUBLICATION_GATE: linha e cartão desacoplados: " + filename);
    }
    approvedByKey.set(key,data.entry_id);
    approvedIds.add(data.entry_id);
}
// Garante que nenhuma versão histórica substituída permaneça na busca.
// Os arquivos originais e seus dados continuam guardados integralmente.
const published = records.filter(record => !supersededHistorical.has(record.target));
records.length = 0;
for (const record of published) records.push(record);
if (records.filter(record => approvedIds.has(record.target)).length !== approvedIds.size ||
        records.some(record => supersededHistorical.has(record.target))) {
    throw Error("THAYER_PUBLICATION_GATE: inconsistência no índice público");
}
const thayerPublicationGate = {
    approved: approvedIds.size,
    approvedIds: [...approvedIds].sort(),
    superseded: Object.fromEntries([...supersededHistorical].sort(([a],[b])=>a.localeCompare(b))),
    corpusPreserved: true
};
console.log("THAYER_PUBLICATION_GATE", JSON.stringify(thayerPublicationGate));

// Um ID histórico repetido não pode suprimir a segunda entrada.
// Cada resultado ganha um ID técnico numérico; o ID original permanece intacto.
const firstByTarget = new Map();
const duplicateSamples = [];
records.forEach((record, id) => {
    if (firstByTarget.has(record.target)) {
        collisions.push({target:record.target, kind:"search-row", origin:record.source});
        duplicateSamples.push({target:record.target, ids:[firstByTarget.get(record.target), id]});
    } else {
        firstByTarget.set(record.target, id);
    }
});
const collisionKinds = {};
const missingExamples = collisions.filter(x=>x.kind==="card-absent").slice(0,15);
console.log("MISSING_SAMPLES", JSON.stringify(missingExamples));
for (const item of collisions) collisionKinds[item.kind] = (collisionKinds[item.kind] || 0) + 1;
console.log("Diagnóstico das colisões:", JSON.stringify({
    total:collisions.length, byKind:collisionKinds, samples:collisions.slice(0,25)
}));
if (collisions.length > 5000) throw Error("Colisões/lacunas acima do limite esperado: " + collisions.length);
if (collisions.length) {
    console.warn("Colisões de ID do legado: " + collisions.length,
        JSON.stringify(collisions.slice(0,12)));
}
// A lista conserva somente o primeiro significado resumido; os cartões
// lexicográficos originais permanecem intactos em cards/.
function compactRow(record) {
    const cells = Array.from(record.row.matchAll(/<td\b[^>]*>[\s\S]*?<\/td>/gi), match => match[0]);
    if (cells.length < 4) throw Error("Linha sem quatro colunas: " + record.target);
    const raw = textOnly(cells[2]).replace(/\s+/gu, " ").trim();
    const lead = raw.split(/\s*[;|]\s*/u, 1)[0].trim() || raw;
    const limit = 118;
    let meaning = lead.length > limit ?
        lead.slice(0, limit + 1).replace(/\s+\S*$/u, "").trim() : lead;
    if (!meaning) meaning = raw.slice(0, limit);
    if (meaning.length < raw.length) meaning += "…";
    const escaped = meaning.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    const glossCell = cells[2].replace(/^(<td\b[^>]*>)[\s\S]*?(<\/td>)$/i,
        (_, opening, closing) => opening + escaped + closing);
    // data-search pode ter megabytes em linhas históricas; só pertence ao índice.
    const opening = openTag(record.row).replace(/\sdata-search=(["'])[\s\S]*?\1/i,"");
    return opening + cells[0] + cells[1] + glossCell + cells[3] + "</tr>";
}
const chunkSize = 128;
const lookupLargeSize = 2048;
const lookupLarge = [];
const lemmaPostings = new Map();
const runs = [];
const counts = {};
const samples = {};
const postings = new Map();
function postingKey(token) {
    let hash = 2166136261;
    for (const ch of token) {
        hash = Math.imul(hash ^ ch.codePointAt(0), 16777619);
    }
    return (hash >>> 0) % 256;
}
for (let offset = 0; offset < records.length; offset += chunkSize) {
    const current = records.slice(offset, offset + chunkSize);
    const meta = [], cards = [], lookup = [];
    for (let i = 0; i < current.length; i++) {
        const record = current[i], id = offset + i;
        counts[record.dictionary] ||= {};
        counts[record.dictionary][record.source] = (counts[record.dictionary][record.source] || 0) + 1;
        samples[record.dictionary] ||= {};
        if (!samples[record.dictionary][record.source]) {
            const lemmaMarkup = record.row.match(/<td\b[^>]*class="[^"]*\btable-lemma\b[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
            const lemma = lemmaMarkup ? textOnly(lemmaMarkup[1]).trim() : "";
            if (lemma && record.search.includes(normalize(lemma))) {
                samples[record.dictionary][record.source] = {target:record.target, lemma};
            }
        }
        const previousRun = runs.at(-1);
        if (previousRun && previousRun.dictionary === record.dictionary &&
                previousRun.source === record.source) previousRun.end = id + 1;
        else runs.push({start:id, end:id + 1, dictionary:record.dictionary, source:record.source});
        const lemmaCell = record.row.match(/<td\b[^>]*class="[^"]*\btable-lemma\b[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
        const lemma = normalize(lemmaCell ? textOnly(lemmaCell[1]) : "");
        // Formas equivalentes explícitas para pesquisa; a grafia do lema permanece intacta.
        const lemmaAlias = attribute(openTag(record.row), "data-lemma-alias")
            .split(";").map(normalize).filter(Boolean);
        const lemmaForms = [lemma, ...lemmaAlias];
        // Busca apenas com dados compactos. A definição permanece nas
        // partes do índice de verificação, jamais nas linhas HTML da página.
        const lookupRow = lemmaAlias.length ? [record.search, lemma, lemmaAlias] : [record.search, lemma];
        lookup.push(lookupRow);
        lookupLarge.push(lookupRow);
        // Ranking preservado para termos curtos, sem carregar 40 mil
        // definições nem os arquivos lookup. Apenas os lemas são indexados.
        const lemmaGrams = new Set();
        for (const form of lemmaForms) {
            const points = Array.from(form);
            for (let start = 0; start < points.length; start++) {
                for (let size = 1; size <= 3 && start + size <= points.length; size++) {
                    lemmaGrams.add(points.slice(start, start + size).join(""));
                }
            }
        }
        for (const gram of lemmaGrams) {
            let ranks = lemmaPostings.get(gram);
            if (!ranks) lemmaPostings.set(gram, ranks = [[],[],[]]);
            ranks[0].push(id);
            if (lemmaForms.some(form => form.startsWith(gram))) ranks[1].push(id);
            if (lemmaForms.includes(gram)) ranks[2].push(id);
        }
        if (lookupLarge.length === lookupLargeSize) {
            emit("lookup-large/" + String(Math.floor(id / lookupLargeSize)).padStart(4,"0") + ".json",
                lookupLarge);
            lookupLarge.length = 0;
        }
        meta.push({id, target:record.target, dictionary:record.dictionary,
            source:record.source, row:compactRow(record)});
        cards.push({id, target:record.target, html:record.card});
        // A mesma normalização do navegador; substrings de 1, 2 ou 3
        // caracteres Unicode (não apenas letras) para preservar busca integral.
        const points = Array.from(record.search);
        const grams = new Set();
        for (let j = 0; j < points.length; j++) {
            for (let n = 1; n <= 3 && j+n <= points.length; n++) {
                grams.add(points.slice(j,j+n).join(""));
            }
        }
        for (const gram of grams) {
            let list = postings.get(gram);
            if (!list) postings.set(gram, list = []);
            list.push(id);
        }
    }
    const block = String(offset / chunkSize).padStart(4, "0") + ".json";
    emit("lookup/" + block, lookup);
    emit("meta/" + block, meta);
    emit("cards/" + block, cards);
}
if (lookupLarge.length) {
    emit("lookup-large/" +
        String(Math.floor((records.length - 1) / lookupLargeSize)).padStart(4,"0") + ".json",
        lookupLarge);
}
const buckets = Array.from({length:256},()=>({__lemmaRank:{}}));
for (const [gram,list] of postings) {
    buckets[postingKey(gram)][gram] = list;
}
for (const [gram,ranked] of lemmaPostings) {
    buckets[postingKey(gram)].__lemmaRank[gram] = ranked;
}
for (let i = 0; i < buckets.length; i++) {
    emit("grams/" + String(i).padStart(3, "0") + ".json", buckets[i]);
}
emit("catalog.json", {
    version: 4, chunkSize, lookupLargeSize, total: records.length, counts, samples, runs, sourceTerms,
    thayerReviewed: thayerPublicationGate,
    quarantined:{DGP:quarantinedDgpFragments.length},
    duplicateSamples:duplicateSamples.slice(0,8)
});
console.log(JSON.stringify({status:"OK",modules:modules.length,
    records:records.length,collisions:collisions.length,byDictionary:counts,grams:postings.size,chunks:Math.ceil(records.length/chunkSize),lookupLargeChunks:Math.ceil(records.length/lookupLargeSize),quarantinedDgp:quarantinedDgpFragments.length}));
