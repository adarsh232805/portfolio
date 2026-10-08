import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { projects } from '../data/portfolioData';
import { Cpu, Check, Layers, Code, Database, Wrench, Sparkles, ArrowRight } from 'lucide-react';

interface SkillsSectionProps {
  onSelectTech: (techName: string | null) => void;
  selectedTech: string | null;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectTech, selectedTech }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages': return <Code className="w-4 h-4 text-purple-400" />;
      case 'frontend': return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'backend': return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'databases': return <Database className="w-4 h-4 text-amber-400" />;
      default: return <Wrench className="w-4 h-4 text-blue-400" />;
    }
  };

  // Find projects that match the selected tech
  const matchingProjects = selectedTech
    ? projects.filter(p => p.technologies.some(t => t.toLowerCase() === selectedTech.toLowerCase()))
    : [];

  const handleTechClick = (tech: string) => {
    if (selectedTech === tech) {
      onSelectTech(null);
    } else {
      onSelectTech(tech);
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-zinc-800/80 light:border-zinc-200 relative bg-[#07070a] light:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Technology Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-950 tracking-tight">
            Technical Stack & Architecture Arsenal
          </h2>
          <p className="text-zinc-400 light:text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
            Click any technology below to dynamically trace and highlight its production usage in my featured projects.
          </p>
        </div>

        {/* Selected Tech Project Tracer Pill */}
        {selectedTech && (
          <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-zinc-900 border border-purple-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-purple-600 text-white font-mono text-xs font-bold">
                {selectedTech}
              </span>
              <div className="text-xs text-zinc-300 light:text-zinc-800">
                <span>Integrated in {matchingProjects.length} featured project{matchingProjects.length === 1 ? '' : 's'}: </span>
                <span className="font-semibold text-purple-300 light:text-purple-700">
                  {matchingProjects.map(p => p.title).join(' • ') || 'Core foundation skill'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 font-mono"
              >
                <span>View highlighted cards below</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onSelectTech(null)}
                className="text-xs px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Categories Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-zinc-900/60 light:bg-slate-100 text-zinc-400 light:text-zinc-700 hover:text-white border border-zinc-800 light:border-zinc-300'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-zinc-900/60 light:bg-slate-100 text-zinc-400 light:text-zinc-700 hover:text-white border border-zinc-800 light:border-zinc-300'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories
            .filter(cat => activeCategory === 'all' || activeCategory === cat.id)
            .map(category => (
              <div
                key={category.id}
                className="p-6 rounded-3xl bg-zinc-900/40 light:bg-white border border-zinc-800 light:border-zinc-200 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 light:border-zinc-200">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-800 light:bg-slate-100 border border-zinc-700/60 light:border-zinc-300">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="text-sm font-bold text-white light:text-zinc-950">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {category.skills.length} competencies
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => {
                    const isSelected = selectedTech?.toLowerCase() === skill.name.toLowerCase();
                    // Check if this skill is in any project
                    const usedInProjects = projects.some(p =>
                      p.technologies.some(t => t.toLowerCase() === skill.name.toLowerCase())
                    );

                    return (
                      <button
                        key={idx}
                        onClick={() => handleTechClick(skill.name)}
                        className={`group px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-purple-600 text-white shadow-lg ring-2 ring-purple-400 scale-105'
                            : usedInProjects
                            ? 'bg-zinc-950 light:bg-slate-100 text-zinc-300 light:text-zinc-800 hover:text-purple-300 hover:border-purple-500/50 border border-zinc-800 light:border-zinc-300'
                            : 'bg-zinc-950/60 light:bg-slate-50 text-zinc-400 light:text-zinc-600 border border-zinc-850 light:border-zinc-200 hover:text-white'
                        }`}
                      >
                        <span>{skill.name}</span>
                        {usedInProjects && (
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-purple-400/80'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};
