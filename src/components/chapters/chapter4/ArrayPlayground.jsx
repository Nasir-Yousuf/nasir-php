import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Play, 
  RotateCcw, 
  Sparkles, 
  Code2, 
  Table, 
  Brackets,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../../contexts/LanguageContext';

export function ArrayPlayground() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('php'); // 'php' | 'js'
  const [items, setItems] = useState(["Apple", "Mango", "Banana", "Orange"]);
  const [newItem, setNewItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [outputMode, setOutputMode] = useState('print_r'); // print_r | var_dump | console_table | console_log
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(-1);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    setItems([...items, newItem.trim()]);
    setNewItem('');
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
    if (editingIndex === index) setEditingIndex(null);
  };

  const handleStartEdit = (index) => {
    setEditingIndex(index);
    setEditValue(items[index]);
  };

  const handleSaveEdit = () => {
    if (editingIndex === null || !editValue.trim()) return;
    const updated = [...items];
    updated[editingIndex] = editValue.trim();
    setItems(updated);
    setEditingIndex(null);
  };

  const handleLoopAll = () => {
    let idx = 0;
    setActiveHighlightIndex(0);
    const interval = setInterval(() => {
      idx++;
      if (idx < items.length) {
        setActiveHighlightIndex(idx);
      } else {
        clearInterval(interval);
        setActiveHighlightIndex(-1);
        try {
          confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
        } catch (e) {}
      }
    }, 600);
  };

  const handleReset = () => {
    setItems(["Apple", "Mango", "Banana", "Orange"]);
    setEditingIndex(null);
    setActiveHighlightIndex(-1);
  };

  // Generate outputs
  const getPhpPrintR = () => {
    let out = "Array\n(\n";
    items.forEach((item, idx) => {
      out += `    [${idx}] => ${item}\n`;
    });
    out += ")";
    return out;
  };

  const getPhpVarDump = () => {
    let out = `array(${items.length}) {\n`;
    items.forEach((item, idx) => {
      out += `  [${idx}]=>\n  string(${item.length}) "${item}"\n`;
    });
    out += "}";
    return out;
  };

  const getJsConsoleLog = () => {
    return JSON.stringify(items, null, 2);
  };

  const getJsConsoleTable = () => {
    let out = "┌─────────┬──────────┐\n│ (index) │  Values  │\n├─────────┼──────────┤\n";
    items.forEach((item, idx) => {
      out += `│    ${idx}    │ '${item.padEnd(8)}' │\n`;
    });
    out += "└─────────┴──────────┘";
    return out;
  };

  return (
    <div className="space-y-6 p-6 rounded-2xl bg-[#0c0f1c] border border-slate-800 shadow-2xl">
      {/* Playground Header & Language Tab Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold text-[#FACC15] uppercase tracking-wider block">
            {t("Interactive Array Laboratory", "ইন্টারেক্টিভ অ্যারে ল্যাব")}
          </span>
          <h4 className="text-lg font-bold text-white">
            {t("Live Manipulator: Add, Edit, Delete, Loop & Inspect", "লাইভ পরীক্ষা: যোগ, এডিট, ডিলিট, লুপ ও ইনস্পেক্ট")}
          </h4>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-2 bg-[#15192c] p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => setActiveTab('php')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'php'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>PHP Simulation</span>
          </button>

          <button
            onClick={() => setActiveTab('js')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'js'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>JavaScript</span>
          </button>
        </div>
      </div>

      {/* Visual Array Slot Elements */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{t("Shared Live Dataset (Both languages operate on this):", "শেয়ার্ড ডাটা (উভয় ভাষার জন্যই একই):")}</span>
          <span className="font-mono text-amber-300">
            {activeTab === 'php' ? `count($items) = ${items.length}` : `items.length = ${items.length}`}
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {items.map((item, idx) => {
            const isHighlighted = activeHighlightIndex === idx;
            const isBeingEdited = editingIndex === idx;

            return (
              <motion.div
                key={idx}
                animate={{
                  scale: isHighlighted ? 1.08 : 1,
                  borderColor: isHighlighted ? '#FACC15' : '#334155'
                }}
                className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${
                  isHighlighted 
                    ? 'bg-yellow-950/40 ring-2 ring-yellow-400/50 shadow-lg' 
                    : 'bg-[#141829]'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono font-bold flex items-center justify-center">
                  {idx}
                </span>

                {isBeingEdited ? (
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="px-2 py-1 rounded bg-[#0a0d18] border border-cyan-400 text-xs text-white font-mono w-24 focus:outline-none"
                    />
                    <button
                      onClick={handleSaveEdit}
                      className="p-1 rounded bg-emerald-500 text-slate-950"
                      title="Save"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-white font-mono">
                    "{item}"
                  </span>
                )}

                <div className="flex items-center gap-1 text-slate-400">
                  <button
                    onClick={() => handleStartEdit(idx)}
                    className="p-1 hover:text-cyan-300 transition-colors"
                    title="Edit"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleRemoveItem(idx)}
                    className="p-1 hover:text-red-400 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Action Controls: Add item, Loop, Reset */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#12162a] border border-slate-800">
        <form onSubmit={handleAddItem} className="flex items-center gap-2">
          <input
            type="text"
            placeholder={t("New element (e.g. Grape)...", "নতুন উপাদান...")}
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="px-3 py-2 rounded-xl bg-[#090b14] border border-slate-700 text-xs text-white font-mono focus:border-yellow-400 focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FACC15] hover:bg-yellow-300 text-slate-950 font-black text-xs transition-all"
          >
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
            <span>{t("Add Item", "যোগ করুন")}</span>
          </button>
        </form>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLoopAll}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-md shadow-emerald-500/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{t("Simulate Loop", "লুপ চালান")}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-[#191e36] hover:bg-[#23294a] text-slate-300 border border-slate-700 text-xs font-mono"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Code & Debug Output Terminal */}
      <div className="p-4 rounded-xl bg-[#070912] border border-slate-800 font-mono text-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-amber-400" />
            <span className="text-white font-bold">
              {activeTab === 'php' ? "PHP Output Terminal (Simulated Server)" : "JavaScript Console (Browser)"}
            </span>
          </div>

          {/* Output Format Switcher */}
          <div className="flex items-center gap-1.5 text-[11px]">
            {activeTab === 'php' ? (
              <>
                <button
                  onClick={() => setOutputMode('print_r')}
                  className={`px-2 py-0.5 rounded ${outputMode === 'print_r' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400'}`}
                >
                  print_r()
                </button>
                <button
                  onClick={() => setOutputMode('var_dump')}
                  className={`px-2 py-0.5 rounded ${outputMode === 'var_dump' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400'}`}
                >
                  var_dump()
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setOutputMode('console_table')}
                  className={`px-2 py-0.5 rounded ${outputMode === 'console_table' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
                >
                  console.table()
                </button>
                <button
                  onClick={() => setOutputMode('console_log')}
                  className={`px-2 py-0.5 rounded ${outputMode === 'console_log' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
                >
                  console.log()
                </button>
              </>
            )}
          </div>
        </div>

        {/* Live Output String */}
        <pre className="text-emerald-400 overflow-x-auto text-xs leading-relaxed">
          {activeTab === 'php'
            ? outputMode === 'var_dump'
              ? getPhpVarDump()
              : getPhpPrintR()
            : outputMode === 'console_log'
              ? getJsConsoleLog()
              : getJsConsoleTable()
          }
        </pre>
      </div>
    </div>
  );
}
export default ArrayPlayground;
