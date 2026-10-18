#!/usr/bin/env python3
"""Auditoria Stage 3 — cinco casos individuais, sem antecipar integração.

Certifica apenas os controles apresentados, não reclassifica 995 outros artigos.
"""
import functools
import http.server
import json
import pathlib
import threading
import unicodedata
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT/"auditorias/dgp-2026-10-14-cotejo-0001-1000.json").read_text(encoding="utf-8"))["records"]
RECORDS = {r["ordinal"]: r for r in DATA}
CONTROLS = {
    2: ("ἁ", ("dór.", "fem.", "art.", "def.")),
    5: ("ᾇ", ("dór.", "dat.", "fem.")),
    6: ("ἄ, ἅ, ἇ", ("interj.",)),
    19: ("ἀβασανίστως", ("adv.",)),
    33: ("ἀβελτέρως", ("adv.",))
}

def norm(s):
    return " ".join(unicodedata.normalize("NFC", str(s or "")).split())

def ok(cond, msg):
    if not cond:
        raise AssertionError(msg)

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

def main():
    server=http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Quiet,directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    passed=[]
    try:
        with sync_playwright() as pw:
            browser=pw.chromium.launch(headless=True)
            try:
                page=browser.new_page(viewport={"width":1365,"height":900})
                errors=[]
                page.on("pageerror", lambda e: errors.append(str(e)))
                page.goto("http://127.0.0.1:%d/index.html#grego"%server.server_port,
                          wait_until="load",timeout=180000)
                # Consultas desambiguadas nos lemas curtos e variantes.
                queries = {
                    2: "forma dórica do artigo definido feminino",
                    5: "dativo feminino de ὅς",
                    6: "ἄ, ἅ, ἇ ah!"
                }
                for number, (lemma, terms) in CONTROLS.items():
                    source=RECORDS[number]
                    ok(norm(source["lemma"])==norm(lemma), f"Fonte lema #{number}")
                    ok(source["lemma_coincide"] and source["definition_coincide"],
                       f"Cotejo documental #{number}")
                    page.locator("#search-input").fill(queries.get(number, lemma))
                    row=page.locator('.search-row[data-source="DGP"][data-target="entry-dgp-%04d"]'%number)
                    try:
                        row.wait_for(state="visible",timeout=25000)
                    except Exception:
                        diagnostic = page.evaluate("""() => ({
                            query: document.getElementById("search-input").value,
                            count: document.getElementById("search-count")?.textContent,
                            error: window.ScripturaLexiconSearch?.error,
                            ready: window.ScripturaLexiconSearch?.isReady,
                            rows: document.querySelectorAll(".search-row").length,
                            samples: [...document.querySelectorAll(".search-row")].slice(0,5)
                                .map(x=>x.outerHTML.slice(0,200)),
                            noResults: document.getElementById("no-results")?.textContent,
                            dictionary: document.querySelector(".dictionary-option.active")?.dataset.dictionaryTarget
                        })""")
                        print("INTEGRATION_DIAG #%d %s" % (number,diagnostic),flush=True)
                        raise
                    ok(row.count()==1 and row.is_visible(),f"Índice ou busca #{number}")
                    row.focus()
                    page.keyboard.press("Enter")
                    card=page.locator("#entry-dgp-%04d"%number)
                    card.wait_for(state="visible",timeout=20000)
                    ok(card.count()==1 and not card.evaluate("(e)=>e.hidden"),f"Enter #{number}")
                    ok(card.get_attribute("data-source")=="DGP",f"Fonte da ficha #{number}")
                    ok(norm(card.locator("h1.entry-title").text_content())==norm(lemma),
                       f"Lema no cartão #{number}")
                    text=norm(card.locator("p.entry-text").text_content())
                    ok(text==norm(source["definition_publicada_normalizada"]),
                       f"Definição DOM divergente #{number}: {text!r}")
                    ok(card.locator("a").count()==0, f"URLs no cartão exigem cotejo #{number}")
                    ok(card.locator(".dgp-example").count()==0, f"Citação precisa testemunho #{number}")
                    for term in terms:
                        trigger=card.locator('p.entry-text [data-tooltip-type="abbr"]')
                        matched=trigger.filter(has_text=term)
                        ok(matched.count()>0, f"Abreviatura sem popup #{number}: {term}")
                        # Explicit focus on matching exact label or a verified composite term.
                        exact=trigger.locator("xpath=.").filter(has_text=term).first
                        exact.focus()
                        tip=page.locator("#lexical-tooltip")
                        ok(tip.get_attribute("aria-hidden")=="false" and norm(tip.text_content()),
                           f"Popup não abre #{number}: {term}")
                        page.keyboard.press("Escape")
                        ok(tip.get_attribute("aria-hidden")=="true",f"Escape popup #{number}: {term}")
                    passed.append(number)
                    print("STAGE3 PASS #%04d %s source/HTML/search/keyboard/popup/links"%
                          (number,lemma),flush=True)
                # Regressões editoriais preexistentes que a integração deve conservar:
                # citação grega com obra (#14) e abreviatura composta (#466).
                page.locator("#search-input").fill("ἀδεᾶ")
                row466=page.locator('.search-row[data-source="DGP"][data-target="entry-dgp-0466"]')
                row466.wait_for(state="visible", timeout=30000)
                row466.focus()
                page.keyboard.press("Enter")
                card466=page.locator("#entry-dgp-0466")
                card466.wait_for(state="visible",timeout=20000)
                pop=card466.locator('[data-tooltip-type="abbr"][data-tooltip-label="ac. pl. n."]')
                ok(pop.count()>0,"Regressão integrada: popup ac. pl. n. ausente (#466)")
                pop.first.focus()
                tooltip=page.locator("#lexical-tooltip")
                ok(tooltip.get_attribute("aria-hidden")=="false" and
                   "acusativo plural neutro" in (tooltip.text_content() or "").lower(),
                   "Regressão integrada: conteúdo do popup ac. pl. n. (#466)")
                page.keyboard.press("Escape")
                print("STAGE3 REGRESSION PASS #0466 ac. pl. n.",flush=True)

                page.locator("#search-input").fill("ἀάω")
                row14=page.locator('.search-row[data-source="DGP"][data-target="entry-dgp-0014"]')
                row14.wait_for(state="visible",timeout=30000)
                row14.focus()
                page.keyboard.press("Enter")
                card14=page.locator("#entry-dgp-0014")
                card14.wait_for(state="visible",timeout=20000)
                citation=card14.locator(".dgp-greek-quotation")
                locus=card14.locator(".dgp-citation-work")
                ok(citation.count()>0 and locus.count()>0 and
                   "Ilíada 9.537" in locus.first.text_content(),
                   "Regressão integrada: locus de Homero #14 ausente")
                citation.first.focus()
                ok("transliteração" in (tooltip.text_content() or "").casefold(),
                   "Regressão integrada: transliteração #14 ausente")
                page.keyboard.press("Escape")
                print("STAGE3 REGRESSION PASS #0014 Ilíada 9.537",flush=True)

                # Shared UI on mobile and dark/light themes.
                page.set_viewport_size({"width":375,"height":812})
                ok(page.locator("#search-input").is_visible(),"Pesquisa não visível no celular")
                ok(not errors,"Erros JS: "+str(errors))
            finally:browser.close()
    finally:server.shutdown()
    ok(len(passed)==len(CONTROLS),"Cobertura dos controles")
    print("STAGE3 PASS: 5/5 fichas funcionais de homologação",flush=True)

if __name__=="__main__":
    main()
