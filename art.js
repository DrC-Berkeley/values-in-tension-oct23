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
      label: "Illustration: the Doe Library facade in Berkeley blue and gold, with a triangular pediment, six columns and broad steps.",
      shapes: [
        ["M0 330 Q100 300 200 320 T400 310 V400 H0Z", "far", 0],
        ["M30 400 V386 H370 V400Z", "tower", 1], ["M48 386 V372 H352 V386Z", "tower", 1],
        ["M70 372 V176 H330 V372Z", "wall", 1],
        ["M44 176 H356 V154 H44Z", "tower", 1],
        ["M56 154 L200 82 L344 154Z", "tower", 1]
      ],
      details: `<path class="a-iron" d="M92 146 L200 98 L308 146Z"/>
        <circle class="a-gold a-fade" cx="200" cy="128" r="11"/>
        <g class="a-colfill"><path d="M90 372 V196 H114 V372Z"/><path d="M132 372 V196 H156 V372Z"/><path d="M174 372 V196 H198 V372Z"/><path d="M202 372 V196 H226 V372Z"/><path d="M244 372 V196 H268 V372Z"/><path d="M286 372 V196 H310 V372Z"/></g>
        <path class="a-capital" d="M86 196 H118 V186 H86Z M128 196 H160 V186 H128Z M170 196 H202 V186 H170Z M198 196 H230 V186 H198Z M240 196 H272 V186 H240Z M282 196 H314 V186 H282Z"/>`,
      sun: null, trail: "M0 424 H400"
    },
    /* Memorial Stadium: an oval bowl with tiered seating, a field, and an arched outer wall */
    stadium: {
      label: "Illustration: a Memorial Stadium style oval bowl in Berkeley blue and gold, with curved tiers of seating around a pale field and an arched outer wall.",
      shapes: [
        ["M0 330 Q100 300 200 320 T400 310 V400 H0Z", "far", 0],
        ["M20 240 V330 Q20 372 200 372 Q380 372 380 330 V240Z", "wall", 1],
        ["M20 240 A180 66 0 1 0 380 240 A180 66 0 1 0 20 240Z", "tower", 1],
        ["M50 240 A150 50 0 1 0 350 240 A150 50 0 1 0 50 240Z", "mid", 1],
        ["M96 240 A104 32 0 1 0 304 240 A104 32 0 1 0 96 240Z", "pale", 1]
      ],
      details: `<path class="a-iron" d="M30 240 A170 60 0 1 0 370 240 A170 60 0 1 0 30 240Z M70 240 A130 42 0 1 0 330 240 A130 42 0 1 0 70 240Z"/>
        <path class="a-iron" d="M200 218 V262 M150 224 V258 M250 224 V258 M96 240 H304"/>
        <path class="a-arch" d="M44 372 V338 Q56 320 68 338 V372 M96 378 V346 Q108 328 120 346 V378 M148 382 V350 Q160 332 172 350 V382 M228 382 V350 Q240 332 252 350 V382 M280 378 V346 Q292 328 304 346 V378 M332 372 V338 Q344 320 356 338 V372"/>`,
      sun: null, trail: "M0 424 Q100 398 200 412 T400 402"
    },
    /* Berkeley hills: ascending, winding path to a gold marker */
    hills: {
      label: "Illustration: rolling Berkeley hills at sunrise with a winding path climbing to a gold marker.",
      shapes: [
        ["M0 300 Q90 180 200 250 T400 200 V400 H0Z", "far", 0],
        ["M0 360 Q120 250 250 320 T400 280 V400 H0Z", "tower", 1]
      ],
      details: `<circle class="a-gold a-fade" cx="350" cy="168" r="9"/>`,
      sun: [305, 112, 40], trail: "M30 420 Q110 380 170 360 T270 316 T330 256 T350 168"
    }
  };

  function render(key) {
    const a = SHAPES[key];
    let i = 0;
    const lines = a.shapes.filter((s) => s[2]).map((s) => `<path class="ln" pathLength="1" style="--i:${i++}" d="${s[0]}"/>`).join("");
    const fills = a.shapes.map((s) => `<path class="a-${s[1]}" d="${s[0]}"/>`).join("");
    const sun = a.sun ? `<g class="a-pulse"><circle class="a-halo a-fade" cx="${a.sun[0]}" cy="${a.sun[1]}" r="${a.sun[2] * 2}"/><circle class="a-sun a-fade" cx="${a.sun[0]}" cy="${a.sun[1]}" r="${a.sun[2]}"/></g>` : "";
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
