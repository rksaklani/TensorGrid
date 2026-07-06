#!/usr/bin/env bash
# Rebrand FiftyOne fork to TensorGrid (internal rename).
# Usage: ./tools/rebrand.sh [--dry-run]
#
# Product: TensorGrid
# Python package: tensorgrid
# CLI: tg
# npm scope: @tensorgrid

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CORE="$ROOT/core"
DRY_RUN=false

if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
fi

PRODUCT_NAME="TensorGrid"
PKG_NAME="tensorgrid"
CLI_NAME="tg"
NPM_SCOPE="@tensorgrid"
OLD_PY_PKG="fiftyone"
OLD_NPM_SCOPE="@fiftyone"

run() {
  if $DRY_RUN; then
    echo "[dry-run] $*"
  else
    "$@"
  fi
}

replace_in_files() {
  local from="$1"
  local to="$2"
  shift 2
  local files=("$@")
  for f in "${files[@]}"; do
    if [[ -f "$f" ]]; then
      if $DRY_RUN; then
        echo "Would replace in $f: $from -> $to"
      else
        sed -i "s|${from}|${to}|g" "$f"
      fi
    fi
  done
}

echo "=== TensorGrid rebrand script ==="
echo "Core: $CORE"

# 1. Rename Python package directory
if [[ -d "$CORE/$OLD_PY_PKG" && ! -d "$CORE/$PKG_NAME" ]]; then
  echo "Renaming Python package directory..."
  run mv "$CORE/$OLD_PY_PKG" "$CORE/$PKG_NAME"
fi

# 2. setup.py
if [[ -f "$CORE/setup.py" ]]; then
  echo "Updating setup.py..."
  replace_in_files "name=\"$OLD_PY_PKG\"" "name=\"$PKG_NAME\"" "$CORE/setup.py"
  replace_in_files "$OLD_PY_PKG=$OLD_PY_PKG.core.cli:main" "$CLI_NAME=$PKG_NAME.core.cli:main" "$CORE/setup.py"
  replace_in_files "FiftyOne:" "$PRODUCT_NAME:" "$CORE/setup.py"
  replace_in_files "Voxel51, Inc." "TensorGrid Contributors" "$CORE/setup.py"
fi

# 3. Bulk text replace in core (exclude node_modules, dist, static, .git)
echo "Bulk replace in source files..."
if ! $DRY_RUN; then
  find "$CORE" \
    -type f \
    \( -name "*.py" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.md" -o -name "*.yml" -o -name "*.yaml" -o -name "*.sh" -o -name "*.html" -o -name "*.graphql" \) \
    ! -path "*/node_modules/*" \
    ! -path "*/dist/*" \
    ! -path "*/.git/*" \
    ! -path "*/server/static/*" \
    ! -path "*/__pycache__/*" \
    -print0 | while IFS= read -r -d '' f; do
      sed -i \
        -e "s|${OLD_NPM_SCOPE}|${NPM_SCOPE}|g" \
        -e "s|import ${OLD_PY_PKG}|import ${PKG_NAME}|g" \
        -e "s|from ${OLD_PY_PKG}|from ${PKG_NAME}|g" \
        -e "s|\"${OLD_PY_PKG}\"|\"${PKG_NAME}\"|g" \
        -e "s|'${OLD_PY_PKG}'|'${PKG_NAME}'|g" \
        -e "s|${OLD_PY_PKG}\\.|${PKG_NAME}.|g" \
        "$f" 2>/dev/null || true
    done
fi

# 4. Rename app package directories @fiftyone -> @tensorgrid
if [[ -d "$CORE/app/packages" ]]; then
  echo "Renaming yarn workspace package.json names..."
  find "$CORE/app/packages" -name "package.json" -print0 | while IFS= read -r -d '' f; do
    replace_in_files "$OLD_NPM_SCOPE" "$NPM_SCOPE" "$f"
    replace_in_files "\"FiftyOne\"" "\"$PRODUCT_NAME\"" "$f"
  done
fi

replace_in_files "\"FiftyOne\"" "\"$PRODUCT_NAME\"" "$CORE/app/package.json"
replace_in_files "$OLD_NPM_SCOPE" "$NPM_SCOPE" "$CORE/app/package.json"

echo "=== Rebrand complete ==="
echo "Next steps:"
echo "  1. cd core/app && corepack yarn install && corepack yarn build"
echo "  2. pip install -e core/"
echo "  3. Run: $CLI_NAME app launch (after editable install)"
