# TensorGrid Platform

**Multimodal data platform for building high-quality datasets and computer vision models.**

Derived from [FiftyOne](https://github.com/voxel51/fiftyone) (Apache 2.0). See [NOTICE](https://github.com/rksaklani/TensorGrid/blob/main/NOTICE) for attribution.

[![PyPI version](https://badge.fury.io/py/tensorgrid-platform.svg)](https://pypi.org/project/tensorgrid-platform/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/rksaklani/TensorGrid/blob/main/core/LICENSE)
[![Python](https://img.shields.io/pypi/pyversions/tensorgrid-platform)](https://pypi.org/project/tensorgrid-platform/)

[GitHub](https://github.com/rksaklani/TensorGrid) · [Releases](https://github.com/rksaklani/TensorGrid/releases)

---

## Install

```bash
pip install tensorgrid-platform
```

`fiftyone-db` and `fiftyone-brain` are installed automatically as dependencies.

## Quick start

```python
import tensorgrid as tg
import tensorgrid.zoo as tgz

dataset = tgz.load_zoo_dataset("quickstart")
session = tg.launch_app(dataset)
session.wait(-1)
```

Open http://localhost:5151 in your browser.

## CLI

```bash
tg app launch quickstart
tensorgrid app launch quickstart
```

## Python API

```python
import tensorgrid as tg          # recommended
import fiftyone as fo            # compatibility alias
```

## Development install

Clone the [GitHub repository](https://github.com/rksaklani/TensorGrid), build the web app, then:

```bash
pip install -e core/
./scripts/start-tensorgrid.sh
```

## License

Apache 2.0. TensorGrid modifications © TensorGrid Contributors. Original FiftyOne © Voxel51, Inc.
