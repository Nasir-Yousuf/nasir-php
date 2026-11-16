import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  List, 
  Sparkles, 
  Code2,
  Maximize2,
  Minimize2,
  BookOpen
} from 'lucide-react';
import { SIDE_BY_SIDE_SLIDES } from '../../data/sideBySideCurriculum';

export function PDFSlideNavbar({
  currentPage,
  onNavigatePage,
  onOpenToc,
  isFullscreen,
  onToggleFullscreen
}) {
  const totalPages = SIDE_BY_SIDE_SLIDES.length;

  const handlePrev = () => {
    if (currentPage > 1) onNavigatePage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onNavigatePage(currentPage + 1);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#161928]/95 backdrop-blur-md px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Brand & Roadmap Modal Button */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#FACC15] flex items-center justify-center font-mono font-black text-slate-950 text-xs shadow-md shadow-yellow-500/10 shrink-0">
            &lt;/&gt;
          </div>

          <div className="hidden sm:block">
            <span className="font-bold text-white text-sm tracking-tight block">
              PHP & JavaScript Side-by-Side
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Basics → php-class-two Architecture · NIYD
            </span>
          </div>

          {/* Table of Contents Button */}
          <button
            onClick={onOpenToc}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1e2235] hover:bg-[#252b42] text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-all"
            title="Browse all 26 slides"
          >
            <List className="w-3.5 h-3.5 text-[#FACC15]" />
            <span className="hidden md:inline font-mono">All Slides (T)</span>
          </button>
        </div>

        {/* Center: Quick Phase Switchers */}
        <div className="flex items-center gap-1.5 bg-[#181a29] p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onNavigatePage(3)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              currentPage <= 15
                ? 'bg-[#777BB4] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-[#1e2235]'
            }`}
          >
            Phase 1: Basics (1–15)
          </button>
          <button
            onClick={() => onNavigatePage(16)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              currentPage >= 16
                ? 'bg-[#FACC15] text-slate-950 font-black shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-[#1e2235]'
            }`}
          >
            Phase 2: php-class-two (16–26)
          </button>
        </div>

        {/* Right: Slide Controls & Fullscreen */}
        <div className="flex items-center gap-2">
          {/* Prev / Dropdown / Next */}
          <div className="flex items-center gap-1 bg-[#1e2235] p-1 rounded-xl border border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentPage <= 1}
              className="p-1 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
              title="Previous Slide (←)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Jump to Slide dropdown */}
            <select
              value={currentPage}
              onChange={(e) => onNavigatePage(Number(e.target.value))}
              className="bg-transparent text-xs font-mono font-bold text-white px-2 py-0.5 focus:outline-none cursor-pointer max-w-[140px] sm:max-w-[200px] truncate"
            >
              {SIDE_BY_SIDE_SLIDES.map((s) => (
                <option key={s.page} value={s.page} className="bg-slate-900 text-white">
                  Slide {s.page}: {s.title}
                </option>
              ))}
            </select>

            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages}
              className="p-1 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
              title="Next Slide (→)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xl bg-[#1e2235] hover:bg-[#252b42] text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
