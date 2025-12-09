import { Blog } from '@/app/lib/types';
import { BsPinAngle } from 'react-icons/bs';
import Image from 'next/image';

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div
      className="
      p-6 rounded-lg border border-gray-800/70
      bg-surface/50 backdrop-blur-sm
      hover:bg-surface/70 transition
      hover:-translate-y-1 hover:shadow-xl
      cursor-pointer
    "
    >
      <div className="flex flex-col gap-3">
        {/* Pinned */}
        {blog.pinned && (
          <div className="flex flex-row gap-3 align-items-center items-center bg-surface/50 border border-gray-800 rounded-lg w-fit px-4 -my-2">
            <BsPinAngle size={10} className="text-molten" />
            <div className="text-sm font-body text-muted">Pinned Post</div>
          </div>
        )}

        {/* Title */}
        <h2 className="text-2xl font-headline font-semibold text-main tracking-tight">
          {blog.title}
        </h2>

        {/* Date + Author */}
        <div className="flex items-center gap-3 text-sm text-muted font-body">
          <span className="flex items-center gap-2">
            {new Date(blog.date).toLocaleDateString()} -{' '}
            <Image
              src={'https://github.com/' + blog.author + '.png'}
              alt="profile picture"
              width={16}
              height={16}
              className="rounded-lg"
            />{' '}
            {blog.author}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed font-body">{blog.description}</p>

        {/* Read More */}
        <div className="mt-2">
          <a
            href={'/blog/' + blog.markdown_path}
            className="inline-block text-molten font-body font-semibold
              hover:text-rust hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
