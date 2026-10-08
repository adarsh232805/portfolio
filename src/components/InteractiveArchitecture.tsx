import React, { useState } from 'react';
import { ArchitectureDiagram } from '../types';
import { Layers, ArrowRight, Info, CheckCircle2 } from 'lucide-react';

interface InteractiveArchitectureProps {
  diagram: ArchitectureDiagram;
}

export const InteractiveArchitecture: React.FC<InteractiveArchitectureProps> = ({ diagram }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>(diagram.nodes[0]?.id || '');

  const activeNode = diagram.nodes.find(n => n.id === activeNodeId) || diagram.nodes[0];

  return (
    <div className="w-full bg-zinc-950/70 light:bg-slate-100/90 rounded-2xl border border-zinc-800/80 light:border-zinc-300 p-5 sm:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800/60 light:border-zinc-300/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-100 light:text-zinc-900 tracking-tight">
              {diagram.title}
            </h4>
            <p className="text-xs text-zinc-400 light:text-zinc-600">
              Interactive System Architecture • Click or hover nodes to inspect internals
            </p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20 w-fit">
          Live Flow Visualizer
        </span>
      </div>

      {/* Nodes Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 relative">
        {diagram.nodes.map((node, index) => {
          const isSelected = activeNodeId === node.id;
          return (
            <div key={node.id} className="relative flex flex-col">
              <button
                onClick={() => setActiveNodeId(node.id)}
                onMouseEnter={() => setActiveNodeId(node.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 relative group ${
                  isSelected
                    ? 'bg-purple-950/30 light:bg-purple-50 border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/50'
                    : 'bg-zinc-900/60 light:bg-white border-zinc-800 light:border-zinc-200 hover:border-zinc-700 hover:bg-zinc-800/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 light:text-zinc-600">
                    Step 0{index + 1} • {node.role}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  )}
                </div>
                <div className="text-sm font-semibold text-zinc-200 light:text-zinc-900 group-hover:text-purple-300 transition-colors">
                  {node.label}
                </div>
                <div className="text-xs font-mono text-purple-400/90 light:text-purple-600 mt-1">
                  {node.tech}
                </div>
              </button>

              {/* Connecting Flow Arrow for Desktop */}
              {index < diagram.nodes.length - 1 && (
                <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-zinc-600 light:text-zinc-400 pointer-events-none">
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      {activeNode && (
        <div className="p-4 rounded-xl bg-zinc-900/80 light:bg-white border border-zinc-800 light:border-zinc-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold uppercase font-mono tracking-wider text-purple-400">
                {activeNode.role}: {activeNode.label}
              </span>
            </div>
            <p className="text-xs text-zinc-300 light:text-zinc-700 leading-relaxed max-w-2xl">
              {activeNode.description}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg bg-zinc-800 light:bg-zinc-100 text-zinc-300 light:text-zinc-700 border border-zinc-700 light:border-zinc-300 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tech: {activeNode.tech}</span>
          </div>
        </div>
      )}

      {/* Data Flow Legend */}
      <div className="mt-4 pt-3 border-t border-zinc-800/40 light:border-zinc-200 flex flex-wrap items-center gap-4 text-[11px] font-mono text-zinc-400 light:text-zinc-600">
        <span className="text-zinc-500 light:text-zinc-600 uppercase">Data Flow:</span>
        {diagram.flows.map((flow, idx) => (
          <span key={idx} className="flex items-center gap-1 bg-zinc-900/60 light:bg-zinc-200/60 px-2 py-0.5 rounded border border-zinc-800/60 light:border-zinc-300">
            <span className="text-zinc-300 light:text-zinc-800 font-semibold">{flow.from}</span>
            <span className="text-purple-400">→</span>
            <span className="text-zinc-300 light:text-zinc-800 font-semibold">{flow.to}</span>
            <span className="text-zinc-500">({flow.label})</span>
          </span>
        ))}
      </div>
    </div>
  );
};
