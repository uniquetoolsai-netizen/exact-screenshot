import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, MapPin, Menu, Ticket, X } from "lucide-react";

import { BRANCH_DETAILS } from "@/components/BranchDetails";

import logoAsset from "@/assets/funblast-logo.webp";
import { branchCities, navLinks } from "@/data/site";

const slugOf = (city: string) => city.toLowerCase().replace(/\s+/g, "-");

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex min-w-0 items-center gap-3">
      <span className="shrink-0 rounded-2xl border-2 border-foreground bg-foreground/10 p-1.5 shadow-lg ring-4 ring-foreground/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-foreground/15 group-hover:ring-foreground/35">
        <img
          src={logoAsset}
          alt="FunBlast Gaming Zone logo"
          className={`w-auto transition-transform duration-300 group-hover:scale-105 ${
            compact ? "h-12" : "h-14 md:h-20"
          }`}
        />
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
          {navLinks.map(({ label, to }) =>
            to === "/branches" ? (
              <div key={to} className="group/mega relative">
                <Link to={to} activeProps={{ className: "text-primary" }} className="nav-link inline-flex items-center gap-1">
                  {label} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover/mega:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-[44rem] -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover/mega:visible group-hover/mega:opacity-100 group-focus-within/mega:visible group-focus-within/mega:opacity-100">
                  <div className="glass-strong rounded-2xl border border-primary/20 p-5 shadow-2xl">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="font-display text-sm tracking-wide text-primary">Our Branches</p>
                      <Link to="/branches" className="text-xs text-muted-foreground hover:text-primary">View all →</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {branchCities.map((city) => (
                        <Link
                          key={city}
                          to="/branches/$slug"
                          params={{ slug: slugOf(city) }}
                          activeProps={{ className: "bg-primary/15" }}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-foreground/10"
                        >
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>
                            <span className="block font-display text-sm tracking-wide">{city}</span>
                            <span className="block text-xs text-muted-foreground">{BRANCH_DETAILS[city]?.address}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                className="nav-link"
              >
                {label}
              </Link>
            ),
          )}
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
          <div className="glass-strong absolute inset-x-3 top-3 max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl p-5">
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
            <div className="mt-4">
              <p className="font-display text-sm tracking-wide text-primary">Our Branches</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {branchCities.map((city) => (
                  <Link
                    key={city}
                    to="/branches/$slug"
                    params={{ slug: slugOf(city) }}
                    onClick={() => setOpen(false)}
                    className="rounded-lg bg-foreground/5 px-3 py-2 text-sm"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>

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
