import type { PaginateSamplesNode } from "@tensorgrid/relay";
import { ImaVidFrameSamples } from "./ima-vid-frame-samples";

export type SampleId = string;
export type SampleResponse = PaginateSamplesNode;
export type PartitionId = string;

export type ImaVidStore = {
  [partitionSampleId: string]: ImaVidFrameSamples;
};
