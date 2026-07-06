import { useFirstExistingUri, usePanelEvent } from "@tensorgrid/operators";
import { usePanelId } from "@tensorgrid/spaces";
import { constants } from "@tensorgrid/utilities";
import { useCallback } from "react";
import { COMPUTE_SIMILARITY_URI } from "../constants";

export default function useComputeSimilarity() {
  const { firstExistingUri: computeSimUri, exists: hasComputeSimilarity } =
    useFirstExistingUri([COMPUTE_SIMILARITY_URI]);

  const panelId = usePanelId();
  const triggerEvent = usePanelEvent();

  const prompt = useCallback(() => {
    triggerEvent(panelId, {
      params: { delegate: true },
      operator: computeSimUri,
      prompt: true,
    });
  }, [panelId, triggerEvent, computeSimUri]);

  return {
    isAvailable: constants.IS_APP_MODE_FIFTYONE ? false : hasComputeSimilarity,
    prompt,
  };
}
