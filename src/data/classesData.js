export const CLASS_ONE_DATA = {
  id: "class-one",
  name: "Class 1: php-learning",
  tagline: "The Core Foundation — Namespaces, Classes & Composer Autoloading",
  summary: "In Class 1, we learn the fundamental building block of professional PHP: instead of putting all code in one messy file, we separate it into a Class (HelloWorld.php), an Entry Point (index.php), and an Autoloader (composer.json).",
  keyQuestion: "Why not just write echo 'Hello World' in index.php?",
  keyAnswer: "Because in real-world apps, projects grow to thousands of lines. Class 1 teaches you how to structure code so it never becomes an unmaintainable mess.",
  stats: {
    files: 3,
    folders: 2,
    concept: "OOP Blueprint + PSR-4 Autoloading"
  },
  files: [
    {
      path: "index.php",
      name: "index.php",
      role: "The Starter Key (Entry Point)",
      badge: "Entry Script",
      plainEnglish: "This is the file the server runs when someone opens your site. It loads the autoloader, imports the HelloWorld class, creates an object, and calls its method.",
      jsComparison: "Like index.js or main.js in Node.js where you import a class and call a function.",
      code: `<?php 

require_once "vendor/autoload.php"; 
use App\\classes\\HelloWorld; 

$helloWorld = new HelloWorld(); 
$helloWorld->index();`,
      lineBreakdown: [
        { line: 3, text: 'require_once "vendor/autoload.php";', note: 'Loads Composer autoloader so PHP knows where classes live.' },
        { line: 4, text: 'use App\\classes\\HelloWorld;', note: 'Tells PHP which class we want to use in this file.' },
        { line: 6, text: '$helloWorld = new HelloWorld();', note: 'Creates a real object from the HelloWorld blueprint.' },
        { line: 7, text: '$helloWorld->index();', note: 'Calls the index() method to print the message.' }
      ]
    },
    {
      path: "app/classes/HelloWorld.php",
      name: "HelloWorld.php",
      role: "The Blueprint (Class)",
      badge: "OOP Class",
      plainEnglish: "This file is a reusable blueprint. It defines a property ($message), sets its default value in __construct(), and has a method index() that echoes it.",
      jsComparison: "Identical to an ES6 class in JavaScript: class HelloWorld { constructor() { this.message = 'Hello World'; } index() { console.log(this.message); } }",
      code: `<?php 

namespace App\\classes; 

class HelloWorld 
{
    public $message; 

    public function __construct()
    {
        $this->message = "Hello World"; 
    }

    public function index()
    {
        echo $this->message; 
    }
}

new HelloWorld; 

echo "Hello World testing";`,
      lineBreakdown: [
        { line: 3, text: 'namespace App\\classes;', note: 'The virtual address/folder of this class in the project.' },
        { line: 7, text: 'public $message;', note: 'A property (variable) attached to this class.' },
        { line: 9, text: 'public function __construct()', note: 'Runs automatically when "new HelloWorld()" is called.' },
        { line: 11, text: '$this->message = "Hello World";', note: 'Sets the message value using $this-> arrow operator.' },
        { line: 14, text: 'public function index()', note: 'Method that prints the message to the screen.' }
      ]
    },
    {
      path: "composer.json",
      name: "composer.json",
      role: "The Rulebook (Composer Config)",
      badge: "Config",
      plainEnglish: "This tells Composer: 'Whenever any code asks for a class starting with App\\, go look inside the app/ directory!'",
      jsComparison: "Equivalent to package.json in JavaScript, telling Node where your code and dependencies are.",
      code: `{
  "name": "php-project/php-project",
  "type": "project",
  "description": "A simple php project",
  "autoload": {
    "psr-4": {
      "App\\\\": "app//"
    }
  }
}`,
      lineBreakdown: [
        { line: 7, text: '"psr-4": { "App\\\\": "app//" }', note: 'The PSR-4 rule: namespace App\\ maps directly to folder app/.' }
      ]
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "1. You run index.php",
      description: "You open the browser or terminal. PHP loads index.php.",
      codePreview: '$helloWorld = new HelloWorld();',
      detail: "PHP sees 'new HelloWorld()', but it doesn't know where that file is yet!"
    },
    {
      number: 2,
      title: "2. Composer steps in automatically",
      description: "Because line 3 required 'vendor/autoload.php', Composer checks composer.json.",
      codePreview: '"App\\\\" => "app/"',
      detail: "Composer says: 'App\\classes\\HelloWorld means app/classes/HelloWorld.php! I will load it now.'"
    },
    {
      number: 3,
      title: "3. HelloWorld prints output",
      description: "HelloWorld::__construct() sets $message = 'Hello World', then index() prints it.",
      codePreview: 'echo $this->message; // Hello World',
      detail: "The output appears on your screen! Clean, modular, and organized."
    }
  ]
};

