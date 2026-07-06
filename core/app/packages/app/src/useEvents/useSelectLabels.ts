/**
 * Copyright 2017-2026, Voxel51, Inc.
 */

import { type State, useSessionSetter } from "@tensorgrid/state";
import { toCamelCase } from "@tensorgrid/utilities";
import { useCallback } from "react";
import type { EventHandlerHook } from "./registerEvent";

const useSelectLabels: EventHandlerHook = () => {
  const setter = useSessionSetter();

  return useCallback(
    (payload) => {
      setter(
        "selectedLabels",
        toCamelCase(payload.labels) as State.SelectedLabel[],
      );
    },
    [setter],
  );
};

export default useSelectLabels;
