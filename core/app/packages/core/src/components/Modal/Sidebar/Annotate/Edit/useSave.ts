import { useCallback } from "react";

import { useAnnotationEventBus } from "@tensorgrid/annotation";

/**
 * Hook which provides a callback to trigger a save event.
 */
export default function useSave() {
  const eventBus = useAnnotationEventBus();

  return useCallback(() => {
    eventBus.dispatch("annotation:persistenceRequested");
  }, [eventBus]);
}
