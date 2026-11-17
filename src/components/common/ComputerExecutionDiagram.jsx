import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Cpu, Play, Pause, RotateCcw, Sparkles, Terminal, Activity, ArrowRight, Eye, MousePointer } from 'lucide-react';

export function ComputerExecutionDiagram() {
  const { lang, t } = useLanguage();
  const [activeUnit, setActiveUnit] = useState('alu'); // 'input', 'cu', 'memory', 'alu', 'output', 'operator'
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const units = {
    alu: {
      name: "ALU (Arithmetic & Logic Unit)",
      nameBn: "এএলইউ (গাণিতিক ও যুক্তি ইউনিট)",
      badge: "MATHEMATICAL ENGINE",
      badgeBn: "গাণিতিক ইঞ্জিন",
      desc: "Executes all math (+, -, *, /) and true/false logic decisions (if/else, comparison). In PHP, when you calculate ($price * $qty) or evaluate ($age >= 18), the ALU executes it.",
      descBn: "সকল গণিত (+, -, *, /) এবং সত্য/মিথ্যা যুক্তি (if/else, ===) এক্সিকিউট করে। PHP কোডে ($price * $qty) বা ($age >= 18) হিসেব করার সময় ALU-ই তা চালায়।",
      color: "border-amber-500 bg-amber-500/10 text-amber-300 shadow-amber-500/20",
      operands: "Operands from Memory (↑)",
      command: "Command from CU (→)"
    },
    memory: {
      name: "Memory (Primary Storage / RAM)",
      nameBn: "মেমোরি (র‌্যাম / প্রাইমারি স্টোরেজ)",
      badge: "VARIABLE & STATE STORAGE",
      badgeBn: "ভেরিয়েবল ও মেমোরি স্টোরেজ",
      desc: "Stores variables, array values, and active bytecode instructions temporarily while the script executes. In PHP, every $name = 'Nasir' allocates space here.",
      descBn: "স্ক্রিপ্ট চলার সময় সব ভেরিয়েবল, অ্যারে ও বাইটকোড অস্থায়ীভাবে সংরক্ষণ করে। PHP-তে $name = 'Nasir' লিখলে র‍্যামেই স্থান বরাদ্দ হয়।",
      color: "border-cyan-500 bg-cyan-500/10 text-cyan-300 shadow-cyan-500/20",
      operands: "Stores Active Variables ($x, $arr)",
      command: "Read/Write Addresses Managed by OS"
    },
    cu: {
      name: "Control Unit (CU)",
      nameBn: "কন্ট্রোল ইউনিট (সিইউ)",
      badge: "TIMING & COMMAND GENERATOR",
      badgeBn: "টাইমিং ও কমান্ড নিয়ন্ত্রক",
      desc: "Directs computer operations by sending timed control pulses. It fetches instructions, decodes opcodes, and coordinates ALU, Memory, and I/O devices.",
      descBn: "কম্পিউটারের সব কাজের টাইমিং ও সিগন্যাল নিয়ন্ত্রণ করে। নির্দেশিকা পড়ে, ডিকোড করে এবং এএলইউ ও মেমোরিকে কী করতে হবে তার আদেশ পাঠায়।",
      color: "border-blue-500 bg-blue-500/10 text-blue-300 shadow-blue-500/20",
      operands: "Fetches Instruction Pointer",
      command: "Issues Control Commands (Pulse Signals)"
    },
    input: {
      name: "Input Device (Keyboard / HTTP Request)",
      nameBn: "ইনপুট ডিভাইস (কীবোর্ড / মাউস / এইচটিটিপি রিকোয়েস্ট)",
      badge: "DATA INGESTION",
      badgeBn: "ডাটা গ্রহণ ব্যবস্থা",
      desc: "Captures operator actions. In web servers, the input device is the Network Card (NIC) receiving HTTP GET/POST packets from the internet.",
      descBn: "ইউজারের নির্দেশ গ্রহণ করে। ওয়েব সার্ভারে নেটওয়ার্ক কার্ড ইন্টারনেটের মাধ্যমে আসা ক্লায়েন্টের HTTP GET/POST রিকোয়েস্ট ইনপুট হিসেবে গ্রহণ করে।",
      color: "border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-emerald-500/20",
      operands: "Raw Keystrokes / HTTP Stream",
      command: "Sends Data to Memory Bus"
    },
    output: {
      name: "Output Device (Monitor / Display)",
      nameBn: "আউটপুট ডিভাইস (মনিটর / ডিসপ্লে / ব্রাউজার স্ক্রিন)",
      badge: "VISUAL RENDERING",
      badgeBn: "ফলাফল প্রদর্শন ব্যবস্থা",
      desc: "Converts processed binary memory buffers into human-readable light on a display. In web servers, this streams rendered HTML/JSON to the client.",
      descBn: "প্রসেস করা বাইনারি ডাটাকে মানুষের পড়ার উপযোগী পর্দায় প্রদর্শন করে। ওয়েব সার্ভারের ক্ষেত্রে এটি তৈরি হওয়া HTML ও JSON ব্রাউজারে পাঠায়।",
      color: "border-purple-500 bg-purple-500/10 text-purple-300 shadow-purple-500/20",
      operands: "Framebuffer / HTTP Response Stream",
      command: "Light & Pixels to Operator"
    }
  };

  const current = units[activeUnit] || units.alu;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const sequence = ['input', 'memory', 'cu', 'alu', 'memory', 'output'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % sequence.length;
      setActiveUnit(sequence[idx]);
    }, 2400);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="bg-[#070913] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Dynamic Top HUD Card (Exact match to reference style) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeUnit}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0d1222] border-2 border-amber-500/80 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg shadow-amber-500/10"
        >
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  {lang === 'bn' ? current.nameBn : current.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-slate-950 uppercase tracking-wide">
                  {lang === 'bn' ? current.badgeBn : current.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {lang === 'bn' ? current.descBn : current.desc}
              </p>
            </div>
          </div>

          {/* Legend Pills */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 text-[11px] font-mono shrink-0">
            <div className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>{current.operands}</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>{current.command}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Main Diagram Area */}
      <div className="relative py-8 px-2 sm:px-6 bg-[#04060d] border border-slate-900 rounded-xl flex flex-col items-center">
        {/* Play / Pause / Reset Control Toolbar */}
        <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {t("Computer Architecture Diagram", "কম্পিউটার আর্কিটেকচার ডায়াগ্রাম")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlaying(prev => !prev)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                isAutoPlaying
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>{t("Pause Cycle", "পজ করুন")}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>{t("Animate Cycle", "অ্যানিমেশন চালান")}</span>
                </>
              )}
            </button>
            <button
              onClick={() => {
                setActiveUnit('alu');
                setIsAutoPlaying(false);
              }}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title={t("Reset Diagram", "রিসেট করুন")}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Diagram Flow Grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
          
          {/* Left: Input Device */}
          <div className="lg:col-span-2 flex flex-col items-center space-y-4">
            <div className="text-center">
              <span className="text-[11px] font-mono text-rose-400 font-bold tracking-wider">
                {t("From Operator", "অপারেটর থেকে")}
              </span>
              <p className="text-[10px] text-slate-500 font-mono">
                {t("(Human User / Client)", "(ইউজার / ক্লায়েন্ট)")}
              </p>
            </div>

            {/* Input Arrow Pulse */}
            <div className="w-full flex items-center justify-center text-rose-500">
              <span className="h-0.5 w-12 bg-rose-500/40 relative">
                <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              </span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>

            {/* Input Unit Box */}
            <button
              onClick={() => { setActiveUnit('input'); setIsAutoPlaying(false); }}
              className={`w-full p-4 rounded-xl border text-center transition-all ${
                activeUnit === 'input'
                  ? 'border-emerald-400 bg-emerald-500/15 text-white shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-500/30'
                  : 'border-slate-800 bg-[#0d111d] text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1 text-emerald-400">
                <MousePointer className="w-4 h-4" />
                <span className="text-xs font-bold font-mono">Input Device</span>
              </div>
              <div className="text-[11px] text-slate-400">Keyboard / Mouse / HTTP</div>
            </button>
          </div>

          {/* Center: CPU Boundary Box (Enclosing ALU, RAM, CU) */}
          <div className="lg:col-span-3 border-2 border-slate-700/80 bg-[#090d18]/90 rounded-2xl p-4 sm:p-5 relative shadow-2xl">
            {/* Box Header Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-600 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">
              CPU BOUNDARY BOX
            </div>

            <div className="space-y-4 pt-2">
              {/* ALU Unit Box */}
              <button
                onClick={() => { setActiveUnit('alu'); setIsAutoPlaying(false); }}
                className={`w-full p-4 rounded-xl border text-center transition-all relative ${
                  activeUnit === 'alu'
                    ? 'border-amber-400 bg-amber-500/20 text-white shadow-xl shadow-amber-500/30 ring-2 ring-amber-500/40'
                    : 'border-slate-800 bg-[#0b0f1d] text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <div className="text-xs sm:text-sm font-extrabold text-amber-300">
                  ALU
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  (Arithmetic & Logic Unit)
                </div>
              </button>

              {/* Bidirectional Operands Red Pulse Arrows between ALU and Memory */}
              <div className="flex justify-around items-center text-red-500 text-[10px] font-mono px-4">
                <div className="flex flex-col items-center">
                  <span className="text-red-400 font-bold">↑</span>
                  <span className="text-[9px] text-red-400/80">Operands</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-red-400 font-bold">↓</span>
                  <span className="text-[9px] text-red-400/80">Results</span>
                </div>
              </div>

              {/* Memory / RAM Box */}
              <button
                onClick={() => { setActiveUnit('memory'); setIsAutoPlaying(false); }}
                className={`w-full p-4 rounded-xl border text-center transition-all ${
                  activeUnit === 'memory'
                    ? 'border-cyan-400 bg-cyan-500/20 text-white shadow-xl shadow-cyan-500/30 ring-2 ring-cyan-500/40'
                    : 'border-slate-800 bg-[#0b0f1d] text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="text-xs sm:text-sm font-extrabold text-cyan-300">
                  Memory
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  (Primary Storage / RAM)
                </div>
              </button>

              {/* Bidirectional Command Blue Pulse Arrows between Memory and CU */}
              <div className="flex justify-around items-center text-blue-500 text-[10px] font-mono px-4">
                <div className="flex flex-col items-center">
                  <span className="text-blue-400 font-bold">↑</span>
                  <span className="text-[9px] text-blue-400/80">Address</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-blue-400 font-bold">↓</span>
                  <span className="text-[9px] text-blue-400/80">Data Bus</span>
                </div>
              </div>

              {/* Control Unit Box */}
              <button
                onClick={() => { setActiveUnit('cu'); setIsAutoPlaying(false); }}
                className={`w-full p-4 rounded-xl border text-center transition-all ${
                  activeUnit === 'cu'
                    ? 'border-blue-400 bg-blue-500/20 text-white shadow-xl shadow-blue-500/30 ring-2 ring-blue-500/40'
                    : 'border-slate-800 bg-[#0b0f1d] text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="text-xs sm:text-sm font-extrabold text-blue-300">
                  Control Unit
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  (Timing & Command Generator)
                </div>
              </button>
            </div>

            {/* Central Processing Unit (CPU) Label */}
            <div className="mt-4 text-center">
              <span className="text-xs font-bold text-slate-200 tracking-wide">
                Central Processing Unit (CPU)
              </span>
            </div>
          </div>

          {/* Right: Output Device */}
          <div className="lg:col-span-2 flex flex-col items-center space-y-4">
            <div className="text-center">
              <span className="text-[11px] font-mono text-cyan-400 font-bold tracking-wider">
                {t("To Operator", "অপারেটরের চোখে")}
              </span>
              <p className="text-[10px] text-slate-500 font-mono">
                {t("(Human Eyes / Browser Display)", "(মানুষের চোখ / ব্রাউজার ডিসপ্লে)")}
              </p>
            </div>

            {/* Output Arrow Pulse */}
            <div className="w-full flex items-center justify-center text-cyan-500">
              <ArrowRight className="w-4 h-4 mr-1" />
              <span className="h-0.5 w-12 bg-cyan-500/40 relative">
                <span className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              </span>
            </div>

            {/* Output Unit Box */}
            <button
              onClick={() => { setActiveUnit('output'); setIsAutoPlaying(false); }}
              className={`w-full p-4 rounded-xl border text-center transition-all ${
                activeUnit === 'output'
                  ? 'border-purple-400 bg-purple-500/15 text-white shadow-lg shadow-purple-500/20 ring-2 ring-purple-500/30'
                  : 'border-slate-800 bg-[#0d111d] text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1 text-purple-400">
                <Eye className="w-4 h-4" />
                <span className="text-xs font-bold font-mono">Output Device</span>
              </div>
              <div className="text-[11px] text-slate-400">Monitor / Display / HTML Stream</div>
            </button>
          </div>
        </div>

        {/* Diagram Caption */}
        <div className="mt-8 text-center text-xs font-mono text-cyan-400 font-bold">
          {t(
            "Figure: Functional block diagram of a typical computer executing software code",
            "চিত্র: একটি সাধারণ কম্পিউটারের কার্যকরী ব্লক ডায়াগ্রাম এবং সফটওয়্যার এক্সিকিউশন"
          )}
        </div>
      </div>
    </div>
  );
}
