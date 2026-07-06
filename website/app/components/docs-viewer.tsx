"use client";

import { useEffect, useRef } from "react";

type DocsViewerProps = {
  src: string;
};

export function DocsViewer({ src }: DocsViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const postHeight = () => {
      const height = iframe.clientHeight;
      iframe.contentWindow?.postMessage(
        { type: "tg-embed-height", height },
        window.location.origin
      );
    };

    const onLoad = () => postHeight();

    iframe.addEventListener("load", onLoad);
    postHeight();

    const observer = new ResizeObserver(postHeight);
    observer.observe(iframe);
    window.addEventListener("resize", postHeight);

    return () => {
      iframe.removeEventListener("load", onLoad);
      observer.disconnect();
      window.removeEventListener("resize", postHeight);
    };
  }, [src]);

  return (
    <div className="docs-viewer">
      <iframe
        ref={iframeRef}
        title="TensorGrid Documentation"
        src={src}
        className="docs-viewer-frame"
      />
    </div>
  );
}
