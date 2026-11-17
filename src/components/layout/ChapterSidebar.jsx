import React from 'react';
import { 
  Globe, 
  Database, 
  RefreshCw, 
  Box, 
  Scale, 
  Code2, 
  FolderTree, 
  ChevronRight, 
  CheckCircle2, 
  X,
  Play,
  Sparkles
} from 'lucide-react';
import { CHAPTERS_DATA } from '../../data/chaptersData';
import { useLanguage } from '../../contexts/LanguageContext';

export function ChapterSidebar({
  activeChapterId,
  onSelectChapter,
  isOpen,
  onClose,
  onStartPresentation
}) {
  const { lang, t } = useLanguage();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Database': return Database;
      case 'RefreshCw': return RefreshCw;
      case 'Box': return Box;
      case 'Scale': return Scale;
      case 'Code2': return Code2;
      case 'FolderTree': return FolderTree;
      default: return Globe;
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed top-0 bottom-0 left-0 z-50 w-80 bg-[#0e111e]/98 border-r border-slate-800 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Top Header of Sidebar */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FACC15] to-amber-500 text-slate-950 font-black flex items-center justify-center text-xs shadow-md shadow-yellow-500/10">
              &lt;/&gt;
            </div>
            <div>
              <span className="font-bold text-white text-xs tracking-tight block">
                {t("PHP & Web Curriculum", "ওয়েব ও পিএইচপি শিক্ষাক্রম")}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {t("7 Core Chapters · 1st Principles", "৭টি মূল অধ্যায় · প্রথম মূলনীতি")}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Presentation Mode Quick Button */}
        <div className="p-3 border-b border-slate-800/60 bg-[#121526]">
          <button
            onClick={onStartPresentation}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FACC15] to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-slate-950 font-black text-xs shadow-lg shadow-yellow-500/10 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{t("Start Presentation Mode (P)", "প্রেজেন্টেশন মোড শুরু (P)")}</span>
          </button>
        </div>

        {/* Chapters Scroll List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-thin">
          <div className="px-2 py-1 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
            {t("Learning Roadmap", "অধ্যায় তালিকা")}
          </div>

          {CHAPTERS_DATA.map((ch) => {
            const isSelected = ch.id === activeChapterId;
            const Icon = getIcon(ch.icon);

            return (
              <div key={ch.id} className="space-y-1">
                <button
                  onClick={() => {
                    onSelectChapter(ch.id);
                    if (window.innerWidth < 1024) onClose();
                  }}
                  className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#171b30] to-[#1e2340] border-amber-400/50 shadow-md ring-1 ring-amber-400/20'
                      : 'border-transparent hover:bg-slate-800/40 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-[#FACC15] text-slate-950 font-black shadow-sm'
                      : 'bg-slate-800/80 text-slate-400'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold truncate block ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {lang === 'bn' ? ch.titleBn : ch.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 truncate block mt-0.5 font-sans">
                      {lang === 'bn' ? ch.subtitleBn : ch.subtitle}
                    </span>
                  </div>

                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 mt-1 transition-transform ${
                    isSelected ? 'text-amber-400 rotate-90' : 'text-slate-600'
                  }`} />
                </button>

                {/* Subtopic drawer when active */}
                {isSelected && (
                  <div className="pl-9 pr-2 py-1 space-y-1 border-l-2 border-amber-400/30 ml-4 my-1">
                    {ch.subtopics.map((sub) => {
                      const targetSectionId = `section-${sub.id.replace('.', '-')}`;
                      return (
                        <button
                          key={sub.id}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onSelectChapter(ch.id, targetSectionId);
                            if (window.innerWidth < 1024) onClose();
                          }}
                          className="w-full text-left text-[11px] font-mono text-slate-300 hover:text-amber-300 hover:bg-slate-800/70 rounded-lg px-2 py-1.5 flex items-center gap-1.5 transition-all group cursor-pointer"
                        >
                          <span className="text-[9px] text-amber-400 font-bold group-hover:text-amber-300 shrink-0">{sub.id}</span>
                          <span className="truncate">{lang === 'bn' ? sub.titleBn : sub.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Status / Progress Indicator */}
        <div className="p-3 border-t border-slate-800 bg-[#0a0c16] text-xs">
          <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1 font-mono">
            <span>{t("Course Progress", "শিক্ষাক্রম অগ্রগতি")}</span>
            <span className="text-amber-300 font-bold">{Math.round((activeChapterId / 7) * 100)}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#FACC15] to-emerald-400 transition-all duration-300"
              style={{ width: `${(activeChapterId / 7) * 100}%` }}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
export default ChapterSidebar;
