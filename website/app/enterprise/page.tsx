import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";
import { PageHero } from "../components/page-hero";
import { EnterpriseSection, StatsBand } from "../components/sections";

export const metadata: Metadata = {
  title: "Enterprise — TensorGrid",
  description:
    "Scale, security, and deployment options for enterprise multimodal AI teams.",
};

export default function EnterprisePage() {
  return (
    <SiteShell>
      <PageHero
        label="Enterprise"
        title="Built for serious AI stacks"
        lead="Security, scale, and extensibility for teams that need governance without vendor lock-in."
      />
      <EnterpriseSection embedded />
      <StatsBand />
    </SiteShell>
  );
}
