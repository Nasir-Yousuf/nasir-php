import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimationCanvas } from './AnimationCanvas';
import { useLanguage } from '../../contexts/LanguageContext';
import { Table, Plus, Repeat } from 'lucide-react';

export function TableLoopAnimation() {
  const { t } = useLanguage();
  const [students, setStudents] = useState([
    { id: 1, name: "Borno", email: "borno@gmail.com", mobile: "01711-000001" },
    { id: 2, name: "Patwari", email: "patwari@gmail.com", mobile: "01711-000002" },
    { id: 3, name: "Golam", email: "golam@gmail.com", mobile: "01711-000003" }
  ]);

  const handleAdd = () => {
    if (students.length >= 5) return;
    const names = ["Sakib", "Tanvir"];
    const nextIdx = students.length - 2;
    const newName = names[nextIdx] || "Student";
    setStudents([
      ...students,
      {
        id: students.length + 1,
        name: newName,
        email: `${newName.toLowerCase()}@gmail.com`,
        mobile: `01711-00000${students.length + 1}`
      }
    ]);
  };

  return (
    <AnimationCanvas
      title="How views/home.php Compiles $students into a Bootstrap Table"
      titleBn="views/home.php যেভাবে foreach লুপ দিয়ে বুটস্ট্র্যাপ টেবিল তৈরি করে"
      subtitle="foreach ($students as $student): Injects each student record row into HTML <tr><td> tags."
      subtitleBn="foreach ($students as $student): প্রতিটি ছাত্রের তথ্যকে HTML <tr><td> সারির ভেতরে ঢুকিয়ে রেন্ডার করে।"
      badge="Table Template Compiler"
      badgeBn="টেবিল টেমপ্লেট কম্পাইলার"
    >
      <div className="w-full max-w-2xl flex flex-col items-center gap-3 py-1">
        <div className="flex items-center justify-between w-full px-2">
          <span className="text-xs font-mono text-slate-300">
            {t("Records in $students:", "$students এর মোট রেকর্ড:")} <strong className="text-amber-400 font-bold">{students.length}</strong>
          </span>
          <button
            onClick={handleAdd}
            disabled={students.length >= 5}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-400 hover:bg-yellow-300 text-slate-950 font-mono font-bold text-xs disabled:opacity-40 transition-all shadow-md"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Student Row</span>
          </button>
        </div>

        {/* The Rendered Bootstrap Table */}
        <div className="w-full rounded-2xl bg-[#141828] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
          <div className="px-4 py-2.5 bg-[#1e2338] border-b border-slate-800 flex items-center justify-between">
            <span className="font-bold text-white flex items-center gap-2">
              <Table className="w-4 h-4 text-emerald-400" />
              <span>All Student (views/home.php)</span>
            </span>
            <span className="text-[10px] text-slate-400 bg-[#0a0d16] px-2 py-0.5 rounded">
              Bootstrap 5 Table
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0e1220] text-slate-400 font-bold">
                  <th className="p-2.5 pl-4">Id</th>
                  <th className="p-2.5">Name</th>
                  <th className="p-2.5">Email</th>
                  <th className="p-2.5 pr-4">Mobile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {students.map((s) => (
                  <motion.tr
                    key={s.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hover:bg-[#1a2034] text-slate-200 transition-colors"
                  >
                    <td className="p-2.5 pl-4 text-purple-300 font-bold">{s.id}</td>
                    <td className="p-2.5 text-white font-bold">{s.name}</td>
                    <td className="p-2.5 text-slate-400 text-[11px]">{s.email}</td>
                    <td className="p-2.5 pr-4 text-slate-400 text-[11px]">{s.mobile}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AnimationCanvas>
  );
}
