import { Primitive } from "@tensorgrid/utilities";

/**
 * Operation type.
 */
export type OpType = "mutate" | "delete" | "add";

export type Mutation = {
  data: Primitive;
  op?: OpType;
};
