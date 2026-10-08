"use strict";

/*
 * PEREIRA — Dicionário Grego-Português de Isidro Pereira.
 *
 * Branch de trabalho: chat-gpt-pereira
 *
 * Fonte exclusiva desta frente:
 * - interface pública: https://dicionariogrego.com/
 * - API pública usada pela aplicação web implantada:
 *   https://api.dicionariogrego.com/
 *
 * Regras operacionais:
 * - usar exclusivamente o conteúdo devolvido pelo site/API de dicionariogrego.com;
 * - inserir os verbetes na ordem devolvida pela fonte para a consulta da letra α;
 * - trabalhar de α até o último verbete iniciado por α;
 * - usar lotes de 20 registros lexicográficos, salvo o último lote da letra;
 * - não corrigir silenciosamente grafias, diacríticos, classificações,
 *   flexões, etimologias ou redação da fonte;
 * - não completar nem harmonizar o PEREIRA com BDAG, LEH, DGP ou outra fonte;
 * - commits ordinários desta frente alteram apenas os arquivos próprios do PEREIRA;
 * - a integração com index.html é feita separadamente para reduzir conflitos
 *   com as demais branches lexicográficas.
 *
 * Lote 001: 20 registros, Α, α → Ἀ-βασίλευτος, ον.
 * Lote 002: 20 registros, Ἀ-βάστακτος, ον → Ἄ-βολος, ον.
 * Lote 003: 20 registros, Ἀ-βόσκητος, ον → Ἁβρότης, ητός.
 * Lote 004: 50 registros, Ἁβρότιμος, ον → Ἀγαπητῶς.
 * Lote 005: 50 registros, Ἄγαρος, ον → Ἀ-γένητος, ον.
 * Lote 006: 50 registros, Ἀ-γέννεια → Ἄγκίστρον, ου.
 * Lote 007: 50 registros, Ἀγκιστρόω → Ἀ-γνοέω.
 * Lote 008: 50 registros, Ἀ-γνόημα, ατος → Ἄ-γραπτος, ον.
 * Lote 009: 50 registros, Ἀγρ-αυλέω → Ἀγχί-νοια, ας.
 */

window.ScripturaLexicons =
    window.ScripturaLexicons || {};

