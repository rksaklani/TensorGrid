"""
Compatibility shim — `import fiftyone` aliases `tensorgrid`.

Allows fiftyone-brain and fiftyone-db namespace packages to coexist.
Derived from FiftyOne (Apache 2.0); TensorGrid modifications.
"""

import importlib
import importlib.util
import sys
from pkgutil import extend_path as _extend_path

__path__ = _extend_path(__path__, __name__)

# Submodules that cannot live under this directory (e.g. ``types`` shadows stdlib
# because editable installs add ``core/fiftyone`` to ``sys.path``).
_REDIRECTED_SUBMODULES = {
    "types": "tensorgrid.types",
    "constants": "tensorgrid.constants",
}


class _FiftyOneSubmoduleFinder:
    @classmethod
    def find_spec(cls, fullname, path=None, target=None):
        prefix = __name__ + "."
        if not fullname.startswith(prefix):
            return None
        subname = fullname[len(prefix) :]
        if subname not in _REDIRECTED_SUBMODULES:
            return None
        target_name = _REDIRECTED_SUBMODULES[subname]
        target_spec = importlib.util.find_spec(target_name)
        if target_spec is None or target_spec.loader is None:
            return None
        return importlib.util.spec_from_loader(
            fullname,
            _SubmoduleLoader(fullname, target_name, target_spec.loader),
        )


class _SubmoduleLoader:
    def __init__(self, fullname, target_name, target_loader):
        self.fullname = fullname
        self.target_name = target_name
        self.target_loader = target_loader

    def create_module(self, spec):
        return None

    def exec_module(self, module):
        target = importlib.import_module(self.target_name)
        module.__dict__.update(target.__dict__)
        module.__name__ = self.fullname
        module.__package__ = self.fullname
        sys.modules[self.fullname] = module


if not any(
    getattr(f, "__name__", None) == _FiftyOneSubmoduleFinder.__name__
    for f in sys.meta_path
):
    sys.meta_path.insert(0, _FiftyOneSubmoduleFinder)


def __getattr__(name):
    import tensorgrid as _tg

    if name == "__version__":
        from tensorgrid.constants import VERSION

        return VERSION
    return getattr(_tg, name)


def __dir__():
    import tensorgrid as _tg

    return sorted(set(globals()) | set(dir(_tg)))
