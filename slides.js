/* ============================================================
   Values in Tension: all instructional content lives here.
   Edit wording, links, order, and notes in this file only.
   Block types: p, lead, q (key question), list, terms, compare,
   article, poll, flyer, video, book, links, assign, note
   `rhythm`: index (or [from,to]) into RHYTHM below.
   `verify`: shown only in instructor mode; flags unverified items.
   ============================================================ */

window.RHYTHM = ["Encounter", "Reflect", "Poll", "Interpret", "Dialogue", "Reconsider", "Act"];

window.SECTIONS = [
  { id: 0, label: "Opening inquiry", short: "Opening", time: "9:10–9:15", mins: 5, art: "campanile",
    purpose: "Set the tone: a live inquiry, not a lecture. Name the tension between what we value and what we practice, and say plainly that the polls have no correct answers." },
  { id: 1, label: "What do we expect?", short: "Expect", time: "9:15–9:30", mins: 15, art: "gate",
    purpose: "Open with a real provocation from a Berkeley-adjacent student voice, before any polling. The aim is to surface what students and educators expect of each other, not to settle the AI-in-teaching debate." },
  { id: 2, label: "What do we practice?", short: "Practice", time: "9:30–9:45", mins: 15, art: "library",
    purpose: "Separate four things that are easy to blur: attention habits, accessibility, productive challenge, and shared responsibility. Avoid treating any one way of attending or learning as the norm." },
  { id: 3, label: "What do we delegate?", short: "Delegate", time: "9:45–10:00", mins: 15, art: "stadium",
    purpose: "Move from replacing work to delegating judgment. Present the speaker's argument as an argument, and the thought experiment as hypothetical. Do not present AI superintelligence or human extinction as inevitable." },
  { id: 4, label: "Who are we becoming?", short: "Become", time: "10:00–10:15", mins: 15, art: "hills",
    purpose: "Shift from outcomes to practices to identity, and connect to participatory design and shared decision-making. This is about intentional living and learning, not only AI use." },
  { id: 5, label: "From inquiry to action", short: "Reflect", time: "10:15–10:30", mins: 15, art: "campanile",
    purpose: "The full 15 minutes belong to the individual attendance reflection in bCourses. No automatic navigation. Stay on the assignment slide while students write." }
];

window.LINKS = {
  article: "https://dailycollegian.com/2026/10/chatgpt-is-my-new-ta-and-im-scared/",
  rtl: "https://rtl.berkeley.edu/dyslexia-adhd-awareness-month",
  nnStudent: "https://bit.ly/student-nn",
  nnFaculty: "https://bit.ly/faculty-nn",
  nnBoard: "https://slc.berkeley.edu/slpBoard",
  video: "https://lnkd.in/p/g5zt2Mke",
  participatory: "https://www.thelearningsociety.org/participatory-ai",
  book: "https://oreilly.com/library/view/the-12-week/9781118616420",
  mindful: "https://a.co/d/02KHrLgZ",
  // Final bCourses assignment URL not yet supplied. Replace the string below, or leave null for the placeholder.
  bcourses: "https://bcourses.berkeley.edu/courses/1555498/assignments/9161814?module_item_id=17865467"
};

/* Respondent URLs (student-facing). Results links are instructor-only and shown in instructor mode. */
window.POLLS = {
  1: { n: 1, icon: "dialogue",
       respondent: "https://docs.google.com/forms/d/e/1FAIpQLSdqdvRMzfSO-qbrEpiEiEGojhlwX4Thv0mKBzIoYNuAn4IQmA/viewform",
       results: "https://docs.google.com/forms/d/1iKUoHHSCJG-oQpBAztn5SghhhH5VImWwnv-ngGCnSss/edit#responses" },
  2: { n: 2, icon: "attention",
       respondent: "https://docs.google.com/forms/d/e/1FAIpQLSdyScddXB5g6mhNtKDQOWOCemN_I-e-6slojARsfDIG7q9kbQ/viewform",
       results: "https://docs.google.com/forms/d/1ETy8dps8oFM-3ofI4fh9wnZw5Jq4LUaMk95tKysNCk0/edit#responses" },
  3: { n: 3, icon: "scales",
       respondent: "https://docs.google.com/forms/d/e/1FAIpQLSexeoVtvKvxgT6WZEkWBTyFf3eknaiXMdmwrSjaNdNfiu1YQA/viewform",
       results: "https://docs.google.com/forms/d/1Ch5eQsQtJ0uXJCPSEe2wNOq0PWxHmzCotaPSGBouJU4/edit#responses" },
  4: { n: 4, icon: "path",
       respondent: "https://docs.google.com/forms/d/e/1FAIpQLSfpCkEyriVfJtUCNKW5iXP8uFPTbF3Al0yBzXJPdGpi5Tw_Gw/viewform",
       results: "https://docs.google.com/forms/d/18DVcYiIBtPReMqqg2iHXhKySrWWj8FDMuT15joF0jTs/edit#responses" }
};

