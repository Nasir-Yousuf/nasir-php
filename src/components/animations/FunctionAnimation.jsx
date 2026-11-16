import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Cpu, ArrowRight, CornerDownRight } from 'lucide-react';

export function FunctionAnimation() {
  const { t } = useLanguage();
  const [price, setPrice] = useState(50);
  const [qty, setQty] = useState(3);
  const [isProcessing, setIsProcessing] = useState(false);
  const [outputVal, setOutputVal] = useState(150);

  const calculate = (p, q) => {
    setIsProcessing(true);
    setTimeout(() => {
      setOutputVal(p * q);
      setIsProcessing(false);
    }, 300);
  };

  const handlePriceChange = (val) => {
    setPrice(val);
    calculate(val, qty);
  };

  const handleQtyChange = (val) => {
    setQty(val);
    calculate(price, val);
  };

  return (
    <AnimationCanvas
      title="How Functions Take Inputs & Return Calculated Results"
      titleBn="ফাংশন যেভাবে ইনপুট নিয়ে ফলাফল রিটার্ন করে"
      subtitle={`Calling calculateTotal(${price}, ${qty}) → Inside machine: ${price} * ${qty} → Returns ${outputVal}`}
      subtitleBn={`কল করা হলো: calculateTotal(${price}, ${qty}) → ভেতরে হিসাব: ${price} * ${qty} → রিটার্ন: ${outputVal}`}
      badge="Function Calculator Engine"
      badgeBn="ফাংশন ক্যালকুলেটর ইঞ্জিন"
    >
      <div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-between gap-4 py-2">
        {/* Left: Input Arguments */}
        <div className="w-full md:w-52 p-3.5 rounded-2xl bg-[#151928] border border-slate-800 space-y-2.5 shadow-lg">
          <div className="text-[11px] font-mono text-amber-300 font-bold uppercase tracking-wider">
            1. Input Arguments
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">$price:</span>
              <div className="flex gap-1">
                {[50, 100, 200].map(p => (
                  <button
                    key={p}
                    onClick={() => handlePriceChange(p)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      price === p ? 'bg-amber-400 text-slate-950' : 'bg-[#0a0d16] text-slate-400'
                    }`}
                  >
                    ${p}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">$qty:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 5].map(q => (
                  <button
                    key={q}
                    onClick={() => handleQtyChange(q)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      qty === q ? 'bg-amber-400 text-slate-950' : 'bg-[#0a0d16] text-slate-400'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-2 rounded bg-[#0a0d16] text-[10px] font-mono text-slate-400 border border-slate-800/80">
            calculateTotal(<span className="text-amber-400">{price}</span>, <span className="text-amber-400">{qty}</span>);
          </div>
        </div>

        {/* Arrow to Machine */}
        <div className="hidden md:flex flex-col items-center">
          <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="w-5 h-5 text-amber-400" />
          </motion.div>
        </div>

        {/* Center: The Function Processing Machine */}
        <div className="w-full md:w-64 p-4 rounded-2xl bg-gradient-to-b from-[#1c243c] to-[#141a2e] border-2 border-purple-500/40 shadow-[0_0_25px_-5px_rgba(168,85,247,0.3)] space-y-2.5 text-center relative">
          <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-purple-300">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>function calculateTotal($p, $q)</span>
          </div>

          <div className="p-3 rounded-xl bg-[#0a0d16] border border-purple-500/30 font-mono text-xs text-left space-y-1">
            <div className="text-slate-500">// Processing math inside:</div>
            <div className="text-slate-200">
              return <span className="text-amber-400">{price}</span> * <span className="text-amber-400">{qty}</span>;
            </div>
            <div className="text-emerald-400 font-bold pt-1 border-t border-slate-800">
              = {price * qty}
            </div>
          </div>

          <span className="text-[10px] font-mono text-purple-300/80 bg-purple-500/10 px-2 py-0.5 rounded-full inline-block">
            {t("Calculates and packages return value", "হিসাব করে রিটার্ন ভ্যালু তৈরি করে")}
          </span>
        </div>

        {/* Arrow to Output */}
        <div className="hidden md:flex flex-col items-center">
          <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="w-5 h-5 text-emerald-400" />
          </motion.div>
        </div>

        {/* Right: Returned Result Holder */}
        <div className="w-full md:w-52 p-3.5 rounded-2xl bg-[#151928] border border-slate-800 space-y-2 shadow-lg text-center">
          <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
            3. Return Value
          </div>

          <div className="h-16 rounded-xl bg-[#0a0d16] border border-emerald-500/40 flex flex-col items-center justify-center shadow-inner">
            <span className="text-[10px] font-mono text-slate-500">$bill =</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={outputVal}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl font-mono font-black text-emerald-400"
              >
                ${outputVal}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="text-[10px] text-slate-400 font-sans">
            {t("Stored in variable or printed", "ভেরিয়েবলে জমা হয় বা প্রিন্ট করা যায়")}
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
