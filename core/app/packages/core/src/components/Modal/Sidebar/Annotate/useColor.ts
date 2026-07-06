import { useTheme } from "@tensorgrid/components";
import type { BaseOverlay } from "@tensorgrid/lighter";
import { getOverlayColor } from "@tensorgrid/lighter";
import { useMemo } from "react";
import useColorMappingContext from "../../Lighter/useColorMappingContext";

export default function useColor(overlay?: BaseOverlay) {
  const coloring = useColorMappingContext();
  const brand = useTheme().primary.plainColor;

  return useMemo(() => {
    return overlay ? getOverlayColor(overlay, coloring) : brand;
  }, [brand, coloring, overlay]);
}
