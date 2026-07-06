import { createUseEventHandler } from "@tensorgrid/events";
import { AnnotationEventGroup } from "../events";

export const useAnnotationEventHandler =
  createUseEventHandler<AnnotationEventGroup>();
