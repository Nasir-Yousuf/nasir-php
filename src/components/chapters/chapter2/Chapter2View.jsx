import React from 'react';
import { DatabaseStorageExplainer } from './DatabaseStorageExplainer';
import { SqlSimulator } from './SqlSimulator';
import { Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function Chapter2View({ onNextChapter }) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Chapter 2 Hero Header */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#18112e] via-[#0d1020] to-[#141b2c] border border-purple-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold">
            <Database className="w-3.5 h-3.5" />
            <span>{t("CHAPTER 02 · PERSISTENT STORAGE", "অধ্যায় ০২ · ডাটা সংরক্ষণ")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "How Databases Store Data",
              "ডাটাবেজ কীভাবে তথ্য সংরক্ষণ করে"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "Before we can understand PHP arrays and JSON objects, we must explore how raw data lives inside databases. What is a table, row, and primary key? How does MySQL's 2D relational table compare with MongoDB's JSON-like document?",
              "পিএইচপি অ্যারে এবং জাভাস্ক্রিপ্ট অবজেক্ট বোঝার মূল ভিত্তি হলো ডাটাবেজ। ডাটাবেজে টেবিল, রো এবং প্রাইমারি কি কী? কীভাবে রিলেশনাল টেবিল এবং মঙ্গোডিবি ডকুমেন্টের মধ্যে একই তথ্য রাখা যায়?"
            )}
          </p>
        </div>
      </div>

      {/* 2.1 & 2.2 Relational & Document Storage */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-500 text-white font-black flex items-center justify-center text-sm font-mono">
            2.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Relational Tables vs Document Models (MySQL & MongoDB)", "রিলেশনাল টেবিল বনাম ডকুমেন্ট মডেল (MySQL ও MongoDB)")}
          </h2>
        </div>
        <DatabaseStorageExplainer />
      </section>

      {/* 2.4 SQL Query Demonstration */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            2.2
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("SQL Query Demonstration & Filter Engine", "এসকিউএল কুয়েরি ও ফিল্টারিং সিমুলেশন")}
          </h2>
        </div>
        <SqlSimulator />
      </section>

      {/* Chapter 2 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Chapter 2 Complete", "অধ্যায় ২ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: How Data Travels — Database → Backend PDO → PHP Array → JSON → JavaScript DOM", "পরবর্তী: ডাটা কীভাবে প্রবাহিত হয় — ডাটাবেজ → PHP অ্যারে → JSON → জাভাস্ক্রিপ্ট DOM")}
          </p>
        </div>

        {onNextChapter && (
          <button
            onClick={onNextChapter}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Chapter 3", "অধ্যায় ৩-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Chapter2View;
