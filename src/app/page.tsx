import { DevBanner } from "@/components/sections/dev-banner";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Performance } from "@/components/sections/performance";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <DevBanner />
      <Navbar />
      <Hero />
      <Features />
      <Performance />
      <Footer />
    </main>
  );
}
