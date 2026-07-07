import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-ink/8 bg-white/60 p-7 transition-colors hover:border-signal/40 hover:bg-white"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-[11px] uppercase font-mono-tag tracking-widest text-signal">
            {project.tag}
          </span>
          <ArrowUpRight
            size={18}
            className="mt-0.5 shrink-0 text-ink/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
          />
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-3 border-t border-ink/8 pt-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="min-w-[90px]">
              <p className="font-display text-sm font-semibold text-ink">{m.value}</p>
              <p className="font-mono text-[10px] uppercase font-mono-tag tracking-widest text-ink/40">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full bg-ink/5 px-2.5 py-1 font-mono text-[10px] uppercase font-mono-tag tracking-widest text-ink/50"
            >
              {s}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
