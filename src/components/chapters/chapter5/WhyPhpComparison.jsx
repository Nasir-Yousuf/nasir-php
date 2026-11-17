import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Cpu, 
  Zap, 
  DollarSign, 
  Check, 
  X, 
  Scale, 
  Layers, 
  Globe, 
  FileCode, 
  FolderSync,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function WhyPhpComparison() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all'); // all | php | nextjs

  const comparisonRows = [
    {
      category: "Main Role",
      categoryBn: "মূল ভূমিকা",
      php: "Server-side language & page renderer",
      phpBn: "সার্ভার-সাইড ব্যাকএন্ড ভাষা ও টেমপ্লেট রেন্ডারার",
      nextjs: "Full-stack React framework (SSR/SSG/API)",
      nextjsBn: "রিঅ্যাক্ট ভিত্তিক ফুল-স্ট্যাক ফ্রেমওয়ার্ক",
      highlight: "neutral"
    },
    {
      category: "Programming Language",
      categoryBn: "প্রোগ্রামিং ভাষা",
      php: "PHP (C-like procedural & OOP)",
      phpBn: "PHP (সি-এর মতো সহজ ব্যাকরণ ও OOP)",
      nextjs: "JavaScript / TypeScript",
      nextjsBn: "জাভাস্ক্রিপ্ট / টাইপস্ক্রিপ্ট",
      highlight: "neutral"
    },
    {
      category: "Frontend Layer",
      categoryBn: "ফ্রন্টএন্ড কাঠামো",
      php: "Direct HTML/CSS, Blade, Twig, or Vanilla JS",
      phpBn: "সরাসরি HTML/CSS, টেমপ্লেট ইঞ্জিন বা সাধারণ JS",
      nextjs: "React component tree & Virtual DOM",
      nextjsBn: "রিঅ্যাক্ট কম্পোনেন্ট ও ভার্চুয়াল DOM",
      highlight: "neutral"
    },
    {
      category: "Backend Runtime",
      categoryBn: "ব্যাকএন্ড রানটাইম",
      php: "PHP-FPM process spawned on request",
      phpBn: "রিকোয়েস্টে চালু হওয়া PHP-FPM প্রসেস",
      nextjs: "Long-running Node.js server or V8 Edge isolate",
      nextjsBn: "স্থায়ী Node.js প্রসেস বা এজ আইসোলেট",
      highlight: "neutral"
    },
    {
      category: "Shared Hosting ($2-5/mo)",
      categoryBn: "শেয়ার্ড হোস্টিং সাপোর্ট ($২-৫/মাস)",
      php: "Supported natively on almost 100% of hosts (cPanel, Apache)",
      phpBn: "বিশ্বের প্রায় সব হোস্টিং কোম্পানিতে সরাসরি সাপোর্টেড (cPanel)",
      nextjs: "Difficult or impossible on basic shared cPanel hosts",
      nextjsBn: "সাধারণ সস্তা সিপ্যানেল হোস্টিংয়ে সরাসরি চালানো কঠিন",
      highlight: "php"
    },
    {
      category: "Deployment Simplicity",
      categoryBn: "ডিপ্লয়মেন্ট ও প্রকাশ",
      php: "Drag-and-drop FTP or Git pull (no build step)",
      phpBn: "সরাসরি ফাইল আপলোড করলেই সাইট লাইভ (বিল্ড করতে হয় না)",
      nextjs: "Requires npm run build and continuous Node runner",
      nextjsBn: "বিল্ড স্টেপ এবং নোড সার্ভার রানার প্রয়োজন",
      highlight: "php"
    },
    {
      category: "Complex UI & State",
      categoryBn: "জটিল ইন্টারফেস ও রিয়্যাক্টিভ স্টেট",
      php: "Requires manual frontend JS / jQuery / React widgets",
      phpBn: "ম্যানুয়ালি জাভাস্ক্রিপ্ট কোড লিখে DOM হ্যান্ডেল করতে হয়",
      nextjs: "Unmatched developer experience for interactive React apps",
      nextjsBn: "ইন্টারেক্টিভ ওয়েব অ্যাপের জন্য চমৎকার রিঅ্যাক্ট ইকোসিস্টেম",
      highlight: "nextjs"
    },
    {
      category: "Best Suited For",
      categoryBn: "কোনটির জন্য সবচেয়ে উপযুক্ত",
      php: "Blogs, CMS (WordPress), E-commerce (WooCommerce, Magento), MVC portals",
      phpBn: "ব্লগ, ইকমার্স, সিএমএস, শিক্ষাপ্রতিষ্ঠান ও ব্যবসা পোর্টাল",
      nextjs: "SaaS dashboards, real-time reactive platforms, high-interactivity apps",
      nextjsBn: "আধুনিক SaaS প্ল্যাটফর্ম ও হাইপার-ইন্টারেক্টিভ ড্যাশবোর্ড",
      highlight: "neutral"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Honest Opening Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#131628] to-purple-950/40 border border-slate-800">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-1 inline-block">
          {t("REALISTIC ARCHITECTURAL COMPARISON", "বাস্তবমুখী আর্কিটেকচার তুলনা")}
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          {t("If We Have Node.js and Next.js, Why Would Anyone Choose PHP?", "আমাদের যখন Node.js ও Next.js আছে, তবুও মানুষ কেন PHP বেছে নেয়?")}
        </h3>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          {t(
            "Choosing software architecture is never about internet fanboyism or language tribalism. Every technology solves specific business, cost, and hosting constraints. Let's examine the objective engineering facts.",
            "প্রযুক্তি নির্বাচন কখনোই অন্ধ পক্ষপাতের বিষয় নয়। প্রতিটি টুল তৈরি হয়েছে নির্দিষ্ট বাজেট, হোস্টিং পরিকাঠামো ও প্রয়োজনীয়তার ওপর ভিত্তি করে। আসুন বাস্তবসম্মত ইঞ্জিনিয়ারিং কারণগুলো দেখি।"
          )}
        </p>
      </div>

      {/* Visual Architecture Comparison: Traditional PHP vs Next.js */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traditional PHP Diagram */}
        <div className="p-5 rounded-2xl bg-[#12162a] border border-amber-500/30 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold text-white text-sm">
                Traditional PHP Web Architecture
              </h4>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold">
              PHP + Apache / Nginx
            </span>
          </div>

          <div className="space-y-2 font-mono text-xs text-center">
            <div className="p-2.5 rounded-lg bg-[#0a0d18] border border-slate-800 text-cyan-300">
              Browser Client
            </div>
            <div className="text-slate-500 text-[11px]">↓ HTTP GET /page.php</div>
            <div className="p-2.5 rounded-lg bg-[#0a0d18] border border-slate-800 text-blue-300">
              Web Server (Apache / Nginx)
            </div>
            <div className="text-slate-500 text-[11px]">↓ Spawns worker process on demand</div>
            <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/40 text-amber-300 font-bold">
              PHP Runtime (PHP-FPM)
              <span className="block font-sans text-[11px] font-normal text-slate-300 mt-1">
                Executes code, queries DB, renders HTML, and dies immediately after request. Zero idle memory!
              </span>
            </div>
            <div className="text-slate-500 text-[11px]">↓ PDO SQL Socket</div>
            <div className="p-2.5 rounded-lg bg-[#0a0d18] border border-slate-800 text-purple-300">
              MySQL Database
            </div>
          </div>
        </div>

        {/* Next.js Full-Stack Diagram */}
        <div className="p-5 rounded-2xl bg-[#12162a] border border-cyan-500/30 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <h4 className="font-bold text-white text-sm">
                Next.js Full-Stack Architecture
              </h4>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-bold">
              Node.js + React
            </span>
          </div>

          <div className="space-y-2 font-mono text-xs text-center">
            <div className="p-2.5 rounded-lg bg-[#0a0d18] border border-slate-800 text-cyan-300">
              Browser (React Client Hydration)
            </div>
            <div className="text-slate-500 text-[11px]">↓ HTTP / RSC Streaming</div>
            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/40 text-cyan-300 font-bold">
              Next.js Node.js Server Process
              <span className="block font-sans text-[11px] font-normal text-slate-300 mt-1">
                Persistent Node.js runtime process kept alive 24/7 in server RAM, rendering React Server Components.
              </span>
            </div>
            <div className="text-slate-500 text-[11px]">↓ Prisma / ORM / Server Actions</div>
            <div className="p-2.5 rounded-lg bg-[#0a0d18] border border-slate-800 text-purple-300">
              PostgreSQL / Cloud Database
            </div>
          </div>
        </div>
      </div>

      {/* Hosting & Server Resource Realities */}
      <div className="p-6 rounded-2xl bg-[#101426] border border-slate-800 space-y-4">
        <h4 className="text-base font-bold text-white flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-emerald-400" />
          {t("Hosting & Server Resource Realities (Shared Hosting vs VPS)", "হোস্টিং ও সার্ভার খরচের বাস্তব চিত্র")}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-300">
          <div className="p-4 rounded-xl bg-[#090c17] border border-amber-900/40 space-y-2">
            <span className="font-bold text-amber-300 font-mono block text-sm">
              🐘 Why PHP Dominates Budget Hosting
            </span>
            <p>
              Traditional PHP scripts are stateless: a request arrives, PHP wakes up, executes in 15 milliseconds, produces HTML, and the process terminates.
            </p>
            <p>
              Because it does not require a permanent background server process, web hosting companies can pack <strong>hundreds of small PHP websites on a single shared Linux server</strong>. This is why you can buy PHP hosting for just $2/month on cPanel!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#090c17] border border-cyan-900/40 space-y-2">
            <span className="font-bold text-cyan-300 font-mono block text-sm">
              ⚛️ Why Dynamic Next.js Requires VPS / Serverless
            </span>
            <p>
              Dynamic Next.js apps require an active Node.js server running continuously in background memory listening to network ports, or dedicated serverless edge containers (Vercel, AWS Lambda).
            </p>
            <p>
              While static Next.js sites (SSG) can be hosted for free on CDNs, full dynamic SSR with server-side database connections requires continuous memory and specialized deployment pipelines.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Comprehensive Comparison Matrix */}
      <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
              {t("Head-to-Head Comparison Matrix", "মুখোমুখি তুলনা ম্যাট্রিক্স")}
            </span>
            <h4 className="text-lg font-bold text-white">
              {t("Traditional PHP vs Modern Next.js", "ট্রেডিশনাল পিএইচপি বনাম আধুনিক নেক্সট.জেএস")}
            </h4>
          </div>
          <span className="text-xs text-slate-400 font-mono">8 Evaluation Criteria</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#090c17]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#141829] text-slate-300 border-b border-slate-800 font-mono">
              <tr>
                <th className="py-3 px-4 text-slate-400">Category</th>
                <th className="py-3 px-4 text-amber-400">Traditional PHP</th>
                <th className="py-3 px-4 text-cyan-400">Next.js (React Framework)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4 font-bold text-white font-mono">
                    {lang === 'bn' ? row.categoryBn : row.category}
                  </td>
                  <td className={`py-3 px-4 ${row.highlight === 'php' ? 'text-amber-300 font-bold bg-amber-950/10' : 'text-slate-300'}`}>
                    {lang === 'bn' ? row.phpBn : row.php}
                  </td>
                  <td className={`py-3 px-4 ${row.highlight === 'nextjs' ? 'text-cyan-300 font-bold bg-cyan-950/10' : 'text-slate-300'}`}>
                    {lang === 'bn' ? row.nextjsBn : row.nextjs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Philosophical Conclusion Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/20 via-[#141829] to-cyan-950/20 border border-slate-700 space-y-2">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <Lightbulb className="w-5 h-5" />
          <span>{t("The Professional Engineering Rule", "প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ারিংয়ের সুবর্ণ নীতি")}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
          {t(
            "“Choosing a technology is never about deciding which language is superior. It is about selecting the right tool for the application's requirements, budget, hosting environment, and development team.”",
            "“প্রযুক্তি নির্বাচন মানে কোনো ভাষা অন্য ভাষার চেয়ে শ্রেষ্ঠ তা প্রমাণ করা নয়। বরং ক্লায়েন্টের বাজেট, সার্ভারের খরচ, দলগত দক্ষতা এবং অ্যাপ্লিকেশনের প্রয়োজনের সাথে সবচেয়ে সামঞ্জস্যপূর্ণ সঠিক হাতিয়ারটি বেছে নেওয়াই আসল বুদ্ধিমানের কাজ।”"
          )}
        </p>
      </div>
    </div>
  );
}
export default WhyPhpComparison;
