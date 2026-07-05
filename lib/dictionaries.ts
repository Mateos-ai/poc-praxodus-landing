import type { Locale } from "@/lib/i18n";

export type Dictionary = typeof en;

const en = {
  nav: {
    items: [
      { label: "What We Do", href: "/what-we-do" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Results", href: "/results" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
    cta: "Book a mapping call",
    menu: "Menu",
    close: "Close",
    langLabel: "עברית",
  },
  hero: {
    eyebrow: "Industrial AI Adoption · End-to-End",
    title: ["Fix the floor.", "Not the slide deck."],
    lead: "We map, pilot, and deploy autonomous AI agents on your production line — with a team that comes from Israeli industry and global tech. Not another recommendations document.",
    ctaPrimary: "Book a mapping call — free",
    ctaSecondary: "See how it works",
    stats: [
      { value: "35%↓", label: "production delays" },
      { value: "4–6 wks", label: "to a live pilot" },
      { value: "12", label: "operators on the team" },
    ],
  },
  pains: {
    eyebrow: "The problem",
    title: "The crisis every plant already knows",
    lead: "AI on the factory floor keeps stalling — and not because the models are weak.",
    items: [
      {
        stat: "42%",
        title: "of AI initiatives failed in 2025",
        body: "Not because the technology fell short — because no one owned governance, change, and the last mile.",
      },
      {
        stat: "→",
        title: "Consultants diagnose, then leave",
        body: "You get a deck and an invoice. The floor keeps running exactly the way it did before.",
      },
      {
        stat: "…",
        title: "Passive copilots don't ship",
        body: "Chat tools wait to be asked. Your bottlenecks don't wait for anyone.",
      },
    ],
  },
  what: {
    eyebrow: "What we do",
    title: "What Praxodus actually does",
    lead: "Five moves, one connected system — from readiness to measured ROI.",
    items: [
      {
        title: "Ready the organization",
        body: "Change management and workforce training, so AI actually lands instead of being resisted.",
      },
      {
        title: "Map every process",
        body: "A department-level audit that ranks the work by value and by speed to impact.",
      },
      {
        title: "Deploy AI agents",
        body: "Autonomous agents that take action across departments — not chatbots that wait to be prompted.",
      },
      {
        title: "Integrate holistically",
        body: "Every department on one connected system, measured continuously against KPIs.",
      },
      {
        title: "Governance & Security",
        body: "AI governance, granular permissions, and full audit logs — built in from day one.",
      },
    ],
  },
  how: {
    eyebrow: "The method",
    title: "Built for the floor, not the lab",
    lead: "A staged path that earns trust with a quick win before it scales.",
    steps: [
      {
        step: "Step 1",
        title: "Mapping call",
        body: "We find the friction together, at no cost — a 45-minute working session, not a sales pitch.",
      },
      {
        step: "Step 2",
        title: "Focused pilot",
        body: "One quick win in a single workflow, live in 4–6 weeks.",
      },
      {
        step: "Step 3",
        title: "Departmental rollout",
        body: "Prioritized by value and speed, expanded across the department.",
      },
      {
        step: "Step 4",
        title: "Holistic system",
        body: "Every workflow on one platform, with governance and audit built in.",
      },
    ],
  },
  results: {
    eyebrow: "Results",
    title: "Results from the floor",
    lead: "Real operations, measured outcomes — across the industries we know.",
    items: [
      {
        sector: "Food & Beverage",
        body: "Quality control, logistics, and production planning connected end-to-end.",
      },
      {
        sector: "Plastics & Packaging",
        body: "Inventory, planning, and bottleneck relief on a single system.",
      },
      {
        sector: "Metal & Machinery",
        body: "Maintenance, scheduling, and safety, orchestrated together.",
      },
    ],
    highlight: {
      label: "E-Commerce pilot",
      value: "35% fewer delays",
      body: "7,000 support threads triaged and routed by autonomous agents.",
    },
    footnote: "Proven ROI, clear KPIs, and measurable response times — reported, not promised.",
  },
  team: {
    eyebrow: "The team",
    title: "The team is the real differentiator",
    lead: "12 operators from Slack, Microsoft, MIT, Similarweb, and Israeli industry. When 42% of AI projects fail on governance, a team that has actually shipped is the proof.",
    cta: "Meet the team",
  },
  cta: {
    eyebrow: "Get started",
    title: "Book a free mapping call",
    lead: "45 minutes. We map your friction points and show you the first quick win. No deck, no obligation.",
    button: "Book a mapping call",
    reassurance: "Your data stays yours. We never train on it.",
  },
  footer: {
    tagline: "Industrial AI Adoption · End-to-End",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "What We Do", href: "/what-we-do" },
          { label: "How It Works", href: "/how-it-works" },
          { label: "Results", href: "/results" },
          { label: "Team", href: "/team" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { label: "Book a mapping call", href: "/contact" },
          { label: "hello@praxodus.com", href: "mailto:hello@praxodus.com" },
          { label: "LinkedIn", href: "#" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Accessibility Statement", href: "/accessibility" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Use", href: "/terms" },
        ],
      },
    ],
    dataNote:
      "Your data stays yours. We don't train models on it. Audit logs and permissions by default.",
    rights: "All rights reserved.",
  },

  whatPage: {
    hero: {
      eyebrow: "What we do",
      title: "We don't hand you a strategy. We run it on your floor.",
      lead: "Five connected moves take you from an organization that isn't ready for AI to autonomous agents working across every department — measured against real KPIs.",
    },
    blocks: [
      {
        title: "Ready the organization",
        body: "Most AI projects die on the people side, not the tech side. We start with change management and hands-on workforce training, so your teams adopt the tools instead of quietly working around them.",
        points: [
          "Role-based training on the floor",
          "Change management and internal champions",
          "Clear ownership before a single agent ships",
        ],
      },
      {
        title: "Map every process",
        body: "A department-level audit of how work actually flows — where friction, rework, and waiting live. We rank every opportunity by business value and by speed to impact, so the first win is obvious.",
        points: [
          "End-to-end process audit",
          "Friction and bottleneck mapping",
          "Prioritized backlog by value × speed",
        ],
      },
      {
        title: "Deploy autonomous AI agents",
        body: "Not chatbots that wait to be asked. Agents that take action inside your workflows — triaging, routing, scheduling, flagging — and hand off to people exactly where judgment is needed.",
        points: [
          "Agents that act, not just answer",
          "Human-in-the-loop where it matters",
          "Connected to your existing systems",
        ],
      },
      {
        title: "Integrate holistically",
        body: "Every department on one connected system instead of a dozen disconnected pilots. One place to see the work, measure it, and improve it — continuously.",
        points: [
          "One platform across departments",
          "Continuous measurement, not one-off reports",
          "Compounding gains as coverage grows",
        ],
      },
      {
        title: "Governance & security",
        body: "Built in from day one, not bolted on later. AI governance, granular permissions, and a full audit log, so security and compliance are answered before procurement asks.",
        points: [
          "AI governance and policy controls",
          "Granular, role-based permissions",
          "Full audit log — your data stays yours",
        ],
      },
    ],
  },

  howPage: {
    hero: {
      eyebrow: "The method",
      title: "Built for the floor, not the lab.",
      lead: "We earn trust with one quick win before we scale. No big-bang rollout, no risk to production, no 200-page deck.",
    },
    steps: [
      {
        step: "Step 1",
        title: "Mapping call",
        body: "A free 45-minute working session where we find the friction together. You leave with a clear view of where AI would pay off first — whether or not you work with us.",
      },
      {
        step: "Step 2",
        title: "Focused pilot",
        body: "One quick win in a single workflow, live in 4–6 weeks. Small enough to be safe, real enough to prove value in numbers.",
      },
      {
        step: "Step 3",
        title: "Departmental rollout",
        body: "We expand across the department in priority order — value and speed first — building on the pilot instead of starting over.",
      },
      {
        step: "Step 4",
        title: "Holistic system",
        body: "Every workflow on one platform, connected and measured, with governance and audit built in from the start.",
      },
    ],
    governance: {
      eyebrow: "Governance & security",
      title: "Governance isn't a feature. It's why AI projects survive.",
      body: "42% of AI initiatives failed in 2025 — most on governance, not models. We build the controls in from step one.",
      points: [
        "AI governance and policy controls",
        "Granular, role-based permissions",
        "Full audit log of every agent action",
        "Your data is never used to train models",
      ],
    },
    notList: {
      eyebrow: "What this is not",
      title: "The quiet fears, answered up front",
      items: [
        {
          title: "No risk to production",
          body: "Pilots run alongside your line, never in the critical path, until they've proven themselves.",
        },
        {
          title: "No data leaves your control",
          body: "Your data stays yours. We don't train models on it, and every action is logged.",
        },
        {
          title: "No army of new hires",
          body: "The method is designed to work with the team you have, not a headcount you don't.",
        },
        {
          title: "No endless consulting",
          body: "You get working agents in weeks — not a deck and an invoice.",
        },
      ],
    },
  },

  resultsPage: {
    hero: {
      eyebrow: "Results",
      title: "Measured on the floor. Reported, not promised.",
      lead: "We work where the numbers are hard and the tolerance for hype is low — Israeli industry. Here's the kind of impact the method delivers.",
    },
    verticals: [
      {
        sector: "Food & Beverage",
        body: "Quality control, logistics, and production planning connected end-to-end — fewer holds, faster throughput.",
        metrics: [
          { value: "QC", label: "automated checks" },
          { value: "↓", label: "logistics delays" },
        ],
      },
      {
        sector: "Plastics & Packaging",
        body: "Inventory, planning, and bottleneck relief on a single system — less waiting between stages.",
        metrics: [
          { value: "1", label: "connected system" },
          { value: "↑", label: "planning accuracy" },
        ],
      },
      {
        sector: "Metal & Machinery",
        body: "Maintenance, scheduling, and safety orchestrated together — less downtime, safer shifts.",
        metrics: [
          { value: "↓", label: "unplanned downtime" },
          { value: "↑", label: "schedule adherence" },
        ],
      },
    ],
    highlight: {
      eyebrow: "E-Commerce pilot",
      value: "35% fewer delays",
      body: "7,000 support threads triaged and routed by autonomous agents — response times cut, backlog cleared, and people freed for the hard cases.",
    },
    kpis: [
      { value: "35%↓", label: "fulfilment delays" },
      { value: "7,000", label: "threads handled" },
      { value: "4–6 wks", label: "to first result" },
      { value: "ROI", label: "tracked per pilot" },
    ],
    footnote:
      "Every engagement ships with clear KPIs, dashboards, and measured response times. If it can't be measured, we don't claim it.",
  },

  teamPage: {
    hero: {
      eyebrow: "The team",
      title: "The team is the real differentiator.",
      lead: "When 42% of AI projects fail on governance and change, the people running yours are the whole story. Ours have shipped at Slack, Microsoft, MIT, and across Israeli industry.",
    },
    leadershipHeading: "Leadership",
    advisoryHeading: "Advisory board",
    why: {
      eyebrow: "Why it matters",
      title: "12 people who have already done this",
      body: "Not a diagnosis from the outside — operators who have built products, run operations, and studied how work actually changes. That's what turns an AI ambition into a system that lasts.",
    },
  },

  teamMembers: {
    leadership: [
      { name: "Yair Nativ", role: "CEO & Co-Founder · 3x Founder" },
      { name: "Aviv Yogev", role: "Co-Founder · Operations" },
      { name: "Noam Biran", role: "Activity Manager · Industry & BD" },
      { name: "David Rajcher", role: "CTO · Enterprise Architecture" },
      { name: "Yuval Pecht", role: "CPO · Workflow Optimization" },
      { name: "Oded Shefer", role: "Industrial Psychologist · 15yr B2B" },
      { name: "Gil Zysberg", role: "Head of Design · Enterprise UX" },
    ],
    advisory: [
      { name: "Noam Mantel", role: "Ex VP Product · Slack & Microsoft" },
      { name: "Michael Schrage", role: "MIT Research Fellow · Digital Transformation" },
      { name: "Veronika Bukhman", role: "AVP Sales · Similarweb ($300M)" },
      { name: "Gloria Mark", role: "UC Irvine · Workplace Behavior Expert" },
      { name: "Nir Eisikovits", role: "UMass · AI Ethics Professor" },
    ],
  },

  contactPage: {
    hero: {
      eyebrow: "Get started",
      title: "Book a free mapping call.",
      lead: "45 minutes. We map your friction points and show you the first quick win. No deck, no obligation.",
    },
    options: [
      {
        title: "Book a mapping call",
        body: "Grab 45 minutes with our team. We'll come prepared with questions about your floor.",
        cta: "Book now",
        href: "mailto:hello@praxodus.com?subject=Mapping%20call",
      },
      {
        title: "Request a pilot proposal",
        body: "Answer five short questions and we'll scope a focused 4–6 week pilot for one workflow.",
        cta: "Email us",
        href: "mailto:hello@praxodus.com?subject=Pilot%20proposal",
      },
      {
        title: "Email",
        body: "Prefer to write first? Reach the team directly and we'll reply within one business day.",
        cta: "hello@praxodus.com",
        href: "mailto:hello@praxodus.com",
      },
    ],
    dataNote:
      "Your data stays yours. We never train models on it, and everything we discuss is covered by an NDA on request.",
  },

  legal: {
    updatedLabel: "Last updated",
    updated: "July 2026",
    reviewNote:
      "This is a starting draft and should be reviewed by legal counsel before launch.",
    accessibility: {
      title: "Accessibility Statement",
      intro:
        "Praxodus is committed to making its website usable for everyone, including people with disabilities. We aim to comply with Israeli Standard SI 5568 (based on WCAG 2.0 level AA) and the Equal Rights for Persons with Disabilities Regulations.",
      sections: [
        {
          heading: "What we've done",
          body: "The site is built with semantic HTML, keyboard-navigable controls, visible focus states, sufficient colour contrast, and screen-reader support in both Hebrew and English.",
        },
        {
          heading: "Ongoing effort",
          body: "Accessibility is continuous. We review new pages and fix issues as they are found. Some third-party content may not yet be fully accessible.",
        },
        {
          heading: "Found a problem?",
          body: "If you encounter an accessibility barrier, please contact our accessibility coordinator at access@praxodus.com and we will address it promptly.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      intro:
        "This policy explains what information Praxodus collects through this website and how we use it. It does not cover data processed inside client engagements, which is governed by a separate data processing agreement.",
      sections: [
        {
          heading: "What we collect",
          body: "Contact details you submit (name, email, company) and basic analytics about how the site is used. We do not sell your data.",
        },
        {
          heading: "How we use it",
          body: "To respond to your enquiry, schedule mapping calls, and improve the site. We keep it only as long as needed for these purposes.",
        },
        {
          heading: "Client data",
          body: "We never train AI models on client data. Engagement data is processed under contract, with permissions and audit logging by default.",
        },
        {
          heading: "Your rights",
          body: "You can ask us to access, correct, or delete your information at any time by emailing privacy@praxodus.com.",
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      intro:
        "These terms govern your use of the Praxodus website. Using the site means you accept them.",
      sections: [
        {
          heading: "Use of the site",
          body: "The content here is general information about our services. It is not a binding offer or professional advice.",
        },
        {
          heading: "Intellectual property",
          body: "The Praxodus name, brand, and site content are owned by Praxodus. Please don't reuse them without permission.",
        },
        {
          heading: "Contact",
          body: "Questions about these terms? Email legal@praxodus.com.",
        },
      ],
    },
  },
} as const;

const he = {
  nav: {
    items: [
      { label: "מה אנחנו עושים", href: "/what-we-do" },
      { label: "המתודה", href: "/how-it-works" },
      { label: "תוצאות", href: "/results" },
      { label: "הצוות", href: "/team" },
      { label: "יצירת קשר", href: "/contact" },
    ],
    cta: "לקביעת שיחת מיפוי",
    menu: "תפריט",
    close: "סגירה",
    langLabel: "English",
  },
  hero: {
    eyebrow: "אימוץ AI תעשייתי · מקצה לקצה",
    title: ["מתקנים את הרצפה.", "לא עוד מצגת."],
    lead: "אנחנו ממפים, מפעילים פיילוט ומטמיעים סוכני AI אוטונומיים על קו הייצור — עם צוות שמגיע מהתעשייה הישראלית ומהטק העולמי. לא עוד מסמך המלצות.",
    ctaPrimary: "קביעת שיחת מיפוי — חינם",
    ctaSecondary: "איך זה עובד",
    stats: [
      { value: "35%↓", label: "עיכובים בייצור" },
      { value: "4–6 שב׳", label: "לפיילוט חי" },
      { value: "12", label: "אנשי ביצוע בצוות" },
    ],
  },
  pains: {
    eyebrow: "הבעיה",
    title: "המשבר שכל מפעל כבר מכיר",
    lead: "AI ברצפת הייצור ממשיך להיתקע — ולא כי המודלים חלשים.",
    items: [
      {
        stat: "42%",
        title: "מיוזמות ה-AI נכשלו ב-2025",
        body: "לא כי הטכנולוגיה לא הספיקה — כי לאף אחד לא הייתה אחריות על ממשל, שינוי ארגוני והקילומטר האחרון.",
      },
      {
        stat: "←",
        title: "יועצים מאבחנים, ואז הולכים",
        body: "אתם מקבלים מצגת וחשבונית. הרצפה ממשיכה לעבוד בדיוק כמו קודם.",
      },
      {
        stat: "…",
        title: "קופיילוטים פסיביים לא מיישמים",
        body: "כלי צ׳אט מחכים שישאלו אותם. צווארי הבקבוק שלכם לא מחכים לאף אחד.",
      },
    ],
  },
  what: {
    eyebrow: "מה אנחנו עושים",
    title: "מה Praxodus באמת עושה",
    lead: "חמישה מהלכים, מערכת אחת מחוברת — מהכנה ועד ROI מדיד.",
    items: [
      {
        title: "מכינים את הארגון",
        body: "ניהול שינוי והכשרת עובדים, כדי ש-AI באמת ייקלט ולא ייתקל בהתנגדות.",
      },
      {
        title: "ממפים כל תהליך",
        body: "אודיט ברמת המחלקה שמדרג את העבודה לפי ערך ולפי מהירות ההשפעה.",
      },
      {
        title: "מטמיעים סוכני AI",
        body: "סוכנים אוטונומיים שפועלים לרוחב המחלקות — לא צ׳אטבוטים שמחכים שיפנו אליהם.",
      },
      {
        title: "אינטגרציה הוליסטית",
        body: "כל המחלקות על מערכת אחת מחוברת, במדידה שוטפת מול KPIs.",
      },
      {
        title: "ממשל ואבטחה",
        body: "ממשל AI, הרשאות מדויקות ולוג אודיט מלא — מובנים מהיום הראשון.",
      },
    ],
  },
  how: {
    eyebrow: "המתודה",
    title: "נבנתה לרצפה, לא למעבדה",
    lead: "מסלול מדורג שמייצר אמון עם Quick Win עוד לפני ההרחבה.",
    steps: [
      {
        step: "שלב 1",
        title: "שיחת מיפוי",
        body: "מזהים את החיכוך יחד, ללא עלות — פגישת עבודה של 45 דקות, לא שיחת מכירה.",
      },
      {
        step: "שלב 2",
        title: "פיילוט ממוקד",
        body: "Quick Win אחד בתהליך בודד, באוויר תוך 4–6 שבועות.",
      },
      {
        step: "שלב 3",
        title: "הרחבה מחלקתית",
        body: "לפי סדר עדיפויות של ערך ומהירות, בהרחבה על פני המחלקה.",
      },
      {
        step: "שלב 4",
        title: "מערכת הוליסטית",
        body: "כל תהליך על פלטפורמה אחת, עם ממשל ואודיט מובנים.",
      },
    ],
  },
  results: {
    eyebrow: "תוצאות",
    title: "תוצאות מהשטח",
    lead: "פעילות אמיתית, תוצאות מדידות — בתעשיות שאנחנו מכירים.",
    items: [
      {
        sector: "מזון ומשקאות",
        body: "בקרת איכות, לוגיסטיקה ותכנון ייצור מחוברים מקצה לקצה.",
      },
      {
        sector: "פלסטיק ואריזה",
        body: "מלאי, תכנון ושחרור צוואר בקבוק על מערכת אחת.",
      },
      {
        sector: "מתכת ומכונות",
        body: "תחזוקה, תזמון ובטיחות, מתוזמרים יחד.",
      },
    ],
    highlight: {
      label: "פיילוט E-Commerce",
      value: "35% פחות עיכובים",
      body: "7,000 פניות תמיכה מוינו ונותבו על ידי סוכנים אוטונומיים.",
    },
    footnote: "ROI מוכח, KPIs ברורים וזמני תגובה מדידים — מדווחים, לא מובטחים.",
  },
  team: {
    eyebrow: "הצוות",
    title: "הצוות הוא הבידול האמיתי",
    lead: "12 אנשי ביצוע מ-Slack, Microsoft, MIT, Similarweb ומהתעשייה הישראלית. כש-42% מפרויקטי ה-AI נכשלים על ממשל, צוות שכבר יישם בשטח הוא ההוכחה.",
    cta: "הכירו את הצוות",
  },
  cta: {
    eyebrow: "מתחילים",
    title: "קבעו שיחת מיפוי — חינם",
    lead: "45 דקות. נמפה את נקודות החיכוך ונראה לכם את ה-Quick Win הראשון. בלי מצגת, בלי התחייבות.",
    button: "קביעת שיחת מיפוי",
    reassurance: "המידע שלכם נשאר שלכם. אנחנו אף פעם לא מאמנים עליו.",
  },
  footer: {
    tagline: "אימוץ AI תעשייתי · מקצה לקצה",
    columns: [
      {
        heading: "החברה",
        links: [
          { label: "מה אנחנו עושים", href: "/what-we-do" },
          { label: "המתודה", href: "/how-it-works" },
          { label: "תוצאות", href: "/results" },
          { label: "הצוות", href: "/team" },
        ],
      },
      {
        heading: "יצירת קשר",
        links: [
          { label: "קביעת שיחת מיפוי", href: "/contact" },
          { label: "hello@praxodus.com", href: "mailto:hello@praxodus.com" },
          { label: "LinkedIn", href: "#" },
        ],
      },
      {
        heading: "מידע משפטי",
        links: [
          { label: "הצהרת נגישות", href: "/accessibility" },
          { label: "מדיניות פרטיות", href: "/privacy" },
          { label: "תנאי שימוש", href: "/terms" },
        ],
      },
    ],
    dataNote:
      "המידע שלכם נשאר שלכם. אנחנו לא מאמנים עליו מודלים. לוג אודיט והרשאות כברירת מחדל.",
    rights: "כל הזכויות שמורות.",
  },

  whatPage: {
    hero: {
      eyebrow: "מה אנחנו עושים",
      title: "אנחנו לא מגישים לכם אסטרטגיה. אנחנו מריצים אותה על הרצפה.",
      lead: "חמישה מהלכים מחוברים לוקחים אתכם מארגון שלא בשל ל-AI לסוכנים אוטונומיים שפועלים בכל מחלקה — נמדדים מול KPIs אמיתיים.",
    },
    blocks: [
      {
        title: "מכינים את הארגון",
        body: "רוב פרויקטי ה-AI מתים בצד האנושי, לא בצד הטכנולוגי. אנחנו מתחילים בניהול שינוי ובהכשרת עובדים בשטח, כדי שהצוותים יאמצו את הכלים במקום לעקוף אותם בשקט.",
        points: [
          "הכשרה מבוססת-תפקיד על הרצפה",
          "ניהול שינוי ומובילי דעה פנימיים",
          "בעלות ברורה עוד לפני שסוכן אחד עולה לאוויר",
        ],
      },
      {
        title: "ממפים כל תהליך",
        body: "אודיט ברמת המחלקה של איך העבודה באמת זורמת — איפה נמצאים החיכוך, העבודה הכפולה וההמתנות. מדרגים כל הזדמנות לפי ערך עסקי ולפי מהירות ההשפעה, כך שה-Win הראשון ברור מאליו.",
        points: [
          "אודיט תהליכים מקצה לקצה",
          "מיפוי חיכוך וצווארי בקבוק",
          "Backlog מתועדף לפי ערך × מהירות",
        ],
      },
      {
        title: "מטמיעים סוכני AI אוטונומיים",
        body: "לא צ׳אטבוטים שמחכים שיפנו אליהם. סוכנים שפועלים בתוך התהליכים — ממיינים, מנתבים, מתזמנים ומסמנים — ומעבירים לבני אדם בדיוק היכן שנדרש שיקול דעת.",
        points: [
          "סוכנים שפועלים, לא רק עונים",
          "אדם בלולאה היכן שזה חשוב",
          "מחוברים למערכות הקיימות שלכם",
        ],
      },
      {
        title: "אינטגרציה הוליסטית",
        body: "כל מחלקה על מערכת אחת מחוברת במקום עשרה פיילוטים מנותקים. מקום אחד לראות את העבודה, למדוד אותה ולשפר אותה — באופן שוטף.",
        points: [
          "פלטפורמה אחת לרוחב המחלקות",
          "מדידה שוטפת, לא דו״ח חד-פעמי",
          "רווחים שמצטברים ככל שהכיסוי גדל",
        ],
      },
      {
        title: "ממשל ואבטחה",
        body: "מובנים מהיום הראשון, לא מודבקים בדיעבד. ממשל AI, הרשאות מדויקות ולוג אודיט מלא — כך שאבטחה ורגולציה נענות עוד לפני שהרכש שואל.",
        points: [
          "ממשל AI ובקרות מדיניות",
          "הרשאות מדויקות מבוססות-תפקיד",
          "לוג אודיט מלא — המידע נשאר שלכם",
        ],
      },
    ],
  },

  howPage: {
    hero: {
      eyebrow: "המתודה",
      title: "נבנתה לרצפה, לא למעבדה.",
      lead: "מייצרים אמון עם Quick Win אחד עוד לפני ההרחבה. בלי מהפך חד-פעמי, בלי סיכון לייצור, בלי מצגת של 200 שקפים.",
    },
    steps: [
      {
        step: "שלב 1",
        title: "שיחת מיפוי",
        body: "פגישת עבודה חינמית של 45 דקות שבה מזהים את החיכוך יחד. אתם יוצאים עם תמונה ברורה של איפה AI ישתלם קודם — בין אם תעבדו איתנו ובין אם לא.",
      },
      {
        step: "שלב 2",
        title: "פיילוט ממוקד",
        body: "Quick Win אחד בתהליך בודד, באוויר תוך 4–6 שבועות. קטן מספיק כדי להיות בטוח, אמיתי מספיק כדי להוכיח ערך במספרים.",
      },
      {
        step: "שלב 3",
        title: "הרחבה מחלקתית",
        body: "מרחיבים על פני המחלקה לפי סדר עדיפויות — ערך ומהירות קודם — בונים על הפיילוט במקום להתחיל מחדש.",
      },
      {
        step: "שלב 4",
        title: "מערכת הוליסטית",
        body: "כל תהליך על פלטפורמה אחת, מחוברת ונמדדת, עם ממשל ואודיט מובנים מההתחלה.",
      },
    ],
    governance: {
      eyebrow: "ממשל ואבטחה",
      title: "ממשל הוא לא פיצ׳ר. הוא הסיבה שפרויקטי AI שורדים.",
      body: "42% מיוזמות ה-AI נכשלו ב-2025 — רובן על ממשל, לא על מודלים. אנחנו בונים את הבקרות מהשלב הראשון.",
      points: [
        "ממשל AI ובקרות מדיניות",
        "הרשאות מדויקות מבוססות-תפקיד",
        "לוג אודיט מלא לכל פעולת סוכן",
        "המידע שלכם לעולם לא משמש לאימון מודלים",
      ],
    },
    notList: {
      eyebrow: "מה זה לא",
      title: "החששות השקטים — נענים מראש",
      items: [
        {
          title: "בלי סיכון לייצור",
          body: "פיילוטים רצים לצד הקו, אף פעם לא בנתיב הקריטי, עד שהם מוכיחים את עצמם.",
        },
        {
          title: "המידע לא יוצא משליטתכם",
          body: "המידע נשאר שלכם. אנחנו לא מאמנים עליו מודלים, וכל פעולה נרשמת.",
        },
        {
          title: "בלי צבא של גיוסים",
          body: "המתודה נבנתה כדי לעבוד עם הצוות שיש לכם, לא עם תקנים שאין.",
        },
        {
          title: "בלי ייעוץ אינסופי",
          body: "מקבלים סוכנים עובדים תוך שבועות — לא מצגת וחשבונית.",
        },
      ],
    },
  },

  resultsPage: {
    hero: {
      eyebrow: "תוצאות",
      title: "נמדדות בשטח. מדווחות, לא מובטחות.",
      lead: "אנחנו עובדים איפה שהמספרים קשוחים והסבלנות להייפ נמוכה — בתעשייה הישראלית. הנה סוג ההשפעה שהמתודה מייצרת.",
    },
    verticals: [
      {
        sector: "מזון ומשקאות",
        body: "בקרת איכות, לוגיסטיקה ותכנון ייצור מחוברים מקצה לקצה — פחות עיכובים, תפוקה מהירה יותר.",
        metrics: [
          { value: "QC", label: "בדיקות אוטומטיות" },
          { value: "↓", label: "עיכובי לוגיסטיקה" },
        ],
      },
      {
        sector: "פלסטיק ואריזה",
        body: "מלאי, תכנון ושחרור צוואר בקבוק על מערכת אחת — פחות המתנה בין השלבים.",
        metrics: [
          { value: "1", label: "מערכת מחוברת" },
          { value: "↑", label: "דיוק תכנון" },
        ],
      },
      {
        sector: "מתכת ומכונות",
        body: "תחזוקה, תזמון ובטיחות מתוזמרים יחד — פחות השבתות, משמרות בטוחות יותר.",
        metrics: [
          { value: "↓", label: "השבתות לא מתוכננות" },
          { value: "↑", label: "עמידה בלוחות זמנים" },
        ],
      },
    ],
    highlight: {
      eyebrow: "פיילוט E-Commerce",
      value: "35% פחות עיכובים",
      body: "7,000 פניות תמיכה מוינו ונותבו על ידי סוכנים אוטונומיים — זמני התגובה קוצרו, ה-Backlog נוקה, והאנשים התפנו למקרים הקשים.",
    },
    kpis: [
      { value: "35%↓", label: "עיכובי אספקה" },
      { value: "7,000", label: "פניות טופלו" },
      { value: "4–6 שב׳", label: "לתוצאה ראשונה" },
      { value: "ROI", label: "נמדד לכל פיילוט" },
    ],
    footnote:
      "כל התקשרות מגיעה עם KPIs ברורים, דשבורדים וזמני תגובה מדידים. מה שאי אפשר למדוד — אנחנו לא מבטיחים.",
  },

  teamPage: {
    hero: {
      eyebrow: "הצוות",
      title: "הצוות הוא הבידול האמיתי.",
      lead: "כש-42% מפרויקטי ה-AI נכשלים על ממשל ושינוי, האנשים שמריצים את שלכם הם כל הסיפור. שלנו יישמו ב-Slack, Microsoft, MIT ולרוחב התעשייה הישראלית.",
    },
    leadershipHeading: "הנהלה",
    advisoryHeading: "ועדה מייעצת",
    why: {
      eyebrow: "למה זה משנה",
      title: "12 אנשים שכבר עשו את זה",
      body: "לא אבחון מבחוץ — אנשי ביצוע שבנו מוצרים, ניהלו תפעול וחקרו איך עבודה באמת משתנה. זה מה שהופך שאיפת AI למערכת שמחזיקה לאורך זמן.",
    },
  },

  teamMembers: {
    leadership: [
      { name: "יאיר נתיב", role: "CEO ומייסד-שותף · 3x Founder" },
      { name: "אביב יוגב", role: "מייסד-שותף · תפעול" },
      { name: "נעם בירן", role: "מנהל פעילות · תעשייה ופיתוח עסקי" },
      { name: "David Rajcher", role: "CTO · ארכיטקטורת Enterprise" },
      { name: "Yuval Pecht", role: "CPO · אופטימיזציית תהליכים" },
      { name: "עודד שפר", role: "פסיכולוג תעשייתי · 15 שנות B2B" },
      { name: "גיל זיסברג", role: "ראש עיצוב · Enterprise UX" },
    ],
    advisory: [
      { name: "Noam Mantel", role: "Ex VP Product · Slack ו-Microsoft" },
      { name: "Michael Schrage", role: "MIT Research Fellow · טרנספורמציה דיגיטלית" },
      { name: "Veronika Bukhman", role: "AVP Sales · Similarweb ($300M)" },
      { name: "Gloria Mark", role: "UC Irvine · מומחית להתנהגות בעבודה" },
      { name: "Nir Eisikovits", role: "UMass · פרופסור לאתיקה של AI" },
    ],
  },

  contactPage: {
    hero: {
      eyebrow: "מתחילים",
      title: "קבעו שיחת מיפוי — חינם.",
      lead: "45 דקות. נמפה את נקודות החיכוך ונראה לכם את ה-Quick Win הראשון. בלי מצגת, בלי התחייבות.",
    },
    options: [
      {
        title: "קביעת שיחת מיפוי",
        body: "45 דקות עם הצוות שלנו. נגיע מוכנים עם שאלות על הרצפה שלכם.",
        cta: "לקביעה",
        href: "mailto:hello@praxodus.com?subject=Mapping%20call",
      },
      {
        title: "בקשת הצעת פיילוט",
        body: "עונים על חמש שאלות קצרות ואנחנו מגדירים פיילוט ממוקד של 4–6 שבועות לתהליך אחד.",
        cta: "כתבו לנו",
        href: "mailto:hello@praxodus.com?subject=Pilot%20proposal",
      },
      {
        title: "אימייל",
        body: "מעדיפים לכתוב קודם? פנו לצוות ישירות ונחזור אליכם תוך יום עסקים אחד.",
        cta: "hello@praxodus.com",
        href: "mailto:hello@praxodus.com",
      },
    ],
    dataNote:
      "המידע שלכם נשאר שלכם. אנחנו אף פעם לא מאמנים עליו מודלים, וכל מה שנדבר עליו מכוסה ב-NDA לפי בקשה.",
  },

  legal: {
    updatedLabel: "עודכן לאחרונה",
    updated: "יולי 2026",
    reviewNote:
      "זוהי טיוטה ראשונית שיש להעביר לבדיקת יועץ משפטי לפני העלייה לאוויר.",
    accessibility: {
      title: "הצהרת נגישות",
      intro:
        "Praxodus מחויבת להנגיש את אתר האינטרנט שלה לכלל הציבור, כולל אנשים עם מוגבלות. אנו שואפים לעמוד בתקן הישראלי ת״י 5568 (המבוסס על WCAG 2.0 ברמה AA) ובתקנות שוויון זכויות לאנשים עם מוגבלות.",
      sections: [
        {
          heading: "מה עשינו",
          body: "האתר בנוי ב-HTML סמנטי, עם בקרות הניתנות לניווט במקלדת, מצבי פוקוס נראים, ניגודיות צבע מספקת ותמיכה בקוראי מסך בעברית ובאנגלית.",
        },
        {
          heading: "מאמץ מתמשך",
          body: "נגישות היא תהליך מתמשך. אנו בודקים עמודים חדשים ומתקנים תקלות כשהן מתגלות. ייתכן שתוכן צד-שלישי מסוים אינו נגיש עדיין במלואו.",
        },
        {
          heading: "מצאתם בעיה?",
          body: "אם נתקלתם בחסם נגישות, אנא פנו לרכז הנגישות שלנו בכתובת access@praxodus.com ונטפל בכך בהקדם.",
        },
      ],
    },
    privacy: {
      title: "מדיניות פרטיות",
      intro:
        "מדיניות זו מסבירה איזה מידע Praxodus אוספת דרך אתר זה וכיצד אנו משתמשים בו. היא אינה חלה על מידע המעובד במסגרת התקשרויות עם לקוחות, שמוסדר בהסכם עיבוד נתונים נפרד.",
      sections: [
        {
          heading: "מה אנחנו אוספים",
          body: "פרטי קשר שאתם מוסרים (שם, אימייל, חברה) ונתוני אנליטיקה בסיסיים על אופן השימוש באתר. איננו מוכרים את המידע שלכם.",
        },
        {
          heading: "כיצד אנו משתמשים בו",
          body: "כדי לענות לפנייתכם, לתאם שיחות מיפוי ולשפר את האתר. אנו שומרים אותו רק כל עוד נדרש למטרות אלה.",
        },
        {
          heading: "מידע של לקוחות",
          body: "אנחנו אף פעם לא מאמנים מודלים על מידע של לקוחות. מידע במסגרת התקשרות מעובד תחת חוזה, עם הרשאות ולוג אודיט כברירת מחדל.",
        },
        {
          heading: "הזכויות שלכם",
          body: "אתם יכולים לבקש לעיין, לתקן או למחוק את המידע שלכם בכל עת בפנייה לכתובת privacy@praxodus.com.",
        },
      ],
    },
    terms: {
      title: "תנאי שימוש",
      intro:
        "תנאים אלה חלים על השימוש שלכם באתר Praxodus. שימוש באתר מהווה הסכמה להם.",
      sections: [
        {
          heading: "שימוש באתר",
          body: "התוכן כאן הוא מידע כללי על השירותים שלנו. אין בו הצעה מחייבת או ייעוץ מקצועי.",
        },
        {
          heading: "קניין רוחני",
          body: "השם Praxodus, המותג ותוכן האתר הם בבעלות Praxodus. אנא אל תעשו בהם שימוש חוזר ללא רשות.",
        },
        {
          heading: "יצירת קשר",
          body: "שאלות על תנאים אלה? כתבו ל-legal@praxodus.com.",
        },
      ],
    },
  },
} as const;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  he: he as unknown as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
