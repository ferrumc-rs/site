"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

const INSTALL_CMD = "curl -fsSL https://ferrumc.com/install.sh | sh";

export function TerminalCommand({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group inline-flex w-full ${className ?? ""}`}>
      {/* Hover glow */}
      <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-ferrum/20 via-ferrum-amber/20 to-ferrum/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      <div className="relative flex items-center gap-3 rounded-lg border border-white/10 bg-neutral-950 px-4 py-3 w-full">
        <span className="text-ferrum select-none font-mono text-sm">$</span>
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
  );
}
