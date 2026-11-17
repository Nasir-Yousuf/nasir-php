import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Copy,
  Check,
  Scale,
  Equal
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';

export function Module6Strings({ onNextModule }) {
  const { lang, t } = useLanguage();
  const [firstPart, setFirstPart] = useState("Nasir");
  const [secondPart, setSecondPart] = useState("Yousuf");
  const [compareVal1, setCompareVal1] = useState("5");
  const [compareVal2, setCompareVal2] = useState("5");

  return (
    <div className="space-y-12">
      {/* Module 6 Hero */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c0e18] via-[#0d1020] to-[#12162a] border border-pink-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-400/10 border border-pink-400/30 text-pink-300 font-mono text-xs font-bold">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t("MODULE 06 · TEXT & LOGIC", "মডিউল ০৬ · টেক্সট ও লজিক")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Strings & Operators: Joining Text & Making Comparisons",
              "স্ট্রিং ও অপারেটরসমূহ: লেখা জোড়া লাগানো ও তুলনা"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "Why does PHP use the DOT '.' operator to glue strings together while JavaScript uses '+'? And why is strict comparison ('===') essential to prevent security bugs?",
              "পিএইচপিতে লেখা জোড়া লাগাতে ডট '.' কেন ব্যবহৃত হয় এবং জাভাস্ক্রিপ্ট কেন '+' ব্যবহার করে? আর কেন '==' এর চেয়ে কঠোর '===' ব্যবহার করা সবসময় নিরাপদ?"
            )}
          </p>
        </div>
      </div>

      {/* Lesson 6.1: Single vs Double Quotes */}
      <section id="sec-6-1" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            6.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Single Quotes vs Double Quotes & Variable Interpolation", "সিঙ্গেল কোট বনাম ডাবল কোট ও ইন্টারপোলেশন")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-5 rounded-2xl bg-[#111425] border border-amber-500/30 space-y-2">
            <span className="text-amber-400 font-bold block text-sm">Double Quotes " " (Parses Variables)</span>
            <pre className="text-slate-200 leading-relaxed">
{`$name = "Nasir";

// Double quotes automatically read $name:
echo "Hello, $name!"; 
// Output: Hello, Nasir!`}
            </pre>
            <p className="font-sans text-slate-300 text-[11px] pt-1">
              {t("PHP inspects the string and automatically replaces $variables with their values.", "ডাবল কোটেশনের ভেতরের ভেরিয়েবলের নাম সরাসরি মানে পরিণত হয়।")}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#111425] border border-slate-700 space-y-2">
            <span className="text-slate-300 font-bold block text-sm">Single Quotes ' ' (Literal Text)</span>
            <pre className="text-slate-200 leading-relaxed">
{`$name = "Nasir";

// Single quotes treat $name literally:
echo 'Hello, $name!'; 
// Output: Hello, $name!`}
            </pre>
            <p className="font-sans text-slate-300 text-[11px] pt-1">
              {t("Faster and safer when you do not want variables parsed.", "কোনো রূপান্তর ছাড়া হুবহু টেক্সট আউটপুট দিতে সিঙ্গেল কোট দ্রুতগতির।")}
            </p>
          </div>
        </div>
      </section>

      {/* Lesson 6.2: String Concatenation */}
      <section id="sec-6-2" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            6.2
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("String Concatenation: Dot '.' in PHP vs '+' in JavaScript", "লেখা জোড়া: PHP তে '.' বনাম JS এ '+'")}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#090b16] border border-amber-900/40 space-y-2">
              <span className="text-amber-400 font-bold">// PHP Syntax (Uses DOT '.'):</span>
              <pre className="text-slate-200">
{`$first = "Nasir";
$last = "Yousuf";

$full = $first . " " . $last;
echo $full; // Nasir Yousuf`}
              </pre>
            </div>

            <div className="p-4 rounded-xl bg-[#090b16] border border-cyan-900/40 space-y-2">
              <span className="text-cyan-400 font-bold">// JavaScript Equivalent (Uses '+' or \`\`):</span>
              <pre className="text-slate-200">
{`const first = "Nasir";
const last = "Yousuf";

const full = first + " " + last;
console.log(full); // Nasir Yousuf`}
              </pre>
            </div>
          </div>

          {/* Interactive Live String Concatenator */}
          <div className="p-4 rounded-xl bg-[#141829] border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-white block">
              {t("Live String Concatenation Simulator", "লাইভ স্ট্রিং জোড়া লাগানোর সিমুলেটর")}
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <input
                type="text"
                value={firstPart}
                onChange={(e) => setFirstPart(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-[#070912] border border-slate-700 text-white w-28"
              />
              <span className="text-amber-400 font-bold text-lg">.</span>
              <span className="text-slate-400">" "</span>
              <span className="text-amber-400 font-bold text-lg">.</span>
              <input
                type="text"
                value={secondPart}
                onChange={(e) => setSecondPart(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-[#070912] border border-slate-700 text-white w-28"
              />
              <span className="text-slate-400">=</span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-bold">
                "{firstPart} {secondPart}"
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 6.4: Comparison Operators (== vs ===) */}
      <section id="sec-6-4" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-500 text-white font-black flex items-center justify-center text-sm font-mono">
            6.4
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Comparison Operators: Loose '==' vs Strict '==='", "তুলনা অপারেটর: ঢিলেঢালা '==' বনাম কঠোর '==='")}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#0a0c18] border border-amber-900/40 space-y-2">
              <span className="text-amber-400 font-bold text-sm block">Loose '==' (Checks Value Only)</span>
              <pre className="text-slate-200">
{`$a = 5;       // integer
$b = "5";     // string

var_dump($a == $b); 
// Output: bool(true) -> Dangerously loose!`}
              </pre>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0c18] border border-emerald-900/40 space-y-2">
              <span className="text-emerald-400 font-bold text-sm block">Strict '===' (Checks Value AND Type)</span>
              <pre className="text-slate-200">
{`$a = 5;       // integer
$b = "5";     // string

var_dump($a === $b); 
// Output: bool(false) -> Safe & strict!`}
              </pre>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#141829] border border-amber-500/20 text-xs text-amber-200">
            <strong>Rule of Thumb:</strong> {t("Always prefer '===' (strict) in PHP and JavaScript to prevent unexpected type juggling bugs and authentication bypasses!", "পিএইচপি ও জাভাস্ক্রিপ্ট উভয় ভাষাতেই সবসময় '===' ব্যবহার করুন যাতে অযাচিত বাগ ও নিরাপত্তা ত্রুটি এড়ানো যায়!")}
          </div>
        </div>
      </section>

      {/* Module 6 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 6 Complete", "মডিউল ৬ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Arrays Masterclass (Indexed, Associative, Multidimensional & Lab)", "পরবর্তী: অ্যারে মাস্টারক্লাস (ইনডেক্সড, অ্যাসোসিয়েটিভ, নেস্টেড ও লাইভ ল্যাব)")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 7 (Arrays)", "মডিউল ৭-এ যান (অ্যারে)")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module6Strings;
