import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { FileJson, ArrowRight, Check, Zap } from 'lucide-react';

export function ComposerAnimation() {
  const { t } = useLanguage();
  const [selectedClass, setSelectedClass] = useState('HelloWorld');

  const mapping = {
    'HelloWorld': { class: 'App\\classes\\HelloWorld', path: 'app/classes/HelloWorld.php' },
    'Car': { class: 'App\\classes\\Car', path: 'app/classes/Car.php' },
    'NewClass': { class: 'App\\classes\\NewClass', path: 'app/classes/NewClass.php' }
  };

  const current = mapping[selectedClass];

  return (
    <AnimationCanvas
      title="How Composer Resolves PSR-4 Namespaces & Preloads Helper Files"
      titleBn="কম্পোজার যেভাবে PSR-4 নেমস্পেস খুঁজে বের করে এবং ফাইল লোড করে"
      subtitle={`PSR-4: 'App\\' maps to 'app/'. Calling new ${current.class}() automatically locates ${current.path}!`}
      subtitleBn={`PSR-4: 'App\\' মানে 'app/' ফোল্ডার। new ${current.class}() লিখলে নিজে থেকেই ${current.path} ফাইল খুঁজে নেয়!`}
      badge="Composer Autoload Engine"
      badgeBn="কম্পোজার অটোলোড ইঞ্জিন"
    >
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
        {/* Left: PSR-4 for Classes */}
        <div className="p-4 rounded-2xl bg-[#141828] border-2 border-purple-500/40 space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-purple-400">
              1. PSR-4 Autoloading (Classes)
            </span>
            <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-1.5 py-0.5 rounded">
              On-Demand
            </span>
          </div>

          <div className="flex gap-1.5 font-mono text-xs">
            {['HelloWorld', 'Car', 'NewClass'].map(c => (
              <button
                key={c}
                onClick={() => setSelectedClass(c)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  selectedClass === c ? 'bg-purple-600 text-white shadow-md' : 'bg-[#0a0d16] text-slate-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="p-2.5 rounded-xl bg-[#0a0d16] font-mono text-xs space-y-1.5 border border-slate-800">
            <div className="text-slate-400 text-[10px]">When PHP executes:</div>
            <div className="text-amber-300 font-bold">$obj = new {current.class}();</div>
            <div className="text-slate-400 text-[10px] pt-1">Composer maps to file on disk:</div>
            <div className="text-emerald-400 font-bold">{current.path}</div>
          </div>
        </div>

        {/* Right: "files" for Procedural Functions */}
        <div className="p-4 rounded-2xl bg-[#141828] border-2 border-cyan-500/40 space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-cyan-400">
              2. "files" Array (Helpers)
            </span>
            <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded">
              Preload at Boot
            </span>
          </div>

          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            {t(
              "Why is helpers.php in 'files' instead of 'psr-4'? Because procedural functions like view() don't belong to a class and cannot be autoloaded on-demand!",
              "helpers.php কেন psr-4 এ নেই? কারণ view() এর মতো সাধারণ ফাংশন কোনো ক্লাসের অংশ নয়, তাই এগুলোকে সরাসরি ক্লাসের নামে খোঁজা যায় না!"
            )}
          </p>

          <div className="p-2.5 rounded-xl bg-[#0a0d16] font-mono text-xs border border-slate-800 space-y-1">
            <div className="text-cyan-300 font-bold">"files": [ "app/helpers/helpers.php" ]</div>
            <div className="text-[10px] text-emerald-400">
              ✓ Loaded automatically into memory on every request!
            </div>
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
