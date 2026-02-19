import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";

export const metadata: Metadata = {
  title: "Blog — FerrumC",
  description:
    "Updates, dev logs, and behind-the-scenes from the FerrumC project.",
  openGraph: {
    title: "Blog — FerrumC",
    description:
      "Updates, dev logs, and behind-the-scenes from the FerrumC project.",
    url: "/blog",
    siteName: "FerrumC",
    type: "website",
    images: [{ url: "/banner.jpg", width: 1200, height: 657 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — FerrumC",
    description:
      "Updates, dev logs, and behind-the-scenes from the FerrumC project.",
    images: ["/banner.jpg"],
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "FerrumC Blog",
    description:
      "Updates, dev logs, and behind-the-scenes from the FerrumC project.",
    url: "https://ferrumc.com/blog",
    publisher: {
      "@type": "Organization",
      name: "FerrumC",
      url: "https://ferrumc.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ferrumc.com/logo.png",
      },
    },
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.description,
      datePublished: blog.date,
      author: {
        "@type": "Person",
        name: blog.author,
        ...(blog.authorUrl ? { url: blog.authorUrl } : {}),
      },
      url: `https://ferrumc.com/blog/${blog.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative min-h-screen pt-36 pb-20 sm:pt-40 sm:pb-28 md:pt-44 md:pb-36">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16 sm:mb-20">
            <span className="text-sm font-medium tracking-wider text-ferrum uppercase">
              Blog
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              From the team,{" "}
              <span className="text-neutral-500">unfiltered.</span>
            </h1>
            <p className="mt-4 text-neutral-400 max-w-lg">
              Dev logs, deep dives, and the story behind building a Minecraft
              server in Rust.
            </p>
          </div>

          {/* Blog list */}
          {blogs.length > 0 ? (
            <div className="space-y-5">
              {blogs.map((blog, i) => (
                <BlogCard key={blog.slug} blog={blog} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-400 text-lg font-display font-bold">
                Coming soon.
              </p>
              <p className="text-neutral-500 text-sm mt-3">
                We&apos;re working on some posts. Check back later.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
