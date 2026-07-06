const PLATFORM = [
  {
    id: "curation",
    title: "Data Curation",
    desc: "Slice, search, and filter massive multimodal datasets to surface the right samples.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 12h10M4 18h14" />
      </svg>
    ),
  },
  {
    id: "annotation",
    title: "Annotation",
    desc: "Label, review, and QA visual data with an interactive browser-based workflow.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
  },
  {
    id: "evaluation",
    title: "Model Evaluation",
    desc: "Find failure modes, compare models, and improve quality with visual analysis.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18M7 16l4-4 4 4 5-6" />
      </svg>
    ),
  },
  {
    id: "generation",
    title: "Scene Generation",
    desc: "Explore synthetic and real-world scenes to stress-test perception pipelines.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
];

const MODALITIES = [
  { icon: "🖼️", label: "Images" },
  { icon: "🎬", label: "Video" },
  { icon: "☁️", label: "3D / Point Cloud" },
  { icon: "📡", label: "LiDAR / Radar" },
  { icon: "🔊", label: "Audio" },
  { icon: "📍", label: "Geolocation" },
  { icon: "📈", label: "Time Series" },
  { icon: "📝", label: "Text" },
];

const ENTERPRISE = [
  {
    id: "why-enterprise",
    title: "Deploy anywhere",
    desc: "Run locally, on-prem, or in the cloud. Your data stays where you need it.",
  },
  {
    id: "workflows",
    title: "Plugins & extensibility",
    desc: "Extend the app with custom operators, panels, and integrations.",
  },
  {
    id: "scale",
    title: "Scale to billions",
    desc: "Built for large-scale datasets with efficient querying and visualization.",
  },
  {
    id: "versioning",
    title: "Dataset versioning",
    desc: "Snapshot views, track changes, and roll back to known-good states.",
  },
  {
    id: "security",
    title: "Role-based access",
    desc: "Govern who can view, edit, and export datasets across teams.",
  },
  {
    id: "deployment",
    title: "Apache 2.0 license",
    desc: "Open source core you can audit, fork, and ship in production.",
  },
];

