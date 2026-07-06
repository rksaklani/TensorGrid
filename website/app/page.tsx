import { SiteShell } from "./components/site-shell";
import { Hero } from "./components/hero";
import { BottomCtaSection } from "./components/sections";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <BottomCtaSection />
    </SiteShell>
  );
}
