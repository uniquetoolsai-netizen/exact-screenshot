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

      <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-4 sm:auto-rows-[13rem] sm:grid-cols-4">
        {galleryPhotos.map(({ img, label, span }, i) => (
          <Reveal key={label} from="scale" delay={i * 60} className={`h-full ${span}`}>
            <TiltCard className="group relative h-full w-full overflow-hidden rounded-3xl border border-border/60">
              <img
                src={img}
                alt={`${label} at FunBlast gaming zone`}
                loading="lazy"
                width={800}
                height={800}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 font-sans text-[0.62rem] tracking-[0.24em] text-foreground uppercase">
                {label}
              </span>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
