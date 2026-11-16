import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Repeat, ArrowRight, CheckCircle2 } from 'lucide-react';

export function LoopAnimation() {
  const { t } = useLanguage();
  const [currentRound, setCurrentRound] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const maxRounds = 3;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentRound(prev => (prev >= maxRounds ? 1 : prev + 1));
    }, 2000);
    return () => clearInterval(timer => clearInterval(interval));
  }, [isPlaying]);

  return (
    <AnimationCanvas
      title="How for & while Loops Repeat Iterations"
      titleBn="for এবং while লুপ যেভাবে পুনরাবৃত্তি করে"
      subtitle={`Loop Iteration ${currentRound} of ${maxRounds} — Checking condition ($i <= 3), executing block, then running $i++`}
      subtitleBn={`লুপ রাউন্ড ${currentRound} (মোট ${maxRounds}) — শর্ত পরীক্ষা ($i <= 3), কোড চালানো, তারপর $i++ বৃদ্ধি`}
      badge="Loop Iteration Engine"
      badgeBn="লুপ ইটারেশন ইঞ্জিন"
      isPlaying={isPlaying}
      onTogglePlay={() => setIsPlaying(!isPlaying)}
      onReset={() => setCurrentRound(1)}
      stepInfo={`Round ${currentRound}/${maxRounds}`}
    >
      <div className="w-full max-w-xl flex flex-col md:flex-row items-center justify-between gap-5 py-2">
        {/* Left: 3-Stage Circuit */}
        <div className="flex-1 space-y-3 w-full">
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            {/* Step 1: Counter */}
            <div className="p-3 rounded-xl bg-[#151928] border border-slate-800 space-y-1 shadow-md">
              <span className="text-[10px] text-slate-400 block uppercase">1. Counter</span>
              <div className="px-2 py-1 rounded bg-[#0a0d16] border border-amber-400/40 text-amber-300 font-bold text-sm">
                $i = {currentRound}
              </div>
              <span className="text-[9px] text-slate-500">Current index</span>
            </div>

            {/* Step 2: Gate Check */}
            <div className="p-3 rounded-xl bg-[#151928] border border-slate-800 space-y-1 shadow-md">
              <span className="text-[10px] text-slate-400 block uppercase">2. Check</span>
              <div className="px-2 py-1 rounded bg-[#0a0d16] border border-emerald-500/40 text-emerald-300 font-bold text-sm flex items-center justify-center gap-1">
                <span>{currentRound} &lt;= 3</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] text-emerald-400">Gate: PASS</span>
            </div>

            {/* Step 3: Increment */}
            <div className="p-3 rounded-xl bg-[#151928] border border-slate-800 space-y-1 shadow-md">
              <span className="text-[10px] text-slate-400 block uppercase">3. Step</span>
              <div className="px-2 py-1 rounded bg-[#0a0d16] border border-purple-500/40 text-purple-300 font-bold text-sm">
                $i++ ({currentRound + 1})
              </div>
              <span className="text-[9px] text-slate-500">Next round</span>
            </div>
          </div>

          {/* Stepper Dots Track */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#121626] border border-slate-800/80">
            <span className="text-xs font-mono text-slate-400">Iterations:</span>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map(round => (
                <button
                  key={round}
                  onClick={() => setCurrentRound(round)}
                  className={`w-8 h-8 rounded-lg font-mono font-bold text-xs flex items-center justify-center transition-all ${
                    currentRound === round
                      ? 'bg-amber-400 text-slate-950 scale-110 shadow-lg shadow-amber-500/20'
                      : currentRound > round
                      ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                      : 'bg-[#1a2034] text-slate-500'
                  }`}
                >
                  {round}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Output Screen Accumulator */}
        <div className="w-full md:w-56 p-3.5 rounded-2xl bg-[#151928] border border-slate-800 space-y-2 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
              Terminal Stream
            </span>
            <span className="text-[10px] font-mono text-slate-500">Live</span>
          </div>

          <div className="p-3 rounded-xl bg-[#0a0d16] font-mono text-xs text-slate-300 space-y-1 min-h-[90px] border border-slate-800/80">
            {Array.from({ length: currentRound }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-emerald-400 flex items-center gap-1.5"
              >
                <span className="text-slate-600">&gt;</span>
                <span>Round: {idx + 1}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-[10px] text-slate-400 text-center font-sans">
            {t("Appends line every round", "প্রতি রাউন্ডে একটি করে লাইন যুক্ত হয়")}
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
