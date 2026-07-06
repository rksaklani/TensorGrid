import { StatusButton } from "@tensorgrid/components";
import { usePanelEvent } from "@tensorgrid/operators";
import { usePanelId } from "@tensorgrid/spaces";
import { ViewPropsType } from "../utils/types";

export default function StatusButtonView(props: ViewPropsType) {
  const { schema } = props;
  const { view = {} } = schema;
  const { label, on_click, params = {}, severity, disabled, title } = view;
  const panelId = usePanelId();
  const triggerEvent = usePanelEvent();
  const handleClick = () => {
    triggerEvent(panelId, {
      operator: on_click,
      params,
    });
  };

  return (
    <StatusButton
      label={label}
      onClick={handleClick}
      severity={severity}
      disabled={disabled}
      title={title}
    />
  );
}
