import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, CornerDownLeft, RefreshCcw } from 'lucide-react';
import { portfolioFaqs, suggestedQuestions } from '../data/faqs';
import { personalInfo } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const AiAssistantModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hi there! I'm Adarsh's Portfolio Assistant. Ask me anything about his technical skills, 3× AWS certifications, WorkLife Plus / IPO Insight / CompressIt projects, or DSA journey!`,
      timestamp: 'Just now'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const findDeterministicAnswer = (query: string): string => {
    const qLower = query.toLowerCase();

    // Check exact or partial matches in questions or keywords
    let bestMatch = portfolioFaqs.find(f => qLower.includes(f.question.toLowerCase()));
    if (!bestMatch) {
      // Score based on keyword hits
      let maxScore = 0;
      for (const faq of portfolioFaqs) {
        let score = 0;
        for (const kw of faq.keywords) {
          if (qLower.includes(kw)) score += 2;
        }
        if (score > maxScore) {
          maxScore = score;
          bestMatch = faq;
        }
      }
    }

    if (bestMatch) {
      return bestMatch.answer;
    }

    // Default honest fallback strictly based on facts
    return `Adarsh is a Full Stack Developer (React.js, Node.js, Express.js, MongoDB, SQL), 3× AWS Certified engineer, and has solved 500+ DSA problems on LeetCode & GFG. He is a B.Tech CSE student at ABES Engineering College (2027) with internship experience at Know Your College. You can ask specifically about his projects (WorkLife Plus, IPO Insight, CompressIt), certifications, or how to contact him directly at ${personalInfo.email}.`;
  };

  const handleSend = async (userText?: string) => {
    const textToSend = (userText || input).trim();
    if (!textToSend || isTyping) return;

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Check if secure backend API endpoint is configured
    const customEndpoint = import.meta.env.VITE_AI_CHAT_ENDPOINT;

    if (customEndpoint) {
      try {
        const response = await fetch(customEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: textToSend })
        });
        if (response.ok) {
          const data = await response.json();
          setMessages(prev => [
            ...prev,
            {
              id: `a-${Date.now()}`,
              sender: 'assistant',
              text: data.reply || data.answer || findDeterministicAnswer(textToSend),
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          setIsTyping(false);
          return;
        }
      } catch {
        // Fallback safely to deterministic engine
      }
    }

    // Deterministic instant local response with realistic typing delay
    setTimeout(() => {
      const answer = findDeterministicAnswer(textToSend);
      setMessages(prev => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          sender: 'assistant',
          text: answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: `Chat cleared. What else would you like to know about Adarsh?`,
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* Floating Pill Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_10px_25px_rgba(124,58,237,0.4)] hover:shadow-[0_15px_30px_rgba(124,58,237,0.6)] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
          aria-label="Ask About Adarsh AI Assistant"
        >
          <div className="relative">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-xs font-semibold tracking-wide">
            Ask About Adarsh
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/20 text-white/90">
            AI
          </span>
        </button>
      </div>

      {/* Chat Modal Panel */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 max-w-[420px] bg-[#0c0d12] light:bg-white rounded-3xl border border-zinc-800 light:border-zinc-300 shadow-2xl overflow-hidden flex flex-col h-[520px] max-h-[80vh] animate-fadeIn">
          
          {/* Header */}
          <div className="p-4 bg-zinc-950/80 light:bg-slate-50 border-b border-zinc-800 light:border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white light:text-zinc-900 tracking-tight">
                  Portfolio AI Assistant
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 light:text-zinc-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Ground-truth Verified Data</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white light:hover:text-zinc-900 hover:bg-zinc-800 light:hover:bg-zinc-200"
                title="Clear conversation"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white light:hover:text-zinc-900 hover:bg-zinc-800 light:hover:bg-zinc-200"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#09090e] light:bg-slate-50/50">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-purple-900/40 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-tr-none'
                      : 'bg-zinc-900/90 light:bg-white text-zinc-200 light:text-zinc-800 border border-zinc-800/80 light:border-zinc-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className="block text-[9px] opacity-40 mt-1 font-mono text-right">
                    {msg.timestamp}
                  </span>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono p-2">
                <Bot className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
                <span>Reading portfolio records...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          <div className="p-2.5 bg-zinc-950/70 light:bg-slate-100 border-t border-zinc-800/80 light:border-zinc-200 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-900 light:bg-white hover:bg-purple-900/40 text-zinc-300 light:text-zinc-700 hover:text-purple-300 border border-zinc-800 light:border-zinc-300 transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-zinc-950 light:bg-white border-t border-zinc-800 light:border-zinc-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about skills, projects, DSA..."
              className="flex-1 bg-zinc-900/80 light:bg-slate-100 border border-zinc-800 light:border-zinc-300 rounded-xl px-3 py-2 text-xs text-zinc-100 light:text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-purple-500"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white transition-colors"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
