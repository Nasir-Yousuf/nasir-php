export const WORKSHOP_PARTS = [
  { id: 1, title: "Basics", subtitle: "Variables, types, strings, numbers, operators", startPage: 3 },
  { id: 2, title: "Decisions & Loops", subtitle: "if / else, switch, for, foreach, while", startPage: 10 },
  { id: 3, title: "Functions", subtitle: "Reusable code blocks, parameters, return, scope", startPage: 19 },
  { id: 4, title: "Arrays", subtitle: "Lists, associative arrays, dictionaries, array methods", startPage: 24 },
  { id: 5, title: "Classes & OOP", subtitle: "Blueprints, properties, methods, $this, constructors", startPage: 30 },
  { id: 6, title: "Class 1 Project", subtitle: "php-learning: index.php, composer.json, HelloWorld", startPage: 37 },
  { id: 7, title: "Class 2 Project", subtitle: "php-class-two: web.php, views/, helpers.php, assets/", startPage: 44 },
  { id: 8, title: "Playground & Recap", subtitle: "Interactive sandbox, homework projects, questions", startPage: 51 }
];

export const ALL_SLIDES = [
  // Page 1: Cover Slide
  {
    page: 1,
    type: "cover",
    title: "PHP & JavaScript",
    subtitle: "Full Day Classroom Workshop — Basics to Real Projects, Step by Step",
    org: "National Institute of Youth Development (NIYD)",
    footerNote: "Every example is complete — click Run, tweak code, and explore!",
    badgeIcon: "code"
  },

  // Page 2: Roadmap Grid
  {
    page: 2,
    type: "roadmap",
    title: "Today's Journey — 8 Parts",
    subtitle: "From your very first variable to modular web application architecture",
    footerNote: "How to try every example: click the 'Run Code' button or press Enter",
    badgeIcon: "rocket"
  },

  // Page 3: What is PHP vs JavaScript?
  {
    page: 3,
    type: "lesson",
    part: 1,
    title: "What is PHP vs JavaScript?",
    badgeIcon: "globe",
    filename: "client-server.php",
    codePHP: `<?php
// PHP runs on the SERVER before HTML is sent:
$greeting = "Hello from the PHP Server!";
echo $greeting;
?>
<!-- The browser only sees plain text/HTML! -->`,
    codeJS: `// JavaScript runs in the CLIENT BROWSER:
const greeting = "Hello from the Client Browser!";
console.log(greeting);
alert(greeting);`,
    bullets: [
      "HTML makes the skeleton. CSS makes it beautiful.",
      "PHP runs on the SERVER to prepare data and generate HTML.",
      "JavaScript runs in the BROWSER to handle clicks and animations.",
      "PHP finishes and stops before JavaScript even starts!"
    ],
    outputPHP: `Hello from the PHP Server!`,
    outputJS: `Hello from the Client Browser!`,
    tip: "Remember: PHP creates the page; JavaScript makes it interactive."
  },

  // Page 4: Variables
  {
    page: 4,
    type: "lesson",
    part: 1,
    title: "Variables — Storing Values",
    badgeIcon: "box",
    filename: "variables.php",
    codePHP: `<?php
// In PHP, EVERY variable starts with '$':
$age = 25;
$age = 26; // Value CAN change

$name = "Rahim";
echo $name . " is " . $age . " years old.";`,
    codeJS: `// In JS, variables use let or const (no '$'):
let age = 25;
age = 26; // Value CAN change

const name = "Rahim"; // Fixed, cannot change
console.log(name + " is " + age + " years old.");`,
    bullets: [
      "A variable is a labeled container that stores a value.",
      "In PHP, variables ALWAYS start with the dollar sign '$'.",
      "In JS, 'let' allows changes; 'const' keeps it fixed.",
      "Rule: Never forget '$' in PHP ($age, not age)!"
    ],
    outputPHP: `Rahim is 26 years old.`,
    outputJS: `Rahim is 26 years old.`,
    tip: "Common student bug: forgetting the '$' when writing PHP variables!"
  },

  // Page 5: Data Types
  {
    page: 5,
    type: "lesson",
    part: 1,
    title: "Data Types — The Kinds of Data",
    badgeIcon: "shapes",
    filename: "types.php",
    codePHP: `<?php
$city = "Dhaka";    // String (text in quotes)
$price = 99.5;      // Float / Double (decimal)
$count = 10;        // Integer (whole number)
$isOpen = true;     // Boolean (true or false)
$empty = null;      // Null (empty)

echo gettype($city) . "\\n";
echo gettype($price) . "\\n";
echo gettype($count) . "\\n";
echo gettype($isOpen);`,
    codeJS: `const city = "Dhaka";    // String
const price = 99.5;      // Number
const count = 10;        // Number
const isOpen = true;     // Boolean
const empty = null;      // Null

console.log(typeof city);
console.log(typeof price);
console.log(typeof count);
console.log(typeof isOpen);`,
    bullets: [
      "String = text, always wrapped in quotes ' ' or \" \".",
      "Number = integers (10) and floats (99.5) — no quotes.",
      "Boolean = true or false (decisions).",
      "In PHP, gettype($var) tells you the type; in JS, typeof tells you."
    ],
    outputPHP: `string\ndouble\ninteger\nboolean`,
    outputJS: `string\nnumber\nnumber\nboolean`,
    tip: "If you put numbers in quotes like '99.5', PHP treats it as text!"
  },

  // Page 6: Strings & Concatenation
  {
    page: 6,
    type: "lesson",
    part: 1,
    title: "Strings — Working with Text",
    badgeIcon: "font",
    filename: "strings.php",
    codePHP: `<?php
$msg = "PHP is fun";

// 1. Length of string:
echo strlen($msg) . "\\n";

// 2. Uppercase and Lowercase:
echo strtoupper($msg) . "\\n";
echo strtolower($msg) . "\\n";

// 3. String Concatenation uses the DOT '.':
$name = "Nasir";
echo "Hello " . $name . ", welcome!";`,
    codeJS: `const msg = "JavaScript is fun";

// 1. Length of string:
console.log(msg.length);

// 2. Uppercase and Lowercase:
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

// 3. String Concatenation uses '+' or \` \`:
const name = "Nasir";
console.log("Hello " + name + ", welcome!");`,
    bullets: [
      "In PHP, join strings with the DOT '.' operator!",
      "The plus '+' sign in PHP is strictly for math addition.",
      "Double quotes \"Hello $name\" parse variables automatically in PHP.",
      "strlen() in PHP equals .length in JavaScript."
    ],
    outputPHP: `10\nPHP IS FUN\nphp is fun\nHello Nasir, welcome!`,
    outputJS: `17\nJAVASCRIPT IS FUN\njavascript is fun\nHello Nasir, welcome!`,
    tip: "Critical Rule: In PHP, Dot ('.') glues text. Plus ('+') is only for numbers!"
  },

  // Page 7: Numbers & Math
  {
    page: 7,
    type: "lesson",
    part: 1,
    title: "Numbers & Math Operations",
    badgeIcon: "calculator",
    filename: "numbers.php",
    codePHP: `<?php
$price = 99.567;

// Round to 2 decimal places:
echo round($price, 2) . "\\n";

// Round down (floor) and up (ceil):
echo floor(4.6) . "\\n";
echo ceil(4.2) . "\\n";

// Biggest & Random:
echo max(3, 7, 2) . "\\n";
echo rand(1, 10); // Random between 1 and 10`,
    codeJS: `const price = 99.567;

// Round to 2 decimal places:
console.log(price.toFixed(2));

// Round down (floor) and up (ceil):
console.log(Math.floor(4.6));
console.log(Math.ceil(4.2));

// Biggest & Random:
console.log(Math.max(3, 7, 2));
console.log(Math.floor(Math.random() * 10) + 1);`,
    bullets: [
      "+, -, *, / work like a calculator in both languages.",
      "% gives the remainder (10 % 4 = 2).",
      "PHP provides built-in math functions: round(), floor(), ceil(), max().",
      "rand(min, max) in PHP gives an instant random integer!"
    ],
    outputPHP: `99.57\n4\n5\n7\n8 (random 1-10)`,
    outputJS: `"99.57"\n4\n5\n7\n8 (random 1-10)`,
    tip: "In PHP, math functions are simple global functions (no Math. prefix needed!)."
  },

  // Page 8: Operators & Comparison
  {
    page: 8,
    type: "lesson",
    part: 1,
    title: "Operators — Math & Shortcuts",
    badgeIcon: "hash",
    filename: "operators.php",
    codePHP: `<?php
$a = 10;
$b = 4;

echo ($a + $b) . "\\n"; // 14 (add)
echo ($a - $b) . "\\n"; // 6  (subtract)
echo ($a * $b) . "\\n"; // 40 (multiply)
echo ($a / $b) . "\\n"; // 2.5 (divide)
echo ($a % $b) . "\\n"; // 2 (remainder)

// Shortcuts:
$score = 5;
$score += 10; // score = score + 10
$score++;     // add 1
echo $score;  // 16`,
    codeJS: `const a = 10, b = 4;

console.log(a + b); // 14
console.log(a - b); // 6
console.log(a * b); // 40
console.log(a / b); // 2.5
console.log(a % b); // 2

// Shortcuts:
let score = 5;
score += 10;
score++;
console.log(score); // 16`,
    bullets: [
      "+= adds to the current value ($score += 10).",
      "++ adds exactly 1 (great for loop counters).",
      "-- subtracts exactly 1.",
      "% gives the remainder (useful to check even or odd numbers)."
    ],
    outputPHP: `14\n6\n40\n2.5\n2\n16`,
    outputJS: `14\n6\n40\n2.5\n2\n16`,
    tip: "$x++ is shorthand for $x = $x + 1."
  },

  // Page 9: Compare & Combine
  {
    page: 9,
    type: "lesson",
    part: 1,
    title: "Compare & Combine Conditions",
    badgeIcon: "handshake",
    filename: "compare.php",
    codePHP: `<?php
$age = 20;

echo ($age > 18 ? "true" : "false") . "\\n";
echo ($age === 20 ? "true" : "false") . "\\n";

// Combine conditions:
// && = AND (both must be true)
// || = OR (at least one is true)
$isStudent = true;
if ($age > 18 && $isStudent) {
    echo "Eligible for youth discount!\\n";
}

// The famous trap:
// == checks value only; === checks value AND type!
var_dump(5 == "5");  // bool(true)
var_dump(5 === "5"); // bool(false)`,
    codeJS: `const age = 20;

console.log(age > 18);
console.log(age === 20);

// Combine:
const isStudent = true;
if (age > 18 && isStudent) {
  console.log("Eligible for youth discount!");
}

// The trap:
console.log(5 == "5");  // true
console.log(5 === "5"); // false`,
    bullets: [
      "Comparing always gives true or false.",
      "&& = AND (both conditions must be true).",
      "|| = OR (at least one condition must be true).",
      "Always prefer === (strict comparison) over == to avoid subtle bugs."
    ],
    outputPHP: `true\ntrue\nEligible for youth discount!\nbool(true)\nbool(false)`,
    outputJS: `true\ntrue\nEligible for youth discount!\ntrue\nfalse`,
    tip: "Use '===' whenever possible — it checks both the value and the type!"
  },

  // Page 10: Part 2 Cover
  {
    page: 10,
    type: "section",
    part: 2,
    title: "Decisions & Loops",
    subtitle: "if / else · switch · ternary · for · foreach · while · break",
    badgeIcon: "git-branch"
  },

  // Page 11: if / else
  {
    page: 11,
    type: "lesson",
    part: 2,
    title: "if / else — Two Roads",
    badgeIcon: "git-fork",
    filename: "weather.php",
    codePHP: `<?php
$temperature = 35;

if ($temperature > 30) {
    echo "It is hot today!\\n";
    echo "Drink plenty of water.";
} else {
    echo "Nice weather.";
}`,
    codeJS: `const temperature = 35;

if (temperature > 30) {
  console.log("It is hot today!");
  console.log("Drink plenty of water.");
} else {
  console.log("Nice weather.");
}`,
    bullets: [
      "if (condition) → executes when condition is true.",
      "else → executes when condition is false.",
      "Only ONE of the two blocks will execute.",
      "Syntax is identical in PHP and JavaScript!"
    ],
    outputPHP: `It is hot today!\nDrink plenty of water.`,
    outputJS: `It is hot today!\nDrink plenty of water.`,
    tip: "Change 35 to 20 and click Run to see the else branch execute!"
  },

  // Page 12: else if Ladder
  {
    page: 12,
    type: "lesson",
    part: 2,
    title: "else if — The Grading Ladder",
    badgeIcon: "list-ordered",
    filename: "grades.php",
    codePHP: `<?php
$mark = 75;

if ($mark >= 80) {
    $grade = "A+";
} elseif ($mark >= 70) {
    $grade = "A";
} elseif ($mark >= 60) {
    $grade = "B";
} elseif ($mark >= 50) {
    $grade = "C";
} else {
    $grade = "F";
}

echo "Your grade: " . $grade;`,
    codeJS: `const mark = 75;
let grade;

if (mark >= 80) grade = "A+";
else if (mark >= 70) grade = "A";
else if (mark >= 60) grade = "B";
else if (mark >= 50) grade = "C";
else grade = "F";

console.log("Your grade:", grade);`,
    bullets: [
      "Checks conditions from top to bottom.",
      "Stops at the FIRST condition that is true.",
      "The final else catches everything left.",
      "In PHP, you can write 'elseif' or 'else if' interchangeably."
    ],
    outputPHP: `Your grade: A`,
    outputJS: `Your grade: A`,
    tip: "Look at web.php in your project — it uses this exact elseif ladder to check $_GET['page']!"
  },

  // Page 13: switch
  {
    page: 13,
    type: "lesson",
    part: 2,
    title: "switch — Many Fixed Choices",
    badgeIcon: "git-commit",
    filename: "days.php",
    codePHP: `<?php
$day = "Friday";

switch ($day) {
    case "Friday":
        echo "Weekend starts!";
        break;
    case "Sunday":
        echo "Back to work.";
        break;
    default:
        echo "A normal day.";
}`,
    codeJS: `const day = "Friday";

switch (day) {
  case "Friday":
    console.log("Weekend starts!");
    break;
  case "Sunday":
    console.log("Back to work.");
    break;
  default:
    console.log("A normal day.");
}`,
    bullets: [
      "Use when one variable has many fixed string or number options.",
      "case = one specific option.",
      "break is essential — without break, execution leaks into the next case!",
      "default = like else, catches anything that didn't match."
    ],
    outputPHP: `Weekend starts!`,
    outputJS: `Weekend starts!`,
    tip: "In PHP 8.0+, you can also use the modern 'match' expression!"
  },

  // Page 14: Ternary
  {
    page: 14,
    type: "lesson",
    part: 2,
    title: "Ternary — if / else in One Line",
    badgeIcon: "zap",
    filename: "ternary.php",
    codePHP: `<?php
$mark = 75;

// condition ? ifTrue : ifFalse
$result = $mark >= 60 ? "Pass" : "Fail";
echo $result . "\\n";

$age = 16;
$ticket = $age < 18 ? "Child" : "Adult";
echo $ticket;`,
    codeJS: `const mark = 75;

// condition ? ifTrue : ifFalse
const result = mark >= 60 ? "Pass" : "Fail";
console.log(result);

const age = 16;
const ticket = age < 18 ? "Child" : "Adult";
console.log(ticket);`,
    bullets: [
      "A clean shortcut to choose between 2 values in a single line.",
      "Formula: condition ? valueIfTrue : valueIfFalse.",
      "Great for assigning variables based on a quick check.",
      "For 3 or more branches, stick with if / elseif."
    ],
    outputPHP: `Pass\nChild`,
    outputJS: `Pass\nChild`,
    tip: "Read it as: 'Is it true? Yes-value : No-value'."
  },

  // Page 15: for loop
  {
    page: 15,
    type: "lesson",
    part: 2,
    title: "for — Count and Repeat",
    badgeIcon: "repeat",
    filename: "for.php",
    codePHP: `<?php
// start ; condition ; step
for ($i = 1; $i <= 3; $i++) {
    echo "Number: " . $i . "\\n";
}

// Counting down:
for ($i = 3; $i >= 1; $i--) {
    echo "Countdown: " . $i . "\\n";
}
echo "Go!";`,
    codeJS: `for (let i = 1; i <= 3; i++) {
  console.log("Number:", i);
}

for (let i = 3; i >= 1; i--) {
  console.log("Countdown:", i);
}
console.log("Go!");`,
    bullets: [
      "$i = 1 → starting point.",
      "$i <= 3 → keep repeating while this is true.",
      "$i++ → increment by 1 after each round.",
      "Change 3 to 100 — loops can do hours of manual work in 1 millisecond!"
    ],
    outputPHP: `Number: 1\nNumber: 2\nNumber: 3\nCountdown: 3\nCountdown: 2\nCountdown: 1\nGo!`,
    outputJS: `Number: 1\nNumber: 2\nNumber: 3\nCountdown: 3\nCountdown: 2\nCountdown: 1\nGo!`,
    tip: "The 3 parts are separated by semicolons ';'!"
  },

  // Page 16: while loop
  {
    page: 16,
    type: "lesson",
    part: 2,
    title: "while — Repeat Until Done",
    badgeIcon: "clock",
    filename: "while.php",
    codePHP: `<?php
$count = 1;

while ($count <= 3) {
    echo "While: " . $count . "\\n";
    $count++; // never forget to advance!
}

// do...while runs at least ONCE:
$n = 10;
do {
    echo "I ran once anyway!";
} while ($n < 5);`,
    codeJS: `let count = 1;

while (count <= 3) {
  console.log("While:", count);
  count++;
}

let n = 10;
do {
  console.log("I ran once anyway!");
} while (n < 5);`,
    bullets: [
      "Use 'while' when you don't know the exact count in advance.",
      "Forgetting '$count++' creates an infinite loop (freezes server)!",
      "'do...while' checks condition AFTER running, so it runs at least once.",
      "Rule: for = known number of times, while = until condition changes."
    ],
    outputPHP: `While: 1\nWhile: 2\nWhile: 3\nI ran once anyway!`,
    outputJS: `While: 1\nWhile: 2\nWhile: 3\nI ran once anyway!`,
    tip: "Always ensure the condition will eventually become false!"
  },

  // Page 17: foreach vs for...of
  {
    page: 17,
    type: "lesson",
    part: 2,
    title: "foreach — Looping Over Lists",
    badgeIcon: "layers",
    filename: "foreach.php",
    codePHP: `<?php
$fruits = ["Mango", "Guava", "Lichu"];

// 1. Loop through values:
foreach ($fruits as $fruit) {
    echo $fruit . "\\n";
}

// 2. Loop with index key and value:
foreach ($fruits as $index => $fruit) {
    echo "Index " . $index . " = " . $fruit . "\\n";
}`,
    codeJS: `const fruits = ["Mango", "Guava", "Lichu"];

// 1. for...of loop in JS:
for (const fruit of fruits) {
  console.log(fruit);
}

// 2. with index:
fruits.forEach((fruit, index) => {
  console.log("Index " + index + " = " + fruit);
});`,
    bullets: [
      "In PHP, 'foreach' is the #1 most used loop for arrays and database results.",
      "Syntax: foreach ($array as $item) or foreach ($array as $key => $value).",
      "No index counting, no i++, no off-by-one errors.",
      "Look at views/home.php: this exact loop renders the student table rows!"
    ],
    outputPHP: `Mango\nGuava\nLichu\nIndex 0 = Mango\nIndex 1 = Guava\nIndex 2 = Lichu`,
    outputJS: `Mango\nGuava\nLichu\nIndex 0 = Mango\nIndex 1 = Guava\nIndex 2 = Lichu`,
    tip: "In PHP: collection comes first ($fruits as $fruit)."
  },

  // Page 18: break & continue
  {
    page: 18,
    type: "lesson",
    part: 2,
    title: "break & continue — Loop Controls",
    badgeIcon: "wrench",
    filename: "control.php",
    codePHP: `<?php
for ($i = 1; $i <= 10; $i++) {
    if ($i === 3) {
        continue; // skip number 3!
    }
    if ($i === 6) {
        break;    // stop loop completely at 6!
    }
    echo $i . "\\n";
}`,
    codeJS: `for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue; // skip 3
  }
  if (i === 6) {
    break;    // stop completely
  }
  console.log(i);
}`,
    bullets: [
      "continue → skip this round, jump immediately to the next.",
      "break → exit the loop completely right now.",
      "Notice 3 is missing from output (skipped).",
      "Notice 5 is the last printed number (6 stopped the loop)."
    ],
    outputPHP: `1\n2\n4\n5`,
    outputJS: `1\n2\n4\n5`,
    tip: "continue = skip, break = stop."
  },

  // Page 19: Part 3 Cover
  {
    page: 19,
    type: "section",
    part: 3,
    title: "Functions",
    subtitle: "Declarations · Parameters · Return · Scope · Global helpers",
    badgeIcon: "cpu"
  },

  // Page 20: Functions Write Once
  {
    page: 20,
    type: "lesson",
    part: 3,
    title: "Functions — Write Once, Use Forever",
    badgeIcon: "settings",
    filename: "functions.php",
    codePHP: `<?php
// 1. Define the machine once:
function greet($name) {
    echo "Hello, " . $name . "!\\n";
}

// 2. Call it as many times as you want:
greet("Rahim");
greet("Karim");
greet("Ayesha");`,
    codeJS: `// 1. Define once:
function greet(name) {
  console.log("Hello, " + name + "!");
}

// 2. Call many times:
greet("Rahim");
greet("Karim");
greet("Ayesha");`,
    bullets: [
      "A function bundles code into a reusable machine.",
      "function name($parameter) { ... }",
      "No more copy-pasting the same code 10 times!",
      "In your project, helpers.php defines the global view() function this way."
    ],
    outputPHP: `Hello, Rahim!\nHello, Karim!\nHello, Ayesha!`,
    outputJS: `Hello, Rahim!\nHello, Karim!\nHello, Ayesha!`,
    tip: "Functions only execute when you call them with parenthesized arguments."
  },

  // Page 21: Parameters & Default Values
  {
    page: 21,
    type: "lesson",
    part: 3,
    title: "Default Parameters & Return",
    badgeIcon: "package",
    filename: "return.php",
    codePHP: `<?php
// return sends the result back:
function total($price, $qty) {
    return $price * $qty;
}

$bill = total(50, 3);
echo "Bill: " . $bill . "\\n";

// Default value if nothing is passed:
function makeTea($sugar = 2) {
    return "Tea with " . $sugar . " spoons of sugar";
}

echo makeTea() . "\\n";  // uses default 2
echo makeTea(5);        // uses 5`,
    codeJS: `function total(price, qty) {
  return price * qty;
}

const bill = total(50, 3);
console.log("Bill: " + bill);

function makeTea(sugar = 2) {
  return \`Tea with \${sugar} spoons of sugar\`;
}

console.log(makeTea());
console.log(makeTea(5));`,
    bullets: [
      "echo = print to screen right away.",
      "return = hand the calculated value back to the caller.",
      "$sugar = 2 sets a fallback default if no value is passed.",
      "After a function hits 'return', it exits immediately."
    ],
    outputPHP: `Bill: 150\nTea with 2 spoons of sugar\nTea with 5 spoons of sugar`,
    outputJS: `Bill: 150\nTea with 2 spoons of sugar\nTea with 5 spoons of sugar`,
    tip: "In helpers.php: function view($fileName, $data = [], $print = true) uses default parameters!"
  },

  // Page 22: Function Scope
  {
    page: 22,
    type: "lesson",
    part: 3,
    title: "Scope — Where Variables Live",
    badgeIcon: "shield",
    filename: "scope.php",
    codePHP: `<?php
$appName = "MyPHPApp"; // Global variable

function showApp() {
    // In PHP, outer global variables are NOT visible inside
    // functions unless explicitly requested:
    global $appName;
    $localUser = "Rahim"; // Local variable
    echo $appName . " running for " . $localUser . "\\n";
}

showApp();
// echo $localUser; // Error! $localUser only lives inside the function`,
    codeJS: `const appName = "MyJSApp"; // Global

function showApp() {
  // In JS, inner functions CAN see outer variables automatically:
  const localUser = "Rahim";
  console.log(appName + " running for " + localUser);
}

showApp();
// console.log(localUser); // Error!`,
    bullets: [
      "Global = declared outside, accessible globally.",
      "Local = declared inside a function, dies when function finishes.",
      "Key PHP distinction: to use a global variable inside a function, you must write 'global $var'.",
      "Isolating variables prevents accidental overrides in large programs."
    ],
    outputPHP: `MyPHPApp running for Rahim`,
    outputJS: `MyJSApp running for Rahim`,
    tip: "Unlike JavaScript closures, PHP functions do not automatically inherit global scope."
  },

  // Page 23: Part 4 Cover
  {
    page: 23,
    type: "section",
    part: 4,
    title: "Arrays & Data Lists",
    subtitle: "Indexed arrays · Associative arrays (dictionaries) · Arrays of Objects",
    badgeIcon: "database"
  },

  // Page 24: Indexed Arrays
  {
    page: 24,
    type: "lesson",
    part: 4,
    title: "Indexed Arrays — A List of Values",
    badgeIcon: "layers",
    filename: "arrays.php",
    codePHP: `<?php
$fruits = ["Mango", "Guava", "Lichu"];

echo $fruits[0] . "\\n"; // first (counting starts at 0!)
echo $fruits[2] . "\\n"; // third
echo count($fruits) . "\\n"; // how many items (3)

// Change an item:
$fruits[1] = "Banana";
print_r($fruits);`,
    codeJS: `const fruits = ["Mango", "Guava", "Lichu"];

console.log(fruits[0]); // first
console.log(fruits[2]); // third
console.log(fruits.length); // 3

// Change an item:
fruits[1] = "Banana";
console.log(fruits);`,
    bullets: [
      "An array is a list of items: [item1, item2, item3].",
      "Counting starts at index 0, not 1!",
      "count($fruits) in PHP equals fruits.length in JavaScript.",
      "print_r($fruits) in PHP prints a readable visual tree of an array."
    ],
    outputPHP: `Mango\nLichu\n3\nArray\n(\n    [0] => Mango\n    [1] => Banana\n    [2] => Lichu\n)`,
    outputJS: `Mango\nLichu\n3\n["Mango", "Banana", "Lichu"]`,
    tip: "print_r() is your best debugging friend in PHP!"
  },

  // Page 25: Associative Arrays (PHP) vs Objects (JS)
  {
    page: 25,
    type: "lesson",
    part: 4,
    title: "Associative Arrays — Key : Value Pairs",
    badgeIcon: "key",
    filename: "assoc.php",
    codePHP: `<?php
// Associative array = named keys instead of 0, 1, 2:
$student = [
    "name" => "Ayesha",
    "email" => "ayesha@gmail.com",
    "department" => "CSE"
];

// Access with brackets and key name:
echo $student["name"] . "\\n";
echo $student["department"] . "\\n";

// Add a new key:
$student["city"] = "Dhaka";
echo $student["city"];`,
    codeJS: `// In JavaScript, this is an Object:
const student = {
  name: "Ayesha",
  email: "ayesha@gmail.com",
  department: "CSE"
};

// Access with dot or bracket:
console.log(student.name);
console.log(student.department);

// Add key:
student.city = "Dhaka";
console.log(student.city);`,
    bullets: [
      "In PHP, named pairs use fat arrow: 'key' => 'value'.",
      "In JS, named pairs are written as an Object: { key: 'value' }.",
      "In PHP, you CANNOT use dot ($student.name is invalid!). You MUST write $student['name'].",
      "This is how databases and APIs return single records."
    ],
    outputPHP: `Ayesha\nCSE\nDhaka`,
    outputJS: `Ayesha\nCSE\nDhaka`,
    tip: "Associative arrays in PHP are the exact twin of JavaScript Objects!"
  },

  // Page 26: Arrays of Associative Arrays (Real Project Data!)
  {
    page: 26,
    type: "lesson",
    part: 4,
    title: "Arrays of Arrays — Real Student Roster",
    badgeIcon: "users",
    filename: "students.php",
    codePHP: `<?php
// The exact data model from HelloWorld.php in php-class-two!
$students = [
    0 => ["id" => 1, "name" => "Borno", "email" => "borno@gmail.com"],
    1 => ["id" => 2, "name" => "Patwari", "email" => "patwari@gmail.com"],
    2 => ["id" => 3, "name" => "Golam", "email" => "golam@gmail.com"]
];

foreach ($students as $student) {
    echo "ID " . $student["id"] . ": " . $student["name"] . " (" . $student["email"] . ")\\n";
}`,
    codeJS: `// Array of Objects in JS:
const students = [
  { id: 1, name: "Borno", email: "borno@gmail.com" },
  { id: 2, name: "Patwari", email: "patwari@gmail.com" },
  { id: 3, name: "Golam", email: "golam@gmail.com" }
];

students.forEach(student => {
  console.log(\`ID \${student.id}: \${student.name} (\${student.email})\`);
});`,
    bullets: [
      "This is the shape of ALL real database tables in web development.",
      "An outer list, where each item is an associative array (row).",
      "Look at line 20 of HelloWorld.php in Class 2 — this is the exact code!",
      "views/home.php loops over this array to create the table rows."
    ],
    outputPHP: `ID 1: Borno (borno@gmail.com)\nID 2: Patwari (patwari@gmail.com)\nID 3: Golam (golam@gmail.com)`,
    outputJS: `ID 1: Borno (borno@gmail.com)\nID 2: Patwari (patwari@gmail.com)\nID 3: Golam (golam@gmail.com)`,
    tip: "Notice: $student['name'] inside the foreach loop extracts the name from each row."
  },

  // Page 27: Part 5 Cover
  {
    page: 27,
    type: "section",
    part: 5,
    title: "Classes & OOP",
    subtitle: "Blueprints · Properties · Methods · $this · __construct · Objects",
    badgeIcon: "box"
  },

  // Page 28: What is a Class?
  {
    page: 28,
    type: "lesson",
    part: 5,
    title: "Classes — The Factory Blueprint",
    badgeIcon: "factory",
    filename: "Car.php",
    codePHP: `<?php
// Verified Car.php from your project:
namespace App\\classes;

class Car
{
    public $color, $model, $name;

    public function __construct() {
        $this->color = "Red";
        $this->model = "2022";
        $this->name = "Axios - Hybrid";
    }

    public function allInfo() {
        echo "Car name: " . $this->name . "\\n";
        echo "Car model: " . $this->model . "\\n";
        echo "Car color: " . $this->color;
    }
}

// Create an instance:
$car = new Car();
$car->allInfo();`,
    codeJS: `class Car {
  constructor() {
    this.color = "Red";
    this.model = "2022";
    this.name = "Axios - Hybrid";
  }

  allInfo() {
    console.log("Car name: " + this.name);
    console.log("Car model: " + this.model);
    console.log("Car color: " + this.color);
  }
}

const car = new Car();
car.allInfo();`,
    bullets: [
      "A Class is a cookie cutter (blueprint); an Object is the actual cookie in RAM.",
      "Properties ($color, $model, $name) store the object's data.",
      "__construct() is a Magic Method that runs automatically when 'new Car()' is called.",
      "Inside the class, use '$this->name'. In JS, use 'this.name'."
    ],
    outputPHP: `Car name: Axios - Hybrid\nCar model: 2022\nCar color: Red`,
    outputJS: `Car name: Axios - Hybrid\nCar model: 2022\nCar color: Red`,
    tip: "In PHP, member access uses the arrow '->', NOT the dot '.'!"
  },

  // Page 29: Student Bug Spotting (NewClass.php)
  {
    page: 29,
    type: "lesson",
    part: 5,
    title: "Spot the Bug: $this->$name vs $this->name",
    badgeIcon: "alert-triangle",
    filename: "NewClass.php",
    codePHP: `<?php
// From NewClass.php in your classroom project:
class NewClass
{
    public $name, $age;

    public function __construct() {
        // BUG: In PHP, $this->$name looks for a variable called $name!
        // It should NOT have the second dollar sign!
        // $this->$name = "Nasir"; // Warning: Undefined variable $name

        // CORRECT:
        $this->name = "Nasir";
        $this->age = 21;
    }

    public function introduce() {
        echo $this->name . " is " . $this->age . " years old.";
    }
}

$person = new NewClass();
$person->introduce();`,
    codeJS: `class NewClass {
  constructor() {
    // In JS: this.name = "Nasir"
    this.name = "Nasir";
    this.age = 21;
  }
  introduce() {
    console.log(this.name + " is " + this.age + " years old.");
  }
}
const person = new NewClass();
person.introduce();`,
    bullets: [
      "Classic beginner bug: writing '$this->$name' instead of '$this->name'.",
      "In PHP, '$this->$name' evaluates $name first as a dynamic variable name (variable variables).",
      "Always write '$this->propertyName' without the '$' after the arrow.",
      "Spotting this in your own project proves you understand PHP property syntax!"
    ],
    outputPHP: `Nasir is 21 years old.`,
    outputJS: `Nasir is 21 years old.`,
    tip: "Rule: The '$' goes before $this, NEVER after the arrow '->'!"
  },

  // Page 30: Part 6 Cover
  {
    page: 30,
    type: "section",
    part: 6,
    title: "Class 1 Project: php-learning",
    subtitle: "The Foundation: index.php + composer.json + app/classes/HelloWorld.php",
    badgeIcon: "folder-git-2"
  },

  // Page 31: Class 1 Big Question
  {
    page: 31,
    type: "lesson",
    part: 6,
    title: "Class 1 — Why 3 Pieces for Hello World?",
    badgeIcon: "lightbulb",
    filename: "architecture-concept.txt",
    codePHP: `<?php
// The 1-file beginner way (Messy):
// index.php
echo "Hello World";
// What happens when you add 20 database queries and 500 lines of HTML?
// It becomes unreadable spaghetti!

// The Class 1 Professional Way (Modular):
// 1. Entry Point:    index.php           (Boots app)
// 2. Autoloader:     composer.json       (Finds files)
// 3. Logic Blueprint: HelloWorld.php     (Holds data)`,
    codeJS: `// In Node.js / Modern JavaScript, we do the EXACT same thing:
// 1. package.json    -> defines project dependencies
// 2. index.js        -> entry point
// 3. HelloWorld.js   -> class module`,
    bullets: [
      "Putting everything in index.php works for 5 lines, but fails in real companies.",
      "Class 1 teaches the gold standard of PHP software architecture.",
      "Separating code into Classes makes it reusable, testable, and clean.",
      "Composer eliminates manual require_once statements."
    ],
    outputPHP: `[Clean Architecture] Code is separated into Entry, Autoloader, and Blueprint!`,
    outputJS: `[Clean Architecture] Code is separated into Entry, Autoloader, and Blueprint!`,
    tip: "Think of index.php as the ignition key, and HelloWorld as the engine."
  },

  // Page 32: Class 1 Code
  {
    page: 32,
    type: "lesson",
    part: 6,
    title: "Class 1 Source Code — Line by Line",
    badgeIcon: "file-code",
    filename: "index.php",
    codePHP: `<?php
// 1. Load Composer autoloader:
require_once "vendor/autoload.php";

// 2. Import HelloWorld into local scope:
use App\\classes\\HelloWorld;

// 3. Create an object instance:
$helloWorld = new HelloWorld();

// 4. Run the index method:
$helloWorld->index();`,
    codeJS: `// JS equivalent:
import { HelloWorld } from './app/classes/HelloWorld.js';

const helloWorld = new HelloWorld();
helloWorld.index();`,
    bullets: [
      "Line 3: 'vendor/autoload.php' is Composer's magic phonebook.",
      "Line 5: 'use App\\classes\\HelloWorld' tells PHP which namespace to use.",
      "Line 8: 'new HelloWorld()' calls __construct() in HelloWorld.php.",
      "Line 9: '$helloWorld->index()' executes the method and prints the message."
    ],
    outputPHP: `Hello World`,
    outputJS: `Hello World`,
    tip: "Notice: index.php only has 5 lines of code! That is the hallmark of clean architecture."
  },

  // Page 33: Composer PSR-4 Rule
  {
    page: 33,
    type: "lesson",
    part: 6,
    title: "composer.json — The Autoload Rulebook",
    badgeIcon: "file-json",
    filename: "composer.json",
    codePHP: `// composer.json in php-learning:
{
  "name": "php-project/php-project",
  "type": "project",
  "description": "A simple php project",
  "autoload": {
    "psr-4": {
      "App\\\\": "app//"
    }
  }
}`,
    codeJS: `// package.json in Node.js:
{
  "name": "php-project",
  "type": "module"
}`,
    bullets: [
      "PSR-4 is the PHP standard for mapping namespaces to folders.",
      "\"App\\\\\": \"app//\" tells Composer: when you see 'App\\', look inside 'app/'.",
      "So 'App\\classes\\HelloWorld' automatically maps to 'app/classes/HelloWorld.php'!",
      "When you run 'composer dump-autoload', Composer generates vendor/autoload.php."
    ],
    outputPHP: `Composer maps 'App\\' to 'app/' folder automatically!`,
    outputJS: `ES Modules resolve relative paths automatically.`,
    tip: "You never need to write require 'app/classes/HelloWorld.php' again!"
  },

  // Page 34: Part 7 Cover
  {
    page: 34,
    type: "section",
    part: 7,
    title: "Class 2 Project: php-class-two",
    subtitle: "The Web App Upgrade: web.php + views/ + helpers.php + Bootstrap",
    badgeIcon: "monitor"
  },

  // Page 35: What Changed from Class 1 to Class 2?
  {
    page: 35,
    type: "lesson",
    part: 7,
    title: "Class 2 — Upgrading to a Real Web App",
    badgeIcon: "sparkles",
    filename: "upgrade-summary.txt",
    codePHP: `<?php
// In Class 1:
// HelloWorld::index() echoed plain text: "Hello World"

// In Class 2:
// HelloWorld::index() returns a real HTML page with a student table!
public function index() {
    $this->students = [
        ["id" => 1, "name" => "Borno", "email" => "borno@gmail.com"],
        ["id" => 2, "name" => "Patwari", "email" => "patwari@gmail.com"]
    ];
    return view("home", ["students" => $this->students]);
}`,
    codeJS: `// In Node.js / Express:
app.get('/home', (req, res) => {
  const students = [
    { id: 1, name: "Borno", email: "borno@gmail.com" }
  ];
  res.render("home", { students });
});`,
    bullets: [
      "Class 1 printed plain text in the terminal or browser.",
      "Class 2 turns PHP into a real web application with pages.",
      "Added views/ (home.php, about.php, contact.php, login.php).",
      "Added web.php to handle query string routing (?page=about)."
    ],
    outputPHP: `[Web App] Full HTML table rendered with Bootstrap styling!`,
    outputJS: `[Web App] Full HTML template rendered with Express!`,
    tip: "Controllers prepare data; Views display HTML."
  },

  // Page 36: web.php Router
  {
    page: 36,
    type: "lesson",
    part: 7,
    title: "web.php — The Web Front Router",
    badgeIcon: "network",
    filename: "web.php",
    codePHP: `<?php
require_once "vendor/autoload.php"; 
use App\\classes\\HelloWorld; 

$helloWorld = new HelloWorld(); 

// Check what page the user clicked in the navbar:
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
    codeJS: `// Express.js query router:
app.get('/web.php', (req, res) => {
  const page = req.query.page || 'home';
  if (page === 'home') helloWorld.index(req, res);
  else if (page === 'about') helloWorld.about(req, res);
  else if (page === 'contact') helloWorld.contact(req, res);
  else if (page === 'login') helloWorld.login(req, res);
});`,
    bullets: [
      "$_GET['page'] reads the URL query parameter (e.g. web.php?page=about).",
      "If user clicks 'About', it runs $helloWorld->about().",
      "If no page is given, it defaults to the home page.",
      "This is the Front Controller pattern used by modern frameworks!"
    ],
    outputPHP: `If ?page=about -> calls HelloWorld::about() -> shows About page`,
    outputJS: `If ?page=about -> renders about view`,
    tip: "Navbar links in header.php point directly to 'web.php?page=home', etc."
  },

  // Page 37: helpers.php view engine
  {
    page: 37,
    type: "lesson",
    part: 7,
    title: "helpers.php — Custom 10-Line View Engine",
    badgeIcon: "wrench",
    filename: "helpers.php",
    codePHP: `<?php
// The secret heart of php-class-two:
function view($fileName, $data = [], $print = true)
{
    $view = "View Not Found"; 
    $filePath = "views/" . $fileName . ".php"; 
    
    if (file_exists($filePath)) {
        ob_start();          // 1. Trap output in RAM buffer
        extract($data);      // 2. Turns ['students' => $arr] into $students!
        include $filePath;   // 3. Runs views/home.php
        $view = ob_get_clean(); // 4. Grabs compiled HTML string
    }
    if ($print) {
        print $view;         // 5. Sends HTML to browser
    }
}`,
    codeJS: `// In Node.js, ejs.renderFile() does this exact same thing:
function view(fileName, data) {
  const template = fs.readFileSync(\`views/\${fileName}.html\`, 'utf8');
  return render(template, data);
}`,
    bullets: [
      "ob_start() traps all echoed HTML inside server memory instead of sending early.",
      "extract($data) is magic: ['students' => $arr] becomes a local variable $students!",
      "include $filePath evaluates the HTML template.",
      "ob_get_clean() captures the entire final HTML document into a variable."
    ],
    outputPHP: `Compiles views/home.php with injected $students into clean HTML!`,
    outputJS: `Compiles template with data into clean HTML!`,
    tip: "This 10-line helper is how micro-frameworks like Slim and early Laravel work!"
  },

  // Page 38: Reusable Header & Footer
  {
    page: 38,
    type: "lesson",
    part: 7,
    title: "views/includes/ — Reusable Header & Footer",
    badgeIcon: "layout",
    filename: "header.php",
    codePHP: `<!-- views/includes/header.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP</title>
    <!-- Loads Bootstrap 5 styling -->
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
    codeJS: `// React Layout Component:
export function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="?page=home">Home</a>
      <a href="?page=about">About</a>
    </nav>
  );
}`,
    bullets: [
      "DRY Principle (Don't Repeat Yourself)!",
      "We author the <head>, Bootstrap link, and navbar ONCE in header.php.",
      "Every page template includes it with: <?php include 'includes/header.php'; ?>",
      "footer.php closes the </body></html> tags and loads Bootstrap JS."
    ],
    outputPHP: `Navbar with Home, About, Contact, Login rendered uniformly across all pages!`,
    outputJS: `Navbar component rendered across all pages!`,
    tip: "If you change the navbar brand text, it updates across every single page instantly."
  },

  // Page 39: home.php
  {
    page: 39,
    type: "lesson",
    part: 7,
    title: "views/home.php — Rendering the Table",
    badgeIcon: "table",
    filename: "home.php",
    codePHP: `<?php include "includes/header.php"; ?>

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
    codeJS: `// React JSX:
return (
  <table className="table table-bordered">
    {students.map(s => (
      <tr key={s.id}>
        <td>{s.id}</td>
        <td>{s.name}</td>
        <td>{s.email}</td>
      </tr>
    ))}
  </table>
);`,
    bullets: [
      "Notice how clean this is: header.php at top, footer.php at bottom.",
      "Where did '$students' come from? The view() helper injected it using extract($data)!",
      "The foreach loop iterates through each student row and creates HTML <tr> and <td> tags.",
      "The result is a responsive Bootstrap table with real data."
    ],
    outputPHP: `Bootstrap Card with 4 student rows: Borno, Patwari, Golam, etc.`,
    outputJS: `React table component with student rows`,
    tip: "Notice: there is no SQL or business calculations here. Views only handle presentation."
  },

  // Page 40: Frontend Assets & Client Server Wall
  {
    page: 40,
    type: "lesson",
    part: 7,
    title: "Frontend Assets & Client-Server Boundary",
    badgeIcon: "palette",
    filename: "main.js",
    codePHP: `<!-- In footer.php: -->
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/main.js"></script>

<!-- The Great Client-Server Boundary Wall:
  1. PHP executes on server -> generates HTML -> TERMINATES.
  2. Browser receives HTML -> renders CSS -> executes main.js.
  PHP and JavaScript never run at the same time in the same place!
-->`,
    codeJS: `// assets/js/main.js (Client-Side Vanilla JS)
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
    bullets: [
      "assets/css/ holds Bootstrap CSS and custom style.css.",
      "assets/js/ holds Bootstrap JS bundle and main.js.",
      "main.js runs inside the client's browser to handle scroll events (sticky nav).",
      "PHP cannot handle mouse clicks directly; JavaScript cannot query the database directly."
    ],
    outputPHP: `Server finishes in 15ms -> Browser downloads CSS/JS -> Page becomes interactive!`,
    outputJS: `Sticky navbar activates when user scrolls past 160px!`,
    tip: "Remember: PHP is Server-Side (Backend); JavaScript & CSS are Client-Side (Frontend)."
  },

  // Page 41: Part 8 Cover
  {
    page: 41,
    type: "section",
    part: 8,
    title: "Playground, Practice & Homework",
    subtitle: "Interactive Code Simulator · 3 Homework Projects · Q&A",
    badgeIcon: "award"
  },

  // Page 42: Homework Projects
  {
    page: 42,
    type: "homework",
    title: "Your Homework — 3 Projects",
    subtitle: "Build upon what we learned today",
    projects: [
      {
        num: 1,
        title: "Calculator",
        does: "Two input fields + operation buttons (+, -, *, /)",
        practice: "Variables, operators, if/else, functions"
      },
      {
        num: 2,
        title: "Student Roster Table",
        does: "Add a new student array item and render with Bootstrap",
        practice: "Arrays, foreach loops, HTML views"
      },
      {
        num: 3,
        title: "Multi-Page Site",
        does: "Add a 'services.php' view and link it in header.php navbar",
        practice: "Routing in web.php, modular includes"
      }
    ],
    footerNote: "Start small: the HelloWorld project from today is already the foundation of all three projects. Grow it!"
  },

  // Page 43: Final Slide
  {
    page: 43,
    type: "recap",
    title: "A Full Day — You Made It!",
    subtitle: "From Zero to Modular PHP Architecture",
    cards: [
      { title: "Practice Daily", text: "15 minutes of code beats 3 hours of tutorial videos." },
      { title: "Build the Projects", text: "Calculator, student table, multi-page web router." },
      { title: "Use the Autoloader", text: "Composer PSR-4 is your best friend — errors are teachers." },
      { title: "Keep These Slides", text: "Every example here is interactive — click Run and test!" }
    ],
    qa: "Questions & Discussion",
    instructor: "National Institute of Youth Development (NIYD) · Tarun Soft"
  }
];
