import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";
import { PageHero } from "../components/page-hero";
import { CustomersSection, StatsBand } from "../components/sections";

export const metadata: Metadata = {
  title: "Customers — TensorGrid",
  description:
    "How teams in computer vision, robotics, healthcare, and more use TensorGrid.",
};

export default function CustomersPage() {
  return (
    <SiteShell>
      <PageHero
        label="Customers"
        title="Teams shipping physical AI"
        lead="From research labs to production ML teams, TensorGrid helps organizations curate better data and ship models faster."
      />
      <CustomersSection embedded />
      <StatsBand />
    </SiteShell>
  );
}
