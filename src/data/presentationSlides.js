export const PRESENTATION_SLIDES = [
  {
    id: 1,
    sectionKey: "overview",
    title: "PHP CLASS TWO: Architectural Blueprint",
    subtitle: "Understanding Modern PHP Architecture from First Principles",
    badge: "Slide 1 of 10 • Introduction",
    keyPoints: [
      "Project: php-class-two — A clean classroom implementation of MVC and Composer foundations.",
      "Separation of Concerns: Application logic (app/), views (views/), dependencies (vendor/), and assets (assets/) live in distinct domains.",
      "Dual Entry Points: index.php (classroom direct testbench) vs web.php (query-string front router).",
      "Tailored for JavaScript developers: Building bridges between familiar JS patterns and PHP server runtime."
    ],
    speakerNotes: [
      "Welcome the class. Explain that PHP is often taught haphazardly with messy files mixing SQL, HTML, and logic.",
      "Highlight that php-class-two represents the transition from procedural PHP to structured, modular architecture.",
      "Point out the 4 main pillars: app/ (brain), views/ (appearance), vendor/ (engine/tools), and assets/ (client styling)."
    ]
  },
  {
    id: 2,
    sectionKey: "explorer",
    title: "Interactive Project Explorer: The File Tree",
    subtitle: "Every File and Folder Has a Single, Dedicated Responsibility",
    badge: "Slide 2 of 10 • Codebase Structure",
    keyPoints: [
      "app/classes/ holds our OOP blueprints (HelloWorld, Car, NewClass).",
      "app/helpers/helpers.php contains procedural utility functions including the view() engine.",
      "views/ contains presentation templates with reusable includes/header.php and includes/footer.php.",
      "composer.json orchestrates PSR-4 namespacing and auto-loads helpers.",
      "src/ exists as an empty placeholder from template scaffolding — Composer was configured to use app/ instead."
    ],
    speakerNotes: [
      "Walk the students through the file tree. Click through Car.php, HelloWorld.php, and helpers.php in the explorer.",
      "Explain why src/ is empty: in Composer, you can map 'App\\\\' to whatever folder you want! Here, it maps to app/.",
      "Show how views/includes avoids repeating 50 lines of HTML boilerplate on every single page."
    ]
  },
  {
    id: 3,
    sectionKey: "architecture",
    title: "Interactive Architecture Map: Node Network",
    subtitle: "How Information and Control Travel Through the Application",
    badge: "Slide 3 of 10 • Information Flow",
    keyPoints: [
      "Client Browser requests a page through the network.",
      "web.php acts as the Front Router, reading query parameters ($_GET['page']).",
      "Composer Autoloader dynamically includes class files on demand without manual require statements.",
      "HelloWorld Controller prepares the data model and calls the view() helper.",
      "Template engine buffers and assembles header, body, and footer into a single HTML response."
    ],
    speakerNotes: [
      "Hit the 'Play Simulation' button on the architecture canvas to show animated particles moving along connection lines.",
      "Explain the color coding: Blue for HTTP Request, Orange for PHP execution, Purple for Autoloader resolution, Green for Response.",
      "Remind students that this entire flow takes less than 15 milliseconds on a local server."
    ]
  },
  {
    id: 4,
    sectionKey: "lifecycle",
    title: "Request Lifecycle: From URL to Rendered DOM",
    subtitle: "The 10-Stage Journey of a PHP Request",
    badge: "Slide 4 of 10 • Request Lifecycle",
    keyPoints: [
      "Stage 1-3: Browser sends HTTP GET request -> Web Server detects .php -> Passes to PHP interpreter.",
      "Stage 4-6: PHP boots autoloader -> Instantiates Controller -> Controller prepares data model in RAM.",
      "Stage 7-8: View helper opens output buffer (ob_start()) -> extract($data) creates variables -> Templates compile.",
      "Stage 9-10: Output flushed to browser as HTTP 200 -> PHP process terminates -> Browser parses HTML and runs CSS/JS."
    ],
    speakerNotes: [
      "Emphasize Stage 3: The web server NEVER sends raw PHP code to the browser. PHP executes on the server first.",
      "Emphasize Stage 9: PHP's 'Share-Nothing' architecture means when the script ends, all memory is wiped clean.",
      "Show the split-screen view: Left is the browser, Right is the server."
    ]
  },
  {
    id: 5,
    sectionKey: "classes",
    title: "PHP Classes & OOP: Blueprints vs Objects",
    subtitle: "Car.php, HelloWorld.php, and NewClass.php",
    badge: "Slide 5 of 10 • Object-Oriented PHP",
    keyPoints: [
      "A Class is a Blueprint in code; an Object is an Instance living in memory.",
      "__construct() is a PHP Magic Method that fires automatically when 'new Class()' is called.",
      "Arrow operator '->' ($this->color) is used for member access, NOT the dot operator (reserved for strings).",
      "HelloWorld is a Controller Class that manages actions (index, about, contact, login) and state ($students).",
      "Spot the classic bug: $this->$name (variable variables) vs $this->name (property access) in NewClass.php!"
    ],
    speakerNotes: [
      "Use the interactive Object Instantiator to create a new Car instance with custom color and model.",
      "Point out NewClass.php line 11: '$this->$name = \"Nasir\"'. Explain why double dollar signs happen and how to avoid them.",
      "Compare with JavaScript ES6 classes: identical concepts, just slightly different syntax (constructor vs __construct, this.prop vs $this->prop)."
    ]
  },
  {
    id: 6,
    sectionKey: "composer",
    title: "Composer & Autoloading: Eliminating Require Hell",
    subtitle: "Understanding PSR-4 Namespaces and Global Helper Files",
    badge: "Slide 6 of 10 • Dependency Management",
    keyPoints: [
      "Without Composer, every file needed manual require_once statements for every class used.",
      "PSR-4 maps namespace prefixes to filesystem folders: 'App\\\\' => 'app/'.",
      "Class App\\classes\\HelloWorld automatically maps to app/classes/HelloWorld.php.",
      "Procedural functions cannot be autoloaded on demand in PHP, so helpers.php is loaded upfront via composer.json 'files'.",
      "composer.lock guarantees consistent installations across different developers and servers."
    ],
    speakerNotes: [
      "Show composer.json. Point out lines 10-15: 'psr-4' for classes, and 'files' for helpers.php.",
      "Ask the class: 'Why isn't helpers.php in psr-4?' Answer: because helpers.php contains functions (view, test), not a class!",
      "Run the PSR-4 interactive resolver simulator to demonstrate how Composer translates class names to file paths."
    ]
  },
  {
    id: 7,
    sectionKey: "views",
    title: "Views & Reusable Templates: The Assembly Workshop",
    subtitle: "header.php + home.php + footer.php = Complete Web Page",
    badge: "Slide 7 of 10 • Templating Engine",
    keyPoints: [
      "Separation of concerns: Views only handle presentation, never database queries or heavy logic.",
      "Template inheritance / partials: header.php contains the navbar; footer.php closes the document.",
      "The view() helper in helpers.php uses ob_start() and extract($data) to inject $students seamlessly.",
      "views/home.html was the initial static mockup before breaking it into dynamic PHP templates.",
      "views/home.php iterates over $students using a foreach loop to render the Bootstrap table."
    ],
    speakerNotes: [
      "Demonstrate the interactive assembly workshop: toggle between individual partials and the combined page.",
      "Show how changing student data in the interactive editor immediately updates the rendered preview.",
      "Point out the navigation links in header.php: 'web.php?page=home', 'web.php?page=about', etc."
    ]
  },
  {
    id: 8,
    sectionKey: "assets",
    title: "Frontend Assets & The Client-Server Wall",
    subtitle: "Bootstrap 5, Custom CSS, and Client-Side JavaScript",
    badge: "Slide 8 of 10 • Frontend Resources",
    keyPoints: [
      "assets/css/ holds bootstrap.min.css (layout & components) and style.css (custom styling).",
      "assets/js/ holds bootstrap.bundle.min.js and main.js.",
      "The Client-Server Wall: PHP finishes running on the server before client-side JS even begins running in the browser.",
      "main.js handles DOM events on the client: sticky navbar on scroll, back-to-top button, carousel sliders.",
      "PHP cannot respond to user mouse clicks directly without sending a new HTTP request (or via AJAX/fetch)."
    ],
    speakerNotes: [
      "Clarify the #1 conceptual trap for beginner web developers: thinking PHP and JS run in the same place at the same time.",
      "Draw the timeline: 1. Server runs PHP -> 2. Sends HTML -> 3. Server finishes -> 4. Browser receives HTML -> 5. Browser runs JS.",
      "Show how main.js listens to window scroll events to add the .is-sticky class."
    ]
  },
  {
    id: 9,
    sectionKey: "comparison",
    title: "JavaScript vs PHP: The Developer Rosetta Stone",
    subtitle: "Bridging JavaScript Knowledge into PHP Fluency",
    badge: "Slide 9 of 10 • Language Comparison",
    keyPoints: [
      "Variables: $name in PHP vs const/let name in JS.",
      "Strings: Dot '.' for concatenation in PHP vs '+' or backticks in JS.",
      "Arrays: PHP's associative array ($arr['key']) vs JS Objects (obj.key).",
      "OOP: __construct() and $this->prop in PHP vs constructor() and this.prop in JS.",
      "Superglobals: $_GET and $_POST in PHP vs req.query and req.body in Express.js."
    ],
    speakerNotes: [
      "Use the side-by-side comparison tabs. Ask students to spot syntax differences.",
      "Reiterate the dot '.' vs plus '+' gotcha in PHP: '5' + '5' in PHP is 10 (math addition), whereas '5' . '5' is '55' (string concat).",
      "Show that associative arrays in PHP are functionally identical to JSON objects in JS."
    ]
  },
  {
    id: 10,
    sectionKey: "playground",
    title: "Interactive Laboratory & Simulator",
    subtitle: "Hands-on Experimentation with Routing, View Engines, and OOP",
    badge: "Slide 10 of 10 • Live Workshop",
    keyPoints: [
      "Live Router Simulator: Test different $_GET['page'] parameters and observe how web.php responds.",
      "View Engine Step-Through: Watch extract() unpack variables and ob_start() trap output into memory.",
      "Car OOP Instantiator: Create custom car instances and inspect their memory heap representation.",
      "PSR-4 Class Resolver: Test namespace resolution in real time.",
      "Safe, educational execution in browser without requiring a live Apache server."
    ],
    speakerNotes: [
      "Invite a student to give a custom parameter to test in the simulator (e.g. ?page=about or a new student name).",
      "Summarize the lesson: php-class-two proves that even a small classroom project contains all the fundamental building blocks of enterprise web applications (MVC, autoloader, templating, routing).",
      "Take questions from the class."
    ]
  }
];
