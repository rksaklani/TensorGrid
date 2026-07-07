<p align="center">
  <img src="branding/logo-2.png" alt="TensorGrid" width="320" />
</p>

# TensorGrid

A branded fork of [FiftyOne](https://github.com/voxel51/fiftyone) (Apache 2.0).

## Repository layout

```
voxel_clone/
├── core/              # tensorgrid Python package + React app
├── branding/          # Logos, theme overrides
├── deploy/            # Docker Compose
├── website/           # Marketing site
├── plugins/           # TensorGrid plugins
├── scripts/           # start-tensorgrid.sh
└── tools/             # Maintenance scripts
```

## Quick start

```bash
python3.12 -m venv .venv
source .venv/bin/activate
pip install fiftyone-db fiftyone-brain
pip install tensorgrid-platform

cd core/app && corepack yarn install && corepack yarn build && cd ../..

./scripts/start-tensorgrid.sh
```

Open http://localhost:5151

## CLI

```bash
tg app launch quickstart    # primary CLI
tensorgrid app launch       # alias
```

`import tensorgrid as tg` — `import fiftyone` still works (compatibility shim).

## License

Apache 2.0. See [NOTICE](NOTICE) and [core/LICENSE](core/LICENSE).
