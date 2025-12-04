'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="h-16">
      <div className="mx-auto max-w-[1100px] px-5 h-full grid grid-cols-[auto_1fr_auto] items-center gap-4 relative">
        {/* Logo and brand */}
        <Link href="/" className="flex items-center gap-1 md:gap-2">
          <Image
            src="/images/logo.png"
            alt="FerrumC"
            width={36}
            height={36}
            className="h-9 w-9 rounded bg-transparent border border-white/[0.08] mix-blend-lighten"
          />
          <span className="text-sm font-bold">FerrumC</span>
          <span className="inline-flex items-center rounded-full bg-orange-600/90 px-2 py-[2px] text-[10px] uppercase tracking-wide leading-none shadow-sm ml-1">
            experimental
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex justify-start gap-3 ml-2 text-sm text-neutral-400">
          <a href="/features" className="hover:text-white transition-colors">
            Features
          </a>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link
            href="https://docs.ferrumc.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex gap-2"
          >
            Documentation
          </Link>
        </nav>

        {/* GitHub button (desktop) */}
        <a
          className="hidden sm:inline-flex items-center rounded-lg bg-white/10 px-4 py-2 font-semibold hover:bg-white/15 justify-self-end transition-colors"
          href="https://github.com/ferrumc-rs/ferrumc"
        >
          Contribute on GitHub
        </a>

        {/* Hamburger button (mobile) */}
        <button
          onClick={toggleMenu}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden justify-self-end inline-flex items-center p-2 rounded-md bg-white/10 hover:bg-white/15 transition-colors"
        >
          <span className="inline-block relative w-[22px] h-4">
            <span
              className={`absolute left-0 right-0 h-0.5 rounded-sm transition-all duration-200 ease-in-out bg-white/90 ${
                menuOpen ? 'top-[7px] rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-0.5 rounded-sm transition-all duration-200 ease-in-out bg-white/90 top-[7px] ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-0.5 rounded-sm transition-all duration-200 ease-in-out bg-white/90 ${
                menuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'
              }`}
            />
          </span>
        </button>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full mt-2 px-5 z-40 transition-all duration-[180ms] ease-in-out motion-reduce:transition-none ${
            menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur shadow-2xl p-3">
            <Link
              href="/features"
              className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="https://docs.ferrumc.com/"
              className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Documentation
            </Link>
            <div className="h-px my-2 bg-white/10" />
            <Link
              href="https://github.com/ferrumc-rs/ferrumc"
              className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
