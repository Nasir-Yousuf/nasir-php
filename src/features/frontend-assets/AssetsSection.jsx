import React, { useState } from 'react';
import { 
  Palette, 
  Globe, 
  Server, 
  ArrowRight, 
  Code2, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  MousePointer,
  Zap,
  ShieldAlert
} from 'lucide-react';
import { CodeBlock } from '../../components/common/CodeBlock';
import { Badge } from '../../components/common/Badge';

export function AssetsSection({ onSelectFile }) {
  const [pipelineStep, setPipelineStep] = useState(1);
  const [isStickyDemo, setIsStickyDemo] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-laboratory-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="cyan" size="sm">Client-Side Resources</Badge>
            <h1 className="text-2xl font-bold text-white tracking-tight">Frontend Assets & The Client-Server Boundary</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Understanding why <code className="text-cyan-400 font-mono">assets/css/</code> and <code className="text-cyan-400 font-mono">assets/js/</code> live independently from PHP.
          </p>
        </div>

        <Badge variant="verified" size="sm">
          Bootstrap 5.3 + Vanilla JS
        </Badge>
      </div>

      {/* The Great Client-Server Wall Comparison */}
      <div className="p-6 rounded-3xl border border-laboratory-800 bg-gradient-to-br from-laboratory-900 via-laboratory-950 to-laboratory-900 shadow-2xl space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-cyan">
            Fundamental Architecture Principle
          </span>
          <h2 className="text-2xl font-bold text-white">
            The Great Client-Server Boundary Wall
          </h2>
          <p className="text-xs text-slate-300">
            One of the most common confusions for developers learning PHP is where PHP stops and where JavaScript begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Left: Server Side (PHP) */}
          <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-3">
            <div className="flex items-center gap-2 text-indigo-400 font-mono font-bold text-sm">
              <Server className="w-5 h-5" />
              <span>SERVER REALM (PHP / Apache)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span><strong>Execution:</strong> Runs strictly on the server machine (Apache/PHP).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span><strong>Lifecycle:</strong> Executes from top to bottom, sends an HTML string, and <em>terminates completely</em>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span><strong>Access:</strong> Has direct access to MySQL databases, server files, and hidden API keys.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span><strong>Limitation:</strong> CANNOT listen to mouse clicks, scrolling, or browser animations directly!</span>
              </li>
            </ul>
          </div>

          {/* Right: Client Side (CSS / JS) */}
          <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 text-accent-cyan font-mono font-bold text-sm">
              <Globe className="w-5 h-5" />
              <span>CLIENT REALM (Browser Viewport)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Execution:</strong> Runs inside the user's web browser (Chrome, Safari, Firefox).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Lifecycle:</strong> Starts executing ONLY AFTER the server has finished and sent the HTML!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Role:</strong> Formats layout (Bootstrap), handles scrolling (main.js), toggles sticky headers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Limitation:</strong> Cannot read PHP variables or server databases without sending a new request (or fetch/AJAX).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visual Browser Pipeline Steps */}
      <div className="rounded-2xl border border-laboratory-800 bg-laboratory-950 p-6 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-laboratory-850 pb-3">
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              Rendering Pipeline
            </span>
            <h3 className="font-bold text-white text-base">
              How the Browser Renders Assets After PHP Finishes
            </h3>
          </div>

          {/* Step buttons */}
          <div className="flex gap-1.5 font-mono text-xs">
            {[1, 2, 3, 4].map(step => (
              <button
                key={step}
                onClick={() => setPipelineStep(step)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  pipelineStep === step
                    ? 'bg-accent-cyan text-laboratory-950 shadow-glow-cyan'
                    : 'bg-laboratory-900 text-slate-400 hover:text-white'
                }`}
              >
                Step {step}
              </button>
            ))}
          </div>
        </div>

        {/* Step details */}
        {pipelineStep === 1 && (
          <div className="p-4 rounded-xl bg-laboratory-900 border border-laboratory-800 space-y-2 animate-in fade-in duration-200">
            <span className="text-xs font-mono font-bold text-blue-400">
              1. HTML Document Received from Server
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              The browser receives the compiled HTML stream. In the <code className="text-php-accent">&lt;head&gt;</code>, it discovers:
            </p>
            <div className="bg-laboratory-950 p-2.5 rounded-lg border border-laboratory-850 font-mono text-xs text-slate-300">
              &lt;link rel="stylesheet" href="assets/css/bootstrap.min.css" /&gt;
            </div>
            <p className="text-xs text-slate-400">
              The browser pauses painting and sends a parallel HTTP GET request to download Bootstrap 5.
            </p>
          </div>
        )}

        {pipelineStep === 2 && (
          <div className="p-4 rounded-xl bg-laboratory-900 border border-laboratory-800 space-y-2 animate-in fade-in duration-200">
            <span className="text-xs font-mono font-bold text-purple-400">
              2. CSS Parsed & DOM Tree Styled
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              The browser parses Bootstrap rules (<code className="text-purple-300">.table</code>, <code className="text-purple-300">.navbar</code>, <code className="text-purple-300">.bg-secondary-subtle</code>) and computes layout boxes and typography.
            </p>
            <p className="text-xs text-slate-400">
              Custom rules in <code className="text-slate-300">style.css</code> override default colors and layout paddings.
            </p>
          </div>
        )}

        {pipelineStep === 3 && (
          <div className="p-4 rounded-xl bg-laboratory-900 border border-laboratory-800 space-y-2 animate-in fade-in duration-200">
            <span className="text-xs font-mono font-bold text-amber-400">
              3. JavaScript Bundle Injected & Executed
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              At the very bottom of the document (inside <code className="text-amber-300">views/includes/footer.php</code>), the browser encounters:
            </p>
            <div className="bg-laboratory-950 p-2.5 rounded-lg border border-laboratory-850 font-mono text-xs text-slate-300">
              &lt;script src="assets/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
            </div>
            <p className="text-xs text-slate-400">
              Placing this tag right before <code className="text-slate-300">&lt;/body&gt;</code> ensures HTML elements are already parsed so JavaScript doesn't throw <code className="text-rose-400">Cannot read property of null</code>.
            </p>
          </div>
        )}

        {pipelineStep === 4 && (
          <div className="p-4 rounded-xl bg-laboratory-900 border border-laboratory-800 space-y-2 animate-in fade-in duration-200">
            <span className="text-xs font-mono font-bold text-emerald-400">
              4. Client-Side Interactions Activated (main.js)
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              <code className="text-emerald-300">main.js</code> attaches event listeners to window scrolling, sticky navigation toggles, and modal dialogs.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setIsStickyDemo(!isStickyDemo)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  isStickyDemo
                    ? 'bg-emerald-500 text-white shadow-glow-green'
                    : 'bg-laboratory-800 text-slate-300'
                }`}
              >
                {isStickyDemo ? 'Sticky Navbar Active (.is-sticky)' : 'Simulate Scroll Down > 160px'}
              </button>
              <span className="text-[11px] font-mono text-slate-400">
                (Simulates lines 36-40 of main.js)
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Code inspection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CodeBlock
          code={`// assets/js/main.js (Real Project Client Script)
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const headerNav = document.getElementById("headerNav");
  const backToTopBtn = document.getElementById("backTopBtn");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Sticky Navbar Toggle
    if (headerNav) {
      if (scrollPosition > 160) {
        headerNav.classList.add("is-sticky");
      } else {
        headerNav.classList.remove("is-sticky");
      }
    }
  });
});`}
          language="javascript"
          title="assets/js/main.js (Client DOM Script)"
          maxHeight="320px"
        />

        <div className="p-5 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-3">
          <span className="text-xs font-mono font-bold text-slate-300">
            Why Bootstrap and custom CSS are separated:
          </span>
          <div className="space-y-2 text-xs text-slate-300">
            <p className="bg-laboratory-950 p-3 rounded-xl border border-laboratory-850">
              <strong>bootstrap.min.css</strong> provides the battle-tested responsive 12-column grid system, typography presets, tables, and navbar components.
            </p>
            <p className="bg-laboratory-950 p-3 rounded-xl border border-laboratory-850">
              <strong>style.css</strong> provides project-specific brand overrides, custom sticky header transitions, and spacing adjustments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
