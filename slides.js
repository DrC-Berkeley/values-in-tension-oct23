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
  video: "https://lnkd.in/p/g5zt2Mke",
  participatory: "https://www.thelearningsociety.org/participatory-ai",
  book: "https://oreilly.com/library/view/the-12-week/9781118616420",
  // Final bCourses assignment URL not yet supplied. Replace the string below, or leave null for the placeholder.
  bcourses: null
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

{ id: "1-2", section: 1, kind: "article", theme: "light", rhythm: 1,
  kicker: "Movement 1 · Read",
  title: "Encounter the article",
  blocks: [ { t: "article",
    title: "ChatGPT is my new TA, and I'm scared",
    deck: "The unethical pedagogy of artificial intelligence",
    by: "Naishu Vempali, Collegian Contributor",
    pub: "The Massachusetts Daily Collegian",
    date: "October 19, 2026",
    synopsis: "A journalism student argues that using AI in classrooms replaces the human interaction that makes education meaningful, and takes away students' chances to build their own skills.",
    excerpt: "education depends so much on interpersonal relationships.",
    href: "article" } ],
  instructor: { verify: "Headline, byline, and date were checked against the live article page on Oct 22. The short excerpt came from an automated read of the page: confirm the exact wording in the original before class, or delete the excerpt." } },

{ id: "1-3", section: 1, kind: "poll", theme: "light", rhythm: 2, poll: 1,
  kicker: "Movement 1 · Poll",
  title: "What do we expect from educators, and what do we contribute as learners?",
  blocks: [ { t: "poll", poll: 1 } ] },

{ id: "1-4", section: 1, kind: "discuss", theme: "light", rhythm: [3, 4],
  kicker: "Movement 1 · What are we noticing?",
  title: "What are we noticing?",
  blocks: [
    { t: "list", items: [
      "What is Vempali asking educators to preserve?",
      "Does human involvement automatically make feedback more meaningful?",
      "What responsibilities do students have in sustaining the learning relationships they want?",
      "When does AI support meaningful engagement, and when does it replace something consequential?" ] },
    { t: "transition", text: "What happens when students and educators agree that learning matters, but disagree about the practices required to make it meaningful?" }
  ],
  instructor: { say: "Share Google Forms aggregate results. Invite contrasting interpretations.", poll: 1 } },

/* ---------------- SECTION 2 ---------------- */
{ id: "2-1", section: 2, kind: "account", theme: "light", rhythm: 0,
  kicker: "Movement 2 · 9:30–9:45 · A conversation that challenged my thinking",
  title: "Attention, Access & the Work of Learning",
  blocks: [
    { t: "note", text: "An anonymized, condensed account from office hours." },
    { t: "p", text: "A Berkeley transfer student preparing for law school described feeling overwhelmed by the demands of his first semester." },
    { t: "p", text: "He values Berkeley's intellectual challenge and recognizes that law school will require sustained reading, reasoning, and adaptability." },
    { t: "p", text: "Yet he also described difficulty sustaining attention and a desire for shorter, more direct learning materials." },
    { t: "p", text: "When we examined his confusion about an assignment, he acknowledged that the information he needed was already available in the syllabus, which he had consulted only twice." },
    { t: "p", text: "He attributed some of this disconnect to TikTok, Instagram, and what he called his generation's “fried” attention." },
    { t: "p", text: "But he also believed he would adapt when the demands of law school required it." },
    { t: "q", text: "What explains the gap between what we want to become and what we practice today?" }
  ],
  instructor: { say: "This is the instructor's account of one conversation, not a study. Do not identify the student or add detail.", verify: "Student-facing text is the approved anonymized account from the brief. No transcript is stored in this project." } },

