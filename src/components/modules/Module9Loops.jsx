import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Repeat, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  RotateCcw,
  FastForward
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';
import { LoopAnimation } from '../animations/LoopAnimation';

export function Module9Loops({ onNextModule }) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Module 9 Hero */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c0e28] via-[#0d1020] to-[#12162a] border border-purple-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-300 font-mono text-xs font-bold">
            <Repeat className="w-3.5 h-3.5" />
            <span>{t("MODULE 09 · ITERATION & REPETITION", "মডিউল ০৯ · পুনরাবৃত্তি ও অটোমেশন")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Loops & Iteration: Automating Repetitive Work",
              "লুপ ও পুনরাবৃত্তি: কাজের স্বয়ংক্রিয়করণ"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "Imagine writing the same code 100 times to display 100 students. Loops eliminate human effort by instructing the CPU to repeat tasks effortlessly.",
              "১০০ জন শিক্ষার্থীর নাম দেখাতে ১০০ লাইন কোড লেখা বোকামি। লুপ কম্পিউটারকে নির্দেশ দেয় চোখের পলকে কাজটি নির্ভুলভাবে স্বয়ংক্রিয় করে শেষ করতে।"
            )}
          </p>
        </div>
      </div>

      {/* 9.1 Concept Visualizer */}
      <section id="sec-9-1" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            9.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Animated Loop Counter & Visualizer", "অ্যানিমেটেড লুপ কাউন্টার ও ভিজ্যুয়াল মডেল")}
          </h2>
        </div>
        <div className="p-5 rounded-2xl bg-[#0e111f] border border-slate-800 shadow-xl">
          <LoopAnimation />
        </div>
      </section>

      {/* 9.3 foreach Deep Dive */}
      <section id="sec-9-3" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            9.3
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("The 'foreach' Loop: The King of PHP Arrays", "foreach লুপ: পিএইচপি অ্যারের সেরা হাতিয়ার")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-5 rounded-2xl bg-[#111425] border border-amber-500/30 space-y-3">
            <span className="text-amber-400 font-bold text-sm block">Values Only Loop</span>
            <pre className="text-slate-200 leading-relaxed">
{`$fruits = ["Apple", "Mango", "Banana"];

foreach ($fruits as $f) {
    echo $f . "\\n";
}`}
            </pre>
            <p className="font-sans text-slate-300 text-[11px]">
              {t("Reads each element in order and assigns it to temporary variable $f.", "প্রতিটি উপাদানকে ক্রমানুসারে নিয়ে অস্থায়ী ভেরিয়েবল $f এ বসিয়ে কোড চালায়।")}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#111425] border border-cyan-500/30 space-y-3">
            <span className="text-cyan-400 font-bold text-sm block">Keys & Values Loop (Associative)</span>
            <pre className="text-slate-200 leading-relaxed">
{`$user = [
    "name" => "Nasir",
    "role" => "Developer"
];

foreach ($user as $key => $val) {
    echo "$key: $val\\n";
}`}
            </pre>
            <p className="font-sans text-slate-300 text-[11px]">
              {t("Extracts both the key ('name') and the value ('Nasir') together!", "কি এবং ভ্যালু দুটিকেই একসাথে আলাদা ভেরিয়েবলে তুলে নেয়!")}
            </p>
          </div>
        </div>
      </section>

      {/* 9.4 break & continue */}
      <section id="sec-9-4" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-500 text-white font-black flex items-center justify-center text-sm font-mono">
            9.4
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Loop Controls: 'break' vs 'continue'", "লুপ নিয়ন্ত্রণ: 'break' বনাম 'continue'")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-[#090b16] border border-red-900/40 space-y-1">
            <span className="text-red-400 font-bold block text-sm">break (Emergency Stop)</span>
            <p className="font-sans text-slate-300 text-[11px]">
              {t("Terminates the loop completely immediately and jumps to the code below the loop.", "লুপকে সাথে সাথে পুরোপুরি থামিয়ে দেয় এবং বাইরে বের হয়ে যায়।")}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#090b16] border border-yellow-900/40 space-y-1">
            <span className="text-yellow-400 font-bold block text-sm">continue (Skip This Turn)</span>
            <p className="font-sans text-slate-300 text-[11px]">
              {t("Skips the rest of the current iteration and jumps directly to the next loop step.", "বর্তমান ধাপটি বাদ দিয়ে সাথে সাথে পরবর্তী লুপ ধাপে চলে যায়।")}
            </p>
          </div>
        </div>
      </section>

      {/* Module 9 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 9 Complete", "মডিউল ৯ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Functions & Reusability (The Machine Analogy)", "পরবর্তী: ফাংশন ও পুনরায় ব্যবহারযোগ্যতা (মেশিনের উপমা)")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 10", "মডিউল ১০-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module9Loops;
