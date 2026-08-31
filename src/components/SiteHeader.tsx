import { Link } from "@tanstack/react-router";
import { Ticket } from "lucide-react";

import logoAsset from "@/assets/funblast-logo.webp";
import { navLinks } from "@/data/site";

export function Logo() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <img
        src={logoAsset}
        alt="FunBlast Gaming Zone logo"
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-105 md:h-14"
      />
      <span className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-lg tracking-wide text-foreground">GAMING ZONE</span>
        <span className="font-sans text-[0.55rem] tracking-[0.34em] text-muted-foreground">
          ONE-STOP FOR FUN
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 md:px-6 md:pt-5">
      <div className="glass-strong mx-auto flex max-w-[112rem] items-center justify-between gap-6 rounded-2xl px-5 py-2.5 md:px-10">
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
        <Link to="/contact" className="btn-blast rounded-full">
          Book Tickets <Ticket className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
