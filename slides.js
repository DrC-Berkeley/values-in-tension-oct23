/* ============================================================
   Values in Tension: all instructional content lives here.
   Edit wording, links, and order in this file only.
   Block types: p, lead, q (key question), list, terms, compare,
   article, poll, flyer, video, book, links, assign, note
   `rhythm`: index (or [from,to]) into RHYTHM below.
   ============================================================ */

window.RHYTHM = ["Encounter", "Reflect", "Poll", "Interpret", "Dialogue", "Reconsider", "Act"];

window.SECTIONS = [
  { id: 0, label: "Opening inquiry", short: "Opening", time: "9:10–9:15", mins: 5, art: "campanile" },
  { id: 1, label: "What do we expect?", short: "Expect", time: "9:15–9:30", mins: 15, art: "gate" },
  { id: 2, label: "What do we practice?", short: "Practice", time: "9:30–9:45", mins: 15, art: "library" },
  { id: 3, label: "What do we delegate?", short: "Delegate", time: "9:45–10:00", mins: 15, art: "stadium" },
  { id: 4, label: "Who are we becoming?", short: "Become", time: "10:00–10:15", mins: 15, art: "hills" },
  { id: 5, label: "From inquiry to action", short: "Reflect", time: "10:15–10:30", mins: 15, art: "campanile" }
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

/* Respondent URLs (student-facing). */
window.POLLS = {
  1: { n: 1, icon: "dialogue",
       respondent: "https://docs.google.com/forms/d/e/1FAIpQLSdqdvRMzfSO-qbrEpiEiEGojhlwX4Thv0mKBzIoYNuAn4IQmA/viewform" },
  2: { n: 2, icon: "attention",
       respondent: "https://docs.google.com/forms/d/e/1FAIpQLSdyScddXB5g6mhNtKDQOWOCemN_I-e-6slojARsfDIG7q9kbQ/viewform" },
  3: { n: 3, icon: "scales",
       respondent: "https://docs.google.com/forms/d/e/1FAIpQLSexeoVtvKvxgT6WZEkWBTyFf3eknaiXMdmwrSjaNdNfiu1YQA/viewform" },
  4: { n: 4, icon: "path",
       respondent: "https://docs.google.com/forms/d/e/1FAIpQLSfpCkEyriVfJtUCNKW5iXP8uFPTbF3Al0yBzXJPdGpi5Tw_Gw/viewform" }
};

/* Shared structure for every post-poll slide: results, then noticing, then dialogue.
   No percentages, quotations, or sample responses belong here: the group's own results are shown live from Google Forms. */
window.DIALOGUE = {
  lead: "Let\u2019s look at our poll results together.",
  noticing: ["What patterns or differences do you notice?", "What surprised you or makes you curious?"],
  dialogue: ["Who would like to explain what shaped their choice?", "If you chose Other, would you like to share your perspective?"]
};

window.SLIDES = [
/* ---------------- SECTION 0 ---------------- */
{ id: "0-1", section: 0, kind: "title", theme: "dark", rhythm: null,
  title: "Values in Tension", sub: "Who Are We Becoming?",
  blocks: [ { t: "lead", text: "A participatory inquiry into learning, attention, AI, agency, and the choices that shape our futures." } ] },

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
  ] },

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
      "Where do you see connection, participation, or passive reception?" ] } ] },

{ id: "1-3", section: 1, kind: "poll", theme: "light", rhythm: 2, poll: 1,
  kicker: "Movement 1 · Poll",
  title: "What do we expect from educators, and what do we contribute as learners?",
  blocks: [ { t: "poll", poll: 1 } ] },

{ id: "1-4", section: 1, kind: "discuss", theme: "light", rhythm: [3, 4],
  kicker: "Movement 1 · Poll results",
  title: "What are we seeing together?",
  blocks: [ { t: "dialogue" } ] },

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
  ] },

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
  ] },

{ id: "2-3", section: 2, kind: "poll", theme: "light", rhythm: 2, poll: 2,
  kicker: "Movement 2 · Poll",
  title: "How should we navigate the tension between support, challenge, and learner agency?",
  blocks: [ { t: "poll", poll: 2 } ] },

{ id: "2-4", section: 2, kind: "discuss", theme: "light", rhythm: [3, 4],
  kicker: "Movement 2 · Poll results",
  title: "What are we seeing together?",
  blocks: [ { t: "dialogue" } ] },

/* ---------------- SECTION 3 ---------------- */
{ id: "3-1", section: 3, kind: "provocation", theme: "dark", rhythm: 0,
  kicker: "Movement 3 · 9:45–10:00",
  title: "What are we giving away?",
  blocks: [
    { t: "p", text: "Australian parliamentary testimony concerning AI and labor." },
    { t: "p", text: "Dr Richard Denniss, co-CEO of The Australia Institute, argues that economic incentives behind AI adoption are closely connected to replacing human labor. This is his argument, not an uncontested fact." },
    { t: "video", title: "Testimony on AI and Labor", by: "Dr Richard Denniss \u00b7 Australian parliamentary hearing" }
  ] },

