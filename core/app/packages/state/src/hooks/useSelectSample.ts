import type { SelectionType } from "@tensorgrid/state/src/recoil/types";
import { selectedSamples } from "@tensorgrid/state/src/recoil";
import { useRecoilCallback } from "recoil";

const useSelectSample = () => {
  return useRecoilCallback(
    ({ set, snapshot }) =>
      async (sampleId: string, altKey = false) => {
        const selected = new Map(await snapshot.getPromise(selectedSamples));
        const selectionType: SelectionType = altKey ? "alt" : "default";
        selected.has(sampleId)
          ? selected.delete(sampleId)
          : selected.set(sampleId, selectionType);
        set(selectedSamples, selected);
      },
    [],
  );
};

export default useSelectSample;
