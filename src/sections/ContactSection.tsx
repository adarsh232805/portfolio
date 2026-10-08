import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');

    const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    if (contactEndpoint) {
      try {
        const res = await fetch(contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          setStatus('success');
          setStatusMessage('Message dispatched successfully! Adarsh will respond promptly.');
          setFormData({ name: '', email: '', message: '' });
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
          return;
        } else {
          throw new Error('Endpoint responded with an error');
        }
      } catch (err) {
        setStatus('error');
        setStatusMessage('Backend endpoint connection failed. Falling back to email client...');
        setTimeout(() => triggerMailtoFallback(), 1200);
        return;
      }
    }

    // Graceful verified mailto integration
    setTimeout(() => {
      triggerMailtoFallback();
      setStatus('success');
      setStatusMessage('Prepared your message! Opening your default email client to send.');
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
    }, 600);
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Adarsh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/80 light:border-zinc-200 relative bg-[#07070a] light:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Recruiter & Engineering Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-950 tracking-tight">
            Let’s build something useful.
          </h2>
          <p className="text-zinc-400 light:text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
            Currently open to Software Engineering and Full Stack Developer opportunities. Let’s talk about how I can contribute to your team.
          </p>
        </div>

        {/* Contact Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct verified communication details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-zinc-900/40 light:bg-slate-50 border border-zinc-800 light:border-zinc-200 shadow-xl space-y-4">
              <h3 className="text-sm font-bold text-white light:text-zinc-950 uppercase font-mono tracking-wider">
                Direct Channels
              </h3>

              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3.5 rounded-2xl bg-zinc-950/70 light:bg-white border border-zinc-800 light:border-zinc-300 flex items-center justify-between group hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">Email</div>
                      <div className="text-xs font-semibold text-zinc-200 light:text-zinc-900 group-hover:text-purple-300 transition-colors break-all">
                        {personalInfo.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition-colors" />
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-3.5 rounded-2xl bg-zinc-950/70 light:bg-white border border-zinc-800 light:border-zinc-300 flex items-center justify-between group hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">Phone</div>
                      <div className="text-xs font-semibold text-zinc-200 light:text-zinc-900 group-hover:text-blue-300 transition-colors">
                        {personalInfo.phone}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                </a>

                <div className="p-3.5 rounded-2xl bg-zinc-950/70 light:bg-white border border-zinc-800 light:border-zinc-300 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Location</div>
                    <div className="text-xs font-semibold text-zinc-200 light:text-zinc-900">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="p-6 rounded-3xl bg-zinc-900/40 light:bg-slate-50 border border-zinc-800 light:border-zinc-200 shadow-xl space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-600 font-bold">
                Professional Networks
              </h4>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/adarsh-shekhar-singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 light:text-zinc-700 bg-zinc-950 light:bg-white hover:text-white border border-zinc-800 light:border-zinc-300 flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/adarsh232805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 light:text-zinc-700 bg-zinc-950 light:bg-white hover:text-white border border-zinc-800 light:border-zinc-300 flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://leetcode.com/u/ADARSH2328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 light:text-zinc-700 bg-zinc-950 light:bg-white hover:text-white border border-zinc-800 light:border-zinc-300 flex items-center gap-2"
                >
                  <LeetCodeIcon className="w-4 h-4 text-amber-500" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-zinc-900/50 light:bg-white rounded-3xl border border-zinc-800 light:border-zinc-200 p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-600 mb-1.5">
                  Your Name / Recruiter Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full p-3.5 rounded-xl bg-zinc-950/80 light:bg-slate-50 border text-xs text-zinc-100 light:text-zinc-900 focus:outline-none transition-colors ${
                    errors.name ? 'border-rose-500' : 'border-zinc-800 light:border-zinc-300 focus:border-purple-500'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-600 mb-1.5">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sjenkins@company.com"
                  className={`w-full p-3.5 rounded-xl bg-zinc-950/80 light:bg-slate-50 border text-xs text-zinc-100 light:text-zinc-900 focus:outline-none transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-zinc-800 light:border-zinc-300 focus:border-purple-500'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-600 mb-1.5">
                  Message / Role Scope *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, product challenges, or what you'd like to collaborate on..."
                  className={`w-full p-3.5 rounded-xl bg-zinc-950/80 light:bg-slate-50 border text-xs text-zinc-100 light:text-zinc-900 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-rose-500' : 'border-zinc-800 light:border-zinc-300 focus:border-purple-500'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Status Banner */}
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-950/30 light:bg-emerald-50 border border-emerald-500/40 text-xs text-emerald-400 light:text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-950/30 light:bg-rose-50 border border-rose-500/40 text-xs text-rose-400 light:text-rose-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xl shadow-purple-600/20 transition-all cursor-pointer"
              >
                {status === 'loading' ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-zinc-500 text-center font-mono pt-1">
                Zero spam • Responds directly to verified email & phone
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
