import Image from "next/image";
import Link from "next/link";
import { Download, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalCommand } from "@/components/ui/terminal-command";

const footerLinks = {
  Product: [
    {
      label: "Download",
      href: "https://github.com/ferrumc-rs/ferrumc/releases",
    },
    { label: "Documentation", href: "https://docs.ferrumc.com" },
    {
      label: "Changelog",
      href: "https://github.com/ferrumc-rs/ferrumc/releases",
    },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com/ferrumc-rs/ferrumc" },
    { label: "Discord", href: "https://discord.gg/qT5J8EMjwk" },
    {
      label: "Contributing",
      href: "https://github.com/ferrumc-rs/ferrumc/blob/master/CONTRIBUTING.md",
    },
  ],
  Resources: [
    { label: "Documentation", href: "https://docs.ferrumc.com" },
    {
      label: "License (MIT)",
      href: "https://github.com/ferrumc-rs/ferrumc/blob/master/LICENSE",
    },
  ],
};

export function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section id="install" className="relative py-28 sm:py-36 bg-[#0A0908] overflow-hidden">
        {/* Warm ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ferrum/[0.04] blur-[100px]" />
        </div>

        {/* Top divider */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ferrum/15 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="text-sm font-medium tracking-wider text-ferrum uppercase">
            Get Started
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-5">
            One command. That&apos;s it.
          </h2>

          <p className="text-neutral-400 max-w-md mx-auto mb-10">
            Install FerrumC and have a server running in seconds. Open source,
            MIT licensed, free forever.
          </p>

          {/* Terminal */}
          <div className="flex justify-center mb-10">
            <TerminalCommand className="max-w-xl" />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
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
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Community callout */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-500">
            <a
              href="https://discord.gg/qT5J8EMjwk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-neutral-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Join the Discord community
            </a>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <a
              href="https://github.com/ferrumc-rs/ferrumc/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-neutral-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              Contribute on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#060605]">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {/* Logo + tagline */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="FerrumC" width={32} height={32} />
                <span className="font-display font-bold text-lg tracking-tight">
                  FerrumC
                </span>
              </Link>
              <p className="mt-4 text-sm text-neutral-500 leading-relaxed max-w-xs">
                A high-performance Minecraft server implementation, written in
                Rust.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-neutral-300 mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <p className="text-xs text-neutral-600">
              &copy; 2026 FerrumC. All rights reserved.
            </p>
            <p className="text-xs text-neutral-600">Built with Rust</p>
          </div>
        </div>
      </footer>
    </>
  );
}
