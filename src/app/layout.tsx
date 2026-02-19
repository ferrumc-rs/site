import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@/components/analytics";
import { DevBanner } from "@/components/sections/dev-banner";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const siteUrl = "https://ferrumc.com";
const description =
  "A high-performance, fully multi-threaded Minecraft server built in Rust. Compatible with vanilla clients, no mods needed.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FerrumC — A Minecraft server built in Rust",
  description,
  keywords: [
    "minecraft server",
    "rust",
    "high-performance",
    "multi-threaded",
    "ferrumc",
    "vanilla compatible",
    "open source",
  ],
  authors: [{ name: "Saad Muhammad" }],
  creator: "Saad Muhammad",
  robots: { index: true, follow: true },
  openGraph: {
    title: "FerrumC — A Minecraft server built in Rust",
    description,
    url: siteUrl,
    siteName: "FerrumC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 657,
        alt: "FerrumC — High-performance Minecraft server in Rust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FerrumC — A Minecraft server built in Rust",
    description,
    images: ["/banner.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FerrumC",
  description,
  applicationCategory: "GameApplication",
  operatingSystem: "Linux, macOS, Windows",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: siteUrl,
  downloadUrl: "https://github.com/ferrumc-rs/ferrumc/releases",
  license: "https://opensource.org/licenses/MIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        <DevBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
