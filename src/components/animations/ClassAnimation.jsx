import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Box, Sparkles, ArrowDown, Play } from 'lucide-react';

export function ClassAnimation() {
  const { t } = useLanguage();
  const [hasInstance, setHasInstance] = useState(false);
  const [methodCalled, setMethodCalled] = useState(false);

  const handleInstantiate = () => {
    setHasInstance(true);
    setMethodCalled(false);
  };

  const handleCallMethod = () => {
    setMethodCalled(true);
  };

  const handleReset = () => {
    setHasInstance(false);
    setMethodCalled(false);
  };

  return (
    <AnimationCanvas
      title="How Classes Act as Blueprints to Stamp Objects in Memory"
      titleBn="ক্লাস যেভাবে ব্লুপ্রিন্ট হিসেবে কাজ করে অবজেক্ট তৈরি করে"
      subtitle={
        !hasInstance
          ? "Step 1: class Car is a blueprint in your code file. Click 'new Car()' to stamp an object into server RAM!"
          : !methodCalled
          ? "Step 2: Object instantiated in RAM! Constructor filled properties. Click '$car->getName()' to invoke method!"
          : "Step 3: $car->getName() followed the arrow operator '->' and returned 'Axios - Hybrid'!"
      }
      subtitleBn={
        !hasInstance
          ? "ধাপ ১: class Car হলো কোডের ব্লুপ্রিন্ট। সার্ভার র‍্যামে অবজেক্ট বানাতে 'new Car()' বাটনে ক্লিক করুন!"
          : !methodCalled
          ? "ধাপ ২: র‍্যামে অবজেক্ট তৈরি হয়েছে! প্রপার্টিগুলো মান পেয়েছে। এবার '$car->getName()' কল করুন!"
          : "ধাপ ৩: $car->getName() তীর চিহ্ন '->' দিয়ে মেথড কল করে 'Axios - Hybrid' ফলাফল দিয়েছে!"
      }
      badge="OOP Blueprint Engine"
      badgeBn="অবজেক্ট ব্লুপ্রিন্ট ইঞ্জিন"
      onReset={handleReset}
    >
      <div className="w-full max-w-2xl flex flex-col md:flex-row items-stretch justify-between gap-4 py-1">
        {/* Left: The Class Blueprint Card */}
        <div className="flex-1 p-3.5 rounded-2xl bg-[#151928] border-2 border-purple-500/40 space-y-2 shadow-lg">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <span className="text-[11px] font-mono font-bold text-purple-400 uppercase">
              1. Class Blueprint (app/classes/Car.php)
            </span>
            <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-1.5 py-0.5 rounded">
              Blueprint
            </span>
          </div>

          <pre className="font-mono text-[11px] leading-relaxed text-slate-300 bg-[#0a0d16] p-2.5 rounded-xl border border-slate-800 overflow-x-auto">
            <span className="text-purple-400 font-bold">class</span> <span className="text-amber-300 font-bold">Car</span> &#123;{'\n'}
            {'  '}<span className="text-purple-400">public</span> $name, $color;{'\n\n'}
            {'  '}<span className="text-purple-400">function</span> __construct() &#123;{'\n'}
            {'    '}<span className="text-amber-400">$this</span>-&gt;name = <span className="text-emerald-300">"Axios - Hybrid"</span>;{'\n'}
            {'  '}&#125;{'\n\n'}
            {'  '}<span className="text-purple-400">function</span> getName() &#123;{'\n'}
            {'    '}<span className="text-purple-400">return</span> <span className="text-amber-400">$this</span>-&gt;name;{'\n'}
            {'  '}&#125;{'\n'}
            &#125;
          </pre>

          <button
            onClick={handleInstantiate}
            disabled={hasInstance}
            className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs disabled:opacity-40 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>$car = new Car();</span>
          </button>
        </div>

        {/* Right: The Object in RAM */}
        <div className="flex-1 p-3.5 rounded-2xl bg-[#141828] border-2 border-amber-400/40 space-y-2 shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <span className="text-[11px] font-mono font-bold text-amber-400 uppercase">
              2. Object in RAM ($car instance)
            </span>
            <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded">
              RAM Instance
            </span>
          </div>

          <div className="min-h-[140px] flex flex-col items-center justify-center p-2 rounded-xl bg-[#0a0d16] border border-slate-800">
            {hasInstance ? (
              <motion.div
                initial={{ scale: 0.6, y: -20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="w-full space-y-2 text-center"
              >
                <div className="inline-block px-3 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold">
                  Car Object #1
                </div>

                <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-left px-2">
                  <div className="p-1.5 rounded bg-[#151928] border border-slate-800">
                    <span className="text-slate-400 block text-[9px]">$color:</span>
                    <span className="text-rose-400 font-bold">"Red"</span>
                  </div>
                  <div className="p-1.5 rounded bg-[#151928] border border-slate-800">
                    <span className="text-slate-400 block text-[9px]">$name:</span>
                    <span className="text-emerald-400 font-bold">"Axios"</span>
                  </div>
                </div>

                {/* Method Call Button */}
                <div className="pt-1">
                  <button
                    onClick={handleCallMethod}
                    disabled={methodCalled}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-yellow-300 text-slate-950 font-mono font-black text-xs disabled:opacity-40 transition-all shadow-md"
                  >
                    echo $car-&gt;getName();
                  </button>
                </div>

                {/* Returned output from method */}
                {methodCalled && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold"
                  >
                    Output: "Axios - Hybrid"
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <div className="text-center p-4 text-slate-500 font-mono text-xs space-y-1">
                <Box className="w-8 h-8 mx-auto opacity-30" />
                <p>No object in memory yet</p>
                <p className="text-[10px] text-slate-600">Click '$car = new Car();' to spawn</p>
              </div>
            )}
          </div>

          <div className="text-[10px] font-mono text-slate-400 text-center">
            {hasInstance ? "Constructor executed on instantiation" : "Waiting for 'new' keyword"}
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
