import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Performance } from "@/components/sections/performance";
import { InstallCTA } from "@/components/sections/footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FerrumC",
  description:
    "A high-performance, fully multi-threaded Minecraft server built in Rust. Compatible with vanilla clients, no mods needed.",
  applicationCategory: "GameApplication",
  operatingSystem: "Linux, macOS, Windows",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://ferrumc.com",
  downloadUrl: "https://github.com/ferrumc-rs/ferrumc/releases",
  license: "https://opensource.org/licenses/MIT",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <Performance />
      <InstallCTA />
    </>
  );
}
