"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Download } from "lucide-react";
import { toast } from "sonner";

type Platform = "unix" | "windows";

const COMMANDS: Record<Platform, { prompt: string; cmd: string }> = {
  unix: { prompt: "$", cmd: "curl -fsSL https://ferrumc.com/install.sh | sh" },
  windows: {
    prompt: ">",
    cmd: "irm https://ferrumc.com/install.ps1 | iex",
  },
};

const PLATFORM_LABELS: Record<Platform, string> = {
  unix: "Linux / macOS",
  windows: "Windows",
};

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unix";
  return navigator.userAgent.includes("Win") ? "windows" : "unix";
}

export function TerminalCommand({ className }: { className?: string }) {
  const [platform, setPlatform] = useState<Platform>("unix");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const { prompt, cmd } = COMMANDS[platform];
  const otherPlatform = platform === "unix" ? "windows" : "unix";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const togglePlatform = () => {
    setPlatform((p) => (p === "unix" ? "windows" : "unix"));
    setCopied(false);
  };

  return (
    <div className={className}>
      {/* Terminal box */}
      <div className="relative group inline-flex w-full">
        <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-ferrum/20 via-ferrum-amber/20 to-ferrum/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
        <div className="relative flex items-center gap-3 rounded-lg border border-white/10 bg-neutral-950 px-4 py-3 w-full">
          <span className="text-ferrum select-none font-mono text-sm">
            {prompt}
          </span>
          <code className="font-mono text-sm text-neutral-300 flex-1 overflow-x-auto whitespace-nowrap scrollbar-none">
            {cmd}
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

      {/* Subtext */}
      <div className="flex items-center justify-between mt-3 px-1 text-xs text-neutral-500">
        <span>
          Creates a server directory and downloads the latest binary.
        </span>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <button
            onClick={togglePlatform}
            className="hover:text-neutral-300 transition-colors cursor-pointer"
          >
            {PLATFORM_LABELS[otherPlatform]}
          </button>
          <span className="text-neutral-700">|</span>
          <a
            href="https://github.com/ferrumc-rs/ferrumc/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-neutral-300 transition-colors"
          >
            <Download className="w-3 h-3" />
            .zip
          </a>
        </div>
      </div>
    </div>
  );
}
