import React from 'react';
import { Play, Pause, RotateCcw, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function AnimationCanvas({
  title,
  titleBn,
  subtitle,
  subtitleBn,
  children,
  isPlaying,
  onTogglePlay,
  onReset,
  badge = "Interactive Visualizer",
  badgeBn = "ইন্টারেক্টিভ ভিজ্যুয়ালাইজার",
  stepInfo = null
}) {
  const { lang, t } = useLanguage();

  return (
    <div className="relative w-full rounded-2xl bg-[#0e111c] border border-slate-800/80 shadow-2xl overflow-hidden flex flex-col group">
      {/* Subtle top glow & background grid */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Canvas Top Bar */}
      <div className="relative z-10 px-4 py-2.5 bg-[#151928]/90 border-b border-slate-800/80 flex items-center justify-between gap-3 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">
            {t(badge, badgeBn)}
          </span>
          <span className="font-semibold text-xs text-slate-200 tracking-tight hidden sm:inline">
            {t(title, titleBn)}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {stepInfo && (
            <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-[#101422] border border-slate-800">
              {stepInfo}
            </span>
          )}

          {onTogglePlay && (
            <button
              onClick={onTogglePlay}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1e2438] hover:bg-[#28304a] text-slate-200 text-xs font-mono transition-all"
              title={isPlaying ? "Pause animation" : "Play animation"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400 fill-current" />
                  <span className="hidden sm:inline">{t("Pause", "থামান")}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                  <span className="hidden sm:inline">{t("Animate", "প্লে করুন")}</span>
                </>
              )}
            </button>
          )}

          {onReset && (
            <button
              onClick={onReset}
              className="p-1 rounded-lg bg-[#1e2438] hover:bg-[#28304a] text-slate-400 hover:text-slate-200 transition-all"
              title="Reset Animation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative min-h-[220px] sm:min-h-[250px] p-4 flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#181d30]/40 via-[#0e111c] to-[#0a0d16] overflow-hidden">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #777BB4 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {children}
      </div>

      {/* Canvas Bottom Subtitle / Explanation Banner */}
      {(subtitle || subtitleBn) && (
        <div className="px-4 py-2 bg-[#121624] border-t border-slate-800/80 text-[11px] sm:text-xs text-slate-300 font-sans flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{t(subtitle, subtitleBn)}</span>
        </div>
      )}
    </div>
  );
}
