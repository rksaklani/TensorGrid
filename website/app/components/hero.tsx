import { BrandLogo } from "./brand-logo";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-brand">
            <BrandLogo variant="full" className="brand-logo-hero" priority />
          </div>
          <p className="hero-eyebrow">
            <span aria-hidden />
            Open-source multimodal data platform
          </p>
          <h1>
            The data platform for{" "}
            <em>physical AI</em>
          </h1>
          <p className="hero-lead">
            Build and iterate faster. TensorGrid surfaces the right data
            insights to maximize AI performance across images, video, 3D, and
            sensor data.
          </p>
          <div className="hero-actions">
            <a href="/developers/quick-start" className="btn btn-primary btn-lg">
              Install OSS
            </a>
            <a href="http://localhost:5151" className="btn btn-ghost btn-lg">
              Launch App
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>Multimodal</strong>
              <span>Images · Video · 3D · LiDAR</span>
            </div>
            <div className="hero-stat">
              <strong>Open Source</strong>
              <span>Apache 2.0 · pip installable</span>
            </div>
            <div className="hero-stat">
              <strong>Interactive</strong>
              <span>Visual app at localhost:5151</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <div className="app-preview">
            <div className="app-preview-bar">
              <span className="app-preview-dot" />
              <span className="app-preview-dot" />
              <span className="app-preview-dot" />
            </div>
            <div className="app-preview-body">
              <div className="preview-sidebar">
                <div className="preview-sidebar-item active" />
                <div className="preview-sidebar-item" />
                <div className="preview-sidebar-item" />
                <div className="preview-sidebar-item" />
                <div className="preview-sidebar-item" />
              </div>
              <div className="preview-main">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`preview-thumb${i === 4 ? " highlight" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
