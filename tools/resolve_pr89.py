#!/usr/bin/env python3
"""Conciliação estritamente limitada ao PR #89, executada uma única vez na Action."""
import json
import os
import re
import subprocess
from pathlib import Path

REPO = "linguasbiblicasoriginais-rgb/scriptura-lexicon"
EXPECTED_BASE = "1b22493b85f2bb7db5307253a66a651d28898b4f"
MAIN = "chat-gpt-commits"
SOURCE = "chat-gpt-jastrow"
COMMON_MARKER = "## JASTROW — terceira rodada: 100 novos verbetes (10/10/2026)"
JASTROW_EXTRA = [
    "lexicons/jastrow-211-235.js", "lexicons/jastrow-236-260.js",
    "lexicons/jastrow-261-285.js", "lexicons/jastrow-286-310.js",
    "lexicons/jastrow-popups-211-310.js",
    "lexicons/jastrow-311-335.js", "lexicons/jastrow-336-360.js",
    "lexicons/jastrow-361-385.js", "lexicons/jastrow-386-410.js",
    "lexicons/jastrow-popups-311-410.js",
]

def git(*args, check=True):
    p = subprocess.run(["git", *args], text=True, capture_output=True)
    if check and p.returncode:
        raise RuntimeError(f"git {args}: stdout={p.stdout.strip()} stderr={p.stderr.strip()}")
    return p.stdout.strip()

def read_stage(number, path):
    return git("show", f":{number}:{path}") + "\n"

