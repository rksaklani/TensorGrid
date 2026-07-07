![TensorGrid](https://raw.githubusercontent.com/rksaklani/TensorGrid/main/core/tensorgrid/resources/branding/logo.png)

> **Building intelligence. Powering tomorrow.**

---

TensorGrid is an open-source **multimodal data platform** for exploring, curating, annotating, and evaluating datasets — built for computer vision and physical AI teams.

<p align="center">

[![PyPI](https://img.shields.io/pypi/v/tensorgrid-platform?style=flat-square&color=FF6B00&logo=pypi&logoColor=white)](https://pypi.org/project/tensorgrid-platform/)
[![License](https://img.shields.io/badge/License-Apache%202.0-FF6B00?style=flat-square)](https://github.com/rksaklani/TensorGrid/blob/main/core/LICENSE)
[![Python](https://img.shields.io/pypi/pyversions/tensorgrid-platform?style=flat-square&color=FF6B00)](https://pypi.org/project/tensorgrid-platform/)

</p>

<p align="center">
  <a href="https://pypi.org/project/tensorgrid-platform/"><strong>PyPI</strong></a> ·
  <a href="https://github.com/rksaklani/TensorGrid/tree/main/core/docs"><strong>Docs</strong></a> ·
  <a href="https://github.com/rksaklani/TensorGrid/releases"><strong>Releases</strong></a>
</p>

---

## Quick start

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install tensorgrid-platform
tg app launch quickstart
```

Open **http://localhost:5151** in your browser.

```python
import tensorgrid as tg
import tensorgrid.zoo as tgz

dataset = tgz.load_zoo_dataset("quickstart")
session = tg.launch_app(dataset)
session.wait(-1)
```

---

## Repository

| Path | Purpose |
| :--- | :--- |
| `core/` | Python package (`tensorgrid`) + React visual app |
| `website/` | Marketing site and embedded documentation |
| `branding/` | Logos and theme assets |
| `plugins/` | TensorGrid plugin ecosystem |
| `deploy/` | Docker Compose deployment |
| `scripts/` | `start-tensorgrid.sh` and utilities |

---

## What's in the box

| Component | Description |
| :--- | :--- |
| **Python SDK** | Datasets, views, brain, zoo — `pip install tensorgrid-platform` |
| **Visual app** | Interactive UI for exploration, annotation, and evaluation |
| **Documentation** | Full guides under `core/docs/` |
| **Website** | Product pages and docs wrapper under `website/` |

---

## CLI

```bash
tg app launch quickstart
tensorgrid app launch quickstart
```

---

## License

Apache 2.0 — see [NOTICE](NOTICE) and [core/LICENSE](core/LICENSE).

<p align="center">
  <sub>TensorGrid Contributors</sub>
</p>
