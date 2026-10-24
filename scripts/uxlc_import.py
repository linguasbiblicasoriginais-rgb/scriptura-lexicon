#!/usr/bin/env python3
"""Importador UXLC 2.6 fixado por SHA-256. Executar na raiz do Scriptura Lexicon."""
import hashlib
import json
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

ROOT=Path(__file__).resolve().parent.parent
HASH="423469bdcc4bfe36d7666f8e76fbd02c1674d77469093c06cee9779c0fba83e3"
SOURCE="https://www.tanach.us/Books/Tanach.xml.zip"
ROWS="""Genesis|GEN|genesis|50
Exodus|EXO|exodus|40
Leviticus|LEV|leviticus|27
Numbers|NUM|numbers|36
Deuteronomy|DEU|deuteronomy|34
Joshua|JOS|joshua|24
Judges|JDG|judges|21
Samuel 1|1SA|1-samuel|31
Samuel 2|2SA|2-samuel|24
Kings 1|1KI|1-kings|22
Kings 2|2KI|2-kings|25
Isaiah|ISA|isaiah|66
Jeremiah|JER|jeremiah|52
Ezekiel|EZK|ezekiel|48
Hosea|HOS|hosea|14
Joel|JOL|joel|4
Amos|AMO|amos|9
Obadiah|OBA|obadiah|1
Jonah|JON|jonah|4
Micah|MIC|micah|7
Nahum|NAM|nahum|3
Habakkuk|HAB|habakkuk|3
Zephaniah|ZEP|zephaniah|3
Haggai|HAG|haggai|2
Zechariah|ZEC|zechariah|14
Malachi|MAL|malachi|3
Psalms|PSA|psalms|150
Proverbs|PRO|proverbs|31
Job|JOB|job|42
Song of Songs|SNG|song-of-songs|8
Ruth|RUT|ruth|4
Lamentations|LAM|lamentations|5
Ecclesiastes|ECC|ecclesiastes|12
Esther|EST|esther|10
Daniel|DAN|daniel|12
Ezra|EZR|ezra|10
Nehemiah|NEH|nehemiah|13
Chronicles 1|1CH|1-chronicles|29
Chronicles 2|2CH|2-chronicles|36"""
BOOKS=[(name,code,slug,int(chapters)) for name,code,slug,chapters in
       (line.split("|") for line in ROWS.splitlines())]
ALIASES={"Samuel 1":["1 Samuel"],"Samuel 2":["2 Samuel"],
         "Kings 1":["1 Kings"],"Kings 2":["2 Kings"],
         "Chronicles 1":["1 Chronicles"],"Chronicles 2":["2 Chronicles"],
         "Song of Songs":["Song of Solomon","Song of songs"],"Psalms":["Psalm"]}
def book_key(name):
    """Formas UXLC com underscore ou espaço, sem alterar o nome canônico."""
    return re.sub(r"[_\s]+"," ",name).casefold().strip()
def need(test,msg):
    if not test:
        raise RuntimeError(msg)
def local(tag):
    return tag.rsplit("}",1)[-1]
def encoded(obj):
    return json.dumps(obj,ensure_ascii=False,separators=(",",":"))
def word_text(node):
    result=node.text or ""
    for ch in node:
        if local(ch.tag)!="x":
            result+=word_text(ch)
        result+=ch.tail or ""
    return result
def units(s):
    return len(s.encode("utf-16-le"))//2
