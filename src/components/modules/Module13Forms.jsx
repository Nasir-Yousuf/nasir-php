import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Lock, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Key,
  Code2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';

export function Module13Forms({ onNextModule }) {
  const { lang, t } = useLanguage();
  const [formMethod, setFormMethod] = useState('POST'); // GET | POST
  const [emailInput, setEmailInput] = useState('student@niyd.edu');
  const [passInput, setPassInput] = useState('secret123');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    } catch (e) {}
  };

  return (
    <div className="space-y-12">
      {/* Module 13 Hero */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1c0e18] via-[#0d1020] to-[#121626] border border-pink-500/20 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-400/10 border border-pink-400/30 text-pink-300 font-mono text-xs font-bold">
            <Send className="w-3.5 h-3.5" />
            <span>{t("MODULE 13 · WEB FORMS & SECURITY", "মডিউল ১৩ · ওয়েব ফর্ম ও নিরাপত্তা")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t(
              "Forms & Request Handling: Processing User Input",
              "ফর্ম ও রিকোয়েস্ট হ্যান্ডলিং: ব্যবহারকারীর ইনপুট প্রসেসিং"
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "How does PHP receive inputs when someone logs in or registers? Meet $_GET and $_POST, understand why passwords must NEVER be sent over GET, and learn how htmlspecialchars() prevents Cross-Site Scripting (XSS).",
              "ওয়েবসাইটে লগইন বা রেজিস্ট্রেশন করলে পিএইচপি কীভাবে ডাটা পায়? $_GET ও $_POST এর তফাত, কেন পাসওয়ার্ড কখনো GET দিয়ে পাঠাতে হয় না এবং কীভাবে htmlspecialchars() সাইবার অ্যাটাক ঠেকায়।"
            )}
          </p>
        </div>
      </div>

      {/* 13.1 & 13.2 GET vs POST Interactive Simulator */}
      <section id="sec-13-1" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm font-mono">
            13.1
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Interactive Form Engine: GET vs POST In Action", "ইন্টারেক্টিভ ফর্ম ইঞ্জিন: GET বনাম POST লাইভ তুলনা")}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl space-y-6">
          {/* Method Selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 font-bold">Form Method:</span>
            <div className="flex bg-[#141829] p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => { setFormMethod('GET'); setSubmitted(false); }}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  formMethod === 'GET' ? 'bg-cyan-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                method="GET"
              </button>
              <button
                onClick={() => { setFormMethod('POST'); setSubmitted(false); }}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  formMethod === 'POST' ? 'bg-amber-400 text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                method="POST" (Secure)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-mono text-xs">
            {/* Live Form */}
            <form onSubmit={handleSubmit} className="p-5 rounded-xl bg-[#13162b] border border-slate-700 space-y-3 font-sans">
              <span className="text-xs font-bold text-white font-mono block">
                &lt;form action="login.php" method="{formMethod}"&gt;
              </span>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Email:</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#070912] border border-slate-700 text-white font-mono text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Password:</label>
                <input
                  type="password"
                  value={passInput}
                  onChange={(e) => setPassInput(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#070912] border border-slate-700 text-white font-mono text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all shadow-md"
              >
                Submit Form
              </button>
            </form>

            {/* HTTP Wire Inspector */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#090b16] border border-slate-800 space-y-2">
                <span className="text-cyan-400 font-bold block text-[11px] uppercase">
                  Simulated Browser Address Bar:
                </span>
                <div className="p-2.5 rounded-lg bg-[#05070e] border border-slate-800 text-[11px] truncate text-slate-300">
                  {formMethod === 'GET' 
                    ? `https://mysite.com/login.php?email=${encodeURIComponent(emailInput)}&password=${encodeURIComponent(passInput)}` 
                    : `https://mysite.com/login.php`
                  }
                </div>
                {formMethod === 'GET' && (
                  <p className="font-sans text-[11px] text-red-400 font-bold">
                    ⚠️ ALERT: Look at the URL! In GET requests, your secret password is exposed in the address bar, browser history, and server logs!
                  </p>
                )}
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-[11px] space-y-1">
                  <span className="font-bold block">PHP Server Superglobal Loaded:</span>
                  <pre className="text-slate-200">
                    {formMethod === 'GET'
                      ? `$_GET = ['email' => '${emailInput}', 'password' => '***'];`
                      : `$_POST = ['email' => '${emailInput}', 'password' => '***'];`}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 13.4 htmlspecialchars() XSS Prevention */}
      <section id="sec-13-4" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-500 text-white font-black flex items-center justify-center text-sm font-mono">
            13.4
          </span>
          <h2 className="text-xl font-bold text-white">
            {t("Sanitization: htmlspecialchars() to Prevent XSS Attacks", "স্যানিটাইজেশন: htmlspecialchars() দিয়ে হ্যাকিং প্রতিহত করা")}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f1222] border border-red-500/30 space-y-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
            <ShieldAlert className="w-4 h-4" />
            <span>Golden Security Rule: NEVER trust user input!</span>
          </div>
          <p className="font-sans text-slate-300 text-xs leading-relaxed">
            {t(
              "If a user enters a malicious script like '<script>alert(1)</script>' in a comment box and you print it directly with echo $comment, the browser will execute the hacker's script! Always wrap output in htmlspecialchars():",
              "কোনো ইউজার কমেন্ট বক্সে ক্ষতিকর স্ক্রিপ্ট লিখলে সরাসরি echo করলে ওয়েবসাইট হ্যাক হতে পারে! তাই আউটপুট দেখানোর সময় সবসময় htmlspecialchars() দিয়ে রূপান্তর করতে হবে:"
            )}
          </p>

          <pre className="p-4 rounded-xl bg-[#060810] border border-slate-800 text-emerald-400 leading-relaxed overflow-x-auto">
{`$cleanInput = htmlspecialchars($_POST['comment'], ENT_QUOTES, 'UTF-8');
echo $cleanInput;
// '<' is safely converted to '&lt;', preventing script execution!`}
          </pre>
        </div>
      </section>

      {/* Module 13 Recap & Next Button */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141828] to-[#1b1730] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("Module 13 Complete", "মডিউল ১৩ সম্পন্ন")}</span>
          </div>
          <p className="text-sm font-bold text-white">
            {t("Next: PHP vs JavaScript Comparison Laboratory (Dedicated Interactive Matrix)", "পরবর্তী: পিএইচপি বনাম জাভাস্ক্রিপ্ট তুলনা ল্যাবরেটরি")}
          </p>
        </div>

        {onNextModule && (
          <button
            onClick={onNextModule}
            className="px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t("Proceed to Module 14 (Comparison Lab)", "মডিউল ১৪-এ যান")}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Module13Forms;
