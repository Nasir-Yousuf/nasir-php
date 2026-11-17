import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Info, 
  Utensils, 
  ChefHat, 
  Database, 
  Server, 
  Globe, 
  Laptop, 
  ArrowRight, 
  Layers, 
  Code2, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal,
  MousePointer,
  HelpCircle,
  Eye,
  FileCode2,
  Package
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';

export function RestaurantAnalogyExperience({ onStartCurriculum }) {
  const { lang, t } = useLanguage();
  
  // Animation state
  const [currentStep, setCurrentStep] = useState(1); // 1 to 6
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredZone, setHoveredZone] = useState(null); // 'frontend' | 'api' | 'backend' | 'database'
  const [isSimulatingCode, setIsSimulatingCode] = useState(false);
  const [codeNameInput, setCodeNameInput] = useState("Students");
  const [showReferenceModal, setShowReferenceModal] = useState(false);

  const totalSteps = 6;

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= totalSteps) {
          setIsPlaying(false);
          try {
            confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
          } catch (e) {}
          return 6;
        }
        return prev + 1;
      });
    }, 4500); // 4.5 seconds per step for comfortable classroom pacing

    return () => clearInterval(interval);
  }, [isPlaying]);

  const stepDetails = [
    {
      step: 1,
      badge: "USER REQUEST",
      badgeBn: "ইউজার রিকোয়েস্ট",
      title: "Scene 1: Customer Places an Order",
      titleBn: "দৃশ্য ১: গ্রাহক পিৎজা অর্ডার করছেন",
      subtitle: "The customer looks at the dining menu and selects a pizza.",
      subtitleBn: "গ্রাহক মেনু দেখে পিৎজা পছন্দ করলেন এবং ওয়েটারকে ডাকলেন।",
      techMeaning: "In web terms: A user clicks a button or visits a URL in their web browser (Frontend). This generates an HTTP Request.",
      techMeaningBn: "ওয়েব পরিভাষায়: ব্যবহারকারী ব্রাউজারে ইউআরএল লেখেন বা বাটনে ক্লিক করেন। এটি একটি HTTP রিকোয়েস্ট তৈরি করে।",
      activeArea: "frontend",
      speechText: "I want a pizza!",
      speechTextBn: "আমি একটি পিৎজা অর্ডার করতে চাই!"
    },
    {
      step: 2,
      badge: "API: RECEIVING REQUEST",
      badgeBn: "API: রিকোয়েস্ট গ্রহণ",
      title: "Scene 2: Waiter Carries the Order Slip",
      titleBn: "দৃশ্য ২: ওয়েটার অর্ডারের চিরকুট নিয়ে রওনা হচ্ছেন",
      subtitle: "The waiter takes the written order and carries it from dining table to the kitchen.",
      subtitleBn: "ওয়েটার গ্রাহকের অর্ডার চিরকুটে লিখে রান্নাঘরের দিকে নিয়ে যাচ্ছেন।",
      techMeaning: "The API (Application Programming Interface) acts as the secure messenger. It safely carries request packets across the network without letting the customer enter the private kitchen.",
      techMeaningBn: "API হলো নিরাপদ বার্তাবাহক। এটি নেটওয়ার্কের মাধ্যমে রিকোয়েস্ট বহন করে। গ্রাহককে কখনো সরাসরি রান্নাঘরে ঢুকতে দেওয়া হয় না।",
      activeArea: "api",
      speechText: "1x Deluxe Pizza Order Slip",
      speechTextBn: "১টি ডিলাক্স পিৎজা অর্ডার চিরকুট"
    },
    {
      step: 3,
      badge: "PHP: PROCESSING REQUEST",
      badgeBn: "PHP: রিকোয়েস্ট প্রসেসিং",
      title: "Scene 3: Chef Receives Ticket & Starts Cooking",
      titleBn: "দৃশ্য ৩: শেফ অর্ডার পেয়ে রান্না শুরু করেছেন",
      subtitle: "The chef (Backend / PHP) checks the recipe rules and starts firing up the stove.",
      subtitleBn: "শেফ (ব্যাকএন্ড / PHP) রেসিপির নিয়ম দেখে চুলায় রান্না শুরু করলেন।",
      techMeaning: "PHP executes on the web server. It validates authentication, checks business rules, prepares variables, and coordinates everything behind the scenes.",
      techMeaningBn: "PHP সার্ভারে এক্সিকিউট হয়। এটি ইউজারের পাসওয়ার্ড, বিজনেস লজিক যাচাই করে এবং সব কাজের সমন্বয় করে।",
      activeArea: "backend",
      speechText: "Processing Order in PHP...",
      speechTextBn: "পিএইচপিতে রিকোয়েস্ট প্রসেস হচ্ছে..."
    },
    {
      step: 4,
      badge: "DATABASE: RETRIEVING DATA",
      badgeBn: "ডাটাবেজ: তথ্য সংগ্রহ",
      title: "Scene 4: Kitchen Needs Ingredients from Storage",
      titleBn: "দৃশ্য ৪: রান্নাঘরের প্রয়োজনে স্টোরেজ থেকে কাঁচামাল আনয়ন",
      subtitle: "The chef unlocks the storage room to get cheese, dough, and fresh ingredients.",
      subtitleBn: "শেফ স্টোরেজ রুম খুলে চিজ, ডো এবং কাঁচামাল সংগ্রহ করে রান্নাঘরে নিয়ে আসেন।",
      techMeaning: "When the backend needs stored information (user profiles, orders, prices), PHP sends a query (SQL) to the Database. The database safely returns the matching records.",
      techMeaningBn: "যখন সংরক্ষিত তথ্য (ইউজার, প্রডাক্ট, অর্ডার) প্রয়োজন হয়, PHP ডাটাবেজে কুয়েরি পাঠায় এবং ডাটাবেজ তথ্য সরবরাহ করে।",
      activeArea: "database",
      speechText: "Querying Storage: [Dough, Cheese, Sauce]",
      speechTextBn: "স্টোরেজ থেকে কাঁচামাল সংগ্রহ হচ্ছে..."
    },
    {
      step: 5,
      badge: "BACKEND: PREPARING RESPONSE",
      badgeBn: "ব্যাকএন্ড: রেসপন্স প্রস্তুত",
      title: "Scene 5: Chef Prepares & Plates the Delicious Pizza",
      titleBn: "দৃশ্য ৫: শেফ পিৎজা তৈরি করে প্লেটে সাজালেন",
      subtitle: "The chef combines raw ingredients into a finished dish and places it on the waiter's tray.",
      subtitleBn: "শেফ কাঁচামাল দিয়ে খাবার প্রস্তুত করে ট্রেতে সুন্দরভাবে সাজিয়ে দিলেন।",
      techMeaning: "PHP takes raw database records, formats them, builds the finished HTML or JSON response, and hands it back to the API/network layer.",
      techMeaningBn: "PHP ডাটাবেজের কাঁচামাল নিয়ে সুন্দর HTML বা JSON তৈরি করে ব্রাউজারে পাঠানোর জন্য রেডি করে।",
      activeArea: "backend",
      speechText: "Pizza Ready! Passing to Waiter",
      speechTextBn: "পিৎজা তৈরি! পরিবেশনের জন্য প্রস্তুত"
    },
    {
      step: 6,
      badge: "RESPONSE SENT SUCCESSFULLY",
      badgeBn: "রেসপন্স সফলভাবে সরবরাহ",
      title: "Scene 6: Waiter Serves Customer at Table",
      titleBn: "দৃশ্য ৬: ওয়েটার টেবিলে গরম পিৎজা পরিবেশন করলেন",
      subtitle: "The waiter brings the hot pizza back to the customer's dining table. Mission accomplished!",
      subtitleBn: "ওয়েটার টেবিলে গরম খাবার পরিবেশন করলেন। পুরো রিকোয়েস্ট ও রেসপন্স চক্র সম্পন্ন!",
      techMeaning: "The HTTP Response travels back to the browser. The browser interprets the HTML/CSS/JS and renders the visual page for the user to enjoy.",
      techMeaningBn: "HTTP রেসপন্স ব্রাউজারে পৌঁছায়। ব্রাউজার এইচটিএমএল প্রদর্শন করে এবং ব্যবহারকারী ফলাফল দেখতে পান।",
      activeArea: "frontend",
      speechText: "Here is your delicious pizza!",
      speechTextBn: "এই নিন আপনার গরম পিৎজা!"
    }
  ];

  const current = stepDetails[currentStep - 1];

  const zones = {
    frontend: {
      name: "Dining Room (Frontend)",
      nameBn: "১. ডাইনিং রুম (ফ্রন্টএন্ড)",
      role: "What the user sees & interacts with",
      roleBn: "গ্রাহক যা সরাসরি দেখেন ও স্পর্শ করেন",
      techs: ["HTML (Structure)", "CSS (Styling)", "JavaScript (Interactivity)"],
      techsBn: ["HTML (গঠন)", "CSS (সৌন্দর্য)", "JavaScript (ইন্টারেক্টিভিটি)"],
      borderColor: "border-sky-400",
      bgColor: "bg-sky-500/10",
      textColor: "text-sky-300",
      glowColor: "shadow-sky-500/30",
      description: "The customer sits at the dining table, opens the menu, and places an order. In web development, this is the browser viewport where buttons, text, and visual elements exist.",
      descriptionBn: "গ্রাহক টেবিলে বসেন, মেনু দেখেন এবং অর্ডার দেন। ওয়েব ডেভেলপমেন্টে এটি ব্রাউজার উইন্ডো যেখানে ইউজার ফর্ম পূরণ করেন ও বাটনে ক্লিক করেন।"
    },
    api: {
      name: "Waiter (API)",
      nameBn: "২. ওয়েটার (API)",
      role: "Carries requests and brings back results",
      roleBn: "রিকোয়েস্ট পৌঁছে দেয় এবং ফলাফল নিয়ে আসে",
      techs: ["HTTP / HTTPS", "REST Endpoints", "JSON Data Packets"],
      techsBn: ["HTTP / HTTPS", "REST এন্ডপয়েন্ট", "JSON ডাটা প্যাকেট"],
      borderColor: "border-amber-400",
      bgColor: "bg-amber-500/10",
      textColor: "text-amber-300",
      glowColor: "shadow-amber-500/30",
      description: "The waiter is the messenger between the customer and the kitchen. In software, an API (Application Programming Interface) is the defined contract allowing frontend and backend to talk without exposing internal kitchen secrets.",
      descriptionBn: "ওয়েটার ডাইনিং ও রান্নাঘরের মধ্যবর্তী বার্তাবাহক। API হলো ফ্রন্টএন্ড ও ব্যাকএন্ডের মধ্যকার যোগাযোগ ইন্টারফেস যা নিরাপদভাবে তথ্য আদান-প্রদান করে।"
    },
    backend: {
      name: "Kitchen (Backend / PHP)",
      nameBn: "৩. রান্নাঘর (ব্যাকএন্ড / PHP)",
      role: "Processes requests and prepares data",
      roleBn: "রিকোয়েস্ট প্রসেস করে ও লজিক এক্সিকিউট করে",
      techs: ["PHP 8.2+", "Zend Engine", "Business Logic & Auth"],
      techsBn: ["PHP 8.2+", "জেন্ড ইঞ্জিন", "বিজনেস লজিক ও সিকিউরিটি"],
      borderColor: "border-emerald-400",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-300",
      glowColor: "shadow-emerald-500/30",
      description: "The kitchen is where food is cooked behind closed doors. PHP is the master chef! It receives requests, checks credentials, calculates numbers, talks to the database, and cooks the finished HTML/JSON response.",
      descriptionBn: "রান্নাঘর হলো বদ্ধ স্থান যেখানে শেফ খাবার তৈরি করেন। পিএইচপি হলো মাস্টার শেফ! এটি পাসওয়ার্ড যাচাই করে, ডাটাবেজ থেকে তথ্য আনে এবং এইচটিএমএল তৈরি করে।"
    },
    database: {
      name: "Storage Room (Database)",
      nameBn: "৪. স্টোরেজ রুম (ডাটাবেজ)",
      role: "Stores all permanent data safely",
      roleBn: "সকল তথ্য স্থায়ীভাবে সাজিয়ে রাখে",
      techs: ["MySQL", "PostgreSQL", "MongoDB"],
      techsBn: ["MySQL", "PostgreSQL", "MongoDB"],
      borderColor: "border-purple-400",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-300",
      glowColor: "shadow-purple-500/30",
      description: "The storage room has organized shelves holding dough, cheese, sauces, and order records. In web systems, the database permanently stores user accounts, hashed passwords, product catalogs, and transaction records.",
      descriptionBn: "কোল্ড স্টোরেজে সাজানো তাকে কাঁচামাল ও খাতা সংরক্ষিত থাকে। ডাটাবেজে ইউজার একাউন্ট, পাসওয়ার্ড, প্রডাক্ট লিস্ট এবং লেনদেন নিরাপদে সংরক্ষণ করা হয়।"
    }
  };

  const activeZoneData = zones[hoveredZone || current.activeArea];

  const handleNext = () => {
    setCurrentStep(prev => Math.min(totalSteps, prev + 1));
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
    setIsPlaying(false);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsPlaying(false);
  };

  return (
    <div className="space-y-10">
      {/* 1. Header Hero Card matching screenshot styling */}
      <div className="text-center space-y-3 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-[#141d36] border border-cyan-400/40 text-cyan-300 shadow-md shadow-cyan-500/10">
          <Utensils className="w-3.5 h-3.5 text-amber-400" />
          <span>{t("SIGNATURE TEACHING EXPERIENCE", "প্রধান উদ্বোধনী পাঠ")}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          {t("Restaurant Analogy: How a Website Works", "রেস্তোরাঁর উপমা: ওয়েবসাইট কীভাবে কাজ করে")}
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto">
          {t(
            "A restaurant and a website work in the exact same way!",
            "একটি রেস্তোরাঁ এবং একটি আধুনিক ওয়েবসাইট ঠিক একইভাবে কাজ করে!"
          )}
        </p>

        <p className="text-xs text-slate-400 font-mono">
          {t("Hover over any area or use the step controls below for a guided walkthrough.", "যেকোনো অংশের ওপর মাউস নিন অথবা নিচের কন্ট্রোল দিয়ে ধাপে ধাপে শিখুন।")}
        </p>
      </div>

      {/* 2. Interactive Teaching Controller Bar */}
      <div className="bg-[#0b0e1a] border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        {/* Step Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center shrink-0 shadow-md shadow-yellow-500/20">
            {currentStep}/{totalSteps}
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
              {lang === 'bn' ? current.badgeBn : current.badge}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white">
              {lang === 'bn' ? current.titleBn : current.title}
            </h3>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Previous Step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(prev => !prev)}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 transition-all shadow-md ${
              isPlaying
                ? 'bg-amber-400 text-slate-950 shadow-yellow-400/20 hover:bg-amber-300'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>{t("Pause", "পজ")}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t("Play Animation", "অ্যানিমেশন শুরু")}</span>
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === totalSteps}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Next Step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors ml-1"
            title="Reset to Step 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setShowReferenceModal(true)}
            className="px-3 py-2 rounded-xl bg-[#171e36] hover:bg-[#20294a] text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold flex items-center gap-1.5 transition-all ml-1"
            title="View Reference Illustration Poster"
          >
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">{t("Reference Poster", "মূল চিত্র")}</span>
          </button>
        </div>
      </div>

      {/* Reference Image Modal */}
      {showReferenceModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center">
          <div className="relative max-w-5xl w-full bg-[#0b0e1a] border border-cyan-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-base font-bold text-white">
                  {t("Original Reference Infographic: Restaurant Analogy", "মূল রেফারেন্স পোস্টার: রেস্তোরাঁর উপমা")}
                </h3>
              </div>
              <button
                onClick={() => setShowReferenceModal(false)}
                className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 hover:text-white transition-colors"
              >
                ✕ {t("Close", "বন্ধ করুন")}
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-black flex items-center justify-center">
              <img
                src="/images/restaurant-analogy.jpg"
                alt="Restaurant Analogy How a Website Works"
                className="w-full h-auto object-contain max-h-[70vh] rounded-xl"
              />
            </div>

            <div className="text-center text-xs text-slate-400 font-mono">
              {t("High-resolution visual reference: Dining Room (Frontend), Waiter (API), Kitchen (Backend - PHP), Storage Room (Database)", "উচ্চ রেজোলিউশন ভিজ্যুয়াল রেফারেন্স: ডাইনিং রুম (ফ্রন্টএন্ড), ওয়েটার (API), রান্নাঘর (ব্যাকএন্ড - PHP), স্টোরেজ রুম (ডাটাবেজ)")}
            </div>
          </div>
        </div>
      )}

      {/* 3. The Grand 4-Zone Restaurant Canvas */}
      <div className="relative rounded-3xl bg-[#060812] border-2 border-slate-800 p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden">
        {/* Subtle Warm Lighting Backdrop */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* 4 Interactive Columns: Dining Room | Waiter | Kitchen | Storage Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          
          {/* ZONE A: Dining Room (Frontend) */}
          <motion.div
            onMouseEnter={() => setHoveredZone('frontend')}
            onMouseLeave={() => setHoveredZone(null)}
            onClick={() => setCurrentStep(1)}
            animate={{
              scale: current.activeArea === 'frontend' || hoveredZone === 'frontend' ? 1.02 : 1
            }}
            className={`rounded-2xl p-4 sm:p-5 border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
              current.activeArea === 'frontend' || hoveredZone === 'frontend'
                ? 'border-sky-400 bg-sky-950/30 shadow-xl shadow-sky-500/20 ring-2 ring-sky-400/30'
                : 'border-slate-800/80 bg-[#0a0d1a] hover:border-sky-500/40'
            }`}
          >
            <div className="space-y-3">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30 uppercase">
                  Frontend
                </span>
                <Laptop className="w-4 h-4 text-sky-400" />
              </div>

              {/* Title */}
              <div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  {t("Dining Room", "ডাইনিং রুম")}
                </h4>
                <p className="text-xs text-sky-300/90 font-medium">
                  {t("What you see & interact with", "যা আপনি দেখেন ও ব্যবহার করেন")}
                </p>
              </div>

              {/* Visual Character Illustration Box */}
              <div className="h-36 rounded-xl bg-gradient-to-b from-[#0e1628] to-[#080d18] border border-sky-500/20 p-3 flex flex-col items-center justify-center relative overflow-hidden text-center">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 mb-2">
                  <span className="text-2xl">🧑‍💻</span>
                </div>
                <span className="text-xs font-bold text-white">
                  {t("Customer at Table", "টেবিলে বসা গ্রাহক")}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  Menu & Laptop (Browser)
                </span>

                {/* Animated Speech Bubble */}
                <AnimatePresence>
                  {(currentStep === 1 || currentStep === 6) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-2 right-2 bg-white text-slate-950 px-2 py-1 rounded-lg text-[10px] font-bold shadow-lg border border-slate-200 flex items-center gap-1"
                    >
                      <span>💬</span>
                      <span>{currentStep === 1 ? "I want a pizza!" : "Delicious!"}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1 text-[10px] font-mono text-slate-400">
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">HTML</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">CSS</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">JS</span>
            </div>
          </motion.div>

          {/* ZONE B: Waiter (API) */}
          <motion.div
            onMouseEnter={() => setHoveredZone('api')}
            onMouseLeave={() => setHoveredZone(null)}
            onClick={() => setCurrentStep(2)}
            animate={{
              scale: current.activeArea === 'api' || hoveredZone === 'api' ? 1.02 : 1
            }}
            className={`rounded-2xl p-4 sm:p-5 border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
              current.activeArea === 'api' || hoveredZone === 'api'
                ? 'border-amber-400 bg-amber-950/30 shadow-xl shadow-amber-500/20 ring-2 ring-amber-400/30'
                : 'border-slate-800/80 bg-[#0a0d1a] hover:border-amber-500/40'
            }`}
          >
            <div className="space-y-3">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 uppercase">
                  API
                </span>
                <Globe className="w-4 h-4 text-amber-400" />
              </div>

              {/* Title */}
              <div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  {t("Waiter", "ওয়েটার")}
                </h4>
                <p className="text-xs text-amber-300/90 font-medium">
                  {t("Carries your request & result", "রিকোয়েস্ট পৌঁছে দেয় ও ফল আনে")}
                </p>
              </div>

              {/* Visual Character Illustration Box */}
              <div className="h-36 rounded-xl bg-gradient-to-b from-[#1c180c] to-[#080d18] border border-amber-500/20 p-3 flex flex-col items-center justify-center relative overflow-hidden text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-2 relative">
                  <span className="text-2xl">🤵</span>
                  <span className="absolute -bottom-1 -right-1 px-1 py-0.2 bg-amber-400 text-slate-950 text-[8px] font-black rounded">
                    API
                  </span>
                </div>
                <span className="text-xs font-bold text-white">
                  {t("The Waiter (Messenger)", "ওয়েটার (বার্তাবাহক)")}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  Request / Response Highway
                </span>

                {/* Animated Flying Order / Pizza Tray */}
                <AnimatePresence>
                  {(currentStep === 2 || currentStep === 5 || currentStep === 6) && (
                    <motion.div
                      initial={{ scale: 0, y: 15 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0 }}
                      className="absolute bottom-2 bg-amber-400 text-slate-950 px-2 py-0.5 rounded text-[10px] font-mono font-black shadow-md flex items-center gap-1"
                    >
                      <span>{currentStep === 2 ? "📝 Order Slip" : "🍕 Fresh Pizza!"}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1 text-[10px] font-mono text-slate-400">
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">HTTP GET</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">HTTP POST</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">JSON</span>
            </div>
          </motion.div>

          {/* ZONE C: Kitchen (Backend / PHP) */}
          <motion.div
            onMouseEnter={() => setHoveredZone('backend')}
            onMouseLeave={() => setHoveredZone(null)}
            onClick={() => setCurrentStep(3)}
            animate={{
              scale: current.activeArea === 'backend' || hoveredZone === 'backend' ? 1.02 : 1
            }}
            className={`rounded-2xl p-4 sm:p-5 border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
              current.activeArea === 'backend' || hoveredZone === 'backend'
                ? 'border-emerald-400 bg-emerald-950/30 shadow-xl shadow-emerald-500/20 ring-2 ring-emerald-400/30'
                : 'border-slate-800/80 bg-[#0a0d1a] hover:border-emerald-500/40'
            }`}
          >
            <div className="space-y-3">
              {/* Badge with Prominent PHP Label */}
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase flex items-center gap-1">
                  <span>Backend</span>
                  <span className="bg-emerald-400 text-slate-950 px-1 py-0.2 rounded text-[9px] font-black">PHP</span>
                </span>
                <ChefHat className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Title */}
              <div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  {t("Kitchen", "রান্নাঘর")}
                </h4>
                <p className="text-xs text-emerald-300/90 font-medium">
                  {t("Processes the request (PHP)", "রিকোয়েস্ট প্রসেস করে (পিএইচপি)")}
                </p>
              </div>

              {/* Visual Character Illustration Box */}
              <div className="h-36 rounded-xl bg-gradient-to-b from-[#0e1c14] to-[#080d18] border border-emerald-500/20 p-3 flex flex-col items-center justify-center relative overflow-hidden text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-2 relative">
                  <span className="text-2xl">👨‍🍳</span>
                  <span className="absolute -top-1 -right-1 text-xs animate-bounce">🔥</span>
                </div>
                <span className="text-xs font-bold text-white">
                  {t("Chef (PHP Engine)", "শেফ (পিএইচপি ইঞ্জিন)")}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  Business Logic & Security
                </span>

                {/* Animated Processing Badge */}
                <AnimatePresence>
                  {(currentStep === 3 || currentStep === 5) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-2 left-2 bg-emerald-400 text-slate-950 px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>PHP Cooking...</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1 text-[10px] font-mono text-slate-400">
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">PHP 8.2</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Apache/Nginx</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">PDO</span>
            </div>
          </motion.div>

          {/* ZONE D: Storage Room (Database) */}
          <motion.div
            onMouseEnter={() => setHoveredZone('database')}
            onMouseLeave={() => setHoveredZone(null)}
            onClick={() => setCurrentStep(4)}
            animate={{
              scale: current.activeArea === 'database' || hoveredZone === 'database' ? 1.02 : 1
            }}
            className={`rounded-2xl p-4 sm:p-5 border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
              current.activeArea === 'database' || hoveredZone === 'database'
                ? 'border-purple-400 bg-purple-950/30 shadow-xl shadow-purple-500/20 ring-2 ring-purple-400/30'
                : 'border-slate-800/80 bg-[#0a0d1a] hover:border-purple-500/40'
            }`}
          >
            <div className="space-y-3">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-400/30 uppercase">
                  Database
                </span>
                <Database className="w-4 h-4 text-purple-400" />
              </div>

              {/* Title */}
              <div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  {t("Storage Room", "স্টোরেজ রুম")}
                </h4>
                <p className="text-xs text-purple-300/90 font-medium">
                  {t("Stores all the data (orders, users)", "সকল তথ্য সংরক্ষণ করে")}
                </p>
              </div>

              {/* Visual Character Illustration Box */}
              <div className="h-36 rounded-xl bg-gradient-to-b from-[#18112e] to-[#080d18] border border-purple-500/20 p-3 flex flex-col items-center justify-center relative overflow-hidden text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-2">
                  <Database className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-xs font-bold text-white">
                  {t("Cold Storage Shelves", "কোল্ড স্টোরেজের তাক")}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  Tables, Rows & Documents
                </span>

                {/* Animated Ingredients Box */}
                <AnimatePresence>
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ scale: 0, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0 }}
                      className="absolute bottom-2 bg-purple-400 text-slate-950 px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center gap-1 shadow-md"
                    >
                      <span>📦 SELECT * FROM storage</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1 text-[10px] font-mono text-slate-400">
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">MySQL</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">PostgreSQL</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">MongoDB</span>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Curved Flow Paths matching the Screenshot arrows */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            {/* Forward Flow: Request */}
            <div className="flex items-center gap-2 text-amber-300">
              <span className="px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 font-bold">
                {t("1. REQUEST PATH", "১. রিকোয়েস্ট প্রবাহ")}:
              </span>
              <span>Customer → Waiter → Kitchen → Storage Room</span>
            </div>

            {/* Backward Flow: Response */}
            <div className="flex items-center gap-2 text-emerald-300">
              <span className="px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/30 font-bold">
                {t("2. RESPONSE PATH", "২. রেসপন্স প্রবাহ")}:
              </span>
              <span>Storage → Kitchen (Cooked Pizza) → Waiter → Customer</span>
            </div>
          </div>

          {/* Animated Active Explanation HUD Card */}
          <div className={`p-4 sm:p-5 rounded-2xl border-2 transition-all ${activeZoneData.borderColor} ${activeZoneData.bgColor}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${activeZoneData.borderColor.replace('border', 'bg')} animate-ping`} />
                <h4 className="text-base font-bold text-white">
                  {lang === 'bn' ? activeZoneData.nameBn : activeZoneData.name}
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300">
                {lang === 'bn' ? activeZoneData.roleBn : activeZoneData.role}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {lang === 'bn' ? activeZoneData.descriptionBn : activeZoneData.description}
            </p>
          </div>
        </div>
      </div>

      {/* 4. In Web Development Terms & Key Takeaway (Matching Screenshot Lower Panels) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: In Web Development Terms Flow */}
        <div className="lg:col-span-2 bg-[#0b0e1a] border border-blue-500/30 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            <h3 className="text-base font-bold text-white">
              {t("In Web Development Terms:", "ওয়েব ডেভেলপমেন্টের কারিগরি পরিভাষায়:")}
            </h3>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {t(
              "Here is how real hardware and software components correspond to the restaurant:",
              "বাস্তব সফটওয়্যার কাঠামো ঠিক যেভাবে রেস্তোরাঁর সাথে মিলে যায়:"
            )}
          </p>

          {/* Technical Flow Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            
            {/* 1. Browser */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                <Laptop className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Browser</span>
              <span className="text-[10px] text-slate-400 font-mono">(You / Client)</span>
            </div>

            {/* 2. Frontend */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Frontend</span>
              <span className="text-[10px] text-slate-400 font-mono">(Dining Room)</span>
            </div>

            {/* 3. API */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <ArrowRight className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">API</span>
              <span className="text-[10px] text-slate-400 font-mono">(Waiter / HTTP)</span>
            </div>

            {/* 4. Backend (PHP) */}
            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 flex flex-col items-center text-center space-y-1.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Server className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-emerald-300">Backend</span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">(Kitchen - PHP)</span>
            </div>

            {/* 5. Database */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center space-y-1.5 col-span-2 sm:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Database</span>
              <span className="text-[10px] text-slate-400 font-mono">(Storage Room)</span>
            </div>

          </div>

          <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Browser → HTTP Request → API / Server → PHP → Database → Prepared HTML Response → Browser</span>
          </div>
        </div>

        {/* Right Col: Key Takeaway Box */}
        <div className="bg-gradient-to-br from-[#121628] to-[#1a1226] border border-amber-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">
                {t("💡 Key Takeaway:", "💡 মূল শিক্ষণীয় কথা:")}
              </h3>
            </div>

            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <strong className="text-sky-400">Frontend</strong>
                <span className="text-slate-300">{t("What you see", "যা আপনি দেখেন")}</span>
              </li>
              <li className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <strong className="text-emerald-400">Backend (PHP)</strong>
                <span className="text-slate-300">{t("What processes logic", "যা লজিক প্রসেস করে")}</span>
              </li>
              <li className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <strong className="text-purple-400">Database</strong>
                <span className="text-slate-300">{t("Where data lives", "যেখানে ডাটা সংরক্ষিত থাকে")}</span>
              </li>
              <li className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <strong className="text-amber-400">API</strong>
                <span className="text-slate-300">{t("The messenger between them", "উভয়ের মধ্যবর্তী বার্তাবাহক")}</span>
              </li>
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-center">
            <span className="text-xs font-black text-amber-300 tracking-wide">
              {t("Together, they create the entire website! 🚀", "এরা সবাই মিলেই গড়ে তোলে পূর্ণাঙ্গ ওয়েবসাইট! 🚀")}
            </span>
          </div>
        </div>

      </div>

      {/* 5. Real PHP Code Demonstration: Connecting Analogy to Code */}
      <section className="bg-[#090c17] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {t("Real PHP Code in Action: The Server Execution Proof", "বাস্তব পিএইচপি কোড: সার্ভার এক্সিকিউশনের প্রমাণ")}
              </h3>
              <p className="text-xs text-slate-400">
                {t("Notice: The browser NEVER receives raw PHP code. It only receives the finished HTML cooked by the server!", "লক্ষণীয়: ব্রাউজার কখনো কাঁচা পিএইচপি কোড পায় না। সার্ভারের রান্না করা এইচটিএমএল পায়!")}
              </p>
            </div>
          </div>

          <div className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            {t("Simulated PHP Execution Engine", "সিমুলেটেড পিএইচপি এক্সিকিউশন ইঞ্জিন")}
          </div>
        </div>

        {/* 3-Step Code Pipeline: PHP Source -> Server Execution -> Browser Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          
          {/* Card 1: PHP Source File */}
          <div className="p-4 rounded-xl bg-[#060812] border border-emerald-500/30 font-mono text-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                <span className="text-emerald-400 font-bold">server/index.php</span>
                <span className="text-[10px]">PHP Script</span>
              </div>
              <pre className="text-slate-200 leading-relaxed">
{`<?php

$name = "${codeNameInput}";

echo "<h1>Welcome, $name!</h1>";

?>`}
              </pre>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-400">
              {t("Private to the server kitchen", "রান্নাঘরের পেছনের গোপন কোড")}
            </div>
          </div>

          {/* Card 2: Server Execution (Zend Engine) */}
          <div className="p-4 rounded-xl bg-[#0e1424] border border-amber-500/30 font-mono text-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                <span className="text-amber-400 font-bold">Server Execution</span>
                <span className="text-[10px] text-amber-300 animate-pulse">Processing...</span>
              </div>

              <div className="space-y-2 text-[11px] text-slate-300">
                <div className="p-2 rounded bg-black/50 border border-slate-800">
                  <span className="text-slate-400">1. Parse variable:</span>
                  <div className="text-amber-300">$name = "{codeNameInput}"</div>
                </div>
                <div className="p-2 rounded bg-black/50 border border-slate-800">
                  <span className="text-slate-400">2. Cook HTML output:</span>
                  <div className="text-emerald-400">&lt;h1&gt;Welcome, {codeNameInput}!&lt;/h1&gt;</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={codeNameInput}
                onChange={(e) => setCodeNameInput(e.target.value)}
                placeholder="Change name..."
                className="px-2 py-1 rounded bg-black border border-slate-700 text-[11px] text-white focus:outline-none focus:border-amber-400 flex-1"
              />
              <span className="text-[10px] text-slate-400">Live Edit</span>
            </div>
          </div>

          {/* Card 3: What the Browser Sees */}
          <div className="p-4 rounded-xl bg-[#060812] border border-sky-500/30 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 font-mono text-xs">
                <span className="text-sky-400 font-bold">Browser Window</span>
                <span className="text-[10px] text-emerald-400">HTTP 200 OK</span>
              </div>

              {/* Rendered HTML Preview */}
              <div className="p-4 rounded-lg bg-white text-slate-950 font-sans shadow-inner">
                <h1 className="text-lg font-black tracking-tight text-slate-900">
                  Welcome, {codeNameInput}!
                </h1>
              </div>

              <div className="font-mono text-[10px] text-slate-400">
                <span>Received HTML source: </span>
                <code className="text-sky-300">&lt;h1&gt;Welcome, {codeNameInput}!&lt;/h1&gt;</code>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
              {t("Notice: Zero PHP tags reach the browser!", "ব্রাউজারে পিএইচপি ট্যাগের কোনো চিহ্ন নেই!")}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Seamless Transition into Full PHP Curriculum */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#12162b] via-[#171b34] to-[#12162b] border border-amber-500/40 text-center space-y-4 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
            {t("THE JOURNEY BEGINS HERE", "এখান থেকেই শুরু পিএইচপি সফর")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {t(
              "Now that you understand how a website works, let's learn how PHP makes the backend possible.",
              "ওয়েবসাইট কীভাবে কাজ করে তা বোঝার পর, এবার চলুন শিখে নেওয়া যাক পিএইচপি কীভাবে সার্ভার নিয়ন্ত্রণ করে।"
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t(
              "Dive into our 15 step-by-step interactive modules: from variables, arrays, and loops to building our actual classroom project (php-class-two) and the PHP vs JS comparison lab.",
              "আমাদের ১৫টি ধারাবাহিক মডিউলে প্রবেশ করুন: ভেরিয়েবল, অ্যারে ও লুপ থেকে শুরু করে আসল প্রজেক্ট এবং পিএইচপি বনাম জাভাস্ক্রিপ্ট ল্যাব।"
            )}
          </p>

          <div className="pt-2">
            <button
              onClick={onStartCurriculum}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FACC15] via-amber-400 to-yellow-400 hover:from-yellow-300 hover:to-amber-300 text-slate-950 font-black text-sm transition-all shadow-xl shadow-yellow-500/20 hover:scale-105 active:scale-95 inline-flex items-center gap-2.5"
            >
              <span>{t("Start Learning PHP (15 Modules)", "পিএইচপি শেখা শুরু করুন (১৫টি মডিউল)")}</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RestaurantAnalogyExperience;
