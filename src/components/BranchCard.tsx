import { MapPin } from "lucide-react";
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { createPortal } from "react-dom";

import { BranchDetails } from "./BranchDetails";
import { BranchMap } from "./BranchMap";
import { photos } from "@/data/photos";

type Variant = "home" | "page";

interface BranchCardProps {
  city: string;
  variant: Variant;
  activeCity: string | null;
  setActiveCity: Dispatch<SetStateAction<string | null>>;
  instanceId?: string;
}

export function BranchCard({
  city,
  variant,
  activeCity,
  setActiveCity,
  instanceId,
}: BranchCardProps) {
  const key = instanceId ?? city;
  const isOpen = activeCity === key;
  const cardRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [position, setPosition] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const open = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveCity(key);
  };
  // Only clear if this card is still the active one, so a stale timer from a
  // previously hovered card can't close the card the cursor is on now.
  const close = () => setActiveCity((current) => (current === key ? null : current));
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(close, 180);
  };
  const toggle = () => setActiveCity(isOpen ? null : key);

  const isHome = variant === "home";

  useEffect(() => {
    if (!isOpen) {
      setPosition(null);
      return;
    }
    let frame = 0;
    const update = () => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect) {
        const width = Math.min(420, window.innerWidth - 32);
        const height = Math.min(320, window.innerHeight - 180);
        const left = Math.max(16, Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - 16));
        const above = rect.top - height - 16;
        const top = above >= 128 ? above : Math.max(128, Math.min(rect.bottom + 16, window.innerHeight - height - 16));
        const visible = rect.right > 24 && rect.left < window.innerWidth - 24 && rect.bottom > 128 && rect.top < window.innerHeight;
        setPosition((previous) => {
          if (!visible) return null;
          if (previous?.left === left && previous.top === top && previous.width === width && previous.height === height) return previous;
          return { left, top, width, height };
        });
      }
      frame = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative shrink-0 cursor-pointer focus:outline-none"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
        if (event.key === "Escape") close();
      }}
      role="button"
      tabIndex={0}
      aria-label={`${city} branch`}
      aria-pressed={isOpen}
    >
      {isOpen && position && createPortal(
        <div
          className="fixed z-[80] animate-in fade-in zoom-in-95 duration-200 motion-reduce:animate-none"
          style={position}
          onMouseEnter={open}
          onMouseLeave={scheduleClose}
          onClick={(event) => event.stopPropagation()}
          data-branch-map-popup={city}
        >
          <BranchMap city={city} />
        </div>,
        document.body,
      )}

      <article className="neon-ring relative aspect-square w-full overflow-hidden rounded-3xl">
        <img
          src={photos.arcadeGroup}
          alt="Visitors enjoying FunBlast arcade games"
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