{ id: "3-2", section: 3, kind: "thought", theme: "light", rhythm: 1,
  kicker: "A thought experiment",
  title: "Is intelligence a ladder?",
  blocks: [
    { t: "p", text: "An exchange with AI moved from fears about superintelligence to questions about voice, authority, and what counts as intelligence." },
    { t: "note", text: "Selected excerpts from an instructor\u2013AI conversation. The model\u2019s responses are an artifact to examine, not verified evidence or scientific authority." },
    { t: "turns", items: [
      { h: "From catastrophe to dependence", who: "AI response", quote: "We might surrender meaningful control long before any system forcibly takes it.",
        ctx: "Formal authority can remain while knowledge, practice, and institutional capacity erode." },
      { h: "Who is speaking?", who: "Dr. C", quote: "You're writing as if you're a human",
        ctx: "I interrupted its use of \u201cwe\u201d: a fluent synthesis can sound like human concern or independent moral judgment." },
      { h: "Questioning the ladder", who: "Dr. C", quote: "our intelligence is limited to our container",
        ctx: "I challenged ranking human, machine, animal, and ecological ways of knowing on one scale. Particular capabilities do not establish overall superiority; embodiment and relationships shape what each can know." } ] },
    { t: "q", label: "Open inquiry", text: "What changes when we compare particular capacities without ranking whole forms of intelligence?" }
  ] },

{ id: "3-3", section: 3, kind: "poll", theme: "light", rhythm: 2, poll: 3,
  kicker: "Movement 3 · Poll",
  title: "What should determine what we delegate, and what we retain?",
  blocks: [ { t: "poll", poll: 3 } ] },

{ id: "3-4", section: 3, kind: "discuss", theme: "light", rhythm: [3, 4],
  kicker: "Movement 3 · Poll results",
  title: "What are we seeing together?",
  blocks: [ { t: "dialogue" } ] },

/* ---------------- SECTION 4 ---------------- */
{ id: "4-1", section: 4, kind: "book", theme: "light", rhythm: 0, layout: "twocol",
  kicker: "Movement 4 · 10:00–10:15",
  title: "What are we actually optimizing for?",
  blocks: [
    { t: "book", src: "twelve-week-year.webp", alt: "Book cover: The 12 Week Year, Get more done in 12 weeks than others do in 12 months, by Brian P. Moran and Michael Lennington, Wiley.",
      title: "The 12 Week Year", by: "Brian P. Moran and Michael Lennington", href: "book", label: "Book record" },
    { t: "p", text: "A desired outcome tells us what we hope to achieve. A recurring practice tells us what we're doing to make that outcome possible." },
    { t: "measures", items: [
      { h: "Lag measures", d: "Outcomes that show what happened.", lab: "Lag measure:", ex: "Deliver an excellent presentation." },
      { h: "Lead measures", d: "Actions we can intentionally practice that are likely to influence those outcomes.", lab: "Lead measure:", ex: "Rehearse aloud regularly, seek feedback, and revise." } ] },
    { t: "q", text: "What happens when we achieve the outcome but haven't developed the capabilities or relationships we hoped would come with it?" }
  ] },

{ id: "4-2", section: 4, kind: "compare", theme: "light", rhythm: 1, layout: "twocol",
  kicker: "Movement 4 · From practices to identity",
  title: "How do our everyday choices shape who we're becoming?",
  blocks: [
    { t: "p", text: "Mindful self-discipline is not simply about willpower, productivity, or forcing ourselves to comply." },
    { t: "p", text: "It involves developing awareness of the relationship between our intentions, choices, habits, and the person we want to become." },
    { t: "book", src: "mindful-self-discipline.jpg", alt: "Book cover: Mindful Self-Discipline, Living with purpose and achieving your goals in a world of distractions, by Giovanni Dienstmann.",
      title: "Mindful Self-Discipline", by: "Giovanni Dienstmann", href: "mindful", label: "Book on Amazon" },
    { t: "p", text: "The 12 Week Year connects outcomes to recurring actions. Mindful Self-Discipline brings awareness and intention, and helps us align what we do with our values and the person we are becoming." },
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
  kicker: "Movement 4 · Poll results",
  title: "What are we seeing together?",
  blocks: [ { t: "dialogue" }, { t: "explore", label: "Explore further:", link: "Participatory AI", href: "participatory" } ] },

/* ---------------- SECTION 5 ---------------- */
{ id: "5-2", section: 5, kind: "reflect", theme: "light", rhythm: 5,
  kicker: "Closing inquiry",
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
  ] },

{ id: "5-1", section: 5, kind: "assignment", theme: "light", rhythm: 6,
  kicker: "Attendance assignment · 10:15–10:30",
  title: "From Inquiry to Action",
  blocks: [ { t: "assign" } ] }
];
