import React, { useState } from 'react';
import { 
  Rocket, 
  Code2, 
  Box, 
  Shapes, 
  Repeat, 
  Layers, 
  Cpu, 
  Wrench, 
  Layout, 
  Table, 
  Palette, 
  Globe, 
  FileJson, 
  FolderTree, 
  Network, 
  Award, 
  Check, 
  Copy, 
  Play, 
  Sparkles, 
  Lightbulb, 
  ChevronRight,
  FolderOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';

// Animated concept components
import { VariableAnimation } from '../animations/VariableAnimation';
import { IfElseAnimation } from '../animations/IfElseAnimation';
import { LoopAnimation } from '../animations/LoopAnimation';
import { FunctionAnimation } from '../animations/FunctionAnimation';
import { ArrayAnimation } from '../animations/ArrayAnimation';
import { ClassAnimation } from '../animations/ClassAnimation';
import { RouterAnimation } from '../animations/RouterAnimation';
import { ControllerAnimation } from '../animations/ControllerAnimation';
import { ViewEngineAnimation } from '../animations/ViewEngineAnimation';
import { TemplateAssemblyAnimation } from '../animations/TemplateAssemblyAnimation';
import { TableLoopAnimation } from '../animations/TableLoopAnimation';
import { ComposerAnimation } from '../animations/ComposerAnimation';
import { ClientServerTimeline } from '../animations/ClientServerTimeline';

// Architecture components
import { ArchitectureDiagram } from '../architecture/ArchitectureDiagram';
import { RequestJourney } from '../architecture/RequestJourney';
import { FolderTreeExplorer } from '../architecture/FolderTreeExplorer';
import { FileInspector } from '../architecture/FileInspector';

// Quizzes
import { QuizCard } from '../ui/QuizCard';
import { QUIZZES } from '../../data/quizzes';

export function SideBySideSlide({ slide, onNavigatePage }) {
  const { lang, t } = useLanguage();
  const [copiedPhp, setCopiedPhp] = useState(false);
  const [copiedJs, setCopiedJs] = useState(false);
  const [phpOutput, setPhpOutput] = useState(null);
  const [jsOutput, setJsOutput] = useState(null);
  const [isPhpRunning, setIsPhpRunning] = useState(false);
  const [isJsRunning, setIsJsRunning] = useState(false);
  const [inspectedFile, setInspectedFile] = useState(null);

  const handleCopy = (code, type) => {
    navigator.clipboard.writeText(code);
    if (type === 'php') {
      setCopiedPhp(true);
      setTimeout(() => setCopiedPhp(false), 2000);
    } else {
      setCopiedJs(true);
      setTimeout(() => setCopiedJs(false), 2000);
    }
  };

  const handleRunPhp = () => {
    setIsPhpRunning(true);
    setTimeout(() => {
      setPhpOutput(slide.phpOutput || "PHP script completed with status 0.");
      setIsPhpRunning(false);
      try {
        confetti({ particleCount: 30, spread: 50, origin: { x: 0.3, y: 0.8 } });
      } catch (e) {}
    }, 250);
  };

  const handleRunJs = () => {
    setIsJsRunning(true);
    setTimeout(() => {
      setJsOutput(slide.jsOutput || "JavaScript execution finished.");
      setIsJsRunning(false);
      try {
        confetti({ particleCount: 30, spread: 50, origin: { x: 0.7, y: 0.8 } });
      } catch (e) {}
    }, 250);
  };

  const handleRunBoth = () => {
    handleRunPhp();
    handleRunJs();
  };

  // Icon mapping
  const renderIcon = (iconName) => {
    const props = { className: "w-6 h-6 text-slate-950 stroke-[2.5]" };
    switch (iconName) {
      case 'rocket': return <Rocket {...props} />;
      case 'box': return <Box {...props} />;
      case 'shapes': return <Shapes {...props} />;
      case 'repeat': return <Repeat {...props} />;
      case 'layers': return <Layers {...props} />;
      case 'cpu': return <Cpu {...props} />;
      case 'wrench': return <Wrench {...props} />;
      case 'layout': return <Layout {...props} />;
      case 'table': return <Table {...props} />;
      case 'palette': return <Palette {...props} />;
      case 'globe': return <Globe {...props} />;
      case 'file-json': return <FileJson {...props} />;
      case 'folder-tree': return <FolderTree {...props} />;
      case 'folder-git-2': return <FolderTree {...props} />;
      case 'network': return <Network {...props} />;
      case 'award': return <Award {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  // Dynamic visual animation selector
  const renderVisualAnimation = (animationType) => {
    switch (animationType) {
      case 'variable':
        return <VariableAnimation />;
      case 'ifelse':
        return <IfElseAnimation />;
      case 'loop':
        return <LoopAnimation />;
      case 'function':
        return <FunctionAnimation />;
      case 'array':
        return <ArrayAnimation />;
      case 'class':
        return <ClassAnimation />;
      case 'router':
        return <RouterAnimation />;
      case 'controller':
        return <ControllerAnimation />;
      case 'viewengine':
        return <ViewEngineAnimation />;
      case 'assembly':
        return <TemplateAssemblyAnimation />;
      case 'tableloop':
        return <TableLoopAnimation />;
      case 'composer':
        return <ComposerAnimation />;
      case 'timeline':
        return <ClientServerTimeline />;
      case 'architecture':
        return <ArchitectureDiagram onSelectFile={(file) => setInspectedFile(file)} />;
      case 'journey':
        return <RequestJourney />;
      default:
        return null;
    }
  };

  const matchingQuiz = QUIZZES.find(q => q.slidePage === slide.page);
  const phaseLabel = slide.page <= 15 ? t("Phase 1: Basics Side by Side", "পর্যায় ১: মৌলিক বিষয়াদি পাশাপাশি") : t("Phase 2: php-class-two Project", "পর্যায় ২: বাস্তব প্রজেক্ট আর্কিটেকচার");

  // 1. Cover Slide
  if (slide.type === 'cover') {
    return (
      <div className="relative w-full aspect-[16/9] min-h-[520px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-14 flex flex-col justify-between text-center shadow-2xl overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="px-3 py-1 rounded-full bg-[#1e2235] border border-slate-800 text-[#FACC15] font-bold">
            {t("Interactive Visual Learning Platform", "ইন্টারেক্টিভ ভিজ্যুয়াল লার্নিং প্ল্যাটফর্ম")}
          </span>
          <span>Slide 1 / 26</span>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto my-auto">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#FACC15] flex items-center justify-center shadow-2xl shadow-yellow-500/20">
            <span className="font-mono font-black text-slate-950 text-2xl tracking-tighter">
              &lt;/&gt;
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            {t(slide.title, slide.titleBn)}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-medium">
            {t(slide.subtitle, slide.subtitleBn)}
          </p>

          <div className="pt-2 space-y-1">
            <div className="text-sm sm:text-base font-bold text-[#FACC15]">
              {t(slide.org, slide.orgBn)}
            </div>
            <div className="text-xs text-slate-400 font-mono">
              {t(slide.footerNote, slide.footerNoteBn)}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigatePage(2)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-sm shadow-xl shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>{t("Begin Interactive Journey", "ইন্টারেক্টিভ জার্নি শুরু করুন")}</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-500 font-mono flex items-center justify-between border-t border-slate-800/80 pt-4">
          <span>{t("National Institute of Youth Development", "জাতীয় যুব উন্নয়ন ইনস্টিটিউট")}</span>
          <span className="text-slate-400">{t("Use Arrow keys ← / → to navigate", "নেভিগেট করতে কিবোর্ডের ← / → বাটন চাপুন")}</span>
        </div>
      </div>
    );
  }

  // 2. Roadmap Slide
  if (slide.type === 'roadmap') {
    return (
      <div className="relative w-full rounded-3xl bg-[#181a29] border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FACC15]">
              {t("Curriculum Roadmap", "শিক্ষাক্রম রোডম্যাপ")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              {t(slide.title, slide.titleBn)}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t(slide.subtitle, slide.subtitleBn)}
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
            <Rocket className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
        </div>

        {/* 2 Big Phase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Phase 1 Card */}
          <div className="p-6 rounded-2xl bg-[#1e2235] border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#777BB4] text-white font-mono font-bold text-xs flex items-center justify-center">1</span>
                <h3 className="font-bold text-white text-base">
                  {t("Phase 1: Language Basics Side by Side", "পর্যায় ১: ভাষার মৌলিক বিষয়াদি পাশাপাশি")}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Slides 3–15</span>
            </div>

            <p className="text-xs text-slate-300">
              {t("Direct visual comparisons for students transitioning from JavaScript to PHP:", "জাভাস্ক্রিপ্ট জানা শিক্ষার্থীদের সহজে পিএইচপি বোঝার ভিজ্যুয়াল তুলনা:")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { name: "Variables ($ vs let/const)", page: 3 },
                { name: "Data Types & Type Checking", page: 4 },
                { name: "Strings (Dot '.' vs '+')", page: 5 },
                { name: "Math Operators & Increment", page: 6 },
                { name: "Decisions (if / else)", page: 7 },
                { name: "Multi-Way Decisions (elseif)", page: 8 },
                { name: "Loops (for & while)", page: 9 },
                { name: "Array Iteration (foreach)", page: 10 },
                { name: "Functions & Parameters", page: 11 },
                { name: "Indexed Arrays (Lists)", page: 12 },
                { name: "Associative Arrays vs Objects", page: 13 },
                { name: "OOP Classes & Constructors", page: 14 },
                { name: "Object Instantiation & $this->", page: 15 }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigatePage(item.page)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#181a29] hover:bg-[#252b42] border border-slate-800 hover:border-[#FACC15]/60 text-left text-xs text-slate-300 hover:text-white transition-all group"
                >
                  <span className="truncate group-hover:text-[#FACC15] transition-colors">{item.name}</span>
                  <span className="font-mono text-[10px] text-slate-500 group-hover:text-slate-300 ml-1">p.{item.page}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Phase 2 Card */}
          <div className="p-6 rounded-2xl bg-[#1e2235] border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#FACC15] text-slate-950 font-mono font-black text-xs flex items-center justify-center">2</span>
                <h3 className="font-bold text-white text-base">
                  {t("Phase 2: The Real php-class-two Project", "পর্যায় ২: বাস্তব php-class-two প্রজেক্ট")}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Slides 16–26</span>
            </div>

            <p className="text-xs text-slate-300">
              {t("Deconstructing your verified classroom project step by step with animated execution:", "ক্লাসরুম প্রজেক্টের প্রতিটি ফাইল ও রিকোয়েস্টের যাত্রা অ্যানিমেটেড আকারে দেখা:")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { name: "php-class-two Blueprint", page: 17 },
                { name: "web.php (Front Router)", page: 18 },
                { name: "HelloWorld.php (Controller)", page: 19 },
                { name: "helpers.php (View Engine)", page: 20 },
                { name: "header.php & footer.php", page: 21 },
                { name: "views/home.php (Table Loop)", page: 22 },
                { name: "composer.json (Autoloading)", page: 23 },
                { name: "Frontend Assets & Boundaries", page: 24 },
                { name: "6-Step Request Journey", page: 25 },
                { name: "Recap & Celebration", page: 26 }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigatePage(item.page)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#181a29] hover:bg-[#252b42] border border-slate-800 hover:border-[#FACC15]/60 text-left text-xs text-slate-300 hover:text-white transition-all group"
                >
                  <span className="truncate group-hover:text-[#FACC15] transition-colors">{item.name}</span>
                  <span className="font-mono text-[10px] text-slate-500 group-hover:text-slate-300 ml-1">p.{item.page}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-800/80 pt-4">
          <span>JavaScript & PHP Workshop · NIYD</span>
          <span>Slide 2 of 26</span>
        </div>
      </div>
    );
  }

  // 3. Section Slide (Slide 16)
  if (slide.type === 'section') {
    return (
      <div className="relative w-full aspect-[16/9] min-h-[500px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-14 flex flex-col justify-between text-center shadow-2xl overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div />

        <div className="space-y-4 max-w-xl mx-auto my-auto">
          <div className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-[#FACC15] uppercase">
            {t("P H A S E  2  B E G I N S", "প র র্যা য়  ২  শু রু")}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t(slide.title, slide.titleBn)}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            {t(slide.subtitle, slide.subtitleBn)}
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigatePage(17)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>{t("Launch Architecture Explorer", "আর্কিটেকচার এক্সপ্লোরার শুরু করুন")}</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-500 font-mono flex items-center justify-between border-t border-slate-800/80 pt-4">
          <span>JavaScript & PHP Workshop · NIYD</span>
          <span>Slide 16 of 26</span>
        </div>
      </div>
    );
  }

  // 4. Project Structure Explorer Slide (Slide 17)
  if (slide.type === 'project-structure') {
    return (
      <div className="relative w-full rounded-3xl bg-[#181a29] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
        <div className="flex items-start justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 px-2 py-0.5 rounded border border-[#FACC15]/20">
                {phaseLabel}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Slide 17 of 26
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t(slide.title, slide.titleBn)}
            </h2>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
            <FolderTree className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
        </div>

        {/* Animated Architecture Diagram */}
        <ArchitectureDiagram onSelectFile={(file) => setInspectedFile(file)} />

        {/* Interactive Folder Tree & File Inspector */}
        <FolderTreeExplorer onSelectFile={(file) => setInspectedFile(file)} />

        {/* If a file is actively selected, show inspector */}
        {inspectedFile && (
          <FileInspector fileId={inspectedFile} />
        )}

        <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-800/80 pt-4">
          <span>JavaScript & PHP Workshop · NIYD</span>
          <span>Slide 17 of 26</span>
        </div>
      </div>
    );
  }

  // 5. Recap Slide (Slide 26)
  if (slide.type === 'recap') {
    return (
      <div className="relative w-full aspect-[16/9] min-h-[540px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-12 flex flex-col justify-between text-center shadow-2xl overflow-hidden select-none">
        <div className="space-y-3 max-w-xl mx-auto pt-2">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <Award className="w-8 h-8 text-slate-950 stroke-[2.5]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t(slide.title, slide.titleBn)}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {t(slide.subtitle, slide.subtitleBn)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto w-full my-auto py-2">
          {slide.cards.map((c, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#1e2235] border border-slate-800 text-left space-y-1.5 shadow-md">
              <span className="font-bold text-[#FACC15] text-xs block">
                ✓ {t(c.title, c.titleBn)}
              </span>
              <p className="text-[11px] text-slate-300 leading-snug">
                {t(c.text, c.textBn)}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-slate-800/80 pt-4">
          <div className="text-base sm:text-lg font-bold text-[#FACC15]">
            {t(slide.qa, slide.qaBn)}
          </div>
          <div className="text-xs text-slate-400 font-mono">
            {t(slide.instructor, slide.instructorBn)}
          </div>

          <button
            onClick={() => {
              try {
                confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
              } catch (e) {}
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>{t("Celebrate Graduation 🎉", "গ্র্যাজুয়েশন উৎসব উদযাপন করুন 🎉")}</span>
          </button>
        </div>
      </div>
    );
  }

  // 6. Default: Comparison Slide (Slides 3-15, 18-25)
  return (
    <div className="relative w-full rounded-3xl bg-[#181a29] border border-slate-800 p-5 sm:p-7 lg:p-9 shadow-2xl overflow-hidden space-y-6">
      {/* Slide Header */}
      <div className="flex items-start justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 px-2 py-0.5 rounded border border-[#FACC15]/20">
              {phaseLabel}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Slide {slide.page} of 26
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t(slide.title, slide.titleBn)}
          </h2>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
          {renderIcon(slide.badgeIcon)}
        </div>
      </div>

      {/* TOP SECTION: ANIMATED VISUAL DIAGRAM (Takes prominent stage) */}
      {slide.animation && (
        <div className="w-full">
          {renderVisualAnimation(slide.animation)}
        </div>
      )}

      {/* MID SECTION: TWO SIDE-BY-SIDE TERMINALS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        {/* LEFT TERMINAL: PHP 8.x */}
        <div className="flex flex-col justify-between rounded-2xl bg-[#1e2235] border border-slate-800 overflow-hidden shadow-xl">
          <div className="px-4 py-2.5 bg-[#24293f] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#777BB4]/20 border border-[#777BB4]/40 text-[#a5a9e2]">
                PHP 8.x
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-300 font-semibold">
                {slide.phpFile || 'code.php'}
              </span>
              <button
                onClick={() => handleCopy(slide.phpCode, 'php')}
                className="text-slate-400 hover:text-white transition-colors p-1"
                title="Copy PHP Code"
              >
                {copiedPhp ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 overflow-x-auto flex-1 bg-[#1a1d2e]">
            <pre className="m-0 bg-transparent">
              <code>{slide.phpCode}</code>
            </pre>
          </div>

          <div className="px-4 py-2 bg-[#24293f]/80 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#a5a9e2]">
              Server Environment
            </span>
            <button
              onClick={handleRunPhp}
              disabled={isPhpRunning}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#777BB4] hover:bg-[#868bc4] text-white font-bold text-xs font-mono shadow-md shadow-purple-500/10 active:scale-95 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPhpRunning ? t("Executing...", "চলছে...") : t("Run PHP", "PHP চালান")}</span>
            </button>
          </div>

          <div className="p-3.5 bg-[#161927] border-t border-slate-800 space-y-1">
            <span className="text-[11px] font-mono font-bold text-[#FACC15] block">
              PHP Output
            </span>
            <pre className="font-mono text-xs text-slate-300 bg-[#12141f] p-2.5 rounded-xl border border-slate-800/80 overflow-x-auto leading-relaxed">
              {phpOutput || slide.phpOutput}
            </pre>
          </div>
        </div>

        {/* RIGHT TERMINAL: JavaScript */}
        <div className="flex flex-col justify-between rounded-2xl bg-[#1e2235] border border-slate-800 overflow-hidden shadow-xl">
          <div className="px-4 py-2.5 bg-[#24293f] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FACC15]/20 border border-[#FACC15]/40 text-[#FACC15]">
                JavaScript
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-300 font-semibold">
                {slide.jsFile || 'code.js'}
              </span>
              <button
                onClick={() => handleCopy(slide.jsCode, 'js')}
                className="text-slate-400 hover:text-white transition-colors p-1"
                title="Copy JS Code"
              >
                {copiedJs ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 overflow-x-auto flex-1 bg-[#1a1d2e]">
            <pre className="m-0 bg-transparent">
              <code>{slide.jsCode}</code>
            </pre>
          </div>

          <div className="px-4 py-2 bg-[#24293f]/80 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#FACC15]">
              Client / Node Environment
            </span>
            <button
              onClick={handleRunJs}
              disabled={isJsRunning}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs font-mono shadow-md shadow-yellow-500/10 active:scale-95 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isJsRunning ? t("Executing...", "চলছে...") : t("Run JavaScript", "JS চালান")}</span>
            </button>
          </div>

          <div className="p-3.5 bg-[#161927] border-t border-slate-800 space-y-1">
            <span className="text-[11px] font-mono font-bold text-[#FACC15] block">
              JavaScript Output
            </span>
            <pre className="font-mono text-xs text-slate-300 bg-[#12141f] p-2.5 rounded-xl border border-slate-800/80 overflow-x-auto leading-relaxed">
              {jsOutput || slide.jsOutput}
            </pre>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: BULLETS & GOLDEN RULE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch pt-2">
        <div className="lg:col-span-7 p-5 rounded-2xl bg-[#1e2235]/70 border border-slate-800 space-y-3">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
            {t("Key Differences & Understanding:", "মূল পার্থক্য এবং বোঝার বিষয়াদি:")}
          </span>
          {slide.bullets && slide.bullets.map((bullet, idx) => {
            const bulletText = lang === 'bn' && slide.bulletsBn && slide.bulletsBn[idx] ? slide.bulletsBn[idx] : bullet;
            return (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                <span className="text-[#FACC15] text-base leading-none">•</span>
                <span>{bulletText}</span>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-[#FACC15]/10 border border-[#FACC15]/30 space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#FACC15] text-xs font-mono font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 fill-[#FACC15] text-slate-950" />
              <span>{t("The Golden Rule", "সুবর্ণ নিয়ম")}</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
              {t(slide.rule, slide.ruleBn)}
            </p>
          </div>

          <div className="pt-2 border-t border-yellow-500/20 flex items-center justify-between text-[11px] font-mono text-amber-200/70">
            <span>{t("Compare both side by side", "উভয় কোড পাশাপাশি তুলনা করুন")}</span>
            <button
              onClick={handleRunBoth}
              className="text-[#FACC15] hover:underline font-bold"
            >
              ▶ {t("Run Both", "উভয়টি চালান")}
            </button>
          </div>
        </div>
      </div>

      {/* QUIZ CHECKPOINT IF AVAILABLE */}
      {matchingQuiz && (
        <div className="pt-2">
          <QuizCard quiz={matchingQuiz} />
        </div>
      )}

      {/* Slide Bottom Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-800/80 pt-4">
        <span>{t("JavaScript & PHP Workshop · NIYD", "জাভাস্ক্রিপ্ট ও পিএইচপি কর্মশালা · জাতীয় যুব উন্নয়ন")}</span>
        <span>Slide {slide.page} of 26</span>
      </div>
    </div>
  );
}
