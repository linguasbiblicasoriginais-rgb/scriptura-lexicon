#!/usr/bin/env python3
"""Retoma a contagem BDB da execução anterior: só shin e tav pendentes."""
import concurrent.futures
import hashlib
import json
import subprocess
import sys
from datetime import datetime,timezone
from pathlib import Path
import bdbh_count_full as base

ROOT=Path(__file__).resolve().parents[1]
CHECKPOINT=ROOT/"lexicons/bdbh-progress.json"
INVENTORY=ROOT/"lexicons/bdbh-source-inventory.json"
LOG_RUN="https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38778124647"
# Cada valor abaixo foi efetivamente emitido pela rotina count_segment no
# log do run 38778124647, após alcançar exatamente a fronteira da próxima letra.
VERIFIED_COMPLETED_COUNTS=[["ה",260],["ד",268],["ו",13],["ג",436],["ב",570],["ט",117],["ז",244],["א",979],["ל",244],["כ",429],["י",586],["ח",856],["ס",288],["פ",438],["נ",616],["מ",997],["צ",420],["ע",858],["ק",424],["שׂ",244],["ר",546]]

def main():
    segments,lastword=base.index_segments()
    byname={s["letter"]:s for s in segments}
    names=[s["letter"] for s in segments]
    counts=dict(VERIFIED_COMPLETED_COUNTS)
    if len(counts)!=len(VERIFIED_COMPLETED_COUNTS):
        raise RuntimeError("Letras duplicadas na primeira execução")
    if set(names)!=set(counts)|{"שׁ","ת"} or len(names)!=23:
        raise RuntimeError("Índice da Sefaria mudou desde a contagem inicial")
    if names[-2:]!=["שׁ","ת"]:
        raise RuntimeError("Divisões finais não coincidem")
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor:
        tasks={
            executor.submit(base.count_segment,byname["שׁ"],byname["ת"]["start"],lastword):"שׁ",
            executor.submit(base.count_segment,byname["ת"],None,lastword):"ת",
        }
        results={}
        for future in concurrent.futures.as_completed(tasks):
            name=tasks[future]
            results[name]=future.result()[0]
            counts[name]=results[name]["count"]
            print("SEGMENTO CONCLUÍDO",name,counts[name],flush=True)
    ordered=[{
        "letter":s["letter"],
        "first_ref":s["start"],
        "count":counts[s["letter"]],
        "evidence":"2026-10-15 Sefaria traversal; GH Actions run 38778124647" if s["letter"] not in results else "2026-10-15 Sefaria resumed traversal",
        **({"last_ref":results[s["letter"]]["last_ref"],"refs_sha256":results[s["letter"]]["refs_sha256"]}
           if s["letter"] in results else {}),
    } for s in segments]
    total=sum(x["count"] for x in ordered)
    if total!=9833+results["שׁ"]["count"]+results["ת"]["count"]:
        raise RuntimeError("Soma discordante das 21 letras confirmadas")
    if total<2000 or total>11876:
        raise RuntimeError("Total fora dos limites conhecidos da fonte")
    evidence={
        "source":"Sefaria — BDB Dictionary — seção hebraica",
        "not_included":"BDB Aramaic Dictionary",
        "source_url":"https://www.sefaria.org/BDB?tab=contents",
        "initial_count_source_run":LOG_RUN,
        "method":"23 blocos do headwordMap da Sefaria; 21 blocos tiveram fronteira confirmada no primeiro run, e os 2 blocos finais foram recontados após normalização dos sinais vocálicos no último lema",
        "date_utc":datetime.now(timezone.utc).isoformat(),
        "counted_letters":23,
        "source_first":"BDB, א",
        "source_last":results["ת"]["last_ref"],
        "total_entries":total,
        "alphabetic_sections":ordered,
    }
    checkpoint=json.loads(CHECKPOINT.read_text(encoding="utf-8"))
    if checkpoint.get("source_total") not in (None,total):
        raise RuntimeError("Checkpoint registra outro denominador")
    if checkpoint["total_incorporated"]>total:
        raise RuntimeError("Acumulado excede a fonte")
    checkpoint["source_total"]=total
    checkpoint["source_total_method"]=evidence["method"]
    checkpoint["source_total_inventory_path"]="lexicons/bdbh-source-inventory.json"
    INVENTORY.write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    CHECKPOINT.write_text(json.dumps(checkpoint,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    subprocess.run(["git","add","--","lexicons/bdbh-progress.json","lexicons/bdbh-source-inventory.json"],check=True,cwd=ROOT)
    subprocess.run(["git","commit","-m",f"BDBH: registrar {total} entradas da seção hebraica da Sefaria"],check=True,cwd=ROOT)
    subprocess.run(["git","push","origin","HEAD:chat-gpt-bdbh"],check=True,cwd=ROOT)
    commit=subprocess.check_output(["git","rev-parse","HEAD"],text=True,cwd=ROOT).strip()
    print("TOTAL BDB HEBRAICO CONFIRMADO",total,"ACUMULADO",checkpoint["total_incorporated"],"COMMIT",commit,flush=True)

if __name__=="__main__":
    try:main()
    except Exception as exc:
        print("IMPEDIMENTO NO FECHAMENTO DO TOTAL BDBH",type(exc).__name__,str(exc),file=sys.stderr,flush=True)
        sys.exit(1)
