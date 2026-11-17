import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Play, 
  CheckCircle2, 
  ArrowRight,
  RotateCcw,
  Layers,
  Car
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';
import { ClassAnimation } from '../animations/ClassAnimation';

export function Module11Classes({ onNextModule }) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Module 11 Hero */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c140c] via-[#0d1020] to-[#121828] border border-amber-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("MODULE 11 · OBJECT ORIENTED PROGRAMMING", "মডিউল ১১ · অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Objects & Classes: The Architectural Blueprint",
              "ক্লাস ও অবজেক্ট: সফটওয়্যারের আর্কিটেকচার ব্লুপ্রিন্ট"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "How do real-world systems structure code cleanly? Learn Object-Oriented Programming (OOP) from zero: how classes serve as factory blueprints, how 'new' stamps out instances, and why PHP uses '$this->'.",
              "বাস্তব সফটওয়্যার প্রজেক্ট কীভাবে সুন্দর কাঠামোবদ্ধ কোড লেখে? শিখুন OOP: কীভাবে ক্লাস ফ্যাক্টরি ব্লুপ্রিন্ট হিসেবে কাজ করে, 'new' দিয়ে অবজেক্ট তৈরি হয় এবং কেন পিএইচপিতে '$this->' ব্যবহার করা হয়।"
            )}
          </p>
        </div>
      </div>

      {/* 11.1 Concept Visualizer */}
      <section id="sec-11-1" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            11.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("The Car Blueprint Analogy (Class vs Object)", "গাড়ির ব্লুপ্রিন্ট উপমা (ক্লাস বনাম অবজেক্ট)")}
          </h2>
        </div>
        <div className="p-5 rounded-2xl bg-[#0e111f] border border-slate-800 shadow-xl">
          <ClassAnimation />
        </div>
      </section>

      {/* 11.2 & 11.4 Syntax & $this-> */}
      <section id="sec-11-2" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            11.2
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Class Declaration, Constructor & $this-> Arrow Operator", "ক্লাস গঠন, কনস্ট্রাক্টর ও $this-> অ্যারো অপারেটর")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-5 rounded-2xl bg-[#111425] border border-amber-500/30 space-y-3">
            <span className="text-amber-400 font-bold text-sm block">PHP OOP Syntax</span>
            <pre className="text-slate-200 leading-relaxed overflow-x-auto">
{`class Car {
    public $brand;

    // Constructor runs automatically on 'new':
    public function __construct($b) {
        $this->brand = $b;
    }

    public function start() {
        return $this->brand . " engine started!";
    }
}

// Object instantiation:
$myCar = new Car("Toyota");
echo $myCar->start();`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#080a14] font-sans text-[11px] text-amber-200">
              <strong>Notice:</strong> {t("PHP uses arrow '->' ($this->brand, $myCar->start()) instead of dot notation ('.').", "পিএইচপিতে ক্লাসের উপাদান ডাকতে অ্যারো '->' ব্যবহার করা হয়, ডট নয়।")}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#111425] border border-cyan-500/30 space-y-3">
            <span className="text-cyan-400 font-bold text-sm block">JavaScript OOP Equivalent</span>
            <pre className="text-slate-200 leading-relaxed overflow-x-auto">
{`class Car {
    // Constructor in JS:
    constructor(b) {
        this.brand = b;
    }

    start() {
        return this.brand + " engine started!";
    }
}

// Object instantiation:
const myCar = new Car("Toyota");
console.log(myCar.start());`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#080a14] font-sans text-[11px] text-cyan-200">
              <strong>Notice:</strong> {t("JavaScript uses constructor() and dot notation (this.brand).", "জাভাস্ক্রিপ্ট constructor() এবং ডট নোটেশন (this.brand) ব্যবহার করে।")}
            </div>
          </div>
        </div>
      </section>

      {/* Module 11 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 11 Complete", "মডিউল ১১ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Working with Multiple PHP Files (include vs require, __DIR__ & Autoloading)", "পরবর্তী: একাধিক পিএইচপি ফাইল ও অটোলোডিং (include বনাম require, __DIR__)")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 12", "মডিউল ১২-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module11Classes;
