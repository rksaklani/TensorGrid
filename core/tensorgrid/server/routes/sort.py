"""
FiftyOne Server /sort route

| Copyright 2017-2026, Voxel51, Inc.
| `voxel51.com <https://voxel51.com/>`_
|
"""

from starlette.endpoints import HTTPEndpoint
from starlette.requests import Request

from tensorgrid.core.session.constants import DEFAULT_SELECTION_STYLE
from tensorgrid.core.session.events import StateUpdate
import tensorgrid.core.stages as fos

from tensorgrid.server.decorators import route
import tensorgrid.server.events as fose
import tensorgrid.server.view as fosv
from tensorgrid.server.filters import GroupElementFilter, SampleFilter


class Sort(HTTPEndpoint):
    @route
    async def post(self, request: Request, data: dict):
        dataset_name = data.get("dataset", None)
        filters = data.get("filters", {})
        stages = data.get("view", None)
        subscription = data.get("subscription", None)
        slice = data.get("slice", None)

        view = await fosv.get_view(
            dataset_name,
            stages=stages,
            filters=filters,
            extended_stages={
                "fiftyone.core.stages.SortBySimilarity": data["extended"]
            },
            sample_filter=(
                SampleFilter(group=GroupElementFilter(slice=slice))
                if slice is not None
                else None
            ),
            awaitable=True,
        )

        state = fose.get_state()
        state.selected_labels = []
        state.selected_samples = []

        await fose.dispatch_event(subscription, StateUpdate(state))

        # return the new sort by stage
        for stage in reversed(view._stages):
            if isinstance(stage, fos.SortBySimilarity):
                return stage._serialize(include_uuid=False)

        raise ValueError("sorting not found")
