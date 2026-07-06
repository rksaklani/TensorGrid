#!/usr/bin/env python3
"""Ensure generated doc stubs exist so Sphinx builds without optional generators."""

from __future__ import annotations

from pathlib import Path

DOCS_SOURCE = Path(__file__).resolve().parents[1] / "source"

STUBS = {
    "plugins/plugins_ecosystem/plugin_cards.rst": (
        ".. Plugin catalog (run generate_plugin_docs.py to populate).\n"
    ),
    "labs/labs_ecosystem/lab_cards_plugins.rst": (
        ".. Labs plugin cards (run generate_plugin_docs.py to populate).\n"
    ),
    "agents/skills_ecosystem/skill_cards.rst": (
        ".. Agent skills (run generate_skills_docs.py to populate).\n"
    ),
    "dataset_zoo/datasets/dataset_cards.rst": (
        ".. Dataset cards (run make_model_zoo_docs.py to populate).\n"
    ),
    "dataset_zoo/datasets_hf/dataset_cards.rst": (
        ".. Hugging Face dataset cards (run make_hf_dataset_docs.py to populate).\n"
    ),
    "model_zoo/models/model_cards.rst": (
        ".. Model cards (run make_model_zoo_docs.py to populate).\n"
    ),
    "model_zoo/models/plugin_model_cards.rst": (
        ".. Plugin model cards (run make_model_zoo_docs.py to populate).\n"
    ),
}


def main() -> None:
    for rel, content in STUBS.items():
        path = DOCS_SOURCE / rel
        if not path.exists() or path.stat().st_size == 0:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content, encoding="utf-8")
            print(f"created stub {rel}")


if __name__ == "__main__":
    main()
