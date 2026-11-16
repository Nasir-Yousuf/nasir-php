export const SIDE_BY_SIDE_SLIDES = [
  // Slide 1: Cover
  {
    page: 1,
    type: "cover",
    title: "PHP & JavaScript",
    titleBn: "পিএইচপি এবং জাভাস্ক্রিপ্ট",
    subtitle: "Side by Side: From Core Basics to Real Architecture (php-class-two)",
    subtitleBn: "পাশাপাশি তুলনা: মৌলিক ধারণা থেকে বাস্তব প্রজেক্ট আর্কিটেকচার",
    badgeIcon: "code",
    org: "National Institute of Youth Development (NIYD)",
    orgBn: "জাতীয় যুব উন্নয়ন ইনস্টিটিউট",
    footerNote: "Every concept compared side by side — with live interactive code runners!",
    footerNoteBn: "প্রতিটি ধারণা পাশাপাশি তুলনা ও লাইভ কোড রানার সহ!"
  },

  // Slide 2: Roadmap
  {
    page: 2,
    type: "roadmap",
    title: "Today's Journey — 2 Major Phases",
    titleBn: "আজকের শিক্ষাক্রম — ২টি মূল পর্যায়",
    subtitle: "Phase 1: Language Basics Side by Side · Phase 2: Deconstructing php-class-two",
    subtitleBn: "পর্যায় ১: মৌলিক ব্যাকরণ পাশাপাশি তুলনা · পর্যায় ২: php-class-two প্রজেক্ট ডিকনস্ট্রাকশন",
    badgeIcon: "rocket",
    sections: [
      {
        phase: "Phase 1: Language Basics (Side by Side)",
        phaseBn: "পর্যায় ১: ভাষার মৌলিক বিষয়াদি (পাশাপাশি)",
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
        phaseBn: "পর্যায় ২: বাস্তব php-class-two প্রজেক্ট",
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
    titleBn: "১. ভেরিয়েবল — ডাটা তৈরি ও সংরক্ষণ",
    badgeIcon: "box",
    animation: "variable",
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
    bulletsBn: [
      "PHP তে প্রতিটি ভেরিয়েবলের আগে '$' চিহ্ন দেওয়া বাধ্যতামূলক ($name, $age)।",
      "JS তে 'let' (পরিবর্তনশীল) বা 'const' (স্থায়ী) দিয়ে ভেরিয়েবল ঘোষণা করা হয়।",
      "PHP তে '$' দিতে ভুলে যাওয়া হলো নতুনদের সবচেয়ে সাধারণ ভুল!",
      "উভয় ভাষাই dynamically typed (int বা string আলাদা লিখতে হয় না)।"
    ],
    rule: "Rule: Always put '$' before PHP variable names ($age, not age)!",
    ruleBn: "সুবর্ণ নিয়ম: PHP ভেরিয়েবলের নামের আগে সবসময় '$' দিতে হবে ($age, শুধু age নয়)!"
  },

  // Slide 4: Data Types
  {
    page: 4,
    type: "comparison",
    title: "2. Data Types — What Kind of Data?",
    titleBn: "২. ডাটা টাইপ — ডাটার প্রকারভেদ",
    badgeIcon: "shapes",
    animation: "variable",
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
      "Numbers = whole integers and decimals (floats).",
      "Boolean = true or false.",
      "In PHP, use gettype($x); in JS, use typeof x."
    ],
    bulletsBn: [
      "String = কোটেশনের ভেতরে থাকা টেক্সট \" \" বা ' '।",
      "Numbers = পূর্ণসংখ্যা (integer) এবং দশমিক (float/double)।",
      "Boolean = true অথবা false সত্য/মিথ্যা মান।",
      "PHP তে টাইপ জানতে gettype($x) এবং JS তে typeof x ব্যবহার করা হয়।"
    ],
    rule: "In PHP, decimals are 'double/float', whole numbers are 'integer'.",
    ruleBn: "PHP তে দশমিক মান হলো 'double/float', আর পূর্ণসংখ্যা হলো 'integer'।"
  },

  // Slide 5: Strings & Concatenation
  {
    page: 5,
    type: "comparison",
    title: "3. Strings — Joining Text Together",
    titleBn: "৩. স্ট্রিং — লেখা জোড়া লাগানো",
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
    bulletsBn: [
      "সবচেয়ে জরুরি: PHP তে স্ট্রিং জোড়া লাগাতে ডট '.' ব্যবহার করুন, ভুলেও '+' নয়।",
      "PHP তে '+' চিহ্ন শুধুই গণিতের যোগ করার জন্য (৫ + ৫ = ১০)।",
      "PHP তে ডাবল কোটেশনে \"Hello $name\" লিখলে ভেরিয়েবলের মান স্বয়ংক্রিয়ভাবে বসে যায়।",
      "JS তে ব্যাকটিক \`Hello ${name}\` বা '+' ব্যবহার করা হয়।"
    ],
    rule: "Never write 'Hello ' + $name in PHP! Always use the dot: 'Hello ' . $name.",
    ruleBn: "PHP তে কখনোই 'Hello ' + $name লিখবেন না! সবসময় ডট দিন: 'Hello ' . $name।"
  },

  // Slide 6: Operators & Math
  {
    page: 6,
    type: "comparison",
    title: "4. Math Operators & Shortcuts",
    titleBn: "৪. গাণিতিক অপারেটর ও শর্টকাট",
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
    bulletsBn: [
      "গাণিতিক অপারেটর (+, -, *, /, %) দুটি ভাষাতেই হুবহু এক।",
      "% চিহ্ন ভাগশেষ বের করে (১০ % ৪ = ২)।",
      "+= আগের মানের সাথে নতুন মান যোগ করে ($score += 10)।",
      "++ বর্তমান মান ১ বাড়িয়ে দেয় ($score++)।"
    ],
    rule: "Shortcut: $count++ is identical to count++ in JavaScript.",
    ruleBn: "শর্টকাট: PHP এর $count++ এবং JavaScript এর count++ হুবহু একই কাজ করে।"
  },

  // Slide 7: if / else
  {
    page: 7,
    type: "comparison",
    title: "5. Decisions — if / else",
    titleBn: "৫. সিদ্ধান্ত গ্রহণ — if / else",
    badgeIcon: "git-fork",
    animation: "ifelse",
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
    bulletsBn: [
      "if (শর্ত) { ... } শর্ত সত্য হলে এই অংশ রান করে।",
      "else { ... } শর্ত মিথ্যা হলে এই অংশ রান করে।",
      "PHP এবং JavaScript এ if/else এর সিনট্যাক্স হুবহু এক!",
      "যেকোনো একটি ব্লকই রান করবে, দুটি কখনোই একসাথে নয়।"
    ],
    rule: "Use '===' for equality: checks both value AND type.",
    ruleBn: "মান এবং টাইপ উভয়ই মেলাতে সবসময় '===' ব্যবহার করুন।"
  },

  // Slide 8: else if Ladder
  {
    page: 8,
    type: "comparison",
    title: "6. Multi-Way Decisions — else if",
    titleBn: "৬. বহুস্তরীয় সিদ্ধান্ত — else if লেডার",
    badgeIcon: "list-ordered",
    animation: "ifelse",
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
    bulletsBn: [
      "উপর থেকে নিচে পর্যায়ক্রমে শর্ত পরীক্ষা করে।",
      "প্রথম যে শর্তটি সত্য হয় সেখানেই থেমে যায়।",
      "সবগুলো মিথ্যা হলে শেষের else অংশ রান করে।",
      "PHP তে 'elseif' একসাথে বা 'else if' আলাদা লিখা যায়।"
    ],
    rule: "Notice: web.php in your project uses this exact else if ladder to route pages!",
    ruleBn: "লক্ষ্য করুন: আপনার প্রজেক্টের web.php ঠিক এই elseif লেডার ব্যবহার করে রাউটিং করে!"
  },

  // Slide 9: Loops (for & while)
  {
    page: 9,
    type: "comparison",
    title: "7. Loops — for & while",
    titleBn: "৭. লুপ — for এবং while",
    badgeIcon: "repeat",
    animation: "loop",
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
    bulletsBn: [
      "কতবার ঘুরবে জানা থাকলে for লুপ ব্যবহার করা সুবিধাজনক।",
      "শর্ত মিথ্যা না হওয়া পর্যন্ত while লুপ ক্রমাগত ঘুরতে থাকে।",
      "ইনফিনিট লুপ এড়াতে সবসময় কাউন্টার বৃদ্ধি ($count++) করতে হবে!",
      "PHP এবং JS এ লুপের গঠন হুবহু এক।"
    ],
    rule: "for ($i = 0; $i < count; $i++) is the universal looping standard.",
    ruleBn: "for ($i = 0; $i < count; $i++) হলো প্রোগ্রামিংয়ের সর্বজনীন লুপ স্ট্যান্ডার্ড।"
  },

  // Slide 10: foreach (PHP) vs for...of (JS)
  {
    page: 10,
    type: "comparison",
    title: "8. Looping Over Lists — foreach vs for...of",
    titleBn: "৮. তালিকা পড়া — foreach বনাম for...of",
    badgeIcon: "layers",
    animation: "array",
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
    bulletsBn: [
      "PHP তে অ্যারে এবং ডাটাবেজ রেজাল্ট পড়ার জন্য 'foreach' সেরা লুপ।",
      "PHP সিনট্যাক্স: foreach ($array as $item) — মূল অ্যারে আগে বসে!",
      "JS সিনট্যাক্স: for (const item of array) — একক আইটেম আগে বসে।",
      "views/home.php তে আপনি দেখতে পাবেন foreach ($students as $student)!"
    ],
    rule: "PHP: foreach ($collection as $item). Clean, safe, no index errors.",
    ruleBn: "PHP: foreach ($collection as $item)। পরিষ্কার, নিরাপদ এবং ইনডেক্স ভুলের কোনো সুযোগ নেই।"
  },

  // Slide 11: Functions
  {
    page: 11,
    type: "comparison",
    title: "9. Functions — Reusable Machines",
    titleBn: "৯. ফাংশন — পুনঃব্যবহারযোগ্য কোড মেশিন",
    badgeIcon: "cpu",
    animation: "function",
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
    bulletsBn: [
      "একবার লিখুন, যেকোনো জায়গায় কল করুন: function name($parameters) { ... }।",
      "return হিসাব করা মানটি যেখানে ফাংশন ডাকা হয়েছিল সেখানে ফেরত পাঠায়।",
      "ডিফল্ট প্যারামিটার ($qty = 1) কোনো মান না দিলে স্বয়ংক্রিয়ভাবে ব্যবহৃত হয়।",
      "আপনার প্রজেক্টের helpers.php ফাইলে view($fileName, $data = []) ফাংশন আছে।"
    ],
    rule: "echo shows output; return gives the value back to store in a variable.",
    ruleBn: "echo স্ক্রিনে দেখায়; আর return মান ফেরত দেয় যা ভেরিয়েবলে সংরক্ষণ করা যায়।"
  },

  // Slide 12: Arrays
  {
    page: 12,
    type: "comparison",
    title: "10. Indexed Arrays — Ordered Lists",
    titleBn: "১০. ইনডেক্সড অ্যারে — ক্রমানুযায়ী তালিকা",
    badgeIcon: "layers",
    animation: "array",
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
    bulletsBn: [
      "উভয় ভাষাতেই গণনা সবসময় ০ (শূন্য) থেকে শুরু হয়।",
      "PHP তে count($arr) দৈর্ঘ্য দেয়; JS তে arr.length ব্যবহৃত হয়।",
      "PHP তে শেষে যোগ করার চমৎকার উপায়: $colors[] = 'Yellow';",
      "JS তে শেষে যোগ করতে colors.push('Yellow') লিখতে হয়।"
    ],
    rule: "In PHP: $arr[] = $new_value automatically pushes to the end!",
    ruleBn: "PHP তে: $arr[] = $value লিখলেই স্বয়ংক্রিয়ভাবে তালিকায় শেষে যুক্ত হয়!"
  },

  // Slide 13: Associative Arrays vs Objects
  {
    page: 13,
    type: "comparison",
    title: "11. Associative Arrays (PHP) vs Objects (JS)",
    titleBn: "১১. অ্যাসোসিয়েটিভ অ্যারে (PHP) বনাম অবজেক্ট (JS)",
    badgeIcon: "key",
    animation: "array",
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
    bulletsBn: [
      "PHP তে নামযুক্ত কি-ভ্যালু জোড়াকে 'Associative Array' বলে।",
      "JavaScript এ এটিকে 'Object' বলা হয়।",
      "PHP তে $student['name'] লিখতে হয়। $student.name লেখা যায় না!",
      "PHP তে তীর চিহ্ন '=>' কি এবং ভ্যালুকে যুক্ত করে।"
    ],
    rule: "PHP: ['name' => 'Borno'] is identical to JS: { name: 'Borno' }.",
    ruleBn: "PHP এর ['name' => 'Borno'] এবং JS এর { name: 'Borno' } মূলত একই কাজ করে।"
  },

  // Slide 14: Classes & OOP
  {
    page: 14,
    type: "comparison",
    title: "12. Classes & Constructors — The Blueprint",
    titleBn: "১২. ক্লাস এবং কনস্ট্রাক্টর — ব্লুপ্রিন্ট তৈরি",
    badgeIcon: "factory",
    animation: "class",
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
    bulletsBn: [
      "ক্লাস হলো একটি ব্লুপ্রিন্ট (নকশা); আর অবজেক্ট হলো র‍্যামে তৈরি আসল জিনিস।",
      "কনস্ট্রাক্টর: PHP তে '__construct()'; আর JS তে 'constructor()' লিখতে হয়।",
      "ক্লাসের ভেতরে প্রপার্টি এক্সেস: PHP তে '$this->name'; JS তে 'this.name'।",
      "লক্ষ্য করুন: তীর চিহ্নের পর আর ডলার '$' চিহ্ন বসে না ($this->name)!"
    ],
    rule: "PHP constructor = __construct(). JS constructor = constructor().",
    ruleBn: "PHP কনস্ট্রাক্টর = __construct()। JS কনস্ট্রাক্টর = constructor()।"
  },

  // Slide 15: Instantiation
  {
    page: 15,
    type: "comparison",
    title: "13. Object Instantiation & Method Invocation",
    titleBn: "১৩. অবজেক্ট তৈরি এবং মেথড কল করা",
    badgeIcon: "box",
    animation: "class",
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
    bulletsBn: [
      "'new Car()' কল করলে মেমরিতে অবজেক্ট তৈরি হয় এবং কনস্ট্রাক্টর রান করে।",
      "বাইরে থেকে কল: PHP তে '$car->method()'; JS তে 'car.method()'।",
      "পাবলিক প্রপার্টি ($car->color) সরাসরি এক্সেস করা যায়।",
      "উভয় ভাষাতেই 'new' কি-ওয়ার্ড দিয়ে নতুন অবজেক্ট তৈরি করা হয়।"
    ],
    rule: "PHP uses arrow '->' for method calls ($car->getName()). JS uses dot (car.getName()).",
    ruleBn: "PHP তে মেথড ডাকতে তীর '->' চিহ্ন ($car->getName())। JS তে ডট (car.getName())।"
  },

  // Slide 16: Project Transition Cover
  {
    page: 16,
    type: "section",
    title: "Phase 2: The Real php-class-two Project",
    titleBn: "পর্যায় ২: বাস্তব php-class-two প্রজেক্ট",
    subtitle: "Applying everything we just learned into your actual classroom project architecture!",
    subtitleBn: "আমরা এতক্ষণ যা শিখলাম তা এখন সরাসরি আপনার ক্লাসরুম প্রজেক্টে প্রয়োগ করব!",
    badgeIcon: "folder-git-2"
  },

  // Slide 17: Project Folder Structure
  {
    page: 17,
    type: "project-structure",
    title: "14. php-class-two — The Architecture Blueprint",
    titleBn: "১৪. php-class-two — সম্পূর্ণ আর্কিটেকচার ব্লুপ্রিন্ট",
    badgeIcon: "folder-tree",
    animation: "architecture"
  },

  // Slide 18: web.php Router
  {
    page: 18,
    type: "comparison",
    title: "15. The Front Router — web.php",
    titleBn: "১৫. ফ্রন্ট রাউটার — web.php",
    badgeIcon: "network",
    animation: "router",
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
    bulletsBn: [
      "$_GET['page'] ব্রাউজারের URL থেকে কোয়েরি প্যারামিটার পড়ে।",
      "ন্যাভবারে কেউ 'About' চাপলে web.php?page=about কল হয়।",
      "HelloWorld কন্ট্রোলারের নির্দিষ্ট মেথডকে চালিয়ে দেয়।",
      "কোনো পেইজ উল্লেখ না থাকলে ডিফল্টভাবে index() (হোমপেইজ) চালায়।"
    ],
    rule: "This is the Front Controller Pattern used by every professional web framework!",
    ruleBn: "এটিই হলো ফ্রন্ট কন্ট্রোলার প্যাটার্ন — যা লারাভেল বা এক্সপ্রেসের মতো সব ফ্রেমওয়ার্কে ব্যবহৃত হয়!"
  },

  // Slide 19: HelloWorld Controller
  {
    page: 19,
    type: "comparison",
    title: "16. The Page Controller — HelloWorld.php",
    titleBn: "১৬. পেইজ কন্ট্রোলার — HelloWorld.php",
    badgeIcon: "cpu",
    animation: "controller",
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
    bulletsBn: [
      "HelloWorld এখানে কন্ট্রোলার: এটি ডাটা নিয়ন্ত্রণ করে এবং কোন ভিউ দেখাবে তা ঠিক করে।",
      "লক্ষ্য করুন: এটি সরাসরি HTML প্রিন্ট করে না! এতে কোড পরিচ্ছন্ন থাকে।",
      "বরং এটি view('home', ['students' => $this->students]) কল করে ডাটা পাঠায়।",
      "ছাত্রদের তথ্যগুলো মূলত 'Array of Associative Arrays' আকারে সাজানো!"
    ],
    rule: "Controllers prepare data; Views display HTML.",
    ruleBn: "কন্ট্রোলারের দায়িত্ব ডাটা প্রস্তুত করা; আর ভিউয়ের দায়িত্ব HTML দেখানো।"
  },

  // Slide 20: helpers.php view engine
  {
    page: 20,
    type: "comparison",
    title: "17. The View Engine — helpers.php",
    titleBn: "১৭. কাস্টম ভিউ ইঞ্জিন — helpers.php",
    badgeIcon: "wrench",
    animation: "viewengine",
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
    bulletsBn: [
      "ob_start() তাৎক্ষণিক প্রিন্ট না করে পুরো HTML সার্ভার র‍্যাম বাফারে জমা রাখে।",
      "extract($data) হলো ম্যাজিক: ['students' => $arr] সরাসরি $students ভেরিয়েবল হয়ে যায়!",
      "include $filePath টেমপ্লেটের ভেতরের পিএইচপি কোড এক্সিকিউট করে।",
      "ob_get_clean() সম্পূর্ণ প্রস্তুত হওয়া HTML কে একটি ভেরিয়েবলে নিয়ে বাফার খালি করে।"
    ],
    rule: "ob_start() and extract() are the secret building blocks of modern PHP templating!",
    ruleBn: "ob_start() এবং extract() হলো আধুনিক সব PHP টেমপ্লেট ইঞ্জিনের মূল রহস্য!"
  },

  // Slide 21: Reusable Partials
  {
    page: 21,
    type: "comparison",
    title: "18. Reusable Templates — header.php & footer.php",
    titleBn: "১৮. পুনর্ব্যবহারযোগ্য টেমপ্লেট — header.php ও footer.php",
    badgeIcon: "layout",
    animation: "assembly",
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
    bulletsBn: [
      "DRY মূলনীতি (Don't Repeat Yourself) — একই কোড বারবার না লিখে আলাদা করা!",
      "HTML <head>, বুটস্ট্র্যাপ সিএসএস ও ন্যাভবার থাকে header.php তে।",
      "footer.php ফাইল বুটস্ট্র্যাপ জাভাস্ক্রিপ্ট লোড করে এবং ট্যাগ বন্ধ করে।",
      "সব পেইজেই শুরু ও শেষে এগুলো include করে নেওয়া হয়।"
    ],
    rule: "Change the navbar once in header.php, and every page updates instantly!",
    ruleBn: "header.php তে একবার ন্যাভবার পরিবর্তন করলেই সব পেইজে তা নিজে থেকেই আপডেট হয়ে যায়!"
  },

  // Slide 22: home.php Table
  {
    page: 22,
    type: "comparison",
    title: "19. Dynamic Page View — views/home.php",
    titleBn: "১৯. ডাইনামিক পেইজ ভিউ — views/home.php",
    badgeIcon: "table",
    animation: "tableloop",
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
    bulletsBn: [
      "'$students' কোথা থেকে এলো? view() হেল্পার extract() দিয়ে পাঠিয়ে দিয়েছে!",
      "foreach লুপ প্রতিটি ছাত্রের তথ্যের জন্য নতুন <tr> এবং <td> সারি তৈরি করে।",
      "ফলাফল হলো একটি চমৎকার রেসপনসিভ বুটস্ট্র্যাপ ডাটা টেবিল।",
      "উপরে header.php এবং নিচে footer.php — দেখতে পরিচ্ছন্ন ও মডিউলার!"
    ],
    rule: "In PHP templates, foreach is the equivalent of .map() in React JSX.",
    ruleBn: "PHP টেমপ্লেটে foreach লুপ ব্যবহার করা আর React JSX এ .map() ব্যবহার করা একই কথা।"
  },

  // Slide 23: composer.json
  {
    page: 23,
    type: "comparison",
    title: "20. Composer — PSR-4 & Files Autoloading",
    titleBn: "২০. কম্পোজার — PSR-4 ও ফাইলস অটোলোডিং",
    badgeIcon: "file-json",
    animation: "composer",
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
    bulletsBn: [
      "\"App\\\\\": \"app/\" ম্যাপ করে যে App\\ নেমস্পেসটি app/ ফোল্ডারে আছে।",
      "'new App\\classes\\HelloWorld()' লিখলে কম্পোজার নিজে থেকেই ফাইলটি চিনে নেয়।",
      "helpers.php কেন 'files' এ রাখা? কারণ ফাংশনকে ক্লাসের মতো ক্লাসনামে অটোলোড করা যায় না!",
      "কম্পোজার বুট হওয়ার সাথে সাথে helpers.php লোড করে নেয় যাতে view() ফাংশন সরাসরি পাওয়া যায়।"
    ],
    rule: "PSR-4 is for Classes; 'files' is for procedural Helper functions!",
    ruleBn: "PSR-4 হলো ক্লাসের জন্য; আর 'files' হলো সাধারণ হেল্পার ফাংশনের জন্য!"
  },

  // Slide 24: Frontend Assets & Client-Server Wall
  {
    page: 24,
    type: "comparison",
    title: "21. Frontend Assets & The Client-Server Boundary",
    titleBn: "২১. ফ্রন্টএন্ড অ্যাসেটস এবং ক্লায়েন্ট-সার্ভার দেয়াল",
    badgeIcon: "palette",
    animation: "timeline",
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
    bulletsBn: [
      "assets/css/ ফোল্ডারে বুটস্ট্র্যাপ ও কাস্টম সিএসএস ফাইল থাকে।",
      "assets/js/ ফোল্ডারে বুটস্ট্র্যাপ বান্ডেল ও main.js থাকে।",
      "main.js ইউজারের ব্রাউজারে রান করে স্ক্রল ইভেন্ট এবং স্টিকি ন্যাভবার সামলায়।",
      "PHP সরাসরি মাউস ক্লিক ধরতে পারে না; আর JS সরাসরি ডাটাবেজ এক্সেস করতে পারে না।"
    ],
    rule: "PHP = Server (Backend). JavaScript & CSS = Client Browser (Frontend).",
    ruleBn: "PHP = সার্ভার (ব্যাকএন্ড)। JavaScript ও CSS = ক্লায়েন্ট ব্রাউজার (ফ্রন্টএন্ড)।"
  },

  // Slide 25: The Complete Flow
  {
    page: 25,
    type: "comparison",
    title: "22. The Complete Request Journey",
    titleBn: "২২. পূর্ণাঙ্গ রিকোয়েস্টের যাত্রা",
    badgeIcon: "globe",
    animation: "journey",
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
    bulletsBn: [
      "লক্ষ্য করুন php-class-two এর প্রতিটি ফোল্ডার ও ফাইলের আলাদা সুস্পষ্ট দায়িত্ব রয়েছে।",
      "কোনো ফাইলই ৩৫ লাইনের বেশি বড় নয়!",
      "লজিক (app/) এবং ডিজাইন (views/) সম্পূর্ণ আলাদা ও স্বাধীন।",
      "রাউটিং (web.php) এবং ডাটা প্রসেসিং (HelloWorld.php) পুরোপুরি আলাদা।"
    ],
    rule: "This is how modern software engineers build fast, clean, scalable web applications!",
    ruleBn: "ঠিক এভাবেই আধুনিক সফটওয়্যার ইঞ্জিনিয়াররা পরিচ্ছন্ন, দ্রুত ও স্কেলেবল ওয়েব অ্যাপ বানায়!"
  },

  // Slide 26: Recap & Congratulations
  {
    page: 26,
    type: "recap",
    title: "A Full Day — You Made It!",
    titleBn: "অভিনন্দন — আপনি সফলভাবে শেষ করেছেন!",
    subtitle: "From Language Basics to Real Web Architecture",
    subtitleBn: "মৌলিক ব্যাকরণ থেকে শুরু করে বাস্তব ওয়েব আর্কিটেকচার পর্যন্ত",
    cards: [
      { 
        title: "Mastered Basics", 
        titleBn: "মৌলিক ধারণা সম্পন্ন",
        text: "Variables ($ vs let/const), dot '.' vs '+', foreach vs for...of, functions.",
        textBn: "ভেরিয়েবল ($ বনাম let), ডট '.' বনাম '+', foreach বনাম for...of এবং ফাংশন।"
      },
      { 
        title: "Mastered OOP", 
        titleBn: "অবজেক্ট ওরিয়েন্টেড ধারণা",
        text: "Classes, constructors, $this-> arrow operator, Car.php blueprint.",
        textBn: "ক্লাস, কনস্ট্রাক্টর, $this-> তীর চিহ্ন এবং Car.php ব্লুপ্রিন্ট।"
      },
      { 
        title: "Mastered php-class-two", 
        titleBn: "আর্কিটেকচার দক্ষতা",
        text: "web.php router, HelloWorld controller, 10-line view engine, Bootstrap views.",
        textBn: "web.php রাউটার, HelloWorld কন্ট্রোলার, ১০ লাইনের ভিউ ইঞ্জিন ও বুটস্ট্র্যাপ ভিউ।"
      },
      { 
        title: "Mastered Autoloading", 
        titleBn: "অটোলোডিং রহস্য",
        text: "Composer PSR-4 ('App\\' => 'app/') and why helpers.php is in 'files'.",
        textBn: "কম্পোজার PSR-4 ('App\\' => 'app/') এবং কেন helpers.php 'files' এ থাকে।"
      }
    ],
    qa: "Questions & Hands-on Discussion",
    qaBn: "প্রশ্নোত্তর ও উন্মুক্ত আলোচনা",
    instructor: "National Institute of Youth Development (NIYD) · Tarun Soft",
    instructorBn: "জাতীয় যুব উন্নয়ন ইনস্টিটিউট (NIYD) · তরুণ সফট"
  }
];
