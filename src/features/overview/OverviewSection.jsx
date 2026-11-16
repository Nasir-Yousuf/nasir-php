import React, { useState } from 'react';
import { 
  FolderTree, 
  Layers, 
  Package, 
  FileCode, 
  Box, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Database,
  Globe,
  Sparkles
} from 'lucide-react';
import { PROJECT_METRICS, DIRECTORY_ROLES } from '../../data/projectStructure';
import { Badge } from '../../components/common/Badge';

export function OverviewSection({ onNavigateToSection, onSelectFile }) {
  const [selectedRole, setSelectedRole] = useState(DIRECTORY_ROLES[0]);

  const stats = [
    { label: "Verified Top Folders", value: PROJECT_METRICS.verifiedFolders, icon: FolderTree, color: "text-indigo-400 bg-indigo-500/10" },
    { label: "Root Files", value: 4, icon: FileCode, color: "text-cyan-400 bg-cyan-500/10" },
    { label: "PHP Source Files", value: PROJECT_METRICS.phpFiles, icon: Cpu, color: "text-purple-400 bg-purple-500/10" },
    { label: "Custom OOP Classes", value: PROJECT_METRICS.customClasses, icon: Box, color: "text-amber-400 bg-amber-500/10" },
    { label: "View Templates", value: PROJECT_METRICS.viewTemplates, icon: Layers, color: "text-emerald-400 bg-emerald-500/10" },
    { label: "Asset Directories", value: PROJECT_METRICS.frontendAssetDirs, icon: Globe, color: "text-rose-400 bg-rose-500/10" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Hero Banner */}
      <div className="relative rounded-3xl border border-laboratory-800 bg-gradient-to-br from-laboratory-900 via-laboratory-950 to-laboratory-900 p-8 lg:p-10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-php/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="php" size="md">
              <span className="w-2 h-2 rounded-full bg-php-accent animate-pulse" />
              Classroom Project Architecture
            </Badge>
            <Badge variant="verified" size="md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {PROJECT_METRICS.sourceCodeStatus}
            </Badge>
            <Badge variant="default" size="md">
              Target: {PROJECT_METRICS.phpVersionTarget}
            </Badge>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Deconstructing <span className="text-transparent bg-clip-text bg-gradient-to-r from-php via-indigo-400 to-accent-cyan">{PROJECT_METRICS.name}</span>
            </h1>
            <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
              An interactive visual laboratory designed for JavaScript developers learning PHP architecture. 
              Explore why every folder and file exists, watch live request simulations, inspect OOP blueprints, 
              and bridge JavaScript concepts directly into PHP fluency.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigateToSection('explorer')}
              className="flex items-center gap-2 px-4 py-2.5 bg-php hover:bg-php-dark text-white rounded-xl font-medium text-sm shadow-glow-sm transition-all active:scale-95"
            >
              <FolderTree className="w-4 h-4" />
              <span>Explore File Tree & Code</span>
            </button>

            <button
              onClick={() => onNavigateToSection('architecture')}
              className="flex items-center gap-2 px-4 py-2.5 bg-laboratory-850 hover:bg-laboratory-800 text-slate-200 border border-laboratory-750 rounded-xl font-medium text-sm transition-all"
            >
              <Layers className="w-4 h-4 text-accent-cyan" />
              <span>Interactive Architecture Map</span>
            </button>

            <button
              onClick={() => onNavigateToSection('lifecycle')}
              className="flex items-center gap-2 px-4 py-2.5 bg-laboratory-850 hover:bg-laboratory-800 text-slate-200 border border-laboratory-750 rounded-xl font-medium text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Request Lifecycle Simulator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Verified Statistics Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Verified Codebase Metrics</h2>
            <p className="text-xs text-slate-400">Extracted and verified directly from the source repository archive</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-laboratory-900/70 border border-laboratory-800 hover:border-laboratory-700 transition-all shadow-md group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl ${stat.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-2xl font-black text-white">{stat.value}</span>
                </div>
                <div className="text-xs text-slate-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Visual Architectural Hierarchy */}
      <div className="rounded-2xl border border-laboratory-800 bg-laboratory-900/50 p-6 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge variant="cyan" size="sm">First-Principles Architecture</Badge>
            <h2 className="text-lg font-bold text-white">Visual Summary of the Project Hierarchy</h2>
          </div>
          <p className="text-xs text-slate-400">
            Click on any architectural domain below to jump directly to its files in the code explorer.
          </p>
        </div>

        {/* Interactive Tree Graph */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Domain 1: Application Logic */}
          <button
            onClick={() => {
              onNavigateToSection('explorer');
              onSelectFile('app/classes/HelloWorld.php');
            }}
            className="text-left p-4 rounded-xl bg-gradient-to-b from-indigo-950/40 to-laboratory-900 border border-indigo-500/30 hover:border-indigo-400 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-2">
              <span className="font-bold">app/</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-semibold text-sm text-slate-100">Application Logic</div>
            <p className="text-[11px] text-slate-400 mt-1">
              OOP Controllers (HelloWorld.php), domain models (Car.php), and template engine helpers.
            </p>
          </button>

          {/* Domain 2: Dependencies */}
          <button
            onClick={() => {
              onNavigateToSection('explorer');
              onSelectFile('vendor/autoload.php');
            }}
            className="text-left p-4 rounded-xl bg-gradient-to-b from-purple-950/40 to-laboratory-900 border border-purple-500/30 hover:border-purple-400 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-purple-400 mb-2">
              <span className="font-bold">vendor/</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-semibold text-sm text-slate-100">Dependencies</div>
            <p className="text-[11px] text-slate-400 mt-1">
              Composer's autoload.php bootstrap and PSR-4 resolution classmap for autoloading.
            </p>
          </button>

          {/* Domain 3: User Interface */}
          <button
            onClick={() => {
              onNavigateToSection('explorer');
              onSelectFile('views/home.php');
            }}
            className="text-left p-4 rounded-xl bg-gradient-to-b from-emerald-950/40 to-laboratory-900 border border-emerald-500/30 hover:border-emerald-400 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
              <span className="font-bold">views/</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-semibold text-sm text-slate-100">User Interface</div>
            <p className="text-[11px] text-slate-400 mt-1">
              Dynamic page templates (home.php), modular includes (header, footer), and HTML wireframes.
            </p>
          </button>

          {/* Domain 4: Frontend Resources */}
          <button
            onClick={() => {
              onNavigateToSection('explorer');
              onSelectFile('assets/js/main.js');
            }}
            className="text-left p-4 rounded-xl bg-gradient-to-b from-cyan-950/40 to-laboratory-900 border border-cyan-500/30 hover:border-cyan-400 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
              <span className="font-bold">assets/</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-semibold text-sm text-slate-100">Frontend Resources</div>
            <p className="text-[11px] text-slate-400 mt-1">
              Bootstrap 5 stylesheets, custom CSS, and client-side vanilla JavaScript interactions.
            </p>
          </button>

          {/* Domain 5: Entry Points */}
          <button
            onClick={() => {
              onNavigateToSection('explorer');
              onSelectFile('web.php');
            }}
            className="text-left p-4 rounded-xl bg-gradient-to-b from-rose-950/40 to-laboratory-900 border border-rose-500/30 hover:border-rose-400 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-rose-400 mb-2">
              <span className="font-bold">web.php & index.php</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-semibold text-sm text-slate-100">Entry Gateways</div>
            <p className="text-[11px] text-slate-400 mt-1">
              HTTP Front Router (web.php dispatching ?page=...) and classroom testbench (index.php).
            </p>
          </button>
        </div>
      </div>

      {/* Separation of Concerns Deep-Dive Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">The Separation of Concerns Architecture</h2>
            <p className="text-xs text-slate-400">Why a professional PHP project isolates logic from views, dependencies, and styles</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Pillar 1 */}
          <div className="p-5 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Application Logic vs Views</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Beginners often echo HTML directly from inside PHP classes or run database queries inside template files. 
              In <code className="text-php-accent font-mono">php-class-two</code>, <code className="text-php-accent font-mono">HelloWorld.php</code> prepares data in RAM, and calls <code className="text-emerald-400 font-mono">view('home', $data)</code>. 
              The view never touches class internals, and the class never outputs raw HTML tags.
            </p>
            <div className="text-[11px] font-mono text-indigo-400 bg-indigo-950/30 p-2.5 rounded-lg border border-indigo-500/20">
              Rule: Controllers think, Templates display.
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Composer vs Manual Requires</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In older PHP projects, developers had to manually write <code className="text-amber-400 font-mono">require_once 'Car.php'</code> in every file. 
              Composer solves this via <strong>PSR-4 autoloading</strong>. A single <code className="text-purple-400 font-mono">require 'vendor/autoload.php'</code> in your entry point makes every class in the project available on demand.
            </p>
            <div className="text-[11px] font-mono text-purple-400 bg-purple-950/30 p-2.5 rounded-lg border border-purple-500/20">
              Rule: Let Composer find classes on disk.
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Server PHP vs Client JavaScript</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              PHP runs on the server, generates an HTML string, and terminates immediately. 
              Then, the client's browser receives that HTML and executes <code className="text-cyan-400 font-mono">main.js</code> and Bootstrap. 
              PHP and JavaScript never run at the same time in the same place: one is server-side, the other is client-side.
            </p>
            <div className="text-[11px] font-mono text-cyan-400 bg-cyan-950/30 p-2.5 rounded-lg border border-cyan-500/20">
              Rule: PHP finishes before JS even starts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
