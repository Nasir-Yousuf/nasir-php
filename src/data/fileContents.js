export const FILE_DETAILS = {
  "app/classes/Car.php": {
    path: "app/classes/Car.php",
    name: "Car.php",
    language: "php",
    verified: true,
    category: "Object-Oriented Programming (OOP)",
    role: "Domain Model Class",
    badge: "OOP Domain Model",
    realCode: `<?php

namespace App\\classes; 

class Car
{
    public $color, $model, $name; 

    public function __construct()
    {
        $this->color = "Red"; 
        $this->model = "2022"; 
        $this->name = "Axios - Hybrid"; 
    }

    public function getName()
    {
        echo $this->name; 
    }

    public function getModel () 
    {
        echo $this->model; 
    }

    public function getColor()
    {
        echo $this->color; 
    }

    public function allInfo(){
        echo "Car name : ".$this->name."<br/>"; 
        echo "Car model : ".$this->model."<br/>"; 
        echo "Car color : ".$this->model."<br/>"; 
    }
}`,
    illustrativeCode: `<?php

namespace App\\classes;

class Car
{
    // 1. Properties (State)
    private string $name;
    private string $model;
    private string $color;

    // 2. Constructor (Initialization)
    public function __construct(string $name = "Axios - Hybrid", string $model = "2022", string $color = "Red")
    {
        $this->name = $name;
        $this->model = $model;
        $this->color = $color;
    }

    // 3. Methods (Behaviors)
    public function getDetails(): string
    {
        return "{$this->name} ({$this->model}) in {$this->color}";
    }
}`,
    jsEquivalent: `// JavaScript (ES6+ Class equivalent)
export class Car {
  // Properties
  #name;
  #model;
  #color;

  constructor(name = "Axios - Hybrid", model = "2022", color = "Red") {
    this.#name = name;
    this.#model = model;
    this.#color = color;
  }

  getName() {
    return this.#name;
  }

  allInfo() {
    return \`Car name: \${this.#name}\\nCar model: \${this.#model}\\nCar color: \${this.#color}\`;
  }
}

// In JS, you use 'this.property' instead of '$this->property'
// And string template literals with backticks instead of dot '.' concatenation!`,
    whyExists: "Encapsulates data and actions related to a Car entity. Instead of scattered procedural variables, OOP bundles state ($color, $model, $name) and methods (allInfo) into a single reusable blueprint.",
    responsibilities: [
      "Define state schema for Car objects",
      "Initialize default property values inside __construct()",
      "Provide getter methods to output or inspect individual properties",
      "Demonstrate class namespace App\\classes matching the PSR-4 folder layout"
    ],
    architectureConnections: [
      { target: "vendor/autoload.php", reason: "Autoloaded when 'new Car()' or 'use App\\classes\\Car' is invoked" },
      { target: "index.php", reason: "Imported with 'use App\\classes\\Car' for testing in classroom" },
      { target: "composer.json", reason: "Mapped by PSR-4 'App\\\\': 'app/' prefix" }
    ],
    teachingNotes: [
      "In PHP, object member access uses the arrow operator '->' ($this->name), NOT the dot '.' operator. The dot is reserved for string concatenation!",
      "The constructor '__construct()' is a PHP 'Magic Method' that triggers automatically whenever 'new Car()' is called.",
      "Notice line 34 in the original project: 'Car color : '.$this->model. In class, this was a classic minor copy-paste typo, which is a great exercise for students to spot and fix!"
    ]
  },

  "app/classes/HelloWorld.php": {
    path: "app/classes/HelloWorld.php",
    name: "HelloWorld.php",
    language: "php",
    verified: true,
    category: "MVC Controller",
    role: "Page Controller",
    badge: "Page Controller",
    realCode: `<?php

namespace App\\classes; 

use App\\classes\\Car; 

class HelloWorld
{
    public $message, $location, $city, $data = [], $students = [];  // Property declaring. 

    public function __construct() // Magic Method
    {
        $this->message = "Hello World"; // Value Assiging
        $this->location = "Savar"; 
        $this->city = "Dhaka"; 
    }

    public function index()   // Normal Method
    {
        $this->students = [
            0 => [
                "id" => 01, 
                "name" => "Borno", 
                "email" => "borno@gmail.com",
                "mobile" => '0181818188', 
                "address" => "Dhaka"
            ], 
            1 => [      
                "id" => 02, 
                "name" => "Patwari", 
                "email" => "patwari@gmail.com",
                "mobile" => '0181818188', 
                "address" => "Sirajgonj" ,
                "hobby" => "standup"
            ],
            2 => [
                "id" => 03, 
                "name" => "Golam", 
                "email" => "golam@gmail.com",
                "mobile" => '0181818188', 
                "address" => "Chittagonj"
            ], 
            3 => [
                "id" => 40, 
                "name" => "Golam", 
                "email" => "golam@gmail.com",
                "mobile" => '0181818188', 
                "address" => "Chittagong"
            ], 
        ]; 

        return view("home", ["students" => $this->students]); 
    }

    public function about()
    {
      return view("about"); 
    }
    
    public function contact()
    {
      return view("contact"); 
    }

    public function login()
    {
      return view("login"); 
    }
}`,
    illustrativeCode: `<?php

namespace App\\classes;

class PageController
{
    // Action: home page
    public function index()
    {
        $students = $this->fetchStudents();
        return view("home", ["students" => $students]);
    }

    // Action: about page
    public function about()
    {
        return view("about", ["title" => "About Us"]);
    }
}`,
    jsEquivalent: `// Node.js / Express equivalent controller
export const HomeController = {
  index: (req, res) => {
    const students = [
      { id: 1, name: "Borno", email: "borno@gmail.com", mobile: "0181818188" },
      { id: 2, name: "Patwari", email: "patwari@gmail.com", mobile: "0181818188" },
      { id: 3, name: "Golam", email: "golam@gmail.com", mobile: "0181818188" }
    ];
    // In Express, you render a template view like this:
    res.render("home", { students });
  },

  about: (req, res) => {
    res.render("about");
  }
};`,
    whyExists: "Acts as the Brain (Controller) of the application. It receives routing signals from web.php, prepares data (the student roster), and passes that data into the view rendering engine.",
    responsibilities: [
      "Hold application state and dummy database records",
      "Route actions: index(), about(), contact(), login()",
      "Inject data payload into view('home', ['students' => ...])",
      "Bridge HTTP requests with template views"
    ],
    architectureConnections: [
      { target: "web.php", reason: "web.php checks $_GET['page'] and dispatches calls to index(), about(), etc." },
      { target: "app/helpers/helpers.php", reason: "Calls view() function to render templates and capture buffer" },
      { target: "views/home.php", reason: "Target view template populated with $students array" }
    ],
    teachingNotes: [
      "Notice how HelloWorld combines Controller logic with data storage. In advanced MVC, data fetching moves to Models, while HelloWorld remains a pure Controller.",
      "The index() method returns the view() function call, seamlessly handing output buffering back to the caller."
    ]
  },

  "app/classes/NewClass.php": {
    path: "app/classes/NewClass.php",
    name: "NewClass.php",
    language: "php",
    verified: true,
    category: "OOP Practice",
    role: "Student Exploration Class",
    badge: "OOP Practice",
    realCode: `<?php

namespace App\\Classes;


class NewClass
{
    public $name, $age, $profession;

    public function __construct() {
        $this->$name = "Nasir"; 
        $this->$age = 21; 
        $this->$profession; 
    }

    public function name(){
        echo "Nasir"; 
    }
    public function age(){
        echo 21; 
    }
    public function profession(){
        echo "Web Developer"; 
    }
}`,
    illustrativeCode: `<?php

namespace App\\classes;

class Developer
{
    public string $name;
    public int $age;
    public string $profession;

    public function __construct(string $name = "Nasir", int $age = 21, string $profession = "Web Developer")
    {
        $this->name = $name;
        $this->age = $age;
        $this->profession = $profession;
    }

    public function introduce(): void
    {
        echo "Hi, I am {$this->name}, a {$this->age}yo {$this->profession}.";
    }
}`,
    jsEquivalent: `class Developer {
  constructor(name = "Nasir", age = 21, profession = "Web Developer") {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  introduce() {
    console.log(\`Hi, I am \${this.name}, a \${this.age}yo \${this.profession}.\`);
  }
}`,
    whyExists: "Created by the student (Nasir) during classroom lab exercises to practice instantiating objects, setting attributes, and testing methods.",
    responsibilities: [
      "Demonstrate personal developer attributes ($name, $age, $profession)",
      "Provide practice calling methods ($Nasir->name(), $Nasir->profession())"
    ],
    architectureConnections: [
      { target: "index.php", reason: "Referenced in commented-out test lines: $Nasir = new NewClass;" }
    ],
    teachingNotes: [
      "IMPORTANT TEACHING POINT: In the constructor, lines 11-13 write '$this->$name' instead of '$this->name'. In PHP, '$this->$name' looks for a variable called $name to use its value as the property name (variable variables!). This is a very frequent beginner bug and an incredible teaching moment!"
    ]
  },

  "app/helpers/helpers.php": {
    path: "app/helpers/helpers.php",
    name: "helpers.php",
    language: "php",
    verified: true,
    category: "View Rendering Engine",
    role: "Global Utility & Template Engine",
    badge: "Custom Template Engine",
    realCode: `<?php

function test()
{
    echo "Hello World"; 
}

function view($fileName, $data = [], $print = true)
{
    $view = "View Not Found"; 
    $filePath = "views/".$fileName.".php"; 
    if(file_exists($filePath)){
        ob_start(); 
        extract($data); 
        include $filePath; 
        $view = ob_get_clean(); 
    }
    if($print){
        print $view; 
    }
}`,
    illustrativeCode: `<?php

/**
 * Custom Minimalistic Template Engine
 * 1. ob_start(): Diverts echoed output into an internal server memory buffer
 * 2. extract($data): Converts ['students' => $arr] into a local variable $students
 * 3. include $filePath: Executes the PHP template within the buffered scope
 * 4. ob_get_clean(): Captures the rendered HTML string and empties the buffer
 */
function render_view(string $template, array $data = []): string
{
    $file = "views/{$template}.php";
    if (!file_exists($file)) {
        throw new Exception("Template {$template} not found at {$file}");
    }
    ob_start();
    extract($data);
    include $file;
    return ob_get_clean();
}`,
    jsEquivalent: `// In JavaScript / Node.js, this is what ejs.renderFile()
// or a custom template compiler does:
import fs from 'fs';

function view(fileName, data = {}) {
  const filePath = \`views/\${fileName}.html\`;
  let template = fs.readFileSync(filePath, 'utf-8');
  
  // Interpolates variables into template
  for (const [key, value] of Object.entries(data)) {
    template = template.replaceAll(\`{{\${key}}}\`, JSON.stringify(value));
  }
  return template;
}`,
    whyExists: "This file is the SECRET HEART of the whole project's architecture! It provides the view() helper that turns PHP template files into rendered HTML using PHP's output buffering mechanism.",
    responsibilities: [
      "Provide global procedural helper functions",
      "Check if template exists at 'views/{fileName}.php'",
      "Open Output Buffer with ob_start() so template markup isn't sent prematurely",
      "Unpack associative array into accessible local variables using extract($data)",
      "Capture rendered HTML string with ob_get_clean() and print it to browser"
    ],
    architectureConnections: [
      { target: "composer.json", reason: "Autoloaded globally on every request via 'autoload.files': ['app/helpers/helpers.php']" },
      { target: "app/classes/HelloWorld.php", reason: "Called by controller actions: return view('home', ['students' => ...])" },
      { target: "views/home.php", reason: "Included and rendered by view() function" }
    ],
    teachingNotes: [
      "Why is this in 'files' instead of 'psr-4' in composer.json? Because PSR-4 autoloads CLASSES on demand when requested. Procedural functions cannot be autoloaded on demand in PHP, so Composer loads helper files immediately upon startup!",
      "ob_start() and ob_get_clean() allow you to evaluate PHP code inside an HTML file and capture the entire final HTML string into a variable."
    ]
  },

  "composer.json": {
    path: "composer.json",
    name: "composer.json",
    language: "json",
    verified: true,
    category: "Dependency Management",
    role: "Project Configuration Manifest",
    badge: "Composer Config",
    realCode: `{
  "name": "php-project/php-project",
  "type": "project",
  "description": "A simple php project",
  "keywords": [],
  "license": "",
  "require": {},
  "require-dev": {},
  "autoload": {
    "psr-4": {
      "App\\\\": "app/"
    },
    "files": [
      "app/helpers/helpers.php"
    ]
  }
}`,
    illustrativeCode: `{
  "name": "classroom/php-class-two",
  "description": "Educational PHP architecture with PSR-4 and Helpers",
  "autoload": {
    "psr-4": {
      "App\\\\": "app/"
    },
    "files": [
      "app/helpers/helpers.php"
    ]
  }
}`,
    jsEquivalent: `// Node.js package.json equivalent!
{
  "name": "php-class-two",
  "version": "1.0.0",
  "type": "module",
  "description": "A simple web project",
  "scripts": {
    "start": "node web.js"
  },
  "dependencies": {},
  // In JS, module resolution is handled by package.json "imports" or tsconfig paths!
  "imports": {
    "#app/*": "./app/*"
  }
}`,
    whyExists: "The package definition and dependency declaration file for PHP projects. Equivalent to package.json in the JavaScript/Node.js ecosystem.",
    responsibilities: [
      "Declare project name, type, and description",
      "Map namespace prefix 'App\\\\' to folder 'app/' using PSR-4 standards",
      "Register procedural helper files ('app/helpers/helpers.php') in the autoload files list",
      "Instruct 'composer dump-autoload' on how to generate the vendor/ autoloading map"
    ],
    architectureConnections: [
      { target: "vendor/autoload.php", reason: "Composer reads composer.json to compile vendor/autoload.php" },
      { target: "app/classes/", reason: "All classes under app/ become part of the App namespace" },
      { target: "app/helpers/helpers.php", reason: "Automatically required by Composer on boot" }
    ],
    teachingNotes: [
      "Notice the double backslash in 'App\\\\'. In JSON, backslashes must be escaped! So 'App\\\\' represents the single PHP namespace separator 'App\\'.",
      "PSR-4 defines that the class App\\classes\\Car maps directly to the file path app/classes/Car.php!"
    ]
  },

  "composer.lock": {
    path: "composer.lock",
    name: "composer.lock",
    language: "json",
    verified: true,
    category: "Dependency Management",
    role: "Locked Dependencies State",
    badge: "Lockfile",
    realCode: `{
    "_readme": [
        "This file locks the dependencies of your project to a known state",
        "Read more about it at https://getcomposer.org/doc/01-basic-usage.md#installing-dependencies",
        "This file is @generated automatically"
    ],
    "content-hash": "8488e146eb2b5c00e6259461f52b7571",
    "packages": [],
    "packages-dev": [],
    "aliases": [],
    "minimum-stability": "stable",
    "stability-flags": {},
    "prefer-stable": false,
    "prefer-lowest": false,
    "platform": {},
    "platform-dev": {},
    "plugin-api-version": "2.6.0"
}`,
    illustrativeCode: `// composer.lock guarantees every team member and server
// installs the EXACT same versions of external packages.`,
    jsEquivalent: `// Equivalent to package-lock.json in npm or yarn.lock in Yarn!
// It records the content hash and resolved versions of dependencies.`,
    whyExists: "Pins the exact dependency graph and commit hashes so that running 'composer install' produces identical behavior across all development machines and production servers.",
    responsibilities: [
      "Lock dependency versions to prevent unexpected breaking changes",
      "Track content-hash of composer.json to alert when configuration has changed"
    ],
    architectureConnections: [
      { target: "composer.json", reason: "Generated and updated automatically whenever composer.json is modified" }
    ],
    teachingNotes: [
      "Never edit composer.lock manually! Let Composer manage it via 'composer update' or 'composer install'."
    ]
  },

  "index.php": {
    path: "index.php",
    name: "index.php",
    language: "php",
    verified: true,
    category: "Entry Point",
    role: "Classroom Testbench & Debugger",
    badge: "Classroom Testbench",
    realCode: `<?php

require_once __DIR__ . '/vendor/autoload.php';

use App\\classes\\HelloWorld; 
// use App\\classes\\NewClass; 
use App\\classes\\Car; 

$helloWorld = new HelloWorld(); 
$helloWorld->index(); 
$helloWorld->about(); 
$helloWorld->contact(); 
$helloWorld->login(); 



// test(); 


// $helloWorld->practice(); 
// $Nasir  = new NewClass; 
// $Nasir->name(); 
// $Nasir->age(); 
// $Nasir->profession(); `,
    illustrativeCode: `<?php

// Classroom Development Testbench
require_once __DIR__ . '/vendor/autoload.php';

use App\\classes\\HelloWorld;

$app = new HelloWorld();
$app->index(); // Runs home page action`,
    jsEquivalent: `// Node.js direct test file (e.g., test.js or index.js)
import './vendor/autoload.js';
import { HelloWorld } from './app/classes/HelloWorld.js';

const app = new HelloWorld();
app.index();`,
    whyExists: "Serves as the root exploration script where the instructor and students executed and verified each class, method, and helper during the live coding session.",
    responsibilities: [
      "Bootstrap the autoloader using require_once __DIR__ . '/vendor/autoload.php'",
      "Import classes into current scope with 'use'",
      "Execute controller actions and debug outputs sequentially"
    ],
    architectureConnections: [
      { target: "vendor/autoload.php", reason: "Must be required first before any class can be resolved" },
      { target: "app/classes/HelloWorld.php", reason: "Instantiated and tested" },
      { target: "app/classes/Car.php", reason: "Imported via use statement" }
    ],
    teachingNotes: [
      "Notice that in index.php, index(), about(), contact(), and login() are all called in a row! That was done in class to test each action. In a live website, requests are routed to one specific page at a time (which is what web.php does!)."
    ]
  },

  "web.php": {
    path: "web.php",
    name: "web.php",
    language: "php",
    verified: true,
    category: "Entry Point / Routing",
    role: "Web Application Front Controller Router",
    badge: "Query-String Router",
    realCode: `<?php

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
    illustrativeCode: `<?php

// Front Controller Pattern using Query Parameter Routing
require_once "vendor/autoload.php";

use App\\classes\\HelloWorld;

$controller = new HelloWorld();
$page = $_GET['page'] ?? 'home';

match ($page) {
    'about'   => $controller->about(),
    'contact' => $controller->contact(),
    'login'   => $controller->login(),
    default   => $controller->index(),
};`,
    jsEquivalent: `// Express.js Query-String or Route Router equivalent:
import express from 'express';
import { HelloWorld } from './app/classes/HelloWorld.js';

const app = express();
const controller = new HelloWorld();

app.get('/web.php', (req, res) => {
  const page = req.query.page || 'home';
  if (page === 'home') controller.index(req, res);
  else if (page === 'about') controller.about(req, res);
  else if (page === 'contact') controller.contact(req, res);
  else if (page === 'login') controller.login(req, res);
});`,
    whyExists: "The production web routing gateway! When users click navigation links (e.g., 'web.php?page=about'), this script catches the request, inspects $_GET['page'], and dispatches to the corresponding controller method.",
    responsibilities: [
      "Act as the Front Controller for all web browser page requests",
      "Read HTTP GET query parameters via PHP superglobal $_GET['page']",
      "Dispatch request to appropriate method on HelloWorld controller",
      "Default gracefully to home page action if no parameter is provided"
    ],
    architectureConnections: [
      { target: "views/includes/header.php", reason: "Navbar links point directly to web.php?page=home, web.php?page=about, etc." },
      { target: "app/classes/HelloWorld.php", reason: "Instantiates controller and invokes actions" },
      { target: "vendor/autoload.php", reason: "Loads autoloader" }
    ],
    teachingNotes: [
      "This is the quintessential 'Query String Router' taught in PHP before introducing URL rewriting (.htaccess) and modern frameworks like Laravel."
    ]
  },

  "views/includes/header.php": {
    path: "views/includes/header.php",
    name: "header.php",
    language: "php",
    verified: true,
    category: "Template Partial",
    role: "Reusable Header & Navigation",
    badge: "Partial: Header",
    realCode: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <!-- <link rel="stylesheet" href="./../assets/css/bootstrap.min.css" /> -->
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
    illustrativeCode: `<!-- Reusable Header Template Included on All Views -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= $title ?? 'PHP Project' ?></title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">...</nav>`,
    jsEquivalent: `// React Header Component equivalent:
export function Header({ activePage }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">My PHP project</span>
        <ul className="navbar-nav flex-row gap-3">
          <li><a href="?page=home">Home</a></li>
          <li><a href="?page=about">About</a></li>
          <li><a href="?page=contact">Contact</a></li>
          <li><a href="?page=login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}`,
    whyExists: "Prevents code duplication (DRY principle). Instead of repeating the HTML <head> and navbar on every single page, this file is authored once and included at the top of each view.",
    responsibilities: [
      "Render HTML5 doctype, charset, and responsive viewport meta tags",
      "Link external Bootstrap 5 CSS stylesheet",
      "Render top navigation bar with routing links to web.php?page=..."
    ],
    architectureConnections: [
      { target: "views/home.php", reason: "Included via <?php include 'includes/header.php'; ?>" },
      { target: "views/about.php", reason: "Included at top of about.php" },
      { target: "web.php", reason: "Navigation anchors link directly back to web.php router" }
    ],
    teachingNotes: [
      "Notice how the navbar links point to 'web.php?page=home'. When a student clicks 'About', the browser sends a new HTTP request to web.php, which loads about.php with this exact header!"
    ]
  },

  "views/includes/footer.php": {
    path: "views/includes/footer.php",
    name: "footer.php",
    language: "php",
    verified: true,
    category: "Template Partial",
    role: "Reusable Footer & Script Injector",
    badge: "Partial: Footer",
    realCode: `    <script src="assets/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
    illustrativeCode: `    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>`,
    jsEquivalent: `// In React, closing tags are handled by layout wrappers:
export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>...</footer>
    </>
  );
}`,
    whyExists: "Closes the open <body> and <html> tags cleanly and loads the client-side JavaScript bundle at the bottom of the document to optimize page loading.",
    responsibilities: [
      "Inject Bootstrap JS bundle",
      "Close DOM document structure safely"
    ],
    architectureConnections: [
      { target: "views/home.php", reason: "Included at bottom of home.php" },
      { target: "assets/js/bootstrap.bundle.min.js", reason: "Script tag references this asset" }
    ],
    teachingNotes: [
      "Placing <script> tags at the very bottom right before </body> ensures that the DOM elements are parsed and displayed before heavy scripts execute."
    ]
  },

  "views/home.php": {
    path: "views/home.php",
    name: "home.php",
    language: "php",
    verified: true,
    category: "View Template",
    role: "Home Dashboard & Dynamic Data Renderer",
    badge: "Page Template",
    realCode: `<?php include "includes/header.php"; ?>


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
                                <td><?php echo $student["id"];  ?></td>
                                <td><?php echo $student["name"];  ?></td>
                                <td><?php echo $student["email"];  ?></td>
                                <td><?php echo $student["mobile"];  ?></td>
                            </tr>

                            <?php } ?>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<?php include "includes/footer.php"; ?>`,
    illustrativeCode: `<!-- Clean Modern PHP Template Syntax -->
