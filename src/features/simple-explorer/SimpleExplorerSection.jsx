import React, { useState } from 'react';
import { 
  FileCode, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Info
} from 'lucide-react';
import { CLASS_ONE_DATA } from '../../data/classesData';
import { FILE_DETAILS } from '../../data/fileContents';
import { CodeBlock } from '../../components/common/CodeBlock';

export function SimpleExplorerSection({ activeClassView }) {
  const isClass1 = activeClassView === 'class1';
  const [selectedFileId, setSelectedFileId] = useState(
    isClass1 ? 'index.php' : 'app/classes/HelloWorld.php'
  );

  // Available files list based on class
  const class1Files = CLASS_ONE_DATA.files;
  const class2FileKeys = [
    'web.php',
    'app/classes/HelloWorld.php',
    'app/helpers/helpers.php',
    'views/home.php',
    'views/includes/header.php',
    'app/classes/Car.php',
    'composer.json'
  ];

  const currentClass1File = class1Files.find(f => f.path === selectedFileId) || class1Files[0];
  const currentClass2File = FILE_DETAILS[selectedFileId] || FILE_DETAILS['web.php'];

  return (
    <div className="space-y-6 max-w-5xl mx-auto py-2">
      {/* Header */}
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Visual File Guide ({isClass1 ? "Class 1: 3 Files" : "Class 2: Key Files"})
        </h2>
        <p className="text-xs text-slate-400">
          Click any file card below to understand its exact purpose in plain human English.
        </p>
      </div>

      {/* File Selector Cards */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {isClass1 ? (
          class1Files.map((file) => {
            const isSelected = selectedFileId === file.path;
            return (
              <button
                key={file.path}
                onClick={() => setSelectedFileId(file.path)}
                className={`flex-1 min-w-[200px] p-4 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {file.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    {file.badge}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-200 truncate">
                  {file.role}
                </div>
              </button>
            );
          })
        ) : (
          class2FileKeys.map((key) => {
            const file = FILE_DETAILS[key];
            if (!file) return null;
            const isSelected = selectedFileId === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedFileId(key)}
                className={`flex-1 min-w-[190px] p-3.5 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/10 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-indigo-400 truncate">
                    {file.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                    {file.badge.split(' ')[0]}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 truncate">
                  {file.role}
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* Selected File Details & Code Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Code Viewer (Col 7) */}
        <div className="lg:col-span-7 space-y-3">
          <CodeBlock
            code={isClass1 ? currentClass1File.code : currentClass2File.realCode}
            language={isClass1 ? "php" : currentClass2File.language}
            title={isClass1 ? currentClass1File.path : currentClass2File.path}
            maxHeight="440px"
          />

          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Verified Original Code:</strong> This is the exact code written in the classroom project.
            </span>
          </div>
        </div>

        {/* Right: Plain English Breakdown (Col 5) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Plain English Summary */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 shadow-xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In Plain Human English:</span>
            </span>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {isClass1 ? currentClass1File.plainEnglish : currentClass2File.whyExists}
            </p>
          </div>

          {/* Line by line notes (For Class 1) */}
          {isClass1 && currentClass1File.lineBreakdown && (
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl">
              <span className="text-xs font-mono font-bold text-slate-300">
                Line-by-Line Meaning:
              </span>
              <div className="space-y-2">
                {currentClass1File.lineBreakdown.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-1">
                    <code className="text-indigo-400 font-mono text-[11px] block">{item.text}</code>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* JavaScript Comparison */}
          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-cyan-200 space-y-1.5 shadow-xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>For JavaScript Developers:</span>
            </span>
            <p className="text-xs text-cyan-100 leading-relaxed font-mono">
              {isClass1 ? currentClass1File.jsComparison : currentClass2File.teachingNotes?.[0] || "Similar to JavaScript ES6 modules and Express route controllers."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
