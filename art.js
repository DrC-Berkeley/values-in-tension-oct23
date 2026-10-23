/* Original Berkeley-inspired vector art, drawn in a 400x440 frame so each landmark
   sits in its own right-hand rail (see .art-wrap in styles.css).
   Every shape is drawn twice: a gold outline that "draws itself" once, then a filled silhouette fades in.
   Landmarks are original simplified drawings inspired by campus architecture, not official marks. */
(function () {
  const G = 400; // ground line y
  // shape: [path d, fill class, drawn outline?]
  const SHAPES = {
    /* Sather Tower (the Campanile): square shaft, open belfry, pyramid spire, clock face */
    campanile: {
      label: "Illustration: the Campanile (Sather Tower) rising above rolling campus hills, with a golden path in the foreground.",
      shapes: [
        ["M0 330 Q90 270 200 310 T400 290 V400 H0Z", "far", 0],
        ["M150 400 V352 H250 V400Z", "tower", 1],
        ["M172 352 V150 H228 V352Z", "tower", 1],
        ["M160 150 H240 V132 H160Z", "tower", 1],
        ["M170 132 V78 H230 V132Z", "tower", 1],
        ["M166 78 H234 L200 24Z", "tower", 1],
        ["M200 24 V6", "tower", 1]
      ],
      details: `<circle class="a-gold a-fade" cx="200" cy="198" r="15"/><path class="a-tick" d="M200 198 V188 M200 198 H208"/>
        <path class="a-gap" d="M180 128 V96 Q187 88 194 96 V128Z M206 128 V96 Q213 88 220 96 V128Z"/>`,
      sun: [310, 120, 38], trail: "M10 424 Q120 392 230 410 T390 396"
    },
    /* Sather Gate: tall central pylons, wrought-iron arch with scrolls and a gold finial, flanking pedestrian gates */
    gate: {
      label: "Illustration: a Sather Gate style entrance with four stone pylons, a wrought-iron central arch with scrollwork and a gold finial, and two flanking pedestrian gates.",
      shapes: [
        ["M0 340 Q100 310 200 330 T400 322 V400 H0Z", "far", 0],
        ["M22 400 V262 H62 V400Z", "tower", 1], ["M16 262 H68 V248 H16Z", "tower", 1],
        ["M338 400 V262 H378 V400Z", "tower", 1], ["M332 262 H384 V248 H332Z", "tower", 1],
        ["M98 400 V190 H146 V400Z", "tower", 1], ["M90 190 H154 V172 H90Z", "tower", 1],
        ["M254 400 V190 H302 V400Z", "tower", 1], ["M246 190 H310 V172 H246Z", "tower", 1],
        ["M62 330 Q80 296 98 330", "line", 1], ["M302 330 Q320 296 338 330", "line", 1],
        ["M146 400 V250 Q200 140 254 250 V400", "line", 1]
      ],
      details: `<circle class="a-gold a-fade" cx="122" cy="156" r="9"/><circle class="a-gold a-fade" cx="278" cy="156" r="9"/>
        <circle class="a-gold a-fade" cx="42" cy="232" r="7"/><circle class="a-gold a-fade" cx="358" cy="232" r="7"/>
        <path class="a-gold a-fade" d="M200 134 L211 158 L200 182 L189 158Z"/>
        <path class="a-iron" d="M146 250 Q200 140 254 250 M158 250 Q200 160 242 250 M170 250 Q200 186 230 250"/>
        <path class="a-iron" d="M146 250 H254 M168 250 V400 M184 250 V400 M200 250 V400 M216 250 V400 M232 250 V400"/>
        <circle class="a-iron" cx="168" cy="224" r="9"/><circle class="a-iron" cx="232" cy="224" r="9"/>
        <path class="a-iron" d="M98 312 H62 M338 312 H302 M80 312 V330 M320 312 V330"/>`,
      sun: null, trail: "M0 424 Q100 396 200 410 T400 400"
    },
    /* Doe Library: pediment, colonnade, broad steps */
    library: {
      label: "Illustration: a Doe Library style colonnade with a pediment, six columns and broad steps.",
      shapes: [
        ["M0 330 Q100 300 200 320 T400 310 V400 H0Z", "far", 0],
        ["M40 400 V384 H360 V400Z", "tower", 1], ["M60 384 V368 H340 V384Z", "tower", 1],
        ["M60 368 V176 H340 V368Z", "pale", 1], ["M48 176 H352 V156 H48Z", "tower", 1],
        ["M60 156 L200 88 L340 156Z", "tower", 1]
      ],
      details: `<path class="a-col" d="M96 368 V190 M138 368 V190 M180 368 V190 M222 368 V190 M264 368 V190 M306 368 V190"/>
        <circle class="a-gold a-fade" cx="200" cy="130" r="12"/>`,
      sun: null, trail: "M0 424 H400"
    },
    /* Memorial Stadium: tiered arcs with a branching path */
    stadium: {
      label: "Illustration: Memorial Stadium style stacked arcs above a pathway that branches into several routes.",
      shapes: [
        ["M0 330 Q100 300 200 320 T400 310 V400 H0Z", "far", 0],
        ["M30 340 Q200 90 370 340Z", "pale", 1],
        ["M70 340 Q200 150 330 340Z", "far2", 1],
        ["M110 340 Q200 210 290 340Z", "tower", 1],
        ["M20 340 H380 V366 H20Z", "tower", 1]
      ],
      details: `<path class="a-col" d="M200 366 V196 M150 366 V250 M250 366 V250"/>`,
      sun: null, trail: "M200 424 V380 M200 380 Q150 360 110 340 M200 380 Q250 360 290 340 M110 340 Q80 320 62 296 M110 340 Q116 308 128 286 M290 340 Q320 320 338 296 M290 340 Q284 308 272 286"
    },
    /* Berkeley hills: ascending, winding path to a gold marker */
    hills: {
      label: "Illustration: rolling Berkeley hills at sunrise with a winding path climbing to a gold marker.",
      shapes: [
        ["M0 300 Q90 180 200 250 T400 200 V400 H0Z", "far", 0],
        ["M0 360 Q120 250 250 320 T400 280 V400 H0Z", "tower", 1]
      ],
      details: `<circle class="a-gold a-fade" cx="320" cy="72" r="9"/>`,
      sun: [320, 96, 34], trail: "M30 420 Q110 380 170 360 T270 316 T330 256 T350 168"
    }
  };

  function render(key) {
    const a = SHAPES[key];
    let i = 0;
    const lines = a.shapes.filter((s) => s[2]).map((s) => `<path class="ln" pathLength="1" style="--i:${i++}" d="${s[0]}"/>`).join("");
    const fills = a.shapes.map((s) => `<path class="a-${s[1]}" d="${s[0]}"/>`).join("");
    const sun = a.sun ? `<circle class="a-halo a-fade" cx="${a.sun[0]}" cy="${a.sun[1]}" r="${a.sun[2] * 2}"/><circle class="a-sun a-fade" cx="${a.sun[0]}" cy="${a.sun[1]}" r="${a.sun[2]}"/>` : "";
    return `<svg class="art" role="img" aria-label="${a.label}" viewBox="0 0 400 440" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
      ${sun}<g class="a-fills a-fade">${fills}</g><g class="a-details a-fade">${a.details}</g><g class="a-lines">${lines}</g>
      <path class="a-trail" d="${a.trail}"/></svg>`;
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
