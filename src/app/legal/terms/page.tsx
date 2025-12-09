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
      <main className="mx-auto max-w-[900px] px-5 pb-24 pt-20">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-headline font-extrabold tracking-tight">Terms of Service</h1>
          <p className="text-muted mt-3">Last updated: November 22, 2025</p>
        </section>

        {/* Wrapper */}
        <div className="space-y-20">
          {/* Agreement */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Agreement to Terms</h2>
            <div className="space-y-4 text-muted font-body">
              <p>
                By accessing our website or downloading and using FerrumC software, you agree to be
                bound by these Terms of Service and all applicable laws and regulations.
              </p>
              <p>
                If you do not agree with any of these terms, you are prohibited from using or
                accessing this site and software.
              </p>
            </div>
          </section>

          <Divider />

          {/* License */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">License and Use</h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">Software License</h3>
            <p className="text-muted mb-4">
              FerrumC is open-source software licensed under the{' '}
              <Link href="/license" className="text-molten hover:text-rust underline">
                MIT License
              </Link>
              . You are free to:
            </p>

            <ul className="list-disc pl-5 text-muted space-y-2 mb-8">
              <li>Use the software for any purpose, including commercial use</li>
              <li>Modify the source code</li>
              <li>Distribute copies of the software</li>
              <li>Distribute modified versions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Restrictions</h3>
            <p className="text-muted mb-4">You agree NOT to:</p>

            <ul className="list-disc pl-5 text-muted space-y-2">
              <li>Use FerrumC for any unlawful purpose or illegal activity</li>
              <li>Attempt to circumvent security features or exploit vulnerabilities</li>
              <li>Remove copyright notices or attribution from the software</li>
              <li>Misrepresent the origin or authorship of FerrumC</li>
              <li>Use the FerrumC name or logo commercially without permission</li>
            </ul>
          </section>

          <Divider />

          {/* Warranty */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">No Warranty</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-4 shadow-md shadow-black/20">
              <p className="text-neutral-300 mb-3">
                FerrumC is provided <strong className="text-white">&#34;AS IS&#34;</strong> and{' '}
                <strong className="text-white">&#34;AS AVAILABLE&#34;</strong> without any
                warranties.
              </p>
              <p className="text-neutral-300">
                We do not guarantee the software will be error-free, secure, or uninterrupted.
              </p>
            </div>

            <p className="text-muted">
              This includes but is not limited to warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>
          </section>

          <Divider />

          {/* Liability */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Limitation of Liability</h2>

            <p className="text-muted mb-4">
              To the maximum extent allowed by law, FerrumC and its contributors shall not be liable
              for:
            </p>

            <ul className="list-disc pl-5 text-muted space-y-2 mb-4">
              <li>Direct or indirect damages</li>
              <li>Loss of data, profits, or business</li>
              <li>Service interruptions</li>
              <li>Security breaches or corruption</li>
              <li>Issues related to software usage</li>
            </ul>

            <p className="text-muted">
              You assume full responsibility for selecting and using FerrumC.
            </p>
          </section>

          <Divider />

          {/* Minecraft Rights */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">
              Minecraft and Third-Party Rights
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">Minecraft Trademark</h3>
            <p className="text-muted mb-4">
              FerrumC is an independent project and{' '}
              <strong className="text-white">not affiliated with Mojang or Microsoft</strong>.
            </p>
            <p className="text-muted mb-6">“Minecraft” is a trademark of Mojang Synergies AB.</p>

            <h3 className="text-xl font-semibold mb-2">Protocol Implementation</h3>
            <p className="text-muted mb-4">
              FerrumC implements the Minecraft protocol through reverse engineering and
              documentation.
            </p>
            <p className="text-muted">You must comply with Mojang’s EULA when operating FerrumC.</p>
          </section>

          <Divider />

          {/* Responsibilities */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">User Responsibilities</h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">Server Operators</h3>
            <p className="text-muted mb-4">If you host a FerrumC server, you must:</p>

            <ul className="list-disc pl-5 text-muted space-y-2 mb-8">
              <li>Follow laws and regulations</li>
              <li>Protect user privacy</li>
              <li>Moderate your community</li>
              <li>Secure your server</li>
              <li>Maintain regular backups</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Content</h3>
            <p className="text-muted">You own your content but are responsible for it entirely.</p>
          </section>

          <Divider />

          {/* Contributions */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Open Source Contributions</h2>
            <p className="text-muted mb-4">By contributing to FerrumC, you agree that:</p>

            <ul className="list-disc pl-5 text-muted space-y-2">
              <li>Your contributions are original or permitted</li>
              <li>You grant FerrumC a perpetual non-exclusive license</li>
              <li>Your work is under the MIT License</li>
              <li>You have rights to submit it</li>
            </ul>
          </section>

          <Divider />

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Privacy</h2>
            <p className="text-muted mb-4">
              Your use of FerrumC is also governed by our{' '}
              <Link href="/privacy" className="text-molten hover:text-rust underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-muted">FerrumC does not collect or transmit any personal data.</p>
          </section>

          <Divider />

          {/* Security Reporting */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">
              Security and Vulnerabilities
            </h2>

            <p className="text-muted mb-4">Report vulnerabilities responsibly:</p>

            <ul className="list-disc pl-5 text-muted space-y-2 mb-4">
              <li>
                Submit private advisories via{' '}
                <Link
                  href="https://github.com/ferrumc-rs/ferrumc/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-molten hover:text-rust underline"
                >
                  GitHub
                </Link>
              </li>
              <li>Avoid public disclosure before a fix</li>
              <li>Allow time to address the issue</li>
            </ul>

            <p className="text-muted">Responsible disclosure is appreciated.</p>
          </section>

          <Divider />

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Updates and Support</h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">Software Updates</h3>
            <p className="text-muted mb-6">
              FerrumC is actively developed, but no guarantees are made regarding update frequency.
            </p>

            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-muted mb-4">Support is provided on a best-effort basis.</p>
            <p className="text-muted">
              Visit our{' '}
              <Link
                href="https://github.com/ferrumc-rs/ferrumc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-molten hover:text-rust underline"
              >
                GitHub
              </Link>{' '}
              or{' '}
              <Link
                href="https://discord.gg/ferrumc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-molten hover:text-rust underline"
              >
                Discord
              </Link>{' '}
              for help.
            </p>
          </section>

          <Divider />

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Termination</h2>

            <p className="text-muted mb-4">We may:</p>

            <ul className="list-disc pl-5 text-muted space-y-2">
              <li>Modify or discontinue FerrumC</li>
              <li>Restrict access to services</li>
              <li>Remove violating content</li>
              <li>Ban users from community platforms</li>
            </ul>
          </section>

          <Divider />

          {/* Law */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Governing Law</h2>
            <p className="text-muted mb-4">These Terms are governed by applicable laws.</p>
            <p className="text-muted">
              Disputes should be resolved through negotiation or the appropriate courts.
            </p>
          </section>

          <Divider />

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted mb-4">
              Terms may change at any time. Updates will be posted here.
            </p>
            <p className="text-muted">Continued use constitutes acceptance.</p>
          </section>

          <Divider />

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Severability</h2>
            <p className="text-muted">If any provision is invalid, the remainder still applies.</p>
          </section>

          <Divider />

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-headline font-semibold mb-4">Contact</h2>
            <p className="text-muted mb-4">If you have questions, reach out:</p>

            <ul className="list-disc pl-5 text-muted space-y-2">
              <li>
                GitHub:{' '}
                <Link
                  href="https://github.com/ferrumc-rs/ferrumc/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-molten hover:text-rust underline"
                >
                  Open an issue
                </Link>
              </li>
              <li>
                Discord:{' '}
                <Link
                  href="https://discord.gg/ferrumc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-molten hover:text-rust underline"
                >
                  Join our server
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Divider() {
  return <hr className="border-white/10" />;
}
