import { Loading } from "@tensorgrid/components";
import ErrorWithStack from "./ErrorWithStack";
import { PlotErrorResponse } from "./types";

interface EmbeddingsPlotErrorProps {
  error: PlotErrorResponse;
}

export default function EmbeddingsPlotError({
  error,
}: EmbeddingsPlotErrorProps) {
  if (error?.stack) {
    return <ErrorWithStack error={error} />;
  }
  return <Loading>{error.details ?? error["message"]}</Loading>;
}
