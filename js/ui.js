// ─────────────────────────────────────
//  ui.js  –  DOM rendering helpers
// ─────────────────────────────────────

function badgeClass(b) {
  return b === "required" ? "required" : b === "recommended" ? "recommended" : "nice";
}
function timeEst(b) {
  if (b === "required")    return { label: "20–40 hrs", priority: "🔴 High Priority" };
  if (b === "recommended") return { label: "10–20 hrs", priority: "🟡 Medium Priority" };
  return { label: "5–10 hrs", priority: "🟢 Nice to Have" };
}
function actionHint(name, badge) {
  const m = {
    required:    `<strong>Next step:</strong> Complete a beginner course, then build one hands-on project using ${name}. Aim for 3–4 hours/week.`,
    recommended: `<strong>Next step:</strong> Read the official docs or a free tutorial for ${name}. Apply it in a side project to solidify understanding.`,
    nice:        `<strong>Next step:</strong> Bookmark a free resource and spend a weekend exploring ${name}. Broadens your profile significantly.`,
  };
  return m[badge] || m.nice;
}

// ── Skills grid ───────────────────────
let _allSkills = [];

function renderSkillsGrid(skills, checked) {
  _allSkills = skills;
  _doRender(skills, checked);
  updateSkillsCount();
}
function _doRender(skills, checked) {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";
  skills.forEach((skill, i) => {
    const item = document.createElement("div");
    item.className = "skill-item" + (checked.has(skill.name) ? " checked" : "");
    item.dataset.skill = skill.name;
    item.style.animation = `fadeUp 0.3s ${i * 0.03}s ease both`;
    item.innerHTML = `
      <div class="skill-checkbox"></div>
      <span class="skill-name">${skill.name}</span>
      <span class="badge badge-${badgeClass(skill.badge)}">${skill.badge}</span>`;
    item.addEventListener("click", () => {
      const on = item.classList.toggle("checked");
      on ? checkedSkills.add(skill.name) : checkedSkills.delete(skill.name);
      updateSkillsCount();
    });
    grid.appendChild(item);
  });
}
function filterSkills(q) {
  const filtered = q ? _allSkills.filter(s => s.name.toLowerCase().includes(q.toLowerCase())) : _allSkills;
  _doRender(filtered, checkedSkills);
}
function updateSkillsCount() {
  const el = document.getElementById("skillsCount");
  if (el) el.textContent = `${checkedSkills.size} of ${_allSkills.length} selected`;
}
function selectAllSkills() { _allSkills.forEach(s => checkedSkills.add(s.name)); _doRender(_allSkills, checkedSkills); updateSkillsCount(); }
function clearAllSkills()  { checkedSkills.clear(); _doRender(_allSkills, checkedSkills); updateSkillsCount(); }

