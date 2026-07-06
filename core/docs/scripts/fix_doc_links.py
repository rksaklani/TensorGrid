#!/usr/bin/env python3
"""Convert /docs/... absolute links to Sphinx-relative paths for nbsphinx."""

from __future__ import annotations

import json
import os
import re
from pathlib import Path

DOCS_SOURCE = Path(__file__).resolve().parents[1] / "source"
LINK_RE = re.compile(r"(?<!\])/docs/([A-Za-z0-9_./-]+\.html(?:#[A-Za-z0-9_.-]+)?)")


def to_relative(from_file: Path, target: str) -> str:
    path_part, anchor = (target.split("#", 1) + [""])[:2]
    target_path = DOCS_SOURCE / path_part
    rel = os.path.relpath(target_path, start=from_file.parent)
    return f"{rel}#{anchor}" if anchor else rel


def fix_text(text: str, from_file: Path) -> str:
    return LINK_RE.sub(lambda m: to_relative(from_file, m.group(1)), text)


def process_ipynb(path: Path) -> bool:
    data = json.loads(path.read_text(encoding="utf-8"))
    changed = False
    for cell in data.get("cells", []):
        if cell.get("cell_type") not in {"markdown", "raw"}:
            continue
        src = "".join(cell.get("source", []))
        updated = fix_text(src, path)
        if updated != src:
            cell["source"] = updated.splitlines(keepends=True)
            changed = True
    if changed:
        path.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    return changed


def main() -> None:
    count = 0
    for path in sorted(DOCS_SOURCE.rglob("*.ipynb")):
        if process_ipynb(path):
            count += 1
            print(f"fixed links in {path.relative_to(DOCS_SOURCE)}")
    print(f"Fixed doc links in {count} notebooks")


if __name__ == "__main__":
    main()
