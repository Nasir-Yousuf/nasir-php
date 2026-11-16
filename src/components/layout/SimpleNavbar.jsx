import React from 'react';
import { 
  Sparkles, 
  Tv, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  FolderTree, 
  Play, 
  GitCompare, 
  Code2
} from 'lucide-react';

export function SimpleNavbar({
  activeClassView,
  setActiveClassView, // 'class1' | 'class2' | 'evolution'
  activeTab,
  setActiveTab, // 'bigpicture' | 'files' | 'flow' | 'evolution' | 'simulator' | 'js_cheatsheet'
  onStartPresentation
}) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-mono font-black text-white text-base shadow-lg shadow-indigo-500/20">
            PHP
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base tracking-tight">
                PHP Classroom Visual Guide
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                Beginner Friendly
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Clear visual explanations for Class 1 (php-learning) & Class 2 (php-class-two)
            </p>
          </div>
        </div>

        {/* Class Switcher & Presentation Mode */}
        <div className="flex items-center gap-2">
          {/* Class 1 vs Class 2 Switcher */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => {
                setActiveClassView('class1');
                if (activeTab === 'evolution') setActiveTab('bigpicture');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeClassView === 'class1'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Class 1: Core Foundation
            </button>

            <button
              onClick={() => {
                setActiveClassView('class2');
                if (activeTab === 'evolution') setActiveTab('bigpicture');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeClassView === 'class2'
                  ? 'bg-indigo-500 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Class 2: Web App
            </button>
          </div>

          {/* Presentation Mode Button */}
          <button
            onClick={onStartPresentation}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white rounded-xl text-xs font-bold shadow-lg shadow-purple-500/20 active:scale-95 transition-all"
          >
            <Tv className="w-4 h-4" />
            <span>Classroom Slides</span>
            <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-mono">F</kbd>
          </button>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="border-t border-slate-800/80 bg-slate-900/60 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('bigpicture')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'bigpicture'
                ? 'bg-slate-800 text-white font-bold border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>1. The Big Picture (Why?)</span>
          </button>

          <button
            onClick={() => setActiveTab('files')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'files'
                ? 'bg-slate-800 text-white font-bold border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5 text-cyan-400" />
            <span>2. Visual File Explorer</span>
          </button>

          <button
            onClick={() => setActiveTab('flow')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'flow'
                ? 'bg-slate-800 text-white font-bold border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-emerald-400" />
            <span>3. How It Runs (Story Flow)</span>
          </button>

          <button
            onClick={() => setActiveTab('evolution')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'evolution'
                ? 'bg-slate-800 text-white font-bold border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <GitCompare className="w-3.5 h-3.5 text-purple-400" />
            <span>4. Class 1 vs Class 2</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'bg-slate-800 text-white font-bold border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-rose-400" />
            <span>5. Live Playground (Try It!)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
