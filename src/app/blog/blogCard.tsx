import { Blog } from '@/app/lib/types';
import { BsPinAngle } from 'react-icons/bs';

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div
      className="
      p-6 rounded-xl border border-white/10
      bg-white/5 backdrop-blur-sm
      hover:bg-white/10 transition
      hover:-translate-y-1 hover:shadow-xl
      cursor-pointer
    "
    >
      <div className="flex flex-col gap-3">
        {/* Pinned */}

        {blog.pinned && (
          <div className="flex flex-row gap-3 align-items-center items-center bg-white/5 border-white/10 rounded-xl w-fit px-4 -my-2">
            <BsPinAngle size={10} />
            <div className="text-sm">Pinned Post</div>
          </div>
        )}

        {/* Title */}
        <h2 className="text-2xl font-semibold text-white">{blog.title}</h2>

        {/* Date + Published Status */}
        <div className="flex items-center gap-3 text-sm text-neutral-400">
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-sm leading-relaxed">{blog.description}</p>

        {/* Read More */}
        <div className="mt-2">
          <a
            href={'/blog/' + blog.markdown_path}
            className="inline-block text-orange-400 font-semibold
              hover:text-orange-300 hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
