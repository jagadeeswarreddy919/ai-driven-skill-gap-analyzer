// ─────────────────────────────────────
//  app.js  –  Application controller
// ─────────────────────────────────────

const checkedSkills = new Set();
let currentStep = 1;
let _lastGaps    = [];
let _jdSelectedRole = null;

const LOADING_STEPS = [
  "Parsing skill requirements…",
  "Comparing with your profile…",
  "Prioritising learning gaps…",
  "Building your roadmap…",
];

// ── Init ──────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  restoreFromURL();
  renderRolePreview();
  renderSkillsGrid(getCurrentRoleSkills(), checkedSkills);
});

// ── Dark mode ─────────────────────────
function initDarkMode() {
  const btn = document.getElementById("darkToggle");
  if (localStorage.getItem("darkMode") === "1") { document.body.classList.add("dark"); btn.textContent = "☀️"; }
  btn.addEventListener("click", () => {
    const d = document.body.classList.toggle("dark");
    btn.textContent = d ? "☀️" : "🌙";
    localStorage.setItem("darkMode", d ? "1" : "0");
  });
}

// ── Demo mode ─────────────────────────
function loadDemo() {
  document.getElementById("roleSelect").value = "fullstack";
  onRoleChange();
  goToStep(2);
  setTimeout(() => {
    ["HTML / CSS","JavaScript / TypeScript","React or Vue","REST APIs","Git & CI/CD","SQL Databases"]
      .forEach(n => checkedSkills.add(n));
    renderSkillsGrid(getCurrentRoleSkills(), checkedSkills);
    const d = document.getElementById("skillsStepDesc");
    if (d) d.textContent = "Demo loaded — 6 skills pre-selected for a Junior Full-Stack profile. Adjust and analyze!";
  }, 80);
}

// ── Mode tabs (Role vs JD) ────────────
function switchMode(mode) {
  document.getElementById("modeRole").style.display = mode === "role" ? "block" : "none";
  document.getElementById("modeJD").style.display   = mode === "jd"   ? "block" : "none";
  document.getElementById("tabRole").classList.toggle("active", mode === "role");
  document.getElementById("tabJD").classList.toggle("active",   mode === "jd");
  if (mode === "jd") {
    setTimeout(() => document.getElementById("jdInput").focus(), 50);
  }
}

// ── JD Matching ───────────────────────
let _jdTimer = null;
function onJDInput() {
  clearTimeout(_jdTimer);
  _jdTimer = setTimeout(analyzeJD, 450);
}

function analyzeJD() {
  const text = document.getElementById("jdInput").value.trim().toLowerCase();
  if (text.length < 60) {
    document.getElementById("jdResults").style.display = "none";
    return;
  }

  // Score each role by how many of its skills appear in the JD text
  const scores = Object.entries(ROLES_DATA).map(([key, role]) => {
    const matched = role.skills.filter(s => text.includes(s.name.toLowerCase()));
    const reqMatched = matched.filter(s => s.badge === "required").length;
    const reqTotal   = role.skills.filter(s => s.badge === "required").length;
    const pct = Math.round((matched.length / role.skills.length) * 100);
    return { key, label: role.label, pct, matched, reqMatched, reqTotal };
  });

  // Top 4 by pct
  const top = scores.sort((a, b) => b.pct - a.pct).slice(0, 4);
  const best = top[0];

  // Auto-set role if confidence is decent
  if (best.pct >= 30) {
    _jdSelectedRole = best.key;
    document.getElementById("roleSelect").value = best.key;
    onRoleChange();
  }

  // Render match cards
  const card = document.getElementById("jdMatchCard");
  card.innerHTML = `
    <div class="jd-match-title">🎯 Best Matching Roles</div>
    ${top.map(r => `
      <div class="jd-role-row ${r.key === best.key ? "selected" : ""}"
           onclick="selectJDRole('${r.key}')">
        <span class="jd-role-name">${r.label}</span>
        <div class="jd-role-bar"><div class="jd-role-fill" style="width:${r.pct}%"></div></div>
        <span class="jd-role-pct">${r.pct}%</span>
      </div>`).join("")}
    <div class="jd-skills-found">
      <div class="jd-skills-found-title">✅ ${best.matched.length} skills found in JD for "${best.label}"</div>
      ${best.matched.map(s => `<span class="jd-skill-chip">✓ ${s.name}</span>`).join("")}
      ${best.matched.length === 0 ? "<span style='font-size:12px;color:var(--text2)'>No exact skill matches yet — keep typing.</span>" : ""}
    </div>`;

  document.getElementById("jdResults").style.display = "block";
  document.getElementById("jdHint").style.display = "none";
}

function selectJDRole(key) {
  _jdSelectedRole = key;
  document.getElementById("roleSelect").value = key;
  onRoleChange();
  // Update selection highlight
  document.querySelectorAll(".jd-role-row").forEach(r => {
    r.classList.toggle("selected", r.getAttribute("onclick").includes(key));
  });
  // Re-run matched skills display
  analyzeJD();
}

// ── Role helpers ──────────────────────
function getCurrentRoleKey()    { return document.getElementById("roleSelect").value; }
function getCurrentRoleSkills() { return ROLES_DATA[getCurrentRoleKey()].skills; }

