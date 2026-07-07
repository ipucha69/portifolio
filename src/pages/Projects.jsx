import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";

export default function Projects() {
  return (
    <>
      <section className="border-b border-ink/8 bg-ink py-20 text-cloud">
        <div className="mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal-bright"
          >
            [ projects ]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Four systems, four different problems solved.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-xl text-cloud/65"
          >
            Each one started as a real business need — inventory that had to
            be trusted, scores that had to be live, volunteers that had to be
            organized, patients that had to be scheduled without conflicts.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.slug} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
