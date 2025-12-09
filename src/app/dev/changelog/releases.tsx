import { GitHubRelease } from '@/app/lib/types';

export async function getReleases(): Promise<GitHubRelease[]> {
  const response = await fetch('https://api.github.com/repos/ferrumc-rs/ferrumc/releases', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    console.error('Error fetching releases:', response.json());
    return [];
  }

  return response.json();
}
