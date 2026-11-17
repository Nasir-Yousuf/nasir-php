export const CHAPTERS_DATA = [
  {
    id: 1,
    title: "1. Understanding How the Web Works",
    titleBn: "১. ওয়েব যেভাবে কাজ করে (ফ্রন্টএন্ড, ব্যাকএন্ড ও ডাটাবেজ)",
    subtitle: "Frontend, Backend & Database First Principles",
    subtitleBn: "প্রথম মূলনীতি: ফ্রন্টএন্ড, ব্যাকএন্ড ও ডাটাবেজ",
    icon: "Globe",
    color: "cyan",
    badge: "Chapter 1",
    subtopics: [
      { id: "1.1", title: "Restaurant Analogy", titleBn: "রেস্তোরাঁর উপমা" },
      { id: "1.2", title: "Frontend (Browser & Sandbox)", titleBn: "ফ্রন্টএন্ড ও ব্রাউজার" },
      { id: "1.3", title: "Backend (PHP & HTTP)", titleBn: "ব্যাকএন্ড ও সার্ভার" },
      { id: "1.4", title: "Database & Security", titleBn: "ডাটাবেজ ও নিরাপত্তা" },
      { id: "1.5", title: "Architecture Blueprint", titleBn: "আর্কিটেকচার ব্লুপ্রিন্ট" },
      { id: "1.6", title: "Micro-Step Request Lifecycle", titleBn: "রিকোয়েস্ট লাইফসাইকেল" }
    ]
  },
  {
    id: 2,
    title: "2. How Databases Store Data",
    titleBn: "২. ডাটাবেজ যেভাবে তথ্য সংরক্ষণ করে",
    subtitle: "Relational Tables vs Document JSON Models",
    subtitleBn: "রিলেশনাল টেবিল বনাম ডকুমেন্ট মডেল (MySQL ও MongoDB)",
    icon: "Database",
    color: "purple",
    badge: "Chapter 2",
    subtopics: [
      { id: "2.1", title: "Tables, Rows & Primary Keys", titleBn: "টেবিল, সারি ও প্রাইমারি কি" },
      { id: "2.2", title: "MySQL vs MongoDB View", titleBn: "MySQL বনাম MongoDB" },
      { id: "2.3", title: "SQL Query Engine", titleBn: "এসকিউএল কুয়েরি ইঞ্জিন" },
      { id: "2.4", title: "WHERE Clause Filtering", titleBn: "ডাটা ফিল্টারিং" }
    ]
  },
  {
    id: 3,
    title: "3. How Data Travels (DB → Backend → Frontend)",
    titleBn: "৩. ডাটা প্রবাহ: ডাটাবেজ → ব্যাকএন্ড → ফ্রন্টএন্ড",
    subtitle: "The 6-Step Transformation Pipeline",
    subtitleBn: "৬-ধাপে ডাটা রূপান্তরের পূর্ণাঙ্গ সফর",
    icon: "RefreshCw",
    color: "blue",
    badge: "Chapter 3",
    subtopics: [
      { id: "3.1", title: "MySQL Storage Record", titleBn: "ডাটাবেজ রেকর্ড" },
      { id: "3.2", title: "PHP PDO Driver Query", titleBn: "পিএইচপি PDO কুয়েরি" },
      { id: "3.3", title: "Associative Array in RAM", titleBn: "মেমোরিতে অ্যারে" },
      { id: "3.4", title: "json_encode() Serialization", titleBn: "JSON টেক্সট রূপান্তর" },
      { id: "3.5", title: "JavaScript response.json()", titleBn: "জাভাস্ক্রিপ্ট পার্সিং" },
      { id: "3.6", title: "DOM Viewport Rendering", titleBn: "ব্রাউজার স্ক্রিনে ডিসপ্লে" }
    ]
  },
  {
    id: 4,
    title: "4. Understanding Arrays from Zero",
    titleBn: "৪. শুরু থেকে অ্যারে: পিএইচপি বনাম জাভাস্ক্রিপ্ট",
    subtitle: "PHP vs JavaScript Lists, Dictionaries & Loops",
    subtitleBn: "ইনডেক্সড অ্যারে, অ্যাসোসিয়েটিভ অ্যারে ও লুপ",
    icon: "Box",
    color: "amber",
    badge: "Chapter 4",
    subtopics: [
      { id: "4.1", title: "Why Arrays? (100 Variables)", titleBn: "অ্যারে কেন প্রয়োজন?" },
      { id: "4.2", title: "Indexed Arrays (count vs length)", titleBn: "ইনডেক্সড অ্যারে" },
      { id: "4.3", title: "PHP Assoc Arrays (=>) vs JS Objects ({})", titleBn: "অ্যাসোসিয়েটিভ অ্যারে বনাম অবজেক্ট" },
      { id: "4.4", title: "Multidimensional Structures", titleBn: "বহুমাত্রিক অ্যারে" },
      { id: "4.5", title: "foreach vs forEach Looping", titleBn: "লুপ দিয়ে ঘোরা" },
      { id: "4.6", title: "Interactive Array Playground", titleBn: "লাইভ অ্যারে ল্যাব" }
    ]
  },
  {
    id: 5,
    title: "5. Why PHP? PHP vs Node.js, React and Next.js",
    titleBn: "৫. কেন পিএইচপি? PHP বনাম Node.js, React ও Next.js",
    subtitle: "Realistic Architectural & Hosting Analysis",
    subtitleBn: "হোস্টিং খরচ ও বাস্তবসম্মত প্রযুক্তি নির্বাচন",
    icon: "Scale",
    color: "yellow",
    badge: "Chapter 5",
    subtopics: [
      { id: "5.1", title: "Runtime Architecture Comparison", titleBn: "রানটাইম আর্কিটেকচার তুলনা" },
      { id: "5.2", title: "Shared Hosting ($2/mo) vs VPS", titleBn: "সিপ্যানেল হোস্টিং সুবিধা" },
      { id: "5.3", title: "Advantages & Disadvantages of PHP", titleBn: "পিএইচপির ভালো ও মন্দ দিক" },
      { id: "5.4", title: "Advantages & Disadvantages of Next.js", titleBn: "নেক্সট.জেএস এর ভালো ও মন্দ দিক" },
      { id: "5.5", title: "Head-to-Head Comparison Matrix", titleBn: "মুখোমুখি মূল্যায়ন টেবিল" },
      { id: "5.6", title: "The Software Selection Philosophy", titleBn: "প্রযুক্তি নির্বাচনের নীতি" }
    ]
  },
  {
    id: 6,
    title: "6. PHP Fundamentals and Core Lessons",
    titleBn: "৬. পিএইচপি ফান্ডামেন্টালস ও মূল পাঠ",
    subtitle: "Syntax, Variables, OOP & Request Handling",
    subtitleBn: "সিনট্যাক্স, ভেরিয়েবল, ক্লাস ও রিকোয়েস্ট হ্যান্ডলিং",
    icon: "Code2",
    color: "emerald",
    badge: "Chapter 6",
    subtopics: [
      { id: "6.1", title: "PHP Tags & Statements", titleBn: "পিএইচপি ট্যাগ" },
      { id: "6.2", title: "Variables & Dynamic Typing", titleBn: "ভেরিয়েবল ও $ নিয়ম" },
      { id: "6.3", title: "Data Types & gettype()", titleBn: "ডাটা টাইপসমূহ" },
      { id: "6.4", title: "Strings & Dot Concatenation", titleBn: "স্ট্রিং কনক্যাটেনেশন" },
      { id: "6.5", title: "If / Else Decisions", titleBn: "শর্ত ও সিদ্ধান্ত" },
      { id: "6.6", title: "Loops (for, while, foreach)", titleBn: "লুপসমূহ" },
      { id: "6.7", title: "Functions & Return Values", titleBn: "ফাংশন" },
      { id: "6.8", title: "OOP Classes & $this->", titleBn: "ক্লাস ও অবজেক্ট" },
      { id: "6.9", title: "include & require_once", titleBn: "ফাইল ইনক্লুড" },
      { id: "6.10", title: "Forms, $_GET & $_POST", titleBn: "ফর্ম ও রিকোয়েস্ট" }
    ]
  },
  {
    id: 7,
    title: "7. Our Actual PHP Project: Architecture",
    titleBn: "৭. আমাদের আসল পিএইচপি প্রজেক্ট (php-class-two)",
    subtitle: "Folders, Routers, Views & Composer PSR-4",
    subtitleBn: "ফোল্ডার, রাউটার, ভিউ ইঞ্জিন ও কম্পোজার",
    icon: "FolderTree",
    color: "pink",
    badge: "Chapter 7",
    subtopics: [
      { id: "7.1", title: "Responsibility Groupings", titleBn: "দায়িত্ব অনুযায়ী ফোল্ডার ভাগ" },
      { id: "7.2", title: "Interactive Folder Explorer", titleBn: "ইন্টারেক্টিভ ফাইল এক্সপ্লোরার" },
      { id: "7.3", title: "Front Router (web.php)", titleBn: "ফ্রন্ট রাউটার" },
      { id: "7.4", title: "Page Controller (HelloWorld.php)", titleBn: "পেজ কন্ট্রোলার" },
      { id: "7.5", title: "10-Line View Engine (helpers.php)", titleBn: "ভিউ ইঞ্জিন বাফারিং" },
      { id: "7.6", title: "Layouts (header & footer.php)", titleBn: "রিইউজেবল লেআউট" },
      { id: "7.7", title: "Dynamic Table (views/home.php)", titleBn: "ডায়নামিক টেবিল" },
      { id: "7.8", title: "Composer Autoloader (composer.json)", titleBn: "কম্পোজার অটোলোডিং" },
      { id: "7.9", title: "6-Step End-to-End Request Journey", titleBn: "রিকোয়েস্ট জার্নি" }
    ]
  }
];
