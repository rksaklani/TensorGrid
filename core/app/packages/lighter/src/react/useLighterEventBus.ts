import { useEventBus } from "@tensorgrid/events";
import { LighterEventGroup } from "../events";

export const useLighterEventBus = (eventChannel: string) =>
  useEventBus<LighterEventGroup>(eventChannel);
