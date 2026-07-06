/**
 * Copyright 2017-2026, Voxel51, Inc.
 */

import { Command } from "@tensorgrid/command-bus";
import { AnnotationLabel } from "@tensorgrid/state";
import { Field } from "@tensorgrid/utilities";

/**
 * Command to delete an annotation label.
 */
export class DeleteAnnotationCommand extends Command<boolean> {
  constructor(
    public readonly label: AnnotationLabel,
    public readonly schema: Field,
  ) {
    super();
  }
}
