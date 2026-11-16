import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Globe, 
  Cpu, 
  Layers, 
  Wrench, 
  FileCode, 
  Monitor, 
  ExternalLink, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FolderTree
} from 'lucide-react';

export function ArchitectureDiagram({ onSelectFile }) {
  const { t } = useLanguage();
  const [activeNode, setActiveNode] = useState('web.php');
  const [requestStep, setRequestStep] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);

  const nodes = {
    'browser_in': {
      id: 'browser_in',
      name: 'User / Web Browser',
      nameBn: 'ব্যবহারকারী / ওয়েব ব্রাউজার',
      type: 'Client (Input)',
      color: '#38BDF8',
      desc: 'User types URL: http://localhost/web.php?page=home',
      descBn: 'ব্যবহারকারী URL ব্রাউজ করে: http://localhost/web.php?page=home',
      codeSnippet: `GET /web.php?page=home HTTP/1.1\nHost: localhost`
    },
    'web.php': {
      id: 'web.php',
      name: 'Front Router (web.php)',
      nameBn: 'ফ্রন্ট রাউটার (web.php)',
      type: 'Root Controller',
      color: '#F59E0B',
      desc: 'Entry file! Reads $_GET[\'page\'] and dispatches to HelloWorld controller methods.',
      descBn: 'প্রবেশদ্বার! এটি $_GET[\'page\'] পড়ে এবং HelloWorld কন্ট্রোলারের মেথড চালায়।',
      codeSnippet: `require_once "vendor/autoload.php";\n$helloWorld = new HelloWorld();\nif ($_GET['page'] == "home") {\n  $helloWorld->index();\n}`
    },
    'vendor': {
      id: 'vendor',
      name: 'Composer Autoloader',
      nameBn: 'কম্পোজার অটোলোডার',
      type: 'Dependency Manager',
      color: '#A855F7',
      desc: 'Preloads helpers.php and maps App\\classes\\ namespace to app/ folder using PSR-4.',
      descBn: 'helpers.php আগে থেকেই লোড করে এবং PSR-4 নিয়মে ক্লাস খুঁজে বের করে।',
      codeSnippet: `// vendor/autoload.php\n"autoload": {\n  "psr-4": { "App\\\\": "app/" },\n  "files": [ "app/helpers/helpers.php" ]\n}`
    },
    'controller': {
      id: 'controller',
      name: 'HelloWorld.php Controller',
      nameBn: 'HelloWorld.php কন্ট্রোলার',
      type: 'Controller (app/classes/)',
      color: '#EC4899',
      desc: 'Prepares $students associative array and calls view("home", ["students" => $this->students]).',
      descBn: 'ছাত্রদের তালিকা (Array) সাজায় এবং view("home", [...]) ফাংশনে পাঠিয়ে দেয়।',
      codeSnippet: `$this->students = [\n  0 => ["id" => 1, "name" => "Borno"],\n  1 => ["id" => 2, "name" => "Patwari"]\n];\nreturn view("home", ["students" => $this->students]);`
    },
    'helpers': {
      id: 'helpers',
      name: 'View Engine (helpers.php)',
      nameBn: 'ভিউ ইঞ্জিন (helpers.php)',
      type: 'Utility Engine',
      color: '#06B6D4',
      desc: '10-line view engine: uses ob_start() to buffer HTML and extract($data) to unpack variables!',
      descBn: '১০ লাইনের ভিউ ইঞ্জিন: ob_start() দিয়ে বাফারে ধরে এবং extract() দিয়ে ভেরিয়েবল তৈরি করে!',
      codeSnippet: `function view($fileName, $data = []) {\n  ob_start();\n  extract($data); // ['students' => $arr] -> $students\n  include "views/" . $fileName . ".php";\n  print ob_get_clean();\n}`
    },
    'views': {
      id: 'views',
      name: 'Views & Partials (views/home.php)',
      nameBn: 'ভিউ টেমপ্লেট (views/home.php)',
      type: 'UI Template',
      color: '#10B981',
      desc: 'Assembles header.php (navbar) + foreach($students) table rows + footer.php into full HTML!',
      descBn: 'header.php (ন্যাভবার) + foreach দিয়ে টেবিল + footer.php সব মিলিয়ে পূর্ণাঙ্গ HTML বানায়!',
      codeSnippet: `<?php include "includes/header.php"; ?>\n<table>\n<?php foreach($students as $student) { ?>\n  <tr><td><?= $student['name']; ?></td></tr>\n<?php } ?>\n</table>\n<?php include "includes/footer.php"; ?>`
    },
    'browser_out': {
      id: 'browser_out',
      name: 'Rendered Browser Page',
      nameBn: 'ব্রাউজারে চূড়ান্ত ফলাফল',
      type: 'Client (Output)',
      color: '#10B981',
      desc: 'User sees complete styled Bootstrap table with student list. PHP has terminated on server!',
      descBn: 'ব্যবহারকারী সম্পূর্ণ বুটস্ট্র্যাপ টেবিল দেখতে পায়। সার্ভারে PHP এর কাজ শেষ!',
      codeSnippet: `<!DOCTYPE html>\n<html>\n  <!-- Complete compiled HTML document -->\n</html>`
    }
  };

  const currentNode = nodes[activeNode] || nodes['web.php'];

  const runSimulation = () => {
    setIsSimulating(true);
    const sequence = ['browser_in', 'web.php', 'vendor', 'controller', 'helpers', 'views', 'browser_out'];
    let step = 0;

    const interval = setInterval(() => {
      step++;
      if (step >= sequence.length) {
        clearInterval(interval);
        setIsSimulating(false);
      } else {
        setActiveNode(sequence[step]);
        setRequestStep(step + 1);
      }
    }, 1800);
  };

  return (
    <div className="w-full space-y-4">
      {/* Top Banner (CPU/ALU style from screenshot) */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#171b2d] via-[#121626] to-[#171b2d] border border-amber-400/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-slate-950 shadow-lg shrink-0"
            style={{ backgroundColor: currentNode.color }}
          >
            <Cpu className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-mono font-bold text-white text-base">
                {t(currentNode.name, currentNode.nameBn)}
              </h3>
              <span 
                className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider"
                style={{ backgroundColor: `${currentNode.color}25`, color: currentNode.color, border: `1px solid ${currentNode.color}50` }}
              >
                {currentNode.type}
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans mt-0.5 leading-relaxed">
              {t(currentNode.desc, currentNode.descBn)}
            </p>
          </div>
        </div>

        {/* Legend / Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-yellow-300 text-slate-950 font-mono font-bold text-xs shadow-lg shadow-amber-500/20 active:scale-95 disabled:opacity-40 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isSimulating ? t("Simulating Request...", "রিকোয়েস্ট চলছে...") : t("▶ Trace Request Journey", "▶ রিকোয়েস্টের যাত্রা দেখুন")}</span>
          </button>
        </div>
      </div>

      {/* Main Architecture Visual Diagram Canvas (Inspired by Reference Screenshot) */}
      <div className="relative w-full rounded-3xl bg-[#0c0e18] border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #777BB4 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Top Header & Boundary Label */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-slate-300">
              Interactive Execution Architecture — php-class-two
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span className="flex items-center gap-1 text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400" /> Request (→)
            </span>
            <span className="flex items-center gap-1 text-purple-400">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> Autoload (↓)
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> HTML Output (→)
            </span>
          </div>
        </div>

        {/* The 3 Columns Grid: [Client Input] -> [SERVER BOUNDARY BOX (web.php + vendor + classes + helpers + views)] -> [Client Output] */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center my-auto py-4">
          {/* Left Column: Client Browser Request (Col 2.5) */}
          <div className="md:col-span-3 flex flex-col items-center">
            <button
              onClick={() => setActiveNode('browser_in')}
              className={`w-full p-4 rounded-2xl border transition-all text-center space-y-2 group ${
                activeNode === 'browser_in'
                  ? 'bg-sky-500/20 border-sky-400 shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)] ring-2 ring-sky-400/50'
                  : 'bg-[#151928] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="w-9 h-9 mx-auto rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs font-bold text-white group-hover:text-sky-300">
                User Browser
              </div>
              <p className="text-[10px] text-slate-400">
                Client (Input Request)
              </p>
              <div className="text-[9px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                GET ?page=home
              </div>
            </button>
            <span className="text-[10px] text-slate-500 font-mono mt-1">From Operator</span>
          </div>

          {/* Center Column: SERVER BOUNDARY BOX (Col 6) */}
          <div className="md:col-span-6 p-4 rounded-3xl bg-[#121524]/90 border-2 border-slate-700/80 shadow-2xl relative space-y-3">
            {/* Box Header Label */}
            <div className="text-center">
              <span className="px-3 py-1 rounded-full bg-[#1e2338] border border-slate-700 text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">
                PHP Server Boundary Box (Apache / RAM)
              </span>
            </div>

            {/* Top Row: web.php Router + vendor/autoload.php */}
            <div className="grid grid-cols-2 gap-3">
              {/* web.php Router */}
              <button
                onClick={() => setActiveNode('web.php')}
                className={`p-3 rounded-2xl border transition-all text-center space-y-1 group ${
                  activeNode === 'web.php'
                    ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_-3px_rgba(245,158,11,0.5)] ring-2 ring-amber-400/50'
                    : 'bg-[#161b2e] border-slate-800 hover:border-amber-400/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-amber-400 font-bold">Entry Point</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <div className="font-mono text-xs font-bold text-white group-hover:text-amber-300">
                  web.php (Router)
                </div>
                <div className="text-[9px] text-slate-400 truncate">
                  $_GET['page'] Dispatcher
                </div>
              </button>

              {/* vendor/autoload.php */}
              <button
                onClick={() => setActiveNode('vendor')}
                className={`p-3 rounded-2xl border transition-all text-center space-y-1 group ${
                  activeNode === 'vendor'
                    ? 'bg-purple-500/20 border-purple-400 shadow-[0_0_20px_-3px_rgba(168,85,247,0.5)] ring-2 ring-purple-400/50'
                    : 'bg-[#161b2e] border-slate-800 hover:border-purple-400/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-purple-400 font-bold">Composer</span>
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                </div>
                <div className="font-mono text-xs font-bold text-white group-hover:text-purple-300">
                  vendor/autoload.php
                </div>
                <div className="text-[9px] text-slate-400 truncate">
                  PSR-4 Class Loader
                </div>
              </button>
            </div>

            {/* Middle Row: HelloWorld Controller & helpers.php View Engine */}
            <div className="grid grid-cols-2 gap-3">
              {/* HelloWorld.php Controller */}
              <button
                onClick={() => setActiveNode('controller')}
                className={`p-3 rounded-2xl border transition-all text-center space-y-1 group ${
                  activeNode === 'controller'
                    ? 'bg-pink-500/20 border-pink-400 shadow-[0_0_20px_-3px_rgba(236,72,153,0.5)] ring-2 ring-pink-400/50'
                    : 'bg-[#161b2e] border-slate-800 hover:border-pink-400/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-pink-400 font-bold">Logic</span>
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                </div>
                <div className="font-mono text-xs font-bold text-white group-hover:text-pink-300">
                  HelloWorld.php
                </div>
                <div className="text-[9px] text-slate-400 truncate">
                  Prepares $students Array
                </div>
              </button>

              {/* helpers.php View Engine */}
              <button
                onClick={() => setActiveNode('helpers')}
                className={`p-3 rounded-2xl border transition-all text-center space-y-1 group ${
                  activeNode === 'helpers'
                    ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_20px_-3px_rgba(6,182,212,0.5)] ring-2 ring-cyan-400/50'
                    : 'bg-[#161b2e] border-slate-800 hover:border-cyan-400/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-cyan-400 font-bold">Helper</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>
                <div className="font-mono text-xs font-bold text-white group-hover:text-cyan-300">
                  helpers.php (view())
                </div>
                <div className="text-[9px] text-slate-400 truncate">
                  ob_start() & extract()
                </div>
              </button>
            </div>

            {/* Bottom Row: Views & Partials (home.php) */}
            <button
              onClick={() => setActiveNode('views')}
              className={`w-full p-3.5 rounded-2xl border transition-all text-center space-y-1 group ${
                activeNode === 'views'
                  ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] ring-2 ring-emerald-400/50'
                  : 'bg-[#161b2e] border-slate-800 hover:border-emerald-400/40'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-emerald-400 font-bold">UI Templates (views/)</span>
                <span className="text-slate-400 font-mono text-[9px]">header.php + home.php + footer.php</span>
              </div>
              <div className="font-mono text-xs font-bold text-white group-hover:text-emerald-300">
                views/home.php (HTML Compiler with foreach loop)
              </div>
            </button>
          </div>

          {/* Right Column: Client Browser Output (Col 3) */}
          <div className="md:col-span-3 flex flex-col items-center">
            <button
              onClick={() => setActiveNode('browser_out')}
              className={`w-full p-4 rounded-2xl border transition-all text-center space-y-2 group ${
                activeNode === 'browser_out'
                  ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] ring-2 ring-emerald-400/50'
                  : 'bg-[#151928] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="w-9 h-9 mx-auto rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs font-bold text-white group-hover:text-emerald-300">
                Display Output
              </div>
              <p className="text-[10px] text-slate-400">
                Rendered HTML & CSS
              </p>
              <div className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Bootstrap Table
              </div>
            </button>
            <span className="text-[10px] text-slate-500 font-mono mt-1">To Operator (Human Eyes)</span>
          </div>
        </div>

        {/* Selected Node Code Preview & Quick Inspector */}
        <div className="relative z-10 p-3.5 rounded-2xl bg-[#141828]/95 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Selected Node Code:</span>
            <span className="font-bold text-white">{currentNode.id}</span>
          </div>

          <pre className="text-slate-300 bg-[#0a0d16] p-2 rounded-lg border border-slate-800/80 max-w-md truncate text-[11px]">
            {currentNode.codeSnippet.split('\n')[0]} ...
          </pre>

          {onSelectFile && (
            <button
              onClick={() => onSelectFile(currentNode.id)}
              className="flex items-center gap-1 text-[#FACC15] hover:underline text-xs font-bold shrink-0"
            >
              <span>Inspect Full File</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
