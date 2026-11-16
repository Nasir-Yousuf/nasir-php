import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Box, 
  Package, 
  Globe,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { CLASS_ONE_DATA, CLASS_TWO_DATA } from '../../data/classesData';

export function BigPictureSection({ activeClassView, onSelectTab }) {
  const isClass1 = activeClassView === 'class1';
  const data = isClass1 ? CLASS_ONE_DATA : CLASS_TWO_DATA;

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Hero Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{data.name}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {data.tagline}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            {data.summary}
          </p>

          {/* Big Question & Answer Box */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 mt-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Lightbulb className="w-4 h-4 shrink-0" />
              <span>The Big Question: "{data.keyQuestion}"</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-6">
              {data.keyAnswer}
            </p>
          </div>
        </div>
      </div>

      {/* The 3 Core Pillars in Plain English */}
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-white">
            {isClass1 ? "The 3 Pieces of Class 1" : "The 4 Pillars of Class 2"}
          </h2>
          <p className="text-xs text-slate-400">
            {isClass1 
              ? "Every file has one simple job. Together, they create a professional PHP structure." 
              : "Building on Class 1: Views for HTML, Helpers for rendering, Router for navigation."}
          </p>
        </div>

        {isClass1 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Piece 1 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-base">
                1
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  The Starter Key
                </span>
                <h3 className="text-lg font-bold text-white font-mono">index.php</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The file you open in your browser. It doesn't do heavy work itself — it just asks the autoloader for the class and starts it.
              </p>
              <div className="text-[11px] font-mono text-emerald-300 bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/20">
                Job: Boot the app
              </div>
            </div>

            {/* Piece 2 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold font-mono text-base">
                2
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold">
                  The Autoloader Rulebook
                </span>
                <h3 className="text-lg font-bold text-white font-mono">composer.json</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tells PHP: "Whenever you see <code className="text-purple-300">App\</code>, look inside the <code className="text-purple-300">app/</code> folder." You never need manual <code className="text-slate-400">require 'file.php'</code> lines again!
              </p>
              <div className="text-[11px] font-mono text-purple-300 bg-purple-950/40 p-2 rounded-lg border border-purple-500/20">
                Job: Find classes automatically
              </div>
            </div>

            {/* Piece 3 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold font-mono text-base">
                3
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
                  The Blueprint Class
                </span>
                <h3 className="text-lg font-bold text-white font-mono">HelloWorld.php</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A reusable class blueprint. It holds the data (<code className="text-indigo-300">$message</code>) and method (<code className="text-indigo-300">index()</code>) that prints the output.
              </p>
              <div className="text-[11px] font-mono text-indigo-300 bg-indigo-950/40 p-2 rounded-lg border border-indigo-500/20">
                Job: Hold the actual logic
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Class 2 Pillar 1 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-indigo-400 font-bold block">1. Controller</span>
              <h3 className="font-bold text-white text-base">app/classes/</h3>
              <p className="text-xs text-slate-300">
                Prepares student data arrays and calls the view engine.
              </p>
            </div>

            {/* Class 2 Pillar 2 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold block">2. HTML Templates</span>
              <h3 className="font-bold text-white text-base">views/</h3>
              <p className="text-xs text-slate-300">
                Home table, About, Contact, and reusable header/footer partials.
              </p>
            </div>

            {/* Class 2 Pillar 3 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-amber-400 font-bold block">3. View Engine</span>
              <h3 className="font-bold text-white text-base">helpers.php</h3>
              <p className="text-xs text-slate-300">
                Custom view() function that buffers HTML and injects variables.
              </p>
            </div>

            {/* Class 2 Pillar 4 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-rose-400 font-bold block">4. Web Router</span>
              <h3 className="font-bold text-white text-base">web.php</h3>
              <p className="text-xs text-slate-300">
                Reads ?page=about and tells the controller which page to show.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Quick Call to Action */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-900 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white">Want to see the actual code in 3 simple clicks?</h3>
          <p className="text-xs text-slate-400">Explore the exact files with plain English line-by-line notes.</p>
        </div>
        <button
          onClick={() => onSelectTab('files')}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all shrink-0"
        >
          <span>Open Visual File Guide</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
