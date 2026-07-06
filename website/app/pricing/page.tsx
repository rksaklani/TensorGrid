import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";
import { PageHero } from "../components/page-hero";
import { PricingSection, BottomCtaSection } from "../components/sections";

export const metadata: Metadata = {
  title: "Pricing — TensorGrid",
  description: "TensorGrid Platform is open source and free to use under Apache 2.0.",
};

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        label="Pricing"
        title="Open source, free to use"
        lead="TensorGrid Platform is Apache 2.0. Install from PyPI and run locally with no license fees."
      />
      <PricingSection embedded />
      <BottomCtaSection />
    </SiteShell>
  );
}
