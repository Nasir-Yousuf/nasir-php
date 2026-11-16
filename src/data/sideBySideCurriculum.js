export const SIDE_BY_SIDE_SLIDES = [
  // Slide 1: Cover
  {
    page: 1,
    type: "cover",
    title: "PHP & JavaScript",
    subtitle: "Side by Side: From Core Basics to Real Architecture (php-class-two)",
    badgeIcon: "code",
    org: "National Institute of Youth Development (NIYD)",
    footerNote: "Every concept compared side by side — with live interactive code runners!"
  },

  // Slide 2: Roadmap
  {
    page: 2,
    type: "roadmap",
    title: "Today's Journey — 2 Major Phases",
    subtitle: "Phase 1: Language Basics Side by Side · Phase 2: Deconstructing php-class-two",
    badgeIcon: "rocket",
    sections: [
      {
        phase: "Phase 1: Language Basics (Side by Side)",
        topics: [
          "Variables & Data Types",
          "Strings & Operators",
          "If / Else & Decisions",
          "Loops (for, while, foreach vs for...of)",
          "Functions & Return",
          "Arrays & Dictionaries",
          "OOP Classes & $this"
        ]
      },
      {
        phase: "Phase 2: The Real php-class-two Project",
        topics: [
          "Folder Structure Blueprint",
          "web.php (Front Router)",
          "HelloWorld.php (Controller)",
          "Car.php (OOP Model)",
          "helpers.php (10-Line View Engine)",
          "views/ & Reusable Templates",
          "composer.json (PSR-4 Autoloading)"
        ]
      }
    ]
  },

  // Slide 3: Variables
  {
    page: 3,
    type: "comparison",
    title: "1. Variables — Declaring & Storing Values",
    badgeIcon: "box",
    phpCode: `<?php
// PHP variables MUST start with '$':
$name = "Rahim";
$age = 25;
$age = 26; // Value CAN change

echo $name . " is " . $age . " years old.";`,
    jsCode: `// JavaScript variables use let or const:
const name = "Rahim"; // Cannot change
let age = 25;
age = 26; // Value CAN change

console.log(name + " is " + age + " years old.");`,
    phpFile: "variables.php",
    jsFile: "variables.js",
    phpOutput: `Rahim is 26 years old.`,
    jsOutput: `Rahim is 26 years old.`,
    bullets: [
      "In PHP, EVERY variable starts with '$' ($name, $age).",
      "In JS, variables use 'let' (can change) or 'const' (fixed).",
      "Forgetting '$' in PHP is the #1 beginner syntax error!",
      "Both languages are dynamically typed (no int/string keyword needed)."
    ],
    rule: "Rule: Always put '$' before PHP variable names ($age, not age)!"
  },

  // Slide 4: Data Types
  {
    page: 4,
    type: "comparison",
    title: "2. Data Types — What Kind of Data?",
    badgeIcon: "shapes",
    phpCode: `<?php
$city = "Dhaka";    // String
$price = 99.5;      // Float / Double
$count = 10;        // Integer
$isOpen = true;     // Boolean
$empty = null;      // Null

echo gettype($city) . "\\n";
echo gettype($price) . "\\n";
echo gettype($count) . "\\n";
echo gettype($isOpen);`,
    jsCode: `const city = "Dhaka";    // String
const price = 99.5;      // Number
const count = 10;        // Number
const isOpen = true;     // Boolean
const empty = null;      // Null

console.log(typeof city);
console.log(typeof price);
console.log(typeof count);
console.log(typeof isOpen);`,
    phpFile: "types.php",
    jsFile: "types.js",
    phpOutput: `string\ndouble\ninteger\nboolean`,
    jsOutput: `string\nnumber\nnumber\nboolean`,
    bullets: [
      "String = text wrapped in quotes \" \" or ' '.",
      "Numbers = whole integers and decimals.",
      "Boolean = true or false.",
      "In PHP, use gettype($x); in JS, use typeof x."
    ],
    rule: "In PHP, decimals are 'double/float', whole numbers are 'integer'."
  },

  // Slide 5: Strings & Concatenation
  {
    page: 5,
    type: "comparison",
    title: "3. Strings — Joining Text Together",
    badgeIcon: "font",
    phpCode: `<?php
$name = "Nasir";

// 1. Join strings with the DOT '.' operator:
$greeting = "Hello " . $name . "!";
echo $greeting . "\\n";

// 2. Double quotes automatically parse variables:
echo "Welcome $name to PHP class!\\n";

// 3. String length:
echo "Length: " . strlen($name);`,
    jsCode: `const name = "Nasir";

// 1. Join strings with '+' or template backticks:
const greeting = "Hello " + name + "!";
console.log(greeting);

// 2. Template literals use backticks \` \`:
console.log(\`Welcome \${name} to JS class!\`);

// 3. String length:
console.log("Length: " + name.length);`,
    phpFile: "strings.php",
    jsFile: "strings.js",
    phpOutput: `Hello Nasir!\nWelcome Nasir to PHP class!\nLength: 5`,
    jsOutput: `Hello Nasir!\nWelcome Nasir to JS class!\nLength: 5`,
    bullets: [
      "CRITICAL: In PHP, use the DOT '.' to join strings, NEVER '+'.",
      "In PHP, '+' is strictly for math addition (e.g. 5 + 5 = 10).",
      "Double quotes \"Hello $name\" in PHP interpolate variables directly.",
      "In JS, use backticks `Hello ${name}` or '+' to join strings."
    ],
    rule: "Never write 'Hello ' + $name in PHP! Always use the dot: 'Hello ' . $name."
  },

  // Slide 6: Operators & Math
  {
    page: 6,
    type: "comparison",
    title: "4. Math Operators & Shortcuts",
    badgeIcon: "hash",
    phpCode: `<?php
$a = 10;
$b = 4;

echo ($a + $b) . "\\n"; // 14 (Add)
echo ($a - $b) . "\\n"; // 6  (Subtract)
echo ($a * $b) . "\\n"; // 40 (Multiply)
echo ($a / $b) . "\\n"; // 2.5 (Divide)
echo ($a % $b) . "\\n"; // 2 (Remainder)

// Shortcuts:
$score = 5;
$score += 10; // score = 15
$score++;     // add 1 -> 16
echo $score;`,
    jsCode: `const a = 10;
const b = 4;

console.log(a + b); // 14
console.log(a - b); // 6
console.log(a * b); // 40
console.log(a / b); // 2.5
console.log(a % b); // 2

// Shortcuts:
let score = 5;
score += 10; // score = 15
score++;     // add 1 -> 16
console.log(score);`,
    phpFile: "operators.php",
    jsFile: "operators.js",
    phpOutput: `14\n6\n40\n2.5\n2\n16`,
    jsOutput: `14\n6\n40\n2.5\n2\n16`,
    bullets: [
      "Arithmetic operators (+, -, *, /, %) are identical in both languages.",
      "% gives the remainder (10 % 4 = 2).",
      "+= adds to existing value ($score += 10).",
      "++ increments by 1 ($score++)."
    ],
    rule: "Shortcut: $count++ is identical to count++ in JavaScript."
  },

  // Slide 7: if / else
  {
    page: 7,
    type: "comparison",
    title: "5. Decisions — if / else",
    badgeIcon: "git-fork",
    phpCode: `<?php
$temperature = 35;

if ($temperature > 30) {
    echo "It is hot today!\\n";
    echo "Drink plenty of water.";
} else {
    echo "Nice weather.";
}`,
    jsCode: `const temperature = 35;

if (temperature > 30) {
  console.log("It is hot today!");
  console.log("Drink plenty of water.");
} else {
  console.log("Nice weather.");
}`,
    phpFile: "decisions.php",
    jsFile: "decisions.js",
    phpOutput: `It is hot today!\nDrink plenty of water.`,
    jsOutput: `It is hot today!\nDrink plenty of water.`,
    bullets: [
      "if (condition) { ... } runs when condition is true.",
      "else { ... } runs when condition is false.",
      "Syntax is identical in both PHP and JavaScript!",
      "Only ONE of the two blocks executes."
    ],
    rule: "Use '===' for equality: checks both value AND type."
  },

  // Slide 8: else if Ladder
  {
    page: 8,
    type: "comparison",
    title: "6. Multi-Way Decisions — else if",
    badgeIcon: "list-ordered",
    phpCode: `<?php
$mark = 75;

if ($mark >= 80) {
    $grade = "A+";
} elseif ($mark >= 70) {
    $grade = "A";
} elseif ($mark >= 60) {
    $grade = "B";
} else {
    $grade = "F";
}

echo "Your grade: " . $grade;`,
    jsCode: `const mark = 75;
let grade;

if (mark >= 80) {
  grade = "A+";
} else if (mark >= 70) {
  grade = "A";
} else if (mark >= 60) {
  grade = "B";
} else {
  grade = "F";
}

console.log("Your grade: " + grade);`,
    phpFile: "ladder.php",
    jsFile: "ladder.js",
    phpOutput: `Your grade: A`,
    jsOutput: `Your grade: A`,
    bullets: [
      "Checks conditions from top to bottom.",
      "Stops at the FIRST true condition.",
      "The final else catches everything left.",
      "In PHP, you can write 'elseif' as one word or 'else if' with a space."
    ],
    rule: "Notice: web.php in your project uses this exact else if ladder to route pages!"
  },

  // Slide 9: Loops (for & while)
  {
    page: 9,
    type: "comparison",
    title: "7. Loops — for & while",
    badgeIcon: "repeat",
    phpCode: `<?php
// for loop:
for ($i = 1; $i <= 3; $i++) {
    echo "Round: " . $i . "\\n";
}

// while loop:
$count = 1;
while ($count <= 2) {
    echo "While: " . $count . "\\n";
    $count++;
}`,
    jsCode: `// for loop:
for (let i = 1; i <= 3; i++) {
  console.log("Round: " + i);
}

// while loop:
let count = 1;
while (count <= 2) {
  console.log("While: " + count);
  count++;
}`,
    phpFile: "loops.php",
    jsFile: "loops.js",
    phpOutput: `Round: 1\nRound: 2\nRound: 3\nWhile: 1\nWhile: 2`,
    jsOutput: `Round: 1\nRound: 2\nRound: 3\nWhile: 1\nWhile: 2`,
    bullets: [
      "for loop is ideal when you know the number of rounds in advance.",
      "while loop repeats until its condition becomes false.",
      "Always increment the counter ($count++) to prevent infinite loops!",
      "Identical control structures between PHP and JS."
    ],
    rule: "for ($i = 0; $i < count; $i++) is the universal looping standard."
  },

  // Slide 10: foreach (PHP) vs for...of (JS)
  {
    page: 10,
    type: "comparison",
    title: "8. Looping Over Lists — foreach vs for...of",
    badgeIcon: "layers",
    phpCode: `<?php
$fruits = ["Mango", "Guava", "Lichu"];

// In PHP: foreach ($list as $item)
foreach ($fruits as $fruit) {
    echo $fruit . "\\n";
}

// With index key:
foreach ($fruits as $key => $fruit) {
    echo $key . " => " . $fruit . "\\n";
}`,
    jsCode: `const fruits = ["Mango", "Guava", "Lichu"];

// In JS: for (const item of list)
for (const fruit of fruits) {
  console.log(fruit);
}

// With index:
fruits.forEach((fruit, key) => {
  console.log(key + " => " + fruit);
});`,
    phpFile: "foreach.php",
    jsFile: "forof.js",
    phpOutput: `Mango\nGuava\nLichu\n0 => Mango\n1 => Guava\n2 => Lichu`,
    jsOutput: `Mango\nGuava\nLichu\n0 => Mango\n1 => Guava\n2 => Lichu`,
    bullets: [
      "In PHP, 'foreach' is the most powerful loop for arrays and database results.",
      "Syntax in PHP: foreach ($array as $item) — collection comes first!",
      "Syntax in JS: for (const item of array) — item comes first.",
      "You will see foreach ($students as $student) inside views/home.php!"
    ],
    rule: "PHP: foreach ($collection as $item). Clean, safe, no index errors."
  },

  // Slide 11: Functions
  {
    page: 11,
    type: "comparison",
    title: "9. Functions — Reusable Machines",
    badgeIcon: "cpu",
    phpCode: `<?php
// Function with parameters & return:
function calculateTotal($price, $qty = 1) {
    return $price * $qty;
}

$bill1 = calculateTotal(50, 3); // 150
$bill2 = calculateTotal(100);    // uses default qty=1 -> 100

echo "Bill 1: " . $bill1 . "\\n";
echo "Bill 2: " . $bill2;`,
    jsCode: `// Function with parameters & return:
function calculateTotal(price, qty = 1) {
  return price * qty;
}

const bill1 = calculateTotal(50, 3); // 150
const bill2 = calculateTotal(100);    // default qty=1 -> 100

console.log("Bill 1: " + bill1);
console.log("Bill 2: " + bill2);`,
    phpFile: "functions.php",
    jsFile: "functions.js",
    phpOutput: `Bill 1: 150\nBill 2: 100`,
    jsOutput: `Bill 1: 150\nBill 2: 100`,
    bullets: [
      "Define once, call anywhere: function name($parameters) { ... }.",
      "return sends the calculated value back to where it was called.",
      "Default parameters ($qty = 1) act as fallback if no argument is passed.",
      "helpers.php in your project defines function view($fileName, $data = [])."
    ],
    rule: "echo shows output; return gives the value back to store in a variable."
  },

  // Slide 12: Arrays
  {
    page: 12,
    type: "comparison",
    title: "10. Indexed Arrays — Ordered Lists",
    badgeIcon: "layers",
    phpCode: `<?php
$colors = ["Red", "Green", "Blue"];

echo $colors[0] . "\\n"; // first item (index 0)
echo count($colors) . "\\n"; // 3 items

// Add new item to end:
$colors[] = "Yellow";

// Change an item:
$colors[1] = "Emerald";
echo $colors[1];`,
    jsCode: `const colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // first item (index 0)
console.log(colors.length); // 3 items

// Add new item to end:
colors.push("Yellow");

// Change an item:
colors[1] = "Emerald";
console.log(colors[1]);`,
    phpFile: "arrays.php",
    jsFile: "arrays.js",
    phpOutput: `Red\n3\nEmerald`,
    jsOutput: `Red\n3\nEmerald`,
    bullets: [
      "Counting always begins at index 0 in both languages.",
      "In PHP, count($arr) returns array length; in JS, arr.length.",
      "In PHP, adding to end is as simple as: $colors[] = 'Yellow';",
      "In JS, adding to end uses: colors.push('Yellow')."
    ],
    rule: "In PHP: $arr[] = $new_value automatically pushes to the end!"
  },

  // Slide 13: Associative Arrays vs Objects
  {
    page: 13,
    type: "comparison",
    title: "11. Associative Arrays (PHP) vs Objects (JS)",
    badgeIcon: "key",
    phpCode: `<?php
// Associative array = named keys:
$student = [
    "id" => 1,
    "name" => "Borno",
    "email" => "borno@gmail.com"
];

// Access with brackets and key name:
echo $student["name"] . "\\n";
echo $student["email"];`,
    jsCode: `// Object in JavaScript:
const student = {
  id: 1,
  name: "Borno",
  email: "borno@gmail.com"
};

// Access with dot or bracket:
console.log(student.name);
console.log(student["email"]);`,
    phpFile: "assoc.php",
    jsFile: "objects.js",
    phpOutput: `Borno\nborno@gmail.com`,
    jsOutput: `Borno\nborno@gmail.com`,
    bullets: [
      "In PHP, named key-value pairs are called 'Associative Arrays'.",
      "In JS, named key-value pairs are called 'Objects'.",
      "In PHP, you MUST write $student['name']. You cannot write $student.name!",
      "The fat arrow '=>' connects keys to values in PHP."
    ],
    rule: "PHP: ['name' => 'Borno'] is identical to JS: { name: 'Borno' }."
  },

  // Slide 14: Classes & OOP
  {
    page: 14,
    type: "comparison",
    title: "12. Classes & Constructors — The Blueprint",
    badgeIcon: "factory",
    phpCode: `<?php
// Real Car.php class from your project:
class Car
{
    public $color, $model, $name;

    public function __construct() {
        $this->color = "Red";
        $this->model = "2022";
        $this->name = "Axios - Hybrid";
    }

    public function getName() {
        return $this->name;
    }
}`,
    jsCode: `class Car {
  color;
  model;
  name;

  constructor() {
    this.color = "Red";
    this.model = "2022";
    this.name = "Axios - Hybrid";
  }

  getName() {
    return this.name;
  }
}`,
    phpFile: "Car.php",
    jsFile: "Car.js",
    phpOutput: `Class blueprint declared with constructor and properties!`,
    jsOutput: `Class blueprint declared with constructor and properties!`,
    bullets: [
      "A Class is a blueprint; an Object is the instance in RAM.",
      "Constructor name: In PHP it is '__construct()'; in JS it is 'constructor()'.",
      "Member access: In PHP use arrow '$this->name'; in JS use 'this.name'.",
      "Notice: $this->name does NOT have a second '$' after the arrow!"
    ],
    rule: "PHP constructor = __construct(). JS constructor = constructor()."
  },

  // Slide 15: Instantiation
  {
    page: 15,
    type: "comparison",
    title: "13. Object Instantiation & Method Invocation",
    badgeIcon: "box",
    phpCode: `<?php
// Instantiating the Car object:
$car = new Car();

echo "Name: " . $car->getName() . "\\n";
echo "Color: " . $car->color . "\\n";
echo "Model: " . $car->model;`,
    jsCode: `// Instantiating the Car object:
const car = new Car();

console.log("Name: " + car.getName());
console.log("Color: " + car.color);
console.log("Model: " + car.model);`,
    phpFile: "run_car.php",
    jsFile: "run_car.js",
    phpOutput: `Name: Axios - Hybrid\nColor: Red\nModel: 2022`,
    jsOutput: `Name: Axios - Hybrid\nColor: Red\nModel: 2022`,
    bullets: [
      "Calling 'new Car()' creates a new object in memory and runs the constructor.",
      "Outside the class: in PHP you use '$car->method()'; in JS you use 'car.method()'.",
      "Public properties ($car->color) can be accessed directly.",
      "Both languages instantiate objects with the 'new' keyword."
    ],
    rule: "PHP uses arrow '->' for method calls ($car->getName()). JS uses dot (car.getName())."
  },

  // Slide 16: Project Transition Cover
  {
    page: 16,
    type: "section",
    title: "Phase 2: The Real php-class-two Project",
    subtitle: "Applying everything we just learned into your actual classroom project architecture!",
    badgeIcon: "folder-git-2"
  },

  // Slide 17: Project Folder Structure
  {
    page: 17,
    type: "project-structure",
    title: "14. php-class-two — The Architecture Blueprint",
    badgeIcon: "folder-tree",
    structureText: `php-class-two/
├── app/
│   ├── classes/
│   │   ├── HelloWorld.php      <-- Page Controller
│   │   ├── Car.php             <-- OOP Domain Model
│   │   └── NewClass.php        <-- Practice Class
│   └── helpers/
│       └── helpers.php         <-- 10-line Custom View Engine
├── assets/
│   ├── css/ (bootstrap.min.css, style.css)
│   └── js/  (bootstrap.bundle.min.js, main.js)
├── vendor/
│   └── autoload.php            <-- Composer Autoloader
├── views/
│   ├── includes/ (header.php, footer.php)
│   ├── home.php, about.php, contact.php, login.php
│   └── home.html (static mockup)
├── composer.json               <-- PSR-4 & files config
├── index.php                   <-- Direct Testbench
└── web.php                     <-- Web Front Router (?page=home)`
  },

  // Slide 18: web.php Router
  {
    page: 18,
    type: "comparison",
    title: "15. The Front Router — web.php",
    badgeIcon: "network",
    phpCode: `<?php
// Verified web.php from your project:
require_once "vendor/autoload.php"; 
use App\\classes\\HelloWorld; 

$helloWorld = new HelloWorld(); 

if (isset($_GET['page'])) {
    if ($_GET['page'] == "home") {
        $helloWorld->index(); 
    } elseif ($_GET['page'] == 'about') {
        $helloWorld->about(); 
    } elseif ($_GET['page'] == 'contact') {
        $helloWorld->contact(); 
    } elseif ($_GET['page'] == "login") {
        $helloWorld->login(); 
    }
} else {
    $helloWorld->index(); 
}`,
    jsCode: `// Express.js query router equivalent:
import express from 'express';
import { HelloWorld } from './app/classes/HelloWorld.js';

const app = express();
const helloWorld = new HelloWorld();

app.get('/web.php', (req, res) => {
  const page = req.query.page || 'home';
  if (page === 'home') helloWorld.index(req, res);
  else if (page === 'about') helloWorld.about(req, res);
  else if (page === 'contact') helloWorld.contact(req, res);
  else if (page === 'login') helloWorld.login(req, res);
});`,
    phpFile: "web.php",
    jsFile: "web.js",
    phpOutput: `If URL is web.php?page=about -> calls $helloWorld->about() -> renders views/about.php`,
    jsOutput: `If URL is web.php?page=about -> calls helloWorld.about() -> renders views/about.html`,
    bullets: [
      "$_GET['page'] reads the query parameter from the URL bar.",
      "If someone clicks 'About' in the navbar, it triggers web.php?page=about.",
      "Dispatches to the matching method on the HelloWorld controller.",
      "Defaults to index() (the home page) if no page parameter is given."
    ],
    rule: "This is the Front Controller Pattern used by every professional web framework!"
  },

  // Slide 19: HelloWorld Controller
  {
    page: 19,
    type: "comparison",
    title: "16. The Page Controller — HelloWorld.php",
    badgeIcon: "cpu",
    phpCode: `<?php
// Verified HelloWorld.php from your project:
namespace App\\classes;

class HelloWorld
{
    public $students = [];

    public function index() {
        $this->students = [
            0 => ["id" => 1, "name" => "Borno", "email" => "borno@gmail.com"],
            1 => ["id" => 2, "name" => "Patwari", "email" => "patwari@gmail.com"],
            2 => ["id" => 3, "name" => "Golam", "email" => "golam@gmail.com"]
        ];

        // Hands data to the view helper:
        return view("home", ["students" => $this->students]);
    }

    public function about() {
        return view("about");
    }
}`,
    jsCode: `export class HelloWorld {
  students = [];

  index(req, res) {
    this.students = [
      { id: 1, name: "Borno", email: "borno@gmail.com" },
      { id: 2, name: "Patwari", email: "patwari@gmail.com" },
      { id: 3, name: "Golam", email: "golam@gmail.com" }
    ];

    // In Express:
    return res.render("home", { students: this.students });
  }

  about(req, res) {
    return res.render("about");
  }
}`,
    phpFile: "HelloWorld.php",
    jsFile: "HelloWorld.js",
    phpOutput: `Prepares student records array and invokes view("home", ["students" => ...])`,
    jsOutput: `Prepares student records array and invokes res.render("home", { students: ... })`,
    bullets: [
      "HelloWorld acts as the Controller: it manages data and chooses which view to show.",
      "Notice: it does NOT echo HTML directly! That would break separation of concerns.",
      "Instead, it calls view('home', ['students' => $this->students]).",
      "Notice how the student data is an Array of Associative Arrays!"
    ],
    rule: "Controllers prepare data; Views display HTML."
  },

  // Slide 20: helpers.php view engine
  {
    page: 20,
    type: "comparison",
    title: "17. The View Engine — helpers.php",
    badgeIcon: "wrench",
    phpCode: `<?php
// The 10-line view engine in app/helpers/helpers.php:
function view($fileName, $data = [], $print = true)
{
    $view = "View Not Found"; 
    $filePath = "views/" . $fileName . ".php"; 

    if (file_exists($filePath)) {
        ob_start();          // 1. Trap output in RAM buffer
        extract($data);      // 2. Turns ['students' => $arr] into $students!
        include $filePath;   // 3. Executes views/home.php
        $view = ob_get_clean(); // 4. Grabs compiled HTML string
    }

    if ($print) {
        print $view;         // 5. Flushes HTML to browser
    }
}`,
    jsCode: `// How Node.js template compilers (EJS) work under the hood:
import fs from 'fs';

function view(fileName, data = {}) {
  const filePath = \`views/\${fileName}.html\`;
  let template = fs.readFileSync(filePath, 'utf8');

  // Interpolates variables into template:
  for (const [key, value] of Object.entries(data)) {
    template = template.replaceAll(\`{{\${key}}}\`, JSON.stringify(value));
  }
  return template;
}`,
    phpFile: "helpers.php",
    jsFile: "templateEngine.js",
    phpOutput: `Captures template execution in memory buffer and prints final HTML string`,
    jsOutput: `Replaces template tokens with data and returns final HTML string`,
    bullets: [
      "ob_start() traps all echoed HTML inside server RAM instead of sending early.",
      "extract($data) is magic: ['students' => $arr] becomes a real local variable $students!",
      "include $filePath evaluates the PHP tags inside the HTML template.",
      "ob_get_clean() captures the entire final compiled HTML document into a variable."
    ],
    rule: "ob_start() and extract() are the secret building blocks of modern PHP templating!"
  },

  // Slide 21: Reusable Partials
  {
    page: 21,
    type: "comparison",
    title: "18. Reusable Templates — header.php & footer.php",
    badgeIcon: "layout",
    phpCode: `<!-- views/includes/header.php -->
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
    </nav>`,
    jsCode: `// React Header Component:
export function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">My PHP project</span>
        <ul className="navbar-nav flex-row gap-3">
          <li><a href="web.php?page=home">Home</a></li>
          <li><a href="web.php?page=about">About</a></li>
          <li><a href="web.php?page=contact">Contact</a></li>
          <li><a href="web.php?page=login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}`,
    phpFile: "views/includes/header.php",
    jsFile: "Header.jsx",
    phpOutput: `Navbar rendered once and included across all pages via <?php include "includes/header.php"; ?>`,
    jsOutput: `Header component rendered once and reused across all routes`,
    bullets: [
      "DRY Principle (Don't Repeat Yourself)!",
      "The HTML <head>, Bootstrap CSS link, and navbar live in header.php.",
      "footer.php loads the Bootstrap JavaScript bundle and closes </body></html>.",
      "Every page includes them at the top and bottom."
    ],
    rule: "Change the navbar once in header.php, and every page updates instantly!"
  },

  // Slide 22: home.php Table
  {
    page: 22,
    type: "comparison",
    title: "19. Dynamic Page View — views/home.php",
    badgeIcon: "table",
    phpCode: `<?php include "includes/header.php"; ?>

<section class="py-5 bg-secondary-subtle">
    <div class="container">
        <div class="card">
            <div class="card-header">All Student</div>
            <div class="card-body">
                <table class="table table-bordered">
                    <tr><th>Id</th><th>Name</th><th>Email</th><th>Mobile</th></tr>
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
</section>

<?php include "includes/footer.php"; ?>`,
    jsCode: `// React Home Component:
export function HomeView({ students }) {
  return (
    <div className="card">
      <div className="card-header">All Student</div>
      <table className="table table-bordered">
        <thead>
          <tr><th>Id</th><th>Name</th><th>Email</th><th>Mobile</th></tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
    phpFile: "views/home.php",
    jsFile: "HomeView.jsx",
    phpOutput: `Bootstrap table displaying Borno, Patwari, Golam, etc.`,
    jsOutput: `React table displaying Borno, Patwari, Golam, etc.`,
    bullets: [
      "Where did '$students' come from? The view() helper injected it using extract($data)!",
      "The foreach loop iterates through each student row and creates HTML <tr> and <td> tags.",
      "The result is a responsive Bootstrap table with real data.",
      "header.php at top, footer.php at bottom — clean and modular!"
    ],
    rule: "In PHP templates, foreach is the equivalent of .map() in React JSX."
  },

  // Slide 23: composer.json
  {
    page: 23,
    type: "comparison",
    title: "20. Composer — PSR-4 & Files Autoloading",
    badgeIcon: "file-json",
    phpCode: `// composer.json in php-class-two:
{
  "name": "php-project/php-project",
  "type": "project",
  "autoload": {
    "psr-4": {
      "App\\\\": "app/"
    },
    "files": [
      "app/helpers/helpers.php"
    ]
  }
}`,
    jsCode: `// package.json in Node.js:
{
  "name": "php-project",
  "type": "module",
  "imports": {
    "#app/*": "./app/*"
  }
}`,
    phpFile: "composer.json",
    jsFile: "package.json",
    phpOutput: `PSR-4 maps 'App\\' to 'app/'. Preloads helpers.php automatically on every request.`,
    jsOutput: `Module resolution aliases and dependencies mapped.`,
    bullets: [
      "\"App\\\\\": \"app/\" maps the namespace App\\ to the app/ folder.",
      "When you call 'new App\\classes\\HelloWorld()', Composer finds app/classes/HelloWorld.php.",
      "Why is helpers.php in 'files'? Because procedural functions cannot be autoloaded on-demand by classname!",
      "Composer includes helpers.php immediately at boot time so view() is always available."
    ],
    rule: "PSR-4 is for Classes; 'files' is for procedural Helper functions!"
  },

  // Slide 24: Frontend Assets & Client-Server Wall
  {
    page: 24,
    type: "comparison",
    title: "21. Frontend Assets & The Client-Server Boundary",
    badgeIcon: "palette",
    phpCode: `<!-- In footer.php: -->
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/main.js"></script>

<!-- The Client-Server Timeline:
  1. PHP runs on server (15ms) -> prepares HTML -> STOPS.
  2. Browser receives HTML -> renders CSS -> runs main.js.
  PHP and JavaScript never run at the same time in the same place!
-->`,
    jsCode: `// assets/js/main.js (Client-Side Vanilla JS)
document.addEventListener("DOMContentLoaded", function () {
  const headerNav = document.getElementById("headerNav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 160) {
      headerNav.classList.add("is-sticky");
    } else {
      headerNav.classList.remove("is-sticky");
    }
  });
});`,
    phpFile: "footer.php",
    jsFile: "assets/js/main.js",
    phpOutput: `PHP finishes on server -> HTML sent -> Browser runs main.js for sticky navbar!`,
    jsOutput: `Listens to scroll events in browser and toggles .is-sticky class on navbar!`,
    bullets: [
      "assets/css/ holds Bootstrap CSS and custom style.css.",
      "assets/js/ holds Bootstrap JS bundle and main.js.",
      "main.js runs inside the client's browser to handle scroll events (sticky nav).",
      "PHP cannot handle mouse clicks directly; JavaScript cannot query MySQL directly."
    ],
    rule: "PHP = Server (Backend). JavaScript & CSS = Client Browser (Frontend)."
  },

  // Slide 25: The Complete Flow
  {
    page: 25,
    type: "comparison",
    title: "22. The Complete Request Journey",
    badgeIcon: "globe",
    phpCode: `// The 6-Step Journey of a Request in php-class-two:
