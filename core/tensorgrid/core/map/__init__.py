"""
Map package declaration.

| Copyright 2017-2026, Voxel51, Inc.
| `voxel51.com <https://voxel51.com/>`_
|
"""

import types

from tensorgrid.core.map.mapper import Mapper
from tensorgrid.core.map.factory import MapperFactory
from tensorgrid.core.map.process import ProcessMapper
from tensorgrid.core.map.threading import ThreadMapper

# This enables Sphinx refs to directly use paths imported here
__all__ = [
    k
    for k, v in globals().items()
    if not k.startswith("_") and not isinstance(v, types.ModuleType)
]
