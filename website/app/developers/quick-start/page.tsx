import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../../components/site-shell";
import { QuickStartSection } from "../../components/quick-start-section";

export const metadata: Metadata = {
  title: "Quick Start",
  description: "Install TensorGrid from PyPI and launch the app in minutes.",
};

export default function QuickStartPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Link href="/developers" className="subpage-back">
            ← Developers overview
          </Link>
          <p className="section-label">Developers</p>
          <h1 className="page-hero-title">Quick Start</h1>
          <p className="page-hero-lead">
            Install from PyPI, load a sample dataset, and open the interactive app.
          </p>
        </div>
      </section>
      <QuickStartSection />
    </SiteShell>
  );
}
