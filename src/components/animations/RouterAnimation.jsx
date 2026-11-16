import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe, ArrowRight, CornerDownRight, CheckCircle2 } from 'lucide-react';

export function RouterAnimation() {
  const { t } = useLanguage();
  const [selectedRoute, setSelectedRoute] = useState('home');

  const routes = [
    { page: 'home', method: '$helloWorld->index()', view: 'views/home.php', title: 'Home Page' },
    { page: 'about', method: '$helloWorld->about()', view: 'views/about.php', title: 'About Us' },
    { page: 'contact', method: '$helloWorld->contact()', view: 'views/contact.php', title: 'Contact Us' },
    { page: 'login', method: '$helloWorld->login()', view: 'views/login.php', title: 'User Login' },
    { page: '', method: '$helloWorld->index() (Default)', view: 'views/home.php', title: 'Fallback Home' }
  ];

  const currentRoute = routes.find(r => r.page === selectedRoute) || routes[0];

  return (
    <AnimationCanvas
      title="How web.php Inspects the URL & Dispatches to the Controller"
      titleBn="web.php যেভাবে URL পড়ে কন্ট্রোলারের নির্দিষ্ট মেথড চালায়"
      subtitle={`URL: ?page=${selectedRoute || '(none)'} → Matches if condition → Calls ${currentRoute.method} → Renders ${currentRoute.view}`}
      subtitleBn={`URL: ?page=${selectedRoute || '(কিছু নেই)'} → শর্ত মিললো → কল করলো ${currentRoute.method} → রেন্ডার করলো ${currentRoute.view}`}
      badge="Front Controller Routing Engine"
      badgeBn="ফ্রন্ট কন্ট্রোলার রাউটিং ইঞ্জিন"
    >
      <div className="w-full max-w-2xl flex flex-col items-center gap-4 py-1">
        {/* Mock Browser URL Bar */}
        <div className="w-full p-3 rounded-2xl bg-[#141828] border border-slate-800 shadow-lg space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>Browser Address Bar</span>
            </span>
            <span className="text-amber-400 font-bold">Click to test routes:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-[#0a0d16] p-2 rounded-xl border border-slate-800/80 font-mono text-xs">
            <span className="text-slate-500">http://localhost/web.php?page=</span>
            <div className="flex flex-wrap gap-1">
              {['home', 'about', 'contact', 'login', ''].map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRoute(p)}
                  className={`px-2.5 py-0.5 rounded text-xs font-bold transition-all ${
                    selectedRoute === p
                      ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                      : 'bg-[#181d30] text-slate-300 hover:bg-[#222a44]'
                  }`}
                >
                  {p ? p : '<none> (Default)'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dispatch Circuit */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
          {/* Step 1: Read Query */}
          <div className="p-3.5 rounded-xl bg-[#151928] border border-slate-800 space-y-1.5 text-center shadow-md">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              1. Read $_GET['page']
            </span>
            <div className="p-2 rounded-lg bg-[#0a0d16] font-mono text-xs text-amber-300 border border-amber-400/30">
              $_GET['page'] = "{selectedRoute}"
            </div>
            <span className="text-[10px] text-slate-400">
              {selectedRoute ? t("Query param detected", "প্যারামিটার পাওয়া গেছে") : t("Empty -> default index()", "খালি -> ডিফল্ট index()")}
            </span>
          </div>

          {/* Step 2: Controller Dispatch */}
          <div className="p-3.5 rounded-xl bg-[#151928] border border-slate-800 space-y-1.5 text-center shadow-md">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              2. Controller Method
            </span>
            <motion.div
              key={currentRoute.method}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-2 rounded-lg bg-[#0a0d16] font-mono text-xs text-pink-300 border border-pink-500/30 font-bold"
            >
              {currentRoute.method}
            </motion.div>
            <span className="text-[10px] text-slate-400">
              {t("Invokes method on HelloWorld", "HelloWorld ক্লাসের মেথড চালায়")}
            </span>
          </div>

          {/* Step 3: Target View File */}
          <div className="p-3.5 rounded-xl bg-[#151928] border border-slate-800 space-y-1.5 text-center shadow-md">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              3. View Rendered
            </span>
            <motion.div
              key={currentRoute.view}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-2 rounded-lg bg-[#0a0d16] font-mono text-xs text-emerald-300 border border-emerald-500/30 font-bold"
            >
              {currentRoute.view}
            </motion.div>
            <span className="text-[10px] text-slate-400">
              {t("Template sent to user", "টেমপ্লেট ইউজারের কাছে পাঠানো হলো")}
            </span>
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