function onRoleChange() {
  checkedSkills.clear();
  renderRolePreview();
  renderSkillsGrid(getCurrentRoleSkills(), checkedSkills);
  const s = document.getElementById("skillSearch");
  if (s) s.value = "";
}

function renderRolePreview() {
  const skills = getCurrentRoleSkills();
  const req  = skills.filter(s => s.badge === "required").length;
  const rec  = skills.filter(s => s.badge === "recommended").length;
  const nice = skills.filter(s => s.badge === "nice").length;
  document.getElementById("rolePreview").innerHTML = `
    <div class="role-preview-pills">
      <div class="role-pill pill-required">${req} Required</div>
      <div class="role-pill pill-recommended">${rec} Recommended</div>
      <div class="role-pill pill-nice">${nice} Nice to have</div>
      <div class="role-pill pill-total">${skills.length} Total</div>
    </div>`;
}

// ── Step nav ──────────────────────────
function goToStep(step) {
  [1, 2].forEach(n => { const el = document.getElementById("card-step" + n); if (el) el.style.display = "none"; });
  document.getElementById("loading").classList.remove("show");
  document.getElementById("results").classList.remove("show");
  currentStep = step;

  if (step === 2) {
    checkedSkills.clear();
    renderSkillsGrid(getCurrentRoleSkills(), checkedSkills);
    const s = document.getElementById("skillSearch");
    if (s) s.value = "";
  }

  const card = document.getElementById("card-step" + step);
  if (card) { card.style.display = "block"; card.style.animation = "fadeUp 0.35s ease both"; }
  setStepState(step);
}

// ── Analysis ──────────────────────────
function runAnalysis() {
  const roleKey = getCurrentRoleKey();
  const skills  = getCurrentRoleSkills();
  const gaps    = skills.filter(s => !checkedSkills.has(s.name));
  _lastGaps     = gaps;

  document.getElementById("card-step2").style.display = "none";
  document.getElementById("loading").classList.add("show");
  setStepState("loading");

  // Animated loading steps
  const stepsEl = document.getElementById("loadingSteps");
  stepsEl.innerHTML = LOADING_STEPS.map((m, i) =>
    `<div class="loading-step-row" id="lstep${i}">
       <div class="loading-step-dot"></div><span>${m}</span>
     </div>`).join("");

  let idx = 0;
  const advance = () => {
    document.querySelectorAll(".loading-step-row").forEach((r, i) => {
      r.className = "loading-step-row" + (i < idx ? " done" : i === idx ? " active" : "");
    });
    if (idx < LOADING_STEPS.length - 1) { idx++; setTimeout(advance, 600); }
  };
  advance();

  setTimeout(() => {
    document.getElementById("loading").classList.remove("show");
    renderScoreCard(ROLES_DATA[roleKey].label, skills, gaps);
    renderCareerPath(roleKey);
    renderTimeline(gaps);
    renderGapsList(gaps);
    document.getElementById("feedbackBar").style.display = "flex";
    document.getElementById("fb-yes").classList.remove("selected");
    document.getElementById("fb-no").classList.remove("selected");
    document.getElementById("feedbackThanks").style.display = "none";
    document.getElementById("results").classList.add("show");
    setStepState("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 2600);
}

// ── Re-run ────────────────────────────
function rerunAnalysis() {
  document.getElementById("results").classList.remove("show");
  goToStep(2);
  // Restore previous checked state
  _lastGaps.forEach(() => {}); // gaps were what was UN-checked; re-check the rest
}

// ── Feedback ──────────────────────────
function submitFeedback(val) {
  document.getElementById("fb-yes").classList.toggle("selected", val === "yes");
  document.getElementById("fb-no").classList.toggle("selected",  val === "no");
  document.getElementById("feedbackThanks").style.display = "inline";
  // In a real app, send to analytics here
}

// ── Share ─────────────────────────────
function copyShareLink() {
  const url = window.location.href.split("?")[0] + "?role=" + encodeURIComponent(getCurrentRoleKey());
  navigator.clipboard.writeText(url).then(() => showToast("🔗 Link copied!")).catch(() => prompt("Copy:", url));
}

function showToast(msg) {
  let t = document.getElementById("toastEl");
  if (!t) {
    t = document.createElement("div"); t.id = "toastEl";
    t.style.cssText = `position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
      background:#1a1535;color:white;padding:10px 22px;border-radius:40px;
      font-family:'Syne',sans-serif;font-size:13px;font-weight:700;z-index:9999;
      box-shadow:0 8px 24px rgba(0,0,0,0.25);pointer-events:none;`;
    document.body.appendChild(t);
  }
  t.textContent = msg; t.style.opacity = "1";
  setTimeout(() => t.style.opacity = "0", 2500);
}

// ── URL restore ───────────────────────
function restoreFromURL() {
  const role = new URLSearchParams(window.location.search).get("role");
  if (role && document.querySelector(`#roleSelect option[value="${role}"]`)) {
    document.getElementById("roleSelect").value = role;
  }
}

// ── Reset ─────────────────────────────
function goBack() {
  checkedSkills.clear();
  renderSkillsGrid(getCurrentRoleSkills(), checkedSkills);
  goToStep(1);
}