window.ScripturaLexicons.PEREIRA = {
    source: "PEREIRA",
    searchAnchorId: "pereira-search-anchor",
    entryAnchorId: "pereira-entry-anchor",

    bibliographicTerms: [
        { key: "v.", type: "abbr", text: "veja" },
        { key: "interj.", type: "abbr", text: "interjeição" },
        { key: "fut.", type: "abbr", text: "futuro" },
        { key: "aor.", type: "abbr", text: "aoristo" },
        { key: "pf.", type: "abbr", text: "perfeito" },
        { key: "act.", type: "abbr", text: "ativo" },
        { key: "méd.", type: "abbr", text: "médio; voz média" },
        { key: "tr.", type: "abbr", text: "transitivo" },
        { key: "intr.", type: "abbr", text: "intransitivo" },
        { key: "pass.", type: "abbr", text: "passivo; voz passiva" },
        { key: "fig.", type: "abbr", text: "figurado" },
        { key: "contr.", type: "abbr", text: "contraído" },
        { key: "pl.", type: "abbr", text: "plural" },
        { key: "aum.", type: "abbr", text: "aumentativo" },
        { key: "pres.", type: "abbr", text: "presente" },
        { key: "impf.", type: "abbr", text: "imperfeito" },
        { key: "med.", type: "abbr", text: "médio; voz média" },
        { key: "desus.", type: "abbr", text: "desusado" },
        { key: "ép.", type: "abbr", text: "épico" },
        { key: "subst.", type: "abbr", text: "substantivo; substantivado" }
    ],

    rowsHtml: String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0001" data-source="PEREIRA" data-search="Α, α α alfa; primeira letra do alfabeto grego PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Α, α</td>
    <td>—</td>
    <td>alfa; primeira letra do alfabeto grego</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0002" data-source="PEREIRA" data-search="Ἀ- α prefixo privativo; copulativo; aumentativo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-</td>
    <td>—</td>
    <td>prefixo privativo; copulativo; aumentativo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0003" data-source="PEREIRA" data-search="Α α ah!; ai! PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Α</td>
    <td>—</td>
    <td>ah!; ai!</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0004" data-source="PEREIRA" data-search="Ἅ α ah!; oh! PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἅ</td>
    <td>—</td>
    <td>ah!; oh!</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0005" data-source="PEREIRA" data-search="Ἀ-άατος, ον ααατος inviolável; invencível PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-άατος, ον</td>
    <td>Adjetivo</td>
    <td>inviolável; invencível</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0006" data-source="PEREIRA" data-search="Ἀ-αγής, ές ααγης sólido; inquebrável PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-αγής, ές</td>
    <td>Adjetivo</td>
    <td>sólido; inquebrável</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0007" data-source="PEREIRA" data-search="ΑἈνα-τρέχω αανατρεχω correr para cima; lançar-se; crescer com força; retroceder PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">ΑἈνα-τρέχω</td>
    <td>Verbo</td>
    <td>correr para cima; lançar-se; crescer com força; retroceder</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0008" data-source="PEREIRA" data-search="Ἄ-απτος, ον ααπτος intangível; temível PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-απτος, ον</td>
    <td>Adjetivo</td>
    <td>intangível; temível</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0009" data-source="PEREIRA" data-search="Ἀ-άπτω ααπτω juntar; colar; suspender PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-άπτω</td>
    <td>Verbo</td>
    <td>juntar; colar; suspender</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0010" data-source="PEREIRA" data-search="Ἀ-άσχετος, ον αασχετος v. ἄσχετος PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-άσχετος, ον</td>
    <td>—</td>
    <td>v. ἄσχετος</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0011" data-source="PEREIRA" data-search="Ἄ-ατος, ον αατος insanciável de PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-ατος, ον</td>
    <td>Adjetivo</td>
    <td>insanciável de</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0012" data-source="PEREIRA" data-search="Ἀάω ααω transtornar o juízo; enlouquecer; enganar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀάω</td>
    <td>Verbo</td>
    <td>transtornar o juízo; enlouquecer; enganar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0013" data-source="PEREIRA" data-search="Ἀ-βακέω αβακεω desconhecer; ignorar; não reconhecer PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βακέω</td>
    <td>—</td>
    <td>desconhecer; ignorar; não reconhecer</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0014" data-source="PEREIRA" data-search="Ἀβάκιον, ου αβακιον tabuleta; tabuleiro de damas PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀβάκιον, ου</td>
    <td>Substantivo neutro</td>
    <td>tabuleta; tabuleiro de damas</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0015" data-source="PEREIRA" data-search="Ἀ-βάκχευτος, ον αβακχευτος não inspirado de Baco; privado do furor báquico PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βάκχευτος, ον</td>
    <td>Adjetivo</td>
    <td>não inspirado de Baco; privado do furor báquico</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0016" data-source="PEREIRA" data-search="Ἄβαξ, κος αβαξ ábaco; prancha; placa; mesa PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄβαξ, κος</td>
    <td>Substantivo masculino</td>
    <td>ábaco; prancha; placa; mesa</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0017" data-source="PEREIRA" data-search="Ἀ-βάπτιστος, ον αβαπτιστος insubmergível PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βάπτιστος, ον</td>
    <td>Adjetivo</td>
    <td>insubmergível</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0018" data-source="PEREIRA" data-search="Ἀ-βαρής, ές αβαρης que não pesa; que não molesta PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βαρής, ές</td>
    <td>Adjetivo</td>
    <td>que não pesa; que não molesta</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0019" data-source="PEREIRA" data-search="Ἀ-βασάνιστος, ον αβασανιστος não provado; não examinado; não investigado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βασάνιστος, ον</td>
    <td>Adjetivo</td>
    <td>não provado; não examinado; não investigado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0020" data-source="PEREIRA" data-search="Ἀ-βασίλευτος, ον αβασιλευτος sem rei; independente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βασίλευτος, ον</td>
    <td>Adjetivo</td>
    <td>sem rei; independente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0021" data-source="PEREIRA" data-search="Ἀ-βάστακτος, ον αβαστακτος que não se pode transportar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βάστακτος, ον</td>
    <td>Adjetivo</td>
    <td>que não se pode transportar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0022" data-source="PEREIRA" data-search="Ἄ-βατος, η, ον, ou ἄβατος, ον αβατος inacessível; sagrado; que impede a marcha PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-βατος, η, ον, ou ἄβατος, ον</td>
    <td>Adjetivo</td>
    <td>inacessível; sagrado; que impede a marcha</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0023" data-source="PEREIRA" data-search="Ἀ-βαφής, ές αβαφης não tingido PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βαφής, ές</td>
    <td>Adjetivo</td>
    <td>não tingido</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0024" data-source="PEREIRA" data-search="Ἄβδηρα, ων αβδηρα Abdera, cidade da Trácia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄβδηρα, ων</td>
    <td>Substantivo neutro</td>
    <td>Abdera, cidade da Trácia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0025" data-source="PEREIRA" data-search="Ἀ-βέβαιος, ον αβεβαιος inconstante; instável; sem firmeza PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βέβαιος, ον</td>
    <td>Adjetivo</td>
    <td>inconstante; instável; sem firmeza</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0026" data-source="PEREIRA" data-search="Ἀ-βέβηλος, ον αβεβηλος inviolável; sagrado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βέβηλος, ον</td>
    <td>Adjetivo</td>
    <td>inviolável; sagrado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0027" data-source="PEREIRA" data-search="Ἀ-βελτερία, ας αβελτερια simpleza PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βελτερία, ας</td>
    <td>Substantivo feminino</td>
    <td>simpleza</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0028" data-source="PEREIRA" data-search="Ἀ-βέλτερος, α, ον αβελτερος simples; imbecil; néscio PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βέλτερος, α, ον</td>
    <td>Adjetivo</td>
    <td>simples; imbecil; néscio</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0029" data-source="PEREIRA" data-search="Ἀ-βίαστος, ον αβιαστος não forçado; espontâneo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βίαστος, ον</td>
    <td>Adjetivo</td>
    <td>não forçado; espontâneo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0030" data-source="PEREIRA" data-search="Ἄ-βιος, ον αβιος pobre; sem meios de vida PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-βιος, ον</td>
    <td>Adjetivo</td>
    <td>pobre; sem meios de vida</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0031" data-source="PEREIRA" data-search="Ἀ-βίοτος, ον αβιοτος que não se pode viver; insuportável PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βίοτος, ον</td>
    <td>Adjetivo</td>
    <td>que não se pode viver; insuportável</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0032" data-source="PEREIRA" data-search="Ἀ-βίωτος, ον αβιωτος que não se pode viver; insuportável PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βίωτος, ον</td>
    <td>Adjetivo</td>
    <td>que não se pode viver; insuportável</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0033" data-source="PEREIRA" data-search="Ἀ-βλάβεια, ας αβλαβεια inocuidade; tranquilidade; ausência de perigo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βλάβεια, ας</td>
    <td>Substantivo feminino</td>
    <td>inocuidade; tranquilidade; ausência de perigo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0034" data-source="PEREIRA" data-search="Ἀ-βλαβής, ές αβλαβης inofensivo; que previne o perigo; ileso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βλαβής, ές</td>
    <td>Adjetivo</td>
    <td>inofensivo; que previne o perigo; ileso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0035" data-source="PEREIRA" data-search="Ἀ-βλής, ῆτος αβλης não lançado; não arrojado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βλής, ῆτος</td>
    <td>Adjetivo</td>
    <td>não lançado; não arrojado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0036" data-source="PEREIRA" data-search="Ἄ-βλητος, ον αβλητος não ferido; ileso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-βλητος, ον</td>
    <td>Adjetivo</td>
    <td>não ferido; ileso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0037" data-source="PEREIRA" data-search="Ἀ-βληχρός, ά, όν αβληχρος fraco; sem defesa PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βληχρός, ά, όν</td>
    <td>Adjetivo</td>
    <td>fraco; sem defesa</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0038" data-source="PEREIRA" data-search="Ἀ-βοατί αβοατι sem ser chamado a gritos; espontânecamente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βοατί</td>
    <td>Adverbio</td>
    <td>sem ser chamado a gritos; espontânecamente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0039" data-source="PEREIRA" data-search="Ἀ-βοήθητος, ον αβοηθητος sem socorro possível; incurável; sem pecursos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βοήθητος, ον</td>
    <td>Adjetivo</td>
    <td>sem socorro possível; incurável; sem pecursos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0040" data-source="PEREIRA" data-search="Ἄ-βολος, ον αβολος cavalo novo que não perdeu os primeiros dentes PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-βολος, ον</td>
    <td>Adjetivo</td>
    <td>cavalo novo que não perdeu os primeiros dentes</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0041" data-source="PEREIRA" data-search="Ἀ-βόσκητος, ον αβοσκητος onde não pastam os rebanhos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βόσκητος, ον</td>
    <td>Adjetivo</td>
    <td>onde não pastam os rebanhos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0042" data-source="PEREIRA" data-search="Ἀ-βουκόλητος, ον αβουκολητος descuidado; não atendido PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βουκόλητος, ον</td>
    <td>Adjetivo</td>
    <td>descuidado; não atendido</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0043" data-source="PEREIRA" data-search="Ἀ-βουλέω αβουλεω não querer PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βουλέω</td>
    <td>—</td>
    <td>não querer</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0044" data-source="PEREIRA" data-search="Ἀ-βουλία, ας αβουλια irreílexão; imprudência PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βουλία, ας</td>
    <td>Substantivo feminino</td>
    <td>irreílexão; imprudência</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0045" data-source="PEREIRA" data-search="Ἄ-βουλος, ον αβουλος irreflectido; imprudente; indiferente; hostil PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-βουλος, ον</td>
    <td>Adjetivo</td>
    <td>irreflectido; imprudente; indiferente; hostil</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0046" data-source="PEREIRA" data-search="Ἀβραδάτιας, α αβραδατιας Abradata PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀβραδάτιας, α</td>
    <td>Substantivo masculino</td>
    <td>Abradata</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0047" data-source="PEREIRA" data-search="Ἄ-βρεκτος, ον αβρεκτος não molhado; seco PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-βρεκτος, ον</td>
    <td>Adjetivo</td>
    <td>não molhado; seco</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0048" data-source="PEREIRA" data-search="Ἀ-βριθής, ἐς αβριθης que não pesa; leve PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βριθής, ἐς</td>
    <td>Adjetivo</td>
    <td>que não pesa; leve</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0049" data-source="PEREIRA" data-search="Ἁβρο-βάτης, ου αβροβατης de andar efeminado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρο-βάτης, ου</td>
    <td>Adjetivo</td>
    <td>de andar efeminado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0050" data-source="PEREIRA" data-search="Ἁβρό-βιος, ον αβροβιος de vida mole; efeminado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρό-βιος, ον</td>
    <td>Adjetivo</td>
    <td>de vida mole; efeminado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0051" data-source="PEREIRA" data-search="Ἁβρό-γοος, ον αβρογοος de chorar efeminado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρό-γοος, ον</td>
    <td>Adjetivo</td>
    <td>de chorar efeminado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0052" data-source="PEREIRA" data-search="Ἁβρο-δίαιτος, ον αβροδιαιτος que vive efeminadamente; vida mole PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρο-δίαιτος, ον</td>
    <td>Adjetivo</td>
    <td>que vive efeminadamente; vida mole</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0053" data-source="PEREIRA" data-search="Ἁβρο-κόμης, ου αβροκομης de cabeleira efeminada; folhagem luxuriante PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρο-κόμης, ου</td>
    <td>Adjetivo</td>
    <td>de cabeleira efeminada; folhagem luxuriante</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0054" data-source="PEREIRA" data-search="Ἄ-βρομος, ον αβρομος bramante; estrepitoso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-βρομος, ον</td>
    <td>Adjetivo</td>
    <td>bramante; estrepitoso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0055" data-source="PEREIRA" data-search="Ἁβρο-πενθής, ές αβροπενθης que se queixa de modo efeminado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρο-πενθής, ές</td>
    <td>Adjetivo</td>
    <td>que se queixa de modo efeminado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0056" data-source="PEREIRA" data-search="Ἁβρό-πλουτος, ον αβροπλουτος opulento; luxuriante; exuberante PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρό-πλουτος, ον</td>
    <td>Adjetivo</td>
    <td>opulento; luxuriante; exuberante</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0057" data-source="PEREIRA" data-search="Ἁβρός, ά, όν αβρος delicado; terno; efeminado; mole PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρός, ά, όν</td>
    <td>Adjetivo</td>
    <td>delicado; terno; efeminado; mole</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0058" data-source="PEREIRA" data-search="Ἁβροσύνη αβροσυνη v. Ἁβρότης PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβροσύνη</td>
    <td>Substantivo feminino</td>
    <td>v. Ἁβρότης</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0059" data-source="PEREIRA" data-search="Ἁβροτάζω αβροταζω perder-se; extraviar-se PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβροτάζω</td>
    <td>Substantivo feminino</td>
    <td>perder-se; extraviar-se</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0060" data-source="PEREIRA" data-search="Ἁβρότης, ητός αβροτης felicidade; pros peridade; magnificência; elegância PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρότης, ητός</td>
    <td>Substantivo feminino</td>
    <td>felicidade; pros peridade; magnificência; elegância</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0061" data-source="PEREIRA" data-search="Ἁβρότιμος, ον αβροτιμος sumptuoso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρότιμος, ον</td>
    <td>Adjetivo</td>
    <td>sumptuoso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0062" data-source="PEREIRA" data-search="Ἄ-βροτος, ον, ou η, ον αβροτος imortal; divino; deserto; sem homens PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-βροτος, ον, ou η, ον</td>
    <td>Adjetivo</td>
    <td>imortal; divino; deserto; sem homens</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0063" data-source="PEREIRA" data-search="Ἁβρο-χαίτης, ου αβροχαιτης de cabeleira efeminada PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρο-χαίτης, ου</td>
    <td>Adjetivo</td>
    <td>de cabeleira efeminada</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0064" data-source="PEREIRA" data-search="Ἄβρο-χίτων, νος αβροχιτων de vestidos ricos e efeminados PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄβρο-χίτων, νος</td>
    <td>Adjetivo</td>
    <td>de vestidos ricos e efeminados</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0065" data-source="PEREIRA" data-search="Ἁβροχος, ον αβροχος não molhado; sem água de chuva; seco PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβροχος, ον</td>
    <td>Adjetivo</td>
    <td>não molhado; sem água de chuva; seco</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0066" data-source="PEREIRA" data-search="Ἁβρύνω αβρυνω adornar com cuidado; pavonear-se; orgulhar-se PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁβρύνω</td>
    <td>Verbo</td>
    <td>adornar com cuidado; pavonear-se; orgulhar-se</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0067" data-source="PEREIRA" data-search="Ἄβυδος, ου αβυδος Abido; cidade de Tróade; cidade do Egipto PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄβυδος, ου</td>
    <td>Substantivo feminino</td>
    <td>Abido; cidade de Tróade; cidade do Egipto</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0068" data-source="PEREIRA" data-search="Ἄ-βυσσος, ον αβυσσος sem tundo; muito profundo; imenso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-βυσσος, ον</td>
    <td>Adjetivo</td>
    <td>sem tundo; muito profundo; imenso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0069" data-source="PEREIRA" data-search="Ἄγαάσμα, ατος αγαασμα objecto de veneração PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγαάσμα, ατος</td>
    <td>Substantivo neutro</td>
    <td>objecto de veneração</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0070" data-source="PEREIRA" data-search="Ἀγαβάτανα, ων αγαβατανα pl. Ἀγβάτανα, ων PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαβάτανα, ων</td>
    <td>Substantivo neutro</td>
    <td>pl. Ἀγβάτανα, ων</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0071" data-source="PEREIRA" data-search="Ἀγάζω αγαζω suportar com diticuldade; honrar; venerar; admirar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγάζω</td>
    <td>Verbo</td>
    <td>suportar com diticuldade; honrar; venerar; admirar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0072" data-source="PEREIRA" data-search="Ἀγαθο-ειδής, ές αγαθοειδης que tem aparência de bem PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαθο-ειδής, ές</td>
    <td>Adjetivo</td>
    <td>que tem aparência de bem</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0073" data-source="PEREIRA" data-search="Ἀγαθο-εργία, ας αγαθοεργια benefício PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαθο-εργία, ας</td>
    <td>Substantivo feminino</td>
    <td>benefício</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0074" data-source="PEREIRA" data-search="Ἀγαθο-εργός αγαθοεργος que pratica boas acções; nome de veteranos espartanos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαθο-εργός</td>
    <td>Adjetivo</td>
    <td>que pratica boas acções; nome de veteranos espartanos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0075" data-source="PEREIRA" data-search="Ἀγαθο-ποιός, όν αγαθοποιος enfeitor PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαθο-ποιός, όν</td>
    <td>Adjetivo</td>
    <td>enfeitor</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0076" data-source="PEREIRA" data-search="Ἀγαθός, ή, όν αγαθος bom; nobre; valente; favorável; próspero; bem; bens PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαθός, ή, όν</td>
    <td>Adjetivo</td>
    <td>bom; nobre; valente; favorável; próspero; bem; bens</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0077" data-source="PEREIRA" data-search="Ἀγαίομαι αγαιομαι indignar-se; irritar-se PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαίομαι</td>
    <td>Verbo</td>
    <td>indignar-se; irritar-se</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0078" data-source="PEREIRA" data-search="Ἀγα-κλεής, ές αγακλεης muito ilustre PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγα-κλεής, ές</td>
    <td>Adjetivo</td>
    <td>muito ilustre</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0079" data-source="PEREIRA" data-search="Ἀγα-κλειτός, ή, όν αγακλειτος muito ilustre; magnífico; preclaro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγα-κλειτός, ή, όν</td>
    <td>—</td>
    <td>muito ilustre; magnífico; preclaro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0080" data-source="PEREIRA" data-search="Ἀγα-κλυτός, ή, όν αγακλυτος muito ilustre PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγα-κλυτός, ή, όν</td>
    <td>Adjetivo</td>
    <td>muito ilustre</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0081" data-source="PEREIRA" data-search="Ἀγα-κτίμενος, η, ον αγακτιμενος bem edificado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγα-κτίμενος, η, ον</td>
    <td>Adjetivo</td>
    <td>bem edificado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0082" data-source="PEREIRA" data-search="Ἀ-γάλακτος, ον αγαλακτος destetado; sem leite; impróprio para dar leite PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γάλακτος, ον</td>
    <td>Adjetivo</td>
    <td>destetado; sem leite; impróprio para dar leite</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0083" data-source="PEREIRA" data-search="Ἀγάλλω αγαλλω adornar; honrar; enaltecer; gloriar-se PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγάλλω</td>
    <td>Verbo</td>
    <td>adornar; honrar; enaltecer; gloriar-se</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0084" data-source="PEREIRA" data-search="Ἄγαλμα, ατος αγαλμα objecto de adorno; oferta; imagem; estátua; monumento PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγαλμα, ατος</td>
    <td>Substantivo feminino</td>
    <td>objecto de adorno; oferta; imagem; estátua; monumento</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0085" data-source="PEREIRA" data-search="Ἀγαλματο-ποιός, ου αγαλματοποιος escultor PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαλματο-ποιός, ου</td>
    <td>Substantivo masculino</td>
    <td>escultor</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0086" data-source="PEREIRA" data-search="Ἅγαμαι αγαμαι admirar; invejar; irritar-se; zangar-se PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἅγαμαι</td>
    <td>Verbo</td>
    <td>admirar; invejar; irritar-se; zangar-se</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0087" data-source="PEREIRA" data-search="Ἀγαμέμνων, ονος αγαμεμνων Agaménon PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαμέμνων, ονος</td>
    <td>Substantivo masculino</td>
    <td>Agaménon</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0088" data-source="PEREIRA" data-search="Ἀγαμένως αγαμενως com assombro; com admiração PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαμένως</td>
    <td>Adverbio</td>
    <td>com assombro; com admiração</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0089" data-source="PEREIRA" data-search="Ἀ-γαμία, ας αγαμια celibato PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γαμία, ας</td>
    <td>Substantivo feminino</td>
    <td>celibato</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0090" data-source="PEREIRA" data-search="Ἄ-γαμος, ον αγαμος solteiro; matrimónio infeliz PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γαμος, ον</td>
    <td>Adjetivo</td>
    <td>solteiro; matrimónio infeliz</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0091" data-source="PEREIRA" data-search="Ἄγαν αγαν muito; completamente; demasiado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγαν</td>
    <td>Adverbio</td>
    <td>muito; completamente; demasiado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0092" data-source="PEREIRA" data-search="Ἀγαν-ακτέω αγανακτεω agitar-se; indignar-se; irritar-se PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαν-ακτέω</td>
    <td>Verbo</td>
    <td>agitar-se; indignar-se; irritar-se</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0093" data-source="PEREIRA" data-search="Ἀγαν-άκτησις, εως αγανακτησις desgosto; indignação; irritação PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαν-άκτησις, εως</td>
    <td>Substantivo feminino</td>
    <td>desgosto; indignação; irritação</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0094" data-source="PEREIRA" data-search="Ἀγαν-ακτητικός, ή, όν αγανακτητικος irritável; apaixonado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαν-ακτητικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>irritável; apaixonado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0095" data-source="PEREIRA" data-search="Ἀγανακτητός, ή, όν αγανακτητος que desperta indignação; mal comportado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγανακτητός, ή, όν</td>
    <td>Adjetivo</td>
    <td>que desperta indignação; mal comportado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0096" data-source="PEREIRA" data-search="Ἀγάν-νιφος, ον αγαννιφος coberto de abundante neve PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγάν-νιφος, ον</td>
    <td>Adjetivo</td>
    <td>coberto de abundante neve</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0097" data-source="PEREIRA" data-search="Ἀγανόρειος, ον αγανορειος v. ἀγήνωρ PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγανόρειος, ον</td>
    <td>Adjetivo</td>
    <td>v. ἀγήνωρ</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0098" data-source="PEREIRA" data-search="Ἀγανός, ή, όν αγανος amável; doce PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγανός, ή, όν</td>
    <td>Adjetivo</td>
    <td>amável; doce</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0099" data-source="PEREIRA" data-search="Ἀγανο-φροσύνη αγανοφροσυνη amabilidade; doçura; gentileza PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγανο-φροσύνη</td>
    <td>Substantivo feminino</td>
    <td>amabilidade; doçura; gentileza</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0100" data-source="PEREIRA" data-search="Ἀγανό-φρων, ον αγανοφρων amável; doce PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγανό-φρων, ον</td>
    <td>Adjetivo</td>
    <td>amável; doce</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0101" data-source="PEREIRA" data-search="Ἀγάνωρ, ος αγανωρ v. Ἀγανό-φρων PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγάνωρ, ος</td>
    <td>Adjetivo</td>
    <td>v. Ἀγανό-φρων</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0102" data-source="PEREIRA" data-search="Ἀγάομαι αγαομαι admirar; maravilhar-se; ter inveja PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγάομαι</td>
    <td>Verbo</td>
    <td>admirar; maravilhar-se; ter inveja</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0103" data-source="PEREIRA" data-search="Ἀγαπάζω αγαπαζω v. Ἀγαπάω PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαπάζω</td>
    <td>Verbo</td>
    <td>v. Ἀγαπάω</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0104" data-source="PEREIRA" data-search="Ἀγαπάω αγαπαω receber com amor; amar; querer; preferir PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαπάω</td>
    <td>Verbo</td>
    <td>receber com amor; amar; querer; preferir</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0105" data-source="PEREIRA" data-search="*Ἀγάπη, ης αγαπη afeição; amor fraternal; ágapes PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἀγάπη, ης</td>
    <td>Substantivo feminino</td>
    <td>afeição; amor fraternal; ágapes</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0106" data-source="PEREIRA" data-search="Ἀγαπ-ήνωρ, ορος αγαπηνωρ viril; corajoso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαπ-ήνωρ, ορος</td>
    <td>Adjetivo</td>
    <td>viril; corajoso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0107" data-source="PEREIRA" data-search="Ἀγάπησις, εως αγαπησις amor; afecto PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγάπησις, εως</td>
    <td>Substantivo feminino</td>
    <td>amor; afecto</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0108" data-source="PEREIRA" data-search="Ἀγαπητικός, ή, όν αγαπητικος afectuoso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαπητικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>afectuoso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0109" data-source="PEREIRA" data-search="Ἀγαπητός, ή, όν αγαπητος amado; querido; desejado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαπητός, ή, όν</td>
    <td>Adjetivo</td>
    <td>amado; querido; desejado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0110" data-source="PEREIRA" data-search="Ἀγαπητῶς αγαπητως de maneira a estar satisfeito PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαπητῶς</td>
    <td>Adverbio</td>
    <td>de maneira a estar satisfeito</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0111" data-source="PEREIRA" data-search="Ἄγαρος, ον αγαρος  disposto de distância em distância; ἄγγαρον πῦρ, fogueiras postas de distância em distância PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγαρος, ον</td>
    <td>Adjetivo</td>
    <td>disposto de distância em distância; ἄγγαρον πῦρ, fogueiras postas de distância em distância</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0112" data-source="PEREIRA" data-search="Ἀγά-ρροος, οον αγαρροος  de corrente abundante, impetuosa/(contr. ους, ουν) PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγά-ρροος, οον</td>
    <td>Adjetivo</td>
    <td>de corrente abundante, impetuosa/(contr. ους, ουν)</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0113" data-source="PEREIRA" data-search="Ἀγά-στονος, ον αγαστονος  que geme fortemente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγά-στονος, ον</td>
    <td>Adjetivo</td>
    <td>que geme fortemente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0114" data-source="PEREIRA" data-search="Ἀγαστός, ή, όν αγαστος  digno de admiração, invejável PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαστός, ή, όν</td>
    <td>Adjetivo</td>
    <td>digno de admiração, invejável</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0115" data-source="PEREIRA" data-search="Ἀγαυός, ή, όν αγαυος  maravilhoso, admirável || ilustre, nobre PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαυός, ή, όν</td>
    <td>Adjetivo</td>
    <td>maravilhoso, admirável; ilustre, nobre</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0116" data-source="PEREIRA" data-search="Ἀγαυρός, ά, όν αγαυρος  esplêndido, soberbo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγαυρός, ά, όν</td>
    <td>Adjetivo</td>
    <td>esplêndido, soberbo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0117" data-source="PEREIRA" data-search="*Ἀγαυρῶς αγαυρως  orgulhosamente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἀγαυρῶς</td>
    <td>Adverbio</td>
    <td>orgulhosamente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0118" data-source="PEREIRA" data-search="Ἀγά-φθεγκτος, ον αγαφθεγκτος  que ressoa muito PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγά-φθεγκτος, ον</td>
    <td>Adjetivo</td>
    <td>que ressoa muito</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0119" data-source="PEREIRA" data-search="Ἀγάω αγαω  ver. ἄγαμαι admirar-(se) | invejar.  PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγάω</td>
    <td>—</td>
    <td>ver. ἄγαμαι admirar-(se); invejar.</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0120" data-source="PEREIRA" data-search="Ἀγγαρεία, ας αγγαρεια  serviço de tran porte PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγαρεία, ας</td>
    <td>Substantivo feminino</td>
    <td>serviço de tran porte</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0121" data-source="PEREIRA" data-search="Ἀγγαρεύω αγγαρευω constranger PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγαρεύω</td>
    <td>Verbo</td>
    <td>constranger</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0122" data-source="PEREIRA" data-search="Ἀγγαρήϊον, ου αγγαρηιον  serviço de correios a cavalo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγαρήϊον, ου</td>
    <td>Substantivo neutro</td>
    <td>serviço de correios a cavalo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0123" data-source="PEREIRA" data-search="Ἀγγαρήϊος, ου αγγαρηιος  correio persa PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγαρήϊος, ου</td>
    <td>Substantivo masculino</td>
    <td>correio persa</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0124" data-source="PEREIRA" data-search="Ἀγγεῖον, ου αγγειον  vaso, recipiente | veia || invólucro, cápsula PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγεῖον, ου</td>
    <td>Substantivo neutro</td>
    <td>vaso, recipiente; veia; invólucro, cápsula</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0125" data-source="PEREIRA" data-search="Ἀγγειώδης, ες αγγειωδης  em forma de vaso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγειώδης, ες</td>
    <td>Adjetivo</td>
    <td>em forma de vaso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0126" data-source="PEREIRA" data-search="Ἀγγελία, ας αγγελια  notícia, anúncio, mensagem || ordem, mandato PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγελία, ας</td>
    <td>Substantivo feminino</td>
    <td>notícia, anúncio, mensagem; ordem, mandato</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0127" data-source="PEREIRA" data-search="Ἀγγελια-φόρος, ου αγγελιαφορος  mensageiro | oficial às ordens na corte da Pérsia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγελια-φόρος, ου</td>
    <td>Substantivo masculino</td>
    <td>mensageiro; oficial às ordens na corte da Pérsia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0128" data-source="PEREIRA" data-search="Ἀγγελίη, ης αγγελιη v. ἀγγελία PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγελίη, ης</td>
    <td>Substantivo feminino</td>
    <td>v. ἀγγελία</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0129" data-source="PEREIRA" data-search="Ἀγγελίης, ου αγγελιης  mensageiro, legado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγελίης, ου</td>
    <td>Substantivo masculino</td>
    <td>mensageiro, legado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0130" data-source="PEREIRA" data-search="Ἀγγελικός, ή, όν αγγελικος  do mensageiro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγελικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>do mensageiro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0131" data-source="PEREIRA" data-search="Ἀγγέλλω αγγελλω levar uma mensagem, anunciar, proclamar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγέλλω</td>
    <td>Verbo</td>
    <td>levar uma mensagem, anunciar, proclamar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0132" data-source="PEREIRA" data-search="Ἄγγελμα, ατος αγγελμα  mensagem, anúncio, notícia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγγελμα, ατος</td>
    <td>Substantivo neutro</td>
    <td>mensagem, anúncio, notícia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0133" data-source="PEREIRA" data-search="*Ἀγγελο-ειδής, ές αγγελοειδης  semelhante aos anjos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἀγγελο-ειδής, ές</td>
    <td>Adjetivo</td>
    <td>semelhante aos anjos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0134" data-source="PEREIRA" data-search="Ἄγγελος, ου αγγελος  mensageiro, legado || mensageiro de Deus, anjo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγγελος, ου</td>
    <td>Substantivo masculino</td>
    <td>mensageiro, legado; mensageiro de Deus, anjo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0135" data-source="PEREIRA" data-search="Ἀγγι μαχητής, οῦ αγγι μαχητης v. ἀγχέμαχος PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγι μαχητής, οῦ</td>
    <td>Substantivo masculino</td>
    <td>v. ἀγχέμαχος</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0136" data-source="PEREIRA" data-search="Ἄγγος, ους αγγος  | vaso, recipiente || urna funerária | canastra onde se colocavam as crianças expostas | guarda-roupa PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγγος, ους</td>
    <td>Substantivo neutro</td>
    <td>; vaso, recipiente; urna funerária; canastra onde se colocavam as crianças expostas; guarda-roupa</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0137" data-source="PEREIRA" data-search="Ἀγγούριον, ου αγγουριον  pepino PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγγούριον, ου</td>
    <td>Substantivo neutro</td>
    <td>pepino</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0138" data-source="PEREIRA" data-search="Ἄγγουρον, ου αγγουρον  pepino PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγγουρον, ου</td>
    <td>Substantivo neutro</td>
    <td>pepino</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0139" data-source="PEREIRA" data-search="Ἄγε, ἄγετε αγε interj. eia! vamos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγε, ἄγετε</td>
    <td>—</td>
    <td>interj. eia! vamos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0140" data-source="PEREIRA" data-search="Ἀγείρω αγειρω reunir, recolher, fazer provisão de || buscar, pedir, mendigar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγείρω</td>
    <td>Verbo</td>
    <td>reunir, recolher, fazer provisão de; buscar, pedir, mendigar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0141" data-source="PEREIRA" data-search="Ἀ-γείτων, ον αγειτων  sem vizinho, solitário/(gen. ονος) PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γείτων, ον</td>
    <td>Adjetivo</td>
    <td>sem vizinho, solitário/(gen. ονος)</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0142" data-source="PEREIRA" data-search="Ἀγελαιο-κομική, ῆς αγελαιοκομικη  arte de cuidar os rebanhos/(sub. τέχνη) PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγελαιο-κομική, ῆς</td>
    <td>Substantivo feminino</td>
    <td>arte de cuidar os rebanhos/(sub. τέχνη)</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0143" data-source="PEREIRA" data-search="Ἀγελαῖος, α, ον αγελαιος  que forma um rebanho || que pasta em plena campina || reunido em rebanho. II fig. comum, vulgar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγελαῖος, α, ον</td>
    <td>Adjetivo</td>
    <td>que forma um rebanho; que pasta em plena campina; reunido em rebanho. II fig. comum, vulgar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0144" data-source="PEREIRA" data-search="Ἀγελαιο-τροφία, ας αγελαιοτροφια  criação de rebarhos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγελαιο-τροφία, ας</td>
    <td>Substantivo feminino</td>
    <td>criação de rebarhos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0145" data-source="PEREIRA" data-search="Ἀγελαιο-τροφική, ῆς αγελαιοτροφικη  arte de criar os rebanhos/(sub. τέχνη) PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγελαιο-τροφική, ῆς</td>
    <td>Substantivo feminino</td>
    <td>arte de criar os rebanhos/(sub. τέχνη)</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0146" data-source="PEREIRA" data-search="Ἀγελ-αρχέω αγελαρχεω guiar um rebanho PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγελ-αρχέω</td>
    <td>—</td>
    <td>guiar um rebanho</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0147" data-source="PEREIRA" data-search="Ἀγελ-άρχης, ου αγελαρχης  condutor de rebanhos, pastor PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγελ-άρχης, ου</td>
    <td>Substantivo masculino</td>
    <td>condutor de rebanhos, pastor</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0148" data-source="PEREIRA" data-search="Ἀ-γελαστί αγελαστι  com seriedade, sem risos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γελαστί</td>
    <td>Adverbio</td>
    <td>com seriedade, sem risos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0149" data-source="PEREIRA" data-search="Ἀ-γέλαστος, ον αγελαστος  triste, sombrio, que não se ri | funesto PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γέλαστος, ον</td>
    <td>Adjetivo</td>
    <td>triste, sombrio, que não se ri; funesto</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0150" data-source="PEREIRA" data-search="Ἀγελείη, ης αγελειη  um dos epítetos de Minerva | que leva despojos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγελείη, ης</td>
    <td>Substantivo feminino</td>
    <td>um dos epítetos de Minerva; que leva despojos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0151" data-source="PEREIRA" data-search="Ἀγέλη, ης αγελη  rebanho, multidão | no pl. secções em que se dividiam os jovens de Creta desde os 17 anos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγέλη, ης</td>
    <td>Substantivo feminino</td>
    <td>rebanho, multidão; no pl. secções em que se dividiam os jovens de Creta desde os 17 anos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0152" data-source="PEREIRA" data-search="Ἀγεληδόν αγεληδον  em rebanho, em multidão PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγεληδόν</td>
    <td>Adverbio</td>
    <td>em rebanho, em multidão</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0153" data-source="PEREIRA" data-search="Ἀ-γελοίως αγελοιως  sem riso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γελοίως</td>
    <td>Adverbio</td>
    <td>sem riso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0154" data-source="PEREIRA" data-search="Ἀγεμονεύω αγεμονευω  v. ἡγεμονεύω PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγεμονεύω</td>
    <td>—</td>
    <td>v. ἡγεμονεύω</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0155" data-source="PEREIRA" data-search="*Ἀ-γενεαλόγησος, ον αγενεαλογησος  sem genealogia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἀ-γενεαλόγησος, ον</td>
    <td>Adjetivo</td>
    <td>sem genealogia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0156" data-source="PEREIRA" data-search="Ἀ-γένεια, ας αγενεια  nascimento obscuro | baixeza de sentimentos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γένεια, ας</td>
    <td>Substantivo feminino</td>
    <td>nascimento obscuro; baixeza de sentimentos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0157" data-source="PEREIRA" data-search="Ἀ-γένειος, ον αγενειος  imberbe || juvenil PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γένειος, ον</td>
    <td>Adjetivo</td>
    <td>imberbe; juvenil</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0158" data-source="PEREIRA" data-search="Ἀ-γενής, ές αγενης  não nascido, não criado || de nascimento obscuro | sem descendência PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γενής, ές</td>
    <td>Adjetivo</td>
    <td>não nascido, não criado; de nascimento obscuro; sem descendência</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0159" data-source="PEREIRA" data-search="Ἀ-γενής, ές αγενης  de origem humilde | vulgar, vil PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γενής, ές</td>
    <td>Adjetivo</td>
    <td>de origem humilde; vulgar, vil</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0160" data-source="PEREIRA" data-search="Ἀ-γένητος, ον αγενητος  sem nascimento, sem origem || que não existiu, não realizado || que não pode existir, irrealizável PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γένητος, ον</td>
    <td>Adjetivo</td>
    <td>sem nascimento, sem origem; que não existiu, não realizado; que não pode existir, irrealizável</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0161" data-source="PEREIRA" data-search="Ἀ-γέννεια αγεννεια  v. ἀ-γένεια PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γέννεια</td>
    <td>—</td>
    <td>v. ἀ-γένεια</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0162" data-source="PEREIRA" data-search="Ἀ-γεννησία, ας αγεννησια  o facto de não ter sido gerado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γεννησία, ας</td>
    <td>Substantivo feminino</td>
    <td>o facto de não ter sido gerado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0163" data-source="PEREIRA" data-search="Ἀ-γέννητος, ον αγεννητος  I pass. | não gerado, não criado || de baixo ou vergonhoso nascimento. II act. que não gera, estéril PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γέννητος, ον</td>
    <td>Adjetivo</td>
    <td>I pass.; não gerado, não criado; de baixo ou vergonhoso nascimento. II act. que não gera, estéril</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0164" data-source="PEREIRA" data-search="Ἀ-γεννῶς αγεννως  desleixadamente, vergonhosamente; οὐκ ἀγεννῶς, nobremente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γεννῶς</td>
    <td>Adverbio</td>
    <td>desleixadamente, vergonhosamente; οὐκ ἀγεννῶς, nobremente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0165" data-source="PEREIRA" data-search="Ἀ-γέραστος, ον αγεραστος  não premiado, não recompensado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γέραστος, ον</td>
    <td>Adjetivo</td>
    <td>não premiado, não recompensado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0166" data-source="PEREIRA" data-search="Ἀγερμός, ου αγερμος  colecta, busca || concentração de um exército PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγερμός, ου</td>
    <td>Substantivo masculino</td>
    <td>colecta, busca; concentração de um exército</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0167" data-source="PEREIRA" data-search="Ἄγερσις, εως αγερσις  reunião, assembleia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγερσις, εως</td>
    <td>Substantivo feminino</td>
    <td>reunião, assembleia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0168" data-source="PEREIRA" data-search="Ἀγεσίλας e Ἀγησίλαος, ου αγεσιλας e αγησιλαος  Agesilau rei de Esparta (397-360 a. J.C.) PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγεσίλας e Ἀγησίλαος, ου</td>
    <td>Substantivo masculino</td>
    <td>Agesilau rei de Esparta (397-360 a. J.C.)</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0169" data-source="PEREIRA" data-search="Ἀγέ-στρατος, ον αγεστρατος  que conduz ou arrasta um exército PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγέ-στρατος, ον</td>
    <td>Adjetivo</td>
    <td>que conduz ou arrasta um exército</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0170" data-source="PEREIRA" data-search="Ἄ-γευστος, ον αγευστος  não gostado, não provado || o que não provou, ou não gosta de || que está em jejum PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γευστος, ον</td>
    <td>Adjetivo</td>
    <td>não gostado, não provado; o que não provou, ou não gosta de; que está em jejum</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0171" data-source="PEREIRA" data-search="Ἀ-γεωμέτρητος, ον αγεωμετρητος  que não sabe geometria || ageométrico PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γεωμέτρητος, ον</td>
    <td>Adjetivo</td>
    <td>que não sabe geometria; ageométrico</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0172" data-source="PEREIRA" data-search="Ἀ-γεωργησία ας αγεωργησια ας  falto de cultivo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γεωργησία ας</td>
    <td>Substantivo feminino</td>
    <td>falto de cultivo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0173" data-source="PEREIRA" data-search="Ἀγέωχος, ον αγεωχος  altivo, nobre | arrogante, altaneiro, insolente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγέωχος, ον</td>
    <td>Adjetivo</td>
    <td>altivo, nobre; arrogante, altaneiro, insolente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0174" data-source="PEREIRA" data-search="Ἀγή, ῆς αγη  fragmento, rotura PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγή, ῆς</td>
    <td>Substantivo feminino</td>
    <td>fragmento, rotura</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0175" data-source="PEREIRA" data-search="Ἄγη, ης αγη  admiração, assombro || inveja, ciúme PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγη, ης</td>
    <td>Substantivo feminino</td>
    <td>admiração, assombro; inveja, ciúme</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0176" data-source="PEREIRA" data-search="Ἀγηλατέω αγηλατεω repelir como um objecto impuro, exilar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγηλατέω</td>
    <td>—</td>
    <td>repelir como um objecto impuro, exilar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0177" data-source="PEREIRA" data-search="Ἀγήλατος, ον αγηλατος  que purifica PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγήλατος, ον</td>
    <td>Adjetivo</td>
    <td>que purifica</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0178" data-source="PEREIRA" data-search="Ἄγημα, ατος αγημα  corpo de exército lacedemónio || guarda real macedónica PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγημα, ατος</td>
    <td>Substantivo neutro</td>
    <td>corpo de exército lacedemónio; guarda real macedónica</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0179" data-source="PEREIRA" data-search="Ἀγηνόρειος, α, ον αγηνορειος  v. ἀγήυωρ PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγηνόρειος, α, ον</td>
    <td>Adjetivo</td>
    <td>v. ἀγήυωρ</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0180" data-source="PEREIRA" data-search="Ἀγηνορία, ας αγηνορια  valor, heroismo || altivez, orgulho PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγηνορία, ας</td>
    <td>Substantivo feminino</td>
    <td>valor, heroismo; altivez, orgulho</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0181" data-source="PEREIRA" data-search="Ἀγήνωρ, ορος αγηνωρ  viril, corajoso, heróico || arrogante PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγήνωρ, ορος</td>
    <td>Adjetivo</td>
    <td>viril, corajoso, heróico; arrogante</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0182" data-source="PEREIRA" data-search="Ἀγήραντος, ον αγηραντος  v. Ἀ-γήραος PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγήραντος, ον</td>
    <td>Adjetivo</td>
    <td>v. Ἀ-γήραος</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0183" data-source="PEREIRA" data-search="Ἀ-γήραος, ον αγηραος  que não envelhece || imperecedouro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γήραος, ον</td>
    <td>Adjetivo</td>
    <td>que não envelhece; imperecedouro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0184" data-source="PEREIRA" data-search="Ἀ-γήρατος, ον αγηρατος  que não envelhece, imperecedouro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γήρατος, ον</td>
    <td>Adjetivo</td>
    <td>que não envelhece, imperecedouro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0185" data-source="PEREIRA" data-search="Ἀγησί-λαος, ον αγησιλαος  condutor do povo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγησί-λαος, ον</td>
    <td>Adjetivo</td>
    <td>condutor do povo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0186" data-source="PEREIRA" data-search="Ἀγησί-χορος, ον αγησιχορος  o que dirige o coro ou a dança PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγησί-χορος, ον</td>
    <td>Adjetivo</td>
    <td>o que dirige o coro ou a dança</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0187" data-source="PEREIRA" data-search="Ἀγητός, ή, όν αγητος  admirável PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγητός, ή, όν</td>
    <td>Adjetivo</td>
    <td>admirável</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0188" data-source="PEREIRA" data-search="*Ἁγιάζω αγιαζω santlificar, consagrar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἁγιάζω</td>
    <td>Verbo</td>
    <td>santlificar, consagrar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0189" data-source="PEREIRA" data-search="*Ἁγίασμα, ατος αγιασμα  coisa sagrada | lugar santo || santuário | tabernáculo do templo de Jerusalém | santidade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἁγίασμα, ατος</td>
    <td>Substantivo neutro</td>
    <td>coisa sagrada; lugar santo; santuário; tabernáculo do templo de Jerusalém; santidade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0190" data-source="PEREIRA" data-search="*Ἁγιασμός, οῦ αγιασμος  santificação, consagração PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἁγιασμός, οῦ</td>
    <td>Substantivo masculino</td>
    <td>santificação, consagração</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0191" data-source="PEREIRA" data-search="*Ἁγιαστήριον, ου αγιαστηριον  santuário PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἁγιαστήριον, ου</td>
    <td>Substantivo neutro</td>
    <td>santuário</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0192" data-source="PEREIRA" data-search="Ἁγίζω αγιζω consagrar, oferecer em sacrifício PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγίζω</td>
    <td>Verbo</td>
    <td>consagrar, oferecer em sacrifício</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0193" data-source="PEREIRA" data-search="Ἀγινέω αγινεω conduzir, levar || fazer transportar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγινέω</td>
    <td>Verbo</td>
    <td>conduzir, levar; fazer transportar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0194" data-source="PEREIRA" data-search="Ἅγιος, α, ον αγιος  santo, augusto, puro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἅγιος, α, ον</td>
    <td>Adjetivo</td>
    <td>santo, augusto, puro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0195" data-source="PEREIRA" data-search="*Ἁγιότης, ητος αγιοτης  santidade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἁγιότης, ητος</td>
    <td>Substantivo feminino</td>
    <td>santidade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0196" data-source="PEREIRA" data-search="Ἆγις, ιδος αγις  Ágis, nome de muitos reis de Esparta, dos quais o mais famoso foi Ágis III que reinou de 244 a 235 antes de Cristo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἆγις, ιδος</td>
    <td>Substantivo masculino</td>
    <td>Ágis, nome de muitos reis de Esparta, dos quais o mais famoso foi Ágis III que reinou de 244 a 235 antes de Cristo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0197" data-source="PEREIRA" data-search="Ἁγιστεία, ας αγιστεια  cerimónia sagrada, culto, devoção PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγιστεία, ας</td>
    <td>Substantivo feminino</td>
    <td>cerimónia sagrada, culto, devoção</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0198" data-source="PEREIRA" data-search="Ἁγιστεύω αγιστευω cumprir um dever religioso | purificar | viver castamente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγιστεύω</td>
    <td>Verbo</td>
    <td>cumprir um dever religioso; purificar; viver castamente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0199" data-source="PEREIRA" data-search="*Ἁγιωσύνη, ης αγιωσυνη  santidade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἁγιωσύνη, ης</td>
    <td>Substantivo feminino</td>
    <td>santidade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0200" data-source="PEREIRA" data-search="Ἀγκάζομαι αγκαζομαι tomar ou levantar nos seus braços PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκάζομαι</td>
    <td>Verbo</td>
    <td>tomar ou levantar nos seus braços</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0201" data-source="PEREIRA" data-search="Ἄγκαθεν αγκαθεν  apoiando-se nos cotovelos || tomando nos seus braços PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγκαθεν</td>
    <td>Adverbio</td>
    <td>apoiando-se nos cotovelos; tomando nos seus braços</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0202" data-source="PEREIRA" data-search="Ἀγκάλη, ης αγκαλη  braço recurvado, cotovelo || tudo o que envolve, abraça aperta, πετραία ἀγκάλη, gruta PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκάλη, ης</td>
    <td>Substantivo feminino</td>
    <td>braço recurvado, cotovelo; tudo o que envolve, abraça aperta, πετραία ἀγκάλη, gruta</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0203" data-source="PEREIRA" data-search="Ἀγκαλίζομαι αγκαλιζομαι abraçar ser abraçado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκαλίζομαι</td>
    <td>Verbo</td>
    <td>abraçar ser abraçado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0204" data-source="PEREIRA" data-search="Ἀγκαλίς, ίδος αγκαλις  braço recurvado, cotovelo | braçada PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκαλίς, ίδος</td>
    <td>Substantivo feminino</td>
    <td>braço recurvado, cotovelo; braçada</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0205" data-source="PEREIRA" data-search="Ἀγκάς αγκας  em braços PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκάς</td>
    <td>Adverbio</td>
    <td>em braços</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0206" data-source="PEREIRA" data-search="Ἀγκιστρεία, ας αγκιστρεια  pesca ao anzol PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκιστρεία, ας</td>
    <td>Substantivo feminino</td>
    <td>pesca ao anzol</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0207" data-source="PEREIRA" data-search="Ἀγκιστρευτικός, ή, όν αγκιστρευτικος  que diz respeito à pesca ao anzol PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκιστρευτικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>que diz respeito à pesca ao anzol</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0208" data-source="PEREIRA" data-search="Ἀγκιστρεύω αγκιστρευω pescar ao anzol PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκιστρεύω</td>
    <td>—</td>
    <td>pescar ao anzol</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0209" data-source="PEREIRA" data-search="Ἀγκιστρο-ειδής, ές αγκιστροειδης  em forma de anzol PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκιστρο-ειδής, ές</td>
    <td>Adjetivo</td>
    <td>em forma de anzol</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0210" data-source="PEREIRA" data-search="Ἄγκίστρον, ου αγκιστρον  gancho do anzol, anzol | gancho do fuso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγκίστρον, ου</td>
    <td>Substantivo neutro</td>
    <td>gancho do anzol, anzol; gancho do fuso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0211" data-source="PEREIRA" data-search="Ἀγκιστρόω αγκιστροω recurvar em forma de anzol | apanhar ao anzol PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκιστρόω</td>
    <td>—</td>
    <td>recurvar em forma de anzol; apanhar ao anzol</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0212" data-source="PEREIRA" data-search="Ἀγκκών, ῶνος αγκκων  cotovelo, braço | curva, ângulo, sinuosidade | articulação | garganta, desfiladeiro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκκών, ῶνος</td>
    <td>Substantivo masculino</td>
    <td>cotovelo, braço; curva, ângulo, sinuosidade; articulação; garganta, desfiladeiro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0213" data-source="PEREIRA" data-search="Ἄγκοινα, ης αγκοινα  v. ἀγκάλη PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγκοινα, ης</td>
    <td>Substantivo feminino</td>
    <td>v. ἀγκάλη</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0214" data-source="PEREIRA" data-search="Ἀγκος, ους αγκος  vale PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκος, ους</td>
    <td>Substantivo neutro</td>
    <td>vale</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0215" data-source="PEREIRA" data-search="Ἄγκύλη, ης αγκυλη  aderência, correia para lançar o dardo || dardo || corda de arco || cabo, amarra de navio || gancho na extremidade de uma cadeia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγκύλη, ης</td>
    <td>Substantivo feminino</td>
    <td>aderência, correia para lançar o dardo; dardo; corda de arco; cabo, amarra de navio; gancho na extremidade de uma cadeia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0216" data-source="PEREIRA" data-search="Ἀγκυλητός, ή, όν αγκυλητος  que se lança como um dardo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκυλητός, ή, όν</td>
    <td>Adjetivo</td>
    <td>que se lança como um dardo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0217" data-source="PEREIRA" data-search="Ἀγκύλιον, ου αγκυλιον  escudo sagrado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκύλιον, ου</td>
    <td>Substantivo neutro</td>
    <td>escudo sagrado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0218" data-source="PEREIRA" data-search="Ἀγκυλο-μήτης, ου αγκυλομητης  astuto, manhoso, de intenções ocultas PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκυλο-μήτης, ου</td>
    <td>Substantivo masculino e feminino</td>
    <td>astuto, manhoso, de intenções ocultas</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0219" data-source="PEREIRA" data-search="Ἀγκυλό-πους, ουν αγκυλοπους  de pés retorcidos/(gen. ποδος ) PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκυλό-πους, ουν</td>
    <td>Adjetivo</td>
    <td>de pés retorcidos/(gen. ποδος )</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0220" data-source="PEREIRA" data-search="Ἀγκύλος, η, ον αγκυλος  dobrado, recurvado, retorcido | embrulhado | astuto PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκύλος, η, ον</td>
    <td>Adjetivo</td>
    <td>dobrado, recurvado, retorcido; embrulhado; astuto</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0221" data-source="PEREIRA" data-search="Ἀγκυλό-τοξος, ον αγκυλοτοξος  de arco recurvado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκυλό-τοξος, ον</td>
    <td>Adjetivo</td>
    <td>de arco recurvado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0222" data-source="PEREIRA" data-search="Ἀγκυλο-χείλης, ου αγκυλοχειλης  de bico recurvado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκυλο-χείλης, ου</td>
    <td>Adjetivo</td>
    <td>de bico recurvado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0223" data-source="PEREIRA" data-search="Ἀγκυλόω αγκυλοω dobrar, recurvar; ἠγκυλωμένος ὄνυχας, de unhas aduncas PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκυλόω</td>
    <td>—</td>
    <td>dobrar, recurvar; ἠγκυλωμένος ὄνυχας, de unhas aduncas</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0224" data-source="PEREIRA" data-search="Ἀγκυλωτός, ή, όν αγκυλωτος  lançado por uma correia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκυλωτός, ή, όν</td>
    <td>Adjetivo</td>
    <td>lançado por uma correia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0225" data-source="PEREIRA" data-search="Ἀγκυρουχία αγκυρουχια  ancoragem de um navio PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγκυρουχία</td>
    <td>Substantivo feminino</td>
    <td>ancoragem de um navio</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0226" data-source="PEREIRA" data-search="Ἄγκυύυρα, ας αγκυυυρα  s. f âncora; ἄγκυραν βάλλεσθαι, καθιέναι, μεθέναι, lançar âncora; ἀνασπᾶν, αἴρεσθαι, levantar âncora. PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγκυύυρα, ας</td>
    <td>—</td>
    <td>s. f âncora; ἄγκυραν βάλλεσθαι, καθιέναι, μεθέναι, lançar âncora; ἀνασπᾶν, αἴρεσθαι, levantar âncora.</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0227" data-source="PEREIRA" data-search="Ἀγλα-έθειρος, ον αγλαεθειρος  de brilhante cabeleira PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλα-έθειρος, ον</td>
    <td>Adjetivo</td>
    <td>de brilhante cabeleira</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0228" data-source="PEREIRA" data-search="Ἀγλάϊα, ας αγλαια  brilho, beleza, adorno orgulho, vaidade || triunfo, gozo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλάϊα, ας</td>
    <td>Substantivo feminino</td>
    <td>brilho, beleza, adorno orgulho, vaidade; triunfo, gozo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0229" data-source="PEREIRA" data-search="Ἀγλαΐζω αγλαιζω adornar, lustrar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαΐζω</td>
    <td>Verbo</td>
    <td>adornar, lustrar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0230" data-source="PEREIRA" data-search="Ἀγλάϊσμα, ατος αγλαισμα  brilho, beleza, adorno PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλάϊσμα, ατος</td>
    <td>Substantivo neutro</td>
    <td>brilho, beleza, adorno</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0231" data-source="PEREIRA" data-search="Ἀγλαϊστός, οῦ αγλαιστος  adorno, esplendor PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαϊστός, οῦ</td>
    <td>Substantivo masculino</td>
    <td>adorno, esplendor</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0232" data-source="PEREIRA" data-search="Ἀγλαό-γυιος, ον αγλαογυιος  de belos membros PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαό-γυιος, ον</td>
    <td>Adjetivo</td>
    <td>de belos membros</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0233" data-source="PEREIRA" data-search="Ἀγλαό-δενδρος, ον αγλαοδενδρος  plantado de belas árvores PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαό-δενδρος, ον</td>
    <td>Adjetivo</td>
    <td>plantado de belas árvores</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0234" data-source="PEREIRA" data-search="Ἀγλαό-δωρος, ον αγλαοδωρος que dá bons presentes PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαό-δωρος, ον</td>
    <td>—</td>
    <td>que dá bons presentes</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0235" data-source="PEREIRA" data-search="Ἀγλαό-θρονος, ον αγλαοθρονος  em magnífico trono PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαό-θρονος, ον</td>
    <td>Adjetivo</td>
    <td>em magnífico trono</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0236" data-source="PEREIRA" data-search="Ἀγλαό-καρπος, ον αγλαοκαρπος  de esplêndidos frutos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαό-καρπος, ον</td>
    <td>Adjetivo</td>
    <td>de esplêndidos frutos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0237" data-source="PEREIRA" data-search="Ἀγλαό-κολπος, ον αγλαοκολπος  de belos seios PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαό-κολπος, ον</td>
    <td>Adjetivo</td>
    <td>de belos seios</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0238" data-source="PEREIRA" data-search="Ἀγλαό-κουρος, ον αγλαοκουρος  de brilhante juventude PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαό-κουρος, ον</td>
    <td>Adjetivo</td>
    <td>de brilhante juventude</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0239" data-source="PEREIRA" data-search="Ἀγλαό-κωμος, ον αγλαοκωμος que tem a alegria ou o brilho de festa PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαό-κωμος, ον</td>
    <td>—</td>
    <td>que tem a alegria ou o brilho de festa</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0240" data-source="PEREIRA" data-search="Ἀγλαός, ή, όν αγλαος  brilhante, esplêndido | nobre, ilustre PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαός, ή, όν</td>
    <td>Adjetivo</td>
    <td>brilhante, esplêndido; nobre, ilustre</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0241" data-source="PEREIRA" data-search="Ἀγλαο-τριαίνας, ου αγλαοτριαινας  de brilhante tridente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλαο-τριαίνας, ου</td>
    <td>Adjetivo</td>
    <td>de brilhante tridente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0242" data-source="PEREIRA" data-search="Ἀγλα-ώψ, ῶπος αγλαωψ  de olhos brilhantes || de aspecto formoso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγλα-ώψ, ῶπος</td>
    <td>Substantivo masculino e feminino</td>
    <td>de olhos brilhantes; de aspecto formoso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0243" data-source="PEREIRA" data-search="Ἀ-γλευκής, ές αγλευκης  amargo, acre PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γλευκής, ές</td>
    <td>Adjetivo</td>
    <td>amargo, acre</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0244" data-source="PEREIRA" data-search="Ἀ-γλωσσία, ας αγλωσσια  falha de eloguência PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γλωσσία, ας</td>
    <td>Substantivo feminino</td>
    <td>falha de eloguência</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0245" data-source="PEREIRA" data-search="Ἀ-γλωσσος, ον αγλωσσος  sem língua | impedido de falar, mudo || que fala uma linguagem bárbara, difícil de entender PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γλωσσος, ον</td>
    <td>Adjetivo</td>
    <td>sem língua; impedido de falar, mudo; que fala uma linguagem bárbara, difícil de entender</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0246" data-source="PEREIRA" data-search="Ἄγμα, ατος αγμα  fragmento PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγμα, ατος</td>
    <td>Substantivo neutro</td>
    <td>fragmento</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0247" data-source="PEREIRA" data-search="Ἀγμός, οῦ αγμος  fractura | lugar escarpado, abrupto PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγμός, οῦ</td>
    <td>Substantivo masculino</td>
    <td>fractura; lugar escarpado, abrupto</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0248" data-source="PEREIRA" data-search="Ἄ-γναμπτος, ον αγναμπτος  inflexível PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γναμπτος, ον</td>
    <td>Adjetivo</td>
    <td>inflexível</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0249" data-source="PEREIRA" data-search="Ἄ-γναπτος, ον αγναπτος  não pisado, não cardado || novo |não purificado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γναπτος, ον</td>
    <td>Adjetivo</td>
    <td>não pisado, não cardado; novo; não purificado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0250" data-source="PEREIRA" data-search="*Ἄγναφος, ον αγναφος v. Ἄ-γναπτος PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἄγναφος, ον</td>
    <td>—</td>
    <td>v. Ἄ-γναπτος</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0251" data-source="PEREIRA" data-search="Ἁγνεία, ας αγνεια  pureza, castidade || purificação, consagração PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγνεία, ας</td>
    <td>Substantivo feminino</td>
    <td>pureza, castidade; purificação, consagração</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0252" data-source="PEREIRA" data-search="Ἅγνευμα, ατος αγνευμα  castidade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἅγνευμα, ατος</td>
    <td>Substantivo neutro</td>
    <td>castidade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0253" data-source="PEREIRA" data-search="*Ἅγνευτήριον, ου αγνευτηριον  lugar de purificação PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἅγνευτήριον, ου</td>
    <td>Substantivo neutro</td>
    <td>lugar de purificação</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0254" data-source="PEREIRA" data-search="Ἁγνευτικός, ή, όν αγνευτικος  que conserva à castidade | próprio para purificar; τὸ ἁγνευτικόν, sacrifício expiatório, purificação PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγνευτικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>que conserva à castidade; próprio para purificar; τὸ ἁγνευτικόν, sacrifício expiatório, purificação</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0255" data-source="PEREIRA" data-search="Ἁγνεύω αγνευω ser puro, conservar-se puro | com inf. olhar como dever sagrado | purificar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγνεύω</td>
    <td>—</td>
    <td>ser puro, conservar-se puro; com inf. olhar como dever sagrado; purificar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0256" data-source="PEREIRA" data-search="Ἁγνίζω αγνιζω purificar, lavar, expiar | consagrar, santificar || oferecer um sacrifício por um morto PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγνίζω</td>
    <td>—</td>
    <td>purificar, lavar, expiar; consagrar, santificar; oferecer um sacrifício por um morto</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0257" data-source="PEREIRA" data-search="Ἅγνισμα, ατος αγνισμα  vitima expiatória PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἅγνισμα, ατος</td>
    <td>Substantivo neutro</td>
    <td>vitima expiatória</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0258" data-source="PEREIRA" data-search="Ἁγνισμός, οῦ αγνισμος  purificação PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγνισμός, οῦ</td>
    <td>Substantivo masculino</td>
    <td>purificação</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0259" data-source="PEREIRA" data-search="Ἁγνίτης, ου αγνιτης  que purifica PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγνίτης, ου</td>
    <td>Adjetivo</td>
    <td>que purifica</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0260" data-source="PEREIRA" data-search="Ἀ-γνοέω αγνοεω desconhecer, ignorar | não conhecer || enganar-se, equivocar-se PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνοέω</td>
    <td>Verbo</td>
    <td>desconhecer, ignorar; não conhecer; enganar-se, equivocar-se</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0261" data-source="PEREIRA" data-search="Ἀ-γνόημα, ατος αγνοημα  ignorância | falta cometida por ignorância PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνόημα, ατος</td>
    <td>Substantivo neutro</td>
    <td>ignorância; falta cometida por ignorância</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0262" data-source="PEREIRA" data-search="Ἀ-γνοητικός, ή, όν αγνοητικος  que provém da ignorância PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνοητικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>que provém da ignorância</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0263" data-source="PEREIRA" data-search="Ἄ-γνοια, ας αγνοια  ignorância | descuido, erro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γνοια, ας</td>
    <td>Substantivo feminino</td>
    <td>ignorância; descuido, erro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0264" data-source="PEREIRA" data-search="Ἀγνοιέω αγνοιεω  v. ἀγνοέω PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγνοιέω</td>
    <td>—</td>
    <td>v. ἀγνοέω</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0265" data-source="PEREIRA" data-search="Ἀ-γνοούντως αγνοουντως  por ignorância PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνοούντως</td>
    <td>Adverbio</td>
    <td>por ignorância</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0266" data-source="PEREIRA" data-search="Ἁγνό-ρυτος, ον αγνορυτος  de corrente transparente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγνό-ρυτος, ον</td>
    <td>Adjetivo</td>
    <td>de corrente transparente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0267" data-source="PEREIRA" data-search="Ἁγνός, ή, όν αγνος  puro, santo, casto | limpo, sem mancha, incontaminado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγνός, ή, όν</td>
    <td>Adjetivo</td>
    <td>puro, santo, casto; limpo, sem mancha, incontaminado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0268" data-source="PEREIRA" data-search="*Ἁγνότης, ητος αγνοτης  pureza, castidade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">*Ἁγνότης, ητος</td>
    <td>Substantivo feminino</td>
    <td>pureza, castidade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0269" data-source="PEREIRA" data-search="Ἄγνυμι αγνυμι quebrar, despedaçar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγνυμι</td>
    <td>Verbo</td>
    <td>quebrar, despedaçar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0270" data-source="PEREIRA" data-search="Ἀγνωμονεύω αγνωμονευω v. Ἀ-γνωμονέω PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγνωμονεύω</td>
    <td>—</td>
    <td>v. Ἀ-γνωμονέω</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0271" data-source="PEREIRA" data-search="Ἀ-γνωμονέω αγνωμονεω dar provas de ignorância, de ingratidão | proceder irreflectidamente, com arrebatação || proceder de má-fé PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνωμονέω</td>
    <td>—</td>
    <td>dar provas de ignorância, de ingratidão; proceder irreflectidamente, com arrebatação; proceder de má-fé</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0272" data-source="PEREIRA" data-search="Ἀ-γνωμόνως, αν αγνωμονως  sem reflexão, imprudentemente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνωμόνως, αν</td>
    <td>Adverbio</td>
    <td>sem reflexão, imprudentemente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0273" data-source="PEREIRA" data-search="Ἀ-γνωμοσύη, ης αγνωμοσυη  ignorância || falta de juízo | dureza, insensibilidade | equivocação || ingratidão PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνωμοσύη, ης</td>
    <td>Substantivo feminino</td>
    <td>ignorância; falta de juízo; dureza, insensibilidade; equivocação; ingratidão</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0274" data-source="PEREIRA" data-search="Ἀ-γνώμων, ον αγνωμων  falto de juízo, irreflectido || obstinado, duro, ingrato || ignorante/(gen. ονος) PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνώμων, ον</td>
    <td>Adjetivo</td>
    <td>falto de juízo, irreflectido; obstinado, duro, ingrato; ignorante/(gen. ονος)</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0275" data-source="PEREIRA" data-search="Ἀ-γνώς, ῶτος αγνως  não conhecido, || ignorante, desconhecedor || ininteligível, obscuro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνώς, ῶτος</td>
    <td>Substantivo masculino e feminino</td>
    <td>não conhecido,; ignorante, desconhecedor; ininteligível, obscuro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0276" data-source="PEREIRA" data-search="Ἁγνῶς αγνως  puramente, santamente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἁγνῶς</td>
    <td>Adverbio</td>
    <td>puramente, santamente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0277" data-source="PEREIRA" data-search="Ἀ-γνωσία, ας αγνωσια  ignorância | obscuridade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γνωσία, ας</td>
    <td>Substantivo feminino</td>
    <td>ignorância; obscuridade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0278" data-source="PEREIRA" data-search="Ἀ-γόνατος, ον αγονατος  sem joelhos || sem junturas, sem articulações, sem nós PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γόνατος, ον</td>
    <td>Adjetivo</td>
    <td>sem joelhos; sem junturas, sem articulações, sem nós</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0279" data-source="PEREIRA" data-search="Ἀ-γονία, ας αγονια  esterilidade, infecundidade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γονία, ας</td>
    <td>Substantivo feminino</td>
    <td>esterilidade, infecundidade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0280" data-source="PEREIRA" data-search="Ἄ-γονος, ον αγονος  não nascido || estéril PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γονος, ον</td>
    <td>Adjetivo</td>
    <td>não nascido; estéril</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0281" data-source="PEREIRA" data-search="Ἄ-γοος, ον αγοος  sem gemidos, não chorado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γοος, ον</td>
    <td>Adjetivo</td>
    <td>sem gemidos, não chorado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0282" data-source="PEREIRA" data-search="Ἀγορά, ᾶς αγορα  Ágora, cidade da Trácia no (Quersoneso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορά, ᾶς</td>
    <td>Substantivo feminino</td>
    <td>Ágora, cidade da Trácia no (Quersoneso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0283" data-source="PEREIRA" data-search="Ἀγορά, ᾶς αγορα  reunião assembleia, comunidade reunida | discurso perante a assembleia | praça pública | mercado | mercadorias, géneros, víveres PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορά, ᾶς</td>
    <td>Substantivo feminino</td>
    <td>reunião assembleia, comunidade reunida; discurso perante a assembleia; praça pública; mercado; mercadorias, géneros, víveres</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0284" data-source="PEREIRA" data-search="Ἀγοράζω αγοραζω ir ao mercado, permanecer no mercado, comprar no mercado | tomar parte nas discussões na praça pública PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγοράζω</td>
    <td>—</td>
    <td>ir ao mercado, permanecer no mercado, comprar no mercado; tomar parte nas discussões na praça pública</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0285" data-source="PEREIRA" data-search="Ἀγοραῖος, ον αγοραιος  que diz respeito ao mercado, à praça pública || que está à frente do mercado || orador político | ocioso, vagabundo, que passa os dias nas praças || comerciante | tendeiro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγοραῖος, ον</td>
    <td>Adjetivo</td>
    <td>que diz respeito ao mercado, à praça pública; que está à frente do mercado; orador político; ocioso, vagabundo, que passa os dias nas praças; comer…</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0286" data-source="PEREIRA" data-search="Ἀγοραίως αγοραιως  em estilo forense, declamatório, trivial PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγοραίως</td>
    <td>Adverbio</td>
    <td>em estilo forense, declamatório, trivial</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0287" data-source="PEREIRA" data-search="Ἀγορα-νομέω αγορανομεω ser edil PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορα-νομέω</td>
    <td>—</td>
    <td>ser edil</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0288" data-source="PEREIRA" data-search="Ἀγορα-νομία, ας αγορανομια  cargo de edil PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορα-νομία, ας</td>
    <td>Substantivo feminino</td>
    <td>cargo de edil</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0289" data-source="PEREIRA" data-search="Ἀγορα-νομικός, ή, όν αγορανομικος  próprio do edil PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορα-νομικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>próprio do edil</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0290" data-source="PEREIRA" data-search="Ἀγορα-νόμος, ου αγορανομος  na Grécia, inspector de mercados || em Roma, edil PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορα-νόμος, ου</td>
    <td>Substantivo masculino</td>
    <td>na Grécia, inspector de mercados; em Roma, edil</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0291" data-source="PEREIRA" data-search="Ἀγοράομαι αγοραομαι tomar parte numa reunião || arengar, discursar || falar, dizer PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγοράομαι</td>
    <td>Verbo</td>
    <td>tomar parte numa reunião; arengar, discursar; falar, dizer</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0292" data-source="PEREIRA" data-search="Ἀγόρασις, εως αγορασις  compra PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγόρασις, εως</td>
    <td>Substantivo feminino</td>
    <td>compra</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0293" data-source="PEREIRA" data-search="Ἀγόρασμα, ατος αγορασμα  s n mercancias, géneros PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγόρασμα, ατος</td>
    <td>Verbo</td>
    <td>s n mercancias, géneros</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0294" data-source="PEREIRA" data-search="Ἀγοραστής, οῦ αγοραστης  escravo encarregado de fazer as compras no mercado, comprador PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγοραστής, οῦ</td>
    <td>Substantivo masculino</td>
    <td>escravo encarregado de fazer as compras no mercado, comprador</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0295" data-source="PEREIRA" data-search="Ἀγοραστικός, ή, όν αγοραστικος  que diz respeito ao comércio, comércio PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγοραστικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>que diz respeito ao comércio, comércio</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0296" data-source="PEREIRA" data-search="Ἀγορεύω αγορευω falar em público || falar, dizer | declarar, anunciar, proclamar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορεύω</td>
    <td>—</td>
    <td>falar em público; falar, dizer; declarar, anunciar, proclamar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0297" data-source="PEREIRA" data-search="Ἀγορῆθεν, αν αγορηθεν  da assembleia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορῆθεν, αν</td>
    <td>Adverbio</td>
    <td>da assembleia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0298" data-source="PEREIRA" data-search="Ἀγορῆνδε αγορηνδε  para a assembleia, na assembleia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορῆνδε</td>
    <td>Adverbio</td>
    <td>para a assembleia, na assembleia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0299" data-source="PEREIRA" data-search="Ἀγορητής, οῦ αγορητης  que fala em público, orador PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορητής, οῦ</td>
    <td>Substantivo masculino</td>
    <td>que fala em público, orador</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0300" data-source="PEREIRA" data-search="Ἀγορητύς, ύος αγορητυς  eloquência, talento oratório PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγορητύς, ύος</td>
    <td>Substantivo masculino</td>
    <td>eloquência, talento oratório</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0301" data-source="PEREIRA" data-search="Ἄγορος, ου αγορος  assembleia, reunião PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγορος, ου</td>
    <td>Substantivo masculino</td>
    <td>assembleia, reunião</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0302" data-source="PEREIRA" data-search="Ἅγος, ους αγος  crime, sacrilégio || criminoso, ímpio, sacrilego || expiação || temor dos deuses, temor religioso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἅγος, ους</td>
    <td>Substantivo neutro</td>
    <td>crime, sacrilégio; criminoso, ímpio, sacrilego; expiação; temor dos deuses, temor religioso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0303" data-source="PEREIRA" data-search="Ἄγος, ους αγος  crime, sacrilégio || criminoso, ímpio, sacrilego || expiação || temor dos deuses, temor religioso PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγος, ους</td>
    <td>Substantivo neutro</td>
    <td>crime, sacrilégio; criminoso, ímpio, sacrilego; expiação; temor dos deuses, temor religioso</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0304" data-source="PEREIRA" data-search="Ἀγός, οῦ αγος  condutor, chefe PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγός, οῦ</td>
    <td>Substantivo masculino</td>
    <td>condutor, chefe</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0305" data-source="PEREIRA" data-search="Ἀγοστός, οῦ αγοστος  a concavidade da mão || braço recurvado, abraço PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγοστός, οῦ</td>
    <td>Substantivo masculino</td>
    <td>a concavidade da mão; braço recurvado, abraço</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0306" data-source="PEREIRA" data-search="ἀγ-πλήξ, ῆγος αγπληξ  f. v. Ἄ-πληκτος PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">ἀγ-πλήξ, ῆγος</td>
    <td>Adjetivo</td>
    <td>f. v. Ἄ-πληκτος</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0307" data-source="PEREIRA" data-search="Ἄγρα, ας αγρα  caça || presa, despojos PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγρα, ας</td>
    <td>Substantivo feminino</td>
    <td>caça; presa, despojos</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0308" data-source="PEREIRA" data-search="Ἀ-γραμματία, ας αγραμματια  ignorância PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γραμματία, ας</td>
    <td>Substantivo feminino</td>
    <td>ignorância</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0309" data-source="PEREIRA" data-search="Ἀ-γράμματος, ον αγραμματος  ignorante, analfabeto | não escrito | incapaz de pronunciar sons articulados PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γράμματος, ον</td>
    <td>Adjetivo</td>
    <td>ignorante, analfabeto; não escrito; incapaz de pronunciar sons articulados</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0310" data-source="PEREIRA" data-search="Ἄ-γραπτος, ον αγραπτος  não escrito, oral PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γραπτος, ον</td>
    <td>Adjetivo</td>
    <td>não escrito, oral</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0311" data-source="PEREIRA" data-search="Ἀγρ-αυλέω αγραυλεω viver no campo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρ-αυλέω</td>
    <td>—</td>
    <td>viver no campo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0312" data-source="PEREIRA" data-search="Ἄγρ-αυλος, ον αγραυλος  que vive ou passa as noites nos campos || próprio dos campos, campestre PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγρ-αυλος, ον</td>
    <td>Adjetivo</td>
    <td>que vive ou passa as noites nos campos; próprio dos campos, campestre</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0313" data-source="PEREIRA" data-search="Ἄ-γραφος, ον αγραφος  não escrito, verbal || não pintado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γραφος, ον</td>
    <td>Adjetivo</td>
    <td>não escrito, verbal; não pintado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0314" data-source="PEREIRA" data-search="Ἀγρεῖος, α, ον αγρειος  campestre || grosseiro, tosco PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρεῖος, α, ον</td>
    <td>Adjetivo</td>
    <td>campestre; grosseiro, tosco</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0315" data-source="PEREIRA" data-search="Ἀγρέμων, ονος αγρεμων  lança PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρέμων, ονος</td>
    <td>Substantivo masculino</td>
    <td>lança</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0316" data-source="PEREIRA" data-search="Ἄγρευμα, ατος αγρευμα  caça, despojos || rede, armadilha PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγρευμα, ατος</td>
    <td>Substantivo neutro</td>
    <td>caça, despojos; rede, armadilha</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0317" data-source="PEREIRA" data-search="Ἀγρεύς, έως αγρευς  caçador, pescador PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρεύς, έως</td>
    <td>Substantivo masculino</td>
    <td>caçador, pescador</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0318" data-source="PEREIRA" data-search="Ἀγρευτήρ, ῆρος αγρευτηρ  v. Ἀγρευτής PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρευτήρ, ῆρος</td>
    <td>Substantivo masculino</td>
    <td>v. Ἀγρευτής</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0319" data-source="PEREIRA" data-search="Ἀγρευτής, οῦ αγρευτης  caçador PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρευτής, οῦ</td>
    <td>Substantivo masculino</td>
    <td>caçador</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0320" data-source="PEREIRA" data-search="Ἀγρευτικός, ή, όν αγρευτικος  bom para a caça de.. PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρευτικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>bom para a caça de..</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0321" data-source="PEREIRA" data-search="Ἀγρεύω αγρευω caçar | pescar || méd. apoderar-se de PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρεύω</td>
    <td>—</td>
    <td>caçar; pescar; méd. apoderar-se de</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0322" data-source="PEREIRA" data-search="Ἀγρέω αγρεω  tomar, poderar-se de | imper. hom. ἄγρει, ἀγρεῖτε, eia! vamos! pronto! PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρέω</td>
    <td>Verbo</td>
    <td>tomar, poderar-se de; imper. hom. ἄγρει, ἀγρεῖτε, eia! vamos! pronto!</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0323" data-source="PEREIRA" data-search="Ἀγριαίνω αγριαινω ser selvagem | irritar-se, enfurecer-se, fazer-se feroz | enfurecer, irritar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγριαίνω</td>
    <td>Verbo</td>
    <td>ser selvagem; irritar-se, enfurecer-se, fazer-se feroz; enfurecer, irritar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0324" data-source="PEREIRA" data-search="Ἀγρι-έλαιος, ον αγριελαιος  de oliveiras selvagens PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρι-έλαιος, ον</td>
    <td>Adjetivo</td>
    <td>de oliveiras selvagens</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0325" data-source="PEREIRA" data-search="Ἀγρι-έλαιος, ου αγριελαιος  oliveira selvagem PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρι-έλαιος, ου</td>
    <td>Substantivo feminino</td>
    <td>oliveira selvagem</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0326" data-source="PEREIRA" data-search="Ἀγριο-ποιός, όν αγριοποιος  que cria caracteres selvagens PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγριο-ποιός, όν</td>
    <td>Adjetivo</td>
    <td>que cria caracteres selvagens</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0327" data-source="PEREIRA" data-search="Ἄγριος, α, ον αγριος  que vive nos campos, rústico || cruel, feroz, selvagem PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγριος, α, ον</td>
    <td>Adjetivo</td>
    <td>que vive nos campos, rústico; cruel, feroz, selvagem</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0328" data-source="PEREIRA" data-search="Ἀγριότης, ητος αγριοτης  natureza inculta, selvagem || crueldade, ferocidade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγριότης, ητος</td>
    <td>Substantivo feminino</td>
    <td>natureza inculta, selvagem; crueldade, ferocidade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0329" data-source="PEREIRA" data-search="Ἀγριό-φωνος, ον αγριοφωνος  de voz ou idioma selvagem PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγριό-φωνος, ον</td>
    <td>Adjetivo</td>
    <td>de voz ou idioma selvagem</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0330" data-source="PEREIRA" data-search="Ἀγριόω αγριοω enfurecer, irritar, exasperar contra | na pass. ser selvagem, cruel PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγριόω</td>
    <td>—</td>
    <td>enfurecer, irritar, exasperar contra; na pass. ser selvagem, cruel</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0331" data-source="PEREIRA" data-search="Ἀγρι-ωπός, όν αγριωπος  de olhar feroz PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρι-ωπός, όν</td>
    <td>Adjetivo</td>
    <td>de olhar feroz</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0332" data-source="PEREIRA" data-search="Ἀγρίως αγριως  duma maneira selvagem, de modo cruel PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρίως</td>
    <td>Adverbio</td>
    <td>duma maneira selvagem, de modo cruel</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0333" data-source="PEREIRA" data-search="Ἀγρο-βότης, ου αγροβοτης  pastor PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρο-βότης, ου</td>
    <td>Substantivo masculino</td>
    <td>pastor</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0334" data-source="PEREIRA" data-search="Ἀγρο-γείτων, ονος αγρογειτων  vizinho de campo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρο-γείτων, ονος</td>
    <td>Substantivo masculino</td>
    <td>vizinho de campo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0335" data-source="PEREIRA" data-search="Ἀγρόθεν αγροθεν  vindo do campo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρόθεν</td>
    <td>Adverbio</td>
    <td>vindo do campo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0336" data-source="PEREIRA" data-search="Ἀγρ-οικία, ας αγροικια  casa de campo | costumes rústicos || campo, herdade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγρ-οικία, ας</td>
    <td>Substantivo masculino</td>
    <td>casa de campo; costumes rústicos; campo, herdade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0337" data-source="PEREIRA" data-search="Ἀγυιά, ᾶς αγυια  rua, caminho, vereda | região, país PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγυιά, ᾶς</td>
    <td>Substantivo feminino</td>
    <td>rua, caminho, vereda; região, país</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0338" data-source="PEREIRA" data-search="Ἀγυιάτης, ου αγυιατης  protector de caminhos (Apolo) PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγυιάτης, ου</td>
    <td>Substantivo masculino</td>
    <td>protector de caminhos (Apolo)</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0339" data-source="PEREIRA" data-search="Ἀγυιεύς, έως αγυιευς  protector de caminhos (Apolo) | altar de Apolo às portas de casa PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγυιεύς, έως</td>
    <td>Substantivo masculino</td>
    <td>protector de caminhos (Apolo); altar de Apolo às portas de casa</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0340" data-source="PEREIRA" data-search="Ἀ-γυμνασία, ας αγυμνασια  falta de exercício | ociosidade PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γυμνασία, ας</td>
    <td>Substantivo feminino</td>
    <td>falta de exercício; ociosidade</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0341" data-source="PEREIRA" data-search="Ἀ-γύμναστος, ον αγυμναστος  não exercitado, sem experiência | não fatigado, não provado pelo sofrimento PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γύμναστος, ον</td>
    <td>Adjetivo</td>
    <td>não exercitado, sem experiência; não fatigado, não provado pelo sofrimento</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0342" data-source="PEREIRA" data-search="Ἀ-γύναικος, ου αγυναικος  não casado, solteiro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-γύναικος, ου</td>
    <td>Substantivo masculino</td>
    <td>não casado, solteiro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0343" data-source="PEREIRA" data-search="Ἄ-γυνος, ου αγυνος  não casado, solteiro PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-γυνος, ου</td>
    <td>Substantivo masculino</td>
    <td>não casado, solteiro</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0344" data-source="PEREIRA" data-search="Ἄγυρις, εως αγυρις  assembleia, multidão PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄγυρις, εως</td>
    <td>Substantivo feminino</td>
    <td>assembleia, multidão</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0345" data-source="PEREIRA" data-search="Ἀγυρμός, οῦ αγυρμος  colecta || reunião, assembleia PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγυρμός, οῦ</td>
    <td>Substantivo masculino</td>
    <td>colecta; reunião, assembleia</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0346" data-source="PEREIRA" data-search="Ἀγυρτάζω αγυρταζω recolher, buscar, mendigar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγυρτάζω</td>
    <td>—</td>
    <td>recolher, buscar, mendigar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0347" data-source="PEREIRA" data-search="Ἀγυρτεύω αγυρτευω v. Ἀγυρτάζω PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγυρτεύω</td>
    <td>—</td>
    <td>v. Ἀγυρτάζω</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0348" data-source="PEREIRA" data-search="Ἀγύρτης, ου αγυρτης  mendigo, que recolhe esmola || adivinho, charlatão, que lê a sina PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγύρτης, ου</td>
    <td>Substantivo masculino</td>
    <td>mendigo, que recolhe esmola; adivinho, charlatão, que lê a sina</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0349" data-source="PEREIRA" data-search="Ἀγυρτικός, ή, όν αγυρτικος  próprio de charlatão PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγυρτικός, ή, όν</td>
    <td>Adjetivo</td>
    <td>próprio de charlatão</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0350" data-source="PEREIRA" data-search="Ἀγύρτρια, ας αγυρτρια  de ἀγύρτης PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγύρτρια, ας</td>
    <td>Substantivo feminino</td>
    <td>de ἀγύρτης</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0351" data-source="PEREIRA" data-search="Ἀγχέ-μαχος, ον αγχεμαχος  que combate de perto, corpo a corpo | que serve para combater de perto PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχέ-μαχος, ον</td>
    <td>Adjetivo</td>
    <td>que combate de perto, corpo a corpo; que serve para combater de perto</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0352" data-source="PEREIRA" data-search="Ἀγχι αγχι  e prep. perto, de perto || imediatamente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχι</td>
    <td>Adjetivo</td>
    <td>e prep. perto, de perto; imediatamente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0353" data-source="PEREIRA" data-search="Ἀγχί-αλος, ον αγχιαλος  rodeado por mar | marítimo, vizinho ao mar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχί-αλος, ον</td>
    <td>Adjetivo</td>
    <td>rodeado por mar; marítimo, vizinho ao mar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0354" data-source="PEREIRA" data-search="Ἀγχι-βαθής, ές αγχιβαθης  profundo junto à costa || escarpado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχι-βαθής, ές</td>
    <td>Adjetivo</td>
    <td>profundo junto à costa; escarpado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0355" data-source="PEREIRA" data-search="Ἀγχι-γείτων, ον αγχιγειτων  vizinho PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχι-γείτων, ον</td>
    <td>Adjetivo</td>
    <td>vizinho</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0356" data-source="PEREIRA" data-search="Ἀγχί-θεος, ον αγχιθεος  semelhante aos deuses || semi-deus PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχί-θεος, ον</td>
    <td>Adjetivo</td>
    <td>semelhante aos deuses; semi-deus</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0357" data-source="PEREIRA" data-search="Ἀγχί-θυρος, ον αγχιθυρος  de perto da porta, vizinho PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχί-θυρος, ον</td>
    <td>Adjetivo</td>
    <td>de perto da porta, vizinho</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0358" data-source="PEREIRA" data-search="Ἀγχί-κρημνος, ον αγχικρημνος  próximo de uma ribanceira PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχί-κρημνος, ον</td>
    <td>Adjetivo</td>
    <td>próximo de uma ribanceira</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0359" data-source="PEREIRA" data-search="Ἀγχί-μολος, ον αγχιμολος  vizinho, próximo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχί-μολος, ον</td>
    <td>Adjetivo</td>
    <td>vizinho, próximo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0360" data-source="PEREIRA" data-search="Ἀγχί-νοια, ας αγχινοια  presença de ânimo, vivacidade do espírito, talento PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀγχί-νοια, ας</td>
    <td>Substantivo feminino</td>
    <td>presença de ânimo, vivacidade do espírito, talento</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>

<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0361" data-source="PEREIRA" data-search="αγχινοος Ἀγχί-νοος, οον Adjetivo agudo, inteligento/(contr. ους, ουν) PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχί-νοος, οον</td><td>Adjetivo</td><td>agudo, inteligento/(contr. ους, ουν)</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0362" data-source="PEREIRA" data-search="αγχιπλοος Ἀγχί-πλοος, οον Adjetivo que navega perto, de curta navegação/(contr. ους, ουν) PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχί-πλοος, οον</td><td>Adjetivo</td><td>que navega perto, de curta navegação/(contr. ους, ουν)</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0363" data-source="PEREIRA" data-search="αγχιπολις Ἀγχί-πολις, εως, ou τος Substantivo Feminino vizinho à cidade PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχί-πολις, εως, ou τος</td><td>Substantivo feminino</td><td>vizinho à cidade</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0364" data-source="PEREIRA" data-search="αγχισης Ἀγχίσης, ουs m. Anquises, pai de Eneias PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχίσης, ουs</td><td>—</td><td>m. Anquises, pai de Eneias</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0365" data-source="PEREIRA" data-search="αγχισπορος Ἀγχί-σπορος, ον Adjetivo consanguíneo, parente PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχί-σπορος, ον</td><td>Adjetivo</td><td>consanguíneo, parente</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0366" data-source="PEREIRA" data-search="αγχιστεια Ἀγχιστεία, ας Substantivo Feminino familiaridade, intimidade, parentesco próximo; direito à herança PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχιστεία, ας</td><td>Substantivo feminino</td><td>familiaridade, intimidade, parentesco próximo; direito à herança</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0367" data-source="PEREIRA" data-search="αγχιστειον Ἀγχιστεῖον, ου Substantivo Neutro v. Ἀγχιστεία PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχιστεῖον, ου</td><td>Substantivo neutro</td><td>v. Ἀγχιστεία</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0368" data-source="PEREIRA" data-search="αγχιστευς Ἀγχιστεύς, έως Substantivo Masculino parente próximo PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχιστεύς, έως</td><td>Substantivo masculino</td><td>parente próximo</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0369" data-source="PEREIRA" data-search="αγχιστευω Ἀγχιστεύω ser vizinho de; ser parente próximo de PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχιστεύω</td><td>—</td><td>ser vizinho de; ser parente próximo de</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0370" data-source="PEREIRA" data-search="αγχιστηρ Ἀγχιστήρ, ῆρος Substantivo Masculino cúmplice, causa de PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχιστήρ, ῆρος</td><td>Substantivo masculino</td><td>cúmplice, causa de</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0371" data-source="PEREIRA" data-search="αγχιστινος Ἀγχιστῖνος, η, ον Adjetivo muito próximo, ou muito chegado a outro PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχιστῖνος, η, ον</td><td>Adjetivo</td><td>muito próximo, ou muito chegado a outro</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0372" data-source="PEREIRA" data-search="αγχιστος Ἄγχιστος, η, ον Adjetivo muito próximo; parente muito próximo PEREIRA" tabindex="0"><td class="table-lemma greek">Ἄγχιστος, η, ον</td><td>Adjetivo</td><td>muito próximo; parente muito próximo</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0373" data-source="PEREIRA" data-search="αγχιστροφος Ἀγχί-στροφος, ον Adjetivo que se volta rapidamente PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχί-στροφος, ον</td><td>Adjetivo</td><td>que se volta rapidamente</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0374" data-source="PEREIRA" data-search="αγχιτερμων Ἀγχι-τέρμων, ον Adjetivo limítrofe, vizinho/(gen. ονος) PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχι-τέρμων, ον</td><td>Adjetivo</td><td>limítrofe, vizinho/(gen. ονος)</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0375" data-source="PEREIRA" data-search="αγχιτοκος Ἀγχί-τοκος, ον Adjetivo que está muito próximo de dar à luz PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχί-τοκος, ον</td><td>Adjetivo</td><td>que está muito próximo de dar à luz</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0376" data-source="PEREIRA" data-search="αγχοθεν Ἀγχόθεν Adverbio de perto PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχόθεν</td><td>Adverbio</td><td>de perto</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0377" data-source="PEREIRA" data-search="αγχοθι Ἀγχόθι Adverbio perto de, junto PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχόθι</td><td>Adverbio</td><td>perto de, junto</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0378" data-source="PEREIRA" data-search="αγχονη Ἀγχόνη, ης Substantivo Feminino acção de estrangular, de enforcar; corda de enforcamento PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχόνη, ης</td><td>Substantivo feminino</td><td>acção de estrangular, de enforcar; corda de enforcamento</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0379" data-source="PEREIRA" data-search="αγχονιος Ἀγχόνιος, α, ον Adjetivo que serve para estrangular PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχόνιος, α, ον</td><td>Adjetivo</td><td>que serve para estrangular</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0380" data-source="PEREIRA" data-search="αγχοτατω Ἀγχοτάτω Adverbio muitíssimo mais perto PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχοτάτω</td><td>Adverbio</td><td>muitíssimo mais perto</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0381" data-source="PEREIRA" data-search="αγχοτερες Ἀγχότερες, α, ον Adjetivo mais próximo PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχότερες, α, ον</td><td>Adjetivo</td><td>mais próximo</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0382" data-source="PEREIRA" data-search="αγχου Ἀγχοῦ Adverbio e prep. perto de, junto de; semelhantementes. PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχοῦ</td><td>Adverbio</td><td>e prep. perto de, junto de; semelhantementes.</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0383" data-source="PEREIRA" data-search="αγχουσα Ἄγχουσα, ης Substantivo Feminino ancusa (nome de planta) PEREIRA" tabindex="0"><td class="table-lemma greek">Ἄγχουσα, ης</td><td>Substantivo feminino</td><td>ancusa (nome de planta)</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0384" data-source="PEREIRA" data-search="αγχω Ἄγχω Verbo apertar, estrangular, sufocar PEREIRA" tabindex="0"><td class="table-lemma greek">Ἄγχω</td><td>Verbo</td><td>apertar, estrangular, sufocar</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0385" data-source="PEREIRA" data-search="αγχωμαλεω Ἀγχ-ωμαλέω combater com forças iguais PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχ-ωμαλέω</td><td>—</td><td>combater com forças iguais</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0386" data-source="PEREIRA" data-search="αγχωμαλος Ἀγχ-ώμαλος, ον Adjetivo quase igual PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγχ-ώμαλος, ον</td><td>Adjetivo</td><td>quase igual</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0387" data-source="PEREIRA" data-search="αγω Ἄγω Verbo I tr. levar, conduzir, guiar; dirigir, mandar; educar, formar trazer, acarretar; atrair; levar consigo; levar, arrastar; pesar; apreçar, ava PEREIRA" tabindex="0"><td class="table-lemma greek">Ἄγω</td><td>Verbo</td><td>I tr. levar, conduzir, guiar; dirigir, mandar; educar, formar trazer, acarretar; atrair; levar consigo; levar, arrastar; pesar; apreçar, ava</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0388" data-source="PEREIRA" data-search="αγω Ἀγῶ, ῇς, ῇ aor. pass. 2 do conj. de ἄγνυμι PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγῶ, ῇς, ῇ</td><td>—</td><td>aor. pass. 2 do conj. de ἄγνυμι</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0389" data-source="PEREIRA" data-search="αγω Ἁγώ crase de ἅ ἐγώ. PEREIRA" tabindex="0"><td class="table-lemma greek">Ἁγώ</td><td>—</td><td>crase de ἅ ἐγώ.</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0390" data-source="PEREIRA" data-search="αγωγευς Ἀγωγεύς, έως Substantivo Masculino condutor, guia PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωγεύς, έως</td><td>Substantivo masculino</td><td>condutor, guia</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0391" data-source="PEREIRA" data-search="αγωγη Ἀγωγή, ῆς Substantivo Masculino acção de transportar, tansporte; acção de conduzir; partida, marcha; direcção, educação; tempo, todo, maneira. compasso; método, maneira PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωγή, ῆς</td><td>Substantivo masculino</td><td>acção de transportar, tansporte; acção de conduzir; partida, marcha; direcção, educação; tempo, todo, maneira. compasso; método, maneira</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0392" data-source="PEREIRA" data-search="αγωγιμος Ἀγώγιμος, ον Adjetivo que se pode transportar; no pl. carga, mercadorias; que pode ser apreendido facila, que se deixa arrastar com facilidademente; inclinado PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγώγιμος, ον</td><td>Adjetivo</td><td>que se pode transportar; no pl. carga, mercadorias; que pode ser apreendido facila, que se deixa arrastar com facilidademente; inclinado</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0393" data-source="PEREIRA" data-search="αγωγιον Ἀγώγιον, ου Substantivo Neutro carga, mercadoria PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγώγιον, ου</td><td>Substantivo neutro</td><td>carga, mercadoria</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0394" data-source="PEREIRA" data-search="αγωγος Ἀγωγός, όν Adjetivo escolta; que atrai PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωγός, όν</td><td>Adjetivo</td><td>escolta; que atrai</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0395" data-source="PEREIRA" data-search="αγων Ἀγών, ῶνος Substantivo Masculino reunião (para jogos religiosos, etc.); jogos, concurso, fim proposto aos concorrentes; luta; perigo, momento crítico; temor, ansiedade, angú PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγών, ῶνος</td><td>Substantivo masculino</td><td>reunião (para jogos religiosos, etc.); jogos, concurso, fim proposto aos concorrentes; luta; perigo, momento crítico; temor, ansiedade, angú</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0396" data-source="PEREIRA" data-search="αγωναρχης Ἀγων-άρχης, ου Substantivo Masculino presidente dos jogos PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγων-άρχης, ου</td><td>Substantivo masculino</td><td>presidente dos jogos</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0397" data-source="PEREIRA" data-search="αγωνια Ἀγωνία, ας Substantivo Feminino luta, exercício ginástico; combate, luta; disputa, litígio, angústia mortal, pleito; esforço, ansiedade PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωνία, ας</td><td>Substantivo feminino</td><td>luta, exercício ginástico; combate, luta; disputa, litígio, angústia mortal, pleito; esforço, ansiedade</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0398" data-source="PEREIRA" data-search="αγωνιαω Ἀγωνιάω Verbo lutar, disputar; estar irritado; estar disposto para lutar; estar inquieto, temer PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωνιάω</td><td>Verbo</td><td>lutar, disputar; estar irritado; estar disposto para lutar; estar inquieto, temer</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0399" data-source="PEREIRA" data-search="αγωνιζομαι Ἀγωνίζομαι Verbo disputar um prémio, concorrer ao jogos; combater, lutar; esforçar-se por; sustentar um litígio, um pleito; falar em público PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωνίζομαι</td><td>Verbo</td><td>disputar um prémio, concorrer ao jogos; combater, lutar; esforçar-se por; sustentar um litígio, um pleito; falar em público</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0400" data-source="PEREIRA" data-search="αγωνιος Ἀγώνιος, α, ον Adjetivo relativo aos jogos ou certames públicos certames PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγώνιος, α, ον</td><td>Adjetivo</td><td>relativo aos jogos ou certames públicos certames</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0401" data-source="PEREIRA" data-search="αγωνιος Ἀ-γώνιος, α, ον Adjetivo sem ângulos PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀ-γώνιος, α, ον</td><td>Adjetivo</td><td>sem ângulos</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0402" data-source="PEREIRA" data-search="αγωνισις Ἀγώνισις, εως Substantivo Feminino v. ἀγωνισμός PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγώνισις, εως</td><td>Substantivo feminino</td><td>v. ἀγωνισμός</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0403" data-source="PEREIRA" data-search="αγωνισμα Ἀγώνισμα, ατος Substantivo Neutro acção heróica façanha; luta, rivalidade; processo, litígio; prémio do ou fundamento de uma causa PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγώνισμα, ατος</td><td>Substantivo neutro</td><td>acção heróica façanha; luta, rivalidade; processo, litígio; prémio do ou fundamento de uma causa</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0404" data-source="PEREIRA" data-search="αγωνισμος Ἀγωνισμός, οῦ Substantivo Masculino luta PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωνισμός, οῦ</td><td>Substantivo masculino</td><td>luta</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0405" data-source="PEREIRA" data-search="αγωνιστης Ἀγωνιστής, οῦ Substantivo Masculino atleta; competidor, rival; advogado, orador; mestre nalguma arte ou ciência PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωνιστής, οῦ</td><td>Substantivo masculino</td><td>atleta; competidor, rival; advogado, orador; mestre nalguma arte ou ciência</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0406" data-source="PEREIRA" data-search="αγωνιστικος Ἀγωνιστικός, ή, όν Adjetivo ; próprio da luta, do combate; que gosta da luta, da discussão. PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωνιστικός, ή, όν</td><td>Adjetivo</td><td>; próprio da luta, do combate; que gosta da luta, da discussão.</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0407" data-source="PEREIRA" data-search="αγωνοθεσια Ἀγωνο-θεσία, ας Substantivo Feminino cargo de organisar € arbitrar os jogos PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωνο-θεσία, ας</td><td>Substantivo feminino</td><td>cargo de organisar € arbitrar os jogos</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0408" data-source="PEREIRA" data-search="αγωνοθετεω Ἀγωνο-θετέω organizar jogos públicos, arbitrar nos jogos PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωνο-θετέω</td><td>—</td><td>organizar jogos públicos, arbitrar nos jogos</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0409" data-source="PEREIRA" data-search="αγωνοθετης Ἀγωνο-θέτης, ου Substantivo Masculino organizador, presidente nos jogos públicos; juiz, árbitro nos Jogos PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀγωνο-θέτης, ου</td><td>Substantivo masculino</td><td>organizador, presidente nos jogos públicos; juiz, árbitro nos Jogos</td><td><span class="source-pill">PEREIRA</span></td></tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0410" data-source="PEREIRA" data-search="αδαγμος Ἀ-δαγμός, οῦ Substantivo Masculino mordedura; rasgão PEREIRA" tabindex="0"><td class="table-lemma greek">Ἀ-δαγμός, οῦ</td><td>Substantivo masculino</td><td>mordedura; rasgão</td><td><span class="source-pill">PEREIRA</span></td></tr>
`,

    cardsHtml: String.raw`
<article id="entry-pereira-0001" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Α, α</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 1 na letra α · ID 29573</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">alfa, primeira letra do alfabeto grego; como numerala' =1, x =1.000</p>
    </section>
</article>

<article id="entry-pereira-0002" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 2 na letra α · ID 29574</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">prefixo.privativo: ἄ-θυμος, | copulativo: ἄ-λοχος | aumentativo: ἀ-τενής</p>
    </section>
</article>

<article id="entry-pereira-0003" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Α</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 3 na letra α · ID 29575</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">interj. que designa admiração, dor, etc., ah! ai!</p>
    </section>
</article>

<article id="entry-pereira-0004" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἅ</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 4 na letra α · ID 29576</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">interj. que designa alegria, ah! oh!</p>
    </section>
</article>

<article id="entry-pereira-0005" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-άατος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 5 na letra α · ID 29577</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, ἀάω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">inviolável | invencível</p>
    </section>
</article>

<article id="entry-pereira-0006" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-αγής, ές</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 6 na letra α · ID 29578</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἄγνυμι)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">sólido, inquebrável</p>
    </section>
</article>

<article id="entry-pereira-0007" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ΑἈνα-τρέχω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 7 na letra α · ID 31094</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(fut. ἀναδραμοῦμαι, aor. 2 ἀνέδραμον, pf. ἀναδεδράμηχκα)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">correr para cima, lançar-se à. | saltar || crescer com força || retirar-se rapidamente, retroceder retratar (o dito) emendar</p>
    </section>
</article>

<article id="entry-pereira-0008" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-απτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 8 na letra α · ID 29579</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, ἅπτω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">intangível, temível</p>
    </section>
</article>

<article id="entry-pereira-0009" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-άπτω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 9 na letra α · ID 34125</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(fut. ἀφάψω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">juntar, colar | suspender</p>
    </section>
</article>

<article id="entry-pereira-0010" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-άσχετος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 10 na letra α · ID 29580</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">v. ἄσχετος</p>
    </section>
</article>

<article id="entry-pereira-0011" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-ατος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 11 na letra α · ID 29581</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, ἄω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">insanciável de</p>
    </section>
</article>

<article id="entry-pereira-0012" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀάω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 12 na letra α · ID 29582</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(aor. 1. ἄασα, contr. ἄσα, aor. 1. méd. ἀασάμην, aor. 1. pass. ἀάσθην)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">I act. transtornar o juízo, enlouquecer, dar vertigens || causar uma desgraça. II méd. | tr. perturbar o juízo, extraviar, enganar || intr. cometer uma falta por perturbação. III pass. | ser enganado, enganar-se</p>
    </section>
</article>

<article id="entry-pereira-0013" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βακέω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 13 na letra α · ID 29583</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">desconhecer, ignorar, não reconhecer</p>
    </section>
</article>

<article id="entry-pereira-0014" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀβάκιον, ου</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 14 na letra α · ID 29584</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">tabuleta || tabuleiro de damas</p>
    </section>
</article>

<article id="entry-pereira-0015" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βάκχευτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 15 na letra α · ID 29585</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não inspirado de Baco, privado do furor báquico</p>
    </section>
</article>

<article id="entry-pereira-0016" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄβαξ, κος</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 16 na letra α · ID 29586</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">ábaco, prancha, placa, mesa</p>
    </section>
</article>

<article id="entry-pereira-0017" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βάπτιστος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 17 na letra α · ID 29587</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βαπτίζω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">insubmergível</p>
    </section>
</article>

<article id="entry-pereira-0018" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βαρής, ές</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 18 na letra α · ID 29588</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que não pesa | fig. que não molesta</p>
    </section>
</article>

<article id="entry-pereira-0019" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βασάνιστος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 19 na letra α · ID 29589</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βασανίζω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não provado, sem sofrimento || não averiguado por meio de tortura, não examinado, não investigado</p>
    </section>
</article>

<article id="entry-pereira-0020" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βασίλευτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 20 na letra α · ID 29590</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βασιλεύω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">sem rei | independente</p>
    </section>
</article>

<article id="entry-pereira-0021" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βάστακτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 21 na letra α · ID 29591</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βαστάζω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que não se pode transportar</p>
    </section>
</article>

<article id="entry-pereira-0022" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-βατος, η, ον, ou ἄβατος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 22 na letra α · ID 29592</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βαίνω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">I intr. | inacessível, infranqueável | santo, sagrado, impenetrável | cavalo não montado ainda || fêmea não coberta. II tr. que impede a marcha</p>
    </section>
</article>

<article id="entry-pereira-0023" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βαφής, ές</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 23 na letra α · ID 29593</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βάπτω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não tingido</p>
    </section>
</article>

<article id="entry-pereira-0024" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄβδηρα, ων</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 24 na letra α · ID 2253</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">pl. Abdera, cidade da Trácia, cujos habitantes tinham fama de loucos</p>
    </section>
</article>

<article id="entry-pereira-0025" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βέβαιος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 25 na letra α · ID 29594</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">inconstante, instável, sem firmeza</p>
    </section>
</article>

<article id="entry-pereira-0026" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βέβηλος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 26 na letra α · ID 29595</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">onde não se pode entrar, inviolável, sagrado</p>
    </section>
</article>

<article id="entry-pereira-0027" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βελτερία, ας</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 27 na letra α · ID 29596</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">simpleza</p>
    </section>
</article>

<article id="entry-pereira-0028" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βέλτερος, α, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 28 na letra α · ID 29597</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">simples, imbecil, néscio</p>
    </section>
</article>

<article id="entry-pereira-0029" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βίαστος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 29 na letra α · ID 29598</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não forçado, espontâneo</p>
    </section>
</article>

<article id="entry-pereira-0030" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-βιος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 30 na letra α · ID 29599</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">pobre, sem meios de vida</p>
    </section>
</article>

<article id="entry-pereira-0031" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βίοτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 31 na letra α · ID 29600</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βιόω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que não se pode viver, vida que não é vida; ἀβίωτόν ἐστι, é insuportável o viver</p>
    </section>
</article>

<article id="entry-pereira-0032" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βίωτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 32 na letra α · ID 29601</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βιόω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que não se pode viver, vida que não é vida; ἀβίωτόν ἐστι, é insuportável o viver</p>
    </section>
</article>

<article id="entry-pereira-0033" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βλάβεια, ας</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 33 na letra α · ID 29602</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βλάπτω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">inocuidade || tranquilidade, ausência de perigo</p>
    </section>
</article>

<article id="entry-pereira-0034" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βλαβής, ές</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 34 na letra α · ID 29603</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">I act. | inofensivo | que previne o perigo. II pass. ileso incólume</p>
    </section>
</article>

<article id="entry-pereira-0035" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βλής, ῆτος</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 35 na letra α · ID 29604</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βάλλω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não lançado não arrojado</p>
    </section>
</article>

<article id="entry-pereira-0036" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-βλητος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 36 na letra α · ID 29605</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não ferido, ileso</p>
    </section>
</article>

<article id="entry-pereira-0037" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βληχρός, ά, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 37 na letra α · ID 30736</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ aum., βληχρός)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">fraco, sem defesa</p>
    </section>
</article>

<article id="entry-pereira-0038" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βοατί</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 38 na letra α · ID 30737</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">sem ser chamado a gritos, que vem espontânecamente</p>
    </section>
</article>

<article id="entry-pereira-0039" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βοήθητος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 39 na letra α · ID 30738</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βοηθέω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">sem socorro possível, incurável | sem pecursos</p>
    </section>
</article>

<article id="entry-pereira-0040" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-βολος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 40 na letra α · ID 30739</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que não perdeu ainda os primeiros dentes (cavalo novo)</p>
    </section>
</article>

<article id="entry-pereira-0041" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βόσκητος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 41 na letra α · ID 30740</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βόσκω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">onde não pastam os rebanhos</p>
    </section>
</article>

<article id="entry-pereira-0042" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βουκόλητος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 42 na letra α · ID 30741</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βουκολέω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">descuidado, não atendido</p>
    </section>
</article>

<article id="entry-pereira-0043" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βουλέω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 43 na letra α · ID 30742</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não querer</p>
    </section>
</article>

<article id="entry-pereira-0044" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βουλία, ας</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 44 na letra α · ID 30743</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βουλή)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">irreílexão, imprudência</p>
    </section>
</article>

<article id="entry-pereira-0045" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-βουλος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 45 na letra α · ID 30744</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">irreflectido, imprudente | indiferente à || hostil a</p>
    </section>
</article>

<article id="entry-pereira-0046" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀβραδάτιας, α</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 46 na letra α · ID 2254</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">Abradata</p>
    </section>
</article>

<article id="entry-pereira-0047" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-βρεκτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 47 na letra α · ID 30745</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βρέχω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não molhado, seco</p>
    </section>
</article>

<article id="entry-pereira-0048" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βριθής, ἐς</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 48 na letra α · ID 30746</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βρίθω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que não pesa, leve</p>
    </section>
</article>

<article id="entry-pereira-0049" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρο-βάτης, ου</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 49 na letra α · ID 30747</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἁβρός, βαίνω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">de andar efeminado</p>
    </section>
</article>

<article id="entry-pereira-0050" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρό-βιος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 50 na letra α · ID 30748</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">de vida mole, efeminado</p>
    </section>
</article>

<article id="entry-pereira-0051" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρό-γοος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 51 na letra α · ID 30749</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">de chorar efeminado</p>
    </section>
</article>

<article id="entry-pereira-0052" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρο-δίαιτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 52 na letra α · ID 30750</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἁβρός, δίαιτα)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que vive efeminadamente || τὸ ἁβροδίαιτον vida mole</p>
    </section>
