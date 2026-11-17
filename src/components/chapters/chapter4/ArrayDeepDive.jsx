import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  Layers, 
  Code2, 
  Play, 
  Sparkles, 
  Repeat, 
  Brackets, 
  Check, 
  Info,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../../contexts/LanguageContext';

export function ArrayDeepDive() {
  const { lang, t } = useLanguage();
  const [activeLoopIndex, setActiveLoopIndex] = useState(-1);
  const [isLooping, setIsLooping] = useState(false);

  const studentsList = [
    { name: "Nasir", age: 22, dept: "English" },
    { name: "Rahim", age: 23, dept: "CSE" },
    { name: "Karim", age: 21, dept: "Business" }
  ];

  const handleSimulateLoop = () => {
    setIsLooping(true);
    let idx = 0;
    setActiveLoopIndex(0);
    const interval = setInterval(() => {
      idx++;
      if (idx < studentsList.length) {
        setActiveLoopIndex(idx);
      } else {
        clearInterval(interval);
        setIsLooping(false);
        setActiveLoopIndex(-1);
        try {
          confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
        } catch (e) {}
      }
    }, 800);
  };

  return (
    <div className="space-y-8">
      {/* 4.0 The Problem: 100 Variables vs 1 Array */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/30 via-[#131628] to-blue-950/30 border border-amber-500/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 font-bold text-xl">
            [ ]
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block mb-1">
              {t("WHY ARRAYS EXIST", "অ্যারে কেন প্রয়োজন?")}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {t("Imagine We Have 100 Students. Do We Want 100 Separate Variables?", "ভাবুন তো, আমাদের ১০০ জন শিক্ষার্থী আছে। আমরা কি ১০০টি আলাদা ভেরিয়েবল বানাব?")}
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {t(
                "Writing $student1 = 'Nasir', $student2 = 'Rahim'... $student100 = 'Kamal' is impossible to manage, loop through, or search! Arrays solve this by storing multiple values inside a single organized container variable.",
                "$student1 = 'Nasir', $student2 = 'Rahim'... এভাবে ১০০টি আলাদা ভেরিয়েবল তৈরি করা অসম্ভব ও বিশৃঙ্খল! অ্যারে একটি মাত্র চলকের ভেতর শত শত ডাটা ক্রমানুসারে সংরক্ষণ করতে পারে।"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* 4.1 & 4.2 Side by Side Comparison: Indexed Arrays */}
      <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              {t("Side-by-Side Comparison", "পাশাপাশি ব্যাকরণ তুলনা")}
            </span>
            <h4 className="text-lg font-bold text-white">
              {t("Indexed Arrays: Ordered Lists by Numeric Indices (0, 1, 2...)", "ইনডেক্সড অ্যারে: সংখ্যাযুক্ত ক্রমিক তালিকা")}
            </h4>
          </div>
          <span className="text-xs font-mono text-slate-400">Zero-Based Indexing</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* PHP Side */}
          <div className="p-4 rounded-xl bg-[#13162b] border border-amber-500/30 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-amber-300 font-bold border-b border-slate-800 pb-2">
              <span>PHP (Indexed Array)</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">php</span>
            </div>
            <pre className="text-slate-200 overflow-x-auto leading-relaxed">
{`// PHP array with '$' prefix:
$fruits = ["Apple", "Mango", "Banana"];

// Access by index (0-based):
echo $fruits[0]; // Apple

// Count total elements:
echo count($fruits); // 3

// Debug print structure:
print_r($fruits);`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#0b0e1b] border border-slate-800 text-[11px] font-sans text-slate-300">
              <strong className="text-amber-300">Key rule:</strong> {t("In PHP, use count($fruits) for length, and echo outputs directly to the web response.", "PHP তে সাইজ মাপতে count() এবং আউটপুট দিতে echo ব্যবহার করা হয়।")}
            </div>
          </div>

          {/* JS Side */}
          <div className="p-4 rounded-xl bg-[#13162b] border border-cyan-500/30 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-cyan-300 font-bold border-b border-slate-800 pb-2">
              <span>JavaScript (Array)</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300">js</span>
            </div>
            <pre className="text-slate-200 overflow-x-auto leading-relaxed">
{`// JS array with 'const' / 'let':
const fruits = ["Apple", "Mango", "Banana"];

// Access by index (0-based):
console.log(fruits[0]); // Apple

// Total length property:
console.log(fruits.length); // 3

// Debug print in console:
console.table(fruits);`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#0b0e1b] border border-slate-800 text-[11px] font-sans text-slate-300">
              <strong className="text-cyan-300">Key rule:</strong> {t("In JS, use fruits.length (property), and console.log logs to developer tools.", "JS এ fruits.length প্রোপার্টি দিয়ে সাইজ জানা যায় এবং console.log ব্রাউজার কনসোলে প্রিন্ট করে।")}
            </div>
          </div>
        </div>
      </div>

      {/* 4.5 Associative Arrays (PHP) vs Objects (JS) */}
      <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
              {t("Named Keys (Dictionaries)", "নামযুক্ত কি / ডিকশনারি")}
            </span>
            <h4 className="text-lg font-bold text-white">
              {t("PHP Associative Arrays (=>) vs JavaScript Objects ({})", "PHP অ্যাসোসিয়েটিভ অ্যারে বনাম জাভাস্ক্রিপ্ট অবজেক্ট")}
            </h4>
          </div>
          <span className="text-xs font-mono text-amber-300">Key-Value Pairs</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* PHP Associative */}
          <div className="p-4 rounded-xl bg-[#13162b] border border-purple-500/30 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-purple-300 font-bold border-b border-slate-800 pb-2">
              <span>PHP: Associative Array</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-400/20 text-purple-300">=&gt; Fat Arrow</span>
            </div>
            <pre className="text-slate-200 overflow-x-auto leading-relaxed">
{`$student = [
  "name" => "Nasir",
  "age" => 22,
  "department" => "English"
];

// Access using square brackets and string key:
echo $student["name"]; // Nasir`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#0b0e1b] border border-slate-800 text-[11px] font-sans text-slate-300">
              <strong className="text-purple-300">Crucial Concept:</strong> {t("In PHP, associative arrays are ordered hash maps. Keys can be integers or strings, and arrays are value types.", "PHP তে অ্যাসোসিয়েটিভ অ্যারে হলো ordered map যেখানে 'key' => 'value' জোড়ায় তথ্য থাকে।")}
            </div>
          </div>

          {/* JS Object */}
          <div className="p-4 rounded-xl bg-[#13162b] border border-emerald-500/30 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-slate-800 pb-2">
              <span>JavaScript: Object</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300">: Colon</span>
            </div>
            <pre className="text-slate-200 overflow-x-auto leading-relaxed">
{`const student = {
  name: "Nasir",
  age: 22,
  department: "English"
};

// Access using dot notation or brackets:
console.log(student.name);     // Nasir
console.log(student["name"]); // Nasir`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#0b0e1b] border border-slate-800 text-[11px] font-sans text-slate-300">
              <strong className="text-emerald-300">Crucial Concept:</strong> {t("In JS, objects and arrays are distinct types. Objects use dot notation (student.name), while arrays use indices.", "JS এ Object এবং Array দুটি সম্পূর্ণ ভিন্ন ডাটা টাইপ। অবজেক্টে ডট নোটেশন (student.name) ব্যবহার করা যায়।")}
            </div>
          </div>
        </div>
      </div>

      {/* 4.7 Looping Through Arrays Simulator */}
      <div className="p-6 rounded-2xl bg-[#101426] border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              {t("Animated Loop Simulator", "অ্যানিমেটেড লুপ সিমুলেটর")}
            </span>
            <h4 className="text-lg font-bold text-white">
              {t("Iterating Elements: PHP foreach vs JavaScript forEach", "উপাদান ঘুরিয়ে দেখা: PHP foreach বনাম JS forEach")}
            </h4>
          </div>

          <button
            onClick={handleSimulateLoop}
            disabled={isLooping}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-black text-xs transition-all shadow-md shadow-emerald-500/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isLooping ? t("Loop Running...", "লুপ ঘুরছে...") : t("Run Loop Iteration", "লুপ চালান")}</span>
          </button>
        </div>

        {/* Visual Cards Scanner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {studentsList.map((st, idx) => {
            const isCurrent = activeLoopIndex === idx;
            return (
              <motion.div
                key={idx}
                animate={{
                  scale: isCurrent ? 1.05 : 1,
                  borderColor: isCurrent ? '#10B981' : '#334155'
                }}
                className={`p-4 rounded-xl border transition-all ${
                  isCurrent ? 'bg-emerald-950/40 shadow-lg ring-1 ring-emerald-400' : 'bg-[#141829]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Index [{idx}]
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-400 text-slate-950 flex items-center gap-1">
                      <Repeat className="w-3 h-3 animate-spin" /> ACTIVE
                    </span>
                  )}
                </div>
                <h5 className="font-bold text-white text-sm">{st.name}</h5>
                <div className="text-xs text-slate-300 font-mono mt-1">
                  Age: {st.age} · Dept: {st.dept}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-mono">
          <div className="p-3 rounded-lg bg-[#0a0c16] border border-slate-800">
            <span className="text-amber-400 block mb-1 font-bold">// PHP Syntax:</span>
            <code className="text-slate-300">
              foreach ($students as $student) &#123; echo $student['name']; &#125;
            </code>
          </div>
          <div className="p-3 rounded-lg bg-[#0a0c16] border border-slate-800">
            <span className="text-cyan-400 block mb-1 font-bold">// JavaScript Syntax:</span>
            <code className="text-slate-300">
              students.forEach(student =&gt; console.log(student.name));
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArrayDeepDive;
