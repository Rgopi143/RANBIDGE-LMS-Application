import React from 'react';
import { Terminal as TerminalIcon, RotateCcw, Play, Loader2, ChevronUp, ChevronDown, X } from 'lucide-react';

interface TerminalPanelProps {
  output: string;
  isCompiling: boolean;
  onCompile: () => void;
  onClear: () => void;
  activeTab: 'terminal' | 'output' | 'debug' | 'ai';
  setActiveTab: (tab: any) => void;
  onClose: () => void;
}

export default function TerminalPanel({
  output,
  isCompiling,
  onCompile,
  onClear,
  activeTab,
  setActiveTab,
  onClose
}: TerminalPanelProps) {
  return (
    <div className="h-full flex flex-col bg-[#1e1e1e]">
      <div className="h-9 bg-[#252526] flex items-center px-4 gap-6 shrink-0 border-b border-white/5">
        <button 
          onClick={() => setActiveTab('terminal')}
          className={`text-[11px] font-bold h-full px-2 transition-colors ${activeTab === 'terminal' ? 'text-white border-b-2 border-slate-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
          TERMINAL
        </button>
        <button 
          onClick={() => setActiveTab('output')}
          className={`text-[11px] font-bold h-full px-2 transition-colors ${activeTab === 'output' ? 'text-white border-b-2 border-slate-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
          OUTPUT
        </button>
        <button 
          onClick={() => setActiveTab('debug')}
          className={`text-[11px] font-bold h-full px-2 transition-colors ${activeTab === 'debug' ? 'text-white border-b-2 border-slate-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
          DEBUG CONSOLE
        </button>
        <button 
          onClick={() => setActiveTab('ai')}
          className={`text-[11px] font-bold h-full px-2 transition-colors ${activeTab === 'ai' ? 'text-white border-b-2 border-slate-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
          AI ASSISTANT
        </button>
        
        <div className="ml-auto flex items-center gap-2">
          {activeTab === 'terminal' && (
            <button 
              onClick={onCompile}
              disabled={isCompiling}
              className="flex items-center gap-1.5 px-3 py-1 bg-slate-600 hover:bg-slate-700 text-white rounded text-[10px] font-bold transition-colors disabled:opacity-50"
            >
              {isCompiling ? <Loader2 size={12} className="animate-spin" /> : <Play size={12} fill="currentColor" />}
              RUN
            </button>
          )}
          <button 
            onClick={onClear}
            className="p-1 hover:bg-white/10 rounded text-slate-500 hover:text-white"
          >
            <RotateCcw size={14} />
          </button>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded text-slate-500 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-3 font-mono text-xs overflow-y-auto bg-black/20">
        {activeTab === 'terminal' && (
          output ? (
            <pre className="text-slate-400 whitespace-pre-wrap leading-relaxed">{output}</pre>
          ) : (
            <div className="text-slate-600 flex items-center gap-2">
              <span className="text-slate-500">➜</span>
              <span className="animate-pulse">_</span>
            </div>
          )
        )}
        {activeTab === 'output' && (
          <div className="text-slate-500 italic">No output to display</div>
        )}
        {activeTab === 'debug' && (
          <div className="text-slate-500 italic">Debugger not attached</div>
        )}
        {activeTab === 'ai' && (
          <div id="ai-assistant-container" className="h-full">
            {/* AI Assistant will be rendered here or passed as children */}
          </div>
        )}
      </div>
    </div>
  );
}
