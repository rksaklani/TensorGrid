#!/usr/bin/env python3
"""Remove optional API modules that require extra dependencies from generated docs."""

from __future__ import annotations

import re
from pathlib import Path

API_DIR = Path(__file__).resolve().parents[1] / "source" / "api"
OPTIONAL_MODULES = (
    "tensorgrid.utils.flash",
    "tensorgrid.utils.beam",
    "tensorgrid.utils.pe",
    "tensorgrid.utils.transformers",
)


def prune() -> None:
  for mod in OPTIONAL_MODULES:
    path = API_DIR / f"{mod}.rst"
    if path.exists():
      path.unlink()
      print(f"removed {path.name}")

  utils_rst = API_DIR / "tensorgrid.utils.rst"
  if not utils_rst.exists():
    return

  text = utils_rst.read_text(encoding="utf-8")
  for mod in OPTIONAL_MODULES:
    short = mod.split(".")[-1]
    text = re.sub(
      rf"\n\s+{re.escape(short)}\n",
      "\n",
      text,
    )
    text = re.sub(
      rf"\n\s+:mod:`{re.escape(mod)}`.*\n",
      "\n",
      text,
    )
  utils_rst.write_text(text, encoding="utf-8")
  print("pruned tensorgrid.utils.rst")


if __name__ == "__main__":
  prune()
