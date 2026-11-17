import React from 'react';
import { RestaurantAnalogy } from './RestaurantAnalogy';
import { FrontendBackendDbExplainer } from './FrontendBackendDbExplainer';
import { WebArchitectureDiagram } from './WebArchitectureDiagram';
import { ParticleRequestLifecycle } from './ParticleRequestLifecycle';
import { Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function Chapter1View({ onNextChapter }) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Chapter 1 Hero Header */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#12162b] via-[#0d1020] to-[#1a142e] border border-cyan-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
            <Globe className="w-3.5 h-3.5" />
            <span>{t("CHAPTER 01 · 1ST PRINCIPLES", "অধ্যায় ০১ · প্রথম মূলনীতি")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Understanding How the Web Works",
              "ওয়েব কীভাবে কাজ করে: প্রথম মূলনীতি"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "Before writing PHP syntax, we must understand the physical anatomy of a web application. What happens when a user types a URL? Why is there a frontend, a backend, and a database? How do they safely communicate without leaking secrets?",
              "পিএইচপি কোড মুখস্থ করার আগে একটি পূর্ণাঙ্গ ওয়েব অ্যাপ্লিকেশন কীভাবে কাজ করে তা বোঝা প্রয়োজন। ব্রাউজারে ইউআরএল লিখলে কী ঘটে? কেন ফ্রন্টএন্ড, ব্যাকএন্ড ও ডাটাবেজ আলাদা থাকে এবং তারা কীভাবে নিরাপদভাবে তথ্য আদান-প্রদান করে?"
            )}
          </p>
        </div>
      </div>

      {/* 1.1 The Restaurant Analogy */}
      <section id="section-1-1" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            1.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("The Restaurant Analogy: Customer, Waiter, Chef & Pantry", "রেস্তোরাঁর উপমা: গ্রাহক, ওয়েটার, শেফ ও কোল্ড স্টোরেজ")}
          </h2>
        </div>
        <RestaurantAnalogy />
      </section>

      {/* 1.2, 1.3, 1.4 Frontend, Backend & Database Deep Dive */}
      <section id="section-1-2" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            1.2
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("The 3 Layers: Frontend, Backend, & Database Storage", "তিনটি স্তর: ফ্রন্টএন্ড, ব্যাকএন্ড এবং ডাটাবেজ")}
          </h2>
        </div>
        <FrontendBackendDbExplainer />
      </section>

      {/* 1.5 Web Architecture Diagram */}
      <section id="section-1-5" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            1.5
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Interactive Architecture Blueprint", "ইন্টারেক্টিভ আর্কিটেকচার ব্লুপ্রিন্ট")}
          </h2>
        </div>
        <WebArchitectureDiagram />
      </section>

      {/* 1.6 Animated Request Lifecycle */}
      <section id="section-1-6" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-emerald-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            1.6
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Micro-Step Request Lifecycle Simulator", "ধাপে ধাপে রিকোয়েস্ট লাইফসাইকেল সিমুলেটর")}
          </h2>
        </div>
        <ParticleRequestLifecycle />
      </section>

      {/* Chapter 1 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Chapter 1 Complete", "অধ্যায় ১ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: How Databases Store Data (MySQL Tables vs MongoDB Documents)", "পরবর্তী: ডাটাবেজ কীভাবে ডাটা সংরক্ষণ করে (MySQL বনাম MongoDB)")}
          </p>
        </div>

        {onNextChapter && (
          <button
            onClick={onNextChapter}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Chapter 2", "অধ্যায় ২-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Chapter1View;
