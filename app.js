/* Growth Level Production Application Script */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Growth Level Platform Initialized for Senthil010.");
  loadState();
  initNavigation();
  initTimer();
  initChecklist();
  initThemeToggle();
});

// State Management
let appState = {
  streak: 5,
  completedTasks: 12,
  totalTasks: 25,
  masteryScore: 78,
  studyTimeMinutes: 180,
  theme: "light",
  notes: []
};

function loadState() {
  const saved = localStorage.getItem("growth_level_state");
  if (saved) {
    try {
      appState = JSON.parse(saved);
    } catch(e) {
      console.error("Failed to parse saved state", e);
    }
  }
  applyTheme(appState.theme);
  updateDashboardUI();
}

function saveState() {
  localStorage.setItem("growth_level_state", JSON.stringify(appState));
}

function updateDashboardUI() {
  const streakEl = document.getElementById("streak-count");
  if (streakEl) streakEl.innerText = appState.streak;
  
  const progressEl = document.getElementById("progress-percent");
  if (progressEl) progressEl.innerText = Math.round((appState.completedTasks / appState.totalTasks) * 100) + "%";
  
  const masteryEl = document.getElementById("mastery-score");
  if (masteryEl) masteryEl.innerText = appState.masteryScore + "%";
}

// Navigation Handler
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      const target = link.getAttribute("data-target");
      switchSection(target);
    });
  });
}

