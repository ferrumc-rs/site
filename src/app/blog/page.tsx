import Header from '@/components/header';
import Footer from '@/components/footer';
import GradientText from '@/components/text/gradient-text';
import Link from 'next/link';
import BlogCard from '@/app/blog/blogCard';
import { getAllBlogs } from '@/app/blog/blogParser';
import { Metadata } from 'next';

const SITE_URL = 'https://ferrumc.com';

export const metadata: Metadata = {
  title: 'Blog | FerrumC - High-Performance Minecraft Server',
  description:
    'Read the latest articles about FerrumC, a high-performance Minecraft server implementation written in Rust. Learn about server optimization, game development, and more.',

  keywords: [
    'minecraft blog',
    'ferrumc',
    'rust programming',
    'game server development',
    'minecraft server',
    'server performance',
    'minecraft optimization',
    'game development blog',
  ],

  alternates: {
    canonical: `${SITE_URL}/blog`,
  },

  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },

  openGraph: {
    type: 'website',
    url: `${SITE_URL}/blog`,
    title: 'Blog | FerrumC',
    description:
      'Read the latest articles about FerrumC - High-performance Minecraft server written in Rust.',
    siteName: 'FerrumC',
    images: [
      {
        url: `${SITE_URL}/images/in_game.png`,
        width: 1200,
        height: 630,
        alt: 'FerrumC Blog',
      },
    ],
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Blog | FerrumC',
    description:
      'Read the latest articles about FerrumC - High-performance Minecraft server written in Rust.',
    images: [`${SITE_URL}/images/in_game.png`],
    site: '@ferrumc',
    creator: '@ferrumc',
  },
};

export default function Blog() {
  const blogs = getAllBlogs();
  const publishedBlogs = blogs.filter((blog) => blog.published);
  const hasBlogs = publishedBlogs.length > 0;

  const jsonLd = hasBlogs
    ? {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'FerrumC Blog',
        description:
          'Articles about FerrumC - A high-performance Minecraft server implementation written in Rust',
        url: `${SITE_URL}/blog`,
        publisher: {
          '@type': 'Organization',
          name: 'FerrumC',
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.png`,
          },
        },
        blogPost: publishedBlogs.map((blog) => ({
          '@type': 'BlogPosting',
          headline: blog.title,
          description: blog.description,
          datePublished: blog.date,
          author: {
            '@type': 'Person',
            name: blog.author,
          },
          url: `${SITE_URL}/blog/${blog.markdown_path}`,
        })),
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'FerrumC Blog - Coming Soon',
        description: 'The FerrumC blog is coming soon with exciting content.',
        url: `${SITE_URL}/blog`,
      };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1">
        {hasBlogs ? (
          <section className="mx-auto max-w-4xl px-6 py-12">
            <header className="mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Recent <GradientText>Blogs</GradientText>
              </h1>
              <p className="text-neutral-400 text-lg">
                Insights, updates, and articles about FerrumC and Minecraft server development
              </p>
            </header>

            <div className="flex flex-col gap-6" role="list">
              {publishedBlogs.map((blog) => (
                <BlogCard key={blog.markdown_path} blog={blog} />
              ))}
            </div>
          </section>
        ) : (
          <section
            className="pt-12 pb-8 flex items-center overflow-hidden bg-[radial-gradient(80%_60%_at_10%_-10%,rgba(234,88,12,0.15),transparent_60%),radial-gradient(80%_60%_at_100%_0%,rgba(234,88,12,0.12),transparent_60%)] before:content-[''] before:inset-0 before:pointer-events-none before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] before:bg-[length:24px_24px] before:[mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent_70%)]"
            aria-label="Blog coming soon"
          >
            <div className="mx-auto max-w-[1100px] px-5 text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Our Blog is <GradientText>Coming Soon</GradientText>
              </h1>

              <p className="text-neutral-400 text-lg md:text-xl mt-6 mb-8 max-w-2xl mx-auto">
                We&#39;re crafting something special for you! Our blog is currently being built and
                will be launching soon with exciting content about FerrumC.
              </p>

              <nav className="mb-12 flex gap-3 justify-center" aria-label="Navigation options">
                <Link
                  className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-500 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  href="/"
                >
                  Back to Home
                </Link>

                <Link
                  className="inline-flex items-center rounded-lg bg-white/10 px-6 py-3 font-semibold hover:bg-white/15 transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  href="https://github.com/ferrumc-rs/ferrumc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Link>
              </nav>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
