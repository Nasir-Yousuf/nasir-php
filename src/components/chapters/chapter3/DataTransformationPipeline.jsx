import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  FileCode2, 
  Brackets, 
  Globe, 
  CheckCircle2, 
  Sparkles,
  Info,
  Code2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../../contexts/LanguageContext';

export function DataTransformationPipeline() {
  const { lang, t } = useLanguage();
  const [activeStage, setActiveStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const stages = [
    {
      id: 0,
      title: "1. MySQL Relational Table",
      titleBn: "১. MySQL ডাটাবেজ টেবিল",
      tech: "MySQL Storage Engine",
      color: "border-purple-500/60 text-purple-400 bg-purple-950/20",
      description: "Data is stored on SSD disk as indexed 2D binary records in the 'students' table.",
      descriptionBn: "ডাটাবেজ হার্ডডিস্কে বাইনারি ও ইনডেক্স আকারে স্টুডেন্টস টেবিলে জমা থাকে।",
      codePreview: `+----+-------+-----+
| id | name  | age |
+----+-------+-----+
|  1 | Nasir |  22 |
|  2 | Rahim |  23 |
+----+-------+-----+`,
      type: "table"
    },
    {
      id: 1,
      title: "2. SQL Query Execution",
      titleBn: "২. SQL কুয়েরি এক্সিকিউশন",
      tech: "PDO Socket Query",
      color: "border-blue-500/60 text-blue-400 bg-blue-950/20",
      description: "PHP sends 'SELECT * FROM students' through PDO driver over local socket port 3306.",
      descriptionBn: "PHP ডাটাবেজের সাথে যোগাযোগ করে SQL কমান্ড পাঠায়।",
      codePreview: `$stmt = $pdo->query("SELECT * FROM students");
// Raw database cursor ready in driver memory`,
      type: "sql"
    },
    {
      id: 2,
      title: "3. PHP Associative Array",
      titleBn: "৩. PHP অ্যাসোসিয়েটিভ অ্যারে",
      tech: "PDO::FETCH_ASSOC",
      color: "border-amber-400/60 text-amber-300 bg-amber-950/20",
      description: "$stmt->fetchAll(PDO::FETCH_ASSOC) parses raw rows into PHP's native nested associative array.",
      descriptionBn: "fetchAll() ফাংশন ডাটাবেজের কাঁচা রেকর্ডকে PHP অ্যারেতে রূপান্তর করে।",
      codePreview: `$students = $stmt->fetchAll(PDO::FETCH_ASSOC);

print_r($students);
/* Output:
Array (
  [0] => Array ( [id] => 1, [name] => "Nasir", [age] => 22 )
  [1] => Array ( [id] => 2, [name] => "Rahim", [age] => 23 )
)
*/`,
      type: "php"
    },
    {
      id: 3,
      title: "4. JSON HTTP Response",
      titleBn: "৪. JSON HTTP রেসপন্স",
      tech: "json_encode()",
      color: "border-emerald-500/60 text-emerald-300 bg-emerald-950/20",
      description: "PHP serializes the PHP array into universal JSON text format and sets HTTP Content-Type.",
      descriptionBn: "PHP json_encode() এর মাধ্যমে অ্যারেটিকে বিশ্বজনীন JSON টেক্সটে রূপান্তর করে।",
      codePreview: `header('Content-Type: application/json');

echo json_encode($students);

// Transmitted over HTTP wire:
// [{"id":1,"name":"Nasir","age":22},{"id":2,"name":"Rahim","age":23}]`,
      type: "json"
    },
    {
      id: 4,
      title: "5. JavaScript Array of Objects",
      titleBn: "৫. জাভাস্ক্রিপ্ট অবজেক্ট অ্যারে",
      tech: "response.json()",
      color: "border-cyan-400/60 text-cyan-300 bg-cyan-950/20",
      description: "Client browser parses the JSON string into native JavaScript objects via fetch API.",
      descriptionBn: "ব্রাউজার fetch API দিয়ে JSON টেক্সটকে জাভাস্ক্রিপ্ট অবজেক্ট ও অ্যারেতে পার্স করে।",
      codePreview: `const res = await fetch('/api/students.php');
const students = await res.json();

console.log(students[0].name); // "Nasir"
console.log(students.length);  // 2`,
      type: "js"
    },
    {
      id: 5,
      title: "6. Rendered HTML DOM Display",
      titleBn: "৬. স্ক্রিনে প্রদর্শিত HTML",
      tech: "DOM Manipulation",
      color: "border-pink-500/60 text-pink-300 bg-pink-950/20",
      description: "Browser updates the DOM and the user sees the rendered students on screen!",
      descriptionBn: "ব্রাউজার স্ক্রিনে সুন্দর কার্ড ও টেবিল রেন্ডার করে ইউজারকে ফলাফল প্রদর্শন করে।",
      codePreview: `<div class="student-card">
  <h3>Nasir (Age: 22)</h3>
  <span class="badge">Enrolled</span>
</div>
<div class="student-card">
  <h3>Rahim (Age: 23)</h3>
  <span class="badge">Enrolled</span>
</div>`,
      type: "dom"
    }
  ];

  const handleRunFlow = () => {
    setIsAnimating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < stages.length) {
        setActiveStage(step);
      } else {
        clearInterval(interval);
        setIsAnimating(false);
        try {
          confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
        } catch (e) {}
      }
    }, 900);
  };

  const handleReset = () => {
    setActiveStage(0);
    setIsAnimating(false);
  };

  const current = stages[activeStage];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-[#131628] to-purple-950/40 border border-slate-800">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 mb-1 inline-block">
          {t("THE COMPLETE DATA TRANSFORMATION JOURNEY", "ডাটা রূপান্তরের পূর্ণাঙ্গ সফর")}
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          {t("How Stored Database Rows Become PHP Arrays & JavaScript Objects", "ডাটাবেজের রেকর্ড যেভাবে PHP অ্যারে ও জাভাস্ক্রিপ্ট অবজেক্টে পরিণত হয়")}
        </h3>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          {t(
            "Databases do not store PHP arrays, and JavaScript does not read MySQL tables directly! Every piece of information travels through an exact 6-step pipeline of drivers, data structures, and serialization.",
            "ডাটাবেজ কিন্তু কোনো PHP অ্যারে জমিয়ে রাখে না, আর জাভাস্ক্রিপ্টও সরাসরি MySQL টেবিল পড়তে পারে না! তথ্য নির্দিষ্ট ৬টি রূপান্তরের মাধ্যমে ডিস্ক থেকে ব্রাউজারে আসে।"
          )}
        </p>
      </div>

      {/* Interactive Controls & Stage Stepper */}
      <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              {t("Interactive Transformation Engine", "ইন্টারেক্টিভ রূপান্তর ইঞ্জিন")}
            </span>
            <h4 className="text-lg font-bold text-white">
              {t("Click Any Stage or Click 'Run Data Flow'", "যেকোনো ধাপে ক্লিক করুন বা 'Run Data Flow' চাপুন")}
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunFlow}
              disabled={isAnimating}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FACC15] to-amber-400 hover:from-yellow-300 hover:to-amber-300 disabled:opacity-40 text-slate-950 font-black text-xs shadow-lg shadow-yellow-500/20 transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isAnimating ? t("Transforming...", "রূপান্তর চলছে...") : t("Run Data Flow 🚀", "ডাটা ফ্লো চালান 🚀")}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl bg-[#161a30] hover:bg-[#202542] text-slate-300 border border-slate-700 text-xs font-mono"
              title="Reset to Stage 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Stage Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {stages.map((st) => {
            const isSelected = st.id === activeStage;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStage(st.id)}
                className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                  isSelected 
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-lg ring-1 ring-cyan-400/50' 
                    : 'border-slate-800 bg-[#13172b] hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-400 mb-1">
                  STAGE {st.id + 1}
                </div>
                <div className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {lang === 'bn' ? st.titleBn : st.title}
                </div>
                <div className="text-[10px] font-mono text-cyan-300 truncate mt-0.5">
                  {st.tech}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Inspector */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-[#0a0c16] border border-slate-700 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block font-bold">
                {current.tech}
              </span>
              <h4 className="text-lg font-bold text-white">
                {lang === 'bn' ? current.titleBn : current.title}
              </h4>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#161a30] text-slate-300 border border-slate-700">
              Stage {activeStage + 1} of 6
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed bg-[#111425] p-3.5 rounded-xl border border-slate-800">
            {lang === 'bn' ? current.descriptionBn : current.description}
          </p>

          <div>
            <div className="text-xs font-mono text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Data Structure / Code Representation:</span>
            </div>
            <pre className="p-4 rounded-xl bg-[#05070e] border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
              {current.codePreview}
            </pre>
          </div>
        </motion.div>
      </div>

      {/* PDO Code Deep Dive Callout */}
      <div className="p-6 rounded-2xl bg-[#141829] border border-amber-500/30 space-y-4">
        <h4 className="text-base font-bold text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-amber-400" />
          {t("Line-by-Line Breakdown: The Standard PHP PDO Data Retrieval", "লাইন বাই লাইন ব্যাখ্যা: আদর্শ পিএইচপি PDO ডাটা রিট্রিভাল")}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-[#0d101e] border border-slate-800 space-y-1">
            <span className="text-amber-400 font-bold block">$stmt = $pdo-&gt;query("SELECT * FROM students");</span>
            <p className="font-sans text-slate-300 text-[11px] leading-relaxed">
              {t(
                "Executes the SQL string on the database server. Returns a PDOStatement cursor representing the queried rows on the database server.",
                "ডাটাবেজে SQL পাঠায় এবং ডাটার কার্সর তৈরি করে।"
              )}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0d101e] border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold block">$students = $stmt-&gt;fetchAll(PDO::FETCH_ASSOC);</span>
            <p className="font-sans text-slate-300 text-[11px] leading-relaxed">
              {t(
                "Pulls all records into PHP RAM as associative arrays (where keys match database column names like 'id', 'name', 'age').",
                "সব রেকর্ডকে অ্যাসোসিয়েটিভ অ্যারে (কলামের নাম কি হিসেবে) তৈরি করে পিএইচপির মেমোরিতে লোড করে।"
              )}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0d101e] border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold block">header('Content-Type: application/json');</span>
            <p className="font-sans text-slate-300 text-[11px] leading-relaxed">
              {t(
                "Informs the browser's HTTP client that the upcoming response body contains structured JSON text, not HTML.",
                "ব্রাউজারকে জানিয়ে দেয় যে ফেরত পাঠানো তথ্য সাধারণ HTML নয়, বরং সুসংগঠিত JSON ডাটা।"
              )}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0d101e] border border-slate-800 space-y-1">
            <span className="text-purple-400 font-bold block">echo json_encode($students);</span>
            <p className="font-sans text-slate-300 text-[11px] leading-relaxed">
              {t(
                "Converts the PHP associative array into a JSON formatted string and outputs it to the HTTP response stream.",
                "পিএইচপি অ্যারেকে JSON স্ট্রিং এ রূপান্তর করে রেসপন্স হিসেবে পাঠিয়ে দেয়।"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DataTransformationPipeline;
