#!/usr/bin/env python3
"""Stage the FIRST 200 ORIGINAL Jastrow entries from a pinned Sefaria XML.

This is source acquisition, NOT a Portuguese translation or publication.
No external packages. A failed download/parse never publishes a partial batch.
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
import unicodedata
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET

SOURCE_COMMIT = "947c1b91684df9f8b92f14cf0d281b5d4f29bfc7"
SOURCE_BLOB_SHA = "98292a0c219835df19b9da7cea1edbc4dcc6526d"
SOURCE_PATH = "dictionaries/Jastrow/data/01-Merged XML/Jastrow-full.xml"
SOURCE_URL = ("https://raw.githubusercontent.com/Sefaria/Sefaria-Data/"
              + SOURCE_COMMIT + "/dictionaries/Jastrow/data/"
              + "01-Merged%20XML/Jastrow-full.xml")
AGENT = "Scriptura-Lexicon-Jastrow/1.1 (public-domain lexical research)"


def request_source() -> bytes:
    for attempt in range(3):
        try:
            request = Request(SOURCE_URL, headers={"User-Agent": AGENT})
            with urlopen(request, timeout=90) as response:
                document = response.read()
            if len(document) < 1000000:
                raise ValueError("Upstream XML unexpectedly small")
            return document
        except HTTPError as exc:
            if exc.code not in (429, 500, 502, 503, 504) or attempt == 2:
                raise RuntimeError(f"HTTP {exc.code}: {SOURCE_URL}") from exc
        except (TimeoutError, URLError) as exc:
            if attempt == 2:
                raise RuntimeError(f"XML download failed: {exc}") from exc
        time.sleep(2 ** attempt)
    raise RuntimeError("Upstream source download failed")


def local_tag(tag):
    return tag.rsplit("}", 1)[-1]


def headword(entry):
    word = next((child for child in entry if local_tag(child.tag) == "head-word"), None)
    return "".join(word.itertext()).strip() if word is not None else ""


def unpointed(value):
    return "".join(c for c in unicodedata.normalize("NFD", value)
                   if unicodedata.category(c) != "Mn").strip()


def extract(source: bytes, limit: int, start_ordinal: int = 0) -> dict:
    # The XML is known to contain <entry> and <head-word> nodes,
    # per Sefaria-Data and Ezra Brand's documented parsing example.
    root = ET.fromstring(source)
    entries = [e for e in root.iter() if local_tag(e.tag) == "entry"]
    if len(entries) < start_ordinal + limit + 1:
        raise RuntimeError(f"Source has only {len(entries)} entries; need {start_ordinal + limit + 1} to confirm next")
    captured = entries[start_ordinal:start_ordinal + limit + 1]
    heads = [headword(e) for e in captured]
    if not all(heads):
        missing = [i + 1 for i, h in enumerate(heads) if not h]
        raise RuntimeError(f"Unlabeled entry at ordinal(s): {missing}")
    if start_ordinal == 0 and unpointed(heads[0]) != "א":
        raise RuntimeError(f"Canonical opening lemma mismatch: expected א; got {heads[0]!r}")
    records = []
    for i, entry in enumerate(captured[:limit], start_ordinal + 1):
        # Preserve full source subtree and all markup/attributes, not a shortened gloss.
        source_xml = ET.tostring(entry, encoding="unicode")
        if not source_xml.strip():
            raise RuntimeError(f"Empty XML entry at ordinal {i}")
        records.append({
            "ordinal": i, "source_id": f"jastrow-xml-{i:06d}",
            "headword": heads[i - 1],
            "source_xml": source_xml,
            "source_entry_sha256": hashlib.sha256(source_xml.encode("utf-8")).hexdigest()
        })
    return {
        "source": "Marcus Jastrow (Sefaria-Data upstream XML)",
        "source_start_ordinal": start_ordinal + 1,
        "source_end_ordinal": start_ordinal + len(records),
        "source_repository": "Sefaria/Sefaria-Data",
        "source_commit": SOURCE_COMMIT,
        "source_blob_sha": SOURCE_BLOB_SHA,
        "source_path": SOURCE_PATH,
        "source_url": SOURCE_URL,
        "source_xml_sha256": hashlib.sha256(source).hexdigest(),
        "status": "source_only_untranslated_not_published",
        "entry_count": len(records),
        "first_headword": heads[0],
        "last_headword": heads[limit - 1],
        "next_headword": heads[limit],
        "records": records
    }


def write_atomically(destination: Path, document: dict):
    if destination.exists():
        raise RuntimeError(f"Output already exists: {destination}")
    destination.parent.mkdir(parents=True, exist_ok=True)
    data = json.dumps(document, ensure_ascii=False, indent=2) + "\n"
    with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8",
                                      dir=destination.parent, delete=False,
                                      prefix=".jastrow-", suffix=".tmp") as tmp:
        tmp.write(data)
        temp_path = Path(tmp.name)
    try:
        os.replace(temp_path, destination)
    finally:
        temp_path.unlink(missing_ok=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--limit", type=int, default=200)
    parser.add_argument("--start-ordinal", type=int, default=0, help="Zero-based offset into original XML entries")
    parser.add_argument("--output", default="lexicons/jastrow-source-lote-0001.json")
    args = parser.parse_args()
    if not (1 <= args.limit <= 200):
        parser.error("limit must be 1..200")
    if args.start_ordinal < 0:
        parser.error("start-ordinal must be nonnegative")
    try:
        document = extract(request_source(), args.limit, args.start_ordinal)
        write_atomically(Path(args.output), document)
    except Exception as exc:
        print(f"JASTROW_SOURCE_BLOCKED: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 1
    print("SOURCE_BATCH_OK", document["entry_count"],
          "first=", document["first_headword"],
          "last=", document["last_headword"],
          "next=", document["next_headword"],
          "source_sha256=", document["source_xml_sha256"])
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
