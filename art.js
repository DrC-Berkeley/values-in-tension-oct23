/* Original Berkeley-inspired vector art. Each function returns an inline SVG string.
   Colors come from CSS variables so light/dark slides can re-tint them. */
(function () {
  const wrap = (label, body, vb) =>
    `<svg class="art" role="img" aria-label="${label}" viewBox="${vb || "0 0 800 400"}" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

  const art = {
    campanile: () => wrap("Illustration: the Campanile rising above the Berkeley hills, with a dotted path in the foreground.", `
      <circle class="a-sun-halo" cx="560" cy="150" r="120"/><circle class="a-sun" cx="560" cy="150" r="60"/>
      <path class="a-far" d="M0 300 Q160 230 330 280 T660 262 T800 285 V400 H0Z"/>
      <path class="a-near" d="M0 340 Q220 280 430 328 T800 318 V400 H0Z"/>
      <g class="a-tower"><rect x="468" y="96" width="30" height="250"/><path d="M464 96 L483 46 L502 96Z"/><rect x="482" y="30" width="3" height="20"/>
        <rect x="460" y="186" width="46" height="10"/><rect x="456" y="196" width="54" height="150"/></g>
      <circle class="a-clock" cx="483" cy="124" r="9"/>
      <g class="a-bldg"><rect x="70" y="296" width="110" height="60"/><rect x="200" y="312" width="80" height="44"/><rect x="620" y="304" width="100" height="52"/></g>
      <path class="a-path" d="M0 392 Q220 348 430 372 T800 360"/>`),

    gate: () => wrap("Illustration: Sather Gate style arches with two crossing pathways.", `
      <path class="a-far" d="M0 300 Q200 250 400 290 T800 270 V400 H0Z"/>
      <g class="a-tower"><rect x="250" y="150" width="20" height="200"/><rect x="530" y="150" width="20" height="200"/><rect x="240" y="140" width="320" height="16"/>
        <rect x="396" y="110" width="8" height="40"/></g>
      <g class="a-gold"><circle cx="400" cy="118" r="10"/></g>
      <path class="a-path" d="M60 396 Q300 330 400 352 T760 330"/>
      <path class="a-path" d="M140 330 Q330 350 400 352 T700 396"/>`),

    library: () => wrap("Illustration: Doe Library style columns on layered steps.", `
      <path class="a-far" d="M0 310 Q200 270 400 300 T800 285 V400 H0Z"/>
      <g class="a-tower"><rect x="180" y="150" width="440" height="22"/><path d="M200 150 L400 100 L600 150Z"/>
        <rect x="210" y="172" width="22" height="150"/><rect x="262" y="172" width="22" height="150"/><rect x="314" y="172" width="22" height="150"/><rect x="366" y="172" width="22" height="150"/>
        <rect x="418" y="172" width="22" height="150"/><rect x="470" y="172" width="22" height="150"/><rect x="522" y="172" width="22" height="150"/><rect x="574" y="172" width="22" height="150"/>
        <rect x="170" y="322" width="460" height="14"/><rect x="150" y="336" width="500" height="14"/><rect x="130" y="350" width="540" height="14"/></g>
      <path class="a-path" d="M0 392 H800"/>`),

    stadium: () => wrap("Illustration: Memorial Stadium style arcs with a branching pathway.", `
      <path class="a-far" d="M0 300 Q200 255 400 290 T800 272 V400 H0Z"/>
      <g class="a-ring"><path d="M120 330 Q400 130 680 330"/><path d="M170 330 Q400 170 630 330"/><path d="M220 330 Q400 210 580 330"/></g>
      <g class="a-tower"><rect x="100" y="326" width="600" height="22"/></g>
      <path class="a-path" d="M400 392 V300 M400 300 Q330 270 290 230 M400 300 Q470 270 510 230 M290 230 Q270 205 250 190 M290 230 Q300 200 310 180 M510 230 Q530 205 550 190 M510 230 Q500 200 490 180"/>`),

    hills: () => wrap("Illustration: Berkeley hills with an ascending, winding path.", `
      <circle class="a-sun-halo" cx="620" cy="110" r="100"/><circle class="a-sun" cx="620" cy="110" r="46"/>
      <path class="a-far" d="M0 280 Q130 180 280 240 T560 190 T800 230 V400 H0Z"/>
      <path class="a-near" d="M0 340 Q180 240 360 310 T800 270 V400 H0Z"/>
      <path class="a-path" d="M70 396 Q200 350 300 336 T460 290 T620 240 T730 168"/>
      <g class="a-gold"><circle cx="730" cy="168" r="7"/></g>`)
  };

  const icons = {
    dialogue: `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14h30a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H26l-10 8v-8h-6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z"/><path d="M48 26h6a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-4v7l-8-7h-8"/></svg>`,
    attention: `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 32s10-18 28-18 28 18 28 18-10 18-28 18S4 32 4 32z"/><circle cx="32" cy="32" r="8"/></svg>`,
    scales: `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M32 8v48M18 56h28M12 18h40"/><path d="M12 18L4 38a8 8 0 0 0 16 0zM52 18l-8 20a8 8 0 0 0 16 0z"/></svg>`,
    path: `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 56c14-2 10-16 24-16s10-16 24-18"/><circle cx="52" cy="14" r="6"/></svg>`
  };

  window.ART = art;
  window.ICONS = icons;
})();