{ id: "2-2", section: 2, kind: "access", theme: "light", rhythm: 1,
  kicker: "Movement 2 · Access",
  title: "Who decides what meaningful learning requires?",
  blocks: [
    { t: "p", text: "October is Dyslexia Awareness Month and ADHD Awareness Month. Berkeley's Research, Teaching, & Learning Commons has a page on both." },
    { t: "terms", items: [
      { h: "Attention habits", d: "How technologies and daily practices shape where we direct attention." },
      { h: "Accessibility", d: "Whether learning environments enable meaningful participation for people with different needs." },
      { h: "Productive challenge", d: "The intellectual work that helps learners develop capabilities." },
      { h: "Shared responsibility", d: "How educators and learners negotiate the conditions for meaningful engagement." } ] },
    { t: "flyer" },
    { t: "links", items: [ { label: "RTL: Dyslexia & ADHD Awareness Month", href: "rtl" } ] }
  ],
  instructor: { verify: "The RTL page was checked on Oct 22; it does not mention the Neuro Nexus event. The event details shown come from the instructor-supplied flyer text in the brief. The flyer image itself was not in the project folder, so a placeholder is shown. Add the file as assets/neuro-nexus-flyer.png and set `flyerSrc` in this block." } },

{ id: "2-3", section: 2, kind: "poll", theme: "light", rhythm: 2, poll: 2,
  kicker: "Movement 2 · Poll",
  title: "How should we navigate the tension between support, challenge, and learner agency?",
  blocks: [ { t: "poll", poll: 2 } ] },

{ id: "2-4", section: 2, kind: "discuss", theme: "light", rhythm: [3, 4],
  kicker: "Movement 2 · What are we noticing?",
  title: "What are we noticing?",
  blocks: [
    { t: "list", items: [
      "Why might students not use learning resources that are already available?",
      "What explanations are we overlooking when we attribute that behavior to attention spans?",
      "How do we distinguish productive challenge from unnecessary barriers?",
      "How much should educators adapt, and how much should learners develop new practices?",
      "Who gets to decide?" ] },
    { t: "transition", text: "What happens when technology doesn't merely support our learning, but increasingly performs the work through which we develop expertise?" }
  ],
  instructor: { say: "Share Google Forms aggregate results. Invite contrasting interpretations.", poll: 2 } },

/* ---------------- SECTION 3 ---------------- */
{ id: "3-1", section: 3, kind: "provocation", theme: "dark", rhythm: 0,
  kicker: "Movement 3 · 9:45–10:00",
  title: "What are we giving away?",
  blocks: [
    { t: "p", text: "Australian parliamentary testimony concerning AI and labor." },
    { t: "p", text: "The speaker argues that economic incentives behind AI adoption are closely connected to replacing human labor. This is the speaker's argument, not an uncontested fact." },
    { t: "video" }
  ],
  instructor: { verify: "Speaker, committee, hearing date, and the original parliamentary recording are NOT verified. The LinkedIn page names no speaker. [INSTRUCTOR DECISION NEEDED]: supply the speaker's name and, if possible, the original parliamentary video, plus a transcript or captions. The link opens LinkedIn; a backup link is not yet supplied." } },

{ id: "3-2", section: 3, kind: "thought", theme: "light", rhythm: 1,
  kicker: "Movement 3 · A thought experiment",
  title: "What happens when we stop practicing the capabilities we delegate?",
  blocks: [
    { t: "note", text: "A hypothetical scenario, not a prediction." },
    { t: "p", text: "Imagine a future in which AI performs much of the intellectual work people once developed expertise through doing." },
    { t: "p", text: "Research, analysis, diagnosis, design, and decision-making increasingly become automated." },
    { t: "p", text: "The results may be faster and more accurate." },
    { t: "p", text: "But what happens to our ability to question those results if we no longer develop the capabilities required to evaluate them?" },
    { t: "q", text: "Greater capability does not automatically confer moral authority." },
    { t: "p", text: "Is intelligence best understood as a hierarchy, or might different forms of intelligence have distinct capabilities, limitations, and ways of relating to the world?" }
  ] },

{ id: "3-3", section: 3, kind: "poll", theme: "light", rhythm: 2, poll: 3,
  kicker: "Movement 3 · Poll",
  title: "What should determine what we delegate, and what we retain?",
  blocks: [ { t: "poll", poll: 3 } ] },

