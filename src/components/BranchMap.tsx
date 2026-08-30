type Point = { x: number; y: number };

// Stylised Gujarat silhouette (viewBox 0 0 100 100), lon 68.1–74.5 / lat 20.1–24.7
const GUJARAT_PATH =
  "M6 30 L14 20 L26 17 L38 20 L48 15 L58 12 L68 9 L76 12 L84 10 L92 16 L94 26 L88 33 L80 36 L78 45 L84 52 L88 62 L84 72 L76 80 L68 86 L60 90 L54 84 L52 74 L46 68 L38 70 L30 66 L26 58 L18 54 L12 46 L8 38 Z";

export const BRANCH_POINTS: Record<string, Point> = {
  "Ahmedabad SBR": { x: 70, y: 36.5 },
  "Ahmedabad SG Highway": { x: 67.6, y: 38.4 },
  "Ahmedabad Ranip": { x: 69.2, y: 34.2 },
  "Ahmedabad Nikol": { x: 72.4, y: 37.2 },
  Rajkot: { x: 42.2, y: 52.2 },
  Gandhidham: { x: 31.7, y: 35.2 },
  Vadodara: { x: 79.5, y: 52 },
  Mehsana: { x: 67, y: 23.9 },
};

export function BranchMap({ city }: { city: string }) {
  const p = BRANCH_POINTS[city] ?? { x: 60, y: 45 };

  return (
    <div className="neon-ring w-64 overflow-hidden rounded-2xl border border-primary/30 bg-background/95 p-3 shadow-2xl backdrop-blur-md">
      <svg viewBox="0 0 100 100" className="h-40 w-full">
        <defs>
          <linearGradient id="bm-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        <path
          d={GUJARAT_PATH}
          className="text-primary"
          fill="url(#bm-fill)"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: "bm-draw 1.1s ease-out forwards",
          }}
        />

        {Object.values(BRANCH_POINTS).map((o, i) => (
          <circle
            key={i}
            cx={o.x}
            cy={o.y}
            r="1.3"
            className="text-foreground"
            fill="currentColor"
            opacity="0.35"
          />
        ))}

        <circle
          cx={p.x}
          cy={p.y}
          r="3"
          className="text-blast"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          style={{ transformOrigin: `${p.x}px ${p.y}px`, animation: "bm-ping 1.6s ease-out infinite" }}
        />
        <circle cx={p.x} cy={p.y} r="2.2" className="text-blast" fill="currentColor" />
      </svg>

      <p className="mt-2 flex items-center justify-between px-1 text-xs">
        <span className="font-display tracking-wide">{city}</span>
        <span className="text-muted-foreground">Gujarat, IN</span>
      </p>
    </div>
  );
}
