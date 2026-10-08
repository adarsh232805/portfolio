export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
}

export const fallbackRepositories: GitHubRepo[] = [
  {
    id: 1,
    name: 'worklife-balance-app_final',
    description: 'Productivity management web app with JWT authentication, RBAC, and analytics.',
    html_url: 'https://github.com/adarsh232805/worklife-balance-app_final',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2025-03-01T00:00:00Z'
  },
  {
    id: 2,
    name: 'ipo-fullstack-app',
    description: 'Dynamic IPO data platform with real-time financial tracking and server-side caching.',
    html_url: 'https://github.com/adarsh232805/ipo-fullstack-app',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2025-02-15T00:00:00Z'
  },
  {
    id: 3,
    name: 'javascript',
    description: 'Advanced JavaScript implementations, algorithmic patterns, and web engineering exercises.',
    html_url: 'https://github.com/adarsh232805/javascript',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2025-01-20T00:00:00Z'
  },
  {
    id: 4,
    name: 'react',
    description: 'Production React component architectures, custom hooks, and state patterns.',
    html_url: 'https://github.com/adarsh232805/react',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2025-01-10T00:00:00Z'
  }
];

export async function fetchGitHubProfile(username: string): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    if (!res.ok) return fallbackRepositories;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallbackRepositories;
  } catch {
    return fallbackRepositories;
  }
}
