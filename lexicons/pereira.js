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
`
};
