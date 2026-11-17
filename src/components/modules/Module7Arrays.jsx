import React from 'react';
import { ArrayDeepDive } from '../chapters/chapter4/ArrayDeepDive';
import { ArrayPlayground } from '../chapters/chapter4/ArrayPlayground';
import { ArrayAnimation } from '../animations/ArrayAnimation';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Module7Arrays({ onNextModule }) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Module 7 Hero Banner */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c180c] via-[#0d1020] to-[#141b2c] border border-amber-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>{t("MODULE 07 · CORE DATA STRUCTURES", "মডিউল ০৭ · মূল ডাটা স্ট্রাকচার")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Arrays Masterclass: Indexed Lists & Hash Maps",
              "অ্যারে মাস্টারক্লাস: ইনডেক্সড তালিকা ও হ্যাশ ম্যাপ"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "A comprehensive deep-dive into PHP arrays: how they compare to JavaScript arrays, why PHP associative arrays act as ordered hash maps, how to safely add and remove elements, and our live interactive dual-tab array lab.",
              "পিএইচপি অ্যারের আদ্যোপান্ত: জাভাস্ক্রিপ্ট অ্যারের সাথে তুলনা, অ্যাসোসিয়েটিভ অ্যারে ও অবজেক্টের পার্থক্য, উপাদান যোগ ও মোছার নিয়ম এবং লাইভ ইন্টারেক্টিভ ল্যাব।"
            )}
          </p>
        </div>
      </div>

      {/* 7.1 - 7.7 Deep Dive */}
      <section id="sec-7-1" className="space-y-4 scroll-mt-24">
        <ArrayDeepDive />
      </section>

      {/* Step 6 Animated Visualizer: Memory Allocation of Array Elements */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-indigo-500 text-white font-black flex items-center justify-center text-sm font-mono">
            7.7
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Animated Array Memory Allocation & Foreach Traversal", "অ্যারে মেমোরি এলিমেন্ট ও ফোরইচ অ্যানিমেশন")}
          </h2>
        </div>
        <ArrayAnimation />
      </section>

      {/* 7.8 Live Array Laboratory */}
      <section id="sec-7-8" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            7.8
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Interactive Dual-Tab Array Laboratory", "ইন্টারেক্টিভ ডুয়াল-ট্যাব অ্যারে ল্যাব")}
          </h2>
        </div>
        <ArrayPlayground />
      </section>

      {/* Module 7 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 7 Complete", "মডিউল ৭ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Conditional Statements (if, else, elseif, switch & match)", "পরবর্তী: শর্ত ও সিদ্ধান্ত গ্রহণ (if, else, elseif, switch ও match)")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 8", "মডিউল ৮-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module7Arrays;
