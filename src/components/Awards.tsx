import { Award, Crown, Medal, Sparkles, Star, Trophy } from "lucide-react";

import { Counter, Reveal } from "@/components/Reveal";

const awards = [
  { Icon: Trophy, title: "Best Family Entertainment Zone", year: "2025", body: "Gujarat Leisure Awards" },
  { Icon: Medal, title: "Safest Play Venue", year: "2024", body: "State Tourism Board" },
  { Icon: Crown, title: "Guest Choice — Top Rated", year: "2024", body: "12,400+ verified reviews" },
  { Icon: Award, title: "Fastest Growing FEC Chain", year: "2023", body: "West India Retail Summit" },
  { Icon: Star, title: "Excellence in Kids Safety", year: "2023", body: "Playground Safety Council" },
];

export function Awards() {
  return (
    <section id="awards" className="relative overflow-hidden pb-24">
      <div className="grid-floor absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-[112rem] items-center gap-14 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal from="left">
            <span className="pill glass text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Recognition
            </span>
            <h2 className="mt-4 font-display text-5xl leading-[0.92] md:text-6xl">
              Trophies on the <span className="text-blast">shelf</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Judged on safety, service and sheer noise levels — five wins and counting.
            </p>
          </Reveal>

          <Reveal from="scale" delay={140}>
            <div className="conic-halo relative mt-10 h-48 w-48">
              <div className="glass-strong flex h-full w-full flex-col items-center justify-center rounded-full text-center">
                <span className="font-display text-5xl text-primary">
                  <Counter to={5} suffix="+" />
                </span>
                <span className="mt-1 font-sans text-[0.55rem] tracking-[0.26em] text-muted-foreground">
                  AWARDS WON
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <ol className="relative border-l border-border/60 pl-6 md:pl-10">
          {awards.map(({ Icon, title, year, body }, i) => (
            <li key={title}>
              <Reveal from="right" delay={i * 80}>
                <div className="group relative py-6">
                  <span className="absolute top-8 -left-[2.05rem] flex h-8 w-8 items-center justify-center rounded-full bg-primary md:-left-[3.3rem]">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <div className="glass rounded-3xl px-6 py-5 transition-transform duration-300 group-hover:translate-x-2">
                    <p className="font-sans text-[0.6rem] tracking-[0.26em] text-primary uppercase">
                      {year}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight md:text-3xl">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