def verse_tokens(node,name,c,v):
    children=list(node)
    has_q=any(local(x.tag)=="q" for x in children)
    events=[]; alternatives=[]
    for x in children:
        t=local(x.tag)
        if t in ("w","q","k"):
            value=word_text(x)
            need(bool(value) and value==value.strip(),f"Palavra XML inválida: {name} {c}:{v}")
            if t!="w":
                alternatives.append({"kind":t,"text":value})
            if t!="k" or not has_q:
                events.append(("word",value))
        elif t in ("pe","samekh","פ","ס"):
            # XML UXLC representa parashot abertas por <pe/> e fechadas por
            # <samekh/>. Compatibilidade explícita com tags hebraicas.
            events.append(("mark",{"pe":"פ","samekh":"ס"}.get(t,t)))
        elif t in ("reversednun","׆"):
            # Sinal massorético de nun invertido, Unicode U+05C6.
            # É um elemento próprio do XML, não uma palavra nem uma parashah.
            value=word_text(x) or "׆"
            need(value=="׆",f"Nun invertido inesperado em {name} {c}:{v}: {value!r}")
            events.append(("glyph",value))
        elif t=="x":
            pass  # Nota editorial não é texto bíblico licenciável.
        else:
            raise RuntimeError(f"Elemento XML desconhecido em {name} {c}:{v}: {t}")
    need(any(k=="word" for k,_ in events),f"Versículo sem palavra: {name} {c}:{v}")
    parts=[];marks=[];reversed_nuns=[]
    for i,(kind,value) in enumerate(events):
        if kind in ("word","glyph"):
            if parts and not parts[-1].endswith("־"):
                parts.append(" ")
            if kind=="glyph":
                reversed_nuns.append(units("".join(parts)))
            parts.append(value)
        else:
            marks.append({"offset":units("".join(parts)),"type":value,
                          "terminal":not any(k=="word" for k,_ in events[i+1:])})
    result="".join(parts)
    need(all(result.encode("utf-16-le")[offset*2:offset*2+2].decode("utf-16-le")=="׆"
             for offset in reversed_nuns),f"Offset de nun invertido incorreto: {name} {c}:{v}")
    return result,marks,alternatives,reversed_nuns
def parse_book(z,member,name,code,slug,expected):
    root=ET.fromstring(z.read(member))
    chapters=[e for e in root.iter() if local(e.tag)=="c" and e.get("n","").isdigit()]
    need(len(chapters)==expected,f"{name}: capítulos {len(chapters)} != {expected}")
    result={}; chapter_lengths=[]; pet=setum=variants=reversed_count=0
    for c,chapter in enumerate(chapters,1):
        need(int(chapter.get("n"))==c,f"{name}: capítulo fora de ordem")
        vv=[e for e in chapter.iter() if local(e.tag)=="v" and e.get("n","").isdigit()]
        need(bool(vv),f"{name} {c}: sem versículos")
        verses={};typ={};internal={};alternate={};reversed_positions={}
        for v,node in enumerate(vv,1):
            need(int(node.get("n"))==v,f"{name} {c}:{v}: numeração XML fora de ordem")
            text,marks,alts,nun_positions=verse_tokens(node,name,c,v)
            verses[str(v)]=text
            if nun_positions:
                reversed_positions[str(v)]=nun_positions
                reversed_count+=len(nun_positions)
            for m in marks:
                if m["type"]=="פ":pet+=1
                else:setum+=1
                if m["terminal"]:
                    need(str(v) not in typ,f"{name} {c}:{v}: parashot terminais duplicadas")
                    typ[str(v)]=m["type"]
                else:
                    internal.setdefault(str(v),[]).append(
                        {"offset":m["offset"],"type":m["type"]})
            if alts:
                alternate[str(v)]=alts;variants+=len(alts)
        chapter_lengths.append(len(vv))
        path=f"scriptures/texts/uxlc-{slug}-{c}.js"
        lines=[
            f"/* Unicode/XML Leningrad Codex UXLC 2.6; {name} {c}; {HASH} */",
            "(function(){","'use strict';",
            "const verses="+encoded(verses)+";",
            "const types="+encoded(typ)+";",
            "window.ScripturaScriptureTexts ||= {};",
            "window.ScripturaScriptureTexts.UXLC ||= {};",
            f'window.ScripturaScriptureTexts.UXLC["{code}"] ||= {{}};',
            f'window.ScripturaScriptureTexts.UXLC["{code}"][{c}]=verses;',
            "window.ScripturaScriptureParagraphBreaks ||= {};",
            "window.ScripturaScriptureParagraphBreaks.UXLC ||= {};",
            f'window.ScripturaScriptureParagraphBreaks.UXLC["{code}"] ||= {{}};',
            f'window.ScripturaScriptureParagraphBreaks.UXLC["{code}"][{c}]='+
                encoded([int(x) for x in typ])+";",
            "window.ScripturaScriptureParashahTypes ||= {};",
            "window.ScripturaScriptureParashahTypes.UXLC ||= {};",
            f'window.ScripturaScriptureParashahTypes.UXLC["{code}"] ||= {{}};',
            f'window.ScripturaScriptureParashahTypes.UXLC["{code}"][{c}]=types;',
        ]
        if internal:
            lines.extend([
                "window.ScripturaScriptureInlineParashahTypes ||= {};",
                "window.ScripturaScriptureInlineParashahTypes.UXLC ||= {};",
                f'window.ScripturaScriptureInlineParashahTypes.UXLC["{code}"] ||= {{}};',
                f'window.ScripturaScriptureInlineParashahTypes.UXLC["{code}"][{c}]='+
                encoded(internal)+";"
            ])
        if alternate:
            lines.extend([
                "window.ScripturaScriptureUXLCVariants ||= {};",
                "window.ScripturaScriptureUXLCVariants.UXLC ||= {};",
                f'window.ScripturaScriptureUXLCVariants.UXLC["{code}"] ||= {{}};',
                f'window.ScripturaScriptureUXLCVariants.UXLC["{code}"][{c}]='+
                encoded(alternate)+";"
            ])
        if reversed_positions:
            lines.extend([
                "window.ScripturaScriptureUXLCReversedNunPositions ||= {};",
                "window.ScripturaScriptureUXLCReversedNunPositions.UXLC ||= {};",
                f'window.ScripturaScriptureUXLCReversedNunPositions.UXLC["{code}"] ||= {{}};',
                f'window.ScripturaScriptureUXLCReversedNunPositions.UXLC["{code}"][{c}]='+
                encoded(reversed_positions)+";"
            ])
        lines.extend(["})();",""])
        result[path]="\n".join(lines)
    return result,{"name":name,"id":code,"slug":slug,"chapters":expected,
                   "verses":sum(chapter_lengths),"perChapter":chapter_lengths,
                   "petuchot":pet,"setumot":setum,"variantTokens":variants,
                   "reversedNuns":reversed_count}