/* Shared structure for every post-poll slide: results, then noticing, then dialogue.
   No percentages, quotations, or sample responses belong here: the group's own results are shown live from Google Forms. */
window.DIALOGUE = {
  lead: "Let\u2019s look at our poll results together.",
  steps: [
    { h: "Results", d: "We\u2019ll look at the summary charts from the poll. They show the shape of the whole group, not any one person." },
    { h: "Noticing", prompts: ["What patterns or differences do you notice?", "What surprised you or makes you curious?"] },
    { h: "Dialogue", prompts: ["Who would like to explain what shaped their choice?", "If you chose Other, would you like to share your perspective?"],
      note: "Sharing is always voluntary. Nothing on screen names anyone or shows written answers." }
  ],
  close: "Respond to one another, and reconsider what these charts can and cannot tell us."
};

window.SLIDES = [
/* ---------------- SECTION 0 ---------------- */
{ id: "0-1", section: 0, kind: "title", theme: "dark", rhythm: null,
  title: "Values in Tension", sub: "Who Are We Becoming?",
  blocks: [ { t: "lead", text: "A participatory inquiry into learning, attention, AI, agency, and the choices that shape our futures." } ],
  instructor: { say: "Welcome. Begin at 9:10.", move: "Use the right arrow or Next to begin." } },

{ id: "0-2", section: 0, kind: "inquiry", theme: "light", rhythm: null,
  kicker: "Today's inquiry",
  title: "What happens when what we value and what we practice don't align?",
  blocks: [
    { t: "p", text: "We all have ideas about what makes learning meaningful, what we want from our education, and who we hope to become." },
    { t: "p", text: "But our everyday choices are shaped by competing demands, technologies, relationships, and institutional expectations." },
    { t: "p", text: "Today, we'll investigate some of those tensions together." },
    { t: "q", label: "Our guiding question", text: "How do we retain the agency to shape our learning and our futures?" }
  ] },

{ id: "0-3", section: 0, kind: "agenda", theme: "light", rhythm: null,
  kicker: "Our path today", title: "Six stops, one inquiry",
  blocks: [
    { t: "agenda" },
    { t: "p", text: "Today is a live inquiry. We'll encounter ideas, respond individually, examine our collective perspectives, and discuss what those responses might reveal." },
    { t: "p", text: "There are no correct answers to the polls." },
    { t: "q", text: "Our purpose is not agreement. It is inquiry." }
  ],
  instructor: { say: "Name the rhythm out loud: Encounter, Reflect, Poll, Interpret, Dialogue, Reconsider, Act. Mention that the last 15 minutes are the attendance reflection." } },

/* ---------------- SECTION 1 ---------------- */
{ id: "1-1", section: 1, kind: "provocation", theme: "dark", rhythm: 0,
  kicker: "Movement 1 · 9:15–9:30",
  title: "What do we owe one another?",
  blocks: [
    { t: "source", cite: "ChatGPT is my new TA, and I'm scared", by: "Naishu Vempali, The Massachusetts Daily Collegian, October 2026", href: "article" },
    { t: "p", text: "Vempali questions what happens when AI begins replacing parts of the human relationships and intellectual work that make education meaningful." },
    { t: "p", text: "She wants professors to engage personally with student writing and worries about learning experiences that substitute AI interaction for human dialogue." },
    { t: "p", text: "But what happens when educators teach hundreds of students and must rely on readers, teaching assistants, or AI-supported workflows?" },
    { t: "q", text: "What should meaningful engagement look like at scale?" }
  ] },

{ id: "1-2", section: 1, kind: "excerpt", theme: "light", rhythm: 1,
  kicker: "Movement 1 · Read closely",
  title: "A passage to read closely",
  blocks: [ { t: "excerpt",
    text: "\u2018I want to know that my professor is actually sitting with the essays I write. I want them to engage with it, tear me apart in the comments. I want to know they read my email and cared enough to dignify me with a response, even if it\u2019s halfhearted and sent from their iPhone. I want to be able to offer a barely perceptible nose exhale to a meme on their slideshows, knowing they at least suffered searching for the perfect one. These small acts of intimacy are what breed connection between teacher and student. They are the reasons why I choose to raise my hand in class. They remind me that a real human being is actively trying to put information into my brain. They make me willing to receive it.\u2019",
    by: "Naishu Vempali",
    cite: "ChatGPT is my new TA, and I\u2019m scared",
    pub: "The Massachusetts Daily Collegian, October 19, 2026",
    href: "article",
    questions: [
      "What does this passage ask educators to provide, and what role does it imagine for the learner?",
      "Where do you see connection, participation, or passive reception?" ] } ],
  instructor: { say: "Read the passage aloud or give 60 seconds of silent reading. Then ask the two questions. Invite students to look closely at \u201cput information into my brain\u201d and \u201cwilling to receive it\u201d: does the passage describe active participation, or cast the learner as a recipient? Keep this a question about the text, not a verdict on the author.",
    verify: "The passage is the instructor-supplied text, entered verbatim. Headline, byline, and date were checked against the live article on Oct 22. Compare the passage with the original if you want a final wording check." } },

{ id: "1-3", section: 1, kind: "poll", theme: "light", rhythm: 2, poll: 1,
  kicker: "Movement 1 · Poll",
  title: "What do we expect from educators, and what do we contribute as learners?",
  blocks: [ { t: "poll", poll: 1 } ] },

{ id: "1-4", section: 1, kind: "discuss", theme: "light", rhythm: [3, 4], poll: 1,
  kicker: "Movement 1 · Poll results",
  title: "What are we seeing together?",
  blocks: [ { t: "dialogue" } ],
  instructor: { say: "Open Form 1, go to Responses, then the Summary tab, and share that screen on Zoom. Show the charts only. Keep the Individual and Question tabs closed. Written Other responses can identify people, so do not display or read them aloud; if someone chose Other, invite them to speak for themselves.",
    poll: 1, transition: "What happens when students and educators agree that learning matters, but disagree about the practices required to make it meaningful?" } },

/* ---------------- SECTION 2 ---------------- */
{ id: "2-1", section: 2, kind: "cues", theme: "light", rhythm: 0,
  kicker: "Movement 2 · 9:30–9:45 · A conversation that challenged my thinking",
  title: "Attention, Access & the Work of Learning",
  blocks: [
    { t: "q", label: "Guiding inquiry for Movement 2",
      text: "What explains the gap between what we want to become and what we practice today?",
      sub: "Hold this question as you listen to the conversation, consider the learning conditions, and respond to the poll. Dialogue follows the poll, when we discuss the results together." },
    { t: "note", text: "From an office-hours conversation. Anonymized." },
    { t: "cues", items: [
      { h: "The future they\u2019re preparing for", d: "Law school. Sustained reading." },
      { h: "The request in the present", d: "Shorter, more direct materials." },
      { h: "What happened when we looked together", d: "The needed information was in the syllabus. Consulted twice." },
      { h: "The turn toward responsibility", d: "Attention habits now. An expectation of adapting later." } ] }
  ],
  instructor: { say: "Narrate the conversation first, in your own words; the cues are memory prompts, not quotations. The guiding question is held for the whole movement, not an immediate discussion stop. Do not identify the student. Keep they/them/their.",
    verify: "The four cue labels are provisional paraphrases of the approved anonymized account. The raw transcript is not in this project, so no key moments or exact quotes are shown. Supply selected exact lines to add them. [INSTRUCTOR DECISION NEEDED]" } },

{ id: "2-2", section: 2, kind: "access", theme: "light", rhythm: 1,
  kicker: "Movement 2 · Access",
  title: "Who decides what meaningful learning requires?",
  blocks: [
    { t: "p", text: "October is Dyslexia Awareness Month and ADHD Awareness Month. Berkeley's Research, Teaching, & Learning Commons has a page on both." },
    { t: "links", items: [ { label: "RTL: Dyslexia & ADHD Awareness Month", href: "rtl" } ] },
    { t: "terms", items: [
      { h: "Attention habits", d: "How technologies and daily practices shape where we direct attention." },
      { h: "Accessibility", d: "Whether learning environments enable meaningful participation for people with different needs." },
      { h: "Productive challenge", d: "The intellectual work that helps learners develop capabilities." },
      { h: "Shared responsibility", d: "How educators and learners negotiate the conditions for meaningful engagement." } ] },
    { t: "event", flyerSrc: "neuro-nexus-flyer.png",
      alt: "Event flyer for Neuro Nexus: A Student-Faculty Conversation on Neurodivergent Student Learning. November 2nd, 12 to 2 PM, Student Center as printed on the flyer. Hosted by the SLC Strategic Learning Program Neurodivergent Student Advisory Board. Student RSVP bit.ly/student-nn. Faculty RSVP bit.ly/faculty-nn. Learn more at slc.berkeley.edu/slpBoard.",
      title: "Neuro Nexus: A Student-Faculty Conversation on Neurodivergent Student Learning",
      when: "November 2 \u00b7 12\u20132 PM",
      check: "Check the RSVP page for current location and event details.",
      host: "Hosted by the SLC Strategic Learning Program Neurodivergent Student Advisory Board",
      links: [ { label: "Student RSVP (Berkeley sign-in)", href: "nnStudent" }, { label: "Faculty RSVP (Berkeley sign-in)", href: "nnFaculty" }, { label: "About the Advisory Board", href: "nnBoard" } ] }
  ],
  instructor: { verify: "The flyer image is shown unchanged. It prints Student Center as the venue, but the student RSVP page (checked in your Berkeley-signed-in browser) lists 12\u20132 pm with an official program 12:30\u20132 pm, at 127 Dwinelle Hall. The slide therefore gives only the date and 12\u20132 PM and tells students to check the RSVP page for the current location; it does not state a venue. The RSVP link needs Berkeley sign-in (an outside account sees \u2018You need access\u2019). The Advisory Board link works. The RTL page was checked on Oct 22 and does not mention the event. RSVPs happen on the event's own links; this site collects none. The flyer file is about 3.5 MB; compress it if mobile load time matters." } },

{ id: "2-3", section: 2, kind: "poll", theme: "light", rhythm: 2, poll: 2,
  kicker: "Movement 2 · Poll",
  title: "How should we navigate the tension between support, challenge, and learner agency?",
  blocks: [ { t: "poll", poll: 2 } ] },

{ id: "2-4", section: 2, kind: "discuss", theme: "light", rhythm: [3, 4], poll: 2,
  kicker: "Movement 2 · Poll results",
  title: "What are we seeing together?",
  blocks: [ { t: "dialogue" } ],
  instructor: { say: "Open Form 2, go to Responses, then the Summary tab, and share that screen on Zoom. Show the charts only. Keep the Individual and Question tabs closed. Written Other responses can identify people, so do not display or read them aloud; if someone chose Other, invite them to speak for themselves.",
    poll: 2, transition: "What happens when technology doesn't merely support our learning, but increasingly performs the work through which we develop expertise?" } },

/* ---------------- SECTION 3 ---------------- */
{ id: "3-1", section: 3, kind: "provocation", theme: "dark", rhythm: 0,
  kicker: "Movement 3 · 9:45–10:00",
  title: "What are we giving away?",
  blocks: [
    { t: "p", text: "Australian parliamentary testimony concerning AI and labor." },
    { t: "p", text: "Dr Richard Denniss, co-CEO of The Australia Institute, argues that economic incentives behind AI adoption are closely connected to replacing human labor. This is his argument, not an uncontested fact." },
    { t: "video", title: "Testimony on AI and Labor", by: "Dr Richard Denniss \u00b7 Australian parliamentary hearing",
      embed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7518565184244916225" }
  ],
  instructor: { say: "Present this as the speaker's argument. Ask students what they would want to check before agreeing or disagreeing.",
    links: [ { label: "Source: The Point, 22 October 2026, reporting Dr Denniss's testimony to the Joint Select Committee on Artificial Intelligence", href: "https://thepoint.com.au/new/261022-not-an-unintended-consequence-mass-unemployment-is-the-ai-business-model" },
             { label: "Profile: Richard Denniss, The Australia Institute", href: "https://australiainstitute.org.au/expert/richard-denniss/page/2/" } ],
    verify: "Speaker and role are confirmed by The Point article (co-CEO of The Australia Institute; Joint Select Committee on Artificial Intelligence; 22 Oct 2026). The profile page returned an access error to my automated fetch, so the title is not independently re-confirmed there. The article does not give a separate hearing date. The 'Show the clip' button loads LinkedIn's official embed of a public post by another LinkedIn user (Amy L.), whose caption attributes a quote to a different source; the embed also cannot be confirmed to match the original parliamentary recording. It never autoplays. Check captions in LinkedIn's player before class. If you have the original parliamentary video or a transcript, supply it." } },

{ id: "3-2", section: 3, kind: "motion", theme: "light", rhythm: 1,
  kicker: "Movement 3 · A thought experiment, not a prediction",
  title: "Who decides?",
  blocks: [
    { t: "motion", summary: "Context for the thought experiment", context: [
      "<strong>What happens when we stop practicing the capabilities we delegate?</strong>",
      "This is a hypothetical scenario, not a prediction.",
      "Imagine a future in which AI performs much of the intellectual work people once developed expertise through doing.",
      "Research, analysis, diagnosis, design, and decision-making increasingly become automated.",
      "The results may be faster and more accurate.",
      "But what happens to our ability to question those results if we no longer develop the capabilities required to evaluate them?",
      "<strong>Greater capability does not automatically confer moral authority.</strong>",
      "Is intelligence best understood as a hierarchy, or might different forms of intelligence have distinct capabilities, limitations, and ways of relating to the world?" ] }
  ],
  instructor: { say: "The question for this slide: \u201cWhat happens when we stop practicing the capabilities we delegate?\u201d Press Play and narrate, or use the three scene buttons to stop and elaborate. The animation freezes on \u201cWho decides?\u201d; it never advances the slide. Keep this a question, not a forecast: do not present AI superintelligence or human extinction as inevitable. Sound is optional and starts off.",
    verify: "This is an original illustration of the thought experiment from your AI-dependency conversation. It contains no quotations and no personal conversation details. The expandable context uses only the approved wording. Sound is generated in the browser (no recordings)." } },

{ id: "3-3", section: 3, kind: "poll", theme: "light", rhythm: 2, poll: 3,
  kicker: "Movement 3 · Poll",
  title: "What should determine what we delegate, and what we retain?",
  blocks: [ { t: "poll", poll: 3 } ] },

{ id: "3-4", section: 3, kind: "discuss", theme: "light", rhythm: [3, 4], poll: 3,
  kicker: "Movement 3 · Poll results",
  title: "What are we seeing together?",
  blocks: [ { t: "dialogue" } ],
  instructor: { say: "Open Form 3, go to Responses, then the Summary tab, and share that screen on Zoom. Show the charts only. Keep the Individual and Question tabs closed. Written Other responses can identify people, so do not display or read them aloud; if someone chose Other, invite them to speak for themselves.",
    poll: 3, transition: "If our capabilities and identities are shaped partly by what we repeatedly do, how can we become more intentional about those practices?" } },

/* ---------------- SECTION 4 ---------------- */
{ id: "4-1", section: 4, kind: "book", theme: "light", rhythm: 0,
  kicker: "Movement 4 · 10:00–10:15",
  title: "What are we actually optimizing for?",
  blocks: [
    { t: "book", src: "twelve-week-year.webp", alt: "Book cover: The 12 Week Year, Get more done in 12 weeks than others do in 12 months, by Brian P. Moran and Michael Lennington, Wiley.",
      title: "The 12 Week Year", by: "Brian P. Moran and Michael Lennington", href: "book", label: "Book record" },
    { t: "p", text: "A desired outcome tells us what we hope to achieve. A recurring practice tells us what we're doing to make that outcome possible." },
    { t: "terms", items: [
      { h: "Lag measures", d: "Outcomes that show what happened." },
      { h: "Lead measures", d: "Actions we can intentionally practice that are likely to influence those outcomes." } ] },
    { t: "example", items: [
      { h: "Lag measure:", d: "Deliver an excellent presentation." },
      { h: "Lead measure:", d: "Rehearse aloud regularly, seek feedback, and revise." } ] },
    { t: "q", text: "What happens when we achieve the outcome but haven't developed the capabilities or relationships we hoped would come with it?" }
  ],
  instructor: { verify: "Cover image is the supplied actual cover (Wiley is printed on it). The 2013 publication year came from search results only. The book link goes to an O\u2019Reilly library record found by search; swap in your preferred link in LINKS.book." } },

{ id: "4-2", section: 4, kind: "compare", theme: "light", rhythm: 1,
  kicker: "Movement 4 · From practices to identity",
  title: "How do our everyday choices shape who we're becoming?",
  blocks: [
    { t: "p", text: "Mindful self-discipline is not simply about willpower, productivity, or forcing ourselves to comply." },
    { t: "p", text: "It involves developing awareness of the relationship between our intentions, choices, habits, and the person we want to become." },
    { t: "book", src: "mindful-self-discipline.jpg", alt: "Book cover: Mindful Self-Discipline, Living with purpose and achieving your goals in a world of distractions, by Giovanni Dienstmann.",
      title: "Mindful Self-Discipline", by: "Giovanni Dienstmann", href: "mindful", label: "Book on Amazon",
      role: "The 12 Week Year connects outcomes to recurring actions. Mindful Self-Discipline brings awareness and intention, and helps us align what we do with our values and the person we are becoming." },
    { t: "compare", items: [
      { h: "The 12 Week Year", d: "What recurring actions will help produce the outcomes I want?" },
      { h: "Mindful self-discipline", d: "How do my actions express and reinforce the person I want to become?" },
      { h: "Disability justice and participatory design", d: "What conditions and supports make meaningful participation possible, and who helps shape those conditions?" } ] },
    { t: "note", text: "This is about intentional living and learning, not simply AI use." }
  ],
  instructor: { verify: "Book details (title, author, ASIN 0645138916) were read from the Amazon page behind your link and a second listing at acepremier.com; the cover is the observed product cover. The product description stresses mindfulness and awareness more than force or willpower. No quotations from the book are used." } },

{ id: "4-3", section: 4, kind: "poll", theme: "light", rhythm: 2, poll: 4,
  kicker: "Movement 4 · Poll",
  title: "What does it mean to live and learn in alignment with our values?",
  blocks: [ { t: "poll", poll: 4 } ] },

{ id: "4-4", section: 4, kind: "discuss", theme: "light", rhythm: [3, 4], poll: 4,
  kicker: "Movement 4 · Poll results",
  title: "What are we seeing together?",
  blocks: [ { t: "dialogue" }, { t: "explore", label: "Explore further:", link: "Participatory AI", href: "participatory" } ],
  instructor: { say: "Open Form 4, go to Responses, then the Summary tab, and share that screen on Zoom. Show the charts only. Keep the Individual and Question tabs closed. Written Other responses can identify people, so do not display or read them aloud; if someone chose Other, invite them to speak for themselves.",
    poll: 4, transition: "We've examined what we expect, what we practice, what we delegate, and who we're becoming. Now it's time to turn the inquiry toward our own lives and the problems we're investigating.", links: [{ label: "Participatory AI, GILS (optional connection to shared decision-making, if the conversation goes there)", href: "participatory" }] } },

/* ---------------- SECTION 5 ---------------- */
{ id: "5-1", section: 5, kind: "assignment", theme: "light", rhythm: 6,
  kicker: "Attendance assignment · 10:15–10:30",
  title: "From Inquiry to Action",
  blocks: [ { t: "assign" } ],
  instructor: { say: "Stay on this slide for the full 15 minutes. No automatic navigation. Attendance is submitted through bCourses only." } },

{ id: "5-2", section: 5, kind: "reflect", theme: "light", rhythm: 5,
  kicker: "After the reflection",
  title: "From individual perspectives to collective understanding",
  blocks: [
    { t: "p", text: "Today, we began with questions rather than predetermined answers." },
    { t: "p", text: "We encountered different perspectives, made choices, examined our collective responses, and considered what those responses might mean." },
    { t: "p", text: "We also discovered that the same experience can be interpreted differently depending on whose perspective we consider." },
    { t: "p", text: "This is an important starting point for participatory inquiry." },
    { t: "q", text: "Inquiry doesn't end when we collect responses. It continues when we interpret what we're learning with the people whose experiences are involved." },
    { t: "p", text: "Next week, Professor G will help us explore participatory action research more explicitly." },
    { t: "h", text: "Consider:" },
    { t: "list", items: [
      "Whose perspectives are missing from our understanding?",
      "What assumptions might we need to reconsider?",
      "Who should participate in deciding what happens next?" ] }
  ] },

{ id: "5-3", section: 5, kind: "closing", theme: "dark", rhythm: null,
  title: "Who are we becoming?",
  blocks: [
    { t: "p", text: "Our values are not expressed only through what we believe or say matters." },
    { t: "p", text: "They are also reflected in what we practice, what we delegate, the relationships we cultivate, and the systems we help create." },
    { t: "p", text: "Values-aligned innovation asks us to examine not only the outcomes we pursue, but also the processes and relationships through which we pursue them." },
    { t: "q", text: "What will you choose to practice, and what might you help change?" }
  ] }
];
