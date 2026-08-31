import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { BranchCard } from "@/components/BranchCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { branchCities } from "@/data/site";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Branches | FunBlast Locations Across Gujarat" },
      {
        name: "description",
        content:
          "Find your nearest FunBlast — Ahmedabad (SBR, SG Highway, Ranip, Nikol), Rajkot, Vadodara, Gandhidham and Mehsana. Addresses, phone numbers and maps.",
      },
      { property: "og:title", content: "FunBlast Branches in Gujarat" },
      {
        property: "og:description",
        content: "Eight blast zones across Gujarat with addresses, contact numbers and maps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Branches"
        title="Eight blast zones across"
        accent="Gujarat"
        body="Tap a branch to call, follow on Instagram or open the live map."
      />

      <section className="mx-auto max-w-[112rem] px-5 pb-24 pt-24 md:px-10 md:pt-48">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {branchCities.map((city, i) => (
            <Reveal key={city} from="up" delay={i * 60}>
              <BranchCard
                city={city}
                variant="page"
                activeCity={activeCity}
                setActiveCity={setActiveCity}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
