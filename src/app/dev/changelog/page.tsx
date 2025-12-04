import Header from '@/components/header';
import Footer from '@/components/footer';
import { getReleases } from '@/app/dev/changelog/releases';
import { parseReleaseBody } from '@/app/dev/changelog/markdown';
import Collapsible from '@/components/layout/collapsable';
import Image from 'next/image';
import Script from 'next/script';
import { Metadata } from 'next';

const SITE_URL = 'https://ferrumc.com';

export const metadata: Metadata = {
  title: 'Changelog | FerrumC - Release History & Updates',
  description:
    'Track the evolution of FerrumC with our complete changelog. View all notable changes, new features, bug fixes, and improvements to our high-performance Minecraft server.',
  keywords: [
    'ferrumc changelog',
    'minecraft server updates',
    'release notes',
    'version history',
    'software updates',
    'rust minecraft server',
    'ferrumc releases',
  ],
  alternates: {
    canonical: `${SITE_URL}/dev/changelog`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/dev/changelog`,
    title: 'Changelog | FerrumC',
    description: 'Track all notable changes and updates to FerrumC.',
    siteName: 'FerrumC',
    images: [
      {
        url: `${SITE_URL}/images/in_game.png`,
        width: 1200,
        height: 630,
        alt: 'FerrumC Changelog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog | FerrumC',
    description: 'Track all notable changes and updates to FerrumC.',
    images: [`${SITE_URL}/images/in_game.png`],
    site: '@ferrumc',
  },
};

const typeLabels = {
  added: 'Added',
  changed: 'Changed',
  fixed: 'Fixed',
  removed: 'Removed',
  security: 'Security',
};

export default async function Changelog() {
  const releases = await getReleases();

  // Pre-parse releases for improved SSR performance
  const parsedReleases = releases.map((r) => ({
    ...r,
    parsed: parseReleaseBody({ body: r.body }),
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'FerrumC Changelog',
    description: 'Complete version history and release notes for FerrumC',
    url: `${SITE_URL}/dev/changelog`,
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'FerrumC',
      applicationCategory: 'Game Server',
      operatingSystem: 'Cross-platform',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  };

  return (
    <>
      {/* SEO Structured Data */}
      <Script id="changelog-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <Header />

      <main className="mx-auto max-w-[1200px] px-5 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Changelog</h1>
          <p className="text-neutral-400 text-lg">
            Track the evolution of FerrumC. All notable changes to this project are documented here.
          </p>
        </header>

        {parsedReleases.length === 0 ? (
          <div className="text-center py-12 text-neutral-400">
            <p>
              We are currently working on our first checkpoint. Join our{' '}
              <a
                href="https://discord.gg/qT5J8EMjwk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-500 underline"
              >
                Discord
              </a>{' '}
              to check the progress.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {parsedReleases.map((release) => (
              <article
                key={release.tag_name}
                itemScope
                itemType="https://schema.org/SoftwareVersion"
                className="grid grid-cols-4 gap-6 bg-white/5 border border-white/10 rounded-lg p-6 text-sm text-neutral-300 leading-relaxed"
              >
                {/* LEFT COLUMN — Version Info */}
                <div className="col-span-1">
                  <h2 className="text-2xl font-bold" itemProp="version">
                    <a
                      href={release.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-500 transition-colors"
                    >
                      {release.tag_name}
                    </a>
                    {release.name && release.name !== release.tag_name && (
                      <span className="text-neutral-400 font-normal block mt-1 text-base">
                        {release.name}
                      </span>
                    )}
                  </h2>

                  <time
                    className="block text-sm text-neutral-400 mt-2"
                    dateTime={release.published_at}
                    itemProp="datePublished"
                  >
                    {new Date(release.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  <a
                    href={release.author?.html_url ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white mt-3"
                  >
                    <Image
                      loading="lazy"
                      width={24}
                      height={24}
                      src={release.author?.avatar_url ?? '/images/default-avatar.png'}
                      alt={release.author?.login ?? 'Unknown user'}
                      className="rounded-full"
                    />
                    @{release.author?.login ?? 'unknown'}
                  </a>
                </div>

                {/* RIGHT COLUMN — Changes */}
                <div className="col-span-3 space-y-6">
                  {/* Optional preamble text */}
                  {release.parsed.preamble && (
                    <p className="text-neutral-300">{release.parsed.preamble}</p>
                  )}

                  {/* Change categories */}
                  {release.parsed.categories.length > 0 ? (
                    release.parsed.categories.map((group, i) => (
                      <Collapsible key={i} title={typeLabels[group.type]}>
                        {group.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-neutral-300">
                            <span className="text-neutral-500 mt-1.5">&#8226;</span>
                            <span className="mt-1.5">{item}</span>
                          </li>
                        ))}
                      </Collapsible>
                    ))
                  ) : (
                    <p className="text-neutral-400 italic">
                      {release.body || 'No release notes provided.'}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        <footer className="mt-16 pt-8 border-t border-white/10">
          <p className="text-neutral-400 text-sm text-center">
            For more detailed changes, see our{' '}
            <a
              href="https://github.com/ferrumc-rs/ferrumc/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 underline"
            >
              GitHub Releases
            </a>{' '}
            page.
          </p>
        </footer>
      </main>

      <Footer />
    </>
  );
}
