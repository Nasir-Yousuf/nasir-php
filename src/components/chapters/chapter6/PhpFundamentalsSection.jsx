import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Play, 
  Sparkles, 
  Copy, 
  Check, 
  ChevronRight, 
  Layers, 
  Box, 
  Repeat, 
  Cpu, 
  FileCode,
  Send,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../../contexts/LanguageContext';
import { VariableAnimation } from '../../animations/VariableAnimation';
import { IfElseAnimation } from '../../animations/IfElseAnimation';
import { LoopAnimation } from '../../animations/LoopAnimation';
import { FunctionAnimation } from '../../animations/FunctionAnimation';
import { ArrayAnimation } from '../../animations/ArrayAnimation';
import { ClassAnimation } from '../../animations/ClassAnimation';

export function PhpFundamentalsSection() {
  const { lang, t } = useLanguage();
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [copiedPhp, setCopiedPhp] = useState(false);
  const [copiedJs, setCopiedJs] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const topics = [
    {
      id: "tags",
      title: "1. PHP Tags & Execution",
      titleBn: "১. পিএইচপি ট্যাগ ও এক্সিকিউশন",
      icon: Code2,
      animation: "variable",
      phpCode: `<?php
// PHP code MUST be enclosed in <?php ... ?>
echo "Hello from PHP Server!\\n";
echo "Server Time: " . date("H:i:s");`,
      jsCode: `// JavaScript runs inside <script> or .js files
console.log("Hello from JavaScript Client!");
console.log("Client Time: " + new Date().toLocaleTimeString());`,
      phpOutput: "Hello from PHP Server!\nServer Time: 14:30:00",
      jsOutput: "Hello from JavaScript Client!\nClient Time: 2:30:00 PM",
      rule: "Rule: All server-side PHP must begin with '<?php'. Statements end with semicolon ';'.",
      ruleBn: "সুবর্ণ নিয়ম: পিএইচপি কোড অবশ্যই '<?php' দিয়ে শুরু হতে হবে এবং স্টেটমেন্ট শেষে সেমিকোলন ';' দিতে হবে।"
    },
    {
      id: "variables",
      title: "2. Variables ($ rule)",
      titleBn: "২. ভেরিয়েবল ($ চিহ্ন)",
      icon: Box,
      animation: "variable",
      phpCode: `<?php
// In PHP, EVERY variable MUST start with '$':
$name = "Nasir";
$age = 22;
$gpa = 3.85;

echo $name . " is " . $age . " years old.";`,
      jsCode: `// In JavaScript, declare with const or let:
const name = "Nasir";
let age = 22;
const gpa = 3.85;

console.log(name + " is " + age + " years old.");`,
      phpOutput: "Nasir is 22 years old.",
      jsOutput: "Nasir is 22 years old.",
      rule: "Rule: Forgetting '$' in PHP is the #1 beginner syntax error! $age is valid, age is undefined constant.",
      ruleBn: "সুবর্ণ নিয়ম: পিএইচপিতে '$' দিতে ভুলে যাওয়া সবচেয়ে বড় ভুল! $age ভ্যালিড, কিন্তু শুধু age লিখলে এরর হবে।"
    },
    {
      id: "types",
      title: "3. Data Types",
      titleBn: "৩. ডাটা টাইপসমূহ",
      icon: Layers,
      animation: "variable",
      phpCode: `<?php
$str = "Dhaka";    // String
$count = 10;       // Integer
$price = 45.50;    // Float / Double
$isFree = true;    // Boolean
$nothing = null;   // NULL

echo gettype($count) . "\\n"; // integer
echo gettype($price);        // double`,
      jsCode: `const str = "Dhaka";    // string
const count = 10;       // number
const price = 45.50;    // number
const isFree = true;    // boolean
const nothing = null;   // object (legacy)

console.log(typeof count); // number
console.log(typeof price); // number`,
      phpOutput: "integer\ndouble",
      jsOutput: "number\nnumber",
      rule: "Rule: PHP distinguishes integer vs float (double); JavaScript combines both into 'number'.",
      ruleBn: "নিয়ম: PHP তে পূর্ণসংখ্যা integer এবং দশমিক float/double আলাদা; JS তে উভয়ই 'number'।"
    },
    {
      id: "strings",
      title: "4. Strings & Concatenation",
      titleBn: "৪. স্ট্রিং ও লেখা জোড়া লাগানো",
      icon: Code2,
      animation: "variable",
      phpCode: `<?php
$name = "Nasir";

// 1. Concatenate with DOT '.' operator:
echo "Hello " . $name . "!\\n";

// 2. Double quotes automatically parse variables:
echo "Welcome $name to PHP class!\\n";

// 3. String length:
echo "Length: " . strlen($name);`,
      jsCode: `const name = "Nasir";

// 1. Concatenate with '+' operator:
console.log("Hello " + name + "!");

// 2. Template literals use backticks \` \`:
console.log(\`Welcome \${name} to JS class!\`);

// 3. String length property:
console.log("Length: " + name.length);`,
      phpOutput: "Hello Nasir!\nWelcome Nasir to PHP class!\nLength: 5",
      jsOutput: "Hello Nasir!\nWelcome Nasir to JS class!\nLength: 5",
      rule: "Rule: PHP uses DOT '.' to join strings, while JavaScript uses '+' or `${}` backticks.",
      ruleBn: "সুবর্ণ নিয়ম: PHP তে লেখা জোড়া লাগাতে ডট '.' ব্যবহার করা হয়; JS তে '+' বা টেমপ্লেট লিটারেল `${}`।"
    },
    {
      id: "ifelse",
      title: "5. Conditional Statements (if / else)",
      titleBn: "৫. শর্ত ও সিদ্ধান্ত (if / else)",
      icon: HelpCircle,
      animation: "ifelse",
      phpCode: `<?php
$score = 85;

if ($score >= 80) {
    echo "Grade: A+";
} elseif ($score >= 60) {
    echo "Grade: B";
} else {
    echo "Grade: F";
}`,
      jsCode: `const score = 85;

if (score >= 80) {
    console.log("Grade: A+");
} else if (score >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: F");
}`,
      phpOutput: "Grade: A+",
      jsOutput: "Grade: A+",
      rule: "Rule: In PHP, 'elseif' is commonly written as one word (or 'else if'); syntax is nearly identical to JS.",
      ruleBn: "নিয়ম: পিএইচপিতে 'elseif' বা 'else if' দুটোই কাজ করে; এর ব্যাকরণ ও ব্র্যাকেট জাভাস্ক্রিপ্টের হুবহু অনুরূপ।"
    },
    {
      id: "loops",
      title: "6. Loops (for, while, foreach)",
      titleBn: "৬. লুপ (for, while, foreach)",
      icon: Repeat,
      animation: "loop",
      phpCode: `<?php
// For loop:
for ($i = 1; $i <= 3; $i++) {
    echo "Step $i ";
}

// Foreach loop over array:
$colors = ["Red", "Green", "Blue"];
foreach ($colors as $c) {
    echo $c . " ";
}`,
      jsCode: `// For loop:
for (let i = 1; i <= 3; i++) {
    console.log("Step " + i);
}

// For...of loop over array:
const colors = ["Red", "Green", "Blue"];
for (const c of colors) {
    console.log(c);
}`,
      phpOutput: "Step 1 Step 2 Step 3 Red Green Blue ",
      jsOutput: "Step 1\nStep 2\nStep 3\nRed\nGreen\nBlue",
      rule: "Rule: PHP uses 'foreach ($array as $value)', whereas JavaScript uses 'for (const val of array)'.",
      ruleBn: "নিয়ম: PHP তে 'foreach ($array as $item)' লুপ ব্যবহার হয়; JS তে 'for (const item of array)'।"
    },
    {
      id: "functions",
      title: "7. Functions & Return",
      titleBn: "৭. ফাংশন ও রিটার্ন ভ্যালু",
      icon: Cpu,
      animation: "function",
      phpCode: `<?php
function calculateTotal($price, $quantity = 1) {
    $subtotal = $price * $quantity;
    return $subtotal;
}

echo "Total: $" . calculateTotal(50, 3);`,
      jsCode: `function calculateTotal(price, quantity = 1) {
    const subtotal = price * quantity;
    return subtotal;
}

console.log("Total: $" + calculateTotal(50, 3));`,
      phpOutput: "Total: $150",
      jsOutput: "Total: $150",
      rule: "Rule: Both languages support default parameter values and the 'return' keyword.",
      ruleBn: "নিয়ম: উভয় ভাষাতেই ডিফল্ট প্যারামিটার ($qty = 1) এবং 'return' কি-ওয়ার্ড হুবহু একইভাবে কাজ করে।"
    },
    {
      id: "classes",
      title: "8. OOP Classes & Objects ($this->)",
      titleBn: "৮. অবজেক্ট ওরিয়েন্টেড ক্লাস ($this->)",
      icon: Layers,
      animation: "class",
      phpCode: `<?php
class Car {
    public $brand;

    public function __construct($b) {
        $this->brand = $b;
    }

    public function drive() {
        return $this->brand . " is driving smoothly!";
    }
}

$myCar = new Car("Toyota");
echo $myCar->drive();`,
      jsCode: `class Car {
    constructor(b) {
        this.brand = b;
    }

    drive() {
        return this.brand + " is driving smoothly!";
    }
}

const myCar = new Car("Toyota");
console.log(myCar.drive());`,
      phpOutput: "Toyota is driving smoothly!",
      jsOutput: "Toyota is driving smoothly!",
      rule: "Rule: In PHP, member access uses arrow '->' ($this->brand, $myCar->drive()), NOT dot notation ('.').",
      ruleBn: "সুবর্ণ নিয়ম: পিএইচপিতে ক্লাসের মেথড ও প্রোপার্টি ডাকতে arrow '->' দিতে হয়, ডট '.' নয়!"
    },
    {
      id: "includes",
      title: "9. File Inclusion (include vs require)",
      titleBn: "৯. ফাইল যুক্ত করা (include বনাম require)",
      icon: FileCode,
      animation: "variable",
      phpCode: `<?php
// 1. include: Gives a warning if missing, but script continues
include 'views/header.php';

// 2. require: Gives a fatal error if missing, script halts immediately
require 'app/classes/Car.php';

// 3. require_once: Guarantees file is never included twice
require_once 'vendor/autoload.php';`,
      jsCode: `// In modern ES Modules (Node.js & Frontend):
import { Car } from './app/classes/Car.js';
import header from './views/header.js';

// In CommonJS (legacy Node.js):
const Car = require('./app/classes/Car.js');`,
      phpOutput: "Header loaded successfully.\nCar class imported.\nAutoloader initialized.",
      jsOutput: "Modules imported cleanly.",
      rule: "Rule: Use 'require_once' for classes and database configs so you never trigger 'Cannot redeclare class' fatal errors.",
      ruleBn: "সুবর্ণ নিয়ম: ক্লাস বা ডাটাবেজ ফাইলের জন্য 'require_once' ব্যবহার করুন যাতে ডুপ্লিকেট ক্লাসের এরর না হয়।"
    },
    {
      id: "forms",
      title: "10. Forms & Requests ($_GET & $_POST)",
      titleBn: "১০. ফর্ম ও রিকোয়েস্ট হ্যান্ডলিং ($_GET ও $_POST)",
      icon: Send,
      animation: "variable",
      phpCode: `<?php
// Access query parameter in URL (e.g. ?page=home&id=5):
$page = $_GET['page'] ?? 'home';

// Access secure submitted form inputs (method="POST"):
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    echo "Login attempt for: " . htmlspecialchars($email);
}`,
      jsCode: `// In Node.js / Express:
app.get('/', (req, res) => {
    const page = req.query.page || 'home';
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
});`,
      phpOutput: "Login attempt for: nasir@example.com",
      jsOutput: "Parsed req.query and req.body.",
      rule: "Rule: Superglobals $_GET and $_POST are built directly into PHP; no external body-parser required!",
      ruleBn: "সুবর্ণ নিয়ম: পিএইচপিতে $_GET ও $_POST অটোমেটিক তৈরি থাকে; কোনো এক্সটার্নাল লাইব্রেরি বা প্লাগিন লাগে না।"
    }
  ];

  const currentTopic = topics[selectedTopicIndex];

  const handleCopy = (code, type) => {
    navigator.clipboard.writeText(code);
    if (type === 'php') {
      setCopiedPhp(true);
      setTimeout(() => setCopiedPhp(false), 2000);
    } else {
      setCopiedJs(true);
      setTimeout(() => setCopiedJs(false), 2000);
    }
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
      try {
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
      } catch (e) {}
    }, 400);
  };

  const renderAnimation = () => {
    switch (currentTopic.animation) {
      case 'ifelse': return <IfElseAnimation />;
      case 'loop': return <LoopAnimation />;
      case 'function': return <FunctionAnimation />;
      case 'array': return <ArrayAnimation />;
      case 'class': return <ClassAnimation />;
      default: return <VariableAnimation />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Topic Switcher Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {topics.map((tItem, idx) => {
          const isSelected = selectedTopicIndex === idx;
          const Icon = tItem.icon;
          return (
            <button
              key={tItem.id}
              onClick={() => {
                setSelectedTopicIndex(idx);
                setShowOutput(false);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 ${
                isSelected
                  ? 'bg-[#FACC15] text-slate-950 border-amber-300 shadow-md font-black'
                  : 'bg-[#131629] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? tItem.titleBn : tItem.title}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Visual Animation Preview */}
      <div className="p-5 rounded-2xl bg-[#0e111f] border border-slate-800 shadow-xl">
        <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-3">
          Concept Mental Model Visualizer:
        </div>
        {renderAnimation()}
      </div>

      {/* Side-by-Side Code Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* PHP Side */}
        <div className="p-5 rounded-2xl bg-[#111425] border border-amber-500/40 space-y-3 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-amber-300 font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              PHP Syntax
            </span>
            <button
              onClick={() => handleCopy(currentTopic.phpCode, 'php')}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
            >
              {copiedPhp ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedPhp ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <pre className="text-slate-200 overflow-x-auto leading-relaxed max-h-72">
            {currentTopic.phpCode}
          </pre>
        </div>

        {/* JS Side */}
        <div className="p-5 rounded-2xl bg-[#111425] border border-cyan-500/40 space-y-3 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-cyan-300 font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              JavaScript Equivalent
            </span>
            <button
              onClick={() => handleCopy(currentTopic.jsCode, 'js')}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
            >
              {copiedJs ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedJs ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <pre className="text-slate-200 overflow-x-auto leading-relaxed max-h-72">
            {currentTopic.jsCode}
          </pre>
        </div>
      </div>

      {/* Run Simulation & Output */}
      <div className="p-5 rounded-2xl bg-[#0c0f1c] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{isRunning ? t("Executing Code...", "কোড চলছে...") : t("Run Simulated Execution", "কোড রান করুন")}</span>
          </button>

          <span className="text-xs font-mono text-slate-400">
            Topic {selectedTopicIndex + 1} of {topics.length}
          </span>
        </div>

        {showOutput && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-[#05070e] border border-emerald-900/50 space-y-2 text-xs font-mono"
          >
            <div className="text-emerald-400 font-bold text-[11px] border-b border-slate-800 pb-1">
              Terminal Output (PHP Server ↔ JS Console):
            </div>
            <pre className="text-slate-200">{currentTopic.phpOutput}</pre>
          </motion.div>
        )}

        {/* Golden Rule Card */}
        <div className="p-3.5 rounded-xl bg-[#141829] border border-amber-500/20 text-xs text-amber-200">
          <span className="font-bold text-amber-400 block mb-0.5">
            💡 {t("Takeaway Rule:", "মনে রাখার সুবর্ণ নিয়ম:")}
          </span>
          <p className="leading-relaxed">
            {lang === 'bn' ? currentTopic.ruleBn : currentTopic.rule}
          </p>
        </div>
      </div>
    </div>
  );
}
export default PhpFundamentalsSection;
