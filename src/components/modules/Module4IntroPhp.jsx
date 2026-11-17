import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Code2, 
  Play, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Monitor,
  Copy,
  Check,
  FileCode2,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';
import { ComputerExecutionDiagram } from '../common/ComputerExecutionDiagram';

export function Module4IntroPhp({ onNextModule }) {
  const { lang, t } = useLanguage();
  const [userName, setUserName] = useState("Nasir");
  const [isServerRunning, setIsServerRunning] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState(null);

  const handleSimulateRun = () => {
    setIsServerRunning(true);
    setTimeout(() => {
      setTerminalOutput(`[PHP 8.2.10 Development Server] Started at ${new Date().toLocaleTimeString()}\n[200 OK]: /index.php -> Hello, ${userName}! Welcome to PHP Server.`);
      setIsServerRunning(false);
      try {
        confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
      } catch (e) {}
    }, 500);
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Module 4 Hero Banner */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c180c] via-[#0d1020] to-[#141828] border border-amber-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t("MODULE 04 · ABSOLUTE BEGINNER", "মডিউল ০৪ · একদম শুরু থেকে")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Introduction to PHP: The Server's Kitchen",
              "পিএইচপি পরিচিতি: সার্ভারের রান্নাঘর"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "What actually is PHP? Why does it exist, where does it execute, and how does it differ from JavaScript? Let's write and run your very first PHP script from absolute scratch.",
              "পিএইচপি আসলে কী? এর কাজ কী, এটি কোথায় এক্সিকিউট হয় এবং জাভাস্ক্রিপ্ট থেকে এর মৌলিক পার্থক্য কোথায়? চলুন কোনো পূর্ব অভিজ্ঞতা ছাড়াই একদম প্রথম থেকে পিএইচপি শুরু করি।"
            )}
          </p>
        </div>
      </div>

      {/* Lesson 4.1: What is PHP? */}
      <section id="sec-4-1" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            4.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("What is PHP & What Problem Does It Solve?", "পিএইচপি কী এবং এটি কেন তৈরি হয়েছিল?")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#121526] border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">Full Name</span>
            <h4 className="text-sm font-bold text-white">Hypertext Preprocessor</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t(
                "Originally 'Personal Home Page' in 1994 by Rasmus Lerdorf. Today, it processes hypertext on the server before sending raw HTML to the user's browser.",
                "১৯৯৪ সালে রাসমুস লারডর্ফ এটি তৈরি করেন। এটি ব্রাউজারে পৌঁছানোর আগেই সার্ভারে ডাটা প্রসেস করে এইচটিএমএল বানায়।"
              )}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121526] border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">Execution Location</span>
            <h4 className="text-sm font-bold text-white">100% Server-Side</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t(
                "PHP code NEVER reaches the visitor's browser! The web server executes the PHP script, renders static HTML, and sends only the finished HTML over the network.",
                "পিএইচপি কোড কখনো ব্রাউজারে যায় না! সার্ভার নিজে কোড রান করে ফলাফলকে HTML বানিয়ে ইউজারের কাছে পাঠায়।"
              )}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121526] border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">The Analogy</span>
            <h4 className="text-sm font-bold text-white">The Kitchen Worker</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t(
                "Like a kitchen worker who chops onions, grills meat, and arranges the plate behind closed doors before serving it to the dining table.",
                "রেস্তোরাঁর শেফের মতো, যে রান্নাঘরের পেছনের দরজায় সব উপাদান রান্না করে প্লেটে সাজিয়ে গ্রাহকের টেবিলে দেয়।"
              )}
            </p>
          </div>
        </div>

        {/* Interactive CPU & Execution Engine Diagram */}
        <div className="mt-6">
          <ComputerExecutionDiagram />
        </div>
      </section>

      {/* Lesson 4.2: PHP Code Anatomy */}
      <section id="sec-4-2" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            4.2
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("PHP Code Anatomy: The First 'Hello World!'", "পিএইচপি কোড কাঠামো: প্রথম 'Hello World!'")}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Code Sample */}
            <div className="p-5 rounded-xl bg-[#080a14] border border-amber-500/30 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                <span className="text-amber-400 font-bold">hello.php</span>
                <button
                  onClick={() => handleCopy("<?php\n\necho \"Hello World!\";\n\n?>")}
                  className="flex items-center gap-1 text-[11px] hover:text-white"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <pre className="text-slate-200 leading-relaxed">
{`<?php
// 1. Opening Tag: Tells web server "PHP starts here"

echo "Hello World!";
// 2. 'echo': Language construct that prints text
// 3. ';': Every PHP statement MUST end with a semicolon!

?>
// 4. Closing Tag (optional in pure PHP files)`}
              </pre>
            </div>

            {/* Explanation Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-[#141829] border border-slate-800">
                <strong className="text-amber-400 block mb-0.5">&lt;?php (Opening Tag)</strong>
                <p className="text-slate-300">
                  {t(
                    "The server scans the file looking for this tag. Anything outside of it is treated as plain text or HTML and not executed.",
                    "সার্ভার এই ট্যাগটি খুঁজে পাওয়ার পর পিএইচপি ইঞ্জিন সক্রিয় করে। এর বাইরের অংশ সাধারণ এইচটিএমএল হিসেবে প্রেরিত হয়।"
                  )}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#141829] border border-slate-800">
                <strong className="text-cyan-400 block mb-0.5">echo (Output Keyword)</strong>
                <p className="text-slate-300">
                  {t(
                    "Outputs strings directly to the HTTP response stream. Unlike console.log() in JS which prints in hidden DevTools, echo writes text directly onto the web page!",
                    "এটি সরাসরি ওয়েব পেজে টেক্সট প্রদর্শন করে। ব্রাউজারের কনসোল লগের মতো লুকিয়ে থাকে না, সরাসরি পাতায় ছাপা হয়।"
                  )}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#141829] border border-slate-800">
                <strong className="text-emerald-400 block mb-0.5">; (The Semicolon Rule)</strong>
                <p className="text-slate-300">
                  {t(
                    "In JavaScript, semicolons are often optional. In PHP, forgetting a semicolon causes an immediate Parse Error (syntax error) that halts execution!",
                    "জাভাস্ক্রিপ্টে সেমিকোলন অপশনাল হলেও পিএইচপিতে প্রতিটি লাইনের শেষে সেমিকোলন দেওয়া বাধ্যতামূলক।"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 4.3: Local Server CLI & Interactive Runner */}
      <section id="sec-4-3" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-500 text-white font-black flex items-center justify-center text-sm font-mono">
            4.3
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Setting Up PHP CLI & Local Development Server", "লোকাল ডেভেলপমেন্ট সার্ভার চালানো (php -S localhost:8000)")}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0d1020] border border-slate-800 shadow-2xl space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t(
              "You don't need heavy software like XAMPP just to learn PHP! If you have PHP installed, you can start a lightning-fast built-in development server in 3 seconds from your terminal:",
              "পিএইচপি শেখার জন্য ভারী XAMPP সফটওয়্যার ছাড়াও কাজ করা সম্ভব! আপনার কম্পিউটারে পিএইচপি থাকলে টার্মিনালে মাত্র এক লাইনেই লোকাল সার্ভার চালু করা যায়:"
            )}
          </p>

          <div className="p-3.5 rounded-xl bg-[#070912] border border-slate-800 font-mono text-xs text-amber-300">
            $ php -S localhost:8000
          </div>

          {/* Interactive Live Hello World Simulator */}
          <div className="p-4 rounded-xl bg-[#12162a] border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-white block">
              {t("Try It Yourself: Live PHP Server Simulator", "নিজে চেষ্টা করুন: লাইভ পিএইচপি সার্ভার সিমুলেটর")}
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name..."
                className="px-3 py-2 rounded-xl bg-[#090c17] border border-slate-700 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
              />

              <button
                onClick={handleSimulateRun}
                disabled={isServerRunning}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all shadow-md shadow-yellow-500/10"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isServerRunning ? t("Processing...", "সার্ভারে চলছে...") : t("Run php index.php", "কোড রান করুন")}</span>
              </button>
            </div>

            {terminalOutput && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-[#060810] border border-emerald-900/50 font-mono text-xs text-emerald-400"
              >
                <pre>{terminalOutput}</pre>
              </motion.div>
            )}
          </div>
        </div>

        {/* Interactive CPU & Execution Engine Diagram */}
        <div className="mt-6">
          <ComputerExecutionDiagram />
        </div>
      </section>

      {/* Lesson 4.4: Embedding PHP Inside HTML */}
      <section id="sec-4-4" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-emerald-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            4.4
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Embedding PHP Directly Inside HTML", "HTML এর ভেতর পিএইচপি কোড মিশ্রণ")}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl space-y-4 font-mono text-xs">
          <div className="text-slate-400 font-sans text-xs">
            {t(
              "PHP was originally designed to mix cleanly into HTML files. You can open and close <?php ... ?> tags anywhere in your layout:",
              "পিএইচপির সবচেয়ে বড় শক্তি হলো সাধারণ এইচটিএমএল ফাইলের যেকোনো স্থানে <?php ... ?> ট্যাগ দিয়ে ডায়নামিক ডাটা বসিয়ে দেওয়া যায়:"
            )}
          </div>

          <pre className="p-4 rounded-xl bg-[#080a14] border border-slate-800 text-slate-200 leading-relaxed overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Student Portal</title>
</head>
<body>
  <h1>Welcome to Campus!</h1>

  <!-- PHP injects the dynamic current date and student name: -->
  <p>Today is: <?php echo date("l, F j, Y"); ?></p>
  <p>Student: <?php echo "Nasir Yousuf"; ?></p>

  <!-- Shorthand echo syntax: <?= "Hello" ?> -->
  <h3>Role: <?= "Web Developer" ?></h3>
</body>
</html>`}
          </pre>
        </div>
      </section>

      {/* Module 4 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 4 Complete", "মডিউল ৪ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Variables & Data Types (The Labelled Box & The '$' Rule)", "পরবর্তী: ভেরিয়েবল ও ডাটা টাইপসমূহ (লেবেলযুক্ত বাক্স ও '$' এর নিয়ম)")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 5", "মডিউল ৫-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module4IntroPhp;
