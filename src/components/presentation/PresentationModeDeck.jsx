import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Minimize2, 
  Languages, 
  List, 
  Sparkles,
  Play,
  RotateCcw,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

// Chapter components embedded in slides
import { RestaurantAnalogy } from '../chapters/chapter1/RestaurantAnalogy';
import { FrontendBackendDbExplainer } from '../chapters/chapter1/FrontendBackendDbExplainer';
import { WebArchitectureDiagram } from '../chapters/chapter1/WebArchitectureDiagram';
import { ParticleRequestLifecycle } from '../chapters/chapter1/ParticleRequestLifecycle';
import { DatabaseStorageExplainer } from '../chapters/chapter2/DatabaseStorageExplainer';
import { SqlSimulator } from '../chapters/chapter2/SqlSimulator';
import { DataTransformationPipeline } from '../chapters/chapter3/DataTransformationPipeline';
import { ArrayDeepDive } from '../chapters/chapter4/ArrayDeepDive';
import { ArrayPlayground } from '../chapters/chapter4/ArrayPlayground';
import { WhyPhpComparison } from '../chapters/chapter5/WhyPhpComparison';
import { PhpFundamentalsSection } from '../chapters/chapter6/PhpFundamentalsSection';
import { ProjectArchitectureSection } from '../chapters/chapter7/ProjectArchitectureSection';
import { ComputerExecutionDiagram } from '../common/ComputerExecutionDiagram';
import { Module15ComparisonLab } from '../modules/Module15ComparisonLab';

