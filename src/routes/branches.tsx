import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import { BranchDetails } from "@/components/BranchDetails";
import { BranchMap } from "@/components/BranchMap";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { branchCities } from "@/data/site";
import branchImg from "@/assets/branch.jpg";

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
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Branches"
        title="Eight blast zones across"
        accent="Gujarat"
        body="Tap a branch to call, follow on Instagram or open the live map."
      />

      <section className="mx-auto max-w-[112rem] px-5 pb-24 pt-48 md:px-10">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {branchCities.map((city, i) => (
            <Reveal key={city} from="up" delay={i * 60}>
              <div className="group relative aspect-square w-full">
                <div className="pointer-events-none absolute bottom-[calc(100%+0.75rem)] left-1/2 z-40 h-48 w-[min(22rem,calc(100vw-2.5rem))] -translate-x-1/2 translate-y-3 scale-95 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transform-none motion-reduce:transition-none">
                  <BranchMap city={city} />
                </div>

                <article className="neon-ring relative h-full w-full overflow-hidden rounded-3xl">
                  <img
                    src={branchImg}
                    alt={`FunBlast branch in ${city}`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
                  <div className="relative flex h-full items-end justify-between p-5">
                    <h2 className="max-w-[75%] font-display text-xl leading-tight">{city}</h2>
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                </article>

                <div className="pointer-events-none absolute inset-3 z-30 scale-95 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 motion-reduce:transform-none motion-reduce:transition-none">
                  <BranchDetails city={city} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
