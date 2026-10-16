#!/usr/bin/env python3
"""Inventário do BDB aramaico baseado no índice e sequência oficial da Sefaria.

Executa somente contagem: não acrescenta verbetes, não homologa nem integra.
"""
import concurrent.futures
import hashlib
import json
import os
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

ROOT=Path(__file__).resolve().parents[1]
BRANCH="chat-gpt-bdba"
CHECKPOINT=ROOT/"lexicons/bdba-progress.json"
INVENTORY=ROOT/"lexicons/bdba-source-inventory.json"
API="https://www.sefaria.org/api"
LEXICON="BDB Aramaic Dictionary"

def get_json(path):
    url=API+path
    for retry in range(3):
        try:
            req=Request(url,headers={"User-Agent":"ScripturaLexicon-BDB-Hebrew-Inventory/1.0","Accept":"application/json"})
            with urlopen(req,timeout=35) as response:
                return json.load(response)
        except (HTTPError,URLError,TimeoutError,ValueError) as e:
            if isinstance(e,HTTPError) and e.code in (400,401,403,404):
                raise RuntimeError(f"Fonte indisponível: {url} HTTP {e.code}") from e
            if retry==2:
                raise RuntimeError(f"Fonte indisponível após 3 tentativas: {url}: {e}") from e
            time.sleep(3*(retry+1))

def index_segments():
    idx=get_json("/index/BDB%20Aramaic")
    node=next((x for x in idx.get("schema",{}).get("nodes",[])
               if x.get("nodeType")=="DictionaryNode"
               and x.get("lexiconName")==LEXICON),None)
    if not node:
        raise RuntimeError("Nenhum DictionaryNode do BDB aramaico")
    raw=node.get("headwordMap",[])
    segments=[]
    for row in raw:
        if not isinstance(row,(list,tuple)) or len(row)!=2:
            raise RuntimeError(f"Item inesperado no headwordMap: {row}")
        label,ref=row
        if not isinstance(ref,str) or not ref.startswith("BDB Aramaic, "):
            raise RuntimeError(f"Referência do índice não é BDB aramaico: {row}")
        if ref not in [x["start"] for x in segments]:
            segments.append({"letter":str(label),"start":ref})
    if not segments or segments[0]["start"]!="BDB Aramaic, "+node.get("firstWord",""):
        raise RuntimeError("Primeiro item de índice não corresponde ao primeiro verbete")
    if len(segments)<1 or len(segments)>30:
        raise RuntimeError(f"Quantidade inesperada de divisões alfabéticas: {len(segments)}")
    print("ÍNDICE",[(x["letter"],x["start"]) for x in segments],
          "ÚLTIMO",node.get("lastWord"),flush=True)
    return segments,node.get("lastWord")

def count_segment(segment,next_start,expected_last):
    current=segment["start"]
    seen=set()
    ids=[]
    first=None
    last=None
    while current is not None:
        if current==next_start:
            break
        if not current.startswith("BDB Aramaic, "):
            raise RuntimeError(f"Referência passou para outra fonte: {current}")
        if current in seen:
            raise RuntimeError(f"Ciclo lexicográfico antes da fronteira {next_start}: {current}")
        d=get_json("/texts/"+quote(current,safe="")+"?context=0&commentary=0")
        canonical=d.get("ref")
        if d.get("indexTitle")!="BDB Aramaic" or not str(canonical).startswith("BDB Aramaic, "):
            raise RuntimeError(f"Resultado fora do BDB Aramaico: {current}: {d.get('indexTitle')}")
        # O identificador textual distingue homógrafos e demais entradas autônomas.
        if canonical in seen:
            raise RuntimeError(f"Identificador de entrada duplicado: {canonical}")
        seen.add(current)
        seen.add(canonical)
        ids.append(canonical)
        first=first or canonical
        last=canonical
        successor=d.get("next")
        if successor is not None and not (isinstance(successor,str) and successor.startswith("BDB Aramaic, ")):
            raise RuntimeError(f"Destino não hebraico: {successor}")
        current=successor
        if len(ids)%200==0:
            print("CONTAGEM",segment["letter"],len(ids),"atual",last,flush=True)
        if len(ids)>10000:
            raise RuntimeError(f"Limite prudencial excedido no segmento {segment['letter']}")
        time.sleep(0.08)
    if next_start is not None and current!=next_start:
        raise RuntimeError(f"Divisão {segment['letter']} terminou em {current}, esperava {next_start}")
    if next_start is None:
        import unicodedata
        def consonants(value):
            return "".join(ch for ch in unicodedata.normalize("NFD", value)
                           if not unicodedata.combining(ch))
        if current is not None or consonants(last or "")!=consonants("BDB Aramaic, "+expected_last):
            raise RuntimeError(f"Fim da obra não confirmado: {current}; último {last}; esperado {expected_last}")
    if not ids:
        raise RuntimeError(f"Divisão alfabética vazia: {segment['letter']}")
    return {"letter":segment["letter"],"first_ref":first,"last_ref":last,"count":len(ids),
            "refs_sha256":hashlib.sha256(
                "\n".join(ids).encode("utf-8")).hexdigest()},ids

