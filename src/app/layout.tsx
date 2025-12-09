import type { Metadata } from 'next';
import './globals.css';
import { JetBrains_Mono, Poppins, Space_Grotesk } from 'next/font/google';
import React from 'react';

const SITE_URL = 'https://ferrumc.com';
const OG_IMAGE = `${SITE_URL}/images/in_game.png`;

const description = `FerrumC is a fully multi-threaded Minecraft server built in Rust.
         Experience fast worlds, smooth ticks, and lean memory usage while staying compatible with vanilla clients.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'FerrumC',
    template: 'FerrumC - %s',
  },

  description,

  keywords: [
    'minecraft server',
    'rust',
    'multi-threaded',
    'high performance',
    'vanilla compatible',
    'minecraft 1.20.8',
    'minecraft',
    '1.20.8',
    'ferrumc',
    'minecraft hosting',
  ],

  authors: [{ name: 'FerrumC Team', url: 'https://github.com/ferrumc-rs/site' }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'FerrumC - High-Performance Multi-Threaded Minecraft Server',
    description:
      'A fully multi-threaded Minecraft server built in Rust. Fast world streaming, smooth ticks, and memory efficiency while staying compatible with vanilla clients.',
    siteName: 'FerrumC',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'FerrumC Minecraft server in-game screenshot',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@ferrumc',
    creator: '@ferrumc',
    title: 'FerrumC - High-Performance Multi-Threaded Minecraft Server',
    description:
      'A fully multi-threaded Minecraft server built in Rust. Fast world streaming, smooth ticks, and memory efficiency while staying compatible with vanilla clients.',
    images: [
      {
        url: OG_IMAGE,
        alt: 'FerrumC Minecraft server in-game screenshot',
      },
    ],
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: '/images/logo-64.png',
    apple: '/images/logo.png',
  },

  appleWebApp: {
    capable: true,
    title: 'FerrumC',
    statusBarStyle: 'black-translucent',
  },
};

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.className} ${poppins.className} ${spaceGrotesk.className}`}
    >
      <body className="bg-void text-main font-body overflow-x-hidden flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
