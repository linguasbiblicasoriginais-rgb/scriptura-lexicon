#!/usr/bin/env python3
"""Offline, sem remote write: simula integração DGP sobre chat-gpt-commits."""
from pathlib import Path
import os
import subprocess

def run(*args):
    return subprocess.check_output(args, text=True).strip()
def show(ref,path):
    return subprocess.check_output(["git","show",f"{ref}:{path}"]).decode("utf-8")
def replace1(value,old,new):
    assert value.count(old)==1, (old[:70],value.count(old))
    return value.replace(old,new,1)

root=Path(__file__).resolve().parents[1]
correction=run("git","rev-parse","HEAD")
run("git","fetch","origin","chat-gpt-commits")
base=run("git","rev-parse","FETCH_HEAD")
print("DRYRUN_BASE_SHA",base,flush=True)
print("DRYRUN_ORIGIN_SHA",correction,flush=True)
source=show(correction,"lexicons/dgp-format.js")
canonical=show(base,"lexicons/dgp-format.js")
print("BASE_INDEX",len(show(base,"index.html")),flush=True)
# Manter a fachada sob demanda mais nova, sem substituir script.js/index.html.
init=source[source.index("    /* Fonte DGP:"):source.index("    function hasGreek(")]
block=source[source.index("    /* Auditoria DGP 1–1000."):source.index("    function emphasizeSenses(")]
canonical=replace1(canonical,"    function hasGreek(",init+"    function hasGreek(")
canonical=replace1(canonical,"    function emphasizeSenses(",block+"    function emphasizeSenses(")
canonical=replace1(canonical,"            ambiguous: 0\n",
                   "            ambiguous: 0,\n            greekPopups: 0,\n            verifiedWorks: 0,\n            unspecifiedWorks: 0\n")
canonical=replace1(canonical,
                   "            rearrangeExamples(root, audit);\n            emphasizeSenses(root, audit);",
                   "            rearrangeExamples(root, audit);\n            decorateDgpCitationExamples(root, audit);\n            emphasizeSenses(root, audit);")
assert "Ilíada 10.65–66" in canonical
assert "ac. pl. n." in canonical
assert "dgpFormatted" in canonical
origFiles=[
  "lexicons/dgp-format.css",
  ".github/workflows/dgp-browser-audit.yml",
  ".github/workflows/dgp-stage3-candidatos.yml",
  "tests/test_dgp_1000_full_browser.py",
  "tests/test_dgp_citation_browser_1000.py",
  "tests/test_dgp_cotejo_1000.js",
  "tests/test_dgp_stage3_candidatos.py",
  "auditorias/dgp-2026-10-14-cotejo-0001-1000.json",
  "auditorias/dgp-2026-10-14-retomada-0001-1000.md",
  "auditorias/dgp-2026-10-15-consolidacao-historica-0001-1000.json",
  "auditorias/dgp-2026-10-15-loci-e-popups-compostos-0001-1000.md",
  "auditorias/dgp-2026-10-15-lote001-duas-etapas.md",
  "auditorias/dgp-auditoria-individual-0001-1000.json",
  "auditorias/dgp-duas-etapas-progresso.json",
  "auditorias/dgp-etapa3-0001-1000.json",
  "auditorias/dgp-etapa3-relatorio-0001-1000.md"
]
items={path:show(correction,path) for path in origFiles}
run("git","checkout","--detach",base)
for path,content in items.items():
    file=root/path
    file.parent.mkdir(parents=True,exist_ok=True)
    file.write_text(content,encoding="utf-8")
(root/"lexicons/dgp-format.js").write_text(canonical,encoding="utf-8")

# O Netlify injeta bibliographicTerms a partir do catálogo. Conservamos
# a abreviatura composta que os testes 1–1000 já aprovaram.
onDemand=show(base,"lexicons/on-demand-search.js")
needle='        for (const [name, terms] of Object.entries(catalog.sourceTerms || {})) {'
substitute="""        for (const [name, terms] of Object.entries(catalog.sourceTerms || {})) {
            const effectiveTerms = name === "DGP" &&
                !terms.some(item => item.key === "ac. pl. n.")
                ? [...terms, {key:"ac. pl. n.", type:"abbr", text:"acusativo plural neutro"}]
                : terms;"""
onDemand=replace1(onDemand,needle,substitute)
onDemand=replace1(onDemand,'slot = {source:name, bibliographicTerms:terms};',
                  'slot = {source:name, bibliographicTerms:effectiveTerms};')
onDemand=replace1(onDemand,'slot.bibliographicTerms = terms;',
                  'slot.bibliographicTerms = effectiveTerms;')
(root/"lexicons/on-demand-search.js").write_text(onDemand,encoding="utf-8")

print("DRYRUN_PATCH_OK",len(origFiles)+1,"files; no branch changed; main untouched",flush=True)
