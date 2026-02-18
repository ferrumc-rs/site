"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalCommand } from "@/components/ui/terminal-command";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video — lava pours in from beyond top-right edge */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none max-md:opacity-15"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 35%), linear-gradient(to bottom, black 65%, transparent)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 35%), linear-gradient(to bottom, black 65%, transparent)",
          WebkitMaskComposite: "source-in",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute -top-[25vh] right-[-30vw] h-[140vh] w-auto"
        >
          <source src="/ferrumc-background.webm" type="video/webm" />
        </video>
      </div>

      {/* Top gradient — bridges navbar into video, hides alpha gap */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-neutral-950 from-30% to-neutral-950/0 z-[1] pointer-events-none" />

      {/* Content — single fade-in, no stagger */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full"
      >
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-stone-600" />
            <span className="text-sm font-medium tracking-wider text-stone-500 uppercase">
              Experimental &middot; Open Source &middot; MIT
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            Minecraft Servers,
            <br />
            <span className="bg-gradient-to-r from-ferrum to-ferrum-amber bg-clip-text text-transparent">
              Forged in Rust.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-neutral-400 max-w-xl leading-relaxed">
            A fully multi-threaded Minecraft server that runs circles around
            Java. Drop-in replacement&mdash;no client mods required.
          </p>

          {/* Install command */}
          <div className="mt-10">
            <TerminalCommand className="max-w-xl" />
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
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
