import React from 'react';
import { DataTransformationPipeline } from './DataTransformationPipeline';
import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function Chapter3View({ onNextChapter }) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Chapter 3 Hero Header */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0c1829] via-[#0d1020] to-[#1c1228] border border-cyan-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t("CHAPTER 03 · THE BRIDGE", "অধ্যায় ০৩ · ডাটা রূপান্তর")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "How Data Travels: Database → Backend → Frontend",
              "ডাটা যেভাবে প্রবাহিত হয়: ডাটাবেজ → ব্যাকএন্ড → ফ্রন্টএন্ড"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "We have records in a database table. But how does PHP query them? How does it transform row tuples into PHP arrays? And how does JavaScript receive and render that data? Here is the exact transformation pipeline.",
              "ডাটাবেজে তথ্য সংরক্ষিত থাকে। কিন্তু পিএইচপি কীভাবে তা তুলে আনে? কীভাবে তা পিএইচপি অ্যারেতে পরিণত হয় এবং জাভাস্ক্রিপ্ট কীভাবে তা গ্রহণ করে স্ক্রিনে দেখায়? চলুন জেনে নিই।"
            )}
          </p>
        </div>
      </div>

      {/* 3.1 - 3.5 Transformation Pipeline */}
      <section className="space-y-4">
        <DataTransformationPipeline />
      </section>

      {/* Chapter 3 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Chapter 3 Complete", "অধ্যায় ৩ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Understanding Arrays from Zero (PHP vs JavaScript)", "পরবর্তী: অ্যারের খুঁটিনাটি — পিএইচপি বনাম জাভাস্ক্রিপ্ট")}
          </p>
        </div>

        {onNextChapter && (
          <button
            onClick={onNextChapter}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Chapter 4", "অধ্যায় ৪-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Chapter3View;
