import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

export function ViewEngineAnimation() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1,
      fn: "ob_start()",
      title: "1. Trap Output in RAM Buffer",
      titleBn: "১. র‍্যাম বাফারে আউটপুট আটকে রাখা",
      desc: "Starts PHP's output buffering. Nothing is sent to the browser yet — all echoes stay in server RAM!",
      descBn: "আউটপুট বাফারিং চালু করে। ব্রাউজারে এখনো কিছু যায় না, সব সার্ভারের র‍্যাম বাফারে জমা থাকে।"
    },
    {
      num: 2,
      fn: "extract($data)",
      title: "2. The Magic Variable Unpacker",
      titleBn: "২. ম্যাজিক ভেরিয়েবল আনপ্যাকার",
      desc: "Converts ['students' => $arr] into a real local variable $students so the template can use it directly!",
      descBn: "['students' => $arr] কে সরাসরি $students ভেরিয়েবলে পরিণত করে যাতে টেমপ্লেটে সরাসরি ব্যবহার করা যায়!"
    },
    {
      num: 3,
      fn: "include $filePath",
      title: "3. Execute Template in Buffer",
      titleBn: "৩. বাফারের মধ্যে টেমপ্লেট এক্সিকিউট করা",
      desc: "Runs views/home.php with the newly extracted $students variable. HTML output goes into the RAM buffer.",
      descBn: "views/home.php ফাইলটি রান করে। তৈরি হওয়া HTML মেমরি বাফারে জমা হতে থাকে।"
    },
    {
      num: 4,
      fn: "ob_get_clean()",
      title: "4. Capture HTML String & Clean Buffer",
      titleBn: "৪. পূর্ণাঙ্গ HTML স্ট্রিং নিয়ে বাফার খালি করা",
      desc: "Captures the entire compiled HTML document into $view variable and clears the RAM buffer.",
      descBn: "পুরো তৈরি হওয়া HTML কে $view ভেরিয়েবলে নিয়ে র‍্যাম বাফারটি পরিষ্কার করে ফেলে।"
    },
    {
      num: 5,
      fn: "print $view",
      title: "5. Flush Final HTML to Browser",
      titleBn: "৫. ব্রাউজারে পূর্ণাঙ্গ HTML পাঠানো",
      desc: "Flushes the clean, complete HTML document across HTTP to the user's browser!",
      descBn: "সবশেষে তৈরি হওয়া সম্পূর্ণ HTML একবারে ব্রাউজারে পাঠিয়ে দেওয়া হয়!"
    }
  ];

  const current = steps[activeStep - 1];

  return (
    <AnimationCanvas
      title="How the 10-Line View Engine Compiles Templates in RAM"
      titleBn="১০ লাইনের ভিউ ইঞ্জিন যেভাবে মেমরিতে টেমপ্লেট প্রস্তুত করে"
      subtitle={`Step ${activeStep} of 5: ${current.fn} — ${current.desc}`}
      subtitleBn={`ধাপ ${activeStep}/৫: ${current.fn} — ${current.descBn}`}
      badge="View Engine Internal Architecture"
      badgeBn="ভিউ ইঞ্জিনের ভেতরের মেকানিজম"
      stepInfo={`Step ${activeStep}/5`}
    >
      <div className="w-full max-w-2xl flex flex-col gap-4 py-1">
        {/* 5-Step Stepper Bar */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {steps.map(s => {
            const isActive = activeStep === s.num;
            const isPast = activeStep > s.num;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStep(s.num)}
                className={`p-2 rounded-xl border text-center transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 ring-2 ring-cyan-400/40 shadow-lg'
                    : isPast
                    ? 'bg-[#181d30] border-cyan-500/30 text-slate-300'
                    : 'bg-[#101424] border-slate-800 text-slate-500 hover:text-slate-300'
                }`}
              >
                <div className="text-[10px] font-mono font-bold block">
                  Step {s.num}
                </div>
                <div className="text-[10px] font-mono font-bold truncate text-amber-300">
                  {s.fn.split('(')[0]}()
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Visual Explainer */}
        <div className="p-4 rounded-2xl bg-[#141828] border-2 border-cyan-500/40 space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1.5">
              <Wrench className="w-4 h-4" />
              <span>{t(current.title, current.titleBn)}</span>
            </span>
            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
              {current.fn}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
            {t(current.desc, current.descBn)}
          </p>

          {/* Code highlight for this step */}
          <div className="p-3 rounded-xl bg-[#0a0d16] font-mono text-xs border border-slate-800 text-slate-300">
            {activeStep === 1 && <span className="text-amber-300">ob_start(); <span className="text-slate-500">// Buffer active in RAM</span></span>}
            {activeStep === 2 && <span className="text-amber-300">extract($data); <span className="text-slate-500">// ['students' =&gt; $arr] becomes $students</span></span>}
            {activeStep === 3 && <span className="text-amber-300">include $filePath; <span className="text-slate-500">// Evaluates views/home.php with $students</span></span>}
            {activeStep === 4 && <span className="text-amber-300">$view = ob_get_clean(); <span className="text-slate-500">// Grabs compiled HTML string</span></span>}
            {activeStep === 5 && <span className="text-emerald-400 font-bold">if ($print) &#123; print $view; &#125; <span className="text-slate-500">// Sends to browser!</span></span>}
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
