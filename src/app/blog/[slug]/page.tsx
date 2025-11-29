import { getAllBlogs, getBlogContent } from '../blogParser';
import { Blog } from '@/app/lib/types';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blogs: Blog[] = getAllBlogs();
  const blog = blogs.find((b) => b.markdown_path === slug);

  if (!blog) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
            <p className="text-neutral-400 mb-8">
              The blog post you&#39;re looking for doesn&#39;t exist.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-500 transition"
            >
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const content = getBlogContent(blog.markdown_path);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-6 py-12">
          {/* Blog Header */}
          <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>

            <div className="flex items-center gap-4 text-neutral-400">
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {blog.description && (
              <p className="text-xl text-neutral-300 mt-6">{blog.description}</p>
            )}
          </header>

          {/* Blog Content with react-markdown */}
          <div className="markdown-content">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold text-white mt-12 mb-6">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-white mt-12 mb-6">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-xl font-bold text-white mt-6 mb-3">{children}</h4>
                ),
                p: ({ children }) => (
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="text-neutral-300 text-lg mb-6 ml-6 list-none space-y-3">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="text-neutral-300 text-lg mb-6 ml-6 list-decimal space-y-3">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-neutral-300 flex items-start">
                    <span className="text-orange-400 mr-2 mt-0.5">•</span>
                    <span className="flex-1">{children}</span>
                  </li>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-orange-400 hover:text-orange-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">{children}</strong>
                ),
                em: ({ children }) => <em className="text-neutral-200 italic">{children}</em>,
                code: ({ children, className }) => {
                  // Check if this is an inline code or code block
                  const isInline = !className;
                  return isInline ? (
                    <code className="text-orange-400 bg-white/5 px-1.5 py-0.5 rounded text-sm">
                      {children}
                    </code>
                  ) : (
                    <code className={className}>{children}</code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto my-6 text-neutral-300">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-orange-500 pl-4 my-6 text-neutral-400 italic">
                    {children}
                  </blockquote>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-lg border border-white/10 my-8 w-full"
                  />
                ),
              }}
            >
              {content?.raw ?? 'No content available'}
            </ReactMarkdown>
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition"
            >
              ← Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
