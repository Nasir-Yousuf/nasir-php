import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Server, 
  Database, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Lock, 
  Key,
  RefreshCw,
  Cpu
} from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function FrontendBackendDbExplainer() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('frontend');
  const [demoState, setDemoState] = useState('idle'); // idle | fetching | success
  const [studentInput, setStudentInput] = useState('Nasir');
  const [mockConsole, setMockConsole] = useState([
    "// Browser JavaScript Console ready...",
    "// Event listener attached: button.addEventListener('click', ...)"
  ]);

  const handleSimulateRequest = () => {
    setDemoState('fetching');
    setMockConsole(prev => [
      ...prev,
      `> [CLICK] User clicked "Fetch Student Record" button for: "${studentInput}"`,
      `> [NET] fetch('/api/get-student.php?name=${encodeURIComponent(studentInput)}') dispatched...`,
      `> [STATUS] Waiting for server response... (TCP Handshake -> HTTP GET)`
    ]);

    setTimeout(() => {
      setDemoState('success');
      setMockConsole(prev => [
        ...prev,
        `> [200 OK] Response received from PHP backend (12ms)`,
        `> [JSON] { id: 1, name: "${studentInput}", dept: "Computer Science", status: "Active" }`,
        `> [DOM] Document updated: Student card rendered successfully!`
      ]);
    }, 1200);
  };

  const handleReset = () => {
    setDemoState('idle');
    setMockConsole([
      "// Browser JavaScript Console ready...",
      "// Event listener attached: button.addEventListener('click', ...)"
    ]);
  };

  return (
    <div className="space-y-8">
      {/* Tab Switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#121526] border border-slate-800">
        <button
          onClick={() => setActiveTab('frontend')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'frontend'
              ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-black'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>{t("1. The Frontend (Browser)", "১. ফ্রন্টএন্ড (ব্রাউজার)")}</span>
        </button>

        <button
          onClick={() => setActiveTab('backend')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'backend'
              ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 font-black'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Server className="w-4 h-4" />
          <span>{t("2. The Backend (Server / PHP)", "২. ব্যাকএন্ড (সার্ভার / PHP)")}</span>
        </button>

        <button
          onClick={() => setActiveTab('database')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'database'
              ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20 font-black'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>{t("3. The Database (Storage)", "৩. ডাটাবেজ (সংরক্ষণাগার)")}</span>
        </button>
      </div>

      {/* Tab 1: Frontend Deep Dive & Live Browser Mock */}
      {activeTab === 'frontend' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#13172b] border border-cyan-900/40">
              <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                HTML (Structure)
              </span>
              <p className="text-xs text-slate-300">
                {t(
                  "Creates the skeleton: headers, buttons, form inputs, tables, and images.",
                  "ওয়েবসাইটের কঙ্কাল তৈরি করে: শিরোনাম, বাটন, ইনপুট বক্স, টেবিল এবং ছবি।"
                )}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#13172b] border border-cyan-900/40">
              <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                CSS (Styling)
              </span>
              <p className="text-xs text-slate-300">
                {t(
                  "Controls beauty: colors, typography, layout grid, responsive phone layouts, and animations.",
                  "সৌন্দর্য নিয়ন্ত্রণ করে: রঙ, ফন্ট সাইজ, গ্রিড লেআউট এবং অ্যানিমেশন।"
                )}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#13172b] border border-cyan-900/40">
              <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                JavaScript (Behavior)
              </span>
              <p className="text-xs text-slate-300">
                {t(
                  "Handles interactivity: button clicks, form validation, toggling modals, and firing network fetch requests.",
                  "জীবন্ত ইন্টারঅ্যাকশন: বাটন ক্লিক, ভ্যালিডেশন এবং ইন্টারনেটের মাধ্যমে ডাটা রিকোয়েস্ট পাঠানো।"
                )}
              </p>
            </div>
          </div>

          {/* Critical Security Box: Why JS cannot connect directly to DB */}
          <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs">
              <h4 className="font-bold text-red-300 text-sm">
                {t("Critical Question: Why can't browser JavaScript talk directly to MySQL?", "জরুরি প্রশ্ন: ব্রাউজারের জাভাস্ক্রিপ্ট কেন সরাসরি MySQL ডাটাবেজে যুক্ত হতে পারে না?")}
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {t(
                  "1. Credentials Leakage: Any code running in the browser can be viewed by anyone right-clicking 'View Page Source'. Putting DB passwords in JavaScript gives every hacker full database admin access!",
                  "১. পাসওয়ার্ড চুরি: ব্রাউজারের যেকোনো JS কোড 'Inspect Element' বা 'View Source' করে যে কেউ দেখতে পারে। সরাসরি ডাটাবেজে যুক্ত হলে পাসওয়ার্ড সারা দুনিয়া জেনে যাবে!"
                )}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {t(
                  "2. Port Security & Protocol: Browsers are sandboxed by operating systems to communicate only via HTTP/HTTPS/WebSockets. Private database ports (e.g. MySQL 3306) are blocked by corporate firewalls.",
                  "২. পোর্ট ও সিকিউরিটি: ব্রাউজার শুধু HTTP/HTTPS প্রোটোকল বোঝে। ডাটাবেজ পোর্ট (যেমন MySQL 3306) ফায়ারওয়াল দ্বারা সুরক্ষিত থাকে।"
                )}
              </p>
            </div>
          </div>

          {/* Interactive Live Browser Mockup */}
          <div className="rounded-2xl border border-slate-700 bg-[#0d101d] overflow-hidden shadow-2xl">
            {/* Browser Top Window Bar */}
            <div className="px-4 py-2.5 bg-[#171b2d] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  Chrome Browser — Student Management Client
                </span>
              </div>
              <div className="px-3 py-1 rounded bg-[#0e111f] border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-cyan-400" />
                <span>https://university.ac.bd/students</span>
              </div>
            </div>

            {/* Browser Content Canvas */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Interactive UI */}
              <div className="space-y-4 p-5 rounded-xl bg-[#141829] border border-slate-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  {t("User Interactive Viewport", "ব্যবহারকারীর দৃশ্যমান ইন্টারফেস")}
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">
                      {t("Student Search Query:", "শিক্ষার্থীর নাম দিয়ে খুঁজুন:")}
                    </label>
                    <input
                      type="text"
                      value={studentInput}
                      onChange={(e) => setStudentInput(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#0e111f] border border-slate-700 text-white font-mono focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleSimulateRequest}
                      disabled={demoState === 'fetching'}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                    >
                      {demoState === 'fetching' ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>{t("Sending HTTP Request...", "HTTP রিকোয়েস্ট পাঠানো হচ্ছে...")}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t("Click: Fetch Student Record", "ক্লিক করুন: ডাটা রিকোয়েস্ট পাঠান")}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleReset}
                      className="px-3 py-2.5 rounded-xl bg-[#1c223a] hover:bg-[#252b47] text-slate-300 text-xs font-mono border border-slate-700"
                    >
                      {t("Reset", "রিসেট")}
                    </button>
                  </div>
                </div>

                {/* Rendered Result Card */}
                {demoState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-xs space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{t("Rendered DOM Node (UI Updated)", "UI তে ডাটা প্রদর্শিত হয়েছে!")}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-slate-200 font-mono text-[11px]">
                      <div>ID: <span className="text-amber-400">#001</span></div>
                      <div>Name: <span className="text-white font-bold">{studentInput}</span></div>
                      <div>Dept: <span className="text-cyan-300">Computer Science</span></div>
                      <div>Status: <span className="text-emerald-400">Enrolled</span></div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right: Simulated JavaScript DevTools Console */}
              <div className="p-4 rounded-xl bg-[#090b14] border border-slate-800 font-mono text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3 text-[11px] text-slate-400">
                    <span>DevTools &gt; Console</span>
                    <span className="text-cyan-400">client.js</span>
                  </div>
                  <div className="space-y-1.5 text-[11px] text-slate-300">
                    {mockConsole.map((line, idx) => (
                      <div 
                        key={idx}
                        className={
                          line.includes('[200 OK]') 
                            ? 'text-emerald-400 font-bold' 
                            : line.includes('[CLICK]') 
                              ? 'text-cyan-300 font-bold' 
                              : line.includes('[NET]') 
                                ? 'text-amber-300' 
                                : 'text-slate-400'
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[10px] text-slate-500">
                  {t(
                    "Notice: JavaScript listens for events in the browser and sends structured HTTP packets over the wire.",
                    "লক্ষ্য করুন: ব্রাউজার ইভেন্ট শুনে নেটওয়ার্কের মাধ্যমে সার্ভারে রিকোয়েস্ট পাঠায়।"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Backend Deep Dive (PHP & Node.js, React vs Next.js) */}
      {activeTab === 'backend' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Core Responsibilities */}
            <div className="p-5 rounded-2xl bg-[#141829] border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Server className="w-5 h-5" />
                <span>{t("Backend Responsibilities", "ব্যাকএন্ডের প্রধান কাজগুলো")}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">1.</span>
                  <span><strong>{t("Server-Side Execution:", "সার্ভারে কোড এক্সিকিউশন:")}</strong> {t("Code runs on a secured remote computer owned by you, not on the user's phone or laptop.", "কোড ব্যবহারকারীর ডিভাইসে নয়, আপনার সুরক্ষিত ক্লাউড সার্ভারে চলে।")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">2.</span>
                  <span><strong>{t("Authentication & Security:", "অথেন্টিকেশন ও নিরাপত্তা:")}</strong> {t("Checks user passwords, JWT tokens, session cookies, and permissions before giving data.", "পাসওয়ার্ড, লগইন সেশন ও ইউজার পারমিশন যাচাই করে।")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">3.</span>
                  <span><strong>{t("Business Logic & Math:", "বিজনেস লজিক ও হিসাব:")}</strong> {t("Discounts, taxes, bank balances, and critical workflows are computed where clients cannot alter them.", "টাকা লেনদেন, ডিসকাউন্ট ও ব্যাংকিং হিসাব কষে যা ইউজার পরিবর্তন করতে পারে না।")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">4.</span>
                  <span><strong>{t("Database Bridge:", "ডাটাবেজের সাথে যোগাযোগ:")}</strong> {t("Connects safely to MySQL/Postgres using secure server credentials and runs SQL queries.", "সিক্রেট পাসওয়ার্ড দিয়ে ডাটাবেজে কুয়েরি চালায় ও ডাটা উদ্ধার করে।")}</span>
                </li>
              </ul>
            </div>

            {/* HTTP GET vs POST */}
            <div className="p-5 rounded-2xl bg-[#141829] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Send className="w-5 h-5 text-cyan-400" />
                <span>{t("HTTP Methods: GET vs POST", "HTTP মেথড: GET বনাম POST")}</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[#0e111f] border border-cyan-900/40">
                  <span className="font-mono font-bold text-cyan-400 text-xs block mb-1">
                    GET Request (Retrieving Data)
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {t(
                      "Used to ask for data without modifying anything. Parameters are visible in the URL bar (e.g. ?page=home&id=5). Cached by browsers.",
                      "ডাটা দেখার জন্য ব্যবহার করা হয়। কোনো পরিবর্তন ঘটায় না। প্যারামিটার ইউআরএল-এ দৃশ্যমান থাকে (যেমন ?page=home)।"
                    )}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#0e111f] border border-amber-900/40">
                  <span className="font-mono font-bold text-amber-400 text-xs block mb-1">
                    POST Request (Sending / Modifying Data)
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {t(
                      "Used for submitting forms, uploading files, logging in with passwords, or creating new records. Payload is hidden inside the HTTP request body.",
                      "ফর্ম সাবমিট, পাসওয়ার্ড দিয়ে লগইন ও ডাটাবেজে নতুন তথ্য সংরক্ষণের জন্য ব্যবহৃত হয়। তথ্য বডির ভেতরে সুরক্ষিত থাকে।"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clarification Box: React vs Next.js vs PHP */}
          <div className="p-5 rounded-2xl bg-[#101426] border border-blue-500/30">
            <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              {t("Demystifying the Technologies: React vs Next.js vs PHP", "প্রযুক্তির স্পষ্ট পার্থক্য: React বনাম Next.js বনাম PHP")}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#151a30] border border-slate-800">
                <span className="text-cyan-400 font-bold block mb-1 font-mono">React (Frontend Library)</span>
                <p className="text-slate-300">
                  {t(
                    "Purely a frontend JavaScript library. Runs inside the user's browser to build interactive user interfaces and component trees.",
                    "শুধুমাত্র ব্রাউজারে চলা ফ্রন্টএন্ড লাইব্রেরি। ইন্টারেক্টিভ UI তৈরির জন্য ব্যবহৃত হয়।"
                  )}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#151a30] border border-slate-800">
                <span className="text-white font-bold block mb-1 font-mono">Next.js (Full-Stack Framework)</span>
                <p className="text-slate-300">
                  {t(
                    "A framework built on top of React. Adds server-side rendering (SSR), API routes, and full-stack backend capabilities powered by Node.js.",
                    "React এর ওপর নির্মিত ফুল-স্ট্যাক ফ্রেমওয়ার্ক। Node.js সার্ভারের মাধ্যমে ব্যাকএন্ড ও API রুট হ্যান্ডেল করে।"
                  )}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#151a30] border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1 font-mono">PHP (Backend Language)</span>
                <p className="text-slate-300">
                  {t(
                    "A dedicated server-side language. Executes on the web server, directly talks to databases, and serves dynamic web pages or JSON APIs.",
                    "একটি বিশুদ্ধ সার্ভার-সাইড ভাষা। সার্ভারে চলে, ডাটাবেজ নিয়ন্ত্রণ করে এবং HTML বা JSON আউটপুট দেয়।"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Database Deep Dive */}
      {activeTab === 'database' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30">
            <h4 className="font-bold text-purple-300 text-sm mb-2 flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-400" />
              {t("Why Do Web Applications Require Databases?", "ওয়েব অ্যাপ্লিকেশনে ডাটাবেজ কেন অপরিহার্য?")}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t(
                "When a computer or web server restarts, its RAM (temporary memory) is wiped clean. If you stored 5,000 students or banking balances inside ordinary PHP variables or memory, all customer data would evaporate during a server reboot! Databases solve this by safely committing data to persistent magnetic/SSD storage with transaction safety.",
                "সার্ভার বা কম্পিউটার রিস্টার্ট দিলে র‍্যামের (RAM) সব ডাটা মুছে যায়। ভেরিয়েবলের ডাটা ক্ষণস্থায়ী। ডাটাবেজ হার্ডডিস্কে স্থায়ীভাবে এবং লেনদেনের শতভাগ নিশ্চয়তাসহ ডাটা সংরক্ষণ করে।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#141829] border border-slate-800">
              <span className="text-xs font-mono font-bold text-purple-400 block mb-1">
                👥 {t("User Accounts", "ব্যবহারকারী অ্যাকাউন্ট")}
              </span>
              <p className="text-[11px] text-slate-300">
                {t("Hashed passwords, emails, roles, profile pictures, and registration dates.", "এনক্রিপ্ট করা পাসওয়ার্ড, ইমেইল ও প্রোফাইল ডাটা।")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141829] border border-slate-800">
              <span className="text-xs font-mono font-bold text-purple-400 block mb-1">
                📦 {t("Products & Inventory", "পণ্য ও স্টক")}
              </span>
              <p className="text-[11px] text-slate-300">
                {t("SKUs, stock quantities, prices, descriptions, and categories.", "স্টক হিসাব, দাম, পণ্যের বিবরণ ও বিভাগ।")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141829] border border-slate-800">
              <span className="text-xs font-mono font-bold text-purple-400 block mb-1">
                💳 {t("Orders & Payments", "অর্ডার ও পেমেন্ট")}
              </span>
              <p className="text-[11px] text-slate-300">
                {t("Invoices, transaction IDs, payment gateways, and delivery addresses.", "চালান নম্বর, ট্রানজেকশন আইডি ও ডেলিভারি ঠিকানা।")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141829] border border-slate-800">
              <span className="text-xs font-mono font-bold text-purple-400 block mb-1">
                🎓 {t("Student Records", "শিক্ষার্থীর রেকর্ড")}
              </span>
              <p className="text-[11px] text-slate-300">
                {t("Roll numbers, semester GPAs, registered courses, and certificates.", "রোল নম্বর, জিপিএ, এনরোলমেন্ট ও রেজাল্ট।")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default FrontendBackendDbExplainer;
