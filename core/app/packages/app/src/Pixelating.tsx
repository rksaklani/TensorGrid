/**
 * Copyright 2017-2026, Voxel51, Inc.
 *
 * Global loading screen component — rendered by {@link Renderer} during
 * initial page load only.
 */

import { Loading } from "@tensorgrid/components";
import React, { useEffect } from "react";
import styles from "./Pixelating.module.css";

export class GlobalLoadingScreenEvent extends Event {
  static readonly eventName = "global-loading-screen" as const;

  constructor() {
    super(GlobalLoadingScreenEvent.eventName);
  }
}

const Pixelating = React.memo(() => {
  useEffect(() => {
    document.dispatchEvent(new GlobalLoadingScreenEvent());
  }, []);

  return (
    <Loading wrapperStyle={{ flexDirection: "column", width: "100%" }}>
      <div className={styles.splash}>
        <img
          className={styles.logo}
          src="/logo-icon.png"
          alt="TensorGrid"
        />
        <span className={styles.text}>
          Tensor<span className={styles.accent}>Grid</span>
        </span>
        <span className={styles.subtext}>Loading your workspace…</span>
      </div>
    </Loading>
  );
});

Pixelating.displayName = "Pixelating";

export default Pixelating;
