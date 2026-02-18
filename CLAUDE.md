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
│   └── page.tsx        # Composes Navbar → Hero → Footer
├── components/
│   ├── sections/       # Page sections (navbar, hero, footer)
│   ├── ui/             # shadcn primitives + custom (terminal-command)
│   └── three/          # 3D scene (unused)
└── lib/
    └── utils.ts        # cn() helper
```

## Key Conventions

- **Dark mode only** — `<html className="dark">` is hardcoded in layout, no theme switching
- **Brand colors**: `ferrum` (#E8610A), `ferrum-amber` (#F09030), `ferrum-glow` (#ED7420) — defined as Tailwind theme colors, use as `bg-ferrum`, `text-ferrum-amber`, etc.
- **Fonts**: Geist Sans (body), Geist Mono (code), Syne (display headings via `font-display`)
- **Path alias**: `@/*` maps to `./src/*`
- **Client components**: Only use `"use client"` when needed (interactivity, hooks). Section components that are purely static should remain server components.
- **Static assets**: `/public` — includes `logo.png` and the hero background video

## Install Scripts

`public/install.sh` (Linux/macOS) and `public/install.ps1` (Windows) — platform-specific installers that download the FerrumC binary from GitHub Releases into a server directory. The website component `src/components/ui/terminal-command.tsx` auto-detects the visitor's OS and shows the appropriate command.

See [`docs/install-scripts.md`](docs/install-scripts.md) for full details: supported targets, env var overrides, and platform-specific gotchas (LF line endings, PS 5.1 compat, base64 banner encoding).
