import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderTree, 
  Layers, 
  Server, 
  Globe, 
  FileCode2, 
  Package, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Compass
} from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { FolderTreeExplorer } from '../../architecture/FolderTreeExplorer';
import { ArchitectureDiagram } from '../../architecture/ArchitectureDiagram';
import { FileInspector } from '../../architecture/FileInspector';
import { RequestJourney } from '../../architecture/RequestJourney';

// Dedicated Concept Visualizers
import { RouterAnimation } from '../../animations/RouterAnimation';
import { ControllerAnimation } from '../../animations/ControllerAnimation';
import { ViewEngineAnimation } from '../../animations/ViewEngineAnimation';
import { TemplateAssemblyAnimation } from '../../animations/TemplateAssemblyAnimation';
import { TableLoopAnimation } from '../../animations/TableLoopAnimation';
import { ComposerAnimation } from '../../animations/ComposerAnimation';
import { ClientServerTimeline } from '../../animations/ClientServerTimeline';

export function ProjectArchitectureSection() {
  const { lang, t } = useLanguage();
  const [selectedSubView, setSelectedSubView] = useState('tree'); // tree | diagram | journey | deepdive
  const [activeVisualizer, setActiveVisualizer] = useState('router');
  const [inspectedFile, setInspectedFile] = useState('web.php');

  const responsibilityGroups = [
    {
      title: "1. Application Logic",
      titleBn: "১. অ্যাপ্লিকেশন লজিক",
      paths: "app/classes/, app/helpers/",
      color: "border-amber-500/40 bg-amber-950/20 text-amber-300",
      description: "Encapsulates business rules, controller logic (HelloWorld.php), domain models (Car.php), and reusable helper utilities (helpers.php).",
      descriptionBn: "কন্ট্রোলার (HelloWorld.php), অবজেক্ট মডেল (Car.php) এবং ভিউ ইঞ্জিনের হেল্পার ফাংশন ধারণ করে।"
    },
    {
      title: "2. User Interface",
      titleBn: "২. ইউজার ইন্টারফেস (ভিউ)",
      paths: "views/, views/includes/",
      color: "border-pink-500/40 bg-pink-950/20 text-pink-300",
      description: "Presentation layer templates. Includes reusable layout headers/footers and dynamic page views (home.php, about.php, contact.php).",
      descriptionBn: "ইউজারকে দেখানোর টেমপ্লেট। হেডার, ফুটার এবং পেজের ডাটা প্রদর্শনের ভিউ ফাইল ধারণ করে।"
    },
    {
      title: "3. Frontend Resources",
      titleBn: "৩. ফ্রন্টএন্ড রিসোর্স (অ্যাসেট)",
      paths: "assets/css/, assets/js/",
      color: "border-cyan-500/40 bg-cyan-950/20 text-cyan-300",
      description: "Static styling and client scripts sent verbatim to the browser: Bootstrap stylesheets, custom style.css, and main.js.",
      descriptionBn: "ব্রাউজারে সরাসরি পাঠানো ফাইল: বুটস্ট্র্যাপ সিএসএস ও ক্লায়েন্ট জাভাস্ক্রিপ্ট কোড।"
    },
    {
      title: "4. Dependencies & Autoloading",
      titleBn: "৪. ডিপেন্ডেন্সি ও অটোলোডিং",
      paths: "vendor/, composer.json, composer.lock",
      color: "border-purple-500/40 bg-purple-950/20 text-purple-300",
      description: "Managed by Composer. Generates vendor/autoload.php for zero-configuration PSR-4 class and helper loading.",
      descriptionBn: "কম্পোজার পরিচালিত অটোলোডিং সিস্টেম। কোনো ম্যানুয়াল require ছাড়াই ক্লাস অটো লোড করে।"
    },
    {
      title: "5. Entry & Request Dispatching",
      titleBn: "৫. এন্ট্রি পয়েন্ট ও রিকোয়েস্ট রাউটিং",
      paths: "index.php, web.php",
      color: "border-emerald-500/40 bg-emerald-950/20 text-emerald-300",
      description: "Front-controller gateway. Intercepts HTTP requests, reads ?page= query parameter, and dispatches to appropriate controller.",
      descriptionBn: "রিকোয়েস্ট রিসিভার। ব্রাউজারের ইউআরএল পড়ে সঠিক কন্ট্রোলারে ট্রাফিক পাঠায়।"
    },
    {
      title: "6. Additional Source Directory",
      titleBn: "৬. অতিরিক্ত সোর্স ডিরেক্টরি",
      paths: "src/",
      color: "border-blue-500/40 bg-blue-950/20 text-blue-300",
      description: "Directory verified to exist. Dedicated to modular modern domain classes (exact implementations pending source inspection).",
      descriptionBn: "প্রজেক্টে উপস্থিত সোর্স ফোল্ডার যা মডার্ন কোড কাঠামোর অংশ।"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Grouping by Responsibility */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <span>{t("Project Architecture Grouped by Responsibility", "দায়িত্বের ভিত্তিতে প্রজেক্টের ফাইল বিভাজন")}</span>
          </h3>
          <span className="text-xs font-mono text-slate-400">php-class-two</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {responsibilityGroups.map((grp, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${grp.color} space-y-1.5`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white">{lang === 'bn' ? grp.titleBn : grp.title}</span>
              </div>
              <div className="text-[11px] font-mono font-bold text-slate-300 truncate">
                {grp.paths}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans pt-1">
                {lang === 'bn' ? grp.descriptionBn : grp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-view switcher tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#121526] border border-slate-800">
        <button
          onClick={() => setSelectedSubView('tree')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
            selectedSubView === 'tree'
              ? 'bg-[#FACC15] text-slate-950 shadow-md font-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FolderTree className="w-4 h-4" />
          <span>{t("Interactive File Explorer", "ইন্টারেক্টিভ ফাইল এক্সপ্লোরার")}</span>
        </button>

        <button
          onClick={() => setSelectedSubView('deepdive')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
            selectedSubView === 'deepdive'
              ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{t("Dedicated Micro-Visualizers", "প্রতিটি ফাইলের ভিজ্যুয়াল অ্যানিমেশন")}</span>
        </button>

        <button
          onClick={() => setSelectedSubView('diagram')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
            selectedSubView === 'diagram'
              ? 'bg-purple-600 text-white shadow-md font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Workflow className="w-4 h-4" />
          <span>{t("Connected Architecture Map", "কানেক্টেড আর্কিটেকচার ম্যাপ")}</span>
        </button>

        <button
          onClick={() => setSelectedSubView('journey')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
            selectedSubView === 'journey'
              ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>{t("6-Step Request Journey", "৬-ধাপে রিকোয়েস্ট জার্নি")}</span>
        </button>
      </div>

      {/* Sub-View 1: Interactive File Explorer */}
      {selectedSubView === 'tree' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 p-5 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-xl">
            <FolderTreeExplorer
              selectedFile={inspectedFile}
              onSelectFile={(f) => setInspectedFile(f)}
            />
          </div>
          <div className="lg:col-span-7">
            <FileInspector selectedFile={inspectedFile} />
          </div>
        </div>
      )}

      {/* Sub-View 2: Dedicated Micro-Visualizers */}
      {selectedSubView === 'deepdive' && (
        <div className="space-y-4">
          {/* Visualizer selector pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'router', label: 'web.php (Router)', labelBn: 'web.php (রাউটার)' },
              { id: 'controller', label: 'HelloWorld.php (Controller)', labelBn: 'HelloWorld.php (কন্ট্রোলার)' },
              { id: 'viewengine', label: 'helpers.php (View Engine)', labelBn: 'helpers.php (ভিউ ইঞ্জিন)' },
              { id: 'assembly', label: 'header/footer.php (Layouts)', labelBn: 'header/footer.php (লেআউট)' },
              { id: 'tableloop', label: 'views/home.php (Table Loop)', labelBn: 'views/home.php (টেবিল লুপ)' },
              { id: 'composer', label: 'composer.json (Autoload)', labelBn: 'composer.json (অটোলোড)' },
              { id: 'timeline', label: 'Client-Server Boundary', labelBn: 'ক্লায়েন্ট-সার্ভার বাউন্ডারি' }
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVisualizer(v.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeVisualizer === v.id
                    ? 'bg-cyan-400 text-slate-950 shadow-md font-black'
                    : 'bg-[#141829] text-slate-300 hover:bg-[#1e233d]'
                }`}
              >
                {lang === 'bn' ? v.labelBn : v.label}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#0d101e] border border-slate-800 shadow-2xl">
            {activeVisualizer === 'router' && <RouterAnimation />}
            {activeVisualizer === 'controller' && <ControllerAnimation />}
            {activeVisualizer === 'viewengine' && <ViewEngineAnimation />}
            {activeVisualizer === 'assembly' && <TemplateAssemblyAnimation />}
            {activeVisualizer === 'tableloop' && <TableLoopAnimation />}
            {activeVisualizer === 'composer' && <ComposerAnimation />}
            {activeVisualizer === 'timeline' && <ClientServerTimeline />}
          </div>
        </div>
      )}

      {/* Sub-View 3: Architecture Diagram */}
      {selectedSubView === 'diagram' && (
        <div className="p-6 rounded-2xl bg-[#0d101e] border border-slate-800 shadow-2xl">
          <ArchitectureDiagram />
        </div>
      )}

      {/* Sub-View 4: Request Journey */}
      {selectedSubView === 'journey' && (
        <div className="p-6 rounded-2xl bg-[#0d101e] border border-slate-800 shadow-2xl">
          <RequestJourney />
        </div>
      )}
    </div>
  );
}
export default ProjectArchitectureSection;
