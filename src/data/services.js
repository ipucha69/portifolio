import { LayoutDashboard, Code2, Smartphone, Bot, Cloud, LifeBuoy } from "lucide-react";

export const services = [
    {
        icon: LayoutDashboard,
        tag: "Business Systems",
        name: "Business Systems & Dashboards",
        summary:
            "Custom systems for operations that need to trust their own numbers — inventory, sales, expenses, and reporting in one place.",
        deliverables: [
            "Inventory & stock tracking",
            "Sales and point-of-sale flows",
            "Profit & expense reporting",
            "Analytics dashboards with Chart.js",
        ],
    },
    {
        icon: Code2,
        tag: "Web Development",
        name: "Full Stack Web Applications",
        summary:
            "End-to-end React and Firebase applications — from a first click-through prototype to a live, authenticated, multi-user product.",
        deliverables: [
            "React + Vite front end",
            "Firebase Auth & Firestore back end",
            "REST API integration",
            "Responsive, mobile-first UI",
        ],
    },
    {
        icon: Smartphone,
        tag: "Mobile Development",
        name: "Mobile Apps with React Native",
        summary:
            "Cross-platform iOS and Android apps built with React Native, backed by the same Firebase data layer as your web system — one source of truth, two apps.",
        deliverables: [
            "React Native cross-platform app",
            "Shared Firebase Auth & Firestore backend",
            "Push notifications",
            "App Store & Play Store deployment",
        ],
    },
    {
        icon: Bot,
        tag: "AI Automation",
        name: "Workflow & AI Automation",
        summary:
            "Automating the repetitive parts of running a business — notifications, reports, follow-ups — with n8n workflows and AI agents.",
        deliverables: [
            "n8n workflow design & setup",
            "AI agents for support or data tasks",
            "Automated reports & notifications",
            "Third-party API & tool integration",
        ],
    },
    {
        icon: Cloud,
        tag: "Infrastructure",
        name: "Backend & Cloud Setup",
        summary:
            "Getting the foundation right — data structure, authentication, storage, and cloud functions set up to scale from day one.",
        deliverables: [
            "Firestore data modeling",
            "Authentication & permissions",
            "Cloud Functions",
            "Firebase Storage & hosting",
        ],
    },
    {
        icon: LifeBuoy,
        tag: "Ongoing Support",
        name: "Maintenance & Support",
        summary:
            "For systems already live — fixing bugs, shipping new features, and keeping things running as the business grows.",
        deliverables: [
            "Bug fixes & performance tuning",
            "New feature development",
            "Monthly retainer or one-off support",
            "Handover documentation",
        ],
    },
];

export const process = [
    {
        step: "01",
        title: "Discover",
        text: "Understand the real problem — how the business runs today, and where it breaks down.",
    },
    {
        step: "02",
        title: "Design",
        text: "Map the data and the screens before writing code, so the system matches how people actually work.",
    },
    {
        step: "03",
        title: "Build",
        text: "Ship in working slices — you see progress early, not just at the end.",
    },
    {
        step: "04",
        title: "Automate",
        text: "Layer in workflows and AI agents to remove repetitive manual work.",
    },
    {
        step: "05",
        title: "Support",
        text: "Stay involved after launch — fixes, improvements, and answers when you need them.",
    },
];