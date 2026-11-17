import React, { useState } from 'react';
import { 
  Globe, 
  Database, 
  RefreshCw, 
  Terminal,
  Box, 
  FileText,
  Layers,
  GitBranch,
  Repeat,
  Cpu,
  Boxes,
  FolderInput,
  Send,
  Scale, 
  DollarSign,
  FolderTree, 
  ChevronRight, 
  ChevronDown,
  CheckCircle2, 
  X,
  Play,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { MODULES_DATA } from '../../data/modulesData';
import { useLanguage } from '../../contexts/LanguageContext';

export function ChapterSidebar({
  activeChapterId,
  onSelectChapter,
  isOpen,
  onClose,
  onStartPresentation
}) {
  const { lang, t } = useLanguage();
  const [collapsedPhases, setCollapsedPhases] = useState({});

  const togglePhase = (phaseKey) => {
    setCollapsedPhases(prev => ({
      ...prev,
      [phaseKey]: !prev[phaseKey]
    }));
  };

  const getModuleIcon = (iconName) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'Database': return Database;
      case 'RefreshCw': return RefreshCw;
      case 'Terminal': return Terminal;
      case 'Box': return Box;
      case 'FileText': return FileText;
      case 'Layers': return Layers;
      case 'GitBranch': return GitBranch;
      case 'Repeat': return Repeat;
      case 'Cpu': return Cpu;
      case 'Boxes': return Boxes;
      case 'FolderInput': return FolderInput;
      case 'Send': return Send;
      case 'Scale': return Scale;
      case 'DollarSign': return DollarSign;
      case 'FolderTree': return FolderTree;
      default: return BookOpen;
    }
  };

  // Group modules by Phase
  const phases = [
    {
      key: "phase-1",
      title: "Phase 1: Web & Data Foundations",
      titleBn: "পর্যায় ১: ওয়েব ও ডাটাবেজ মূলনীতি",
      modules: MODULES_DATA.filter(m => m.id >= 1 && m.id <= 3)
    },
    {
      key: "phase-2",
      title: "Phase 2: PHP Core Fundamentals",
      titleBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
      modules: MODULES_DATA.filter(m => m.id >= 4 && m.id <= 13)
    },
    {
      key: "phase-3",
      title: "Phase 3: Language Synthesis & Real World",
      titleBn: "পর্যায় ৩: সমন্বয় ও বাস্তব প্রজেক্ট",
      modules: MODULES_DATA.filter(m => m.id >= 14 && m.id <= 16)
    }
  ];

  const totalModules = MODULES_DATA.length;
  const currentProgressPct = Math.round((activeChapterId / totalModules) * 100);

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
      <aside className={`fixed top-0 bottom-0 left-0 z-50 w-80 bg-[#0c0e1a]/98 border-r border-slate-800 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Top Header */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-[#0e1122]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FACC15] to-amber-500 text-slate-950 font-black flex items-center justify-center text-xs shadow-md shadow-yellow-500/20">
              &lt;/&gt;
            </div>
            <div>
              <span className="font-bold text-white text-xs tracking-tight block">
                {t("PHP Learning Academy", "পিএইচপি লার্নিং একাডেমি")}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {t("16 Modules · Full Curriculum", "১৬টি পূর্ণাঙ্গ মডিউল")}
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
        <div className="p-3 border-b border-slate-800/60 bg-[#121528]">
          <button
            onClick={onStartPresentation}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FACC15] to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-slate-950 font-black text-xs shadow-lg shadow-yellow-500/10 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{t("Start Presentation Deck (P)", "প্রেজেন্টেশন ডেক শুরু (P)")}</span>
          </button>
        </div>

        {/* Modules Scroll List Grouped by Phase */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 scrollbar-thin">
          {phases.map((phase) => {
            const isPhaseCollapsed = collapsedPhases[phase.key];
            const hasActiveModule = phase.modules.some(m => m.id === activeChapterId);

            return (
              <div key={phase.key} className="space-y-1.5">
                {/* Phase Section Header */}
                <button
                  onClick={() => togglePhase(phase.key)}
                  className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-800/40 text-[11px] font-mono font-bold text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <span className={`w-1.5 h-1.5 rounded-full ${hasActiveModule ? 'bg-amber-400 animate-pulse' : 'bg-slate-600'}`} />
                    <span className="truncate uppercase tracking-wider">
                      {lang === 'bn' ? phase.titleBn : phase.title}
                    </span>
                  </div>
                  {isPhaseCollapsed ? (
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                  )}
                </button>

                {/* Modules in this Phase */}
                {!isPhaseCollapsed && (
                  <div className="space-y-1 pl-1">
                    {phase.modules.map((m) => {
                      const isSelected = m.id === activeChapterId;
                      const Icon = getModuleIcon(m.icon);

                      return (
                        <div key={m.id} className="space-y-1">
                          <button
                            onClick={() => {
                              onSelectChapter(m.id);
                              if (window.innerWidth < 1024) onClose();
                            }}
                            className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-2.5 border ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#171c35] to-[#1f2446] border-amber-400/50 shadow-md ring-1 ring-amber-400/20'
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
                                  {lang === 'bn' ? m.titleBn : m.title}
                                </span>
                              </div>
                              <span className="text-[10px] text-slate-400 truncate block mt-0.5 font-sans">
                                {lang === 'bn' ? m.subtitleBn : m.subtitle}
                              </span>
                            </div>

                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 mt-1 transition-transform ${
                              isSelected ? 'text-amber-400 rotate-90' : 'text-slate-600'
                            }`} />
                          </button>

                          {/* Sub-lessons drawer when active */}
                          {isSelected && m.lessons && m.lessons.length > 0 && (
                            <div className="pl-8 pr-2 py-1 space-y-1 border-l-2 border-amber-400/30 ml-4 my-1">
                              {m.lessons.map((lesson) => (
                                <button
                                  key={lesson.id}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    onSelectChapter(m.id, lesson.targetId);
                                    if (window.innerWidth < 1024) onClose();
                                  }}
                                  className="w-full text-left text-[11px] font-mono text-slate-300 hover:text-amber-300 hover:bg-slate-800/70 rounded-lg px-2 py-1.5 flex items-center gap-1.5 transition-all group cursor-pointer"
                                >
                                  <span className="text-[9px] text-amber-400 font-bold group-hover:text-amber-300 shrink-0">
                                    {lesson.id}
                                  </span>
                                  <span className="truncate">
                                    {lang === 'bn' ? lesson.titleBn : lesson.title}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Status / Progress Indicator */}
        <div className="p-3 border-t border-slate-800 bg-[#090b14] text-xs">
          <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1 font-mono">
            <span>{t("Course Progress", "শিক্ষাক্রম অগ্রগতি")}</span>
            <span className="text-amber-300 font-bold">{currentProgressPct}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#FACC15] via-amber-400 to-emerald-400 transition-all duration-300"
              style={{ width: `${currentProgressPct}%` }}
            />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-slate-500 font-mono">
            <span>Module {activeChapterId} of {totalModules}</span>
            <span>{currentProgressPct >= 100 ? "Completed!" : "In Progress"}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
export default ChapterSidebar;