import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";
import { PageHero } from "../components/page-hero";
import { ResourcesSection } from "../components/sections";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "GitHub, PyPI, releases, and community resources for TensorGrid developers.",
};

export default function ResourcesPage() {
  return (
    <SiteShell>
      <PageHero
        label="Resources"
        title="Everything you need to get started"
        lead="Documentation, packages, and community links for TensorGrid developers and teams."
      />
      <ResourcesSection embedded />
    </SiteShell>
  );
}
