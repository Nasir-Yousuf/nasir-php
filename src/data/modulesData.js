export const MODULES_DATA = [
  // --- PART 1: WEB & DATA FOUNDATIONS ---
  {
    id: 1,
    phase: "Part 1: Web & Data Foundations",
    phaseBn: "পর্ব ১: ওয়েব ও ডাটাবেজ মূলনীতি",
    title: "1. Understanding the Web",
    titleBn: "১. ওয়েব কীভাবে কাজ করে",
    subtitle: "Internet, Browser, Client-Server & HTTP Requests/Responses",
    subtitleBn: "ইন্টারনেট, ব্রাউজার, সার্ভার এবং HTTP রিকোয়েস্ট ও রেসপন্স",
    icon: "Globe",
    color: "cyan",
    badge: "Module 1",
    lessons: [
      { id: "1.1", title: "What is the Internet & How Does a Website Work?", titleBn: "ইন্টারনেট কী এবং ওয়েবসাইট কীভাবে চলে?", targetId: "sec-1-1" },
      { id: "1.2", title: "The Restaurant Analogy (Customer, Chef, Pantry)", titleBn: "রেস্তোরাঁর উপমা (গ্রাহক, শেফ ও কোল্ড স্টোরেজ)", targetId: "sec-1-2" },
      { id: "1.3", title: "Frontend vs Backend Development", titleBn: "ফ্রন্টএন্ড বনাম ব্যাকএন্ড ডেভেলপমেন্ট", targetId: "sec-1-3" },
      { id: "1.4", title: "Web Servers & Server-Side Execution", titleBn: "ওয়েব সার্ভার ও সার্ভার-সাইড এক্সিকিউশন", targetId: "sec-1-4" },
      { id: "1.5", title: "What is HTTP? Requests, Responses & Methods", titleBn: "HTTP কী? রিকোয়েস্ট ও রেসপন্স সাইকেল", targetId: "sec-1-5" },
      { id: "1.6", title: "Animated Request Lifecycle Simulator", titleBn: "রিকোয়েস্ট লাইফসাইকেল অ্যানিমেশন সিমুলেটর", targetId: "sec-1-6" }
    ]
  },
  {
    id: 2,
    phase: "Part 1: Web & Data Foundations",
    phaseBn: "পর্ব ১: ওয়েব ও ডাটাবেজ মূলনীতি",
    title: "2. Understanding Databases",
    titleBn: "২. ডাটাবেজ ও ডাটা সংরক্ষণ",
    subtitle: "Relational Tables (MySQL) vs Document Models (MongoDB)",
    subtitleBn: "রিলেশনাল টেবিল (MySQL) বনাম ডকুমেন্ট মডেল (MongoDB)",
    icon: "Database",
    color: "purple",
    badge: "Module 2",
    lessons: [
      { id: "2.1", title: "Why Websites Need Databases", titleBn: "ওয়েবসাইটে কেন ডাটাবেজ প্রয়োজন", targetId: "sec-2-1" },
      { id: "2.2", title: "Tables, Rows, Columns & Primary Keys", titleBn: "টেবিল, রো, কলাম ও প্রাইমারি কি", targetId: "sec-2-2" },
      { id: "2.3", title: "Relational SQL (MySQL) vs Document DB (MongoDB)", titleBn: "এসকিউএল বনাম নো-এসকিউএল মঙ্গোডিবি", targetId: "sec-2-3" },
      { id: "2.4", title: "What is JSON & Structured Representation", titleBn: "JSON কী ও ডাটা বিন্যাস", targetId: "sec-2-4" },
      { id: "2.5", title: "Interactive SQL Query Engine (SELECT & WHERE)", titleBn: "ইন্টারেক্টিভ SQL কুয়েরি ও ফিল্টারিং", targetId: "sec-2-5" }
    ]
  },
  {
    id: 3,
    phase: "Part 1: Web & Data Foundations",
    phaseBn: "পর্ব ১: ওয়েব ও ডাটাবেজ মূলনীতি",
    title: "3. How Data Travels",
    titleBn: "৩. ডাটা প্রবাহ: ডাটাবেজ থেকে ব্রাউজার",
    subtitle: "Database → PHP → Arrays → JSON → JavaScript → Browser DOM",
    subtitleBn: "ডাটাবেজ → পিএইচপি → অ্যারে → JSON → জাভাস্ক্রিপ্ট → ব্রাউজার",
    icon: "RefreshCw",
    color: "blue",
    badge: "Module 3",
    lessons: [
      { id: "3.1", title: "The Complete 6-Step Data Journey", titleBn: "৬-ধাপে ডাটার পূর্ণাঙ্গ সফর", targetId: "sec-3-1" },
      { id: "3.2", title: "How PHP Retrieves Data via PDO into Arrays", titleBn: "PDO এর মাধ্যমে ডাটাবেজ থেকে পিএইচপি অ্যারে", targetId: "sec-3-2" },
      { id: "3.3", title: "Converting PHP Arrays to JSON (json_encode)", titleBn: "পিএইচপি অ্যারেকে JSON এ রূপান্তর", targetId: "sec-3-3" },
      { id: "3.4", title: "How JavaScript Fetches & Parses JSON", titleBn: "জাভাস্ক্রিপ্টে JSON গ্রহণ ও পার্সিং", targetId: "sec-3-4" },
      { id: "3.5", title: "Rendering to the Browser DOM (HTML)", titleBn: "ব্রাউজার স্ক্রিনে এইচটিএমএল প্রদর্শন", targetId: "sec-3-5" }
    ]
  },

  // --- PART 2: PHP CORE FUNDAMENTALS ---
  {
    id: 4,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "4. PHP Introduction",
    titleBn: "৪. পিএইচপি পরিচিতি ও পরিবেশ",
    subtitle: "What is PHP, Server Execution, CLI Setup & Tags",
    subtitleBn: "পিএইচপি কী, সার্ভার এক্সিকিউশন ও লোকাল সেটআপ",
    icon: "Terminal",
    color: "amber",
    badge: "Module 4",
    lessons: [
      { id: "4.1", title: "What is PHP & Why Was It Created?", titleBn: "পিএইচপি কী এবং এটি কেন তৈরি হয়েছিল?", targetId: "sec-4-1" },
      { id: "4.2", title: "How PHP Executes on a Server (CPU & RAM Diagram)", titleBn: "সার্ভারে কোড এক্সিকিউশন ও কম্পিউটার ব্লক ডায়াগ্রাম", targetId: "sec-4-2" },
      { id: "4.3", title: "PHP Code Anatomy: Tags, Echo & Semicolons", titleBn: "পিএইচপি কোড কাঠামো: ট্যাগ, ইকো ও সেমিকোলন", targetId: "sec-4-3" },
      { id: "4.4", title: "Running a PHP File via CLI (php -S localhost:8000)", titleBn: "লোকাল সার্ভার চালু করা (php -S localhost:8000)", targetId: "sec-4-4" },
      { id: "4.5", title: "Embedding PHP Inside HTML Pages", titleBn: "HTML এর ভেতর পিএইচপি কোড বসানো", targetId: "sec-4-5" }
    ]
  },
  {
    id: 5,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "5. PHP Variables and Data Types",
    titleBn: "৫. ভেরিয়েবল ও ডাটা টাইপসমূহ",
    subtitle: "The Labelled Box, The '$' Rule & 8 PHP Data Types",
    subtitleBn: "লেবেলযুক্ত বাক্স, '$' এর সুবর্ণ নিয়ম ও ৮টি ডাটা টাইপ",
    icon: "Box",
    color: "emerald",
    badge: "Module 5",
    lessons: [
      { id: "5.1", title: "What is a Variable? (The Labelled Box Analogy)", titleBn: "ভেরিয়েবল কী? (বাক্সের উপমা)", targetId: "sec-5-1" },
      { id: "5.2", title: "Declaring Variables & The Mandatory '$' Rule", titleBn: "ভেরিয়েবল ডিক্লেয়ার ও '$' চিহ্নের নিয়ম", targetId: "sec-5-2" },
      { id: "5.3", title: "The 8 Core PHP Data Types", titleBn: "৮টি মূল ডাটা টাইপ (String, Int, Float, Bool...)", targetId: "sec-5-3" },
      { id: "5.4", title: "Inspecting Types: var_dump() & gettype() vs typeof", titleBn: "টাইপ চেক: var_dump() বনাম typeof", targetId: "sec-5-4" },
      { id: "5.5", title: "Type Juggling & Type Casting Pitfalls", titleBn: "টাইপ জাগলিং ও কনভার্শন সতর্কতা", targetId: "sec-5-5" }
    ]
  },
  {
    id: 6,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "6. PHP Operators and Strings",
    titleBn: "৬. অপারেটর ও স্ট্রিং ম্যানিপুলেশন",
    subtitle: "Arithmetic, Dot Concatenation ('.') vs Plus ('+'), Quotes",
    subtitleBn: "গাণিতিক অপারেটর, ডট কনক্যাটেনেশন ও কোটেশন",
    icon: "FileText",
    color: "teal",
    badge: "Module 6",
    lessons: [
      { id: "6.1", title: "Arithmetic, Assignment & Logical Operators", titleBn: "গাণিতিক, অ্যাসাইনমেন্ট ও লজিক্যাল অপারেটর", targetId: "sec-6-1" },
      { id: "6.2", title: "String Concatenation: Dot ('.') in PHP vs Plus ('+') in JS", titleBn: "স্ট্রিং জোড়া লাগানো: ডট ('.') বনাম প্লাস ('+')", targetId: "sec-6-2" },
      { id: "6.3", title: "Single Quotes vs Double Quotes & Interpolation", titleBn: "সিঙ্গেল কোটেশন বনাম ডাবল কোটেশন ও ভেরিয়েবল পার্সিং", targetId: "sec-6-3" },
      { id: "6.4", title: "Common PHP String Functions (strlen, str_replace)", titleBn: "জনপ্রিয় স্ট্রিং ফাংশনসমূহ", targetId: "sec-6-4" },
      { id: "6.5", title: "Comparison Operators: Strict '===' vs Loose '=='", titleBn: "তুলনা অপারেটর: কঠোর '===' বনাম শিথিল '=='", targetId: "sec-6-5" }
    ]
  },
  {
    id: 7,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "7. PHP Arrays",
    titleBn: "৭. অ্যারে মাস্টারক্লাস",
    subtitle: "Indexed Arrays, Associative Maps ('=>'), and Multidimensional",
    subtitleBn: "ইনডেক্সড অ্যারে, অ্যাসোসিয়েটিভ ম্যাপ ও বহুমাত্রিক অ্যারে",
    icon: "Layers",
    color: "indigo",
    badge: "Module 7",
    lessons: [
      { id: "7.1", title: "What is an Array? (The Multi-Slot Organizer)", titleBn: "অ্যারে কী? (মাল্টি-স্লট স্টোরেজ)", targetId: "sec-7-1" },
      { id: "7.2", title: "Indexed Arrays vs Associative Arrays ('=>')", titleBn: "ইনডেক্সড অ্যারে বনাম অ্যাসোসিয়েটিভ অ্যারে", targetId: "sec-7-2" },
      { id: "7.3", title: "Adding, Modifying & Removing Elements (unset)", titleBn: "উপাদান যোগ, পরিবর্তন ও রিমুভ (unset)", targetId: "sec-7-3" },
      { id: "7.4", title: "Multidimensional Arrays & Matrix Tables", titleBn: "বহুমাত্রিক অ্যারে ও টেবিল ডাটা", targetId: "sec-7-4" },
      { id: "7.5", title: "Array Functions: count(), print_r(), in_array()", titleBn: "প্রয়োজনীয় অ্যারে ফাংশনসমূহ", targetId: "sec-7-5" },
      { id: "7.6", title: "Interactive Array Playground (Dual PHP & JS Tabs)", titleBn: "ইন্টারেক্টিভ অ্যারে ল্যাব (PHP ও JS)", targetId: "sec-7-6" }
    ]
  },
  {
    id: 8,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "8. Conditions and Decision Making",
    titleBn: "৮. শর্ত ও সিদ্ধান্ত গ্রহণ",
    subtitle: "if / else / elseif, Nested Branches & PHP 8 match",
    subtitleBn: "if / else, নেস্টেড কন্ডিশন ও আধুনিক match এক্সপ্রেশন",
    icon: "GitBranch",
    color: "rose",
    badge: "Module 8",
    lessons: [
      { id: "8.1", title: "Why Do Programs Need Decisions? (The Fork in the Road)", titleBn: "প্রোগ্রামে সিদ্ধান্ত কেন দরকার? (রাস্তার মোড়)", targetId: "sec-8-1" },
      { id: "8.2", title: "if, else, and elseif Syntax & Live Grading Score", titleBn: "if, else, elseif সিনট্যাক্স ও লাইভ স্কোর", targetId: "sec-8-2" },
      { id: "8.3", title: "Nested Conditions & Logical Compound Checks", titleBn: "নেস্টেড কন্ডিশন ও যৌগিক শর্ত", targetId: "sec-8-3" },
      { id: "8.4", title: "switch Statements vs Modern PHP 8 match", titleBn: "switch স্টেটমেন্ট বনাম আধুনিক match", targetId: "sec-8-4" }
    ]
  },
  {
    id: 9,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "9. Loops",
    titleBn: "৯. লুপ ও পুনরাবৃত্তি",
    subtitle: "for, while, do-while, foreach ($arr as $k => $v)",
    subtitleBn: "for, while, do-while ও foreach লুপ",
    icon: "Repeat",
    color: "amber",
    badge: "Module 9",
    lessons: [
      { id: "9.1", title: "Why Loops? (The Automated Factory Conveyor Belt)", titleBn: "লুপ কেন প্রয়োজন? (অটোমেটেড কনভেয়র বেল্ট)", targetId: "sec-9-1" },
      { id: "9.2", title: "Standard for, while, and do-while Loops", titleBn: "for, while ও do-while লুপ", targetId: "sec-9-2" },
      { id: "9.3", title: "The Masterpiece: foreach Loop for Arrays ($k => $v)", titleBn: "অ্যারে ঘোরানোর সেরা উপায়: foreach লুপ", targetId: "sec-9-3" },
      { id: "9.4", title: "Loop Controls: break vs continue", titleBn: "লুপ নিয়ন্ত্রণ: break বনাম continue", targetId: "sec-9-4" },
      { id: "9.5", title: "PHP foreach vs JS for...of / Array.forEach", titleBn: "PHP foreach বনাম JS লুপ সিনট্যাক্স", targetId: "sec-9-5" }
    ]
  },
  {
    id: 10,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "10. Functions",
    titleBn: "১০. ফাংশন ও পুনঃব্যবহারযোগ্যতা",
    subtitle: "Input → Machine → Output, Default Params & Variable Scope",
    subtitleBn: "ইনপুট → প্রসেসিং → আউটপুট, ডিফল্ট মান ও স্কোপ",
    icon: "Cpu",
    color: "cyan",
    badge: "Module 10",
    lessons: [
      { id: "10.1", title: "What is a Function? (The Vending Machine Metaphor)", titleBn: "ফাংশন কী? (ভেন্ডিং মেশিনের উপমা)", targetId: "sec-10-1" },
      { id: "10.2", title: "Declaring & Calling Functions with Arguments", titleBn: "ফাংশন তৈরি ও আর্গুমেন্ট পাঠানো", targetId: "sec-10-2" },
      { id: "10.3", title: "Return Values vs Direct Echoing", titleBn: "রিটার্ন ভ্যালু বনাম সরাসরি ইকো", targetId: "sec-10-3" },
      { id: "10.4", title: "Default Parameters & Type Hints", titleBn: "ডিফল্ট প্যারামিটার ও টাইপ হিন্টিং", targetId: "sec-10-4" },
      { id: "10.5", title: "Variable Scope: Local vs Global in PHP vs JS", titleBn: "ভেরিয়েবল স্কোপ: লোকাল বনাম গ্লোবাল", targetId: "sec-10-5" }
    ]
  },
  {
    id: 11,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "11. Objects and Classes",
    titleBn: "১১. ক্লাস ও অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং",
    subtitle: "OOP Blueprints, Properties, Methods, $this->, __construct",
    subtitleBn: "অবজেক্ট ব্লুপ্রিন্ট, প্রোপার্টি, মেথড, $this-> ও কনস্ট্রাক্টর",
    icon: "Boxes",
    color: "purple",
    badge: "Module 11",
    lessons: [
      { id: "11.1", title: "What is OOP? (The Car Factory Blueprint)", titleBn: "অবজেক্ট ওরিয়েন্টেড কী? (গাড়ির ব্লুপ্রিন্ট)", targetId: "sec-11-1" },
      { id: "11.2", title: "Class Definition, Properties, and Methods", titleBn: "ক্লাস তৈরি, প্রোপার্টি ও মেথড", targetId: "sec-11-2" },
      { id: "11.3", title: "Instantiating Objects with 'new'", titleBn: "new কি-ওয়ার্ড দিয়ে অবজেক্ট তৈরি", targetId: "sec-11-3" },
      { id: "11.4", title: "The '$this->' Operator (PHP $this-> vs JS this.)", titleBn: "PHP তে '$this->' বনাম JS 'this.'", targetId: "sec-11-4" },
      { id: "11.5", title: "The __construct() Method vs constructor()", titleBn: "__construct() মেথড বনাম constructor()", targetId: "sec-11-5" },
      { id: "11.6", title: "Access Modifiers: public, private & protected", titleBn: "অ্যাক্সেস মডিফায়ার: পাবলিক, প্রাইভেট ও প্রটেক্টেড", targetId: "sec-11-6" }
    ]
  },
  {
    id: 12,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "12. Working with Multiple Files",
    titleBn: "১২. একাধিক ফাইল যুক্ত করা ও কম্পোজার",
    subtitle: "include vs require, require_once, __DIR__, Composer Autoload",
    subtitleBn: "include, require, __DIR__ এবং কম্পোজার অটোলোড",
    icon: "FolderInput",
    color: "emerald",
    badge: "Module 12",
    lessons: [
      { id: "12.1", title: "Why Split Code Across Multiple Files?", titleBn: "কোড একাধিক ফাইলে ভাগ কেন করবেন?", targetId: "sec-12-1" },
      { id: "12.2", title: "include (Warning) vs require (Fatal Stop)", titleBn: "include বনাম require এর পার্থক্য", targetId: "sec-12-2" },
      { id: "12.3", title: "require_once: Preventing Duplicate Declaration Errors", titleBn: "require_once: ডুপ্লিকেট লোড রোধ", targetId: "sec-12-3" },
      { id: "12.4", title: "The '__DIR__' Magic Constant & Absolute Paths", titleBn: "'__DIR__' ম্যাজিক কনস্ট্যান্ট ও নিরাপদ পাথ", targetId: "sec-12-4" },
      { id: "12.5", title: "Composer & PSR-4 Autoloading (vendor/autoload.php)", titleBn: "কম্পোজার ও PSR-4 অটোলোডিং ব্যবস্থা", targetId: "sec-12-5" }
    ]
  },
  {
    id: 13,
    phase: "Part 2: PHP Core Fundamentals",
    phaseBn: "পর্ব ২: পিএইচপির মৌলিক ভিত্তি",
    title: "13. Working with Forms and Data",
    titleBn: "১৩. ফর্ম হ্যান্ডলিং ও সিকিউরিটি",
    subtitle: "HTML Forms, GET vs POST, $_GET, $_POST, htmlspecialchars",
    subtitleBn: "এইচটিএমএল ফর্ম, GET বনাম POST এবং স্যানিটাইজেশন",
    icon: "Send",
    color: "pink",
    badge: "Module 13",
    lessons: [
      { id: "13.1", title: "How HTML Forms Send Data Over HTTP", titleBn: "HTML ফর্ম কীভাবে ডাটা পাঠায়", targetId: "sec-13-1" },
      { id: "13.2", title: "The $_GET Superglobal (URL Query Params)", titleBn: "$_GET সুপারগ্লোবাল ও ইউআরএল প্যারামিটার", targetId: "sec-13-2" },
      { id: "13.3", title: "The $_POST Superglobal (Secure Form Body)", titleBn: "$_POST সুপারগ্লোবাল ও ফর্ম বডি", targetId: "sec-13-3" },
      { id: "13.4", title: "Input Sanitization with htmlspecialchars()", titleBn: "ডাটা স্যানিটাইজেশন (htmlspecialchars)", targetId: "sec-13-4" },
      { id: "13.5", title: "Never Trust Client Input (Security 101)", titleBn: "ইউজার ইনপুট বিশ্বাস না করার নীতি", targetId: "sec-13-5" }
    ]
  },

  // --- PART 3: PROJECT ARCHITECTURE & LANGUAGE SYNTHESIS ---
  {
    id: 14,
    phase: "Part 3: Project Architecture & Language Synthesis",
    phaseBn: "পর্ব ৩: বাস্তব প্রজেক্ট ও সিনট্যাক্স ল্যাব",
    title: "14. Our Actual PHP Project: php-class-two",
    titleBn: "১৪. আমাদের আসল প্রজেক্ট (php-class-two)",
    subtitle: "Verified Folders, Routers, Controllers, Views & Autoloading",
    subtitleBn: "আসল প্রজেক্টের ফোল্ডার, রাউটার, ভিউ ও কম্পোজার",
    icon: "FolderTree",
    color: "amber",
    badge: "Module 14",
    lessons: [
      { id: "14.1", title: "Responsibility Groupings (Logic, Views, Assets, Vendor)", titleBn: "দায়িত্ব অনুযায়ী ফোল্ডারের ভাগ", targetId: "sec-14-1" },
      { id: "14.2", title: "Interactive Folder Tree & File Inspector", titleBn: "ইন্টারেক্টিভ ফাইল ট্রি ও পরিদর্শক", targetId: "sec-14-2" },
      { id: "14.3", title: "web.php (Front Router URL Dispatcher)", titleBn: "web.php (ফ্রন্ট রাউটার)", targetId: "sec-14-3" },
      { id: "14.4", title: "HelloWorld.php (Controller Data Builder)", titleBn: "HelloWorld.php (কন্ট্রোলার)", targetId: "sec-14-4" },
      { id: "14.5", title: "helpers.php (10-Line View Buffer Engine)", titleBn: "helpers.php (ভিউ বাফার ইঞ্জিন)", targetId: "sec-14-5" },
      { id: "14.6", title: "Reusable Layouts (header.php & footer.php)", titleBn: "রিইউজেবল হেডার ও ফুটার লেআউট", targetId: "sec-14-6" },
      { id: "14.7", title: "views/home.php (Dynamic Table Loop)", titleBn: "views/home.php (ডায়নামিক টেবিল লুপ)", targetId: "sec-14-7" },
      { id: "14.8", title: "composer.json & vendor/autoload.php (PSR-4)", titleBn: "কম্পোজার ও অটোলোডিং ব্লুপ্রিন্ট", targetId: "sec-14-8" },
      { id: "14.9", title: "Client-Server Boundary & 6-Step Request Journey", titleBn: "ক্লায়েন্ট-সার্ভার বাউন্ডারি ও জার্নি", targetId: "sec-14-9" }
    ]
  },
  {
    id: 15,
    phase: "Part 3: Project Architecture & Language Synthesis",
    phaseBn: "পর্ব ৩: বাস্তব প্রজেক্ট ও সিনট্যাক্স ল্যাব",
    title: "15. PHP vs JavaScript Comparison Lab",
    titleBn: "১৫. পিএইচপি বনাম জাভাস্ক্রিপ্ট ল্যাব",
    subtitle: "Comprehensive Side-by-Side Playground & Syntax Matrix",
    subtitleBn: "পাশাপাশি সিনট্যাক্স তুলনা, হোস্টিং ইকোনমিক্স ও ইন্টারেক্টিভ ল্যাব",
    icon: "Scale",
    color: "cyan",
    badge: "Module 15",
    lessons: [
      { id: "15.1", title: "Variables & Output (echo vs console.log)", titleBn: "ভেরিয়েবল ও আউটপুট তুলনা", targetId: "sec-15-1" },
      { id: "15.2", title: "Data Types & Null Handling", titleBn: "ডাটা টাইপ ও নাল হ্যান্ডলিং", targetId: "sec-15-2" },
      { id: "15.3", title: "Arrays vs Objects (Hash Maps vs Prototypes)", titleBn: "অ্যারে বনাম অবজেক্ট কাঠামো", targetId: "sec-15-3" },
      { id: "15.4", title: "Loops, Functions & Classes Side-by-Side", titleBn: "লুপ, ফাংশন ও ক্লাস পাশাপাশি", targetId: "sec-15-4" },
      { id: "15.5", title: "Hosting Economics: $2/mo Shared Hosting vs VPS / Next.js", titleBn: "হোস্টিং ইকোনমিক্স ও প্রযুক্তি সিদ্ধান্ত", targetId: "sec-15-5" },
      { id: "15.6", title: "Interactive Multi-Topic Syntax Switcher & Simulator", titleBn: "ইন্টারেক্টিভ সিনট্যাক্স সুইচার ও রানার", targetId: "sec-15-6" }
    ]
  }
];
