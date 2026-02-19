"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu, X, Download, Heart } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Performance", href: "#performance" },
  { label: "Install", href: "#install" },
  { label: "Docs", href: "https://docs.ferrumc.com" },
  { label: "Discord", href: "https://discord.gg/qT5J8EMjwk" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-neutral-950/95 backdrop-blur-2xl border-b border-white/5"
          : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="FerrumC" width={28} height={28} />
          <span className="font-display font-bold text-lg tracking-tight">
            FerrumC
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://github.com/ferrumc-rs/ferrumc"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-white transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/sponsors/sweattypalms"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-pink-400 transition-colors duration-200"
          >
            <Heart className="w-5 h-5" />
          </Link>
          <Button
            size="sm"
            className="bg-ferrum hover:bg-ferrum/90 text-white font-medium cursor-pointer"
            asChild
          >
            <a href="https://github.com/ferrumc-rs/ferrumc/releases">
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-neutral-950/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-neutral-400 hover:text-white transition-colors"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <Link
                  href="https://github.com/ferrumc-rs/ferrumc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/sponsors/sweattypalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-pink-400 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                </Link>
                <Button
                  size="sm"
                  className="bg-ferrum hover:bg-ferrum/90 text-white cursor-pointer"
                  asChild
                >
                  <a href="https://github.com/ferrumc-rs/ferrumc/releases">
                    Download
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
