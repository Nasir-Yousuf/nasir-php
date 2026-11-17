import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  Layers, 
  Code2, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Copy,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';

export function Module5Variables({ onNextModule }) {
  const { lang, t } = useLanguage();
  const [boxValue, setBoxValue] = useState("Nasir");
  const [boxType, setBoxType] = useState("string");
  const [copiedCode, setCopiedCode] = useState(false);

  const dataTypes = [
    {
      name: "1. String (Text)",
      nameBn: "১. স্ট্রিং (টেক্সট / লেখা)",
      phpExample: `$city = "Dhaka";`,
      jsExample: `const city = "Dhaka";`,
      phpOutput: "string(5) \"Dhaka\"",
      analogy: "A written note or letter enclosed in quotes.",
      analogyBn: "কোটেশনের ভেতর রাখা যেকোনো নাম, বাক্য বা টেক্সট।"
    },
    {
      name: "2. Integer (Whole Number)",
      nameBn: "২. ইন্টিজার (পূর্ণসংখ্যা)",
      phpExample: `$age = 22;`,
      jsExample: `const age = 22;`,
      phpOutput: "int(22)",
      analogy: "A whole number without any decimal point (e.g. counting students or steps).",
      analogyBn: "দশমিক ছাড়া যেকোনো ধনাত্মক বা ঋণাত্মক পূর্ণসংখ্যা।"
    },
    {
      name: "3. Float / Double (Decimal)",
      nameBn: "৩. ফ্লোট / ডাবল (দশমিক সংখ্যা)",
      phpExample: `$gpa = 3.85;`,
      jsExample: `const gpa = 3.85;`,
      phpOutput: "float(3.85)",
      analogy: "Prices with cents or precise scientific measurements.",
      analogyBn: "টাকা-পয়সা বা নিখুঁত পরিমাপের দশমিক যুক্ত সংখ্যা।"
    },
    {
      name: "4. Boolean (True / False)",
      nameBn: "৪. বুলিয়ান (সত্য বা মিথ্যা)",
      phpExample: `$isEnrolled = true;`,
      jsExample: `const isEnrolled = true;`,
      phpOutput: "bool(true)",
      analogy: "A light switch that can only be either ON (true) or OFF (false).",
      analogyBn: "বৈদ্যুতিক সুইচের মতো, যার মান শুধুমাত্র সত্য (true) অথবা মিথ্যা (false)।"
    },
    {
      name: "5. Array (Collection)",
      nameBn: "৫. অ্যারে (তালিকা)",
      phpExample: `$skills = ["PHP", "JS"];`,
      jsExample: `const skills = ["PHP", "JS"];`,
      phpOutput: "array(2) { [0]=> string(3) \"PHP\" ... }",
      analogy: "An egg carton or shopping list holding multiple items in one place.",
      analogyBn: "বাজারের ফর্দ যেখানে একসাথে অনেকগুলো তথ্য ক্রমানুসারে রাখা হয়।"
    },
    {
      name: "6. Object (Custom Entity)",
      nameBn: "৬. অবজেক্ট (সত্তা)",
      phpExample: `$car = new Car();`,
      jsExample: `const car = new Car();`,
      phpOutput: "object(Car)#1 (0) {}",
      analogy: "A real-world entity with internal properties and actions.",
      analogyBn: "নির্দিষ্ট বৈশিষ্ট্য ও মেথডযুক্ত বাস্তব সত্তা।"
    },
    {
      name: "7. NULL (Intentional Absence)",
      nameBn: "৭. নাল (খালি মান)",
      phpExample: `$empty = null;`,
      jsExample: `const empty = null;`,
      phpOutput: "NULL",
      analogy: "An empty labelled container holding nothing yet.",
      analogyBn: "একটি খালি পাত্র যাতে এখনও কোনো মান রাখা হয়নি।"
    },
    {
      name: "8. Resource (Special Handle)",
      nameBn: "৮. রিসোর্স (বিশেষ হ্যান্ডেল)",
      phpExample: `$fp = fopen("log.txt", "r");`,
      jsExample: `// Not present in JavaScript`,
      phpOutput: "resource(stream)",
      analogy: "A special ticket or handle pointing to an open file or database socket.",
      analogyBn: "খোলা ফাইল বা ডাটাবেজ সকেটের বিশেষ রেফারেন্স।"
    }
  ];

  const handleUpdateBox = (val) => {
    setBoxValue(val);
    if (!isNaN(val) && val.trim() !== '') {
      setBoxType(val.includes('.') ? 'float' : 'integer');
    } else if (val.toLowerCase() === 'true' || val.toLowerCase() === 'false') {
      setBoxType('boolean');
    } else if (val.toLowerCase() === 'null') {
      setBoxType('null');
    } else {
      setBoxType('string');
    }
  };

  return (
    <div className="space-y-12">
      {/* Module 5 Hero */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0e1c14] via-[#0d1020] to-[#121828] border border-emerald-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-bold">
            <Box className="w-3.5 h-3.5" />
            <span>{t("MODULE 05 · DATA STORAGE IN RAM", "মডিউল ০৫ · মেমোরিতে ডাটা ধারণ")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Variables and Data Types: The Labelled Box",
              "ভেরিয়েবল ও ডাটা টাইপসমূহ: লেবেলযুক্ত বাক্স"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "How does a computer remember a student's name, age, or GPA during script execution? Meet the concept of variables: labelled containers in RAM, guarded by PHP's mandatory '$' symbol.",
              "কম্পিউটার কীভাবে কোড চলার সময় শিক্ষার্থীর নাম, বয়স বা জিপিএ মনে রাখে? ভেরিয়েবল হলো র‍্যামের ভেতরে রাখা নামযুক্ত বাক্স, যার প্রতিটি নাম পিএইচপিতে '$' দিয়ে শুরু হয়।"
            )}
          </p>
        </div>
      </div>

      {/* Lesson 5.1: The Labelled Box Analogy & Interactive Box */}
      <section id="sec-5-1" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            5.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("What is a Variable? (The Labelled Box Analogy)", "ভেরিয়েবল কী? (লেবেলযুক্ত বাক্সের উপমা)")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 space-y-3">
            <h4 className="text-base font-bold text-white">
              {t("A Label on the Outside, A Value on the Inside", "বাইরে নাম বা লেবেল, ভেতরে রক্ষিত মান")}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t(
                "Imagine you have a cardboard box. On the outside you write the label '$name'. Inside the box you place a slip of paper containing 'Nasir'. Later, you can open the box, throw away 'Nasir', and place 'Rahim' inside. The label stays the same, but the variable's value changed!",
                "একটি কাগজের বাক্সের কথা ভাবুন। বাক্সের গায়ে মার্কার দিয়ে লিখলেন '$name'। বাক্সের ভেতরে চিরকুট রাখলেন 'Nasir'। পরবর্তীতে যেকোনো সময় আপনি চিরকুট বদলে 'Rahim' রাখতে পারেন। বাক্সের লেবেল একই থাকে, ভেতরের মান পরিবর্তন হয়!"
              )}
            </p>
          </div>

          {/* Interactive Live Labelled Box */}
          <div className="p-6 rounded-2xl bg-[#12162a] border border-emerald-500/30 text-center space-y-4 shadow-xl">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
              {t("Interactive Box Simulator", "ইন্টারেক্টিভ বাক্স সিমুলেটর")}
            </span>

            <div className="relative max-w-xs mx-auto p-6 rounded-2xl bg-[#090d18] border-2 border-emerald-400/60 shadow-2xl space-y-2">
              <span className="px-2.5 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-mono font-black inline-block">
                Label: $student
              </span>
              <div className="text-2xl font-black text-white font-mono break-all py-2">
                "{boxValue}"
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 inline-block">
                Type: {boxType.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2">
              <input
                type="text"
                value={boxValue}
                onChange={(e) => handleUpdateBox(e.target.value)}
                placeholder="Change box value..."
                className="px-3 py-1.5 rounded-lg bg-[#070912] border border-slate-700 text-xs text-white font-mono focus:border-emerald-400 focus:outline-none"
              />
              <span className="text-[11px] text-slate-400">
                {t("Type anything to update the box!", "বাক্সের মান বদলে দেখুন!")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 5.2: The Mandatory '$' Rule */}
      <section id="sec-5-2" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            5.2
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("The Golden Rule: '$' in PHP vs 'let/const' in JavaScript", "সুবর্ণ নিয়ম: PHP তে '$' বনাম JS তে 'let/const'")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#111426] border border-amber-500/40 space-y-3 font-mono text-xs">
            <span className="text-amber-400 font-bold text-sm block">PHP Variable Syntax</span>
            <pre className="text-slate-200 leading-relaxed overflow-x-auto">
{`// EVERY PHP variable starts with '$':
$name = "Nasir"; // Valid
$age = 22;       // Valid

// Value reassignment:
$age = 23;       // Age is now 23!

// COMMON ERROR:
age = 25; // FATAL ERROR: Undefined constant 'age'`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#0a0d18] text-[11px] font-sans text-amber-200">
              <strong>Warning:</strong> {t("Forgetting '$' in PHP is the single most common syntax error beginners make!", "পিএইচপিতে '$' দিতে ভুলে যাওয়া সবচেয়ে সাধারণ এরর!")}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#111426] border border-cyan-500/40 space-y-3 font-mono text-xs">
            <span className="text-cyan-400 font-bold text-sm block">JavaScript Equivalent</span>
            <pre className="text-slate-200 leading-relaxed overflow-x-auto">
{`// JS uses 'const' (immutable) or 'let' (mutable):
const name = "Nasir"; // Cannot reassign
let age = 22;

// Value reassignment:
age = 23; // Valid

// JS does NOT use '$' prefix for declarations.`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#0a0d18] text-[11px] font-sans text-cyan-200">
              <strong>Comparison:</strong> {t("In JS, 'const' prevents reassignment. In PHP, variables can always be reassigned unless declared as define() constants.", "জেএস এ const মান পরিবর্তন রোধ করে। পিএইচপিতে সাধারণ ভেরিয়েবল সবসময় পরিবর্তনশীল।")}
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 5.3: The 8 Core PHP Data Types */}
      <section id="sec-5-3" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-500 text-white font-black flex items-center justify-center text-sm font-mono">
            5.3
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("The 8 Core PHP Data Types with Examples", "পিএইচপির ৮টি মৌলিক ডাটা টাইপ ও উদাহরণ")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {dataTypes.map((dt, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#111425] border border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-white">{lang === 'bn' ? dt.nameBn : dt.name}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{lang === 'bn' ? dt.analogyBn : dt.analogy}</p>
              </div>

              <div className="p-2 rounded bg-[#070912] border border-slate-800 font-mono text-[11px] text-emerald-400 truncate">
                {dt.phpExample}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lesson 5.4: Inspecting Types (var_dump vs typeof) */}
      <section id="sec-5-4" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-yellow-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            5.4
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Inspecting Data Types: var_dump() & gettype() vs typeof", "ডাটা টাইপ পরীক্ষা: var_dump() ও gettype() বনাম typeof")}
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-[#0d1020] border border-slate-800 font-mono text-xs space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-[#060810] border border-amber-900/40 space-y-2">
              <span className="text-amber-400 font-bold block">// PHP var_dump() displays type AND value:</span>
              <pre className="text-slate-300">
{`$price = 45.50;
var_dump($price); 
// Output: float(45.5)

gettype($price);  
// Output: "double"`}
              </pre>
            </div>

            <div className="p-3.5 rounded-xl bg-[#060810] border border-cyan-900/40 space-y-2">
              <span className="text-cyan-400 font-bold block">// JavaScript typeof operator:</span>
              <pre className="text-slate-300">
{`const price = 45.50;
console.log(typeof price);
// Output: "number" (JS does not distinguish float)`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Module 5 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 5 Complete", "মডিউল ৫ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Strings & Operators (Dot Concatenation '.' and Strict '===')", "পরবর্তী: স্ট্রিং ও অপারেটরসমূহ (ডট কনক্যাটেনেশন ও কঠোর তুলনা '===')")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 6", "মডিউল ৬-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module5Variables;
