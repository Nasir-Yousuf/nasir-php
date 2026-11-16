import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Server, Monitor, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export function ClientServerTimeline() {
  const { t } = useLanguage();
  const [activeSide, setActiveSide] = useState('server');

  return (
    <AnimationCanvas
      title="The Client-Server Wall: Where PHP Stops & JavaScript Begins"
      titleBn="ক্লায়েন্ট-সার্ভার দেয়াল: যেখানে PHP থামে এবং জাভাস্ক্রিপ্ট শুরু হয়"
      subtitle="PHP runs on the server for 15ms, generates HTML, and DIES. Then the browser receives HTML and runs main.js!"
      subtitleBn="PHP সার্ভারে মাত্র ১৫ মিলিসেকেন্ড রান করে HTML বানিয়ে শেষ হয়ে যায়। এরপর ব্রাউজার HTML পেয়ে main.js চালায়!"
      badge="Client-Server Boundary"
      badgeBn="ক্লায়েন্ট-সার্ভার সীমারেখা"
    >
      <div className="w-full max-w-2xl flex flex-col md:flex-row items-stretch justify-between gap-4 py-1">
        {/* Left: Server Side (PHP) */}
        <div
          onClick={() => setActiveSide('server')}
          className={`flex-1 p-4 rounded-2xl border-2 transition-all cursor-pointer space-y-2.5 shadow-lg ${
            activeSide === 'server'
              ? 'bg-purple-950/30 border-purple-400 ring-2 ring-purple-400/40 shadow-purple-500/20'
              : 'bg-[#141828] border-slate-800 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-purple-300">
              <Server className="w-4 h-4 text-purple-400" />
              <span>1. Server Side (PHP)</span>
            </span>
            <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded">
              0ms - 15ms
            </span>
          </div>

          <div className="space-y-1 font-mono text-[11px] text-slate-300">
            <div>✓ Executes web.php router</div>
            <div>✓ Prepares $students array</div>
            <div>✓ Compiles views/home.php</div>
            <div className="text-rose-400 font-bold pt-1 border-t border-slate-800">
              🛑 PHP stops & script dies!
            </div>
          </div>

          <div className="text-[10px] text-slate-400 font-sans">
            {t("Cannot listen to mouse clicks or scrolls!", "মাউস ক্লিক বা স্ক্রল ইভেন্ট সরাসরি ধরতে পারে না!")}
          </div>
        </div>

        {/* Center: The Network Wall */}
        <div className="flex flex-col items-center justify-center p-2 text-center">
          <div className="w-px h-8 bg-amber-400/50 hidden md:block" />
          <div className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-mono font-bold text-amber-300 whitespace-nowrap">
            Network HTTP Wall
          </div>
          <div className="w-px h-8 bg-amber-400/50 hidden md:block" />
        </div>

        {/* Right: Client Side (Browser & main.js) */}
        <div
          onClick={() => setActiveSide('client')}
          className={`flex-1 p-4 rounded-2xl border-2 transition-all cursor-pointer space-y-2.5 shadow-lg ${
            activeSide === 'client'
              ? 'bg-amber-950/30 border-amber-400 ring-2 ring-amber-400/40 shadow-amber-500/20'
              : 'bg-[#141828] border-slate-800 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300">
              <Monitor className="w-4 h-4 text-amber-400" />
              <span>2. Client Side (Browser)</span>
            </span>
            <span className="text-[10px] font-mono text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded">
              30ms+ (Interactive)
            </span>
          </div>

          <div className="space-y-1 font-mono text-[11px] text-slate-300">
            <div>✓ Receives HTML and CSS</div>
            <div>✓ Loads Bootstrap styles</div>
            <div>✓ Runs assets/js/main.js</div>
            <div className="text-emerald-400 font-bold pt-1 border-t border-slate-800">
              ⚡ Toggles .is-sticky on scroll!
            </div>
          </div>

          <div className="text-[10px] text-slate-400 font-sans">
            {t("Runs inside user browser window!", "ইউজারের ব্রাউজারের ভেতর কার্যকর থাকে!")}
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
