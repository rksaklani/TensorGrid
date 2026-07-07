import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "../../components/site-shell";
import { FeatureDetail } from "../../components/feature-detail";
import { PRODUCT_PAGES, PRODUCT_SLUGS } from "../../lib/site-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = PRODUCT_PAGES[slug];
  if (!feature) return { title: "Product" };
  return {
    title: feature.title,
    description: feature.lead,
  };
}

export default async function ProductFeaturePage({ params }: Props) {
  const { slug } = await params;
  const feature = PRODUCT_PAGES[slug];
  if (!feature) notFound();

  const related = PRODUCT_SLUGS.filter((s) => s !== slug).map((s) => ({
    label: PRODUCT_PAGES[s].title,
    href: `/product/${s}`,
  }));

  return (
    <SiteShell>
      <FeatureDetail
        label="Product"
        feature={feature}
        backHref="/product"
        backLabel="Product overview"
        related={related}
      />
    </SiteShell>
  );
}
