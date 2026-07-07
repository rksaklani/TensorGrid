<p align="center">
  <img src="tensorgrid/resources/branding/logo.png" alt="TensorGrid" width="320" />
</p>

# TensorGrid Platform

**Multimodal data platform for building high-quality datasets and computer vision models.**

[![PyPI version](https://badge.fury.io/py/tensorgrid-platform.svg)](https://pypi.org/project/tensorgrid-platform/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/rksaklani/TensorGrid/blob/main/core/LICENSE)
[![Python](https://img.shields.io/pypi/pyversions/tensorgrid-platform)](https://pypi.org/project/tensorgrid-platform/)

[GitHub](https://github.com/rksaklani/TensorGrid) · [Releases](https://github.com/rksaklani/TensorGrid/releases)

---

## Install

```bash
pip install tensorgrid-platform
```

Requires Python 3.10+.

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

## Development install

Clone the [GitHub repository](https://github.com/rksaklani/TensorGrid), build the web app, then:

```bash
pip install -e core/
./scripts/start-tensorgrid.sh
```

## License

Apache 2.0. See [NOTICE](https://github.com/rksaklani/TensorGrid/blob/main/NOTICE) for attribution.
