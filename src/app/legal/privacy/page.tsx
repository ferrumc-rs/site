import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[800px] px-5 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
        <p className="text-neutral-400 mb-8">Last updated: November 22, 2025</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-neutral-400 mb-4">
            FerrumC (&#34;we&#34;, &#34;us&#34;, or &#34;our&#34;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website or use our software.
          </p>
          <p className="text-neutral-400">
            By using FerrumC, you agree to the collection and use of information in accordance with
            this policy.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6">Website Usage</h3>
          <p className="text-neutral-400 mb-4">
            When you visit our website, we may automatically collect:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
            <li>
              <strong className="text-white">Log data</strong> - IP address, browser type, pages
              visited, time spent on pages
            </li>
            <li>
              <strong className="text-white">Cookies</strong> - Small data files stored on your
              device to improve user experience
            </li>
            <li>
              <strong className="text-white">Analytics data</strong> - Anonymous usage statistics to
              improve our website
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">FerrumC Server Software</h3>
          <p className="text-neutral-400 mb-4">
            The FerrumC server software itself does not collect or transmit any personal
            information. All data remains on your server.
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2">
            <li>We do not collect gameplay data</li>
            <li>We do not track server usage</li>
            <li>We do not access your world files or player data</li>
            <li>No telemetry or analytics are built into the software</li>
          </ul>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-neutral-400 mb-4">We use the information we collect for:</p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2">
            <li>Improving our website and user experience</li>
            <li>Analyzing website traffic and usage patterns</li>
            <li>Responding to support requests and communications</li>
            <li>Detecting and preventing technical issues</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-neutral-400 mb-4">
            Our website may use third-party services that collect information:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
            <li>
              <strong className="text-white">GitHub</strong> - For hosting our repository and issue
              tracking
            </li>
            <li>
              <strong className="text-white">Discord</strong> - For community chat (if you join our
              server)
            </li>
            <li>
              <strong className="text-white">Analytics providers</strong> - For website usage
              statistics
            </li>
          </ul>
          <p className="text-neutral-400">
            These services have their own privacy policies. We encourage you to review them.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-neutral-400 mb-4">
            We use cookies to enhance your experience on our website. Cookies are small text files
            stored on your device.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Types of Cookies We Use:</h3>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
            <li>
              <strong className="text-white">Essential cookies</strong> - Required for the website
              to function properly
            </li>
            <li>
              <strong className="text-white">Analytics cookies</strong> - Help us understand how
              visitors use our site
            </li>
            <li>
              <strong className="text-white">Preference cookies</strong> - Remember your settings
              and preferences
            </li>
          </ul>

          <p className="text-neutral-400">
            You can control cookies through your browser settings. Note that disabling cookies may
            affect website functionality.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-neutral-400 mb-4">
            We take reasonable measures to protect your information from unauthorized access,
            disclosure, or destruction. However, no method of transmission over the internet is 100%
            secure.
          </p>
          <p className="text-neutral-400">
            We implement industry-standard security practices, but we cannot guarantee absolute
            security.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-neutral-400 mb-4">
            Depending on your location, you may have certain rights regarding your personal data:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2">
            <li>
              <strong className="text-white">Access</strong> - Request a copy of the data we hold
              about you
            </li>
            <li>
              <strong className="text-white">Correction</strong> - Request correction of inaccurate
              data
            </li>
            <li>
              <strong className="text-white">Deletion</strong> - Request deletion of your data
            </li>
            <li>
              <strong className="text-white">Opt-out</strong> - Opt out of certain data collection
              practices
            </li>
          </ul>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Children&#39;s Privacy</h2>
          <p className="text-neutral-400">
            FerrumC does not knowingly collect personal information from children under 13. If you
            believe we have collected information from a child, please contact us immediately.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Open Source Transparency</h2>
          <p className="text-neutral-400 mb-4">
            FerrumC is open-source software. You can review our entire codebase on{' '}
            <Link
              href="https://github.com/ferrumc-rs/ferrumc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 underline"
            >
              GitHub
            </Link>{' '}
            to verify that we do not collect or transmit user data.
          </p>
          <p className="text-neutral-400">
            We believe in transparency and encourage security researchers to audit our code.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="text-neutral-400 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the &#34;Last updated&#34; date.
          </p>
          <p className="text-neutral-400">
            We encourage you to review this policy periodically for any changes.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-neutral-400 mb-4">
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2">
            <li>
              Via GitHub:{' '}
              <Link
                href="https://github.com/ferrumc-rs/ferrumc/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-500 underline"
              >
                Open an issue
              </Link>
            </li>
            <li>
              Via Discord:{' '}
              <Link
                href="https://discord.gg/qT5J8EMjwk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-500 underline"
              >
                Join our server
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
