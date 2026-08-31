import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Gamepad2,
  Gift,
  ShieldCheck,
  Sparkles,
  Star,
  Ticket,
  Users,
  Zap,
} from "lucide-react";

import { Counter, Reveal } from "@/components/Reveal";
import { PartyCarousel } from "@/components/PartyCarousel";
import { TiltCard } from "@/components/TiltCard";
import { Gallery } from "@/components/Gallery";
import { Awards } from "@/components/Awards";
import { Testimonials } from "@/components/Testimonials";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BranchCard } from "@/components/BranchCard";
import { attractions } from "@/data/site";

import heroImg from "@/assets/hero.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FunBlast Gaming Zone | Bowling, Go Karting & VR in Gujarat" },
      {
        name: "description",
        content:
          "FunBlast is Gujarat's one-stop family entertainment zone — bowling, go karting, VR games, trampoline park, arcade & kids zone across 8+ locations.",
      },
      { property: "og:title", content: "FunBlast Gaming Zone | More Fun. More Blast!" },
      {
        property: "og:description",
        content:
          "150+ games and attractions across 8+ locations in Gujarat. Book tickets for bowling, go karting, VR, trampoline park and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});




const reasons = [
  {
    Icon: ShieldCheck,
    title: "Safe Environment",
    body: "Top-notch sanitization, trained marshals and constant supervision on every ride.",
  },
  {
    Icon: Gamepad2,
    title: "Latest Games",
    body: "Imported attractions and new releases refreshed every single season.",
  },
  {
    Icon: Users,
    title: "Family Entertainment",
    body: "One venue that works for toddlers, teens, parents and grandparents alike.",
  },
  {
    Icon: Gift,
    title: "Birthday Packages",
    body: "Fully-hosted celebrations with food, decor, host and games included.",
  },
];

const branchRowA = [
  "Ahmedabad SBR",
  "Ahmedabad SG Highway",
  "Ahmedabad Ranip",
  "Ahmedabad Nikol",
];
const branchRowB = ["Rajkot", "Gandhidham", "Vadodara", "Mehsana"];

const ticker = [
  "Bowling",
  "Go Karting",
  "VR Games",
  "Trampoline",
  "Arcade",
  "Kids Zone",
  "Bumper Cars",
  "Laser Tag",
];





function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden py-3">
      <div className={reverse ? "marquee-track-rev" : "marquee-track"}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0">
            {ticker.map((word) => (
              <span
                key={`${dup}-${word}`}
                className="flex items-center gap-6 px-6 font-display text-2xl whitespace-nowrap md:text-3xl"
              >
                <span className={reverse ? "outline-text" : "text-secondary-foreground"}>{word}</span>
                <Star className="h-3.5 w-3.5 fill-current text-primary" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />


      {/* ── Hero: kinetic arcade stage ── */}
      <section className="relative flex min-h-[780px] items-center overflow-hidden pt-32 pb-20">
        <img
          src={heroImg}
          alt="Kids racing a go-kart and playing VR at FunBlast gaming zone"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-80"
        />
        <div className="hero-fade absolute inset-0" />
        <div className="grid-floor absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
        <div className="conic-halo absolute top-1/4 -left-24 h-72 w-72 rounded-full" />

        <div className="relative mx-auto grid w-full max-w-[112rem] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal from="left">
              <span className="pill glass text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Gujarat's loudest playground
              </span>
            </Reveal>
            <Reveal from="left" delay={90}>
              <h1 className="mt-6 font-display text-[3.8rem] leading-[0.82] sm:text-8xl xl:text-[9rem]">
                <span className="block text-foreground">More Fun</span>
                <span className="shimmer-text block">More Blast!</span>
              </h1>
            </Reveal>
            <Reveal from="left" delay={180}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
                150+ games. Eight cities. One rule — never stop playing. Karts, VR arenas,
                bowling lanes and a trampoline sky, all under one roof.
              </p>
            </Reveal>
            <Reveal from="up" delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-blast rounded-full px-6 py-3">
                  Book Tickets <Ticket className="h-4 w-4" />
                </Link>
                <Link to="/attractions" className="btn-ghost-blast rounded-full px-6 py-3">
                  Explore Rides <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>


            <Reveal from="up" delay={340}>
              <dl className="mt-12 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { v: 1, s: "M+", d: 0, label: "Visitors" },
                  { v: 8, s: "+", d: 0, label: "Locations" },
                  { v: 150, s: "+", d: 0, label: "Games" },
                  { v: 4.8, s: "", d: 1, label: "Rating" },
                ].map(({ v, s, d, label }) => (
                  <div key={label} className="glass rounded-2xl px-5 md:px-10 py-3">
                    <dt className="font-display text-2xl text-primary">
                      <Counter to={v} suffix={s} decimals={d} />
                    </dt>
                    <dd className="font-sans text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="relative hidden lg:block">
            <TiltCard className="glass animate-bob ml-auto w-64 rounded-3xl p-5">
              <p className="font-sans text-[0.65rem] tracking-[0.25em] text-primary uppercase">
                Now trending
              </p>
              <p className="mt-2 font-display text-2xl">VR Arena 2.0</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Six-player free-roam missions. Live at 4 branches.
              </p>
              <Link
                to="/attractions"
                className="mt-4 inline-flex items-center gap-1 font-sans text-xs font-bold tracking-[0.16em] text-primary uppercase"
              >
                Try it <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

            </TiltCard>
            <TiltCard className="glass mt-6 w-56 rounded-3xl p-5">
              <p className="font-display text-3xl text-primary">
                <Counter to={4.8} decimals={1} />
              </p>
              <div className="mt-1 flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current text-primary" />
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Rated by 12,400+ guests</p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── Double-direction skewed ticker ── */}
      <div className="relative -mt-6 -rotate-2 border-y border-primary/25 bg-background/60 py-1">
        <div className="blast-bar border-b border-border/40">
          <MarqueeRow />
        </div>
        <MarqueeRow reverse />
      </div>

      {/* ── Attractions: swipeable ticket rail ── */}
      <section id="attractions" className="py-24">
        <div className="mx-auto flex max-w-[112rem] flex-wrap items-end justify-between gap-6 px-5 md:px-10">
          <Reveal>
            <span className="pill glass text-primary">Attractions</span>
            <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.92] md:text-7xl">
              Ten ways to <span className="text-blast">lose track of time</span>
            </h2>
          </Reveal>
          <Reveal from="right">
            <p className="font-sans text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
              Drag / scroll →
            </p>
          </Reveal>
        </div>

        <div className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 md:px-10 pb-6 [scrollbar-width:none] lg:px-[max(1rem,calc((100vw-112rem)/2))]">
          {attractions.map(({ name, tag, meta, img, Icon }, i) => (
            <TiltCard
              key={name}
              className="ticket group relative h-[26rem] w-[19rem] shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-border/60"
            >
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
                <h3 className="font-display text-2xl">{name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{tag}</p>
                <div className="mt-4 flex items-center justify-between border-t border-dashed border-primary/40 pt-3">
                  <span className="font-sans text-[0.6rem] tracking-[0.22em] text-primary uppercase">
                    {meta}
                  </span>
                  <ArrowUpRight className="h-4 w-4 -translate-y-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ── Why choose: sticky headline + numbered kinetic list ── */}
      <section className="mx-auto max-w-[112rem] px-5 md:px-10 pb-24">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal from="left">
              <span className="pill glass text-primary">Why FunBlast</span>
              <h2 className="mt-4 font-display text-4xl leading-[0.92] md:text-5xl">
                Built for <span className="text-blast">big energy</span> days out
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Every branch runs on the same promise: clean, safe, loud and endlessly
                replayable.
              </p>
              <div className="conic-halo relative mt-10 hidden h-40 w-40 rounded-full lg:block">
                <div className="glass flex h-full w-full items-center justify-center rounded-full text-center">
                  <span className="font-display text-3xl text-primary">
                    <Counter to={100} suffix="%" />
                    <span className="mt-1 block font-sans text-[0.55rem] tracking-[0.24em] text-muted-foreground">
                      SUPERVISED
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <ul>
            {reasons.map(({ Icon, title, body }, i) => (
              <li key={title}>
                <Reveal from="right" delay={i * 80}>
                  <div className="group relative flex gap-6 border-b border-border/60 py-8 transition-colors hover:border-primary/60">
                    <span className="font-display text-3xl outline-text transition-all duration-300 group-hover:text-primary group-hover:[-webkit-text-stroke:0]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl transition-transform duration-300 group-hover:translate-x-2">
                        {title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {body}
                      </p>
                    </div>
                    <Icon className="h-7 w-7 shrink-0 text-primary opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ── Party carousel: swipeable ticket stubs ── */}
      <PartyCarousel />

      <Gallery />

      <Awards />

      <Testimonials />




      {/* ── Branches: two-way city marquee with photo chips ── */}
      <section className="pb-24">
        <div className="mx-auto max-w-[112rem] px-5 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-5xl leading-[0.92] md:text-7xl">
              Eight blast zones across <span className="text-blast">Gujarat</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 overflow-hidden pb-4 md:-mt-44 md:pt-44">
          {/* Mobile: swipeable snap row */}
          <div className="flex snap-x snap-mandatory overflow-x-auto pb-4 pt-52 md:hidden">
            {[...branchRowA, ...branchRowB].map((city) => (
              <div key={city} className="w-[80vw] max-w-sm snap-center shrink-0 px-2.5 first:pl-5 last:pr-5">
                <BranchCard
                  city={city}
                  variant="home"
                  activeCity={activeCity}
                  setActiveCity={setActiveCity}
                />
              </div>
            ))}
          </div>

          {/* Desktop: animated marquee */}
          <div
            className={`
              hidden marquee-track group/track hover:[animation-play-state:paused] md:flex
              ${activeCity ? "[animation-play-state:paused]" : ""}
            `}
          >
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0">
                {[...branchRowA, ...branchRowB].map((city) => (
                  <div key={`${dup}-${city}`} className="mx-2.5 w-72 shrink-0 lg:w-80">
                    <BranchCard
                      city={city}
                      variant="home"
                      activeCity={activeCity}
                      setActiveCity={setActiveCity}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>


        <div className="mt-12 flex justify-center">
          <Link to="/branches" className="btn-ghost-blast rounded-full">
            View all branches <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </section>

      {/* ── CTA: arcade cabinet ── */}
      <section className="mx-auto max-w-[112rem] px-5 md:px-10 pb-24">
        <Reveal from="scale">
          <div className="scanline conic-halo relative overflow-hidden rounded-[2.5rem] border border-primary/30">
            <div className="grid-floor absolute inset-0 opacity-60" />
            <div className="glass-strong relative flex flex-col items-center gap-6 px-6 py-16 text-center">
              <span className="pill glass text-primary">
                <Zap className="h-3.5 w-3.5" /> Insert coin
              </span>
              <h2 className="max-w-2xl font-display text-5xl leading-[0.9] md:text-7xl">
                Ready to <span className="shimmer-text">blast off?</span>
              </h2>
              <p className="max-w-md text-sm text-muted-foreground">
                Grab your passes online and skip the counter queue at any FunBlast branch.
              </p>
              <Link to="/contact" className="btn-blast rounded-full px-7 py-3.5">
                Book Tickets <Ticket className="h-4 w-4" />
              </Link>

            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}

