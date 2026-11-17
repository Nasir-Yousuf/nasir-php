import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipForward, 
  SkipBack, 
  Layers, 
  Server, 
  Database, 
  Globe, 
  User, 
  Sparkles,
  Zap,
  CheckCircle2,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../../contexts/LanguageContext';

export function ParticleRequestLifecycle() {
  const { lang, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1); // 0.5, 1, 2

  const steps = [
    {
      id: 1,
      layer: 'browser',
      layerName: "Client Browser",
      layerNameBn: "ক্লায়েন্ট ব্রাউজার",
      title: "1. Browser loads the interface",
      titleBn: "১. ব্রাউজার স্টুডেন্ট ম্যানেজমেন্টের ইন্টারফেস লোড করে",
      desc: "User navigates to the student dashboard. The initial HTML/CSS document is displayed in the viewport with an inactive table placeholder.",
      descBn: "ব্যবহারকারী ব্রাউজারে ড্যাশবোর্ড খোলেন। স্ক্রিনে প্রাথমিক খালি ফ্রেমটি দেখা যায়।",
      particlePos: 5,
      activeBox: "client"
    },
    {
      id: 2,
      layer: 'browser',
      layerName: "Client User Event",
      layerNameBn: "ইউজার ক্লিক ইভেন্ট",
      title: "2. User clicks 'View Students'",
      titleBn: "২. ইউজার 'সকল শিক্ষার্থী দেখুন' বাটনে ক্লিক করেন",
      desc: "Mouse click event fires in the browser. An event handler `btn.addEventListener('click', ...)` intercepts the action.",
      descBn: "ইউজার বোতাম চাপেন। জাভাস্ক্রিপ্ট ইভেন্ট হ্যান্ডলার ক্লিকটি লুফে নেয়।",
      particlePos: 12,
      activeBox: "client"
    },
    {
      id: 3,
      layer: 'network_req',
      layerName: "Network (Fiber Optics)",
      layerNameBn: "নেটওয়ার্ক কেবল ও ওয়াইফাই",
      title: "3. JavaScript sends HTTP request",
      titleBn: "৩. জাভাস্ক্রিপ্ট HTTP GET রিকোয়েস্ট পাঠায়",
      desc: "Browser executes `fetch('/api/students.php')`. TCP connection packets travel through fiber optic cables to port 443 of the server.",
      descBn: "`fetch('/api/students.php')` চালুর মাধ্যমে ইন্টারনেটের মাধ্যমে সার্ভারের দিকে ডাটা প্যাকেট রওনা হয়।",
      particlePos: 28,
      activeBox: "network"
    },
    {
      id: 4,
      layer: 'server',
      layerName: "PHP Web Server",
      layerNameBn: "পিএইচপি ওয়েব সার্ভার",
      title: "4. Backend receives the request",
      titleBn: "৪. ব্যাকএন্ড সার্ভার রিকোয়েস্ট রিসিভ করে",
      desc: "Nginx/Apache handles the connection and hands off execution to PHP-FPM worker process. PHP initializes the execution context.",
      descBn: "ওয়েব সার্ভার রিকোয়েস্ট গ্রহণ করে PHP-FPM প্রসেসে কোড রান করার দায়িত্ব দেয়।",
      particlePos: 45,
      activeBox: "server"
    },
    {
      id: 5,
      layer: 'server',
      layerName: "PHP PDO Driver",
      layerNameBn: "PHP ডাটাবেজ ড্রাইভার",
      title: "5. Backend queries the database",
      titleBn: "৫. ব্যাকএন্ড ডাটাবেজে SQL কুয়েরি পাঠায়",
      desc: "PHP prepares PDO statement: `$stmt = $pdo->query('SELECT * FROM students');` and sends the SQL binary string across local port 3306.",
      descBn: "PHP স্ক্রিপ্ট SQL কুয়েরি প্রস্তুত করে ডাটাবেজ পোর্ট ৩৩০৬ এ পাঠায়।",
      particlePos: 58,
      activeBox: "db_bridge"
    },
    {
      id: 6,
      layer: 'database',
      layerName: "MySQL Storage Engine",
      layerNameBn: "MySQL স্টোরেজ ইঞ্জিন",
      title: "6. Database finds matching student records",
      titleBn: "৬. ডাটাবেজ হার্ডডিস্ক থেকে রেকর্ড খুঁজে বের করে",
      desc: "InnoDB storage engine traverses B-Tree index on disk, scans the `students` table, and verifies matching row records for Nasir, Rahim, Karim.",
      descBn: "InnoDB স্টোরেজ ইঞ্জিন হার্ডডিস্ক খুঁজে নাসির, রহিম ও করিমের ৩টি রেকর্ড উদ্ধার করে।",
      particlePos: 72,
      activeBox: "database"
    },
    {
      id: 7,
      layer: 'db_bridge',
      layerName: "Database Socket",
      layerNameBn: "ডাটাবেজ রেজাল্ট সকেট",
      title: "7. Database returns query results",
      titleBn: "৭. ডাটাবেজ রেজাল্ট সেট ব্যাকএন্ডে ফেরত পাঠায়",
      desc: "MySQL transmits the raw row tuples back over the socket stream into PHP's PDO memory buffer.",
      descBn: "MySQL কাঁচা ডাটা রেকর্ডগুলোকে সকেটের মাধ্যমে PHP এর মেমোরিতে ফেরত দেয়।",
      particlePos: 58,
      activeBox: "db_bridge"
    },
    {
      id: 8,
      layer: 'server',
      layerName: "PHP Processing",
      layerNameBn: "PHP প্রসেসিং ও ফরম্যাটিং",
      title: "8. Backend processes the returned records",
      titleBn: "৮. ব্যাকএন্ড রেকর্ডগুলো প্রসেস ও রূপান্তর করে",
      desc: "PHP calls `$students = $stmt->fetchAll(PDO::FETCH_ASSOC);` transforming rows into a PHP associative array, then runs `json_encode($students)`.",
      descBn: "PHP ডাটাগুলোকে associative array তে নেয় এবং `json_encode()` দিয়ে JSON টেক্সট বানায়।",
      particlePos: 45,
      activeBox: "server"
    },
    {
      id: 9,
      layer: 'network_res',
      layerName: "Network (Response)",
      layerNameBn: "নেটওয়ার্ক রেসপন্স",
      title: "9. Backend sends an HTTP response",
      titleBn: "৯. ব্যাকএন্ড ব্রাউজারে HTTP রেসপন্স ফেরত পাঠায়",
      desc: "HTTP 200 OK headers with `Content-Type: application/json` travel back across the internet to the client browser.",
      descBn: "HTTP 200 OK স্ট্যাটাস এবং JSON ডাটা ইন্টারনেটের তার দিয়ে ব্রাউজারে ফিরে আসে।",
      particlePos: 28,
      activeBox: "network"
    },
    {
      id: 10,
      layer: 'browser',
      layerName: "Client DOM Renderer",
      layerNameBn: "ব্রাউজার DOM রেন্ডারার",
      title: "10. Frontend receives and displays students",
      titleBn: "১০. ফ্রন্টএন্ড ডাটা গ্রহণ করে স্ক্রিনে স্টুডেন্ট কার্ড সাজায়",
      desc: "`await response.json()` parses the data. JavaScript creates table rows and injects them into the DOM. The user sees their data!",
      descBn: "জাভাস্ক্রিপ্ট JSON পার্স করে সাথে সাথে HTML টেবিলে স্টুডেন্টদের নাম ও রোল সাজিয়ে প্রদর্শন করে!",
      particlePos: 5,
      activeBox: "client"
    }
  ];

  // Auto-play timer effect
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            try {
              confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
            } catch (e) {}
            return prev;
          }
          return prev + 1;
        });
      }, 2000 / speed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed, steps.length]);

  const handleRestart = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const current = steps[currentStep];

  return (
    <div className="space-y-6 p-6 rounded-2xl bg-[#0d101d] border border-slate-800 shadow-2xl">
      {/* Header & Controls Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              LIVE PARTICLE LIFECYCLE
            </span>
            <span className="text-xs text-slate-400 font-mono">
              10 Detailed Micro-Steps
            </span>
          </div>
          <h3 className="text-lg font-bold text-white">
            {t("Full-Screen Request Lifecycle: 'View Students' Scenario", "পূর্ণাঙ্গ রিকোয়েস্ট লাইফসাইকেল: শিক্ষার্থী ডাটা আনার দৃশ্যকল্প")}
          </h3>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Speed Selector */}
          <div className="flex items-center bg-[#15192c] p-1 rounded-xl border border-slate-800 text-xs font-mono">
            {[0.5, 1, 2].map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-2 py-1 rounded-lg transition-all ${
                  speed === s ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>

          {/* Step Back */}
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="p-2 rounded-xl bg-[#171b30] hover:bg-[#202642] disabled:opacity-30 text-white border border-slate-700"
            title="Previous Step"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          {/* Play / Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs shadow-lg shadow-yellow-500/20 transition-all hover:scale-105"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>{t("Pause", "থামান")}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>{currentStep >= steps.length - 1 ? t("Replay", "পুনরায়") : t("Play", "চালান")}</span>
              </>
            )}
          </button>

          {/* Step Forward */}
          <button
            onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
            disabled={currentStep === steps.length - 1}
            className="p-2 rounded-xl bg-[#171b30] hover:bg-[#202642] disabled:opacity-30 text-white border border-slate-700"
            title="Next Step"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          {/* Reset */}
          <button
            onClick={handleRestart}
            className="p-2 rounded-xl bg-[#171b30] hover:bg-[#202642] text-slate-300 border border-slate-700"
            title="Restart"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Layer Canvas with Animated Particle Path */}
      <div className="relative p-6 rounded-2xl bg-[#090b14] border border-slate-800 overflow-hidden min-h-[220px]">
        {/* Layer Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          {/* Zone 1: Client Browser */}
          <div className={`p-4 rounded-xl border transition-all ${
            current.activeBox === 'client' 
              ? 'border-cyan-400 bg-cyan-950/30 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400' 
              : 'border-slate-800 bg-[#121526]/60'
          }`}>
            <div className="flex items-center gap-2 text-cyan-400 mb-2 font-bold text-xs">
              <Globe className="w-4 h-4" />
              <span>1. Client Browser</span>
            </div>
            <div className="text-[11px] text-slate-400">
              HTML/JS runtime, button click, DOM updates.
            </div>
          </div>

          {/* Zone 2: Internet / Network */}
          <div className={`p-4 rounded-xl border transition-all ${
            current.activeBox === 'network' 
              ? 'border-emerald-400 bg-emerald-950/30 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-400' 
              : 'border-slate-800 bg-[#121526]/60'
          }`}>
            <div className="flex items-center gap-2 text-emerald-400 mb-2 font-bold text-xs">
              <Zap className="w-4 h-4" />
              <span>2. Network Cables</span>
            </div>
            <div className="text-[11px] text-slate-400">
              TCP/IP, HTTP GET & 200 OK Response packets.
            </div>
          </div>

          {/* Zone 3: PHP Web Server */}
          <div className={`p-4 rounded-xl border transition-all ${
            current.activeBox === 'server' || current.activeBox === 'db_bridge'
              ? 'border-amber-400 bg-amber-950/30 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400' 
              : 'border-slate-800 bg-[#121526]/60'
          }`}>
            <div className="flex items-center gap-2 text-amber-400 mb-2 font-bold text-xs">
              <Server className="w-4 h-4" />
              <span>3. PHP Backend</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Routing, PDO SQL query, array transformation.
            </div>
          </div>

          {/* Zone 4: MySQL Database */}
          <div className={`p-4 rounded-xl border transition-all ${
            current.activeBox === 'database' 
              ? 'border-purple-400 bg-purple-950/30 shadow-lg shadow-purple-500/20 ring-1 ring-purple-400' 
              : 'border-slate-800 bg-[#121526]/60'
          }`}>
            <div className="flex items-center gap-2 text-purple-400 mb-2 font-bold text-xs">
              <Database className="w-4 h-4" />
              <span>4. MySQL Database</span>
            </div>
            <div className="text-[11px] text-slate-400">
              InnoDB B-Tree disk scan, raw row matching.
            </div>
          </div>
        </div>

        {/* Animated Moving Data Particle Track */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 relative">
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Step markers */}
          <div className="flex justify-between mt-2 text-[10px] font-mono text-slate-500">
            {steps.map((st, i) => (
              <button
                key={st.id}
                onClick={() => {
                  setCurrentStep(i);
                  setIsPlaying(false);
                }}
                className={`w-5 h-5 rounded-full flex items-center justify-center font-bold transition-all ${
                  i === currentStep 
                    ? 'bg-[#FACC15] text-slate-950 scale-125 shadow-md shadow-yellow-400/30 font-black' 
                    : i < currentStep 
                      ? 'bg-emerald-500/40 text-emerald-200' 
                      : 'bg-slate-800 text-slate-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Explanation Panel for Current Step */}
      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 rounded-2xl bg-[#141829] border border-slate-700/80 space-y-2"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#FACC15] text-slate-950 font-black flex items-center justify-center text-xs font-mono">
              {current.id}
            </span>
            <span className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">
              {lang === 'bn' ? current.layerNameBn : current.layerName}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {currentStep + 1} of {steps.length}
          </span>
        </div>

        <h4 className="text-base font-bold text-white">
          {lang === 'bn' ? current.titleBn : current.title}
        </h4>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0b0e1b] p-3.5 rounded-xl border border-slate-800">
          {lang === 'bn' ? current.descBn : current.desc}
        </p>
      </motion.div>
    </div>
  );
}
export default ParticleRequestLifecycle;
