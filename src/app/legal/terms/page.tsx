import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Terms() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[800px] px-5 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Terms of Service</h1>
        <p className="text-neutral-400 mb-8">Last updated: November 22, 2025</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p className="text-neutral-400 mb-4">
            By accessing our website or downloading and using FerrumC software, you agree to be
            bound by these Terms of Service and all applicable laws and regulations.
          </p>
          <p className="text-neutral-400">
            If you do not agree with any of these terms, you are prohibited from using or accessing
            this site and software.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">License and Use</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6">Software License</h3>
          <p className="text-neutral-400 mb-4">
            FerrumC is open-source software licensed under the{' '}
            <Link href="/license" className="text-orange-600 hover:text-orange-500 underline">
              MIT License
            </Link>
            . You are free to:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
            <li>Use the software for any purpose, including commercial use</li>
            <li>Modify the source code</li>
            <li>Distribute copies of the software</li>
            <li>Distribute modified versions</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Restrictions</h3>
          <p className="text-neutral-400 mb-4">You agree NOT to:</p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2">
            <li>Use FerrumC for any unlawful purpose or illegal activity</li>
            <li>Attempt to circumvent security features or exploit vulnerabilities</li>
            <li>Remove copyright notices or attribution from the software</li>
            <li>Misrepresent the origin or authorship of FerrumC</li>
            <li>Use the FerrumC name or logo without permission for commercial purposes</li>
          </ul>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">No Warranty</h2>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-4">
            <p className="text-neutral-300 mb-4">
              FerrumC is provided <strong className="text-white">&#34;AS IS&#34;</strong> and{' '}
              <strong className="text-white">&#34;AS AVAILABLE&#34;</strong> without any warranties
              of any kind, either express or implied.
            </p>
            <p className="text-neutral-300">
              We do not warrant that the software will be error-free, secure, or uninterrupted. Use
              at your own risk.
            </p>
          </div>
          <p className="text-neutral-400">
            This includes but is not limited to warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="text-neutral-400 mb-4">
            To the maximum extent permitted by law, FerrumC and its contributors shall not be liable
            for any:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-4">
            <li>Direct, indirect, incidental, or consequential damages</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>Server downtime or service interruptions</li>
            <li>Security breaches or data corruption</li>
            <li>Damages arising from use or inability to use the software</li>
          </ul>
          <p className="text-neutral-400">
            You assume full responsibility for selecting, installing, and using FerrumC.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Minecraft and Third-Party Rights</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6">Minecraft Trademark</h3>
          <p className="text-neutral-400 mb-4">
            FerrumC is an independent project and is{' '}
            <strong className="text-white">
              not affiliated with, endorsed by, or associated with
            </strong>{' '}
            Mojang Studios, Microsoft Corporation, or any of their subsidiaries.
          </p>
          <p className="text-neutral-400 mb-6">
            &#34;Minecraft&#34; is a trademark of Mojang Synergies AB. All rights to the Minecraft
            brand, assets, and intellectual property belong to their respective owners.
          </p>

          <h3 className="text-xl font-semibold mb-3">Protocol Implementation</h3>
          <p className="text-neutral-400 mb-4">
            FerrumC implements the Minecraft server protocol through reverse engineering and
            publicly available documentation. This implementation is for educational,
            interoperability, and community purposes.
          </p>
          <p className="text-neutral-400">
            You are responsible for complying with Mojang&#39;s EULA and Terms of Service when using
            FerrumC.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6">Server Operators</h3>
          <p className="text-neutral-400 mb-4">
            If you operate a FerrumC server, you are responsible for:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-6">
            <li>Complying with all applicable laws and regulations</li>
            <li>Protecting user data and privacy</li>
            <li>Moderating content and user behavior on your server</li>
            <li>Securing your server against unauthorized access</li>
            <li>Backing up your data regularly</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Content</h3>
          <p className="text-neutral-400">
            You retain ownership of any content you create using FerrumC. However, you are solely
            responsible for any content created, hosted, or distributed through your server.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Open Source Contributions</h2>
          <p className="text-neutral-400 mb-4">
            By contributing code, documentation, or other materials to FerrumC, you agree that:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2">
            <li>Your contributions are original or you have permission to submit them</li>
            <li>
              You grant FerrumC a perpetual, worldwide, non-exclusive license to use your
              contributions
            </li>
            <li>Your contributions will be licensed under the MIT License</li>
            <li>You have the legal right to grant these licenses</li>
          </ul>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
          <p className="text-neutral-400 mb-4">
            Your use of FerrumC is also governed by our{' '}
            <Link href="/privacy" className="text-orange-600 hover:text-orange-500 underline">
              Privacy Policy
            </Link>
            . Please review it to understand how we collect and use information.
          </p>
          <p className="text-neutral-400">
            The FerrumC server software itself does not collect or transmit any user data.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Security and Vulnerabilities</h2>
          <p className="text-neutral-400 mb-4">
            If you discover a security vulnerability in FerrumC, please report it responsibly:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-4">
            <li>
              Open a private security advisory on{' '}
              <Link
                href="https://github.com/ferrumc-rs/ferrumc/security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-500 underline"
              >
                GitHub
              </Link>
            </li>
            <li>Do not publicly disclose the vulnerability until we&#39;ve addressed it</li>
            <li>Allow reasonable time for us to fix the issue</li>
          </ul>
          <p className="text-neutral-400">
            We appreciate responsible disclosure and will credit security researchers appropriately.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Updates and Support</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6">Software Updates</h3>
          <p className="text-neutral-400 mb-6">
            FerrumC is actively developed, but we make no guarantees about update frequency or
            ongoing support. The software may be modified or discontinued at any time.
          </p>

          <h3 className="text-xl font-semibold mb-3">Community Support</h3>
          <p className="text-neutral-400 mb-4">
            Support is provided on a best-effort basis by the community. We do not guarantee
            responses or solutions to any issues.
          </p>
          <p className="text-neutral-400">
            For support, visit our{' '}
            <Link
              href="https://github.com/ferrumc-rs/ferrumc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 underline"
            >
              GitHub repository
            </Link>{' '}
            or{' '}
            <Link
              href="https://discord.gg/ferrumc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 underline"
            >
              Discord server
            </Link>
            .
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="text-neutral-400 mb-4">We reserve the right to:</p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2">
            <li>Modify or discontinue any part of FerrumC at any time</li>
            <li>Restrict access to our website or repositories</li>
            <li>Remove content that violates these terms</li>
            <li>Ban users from our community platforms for violations</li>
          </ul>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-neutral-400 mb-4">
            These Terms shall be governed by and construed in accordance with applicable laws,
            without regard to conflict of law provisions.
          </p>
          <p className="text-neutral-400">
            Any disputes shall be resolved through good faith negotiation or, if necessary, in the
            appropriate courts.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-neutral-400 mb-4">
            We may revise these Terms of Service at any time. Changes will be posted on this page
            with an updated &#34;Last updated&#34; date.
          </p>
          <p className="text-neutral-400">
            Continued use of FerrumC after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Severability</h2>
          <p className="text-neutral-400">
            If any provision of these Terms is found to be unenforceable or invalid, that provision
            will be limited or eliminated to the minimum extent necessary, and the remaining
            provisions will remain in full force and effect.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-neutral-400 mb-4">
            If you have questions about these Terms of Service, please contact us:
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
                href="https://discord.gg/ferrumc"
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
