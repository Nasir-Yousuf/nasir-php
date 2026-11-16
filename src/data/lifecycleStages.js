export const LIFECYCLE_STAGES = [
  {
    step: 1,
    title: "1. User Enters URL in Browser",
    actor: "Client Browser",
    actorColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    description: "The user types 'http://localhost/php-class-two/web.php?page=home' into the Chrome/Firefox address bar and hits Enter.",
    httpState: {
      type: "DNS & Socket",
      url: "http://localhost/php-class-two/web.php?page=home",
      method: "GET",
      ip: "127.0.0.1:80",
      status: "Initiating Connection"
    },
    codeSnippet: `// Browser URL Bar
http://localhost/php-class-two/web.php?page=home`,
    serverState: "Server Idle: Listening on port 80 (Apache / Nginx / PHP Built-in Server)",
    bufferState: "Not started",
    concept: "Every web interaction begins with a client URL. In PHP applications, the URL path often points directly to a file (web.php) or passes query parameters (?page=home)."
  },
  {
    step: 2,
    title: "2. Browser Transmits HTTP GET Request",
    actor: "Network Wire",
    actorColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    description: "Browser establishes a TCP handshake and sends an HTTP/1.1 request packet across the network to port 80.",
    httpState: {
      type: "HTTP Request Header",
      url: "/php-class-two/web.php?page=home",
      method: "GET",
      headers: [
        "Host: localhost",
        "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept: text/html,application/xhtml+xml",
        "Connection: keep-alive"
      ],
      query: { page: "home" },
      status: "In Flight -> Server"
    },
    codeSnippet: `GET /php-class-two/web.php?page=home HTTP/1.1
Host: localhost
User-Agent: Mozilla/5.0
Accept: text/html`,
    serverState: "Network socket receives HTTP packet; routes to web root directory",
    bufferState: "Not started",
    concept: "HTTP is plain text over a socket. PHP populates its superglobals ($_SERVER, $_GET, $_REQUEST) directly from these incoming HTTP headers."
  },
  {
    step: 3,
    title: "3. Web Server Dispatches to PHP Runtime",
    actor: "Web Server (Apache/Nginx)",
    actorColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    description: "The web server detects a '.php' extension. Instead of returning raw PHP text to the user (which would leak database passwords!), it passes the file to the PHP interpreter.",
    httpState: {
      type: "Processing",
      status: "Web Server -> PHP FastCGI / mod_php"
    },
    codeSnippet: `// Web Server internal dispatch
DocumentRoot: /var/www/html/php-class-two
Matched File: web.php
Interpreter: /usr/bin/php-fpm (or php.exe on Windows)`,
    serverState: "PHP engine spawns process/thread, initializes memory heap, populates $_GET = ['page' => 'home']",
    bufferState: "Direct output mode",
    concept: "Crucial difference between static web servers and PHP: Static servers send files directly. PHP servers EXECUTE the code and send ONLY what the code prints or echoes!"
  },
  {
    step: 4,
    title: "4. PHP Boots Composer Autoloader",
    actor: "PHP Engine",
    actorColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    description: "web.php executes line 3: require_once 'vendor/autoload.php'. Composer sets up PSR-4 class mapping and preloads helpers.php.",
    httpState: {
      type: "Processing",
      status: "Autoloader Active"
    },
    codeSnippet: `// web.php (Line 3)
require_once "vendor/autoload.php";

// Composer executes:
// 1. Registers spl_autoload_register()
// 2. Pre-includes app/helpers/helpers.php from composer.json "files"`,
    serverState: "Memory: Composer ClassLoader registered in PHP SPL registry; functions test() and view() defined globally",
    bufferState: "Direct output mode",
    concept: "PSR-4 autoloading replaces manual file requirements. Classes are loaded lazily on demand when first referenced."
  },
  {
    step: 5,
    title: "5. Router Instantiates Controller & Checks Query",
    actor: "Router (web.php)",
    actorColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    description: "web.php runs '$helloWorld = new HelloWorld()'. Composer automatically requires 'app/classes/HelloWorld.php'. Router checks $_GET['page'].",
    httpState: {
      type: "Routing",
      queryParam: "page=home",
      matchedRoute: "$helloWorld->index()"
    },
    codeSnippet: `// web.php Lines 7-12
$helloWorld = new HelloWorld();

if (isset($_GET['page'])) {
    if ($_GET['page'] == "home") {
        $helloWorld->index(); // Dispatched!
    }
}`,
    serverState: "Memory: HelloWorld object allocated on heap ($this->location='Savar', $this->city='Dhaka')",
    bufferState: "Direct output mode",
    concept: "Front Controller pattern: A single file handles incoming requests and dispatches them to appropriate controller actions based on input parameters."
  },
  {
    step: 6,
    title: "6. Controller Prepares Data Model",
    actor: "Controller (HelloWorld.php)",
    actorColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
    description: "HelloWorld::index() executes. It populates an associative array with 4 student records and calls view('home', ['students' => ...]).",
    httpState: {
      type: "Controller Processing",
      status: "Data Prepared"
    },
    codeSnippet: `// HelloWorld.php (index method)
$this->students = [
    0 => ["id" => 1, "name" => "Borno", "email" => "borno@gmail.com", "mobile" => "0181818188"],
    1 => ["id" => 2, "name" => "Patwari", "email" => "patwari@gmail.com", "mobile" => "0181818188"],
    2 => ["id" => 3, "name" => "Golam", "email" => "golam@gmail.com", "mobile" => "0181818188"],
    3 => ["id" => 40, "name" => "Golam", "email" => "golam@gmail.com", "mobile" => "0181818188"]
];

return view("home", ["students" => $this->students]);`,
    serverState: "Memory: $this->students array created in memory with 4 elements",
    bufferState: "About to initialize output buffer",
    concept: "Controllers should manage data and orchestrate logic, not generate HTML markup directly. They pass data into view layers."
  },
  {
    step: 7,
    title: "7. View Helper Opens Output Buffer & Extracts Data",
    actor: "View Engine (helpers.php)",
    actorColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    description: "view() opens an output buffer (ob_start()). extract($data) turns ['students' => $arr] into a local variable $students! Then includes 'views/home.php'.",
    httpState: {
      type: "Template Rendering",
      status: "Output Buffering"
    },
    codeSnippet: `// helpers.php (view function)
function view($fileName, $data = [], $print = true) {
    $filePath = "views/" . $fileName . ".php";
    if (file_exists($filePath)) {
        ob_start();         // 1. Trap echoes into internal RAM
        extract($data);     // 2. $students variable is born!
        include $filePath;  // 3. Evaluate template inside buffer
        $view = ob_get_clean(); // 4. Return captured string
    }
    if ($print) print $view;
}`,
    serverState: "Memory: Buffer opened. Any HTML or echo is written to RAM buffer instead of network socket.",
    bufferState: "Buffering Active: [0 bytes]",
    concept: "extract() is a PHP built-in that imports variables from an associative array into the current symbol table. This is how templates gain access to $students!"
  },
  {
    step: 8,
    title: "8. Template Compilation: Header + Table + Footer",
    actor: "Templates (views/home.php)",
    actorColor: "text-teal-400 bg-teal-500/10 border-teal-500/30",
    description: "PHP executes views/home.php. It includes includes/header.php, loops through $students using foreach to generate <tr> and <td> tags, and includes footer.php.",
    httpState: {
      type: "Template Execution",
      status: "Assembling HTML"
    },
    codeSnippet: `<!-- views/home.php executing inside buffer -->
<?php include "includes/header.php"; ?>
...
<?php foreach($students as $student) { ?>
<tr>
    <td><?php echo $student["id"]; ?></td>
    <td><?php echo $student["name"]; ?></td>
    <td><?php echo $student["email"]; ?></td>
    <td><?php echo $student["mobile"]; ?></td>
</tr>
<?php } ?>
...
<?php include "includes/footer.php"; ?>`,
    serverState: "Memory: Buffer filled with 1,842 bytes of clean, valid HTML markup",
    bufferState: "Buffering Active: [1,842 bytes captured]",
    concept: "PHP acts as a pre-processor here (Hypertext Preprocessor!). It replaces PHP tags with dynamic data and leaves static HTML untouched."
  },
  {
    step: 9,
    title: "9. Output Flushed & Web Server Sends HTTP 200",
    actor: "Server -> Network",
    actorColor: "text-green-400 bg-green-500/10 border-green-500/30",
    description: "ob_get_clean() captures the full HTML string. 'print $view' writes it to the output stream. Web server prepends HTTP 200 headers and transmits the response.",
    httpState: {
      type: "HTTP Response Header",
      status: "HTTP/1.1 200 OK",
      headers: [
        "Content-Type: text/html; charset=UTF-8",
        "Content-Length: 1842",
        "Connection: keep-alive",
        "Server: Apache/2.4.58 (Win64) OpenSSL/3.1.3 PHP/8.2.12"
      ]
    },
    codeSnippet: `HTTP/1.1 200 OK
Date: Mon, 16 Nov 2026 12:45:00 GMT
Server: Apache/2.4 (Win64) PHP/8.2
Content-Type: text/html; charset=UTF-8
Content-Length: 1842

<!DOCTYPE html>
<html lang="en">
<head>...`,
    serverState: "PHP script completes execution and terminates process. All server memory for this request is FREED.",
    bufferState: "Buffer Flushed and Cleared",
    concept: "PHP scripts are ephemeral (stateless). They start, execute, output HTML, and terminate in milliseconds. Nothing stays in memory between requests unless saved to session or database."
  },
  {
    step: 10,
    title: "10. Browser Renders DOM & Executes Assets",
    actor: "Client Browser",
    actorColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    description: "Browser receives the HTML document, constructs DOM tree, requests 'assets/css/bootstrap.min.css' and 'assets/js/bootstrap.bundle.min.js', paints page, and runs main.js.",
    httpState: {
      type: "Asset Requests",
      secondaryRequests: [
        "GET /assets/css/bootstrap.min.css (200 OK)",
        "GET /assets/js/bootstrap.bundle.min.js (200 OK)"
      ],
      status: "Page Fully Loaded (DOMContentLoaded)"
    },
    codeSnippet: `// Browser DOM rendering
1. Parse HTML DOM tree
2. Fetch & parse Bootstrap 5 stylesheet
3. Calculate layout & paint student table to screen
4. Execute bootstrap.bundle.min.js and main.js`,
    serverState: "Server is idle, waiting for the next independent request",
    bufferState: "Complete",
    concept: "Client-side vs Server-side: The student table is rendered on the screen. The user never sees PHP code, only the generated HTML table and CSS styling."
  }
];

export const MOCK_GENERATED_HTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
</head>

<body>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
            <a href="#" class="navbar-brand">My PHP project</a>
            <ul class="navbar-nav">
                <li><a href="web.php?page=home" class="nav-link active">Home</a></li>
                <li><a href="web.php?page=about" class="nav-link">About</a></li>
                <li><a href="web.php?page=contact" class="nav-link">Contact</a></li>
                <li><a href="web.php?page=login" class="nav-link">Login</a></li>
            </ul>
        </div>
    </nav>

<section class="py-5 bg-secondary-subtle">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card shadow-sm">
                    <div class="card-header bg-primary text-white font-weight-bold">All Student</div>
                    <div class="card-body">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Borno</td>
                                    <td>borno@gmail.com</td>
                                    <td>0181818188</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Patwari</td>
                                    <td>patwari@gmail.com</td>
                                    <td>0181818188</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Golam</td>
                                    <td>golam@gmail.com</td>
                                    <td>0181818188</td>
                                </tr>
                                <tr>
                                    <td>40</td>
                                    <td>Golam</td>
                                    <td>golam@gmail.com</td>
                                    <td>0181818188</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    <script src="assets/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
