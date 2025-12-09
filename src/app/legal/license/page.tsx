import Header from '@/components/header';
import Footer from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'License',
  robots: {
    index: false,
    follow: false,
  },
};

export default function License() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[800px] px-5 py-16">
        <h1 className="text-4xl font-extrabold mb-8">License</h1>

        {/* FerrumC License */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FerrumC License</h2>
          <p className="text-neutral-400 mb-4">
            FerrumC is released under the <strong className="text-white">MIT License</strong>.
          </p>
          <p className="text-neutral-400 mb-6">Copyright (c) 2025 FerrumC</p>

          <h3 className="text-xl font-semibold mb-3">MIT License</h3>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-sm text-neutral-300 leading-relaxed mb-6">
            <p className="mb-4">
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the &quot;Software&quot;), to deal in the
              Software without restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
              and to permit persons to whom the Software is furnished to do so, subject to the
              following conditions:
            </p>
            <p className="mb-4">
              The above copyright notice and this permission notice shall be included in all copies
              or substantial portions of the Software.
            </p>
            <p className="font-semibold text-white">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
              CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
              OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </section>

        <hr className="border-white/10 my-12" />

        {/* Third-Party Licenses */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Licenses</h2>
          <p className="text-neutral-400 mb-4">
            FerrumC uses open-source dependencies. Each one includes its own license:
          </p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-4">
            <li>
              <strong className="text-white">Rust and Cargo dependencies</strong> — various licenses
              (MIT, Apache 2.0, BSD)
            </li>
            <li>
              <strong className="text-white">Tokio</strong> — MIT License
            </li>
            <li>
              <strong className="text-white">Serde</strong> — MIT OR Apache-2.0
            </li>
          </ul>

          <p className="text-neutral-400">
            For full dependency licensing information, see the{' '}
            <a
              href="https://github.com/ferrumc-rs/ferrumc/blob/main/Cargo.toml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 underline"
            >
              Cargo.toml
            </a>
            .
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        {/* Minecraft / Mojang Notice */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Minecraft and Mojang</h2>
          <p className="text-neutral-400 mb-4">
            FerrumC is an independent implementation of the Minecraft server protocol and is not
            affiliated with Mojang Studios or Microsoft Corporation.
          </p>
          <p className="text-neutral-400 mb-4">
            &quot;Minecraft&quot; is a trademark of Mojang Synergies AB (Microsoft). All rights to
            the brand and assets belong to their respective owners.
          </p>
          <p className="text-neutral-400">
            FerrumC enables users to run their own Minecraft-compatible servers for learning and
            community use.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        {/* Website License */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Website License</h2>
          <p className="text-neutral-400 mb-4">
            The FerrumC website and documentation are licensed under{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 underline"
            >
              CC BY 4.0
            </a>
            .
          </p>

          <p className="text-neutral-400 mb-3">You may:</p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2 mb-4">
            <li>
              <strong className="text-white">Share</strong> — copy and redistribute the material
            </li>
            <li>
              <strong className="text-white">Adapt</strong> — modify or build upon the material
            </li>
          </ul>

          <p className="text-neutral-400 mb-3">Conditions:</p>
          <ul className="list-disc pl-5 text-neutral-400 space-y-2">
            <li>
              <strong className="text-white">Attribution</strong> — proper credit must be given to
              FerrumC.
            </li>
          </ul>
        </section>

        <hr className="border-white/10 my-12" />

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
          <p className="text-neutral-400">
            For licensing questions, contact us through{' '}
            <a
              href="https://github.com/ferrumc-rs/ferrumc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 underline"
            >
              GitHub
            </a>
            ,{' '}
            <a
              href="https://discord.gg/qT5J8EMjwk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 underline"
            >
              Discord
            </a>{' '}
            or open an issue in the repository.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
