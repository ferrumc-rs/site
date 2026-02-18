"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalCommand } from "@/components/ui/terminal-command";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video — portrait lava stream, right-aligned */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none max-md:opacity-15"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 35%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 35%)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute top-0 right-0 h-[150vh] w-auto"
        >
          <source src="/ferrumc-background.webm" type="video/webm" />
        </video>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full"
      >
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            Minecraft Servers,
            <br />
            <span className="bg-gradient-to-r from-ferrum to-ferrum-amber bg-clip-text text-transparent">
              Reforged.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-neutral-300 max-w-xl leading-relaxed">
            Multi-threaded performance that uses every core on your machine.
            Compatible with vanilla clients, no mods needed.
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
