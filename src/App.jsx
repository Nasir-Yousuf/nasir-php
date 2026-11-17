import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ChapterSidebar } from './components/layout/ChapterSidebar';
import { AppHeader } from './components/layout/AppHeader';
import { PresentationModeDeck } from './components/presentation/PresentationModeDeck';

// 7 Master Chapter Views
import { Chapter1View } from './components/chapters/chapter1/Chapter1View';
import { Chapter2View } from './components/chapters/chapter2/Chapter2View';
import { Chapter3View } from './components/chapters/chapter3/Chapter3View';
import { Chapter4View } from './components/chapters/chapter4/Chapter4View';
import { Chapter5View } from './components/chapters/chapter5/Chapter5View';
import { Chapter6View } from './components/chapters/chapter6/Chapter6View';
import { Chapter7View } from './components/chapters/chapter7/Chapter7View';

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
      } else if (['1', '2', '3', '4', '5', '6', '7'].includes(e.key) && !isPresentationMode) {
        setActiveChapterId(Number(e.key));
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

  const handleSelectChapter = (id) => {
    setActiveChapterId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveChapter = () => {
    switch (activeChapterId) {
      case 2:
        return <Chapter2View onNextChapter={() => handleSelectChapter(3)} />;
      case 3:
        return <Chapter3View onNextChapter={() => handleSelectChapter(4)} />;
      case 4:
        return <Chapter4View onNextChapter={() => handleSelectChapter(5)} />;
      case 5:
        return <Chapter5View onNextChapter={() => handleSelectChapter(6)} />;
      case 6:
        return <Chapter6View onNextChapter={() => handleSelectChapter(7)} />;
      case 7:
        return <Chapter7View onRestartCourse={() => handleSelectChapter(1)} />;
      default:
        return <Chapter1View onNextChapter={() => handleSelectChapter(2)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100 flex flex-col font-sans selection:bg-[#FACC15] selection:text-slate-950">
      {/* Presentation Mode Full-Screen Overlay */}
      {isPresentationMode && (
        <PresentationModeDeck
          onClose={() => setIsPresentationMode(false)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
      )}

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

        {/* Chapter Dynamic Viewport */}
        <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapterId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {renderActiveChapter()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-[#0c0e18] px-4 py-6 text-center text-xs text-slate-500 font-mono">
          <p>
            {t(
              "PHP & Web Architecture Explorer · National Institute of Youth Development (NIYD)",
              "পিএইচপি ও ওয়েব আর্কিটেকচার ল্যাব · জাতীয় যুব উন্নয়ন ইনস্টিটিউট (NIYD)"
            )}
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            {t(
              "Keyboard Shortcuts: [1-7] Jump Chapters · [P] Presentation Mode · [F] Fullscreen",
              "কিবোর্ড শর্টকাট: [১-৭] অধ্যায় পরিবর্তন · [P] প্রেজেন্টেশন মোড · [F] ফুলস্ক্রিন"
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
