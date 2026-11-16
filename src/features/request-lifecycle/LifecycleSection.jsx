import React, { useState } from 'react';
import { 
  Globe, 
  Server, 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Code, 
  FileCode, 
  Layout, 
  Layers, 
  Cpu, 
  Sparkles,
  ChevronRight,
  Database,
  ExternalLink
} from 'lucide-react';
import { LIFECYCLE_STAGES, MOCK_GENERATED_HTML } from '../../data/lifecycleStages';
import { CodeBlock } from '../../components/common/CodeBlock';
import { Badge } from '../../components/common/Badge';

export function LifecycleSection({ onSelectFile }) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [outputViewMode, setOutputViewMode] = useState('browser'); // 'source' | 'buffer' | 'html' | 'browser'

  const currentStage = LIFECYCLE_STAGES[activeStageIndex];
  const totalStages = LIFECYCLE_STAGES.length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-laboratory-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="cyan" size="sm">Client vs Server Runtime</Badge>
            <h1 className="text-2xl font-bold text-white tracking-tight">Request Lifecycle Simulator</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Step through the 10-stage journey of an HTTP request hitting <code className="text-php-accent font-mono">web.php?page=home</code>.
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex items-center gap-2 bg-laboratory-900/90 p-1.5 rounded-2xl border border-laboratory-800">
          <button
            onClick={() => setActiveStageIndex(Math.max(0, activeStageIndex - 1))}
            disabled={activeStageIndex === 0}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 hover:bg-laboratory-800 transition-colors"
            title="Previous Stage"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <span className="font-mono text-xs font-bold text-slate-200 px-2">
            Stage {activeStageIndex + 1} of {totalStages}
          </span>

          <button
            onClick={() => setActiveStageIndex(Math.min(totalStages - 1, activeStageIndex + 1))}
            disabled={activeStageIndex === totalStages - 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-php hover:bg-php-dark text-white font-mono text-xs font-semibold disabled:opacity-30 transition-all"
            title="Next Stage"
          >
            <span>Next Stage</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setActiveStageIndex(0)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-laboratory-800 transition-colors"
            title="Reset to Stage 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Step Indicator */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
        {LIFECYCLE_STAGES.map((stage, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStageIndex(idx)}
            className={`py-2 px-1 rounded-xl text-center font-mono text-[11px] font-bold transition-all border ${
              activeStageIndex === idx
                ? 'bg-php text-white border-php shadow-glow-sm scale-105'
                : idx < activeStageIndex
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-laboratory-900/60 text-slate-500 border-laboratory-800 hover:text-slate-300'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Current Stage Card */}
      <div className="rounded-2xl border border-laboratory-800 bg-laboratory-900/90 p-5 space-y-3 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${currentStage.actorColor}`}>
              {currentStage.actor}
            </span>
            <h2 className="text-lg font-bold text-white tracking-tight">
              {currentStage.title}
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Buffer: <strong className="text-slate-200">{currentStage.bufferState}</strong>
          </span>
        </div>

        <p className="text-sm text-slate-200 leading-relaxed">
          {currentStage.description}
        </p>

        <div className="p-3 rounded-xl bg-laboratory-950 border border-laboratory-800/80 text-xs text-slate-300 flex items-start gap-2">
          <Sparkles className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
          <span>
            <strong>Architectural Insight:</strong> {currentStage.concept}
          </span>
        </div>
      </div>

      {/* Split-Screen Simulation: Browser vs Server */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT: Client Browser Simulator (Col 6) */}
        <div className="lg:col-span-6 rounded-2xl border border-laboratory-800 bg-laboratory-950 flex flex-col justify-between overflow-hidden shadow-2xl">
          {/* Browser Chrome Header */}
          <div className="p-3 bg-laboratory-900/90 border-b border-laboratory-800 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 flex items-center gap-2 bg-laboratory-950 px-3 py-1.5 rounded-lg border border-laboratory-800 text-xs font-mono text-slate-300">
              <Globe className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
              <span className="text-slate-500">http://</span>
              <span className="text-slate-200">localhost</span>
              <span className="text-slate-500">/php-class-two/</span>
              <span className="text-php-accent font-bold">web.php?page=home</span>
            </div>
          </div>

          {/* Viewport Output Switcher */}
          <div className="p-3 bg-laboratory-900/40 border-b border-laboratory-850 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 font-semibold">Inspect Perspective:</span>
            <div className="flex gap-1">
              <button
                onClick={() => setOutputViewMode('browser')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  outputViewMode === 'browser'
                    ? 'bg-php text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Browser Render
              </button>
              <button
                onClick={() => setOutputViewMode('html')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  outputViewMode === 'html'
                    ? 'bg-php text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Generated HTML
              </button>
              <button
                onClick={() => setOutputViewMode('source')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  outputViewMode === 'source'
                    ? 'bg-php text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PHP Source
              </button>
            </div>
          </div>

          {/* Viewport Content */}
          <div className="flex-1 p-4 bg-slate-950/60 overflow-y-auto max-h-[460px]">
            {outputViewMode === 'browser' && (
              <div className="rounded-xl border border-laboratory-800 bg-white text-slate-900 overflow-hidden shadow-lg">
                {/* Simulated Navbar */}
                <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-sans">
                  <span className="font-bold">My PHP project</span>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-semibold underline">Home</span>
                    <span className="text-slate-300">About</span>
                    <span className="text-slate-300">Contact</span>
                    <span className="text-slate-300">Login</span>
                  </div>
                </div>

                {/* Simulated Content Area */}
                <div className="p-4 bg-slate-100">
                  <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-blue-600 text-white font-bold px-4 py-2 text-xs">
                      All Student
                    </div>
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
                        <tr>
                          <th className="p-2">Id</th>
                          <th className="p-2">Name</th>
                          <th className="p-2">Email</th>
                          <th className="p-2">Mobile</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="p-2 font-mono">1</td>
                          <td className="p-2 font-semibold">Borno</td>
                          <td className="p-2">borno@gmail.com</td>
                          <td className="p-2 font-mono">0181818188</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">2</td>
                          <td className="p-2 font-semibold">Patwari</td>
                          <td className="p-2">patwari@gmail.com</td>
                          <td className="p-2 font-mono">0181818188</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">3</td>
                          <td className="p-2 font-semibold">Golam</td>
                          <td className="p-2">golam@gmail.com</td>
                          <td className="p-2 font-mono">0181818188</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">40</td>
                          <td className="p-2 font-semibold">Golam</td>
                          <td className="p-2">golam@gmail.com</td>
                          <td className="p-2 font-mono">0181818188</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-2 bg-slate-200 text-[10px] text-slate-600 text-center border-t border-slate-300">
                  Rendered via Bootstrap 5 in client viewport
                </div>
              </div>
            )}

            {outputViewMode === 'html' && (
              <CodeBlock
                code={MOCK_GENERATED_HTML}
                language="markup"
                title="Generated HTML Streamed to Browser"
                maxHeight="420px"
              />
            )}

            {outputViewMode === 'source' && (
              <CodeBlock
                code={`<!-- views/home.php (Server Template Source) -->
<?php include "includes/header.php"; ?>

<section class="py-5 bg-secondary-subtle">
    <div class="container">
        <table class="table table-bordeard">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
            </tr>
            <?php foreach($students as $student) { ?>
            <tr>
                <td><?php echo $student["id"]; ?></td>
                <td><?php echo $student["name"]; ?></td>
                <td><?php echo $student["email"]; ?></td>
                <td><?php echo $student["mobile"]; ?></td>
            </tr>
            <?php } ?>
        </table>
    </div>
</section>

<?php include "includes/footer.php"; ?>`}
                language="php"
                title="PHP Template Source Code on Server"
                maxHeight="420px"
              />
            )}
          </div>
        </div>

        {/* RIGHT: Server Execution & Memory State (Col 6) */}
        <div className="lg:col-span-6 rounded-2xl border border-laboratory-800 bg-laboratory-950 p-5 space-y-4 shadow-2xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-laboratory-800 pb-3">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white text-base">
                  Apache / PHP Engine State
                </h3>
              </div>
              <Badge variant="warning" size="sm">
                Stage {currentStage.step}
              </Badge>
            </div>

            {/* Server State Indicator */}
            <div className="p-3.5 rounded-xl bg-laboratory-900 border border-laboratory-800 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Server Memory & Process
              </span>
              <p className="text-xs text-slate-200 font-mono">
                {currentStage.serverState}
              </p>
            </div>

            {/* Code Executing at this Moment */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold text-slate-300">
                Active Code Execution:
              </span>
              <CodeBlock
                code={currentStage.codeSnippet}
                language="php"
                title={`Executing Stage ${currentStage.step}`}
                maxHeight="200px"
              />
            </div>
          </div>

          {/* Key Mental Model Callout */}
          <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-indigo-200 text-xs space-y-1">
            <span className="font-mono font-bold uppercase tracking-wider text-[10px] text-indigo-400">
              Why the browser never sees the PHP code
            </span>
            <p className="leading-relaxed text-[11px] text-indigo-100">
              When Apache encounters a .php file, it triggers the PHP binary. PHP executes all statements, compiles the template with data, and returns plain HTML text to Apache. Apache transmits only this text. The raw PHP code never leaves the server's hard drive!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
