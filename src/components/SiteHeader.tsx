import { branchPhoto } from "@/data/site";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, MapPin, Menu, PartyPopper, X } from "lucide-react";

import { BRANCH_DETAILS } from "@/components/BranchDetails";

import logoAsset from "@/assets/funblast-logo.webp";
import { branchCities, navLinks } from "@/data/site";

import { photos } from "@/data/photos";

const megaPhotos = [photos.arcadeGroup, photos.airHockey, photos.vrPlayers, photos.racing, photos.kidsRide, photos.gamePrizes, photos.haunted, photos.vrRide];

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
                <div className="invisible absolute left-1/2 top-full z-50 w-[min(60rem,calc(100vw-3rem))] -translate-x-1/2 translate-y-3 pt-5 opacity-0 transition-all duration-300 group-hover/mega:visible group-hover/mega:translate-y-0 group-hover/mega:opacity-100 group-focus-within/mega:visible group-focus-within/mega:translate-y-0 group-focus-within/mega:opacity-100">
                  <div className="glass-strong neon-ring grid grid-cols-[15rem_1fr] gap-5 overflow-hidden rounded-3xl p-4 shadow-2xl">
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-5">
                      <img src={photos.partyGroup} alt="" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                      <span className="pill glass relative self-start text-primary">8 Zones</span>
                      <div className="relative">
                        <p className="font-display text-3xl leading-[0.9]">Pick your <span className="text-blast">blast zone</span></p>
                        <p className="mt-2 text-xs text-muted-foreground">Across Gujarat — find the one closest to you.</p>
                        <Link to="/branches" className="btn-blast mt-4 rounded-full text-xs">View all branches</Link>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {branchCities.map((city, i) => {
                        const short = city.replace("Ahmedabad ", "");
                        const isAmd = city.startsWith("Ahmedabad");
                        return (
                          <Link
                            key={city}
                            to="/branches/$slug"
                            params={{ slug: slugOf(city) }}
                            className="group/card relative aspect-[4/5] overflow-hidden rounded-2xl border border-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                          >
                            <img src={branchPhoto(city)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-500 group-hover/card:scale-110 group-hover/card:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                            <span className="absolute right-2 top-2 font-display text-lg text-primary/80">{String(i + 1).padStart(2, "0")}</span>
                            <div className="absolute inset-x-0 bottom-0 p-3">
                              {isAmd && <p className="text-[0.6rem] uppercase tracking-[0.2em] text-primary">Ahmedabad</p>}
                              <p className="font-display text-base leading-tight">{short}</p>
                              <p className="mt-1 flex max-h-0 items-center gap-1 overflow-hidden text-[0.65rem] text-muted-foreground transition-all duration-300 group-hover/card:max-h-10">
                                <MapPin className="h-3 w-3 shrink-0 text-primary" /> {BRANCH_DETAILS[city]?.phone}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
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

        <Link to="/packages" className="btn-blast group relative hidden rounded-full lg:inline-flex">
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40 motion-reduce:animate-none" />
          <PartyPopper className="h-4 w-4 transition-transform group-hover:-rotate-12 group-hover:scale-125" /> Plan a Party
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
              <PartyPopper className="h-4 w-4" /> Plan a Party
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
