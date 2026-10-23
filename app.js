/* Values in Tension: slide engine. Content is in content/slides.js. */
(function () {
  "use strict";
  const S = window.SLIDES, SEC = window.SECTIONS, L = window.LINKS, P = window.POLLS, R = window.RHYTHM;
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const OPENING = ["0-1", "0-2", "1-1", "3-1", "5-2", "5-3"];
  const SCENE = { "0-1": "opening", "0-2": "opening", "1-1": "gateopening", "3-1": "stadiumopening", "5-2": "opening", "5-3": "opening" }; // opening scene: large Campanile anchor on the lower right
  const NOART = ["excerpt", "discuss", "cues", "book", "compare", "access", "motion", "assignment", "account", "thought", "poll"]; // reading, results, and content-heavy slides carry no campus art
  const idx = (id) => S.findIndex((s) => s.id === id);
  const ext = (href, label) => `<a class="ext" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}<span class="sr"> (opens in a new tab)</span><span aria-hidden="true"> ↗</span></a>`;
  const linkOf = (k) => L[k] || k;

  let artObs = null, dir = 1, cur = 0, sameArt = false, prevArt = null, motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- block renderers ---------- */
  const B = {
    p: (b) => `<p class="rv">${esc(b.text)}</p>`,
    h: (b) => `<p class="considerh rv">${esc(b.text)}</p>`,
    lead: (b) => `<p class="lead rv">${esc(b.text)}</p>`,
    note: (b) => `<p class="note rv">${esc(b.text)}</p>`,
    q: (b) => `<div class="keyq rv">${b.label ? `<span class="keyq-label">${esc(b.label)}</span>` : ""}<p>${esc(b.text)}</p>${b.sub ? `<p class="keyq-sub">${esc(b.sub)}</p>` : ""}</div>`,
    list: (b) => `<ul class="prompts">${b.items.map((i) => `<li class="rv">${esc(i)}</li>`).join("")}</ul>`,
    transition: (b) => `<p class="transition rv"><span class="tlabel">Where this leads</span>${esc(b.text)}</p>`,
    terms: (b) => `<dl class="terms">${b.items.map((i) => `<div class="rv"><dt>${esc(i.h)}</dt><dd>${esc(i.d)}</dd></div>`).join("")}</dl>`,
    compare: (b) => `<div class="compare">${b.items.map((i, n) => `<div class="rv"><h3>${esc(i.h)}</h3><p>${esc(i.d)}</p></div>`).join("")}</div>`,
    links: (b) => `<p class="rv linkrow">${b.items.map((i) => ext(linkOf(i.href), esc(i.label))).join(" ")}</p>`,
    source: (b) => `<p class="source rv"><em>${esc(b.cite)}</em><br>${esc(b.by)}<br>${ext(linkOf(b.href), "Read the original article")}</p>`,
    article: (b) => `<article class="paper rv"><p class="paper-pub">${esc(b.pub)}</p><h2>${esc(b.title)}</h2><p class="paper-deck">${esc(b.deck)}</p>
      <p class="paper-by">By ${esc(b.by)} · ${esc(b.date)}</p><p>${esc(b.synopsis)}</p>
      ${b.excerpt ? `<blockquote>“${esc(b.excerpt)}”<cite>Naishu Vempali</cite></blockquote>` : ""}
      <p>${ext(linkOf(b.href), "Read the full article")}</p></article>`,
    excerpt: (b) => `<figure class="excerpt rv"><blockquote><p>${esc(b.text)}</p></blockquote>
      <figcaption><strong>${esc(b.by)}</strong>, <em>${esc(b.cite)}</em><br>${esc(b.pub)}<br>${ext(linkOf(b.href), "Read the original article")}</figcaption></figure>
      <section class="ask rv" aria-label="Discussion questions"><p class="ask-h">Questions for us</p><ul>${b.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul></section>`,
    dialogue: () => { const D = window.DIALOGUE; const list = (q) => `<ul>${q.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`; return `<p class="lead rv dlead">${esc(D.lead)}</p>
      <div class="dgrid"><section class="dcol rv"><h2>Noticing</h2>${list(D.noticing)}</section>
      <section class="dcol rv"><h2>Dialogue</h2>${list(D.dialogue)}</section></div>`; },
    cues: (b) => `<ol class="cues">${b.items.map((i, n) => `<li class="rv"><span class="cn">${n + 1}</span><div><h2>${esc(i.h)}</h2><p>${esc(i.d)}</p></div></li>`).join("")}</ol>`,
    event: (b) => { const src = (window.ASSET_DIR || "") + b.flyerSrc; return `<section class="event rv" aria-label="Upcoming campus event"><p class="eyebrow">A real campus conversation, separate from the office-hours account</p>
      <div class="event-grid"><a class="event-img" href="${esc(src)}" target="_blank" rel="noopener noreferrer"><img src="${esc(src)}" width="1545" height="1999" loading="lazy" alt="${esc(b.alt)}"><span>Open the flyer full size<span class="sr"> (opens in a new tab)</span> ↗</span></a>
      <div class="event-info"><h3>${esc(b.title)}</h3><p class="when">${esc(b.when)}</p><p>${esc(b.host)}</p><p class="check">${esc(b.check)}</p>
      <p class="linkrow">${b.links.map((l) => ext(linkOf(l.href), esc(l.label))).join(" ")}</p>
      <p class="small">RSVPs happen on the event's own links. We don't collect them here.</p></div></div></section>`; },
    states: (b) => `<ol class="states">${b.items.map((i) => `<li class="rv"><h2>${esc(i.h)}</h2><p>${esc(i.d)}</p></li>`).join("")}</ol>`,
    explore: (b) => `<p class="explore rv">${esc(b.label)} ${ext(linkOf(b.href), esc(b.link))}</p>`,
    turns: (b) => `<ol class="turns">${b.items.map((i) => `<li class="rv"><h2>${esc(i.h)}</h2><div><p class="tq"><span class="who">${esc(i.who)}</span> \u201c${esc(i.quote)}\u201d</p><p class="tc">${esc(i.ctx)}</p>${i.link ? `<p class="tlink">${ext(i.link, "See this passage<span class=\"sr\">: " + esc(i.h) + "</span>")}</p>` : ""}</div></li>`).join("")}</ol>`,
    measures: (b) => `<div class="measures">${b.items.map((i) => `<section class="rv"><h2>${esc(i.h)}</h2><p>${esc(i.d)}</p><p class="mex"><span>For example</span><strong>${esc(i.lab)}</strong> ${esc(i.ex)}</p></section>`).join("")}</div>`,
    video: (b) => `<div class="watch rv"><p class="eyebrow">Testimony</p><h2 class="vtitle">${esc(b.title)}</h2><p class="vby">${esc(b.by)}</p>
      <p><a class="watchbtn" href="${esc(L.video)}" target="_blank" rel="noopener noreferrer">Watch on LinkedIn<span class="sr"> (opens in a new tab)</span> ↗</a></p></div>`,
    book: (b) => { const src = (window.ASSET_DIR || "") + b.src; return `<div class="book rv"><img class="cover" src="${esc(src)}" alt="${esc(b.alt)}" loading="lazy">
      <div><p class="eyebrow">Book</p><h3><em>${esc(b.title)}</em></h3><p>${esc(b.by)}</p>
      ${b.role ? `<p class="brole">${esc(b.role)}</p>` : ""}<p>${ext(linkOf(b.href), esc(b.label))}</p></div></div>`; },
    example: (b) => `<div class="example rv"><p class="ex-h">For example</p><ul>${b.items.map((i) => `<li><strong>${esc(i.h)}</strong> ${esc(i.d)}</li>`).join("")}</ul></div>`,
    poll: (b) => pollBlock(P[b.poll]),
    assign: () => assignBlock(),
    agenda: () => agendaBlock()
  };

  function pollBlock(p) {
    return `<div class="poll rv"><a class="poll-btn" href="${esc(p.respondent)}" target="_blank" rel="noopener noreferrer" aria-label="Cast Your Perspective: poll ${p.n} of 4, opens Google Forms in a new tab">
        <span class="poll-t">Cast Your Perspective</span><span class="poll-s">Poll ${p.n} of 4 · opens in a new tab ↗</span></a>
      <div class="poll-side"><p class="lead">There are no correct answers. Respond on your own, then come back to this tab.</p>
        <p class="small">After you submit, close the Google Form tab or switch back here. We'll look at the results together on the next slide.</p></div></div>`;
  }

  function assignBlock() {
    const prompts = [
      ["Reconsider your thinking", ["Identify one tension from today's inquiry that challenged, complicated, or reinforced your perspective.", "What did you encounter in the readings, stories, polls, or discussions that influenced your thinking?"]],
      ["Values into practice", ["Identify a value that matters to you as a learner or emerging professional.", "What recurring action would help you express that value?", "What conditions, relationships, or supports would make it possible to sustain that practice?"]],
      ["From personal reflection to participatory inquiry", ["Return to the problem you're investigating at UC Berkeley.", "Whose experiences or perspectives might challenge your current understanding?", "What question could you ask those people before deciding what needs to change?"]]
    ];
    const sub = L.bcourses
      ? `<a class="submit-btn" href="${esc(L.bcourses)}" target="_blank" rel="noopener noreferrer">Submit your attendance reflection in bCourses<span class="sr"> (opens in a new tab)</span> ↗</a>`
      : "";
    return `<p class="lead rv">15 minutes. Individual reflection. Submit through bCourses.</p>
      <div class="assign">${prompts.map((p, i) => `<section class="rv"><h2>${esc(p[0])}</h2>${p[1].map((t) => `<p>${esc(t)}</p>`).join("")}</section>`).join("")}</div>
      <div class="submit rv">${sub}</div>`;
  }

  function agendaBlock() {
    const h = [34, 62, 62, 62, 62, 92];
    return `<ol class="agenda">${SEC.map((s, i) => `<li class="rv${i === S[cur].section ? " here" : ""}"><a href="#${i === 5 ? "5-1" : firstOf(i)}"><span class="bar" style="height:${h[i]}px" aria-hidden="true"></span>
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
    const noArt = NOART.includes(s.kind) || !!s.noArt;
    return `<div class="slide k-${s.kind} ${s.theme}${big ? " big" : ""}${s.kind === "agenda" ? " wide" : ""}${s.layout ? " " + s.layout : ""} ${OPENING.includes(s.id) ? "opening" : ""}${["1-1", "3-1", "5-2"].includes(s.id) ? " inset" : ""}${noArt ? " noart" : ""}" data-section="${s.section}">
      <div class="inner">
        ${s.kicker ? `<p class="kicker rv">${esc(s.kicker)}</p>` : ""}
        <h1 class="rv" id="slide-title" tabindex="-1">${esc(s.title)}</h1>
        ${s.sub ? `<p class="subtitle rv">${esc(s.sub)}</p>` : ""}
        ${s.blocks.map((b) => B[b.t](b)).join("")}
        ${rhythmStrip(s.rhythm)}
      </div>
      ${noArt ? "" : `<div class="art-wrap${sameArt ? " art-static" : ""}">${window.ART[SCENE[s.id] || artKey]()}</div>`}

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
    const artKey = SEC[s.section].art;
    const shown = !(NOART.includes(s.kind) || s.noArt);
    sameArt = !first && shown && prevArt === artKey;
    document.title = s.id === "0-1" ? "Values in Tension · Who Are We Becoming?" : `${s.title} · Values in Tension`;
    stage.innerHTML = slideHTML(s) + (s.id === "5-3" ? '<div class="bg-land" aria-hidden="true"><svg viewBox="0 0 1600 300" preserveAspectRatio="none"><path d="M0 214 Q180 150 420 196 T820 176 T1220 200 T1600 168 V300 H0Z"/></svg></div>' : "");
    prevArt = shown ? artKey : null;
    stage.className = "stage anim";
    stage.style.setProperty("--dx", "0px");
    document.body.dataset.theme = s.theme;
    stage.style.setProperty("--stageH", stage.clientHeight + "px");
    stage.scrollTop = 0;
    $("#count").textContent = `${cur + 1} / ${S.length}`;
    $("#secname").textContent = SEC[s.section].label + " · " + SEC[s.section].time;
    $("#prev").disabled = cur === 0; $("#next").disabled = cur === S.length - 1;
    document.querySelectorAll(".tick").forEach((t) => {
      const i = +t.dataset.i; t.classList.toggle("done", i < cur); t.classList.toggle("now", i === cur);
      if (i === cur) t.setAttribute("aria-current", "step"); else t.removeAttribute("aria-current");
    });
    document.querySelectorAll(".seg").forEach((g) => g.classList.toggle("now", +g.dataset.sec === s.section));
    const jr = $("#jump"); jr.max = S.length; jr.value = cur + 1;
    jr.style.setProperty("--p", (cur / (S.length - 1) * 100) + "%");
    jr.setAttribute("aria-valuetext", `Slide ${cur + 1} of ${S.length}: ${s.title}`);
    $("#live").textContent = `Slide ${cur + 1} of ${S.length}: ${s.title}`;
    stage.querySelectorAll(".rv").forEach((n, i) => n.style.setProperty("--d", Math.min(i, 12) * 60 + "ms"));
    if (artObs) artObs.disconnect();
    if ("IntersectionObserver" in window) {
      artObs = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("art-off", !e.isIntersecting)));
      const aw = stage.querySelector(".art-wrap"); if (aw) artObs.observe(aw);
    }
    if (!first && document.activeElement !== $("#jump")) { const h = $("#slide-title"); if (h) h.focus({ preventScroll: true }); }
  }

  function go(i) {
    i = Math.max(0, Math.min(S.length - 1, i));
    if (S[i].id === location.hash.slice(1)) { cur = i; render(); } else location.hash = S[i].id;
  }
  function fromHash(first) {
    const i = idx(location.hash.slice(1));
    const n = i >= 0 ? i : 0; dir = n >= cur ? 1 : -1; cur = n;
    render(first);
  }
  function applyMotion() {
    // Motion follows the visitor's OS setting (prefers-reduced-motion); there is no on-screen toggle.
    document.body.classList.toggle("nomotion", !motion);
    document.body.classList.toggle("motion-on", motion);
  }
  document.addEventListener("DOMContentLoaded", () => {
    buildProgress();
    window.addEventListener("hashchange", () => fromHash(false));
    window.addEventListener("resize", () => $("#stage").style.setProperty("--stageH", $("#stage").clientHeight + "px"));
    $("#prev").addEventListener("click", () => go(cur - 1));
    $("#next").addEventListener("click", () => go(cur + 1));
    $("#agendabtn").addEventListener("click", () => { location.hash = "0-3"; });
    $("#startbtn").addEventListener("click", () => { location.hash = "0-1"; if (cur === 0) render(); });
    const jr = $("#jump"); let dragFrom = null;
    jr.addEventListener("pointerdown", () => { dragFrom = S[cur].id; });
    jr.addEventListener("input", () => {
      const id = S[+jr.value - 1].id;
      if (dragFrom) { history.replaceState(null, "", "#" + id); fromHash(false); } else go(+jr.value - 1);
    });
    const endDrag = () => {
      if (!dragFrom) return; const final = S[cur].id, from = dragFrom; dragFrom = null;
      if (final !== from) { history.replaceState(null, "", "#" + from); location.hash = final; }
    };
    jr.addEventListener("pointerup", endDrag); jr.addEventListener("pointercancel", endDrag); jr.addEventListener("change", endDrag);
    document.addEventListener("keydown", (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target; if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      const k = e.key;
      if (k === "ArrowRight" || k === "PageDown") { e.preventDefault(); go(cur + 1); }
      else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); go(cur - 1); }
      else if (k === "Home") { e.preventDefault(); go(0); }
      else if (k === "End") { e.preventDefault(); go(S.length - 1); }
      else if (k === "a" || k === "A") { location.hash = "0-3"; }
    });
    applyMotion();
    fromHash(true);
  });
})();
