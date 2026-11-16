import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-json';
import { Copy, Check } from 'lucide-react';

export function CodeBlock({
  code,
  language = 'php',
  showLineNumbers = true,
  title = '',
  highlightLines = [],
  maxHeight = '480px',
  className = ''
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      Prism.highlightAll();
    } catch (e) {
      // safe fallback
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code ? code.trim().split('\n') : [];

  return (
    <div className={`relative rounded-xl border border-laboratory-750 bg-laboratory-900/90 overflow-hidden shadow-2xl ${className}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-laboratory-850/90 border-b border-laboratory-750 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
          </div>
          {title && (
            <span className="ml-2 font-mono text-xs font-semibold text-slate-300 tracking-wide">
              {title}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-laboratory-800 px-2 py-0.5 rounded border border-laboratory-700">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-slate-200 bg-laboratory-800/80 hover:bg-laboratory-750 border border-laboratory-700 rounded transition-all active:scale-95"
            title="Copy Code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div
        className="overflow-auto font-mono text-xs md:text-sm leading-relaxed p-4 scrollbar-thin"
        style={{ maxHeight }}
      >
        <div className="flex">
          {showLineNumbers && (
            <div className="flex flex-col text-slate-600 select-none pr-4 text-right border-r border-laboratory-800/80 min-w-[38px]">
              {lines.map((_, i) => (
                <span
                  key={i}
                  className={`leading-relaxed text-[11px] md:text-xs ${
                    highlightLines.includes(i + 1) ? 'text-amber-400 font-bold' : ''
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          )}
          <pre className="pl-4 flex-1 overflow-x-auto m-0 bg-transparent text-slate-200">
            <code className={`language-${language}`}>
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
