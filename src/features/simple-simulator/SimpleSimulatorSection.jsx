import React, { useState } from 'react';
import { 
  Play, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Globe,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function SimpleSimulatorSection({ activeClassView }) {
  const isClass1 = activeClassView === 'class1';

  // Class 1 interactive state
  const [customMessage, setCustomMessage] = useState("Hello World from Nasir!");
  const [outputLogs, setOutputLogs] = useState([]);
  const [isExecuted, setIsExecuted] = useState(false);

  // Class 2 interactive router state
  const [selectedRoute, setSelectedRoute] = useState('home');

  const handleRunClass1 = () => {
    setOutputLogs([
      "1. Loading: require_once 'vendor/autoload.php' -> OK",
      "2. Resolving: App\\classes\\HelloWorld -> Found in app/classes/HelloWorld.php",
      `3. Initializing: $helloWorld = new HelloWorld() -> __construct() sets $message = "${customMessage}"`,
      `4. Calling: $helloWorld->index()`,
      `>>> OUTPUT: ${customMessage}`
    ]);
    setIsExecuted(true);

    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (e) {}
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto py-2">
      {/* Header */}
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Interactive Live Simulator
        </h2>
        <p className="text-xs text-slate-400">
          {isClass1 
            ? "Change the message and click Run to watch HelloWorld execute step-by-step!"
            : "Click different pages to watch how web.php routes requests and renders views!"}
        </p>
      </div>

      {isClass1 ? (
        /* Class 1 Interactive Runner */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: Input Box */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                Step 1: Customize Code
              </span>
              <h3 className="text-base font-bold text-white">
                Set $this-&gt;message in HelloWorld
              </h3>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 block">
                Type your custom message:
              </label>
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
              <span className="text-slate-500 block text-[10px]">What index.php will run:</span>
              <code>$helloWorld = new HelloWorld();</code><br/>
              <code>$helloWorld-&gt;index();</code>
            </div>

            <button
              onClick={handleRunClass1}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs font-mono shadow-lg shadow-emerald-600/30 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              <span>Run PHP Code</span>
            </button>
          </div>

          {/* Right: Output Screen */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                Browser / Terminal Screen
              </span>
              <span className="text-[10px] font-mono text-slate-500">Output</span>
            </div>

            <div className="min-h-[160px] bg-slate-900/80 rounded-2xl p-4 font-mono text-xs space-y-2 text-slate-200">
              {outputLogs.length > 0 ? (
                outputLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={log.startsWith('>>>') ? 'text-emerald-400 font-bold text-sm pt-2 border-t border-slate-800' : 'text-slate-300'}
                  >
                    {log}
                  </div>
                ))
              ) : (
                <span className="text-slate-600 italic">
                  Click "Run PHP Code" to see the output appear here...
                </span>
              )}
            </div>

            {isExecuted && (
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Success! HelloWorld executed cleanly and printed your message.</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Class 2 Interactive Web Router */
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-bold">
                Front Controller Router Simulation
              </span>
              <h3 className="text-base font-bold text-white">
                Simulate: web.php?page={selectedRoute}
              </h3>
            </div>

            <div className="flex gap-2">
              {['home', 'about', 'contact', 'login'].map((page) => (
                <button
                  key={page}
                  onClick={() => setSelectedRoute(page)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                    selectedRoute === page
                      ? 'bg-indigo-600 text-white font-bold shadow-md'
                      : 'bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  ?page={page}
                </button>
              ))}
            </div>
          </div>

          {/* Browser Address Bar & Rendered Result */}
          <div className="rounded-2xl border border-slate-800 bg-white text-slate-900 overflow-hidden shadow-2xl">
            <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>http://localhost/php-class-two/web.php?page=</span>
                <span className="text-indigo-400 font-bold">{selectedRoute}</span>
              </div>
            </div>

            {/* Rendered View */}
            <div className="p-6 bg-slate-100 min-h-[220px]">
              {selectedRoute === 'home' && (
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm max-w-xl mx-auto space-y-3">
                  <div className="font-bold text-xs bg-slate-800 text-white p-2 rounded">All Student Table (views/home.php)</div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b"><th className="text-left p-1">Id</th><th className="text-left p-1">Name</th><th className="text-left p-1">Email</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-1">1</td><td className="p-1 font-semibold">Borno</td><td className="p-1">borno@gmail.com</td></tr>
                      <tr><td className="p-1">2</td><td className="p-1 font-semibold">Patwari</td><td className="p-1">patwari@gmail.com</td></tr>
                      <tr><td className="p-1">3</td><td className="p-1 font-semibold">Golam</td><td className="p-1">golam@gmail.com</td></tr>
                    </tbody>
                  </table>
                </div>
              )}

              {selectedRoute === 'about' && (
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center max-w-md mx-auto">
                  <h3 className="text-lg font-bold text-slate-800">This is about page.</h3>
                  <p className="text-xs text-slate-500 mt-1">Rendered via HelloWorld::about() $\rightarrow$ views/about.php</p>
                </div>
              )}

              {selectedRoute === 'contact' && (
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center max-w-md mx-auto">
                  <h3 className="text-lg font-bold text-slate-800">This is Contact page.</h3>
                  <p className="text-xs text-slate-500 mt-1">Rendered via HelloWorld::contact() $\rightarrow$ views/contact.php</p>
                </div>
              )}

              {selectedRoute === 'login' && (
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center max-w-md mx-auto">
                  <h3 className="text-lg font-bold text-slate-800">This is Login page.</h3>
                  <p className="text-xs text-slate-500 mt-1">Rendered via HelloWorld::login() $\rightarrow$ views/login.php</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
