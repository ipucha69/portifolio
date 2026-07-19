import { motion } from "framer-motion";
import { MonitorSmartphone, Database, ServerCog, Cloud, Wrench, Bot } from "lucide-react";

const groups = [
  {
    icon: MonitorSmartphone,
    title: "Frontend",
    note: "what users interact with",
    skills: [
      "ReactJS",
      "React Native",
      "Angular",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    icon: ServerCog,
    title: "Backend",
    note: "business logic & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "Authentication",
    ],
  },

  {
    icon: Database,
    title: "Database & Cloud",
    note: "data, storage & infrastructure",
    skills: [
      "MySQL",
      "Firebase",
      "Firestore",
      "Firebase Cloud Functions",
      "Cloud Storage",
    ],
  },

  {
    icon: Bot,
    title: "AI Automation",
    note: "intelligent workflows",
    skills: [
      "n8n",
      "AI Agents",
      "Workflow Automation",
      "AI Integrations",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-ink py-24 text-cloud">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal-bright"
        >
          [ stack ]
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl"
        >
          One connected system, four layers.
        </motion.h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-cloud/10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-ink p-6"
            >
              <g.icon size={20} className="text-signal-bright" />
              <h3 className="mt-4 font-display text-base font-semibold text-cloud">{g.title}</h3>
              <p className="font-mono text-[10px] uppercase font-mono-tag tracking-widest text-cloud/40">
                {g.note}
              </p>
              <ul className="mt-4 space-y-2">
                {g.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-cloud/70">
                    <span className="h-1 w-1 rounded-full bg-signal-bright" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
