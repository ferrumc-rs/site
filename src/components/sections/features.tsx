"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Gauge, ShieldCheck, Layers, Plug } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Parallel Engine",
    description:
      "Fully multi-threaded architecture with thread-safe design. Every core on your machine works for you.",
  },
  {
    icon: Globe,
    title: "World Streaming",
    description:
      "Lightning-fast chunk loading that keeps up with even the fastest elytra flights.",
  },
  {
    icon: Gauge,
    title: "Lean & Efficient",
    description:
      "A fraction of the memory footprint of Java servers. More headroom for plugins, less overhead.",
  },
  {
    icon: ShieldCheck,
    title: "Vanilla Compatible",
    description:
      "Works with standard Minecraft clients out of the box. No mods, no fuss—just connect and play.",
  },
  {
    icon: Layers,
    title: "ECS Architecture",
    description:
      "Built on a modern Entity Component System for maximum flexibility and raw performance.",
  },
  {
    icon: Plug,
    title: "Plugin System",
    description:
      "Extensive API for customization. Extend and modify server behavior however you need.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-wider text-ferrum uppercase">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Everything you need,{" "}
            <span className="text-neutral-500">nothing you don&apos;t.</span>
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl border border-white/5 bg-neutral-950/50 p-6 hover:border-ferrum/20 transition-colors duration-300"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-ferrum/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-ferrum/10 text-ferrum mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
