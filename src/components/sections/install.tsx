"use client";

import { motion } from "framer-motion";
import { Copy, Check, Terminal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const INSTALL_CMD = "curl -fsSL https://ferrumc.com/install.sh | sh";

export function Install() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-32">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ferrum/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-wider text-ferrum uppercase">
            Get Started
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            One command. That&apos;s it.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md mx-auto">
            Install FerrumC and start your server in seconds. No configuration
            required&mdash;it just works.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          {/* Terminal box */}
          <div className="relative group mx-auto max-w-xl">
            {/* Glow behind */}
            <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-ferrum/30 via-ferrum-amber/30 to-ferrum/30 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-xl border border-white/10 bg-neutral-950 overflow-hidden">
              {/* Terminal header bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <div className="flex items-center gap-1.5 ml-2 text-neutral-600 text-xs">
                  <Terminal className="w-3 h-3" />
                  <span>terminal</span>
                </div>
              </div>

              {/* Command line */}
              <div className="flex items-center gap-3 px-4 py-4">
                <span className="text-ferrum select-none font-mono text-sm">
                  $
                </span>
                <code className="font-mono text-sm text-neutral-300 flex-1 text-left overflow-x-auto whitespace-nowrap">
                  {INSTALL_CMD}
                </code>
                <button
                  onClick={handleCopy}
                  className="shrink-0 p-2 rounded-md hover:bg-white/5 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
