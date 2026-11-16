import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  FileCode, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Code2,
  GitBranch,
  Terminal,
  HelpCircle,
  Link as LinkIcon
} from 'lucide-react';
import { FILE_TREE_DATA } from '../../data/projectStructure';
import { FILE_DETAILS } from '../../data/fileContents';
import { CodeBlock } from '../../components/common/CodeBlock';
import { Badge } from '../../components/common/Badge';

export function ProjectExplorerSection({ selectedFileId, onSelectFile }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFolders, setExpandedFolders] = useState({
    app: true,
    'app/classes': true,
    'app/helpers': true,
    views: true,
    'views/includes': true,
    assets: true,
    'assets/css': false,
    'assets/js': true,
    vendor: true,
    'vendor/composer': false
  });
  const [activeCodeTab, setActiveCodeTab] = useState('real'); // 'real' | 'illustrative' | 'js'

  const currentFileId = selectedFileId || 'app/classes/HelloWorld.php';
  const fileDetails = FILE_DETAILS[currentFileId] || FILE_DETAILS['app/classes/HelloWorld.php'];

  const toggleFolder = (folderId) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderId]: !prev[folderId]
    }));
  };

  // Render tree node recursively
  const renderTreeNode = (node, depth = 0) => {
    if (node.type === 'folder') {
      const isExpanded = expandedFolders[node.id];
      const hasChildren = node.children && node.children.length > 0;

      // Filter check
      if (searchQuery) {
        const matchesFolder = node.name.toLowerCase().includes(searchQuery.toLowerCase());
        const hasMatchingChild = node.children && node.children.some(child => 
          child.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (!matchesFolder && !hasMatchingChild) return null;
      }

      return (
        <div key={node.id} className="select-none">
          <button
            onClick={() => toggleFolder(node.id)}
            className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-laboratory-800 text-slate-300 hover:text-white text-xs font-mono transition-colors text-left group"
            style={{ paddingLeft: `${depth * 14 + 8}px` }}
          >
            {hasChildren ? (
              isExpanded ? (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200" />
              )
            ) : (
              <span className="w-3.5" />
            )}

            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-amber-400" />
            ) : (
              <Folder className="w-4 h-4 text-amber-400/80" />
            )}

            <span className="font-semibold text-slate-200">{node.name}</span>
            {node.children && node.children.length === 0 && (
              <span className="text-[10px] text-slate-500 italic ml-1">(empty)</span>
            )}
          </button>

          {isExpanded && hasChildren && (
            <div>
              {node.children.map(child => renderTreeNode(child, depth + 1))}
            </div>
          )}
        </div>
      );
    } else {
      // File node
      if (searchQuery && !node.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return null;
      }

      const isSelected = currentFileId === node.path;

      return (
        <button
          key={node.id}
          onClick={() => onSelectFile(node.path)}
          className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-mono transition-all text-left group ${
            isSelected
              ? 'bg-php/20 text-php-accent font-bold border border-php/40 shadow-glow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-850'
          }`}
          style={{ paddingLeft: `${depth * 14 + 20}px` }}
        >
          <div className="flex items-center gap-2 truncate">
            <FileCode
              className={`w-3.5 h-3.5 shrink-0 ${
                node.extension === 'php'
                  ? 'text-php'
                  : node.extension === 'json'
                  ? 'text-amber-400'
                  : node.extension === 'js'
                  ? 'text-yellow-400'
                  : 'text-cyan-400'
              }`}
            />
            <span className="truncate">{node.name}</span>
          </div>

          <span
            className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
              isSelected
                ? 'bg-php/30 text-white'
                : 'bg-laboratory-800 text-slate-500 group-hover:text-slate-400'
            }`}
          >
            {node.badge?.split(' ')[0] || node.extension}
          </span>
        </button>
      );
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-laboratory-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="php" size="sm">Laboratory Code Editor</Badge>
            <h1 className="text-2xl font-bold text-white tracking-tight">Interactive Project Explorer</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Browse the real repository file structure. Click any file to inspect its source code, architecture role, and JavaScript equivalent.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="verified" size="sm">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Source Unpacked
          </Badge>
        </div>
      </div>

      {/* 3-Column VS Code Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* LEFT COLUMN: File Tree (Col 3) */}
        <div className="lg:col-span-3 rounded-2xl border border-laboratory-800 bg-laboratory-900/90 p-3 space-y-3 shadow-xl">
          <div className="flex items-center justify-between px-2 py-1 border-b border-laboratory-800/80">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Explorer
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              php-class-two
            </span>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
            <input
              type="text"
              placeholder="Filter files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 font-mono focus:outline-none focus:border-php"
            />
          </div>

          {/* Tree hierarchy */}
          <div className="max-h-[560px] overflow-y-auto space-y-0.5 scrollbar-thin">
            {FILE_TREE_DATA.map(node => renderTreeNode(node, 0))}
          </div>
        </div>

        {/* CENTER COLUMN: Code Preview (Col 5) */}
        <div className="lg:col-span-5 space-y-3">
          {/* Code Viewer View Selector */}
          <div className="flex items-center justify-between bg-laboratory-900/90 p-2 rounded-xl border border-laboratory-800">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <button
                onClick={() => setActiveCodeTab('real')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeCodeTab === 'real'
                    ? 'bg-php text-white shadow-glow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
                }`}
              >
                Verified Real Code
              </button>

              <button
                onClick={() => setActiveCodeTab('illustrative')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeCodeTab === 'illustrative'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
                }`}
              >
                Illustrative Breakdown
              </button>

              <button
                onClick={() => setActiveCodeTab('js')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeCodeTab === 'js'
                    ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
                }`}
              >
                JavaScript Equivalent
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              {fileDetails.language.toUpperCase()}
            </span>
          </div>

          {/* Actual Code Block */}
          {activeCodeTab === 'real' && (
            <div className="space-y-2">
              <CodeBlock
                code={fileDetails.realCode}
                language={fileDetails.language}
                title={`Verified File: ${fileDetails.path}`}
                maxHeight="520px"
              />
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>
                  <strong>Exact Source Code:</strong> This code is identical to the file in your extracted classroom zip archive.
                </span>
              </div>
            </div>
          )}

          {activeCodeTab === 'illustrative' && (
            <div className="space-y-2">
              <CodeBlock
                code={fileDetails.illustrativeCode}
                language={fileDetails.language}
                title={`Educational Architecture: ${fileDetails.name}`}
                maxHeight="520px"
              />
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
                <span>
                  <strong>Illustrative Concept:</strong> Cleaned-up, annotated reference model demonstrating best architectural practices.
                </span>
              </div>
            </div>
          )}

          {activeCodeTab === 'js' && (
            <div className="space-y-2">
              <CodeBlock
                code={fileDetails.jsEquivalent}
                language="javascript"
                title={`JS/Node.js Counterpart: ${fileDetails.name}`}
                maxHeight="520px"
              />
              <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-2">
                <Code2 className="w-4 h-4 shrink-0 text-cyan-400" />
                <span>
                  <strong>JavaScript Rosetta Stone:</strong> How a JavaScript or Node.js engineer would build this exact functionality.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Architectural Inspector (Col 4) */}
        <div className="lg:col-span-4 rounded-2xl border border-laboratory-800 bg-laboratory-900/90 p-5 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-laboratory-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                File Inspector
              </span>
              <h3 className="font-bold text-white text-base font-mono">
                {fileDetails.name}
              </h3>
            </div>
            <Badge variant="php" size="sm">
              {fileDetails.badge}
            </Badge>
          </div>

          {/* Why this file exists */}
          <div className="space-y-1.5">
            <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              <span>Why This File Exists</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed bg-laboratory-950 p-3 rounded-xl border border-laboratory-800">
              {fileDetails.whyExists}
            </p>
          </div>

          {/* Core Responsibilities */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Core Responsibilities</span>
            </div>
            <ul className="space-y-1.5">
              {fileDetails.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  className="text-xs text-slate-300 flex items-start gap-2 bg-laboratory-950/60 p-2 rounded-lg border border-laboratory-850"
                >
                  <span className="text-emerald-400 font-mono font-bold text-[11px] mt-0.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Connections (Clickable links!) */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Architecture Connections</span>
            </div>
            <div className="space-y-1.5">
              {fileDetails.architectureConnections.map((conn, i) => (
                <button
                  key={i}
                  onClick={() => onSelectFile(conn.target)}
                  className="w-full text-left p-2.5 rounded-xl bg-laboratory-950 hover:bg-laboratory-850 border border-laboratory-800 hover:border-php/50 transition-all text-xs group"
                >
                  <div className="flex items-center justify-between text-php-accent font-mono font-semibold">
                    <span>{conn.target}</span>
                    <LinkIcon className="w-3.5 h-3.5 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {conn.reason}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Classroom Teaching Notes */}
          {fileDetails.teachingNotes && (
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs space-y-1.5">
              <div className="font-mono font-bold uppercase tracking-wider text-[10px] text-amber-400 flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Classroom Lecture Tip</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-amber-100">
                {fileDetails.teachingNotes.map((note, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