<?php include "includes/header.php"; ?>

<div class="container py-4">
    <h2>Student Directory</h2>
    <table class="table">
        <?php foreach ($students as $student): ?>
            <tr>
                <td><?= htmlspecialchars($student['name']) ?></td>
                <td><?= htmlspecialchars($student['email']) ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</div>

<?php include "includes/footer.php"; ?>`,
    jsEquivalent: `// React Component rendering the same student list:
export function HomeView({ students }) {
  return (
    <div className="container py-5">
      <div className="card">
        <div className="card-header">All Student</div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr><th>Id</th><th>Name</th><th>Email</th><th>Mobile</th></tr>
            </thead>
            <tbody>
              {students.map((student) => (
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
      </div>
    </div>
  );
}`,
    whyExists: "The primary presentation view for the homepage. Demonstrates how PHP seamlessly mixes HTML markup with dynamic data iterations using foreach loops.",
    responsibilities: [
      "Include header.php and footer.php partials",
      "Iterate over the injected $students associative array",
      "Render a Bootstrap table displaying student Id, Name, Email, Mobile"
    ],
    architectureConnections: [
      { target: "app/helpers/helpers.php", reason: "Variables $students made available in scope via extract($data) in view() helper!" },
      { target: "app/classes/HelloWorld.php", reason: "HelloWorld::index() populates the student array and passes it to this view" },
      { target: "views/includes/header.php", reason: "Included at top" },
      { target: "views/includes/footer.php", reason: "Included at bottom" }
    ],
    teachingNotes: [
      "Where did the variable '$students' come from? Look at HelloWorld.php: view('home', ['students' => $this->students]). Then look at helpers.php: extract($data). The associative array key 'students' became the local variable $students! This is how PHP view engines pass data."
    ]
  },

  "views/about.php": {
    path: "views/about.php",
    name: "about.php",
    language: "php",
    verified: true,
    category: "View Template",
    role: "About Page View",
    badge: "Page Template",
    realCode: `<?php include "includes/header.php"; ?>

   <section class="py-5 bg-secondary-subtle">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                   <h1>This is about page. </h1>
                </div>
            </div>
        </div>
    </div>
   </section>

<?php include "includes/footer.php"; ?>`,
    illustrativeCode: `<!-- About Page View -->`,
    jsEquivalent: `export function AboutPage() { return <h1>This is about page.</h1>; }`,
    whyExists: "Demonstrates modular templating across multiple pages without replicating the navigation header or scripts.",
    responsibilities: ["Render About page content inside Bootstrap layout"],
    architectureConnections: [
      { target: "web.php", reason: "Triggered when $_GET['page'] == 'about'" },
      { target: "views/includes/header.php", reason: "Includes reusable header" }
    ],
    teachingNotes: ["Notice how about.php, contact.php, and login.php all share the exact same outer shell."]
  },

  "views/contact.php": {
    path: "views/contact.php",
    name: "contact.php",
    language: "php",
    verified: true,
    category: "View Template",
    role: "Contact Page View",
    badge: "Page Template",
    realCode: `<?php include "includes/header.php"; ?>

   <section class="py-5 bg-secondary-subtle">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                   <h1>This is Contact page. </h1>
                </div>
            </div>
        </div>
    </div>
   </section>

<?php include "includes/footer.php"; ?>`,
    illustrativeCode: `<!-- Contact Page View -->`,
    jsEquivalent: `export function ContactPage() { return <h1>This is Contact page.</h1>; }`,
    whyExists: "Contact screen template.",
    responsibilities: ["Render contact card within standard page shell"],
    architectureConnections: [
      { target: "web.php", reason: "Triggered when $_GET['page'] == 'contact'" }
    ],
    teachingNotes: ["Clean demonstration of template reusability."]
  },

  "views/login.php": {
    path: "views/login.php",
    name: "login.php",
    language: "php",
    verified: true,
    category: "View Template",
    role: "Login Page View",
    badge: "Page Template",
    realCode: `<?php include "includes/header.php"; ?>

   <section class="py-5 bg-secondary-subtle">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                   <h1>This is Login page. </h1>
                </div>
            </div>
        </div>
    </div>
   </section>

<?php include "includes/footer.php"; ?>`,
    illustrativeCode: `<!-- Login Page View -->`,
    jsEquivalent: `export function LoginPage() { return <h1>This is Login page.</h1>; }`,
    whyExists: "Authentication placeholder view.",
    responsibilities: ["Render login card view"],
    architectureConnections: [
      { target: "web.php", reason: "Triggered when $_GET['page'] == 'login'" }
    ],
    teachingNotes: ["Serves as a foundation to add form inputs and $_POST handling in class."]
  },

  "views/home.html": {
    path: "views/home.html",
    name: "home.html",
    language: "html",
    verified: true,
    category: "Static Wireframe",
    role: "Static Prototype Mockup",
    badge: "Static Wireframe",
    realCode: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PHP</title>
    <link rel="stylesheet" href="./../assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/bootstrap.css" />
  </head>
  <body>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <a href="#" class="navbar-brand">My PHP project</a>
        <ul class="navbar-nav">
          <li><a href="" class="nav-link">Home</a></li>
          <li><a href="" class="nav-link">About</a></li>
          <li><a href="" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>

    <script src="../assets/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`,
    illustrativeCode: `<!-- Static HTML Mockup -->`,
    jsEquivalent: `<!-- Pure static mockup before componentization -->`,
    whyExists: "The original static HTML file created before the instructor broke the document apart into header.php, footer.php, and dynamic PHP templates. Preserved in views/ for comparison.",
    responsibilities: ["Show the starting point of HTML before PHP modularization"],
    architectureConnections: [
      { target: "views/includes/header.php", reason: "Extracted into header partial" },
      { target: "views/includes/footer.php", reason: "Extracted into footer partial" }
    ],
    teachingNotes: [
      "Compare home.html with home.php + header.php + footer.php! Students can see the exact refactoring step from a monolithic static HTML file to reusable dynamic PHP templates."
    ]
  },

  "vendor/autoload.php": {
    path: "vendor/autoload.php",
    name: "autoload.php",
    language: "php",
    verified: true,
    category: "Composer Engine",
    role: "Master Autoload Bootstrap",
    badge: "Autoloader Bootstrap",
    realCode: `<?php

// autoload.php @generated by Composer

require_once __DIR__ . '/composer/autoload_real.php';

return ComposerAutoloaderInit8488e146eb2b5c00e6259461f52b7571::getLoader();`,
    illustrativeCode: `<?php
// Boots Composer's ClassLoader instance
require_once __DIR__ . '/composer/autoload_real.php';
return ComposerAutoloaderInit::getLoader();`,
    jsEquivalent: `// In Node.js ES Modules, import resolution is built-in:
// import { Car } from './app/classes/Car.js';`,
    whyExists: "The single entry point generated by Composer. Requiring this one file automatically equips PHP with the ability to find and load ANY class in the project without manual includes.",
    responsibilities: [
      "Initialize Composer's autoloader singleton",
      "Register spl_autoload_register() callback functions with the PHP engine"
    ],
    architectureConnections: [
      { target: "index.php", reason: "Required on line 3" },
      { target: "web.php", reason: "Required on line 3" }
    ],
    teachingNotes: [
      "One require to rule them all! Without this file, a project with 50 classes would need 50 separate require_once lines."
    ]
  },

  "assets/js/main.js": {
    path: "assets/js/main.js",
    name: "main.js",
    language: "javascript",
    verified: true,
    category: "Client-Side Frontend",
    role: "Browser Interaction Script",
    badge: "Client-Side Script",
    realCode: `/**
 * BONGO TANBO TRAVELS - HOMEPAGE JAVASCRIPT
 * Built with Bootstrap 5
 * Clean Vanilla JavaScript
 */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Sticky Navbar Toggle on Scroll
  const headerNav = document.getElementById("headerNav");
  const backToTopBtn = document.getElementById("backTopBtn");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (headerNav) {
      if (scrollPosition > 160) {
        headerNav.classList.add("is-sticky");
      } else {
        headerNav.classList.remove("is-sticky");
      }
    }

    if (backToTopBtn) {
      if (scrollPosition > 450) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  });
});`,
    illustrativeCode: `// Client-Side Browser Interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log("Client script running inside the user's browser!");
});`,
    jsEquivalent: `// This is already pure vanilla JavaScript running in the browser!`,
    whyExists: "Handles browser events (scrolling, clicks, sticky navbar toggles) on the client machine. Completely independent of PHP server-side execution.",
    responsibilities: [
      "Listen for DOMContentLoaded event",
      "Attach window scroll event listener",
      "Toggle CSS classes (is-sticky, show) based on user scroll position"
    ],
    architectureConnections: [
      { target: "assets/css/style.css", reason: "Controls classes styled in style.css" },
      { target: "views/includes/footer.php", reason: "Can be linked in footer template" }
    ],
    teachingNotes: [
      "A crucial mental model for students: PHP has ALREADY FINISHED RUNNING and terminated before this JavaScript even starts executing in the browser!"
    ]
  }
};
