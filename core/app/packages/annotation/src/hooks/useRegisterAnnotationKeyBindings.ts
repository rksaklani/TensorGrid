import { KnownContexts, useKeyBindings } from "@tensorgrid/commands";
import { useLighter } from "@tensorgrid/lighter";

export const useRegisterAnnotationKeybindings = () => {
  const { scene } = useLighter();

  useKeyBindings(
    KnownContexts.ModalAnnotate,
    [
      {
        commandId: "lighter-reset-zoom-pan",
        sequence: "r",
        handler: () => scene.resetZoomPan(),
        label: "Reset zoom and pan",
      },
    ],
    [scene],
  );
};
