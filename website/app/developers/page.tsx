import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";
import { PageHero } from "../components/page-hero";
import { DeveloperSection } from "../components/sections";

export const metadata: Metadata = {
  title: "Developers — TensorGrid",
  description:
    "Install TensorGrid from PyPI, launch the app, and start building with the Python SDK.",
};

export default function DevelopersPage() {
  return (
    <SiteShell>
      <PageHero
        label="Developers"
        title="Loved by ML engineers"
        lead="Install from PyPI, launch the app, and start exploring datasets in minutes."
      />
      <DeveloperSection embedded />
    </SiteShell>
  );
}