// ── Score card ────────────────────────
function renderScoreCard(roleLabel, skills, gaps) {
  const total = skills.length;
  const have  = total - gaps.length;
  const pct   = Math.round((have / total) * 100);
  const circ  = 2 * Math.PI * 38;
  const off   = circ * (1 - pct / 100);

  const roleKey = getCurrentRoleKey();
  const reqT  = skills.filter(s => s.badge === "required").length;
  const recT  = skills.filter(s => s.badge === "recommended").length;
  const niceT = skills.filter(s => s.badge === "nice").length;
  const reqH  = reqT  - gaps.filter(g => g.badge === "required").length;
  const recH  = recT  - gaps.filter(g => g.badge === "recommended").length;
  const niceH = niceT - gaps.filter(g => g.badge === "nice").length;
  const rp = reqT  ? Math.round(reqH  / reqT  * 100) : 100;
  const cp = recT  ? Math.round(recH  / recT  * 100) : 100;
  const np = niceT ? Math.round(niceH / niceT * 100) : 100;

  document.getElementById("scoreCard").innerHTML = `
    <div class="score-ring">
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r="38" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="7"/>
        <circle cx="45" cy="45" r="38" fill="none" stroke="white" stroke-width="7"
          stroke-dasharray="${circ}" stroke-dashoffset="${off}"
          stroke-linecap="round" style="transition:stroke-dashoffset 1s ease;"/>
      </svg>
      <div class="score-ring-num">${pct}%</div>
    </div>
    <div class="score-info" style="flex:1;">
      <h3>Readiness for ${roleLabel}</h3>
      <p>${have} of ${total} skills covered.
        ${gaps.length > 0
          ? `Focus on <strong>${gaps.length} gap${gaps.length > 1 ? "s" : ""}</strong> below to boost your score.`
          : "🎉 Excellent — you're fully prepared!"}
      </p>
      <div class="score-breakdown">
        ${[["Required",rp],["Recommended",cp],["Nice to have",np]].map(([l,v]) => `
          <div class="breakdown-row">
            <span class="breakdown-label">${l}</span>
            <div class="breakdown-bar"><div class="breakdown-fill" style="width:${v}%"></div></div>
            <span class="breakdown-pct">${v}%</span>
          </div>`).join("")}
      </div>
    </div>`;
}

// ── Career path card ──────────────────
function renderCareerPath(roleKey) {
  const el = document.getElementById("careerPathSection");
  const cp = CAREER_PATHS[roleKey];
  if (!cp) { el.innerHTML = ""; return; }

  const stepsHtml = cp.steps.map((s, i) => `
    <div class="career-step ${i === 1 ? "current" : "future"}">
      <span class="career-step-label">${i === 1 ? cp.icon + " " : ""}${s}</span>
      ${i < cp.steps.length - 1 ? '<span class="career-step-arrow">→</span>' : ""}
    </div>`).join("");

  el.innerHTML = `
    <div class="career-path-card">
      <div class="career-path-title">📈 Career Progression Path</div>
      <div class="career-path-steps">${stepsHtml}</div>
    </div>`;
}

// ── Learning timeline ─────────────────
function renderTimeline(gaps) {
  const el = document.getElementById("timelineSection");
  if (!gaps.length) { el.innerHTML = ""; return; }

  const req  = gaps.filter(g => g.badge === "required");
  const rec  = gaps.filter(g => g.badge === "recommended");
  const nice = gaps.filter(g => g.badge === "nice");

  // Build weeks
  const weeks = [];
  const CHUNK = 3;
  for (let i = 0; i < req.length; i += CHUNK) {
    const wn = Math.floor(i / CHUNK) + 1;
    weeks.push({ label: `Week ${wn}–${wn+1}`, icon: "🔥", type: "req", skills: req.slice(i, i + CHUNK) });
  }
  const baseW = weeks.length * 2 + 1;
  for (let i = 0; i < rec.length; i += CHUNK) {
    const wn = baseW + Math.floor(i / CHUNK) * 2;
    weeks.push({ label: `Week ${wn}–${wn+1}`, icon: "⚡", type: "rec", skills: rec.slice(i, i + CHUNK) });
  }
  if (nice.length) {
    const wn = (weeks.length * 2) + 1;
    weeks.push({ label: `Week ${wn}+`, icon: "✨", type: "nice", skills: nice.slice(0, 4) });
  }

  const accentMap = { req: "var(--required)", rec: "#f59e0b", nice: "var(--nice)" };

  el.innerHTML = `
    <div class="timeline-card">
      <div class="timeline-title">📅 Suggested Learning Timeline</div>
      <div class="timeline-weeks">
        ${weeks.map(w => `
          <div class="timeline-week">
            <div class="timeline-week-header" style="color:${accentMap[w.type]}">${w.icon} ${w.label}</div>
            <div class="timeline-week-skills">
              ${w.skills.map(s => `<div class="timeline-skill-row">${s.name}</div>`).join("")}
            </div>
          </div>`).join("")}
      </div>
    </div>`;
}

