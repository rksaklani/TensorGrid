import { PanelCTA, PanelCTAProps } from "@tensorgrid/components";
import ComputeVisualizationButton from "./ComputeVisualizationButton";
import useComputeVisualization from "./useComputeVisualization";

const DOCS_LINK =
  "https://github.com/rksaklani/TensorGrid/tree/main/core/docs";
const TRY_LINK = "https://github.com/rksaklani/TensorGrid";

export function Actions(props: ActionsProps) {
  const computeViz = useComputeVisualization();
  const defaultHandler = () => computeViz.prompt();
  const { handler = defaultHandler } = props;
  return <ComputeVisualizationButton onClick={handler} />;
}

export default function EmbeddingsCTA(props: EmbeddingsCTAProps) {
  const { mode, onBack } = props;
  return (
    <PanelCTA
      label="Embeddings help you explore and understand your dataset"
      demoLabel="Upgrade to TensorGrid Enterprise to Create Embeddings"
      description="You can compute and visualize embeddings for your dataset using a selection of pre-trained models or your own embeddings"
      docLink={DOCS_LINK}
      docCaption="Learn how to create embeddings visualizations via code."
      demoDocCaption="Not ready to upgrade yet? Learn how to create embeddings visualizations via code."
      icon="workspaces"
      Actions={Actions}
      name="Embeddings"
      onBack={onBack}
      mode={mode}
      tryLink={TRY_LINK}
    />
  );
}

type EmbeddingsCTAProps = {
  onBack: PanelCTAProps["onBack"];
  mode?: PanelCTAProps["mode"];
};

type ActionsProps = {
  handler?: () => void;
};