</article>

<article id="entry-pereira-0053" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρο-κόμης, ου</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 53 na letra α · ID 30751</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">de cabeleira efeminada || fig. de folhagem luxuriante</p>
    </section>
</article>

<article id="entry-pereira-0054" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-βρομος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 54 na letra α · ID 30752</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ aum., βρέμοω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">bramante, estrepitoso</p>
    </section>
</article>

<article id="entry-pereira-0055" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρο-πενθής, ές</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 55 na letra α · ID 30753</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἁβρός, πένθος)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que se queixa de um modo efeminado</p>
    </section>
</article>

<article id="entry-pereira-0056" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρό-πλουτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 56 na letra α · ID 30754</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">opulento, luxuriante, exuberante</p>
    </section>
</article>

<article id="entry-pereira-0057" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρός, ά, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 57 na letra α · ID 30755</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">delicado, terno || efeminado, mole</p>
    </section>
</article>

<article id="entry-pereira-0058" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβροσύνη</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 58 na letra α · ID 30756</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">v. Ἁβρότης</p>
    </section>
</article>

<article id="entry-pereira-0059" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβροτάζω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 59 na letra α · ID 30757</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">perder-se, extraviar-se/(fut. ἀξω somente em ἁβροτάξομεν)</p>
    </section>
