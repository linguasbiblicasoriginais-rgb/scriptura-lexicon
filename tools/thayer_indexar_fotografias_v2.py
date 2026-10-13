#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""THAYER: inventario geométrico de TODAS as folhas do fac-símile.
Fonte exclusiva da detecção: _djvu.xml gerado da MESMA digitalização fotográfica.
Distingue candidatos extraídos de títulos cuja leitura foi visualmente confirmada.
NUNCA associa automaticamente a Strong nem a dataset lexical secundário.
"""
from __future__ import annotations
from collections import Counter,defaultdict
from concurrent.futures import ProcessPoolExecutor,as_completed
from datetime import datetime,timezone
import io
import json
import os
from pathlib import Path
import re
import statistics
import subprocess
import sys
import time
import urllib.request
import xml.etree.ElementTree as ET
from openpyxl import Workbook,load_workbook
from openpyxl.styles import Font,PatternFill,Alignment
from openpyxl.utils import get_column_letter

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"entregas/THAYER_inventario_fotografico_683_folhas.xlsx"
JSON=ROOT/"entregas/THAYER_inventario_fotografico_candidatos.json"
PDF=Path("/tmp/thayersgreekengl0000thay.pdf")
BASE="https://archive.org/download/thayersgreekengl0000thay/"
XML_URL=BASE+"thayersgreekengl0000thay_djvu.xml"
PDF_URL=BASE+"thayersgreekengl0000thay.pdf"
START,LAST=25,707
GREK=re.compile(r"[\u0370-\u03ff\u1f00-\u1fff]")
NON_WORD=re.compile(r"^[^A-Za-z\u0370-\u03ff\u1f00-\u1fff]*")
DEFINITION_PUNCT=re.compile(r"[,;:]|(?:\s[-–]\w)")
def get_bytes(url,timeout=120):
    req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0 (ScripturaLexicon photographic inventory)"})
    with urllib.request.urlopen(req,timeout=timeout) as r:return r.read()
def coords(word):
    try:return [int(i) for i in word.attrib.get("coords","").split(",")]
    except Exception:return [0,0,0,0]
def normalize(s):
    return re.sub(r"\s+"," ",str(s or "")).strip()
def extract():
    print("Download da camada geométrica extraída das imagens (DjVuXML).",flush=True)
    buf=get_bytes(XML_URL,timeout=140)
    print("Bytes XML:",len(buf),flush=True)
    root=ET.fromstring(buf)
    pages=root.findall(".//OBJECT")
    if len(pages)!=762:raise ValueError(f"Número de folhas da digitalização incompatível: {len(pages)}")
    catalog=[]
    coverage=[]
    for pdf_no in range(START,LAST+1):
        o=pages[pdf_no-1]
        width,height=int(o.get("width") or 2450),int(o.get("height") or 3400)
        all_lines=[]
        for line in o.findall(".//LINE"):
            words=[w for w in line.findall("WORD") if normalize(w.text)]
            if not words:continue
            first=words[0]
            x,ybottom,xright,ytop=coords(first)
            if not(0<x<width and 0<ytop<height):continue
            raw=normalize(" ".join((w.text or "") for w in words[:10]))
            side="esquerda" if x<width*.51 else "direita"
            all_lines.append(dict(raw=raw,rawword=normalize(first.text),side=side,x=x,y=ytop,bottom=ybottom,
                                  first_width=xright-x,ocr_conf=first.attrib.get("x-confidence",""),word_count=len(words)))
        selected=[]
        for side in ("esquerda","direita"):
            line_list=[v for v in all_lines if v["side"]==side and 140<v["y"]<height-110 and v["word_count"]>=3]
            if len(line_list)<8:continue
            # Mais linhas corridas têm x alinhado na margem esquerda da coluna;
            # inícios de artigo são visivelmente recuados cerca de 30–55 px.
            lefts=sorted(v["x"] for v in line_list)
            baseline=lefts[min(len(lefts)-1,max(0,int(len(lefts)*.12)))]
            for v in line_list:
                d=v["x"]-baseline
                if not (23<=d<=125):continue
                token=NON_WORD.sub("",v["rawword"])
                if not token or token[0].isdigit() or len(token)<2:continue
                if v["raw"].startswith(("In ", "Thus ", "Hence ", "But ","For ","the ","and ","which ","cf. ")):continue
                # Cabeçalhos têm ordinariamente lema seguido de vírgula, flexão ou categoria.
                intro=v["raw"][:75]
                looks=bool(DEFINITION_PUNCT.search(intro[:min(52,len(intro))]))
                greekish=bool(GREK.search(token))
                starts_mark=v["rawword"].startswith(("*","'","\"","‘","“","†"))
                grade="prioridade alta" if looks and (starts_mark or greekish or 25<=d<=78) else "prioridade de revisão"
                selected.append({**v,"base_x":baseline,"recuo":d,"prioridade":grade})
        selected.sort(key=lambda v:(0 if v["side"]=="esquerda" else 1,v["y"]))
        # manter candidatos com a mesma palavra em posições diferentes — possíveis homógrafos.
        for row in selected:
            catalog.append({"pagina_pdf":pdf_no,"pagina_impressa":pdf_no-24,
                "coluna":row["side"],"y_scan":row["y"],"x_scan":row["x"],
                "largura_scan":width,"altura_scan":height,
                "texto_bruto_inicio":row["raw"],"primeira_palavra_original_ocr":row["rawword"],
                "confianca_ocr_origem":row["ocr_conf"],"recuo_x":row["recuo"],
                "categoria":row["prioridade"],"titulo_grego_ocr_fotografia":"",
                "confianca_ocr_grego":"","status":"CANDIDATO AUTOMÁTICO — NÃO VERIFICADO",
                "observacoes":"Detecção de recuo de linha no fac-símile. Não constitui confirmação visual de verbete."})
        coverage.append({"pagina_pdf":pdf_no,"pagina_impressa":pdf_no-24,"linhas_imagem":len(all_lines),
            "candidatos":len(selected),"processada":True,
            "observacao":"Sem candidato: examinar manualmente" if not selected else ""})
    print("Folhas rastreadas:",len(coverage),"Candidatos em primeira passagem:",len(catalog),flush=True)
    if len(coverage)!=683 or len(catalog)<500:raise ValueError("Extração geométrica insuficiente; não registrar falso total.")
    return catalog,coverage
def build(catalog,coverage,phase):
    w=Workbook()
    info=w.active;info.title="Método e estado"
    info_lines=[
        ["THAYER | INVENTÁRIO GEOMÉTRICO BASEADO NO FAC-SÍMILE"],
        ["Fonte primária","Fotografias da edição impressa de J. H. Thayer — Internet Archive thayersgreekengl0000thay"],
        ["Fonte da posição","thayersgreekengl0000thay_djvu.xml (OCR com coordenadas, produzido A PARTIR DAS MESMAS fotografias)"],
        ["Escopo",f"{len(coverage)} folhas lexicográficas, PDF 25–707, páginas impressas 1–683"],
        ["Folhas processadas",sum(p["processada"] for p in coverage)],
        ["Linhas candidatas",len(catalog)],
        ["Artigos filologicamente confirmados","NÃO APURADO"],
        ["Quantidade total de verbetes impressos","INDETERMINADA — não igualar quantidade de linhas candidatas ao número de artigos"],
        ["Etapa",phase],
        ["Critério de seleção","Início de linha recuado + características tipográficas inferidas. Pode haver falsos positivos e verbetes omitidos."],
        ["OCR de grego","Realizado apenas sobre recortes fotográficos dos candidatos, quando disponível; não editado com dicionários externos."],
        ["Distinção","A coluna de leitura de título gregos é candidata OCR, não transcrição manual revista."],
        ["Não utilizado","Nenhum dataset independente de Thayer nem números Strong foi usado como substituto dos títulos das fotografias."],
        ["Material complementar","Camada de OCR geométrico gerada pela própria digitalização; a imagem fotográfica prevalece."],
        ["Data",datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")],
        ["Próximo passo para um inventário confirmado","Cotejar visualmente os títulos indicados, distinguir remissões e eliminar candidatos que não sejam artigos."]
    ]
    for a in info_lines:info.append(a)
    index=w.create_sheet("Títulos candidatos")
    titles=["Nº candidato","Título grego da fotografia (OCR)","Trecho OCR da imagem","Página impressa",
        "Folha PDF","Coluna","X original","Y original","Confiança OCR grego","Classificação automática",
        "Situação filológica","Observações","Ver fotografia"]
    index.append(titles)
    for i,r in enumerate(catalog,1):
        href=f'https://archive.org/details/thayersgreekengl0000thay/page/n{r["pagina_pdf"]-1}/mode/1up'
        index.append([i,r.get("titulo_grego_ocr_fotografia") or "",r["texto_bruto_inicio"],
           r["pagina_impressa"],r["pagina_pdf"],r["coluna"],r["x_scan"],r["y_scan"],
           r.get("confianca_ocr_grego") or "",r["categoria"],r["status"],r["observacoes"],
           "Abrir foto"])
        link=index.cell(i+1,13);link.hyperlink=href;link.font=Font(color="12619A",underline="single")
    sh=w.create_sheet("Cobertura — 683 páginas")
    sh.append(["Página impressa","Folha PDF","Linhas reconhecidas","Candidatos","Página inspecionada computacionalmente","Conferência humana integral","Observações"])
    for p in coverage:
        sh.append([p["pagina_impressa"],p["pagina_pdf"],p["linhas_imagem"],p["candidatos"],
            "Sim — imagem digitalizada/OCR geométrico","Não",p["observacao"]])
    for ws in [index,sh]:
        ws.sheet_view.showGridLines=False
        ws.freeze_panes="C2"
        ws.auto_filter.ref=ws.dimensions
        for c in ws[1]:
            c.fill=PatternFill("solid",fgColor="123A53")
            c.font=Font(color="FFFFFF",bold=True)
            c.alignment=Alignment(wrap_text=True,vertical="center")
        ws.row_dimensions[1].height=36
    for c,dim in enumerate([13,38,60,18,16,15,16,16,19,26,43,70,18],1):
        index.column_dimensions[get_column_letter(c)].width=dim
    for c,dim in enumerate([20,15,23,16,48,32,58],1):
        sh.column_dimensions[get_column_letter(c)].width=dim
    for c,dim in enumerate([48,115],1):
        info.column_dimensions[get_column_letter(c)].width=dim
    info.sheet_view.showGridLines=False
    for cells in info:
        cells[0].font=Font(bold=True,color="123A53")
        if len(cells)>1:cells[1].alignment=Alignment(wrap_text=True,vertical="top")
    w.properties.title="THAYER | inventário de possíveis títulos do fac-símile (OCR; requer revisão)"
    w.properties.creator="Scriptura Lexicon"
    OUT.parent.mkdir(parents=True,exist_ok=True)
    w.save(OUT)
    print("Arquivo criado:",OUT,"tamanho:",OUT.stat().st_size,flush=True)
def publish(paths,commit_message):
    subprocess.run(["git","config","user.name","github-actions[bot]"],cwd=ROOT,check=True)
    subprocess.run(["git","config","user.email","41898282+github-actions[bot]@users.noreply.github.com"],cwd=ROOT,check=True)
    subprocess.run(["git","add","--"]+[str(p.relative_to(ROOT)) for p in paths],cwd=ROOT,check=True)
    c=subprocess.run(["git","diff","--cached","--quiet"],cwd=ROOT)
    if c.returncode==0:print("Nenhuma alteração a commitar",flush=True);return
    subprocess.run(["git","commit","-m",commit_message],cwd=ROOT,check=True)
    subprocess.run(["git","push","origin","HEAD:chat-gpt-thayer-indice-titulos"],cwd=ROOT,check=True)
    print("PUBLICADO:",commit_message,flush=True)
def download_pdf():
    if not PDF.exists() or PDF.stat().st_size<60_000_000:
        with urllib.request.urlopen(urllib.request.Request(PDF_URL,headers={"User-Agent":"Mozilla/5.0"}),timeout=180) as response,open(PDF,"wb") as o:
            while True:
                b=response.read(1024*1024)
                if not b:break
                o.write(b)
    if PDF.stat().st_size<60_000_000:raise RuntimeError("Fac-símile não foi baixado corretamente")
    print("Fac-símile original bytes:",PDF.stat().st_size,flush=True)
def enrich_single(item):
    """Renderiza folha, OCR grego somente nos recortes dos candidatos geométricos."""
    pdf_no, rows=item
    import fitz
    import pytesseract
    from PIL import Image,ImageEnhance,ImageOps
    with fitz.open(str(PDF)) as d:
        page=d[pdf_no-1]
        pix=page.get_pixmap(matrix=fitz.Matrix(2.3,2.3),colorspace=fitz.csGRAY,alpha=False)
        pic=Image.frombytes("L",(pix.width,pix.height),pix.samples)
    if not rows:return pdf_no,[]
    margin=12
    slot=110
    canvas=Image.new("L",(650,slot*len(rows)),255)
    for j,row in enumerate(rows):
        scalex=pic.width/row["largura_scan"]
        scaley=pic.height/row["altura_scan"]
        x=int((row["x_scan"]-14)*scalex)
        y=int((row["y_scan"]-12)*scaley)
        w=int(390*scalex)
        h=int(78*scaley)
        x=max(0,x);y=max(0,y)
        crop=pic.crop((x,y,min(pic.width,x+w),min(pic.height,y+h)))
        # Texto grego em tipos diminutos: ampliar e maximizar contraste.
        if crop.width>610:crop=crop.resize((610,int(crop.height*610/crop.width)))
        crop=ImageEnhance.Contrast(crop).enhance(1.6)
        crop=ImageOps.autocontrast(crop)
        if crop.height>90:crop=crop.resize((int(crop.width*90/crop.height),90))
        canvas.paste(crop,(12,j*slot+8))
    result=pytesseract.image_to_data(canvas,lang="grc",config="--psm 6",
        output_type=pytesseract.Output.DICT,timeout=180)
    buckets=defaultdict(list)
    for i,t in enumerate(result["text"]):
        t=normalize(t)
        if not t:continue
        y=int(result["top"][i])
        slotnum=y//slot
        if slotnum<0 or slotnum>=len(rows):continue
        buckets[slotnum].append((int(result["left"][i]),t,float(result["conf"][i])))
    outputs=[]
    for j,row in enumerate(rows):
        tokens=sorted(buckets[j],key=lambda z:z[0])
        wordlist=[tok for x,tok,co in tokens[:7]]
        raw=normalize(" ".join(wordlist))
        raw=re.sub(r"^[^\u0370-\u03ff\u1f00-\u1fff]*","",raw)
        m=re.match(r"^([\u0370-\u03ff\u1f00-\u1fff\u0300-\u036fΑ-Ωα-ω᾽'’\-]+)",raw)
        head=m.group(1).rstrip("'-᾽") if m else ""
        confidence=round(sum(co for x,tok,co in tokens[:3])/min(len(tokens),3),1) if tokens else None
        outputs.append((head,confidence,raw[:130]))
    return pdf_no,outputs
def greek_ocr(catalog,coverage):
    download_pdf()
    grouped=defaultdict(list)
    for i,r in enumerate(catalog):grouped[r["pagina_pdf"]].append((i,r))
    jobs=[(p,[r for i,r in grouped[p]]) for p in range(START,LAST+1)]
    done=0;passed=0
    with ProcessPoolExecutor(max_workers=3) as pool:
        future_map={pool.submit(enrich_single,j):j[0] for j in jobs}
        for fut in as_completed(future_map):
            pdfno=future_map[fut]
            try:
                _,items=fut.result()
                for (i,r),(head,conf,raw) in zip(grouped[pdfno],items):
                    if head and GREK.search(head):
                        catalog[i]["titulo_grego_ocr_fotografia"]=head
                        catalog[i]["confianca_ocr_grego"]=conf
                        catalog[i]["status"]="OCR GREGO DA FOTOGRAFIA — SEM CONFERÊNCIA MANUAL"
                        catalog[i]["observacoes"]=f"Trecho OCR grego: {raw}. Separar falsos cabeçalhos de artigos antes da contagem definitiva."
                        passed+=1
                    else:
                        catalog[i]["status"]="OCR GREGO SEM LEITURA — REVISAR FOTO"
            except Exception as e:
                for i,r in grouped[pdfno]:
                    catalog[i]["status"]="FALHA NO OCR GREGO — REVISAR FOTO"
                    catalog[i]["observacoes"]=f"Erro no processamento fotográfico: {str(e)[:125]}"
            done+=1
            if done%40==0:print("OCR fotográfico:",done,"/683 folhas;",passed,"lemas gregos provisórios",flush=True)
    print("Concluídas",done,"folhas, OCR grego aproveitável:",passed,"/",len(catalog),flush=True)
def main():
    if JSON.exists():
        existing=json.loads(JSON.read_text(encoding="utf-8"))
        catalog,coverage=existing["candidatos"],existing["folhas"]
        if len(coverage)!=683:
            raise RuntimeError("Checkpoint incompleto; não anunciar cobertura total.")
        print(f"Retomada a partir do checkpoint: {len(catalog)} candidatos, {len(coverage)} folhas",flush=True)
    else:
        catalog,coverage=extract()
        build(catalog,coverage,"FASE 1 — indexação geométrica das 683 páginas; OCR grego em preparação")
        JSON.write_text(json.dumps({"fonte":XML_URL,"folhas":coverage,"candidatos":catalog},ensure_ascii=False)+"\n",encoding="utf-8")
        publish([OUT,JSON],"THAYER: indexar geometricamente 683 folhas do fac-símile")
    try:
        greek_ocr(catalog,coverage)
    except Exception as e:
        print("EXTRAÇÃO GREGA INCOMPLETA: ",repr(e),flush=True)
        raise
    build(catalog,coverage,"FASE 2 — recortes das fotografias processados por OCR grego; ainda sem conferência humana exaustiva")
    JSON.write_text(json.dumps({"fonte":XML_URL,"folhas":coverage,"candidatos":catalog},ensure_ascii=False)+"\n",encoding="utf-8")
    publish([OUT,JSON],"THAYER: acrescentar OCR grego de 683 folhas fotografadas")
    print("FINAL: planilha de candidatos das 683 folhas publicada",flush=True)
if __name__=="__main__":main()
