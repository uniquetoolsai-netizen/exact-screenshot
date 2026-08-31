import { createFileRoute } from "@tanstack/react-router";

import { Awards } from "@/components/Awards";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Photos From FunBlast Gaming Zones" },
      {
        name: "description",
        content:
          "See FunBlast in action — go karting, VR arena, bowling, trampoline park, snow park and kids zone photos from our Gujarat branches.",
      },
      { property: "og:title", content: "FunBlast Gallery" },
      {
        property: "og:description",
        content: "Snapshots from the loud side of Gujarat's biggest family entertainment zones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Gallery"
        title="Snapshots from the"
        accent="loud side"
        body="Real moments from real blast days across all eight FunBlast branches."
      />
      <Gallery />
      <Awards />
      <SiteFooter />
    </div>
  );
}
