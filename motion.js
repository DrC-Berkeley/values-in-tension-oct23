/* Slide 3-2: a short, manually played thought-experiment animation drawn in code (SVG + one timeline function).
   Everything on screen is a pure function of the time t (0 to 18 s), so play, pause, scrub, replay and chapter jumps all work.
   Sound is optional, starts off, and is made only from Web Audio oscillators (no recordings).
   Original concept: a person delegates tasks, a system takes on more, practice shifts, and the scene freezes on "Who decides?" */
(function () {
  "use strict";
  const DUR = 18, SCENES = [0, 6, 12], SETTLED = [5.9, 11.9, 18];
  const NS = "http://www.w3.org/2000/svg";
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const ease = (x) => x * x * (3 - 2 * x);
  const N = 8; // tasks handed off

  let st = null; // live state for the mounted slide

  function html(c) {
    const cards = Array.from({ length: N }, (_, k) => `<g class="m-card" data-k="${k}"><rect x="-18" y="-13" width="36" height="26" rx="5"/><path d="M-9 -3H9M-9 4H3"/></g>`).join("");
    const blocks = Array.from({ length: N }, (_, k) => `<g class="m-block" data-k="${k}"><rect x="-66" y="${-34}" width="132" height="32" rx="6"/><rect class="m-top" x="-66" y="-34" width="132" height="7" rx="3"/></g>`).join("");
    const rungs = Array.from({ length: 4 }, (_, k) => `<path class="m-rung" data-k="${k}" d="M34 ${248 + k * 26}H78"/>`).join("");
    return `<section class="mdemo rv" aria-label="Thought experiment animation">
      <div class="mstage"><svg id="mdsvg" viewBox="0 0 800 420" role="img" aria-label="Animated drawing. A person hands task cards to a growing tower of blocks. As the tower grows, the rungs of a practice ladder beside the person fade. The scene ends on an empty gold chair and the question: Who decides?">
        <rect x="0" y="0" width="800" height="420" class="m-bg"/>
        <path class="m-ground" d="M20 362H780"/>
        <g class="m-ladder"><path class="m-rail" d="M34 236V348M78 236V348"/>${rungs}<text x="56" y="382" text-anchor="middle" class="m-lab">Practice</text></g>
        <g class="m-person" transform="translate(150 0)"><circle cx="0" cy="238" r="22"/><path d="M-26 350V286Q-26 262 0 262Q26 262 26 286V350Z"/><path class="m-arm" d="M22 282L52 268"/></g>
        <g class="m-tower" transform="translate(650 362)">${blocks}<text x="0" y="22" text-anchor="middle" class="m-lab">System</text></g>
        <g class="m-seat" id="mdseat"><path d="M375 345V292M425 345V292M368 292H432V250H368Z M368 250V196M432 250V196M368 196H432"/></g>
        <text id="mdq" x="395" y="132" text-anchor="middle" class="m-q">Who decides?</text>
        <g id="mdcards">${cards}</g>
      </svg></div>
      <p class="mcap" id="mdcap" aria-live="polite"></p>
      <div class="mctl" role="group" aria-label="Animation controls">
        <button type="button" class="mb primary" id="mdplay">Play</button>
        <button type="button" class="mb" id="mdreplay">Replay</button>
        <span class="mchap" role="group" aria-label="Scenes">
          <button type="button" class="mb" data-scene="0">1 · Delegate</button>
          <button type="button" class="mb" data-scene="1">2 · More work</button>
          <button type="button" class="mb" data-scene="2">3 · Who decides?</button></span>
        <button type="button" class="mb" id="mdsound" aria-pressed="false">Sound: off</button>
        <label class="mscrub"><span class="sr">Timeline</span><input id="mdrange" type="range" min="0" max="${DUR}" step="0.1" value="0"></label>
      </div>
      <details class="mctx"><summary>${c.summary}</summary><div class="mctx-body">${c.context.map((p) => `<p>${p}</p>`).join("")}</div></details>
    </section>`;
  }

  /* ---------- drawing: pure function of t ---------- */
  function draw(root, t) {
    const svg = root.querySelector("#mdsvg");
    const launch = (k) => 1 + k * 1.4, FLY = 1.5;
    root.querySelectorAll(".m-card").forEach((g) => {
      const k = +g.dataset.k, u = (t - launch(k)) / FLY;
      if (u <= 0 || u >= 1) { g.style.opacity = 0; return; }
      const e = ease(u), x = 185 + (580 - 185) * e, ty = 342 - k * 34 - 16, y = 275 + (ty - 275) * e - 90 * Math.sin(Math.PI * e);
      g.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(-12 + 24 * e).toFixed(1)})`);
      g.style.opacity = 1;
    });
    root.querySelectorAll(".m-block").forEach((g) => {
      const k = +g.dataset.k, u = clamp((t - (launch(k) + FLY - 0.1)) / 0.45, 0, 1);
      const pop = u < 1 ? 1 + 0.12 * Math.sin(Math.PI * u) : 1;
      g.setAttribute("transform", `translate(0 ${-k * 34}) scale(${pop.toFixed(3)})`);
      g.style.opacity = u > 0 ? 1 : 0;
    });
    // practice rungs fade from the top as the system takes on more
    root.querySelectorAll(".m-rung").forEach((p) => {
      const k = +p.dataset.k; p.style.opacity = (1 - 0.88 * ease(clamp((t - 4 - (3 - k) * 1.7) / 2.2, 0, 1))).toFixed(2);
    });
    const seat = root.querySelector("#mdseat"); seat.style.opacity = ease(clamp((t - 11.5) / 1.5, 0, 1)).toFixed(2);
    root.querySelector("#mdq").style.opacity = ease(clamp((t - 14) / 1.8, 0, 1)).toFixed(2);
    const person = root.querySelector(".m-person"); person.setAttribute("transform", `translate(150 ${(2 * ease(clamp((t - 6) / 10, 0, 1))).toFixed(1)})`);
    svg.dataset.t = t.toFixed(1);
  }

  const CAPS = ["A person hands off a task.", "The system takes on more. Practice opportunities shift.", "Who decides?"];
  const sceneOf = (t) => (t >= SCENES[2] ? 2 : t >= SCENES[1] ? 1 : 0);

  /* ---------- optional sound: soft sine chords, only after the Sound button is pressed ---------- */
  const CHORDS = [[261.6, 329.6, 392.0], [349.2, 440.0, 523.3], [220.0, 329.6, 493.9]];
  function audioStart(s) {
    if (s.au) return;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const ctx = new AC(), master = ctx.createGain(), lp = ctx.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 900; master.gain.value = 0; lp.connect(master); master.connect(ctx.destination);
    const oscs = CHORDS[0].map((f) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sine"; o.frequency.value = f; g.gain.value = 0.35; o.connect(g); g.connect(lp); o.start(); return o; });
    s.au = { ctx, master, oscs, scene: 0 };
    master.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 1.2);
  }
  function audioScene(s, i) {
    if (!s.au || s.au.scene === i) return; s.au.scene = i;
    s.au.oscs.forEach((o, n) => o.frequency.linearRampToValueAtTime(CHORDS[i][n], s.au.ctx.currentTime + 1.5));
  }
  function audioStop(s) {
    if (!s.au) return; const a = s.au; s.au = null;
    try { a.master.gain.cancelScheduledValues(a.ctx.currentTime); a.master.gain.linearRampToValueAtTime(0, a.ctx.currentTime + 0.25); } catch (e) {}
    setTimeout(() => { try { a.oscs.forEach((o) => o.stop()); a.ctx.close(); } catch (e) {} }, 320);
  }

  /* ---------- controller ---------- */
  function mount(stage) {
    const root = stage.querySelector(".mdemo"); if (!root) return;
    const s = st = { root, t: 0, playing: false, raf: 0, last: 0, step: 0, au: null, sound: false };
    const $ = (q) => root.querySelector(q);
    const stepping = () => document.body.classList.contains("nomotion");
    const ui = () => {
      const sc = sceneOf(s.t);
      $("#mdcap").textContent = CAPS[sc];
      $("#mdrange").value = s.t;
      root.querySelectorAll("[data-scene]").forEach((b) => { if (+b.dataset.scene === sc) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current"); });
      $("#mdplay").textContent = stepping() ? (s.step >= 2 ? "Back to start" : "Next scene") : s.playing ? "Pause" : (s.t >= DUR ? "Replay" : "Play");
      $("#mdrange").disabled = stepping();
      audioScene(s, sc);
    };
    const set = (t) => { s.t = clamp(t, 0, DUR); draw(root, s.t); ui(); };
    const stop = () => { s.playing = false; cancelAnimationFrame(s.raf); audioStop(s); ui(); };
    const tick = (now) => {
      if (!s.playing) return;
      const dt = (now - s.last) / 1000; s.last = now; set(s.t + dt);
      if (s.t >= DUR) { s.playing = false; ui(); return; } // freeze on "Who decides?"
      s.raf = requestAnimationFrame(tick);
    };
    const play = () => {
      if (stepping()) { s.step = s.step >= 2 ? 0 : s.step + 1; set(SETTLED[s.step]); return; }
      if (s.t >= DUR) set(0);
      s.playing = true; s.last = performance.now(); if (s.sound) audioStart(s); ui(); s.raf = requestAnimationFrame(tick);
    };
    $("#mdplay").addEventListener("click", () => { if (s.playing) stop(); else play(); });
    $("#mdreplay").addEventListener("click", () => { stop(); s.step = 0; set(0); if (!stepping()) play(); });
    root.querySelectorAll("[data-scene]").forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.scene; s.step = i;
      if (stepping()) { stop(); set(SETTLED[i]); } else { const was = s.playing; set(SCENES[i]); if (!was) play(); }
    }));
    $("#mdrange").addEventListener("input", (e) => { const v = +e.target.value; stop(); set(v); });
    $("#mdsound").addEventListener("click", (e) => {
      s.sound = !s.sound; e.currentTarget.setAttribute("aria-pressed", String(s.sound)); e.currentTarget.textContent = "Sound: " + (s.sound ? "on" : "off");
      if (s.sound && s.playing) audioStart(s); if (!s.sound) audioStop(s);
    });
    s.hidden = () => { if (document.hidden) stop(); };
    document.addEventListener("visibilitychange", s.hidden);
    // begin paused on the first frame; reduced motion shows the first settled scene
    if (stepping()) { s.step = 0; set(SETTLED[0]); } else set(0);
  }

  function cleanup() {
    if (!st) return; cancelAnimationFrame(st.raf); st.playing = false; audioStop(st);
    document.removeEventListener("visibilitychange", st.hidden); st = null;
  }

  window.MotionDemo = { html, mount, cleanup };
})();
