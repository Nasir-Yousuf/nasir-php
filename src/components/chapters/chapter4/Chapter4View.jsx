import React from 'react';
import { ArrayDeepDive } from './ArrayDeepDive';
import { ArrayPlayground } from './ArrayPlayground';
import { Box, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function Chapter4View({ onNextChapter }) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Chapter 4 Hero Header */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c180c] via-[#0d1020] to-[#121c2c] border border-amber-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
            <Box className="w-3.5 h-3.5" />
            <span>{t("CHAPTER 04 · DATA STRUCTURES", "অধ্যায় ০৪ · ডাটা স্ট্রাকচার")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Understanding Arrays from Zero: PHP vs JavaScript",
              "শুরু থেকে অ্যারে: পিএইচপি বনাম জাভাস্ক্রিপ্ট"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "Now that you understand how databases return records, let's master arrays. Learn how PHP indexed arrays compare with JavaScript arrays, how PHP associative arrays compare with JavaScript objects, and how to manipulate them in real-time.",
              "ডাটাবেজ কীভাবে তথ্য পাঠায় তা দেখার পর এবার অ্যারের গভীরে যাওয়া যাক। PHP ইনডেক্সড অ্যারে বনাম JS অ্যারে, PHP অ্যাসোসিয়েটিভ অ্যারে বনাম JS অবজেক্ট এবং লাইভ কোড ল্যাবরেটরিতে হাতে-কলমে প্র্যাকটিস।"
            )}
          </p>
        </div>
      </div>

      {/* 4.1 - 4.7 Array Deep Dive */}
      <section className="space-y-4">
        <ArrayDeepDive />
      </section>

      {/* 4.8 Interactive Array Playground */}
      <section className="space-y-4">
        <ArrayPlayground />
      </section>

      {/* Chapter 4 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Chapter 4 Complete", "অধ্যায় ৪ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Why PHP? PHP vs Node.js, React and Next.js (Balanced & Honest Analysis)", "পরবর্তী: কেন পিএইচপি? PHP বনাম Node.js, React ও Next.js (ভারসাম্যপূর্ণ ও বস্তুনিষ্ঠ বিশ্লেষণ)")}
          </p>
        </div>

        {onNextChapter && (
          <button
            onClick={onNextChapter}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Chapter 5", "অধ্যায় ৫-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Chapter4View;
