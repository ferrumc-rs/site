import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Blog } from '@/app/lib/types';

const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');

export function getAllBlogs(): Blog[] {
  try {
    const files = fs.readdirSync(blogsDirectory);

    return files
      .filter((file) => file.endsWith('.md'))
      .map((filename) => {
        const filePath = path.join(blogsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const { data } = matter(fileContent);
        const slug = filename.replace('.md', '');

        return {
          title: data.title ?? slug,
          description: data.description ?? '',
          date: data.date ?? 'Unknown',
          published: data.published ?? false,
          markdown_path: slug,
          pinned: data.pinned ?? false,
          author: data.author ?? '',
        } satisfies Blog;
      })
      .filter((b) => b.published)
      .sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;

        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  } catch {
    return [];
  }
}

export function getBlogContent(slug: string) {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const { content } = matter(fileContent);

  return {
    raw: content,
    html: marked(content),
  };
}
