import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { getReleases } from '@/app/dev/changelog/releases';
import { parseReleaseBody } from '@/app/dev/changelog/markdown';
import Collapsible from '@/components/layout/collapsable';
import Image from 'next/image';
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-[1200px] px-5 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Changelog</h1>
          <p className="text-neutral-400 text-lg">
            Track the evolution of FerrumC. All notable changes to this project are documented here.
          </p>
        </header>

        {releases.length === 0 ? (
          <div className="text-center py-12 text-neutral-400">
            <p>
              We are currently working on our first checkpoint. Join our{' '}
              <Link
                href="https://discord.gg/qT5J8EMjwk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-500 underline"
              >
                Discord
              </Link>{' '}
              to check the progress.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {releases.map((release) => {
              const changes = parseReleaseBody({ body: release.body });

              return (
                <article
                  key={release.tag_name}
                  className="relative grid grid-cols-4 bg-white/5 border border-white/10 rounded-lg p-6 text-sm text-neutral-300 leading-relaxed"
                  itemScope
                  itemType="https://schema.org/SoftwareVersion"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1 pt-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h2 className="text-2xl font-bold">
                            <Link
                              href={release.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-orange-500 transition-colors"
                              itemProp="version"
                            >
                              {release.tag_name}
                            </Link>
                            {release.name && release.name !== release.tag_name && (
                              <span className="text-neutral-400 font-normal ml-3">
                                - {release.name}
                              </span>
                            )}
                          </h2>
                          <div className="flex items-center gap-3 mt-1">
                            <time
                              className="text-sm text-neutral-400"
                              dateTime={release.published_at}
                              itemProp="datePublished"
                            >
                              {new Date(release.published_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </time>
                            <Link
                              href={release.author.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                            >
                              <Image
                                width={20}
                                height={20}
                                src={release.author.avatar_url}
                                alt={`${release.author.login}'s avatar`}
                                width={20}
                                height={20}
                                className="rounded-full"
                              />
                              @{release.author.login}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-14 space-y-6 col-span-3">
                    {changes.preamble.length > 0 ? (
                      <div>
                        <p className="mb-4 pb-4 pt-2 text-sm text-neutral-300 leading-relaxed">
                          {changes.preamble}
                        </p>
                      </div>
                    ) : null}

                    {changes.categories.length > 0 ? (
                      changes.categories.map((changeGroup, groupIndex) => (
                        <div key={groupIndex}>
                          <Collapsible title={typeLabels[changeGroup.type]}>
                            {changeGroup.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-2 text-neutral-300"
                              >
                                <span
                                  className="text-neutral-500 mt-1.5 text-center align-middle"
                                  aria-hidden="true"
                                >
                                  &#8226;
                                </span>
                                <span className="mt-1.5 text-center align-middle">{item}</span>
                              </li>
                            ))}
                          </Collapsible>
                        </div>
                      ))
                    ) : (
                      <p className="text-neutral-400 italic">
                        {release.body || 'No release notes provided.'}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <footer className="mt-16 pt-8 border-t border-white/10">
          <p className="text-neutral-400 text-sm text-center">
            For more detailed changes, see our{' '}
            <Link
              href="https://github.com/ferrumc-rs/ferrumc/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 underline"
            >
              GitHub Releases
            </Link>{' '}
            page.
          </p>
        </footer>
      </main>
      <Footer />
    </>
  );
}
