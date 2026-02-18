"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function useCountUp(target: number, duration: number, isActive: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [target, duration, isActive]);

  return value;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 4,
    suffix: "\u00d7",
    label: "Faster Chunk Loading",
    description:
      "Parallel world streaming leaves Java servers in the dust.",
  },
  {
    value: 73,
    suffix: "%",
    label: "Less Memory",
    description:
      "Lean Rust binaries vs bloated JVM heap allocations.",
  },
  {
    value: 15,
    suffix: "\u00d7",
    label: "Faster Startup",
    description:
      "No JVM warmup. Start serving players in under a second.",
  },
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(stat.value, 2, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group rounded-2xl border border-white/5 bg-neutral-950/50 p-8 text-center hover:border-ferrum/20 transition-colors duration-300"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-ferrum/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="text-6xl md:text-7xl font-display font-bold bg-gradient-to-br from-ferrum to-ferrum-amber bg-clip-text text-transparent leading-none">
          {count}
          {stat.suffix}
        </div>
        <div className="mt-4 text-lg font-semibold">{stat.label}</div>
        <div className="mt-2 text-sm text-neutral-500 leading-relaxed">
          {stat.description}
        </div>
      </div>
    </motion.div>
  );
}

export function Performance() {
  return (
    <section id="performance" className="relative py-32">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-wider text-ferrum uppercase">
            Performance
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Numbers don&apos;t lie.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg mx-auto">
            Early benchmarks show what happens when you replace a JVM with
            bare-metal Rust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xs text-neutral-600 text-center mt-8"
        >
          * Benchmarks are from internal testing and may vary. FerrumC is
          experimental software.
        </motion.p>
      </div>
    </section>
  );
}