</article>

<article id="entry-pereira-0060" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρότης, ητός</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 60 na letra α · ID 30758</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">felicidade, pros peridade |) magnificência, elegância</p>
    </section>
</article>

<article id="entry-pereira-0061" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρότιμος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 61 na letra α · ID 30759</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἁβρός, τιμή)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">sumptuoso</p>
    </section>
</article>

<article id="entry-pereira-0062" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-βροτος, ον, ou η, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 62 na letra α · ID 30760</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, ῥροτώς)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">imortal, divino | deserto, sem homens</p>
    </section>
</article>

<article id="entry-pereira-0063" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρο-χαίτης, ου</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 63 na letra α · ID 30761</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">de cabeleira efeminada</p>
    </section>
</article>

<article id="entry-pereira-0064" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄβρο-χίτων, νος</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 64 na letra α · ID 30762</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">de vestidos ricos e efeminados</p>
    </section>
</article>

<article id="entry-pereira-0065" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβροχος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 65 na letra α · ID 30763</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βρέχω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não molhado | sem água de chuva, seco</p>
    </section>
</article>

<article id="entry-pereira-0066" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἁβρύνω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 66 na letra α · ID 30764</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(αον. ἥβρυνα).(impf. ἡβρυνόμην)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">adornar com cuidado. méd. (impf. nBpuvounv) pavonear-se, orgulhar-se</p>
    </section>
