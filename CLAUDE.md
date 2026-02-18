# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Landing page for [FerrumC](https://github.com/ferrumc-rs/ferrumc), a high-performance Minecraft server written in Rust. Single-page marketing site — not a web app.

## Commands

```bash
pnpm dev          # Dev server at localhost:3000
pnpm build        # Production build
pnpm lint         # ESLint (core-web-vitals + typescript)
pnpm dlx shadcn add <component>  # Add shadcn/ui components
```

## Tech Stack

- **Next.js 16** with App Router (single route: `src/app/page.tsx`)
- **Tailwind CSS v4** — no `tailwind.config`; all theme config lives in `src/app/globals.css` via `@theme inline`
- **shadcn/ui** (new-york style, Radix UI + Lucide icons)
- **Framer Motion** for scroll/entrance animations
- **React Three Fiber + drei** — 3D scene exists in `src/components/three/hero-scene.tsx` but is currently unused (replaced by looping video background)

## Architecture

```
src/
├── app/
│   ├── globals.css     # Tailwind v4 theme (brand colors, fonts, radii)
│   ├── layout.tsx      # Root layout: fonts, dark mode, Toaster
│   └── page.tsx        # Composes Navbar → Hero → Features → Performance → Footer
├── components/
│   ├── sections/       # Page sections (navbar, hero, features, performance, footer)
│   ├── ui/             # shadcn primitives + custom (terminal-command)
│   └── three/          # 3D scene (unused)
└── lib/
    └── utils.ts        # cn() helper
```

## Page Section Order

`Navbar → Hero → Features → Performance → CTA + Footer`

- **Hero**: Lava video background (right-aligned, mask-faded), headline + subtitle + terminal install command + CTAs
- **Features**: Three pillar panels (Parallel by Design, Zero Friction, Built to Extend) on warm `bg-[#0A0908]` background
- **Performance**: Animated count-up stat cards (4×, 73%, 15×) on default dark background
- **CTA + Footer**: Install CTA with terminal command (repeated), community links, then footer with link columns

Sections alternate between warm-tinted (`#0A0908`) and default dark backgrounds for visual differentiation.

## Key Conventions

- **Dark mode only** — `<html className="dark">` is hardcoded in layout, no theme switching
- **Brand colors**: `ferrum` (#E8610A), `ferrum-amber` (#F09030), `ferrum-glow` (#ED7420) — defined as Tailwind theme colors, use as `bg-ferrum`, `text-ferrum-amber`, etc.
- **Section backgrounds**: Warm-tinted sections use `bg-[#0A0908]`, feature/perf cards use `bg-[#141210]` with `border-[#2a2520]/30` — never use invisible dark-on-dark (e.g. `bg-neutral-950/50` on a dark page)
- **Text contrast**: Headings white, body text `neutral-300` minimum, secondary `neutral-400`. Never use `neutral-500` or lower for readable body text.
- **Fonts**: Geist Sans (body), Geist Mono (code), Syne (display headings via `font-display`)
- **Path alias**: `@/*` maps to `./src/*`
- **Client components**: Only use `"use client"` when needed (interactivity, hooks). Section components that are purely static should remain server components.
- **Static assets**: `/public` — includes `logo.png` and the hero background video
- **License**: The site is All Rights Reserved (not MIT like the server). The server software is MIT licensed.

## Install Scripts

`public/install.sh` (Linux/macOS) and `public/install.ps1` (Windows) — platform-specific installers that download the FerrumC binary from GitHub Releases into a server directory. The website component `src/components/ui/terminal-command.tsx` auto-detects the visitor's OS and shows the appropriate command.

See [`docs/install-scripts.md`](docs/install-scripts.md) for full details: supported targets, env var overrides, and platform-specific gotchas (LF line endings, PS 5.1 compat, base64 banner encoding).
