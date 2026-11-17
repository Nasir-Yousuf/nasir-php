import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ChapterSidebar } from './components/layout/ChapterSidebar';
import { AppHeader } from './components/layout/AppHeader';
import { PresentationModeDeck } from './components/presentation/PresentationModeDeck';

// 15 Master Curriculum Learning Modules
import { Module1Web } from './components/modules/Module1Web';
import { Module2Database } from './components/modules/Module2Database';
import { Module3DataTravel } from './components/modules/Module3DataTravel';
import { Module4IntroPhp } from './components/modules/Module4IntroPhp';
import { Module5Variables } from './components/modules/Module5Variables';
import { Module6Strings } from './components/modules/Module6Strings';
import { Module7Arrays } from './components/modules/Module7Arrays';
import { Module8Conditions } from './components/modules/Module8Conditions';
import { Module9Loops } from './components/modules/Module9Loops';
import { Module10Functions } from './components/modules/Module10Functions';
import { Module11Classes } from './components/modules/Module11Classes';
import { Module12MultipleFiles } from './components/modules/Module12MultipleFiles';
import { Module13Forms } from './components/modules/Module13Forms';
import { Module14Project } from './components/modules/Module14Project';
import { Module15ComparisonLab } from './components/modules/Module15ComparisonLab';

function MainAppContent() {
  const { lang, t } = useLanguage();
  const [activeChapterId, setActiveChapterId] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setIsPresentationMode(prev => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'ArrowRight' && e.altKey && !isPresentationMode) {
        e.preventDefault();
        setActiveChapterId(prev => Math.min(15, prev + 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft' && e.altKey && !isPresentationMode) {
        e.preventDefault();
        setActiveChapterId(prev => Math.max(1, prev - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresentationMode]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handleSelectChapter = (id, targetSectionId = null) => {
    const numId = Number(id);
    setActiveChapterId(numId);
    if (targetSectionId) {
      setTimeout(() => {
        const altId1 = targetSectionId;
        const altId2 = targetSectionId.startsWith('sec-') 
          ? targetSectionId.replace('sec-', 'section-') 
          : targetSectionId.replace('section-', 'sec-');
        
        const el = document.getElementById(altId1) || document.getElementById(altId2);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderActiveChapter = () => {
    const modId = Number(activeChapterId);
    switch (modId) {
      case 1:
        return <Module1Web onNextModule={() => handleSelectChapter(2)} />;
      case 2:
        return <Module2Database onNextModule={() => handleSelectChapter(3)} />;
      case 3:
        return <Module3DataTravel onNextModule={() => handleSelectChapter(4)} />;
      case 4:
        return <Module4IntroPhp onNextModule={() => handleSelectChapter(5)} />;
      case 5:
        return <Module5Variables onNextModule={() => handleSelectChapter(6)} />;
      case 6:
        return <Module6Strings onNextModule={() => handleSelectChapter(7)} />;
      case 7:
        return <Module7Arrays onNextModule={() => handleSelectChapter(8)} />;
      case 8:
        return <Module8Conditions onNextModule={() => handleSelectChapter(9)} />;
      case 9:
        return <Module9Loops onNextModule={() => handleSelectChapter(10)} />;
      case 10:
        return <Module10Functions onNextModule={() => handleSelectChapter(11)} />;
      case 11:
        return <Module11Classes onNextModule={() => handleSelectChapter(12)} />;
      case 12:
        return <Module12MultipleFiles onNextModule={() => handleSelectChapter(13)} />;
      case 13:
        return <Module13Forms onNextModule={() => handleSelectChapter(14)} />;
      case 14:
        return <Module14Project onNextModule={() => handleSelectChapter(15)} />;
      case 15:
        return <Module15ComparisonLab onRestartCourse={() => handleSelectChapter(1)} />;
      default:
        return <Module1Web onNextModule={() => handleSelectChapter(2)} />;
    }
  };

  // When in presentation mode, render exclusively the full-screen presentation deck (no sidebar)
  if (isPresentationMode) {
    return (
      <PresentationModeDeck
        onClose={() => setIsPresentationMode(false)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#080a14] text-slate-100 flex flex-col font-sans selection:bg-[#FACC15] selection:text-slate-950">
      {/* Persistent Left Sidebar */}
      <ChapterSidebar
        activeChapterId={activeChapterId}
        onSelectChapter={handleSelectChapter}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onStartPresentation={() => setIsPresentationMode(true)}
      />

      {/* Main Content Area offset by sidebar on desktop */}
      <div className="lg:pl-80 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <AppHeader
          activeChapterId={activeChapterId}
          onSelectChapter={handleSelectChapter}
          onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
          onStartPresentation={() => setIsPresentationMode(true)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />

        {/* Dynamic Module Viewport */}
        <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapterId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              {renderActiveChapter()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-[#0a0d18] px-4 py-6 text-center text-xs text-slate-500 font-mono">
          <p>
            {t(
              "PHP Interactive Learning Academy · 15 Step-by-Step Modules · National Institute of Youth Development (NIYD)",
              "পিএইচপি ইন্টারেক্টিভ লার্নিং একাডেমি · ১৫টি ধারাবাহিক মডিউল · জাতীয় যুব উন্নয়ন ইনস্টিটিউট (NIYD)"
            )}
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            {t(
              "Keyboard Shortcuts: [Alt + ← / →] Switch Modules · [P] Presentation Mode · [F] Fullscreen",
              "কিবোর্ড শর্টকাট: [Alt + ← / →] মডিউল পরিবর্তন · [P] প্রেজেন্টেশন মোড · [F] ফুলস্ক্রিন"
            )}
          </p>
        </footer>
      </div>
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}

export default App;
