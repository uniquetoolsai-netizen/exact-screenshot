import { useState } from "react";
import { Camera, LayoutGrid } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { galleryPhotos } from "@/data/photos";
import { attractions } from "@/data/site";

const gamePhotos = [
  ...galleryPhotos,
  ...attractions
    .filter(({ name }) => !galleryPhotos.some(({ category }) => category === name))
    .map(({ name, img }) => ({ img, label: name, category: name })),
];

export function Gallery({ showHeading = true }: { showHeading?: boolean }) {
  const [selectedGame, setSelectedGame] = useState("All");
  const visiblePhotos = selectedGame === "All"
    ? gamePhotos
    : gamePhotos.filter(({ category }) => category === selectedGame);

  return (
    <section id="gallery" className="mx-auto max-w-[112rem] px-5 md:px-10 pb-24">
      {showHeading ? (
        <Reveal>
          <span className="pill glass text-primary">
            <Camera className="h-3.5 w-3.5" /> Gallery
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.92] md:text-7xl">
            Snapshots from the <span className="text-blast">loud side</span>
          </h2>
        </Reveal>
      ) : null}


      <div role="group" aria-label="Filter gallery by game" className="mt-8 flex flex-wrap gap-2 border-b border-border pb-6">
        <Button variant={selectedGame === "All" ? "default" : "outline"} aria-pressed={selectedGame === "All"} onClick={() => setSelectedGame("All")}>
          <LayoutGrid /> All
        </Button>
        {attractions.map(({ name, Icon }) => (
          <Button key={name} variant={selectedGame === name ? "default" : "outline"} aria-pressed={selectedGame === name} onClick={() => setSelectedGame(name)} className="h-auto min-h-9 max-w-full whitespace-normal text-left">
            <Icon /> {name}
          </Button>
        ))}
      </div>

      <div aria-live="polite" aria-atomic="true" className="mt-6 flex items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">{visiblePhotos.length} {visiblePhotos.length === 1 ? "photo" : "photos"}</span>
        <span className="text-sm text-muted-foreground">{selectedGame === "All" ? "All games" : selectedGame}</span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-label="FunBlast photo gallery">
        {visiblePhotos.map(({ img, label }) => (
          <figure key={label} className="min-w-0 overflow-hidden rounded-lg border border-border bg-card">
            <div className="aspect-[4/3]">
              <img src={img} alt={`${label} at FunBlast gaming zone`} loading="lazy" className="h-full w-full object-contain" />
            </div>
            <figcaption className="border-t border-border px-4 py-3 font-sans text-sm text-foreground uppercase">{label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
