export const projects = [
  {
    slug: "pos-hardware-system",
    tag: "Business Systems",
    name: "POS Hardware Management System",
    summary:
      "A point-of-sale platform for hardware retailers covering inventory, sales, expenses, and profit reporting in one dashboard.",
    stack: ["React", "Firebase", "Firestore", "Chart.js", "Cloud Functions"],
    metrics: [
      { label: "Modules", value: "5" },
      { label: "Data sync", value: "Real-time" },
      { label: "Reports", value: "Auto-generated" },
    ],
    highlights: [
      "Live inventory tracking with low-stock alerts",
      "Point-of-sale flow built for fast, low-friction checkout",
      "Sales tracking across staff, branches, and time periods",
      "Profit and expense reports generated automatically",
      "Analytics dashboard with visual breakdowns via Chart.js",
    ],
    caseStudy: {
      problem:
        "Hardware shops were tracking stock, sales, and expenses across separate notebooks and spreadsheets. Owners had no reliable way to see real profit until the end of the month, and stock discrepancies were common.",
      approach:
        "Designed a single system around three daily habits: selling, restocking, and recording expenses. Every action updates the same live dataset, so the dashboard is always a true reflection of the business — not a report someone has to assemble later.",
      challenges:
        "Keeping the point-of-sale screen fast on low-end shop devices while Firestore synced in the background, and modeling profit correctly once returns, discounts, and partial payments were factored in.",
      technologies: ["React", "Vite", "Firebase Auth", "Firestore", "Cloud Functions", "Chart.js", "Tailwind CSS"],
      results:
        "Shop owners get same-day visibility into profit and stock levels instead of waiting until month-end reconciliation, and staff record a sale in under 10 seconds.",
    },
  },
  {
    slug: "draft-tanzania",
    tag: "Sports Platform",
    name: "Draft Tanzania",
    summary:
      "A league management and live sports platform with standings, fixtures, live scores, and event systems built for a responsive, fast-moving audience.",
    stack: ["React", "Firebase", "Firestore", "React Router", "Redux"],
    metrics: [
      { label: "Data model", value: "League-based" },
      { label: "Updates", value: "Live" },
      { label: "Layout", value: "Fully responsive" },
    ],
    highlights: [
      "League and season management for organizers",
      "Live score updates during matches",
      "Automatically calculated standings tables",
      "Event and fixture scheduling system",
      "Sports-first UI tuned for quick scanning on mobile",
    ],
    caseStudy: {
      problem:
        "Local leagues had no central place for fixtures, live scores, or standings — fans relied on scattered social media posts, and organizers tracked tables by hand.",
      approach:
        "Modeled the platform around leagues, seasons, and fixtures as first-class data, so standings and event pages could be derived automatically instead of maintained manually. Built the UI mobile-first, since most fans check scores from a phone during a match.",
      challenges:
        "Keeping standings accurate in real time as scores changed mid-match, and designing a component structure that could scale from one league to many without a rewrite.",
      technologies: ["React", "Redux", "React Router", "Firebase", "Firestore", "Tailwind CSS"],
      results:
        "Organizers publish a result once and standings, fixtures, and history update everywhere automatically, cutting manual table-keeping to zero.",
    },
  },
  {
    slug: "impacthub",
    tag: "Community Platform",
    name: "ImpactHub",
    summary:
      "A volunteer and organization management platform with messaging, notifications, and event coordination built to scale across many organizations.",
    stack: ["React", "Firebase", "Firestore", "Cloud Functions", "Firebase Storage"],
    metrics: [
      { label: "User types", value: "Volunteers & orgs" },
      { label: "Messaging", value: "Real-time" },
      { label: "Scope", value: "Multi-organization" },
    ],
    highlights: [
      "Volunteer sign-up and profile management",
      "Organization dashboards for managing members and events",
      "In-app messaging between volunteers and organizations",
      "Notification system for event updates and reminders",
      "Event creation, scheduling, and attendance tracking",
    ],
    caseStudy: {
      problem:
        "Organizations coordinating volunteers were relying on group chats and shared spreadsheets, which broke down once more than one organization or event was involved.",
      approach:
        "Structured the platform so organizations, volunteers, and events are independent, related entities — allowing one volunteer to belong to multiple organizations and one organization to run multiple concurrent events without data collisions.",
      challenges:
        "Designing a permissions model where organizations only see their own members and events, and keeping messaging and notifications reliable as usage grew across organizations.",
      technologies: ["React", "Firebase Auth", "Firestore", "Cloud Functions", "Firebase Storage", "Tailwind CSS"],
      results:
        "Organizations manage recruitment, communication, and events from one dashboard instead of juggling group chats, spreadsheets, and email threads.",
    },
  },
  {
    slug: "appointment-system",
    tag: "Healthcare Software",
    name: "Appointment System",
    summary:
      "A scheduling platform for clinics that manages patient flow, appointment booking, and filtering through a clear, professional dashboard.",
    stack: ["React", "Firebase", "Firestore", "React Router"],
    metrics: [
      { label: "Flow", value: "Patient-first" },
      { label: "Scheduling", value: "Conflict-free" },
      { label: "Views", value: "Filterable" },
    ],
    highlights: [
      "Patient flow from booking through to visit completion",
      "Appointment scheduling with conflict detection",
      "Structured intake forms for patient information",
      "Filtering by date, provider, and appointment status",
      "Clean dashboard UI for front-desk and clinical staff",
    ],
    caseStudy: {
      problem:
        "A clinic was booking appointments over the phone and tracking them on paper, which led to double-bookings and no easy way to see the day's patient flow at a glance.",
      approach:
        "Built a booking flow with built-in conflict detection, paired with a dashboard that gives front-desk staff a single filterable view of the day, week, and provider schedules.",
      challenges:
        "Handling scheduling conflicts gracefully in the UI without blocking staff, and designing forms clinical staff could fill in quickly during a busy day.",
      technologies: ["React", "React Router", "Firebase Auth", "Firestore", "Tailwind CSS"],
      results:
        "Double-bookings dropped to zero and front-desk staff can see and adjust the day's full patient flow from a single screen.",
    },
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