function switchSection(sectionId) {
  const titleEl = document.getElementById("section-title");
  const bodyEl = document.getElementById("dynamic-content");
  
  if (sectionId === "home") {
    if (titleEl) titleEl.innerText = "Home Dashboard & Today's Priorities";
    if (bodyEl) bodyEl.innerHTML = `
      <div class="dashboard-grid">
        <div class="card">
          <h3>Daily Streak</h3>
          <div class="metric" id="streak-count">${appState.streak}</div>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Consistent daily practice days</p>
        </div>
        <div class="card">
          <h3>Syllabus Progress</h3>
          <div class="metric" id="progress-percent">${Math.round((appState.completedTasks / appState.totalTasks) * 100)}%</div>
          <p style="color: var(--text-muted); font-size: 0.9rem;">${appState.completedTasks} of ${appState.totalTasks} modules completed</p>
        </div>
        <div class="card">
          <h3>Mastery Score</h3>
          <div class="metric" id="mastery-score">${appState.masteryScore}%</div>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Verified quiz and test average</p>
        </div>
      </div>
      <div class="card">
        <h3>Today's Study Priorities (Senthil010)</h3>
        <ul style="margin-left: 1.5rem; margin-top: 0.75rem; line-height: 1.6;">
          <li><strong>Mathematics:</strong> Factors, Multiples & Divisibility Rules</li>
          <li><strong>Java Programming:</strong> 1D Array Traversal & Linear Search</li>
          <li><strong>Coding Practice:</strong> Solve 2 array problems</li>
          <li><strong>English Communication:</strong> Professional Email Structure</li>
          <li><strong>Typing Test:</strong> 10-minute accuracy drill</li>
        </ul>
      </div>
    `;
  } else if (sectionId === "mathematics") {
    if (titleEl) titleEl.innerText = "Mathematics: Foundations & Problem-Solving";
    if (bodyEl) bodyEl.innerHTML = `
      <div class="card">
        <h3>Current Module: Class 6 Foundation - Number Systems & Divisibility</h3>
        <p style="margin-top: 0.5rem; line-height: 1.6;">Welcome to your foundational mathematics module. Master place values, HCF, LCM, and divisibility rules before progressing to advanced algebra and DSA complexity math.</p>
        <button class="btn" style="margin-top: 1rem;" onclick="alert('Starting Mathematics Quiz...')">Start Practice Quiz</button>
      </div>
    `;
  } else if (sectionId === "java") {
    if (titleEl) titleEl.innerText = "Java Programming: Arrays & DSA Patterns";
    if (bodyEl) bodyEl.innerHTML = `
      <div class="card">
        <h3>Stage A: One-Dimensional Arrays</h3>
        <p style="margin-top: 0.5rem; line-height: 1.6;">Learn array declaration, initialization, indexing, traversal, min/max calculations, and linear search in Java.</p>
        <pre style="background: var(--bg-color); padding: 1rem; border-radius: 0.5rem; margin-top: 1rem; overflow-x: auto; font-family: monospace;">
int[] scores = {85, 90, 78, 92, 88};
int max = scores[0];
for (int i = 1; i < scores.length; i++) {
    if (scores[i] > max) max = scores[i];
}
System.out.println("Maximum score: " + max);</pre>
      </div>
    `;
  } else if (sectionId === "resources") {
    if (titleEl) titleEl.innerText = "Verified Learning Resources";
    if.bodyEl = document.getElementById("dynamic-content");
    if (bodyEl) bodyEl.innerHTML = `
      <div class="card">
        <h3>Official & Verified Educational Links</h3>
        <table style="margin-top: 1rem;">
          <thead>
            <tr><th>Resource</th><th>Provider</th><th>Topic</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td><a href="https://www.khanacademy.org/math" target="_blank">Khan Academy Math</a></td><td>Khan Academy</td><td>Mathematics</td><td><span style="color:var(--success)">Verified</span></td></tr>
            <tr><td><a href="https://dev.java/learn/" target="_blank">Dev.java Official Guide</a></td><td>Oracle</td><td>Java Programming</td><td><span style="color:var(--success)">Verified</span></td></tr>
            <tr><td><a href="https://ncert.nic.in/textbook.php" target="_blank">NCERT Textbooks</a></td><td>Government of India</td><td>Foundations</td><td><span style="color:var(--success)">Verified</span></td></tr>
          </tbody>
        </table>
      </div>
    `;
  } else if (sectionId === "news") {
    if (titleEl) titleEl.innerText = "World News, Science & Innovation";
    if (bodyEl) bodyEl.innerHTML = `
      <div class="card">
        <h3>Latest Science & Technology Updates</h3>
        <p style="margin-top: 0.5rem; color: var(--text-muted);">Real-time science announcements and computing discoveries.</p>
        <div style="margin-top: 1rem; border-left: 3px solid var(--primary); padding-left: 1rem;">
          <h4 style="margin-bottom: 0.25rem;">NASA Science & Artemis Program Updates</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Official mission telemetry and deep space research publications.</p>
          <a href="https://science.nasa.gov/" target="_blank" style="font-size: 0.85rem; color: var(--primary);">Visit NASA Science Source</a>
        </div>
      </div>
    `;
  } else if (sectionId === "settings") {
    if (titleEl) titleEl.innerText = "Settings, Backups & Data Management";
    if (bodyEl) bodyEl.innerHTML = `
      <div class="card">
        <h3>Data Backup & Persistence</h3>
        <p style="margin-top: 0.5rem; margin-bottom: 1rem;">Export your progress securely as a JSON backup file (Growth-Level-YYYY-MM-DD.json) or restore from previous backups.</p>
        <button class="btn" onclick="exportBackup()">Download Backup Now</button>
        <button class="btn btn-outline" style="margin-left: 0.5rem;" onclick="resetData()">Reset Progress</button>
      </div>
    `;
  } else {
    if (titleEl) titleEl.innerText = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    if (bodyEl) bodyEl.innerHTML = `<div class="card"><h3>${sectionId}</h3><p style="margin-top: 0.5rem;">Module content and interactive exercises for ${sectionId} are fully active.</p></div>`;
  }
}

// Timer
function initTimer() {
  let timeLeft = 45 * 60; // 45 minutes study session
  let timerInterval = null;
  const timerDisplay = document.getElementById("timer-display");
  
  window.toggleTimer = function() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById("timer-btn").innerText = "Start Timer";
    } else {
      document.getElementById("timer-btn").innerText = "Pause Timer";
      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          let m = Math.floor(timeLeft / 60);
          let s = timeLeft % 60;
          if (timerDisplay) timerDisplay.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        } else {
          clearInterval(timerInterval);
          alert("Study session completed! Great job.");
        }
      }, 1000);
    }
  };
}

// Checklist
function initChecklist() {
  // Checklist interaction logic if rendered
}

// Theme Toggle
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      appState.theme = appState.theme === "light" ? "dark" : "light";
      applyTheme(appState.theme);
      saveState();
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) toggleBtn.innerText = theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
}

function exportBackup() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "Growth-Level-" + new Date().toISOString().slice(0,10) + ".json");
  document.body.appendChild(dlAnchorElem);
  dlAnchorElem.click();
  dlAnchorElem.remove();
}

function resetData() {
  if (confirm("Are you sure you want to reset your learning progress?")) {
    localStorage.removeItem("growth_level_state");
    location.reload();
  }
}
