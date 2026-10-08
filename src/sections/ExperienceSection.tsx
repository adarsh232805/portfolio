import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, GitBranch, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState(experiences[0]?.id || '');
  const selectedExp = experiences.find(e => e.id === selectedExpId) || experiences[0];

  return (
    <section id="experience" className="py-24 border-t border-zinc-800/80 light:border-zinc-200 relative bg-[#070709] light:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-950 tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="text-zinc-400 light:text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on engineering contributions building user-facing systems with structured version control and iterative delivery.
          </p>
        </div>

        {/* Interactive Experience Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Timeline Column */}
          <div className="lg:col-span-5 relative pl-6 border-l-2 border-purple-500/30 space-y-6">
            
            {experiences.map((exp) => {
              const isSelected = selectedExpId === exp.id;
              return (
                <div key={exp.id} className="relative group">
                  {/* Timeline Pulse Marker */}
                  <div className={`absolute -left-[31px] top-4 w-4 h-4 rounded-full border-2 transition-all ${
                    isSelected
                      ? 'bg-purple-600 border-purple-300 ring-4 ring-purple-500/20 scale-125'
                      : 'bg-zinc-900 border-zinc-600'
                  }`} />

                  {/* Card Trigger */}
                  <div
                    onClick={() => setSelectedExpId(exp.id)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                      isSelected
                        ? 'bg-zinc-900/90 light:bg-purple-50/70 border-purple-500/60 shadow-xl ring-1 ring-purple-500/30'
                        : 'bg-zinc-900/40 light:bg-slate-50 border-zinc-800 light:border-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold">
                        {exp.period}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        {exp.status}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white light:text-zinc-950 group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-xs text-zinc-400 light:text-zinc-600 mt-1 font-medium">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        {exp.location}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-purple-400 font-mono">
                      <span>Inspect deliverables</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Academic Track Parallel Marker */}
            <div className="relative pl-0 pt-4">
              <div className="absolute -left-[31px] top-8 w-4 h-4 rounded-full border-2 bg-zinc-950 border-zinc-700" />
              <div className="p-4 rounded-2xl bg-zinc-950/60 light:bg-slate-50 border border-zinc-800/60 light:border-zinc-200">
                <span className="text-[10px] font-mono uppercase text-zinc-500">Academic Trajectory</span>
                <div className="text-sm font-semibold text-zinc-200 light:text-zinc-900 mt-1">
                  B.Tech in Computer Science & Engineering
                </div>
                <div className="text-xs text-zinc-400 light:text-zinc-600">
                  ABES Engineering College • Expected July 2027
                </div>
              </div>
            </div>

          </div>

          {/* Right Detail Pane */}
          {selectedExp && (
            <div className="lg:col-span-7 bg-zinc-900/50 light:bg-white rounded-3xl border border-zinc-800 light:border-zinc-200 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/70 light:border-zinc-200">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-1">
                    Featured Internship Role
                  </div>
                  <h3 className="text-2xl font-extrabold text-white light:text-zinc-950">
                    {selectedExp.role} @ {selectedExp.company}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 light:text-zinc-600 bg-zinc-900 light:bg-slate-100 px-3 py-1.5 rounded-xl border border-zinc-800 light:border-zinc-300 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{selectedExp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-600 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Key Responsibilities & Deliverables</span>
                </h4>
                <div className="space-y-2.5">
                  {selectedExp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-900/40 light:bg-slate-50 border border-zinc-800/60 light:border-zinc-200 text-xs sm:text-sm text-zinc-300 light:text-zinc-800 flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-600 font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Technologies Applied</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-zinc-800/80 light:bg-slate-100 text-purple-300 light:text-purple-700 border border-zinc-700/60 light:border-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Git & Engineering Rigor highlight */}
              <div className="p-4 rounded-2xl bg-zinc-950/60 light:bg-purple-50/50 border border-zinc-800 light:border-purple-200/60 flex items-center gap-3">
                <GitBranch className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs text-zinc-300 light:text-zinc-800">
                  <span className="font-semibold text-white light:text-zinc-950">Engineering Best Practices: </span>
                  Maintained strict feature branching, descriptive atomic commits, and iterative pull requests across the entire internship duration.
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
