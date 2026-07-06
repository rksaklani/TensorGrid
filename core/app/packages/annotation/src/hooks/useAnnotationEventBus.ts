import { useEventBus } from "@tensorgrid/events";
import { AnnotationEventGroup } from "../events";

export const useAnnotationEventBus = () => useEventBus<AnnotationEventGroup>();
