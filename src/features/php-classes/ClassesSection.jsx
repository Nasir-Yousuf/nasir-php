import React, { useState } from 'react';
import { 
  Box, 
  Sparkles, 
  Play, 
  Terminal, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  Code2
} from 'lucide-react';
import { CodeBlock } from '../../components/common/CodeBlock';
import { Badge } from '../../components/common/Badge';

export function ClassesSection({ onSelectFile }) {
  const [activeClassTab, setActiveClassTab] = useState('car'); // 'car' | 'helloworld' | 'newclass'

  // Car instance state
  const [carName, setCarName] = useState('Axios - Hybrid');
  const [carModel, setCarModel] = useState('2022');
  const [carColor, setCarColor] = useState('Red');
  const [instantiatedCar, setInstantiatedCar] = useState(null);
  const [carConsoleOutput, setCarConsoleOutput] = useState([]);

  // Create Car object handler
  const handleCreateCar = () => {
    const newInstance = {
      id: `0x${Math.floor(Math.random() * 16777215).toString(16)}`,
      name: carName,
      model: carModel,
      color: carColor,
      createdAt: new Date().toLocaleTimeString()
    };
    setInstantiatedCar(newInstance);
    setCarConsoleOutput(prev => [
      `[Memory Heap Allocated] Object(App\\classes\\Car)#1 at memory address ${newInstance.id}`,
      `__construct() executed: $name="${newInstance.name}", $model="${newInstance.model}", $color="${newInstance.color}"`,
      ...prev
    ]);
  };

  const handleCallMethod = (methodName) => {
    if (!instantiatedCar) return;

    let output = '';
    if (methodName === 'getName') {
      output = instantiatedCar.name;
    } else if (methodName === 'getModel') {
      output = instantiatedCar.model;
    } else if (methodName === 'getColor') {
      output = instantiatedCar.color;
    } else if (methodName === 'allInfo') {
      output = `Car name : ${instantiatedCar.name}<br/>Car model : ${instantiatedCar.model}<br/>Car color : ${instantiatedCar.model}`;
    }

    setCarConsoleOutput(prev => [
      `> $car->${methodName}() => "${output.replace(/<br\/>/g, ' ')}"`,
      ...prev
    ]);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-laboratory-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="purple" size="sm">OOP Blueprints & Instantiation</Badge>
            <h1 className="text-2xl font-bold text-white tracking-tight">PHP Classes & Object-Oriented Architecture</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Understanding Classes, Properties, Methods, and Constructors in <code className="text-php-accent font-mono">php-class-two</code>.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1.5 bg-laboratory-900/90 p-1.5 rounded-2xl border border-laboratory-800">
          <button
            onClick={() => setActiveClassTab('car')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              activeClassTab === 'car'
                ? 'bg-php text-white shadow-glow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
            }`}
          >
            Car.php (Model)
          </button>
          <button
            onClick={() => setActiveClassTab('helloworld')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              activeClassTab === 'helloworld'
                ? 'bg-php text-white shadow-glow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
            }`}
          >
            HelloWorld.php (Controller)
          </button>
          <button
            onClick={() => setActiveClassTab('newclass')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              activeClassTab === 'newclass'
                ? 'bg-php text-white shadow-glow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-laboratory-800'
            }`}
          >
            NewClass.php (Bug Spotting)
          </button>
        </div>
      </div>

      {/* TAB 1: Car.php Interactive Lab */}
      {activeClassTab === 'car' && (
        <div className="space-y-6">
          {/* Blueprint vs Object Explanation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
                1. Blueprint (Class)
              </span>
              <h3 className="font-bold text-white text-sm">Car.php (Code on Disk)</h3>
              <p className="text-xs text-slate-300">
                The Class defines the properties (<code className="text-php-accent">$name</code>, <code className="text-php-accent">$model</code>, <code className="text-php-accent">$color</code>) and methods. Takes zero RAM until instantiated.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                2. Instantiation (new Car())
              </span>
              <h3 className="font-bold text-white text-sm">__construct() Magic Method</h3>
              <p className="text-xs text-slate-300">
                Calling <code className="text-amber-400 font-mono">$car = new Car()</code> allocates RAM, runs the constructor, and binds property defaults into the new object.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                3. Instance (Heap Memory)
              </span>
              <h3 className="font-bold text-white text-sm">$this-&gt;arrow Operator</h3>
              <p className="text-xs text-slate-300">
                Inside the class, <code className="text-emerald-400 font-mono">$this-&gt;name</code> accesses the instance's state. Outside, <code className="text-emerald-400 font-mono">$car-&gt;allInfo()</code> executes behaviors.
              </p>
            </div>
          </div>

          {/* Interactive Object Generator & Memory Heap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Object Creator Form (Col 5) */}
            <div className="lg:col-span-5 rounded-2xl border border-laboratory-800 bg-laboratory-900/90 p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-laboratory-800 pb-3">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-php-accent" />
                  <h3 className="font-bold text-white text-sm font-mono">
                    Object Instantiator
                  </h3>
                </div>
                <Badge variant="cyan" size="xs">
                  $car = new Car()
                </Badge>
              </div>

              {/* Input fields */}
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <label className="text-slate-400 block mb-1">
                    $name (Car Name):
                  </label>
                  <input
                    type="text"
                    value={carName}
                    onChange={(e) => setCarName(e.target.value)}
                    className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-php"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">
                    $model (Year / Model):
                  </label>
                  <input
                    type="text"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-php"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">
                    $color (Paint Color):
                  </label>
                  <input
                    type="text"
                    value={carColor}
                    onChange={(e) => setCarColor(e.target.value)}
                    className="w-full bg-laboratory-950 border border-laboratory-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-php"
                  />
                </div>
              </div>

              {/* Create Object Button */}
              <button
                onClick={handleCreateCar}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-php to-accent-electric text-white rounded-xl font-medium text-xs font-mono shadow-glow-sm hover:brightness-110 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Instantiate Object ($car = new Car())</span>
              </button>

              {/* Method execution buttons */}
              {instantiatedCar && (
                <div className="pt-3 border-t border-laboratory-800 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 font-semibold block">
                    Invoke Object Methods:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <button
                      onClick={() => handleCallMethod('getName')}
                      className="p-2 rounded-lg bg-laboratory-800 hover:bg-laboratory-750 text-slate-200 border border-laboratory-700 text-left transition-colors"
                    >
                      $car-&gt;getName()
                    </button>
                    <button
                      onClick={() => handleCallMethod('getModel')}
                      className="p-2 rounded-lg bg-laboratory-800 hover:bg-laboratory-750 text-slate-200 border border-laboratory-700 text-left transition-colors"
                    >
                      $car-&gt;getModel()
                    </button>
                    <button
                      onClick={() => handleCallMethod('getColor')}
                      className="p-2 rounded-lg bg-laboratory-800 hover:bg-laboratory-750 text-slate-200 border border-laboratory-700 text-left transition-colors"
                    >
                      $car-&gt;getColor()
                    </button>
                    <button
                      onClick={() => handleCallMethod('allInfo')}
                      className="p-2 rounded-lg bg-laboratory-800 hover:bg-laboratory-750 text-emerald-300 border border-laboratory-700 text-left transition-colors"
                    >
                      $car-&gt;allInfo()
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Virtual Memory Heap & Live Console (Col 7) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Virtual Memory Heap Display */}
              <div className="rounded-2xl border border-laboratory-800 bg-laboratory-950 p-5 shadow-xl space-y-3">
                <div className="flex items-center justify-between border-b border-laboratory-850 pb-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                    Server Virtual Memory Heap
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    RAM Representation
                  </span>
                </div>

                {instantiatedCar ? (
                  <div className="p-4 rounded-xl bg-laboratory-900 border border-emerald-500/30 space-y-3 animate-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-xs font-bold text-white">
                          Object(App\classes\Car)#1
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-laboratory-950 px-2 py-0.5 rounded border border-laboratory-800">
                        Memory Address: {instantiatedCar.id}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                      <div className="bg-laboratory-950 p-2.5 rounded-lg border border-laboratory-800">
                        <span className="text-[10px] text-slate-500 block">public $name</span>
                        <span className="text-slate-200 font-semibold">{instantiatedCar.name}</span>
                      </div>
                      <div className="bg-laboratory-950 p-2.5 rounded-lg border border-laboratory-800">
                        <span className="text-[10px] text-slate-500 block">public $model</span>
                        <span className="text-slate-200 font-semibold">{instantiatedCar.model}</span>
                      </div>
                      <div className="bg-laboratory-950 p-2.5 rounded-lg border border-laboratory-800">
                        <span className="text-[10px] text-slate-500 block">public $color</span>
                        <span className="text-slate-200 font-semibold">{instantiatedCar.color}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-500 font-mono text-xs border border-dashed border-laboratory-800 rounded-xl">
                    No Car object instantiated in memory yet. Use the Instantiator on the left to allocate RAM!
                  </div>
                )}
              </div>

              {/* Execution Console Output */}
              <div className="rounded-2xl border border-laboratory-800 bg-laboratory-950 p-4 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    Simulated PHP Output Console
                  </span>
                  <button
                    onClick={() => setCarConsoleOutput([])}
                    className="text-[10px] font-mono text-slate-500 hover:text-slate-300"
                  >
                    Clear Console
                  </button>
                </div>

                <div className="bg-laboratory-900/90 rounded-xl p-3 font-mono text-xs min-h-[140px] max-h-[180px] overflow-y-auto space-y-1 scrollbar-thin text-slate-300">
                  {carConsoleOutput.length > 0 ? (
                    carConsoleOutput.map((log, idx) => (
                      <div key={idx} className="leading-relaxed">
                        {log}
                      </div>
                    ))
                  ) : (
                    <span className="text-slate-600 italic">
                      Output will appear here when you create objects or call methods...
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HelloWorld.php (Controller) */}
      {activeClassTab === 'helloworld' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-laboratory-900/80 border border-laboratory-800 space-y-3">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              HelloWorld.php: The Page Controller
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Unlike <code className="text-php-accent font-mono">Car.php</code> which models an individual domain entity, <code className="text-php-accent font-mono">HelloWorld.php</code> acts as an Application Controller. 
              Its role is to coordinate actions (<code className="text-emerald-400 font-mono">index()</code>, <code className="text-emerald-400 font-mono">about()</code>, <code className="text-emerald-400 font-mono">contact()</code>, <code className="text-emerald-400 font-mono">login()</code>), 
              hold the student array data model, and hand execution over to the view engine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CodeBlock
              code={`// Verified HelloWorld.php controller structure:
namespace App\\classes;

class HelloWorld
{
    public $message, $location, $city, $data = [], $students = [];

    public function __construct() {
        $this->message = "Hello World";
        $this->location = "Savar";
        $this->city = "Dhaka";
    }

    public function index() {
        $this->students = [
            0 => ["id" => 1, "name" => "Borno", "email" => "borno@gmail.com", ...],
            1 => ["id" => 2, "name" => "Patwari", "email" => "patwari@gmail.com", ...],
            2 => ["id" => 3, "name" => "Golam", "email" => "golam@gmail.com", ...]
        ];
        return view("home", ["students" => $this->students]);
    }
}`}
              language="php"
              title="HelloWorld.php (Controller Action & Data)"
              maxHeight="380px"
            />

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-laboratory-900 border border-laboratory-800 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-300">
                  Controller Action Breakdown:
                </span>
                <ul className="text-xs space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-mono font-bold">1.</span>
                    <span><strong>index():</strong> Populates the student database array and returns <code className="text-php-accent font-mono">view("home", ["students" =&gt; $this-&gt;students])</code>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-mono font-bold">2.</span>
                    <span><strong>about():</strong> Returns <code className="text-php-accent font-mono">view("about")</code>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-mono font-bold">3.</span>
                    <span><strong>contact():</strong> Returns <code className="text-php-accent font-mono">view("contact")</code>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-mono font-bold">4.</span>
                    <span><strong>login():</strong> Returns <code className="text-php-accent font-mono">view("login")</code>.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-indigo-200 text-xs space-y-1">
                <span className="font-mono font-bold text-indigo-400 block">
                  JavaScript Express Equivalent:
                </span>
                <p className="font-mono text-[11px] text-slate-300">
                  app.get('/home', (req, res) =&gt; res.render('home', &#123; students &#125;));
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: NewClass.php (Bug Spotting) */}
      {activeClassTab === 'newclass' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/40 text-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span>Classroom Case Study: The Double Dollar Sign Gotcha</span>
            </div>
            <p className="text-xs text-amber-100 leading-relaxed">
              In student project files like <code className="text-amber-300 font-mono">NewClass.php</code>, you can see a very famous beginner bug on lines 11-13!
              Let's analyze why writing <code className="text-amber-300 font-mono">$this-&gt;$name</code> behaves completely differently from <code className="text-emerald-400 font-mono">$this-&gt;name</code> in PHP.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-rose-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Original Code in NewClass.php (Buggy)
              </span>
              <CodeBlock
                code={`class NewClass
{
    public $name, $age, $profession;

    public function __construct() {
        // BUG: In PHP, $this->$name looks for a variable called $name!
        // Because $name is undefined in this function scope,
        // PHP triggers a Warning: Undefined variable $name!
        $this->$name = "Nasir"; 
        $this->$age = 21; 
        $this->$profession; 
    }

    public function name(){
        echo "Nasir"; 
    }
}`}
                language="php"
                title="Bug: $this->$name"
                highlightLines={[7, 8, 9]}
                maxHeight="320px"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Correct PHP Property Access
              </span>
              <CodeBlock
                code={`class NewClass
{
    public $name, $age, $profession;

    public function __construct() {
        // CORRECT: Do not put a '$' after '->'!
        // $this->name directly targets the declared property:
        $this->name = "Nasir"; 
        $this->age = 21; 
        $this->profession = "Web Developer"; 
    }

    public function name(){
        echo $this->name; 
    }
}`}
                language="php"
                title="Fix: $this->name"
                highlightLines={[7, 8, 9]}
                maxHeight="320px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
