import { Camera } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

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

      <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {galleryPhotos.map(({ img, label }, i) => (
          <Reveal key={label} from="scale" delay={i * 60} className="mb-4 break-inside-avoid">
            <TiltCard className="group relative w-full overflow-hidden rounded-3xl border border-border/60 bg-card">
              <img
                src={img}
                alt={`${label} at FunBlast gaming zone`}
                loading="lazy"
                className="block h-auto w-full transition-[filter] duration-700 group-hover:saturate-150"
              />
              <span className="block px-4 py-3 font-sans text-[0.62rem] text-foreground uppercase">
                {label}
              </span>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
