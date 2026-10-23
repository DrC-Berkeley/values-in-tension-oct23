/* Original Berkeley-inspired vector art, drawn in a 400x440 frame so each landmark
   sits in its own right-hand rail (see .art-wrap in styles.css).
   Every shape is drawn twice: a gold outline that "draws itself" once, then a filled silhouette fades in.
   Landmarks are original simplified drawings inspired by campus architecture, not official marks. */
(function () {
  /* One visual grammar for all five illustrations (400 x 440 frame):
     - every landmark stands on the same baseline (y 372) and is scaled to a shared height, left of centre;
     - one independent sun sits in the upper-right corner with clear space around it at full pulse;
     - silhouettes are dark Berkeley blue/navy; gold is limited to small accents (clock, finial, lamps, path);
     - the same soft hill band and dotted gold path sit under every landmark. */
  const GROUND = 372, SUN = [338, 66, 20];
  const BAND = "M0 342 Q90 318 190 336 T400 328 V372 H0Z";
  const TRAIL = "M12 410 Q120 392 230 404 T388 396";
  const colx = [90, 132, 174, 202, 244, 286];
  const SHAPES = {
    campanile: {
      label: "Illustration: the Campanile (Sather Tower) in dark Berkeley blue with a gold clock face, standing on the campus hills.",
      tx: 130, s: 0.8,
      shapes: [
        ["M150 372 V332 H250 V372Z", "tower", 1], ["M172 332 V150 H228 V332Z", "tower", 1],
        ["M160 150 H240 V132 H160Z", "tower", 1], ["M170 132 V78 H230 V132Z", "tower", 1], ["M166 78 H234 L200 24Z", "tower", 1]
      ],
      details: `<path class="a-rod" d="M200 24 V6"/><circle class="a-gold" cx="200" cy="5" r="4"/>
        <path class="a-gap" d="M180 128 V96 Q187 88 194 96 V128Z M206 128 V96 Q213 88 220 96 V128Z"/>
        <circle class="a-gold" cx="200" cy="198" r="15"/><circle class="a-ring2" cx="200" cy="198" r="15"/><path class="a-tick" d="M200 198 V187 M200 198 H209"/>
        <path class="a-trim" d="M152 340 H248 M162 150 H238"/>`
    },
    gate: {
      label: "Illustration: a Sather Gate style entrance in dark blue, with four stone pylons topped by gold lamps, two pedestrian gates, and a central wrought-iron arch with a gold finial.",
      tx: 160, s: 0.8,
      shapes: [
        ["M22 372 V234 H62 V372Z", "tower", 1], ["M16 234 H68 V220 H16Z", "tower", 1],
        ["M338 372 V234 H378 V372Z", "tower", 1], ["M332 234 H384 V220 H332Z", "tower", 1],
        ["M98 372 V162 H146 V372Z", "tower", 1], ["M90 162 H154 V144 H90Z", "tower", 1],
        ["M254 372 V162 H302 V372Z", "tower", 1], ["M246 162 H310 V144 H246Z", "tower", 1]
      ],
      details: `<path class="a-arc" d="M62 306 Q80 270 98 306 M302 306 Q320 270 338 306"/>
        <path class="a-arc" d="M146 372 V232 Q200 120 254 232 V372"/>
        <path class="a-bars" d="M146 232 H254 M168 232 V372 M184 232 V372 M200 232 V372 M216 232 V372 M232 232 V372"/>
        <path class="a-bars" d="M158 232 Q200 146 242 232 M172 232 Q200 176 228 232"/>
        <circle class="a-gold" cx="122" cy="134" r="8"/><circle class="a-gold" cx="278" cy="134" r="8"/><circle class="a-gold" cx="42" cy="210" r="6"/><circle class="a-gold" cx="358" cy="210" r="6"/>
        <path class="a-gold" d="M200 132 L210 154 L200 176 L190 154Z"/>`
    },
    library: {
      label: "Illustration: a Doe Library style facade in dark blue, with a triangular pediment, six pale columns and broad steps.",
      tx: 160, s: 0.8,
      shapes: [
        ["M36 372 V358 H364 V372Z", "tower", 1], ["M54 358 V344 H346 V358Z", "tower", 1],
        ["M70 344 V176 H330 V344Z", "wall", 1], ["M44 176 H356 V156 H44Z", "tower", 1], ["M56 156 L200 88 L344 156Z", "tower", 1]
      ],
      details: `<path class="a-bars" d="M96 148 L200 102 L304 148Z"/><circle class="a-gold" cx="200" cy="132" r="10"/>
        <g class="a-colfill">${colx.map((x) => `<path d="M${x} 344 V196 H${x + 24} V344Z"/>`).join("")}</g>
        <path class="a-capital" d="${colx.map((x) => `M${x - 4} 196 H${x + 28} V187 H${x - 4}Z`).join(" ")}"/>`
    },
    stadium: {
      label: "Illustration: a Memorial Stadium style oval bowl in dark blue, with curved tiers of seating around a pale field and an arched outer wall.",
      tx: 162, s: 0.8,
      shapes: [
        ["M20 262 V372 H380 V262Z", "wall", 1],
        ["M20 262 A180 62 0 1 0 380 262 A180 62 0 1 0 20 262Z", "tower", 1],
        ["M52 262 A148 47 0 1 0 348 262 A148 47 0 1 0 52 262Z", "mid", 1],
        ["M98 262 A102 30 0 1 0 302 262 A102 30 0 1 0 98 262Z", "pale", 1]
      ],
      details: `<path class="a-bars" d="M30 262 A170 57 0 1 0 370 262 A170 57 0 1 0 30 262Z M75 262 A125 40 0 1 0 325 262 A125 40 0 1 0 75 262Z M200 242 V282 M150 247 V277 M250 247 V277 M98 262 H302"/>
        <path class="a-arch" d="${Array.from({ length: 7 }, (_, i) => { const x = 36 + i * 48; return `M${x} 372 V342 Q${x + 12} 326 ${x + 24} 342 V372`; }).join(" ")}"/>`
    },
    hills: {
      label: "Illustration: rolling Berkeley hills in dark blue with a winding path climbing to a gold marker.",
      tx: 200, s: 1, noBand: true, trail: "M24 404 Q110 366 170 348 T270 312 T330 262 T352 204",
      shapes: [
        ["M0 306 Q90 196 200 268 T400 226 V372 H0Z", "far", 0],
        ["M0 372 V334 Q120 270 250 322 T400 298 V372Z", "tower", 1]
      ],
      details: `<circle class="a-gold" cx="352" cy="196" r="8"/>`
    }
  };

  /* Opening scene (#0-1 and #0-2): a large architectural anchor. Tall Campanile, long landscape, and a large independent sun. */
  SHAPES.opening = Object.assign({}, SHAPES.campanile, {
    label: "Illustration: the Campanile (Sather Tower) in dark Berkeley blue with a gold clock face, rising above long campus hills, with a large sun in the upper right.",
    tx: 118, s: 1, vb: "0 0 373 400", band: "M0 332 Q70 306 180 326 T373 316 V372 H0Z", gx: [0, 373],
    trail: "M8 392 Q100 380 190 388 T365 382", sunAbs: true
  });
  /* Movement 1 opening (#1-1): the Sather Gate style entrance enlarged and set low, with the sun high in the upper right */
  SHAPES.gateopening = Object.assign({}, SHAPES.gate, {
    label: "Illustration: a Sather Gate style entrance in dark Berkeley blue with gold lamps and a gold finial, standing low in a long campus landscape, with a large sun in the upper right.",
    tx: 200, s: 1.06, ground: 452, vb: "0 0 400 480", band: "M0 414 Q90 390 190 408 T400 398 V452 H0Z", gx: [0, 400],
    trail: "M10 470 Q110 456 220 464 T390 458", sunAbs: true
  });
  /* Movement 3 opening (#3-1): the Memorial Stadium style bowl enlarged and grounded lower right; sun is its own top-right element */
  SHAPES.stadiumopening = Object.assign({}, SHAPES.stadium, {
    label: "Illustration: a Memorial Stadium style oval bowl in dark Berkeley blue with gold arches, standing low in a long campus landscape, with a large sun in the upper right.",
    tx: 200, s: 1.05, ground: 452, vb: "0 0 400 480", band: "M0 414 Q90 390 190 408 T400 398 V452 H0Z", gx: [0, 400],
    trail: "M10 470 Q110 456 220 464 T390 458", sunAbs: true
  });
  function render(key) {
    const a = SHAPES[key];
    let i = 0;
    const lines = a.shapes.filter((s) => s[2]).map((s) => `<path class="ln" pathLength="1" style="--i:${i++}" d="${s[0]}"/>`).join("");
    const fills = a.shapes.map((s) => `<path class="a-${s[1]}" d="${s[0]}"/>`).join("");
    const GR = a.ground || GROUND;
    const T = `transform="translate(${a.tx} ${GR}) scale(${a.s}) translate(-200 ${-GROUND})"`;
    const SU = a.sun || SUN;
    const sun = `<g class="a-pulse"><circle class="a-halo a-fade" cx="${SU[0]}" cy="${SU[1]}" r="${a.halo || SU[2] * 2}"/><circle class="a-sun a-fade" cx="${SU[0]}" cy="${SU[1]}" r="${SU[2]}"/></g>`;
    const base = a.noBand ? "" : `<path class="a-far" d="${a.band || BAND}"/>`;
    /* big opening scenes: the sun is its own element, anchored to the top-right corner of the slide, independent of the landmark */
    const sunAbs = a.sunAbs ? `<svg class="sun-abs" viewBox="0 0 210 210" aria-hidden="true" focusable="false"><g class="a-pulse"><circle class="a-halo a-fade" cx="105" cy="105" r="105"/><circle class="a-sun a-fade" cx="105" cy="105" r="65"/></g></svg>` : "";
    return `${sunAbs}<svg class="art art-${key}" role="img" aria-label="${a.label}" viewBox="${a.vb || "0 0 400 440"}" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
      ${a.sunAbs ? "" : sun}${base}<g ${T}><g class="a-fills a-fade">${fills}</g><g class="a-details a-fade">${a.details}</g><g class="a-lines">${lines}</g></g>
      <path class="a-ground" d="M${(a.gx || [0, 400])[0]} ${GR} H${(a.gx || [0, 400])[1]}"/><path class="a-trail" d="${a.trail || TRAIL}"/></svg>`;
  }

  const art = {};
  Object.keys(SHAPES).forEach((k) => (art[k] = () => render(k)));

  const icons = {
    dialogue: `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14h30a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H26l-10 8v-8h-6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z"/><path d="M48 26h6a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-4v7l-8-7h-8"/></svg>`,
    attention: `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 32s10-18 28-18 28 18 28 18-10 18-28 18S4 32 4 32z"/><circle cx="32" cy="32" r="8"/></svg>`,
    scales: `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M32 8v48M18 56h28M12 18h40"/><path d="M12 18L4 38a8 8 0 0 0 16 0zM52 18l-8 20a8 8 0 0 0 16 0z"/></svg>`,
    path: `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 56c14-2 10-16 24-16s10-16 24-18"/><circle cx="52" cy="14" r="6"/></svg>`
  };

  window.ART = art;
  window.ICONS = icons;
})();
