import { Metadata } from 'next';
import GradientText from '@/components/text/gradient-text';
import Header from '@/components/header';
import Footer from '@/components/footer';

const SITE_URL = 'https://ferrumc.com';

export const metadata: Metadata = {
  title: 'Contributing | FerrumC - Join Our Development',
  description:
    'Learn how to contribute to FerrumC. Find our pull request process, coding guidelines, branch naming conventions, and project structure for contributing to our Rust Minecraft server.',

  keywords: [
    'ferrumc contributing',
    'open source contribution',
    'rust development',
    'minecraft server development',
    'github contribution',
    'coding guidelines',
  ],

  alternates: {
    canonical: `${SITE_URL}/dev/contributing`,
  },

  openGraph: {
    type: 'website',
    url: `${SITE_URL}/dev/contributing`,
    title: 'Contributing | FerrumC',
    description: 'Learn how to contribute to FerrumC and join our development community.',
    siteName: 'FerrumC',
  },

  twitter: {
    card: 'summary',
    title: 'Contributing | FerrumC',
    description: 'Learn how to contribute to FerrumC and join our development community.',
  },
};

export default function Contributing() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Contributing to FerrumC',
    description: 'Guidelines and best practices for contributing to the FerrumC project',
    url: `${SITE_URL}/dev/contributing`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-4xl mx-auto shadow-lg rounded-xl p-8">
        <article>
          <header>
            <h1 className="text-4xl font-bold mb-6">Contributing</h1>
            <p className="mb-4">
              When contributing to this repository, you&#39;ll have more luck with getting PRs
              approved if you come chat with us in the Discord server and let us know about what you
              are fixing/adding. Keep in mind that clippy, rustfmt and cargo-audit are enforced on
              CI, so make sure your code passes these checks.
            </p>
          </header>

          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Pull Request Process</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                Make sure all tests and lints pass. PRs that don&#39;t pass CI will be rejected if
                your code is the cause of the failing tests/lints.
              </li>
              <li>Make sure all needed files are also included and not using absolute paths.</li>
              <li>
                Include a sufficient explanation of your PR. What is it adding/fixing, why does this
                feature need to be added/fixed, who have you discussed this with, etc. If these
                questions were answered in a conversation on Discord, mention who you talked with
                and what consensus was reached.
              </li>
              <li>Check again that tests pass.</li>
              <li>Check a 3rd time.</li>
              <li>
                Check that Clippy passes with no issues:{' '}
                <GradientText>cargo clippy --all-targets -- -Dwarnings</GradientText>
              </li>
              <li>
                Check that Rustfmt passes: <GradientText>cargo fmt --all -- --check</GradientText>
              </li>
              <li>
                Check that Cargo-audit passes: <GradientText>cargo audit</GradientText>
              </li>
              <li>Submit PR.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Project Specific Guidelines</h2>
            <p className="mb-4">Just some rules to try to keep the repo nice and organized.</p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Branches</h3>

            <h4 className="text-xl font-semibold mt-4 mb-1 font-mono">master</h4>
            <p className="mb-3">
              This is the main branch. All PRs should be made to this branch. It contains completed
              features.
            </p>

            <h4 className="text-xl font-semibold mt-4 mb-1 font-mono">feature/feature-name</h4>
            <p className="mb-3">
              For developing a feature, branched off of <code>master</code>.
            </p>

            <h4 className="text-xl font-semibold mt-4 mb-1 font-mono">fix/fixed-thing</h4>
            <p className="mb-3">
              For fixing bugs, branched off of <code>master</code>.
            </p>

            <h4 className="text-xl font-semibold mt-4 mb-1 font-mono">rework/refactored-thing</h4>
            <p className="mb-3">
              Refactoring code. PR goes to <code>master</code>.
            </p>

            <h4 className="text-xl font-semibold mt-4 mb-1 font-mono">housekeeping</h4>
            <p className="mb-3">For repo-related updates such as README or CI updates.</p>

            <h4 className="text-xl font-semibold mt-4 mb-1 font-mono">docs</h4>
            <p className="mb-3">
              For documentation-only changes. Branched from <code>master</code>.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Project Layout</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto text-sm">
              <code>
                +---.etc | Non-code files <br />
                +---.github | GitHub specific files
                <br />
                +---assets | Assets for the Readme
                <br />
                +---scripts | Scripts for the project, usually python or bash
                <br />
                +---src | Source code
                <br />
                | +---bin | The main binary that stitches everything together
                <br />
                | +---lib | The libraries that provide the business logic
                <br />
                | | +---adapters | Adapters and parsers for data formats
                <br />
                | | +---core | The core logic of the application
                <br />
                | | +---derive_macros | Derive macros. Split into directories for each macro
                <br />
                | | +---ecs | The ECS system
                <br />
                | | +---events | The event system
                <br />
                | | +---net | Networking code
                <br />
                | | +---plugins | Plugins interface
                <br />
                | | +---storage | Storage backend
                <br />
                | | +---utils | Utility functions
                <br />
                | | \---world | Code for interacting with the world
                <br />
                | \---tests | Unit tests
                <br />
              </code>
            </pre>

            <p className="mt-4">
              If you add a new directory, please add it to the above list along with its purpose.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mt-6 mb-3"> Code Rules </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Tests that only generate/dump data must be <GradientText>#[ignore]</GradientText>d.
              </li>
              <li>No absolute paths.</li>
              <li>
                Avoid chaining <GradientText>../</GradientText>; use{' '}
                <GradientText>get_root_path()</GradientText> instead.
              </li>
              <li>
                No lazy <GradientText>unwrap()</GradientText>; prefer{' '}
                <GradientText>expect()</GradientText> with detailed messages.
              </li>
              <li>Avoid unnecessary cloning.</li>
              <li>
                Add new dependencies to the workspace <GradientText>Cargo.toml</GradientText>.
              </li>
              <li>Major features should be added as new crates.</li>
              <li>
                New sub-crates must define <GradientText>thiserror</GradientText>-based error types.
              </li>
              <li>Use Clippy to ensure no lint errors.</li>
              <li>Use Rustfmt to ensure formatting.</li>
              <li>
                Prefer <GradientText>#[expect]</GradientText> over{' '}
                <GradientText>#[allow]</GradientText>.
              </li>
              <li>
                Use <GradientText>#[cfg(test)]</GradientText> where appropriate.
              </li>
              <li>Add documentation where applicable.</li>
              <li>Unsafe code must be documented and justified.</li>
              <li>
                No IDE folders like <GradientText>.vscode</GradientText> or{' '}
                <GradientText>.idea</GradientText>.
              </li>
              <li>Add tests for new features.</li>
              <li>Add tests that reproduce bugs when fixing them.</li>
              <li>Your code must be documented.</li>
              <li>Your code must contain required tests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Notes on Formatting</h2>
            <p className="mb-4">
              Automatic formatting is highly recommended to avoid large clippy fixes at the end of
              development.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
