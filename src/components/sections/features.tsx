"use client";

import { motion } from "framer-motion";

interface Detail {
  text: string;
  footnote?: boolean;
}

interface Pillar {
  title: string;
  description: string;
  details: Detail[];
}

const pillars: Pillar[] = [
  {
    title: "Parallel by Design",
    description:
      "Every core on your machine works in concert. The architecture is thread-safe from the ground up, not bolted on as an afterthought.",
    details: [
      { text: "Fully multi-threaded chunk loading and world streaming" },
      { text: "Lock-free data structures where it matters" },
      { text: "Scales linearly with available cores" },
    ],
  },
  {
    title: "Zero Friction",
    description:
      "Connect with any vanilla Minecraft client. Import your existing worlds. Install with a single command. No mods, no patches, no hoops.",
    details: [
      { text: "Standard Minecraft protocol compatibility" },
      { text: "Import existing world saves directly" },
      { text: "One-command install on Linux, macOS, and Windows" },
    ],
  },
  {
    title: "Built to Extend",
    description:
      "An Entity Component System at the core gives you a powerful, flexible foundation. Build what you want without fighting the server.",
    details: [
      { text: "Plugin system with a rich API surface", footnote: true },
      { text: "ECS architecture for maximum flexibility" },
      { text: "Modify and extend any server behavior", footnote: true },
    ],
  },
];

function PillarPanel({
  pillar,
  index,
}: {
  pillar: Pillar;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-xl overflow-hidden"
    >
      {/* Top accent gradient line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-ferrum via-ferrum-amber to-ferrum opacity-40" />

      <div className="bg-[#141210] border border-[#2a2520]/30 border-t-0 rounded-xl p-5 sm:p-8 md:p-10 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
          {/* Left: title + description */}
          <div className="lg:flex-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-ferrum to-ferrum-amber bg-clip-text text-transparent">
              {pillar.title}
            </h3>
            <p className="mt-4 text-neutral-300 leading-relaxed max-w-lg">
              {pillar.description}
            </p>
          </div>

          {/* Right: detail list */}
          <div className="lg:flex-1">
            <ul className="space-y-4">
              {pillar.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[7px] block h-2 w-2 shrink-0 rounded-full bg-ferrum/70" />
                  <span className="text-neutral-300 leading-relaxed">
                    {detail.text}
                    {detail.footnote && (
                      <span className="text-neutral-700"> *</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 md:py-36 bg-[#0A0908]">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ferrum/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-sm font-medium tracking-wider text-ferrum uppercase">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Everything you need,{" "}
            <span className="text-neutral-500">nothing you don&apos;t.</span>
          </h2>
        </motion.div>

        {/* Pillar panels */}
        <div className="space-y-6">
          {pillars.map((pillar, i) => (
            <PillarPanel key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Footnote */}
        <p className="text-xs text-neutral-600 mt-8">
          * The plugin system is currently in development and not yet generally
          available.
        </p>
      </div>
    </section>
  );
}