// ── Project suggestions ───────────────
function renderProjectsBlock(roleKey) {
  const projs = ROLE_PROJECTS[roleKey];
  if (!projs) return "";
  return `
    <div class="projects-block">
      <div class="projects-block-title">🛠️ Build to Learn — Project Ideas</div>
      ${projs.map((p, i) => `
        <div class="project-row">
          <div class="project-num">${i + 1}</div>
          <span>${p}</span>
        </div>`).join("")}
    </div>`;
}

// ── Gap list ──────────────────────────
function renderGapsList(gaps) {
  const list = document.getElementById("gapsList");
  list.innerHTML = "";

  if (!gaps.length) {
    list.innerHTML = `<div style="text-align:center;padding:32px 0;color:var(--nice);
      font-family:'Syne',sans-serif;font-weight:700;font-size:18px;">🎉 No gaps! You're fully qualified.</div>`;
    document.getElementById("gapsTitle").style.display = "none";
    // Still show projects
    const projHtml = renderProjectsBlock(getCurrentRoleKey());
    if (projHtml) list.insertAdjacentHTML("beforeend", projHtml);
    return;
  }

  document.getElementById("gapsTitle").style.display = "";

  // Sort: required → recommended → nice
  const order = { required: 0, recommended: 1, nice: 2 };
  const sorted = [...gaps].sort((a, b) => (order[a.badge] ?? 3) - (order[b.badge] ?? 3));

  // Show projects block first
  const projHtml = renderProjectsBlock(getCurrentRoleKey());
  if (projHtml) list.insertAdjacentHTML("afterbegin", projHtml + '<div style="height:16px"></div>');

  sorted.forEach((gap, idx) => {
    const info   = getGapInfo(gap.name);
    const dotCls = gap.badge === "required" ? "high" : gap.badge === "recommended" ? "med" : "low";
    const time   = timeEst(gap.badge);

    const item = document.createElement("div");
    item.className = "gap-item";
    item.style.animation = `fadeUp 0.4s ${idx * 0.05}s ease both`;
    item.innerHTML = `
      <div class="gap-item-top">
        <div class="gap-skill-name">
          <span class="priority-dot priority-${dotCls}"></span>
          ${gap.name}
        </div>
        <span class="badge badge-${badgeClass(gap.badge)}">${gap.badge}</span>
      </div>
      <div class="gap-meta">
        <span class="gap-time">⏱ ${time.label}</span>
        <span class="gap-time">${time.priority}</span>
      </div>
      <div class="gap-desc">${info.desc}</div>
      <div class="gap-action-item">${actionHint(gap.name, gap.badge)}</div>
      <div class="courses-label">📚 Recommended Courses</div>
      <div class="course-cards">
        ${info.courses.map((c, i) => `
          <a class="course-card${i === 0 ? " featured" : ""}" href="${c.url}" target="_blank" rel="noopener">
            <div class="course-card-platform">${c.platform}</div>
            <div class="course-card-name">${c.name}</div>
            <div class="course-card-arrow">→</div>
          </a>`).join("")}
      </div>`;
    list.appendChild(item);
  });
}

// ── Step indicator ────────────────────
function setStepState(phase) {
  const steps = [1,2,3].map(n => document.getElementById("s"+n));
  const lines  = [1,2].map(n => document.getElementById("l"+n));
  steps.forEach(s => s && s.classList.remove("active","done"));
  lines.forEach(l => l && l.classList.remove("done"));
  if (phase === 1) { steps[0].classList.add("active"); }
  else if (phase === 2) { steps[0].classList.add("done"); steps[1].classList.add("active"); lines[0].classList.add("done"); }
  else { steps[0].classList.add("done"); steps[1].classList.add("done"); steps[2].classList.add("active"); lines[0].classList.add("done"); lines[1].classList.add("done"); }
}
