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
| Python | 3.10, 3.11, or 3.12 (3.13 is not supported yet) |
| Database | MongoDB (auto-started on first launch) |
| Optional | `pip install "tensorgrid-platform[multimodal]"` for MCAP codecs |
| 3D / LiDAR | `pip install "tensorgrid-platform[3d]"` for point-cloud zoo datasets |

**3D zoo datasets** (e.g. `kitti-multiview`, `quickstart-3d`) require Open3D:

```bash
pip install "tensorgrid-platform[3d]"
tg zoo datasets load kitti-multiview
```

> Open3D does not support Python 3.13. Use Python 3.12 or earlier for 3D datasets.

### Model Zoo backends

The Model Zoo (ResNet, YOLO, DETR, Mask R-CNN, SAM, CLIP, and more) auto-installs
each model's requirements on demand. You can also pre-install a backend:

```bash
pip install "tensorgrid-platform[torch]"          # PyTorch + torchvision models
pip install "tensorgrid-platform[tensorflow]"     # TensorFlow models
pip install "tensorgrid-platform[ultralytics]"    # YOLO models
pip install "tensorgrid-platform[transformers]"   # Hugging Face models
```

Inspect or install a specific model's requirements:

```bash
tg zoo models list                          # browse available models
tg zoo models requirements <name> --print   # show a model's dependencies
tg zoo models requirements <name> --install # install them
tg zoo models apply <name> <dataset> <field># run a model on a dataset
```

---

## Quick start

**Launch from the CLI**

```bash
pip install tensorgrid-platform
tg quickstart                       # downloads the demo dataset and launches the app
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
tg zoo datasets list                # browse available zoo datasets
tg zoo datasets load quickstart     # download a dataset by name
tg app launch quickstart            # launch the app with a loaded dataset
tg --help                           # full CLI reference
```

> Tip: `tg app launch <name>` opens a dataset that is already downloaded.
> Run `tg zoo datasets load <name>` first (or use `tg quickstart`, which
> downloads and launches the demo dataset in one step).

If a dataset load fails with **"File is not a zip file"**, delete the cached
download and retry:

```bash
rm -rf ~/fiftyone/<dataset-name>/tmp-download
tg zoo datasets load <dataset-name>
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
