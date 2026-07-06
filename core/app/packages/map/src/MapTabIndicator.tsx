import { FilterAndSelectionIndicator } from "@tensorgrid/components";
import * as fos from "@tensorgrid/state";
import { useResetExtendedSelection } from "@tensorgrid/state";
import { useRecoilValue } from "recoil";
import { SELECTION_SCOPE } from "./constants";

export default function MapTabIndicator() {
  const { selection, scope } = useRecoilValue(fos.extendedSelection);
  const resetExtendedSelection = useResetExtendedSelection();

  if (scope !== SELECTION_SCOPE) return null;

  return (
    <FilterAndSelectionIndicator
      selectionCount={selection?.length.toString()}
      onClickSelection={resetExtendedSelection}
    />
  );
}
