import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, KeyRound, Copy, Check, CheckCircle2 } from "lucide-react";
import { getProjectBySlug, projects } from "../data/projects";
import CTA from "../components/CTA";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/projects" replace />;

  const { caseStudy } = project;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="border-b border-ink/8 bg-ink py-20 text-cloud">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-mono-tag tracking-widest text-cloud/50 transition-colors hover:text-signal-bright"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 font-mono text-xs uppercase font-mono-tag tracking-widest text-signal-bright"
          >
            [ {project.tag} ]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {project.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-2xl text-cloud/65"
          >
            {project.summary}
          </motion.p>

          {project.liveUrl && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-7 flex flex-wrap items-start gap-4"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-cloud transition-colors hover:bg-signal-bright"
              >
                <ExternalLink size={16} />
                View Project on Browser
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {project.demoCredentials && <DemoCredentials creds={project.demoCredentials} />}
            </motion.div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-cloud/5 px-4 py-3">
                <p className="font-display text-lg font-semibold">{m.value}</p>
                <p className="font-mono text-[10px] uppercase font-mono-tag tracking-widest text-cloud/45">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <CaseBlock label="Challenge" text={caseStudy.problem} accent="signal" />
          <CaseBlock label="Solution" text={caseStudy.approach} accent="amber" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr]">
          <CaseBlock label="Challenges along the way" text={caseStudy.challenges} />
          <CaseBlock label="Results" text={caseStudy.results} accent="signal" />
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal">
            [ what it does ]
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-ink/70">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-signal" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal">
            [ technologies ]
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {caseStudy.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/10 bg-white/60 px-3 py-1.5 font-mono text-xs uppercase font-mono-tag tracking-widest text-ink/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-ink/8 pt-8">
          <span className="font-mono text-xs uppercase font-mono-tag tracking-widest text-ink/40">
            Next project
          </span>
          <Link
            to={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-2 font-display text-lg font-semibold text-ink transition-colors hover:text-signal"
          >
            {next.name}
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}

function DemoCredentials({ creds }) {
  const [copied, setCopied] = useState(null);

  const fields = [
    { label: "Email", value: creds.email },
    { label: "Private ID", value: creds.privateId },
    { label: "Password", value: creds.password },
  ].filter((f) => f.value);

  const handleCopy = (label, value) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="rounded-xl border border-cloud/12 bg-cloud/5 px-4 py-3">
      <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-mono-tag tracking-widest text-cloud/45">
        <KeyRound size={12} />
        Demo credentials
      </p>
      <div className="mt-2 space-y-1.5">
        {fields.map((f) => (
          <div key={f.label} className="flex items-center gap-2.5">
            <span className="w-16 shrink-0 font-mono text-[11px] text-cloud/40">{f.label}</span>
            <span className="font-mono text-[13px] text-cloud/85">{f.value}</span>
            <button
              type="button"
              onClick={() => handleCopy(f.label, f.value)}
              aria-label={`Copy ${f.label}`}
              className="text-cloud/35 transition-colors hover:text-signal-bright"
            >
              {copied === f.label ? <Check size={13} /> : <Copy size={13} />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseBlock({ label, text, accent }) {
  const accentClass = accent === "signal" ? "text-signal" : accent === "amber" ? "text-amber" : "text-ink/40";
  return (
    <div>
      <p className={`font-mono text-xs uppercase font-mono-tag tracking-widest ${accentClass}`}>{label}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{text}</p>
    </div>
  );
}