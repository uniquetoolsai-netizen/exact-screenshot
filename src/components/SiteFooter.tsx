import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Logo } from "@/components/SiteHeader";
import { navLinks } from "@/data/site";

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-sm text-primary">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <Link
              to="/attractions"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto grid max-w-[112rem] gap-10 px-5 py-14 md:grid-cols-2 md:px-10 lg:grid-cols-5">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            India's leading entertainment destination with world-class games, thrilling rides
            and unforgettable experiences.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="https://www.instagram.com/funblastindia/"
                target="_blank"
                rel="noreferrer"
                aria-label="FunBlast social profile"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm text-primary">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FooterCol
          title="Attractions"
          items={["Bowling", "Go-Karting", "VR Games", "Trampoline", "Arcade", "Kids Zone"]}
        />
        <FooterCol title="Packages" items={["Birthday", "School", "Corporate", "Group"]} />

        <div>
          <h3 className="font-display text-sm text-primary">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" /> +91 63580 55050
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" /> funblast2007@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> SBR Complex, SG
              Highway, Ahmedabad, Gujarat
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-[112rem] flex-wrap items-center justify-between gap-3 px-5 py-6 font-sans text-xs tracking-[0.14em] text-muted-foreground uppercase md:px-10">
          <p>© 2026 FunBlast Gaming Zone</p>
          <p>Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
