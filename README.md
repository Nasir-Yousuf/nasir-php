# PHP & JavaScript Side-by-Side Workshop — Interactive Architecture Explorer

An interactive educational presentation and laboratory website built with **React**, **Vite**, **Framer Motion**, and **Tailwind CSS**. It compares **PHP 8.x** and **JavaScript (ES6+ / Node / React)** side-by-side, from foundational programming syntax up through the architectural deconstruction of the real classroom project **`php-class-two`**.

Designed for classroom presentations, student workshops, and self-paced exploration, inspired by computer architecture block diagrams and the **National Institute of Youth Development (NIYD)** workshop slides.

---

## 🚀 Key Features

### 1. 🖥️ CPU/ALU-Style Interactive Architecture Diagram
- Modeled after computer architecture block diagrams with glowing nodes and animated request flows.
- Visualizes the full runtime path: **User Browser (Input) ➔ Front Router (`web.php`) ➔ Composer Autoloader (`vendor/autoload.php`) ➔ Controller (`HelloWorld.php`) ➔ View Engine (`helpers.php`) ➔ UI Template (`views/home.php`) ➔ Rendered Display (Output)**.
- Click **"▶ Trace Request Journey"** to watch animated sequential pulses travel through the entire server architecture.
- Click any node to open the **Line-by-Line Code Inspector** with input/output data flow mapping.

### 2. 🎬 Living Concept Visualizers on Every Lesson
- **Variables (RAM Memory Box)**: Animates memory allocation in server RAM, values entering via data busses, reassignment, and `echo` flushing.
- **If / Else (Decision Branching)**: Interactive condition diamond where users can test different values (e.g. 35°C vs 22°C) and watch the signal pulse down the **TRUE (Green)** or **FALSE (Red)** branch.
- **Loops (3-Stage Circuit)**: Counter (`$i`), Gate Check (`$i <= 3`), and Step Increment (`$i++`) with live terminal line streaming.
- **Functions (Processing Machine)**: Feed price and quantity inputs into the machine and observe the returned result package into `$bill`.
- **Arrays & Foreach (Memory Slots)**: Watch an animated pointer step through indexed memory slots `[0] -> [1] -> [2]` or inspect associative array key-value pairs.
- **Classes & Objects (Blueprint Stamper)**: Click `$car = new Car();` to stamp an object into RAM, then click `$car->getName()` to follow the arrow `->` operator.

### 3. 🇧🇩 বাংলা & 🇬🇧 English Bilingual Support
- Instant language toggle in the top bar: **[EN / বাংলা]**.
- All titles, explanations, bullet points, golden rules, and quiz questions flip seamlessly between English and student-friendly Bangla.
- Code blocks remain in standard English programming syntax.

### 4. 🧠 Interactive Knowledge Checkpoints & Quizzes
- Multiple-choice quizzes strategically placed after core concepts.
- Instant visual feedback with confetti celebration for correct answers.
- Bilingual explanations for why each answer is correct.

### 5. 📱 Responsive & Presentation-Ready
- **Mobile Friendly**: Terminals stack gracefully on phones and tablets.
- **Keyboard Navigation**:
  - <kbd>→</kbd> or <kbd>Space</kbd>: Next Slide
  - <kbd>←</kbd>: Previous Slide
  - <kbd>T</kbd>: Open Table of Contents modal
  - <kbd>F</kbd>: Toggle Fullscreen presentation mode
- **Progress Tracker**: Visual progress bar tracking completed lessons in `localStorage`.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite 5**
- **Framer Motion** (Fluid animations and spring physics)
- **Tailwind CSS 3**
- **Lucide React** (Icons)
- **Canvas-Confetti** (Interactive celebration effects)
- **Prism.js** (Syntax highlighting)

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Nasir-Yousuf/nasir-php.git
cd nasir-php
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production & preview
```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```text
nasir-php/
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   ├── AnimationCanvas.jsx     # Shared SVG wrapper with glowing grid and controls
│   │   │   ├── VariableAnimation.jsx   # Server RAM allocation & data bus visualizer
│   │   │   ├── IfElseAnimation.jsx     # Decision diamond with TRUE/FALSE branches
│   │   │   ├── LoopAnimation.jsx       # 3-stage loop iteration circuit
│   │   │   ├── FunctionAnimation.jsx   # Input -> processing machine -> return value
│   │   │   ├── ArrayAnimation.jsx      # Indexed memory slots with foreach pointer
│   │   │   └── ClassAnimation.jsx      # OOP blueprint stamping & arrow operator
│   │   ├── architecture/
│   │   │   ├── ArchitectureDiagram.jsx # CPU/ALU-style interactive architecture map
│   │   │   ├── RequestJourney.jsx      # 6-step horizontal request lifecycle timeline
│   │   │   ├── FolderTreeExplorer.jsx  # Interactive folder hierarchy with badges
│   │   │   └── FileInspector.jsx       # Line-by-line annotated source code viewer
│   │   ├── layout/
│   │   │   └── PDFSlideNavbar.jsx      # Top slide controls, EN/বাংলা toggle & jumpers
│   │   ├── presentation/
│   │   │   ├── SideBySideSlide.jsx     # Slide coordinator (Visuals + Terminals + Bullets)
│   │   │   └── TableOfContentsModal.jsx# 26-slide directory modal (T)
│   │   └── ui/
│   │       ├── ProgressTracker.jsx     # Progress bar & completed count
│   │       └── QuizCard.jsx            # Interactive multiple-choice checkpoint
│   ├── contexts/
│   │   └── LanguageContext.jsx         # English & বাংলা (Bangla) state management
│   ├── data/
│   │   ├── sideBySideCurriculum.js     # 26 slide definitions with bilingual translations
│   │   └── quizzes.js                  # Knowledge checkpoint questions & explanations
│   ├── styles/
│   │   └── index.css                   # Tailwind and custom laboratory styling
│   ├── App.jsx                         # Main slide deck coordinator with transitions
│   └── main.jsx                        # React root entry
├── extracted/
│   └── php-class-two/                  # Verified original PHP classroom project source
├── extracted_class_one/
│   └── php-learning/                   # Verified Class 1 PHP project source
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🎓 Credit

Developed for the **National Institute of Youth Development (NIYD)** classroom workshops.
