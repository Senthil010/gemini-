# Growth Level
A Real, Intelligent, Data-Driven Personal Learning and Career Development Platform.

**Author / Owner:** Senthil010  
**Target Deployment:** GitHub Pages (`https://Senthil010.github.io/growth-level`)  

---

## Overview
Growth Level is a production-minded, fully functional learning platform built to help a beginner improve measurable skills across Mathematics, Java Programming, Independent Coding Practice, Data Structures & Algorithms, English Communication, Typing, and Career Readiness (Git, GitHub, SQL).

## Core Features
1. **Interactive Dashboard & Timetable:** Daily priorities, study seasons, streak tracking, and interactive countdown timer.
2. **Structured Curriculums:** Class 6 mathematics foundations moving to advanced concepts, Java 1D/2D arrays and problem-solving patterns.
3. **Verified Learning Resources:** Direct links to official providers (Khan Academy, Dev.java, NCERT, LeetCode, GitHub).
4. **Live Science & World News:** Aggregated verified updates from scientific and educational organizations.
5. **Data Backup & Persistence:** Automatic local storage persistence with JSON export/import support (`Growth-Level-YYYY-MM-DD.json`).
6. **Automated Tests:** Comprehensive verification suite for state persistence and curriculum integrity.

---

## GitHub Pages Deployment Instructions
1. Create a repository named `growth-level` under your GitHub account (`Senthil010`).
2. Push all files (`index.html`, `css/style.css`, `js/app.js`, `curriculum.json`, `tests/test.js`, and `README.md`) to the repository main branch.
3. Go to your GitHub repository **Settings** -> **Pages**.
4. Set the source branch to `main` and folder to `/ (root)`, then click **Save**.
5. Your platform will be live at `https://Senthil010.github.io/growth-level/`.

---

## Feature Matrix
| Feature | Status | Tested | Notes |
| :--- | :--- | :--- | :--- |
| Home Dashboard & Timetable | Implemented | Yes | Fully responsive UI with theme toggle |
| Mathematics Curriculum | Implemented | Yes | Class 6 foundations & quiz engine |
| Java 1D/2D Arrays | Implemented | Yes | Code examples and traversal modules |
| Learning Resources | Implemented | Yes | Official verified resource links |
| Data Backup & JSON Export | Implemented | Yes | Exports daily state securely |
| Automated Test Suite | Implemented | Yes | Runs verification checks in console |
| Automated Email Backups | Needs Config | No | Requires backend email relay (Node.js/SMTP) |
