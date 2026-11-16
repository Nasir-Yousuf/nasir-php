import React from 'react';
import { X, ChevronRight, BookOpen } from 'lucide-react';
import { SIDE_BY_SIDE_SLIDES } from '../../data/sideBySideCurriculum';
import { useLanguage } from '../../contexts/LanguageContext';

export function TableOfContentsModal({
  isOpen,
  onClose,
  currentPage,
  onSelectPage
}) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const phase1Slides = SIDE_BY_SIDE_SLIDES.filter(s => s.page <= 15);
  const phase2Slides = SIDE_BY_SIDE_SLIDES.filter(s => s.page >= 16);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#181a29] border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#FACC15]" />
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {t("Curriculum Table of Contents (26 Slides)", "শিক্ষাক্রম সূচিপত্র (২৬টি স্লাইড)")}
              </h3>
              <p className="text-xs text-slate-400">
                {t("Phase 1: Basics Side by Side · Phase 2: php-class-two Architecture", "পর্যায় ১: মৌলিক ব্যাকরণ পাশাপাশি · পর্যায় ২: বাস্তব প্রজেক্ট আর্কিটেকচার")}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1e2235] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slides List Grid */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 scrollbar-thin">
          {/* Phase 1 Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#777BB4] uppercase tracking-wider border-b border-slate-800/80 pb-2">
              <span className="w-5 h-5 rounded bg-[#777BB4]/20 border border-[#777BB4]/40 text-[#a5a9e2] flex items-center justify-center text-[10px]">1</span>
              <span>{t("Phase 1: Language Basics Side by Side (Slides 1–15)", "পর্যায় ১: মৌলিক ব্যাকরণ পাশাপাশি (স্লাইড ১–১৫)")}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {phase1Slides.map((slide) => {
                const isCurrent = currentPage === slide.page;
                return (
                  <button
                    key={slide.page}
                    onClick={() => {
                      onSelectPage(slide.page);
                      onClose();
                    }}
                    className={`p-3 rounded-xl text-left border transition-all text-xs font-mono flex items-center justify-between group ${
                      isCurrent
                        ? 'bg-[#777BB4]/20 border-[#777BB4] text-[#a5a9e2] font-bold shadow-md'
                        : 'bg-[#1e2235] border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="truncate mr-2">
                      <span className="text-slate-500 font-semibold mr-1.5">#{slide.page}</span>
                      <span>{t(slide.title, slide.titleBn)}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isCurrent ? 'text-[#a5a9e2]' : 'text-slate-600 group-hover:translate-x-0.5'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Phase 2 Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FACC15] uppercase tracking-wider border-b border-slate-800/80 pb-2">
              <span className="w-5 h-5 rounded bg-[#FACC15]/20 border border-[#FACC15]/40 text-[#FACC15] flex items-center justify-center text-[10px]">2</span>
              <span>{t("Phase 2: The Real php-class-two Project (Slides 16–26)", "পর্যায় ২: বাস্তব php-class-two প্রজেক্ট (স্লাইড ১৬–২৬)")}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {phase2Slides.map((slide) => {
                const isCurrent = currentPage === slide.page;
                return (
                  <button
                    key={slide.page}
                    onClick={() => {
                      onSelectPage(slide.page);
                      onClose();
                    }}
                    className={`p-3 rounded-xl text-left border transition-all text-xs font-mono flex items-center justify-between group ${
                      isCurrent
                        ? 'bg-[#FACC15]/20 border-[#FACC15] text-[#FACC15] font-bold shadow-md'
                        : 'bg-[#1e2235] border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="truncate mr-2">
                      <span className="text-slate-500 font-semibold mr-1.5">#{slide.page}</span>
                      <span>{t(slide.title, slide.titleBn)}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isCurrent ? 'text-[#FACC15]' : 'text-slate-600 group-hover:translate-x-0.5'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#161927] flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>{t("Press ESC or click anywhere outside to close", "বন্ধ করতে ESC চাপুন বা বাইরে ক্লিক করুন")}</span>
          <span className="text-[#FACC15]">NIYD Workshop</span>
        </div>
      </div>
    </div>
  );
}
