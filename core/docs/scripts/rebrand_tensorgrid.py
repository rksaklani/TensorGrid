#!/usr/bin/env python3
"""Rebrand Sphinx documentation from FiftyOne/Voxel51 to TensorGrid."""

from __future__ import annotations

import json
import re
from pathlib import Path

DOCS_SOURCE = Path(__file__).resolve().parents[1] / "source"
EXTENSIONS = {".rst", ".md", ".html", ".ipynb", ".py", ".txt"}

# Order matters: longer / more specific patterns first.
TEXT_REPLACEMENTS: list[tuple[str, str]] = [
    ("FiftyOne Enterprise", "TensorGrid Enterprise"),
    ("FiftyOne Labs", "TensorGrid Labs"),
    ("FiftyOne Brain", "TensorGrid Brain"),
    ("FiftyOne App", "TensorGrid App"),
    ("FiftyOne Zoo", "TensorGrid Zoo"),
    ("FiftyOne", "TensorGrid"),
    ("Voxel51, Inc.", "TensorGrid Contributors"),
    ("Voxel51", "TensorGrid"),
    ("https://docs.voxel51.com/", "/docs/"),
    ("https://docs.voxel51.com", "/docs"),
    ("docs.voxel51.com", "/docs"),
    ("https://voxel51.com/pricing", "/pricing"),
    ("https://voxel51.com/sales", "/enterprise"),
    ("https://voxel51.com/annotation", "/product#annotation"),
    ("https://voxel51.com/curation", "/product#curation"),
    ("https://voxel51.com/evaluation", "/product#evaluation"),
    ("https://voxel51.com/integrations", "/docs/integrations/index.html"),
    ("https://voxel51.com/plugins", "/docs/plugins/index.html"),
    ("https://voxel51.com/customers", "/customers"),
    ("https://voxel51.com/blog/", "/resources"),
    ("https://voxel51.com/research", "/resources"),
    ("https://voxel51.com/community", "https://github.com/rksaklani/TensorGrid/discussions"),
    ("https://community.voxel51.com", "https://github.com/rksaklani/TensorGrid/discussions"),
    ("https://github.com/voxel51/fiftyone-examples", "https://github.com/rksaklani/TensorGrid"),
    ("https://github.com/voxel51/fiftyone", "https://github.com/rksaklani/TensorGrid"),
    ("github.com/voxel51/fiftyone", "github.com/rksaklani/TensorGrid"),
    ("pip install fiftyone", "pip install tensorgrid-platform"),
    ("import fiftyone as fo", "import tensorgrid as tg"),
    ("import fiftyone", "import tensorgrid"),
    ("api/fiftyone", "api/tensorgrid"),
    ("fiftyone.config", "tensorgrid.config"),
    ("fiftyone.", "tensorgrid."),
    ("fiftyone ", "tensorgrid "),
    ("fiftyone\n", "tensorgrid\n"),
    ("fiftyone`", "tensorgrid`"),
    ("fiftyone'", "tensorgrid'"),
    ('fiftyone"', 'tensorgrid"'),
    ("`fiftyone`", "`tensorgrid`"),
]

PROTECTED = {
    "__FIFTYONE_BRAIN__": "fiftyone-brain",
    "__FIFTYONE_DB__": "fiftyone-db",
    "__FIFTYONE_DB_PKG__": "fiftyone_db",
    "__VOXEL51_ETA__": "voxel51-eta",
    "__VOXEL51_VOODO__": "@voxel51/voodo",
}

PROTECT_BEFORE = {
    "fiftyone-brain": "__FIFTYONE_BRAIN__",
    "fiftyone-db": "__FIFTYONE_DB__",
    "fiftyone_db": "__FIFTYONE_DB_PKG__",
    "voxel51-eta": "__VOXEL51_ETA__",
    "@voxel51/voodo": "__VOXEL51_VOODO__",
}


def protect(text: str) -> str:
    for original, token in PROTECT_BEFORE.items():
        text = text.replace(original, token)
    return text


def restore(text: str) -> str:
    for token, original in PROTECTED.items():
        text = text.replace(token, original)
    return text


def rebrand_text(text: str) -> str:
    text = protect(text)
    for old, new in TEXT_REPLACEMENTS:
        text = text.replace(old, new)
    return restore(text)


def process_file(path: Path) -> bool:
    if path.suffix not in EXTENSIONS:
        return False
    if path.name.endswith(".pyc"):
        return False

    original = path.read_text(encoding="utf-8")
    if path.suffix == ".ipynb":
        data = json.loads(original)
        changed = False
        for cell in data.get("cells", []):
            if cell.get("cell_type") in {"markdown", "raw"}:
                src = "".join(cell.get("source", []))
                updated = rebrand_text(src)
                if updated != src:
                    cell["source"] = updated.splitlines(keepends=True)
                    changed = True
        if not changed:
            return False
        path.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        return True

    updated = rebrand_text(original)
    if updated == original:
        return False
    path.write_text(updated, encoding="utf-8")
    return True


def main() -> None:
    changed = 0
    for path in sorted(DOCS_SOURCE.rglob("*")):
        if not path.is_file():
            continue
        if "_static" in path.parts and path.suffix in {".woff2", ".ico", ".png", ".svg", ".gif", ".webp"}:
            continue
        if process_file(path):
            changed += 1
            print(f"updated {path.relative_to(DOCS_SOURCE)}")
    print(f"\nRebranded {changed} files under {DOCS_SOURCE}")


if __name__ == "__main__":
    main()
