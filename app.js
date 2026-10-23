/* Values in Tension: slide engine. Content is in content/slides.js. */
(function () {
  "use strict";
  const S = window.SLIDES, SEC = window.SECTIONS, L = window.LINKS, P = window.POLLS, R = window.RHYTHM;
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const idx = (id) => S.findIndex((s) => s.id === id);
  const ext = (href, label) => `<a class="ext" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}<span class="sr"> (opens in a new tab)</span><span aria-hidden="true"> ↗</span></a>`;
  const linkOf = (k) => L[k] || k;

  let cur = 0, instructor = false;
  try { instructor = localStorage.getItem("vit-instructor") === "1"; } catch (e) {}

  /* ---------- block renderers ---------- */
  const B = {
    p: (b) => `<p class="rv">${esc(b.text)}</p>`,
    lead: (b) => `<p class="lead rv">${esc(b.text)}</p>`,
    note: (b) => `<p class="note rv">${esc(b.text)}</p>`,
    q: (b) => `<div class="keyq rv">${b.label ? `<span class="keyq-label">${esc(b.label)}</span>` : ""}<p>${esc(b.text)}</p></div>`,
    list: (b) => `<ul class="prompts">${b.items.map((i) => `<li class="rv">${esc(i)}</li>`).join("")}</ul>`,
    transition: (b) => `<p class="transition rv"><span class="tlabel">Where this leads</span>${esc(b.text)}</p>`,
    terms: (b) => `<dl class="terms">${b.items.map((i) => `<div class="rv"><dt>${esc(i.h)}</dt><dd>${esc(i.d)}</dd></div>`).join("")}</dl>`,
    compare: (b) => `<div class="compare">${b.items.map((i, n) => `<div class="rv"><span class="cn">${n + 1}</span><h3>${esc(i.h)}</h3><p>${esc(i.d)}</p></div>`).join("")}</div>`,
    links: (b) => `<p class="rv linkrow">${b.items.map((i) => ext(linkOf(i.href), esc(i.label))).join(" ")}</p>`,
    source: (b) => `<p class="source rv"><em>${esc(b.cite)}</em><br>${esc(b.by)}<br>${ext(linkOf(b.href), "Read the original article")}</p>`,
    article: (b) => `<article class="paper rv"><p class="paper-pub">${esc(b.pub)}</p><h2>${esc(b.title)}</h2><p class="paper-deck">${esc(b.deck)}</p>
      <p class="paper-by">By ${esc(b.by)} · ${esc(b.date)}</p><p>${esc(b.synopsis)}</p>
      ${b.excerpt ? `<blockquote>“${esc(b.excerpt)}”<cite>Naishu Vempali</cite></blockquote>` : ""}
      <p>${ext(linkOf(b.href), "Read the full article")}</p></article>`,
    flyer: (b) => `<div class="flyer rv"><div class="flyer-img">${b.flyerSrc ? `<img src="${esc(b.flyerSrc)}" alt="Flyer for Neuro Nexus: Student–Faculty Conversation on Neurodivergent Student Learning, November 2, 12 to 2 PM, Student Center">`
        : `<span class="placeholder">[ASSET NEEDED: Neuro Nexus event flyer image]</span>`}</div>
      <div><p class="eyebrow">Upcoming event</p><h3>Neuro Nexus: Student–Faculty Conversation on Neurodivergent Student Learning</h3>
      <p>November 2, 12–2 PM, Student Center</p><p class="small">Berkeley students and faculty are already discussing neurodivergent learning experiences.</p></div></div>`,
    video: () => `<div class="video rv"><div class="video-play" aria-hidden="true"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" stroke-width="3"/><path d="M26 20l18 12-18 12z" fill="currentColor"/></svg></div>
      <div><p class="eyebrow">Video</p><h3>Testimony on AI and labor, Australian parliamentary hearing</h3>
      <p>${ext(L.video, "Watch on LinkedIn")}</p>
      <ul class="meta"><li>Speaker: <span class="placeholder">[speaker name to be confirmed]</span></li>
      <li>Transcript or captions: <span class="placeholder">[pending]</span></li>
      <li>Backup link if playback fails: <span class="placeholder">[pending]</span></li></ul></div></div>`,
    book: () => `<div class="book rv"><div class="cover" aria-hidden="true"><span>The 12 Week Year</span><small>Moran · Lennington</small></div>
      <div><p class="eyebrow">Book</p><h3><em>The 12 Week Year</em></h3><p>Brian P. Moran and Michael Lennington</p>
      <p>${ext(L.book, "Book record")}</p><p class="small placeholder">[Verified cover image pending]</p></div></div>`,
    poll: (b) => pollBlock(P[b.poll]),
    assign: () => assignBlock(),
    agenda: () => agendaBlock()
  };

  function pollBlock(p) {
    return `<div class="poll rv"><a class="poll-btn" href="${esc(p.respondent)}" target="_blank" rel="noopener noreferrer" aria-label="Cast Your Perspective: poll ${p.n} of 4, opens Google Forms in a new tab">
        <span class="poll-ico">${window.ICONS[p.icon]}</span><span class="poll-t">Cast Your Perspective</span><span class="poll-s">Poll ${p.n} of 4 · opens in a new tab ↗</span></a>
      <div class="poll-side"><p class="lead">There are no correct answers. Respond on your own, then come back to this tab.</p>
        <p class="small">After you submit, close the Google Form tab or switch back here. We'll look at the results together on the next slide.</p>
        <p class="instr-only small"><a class="ext" href="${esc(p.results)}" target="_blank" rel="noopener noreferrer">Instructor: open Form ${p.n} results<span class="sr"> (opens in a new tab)</span> ↗</a></p></div></div>`;
  }

  function assignBlock() {
    const prompts = [
      ["Reconsider your thinking", ["Identify one tension from today's inquiry that challenged, complicated, or reinforced your perspective.", "What did you encounter in the readings, stories, polls, or discussions that influenced your thinking?"]],
      ["Values into practice", ["Identify a value that matters to you as a learner or emerging professional.", "What recurring action would help you express that value?", "What conditions, relationships, or supports would make it possible to sustain that practice?"]],
      ["From personal reflection to participatory inquiry", ["Return to the problem you're investigating at UC Berkeley.", "Whose experiences or perspectives might challenge your current understanding?", "What question could you ask those people before deciding what needs to change?"]]
    ];
    const sub = L.bcourses
      ? `<a class="submit-btn" href="${esc(L.bcourses)}" target="_blank" rel="noopener noreferrer">Open the bCourses assignment<span class="sr"> (opens in a new tab)</span> ↗</a>`
      : `<div class="submit-btn pending" role="note"><span class="placeholder">[bCourses submission link: final assignment URL pending]</span></div>`;
    return `<p class="lead rv">15 minutes. Individual reflection. Submit through bCourses.</p>
      <div class="assign">${prompts.map((p, i) => `<section class="rv"><h2><span class="cn">${i + 1}</span>${esc(p[0])}</h2>${p[1].map((t) => `<p>${esc(t)}</p>`).join("")}</section>`).join("")}</div>
      <div class="submit rv">${sub}<p class="small">Take the full 15 minutes. This slide stays here until you move on.</p></div>`;
  }

  function agendaBlock() {
    const h = [34, 62, 62, 62, 62, 92];
    return `<ol class="agenda">${SEC.map((s, i) => `<li class="rv${i === S[cur].section ? " here" : ""}"><a href="#${firstOf(i)}"><span class="bar" style="height:${h[i]}px" aria-hidden="true"></span>
      <span class="at">${s.time}</span><span class="an">${esc(s.id === 5 ? "Attendance reflection" : s.label)}</span><span class="ad">${s.mins} min</span></a></li>`).join("")}</ol>`;
  }
  const firstOf = (sec) => S.find((s) => s.section === sec).id;

  /* ---------- slide ---------- */
  function rhythmStrip(r) {
    if (r === null || r === undefined) return "";
    const on = Array.isArray(r) ? (i) => i >= r[0] && i <= r[1] : (i) => i === r;
    return `<ol class="rhythm" aria-label="Inquiry rhythm">${R.map((n, i) => `<li${on(i) ? ' class="on" aria-current="step"' : ""}>${n}</li>`).join("")}</ol>`;
  }

  function slideHTML(s) {
    const sec = SEC[s.section];
    const big = ["title", "closing", "provocation"].includes(s.kind);
    const artKey = sec.art;
    const ins = s.instructor || {};
    const pollRes = ins.poll ? `<p><a class="ext" href="${esc(P[ins.poll].results)}" target="_blank" rel="noopener noreferrer">Open Form ${ins.poll} results ↗</a></p>` : "";
    return `<div class="slide k-${s.kind} ${s.theme}${big ? " big" : ""}" data-section="${s.section}">
      <div class="art-wrap">${window.ART[artKey]()}</div>
      <div class="inner">
        ${s.kicker ? `<p class="kicker rv">${esc(s.kicker)}</p>` : ""}
        <h1 class="rv" id="slide-title" tabindex="-1">${esc(s.title)}</h1>
        ${s.sub ? `<p class="subtitle rv">${esc(s.sub)}</p>` : ""}
        ${s.blocks.map((b) => B[b.t](b)).join("")}
        ${rhythmStrip(s.rhythm)}
      </div>
      <aside class="instr" aria-label="Instructor notes">
        <p class="instr-h">Instructor · ${esc(sec.label)} · ${sec.time}</p>
        <p><strong>Purpose.</strong> ${esc(sec.purpose)}</p>
        ${ins.say ? `<p><strong>Say / do.</strong> ${esc(ins.say)}</p>` : ""}
        ${ins.move ? `<p>${esc(ins.move)}</p>` : ""}
        ${pollRes}
        ${ins.verify ? `<p class="vflag"><strong>Check before class.</strong> ${esc(ins.verify)}</p>` : ""}
        <p class="small"><a href="#0-3">Back to agenda</a> · A client-side toggle is not authentication.</p>
      </aside>
    </div>`;
  }

  /* ---------- chrome ---------- */
  function buildProgress() {
    const el = $("#ticks");
    el.innerHTML = SEC.map((sec) => `<div class="seg" data-sec="${sec.id}"><span class="seg-l">${esc(sec.short)}</span><div class="seg-t">${
      S.map((s, i) => s.section === sec.id ? `<a class="tick" href="#${s.id}" data-i="${i}" aria-label="Slide ${i + 1}: ${esc(s.title)}"></a>` : "").join("")}</div></div>`).join("");
  }

  function render(first) {
    const s = S[cur], stage = $("#stage");
    document.title = s.id === "0-1" ? "Values in Tension · Who Are We Becoming?" : `${s.title} · Values in Tension`;
    stage.innerHTML = slideHTML(s);
    stage.className = "stage anim";
    document.body.dataset.theme = s.theme;
    document.body.classList.toggle("instructor", instructor);
    stage.scrollTop = 0;
    $("#count").textContent = `${cur + 1} / ${S.length}`;
    $("#secname").textContent = SEC[s.section].label + " · " + SEC[s.section].time;
    $("#prev").disabled = cur === 0; $("#next").disabled = cur === S.length - 1;
    document.querySelectorAll(".tick").forEach((t) => {
      const i = +t.dataset.i; t.classList.toggle("done", i < cur); t.classList.toggle("now", i === cur);
      if (i === cur) t.setAttribute("aria-current", "step"); else t.removeAttribute("aria-current");
    });
    document.querySelectorAll(".seg").forEach((g) => g.classList.toggle("now", +g.dataset.sec === s.section));
    $("#fill").style.width = ((cur + 1) / S.length * 100) + "%";
    $("#live").textContent = `Slide ${cur + 1} of ${S.length}: ${s.title}`;
    stage.querySelectorAll(".rv").forEach((n, i) => n.style.setProperty("--d", Math.min(i, 12) * 60 + "ms"));
    if (!first) { const h = $("#slide-title"); if (h) h.focus({ preventScroll: true }); }
  }

  function go(i) {
    i = Math.max(0, Math.min(S.length - 1, i));
    if (S[i].id === location.hash.slice(1)) { cur = i; render(); } else location.hash = S[i].id;
  }
  function fromHash(first) {
    const i = idx(location.hash.slice(1));
    cur = i >= 0 ? i : 0;
    render(first);
  }
  function setInstructor(on) {
    instructor = on;
    try { localStorage.setItem("vit-instructor", on ? "1" : "0"); } catch (e) {}
    document.body.classList.toggle("instructor", on);
    const b = $("#ibtn"); b.setAttribute("aria-pressed", on ? "true" : "false");
    $("#live").textContent = on ? "Instructor mode on" : "Instructor mode off";
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildProgress();
    window.addEventListener("hashchange", () => fromHash(false));
    $("#prev").addEventListener("click", () => go(cur - 1));
    $("#next").addEventListener("click", () => go(cur + 1));
    $("#agendabtn").addEventListener("click", () => { location.hash = "0-3"; });
    $("#ibtn").addEventListener("click", () => setInstructor(!instructor));
    document.addEventListener("keydown", (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target; if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      const k = e.key;
      if (k === "ArrowRight" || k === "PageDown") { e.preventDefault(); go(cur + 1); }
      else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); go(cur - 1); }
      else if (k === "Home") { e.preventDefault(); go(0); }
      else if (k === "End") { e.preventDefault(); go(S.length - 1); }
      else if (k === "a" || k === "A") { location.hash = "0-3"; }
      else if (k === "i" || k === "I") { setInstructor(!instructor); }
    });
    $("#ibtn").setAttribute("aria-pressed", instructor ? "true" : "false");
    fromHash(true);
  });
})();
