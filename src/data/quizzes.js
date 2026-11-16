export const QUIZZES = [
  {
    slidePage: 3,
    question: "In PHP, what character must EVERY variable start with?",
    questionBn: "PHP তে প্রতিটি ভেরিয়েবলের শুরুতে কোন চিহ্নটি বাধ্যতামূলক?",
    options: [
      { text: "$ (Dollar Sign)", textBn: "$ (ডলার সাইন)", correct: true },
      { text: "let or const", textBn: "let অথবা const", correct: false },
      { text: "@ (At sign)", textBn: "@ (অ্যাট সাইন)", correct: false },
      { text: "# (Hash)", textBn: "# (হ্যাশ)", correct: false }
    ],
    explanation: "PHP variables always begin with '$' (e.g. $name, $age). Forgetting '$' causes an immediate syntax error!",
    explanationBn: "PHP তে সব ভেরিয়েবলের আগে '$' থাকতে হবে ($name, $age)। '$' ভুলে গেলে সিনট্যাক্স এরর হবে!"
  },
  {
    slidePage: 5,
    question: "In PHP, how do you join two strings together?",
    questionBn: "PHP তে দুটি টেক্সট/স্ট্রিং জোড়া লাগাতে কোন অপারেটর ব্যবহার করা হয়?",
    options: [
      { text: "Dot '.' operator", textBn: "ডট '.' অপারেটর", correct: true },
      { text: "Plus '+' operator", textBn: "প্লাস '+' অপারেটর", correct: false },
      { text: "Ampersand '&'", textBn: "অ্যাম্পারস্যান্ড '&'", correct: false },
      { text: "Comma ','", textBn: "কমা ','", correct: false }
    ],
    explanation: "In PHP, '+' is strictly for math addition (5 + 5 = 10). To concatenate strings, always use '.' ('Hello ' . $name)!",
    explanationBn: "PHP তে '+' শুধু গণিতের যোগের জন্য। স্ট্রিং জোড়া লাগাতে সবসময় ডট '.' ব্যবহার করতে হবে!"
  },
  {
    slidePage: 10,
    question: "Which loop is the most popular in PHP for iterating through arrays?",
    questionBn: "PHP তে অ্যারের সব ডাটা পড়ার জন্য সবচেয়ে জনপ্রিয় লুপ কোনটি?",
    options: [
      { text: "foreach ($items as $item)", textBn: "foreach ($items as $item)", correct: true },
      { text: "for...of loop", textBn: "for...of লুপ", correct: false },
      { text: "repeat...until", textBn: "repeat...until", correct: false },
      { text: "loop through", textBn: "loop through", correct: false }
    ],
    explanation: "foreach ($collection as $item) is PHP's dedicated array iterator. In views/home.php, we use foreach($students as $student)!",
    explanationBn: "PHP তে foreach ($collection as $item) হলো সেরা লুপ। views/home.php তে foreach($students as $student) ব্যবহার করা হয়েছে!"
  },
  {
    slidePage: 14,
    question: "What is the special constructor method name inside a PHP class?",
    questionBn: "PHP ক্লাসের কনস্ট্রাক্টর মেথডের নাম কী?",
    options: [
      { text: "function __construct()", textBn: "function __construct()", correct: true },
      { text: "constructor()", textBn: "constructor()", correct: false },
      { text: "init()", textBn: "init()", correct: false },
      { text: "class()", textBn: "class()", correct: false }
    ],
    explanation: "In PHP, constructors use two underscores: __construct(). In JavaScript, it is simply constructor().",
    explanationBn: "PHP তে কনস্ট্রাক্টরের আগে দুটি আন্ডারস্কোর থাকে: __construct()। আর JavaScript এ হলো constructor()।"
  },
  {
    slidePage: 20,
    question: "In app/helpers/helpers.php, what does extract($data) do?",
    questionBn: "app/helpers/helpers.php এ extract($data) ফাংশনটি কী করে?",
    options: [
      { text: "Converts ['students' => $arr] into a local variable $students", textBn: "['students' => $arr] কে সরাসরি $students ভেরিয়েবলে রূপান্তর করে", correct: true },
      { text: "Deletes the array from memory", textBn: "মেমরি থেকে অ্যারে মুছে ফেলে", correct: false },
      { text: "Compresses HTML code", textBn: "HTML কোড কম্প্রেস করে", correct: false },
      { text: "Encrypts student passwords", textBn: "পাসওয়ার্ড এনক্রিপ্ট করে", correct: false }
    ],
    explanation: "extract($data) imports array keys into the current symbol table as real PHP variables — making them easily accessible in views/home.php!",
    explanationBn: "extract($data) অ্যারের নামগুলোকে সরাসরি লোকাল ভেরিয়েবলে পরিণত করে, যাতে views/home.php তে সহজেই $students পাওয়া যায়!"
  }
];
