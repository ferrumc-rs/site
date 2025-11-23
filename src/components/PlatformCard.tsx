import type { Release } from "../lib/releases";

interface PlatformCardProps {
  platform: string;
  icon: string;
  assets: Release["assets"];
  platformKey: Release["assets"][number]["platform"];
}

export default function PlatformCard({ platform, icon, assets, platformKey }: PlatformCardProps) {
  const asset = assets.find((a) => a.platform === platformKey);

  if (!asset) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center opacity-50">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{platform}</h3>
        <p className="text-sm text-neutral-400 mb-4">Coming soon</p>
      </div>
    );
  }

  const sizeInMB = (asset.size / (1024 * 1024)).toFixed(1);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{platform}</h3>
      <p className="text-xs text-neutral-400 mb-4">{sizeInMB} MB</p>
      <a
        href={asset.url}
        download
        className="inline-flex items-center justify-center w-full rounded-lg bg-orange-600 px-4 py-2 font-semibold hover:bg-orange-500 transition-colors"
      >
        Download
      </a>
      <p className="text-xs text-neutral-500 mt-2 truncate" title={asset.filename}>
        {asset.filename}
      </p>
    </div>
  );
}
