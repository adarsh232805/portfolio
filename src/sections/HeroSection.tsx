import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Download, FileText, Sparkles, Terminal, Code2, Database, Cloud, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleDownload = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const floatingBadges = [
    { label: 'Frontend', tech: 'React.js', icon: <Layers className="w-3.5 h-3.5 text-cyan-400" />, pos: 'top-2 -left-4 sm:-left-8' },
    { label: 'Backend', tech: 'Node.js & REST', icon: <Cpu className="w-3.5 h-3.5 text-emerald-400" />, pos: 'top-1/4 -right-4 sm:-right-8' },
    { label: 'Database', tech: 'MongoDB / SQL', icon: <Database className="w-3.5 h-3.5 text-amber-400" />, pos: 'bottom-24 -left-4 sm:-left-6' },
    { label: 'Cloud', tech: 'AWS Certified (3×)', icon: <Cloud className="w-3.5 h-3.5 text-blue-400" />, pos: 'bottom-4 -right-2 sm:-right-6' },
    { label: 'DSA', tech: '500+ Problems', icon: <Code2 className="w-3.5 h-3.5 text-purple-400" />, pos: '-top-6 right-10' }
  ];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Mobile Profile Image Preview (Section 37: on mobile place above intro or below name) */}
          <div className="lg:hidden flex justify-center mb-2">
            <div className="relative w-56 sm:w-64 aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-zinc-800 to-transparent shadow-2xl">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-zinc-950 relative">
                <img
                  src={personalInfo.profilePhoto}
                  alt="Adarsh Shekhar Singh — Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    Full Stack Developer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Developer Identity & Story */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 light:bg-slate-100 border border-zinc-800 light:border-zinc-300 shadow-sm text-xs font-mono text-zinc-300 light:text-zinc-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wide uppercase font-semibold text-[11px] text-zinc-300 light:text-zinc-700">
                {personalInfo.statusPill}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-zinc-950 leading-[1.12]">
                Building products.
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                  Solving problems.
                </span>
                <br />
                Learning relentlessly.
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 light:text-zinc-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed pt-2">
                {personalInfo.heroSubheading}
              </p>
            </div>

            {/* Positioning Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-500/10 text-purple-300 light:text-purple-700 border border-purple-500/20">
                AWS Certified (3×)
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-300 light:text-blue-700 border border-blue-500/20">
                500+ DSA Solved
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-300 light:text-emerald-700 border border-emerald-500/20">
                React • Node • Cloud
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/25 transition-all transform hover:-translate-y-0.5"
              >
                View My Work
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Adarsh_Shekhar_Singh_Resume.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-zinc-200 light:text-zinc-800 bg-zinc-900/90 light:bg-slate-100 hover:bg-zinc-800 light:hover:bg-slate-200 border border-zinc-800 light:border-zinc-300 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 light:text-zinc-700 hover:text-white bg-transparent hover:bg-zinc-800/50 light:hover:bg-zinc-100 border border-zinc-800 light:border-zinc-300 transition-colors"
                title="View Resume Document"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href="https://github.com/adarsh232805"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-zinc-400 hover:text-white light:text-zinc-600 light:hover:text-zinc-950 bg-zinc-900/90 light:bg-slate-100 hover:bg-zinc-800 border border-zinc-800 light:border-zinc-300 transition-all"
                title="Explore GitHub"
                aria-label="Explore GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="p-3 rounded-xl text-zinc-400 hover:text-emerald-400 bg-zinc-900/90 light:bg-slate-100 hover:bg-zinc-800 border border-zinc-800 light:border-zinc-300 transition-all"
                title="Developer Terminal CLI (`)"
                aria-label="Developer Terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Desktop Sophisticated Profile Container & Floating Nodes */}
          <div className="hidden lg:flex lg:col-span-5 justify-center relative">
            <div
              className="relative w-[420px] xl:w-[460px] aspect-[4/5] rounded-[32px] p-2 bg-gradient-to-b from-purple-500/25 via-zinc-800/50 to-zinc-900/10 border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`
              }}
            >
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-[34px] blur-xl opacity-60 -z-10 animate-pulse-slow" />

              {/* Photo Frame */}
              <div className="w-full h-full rounded-[26px] overflow-hidden bg-[#0c0c10] relative group">
                <img
                  src={personalInfo.profilePhoto}
                  alt="Adarsh Shekhar Singh — Full Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle vignette lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 flex items-center justify-between shadow-xl">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{personalInfo.name}</span>
                      <Sparkles className="w-3 h-3 text-amber-400" />
                    </div>
                    <div className="text-[11px] font-mono text-purple-400">
                      Full Stack Developer • SDE
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active
                  </span>
                </div>
              </div>

              {/* Floating Dynamic System Nodes */}
              {floatingBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`absolute ${badge.pos} z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 cursor-default hover:border-purple-500/50`}
                  style={{
                    transform: `translate(${mousePos.x * (idx + 1) * 8}px, ${mousePos.y * (idx + 1) * 8}px)`
                  }}
                >
                  <div className="p-1 rounded-md bg-zinc-900 border border-zinc-800">
                    {badge.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 leading-none">
                      {badge.label}
                    </span>
                    <span className="text-xs font-semibold text-zinc-200 leading-tight">
                      {badge.tech}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-purple-400 transition-colors group cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest group-hover:tracking-wider transition-all">
              Explore Portfolio
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
