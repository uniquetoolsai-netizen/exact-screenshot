import type { ReactNode } from "react";
import { MapPin, Phone } from "lucide-react";

import { BRANCH_DETAILS } from "@/components/BranchDetails";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { branchCities } from "@/data/site";

export function BranchCallDialog({ trigger, title = "Call your nearest FunBlast" }: { trigger: ReactNode; title?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl tracking-wide">{title}</DialogTitle>
          <DialogDescription>Pick a branch and tap to call — our team will plan your party.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 sm:grid-cols-2">
          {branchCities.map((city) => {
            const info = BRANCH_DETAILS[city];
            if (!info) return null;
            return (
              <a
                key={city}
                href={info.phoneHref}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-base tracking-wide">{city}</span>
                  <span className="block font-semibold text-primary">{info.phone}</span>
                  <span className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 shrink-0" /> {info.address}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
