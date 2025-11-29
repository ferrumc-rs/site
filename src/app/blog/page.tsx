import Header from '@/components/header';
import Footer from '@/components/footer';
import GradientText from '@/components/text/gradient-text';
import Link from 'next/link';
import BlogCard from '@/app/blog/blogCard';
import { getAllBlogs } from '@/app/blog/blogParser';

export default function Blog() {
  const blogs = getAllBlogs();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* If blogs exist */}
        {blogs.length > 0 ? (
          <section className="mx-auto max-w-4xl px-6 py-12">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Recent <GradientText>Blogs</GradientText>
            </h1>

            <div className="flex flex-col gap-6">
              {blogs
                .filter((blog) => blog.published)
                .map((blog) => (
                  <BlogCard key={blog.title} blog={blog} />
                ))}
            </div>
          </section>
        ) : (
          <section className="pt-12 pb-8 flex items-center overflow-hidden bg-[radial-gradient(80%_60%_at_10%_-10%,rgba(234,88,12,0.15),transparent_60%),radial-gradient(80%_60%_at_100%_0%,rgba(234,88,12,0.12),transparent_60%)] before:content-[''] before:inset-0 before:pointer-events-none before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] before:bg-[length:24px_24px] before:[mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent_70%)]">
            <div className="mx-auto max-w-[1100px] px-5 text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Our Blog is <GradientText>Coming Soon</GradientText>
              </h1>

              <p className="text-neutral-400 text-lg md:text-xl mt-6 mb-8 max-w-2xl mx-auto">
                We&#39;re crafting something special for you! Our blog is currently being built and
                will be launching soon with exciting content about FerrumC.
              </p>

              <div className="mb-12 flex gap-3 justify-center">
                <Link
                  className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-500 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  href="/"
                >
                  Back to Home
                </Link>
                <Link
                  className="inline-flex items-center rounded-lg bg-white/10 px-6 py-3 font-semibold hover:bg-white/15 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  href="https://github.com/ferrumc-rs/ferrumc"
                >
                  View on GitHub
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
