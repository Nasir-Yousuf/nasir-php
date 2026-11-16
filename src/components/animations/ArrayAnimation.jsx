import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Plus, Play, RotateCcw, Layers } from 'lucide-react';

export function ArrayAnimation() {
  const { t } = useLanguage();
  const [items, setItems] = useState(["Mango", "Guava", "Lichu"]);
  const [activeCursor, setActiveCursor] = useState(null);
  const [isIterating, setIsIterating] = useState(false);
  const [mode, setMode] = useState('indexed'); // 'indexed' | 'associative'

  const handleAddItem = () => {
    if (items.length >= 5) return;
    const additions = ["Orange", "Banana", "Grape", "Papaya"];
    const nextItem = additions[items.length - 3] || "Dragonfruit";
    setItems([...items, nextItem]);
  };

  const handleReset = () => {
    setItems(["Mango", "Guava", "Lichu"]);
    setActiveCursor(null);
    setIsIterating(false);
  };

  const runForeach = () => {
    if (isIterating) return;
    setIsIterating(true);
    let index = 0;
    setActiveCursor(0);

    const interval = setInterval(() => {
      index++;
      if (index >= items.length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveCursor(null);
          setIsIterating(false);
        }, 1200);
      } else {
        setActiveCursor(index);
      }
    }, 1000);
  };

  const assocData = [
    { key: "id", val: 1 },
    { key: "name", val: '"Borno"' },
    { key: "email", val: '"borno@gmail.com"' },
    { key: "mobile", val: '"01700..."' }
  ];

  return (
    <AnimationCanvas
      title="How Arrays Store Lists & How foreach Loops Read Them"
      titleBn="অ্যারে যেভাবে ডাটা রাখে এবং foreach লুপ যেভাবে পড়ে"
      subtitle={
        mode === 'indexed'
          ? "Indexed Array: Elements indexed from 0. foreach moves cursor sequentially from start to end."
          : "Associative Array: Named key => value pairs. Exactly how $student records work in php-class-two!"
      }
      subtitleBn={
        mode === 'indexed'
          ? "ইনডেক্সড অ্যারে: উপাদানগুলো ০ থেকে সাজানো। foreach লুপ ক্রমানুসারে একটি একটি করে পড়ে।"
          : "অ্যাসোসিয়েটিভ অ্যারে: কি (Key) এবং ভ্যালু (Value) এর জোড়া। php-class-two এ এভাবেই ছাত্রের তথ্য থাকে!"
      }
      badge="Array Memory Visualizer"
      badgeBn="অ্যারে মেমরি ভিজ্যুয়ালাইজার"
    >
      <div className="w-full max-w-2xl flex flex-col items-center gap-4 py-2">
        {/* Top Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 w-full px-2">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#151928] p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => { setMode('indexed'); handleReset(); }}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                mode === 'indexed' ? 'bg-[#777BB4] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Indexed Array [0, 1, 2]
            </button>
            <button
              onClick={() => { setMode('associative'); handleReset(); }}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                mode === 'associative' ? 'bg-amber-400 text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Associative ['key' =&gt; 'val']
            </button>
          </div>

          {/* Action Buttons for Indexed Mode */}
          {mode === 'indexed' && (
            <div className="flex items-center gap-2">
              <button
                onClick={runForeach}
                disabled={isIterating}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold disabled:opacity-40 transition-all shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isIterating ? t("Running...", "চলছে...") : t("Run foreach", "foreach চালান")}</span>
              </button>

              <button
                onClick={handleAddItem}
                disabled={items.length >= 5 || isIterating}
                className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#1e2438] hover:bg-[#28304a] text-slate-200 text-xs font-mono disabled:opacity-30 transition-all"
                title="Append item"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>$arr[] =</span>
              </button>

              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg bg-[#1e2438] hover:bg-[#28304a] text-slate-400 hover:text-white"
                title="Reset"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Array Container Canvas */}
        {mode === 'indexed' ? (
          <div className="w-full space-y-3">
            {/* The Row of Memory Slots */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap min-h-[90px] p-3 rounded-2xl bg-[#141828]/80 border border-slate-800">
              {items.map((item, idx) => {
                const isActive = activeCursor === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: isActive ? 1.08 : 1, opacity: 1 }}
                    className={`relative p-3 rounded-xl border transition-all text-center min-w-[90px] sm:min-w-[110px] ${
                      isActive
                        ? 'bg-amber-400/20 border-amber-400 shadow-[0_0_20px_-3px_rgba(245,158,11,0.5)] ring-2 ring-amber-400/50'
                        : 'bg-[#101322] border-slate-800'
                    }`}
                  >
                    {/* Index Tag */}
                    <div className="text-[10px] font-mono font-bold text-slate-400 mb-1 flex items-center justify-between">
                      <span>Index</span>
                      <span className="px-1.5 py-0.2 rounded bg-[#1e2438] text-purple-300">[{idx}]</span>
                    </div>

                    {/* Value */}
                    <div className="font-mono text-xs sm:text-sm font-bold text-white">
                      "{item}"
                    </div>

                    {/* Active Foreach Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activePointer"
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[9px] font-mono font-black shadow-lg"
                      >
                        $fruit
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Live iteration status banner */}
            <div className="text-center font-mono text-xs text-slate-400">
              {activeCursor !== null ? (
                <span className="text-amber-300 font-bold">
                  foreach loop at index [{activeCursor}] → echo "{items[activeCursor]}";
                </span>
              ) : (
                <span>Click "Run foreach" to watch the cursor step through each index</span>
              )}
            </div>
          </div>
        ) : (
          /* Associative Array Visualizer */
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {assocData.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#141828] border border-amber-400/30 text-center space-y-1.5 shadow-md"
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Key
                </div>
                <div className="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-xs font-bold">
                  "{item.key}"
                </div>
                <div className="text-xs font-mono text-amber-400 font-black">
                  =&gt;
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Value
                </div>
                <div className="px-2 py-1 rounded bg-[#0a0d16] border border-slate-800 text-emerald-300 font-mono text-xs font-bold truncate">
                  {item.val}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimationCanvas>
  );
}
