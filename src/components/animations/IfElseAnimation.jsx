import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Check, X, ArrowDown, GitFork } from 'lucide-react';

export function IfElseAnimation() {
  const { t } = useLanguage();
  const [temperature, setTemperature] = useState(35);

  const isHot = temperature > 30;

  return (
    <AnimationCanvas
      title="How if / else Logic Branches in Execution"
      titleBn="if / else সিদ্ধান্ত গ্রহণ যেভাবে কাজ করে"
      subtitle={
        isHot
          ? `Condition ($temperature > 30) is TRUE (35 > 30) → Green branch executes!`
          : `Condition ($temperature > 30) is FALSE (22 > 30) → Red branch executes!`
      }
      subtitleBn={
        isHot
          ? `শর্ত ($temperature > 30) সত্য (৩৫ > ৩০) → সবুজ শাখা চলবে!`
          : `শর্ত ($temperature > 30) মিথ্যা (২২ > ৩০) → লাল শাখা চলবে!`
      }
      badge="Decision Fork Engine"
      badgeBn="সিদ্ধান্ত শাখা ইঞ্জিন"
    >
      <div className="w-full max-w-xl flex flex-col items-center gap-3 py-1">
        {/* Interactive Value Controller */}
        <div className="flex items-center gap-3 bg-[#151928] px-4 py-2 rounded-xl border border-slate-800 shadow-md">
          <span className="text-xs font-mono text-slate-300">
            {t("Test Value:", "পরীক্ষার মান:")} <strong className="text-amber-400 font-bold">$temperature = {temperature}°C</strong>
          </span>
          <div className="flex gap-1.5">
            <button
              onClick={() => setTemperature(35)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                temperature === 35
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-[#1e2438] text-slate-400 hover:text-white'
              }`}
            >
              35°C (Hot)
            </button>
            <button
              onClick={() => setTemperature(22)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                temperature === 22
                  ? 'bg-sky-400 text-slate-950 shadow-md'
                  : 'bg-[#1e2438] text-slate-400 hover:text-white'
              }`}
            >
              22°C (Cool)
            </button>
          </div>
        </div>

        {/* Top Node: Condition Diamond */}
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-amber-500/20 border-2 border-amber-400/60 shadow-lg text-center"
          >
            <div className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider">
              {t("Condition Check", "শর্ত পরীক্ষা")}
            </div>
            <div className="text-sm font-mono font-black text-white">
              if ($temperature &gt; 30)
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">
              Result: <strong className={isHot ? "text-emerald-400" : "text-rose-400"}>{isHot ? "TRUE (সত্য)" : "FALSE (মিথ্যা)"}</strong>
            </div>
          </motion.div>
        </div>

        {/* Branching SVG Connections */}
        <div className="w-full flex items-center justify-center">
          <svg className="w-72 h-10 overflow-visible">
            {/* Left Path (TRUE) */}
            <path
              d="M 144 0 L 144 10 L 40 10 L 40 40"
              fill="none"
              stroke={isHot ? "#10B981" : "#334155"}
              strokeWidth={isHot ? 3 : 1.5}
              strokeDasharray={isHot ? "none" : "4 4"}
            />
            {/* Right Path (FALSE) */}
            <path
              d="M 144 0 L 144 10 L 248 10 L 248 40"
              fill="none"
              stroke={!isHot ? "#EF4444" : "#334155"}
              strokeWidth={!isHot ? 3 : 1.5}
              strokeDasharray={!isHot ? "none" : "4 4"}
            />
          </svg>
        </div>

        {/* Two Execution Branches */}
        <div className="w-full grid grid-cols-2 gap-4">
          {/* Branch 1: TRUE */}
          <div
            className={`p-3.5 rounded-2xl border transition-all text-left space-y-1.5 ${
              isHot
                ? 'bg-emerald-950/40 border-emerald-400 shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400/50'
                : 'bg-[#121626]/40 border-slate-800 opacity-40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>TRUE Branch</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-300/80 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Runs
              </span>
            </div>
            <pre className="font-mono text-xs text-emerald-200 bg-[#0a0d16] p-2 rounded-lg border border-emerald-500/30 overflow-x-auto">
              echo "It is hot today!";
            </pre>
            <p className="text-[10px] text-slate-300">
              {t("Only executes if temp > 30", "শুধুমাত্র ৩০ এর বেশি হলে চলবে")}
            </p>
          </div>

          {/* Branch 2: FALSE */}
          <div
            className={`p-3.5 rounded-2xl border transition-all text-left space-y-1.5 ${
              !isHot
                ? 'bg-rose-950/40 border-rose-400 shadow-[0_0_20px_-3px_rgba(239,68,68,0.3)] ring-1 ring-rose-400/50'
                : 'bg-[#121626]/40 border-slate-800 opacity-40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-rose-400">
                <X className="w-3.5 h-3.5 stroke-[3]" />
                <span>FALSE Branch (else)</span>
              </span>
              <span className="text-[10px] font-mono text-rose-300/80 bg-rose-500/10 px-1.5 py-0.5 rounded">
                Runs
              </span>
            </div>
            <pre className="font-mono text-xs text-rose-200 bg-[#0a0d16] p-2 rounded-lg border border-rose-500/30 overflow-x-auto">
              echo "Nice weather.";
            </pre>
            <p className="text-[10px] text-slate-300">
              {t("Executes when condition fails", "শর্ত মিথ্যা হলে এই ব্লক চলবে")}
            </p>
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
