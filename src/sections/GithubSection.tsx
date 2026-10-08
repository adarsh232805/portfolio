import React, { useState, useEffect } from 'react';
import { fetchGitHubRepos, fetchGitHubProfile, GitHubRepo, GitHubProfile } from '../utils/githubApi';
import { ExternalLink, Star, GitFork, BookOpen } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

export const GithubSection: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const [prof, repoList] = await Promise.all([
          fetchGitHubProfile('adarsh232805'),
          fetchGitHubRepos('adarsh232805')
        ]);
        if (isMounted) {
          setProfile(prof);
          setRepos(repoList);
        }
      } catch {
        // Handled internally in githubApi fallback
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="github" className="py-24 border-t border-zinc-800/80 light:border-zinc-200 relative bg-[#08080b] light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <GithubIcon className="w-3.5 h-3.5" />
              <span>Code & Open Source</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-950 tracking-tight">
              GitHub Repositories & Activity
            </h2>
            <p className="text-zinc-400 light:text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
              Public repositories, algorithm implementations, and full-stack software development codebases.
            </p>
          </div>

          <a
            href="https://github.com/adarsh232805"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-zinc-900 light:bg-slate-100 hover:bg-zinc-800 light:hover:bg-slate-200 light:text-zinc-900 border border-zinc-800 light:border-zinc-300 transition-colors w-fit shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore my GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Profile Card Highlight */}
        {profile && (
          <div className="mb-8 p-6 rounded-3xl bg-zinc-900/50 light:bg-white border border-zinc-800 light:border-zinc-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <img
                src={profile.avatar_url}
                alt={profile.login}
                className="w-14 h-14 rounded-2xl border-2 border-purple-500/30 object-cover"
              />
              <div>
                <h3 className="text-base font-bold text-white light:text-zinc-950 flex items-center gap-2 justify-center sm:justify-start">
                  <span>@{profile.login}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </h3>
                <p className="text-xs text-zinc-400 light:text-zinc-600 mt-0.5">
                  Verified public GitHub developer account
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-zinc-950/60 light:bg-slate-100 border border-zinc-800/80 light:border-zinc-300 text-center">
                <span className="text-zinc-500 text-[10px] uppercase block">Public Repos</span>
                <span className="text-white light:text-zinc-900 font-bold text-sm">{profile.public_repos}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950/60 light:bg-slate-100 border border-zinc-800/80 light:border-zinc-300 text-center">
                <span className="text-zinc-500 text-[10px] uppercase block">Followers</span>
                <span className="text-white light:text-zinc-900 font-bold text-sm">{profile.followers}</span>
              </div>
            </div>
          </div>
        )}

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-zinc-900/30 light:bg-white border border-zinc-800 light:border-zinc-200 hover:border-purple-500/40 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono text-zinc-400 light:text-zinc-600">
                      Public Repository
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-purple-400 transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white light:text-zinc-950 group-hover:text-purple-300 transition-colors break-words">
                  {repo.name}
                </h3>

                <p className="text-xs text-zinc-400 light:text-zinc-600 line-clamp-2 leading-relaxed">
                  {repo.description || 'Full-stack codebase and algorithms implementation.'}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-800/60 light:border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-500 light:text-zinc-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{repo.language || 'JavaScript'}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
