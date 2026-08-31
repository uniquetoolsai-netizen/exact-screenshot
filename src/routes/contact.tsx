import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { BRANCH_DETAILS } from "@/components/BranchDetails";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FunBlast | Book Tickets & Party Enquiries" },
      {
        name: "description",
        content:
          "Call, email or visit FunBlast. Branch-wise phone numbers, addresses and social links for all eight Gujarat locations.",
      },
      { property: "og:title", content: "Contact FunBlast Gaming Zone" },
      {
        property: "og:description",
        content: "Branch phone numbers, addresses and party enquiry details for FunBlast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const iconLink =
  "flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground";

function ContactPage() {
  const branches = Object.entries(BRANCH_DETAILS);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Say hello, plan a"
        accent="blast"
        body="Reach the branch nearest to you for bookings, party enquiries and group offers."
      />

      <section className="mx-auto max-w-[112rem] px-5 pb-16 md:px-10">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="glass rounded-3xl p-6">
            <Phone className="h-5 w-5 text-primary" />
            <h2 className="mt-3 font-display text-xl">Call us</h2>
            <a href="tel:+916358055050" className="mt-1 block text-sm text-muted-foreground hover:text-primary">
              +91 63580 55050
            </a>
          </div>
          <div className="glass rounded-3xl p-6">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="mt-3 font-display text-xl">Email</h2>
            <a
              href="mailto:funblast2007@gmail.com"
              className="mt-1 block text-sm text-muted-foreground hover:text-primary"
            >
              funblast2007@gmail.com
            </a>
          </div>
          <div className="glass rounded-3xl p-6">
            <MapPin className="h-5 w-5 text-primary" />
            <h2 className="mt-3 font-display text-xl">Head office</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              SBR Complex, SG Highway, Ahmedabad, Gujarat
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[112rem] px-5 pb-24 md:px-10">
        <h2 className="font-display text-4xl leading-[0.92] md:text-5xl">
          Branch <span className="text-blast">contacts</span>
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map(([city, info], i) => (
            <Reveal key={city} from="up" delay={i * 50}>
              <div className="glass flex h-full flex-col rounded-3xl p-5">
                <h3 className="font-display text-lg text-primary">{city}</h3>
                <p className="mt-2 flex flex-1 items-start gap-1.5 text-xs leading-snug text-muted-foreground">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {info.address}
                </p>
                <a
                  href={info.phoneHref}
                  className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  {info.phone}
                </a>
                <div className="mt-4 flex items-center gap-2">
                  <a href={info.instagram} target="_blank" rel="noreferrer" aria-label={`${city} Instagram`} className={iconLink}>
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href={info.youtube} target="_blank" rel="noreferrer" aria-label={`${city} YouTube`} className={iconLink}>
                    <Youtube className="h-4 w-4" />
                  </a>
                  <a href={info.maps} target="_blank" rel="noreferrer" aria-label={`${city} on Google Maps`} className={iconLink}>
                    <MapPin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
