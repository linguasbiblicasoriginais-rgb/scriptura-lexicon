#!/usr/bin/env python3
"""Inventário verificável da fonte Sefaria BDB (somente hebraico)."""
import json
import urllib.request
import urllib.error
from collections import Counter

def get(url, timeout=45):
    req=urllib.request.Request(url,headers={"User-Agent":"ScripturaLexicon-source-inventory/1.0","Accept":"application/json"})
    with urllib.request.urlopen(req,timeout=timeout) as fp:
        return json.load(fp)

def summarise(value):
    if isinstance(value,dict):
        return {"type":"dict","keys":list(value)[:30],
                "text":summarise(value["text"]) if "text" in value else None}
    if isinstance(value,list):
        return {"type":"list","length":len(value),
                "first":summarise(value[0]) if value else None}
    if isinstance(value,str):
        return {"type":"str","length":len(value),"beginning":value[:60]}
    return {"type":type(value).__name__}

def leaves(value):
    if isinstance(value,dict):
        for child in value.values():
            yield from leaves(child)
    elif isinstance(value,list):
        for child in value:
            yield from leaves(child)
    elif isinstance(value,str):
        if value.strip():yield value

def main():
    for name in ("BDB","BDB_Aramaic"):
        try:
            j=get("https://www.sefaria.org/api/index/"+name)
            print("SOURCE INDEX",name,"title",j.get("title"),"nodes",
                  [{k:n.get(k) for k in ("key","nodeType","lexiconName","firstWord","lastWord")}
                   for n in j.get("schema",{}).get("nodes",[])],flush=True)
        except Exception as e:print("INDEX ERROR",name,type(e).__name__,str(e),flush=True)
    for name in ("BDB","BDB_Aramaic"):
        try:
            d=get("https://www.sefaria.org/api/shape/"+name,timeout=20)
            print("SHAPE",name,json.dumps(d,ensure_ascii=False)[:1200],flush=True)
        except Exception as e:print("SHAPE ERROR",name,str(e),flush=True)
    try:
        j=get("https://raw.githubusercontent.com/Sefaria/Sefaria-Export/master/books.json",timeout=90)
        books=j.get("books",[]) if isinstance(j,dict) else j
        selected=[b for b in books if "BDB" in str(b.get("title",""))]
        print("EXPORT INDEX entries",len(books),"BDB TITLES",
              json.dumps(selected,ensure_ascii=False)[:8000],flush=True)
        for book in selected:
            if book.get("language")!="English" or book.get("versionTitle")!="merged":continue
            url=book.get("json_url")
            if not url:continue
            data=get(url,timeout=90)
            cnt=sum(1 for s in leaves(data.get("text",[]))) if isinstance(data,dict) else 0
            print("EXPORTED BDB",book.get("title"),"JSON URL",url,"shape",
                  json.dumps(summarise(data),ensure_ascii=False)[:1000],
                  "NONEMPTY LEAVES",cnt,flush=True)
    except Exception as e:
        print("EXPORT ERROR",type(e).__name__,str(e),flush=True)

if __name__=="__main__":main()
