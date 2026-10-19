import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PartyBanner } from "@/components/PartyBanner";
import { photos } from "@/data/photos";

const slides = [
  {
    key: "birthday",
    tab: "Birthday",
    badge: "Birthdays",
    titleTop: "Make every birthday",
    titleAccent: "a blast!",
    perks: [
      "Custom party packages",
      "Delicious food & cake",
      "Games & activities",
      "Decor, host & more",
    ],
    price: "₹499",
    priceNote: "per guest onwards",
    cta: "Contact Us For Packages",
    img: photos.partyGroup,
    alt: "Families and friends gathered at FunBlast",
  },
  {
    key: "kitty",
    tab: "Kitty",
    badge: "Kitty Parties",
    titleTop: "Turn catch-ups",
    titleAccent: "into a blast!",
    perks: [
      "Reserved lounge seating",
      "Snacks & beverages",
      "Games, music & photos",
      "Group game credits",
    ],
    price: "₹399",
    priceNote: "per guest onwards",
    cta: "Book A Kitty Party",
    img: photos.loungeGroup,
    alt: "Friends gathered in the FunBlast lounge",
  },
  {
    key: "corporate",
    tab: "Corporate",
    badge: "Corporate",
    titleTop: "Team outings that",
    titleAccent: "actually blast!",
    perks: [
      "Team-building challenges",
      "Catering & party hall",
      "Trampoline & karting slots",
      "Custom group pricing",
    ],
    price: "₹599",
    priceNote: "per guest onwards",
    cta: "Plan A Team Day",
    img: photos.friends,
    alt: "A group of visitors enjoying a FunBlast outing",
  },
];

export function PartyCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + slides.length) % slides.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
    setActive(next);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setActive(Math.round(track.scrollLeft / Math.max(track.clientWidth, 1)));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="packages" className="mx-auto max-w-[112rem] px-5 md:px-10 pb-24">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
        <div className="min-w-0">
          <span className="pill glass text-primary">Celebrations</span>
          <h2 className="mt-4 font-display text-4xl leading-[0.92] md:text-6xl">
            Exhilarating <span className="text-blast">parties</span>
          </h2>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Previous party"
            onClick={() => goTo(active - 1)}
            className="glass grid h-11 w-11 place-items-center rounded-full text-foreground transition-colors hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next party"
            onClick={() => goTo(active + 1)}
            className="glass grid h-11 w-11 place-items-center rounded-full text-foreground transition-colors hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => goTo(i)}
            className={`rounded-full px-4 py-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${
              i === active
                ? "bg-secondary text-secondary-foreground"
                : "glass text-muted-foreground hover:text-primary"
            }`}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div
        ref={trackRef}
        className="mt-8 flex snap-x snap-mandatory overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s) => (
          <div key={s.key} className="w-full shrink-0 snap-center">
            <PartyBanner {...s} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            aria-label={`Go to ${s.tab}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-secondary" : "w-2.5 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
