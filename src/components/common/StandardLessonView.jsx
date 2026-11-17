import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Lightbulb, 
  BookOpen, 
  Code2, 
  Play, 
  Terminal, 
  CheckCircle2, 
  XCircle, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight,
  RotateCcw,
  Layers,
  Zap,
  Info
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function StandardLessonView({ lesson }) {
  const { lang, t } = useLanguage();
  const [copiedTab, setCopiedTab] = useState(null);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [practiceValue, setPracticeValue] = useState(lesson.practice?.defaultValue || "");
  const [simulatedOutput, setSimulatedOutput] = useState(null);

  const handleCopy = (code, type) => {
    navigator.clipboard.writeText(code);
    setCopiedTab(type);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const handleRunPractice = () => {
    if (lesson.practice?.generateOutput) {
      setSimulatedOutput(lesson.practice.generateOutput(practiceValue));
    } else {
      setSimulatedOutput(lesson.output?.phpText || "Execution completed.");
    }
  };

  const isQuizCorrect = selectedQuizOption === lesson.recap?.quiz?.correctAnswer;

  return (
    <div className="space-y-8 py-4">
      {/* Lesson Header */}
      <div className="border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#FACC15]/10 text-amber-300 border border-amber-400/30">
            {lesson.badge || `Lesson ${lesson.id}`}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {t("9-Step Master Curriculum", "৯-ধাপের মানসম্মত শিক্ষাক্রম")}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {lang === 'bn' ? lesson.titleBn : lesson.title}
        </h2>
      </div>

      {/* STEP 1: THE QUESTION */}
      <section className="bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-lg relative overflow-hidden">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold shrink-0 mt-0.5 border border-amber-400/40">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
              {t("Step 1: The Question", "ধাপ ১: মূল প্রশ্ন (কৌতূহল উদ্ভব)")}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {lang === 'bn' ? lesson.questionBn : lesson.question}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'bn' ? lesson.questionContextBn : lesson.questionContext}
            </p>
          </div>
        </div>
      </section>

      {/* STEP 2: THE ANALOGY */}
      <section className="bg-[#0b0e1a] border border-cyan-500/30 rounded-2xl p-5 sm:p-6 shadow-lg">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold shrink-0 mt-0.5 border border-cyan-400/40">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
              {t("Step 2: The Real-World Analogy", "ধাপ ২: বাস্তব জীবনের সহজ উপমা")}
            </div>
            <h4 className="text-base font-bold text-slate-100">
              {lang === 'bn' ? lesson.analogyTitleBn : lesson.analogyTitle}
            </h4>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'bn' ? lesson.analogyBn : lesson.analogy}
            </div>
          </div>
        </div>
      </section>

      {/* STEP 3: THE CONCEPT */}
      <section className="bg-[#0a0d18] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-lg">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold shrink-0 mt-0.5 border border-purple-400/40">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">
              {t("Step 3: The Concept (What It Means in Programming)", "ধাপ ৩: প্রযুক্তিগত মূল ধারণা")}
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {lang === 'bn' ? lesson.conceptBn : lesson.concept}
            </p>
            {lesson.conceptPoints && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
                {lesson.conceptPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-[#121526] p-2.5 rounded-lg border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                    <span>{lang === 'bn' ? pt.textBn || pt.text : pt.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* STEP 4 & STEP 5: PHP CODE vs JAVASCRIPT CODE */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              {t("Step 4 & 5: PHP vs JavaScript Side-by-Side Code", "ধাপ ৪ ও ৫: পিএইচপি বনাম জাভাস্ক্রিপ্ট কোড")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* PHP Code Card */}
          <div className="bg-[#0b0e1a] border border-blue-500/40 rounded-2xl overflow-hidden shadow-xl flex flex-col">
            <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500" />
                <span className="font-mono text-xs font-bold text-blue-300">
                  PHP 8.2+ (Server-Side)
                </span>
              </div>
              <button
                onClick={() => handleCopy(lesson.code?.php, 'php')}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                {copiedTab === 'php' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedTab === 'php' ? t("Copied", "কপি হয়েছে") : t("Copy", "কপি")}</span>
              </button>
            </div>
            <pre className="p-4 font-mono text-xs text-blue-200 overflow-x-auto leading-relaxed flex-1 bg-[#060812]">
              {lesson.code?.php}
            </pre>
            <div className="p-2.5 bg-slate-950 text-[11px] font-mono text-slate-400 border-t border-slate-800">
              {lang === 'bn' ? lesson.code?.phpNoteBn || "সার্ভার এক্সিকিউশন" : lesson.code?.phpNote || "Server-side execution"}
            </div>
          </div>

          {/* JavaScript Code Card */}
          <div className="bg-[#0b0e1a] border border-amber-500/40 rounded-2xl overflow-hidden shadow-xl flex flex-col">
            <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                <span className="font-mono text-xs font-bold text-amber-300">
                  JavaScript (Client / Browser)
                </span>
              </div>
              <button
                onClick={() => handleCopy(lesson.code?.js, 'js')}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                {copiedTab === 'js' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedTab === 'js' ? t("Copied", "কপি হয়েছে") : t("Copy", "কপি")}</span>
              </button>
            </div>
            <pre className="p-4 font-mono text-xs text-amber-100 overflow-x-auto leading-relaxed flex-1 bg-[#060812]">
              {lesson.code?.js}
            </pre>
            <div className="p-2.5 bg-slate-950 text-[11px] font-mono text-slate-400 border-t border-slate-800">
              {lang === 'bn' ? lesson.code?.jsNoteBn || "ব্রাউজার কনসোল এক্সিকিউশন" : lesson.code?.jsNote || "Browser runtime execution"}
            </div>
          </div>
        </div>
      </section>

      {/* STEP 6: THE EXECUTION (Animated / Interactive Flow) */}
      <section className="bg-[#0c1020] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              {t("Step 6: The Execution (How Code Actually Runs)", "ধাপ ৬: এক্সিকিউশন (কোড কীভাবে কার্যকর হয়)")}
            </span>
          </div>
        </div>

        {lesson.executionComponent ? (
          <div className="p-2 sm:p-4 rounded-xl bg-[#070a14] border border-slate-800">
            {lesson.executionComponent}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {lesson.executionSteps?.map((step, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-white">
                    {lang === 'bn' ? step.titleBn : step.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {lang === 'bn' ? step.descBn : step.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* STEP 7: THE OUTPUT */}
      <section className="bg-[#080b16] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>{t("Step 7: The Output (What It Produces and Why)", "ধাপ ৭: আউটপুট ও তার কারণ")}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-black/80 border border-blue-500/30 font-mono text-xs">
            <span className="text-[10px] text-blue-400 block mb-1 font-bold">PHP Output:</span>
            <div className="text-emerald-400 whitespace-pre">{lesson.output?.phpText}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-black/80 border border-amber-500/30 font-mono text-xs">
            <span className="text-[10px] text-amber-400 block mb-1 font-bold">JS Output:</span>
            <div className="text-amber-200 whitespace-pre">{lesson.output?.jsText}</div>
          </div>
        </div>

        <p className="text-xs text-slate-400 pt-1">
          <strong className="text-slate-300">{t("Why this happens:", "কেন এমন আউটপুট:")} </strong>
          {lang === 'bn' ? lesson.output?.explanationBn : lesson.output?.explanation}
        </p>
      </section>

      {/* STEP 8: PRACTICE (Interactive Sandbox / Exercise) */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest">
              {t("Step 8: Interactive Practice & Playground", "ধাপ ৮: অনুশীলনী ও লাইভ ল্যাব")}
            </span>
          </div>

          <button
            onClick={handleRunPractice}
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all self-start sm:self-auto"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>{t("Test / Run Code", "রান ও টেস্ট করুন")}</span>
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-xs sm:text-sm text-slate-300">
            {lang === 'bn' ? lesson.practice?.promptBn : lesson.practice?.prompt}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              value={practiceValue}
              onChange={(e) => setPracticeValue(e.target.value)}
              placeholder={lesson.practice?.placeholder || "Enter test value..."}
              className="flex-1 min-w-[200px] px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-indigo-400"
            />
            {lesson.practice?.options && (
              <div className="flex flex-wrap gap-1.5">
                {lesson.practice.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setPracticeValue(opt)}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Practice Output */}
          {simulatedOutput && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-xl bg-black/90 border border-emerald-500/40 text-xs font-mono text-emerald-400 flex items-center justify-between"
            >
              <span>{simulatedOutput}</span>
              <span className="text-[10px] text-slate-500">{t("Simulation Result", "সিমুলেশন ফলাফল")}</span>
            </motion.div>
          )}
        </div>
      </section>

      {/* STEP 9: RECAP & KNOWLEDGE CHECK */}
      <section className="bg-[#0b0e1a] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
          <span className="text-xs font-mono font-bold text-[#FACC15] uppercase tracking-widest">
            {t("Step 9: Key Recap & Quick Knowledge Check", "ধাপ ৯: সারসংক্ষেপ ও কুইজ যাচাই")}
          </span>
        </div>

        {/* Recap Takeaways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {lesson.recap?.points?.map((pt, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 space-y-1">
              <span className="text-[10px] font-mono text-amber-400 font-bold block">
                {t(`Takeaway ${i + 1}`, `মূল কথা ${i + 1}`)}
              </span>
              <p>{lang === 'bn' ? pt.textBn || pt.text : pt.text}</p>
            </div>
          ))}
        </div>

        {/* Quick Quiz Check */}
        {lesson.recap?.quiz && (
          <div className="p-4 rounded-xl bg-[#12162a] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">
                {lang === 'bn' ? lesson.recap.quiz.questionBn : lesson.recap.quiz.question}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {t("1 Question Check", "১টি কুইজ প্রশ্ন")}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {lesson.recap.quiz.options.map((opt, i) => {
                const isSelected = selectedQuizOption === i;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedQuizOption(i);
                      setIsQuizSubmitted(true);
                    }}
                    className={`p-2.5 rounded-lg text-left text-xs transition-all border ${
                      isSelected
                        ? isQuizCorrect
                          ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300'
                          : 'bg-rose-950/40 border-rose-500 text-rose-300'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-mono mr-1.5 font-bold">{String.fromCharCode(65 + i)}.</span>
                    <span>{lang === 'bn' ? opt.textBn || opt.text : opt.text}</span>
                  </button>
                );
              })}
            </div>

            {isQuizSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-3 rounded-lg text-xs flex items-center gap-2 ${
                  isQuizCorrect
                    ? 'bg-emerald-950/60 border border-emerald-500/50 text-emerald-300'
                    : 'bg-rose-950/60 border border-rose-500/50 text-rose-300'
                }`}
              >
                {isQuizCorrect ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <XCircle className="w-4 h-4 shrink-0" />}
                <span>
                  {isQuizCorrect
                    ? (lang === 'bn' ? lesson.recap.quiz.explanationBn || "সঠিক উত্তর!" : lesson.recap.quiz.explanation || "Correct answer!")
                    : (lang === 'bn' ? "ভুল হয়েছে, আবার চেষ্টা করে দেখুন!" : "Not quite, try another option!")}
                </span>
              </motion.div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
export default StandardLessonView;