def main():
    need(len(sys.argv)==2,"Uso: scripts/uxlc_import.py /caminho/Tanach.xml.zip")
    data=Path(sys.argv[1]).read_bytes()
    need(len(data)==2395050,"Tamanho do arquivo ZIP diferente do UXLC 2.6")
    digest=hashlib.sha256(data).hexdigest()
    need(digest==HASH,"SHA-256 inválido: "+digest)
    generated={}; progress=[]
    with zipfile.ZipFile(sys.argv[1]) as z:
        members=z.namelist()
        # Inspeção exaustiva, antes de produzir qualquer arquivo:
        # se aparecer tag nova, a importação falha com inventário de fonte.
        allowed={"w","q","k","pe","samekh","פ","ס","reversednun","׆","x"}
        unexpected={}
        book_stems={book_key(alias)
                    for name,code,slug,chapters in BOOKS
                    for alias in [name]+ALIASES.get(name,[])}
        for member in members:
            if not member.lower().endswith(".xml") or member.lower().endswith(".dh.xml"):
                continue
            if book_key(Path(member).stem) not in book_stems:
                continue
            root=ET.fromstring(z.read(member))
            for node in root.iter():
                if local(node.tag)!="v" or not node.get("n","").isdigit():
                    continue
                for child in node:
                    t=local(child.tag)
                    if t not in allowed:
                        unexpected.setdefault(member,{}).setdefault(t,0)
                        unexpected[member][t]+=1
        need(not unexpected,"Elementos filhos de versículo ainda não tratados: "+repr(unexpected))
        print("Inventário XML: todas as tags de versículo reconhecidas.",flush=True)
        for name,code,slug,chapters in BOOKS:
            candidates=[name]+ALIASES.get(name,[])
            candidate_keys={book_key(x) for x in candidates}
            matches=[p for p in members
                     if p.lower().endswith(".xml")
                     and not p.lower().endswith(".dh.xml")
                     and book_key(Path(p).stem) in candidate_keys]
            need(len(matches)==1,
                 f"Arquivo do livro {name} não identificado inequivocamente: {matches}; "
                 f"candidatos={candidates}; arquivos XML={list(p for p in members if p.lower().endswith('.xml'))}")
            chunks,status=parse_book(z,matches[0],name,code,slug,chapters)
            need(not generated.keys() & chunks.keys(),"Caminho duplicado")
            generated.update(chunks);progress.append(status)
            print(f"VALIDADO: {name}: {chapters} capítulos; {status['verses']} versículos",flush=True)
    need(len(progress)==39 and len(generated)==929,
         "O corpus não alcançou os 39 livros e 929 capítulos esperados")
    total=sum(x["verses"] for x in progress)
    need(22000<total<25000,f"Versículos totais inesperados: {total}")
    # Arquivamento foi realizado em um commit separado, com os SHAs históricos intactos.
    archive=ROOT/"scriptures/archive/legacy-pre-uxlc-2026-10-23"
    need(len(list((archive/"texts").glob("bhs-*.js")))==324,
         "Arquivo histórico incompleto: migração proibida")
    old=list((ROOT/"scriptures/texts").glob("bhs-*.js"))
    need(len(old)==324,f"Módulos ativos legados diferentes do esperado: {len(old)}")
    indexfile=ROOT/"index.html"
    html=indexfile.read_text(encoding="utf8")
    html,removed=re.subn(r'(?m)^[ \t]*<script defer src="scriptures/texts/bhs-[^"]+\.js"></script>\r?\n',"",html)
    need(removed==324,f"Links BHS removidos: {removed}, esperado 324")
    anchor='    <script defer src="scriptures/texts/lxx-genesis-1.js"></script>'
    need(html.count(anchor)==1,"Âncora HTML da LXX ausente")
    html=html.replace(anchor,"".join(
        '    <script defer src="'+path+'"></script>\n' for path in generated)+anchor)
    readfile=ROOT/"scriptures/reader.js"
    reader=readfile.read_text(encoding="utf8")
    need('"BHS":"' in reader,"Catalogação BHS não encontrada")
    reader=reader.replace("BHS","UXLC")
    reader=reader.replace("Biblia Hebraica Stuttgartensia (UXLC)",
                          "Unicode/XML Leningrad Codex (UXLC 2.6)")
    reader=reader.replace(
       '"https://www.die-bibel.de/en/bible/" + state.edition + "/" + selected.id + "." + state.chapter',
       '(state.edition === "UXLC" ? "https://www.tanach.us/" : "https://www.die-bibel.de/en/bible/" + state.edition + "/" + selected.id + "." + state.chapter)')
    popupfile=ROOT/"scriptures/word-popups.js"
    popup=popupfile.read_text(encoding="utf8")
    need('edition === "BHS" ? "BHS"' in popup,"Glossas hebraicas BHS desconhecidas")
    popup=popup.replace('edition === "BHS" ? "BHS"',
                        '(edition === "BHS" || edition === "UXLC") ? "BHS"')
    manifest={"source":"Unicode/XML Leningrad Codex","edition":"UXLC 2.6",
              "build":"27.7","url":SOURCE,"sha256":digest,"zipBytes":len(data),
              "totalBooks":39,"completedBooks":39,"chapters":929,
              "verses":total,"books":progress,
              "reversedNuns":sum(x["reversedNuns"] for x in progress),
              "qerePolicy":"qere na leitura; ketiv registrado separadamente",
              "legacyArchived":324}
    verification=r''' "use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const manifest=JSON.parse(fs.readFileSync("scriptures/uxlc-progress.json","utf8"));
assert.equal(manifest.books.length,39);
const window={};
const context=vm.createContext({window});
vm.runInContext(fs.readFileSync("scriptures/word-popups.js","utf8"),context);
let chapters=0,verses=0,reversedNuns=0;
for (const book of manifest.books) {
  for (let c=1;c<=book.chapters;c++) {
    const path="scriptures/texts/uxlc-"+book.slug+"-"+c+".js";
    vm.runInContext(fs.readFileSync(path,"utf8"),context,{filename:path});
    const data=window.ScripturaScriptureTexts.UXLC[book.id][c];
    assert.equal(Object.keys(data).length,book.perChapter[c-1],path);
    for (const value of Object.values(data)) {
      assert.ok(value);
      assert.equal(window.ScripturaWordPopups.tokenize(value).map(t=>t.text).join(""),value);
      verses++;
    }
    const perChapter=window.ScripturaScriptureUXLCReversedNunPositions?.UXLC?.[book.id]?.[c] || {};
    for (const [verse,offsets] of Object.entries(perChapter)) {
      for (const offset of offsets) {
        assert.equal(data[verse].slice(offset,offset+1),"׆",path+" nun invertido");
        reversedNuns++;
      }
    }
    chapters++;
  }
}
assert.equal(chapters,929);
assert.equal(verses,manifest.verses);
assert.equal(reversedNuns,manifest.reversedNuns);
assert.equal(window.ScripturaScriptureTexts.BHS,undefined);
assert.equal(window.ScripturaWordPopups.getInfo("UXLC","בְּרֵאשִׁ֖ית").meaning,"no princípio");
console.log("OK: UXLC",chapters,"capítulos,",verses,"versículos");
'''.lstrip()
    rows="\n".join(
        f"| {i:02d} | {o['name']} | {o['chapters']}/{o['chapters']} | {o['verses']} | 100% |"
        for i,o in enumerate(progress,1))
    readme=(
      "# Texto hebraico do Scriptura Lexicon — UXLC 2.6\n\n"
      "Fonte: Unicode/XML Leningrad Codex, UXLC 2.6 (build 27.7), disponível em "
      +SOURCE+". A transcrição hebraica pode ser livremente copiada nos termos de "
      "https://www.tanach.us/License.html. Os demais arquivos editoriais possuem "
      "outras restrições e não são reproduzidos neste corpus.\n\n"
      "SHA-256 do ZIP fonte: "+HASH+". Cada palavra XML é copiada sem normalização "
      "Unicode. O texto de leitura representa qere quando disponível e retém "
      "as palavras ketiv em metadados; as marcas פ e ס são registradas com "
      "sua posição. Elementos XML reversednun são representados por ׆ "
      "(U+05C6), com offsets UTF-16 e testes de posição. Espaços entre "
      "palavras XML são representação derivada; "
      "não se afirma que o módulo JavaScript seja uma transcrição byte a byte "
      "do arquivo XML. Anotações editoriais não foram publicadas.\n\n"
      "## Progresso\n\n"
      "| # | Livro | Capítulos | Versículos | Progresso |\n"
      "|---:|---|---:|---:|---:|\n"+rows+"\n\n"
      "Total: 39/39 livros, 929/929 capítulos, "+str(total)+" versículos.\n\n"
      "## Histórico\n\n"
      "Os 324 módulos antigos, com documentação e testes originais, "
      "permanecem em scriptures/archive/legacy-pre-uxlc-2026-10-23/, "
      "apenas para comparação e rastreabilidade; não são carregados "
      "pela edição UXLC do leitor.\n")
    # Etapa de escrita somente após validar o ZIP, seus livros e o legado arquivado.
    for path,content in generated.items():
        target=ROOT/path
        target.parent.mkdir(parents=True,exist_ok=True)
        target.write_text(content,encoding="utf8")
    (ROOT/"scriptures/uxlc-progress.json").write_text(
        json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
    (ROOT/"scriptures/README.md").write_text(readme,encoding="utf8")
    (ROOT/"tests/scripture-word-popups.test.cjs").write_text(verification,encoding="utf8")
    readfile.write_text(reader,encoding="utf8")
    popupfile.write_text(popup,encoding="utf8")
    indexfile.write_text(html,encoding="utf8")
    for oldfile in old:
        oldfile.unlink()
    print("PRONTO PARA VALIDAÇÃO NODE:",len(progress),"livros,",len(generated),
          "capítulos,",total,"versículos",flush=True)

if __name__=="__main__":
    main()
