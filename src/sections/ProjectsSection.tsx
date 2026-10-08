import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { FolderGit2, ExternalLink, FileText, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
  highlightedTech?: string | null;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy, highlightedTech }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterCategories = [
    'All',
    'Full Stack',
    'Productivity',
    'FinTech',
    'Developer Tools'
  ];

  const filteredProjects = projects.filter(project => {
    // If tech filter is highlighted
    if (highlightedTech) {
      const hasTech = project.technologies.some(t => t.toLowerCase() === highlightedTech.toLowerCase());
      if (!hasTech) return false;
    }

    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full Stack') return project.category === 'Full Stack' || project.tags.includes('Full Stack');
    if (activeFilter === 'Productivity') return project.tags.includes('Productivity');
    if (activeFilter === 'FinTech') return project.tags.includes('FinTech');
    if (activeFilter === 'Developer Tools') return project.category === 'Developer Tools' || project.tags.includes('Developer Tools');
    return true;
  });

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/80 light:border-zinc-200 relative bg-[#08080b] light:bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Code & Products</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-950 tracking-tight">
              Featured Software Engineering Projects
            </h2>
            <p className="text-zinc-400 light:text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
              Scalable full-stack systems, financial intelligence platforms, and local-first WebAssembly pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-900/80 light:bg-white border border-zinc-800 light:border-zinc-300 w-fit">
            <div className="flex items-center gap-1 px-2 text-zinc-500 text-xs font-mono">
              <Filter className="w-3 h-3" />
              <span className="hidden sm:inline">Filter:</span>
            </div>
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-zinc-400 light:text-zinc-700 hover:text-white light:hover:text-zinc-950 hover:bg-zinc-800 light:hover:bg-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech highlight banner if active */}
        {highlightedTech && (
          <div className="mb-8 p-3 rounded-2xl bg-purple-950/30 border border-purple-500/40 flex items-center justify-between text-xs text-purple-300">
            <span>Showing projects utilizing <strong>{highlightedTech}</strong></span>
            <span className="font-mono text-[11px]">Click technology again to clear</span>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-zinc-900/40 light:bg-white border border-zinc-800 light:border-zinc-200 hover:border-purple-500/50 light:hover:border-purple-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                
                {/* Card Top: Category and Key Metric */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20 font-semibold">
                    {project.category}
                  </span>
                  
                  {/* Primary Key Metric Pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>{project.keyMetric.value}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white light:text-zinc-950 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Secondary Metrics */}
                {project.secondaryMetrics && (
                  <div className="flex items-center gap-3 pt-1">
                    {project.secondaryMetrics.map((sm, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-zinc-500 light:text-zinc-600 bg-zinc-950/60 light:bg-slate-100 px-2.5 py-1 rounded-lg border border-zinc-800/80 light:border-zinc-300">
                        {sm.label}: <strong className="text-zinc-300 light:text-zinc-800">{sm.value}</strong>
                      </span>
                    ))}
                  </div>
                )}

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-lg border transition-colors ${
                        highlightedTech?.toLowerCase() === tech.toLowerCase()
                          ? 'bg-purple-600 text-white border-purple-400'
                          : 'bg-zinc-950 light:bg-slate-100 text-zinc-400 light:text-zinc-700 border-zinc-800/80 light:border-zinc-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[10px] font-mono text-zinc-500 py-0.5">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

              </div>

              {/* Action Buttons: GitHub, Live Demo, Case Study */}
              <div className="pt-6 mt-6 border-t border-zinc-800/60 light:border-zinc-200 flex flex-col gap-2.5">
                
                <div className="grid grid-cols-2 gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium text-zinc-300 light:text-zinc-700 bg-zinc-950 light:bg-slate-100 hover:text-white light:hover:text-zinc-950 hover:bg-zinc-800 light:hover:bg-zinc-200 border border-zinc-800 light:border-zinc-300 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-purple-300 light:text-purple-700 bg-purple-950/30 light:bg-purple-50 hover:bg-purple-900/40 light:hover:bg-purple-100 border border-purple-500/30 flex items-center justify-center gap-2 transition-all group/btn"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Explore Architecture & Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
