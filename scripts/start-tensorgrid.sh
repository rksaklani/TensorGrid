#!/usr/bin/env bash
# Start TensorGrid with a clean server and quickstart dataset loaded.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${TENSORGRID_PORT:-5151}"

echo "Stopping anything on port ${PORT}..."
fuser -k "${PORT}/tcp" 2>/dev/null || true
sleep 2

source "${ROOT}/.venv/bin/activate"
export PYTHONPATH="${ROOT}/core:${PYTHONPATH:-}"
export PYTHONUNBUFFERED=1
export FIFTYONE_EXECUTION_STORE_NOTIFICATION_SERVICE_DISABLED=true
unset FIFTYONE_DISABLE_SERVICES

cd "${ROOT}"
python << 'PY'
import tensorgrid as tg
import tensorgrid.zoo as tgz

dataset = tgz.load_zoo_dataset("quickstart")
session = tg.launch_app(dataset, port=int(__import__("os").environ.get("TENSORGRID_PORT", "5151")))
print(f"TensorGrid running at http://localhost:{session.server_port}")
print("Press Ctrl+C to stop.")
session.wait(-1)
PY
