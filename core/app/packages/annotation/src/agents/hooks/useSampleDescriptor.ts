import { SampleDescriptor } from "../types";
import { useMemo } from "react";
import {
  useCurrentDatasetName,
  useCurrentSampleId,
  useModalMediaPath,
} from "@tensorgrid/state";

/**
 * Hook which returns a {@link SampleDescriptor} for the active modal media.
 */
export const useSampleDescriptor = (): SampleDescriptor => {
  const datasetId = useCurrentDatasetName();
  const sampleId = useCurrentSampleId();
  const mediaUrl = useModalMediaPath();

  return useMemo(
    () => ({
      datasetId,
      sampleId,
      mediaUrl,
    }),
    [datasetId, mediaUrl, sampleId],
  );
};
