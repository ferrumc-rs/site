'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ImageWithFallback({ src, alt }: { src: string | Blob; alt: string }) {
  const [hasError, setHasError] = useState(false);

  const imageSrc = typeof src === 'string' ? src : URL.createObjectURL(src);

  if (hasError) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center my-8">
        <p className="text-neutral-400">Failed to load image</p>
        {alt && <p className="text-neutral-500 text-sm mt-2">{alt}</p>}
      </div>
    );
  }

  return (
    <div className="my-8 w-full">
      <Image
        src={imageSrc}
        alt={alt || ''}
        width={1200}
        height={675}
        className="rounded-lg border border-white/10 w-full h-auto"
        onError={() => setHasError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}
