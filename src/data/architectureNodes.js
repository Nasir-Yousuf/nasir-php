export const ARCHITECTURE_NODES = [
  {
    id: "browser",
    title: "Web Browser / Client",
    type: "client",
    icon: "Globe",
    badge: "Client Device",
    color: "from-blue-600/30 to-cyan-600/30 border-blue-500/50 text-blue-300",
    glowColor: "rgba(59, 130, 246, 0.4)",
    x: 80,
    y: 200,
    inputs: ["HTML Response", "Assets (CSS/JS)"],
    outputs: ["HTTP GET Request (?page=home)"],
    description: "The user's web browser (Chrome, Firefox). Sends HTTP requests across the network and renders the final HTML, CSS, and JS received from the server.",
    codeSnippet: `// Browser URL Bar:
http://localhost/php-class-two/web.php?page=home

// HTTP Request Sent:
GET /web.php?page=home HTTP/1.1
Host: localhost
Accept: text/html`
  },
  {
    id: "router",
    title: "web.php (Front Router)",
    type: "entry",
    icon: "Network",
    badge: "Routing Gateway",
    color: "from-rose-600/30 to-pink-600/30 border-rose-500/50 text-rose-300",
    glowColor: "rgba(244, 63, 94, 0.4)",
    x: 290,
    y: 120,
    inputs: ["HTTP Request with $_GET['page']"],
    outputs: ["Controller method dispatch"],
    description: "First PHP file executed on web requests. Inspects query parameters (e.g. ?page=home, ?page=about) and directs traffic to the correct Controller action.",
    codeSnippet: `<?php
require_once "vendor/autoload.php";
use App\\classes\\HelloWorld;

$helloWorld = new HelloWorld();
if (isset($_GET['page'])) {
    if ($_GET['page'] == "home") {
        $helloWorld->index();
    } // ... other pages
} else {
    $helloWorld->index();
}`
  },
  {
    id: "testbench",
    title: "index.php (Testbench)",
    type: "entry",
    icon: "Terminal",
    badge: "Classroom Entry",
    color: "from-amber-600/30 to-orange-600/30 border-amber-500/50 text-amber-300",
    glowColor: "rgba(245, 158, 11, 0.4)",
    x: 290,
    y: 280,
    inputs: ["Direct CLI or Browser execution"],
    outputs: ["Direct sequential class testing"],
    description: "Classroom test bench file used during lessons to quickly test OOP instantiations, methods, and functions without query parameters.",
    codeSnippet: `<?php
require_once __DIR__ . '/vendor/autoload.php';
use App\\classes\\HelloWorld;

$helloWorld = new HelloWorld();
$helloWorld->index();
// Classroom direct execution`
  },
  {
    id: "autoloader",
    title: "Composer Autoloader",
    type: "engine",
    icon: "Cpu",
    badge: "PSR-4 & Files Engine",
    color: "from-purple-600/30 to-indigo-600/30 border-purple-500/50 text-purple-300",
    glowColor: "rgba(139, 92, 246, 0.4)",
    x: 490,
    y: 200,
    inputs: ["Class resolution request (App\\classes\\...)"],
    outputs: ["File inclusion via require_once", "helpers.php functions"],
    description: "Dynamically maps PHP namespaces to file paths. When 'new HelloWorld()' is called, Composer automatically includes 'app/classes/HelloWorld.php'. Also preloads 'app/helpers/helpers.php'.",
    codeSnippet: `// composer.json autoload definition:
{
  "autoload": {
    "psr-4": { "App\\\\": "app/" },
    "files": ["app/helpers/helpers.php"]
  }
}`
  },
  {
    id: "controller",
    title: "HelloWorld (Controller)",
    type: "controller",
    icon: "Layers",
    badge: "Page Controller",
    color: "from-indigo-600/30 to-violet-600/30 border-indigo-500/50 text-indigo-300",
    glowColor: "rgba(99, 102, 241, 0.4)",
    x: 690,
    y: 120,
    inputs: ["Method call: index(), about(), etc."],
    outputs: ["view('home', ['students' => $data])"],
    description: "Core controller class. Holds dummy student records, manages state, and triggers the view rendering engine with data payload.",
    codeSnippet: `public function index() {
    $this->students = [
        ["id" => 1, "name" => "Borno", ...],
        ["id" => 2, "name" => "Patwari", ...]
    ];
    return view("home", ["students" => $this->students]);
}`
  },
  {
    id: "helpers",
    title: "View Helper Engine",
    type: "engine",
    icon: "Wrench",
    badge: "Template Engine",
    color: "from-emerald-600/30 to-teal-600/30 border-emerald-500/50 text-emerald-300",
    glowColor: "rgba(16, 185, 129, 0.4)",
    x: 690,
    y: 280,
    inputs: ["Template name ('home')", "Data array (['students' => ...])"],
    outputs: ["Compiled HTML buffer"],
    description: "Custom micro template engine in helpers.php. Uses ob_start() to capture template output, extract() to turn array keys into local variables, and ob_get_clean().",
    codeSnippet: `function view($fileName, $data = [], $print = true) {
    $filePath = "views/" . $fileName . ".php";
    if (file_exists($filePath)) {
        ob_start();
        extract($data);
        include $filePath;
        $view = ob_get_clean();
    }
    if ($print) print $view;
}`
  },
  {
    id: "views",
    title: "Views & Partials Assembly",
    type: "presentation",
    icon: "FileCode",
    badge: "Template Assembly",
    color: "from-teal-600/30 to-cyan-600/30 border-teal-500/50 text-teal-300",
    glowColor: "rgba(20, 184, 166, 0.4)",
    x: 890,
    y: 200,
    inputs: ["Injected $students array", "header.php include", "footer.php include"],
    outputs: ["Complete assembled HTML document"],
    description: "Combines header.php (navbar), the requested page template (home.php with foreach loop), and footer.php into a complete HTML document.",
    codeSnippet: `<!-- views/home.php -->
<?php include "includes/header.php"; ?>
<table class="table">
    <?php foreach($students as $student) { ?>
        <tr><td><?php echo $student['name']; ?></td></tr>
    <?php } ?>
</table>
<?php include "includes/footer.php"; ?>`
  },
  {
    id: "assets",
    title: "Frontend Assets (CSS / JS)",
    type: "static",
    icon: "Palette",
    badge: "Client Assets",
    color: "from-cyan-600/30 to-sky-600/30 border-cyan-500/50 text-cyan-300",
    glowColor: "rgba(6, 182, 212, 0.4)",
    x: 490,
    y: 350,
    inputs: ["Linked from header.php (<link>) and footer.php (<script>)"],
    outputs: ["Rendered styling", "DOM interactivity (sticky nav)"],
    description: "Bootstrap 5 CSS, custom style.css, and client-side main.js. Requested by browser after initial HTML parses.",
    codeSnippet: `<!-- In header.php -->
<link rel="stylesheet" href="assets/css/bootstrap.min.css" />

<!-- In footer.php -->
<script src="assets/js/bootstrap.bundle.min.js"></script>`
  }
];

