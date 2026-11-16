import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Cpu, ArrowRight, Database, Layout } from 'lucide-react';

export function ControllerAnimation() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('data');

  const students = [
    { id: 1, name: "Borno", email: "borno@gmail.com" },
    { id: 2, name: "Patwari", email: "patwari@gmail.com" },
    { id: 3, name: "Golam", email: "golam@gmail.com" }
  ];

  return (
    <AnimationCanvas
      title="How HelloWorld.php Acts as a Data Controller"
      titleBn="HelloWorld.php যেভাবে কন্ট্রোলার হিসেবে ডাটা প্রস্তুত করে"
      subtitle="Controller Rule: Never echo HTML inside a controller! Prepare the data payload and pass it to view()."
      subtitleBn="কন্ট্রোলারের নিয়ম: কন্ট্রোলারে সরাসরি HTML echo করবেন না! ডাটা সাজিয়ে view() ফাংশনে পাঠিয়ে দিন।"
      badge="Controller Payload Engine"
      badgeBn="কন্ট্রোলার পেলোড ইঞ্জিন"
    >
      <div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-between gap-4 py-1">
        {/* Left: Controller Code Action */}
        <div className="w-full md:w-56 p-3.5 rounded-2xl bg-[#151928] border border-pink-500/30 space-y-2 shadow-lg">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-pink-400">
            <Cpu className="w-4 h-4" />
            <span>HelloWorld::index()</span>
          </div>

          <div className="p-2 rounded-xl bg-[#0a0d16] font-mono text-[11px] text-slate-300 space-y-1 border border-slate-800">
            <div className="text-slate-500">// 1. Build records in RAM:</div>
            <div className="text-pink-300">$this-&gt;students = [...];</div>
            <div className="text-slate-500 pt-1">// 2. Hand to view helper:</div>
            <div className="text-amber-300 font-bold">return view("home", [</div>
            <div className="text-amber-300 pl-3">"students" =&gt; $students</div>
            <div className="text-amber-300">]);</div>
          </div>

          <div className="text-[10px] text-slate-400">
            {t("Separation of Concerns: Logic decoupled from HTML!", "লজিক ও ডিজাইন সম্পূর্ণ আলাদা রাখা হয়েছে!")}
          </div>
        </div>

        {/* Arrow to Payload */}
        <div className="hidden md:flex flex-col items-center">
          <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="w-5 h-5 text-amber-400" />
          </motion.div>
          <span className="text-[9px] font-mono text-slate-500">Payload</span>
        </div>

        {/* Center: The Prepared Data Payload (Array of Associative Arrays) */}
        <div className="flex-1 p-3.5 rounded-2xl bg-[#141828] border-2 border-amber-400/40 space-y-2 shadow-xl">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-amber-400 font-bold flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              <span>$students Payload (3 Records)</span>
            </span>
            <span className="text-[10px] text-slate-400 bg-[#0a0d16] px-1.5 py-0.5 rounded">
              Array of Assoc
            </span>
          </div>

          <div className="space-y-1.5">
            {students.map((s, idx) => (
              <div
                key={s.id}
                className="p-2 rounded-xl bg-[#0a0d16] border border-slate-800 flex items-center justify-between text-xs font-mono"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center text-[10px]">
                    {idx}
                  </span>
                  <span className="text-white font-bold">{s.name}</span>
                </div>
                <span className="text-slate-400 text-[11px]">{s.email}</span>
              </div>
            ))}
          </div>

          <div className="text-[10px] font-mono text-amber-300/80 text-center">
            {t("Ready to be injected into views/home.php", "views/home.php ফাইলে পাঠানোর জন্য প্রস্তুত")}
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
