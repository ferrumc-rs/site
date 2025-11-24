interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
    size: number;
  }>;
}

export interface ReleaseAsset {
  platform:
    | "docker"
    | "windows-x64"
    | "linux-x64"
    | "linux-arm64"
    | "macos-arm64";
  url: string;
  filename: string;
  size: number;
}

export interface Release {
  version: string;
  date: string;
  changelog: string;
  assets: ReleaseAsset[];
  dockerTag?: string;
}

const GITHUB_API = "https://api.github.com";
const REPO_OWNER = "ferrumc-rs";
const REPO_NAME = "ferrumc";

function detectPlatform(filename: string): ReleaseAsset["platform"] | null {
  const lower = filename.toLowerCase();

  // Match actual build matrix targets
  if (lower.includes("x86_64-pc-windows-msvc")) return "windows-x64";
  if (lower.includes("x86_64-unknown-linux-gnu")) return "linux-x64";
  if (lower.includes("aarch64-unknown-linux-gnu")) return "linux-arm64";
  if (lower.includes("aarch64-apple-darwin")) return "macos-arm64";

  return null;
}

function getMockReleases(): Release[] {
  return [
    {
      version: "v0.3.0",
      date: new Date("2024-03-15").toISOString(),
      changelog: `## What's New
- **Performance**: 40% faster chunk loading
- **Features**: Added support for custom dimensions
- **Improvements**: Better memory management
- **Bug Fixes**: Fixed player teleportation issues
- **Dependencies**: Updated to latest Rust nightly

## Breaking Changes
- Configuration format has changed, see migration guide

## Contributors
Thank you to all our contributors who made this release possible!`,
      assets: [
        {
          platform: "windows-x64",
          url: "#",
          filename: "ferrumc-v0.3.0-x86_64-pc-windows-msvc.exe",
          size: 15728640, // 15 MB
        },
        {
          platform: "linux-x64",
          url: "#",
          filename: "ferrumc-v0.3.0-x86_64-unknown-linux-gnu",
          size: 12582912, // 12 MB
        },
        {
          platform: "linux-arm64",
          url: "#",
          filename: "ferrumc-v0.3.0-aarch64-unknown-linux-gnu",
          size: 11534336, // 11 MB
        },
        {
          platform: "macos-arm64",
          url: "#",
          filename: "ferrumc-v0.3.0-aarch64-apple-darwin",
          size: 12582912, // 12 MB
        },
      ],
      dockerTag: "v0.3.0",
    },
    {
      version: "v0.2.5",
      date: new Date("2024-02-28").toISOString(),
      changelog: `## Highlights
- **New**: Redis support for cross-server communication
- **Security**: Enhanced authentication system
- **Logging**: Improved logging with structured output
- **UI**: Better console interface

## Bug Fixes
- Fixed memory leak in chunk caching
- Resolved connection timeout issues
- Fixed entity tracking bugs`,
      assets: [
        {
          platform: "windows-x64",
          url: "#",
          filename: "ferrumc-v0.2.5-x86_64-pc-windows-msvc.exe",
          size: 14680064,
        },
        {
          platform: "linux-x64",
          url: "#",
          filename: "ferrumc-v0.2.5-x86_64-unknown-linux-gnu",
          size: 11534336,
        },
        {
          platform: "linux-arm64",
          url: "#",
          filename: "ferrumc-v0.2.5-aarch64-unknown-linux-gnu",
          size: 10485760,
        },
        {
          platform: "macos-arm64",
          url: "#",
          filename: "ferrumc-v0.2.5-aarch64-apple-darwin",
          size: 11534336,
        },
      ],
      dockerTag: "v0.2.5",
    },
    {
      version: "v0.2.0",
      date: new Date("2024-02-01").toISOString(),
      changelog: `## Major Update
- **New**: Plugin system (experimental)
- **Config**: New YAML-based configuration
- **Worlds**: Multi-world support
- **Metrics**: Built-in Prometheus metrics

## Known Issues
- Plugin API is still experimental
- Some edge cases in world generation`,
      assets: [
        {
          platform: "windows-x64",
          url: "#",
          filename: "ferrumc-v0.2.0-x86_64-pc-windows-msvc.exe",
          size: 13631488,
        },
        {
          platform: "linux-x64",
          url: "#",
          filename: "ferrumc-v0.2.0-x86_64-unknown-linux-gnu",
          size: 10485760,
        },
        {
          platform: "macos-arm64",
          url: "#",
          filename: "ferrumc-v0.2.0-aarch64-apple-darwin",
          size: 10485760,
        },
      ],
      dockerTag: "v0.2.0",
    },
  ];
}

export async function fetchReleases(): Promise<Release[]> {
  // Use mock data if environment variable is set
  if (import.meta.env.USE_MOCK_DATA === "true") {
    console.log("Using mock release data");
    return getMockReleases();
  }
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "User-Agent": "FerrumC-Site",
    };

    // Use GH_TOKEN if available (in CI) to avoid rate limits
    if (import.meta.env.GH_TOKEN) {
      headers["Authorization"] = `Bearer ${import.meta.env.GH_TOKEN}`;
    }

    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/releases`,
      {
        headers,
      }
    );

    if (!response.ok) {
      console.warn(
        `GitHub API returned ${response.status}, using fallback data`
      );
      return getFallbackReleases();
    }

    const data: GitHubRelease[] = await response.json();

    return data.map((release) => {
      const assets: ReleaseAsset[] = release.assets
        .map((asset) => {
          const platform = detectPlatform(asset.name);
          if (!platform) return null;

          return {
            platform,
            url: asset.browser_download_url,
            filename: asset.name,
            size: asset.size,
          };
        })
        .filter((asset): asset is ReleaseAsset => asset !== null);

      return {
        version: release.tag_name,
        date: release.published_at,
        changelog: release.body || "No changelog available.",
        assets,
        dockerTag: release.tag_name,
      };
    });
  } catch (error) {
    console.error("Failed to fetch releases from GitHub:", error);
    return getFallbackReleases();
  }
}

export async function getLatestRelease(): Promise<Release | null> {
  const releases = await fetchReleases();
  return releases[0] || null;
}

function getFallbackReleases(): Release[] {
  return [
    {
      version: "v0.1.0",
      date: new Date().toISOString(),
      changelog: "Initial release - check GitHub for latest releases.",
      assets: [],
      dockerTag: "latest",
    },
  ];
}
