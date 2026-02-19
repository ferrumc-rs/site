import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Blog } from "./types";

const blogsDirectory = path.join(process.cwd(), "public", "blogs");

export function getAllBlogs(): Blog[] {
  if (!fs.existsSync(blogsDirectory)) return [];

  const files = fs
    .readdirSync(blogsDirectory)
    .filter((f) => f.endsWith(".md"));

  const blogs = files
    .map((filename) => {
      const filePath = path.join(blogsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContents);

      return {
        title: data.title ?? "",
        description: data.description ?? "",
        author: data.author ?? "",
        authorUrl: data.authorUrl ?? undefined,
        date: data.date ? String(data.date) : "",
        published: data.published ?? false,
        pinned: data.pinned ?? false,
        slug: filename.replace(/\.md$/, ""),
      } satisfies Blog;
    })
    .filter((blog) => blog.published);

  blogs.sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return blogs;
}

export function getBlogContent(slug: string): string {
  const filePath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContents);
  return content;
}
