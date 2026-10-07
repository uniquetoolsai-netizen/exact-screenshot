import { Camera } from "lucide-react";

import { Reveal } from "@/components/Reveal";

import { galleryPhotos } from "@/data/photos";

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[112rem] px-5 md:px-10 pb-24">
      <Reveal>
        <span className="pill glass text-primary">
          <Camera className="h-3.5 w-3.5" /> Gallery
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.92] md:text-7xl">
          Snapshots from the <span className="text-blast">loud side</span>
        </h2>
      </Reveal>

      <div className="gallery-slider mt-8 -mx-5 overflow-hidden md:-mx-10" aria-label="FunBlast photo gallery">
        {[galleryPhotos.slice(0, 8), galleryPhotos.slice(8)].map((row, rowIndex) => (
          <div key={rowIndex} className="gallery-row py-8">
            <div className={`gallery-track ${rowIndex === 1 ? "gallery-track-reverse" : ""}`}>
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 gap-6 pr-6" aria-hidden={copy === 1 ? true : undefined}>
                  {row.map(({ img, label }) => (
                    <figure
                      key={label}
                      tabIndex={copy === 0 ? 0 : -1}
                      className="gallery-photo relative w-64 shrink-0 rounded-lg border border-border bg-card transition-transform duration-300 hover:z-10 hover:scale-110 hover:border-primary focus:z-10 focus:scale-110 focus:border-primary focus:outline-none md:w-80"
                    >
                      <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                        <img
                          src={img}
                          alt={copy === 0 ? `${label} at FunBlast gaming zone` : ""}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <figcaption className="truncate px-4 py-3 font-sans text-xs text-foreground uppercase">
                        {label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
