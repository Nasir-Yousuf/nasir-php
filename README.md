# PHP & JavaScript Side-by-Side Workshop — Interactive Architecture Explorer

An interactive educational presentation and laboratory website built with **React**, **Vite**, and **Tailwind CSS**. It compares **PHP 8.x** and **JavaScript (ES6+ / Node / React)** side-by-side, from foundational programming syntax up through the architectural deconstruction of the real classroom project **`php-class-two`**.

Designed for classroom presentations and self-paced exploration, following the presentation design system of the **National Institute of Youth Development (NIYD)** workshop slides.

---

## 🚀 Features

- **Side-by-Side Terminal Windows**: Every concept displays PHP on the left and JavaScript on the right simultaneously in macOS-styled terminal windows with syntax highlighting.
- **Interactive Code Runners**: Click **"▶ Run PHP"** and **"▶ Run JavaScript"** to simulate real execution outputs live with animations.
- **26 Interactive Slides**:
  - **Phase 1: Language Basics Side-by-Side (Slides 1–15)**:
    - Variables (`$name` vs `let / const`)
    - Data Types & Type Juggling
    - Strings & Concatenation (Dot `.` vs `+` / template literals)
    - Math Operators & Increment Shortcuts
    - If / Else Decisions
    - Multi-Way Decision Ladders (`elseif` vs `else if`)
    - Loops (`for` and `while`)
    - Array Iteration (`foreach` vs `for...of`)
    - Functions & Parameters
    - Indexed Arrays (Ordered Lists)
    - Associative Arrays (PHP) vs Objects (JS)
    - OOP Classes & Constructors (`__construct()` vs `constructor()`)
    - Object Instantiation & `$this->` vs `this.`
  - **Phase 2: The Real `php-class-two` Project (Slides 16–26)**:
    - Interactive Architecture Blueprint (`php-class-two/` tree)
    - Front Router (`web.php` with `$_GET['page']` dispatching)
    - Page Controller (`app/classes/HelloWorld.php` managing student data)
    - 10-Line View Engine (`app/helpers/helpers.php` using `ob_start()` & `extract()`)
    - Reusable Partials (`views/includes/header.php` & `footer.php`)
    - Dynamic Page View (`views/home.php` Bootstrap table foreach loop)
    - Composer Autoloading (`composer.json` PSR-4 and files array)
    - Client-Server Execution Timeline & Frontend Assets (`assets/js/main.js`)
    - Complete 6-Step Request Lifecycle
    - Recap & Celebration
- **Keyboard Navigation**:
  - <kbd>→</kbd> or <kbd>Space</kbd>: Next Slide
  - <kbd>←</kbd>: Previous Slide
  - <kbd>T</kbd>: Open Table of Contents modal
  - <kbd>F</kbd>: Toggle Fullscreen presentation mode

---

## 🛠️ Tech Stack

- **React 18**
- **Vite 5**
- **Tailwind CSS 3**
- **Lucide React** (Icons)
- **Canvas-Confetti** (Interactive feedback)
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

### 4. Build for production
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
│   │   ├── layout/
│   │   │   └── PDFSlideNavbar.jsx      # Top slide controls, phase switchers & jumpers
│   │   └── presentation/
│   │       ├── SideBySideSlide.jsx     # Side-by-side terminal windows & output boxes
│   │       └── TableOfContentsModal.jsx# 26-slide roadmap modal (T)
│   ├── data/
│   │   └── sideBySideCurriculum.js     # 26 slide definitions with verified code
│   ├── styles/
│   │   └── index.css                   # Tailwind and custom laboratory styling
│   ├── App.jsx                         # Main slide deck coordinator
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