</article>

<article id="entry-pereira-0067" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄβυδος, ου</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 67 na letra α · ID 2255</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">Abido | cidade de Tróade no Helesponto || cidade do Egipto</p>
    </section>
</article>

<article id="entry-pereira-0068" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-βυσσος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 68 na letra α · ID 30765</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀἁ, βυσσός)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">sem tundo muito profundo || fig. imenso</p>
    </section>
</article>

<article id="entry-pereira-0069" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄγαάσμα, ατος</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 69 na letra α · ID 30806</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">objecto de veneração</p>
    </section>
</article>

<article id="entry-pereira-0070" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαβάτανα, ων</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 70 na letra α · ID 2256</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">pl. Ἀγβάτανα, ων</p>
    </section>
</article>

<article id="entry-pereira-0071" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγάζω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 71 na letra α · ID 30766</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(só presente)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">suportar com diticuldade, levar a mal. Méd. ἀγάζομαι | honrar, venerar || admirar</p>
    </section>
</article>

<article id="entry-pereira-0072" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαθο-ειδής, ές</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 72 na letra α · ID 30767</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que tem aparência de bem</p>
    </section>
</article>

<article id="entry-pereira-0073" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαθο-εργία, ας</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 73 na letra α · ID 30768</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀγαθός, ἔργον)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">benefício</p>
    </section>
