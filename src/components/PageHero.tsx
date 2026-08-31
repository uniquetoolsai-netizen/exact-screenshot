import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  accent,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16">
      <div className="grid-floor absolute inset-0 opacity-50" />
      <div className="conic-halo absolute -top-16 -left-24 h-72 w-72 rounded-full" />
      <div className="relative mx-auto max-w-[112rem] px-5 md:px-10">
        <Reveal>
          <span className="pill glass text-primary">{eyebrow}</span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.9] md:text-7xl">
            {title} {accent ? <span className="text-blast">{accent}</span> : null}
          </h1>
          {body ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{body}</p>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
