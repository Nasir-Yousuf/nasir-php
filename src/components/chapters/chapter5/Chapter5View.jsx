import React from 'react';
import { WhyPhpComparison } from './WhyPhpComparison';
import { Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function Chapter5View({ onNextChapter }) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Chapter 5 Hero Header */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c140c] via-[#0d1020] to-[#0c1a29] border border-amber-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
            <Scale className="w-3.5 h-3.5" />
            <span>{t("CHAPTER 05 · ARCHITECTURAL SELECTION", "অধ্যায় ০৫ · প্রযুক্তি নির্বাচন")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Why PHP? PHP vs Node.js, React and Next.js",
              "কেন পিএইচপি? পিএইচপি বনাম Node.js, React এবং Next.js"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "A realistic, balanced engineering analysis. Understand how traditional PHP and Next.js differ in runtime architectures, why PHP dominates budget hosting, and how to select the right tool for real-world projects.",
              "কোনো অতিরঞ্জন ছাড়া বস্তুনিষ্ঠ ইঞ্জিনিয়ারিং বিশ্লেষণ। ট্র্যাডিশনাল পিএইচপি এবং আধুনিক নেক্সট.জেএস এর আর্কিটেকচারাল পার্থক্য, সিপ্যানেল ও ভিপিএস হোস্টিং খরচ এবং সঠিক প্রযুক্তি বেছে নেওয়ার মূলনীতি।"
            )}
          </p>
        </div>
      </div>

      {/* 5.1 - 5.7 Why PHP Content */}
      <section id="section-5-1" className="space-y-4 scroll-mt-24">
        <WhyPhpComparison />
      </section>

      {/* Chapter 5 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Chapter 5 Complete", "অধ্যায় ৫ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: PHP Fundamentals and Lessons (Interactive Side-by-Side Curriculum)", "পরবর্তী: পিএইচপি ফান্ডামেন্টালস ও লেসন (ইন্টারেক্টিভ পাশাপাশি শিক্ষাক্রম)")}
          </p>
        </div>

        {onNextChapter && (
          <button
            onClick={onNextChapter}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Chapter 6", "অধ্যায় ৬-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Chapter5View;
