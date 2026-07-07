import Link from "next/link";
import type { FeaturePageContent } from "../lib/site-content";

type FeatureDetailProps = {
  label: string;
  feature: FeaturePageContent;
  backHref: string;
  backLabel: string;
  related?: { label: string; href: string }[];
};

export function FeatureDetail({
  label,
  feature,
  backHref,
  backLabel,
  related = [],
}: FeatureDetailProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Link href={backHref} className="subpage-back">
            ← {backLabel}
          </Link>
          <p className="section-label">{label}</p>
          <h1 className="page-hero-title">{feature.title}</h1>
          <p className="page-hero-lead">{feature.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container subpage-content">
          <div className="subpage-body">
            {feature.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {feature.highlights && feature.highlights.length > 0 && (
            <ul className="subpage-highlights">
              {feature.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {related.length > 0 && (
            <div className="subpage-related">
              <h2>Related</h2>
              <div className="subpage-related-links">
                {related.map((item) => (
                  <Link key={item.href} href={item.href} className="subpage-related-link">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
