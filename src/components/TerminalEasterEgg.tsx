import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { personalInfo, projects, skillCategories, experiences, certifications, dsaTopics } from '../data/portfolioData';

interface TerminalEasterEggProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  type: 'command' | 'output' | 'error';
  content: string | React.ReactNode;
}

export const TerminalEasterEgg: React.FC<TerminalEasterEggProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: 'output',
      content: `Adarsh OS Terminal [Version 2.4.0]
(c) ${new Date().getFullYear()} Adarsh Shekhar Singh. All rights reserved.

Type 'help' to see the list of supported developer commands.`
    }
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    setHistory(prev => [...prev, raw]);
    setHistoryIndex(-1);

    const newLogs: LogEntry[] = [...logs, { type: 'command', content: raw }];

    switch (cmd) {
      case 'help':
        newLogs.push({
          type: 'output',
          content: (
            <div className="space-y-1 font-mono text-xs">
              <div className="text-purple-400 font-bold mb-1">AVAILABLE COMMANDS:</div>
              <div><span className="text-emerald-400 font-semibold">about</span>        - Professional bio & profile</div>
              <div><span className="text-emerald-400 font-semibold">skills</span>       - Core technical stack by domain</div>
              <div><span className="text-emerald-400 font-semibold">projects</span>     - Production projects & metrics</div>
              <div><span className="text-emerald-400 font-semibold">experience</span>   - Internship details & responsibilities</div>
              <div><span className="text-emerald-400 font-semibold">certifications</span> - AWS & Cisco credentials</div>
              <div><span className="text-emerald-400 font-semibold">dsa</span>          - 500+ problems & category matrix</div>
              <div><span className="text-emerald-400 font-semibold">contact</span>      - Email, phone, location & profiles</div>
              <div><span className="text-emerald-400 font-semibold">github</span>       - Open GitHub in new tab</div>
              <div><span className="text-emerald-400 font-semibold">leetcode</span>     - Open LeetCode in new tab</div>
              <div><span className="text-emerald-400 font-semibold">clear</span>        - Clear terminal screen</div>
              <div><span className="text-emerald-400 font-semibold">exit</span>         - Close terminal window</div>
            </div>
          )
        });
        break;

      case 'about':
        newLogs.push({
          type: 'output',
          content: `${personalInfo.name} — ${personalInfo.title}
${personalInfo.positioning}

${personalInfo.professionalSummary}`
        });
        break;

      case 'skills':
        newLogs.push({
          type: 'output',
          content: (
            <div className="space-y-1 font-mono text-xs">
              {skillCategories.map(cat => (
                <div key={cat.id}>
                  <span className="text-purple-400 font-semibold">{cat.name}:</span>{' '}
                  <span className="text-zinc-300">{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'projects':
        newLogs.push({
          type: 'output',
          content: (
            <div className="space-y-2 font-mono text-xs">
              {projects.map(p => (
                <div key={p.id} className="border-l-2 border-purple-500 pl-2">
                  <div className="text-emerald-400 font-bold">{p.title} ({p.category})</div>
                  <div className="text-zinc-400">{p.description}</div>
                  <div className="text-purple-300 font-semibold">Metric: {p.keyMetric.label} → {p.keyMetric.value}</div>
                  <div className="text-zinc-500">Live: {p.liveUrl}</div>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'experience':
        newLogs.push({
          type: 'output',
          content: (
            <div className="space-y-1 font-mono text-xs">
              {experiences.map(e => (
                <div key={e.id}>
                  <div className="text-emerald-400 font-bold">{e.role} @ {e.company} ({e.period})</div>
                  <div className="text-zinc-400">{e.responsibilities.join(' ')}</div>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'certifications':
        newLogs.push({
          type: 'output',
          content: (
            <div className="space-y-1 font-mono text-xs">
              {certifications.map(c => (
                <div key={c.id}>
                  <span className="text-purple-400">✓ {c.name}</span> — <span className="text-zinc-400">{c.issuer}</span>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'dsa':
        newLogs.push({
          type: 'output',
          content: `500+ DSA Problems Solved across LeetCode, GeeksforGeeks, and CodeChef.
Focus patterns: ${dsaTopics.map(t => t.name).join(', ')}
Profiles:
- LeetCode: https://leetcode.com/u/ADARSH2328/
- GeeksforGeeks: https://www.geeksforgeeks.org/profile/adarshsingusir`
        });
        break;

      case 'contact':
        newLogs.push({
          type: 'output',
          content: `Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
LinkedIn: https://www.linkedin.com/in/adarsh-shekhar-singh/
GitHub: https://github.com/adarsh232805`
        });
        break;

      case 'github':
        window.open('https://github.com/adarsh232805', '_blank');
        newLogs.push({ type: 'output', content: 'Opened https://github.com/adarsh232805 in a new tab.' });
        break;

      case 'leetcode':
        window.open('https://leetcode.com/u/ADARSH2328/', '_blank');
        newLogs.push({ type: 'output', content: 'Opened https://leetcode.com/u/ADARSH2328/ in a new tab.' });
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newLogs.push({
          type: 'error',
          content: `Command not recognized: "${raw}". Type 'help' for available commands.`
        });
    }

    setLogs(newLogs);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.length > 0 && historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIdx);
          setInput(history[nextIdx]);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className={`w-full bg-[#0c0d12] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs transition-all duration-300 ${
          isExpanded ? 'max-w-6xl h-[92vh]' : 'max-w-3xl h-[65vh]'
        }`}
      >
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setLogs([])} />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} />
            </div>
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-zinc-400 text-[11px]">adarsh@portfolio:~$ bash</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800"
              title={isExpanded ? 'Restore' : 'Maximize'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800"
              title="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0a0a0f] text-zinc-300 leading-relaxed">
          {logs.map((log, index) => (
            <div key={index} className="space-y-1">
              {log.type === 'command' && (
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-purple-400">adarsh@portfolio:~$</span>
                  <span>{log.content}</span>
                </div>
              )}
              {log.type === 'output' && (
                <div className="text-zinc-300 pl-4 border-l border-zinc-800">
                  {typeof log.content === 'string' ? (
                    <pre className="whitespace-pre-wrap font-mono text-xs">{log.content}</pre>
                  ) : (
                    log.content
                  )}
                </div>
              )}
              {log.type === 'error' && (
                <div className="text-rose-400 pl-4 border-l border-rose-500/40">
                  {log.content}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Line */}
        <div className="p-3 bg-zinc-950 border-t border-zinc-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">adarsh@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'projects', 'about'..."
            className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 focus:outline-none font-mono text-xs"
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
