import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { EngineeringDsaSection } from './sections/EngineeringDsaSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { GithubSection } from './sections/GithubSection';
import { ContactSection } from './sections/ContactSection';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { CommandPalette } from './components/CommandPalette';
import { TerminalEasterEgg } from './components/TerminalEasterEgg';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Project } from './types';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [highlightedTech, setHighlightedTech] = useState<string | null>(null);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Backtick or tilde opens developer terminal
      if (e.key === '`' || e.key === '~') {
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          e.preventDefault();
          setIsTerminalOpen(prev => !prev);
        }
      }
      // Ctrl+K or Cmd+K opens Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className={`min-h-screen bg-[#070707] text-[#ededed] light:bg-[#f8fafc] light:text-[#0f172a] transition-colors duration-300 font-sans selection:bg-purple-600 selection:text-white relative`}>
      
      {/* Background Subtle Tech Grid */}
      <div className="fixed inset-0 bg-tech-grid opacity-70 pointer-events-none -z-10" />

      {/* Primary Sticky Header */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="relative z-10">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <AboutSection />

        <ExperienceSection />

        <ProjectsSection
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
          highlightedTech={highlightedTech}
        />

        <SkillsSection
          selectedTech={highlightedTech}
          onSelectTech={(tech) => setHighlightedTech(tech)}
        />

        <EngineeringDsaSection />

        <CertificationsSection />

        <GithubSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onToggleTheme={toggleTheme}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <TerminalEasterEgg
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <AiAssistantModal />

    </div>
  );
}

export default App;
