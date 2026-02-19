import { Construction } from "lucide-react";

export function DevBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-60">
      <div className="relative h-9 flex items-center justify-center gap-2 text-xs sm:text-sm bg-neutral-950/90 backdrop-blur-sm overflow-hidden">
        {/* Bottom gradient border */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ferrum/40 to-transparent" />

        <Construction className="w-3.5 h-3.5 text-ferrum-amber shrink-0" />
        <span className="text-neutral-300">
          <span className="text-ferrum-amber font-semibold">Alpha</span>
          {" · FerrumC is under active development and not production-ready."}
        </span>
      </div>
    </div>
  );
}
