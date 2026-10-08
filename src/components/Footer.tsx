import React from 'react';
import { socialLinks } from '../data/socialLinks';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, GfgIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (id: string) => {
    switch (id) {
      case 'github': return <GithubIcon className="w-4 h-4" />;
      case 'linkedin': return <LinkedinIcon className="w-4 h-4" />;
      case 'leetcode': return <LeetCodeIcon className="w-4 h-4" />;
      case 'geeksforgeeks': return <GfgIcon className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-zinc-800/80 light:border-zinc-200 bg-[#070707] light:bg-slate-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-800/50 light:border-zinc-200">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white light:text-zinc-900">
                {personalInfo.name}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                SDE
              </span>
            </div>
            <p className="text-sm text-zinc-400 light:text-zinc-600 max-w-md">
              {personalInfo.title} • {personalInfo.positioning}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 light:text-zinc-700 bg-zinc-900/80 light:bg-zinc-100 hover:text-white light:hover:text-zinc-900 hover:bg-zinc-800 light:hover:bg-zinc-200 border border-zinc-800 light:border-zinc-300 transition-all shadow-sm hover:scale-105"
                aria-label={link.name}
              >
                {getIcon(link.id)}
                <span>{link.name}</span>
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-zinc-900 bg-zinc-900/80 light:bg-zinc-100 hover:bg-zinc-800 light:hover:bg-zinc-200 border border-zinc-800 light:border-zinc-300 transition-all focus:outline-none"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 light:text-zinc-600">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with React, TypeScript and curiosity.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
