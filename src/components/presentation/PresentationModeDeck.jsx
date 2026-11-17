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
  RotateCcw
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

export function PresentationModeDeck({ onClose, isFullscreen, onToggleFullscreen }) {
  const { lang, toggleLang, t } = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);

  const presentationSlides = [
    {
      id: "cover",
      chapterBadge: "MASTER PRESENTATION",
      title: "From 1st Principles to Real Architecture",
      titleBn: "ওয়েবের প্রথম মূলনীতি থেকে পূর্ণাঙ্গ পিএইচপি আর্কিটেকচার",
      subtitle: "A Complete Interactive Web Development Learning Experience (PHP & JS)",
      subtitleBn: "পিএইচপি এবং জাভাস্ক্রিপ্ট ইন্টারেক্টিভ প্রোগ্রামিং ল্যাবরেটরি",
      component: (
        <div className="py-12 text-center space-y-6 max-w-3xl mx-auto">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FACC15] via-amber-400 to-[#777BB4] text-slate-950 flex items-center justify-center font-mono font-black text-3xl mx-auto shadow-2xl shadow-yellow-500/20">
            &lt;/&gt;
          </div>
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1e2235] text-amber-300 border border-amber-400/30">
              NATIONAL INSTITUTE OF YOUTH DEVELOPMENT (NIYD)
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              PHP & Web Architecture Explorer
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              {t(
                "A complete interactive visual journey through web fundamentals, database storage, data transformations, array manipulations, architectural trade-offs, and our production PHP project.",
                "ইন্টারনেট কীভাবে কাজ করে তা থেকে শুরু করে ডাটাবেজ, ডাটা ট্রান্সফর্মেশন, অ্যারে, টেকনোলজি সিলেকশন এবং আমাদের বাস্তব php-class-two প্রজেক্ট ডিকনস্ট্রাকশন।"
              )}
            </p>
          </div>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded-lg bg-[#141828] border border-slate-800">Use Arrow Keys (← / →)</span>
            <span className="px-2.5 py-1 rounded-lg bg-[#141828] border border-slate-800">Press 'F' for Fullscreen</span>
            <span className="px-2.5 py-1 rounded-lg bg-[#141828] border border-slate-800">Press 'P' or 'Esc' to Exit</span>
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
      id: "ch2-storage",
      chapterBadge: "CHAPTER 02 · DATA STORAGE",
      title: "5. Relational Tables vs Document JSON Models (MySQL & MongoDB)",
      titleBn: "৫. রিলেশনাল টেবিল বনাম ডকুমেন্ট মডেল (MySQL ও MongoDB)",
      component: <DatabaseStorageExplainer />
    },
    {
      id: "ch2-sql",
      chapterBadge: "CHAPTER 02 · DATA STORAGE",
      title: "6. Interactive SQL Query Engine & WHERE Filtering",
      titleBn: "৬. এসকিউএল কুয়েরি ও ফিল্টারিং সিমুলেশন",
      component: <SqlSimulator />
    },
    {
      id: "ch3-transformation",
      chapterBadge: "CHAPTER 03 · THE BRIDGE",
      title: "7. How Stored Database Rows Become PHP Arrays & JS Objects",
      titleBn: "৭. ডাটাবেজ রেকর্ড যেভাবে PHP অ্যারে ও জাভাস্ক্রিপ্ট অবজেক্টে পরিণত হয়",
      component: <DataTransformationPipeline />
    },
    {
      id: "ch4-arrays",
      chapterBadge: "CHAPTER 04 · DATA STRUCTURES",
      title: "8. Understanding Arrays from Zero: PHP vs JavaScript",
      titleBn: "৮. শুরু থেকে অ্যারে: পিএইচপি বনাম জাভাস্ক্রিপ্ট",
      component: <ArrayDeepDive />
    },
    {
      id: "ch4-playground",
      chapterBadge: "CHAPTER 04 · DATA STRUCTURES",
      title: "9. Interactive Array Laboratory: Dual PHP & JS Tabs",
      titleBn: "৯. লাইভ অ্যারে ল্যাব: PHP ও JS উভয় ট্যাবে পরীক্ষা",
      component: <ArrayPlayground />
    },
    {
      id: "ch5-whyphp",
      chapterBadge: "CHAPTER 05 · ARCHITECTURAL SELECTION",
      title: "10. Why PHP? Traditional PHP vs Next.js Full-Stack",
      titleBn: "১০. কেন পিএইচপি? ট্র্যাডিশনাল PHP বনাম আধুনিক Next.js",
      component: <WhyPhpComparison />
    },
    {
      id: "ch6-fundamentals",
      chapterBadge: "CHAPTER 06 · SYNTAX & WORKSHOP",
      title: "11. PHP Fundamentals and Core Classroom Lessons",
      titleBn: "১১. পিএইচপি ফান্ডামেন্টালস ও মূল পাঠ",
      component: <PhpFundamentalsSection />
    },
    {
      id: "ch7-project",
      chapterBadge: "CHAPTER 07 · THE REAL PROJECT",
      title: "12. Our Actual PHP Project: php-class-two Architecture",
      titleBn: "১২. আমাদের আসল পিএইচপি প্রজেক্ট (php-class-two) আর্কিটেকচার",
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
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSlideIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        onToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, onClose, onToggleFullscreen]);

  const handlePrev = () => setSlideIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setSlideIndex(prev => Math.min(totalSlides - 1, prev + 1));

  return (
    <div className="fixed inset-0 z-50 bg-[#080a14] text-slate-100 flex flex-col font-sans overflow-y-auto selection:bg-[#FACC15] selection:text-slate-950">
      {/* Top Presentation Bar */}
      <div className="sticky top-0 z-40 bg-[#0d1020]/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="px-2 py-0.5 rounded-md bg-[#161a30] text-[10px] font-mono font-bold text-amber-300 border border-amber-400/30">
            {currentSlide.chapterBadge}
          </span>
          <h2 className="text-xs sm:text-sm font-bold text-white truncate max-w-md hidden sm:block">
            {lang === 'bn' ? currentSlide.titleBn : currentSlide.title}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {/* Slide index pill */}
          <span className="text-xs font-mono font-bold text-slate-300 px-2.5 py-1 rounded-lg bg-[#141829] border border-slate-800">
            Slide {slideIndex + 1} / {totalSlides}
          </span>

          {/* Language toggle */}
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

          {/* Fullscreen */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-lg bg-[#141829] hover:bg-[#1e233d] text-slate-400 hover:text-white border border-slate-800"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Exit Presentation */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-500/40 text-xs font-bold transition-all"
            title="Exit Presentation (Esc or P)"
          >
            <X className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t("Exit (Esc)", "প্রস্থান (Esc)")}</span>
          </button>
        </div>
      </div>

      {/* Slide Progress Line */}
      <div className="w-full bg-[#101426] h-1.5 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#FACC15] via-amber-400 to-[#777BB4] transition-all duration-300"
          style={{ width: `${((slideIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Main Slide Presentation Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-start">
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
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={slideIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141829] hover:bg-[#1e233d] disabled:opacity-30 text-white text-xs font-bold transition-all border border-slate-800"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t("Previous", "পূর্ববর্তী")}</span>
          </button>

          {/* Quick Dots / Key Hint */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>{t("Use", "ব্যবহার করুন")} <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">←</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">→</kbd> {t("or Space to Navigate", "বা স্পেস চাপুন")}</span>
          </div>

          <button
            onClick={handleNext}
            disabled={slideIndex === totalSlides - 1}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#FACC15] hover:bg-yellow-300 disabled:opacity-30 text-slate-950 font-black text-xs transition-all shadow-lg shadow-yellow-500/10 hover:scale-105 active:scale-95"
          >
            <span>{slideIndex === totalSlides - 1 ? t("Finished!", "সম্পূর্ণ!") : t("Next Slide", "পরবর্তী")}</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </footer>
    </div>
  );
}
export default PresentationModeDeck;
