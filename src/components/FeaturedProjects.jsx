import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal">
            [ selected work ]
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Systems built for real businesses.
          </h2>
        </div>
        <Link
          to="/projects"
          className="group hidden items-center gap-1.5 font-mono text-xs uppercase font-mono-tag tracking-widest text-ink/60 transition-colors hover:text-signal sm:inline-flex"
        >
          All projects
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard project={project} index={i} key={project.slug} />
        ))}
      </div>

      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase font-mono-tag tracking-widest text-ink/60 transition-colors hover:text-signal sm:hidden"
      >
        All projects
        <ArrowUpRight size={14} />
      </Link>
    </section>
  );
}
