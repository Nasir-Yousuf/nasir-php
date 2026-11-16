import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle2, Award } from 'lucide-react';

export function ProgressTracker({ currentPage, totalPages = 26 }) {
  const { t } = useLanguage();
  const [completedSlides, setCompletedSlides] = useState(() => {
    try {
      const saved = localStorage.getItem('completed_slides');
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  useEffect(() => {
    if (!completedSlides.includes(currentPage)) {
      const updated = [...completedSlides, currentPage];
      setCompletedSlides(updated);
      try {
        localStorage.setItem('completed_slides', JSON.stringify(updated));
      } catch {}
    }
  }, [currentPage]);

  const count = completedSlides.length;
  const percent = Math.min(100, Math.round((count / totalPages) * 100));

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141828] border border-slate-800 text-xs font-mono">
      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
      <span className="text-slate-400 hidden sm:inline">
        {t("Progress:", "অগ্রগতি:")}
      </span>
      <span className="font-bold text-white">{count}/{totalPages}</span>
      <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden ml-1">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-amber-400 font-bold hidden md:inline">{percent}%</span>
    </div>
  );
}
