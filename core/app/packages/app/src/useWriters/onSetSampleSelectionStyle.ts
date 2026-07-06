/**
 * Copyright 2017-2026, Voxel51, Inc.
 */

import {
  setSampleSelectionStyle,
  type setSampleSelectionStyleMutation,
} from "@tensorgrid/relay";
import { DEFAULT_SELECTION_STYLE } from "@tensorgrid/state";
import { DefaultValue } from "recoil";
import { commitMutation } from "relay-runtime";
import type { RegisteredWriter } from "./registerWriter";

const onSetSampleSelectionStyle: RegisteredWriter<"sampleSelectionStyle"> =
  ({ environment, subscription }) =>
  (style) => {
    commitMutation<setSampleSelectionStyleMutation>(environment, {
      mutation: setSampleSelectionStyle,
      variables: {
        style: style instanceof DefaultValue ? DEFAULT_SELECTION_STYLE : style,
        subscription,
      },
    });
  };

export default onSetSampleSelectionStyle;
