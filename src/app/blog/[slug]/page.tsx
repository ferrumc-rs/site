import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { getAllBlogs, getBlogContent } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getAllBlogs().find((b) => b.slug === slug);
  if (!blog) return {};

  return {
    title: `${blog.title} — FerrumC`,
    description: blog.description,
    openGraph: {
      title: `${blog.title} — FerrumC`,
      description: blog.description,
      url: `/blog/${slug}`,
      siteName: "FerrumC",
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      images: [{ url: "/banner.jpg", width: 1200, height: 657 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} — FerrumC`,
      description: blog.description,
      images: ["/banner.jpg"],
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = getAllBlogs().find((b) => b.slug === slug);

  if (!blog) {
    return (
      <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-28 md:pt-44 md:pb-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-neutral-400 text-lg">Post not found.</p>
        </div>
      </section>
    );
  }

  const content = getBlogContent(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    datePublished: blog.date,
    author: {
      "@type": "Person",
      name: blog.author,
      ...(blog.authorUrl ? { url: blog.authorUrl } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "FerrumC",
      url: "https://ferrumc.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ferrumc.com/logo.png",
      },
    },
    url: `https://ferrumc.com/blog/${slug}`,
    image: "https://ferrumc.com/banner.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ferrumc.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-28 md:pt-44 md:pb-36">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-200 mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to all posts
          </Link>

          {/* Header */}
          <header className="mb-10">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {blog.title}
            </h1>
            <p className="text-neutral-400 leading-relaxed max-w-2xl mb-6">
              {blog.description}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={`https://github.com/${blog.author}.png`}
                alt={blog.author}
                width={32}
                height={32}
                className="rounded-full"
              />
              {blog.authorUrl ? (
                <a
                  href={blog.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-300 font-medium hover:text-white transition-colors"
                >
                  {blog.author}
                </a>
              ) : (
                <span className="text-sm text-neutral-300 font-medium">
                  {blog.author}
                </span>
              )}
              <span className="text-neutral-700">&middot;</span>
              <span className="text-sm text-neutral-500">
                {formatDate(blog.date)}
              </span>
            </div>
          </header>

          {/* Divider */}
          <div className="h-px bg-neutral-800/50 mb-10" />

          {/* Content */}
          <div>
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mt-12 mb-5">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-10 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-display text-lg font-bold text-white mt-8 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-neutral-300 text-lg leading-relaxed mb-5">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ferrum hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-ferrum/50 pl-5 my-8 text-neutral-400 italic">
                    {children}
                  </blockquote>
                ),
                code: ({ children, className }) => {
                  const isBlock = className?.includes("language-");
                  if (isBlock) {
                    return (
                      <code className="block text-sm font-mono text-neutral-300">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="text-ferrum-amber bg-white/5 rounded px-1.5 py-0.5 text-sm font-mono">
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-white/5 border border-white/10 rounded-lg p-5 my-6 overflow-x-auto">
                    {children}
                  </pre>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 mb-5">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-neutral-300 text-lg space-y-2 mb-5">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="flex items-start gap-3 text-neutral-300 text-lg leading-relaxed">
                    <span className="mt-[10px] block h-1.5 w-1.5 shrink-0 rounded-full bg-ferrum/60" />
                    <span>{children}</span>
                  </li>
                ),
                hr: () => (
                  <hr className="border-none h-px bg-neutral-800/50 my-10" />
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="text-neutral-300 italic">{children}</em>
                ),
                img: ({ src, alt }) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={src}
                    alt={alt ?? ""}
                    className="rounded-lg border border-white/10 my-8 max-w-full"
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          {/* Bottom back link */}
          <div className="mt-16 pt-8 border-t border-neutral-800/40">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to all posts
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