def main():
    segments,lastword=index_segments()
    results=[None]*len(segments)
    allids=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        jobs={
            executor.submit(count_segment,segment,
                            segments[i+1]["start"] if i+1<len(segments) else None,lastword):i
            for i,segment in enumerate(segments)
        }
        try:
            for future in concurrent.futures.as_completed(jobs):
                i=jobs[future]
                meta,refs=future.result()
                results[i]=meta
                allids.extend(refs)
                print("SEGMENTO COMPLETO",meta["letter"],meta["count"],flush=True)
        except Exception:
            for task in jobs:task.cancel()
            raise
    if len(allids)!=len(set(allids)):
        raise RuntimeError("Entradas repetidas entre divisões alfabéticas; contagem rejeitada")
    total=sum(x["count"] for x in results)
    if total!=len(allids):
        raise RuntimeError("Contagem e identificadores divergentes; contagem rejeitada")
    content={
        "edition": "Brown, Driver and Briggs, A Hebrew and English Lexicon of the Old Testament (Oxford, 1906)",
        "license": "Public Domain",
        "license_evidence_url": "https://www.sefaria.org/BDB_Aramaic?tab=contents",
        "source":"Sefaria — BDB Aramaic Dictionary (Aramaic ONLY)",
        "excluded_source":"BDB Dictionary",
        "source_url":"https://www.sefaria.org/BDB_Aramaic?tab=contents",
        "method":"DictionaryNode.headwordMap + traversal of /api/texts/ next to exact next alphabet boundary, no Aramaic included",
        "counted_at_utc":datetime.now(timezone.utc).isoformat(),
        "first_ref":results[0]["first_ref"],
        "last_ref":results[-1]["last_ref"],
        "total_entries":total,
        "unique_references":len(set(allids)),
        "ref_sha256_sorted":hashlib.sha256(
            "\n".join(sorted(allids)).encode("utf-8")).hexdigest(),
        "alphabetic_sections":results,
    }
    if INVENTORY.exists():
        old=json.loads(INVENTORY.read_text(encoding="utf-8"))
        if old.get("total_entries")!=total:
            raise RuntimeError("Inventário anterior diverge: revisão explícita necessária")
    cp=json.loads(CHECKPOINT.read_text(encoding="utf-8"))
    if cp.get("source_total") not in (None,total):
        raise RuntimeError("Checkpoint contém total divergente; não sobrescrever")
    if cp["total_incorporated"]>total:
        raise RuntimeError("Incorporados excedem o tamanho da fonte")
    if cp.get("total_incorporated", 0)==0:
        if cp.get("next_ref") not in (None,results[0]["first_ref"]):
            raise RuntimeError("Checkpoint inicial aponta para fonte diferente")
        cp["next_ref"]=results[0]["first_ref"]
    cp["source_total"]=total
    cp["source_total_method"]=content["method"]
    cp["source_total_inventory_path"]="lexicons/bdba-source-inventory.json"
    cp["source_total_ref_sha256"]=content["ref_sha256_sorted"]
    INVENTORY.write_text(json.dumps(content,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    CHECKPOINT.write_text(json.dumps(cp,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    subprocess.run(["git","add","--","lexicons/bdba-source-inventory.json",
                    "lexicons/bdba-progress.json"],cwd=ROOT,check=True)
    subprocess.run(["git","commit","-m",f"BDBA: registrar total verificado de {total} entradas hebraicas da Sefaria"],
                   cwd=ROOT,check=True)
    subprocess.run(["git","push","origin","HEAD:"+BRANCH],cwd=ROOT,check=True)
    print("CONTAGEM GERAL BDBA CONFIRMADA",total,
          "ACUMULADO",cp["total_incorporated"],flush=True)

if __name__=="__main__":
    try:main()
    except Exception as exc:
        print("IMPEDIMENTO NO INVENTÁRIO BDBA:",type(exc).__name__,exc,
              file=sys.stderr,flush=True)
        sys.exit(1)
