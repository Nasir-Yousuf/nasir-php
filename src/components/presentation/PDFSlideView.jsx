import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  Terminal,
  Code2,
  Globe,
  Box,
  Layers,
  Wrench,
  Cpu,
  BookOpen,
  Award,
  Rocket,
  CheckCircle2,
  FileCode,
  Zap,
  Repeat,
  Clock,
  Shield,
  Key,
  Users,
  Factory,
  AlertTriangle,
  Lightbulb,
  FileJson,
  Monitor,
  Layout,
  Table,
  Palette
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function PDFSlideView({
  slide,
  langMode, // 'php' | 'js' | 'both'
  setLangMode,
  onNavigatePage
}) {
  const [copied, setCopied] = useState(false);
  const [liveOutput, setLiveOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  // Pick language code and output based on mode
  const isJS = langMode === 'js';
  const isBoth = langMode === 'both';
  const currentCode = isJS ? slide.codeJS : slide.codePHP;
  const currentFilename = isJS 
    ? (slide.filename ? slide.filename.replace('.php', '.js') : 'script.js') 
    : (slide.filename || 'index.php');
  const defaultOutput = isJS ? slide.outputJS : slide.outputPHP;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setLiveOutput(defaultOutput || "Code executed successfully!");
      setIsRunning(false);
      try {
        confetti({ particleCount: 25, spread: 40, origin: { y: 0.8 } });
      } catch (e) {}
    }, 200);
  };

  // Icon mapping
  const renderIcon = (iconName) => {
    const props = { className: "w-6 h-6 text-slate-950 stroke-[2.5]" };
    switch (iconName) {
      case 'rocket': return <Rocket {...props} />;
      case 'globe': return <Globe {...props} />;
      case 'box': return <Box {...props} />;
      case 'zap': return <Zap {...props} />;
      case 'repeat': return <Repeat {...props} />;
      case 'clock': return <Clock {...props} />;
      case 'layers': return <Layers {...props} />;
      case 'wrench': return <Wrench {...props} />;
      case 'cpu': return <Cpu {...props} />;
      case 'shield': return <Shield {...props} />;
      case 'key': return <Key {...props} />;
      case 'users': return <Users {...props} />;
      case 'factory': return <Factory {...props} />;
      case 'alert-triangle': return <AlertTriangle {...props} />;
      case 'lightbulb': return <Lightbulb {...props} />;
      case 'file-code': return <FileCode {...props} />;
      case 'file-json': return <FileJson {...props} />;
      case 'monitor': return <Monitor {...props} />;
      case 'layout': return <Layout {...props} />;
      case 'table': return <Table {...props} />;
      case 'palette': return <Palette {...props} />;
      case 'award': return <Award {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  // 1. Cover Slide Layout (Exact match to PDF Page 1)
  if (slide.type === 'cover') {
    return (
      <div className="relative w-full aspect-[16/9] min-h-[520px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-14 flex flex-col justify-between text-center shadow-2xl overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Top spacer */}
        <div />

        {/* Center content */}
        <div className="space-y-6 max-w-2xl mx-auto my-auto">
          {/* Big Yellow Icon Badge */}
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#FACC15] flex items-center justify-center shadow-xl shadow-yellow-500/20">
            <span className="font-mono font-black text-slate-950 text-2xl tracking-tighter">
              &lt;/&gt;
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            {slide.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-medium">
            {slide.subtitle}
          </p>

          <div className="pt-4 space-y-2">
            <div className="text-sm sm:text-base font-bold text-[#FACC15]">
              {slide.org}
            </div>
            <div className="text-xs text-slate-400 font-mono">
              {slide.footerNote}
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="text-xs text-slate-500 font-mono flex items-center justify-between border-t border-slate-800/80 pt-4">
          <span>JavaScript & PHP Classroom Workshop</span>
          <button 
            onClick={() => onNavigatePage(2)}
            className="flex items-center gap-1 text-[#FACC15] hover:underline font-bold"
          >
            <span>Start Today's Journey</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // 2. Roadmap Grid Layout (Exact match to PDF Page 2)
  if (slide.type === 'roadmap') {
    const parts = [
      { num: 1, title: "Basics", desc: "Variables, types, strings, operators", page: 3 },
      { num: 2, title: "Decisions & Loops", desc: "if / else, switch, for, while", page: 10 },
      { num: 3, title: "Functions", desc: "Reusable code blocks, return, scope", page: 19 },
      { num: 4, title: "Arrays", desc: "Lists, dictionaries, student roster", page: 23 },
      { num: 5, title: "Classes & OOP", desc: "Blueprints, $this, constructors, Car", page: 27 },
      { num: 6, title: "Class 1 Project", desc: "php-learning: index, composer, HelloWorld", page: 30 },
      { num: 7, title: "Class 2 Project", desc: "php-class-two: web.php, views, helpers", page: 34 },
      { num: 8, title: "Playground & Recap", desc: "Live code runner & homework projects", page: 41 }
    ];

    return (
      <div className="relative w-full aspect-[16/9] min-h-[540px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-12 flex flex-col justify-between shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {slide.subtitle}
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
            <Rocket className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-auto py-4">
          {parts.map((p) => (
            <button
              key={p.num}
              onClick={() => onNavigatePage(p.page)}
              className="p-4 rounded-2xl bg-[#1e2235] hover:bg-[#252b42] border border-slate-800 hover:border-[#FACC15]/60 transition-all text-left space-y-2 group shadow-md"
            >
              <div className="w-7 h-7 rounded-full bg-[#FACC15] text-slate-950 font-black text-xs font-mono flex items-center justify-center group-hover:scale-110 transition-transform">
                {p.num}
              </div>
              <div className="font-bold text-white text-sm group-hover:text-[#FACC15] transition-colors">
                {p.title}
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {p.desc}
              </p>
            </button>
          ))}
        </div>

        {/* Bottom Banner & Footer */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/30 text-amber-200 text-xs text-center font-medium">
            💡 <strong>How to try every example:</strong> Toggle between PHP and JavaScript, click <strong>"▶ Run Code"</strong> to test outputs live!
          </div>

          <div className="text-xs text-slate-500 font-mono flex items-center justify-between pt-2">
            <span>JavaScript & PHP Workshop · NIYD</span>
            <span>2</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Section Title Divider Slide (Exact match to PDF Page 5, 13, 24, etc.)
  if (slide.type === 'section') {
    return (
      <div className="relative w-full aspect-[16/9] min-h-[500px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-14 flex flex-col justify-between text-center shadow-2xl overflow-hidden select-none">
        <div />
        <div className="space-y-4 max-w-xl mx-auto my-auto">
          <div className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-[#FACC15] uppercase">
            P A R T {slide.part} O F 8
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            {slide.title}
          </h2>
          <p className="text-sm sm:text-lg text-slate-400 font-medium leading-relaxed">
            {slide.subtitle}
          </p>
        </div>
        <div className="text-xs text-slate-500 font-mono flex items-center justify-between border-t border-slate-800/80 pt-4">
          <span>JavaScript & PHP Workshop · NIYD</span>
          <span>{slide.page}</span>
        </div>
      </div>
    );
  }

  // 4. Homework Projects Slide (Exact match to PDF Page 62)
  if (slide.type === 'homework') {
    return (
      <div className="relative w-full aspect-[16/9] min-h-[540px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-12 flex flex-col justify-between shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {slide.subtitle}
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <Award className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-4">
          {slide.projects.map((proj) => (
            <div key={proj.num} className="p-5 rounded-2xl bg-[#1e2235] border border-slate-800 space-y-3 shadow-lg">
              <h3 className="text-base font-bold text-white">
                {proj.num}. {proj.title}
              </h3>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  What it does:
                </span>
                <p className="text-xs text-slate-200">
                  {proj.does}
                </p>
              </div>
              <div className="space-y-1 pt-1 border-t border-slate-800/80">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FACC15] block font-semibold">
                  What you practice:
                </span>
                <p className="text-xs text-slate-300">
                  {proj.practice}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/30 text-amber-200 text-xs text-center font-medium">
            💡 {slide.footerNote}
          </div>
          <div className="text-xs text-slate-500 font-mono flex items-center justify-between">
            <span>JavaScript & PHP Workshop · NIYD</span>
            <span>{slide.page}</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. Final Recap Slide (Exact match to PDF Page 63)
  if (slide.type === 'recap') {
    return (
      <div className="relative w-full aspect-[16/9] min-h-[540px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-12 flex flex-col justify-between text-center shadow-2xl overflow-hidden select-none">
        <div className="space-y-4 max-w-xl mx-auto pt-2">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <Award className="w-8 h-8 text-slate-950 stroke-[2.5]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {slide.title}
          </h2>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto w-full my-auto py-4">
          {slide.cards.map((c, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#1e2235] border border-slate-800 text-left space-y-1.5 shadow-md">
              <span className="font-bold text-[#FACC15] text-xs block">
                {c.title}
              </span>
              <p className="text-[11px] text-slate-300 leading-snug">
                {c.text}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-slate-800/80 pt-4">
          <div className="text-lg font-bold text-[#FACC15]">
            {slide.qa}
          </div>
          <div className="text-xs text-slate-400 font-mono">
            {slide.instructor}
          </div>
        </div>
      </div>
    );
  }

  // 6. Standard Lesson Slide (Exact match to PDF Pages 3-4, 6-12, 14-18, 20-22, 25-26, 28-29, 31-33, 35-40)
  return (
    <div className="relative w-full rounded-3xl bg-[#181a29] border border-slate-800 p-6 sm:p-10 shadow-2xl overflow-hidden space-y-6">
      {/* Slide Header: Title on Left, Yellow Category Icon on Right */}
      <div className="flex items-start justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FACC15]">
              Part {slide.part} of 8
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {slide.title}
          </h2>
        </div>

        {/* Yellow Icon Badge (Just like in the PDF!) */}
        <div className="w-12 h-12 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
          {renderIcon(slide.badgeIcon)}
        </div>
      </div>

      {/* Main Slide Layout: Left Code Terminal, Right Bullet Points & Output Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Code Window with macOS dots & Filename (Col 7) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#1e2235] border border-slate-800 overflow-hidden shadow-xl">
          {/* Terminal Window Bar */}
          <div className="px-4 py-3 bg-[#24293f] border-b border-slate-800 flex items-center justify-between">
            {/* Traffic light dots */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
            </div>

            {/* Language Switcher Pills */}
            <div className="flex items-center gap-1 bg-[#181a29] p-0.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setLangMode('php')}
                className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold transition-all ${
                  !isJS ? 'bg-[#777BB4] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                PHP
              </button>
              <button
                onClick={() => setLangMode('js')}
                className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold transition-all ${
                  isJS ? 'bg-[#FACC15] text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                JS
              </button>
            </div>

            {/* Filename & Copy */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-400">
                {currentFilename}
              </span>
              <button
                onClick={handleCopy}
                className="text-slate-400 hover:text-white transition-colors"
                title="Copy Code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Monospace Code Editor Area */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 overflow-x-auto flex-1">
            <pre className="m-0 bg-transparent">
              <code>{currentCode}</code>
            </pre>
          </div>

          {/* Run Code Action Bar */}
          <div className="px-4 py-2.5 bg-[#24293f]/80 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">
              Language: <strong className={isJS ? "text-[#FACC15]" : "text-[#777BB4]"}>{isJS ? "JavaScript" : "PHP 8.x"}</strong>
            </span>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs font-mono shadow-md shadow-yellow-500/10 active:scale-95 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRunning ? "Running..." : "Run Code"}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Bullets & Output Box (Col 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Bullet Points */}
          <div className="space-y-3 p-4 rounded-2xl bg-[#1e2235]/60 border border-slate-800">
            {slide.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                <span className="text-[#FACC15] text-base leading-none">•</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Output Box (Exact match to the dark rounded Output card in the PDF!) */}
          <div className="p-5 rounded-2xl bg-[#1e2235] border border-slate-800 space-y-2 shadow-xl">
            <span className="text-xs font-mono font-bold text-[#FACC15] block">
              Output
            </span>
            <pre className="font-mono text-xs sm:text-sm text-slate-200 bg-[#161927] p-3 rounded-xl border border-slate-800/80 overflow-x-auto leading-relaxed">
              {liveOutput || defaultOutput}
            </pre>
          </div>

          {/* Classroom Tip (if available) */}
          {slide.tip && (
            <div className="p-3 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/30 text-amber-200 text-xs flex items-center gap-2">
              <span className="text-sm">💡</span>
              <span className="leading-snug">{slide.tip}</span>
            </div>
          )}
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-800/80 pt-4">
        <span>JavaScript & PHP Workshop · NIYD</span>
        <span>Page {slide.page}</span>
      </div>
    </div>
  );
}
