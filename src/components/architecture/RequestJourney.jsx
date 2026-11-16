import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Globe, 
  FileCode, 
  Cpu, 
  Wrench, 
  Table, 
  Monitor, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export function RequestJourney() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: "1. User Requests URL",
      titleBn: "১. ব্যবহারকারী URL রিকোয়েস্ট পাঠায়",
      file: "Browser",
      badge: "HTTP GET",
      color: "#38BDF8",
      icon: Globe,
      desc: "User clicks or types http://localhost/web.php?page=home in the address bar.",
      descBn: "ব্যবহারকারী ব্রাউজারের অ্যাড্রেসবারে http://localhost/web.php?page=home লিখে এন্টার চাপে।",
      code: `GET /web.php?page=home HTTP/1.1\nHost: localhost`,
      whatHappens: "The browser packages an HTTP GET request with query parameter page=home and sends it across the network to the Apache web server."
    },
    {
      step: 2,
      title: "2. Router & Autoloader Boot",
      titleBn: "২. রাউটার এবং অটোলোডার চালু",
      file: "web.php",
      badge: "Front Controller",
      color: "#F59E0B",
      icon: FileCode,
      desc: "web.php executes require_once 'vendor/autoload.php' to load Composer's autoloader.",
      descBn: "web.php প্রথমে require_once 'vendor/autoload.php' রান করে কম্পোজার চালু করে।",
      code: `require_once "vendor/autoload.php";\nuse App\\classes\\HelloWorld;\n\n$helloWorld = new HelloWorld();`,
      whatHappens: "Composer preloads helpers.php and registers the PSR-4 namespace mapping. Now any class in app/classes/ can be instantiated without manual include!"
    },
    {
      step: 3,
      title: "3. Controller Dispatches & Prepares Data",
      titleBn: "৩. কন্ট্রোলার ডাটা প্রস্তুত করে",
      file: "app/classes/HelloWorld.php",
      badge: "Page Controller",
      color: "#EC4899",
      icon: Cpu,
      desc: "if ($_GET['page'] == 'home') executes $helloWorld->index() to prepare the students data array.",
      descBn: "if ($_GET['page'] == 'home') মেথড $helloWorld->index() রান করে ছাত্রদের তথ্য তালিকা তৈরি করে।",
      code: `public function index() {\n  $this->students = [\n    0 => ["id" => 1, "name" => "Borno", "email" => "borno@gmail.com"],\n    1 => ["id" => 2, "name" => "Patwari", "email" => "patwari@gmail.com"]\n  ];\n  return view("home", ["students" => $this->students]);\n}`,
      whatHappens: "Controller prepares the data payload (Array of Associative Arrays) and hands it off to the view() helper. Notice: it DOES NOT echo HTML!"
    },
    {
      step: 4,
      title: "4. View Engine Buffers & Extracts Data",
      titleBn: "৪. ভিউ ইঞ্জিন মেমরিতে HTML সাজায়",
      file: "app/helpers/helpers.php",
      badge: "10-Line Engine",
      color: "#06B6D4",
      icon: Wrench,
      desc: "helpers.php traps output in RAM with ob_start() and turns ['students' => $arr] into variable $students via extract()!",
      descBn: "helpers.php ob_start() দিয়ে মেমরিতে আউটপুট ধরে এবং extract() দিয়ে ভেরিয়েবল উন্মুক্ত করে!",
      code: `function view($fileName, $data = [], $print = true) {\n  $filePath = "views/" . $fileName . ".php";\n  if (file_exists($filePath)) {\n    ob_start();     // 1. Trap in RAM buffer\n    extract($data); // 2. Creates local $students!\n    include $filePath;\n    $view = ob_get_clean();\n  }\n  if ($print) print $view;\n}`,
      whatHappens: "ob_start() traps all echoes in server RAM so the HTML doesn't send too early. extract($data) creates local variable $students dynamically."
    },
    {
      step: 5,
      title: "5. Template Compiles Header, Table & Footer",
      titleBn: "৫. টেমপ্লেট ন্যাভবার ও টেবিল যোগ করে",
      file: "views/home.php",
      badge: "UI Template",
      color: "#10B981",
      icon: Table,
      desc: "views/home.php includes header.php, loops through $students with foreach to build table rows, and includes footer.php.",
      descBn: "views/home.php ন্যাভবার (header.php) আনে, foreach দিয়ে টেবিল সাজায় এবং footer.php যুক্ত করে।",
      code: `<?php include "includes/header.php"; ?>\n<table class="table table-bordered">\n  <?php foreach($students as $student) { ?>\n    <tr>\n      <td><?= $student["id"]; ?></td>\n      <td><?= $student["name"]; ?></td>\n    </tr>\n  <?php } ?>\n</table>\n<?php include "includes/footer.php"; ?>`,
      whatHappens: "The PHP tags are evaluated, merging dynamic data with Bootstrap HTML markup into one final string in the RAM buffer."
    },
    {
      step: 6,
      title: "6. Complete HTML Flushed to User",
      titleBn: "৬. ব্রাউজারে সম্পূর্ণ পেইজ রেন্ডার",
      file: "Browser Display",
      badge: "Response Finished",
      color: "#10B981",
      icon: Monitor,
      desc: "print $view flushes the complete assembled HTML page to the browser. PHP execution ends on server; browser runs main.js!",
      descBn: "print $view সম্পূর্ণ HTML ব্রাউজারে পাঠিয়ে দেয়। সার্ভারে PHP শেষ; ব্রাউজার main.js রান করে!",
      code: `HTTP/1.1 200 OK\nContent-Type: text/html\n\n<!DOCTYPE html>\n<html>...<body>...Bootstrap table...</body></html>`,
      whatHappens: "The client browser parses the HTML, applies Bootstrap styles, and runs assets/js/main.js to make the header sticky on scroll!"
    }
  ];

  const current = steps[currentStep - 1];

  return (
    <div className="w-full space-y-4">
      {/* Horizontal Steps Stepper */}
      <div className="p-4 rounded-2xl bg-[#141828] border border-slate-800 shadow-xl space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-amber-400 font-bold uppercase tracking-wider">
            {t("Interactive Request Timeline (6 Steps)", "ইন্টারেক্টিভ রিকোয়েস্ট টাইমলাইন (৬টি ধাপ)")}
          </span>
          <span className="text-slate-400">Step {currentStep} of 6</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {steps.map((s) => {
            const isActive = currentStep === s.step;
            const isCompleted = currentStep > s.step;
            const Icon = s.icon;
            return (
              <button
                key={s.step}
                onClick={() => setCurrentStep(s.step)}
                className={`p-2.5 rounded-xl border text-left transition-all space-y-1.5 ${
                  isActive
                    ? 'bg-amber-400/20 border-amber-400 shadow-md ring-1 ring-amber-400/50'
                    : isCompleted
                    ? 'bg-[#181d30] border-emerald-500/30 text-slate-300'
                    : 'bg-[#101424] border-slate-800 text-slate-500 hover:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-5 h-5 rounded-md font-mono font-black text-[10px] flex items-center justify-center ${
                    isActive ? 'bg-amber-400 text-slate-950' : isCompleted ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {s.step}
                  </span>
                  <Icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                </div>
                <div className={`font-mono text-[11px] font-bold truncate ${isActive ? 'text-amber-300' : 'text-slate-300'}`}>
                  {s.file}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Detailed Card */}
      <div className="p-6 rounded-3xl bg-[#161a2c] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">
                {current.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {current.file}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {t(current.title, current.titleBn)}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep <= 1}
              className="p-2 rounded-xl bg-[#1e2438] hover:bg-[#28304a] text-slate-300 disabled:opacity-30 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentStep(prev => Math.min(6, prev + 1))}
              disabled={currentStep >= 6}
              className="p-2 rounded-xl bg-amber-400 hover:bg-yellow-300 text-slate-950 font-bold disabled:opacity-30 transition-all"
            >
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Code & Explanation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Code (Col 7) */}
          <div className="lg:col-span-7 p-4 rounded-2xl bg-[#0a0d16] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
            <div className="text-[10px] font-mono text-slate-500 mb-2 border-b border-slate-800/80 pb-1">
              Execution at this step:
            </div>
            <pre className="leading-relaxed text-amber-200/90 m-0">
              <code>{current.code}</code>
            </pre>
          </div>

          {/* Explanation (Col 5) */}
          <div className="lg:col-span-5 p-4 rounded-2xl bg-[#121626] border border-slate-800 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                {t("Behind the Scenes Mechanics", "ভেতরের মেকানিজম")}
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {t(current.whatHappens, current.descBn)}
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-[#0a0d16] border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Next up:</span>
              <span className="text-amber-400 font-bold">
                {currentStep < 6 ? steps[currentStep].file : "Complete!"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
