import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Terminal, 
  Filter, 
  Check, 
  X, 
  Sparkles, 
  Database,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../../contexts/LanguageContext';

export function SqlSimulator() {
  const { lang, t } = useLanguage();
  const [selectedQuery, setSelectedQuery] = useState('all'); // 'all' | 'filtered'
  const [isRunning, setIsRunning] = useState(false);
  const [showResult, setShowResult] = useState(true);

  const initialRows = [
    { id: 1, name: "Nasir", age: 22, department: "English", match: true },
    { id: 2, name: "Rahim", age: 23, department: "CSE", match: true },
    { id: 3, name: "Karim", age: 21, department: "Business", match: false }
  ];

  const handleRunQuery = (queryType) => {
    setSelectedQuery(queryType);
    setIsRunning(true);
    setShowResult(false);

    setTimeout(() => {
      setIsRunning(false);
      setShowResult(true);
      try {
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
      } catch (e) {}
    }, 600);
  };

  return (
    <div className="space-y-6 p-6 rounded-2xl bg-[#0d101f] border border-slate-800 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
            {t("Interactive SQL Engine", "ইন্টারেক্টিভ এসকিউএল ইঞ্জিন")}
          </span>
          <h4 className="text-lg font-bold text-white">
            {t("Querying the Database: How SQL Filters Data", "ডাটাবেজে কুয়েরি চালানো: SQL কীভাবে ডাটা ফিল্টার করে")}
          </h4>
        </div>

        {/* Query Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleRunQuery('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              selectedQuery === 'all'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                : 'bg-[#15192c] text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>SELECT * FROM students;</span>
          </button>

          <button
            onClick={() => handleRunQuery('filtered')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              selectedQuery === 'filtered'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 font-black'
                : 'bg-[#15192c] text-slate-400 hover:text-white'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>WHERE age &gt; 21;</span>
          </button>
        </div>
      </div>

      {/* Query Code Box */}
      <div className="p-4 rounded-xl bg-[#080912] border border-slate-800 font-mono text-xs">
        <div className="text-slate-500 mb-1">// SQL Terminal sent by PHP PDO Driver:</div>
        <div className="text-purple-300 font-bold text-sm">
          {selectedQuery === 'all' ? (
            <span>SELECT * FROM <span className="text-cyan-400">students</span>;</span>
          ) : (
            <span>
              SELECT <span className="text-emerald-400">name</span>, <span className="text-emerald-400">age</span> FROM <span className="text-cyan-400">students</span> <span className="text-amber-400 font-black">WHERE</span> age &gt; 21;
            </span>
          )}
        </div>
      </div>

      {/* Disk Scan Evaluation Stage */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{t("Storage Engine Row Inspection:", "হার্ডডিস্কে প্রতিটি সারির শর্ত যাচাই:")}</span>
          <span className="font-mono text-cyan-400">Status: {isRunning ? "Scanning rows..." : "Complete"}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {initialRows.map((r) => {
            const isMatch = selectedQuery === 'all' || r.age > 21;
            return (
              <motion.div
                key={r.id}
                animate={{
                  scale: isRunning ? [1, 1.02, 1] : 1,
                  opacity: !showResult ? 0.6 : isMatch ? 1 : 0.35
                }}
                className={`p-4 rounded-xl border transition-all ${
                  isMatch 
                    ? 'border-emerald-500/50 bg-emerald-950/20' 
                    : 'border-red-500/30 bg-red-950/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-white">Row #{r.id} ({r.name})</span>
                  {selectedQuery === 'filtered' && (
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isMatch ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {r.age} &gt; 21: {isMatch ? 'TRUE' : 'FALSE'}
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono text-slate-300 space-y-1">
                  <div>Name: <span className="text-cyan-300">{r.name}</span></div>
                  <div>Age: <span className="text-emerald-300">{r.age}</span></div>
                  {selectedQuery === 'all' && (
                    <div>Dept: <span className="text-purple-300">{r.department}</span></div>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] flex items-center gap-1.5 font-bold">
                  {isMatch ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      {t("Included in Result Set", "রেজাল্ট সেটে যুক্ত")}
                    </span>
                  ) : (
                    <span className="text-red-400/80 flex items-center gap-1">
                      <X className="w-3.5 h-3.5" />
                      {t("Excluded (Filtered Out)", "বাদ দেওয়া হয়েছে")}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Final Result Set Box */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-[#090b14] border border-purple-900/50 space-y-2 text-xs font-mono"
        >
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span className="text-purple-400 font-bold flex items-center gap-1.5">
              <Database className="w-4 h-4" />
              <span>Result Set Returned to PHP Driver (PDO)</span>
            </span>
            <span className="text-emerald-400">
              {selectedQuery === 'all' ? "3 rows returned" : "2 rows returned (Nasir & Rahim)"}
            </span>
          </div>

          <pre className="text-slate-300 overflow-x-auto text-[11px] pt-1">
            {selectedQuery === 'all' 
              ? JSON.stringify(initialRows.map(({ id, name, age, department }) => ({ id, name, age, department })), null, 2)
              : JSON.stringify(initialRows.filter(r => r.age > 21).map(({ name, age }) => ({ name, age })), null, 2)
            }
          </pre>
        </motion.div>
      )}
    </div>
  );
}
export default SqlSimulator;
