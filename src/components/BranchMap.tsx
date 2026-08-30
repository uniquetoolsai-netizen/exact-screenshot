// Approximate lat/lng for each branch, used for the live map embed.
export const BRANCH_COORDS: Record<string, { lat: number; lng: number }> = {
  "Ahmedabad SBR": { lat: 23.0037, lng: 72.6352 },
  "Ahmedabad SG Highway": { lat: 23.0185, lng: 72.525 },
  "Ahmedabad Ranip": { lat: 23.0876, lng: 72.5712 },
  "Ahmedabad Nikol": { lat: 23.0512, lng: 72.6635 },
  Rajkot: { lat: 22.3039, lng: 70.8022 },
  Gandhidham: { lat: 23.0753, lng: 70.1337 },
  Vadodara: { lat: 22.3072, lng: 73.1812 },
  Mehsana: { lat: 23.588, lng: 72.3693 },
};

export function BranchMap({ city }: { city: string }) {
  const c = BRANCH_COORDS[city] ?? { lat: 22.97, lng: 71.65 };
  const src = `https://www.google.com/maps?q=${c.lat},${c.lng}&z=14&output=embed`;

  return (
    <div className="neon-ring w-72 overflow-hidden rounded-2xl border border-primary/30 bg-background/95 p-2 shadow-2xl backdrop-blur-md">
      <div className="animate-scale-in overflow-hidden rounded-xl">
        <iframe
          key={city}
          title={`Map of FunBlast ${city}`}
          src={src}
          loading="lazy"
          className="h-44 w-full border-0"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="flex items-center justify-between px-2 py-1.5 text-xs">
        <span className="font-display tracking-wide">{city}</span>
        <a
          href={`https://www.google.com/maps?q=${c.lat},${c.lng}`}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto text-primary underline-offset-2 hover:underline"
        >
          Directions
        </a>
      </p>
    </div>
  );
}
