import React from 'react';
import { personalInfo, education, developerPhilosophy, engineeringStats } from '../data/portfolioData';
import { GraduationCap, Award, Code2, Sparkles, CheckCircle2, Terminal, Cpu, Database, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const cards = [
    { title: 'Full Stack Developer', desc: 'React.js, Node.js, Express, MongoDB & SQL', icon: <Cpu className="w-4 h-4 text-purple-400" /> },
    { title: 'AWS Certified (3×)', desc: 'Cloud Practitioner, SAA & Generative AI', icon: <Award className="w-4 h-4 text-blue-400" /> },
    { title: '500+ DSA Problems', desc: 'Algorithms & Pattern Optimization', icon: <Code2 className="w-4 h-4 text-amber-400" /> },
    { title: 'B.Tech CSE (2027)', desc: 'ABES Engineering College, Ghaziabad', icon: <GraduationCap className="w-4 h-4 text-emerald-400" /> },
    { title: 'React + Node Architecture', desc: 'REST APIs, Caching & Auth Systems', icon: <Database className="w-4 h-4 text-cyan-400" /> },
    { title: 'AI & Cloud Enthusiast', desc: 'Bedrock, WASM & Intelligent Web Apps', icon: <Sparkles className="w-4 h-4 text-pink-400" /> }
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-800/80 light:border-zinc-200 relative bg-[#08080a] light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Engineering Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-950 tracking-tight">
            About the Developer
          </h2>
          <p className="text-zinc-400 light:text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
            A software engineer grounded in Data Structures & Algorithms, modern full-stack web architectures, and cloud resilience.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Professional Introduction & Smaller Profile Photo */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-3xl bg-zinc-900/60 light:bg-white border border-zinc-800 light:border-zinc-200 shadow-xl">
              {/* Smaller optimized profile image (per prompt section 37) */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-purple-500/40 shadow-lg bg-zinc-950">
                <img
                  src={personalInfo.profilePhoto}
                  alt="Adarsh Shekhar Singh — Full Stack Developer"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-lg font-bold text-white light:text-zinc-950">
                    {personalInfo.name}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <p className="text-xs font-mono text-purple-400">
                  {personalInfo.title} • {education.institution}
                </p>
                <p className="text-xs text-zinc-400 light:text-zinc-600 leading-relaxed">
                  Based in {personalInfo.location}. Focused on building high-performance web products, robust APIs, and scalable distributed workflows.
                </p>
              </div>
            </div>

            {/* In-depth professional summary */}
            <div className="p-6 rounded-3xl bg-zinc-900/30 light:bg-slate-50 border border-zinc-800/80 light:border-zinc-200 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-600 font-semibold flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>Executive Summary</span>
              </h4>
              <p className="text-sm text-zinc-300 light:text-zinc-800 leading-relaxed">
                {personalInfo.professionalSummary}
              </p>
            </div>

            {/* Academic Foundation Card */}
            <div className="p-6 rounded-3xl bg-zinc-900/40 light:bg-white border border-zinc-800 light:border-zinc-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white light:text-zinc-950">
                      {education.degree}
                    </h4>
                    <p className="text-xs text-zinc-400 light:text-zinc-600">
                      {education.institution} • {education.location}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  {education.graduationDate}
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase text-zinc-500 light:text-zinc-600 block mb-2">
                  Key Computer Science Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 light:bg-slate-100 text-zinc-300 light:text-zinc-700 border border-zinc-700/60 light:border-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right: Interactive Cards & Developer Philosophy */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Interactive Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {cards.map((c, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-zinc-900/60 light:bg-white border border-zinc-800 light:border-zinc-200 hover:border-purple-500/50 hover:bg-zinc-900/90 transition-all duration-200 group shadow-sm hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-zinc-800 light:bg-slate-100 border border-zinc-700/60 light:border-zinc-300 group-hover:scale-110 transition-transform">
                      {c.icon}
                    </div>
                    <h5 className="text-xs font-bold text-zinc-200 light:text-zinc-900 group-hover:text-purple-300 transition-colors">
                      {c.title}
                    </h5>
                  </div>
                  <p className="text-[11px] text-zinc-400 light:text-zinc-600 leading-normal pl-0.5">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Developer Philosophy Area */}
            <div className="p-6 rounded-3xl bg-zinc-950/70 light:bg-slate-100/80 border border-zinc-800/80 light:border-zinc-300 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 light:border-zinc-200">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Developer Philosophy & Principles</span>
                </span>
                <span className="text-[10px] font-mono text-zinc-500">Core Axioms</span>
              </div>

              <div className="space-y-3">
                {developerPhilosophy.map((phil, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-900/40 light:bg-white border border-zinc-800/60 light:border-zinc-200 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-purple-400">0{idx + 1}.</span>
                      <span className="text-xs font-semibold text-zinc-200 light:text-zinc-900">
                        {phil.title}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 light:text-zinc-600 pl-5 leading-relaxed">
                      {phil.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
