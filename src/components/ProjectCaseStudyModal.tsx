import React, { useEffect } from 'react';
import { Project } from '../types';
import { InteractiveArchitecture } from './InteractiveArchitecture';
import { SimulatedFileCompressor } from './SimulatedFileCompressor';
import { X, ExternalLink, CheckCircle2, TrendingUp, Lightbulb, Wrench, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0d0d11] light:bg-white rounded-3xl border border-zinc-800 light:border-zinc-300 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-6 border-b border-zinc-800/80 light:border-zinc-200 flex items-start justify-between gap-4 bg-zinc-950/60 light:bg-slate-50/80 sticky top-0 z-20 backdrop-blur-xl">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.keyMetric.label}: {project.keyMetric.value}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white light:text-zinc-950 tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-300 light:text-zinc-700 bg-zinc-900 light:bg-zinc-100 hover:text-white hover:bg-zinc-800 border border-zinc-800 light:border-zinc-300 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-zinc-900 bg-zinc-900 light:bg-zinc-100 hover:bg-zinc-800 border border-zinc-800 light:border-zinc-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10">
          
          {/* Mobile Action Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-zinc-900/60 light:bg-slate-50 border border-zinc-800 light:border-zinc-200">
              <div className="flex items-center gap-2 text-rose-400 mb-3 font-semibold text-sm">
                <ShieldAlert className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 light:text-zinc-700 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 light:bg-slate-50 border border-zinc-800 light:border-zinc-200">
              <div className="flex items-center gap-2 text-emerald-400 mb-3 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 light:text-zinc-700 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Interactive Architecture Diagram */}
          {project.architecture && (
            <div className="space-y-3">
              <InteractiveArchitecture diagram={project.architecture} />
            </div>
          )}

          {/* Simulated File Compressor for CompressIt */}
          {project.id === 'compressit' && (
            <div className="space-y-3">
              <SimulatedFileCompressor />
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-zinc-400 light:text-zinc-600 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-purple-400" />
              <span>Technology Stack & Integrations</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-zinc-900/90 light:bg-slate-100 text-purple-300 light:text-purple-700 border border-zinc-800 light:border-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-zinc-400 light:text-zinc-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Core Features & Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-900/40 light:bg-white border border-zinc-800/80 light:border-zinc-200 text-xs text-zinc-300 light:text-zinc-700 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Decisions & Performance Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-zinc-400 light:text-zinc-600 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Key Engineering Decisions</span>
              </h3>
              <div className="space-y-2.5">
                {project.caseStudy.engineeringDecisions.map((dec, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-900/30 light:bg-slate-50 border border-zinc-800 light:border-zinc-200 text-xs text-zinc-300 light:text-zinc-700"
                  >
                    {dec}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-zinc-400 light:text-zinc-600 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>Performance Improvements</span>
              </h3>
              <div className="space-y-2.5">
                {project.caseStudy.performanceImprovements.map((perf, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-900/30 light:bg-slate-50 border border-zinc-800 light:border-zinc-200 text-xs text-zinc-300 light:text-zinc-700"
                  >
                    {perf}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What I Learned */}
          <div className="p-5 rounded-2xl bg-purple-950/20 light:bg-purple-50 border border-purple-500/30 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 light:text-purple-700 font-semibold">
              Engineering Takeaways & What I Learned
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 light:text-zinc-800 leading-relaxed">
              {project.caseStudy.whatILearned}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
