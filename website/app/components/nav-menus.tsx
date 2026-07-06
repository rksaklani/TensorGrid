import type { ReactNode } from "react";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: ReactNode;
};

export type NavMegaMenu = {
  leftLabel: string;
  leftItems: NavLink[];
  rightLabel: string;
  rightMode: "overview" | "list" | "feature";
  rightDescription?: string;
  rightLink?: NavLink;
  rightItems?: NavLink[];
  featureTitle?: string;
  featureText?: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  menu?: NavMegaMenu;
};

const icon = {
  grid: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  ),
  annotate: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
    </svg>
  ),
  brain: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3v2a4 4 0 0 1-8 0v-2a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3V6a4 4 0 0 1 4-4z" />
    </svg>
  ),
  chart: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="10" width="4" height="10" rx="1" />
      <rect x="10" y="6" width="4" height="14" rx="1" />
      <rect x="16" y="3" width="4" height="17" rx="1" />
    </svg>
  ),
  bars: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  ),
  workflow: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
      <path d="M11 7h2v4h4v2" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
    </svg>
  ),
  deploy: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    </svg>
  ),
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: "product",
    label: "Product",
    href: "/product",
    menu: {
      leftLabel: "TensorGrid Platform",
      leftItems: [
        { label: "Curation", href: "/product#curation", icon: icon.grid },
        { label: "Annotation", href: "/product#annotation", icon: icon.annotate },
        { label: "Generation", href: "/product#generation", icon: icon.brain },
        { label: "Evaluation", href: "/product#evaluation", icon: icon.chart },
      ],
      rightLabel: "Overview",
      rightMode: "overview",
      rightDescription:
        "TensorGrid is the data platform for building reliable multimodal and physical AI systems. Explore data, annotate samples, and discover failure modes to maximize model performance.",
      rightLink: { label: "TensorGrid Overview", href: "/product" },
    },
  },
  {
    id: "enterprise",
    label: "Enterprise",
    href: "/enterprise",
    menu: {
      leftLabel: "Explore",
      leftItems: [
        { label: "Why Enterprise", href: "/enterprise#why-enterprise", icon: icon.bars },
        { label: "Workflows", href: "/enterprise#workflows", icon: icon.workflow },
        { label: "Security", href: "/enterprise#security", icon: icon.shield },
        { label: "Deployment", href: "/enterprise#deployment", icon: icon.deploy },
      ],
      rightLabel: "By Industry",
      rightMode: "list",
      rightItems: [
        { label: "Manufacturing", href: "/customers" },
        { label: "Autonomous Vehicles", href: "/customers" },
        { label: "Robotics", href: "/customers" },
        { label: "Agriculture", href: "/customers" },
        { label: "Defense", href: "/customers" },
        { label: "Healthcare", href: "/customers" },
        { label: "Security", href: "/customers" },
      ],
    },
  },
  {
    id: "customers",
    label: "Customers",
    href: "/customers",
  },
  {
    id: "docs",
    label: "Docs",
    href: "/docs/index.html",
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    menu: {
      leftLabel: "TensorGrid Resources",
      leftItems: [
        { label: "GitHub", href: "https://github.com/rksaklani/TensorGrid", external: true },
        { label: "Customer Stories", href: "/customers" },
        { label: "Releases", href: "https://github.com/rksaklani/TensorGrid/releases", external: true },
        { label: "PyPI Package", href: "https://pypi.org/project/tensorgrid-platform/", external: true },
        { label: "NOTICE & License", href: "https://github.com/rksaklani/TensorGrid/blob/main/NOTICE", external: true },
        { label: "Documentation", href: "/docs/index.html" },
        { label: "Quick Start", href: "/docs/getting_started/index.html" },
        { label: "Dataset Zoo", href: "/docs/dataset_zoo/index.html" },
        { label: "Community", href: "https://github.com/rksaklani/TensorGrid/discussions", external: true },
      ],
      rightLabel: "Get Started",
      rightMode: "feature",
      featureTitle: "Install in one command",
      featureText:
        "Ship TensorGrid locally with pip. Load a zoo dataset, launch the visual app, and start exploring multimodal data in minutes.",
      rightLink: { label: "pip install tensorgrid-platform", href: "/developers#install" },
    },
  },
  {
    id: "developers",
    label: "Developers",
    href: "/developers",
    menu: {
      leftLabel: "Build with TensorGrid",
      leftItems: [
        { label: "Documentation", href: "/docs/index.html" },
        { label: "Quick Start", href: "/developers#install" },
        { label: "Integrations", href: "/docs/integrations/index.html" },
        { label: "Tutorials", href: "/docs/tutorials/index.html" },
        { label: "Plugins", href: "/docs/plugins/index.html" },
        { label: "Community", href: "https://github.com/rksaklani/TensorGrid/discussions", external: true },
        { label: "Release Notes", href: "https://github.com/rksaklani/TensorGrid/releases", external: true },
      ],
      rightLabel: "The Power of Community",
      rightMode: "overview",
      rightDescription:
        "Join the open-source TensorGrid community to share workflows, report issues, and turn bold data ideas into production AI systems.",
      rightLink: {
        label: "Star us on GitHub",
        href: "https://github.com/rksaklani/TensorGrid",
        external: true,
      },
    },
  },
  {
    id: "pricing",
    label: "Pricing",
    href: "/pricing",
  },
];
