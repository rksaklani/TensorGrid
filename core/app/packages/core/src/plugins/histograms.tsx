import {
  Categories,
  PluginComponentType,
  registerComponent,
} from "@tensorgrid/plugins";
import { BUILT_IN_PANEL_PRIORITY_CONST } from "@tensorgrid/utilities";
import { BarChart } from "@mui/icons-material";
import { lazy } from "react";

const Plots = lazy(() => import("./HistogramsPanel"));

registerComponent({
  name: "Histograms",
  label: "Histograms",
  component: Plots,
  type: PluginComponentType.Panel,
  activator: () => true,
  Icon: BarChart,
  panelOptions: {
    priority: BUILT_IN_PANEL_PRIORITY_CONST,
    category: Categories.Analyze,
  },
});
