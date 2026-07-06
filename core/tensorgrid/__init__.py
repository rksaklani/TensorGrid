"""
TensorGrid: multimodal data platform for dataset curation, analysis, and visualization.

Derived from FiftyOne (Apache 2.0).
"""

import logging
from os import getenv
from pkgutil import extend_path as _extend_path
from sys import hexversion


logger = logging.getLogger(__name__)

#
# This statement allows multiple `fiftyone.XXX` packages to be installed in the
# same environment and used simultaneously.
#
# https://docs.python.org/3/library/pkgutil.html#pkgutil.extend_path
#
__path__ = _extend_path(__path__, __name__)

import tensorgrid.constants as _foc

__version__ = _foc.VERSION


def _alias_package_tree(tg_pkg_name, fo_pkg_name):
    import importlib
    import pkgutil
    import sys

    try:
        tg_pkg = importlib.import_module(tg_pkg_name)
    except ImportError:
        return

    sys.modules[fo_pkg_name] = tg_pkg
    if not hasattr(tg_pkg, "__path__"):
        return

    prefix = tg_pkg_name + "."
    fo_prefix = fo_pkg_name + "."
    for modinfo in pkgutil.walk_packages(tg_pkg.__path__, prefix):
        fo_mod_name = fo_prefix + modinfo.name[len(prefix) :]
        if fo_mod_name in sys.modules:
            continue
        try:
            sys.modules[fo_mod_name] = importlib.import_module(modinfo.name)
        except Exception:
            continue


def _register_fiftyone_core_aliases():
    """Alias ``fiftyone.core.*`` before public imports (dataset field types)."""
    _alias_package_tree("tensorgrid.core", "fiftyone.core")


def _register_fiftyone_plugin_aliases():
    """Alias plugin-related packages after ``tensorgrid`` is fully initialized."""
    for top in ("operators", "plugins", "utils", "zoo"):
        _alias_package_tree(f"tensorgrid.{top}", f"fiftyone.{top}")


_register_fiftyone_core_aliases()

from tensorgrid.__public__ import *

import tensorgrid.core.logging as _fol


_fol.init_logging()
_register_fiftyone_plugin_aliases()

# Register the execution store extras cloner so that allowlisted panel run
# history follows a full dataset clone (including SDK clones).
try:
    import tensorgrid.operators.store.clone as _esclone  # noqa: F401
except Exception:  # pragma: no cover - best-effort registration
    logger.warning(
        "Failed to register execution store clone hook", exc_info=True
    )
