import React, { useState } from 'react';
import { 
  Play, 
  Terminal, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Layers, 
  AlertCircle
} from 'lucide-react';
import { PLAYGROUND_PRESETS } from '../../data/playgroundPresets';
import { CodeBlock } from '../../components/common/CodeBlock';
import { Badge } from '../../components/common/Badge';

export function PlaygroundSection() {
  const [selectedPresetId, setSelectedPresetId] = useState('router');
  const [isRunning, setIsRunning] = useState(false);
  const [executionLogs, setExecutionLogs] = useState([]);
  const [simulatedResult, setSimulatedResult] = useState(null);

  // Router preset state
  const [routerPageParam, setRouterPageParam] = useState('home');

  // View Engine preset state
  const [viewTemplateName, setViewTemplateName] = useState('home');
  const [studentCount, setStudentCount] = useState(4);

  // Car preset state
  const [carName, setCarName] = useState('Axios - Hybrid');
  const [carModel, setCarModel] = useState('2022');
  const [carColor, setCarColor] = useState('Red');

  const selectedPreset = PLAYGROUND_PRESETS.find(p => p.id === selectedPresetId) || PLAYGROUND_PRESETS[0];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setSimulatedResult(null);

    // Simulate step-by-step execution with realistic delays
    if (selectedPresetId === 'router') {
      simulateRouter();
    } else if (selectedPresetId === 'view_engine') {
      simulateViewEngine();
    } else if (selectedPresetId === 'oop_car') {
      simulateOopCar();
    } else if (selectedPresetId === 'new_class_bug') {
      simulateNewClassBug();
    } else if (selectedPresetId === 'psr4_resolver') {
      simulatePsr4();
    }
  };

  const simulateRouter = () => {
    const logs = [
      `[1/4] HTTP GET /web.php?page=${routerPageParam} received by Web Server`,
      `[2/4] PHP superglobal populated: $_GET = ['page' => '${routerPageParam}']`,
      `[3/4] require_once 'vendor/autoload.php' -> ClassLoader active`,
      `[4/4] Checking condition: if (isset($_GET['page'])) ...`
    ];

    let action = '';
    let renderedTitle = '';
    if (routerPageParam === 'home') {
      logs.push(`-> Matched: $_GET['page'] == 'home' -> Calling $helloWorld->index()`);
      action = 'HelloWorld::index()';
      renderedTitle = 'Home Page (Student Table)';
    } else if (routerPageParam === 'about') {
      logs.push(`-> Matched: $_GET['page'] == 'about' -> Calling $helloWorld->about()`);
      action = 'HelloWorld::about()';
      renderedTitle = 'This is about page.';
    } else if (routerPageParam === 'contact') {
      logs.push(`-> Matched: $_GET['page'] == 'contact' -> Calling $helloWorld->contact()`);
      action = 'HelloWorld::contact()';
      renderedTitle = 'This is Contact page.';
    } else if (routerPageParam === 'login') {
      logs.push(`-> Matched: $_GET['page'] == 'login' -> Calling $helloWorld->login()`);
      action = 'HelloWorld::login()';
      renderedTitle = 'This is Login page.';
    } else {
      logs.push(`-> No match for '${routerPageParam}'! Router falls through or renders default.`);
      action = 'Unmatched';
      renderedTitle = 'Unknown Route';
    }

    logs.push(`[Success] Template rendered and flushed to browser. HTTP 200 OK.`);
    setExecutionLogs(logs);
    setSimulatedResult({
      status: '200 OK',
      dispatchedAction: action,
      renderedContent: renderedTitle
    });
    setIsRunning(false);
  };

  const simulateViewEngine = () => {
    const logs = [
      `[1/5] Calling view("${viewTemplateName}", ["students" => $students], true)`,
      `[2/5] Checking file_exists("views/${viewTemplateName}.php") -> TRUE`,
      `[3/5] ob_start(): Internal PHP output buffer allocated in RAM`,
      `[4/5] extract($data): Injected $students variable with ${studentCount} elements into scope`,
      `[5/5] include "views/${viewTemplateName}.php": Evaluated template with foreach loop`,
      `[6/6] ob_get_clean(): Captured 1,842 bytes of clean HTML. Buffer emptied.`
    ];
    setExecutionLogs(logs);
    setSimulatedResult({
      bufferBytes: '1,842 bytes',
      injectedVariable: `$students (${studentCount} items)`,
      renderedContent: `HTML Table with ${studentCount} rows rendered dynamically`
    });
    setIsRunning(false);
  };

  const simulateOopCar = () => {
    const logs = [
      `[1/4] Class App\\classes\\Car resolved by Composer PSR-4 autoloader`,
      `[2/4] Allocating object on virtual memory heap at address 0x${Math.floor(Math.random() * 1000000).toString(16)}`,
      `[3/4] Car::__construct() called with ($color="${carColor}", $model="${carModel}", $name="${carName}")`,
      `[4/4] Executing $car->allInfo():`,
      `     -> Car name : ${carName}`,
      `     -> Car model : ${carModel}`,
      `     -> Car color : ${carColor}`
    ];
    setExecutionLogs(logs);
    setSimulatedResult({
      object: 'App\\classes\\Car',
      state: { name: carName, model: carModel, color: carColor }
    });
    setIsRunning(false);
  };

  const simulateNewClassBug = () => {
    const logs = [
      `[1/3] Instantiating $Nasir = new NewClass;`,
      `[2/3] Inside __construct(): encountering line 11: $this->$name = "Nasir"`,
      `[Warning] PHP Warning: Undefined variable $name in app/classes/NewClass.php on line 11`,
      `[Explanation] In PHP, $this->$name looks for a local variable called $name to use its string as the property name!`,
      `[Fix] Change '$this->$name' to '$this->name' to access the declared property directly.`
    ];
    setExecutionLogs(logs);
    setSimulatedResult({
      warning: 'PHP Warning: Undefined variable $name',
      fix: 'Use $this->name without the second dollar sign!'
    });
    setIsRunning(false);
  };

  const simulatePsr4 = () => {
    const logs = [
      `[1/3] Intercepting class request: "App\\classes\\HelloWorld"`,
      `[2/3] Namespace prefix "App\\" matches folder "app/" in composer.json`,
      `[3/3] Appended "classes/HelloWorld.php" -> file path: "app/classes/HelloWorld.php"`,
      `[Success] File exists! require_once loaded automatically.`
    ];
    setExecutionLogs(logs);
    setSimulatedResult({
      resolvedPath: 'app/classes/HelloWorld.php',
      method: 'PSR-4 Autoloading'
    });
    setIsRunning(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-laboratory-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="purple" size="sm">Safe Educational Sandbox</Badge>
            <h1 className="text-2xl font-bold text-white tracking-tight">Interactive Execution Playground</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulate PHP runtime execution, routing logic, view buffering, and OOP instantiation safely in your browser.
          </p>
        </div>

        <Badge variant="warning" size="sm">
          Simulated Interpretation Layer
        </Badge>
      </div>

      {/* Preset Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {PLAYGROUND_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => {
              setSelectedPresetId(preset.id);
              setExecutionLogs([]);
              setSimulatedResult(null);
            }}
            className={`p-3 rounded-xl text-left border text-xs font-mono transition-all ${
              selectedPresetId === preset.id
                ? 'bg-php/20 text-php-accent border-php/50 font-bold shadow-glow-sm'
                : 'bg-laboratory-900/80 text-slate-400 border-laboratory-800 hover:text-white hover:bg-laboratory-850'
            }`}
          >
            <span className="block truncate">{preset.title}</span>
          </button>
        ))}
      </div>

      {/* Main Sandbox Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Parameters & Controls (Col 5) */}
        <div className="lg:col-span-5 rounded-2xl border border-laboratory-800 bg-laboratory-900/90 p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-laboratory-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Scenario Configuration
              </span>
              <h3 className="font-bold text-white text-sm">
                {selectedPreset.title}
              </h3>
            </div>
          </div>

          <p className="text-xs text-slate-300">
            {selectedPreset.explanation}
          </p>

          {/* Scenario Specific Inputs */}
          {selectedPresetId === 'router' && (
            <div className="space-y-3 text-xs font-mono">
              <label className="text-slate-400 block mb-1">
                Select Query Parameter <code className="text-php-accent">$_GET['page']</code>:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['home', 'about', 'contact', 'login', 'other'].map(page => (
                  <button
                    key={page}
                    onClick={() => setRouterPageParam(page)}
                    className={`p-2 rounded-lg border text-xs font-mono transition-colors text-left ${
                      routerPageParam === page
                        ? 'bg-php text-white border-php'
                        : 'bg-laboratory-950 text-slate-300 border-laboratory-800 hover:border-slate-600'
                    }`}
                  >
                    ?page={page}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedPresetId === 'view_engine' && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-slate-400 block mb-1">Template to Render:</label>
                <select
                  value={viewTemplateName}
                  onChange={(e) => setViewTemplateName(e.target.value)}
                  className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg p-2 text-slate-200"
                >
                  <option value="home">views/home.php</option>
                  <option value="about">views/about.php</option>
                  <option value="contact">views/contact.php</option>
                  <option value="login">views/login.php</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">
                  Items in $students Array: ({studentCount})
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          )}

          {selectedPresetId === 'oop_car' && (
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-slate-400 block mb-1">$name:</label>
                <input
                  type="text"
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                  className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg p-2 text-slate-200"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">$model:</label>
                <input
                  type="text"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg p-2 text-slate-200"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">$color:</label>
                <input
                  type="text"
                  value={carColor}
                  onChange={(e) => setCarColor(e.target.value)}
                  className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg p-2 text-slate-200"
                />
              </div>
            </div>
          )}

          {/* Run Button */}
          <button
            onClick={handleRunSimulation}
            disabled={isRunning}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-php via-indigo-600 to-accent-electric text-white rounded-xl font-medium text-xs font-mono shadow-glow-sm hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
          >
            <Play className="w-4 h-4" />
            <span>Run PHP Simulation</span>
          </button>
        </div>

        {/* Right: Simulation Trace & Results (Col 7) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Terminal Logs */}
          <div className="rounded-2xl border border-laboratory-800 bg-laboratory-950 p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between border-b border-laboratory-850 pb-2.5">
              <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                Execution Step Trace
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                Simulated PHP Engine
              </span>
            </div>

            <div className="bg-laboratory-900/90 rounded-xl p-3.5 font-mono text-xs text-slate-300 min-h-[160px] max-h-[220px] overflow-y-auto space-y-1.5 scrollbar-thin">
              {executionLogs.length > 0 ? (
                executionLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      log.startsWith('[Warning]')
                        ? 'text-amber-400 font-bold'
                        : log.startsWith('[Success]')
                        ? 'text-emerald-400 font-bold'
                        : 'text-slate-300'
                    }`}
                  >
                    {log}
                  </div>
                ))
              ) : (
                <div className="text-slate-600 italic">
                  Click "Run PHP Simulation" to execute this scenario and watch each engine step...
                </div>
              )}
            </div>
          </div>

          {/* Result Inspection Card */}
          {simulatedResult && (
            <div className="p-4 rounded-xl bg-laboratory-900 border border-emerald-500/30 space-y-2 animate-in zoom-in-95 duration-200">
              <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Simulation Result:</span>
              </span>
              <pre className="text-xs font-mono text-slate-200 bg-laboratory-950 p-3 rounded-lg border border-laboratory-800 overflow-x-auto">
                {JSON.stringify(simulatedResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
