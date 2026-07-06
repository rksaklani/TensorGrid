import { Popout } from "@tensorgrid/components";
import { useOutsideClick } from "@tensorgrid/state";
import React from "react";

export default function ({
  children,
  close,
}: {
  close: React.MouseEventHandler;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  useOutsideClick(ref, close, "click");

  return (
    <Popout ref={ref} style={{ padding: 0, position: "relative" }}>
      {children}
    </Popout>
  );
}
