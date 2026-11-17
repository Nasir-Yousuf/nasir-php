import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Utensils, 
  ChefHat, 
  Database, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles,
  ShieldAlert,
  Server,
  Layers,
  FileCode2
} from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function RestaurantAnalogy() {
  const { lang, t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedRole, setSelectedRole] = useState('dining');

  const steps = [
    {
      id: 'customer',
      title: "1. Customer arrives at table",
      titleBn: "১. কাস্টমার টেবিলে বসে মেনু দেখছেন",
      actor: "Customer (User)",
      actorBn: "গ্রাহক (ব্যবহারকারী)",
      analogy: "You browse the physical menu cards and decide you want the Chef Special Biryani.",
      analogyBn: "আপনি মেনু কার্ড দেখে পছন্দ করলেন শেফ স্পেশাল বিরিয়ানি খাবেন।",
      tech: "User enters 'https://mysite.com/students' in the browser address bar. The browser renders the HTML/CSS visual interface.",
      techBn: "ব্যবহারকারী ব্রাউজারে ইউআরএল লেখেন। ব্রাউজার সুন্দর HTML/CSS ইন্টারফেস ডিসপ্লে করে।",
      highlight: "user"
    },
    {
      id: 'order',
      title: "2. Waiter writes down order slip",
      titleBn: "২. ওয়েটার অর্ডারের চিরকুট লিখে নেন",
      actor: "Waiter (HTTP Request)",
      actorBn: "ওয়েটার (HTTP রিকোয়েস্ট)",
      analogy: "The waiter notes down '1x Special Biryani' on a formal order ticket and carries it towards the kitchen.",
      analogyBn: "ওয়েটার অর্ডারের স্লিপ লিখে নিয়ে রান্নাঘরের দিকে রওনা হন।",
      tech: "Frontend JavaScript fires an HTTP GET /api/students request through the network cables to the server.",
      techBn: "ফ্রন্টএন্ড জাভাস্ক্রিপ্ট ইন্টারনেটের মাধ্যমে সার্ভারে HTTP GET /api/students রিকোয়েস্ট পাঠায়।",
      highlight: "request"
    },
    {
      id: 'kitchen',
      title: "3. Chef receives ticket & checks rules",
      titleBn: "৩. শেফ অর্ডার পেয়ে নিয়ম ও রেসিপি যাচাই করেন",
      actor: "Chef / Kitchen (Backend / PHP)",
      actorBn: "শেফ / রান্নাঘর (ব্যাকএন্ড / PHP)",
      analogy: "The Chef checks if the restaurant is open, validates the order, and decides which ingredients are needed.",
      analogyBn: "শেফ যাচাই করেন রেস্টুরেন্ট খোলা কিনা এবং কী কী কাঁচামাল লাগবে তার হিসাব করেন।",
      tech: "The PHP server receives the request, validates cookies/authentication, checks route rules, and prepares business logic.",
      techBn: "PHP সার্ভার রিকোয়েস্ট রিসিভ করে, ইউজার অথেন্টিকেশন ও বিজনেস লজিক যাচাই করে।",
      highlight: "backend"
    },
    {
      id: 'pantry',
      title: "4. Storekeeper retrieves raw ingredients",
      titleBn: "৪. স্টোরকিপার স্টোরেজ থেকে কাঁচামাল বের করেন",
      actor: "Pantry / Cold Storage (Database)",
      actorBn: "প্যান্ট্রি / কোল্ড স্টোরেজ (ডাটাবেজ)",
      analogy: "The chef unlocks the private cold storage room and fetches marinated meat and spices from labeled containers.",
      analogyBn: "শেফ নিরাপদ কোল্ড স্টোরেজ থেকে নির্দিষ্ট ড্রয়ার থেকে চাল ও মাংস সংগ্রহ করেন।",
      tech: "PHP executes PDO SQL query: 'SELECT * FROM students'. MySQL searches indexed tables on the disk and returns raw row tuples.",
      techBn: "PHP ডাটাবেজে কুয়েরি চালায় (SELECT * FROM students)। MySQL হার্ডডিস্ক থেকে প্রয়োজনীয় রেকর্ড বের করে ফেরত দেয়।",
      highlight: "database"
    },
    {
      id: 'cook',
      title: "5. Chef cooks & plates the dish",
      titleBn: "৫. শেফ রান্না করে সুন্দর প্লেটে সাজান",
      actor: "Chef (PHP Processing & JSON/HTML)",
      actorBn: "শেফ (PHP প্রসেসিং ও ফরম্যাটিং)",
      analogy: "The Chef cooks the ingredients together, garnishes with coriander, and places it neatly on a serving platter.",
      analogyBn: "শেফ কাঁচামাল রান্না করে গরম গরম সুন্দর ট্রেতে পরিবেশনের জন্য প্রস্তুত করেন।",
      tech: "PHP takes raw SQL tuples, populates an associative array, and encodes it into JSON or injects it into a PHP view template.",
      techBn: "PHP র ডাটাবেজ রেকর্ডগুলোকে সাজিয়ে অ্যারে বানায় এবং JSON বা HTML টেমপ্লেটে পরিণত করে।",
      highlight: "backend"
    },
    {
      id: 'serve',
      title: "6. Waiter serves plate to customer",
      titleBn: "৬. ওয়েটার টেবিলে গরম খাবার পরিবেশন করেন",
      actor: "Waiter (HTTP Response) & Dining Area",
      actorBn: "ওয়েটার (HTTP রেসপন্স) ও ডাইনিং",
      analogy: "The waiter delivers the hot steaming dish directly to your dining table for you to enjoy.",
      analogyBn: "ওয়েটার গ্রাহকের টেবিলে খাবার পৌঁছে দেন এবং গ্রাহক তা উপভোগ করেন।",
      tech: "Server returns HTTP 200 OK with HTML/JSON. Browser receives the packets, executes DOM updates, and the user sees their student table!",
      techBn: "সার্ভার HTTP 200 OK রেসপন্স পাঠায়। ব্রাউজার স্ক্রিনে সুন্দর টেবিল রেন্ডার করে ইউজারকে প্রদর্শন করে!",
      highlight: "user"
    }
  ];

  const roles = [
    {
      id: 'dining',
      name: "1. The Dining Hall (Frontend)",
      nameBn: "১. ডাইনিং হল (ফ্রন্টএন্ড)",
      icon: Utensils,
      color: "cyan",
      analogyRole: "What the customer sees, touches, and interacts with: the tables, lights, and menus.",
      analogyRoleBn: "গ্রাহক যা দেখে ও স্পর্শ করে: টেবিল, পরিবেশ, চেয়ার এবং মেনু কার্ড।",
      techRole: "The Web Browser running HTML (structure), CSS (styling), and JavaScript (reactivity & button clicks).",
      techRoleBn: "ওয়েব ব্রাউজার যেখানে HTML (গঠন), CSS (সৌন্দর্য) এবং JavaScript (ইন্টারঅ্যাকশন) চলে।",
      whySeparate: "Customers are NEVER allowed to wander into the kitchen or pantry for safety, hygiene, and theft prevention.",
      whySeparateBn: "নিরাপত্তা ও শৃঙ্খলার স্বার্থে সাধারণ গ্রাহকদের সরাসরি রান্নাঘর বা স্টোররুমে ঢুকতে দেওয়া হয় না।"
    },
    {
      id: 'kitchen',
      name: "2. The Kitchen & Chef (Backend)",
      nameBn: "২. রান্নাঘর ও শেফ (ব্যাকএন্ড)",
      icon: ChefHat,
      color: "amber",
      analogyRole: "Behind closed doors where raw ingredients are transformed into finished meals according to secret recipes.",
      analogyRoleBn: "বন্ধ দরজার পেছনের জায়গা যেখানে বাবুর্চি রেসিপি অনুযায়ী কাঁচামাল দিয়ে খাবার তৈরি করেন।",
      techRole: "The Web Server running PHP (or Node.js, Python). Executes secure business logic, calculates prices, and checks passwords.",
      techRoleBn: "ওয়েব সার্ভার যেখানে PHP চলে। এটি সিক্রেট বিজনেস লজিক, পাসওয়ার্ড যাচাই এবং ডাটা প্রস্তুতের কাজ করে।",
      whySeparate: "Keeps secret business rules safe and prevents clients from executing malicious unauthorized operations.",
      whySeparateBn: "বিজনেস লজিক সুরক্ষিত রাখে এবং ক্ষতিকর সরাসরি এক্সেস প্রতিহত করে।"
    },
    {
      id: 'pantry',
      name: "3. Cold Storage & Pantry (Database)",
      nameBn: "৩. কোল্ড স্টোরেজ ও প্যান্ট্রি (ডাটাবেজ)",
      icon: Database,
      color: "purple",
      analogyRole: "Locked storage rooms organized with shelves, bins, and labels to preserve ingredients long term.",
      analogyRoleBn: "তালাবদ্ধ স্টোররুম যেখানে নির্দিষ্ট ড্রয়ার ও তাকে দীর্ঘমেয়াদে কাঁচামাল সাজিয়ে রাখা হয়।",
      techRole: "MySQL / PostgreSQL / MongoDB. Permanently stores user accounts, student records, passwords, and transactions.",
      techRoleBn: "MySQL / MongoDB ডাটাবেজ। এটি ব্যবহারকারী, পাসওয়ার্ড, স্টুডেন্ট লিস্ট ও রেকর্ড স্থায়ীভাবে সংরক্ষণ করে।",
      whySeparate: "A direct public connection to a database would leak private company passwords and customer credit cards instantly!",
      whySeparateBn: "ব্রাউজার সরাসরি ডাটাবেজে যুক্ত হলে যে কেউ ওয়েবসাইট হ্যাক করে সব তথ্য ও পাসওয়ার্ড চুরি করতে পারত!"
    }
  ];

  const handleNextStep = () => {
    setActiveStep(prev => (prev + 1) % steps.length);
  };

  const handlePrevStep = () => {
    setActiveStep(prev => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-[#141828] to-purple-950/50 border border-slate-800 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 shrink-0">
            <Utensils className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {t("Mental Model: 1st Principles", "সহজ উপমা: প্রথম মূলনীতি")}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {t("Restaurant Analogy ↔ Web Architecture", "রেস্তোরাঁর উপমা ↔ ওয়েব আর্কিটেকচার")}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {t("What Actually Happens When You Open a Website?", "ওয়েবসাইট খুললে পর্দার আড়ালে আসলে কী ঘটে?")}
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {t(
                "Before writing a single line of PHP, we must understand the physical reality of the internet. A web application is exactly like a high-end restaurant: customers enjoy food in the dining hall, the kitchen prepares the dishes, and ingredients are safely guarded in a private storage room.",
                "পিএইচপি কোড লেখার আগে ইন্টারনেট কীভাবে কাজ করে তা বোঝা জরুরি। যেকোনো আধুনিক ওয়েব অ্যাপ্লিকেশন ঠিক একটি রেস্তোরাঁর মতো: ডাইনিং হলে গ্রাহক বসেন, পেছনের রান্নাঘরে শেফ রান্না করেন, আর প্রয়োজনীয় কাঁচামাল স্টোররুমে সুরক্ষিত থাকে।"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Metaphor Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {roles.map((r) => {
          const Icon = r.icon;
          const isSelected = selectedRole === r.id;
          const borderColor = r.color === 'cyan' ? 'border-cyan-500/40' : r.color === 'amber' ? 'border-amber-500/40' : 'border-purple-500/40';
          const bgActive = r.color === 'cyan' ? 'bg-cyan-950/20' : r.color === 'amber' ? 'bg-amber-950/20' : 'bg-purple-950/20';
          const iconColor = r.color === 'cyan' ? 'text-cyan-400' : r.color === 'amber' ? 'text-amber-400' : 'text-purple-400';

          return (
            <motion.div
              key={r.id}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedRole(r.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                isSelected ? `${borderColor} ${bgActive} shadow-lg ring-1 ring-white/10` : 'border-slate-800 bg-[#121526]/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                  {r.color.toUpperCase()}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">
                {lang === 'bn' ? r.nameBn : r.name}
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-400 block mb-0.5">
                    {t("Real-World Analogy:", "বাস্তব জীবনের উপমা:")}
                  </span>
                  <p className="text-slate-300">
                    {lang === 'bn' ? r.analogyRoleBn : r.analogyRole}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <span className="font-semibold text-amber-300 block mb-0.5">
                    {t("Technical Equivalent:", "প্রকৃত প্রযুক্তিগত রূপ:")}
                  </span>
                  <p className="text-slate-200">
                    {lang === 'bn' ? r.techRoleBn : r.techRole}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 p-2.5 rounded-lg bg-red-950/20 border border-red-500/20">
                  <div className="flex items-center gap-1.5 text-red-400 font-bold text-[11px] mb-1">
                    <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                    <span>{t("Why Keep Isolated?", "কেন সরাসরি যুক্ত করা হয় না?")}</span>
                  </div>
                  <p className="text-[11px] text-red-200/90 leading-relaxed">
                    {lang === 'bn' ? r.whySeparateBn : r.whySeparate}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Step-by-Step Interactive Order Lifecycle Simulator */}
      <div className="p-6 rounded-2xl bg-[#121629] border border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#FACC15] uppercase tracking-wider block">
              {t("Interactive Scenario", "ইন্টারেক্টিভ সিমুলেটর")}
            </span>
            <h3 className="text-lg font-bold text-white">
              {t("Ordering Food ↔ Requesting Student Data", "খাবার অর্ডার করা ↔ সার্ভার থেকে ডাটা আনা")}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevStep}
              className="px-3 py-1.5 rounded-lg bg-[#1a1e33] hover:bg-[#252b47] text-xs font-bold text-slate-300 transition-all border border-slate-700"
            >
              {t("← Previous", "← পূর্ববর্তী")}
            </button>
            <span className="text-xs font-mono text-slate-400 px-2">
              {activeStep + 1} / {steps.length}
            </span>
            <button
              onClick={handleNextStep}
              className="px-3 py-1.5 rounded-lg bg-[#FACC15] hover:bg-yellow-300 text-slate-950 text-xs font-black transition-all shadow-md shadow-yellow-500/10"
            >
              {t("Next Step →", "পরবর্তী ধাপ →")}
            </button>
          </div>
        </div>

        {/* Stepper Progress Bar */}
        <div className="grid grid-cols-6 gap-2 mb-6">
          {steps.map((st, idx) => (
            <button
              key={st.id}
              onClick={() => setActiveStep(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === activeStep 
                  ? 'bg-[#FACC15] shadow-lg shadow-yellow-400/30' 
                  : idx < activeStep 
                    ? 'bg-emerald-500' 
                    : 'bg-slate-800'
              }`}
              title={lang === 'bn' ? st.titleBn : st.title}
            />
          ))}
        </div>

        {/* Current Active Step Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-[#161a30] border border-slate-700/70"
          >
            {/* Analogy Box */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center text-xs font-bold font-mono">
                  {activeStep + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {lang === 'bn' ? steps[activeStep].actorBn : steps[activeStep].actor}
                </span>
              </div>
              <h4 className="text-base font-bold text-white">
                {lang === 'bn' ? steps[activeStep].titleBn : steps[activeStep].title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-[#111322] p-3.5 rounded-lg border border-slate-800">
                <span className="font-semibold text-amber-400 block mb-1">
                  🍳 {t("Restaurant Analogy:", "রেস্টুরেন্ট উপমা:")}
                </span>
                {lang === 'bn' ? steps[activeStep].analogyBn : steps[activeStep].analogy}
              </p>
            </div>

            {/* Technical Box */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  HTTP & SERVER REALITY
                </span>
              </div>
              <h4 className="text-base font-bold text-cyan-300">
                {t("What Code Actually Runs", "প্রকৃত কোড যেভাবে কাজ করে")}
              </h4>
              <div className="text-sm text-slate-200 leading-relaxed bg-[#0b0e1b] p-3.5 rounded-lg border border-cyan-900/40 font-mono text-xs">
                <span className="font-sans font-semibold text-cyan-400 block mb-1">
                  💻 {t("Technical Execution:", "প্রযুক্তিগত বাস্তবায়ন:")}
                </span>
                {lang === 'bn' ? steps[activeStep].techBn : steps[activeStep].tech}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
export default RestaurantAnalogy;
