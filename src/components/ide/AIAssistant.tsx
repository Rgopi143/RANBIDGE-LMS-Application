import React from 'react';
import { Sparkles, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { CodeReview } from '../../services/aiService';

interface AIAssistantProps {
  review: CodeReview | null;
  isReviewing: boolean;
  onReview: () => void;
  onClear: () => void;
  activeFile: any;
}

export default function AIAssistant({
  review,
  isReviewing,
  onReview,
  onClear,
  activeFile
}: AIAssistantProps) {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {review ? (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl text-xs leading-relaxed ${review.isCorrect ? 'bg-slate-500/10 text-slate-400 border border-slate-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
              <div className="flex items-center gap-2 mb-2">
                {review.isCorrect ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                <span className="font-black uppercase tracking-widest text-[10px]">{review.isCorrect ? 'Code Valid' : 'Review Needed'}</span>
              </div>
              {review.feedback}
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Suggestions</span>
              {review.suggestions.map((s, i) => (
                <div key={i} className="flex gap-3 p-3 bg-white/5 rounded-lg text-[11px] text-slate-300 leading-relaxed border border-white/5">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5 shrink-0" />
                  {s}
                </div>
              ))}
            </div>
            
            <button 
              onClick={onClear}
              className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-[10px] font-bold transition-all border border-white/5"
            >
              Clear Analysis
            </button>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
            <div className="p-4 bg-slate-500/10 rounded-full">
              <Sparkles size={32} className="text-slate-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">AI Code Review</h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">Get instant feedback on your Spring Boot code, best practices, and potential bugs.</p>
            </div>
            <button 
              onClick={onReview}
              disabled={isReviewing || !activeFile}
              className="w-full py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-slate-900/20 disabled:opacity-50 max-w-xs"
            >
              {isReviewing ? <Loader2 size={16} className="animate-spin mx-auto" /> : 'Analyze Current File'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
