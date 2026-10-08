import React, { useState } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { Theme } from '../types';
import { Sun, Moon, Terminal, Command, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenCommandPalette,
  onOpenTerminal,
  onOpenResume
}) => {
  const { progress, activeSection } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Engineering', href: '#engineering', id: 'engineering' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-3 pb-3">
        <div className="max-w-7xl mx-auto backdrop-blur-xl bg-[#09090b]/80 light:bg-white/80 border border-[#27272a]/60 light:border-slate-200/80 rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xl transition-all duration-300">
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            aria-label="Adarsh Shekhar Singh - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#0a0a0c] light:bg-white rounded-[7px] flex items-center justify-center">
                <span className="text-xs font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  AS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-100 light:text-zinc-900 tracking-tight group-hover:text-purple-400 transition-colors">
                {personalInfo.firstName}
              </span>
              <span className="text-[10px] text-zinc-500 light:text-zinc-600 uppercase font-mono tracking-wider -mt-1 hidden sm:block">
                Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white light:text-zinc-950 bg-white/10 light:bg-zinc-200/80 shadow-sm'
                      : 'text-zinc-400 light:text-zinc-700 hover:text-zinc-100 light:hover:text-zinc-950 hover:bg-white/5 light:hover:bg-zinc-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Utilities */}
          <div className="flex items-center gap-2">
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden md:flex items-center gap-1.5 text-xs text-zinc-400 light:text-zinc-700 bg-zinc-900/90 light:bg-zinc-100 hover:bg-zinc-800 light:hover:bg-zinc-200 border border-zinc-800 light:border-zinc-300 rounded-lg px-2.5 py-1.5 transition-colors focus:outline-none focus:ring-1 focus:ring-purple-500"
              title="Open Command Palette (Ctrl+K)"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-purple-400" />
              <span className="font-mono text-[11px] text-zinc-500 light:text-zinc-600">⌘K</span>
            </button>

            {/* Terminal Easter Egg Trigger */}
            <button
              onClick={onOpenTerminal}
              className="p-1.5 rounded-lg text-zinc-400 light:text-zinc-700 hover:text-emerald-400 hover:bg-zinc-800/80 light:hover:bg-zinc-200 transition-colors focus:outline-none"
              title="Open Terminal (` or click)"
              aria-label="Open Terminal Shell"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded-lg text-zinc-400 light:text-zinc-700 hover:text-amber-400 hover:bg-zinc-800/80 light:hover:bg-zinc-200 transition-colors focus:outline-none"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-3 py-1.5 rounded-lg shadow-md hover:shadow-purple-500/25 transition-all focus:outline-none"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-zinc-300 light:text-zinc-800 hover:bg-zinc-800 light:hover:bg-zinc-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen / Drawer Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#070707]/95 light:bg-white/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 light:text-zinc-600 mb-2">
              Navigation
            </span>
            {navItems.map(item => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between text-lg py-3 px-3 rounded-xl font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-white light:text-zinc-900 bg-white/10 light:bg-zinc-200'
                    : 'text-zinc-400 light:text-zinc-700 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800 light:border-zinc-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>

            <div className="flex items-center justify-between text-xs text-zinc-400 light:text-zinc-600 pt-2">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 light:bg-zinc-200 text-zinc-300 light:text-zinc-800 font-mono">`</kbd> for Terminal</span>
              <span>Adarsh Shekhar Singh</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
