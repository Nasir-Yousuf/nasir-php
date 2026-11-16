import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  MessageSquare, 
  Maximize2, 
  Minimize2,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PRESENTATION_SLIDES } from '../../data/presentationSlides';
import confetti from 'canvas-confetti';

export function PresentationOverlay({
  isOpen,
  onClose,
  activeSlideIndex,
  setActiveSlideIndex,
  onNavigateToSection
}) {
  const [showNotes, setShowNotes] = useState(false);
  const currentSlide = PRESENTATION_SLIDES[activeSlideIndex] || PRESENTATION_SLIDES[0];
  const totalSlides = PRESENTATION_SLIDES.length;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeSlideIndex]);

  const handleNext = () => {
    if (activeSlideIndex < totalSlides - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
    } else {
      // Completed presentation!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  const handlePrev = () => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
    }
  };

  if (!isOpen) return null;

  const progressPercent = ((activeSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-laboratory-950/98 backdrop-blur-xl text-white flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
      {/* Top Presentation Bar */}
      <div className="w-full border-b border-laboratory-850 px-6 py-4 flex items-center justify-between bg-laboratory-900/60">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-php text-white font-mono font-bold text-xs">
            {activeSlideIndex + 1}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-php-accent uppercase tracking-wider">
                {currentSlide.badge}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400">Classroom Presentation Mode</span>
            </div>
            <h1 className="text-base font-bold text-white tracking-tight">
              {currentSlide.title}
            </h1>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Toggle Speaker Notes */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
              showNotes
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                : 'bg-laboratory-800 text-slate-400 border-laboratory-700 hover:text-slate-200'
            }`}
            title="Toggle Speaker Notes (N)"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Speaker Notes</span>
            <kbd className="text-[10px] bg-laboratory-900 px-1 rounded">N</kbd>
          </button>

          {/* Jump directly to interactive section */}
          <button
            onClick={() => {
              onNavigateToSection(currentSlide.sectionKey);
              onClose();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-laboratory-800 hover:bg-laboratory-750 text-slate-300 border border-laboratory-700 transition-all"
            title="Open Interactive Module for this Slide"
          >
            <Layers className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Open Interactive Lab</span>
          </button>

          {/* Close / Exit Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-laboratory-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-laboratory-700 transition-all"
            title="Exit Presentation Mode (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full bg-laboratory-900 h-1">
        <div
          className="bg-gradient-to-r from-php via-indigo-500 to-accent-cyan h-1 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Slide Content Canvas */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-20 py-8 flex flex-col justify-center max-w-6xl mx-auto w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-php/20 text-php-accent border border-php/40">
              Module {activeSlideIndex + 1} of {totalSlides}
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white">
              {currentSlide.title}
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 font-medium">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Key Talking Points for the Classroom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {currentSlide.keyPoints.map((point, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 hover:border-php/50 transition-all shadow-lg hover:shadow-glow-sm flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-xl bg-php/20 border border-php/40 text-php-accent font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  {index + 1}
                </div>
                <p className="text-sm lg:text-base text-slate-200 leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Slide Prompt */}
          <div className="pt-2 flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 via-laboratory-900/40 to-cyan-950/40 border border-indigo-500/20">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan" />
              </span>
              <span className="text-xs lg:text-sm text-slate-300 font-mono">
                Hands-on visual lab available for this topic in the main explorer!
              </span>
            </div>
            <button
              onClick={() => {
                onNavigateToSection(currentSlide.sectionKey);
                onClose();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-php hover:bg-php-dark text-white text-xs font-semibold shadow-glow-sm transition-all"
            >
              <span>Explore Interactive Lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Speaker Notes Drawer (Collapsible) */}
          {showNotes && (
            <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-amber-200 space-y-2 animate-in slide-in-from-bottom-4 duration-200 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                <BookOpen className="w-4 h-4" />
                <span>Instructor Speaker Notes (Live Class Guide)</span>
              </div>
              <ul className="space-y-1.5 text-xs lg:text-sm text-amber-100 list-disc list-inside">
                {currentSlide.speakerNotes.map((note, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation Toolbar */}
      <div className="w-full border-t border-laboratory-850 px-6 py-4 bg-laboratory-900/70 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Navigate with:</span>
          <kbd className="px-2 py-0.5 rounded bg-laboratory-800 text-slate-300 font-mono text-xs border border-laboratory-700">
            ← Prev
          </kbd>
          <kbd className="px-2 py-0.5 rounded bg-laboratory-800 text-slate-300 font-mono text-xs border border-laboratory-700">
            → Next / Space
          </kbd>
          <kbd className="px-2 py-0.5 rounded bg-laboratory-800 text-slate-300 font-mono text-xs border border-laboratory-700">
            Esc Exit
          </kbd>
        </div>

        {/* Slide Selector Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={activeSlideIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-laboratory-800 hover:bg-laboratory-750 disabled:opacity-40 disabled:hover:bg-laboratory-800 text-slate-200 text-xs font-mono font-semibold border border-laboratory-700 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="font-mono text-xs font-bold text-slate-400 px-2">
            {activeSlideIndex + 1} / {totalSlides}
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-php to-accent-electric text-white text-xs font-mono font-semibold shadow-glow-sm hover:brightness-110 transition-all"
          >
            <span>{activeSlideIndex === totalSlides - 1 ? 'Finish & Celebrate' : 'Next Slide'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
