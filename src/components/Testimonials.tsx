import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

type Review = { name: string; city: string; text: string; tag: string };

const rowA: Review[] = [
  {
    name: "Nidhi Patel",
    city: "Ahmedabad",
    tag: "Birthday party",
    text: "Booked the birthday package and honestly did nothing all evening — host, food, games, decor, all handled. My son still talks about the go-karts.",
  },
  {
    name: "Rahul Mehta",
    city: "Rajkot",
    tag: "Go karting",
    text: "The track is genuinely fast and the marshals are strict about safety, which I loved. Came for one race, stayed for four.",
  },
  {
    name: "Foram Shah",
    city: "Vadodara",
    tag: "Kitty party",
    text: "Our kitty group has done this three months in a row now. Music, bowling, snacks — nobody wants to go back to a restaurant.",
  },
];

const rowB: Review[] = [
  {
    name: "Aakash Jain",
    city: "Gandhidham",
    tag: "Corporate day out",
    text: "Brought 40 people from the office. The trampoline park broke the ice in ten minutes flat — best team offsite we've done.",
  },
  {
    name: "Priya Desai",
    city: "Ahmedabad SG",
    tag: "VR arena",
    text: "Free-roam VR was the surprise of the night. Six of us in one mission, screaming. Staff reset it for us twice without fuss.",
  },
  {
    name: "Manav Trivedi",
    city: "Mehsana",
    tag: "Family visit",
    text: "Spotless, well-lit and every zone had someone supervising. With a 3-year-old along, that's the only review that matters.",
  },
];

function Card({ r }: { r: Review }) {
  return (
    <TiltCard className="glass mx-2.5 flex h-56 w-[21rem] shrink-0 flex-col justify-between rounded-3xl p-6 md:w-[24rem]">
      <div>
        <div className="flex items-center justify-between">
          <Quote className="h-6 w-6 text-primary" />
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-3 w-3 fill-current text-primary" />
            ))}
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
      </div>
      <div className="flex items-end justify-between border-t border-dashed border-primary/40 pt-3">
        <div>
          <p className="font-display text-lg leading-none">{r.name}</p>
          <p className="mt-1 font-sans text-[0.58rem] tracking-[0.22em] text-muted-foreground uppercase">
            {r.city}
          </p>
        </div>
        <span className="font-sans text-[0.55rem] tracking-[0.2em] text-primary uppercase">
          {r.tag}
        </span>
      </div>
    </TiltCard>
  );
}

function Row({ items, reverse = false }: { items: Review[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden py-2.5">
      <div className={reverse ? "marquee-track-rev" : "marquee-track"}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0">
            {items.map((r) => (
              <Card key={`${dup}-${r.name}`} r={r} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden pb-24">
      <div className="mx-auto max-w-[112rem] px-5 md:px-10">
        <Reveal>
          <span className="pill glass text-primary">
            <Star className="h-3.5 w-3.5 fill-current" /> 4.8 average rating
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.92] md:text-7xl">
            What the <span className="text-blast">loud crowd</span> says
          </h2>
        </Reveal>
      </div>

      <div className="mt-12">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
