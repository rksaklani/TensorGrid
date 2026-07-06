"""TensorGrid stats plugin — sample count and field summary panel."""

import tensorgrid.operators as tgo
import tensorgrid.operators.types as types


class TensorGridStatsPanel(tgo.Panel):
    @property
    def config(self):
        return tgo.PanelConfig(
            label="TensorGrid Stats",
            name="tensorgrid_stats",
            icon="/assets/icon.svg",
            allow_multiple=False,
        )

    def render(self, ctx):
        panel = types.Object()
        dataset = ctx.dataset
        if dataset is None:
            panel.str(
                "message",
                label="Status",
                view=types.Notice(label="No dataset loaded"),
            )
            return types.Property(panel, view=types.View())

        sample_count = len(dataset)
        field_names = ", ".join(dataset.get_field_schema().keys()) or "(none)"

        panel.int(
            "samples",
            label="Sample count",
            default=sample_count,
            view=types.ReadOnlyView(),
        )
        panel.str(
            "fields",
            label="Fields",
            default=field_names,
            view=types.ReadOnlyView(),
        )
        panel.str(
            "info",
            label="About",
            default="TensorGrid custom plugin — dataset overview at a glance.",
            view=types.Notice(label="TensorGrid"),
        )
        return types.Property(panel, view=types.View())


def register(p):
    p.register(TensorGridStatsPanel)
