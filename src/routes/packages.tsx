import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cake, Briefcase, GraduationCap, Users } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { PartyCarousel } from "@/components/PartyCarousel";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Party Packages | Birthdays, Kitty & Corporate — FunBlast" },
      {
        name: "description",
        content:
          "Birthday parties, kitty parties, school trips and corporate outings at FunBlast — food, decor, host and unlimited games from ₹399 per guest.",
      },
      { property: "og:title", content: "FunBlast Party Packages" },
      {
        property: "og:description",
        content: "Fully-hosted celebrations with food, decor and games across 8 Gujarat branches.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagesPage,
});

const packs = [
  {
    Icon: Cake,
    title: "Birthday Blast",
    price: "₹499",
    body: "Decorated party area, cake table, host, meal combo and game credits for every guest.",
  },
  {
    Icon: Users,
    title: "Kitty & Friends",
    price: "₹399",
    body: "Reserved lounge, snacks and beverages, music, group games and photo moments.",
  },
  {
    Icon: GraduationCap,
    title: "School Trips",
    price: "₹299",
    body: "Supervised batches, safety marshals, lunch options and educational fun activities.",
  },
  {
    Icon: Briefcase,
    title: "Corporate Day",
    price: "₹599",
    body: "Team-building challenges, party hall, catering and karting or trampoline slots.",
  },
];

function PackagesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Packages"
        title="Celebrations that"
        accent="actually blast"
        body="Pick a package, tell us the date, and we handle food, decor, host and games."
      />

      <section className="mx-auto max-w-[112rem] px-5 pb-16 md:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {packs.map(({ Icon, title, price, body }, i) => (
            <Reveal key={title} from="up" delay={i * 70}>
              <div className="glass flex h-full flex-col rounded-3xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <h2 className="mt-4 font-display text-2xl">{title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <p className="mt-5 font-display text-3xl text-primary">{price}</p>
                <p className="font-sans text-[0.55rem] tracking-[0.22em] text-muted-foreground uppercase">
                  per guest onwards
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PartyCarousel />

      <section className="mx-auto max-w-[112rem] px-5 pb-24 md:px-10">
        <div className="flex justify-center">
          <Link to="/contact" className="btn-blast rounded-full px-7 py-3.5">
            Enquire now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
