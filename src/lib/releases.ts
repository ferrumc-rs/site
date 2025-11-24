import { getMockReleases } from "./mockReleases";

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

export async function getAllReleases(): Promise<Release[]> {
  return await fetchReleases();
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
