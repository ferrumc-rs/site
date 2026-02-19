import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Performance } from "@/components/sections/performance";
import { InstallCTA } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Performance />
      <InstallCTA />
    </>
  );
}
