import React, { useState } from 'react';
import { dsaTopics, engineeringStats } from '../data/portfolioData';
import { DsaTopic } from '../types';
import { Code2, ExternalLink, Award, CheckCircle2, TerminalSquare, Sparkles, TrendingUp, Cpu } from 'lucide-react';

export const EngineeringDsaSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<DsaTopic>(dsaTopics[0]);

  return (
    <section id="engineering" className="py-24 border-t border-zinc-800/80 light:border-zinc-200 relative bg-[#08080c] light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Algorithmic Rigor & Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-950 tracking-tight">
            Engineering Mindset & Problem Solving
          </h2>
          <p className="text-zinc-400 light:text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
            Strong foundation in Data Structures, Algorithms, time/space complexity optimization, and pattern recognition.
          </p>
        </div>

        {/* Animated Statistics Banner (Prompt Section 6) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {engineeringStats.map((stat) => (
            <div
              key={stat.id}
              className={`p-6 rounded-3xl bg-zinc-900/60 light:bg-white border transition-all duration-300 hover:-translate-y-1 ${stat.accent}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white light:text-zinc-950 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 light:text-zinc-800">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-zinc-500 light:text-zinc-600 mt-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* DSA Core Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Category Chips & Platforms */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-3xl bg-zinc-900/40 light:bg-white border border-zinc-800 light:border-zinc-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 light:border-zinc-200">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Interactive Algorithmic Patterns</span>
                </span>
                <span className="text-[10px] font-mono text-zinc-500">11 Focus Domains</span>
              </div>

              <p className="text-xs text-zinc-400 light:text-zinc-600">
                Select any pattern domain to review algorithmic trade-offs and structural strategies:
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {dsaTopics.map(topic => {
                  const isSelected = selectedTopic.id === topic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500 text-zinc-950 font-bold shadow-lg ring-2 ring-amber-400/50 scale-105'
                          : 'bg-zinc-950 light:bg-slate-100 text-zinc-300 light:text-zinc-700 hover:text-white hover:bg-zinc-800 border border-zinc-800 light:border-zinc-300'
                      }`}
                    >
                      <span>{topic.name}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-zinc-950" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Platform Direct Verified Links */}
            <div className="p-6 rounded-3xl bg-zinc-900/40 light:bg-white border border-zinc-800 light:border-zinc-200 shadow-xl space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-600 font-bold">
                Competitive Coding & Practice Profiles
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="https://leetcode.com/u/ADARSH2328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-950 light:bg-slate-50 hover:bg-zinc-800/80 border border-zinc-800 light:border-zinc-300 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-xs font-bold text-white light:text-zinc-950 group-hover:text-amber-400 transition-colors">
                        LeetCode Profile
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        @ADARSH2328
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                </a>

                <a
                  href="https://www.geeksforgeeks.org/profile/adarshsingusir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-950 light:bg-slate-50 hover:bg-zinc-800/80 border border-zinc-800 light:border-zinc-300 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <TerminalSquare className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="text-xs font-bold text-white light:text-zinc-950 group-hover:text-emerald-400 transition-colors">
                        GeeksforGeeks Profile
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        @adarshsingusir
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Selected Category Strategy Details */}
          <div className="lg:col-span-6 bg-zinc-900/60 light:bg-white rounded-3xl border border-zinc-800 light:border-zinc-200 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-800/80 light:border-zinc-200">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  Selected Algorithmic Pattern
                </span>
                <h3 className="text-2xl font-black text-white light:text-zinc-950 tracking-tight">
                  {selectedTopic.name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Pattern Mastered
              </span>
            </div>

            {/* Pattern Strategy description */}
            <div className="p-4 rounded-2xl bg-zinc-950/70 light:bg-slate-50 border border-zinc-800 light:border-zinc-200">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                Engineering Approach & Optimization:
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 light:text-zinc-800 leading-relaxed font-normal">
                {selectedTopic.description}
              </p>
            </div>

            {/* Core Sub-Patterns */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-600 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Frequently Applied Sub-Patterns</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedTopic.keyPatterns.map((pat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-950/50 light:bg-slate-50 border border-zinc-850 light:border-zinc-200 text-xs text-zinc-300 light:text-zinc-800 font-mono flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{pat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Takeaway */}
            <div className="p-4 rounded-2xl bg-amber-950/20 light:bg-amber-50 border border-amber-500/30 text-xs text-zinc-300 light:text-zinc-800 leading-relaxed">
              <strong className="text-amber-400 light:text-amber-700 block mb-1">Why DSA matters in my Full Stack work:</strong>
              Algorithmic problem-solving directly informs backend optimization — selecting O(1) hash maps for deduplication, building efficient MongoDB indexes, and structuring non-blocking asynchronous event loops.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
