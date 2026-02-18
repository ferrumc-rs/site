"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Copy, Check, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
});

const INSTALL_CMD = "curl -fsSL https://ferrumc.com/install.sh | sh";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Orange ambient glow */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-ferrum/10 blur-[120px] pointer-events-none" />

      {/* 3D Scene — positioned right */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none max-lg:right-[-20%] max-lg:opacity-60 max-md:hidden">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-ferrum" />
            <span className="text-sm font-medium tracking-wider text-ferrum/80 uppercase">
              Experimental &middot; Open Source &middot; MIT
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
          >
            Minecraft Servers,
            <br />
            <span className="bg-gradient-to-r from-ferrum to-ferrum-amber bg-clip-text text-transparent">
              Forged in Rust.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg text-neutral-400 max-w-xl leading-relaxed"
          >
            FerrumC is a fully multi-threaded Minecraft server implementation
            that runs circles around Java. A drop-in replacement&mdash;no client
            mods required.
          </motion.p>

          {/* Install command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8"
          >
            <div className="relative group inline-flex w-full max-w-xl">
              {/* Hover glow */}
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-ferrum/30 via-ferrum-amber/30 to-ferrum/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              <div className="relative flex items-center gap-3 rounded-lg border border-white/10 bg-neutral-950 px-4 py-3 w-full">
                <span className="text-ferrum select-none font-mono text-sm">
                  $
                </span>
                <code className="font-mono text-sm text-neutral-300 flex-1 overflow-x-auto whitespace-nowrap scrollbar-none">
                  {INSTALL_CMD}
                </code>
                <button
                  onClick={handleCopy}
                  className="shrink-0 p-1.5 rounded-md hover:bg-white/5 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-4"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
