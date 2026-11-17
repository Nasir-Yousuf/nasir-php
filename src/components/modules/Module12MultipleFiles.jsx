import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderSync, 
  FileCode2, 
  Play, 
  CheckCircle2, 
  ArrowRight,
  AlertTriangle,
  XCircle,
  FolderTree,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';

export function Module12MultipleFiles({ onNextModule }) {
  const { lang, t } = useLanguage();
  const [selectedStatement, setSelectedStatement] = useState('require');
  const [fileMissing, setFileMissing] = useState(false);

  return (
    <div className="space-y-12">
      {/* Module 12 Hero */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0e1c14] via-[#0d1020] to-[#121626] border border-emerald-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-bold">
            <FolderSync className="w-3.5 h-3.5" />
            <span>{t("MODULE 12 · MODULAR ARCHITECTURE", "মডিউল ১২ · মডুলার আর্কিটেকচার")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Working with Multiple Files: include, require & Autoloading",
              "একাধিক পিএইচপি ফাইল যুক্ত করা ও অটোলোডিং"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "Professional applications never write thousands of lines inside a single file. Learn how to divide your codebase, the critical difference between include and require, the magic of __DIR__, and how Composer autoloader removes manual imports.",
              "প্রফেশনাল সফটওয়্যার কখনোই হাজার হাজার লাইন কোড একটি ফাইলে রাখে না। কোডকে ছোট ছোট ফাইলে ভাগ করা, include ও require এর জীবন-মরণ পার্থক্য, __DIR__ এবং কম্পোজার অটোলোডিং এর আদ্যোপান্ত।"
            )}
          </p>
        </div>
      </div>

      {/* 12.2 include vs require Matrix */}
      <section id="sec-12-2" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            12.2
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("include vs require: Warning vs Fatal Error", "include বনাম require: ওয়ার্নিং বনাম স্ক্রিপ্ট ধ্বংস")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-5 rounded-2xl bg-[#111425] border border-yellow-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 font-bold text-sm">include 'header.php';</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-400/20 text-yellow-300">Non-Fatal</span>
            </div>
            <p className="font-sans text-slate-300 leading-relaxed">
              {t(
                "If the file is MISSING: PHP emits an E_WARNING, but the script CONTINUES running! Best for non-critical visual widgets like sidebar banners or optional analytics.",
                "ফাইল না পাওয়া গেলে PHP শুধু একটি ওয়ার্নিং দেয়, কিন্তু বাকি পেজের কোড ঠিকই রান হতে থাকে! সাইডবার ব্যানার বা অপশনাল উইজেটের জন্য উপযুক্ত।"
              )}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#111425] border border-red-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-red-400 font-bold text-sm">require 'Car.php';</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-400/20 text-red-300 font-bold">Fatal Halt</span>
            </div>
            <p className="font-sans text-slate-300 leading-relaxed">
              {t(
                "If the file is MISSING: PHP produces an E_COMPILE_ERROR (Fatal Error) and IMMEDIATELY STOPS execution! Mandatory for class models, database credentials, and security configs.",
                "ফাইল না পাওয়া গেলে PHP সাথে সাথে ফ্যাটাল এরর দিয়ে কোড চলা সম্পূর্ণ থামিয়ে দেয়! ক্লাস, ডাটাবেজ কনফিগ ও কোর ফাইলের জন্য আবশ্যক।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 12.3 require_once & __DIR__ */}
      <section id="sec-12-3" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            12.3
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("require_once & The Magic Constant: __DIR__", "require_once এবং ম্যাজিক কনস্ট্যান্ট: __DIR__")}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl space-y-4 font-mono text-xs">
          <p className="font-sans text-slate-300 text-xs">
            {t(
              "Relative paths like './app/Car.php' can break if you run your script from different folders! To build bulletproof paths, always use the built-in magic constant __DIR__, which returns the absolute folder path of the current file:",
              "রিলেটিভ পাথ বিভিন্ন ফোল্ডার থেকে ফাইল রান করলে পথ হারিয়ে ফেলে! তাই প্রফেশনাল পিএইচপি ফাইলে সবসময় ম্যাজিক কনস্ট্যান্ট __DIR__ ব্যবহার করা হয়:"
            )}
          </p>

          <pre className="p-4 rounded-xl bg-[#080a14] border border-cyan-900/40 text-cyan-300 leading-relaxed overflow-x-auto">
{`// 1. __DIR__ gives absolute path to current directory:
require_once __DIR__ . '/app/helpers/helpers.php';

// 2. require_once ensures that even if included 10 times in different files,
// PHP loads it ONLY ONCE, preventing "Cannot redeclare class" crashes!
require_once __DIR__ . '/vendor/autoload.php';`}
          </pre>
        </div>
      </section>

      {/* Module 12 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 12 Complete", "মডিউল ১২ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: Forms & Request Handling (HTML Forms, $_GET, $_POST & Security)", "পরবর্তী: ফর্ম ও রিকোয়েস্ট হ্যান্ডলিং (HTML ফর্ম, $_GET, $_POST ও নিরাপত্তা)")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 13", "মডিউল ১৩-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module12MultipleFiles;
