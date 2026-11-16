export const COMPARISON_TOPICS = [
  {
    id: "variables",
    title: "1. Variables & Scope",
    subtitle: "$prefix vs let/const/var",
    phpCode: `<?php
// PHP variables MUST start with a dollar sign '$'
$name = "Nasir";
$age = 21;
$isDeveloper = true;

// Constants in PHP
define("APP_NAME", "php-class-two");
const VERSION = "1.0.0";

// Function scope in PHP: variables outside are NOT automatically accessible inside!
$city = "Dhaka";

function showCity() {
    // Requires explicit 'global' keyword or passing as argument:
    global $city;
    echo "City: " . $city;
}

showCity();`,
    jsCode: `// JavaScript variables use let or const (no '$' required)
const name = "Nasir";
let age = 21;
const isDeveloper = true;

// Constants in JS
const APP_NAME = "php-class-two";
const VERSION = "1.0.0";

// Lexical scope in JS: outer variables ARE accessible inside functions!
const city = "Dhaka";

function showCity() {
    // Accessible automatically via lexical closure:
    console.log("City: " + city);
}

showCity();`,
    differences: [
      "PHP requires the '$' symbol before EVERY variable name ($age, $name). In JS, '$' is just an ordinary character often used by libraries or template literals.",
      "Scope in PHP is strictly function-isolated: a global variable is NOT accessible inside a function unless explicitly imported using 'global $var' or passed as an argument. In JS, lexical closures provide outer scope access automatically.",
      "In PHP, variables are dynamically typed like JavaScript, but modern PHP 7.4+ supports optional strict type hints (string $name, int $age)."
    ],
    classroomTip: "Common JS beginner habit: forgetting the '$' when writing PHP variables! In PHP, 'name = ...' without '$' is a syntax error or treated as an undefined constant."
  },
  {
    id: "strings",
    title: "2. Strings & Concatenation",
    subtitle: "Dot operator '.' vs Plus '+' and Template Literals",
    phpCode: `<?php
$name = "Borno";
$role = "Student";

// 1. String Concatenation uses the DOT '.' operator:
$greeting = "Hello " . $name . ", your role is " . $role;

// 2. Double quotes support direct variable interpolation:
$message = "Hello $name, your role is $role";

// 3. Complex expressions inside strings use curly braces:
$data = ["id" => 101];
$info = "Student ID is: {$data['id']}";

// 4. Single quotes do NOT interpolate (literal string):
$literal = 'Hello $name'; // Outputs literally: Hello $name`,
    jsCode: `const name = "Borno";
const role = "Student";

// 1. String Concatenation uses the PLUS '+' operator:
const greeting = "Hello " + name + ", your role is " + role;

// 2. Modern JS uses Template Literals with backticks:
const message = \`Hello \${name}, your role is \${role}\`;

// 3. Expressions inside template literals:
const data = { id: 101 };
const info = \`Student ID is: \${data.id}\`;

// 4. Normal quotes do not interpolate:
const literal = 'Hello \${name}'; // Outputs literally: Hello \${name}`,
    differences: [
      "In PHP, the plus sign '+' is STRICTLY for mathematical addition! If you write 'Hello ' + 'World', PHP will attempt to cast both to numbers and output 0! You MUST use the dot '.' for string concatenation.",
      "PHP double quotes \"...\" automatically parse variables inside them ($name), while single quotes '...' treat characters 100% literally.",
      "JavaScript uses backticks (`...`) with ${expression} for interpolation, and the '+' operator for string concatenation."
    ],
    classroomTip: "Remember: In PHP, Dot ('.') glues strings together. Plus ('+') is only for math numbers!"
  },
  {
    id: "arrays",
    title: "3. Arrays & Associative Arrays vs Objects",
    subtitle: "PHP's unified Array vs JS Arrays and Objects",
    phpCode: `<?php
// 1. Indexed Array (like a JS Array)
$colors = ["Red", "Green", "Blue"];
echo $colors[0]; // "Red"

// 2. Associative Array (key-value dictionary, like a JS Object!)
$student = [
    "id" => 1,
    "name" => "Patwari",
    "email" => "patwari@gmail.com",
    "hobby" => "standup"
];

// Accessing associative array values uses brackets and strings:
echo $student["name"]; // "Patwari"

// 3. Array of Associative Arrays (as seen in HelloWorld.php!)
$students = [
    0 => ["name" => "Borno", "city" => "Dhaka"],
    1 => ["name" => "Patwari", "city" => "Sirajgonj"]
];
echo $students[1]["city"]; // "Sirajgonj"`,
    jsCode: `// 1. Array
const colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // "Red"

// 2. Object (key-value dictionary)
const student = {
  id: 1,
  name: "Patwari",
  email: "patwari@gmail.com",
  hobby: "standup"
};

// Accessing object properties uses DOT notation or brackets:
console.log(student.name);     // "Patwari"
console.log(student["name"]);   // "Patwari"

// 3. Array of Objects
const students = [
  { name: "Borno", city: "Dhaka" },
  { name: "Patwari", city: "Sirajgonj" }
];
console.log(students[1].city); // "Sirajgonj"`,
    differences: [
      "PHP has a single unified 'array' type that acts as both a numeric array, a hash map, a dictionary, and a stack/queue.",
      "In PHP, an Associative Array uses the fat-arrow '=>' to pair keys and values ($key => $value). In JS, objects use the colon ':' (key: value).",
      "In PHP, you CANNOT access associative array keys using dot notation ($student.name is invalid!). You must use brackets: $student['name']."
    ],
    classroomTip: "In HelloWorld.php, $this->students is an array of associative arrays. In JavaScript, you'd think of this as an array of objects [ { ... }, { ... } ]."
  },
  {
    id: "loops",
    title: "4. Loops & Iteration",
    subtitle: "foreach ($arr as $k => $v) vs for...of / map / forEach",
    phpCode: `<?php
$students = [
    ["name" => "Borno", "email" => "borno@gmail.com"],
    ["name" => "Patwari", "email" => "patwari@gmail.com"]
];

// 1. foreach value only:
foreach ($students as $student) {
    echo $student["name"] . "<br>";
}

// 2. foreach with key and value:
foreach ($students as $index => $student) {
    echo "Index " . $index . ": " . $student["name"] . "<br>";
}

// 3. Alternative template syntax (used inside views/home.php!):
?>
<?php foreach ($students as $student): ?>
    <tr>
        <td><?= $student["name"] ?></td>
        <td><?= $student["email"] ?></td>
    </tr>
<?php endforeach; ?>`,
    jsCode: `const students = [
  { name: "Borno", email: "borno@gmail.com" },
  { name: "Patwari", email: "patwari@gmail.com" }
];

// 1. for...of loop:
for (const student of students) {
  console.log(student.name);
}

// 2. Array.prototype.forEach():
students.forEach((student, index) => {
  console.log(\`Index \${index}: \${student.name}\`);
});

// 3. In React JSX, you use .map():
return (
  <tbody>
    {students.map((student) => (
      <tr key={student.email}>
        <td>{student.name}</td>
        <td>{student.email}</td>
      </tr>
    ))}
  </tbody>
);`,
    differences: [
      "PHP's 'foreach' is a language construct: foreach ($collection as $key => $value).",
      "Notice the order in PHP: the collection comes FIRST ($students as $student), whereas in JS 'for (const student of students)' the singular item comes first.",
      "In PHP template files (views/home.php), developers often use alternate syntax 'foreach(...):' and 'endforeach;' for cleaner HTML separation, or standard braces '{ }'."
    ],
    classroomTip: "Look at views/home.php lines 18-26: that is the exact real code written in class using PHP's foreach loop to render table rows!"
  },
  {
    id: "classes",
    title: "5. Classes & OOP Blueprints",
    subtitle: "class Car { ... } side-by-side comparison",
    phpCode: `<?php
namespace App\\classes;

class Car
{
    // Property declaration with visibility
    public $color;
    public $model;
    public $name;

    // Constructor Magic Method
    public function __construct($color = "Red", $model = "2022", $name = "Axios - Hybrid")
    {
        $this->color = $color;
        $this->model = $model;
        $this->name = $name;
    }

    // Method
    public function allInfo()
    {
        echo "Car name: " . $this->name . "<br/>";
        echo "Car model: " . $this->model . "<br/>";
        echo "Car color: " . $this->color . "<br/>";
    }
}

// Instantiation:
$car = new Car();
$car->allInfo();`,
    jsCode: `// ES6 JavaScript Class
export class Car {
  // Public field declarations (optional in modern JS)
  color;
  model;
  name;

  // Constructor method
  constructor(color = "Red", model = "2022", name = "Axios - Hybrid") {
    this.color = color;
    this.model = model;
    this.name = name;
  }

  // Method
  allInfo() {
    console.log(\`Car name: \${this.name}\`);
    console.log(\`Car model: \${this.model}\`);
    console.log(\`Car color: \${this.color}\`);
  }
}

// Instantiation:
const car = new Car();
car.allInfo();`,
    differences: [
      "Constructor name: In PHP, it is ALWAYS '__construct()'. In JavaScript, it is 'constructor()'.",
      "Member access operator: In PHP, you use the arrow '->' ($this->name, $car->allInfo()). In JavaScript, you use the dot '.' (this.name, car.allInfo()).",
      "Visibility modifiers: PHP provides explicit 'public', 'protected', and 'private' keywords on properties and methods. Modern JS uses '#property' for private fields.",
      "Namespaces: PHP uses namespaces ('namespace App\\classes;') to prevent naming collisions across files."
    ],
    classroomTip: "Never write '$this.name' or '$car.allInfo()' in PHP! The dot is for string concatenation, not method invocation. Always use the arrow: '$this->name'."
  },
  {
    id: "functions",
    title: "6. Functions & Parameter Handling",
    subtitle: "function view(...) in PHP vs JS functions",
    phpCode: `<?php
// Procedural function in helpers.php
function view($fileName, $data = [], $print = true)
{
    $view = "View Not Found";
    $filePath = "views/" . $fileName . ".php";

    if (file_exists($filePath)) {
        ob_start();
        extract($data);
        include $filePath;
        $view = ob_get_clean();
    }

    if ($print) {
        print $view;
    }
}

// Calling the function:
view("home", ["students" => $students]);`,
    jsCode: `// JavaScript function with default parameters
function view(fileName, data = {}, print = true) {
  let view = "View Not Found";
  const filePath = \`views/\${fileName}.html\`;

  // In Node.js / JS, template compilation is synchronous or async
  // and does not use server output buffering
  if (fs.existsSync(filePath)) {
    view = renderTemplate(filePath, data);
  }

  if (print) {
    console.log(view);
  }
  return view;
}

// Calling the function:
view("home", { students: students });`,
    differences: [
      "Both PHP and modern JavaScript support default parameter values ($data = [], $print = true).",
      "In PHP, array parameters default to empty array '[]', while in JS they default to '{}' (object) or '[]' (array).",
      "PHP functions can be declared globally or inside classes as methods. Procedural functions in PHP live in the global function registry."
    ],
    classroomTip: "Look at helpers.php: this exact function view() is used across all actions in HelloWorld.php to render templates!"
  },
  {
    id: "modularity",
    title: "7. Modularity & Imports",
    subtitle: "require_once / Composer PSR-4 vs import / export / npm",
    phpCode: `<?php
// 1. Native manual file loading:
require_once __DIR__ . '/vendor/autoload.php';
include "views/includes/header.php";

// 2. Importing namespaced classes into local file scope:
use App\\classes\\HelloWorld;
use App\\classes\\Car;

// 3. Instantiating class:
$app = new HelloWorld();

// How it resolves:
// Composer reads composer.json: "App\\\\": "app/"
// Translates App\\classes\\HelloWorld -> "app/classes/HelloWorld.php"
// Dynamically loads the file!`,
    jsCode: `// 1. Native ES Modules import:
import { HelloWorld } from './app/classes/HelloWorld.js';
import { Car } from './app/classes/Car.js';

// 2. Instantiating class:
const app = new HelloWorld();

// How it resolves:
// Node.js or bundler (Vite/Webpack) reads the relative path
// and imports the exported module directly.
// In Node.js with package.json, "imports" or tsconfig paths
// can provide aliases like '#app/*'.`,
    differences: [
      "PHP's 'use' keyword does NOT import or execute a file by itself! It merely creates an alias in the current file so you can type 'new HelloWorld()' instead of the fully qualified name 'new \\App\\classes\\HelloWorld()'.",
      "The actual file loading in PHP is performed by the Composer autoloader via 'spl_autoload_register' when the class is first used.",
      "In JavaScript ES Modules, 'import' directly fetches and evaluates the module file at parse time."
    ],
    classroomTip: "A common misunderstanding: 'use App\\classes\\Car;' does NOT load the file. Composer loads the file when you write '$car = new Car();'!"
  },
  {
    id: "superglobals",
    title: "8. Request Superglobals",
    subtitle: "$_GET, $_POST, $_SERVER vs req.query, req.body",
    phpCode: `<?php
// PHP automatically creates Superglobals for every HTTP request!

// 1. Reading Query Parameters (e.g., web.php?page=about)
if (isset($_GET['page'])) {
    $page = $_GET['page']; // "about"
}

// 2. Reading Form POST submissions:
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
}

// 3. Server environment metadata:
$clientIp = $_SERVER['REMOTE_ADDR'];
$requestUri = $_SERVER['REQUEST_URI'];`,
    jsCode: `// Express.js / Node.js equivalent:
app.get('/web.php', (req, res) => {
  // 1. Reading Query Parameters:
  if (req.query.page) {
    const page = req.query.page; // "about"
  }
});

app.post('/login', (req, res) => {
  // 2. Reading Form POST submissions:
  const email = req.body.email;
  const password = req.body.password;
  
  // 3. Server environment:
  const clientIp = req.ip;
  const requestUri = req.originalUrl;
});`,
    differences: [
      "In PHP, superglobals ($_GET, $_POST, $_COOKIE, $_SESSION, $_SERVER) are automatically created by the PHP engine before your script starts. You don't need any middleware like body-parser!",
      "Superglobals in PHP are associative arrays. Accessing a missing key causes a warning in strict PHP, which is why 'isset($_GET['page'])' is used in web.php.",
      "In Express/Node.js, request data is attached to the 'req' object passed into your route callback handler."
    ],
    classroomTip: "Look at web.php lines 9-19: 'if (isset($_GET[\"page\"])) { if ($_GET[\"page\"] == \"home\") ... }'. That's direct superglobal query parameter inspection!"
  },
  {
    id: "templating",
    title: "9. Output Buffering & Templating",
    subtitle: "ob_start() & extract() vs JSX / Template Engines",
    phpCode: `<?php
// How PHP renders HTML templates dynamically:
function view($fileName, $data = []) {
    // 1. Open Output Buffer (divert output to memory)
    ob_start();

    // 2. extract() imports array keys as local variables:
    // ['students' => $arr] becomes $students = $arr
    extract($data);

    // 3. Include template: PHP evaluates tags, HTML is buffered
    include "views/" . $fileName . ".php";

    // 4. Capture buffered string and clean buffer:
    return ob_get_clean();
}`,
    jsCode: `// In React, components are JavaScript functions that return JSX:
export function HomeView({ students }) {
  // JSX compiles to React.createElement() virtual DOM nodes:
  return (
    <div className="container">
      <h1>All Students</h1>
      {students.map(s => <p key={s.id}>{s.name}</p>)}
    </div>
  );
}

// In EJS / Handlebars (Node.js):
// const html = ejs.render(templateString, { students });`,
    differences: [
      "PHP was born as a templating engine ('Hypertext Preprocessor'). Any code outside '<?php ?>' tags is output directly to the stream.",
      "'ob_start()' and 'ob_get_clean()' allow PHP to capture what WOULD have been printed to the browser and store it inside a string variable instead.",
      "'extract($data)' is uniquely PHP: it automatically creates local variables matching the associative array keys, so 'views/home.php' can simply write '$students' directly!"
    ],
    classroomTip: "This 10-line view() helper function in helpers.php is how modern frameworks like Laravel began! Blade templates compile down to this exact principle."
  },
  {
    id: "lifecycle",
    title: "10. Execution Lifecycle & Runtime",
    subtitle: "Share-Nothing Stateless PHP vs Persistent Node.js Server",
    phpCode: `<?php
// PHP's "Share-Nothing" Architecture:
// 1. Request arrives from browser.
// 2. Web server spawns or allocates PHP worker.
// 3. Entire script runs from top to bottom.
// 4. HTML is sent to the client.
// 5. THE PHP PROCESS DIES. ALL MEMORY IS WIPED.

// No variables persist between requests in RAM!
// If you set $counter = 1, it will NOT be 2 on the next request.
// State must be stored in $_SESSION, Cookies, or a MySQL Database.`,
    jsCode: `// Node.js Persistent Event-Loop Architecture:
// 1. Server starts with 'node server.js' and KEEPS RUNNING in memory indefinitely.
// 2. Memory, global variables, and open DB connection pools stay alive.
// 3. Requests arrive and are handled asynchronously on the event loop.

let requestCount = 0; // PERSISTS in memory across all user requests!

app.get('/', (req, res) => {
  requestCount++; // Increments for every user!
  res.send(\`Total visits: \${requestCount}\`);
});`,
    differences: [
      "PHP is stateless (Share-Nothing). Each request starts with a 100% clean memory slate. Memory leaks in a script cannot crash subsequent user requests because memory is purged after each response.",
      "Node.js runs a continuous single-threaded process with an event loop. Global variables persist in RAM across all requests, requiring care to prevent memory leaks and race conditions.",
      "In PHP, a fatal error in one user's request only affects that one user. In Node.js, an uncaught exception can crash the entire server process for everyone unless caught."
    ],
    classroomTip: "This explains why PHP doesn't need an 'app.listen(3000)' loop inside index.php or web.php. The web server (Apache/Nginx) handles the listening socket and triggers PHP per request!"
  }
];
