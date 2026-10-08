import React, { useState, useEffect } from 'react';
import { Search, FolderGit2, Cpu, Mail, Download, Code2, Sun, Terminal, X, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onToggleTheme,
  onOpenTerminal,
  onOpenResume
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled externally or trigger
        }
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (selector: string) => {
    onClose();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands = [
    {
      id: 'projects',
      title: 'Go to Projects',
      subtitle: 'WorkLife Plus, IPO Insight, CompressIt',
      icon: <FolderGit2 className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo('#projects')
    },
    {
      id: 'skills',
      title: 'Go to Technical Skills',
      subtitle: 'Languages, React, Node, AWS, Databases',
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      action: () => navigateTo('#skills')
    },
    {
      id: 'dsa',
      title: 'Go to Problem Solving / DSA',
      subtitle: '500+ LeetCode & GFG problems solved',
      icon: <Code2 className="w-4 h-4 text-amber-400" />,
      action: () => navigateTo('#engineering')
    },
    {
      id: 'contact',
      title: 'Go to Contact',
      subtitle: 'Send a message or recruiter inquiry',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => navigateTo('#contact')
    },
    {
      id: 'resume',
      title: 'Download / View Resume',
      subtitle: 'Official PDF curriculum vitae',
      icon: <Download className="w-4 h-4 text-purple-400" />,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/adarsh232805',
      icon: <GithubIcon className="w-4 h-4 text-zinc-300" />,
      action: () => {
        window.open('https://github.com/adarsh232805', '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/adarsh-shekhar-singh',
      icon: <LinkedinIcon className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open('https://www.linkedin.com/in/adarsh-shekhar-singh/', '_blank');
        onClose();
      }
    },
    {
      id: 'leetcode',
      title: 'Open LeetCode Profile',
      subtitle: 'leetcode.com/u/ADARSH2328',
      icon: <Code2 className="w-4 h-4 text-amber-500" />,
      action: () => {
        window.open('https://leetcode.com/u/ADARSH2328/', '_blank');
        onClose();
      }
    },
    {
      id: 'terminal',
      title: 'Launch Developer Terminal',
      subtitle: 'Interactive CLI Easter egg',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: 'theme',
      title: 'Toggle Theme',
      subtitle: 'Switch between Dark and Light aesthetics',
      icon: <Sun className="w-4 h-4 text-amber-400" />,
      action: () => {
        onToggleTheme();
        onClose();
      }
    }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-start justify-center pt-20 sm:pt-28 px-4 animate-fadeIn">
      <div className="w-full max-w-xl bg-[#0f0f14] light:bg-white rounded-2xl border border-zinc-800 light:border-zinc-300 shadow-2xl overflow-hidden">
        
        {/* Search Input */}
        <div className="p-4 border-b border-zinc-800 light:border-zinc-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section..."
            autoFocus
            className="flex-1 bg-transparent text-sm text-zinc-100 light:text-zinc-900 placeholder-zinc-500 light:placeholder-zinc-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-zinc-500 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-800 light:bg-zinc-200 text-zinc-400 light:text-zinc-600">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-xs text-zinc-500">
              No matching commands found. Try "Projects", "Skills", "GitHub" or "Resume".
            </div>
          ) : (
            filteredCommands.map(cmd => (
              <button
                key={cmd.id}
                onClick={cmd.action}
                className="w-full p-2.5 rounded-xl flex items-center justify-between text-left hover:bg-zinc-800/60 light:hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 light:bg-slate-200/80 border border-zinc-800 light:border-zinc-300">
                    {cmd.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-200 light:text-zinc-900 group-hover:text-purple-400 transition-colors">
                      {cmd.title}
                    </div>
                    <div className="text-[11px] text-zinc-500 light:text-zinc-600">
                      {cmd.subtitle}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-600 light:text-zinc-400 group-hover:text-purple-400 transition-colors" />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-zinc-950/80 light:bg-slate-50 border-t border-zinc-800 light:border-zinc-200 flex items-center justify-between text-[11px] font-mono text-zinc-500 light:text-zinc-600 px-4">
          <span>Navigate with mouse or click</span>
          <span>{personalInfo.firstName}’s Portfolio Palette</span>
        </div>

      </div>
    </div>
  );
};
