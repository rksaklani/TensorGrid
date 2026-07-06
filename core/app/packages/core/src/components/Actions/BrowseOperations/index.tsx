import { PillButton } from "@tensorgrid/components";
import { useOperatorBrowser } from "@tensorgrid/operators";
import { List } from "@mui/icons-material";
import type { ActionProps } from "../types";
import { ActionDiv, getStringAndNumberProps } from "../utils";

export default ({
  adaptiveMenuItemProps,
  modal,
}: ActionProps & { modal?: boolean }) => {
  const browser = useOperatorBrowser();
  return (
    <ActionDiv {...(getStringAndNumberProps(adaptiveMenuItemProps) || {})}>
      <PillButton
        open={false}
        highlight={browser.isVisible}
        icon={<List />}
        onClick={() => {
          browser.toggle();
          adaptiveMenuItemProps?.closeOverflow?.();
        }}
        title={"Browse operations"}
        tooltipPlacement={modal ? "bottom" : "top"}
        data-cy="action-browse-operations"
      />
    </ActionDiv>
  );
};
