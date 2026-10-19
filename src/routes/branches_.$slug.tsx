import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Instagram, MapPin, Phone, Youtube } from "lucide-react";

import { BRANCH_DETAILS } from "@/components/BranchDetails";
import { BranchMap } from "@/components/BranchMap";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { photos } from "@/data/photos";
import { branchCities, gamesForBranch } from "@/data/site";

// Placeholder hero video until the branch's own 16:9 video is supplied.
const HERO_VIDEO = "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4";

export const branchSlug = (city: string) => city.toLowerCase().replace(/\s+/g, "-");

export const Route = createFileRoute("/branches_/$slug")({
  loader: ({ params }) => {
    const city = branchCities.find((c) => branchSlug(c) === params.slug);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Branch not found | FunBlast" }, { name: "robots", content: "noindex" }] };
    const t = `FunBlast ${loaderData.city} | Games, Address & Contact`;
    const d = `Explore every game at FunBlast ${loaderData.city} — arcade, bowling, go karting, VR and more. Address, phone and live map.`;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-5 pt-40 text-center">
        <h1 className="font-display text-4xl">Branch not found</h1>
        <Link to="/branches" className="mt-6 inline-block text-primary underline">See all branches</Link>
      </div>
    </div>
  ),
  component: BranchPage,
});

function BranchPage() {
  const { city } = Route.useLoaderData();
  const info = BRANCH_DETAILS[city];
  const games = gamesForBranch(city);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      {/* Hero: 16:9 video */}
      <section className="relative pt-32 md:pt-36">
        <div className="mx-auto max-w-[112rem] px-5 md:px-10">
          <Link to="/branches" className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All branches
          </Link>
          <div className="neon-ring relative aspect-video w-full overflow-hidden rounded-3xl">
            <video
              src={HERO_VIDEO}
              poster={photos.arcadeGroup}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-12">
              <span className="pill glass text-primary">FunBlast Branch</span>
              <h1 className="mt-3 font-display text-4xl leading-[0.9] md:text-8xl">
                {city.replace("Ahmedabad ", "")} <span className="text-blast">{city.startsWith("Ahmedabad") ? "Ahmedabad" : "Blast Zone"}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Games at this branch */}
      <section className="mx-auto max-w-[112rem] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <span className="pill glass text-primary">Games at {city}</span>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-6xl">
            {games.length} ways to <span className="text-blast">blast</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {games.map((a, i) => (
            <Reveal key={a.name} from="up" delay={i * 50}>
              <article className="neon-ring group relative aspect-[3/4] overflow-hidden rounded-3xl">
                <img src={a.img} alt={a.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute left-4 top-4 font-display text-3xl text-primary/80">{String(i + 1).padStart(2, "0")}</span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <a.Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-2 font-display text-xl">{a.name}</h3>
                  <p className="text-sm text-muted-foreground">{a.tag}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">{a.meta}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visit */}
      {info && (
        <section className="mx-auto grid max-w-[112rem] gap-8 px-5 pb-24 md:grid-cols-2 md:px-10">
          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-3xl">Visit us</h2>
            <p className="mt-4 flex gap-2 text-muted-foreground"><MapPin className="h-5 w-5 shrink-0 text-primary" />{info.address}</p>
            <a href={info.phoneHref} className="mt-3 flex gap-2 font-semibold hover:text-primary"><Phone className="h-5 w-5 text-primary" />{info.phone}</a>
            <h3 className="mt-8 font-display text-xl">Follow {city}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={info.instagram} target="_blank" rel="noreferrer" className="pill glass inline-flex items-center gap-2 transition-colors hover:text-primary"><Instagram className="h-4 w-4 text-primary" />Instagram</a>
              <a href={info.youtube} target="_blank" rel="noreferrer" className="pill glass inline-flex items-center gap-2 transition-colors hover:text-primary"><Youtube className="h-4 w-4 text-primary" />YouTube</a>
              <a href={info.maps} target="_blank" rel="noreferrer" className="pill glass inline-flex items-center gap-2 transition-colors hover:text-primary"><MapPin className="h-4 w-4 text-primary" />Google Maps</a>
            </div>
          </div>
          <div className="h-80"><BranchMap city={city} /></div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
