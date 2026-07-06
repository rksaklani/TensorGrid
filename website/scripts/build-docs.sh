#!/usr/bin/env bash
# Build Sphinx documentation and expose it under website/public/docs.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
DOCS_DIR="$ROOT/core/docs"
WEBSITE_PUBLIC="$ROOT/website/public"
DOCS_OUTPUT="$DOCS_DIR/build/html"
DOCS_LINK="$WEBSITE_PUBLIC/docs"

export PYTHONPATH="${ROOT}/core:${PYTHONPATH:-}"
export FIFTYONE_HEADLESS=1

PANDOC_DIR="$(python3 -c "import pypandoc; import os; print(os.path.dirname(pypandoc.get_pandoc_path()))" 2>/dev/null || true)"
if [[ -n "${PANDOC_DIR}" ]]; then
  export PATH="${PANDOC_DIR}:${PATH}"
fi

echo "Rebranding documentation for TensorGrid (idempotent)..."
python3 "$DOCS_DIR/scripts/rebrand_tensorgrid.py" >/dev/null || true

echo "Building Sphinx documentation..."
cd "$DOCS_DIR/.."

echo "Generating API documentation..."
API_DOC_EXCLUDES=(
  tensorgrid/brain/internal/models
  tensorgrid/constants
  tensorgrid/internal
  tensorgrid/multimodal
  tensorgrid/server
  tensorgrid/service
)
sphinx-apidoc --force --no-toc --separate --follow-links \
  --templatedir=docs/templates/apidoc \
  -o docs/source/api tensorgrid "${API_DOC_EXCLUDES[@]}"

cd "$DOCS_DIR"
sphinx-build -M html source build --jobs auto

mkdir -p "$WEBSITE_PUBLIC"
rm -rf "$DOCS_LINK"
ln -sfn "$DOCS_OUTPUT" "$DOCS_LINK"

echo ""
echo "Documentation ready at: $DOCS_LINK -> $DOCS_OUTPUT"
echo "Start the website with: cd website && npm run dev"
echo "Open: http://localhost:3000/docs/index.html"
