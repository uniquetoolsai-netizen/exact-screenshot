import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TiltCard } from "@/components/TiltCard";
import { attractions } from "@/data/site";

export const Route = createFileRoute("/attractions")({
  head: () => ({
    meta: [
      { title: "Attractions | Bowling, Go Karting, VR & More — FunBlast" },
      {
        name: "description",
        content:
          "Explore all FunBlast attractions: arcade, bowling, go karting, VR arena, bumper cars, haunted house, snow park, trampoline park and kids zone.",
      },
      { property: "og:title", content: "FunBlast Attractions — 150+ Games Under One Roof" },
      {
        property: "og:description",
        content: "Ten headline attractions across every FunBlast branch in Gujarat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AttractionsPage,
});

function AttractionsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Attractions"
        title="Endless ways to"
        accent="lose track of time"
        body="From free-roam VR missions to real snow and a trampoline sky — every FunBlast branch is packed with games for every age."
      />

      <section className="mx-auto max-w-[112rem] px-5 pb-24 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map(({ name, tag, meta, img, Icon }, i) => (
            <Reveal key={name} from="scale" delay={i * 60}>
              <TiltCard className="ticket group relative h-[24rem] overflow-hidden rounded-[1.75rem] border border-border/60">
                <img
                  src={img}
                  alt={`${name} at FunBlast`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute top-5 right-5 font-display text-5xl outline-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <h2 className="font-display text-2xl">{name}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">{tag}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-dashed border-primary/40 pt-3">
                    <span className="font-sans text-[0.6rem] tracking-[0.22em] text-primary uppercase">
                      {meta}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-60" />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
