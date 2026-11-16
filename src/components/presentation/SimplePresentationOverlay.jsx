import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Lightbulb, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

const SIMPLE_SLIDES = [
  {
    title: "Why Not Write echo 'Hello World' in One File?",
    subtitle: "The First Principle of Professional Web Architecture",
    badge: "Slide 1 of 5 • Introduction",
    keyPoints: [
      "Putting everything in one file works for a 5-line script, but in real companies, projects grow to 50,000+ lines.",
      "Without architecture, you get 'spaghetti code' where database queries, HTML, and logic are hopelessly tangled.",
      "Class 1 teaches you the foundation: Separate the Entry Point, the Autoloader, and the Class."
    ],
    speakerNotes: "Start with the classroom dilemma: every student asks 'Why did the teacher make 3 folders just to echo Hello World?'. Explain that this is the gateway to scalable engineering."
  },
  {
    title: "Class 1: The Three Magical Pieces",
    subtitle: "index.php + composer.json + HelloWorld.php",
    badge: "Slide 2 of 5 • Class 1 Foundation",
    keyPoints: [
      "1. index.php (The Starter Key): Only boots Composer and starts the class.",
      "2. composer.json (The Autoloader Rulebook): Maps 'App\\' to 'app/'.",
      "3. HelloWorld.php (The Blueprint): Holds $message and index() method.",
      "Together, they eliminate manual 'require' statements and make code modular."
    ],
    speakerNotes: "Walk through each file. Point out line 3 of index.php: require_once 'vendor/autoload.php'. That single line is the secret sauce."
  },
  {
    title: "How It Runs: The 3-Step Flow",
    subtitle: "What PHP Does When You Hit Enter",
    badge: "Slide 3 of 5 • Execution Flow",
    keyPoints: [
      "Step 1: You run index.php. PHP sees '$helloWorld = new HelloWorld()'.",
      "Step 2: Composer steps in! It maps App\\classes\\HelloWorld to app/classes/HelloWorld.php and includes it.",
      "Step 3: __construct() sets $message = 'Hello World', then index() prints it to the screen."
    ],
    speakerNotes: "Remind students: Composer is not magic! It is just a smart phonebook that matches class names to file paths."
  },
  {
    title: "Class 2: From Text to a Real Web App",
    subtitle: "What Got Added in php-class-two?",
    badge: "Slide 4 of 5 • Class 2 Evolution",
    keyPoints: [
      "1. views/ (HTML Templates): Instead of echoing plain text, we create real HTML pages.",
      "2. views/includes/ (Header & Footer): Navbar and scripts written once and reused everywhere.",
      "3. helpers.php (View Engine): 10-line view() helper using ob_start() and extract($data).",
      "4. web.php (Front Router): Reads ?page=about and renders that specific page.",
      "5. assets/ (Bootstrap 5): Makes everything mobile-responsive and pretty."
    ],
    speakerNotes: "Emphasize the evolution: Class 1 was the engine; Class 2 put the car body and steering wheel on top."
  },
  {
    title: "JavaScript vs PHP: The Rosetta Stone",
    subtitle: "Bridging What You Already Know into PHP Fluency",
    badge: "Slide 5 of 5 • Language Bridges",
    keyPoints: [
      "Variables: Always use '$' in PHP ($name) vs const/let in JS.",
      "Strings: Use dot '.' to join strings in PHP! Plus '+' is strictly for math addition.",
      "Objects: Use arrow '->' in PHP ($this->name) vs dot '.' in JS (this.name).",
      "Arrays: Associative arrays in PHP ['id' => 1] are like Objects in JS { id: 1 }."
    ],
    speakerNotes: "Reiterate the dot vs plus gotcha! Remind students that 'Hello ' + 'World' in PHP gives 0, not 'Hello World'!"
  }
];

export function SimplePresentationOverlay({ isOpen, onClose }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const currentSlide = SIMPLE_SLIDES[slideIndex] || SIMPLE_SLIDES[0];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slideIndex]);

  const handleNext = () => {
    if (slideIndex < SIMPLE_SLIDES.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      try { confetti({ particleCount: 70, spread: 60 }); } catch (e) {}
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-12 animate-in fade-in duration-200">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-indigo-500 text-white font-mono font-bold flex items-center justify-center text-sm">
            {slideIndex + 1}
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
            {currentSlide.badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all ${
              showNotes ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            Speaker Notes (N)
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide Body */}
      <div className="max-w-4xl mx-auto w-full space-y-8 my-auto py-6">
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {currentSlide.title}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 font-medium">
            {currentSlide.subtitle}
          </p>
        </div>

        {/* Key Points */}
        <div className="space-y-4">
          {currentSlide.keyPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-4 shadow-xl"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Collapsible Speaker Notes */}
        {showNotes && (
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs sm:text-sm">
            <strong className="font-mono text-amber-400 block mb-1">Speaker Cue:</strong>
            {currentSlide.speakerNotes}
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-4">
        <div className="text-xs text-slate-500 font-mono hidden sm:block">
          Use Arrow Keys (← / →) to navigate • Esc to exit
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={handlePrev}
            disabled={slideIndex === 0}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-xs font-semibold"
          >
            Previous
          </button>
          <span className="font-mono text-xs text-slate-400">
            {slideIndex + 1} / {SIMPLE_SLIDES.length}
          </span>
          <button
            onClick={handleNext}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30"
          >
            {slideIndex === SIMPLE_SLIDES.length - 1 ? 'Finish' : 'Next Slide'}
          </button>
        </div>
      </div>
    </div>
  );
}
