import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "../../components/site-shell";
import { FeatureDetail } from "../../components/feature-detail";
import { CUSTOMER_PAGES, CUSTOMER_SLUGS } from "../../lib/site-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CUSTOMER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = CUSTOMER_PAGES[slug];
  if (!feature) return { title: "Customers" };
  return {
    title: feature.title,
    description: feature.lead,
  };
}

export default async function CustomerIndustryPage({ params }: Props) {
  const { slug } = await params;
  const feature = CUSTOMER_PAGES[slug];
  if (!feature) notFound();

  const related = CUSTOMER_SLUGS.filter((s) => s !== slug)
    .slice(0, 4)
    .map((s) => ({
      label: CUSTOMER_PAGES[s].title,
      href: `/customers/${s}`,
    }));

  return (
    <SiteShell>
      <FeatureDetail
        label="Customers"
        feature={feature}
        backHref="/customers"
        backLabel="All customers"
        related={related}
      />
    </SiteShell>
  );
}
