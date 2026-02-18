"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalCommand } from "@/components/ui/terminal-command";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background video — mobile: top-center with top-down fade; desktop: right-aligned with left fade */}
      <div
        className={[
          "absolute -inset-1 overflow-hidden pointer-events-none",
          // Mobile: visible atmosphere, fades toward bottom where text sits
          "opacity-40",
          "[mask-image:linear-gradient(to_bottom,black_40%,transparent_80%)]",
          "[-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_80%)]",
          // Desktop: right-aligned with left-to-right fade
          "md:opacity-100",
          "md:[mask-image:linear-gradient(to_right,transparent,black_35%)]",
          "md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_35%)]",
        ].join(" ")}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute -top-1 left-1/2 -translate-x-1/3 h-[110dvh] w-auto min-w-full object-cover md:left-auto md:translate-x-0 md:right-0 md:h-[150vh] md:min-w-0"
        >
          <source src="/ferrumc-background.webm" type="video/webm" />
        </video>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 w-full"
      >
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            Minecraft Servers,
            <br />
            <span className="bg-gradient-to-r from-ferrum to-ferrum-amber bg-clip-text text-transparent">
              Reforged.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
            Multi-threaded performance that uses every core on your machine.
            Compatible with vanilla clients, no mods needed.
          </p>

          {/* Install command */}
          <div className="mt-8 sm:mt-10">
            <TerminalCommand className="max-w-xl" />
          </div>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-ferrum hover:bg-ferrum/90 text-white font-semibold cursor-pointer"
              asChild
            >
              <a href="https://github.com/ferrumc-rs/ferrumc/releases">
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 text-neutral-300 hover:bg-white/5 cursor-pointer"
              asChild
            >
              <a
                href="https://github.com/ferrumc-rs/ferrumc"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
