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
  Terminal, 
  Check, 
  Copy, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Lightbulb,
  List,
  Folder,
  FileCode,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function SideBySideSlide({ slide, onNavigatePage }) {
  const [copiedPhp, setCopiedPhp] = useState(false);
  const [copiedJs, setCopiedJs] = useState(false);
  const [phpOutput, setPhpOutput] = useState(null);
  const [jsOutput, setJsOutput] = useState(null);
  const [isPhpRunning, setIsPhpRunning] = useState(false);
  const [isJsRunning, setIsJsRunning] = useState(false);
  const [selectedFileItem, setSelectedFileItem] = useState('web.php');

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

  // Determine Phase label
  const phaseLabel = slide.page <= 15 ? "Phase 1: Basics Side by Side" : "Phase 2: php-class-two Project";

  // 1. Cover Slide
  if (slide.type === 'cover') {
    return (
      <div className="relative w-full aspect-[16/9] min-h-[520px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-14 flex flex-col justify-between text-center shadow-2xl overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="px-3 py-1 rounded-full bg-[#1e2235] border border-slate-800 text-[#FACC15] font-bold">
            JavaScript & PHP Interactive Slide Deck
          </span>
          <span>Slide 1 / 26</span>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto my-auto">
          {/* Big Yellow Icon Badge */}
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#FACC15] flex items-center justify-center shadow-2xl shadow-yellow-500/20">
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

          <div className="pt-2">
            <button
              onClick={() => onNavigatePage(2)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-sm shadow-xl shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Begin Side-by-Side Presentation</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-500 font-mono flex items-center justify-between border-t border-slate-800/80 pt-4">
          <span>National Institute of Youth Development</span>
          <span className="text-slate-400">Use Arrow keys ← / → or Spacebar to navigate</span>
        </div>
      </div>
    );
  }

  // 2. Roadmap Slide
  if (slide.type === 'roadmap') {
    const phase1Items = [
      { name: "Variables ($ vs let/const)", page: 3 },
      { name: "Data Types & Type Checking", page: 4 },
      { name: "Strings (Dot '.' vs '+')", page: 5 },
      { name: "Math Operators & Increment", page: 6 },
      { name: "Decisions (if / else)", page: 7 },
      { name: "Multi-Way Decisions (elseif)", page: 8 },
      { name: "Loops (for & while)", page: 9 },
      { name: "Array Iteration (foreach vs for..of)", page: 10 },
      { name: "Functions & Parameters", page: 11 },
      { name: "Indexed Arrays (Lists)", page: 12 },
      { name: "Associative Arrays vs Objects", page: 13 },
      { name: "OOP Classes & Constructors", page: 14 },
      { name: "Object Instantiation & $this->", page: 15 }
    ];

    const phase2Items = [
      { name: "php-class-two Folder Blueprint", page: 17 },
      { name: "web.php (Front Router)", page: 18 },
      { name: "HelloWorld.php (Controller)", page: 19 },
      { name: "helpers.php (10-Line View Engine)", page: 20 },
      { name: "header.php & footer.php Partials", page: 21 },
      { name: "views/home.php (Dynamic Table)", page: 22 },
      { name: "composer.json (PSR-4 Autoloading)", page: 23 },
      { name: "Frontend Assets & Client/Server Wall", page: 24 },
      { name: "The Complete 6-Step Request Lifecycle", page: 25 },
      { name: "Recap & Celebration", page: 26 }
    ];

    return (
      <div className="relative w-full rounded-3xl bg-[#181a29] border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FACC15]">
              Curriculum Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
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

        {/* 2 Big Phase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Phase 1 Card */}
          <div className="p-6 rounded-2xl bg-[#1e2235] border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#777BB4] text-white font-mono font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h3 className="font-bold text-white text-base">
                  Phase 1: Language Basics Side by Side
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Slides 3–15</span>
            </div>

            <p className="text-xs text-slate-300">
              Direct comparisons for students who know JavaScript syntax and want to understand PHP syntax effortlessly:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {phase1Items.map((item, idx) => (
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
                <span className="w-6 h-6 rounded-lg bg-[#FACC15] text-slate-950 font-mono font-black text-xs flex items-center justify-center">
                  2
                </span>
                <h3 className="font-bold text-white text-base">
                  Phase 2: The Real php-class-two Project
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Slides 16–26</span>
            </div>

            <p className="text-xs text-slate-300">
              Deconstructing your verified classroom project step by step: Front router, controllers, view helpers, layouts, and Composer:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {phase2Items.map((item, idx) => (
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

        {/* Tip banner */}
        <div className="p-4 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/30 text-amber-200 text-xs text-center font-medium">
          💡 Click any topic above to jump directly to that slide, or click <strong>"Next Slide"</strong> to progress step by step!
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-800/80 pt-4">
          <span>JavaScript & PHP Workshop · NIYD</span>
          <span>Page 2 of 26</span>
        </div>
      </div>
    );
  }

  // 3. Section Transition Slide (Slide 16)
  if (slide.type === 'section') {
    return (
      <div className="relative w-full aspect-[16/9] min-h-[500px] rounded-3xl bg-[#181a29] border border-slate-800 p-8 sm:p-14 flex flex-col justify-between text-center shadow-2xl overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div />

        <div className="space-y-4 max-w-xl mx-auto my-auto">
          <div className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-[#FACC15] uppercase">
            P H A S E  2  B E G I N S
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {slide.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            {slide.subtitle}
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigatePage(17)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore The Blueprint</span>
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
    const fileExplanations = {
      'web.php': {
        title: 'web.php (Front Controller Router)',
        badge: 'Entry Point',
        role: 'Reads $_GET["page"] and invokes the matching controller method (index, about, contact, login).',
        slide: 18
      },
      'HelloWorld.php': {
        title: 'app/classes/HelloWorld.php (Controller)',
        badge: 'Controller',
        role: 'Prepares the student roster associative array and calls view("home", ["students" => $this->students]).',
        slide: 19
      },
      'helpers.php': {
        title: 'app/helpers/helpers.php (View Engine)',
        badge: 'Helper / Engine',
        role: '10-line view() engine using ob_start() and extract($data) to compile views/home.php with dynamic data.',
        slide: 20
      },
      'Car.php': {
        title: 'app/classes/Car.php (Data Model)',
        badge: 'OOP Model',
        role: 'Defines properties ($name, $color, $model), __construct(), and methods (getName, getColor).',
        slide: 14
      },
      'header.php': {
        title: 'views/includes/header.php (Reusable Layout)',
        badge: 'Template Partial',
        role: 'Contains the HTML <head>, Bootstrap CSS link, and universal navigation navbar.',
        slide: 21
      },
      'home.php': {
        title: 'views/home.php (Dynamic Table View)',
        badge: 'View Template',
        role: 'Renders the student records into a Bootstrap table using a PHP foreach loop.',
        slide: 22
      },
      'composer.json': {
        title: 'composer.json (Autoloading Blueprint)',
        badge: 'Package Manager',
        role: 'Configures PSR-4 for App\\ namespace and specifies app/helpers/helpers.php in the "files" array.',
        slide: 23
      },
      'main.js': {
        title: 'assets/js/main.js (Client-Side JS)',
        badge: 'Frontend JS',
        role: 'Runs in the user\'s browser to listen for window scroll events and add .is-sticky to the navbar.',
        slide: 24
      }
    };

    const currentExpl = fileExplanations[selectedFileItem] || fileExplanations['web.php'];

    return (
      <div className="relative w-full rounded-3xl bg-[#181a29] border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FACC15]">
              Phase 2: Project Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click any file or folder to inspect its role in the architecture:
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
            <FolderTree className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Interactive Directory Tree (Col 7) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#1e2235] border border-slate-800 p-5 font-mono text-xs shadow-xl space-y-2 overflow-x-auto">
            <div className="text-[11px] font-bold text-slate-400 border-b border-slate-800 pb-2 mb-3 flex items-center gap-2">
              <Folder className="w-4 h-4 text-[#FACC15]" />
              <span>php-class-two/ Directory Structure</span>
            </div>

            <div className="space-y-1 leading-relaxed">
              <div className="text-slate-400">php-class-two/</div>
              
              <div className="pl-4 border-l border-slate-800 space-y-1">
                {/* app/ */}
                <div className="text-amber-300 font-bold">├── app/ <span className="text-slate-500 font-normal">(Application Logic)</span></div>
                <div className="pl-4 border-l border-slate-800 space-y-1">
                  <div className="text-slate-400">├── classes/</div>
                  <div className="pl-4 border-l border-slate-800 space-y-1">
                    <button 
                      onClick={() => setSelectedFileItem('HelloWorld.php')}
                      className={`block text-left px-2 py-0.5 rounded transition-all ${selectedFileItem === 'HelloWorld.php' ? 'bg-[#FACC15] text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-[#252b42]'}`}
                    >
                      ├── HelloWorld.php  <span className="opacity-70">(Controller)</span>
                    </button>
                    <button 
                      onClick={() => setSelectedFileItem('Car.php')}
                      className={`block text-left px-2 py-0.5 rounded transition-all ${selectedFileItem === 'Car.php' ? 'bg-[#FACC15] text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-[#252b42]'}`}
                    >
                      ├── Car.php  <span className="opacity-70">(OOP Model)</span>
                    </button>
                    <div className="text-slate-500 px-2">└── NewClass.php</div>
                  </div>
                  <div className="text-slate-400">└── helpers/</div>
                  <div className="pl-4 border-l border-slate-800">
                    <button 
                      onClick={() => setSelectedFileItem('helpers.php')}
                      className={`block text-left px-2 py-0.5 rounded transition-all ${selectedFileItem === 'helpers.php' ? 'bg-[#FACC15] text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-[#252b42]'}`}
                    >
                      └── helpers.php  <span className="opacity-70">(10-Line View Engine)</span>
                    </button>
                  </div>
                </div>

                {/* views/ */}
                <div className="text-sky-300 font-bold mt-2">├── views/ <span className="text-slate-500 font-normal">(UI Templates)</span></div>
                <div className="pl-4 border-l border-slate-800 space-y-1">
                  <div className="text-slate-400">├── includes/</div>
                  <div className="pl-4 border-l border-slate-800 space-y-1">
                    <button 
                      onClick={() => setSelectedFileItem('header.php')}
                      className={`block text-left px-2 py-0.5 rounded transition-all ${selectedFileItem === 'header.php' ? 'bg-[#FACC15] text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-[#252b42]'}`}
                    >
                      ├── header.php  <span className="opacity-70">(Nav & Bootstrap Head)</span>
                    </button>
                    <div className="text-slate-400 px-2">└── footer.php</div>
                  </div>
                  <button 
                    onClick={() => setSelectedFileItem('home.php')}
                    className={`block text-left px-2 py-0.5 rounded transition-all ${selectedFileItem === 'home.php' ? 'bg-[#FACC15] text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-[#252b42]'}`}
                  >
                    ├── home.php  <span className="opacity-70">(Bootstrap Table Loop)</span>
                  </button>
                  <div className="text-slate-500 px-2">├── about.php, contact.php, login.php</div>
                </div>

                {/* assets/ */}
                <div className="text-emerald-300 font-bold mt-2">├── assets/ <span className="text-slate-500 font-normal">(Client-Side CSS & JS)</span></div>
                <div className="pl-4 border-l border-slate-800 space-y-1">
                  <div className="text-slate-500 px-2">├── css/ (bootstrap.min.css, style.css)</div>
                  <button 
                    onClick={() => setSelectedFileItem('main.js')}
                    className={`block text-left px-2 py-0.5 rounded transition-all ${selectedFileItem === 'main.js' ? 'bg-[#FACC15] text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-[#252b42]'}`}
                  >
                    └── js/ (bootstrap.bundle.min.js, main.js)
                  </button>
                </div>

                {/* Root files */}
                <div className="text-purple-300 font-bold mt-2">├── vendor/autoload.php <span className="text-slate-500 font-normal">(Composer Autoloader)</span></div>
                <button 
                  onClick={() => setSelectedFileItem('composer.json')}
                  className={`block text-left px-2 py-0.5 rounded transition-all ${selectedFileItem === 'composer.json' ? 'bg-[#FACC15] text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-[#252b42]'}`}
                >
                  ├── composer.json  <span className="opacity-70">(PSR-4 Mapping)</span>
                </button>
                <button 
                  onClick={() => setSelectedFileItem('web.php')}
                  className={`block text-left px-2 py-0.5 rounded transition-all ${selectedFileItem === 'web.php' ? 'bg-[#FACC15] text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-[#252b42]'}`}
                >
                  └── web.php  <span className="opacity-70">(Front Router ?page=home)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Selected File Inspector Card (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#1e2235] border border-slate-800 shadow-xl space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/30 text-[11px] font-mono font-bold">
                  {currentExpl.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">Architecture Node</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {currentExpl.title}
              </h3>

              <div className="p-4 rounded-xl bg-[#161927] border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {currentExpl.role}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                Dive deeper into the code and mechanics:
              </div>
              <button
                onClick={() => onNavigatePage(currentExpl.slide)}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Go to Slide {currentExpl.slide} (Detailed View)</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>

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
            {slide.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {slide.subtitle}
          </p>
        </div>

        {/* 4 Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto w-full my-auto py-2">
          {slide.cards.map((c, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#1e2235] border border-slate-800 text-left space-y-1.5 shadow-md">
              <span className="font-bold text-[#FACC15] text-xs block">
                ✓ {c.title}
              </span>
              <p className="text-[11px] text-slate-300 leading-snug">
                {c.text}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-slate-800/80 pt-4">
          <div className="text-base sm:text-lg font-bold text-[#FACC15]">
            {slide.qa}
          </div>
          <div className="text-xs text-slate-400 font-mono">
            {slide.instructor}
          </div>

          <button
            onClick={() => {
              try {
                confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
              } catch (e) {}
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Celebrate Graduation 🎉</span>
          </button>
        </div>
      </div>
    );
  }

  // 6. Default: Side-by-Side Comparison Slide (Slides 3-15, 18-25)
  return (
    <div className="relative w-full rounded-3xl bg-[#181a29] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden space-y-6">
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
            {slide.title}
          </h2>
        </div>

        {/* Yellow Category Icon Badge */}
        <div className="w-12 h-12 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
          {renderIcon(slide.badgeIcon)}
        </div>
      </div>

      {/* Main Grid: TWO SIDE-BY-SIDE TERMINALS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* LEFT TERMINAL: PHP 8.x */}
        <div className="flex flex-col justify-between rounded-2xl bg-[#1e2235] border border-slate-800 overflow-hidden shadow-xl">
          {/* PHP Window Titlebar */}
          <div className="px-4 py-3 bg-[#24293f] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
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

          {/* PHP Code Area */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 overflow-x-auto flex-1 bg-[#1a1d2e]">
            <pre className="m-0 bg-transparent">
              <code>{slide.phpCode}</code>
            </pre>
          </div>

          {/* PHP Run Bar */}
          <div className="px-4 py-2.5 bg-[#24293f]/80 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#a5a9e2]">
              Server Environment
            </span>
            <button
              onClick={handleRunPhp}
              disabled={isPhpRunning}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#777BB4] hover:bg-[#868bc4] text-white font-bold text-xs font-mono shadow-md shadow-purple-500/10 active:scale-95 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPhpRunning ? "Executing..." : "Run PHP"}</span>
            </button>
          </div>

          {/* PHP Output Box */}
          <div className="p-4 bg-[#161927] border-t border-slate-800 space-y-1.5">
            <span className="text-[11px] font-mono font-bold text-[#FACC15] block">
              PHP Output
            </span>
            <pre className="font-mono text-xs text-slate-300 bg-[#12141f] p-3 rounded-xl border border-slate-800/80 overflow-x-auto leading-relaxed">
              {phpOutput || slide.phpOutput}
            </pre>
          </div>
        </div>

        {/* RIGHT TERMINAL: JavaScript */}
        <div className="flex flex-col justify-between rounded-2xl bg-[#1e2235] border border-slate-800 overflow-hidden shadow-xl">
          {/* JS Window Titlebar */}
          <div className="px-4 py-3 bg-[#24293f] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
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

          {/* JS Code Area */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 overflow-x-auto flex-1 bg-[#1a1d2e]">
            <pre className="m-0 bg-transparent">
              <code>{slide.jsCode}</code>
            </pre>
          </div>

          {/* JS Run Bar */}
          <div className="px-4 py-2.5 bg-[#24293f]/80 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#FACC15]">
              Client / Node Environment
            </span>
            <button
              onClick={handleRunJs}
              disabled={isJsRunning}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs font-mono shadow-md shadow-yellow-500/10 active:scale-95 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isJsRunning ? "Executing..." : "Run JavaScript"}</span>
            </button>
          </div>

          {/* JS Output Box */}
          <div className="p-4 bg-[#161927] border-t border-slate-800 space-y-1.5">
            <span className="text-[11px] font-mono font-bold text-[#FACC15] block">
              JavaScript Output
            </span>
            <pre className="font-mono text-xs text-slate-300 bg-[#12141f] p-3 rounded-xl border border-slate-800/80 overflow-x-auto leading-relaxed">
              {jsOutput || slide.jsOutput}
            </pre>
          </div>
        </div>
      </div>

      {/* Bottom Row: Bullets & Golden Rule Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        {/* Bullet Points (Col 7) */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-[#1e2235]/70 border border-slate-800 space-y-3">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
            Key Differences & Understanding:
          </span>
          {slide.bullets && slide.bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              <span className="text-[#FACC15] text-base leading-none">•</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Golden Rule / Classroom Tip (Col 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-[#FACC15]/10 border border-[#FACC15]/30 space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#FACC15] text-xs font-mono font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 fill-[#FACC15] text-slate-950" />
              <span>The Golden Rule</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
              {slide.rule || slide.tip}
            </p>
          </div>

          <div className="pt-2 border-t border-yellow-500/20 flex items-center justify-between text-[11px] font-mono text-amber-200/70">
            <span>Click "Run" on both to compare output!</span>
            <button
              onClick={handleRunBoth}
              className="text-[#FACC15] hover:underline font-bold"
            >
              ▶ Run Both
            </button>
          </div>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-800/80 pt-4">
        <span>JavaScript & PHP Workshop · National Institute of Youth Development (NIYD)</span>
        <span>Slide {slide.page} of 26</span>
      </div>
    </div>
  );
}
