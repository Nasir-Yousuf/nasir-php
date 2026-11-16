import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu
} from 'lucide-react';
import { CLASS_ONE_DATA } from '../../data/classesData';
import { FLOW_STEPS } from '../../data/architectureNodes';

export function SimpleFlowSection({ activeClassView }) {
  const isClass1 = activeClassView === 'class1';
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = isClass1 ? CLASS_ONE_DATA.flowSteps : FLOW_STEPS.slice(0, 5);
  const totalSteps = steps.length;
  const currentStep = steps[currentStepIndex];

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex(prev => {
          if (prev >= totalSteps - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, totalSteps]);

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) setCurrentStepIndex(currentStepIndex + 1);
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) setCurrentStepIndex(currentStepIndex - 1);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto py-2">
      {/* Header */}
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          How PHP Executes {isClass1 ? "Class 1" : "Class 2"} in 3 Simple Steps
        </h2>
        <p className="text-xs text-slate-400">
          Watch what happens behind the scenes from the moment you hit Enter to the moment text prints on the screen.
        </p>
      </div>

      {/* Progress Line */}
      <div className="grid grid-cols-3 gap-2">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentStepIndex(idx)}
            className={`p-3 rounded-2xl text-left border transition-all ${
              currentStepIndex === idx
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold shadow-lg shadow-emerald-500/10 scale-105'
                : idx < currentStepIndex
                ? 'bg-slate-900 border-slate-700 text-slate-300'
                : 'bg-slate-900/40 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span>Step {idx + 1}</span>
              {idx <= currentStepIndex && <CheckCircle2 className="w-3.5 h-3.5" />}
            </div>
            <div className="text-xs truncate font-sans">
              {s.title.split('. ')[1] || s.title}
            </div>
          </button>
        ))}
      </div>

      {/* Big Stage Story Card */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 font-mono font-black text-xl flex items-center justify-center border border-emerald-500/30">
              {currentStepIndex + 1}
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Execution Stage {currentStepIndex + 1} of {totalSteps}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {currentStep.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                isPlaying ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              {isPlaying ? 'Pause' : 'Auto Play'}
            </button>
          </div>
        </div>

        <p className="text-base text-slate-200 leading-relaxed font-medium">
          {currentStep.description}
        </p>

        {/* Code representation of this step */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <span className="text-[11px] font-mono font-semibold text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>Code in action at this exact moment:</span>
          </span>
          <pre className="font-mono text-xs sm:text-sm text-emerald-300 p-2 overflow-x-auto bg-slate-900/60 rounded-xl">
            {currentStep.codePreview || currentStep.detail}
          </pre>
        </div>

        {/* Under the hood insight */}
        <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 text-indigo-200 text-xs flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-indigo-300 font-mono uppercase tracking-wider text-[10px] block mb-0.5">
              Why this is brilliant:
            </strong>
            <p className="leading-relaxed text-indigo-100">
              {currentStep.detail}
            </p>
          </div>
        </div>

        {/* Next / Prev Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white text-xs font-semibold transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="font-mono text-xs text-slate-400">
            {currentStepIndex + 1} / {totalSteps}
          </span>

          <button
            onClick={handleNext}
            disabled={currentStepIndex === totalSteps - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 text-white text-xs font-semibold shadow-lg shadow-emerald-600/20 transition-all"
          >
            <span>Next Step</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
