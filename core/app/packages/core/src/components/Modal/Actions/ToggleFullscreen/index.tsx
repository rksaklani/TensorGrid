import { PillButton } from "@tensorgrid/components";
import { fullscreen } from "@tensorgrid/state";
import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import { useRecoilState } from "recoil";

const ToggleFullscreen = () => {
  const [fullScreen, setFullScreen] = useRecoilState(fullscreen);

  return (
    <PillButton
      icon={fullScreen ? <FullscreenExit /> : <Fullscreen />}
      open={fullScreen}
      highlight={false}
      onClick={() => setFullScreen(!fullScreen)}
      tooltipPlacement="bottom"
      title={fullScreen ? "Exit fullscreen (f)" : "Enter fullscreen (f)"}
      data-cy="action-toggle-fullscreen"
    />
  );
};

export default ToggleFullscreen;