</article>

<article id="entry-pereira-0074" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαθο-εργός</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 74 na letra α · ID 30769</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que pratica boas acções. οἱ Ἀγαθοεργοί, nome de cinco veteranos que em Esparta desempenhavam certas funções no estrangeiro</p>
    </section>
</article>

<article id="entry-pereira-0075" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαθο-ποιός, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 75 na letra α · ID 30770</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀγαθός, ποιέω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">enfeitor</p>
    </section>
</article>

<article id="entry-pereira-0076" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαθός, ή, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 76 na letra α · ID 30771</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">bom, de boa qualidade. Ι fal. de pass. | nobre | valente | bom, perfeito no seu género | honrado, simples | favorável, propício.  II fal. de coisas | bom, perfeito no seu género | conveniente, útil a || propício, favorável | próspero, feliz.  ΙΙI subst. τὸ ἀγαθόν, bem, benefício; τὰ ἀγαθά, bens, fortuna, poderio</p>
    </section>
</article>

<article id="entry-pereira-0077" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαίομαι</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 77 na letra α · ID 30772</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(só no pres.)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">indignar-se, irritar-se; τι de alguma coisa; τινι contra alguém</p>
    </section>
</article>

<article id="entry-pereira-0078" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγα-κλεής, ές</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 78 na letra α · ID 30773</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἄγαν, κλέος)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">muito ilustre/(gen. ἀγακλῆος)</p>
    </section>
</article>

<article id="entry-pereira-0079" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγα-κλειτός, ή, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 79 na letra α · ID 30774</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">ad muito ilustre, magnífico, preclaro</p>
    </section>
</article>

<article id="entry-pereira-0080" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγα-κλυτός, ή, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 80 na letra α · ID 30775</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">muito ilustre</p>
    </section>
</article>

<article id="entry-pereira-0081" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγα-κτίμενος, η, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 81 na letra α · ID 30776</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἄγαν, κτίμενος)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">bem edificado</p>
    </section>
</article>

<article id="entry-pereira-0082" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-γάλακτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 82 na letra α · ID 30777</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, γάλα)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">destetado || que não tem leite || impróprio para dar leite</p>
    </section>
</article>

<article id="entry-pereira-0083" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγάλλω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 83 na letra α · ID 30778</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(fut. ἀγαλῶ, aor. ἤγηλα, pf. desus.; aor. pass. ἤγάλθην)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">adornar | honrar, enaltecer | méd. gloriar-se de</p>
    </section>
</article>

<article id="entry-pereira-0084" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄγαλμα, ατος</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 84 na letra α · ID 30779</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">objecto de adorno, de orgulho, joia adorno | oferta feita aos deuses | imagem, estátua dos deuses | qualquer estátua ou imagem | monumento, grupo de imagens</p>
    </section>
</article>

<article id="entry-pereira-0085" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαλματο-ποιός, ου</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 85 na letra α · ID 30780</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">escultor</p>
    </section>
</article>

<article id="entry-pereira-0086" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἅγαμαι</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 86 na letra α · ID 30781</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(fut. ἀγάσομαι, aor. ἠγασάμην, aor. pass. ἤγάσθην, mais usado que o méd.)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">admirar | invejar || estar irritado, zangar-se</p>
    </section>
</article>

<article id="entry-pereira-0087" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαμέμνων, ονος</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 87 na letra α · ID 2258</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">Agaménon, filho de Atreu, irmão de Menelau, rei de Micenas e de Argos e chefe dos gregos na guerra contra Tróia. Foi assassinado ao voltar à pátria por sua esposa Clitemnestra</p>
    </section>
</article>

<article id="entry-pereira-0088" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαμένως</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 88 na letra α · ID 30782</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">com assombro, com admiração</p>
    </section>
</article>

<article id="entry-pereira-0089" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-γαμία, ας</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 89 na letra α · ID 30783</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">celibato</p>
    </section>
</article>

<article id="entry-pereira-0090" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-γαμος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 90 na letra α · ID 30784</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">solteiro; γάμος ἄγαμος, matrimónio infeliz</p>
    </section>
</article>

<article id="entry-pereira-0091" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄγαν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 91 na letra α · ID 30785</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">muito, completamente | demasiado</p>
    </section>
</article>

<article id="entry-pereira-0092" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαν-ακτέω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 92 na letra α · ID 30786</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἄγαν e ἀχτός)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(desus.)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">estar fortemente agitado no interior | indignar-se, irritar-se</p>
    </section>
</article>

<article id="entry-pereira-0093" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαν-άκτησις, εως</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 93 na letra α · ID 30787</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">desgosto, motivo de indignação, irritação</p>
    </section>
</article>

<article id="entry-pereira-0094" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαν-ακτητικός, ή, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 94 na letra α · ID 30788</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">irritável, apaixonado</p>
    </section>
</article>

<article id="entry-pereira-0095" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγανακτητός, ή, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 95 na letra α · ID 30789</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que desperta indignação, mal comportado</p>
    </section>
</article>

<article id="entry-pereira-0096" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγάν-νιφος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 96 na letra α · ID 30790</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἄγαν, νίφω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">coberto de abundante neve</p>
    </section>
</article>

<article id="entry-pereira-0097" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγανόρειος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 97 na letra α · ID 30791</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">v. ἀγήνωρ</p>
    </section>
</article>

<article id="entry-pereira-0098" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγανός, ή, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 98 na letra α · ID 30792</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">amável, doce</p>
    </section>
</article>

<article id="entry-pereira-0099" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγανο-φροσύνη</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 99 na letra α · ID 30793</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀγανός, φρήν)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">amabilidade, doçura, gentileza</p>
    </section>
</article>

<article id="entry-pereira-0100" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγανό-φρων, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 100 na letra α · ID 30794</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">amável, doce/(gen. ονος)</p>
    </section>
</article>

<article id="entry-pereira-0101" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγάνωρ, ος</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 101 na letra α · ID 30795</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">v. Ἀγανό-φρων</p>
    </section>
</article>

<article id="entry-pereira-0102" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγάομαι</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 102 na letra α · ID 30796</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(forma ép. seg. de ἄγαμαι, usada soment em ἀγάασθαι, ἀγάασθε, ἠγάασθε)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">admirar, maravilhar-se || Tui, ter inveja</p>
    </section>
</article>

<article id="entry-pereira-0103" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαπάζω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 103 na letra α · ID 30797</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(só no pres. e impf.) med. ἀγαπάζομαι</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">v. Ἀγαπάω</p>
    </section>
</article>

<article id="entry-pereira-0104" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαπάω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 104 na letra α · ID 30798</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(fut. ήσω, aor. ἠγάπησα, pf. ἠγάπηκα, pf. pass. ἠγάπημαι)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">receber ou tratar com amor || amar, querer || preferir | estar contente ou satisfeito de</p>
    </section>
</article>

<article id="entry-pereira-0105" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">*Ἀγάπη, ης</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 105 na letra α · ID 30799</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Observação</div>
        <p class="entry-text">Vocábulo do Novo Testamento</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">afeição, amor fraternal | objecto de afeição | no pl. ágapes, refeições fraternais dos primitivos cristãos</p>
    </section>
</article>

<article id="entry-pereira-0106" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαπ-ήνωρ, ορος</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 106 na letra α · ID 30800</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀγαπάω, ἀνηρ)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que ama à virilidade, viril, corajoso</p>
    </section>
</article>

<article id="entry-pereira-0107" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγάπησις, εως</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 107 na letra α · ID 30801</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">amor, afecto</p>
    </section>
</article>

<article id="entry-pereira-0108" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαπητικός, ή, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 108 na letra α · ID 30802</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">afectuoso</p>
    </section>
</article>

<article id="entry-pereira-0109" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαπητός, ή, όν</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 109 na letra α · ID 30803</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">amado, querido, desejado</p>
    </section>
</article>

<article id="entry-pereira-0110" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀγαπητῶς</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 110 na letra α · ID 30804</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">de maneira a estar satisfeito</p>
    </section>
</article>

<article id="entry-pereira-0111" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγαρος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 111 na letra α · ID 30818</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">disposto de distância em distância; ἄγγαρον πῦρ, fogueiras postas de distância em distância</p></section>
</article>

<article id="entry-pereira-0112" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγά-ρροος, οον</h1><div class="entry-meta"><span>PEREIRA · ordem 112 na letra α · ID 30805</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγαν, ῥέω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de corrente abundante, impetuosa/(contr. ους, ουν)</p></section>
</article>

<article id="entry-pereira-0113" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγά-στονος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 113 na letra α · ID 30807</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγαν, στένω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que geme fortemente</p></section>
</article>

<article id="entry-pereira-0114" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγαστός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 114 na letra α · ID 30808</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγαμαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">digno de admiração, invejável</p></section>
</article>

<article id="entry-pereira-0115" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγαυός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 115 na letra α · ID 30809</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">maravilhoso, admirável || ilustre, nobre</p></section>
</article>

<article id="entry-pereira-0116" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγαυρός, ά, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 116 na letra α · ID 30810</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">esplêndido, soberbo</p></section>
</article>

<article id="entry-pereira-0117" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἀγαυρῶς</h1><div class="entry-meta"><span>PEREIRA · ordem 117 na letra α · ID 30811</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">orgulhosamente</p></section>
</article>

<article id="entry-pereira-0118" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγά-φθεγκτος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 118 na letra α · ID 30812</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγαν, φθέγγομαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que ressoa muito</p></section>
</article>

<article id="entry-pereira-0119" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγάω</h1><div class="entry-meta"><span>PEREIRA · ordem 119 na letra α · ID 30813</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ver. ἄγαμαι admirar-(se) | invejar.</p></section>
</article>

<article id="entry-pereira-0120" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγαρεία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 120 na letra α · ID 30814</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">serviço de tran porte</p></section>
</article>

<article id="entry-pereira-0121" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγαρεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 121 na letra α · ID 30815</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. -εύσω, aor. ἠγγάρευσα, sem pf.)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">constranger</p></section>
</article>

<article id="entry-pereira-0122" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγαρήϊον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 122 na letra α · ID 30816</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">serviço de correios a cavalo</p></section>
</article>

<article id="entry-pereira-0123" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγαρήϊος, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 123 na letra α · ID 30817</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">correio persa</p></section>
</article>

<article id="entry-pereira-0124" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγεῖον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 124 na letra α · ID 30819</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">vaso, recipiente | veia || invólucro, cápsula</p></section>
</article>

<article id="entry-pereira-0125" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγειώδης, ες</h1><div class="entry-meta"><span>PEREIRA · ordem 125 na letra α · ID 30820</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">em forma de vaso</p></section>
</article>

<article id="entry-pereira-0126" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγελία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 126 na letra α · ID 30821</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">notícia, anúncio, mensagem || ordem, mandato</p></section>
</article>

<article id="entry-pereira-0127" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγελια-φόρος, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 127 na letra α · ID 30822</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγγελία, φέρω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">mensageiro | oficial às ordens na corte da Pérsia</p></section>
</article>

<article id="entry-pereira-0128" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγελίη, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 128 na letra α · ID 30823</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. ἀγγελία</p></section>
</article>

<article id="entry-pereira-0129" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγελίης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 129 na letra α · ID 30824</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">mensageiro, legado</p></section>
</article>

<article id="entry-pereira-0130" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγελικός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 130 na letra α · ID 30825</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">do mensageiro</p></section>
</article>

<article id="entry-pereira-0131" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγέλλω</h1><div class="entry-meta"><span>PEREIRA · ordem 131 na letra α · ID 30826</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. ἀγγελῶ, aor. ἤγγειλα, pf.  ἤγγελκα; pass.: fut. ἀγγελθήσομαι, aor.  ἠγγέλθην, pf. ἤγγελμαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">levar uma mensagem, anunciar, proclamar</p></section>
</article>

<article id="entry-pereira-0132" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγγελμα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 132 na letra α · ID 30827</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">mensagem, anúncio, notícia</p></section>
</article>

<article id="entry-pereira-0133" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἀγγελο-ειδής, ές</h1><div class="entry-meta"><span>PEREIRA · ordem 133 na letra α · ID 30828</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">semelhante aos anjos</p></section>
</article>

<article id="entry-pereira-0134" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγγελος, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 134 na letra α · ID 30829</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">mensageiro, legado || mensageiro de Deus, anjo</p></section>
</article>

<article id="entry-pereira-0135" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγι μαχητής, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 135 na letra α · ID 34366</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. ἀγχέμαχος</p></section>
</article>

<article id="entry-pereira-0136" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγγος, ους</h1><div class="entry-meta"><span>PEREIRA · ordem 136 na letra α · ID 30830</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">| vaso, recipiente || urna funerária | canastra onde se colocavam as crianças expostas | guarda-roupa</p></section>
</article>

<article id="entry-pereira-0137" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγγούριον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 137 na letra α · ID 30831</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">pepino</p></section>
</article>

<article id="entry-pereira-0138" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγγουρον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 138 na letra α · ID 30832</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">pepino</p></section>
</article>

<article id="entry-pereira-0139" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγε, ἄγετε</h1><div class="entry-meta"><span>PEREIRA · ordem 139 na letra α · ID 30833</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">interj. eia! vamos</p></section>
</article>

<article id="entry-pereira-0140" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγείρω</h1><div class="entry-meta"><span>PEREIRA · ordem 140 na letra α · ID 31953</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. ἀγερῶ, aor. ἤγειρα, pf. desus. aor. pass. ἠγέρθην, pf. ἀγήγερμαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">reunir, recolher, fazer provisão de || buscar, pedir, mendigar</p></section>
</article>

<article id="entry-pereira-0141" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γείτων, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 141 na letra α · ID 31954</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">sem vizinho, solitário/(gen. ονος)</p></section>
</article>

<article id="entry-pereira-0142" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγελαιο-κομική, ῆς</h1><div class="entry-meta"><span>PEREIRA · ordem 142 na letra α · ID 31955</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">arte de cuidar os rebanhos/(sub. τέχνη)</p></section>
</article>

<article id="entry-pereira-0143" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγελαῖος, α, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 143 na letra α · ID 31956</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que forma um rebanho || que pasta em plena campina || reunido em rebanho. II fig. comum, vulgar</p></section>
</article>

<article id="entry-pereira-0144" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγελαιο-τροφία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 144 na letra α · ID 31957</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">criação de rebarhos</p></section>
</article>

<article id="entry-pereira-0145" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγελαιο-τροφική, ῆς</h1><div class="entry-meta"><span>PEREIRA · ordem 145 na letra α · ID 31958</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">arte de criar os rebanhos/(sub. τέχνη)</p></section>
</article>

<article id="entry-pereira-0146" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγελ-αρχέω</h1><div class="entry-meta"><span>PEREIRA · ordem 146 na letra α · ID 31959</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">guiar um rebanho</p></section>
</article>

<article id="entry-pereira-0147" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγελ-άρχης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 147 na letra α · ID 31960</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγέλη, ἄρχω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">condutor de rebanhos, pastor</p></section>
</article>

<article id="entry-pereira-0148" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γελαστί</h1><div class="entry-meta"><span>PEREIRA · ordem 148 na letra α · ID 31961</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">com seriedade, sem risos</p></section>
</article>

<article id="entry-pereira-0149" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γέλαστος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 149 na letra α · ID 31962</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γελάω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">triste, sombrio, que não se ri | funesto</p></section>
</article>

<article id="entry-pereira-0150" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγελείη, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 150 na letra α · ID 31963</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">um dos epítetos de Minerva | que leva despojos</p></section>
</article>

<article id="entry-pereira-0151" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγέλη, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 151 na letra α · ID 31964</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">rebanho, multidão | no pl. secções em que se dividiam os jovens de Creta desde os 17 anos</p></section>
</article>

<article id="entry-pereira-0152" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγεληδόν</h1><div class="entry-meta"><span>PEREIRA · ordem 152 na letra α · ID 31965</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">em rebanho, em multidão</p></section>
</article>

<article id="entry-pereira-0153" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γελοίως</h1><div class="entry-meta"><span>PEREIRA · ordem 153 na letra α · ID 31966</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">sem riso</p></section>
</article>

<article id="entry-pereira-0154" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγεμονεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 154 na letra α · ID 31967</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. ἡγεμονεύω</p></section>
</article>

<article id="entry-pereira-0155" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἀ-γενεαλόγησος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 155 na letra α · ID 31968</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">sem genealogia</p></section>
</article>

<article id="entry-pereira-0156" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γένεια, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 156 na letra α · ID 31969</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">nascimento obscuro | baixeza de sentimentos</p></section>
</article>

<article id="entry-pereira-0157" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γένειος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 157 na letra α · ID 31970</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">imberbe || juvenil</p></section>
</article>

<article id="entry-pereira-0158" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γενής, ές</h1><div class="entry-meta"><span>PEREIRA · ordem 158 na letra α · ID 31971</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não nascido, não criado || de nascimento obscuro | sem descendência</p></section>
</article>

<article id="entry-pereira-0159" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γενής, ές</h1><div class="entry-meta"><span>PEREIRA · ordem 159 na letra α · ID 31974</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γεννάω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de origem humilde | vulgar, vil</p></section>
</article>

<article id="entry-pereira-0160" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γένητος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 160 na letra α · ID 31972</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γίγομαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">sem nascimento, sem origem || que não existiu, não realizado || que não pode existir, irrealizável</p></section>
</article>

<article id="entry-pereira-0161" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γέννεια</h1><div class="entry-meta"><span>PEREIRA · ordem 161 na letra α · ID 31973</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. ἀ-γένεια</p></section>
</article>

<article id="entry-pereira-0162" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γεννησία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 162 na letra α · ID 31975</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">o facto de não ter sido gerado</p></section>
</article>

<article id="entry-pereira-0163" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γέννητος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 163 na letra α · ID 31976</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">I pass. | não gerado, não criado || de baixo ou vergonhoso nascimento. II act. que não gera, estéril</p></section>
</article>

<article id="entry-pereira-0164" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γεννῶς</h1><div class="entry-meta"><span>PEREIRA · ordem 164 na letra α · ID 31977</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">desleixadamente, vergonhosamente; οὐκ ἀγεννῶς, nobremente</p></section>
</article>

<article id="entry-pereira-0165" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γέραστος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 165 na letra α · ID 31978</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γέρας)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não premiado, não recompensado</p></section>
</article>

<article id="entry-pereira-0166" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγερμός, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 166 na letra α · ID 31979</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγείρω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">colecta, busca || concentração de um exército</p></section>
</article>

<article id="entry-pereira-0167" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγερσις, εως</h1><div class="entry-meta"><span>PEREIRA · ordem 167 na letra α · ID 31980</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγείρω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">reunião, assembleia</p></section>
</article>

<article id="entry-pereira-0168" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγεσίλας e Ἀγησίλαος, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 168 na letra α · ID 2259</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">Agesilau rei de Esparta (397-360 a. J.C.)</p></section>
</article>

<article id="entry-pereira-0169" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγέ-στρατος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 169 na letra α · ID 31982</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω, στρατός)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que conduz ou arrasta um exército</p></section>
</article>

<article id="entry-pereira-0170" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄ-γευστος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 170 na letra α · ID 31983</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γεύω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não gostado, não provado || o que não provou, ou não gosta de || que está em jejum</p></section>
</article>

<article id="entry-pereira-0171" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γεωμέτρητος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 171 na letra α · ID 31984</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que não sabe geometria || ageométrico</p></section>
</article>

<article id="entry-pereira-0172" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γεωργησία ας</h1><div class="entry-meta"><span>PEREIRA · ordem 172 na letra α · ID 31985</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">falto de cultivo</p></section>
</article>

<article id="entry-pereira-0173" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγέωχος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 173 na letra α · ID 31981</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">altivo, nobre | arrogante, altaneiro, insolente</p></section>
</article>

<article id="entry-pereira-0174" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγή, ῆς</h1><div class="entry-meta"><span>PEREIRA · ordem 174 na letra α · ID 31986</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγνυμι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">fragmento, rotura</p></section>
</article>

