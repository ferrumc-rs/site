import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Download() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-12 pb-8 min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden bg-[radial-gradient(80%_60%_at_10%_-10%,rgba(255,107,53,0.15),transparent_60%),radial-gradient(80%_60%_at_100%_0%,rgba(255,107,53,0.12),transparent_60%)] before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] before:bg-[length:24px_24px] before:[mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent_70%)]"></section>

        {/* Contribute */}
        <section className="mx-auto max-w-[1100px] px-5 py-16 text-center">
          <h2 className="text-3xl font-headline font-extrabold tracking-tight">
            Want to start contributing?
          </h2>
          <p className="text-molten text-3xl font-headline font-extrabold mt-1 mb-5 tracking-tight">
            Check us out on GitHub
          </p>
          <a
            id="github"
            className="inline-flex items-center rounded-lg bg-surface px-5 py-3 font-body font-semibold text-main hover:bg-surface/80 border border-muted/20 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