export const CLASS_TWO_DATA = {
  id: "class-two",
  name: "Class 2: php-class-two",
  tagline: "The Web Application — Templates, Helpers, Routing & Bootstrap",
  summary: "In Class 2, we took Class 1's OOP foundation and upgraded it into a real web app! We added HTML views (views/), a custom template engine (helpers.php), a web router (web.php), and Bootstrap styling.",
  keyQuestion: "What changed from Class 1 to Class 2?",
  keyAnswer: "Class 1 printed plain text. Class 2 renders a real responsive website with a navbar, pages (Home, About, Contact, Login), and a dynamic student table!",
  stats: {
    files: 18,
    folders: 6,
    concept: "Full Mini-MVC + Templates + Routing"
  },
  newAdditions: [
    {
      title: "views/ (HTML Templates)",
      description: "Instead of echoing text from PHP, we put HTML markup into views/home.php, about.php, contact.php, and login.php."
    },
    {
      title: "views/includes/ (Reusable Header & Footer)",
      description: "header.php has the navbar and <head>; footer.php has the scripts. We write them once and include them on every page!"
    },
    {
      title: "app/helpers/helpers.php (Custom View Engine)",
      description: "A 10-line helper function view('home', $data) that uses ob_start() and extract($data) to feed data into templates."
    },
    {
      title: "web.php (Front Router)",
      description: "Checks $_GET['page']. If user visits web.php?page=about, it calls $helloWorld->about() and shows the About view."
    },
    {
      title: "assets/ (Bootstrap 5 CSS & JS)",
      description: "Makes the website look beautiful on phones and desktops with responsive tables and navigation."
    }
  ]
};

export const EVOLUTION_COMPARISON = [
  {
    feature: "Output",
    class1: "Echoes plain text: 'Hello World'",
    class2: "Renders complete Bootstrap 5 HTML pages with tables and navbar"
  },
  {
    feature: "Entry Points",
    class1: "Just index.php",
    class2: "index.php (testbench) + web.php (web router with ?page=home)"
  },
  {
    feature: "Data Model",
    class1: "Single string: $message = 'Hello World'",
    class2: "Array of 4 students: Borno, Patwari, Golam, etc."
  },
  {
    feature: "HTML Presentation",
    class1: "No views folder (views/ was empty)",
    class2: "6 view templates in views/ with reusable header.php and footer.php"
  },
  {
    feature: "Template Engine",
    class1: "None",
    class2: "helpers.php with view(), ob_start(), and extract($data)"
  },
  {
    feature: "Styling & Assets",
    class1: "No CSS or JS (assets/ was empty)",
    class2: "Bootstrap 5 CSS + JS bundle + main.js (sticky navbar)"
  }
];

export const JS_VS_PHP_SIMPLE = [
  {
    title: "Variables",
    php: '$name = "Nasir";',
    js: 'const name = "Nasir";',
    simpleTip: "In PHP, every variable ALWAYS starts with '$'. In JS, you use let or const."
  },
  {
    title: "Glug Strings Together",
    php: '$greeting = "Hello " . $name;',
    js: 'const greeting = "Hello " + name;',
    simpleTip: "In PHP, use the DOT '.' to join strings. The plus '+' is ONLY for math numbers!"
  },
  {
    title: "Call an Object Method",
    php: '$helloWorld->index();',
    js: 'helloWorld.index();',
    simpleTip: "In PHP, use the arrow '->' to access properties and methods. In JS, you use the dot '.'."
  },
  {
    title: "Loop Over an Array",
    php: 'foreach ($students as $student) { ... }',
    js: 'students.forEach(student => { ... })',
    simpleTip: "In PHP, foreach ($collection as $item) is built into the language and is super easy."
  }
];