<article id="entry-pereira-0175" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγη, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 175 na letra α · ID 31987</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγαμαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">admiração, assombro || inveja, ciúme</p></section>
</article>

<article id="entry-pereira-0176" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγηλατέω</h1><div class="entry-meta"><span>PEREIRA · ordem 176 na letra α · ID 31988</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">repelir como um objecto impuro, exilar</p></section>
</article>

<article id="entry-pereira-0177" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγήλατος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 177 na letra α · ID 31989</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que purifica</p></section>
</article>

<article id="entry-pereira-0178" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγημα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 178 na letra α · ID 31990</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">corpo de exército lacedemónio || guarda real macedónica</p></section>
</article>

<article id="entry-pereira-0179" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγηνόρειος, α, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 179 na letra α · ID 31991</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. ἀγήυωρ</p></section>
</article>

<article id="entry-pereira-0180" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγηνορία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 180 na letra α · ID 31992</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγαν, ἀνήρ)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">valor, heroismo || altivez, orgulho</p></section>
</article>

<article id="entry-pereira-0181" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγήνωρ, ορος</h1><div class="entry-meta"><span>PEREIRA · ordem 181 na letra α · ID 31993</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγαν, ἀνήρ)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">viril, corajoso, heróico || arrogante</p></section>
</article>

<article id="entry-pereira-0182" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγήραντος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 182 na letra α · ID 31994</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. Ἀ-γήραος</p></section>
</article>

<article id="entry-pereira-0183" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γήραος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 183 na letra α · ID 31995</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γῆρας)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que não envelhece || imperecedouro</p></section>
</article>

<article id="entry-pereira-0184" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γήρατος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 184 na letra α · ID 31996</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γηράσκω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que não envelhece, imperecedouro</p></section>
</article>

<article id="entry-pereira-0185" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγησί-λαος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 185 na letra α · ID 31997</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἡγέομαι, λαός)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">condutor do povo</p></section>
</article>

<article id="entry-pereira-0186" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγησί-χορος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 186 na letra α · ID 31998</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἡγέομαι, χορός)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">o que dirige o coro ou a dança</p></section>
</article>

<article id="entry-pereira-0187" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγητός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 187 na letra α · ID 31999</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγαμαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">admirável</p></section>
</article>

<article id="entry-pereira-0188" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἁγιάζω</h1><div class="entry-meta"><span>PEREIRA · ordem 188 na letra α · ID 32000</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. -άσω, aor. ἡγίασα, pf. desus, aor. pass. ἡγιάσθην, pf. ἡγίασμαι)</p></section>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">santlificar, consagrar</p></section>
</article>

<article id="entry-pereira-0189" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἁγίασμα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 189 na letra α · ID 32001</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">coisa sagrada | lugar santo || santuário | tabernáculo do templo de Jerusalém | santidade</p></section>
</article>

<article id="entry-pereira-0190" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἁγιασμός, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 190 na letra α · ID 32002</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">santificação, consagração</p></section>
</article>

<article id="entry-pereira-0191" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἁγιαστήριον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 191 na letra α · ID 32003</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">santuário</p></section>
</article>

<article id="entry-pereira-0192" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγίζω</h1><div class="entry-meta"><span>PEREIRA · ordem 192 na letra α · ID 32004</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἅγιος)</p></section>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(só pres. e impf.: ἥγιζον, part. aor. pass. ἁγισθείς)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">consagrar, oferecer em sacrifício</p></section>
</article>

<article id="entry-pereira-0193" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγινέω</h1><div class="entry-meta"><span>PEREIRA · ordem 193 na letra α · ID 32005</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(só no pres. e impf.: ἠγίνεον</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">conduzir, levar || fazer transportar</p></section>
</article>

<article id="entry-pereira-0194" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἅγιος, α, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 194 na letra α · ID 32006</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">santo, augusto, puro</p></section>
</article>

<article id="entry-pereira-0195" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἁγιότης, ητος</h1><div class="entry-meta"><span>PEREIRA · ordem 195 na letra α · ID 32007</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">santidade</p></section>
</article>

<article id="entry-pereira-0196" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἆγις, ιδος</h1><div class="entry-meta"><span>PEREIRA · ordem 196 na letra α · ID 2260</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">Ágis, nome de muitos reis de Esparta, dos quais o mais famoso foi Ágis III que reinou de 244 a 235 antes de Cristo</p></section>
</article>

<article id="entry-pereira-0197" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγιστεία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 197 na letra α · ID 32008</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἁγιστεύω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">cerimónia sagrada, culto, devoção</p></section>
</article>

<article id="entry-pereira-0198" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγιστεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 198 na letra α · ID 32009</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(só pres. e part. aor.)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">cumprir um dever religioso | purificar | viver castamente</p></section>
</article>

<article id="entry-pereira-0199" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἁγιωσύνη, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 199 na letra α · ID 32010</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">santidade</p></section>
</article>

<article id="entry-pereira-0200" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκάζομαι</h1><div class="entry-meta"><span>PEREIRA · ordem 200 na letra α · ID 32011</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(só impf. ἠγκάζοντο, e aor. ἠγκάσσατο)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">tomar ou levantar nos seus braços</p></section>
</article>

<article id="entry-pereira-0201" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγκαθεν</h1><div class="entry-meta"><span>PEREIRA · ordem 201 na letra α · ID 32012</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">apoiando-se nos cotovelos || tomando nos seus braços</p></section>
</article>

<article id="entry-pereira-0202" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκάλη, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 202 na letra α · ID 32013</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">braço recurvado, cotovelo || tudo o que envolve, abraça aperta, πετραία ἀγκάλη, gruta</p></section>
</article>

<article id="entry-pereira-0203" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκαλίζομαι</h1><div class="entry-meta"><span>PEREIRA · ordem 203 na letra α · ID 32014</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(só pres., aor. ἡγχλισάμην, pf. ἤγκάλισμαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">abraçar ser abraçado</p></section>
</article>

<article id="entry-pereira-0204" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκαλίς, ίδος</h1><div class="entry-meta"><span>PEREIRA · ordem 204 na letra α · ID 32015</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">braço recurvado, cotovelo | braçada</p></section>
</article>

<article id="entry-pereira-0205" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκάς</h1><div class="entry-meta"><span>PEREIRA · ordem 205 na letra α · ID 32016</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">em braços</p></section>
</article>

<article id="entry-pereira-0206" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκιστρεία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 206 na letra α · ID 32017</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">pesca ao anzol</p></section>
</article>

<article id="entry-pereira-0207" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκιστρευτικός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 207 na letra α · ID 32018</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que diz respeito à pesca ao anzol</p></section>
</article>

<article id="entry-pereira-0208" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκιστρεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 208 na letra α · ID 32019</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">pescar ao anzol</p></section>
</article>

<article id="entry-pereira-0209" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκιστρο-ειδής, ές</h1><div class="entry-meta"><span>PEREIRA · ordem 209 na letra α · ID 32020</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">em forma de anzol</p></section>
</article>

<article id="entry-pereira-0210" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγκίστρον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 210 na letra α · ID 32021</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">gancho do anzol, anzol | gancho do fuso</p></section>
</article>

<article id="entry-pereira-0211" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκιστρόω</h1><div class="entry-meta"><span>PEREIRA · ordem 211 na letra α · ID 32022</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">recurvar em forma de anzol | apanhar ao anzol</p></section>
</article>

<article id="entry-pereira-0212" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκκών, ῶνος</h1><div class="entry-meta"><span>PEREIRA · ordem 212 na letra α · ID 32037</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">cotovelo, braço | curva, ângulo, sinuosidade | articulação | garganta, desfiladeiro</p></section>
</article>

<article id="entry-pereira-0213" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγκοινα, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 213 na letra α · ID 32023</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. ἀγκάλη</p></section>
</article>

<article id="entry-pereira-0214" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκος, ους</h1><div class="entry-meta"><span>PEREIRA · ordem 214 na letra α · ID 32024</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">vale</p></section>
</article>

<article id="entry-pereira-0215" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγκύλη, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 215 na letra α · ID 32025</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">aderência, correia para lançar o dardo || dardo || corda de arco || cabo, amarra de navio || gancho na extremidade de uma cadeia</p></section>
</article>

<article id="entry-pereira-0216" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκυλητός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 216 na letra α · ID 32027</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que se lança como um dardo</p></section>
</article>

<article id="entry-pereira-0217" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκύλιον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 217 na letra α · ID 32026</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">escudo sagrado</p></section>
</article>

<article id="entry-pereira-0218" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκυλο-μήτης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 218 na letra α · ID 32028</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγκ., μῆτις)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">astuto, manhoso, de intenções ocultas</p></section>
</article>

<article id="entry-pereira-0219" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκυλό-πους, ουν</h1><div class="entry-meta"><span>PEREIRA · ordem 219 na letra α · ID 32029</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de pés retorcidos/(gen. ποδος )</p></section>
</article>

<article id="entry-pereira-0220" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκύλος, η, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 220 na letra α · ID 32030</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">dobrado, recurvado, retorcido | embrulhado | astuto</p></section>
</article>

<article id="entry-pereira-0221" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκυλό-τοξος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 221 na letra α · ID 32031</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de arco recurvado</p></section>
</article>

<article id="entry-pereira-0222" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκυλο-χείλης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 222 na letra α · ID 32032</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγκ., χεῖλος)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de bico recurvado</p></section>
</article>

<article id="entry-pereira-0223" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκυλόω</h1><div class="entry-meta"><span>PEREIRA · ordem 223 na letra α · ID 32033</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγκύλος,)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">dobrar, recurvar; ἠγκυλωμένος ὄνυχας, de unhas aduncas</p></section>
</article>

<article id="entry-pereira-0224" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκυλωτός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 224 na letra α · ID 32034</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">lançado por uma correia</p></section>
</article>

<article id="entry-pereira-0225" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγκυρουχία</h1><div class="entry-meta"><span>PEREIRA · ordem 225 na letra α · ID 32036</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγκ., ἔχ)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ancoragem de um navio</p></section>
</article>

<article id="entry-pereira-0226" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγκυύυρα, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 226 na letra α · ID 32035</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">s. f âncora; ἄγκυραν βάλλεσθαι, καθιέναι, μεθέναι, lançar âncora; ἀνασπᾶν, αἴρεσθαι, levantar âncora.</p></section>
</article>

<article id="entry-pereira-0227" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλα-έθειρος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 227 na letra α · ID 32038</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de brilhante cabeleira</p></section>
</article>

<article id="entry-pereira-0228" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλάϊα, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 228 na letra α · ID 32039</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">brilho, beleza, adorno orgulho, vaidade || triunfo, gozo</p></section>
</article>

<article id="entry-pereira-0229" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαΐζω</h1><div class="entry-meta"><span>PEREIRA · ordem 229 na letra α · ID 32040</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(só pres., impf. ἠγλάϊζον e aor. ἠγλάϊσα; p.f.pass. ἠγλάϊσμαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">adornar, lustrar</p></section>
</article>

<article id="entry-pereira-0230" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλάϊσμα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 230 na letra α · ID 32041</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">brilho, beleza, adorno</p></section>
</article>

<article id="entry-pereira-0231" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαϊστός, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 231 na letra α · ID 32042</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">adorno, esplendor</p></section>
</article>

<article id="entry-pereira-0232" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαό-γυιος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 232 na letra α · ID 32043</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγλ., γυῖον)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de belos membros</p></section>
</article>

<article id="entry-pereira-0233" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαό-δενδρος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 233 na letra α · ID 32044</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">plantado de belas árvores</p></section>
</article>

<article id="entry-pereira-0234" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαό-δωρος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 234 na letra α · ID 32045</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ., δῶρον)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que dá bons presentes</p></section>
</article>

<article id="entry-pereira-0235" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαό-θρονος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 235 na letra α · ID 32046</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">em magnífico trono</p></section>
</article>

<article id="entry-pereira-0236" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαό-καρπος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 236 na letra α · ID 32047</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de esplêndidos frutos</p></section>
</article>

<article id="entry-pereira-0237" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαό-κολπος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 237 na letra α · ID 32048</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de belos seios</p></section>
</article>

<article id="entry-pereira-0238" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαό-κουρος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 238 na letra α · ID 32049</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de brilhante juventude</p></section>
</article>

<article id="entry-pereira-0239" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαό-κωμος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 239 na letra α · ID 32050</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ., κῶμος)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que tem a alegria ou o brilho de festa</p></section>
</article>

<article id="entry-pereira-0240" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 240 na letra α · ID 32051</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">brilhante, esplêndido | nobre, ilustre</p></section>
</article>

<article id="entry-pereira-0241" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλαο-τριαίνας, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 241 na letra α · ID 32052</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de brilhante tridente</p></section>
</article>

<article id="entry-pereira-0242" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγλα-ώψ, ῶπος</h1><div class="entry-meta"><span>PEREIRA · ordem 242 na letra α · ID 32053</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de olhos brilhantes || de aspecto formoso</p></section>
</article>

<article id="entry-pereira-0243" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γλευκής, ές</h1><div class="entry-meta"><span>PEREIRA · ordem 243 na letra α · ID 32054</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">amargo, acre</p></section>
</article>

<article id="entry-pereira-0244" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γλωσσία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 244 na letra α · ID 32055</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">falha de eloguência</p></section>
</article>

<article id="entry-pereira-0245" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γλωσσος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 245 na letra α · ID 32056</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">sem língua | impedido de falar, mudo || que fala uma linguagem bárbara, difícil de entender</p></section>
</article>

<article id="entry-pereira-0246" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγμα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 246 na letra α · ID 32057</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγνυμι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">fragmento</p></section>
</article>

<article id="entry-pereira-0247" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγμός, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 247 na letra α · ID 32058</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">fractura | lugar escarpado, abrupto</p></section>
</article>

<article id="entry-pereira-0248" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄ-γναμπτος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 248 na letra α · ID 32059</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γνάμπτω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">inflexível</p></section>
</article>

<article id="entry-pereira-0249" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄ-γναπτος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 249 na letra α · ID 33188</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γνάπτω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não pisado, não cardado || novo |não purificado</p></section>
</article>

<article id="entry-pereira-0250" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἄγναφος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 250 na letra α · ID 33189</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. Ἄ-γναπτος</p></section>
</article>

<article id="entry-pereira-0251" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγνεία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 251 na letra α · ID 33190</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἁγνός)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">pureza, castidade || purificação, consagração</p></section>
</article>

<article id="entry-pereira-0252" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἅγνευμα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 252 na letra α · ID 33191</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">castidade</p></section>
</article>

<article id="entry-pereira-0253" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἅγνευτήριον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 253 na letra α · ID 33192</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">lugar de purificação</p></section>
</article>

<article id="entry-pereira-0254" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγνευτικός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 254 na letra α · ID 33193</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que conserva à castidade | próprio para purificar; τὸ ἁγνευτικόν, sacrifício expiatório, purificação</p></section>
</article>

<article id="entry-pereira-0255" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγνεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 255 na letra α · ID 33194</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ser puro, conservar-se puro | com inf. olhar como dever sagrado | purificar</p></section>
</article>

<article id="entry-pereira-0256" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγνίζω</h1><div class="entry-meta"><span>PEREIRA · ordem 256 na letra α · ID 33195</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">purificar, lavar, expiar | consagrar, santificar || oferecer um sacrifício por um morto</p></section>
</article>

<article id="entry-pereira-0257" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἅγνισμα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 257 na letra α · ID 33196</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">vitima expiatória</p></section>
</article>

<article id="entry-pereira-0258" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγνισμός, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 258 na letra α · ID 33197</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">purificação</p></section>
</article>

<article id="entry-pereira-0259" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγνίτης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 259 na letra α · ID 33198</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que purifica</p></section>
</article>

<article id="entry-pereira-0260" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνοέω</h1><div class="entry-meta"><span>PEREIRA · ordem 260 na letra α · ID 33199</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. -ήσω ou -ήσομαι, impf. ἠγνόουν, aor. pass. ἠγνοήθην, pf. ἠγνόημαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">desconhecer, ignorar | não conhecer || enganar-se, equivocar-se</p></section>
</article>

<article id="entry-pereira-0261" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνόημα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 261 na letra α · ID 33200</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ignorância | falta cometida por ignorância</p></section>
</article>

<article id="entry-pereira-0262" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνοητικός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 262 na letra α · ID 33201</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que provém da ignorância</p></section>
</article>

<article id="entry-pereira-0263" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄ-γνοια, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 263 na letra α · ID 33202</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ignorância | descuido, erro</p></section>
</article>

<article id="entry-pereira-0264" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγνοιέω</h1><div class="entry-meta"><span>PEREIRA · ordem 264 na letra α · ID 33203</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. ἀγνοέω</p></section>
</article>

<article id="entry-pereira-0265" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνοούντως</h1><div class="entry-meta"><span>PEREIRA · ordem 265 na letra α · ID 33204</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">por ignorância</p></section>
</article>

<article id="entry-pereira-0266" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγνό-ρυτος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 266 na letra α · ID 33205</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἁγνός, ῥέω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de corrente transparente</p></section>
</article>

<article id="entry-pereira-0267" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγνός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 267 na letra α · ID 33206</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">puro, santo, casto | limpo, sem mancha, incontaminado</p></section>
</article>

<article id="entry-pereira-0268" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">*Ἁγνότης, ητος</h1><div class="entry-meta"><span>PEREIRA · ordem 268 na letra α · ID 33207</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Observação</div><p class="entry-text">Vocábulo do Novo Testamento</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">pureza, castidade</p></section>
</article>

<article id="entry-pereira-0269" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγνυμι</h1><div class="entry-meta"><span>PEREIRA · ordem 269 na letra α · ID 33208</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. ἄξω, aor. ἔαξα, aor. 2 pass. ἐάγην)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">quebrar, despedaçar</p></section>
</article>

<article id="entry-pereira-0270" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγνωμονεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 270 na letra α · ID 33209</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. Ἀ-γνωμονέω</p></section>
</article>

<article id="entry-pereira-0271" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνωμονέω</h1><div class="entry-meta"><span>PEREIRA · ordem 271 na letra α · ID 33210</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γνώμη)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">dar provas de ignorância, de ingratidão | proceder irreflectidamente, com arrebatação || proceder de má-fé</p></section>
</article>

<article id="entry-pereira-0272" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνωμόνως, αν</h1><div class="entry-meta"><span>PEREIRA · ordem 272 na letra α · ID 33211</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">sem reflexão, imprudentemente</p></section>
</article>

<article id="entry-pereira-0273" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνωμοσύη, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 273 na letra α · ID 33212</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ignorância || falta de juízo | dureza, insensibilidade | equivocação || ingratidão</p></section>
</article>

<article id="entry-pereira-0274" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνώμων, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 274 na letra α · ID 33213</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">falto de juízo, irreflectido || obstinado, duro, ingrato || ignorante/(gen. ονος)</p></section>
</article>

<article id="entry-pereira-0275" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνώς, ῶτος</h1><div class="entry-meta"><span>PEREIRA · ordem 275 na letra α · ID 33214</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γιγνώσκω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não conhecido, || ignorante, desconhecedor || ininteligível, obscuro</p></section>
</article>

<article id="entry-pereira-0276" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἁγνῶς</h1><div class="entry-meta"><span>PEREIRA · ordem 276 na letra α · ID 33215</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">puramente, santamente</p></section>
</article>

<article id="entry-pereira-0277" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γνωσία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 277 na letra α · ID 33216</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γιγνώσχω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ignorância | obscuridade</p></section>
</article>

<article id="entry-pereira-0278" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γόνατος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 278 na letra α · ID 33219</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">sem joelhos || sem junturas, sem articulações, sem nós</p></section>
</article>

<article id="entry-pereira-0279" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γονία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 279 na letra α · ID 33220</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γίγνομαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">esterilidade, infecundidade</p></section>
</article>

<article id="entry-pereira-0280" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄ-γονος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 280 na letra α · ID 33221</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γίγνομαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não nascido || estéril</p></section>
</article>

<article id="entry-pereira-0281" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄ-γοος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 281 na letra α · ID 33222</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">sem gemidos, não chorado</p></section>
</article>

<article id="entry-pereira-0282" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορά, ᾶς</h1><div class="entry-meta"><span>PEREIRA · ordem 282 na letra α · ID 2261</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">Ágora, cidade da Trácia no (Quersoneso</p></section>
</article>

<article id="entry-pereira-0283" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορά, ᾶς</h1><div class="entry-meta"><span>PEREIRA · ordem 283 na letra α · ID 33223</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγείρω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">reunião assembleia, comunidade reunida | discurso perante a assembleia | praça pública | mercado | mercadorias, géneros, víveres</p></section>
</article>

<article id="entry-pereira-0284" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγοράζω</h1><div class="entry-meta"><span>PEREIRA · ordem 284 na letra α · ID 33224</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγορά)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ir ao mercado, permanecer no mercado, comprar no mercado | tomar parte nas discussões na praça pública</p></section>
</article>

<article id="entry-pereira-0285" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγοραῖος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 285 na letra α · ID 33225</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que diz respeito ao mercado, à praça pública || que está à frente do mercado || orador político | ocioso, vagabundo, que passa os dias nas praças || comerciante | tendeiro</p></section>
</article>

<article id="entry-pereira-0286" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγοραίως</h1><div class="entry-meta"><span>PEREIRA · ordem 286 na letra α · ID 33226</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">em estilo forense, declamatório, trivial</p></section>
</article>

<article id="entry-pereira-0287" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορα-νομέω</h1><div class="entry-meta"><span>PEREIRA · ordem 287 na letra α · ID 33227</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγορά, νόμος)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ser edil</p></section>
</article>

<article id="entry-pereira-0288" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορα-νομία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 288 na letra α · ID 33228</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">cargo de edil</p></section>
</article>

<article id="entry-pereira-0289" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορα-νομικός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 289 na letra α · ID 33229</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">próprio do edil</p></section>
</article>

<article id="entry-pereira-0290" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορα-νόμος, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 290 na letra α · ID 33230</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">na Grécia, inspector de mercados || em Roma, edil</p></section>
</article>

<article id="entry-pereira-0291" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγοράομαι</h1><div class="entry-meta"><span>PEREIRA · ordem 291 na letra α · ID 33231</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(só nestas formas: pres. 2 pl. ἀγοράασθε, inf. ἀγορᾶσθαι; impf. 2 sg. ἠγορῶ; 2 pl. ἠγοράασθε; 2 pl. ἠγορόωντο; aor. 3 sg. ἠγορήσατο)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">tomar parte numa reunião || arengar, discursar || falar, dizer</p></section>
</article>

<article id="entry-pereira-0292" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγόρασις, εως</h1><div class="entry-meta"><span>PEREIRA · ordem 292 na letra α · ID 33232</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">compra</p></section>
</article>

<article id="entry-pereira-0293" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγόρασμα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 293 na letra α · ID 33233</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(só no pl.)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">s n mercancias, géneros</p></section>
</article>

<article id="entry-pereira-0294" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγοραστής, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 294 na letra α · ID 33234</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">escravo encarregado de fazer as compras no mercado, comprador</p></section>
</article>

<article id="entry-pereira-0295" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγοραστικός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 295 na letra α · ID 33235</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que diz respeito ao comércio, comércio</p></section>
</article>

