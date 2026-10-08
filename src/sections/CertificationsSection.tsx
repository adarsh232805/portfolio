import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award, Cloud, Layers, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const getCertIcon = (id: string) => {
    switch (id) {
      case 'aws-cloud-practitioner': return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'aws-solutions-architect': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'aws-cloud-gen-ai': return <Sparkles className="w-5 h-5 text-purple-400" />;
      default: return <Terminal className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 border-t border-zinc-800/80 light:border-zinc-200 relative bg-[#07070a] light:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-950 tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-zinc-400 light:text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
            Professional cloud, architecture, and programming credentials validating industry standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-3xl bg-zinc-900/40 light:bg-slate-50/70 border border-zinc-800 light:border-zinc-200 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-zinc-800/90 light:bg-white border border-zinc-700/60 light:border-zinc-300 group-hover:scale-105 transition-transform shadow-md">
                    {getCertIcon(cert.id)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 light:text-purple-700 border border-purple-500/20">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white light:text-zinc-950 group-hover:text-purple-300 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 light:text-zinc-600 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-2">
                    Competencies & Domains Validated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsValidated.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-950/80 light:bg-white text-zinc-300 light:text-zinc-700 border border-zinc-800 light:border-zinc-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 light:border-zinc-200/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Verified Curriculum</span>
                <span className="text-emerald-400 font-semibold">Active Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