1. User clicks: http://localhost/web.php?page=home
2. web.php loads vendor/autoload.php
3. web.php creates $helloWorld = new HelloWorld()
4. HelloWorld::index() prepares $students array
5. view("home", ["students" => $students]) buffers templates:
   header.php + home.php (table loop) + footer.php
6. Web server sends complete HTML to user's browser!`,
    jsCode: `// Express / Node.js equivalent:
1. User requests GET /web.php?page=home
2. Express matches route app.get('/web.php', ...)
3. Controller prepares students array
4. res.render('home', { students }) compiles template
5. Response stream sent to browser!`,
    phpFile: "request_lifecycle.txt",
    jsFile: "express_lifecycle.txt",
    phpOutput: `Complete round-trip: URL -> Router -> Controller -> View Engine -> Assembled HTML -> Browser!`,
    jsOutput: `Complete round-trip: URL -> Route Handler -> Template Compiler -> HTML Response -> Browser!`,
    bullets: [
      "Notice how every folder and file in php-class-two has a dedicated responsibility.",
      "No file is more than 35 lines long!",
      "Logic (app/) is isolated from presentation (views/).",
      "Routing (web.php) is separated from data processing (HelloWorld.php)."
    ],
    rule: "This is how modern software engineers build fast, clean, scalable web applications!"
  },

  // Slide 26: Recap & Congratulations
  {
    page: 26,
    type: "recap",
    title: "A Full Day — You Made It!",
    subtitle: "From Language Basics to Real Web Architecture",
    cards: [
      { title: "Mastered Basics", text: "Variables ($ vs let/const), dot '.' vs '+', foreach vs for...of, functions." },
      { title: "Mastered OOP", text: "Classes, constructors, $this-> arrow operator, Car.php blueprint." },
      { title: "Mastered php-class-two", text: "web.php router, HelloWorld controller, 10-line view engine, Bootstrap views." },
      { title: "Mastered Autoloading", text: "Composer PSR-4 ('App\\' => 'app/') and why helpers.php is in 'files'." }
    ],
    qa: "Questions & Hands-on Discussion",
    instructor: "National Institute of Youth Development (NIYD) · Tarun Soft"
  }
];
