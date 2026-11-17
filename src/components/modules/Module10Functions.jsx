import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  RotateCcw,
  Sliders,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';
import { FunctionAnimation } from '../animations/FunctionAnimation';

export function Module10Functions({ onNextModule }) {
  const { lang, t } = useLanguage();
  const [inputNumber, setInputNumber] = useState(5);
  const [multiplier, setMultiplier] = useState(3);

  const calculate = (a, b) => a * b;

  return (
    <div className="space-y-12">
      {/* Module 10 Hero */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0e1828] via-[#0d1020] to-[#121c26] border border-cyan-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t("MODULE 10 · REUSABLE CODE MACHINES", "মডিউল ১০ · পুনরায় ব্যবহারযোগ্য মেশিন")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Functions: Building Reusable Machines",
              "ফাংশন: পুনরায় ব্যবহারযোগ্য কোড মেশিন"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "A function is like a kitchen blender: you put ingredients in (parameters), it does the work, and pours out the finished smoothie (return value). Write once, reuse forever.",
              "ফাংশন হলো ব্লেন্ডার মেশিনের মতো: আপনি কাঁচামাল দেবেন (প্যারামিটার), সে ব্লেন্ড করবে এবং সুন্দর জুস বের করে দেবে (রিটার্ন)। একবার কোড লিখুন, হাজার বার ব্যবহার করুন।"
            )}
          </p>
        </div>
      </div>

      {/* 10.1 Concept Visualizer */}
      <section id="sec-10-1" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            10.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("The Function Machine Visualizer", "ফাংশন মেশিন ভিজ্যুয়াল মডেল")}
          </h2>
        </div>
        <div className="p-5 rounded-2xl bg-[#0e111f] border border-slate-800 shadow-xl">
          <FunctionAnimation />
        </div>
      </section>

      {/* 10.2 Syntax & Default Values */}
      <section id="sec-10-2" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            10.2
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Declaration, Parameters & Return Values", "ফাংশন তৈরি, প্যারামিটার ও রিটার্ন ভ্যালু")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-5 rounded-2xl bg-[#111425] border border-amber-500/30 space-y-3">
            <span className="text-amber-400 font-bold text-sm block">PHP Function Syntax</span>
            <pre className="text-slate-200 leading-relaxed">
{`function calculateBill($price, $qty = 1) {
    // $qty defaults to 1 if not passed
    $total = $price * $qty;
    return $total; // Hand result back
}

echo "Bill: $" . calculateBill(50, 3);
// Output: Bill: $150`}
            </pre>
          </div>

          <div className="p-5 rounded-2xl bg-[#111425] border border-cyan-500/30 space-y-3">
            <span className="text-cyan-400 font-bold text-sm block">JavaScript Equivalent</span>
            <pre className="text-slate-200 leading-relaxed">
{`function calculateBill(price, qty = 1) {
    const total = price * qty;
    return total;
}

console.log("Bill: $" + calculateBill(50, 3));
// Output: Bill: $150`}
            </pre>
          </div>
        </div>
      </section>

      {/* 10.5 Variable Scope (Local vs Global) */}
      <section id="sec-10-5" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-500 text-white font-black flex items-center justify-center text-sm font-mono">
            10.5
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Variable Scope: Local vs Global Boundaries", "ভেরিয়েবল স্কোপ: লোকাল বনাম গ্লোবাল সীমানা")}
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1222] border border-slate-800 space-y-3 text-xs leading-relaxed text-slate-300">
          <p>
            {t(
              "Variables declared inside a function are strictly LOCAL to that function. They disappear as soon as the function finishes execution.",
              "ফাংশনের ভেতর তৈরি হওয়া ভেরিয়েবল সম্পূর্ণ লোকাল (ব্যক্তিগত)। ফাংশন শেষ হওয়ার সাথে সাথেই তারা মেমোরি থেকে মুছে যায়।"
            )}
          </p>
          <div className="p-3.5 rounded-xl bg-[#080a14] border border-slate-800 font-mono text-[11px] text-amber-300">
            $outside = "Global";<br />
            function test() &#123;<br />
            &nbsp;&nbsp;// $outside is NOT automatically visible inside in PHP unless passed as param or using 'global $outside'!<br />
            &#125;
          </div>
        </div>
      </section>

      {/* Module 10 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 10 Complete", "মডিউল ১০ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Objects & Classes (OOP from Zero: Blueprints & $this->)", "পরবর্তী: অবজেক্ট ও ক্লাস (OOP ব্লুপ্রিন্ট ও $this-> এর ব্যবহার)")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 11", "মডিউল ১১-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module10Functions;
