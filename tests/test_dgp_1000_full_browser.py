#!/usr/bin/env python3
"""DGP 1–1000 — teste por verbete no Chromium; não equivale à homologação."""
import functools
import http.server
import json
import pathlib
import threading
from datetime import datetime, timezone
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
SOURCE = ROOT / "auditorias/dgp-2026-10-14-cotejo-0001-1000.json"
OUTPUT = ROOT / "auditorias/dgp-1000-funcional-chromium-resultados.json"


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass


def main():
    records = json.loads(SOURCE.read_text(encoding="utf-8"))["records"]
    assert len(records) == 1000, "Fonte não tem 1000 fichas"
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0),
        functools.partial(QuietHandler, directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    results, page_errors = [], []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            try:
                page = browser.new_page(viewport={"width": 1365, "height": 900})
                page.on("pageerror", lambda exc: page_errors.append(str(exc)))
                page.goto("http://127.0.0.1:%d/index.html#grego" % server.server_port,
                          wait_until="load", timeout=180000)
                for offset in range(0,1000,25):
                    chunk = records[offset:offset+25]
                    observations = page.evaluate(r"""(sourceItems) => {
                        const norm = s => String(s||"").normalize("NFC").replace(/\s+/gu," ").trim();
                        const input = document.getElementById("search-input");
                        const tip = document.getElementById("lexical-tooltip");
                        const observations = [];
                        const nativeScroll = HTMLElement.prototype.scrollIntoView;
                        HTMLElement.prototype.scrollIntoView = function(){};
                        try {
                            for (const src of sourceItems) {
                                const n=src.ordinal, id="entry-dgp-"+String(n).padStart(4,"0");
                                const findings=[], row=document.querySelector(
                                    '.search-row[data-source="DGP"][data-target="'+id+'"]'),
                                    card=document.getElementById(id);
                                const result = {
                                    ordinal:n,lema:src.lemma,
                                    par_valido:!!(row&&card),
                                    lema_valido:false,definicao_presente:false,
                                    indice_valido:false,busca_valida:false,
                                    abertura_enter_valida:false,
                                    popups_total:0,popups_validos:0,popups_falhos:0,
                                    exemplos_identificados:0,gregos_transliterados:0,
                                    autores_sem_obra:0,abreviaturas_sem_popup:[],
                                    achados:findings
                                };
                                if (!(row&&card)) {
                                    findings.push("LINHA_OU_CARTAO_AUSENTE");
                                    observations.push(result);continue;
                                }
                                const heading=card.querySelector(".entry-title"),
                                    rowLemma=row.querySelector(".table-lemma"),
                                    def=card.querySelector(".entry-section .entry-text");
                                result.lema_valido=norm(heading?.textContent)===norm(src.lemma)&&
                                    norm(heading?.textContent)===norm(rowLemma?.textContent);
                                result.definicao_presente=!!norm(def?.textContent);
                                result.indice_valido=norm(row.dataset.search).includes(norm(src.lemma));
                                if (!result.lema_valido) findings.push("LEMA_DIVERGENTE");
                                if (!result.definicao_presente) findings.push("DEFINICAO_VAZIA");
                                if (!result.indice_valido) findings.push("INDICE_INCOMPLETO");
                                input.value=src.lemma;
                                input.dispatchEvent(new Event("input",{bubbles:true}));
                                result.busca_valida=!row.hidden;
                                if (!result.busca_valida) findings.push("BUSCA_SEM_RESULTADO");
                                row.dispatchEvent(new KeyboardEvent("keydown",{
                                    key:"Enter",bubbles:true,cancelable:true
                                }));
                                result.abertura_enter_valida=!card.hidden;
                                if (!result.abertura_enter_valida) findings.push("ENTER_NAO_ABRE");
                                const triggers=def?[...def.querySelectorAll(".tooltip-trigger")]:[];
                                result.popups_total=triggers.length;
                                for (const el of triggers) {
                                    el.focus();
                                    const popupText=norm(tip?.textContent);
                                    const okay=document.activeElement===el&&
                                        tip?.getAttribute("aria-hidden")==="false"&&popupText.length>0;
                                    if (okay) result.popups_validos++;
                                    else {
                                        result.popups_falhos++;
                                        if (result.popups_falhos<=5) findings.push(
                                            "POPUP_NAO_ABRIU:"+(el.dataset.tooltipLabel||"").slice(0,32)
                                        );
                                    }
                                    if(el.dataset.tooltipType==="greek") {
                                        const translit=norm(el.dataset.transliteration);
                                        if(translit&&popupText.includes(translit)) {
                                            result.gregos_transliterados++;
                                        } else findings.push("GREGO_SEM_TRANSLITERACAO");
                                    }
                                    el.blur();
                                }
                                const examples=def?[...def.querySelectorAll(".dgp-example")]:[];
                                result.exemplos_identificados=examples.length;
                                for(const ex of examples) {
                                    const a=ex.querySelector(".dgp-citation-source"),
                                        g=ex.querySelector(".dgp-example-greek"),
                                        pt=ex.querySelector(".dgp-example-meaning");
                                    if(!(a&&g&&pt&&norm(g.textContent)&&norm(pt.textContent)))
                                        findings.push("CITACAO_INCOMPLETA");
                                    if(a?.dataset.dgpWorkStatus==="nao-identificada")
                                        result.autores_sem_obra++;
                                }
                                const terms=window.ScripturaLexicons?.DGP?.bibliographicTerms||[];
                                const tags=def?[...def.querySelectorAll('[data-tooltip-type="abbr"]')]:[];
                                for(const term of terms) {
                                    if(term.type!=="abbr"||!term.key||term.key.length<3||
                                        !term.key.endsWith("."))continue;
                                    const e=term.key.replace(/[.*+?^$()|[\]{}]/g,"\\$&");
                                    const exp=new RegExp("(^|[^\\p{L}\\p{M}])"+e+
                                        "(?![\\p{L}\\p{M}])","u");
                                    if(!exp.test(src.definition_original_xml))continue;
                                    if(!tags.some(t=>{
                                        const label=t.dataset.tooltipLabel||norm(t.textContent);
                                        return label===term.key||exp.test(label);
                                    }))
                                        result.abreviaturas_sem_popup.push(term.key);
                                }
                                if(result.abreviaturas_sem_popup.length) findings.push(
                                    "ABREVIATURAS_SEM_POPUP:"+
                                    [...new Set(result.abreviaturas_sem_popup)].join(","));
                                observations.push(result);
                            }
                        } finally {HTMLElement.prototype.scrollIntoView=nativeScroll;}
                        return observations;
                    }""",chunk)
                    results.extend(observations)
                    print("COBERTURA FUNCIONAL DGP: %d/1000" % len(results),flush=True)
                # Testes da interface compartilhada em ambos os temas.
                page.locator("#menu-toggle").click()
                for theme in ("light","dark"):
                    item=page.locator('input[name="site-theme"][value="%s"]' % theme)
                    if item.count():
                        item.locator("xpath=..").click()
                        if page.locator("html").get_attribute("data-theme")!=theme:
                            page_errors.append("Alternância de tema "+theme)
                    else: page_errors.append("Tema não disponível: "+theme)
                page.locator("#menu-close").click()
                page.set_viewport_size({"width":375,"height":812})
                if not page.locator("#search-input").is_visible():
                    page_errors.append("Campo de busca invisível no celular")
            finally: browser.close()
    finally: server.shutdown()
    summary={
        "total_exercitados":len(results),
        "linhas_e_cartoes_validos":sum(x["par_valido"] for x in results),
        "lemas_validos":sum(x["lema_valido"] for x in results),
        "definicoes_presentes":sum(x["definicao_presente"] for x in results),
        "indices_validos":sum(x["indice_valido"] for x in results),
        "buscas_reais":sum(x["busca_valida"] for x in results),
        "aberturas_enter":sum(x["abertura_enter_valida"] for x in results),
        "popups_localizados":sum(x["popups_total"] for x in results),
        "popups_abertos":sum(x["popups_validos"] for x in results),
        "popups_falhos":sum(x["popups_falhos"] for x in results),
        "exemplos_identificados":sum(x["exemplos_identificados"] for x in results),
        "gregos_transliterados":sum(x["gregos_transliterados"] for x in results),
        "referencias_sem_obra":sum(x["autores_sem_obra"] for x in results),
        "verbetes_com_achados":sum(bool(x["achados"]) for x in results),
        "verbetes_sem_achados":sum(not x["achados"] for x in results),
        "erros_javascript":page_errors
    }
    OUTPUT.write_text(json.dumps({
        "tipo":"COBERTURA_FUNCIONAL_NAO_HOMOLOGACAO",
        "timestamp_utc":datetime.now(timezone.utc).isoformat(),
        "lote":[1,1000],"total_lexicon":44590,
        "resumo":summary,"resultados_individuais":results
    },ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("DGP RESULTADO: "+json.dumps(summary,ensure_ascii=False),flush=True)
    for item in results:
        if item["achados"]:
            print("DGP ACHADO %04d %s :: %s" % (item["ordinal"],item["lema"],";".join(item["achados"])),flush=True)
    if len(results)!=1000 or page_errors or summary["verbetes_com_achados"]:
        raise SystemExit("Pendências funcionais: "+str(summary["verbetes_com_achados"]))
    print("PASS: 1000 verbetes exercitados funcionalmente sem achados")


if __name__ == "__main__":
    main()
