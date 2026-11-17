import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  GitBranch,
  Check,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';
import { IfElseAnimation } from '../animations/IfElseAnimation';

export function Module8Conditions({ onNextModule }) {
  const { lang, t } = useLanguage();
  const [testScore, setTestScore] = useState(85);

  const getGrade = (s) => {
    if (s >= 80) return { letter: "A+", color: "text-emerald-400", bg: "border-emerald-500/40 bg-emerald-950/20" };
    if (s >= 60) return { letter: "B", color: "text-cyan-400", bg: "border-cyan-500/40 bg-cyan-950/20" };
    if (s >= 40) return { letter: "C", color: "text-amber-400", bg: "border-amber-500/40 bg-amber-950/20" };
    return { letter: "F", color: "text-red-400", bg: "border-red-500/40 bg-red-950/20" };
  };

  const currentGrade = getGrade(testScore);

  return (
    <div className="space-y-12">
      {/* Module 8 Hero */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0e1628] via-[#0d1020] to-[#1a1226] border border-blue-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t("MODULE 08 · LOGICAL CONTROL", "মডিউল ০৮ · লজিক্যাল কন্ট্রোল")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Conditional Statements: Making Decisions in Code",
              "শর্ত ও সিদ্ধান্ত গ্রহণ: কোডের বুদ্ধিমত্তা"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "A program that executes the same lines every time is rigid. Learn how if, else, elseif, switch, and PHP 8's match expression allow your server to make smart decisions.",
              "সবসময় একই কোড চালালে সফটওয়্যার বুদ্ধিহীন হয়ে পড়ে। if, else, elseif এবং আধুনিক match এক্সপ্রেশন ব্যবহার করে কোডকে সিদ্ধান্ত নেওয়ার ক্ষমতা দিন।"
            )}
          </p>
        </div>
      </div>

      {/* 8.1 Decision Tree Analogy & Concept Visualizer */}
      <section id="sec-8-1" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            8.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("The Decision Tree Analogy & Visualizer", "সিদ্ধান্তের উপমা ও ভিজ্যুয়াল সিমুলেটর")}
          </h2>
        </div>
        <div className="p-5 rounded-2xl bg-[#0e111f] border border-slate-800 shadow-xl">
          <IfElseAnimation />
        </div>
      </section>

      {/* 8.2 if / elseif / else Syntax & Interactive Simulator */}
      <section id="sec-8-2" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            8.2
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Interactive Decision Simulator: Student Grading", "ইন্টারেক্টিভ সিদ্ধান্ত সিমুলেটর: রেজাল্ট গ্রেডিং")}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-mono text-xs">
            {/* PHP Code */}
            <div className="p-4 rounded-xl bg-[#080a14] border border-amber-900/40 space-y-2">
              <span className="text-amber-400 font-bold">// PHP Code:</span>
              <pre className="text-slate-200 leading-relaxed">
{`$score = ${testScore};

if ($score >= 80) {
    $grade = "A+";
} elseif ($score >= 60) {
    $grade = "B";
} elseif ($score >= 40) {
    $grade = "C";
} else {
    $grade = "F";
}

echo "Final Grade: " . $grade;`}
              </pre>
            </div>

            {/* Interactive Slider & Result Box */}
            <div className="space-y-4 font-sans">
              <div className="p-4 rounded-xl bg-[#13172b] border border-slate-800 space-y-2">
                <label className="text-xs text-slate-300 font-bold flex justify-between">
                  <span>{t("Drag Exam Score:", "স্কোর পরিবর্তন করুন:")}</span>
                  <span className="font-mono text-amber-400 text-sm">{testScore} / 100</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={testScore}
                  onChange={(e) => setTestScore(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div className={`p-4 rounded-xl border ${currentGrade.bg} text-center space-y-1`}>
                <span className="text-xs text-slate-400 block font-mono">Result Evaluated:</span>
                <span className={`text-3xl font-black ${currentGrade.color} font-mono block`}>
                  Grade: {currentGrade.letter}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.4 PHP 8 Match Expression */}
      <section id="sec-8-4" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-500 text-white font-black flex items-center justify-center text-sm font-mono">
            8.4
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Modern PHP 8+ Match Expression (Clean & Strict)", "আধুনিক PHP 8 match এক্সপ্রেশন")}
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1222] border border-slate-800 space-y-3 font-mono text-xs">
          <p className="font-sans text-xs text-slate-300">
            {t(
              "PHP 8 introduced 'match', which returns a value directly, checks strictly (===), and does not require error-prone 'break' statements like traditional switch:",
              "পিএইচপি ৮ এ নতুন 'match' এক্সপ্রেশন যুক্ত হয়েছে। এটি সরাসরি মান রিটার্ন করে, কঠোরভাবে (===) চেক করে এবং break লেখার ঝামেলা নেই:"
            )}
          </p>

          <pre className="p-4 rounded-xl bg-[#060810] border border-purple-900/40 text-purple-300 leading-relaxed overflow-x-auto">
{`$status = 200;

$message = match($status) {
    200, 201 => 'Request Successful',
    404      => 'Page Not Found',
    500      => 'Internal Server Error',
    default  => 'Unknown Status'
};

echo $message; // Request Successful`}
          </pre>
        </div>
      </section>

      {/* Module 8 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 8 Complete", "মডিউল ৮ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Loops & Iteration (for, while & foreach Deep Dive)", "পরবর্তী: লুপ ও পুনরাবৃত্তি (for, while ও foreach লুপের গভীরে)")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 9", "মডিউল ৯-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module8Conditions;
