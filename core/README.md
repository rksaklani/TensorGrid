![TensorGrid logo](https://raw.githubusercontent.com/rksaklani/TensorGrid/main/core/tensorgrid/resources/branding/logo.png)

> **Building intelligence. Powering tomorrow.**

TensorGrid is the open-source **multimodal data platform** for teams building computer vision and physical AI. Explore datasets visually, curate the samples that matter, annotate in the browser, and evaluate models — all from one interactive workspace and a powerful Python SDK.

[![PyPI](https://img.shields.io/pypi/v/tensorgrid-platform?style=flat-square&color=FF6B00&logo=pypi&logoColor=white)](https://pypi.org/project/tensorgrid-platform/)
[![Python](https://img.shields.io/pypi/pyversions/tensorgrid-platform?style=flat-square&color=FF6B00)](https://pypi.org/project/tensorgrid-platform/)
[![License](https://img.shields.io/badge/License-Apache%202.0-FF6B00?style=flat-square)](https://github.com/rksaklani/TensorGrid/blob/main/core/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/rksaklani/TensorGrid?style=flat-square&color=FF6B00&logo=github)](https://github.com/rksaklani/TensorGrid)

**[Install](https://pypi.org/project/tensorgrid-platform/)** · **[Docs](https://github.com/rksaklani/TensorGrid/tree/main/core/docs)** · **[GitHub](https://github.com/rksaklani/TensorGrid)** · **[Releases](https://github.com/rksaklani/TensorGrid/releases)**

---

## Highlights

| | |
| :--- | :--- |
| **Visual-first** | Interactive app at `localhost:5151` — no more blind data wrangling |
| **Multimodal** | Images, video, 3D, LiDAR, audio, geolocation, and time series |
| **Python-native** | Full SDK for loading, filtering, embedding, and evaluating datasets |
| **Extensible** | Plugins, custom operators, and integrations with your ML stack |
| **Open source** | Apache 2.0 — run locally, on-prem, or in your cloud |

---

## Install

```bash
pip install tensorgrid-platform
```

| Requirement | Details |
| :--- | :--- |
| Python | 3.10, 3.11, or 3.12 |
| Database | MongoDB (auto-started on first launch) |
| Optional | `pip install "tensorgrid-platform[multimodal]"` for MCAP codecs |

---

## Quick start

**Launch from the CLI**

```bash
pip install tensorgrid-platform
tg app launch quickstart
```

**Or use the Python SDK**

```python
import tensorgrid as tg
import tensorgrid.zoo as tgz

dataset = tgz.load_zoo_dataset("quickstart")
session = tg.launch_app(dataset)
session.wait(-1)  # open http://localhost:5151
```

**Filter a subset and explore**

```python
view = dataset.match_tags("train").limit(100)
session = tg.launch_app(view)
```

---

## Platform capabilities

| Module | Description |
| :--- | :--- |
| **Explore** | Slice, search, and filter datasets with visual queries |
| **Curate** | Surface hard examples, duplicates, and edge cases |
| **Annotate** | Label and review samples in an interactive workflow |
| **Evaluate** | Compare models and drill into failure modes |
| **Brain** | Embeddings, similarity, and automated dataset insights |
| **Zoo** | Built-in sample datasets and models to get started fast |

---

## Command line

```bash
tg app launch quickstart          # launch app with a zoo dataset
tensorgrid app launch quickstart  # alias
tg --help                         # full CLI reference
```

---

## Resources

| | |
| :--- | :--- |
| Documentation | [User guide & tutorials](https://github.com/rksaklani/TensorGrid/tree/main/core/docs) |
| Source code | [github.com/rksaklani/TensorGrid](https://github.com/rksaklani/TensorGrid) |
| Bug reports | [GitHub Issues](https://github.com/rksaklani/TensorGrid/issues) |
| Plugins | [Plugin directory](https://github.com/rksaklani/TensorGrid/tree/main/plugins) |

---

## Development

```bash
git clone https://github.com/rksaklani/TensorGrid.git
cd TensorGrid

python3 -m venv .venv && source .venv/bin/activate
pip install -e core/

cd core/app && corepack yarn install && corepack yarn build && cd ../..
./scripts/start-tensorgrid.sh
```

---

## License

**Apache 2.0** — free for commercial and research use.

See [NOTICE](https://github.com/rksaklani/TensorGrid/blob/main/NOTICE) for third-party attributions.
