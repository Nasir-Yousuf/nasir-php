import React from 'react';
import { 
  GitCompare, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Plus, 
  Layers, 
  FileCode,
  Package
} from 'lucide-react';
import { EVOLUTION_COMPARISON, CLASS_TWO_DATA } from '../../data/classesData';

export function EvolutionSection({ onSelectClassView }) {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-semibold">
          <GitCompare className="w-3.5 h-3.5" />
          <span>The Big Journey: Class 1 to Class 2</span>
        </span>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          How Your Project Evolved
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
          Notice how the teacher didn't throw away Class 1. Class 2 built right on top of it by adding views, templates, routing, and styles!
        </p>
      </div>

      {/* Side by side comparison table / cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EVOLUTION_COMPARISON.map((comp, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-slate-200">
                {comp.feature}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold">
                Evolution #{idx + 1}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Class 1 state */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 font-bold block">
                  Class 1 (php-learning):
                </span>
                <p className="text-slate-300 font-mono text-[11px]">
                  {comp.class1}
                </p>
              </div>

              {/* Class 2 upgrade */}
              <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 space-y-1">
                <span className="text-[10px] font-mono text-indigo-400 font-bold block">
                  Class 2 (php-class-two) Upgrade:
                </span>
                <p className="text-indigo-200 font-mono text-[11px]">
                  {comp.class2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The 5 Big New Things Added in Class 2 */}
      <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Plus className="w-5 h-5 text-indigo-400" />
          <span>The 5 New Additions in Class 2 (Explained in 1 Sentence Each)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {CLASS_TWO_DATA.newAdditions.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="font-mono font-bold text-indigo-400 text-xs block">
                {item.title}
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
