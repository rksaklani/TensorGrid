import { useFirstExistingUri, usePanelEvent } from "@tensorgrid/operators";
import { usePanelId } from "@tensorgrid/spaces";
import { useCallback } from "react";

const IS_OSS = true; // false in fiftyone-teams

export default function useComputeVisualization() {
  const { firstExistingUri: computeVisUri, exists: hasComputeVisualization } =
    useFirstExistingUri(["@voxel51/operators/compute_visualization"]);

  const panelId = usePanelId();
  const triggerEvent = usePanelEvent();

  const prompt = useCallback(() => {
    triggerEvent(panelId, {
      panelId,
      params: { delegate: true },
      operator: computeVisUri,
      prompt: true,
    });
  }, [panelId, triggerEvent, computeVisUri]);

  return {
    isAvailable: IS_OSS ? false : hasComputeVisualization,
    prompt,
  };
}
