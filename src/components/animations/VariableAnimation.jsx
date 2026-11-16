import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, Cpu, HardDrive } from 'lucide-react';

export function VariableAnimation() {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Steps:
  // 0: Initial memory allocation
  // 1: Assigning "Rahim"
  // 2: Value stored safely in RAM
  // 3: Reassigning to "Karim"
  // 4: Reading and sending to Output
  const totalSteps = 5;

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setStep(prev => (prev + 1) % totalSteps);
    }, 2400);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const stepDescriptions = [
    {
      en: "Step 1: PHP asks server RAM to reserve a memory box labeled '$name'",
      bn: "ধাপ ১: PHP সার্ভার র‍্যামে '$name' নামের একটি মেমরি বক্স তৈরি করে"
    },
    {
      en: "Step 2: String value \"Rahim\" travels along data bus into the memory box",
      bn: "ধাপ ২: \"Rahim\" মানটি ডেটা বাস দিয়ে মেমরি বক্সে প্রবেশ করে"
    },
    {
      en: "Step 3: Value is stored in RAM. Variable is now ready to use!",
      bn: "ধাপ ৩: মানটি মেমরিতে সংরক্ষিত হলো। ভেরিয়েবলটি এখন ব্যবহারের উপযোগী!"
    },
    {
      en: "Step 4: Reassigning: $name = \"Karim\"; overwrites old value with new one",
      bn: "ধাপ ৪: পুনঃনির্ধারণ: $name = \"Karim\"; পুরনো মান পরিবর্তন করে নতুন মান বসে"
    },
    {
      en: "Step 5: echo $name prints the current value from RAM to browser",
      bn: "ধাপ ৫: echo $name মেমরি থেকে বর্তমান মান নিয়ে ব্রাউজারে প্রদর্শন করে"
    }
  ];

  const currentValue = step < 3 ? '"Rahim"' : '"Karim"';

  return (
    <AnimationCanvas
      title="How Variables Work in Server Memory (RAM)"
      titleBn="সার্ভার মেমরিতে (RAM) ভেরিয়েবল যেভাবে কাজ করে"
      subtitle={stepDescriptions[step].en}
      subtitleBn={stepDescriptions[step].bn}
      isPlaying={isPlaying}
      onTogglePlay={() => setIsPlaying(!isPlaying)}
      onReset={() => setStep(0)}
      stepInfo={`Step ${step + 1} of ${totalSteps}`}
    >
      <div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-between gap-4 py-2">
        {/* Left: Code Source Generator */}
        <div className="w-full md:w-48 p-3 rounded-xl bg-[#151928] border border-slate-800 text-center space-y-1.5 shadow-lg">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-amber-300 font-bold uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Code Input</span>
          </div>
          <div className="p-2 rounded bg-[#0a0d16] border border-slate-800/80 font-mono text-xs text-left">
            <div className={step <= 2 ? "text-amber-400 font-bold" : "text-slate-500 line-through"}>
              $name = "Rahim";
            </div>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-emerald-400 font-bold"
              >
                $name = "Karim";
              </motion.div>
            )}
          </div>
          <div className="text-[10px] text-slate-400 font-sans">
            {t("PHP Code line executes", "PHP কোড রান হচ্ছে")}
          </div>
        </div>

        {/* Center: Animated Flow Arrow */}
        <div className="flex flex-col items-center justify-center">
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex items-center gap-1 text-amber-400 text-xs font-mono font-bold"
          >
            <span>Write</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
          <span className="text-[9px] text-slate-500 font-mono">Data Bus</span>
        </div>

        {/* Center-Right: Server Memory (RAM) Box */}
        <div className="w-full md:w-60 p-4 rounded-2xl bg-gradient-to-b from-[#181f34] to-[#121626] border-2 border-amber-400/40 shadow-[0_0_25px_-5px_rgba(245,158,11,0.25)] relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-700/60 pb-2 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300">
              <HardDrive className="w-3.5 h-3.5 text-amber-400" />
              <span>Server RAM</span>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Allocated
            </span>
          </div>

          {/* The Variable Box */}
          <div className="p-3 rounded-xl bg-[#0a0d16] border border-amber-400/50 space-y-2 text-center relative">
            {/* Variable Tag */}
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Box Name:</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/40 text-purple-300 font-bold">
                $name
              </span>
            </div>

            {/* Variable Content Slot */}
            <div className="h-12 rounded-lg bg-[#141828] border border-dashed border-amber-400/60 flex items-center justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentValue}
                  initial={{ y: -20, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 20, opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="px-3 py-1 rounded bg-amber-400/20 border border-amber-400/50 text-amber-300 font-mono font-bold text-sm shadow-inner"
                >
                  {currentValue}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
              <span>Type: <strong>String</strong></span>
              <span>Bytes: <strong>{currentValue.length}B</strong></span>
            </div>
          </div>
        </div>

        {/* Right: Output Screen */}
        <div className="w-full md:w-44 p-3 rounded-xl bg-[#151928] border border-slate-800 text-center space-y-1.5 shadow-lg">
          <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
            Browser Output
          </div>
          <div className="h-10 rounded bg-[#0a0d16] border border-slate-800/80 font-mono text-xs text-emerald-300 flex items-center justify-center font-bold">
            {step === 4 ? currentValue.replace(/"/g, '') : <span className="text-slate-600 font-normal italic">waiting echo...</span>}
          </div>
          <div className="text-[10px] text-slate-400">
            {step === 4 ? t("Printed to user", "ইউজারের স্ক্রিনে দেখানো হলো") : t("echo $name", "echo $name")}
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
