import React from 'react';
import { 
  Menu, 
  Languages, 
  Maximize2, 
  Minimize2, 
  Play, 
  Scale,
  Sparkles,
  ChevronDown 
} from 'lucide-react';
import { MODULES_DATA } from '../../data/modulesData';
import { useLanguage } from '../../contexts/LanguageContext';

export function AppHeader({
  activeChapterId,
  onSelectChapter,
  onToggleSidebar,
  onStartPresentation,
  isFullscreen,
  onToggleFullscreen
}) {
  const { lang, toggleLang, t } = useLanguage();
  const currentModule = MODULES_DATA.find(m => m.id === activeChapterId) || MODULES_DATA[0];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-800 bg-[#0c0e1a]/90 backdrop-blur-md px-3 sm:px-6 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Sidebar Toggle & Module Dropdown */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-xl bg-[#171b30] hover:bg-[#202542] text-slate-300 hover:text-white border border-slate-700 lg:hidden"
            title="Toggle Curriculum Menu"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Module Quick Jumper Dropdown */}
          <div className="relative">
            <select
              value={activeChapterId}
              onChange={(e) => onSelectChapter(Number(e.target.value))}
              className="appearance-none bg-[#141829] border border-slate-700 text-xs text-white font-bold py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:border-amber-400 cursor-pointer shadow-sm max-w-[190px] sm:max-w-xs md:max-w-sm truncate"
            >
              {MODULES_DATA.map((m) => (
                <option key={m.id} value={m.id}>
                  {lang === 'bn' ? m.titleBn : m.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Center: Current Module Badge for Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-slate-300 truncate max-w-sm">
            {lang === 'bn' ? currentModule.titleBn : currentModule.title}
          </span>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Jump to Comparison Lab (Module 15) */}
          <button
            onClick={() => onSelectChapter(15)}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
              activeChapterId === 15
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm'
                : 'bg-[#141829] border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50'
            }`}
            title="Jump to Module 15: PHP vs JS Translation Lab"
          >
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t("PHP vs JS Lab", "PHP বনাম JS ল্যাব")}</span>
          </button>

          {/* Start Presentation Button */}
          <button
            onClick={onStartPresentation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs shadow-md shadow-yellow-500/10 transition-all hover:scale-105 active:scale-95"
            title="Enter Presentation Mode (P)"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">{t("Presentation Mode", "প্রেজেন্টেশন মোড")}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#171b30] hover:bg-[#202542] border border-amber-400/40 text-xs font-mono font-bold transition-all"
            title="Toggle Language (English / বাংলা)"
          >
            <Languages className="w-3.5 h-3.5 text-amber-400" />
            <span className={lang === 'bn' ? 'text-amber-300 font-black' : 'text-slate-300'}>
              {lang === 'bn' ? 'বাংলা' : 'EN'}
            </span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-xl bg-[#171b30] hover:bg-[#202542] text-slate-400 hover:text-white border border-slate-700 text-xs"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
export default AppHeader;
