import { motion } from "framer-motion";
import { Layers, Cpu, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Scalable systems",
    text: "I structure data and UI so a product built for one client, one league, or one shop can grow into many — without a rewrite.",
  },
  {
    icon: Sparkles,
    title: "Modern UI/UX",
    text: "Interfaces stay clean and fast on real devices, not just design mockups — because a dashboard someone opens all day has to feel effortless.",
  },
  {
    icon: Cpu,
    title: "Automation-first",
    text: "Repetitive business work — reports, notifications, follow-ups — gets handed to workflows and AI agents built with n8n.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal">
            [ about ]
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            I build the software behind
            <br />a running business.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-[15px] leading-relaxed text-ink/70 sm:text-base"
        >
          <p>
            I'm Rashid, a full stack developer and AI automation engineer.
            My background is in shipping practical, real-world systems for
            operations that can't afford downtime or guesswork — hardware
            shops tracking inventory, leagues tracking scores, clinics
            tracking patients.
          </p>
          <p>
            I specialize in React and React Native on the front end and Firebase and Nodejs on the back
            end for Web applications and Mobile applications, which lets me move from idea to a working, real-time product
            quickly — then layer in automation with n8n and AI agents so the
            business runs itself a little more each month.
          </p>
          <p>
            Every project starts from the same question: what is the real
            problem this business has, today, and what is the smallest system
            that solves it well and can still grow. That business-first
            mindset is what separates a demo from software people actually
            rely on.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-ink/8 bg-white/60 p-6"
          >
            <p.icon className="text-signal" size={22} />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
