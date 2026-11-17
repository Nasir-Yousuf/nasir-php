import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Table, 
  FileCode, 
  Key, 
  Layers, 
  Check, 
  Sparkles,
  Info,
  ChevronRight,
  Code2
} from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export function DatabaseStorageExplainer() {
  const { lang, t } = useLanguage();
  const [selectedFormat, setSelectedFormat] = useState('mysql'); // 'mysql' | 'mongodb'
  const [selectedStudentId, setSelectedStudentId] = useState(1);

  const students = [
    { id: 1, name: "Nasir", age: 22, department: "English", enrolledYear: 2022 },
    { id: 2, name: "Rahim", age: 23, department: "CSE", enrolledYear: 2021 },
    { id: 3, name: "Karim", age: 21, department: "Business", enrolledYear: 2023 }
  ];

  const selectedStudent = students.find(s => s.id === selectedStudentId) || students[0];

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#131629] to-blue-950/40 border border-purple-500/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-1 inline-block">
              {t("DATA STORAGE FOUNDATIONS", "ডাটা স্টোরেজ মূলনীতি")}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {t("If a Website Has 10,000 Users, Where and How Do We Store Them?", "ওয়েবসাইটে যদি ১০,০০০ শিক্ষার্থী থাকে, তাদের তথ্য কোথায় ও কীভাবে থাকে?")}
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {t(
                "A database organizes long-term data safely on disk. But how is that information formatted inside? Relational databases store data in strict 2D tables of rows and columns, while Document databases store hierarchical, JSON-like flexible documents.",
                "ডাটাবেজ হার্ডডিস্কে নিরাপদে তথ্য সাজিয়ে রাখে। কিন্তু এর ভেতরে তথ্য কেমন থাকে? রিলেশনাল ডাটাবেজ (MySQL) ডাটাকে টেবিল, সারি (Row) ও কলামে সাজায়; আর ডকুমেন্ট ডাটাবেজ (MongoDB) নমনীয় JSON/BSON ডকুমেন্টে তথ্য রাখে।"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Relational Concepts Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-[#141829] border border-slate-800">
          <span className="text-[10px] font-mono text-purple-400 block mb-1">CONTAINER</span>
          <h4 className="font-bold text-white mb-0.5">Database</h4>
          <p className="text-[11px] text-slate-400">{t("The whole database schema (e.g. uni_db)", "সম্পূর্ণ ডাটাবেজ")}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#141829] border border-slate-800">
          <span className="text-[10px] font-mono text-cyan-400 block mb-1">STRUCTURE</span>
          <h4 className="font-bold text-white mb-0.5">Table</h4>
          <p className="text-[11px] text-slate-400">{t("Collection of records (e.g. students)", "নির্দিষ্ট ডাটা টেবিল")}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#141829] border border-slate-800">
          <span className="text-[10px] font-mono text-amber-400 block mb-1">SCHEMA</span>
          <h4 className="font-bold text-white mb-0.5">Columns</h4>
          <p className="text-[11px] text-slate-400">{t("Defined fields: id, name, age, dept", "কলাম বা ফিল্ডের নাম")}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#141829] border border-slate-800">
          <span className="text-[10px] font-mono text-emerald-400 block mb-1">DATA TUPLE</span>
          <h4 className="font-bold text-white mb-0.5">Rows / Records</h4>
          <p className="text-[11px] text-slate-400">{t("Individual student entries (Nasir, Rahim)", "প্রতিটি শিক্ষার্থীর একক সারি")}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#141829] border border-amber-500/40 bg-amber-950/20">
          <span className="text-[10px] font-mono text-amber-300 block mb-1 flex items-center gap-1">
            <Key className="w-3 h-3" /> PRIMARY KEY
          </span>
          <h4 className="font-bold text-white mb-0.5">id (PK)</h4>
          <p className="text-[11px] text-slate-300">{t("Unique, non-duplicable identifier", "অনন্য পরিচিতি নম্বর")}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#141829] border border-slate-800">
          <span className="text-[10px] font-mono text-blue-400 block mb-1">VALIDATION</span>
          <h4 className="font-bold text-white mb-0.5">Data Types</h4>
          <p className="text-[11px] text-slate-400">{t("INT, VARCHAR(100), DATE", "ডাটার সঠিক টাইপ")}</p>
        </div>
      </div>

      {/* Interactive Dual-Format Viewer (MySQL Table vs MongoDB Document) */}
      <div className="p-6 rounded-2xl bg-[#0f1222] border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
              {t("Live Format Toggle", "ফরম্যাট তুলনা")}
            </span>
            <h4 className="text-lg font-bold text-white">
              {t("Same 3 Students Represented in Two Paradigms", "একই ৩ জন শিক্ষার্থীর তথ্য ২টি ভিন্ন ডাটাবেজে")}
            </h4>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center gap-2 bg-[#171b2d] p-1.5 rounded-xl border border-slate-700">
            <button
              onClick={() => setSelectedFormat('mysql')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedFormat === 'mysql'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>MySQL (Relational Table)</span>
            </button>

            <button
              onClick={() => setSelectedFormat('mongodb')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedFormat === 'mongodb'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>MongoDB (BSON / JSON Document)</span>
            </button>
          </div>
        </div>

        {/* View 1: MySQL Relational Table View */}
        {selectedFormat === 'mysql' ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Database: <strong className="text-white font-mono">university_db</strong> &gt; Table: <strong className="text-cyan-400 font-mono">students</strong></span>
              <span>{t("Click any row to highlight its record", "যেকোনো সারিতে ক্লিক করে দেখুন")}</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-700 bg-[#0a0c16]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#141829] text-slate-300 border-b border-slate-700">
                  <tr>
                    <th className="py-3 px-4 text-amber-400">
                      <div className="flex items-center gap-1.5">
                        <Key className="w-3.5 h-3.5" />
                        <span>id (INT, PK)</span>
                      </div>
                    </th>
                    <th className="py-3 px-4 text-cyan-400">name (VARCHAR(50))</th>
                    <th className="py-3 px-4 text-emerald-400">age (TINYINT)</th>
                    <th className="py-3 px-4 text-purple-400">department (VARCHAR(50))</th>
                    <th className="py-3 px-4 text-slate-400">enrolled_year (YEAR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {students.map((st) => {
                    const isSelected = st.id === selectedStudentId;
                    return (
                      <tr
                        key={st.id}
                        onClick={() => setSelectedStudentId(st.id)}
                        className={`transition-colors cursor-pointer ${
                          isSelected ? 'bg-purple-950/40 text-white font-bold' : 'hover:bg-slate-800/40 text-slate-300'
                        }`}
                      >
                        <td className="py-3 px-4 text-amber-300 font-bold">#{st.id}</td>
                        <td className="py-3 px-4 text-cyan-200">{st.name}</td>
                        <td className="py-3 px-4 text-emerald-300">{st.age}</td>
                        <td className="py-3 px-4 text-purple-300">{st.department}</td>
                        <td className="py-3 px-4 text-slate-400">{st.enrolledYear}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200">
              <span className="font-bold text-purple-300 block mb-1">
                📌 {t("Relational Table Architecture Characteristics:", "রিলেশনাল টেবিলের মূল বৈশিষ্ট্য:")}
              </span>
              <p className="leading-relaxed">
                {t(
                  "Every single row has the exact same columns defined by strict schema rules. Data integrity is enforced, relations between tables (e.g. students <-> course enrollments) use Foreign Keys.",
                  "প্রতিটি সারিতে অবশ্যই একই কলাম থাকতে হবে। স্কিমা কঠোর নিয়ম মেনে চলে। একাধিক টেবিলের সম্পর্ক Foreign Key দিয়ে রক্ষা করা হয়।"
                )}
              </p>
            </div>
          </div>
        ) : (
          /* View 2: MongoDB Document View */
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Database: <strong className="text-white font-mono">university_db</strong> &gt; Collection: <strong className="text-emerald-400 font-mono">students</strong></span>
              <span>{t("Select document to inspect:", "ডকুমেন্ট নির্বাচন করুন:")}</span>
            </div>

            {/* Document Selector Pills */}
            <div className="flex gap-2">
              {students.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setSelectedStudentId(st.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    st.id === selectedStudentId
                      ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                      : 'bg-[#15192c] text-slate-300 hover:bg-[#1e233d]'
                  }`}
                >
                  Document #{st.id} ({st.name})
                </button>
              ))}
            </div>

            {/* JSON/BSON Viewer */}
            <div className="p-4 rounded-xl bg-[#090b14] border border-emerald-900/40 font-mono text-xs text-slate-200">
              <pre className="overflow-x-auto text-emerald-400">
                {JSON.stringify(
                  {
                    _id: `ObjectId("${selectedStudent.id}a7f89c001${selectedStudent.id}")`,
                    student_id: selectedStudent.id,
                    name: selectedStudent.name,
                    age: selectedStudent.age,
                    department: selectedStudent.department,
                    enrolled_year: selectedStudent.enrolledYear,
                    skills: selectedStudent.department === "CSE" ? ["PHP", "JavaScript", "SQL"] : ["Writing", "Communication"]
                  },
                  null,
                  2
                )}
              </pre>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200">
              <span className="font-bold text-emerald-300 block mb-1">
                📌 {t("Document Database Architecture (MongoDB):", "ডকুমেন্ট ডাটাবেজ আর্কিটেকচার (MongoDB):")}
              </span>
              <p className="leading-relaxed">
                {t(
                  "Stores records as hierarchical, BSON (Binary JSON) documents. Each document can have nested arrays or unique fields without altering other records. Excellent for flexible schemas.",
                  "ডাটাকে BSON (বাইনারি JSON) ফরম্যাটে রাখে। প্রতিটি ডকুমেন্টের আলাদা ফিল্ড বা নেস্টেড অ্যারে থাকতে পারে। কোনো কঠোর ফিক্সড টেবিল স্কিমা বাধ্যতামূলক নয়।"
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default DatabaseStorageExplainer;
