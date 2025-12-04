import Footer from '@/components/footer';
import Image from 'next/image';
import GradientText from '@/components/text/gradient-text';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/header';

const SITE_URL = 'https://ferrumc.com';

export const metadata: Metadata = {
  title: 'FerrumC - High-Performance Minecraft Server Written in Rust',
  description:
    'FerrumC is a fully multi-threaded Minecraft server implementation written in Rust. Experience lightning-fast world loading, smooth ticks, and low memory usage. Compatible with vanilla Minecraft 1.21.8 clients.',

  keywords: [
    'minecraft server',
    'rust minecraft server',
    'ferrumc',
    'high performance server',
    'minecraft rust',
    'game server',
    'vanilla minecraft',
    'minecraft 1.21.8',
    'multi-threaded server',
    'fast minecraft server',
  ],

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },

  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'FerrumC - High-Performance Minecraft Server',
    description:
      'A fully multi-threaded Minecraft server written in Rust. Lightning-fast, memory-efficient, and compatible with vanilla clients.',
    siteName: 'FerrumC',
    images: [
      {
        url: `${SITE_URL}/images/in_game.png`,
        width: 1200,
        height: 630,
        alt: 'FerrumC Minecraft Server',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FerrumC - High-Performance Minecraft Server',
    description: 'A fully multi-threaded Minecraft server written in Rust for optimal performance.',
    images: [`${SITE_URL}/images/in_game.png`],
    site: '@ferrumc',
    creator: '@ferrumc',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FerrumC',
    applicationCategory: 'Game Server',
    operatingSystem: 'Cross-platform',
    description:
      'A high-performance, multi-threaded Minecraft server implementation written in Rust',
    url: SITE_URL,
    downloadUrl: `${SITE_URL}/download`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'FerrumC',
      url: 'https://github.com/ferrumc-rs',
    },
    softwareVersion: '1.21.8',
    programmingLanguage: 'Rust',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-12 pb-8 min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden bg-[radial-gradient(80%_60%_at_10%_-10%,rgba(255,107,53,0.15),transparent_60%),radial-gradient(80%_60%_at_100%_0%,rgba(255,107,53,0.12),transparent_60%)] before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] before:bg-[length:24px_24px] before:[mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent_70%)]">
          <div className="mx-auto max-w-[1100px] px-5 grid items-center gap-8 lg:gap-10 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_620px] relative">
            <div>
              <h1 className="m-0 text-xl md:text-3xl font-headline font-extrabold leading-tight tracking-tight">
                A <GradientText>fully multi-threaded</GradientText> Minecraft server
                <br />
                you didn&#39;t know you needed.
              </h1>
              <p className="text-muted mt-4 mb-5 font-body">
                Built in Rust, FerrumC makes servers feel fast, worlds stream in quickly, ticks stay
                smooth, and memory stays lean while staying compatible with vanilla clients.
              </p>
              <div className="flex gap-3 mb-4 justify-center md:justify-start">
                <a
                  className="inline-flex items-center rounded-md bg-molten px-4 py-2 font-body font-semibold text-main hover:bg-rust transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  href="/download"
                >
                  Download
                </a>
                <a
                  className="inline-flex items-center rounded-md bg-surface px-4 py-2 font-body font-semibold text-main hover:bg-surface/80 border border-muted/20 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  href="https://github.com/ferrumc-rs/ferrumc"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="flex justify-center order-first md:order-none relative overflow-hidden lg:mr-[-40px] mt-4 md:mt-6 lg:mt-0 before:content-[''] before:absolute before:inset-x-[-10%] before:bottom-[-10%] before:h-[60%] before:bg-[radial-gradient(50%_60%_at_50%_70%,rgba(255,107,53,0.35),transparent_60%)] before:blur-[28px]">
              <Image
                src="/images/in_game.png"
                alt="in-game"
                width={640}
                height={400}
                className="float-slow w-full max-w-[680px] md:max-w-[760px] lg:w-auto lg:max-w-[640px] rounded-lg shadow-2xl ring-1 ring-white/10"
                priority
              />
            </div>
          </div>
        </section>

        {/* Orange band */}
        <section className="bg-molten text-main mt-9 py-14">
          <div className="mx-auto max-w-[1100px] px-5">
            <h2 className="text-center text-2xl font-headline font-semibold mb-6 tracking-tight">
              Worlds that stream in fast, see it for yourself!
            </h2>
            <div className="flex justify-center">
              <Image
                src="/images/chunk_loading.gif"
                alt="chunk loading gif"
                width={820}
                height={400}
                className="rounded-lg shadow-2xl w-[820px] max-w-full"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Features two-col */}
        <section className="mx-auto max-w-[1100px] px-5 pt-16 flex flex-col gap-4">
          <div className="grid gap-9 md:grid-cols-[1fr_480px] items-center">
            <div className="relative w-full">
              <Image
                src="/images/in_game.png"
                alt="in-game"
                width={1920}
                height={1080}
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-3 tracking-tight">
                Engineered for throughput.
                <br />
                <GradientText>Parallel by design.</GradientText>
              </h3>
              <ul className="list-disc pl-5 text-muted space-y-2 mb-6 font-body">
                <li>Parallel engine with a thread‑safe architecture</li>
                <li>High performance and memory efficiency</li>
                <li>Customizable server list</li>
                <li>World importing from vanilla Minecraft</li>
                <li>Powerful Entity Component System</li>
                <li>Lightning-fast world loading</li>
                <li>Compatible with vanilla Minecraft clients (1.21.8)</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-9 md:grid-cols-[1fr_480px] items-center">
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-3 tracking-tight">
                Built for your vision.
                <br />
                <GradientText>Endlessly customizable.</GradientText>
              </h3>
              <ul className="list-disc pl-5 text-muted space-y-2 mb-6 font-body">
                <li>Powerful plugin system with extensive API</li>
                <li>Customizable server list and MOTD</li>
                <li>Flexible configuration options</li>
                <li>Custom game mechanics and rules</li>
                <li>Easy to extend and modify</li>
              </ul>
            </div>
            <div className="relative w-full">
              <Image
                src="/images/in_game.png"
                alt="in-game"
                width={1920}
                height={1080}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="grid gap-9 md:grid-cols-[1fr_480px] items-center">
            <div className="relative w-full">
              <Image
                src="/images/in_game.png"
                alt="in-game"
                width={1920}
                height={1080}
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-3 tracking-tight">
                Drop-in replacement.
                <br />
                <GradientText>Zero friction setup.</GradientText>
              </h3>
              <ul className="list-disc pl-5 text-muted space-y-2 mb-6 font-body">
                <li>Compatible with vanilla Minecraft clients</li>
                <li>Import existing worlds seamlessly</li>
                <li>No client-side mods required</li>
                <li>Familiar commands and gameplay</li>
                <li>Quick setup in minutes</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 text-center gap-4 mt-8">
            <h3 className="text-3xl font-headline font-extrabold row-start-1 col-start-2 tracking-tight">
              Interested?
            </h3>
            <a
              className="rounded-lg bg-molten px-4 py-2 font-body font-semibold text-main hover:bg-rust transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] row-start-2 col-start-2"
              href="/download"
            >
              Download
            </a>
          </div>
        </section>

        {/* Contribute */}
        <section className="mx-auto max-w-[1100px] px-5 py-16 text-center">
          <h2 className="text-3xl font-headline font-extrabold tracking-tight">
            Or even want to start contributing?
          </h2>
          <p className="text-molten text-3xl font-headline font-extrabold mt-1 mb-5 tracking-tight">
            Check us out on GitHub
          </p>
          <Link
            href="https://github.com/ferrumc-rs/ferrumc"
            target="_blank"
            rel="noreferrer"
            id="github"
            className="inline-flex items-center rounded-lg bg-surface px-5 py-3 font-body font-semibold text-main hover:bg-surface/80 border border-muted/20 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            View on GitHub
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
