import React, { useState } from 'react';
import { 
  GitCompare, 
  Code2, 
  HelpCircle, 
  Sparkles, 
  Check, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { COMPARISON_TOPICS } from '../../data/comparisonData';
import { CodeBlock } from '../../components/common/CodeBlock';
import { Badge } from '../../components/common/Badge';

export function ComparisonSection() {
  const [activeTopicId, setActiveTopicId] = useState('variables');
  const activeTopic = COMPARISON_TOPICS.find(t => t.id === activeTopicId) || COMPARISON_TOPICS[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-laboratory-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="cyan" size="sm">The Developer Rosetta Stone</Badge>
            <h1 className="text-2xl font-bold text-white tracking-tight">JavaScript vs PHP Laboratory</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Side-by-side concept bridges designed specifically for students who already know JavaScript.
          </p>
        </div>

        <Badge variant="php" size="sm">
          10 Core Language Topics
        </Badge>
      </div>

      {/* Horizontal Topic Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
        {COMPARISON_TOPICS.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setActiveTopicId(topic.id)}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all border ${
              activeTopicId === topic.id
                ? 'bg-gradient-to-r from-php to-accent-electric text-white border-transparent shadow-glow-sm'
                : 'bg-laboratory-900/80 text-slate-400 border-laboratory-800 hover:text-white hover:bg-laboratory-850'
            }`}
          >
            {topic.title}
          </button>
        ))}
      </div>

      {/* Topic Title & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl bg-laboratory-900/90 border border-laboratory-800">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            {activeTopic.title}
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            {activeTopic.subtitle}
          </p>
        </div>
        <span className="text-[10px] font-mono font-bold text-php-accent bg-php/15 px-2.5 py-1 rounded-full border border-php/30">
          Side-by-Side Comparison
        </span>
      </div>

      {/* Side-by-Side Code Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* PHP Side */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono font-bold text-php-accent flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-php" />
              PHP Syntax (Server-Side)
            </span>
            <span className="text-[10px] font-mono text-slate-500">PHP 8.x</span>
          </div>
          <CodeBlock
            code={activeTopic.phpCode}
            language="php"
            title="PHP Code Sample"
            maxHeight="380px"
          />
        </div>

        {/* JavaScript Side */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono font-bold text-yellow-400 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              JavaScript Counterpart (Familiar)
            </span>
            <span className="text-[10px] font-mono text-slate-500">ES6+ / Node.js</span>
          </div>
          <CodeBlock
            code={activeTopic.jsCode}
            language="javascript"
            title="JavaScript Equivalent"
            maxHeight="380px"
          />
        </div>
      </div>

      {/* Deep Conceptual Differences */}
      <div className="p-5 rounded-2xl border border-laboratory-800 bg-laboratory-900/80 space-y-4 shadow-xl">
        <h3 className="font-bold text-white text-sm flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent-cyan" />
          <span>Key Differences & Mental Models</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {activeTopic.differences.map((diff, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-laboratory-950 border border-laboratory-850 space-y-1.5 text-xs text-slate-300"
            >
              <span className="text-accent-cyan font-mono font-bold text-[10px] block">
                Rule #{idx + 1}
              </span>
              <p className="leading-relaxed">
                {diff}
              </p>
            </div>
          ))}
        </div>

        {/* Classroom lecture tip */}
        <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
          <HelpCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
          <div>
            <strong className="text-amber-300 font-mono uppercase tracking-wider text-[10px] block mb-0.5">
              Classroom Lecture Tip
            </strong>
            <p className="leading-relaxed">
              {activeTopic.classroomTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
