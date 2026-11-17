import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Scale, 
  Terminal, 
  Check, 
  Copy, 
  Play, 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Layers, 
  Zap,
  HelpCircle,
  CheckCircle2,
  DollarSign,
  Server,
  Cloud,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function Module15ComparisonLab({ onRestartCourse }) {
  const { lang, t } = useLanguage();
  const [copiedTab, setCopiedTab] = useState(null);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationOutput, setSimulationOutput] = useState(null);

  const topics = [
    {
      id: "variables",
      title: "Variables & Declaration",
      titleBn: "ভেরিয়েবল ও ডিক্লারেশন",
      icon: "Box",
      phpCode: `<?php
// PHP variables always require the '$' sigil
$username = "Nasir";
$age = 22;
$isAdmin = true;

// Re-assignment
$age = 23;

echo "User: " . $username . ", Age: " . $age;
?>`,
      jsCode: `// JavaScript uses let, const, or var (no '$')
const username = "Nasir";
let age = 22;
const isAdmin = true;

// Re-assignment (let allows it, const forbids)
age = 23;

console.log(\`User: \${username}, Age: \${age}\`);`,
      phpOutput: "User: Nasir, Age: 23",
      jsOutput: "User: Nasir, Age: 23",
      differences: [
        {
          label: "Sigil Requirement",
          labelBn: "ডলার ($) চিহ্নের বাধ্যবাধকতা",
          desc: "PHP strictly requires '$' before every variable name. JS uses no symbol.",
          descBn: "PHP-তে প্রতিটি ভেরিয়েবলের শুরুতে অবশ্যই '$' দিতে হয়। JS-এ কোনো প্রতীক লাগে না।"
        },
        {
          label: "Declaration Keywords",
          labelBn: "ডিক্লারেশন কি-ওয়ার্ড",
          desc: "PHP has no 'let' or 'const' keywords for regular variables (const is only for class constants or define()).",
          descBn: "PHP-তে সাধারণ ভেরিয়েবলের জন্য let বা const কি-ওয়ার্ড নেই।"
        },
        {
          label: "Scope Rules",
          labelBn: "স্কোপ বা আওতা",
          desc: "PHP variables inside functions are strictly local unless explicitly imported with 'global'. JS has block scope (let/const) and lexical closures.",
          descBn: "PHP ফাংশনের ভেতরের ভেরিয়েবল কঠোরভাবে লোকাল। JS-এ ব্লক স্কোপ ও লেক্সিকাল ক্লোজার থাকে।"
        }
      ]
    },
    {
      id: "strings",
      title: "Strings & Concatenation",
      titleBn: "স্ট্রিং ও কনক্যাটেনেশন (জোড়া লাগানো)",
      icon: "FileText",
      phpCode: `<?php
$city = "Dhaka";
$country = "Bangladesh";

// 1. Dot operator for concatenation
$location = $city . ", " . $country;

// 2. Double-quote interpolation (variable parsing)
$greeting = "Welcome to $city!";

// 3. Single quotes do NOT interpolate
$raw = 'City is $city'; // prints literally: City is $city

echo $location . "\\n" . $greeting;
?>`,
      jsCode: `const city = "Dhaka";
const country = "Bangladesh";

// 1. Plus operator (+) or template literals
const location = city + ", " + country;

// 2. Backtick template literal interpolation
const greeting = \`Welcome to \${city}!\`;

// 3. Regular quotes (single/double) do NOT interpolate
const raw = 'City is \${city}'; // prints literally: City is \${city}

console.log(location + "\\n" + greeting);`,
      phpOutput: "Dhaka, Bangladesh\nWelcome to Dhaka!",
      jsOutput: "Dhaka, Bangladesh\nWelcome to Dhaka!",
      differences: [
        {
          label: "Concatenation Operator",
          labelBn: "জোড়া লাগানোর অপারেটর",
          desc: "PHP uses dot ('.'). JS uses plus ('+'). In PHP, '+' is mathematically strict and will attempt to add numbers!",
          descBn: "PHP-তে ডট ('.') ব্যবহার হয়, আর JS-এ প্লাস ('+')। PHP-তে '+' দিলে তা যোগ করার চেষ্টা করবে!"
        },
        {
          label: "Double Quote Magic",
          labelBn: "ডাবল কোটেশনের জাদু",
          desc: "In PHP, \"Hello $name\" automatically expands variables. In JS, variable interpolation requires backticks: `Hello ${name}`.",
          descBn: "PHP-তে ডাবল কোটেশন \"Hello $name\" দিলেই ভেরিয়েবল বসে যায়। JS-এ ব্যাকটিক `${name}` লাগে।"
        }
      ]
    },
    {
      id: "arrays",
      title: "Arrays vs Objects / Hash Maps",
      titleBn: "অ্যারে বনাম অবজেক্ট (হ্যাশ ম্যাপ)",
      icon: "Layers",
      phpCode: `<?php
// 1. Indexed Array (0, 1, 2)
$colors = ["red", "green", "blue"];
$colors[] = "yellow"; // Push new item

// 2. Associative Array (Key => Value)
$student = [
    "name" => "Nasir",
    "score" => 95,
    "passed" => true
];

// Accessing associative keys
echo $student["name"] . " got " . $student["score"];
?>`,
      jsCode: `// 1. Array (Index 0, 1, 2)
const colors = ["red", "green", "blue"];
colors.push("yellow"); // Push new item

// 2. Plain Object (Key: Value)
const student = {
    name: "Nasir",
    score: 95,
    passed: true
};

// Accessing object properties (dot or bracket)
console.log(\`\${student.name} got \${student.score}\`);`,
      phpOutput: "Nasir got 95",
      jsOutput: "Nasir got 95",
      differences: [
        {
          label: "Unified Array Type",
          labelBn: "একীভূত অ্যারে গঠন",
          desc: "In PHP, Arrays and Key-Value Maps are the EXACT same data type (an ordered hashtable). In JS, Array and Object are distinct structures.",
          descBn: "PHP-তে সাধারণ অ্যারে এবং অ্যাসোসিয়েটিভ ম্যাপ মূলত একই ডাটা স্ট্রাকচার। JS-এ Array এবং Object আলাদা।"
        },
        {
          label: "Syntax for Key => Value",
          labelBn: "কী-ভ্যালু সিনট্যাক্স",
          desc: "PHP uses the '=>' double arrow: [ 'key' => 'val' ]. JS uses colon in objects: { key: 'val' }.",
          descBn: "PHP-তে '=>' চিহ্ন ব্যবহার হয়: ['key' => 'val']। JS অবজেক্টে কোলন ব্যবহার হয়: { key: 'val' }।"
        },
        {
          label: "Pushing Elements",
          labelBn: "নতুন উপাদান যোগ করা",
          desc: "PHP uses empty square brackets: $arr[] = 'item'; JS uses the .push('item') method.",
          descBn: "PHP-তে খালি ব্র্যাকেট $arr[] = 'item'; ব্যবহার হয়। JS-এ .push('item') মেথড কল করতে হয়।"
        }
      ]
    },
    {
      id: "loops",
      title: "Loops & Foreach Iteration",
      titleBn: "লুপ ও Foreach পুনরাবৃত্তি",
      icon: "Repeat",
      phpCode: `<?php
$scores = ["Nasir" => 95, "Rahim" => 88];

// foreach with key and value
foreach ($scores as $student => $mark) {
    echo "$student: $mark pts\\n";
}

// standard for loop
for ($i = 1; $i <= 3; $i++) {
    echo "Count: $i\\n";
}
?>`,
      jsCode: `const scores = { Nasir: 95, Rahim: 88 };

// Iterating key-value pairs
for (const [student, mark] of Object.entries(scores)) {
    console.log(\`\${student}: \${mark} pts\`);
}

// standard for loop
for (let i = 1; i <= 3; i++) {
    console.log(\`Count: \${i}\`);
}`,
      phpOutput: "Nasir: 95 pts\nRahim: 88 pts\nCount: 1\nCount: 2\nCount: 3",
      jsOutput: "Nasir: 95 pts\nRahim: 88 pts\nCount: 1\nCount: 2\nCount: 3",
      differences: [
        {
          label: "Foreach Ergonomics",
          labelBn: "Foreach এর সাবলীলতা",
          desc: "PHP's foreach ($arr as $key => $val) works natively on both indexed arrays and associative dictionaries without helper methods.",
          descBn: "PHP-র foreach সরাসরি যেকোনো অ্যারে বা অ্যাসোসিয়েটিভ ম্যাপের ওপর কাজ করে, কোনো Object.entries() প্রয়োজন নেই।"
        },
        {
          label: "Looping Syntax Order",
          labelBn: "সিনট্যাক্স অর্ডার",
          desc: "PHP writes 'foreach ($collection as $item)'. JS writes 'for (const item of collection)'. Notice the reverse order!",
          descBn: "PHP-তে লেখা হয়: foreach ($array as $item)। JS-এ লেখা হয়: for (const item of array)। লক্ষণীয় বিপরীত ক্রম!"
        }
      ]
    },
    {
      id: "functions",
      title: "Functions & Closures",
      titleBn: "ফাংশন ও প্যারামিটার",
      icon: "Cpu",
      phpCode: `<?php
// Function with type declarations & default value
function calculateTotal(float $price, int $quantity = 1): float {
    return $price * $quantity;
}

$total = calculateTotal(45.50, 2);
echo "Total: $" . $total;
?>`,
      jsCode: `// Standard function (or arrow function)
function calculateTotal(price, quantity = 1) {
    return price * quantity;
}

// Arrow function equivalent:
// const calculateTotal = (price, quantity = 1) => price * quantity;

const total = calculateTotal(45.50, 2);
console.log(\`Total: $\${total}\`);`,
      phpOutput: "Total: $91",
      jsOutput: "Total: $91",
      differences: [
        {
          label: "Arrow Functions",
          labelBn: "অ্যারো ফাংশন",
          desc: "JS makes heavy use of arrow functions `() => {}`. PHP 7.4+ supports arrow functions `fn($x) => $x * 2` for single-expression closures.",
          descBn: "JS-এ প্রচুর অ্যারো ফাংশন ব্যবহার হয়। PHP 7.4+ এ এক-লাইনের জন্য fn($x) => $x * 2 সাপোর্ট রয়েছে।"
        },
        {
          label: "Native Type Hints",
          labelBn: "নেটিভ টাইপ হিন্ট",
          desc: "PHP natively supports type declarations (float $price, int $qty): float without requiring TypeScript.",
          descBn: "PHP-তে টাইপস্ক্রিপ্ট ছাড়াই সরাসরি float, int, string ইত্যাদি টাইপ হিন্ট ও রিটার্ন টাইপ উল্লেখ করা যায়।"
        }
      ]
    },
    {
      id: "oop",
      title: "Classes & OOP Blueprints",
      titleBn: "ক্লাস ও অবজেক্ট ওরিয়েন্টেড ব্লুপ্রিন্ট",
      icon: "Code2",
      phpCode: `<?php
class User {
    // Properties
    public string $name;
    private int $pin;

    // Constructor method
    public function __construct(string $name, int $pin) {
        $this->name = $name;
        $this->pin = $pin;
    }

    // Method
    public function getProfile(): string {
        return "User: " . $this->name;
    }
}

$user1 = new User("Nasir", 1234);
echo $user1->getProfile();
?>`,
      jsCode: `class User {
    // Private field (#pin)
    #pin;

    // Constructor method
    constructor(name, pin) {
        this.name = name;
        this.#pin = pin;
    }

    // Method
    getProfile() {
        return \`User: \${this.name}\`;
    }
}

const user1 = new User("Nasir", 1234);
console.log(user1.getProfile());`,
      phpOutput: "User: Nasir",
      jsOutput: "User: Nasir",
      differences: [
        {
          label: "Member Access Operator",
          labelBn: "মেম্বার অ্যাক্সেস অপারেটর",
          desc: "PHP uses arrow '->' for properties and methods: $this->name or $user->getProfile(). JS uses dot: this.name or user.getProfile().",
          descBn: "PHP-তে অ্যারো '->' ব্যবহার হয়: $this->name বা $user->getProfile()। JS-এ ডট '.' ব্যবহার হয়।"
        },
        {
          label: "Constructor Name",
          labelBn: "কনস্ট্রাক্টরের নাম",
          desc: "PHP uses magic double underscore: __construct(). JS uses the keyword: constructor().",
          descBn: "PHP-তে ডাবল আন্ডারস্কোর __construct() ব্যবহার হয়। JS-এ সরাসরি constructor() লেখা হয়।"
        },
        {
          label: "Visibility Modifiers",
          labelBn: "ভিসিবিলিটি কি-ওয়ার্ড",
          desc: "PHP natively has public, private, and protected keywords on class properties. JS introduced '#' for private fields recently.",
          descBn: "PHP-তে জন্মলগ্ন থেকেই public, private, protected কি-ওয়ার্ড রয়েছে। JS-এ সম্প্রতি '#' প্রাইভেট ফিল্ড এসেছে।"
        }
      ]
    },
    {
      id: "files",
      title: "File Inclusion & Modules",
      titleBn: "ফাইল ইনক্লুশন ও মডিউল সিস্টেম",
      icon: "Layers",
      phpCode: `<?php
// PHP evaluates file inclusions at runtime
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/Database.php';

// Composer PSR-4 Autoloading
require_once __DIR__ . '/../vendor/autoload.php';

use App\\Controllers\\HomeController;
$controller = new HomeController();
?>`,
      jsCode: `// Modern ES6 Modules (Static import)
import { config } from './config.js';
import Database from './Database.js';
import HomeController from './controllers/HomeController.js';

// Or CommonJS (Node.js runtime)
// const config = require('./config.js');

const controller = new HomeController();`,
      phpOutput: "[Success: Files included, Controller instantiated]",
      jsOutput: "[Success: Modules imported, Controller instantiated]",
      differences: [
        {
          label: "Import vs Evaluation",
          labelBn: "ইমপোর্ট বনাম ফাইল এক্সিকিউশন",
          desc: "PHP's require literally executes the target PHP file inside the current scope. JS 'import' parses modules into isolated exports/imports.",
          descBn: "PHP-র require ফাইলটিকে তাৎক্ষণিক এক্সিকিউট করে। JS-এর import মডিউলগুলোকে আলাদা স্কোপে আইসোলেট রাখে।"
        },
        {
          label: "Autoloading (PSR-4)",
          labelBn: "অটোলোডিং ব্যবস্থা",
          desc: "PHP uses Composer's PSR-4 classmap to automatically load classes on-demand when 'new ClassName()' is called without manual require statements.",
          descBn: "PHP-তে Composer ও PSR-4 এর মাধ্যমে কোনো ক্লাসের অবজেক্ট তৈরির সময় নিজে থেকেই স্বয়ংক্রিয়ভাবে ফাইল লোড হয়ে যায়।"
        }
      ]
    }
  ];

  const currentTopic = topics[selectedTopicIndex];

  const handleCopy = (code, type) => {
    navigator.clipboard.writeText(code);
    setCopiedTab(type);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationOutput(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationOutput({
        php: currentTopic.phpOutput,
        js: currentTopic.jsOutput
      });
      try {
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
      } catch (e) {}
    }, 400);
  };

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              <Scale className="w-3.5 h-3.5" />
              {t("MODULE 15: INTERACTIVE LABORATORY", "মডিউল ১৫: ইন্টারেক্টিভ ল্যাবরেটরি")}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("PHP vs JavaScript Comparison Matrix", "পিএইচপি বনাম জাভাস্ক্রিপ্ট সিনট্যাক্স ল্যাব")}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t(
                "You already understand JavaScript. Use this interactive translation lab to map every concept you already know in JavaScript to its exact PHP counterpart.",
                "যেহেতু আপনি আগেই জাভাস্ক্রিপ্ট জানেন, তাই এই ল্যাব ব্যবহার করে আপনার পরিচিত প্রতিটি JS ধারণাকে PHP-র সাথে হুবহু মিলিয়ে নিন।"
              )}
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-slate-950/60 border border-slate-800 p-4 rounded-xl min-w-[220px]">
            <div className="text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>{t("Selected Category:", "নির্বাচিত বিষয়:")}</span>
              <span className="text-cyan-400 font-bold">{selectedTopicIndex + 1}/{topics.length}</span>
            </div>
            <div className="text-sm font-bold text-white">
              {lang === 'bn' ? currentTopic.titleBn : currentTopic.title}
            </div>
          </div>
        </div>
      </section>

      {/* Topic Switcher Pills */}
      <section className="flex flex-wrap gap-2 pb-2 border-b border-slate-800">
        {topics.map((topic, index) => {
          const isActive = index === selectedTopicIndex;
          return (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedTopicIndex(index);
                setSimulationOutput(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/50'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono bg-black/30">
                {index + 1}
              </span>
              <span>{lang === 'bn' ? topic.titleBn : topic.title}</span>
            </button>
          );
        })}
      </section>

      {/* Side-by-Side Code Comparison */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PHP Card */}
        <div className="bg-[#0b0f19] border border-blue-500/30 rounded-2xl overflow-hidden flex flex-col shadow-xl">
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 shadow-sm shadow-blue-500" />
              <span className="font-mono text-xs font-bold text-blue-400 tracking-wider uppercase">
                PHP 8.2+ (Server-Side)
              </span>
            </div>
            <button
              onClick={() => handleCopy(currentTopic.phpCode, 'php')}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              {copiedTab === 'php' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{t("Copied!", "কপি হয়েছে!")}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t("Copy PHP", "PHP কপি")}</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 flex-1 font-mono text-xs sm:text-sm text-slate-200 bg-[#070a12] overflow-x-auto leading-relaxed">
            <pre className="text-blue-300 whitespace-pre">
              {currentTopic.phpCode}
            </pre>
          </div>

          <div className="p-3 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>{t("Execution: Zend Engine (Server)", "এক্সিকিউশন: জেন্ড ইঞ্জিন (সার্ভার)")}</span>
            <span className="text-blue-400 font-mono">.php</span>
          </div>
        </div>

        {/* JavaScript Card */}
        <div className="bg-[#0b0f19] border border-amber-500/30 rounded-2xl overflow-hidden flex flex-col shadow-xl">
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
              <span className="font-mono text-xs font-bold text-amber-400 tracking-wider uppercase">
                JavaScript ES2024 (Client / Node)
              </span>
            </div>
            <button
              onClick={() => handleCopy(currentTopic.jsCode, 'js')}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              {copiedTab === 'js' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{t("Copied!", "কপি হয়েছে!")}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t("Copy JS", "JS কপি")}</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 flex-1 font-mono text-xs sm:text-sm text-slate-200 bg-[#070a12] overflow-x-auto leading-relaxed">
            <pre className="text-amber-200 whitespace-pre">
              {currentTopic.jsCode}
            </pre>
          </div>

          <div className="p-3 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>{t("Execution: V8 / SpiderMonkey", "এক্সিকিউশন: ভি৮ ইঞ্জিন (ব্রাউজার/নোড)")}</span>
            <span className="text-amber-400 font-mono">.js</span>
          </div>
        </div>
      </section>

      {/* Simulator Execution Bar */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {t("Simulate Output Simultaneously", "একসাথে দুই কোডের আউটপুট সিমুলেশন")}
              </h3>
              <p className="text-xs text-slate-400">
                {t(
                  "Run both code snippets through virtual engines to compare terminal & browser outputs.",
                  "ভার্চুয়াল ইঞ্জিনে কোড রান করে টার্মিনাল ও কনসোল আউটপুট তুলনা করুন।"
                )}
              </p>
            </div>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50"
          >
            {isSimulating ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full"
                />
                <span>{t("Running Simulation...", "সিমুলেশন চলছে...")}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                <span>{t("Execute Both Codes", "উভয় কোড এক্সিকিউট করুন")}</span>
              </>
            )}
          </button>
        </div>

        {/* Live Output Preview */}
        <AnimatePresence>
          {simulationOutput && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="bg-black/60 border border-blue-500/40 rounded-xl p-4 font-mono text-xs">
                <div className="text-[10px] text-blue-400 font-bold uppercase mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3" />
                  {t("PHP Server Output (HTTP Response / stdout):", "পিএইচপি সার্ভার আউটপুট:")}
                </div>
                <div className="text-emerald-400 whitespace-pre bg-slate-950 p-2.5 rounded border border-slate-800">
                  {simulationOutput.php}
                </div>
              </div>

              <div className="bg-black/60 border border-amber-500/40 rounded-xl p-4 font-mono text-xs">
                <div className="text-[10px] text-amber-400 font-bold uppercase mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3" />
                  {t("JavaScript DevTools Console Output:", "জাভাস্ক্রিপ্ট ব্রাউজার কনসোল আউটপুট:")}
                </div>
                <div className="text-amber-300 whitespace-pre bg-slate-950 p-2.5 rounded border border-slate-800">
                  {simulationOutput.js}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Hosting Economics: $2/mo Shared Hosting vs VPS / Next.js */}
      <section className="bg-gradient-to-br from-[#12162a] via-[#0e1222] to-[#1a1530] border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {t("Hosting Economics: $2/mo Shared Hosting vs VPS / Next.js", "হোস্টিং ইকোনমিক্স: $২/মাস সিপ্যানেল হোস্টিং বনাম ভিপিএস")}
            </h3>
            <p className="text-xs text-slate-400">
              {t("Why 78% of the web still runs on PHP: zero-maintenance deployment economics.", "কেন ওয়েবের প্রায় ৮০% এখনও পিএইচপিতে চলে: হোস্টিং খরচ ও রক্ষণাবেক্ষণের সহজতা।")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-950/70 border border-blue-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-blue-400">PHP Traditional Hosting</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                ~$2 - $5 / mo
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t(
                "Upload files via FTP or Git to any standard Apache/Nginx server. No daemon process to monitor, no PM2 crashes, no memory leaks killing Node servers.",
                "এফটিপি বা সিপ্যানেলে ফাইল ড্রপ করলেই লাইভ হয়ে যায়। কোনো ডেমন প্রসেস বা মেমরি লিক নিয়ে চিন্তা করতে হয় না।"
              )}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/70 border border-amber-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-amber-400">Node / Next.js Server VPS</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                ~$12 - $50+ / mo
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t(
                "Requires persistent Node daemon running 24/7, Docker containers, reverse proxy configuration (Nginx), and active memory monitoring.",
                "২৪/৭ চলমান নোড ডেমন, ডকার এবং মেমোরি মনিটরিং প্রয়োজন যা নবীনদের জন্য ব্যয়বহুল ও জটিল।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Key Differences & Mental Models */}
      <section className="bg-[#0e1322] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {t("Key Differences & Mental Models", "মূল পার্থক্য ও চিন্তার সঠিক পদ্ধতি")}
            </h3>
            <p className="text-xs text-slate-400">
              {t("Critical architectural nuances to avoid common beginner traps.", "নবীনদের যেসব বিভ্রান্তিতে পড়ার সম্ভাবনা থাকে সেগুলোর সহজ ব্যাখ্যা।")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentTopic.differences.map((diff, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 space-y-2 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-slate-200">
                  {lang === 'bn' ? diff.labelBn : diff.label}
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'bn' ? diff.descBn : diff.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Master 1-to-1 Quick Reference Table */}
      <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Code2 className="w-5 h-5 text-cyan-400" />
          {t("Master Quick-Reference Cheat Sheet", "মাস্টার কুইক-রেফারেন্স চিট শিট")}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-950/80 text-slate-400">
                <th className="p-3">Feature</th>
                <th className="p-3 text-blue-400">PHP 8.2+</th>
                <th className="p-3 text-amber-400">JavaScript ES2024</th>
                <th className="p-3 text-slate-300">Rule of Thumb</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-white">Variable Prefix</td>
                <td className="p-3 text-blue-300">$name = "Val"</td>
                <td className="p-3 text-amber-300">let name = "Val"</td>
                <td className="p-3 text-slate-400">PHP always requires '$'</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-white">String Concat</td>
                <td className="p-3 text-blue-300">$a . $b</td>
                <td className="p-3 text-amber-300">a + b</td>
                <td className="p-3 text-slate-400">Never use '+' to concat in PHP!</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-white">Associative Map</td>
                <td className="p-3 text-blue-300">["key" =&gt; "val"]</td>
                <td className="p-3 text-amber-300">{"{ key: 'val' }"}</td>
                <td className="p-3 text-slate-400">PHP uses '=&gt;', JS uses ':'</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-white">Object Property</td>
                <td className="p-3 text-blue-300">$user-&gt;name</td>
                <td className="p-3 text-amber-300">user.name</td>
                <td className="p-3 text-slate-400">PHP uses '-&gt;', JS uses '.'</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-white">Array Append</td>
                <td className="p-3 text-blue-300">$arr[] = 5</td>
                <td className="p-3 text-amber-300">arr.push(5)</td>
                <td className="p-3 text-slate-400">Empty brackets in PHP push element</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-white">Type Inspection</td>
                <td className="p-3 text-blue-300">var_dump($var)</td>
                <td className="p-3 text-amber-300">typeof val</td>
                <td className="p-3 text-slate-400">var_dump reveals exact type & length</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-white">Printing Output</td>
                <td className="p-3 text-blue-300">echo $val</td>
                <td className="p-3 text-amber-300">console.log(val)</td>
                <td className="p-3 text-slate-400">echo writes to HTTP response body</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Completion Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("All 15 Academy Modules Completed!", "সকল ১৫টি মডিউল সম্পন্ন!")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("You have mastered web foundations, database storage, PHP fundamentals, php-class-two architecture, and language translation.", "আপনি ওয়েব, ডাটাবেজ, পিএইচপির মৌলিক বিষয়, আসল প্রজেক্ট এবং ভাষা রূপান্তরে দক্ষতা অর্জন করেছেন।")}
          </p>
        </div>

        {onRestartCourse && (
          <button
            onClick={onRestartCourse}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Restart Academy (Module 1)", "প্রথম থেকে শুরু করুন")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module15ComparisonLab;
