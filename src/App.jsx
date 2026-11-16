import React, { useState, useEffect } from 'react';
import { PDFSlideNavbar } from './components/layout/PDFSlideNavbar';
import { SideBySideSlide } from './components/presentation/SideBySideSlide';
import { TableOfContentsModal } from './components/presentation/TableOfContentsModal';
import { SIDE_BY_SIDE_SLIDES } from './data/sideBySideCurriculum';
import { ChevronLeft, ChevronRight, List, Sparkles, BookOpen } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalPages = SIDE_BY_SIDE_SLIDES.length;
  const currentSlide = SIDE_BY_SIDE_SLIDES.find(s => s.page === currentPage) || SIDE_BY_SIDE_SLIDES[0];

  // Global keyboard shortcuts (arrow keys for slides)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentPage < totalPages) {
          setCurrentPage(prev => prev + 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentPage > 1) {
          setCurrentPage(prev => prev - 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setIsTocOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        if (isTocOpen) setIsTocOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, isTocOpen]);

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

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const progressPercent = (currentPage / totalPages) * 100;

  return (
    <div className="min-h-screen bg-[#111320] text-slate-100 flex flex-col font-sans selection:bg-[#FACC15] selection:text-slate-950">
      {/* Top Navbar */}
      <PDFSlideNavbar
        currentPage={currentPage}
        onNavigatePage={(p) => {
          setCurrentPage(p);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenToc={() => setIsTocOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Slide Progress Bar */}
      <div className="w-full bg-[#181a29] h-1.5">
        <div
          className="bg-gradient-to-r from-[#FACC15] via-amber-400 to-[#777BB4] h-1.5 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Slide Viewer Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <div className="space-y-6">
          {/* The Active Slide */}
          <SideBySideSlide
            slide={currentSlide}
            onNavigatePage={(p) => {
              setCurrentPage(p);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Bottom Floating Navigation Toolbar */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#181a29]/90 border border-slate-800 shadow-xl backdrop-blur-md">
            <button
              onClick={handlePrev}
              disabled={currentPage <= 1}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1e2235] hover:bg-[#252b42] disabled:opacity-30 disabled:hover:bg-[#1e2235] text-white text-xs font-bold transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Slide</span>
            </button>

            {/* Slide Indicator & Quick Jumper Pills */}
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="font-bold text-white px-2 py-1 rounded-lg bg-[#1e2235] border border-slate-800">
                Slide {currentPage} / {totalPages}
              </span>
              <span className="hidden md:inline text-slate-500">•</span>
              <span className="hidden md:inline text-slate-400">
                Use Arrow keys <kbd className="px-1.5 py-0.5 rounded bg-[#1e2235] border border-slate-700 text-slate-300">←</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-[#1e2235] border border-slate-700 text-slate-300">→</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-[#1e2235] border border-slate-700 text-slate-300">Space</kbd>
              </span>
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FACC15] hover:bg-yellow-300 disabled:opacity-30 text-slate-950 font-black text-xs shadow-lg shadow-yellow-500/10 transition-all hover:scale-105 active:scale-95"
            >
              <span>{currentPage === totalPages ? "Completed!" : "Next Slide"}</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </main>

      {/* Table of Contents Modal */}
      <TableOfContentsModal
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        currentPage={currentPage}
        onSelectPage={(p) => {
          setCurrentPage(p);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;
