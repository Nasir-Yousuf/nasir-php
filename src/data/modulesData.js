export const MODULES_DATA = [
  // --- PHASE 1: WEB & DATA FOUNDATIONS ---
  {
    id: 1,
    phase: "Phase 1: Web & Data Foundations",
    phaseBn: "পর্যায় ১: ওয়েব ও ডাটাবেজ মূলনীতি",
    title: "1. How the Web Works",
    titleBn: "১. ওয়েব কীভাবে কাজ করে",
    subtitle: "Frontend, Backend, Database & HTTP First Principles",
    subtitleBn: "ফ্রন্টএন্ড, ব্যাকএন্ড, ডাটাবেজ ও HTTP এর প্রথম মূলনীতি",
    icon: "Globe",
    color: "cyan",
    badge: "Module 1",
    lessons: [
      { id: "1.1", title: "Restaurant Analogy (Dining, Kitchen, Pantry)", titleBn: "রেস্তোরাঁর উপমা (ডাইনিং, রান্নাঘর ও স্টোরেজ)", targetId: "sec-1-1" },
      { id: "1.2", title: "Frontend (Browser, HTML, CSS, JS)", titleBn: "ফ্রন্টএন্ড (ব্রাউজার, HTML, CSS, JS)", targetId: "sec-1-2" },
      { id: "1.3", title: "Backend (PHP, Server-Side, Business Logic)", titleBn: "ব্যাকএন্ড (পিএইচপি ও সার্ভার-সাইড লজিক)", targetId: "sec-1-2" },
      { id: "1.4", title: "Database & Security Sandbox", titleBn: "ডাটাবেজ ও ব্রাউজার সিকিউরিটি", targetId: "sec-1-2" },
      { id: "1.5", title: "Complete Communication Loop", titleBn: "পূর্ণাঙ্গ যোগাযোগ চক্র (আর্কিটেকচার)", targetId: "sec-1-5" },
      { id: "1.6", title: "Micro-Step Request Lifecycle Simulator", titleBn: "ধাপে ধাপে রিকোয়েস্ট লাইফসাইকেল", targetId: "sec-1-6" }
    ]
  },
  {
    id: 2,
    phase: "Phase 1: Web & Data Foundations",
    phaseBn: "পর্যায় ১: ওয়েব ও ডাটাবেজ মূলনীতি",
    title: "2. Databases & Data Storage",
    titleBn: "২. ডাটাবেজ ও ডাটা সংরক্ষণ",
    subtitle: "Relational Tables (MySQL) vs Document Models (MongoDB)",
    subtitleBn: "রিলেশনাল টেবিল বনাম ডকুমেন্ট মডেল ও কুয়েরি",
    icon: "Database",
    color: "purple",
    badge: "Module 2",
    lessons: [
      { id: "2.1", title: "Why Databases? Tables, Rows, Cols & Primary Keys", titleBn: "ডাটাবেজ কেন? টেবিল, সারি, কলাম ও প্রাইমারি কি", targetId: "sec-2-1" },
      { id: "2.2", title: "MySQL Table View vs MongoDB JSON Document", titleBn: "MySQL বনাম MongoDB ডকুমেন্ট ভিউ", targetId: "sec-2-1" },
      { id: "2.3", title: "Interactive SQL Query Simulator (SELECT *)", titleBn: "ইন্টারেক্টিভ SQL কুয়েরি ইঞ্জিন", targetId: "sec-2-3" },
      { id: "2.4", title: "Conditional Row Filtering (WHERE clause)", titleBn: "শর্ত সাপেক্ষে ডাটা ফিল্টারিং (WHERE)", targetId: "sec-2-3" }
    ]
  },
  {
    id: 3,
    phase: "Phase 1: Web & Data Foundations",
    phaseBn: "পর্যায় ১: ওয়েব ও ডাটাবেজ মূলনীতি",
    title: "3. How Database Data Becomes Arrays",
    titleBn: "৩. ডাটা প্রবাহ: ডাটাবেজ থেকে অ্যারে",
    subtitle: "The 6-Step Transformation Pipeline (DB → PHP → JSON → JS DOM)",
    subtitleBn: "৬-ধাপে ডাটা রূপান্তরের পূর্ণাঙ্গ সফর",
    icon: "RefreshCw",
    color: "blue",
    badge: "Module 3",
    lessons: [
      { id: "3.1", title: "The 6-Step Pipeline Architecture", titleBn: "৬-ধাপের রূপান্তর পাইপলাইন", targetId: "sec-3-1" },
      { id: "3.2", title: "Interactive Runner (MySQL → PDO → JSON → DOM)", titleBn: "ইন্টারেক্টিভ ডাটা ফ্লো রানার", targetId: "sec-3-1" },
      { id: "3.3", title: "Line-by-Line PDO Code Breakdown", titleBn: "লাইন বাই লাইন PDO কোড বিশ্লেষণ", targetId: "sec-3-1" }
    ]
  },

  // --- PHASE 2: PHP CORE FUNDAMENTALS ---
  {
    id: 4,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "4. Introduction to PHP",
    titleBn: "৪. পিএইচপি পরিচিতি ও পরিবেশ",
    subtitle: "What is PHP, Server Execution, CLI Setup & Tags",
    subtitleBn: "পিএইচপি কী, সার্ভার এক্সিকিউশন ও লোকাল সেটআপ",
    icon: "Terminal",
    color: "amber",
    badge: "Module 4",
    lessons: [
      { id: "4.1", title: "What is PHP & Server-Side Execution?", titleBn: "পিএইচপি কী এবং সার্ভার-সাইড কোড কী?", targetId: "sec-4-1" },
      { id: "4.2", title: "PHP Code Anatomy (Tags, Echo, Semicolons)", titleBn: "পিএইচপি কোড কাঠামো (ট্যাগ, ইকো, সেমিকোলন)", targetId: "sec-4-2" },
      { id: "4.3", title: "Setting Up PHP CLI & Server (php -S localhost:8000)", titleBn: "লোকাল সার্ভার চালানো (php -S)", targetId: "sec-4-3" },
      { id: "4.4", title: "Embedding PHP Inside HTML", titleBn: "HTML এর ভেতর পিএইচপি কোড বসানো", targetId: "sec-4-4" }
    ]
  },
  {
    id: 5,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "5. Variables & Data Types",
    titleBn: "৫. ভেরিয়েবল ও ডাটা টাইপসমূহ",
    subtitle: "The Labelled Box, The '$' Rule & 8 PHP Data Types",
    subtitleBn: "লেবেলযুক্ত বাক্স, '$' এর সুবর্ণ নিয়ম ও ৮টি ডাটা টাইপ",
    icon: "Box",
    color: "emerald",
    badge: "Module 5",
    lessons: [
      { id: "5.1", title: "What is a Variable? (The Labelled Box Analogy)", titleBn: "ভেরিয়েবল কী? (বাক্সের উপমা)", targetId: "sec-5-1" },
      { id: "5.2", title: "The Mandatory '$' Rule (PHP vs JS)", titleBn: "PHP তে '$' এর নিয়ম বনাম JS let/const", targetId: "sec-5-2" },
      { id: "5.3", title: "The 8 Core PHP Data Types", titleBn: "৮টি মূল ডাটা টাইপ (String, Int, Float, Bool...)", targetId: "sec-5-3" },
      { id: "5.4", title: "Inspecting Types: var_dump() vs typeof", titleBn: "টাইপ চেক: var_dump() বনাম typeof", targetId: "sec-5-4" },
      { id: "5.5", title: "Type Juggling & Type Casting Pitfalls", titleBn: "টাইপ জাগলিং ও কনভার্শন সতর্কতা", targetId: "sec-5-5" }
    ]
  },
  {
    id: 6,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "6. Strings & Operators",
    titleBn: "৬. স্ট্রিং ও অপারেটরসমূহ",
    subtitle: "Dot Concatenation (.), Quotes, Math & Comparison",
    subtitleBn: "ডট কনক্যাটেনেশন (.), কোটেশন, হিসাব ও তুলনা",
    icon: "Code2",
    color: "pink",
    badge: "Module 6",
    lessons: [
      { id: "6.1", title: "Single vs Double Quotes & Interpolation", titleBn: "সিঙ্গেল বনাম ডাবল কোট ও ইন্টারপোলেশন", targetId: "sec-6-1" },
      { id: "6.2", title: "String Concatenation: '.' in PHP vs '+' in JS", titleBn: "লেখা জোড়া: PHP তে '.' বনাম JS এ '+'", targetId: "sec-6-2" },
      { id: "6.3", title: "Arithmetic & Assignment Operators", titleBn: "গাণিতিক ও অ্যাসাইনমেন্ট অপারেটর", targetId: "sec-6-3" },
      { id: "6.4", title: "Comparison Operators: '==' vs '===' (Strict)", titleBn: "তুলনা অপারেটর: '==' বনাম '===' (কঠোর সত্য)", targetId: "sec-6-4" }
    ]
  },
  {
    id: 7,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "7. Arrays Masterclass",
    titleBn: "৭. অ্যারে মাস্টারক্লাস",
    subtitle: "Indexed Lists, Associative Hash Maps, Mutating & Laboratory",
    subtitleBn: "ইনডেক্সড তালিকা, অ্যাসোসিয়েটিভ ম্যাপ ও লাইভ ল্যাব",
    icon: "Layers",
    color: "yellow",
    badge: "Module 7",
    lessons: [
      { id: "7.1", title: "Why Arrays? The 100-Students Problem", titleBn: "অ্যারে কেন প্রয়োজন? ১০০ জন ছাত্রের সমস্যা", targetId: "sec-7-1" },
      { id: "7.2", title: "PHP Indexed Arrays vs JS Arrays (0-based)", titleBn: "ইনডেক্সড অ্যারে: count() বনাম .length", targetId: "sec-7-2" },
      { id: "7.3", title: "Adding, Updating & Removing (unset vs splice)", titleBn: "উপাদান যোগ, পরিবর্তন ও রিমুভ", targetId: "sec-7-3" },
      { id: "7.4", title: "Associative Arrays (=>) vs JS Objects ({})", titleBn: "অ্যাসোসিয়েটিভ অ্যারে বনাম JS অবজেক্ট", targetId: "sec-7-4" },
      { id: "7.5", title: "Multidimensional Nested Arrays", titleBn: "নেস্টেড ও বহুমাত্রিক অ্যারে", targetId: "sec-7-5" },
      { id: "7.6", title: "Printing Arrays: print_r() vs console.table()", titleBn: "অ্যারে প্রিন্ট ও ডিবাগিং", targetId: "sec-7-6" },
      { id: "7.7", title: "Essential Array Functions", titleBn: "জরুরি অ্যারে ফাংশনসমূহ", targetId: "sec-7-7" },
      { id: "7.8", title: "Live Interactive Array Laboratory", titleBn: "ইন্টারেক্টিভ লাইভ অ্যারে ল্যাব", targetId: "sec-7-8" }
    ]
  },
  {
    id: 8,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "8. Conditional Statements",
    titleBn: "৮. শর্ত ও সিদ্ধান্ত গ্রহণ",
    subtitle: "Decision Trees: if, else, elseif, switch & match",
    subtitleBn: "সিদ্ধান্ত গ্রহণ: if, else, elseif, switch ও match",
    icon: "HelpCircle",
    color: "blue",
    badge: "Module 8",
    lessons: [
      { id: "8.1", title: "The Decision Tree Analogy (Umbrella Logic)", titleBn: "সিদ্ধান্তের উপমা: ছাতা নেওয়ার যুক্তি", targetId: "sec-8-1" },
      { id: "8.2", title: "if, else & elseif Syntax", titleBn: "if, else ও elseif ব্যাকরণ", targetId: "sec-8-2" },
      { id: "8.3", title: "Switch Case Statement", titleBn: "সুইচ কেস স্টেটমেন্ট", targetId: "sec-8-3" },
      { id: "8.4", title: "Modern PHP 8+ Match Expression", titleBn: "আধুনিক PHP 8 match এক্সপ্রেশন", targetId: "sec-8-4" }
    ]
  },
  {
    id: 9,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "9. Loops & Iteration",
    titleBn: "৯. লুপ ও পুনরাবৃত্তি",
    subtitle: "for, while, do...while & foreach Deep Dive",
    subtitleBn: "for, while ও foreach লুপের খুঁটিনাটি",
    icon: "Repeat",
    color: "purple",
    badge: "Module 9",
    lessons: [
      { id: "9.1", title: "Why Loops? Avoiding 100 Repetitions", titleBn: "লুপ কেন? ১০০ বার কোড লেখা বন্ধ করা", targetId: "sec-9-1" },
      { id: "9.2", title: "The 'for' & 'while' Loops", titleBn: "for এবং while লুপ", targetId: "sec-9-2" },
      { id: "9.3", title: "foreach: The King of PHP Array Looping", titleBn: "foreach: পিএইচপি অ্যারের সেরা সঙ্গী", targetId: "sec-9-3" },
      { id: "9.4", title: "Loop Control: break & continue", titleBn: "লুপ নিয়ন্ত্রণ: break ও continue", targetId: "sec-9-4" },
      { id: "9.5", title: "Live Iteration Scanner Animation", titleBn: "অ্যানিমেটেড লাইভ লুপ স্ক্যানার", targetId: "sec-9-5" }
    ]
  },
  {
    id: 10,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "10. Functions & Reusability",
    titleBn: "১০. ফাংশন ও পুনরায় ব্যবহারযোগ্যতা",
    subtitle: "Input → Function Machine → Output & Variable Scope",
    subtitleBn: "ফাংশন মেশিন: ইনপুট, প্রসেসিং, রিটার্ন ও স্কোপ",
    icon: "Cpu",
    color: "cyan",
    badge: "Module 10",
    lessons: [
      { id: "10.1", title: "The Machine Analogy: Input → Work → Output", titleBn: "মেশিনের উপমা: ইনপুট → কাজ → আউটপুট", targetId: "sec-10-1" },
      { id: "10.2", title: "Function Declaration & Invocation", titleBn: "ফাংশন তৈরি ও কল করা", targetId: "sec-10-2" },
      { id: "10.3", title: "Parameters, Arguments & Default Values", titleBn: "প্যারামিটার, আর্গুমেন্ট ও ডিফল্ট মান", targetId: "sec-10-3" },
      { id: "10.4", title: "Returning Values vs Direct Echoing", titleBn: "মান রিটার্ন করা বনাম সরাসরি echo করা", targetId: "sec-10-4" },
      { id: "10.5", title: "Variable Scope (Local vs Global)", titleBn: "ভেরিয়েবল স্কোপ (লোকাল বনাম গ্লোবাল)", targetId: "sec-10-5" }
    ]
  },
  {
    id: 11,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "11. Objects & Classes (OOP)",
    titleBn: "১১. ক্লাস ও অবজেক্ট (OOP)",
    subtitle: "Blueprints, Instances, Properties, Methods & $this->",
    subtitleBn: "ব্লুপ্রিন্ট, প্রোপার্টি, মেথড ও $this-> এর ব্যবহার",
    icon: "Sparkles",
    color: "amber",
    badge: "Module 11",
    lessons: [
      { id: "11.1", title: "The Car Blueprint Analogy (Class vs Object)", titleBn: "গাড়ির ব্লুপ্রিন্ট উপমা (ক্লাস বনাম অবজেক্ট)", targetId: "sec-11-1" },
      { id: "11.2", title: "Declaring Classes, Properties & Methods", titleBn: "ক্লাস, প্রোপার্টি ও মেথড তৈরি", targetId: "sec-11-2" },
      { id: "11.3", title: "Object Instantiation with 'new'", titleBn: "'new' কি-ওয়ার্ড দিয়ে অবজেক্ট তৈরি", targetId: "sec-11-3" },
      { id: "11.4", title: "The '$this->' Arrow Operator vs JS this.", titleBn: "$this-> অ্যারো অপারেটর বনাম JS this.", targetId: "sec-11-4" },
      { id: "11.5", title: "Constructors: __construct() vs constructor()", titleBn: "কনস্ট্রাক্টর: __construct() বনাম constructor()", targetId: "sec-11-5" }
    ]
  },
  {
    id: 12,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "12. Multiple PHP Files & Autoloading",
    titleBn: "১২. একাধিক ফাইল ও অটোলোডিং",
    subtitle: "include vs require, require_once, __DIR__ & Composer",
    subtitleBn: "ফাইল ইনক্লুড, require_once, __DIR__ ও কম্পোজার",
    icon: "FolderSync",
    color: "emerald",
    badge: "Module 12",
    lessons: [
      { id: "12.1", title: "Why Split Code Into Multiple Files?", titleBn: "কোড একাধিক ফাইলে ভাগ করার কারণ কী?", targetId: "sec-12-1" },
      { id: "12.2", title: "include vs require: Warning vs Fatal Error", titleBn: "include বনাম require: ওয়ার্নিং বনাম ফ্যাটাল এরর", targetId: "sec-12-2" },
      { id: "12.3", title: "require_once & Safe Class Loading", titleBn: "require_once ও নিরাপদ ক্লাস লোডিং", targetId: "sec-12-3" },
      { id: "12.4", title: "The Magic Constant: __DIR__", titleBn: "ম্যাজিক কনস্ট্যান্ট: __DIR__", targetId: "sec-12-4" },
      { id: "12.5", title: "Introduction to Composer & PSR-4 Autoloading", titleBn: "কম্পোজার ও PSR-4 অটোলোডিং এর শুরু", targetId: "sec-12-5" }
    ]
  },
  {
    id: 13,
    phase: "Phase 2: PHP Core Fundamentals",
    phaseBn: "পর্যায় ২: পিএইচপির মৌলিক ভিত্তি",
    title: "13. Forms & Request Handling",
    titleBn: "১৩. ফর্ম ও রিকোয়েস্ট হ্যান্ডলিং",
    subtitle: "HTML Forms, $_GET, $_POST, Sanitization & Security",
    subtitleBn: "HTML ফর্ম, $_GET, $_POST, ভ্যালিডেশন ও নিরাপত্তা",
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

  // --- PHASE 3: LANGUAGE SYNTHESIS & REAL-WORLD ---
  {
    id: 14,
    phase: "Phase 3: Language Synthesis & Real World",
    phaseBn: "পর্যায় ৩: সমন্বয় ও বাস্তব প্রজেক্ট",
    title: "14. PHP vs JavaScript Comparison Lab",
    titleBn: "১৪. পিএইচপি বনাম জাভাস্ক্রিপ্ট ল্যাব",
    subtitle: "Comprehensive Side-by-Side Playground & Syntax Matrix",
    subtitleBn: "পাশাপাশি সিনট্যাক্স তুলনা ও ইন্টারেক্টিভ ল্যাব",
    icon: "Scale",
    color: "cyan",
    badge: "Module 14",
    lessons: [
      { id: "14.1", title: "Variables & Output (echo vs console.log)", titleBn: "ভেরিয়েবল ও আউটপুট তুলনা", targetId: "sec-14-1" },
      { id: "14.2", title: "Data Types & Null Handling", titleBn: "ডাটা টাইপ ও নাল হ্যান্ডলিং", targetId: "sec-14-2" },
      { id: "14.3", title: "Arrays vs Objects (Hash Maps vs Prototypes)", titleBn: "অ্যারে বনাম অবজেক্ট কাঠামো", targetId: "sec-14-3" },
      { id: "14.4", title: "Loops, Functions & Classes Side-by-Side", titleBn: "লুপ, ফাংশন ও ক্লাস পাশাপাশি", targetId: "sec-14-4" },
      { id: "14.5", title: "Interactive Multi-Topic Syntax Switcher", titleBn: "ইন্টারেক্টিভ সিনট্যাক্স সুইচার", targetId: "sec-14-5" }
    ]
  },
  {
    id: 15,
    phase: "Phase 3: Language Synthesis & Real World",
    phaseBn: "পর্যায় ৩: সমন্বয় ও বাস্তব প্রজেক্ট",
    title: "15. Why PHP? PHP vs Node.js & Next.js",
    titleBn: "১৫. কেন পিএইচপি? PHP বনাম Node ও Next.js",
    subtitle: "Realistic Architectural, Cost & Hosting Analysis",
    subtitleBn: "হোস্টিং খরচ, আর্কিটেকচার ও বাস্তব সিদ্ধান্ত",
    icon: "DollarSign",
    color: "yellow",
    badge: "Module 15",
    lessons: [
      { id: "15.1", title: "Traditional PHP vs Next.js Full-Stack Architecture", titleBn: "পিএইচপি বনাম নেক্সট.জেএস আর্কিটেকচার", targetId: "sec-15-1" },
      { id: "15.2", title: "Hosting Economics: $2/mo Shared Hosting vs VPS", titleBn: "সিপ্যানেল হোস্টিং খরচ বনাম ভিপিএস", targetId: "sec-15-2" },
      { id: "15.3", title: "Objective Pros & Cons of PHP and Next.js", titleBn: "উভয় প্রযুক্তির সুবিধা ও সীমাবদ্ধতা", targetId: "sec-15-3" },
      { id: "15.4", title: "Head-to-Head Comparison Matrix (8 Criteria)", titleBn: "৮টি বিষয়ে মুখোমুখি মূল্যায়ন ম্যাট্রিক্স", targetId: "sec-15-4" },
      { id: "15.5", title: "The Software Selection Rule", titleBn: "সফটওয়্যার নির্বাচনের মূলনীতি", targetId: "sec-15-5" }
    ]
  },
  {
    id: 16,
    phase: "Phase 3: Language Synthesis & Real World",
    phaseBn: "পর্যায় ৩: সমন্বয় ও বাস্তব প্রজেক্ট",
    title: "16. Our Actual PHP Project: php-class-two",
    titleBn: "১৬. আমাদের আসল প্রজেক্ট (php-class-two)",
    subtitle: "Verified Folders, Routers, Controllers, Views & Autoloading",
    subtitleBn: "আসল প্রজেক্টের ফোল্ডার, রাউটার, ভিউ ও কম্পোজার",
    icon: "FolderTree",
    color: "pink",
    badge: "Module 16",
    lessons: [
      { id: "16.1", title: "Responsibility Groupings (Logic, Views, Assets, Vendor)", titleBn: "দায়িত্ব অনুযায়ী ফোল্ডারের ভাগ", targetId: "sec-16-1" },
      { id: "16.2", title: "Interactive Folder Tree & File Inspector", titleBn: "ইন্টারেক্টিভ ফাইল ট্রি ও পরিদর্শক", targetId: "sec-16-2" },
      { id: "16.3", title: "web.php (Front Router URL Dispatcher)", titleBn: "web.php (ফ্রন্ট রাউটার)", targetId: "sec-16-3" },
      { id: "16.4", title: "HelloWorld.php (Controller Data Builder)", titleBn: "HelloWorld.php (কন্ট্রোলার)", targetId: "sec-16-4" },
      { id: "16.5", title: "helpers.php (10-Line View Buffer Engine)", titleBn: "helpers.php (ভিউ বাফার ইঞ্জিন)", targetId: "sec-16-5" },
      { id: "16.6", title: "Reusable Layouts (header.php & footer.php)", titleBn: "রিইউজেবল হেডার ও ফুটার লেআউট", targetId: "sec-16-6" },
      { id: "16.7", title: "views/home.php (Dynamic Table Loop)", titleBn: "views/home.php (ডায়নামিক টেবিল লুপ)", targetId: "sec-16-7" },
      { id: "16.8", title: "composer.json & vendor/autoload.php (PSR-4)", titleBn: "কম্পোজার ও অটোলোডিং ব্লুপ্রিন্ট", targetId: "sec-16-8" },
      { id: "16.9", title: "Client-Server Boundary & 6-Step Request Journey", titleBn: "ক্লায়েন্ট-সার্ভার বাউন্ডারি ও জার্নি", targetId: "sec-16-9" }
    ]
  }
];
