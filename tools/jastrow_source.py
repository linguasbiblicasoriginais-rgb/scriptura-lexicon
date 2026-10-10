#!/usr/bin/env python3
"""Stage a verified Jastrow SOURCE batch; never mark entries as translated.

Follows the Sefaria DictionaryNode's firstWord/next_hw chain.
No dependencies beyond Python 3.11 stdlib. No work on other dictionaries.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import sys
import tempfile
import time
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

API = "https://www.sefaria.org/api"
LEXICON = "Jastrow Dictionary"
USER_AGENT = "ScripturaLexicon-EditorialSourceCheck/1.0 (+https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon)"


def fetch_json(url: str):
    """Three attempts total for transient HTTP failures. Permanent errors fail."""
    for attempt in range(3):
        try:
            req = Request(url, headers={"User-Agent": USER_AGENT, "Accept": "application/json"})
            with urlopen(req, timeout=25) as response:
                data = response.read()
            return json.loads(data.decode("utf-8"))
        except HTTPError as exc:
            if exc.code not in (429, 500, 502, 503, 504) or attempt == 2:
                raise RuntimeError(f"Source HTTP {exc.code} at {url}") from exc
        except (TimeoutError, URLError, json.JSONDecodeError) as exc:
            if attempt == 2:
                raise RuntimeError(f"Source fetch failed at {url}: {type(exc).__name__}: {exc}") from exc
        time.sleep(2 ** attempt)
    raise RuntimeError(f"Source unavailable: {url}")


def starting_word() -> tuple[str, dict]:
    failures = []
    for url in (f"{API}/v2/index/Jastrow", f"{API}/index/Jastrow"):
        try:
            data = fetch_json(url)
            nodes = (data.get("schema") or {}).get("nodes", [])
            node = next((x for x in nodes if x.get("nodeType") == "DictionaryNode"
                         and x.get("lexiconName") == LEXICON), None)
            if node and isinstance(node.get("firstWord"), str):
                return node["firstWord"], {"index_endpoint": url, "index_firstWord": node["firstWord"],
                                            "index_lastWord": node.get("lastWord")}
            failures.append(f"{url}: DictionaryNode/firstWord missing")
        except RuntimeError as exc:
            failures.append(str(exc))
    raise RuntimeError("Unable to confirm canonical firstWord. " + "; ".join(failures))


def fetch_entry(headword: str) -> dict:
    url = f"{API}/words/{quote(headword, safe='')}"
    data = fetch_json(url)
    if not isinstance(data, list):
        raise RuntimeError(f"Unexpected API object for {headword!r}")
    candidates = [e for e in data if isinstance(e, dict) and e.get("parent_lexicon") == LEXICON
                  and e.get("headword") == headword]
    if len(candidates) != 1:
        raise RuntimeError(f"Cannot uniquely select {headword!r}; exact Jastrow matches={len(candidates)}")
    entry = candidates[0]
    if not isinstance(entry.get("content"), dict) or not entry["content"].get("senses"):
        raise RuntimeError(f"Missing lexical content/senses at {headword!r}")
    return entry


def stage(limit: int, output: Path, start: str | None = None, delay: float = 0.35):
    if output.exists():
        raise RuntimeError(f"Refusing to overwrite existing source batch: {output}")
    first, index = starting_word()
    headword = start or first
    records, heads, ids = [], set(), set()
    for ordinal in range(1, limit + 1):
        if not headword:
            raise RuntimeError(f"Source chain ended after {len(records)} entries, before requested {limit}")
        if headword in heads:
            raise RuntimeError(f"Headword pointer cycle: {headword!r}")
        entry = fetch_entry(headword)
        rid = entry.get("rid")
        if not isinstance(rid, str) or not rid or rid in ids:
            raise RuntimeError(f"Absent/duplicate rid at {headword!r}: {rid!r}")
        next_hw = entry.get("next_hw")
        if ordinal < limit and (not isinstance(next_hw, str) or not next_hw):
            raise RuntimeError(f"No next_hw before batch end at {headword!r}")
        records.append({"ordinal": ordinal, "source_ref": f"Jastrow, {headword}", "source": entry})
        heads.add(headword)
        ids.add(rid)
        print(f"{ordinal:03d}/{limit:03d} {rid} {headword}", flush=True)
        headword = next_hw
        if ordinal < limit:
            time.sleep(delay)

    json_lines = "".join(json.dumps(e, ensure_ascii=False, sort_keys=True) + "\n" for e in records)
    sha256 = hashlib.sha256(json_lines.encode("utf-8")).hexdigest()
    batch = {
        "source": LEXICON, "source_url": "https://www.sefaria.org/Jastrow",
        "status": "source_only_untranslated_not_published", "entry_count": len(records),
        "first_headword": records[0]["source"]["headword"],
        "last_headword": records[-1]["source"]["headword"],
        "next_headword": headword, "canonical_index": index,
        "jsonl_sha256": sha256, "records": records,
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(batch, ensure_ascii=False, indent=2) + "\n"
    with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", dir=output.parent,
                                      prefix=".jastrow-", suffix=".tmp", delete=False) as file:
        tmp = Path(file.name)
        file.write(payload)
    os.replace(tmp, output)
    print(f"SOURCE_BATCH_OK records={len(records)} sha256_jsonl={sha256} "
          f"first={batch['first_headword']} last={batch['last_headword']} next={headword}", flush=True)


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--limit", type=int, default=200)
    ap.add_argument("--start", default=None)
    ap.add_argument("--delay", type=float, default=0.35)
    ap.add_argument("--output", default="lexicons/jastrow-source-lote-0001.json")
    args = ap.parse_args()
    if not (1 <= args.limit <= 200):
        ap.error("limit must be 1..200")
    if args.delay < 0.2:
        ap.error("delay must be >= 0.2 seconds")
    try:
        stage(args.limit, Path(args.output), args.start, args.delay)
    except Exception as exc:
        print(f"JASTROW_SOURCE_BLOCKED: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
