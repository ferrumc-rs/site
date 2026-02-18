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
      const eased = 1 - Math.pow(1 - progress, 3);
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
      "Multi-threaded world streaming delivers chunks to players significantly faster than single-threaded Java servers.",
  },
  {
    value: 73,
    suffix: "%",
    label: "Less Memory",
    description:
      "Rust's zero-cost abstractions and lack of garbage collection keep memory usage a fraction of JVM-based servers.",
  },
  {
    value: 15,
    suffix: "\u00d7",
    label: "Faster Startup",
    description:
      "No JVM warmup or class loading overhead. Native binaries start serving players in under a second.",
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
      className="relative group"
    >
      {/* Hover glow */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-ferrum/25 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      <div className="relative rounded-xl bg-[#141210] border border-[#2a2520]/30 p-6 sm:p-8 md:p-10 text-center overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-ferrum/30 to-transparent" />

        <div className="relative">
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-display font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent leading-none tracking-tight">
            {count}
            {stat.suffix}
          </div>
          <div className="mt-5 text-lg font-semibold text-white tracking-tight">
            {stat.label}
          </div>
          <div className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-xs mx-auto">
            {stat.description}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Performance() {
  return (
    <section id="performance" className="relative py-20 sm:py-28 md:py-36">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-sm font-medium tracking-wider text-ferrum uppercase">
            Performance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Numbers don&apos;t lie.
          </h2>
          <p className="mt-5 text-neutral-400 max-w-lg mx-auto text-lg">
            Early benchmarks show what happens when you replace a JVM with
            bare-metal Rust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xs text-neutral-600 text-center mt-10"
        >
          * Benchmarks are from internal testing and may vary. FerrumC is
          experimental software.
        </motion.p>
      </div>
    </section>
  );
}
