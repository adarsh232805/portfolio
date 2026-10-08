import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0e0e12] light:bg-white rounded-3xl border border-zinc-800 light:border-zinc-300 shadow-2xl overflow-hidden my-auto h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 light:border-zinc-200 flex items-center justify-between gap-4 bg-zinc-950/80 light:bg-slate-50/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white light:text-zinc-900">
                {personalInfo.name} — Resume
              </h3>
              <p className="text-xs text-zinc-400 light:text-zinc-600 font-mono">
                Full Stack Developer • AWS Certified (3×) • 500+ DSA Solved
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Adarsh_Shekhar_Singh_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 light:bg-zinc-100 hover:bg-zinc-800 border border-zinc-800 light:border-zinc-300 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-zinc-900 bg-zinc-900 light:bg-zinc-100 hover:bg-zinc-800 border border-zinc-800 light:border-zinc-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame Viewer with responsive fallback */}
        <div className="flex-1 bg-zinc-900 light:bg-slate-100 relative overflow-hidden flex flex-col">
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
            title="Adarsh Shekhar Singh Resume PDF"
            className="w-full h-full border-none"
          />

          {/* Quick Notice footer */}
          <div className="p-3 bg-zinc-950/90 light:bg-white border-t border-zinc-800 light:border-zinc-200 flex items-center justify-between text-xs text-zinc-400 light:text-zinc-600 px-4">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official verified resume document directly from portfolio source</span>
            </span>
            <span className="font-mono text-[11px] hidden sm:inline">
              Updated 2026 • ABES EC / Remote Internship
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
