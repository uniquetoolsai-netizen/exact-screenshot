import { MapPin } from "lucide-react";

import { BranchDetails } from "./BranchDetails";
import { BranchMap } from "./BranchMap";
import branchImg from "@/assets/branch.jpg";

type Variant = "home" | "page";

interface BranchCardProps {
  city: string;
  variant: Variant;
  activeCity: string | null;
  setActiveCity: (city: string | null) => void;
}

export function BranchCard({
  city,
  variant,
  activeCity,
  setActiveCity,
}: BranchCardProps) {
  const isOpen = activeCity === city;
  const open = () => setActiveCity(city);
  const close = () => setActiveCity(null);
  const toggle = () => setActiveCity(isOpen ? null : city);

  const isHome = variant === "home";

  return (
    <div
      className="group relative shrink-0 cursor-pointer focus:outline-none"
      onMouseEnter={open}
      onMouseLeave={close}
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-label={`${city} branch`}
      aria-pressed={isOpen}
    >
      {/* Real Google Map pops up above the card (hover on desktop, tap on mobile) */}
      <div
        className={`
          pointer-events-none absolute bottom-[calc(100%+0.75rem)] left-1/2 z-40
          h-44 w-[min(20rem,calc(100vw-2.5rem))] md:h-48 md:w-[min(22rem,calc(100vw-2.5rem))]
          -translate-x-1/2 transition-all duration-300
          ${isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"}
        `}
      >
        <BranchMap city={city} />
      </div>

      <article className="neon-ring relative aspect-square w-full overflow-hidden rounded-3xl">
        <img
          src={branchImg}
          alt={`FunBlast branch in ${city}`}
          loading="lazy"
          width={800}
          height={600}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
        <div className="relative flex h-full items-end justify-between p-4 md:p-5">
          <h2 className="max-w-[75%] font-display text-xl leading-tight">{city}</h2>
          <MapPin className="h-4 w-4 text-primary md:h-5 md:w-5" />
        </div>
      </article>

      {/* Details overlay — shown on hover (desktop) or tap (mobile) */}
      <div
        className={`
          absolute z-30 transition-all duration-300
          ${isHome ? "inset-0 md:-inset-4" : "inset-3"}
          ${
            isOpen
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <BranchDetails city={city} onClose={close} />
      </div>
    </div>
  );
}
