"""
FiftyOne Server /event route

| Copyright 2017-2026, Voxel51, Inc.
| `voxel51.com <https://voxel51.com/>`_
|
"""

import typing as t

from starlette.endpoints import HTTPEndpoint
from starlette.requests import Request

import tensorgrid.core.session.events as fose

from tensorgrid.server.decorators import route
from tensorgrid.server.events import dispatch_event


class Event(HTTPEndpoint):
    @route
    async def post(self, request: Request, data: t.Dict) -> t.Dict:
        await dispatch_event(
            data["subscription"],
            await fose.Event.from_data_async(data["event"], data["data"]),
        )

        return {}
