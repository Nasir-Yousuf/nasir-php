import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout, Check, Sparkles } from 'lucide-react';

export function TemplateAssemblyAnimation() {
  const { t } = useLanguage();
  const [brandName, setBrandName] = useState('My PHP Project');
  const [activePage, setActivePage] = useState('home');

  return (
    <AnimationCanvas
      title="How header.php & footer.php Assemble into Any Page (DRY Principle)"
      titleBn="header.php এবং footer.php যেভাবে প্রতিটি পেইজে যুক্ত হয় (DRY মূলনীতি)"
      subtitle="DRY Principle (Don't Repeat Yourself): Change the navbar once in header.php, and every page updates instantly!"
      subtitleBn="DRY মূলনীতি: header.php তে একবার ন্যাভবার পরিবর্তন করলে সবগুলো পেইজ সাথে সাথে আপডেট হয়ে যায়!"
      badge="Template Assembly Engine"
      badgeBn="টেমপ্লেট সংযোজন ইঞ্জিন"
    >
      <div className="w-full max-w-2xl flex flex-col items-center gap-4 py-1">
        {/* Interactive Customizer */}
        <div className="flex flex-wrap items-center justify-between gap-3 w-full bg-[#151928] p-3 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Edit header.php Brand:</span>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="px-2.5 py-1 rounded-lg bg-[#0a0d16] border border-amber-400/50 text-amber-300 font-bold text-xs focus:outline-none"
              placeholder="Navbar title..."
            />
          </div>

          <div className="flex items-center gap-1 text-xs font-mono">
            <span className="text-slate-400 mr-1">Preview Page:</span>
            {['home', 'about', 'contact', 'login'].map(page => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`px-2 py-0.5 rounded capitalize font-bold transition-all ${
                  activePage === page ? 'bg-emerald-500 text-slate-950' : 'bg-[#1e2438] text-slate-400 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* The 3-Block Assembled Page Preview */}
        <div className="w-full max-w-lg rounded-2xl bg-[#0a0d16] border-2 border-slate-700 shadow-2xl overflow-hidden text-xs font-mono space-y-1 p-2">
          {/* Block 1: header.php */}
          <div className="p-3 rounded-xl bg-[#1a233c] border border-sky-500/40 space-y-1">
            <div className="flex items-center justify-between text-[10px] text-sky-400 font-bold uppercase">
              <span>Block 1: views/includes/header.php</span>
              <span className="bg-sky-500/20 px-1.5 py-0.2 rounded">Included</span>
            </div>
            <div className="flex items-center justify-between bg-[#0e1424] p-2 rounded-lg text-slate-200">
              <span className="font-bold text-amber-300">{brandName || 'Navbar Brand'}</span>
              <div className="flex gap-2 text-[10px] text-slate-400">
                <span className={activePage === 'home' ? 'text-emerald-400 font-bold' : ''}>Home</span>
                <span className={activePage === 'about' ? 'text-emerald-400 font-bold' : ''}>About</span>
                <span className={activePage === 'contact' ? 'text-emerald-400 font-bold' : ''}>Contact</span>
                <span className={activePage === 'login' ? 'text-emerald-400 font-bold' : ''}>Login</span>
              </div>
            </div>
          </div>

          {/* Block 2: Page Body */}
          <div className="p-3 rounded-xl bg-[#241a3c] border border-purple-500/40 space-y-1">
            <div className="flex items-center justify-between text-[10px] text-purple-400 font-bold uppercase">
              <span>Block 2: views/{activePage}.php (Page Content)</span>
              <span className="bg-purple-500/20 px-1.5 py-0.2 rounded">Dynamic</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0e1424] text-slate-300 text-center text-xs">
              {activePage === 'home' && "📊 Table of All Students ($students foreach loop)"}
              {activePage === 'about' && "📖 About Us Information Content Card"}
              {activePage === 'contact' && "✉️ Contact Us Form with Message Input"}
              {activePage === 'login' && "🔐 User Login Form (Username + Password)"}
            </div>
          </div>

          {/* Block 3: footer.php */}
          <div className="p-2.5 rounded-xl bg-[#142622] border border-emerald-500/40 space-y-1">
            <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold uppercase">
              <span>Block 3: views/includes/footer.php</span>
              <span className="bg-emerald-500/20 px-1.5 py-0.2 rounded">Included</span>
            </div>
            <div className="text-[10px] text-slate-400 text-center">
              &lt;script src="bootstrap.bundle.min.js"&gt;&lt;/script&gt; &lt;script src="main.js"&gt;&lt;/script&gt; &lt;/body&gt;
            </div>
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
