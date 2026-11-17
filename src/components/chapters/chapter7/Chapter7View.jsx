import React from 'react';
import { ProjectArchitectureSection } from './ProjectArchitectureSection';
import { FolderTree, Award, RotateCcw, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../../contexts/LanguageContext';

export function Chapter7View({ onRestartCourse }) {
  const { lang, t } = useLanguage();

  const handleCelebrate = () => {
    try {
      confetti({ particleCount: 100, spread: 100, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <div className="space-y-12">
      {/* Chapter 7 Hero Header */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#12162b] via-[#0d1020] to-[#1e1329] border border-amber-500/30 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
            <FolderTree className="w-3.5 h-3.5" />
            <span>{t("CHAPTER 07 · THE REAL PROJECT", "অধ্যায় ০৭ · বাস্তব প্রজেক্ট")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Our Actual PHP Project: Architecture & File Structure",
              "আমাদের আসল পিএইচপি প্রজেক্ট: আর্কিটেকচার ও ফাইল স্ট্রাকচার"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "Deconstruct the verified structure of php-class-two. Explore how entry routers, controllers, output-buffering view engines, reusable header/footer layouts, and Composer PSR-4 autoloading unite into a production architecture.",
              "আমাদের php-class-two প্রজেক্টের ভেরিফায়েড ডিরেক্টরি স্ট্রাকচার পর্যবেক্ষণ করুন। রাউটার, কন্ট্রোলার, ১০-লাইনের ভিউ ইঞ্জিন বাফারিং, লেআউট এবং কম্পোজার অটোলোডিং কীভাবে একসাথে কাজ করে তা বুঝুন।"
            )}
          </p>
        </div>
      </div>

      {/* 7.1 - 7.3 Project Architecture Section */}
      <section id="section-7-1" className="space-y-4 scroll-mt-24">
        <ProjectArchitectureSection />
      </section>

      {/* Course Completion Celebration Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#141829] to-cyan-950/40 border border-emerald-500/40 text-center space-y-4 shadow-2xl">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
          <Award className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-black text-white">
          {t("Congratulations! You Have Mastered the Full Web & PHP Journey!", "অভিনন্দন! আপনি ওয়েব ও পিএইচপির পূর্ণাঙ্গ জার্নি সম্পন্ন করেছেন!")}
        </h3>

        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t(
            "From the physical reality of the internet and relational database storage to PDO data transformation, array manipulation, and full MVC architecture — you now understand PHP from first principles.",
            "ইন্টারনেটের মূলনীতি ও ডাটাবেজ স্টোরেজ থেকে শুরু করে PDO ডাটা রূপান্তর, অ্যারে অপারেশন এবং পূর্ণাঙ্গ MVC আর্কিটেকচার — আপনি পিএইচপিকে প্রথম নীতি থেকে গভীরভাবে আয়ত্ত করেছেন।"
          )}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleCelebrate}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
          >
            🎉 {t("Celebrate Completion!", "উদযাপন করুন!")}
          </button>

          {onRestartCourse && (
            <button
              onClick={onRestartCourse}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1b2038] hover:bg-[#252c4d] text-slate-300 text-xs font-mono font-bold transition-all border border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t("Restart from Chapter 1", "অধ্যায় ১ থেকে পুনরায় শুরু")}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Chapter7View;
