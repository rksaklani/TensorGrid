import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";
import { PageHero } from "../components/page-hero";
import { PlatformSection, MultimodalSection } from "../components/sections";

export const metadata: Metadata = {
  title: "Product — TensorGrid",
  description:
    "Data curation, annotation, generation, and evaluation for multimodal AI datasets.",
};

export default function ProductPage() {
  return (
    <SiteShell>
      <PageHero
        label="Product"
        title="TensorGrid Platform"
        lead="Your data drives AI success. Explore, annotate, and evaluate multimodal datasets in one interactive platform."
      />
      <PlatformSection embedded />
      <MultimodalSection embedded />
    </SiteShell>
  );
}
