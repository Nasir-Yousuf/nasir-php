import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Gauge, 
  Globe, 
  Cpu, 
  Terminal, 
  Network, 
  Layers, 
  Wrench, 
  FileCode, 
  Palette,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';
import { ARCHITECTURE_NODES, FLOW_STEPS } from '../../data/architectureNodes';
import { CodeBlock } from '../../components/common/CodeBlock';
import { Badge } from '../../components/common/Badge';

export function ArchitectureMapSection({ onSelectFile }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // 0.5, 1, 2
  const [selectedNodeId, setSelectedNodeId] = useState('router');

  const currentStep = FLOW_STEPS[currentStepIndex];
  const selectedNode = ARCHITECTURE_NODES.find(n => n.id === selectedNodeId) || ARCHITECTURE_NODES[1];

  // Playback timer
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= FLOW_STEPS.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const handlePlayPause = () => {
    if (currentStepIndex >= FLOW_STEPS.length - 1) {
      setCurrentStepIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  const handleNextStep = () => {
    if (currentStepIndex < FLOW_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  // Node icons dictionary
  const getNodeIcon = (iconName) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-laboratory-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="purple" size="sm">Live Node Network</Badge>
            <h1 className="text-2xl font-bold text-white tracking-tight">Interactive Architecture Map</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Visual topology of <code className="text-php-accent font-mono">php-class-two</code>. Click any node to inspect its internal logic, or hit Play to watch simulated request particles flow!
          </p>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2 bg-laboratory-900/90 p-1.5 rounded-2xl border border-laboratory-800 shadow-lg">
          <button
            onClick={handlePlayPause}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              isPlaying
                ? 'bg-amber-500 text-laboratory-950 font-bold'
                : 'bg-php text-white hover:bg-php-dark'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause' : 'Play Flow'}</span>
          </button>

          <button
            onClick={handleRestart}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-laboratory-800 transition-colors"
            title="Restart from Step 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <div className="h-4 w-[1px] bg-laboratory-800" />

          <button
            onClick={handlePrevStep}
            disabled={currentStepIndex === 0}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 hover:bg-laboratory-800 transition-colors"
            title="Previous Step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="font-mono text-xs font-bold text-slate-300 px-1">
            {currentStepIndex + 1}/{FLOW_STEPS.length}
          </span>

          <button
            onClick={handleNextStep}
            disabled={currentStepIndex === FLOW_STEPS.length - 1}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 hover:bg-laboratory-800 transition-colors"
            title="Next Step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="h-4 w-[1px] bg-laboratory-800" />

          {/* Speed Selector */}
          <div className="flex items-center gap-1">
            {[0.5, 1, 2].map(speed => (
              <button
                key={speed}
                onClick={() => setPlaybackSpeed(speed)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                  playbackSpeed === speed
                    ? 'bg-laboratory-750 text-accent-cyan font-bold border border-accent-cyan/30'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step Commentary Banner */}
      <div className="rounded-2xl border border-laboratory-800 bg-gradient-to-r from-laboratory-900 via-laboratory-950 to-laboratory-900 p-4 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-php to-accent-electric text-white font-mono font-black text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-glow-sm">
            {currentStep.step}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                {currentStep.title}
              </span>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                currentStep.particleType === 'blue'
                  ? 'bg-blue-500/15 text-blue-400 border-blue-500/40'
                  : currentStep.particleType === 'orange'
                  ? 'bg-amber-500/15 text-amber-400 border-amber-500/40'
                  : currentStep.particleType === 'purple'
                  ? 'bg-purple-500/15 text-purple-400 border-purple-500/40'
                  : currentStep.particleType === 'cyan'
                  ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40'
                  : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40'
              }`}>
                {currentStep.particleLabel}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {currentStep.description}
            </p>
          </div>
        </div>

        <div className="text-[11px] font-mono text-slate-400 bg-laboratory-900 px-3 py-2 rounded-xl border border-laboratory-800 max-w-sm shrink-0">
          <span className="text-php-accent font-semibold">Under the hood: </span>
          {currentStep.detail}
        </div>
      </div>

      {/* Canvas & Node Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Node Diagram (Col 8) */}
        <div className="lg:col-span-8 rounded-2xl border border-laboratory-800 bg-laboratory-950 p-6 shadow-2xl relative overflow-hidden min-h-[490px] flex flex-col justify-between bg-grid-pattern">
          {/* Ambient Lighting */}
          <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

          {/* Node Map Grid */}
          <div className="relative z-10 grid grid-cols-3 gap-y-12 gap-x-6 py-4">
            {/* Column 1: Client & Gateways */}
            <div className="flex flex-col justify-around gap-8">
              {/* Browser Node */}
              {renderNodeCard('browser')}
            </div>

            {/* Column 2: Entry Points & Autoloader */}
            <div className="flex flex-col justify-around gap-6">
              {/* web.php Router */}
              {renderNodeCard('router')}

              {/* index.php Testbench */}
              {renderNodeCard('testbench')}

              {/* Composer Autoloader */}
              {renderNodeCard('autoloader')}
            </div>

            {/* Column 3: Controller, Helper, Views & Assets */}
            <div className="flex flex-col justify-around gap-6">
              {/* Controller */}
              {renderNodeCard('controller')}

              {/* Helpers Engine */}
              {renderNodeCard('helpers')}

              {/* Views Assembly */}
              {renderNodeCard('views')}

              {/* Frontend Assets */}
              {renderNodeCard('assets')}
            </div>
          </div>

          {/* Live Dataflow Particle Legend */}
          <div className="relative z-10 pt-4 border-t border-laboratory-850 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span className="font-semibold text-slate-300">Particle Dataflow Legend:</span>
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60A5FA]" />
                <span>HTTP Request</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#FBBF24]" />
                <span>PHP Execution</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#C084FC]" />
                <span>PSR-4 Autoloading</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                <span>HTML Response</span>
              </span>
            </div>
          </div>
        </div>

        {/* Selected Node Details Inspector (Col 4) */}
        <div className="lg:col-span-4 rounded-2xl border border-laboratory-800 bg-laboratory-900/90 p-5 space-y-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-laboratory-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Node Inspector
              </span>
              <h3 className="font-bold text-white text-base">
                {selectedNode.title}
              </h3>
            </div>
            <Badge variant="php" size="sm">
              {selectedNode.badge}
            </Badge>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Node Responsibility</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed bg-laboratory-950 p-3 rounded-xl border border-laboratory-800">
              {selectedNode.description}
            </p>
          </div>

          {/* Inputs & Outputs */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-laboratory-950 border border-laboratory-850 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Inputs Received
              </span>
              <ul className="text-slate-300 text-[11px] space-y-0.5">
                {selectedNode.inputs.map((inp, idx) => (
                  <li key={idx}>↓ {inp}</li>
                ))}
              </ul>
            </div>

            <div className="p-2.5 rounded-xl bg-laboratory-950 border border-laboratory-850 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                Outputs Emitted
              </span>
              <ul className="text-slate-300 text-[11px] space-y-0.5">
                {selectedNode.outputs.map((out, idx) => (
                  <li key={idx}>↑ {out}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Node Code Snippet */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-slate-300">
              Relevant Code Implementation
            </span>
            <CodeBlock
              code={selectedNode.codeSnippet}
              language={selectedNode.id === 'browser' ? 'javascript' : 'php'}
              title={selectedNode.title}
              maxHeight="220px"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Helper to render node card inside canvas
  function renderNodeCard(nodeId) {
    const node = ARCHITECTURE_NODES.find(n => n.id === nodeId);
    if (!node) return null;

    const isSelected = selectedNodeId === node.id;
    const isStepActive = currentStep.activeNode === node.id;
    const isStepTarget = currentStep.targetNode === node.id;

    return (
      <button
        key={node.id}
        onClick={() => setSelectedNodeId(node.id)}
        className={`relative text-left p-3.5 rounded-2xl border transition-all select-none group ${
          isSelected
            ? 'ring-2 ring-php bg-laboratory-900 border-php/60 shadow-glow-md scale-[1.02]'
            : 'bg-laboratory-900/80 border-laboratory-800 hover:border-laboratory-700 hover:bg-laboratory-850'
        } ${
          isStepActive
            ? 'animate-pulse border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
            : ''
        } ${
          isStepTarget
            ? 'border-emerald-400/80 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
            : ''
        }`}
      >
        {/* Active Stage Indicator Ping */}
        {(isStepActive || isStepTarget) && (
          <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isStepActive ? 'bg-amber-400' : 'bg-emerald-400'
            }`} />
            <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${
              isStepActive ? 'bg-amber-400' : 'bg-emerald-400'
            }`} />
          </span>
        )}

        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-xl bg-gradient-to-br ${node.color} shrink-0`}>
            {getNodeIcon(node.icon)}
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-mono font-semibold text-slate-400 truncate">
              {node.badge}
            </div>
            <div className="text-xs font-bold text-white truncate font-mono">
              {node.title}
            </div>
          </div>
        </div>
      </button>
    );
  }
}
