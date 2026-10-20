import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Instagram, MapPin, Phone, X, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BranchMap } from "./BranchMap";

type BranchInfo = {
  address: string;
  phone: string;
  phoneHref: string;
  instagram: string;
  maps: string;
  youtube: string;
};

const YT = "https://youtube.com/@funblast-01f?si=KyjNtqdfW6uzzvzF";

export const BRANCH_DETAILS: Record<string, BranchInfo> = {
  "Ahmedabad SBR": {
    address: "SBR, Ahmedabad",
    phone: "95866 01007",
    phoneHref: "tel:+919586601007",
    instagram: "https://www.instagram.com/funblastindia/",
    maps: "https://share.google/niK8UpRf8GIUawCNk",
    youtube: YT,
  },
  "Ahmedabad SG Highway": {
    address: "SG Highway, Ahmedabad",
    phone: "78747 37000",
    phoneHref: "tel:+917874737000",
    instagram: "https://www.instagram.com/funblastindia/",
    maps: "https://share.google/05D0bWHJq1vFXptuS",
    youtube: YT,
  },
  "Ahmedabad Ranip": {
    address: "Arved Transcube Plaza, Ranip, Ahmedabad",
    phone: "94928 33000",
    phoneHref: "tel:+919492833000",
    instagram: "https://www.instagram.com/funblast_ranip/",
    maps: "https://share.google/zKlEg6de1u2bp2ktL",
    youtube: YT,
  },
  "Ahmedabad Nikol": {
    address: "Nr. Shayona Arise, Opp. Shiv Farm, Hanspura, Ahmedabad",
    phone: "96196 71000",
    phoneHref: "tel:+919619671000",
    instagram: "https://www.instagram.com/funblast_nikol/",
    maps: "https://share.google/mKxKFcIiMQbo8sm2Z",
    youtube: YT,
  },
  Vadodara: {
    address: "Rajmahal Road, Vadodara (Baroda)",
    phone: "70690 97000",
    phoneHref: "tel:+917069097000",
    instagram: "https://www.instagram.com/funblast_baroda/",
    maps: "https://share.google/MxSwFZyybPG7i9Wjf",
    youtube: YT,
  },
  Gandhidham: {
    address: "Near Om Multiplex Cinema, Rambag Road, Gandhidham",
    phone: "96234 15000",
    phoneHref: "tel:+919623415000",
    instagram: "https://www.instagram.com/funblast_gandhidham/",
    maps: "https://share.google/oLN7jFp32FAZGAIbX",
    youtube: YT,
  },
  Rajkot: {
    address: "Kalavad Road, B/H Matuki Restaurant, Rajkot",
    phone: "99791 73000",
    phoneHref: "tel:+919979173000",
    instagram: "https://www.instagram.com/funblastrajkot/",
    maps: "https://share.google/99p7pQ2dF8MbUGjM2",
    youtube: YT,
  },
  Mehsana: {
    address: "Radhanpur Rd, nr. Signature Mall, nr. D-Mart, Mehsana 384005",
    phone: "90999 17000",
    phoneHref: "tel:+919099917000",
    instagram: "https://www.instagram.com/funblast_mehsana/?hl=en",
    maps: "https://share.google/yEfHokEfUEDVWVvin",
    youtube: YT,
  },
};

const iconLink =
  "flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground";

export function BranchDetails({
  city,
  onClose,
}: {
  city: string;
  onClose?: () => void;
}) {
  const info = BRANCH_DETAILS[city];
  const [mapOpen, setMapOpen] = useState(false);

  useEffect(() => {
    if (!mapOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMapOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mapOpen]);

  if (!info) return null;

  return (
    <>
      <div className="neon-ring flex h-full w-full flex-col justify-between rounded-2xl border border-primary/30 bg-background/95 p-4 shadow-2xl backdrop-blur-md">
        <div>
          <div className="flex items-start justify-between gap-2">
            <p className="font-display text-sm tracking-wide text-primary">{city}</p>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close branch details"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:scale-110"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
          <p className="mt-1.5 flex items-start gap-1.5 text-xs leading-snug text-muted-foreground">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            {info.address}
          </p>
          <a
            href={info.phoneHref}
            className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5 text-primary" />
            {info.phone}
          </a>
          <Link
            to="/branches/$slug"
            params={{ slug: city.toLowerCase().replace(/\s+/g, "-") }}
            className="mt-2 inline-block text-xs font-semibold text-primary underline-offset-2 hover:underline"
          >
            Explore branch →
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
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
          <button
            type="button"
            onClick={() => setMapOpen(true)}
            className="rounded-full bg-primary px-3.5 py-1.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:scale-105"
          >
            View map
          </button>
        </div>
      </div>

      {mapOpen &&
        createPortal(
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setMapOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Map of FunBlast ${city}`}
        >
          <div
            className="h-[70vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <BranchMap city={city} />
              <button
                type="button"
                onClick={() => setMapOpen(false)}
                aria-label="Close map"
                className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-transform hover:scale-110"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
