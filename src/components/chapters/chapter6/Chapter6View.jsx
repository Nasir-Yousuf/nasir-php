import React from 'react';
import { PhpFundamentalsSection } from './PhpFundamentalsSection';
import { Code2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function Chapter6View({ onNextChapter }) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Chapter 6 Hero Header */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#12162b] via-[#0d1020] to-[#1c180c] border border-cyan-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t("CHAPTER 06 · SYNTAX & WORKSHOP", "অধ্যায় ০৬ · ভাষা ব্যাকরণ ও ল্যাব")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "PHP Fundamentals and Core Lessons",
              "পিএইচপি ফান্ডামেন্টালস ও মূল পাঠ"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "Now that you understand the web, databases, and how data travels, step into PHP coding! Compare every core syntax element side-by-side with JavaScript, run live simulations, and master the mental models.",
              "ওয়েবের সম্পূর্ণ আর্কিটেকচার ও ডাটা রূপান্তর বোঝার পর এবার পিএইচপি কোডিংয়ে সরাসরি প্রবেশ করা যাক। প্রতিটি সিনট্যাক্স জাভাস্ক্রিপ্টের পাশাপাশি দেখে নিন এবং লাইভ কোড রান করে যাচাই করুন।"
            )}
          </p>
        </div>
      </div>

      {/* 6.1 - 6.10 Fundamentals Section */}
      <section id="section-6-1" className="space-y-4 scroll-mt-24">
        <PhpFundamentalsSection />
      </section>

      {/* Chapter 6 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Chapter 6 Complete", "অধ্যায় ৬ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Our Actual PHP Project — php-class-two Architecture & File Structure", "পরবর্তী: আমাদের আসল পিএইচপি প্রজেক্ট — php-class-two আর্কিটেকচার ও ফাইল কাঠামো")}
          </p>
        </div>

        {onNextChapter && (
          <button
            onClick={onNextChapter}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Chapter 7 (The Final Project)", "অধ্যায় ৭ (চূড়ান্ত প্রজেক্টে যান)")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Chapter6View;