<article id="entry-pereira-0296" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 296 na letra α · ID 33236</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγορά)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">falar em público || falar, dizer | declarar, anunciar, proclamar</p></section>
</article>

<article id="entry-pereira-0297" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορῆθεν, αν</h1><div class="entry-meta"><span>PEREIRA · ordem 297 na letra α · ID 33237</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">da assembleia</p></section>
</article>

<article id="entry-pereira-0298" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορῆνδε</h1><div class="entry-meta"><span>PEREIRA · ordem 298 na letra α · ID 33238</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">para a assembleia, na assembleia</p></section>
</article>

<article id="entry-pereira-0299" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορητής, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 299 na letra α · ID 33239</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que fala em público, orador</p></section>
</article>

<article id="entry-pereira-0300" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγορητύς, ύος</h1><div class="entry-meta"><span>PEREIRA · ordem 300 na letra α · ID 33240</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">eloquência, talento oratório</p></section>
</article>

<article id="entry-pereira-0301" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγορος, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 301 na letra α · ID 33241</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">assembleia, reunião</p></section>
</article>

<article id="entry-pereira-0302" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἅγος, ους</h1><div class="entry-meta"><span>PEREIRA · ordem 302 na letra α · ID 33242</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">crime, sacrilégio || criminoso, ímpio, sacrilego || expiação || temor dos deuses, temor religioso</p></section>
</article>

<article id="entry-pereira-0303" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγος, ους</h1><div class="entry-meta"><span>PEREIRA · ordem 303 na letra α · ID 33243</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">crime, sacrilégio || criminoso, ímpio, sacrilego || expiação || temor dos deuses, temor religioso</p></section>
</article>

<article id="entry-pereira-0304" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγός, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 304 na letra α · ID 33244</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">condutor, chefe</p></section>
</article>

<article id="entry-pereira-0305" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγοστός, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 305 na letra α · ID 33245</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">a concavidade da mão || braço recurvado, abraço</p></section>
</article>

<article id="entry-pereira-0306" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀγ-πλήξ, ῆγος</h1><div class="entry-meta"><span>PEREIRA · ordem 306 na letra α · ID 32501</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">f. v. Ἄ-πληκτος</p></section>
</article>

<article id="entry-pereira-0307" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγρα, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 307 na letra α · ID 33246</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">caça || presa, despojos</p></section>
</article>

<article id="entry-pereira-0308" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γραμματία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 308 na letra α · ID 33247</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γράμμα)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ignorância</p></section>
</article>

<article id="entry-pereira-0309" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γράμματος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 309 na letra α · ID 33248</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ignorante, analfabeto | não escrito | incapaz de pronunciar sons articulados</p></section>
</article>

<article id="entry-pereira-0310" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄ-γραπτος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 310 na letra α · ID 33249</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γράφω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não escrito, oral</p></section>
</article>

<article id="entry-pereira-0311" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρ-αυλέω</h1><div class="entry-meta"><span>PEREIRA · ordem 311 na letra α · ID 33250</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγρός, αὐλή)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">viver no campo</p></section>
</article>

<article id="entry-pereira-0312" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγρ-αυλος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 312 na letra α · ID 33251</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que vive ou passa as noites nos campos || próprio dos campos, campestre</p></section>
</article>

<article id="entry-pereira-0313" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄ-γραφος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 313 na letra α · ID 33252</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γράφω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não escrito, verbal || não pintado</p></section>
</article>

<article id="entry-pereira-0314" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρεῖος, α, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 314 na letra α · ID 33253</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">campestre || grosseiro, tosco</p></section>
</article>

<article id="entry-pereira-0315" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρέμων, ονος</h1><div class="entry-meta"><span>PEREIRA · ordem 315 na letra α · ID 33254</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">lança</p></section>
</article>

<article id="entry-pereira-0316" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγρευμα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 316 na letra α · ID 33255</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγρα)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">caça, despojos || rede, armadilha</p></section>
</article>

<article id="entry-pereira-0317" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρεύς, έως</h1><div class="entry-meta"><span>PEREIRA · ordem 317 na letra α · ID 33256</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">caçador, pescador</p></section>
</article>

<article id="entry-pereira-0318" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρευτήρ, ῆρος</h1><div class="entry-meta"><span>PEREIRA · ordem 318 na letra α · ID 33257</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. Ἀγρευτής</p></section>
</article>

<article id="entry-pereira-0319" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρευτής, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 319 na letra α · ID 33258</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">caçador</p></section>
</article>

<article id="entry-pereira-0320" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρευτικός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 320 na letra α · ID 33259</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">bom para a caça de..</p></section>
</article>

<article id="entry-pereira-0321" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 321 na letra α · ID 33260</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">caçar | pescar || méd. apoderar-se de</p></section>
</article>

<article id="entry-pereira-0322" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρέω</h1><div class="entry-meta"><span>PEREIRA · ordem 322 na letra α · ID 33261</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(só no pres.)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">tomar, poderar-se de | imper. hom. ἄγρει, ἀγρεῖτε, eia! vamos! pronto!</p></section>
</article>

<article id="entry-pereira-0323" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγριαίνω</h1><div class="entry-meta"><span>PEREIRA · ordem 323 na letra α · ID 33262</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. ἀνῶ, aor. ἠγρίανα, pf. desus.)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ser selvagem | irritar-se, enfurecer-se, fazer-se feroz | enfurecer, irritar</p></section>
</article>

<article id="entry-pereira-0324" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρι-έλαιος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 324 na letra α · ID 33263</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγρ., ἐλαία)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de oliveiras selvagens</p></section>
</article>

<article id="entry-pereira-0325" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρι-έλαιος, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 325 na letra α · ID 33264</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">oliveira selvagem</p></section>
</article>

<article id="entry-pereira-0326" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγριο-ποιός, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 326 na letra α · ID 33265</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que cria caracteres selvagens</p></section>
</article>

<article id="entry-pereira-0327" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγριος, α, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 327 na letra α · ID 33266</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγρός)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que vive nos campos, rústico || cruel, feroz, selvagem</p></section>
</article>

<article id="entry-pereira-0328" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγριότης, ητος</h1><div class="entry-meta"><span>PEREIRA · ordem 328 na letra α · ID 33267</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">natureza inculta, selvagem || crueldade, ferocidade</p></section>
</article>

<article id="entry-pereira-0329" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγριό-φωνος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 329 na letra α · ID 33268</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγρ., φωνή)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de voz ou idioma selvagem</p></section>
</article>

<article id="entry-pereira-0330" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγριόω</h1><div class="entry-meta"><span>PEREIRA · ordem 330 na letra α · ID 33269</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">enfurecer, irritar, exasperar contra | na pass. ser selvagem, cruel</p></section>
</article>

<article id="entry-pereira-0331" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρι-ωπός, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 331 na letra α · ID 33270</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγρ., ὥψ)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de olhar feroz</p></section>
</article>

<article id="entry-pereira-0332" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρίως</h1><div class="entry-meta"><span>PEREIRA · ordem 332 na letra α · ID 33271</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">duma maneira selvagem, de modo cruel</p></section>
</article>

<article id="entry-pereira-0333" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρο-βότης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 333 na letra α · ID 33272</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγρός, βόσκω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">pastor</p></section>
</article>

<article id="entry-pereira-0334" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρο-γείτων, ονος</h1><div class="entry-meta"><span>PEREIRA · ordem 334 na letra α · ID 33273</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">vizinho de campo</p></section>
</article>

<article id="entry-pereira-0335" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρόθεν</h1><div class="entry-meta"><span>PEREIRA · ordem 335 na letra α · ID 33274</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">vindo do campo</p></section>
</article>

<article id="entry-pereira-0336" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγρ-οικία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 336 na letra α · ID 33275</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">casa de campo | costumes rústicos || campo, herdade</p></section>
</article>

<article id="entry-pereira-0337" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγυιά, ᾶς</h1><div class="entry-meta"><span>PEREIRA · ordem 337 na letra α · ID 34344</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">rua, caminho, vereda | região, país</p></section>
</article>

<article id="entry-pereira-0338" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγυιάτης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 338 na letra α · ID 34345</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">protector de caminhos (Apolo)</p></section>
</article>

<article id="entry-pereira-0339" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγυιεύς, έως</h1><div class="entry-meta"><span>PEREIRA · ordem 339 na letra α · ID 34346</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">protector de caminhos (Apolo) | altar de Apolo às portas de casa</p></section>
</article>

<article id="entry-pereira-0340" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γυμνασία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 340 na letra α · ID 34347</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γύμναστος)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">falta de exercício | ociosidade</p></section>
</article>

<article id="entry-pereira-0341" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γύμναστος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 341 na letra α · ID 34348</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γυμνάζω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não exercitado, sem experiência | não fatigado, não provado pelo sofrimento</p></section>
</article>

<article id="entry-pereira-0342" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γύναικος, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 342 na letra α · ID 34349</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γυνή)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não casado, solteiro</p></section>
</article>

<article id="entry-pereira-0343" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄ-γυνος, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 343 na letra α · ID 34350</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ, γυνή)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">não casado, solteiro</p></section>
</article>

<article id="entry-pereira-0344" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἄγυρις, εως</h1><div class="entry-meta"><span>PEREIRA · ordem 344 na letra α · ID 34351</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγορά)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">assembleia, multidão</p></section>
</article>

<article id="entry-pereira-0345" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγυρμός, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 345 na letra α · ID 34352</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγείρω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">colecta || reunião, assembleia</p></section>
</article>

<article id="entry-pereira-0346" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγυρτάζω</h1><div class="entry-meta"><span>PEREIRA · ordem 346 na letra α · ID 34353</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγείρω)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">recolher, buscar, mendigar</p></section>
</article>

<article id="entry-pereira-0347" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγυρτεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 347 na letra α · ID 34354</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">v. Ἀγυρτάζω</p></section>
</article>

<article id="entry-pereira-0348" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγύρτης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 348 na letra α · ID 34355</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">mendigo, que recolhe esmola || adivinho, charlatão, que lê a sina</p></section>
</article>

<article id="entry-pereira-0349" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγυρτικός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 349 na letra α · ID 34356</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">próprio de charlatão</p></section>
</article>

<article id="entry-pereira-0350" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγύρτρια, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 350 na letra α · ID 34357</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de ἀγύρτης</p></section>
</article>

<article id="entry-pereira-0351" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχέ-μαχος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 351 na letra α · ID 34358</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, μάχομαι)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">que combate de perto, corpo a corpo | que serve para combater de perto</p></section>
</article>

<article id="entry-pereira-0352" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχι</h1><div class="entry-meta"><span>PEREIRA · ordem 352 na letra α · ID 34359</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">e prep. perto, de perto || imediatamente</p></section>
</article>

<article id="entry-pereira-0353" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-αλος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 353 na letra α · ID 34360</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, ἄλς)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">rodeado por mar | marítimo, vizinho ao mar</p></section>
</article>

<article id="entry-pereira-0354" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχι-βαθής, ές</h1><div class="entry-meta"><span>PEREIRA · ordem 354 na letra α · ID 34361</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, βάθος)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">profundo junto à costa || escarpado</p></section>
</article>

<article id="entry-pereira-0355" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχι-γείτων, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 355 na letra α · ID 34362</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">vizinho</p></section>
</article>

<article id="entry-pereira-0356" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-θεος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 356 na letra α · ID 34363</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">semelhante aos deuses || semi-deus</p></section>
</article>

<article id="entry-pereira-0357" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-θυρος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 357 na letra α · ID 34364</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, θύρα)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">de perto da porta, vizinho</p></section>
</article>

<article id="entry-pereira-0358" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-κρημνος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 358 na letra α · ID 34365</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">próximo de uma ribanceira</p></section>
</article>

<article id="entry-pereira-0359" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-μολος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 359 na letra α · ID 34367</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, μολεῖν)</p></section>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">vizinho, próximo</p></section>
</article>

<article id="entry-pereira-0360" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-νοια, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 360 na letra α · ID 34368</span></div></div><div class="source-tag">PEREIRA</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">presença de ânimo, vivacidade do espírito, talento</p></section>
</article>

<article id="entry-pereira-0361" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-νοος, οον</h1><div class="entry-meta"><span>PEREIRA · ordem 361 na letra α · ID 34369</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> agudo, inteligento/(contr. ους, ουν)</p></section></article>
<article id="entry-pereira-0362" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-πλοος, οον</h1><div class="entry-meta"><span>PEREIRA · ordem 362 na letra α · ID 34370</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, πλέω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> que navega perto, de curta navegação/(contr. ους, ουν)</p></section></article>
<article id="entry-pereira-0363" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-πολις, εως, ou τος</h1><div class="entry-meta"><span>PEREIRA · ordem 363 na letra α · ID 34371</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> vizinho à cidade</p></section></article>
<article id="entry-pereira-0364" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχίσης, ουs</h1><div class="entry-meta"><span>PEREIRA · ordem 364 na letra α · ID 2262</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> m. Anquises, pai de Eneias</p></section></article>
<article id="entry-pereira-0365" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-σπορος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 365 na letra α · ID 34372</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> consanguíneo, parente</p></section></article>
<article id="entry-pereira-0366" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχιστεία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 366 na letra α · ID 34373</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> familiaridade, intimidade, parentesco próximo | direito à herança</p></section></article>
<article id="entry-pereira-0367" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχιστεῖον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 367 na letra α · ID 34374</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> v. Ἀγχιστεία</p></section></article>
<article id="entry-pereira-0368" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχιστεύς, έως</h1><div class="entry-meta"><span>PEREIRA · ordem 368 na letra α · ID 34375</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> parente próximo</p></section></article>
<article id="entry-pereira-0369" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχιστεύω</h1><div class="entry-meta"><span>PEREIRA · ordem 369 na letra α · ID 34376</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">ser vizinho de || ser parente próximo de</p></section></article>
<article id="entry-pereira-0370" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχιστήρ, ῆρος</h1><div class="entry-meta"><span>PEREIRA · ordem 370 na letra α · ID 34377</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> cúmplice, causa de</p></section></article>
<article id="entry-pereira-0371" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχιστῖνος, η, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 371 na letra α · ID 34378</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> muito próximo, ou muito chegado a outro</p></section></article>
<article id="entry-pereira-0372" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἄγχιστος, η, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 372 na letra α · ID 34379</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> muito próximo | parente muito próximo</p></section></article>
<article id="entry-pereira-0373" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-στροφος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 373 na letra α · ID 34380</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, στρέφω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> que se volta rapidamente</p></section></article>
<article id="entry-pereira-0374" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχι-τέρμων, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 374 na letra α · ID 34381</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, τέρμα)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> limítrofe, vizinho/(gen. ονος)</p></section></article>
<article id="entry-pereira-0375" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχί-τοκος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 375 na letra α · ID 34382</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, τίκτω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> que está muito próximo de dar à luz</p></section></article>
<article id="entry-pereira-0376" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχόθεν</h1><div class="entry-meta"><span>PEREIRA · ordem 376 na letra α · ID 34383</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> de perto</p></section></article>
<article id="entry-pereira-0377" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχόθι</h1><div class="entry-meta"><span>PEREIRA · ordem 377 na letra α · ID 34384</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> perto de, junto</p></section></article>
<article id="entry-pereira-0378" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχόνη, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 378 na letra α · ID 34385</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> acção de estrangular, de enforcar | corda de enforcamento</p></section></article>
<article id="entry-pereira-0379" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχόνιος, α, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 379 na letra α · ID 34386</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> que serve para estrangular</p></section></article>
<article id="entry-pereira-0380" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχοτάτω</h1><div class="entry-meta"><span>PEREIRA · ordem 380 na letra α · ID 34387</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> muitíssimo mais perto</p></section></article>
<article id="entry-pereira-0381" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχότερες, α, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 381 na letra α · ID 34388</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> mais próximo</p></section></article>
<article id="entry-pereira-0382" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχοῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 382 na letra α · ID 34389</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> e prep. perto de, junto de | semelhantementes.</p></section></article>
<article id="entry-pereira-0383" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἄγχουσα, ης</h1><div class="entry-meta"><span>PEREIRA · ordem 383 na letra α · ID 34390</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> ancusa (nome de planta)</p></section></article>
<article id="entry-pereira-0384" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἄγχω</h1><div class="entry-meta"><span>PEREIRA · ordem 384 na letra α · ID 34391</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">apertar, estrangular, sufocar</p></section><section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. ἄγξω, aor. ἤγξα, pf. desus.)</p></section></article>
<article id="entry-pereira-0385" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχ-ωμαλέω</h1><div class="entry-meta"><span>PEREIRA · ordem 385 na letra α · ID 34392</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγχι, ὁμαλός)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">combater com forças iguais</p></section></article>
<article id="entry-pereira-0386" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγχ-ώμαλος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 386 na letra α · ID 34393</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> quase igual</p></section></article>
<article id="entry-pereira-0387" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἄγω</h1><div class="entry-meta"><span>PEREIRA · ordem 387 na letra α · ID 34394</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">I tr. levar, conduzir, guiar | dirigir, mandar | educar, formar trazer, acarretar || atrair | levar consigo || levar, arrastar | pesar | apreçar, avaliar | empurrar, impelir | construir, fazer || passar o tempo, celebrar | manter, conservar. II intr.  || avançar, marchar || méd. apreciar, avaliar | atrair para si | apresentar, empurrar</p></section><section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. ἄξω, aor. 1 ἦξα, aor. 2 ἤγαγον; pf. ἦχα)</p></section></article>
<article id="entry-pereira-0388" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγῶ, ῇς, ῇ</h1><div class="entry-meta"><span>PEREIRA · ordem 388 na letra α · ID 34395</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">aor. pass. 2 do conj. de ἄγνυμι</p></section></article>
<article id="entry-pereira-0389" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἁγώ</h1><div class="entry-meta"><span>PEREIRA · ordem 389 na letra α · ID 34396</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">crase de ἅ ἐγώ.</p></section></article>
<article id="entry-pereira-0390" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωγεύς, έως</h1><div class="entry-meta"><span>PEREIRA · ordem 390 na letra α · ID 34397</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> condutor, guia</p></section></article>
<article id="entry-pereira-0391" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωγή, ῆς</h1><div class="entry-meta"><span>PEREIRA · ordem 391 na letra α · ID 34398</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> acção de transportar, tansporte | acção de conduzir | partida, marcha | direcção, educação || tempo, todo, maneira.  compasso | método, maneira</p></section></article>
<article id="entry-pereira-0392" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγώγιμος, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 392 na letra α · ID 34399</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> que se pode transportar | no pl. carga, mercadorias | que pode ser apreendido facila, que se deixa arrastar com facilidademente || inclinado</p></section></article>
<article id="entry-pereira-0393" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγώγιον, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 393 na letra α · ID 34400</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> carga, mercadoria</p></section></article>
<article id="entry-pereira-0394" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωγός, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 394 na letra α · ID 34401</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> escolta || que atrai</p></section></article>
<article id="entry-pereira-0395" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγών, ῶνος</h1><div class="entry-meta"><span>PEREIRA · ordem 395 na letra α · ID 34402</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἄγω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> reunião (para jogos religiosos, etc.) | jogos, concurso, fim proposto aos concorrentes | luta | perigo, momento crítico | temor, ansiedade, angústia</p></section></article>
<article id="entry-pereira-0396" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγων-άρχης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 396 na letra α · ID 34403</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> presidente dos jogos</p></section></article>
<article id="entry-pereira-0397" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωνία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 397 na letra α · ID 34404</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> luta, exercício ginástico | combate, luta | disputa, litígio, angústia mortal, pleito | esforço, ansiedade</p></section></article>
<article id="entry-pereira-0398" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωνιάω</h1><div class="entry-meta"><span>PEREIRA · ordem 398 na letra α · ID 34405</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">lutar, disputar || estar irritado || estar disposto para lutar || estar inquieto, temer</p></section><section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(pf. desus.)</p></section></article>
<article id="entry-pereira-0399" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωνίζομαι</h1><div class="entry-meta"><span>PEREIRA · ordem 399 na letra α · ID 34406</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">disputar um prémio, concorrer ao jogos | combater, lutar | esforçar-se por | sustentar um litígio, um pleito | falar em público</p></section><section class="entry-section"><div class="section-title">Inflecção</div><p class="entry-text greek">(fut. ἀγωνιοῦμαι, ἀγωνίσομα aor. ἠγωνισάμην, pf. ἠγώνισμαι)</p></section></article>
<article id="entry-pereira-0400" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγώνιος, α, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 400 na letra α · ID 34407</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> relativo aos jogos ou certames públicos certames</p></section></article>
<article id="entry-pereira-0401" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀ-γώνιος, α, ον</h1><div class="entry-meta"><span>PEREIRA · ordem 401 na letra α · ID 34408</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> sem ângulos</p></section></article>
<article id="entry-pereira-0402" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγώνισις, εως</h1><div class="entry-meta"><span>PEREIRA · ordem 402 na letra α · ID 34409</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> v. ἀγωνισμός</p></section></article>
<article id="entry-pereira-0403" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγώνισμα, ατος</h1><div class="entry-meta"><span>PEREIRA · ordem 403 na letra α · ID 34410</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> acção heróica façanha | luta, rivalidade || processo, litígio || prémio do ou fundamento de uma causa</p></section></article>
<article id="entry-pereira-0404" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωνισμός, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 404 na letra α · ID 34411</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> luta</p></section></article>
<article id="entry-pereira-0405" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωνιστής, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 405 na letra α · ID 34412</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> atleta | competidor, rival || advogado, orador || mestre nalguma arte ou ciência</p></section></article>
<article id="entry-pereira-0406" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωνιστικός, ή, όν</h1><div class="entry-meta"><span>PEREIRA · ordem 406 na letra α · ID 34413</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> | próprio da luta, do combate || que gosta da luta, da discussão.</p></section></article>
<article id="entry-pereira-0407" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωνο-θεσία, ας</h1><div class="entry-meta"><span>PEREIRA · ordem 407 na letra α · ID 34414</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγών, τίθημι)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> cargo de organisar € arbitrar os jogos</p></section></article>
<article id="entry-pereira-0408" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωνο-θετέω</h1><div class="entry-meta"><span>PEREIRA · ordem 408 na letra α · ID 34415</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀγών, τίθημι)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text">organizar jogos públicos, arbitrar nos jogos</p></section></article>
<article id="entry-pereira-0409" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀγωνο-θέτης, ου</h1><div class="entry-meta"><span>PEREIRA · ordem 409 na letra α · ID 34416</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> organizador, presidente nos jogos públicos || juiz, árbitro nos Jogos</p></section></article>
<article id="entry-pereira-0410" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden><header class="entry-header"><div><h1 class="entry-title greek">Ἀ-δαγμός, οῦ</h1><div class="entry-meta"><span>PEREIRA · ordem 410 na letra α · ID 34417</span></div></div><div class="source-tag">PEREIRA</div></header><div class="entry-divider"></div><section class="entry-section"><div class="section-title">Etimologia</div><p class="entry-text greek">(ἀ aum., δάκνω)</p></section><section class="entry-section"><div class="section-title">Definição do PEREIRA</div><p class="entry-text"> mordedura || rasgão</p></section></article>
`
};
