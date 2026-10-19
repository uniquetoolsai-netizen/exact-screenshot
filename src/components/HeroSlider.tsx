import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import party from "@/assets/hero-1-50-33.jpg.asset.json";
import school from "@/assets/hero-1-50-34.jpg.asset.json";
import branches from "@/assets/hero-2-36-02.jpg.asset.json";
import extra from "@/assets/hero-4.jpg.asset.json";

const slides = [
  { src: party.url, alt: "Host your next party at FunBlast — kitty, birthday and corporate parties" },
  { src: school.url, alt: "School outing at FunBlast — book your school's slot" },
  { src: branches.url, alt: "Gujarat's biggest gamezone chain — 8 branches across Gujarat" },
  { src: extra.url, alt: "FunBlast gaming zone" },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);

  return (
    <section
      className="relative pt-20 md:pt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative w-full">
        <div className="relative aspect-video w-full overflow-hidden bg-background">
          {slides.map((s, idx) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={1920}
              height={1080}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                idx === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="glass absolute top-1/2 left-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-primary md:left-4 md:h-12 md:w-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(1)}
            className="glass absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-primary md:right-4 md:h-12 md:w-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2 md:bottom-6">
          {slides.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
