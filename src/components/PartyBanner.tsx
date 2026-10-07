import { ArrowRight, Star } from "lucide-react";

import { BranchCallDialog } from "@/components/BranchCallDialog";
import { Reveal } from "@/components/Reveal";

type PartyBannerProps = {
  badge: string;
  titleTop: string;
  titleAccent: string;
  perks: string[];
  price: string;
  priceNote: string;
  cta: string;
  img: string;
  alt: string;
};

export function PartyBanner({
  badge,
  titleTop,
  titleAccent,
  perks,
  price,
  priceNote,
  cta,
  img,
  alt,
}: PartyBannerProps) {
  return (
    <Reveal from="scale">
      <div className="ticket relative grid overflow-hidden rounded-[2rem] border border-primary/30 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative p-8 md:p-14">
          <div className="absolute inset-0 card-surface" />
          <div className="relative">
            <span className="pill blast-bar text-secondary-foreground">{badge}</span>
            <h2 className="mt-5 font-display text-4xl leading-[0.88] md:text-6xl">
              {titleTop}
              <span className="shimmer-text block">{titleAccent}</span>
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {perks.map((item, i) => (
                <li
                  key={item}
                  className="glass flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-foreground/90"
                  style={{ animation: `var(--animate-rise)`, animationDelay: `${i * 70}ms` }}
                >
                  <Star className="h-3.5 w-3.5 shrink-0 fill-current text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <BranchCallDialog
              title={cta}
              trigger={
                <button type="button" className="btn-red mt-9 rounded-full px-6 py-3">
                  {cta} <ArrowRight className="h-4 w-4" />
                </button>
              }
            />
          </div>
        </div>

        <div className="relative min-h-[18rem]">
          <span className="perforate absolute top-6 bottom-6 left-0 z-10 hidden lg:block" />
          <img
            src={img}
            alt={alt}
            loading="lazy"
            width={1200}
            height={800}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          <div className="glass absolute bottom-6 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-3 text-center lg:left-auto lg:right-6 lg:translate-x-0">
            <p className="font-display text-2xl text-primary">{price}</p>
            <p className="font-sans text-[0.55rem] tracking-[0.22em] text-muted-foreground uppercase">
              {priceNote}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
