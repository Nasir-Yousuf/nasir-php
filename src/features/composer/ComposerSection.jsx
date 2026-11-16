import React, { useState } from 'react';
import { 
  Package, 
  FileJson, 
  FolderTree, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Cpu, 
  Sparkles,
  Terminal,
  FileCode
} from 'lucide-react';
import { CodeBlock } from '../../components/common/CodeBlock';
import { Badge } from '../../components/common/Badge';

export function ComposerSection({ onSelectFile }) {
  const [testClassName, setTestClassName] = useState('App\\classes\\HelloWorld');
  const [activeTab, setActiveTab] = useState('psr4'); // 'psr4' | 'files' | 'manual_vs_auto'

  // Dynamic PSR-4 resolver simulator
  const resolvePsr4 = (fqcn) => {
    const trimmed = fqcn.trim();
    if (trimmed.startsWith('App\\')) {
      const rest = trimmed.slice(4); // Remove 'App\'
      const parts = rest.split('\\');
      const fileName = parts.pop();
      const subDir = parts.join('/');
      const resolvedPath = `app/${subDir ? subDir + '/' : ''}${fileName}.php`;
      const isKnown = ['app/classes/HelloWorld.php', 'app/classes/Car.php', 'app/classes/NewClass.php'].includes(resolvedPath);
      return {
        valid: true,
        prefix: 'App\\',
        mappedDir: 'app/',
        relativePath: `${subDir ? subDir + '/' : ''}${fileName}.php`,
        fullPath: resolvedPath,
        existsOnDisk: isKnown
      };
    }
    return {
      valid: false,
      reason: "Class does not match namespace prefix 'App\\'. Composer will check other autoloaders or throw Error: Class not found."
    };
  };

  const resolutionResult = resolvePsr4(testClassName);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-laboratory-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="warning" size="sm">Dependency Management & PSR-4</Badge>
            <h1 className="text-2xl font-bold text-white tracking-tight">Composer & Autoloading Engine</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            How Composer's <code className="text-amber-400 font-mono">vendor/autoload.php</code> completely eliminates manual require statements.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-laboratory-900/90 p-1.5 rounded-2xl border border-laboratory-800">
          <button
            onClick={() => setActiveTab('psr4')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              activeTab === 'psr4'
                ? 'bg-amber-500 text-laboratory-950 font-bold shadow-glow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
            }`}
          >
            PSR-4 Resolver Lab
          </button>
          <button
            onClick={() => setActiveTab('files')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              activeTab === 'files'
                ? 'bg-amber-500 text-laboratory-950 font-bold shadow-glow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
            }`}
          >
            "files" vs "psr-4"
          </button>
          <button
            onClick={() => setActiveTab('manual_vs_auto')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              activeTab === 'manual_vs_auto'
                ? 'bg-amber-500 text-laboratory-950 font-bold shadow-glow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
            }`}
          >
            Manual vs Autoloaded
          </button>
        </div>
      </div>

      {/* The 5 Key Composer Files Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
            <FileJson className="w-4 h-4" />
            <span>composer.json</span>
          </div>
          <p className="text-xs text-slate-300">
            The project manifest. Defines <code className="text-php-accent font-mono">"App\\": "app/"</code> and lists helper files. Like package.json in npm.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
            <FileJson className="w-4 h-4" />
            <span>composer.lock</span>
          </div>
          <p className="text-xs text-slate-300">
            Locks exact dependency versions and commit hashes for reproducible builds. Like package-lock.json in npm.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400">
            <Package className="w-4 h-4" />
            <span>vendor/</span>
          </div>
          <p className="text-xs text-slate-300">
            Contains all downloaded packages and the autoloader. Equivalent to <code className="text-cyan-400 font-mono">node_modules/</code> in JS. Never edit directly.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
            <FileCode className="w-4 h-4" />
            <span>vendor/autoload.php</span>
          </div>
          <p className="text-xs text-slate-300">
            The single bootstrap file required by index.php and web.php. Boots the entire autoloading machinery.
          </p>
        </div>
      </div>

      {/* TAB 1: Interactive PSR-4 Path Resolver */}
      {activeTab === 'psr4' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-laboratory-800 bg-laboratory-950 p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-laboratory-850 pb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Interactive Simulator
                </span>
                <h3 className="font-bold text-white text-base">
                  Live PSR-4 Class Name to File Path Resolver
                </h3>
              </div>
              <Badge variant="warning" size="xs">
                spl_autoload_register
              </Badge>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              When PHP executes <code className="text-amber-300 font-mono">new App\classes\HelloWorld()</code>, it hands that class string to Composer. 
              Watch how Composer transforms the Fully Qualified Class Name into an exact file path on your hard drive:
            </p>

            {/* Test input field */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 block">
                Type or select a Fully Qualified Class Name (FQCN):
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={testClassName}
                  onChange={(e) => setTestClassName(e.target.value)}
                  className="flex-1 bg-laboratory-900 border border-laboratory-750 rounded-xl px-4 py-2 font-mono text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                />
                <div className="flex gap-1.5 flex-wrap">
                  {['App\\classes\\HelloWorld', 'App\\classes\\Car', 'App\\classes\\NewClass'].map(preset => (
                    <button
                      key={preset}
                      onClick={() => setTestClassName(preset)}
                      className="px-2.5 py-1 rounded-lg bg-laboratory-850 hover:bg-laboratory-800 text-[11px] font-mono text-slate-300 border border-laboratory-750 transition-colors"
                    >
                      {preset.split('\\').pop()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step-by-step resolution visualization */}
            {resolutionResult.valid ? (
              <div className="p-4 rounded-xl bg-laboratory-900/90 border border-laboratory-800 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>PSR-4 Match Succeeded:</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-laboratory-950 p-3 rounded-lg border border-laboratory-850">
                    <span className="text-[10px] text-slate-500 block">1. Namespace Prefix</span>
                    <span className="text-purple-400 font-bold">{resolutionResult.prefix}</span>
                  </div>
                  <div className="bg-laboratory-950 p-3 rounded-lg border border-laboratory-850">
                    <span className="text-[10px] text-slate-500 block">2. Mapped Directory</span>
                    <span className="text-cyan-400 font-bold">{resolutionResult.mappedDir}</span>
                  </div>
                  <div className="bg-laboratory-950 p-3 rounded-lg border border-laboratory-850">
                    <span className="text-[10px] text-slate-500 block">3. Relative Path</span>
                    <span className="text-amber-400 font-bold">{resolutionResult.relativePath}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-laboratory-950 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block">4. Computed Filesystem Path:</span>
                    <span className="text-sm font-bold text-white">{resolutionResult.fullPath}</span>
                  </div>
                  <Badge variant={resolutionResult.existsOnDisk ? "verified" : "warning"} size="sm">
                    {resolutionResult.existsOnDisk ? "Verified on Disk" : "Hypothetical Path"}
                  </Badge>
                </div>

                <div className="text-[11px] text-slate-400 pt-1">
                  Composer calls: <code className="text-emerald-400">require_once __DIR__ . '/../../{resolutionResult.fullPath}';</code>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-300 text-xs font-mono">
                {resolutionResult.reason}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: Why helpers.php is in 'files' instead of 'psr-4' */}
      {activeTab === 'files' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-4">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              The Architectural Distinction: "psr-4" vs "files"
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              In <code className="text-php-accent font-mono">composer.json</code>, notice that <code className="text-purple-400 font-mono">app/</code> is in <code className="text-amber-400 font-mono">psr-4</code>, but <code className="text-emerald-400 font-mono">app/helpers/helpers.php</code> is listed separately under <code className="text-amber-400 font-mono">files</code>. Why?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-laboratory-950 border border-laboratory-800 space-y-2">
                <span className="text-xs font-mono font-bold text-purple-400 block">
                  1. PSR-4 Autoloading (Classes Only)
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  PHP's internal engine (<code className="text-slate-400 font-mono">spl_autoload_register</code>) is triggered ONLY when you attempt to instantiate or reference a <strong>Class</strong> that is not yet in memory.
                </p>
                <div className="text-[11px] font-mono text-purple-300 bg-purple-950/30 p-2 rounded border border-purple-500/20">
                  Trigger: $car = new Car();
                </div>
              </div>

              <div className="p-4 rounded-xl bg-laboratory-950 border border-laboratory-800 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400 block">
                  2. Files Autoloading (Procedural Functions)
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  PHP has <strong>NO autoloader for standalone procedural functions</strong> like <code className="text-emerald-400 font-mono">view()</code> or <code className="text-emerald-400 font-mono">test()</code>! 
                  Therefore, Composer includes them immediately on every request when <code className="text-emerald-400 font-mono">autoload.php</code> boots.
                </p>
                <div className="text-[11px] font-mono text-emerald-300 bg-emerald-950/30 p-2 rounded border border-emerald-500/20">
                  Trigger: Loaded upfront at boot time
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Manual Require vs Composer Autoloading */}
      {activeTab === 'manual_vs_auto' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-rose-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              Without Composer: "Require Hell"
            </span>
            <CodeBlock
              code={`<?php
// Without Composer, every single file must be manually imported:
require_once __DIR__ . '/app/classes/Car.php';
require_once __DIR__ . '/app/classes/HelloWorld.php';
require_once __DIR__ . '/app/classes/NewClass.php';
require_once __DIR__ . '/app/helpers/helpers.php';
// In a project with 80 classes, you need 80 manual require statements!
// If you rename a file, all 80 require paths break!`}
              language="php"
              title="Manual Require (Old Style)"
              maxHeight="280px"
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              With Composer: Modern PSR-4 Autoloading
            </span>
            <CodeBlock
              code={`<?php
// With Composer, you ONLY require ONE file in your entry point:
require_once __DIR__ . '/vendor/autoload.php';

use App\\classes\\HelloWorld;
use App\\classes\\Car;

// Classes are loaded lazily on demand when new is called!
$app = new HelloWorld();
$car = new Car();`}
              language="php"
              title="Modern Autoloading (php-class-two)"
              maxHeight="280px"
            />
          </div>
        </div>
      )}
    </div>
  );
}
