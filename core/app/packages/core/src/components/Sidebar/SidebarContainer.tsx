import { Resizable } from "@tensorgrid/components";
import * as fos from "@tensorgrid/state";
import { useTheme as useMUITheme } from "@mui/material";
import type { ReactNode } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";

const SidebarContainer = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: boolean;
}) => {
  const [width, setWidth] = useRecoilState(fos.sidebarWidth(modal));
  const resetWidth = useResetRecoilState(fos.sidebarWidth(modal));
  const muiTheme = useMUITheme();

  return (
    <Resizable
      className="tg-sidebar-shell"
      data-cy="sidebar"
      size={{ height: "100%", width }}
      minWidth={260}
      maxWidth={600}
      direction={modal ? "left" : "right"}
      onResizeStop={(_e, _direction, _ref, { width: delta }) => {
        setWidth(width + delta);
      }}
      onResizeReset={resetWidth}
      style={{
        borderTopRightRadius: 8,
        zIndex: modal ? muiTheme.zIndex.tooltip + 1 : undefined,
      }}
    >
      {children}
    </Resizable>
  );
};

export default SidebarContainer;
