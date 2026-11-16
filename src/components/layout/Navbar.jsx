import React from 'react';
import { 
  Terminal, 
  Tv, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  BookOpen,
  Keyboard,
  Layers
} from 'lucide-react';
import { Badge } from '../common/Badge';

export function Navbar({
  activeSection,
  setActiveSection,
  onStartPresentation,
  verifiedCount = 18
}) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-laboratory-800 bg-laboratory-950/85 backdrop-blur-md px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-php to-php-dark text-white font-mono font-black text-sm shadow-glow-sm border border-php/40">
            PHP
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                php-class-two
                <span className="text-xs px-2 py-0.5 rounded-full font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Source Verified
                </span>
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Interactive Architecture Laboratory • Classroom Edition
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 bg-laboratory-900/90 px-3 py-1.5 rounded-lg border border-laboratory-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-slate-300">10 Lab Modules</span>
          </div>

          {/* Start Presentation Button */}
          <button
            onClick={onStartPresentation}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-php via-indigo-600 to-accent-electric text-white rounded-lg font-medium text-xs md:text-sm hover:brightness-110 shadow-glow-md transition-all active:scale-95 group"
          >
            <Tv className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-semibold tracking-wide">Presentation Mode</span>
            <kbd className="hidden lg:inline-block ml-1 px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-mono">
              F
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
