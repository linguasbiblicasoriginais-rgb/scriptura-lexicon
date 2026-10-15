#!/usr/bin/env python3
"""Etapa 3 DGP: gate individual para dez candidatos específicos; não concede homologação."""
import functools
import http.server
import json
import pathlib
import threading
import unicodedata
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
SOURCE = json.loads((ROOT / "auditorias/dgp-etapa3-candidatos-41-58.json").read_text(encoding="utf-8"))
RECORDS = SOURCE["entries"]
EXPECTED_IDS = [41,45,46,50,51,52,53,54,57,58]
assert [r["ordinal"] for r in RECORDS] == EXPECTED_IDS

def norm(value):
    return " ".join(unicodedata.normalize("NFC", str(value or "")).split())

def require(condition, explanation):
    if not condition:
        raise AssertionError(explanation)

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

def main():
    server = http.server.ThreadingHTTPServer(
        ("127.0.0.1", 0), functools.partial(QuietHandler, directory=str(ROOT)))
    threading.Thread(target=server.serve_forever,daemon=True).start()
    completed = []
    try:
        with sync_playwright() as pw:
            browser = pw.chromium.launch(headless=True)
            try:
                page=browser.new_page(viewport={"width":1365,"height":900})
                errors=[]
                page.on("pageerror",lambda exc: errors.append(str(exc)))
                page.goto("http://127.0.0.1:%d/index.html#grego" % server.server_port,
                          wait_until="load",timeout=180000)
                for rec in RECORDS:
                    n=rec["ordinal"]
                    lemma=rec["lemma"]
                    require(rec["source_equal"],"XML não confirmado #%d"%n)
                    page.locator("#search-input").fill(lemma.split(",")[0].strip())
                    row=page.locator(
                        '.search-row[data-source="DGP"][data-target="entry-dgp-%04d"]'%n)
                    try:
                        row.wait_for(state="visible",timeout=30000)
                    except Exception:
                        diagnostic = page.evaluate("""() => ({
                            query: document.getElementById("search-input").value,
                            count: document.getElementById("search-count")?.textContent,
                            rows: [...document.querySelectorAll('.search-row')].length,
                            displayed: [...document.querySelectorAll('.search-row')].slice(0,5)
                              .map(x=>({target:x.dataset.target,lemma:x.querySelector('.table-lemma')?.textContent})),
                            dictionary: document.querySelector('.dictionary-option.active')?.dataset.dictionaryTarget
                        })""")
                        print("STAGE3 SEARCH DIAG #%04d %s" % (n, diagnostic),flush=True)
                        raise
                    require(row.count()==1,"ID da linha não é único #%d"%n)
                    row.focus()
                    page.keyboard.press("Enter")
                    card=page.locator("#entry-dgp-%04d"%n)
                    card.wait_for(state="visible",timeout=25000)
                    require(card.get_attribute("data-source")=="DGP","Fonte incorreta #%d"%n)
                    require(not card.evaluate("(el)=>el.hidden"),"Cartão não abriu #%d"%n)
                    require(norm(card.locator("h1.entry-title").text_content())==norm(lemma),
                            "Lema incorreto #%d"%n)
                    body=card.locator("p.entry-text")
                    require(body.count()==1,"Definição ausente #%d"%n)
                    require(norm(body.text_content())==norm(rec["definition_published_normalized"]),
                            "Definição divergente #%d"%n)
                    require(card.locator("a[href]").count()==0,
                            "Links não examinados #%d"%n)
                    require(card.locator(".dgp-example").count()==0,
                            "Há citação no artigo que exige cotejo #%d"%n)
                    for link in rec["cross_references"]:
                        require(norm(link["lemma"]) in norm(body.text_content()),
                            "Remissão lexical ausente #%d → #%d"%(n,link["target"]))
                        target_id="#entry-dgp-%04d"%link["target"]
                        require(page.locator(target_id).count()==1,
                            "Destino da remissão não existe #%d → #%d"%(n,link["target"]))
                    popup_count=0
                    for trigger in body.locator(".tooltip-trigger").all():
                        trigger.focus()
                        tip=page.locator("#lexical-tooltip")
                        require(tip.get_attribute("aria-hidden")=="false" and norm(tip.text_content()),
                                "Popup não funciona #%d"%n)
                        page.keyboard.press("Escape")
                        require(tip.get_attribute("aria-hidden")=="true","Escape popup #%d"%n)
                        popup_count+=1
                    completed.append(n)
                    print("DGP ETAPA3 PASS #%04d lema/definicao/busca/teclado/remissoes/%d popups" %
                          (n,popup_count),flush=True)
                page.set_viewport_size({"width":375,"height":812})
                require(page.locator("#search-input").is_visible(),"Busca invisível no mobile")
                require(not errors,"Erros JavaScript "+str(errors))
            finally:
                browser.close()
    finally:
        server.shutdown()
    require(len(completed)==10,"Execução incompleta")
    print("DGP ETAPA3 PASS 10/10 candidatos",flush=True)

if __name__=="__main__":
    main()
