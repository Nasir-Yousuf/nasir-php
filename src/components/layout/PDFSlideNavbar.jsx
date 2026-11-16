import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  List, 
  Maximize2, 
  Minimize2,
  Languages
} from 'lucide-react';
import { SIDE_BY_SIDE_SLIDES } from '../../data/sideBySideCurriculum';
import { useLanguage } from '../../contexts/LanguageContext';
import { ProgressTracker } from '../ui/ProgressTracker';

export function PDFSlideNavbar({
  currentPage,
  onNavigatePage,
  onOpenToc,
  isFullscreen,
  onToggleFullscreen
}) {
  const { lang, toggleLang, t } = useLanguage();
  const totalPages = SIDE_BY_SIDE_SLIDES.length;

  const handlePrev = () => {
    if (currentPage > 1) onNavigatePage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onNavigatePage(currentPage + 1);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#161928]/95 backdrop-blur-md px-3 sm:px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Brand & TOC button */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#FACC15] flex items-center justify-center font-mono font-black text-slate-950 text-xs shadow-md shadow-yellow-500/10 shrink-0">
            &lt;/&gt;
          </div>

          <div className="hidden md:block">
            <span className="font-bold text-white text-sm tracking-tight block">
              {t("PHP & JavaScript Explorer", "পিএইচপি ও জাভাস্ক্রিপ্ট ল্যাব")}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {t("Visual Architecture & Concepts · NIYD", "ভিজ্যুয়াল আর্কিটেকচার ও কোড ল্যাব · NIYD")}
            </span>
          </div>

          {/* Table of Contents Button */}
          <button
            onClick={onOpenToc}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1e2235] hover:bg-[#252b42] text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-all"
            title="Browse all 26 slides"
          >
            <List className="w-3.5 h-3.5 text-[#FACC15]" />
            <span className="hidden sm:inline font-mono">{t("All Slides (T)", "সকল স্লাইড (T)")}</span>
          </button>
        </div>

        {/* Center: Quick Phase Switchers & Progress Tracker */}
        <div className="flex items-center gap-2">
          {/* Phase 1 / 2 quick switches */}
          <div className="hidden sm:flex items-center gap-1 bg-[#181a29] p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onNavigatePage(3)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                currentPage <= 15
                  ? 'bg-[#777BB4] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-[#1e2235]'
              }`}
            >
              {t("Phase 1: Basics", "পর্যায় ১: মৌলিক")}
            </button>
            <button
              onClick={() => onNavigatePage(16)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                currentPage >= 16
                  ? 'bg-[#FACC15] text-slate-950 font-black shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-[#1e2235]'
              }`}
            >
              {t("Phase 2: Project", "পর্যায় ২: প্রজেক্ট")}
            </button>
          </div>

          {/* Progress Tracker */}
          <ProgressTracker currentPage={currentPage} totalPages={totalPages} />
        </div>

        {/* Right: Language Toggle & Slide Controls */}
        <div className="flex items-center gap-2">
          {/* Language Toggle (English vs বাংলা) */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1e2235] hover:bg-[#252b42] border border-amber-400/40 text-xs font-mono font-bold transition-all"
            title="Toggle Language (English / বাংলা)"
          >
            <Languages className="w-3.5 h-3.5 text-amber-400" />
            <span className={lang === 'bn' ? 'text-amber-300 font-black' : 'text-slate-300'}>
              {lang === 'bn' ? 'বাংলা' : 'EN'}
            </span>
          </button>

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
              className="bg-transparent text-xs font-mono font-bold text-white px-1.5 py-0.5 focus:outline-none cursor-pointer max-w-[110px] sm:max-w-[160px] truncate"
            >
              {SIDE_BY_SIDE_SLIDES.map((s) => (
                <option key={s.page} value={s.page} className="bg-slate-900 text-white">
                  #{s.page}: {t(s.title, s.titleBn)}
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
            className="p-2 rounded-xl bg-[#1e2235] hover:bg-[#252b42] text-slate-300 hover:text-white border border-slate-800 transition-colors hidden sm:flex items-center justify-center"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
