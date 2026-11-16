import React, { useState } from 'react';
import { 
  LayoutTemplate, 
  Layers, 
  Plus, 
  Trash2, 
  Eye, 
  Code2, 
  Sparkles, 
  FileCode,
  ArrowDown,
  CheckCircle2,
  Table
} from 'lucide-react';
import { CodeBlock } from '../../components/common/CodeBlock';
import { Badge } from '../../components/common/Badge';

export function ViewsSection({ onSelectFile }) {
  const [selectedViewFile, setSelectedViewFile] = useState('home'); // 'home' | 'about' | 'contact' | 'login'
  const [assemblyTab, setAssemblyTab] = useState('preview'); // 'preview' | 'assembly' | 'code'

  // Editable student data array
  const [students, setStudents] = useState([
    { id: 1, name: "Borno", email: "borno@gmail.com", mobile: "0181818188", address: "Dhaka" },
    { id: 2, name: "Patwari", email: "patwari@gmail.com", mobile: "0181818188", address: "Sirajgonj", hobby: "standup" },
    { id: 3, name: "Golam", email: "golam@gmail.com", mobile: "0181818188", address: "Chittagonj" },
    { id: 40, name: "Golam", email: "golam@gmail.com", mobile: "0181818188", address: "Chittagong" }
  ]);

  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [newStudentMobile, setNewStudentMobile] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudentName) return;
    const newEntry = {
      id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
      name: newStudentName,
      email: newStudentEmail || `${newStudentName.toLowerCase()}@gmail.com`,
      mobile: newStudentMobile || '01711111111',
      address: 'Dhaka'
    };
    setStudents([...students, newEntry]);
    setNewStudentName('');
    setNewStudentEmail('');
    setNewStudentMobile('');
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-laboratory-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="verified" size="sm">Presentation & Template Engine</Badge>
            <h1 className="text-2xl font-bold text-white tracking-tight">Views & Reusable Templates</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Understanding template assembly: <code className="text-emerald-400 font-mono">header.php</code> + <code className="text-emerald-400 font-mono">home.php</code> + <code className="text-emerald-400 font-mono">footer.php</code>.
          </p>
        </div>

        {/* Assembly Mode Selector */}
        <div className="flex items-center gap-1.5 bg-laboratory-900/90 p-1.5 rounded-2xl border border-laboratory-800">
          <button
            onClick={() => setAssemblyTab('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              assemblyTab === 'preview'
                ? 'bg-emerald-600 text-white shadow-glow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Rendered Page</span>
          </button>

          <button
            onClick={() => setAssemblyTab('assembly')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              assemblyTab === 'assembly'
                ? 'bg-emerald-600 text-white shadow-glow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Assembly Workshop</span>
          </button>

          <button
            onClick={() => setAssemblyTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              assemblyTab === 'code'
                ? 'bg-emerald-600 text-white shadow-glow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Template Source</span>
          </button>
        </div>
      </div>

      {/* Assembly Workshop Visualization */}
      {assemblyTab === 'assembly' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-2">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              The Modular Page Assembly Flow
            </h3>
            <p className="text-xs text-slate-300">
              Instead of maintaining the navbar and HTML head across 10 different pages, PHP includes reusable partials at runtime:
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
            {/* Header Partial Card */}
            <div className="w-full p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 text-center shadow-lg">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                Step 1: Reusable Partial
              </span>
              <h4 className="font-mono text-sm font-bold text-white">views/includes/header.php</h4>
              <p className="text-xs text-slate-400 mt-1">
                HTML5 &lt;head&gt;, Bootstrap 5 CSS link, and Top Navbar with links to ?page=home, ?page=about, etc.
              </p>
            </div>

            <ArrowDown className="w-5 h-5 text-emerald-400 animate-bounce" />

            {/* Page Body Card */}
            <div className="w-full p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center shadow-lg">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Step 2: Dynamic Page Body
              </span>
              <h4 className="font-mono text-sm font-bold text-white">views/home.php</h4>
              <p className="text-xs text-slate-400 mt-1">
                Extracts $students variable and iterates with a foreach loop to output &lt;tr&gt; and &lt;td&gt; rows.
              </p>
            </div>

            <ArrowDown className="w-5 h-5 text-emerald-400 animate-bounce" />

            {/* Footer Partial Card */}
            <div className="w-full p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 text-center shadow-lg">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                Step 3: Reusable Partial
              </span>
              <h4 className="font-mono text-sm font-bold text-white">views/includes/footer.php</h4>
              <p className="text-xs text-slate-400 mt-1">
                Loads bootstrap.bundle.min.js and closes &lt;/body&gt; &lt;/html&gt;.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Live Rendered View with Interactive Student Injector */}
      {assemblyTab === 'preview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Live Page Preview Frame (Col 8) */}
          <div className="lg:col-span-8 rounded-2xl border border-laboratory-800 bg-white text-slate-900 overflow-hidden shadow-2xl">
            {/* Navbar */}
            <nav className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between">
              <span className="font-bold text-sm tracking-tight">My PHP project</span>
              <ul className="flex items-center gap-4 text-xs">
                <li>
                  <button
                    onClick={() => setSelectedViewFile('home')}
                    className={`font-semibold ${selectedViewFile === 'home' ? 'text-blue-400 underline' : 'text-slate-300 hover:text-white'}`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedViewFile('about')}
                    className={`font-semibold ${selectedViewFile === 'about' ? 'text-blue-400 underline' : 'text-slate-300 hover:text-white'}`}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedViewFile('contact')}
                    className={`font-semibold ${selectedViewFile === 'contact' ? 'text-blue-400 underline' : 'text-slate-300 hover:text-white'}`}
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedViewFile('login')}
                    className={`font-semibold ${selectedViewFile === 'login' ? 'text-blue-400 underline' : 'text-slate-300 hover:text-white'}`}
                  >
                    Login
                  </button>
                </li>
              </ul>
            </nav>

            {/* Dynamic View Body */}
            <div className="p-6 bg-slate-100 min-h-[380px]">
              {selectedViewFile === 'home' && (
                <div className="max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-800 text-white font-bold px-4 py-2.5 text-xs flex items-center justify-between">
                      <span>All Student ({students.length} Records)</span>
                      <span className="font-mono text-[10px] text-slate-300">
                        Injected via extract($data)
                      </span>
                    </div>

                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                        <tr>
                          <th className="p-3">Id</th>
                          <th className="p-3">Name</th>
                          <th className="p-3">Email</th>
                          <th className="p-3">Mobile</th>
                          <th className="p-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans">
                        {students.map((student) => (
                          <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3 font-mono font-bold text-slate-700">{student.id}</td>
                            <td className="p-3 font-semibold text-slate-900">{student.name}</td>
                            <td className="p-3 text-slate-600">{student.email}</td>
                            <td className="p-3 font-mono text-slate-600">{student.mobile}</td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => handleDeleteStudent(student.id)}
                                className="text-rose-500 hover:text-rose-700 p-1 rounded"
                                title="Delete from $students array"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {selectedViewFile === 'about' && (
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center space-y-2">
                  <h2 className="text-xl font-bold text-slate-800">This is about page.</h2>
                  <p className="text-xs text-slate-500">
                    Loaded dynamically via <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">HelloWorld::about()</code> and <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">views/about.php</code>.
                  </p>
                </div>
              )}

              {selectedViewFile === 'contact' && (
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center space-y-2">
                  <h2 className="text-xl font-bold text-slate-800">This is Contact page.</h2>
                  <p className="text-xs text-slate-500">
                    Loaded dynamically via <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">views/contact.php</code>.
                  </p>
                </div>
              )}

              {selectedViewFile === 'login' && (
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center space-y-2">
                  <h2 className="text-xl font-bold text-slate-800">This is Login page.</h2>
                  <p className="text-xs text-slate-500">
                    Loaded dynamically via <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">views/login.php</code>.
                  </p>
                </div>
              )}
            </div>

            {/* Footer partial display */}
            <div className="bg-slate-900 text-slate-400 text-[11px] p-3 text-center border-t border-slate-800">
              Included from <code className="text-slate-300 font-mono">views/includes/footer.php</code> (Bootstrap bundle loaded)
            </div>
          </div>

          {/* Interactive Data Model Injector (Col 4) */}
          <div className="lg:col-span-4 rounded-2xl border border-laboratory-800 bg-laboratory-900/90 p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-laboratory-800 pb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Live Data Injector
                </span>
                <h3 className="font-bold text-white text-sm">
                  Modify $students Array
                </h3>
              </div>
              <Badge variant="verified" size="xs">
                HelloWorld::$students
              </Badge>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Add a student to the controller's data array. Watch how PHP's <code className="text-emerald-400 font-mono">foreach</code> loop in <code className="text-emerald-400 font-mono">home.php</code> dynamically generates another table row!
            </p>

            <form onSubmit={handleAddStudent} className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-slate-400 block mb-1">Student Name:</label>
                <input
                  type="text"
                  placeholder="e.g. Nasir Developer"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Email:</label>
                <input
                  type="email"
                  placeholder="e.g. nasir@gmail.com"
                  value={newStudentEmail}
                  onChange={(e) => setNewStudentEmail(e.target.value)}
                  className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Mobile:</label>
                <input
                  type="text"
                  placeholder="0170000000"
                  value={newStudentMobile}
                  onChange={(e) => setNewStudentMobile(e.target.value)}
                  className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-xs transition-all active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>Inject Student into $students</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Template Source View */}
      {assemblyTab === 'code' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CodeBlock
            code={`<!-- views/home.php (Exact Classroom Code) -->
<?php include "includes/header.php"; ?>

<section class="py-5 bg-secondary-subtle">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">All Student</div>
                    <div class="card-body">
                        <table class="table table-bordeard">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                            <?php foreach($students as $student) { ?>
                            <tr>
                                <td><?php echo $student["id"]; ?></td>
                                <td><?php echo $student["name"]; ?></td>
                                <td><?php echo $student["email"]; ?></td>
                                <td><?php echo $student["mobile"]; ?></td>
                            </tr>
                            <?php } ?>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include "includes/footer.php"; ?>`}
            language="php"
            title="views/home.php"
            maxHeight="380px"
          />

          <CodeBlock
            code={`<!-- views/includes/header.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
</head>
<body>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
            <a href="#" class="navbar-brand">My PHP project</a>
            <ul class="navbar-nav">
                <li><a href="web.php?page=home" class="nav-link">Home</a></li>
                <li><a href="web.php?page=about" class="nav-link">About</a></li>
                <li><a href="web.php?page=contact" class="nav-link">Contact</a></li>
                <li><a href="web.php?page=login" class="nav-link">Login</a></li>
            </ul>
        </div>
    </nav>`}
            language="markup"
            title="views/includes/header.php"
            maxHeight="380px"
          />
        </div>
      )}
    </div>
  );
}
