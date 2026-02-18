import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-8xl sm:text-9xl font-bold bg-gradient-to-b from-white to-neutral-600 bg-clip-text text-transparent leading-none">
          404
        </h1>
        <p className="mt-6 text-lg text-neutral-400">
          This page doesn&apos;t exist.
        </p>
        <Button
          asChild
          className="mt-8 bg-ferrum hover:bg-ferrum/90 text-white cursor-pointer"
        >
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
