import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Performance } from "@/components/sections/performance";
import { Install } from "@/components/sections/install";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Subtle background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <Navbar />
      <Hero />
      <Features />
      <Performance />
      <Install />
      <Footer />
    </main>
  );
}