def run():
    source_sha = git("rev-parse", "HEAD")
    assert source_sha == os.environ["GITHUB_SHA"], "Unpinned checkout!"
    assert git("ls-remote", "origin", f"refs/heads/{MAIN}").split()[0] == EXPECTED_BASE, "Base HEAD moved"
    assert git("ls-remote", "origin", f"refs/heads/{SOURCE}").split()[0] == source_sha, "Source HEAD moved"
    git("fetch", "--no-tags", "origin", MAIN, SOURCE)
    git("checkout", "-B", "pr89-reconciliation", EXPECTED_BASE)
    p = subprocess.run(["git", "merge", "--no-commit", "--no-ff", source_sha], text=True, capture_output=True)
    unresolved = git("diff", "--name-only", "--diff-filter=U").splitlines()
    assert set(unresolved) == {"README.md", "index.html"}, f"Unexpected conflicts: {unresolved}, merge={p.stderr}"
    ours, theirs = read_stage(2, "README.md"), read_stage(3, "README.md")
    assert COMMON_MARKER in ours and COMMON_MARKER in theirs
    common_ours = ours[ours.index(COMMON_MARKER):]
    common_theirs = theirs[theirs.index(COMMON_MARKER):]
    assert common_ours == common_theirs, "Shared README history diverged"
    base_prefix = ours[:ours.index(COMMON_MARKER)]
    head_prefix = theirs[:theirs.index(COMMON_MARKER)]
    assert base_prefix.startswith("# Scriptura Lexicon\n\n")
    assert head_prefix.startswith("# Scriptura Lexicon\n\n")
    intro = """## PR #89 — integração JASTROW até 410 verbetes (11/10/2026)

O PR [#89](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/89) concilia os 200 verbetes JASTROW adicionais `A00210`–`A00409` com os módulos anteriores de BDAG, LEH, PEREIRA, DGP (incluindo lote 076) e THAYER (incluindo lote 002). O JASTROW passa a ter 410 cartões e linhas na integração e preserva separadamente 600 registros originais do XML canônico. Próximo ID `A00410`, lema `אדכי`.

**Limite editorial:** as traduções incluem sínteses, com revisão filológica integral, notas e exemplos pendentes; testes em navegador, popups dinâmicos e acessibilidade ainda não realizados. `total_audited=0` permanece. As afirmações históricas mais abaixo de que somente 210 JASTROW estavam integrados se referem ao estado anterior ao PR #89. A fusão técnica é um merge Git com dois pais, sem mudanças em `main` e sem exclusão de branches.

"""
    merged_readme = ("# Scriptura Lexicon\n\n" + intro
                     + head_prefix[len("# Scriptura Lexicon\n\n"):]
                     + base_prefix[len("# Scriptura Lexicon\n\n"):]
                     + common_ours)
    assert "## PR #87" in merged_readme and "## JASTROW — quinta rodada" in merged_readme
    Path("README.md").write_text(merged_readme, encoding="utf-8")
    idx = read_stage(2, "index.html")
    other_idx = read_stage(3, "index.html")
    anchor = '    <script src="lexicons/jastrow-popups-111-210.js"></script>\n'
    assert idx.count(anchor) == 1
    assert all(('src="' + v + '"') in other_idx and ('src="' + v + '"') not in idx for v in JASTROW_EXTRA)
    idx = idx.replace(anchor, anchor + "".join('    <script src="' + v + '"></script>\n' for v in JASTROW_EXTRA))
    assert all(('src="' + v + '"') in idx for v in ["lexicons/dgp-batch-076.js", "lexicons/thayer.js", "lexicons/thayer-batch-002.js"])
    assert idx.index('src="lexicons/thayer.js"') > idx.index('src="lexicons/jastrow-popups-311-410.js"')
    Path("index.html").write_text(idx, encoding="utf-8")
    progress_path = Path("lexicons/jastrow-progress.json")
    progress = json.loads(progress_path.read_text(encoding="utf-8"))
    scope = progress["scope"]
    assert (scope["total_published"], scope["total_integrated"], scope["total_audited"]) == (410, 210, 0)
    scope["total_integrated"] = 410
    scope["editorial_status"] = "410 JASTROW integrados tecnicamente pelo PR #89; revisão filológica integral e teste de navegador pendentes; total_audited=0."
    progress["last_integration"] = {"pr": 89, "source_sha": source_sha, "base_before": EXPECTED_BASE, "total_integrated": 410, "total_audited": 0, "filological_audit": "pending", "browser_audit": "pending"}
    for item in progress["batches"]:
        if item.get("batch") in (4, 5):
            item["integration_status"] = "Integrado tecnicamente por PR #89; auditoria filológica pendente"
    progress_path.write_text(json.dumps(progress, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    rules = Path("regras/Rintegracao.txt")
    rules.write_text(rules.read_text(encoding="utf-8").rstrip() + """

19. PR #89 — JASTROW 410 (11/10/2026)
    Origem chat-gpt-jastrow, destino chat-gpt-commits. Resolver somente README.md e index.html conservando literalmente o histórico de THAYER/DGP e de JASTROW. Os dez scripts novos de JASTROW, os XML 401–600, workflow, regras e progresso transitam para a base sem perda; scripts THAYER e DGP76 permanecem. Atualizar manifesto integrado JASTROW para 410 registros, próximo A00410, 600 registros-fonte, 0 auditados filologicamente; ressalvar revisão filológica e testes de navegador. Criar merge real de dois pais e preservar origem/main.
""", encoding="utf-8")
    git("add", "README.md", "index.html", "lexicons/jastrow-progress.json", "regras/Rintegracao.txt")
    assert not git("diff", "--name-only", "--diff-filter=U"), "Conflicts remain"
    git("diff", "--cached", "--check")
    # Validate runtime HTML without browser or DOM and check lexicon coexistence.
    html = Path("index.html").read_text(encoding="utf-8")
    for path in JASTROW_EXTRA + ["lexicons/dgp-batch-076.js", "lexicons/thayer.js", "lexicons/thayer-batch-002.js"]:
        assert ('src="' + path + '"') in html and Path(path).is_file(), f"Missing: {path}"
    assert html.count('id="jastrow-search-anchor"') == 1 and html.count('id="jastrow-entry-anchor"') == 1
    node_script = r"""
const fs=require('fs'), vm=require('vm');
global.window={ScripturaLexicons:{}};
const html=fs.readFileSync('index.html','utf8');
const modules=[...html.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1]).filter(x=>x.startsWith('lexicons/jastrow')&&x.endsWith('.js'));
for(const f of modules) vm.runInThisContext(fs.readFileSync(f,'utf8'),{filename:f});
const lex=window.ScripturaLexicons.JASTROW;
const rows=[...lex.rowsHtml.matchAll(/<tr class="search-row"[^>]*>/g)].map(x=>x[0].match(/data-target="([^"]+)"/)[1]);
const cards=[...lex.cardsHtml.matchAll(/<article[^>]*class="entry-card"[^>]*>/g)].map(x=>x[0].match(/id="([^"]+)"/)[1]);
if(rows.length!==410||cards.length!==410||new Set(rows).size!==410||rows.some((x,i)=>x!==cards[i]||x!==('entry-jastrow-a'+String(i).padStart(5,'0'))))throw Error('JASTROW rows/cards IDs');
if(lex.bibliographicTerms.length!==new Set(lex.bibliographicTerms.map(x=>x.key.toLocaleLowerCase('pt-BR'))).size)throw Error('Tooltip duplicate');
process.stdout.write('PR89_AUDIT_PASS rows=410 cards=410 targets=410 popupTerms='+lex.bibliographicTerms.length+'\\n');
"""
    subprocess.run(["node", "-e", node_script], check=True)
    git("config", "user.name", "github-actions[bot]")
    git("config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com")
    git("commit", "-m", "Resolver e mesclar PR #89: JASTROW 410 + THAYER/DGP sem perdas")
    final = git("rev-parse", "HEAD")
    parents = git("rev-list", "--parents", "-n", "1", "HEAD").split()
    assert len(parents) == 3 and parents[1] == EXPECTED_BASE and parents[2] == source_sha
    assert git("ls-remote", "origin", f"refs/heads/{MAIN}").split()[0] == EXPECTED_BASE, "Base moved before push"
    git("push", "origin", f"HEAD:refs/heads/{MAIN}")
    print(f"PR89_MERGED_SOURCE_PARENT={source_sha}")
    print(f"PR89_MERGED_BASE_PARENT={EXPECTED_BASE}")
    print(f"PR89_MERGED_SHA={final}")

if __name__ == "__main__":
    run()
