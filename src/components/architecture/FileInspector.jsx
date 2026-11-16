import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Code2, ArrowDownRight, ArrowUpRight, Check, Copy } from 'lucide-react';

export function FileInspector({ fileId = 'web.php' }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeLine, setActiveLine] = useState(null);

  const fileDetails = {
    'web.php': {
      title: 'web.php (Front Router)',
      path: 'web.php',
      badge: 'Entry Controller',
      inFlow: 'User HTTP GET query string ($_GET[\'page\'])',
      outFlow: 'Invokes matching method on HelloWorld controller (index, about, etc.)',
      lines: [
        { num: 1, code: '<?php', note: 'Opens PHP execution tag' },
        { num: 2, code: 'require_once "vendor/autoload.php";', note: 'Loads Composer autoloader to autoload classes & pre-load helpers.php' },
        { num: 3, code: 'use App\\classes\\HelloWorld;', note: 'Imports HelloWorld class from App\\classes namespace' },
        { num: 4, code: '', note: '' },
        { num: 5, code: '$helloWorld = new HelloWorld();', note: 'Instantiates Controller object in server RAM' },
        { num: 6, code: '', note: '' },
        { num: 7, code: 'if (isset($_GET[\'page\'])) {', note: 'Checks if a page parameter was provided in the URL bar' },
        { num: 8, code: '    if ($_GET[\'page\'] == "home") {', note: 'If ?page=home, route to index() method' },
        { num: 9, code: '        $helloWorld->index();', note: 'Executes index() on controller' },
        { num: 10, code: '    } elseif ($_GET[\'page\'] == \'about\') {', note: 'Routes to about() method' },
        { num: 11, code: '        $helloWorld->about();', note: 'Executes about() on controller' },
        { num: 12, code: '    }', note: '' },
        { num: 13, code: '} else {', note: 'Default fallback if no ?page was specified' },
        { num: 14, code: '    $helloWorld->index();', note: 'Defaults to home page index()' },
        { num: 15, code: '}', note: '' }
      ]
    },
    'HelloWorld.php': {
      title: 'app/classes/HelloWorld.php (Controller)',
      path: 'app/classes/HelloWorld.php',
      badge: 'Logic Controller',
      inFlow: 'Invoked by web.php dispatcher',
      outFlow: 'Array of student records handed to view("home", ["students" => $this->students])',
      lines: [
        { num: 1, code: '<?php', note: '' },
        { num: 2, code: 'namespace App\\classes;', note: 'PSR-4 namespace matching directory app/classes' },
        { num: 3, code: 'class HelloWorld {', note: 'Page controller class declaration' },
        { num: 4, code: '    public $students = [];', note: 'Public property to store student array' },
        { num: 5, code: '    public function index() {', note: 'Index action invoked for home page' },
        { num: 6, code: '        $this->students = [', note: 'Initializes array of associative arrays with student records' },
        { num: 7, code: '            0 => ["id" => 1, "name" => "Borno", "email" => "borno@gmail.com"],', note: 'Student 1 record' },
        { num: 8, code: '            1 => ["id" => 2, "name" => "Patwari", "email" => "patwari@gmail.com"]', note: 'Student 2 record' },
        { num: 9, code: '        ];', note: '' },
        { num: 10, code: '        return view("home", ["students" => $this->students]);', note: 'Hands data to view() helper' },
        { num: 11, code: '    }', note: '' },
        { num: 12, code: '}', note: '' }
      ]
    },
    'helpers.php': {
      title: 'app/helpers/helpers.php (Custom View Engine)',
      path: 'app/helpers/helpers.php',
      badge: '10-Line Engine',
      inFlow: 'view($fileName, $data = []) called by Controller',
      outFlow: 'Flushes compiled HTML string to browser via print $view',
      lines: [
        { num: 1, code: '<?php', note: '' },
        { num: 2, code: 'function view($fileName, $data = [], $print = true) {', note: 'Accepts template name and associative data array' },
        { num: 3, code: '    $view = "View Not Found";', note: 'Fallback error string' },
        { num: 4, code: '    $filePath = "views/" . $fileName . ".php";', note: 'Builds file path dynamically' },
        { num: 5, code: '    if (file_exists($filePath)) {', note: 'Checks if view file exists on disk' },
        { num: 6, code: '        ob_start();', note: 'CRITICAL: Starts output buffering in RAM' },
        { num: 7, code: '        extract($data);', note: 'MAGIC: Converts [\'students\' => $arr] into variable $students!' },
        { num: 8, code: '        include $filePath;', note: 'Executes the PHP view template' },
        { num: 9, code: '        $view = ob_get_clean();', note: 'Extracts entire buffered HTML into string and clears buffer' },
        { num: 10, code: '    }', note: '' },
        { num: 11, code: '    if ($print) { print $view; }', note: 'Flushes final HTML response to browser' },
        { num: 12, code: '}', note: '' }
      ]
    }
  };

  const current = fileDetails[fileId] || fileDetails['web.php'];

  const handleCopy = () => {
    const fullCode = current.lines.map(l => l.code).join('\n');
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#141828] border border-slate-800 p-5 shadow-2xl space-y-4">
      {/* File Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/30">
            {current.badge}
          </span>
          <h3 className="font-mono text-base font-bold text-white mt-1">
            {current.title}
          </h3>
          <span className="text-xs font-mono text-slate-400">{current.path}</span>
        </div>

        <button
          onClick={handleCopy}
          className="p-2 rounded-xl bg-[#1e2438] hover:bg-[#28304a] text-slate-300 transition-colors"
          title="Copy full code"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Input / Output Data Flow Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-[#0e1220] border border-sky-500/30 text-xs">
          <span className="flex items-center gap-1.5 text-sky-400 font-mono font-bold mb-1">
            <ArrowDownRight className="w-4 h-4" />
            <span>Data In (Input):</span>
          </span>
          <p className="text-slate-300 font-sans leading-snug">{current.inFlow}</p>
        </div>

        <div className="p-3 rounded-xl bg-[#0e1220] border border-emerald-500/30 text-xs">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold mb-1">
            <ArrowUpRight className="w-4 h-4" />
            <span>Data Out (Output):</span>
          </span>
          <p className="text-slate-300 font-sans leading-snug">{current.outFlow}</p>
        </div>
      </div>

      {/* Annotated Code Block */}
      <div className="p-3 rounded-xl bg-[#0a0d16] border border-slate-800 font-mono text-xs overflow-x-auto space-y-1">
        <div className="text-[10px] text-slate-500 pb-1 mb-2 border-b border-slate-800 flex items-center justify-between">
          <span>Click any line to view teacher explanation</span>
          <span className="text-amber-400 font-bold">{current.lines.length} lines</span>
        </div>

        {current.lines.map((line) => {
          const isSelected = activeLine === line.num;
          return (
            <div
              key={line.num}
              onClick={() => line.note && setActiveLine(isSelected ? null : line.num)}
              className={`flex items-start gap-3 px-2 py-0.5 rounded cursor-pointer transition-all ${
                isSelected
                  ? 'bg-amber-400/20 text-amber-200 border-l-2 border-amber-400'
                  : 'hover:bg-[#151928] text-slate-300'
              }`}
            >
              <span className="text-slate-600 select-none w-6 text-right shrink-0">
                {line.num}
              </span>
              <pre className="m-0 bg-transparent flex-1 overflow-x-auto">
                <code>{line.code}</code>
              </pre>
              {line.note && (
                <span className="hidden md:inline text-[10px] text-slate-500 italic shrink-0">
                  // {line.note}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Line Explanation Callout */}
      {activeLine && (
        <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-200 text-xs flex items-start gap-2">
          <span className="font-bold">Line {activeLine}:</span>
          <span>{current.lines.find(l => l.num === activeLine)?.note}</span>
        </div>
      )}
    </div>
  );
}