export function PresentationModeDeck({ onClose, isFullscreen, onToggleFullscreen }) {
  const { lang, toggleLang, t } = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTocOpen, setIsTocOpen] = useState(false);

  const presentationSlides = [
    {
      id: "cover",
      chapterBadge: "MASTER PRESENTATION",
      title: "From 1st Principles to Real Architecture",
      titleBn: "ওয়েবের প্রথম মূলনীতি থেকে পূর্ণাঙ্গ পিএইচপি আর্কিটেকচার",
      subtitle: "A Complete Interactive Web Development Learning Experience (PHP & JS)",
      subtitleBn: "পিএইচপি এবং জাভাস্ক্রিপ্ট ইন্টারেক্টিভ প্রোগ্রামিং ল্যাবরেটরি",
      component: (
        <div className="py-8 sm:py-16 text-center space-y-6 max-w-3xl mx-auto px-4">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FACC15] via-amber-400 to-[#777BB4] text-slate-950 flex items-center justify-center font-mono font-black text-3xl mx-auto shadow-2xl shadow-yellow-500/20">
            &lt;/&gt;
          </div>
          <div className="space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#1e2235] text-amber-300 border border-amber-400/30">
              NATIONAL INSTITUTE OF YOUTH DEVELOPMENT (NIYD)
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              PHP & Web Architecture Explorer
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              {t(
                "A complete interactive visual journey through web fundamentals, database storage, data transformations, array manipulations, architectural trade-offs, and our production PHP project.",
                "ইন্টারনেট কীভাবে কাজ করে তা থেকে শুরু করে ডাটাবেজ, ডাটা ট্রান্সফর্মেশন, অ্যারে, টেকনোলজি সিলেকশন এবং আমাদের বাস্তব php-class-two প্রজেক্ট ডিকনস্ট্রাকশন।"
              )}
            </p>
          </div>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-lg bg-[#141828] border border-slate-800">Use Arrow Keys (← / →)</span>
            <span className="px-3 py-1 rounded-lg bg-[#141828] border border-slate-800">Press 'T' for All Slides</span>
            <span className="px-3 py-1 rounded-lg bg-[#141828] border border-slate-800">Press 'F' for Fullscreen</span>
            <span className="px-3 py-1 rounded-lg bg-[#141828] border border-slate-800">Press 'Esc' to Exit</span>
          </div>
        </div>
      )
    },
    {
      id: "ch1-analogy",
      chapterBadge: "CHAPTER 01 · 1ST PRINCIPLES",
      title: "1. The Restaurant Analogy: Customer, Waiter, Chef & Pantry",
      titleBn: "১. রেস্তোরাঁর উপমা: গ্রাহক, ওয়েটার, শেফ ও কোল্ড স্টোরেজ",
      component: <RestaurantAnalogy />
    },
    {
      id: "ch1-layers",
      chapterBadge: "CHAPTER 01 · 1ST PRINCIPLES",
      title: "2. The 3 Layers: Frontend, Backend & Database Storage",
      titleBn: "২. তিনটি স্তর: ফ্রন্টএন্ড, ব্যাকএন্ড এবং ডাটাবেজ",
      component: <FrontendBackendDbExplainer />
    },
    {
      id: "ch1-architecture",
      chapterBadge: "CHAPTER 01 · 1ST PRINCIPLES",
      title: "3. Complete Web Application Communication Loop",
      titleBn: "৩. ওয়েব অ্যাপ্লিকেশনের পূর্ণাঙ্গ যোগাযোগ চক্র",
      component: <WebArchitectureDiagram />
    },
    {
      id: "ch1-lifecycle",
      chapterBadge: "CHAPTER 01 · 1ST PRINCIPLES",
      title: "4. Full-Screen Animated Request Lifecycle Simulator",
      titleBn: "৪. ধাপে ধাপে রিকোয়েস্ট লাইফসাইকেল সিমুলেটর",
      component: <ParticleRequestLifecycle />
    },
    {
      id: "computer-cpu",
      chapterBadge: "HARDWARE & SERVER FOUNDATIONS",
      title: "5. Functional Block Diagram of a Typical Computer (ALU, CU, RAM & I/O)",
      titleBn: "৫. কম্পিউটারের কার্যকরী ব্লক ডায়াগ্রাম (ALU, CU, RAM ও ইনপুট/আউটপুট)",
      component: <ComputerExecutionDiagram />
    },
    {
      id: "ch2-storage",
      chapterBadge: "CHAPTER 02 · DATA STORAGE",
      title: "6. Relational Tables vs Document JSON Models (MySQL & MongoDB)",
      titleBn: "৬. রিলেশনাল টেবিল বনাম ডকুমেন্ট মডেল (MySQL ও MongoDB)",
      component: <DatabaseStorageExplainer />
    },
    {
      id: "ch2-sql",
      chapterBadge: "CHAPTER 02 · DATA STORAGE",
      title: "7. Interactive SQL Query Engine & WHERE Filtering",
      titleBn: "৭. এসকিউএল কুয়েরি ও ফিল্টারিং সিমুলেশন",
      component: <SqlSimulator />
    },
    {
      id: "ch3-transformation",
      chapterBadge: "CHAPTER 03 · THE BRIDGE",
      title: "8. How Stored Database Rows Become PHP Arrays & JS Objects",
      titleBn: "৮. ডাটাবেজ রেকর্ড যেভাবে PHP অ্যারে ও জাভাস্ক্রিপ্ট অবজেক্টে পরিণত হয়",
      component: <DataTransformationPipeline />
    },
    {
      id: "ch4-arrays",
      chapterBadge: "CHAPTER 04 · DATA STRUCTURES",
      title: "9. Understanding Arrays from Zero: PHP vs JavaScript",
      titleBn: "৯. শুরু থেকে অ্যারে: পিএইচপি বনাম জাভাস্ক্রিপ্ট",
      component: <ArrayDeepDive />
    },
    {
      id: "ch4-playground",
      chapterBadge: "CHAPTER 04 · DATA STRUCTURES",
      title: "10. Interactive Array Laboratory: Dual PHP & JS Tabs",
      titleBn: "১০. লাইভ অ্যারে ল্যাব: PHP ও JS উভয় ট্যাবে পরীক্ষা",
      component: <ArrayPlayground />
    },
    {
      id: "ch6-fundamentals",
      chapterBadge: "PHP FUNDAMENTALS",
      title: "11. Core PHP Fundamentals & Interactive Sandbox",
      titleBn: "১১. পিএইচপি ফান্ডামেন্টালস ও মূল পাঠ",
      component: <PhpFundamentalsSection />
    },
    {
      id: "comparison-lab",
      chapterBadge: "MODULE 15 · SYNTHESIS & COMPARISON",
      title: "12. PHP vs JavaScript Interactive Translation Lab",
      titleBn: "১২. পিএইচপি বনাম জাভাস্ক্রিপ্ট অনুবাদ ও সিনট্যাক্স ল্যাব",
      component: <Module15ComparisonLab />
    },
    {
      id: "ch5-whyphp",
      chapterBadge: "ARCHITECTURAL SELECTION",
      title: "13. Why PHP? Traditional PHP vs Next.js Full-Stack",
      titleBn: "১৩. কেন পিএইচপি? ট্র্যাডিশনাল PHP বনাম আধুনিক Next.js",
      component: <WhyPhpComparison />
    },
    {
      id: "ch7-project",
      chapterBadge: "THE REAL WORLD PROJECT",
      title: "14. Our Actual PHP Project: php-class-two Architecture",
      titleBn: "১৪. আমাদের আসল পিএইচপি প্রজেক্ট (php-class-two) আর্কিটেকচার",
      component: <ProjectArchitectureSection />
    }
  ];

  const totalSlides = presentationSlides.length;
  const currentSlide = presentationSlides[slideIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setSlideIndex(prev => Math.min(totalSlides - 1, prev + 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSlideIndex(prev => Math.max(0, prev - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setIsTocOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (isTocOpen) {
          setIsTocOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        onToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, isTocOpen, onClose, onToggleFullscreen]);

  const handlePrev = () => {
    setSlideIndex(prev => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    setSlideIndex(prev => Math.min(totalSlides - 1, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#080a14] text-slate-100 flex flex-col font-sans overflow-y-auto selection:bg-[#FACC15] selection:text-slate-950">
      {/* Top Presentation Bar */}
      <header className="sticky top-0 z-40 bg-[#0d1020]/95 backdrop-blur-md border-b border-slate-800 px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Indicator, Slide Title & TOC button */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <button
              onClick={() => setIsTocOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141829] hover:bg-[#1e233d] border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-all shrink-0"
              title="Table of Contents (T)"
            >
              <List className="w-3.5 h-3.5 text-[#FACC15]" />
              <span className="hidden sm:inline">{t("All Slides (T)", "সকল স্লাইড (T)")}</span>
            </button>

            <span className="px-2 py-0.5 rounded-md bg-[#161a30] text-[10px] font-mono font-bold text-amber-300 border border-amber-400/30 shrink-0 hidden md:inline-block">
              {currentSlide.chapterBadge}
            </span>

            <h2 className="text-xs sm:text-sm font-bold text-white truncate hidden lg:block">
              {lang === 'bn' ? currentSlide.titleBn : currentSlide.title}
            </h2>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Slide Index Badge */}
            <span className="text-xs font-mono font-bold text-slate-300 px-2.5 py-1 rounded-lg bg-[#141829] border border-slate-800">
              {slideIndex + 1} / {totalSlides}
            </span>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#141829] hover:bg-[#1e233d] border border-amber-400/40 text-xs font-mono font-bold"
              title="Toggle Language"
            >
              <Languages className="w-3.5 h-3.5 text-amber-400" />
              <span className={lang === 'bn' ? 'text-amber-300 font-bold' : 'text-slate-300'}>
                {lang === 'bn' ? 'বাংলা' : 'EN'}
              </span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={onToggleFullscreen}
              className="p-1.5 rounded-lg bg-[#141829] hover:bg-[#1e233d] text-slate-400 hover:text-white border border-slate-800"
              title="Toggle Fullscreen (F)"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

            {/* Exit Presentation Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-500/40 text-xs font-bold transition-all shadow-sm"
              title="Exit Presentation (Esc or P)"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t("Exit", "প্রস্থান")}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Progress Line */}
      <div className="w-full bg-[#101426] h-1.5 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#FACC15] via-amber-400 to-[#777BB4] transition-all duration-300"
          style={{ width: `${((slideIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Main Slide Presentation Canvas */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6 flex flex-col justify-start overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {currentSlide.component}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Floating Presentation Control Bar */}
      <footer className="sticky bottom-0 z-40 bg-[#0d1020]/95 backdrop-blur-md border-t border-slate-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={handlePrev}
            disabled={slideIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141829] hover:bg-[#1e233d] disabled:opacity-30 text-white text-xs font-bold transition-all border border-slate-800 shrink-0"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t("Previous", "পূর্ববর্তী")}</span>
          </button>

          {/* Quick Dots / Key Hint */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs sm:max-w-md py-1">
            {presentationSlides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setSlideIndex(idx);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`h-2 rounded-full transition-all shrink-0 ${
                  idx === slideIndex 
                    ? 'w-6 bg-[#FACC15] shadow-md shadow-yellow-400/30' 
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                title={lang === 'bn' ? s.titleBn : s.title}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={slideIndex === totalSlides - 1}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#FACC15] hover:bg-yellow-300 disabled:opacity-30 text-slate-950 font-black text-xs transition-all shadow-lg shadow-yellow-500/10 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{slideIndex === totalSlides - 1 ? t("Finished!", "সম্পূর্ণ!") : t("Next Slide", "পরবর্তী")}</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </footer>

      {/* Slide Table of Contents Modal */}
      {isTocOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-2xl bg-[#0e1122] border border-slate-800 rounded-3xl p-6 shadow-2xl max-h-[85vh] flex flex-col"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FACC15] text-slate-950 font-black flex items-center justify-center text-xs">
                  <List className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {t("Slide Navigation Drawer", "স্লাইড নেভিগেশন")}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {totalSlides} {t("Interactive Presentation Slides", "টি ইন্টারেক্টিভ স্লাইড")}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsTocOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-2 scrollbar-thin">
              {presentationSlides.map((s, idx) => {
                const isCurrent = idx === slideIndex;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSlideIndex(idx);
                      setIsTocOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isCurrent
                        ? 'border-[#FACC15] bg-yellow-950/20 shadow-md ring-1 ring-yellow-400/30'
                        : 'border-slate-800/80 bg-[#141829] hover:border-slate-700 hover:bg-[#1a2036]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                        isCurrent ? 'bg-[#FACC15] text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-amber-400 block uppercase">
                          {s.chapterBadge}
                        </span>
                        <span className={`text-xs font-bold truncate block ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                          {lang === 'bn' ? s.titleBn : s.title}
                        </span>
                      </div>
                    </div>

                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 shrink-0">
                        CURRENT
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
export default PresentationModeDeck;
