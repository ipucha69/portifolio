import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, FileDown } from "lucide-react";

const bars = [38, 62, 45, 78, 55, 90, 70];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cloud">
      <div className="absolute inset-0 bg-grid-ink opacity-40" aria-hidden="true" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-signal/20 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.15fr_0.85fr] md:pb-32 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal-bright">
            [ full stack developer / AI automation engineer ]
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Rashid Iddi builds
            <br />
            <span className="text-signal-bright">business systems</span> that
            <br />
            hold up at scale.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cloud/70 sm:text-lg">
            I design and build scalable software — POS platforms, sports
            systems, volunteer networks, appointment tools — using React,
            Firebase, Nodejs, and intelligent automation with n8n and AI agents.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-medium text-cloud transition-colors hover:bg-signal-bright"
            >
              View Projects
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cloud/25 px-6 py-3 font-medium text-cloud transition-colors hover:border-cloud/60"
            >
              Contact Me
            </Link>
            <a
              href="/resume/Rashid-Iddi-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-2 py-3 font-mono text-xs uppercase font-mono-tag tracking-widest text-cloud/60 transition-colors hover:text-cloud"
            >
              <FileDown size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative self-start rounded-2xl border border-cloud/10 bg-ink-soft/80 p-5 shadow-2xl shadow-black/30 md:mt-4"
        >
          <div className="flex items-center justify-between border-b border-cloud/10 pb-3">
            <p className="font-mono text-[11px] uppercase font-mono-tag tracking-widest text-cloud/50">
              revenue.dashboard
            </p>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-signal-bright">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-bright" />
              live
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Stat label="Monthly profit" value="+18.4%" />
            <Stat label="Active orders" value="1,204" />
          </div>

          <div className="mt-5 flex h-28 items-end gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.06, ease: "easeOut" }}
                className={`flex-1 rounded-t-sm ${i === bars.length - 2 ? "bg-amber" : "bg-signal/70"
                  }`}
              />
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase font-mono-tag tracking-widest text-cloud/40">
            sales · last 7 days
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-cloud/5 p-3">
      <p className="font-mono text-[10px] uppercase font-mono-tag tracking-widest text-cloud/45">{label}</p>
      <p className="mt-1 font-display text-xl font-semibold text-cloud">{value}</p>
    </div>
  );
}
