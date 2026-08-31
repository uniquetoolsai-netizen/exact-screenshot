import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Ticket, X } from "lucide-react";

import logoAsset from "@/assets/funblast-logo.webp";
import { navLinks } from "@/data/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex min-w-0 items-center gap-3">
      <span className="shrink-0 rounded-2xl border border-foreground/25 bg-foreground/5 p-1.5 shadow-[0_0_22px_-6px_hsl(var(--foreground)/0.35)] backdrop-blur-sm transition-colors duration-300 group-hover:border-foreground/50">
        <img
          src={logoAsset}
          alt="FunBlast Gaming Zone logo"
          className={`w-auto transition-transform duration-300 group-hover:scale-105 ${
            compact ? "h-12" : "h-14 md:h-20"
          }`}
        />
      </span>
      <span className="hidden min-w-0 flex-col leading-none sm:flex">
        <span className="font-display text-lg tracking-wide text-foreground">GAMING ZONE</span>
        <span className="font-sans text-[0.55rem] tracking-[0.34em] text-muted-foreground">
          ONE-STOP FOR FUN
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 md:px-6 md:pt-5">
      <div className="glass-strong mx-auto grid max-w-[112rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-2.5 md:px-10 lg:flex lg:justify-between lg:gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              className="nav-link"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="btn-blast hidden rounded-full lg:inline-flex">
          Book Tickets <Ticket className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-foreground/25 bg-foreground/5 text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <div className="glass-strong absolute inset-x-3 top-3 rounded-2xl p-5">
            <div className="flex items-center justify-between gap-4">
              <Logo compact />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-foreground/25 bg-foreground/5 text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-5 flex flex-col">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-primary" }}
                  className="border-b border-foreground/10 py-3 font-display text-xl tracking-wide"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-blast mt-5 w-full justify-center rounded-full"
            >
              Book Tickets <Ticket className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