export function PlatformSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section id="platform" className="section">
      <div className="container">
        {!embedded && (
          <>
            <p className="section-label">TensorGrid Platform</p>
            <h2 className="section-title">Your data drives AI success</h2>
            <p className="section-lead">
              AI success depends on data quality, not just models. TensorGrid puts
              multimodal data at the center so teams can move faster with confidence.
            </p>
          </>
        )}
        <div className="platform-grid">
          {PLATFORM.map((item) => (
            <article key={item.title} id={item.id} className="platform-card">
              <div className="platform-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MultimodalSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section id="multimodal" className="section section-alt">
      <div className="container section-header-center">
        {!embedded && (
          <>
            <p className="section-label">Multimodal</p>
            <h2 className="section-title">One platform for every modality</h2>
            <p className="section-lead">
              Visualize, query, annotate, and understand images, video, point clouds,
              and time-series data — all in one interactive app.
            </p>
          </>
        )}
        <div className="modalities-grid">
          {MODALITIES.map((m) => (
            <div key={m.label} className="modality-chip">
              <span className="modality-icon">{m.icon}</span>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        <div className="stat-item">
          <strong>30%</strong>
          <p>Typical boost in model accuracy with better data curation</p>
        </div>
        <div className="stat-item">
          <strong>5×</strong>
          <p>Faster dataset exploration vs. ad-hoc scripts</p>
        </div>
        <div className="stat-item">
          <strong>1 app</strong>
          <p>Unified workflow from ingest to evaluation</p>
        </div>
      </div>
    </section>
  );
}

export function EnterpriseSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section id="enterprise" className="section">
      <div className="container">
        {!embedded && (
          <>
            <p className="section-label">Scale &amp; Governance</p>
            <h2 className="section-title">Built for serious AI stacks</h2>
            <p className="section-lead">
              TensorGrid is designed for teams that need security, scale, and
              extensibility without vendor lock-in.
            </p>
          </>
        )}
        <div className="enterprise-grid">
          {ENTERPRISE.map((item) => (
            <article key={item.title} id={item.id} className="enterprise-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeveloperSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section id="developers" className="section dev-section">
      <div className="container dev-grid">
        <div>
          {!embedded && (
            <>
              <p className="section-label">Developers</p>
              <h2 className="section-title">Loved by ML engineers</h2>
              <p className="section-lead">
                Install from PyPI, launch the app, and start exploring datasets in
                minutes.
              </p>
            </>
          )}
          <div id="install" className="code-block">
            <div className="code-header">
              <span>Terminal</span>
              <span>pip</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="comment"># Install TensorGrid</span>
                {"\n"}
                pip install tensorgrid-platform
                {"\n\n"}
                <span className="comment"># Quick start</span>
                {"\n"}
                <span className="keyword">import</span> tensorgrid{" "}
                <span className="keyword">as</span> tg
                {"\n"}
                <span className="keyword">import</span> tensorgrid.zoo{" "}
                <span className="keyword">as</span> tgz
                {"\n\n"}
                dataset = tgz.load_zoo_dataset(
                <span className="string">&quot;quickstart&quot;</span>)
                {"\n"}
                session = tg.launch_app(dataset)
                {"\n"}
                session.wait(-1)
              </code>
            </pre>
          </div>
        </div>

        <div>
          <div className="dev-links">
            <a
              href="https://github.com/rksaklani/TensorGrid"
              className="dev-link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="dev-link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <strong>View on GitHub</strong>
                <span>rksaklani/TensorGrid — source, issues, releases</span>
              </div>
            </a>

            <a
              href="https://pypi.org/project/tensorgrid-platform/"
              className="dev-link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="dev-link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <strong>PyPI Package</strong>
                <span>tensorgrid-platform — latest releases</span>
              </div>
            </a>

            <a href="http://localhost:5151" className="dev-link-card">
              <div className="dev-link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div>
                <strong>Launch App</strong>
                <span>Open the interactive TensorGrid UI locally</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CustomersSection({ embedded = false }: { embedded?: boolean }) {
  const INDUSTRIES = [
    "Computer Vision",
    "Autonomous Systems",
    "Robotics",
    "Healthcare Imaging",
    "Manufacturing QA",
    "Agriculture",
    "Retail Analytics",
    "Defense & Security",
  ];

  return (
    <section id="customers" className="section">
      <div className="container section-header-center">
        {!embedded && (
          <>
            <p className="section-label">Customers</p>
            <h2 className="section-title">Built for teams shipping physical AI</h2>
            <p className="section-lead">
              From research labs to production ML teams, TensorGrid helps
              organizations curate better data and ship models faster.
            </p>
          </>
        )}
        <div className="customers-grid">
          {INDUSTRIES.map((name) => (
            <div key={name} className="customer-chip">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResourcesSection({ embedded = false }: { embedded?: boolean }) {
  const RESOURCES = [
    {
      title: "GitHub Repository",
      desc: "Source code, issues, and contribution guides.",
      href: "https://github.com/rksaklani/TensorGrid",
      external: true,
    },
    {
      title: "PyPI Package",
      desc: "Install tensorgrid-platform with pip.",
      href: "https://pypi.org/project/tensorgrid-platform/",
      external: true,
    },
    {
      title: "Releases",
      desc: "Version history, wheels, and changelogs.",
      href: "https://github.com/rksaklani/TensorGrid/releases",
      external: true,
    },
    {
      title: "Quick Start",
      desc: "Load a sample dataset and launch the app.",
      href: "/developers#install",
      external: false,
    },
    {
      title: "NOTICE & License",
      desc: "Apache 2.0 attribution and legal info.",
      href: "https://github.com/rksaklani/TensorGrid/blob/main/NOTICE",
      external: true,
    },
    {
      title: "Dataset Zoo",
      desc: "Built-in sample datasets via tensorgrid.zoo.",
      href: "/developers",
      external: false,
    },
  ];

  return (
    <section id="resources" className="section section-alt">
      <div className="container">
        {!embedded && (
          <>
            <p className="section-label">Resources</p>
            <h2 className="section-title">Everything you need to get started</h2>
            <p className="section-lead">
              Documentation, packages, and community links for TensorGrid
              developers and teams.
            </p>
          </>
        )}
        <div className="resources-grid">
          {RESOURCES.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="resource-card"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="resource-link">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section id="pricing" className="cta-section">
      <div className="container">
        {!embedded && (
          <div className="section-header-center" style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">Pricing</p>
            <h2 className="section-title">Open source, free to use</h2>
            <p className="section-lead">
              TensorGrid Platform is Apache 2.0. Install from PyPI and run locally
              with no license fees.
            </p>
          </div>
        )}
        <div className="pricing-grid">
          <article className="pricing-card pricing-card-featured">
            <p className="pricing-tier">Community</p>
            <p className="pricing-price">
              Free <span>forever</span>
            </p>
            <ul className="pricing-features">
              <li>Full multimodal data platform</li>
              <li>Interactive visual app</li>
              <li>Python SDK &amp; CLI</li>
              <li>Plugin system</li>
              <li>Apache 2.0 license</li>
            </ul>
            <a href="/developers#install" className="btn btn-primary btn-lg">
              pip install tensorgrid-platform
            </a>
          </article>
          <article className="pricing-card">
            <p className="pricing-tier">Self-hosted</p>
            <p className="pricing-price">
              $0 <span>+ your infra</span>
            </p>
            <ul className="pricing-features">
              <li>Deploy on your machines</li>
              <li>Local or on-prem MongoDB</li>
              <li>Custom plugins &amp; operators</li>
              <li>GitHub releases &amp; tags</li>
              <li>Community support</li>
            </ul>
            <a
              href="https://github.com/rksaklani/TensorGrid"
              className="btn btn-ghost btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function BottomCtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <h2>Enough data wrangling. Start exploring.</h2>
          <p>
            Install TensorGrid, load a dataset, and unlock the value of your
            multimodal data today.
          </p>
          <div className="cta-actions">
            <a href="/developers#install" className="btn btn-primary btn-lg">
              pip install tensorgrid-platform
            </a>
            <a
              href="https://github.com/rksaklani/TensorGrid"
              className="btn btn-ghost btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
