import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Monitor, 
  Globe, 
  ArrowDown, 
  ArrowUp, 
  Server, 
  Database, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Info
} from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function WebArchitectureDiagram() {
  const { lang, t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState('php');

  const nodes = {
    user: {
      id: 'user',
      title: "Human User",
      titleBn: "মানুষ / গ্রাহক",
      icon: User,
      color: "text-amber-400",
      border: "border-amber-400/40",
      bg: "bg-amber-950/20",
      responsibility: "Types URLs, clicks buttons, enters login credentials, and views rendered visual output on screen.",
      responsibilityBn: "ওয়েবসাইটে ব্রাউজ করেন, বোতাম চাপেন, ইনপুট দেন এবং ফলাফল চোখে দেখেন।",
      tech: "Keyboard, Mouse, Mobile Touchscreen",
      techBn: "কিবোর্ড, মাউস, টাচস্ক্রিন ডিসপ্লে"
    },
    browser: {
      id: 'browser',
      title: "Web Browser",
      titleBn: "ওয়েব ব্রাউজার",
      icon: Monitor,
      color: "text-blue-400",
      border: "border-blue-400/40",
      bg: "bg-blue-950/20",
      responsibility: "Parses HTML, applies CSS layouts, executes JavaScript runtime (V8), handles DNS lookups, manages TLS certificates, and renders 60fps pixels.",
      responsibilityBn: "HTML পার্স করে, CSS লেআউট সাজায়, JS চালায় ও স্ক্রিনে পিক্সেল রেন্ডার করে।",
      tech: "Google Chrome, Mozilla Firefox, Safari, Edge",
      techBn: "গুগল ক্রোম, মজিলা ফায়ারফক্স, সাফারি"
    },
    frontend: {
      id: 'frontend',
      title: "Frontend Application",
      titleBn: "ফ্রন্টএন্ড অ্যাপ্লিকেশন",
      icon: Globe,
      color: "text-cyan-400",
      border: "border-cyan-400/40",
      bg: "bg-cyan-950/20",
      responsibility: "Client-side user interface. Listens to user events, updates DOM dynamically, validates form inputs, and dispatches asynchronous HTTP fetch requests.",
      responsibilityBn: "ইউজার ইন্টারফেস। ক্লিক ইভেন্ট শোনে, ফর্ম যাচাই করে ও সার্ভারে রিকোয়েস্ট পাঠায়।",
      tech: "HTML5, CSS3, JavaScript (ES6+), React, Vue",
      techBn: "HTML5, CSS3, জাভাস্ক্রিপ্ট, রিঅ্যাক্ট"
    },
    httpreq: {
      id: 'httpreq',
      title: "HTTP Request",
      titleBn: "HTTP রিকোয়েস্ট (নেটওয়ার্ক প্যাকেট)",
      icon: ArrowDown,
      color: "text-emerald-400",
      border: "border-emerald-400/40",
      bg: "bg-emerald-950/20",
      responsibility: "A standardized text message transmitted across optical fiber/Wi-Fi cables containing HTTP Method (GET/POST), URL path, Request Headers (User-Agent, Cookies), and optional payload body.",
      responsibilityBn: "ইন্টারনেটের তারের মধ্য দিয়ে যাওয়া স্ট্যান্ডার্ড মেসেজ যাতে মেথড, হেডার ও বডি থাকে।",
      tech: "TCP/IP, HTTP/1.1, HTTP/2, TLS/HTTPS Port 443",
      techBn: "TCP/IP, HTTPS পোর্ট ৪৪৩"
    },
    php: {
      id: 'php',
      title: "Backend Server (PHP)",
      titleBn: "ব্যাকএন্ড সার্ভার (PHP)",
      icon: Server,
      color: "text-[#777BB4]",
      border: "border-[#777BB4]/60",
      bg: "bg-[#777BB4]/10",
      responsibility: "The central brain. Evaluates routing rules (web.php), checks security sessions, runs business algorithms, executes SQL queries via PDO, and constructs the response.",
      responsibilityBn: "অ্যাপ্লিকেশনের মূল মস্তিষ্ক। রাউটিং করে, সিকিউরিটি ও বিজনেস লজিক চালায় এবং SQL কুয়েরি পাঠায়।",
      tech: "PHP 8.2+, Apache / Nginx, PHP-FPM, Linux (Ubuntu/Debian)",
      techBn: "পিএইচপি, এপাচি, এনজিনএক্স, লিনাক্স সার্ভার"
    },
    sqlquery: {
      id: 'sqlquery',
      title: "SQL Query / Results Bridge",
      titleBn: "SQL কুয়েরি ও রেজাল্ট ব্রিজ",
      icon: ArrowDown,
      color: "text-purple-400",
      border: "border-purple-400/40",
      bg: "bg-purple-950/20",
      responsibility: "PHP creates an authenticated socket connection to the database server using PDO and sends structured SQL strings (e.g. SELECT * FROM students WHERE id = 1).",
      responsibilityBn: "PHP সিক্রেট সকেটের মাধ্যমে ডাটাবেজে যুক্ত হয়ে SQL কমান্ড পাঠায় ও ফলাফল গ্রহণ করে।",
      tech: "PHP Data Objects (PDO), MySQLi, TCP Port 3306",
      techBn: "PDO, MySQLi, পোর্ট ৩৩০৬"
    },
    database: {
      id: 'database',
      title: "Database Management System",
      titleBn: "ডাটাবেজ সিস্টেম (DBMS)",
      icon: Database,
      color: "text-purple-400",
      border: "border-purple-500/50",
      bg: "bg-purple-950/30",
      responsibility: "ACID-compliant relational engine. Reads/writes indexed B-Trees on persistent NVMe/SSD storage, guarantees transactional consistency, and returns record rows.",
      responsibilityBn: "স্থায়ী হার্ডডিস্কে টেবিল, কলাম ও রেকর্ড সংরক্ষণ করে এবং বিদ্যুৎ চলে গেলেও ডাটা অক্ষত রাখে।",
      tech: "MySQL, PostgreSQL, MariaDB, SQLite",
      techBn: "MySQL, PostgreSQL, মারিয়াডিবি"
    },
    httpres: {
      id: 'httpres',
      title: "HTTP Response",
      titleBn: "HTTP রেসপন্স",
      icon: ArrowUp,
      color: "text-cyan-400",
      border: "border-cyan-400/40",
      bg: "bg-cyan-950/20",
      responsibility: "Carries the computed result back to the browser: Status Code (200 OK, 404 Not Found), Response Headers (Content-Type: application/json), and the HTML or JSON payload.",
      responsibilityBn: "সার্ভার থেকে ফলাফল নিয়ে আসে: স্ট্যাটাস কোড (200 OK) এবং HTML বা JSON ডাটা।",
      tech: "HTTP/1.1 200 OK, Content-Type: application/json",
      techBn: "HTTP/1.1 200 OK, JSON / HTML"
    }
  };

  const active = nodes[selectedNode] || nodes.php;
  const ActiveIcon = active.icon;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
            {t("Interactive Architecture Blueprint", "ইন্টারেক্টিভ আর্কিটেকচার ব্লুপ্রিন্ট")}
          </span>
          <h3 className="text-lg font-bold text-white">
            {t("The Complete Web Application Communication Loop", "ওয়েব অ্যাপ্লিকেশনের পূর্ণাঙ্গ যোগাযোগ চক্র")}
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
          {t("Click any component to inspect", "যেকোনো উপাদানে ক্লিক করে দেখুন")}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Center: Interactive Node Architecture Flow */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-[#0f1222] border border-slate-800 space-y-3">
          {/* Node: User */}
          <button
            onClick={() => setSelectedNode('user')}
            className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${
              selectedNode === 'user' ? 'border-amber-400 bg-amber-950/30 shadow-lg' : 'border-slate-800 bg-[#141829] hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <User className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">1. USER (Human Operator)</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Interaction</span>
          </button>

          {/* Connector Down */}
          <div className="flex justify-center text-slate-600">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Node: Browser */}
          <button
            onClick={() => setSelectedNode('browser')}
            className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${
              selectedNode === 'browser' ? 'border-blue-400 bg-blue-950/30 shadow-lg' : 'border-slate-800 bg-[#141829] hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Monitor className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">2. WEB BROWSER (Client Runtime)</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Chrome / Firefox</span>
          </button>

          {/* Connector Down */}
          <div className="flex justify-center text-slate-600">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Node: Frontend Application */}
          <button
            onClick={() => setSelectedNode('frontend')}
            className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${
              selectedNode === 'frontend' ? 'border-cyan-400 bg-cyan-950/30 shadow-lg' : 'border-slate-800 bg-[#141829] hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">3. FRONTEND APPLICATION (HTML / CSS / JS)</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 font-bold">Client UI</span>
          </button>

          {/* Connector: HTTP Request */}
          <button
            onClick={() => setSelectedNode('httpreq')}
            className={`w-full py-2 px-3 rounded-lg border flex items-center justify-center gap-2 transition-all ${
              selectedNode === 'httpreq' ? 'border-emerald-400 bg-emerald-950/30 text-emerald-300' : 'border-dashed border-slate-700 bg-slate-900/60 text-slate-400 hover:text-white'
            }`}
          >
            <ArrowDown className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold">4. HTTP REQUEST (GET /api/students)</span>
          </button>

          {/* Node: Backend Server (PHP) */}
          <button
            onClick={() => setSelectedNode('php')}
            className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all ${
              selectedNode === 'php' ? 'border-[#FACC15] bg-yellow-950/20 shadow-xl ring-1 ring-yellow-400/30' : 'border-slate-800 bg-[#161a30] hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center font-black shadow-md shadow-amber-500/10">
                <Server className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-white block">5. BACKEND SERVER (PHP)</span>
                <span className="text-[10px] text-amber-300 font-mono">Routing · Logic · Auth · PDO Driver</span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold">
              PHP 8.2
            </span>
          </button>

          {/* Connector: SQL Query */}
          <button
            onClick={() => setSelectedNode('sqlquery')}
            className={`w-full py-2 px-3 rounded-lg border flex items-center justify-center gap-2 transition-all ${
              selectedNode === 'sqlquery' ? 'border-purple-400 bg-purple-950/30 text-purple-300' : 'border-dashed border-purple-900/60 bg-purple-950/20 text-purple-300/80 hover:text-purple-200'
            }`}
          >
            <ArrowDown className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px] font-mono font-bold">6. SQL QUERY / RESULTS (SELECT * FROM students)</span>
          </button>

          {/* Node: Database */}
          <button
            onClick={() => setSelectedNode('database')}
            className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all ${
              selectedNode === 'database' ? 'border-purple-400 bg-purple-950/30 shadow-lg' : 'border-slate-800 bg-[#141829] hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">7. DATABASE (MySQL / SSD Storage)</span>
            </div>
            <span className="text-[10px] font-mono text-purple-300">Tables & Records</span>
          </button>

          {/* Connector: HTTP Response */}
          <button
            onClick={() => setSelectedNode('httpres')}
            className={`w-full py-2 px-3 rounded-lg border flex items-center justify-center gap-2 transition-all ${
              selectedNode === 'httpres' ? 'border-cyan-400 bg-cyan-950/30 text-cyan-300' : 'border-dashed border-slate-700 bg-slate-900/60 text-slate-400 hover:text-white'
            }`}
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold">8. HTTP RESPONSE (200 OK + JSON / HTML)</span>
          </button>

          {/* Result: User sees data */}
          <div className="p-3 rounded-xl border border-emerald-500/40 bg-emerald-950/20 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>9. USER SEES RENDERED DATA ON DISPLAY</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-300">Done</span>
          </div>
        </div>

        {/* Right: Detailed Context Inspector for Selected Node */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#141829] border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className={`w-10 h-10 rounded-xl bg-slate-900 border ${active.border} flex items-center justify-center ${active.color}`}>
              <ActiveIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                {t("Component Inspector", "উপাদান পরিদর্শক")}
              </span>
              <h4 className="text-base font-bold text-white">
                {lang === 'bn' ? active.titleBn : active.title}
              </h4>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="font-semibold text-slate-400 block mb-1">
                {t("Primary Responsibilities:", "প্রধান দায়িত্ব ও কাজ:")}
              </span>
              <p className="text-slate-200 leading-relaxed bg-[#0e111f] p-3 rounded-lg border border-slate-800">
                {lang === 'bn' ? active.responsibilityBn : active.responsibility}
              </p>
            </div>

            <div>
              <span className="font-semibold text-amber-300 block mb-1">
                {t("Technologies & Protocols:", "প্রযুক্তি ও প্রোটোকল:")}
              </span>
              <div className="p-2.5 rounded-lg bg-[#0e111f] border border-slate-800 font-mono text-[11px] text-cyan-300">
                {lang === 'bn' ? active.techBn : active.tech}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/20 text-blue-200">
              <div className="flex items-center gap-1.5 font-bold mb-1 text-[11px] text-blue-300">
                <Info className="w-3.5 h-3.5" />
                <span>{t("Communication Takeaway", "যোগাযোগের সারকথা")}</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {t(
                  "Data flows strictly step-by-step. The client never jumps straight to the database. The server acts as an authorized gatekeeper.",
                  "ডাটা ধাপে ধাপে প্রবাহিত হয়। ক্লায়েন্ট কখনো সরাসরি ডাটাবেজে যায় না। পিএইচপি সার্ভার নিরাপদ দ্বাররক্ষক হিসেবে কাজ করে।"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WebArchitectureDiagram;
