export type FeaturePageContent = {
  slug: string;
  title: string;
  lead: string;
  body: string[];
  highlights?: string[];
};

export const PRODUCT_PAGES: Record<string, FeaturePageContent> = {
  curation: {
    slug: "curation",
    title: "Data Curation",
    lead: "Slice, search, and filter massive multimodal datasets to surface the right samples.",
    body: [
      "TensorGrid gives teams a visual workspace to explore datasets at scale. Query by metadata, tags, embeddings, and model predictions without writing one-off scripts.",
      "Build saved views, compare slices side by side, and share curated subsets with annotation and training pipelines.",
    ],
    highlights: [
      "Visual query builder for images, video, and 3D",
      "Embedding similarity and hard-example mining",
      "Saved views and reproducible dataset slices",
    ],
  },
  annotation: {
    slug: "annotation",
    title: "Annotation",
    lead: "Label, review, and QA visual data with an interactive browser-based workflow.",
    body: [
      "Annotate detections, segmentations, keypoints, and multimodal fields directly in the TensorGrid app. Review workflows help teams maintain label quality at scale.",
      "Integrate with external labeling tools or run annotation entirely inside your self-hosted deployment.",
    ],
    highlights: [
      "In-app labeling for common CV tasks",
      "Review and QA workflows",
      "Plugin integrations for custom tools",
    ],
  },
  generation: {
    slug: "generation",
    title: "Scene Generation",
    lead: "Explore synthetic and real-world scenes to stress-test perception pipelines.",
    body: [
      "Combine real captures with synthetic data to expand coverage of edge cases. TensorGrid helps you organize, compare, and evaluate generated scenes alongside production data.",
      "Use generation outputs to bootstrap models, validate sim-to-real gaps, and iterate faster on rare scenarios.",
    ],
    highlights: [
      "Unified catalog for real and synthetic samples",
      "Side-by-side visual comparison",
      "Export curated sets for training",
    ],
  },
  evaluation: {
    slug: "evaluation",
    title: "Model Evaluation",
    lead: "Find failure modes, compare models, and improve quality with visual analysis.",
    body: [
      "Evaluate detections, classifications, and embeddings with interactive plots and sample-level drill-down. Identify systematic errors before they reach production.",
      "Compare model versions on the same dataset slice and track improvements across releases.",
    ],
    highlights: [
      "Confusion matrices and PR curves in-app",
      "Failure-mode discovery with visual search",
      "Model-vs-model comparison on fixed slices",
    ],
  },
};

export const ENTERPRISE_PAGES: Record<string, FeaturePageContent> = {
  "why-enterprise": {
    slug: "why-enterprise",
    title: "Why Enterprise",
    lead: "Deploy anywhere. Run locally, on-prem, or in the cloud — your data stays where you need it.",
    body: [
      "Enterprise teams choose TensorGrid when they need an open, auditable data platform that fits existing infrastructure and compliance requirements.",
      "Avoid black-box SaaS lock-in while still giving practitioners a polished interactive experience.",
    ],
    highlights: [
      "Self-hosted and air-gapped friendly",
      "Open Apache 2.0 core",
      "Fits existing MLOps stacks",
    ],
  },
  workflows: {
    slug: "workflows",
    title: "Workflows",
    lead: "Extend the app with custom operators, panels, and integrations.",
    body: [
      "Plugins and delegated operators let you embed internal tools, automate curation, and connect TensorGrid to your training and deployment pipelines.",
      "Standardize how teams move from raw ingest to labeled datasets and evaluation reports.",
    ],
    highlights: [
      "Custom panels and operators",
      "Delegated execution for heavy jobs",
      "Integration with CI and orchestration",
    ],
  },
  security: {
    slug: "security",
    title: "Security",
    lead: "Govern who can view, edit, and export datasets across teams.",
    body: [
      "Role-based access patterns help large organizations separate read, write, and admin capabilities. Keep sensitive datasets inside your network boundary.",
      "Audit-friendly workflows support teams with strict data handling policies.",
    ],
    highlights: [
      "Team-scoped dataset access",
      "On-prem deployment options",
      "Export controls and governance hooks",
    ],
  },
  deployment: {
    slug: "deployment",
    title: "Deployment",
    lead: "Open source core you can audit, fork, and ship in production.",
    body: [
      "Install from PyPI, containerize with your standards, and run beside MongoDB on infrastructure you control.",
      "TensorGrid is designed for long-running internal deployments, not just local notebooks.",
    ],
    highlights: [
      "pip install tensorgrid-platform",
      "Docker-friendly app and database layout",
      "Upgrade on your release cadence",
    ],
  },
};

export const CUSTOMER_PAGES: Record<string, FeaturePageContent> = {
  manufacturing: {
    slug: "manufacturing",
    title: "Manufacturing",
    lead: "Visual QA, defect detection, and production-line datasets at scale.",
    body: [
      "Manufacturing teams use TensorGrid to curate inspection imagery, compare model performance across lines, and share failure cases with domain experts.",
    ],
  },
  "autonomous-vehicles": {
    slug: "autonomous-vehicles",
    title: "Autonomous Vehicles",
    lead: "Multimodal perception data for ADAS and autonomy programs.",
    body: [
      "Organize camera, LiDAR, and radar sequences; find long-tail scenarios; and evaluate perception stacks on consistent dataset slices.",
    ],
  },
  robotics: {
    slug: "robotics",
    title: "Robotics",
    lead: "Simulation and real-world captures for manipulation and navigation.",
    body: [
      "Robotics teams combine sim and field data in one workspace to debug policies and close the sim-to-real gap faster.",
    ],
  },
  agriculture: {
    slug: "agriculture",
    title: "Agriculture",
    lead: "Crop monitoring, aerial imagery, and seasonal dataset management.",
    body: [
      "Agriculture ML teams curate geospatial and visual data across seasons, track label drift, and ship models tuned to regional conditions.",
    ],
  },
  defense: {
    slug: "defense",
    title: "Defense",
    lead: "Secure, self-hosted data platforms for sensitive imagery and sensor feeds.",
    body: [
      "Defense organizations deploy TensorGrid on-prem to keep data inside controlled environments while enabling interactive exploration and evaluation.",
    ],
  },
  healthcare: {
    slug: "healthcare",
    title: "Healthcare",
    lead: "Medical imaging workflows with strict governance requirements.",
    body: [
      "Healthcare imaging teams use TensorGrid to review annotations, compare models, and document dataset versions for regulated environments.",
    ],
  },
  security: {
    slug: "security",
    title: "Security & Surveillance",
    lead: "Video analytics and anomaly detection at scale.",
    body: [
      "Security teams mine large video archives for hard examples, validate detector upgrades, and share curated incident sets across analysts.",
    ],
  },
};

export const PRODUCT_SLUGS = Object.keys(PRODUCT_PAGES);
export const ENTERPRISE_SLUGS = Object.keys(ENTERPRISE_PAGES);
export const CUSTOMER_SLUGS = Object.keys(CUSTOMER_PAGES);
