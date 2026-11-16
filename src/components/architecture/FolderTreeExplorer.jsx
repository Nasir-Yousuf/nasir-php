import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Folder, 
  FolderOpen, 
  FileCode, 
  FileJson, 
  Layers, 
  ChevronRight, 
  ChevronDown,
  Sparkles,
  Info
} from 'lucide-react';

export function FolderTreeExplorer({ onSelectFile }) {
  const { t } = useLanguage();
  const [openFolders, setOpenFolders] = useState({
    'app': true,
    'classes': true,
    'helpers': true,
    'views': true,
    'includes': true,
    'assets': false
  });
  const [selectedFile, setSelectedFile] = useState('web.php');

  const toggleFolder = (folder) => {
    setOpenFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  const fileExplanations = {
    'web.php': {
      name: 'web.php',
      role: 'Front Controller Router',
      roleBn: 'ফ্রন্ট কন্ট্রোলার রাউটার',
      badge: 'Entry Point',
      badgeColor: '#F59E0B',
      desc: 'The single web entry point! Inspects $_GET["page"] and dispatches to the right method on the HelloWorld controller.',
      descBn: 'একমাত্র প্রবেশদ্বার! এটি ব্রাউজারের $_GET["page"] পড়ে এবং HelloWorld কন্ট্রোলারের সঠিক মেথড চালিয়ে দেয়।'
    },
    'HelloWorld.php': {
      name: 'app/classes/HelloWorld.php',
      role: 'Page Controller Class',
      roleBn: 'পেইজ কন্ট্রোলার ক্লাস',
      badge: 'Controller',
      badgeColor: '#EC4899',
      desc: 'Prepares the $students array of records and hands them to view("home", ["students" => $this->students]).',
      descBn: 'ছাত্রদের ডাটা অ্যারে সাজায় এবং view("home", ["students" => $this->students]) ফাংশনে পাঠিয়ে দেয়।'
    },
    'Car.php': {
      name: 'app/classes/Car.php',
      role: 'OOP Domain Model',
      roleBn: 'অবজেক্ট ওরিয়েন্টেড মডেল',
      badge: 'Data Model',
      badgeColor: '#8B5CF6',
      desc: 'OOP class blueprint with properties ($color, $model, $name) and constructor __construct().',
      descBn: 'অবজেক্ট ওরিয়েন্টেড ব্লুপ্রিন্ট যেখানে $name, $color প্রপার্টি এবং __construct() মেথড আছে।'
    },
    'helpers.php': {
      name: 'app/helpers/helpers.php',
      role: '10-Line Custom View Engine',
      roleBn: '১০ লাইনের কাস্টম ভিউ ইঞ্জিন',
      badge: 'View Engine',
      badgeColor: '#06B6D4',
      desc: 'Uses ob_start() to capture HTML in memory and extract($data) to turn array keys into real local variables!',
      descBn: 'ob_start() দিয়ে মেমরি বাফারে ধরে এবং extract() দিয়ে অ্যারের মানগুলোকে সরাসরি ভেরিয়েবল বানিয়ে দেয়!'
    },
    'header.php': {
      name: 'views/includes/header.php',
      role: 'Reusable Navbar & Head Partial',
      roleBn: 'ন্যাভবার ও হেডার পার্ট',
      badge: 'Partial Layout',
      badgeColor: '#10B981',
      desc: 'Included on all pages so you only maintain the HTML head and navigation links in ONE file!',
      descBn: 'সব পেইজে include করা হয় যাতে একটি ফাইলেই পুরো ওয়েবসাইটের ন্যাভবার নিয়ন্ত্রণ করা যায়!'
    },
    'home.php': {
      name: 'views/home.php',
      role: 'Dynamic Bootstrap Table View',
      roleBn: 'ডাইনামিক টেবিল ভিউ',
      badge: 'View Template',
      badgeColor: '#10B981',
      desc: 'Loops through $students using a PHP foreach loop to render responsive Bootstrap table rows.',
      descBn: 'foreach লুপ চালিয়ে $students এর প্রতিটি রেকর্ডের জন্য বুটস্ট্র্যাপ টেবিল সারি তৈরি করে।'
    },
    'composer.json': {
      name: 'composer.json',
      role: 'Composer Autoloading Blueprint',
      roleBn: 'কম্পোজার অটোলোডিং কনফিগ',
      badge: 'Dependency Config',
      badgeColor: '#F43F5E',
      desc: 'Defines PSR-4 namespace mapping ("App\\\\": "app/") and specifies helpers.php in the files array.',
      descBn: 'PSR-4 নেমস্পেস ম্যাপিং এবং files অ্যারেতে helpers.php এর সরাসরি লোড হওয়ার নিয়ম নির্ধারণ করে।'
    }
  };

  const currentInfo = fileExplanations[selectedFile] || fileExplanations['web.php'];

  const handleFileClick = (fileKey) => {
    setSelectedFile(fileKey);
    if (onSelectFile) onSelectFile(fileKey);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
      {/* Left: Interactive Tree (Col 7) */}
      <div className="lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-[#141828] border border-slate-800 font-mono text-xs shadow-xl space-y-2 overflow-x-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
          <div className="flex items-center gap-2 text-slate-300 font-bold">
            <FolderOpen className="w-4 h-4 text-amber-400" />
            <span>php-class-two/</span>
          </div>
          <span className="text-[10px] text-slate-500">Click to expand/inspect</span>
        </div>

        {/* Tree hierarchy */}
        <div className="space-y-1.5 pl-1 leading-relaxed">
          {/* app/ */}
          <div>
            <button
              onClick={() => toggleFolder('app')}
              className="flex items-center gap-1.5 text-amber-300 font-bold hover:text-white transition-colors"
            >
              {openFolders['app'] ? <ChevronDown className="w-3.5 h-3.5 text-slate-500" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
              <Folder className="w-3.5 h-3.5 fill-amber-400/30 text-amber-400" />
              <span>app/</span>
              <span className="text-[10px] text-slate-500 font-normal font-sans">(Application Logic)</span>
            </button>

            {openFolders['app'] && (
              <div className="pl-5 border-l border-slate-800 space-y-1 mt-1">
                {/* app/classes/ */}
                <div>
                  <button
                    onClick={() => toggleFolder('classes')}
                    className="flex items-center gap-1.5 text-purple-300 font-semibold hover:text-white"
                  >
                    {openFolders['classes'] ? <ChevronDown className="w-3 h-3 text-slate-500" /> : <ChevronRight className="w-3 h-3 text-slate-500" />}
                    <Folder className="w-3.5 h-3.5 text-purple-400" />
                    <span>classes/</span>
                  </button>

                  {openFolders['classes'] && (
                    <div className="pl-5 border-l border-slate-800 space-y-1 mt-1">
                      <button
                        onClick={() => handleFileClick('HelloWorld.php')}
                        className={`w-full text-left px-2 py-1 rounded transition-all flex items-center justify-between ${
                          selectedFile === 'HelloWorld.php' ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 font-bold' : 'text-slate-300 hover:bg-[#1a2034]'
                        }`}
                      >
                        <span>HelloWorld.php</span>
                        <span className="text-[9px] text-pink-400 bg-pink-500/10 px-1.5 py-0.2 rounded">Controller</span>
                      </button>

                      <button
                        onClick={() => handleFileClick('Car.php')}
                        className={`w-full text-left px-2 py-1 rounded transition-all flex items-center justify-between ${
                          selectedFile === 'Car.php' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold' : 'text-slate-300 hover:bg-[#1a2034]'
                        }`}
                      >
                        <span>Car.php</span>
                        <span className="text-[9px] text-purple-400 bg-purple-500/10 px-1.5 py-0.2 rounded">Model</span>
                      </button>

                      <div className="text-slate-500 px-2 py-0.5">NewClass.php</div>
                    </div>
                  )}
                </div>

                {/* app/helpers/ */}
                <div>
                  <button
                    onClick={() => toggleFolder('helpers')}
                    className="flex items-center gap-1.5 text-cyan-300 font-semibold hover:text-white"
                  >
                    {openFolders['helpers'] ? <ChevronDown className="w-3 h-3 text-slate-500" /> : <ChevronRight className="w-3 h-3 text-slate-500" />}
                    <Folder className="w-3.5 h-3.5 text-cyan-400" />
                    <span>helpers/</span>
                  </button>

                  {openFolders['helpers'] && (
                    <div className="pl-5 border-l border-slate-800 space-y-1 mt-1">
                      <button
                        onClick={() => handleFileClick('helpers.php')}
                        className={`w-full text-left px-2 py-1 rounded transition-all flex items-center justify-between ${
                          selectedFile === 'helpers.php' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold' : 'text-slate-300 hover:bg-[#1a2034]'
                        }`}
                      >
                        <span>helpers.php</span>
                        <span className="text-[9px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.2 rounded">View Engine</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* views/ */}
          <div>
            <button
              onClick={() => toggleFolder('views')}
              className="flex items-center gap-1.5 text-emerald-300 font-bold hover:text-white transition-colors"
            >
              {openFolders['views'] ? <ChevronDown className="w-3.5 h-3.5 text-slate-500" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
              <Folder className="w-3.5 h-3.5 fill-emerald-400/30 text-emerald-400" />
              <span>views/</span>
              <span className="text-[10px] text-slate-500 font-normal font-sans">(UI Templates)</span>
            </button>

            {openFolders['views'] && (
              <div className="pl-5 border-l border-slate-800 space-y-1 mt-1">
                <button
                  onClick={() => handleFileClick('header.php')}
                  className={`w-full text-left px-2 py-1 rounded transition-all flex items-center justify-between ${
                    selectedFile === 'header.php' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' : 'text-slate-300 hover:bg-[#1a2034]'
                  }`}
                >
                  <span>includes/header.php</span>
                  <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded">Navbar</span>
                </button>

                <button
                  onClick={() => handleFileClick('home.php')}
                  className={`w-full text-left px-2 py-1 rounded transition-all flex items-center justify-between ${
                    selectedFile === 'home.php' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' : 'text-slate-300 hover:bg-[#1a2034]'
                  }`}
                >
                  <span>home.php</span>
                  <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded">Table Loop</span>
                </button>
              </div>
            )}
          </div>

          {/* Root Entry Files */}
          <button
            onClick={() => handleFileClick('web.php')}
            className={`w-full text-left px-2 py-1 rounded transition-all flex items-center justify-between ${
              selectedFile === 'web.php' ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold' : 'text-slate-300 hover:bg-[#1a2034]'
            }`}
          >
            <span>web.php</span>
            <span className="text-[9px] text-amber-400 bg-amber-400/10 px-1.5 py-0.2 rounded">Front Router</span>
          </button>

          <button
            onClick={() => handleFileClick('composer.json')}
            className={`w-full text-left px-2 py-1 rounded transition-all flex items-center justify-between ${
              selectedFile === 'composer.json' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold' : 'text-slate-300 hover:bg-[#1a2034]'
            }`}
          >
            <span>composer.json</span>
            <span className="text-[9px] text-rose-400 bg-rose-500/10 px-1.5 py-0.2 rounded">PSR-4</span>
          </button>
        </div>
      </div>

      {/* Right: Selected File Info Card (Col 5) */}
      <div className="lg:col-span-5 p-5 rounded-2xl bg-[#141828] border border-slate-800 shadow-xl flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span
              className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
              style={{ backgroundColor: `${currentInfo.badgeColor}25`, color: currentInfo.badgeColor, border: `1px solid ${currentInfo.badgeColor}50` }}
            >
              {currentInfo.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">File Info</span>
          </div>

          <h4 className="font-mono text-lg font-bold text-white">
            {currentInfo.name}
          </h4>

          <div className="text-xs font-mono font-semibold text-amber-300">
            {t(currentInfo.role, currentInfo.roleBn)}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed p-3 rounded-xl bg-[#0a0d16] border border-slate-800/80">
            {t(currentInfo.desc, currentInfo.descBn)}
          </p>
        </div>

        <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-200 text-[11px] font-sans flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{t("Click any file on the left tree to inspect its responsibility!", "বামে যেকোনো ফাইলে ক্লিক করে তার বিস্তারিত ভূমিকা জানুন!")}</span>
        </div>
      </div>
    </div>
  );
}
