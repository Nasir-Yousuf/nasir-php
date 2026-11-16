import React from 'react';
import { 
  Home, 
  FolderTree, 
  Network, 
  Activity, 
  Box, 
  Package, 
  LayoutTemplate, 
  Palette, 
  GitCompare, 
  PlayCircle,
  HelpCircle
} from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { id: 'overview', label: '1. Overview', icon: Home, badge: 'Dashboard' },
  { id: 'explorer', label: '2. Project Explorer', icon: FolderTree, badge: 'Code Tree' },
  { id: 'architecture', label: '3. Architecture Map', icon: Network, badge: 'Node Canvas' },
  { id: 'lifecycle', label: '4. Request Lifecycle', icon: Activity, badge: 'Simulation' },
  { id: 'classes', label: '5. PHP Classes', icon: Box, badge: 'OOP Studio' },
  { id: 'composer', label: '6. Composer & Autoload', icon: Package, badge: 'PSR-4' },
  { id: 'views', label: '7. Views & Templates', icon: LayoutTemplate, badge: 'Assembly' },
  { id: 'assets', label: '8. Frontend Assets', icon: Palette, badge: 'Client/Server' },
  { id: 'comparison', label: '9. JavaScript vs PHP', icon: GitCompare, badge: 'Rosetta' },
  { id: 'playground', label: '10. Interactive Lab', icon: PlayCircle, badge: 'Sandbox' },
];

export function Sidebar({ activeSection, setActiveSection, className = '' }) {
  return (
    <aside className={`w-64 shrink-0 border-r border-laboratory-800 bg-laboratory-950/90 flex flex-col justify-between p-3 select-none ${className}`}>
      <div className="space-y-1">
        <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
          Classroom Modules
        </div>

        <nav className="space-y-1">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-laboratory-800 text-white shadow-glow-sm border border-laboratory-700/80 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-900'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div
                    className={`p-1.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-php text-white'
                        : 'bg-laboratory-900 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="truncate">{item.label}</span>
                </div>

                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded border transition-colors ${
                    isActive
                      ? 'bg-php/20 text-php-accent border-php/40'
                      : 'bg-laboratory-900 text-slate-500 border-laboratory-800 group-hover:text-slate-400'
                  }`}
                >
                  {item.badge}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Classroom Presenter Footnote */}
      <div className="p-3 rounded-xl bg-laboratory-900/60 border border-laboratory-800 text-slate-400 text-xs space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 font-medium">
          <span>Keyboard Shortcuts</span>
          <span className="text-php-accent font-bold">Hints</span>
        </div>
        <div className="text-[11px] space-y-1 font-mono text-slate-400">
          <div className="flex justify-between">
            <span>Next/Prev Module:</span>
            <span className="text-slate-300">← / →</span>
          </div>
          <div className="flex justify-between">
            <span>Presentation:</span>
            <span className="text-slate-300">F / Esc</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