export const FLOW_STEPS = [
  {
    step: 1,
    title: "1. Client Sends HTTP Request",
    activeNode: "browser",
    targetNode: "router",
    particleType: "blue",
    particleLabel: "HTTP GET ?page=home",
    description: "The user types 'http://localhost/php-class-two/web.php?page=home' in browser or clicks a navbar link.",
    detail: "Browser dispatches an HTTP GET request to Apache/Nginx web server hosting php-class-two."
  },
  {
    step: 2,
    title: "2. Web Server Executes web.php",
    activeNode: "router",
    targetNode: "autoloader",
    particleType: "orange",
    particleLabel: "require autoloader",
    description: "Web server invokes PHP CLI/FPM to execute web.php. web.php immediately requires 'vendor/autoload.php'.",
    detail: "PHP initializes its execution environment. vendor/autoload.php registers PSR-4 autoload callback and preloads helpers.php."
  },
  {
    step: 3,
    title: "3. Composer Resolves Controller Class",
    activeNode: "autoloader",
    targetNode: "controller",
    particleType: "purple",
    particleLabel: "Autoload App\\classes\\HelloWorld",
    description: "web.php runs '$helloWorld = new HelloWorld()'. Composer dynamically locates and includes 'app/classes/HelloWorld.php'.",
    detail: "No manual require_once needed! PSR-4 rule 'App\\\\ => app/' mapped the class name to its exact file on disk."
  },
  {
    step: 4,
    title: "4. Router Dispatches to Action Method",
    activeNode: "router",
    targetNode: "controller",
    particleType: "orange",
    particleLabel: "index() dispatched",
    description: "web.php checks: if ($_GET['page'] == 'home') -> calls $helloWorld->index().",
    detail: "The controller method initializes the student roster dataset with 4 student records."
  },
  {
    step: 5,
    title: "5. Controller Calls view() Helper",
    activeNode: "controller",
    targetNode: "helpers",
    particleType: "orange",
    particleLabel: "view('home', ['students' => ...])",
    description: "HelloWorld::index() hands control to the custom template engine in helpers.php.",
    detail: "Payload passes associative array containing Borno, Patwari, Golam, etc. into the rendering pipeline."
  },
  {
    step: 6,
    title: "6. Helper Buffers & Assembles Templates",
    activeNode: "helpers",
    targetNode: "views",
    particleType: "purple",
    particleLabel: "ob_start() & extract($data)",
    description: "helpers.php opens an output buffer (ob_start()), unpacks $students into local scope (extract()), and includes 'views/home.php'.",
    detail: "home.php includes header.php, loops through $students in an HTML table, and includes footer.php."
  },
  {
    step: 7,
    title: "7. Server Flushes HTML to Browser",
    activeNode: "helpers",
    targetNode: "browser",
    particleType: "green",
    particleLabel: "HTTP 200 (HTML Response)",
    description: "ob_get_clean() captures the full HTML document string and prints it. Web server sends it as an HTTP 200 response to the browser.",
    detail: "The server PHP process now completely terminates and frees all memory. The browser begins parsing HTML."
  },
  {
    step: 8,
    title: "8. Browser Fetches Assets & Hydrates",
    activeNode: "browser",
    targetNode: "assets",
    particleType: "cyan",
    particleLabel: "Fetch CSS & JS",
    description: "Browser parses <link> and <script> tags, fetches Bootstrap 5 and main.js from /assets, styles the layout, and activates sticky nav.",
    detail: "Client-side JavaScript takes over in the browser DOM. Complete round-trip lifecycle finished!"
  }
];
