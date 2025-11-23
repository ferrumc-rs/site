interface DockerCardProps {
  dockerTag?: string;
}

export default function DockerCard({ dockerTag = "latest" }: DockerCardProps) {
  const dockerPullCommand = `docker pull ferrumc/ferrumc:${dockerTag}`;
  const dockerRunCommand = `docker run -p 25565:25565 ferrumc/ferrumc:${dockerTag}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl">🐳</div>
        <div>
          <h3 className="text-lg font-semibold">Docker</h3>
          <p className="text-sm text-neutral-400">Recommended for all platforms</p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-neutral-400 block mb-1">Pull the image:</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-black/30 rounded px-3 py-2 text-sm font-mono overflow-x-auto">
              {dockerPullCommand}
            </code>
            <button
              onClick={() => copyToClipboard(dockerPullCommand)}
              className="px-3 py-2 rounded bg-white/10 hover:bg-white/15 transition-colors text-sm"
              aria-label="Copy pull command"
            >
              📋
            </button>
          </div>
        </div>

        <div>
          <label className="text-xs text-neutral-400 block mb-1">Run the container:</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-black/30 rounded px-3 py-2 text-sm font-mono overflow-x-auto">
              {dockerRunCommand}
            </code>
            <button
              onClick={() => copyToClipboard(dockerRunCommand)}
              className="px-3 py-2 rounded bg-white/10 hover:bg-white/15 transition-colors text-sm"
              aria-label="Copy run command"
            >
              📋
            </button>
          </div>
        </div>
      </div>

      <a
        href="https://hub.docker.com/r/ferrumc/ferrumc"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-sm text-orange-500 hover:text-orange-400"
      >
        View on Docker Hub →
      </a>
    </div>
  );
}
