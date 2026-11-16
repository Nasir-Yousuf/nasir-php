import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { HelpCircle, CheckCircle2, XCircle, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export function QuizCard({ quiz, onComplete }) {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelectedIdx(idx);
    setIsAnswered(true);

    if (quiz.options[idx].correct) {
      try {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      } catch (e) {}
    }
  };

  const isCorrect = selectedIdx !== null && quiz.options[selectedIdx]?.correct;

  return (
    <div className="w-full p-5 rounded-2xl bg-gradient-to-br from-[#161a2d] to-[#101424] border border-amber-400/40 shadow-xl space-y-4">
      {/* Quiz Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
            {t("Knowledge Checkpoint", "জ্ঞান যাচাই কুইজ")}
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">Quick Test</span>
      </div>

      {/* Question */}
      <h4 className="text-sm sm:text-base font-bold text-white font-sans leading-snug">
        {t(quiz.question, quiz.questionBn)}
      </h4>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {quiz.options.map((opt, idx) => {
          const isThisSelected = selectedIdx === idx;
          let btnStyle = "bg-[#141828] border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-[#1a2034]";

          if (isAnswered) {
            if (opt.correct) {
              btnStyle = "bg-emerald-950/60 border-emerald-400 text-emerald-200 ring-1 ring-emerald-400";
            } else if (isThisSelected) {
              btnStyle = "bg-rose-950/60 border-rose-400 text-rose-200 ring-1 ring-rose-400";
            } else {
              btnStyle = "bg-[#101320] border-slate-900 text-slate-600 opacity-50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`p-3 rounded-xl border text-left font-mono text-xs transition-all flex items-center justify-between group ${btnStyle}`}
            >
              <span>{t(opt.text, opt.textBn)}</span>
              {isAnswered && opt.correct && (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              )}
              {isAnswered && isThisSelected && !opt.correct && (
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback Banner */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-xl border text-xs space-y-1 ${
            isCorrect
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
              : 'bg-amber-500/10 border-amber-500/30 text-amber-200'
          }`}
        >
          <div className="font-bold flex items-center gap-1.5">
            {isCorrect ? (
              <>
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t("Brilliant! Exactly right.", "দারুণ! একদম সঠিক উত্তর।")}</span>
              </>
            ) : (
              <span>{t("Good try! Here is why:", "ভালো চেষ্টা! সঠিক কারণ জেনে নিন:")}</span>
            )}
          </div>
          <p className="font-sans leading-relaxed text-[11px] text-slate-300">
            {t(quiz.explanation, quiz.explanationBn)}
          </p>
        </motion.div>
      )}
    </div>
  );
}
