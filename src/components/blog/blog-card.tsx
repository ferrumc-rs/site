"use client";

import Link from "next/link";
import Image from "next/image";
import { Pin } from "lucide-react";
import { motion } from "framer-motion";
import type { Blog } from "@/lib/types";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/blog/${blog.slug}`} className="group block">
        <article className="rounded-xl bg-white/[0.03] backdrop-blur-sm border border-neutral-800/50 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700/50">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              {blog.title}
            </h2>
            {blog.pinned && (
              <span className="shrink-0 mt-1 text-ferrum/50" title="Pinned post">
                <Pin className="w-4 h-4" />
              </span>
            )}
          </div>

          <p className="mt-3 text-neutral-400 leading-relaxed">
            {blog.description}
          </p>

          {/* Bottom row */}
          <div className="flex items-center justify-between mt-6 pt-5 border-t border-neutral-800/40">
            <div className="flex items-center gap-3">
              <Image
                src={`https://github.com/${blog.author}.png`}
                alt={blog.author}
                width={24}
                height={24}
                className="rounded-full"
              />
              {blog.authorUrl ? (
                <a
                  href={blog.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {blog.author}
                </a>
              ) : (
                <span className="text-sm text-neutral-500">{blog.author}</span>
              )}
              <span className="text-neutral-700">&middot;</span>
              <span className="text-sm text-neutral-500">
                {formatDate(blog.date)}
              </span>
            </div>

            <span className="text-sm font-medium text-ferrum group-hover:text-ferrum-amber transition-colors duration-200">
              Read more &rarr;
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