{ id: "3-4", section: 3, kind: "discuss", theme: "light", rhythm: [3, 4],
  kicker: "Movement 3 · What are we noticing?",
  title: "What are we noticing?",
  blocks: [
    { t: "list", items: [
      "Who benefits from automating human work?",
      "What capabilities might people stop developing?",
      "What happens when people retain formal authority but lose the expertise needed to exercise it?",
      "Does greater intelligence necessarily mean greater wisdom or legitimate authority?",
      "How might we design technologies that expand rather than diminish agency?" ] },
    { t: "transition", text: "If our capabilities and identities are shaped partly by what we repeatedly do, how can we become more intentional about those practices?" }
  ],
  instructor: { say: "Share Google Forms aggregate results. Invite contrasting interpretations.", poll: 3 } },

/* ---------------- SECTION 4 ---------------- */
{ id: "4-1", section: 4, kind: "book", theme: "light", rhythm: 0,
  kicker: "Movement 4 · 10:00–10:15",
  title: "What are we actually optimizing for?",
  blocks: [
    { t: "book" },
    { t: "p", text: "A desired outcome tells us what we hope to achieve. A recurring practice tells us what we're doing to make that outcome possible." },
    { t: "terms", items: [
      { h: "Lag measures", d: "Outcomes that show what happened." },
      { h: "Lead measures", d: "Actions we can intentionally practice that are likely to influence those outcomes." } ] },
    { t: "p", text: "Example. Lag measure: deliver an excellent presentation. Lead measure: rehearse aloud regularly, seek feedback, and revise." },
    { t: "q", text: "What happens when we achieve the outcome but haven't developed the capabilities or relationships we hoped would come with it?" }
  ] },

{ id: "4-2", section: 4, kind: "compare", theme: "light", rhythm: 1,
  kicker: "Movement 4 · From practices to identity",
  title: "How do our everyday choices shape who we're becoming?",
  blocks: [
    { t: "p", text: "Mindful self-discipline is not simply about willpower, productivity, or forcing ourselves to comply." },
    { t: "p", text: "It involves developing awareness of the relationship between our intentions, choices, habits, and the person we want to become." },
    { t: "compare", items: [
      { h: "The 12 Week Year", d: "What recurring actions will help produce the outcomes I want?" },
      { h: "Mindful self-discipline", d: "How do my actions express and reinforce the person I want to become?" },
      { h: "Disability justice and participatory design", d: "What conditions and supports make meaningful participation possible, and who helps shape those conditions?" } ] },
    { t: "note", text: "This is about intentional living and learning, not simply AI use." }
  ] },

{ id: "4-3", section: 4, kind: "poll", theme: "light", rhythm: 2, poll: 4,
  kicker: "Movement 4 · Poll",
  title: "What does it mean to live and learn in alignment with our values?",
  blocks: [ { t: "poll", poll: 4 } ] },

{ id: "4-4", section: 4, kind: "discuss", theme: "light", rhythm: [3, 4],
  kicker: "Movement 4 · What are we noticing?",
  title: "What are we noticing?",
  blocks: [
    { t: "list", items: [
      "What are we using as evidence that our education is working?",
      "What might grades and other conventional measures of success fail to capture?",
      "What happens when our actions don't reflect our stated values?",
      "How do we distinguish individual responsibility from the conditions shaping our choices?",
      "What would values-aligned innovation look like if the people affected helped define what success means?" ] },
    { t: "p", text: "Participatory AI is one way to connect these questions to shared decision-making." },
    { t: "links", items: [ { label: "Participatory AI, GILS", href: "participatory" } ] },
    { t: "transition", text: "We've examined what we expect, what we practice, what we delegate, and who we're becoming. Now it's time to turn the inquiry toward our own lives and the problems we're investigating." }
  ],
  instructor: { say: "Share Google Forms aggregate results. Invite contrasting interpretations.", poll: 4 } },

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
    { t: "p", text: "Consider:" },
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
